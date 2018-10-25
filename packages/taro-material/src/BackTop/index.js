import Taro, { Component } from '@tarojs/taro'
import PropTypes from 'prop-types';
import classNames from 'classnames'
import { View } from '@tarojs/components'

import RMButton from '../Button'
import RMIcon from '../Icon'

import './BackTop.scss'


class BackTop extends Component {
  state = { 
    visibility: false,
  }

  componentWillMount() { }

  componentDidMount(){
    const { onAddPageScroll } = this.props;

    if(onAddPageScroll) {
      onAddPageScroll(this.handlePageScroll.bind(this));
    }
  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  handlePageScroll(params) {
    const { visibilityHeight } = this.props;
    this.setState({
      visibility : params.scrollTop >= visibilityHeight
    })
  }

  handleScrollTop() {
    const { onClick } = this.props;
    Taro.pageScrollTo({
      scrollTop: 0,
      duration: 500,
    });
    if(onClick){
      onClick();
    }
  }

  render() {
    const { container, size, customStyle } = this.props;
    const { visibility } = this.state;

  	return (
      <View 
        className={classNames({
          'container-window': container === 'window',
          'visibility': visibility
        })} 
        style={customStyle}
      >
        <RMButton
          onClick={this.handleScrollTop.bind(this)}
          color='primary'
          variant='fab'
          size={size}
        >
          <RMIcon fontSize='inherit' color='inherit'>arrow_upward</RMIcon> 
        </RMButton>
      </View>
    );
  }
}

BackTop.defaultProps = {
  visibilityHeight: 300,
  container: 'window',
  size: 'medium', 
  onClick: () => {},
  onAddPageScroll: () => {},
  customStyle: {},
};

BackTop.propTypes = {
  /**
   * show BackTop button when scroll to this height
   */
  visibilityHeight: PropTypes.number,

  /**
   * callback function when click BackTop button
   */
  onClick: PropTypes.func,

  /**
   * the default value is window
   */
  container: PropTypes.string,

  size: PropTypes.oneOf(['medium', 'normal', 'small']),

  onAddPageScroll: PropTypes.func,

  customStyle: PropTypes.object,
};


export default BackTop