import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';

import { RMNoticeBar } from '../../taro-material';

import RMPage from '../../taro-material/Page';

import theme from '../../taro-material/styles/theme';
import './index.scss';

class Index extends RMPage {
  config = {
    navigationBarTitleText: 'NoticeBar',
  };

  componentWillMount() {}

  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="root">
        <View className="notices">
          <View className="title">文字</View>
          <View className="notice">
            <RMNoticeBar single>单行文本 - 这是 NoticeBar 通告栏，结束。</RMNoticeBar>
          </View>
          <View className="notice">
            <RMNoticeBar single={false}>
              多行文本 - 这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是
              NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar
              通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，结束。
            </RMNoticeBar>
          </View>

          <View className="title">跑马灯</View>
          <View className="notice">
            <RMNoticeBar marquee single>
              单行文本 - 这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，结束。
            </RMNoticeBar>
          </View>

          <View className="notice">
            <RMNoticeBar marquee single={false}>
              多行文本 - 这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是
              NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar
              通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，结束。
            </RMNoticeBar>
          </View>

          <View className="title">纵向滚动</View>
          <View className="notice">
            <RMNoticeBar marquee single vertical>
              单行文本 - 这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，结束。
            </RMNoticeBar>
          </View>

          <View className="notice">
            <RMNoticeBar marquee single={false} vertical>
              多行文本 - 这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是
              NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar
              通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，结束。
            </RMNoticeBar>
          </View>

          <View className="notice">
            <RMNoticeBar marquee single={false} vertical height={72} speed={20}>
              多行文本 - 这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是
              NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar
              通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，结束。
            </RMNoticeBar>
          </View>

          <View className="title">带图标</View>
          <View className="notice">
            <RMNoticeBar icon="access_alarm">
              单行文本 - 这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，结束。
            </RMNoticeBar>
          </View>
          <View className="notice">
            <RMNoticeBar icon="access_alarm">
              多行文本 - 这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是
              NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar
              通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，结束。
            </RMNoticeBar>
          </View>

          <View className="title">主题</View>
          <View className="notice">
            <RMNoticeBar icon="access_alarm" single color="default">
              单行文本 - 这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，结束。
            </RMNoticeBar>
          </View>
          <View className="notice">
            <RMNoticeBar icon="access_alarm" color="primary">
              多行文本 - 这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是
              NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar
              通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，结束。
            </RMNoticeBar>
          </View>
          <View className="notice">
            <RMNoticeBar marquee vertical single color="secondary">
              单行文本 - 这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，结束。
            </RMNoticeBar>
          </View>
          <View className="notice">
            <RMNoticeBar marquee single={false} vertical color="error">
              多行文本 - 这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是
              NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar
              通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，结束。
            </RMNoticeBar>
          </View>
          <View className="notice">
            <RMNoticeBar single moreText="查看详情" color="success">
              单行文本 - 这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，结束。
            </RMNoticeBar>
          </View>
          <View className="notice">
            <RMNoticeBar icon="volume_up" marquee single moreText="查看详情" color="warning">
              单行文本 - 这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，结束。
            </RMNoticeBar>
          </View>
          <View className="notice">
            <RMNoticeBar icon="volume_up" marquee single moreText="查看详情" color="action">
              单行文本 - 这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，结束。
            </RMNoticeBar>
          </View>
          <View className="notice">
            <RMNoticeBar icon="volume_up" marquee single moreText="查看详情" color="disabled">
              单行文本 - 这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，结束。
            </RMNoticeBar>
          </View>
          <View className="notice">
            <RMNoticeBar icon="volume_up" marquee single moreText="查看详情" color="progress">
              单行文本 - 这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，结束。
            </RMNoticeBar>
          </View>

          <View className="title">查看更多</View>
          <View className="notice">
            <RMNoticeBar single moreText="查看详情" showMore>
              单行文本 - 这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，结束。
            </RMNoticeBar>
          </View>
          <View className="notice">
            <RMNoticeBar icon="volume_up" marquee single moreText="查看详情" showMore>
              单行文本 - 这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，结束。
            </RMNoticeBar>
          </View>
          <View className="notice">
            <RMNoticeBar icon="volume_up" marquee single={false} moreText="查看详情" showMore>
              多行文本 - 这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是
              NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar
              通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，结束。
            </RMNoticeBar>
          </View>

          <View className="title">关闭按钮</View>
          <View className="notice">
            <RMNoticeBar single close>
              单行文本 - 这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，结束。
            </RMNoticeBar>
          </View>
          <View className="notice">
            <RMNoticeBar icon="volume_up" single close moreText="查看详情">
              单行文本 - 这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，结束。
            </RMNoticeBar>
          </View>
          <View className="notice">
            <RMNoticeBar icon="volume_up" marquee single close moreText="查看详情">
              单行文本 - 这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，结束。
            </RMNoticeBar>
          </View>
          <View className="notice">
            <RMNoticeBar icon="volume_up" marquee single={false} close moreText="查看详情">
              多行文本 - 这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是
              NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar
              通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，结束。
            </RMNoticeBar>
          </View>
        </View>
      </View>
    );
  }
}

export default Index;
