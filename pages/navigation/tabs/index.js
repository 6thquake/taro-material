/* eslint-disable react/no-direct-mutation-state */
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import AtTabs from '../../../components/tabs/index'
import AtTabsPane from '../../../components/tabs-pane/index'
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
      current5: 0
    }
  }
  handleClick (stateName, value) {
    this.setState({
      [stateName]: value
    })
  }
  render () {
    const { current1, current2, current3, current4, current5 } = this.state
    const tabList1 = [{ title: '标签页1' }, { title: '标签页2' }, { title: '标签页3' }]
    const tabList2 = [
      { title: '标签页1' },
      { title: '标签页2' },
      { title: '标签页3' },
      { title: '标签页4' },
      { title: '标签页5' },
      { title: '标签页6' }
    ]

    return (
      <View className='page'>
        <DocsHeader title='Tabs 标签页'></DocsHeader>

        <View className='doc-body'>
          {/* 基础用法 */}
          <View className='panel'>
            <View className='panel__title'>等宽标签栏</View>
            <View className='panel__content'>
              <AtTabs swipeable={false} current={current1} tabList={tabList1} onClick={this.handleClick.bind(this, 'current1')}>
                <AtTabsPane current={current1} index={0} >
                  <View className='tab-content'>标签页一的内容</View>
                </AtTabsPane>
                <AtTabsPane current={current1} index={1}>
                  <View className='tab-content'>标签页二的内容</View>
                </AtTabsPane>
                <AtTabsPane current={current1} index={2}>
                  <View className='tab-content'>标签页三的内容</View>
                </AtTabsPane>
              </AtTabs>
            </View>
          </View>
          <View className='panel'>
            <View className='panel__title'>滚动标签栏</View>
            <View className='panel__content'>
              <AtTabs swipeable={false} scroll current={current2} tabList={tabList2} onClick={this.handleClick.bind(this, 'current2')}>
                <AtTabsPane current={current2} index={0}>
                  <View className='tab-content'>标签页一的内容</View>
                </AtTabsPane>
                <AtTabsPane current={current2} index={1}>
                  <View className='tab-content'>标签页二的内容</View>
                </AtTabsPane>
                <AtTabsPane current={current2} index={2}>
                  <View className='tab-content'>标签页三的内容</View>
                </AtTabsPane>
                <AtTabsPane current={current2} index={3}>
                  <View className='tab-content'>标签页四的内容</View>
                </AtTabsPane>
                <AtTabsPane current={current2} index={4}>
                  <View className='tab-content'>标签页五的内容</View>
                </AtTabsPane>
                <AtTabsPane current={current2} index={5}>
                  <View className='tab-content'>标签页六的内容</View>
                </AtTabsPane>
              </AtTabs>
            </View>
          </View>
          <View className='panel'>
            <View className='panel__title'>滑动切换内容</View>
            <View className='panel__content'>
              <AtTabs current={current3} tabList={tabList1} onClick={this.handleClick.bind(this, 'current3')}>
                <AtTabsPane current={current3} index={0}>
                  <View className='tab-content'>标签页一的内容</View>
                </AtTabsPane>
                <AtTabsPane current={current3} index={1}>
                  <View className='tab-content'>标签页二的内容</View>
                </AtTabsPane>
                <AtTabsPane current={current3} index={2}>
                  <View className='tab-content'>标签页三的内容</View>
                </AtTabsPane>
              </AtTabs>
            </View>
          </View>

          <View className='panel'>
            <View className='panel__title'>垂直模式</View>
            <View className='panel__content'>
              <AtTabs height='200px' scroll tabDirection='vertical' current={current4} tabList={tabList2} onClick={this.handleClick.bind(this, 'current4')}>
                <AtTabsPane tabDirection='vertical' current={current4} index={0}>
                  <View className='tab-content--vertical'>标签页一的内容</View>
                </AtTabsPane>
                <AtTabsPane tabDirection='vertical' current={current4} index={1}>
                  <View className='tab-content--vertical'>标签页二的内容</View>
                </AtTabsPane>
                <AtTabsPane tabDirection='vertical' current={current4} index={2}>
                  <View className='tab-content--vertical'>标签页三的内容</View>
                </AtTabsPane>
                <AtTabsPane tabDirection='vertical' current={current4} index={3}>
                  <View className='tab-content--vertical'>标签页四的内容</View>
                </AtTabsPane>
                <AtTabsPane tabDirection='vertical' current={current4} index={4}>
                  <View className='tab-content--vertical'>标签页五的内容</View>
                </AtTabsPane>
                <AtTabsPane tabDirection='vertical' current={current4} index={5}>
                  <View className='tab-content--vertical'>标签页六的内容</View>
                </AtTabsPane>
              </AtTabs>
            </View>
          </View>

          <View className='panel'>
            <View className='panel__title'>禁止内容切换动画</View>
            <View className='panel__content'>
              <AtTabs current={current5} animated={false} tabList={tabList1} onClick={this.handleClick.bind(this, 'current5')}>
                <AtTabsPane current={current5} index={0}>
                  <View className='tab-content'>标签页一的内容</View>
                </AtTabsPane>
                <AtTabsPane current={current5} index={1}>
                  <View className='tab-content'>标签页二的内容</View>
                </AtTabsPane>
                <AtTabsPane current={current5} index={2}>
                  <View className='tab-content'>标签页三的内容</View>
                </AtTabsPane>
                <AtTabsPane current={current5} index={3}>
                  <View className='tab-content'>标签页四的内容</View>
                </AtTabsPane>
              </AtTabs>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
