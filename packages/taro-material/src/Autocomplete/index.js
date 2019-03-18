import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import PropTypes from 'prop-types';

import RMDropdown from '../Dropdown';
import RMTextField from '../TextField';

// import theme from '../styles/theme'

import './index.scss';

class RMAutocomplete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  componentWillMount() {}

  handleClick = e => {
    this.props.onChange(e);
    this.setState({
      open: false,
    });
  };

  handleChange = e => {
    this.props.onFilterChange(e);
    this.setState({
      open: true,
    });
  };

  handleFocus = () => {
    this.props.onFocus();
    this.setState({
      open: true,
    });
  };
  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    const { open } = this.state;
    const {
      disabled,
      InputProps,
      options,
      value,
      editable,
      customStyle,
      DropdownProps,
    } = this.props;
    const {
      startAdornment,
      endAdornment,
      required,
      name,
      title,
      placeholder,
      type,
      helperText,
      helperTextClass,
      helperTextStyle,
    } = InputProps;
    const {
      customStyle: dropDownStyle,
      maskStyle,
      scrollDropDownStyle,
      listStyle,
      scrollable,
    } = DropdownProps;
    return (
      <View className="root" customStyle={customStyle}>
        <RMDropdown
          renderHeader={
            <View className="content">
              <RMTextField
                name={name}
                title={title}
                type={type}
                placeholder={placeholder}
                value={InputProps.value}
                // onBlur={this.handleBlur}
                onChange={this.handleChange.bind(value)}
                startAdornment={startAdornment}
                endAdornment={endAdornment}
                editable={editable}
                required={required}
                helperText={helperText}
                helperTextClass={helperTextClass}
                disabled={disabled}
                helperTextStyle={helperTextStyle}
                onFocus={this.handleFocus}
              />
            </View>
          }
          isOpened={open && options.length > 0}
          scrollable={scrollable}
          options={options}
          value={value}
          onChange={this.handleClick}
          onClose={this.handleClose}
          customStyle={dropDownStyle}
          maskStyle={maskStyle}
          listStyle={listStyle}
          scrollDropDownStyle={scrollDropDownStyle}
        />
      </View>
    );
  }
}

RMAutocomplete.defaultProps = {
  InputProps: {},
  DropdownProps: {},
  onChange: () => {},
  onFilterChange: () => {},
  options: [],
  value: '',
  onClose: () => {},
  onOpen: () => {},
  onFocus: () => {},
  editable: true,
  disabled: false,
};

RMAutocomplete.propTypes = {
  options: PropTypes.array,
  InputProps: PropTypes.object,
  onChange: PropTypes.func,
  onClose: PropTypes.func,
  onOpen: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  disabled: PropTypes.bool,
  editable: PropTypes.bool,
  DropdownProps: PropTypes.object,
};

export default RMAutocomplete;
