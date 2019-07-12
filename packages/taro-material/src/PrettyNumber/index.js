import Taro, { Component } from '@tarojs/taro';
import { Text } from '@tarojs/components';
import PropTypes from 'prop-types';

import { RMTypography } from '../Typography';

import { format } from '../utils/math';

class RMPrettyNumber extends Component {
  render() {
    const { className, value, digits, fontSize, color, prefix, suffix, customStyle } = this.props;

    const nums = format(value * 1, digits).split('.');

    return (
      <RMTypography className={className} color={color} customStyle={customStyle}>
        <Text style={{ fontSize: `${fontSize / 2}px`, lineHeight: `${fontSize}px` }}>{prefix}</Text>
        <Text style={{ fontSize: `${fontSize}px`, lineHeight: `${fontSize}px` }}>{nums[0]}</Text>
        <Text style={{ fontSize: `${fontSize / 2}px`, lineHeight: `${fontSize}px` }}>
          {nums.length > 1 ? `.${nums[1]}` : ''}
        </Text>
        <Text style={{ fontSize: `${fontSize / 2}px`, lineHeight: `${fontSize}px` }}>{suffix}</Text>
      </RMTypography>
    );
  }
}
RMPrettyNumber.defaultProps = {
  fontSize: 24,
  value: 0,
  digits: 2,
  color: '',
  prefix: '',
  suffix: '',
  customStyle: {},
};

RMPrettyNumber.propTypes = {
  fontSize: PropTypes.number,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  digits: PropTypes.number,
  color: PropTypes.string,
  prefix: PropTypes.string,
  suffix: PropTypes.string,
};

export default RMPrettyNumber;
