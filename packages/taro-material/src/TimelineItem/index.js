import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import RMIcon from '../Icon';
import RMTypography from '../Typography';

import AtAvatar from '../components/avatar';
import AtActivityIndicator from '../components/activity-indicator';

import ago from '../utils/date';

import theme from '../styles/theme';

import './TimelineItem.scss';

class RMTimelineItem extends Component {
  componentWillReceiveProps(nextProps) {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    const {
      /* id, */ title,
      avatar,
      tail,
      name,
      status,
      remark,
      date,
      dateFormat = 'YYYY-MM-DD HH:mm:ss',
    } = this.props;

    let color = null;
    switch (status) {
      case 'success':
        color = theme.palette.success.main;
        break;
      case 'failure':
        color = theme.palette.error.main;
        break;
      case 'progress':
        color = theme.palette.progress.main;
        break;
      default:
        color = theme.palette.grey['300'];
        break;
    }

    return (
      <View className="step">
        {title && (
          <View className="header">
            <View className="title">
              <RMTypography className="subheading">{title}</RMTypography>
            </View>
            <View className="time">
              {date && (
                <RMTypography className="caption" fontSize={10}>
                  {ago(date, dateFormat)}
                </RMTypography>
              )}
            </View>
          </View>
        )}

        <View className="body">
          <View className="box">
            <View className="avatar">
              <AtAvatar
                circle
                image={avatar}
                text={name}
                size="small"
                customStyle={{ ...(status ? { border: `2px solid ${color}` } : null) }}
              />

              {!tail && (
                <View class="status">
                  {status === 'success' && (
                    <View className="result success">
                      <RMIcon fontSize="inherit" color="inherit" block>
                        check
                      </RMIcon>
                    </View>
                  )}
                  {status === 'failure' && (
                    <View className="result failure">
                      <RMIcon fontSize="inherit" color="inherit" block>
                        close
                      </RMIcon>
                    </View>
                  )}
                </View>
              )}
              {!tail && <View className={classNames({ tail: true, [status]: true })} />}
            </View>
            <View className="content">
              <View className="subtitle">
                <RMTypography className="subheading" block>
                  {name}
                </RMTypography>
                <View className="time">
                  <RMTypography className="caption">
                    {!title && date ? ago(date, dateFormat) : ''}
                  </RMTypography>
                </View>
              </View>
              {status && (
                <View className="status">
                  {status === 'progress' && (
                    <View className="progress">
                      <AtActivityIndicator size={24} color={theme.palette.progress.main} />
                    </View>
                  )}
                  {status !== 'default' && (
                    <RMTypography color={color} className="body1" block>
                      {status}
                    </RMTypography>
                  )}
                </View>
              )}
              {!title && date && (
                <View>
                  <RMTypography className="body1">{date}</RMTypography>
                </View>
              )}
              {remark && (
                <View>
                  <RMTypography className="body1">{remark}</RMTypography>
                </View>
              )}

              {this.props.renderMore}
            </View>
          </View>
        </View>
      </View>
    );
  }
}

RMTimelineItem.defaultProps = {
  title: '',
  avatar: '',
  name: '',
  status: 'default',
  remark: '',
  date: '',
  dateFormat: 'YYYY-MM-DD HH:mm:ss',
};

RMTimelineItem.propTypes = {
  title: PropTypes.string,
  // id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  avatar: PropTypes.string,
  tail: PropTypes.bool,
  name: PropTypes.string,
  status: PropTypes.oneOf(['success', 'progress', 'failure', 'default']),
  remark: PropTypes.string,
  date: PropTypes.string,
  renderMore: PropTypes.element,
  dateFormat: PropTypes.string,
};

export default RMTimelineItem;
