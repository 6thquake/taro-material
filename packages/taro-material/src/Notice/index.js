import Taro, { Component } from '@tarojs/taro';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { View, Text, Image } from '@tarojs/components';

import AtComponent from '../common/component';

import theme from '../styles/theme';
import ago from '../utils/date';

import './index.scss';

class Notice extends AtComponent {
  state = {
    date: new Date(),
  };

  render() {
    const { title, content, rows, color, icon } = this.props;
    const { date } = this.state;

    const height = (rows * 36) / 2;

    let style = {};
    if (rows) {
      style = {
        maxHeight: `${height}px`,
        minHeight: `${height}px`,
        height: `${height}px`,
        WebkitLineClamp: rows,
      };
    }

    let _color = '';
    if (color && color.length >= 1) {
      _color = color.charAt(0).toUpperCase() + color.substring(1);
    }

    const classObject = {
      'rm-notice': true,
      [`color${_color}`]: color !== 'inherit',
    };

    const iconStyle = {
      width: `${height}px`,
      height: `${height}px`,
    };

    return (
      <View className={classNames(classObject, this.props.className)}>
        <View className="rm-notice-content" style={style}>
          {title && <View className="subheading">{title}</View>}
          {content && <View className="body2">{content}</View>}
          <View className="body2">{this.props.children}</View>
          <View className="caption">{ago(date)}</View>
        </View>
        {icon && (
          <View className="rm-notice-icon" style={iconStyle}>
            <Image style={{ width: '100%', height: '100%' }} mode="aspectFill" src={icon} />
          </View>
        )}
      </View>
    );
  }
}

Notice.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  rows: PropTypes.number,
  color: PropTypes.oneOf([
    'inherit',
    'primary',
    'secondary',
    'action',
    'error',
    'disabled',
    'success',
    'warning',
    'progress',
    'default',
  ]),
  icon: PropTypes.string,
};
Notice.defaultProps = {
  title: '',
  content: '',
  rows: 0,
  color: 'default',
  icon: '',
};

export default Notice;
