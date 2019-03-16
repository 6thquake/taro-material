import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import './index.scss';

export default class PanelBasic extends Component {
  config = {
    navigationBarTitleText: 'Taro Material',
  };

  render() {
    return <View>Theme</View>;
  }
}
