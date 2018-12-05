import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';

import { RMIcon } from '../../taro-material';

import RMPage from '../../taro-material/Page';

import theme from '../../taro-material/styles/theme';
import './index.scss';

class Index extends RMPage {
  config = {
    navigationBarTitleText: 'Icon',
  };

  componentWillMount() {}

  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="root">
        <View className="spacer" />
        <View className="icons">
          <View className="title">inherit, primary</View>
          <RMIcon fontSize="inherit" color="primary">
            place
          </RMIcon>
          <View className="title">48, default</View>
          <RMIcon fontSize={48} color="default">
            rotate_right
          </RMIcon>
          <View className="title">inherit, primary</View>
          <RMIcon color="inherit" fontSize="inherit" block>
            insert_chart
          </RMIcon>
        </View>
      </View>
    );
  }
}

export default Index;
