import Taro, { Component } from '@tarojs/taro';
import PropTypes from 'prop-types';
import { View } from '@tarojs/components';

import AtActivityIndicator from '../components/activity-indicator';

import RMTypography from '../Typography';

import './Loading.scss';
import theme from '../styles/theme';

class RMLoading extends Component {
  render() {
    const { size, mode, color, content, status, message } = this.props;
    return (
      <View className="root">
        {status === 'loading' && (
          <AtActivityIndicator size={size} mode={mode} color={color} content={content} />
        )}
        {status === 'end' && (
          <View className="end">
            <View className="divider" />
            <RMTypography className="caption">{message}</RMTypography>
            <View className="divider" />
          </View>
        )}
      </View>
    );
  }
}

RMLoading.defaultProps = {
  size: 24,
  color: theme.palette.progress.main,
  status: 'closed',
  content: '加载中...',
  message: '坦白说 这已经是我的所有了',
};

RMLoading.propTypes = {
  status: PropTypes.oneOf(['loading', 'end', 'closed']),
  size: PropTypes.number,
  mode: PropTypes.string,
  color: PropTypes.string,
  content: PropTypes.string,
};

export default RMLoading;
