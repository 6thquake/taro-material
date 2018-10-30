import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import {
  RMLoading,
  AtLoading,
  AtActivityIndicator,
} from '../../taro-material'

import RMPage from '../../taro-material/Page'

import theme from '../../taro-material/styles/theme'
import './index.scss'


class Index extends RMPage {
  config = {
    navigationBarTitleText: 'Loading',
  }

  componentWillMount () {
  }

  componentDidMount () { }

  componentDidShow() { }

  componentDidHide () { }
  
  render () {
    return (
      <View className='root'>
        
        <RMLoading show={true} end={false} />
        <View className='example-item'>
          <AtActivityIndicator content='加载中...' />
        </View>

        <View className='spacer'></View>
        <View className='loading'>
          <AtLoading></AtLoading>
          <RMLoading show={true} end={false} />
          <View className='example-item'>
            <AtActivityIndicator content='加载中...' />
          </View>
        </View>

      </View> 
    )
  }
}

export default Index
