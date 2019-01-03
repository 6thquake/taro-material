import Taro, { Component } from '@tarojs/taro';
import PropTypes from 'prop-types';
import { View, Image, Label } from '@tarojs/components';
import classNames from 'classnames';

import RMIcon from '../Icon';
import RMTypography from '../Typography';

import theme from '../styles/theme';

import './Upload.scss';

function uploadFile(url, item, params, resolve, reject) {
  if (Upload.queue > 10) {
    return setTimeout(() => {
      uploadFile(url, item, params, resolve, reject);
    }, 100);
  }

  Taro.uploadFile({
    url,
    filePath: item,
    name: 'file',
    formData: params,
    // success (res) {
    //   //去掉微信返回的url多出的引号
    //   let data = res.data.slice(1, -1);
    //   resolve(data);
    // },
    fail(res) {
      reject(res);
    },
    complete(res) {
      if ((res.statusCode >= 200 && res.statusCode < 300) || res.statusCode === 304) {
        // 去掉微信返回的url多出的引号
        const data = res.data.slice(1, -1);
        resolve(data);
      } else {
        reject(res);
      }

      Upload.queue--;
    },
  });
}

class Upload extends Component {
  static queue = 0;

  constructor(props) {
    super(props);
    this.state = {
      files: [],
    };
    this.files = [];
  }

  handleDelete = (item, e) => {
    const { disabled } = this.props;
    if (disabled) {
      return;
    }

    const { files } = this.state;

    let indexToDelete = files.indexOf(item);
    if (indexToDelete !== -1) {
      files.splice(indexToDelete, 1);
    }

    indexToDelete = this.files.indexOf(item);
    if (indexToDelete !== -1) {
      this.files.splice(indexToDelete, 1);
    }

    this.setState({
      files: files.slice(),
    });

    if (this.props.onDelete) {
      this.props.onDelete(item);
    }

    e && e.stopPropagation();
  };

  /* 通过点击Input标签添加图片 */
  chooseImage = e => {
    const { disabled } = this.props;

    if (disabled) {
      return;
    }

    let { maxLength, multiple } = this.props;
    const { length } = this.files;
    if (multiple) {
      if (!maxLength) {
        maxLength = 2;
      }
    } else {
      maxLength = 1;
    }

    const count = maxLength - length;
    Taro.chooseImage({
      count,
      success: res => {
        const tempFilePaths = res.tempFilePaths;

        for (let i = 0; i < tempFilePaths.length; i++) {
          const file = tempFilePaths[i];
          this.pathHandler(file);
        }
      },
      fail() {},
    });
  };

  preview = item => {
    Taro.previewImage({
      current: item, // 当前显示图片的http链接
      urls: [item], // 需要预览的图片http链接列表
      success() {},
      fail() {},
    });
  };

  pathHandler(file) {
    if (!file) {
      return;
    }

    const _files = this.files;

    if (_files.indexOf(file) > -1) {
      return;
    }

    let { maxLength, multiple } = this.props;
    if (multiple) {
      if (!maxLength) {
        maxLength = 2;
      }
    } else {
      maxLength = 1;
    }

    if (!multiple) {
      const { files } = this.state;
      if (files.length > 0) {
        for (let i = 0; i < files.length; i++) {
          const file = files[i];
          this.handleDelete(null, file);
        }
      }
    }

    const { length } = _files;

    if (length >= maxLength) {
      Taro.showModal({
        title: '提示',
        content: `最多只允许传递${maxLength}个文件!`,
        showCancel: false,
        confirmText: 'OK',
        confirmColor: theme.palette.primary.main,
        success(res) {},
      });
      return;
    }

    this.setState(preState => ({
      files: multiple ? [...preState.files, file] : [file],
    }));
    this.files = multiple ? [...this.files, file] : [file];
  }

  upload = (url, params) => {
    const { disabled } = this.props;
    const { files } = this.state;

    if (disabled || !url || !files || files.length <= 0) {
      return Promise.resolve([]);
    }

    return Promise.all(
      files.map(
        (item, index) =>
          new Promise((resolve, reject) => {
            Upload.queue++;
            uploadFile(url, item, params, resolve, reject);
          }),
      ),
    );
  };

  componentDidMount() {
    const { files, onComponentDidMount } = this.props;
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      this.pathHandler(file);
    }
    onComponentDidMount(this);
  }

  componentDidUpdate(prevProps, prevState) {
    const { onChange, disabled } = this.props;

    if (!disabled && prevState.files != this.state.files) {
      onChange(this.state.files);
    }
  }

  reset = () => {
    const { files } = this.state;
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      this.handleDelete(file);
    }
    Upload.queue = 0;
  };

  render() {
    const {
      multiple,
      disabled,
      label,
      placeholder,
      required,
      helperText,
      helperTextStyle,
      helperTextClass,
      square,
    } = this.props;
    const { files } = this.state;
    const { length } = files;
    let { maxLength } = this.props;

    if (multiple) {
      if (!maxLength) {
        maxLength = 2;
      }
    } else {
      maxLength = 1;
    }

    return (
      <View
        className={classNames({
          container: true,
          rounded: !square,
        })}
      >
        {label && (
          <Label className="title">
            <RMTypography className="subheading" color="inherit" block>
              {label}
            </RMTypography>
            <View className="required">
              <RMTypography className="subheading" color="inherit">
                {required ? '*' : ''}
              </RMTypography>
            </View>
          </Label>
        )}
        <View className="array" disabled={disabled}>
          {files.map(item => {
            const url = `${item}`;
            return (
              <View key={url} className="chip" onClick={this.preview.bind(this, url)}>
                <View className="media" style={{ backgroundImage: `url(${url})` }}>
                  <Image className="media" src={url} />
                  <View className="close" onClick={this.handleDelete.bind(this, url)}>
                    <RMIcon fontSize={16} color="default" block>
                      close
                    </RMIcon>
                  </View>
                </View>
              </View>
            );
          })}
          {(multiple || length <= 0) &&
            length < maxLength && (
              <View className="clickToUpload" onClick={this.chooseImage}>
                <View className="add">
                  <RMIcon fontSize={28} color="default" block>
                    add
                  </RMIcon>
                </View>
                <View className="uploadText">{placeholder}</View>
              </View>
            )}
        </View>
        <View
          className={classNames({
            'helper-text': true,
            [helperTextClass]: !!helperTextClass,
          })}
        >
          {helperText && (
            <View className="helper-text-icon">
              <RMIcon color="inherit" fontSize="default" block>
                warning
              </RMIcon>
            </View>
          )}
          <RMTypography color="inherit" className="caption" block>
            {helperText || ''}
          </RMTypography>
        </View>
      </View>
    );
  }
}

Upload.defaultProps = {
  acceptType: '*/*',
  multiple: true,
  disabled: false,
  files: [],
  onChange: files => {},
  onDelete: file => {},
  label: 'upload',
  name: '',
  maxLength: 9,
  required: false,
  placeholder: '',
  helperText: '',
  helperTextStyle: '',
  helperTextClass: '',
  onComponentDidMount: () => {},
  square: false,
};

export default Upload;
