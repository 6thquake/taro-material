import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import dayjs from 'dayjs';

import { RMCard, RMCountDown, RMButton, RMIcon } from '../../../';

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
                'https://code.aliyun.com/licoliu/resources/raw/master/images/navigators/paella.jpg',
              ]}
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
                'https://code.aliyun.com/licoliu/resources/raw/master/images/discovery/4-3.JPG',
                'https://code.aliyun.com/licoliu/resources/raw/master/images/navigators/contemplative-reptile.jpg',
              ]}
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
                'https://code.aliyun.com/licoliu/resources/raw/master/images/navigators/live-from-space.jpg',
                'https://code.aliyun.com/licoliu/resources/raw/master/images/navigators/paella.jpg',
                'https://code.aliyun.com/licoliu/resources/raw/master/images/navigators/contemplative-reptile.jpg',
                'https://code.aliyun.com/licoliu/resources/raw/master/images/discovery/4-3.JPG',
              ]}
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
                'https://code.aliyun.com/licoliu/resources/raw/master/images/navigators/live-from-space.jpg',
              ]}
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
                'https://code.aliyun.com/licoliu/resources/raw/master/images/navigators/live-from-space.jpg',
              ]}
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
                'https://code.aliyun.com/licoliu/resources/raw/master/images/navigators/paella.jpg',
              ]}
              renderCountDown={<RMCountDown block deadline={day} isShowDay size="small" />}
            />
          </View>

          <View className="spacer" />
          <View className="title">orientation: vertical, no content</View>
          <View className="card">
            <RMCard
              header="限时特惠"
              title="吉刻联盟@吉野家战略合作正式启航！"
              content=""
              medias={[
                'https://code.aliyun.com/licoliu/resources/raw/master/images/navigators/paella.jpg',
              ]}
              renderCountDown={<RMCountDown block deadline={day} isShowDay size="small" />}
              orientation="vertical"
            />
          </View>

          <View className="spacer" />
          <View className="title">orientation: vertical</View>
          <View className="card">
            <RMCard
              header="限时特惠"
              title="吉刻联盟@吉野家战略合作正式启航！"
              content="吉刻去嘉定啦 嘉定人民我们来啦 。江桥万达店节后即将开业🎉🎉 上海市嘉定区华江路988号，吉刻联盟@吉野家战略合作正式启航！ 祝合作愉快！圣诞节快乐！"
              medias={[
                'https://code.aliyun.com/licoliu/resources/raw/master/images/navigators/paella.jpg',
              ]}
              renderCountDown={<RMCountDown block deadline={day} isShowDay size="small" />}
              orientation="vertical"
              MediaProps={{ height: 128 }}
            />
          </View>

          <View className="spacer" />
          <View className="title">orientation: vertical, no medias</View>
          <View className="card">
            <RMCard
              header="限时特惠"
              title="吉刻联盟@吉野家战略合作正式启航！"
              content="吉刻去嘉定啦 嘉定人民我们来啦 。江桥万达店节后即将开业🎉🎉 上海市嘉定区华江路988号，吉刻联盟@吉野家战略合作正式启航！ 祝合作愉快！圣诞节快乐！"
              medias={[]}
              renderCountDown={<RMCountDown block deadline={day} isShowDay size="small" />}
              orientation="vertical"
            />
          </View>

          <View className="spacer" />
          <View className="title">orientation: vertical, 2 medias</View>
          <View className="card">
            <RMCard
              header="限时特惠"
              title="吉刻联盟@吉野家战略合作正式启航！"
              content="吉刻去嘉定啦 嘉定人民我们来啦 。江桥万达店节后即将开业🎉🎉 上海市嘉定区华江路988号，吉刻联盟@吉野家战略合作正式启航！ 祝合作愉快！圣诞节快乐！"
              medias={[
                'https://code.aliyun.com/licoliu/resources/raw/master/images/discovery/4-3.JPG',
                'https://code.aliyun.com/licoliu/resources/raw/master/images/navigators/contemplative-reptile.jpg',
              ]}
              renderCountDown={<RMCountDown block deadline={day} isShowDay size="small" />}
              orientation="vertical"
              MediaProps={{ height: 80 }}
            />
          </View>

          <View className="spacer" />
          <View className="title">orientation: vertical, multi medias</View>
          <View className="card">
            <RMCard
              header="限时特惠"
              title="吉刻联盟@吉野家战略合作正式启航！"
              content="吉刻去嘉定啦 嘉定人民我们来啦 。江桥万达店节后即将开业🎉🎉 上海市嘉定区华江路988号，吉刻联盟@吉野家战略合作正式启航！ 祝合作愉快！圣诞节快乐！"
              medias={[
                'https://code.aliyun.com/licoliu/resources/raw/master/images/navigators/live-from-space.jpg',
                'https://code.aliyun.com/licoliu/resources/raw/master/images/navigators/paella.jpg',
                'https://code.aliyun.com/licoliu/resources/raw/master/images/navigators/contemplative-reptile.jpg',
                'https://code.aliyun.com/licoliu/resources/raw/master/images/discovery/4-3.JPG',
              ]}
              renderCountDown={<RMCountDown block deadline={day} isShowDay size="small" />}
              orientation="vertical"
              MediaProps={{ height: 32 }}
            />
          </View>

          <View className="spacer" />
          <View className="title">orientation: vertical, multi medias, border radius </View>
          <View className="card center">
            <RMCard
              title="吉刻联盟@吉野家！"
              content="吉刻去嘉定啦 嘉定人民我们来啦 。江桥万达店节后即将开业🎉🎉"
              medias={[
                'https://code.aliyun.com/licoliu/resources/raw/master/images/navigators/live-from-space.jpg',
              ]}
              orientation="vertical"
              raised
              radius={8}
              MediaProps={{ height: 128 }}
              renderActions={
                <View className="row">
                  <RMButton color="primary" size="small">
                    SHARE
                  </RMButton>
                  <RMButton color="primary" size="small">
                    LEARN MORE
                  </RMButton>
                  <View className="spacing" />
                  <RMButton size="small">
                    <RMIcon fill="#AA00FF" color="default" fontSize={32} block>
                      more_vert
                    </RMIcon>
                  </RMButton>
                </View>
              }
            />
          </View>
        </View>
      </View>
    );
  }
}

export default Index;
