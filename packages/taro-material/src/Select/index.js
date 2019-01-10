import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import PropTypes from 'prop-types';

import NoData from '../NoData';
import RMTextField from '../TextField';

import AtFloatLayout from '../components/float-layout';
import AtRadio from '../components/radio';

class Select extends Component {
  state = {
    open: false,
  };

  handleInputClick = e => {
    const { onOpen } = this.props;
    const { editable, disabled } = this.props;

    if (!editable || disabled) {
      return;
    }
    this.setState(
      {
        open: true,
      },
      () => {
        onOpen();
      },
    );
  };

  handleChange = value => {
    const { onChange, onClose } = this.props;
    this.setState(
      {
        open: false,
      },
      () => {
        onChange(value);
        onClose();
      },
    );
  };

  handleClose = () => {
    const { onClose } = this.props;
    this.setState(
      {
        open: false,
      },
      () => {
        onClose();
      },
    );
  };

  render() {
    const { open } = this.state;
    const { disabled, InputProps, options, value, title: selectTitle } = this.props;
    const { required, name, title, placeholder, type, helperText, helperTextClass } = InputProps;
    const option = options.filter(e => e.value === value)[0];

    return (
      <View className="root">
        <View onClick={this.handleInputClick}>
          <RMTextField
            className="custome-input"
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
            helperTextClass={helperTextClass}
          />
        </View>
        <AtFloatLayout onClose={this.handleClose} isOpened={open} title={selectTitle}>
          <AtRadio options={options} value={`${value}`} onClick={this.handleChange} />
          {!(options && options.length > 0) && <NoData />}
        </AtFloatLayout>
      </View>
    );
  }
}

Select.defaultProps = {
  InputProps: {},
  onChange: () => {},
  options: [],
  value: '',
  onClose: () => {},
  onOpen: () => {},
  editable: true,
  disabled: false,
};
Select.propTypes = {
  options: PropTypes.array,
  InputProps: PropTypes.object,
  onChange: PropTypes.func,
  onClose: PropTypes.func,
  onOpen: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  disabled: PropTypes.bool,
  editable: PropTypes.bool,
};

export default Select;
