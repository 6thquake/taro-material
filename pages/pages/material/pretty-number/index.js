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

          <View className="title">DIGITS</View>
          <View className="number">
            <RMPrettyNumber value="987654321.987654321" prefix="$" suffix="元" digits={2} />
          </View>
          <View className="number">
            <RMPrettyNumber value="987654321.987654321" prefix="$" suffix="元" digits={4} />
          </View>

          <View className="title">NaN</View>
          <View className="number">
            <RMPrettyNumber value="abc" />
          </View>
          <View className="number">
            <RMPrettyNumber value="" />
          </View>
          <View className="number">
            <RMPrettyNumber value={null} />
          </View>
          <View className="number">
            <RMPrettyNumber value={undefined} />
          </View>

          <View className="title">customStyle</View>
          <View className="number">
            <RMPrettyNumber
              value="987654321.987654321"
              prefix="$"
              suffix="元"
              digits={2}
              customStyle={{ fontWeight: 900 }}
            />
          </View>
          <View className="number">
            <RMPrettyNumber
              value="987654321.987654321"
              prefix="$"
              suffix="元"
              digits={4}
              customStyle={{ fontWeight: 100 }}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default Index;
