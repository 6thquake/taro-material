import Taro, { Component } from '@tarojs/taro';
import { View, ScrollView } from '@tarojs/components';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import RMIcon from '../Icon';
import RMTypography from '../Typography';
import theme from '../styles/theme';

import './Dropdown.scss';

export default class Dropdown extends Component {
  handleClick(option) {
    if (option.disabled) return;
    this.props.onChange(option.value, ...arguments);
  }
  handleClose = e => {
    this.props.onClose(e);
  };
  render() {
    const {
      customStyle,
      className,
      options,
      value,
      color,
      scrollable,
      isOpened,
      scrollDropDownStyle,
      maskStyle,
      listStyle,
    } = this.props;
    const radioStyle = {
      ...listStyle,
    };
    if (scrollable) {
      radioStyle.boxShadow = theme.shadows[0];
    }
    const Content = (
      <View className={classNames('at-radio', className)} style={radioStyle}>
        {options.map(option => {
          const active = value === option.value;
          return (
            <View
              key={option.value}
              onClick={this.handleClick.bind(this, option)}
              className={classNames({
                'at-radio__option': true,
                'at-radio__option--disabled': option.disabled,
                'at-radio__option--active': active,
                [color]: true,
              })}
            >
              <View className="at-radio__option_wrap">
                <View className="at-radio__option_container">
                  <View className="at-radio__title">
                    <RMTypography className="body1" color="inherit">
                      {option.label}
                    </RMTypography>
                  </View>
                  <View
                    className={classNames({
                      'at-radio__icon': true,
                      'at-radio__icon--checked': active,
                    })}
                  >
                    <RMIcon fontSize={20} color="inherit" block>
                      check
                    </RMIcon>
                  </View>
                </View>
                {option.desc ? (
                  <View className="at-radio__desc">
                    <RMTypography className="caption">{option.desc}</RMTypography>
                  </View>
                ) : null}
              </View>
            </View>
          );
        })}
      </View>
    );

    return (
      <View className="root" style={customStyle}>
        <View className="header">{this.props.renderHeader}</View>
        {isOpened && (
          <View>
            <View>
              {scrollable ? (
                <ScrollView
                  style={scrollDropDownStyle}
                  className="dropdown"
                  scrollY
                  scrollWithAnimation
                  scrollTop="0"
                >
                  {Content}
                </ScrollView>
              ) : (
                Content
              )}
            </View>
            {<View onClick={this.handleClose} style={maskStyle} className="mask" />}
          </View>
        )}
      </View>
    );
  }
}

Dropdown.defaultProps = {
  isOpened: false,
  customStyle: '',
  className: '',
  value: '',
  options: [],
  onClick: () => {},
  onClose: () => {},
  color: 'default',
  scrollable: false,
  renderHeader: null,
  scrollDropDownStyle: {},
  maskStyle: {},
  listStyle: {},
};

Dropdown.propTypes = {
  isOpened: PropTypes.bool,
  scrollable: PropTypes.bool,
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  listStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  maskStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  scrollDropDownStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),

  className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  value: PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.string]),
  options: PropTypes.array,
  onChange: PropTypes.func,
  onClose: PropTypes.func,
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
};
