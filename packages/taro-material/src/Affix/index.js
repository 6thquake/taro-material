import Taro, { Component } from '@tarojs/taro'
import PropTypes from 'prop-types';

import { isNumber } from '../utils/typeof';

import theme from '../styles/theme';

import './index.scss'


class Affix extends Component {

  componentDidMount(){
    const { onAddPageScroll } = this.props;

    if(onAddPageScroll) {
      onAddPageScroll(this.handlePageScroll.bind(this));
    }
    
    this.affix.boundingClientRect((rect) => {
      const info = Taro.getSystemInfoSync();
      let { windowWidth, windowHeight } = info;
      let { left, top, bottom, right, width, height, } = rect;
      
      right = - left - width + windowWidth;
      bottom = - top - height + windowHeight;

      this.setState({
        fixed: false,
        top: top,
        left: left,
        right: right,
        bottom: bottom,
        width: width,
        height: height,
      });
    }).exec()
  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  handlePageScroll(params) {
    const { offsetBottom, offsetTop, } = this.props;
    let { fixed, left, top, bottom, right, width, height, } = this.state;

    let _fixed = false, 
      _affix = {};

    if (isNumber(offsetTop)) {
      _fixed = top <= params.scrollTop + offsetTop;
      _affix.top = `${offsetTop}px`;
    } else if (isNumber(offsetBottom)) {
      _fixed =  bottom <= - params.scrollTop + offsetBottom;
      _affix.bottom = `${offsetBottom}px`;
    }

    if(_fixed){
      _affix.left = `${left}px`;
    }

    this.setState({
      fixed: _fixed,
      affix: _affix,
    });
  }

  handleChange (e) {
    const { onChange } = this.props;
    onChange && onChange(e.target.value, e, ...arguments);
  }

  ref =(node)=> this.affix = node

  render () {
    const { offsetBottom, offsetTop, target, onChange, customStyle, } = this.props;
    const { fixed, left, top, bottom, right, width, height, affix={}, } = this.state;

    let style = null;

    if(fixed) {
      style = {
        ...customStyle, 
        ...{
          position: 'fixed',
          ...affix,
        }
      };
    }else{
      style = {
        ...customStyle,
      };
    }

    return (
      <View className='affix' ref={this.ref} style={style}>
        { this.props.children }
      </View>
    )
  }
}

Affix.propTypes = {
  /**
   * 距离窗口底部达到指定偏移量后触发
   */
  offsetBottom: PropTypes.number,
  /**
   * 距离窗口顶部达到指定偏移量后触发
   */
  offsetTop: PropTypes.number,
  /**
   * delay of pictrue slide，unit second
   */
  target: PropTypes.string,
  /**
   * 固定状态改变时触发的回调函数
   */
  onChange: PropTypes.func,

  onAddPageScroll: PropTypes.func,

  customStyle: PropTypes.object,
}

Affix.defaultProps = {
  offsetBottom: null,
  offsetTop: null,
  target: 'window',
  customStyle: {},
  onChange: () => {},
  onAddPageScroll: () => {},
}

export default Affix;