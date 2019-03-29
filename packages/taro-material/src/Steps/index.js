import Taro from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import RMTypography from '../Typography';
import RMIcon from '../Icon';
import AtComponent from '../common/component';
import theme from '../styles/theme';

import './index.scss';

export default class RMSteps extends AtComponent {
  static defaultProps = {
    customStyle: '',
    className: '',
    current: 0,
    items: [],
    onChange: () => {},
    isDark: false,
    activeColor: '',
  };

  static propTypes = {
    customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
    current: PropTypes.number,
    items: PropTypes.array,
    isDark: PropTypes.bool,
    onChange: PropTypes.func,
    activeColor: PropTypes.string,
  };

  handleClick() {
    this.props.onChange(...arguments);
  }

  render() {
    const { customStyle, className, items, current, isDark, activeColor } = this.props;

    return (
      <View className={classNames('at-steps', className)} style={customStyle}>
        {items.map((item, i) => (
          <View
            key={item.title}
            className={classNames({
              'at-steps__item': true,
              'at-steps__item--active': i === current,
              'at-steps__item--inactive': i !== current,
            })}
            onClick={this.handleClick.bind(this, i)}
          >
            <View className="at-steps__circular-wrap">
              {i !== 0 ? <View className="at-steps__left-line" /> : null}
              {item.success || item.error ? (
                <RMIcon
                  block
                  customStyle={{ fontSize: '28px' }}
                  fontSize="28px"
                  color={item.success ? 'success' : 'error'}
                >
                  {item.success ? 'done' : 'clear'}
                </RMIcon>
              ) : (
                <View
                  className="at-steps__circular"
                  style={{
                    background: current === i ? activeColor : '',
                  }}
                >
                  {item.icon ? (
                    <RMIcon
                      block
                      fontSize={`${item.icon.size || 24}px`}
                      customStyle={{ fontSize: `${item.icon.size || 24}px` }}
                      color={i === current ? item.icon.activeColor : item.icon.inactiveColor}
                    >
                      {item.icon.value}
                    </RMIcon>
                  ) : (
                    <Text className="at-steps__num">{item.value}</Text>
                  )}
                </View>
              )}
              {i !== items.length - 1 ? <View className="at-steps__right-line" /> : null}
            </View>
            <RMTypography
              color={isDark ? theme.palette.primary.contrastText : 'default'}
              className="body1"
            >
              {item.title}
            </RMTypography>
            <View className="at-steps__desc">{item.desc}</View>
          </View>
        ))}
      </View>
    );
  }
}
