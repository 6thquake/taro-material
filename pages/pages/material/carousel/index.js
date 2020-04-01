import Taro, { Component } from '@tarojs/taro';
import { View, Swiper, SwiperItem } from '@tarojs/components';

import { RMCarousel } from '../../../';

import theme from '../../../styles/theme';
import './index.scss';

class Index extends Component {
  config = {
    navigationBarTitleText: 'Carousel',
  };

  componentWillMount() {
    this.setState({
      items: [
        {
          src:
            'https://raw.githubusercontent.com/6thquake/react-material/develop/static/images/cards/contemplative-reptile.jpg',
        },
        {
          src:
            'https://raw.githubusercontent.com/6thquake/react-material/develop/static/images/cards/live-from-space.jpg',
        },
        {
          src:
            'https://raw.githubusercontent.com/6thquake/react-material/develop/static/images/cards/paella.jpg',
        },
      ],
    });
  }

  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    const { items } = this.state;
    return (
      <View className="root">
        <View className="body">
          <View className="title">carousel, 100vh images</View>
          <View className="carousel">
            <RMCarousel customStyle={{ height: '100vh' }} items={items} />
          </View>
          <View className="spacer" />

          <View className="title">carousel</View>
          <View className="carousel">
            <RMCarousel items={items} customStyle={{ height: '200px' }} />
          </View>
          <View className="spacer" />

          <View className="title">carousel</View>
          <View className="carousel">
            <Swiper
              className="carousel"
              indicatorColor={theme.palette.grey['300']}
              indicatorActiveColor={theme.palette.primary.main}
              vertical={false}
              skipHiddenItemLayout
              displayMultipleItems={1}
              circular
              indicatorDots={true}
              interval={0}
              duration={0}
              autoplay={false}
              current={0}
              style={{ height: '200px' }}
            >
              {[
                theme.palette.success.main,
                theme.palette.warning.main,
                theme.palette.error.main,
              ].map(item => {
                return (
                  <SwiperItem>
                    <View style={{ background: item, height: '100%', width: '100%' }}>{item}</View>
                  </SwiperItem>
                );
              })}
            </Swiper>
          </View>
          <View className="spacer" />
        </View>
      </View>
    );
  }
}

export default Index;
