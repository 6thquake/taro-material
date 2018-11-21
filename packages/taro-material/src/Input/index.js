import Taro, { Component } from '@tarojs/taro';
import { View, Input, Label } from '@tarojs/components';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import RMIcon from '../Icon';
import RMTypography from '../Typography';

import theme from '../styles/theme';

const defaultFunc = () => {};

class RMInput extends Component {
  onInput(e) {
    this.props.onChange(e.target.value, ...arguments);
  }

  onFocus(e) {
    this.setState({
      focus: true,
    });
    this.props.onFocus(e.target.value, ...arguments);
  }

  onBlur(e) {
    this.setState({
      focus: false,
    });
    this.props.onBlur(e.target.value, ...arguments);
  }

  onConfirm(e) {
    this.props.onConfirm(e.target.value, ...arguments);
  }

  onClick(e) {
    !this.props.editable && this.props.onClick(e, ...arguments);
  }

  clearValue() {
    this.props.onChange('', ...arguments);
  }

  onErrorClick() {
    this.props.onErrorClick(...arguments);
  }

  componentWillMount() {
    const { disabled, editable, readOnlyStyle } = this.props;

    if (!disabled && !editable) {
      this.setState({
        readOnly: readOnlyStyle === 'normal',
      });
    }
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    const {
      className,
      customStyle,
      name,
      cursorSpacing,
      confirmType,
      cursor,
      selectionStart,
      selectionEnd,
      adjustPosition,
      border,
      title,
      editable,
      error,
      clear,
      placeholder,
      placeholderStyle,
      placeholderClass,
      autoFocus,
      value,
      readOnlyStyle,
      startAdornment,
      endAdornment,
      required,
      helperText,
      helperTextClass,
    } = this.props;
    let { maxlength, type, disabled } = this.props;
    const { readOnly, focus } = this.state;

    if (type === 'phone') {
      maxlength = 11;
      type = 'number';
    }

    if (!disabled && !editable) {
      disabled = true;
    }

    console.log(!error && !disabled && !readOnly && focus);

    return (
      <View className="at-input__root">
        <View
          className={classNames(
            {
              'at-input': true,
              'at-input--without-border': !border,
            },
            className,
          )}
          style={customStyle}
        >
          <View
            className={classNames({
              'at-input__container': true,
              'at-input--error': error,
              'at-input--disabled': disabled,
              'at-input--readonly': readOnly,
              'at-input--focus': !error && !disabled && !readOnly && focus,
            })}
            onClick={this.onClick.bind(this)}
          >
            {title && (
              <Label className="at-input__title" for={name}>
                <RMTypography className="body1" color="inherit" block={true}>
                  {title}
                </RMTypography>
                <View className="at-input__required">
                  <RMTypography className="body1" color="inherit">
                    {required ? '*' : ''}
                  </RMTypography>
                </View>
              </Label>
            )}
            <View className="at-input__box">
              {startAdornment && (
                <View className="at-input__start-adornment">
                  <RMTypography className="body2" color="inherit">
                    {startAdornment}
                  </RMTypography>
                </View>
              )}
              <Input
                className="at-input__input"
                id={name}
                name={name}
                type={type}
                placeholderStyle={placeholderStyle}
                placeholderClass={classNames('placeholder', placeholderClass)}
                placeholder={placeholder}
                cursorSpacing={cursorSpacing}
                maxlength={maxlength}
                autoFocus={autoFocus}
                value={value}
                confirmType={confirmType}
                cursor={cursor}
                selectionStart={selectionStart}
                selectionEnd={selectionEnd}
                adjustPosition={adjustPosition}
                disabled={disabled}
                onInput={this.onInput.bind(this)}
                onChange={this.onInput.bind(this)}
                onFocus={this.onFocus.bind(this)}
                onBlur={this.onBlur.bind(this)}
                onConfirm={this.onConfirm.bind(this)}
              />
              {clear &&
                value && (
                  <View className="at-input__icon" onTouchStart={this.clearValue.bind(this)}>
                    <RMIcon color="default" fontSize="default">
                      cancel
                    </RMIcon>
                  </View>
                )}
              {error && (
                <View className="at-input__icon" onTouchStart={this.onErrorClick.bind(this)}>
                  <RMIcon color="error" fontSize="default">
                    error
                  </RMIcon>
                </View>
              )}
              {endAdornment && (
                <View className="at-input__end-adornment">
                  <RMTypography className="body2" color="inherit">
                    {endAdornment}
                  </RMTypography>
                </View>
              )}
              <View className="at-input__children">{this.props.children}</View>
            </View>
            <View
              className={classNames({
                'at-input__desc': true,
                [helperTextClass]: !!helperTextClass,
              })}
            >
              {helperText && (
                <View className="at-input__desc_icon">
                  <RMIcon color="inherit" fontSize="default" block={true}>
                    warning
                  </RMIcon>
                </View>
              )}
              <RMTypography color="inherit" className="caption" block={true}>
                {helperText || ''}
              </RMTypography>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

RMInput.defaultProps = {
  className: '',
  customStyle: '',
  value: '',
  name: '',
  placeholder: '',
  placeholderStyle: '',
  placeholderClass: '',
  title: '',
  cursorSpacing: 50,
  confirmType: '完成',
  cursor: 0,
  selectionStart: -1,
  selectionEnd: -1,
  adjustPosition: true,
  maxlength: 140,
  type: 'text',
  disabled: false,
  border: true,
  editable: true,
  error: false,
  clear: false,
  autoFocus: false,
  onChange: defaultFunc,
  onFocus: defaultFunc,
  onBlur: defaultFunc,
  onConfirm: defaultFunc,
  onErrorClick: defaultFunc,
  onClick: defaultFunc,
  readOnlyStyle: 'disabled',
  startAdornment: null,
  endAdornment: null,
  required: false,
  helperText: '',
  helperTextStyle: '',
  helperTextClass: '',
};

RMInput.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  customStyle: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string,
  placeholder: PropTypes.string,
  placeholderStyle: PropTypes.string,
  placeholderClass: PropTypes.string,
  title: PropTypes.string,
  confirmType: PropTypes.string,
  cursor: PropTypes.number,
  selectionStart: PropTypes.number,
  selectionEnd: PropTypes.number,
  adjustPosition: PropTypes.bool,
  cursorSpacing: PropTypes.number,
  maxlength: PropTypes.number,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  border: PropTypes.bool,
  editable: PropTypes.bool,
  error: PropTypes.bool,
  clear: PropTypes.bool,
  backgroundColor: PropTypes.string,
  autoFocus: PropTypes.bool,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onConfirm: PropTypes.func,
  onErrorClick: PropTypes.func,
  onClick: PropTypes.func,
  readOnlyStyle: PropTypes.string,
  startAdornment: PropTypes.string,
  endAdornment: PropTypes.string,
  required: PropTypes.bool,
  helperText: PropTypes.string,
  helperTextStyle: PropTypes.string,
  helperTextClass: PropTypes.string,
};

export default RMInput;
