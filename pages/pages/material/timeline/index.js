import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';

import { RMTimeline, RMTimelineItem, AtDivider } from '../../../';

import RMPage from '../../../Page';

import theme from '../../../styles/theme';

class Index extends RMPage {
  config = {
    navigationBarTitleText: 'Timeline',
  };

  state = {
    data: [
      {
        id: '1',
        title: 'yoyo',
        // avatar: 'lico',
        name: 'lico',
        date: '2019-04-10',
        // status: 'failure',
        remark: 'hahahahahha',
      },
      {
        id: '2',
        title: 'yoyo2',
        // avatar: 'lico2',
        name: 'lico2',
        date: '2019-03-10',
        // status: 'success',
        remark: 'hahahahahha',
      },
      {
        id: '3',
        title: 'yoyo2',
        // avatar: 'lico3',
        name: 'lico3',
        date: '2019-02-10',
        // status: 'progress',
        remark: 'hahahahahha',
      },
    ],
    data2: [
      {
        id: '4',
        title: 'yoyo2',
        // avatar: 'lico2',
        name: 'lico2',
        date: '2019-03-10',
        status: 'success',
        color: theme.palette.text.primary,
        remark: 'hahahahahha',
      },
      {
        id: '5',
        title: 'yoyo2',
        // avatar: 'lico3',
        name: 'lico3',
        date: '2019-02-10',
        status: 'progress',
        color: theme.palette.text.primary,
        remark: 'hahahahahha',
      },
      {
        id: '6',
        title: 'yoyo',
        // avatar: 'lico',
        name: 'lico',
        date: '2019-04-10',
        status: 'failure',
        color: theme.palette.text.primary,
        remark: 'hahahahahha',
      },
    ],
  };

  componentWillMount() {}

  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    const { data, data2 } = this.state;
    return (
      <View className="root">
        <RMTimeline data={data} />

        <AtDivider />

        <RMTimeline>
          {data.map((item, index) => (
            <RMTimelineItem
              key={item.id}
              title={item.title}
              avatar={item.avatar}
              tail={false}
              name={item.name}
              status={item.status}
              remark={item.remark}
              date={item.date}
              renderMore={<View>{index}</View>}
            />
          ))}
        </RMTimeline>

        <AtDivider />

        <RMTimeline>
          {data2.map((item, index) => (
            <RMTimelineItem
              key={item.id}
              title={item.title}
              avatar={item.avatar}
              tail={false}
              name={item.name}
              status={item.status}
              remark={item.remark}
              date={item.date}
              renderMore={<View>{index}</View>}
            />
          ))}
        </RMTimeline>

        <AtDivider />

        <RMTimeline>
          {data2.map((item, index) => (
            <RMTimelineItem
              key={item.id}
              avatar={item.avatar}
              tail={false}
              name={item.name}
              status={item.status}
              remark={item.remark}
              date={item.date}
              renderMore={<View>{index}</View>}
            />
          ))}
        </RMTimeline>
      </View>
    );
  }
}

export default Index;
