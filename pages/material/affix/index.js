import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import {
  RMAffix,
} from '../../taro-material'

import RMPage from '../../taro-material/Page'

import theme from '../../taro-material/styles/theme'
import './index.scss'


class Index extends RMPage {
  config = {
    navigationBarTitleText: 'Affix',
  }

  componentWillMount () { }

  componentDidMount () { }

  componentDidShow () { }

  componentDidHide () { }
  
  render () {
    return (
      <View className='root'>
        <View className='body'>
          <View className='title'>拖动页面查看效果！</View>
          <View className='spacer'></View>
          <View>
            <RMAffix onAddPageScroll={this.addPageScrollListener.bind(this)} offsetTop={0}>
                <View className='affix'>距离顶部0px开始固定</View>
            </RMAffix>

            <RMAffix onAddPageScroll={this.addPageScrollListener.bind(this)} offsetBottom={0}>
                <View className='affix'>距离底部0px开始固定</View>
            </RMAffix>
          </View>
          <View className='spacer'></View>
        </View>
      </View> 
    )
  }
}

export default Index
