import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import dayjs from 'dayjs';

import { RMCard, RMCountDown } from '../../../';

import theme from '../../../styles/theme';
import './index.scss';

class Index extends Component {
  config = {
    navigationBarTitleText: 'Card',
  };

  componentWillMount() {}

  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    const day = dayjs()
      .add(2, 'days')
      .toDate()
      .getTime();

    return (
      <View className="root">
        <View className="body">
          <View className="title">no media</View>
          <View className="card">
            <RMCard
              header="限时特惠"
              title="吉刻联盟@吉野家战略合作正式启航！"
              content="吉刻去嘉定啦 嘉定人民我们来啦 。江桥万达店节后即将开业🎉🎉 上海市嘉定区华江路988号，吉刻去嘉定啦 嘉定人民我们来啦 。江桥万达店节后即将开业🎉🎉 上海市嘉定区华江路988号，吉刻去嘉定啦 嘉定人民我们来啦 。江桥万达店节后即将开业🎉🎉 上海市嘉定区华江路988号，吉刻联盟@吉野家战略合作正式启航！ 祝合作愉快！圣诞节快乐！"
              medias={[]}
              actions=""
              renderCountDown={<RMCountDown block deadline={day} isShowDay size="small" />}
            />
          </View>

          <View className="spacer" />
          <View className="title">one media</View>
          <View className="card">
            <RMCard
              header="限时特惠"
              title="吉刻联盟@吉野家战略合作正式启航！吉野家战略合作正式启航！吉野家战略合作正式启航！"
              content="吉刻去嘉定啦 嘉定人民我们来啦 。江桥万达店节后即将开业🎉🎉 上海市嘉定区华江路988号，吉刻去嘉定啦 嘉定人民我们来啦 。江桥万达店节后即将开业🎉🎉 上海市嘉定区华江路988号，吉刻联盟@吉野家战略合作正式启航！ 祝合作愉快！圣诞节快乐！"
              medias={[
                'https://code.aliyun.com/licoliu/resources/raw/master/images/discovery/1-3.JPG',
              ]}
              actions=""
              renderCountDown={<RMCountDown block deadline={day} isShowDay size="small" />}
            />
          </View>

          <View className="spacer" />
          <View className="title">two medias</View>
          <View className="card">
            <RMCard
              header="限时特惠"
              title="吉刻联盟@吉野家战略合作正式启航！"
              content="吉刻去嘉定啦 嘉定人民我们来啦 。江桥万达店节后即将开业🎉🎉 上海市嘉定区华江路988号，吉刻联盟@吉野家战略合作正式启航！ 祝合作愉快！圣诞节快乐！"
              medias={[
                'https://code.aliyun.com/licoliu/resources/raw/master/images/discovery/1-3.JPG',
                'https://code.aliyun.com/licoliu/resources/raw/master/images/discovery/2-3.JPG',
              ]}
              actions=""
              renderCountDown={<RMCountDown block deadline={day} isShowDay size="small" />}
            />
          </View>

          <View className="spacer" />
          <View className="title">multiple medias</View>
          <View className="card">
            <RMCard
              header="限时特惠"
              title="吉刻联盟@吉野家战略合作正式启航！"
              content="吉刻去嘉定啦 嘉定人民我们来啦 。江桥万达店节后即将开业🎉🎉 上海市嘉定区华江路988号，吉刻联盟@吉野家战略合作正式启航！ 祝合作愉快！圣诞节快乐！"
              medias={[
                'https://code.aliyun.com/licoliu/resources/raw/master/images/discovery/1-3.JPG',
                'https://code.aliyun.com/licoliu/resources/raw/master/images/discovery/2-3.JPG',
                'https://code.aliyun.com/licoliu/resources/raw/master/images/discovery/4-3.JPG',
              ]}
              actions=""
              renderCountDown={<RMCountDown block deadline={day} isShowDay size="small" />}
            />
          </View>

          <View className="spacer" />
          <View className="title">no content</View>
          <View className="card">
            <RMCard
              header="限时特惠"
              title="吉刻联盟@吉野家战略合作正式启航！"
              content=""
              medias={[
                'https://code.aliyun.com/licoliu/resources/raw/master/images/discovery/1-3.JPG',
              ]}
              actions=""
              renderCountDown={<RMCountDown block deadline={day} isShowDay size="small" />}
            />
          </View>

          <View className="spacer" />
          <View className="title">render count down</View>
          <View className="card">
            <RMCard
              header="限时特惠"
              title="吉刻联盟@吉野家战略合作正式启航！"
              content=""
              medias={[
                'https://code.aliyun.com/licoliu/resources/raw/master/images/discovery/1-3.JPG',
              ]}
              actions=""
              renderCountDown={<RMCountDown block deadline={day} isShowDay size="small" />}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default Index;
