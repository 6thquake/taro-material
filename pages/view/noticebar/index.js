import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

import AtNoticebar from '../../../components/noticebar/index'
import DocsHeader from '../../components/doc-header'

import './index.scss'

export default class NoticebarPage extends Taro.Component {
  config = {
    navigationBarTitleText: 'Taro UI'
  }

  constructor () {
    super(...arguments)
    this.state = {

    }
  }

  onGotoMore () {
    if (Taro.getEnv() === Taro.ENV_TYPE.WEAPP) Taro.showModal({ content: '点击了更多!' })
    else if (Taro.getEnv() === Taro.ENV_TYPE.WEB) alert('您点击了更多!')
  }

  render () {
    return (
      <View className='page'>
        {/* S Header */}
        <DocsHeader title='NoticeBar 通告栏'></DocsHeader>
        {/* E Header */}

        {/* S Body */}
        <View className='doc-body'>
          {/* 文字 */}
          <View className='panel'>
            <View className='panel__title'>文字</View>
            <View className='panel__content'>
              <View className='bar-item'>
                <AtNoticebar single>[单行] 这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏</AtNoticebar>
              </View>
              <View className='bar-item'>
                <AtNoticebar>[多行] 这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏</AtNoticebar>
              </View>
            </View>
          </View>

          {/* 跑马灯 */}
          <View className='panel'>
            <View className='panel__title'>跑马灯</View>
            <View className='panel__content'>
              <View className='bar-item'>
                <AtNoticebar marquee>[纯文字]这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏[结束]</AtNoticebar>
              </View>
              <View className='bar-item'>
                <AtNoticebar marquee icon='volume-plus'>[带icon]这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏[结束]</AtNoticebar>
              </View>
              <View className='bar-item'>
                <AtNoticebar marquee>[超长文本]这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏[结束]</AtNoticebar>
              </View>
            </View>
          </View>

          {/* 图标 */}
          <View className='panel'>
            <View className='panel__title'>图标</View>
            <View className='panel__content'>
              <View className='bar-item'>
                <AtNoticebar icon='volume-plus' single>[单行] 这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏</AtNoticebar>
              </View>
              <View className='bar-item'>
                <AtNoticebar icon='volume-plus'>[多行] 这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏</AtNoticebar>
              </View>
            </View>
          </View>

          {/* 查看更多 */}
          <View className='panel'>
            <View className='panel__title'>查看更多</View>
            <View className='panel__content'>
              <View className='bar-item'>
                <AtNoticebar showMore single onGotoMore={this.onGotoMore.bind(this)}>[单行] 这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏</AtNoticebar>
              </View>
              <View className='bar-item'>
                <AtNoticebar showMore icon='volume-plus' single onGotoMore={this.onGotoMore.bind(this)}>[单行] 这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏</AtNoticebar>
              </View>
              <View className='bar-item'>
                <AtNoticebar showMore moreText='更多内容' onGotoMore={this.onGotoMore.bind(this)}>[多行] 这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏</AtNoticebar>
              </View>
              <View className='bar-item'>
                <AtNoticebar showMore moreText='更多内容' icon='volume-plus' onGotoMore={this.onGotoMore.bind(this)}>[多行] 这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏</AtNoticebar>
              </View>
            </View>
          </View>

          {/* 关闭按钮 */}
          <View className='panel'>
            <View className='panel__title'>关闭按钮</View>
            <View className='panel__content'>
              <View className='bar-item'>
                <AtNoticebar close single>[单行] 这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏</AtNoticebar>
              </View>
              <View className='bar-item'>
                <AtNoticebar close icon='volume-plus' single>[单行] 这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏</AtNoticebar>
              </View>
              <View className='bar-item'>
                <AtNoticebar close moreUrl='https://taro.aotu.io/' single>[单行] 这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏</AtNoticebar>
              </View>
              <View className='bar-item'>
                <AtNoticebar close icon='volume-plus' moreUrl='https://taro.aotu.io/' single>[单行] 这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏</AtNoticebar>
              </View>
              <View className='bar-item'>
                <AtNoticebar close>[多行] 这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏</AtNoticebar>
              </View>
              <View className='bar-item'>
                <AtNoticebar close moreUrl='https://taro.aotu.io/'>[多行] 这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏</AtNoticebar>
              </View>
              <View className='bar-item'>
                <AtNoticebar close icon='volume-plus' moreUrl='https://taro.aotu.io/'>[多行] 这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏</AtNoticebar>
              </View>
            </View>
          </View>
        </View>
        {/* E Body */}
      </View>
    )
  }
}
