import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';

import { RMIcon } from '../../../';

import RMPage from '../../../Page';

import theme from '../../../styles/theme';
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

          <View className="title">fill</View>
          <RMIcon fill="#AA00FF" color="default" fontSize={32} block>
            insert_chart
          </RMIcon>

          <View className="title">inherit</View>
          <RMIcon color="inherit" fontSize="inherit" block>
            insert_chart
          </RMIcon>

          <View className="title">custom style</View>
          <RMIcon
            fontSize={48}
            customStyle={{
              'background-image': '-webkit-linear-gradient(bottom,red,#fd8403,yellow)',
              '-webkit-background-clip': 'text',
              '-webkit-text-fill-color': 'transparent',
            }}
          >
            insert_chart
          </RMIcon>
        </View>
      </View>
    );
  }
}

export default Index;
