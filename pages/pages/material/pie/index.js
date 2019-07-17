import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';

import { RMPie } from '../../../';

import RMPage from '../../../Page';

import theme from '../../../styles/theme';
import './index.scss';

class Index extends RMPage {
  config = {
    navigationBarTitleText: 'Postmark',
  };

  componentWillMount() {}

  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="root">
        <View className="spacer" />
        <View className="pies">
          <View className="title">default</View>
          <View className="pie">
            <RMPie
              data={[
                { title: '3', percent: 0.3, color: theme.palette.primary.dark },
                { title: '1', percent: 0.1, color: theme.palette.primary.main },
                { title: '2', percent: 0.2, color: theme.palette.primary.light },
              ]}
            />
          </View>
          <View className="pie">
            <RMPie
              data={[
                { title: '1', percent: 0.1, color: theme.palette.primary.dark },
                { title: '7', percent: 0.7, color: theme.palette.primary.main },
                { title: '1', percent: 0.1, color: theme.palette.primary.light },
              ]}
            />
          </View>

          <View className="title">width: 64, height: 64</View>
          <View className="pie">
            <RMPie
              width={64}
              height={64}
              data={[
                { title: '3', percent: 0.3, color: theme.palette.primary.dark },
                { title: '1', percent: 0.1, color: theme.palette.primary.main },
                { title: '2', percent: 0.2, color: theme.palette.primary.light },
              ]}
              fontSize={20}
            />
          </View>

          <View className="title">raised</View>
          <View className="pie">
            <RMPie
              data={[
                { title: '1', percent: 0.1, color: theme.palette.primary.dark },
                { title: '7', percent: 0.7, color: theme.palette.primary.main },
                { title: '1', percent: 0.1, color: theme.palette.primary.light },
              ]}
              raised
            />
          </View>

          <View className="title">fontSize, font color</View>
          <View className="pie">
            <RMPie
              data={[
                { title: '1', percent: 0.1, color: theme.palette.primary.dark },
                { title: '2', percent: 0.2, color: theme.palette.primary.main },
                { title: '3', percent: 0.3, color: theme.palette.primary.light },
              ]}
              color={theme.palette.secondary.main}
            />
          </View>

          <View className="title">auto pie color</View>
          <View className="pie">
            <RMPie
              data={[
                { title: '1', percent: 0.1 },
                { title: '2', percent: 0.1 },
                { title: '3', percent: 0.1 },
                { title: '4', percent: 0.1 },
                { title: '5', percent: 0.1 },
                { title: '6', percent: 0.1 },
                { title: '7', percent: 0.1 },
                { title: '8', percent: 0.1 },
                { title: '9', percent: 0.1 },
              ]}
              color={theme.palette.secondary.dark}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default Index;
