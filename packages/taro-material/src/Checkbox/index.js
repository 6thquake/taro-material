import Taro, { Component } from '@tarojs/taro';
import { View, Checkbox } from '@tarojs/components';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import RMIcon from '../Icon';
import RMTypography from '../Typography';

import './index.scss';

class RMCheckbox extends Component {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  handleChange(e) {
    const { disabled, value, checked, onChange } = this.props;
    !disabled && onChange && onChange(!checked, value, e);
  }

  render() {
    const { value, color, checked, disabled, customStyle, className, icon, lable } = this.props;
    return (
      <View
        className={classNames({
          'at-selection': true,
          'at-selection--disabled': disabled,
          [color]: true,
        })}
        style={customStyle}
        onClick={this.handleChange.bind(this)}
      >
        <View className="at-selection__container">
          <View
            className={classNames({
              checkbox: true,
              checked,
            })}
          >
            {checked && (
              <RMIcon fontSize="inherit" color="inherit" block>
                {icon}
              </RMIcon>
            )}
          </View>
        </View>
        {
          <RMTypography className="subheading" color="inherit" block>
            {lable || ''}
            {this.props.children}
          </RMTypography>
        }
        <Checkbox
          className="at-selection__selection"
          value={value}
          checked={checked}
          disabled={disabled}
          style={{ opacity: 0 }}
          // onChange={this.handleChange.bind(this)}
        />
        <View className="at-selection__mask" />
      </View>
    );
  }
}

RMCheckbox.propTypes = {
  value: PropTypes.oneOf([PropTypes.object, PropTypes.string, PropTypes.number]),
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
  required: PropTypes.bool,
  icon: PropTypes.string,
  lable: PropTypes.string,
};

RMCheckbox.defaultProps = {
  customStyle: {},
  value: null,
  color: 'primary',
  disabled: false,
  checked: false,
  icon: 'check',
  onChange: () => {},
};

export default RMCheckbox;
