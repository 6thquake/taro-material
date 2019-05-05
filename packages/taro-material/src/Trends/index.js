import Taro, { Component } from '@tarojs/taro';
import PropTypes from 'prop-types';
import { View } from '@tarojs/components';
import classNames from 'classnames';

import { fade } from '../utils/colorManipulator';

import theme from '../styles/theme';
import './index.scss';

export default class RMTrends extends Component {
  handleClick = (...args) => {
    const { onClick } = this.props;
    onClick(...args);
  };
  render() {
    const { data, height, color, lineColor = '#FFFFFF', size, showValue, variant } = this.props;
    const max = data && data.length > 0 ? Math.max(...data.map(item => item.value)) : 1;

    const _color =
      color === 'default' || color === 'inherit'
        ? theme.palette.common.white
        : theme.palette[color].main;

    const preColor = fade(lineColor, 0.7);
    const sufColor = fade(lineColor, 0.3);

    const _data = data.slice();
    const activeIndex = _data.findIndex(item => item.active);
    return (
      <View
        style={`background: ${_color}`}
        className={classNames({
          progress: true,
          [size]: true,
        })}
      >
        {data &&
          data.map((item, index) => {
            let __color = null;
            if (item.lineColor) {
              __color = item.lineColor;
            } else if (index < activeIndex) {
              __color = preColor;
            } else if (index === activeIndex) {
              __color = lineColor;
            } else {
              __color = sufColor;
            }

            return (
              <View
                className={classNames({
                  item: true,
                  active: item.active,
                })}
                onClick={this.handleClick.bind(this, item, index)}
                key={item.value}
              >
                {variant === 'dot' && <View className="dot" style={{ background: __color }} />}
                {variant === 'text' && (
                  <View className="row value" style={{ color: __color }}>
                    <View className="prefix">{showValue && item.prefix}</View>
                    <View>{showValue && item.value}</View>
                    <View className="suffix">{showValue && item.suffix}</View>
                  </View>
                )}
                <View
                  className="line"
                  style={{
                    height: `${(item.value / max) * height}px`,
                    background: __color,
                  }}
                />
                {variant === 'dot' && (
                  <View className="row value" style={{ color: __color }}>
                    <View className="prefix">{showValue && item.prefix}</View>
                    <View>{showValue && item.value}</View>
                    <View className="suffix">{showValue && item.suffix}</View>
                  </View>
                )}
                {variant === 'text' && (
                  <View className="row value" style={{ color: __color }}>
                    <View>{showValue && item.title}</View>
                  </View>
                )}
              </View>
            );
          })}
      </View>
    );
  }
}

RMTrends.defaultProps = {
  onClick: () => {},
  data: [],
  variant: 'dot',
  height: 50,
  color: 'default',
  lineColor: '#FFFFFF',
  size: 'small',
  showValue: true,
};

RMTrends.propTypes = {
  variant: PropTypes.oneOf(['dot', 'text']),
  height: PropTypes.number,
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
  lineColor: PropTypes.string,
  size: PropTypes.oneOf(['small', 'normal', 'large']),
  showValue: PropTypes.bool,
  onClick: PropTypes.func,
};
