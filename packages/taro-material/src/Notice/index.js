import Taro, { Component } from '@tarojs/taro';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { View, Text } from '@tarojs/components';

import AtComponent from '../common/component';

import RMTypography from '../Typography';

import theme from '../styles/theme';
import ago from '../utils/date';

import './index.scss';

class Notice extends AtComponent {
  state = {
    date: new Date(),
  };

  render() {
    const { title, content, rows, color } = this.props;
    const { date } = this.state;
    let style = {};
    if (rows) {
      const height = (rows * 36) / 2;
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

    return (
      <View className={classNames(classObject, this.props.className)} style={style}>
        {title && <View className="subheading">{title}</View>}
        {content && <View className="body2">{content}</View>}
        <View className="body2">{this.props.children}</View>
        <View className="caption">{ago(date)}</View>
      </View>
    );
  }
}

Notice.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  rows: PropTypes.number,
};
Notice.defaultProps = {
  title: '',
  content: '',
  rows: 0,
  color: 'default',
};

export default Notice;
