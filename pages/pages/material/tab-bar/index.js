import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';

import { RMTabBar, RMBackTop } from '../../../';

import RMPage from '../../../Page';

import theme from '../../../styles/theme';

import './index.scss';

class Index extends RMPage {
  config = {
    navigationBarTitleText: 'Tab-Bar',
  };

  state = {
    current: 0,
    tabs: [
      { title: '首页', iconType: 'home', size: 'inherit', badge: { variant: 'dot' } },
      {
        title: '日程',
        iconType: 'event_note',
        size: 'inherit',
        badge: { variant: 'text', value: 999, maxValue: 99 },
      },
      {
        title: '发现',
        iconType: 'person_pin_circle',
        size: 'inherit',
        badge: { value: '热', variant: 'mark' },
      },
      {
        title: '日程',
        iconType: 'local_grocery_store',
        size: 'inherit',
        badge: { value: '奖', variant: 'ribbon' },
      },
      { title: '我的', iconType: 'person', size: 'inherit', badge: {} },
    ],
  };

  componentWillMount() {}

  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  handleTabBarClick(value, e) {
    console.log('tab', value);
    this.setState({
      current: value,
    });
  }

  render() {
    const { current, tabs } = this.state;
    return (
      <View className="root">
        <View class="body" />
        <RMTabBar
          fixed
          tabList={tabs}
          onClick={this.handleTabBarClick.bind(this)}
          current={current}
        />
        <View className="spacer" />
        <RMBackTop
          // customStyle={{ bottom: `${50 + theme.spacing.unit * 2}px` }}
          bottom={50 + theme.spacing.unit * 2}
          onAddPageScroll={this.addPageScrollListener.bind(this)}
        />
      </View>
    );
  }
}

Index.defaultProps = {};

export default Index;
