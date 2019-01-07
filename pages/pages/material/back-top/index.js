import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';

import { RMBackTop } from '../../../';

import RMPage from '../../../Page';

import theme from '../../../styles/theme';
import './index.scss';

class Index extends RMPage {
  config = {
    navigationBarTitleText: 'Back Top',
  };

  componentWillMount() {}

  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="root">
        <View class="body" />
        <View className="spacer" />
        <RMBackTop onAddPageScroll={this.addPageScrollListener.bind(this)} />
      </View>
    );
  }
}

export default Index;
