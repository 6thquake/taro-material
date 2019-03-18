import Taro, { Component } from '@tarojs/taro';
import PropTypes from 'prop-types';
import { View, Text } from '@tarojs/components';
import classNames from 'classnames';

// import theme from '../../theme'

import './index.scss';

class RMMeter extends Component {
  state = {};

  componentWillReceiveProps(nextProps) {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    const { value, type, className, customStyle, size } = this.props;
    let intr = 0;
    let decl = 0;
    switch (type) {
      case 'gas':
        intr = 5;
        decl = 3;
        break;
      case 'power':
        intr = 4;
        decl = 1;
        break;
      case 'water':
      default:
        intr = 4;
        decl = 1;
        break;
    }
    // 获取value整数部分
    let _intr_ = `${Math.floor(value)}`;
    // 获取value小数部分
    let _decl_ = `${Math.round((value - _intr_) * Math.pow(10, decl))}`;

    // 当value整数部分长度小于表的整数部分时给整数部分补0
    for (let index = 0, length = _intr_.length; index < intr - length; index++) {
      _intr_ = `0${_intr_}`;
    }
    // 当value整数部分长度大于表的整数部分时忽略那些超出表能显示的最大长度的位的数字
    _intr_ = _intr_.slice(-intr);

    // 当value小数部分长度小于表的小数部分的长度时给小数数部分补0
    for (let index = 0, length = _decl_.length; index < decl - length; index++) {
      _decl_ += '0';
    }
    // 当value小数部分长度大于表的小数部分的长度时忽略那些超出表能显示的最大长度的位的数字
    _decl_ = _decl_.substr(0, decl);

    return (
      <View
        className={classNames(
          {
            meter: true,
            'meter--card': true,
            [`meter--${size}`]: true,
          },
          className,
        )}
        style={customStyle}
      >
        <View className="meter__item">
          {_intr_.split('').map(item => (
            <View className="meter__int-box" key={item}>
              <Text className="meter__value">{item}</Text>
            </View>
          ))}
          <Text className="meter__separator">.</Text>
          {_decl_.split('').map(item => (
            <View className="meter__dec-box" key={item}>
              <Text className="meter__value">{item}</Text>
            </View>
          ))}
        </View>
      </View>
    );
  }
}

RMMeter.defaultProps = {
  value: 0,
  type: 'water',
  customStyle: {},
  className: '',
  size: 'normal',
};

RMMeter.propTypes = {
  value: PropTypes.number,
  type: PropTypes.oneOf(['water', 'power', 'gas']),
  size: PropTypes.oneOf(['large', 'medium', 'normal', 'small', 'xs']),
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};

export default RMMeter;
