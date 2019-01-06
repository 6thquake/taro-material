import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

import AtCountdown from '../../../components/countdown/index'
import DocsHeader from '../../components/doc-header'

import './index.scss'

export default class CountDownPage extends Taro.Component {
  config = {
    navigationBarTitleText: 'Taro UI'
  }

  onTimeUp () {
    Taro.showToast({
      title: '时间到',
      icon: 'success',
      duration: 2000
    })
  }

  render () {
    return (
      <View className='page'>
        {/* S Header */}
        <DocsHeader title='Countdown 倒计时'></DocsHeader>
        {/* E Header */}
        {/* S Body */}
        <View className='doc-body'>
          {/* 一般用法 */}
          <View className='panel'>
            <View className='panel__title'>一般用法</View>
            <View className='panel__content'>
              <AtCountdown minutes={1} seconds={10} />
            </View>
            <View className='panel__content'>
              <AtCountdown isShowDay hours={1} minutes={1} seconds={10} />
            </View>
          </View>

          {/* 自定义格式化 */}
          <View className='panel'>
            <View className='panel__title'>自定义格式化</View>
            <View className='panel__content'>
              <AtCountdown
                format={{ hours: ':', minutes: ':', seconds: '' }}
                minutes={1}
                seconds={10}
              />
            </View>
          </View>

          {/* 卡片式 */}
          <View className='panel'>
            <View className='panel__title'>卡片式</View>
            <View className='panel__content'>
              <AtCountdown
                isCard
                minutes={1}
                seconds={10}
              />
            </View>
            <View className='panel__content'>
              <AtCountdown
                isCard
                isShowDay
                day={1}
                minutes={1}
                seconds={10}
                format={{ day: '天', hours: ':', minutes: ':', seconds: '' }}
              />
            </View>
          </View>

          {/* 自定义倒计时回调事件 */}
          <View className='panel'>
            <View className='panel__title'>自定义倒计时回调事件</View>
            <View className='panel__content'>
              <AtCountdown
                format={{ hours: ':', minutes: ':', seconds: '' }}
                seconds={10}
                onTimeUp={this.onTimeUp.bind(this)}
              />
            </View>
          </View>
        </View>
        {/* E Body */}
      </View>
    )
  }
}
