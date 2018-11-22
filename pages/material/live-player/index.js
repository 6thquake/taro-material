import Taro, { Component } from '@tarojs/taro';
import { View, Button, Canvas } from '@tarojs/components';

import { RMLivePlayer } from '../../taro-material';

import RMPage from '../../taro-material/Page';

import theme from '../../taro-material/styles/theme';

import './index.scss';

const data = {
  data: [
    {
      deviceSerial: 'C21006022',
      channelNo: 1,
      deviceName: 'C008我是主饺',
      hls: 'http://hls.open.ys7.com/openlive/61b2f64967684d28b73dea9c456fe1e5.m3u8',
      hlsHd: 'http://hls.open.ys7.com/openlive/61b2f64967684d28b73dea9c456fe1e5.hd.m3u8',
      rtmp: 'rtmp://rtmp.open.ys7.com/openlive/61b2f64967684d28b73dea9c456fe1e5',
      rtmpHd: 'rtmp://rtmp.open.ys7.com/openlive/61b2f64967684d28b73dea9c456fe1e5.hd',
      flvAddress: 'https://flvopen.ys7.com:9188/openlive/61b2f64967684d28b73dea9c456fe1e5.flv',
      hdFlvAddress: 'https://flvopen.ys7.com:9188/openlive/61b2f64967684d28b73dea9c456fe1e5.hd.flv',
      status: 1,
      exception: 0,
      ret: '200',
      desc: '获取成功!',
    },
  ],
  code: '200',
  msg: '操作成功!',
};

const sources = [
  {
    name: '普清',
    src: 'rtmp://rtmp.open.ys7.com/openlive/61b2f64967684d28b73dea9c456fe1e5',
  },
  {
    name: '超清',
    src: 'rtmp://rtmp.open.ys7.com/openlive/61b2f64967684d28b73dea9c456fe1e5.hd',
  },
];

class Index extends RMPage {
  config = {
    navigationBarTitleText: 'Live Player',
  };
  state = {
    value: '',
  };
  componentWillMount() {}

  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    const { value } = this.state;
    return (
      <View className="root">
        {/* <View className='player'>
          <RMLivePlayer
            // sources={sources}
            // refreshable
            src='https://flvopen.ys7.com:9188/openlive/bc50090321624433bcd8f3625fce725b.flv'
            autoplay
          />
        </View> */}
        {/* <View className='player'>
          <RMLivePlayer
            title='新大陆店2'
            sources={sources}
            src='rtmp://rtmp.open.ys7.com/openlive/61b2f64967684d28b73dea9c456fe1e5'
            autoplay
            objectFit='fillCrop'
          />
        </View> */}
        <View className="player">
          <RMLivePlayer
            title="新大陆店2"
            sources={sources}
            src="rtmp://rtmp.open.ys7.com/openlive/61b2f64967684d28b73dea9c456fe1e5"
            objectFit="fillCrop"
          />
        </View>
        <View className="player">
          <RMLivePlayer
            hasPlayBar
            title="新大陆店3"
            sources={sources}
            src="rtmp://rtmp.open.ys7.com/openlive/61b2f64967684d28b73dea9c456fe1e5"
            objectFit="fillCrop"
          />
        </View>
      </View>
    );
  }
}

export default Index;
