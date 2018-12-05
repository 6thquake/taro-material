import Taro, { Component } from '@tarojs/taro';
import { View, Image } from '@tarojs/components';
import PropTypes from 'prop-types';

import RMTypography from '../Typography';
import RMIcon from '../Icon';

import './NoData.scss';
// import NoDataImg from '../../../images/NoData.png'

class NoData extends Component {
  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    const { title, background, color } = this.props;

    const style = {};

    if (background) {
      style.background = background;
    }

    if (color) {
      style.color = color;
    }

    return (
      <View className="root" style={style}>
        <View className="content">
          <View className="img">
            {/* <Image className='img' mode='aspectFit' src={NoDataImg}/> */}
            <RMIcon fontSize="inherit" color="inherit">
              mood_bad
            </RMIcon>
          </View>
          <RMTypography color={color} fontSize={12}>
            {title}
          </RMTypography>
        </View>
      </View>
    );
  }
}

NoData.defaultProps = {
  title: '暂时没有数据',
  background: '',
  color: '',
};

export default NoData;
