import Taro from '@tarojs/taro'
import { View, Text, Swiper, SwiperItem, Slider, Image } from '@tarojs/components'
import AtList from '../../../components/list/index'
import AtListItem from '../../../components/list/item/index'
import DocsHeader from '../../components/doc-header'
import './index.scss'

export default class PageSlider extends Taro.Component {
  config = {
    navigationBarTitleText: 'Taro UI'
  }

  constructor () {
    super(...arguments)
    this.state = {
      current: 1,
      duration: 500,
      interval: 5000,
      isCircular: false,
      isAutoplay: false,
      hasIndicatorDots: true,
      imgUrls: [
        'https://img10.360buyimg.com/babel/s700x360_jfs/t25855/203/725883724/96703/5a598a0f/5b7a22e1Nfd6ba344.jpg!q90!cc_350x180',
        'https://img11.360buyimg.com/babel/s700x360_jfs/t1/4776/39/2280/143162/5b9642a5E83bcda10/d93064343eb12276.jpg!q90!cc_350x180',
        'https://img14.360buyimg.com/babel/s700x360_jfs/t1/4099/12/2578/101668/5b971b4bE65ae279d/89dd1764797acfd9.jpg!q90!cc_350x180'
      ]
    }
  }

  setAutoPlay = e => {
    this.setState({
      isAutoplay: e.detail.value
    })
  }

  setCircular = e => {
    this.setState({
      isCircular: e.detail.value
    })
  }

  setIndicatorDots = e => {
    this.setState({
      hasIndicatorDots: e.detail.value
    })
  }

  setInterval = e => {
    this.setState({
      interval: e.detail.value
    })
  }

  setDuration = e => {
    this.setState({
      duration: e.detail.value
    })
  }

  render () {
    const { current, isAutoplay, duration, isCircular, interval, hasIndicatorDots, imgUrls } = this.state

    return (
      <View className='page'>
        {/* S Header */}
        <DocsHeader title='Swiper 滑块视图容器'></DocsHeader>
        {/* E Header */}

        {/* S Body */}
        <View className='doc-body'>
          {/* 基础用法 */}
          <View className='panel'>
            <View className='panel__title'>基础用法</View>
            <View className='panel__content'>
              <View className='example-item'>
                <Swiper
                  indicatorColor='#999'
                  indicatorActiveColor='#333'
                  current={current}
                  duration={duration}
                  interval={interval}
                  circular={isCircular}
                  autoplay={isAutoplay}
                  indicatorDots={hasIndicatorDots}
                  preMargin='20'
                >
                  {
                    imgUrls.map((item, idx) => (
                      <SwiperItem key={idx}>
                        <Image mode='widthFix' src={item} className='slide-image' width='355' height='150' />
                      </SwiperItem>
                    ))
                  }
                </Swiper>

                <View className='control-cnt'>
                  <AtList>
                    <AtListItem title='指示点' switchIsCheck={hasIndicatorDots} isSwitch onSwitchChange={this.setIndicatorDots} />
                    <AtListItem title='自动播放' switchIsCheck={isAutoplay} isSwitch onSwitchChange={this.setAutoPlay} />
                    <AtListItem title='循环播放' switchIsCheck={isCircular} isSwitch onSwitchChange={this.setCircular} />
                  </AtList>

                  <View className='slider-list'>
                    <View className='slider-list__item'>
                      <View className='slider-list__item-header'>
                        <Text>幻灯片切换时长(ms)</Text>
                      </View>
                      <View className='slider-list__item-body'>
                        <Slider
                          activeColor='#6190e8'
                          showValue
                          step={1}
                          min={500}
                          max={2000}
                          value={duration}
                          onChange={this.setDuration}
                        ></Slider>
                      </View>
                    </View>
                    <View className='slider-list__item'>
                      <View className='slider-list__item-header'>
                        <Text>自动播放间隔时长(ms)</Text>
                      </View>
                      <View className='slider-list__item-body'>
                        <Slider
                          activeColor='#6190e8'
                          showValue
                          step={1}
                          min={2000}
                          max={10000}
                          value={this.state.interval}
                          onChange={this.setInterval}
                        ></Slider>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>

        </View>
        {/* E Body */}
      </View>
    )
  }
}
