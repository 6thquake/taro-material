import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';

import { RMDatePicker } from '../../taro-material';

import RMPage from '../../taro-material/Page';

import theme from '../../taro-material/styles/theme';
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
