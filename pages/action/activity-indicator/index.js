import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

import AtActivityIndicator from '../../../components/activity-indicator/index'
import DocsHeader from '../../components/doc-header'

import './index.scss'

export default class ActivityIndicatorPage extends Taro.Component {
  config = {
    navigationBarTitleText: 'Taro UI'
  }

  constructor () {
    super(...arguments)
    this.atButton = ''
    this.state = {}
  }

  render () {
    return (
      <View className='page activity-indicator-page'>
        {/* S Header */}
        <DocsHeader title='Activity Indicator 活动指示器'></DocsHeader>
        {/* E Header */}

        {/* S Body */}
        <View className='doc-body'>
          {/* 自定义尺寸 */}
          <View className='panel'>
            <View className='panel__title'>自定义尺寸</View>
            <View className='panel__content'>
              <View className='example-item'>
                <View className='subitem'>
                  <AtActivityIndicator size={20} ></AtActivityIndicator>
                </View>
                <View className='subitem'>
                  <AtActivityIndicator size={24} />
                </View>
                <View className='subitem'>
                  <AtActivityIndicator size={32} />
                </View>
              </View>
            </View>
          </View>

          {/* 自定义颜色 */}
          <View className='panel'>
            <View className='panel__title'>自定义颜色</View>
            <View className='panel__content'>
              <View className='example-item'>
                <View className='subitem'>
                  <AtActivityIndicator color='#13CE66' />
                </View>
                <View className='subitem'>
                  <AtActivityIndicator color='#FF4949' />
                </View>
                <View className='subitem'>
                  <AtActivityIndicator color='#C9C9C9' />
                </View>
              </View>
            </View>
          </View>

          {/* 自定义文字 */}
          <View className='panel'>
            <View className='panel__title'>自定义文字</View>
            <View className='panel__content'>
              <View className='example-item'>
                <AtActivityIndicator content='加载中...' />
              </View>
            </View>
          </View>

          {/* 垂直水平居中 */}
          <View className='panel'>
            <View className='panel__title'>垂直水平居中</View>
            <View className='panel__content'>
              <View className='example-item example-item--center'>
                <AtActivityIndicator mode='center' />
              </View>
              <View className='example-item example-item--center'>
                <AtActivityIndicator mode='center' content='Loading...' />
              </View>
            </View>
          </View>
        </View>
        {/* E Body */}
      </View>
    )
  }
}
