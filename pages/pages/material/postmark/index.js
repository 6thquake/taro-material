import Taro, { Component } from '@tarojs/taro';
import { View, Button, Canvas } from '@tarojs/components';

import { RMPostmark } from '../../../';

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
    let now = new Date();

    return (
      <View className="root">
        <View className="spacer" />
        {
          <View className="postmark">
            <RMPostmark color="primary" text="primary" date={now} size="medium" />
            <RMPostmark
              color="secondary"
              text="secondary"
              date="2018-10-11 12:30:00"
              signature="吉刻联盟"
              size="normal"
            />
            <RMPostmark
              color="error"
              text="error"
              date="2018-10-11 12:30:00"
              signature="吉刻联盟"
              size="normal"
            />
            <RMPostmark
              color="success"
              text="success"
              date="2018-10-11 12:30:00"
              signature="吉刻联盟"
              size="normal"
            />
            <RMPostmark
              color="warning"
              text="warning"
              date="2018-10-11 12:30:00"
              signature="吉刻联盟"
              size="small"
            />
            <RMPostmark
              color="progress"
              text="progress"
              date="2018-10-11 12:30:00"
              signature="吉刻联盟"
              size="small"
            />
            <RMPostmark color="default" text="default" date="2018-10-11 12:30:00" size="small" />
            <RMPostmark color="white" text="white" date="2018-10-11 12:30:00" size="small" />
            <RMPostmark color="black" text="black" date="2018-10-11 12:30:00" size="small" />
            <RMPostmark
              color="black"
              text="中文"
              date="2018-10-11 12:30:00"
              signature="吉刻联盟"
              size="normal"
            />
            <RMPostmark
              color="black"
              text="中文"
              date="2018-10-11 12:30:00"
              signature="吉刻联盟"
              size="small"
            />
          </View>
        }
      </View>
    );
  }
}

export default Index;
