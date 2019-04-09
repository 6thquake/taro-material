import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import PropTypes from 'prop-types';

import RMTimelineItem from '../TimelineItem';

import { identity } from '../utils/common';

class RMTimeline extends Component {
  componentWillReceiveProps(nextProps) {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    const { data } = this.props;

    identity(data);

    return (
      <View className="root">
        {data &&
          data.map((item, index) => {
            const tail =
              item.tail !== true || item.tail !== false ? data.length - 1 === index : item.tail;

            const { title, avatar, name, status, color, remark, date } = item;

            return (
              <RMTimelineItem
                key={item.id}
                title={title}
                tail={tail}
                avatar={avatar}
                name={name}
                status={status}
                color={color}
                remark={remark}
                date={date}
              />
            );
          })}

        {this.props.children}
      </View>
    );
  }
}

RMTimeline.defaultProps = {
  data: [],
};

RMTimeline.propTypes = {
  data: PropTypes.array,
};

export default RMTimeline;
