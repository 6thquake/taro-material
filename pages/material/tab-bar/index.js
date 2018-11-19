import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import { RMTabBar, RMBackTop } from '../../taro-material'

import RMPage from '../../taro-material/Page'

import theme from '../../taro-material/styles/theme'

import './index.scss'

class Index extends RMPage {
  config = {
    navigationBarTitleText: 'TaB-Bar',
  };
  state = {};
  componentWillMount () {}

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  handleTabBarClick (value, e) {
    console.log('tab', value)
    this.setState({
      current: value,
    })
  }

  render () {
    const { current } = this.props
    // console.log('tabs', tabs)
    const tabs = [
      { title: '首页', iconType: 'home', size: 'inherit' },
      { title: '日程', iconType: 'event_note', size: 'inherit' },
      { title: '我的', iconType: 'person', size: 'inherit' }
    ]
    return (
      <View className='root'>
        <View class='body' />
        <RMTabBar
          fixed
          tabList={tabs}
          onClick={this.handleTabBarClick.bind(this)}
          current={current}
        />
        <View className='spacer' />
        <RMBackTop
          // customStyle={{ bottom: `${50 + theme.spacing.unit * 2}px` }}
          bottom={50 + theme.spacing.unit * 2}
          onAddPageScroll={this.addPageScrollListener.bind(this)}
        />
      </View>
    )
  }
}

Index.defaultProps = {
  current: 0,
  tabs: [
    { title: '首页', iconType: 'home', size: 'inherit' },
    { title: '日程', iconType: 'event_note', size: 'inherit' },
    { title: '我的', iconType: 'person', size: 'inherit' }
  ],
}

export default Index
