import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import theme from '../styles/theme.js';
import { mergeStyle } from '../utils/styles.js';
import './FloatBar.scss';

class RMFloatBar extends Component {
  render() {
    const { placement, offset, color, spacing, fixed, autoWidth, customStyle } = this.props;
    const fixedClass = classNames('rm-float-bar', {
      // 'rm-float-bar--fixed': fixed,
      [`rm-float-bar--fixed-${placement}`]: fixed,
    });
    const childClass = classNames('rm-float-bar-child');
    let colorStyle = `background-color: ${theme.palette[`${color}`]['main']};color:${
      theme.palette[`${color}`]['contrastText']
    };${mergeStyle(customStyle)};`;

    let offsetStyle;
    if (placement == 'top') {
      offsetStyle = `top:${offset}px;`;
    } else {
      offsetStyle = `bottom:${offset}px;`;
    }
    let spaceStyle;
    if (!autoWidth) {
      spaceStyle = `position:absolute;left:${spacing}px;right:${spacing}px;`;
    } else {
      spaceStyle = ``;
    }

    let cus = {
      display: 'block',
    };

    return (
      <View className={fixedClass} style={mergeStyle(offsetStyle)}>
        <View className={childClass} style={mergeStyle(colorStyle, spaceStyle)}>
          {this.props.children}
        </View>
      </View>
    );
  }
}

RMFloatBar.defaultProps = {
  customStyle: '',
  placement: 'bottom',
  offset: 60,
  color: 'default',
  spacing: 8,
  fixed: false,
};

RMFloatBar.propTypes = {
  customStyle: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  placement: PropTypes.oneOf(['top', 'bottom']),
  offset: PropTypes.number,
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
  spacing: PropTypes.number,
  fixed: PropTypes.bool,
};

export default RMFloatBar;
