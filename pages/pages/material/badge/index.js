import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';

import { RMBadge, RMButton } from '../../../';

import './index.scss';

class Index extends Component {
  config = {
    navigationBarTitleText: '徽章',
  };
  state = {};

  render() {
    return (
      <View className="root">
        <View className="badges">
          <View className="title">text：</View>
          <View className="badge">
            <RMBadge value={10} variant="text">
              <RMButton variant="contained">测试</RMButton>
            </RMBadge>
          </View>
          <View className="title">dot：</View>
          <View className="badge">
            <RMBadge value={10} variant="dot">
              <RMButton variant="contained">测试</RMButton>
            </RMBadge>
          </View>
          <View className="title">mark：</View>
          <View className="badge">
            <RMBadge value="热" variant="mark">
              <RMButton variant="contained">测试</RMButton>
            </RMBadge>
          </View>
          <View className="title">ribbon：</View>
          <View className="badge">
            <RMBadge value="点我抽奖" variant="ribbon">
              <RMButton variant="contained">测试</RMButton>
            </RMBadge>
          </View>
        </View>
      </View>
    );
  }
}

export default Index;
