import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import AtTabBar from '../../../components/tab-bar/index'
import DocsHeader from '../../components/doc-header'
import './index.scss'

export default class Index extends Taro.Component {
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
    }
  }

  handleClick (num, value) {
    this.setState({
      [`current${num}`]: value
    })
  }

  render () {
    const { current1, current2, current3, current4 } = this.state
    const tabList1 = [{ title: '待办事项', text: 8 }, { title: '拍照' }, { title: '通讯录', dot: true }]
    const tabList2 = [{ title: '待办事项', iconType: 'bullet-list', text: 'new' }, { title: '拍照', iconType: 'camera' }, { title: '文件夹', iconType: 'folder', text: '100', max: '99' }]

    return (
      <View className='page'>
        <DocsHeader title='TabBar 标签栏'></DocsHeader>

        <View className='doc-body'>
          <View className='panel'>
            <View className='panel__title'>文本标签栏</View>
            <View className='panel__content no-padding'>
              <AtTabBar tabList={tabList1} onClick={this.handleClick.bind(this, 1)} current={current1} />
            </View>
          </View>
          <View className='panel'>
            <View className='panel__title'>图标文本标签栏</View>
            <View className='panel__content no-padding'>
              <AtTabBar tabList={tabList2} onClick={this.handleClick.bind(this, 2)} current={current2} />
            </View>
          </View>
          <View className='panel'>
            <View className='panel__title'>自定义图标颜色、字体颜色、背景颜色</View>
            <View className='panel__content no-padding'>
              <AtTabBar backgroundColor='#FAFBFC' color='#ea6bb8' selectedColor='#e64340' tabList={tabList2} onClick={this.handleClick.bind(this, 3)} current={current3} />
            </View>
          </View>
          <View className='panel'>
            <View className='panel__title'>固定底部</View>
            <View className='panel__content no-padding' style='padding-bottom: 24px;'>
              <AtTabBar fixed tabList={tabList2} onClick={this.handleClick.bind(this, 4)} current={current4} />
            </View>
          </View>
        </View>
      </View>
    )
  }
}
