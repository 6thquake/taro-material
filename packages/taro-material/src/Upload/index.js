import Taro, { Component } from '@tarojs/taro';
import PropTypes from 'prop-types';
import { View, Image, Label } from '@tarojs/components';
import classNames from 'classnames';

import RMIcon from '../Icon';
import RMTypography from '../Typography';

import theme from '../styles/theme';

import './Upload.scss';

function uploadFile(url, item, params, resolve, reject) {
  if (RMUpload.queue > 10) {
    return setTimeout(() => {
      uploadFile(url, item, params, resolve, reject);
    }, 300);
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

      RMUpload.queue--;
    },
  });
}

class RMUpload extends Component {
  static queue = 0;

  constructor(props) {
    super(props);
    this.state = {
      _files: [],
    };
    this._files = [];
  }

  componentWillReceiveProps(nextProps) {
    const { files } = this.props;
    if (files !== nextProps.files) {
      this.reset();
      this.init(nextProps.files);
    }
  }

  componentDidMount() {
    // this.init()
    const { onComponentDidMount } = this.props;
    onComponentDidMount && onComponentDidMount(this);
  }

  componentDidUpdate(prevProps, prevState) {
    const { onChange, disabled } = this.props;

    if (!disabled && prevState._files !== this.state._files) {
      onChange(this.state._files);
    }
  }

  init(files) {
    const _files = files || this.props.files;
    for (let i = 0; i < _files.length; i++) {
      this.pathHandler(_files[i]);
    }
  }

  reset = () => {
    const { _files } = this.state;
    for (let i = _files.length - 1; i >= 0; i--) {
      const file = _files[i];
      this.handleDelete(file);
    }
    RMUpload.queue = 0;
  };

  pathHandler(file) {
    if (!file) {
      return;
    }

    const __files = this._files;

    if (__files.indexOf(file) > -1) {
      return;
    }

    const { multiple } = this.props;
    let { maxLength } = this.props;
    if (multiple) {
      if (!maxLength) {
        maxLength = 2;
      }
    } else {
      maxLength = 1;
    }

    if (!multiple) {
      const { _files } = this.state;
      if (_files.length > 0) {
        for (let i = 0; i < _files.length; i++) {
          this.handleDelete(null, _files[i]);
        }
      }
    }

    const { length } = __files;

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
      _files: multiple ? [...preState._files, file] : [file],
    }));
    this._files = multiple ? [...this._files, file] : [file];
  }

  handleDelete = (item, e) => {
    const { disabled } = this.props;
    if (disabled) {
      return;
    }

    const { _files } = this.state;

    let indexToDelete = _files.indexOf(item);
    if (indexToDelete !== -1) {
      _files.splice(indexToDelete, 1);
    }

    indexToDelete = this._files.indexOf(item);
    if (indexToDelete !== -1) {
      this._files.splice(indexToDelete, 1);
    }

    this.setState({
      _files: _files.slice(),
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

    const { multiple } = this.props;
    const { length } = this._files;
    let { maxLength } = this.props;
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

  upload = (url, params) => {
    const { disabled, files } = this.props;
    const { _files } = this.state;

    if (disabled || !url || !_files || _files.length <= 0) {
      return Promise.resolve([]);
    }

    return Promise.all(
      _files.map(
        item =>
          new Promise((resolve, reject) => {
            if (/^http(s?):\/\//g.test(item)) {
              // files.indexOf(item) !== -1
              return resolve(item);
            }

            RMUpload.queue++;
            uploadFile(url, item, params, resolve, reject);
          }),
      ),
    );
  };

  preview = item => {
    Taro.previewImage({
      current: item, // 当前显示图片的http链接
      urls: [item], // 需要预览的图片http链接列表
      success() {},
      fail() {},
    });
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
    const { _files } = this.state;
    const { length } = _files;
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
          {_files.map(item => {
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
          style={helperTextStyle}
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

RMUpload.defaultProps = {
  acceptType: '*/*',
  multiple: true,
  disabled: false,
  files: [],
  label: 'upload',
  name: '',
  maxLength: 9,
  required: false,
  placeholder: '',
  helperText: '',
  helperTextStyle: '',
  helperTextClass: '',
  square: false,
  onChange: () => {},
  onDelete: () => {},
  onComponentDidMount: () => {},
};

RMUpload.propTypes = {
  multiple: PropTypes.bool,
  disabled: PropTypes.bool,
  maxLength: PropTypes.number,
};

export default RMUpload;
