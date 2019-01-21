import Taro, { Component } from '@tarojs/taro';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { View, Input, Label, Textarea } from '@tarojs/components';

import RMIcon from '../Icon';
import RMTypography from '../Typography';

import theme from '../styles/theme';

import './TextField.scss';

const defaultFunc = () => {};

class TextField extends Component {
  onInput(e) {
    const { multiline, count, maxlength } = this.props;
    if (multiline && count) {
      this.setState({
        _count: `${(e.target.value || '').length} / ${maxlength}`,
      });
    }
    this.props.onChange(e.target.value, ...arguments);
  }

  onLinechange(e) {
    this.props.onLinechange(e.target.lineCount, ...arguments);
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
    const { disabled, editable, readOnlyStyle, multiline, count, value, maxlength } = this.props;

    if (multiline && count) {
      this.setState({
        _count: `${(value || '').length} / ${maxlength}`,
      });
    }

    if (!disabled && !editable) {
      this.setState({
        readOnly: readOnlyStyle === 'normal',
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    const { focus } = this.props;
    if (nextProps.focus !== focus) {
      this.setState({ focus: nextProps.focus });
    }
  }

  componentDidUpdate(nextProps, nextState) {}

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
      helperTextStyle,
      multiline,
      count,
      autoHeight,
      fixed,
    } = this.props;
    let { maxlength, type, disabled } = this.props;
    const { readOnly, focus, _count } = this.state;

    if (type === 'phone') {
      maxlength = 11;
      type = 'number';
    }

    if (!disabled && !editable) {
      disabled = true;
    }

    const _title = title || name;

    const textareaStyle = {
      borderRadius: '0',
    };
    if (error) {
      textareaStyle.borderWidth = '2px';
      textareaStyle.borderColor = theme.palette.error.main;
    } else if (readOnly) {
      textareaStyle.borderWidth = '1px';
      textareaStyle.borderColor = theme.palette.text.divider;
    } else if (disabled) {
      textareaStyle.borderWidth = '1px';
      textareaStyle.borderStyle = 'dashed';
      textareaStyle.borderColor = theme.palette.text.divider;
      textareaStyle.opacity = 0.38;
    } else if (focus) {
      textareaStyle.borderWidth = '2px';
      textareaStyle.borderColor = theme.palette.primary.main;
    }

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
              'at-input--disabled': !readOnly && disabled,
              'at-input--readonly': readOnly,
              'at-input--focus': !error && !disabled && !readOnly && focus,
            })}
            onClick={this.onClick.bind(this)}
          >
            {_title && (
              <Label className="at-input__title" for={name}>
                <RMTypography className="subheading" color="inherit" block>
                  {_title}
                </RMTypography>
                <View className="at-input__required">
                  <RMTypography className="subheading" color="inherit">
                    {required ? '*' : ''}
                  </RMTypography>
                </View>
              </Label>
            )}
            <View
              className={classNames({
                'at-input__box': true,
                multiline,
              })}
            >
              {!multiline &&
                startAdornment && (
                  <View className="at-input__start-adornment">
                    <RMTypography className="body2" color="inherit">
                      {startAdornment}
                    </RMTypography>
                  </View>
                )}
              {!multiline && (
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
                  // onChange={this.onInput.bind(this)}
                  onFocus={this.onFocus.bind(this)}
                  onBlur={this.onBlur.bind(this)}
                  onConfirm={this.onConfirm.bind(this)}
                  focus={focus}
                />
              )}
              {multiline && (
                <Textarea
                  className="at-input__textarea"
                  id={name}
                  name={name}
                  placeholderClass={classNames('placeholder', placeholderClass)}
                  placeholder={placeholder}
                  cursorSpacing={cursorSpacing}
                  maxlength={maxlength}
                  autoFocus={autoFocus}
                  value={value}
                  disabled={disabled}
                  selectionStart={selectionStart}
                  selectionEnd={selectionEnd}
                  customStyle={textareaStyle}
                  onInput={this.onInput.bind(this)}
                  onFocus={this.onFocus.bind(this)}
                  onBlur={this.onBlur.bind(this)}
                  onConfirm={this.onConfirm.bind(this)}
                  onLinechange={this.onLinechange.bind(this)}
                  count
                  autoHeight
                  fixed={fixed}
                />
              )}
              {!multiline &&
                clear &&
                value && (
                  <View className="at-input__icon" onTouchStart={this.clearValue.bind(this)}>
                    <RMIcon color="default" fontSize="default">
                      cancel
                    </RMIcon>
                  </View>
                )}
              {!multiline &&
                error && (
                  <View className="at-input__icon" onTouchStart={this.onErrorClick.bind(this)}>
                    <RMIcon color="error" fontSize="default">
                      error
                    </RMIcon>
                  </View>
                )}
              {!multiline &&
                endAdornment && (
                  <View className="at-input__end-adornment">
                    <RMTypography className="body2" color="inherit">
                      {endAdornment}
                    </RMTypography>
                  </View>
                )}
              {!multiline && <View className="at-input__children">{this.props.children}</View>}
            </View>
            <View
              className={classNames({
                'at-input__desc': true,
                [helperTextClass]: !!helperTextClass,
              })}
              style={helperTextStyle}
            >
              {helperText && (
                <View className="at-input__desc_icon">
                  <RMIcon color="inherit" fontSize="default" block>
                    warning
                  </RMIcon>
                </View>
              )}
              <RMTypography color="inherit" className="caption" block>
                {helperText || ''}
              </RMTypography>

              {multiline &&
                count && (
                  <View className="auto">
                    <RMTypography color="inherit" className="caption" block>
                      {_count}
                    </RMTypography>
                  </View>
                )}
            </View>
          </View>
        </View>
      </View>
    );
  }
}

TextField.defaultProps = {
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
  onLinechange: defaultFunc,
  readOnlyStyle: 'disabled',
  startAdornment: null,
  endAdornment: null,
  required: false,
  helperText: '',
  helperTextStyle: {},
  helperTextClass: '',
  multiline: false,
  autoHeight: true,
  count: true,
  fixed: false,
};

TextField.propTypes = {
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
  onLinechange: PropTypes.func,
  readOnlyStyle: PropTypes.string,
  startAdornment: PropTypes.string,
  endAdornment: PropTypes.string,
  required: PropTypes.bool,
  helperText: PropTypes.string,
  helperTextStyle: PropTypes.object,
  helperTextClass: PropTypes.string,
  multiline: PropTypes.bool,
  autoHeight: PropTypes.bool,
  count: PropTypes.bool,
  fixed: PropTypes.bool,
};

export default TextField;
