import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';

import { RMDatePicker } from '../../../';

import RMPage from '../../../Page';

import theme from '../../../styles/theme';
import './index.scss';

class Index extends RMPage {
  config = {
    navigationBarTitleText: 'DatePicker',
  };

  componentWillMount() {}

  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="root">
        <View className="spacer" />
        <View className="picker">
          <RMDatePicker />
        </View>
      </View>
    );
  }
}

export default Index;
