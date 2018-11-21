import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';

import RMIcon from '../Icon';
import RMTypography from '../Typography';

import AtAvatar from '../components/avatar';

import ago from '../utils/date';

import theme from '../styles/theme';

import './Timeline.scss';

class Timeline extends Component {
  componentWillReceiveProps(nextProps) {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    const { data } = this.props;
    return (
      <View className="root">
        {data.map((item, index) => {
          const tail = data.length - 1 !== index;
          const { avatar, name, date, status, color = theme.palette.text.primary, remark } = item;
          return (
            <View className="step" key={item.id}>
              <View className="box">
                <View className="avatar">
                  {avatar === 'success' && (
                    <View className="result success">
                      <RMIcon fontSize="inherit" color="inherit" block={true}>
                        check
                      </RMIcon>
                    </View>
                  )}
                  {avatar === 'failure' && (
                    <View className="result failure">
                      <RMIcon fontSize="inherit" color="inherit" block={true}>
                        close
                      </RMIcon>
                    </View>
                  )}
                  {avatar !== 'success' &&
                    avatar !== 'failure' && (
                      <AtAvatar circle image={avatar} text={name} size="small" />
                    )}
                  {tail && <View className="tail" />}
                </View>
                <View className="content">
                  <View>
                    <RMTypography className="body2">{name}</RMTypography>
                  </View>
                  {status && (
                    <View>
                      <RMTypography color={color} className="body1">
                        {status}
                      </RMTypography>
                    </View>
                  )}
                  {remark && (
                    <View>
                      <RMTypography className="body1">{remark}</RMTypography>
                    </View>
                  )}
                  {date && (
                    <View>
                      <RMTypography className="caption">{date}</RMTypography>
                    </View>
                  )}
                </View>
              </View>
              <View className="time">
                {date && <RMTypography className="caption">{ago(date)}</RMTypography>}
              </View>
            </View>
          );
        })}
      </View>
    );
  }
}

Timeline.defaultProps = {
  data: [],
};

export default Timeline;
