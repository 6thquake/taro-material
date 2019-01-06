import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import DocsHeader from '../../components/doc-header'
import AtToast from '../../../components/toast/index'
import AtButton from '../../../components/button/index'

import './index.scss'

const INIT_STATE = {
  image: '',
  icon: '',
  text: '',
  status: '',
  duration: 3000,
  hasMask: false,
  isOpened: false
}

export default class ToastPage extends Component {
  config = {
    navigationBarTitleText: 'Taro UI'
  }

  constructor () {
    super(...arguments)
    this.state = INIT_STATE
  }

  handleClick = (text, icon, image, hasMask, status) => {
    if (this.state.isOpened) {
      return this.setState(INIT_STATE)
    }
    const state = Object.assign(
      { ...INIT_STATE, isOpened: true },
      { text, icon, image, hasMask, status }
    )

    this.setState(state)
  }

  handleClose = () => {
    this.setState({
      isOpened: false
    })
  }

  render () {
    const {
      text,
      icon,
      status,
      isOpened,
      duration,
      image,
      hasMask
    } = this.state

    return (
      <View className='page toast-page'>
        {/* S Header */}
        <DocsHeader title='Toast 轻提示' />
        {/* E Header */}

        {/* S Body */}
        <View className='doc-body'>
          <View className='panel'>
            <View className='panel__title'>基本案例</View>
            <View className='panel__content'>
              <View className='example-item'>
                <AtButton
                  onClick={this.handleClick.bind(
                    this,
                    '文本内容',
                    '',
                    '',
                    false,
                    ''
                  )}
                >
                  文本 Toast
                </AtButton>
              </View>
              <View className='example-item'>
                <AtButton
                  onClick={this.handleClick.bind(
                    this,
                    '文本内容',
                    'analytics',
                    '',
                    false,
                    ''
                  )}
                >
                  文本 + ICON
                </AtButton>
              </View>
            </View>
          </View>

          <View className='panel'>
            <View className='panel__title'>自定义图片</View>
            <View className='panel__content'>
              <View className='example__item'>
                <AtButton
                  onClick={this.handleClick.bind(
                    this,
                    '凹凸实验室',
                    '',
                    'http://storage.360buyimg.com/mtd/home/group-21533885306540.png',
                    false,
                    ''
                  )}
                >
                  自定义图片 Toast
                </AtButton>
              </View>
            </View>
          </View>

          <View className='panel'>
            <View className='panel__title'>添加遮罩层</View>
            <View className='panel__content'>
              <View className='example__item'>
                <AtButton
                  onClick={this.handleClick.bind(
                    this,
                    '透明遮罩层的作用在于不可点击下面的元素',
                    '',
                    '',
                    true,
                    ''
                  )}
                >
                  添加遮罩层 Toast
                </AtButton>
              </View>
            </View>
          </View>

          <View className='panel'>
            <View className='panel__title'>Error Toast</View>
            <View className='panel__content'>
              <View className='example__item'>
                <AtButton
                  onClick={this.handleClick.bind(
                    this,
                    '错误提示',
                    '',
                    '',
                    true,
                    'error'
                  )}
                >
                  错误提示 Toast
                </AtButton>
              </View>
            </View>
          </View>

          <View className='panel'>
            <View className='panel__title'>Success Toast</View>
            <View className='panel__content'>
              <View className='example__item'>
                <AtButton
                  onClick={this.handleClick.bind(
                    this,
                    '正确提示',
                    '',
                    '',
                    true,
                    'success'
                  )}
                >
                  正确提示 Toast
                </AtButton>
              </View>
            </View>
          </View>

          <View className='panel'>
            <View className='panel__title'>Loading Toast</View>
            <View className='panel__content'>
              <View className='example__item'>
                <AtButton
                  onClick={this.handleClick.bind(
                    this,
                    '正在加载…',
                    '',
                    '',
                    true,
                    'loading'
                  )}
                >
                  加载中 Toast
                </AtButton>
              </View>
            </View>
          </View>
        </View>
        {/* E Body */}

        <AtToast
          icon={icon}
          text={text}
          image={image}
          status={status}
          hasMask={hasMask}
          isOpened={isOpened}
          duration={duration}
          onClose={this.handleClose}
        />
      </View>
    )
  }
}
