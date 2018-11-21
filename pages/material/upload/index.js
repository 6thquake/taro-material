import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';

import { RMUpload } from '../../taro-material';

import RMPage from '../../taro-material/Page';

import theme from '../../taro-material/styles/theme';
import './index.scss';

class Index extends RMPage {
  config = {
    navigationBarTitleText: 'Upload',
  };

  componentWillMount() {}

  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="root">
        <View className="spacer" />
        <View className="upload">
          <RMUpload />
        </View>
      </View>
    );
  }
}

export default Index;
