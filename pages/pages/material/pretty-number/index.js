import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';

import { RMPrettyNumber } from '../../../';

import RMPage from '../../../Page';

import theme from '../../../styles/theme';

import './index.scss';

class Index extends RMPage {
  config = {
    navigationBarTitleText: 'PrettyNumber',
  };

  state = {};

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnMount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="root">
        <View className="numbers">
          <View className="title">VALUE( STRING OR NUMBER )</View>
          <View className="number">
            <RMPrettyNumber value={25.9} />
          </View>
          <View className="number">
            <RMPrettyNumber value="25.90" />
          </View>

          <View className="title">FONT SIZE</View>
          <View className="number">
            <RMPrettyNumber fontSize={12} value="25.90" />
          </View>
          <View className="number">
            <RMPrettyNumber value={25.9} />
          </View>
          <View className="number">
            <RMPrettyNumber fontSize={32} value="25.90" />
          </View>

          <View className="title">PREFIX & SUFFIX</View>
          <View className="number">
            <RMPrettyNumber value="25.90" prefix="$" suffix="元" />
          </View>
          <View className="number">
            <RMPrettyNumber value="25.90" prefix="" suffix="%" />
          </View>

          <View className="title">COLOR</View>
          <View className="number">
            <RMPrettyNumber value="25.90" color={theme.palette.primary.main} />
          </View>
          <View className="number">
            <RMPrettyNumber value="25.90" color={theme.palette.secondary.main} />
          </View>
        </View>
      </View>
    );
  }
}

export default Index;
