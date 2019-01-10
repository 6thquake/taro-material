import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import PropTypes from 'prop-types';

import AtModal from '../components/modal';
import AtModalContent from '../components/modal/content';
import AtRadio from '../components/radio';

import RMTextField from '../TextField';

class AsyncSelect extends Component {
  state = {
    open: false,
  };

  componentWillReceiveProps(nextProps) {
    // const { onChange } = this.props
    // const option = this.initOption(nextProps)
    // this.setState({
    //   option,
    // })
    // option && onChange && onChange(option.value)
  }

  componentDidMount() {
    const { onChange } = this.props;
    const option = this.initOption(this.props);
    this.setState({
      option,
    });
    option && onChange && onChange(option.value);
  }

  initOption = props => {
    const { value, options } = props;
    const option = options.filter(item => item.value === value)[0];
    return option || options[0];
  };

  handleClick = e => {
    const { editable, disabled } = this.props;

    if (!editable || disabled) {
      return;
    }

    this.setState(
      {
        open: true,
      },
      () => {},
    );
  };

  handleChange = value => {
    const { onChange, options } = this.props;
    const option = options.filter(item => item.value === value)[0];
    this.setState(
      {
        option,
        open: false,
      },
      () => {
        onChange && onChange(value);
      },
    );
  };

  render() {
    const { option = {}, open } = this.state;
    const { disabled, required, name, title, placeholder, helperText, type, options } = this.props;
    return (
      <View className="root">
        <View onClick={this.handleClick}>
          <RMTextField
            name={name}
            title={title}
            type={type}
            placeholder={placeholder}
            value={option.label}
            editable={false}
            disabled={disabled}
            readOnlyStyle="normal"
            required={required}
            helperText={helperText}
          />
        </View>
        <AtModal isOpened={open}>
          <AtModalContent>
            <AtRadio options={options} value={`${option.value}`} onClick={this.handleChange} />
          </AtModalContent>
        </AtModal>
      </View>
    );
  }
}

AsyncSelect.defaultProps = {
  title: '请选择',
  name: 'select',
  placeholder: '请选择一项',
  editable: false,
  disabled: false,
  type: 'text',
  onChange: () => {},
  options: [],
  value: '',
  required: false,
  helperText: '',
};

export default AsyncSelect;
