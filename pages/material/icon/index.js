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
          <RMIcon fontSize="inherit" color="primary">
            place
          </RMIcon>
          <RMIcon fontSize={48} color="default">
            rotate_right
          </RMIcon>
          <RMIcon color="inherit" fontSize="inherit" block={true}>
            insert_chart
          </RMIcon>
        </View>
      </View>
    );
  }
}

export default Index;
