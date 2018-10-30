import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import {
  RMBackTop,
} from '../../taro-material'

import RMPage from '../../taro-material/Page'

import theme from '../../taro-material/styles/theme'
import './index.scss'


let ctx = null;
class Index extends RMPage {
  config = {
    navigationBarTitleText: 'Back Top',
  }

  componentWillMount () { }

  componentDidMount () { }

  componentDidShow() { }

  componentDidHide () { }
  
  render () {
    return (
      <View className='root'>
        <View class='body'>
          
        </View>
        <View className='spacer'></View>
        <RMBackTop onAddPageScroll={this.addPageScrollListener.bind(this)}/>
      </View> 
    )
  }
}

export default Index
