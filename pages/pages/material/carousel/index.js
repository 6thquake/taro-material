import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';

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
          <View className="title">carousel</View>
          <View className="carousel">
            <RMCarousel customStyle={{ height: '100vh' }} items={items} />
          </View>
          <View className="spacer" />
        </View>
      </View>
    );
  }
}

export default Index;
