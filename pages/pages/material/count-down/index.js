import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';

import dayjs from 'dayjs';

import { RMCountDown, RMTimer } from '../../../';

import './index.scss';

class Index extends Component {
  config = {
    navigationBarTitleText: '倒计时',
  };

  state = { end: false, now: new Date().getTime() };

  componentDidMount() {
    const day = dayjs()
      .add(2, 'days')
      .toDate()
      .getTime();

    const hour = dayjs()
      .add(2, 'hours')
      .toDate()
      .getTime();

    const minute = dayjs()
      .add(2, 'minutes')
      .toDate()
      .getTime();

    const second = dayjs()
      .add(10, 'seconds')
      .toDate()
      .getTime();

    this.setState({
      day,
      hour,
      minute,
      second,
    });
  }

  handleTimeUp3() {
    console.log('--------time up--------');
    this.handleTimeUp();
  }

  handleTimeUp2() {
    this.setState({ end: true });
    this.handleTimeUp();
  }
  handleTimeUp() {
    Taro.showToast({
      title: '倒计时结束',
      icon: 'none',
      duration: 3000,
    });
  }

  render() {
    const { day, hour, minute, second, end, now } = this.state;
    return (
      <View className="root">
        <View className="count-downs">
          <View className="title">count down and timer：</View>
          <View className="count-down">
            <RMCountDown
              deadline={second}
              size="normal"
              onTimeUp={this.handleTimeUp3}
              autoTerminate={false}
            />
          </View>

          <View className="title">2 days：</View>
          <View className="count-down">
            <RMCountDown deadline={day} isShowDay isShowMillisecond size="normal" />
          </View>
          <View className="title">2 hours：</View>
          <View className="count-down">
            <RMCountDown deadline={hour} size="normal" />
          </View>
          <View className="title">2 minutes：</View>
          <View className="count-down">
            <RMCountDown deadline={minute} size="normal" />
          </View>
          <View className="title">10 seconds：</View>
          <View className="count-down">
            <RMCountDown deadline={second} size="normal" />
          </View>
          <View className="title">null：</View>
          <View className="count-down">
            <RMCountDown deadline={null} size="normal" />
          </View>
          <View className="title">handle on time up：</View>
          <View className="count-down">
            <RMCountDown deadline={minute} size="normal" onTimeUp={this.handleTimeUp} />
          </View>
          <View className="title">dark：</View>
          <View className="count-down">
            <RMCountDown deadline={day} size="normal" />
          </View>
          <View className="title">not dark：</View>
          <View className="count-down">
            <RMCountDown deadline={day} isDark={false} size="small" />
          </View>
          <View className="title">large：</View>
          <View className="count-down">
            <RMCountDown deadline={day} isDark={false} size="large" />
          </View>
          <View className="title">normal/medium：</View>
          <View className="count-down">
            <RMCountDown deadline={day} isDark={false} size="normal" />
          </View>
          <View className="title">small：</View>
          <View className="count-down">
            <RMCountDown deadline={day} isDark={false} size="small" />
          </View>
          <View className="title">xs：</View>
          <View className="count-down">
            <RMCountDown deadline={day} isDark={false} size="xs" />
          </View>
          <View className="title">timer dark：</View>
          <View className="count-down">
            <RMTimer initial={now} size="normal" />
          </View>
          <View className="title">timer not dark：</View>
          <View className="count-down">
            <RMTimer initial={now} isDark={false} size="small" />
          </View>
          <View className="title">timer large：</View>
          <View className="count-down">
            <RMTimer initial={now} isDark={false} size="large" />
          </View>
          <View className="title">timer normal/medium：</View>
          <View className="count-down">
            <RMTimer initial={now} isDark={false} size="normal" />
          </View>
          <View className="title">timer small：</View>
          <View className="count-down">
            <RMTimer initial={now} isDark={false} size="small" />
          </View>
          <View className="title">timer xs：</View>
          <View className="count-down">
            <RMTimer initial={now} isDark={false} size="xs" />
          </View>

          <View className="title">count down and timer：</View>
          <View className="count-down">
            {!end && <RMCountDown deadline={second} size="normal" onTimeUp={this.handleTimeUp2} />}
            {end && <RMTimer initial={second} size="normal" isDark={false} />}
          </View>
        </View>
      </View>
    );
  }
}

export default Index;
