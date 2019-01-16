import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';

import { RMPanel } from '../../../';

import RMPage from '../../../Page';

import theme from '../../../styles/theme';
import './index.scss';

class Index extends RMPage {
  config = {
    navigationBarTitleText: 'Panel',
  };

  componentWillMount() {}

  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  handleActions(e) {
    console.log('action', e);
  }

  render() {
    const actions = [
      {
        name: 'cancel',
        size: 'small',
        variant: 'text',
        color: 'default',
        label: '取消',
      },
      {
        name: 'ok',
        size: 'small',
        variant: 'contained',
        color: 'primary',
        // label: '确认'
      },
    ];

    return (
      <View className="root">
        <View className="spacer" />
        <View className="panel">
          {[1, 2, 3, 4, 5].map((item, index) => (
            <View key={item} className="panel">
              <RMPanel
                title="生如夏花之绚烂"
                note="死如秋叶之寂静"
                onAction={this.handleActions}
                open={index === 1}
                actions={actions}
                expandable={index !== 0}
              >
                <View>actions</View>
                <View>navigationBarTitleText</View>
                <View>className</View>
                <View>default</View>
                <View>e</View>
                <View>function() {}</View>
                <View>getElementsByTagName('')</View>
                <View>handleActions</View>
                <View>if (true) {}</View>
                <View>j</View>
                <View>k</View>
                <View>label</View>
                <View>map</View>
                <View>name</View>
              </RMPanel>
            </View>
          ))}
        </View>

        <View className="spacer" />
        <View className="panel">
          {[1, 2, 3, 4, 5].map((item, index) => (
            <View key={item} className="panel">
              <RMPanel
                title="生如夏花之绚烂"
                note="死如秋叶之寂静"
                onAction={this.handleActions}
                open={index === 1}
                actions={actions}
                expandable={index !== 0}
              >
                <View>actions</View>
                <View>navigationBarTitleText</View>
                <View>className</View>
                <View>default</View>
                <View>e</View>
                <View>function() {}</View>
                <View>getElementsByTagName('')</View>
                <View>handleActions</View>
                <View>if (true) {}</View>
                <View>j</View>
                <View>k</View>
                <View>label</View>
                <View>map</View>
                <View>name</View>
              </RMPanel>
            </View>
          ))}
        </View>
      </View>
    );
  }
}

export default Index;
