import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import AtSteps from '../../../components/steps/index'
import DocsHeader from '../../components/doc-header'

import './index.scss'

export default class TimelinePage extends Taro.Component {
  config = {
    navigationBarTitleText: 'Taro UI'
  }

  constructor () {
    super(...arguments)
    this.state = {
      current1: 0,
      current2: 0,
      current3: 0,
      current4: 0,
      current5: 1,
    }
  }

  onChange (stateName, current) {
    this.setState({
      [stateName]: current
    })
  }

  render () {
    const items1 = [
      { 'title': '步骤一' },
      { 'title': '步骤二' }
    ]
    const items2 = [
      { 'title': '步骤一' },
      { 'title': '步骤二' },
      { 'title': '步骤三' }
    ]

    const items3 = [
      { 'title': '步骤一', 'desc': '这里是额外的信息，最多两行' },
      { 'title': '步骤二', 'desc': '这里是额外的信息，最多两行' },
      { 'title': '步骤三', 'desc': '这里是额外的信息，最多两行' }
    ]

    const items4 = [
      {
        'title': '步骤一',
        'desc': '这里是额外的信息，最多两行',
        'icon': {
          value: 'sound',
          activeColor: '#fff',
          inactiveColor: '#78A4FA',
          size: '14',
        }
      },
      {
        'title': '步骤二',
        'desc': '这里是额外的信息，最多两行',
        'icon': {
          value: 'shopping-cart',
          activeColor: '#fff',
          inactiveColor: '#78A4FA',
          size: '14',
        }
      },
      {
        'title': '步骤三',
        'desc': '这里是额外的信息，最多两行',
        'icon': {
          value: 'camera',
          activeColor: '#fff',
          inactiveColor: '#78A4FA',
          size: '14',
        }
      }
    ]

    const items5 = [
      {
        'title': '步骤一',
        'desc': '这里是额外的信息，最多两行',
        'success': true
      },
      {
        'title': '步骤二',
        'desc': '这里是额外的信息，最多两行'
      },
      {
        'title': '步骤三',
        'desc': '这里是额外的信息，最多两行',
        'error': true
      }
    ]

    return (
      <View className='page'>
        <DocsHeader title='Steps 步骤条'></DocsHeader>

        <View className='doc-body'>
          {/* 基础用法 */}
          <View className='panel'>
            <View className='panel__title'>基础用法</View>
            <View className='panel__content'>
              <View className='example-item'>
                <AtSteps
                  items={items1}
                  current={this.state.current1}
                  onChange={this.onChange.bind(this, 'current1')}
                />
                <AtSteps
                  items={items2}
                  current={this.state.current2}
                  onChange={this.onChange.bind(this, 'current2')}
                />
              </View>
            </View>
          </View>

          {/* 带附加信息 */}
          <View className='panel'>
            <View className='panel__title'>带附加信息</View>
            <View className='panel__content'>
              <View className='example-item'>
                <AtSteps
                  items={items3}
                  current={this.state.current3}
                  onChange={this.onChange.bind(this, 'current3')}
                />
              </View>
            </View>
          </View>

          {/* 自定义图标 */}
          <View className='panel'>
            <View className='panel__title'>自定义图标</View>
            <View className='panel__content'>
              <View className='example-item'>
                <AtSteps
                  items={items4}
                  current={this.state.current4}
                  onChange={this.onChange.bind(this, 'current4')}
                />
              </View>
            </View>
          </View>

          {/* 状态步骤条 */}
          <View className='panel'>
            <View className='panel__title'>状态步骤条</View>
            <View className='panel__content'>
              <View className='example-item'>
                <AtSteps
                  items={items5}
                  current={this.state.current5}
                  onChange={this.onChange.bind(this, 'current5')}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
