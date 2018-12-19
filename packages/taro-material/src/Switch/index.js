import Taro, { Component } from '@tarojs/taro';
import PropTypes from 'prop-types';
import { View, Switch, Label } from '@tarojs/components';
import classNames from 'classnames';

import RMIcon from '../Icon';
import RMTypography from '../Typography';

import theme from '../styles/theme';

import './index.scss';

class RMSwitch extends Component {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  handleChange(e) {
    const { value, onChange } = this.props;
    onChange && onChange(e.target.value, value, e);
  }

  render() {
    const {
      value,
      color,
      checked,
      disabled,
      customStyle,
      className,
      title,
      required,
      helperText,
      helperTextClass,
      helperTextStyle,
    } = this.props;

    let _color = null;
    if (color === 'default') {
      _color = theme.palette.grey[500];
    } else {
      _color = theme.palette[color].main;
    }

    return (
      <View
        className={classNames(
          {
            'at-switch': true,
          },
          className,
        )}
        style={customStyle}
      >
        <View
          className={classNames({
            'at-switch__container': true,
            'at-switch--disabled': disabled,
          })}
        >
          {title && (
            <Label className="at-switch__title">
              <RMTypography className="subheading" color="inherit" block>
                {title}
              </RMTypography>
              <View className="at-switch__required">
                <RMTypography className="subheading" color="inherit">
                  {required ? '*' : ''}
                </RMTypography>
              </View>
            </Label>
          )}
          <Switch
            className="at-switch__switch"
            color={_color}
            value={value}
            checked={checked}
            disabled={disabled}
            onChange={this.handleChange.bind(this)}
          />
          <View className="at-switch__mask" />
        </View>

        <View
          className={classNames({
            'at-switch__desc': true,
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
        </View>
      </View>
    );
  }
}

RMSwitch.propTypes = {
  value: PropTypes.string,
  color: PropTypes.oneOf([
    'default',
    'primary',
    'secondary',
    'error',
    'success',
    'warning',
    'progress',
  ]),
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  customStyle: PropTypes.object,
  title: PropTypes.string,
  required: PropTypes.bool.isRequired,
  helperText: PropTypes.string,
  helperTextClass: PropTypes.string,
  helperTextStyle: PropTypes.object,
};

RMSwitch.defaultProps = {
  customStyle: {},
  value: '',
  color: 'primary',
  disabled: false,
  checked: false,
  title: '',
  helperText: '',
  required: false,
  onChange: () => {},
};

export default RMSwitch;
