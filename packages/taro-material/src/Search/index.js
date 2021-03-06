import Taro from '@tarojs/taro';
import { View, Text, Input } from '@tarojs/components';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import AtIcon from '../components/icon/index';
import RMIcon from '../Icon';
import AtComponent from '../common/component';

import theme from '../styles/theme';

import './Search.scss';

const defaultFunc = () => {};

export default class RMSearch extends AtComponent {
  constructor(props) {
    super(...arguments);
    this.state = {
      isFocus: props.focus,
    };
  }

  handleFocus(e) {
    this.setState({
      isFocus: true,
    });
    this.props.onFocus(e, ...arguments);
  }

  handleBlur(e) {
    this.setState({
      isFocus: false,
    });
    this.props.onBlur(e, ...arguments);
  }

  handleChange(e) {
    this.props.onChange(e.target.value, e, ...arguments);
  }

  handleClear(e) {
    this.props.onChange('', e, ...arguments);
    this.props.onClear();
  }

  handleConfirm(e) {
    this.props.onConfirm(e, ...arguments);
  }

  handleActionClick(e) {
    this.props.onActionClick(e);
  }

  render() {
    const {
      value,
      placeholder,
      maxlength,
      fixed,
      focus,
      disabled,
      showActionButton,
      actionName,
      className,
      customStyle,
      color,
      square,
    } = this.props;
    const { isFocus } = this.state;

    const placeholderStyle = {};
    const actionStyle = {};
    if (isFocus || (!isFocus && value)) {
      placeholderStyle.width = `${(placeholder.length + 2.5) * 14}px`;
      actionStyle.opacity = 1;
      actionStyle.marginRight = `0`;
    } else if (!isFocus && !value) {
      placeholderStyle.width = '100%';
      actionStyle.opacity = 0;
      actionStyle.marginRight = `-${(actionName.length + 1) * 14 + 7}px`;
    }
    if (showActionButton) {
      actionStyle.opacity = 1;
      actionStyle.marginRight = `0`;
    }
    let _color = '';
    if (color && color.length >= 1) {
      _color = color.charAt(0).toUpperCase() + color.substring(1);
    }
    let hint = null;
    if (color === 'action' || color === 'disabled' || color === 'default') {
      hint = theme.palette.text.hint;
    } else if (color === 'inherit') {
      hint = 'inherit';
    } else {
      hint = theme.palette.text.hint2;
    }
    return (
      <View
        className={classNames(
          {
            'at-search-bar': true,
            'at-search-bar--fixed': fixed,
            [`color${_color}`]: color !== 'inherit',
          },
          className,
        )}
        style={customStyle}
      >
        <View
          className={classNames({
            'at-search-bar__container': true,
            rounded: !square,
          })}
        >
          <View className="at-search-bar__placeholder_wrap" style={placeholderStyle}>
            <RMIcon fontSize={15} fill={hint}>
              search
            </RMIcon>
            <Text
              className="at-search-bar__placeholder"
              style={value.length ? 'visibility: hidden;' : 'visibility: visible;'}
            >
              {placeholder}
            </Text>
          </View>
          <Input
            className="at-search-bar__input"
            type="search"
            value={value}
            focus={focus}
            disabled={disabled}
            maxlength={maxlength}
            onInput={this.handleChange.bind(this)}
            onFocus={this.handleFocus.bind(this)}
            onBlur={this.handleBlur.bind(this)}
            onConfirm={this.handleConfirm.bind(this)}
          />
          <View
            className="at-search-bar__clear"
            style={value.length ? 'display: flex;' : 'display: none;'}
            onTouchStart={this.handleClear.bind(this)}
          >
            <RMIcon fontSize={15} fill={hint}>
              cancel
            </RMIcon>
          </View>
        </View>
        <View
          className="at-search-bar__action"
          onClick={this.handleActionClick.bind(this)}
          style={actionStyle}
        >
          {actionName}
        </View>
      </View>
    );
  }
}

RMSearch.defaultProps = {
  value: '',
  placeholder: '搜索',
  maxlength: 140,
  fixed: false,
  focus: false,
  disabled: false,
  showActionButton: false,
  actionName: '搜索',
  onChange: defaultFunc,
  onFocus: defaultFunc,
  onBlur: defaultFunc,
  onConfirm: defaultFunc,
  onActionClick: defaultFunc,
  onClear: defaultFunc,
  color: 'default',
  square: false,
};

RMSearch.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  maxlength: PropTypes.number,
  fixed: PropTypes.bool,
  focus: PropTypes.bool,
  disabled: PropTypes.bool,
  showActionButton: PropTypes.bool,
  actionName: PropTypes.string,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onConfirm: PropTypes.func,
  onActionClick: PropTypes.func,
  onClear: PropTypes.func,
  color: PropTypes.oneOf([
    'default',
    'inherit',
    'primary',
    'secondary',
    'error',
    'success',
    'warning',
    'progress',
  ]),
  square: PropTypes.bool,
};
