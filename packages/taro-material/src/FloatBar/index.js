import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import theme from '../styles/theme.js';
import './FloatBar.scss';

class RMFloatBar extends Component {

  mergeStyle(args) {
    const objectToString = style => {
      if (typeof style === 'object') {
        let styleStr = '';
        Object.keys(style).forEach(key => {
          const lowerCaseKey = key.replace(/([A-Z])/g, '-$1').toLowerCase();
          styleStr += `${lowerCaseKey}:${style[key]};`;
        });
        return styleStr;
      }
      return style;
    };
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    // args.reduce((item)=>{
    //   return objectToString(style1)
    // },'')
    console.log('args.reduce(reducer)',args.reduce(reducer))
    return args.reduce(reducer)
    // return objectToString(style1) + objectToString(style2);
  }
  render() {
    const {placement,offset,color,spacing,fixed,autoWidth} = this.props;
    const parentClass = classNames(
      ''
    )
    const fixedClass = classNames(
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
          <View className={childClass} style={this.mergeStyle([colorStyle,spacStyle])}>
            {this.props.children}
          </View>
      </View>
    );
  }
}

RMFloatBar.defaultProps = {
    placement:'bottom',
    offset:60,
    color:'default',
    spacing:8,
    fixed: false,
};

RMFloatBar.propTypes = {
    placement:PropTypes.string,
    offset:PropTypes.number,
    color:PropTypes.string,
    spacing:PropTypes.number,
    fixed: PropTypes.bool,
};

export default RMFloatBar;
