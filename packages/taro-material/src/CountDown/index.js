import Taro from '@tarojs/taro';
import PropTypes from 'prop-types';
import { View, Text } from '@tarojs/components';
import classNames from 'classnames';

import AtComponent from '../common/component';
import './index.scss';

export default class RMCountDown extends AtComponent {
  constructor() {
    super(...arguments);
    const { deadline } = this.props;
    this.milliseconds = this.offsetSeconds(deadline);
    this.state = { ...this.format() };
    this.timer = null;
  }

  offsetSeconds(deadline) {
    let [timestamp] = [0];
    const now = new Date().getTime();

    if (deadline instanceof Date) {
      timestamp = deadline.getTime() - now;
    } else if (deadline) {
      timestamp = deadline - now;
    }

    return timestamp;
  }

  format() {
    const { autoTerminate } = this.props;
    let [days, hours, minutes, seconds, milliseconds] = [0, 0, 0, 0, 0];

    if (!autoTerminate || this.milliseconds > 0) {
      const [daysUnit, hoursUnit, minutesUnit, secondsUnit] = [
        1000 * 60 * 60 * 24,
        1000 * 60 * 60,
        1000 * 60,
        1000 * 1,
      ];

      let timestamp = Math.abs(this.milliseconds);
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
    const { isShowMillisecond, deadline, autoTerminate } = this.props;

    const { days, hours, minutes, seconds } = this.format();
    this.setState({ days, hours, minutes, seconds });

    const step = isShowMillisecond ? 500 : 1000;

    if (this.milliseconds <= 0) {
      if (deadline && this.milliseconds > -step) {
        this.props.onTimeUp();
      }
      if (autoTerminate) {
        this.clearTimer();
        return;
      }
    }

    this.milliseconds -= step;

    this.timer = setTimeout(() => {
      this.countdonwn();
    }, step);
  }

  componentWillReceiveProps(nextProps) {
    const props = this.props;
    if (nextProps.deadline === props.deadline) {
      return;
    }

    if (nextProps.deadline && props.deadline) {
      let timestamp = 0;
      let _timestamp = -1;

      if (nextProps.deadline instanceof Date) {
        timestamp = nextProps.deadline.getTime();
      } else {
        timestamp = nextProps.deadline;
      }

      if (props.deadline instanceof Date) {
        _timestamp = props.deadline.getTime();
      } else {
        _timestamp = props.deadline;
      }

      if (timestamp === _timestamp) {
        return;
      }
    }

    this.milliseconds = this.offsetSeconds(nextProps.deadline);

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
      size,
      autoTerminate,
    } = this.props;
    const { days, hours, minutes, seconds, milliseconds } = this.state;

    const _milliseconds = this.milliseconds;

    let isDark = this.props;
    if (!autoTerminate && _milliseconds < 0) {
      isDark = false;
    }

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

RMCountDown.defaultProps = {
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
  deadline: 0,
  onTimeUp: () => {},
  size: 'normal',
  autoTerminate: true,
};

RMCountDown.propTypes = {
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  isShowDay: PropTypes.bool,
  isShowMillisecond: PropTypes.bool,
  isDark: PropTypes.bool,
  format: PropTypes.object,
  deadline: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.number]),
  onTimeUp: PropTypes.func,
  size: PropTypes.oneOf(['large', 'medium', 'normal', 'small', 'xs']),
  autoTerminate: PropTypes.bool,
};
