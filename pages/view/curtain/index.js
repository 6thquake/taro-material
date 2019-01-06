import Taro from '@tarojs/taro'
import { View, Image } from '@tarojs/components'

import AtCurtain from '../../../components/curtain/index'
import AtButton from '../../../components/button/index'
import DocsHeader from '../../components/doc-header'
import curtainPng from '../../../assets/images/curtain.png'

import './index.scss'

export default class TagPage extends Taro.Component {
  config = {
    navigationBarTitleText: 'Taro UI'
  }

  constructor () {
    super(...arguments)
    this.state = {
      isOpened: false,
      closeBtnPosition: 'bottom',
    }
  }

  handleChange (stateName, value) {
    this.setState({
      isOpened: true,
      [stateName]: value
    })
  }

  onClose () {
    this.setState({
      isOpened: false
    })
  }

  render () {
    const { isOpened, closeBtnPosition } = this.state

    return (
      <View className='page'>
        {/* S Header */}
        <DocsHeader title='Curtain 幕帘'></DocsHeader>
        {/* E Header */}

        {/* S Body */}
        <View className='doc-body'>
          <AtCurtain
            isOpened={isOpened}
            closeBtnPosition={closeBtnPosition}
            onClose={this.onClose.bind(this)}
          >
            <Image
              style='width:100%;height:250px'
              src={curtainPng}
            />
          </AtCurtain>
          {/* 右上关闭 */}
          <View className='panel'>
            <View className='panel__title'>右上关闭</View>
            <View className='panel__content'>
              <View className='example-item'>
                <AtButton onClick={this.handleChange.bind(this, 'closeBtnPosition', 'top')}>右上关闭幕帘</AtButton>
              </View>
            </View>
          </View>

          {/* 底部关闭 */}
          <View className='panel'>
            <View className='panel__title'>底部关闭</View>
            <View className='panel__content'>
              <View className='example-item'>
                <AtButton onClick={this.handleChange.bind(this, 'closeBtnPosition', 'bottom')}>底部关闭幕帘</AtButton>
              </View>
            </View>
          </View>
        </View>
        {/* E Body */}
      </View>
    )
  }
}
