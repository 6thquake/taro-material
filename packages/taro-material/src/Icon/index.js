import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { isColor } from '../utils/styles';

import './Icon.scss';

class RMIcon extends Component {
  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    const { color, block, customStyle, fill, size } = this.props;
    let { fontSize } = this.props;

    const style = { ...customStyle };

    fontSize = fontSize || size;

    if (fontSize && fontSize !== 'default') {
      if (typeof fontSize === 'number') {
        fontSize += 'px';
      }
      style.fontSize = fontSize;
    }

    if (fill && isColor(fill)) {
      style.color = fill;
    }

    let _color = '';
    if (color && color.length >= 1) {
      _color = color.charAt(0).toUpperCase() + color.substring(1);
    }

    const classes = classNames({
      'rm-icon': true,
      'material-icons': true,
      'inherit-size': fontSize === 'inherit',
      block,
      [`color${_color}`]: color !== 'inherit',
    });

    return (
      <View className={classes} style={style}>
        {this.props.children}
      </View>
    );
  }
}

RMIcon.defaultProps = {
  /**
   * enum: 'inherit', 'primary', 'secondary', 'action', 'error', 'disabled', 'success', 'warning', 'progress', 'default'
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: 'inherit',

  /**
   * enum: 'inherit' | 'default'
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   */
  fontSize: 'default',
  size: 'default',
  block: false,
  customStyle: {},
};

RMIcon.propTypes = {
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
  fill: PropTypes.string,
  fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  block: PropTypes.bool,
  customStyle: PropTypes.object,
};

export default RMIcon;
