import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import theme from '../styles/theme.js';
import {mergeStyle} from '../utils/styles.js';
import './FloatBar.scss';

class RMFloatBar extends Component {

  render() {
    const {placement,offset,color,spacing,fixed,autoWidth,customStyle} = this.props;
    const fixedClass = classNames(
      ...customStyle,
      'at-float-bar',
      {
        // 'at-float-bar--fixed': fixed,
        [`at-float-bar--fixed-${placement}`]:fixed,
      },
    );
    const childClass = classNames(
      'at-float-bar-child'
    )
    let colorStyle ;
    if(color!='inherit'){
      colorStyle=`background-color: ${theme.palette[`${color}`]['main']};`;
    }else{
      colorStyle=`background-color: inherit`;
    }
    let offsetStyle;
    if(placement=='top'){
        offsetStyle= `top:${offset}px;`
    }else{
        offsetStyle= `bottom:${offset}px;`
    }
    let spacStyle;
    if(!autoWidth){
      spacStyle=`position:absolute;left:${spacing}px;right:${spacing}px;`
    }else{
      spacStyle=``;
    }

    return (
        <View className={fixedClass} style={offsetStyle}>
          <View className={childClass} style={mergeStyle(colorStyle,spacStyle)}>
            {this.props.children}
          </View>
      </View>
    );
  }
}

RMFloatBar.defaultProps = {
    customStyle:{},
    placement:'bottom',
    offset:60,
    color:'default',
    spacing:8,
    fixed: false,
};

RMFloatBar.propTypes = {
    customStyle:PropTypes.object,
    placement:PropTypes.oneOf(['top', 'bottom']),
    offset:PropTypes.number,
    color:PropTypes.oneOf(['default','inherit' , 'primary' , 'secondary' ,'error' , 'success' , 'warning' , 'progress']),
    spacing:PropTypes.number,
    fixed: PropTypes.bool,
};

export default RMFloatBar;
