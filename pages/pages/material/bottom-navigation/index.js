import Taro, { Component } from '@tarojs/taro';
import { View, Image } from '@tarojs/components';

import { RMBottomNavigation, RMBackTop } from '../../../';

import RMPage from '../../../Page';

import theme from '../../../styles/theme';

import './index.scss';

class Index extends RMPage {
  config = {
    navigationBarTitleText: 'Bottom-Navigation',
  };

  state = {
    current: 0,
    tabs: [
      {
        title: '首页',
        image:
          'https://code.aliyun.com/licoliu/resources/raw/master/images/icons/%E6%88%91%E7%9A%84/%E7%94%B5%E5%AD%90%E5%AF%B9%E8%B4%A6%E5%8D%95.png',
        activeImage:
          'https://code.aliyun.com/licoliu/resources/raw/master/images/icons/%E6%88%91%E7%9A%84/%E6%88%91%E7%9A%84%E9%92%B1%E5%8C%85.png',
        size: 'inherit',
        badge: { variant: 'dot' },
      },
      {
        title: '日程',
        // iconType: 'event_note',
        activeImage:
          'https://code.aliyun.com/licoliu/resources/raw/master/images/icons/%E6%88%91%E7%9A%84/%E6%88%91%E7%9A%84%E9%92%B1%E5%8C%85.png',
        image:
          'https://code.aliyun.com/licoliu/resources/raw/master/images/icons/%E6%88%91%E7%9A%84/%E6%8E%88%E6%9D%83.png',
        size: 'inherit',
        badge: { variant: 'text', value: 999, maxValue: 99 },
      },
      {
        title: '发现',
        iconType: 'person_pin_circle',
        // image:
        //   'https://code.aliyun.com/licoliu/resources/raw/master/images/icons/v1/jihemendian.png',
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

  handleBottomNavigationClick(value, e) {
    console.log('tab', value);
    this.setState({
      current: value,
    });
  }

  render() {
    const { current, tabs } = this.state;
    return (
      <View className="root">
        <RMBottomNavigation
          fixed
          actions={tabs}
          onClick={this.handleBottomNavigationClick.bind(this)}
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
