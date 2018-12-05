import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';

import { RMMeter } from '../../taro-material';

import RMPage from '../../taro-material/Page';

import theme from '../../taro-material/styles/theme';
import './index.scss';

class Index extends RMPage {
  config = {
    navigationBarTitleText: 'StarVote',
  };

  componentWillMount() {}

  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="root">
        <View className="title">small</View>
        <View className="meter">
          <RMMeter value={12345.67} type="water" size="xs" />
          12345.67
        </View>
        <View className="meter">
          <RMMeter value={12345.67} type="power" size="xs" />
          12345.67
        </View>
        <View className="meter">
          <RMMeter value={123456.7891} type="gas" size="xs" />
          123456.7891
        </View>

        <View className="title">small</View>
        <View className="meter">
          <RMMeter value={1234.5} type="water" size="small" />
          1234.5
        </View>
        <View className="meter">
          <RMMeter value={1234.5} type="power" size="small" />
          1234.5
        </View>
        <View className="meter">
          <RMMeter value={12345.678} type="gas" size="small" />
          12345.678
        </View>

        <View className="title">normal</View>
        <View className="meter">
          <RMMeter value={123.4} type="water" size="normal" />
          123.4
        </View>
        <View className="meter">
          <RMMeter value={123.4} type="power" size="normal" />
          123.4
        </View>
        <View className="meter">
          <RMMeter value={1234.56} type="gas" size="normal" />
          1234.56
        </View>

        <View className="title">medium</View>
        <View className="meter">
          <RMMeter value={12.3} type="water" size="medium" />
          12.3
        </View>
        <View className="meter">
          <RMMeter value={12.3} type="power" size="medium" />
          12.3
        </View>
        <View className="meter">
          <RMMeter value={123.4} type="gas" size="medium" />
          123.4
        </View>

        <View className="title">large</View>
        <View className="meter">
          <RMMeter value={0.0} type="water" size="large" />
        </View>
        <View className="meter">
          <RMMeter value={0.0} type="power" size="large" />
        </View>
        <View className="meter">
          <RMMeter value={0.0} type="gas" size="large" />
        </View>
      </View>
    );
  }
}

export default Index;
