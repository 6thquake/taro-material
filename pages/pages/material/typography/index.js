import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';

import { RMTypography } from '../../../';

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
          <RMTypography fontSize="inherit" color={theme.palette.primary.main}>
            hello world!
          </RMTypography>
          <View className="title">48, default</View>
          <RMTypography fontSize={48} color="default">
            hello world!
          </RMTypography>
          <View className="title">inherit</View>
          <RMTypography color="inherit" fontSize="inherit" block>
            hello world!
          </RMTypography>

          <View className="title">custom style</View>
          <RMTypography
            fontSize={48}
            customStyle={{
              'background-image': '-webkit-linear-gradient(bottom,red,#fd8403,yellow)',
              '-webkit-background-clip': 'text',
              '-webkit-text-fill-color': 'transparent',
            }}
          >
            hello world!
          </RMTypography>
        </View>
      </View>
    );
  }
}

export default Index;
