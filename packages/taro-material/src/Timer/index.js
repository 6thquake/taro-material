import Taro from '@tarojs/taro';
import PropTypes from 'prop-types';
import { View, Text } from '@tarojs/components';
import classNames from 'classnames';

import AtComponent from '../common/component';
import '../CountDown/index.scss';

export default class RMTimer extends AtComponent {
  constructor() {
    super(...arguments);
    const { initial } = this.props;
    this.milliseconds = this.offsetSeconds(initial);
    this.state = { ...this.format() };
    this.timer = null;
  }

  offsetSeconds(initial) {
    let [timestamp] = [0];
    const now = new Date().getTime();

    if (initial instanceof Date) {
      timestamp = now - initial.getTime();
    } else if (initial) {
      timestamp = now - initial;
    }

    return timestamp;
  }

  format() {
    let [days, hours, minutes, seconds, milliseconds] = [0, 0, 0, 0, 0];

    if (this.milliseconds > 0) {
      const [daysUnit, hoursUnit, minutesUnit, secondsUnit] = [
        1000 * 60 * 60 * 24,
        1000 * 60 * 60,
        1000 * 60,
        1000 * 1,
      ];

      let timestamp = this.milliseconds;
      days = Math.floor(timestamp / daysUnit);

      timestamp -= days * daysUnit;
      hours = Math.floor(timestamp / hoursUnit);

      timestamp -= hours * hoursUnit;
      minutes = Math.floor(timestamp / minutesUnit);

      timestamp -= minutes * minutesUnit;
      seconds = Math.floor(timestamp / secondsUnit);

      timestamp -= seconds * secondsUnit;
      milliseconds = timestamp;
    }

    return {
      days,
      hours,
      minutes,
      seconds,
      milliseconds,
    };
  }

  formatNum(num) {
    return num <= 9 ? `0${num}` : `${num}`;
  }

  setTimer() {
    if (!this.timer) this.countdonwn();
  }

  clearTimer() {
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
  }

  countdonwn() {
    const { isShowMillisecond } = this.props;

    const { days, hours, minutes, seconds } = this.format();
    this.setState({ days, hours, minutes, seconds });

    let step = isShowMillisecond ? 500 : 1000;

    if (this.milliseconds <= 0) {
      this.clearTimer();
      step = Math.abs(this.milliseconds);
    }

    this.milliseconds += step;

    this.timer = setTimeout(() => {
      this.countdonwn();
    }, step);
  }

  componentWillReceiveProps(nextProps) {
    const props = this.props;
    if (nextProps.initial === props.initial) {
      return;
    }

    if (nextProps.initial && props.initial) {
      let timestamp = 0;
      let _timestamp = -1;

      if (nextProps.initial instanceof Date) {
        timestamp = nextProps.initial.getTime();
      } else {
        timestamp = nextProps.initial;
      }

      if (props.initial instanceof Date) {
        _timestamp = props.initial.getTime();
      } else {
        _timestamp = props.initial;
      }

      if (timestamp === _timestamp) {
        return;
      }
    }

    this.milliseconds = this.offsetSeconds(nextProps.initial);

    this.clearTimer();
    this.setTimer();
  }

  componentDidMount() {
    this.setTimer();
  }

  componentWillUnmount() {
    this.clearTimer();
  }

  componentDidHide() {
    this.clearTimer();
  }

  componentDidShow() {
    this.setTimer();
  }

  render() {
    const {
      className,
      customStyle,
      format,
      isShowDay,
      isShowMillisecond,
      isDark,
      size,
    } = this.props;
    const { days, hours, minutes, seconds, milliseconds } = this.state;

    return (
      <View
        className={classNames(
          {
            'rm-count-down': true,
            'rm-count-down--card': true,
            'rm-count-down--dark': isDark,
            [`rm-count-down--${size}`]: true,
          },
          className,
        )}
        style={customStyle}
      >
        {isShowDay && (
          <View className="rm-count-down__item">
            <View className="rm-count-down__time-box">
              <Text className="rm-count-down__time">{this.formatNum(days)}</Text>
            </View>
            <Text className="rm-count-down__separator">{format.days || format.day}</Text>
          </View>
        )}
        <View className="rm-count-down__item">
          <View className="rm-count-down__time-box">
            <Text className="rm-count-down__time">{this.formatNum(hours)}</Text>
          </View>
          <Text className="rm-count-down__separator">{format.hours || format.hour}</Text>
        </View>
        <View className="rm-count-down__item">
          <View className="rm-count-down__time-box">
            <Text className="rm-count-down__time">{this.formatNum(minutes)}</Text>
          </View>
          <Text className="rm-count-down__separator">{format.minutes || format.minute}</Text>
        </View>
        <View className="rm-count-down__item">
          <View className="rm-count-down__time-box">
            <Text className="rm-count-down__time">{this.formatNum(seconds)}</Text>
          </View>
          <Text className="rm-count-down__separator">{format.seconds || format.second}</Text>
        </View>

        {isShowMillisecond && (
          <View className="rm-count-down__item">
            <View className="rm-count-down__time-box">
              <Text className="rm-count-down__time">{milliseconds}</Text>
            </View>
          </View>
        )}
      </View>
    );
  }
}

RMTimer.defaultProps = {
  customStyle: '',
  className: '',
  isShowDay: false,
  isShowMillisecond: false,
  isDark: true,
  format: {
    days: '天',
    hours: '时',
    minutes: '分',
    seconds: '秒',
    day: '天',
    hour: '时',
    minute: '分',
    second: '秒',
  },
  initial: new Date(),
  size: 'normal',
};

RMTimer.propTypes = {
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  isShowDay: PropTypes.bool,
  isShowMillisecond: PropTypes.bool,
  isDark: PropTypes.bool,
  format: PropTypes.object,
  initial: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.number]),
  size: PropTypes.oneOf(['large', 'medium', 'normal', 'small', 'xs']),
};
