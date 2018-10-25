import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import humps from 'humps'
import classNames from 'classnames'

import './Icon.scss'

class Icon extends Component {
  
  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }
  
  render() {
    let { fontSize, color, block } = this.props;
    let style = {};

    if (fontSize && fontSize != 'default') {
      if(typeof fontSize === 'number'){
        fontSize += 'px';
      }
      style.fontSize = fontSize;
    }

    let classes = classNames({
      'root': true,
      'material-icons': true,
      'inherit-size': fontSize == 'inherit',
      block: block,
      [humps.camelize(' color-' + color)]: color !== 'inherit',
    });

    return (<View className={classes} style={style}>{this.props.children}</View>);
  }
}

Icon.defaultProps = {
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

  block: false,
}

export default Icon;
