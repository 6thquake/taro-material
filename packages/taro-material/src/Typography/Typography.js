import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import classNames from 'classnames'

import './Typography.scss'


class Typography extends Component {

  static externalClasses = ['classes'];

  static options = {
    addGlobalClass: true
  };

  render() {
    let { className, color, fontSize, block } = this.props;

    let classes = classNames({
      'typography': true,
      block: block,
    }, className);
    
    let style = {};
    
    if (color && color != 'default') {
      style.color = color;
    }

    if (fontSize && fontSize != 'default') {
      if(typeof fontSize === 'number'){
        fontSize += 'px';
      }
      style.fontSize = fontSize;
    }

    return (
      <View className={classes} style={style}>
        {this.props.children}
      </View>
    )
  }
}
Typography.defaultProps = {
  className: '',
  color: 'default',
  fontSize: 'default',
  block: false,
}
export default Typography
