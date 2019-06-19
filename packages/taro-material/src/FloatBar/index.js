import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import theme from '../../../styles/theme';

import './FloatBar.scss';

class RMFloatBar extends Component {
  render() {
    const {placement,offset,color,spacing,fixed} = this.props;

    const rootClass = classNames(
      'at-float-bar',
      {
        'at-float-bar--fixed': fixed,
        [`at-float-bar--fixed-${placement}`]:true,
      },
    );
    let colorStyle = `background-color: ${theme.palette[`${color}`].main};`;
    let offsetStyle;
    if(placement=='top'&&fixed){
        offsetStyle= `top:${offset}px`
    }else{
        offsetStyle= `bottom:${offset}px`
    }

    return (
      <View className={rootClass} style={this.mergeStyle(colorStyle, offsetStyle)}>
        {this.props.children}
      </View>
    );
  }
}

RMFloatBar.defaultProps = {
    placement:'bottom',
    offset:60,
    color:theme.palette.grey[100],
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
