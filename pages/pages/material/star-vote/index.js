import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';

import { RMStarVote } from '../../../';

import RMPage from '../../../Page';

import theme from '../../../styles/theme';
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
        <View className="title">xs, default</View>
        <View className="starvote">
          <RMStarVote count={5} value={0} defaultValue={0} size="xs" color="default" />
        </View>
        <View className="starvote">
          <RMStarVote count={5} value={4.2} defaultValue={0} size="xs" color="default" />
        </View>
        <View className="starvote">
          <RMStarVote count={5} value={4.3} defaultValue={0} size="xs" color="default" />
        </View>
        <View className="starvote">
          <RMStarVote count={5} value={4.7} defaultValue={0} size="xs" color="default" />
        </View>
        <View className="starvote">
          <RMStarVote count={5} value={5} defaultValue={0} size="xs" color="default" />
        </View>
        <View className="starvote">
          <RMStarVote count={5} value={6} defaultValue={0} size="xs" color="default" />
        </View>

        <View className="title">small, primary</View>
        <View className="starvote">
          <RMStarVote count={5} value={0} defaultValue={0} size="small" color="primary" />
        </View>
        <View className="starvote">
          <RMStarVote count={5} value={4.2} defaultValue={0} size="small" color="primary" />
        </View>
        <View className="starvote">
          <RMStarVote count={5} value={4.3} defaultValue={0} size="small" color="primary" />
        </View>
        <View className="starvote">
          <RMStarVote count={5} value={4.7} defaultValue={0} size="small" color="primary" />
        </View>
        <View className="starvote">
          <RMStarVote count={5} value={5} defaultValue={0} size="small" color="primary" />
        </View>
        <View className="starvote">
          <RMStarVote count={5} value={6} defaultValue={0} size="small" color="primary" />
        </View>

        <View className="title">normal/medium, secondary</View>
        <View className="starvote">
          <RMStarVote count={5} value={0} defaultValue={0} size="normal" color="secondary" />
        </View>
        <View className="starvote">
          <RMStarVote count={5} value={4.2} defaultValue={0} size="normal" color="secondary" />
        </View>
        <View className="starvote">
          <RMStarVote count={5} value={4.3} defaultValue={0} size="normal" color="secondary" />
        </View>
        <View className="starvote">
          <RMStarVote count={5} value={4.7} defaultValue={0} size="normal" color="secondary" />
        </View>
        <View className="starvote">
          <RMStarVote count={5} value={5} defaultValue={0} size="normal" color="secondary" />
        </View>
        <View className="starvote">
          <RMStarVote count={5} value={6} defaultValue={0} size="normal" color="secondary" />
        </View>

        <View className="title">large, inherit</View>
        <View className="starvote inherit">
          <RMStarVote count={5} value={0} defaultValue={0} size="large" color="inherit" />
        </View>
        <View className="starvote inherit">
          <RMStarVote count={5} value={4.2} defaultValue={0} size="large" color="inherit" />
        </View>
        <View className="starvote inherit">
          <RMStarVote count={5} value={4.3} defaultValue={0} size="large" color="inherit" />
        </View>
        <View className="starvote inherit">
          <RMStarVote count={5} value={4.7} defaultValue={0} size="large" color="inherit" />
        </View>
        <View className="starvote inherit">
          <RMStarVote count={5} value={5} defaultValue={0} size="large" color="inherit" />
        </View>
        <View className="starvote inherit">
          <RMStarVote count={5} value={6} defaultValue={0} size="large" color="inherit" />
        </View>

        <View className="title">large, action</View>
        <View className="starvote">
          <RMStarVote count={5} value={0} defaultValue={0} size="large" color="action" />
        </View>
        <View className="starvote">
          <RMStarVote count={5} value={4.2} defaultValue={0} size="large" color="action" />
        </View>
        <View className="starvote">
          <RMStarVote count={5} value={4.3} defaultValue={0} size="large" color="action" />
        </View>
        <View className="starvote">
          <RMStarVote count={5} value={4.7} defaultValue={0} size="large" color="action" />
        </View>
        <View className="starvote">
          <RMStarVote count={5} value={5} defaultValue={0} size="large" color="action" />
        </View>
        <View className="starvote">
          <RMStarVote count={5} value={6} defaultValue={0} size="large" color="action" />
        </View>

        <View className="title">large, error</View>
        <View className="starvote">
          <RMStarVote count={5} value={0} defaultValue={0} size="large" color="error" />
        </View>
        <View className="starvote">
          <RMStarVote count={5} value={4.2} defaultValue={0} size="large" color="error" />
        </View>
        <View className="starvote">
          <RMStarVote count={5} value={4.3} defaultValue={0} size="large" color="error" />
        </View>
        <View className="starvote">
          <RMStarVote count={5} value={4.7} defaultValue={0} size="large" color="error" />
        </View>
        <View className="starvote">
          <RMStarVote count={5} value={5} defaultValue={0} size="large" color="error" />
        </View>
        <View className="starvote">
          <RMStarVote count={5} value={6} defaultValue={0} size="large" color="error" />
        </View>

        <View className="title">large, disabled</View>
        <View className="starvote">
          <RMStarVote count={5} value={0} defaultValue={0} size="large" color="disabled" />
        </View>
        <View className="starvote">
          <RMStarVote count={5} value={4.2} defaultValue={0} size="large" color="disabled" />
        </View>
        <View className="starvote">
          <RMStarVote count={5} value={4.3} defaultValue={0} size="large" color="disabled" />
        </View>
        <View className="starvote">
          <RMStarVote count={5} value={4.7} defaultValue={0} size="large" color="disabled" />
        </View>
        <View className="starvote">
          <RMStarVote count={5} value={5} defaultValue={0} size="large" color="disabled" />
        </View>
        <View className="starvote">
          <RMStarVote count={5} value={6} defaultValue={0} size="large" color="disabled" />
        </View>

        <View className="title">large, success</View>
        <View className="starvote">
          <RMStarVote count={5} value={0} defaultValue={0} size="large" color="success" />
        </View>
        <View className="starvote">
          <RMStarVote count={5} value={4.2} defaultValue={0} size="large" color="success" />
        </View>
        <View className="starvote">
          <RMStarVote count={5} value={4.3} defaultValue={0} size="large" color="success" />
        </View>
        <View className="starvote">
          <RMStarVote count={5} value={4.7} defaultValue={0} size="large" color="success" />
        </View>
        <View className="starvote">
          <RMStarVote count={5} value={5} defaultValue={0} size="large" color="success" />
        </View>
        <View className="starvote">
          <RMStarVote count={5} value={6} defaultValue={0} size="large" color="success" />
        </View>

        <View className="title">large, warning</View>
        <View className="starvote">
          <RMStarVote count={5} value={0} defaultValue={0} size="large" color="warning" />
        </View>
        <View className="starvote">
          <RMStarVote count={5} value={4.2} defaultValue={0} size="large" color="warning" />
        </View>
        <View className="starvote">
          <RMStarVote count={5} value={4.3} defaultValue={0} size="large" color="warning" />
        </View>
        <View className="starvote">
          <RMStarVote count={5} value={4.7} defaultValue={0} size="large" color="warning" />
        </View>
        <View className="starvote">
          <RMStarVote count={5} value={5} defaultValue={0} size="large" color="warning" />
        </View>
        <View className="starvote">
          <RMStarVote count={5} value={6} defaultValue={0} size="large" color="warning" />
        </View>

        <View className="title">large, progress</View>
        <View className="starvote">
          <RMStarVote count={5} value={0} defaultValue={0} size="large" color="progress" />
        </View>
        <View className="starvote">
          <RMStarVote count={5} value={4.2} defaultValue={0} size="large" color="progress" />
        </View>
        <View className="starvote">
          <RMStarVote count={5} value={4.3} defaultValue={0} size="large" color="progress" />
        </View>
        <View className="starvote">
          <RMStarVote count={5} value={4.7} defaultValue={0} size="large" color="progress" />
        </View>
        <View className="starvote">
          <RMStarVote count={5} value={5} defaultValue={0} size="large" color="progress" />
        </View>
        <View className="starvote">
          <RMStarVote count={5} value={6} defaultValue={0} size="large" color="progress" />
        </View>
      </View>
    );
  }
}

export default Index;
