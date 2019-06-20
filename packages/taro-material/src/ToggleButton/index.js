import Taro, { Component } from '@tarojs/taro';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { View } from '@tarojs/components';
import RMIcon from '../Icon';
import RMTypography from '../Typography';

import theme from '../styles/theme';
import './index.scss';

class RMToggleButton extends Component {
  handleClick = (...args) => {
    const { onChange } = this.props;
    onChange(...args);
  };

  render() {
    let {
      options,
      value,
      fontSize,
      hasShadow,
      activeColor,
      showLabels,
      customStyle,
      isDark,
      mini,
      circle,
    } = this.props;

    const rootCls = classNames('root', { shadow: hasShadow });
    const color = isDark ? theme.palette.primary.contrastText : theme.palette.text.secondary;

    fontSize = mini ? 16 : fontSize;
    const itemStyle = {
      padding: fontSize > 16 ? `${theme.spacing.unit}px` : `${theme.spacing.unit / 1.5}px`,
    };
    const rootStyle = {
      borderRadius: circle ? `${fontSize + 16}px` : '',
      ...customStyle,
    };

    return (
      <View style={rootStyle} className={rootCls}>
        {options.map(item => {
          const { icon, label } = item;
          let isActive = value === item.value;
          let size = fontSize;
          return (
            <View
              style={itemStyle}
              onClick={this.handleClick.bind(this, item.value)}
              className="item"
            >
              <View
                style={{ color: isActive ? theme.palette[activeColor].main : color }}
                className="icon"
              >
                <RMIcon fontSize={size} block>
                  {icon}
                </RMIcon>
              </View>
              {(showLabels || isActive) && (
                <View className="label">
                  <RMTypography
                    color={isActive ? theme.palette[activeColor].main : color}
                    fontSize={size - 8}
                    className="caption"
                    block
                  >
                    {label}
                  </RMTypography>
                </View>
              )}
            </View>
          );
        })}
      </View>
    );
  }
}

RMToggleButton.propTypes = {
  onChange: PropTypes.func,
  options: PropTypes.array.isRequired,
  showLabels: PropTypes.bool,
  value: PropTypes.string,
  fontSize: PropTypes.number,
  customStyle: PropTypes.object,
  hasShadow: PropTypes.bool,
  activeColor: PropTypes.oneOfType([
    'primary',
    'secondary',
    'error',
    'success',
    'warning',
    'progress',
  ]),
  isDark: PropTypes.bool,
  mini: PropTypes.bool,
  circle: PropTypes.bool,
};

RMToggleButton.defaultProps = {
  onChange: () => {},
  options: [],
  showLabels: false,
  value: '',
  fontSize: 20,
  mini: false,
  customStyle: {},
  hasShadow: false,
  activeColor: 'primary',
  isDark: false,
  circle: true,
};

export default RMToggleButton;
