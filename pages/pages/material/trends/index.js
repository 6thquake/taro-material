import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';

import { RMTrends } from '../../..';

const data = [
  {
    value: '44',
    title: 'text',
    prefix: '$',
    suffix: '',
  },
  {
    value: '122',
    title: 'text',
    prefix: '$',
    suffix: '',
  },
  {
    value: '42',
    title: 'text',
    prefix: '$',
    suffix: '',
  },
  {
    value: '212',
    title: 'text',
    prefix: '$',
    suffix: '',
    active: true,
  },
  {
    value: '332',
    color: 'teal',
    title: 'text',
    prefix: '$',
    suffix: '',
  },

  {
    value: '145',
    title: 'text',
    prefix: '$',
    suffix: '',
  },
];

class Index extends Component {
  config = {
    navigationBarTitleText: 'Trends',
  };

  componentWillMount() {}

  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}
  handleClick = (item, iddex, e) => {
    console.log(item, iddex, e);
  };
  render() {
    return (
      <View className="root">
        <View>
          <RMTrends data={data} height={50} color="default" lineColor="#000" size="small" />
        </View>
        <View>
          <RMTrends data={data} height={50} color="primary" lineColor="#000" size="normal" />
        </View>
        <View>
          <RMTrends data={data} height={50} color="secondary" lineColor="#fff" size="large" />
        </View>
        <View>
          <RMTrends data={data} height={50} color="success" lineColor="#fff" variant="text" />
        </View>
        <View>
          <RMTrends data={data} height={50} color="warning" lineColor="#fff" />
        </View>
        <View>
          <RMTrends
            onClick={this.handleClick}
            data={data}
            height={50}
            color="primary"
            lineColor="#fff"
          />
        </View>
        <View>
          <RMTrends data={data} height={50} color="error" lineColor="#fff" />
        </View>
      </View>
    );
  }
}

export default Index;
