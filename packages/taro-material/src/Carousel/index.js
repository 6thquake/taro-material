import Taro, { Component } from '@tarojs/taro'
import PropTypes from 'prop-types'
import { Swiper, SwiperItem, Image } from '@tarojs/components'

import theme from '../styles/theme'

import './index.scss'

class Carousel extends Component {
  componentWillMount () {}

  componentDidMount () {}

  componentWillUnmount () {}

  componentDidShow () {}

  componentDidHide () {}

  handleChange (e) {
    const { onChange } = this.props
    onChange && onChange(e.target.value, e, ...arguments)
  }

  render () {
    const {
      items,
      speed,
      delay,
      autoplay,
      dots,
      vertical,
      multipleItems,
      current,
      customStyle,
    } = this.props

    return (
      <Swiper
        className='carousel'
        indicatorColor='#999'
        indicatorActiveColor='#333'
        vertical={vertical}
        skipHiddenItemLayout
        displayMultipleItems={multipleItems}
        circular
        indicatorDots={dots}
        interval={delay}
        duration={speed}
        autoplay={autoplay}
        current={current}
        onChange={this.handleChange}
        style={customStyle}
      >
        {items.map((item, index) => (
          <SwiperItem key={item.src} className='item'>
            <Image className='image' src={item.src} mode='aspectFill' />
          </SwiperItem>
        ))}
      </Swiper>
    )
  }
}

Carousel.propTypes = {
  /**
   * item list
   * eg.
   *  [{
   *    src: '/static/images/grid-list/bike.jpg',
   *    alt: 'images-1',
   *  },
   *  {
   *    src: '/static/images/grid-list/mushroom.jpg',
   *    alt: 'images-2',
   *  },
   *  {
   *    src: '/static/images/grid-list/burgers.jpg',
   *    alt: 'images-3',
   *  }]
   */
  items: PropTypes.array.isRequired,
  /**
   * speed of pictrue slide，unit second
   */
  speed: PropTypes.number,
  /**
   * delay of pictrue slide，unit second
   */
  delay: PropTypes.number,
  /**
   * autoplay
   */
  autoplay: PropTypes.bool,
  /**
   * is dots showed
   */
  dots: PropTypes.bool,
  /**
   * 同时显示的滑块数量
   */
  vertical: PropTypes.bool,
  /**
   * 滑动方向是否为纵向
   */
  multipleItems: PropTypes.number,
  /**
   * 当前所在滑块的 index
   */
  current: PropTypes.number,
  /**
   * current 改变时会触发 change 事件
   */
  onChange: PropTypes.func,

  customStyle: PropTypes.object,
}

Carousel.defaultProps = {
  items: [],
  speed: 500,
  delay: 5000,
  autoplay: false,
  dots: true,
  vertical: false,
  multipleItems: 1,
  current: 0,
  customStyle: {},
  onChange: () => {},
}

export default Carousel
