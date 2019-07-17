import Taro, { Component } from '@tarojs/taro';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { View } from '@tarojs/components';

import RMTypography from '../Typography';

import { lighten } from '../utils/colorManipulator';

import theme from '../styles/theme';
import './index.scss';

class Pie extends Component {
  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    const { width, height, data, raised, color, fontSize, fontColor, customStyle } = this.props;

    let sum = 0.1;
    let size = { width: `${width}px`, height: `${height}px` };

    let colr = color || theme.palette.primary.main;
    data.forEach(element => {
      if (!element.color) {
        colr = lighten(colr, 0.24);
        element.color = colr;
      }
    });

    return (
      <View
        className={classNames({
          pieContainer: true,
          raised,
        })}
        style={{
          ...customStyle,
          ...size,
          color: fontColor,
        }}
      >
        {data.map(item => {
          let extra = 0;
          let percent = item.percent;
          percent *= 360;
          sum += percent;

          extra = Math.floor(percent / 180);
          percent = percent % 180;
          return (
            <View className="pieWrapper">
              {extra > 0 && (
                <View
                  className="pie"
                  style={{
                    clip: `rect(0, ${width}px, ${height}px, ${width / 2}px)`,
                    transform: `rotate(${sum - percent - extra * 180}deg)`,
                    ...size,
                  }}
                >
                  <View
                    className="before"
                    style={{
                      clip: `rect(0, ${width / 2}px, ${height}px, 0)`,
                      backgroundColor: item.color,
                      transform: `rotate(${extra * 180}deg)`,
                      ...size,
                    }}
                  />
                </View>
              )}

              <View
                className="pie"
                style={{
                  clip: `rect(0, ${width}px, ${height}px, ${width / 2}px)`,
                  transform: `rotate(${sum - percent}deg)`,
                  ...size,
                }}
              >
                <View
                  className="before"
                  style={{
                    clip: `rect(0, ${width / 2}px, ${height}px, 0)`,
                    backgroundColor: item.color,
                    transform: `rotate(${percent}deg)`,
                    ...size,
                  }}
                />
              </View>
            </View>
          );
        })}

        {data.length === 1 && (
          <View className="text">
            <RMTypography className="body2" fontSize={fontSize} block color={'inherit'}>
              {data[0].percent * 100}%
            </RMTypography>
          </View>
        )}
      </View>
    );
  }
}

Pie.defaultProps = {
  customStyle: {},
  width: 32,
  height: 32,
  raised: false,
  fontSize: 12,
  fontColor: theme.palette.text.primary,
  data: [],
  color: theme.palette.primary.main,
};

Pie.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  data: PropTypes.array,
  raised: PropTypes.bool,
  fontSize: PropTypes.number,
  fontColor: PropTypes.string,
  color: PropTypes.string,
};
export default Pie;
