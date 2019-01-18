import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';

import { RMBadge, RMButton } from '../../../';

import './index.scss';
import theme from '../../../styles/theme';

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

          <View className="title">ribbon：</View>
          <View className="badge">
            <RMBadge
              renderValue={
                <View
                  style={{
                    padding: '16px 128px',
                    fontSize: '32px',
                    lineHeight: '40px',
                  }}
                >
                  点我抽奖
                </View>
              }
              variant="ribbon"
            >
              <View
                style={{
                  background: theme.palette.primary.main,
                  width: '300px',
                  height: '300px',
                  color: theme.palette.primary.contrastText,
                  fontSize: '96px',
                }}
              >
                测试
              </View>
            </RMBadge>
          </View>
        </View>
      </View>
    );
  }
}

export default Index;
