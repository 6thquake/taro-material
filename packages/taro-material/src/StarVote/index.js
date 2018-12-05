import Taro, { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import RMIcon from '../Icon';
import RMTypography from '../Typography';

import './index.scss';

class StarVote extends Component {
  render() {
    let {
      count,
      value,
      defaultValue,
      allowHalf,
      color,
      size,
      disabled,
      className,
      showValue,
      customStyle,
    } = this.props;

    if (!value && value != 0) {
      value = defaultValue;
    }

    let full = 0;
    let half = 0;
    let empty = 0;
    if (value >= count) {
      full = count;
    } else if (value <= 0) {
      empty = count;
    } else {
      full = Math.floor(value);
      const decr = value - full;
      if (decr < 0.25) {
        half = 0;
      } else if (decr < 0.75) {
        half = 1;
      } else {
        full++;
      }
      empty = count - full - half;
    }

    const fulls = [];
    const halfs = [];
    const emptis = [];
    for (let i = full; i > 0; i--) {
      fulls.push(i);
    }
    for (let i = half; i > 0; i--) {
      halfs.push(i);
    }
    for (let i = empty; i > 0; i--) {
      emptis.push(i);
    }

    return (
      <View
        className={classNames(
          {
            stars: true,
            [`${size}`]: true,
          },
          className,
        )}
        style={customStyle}
      >
        {fulls.map(item => (
          <RMIcon fontSize="inherit" color={color}>
            star
          </RMIcon>
        ))}
        {halfs.map(item => (
          <RMIcon fontSize="inherit" color={color}>
            star_half
          </RMIcon>
        ))}
        {emptis.map(item => (
          <RMIcon fontSize="inherit" color={color}>
            star_border
          </RMIcon>
        ))}
        {showValue && (
          <RMTypography className="caption" fontSize="inherit" color="inherit">
            {value}
          </RMTypography>
        )}
      </View>
    );
  }
}
StarVote.propTypes = {
  /**
   *  total count of star
   */
  count: PropTypes.number,
  /**
   *   current value，controlled value
   */
  value: PropTypes.number,
  /**
   *   The default value
   */
  defaultValue: PropTypes.number,
  /**
   * onChange callback function
   */
  onChange: PropTypes.func,
  /**
   * if allowed half
   */
  allowHalf: PropTypes.bool,
  /**
   * read only,can not interact
   */
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(['large', 'medium', 'normal', 'small', 'xs']),
  /**
   * enum: 'inherit', 'primary', 'secondary', 'action', 'error', 'disabled', 'success', 'warning', 'progress', 'default'
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: PropTypes.oneOf([
    'inherit',
    'primary',
    'secondary',
    'action',
    'error',
    'disabled',
    'success',
    'warning',
    'progress',
    'default',
  ]),
  showValue: PropTypes.bool,
  customStyle: PropTypes.object,
};
StarVote.defaultProps = {
  count: 5,
  value: 0,
  defaultValue: 0,
  allowHalf: false,
  disabled: false,
  size: 'normal',
  /**
   * enum: 'inherit', 'primary', 'secondary', 'action', 'error', 'disabled', 'success', 'warning', 'progress', 'default'
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: 'inherit',
  showValue: true,
  customStyle: {},
};

export default StarVote;
