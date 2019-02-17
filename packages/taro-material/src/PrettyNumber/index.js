import Taro, { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';

import { RMTypography } from '../Typography';

class PrettyNumber extends Component {
  render() {
    const { className, value, fontSize, color, prefix, suffix } = this.props;

    const nums = `${value}`.split('.');

    return (
      <RMTypography className={className} color={color}>
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
PrettyNumber.defaultProps = {
  fontSize: 24,
  value: 0,
  color: '',
  prefix: '',
  suffix: '',
};

export default PrettyNumber;
