import Taro, { Component } from '@tarojs/taro'
import { View, Button, Canvas } from '@tarojs/components'

import { RMLivePlayer } from '../../taro-material'

import RMPage from '../../taro-material/Page'

import theme from '../../taro-material/styles/theme'

import './index.scss'

class Index extends RMPage {
  config = {
    navigationBarTitleText: 'Live Player',
  };
  state = {
    value: '',
  };
  componentWillMount () {}

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  render () {
    const { value } = this.state
    return (
      <View className='root'>
        {/* <View className='player'>
          <RMLivePlayer
            src='https://flvopen.ys7.com:9188/openlive/bc50090321624433bcd8f3625fce725b.flv'
            autoplay
          />
        </View> */}
        <View className='player'>
          <RMLivePlayer
            src='https://flvopen.ys7.com:9188/openlive/bc50090321624433bcd8f3625fce725b.flv'
            autoplay
            // objectFit='fillCrop'
          />
        </View>
        {/* <View className='player'>
          <RMLivePlayer src='https://flvopen.ys7.com:9188/openlive/bc50090321624433bcd8f3625fce725b.flv' />
        </View> */}
      </View>
    )
  }
}

export default Index
