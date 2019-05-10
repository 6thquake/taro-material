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
  },
  {
    value: '332',
    color: 'teal',
    title: 'text',
    prefix: '$',
    suffix: '',
    lineColor: '#ff5722',
  },
  {
    value: '145',
    title: 'text',
    prefix: '$',
    suffix: '',
  },
  {
    value: '251',
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
    const { showValue } = this.state;
    this.setState({
      showValue: !showValue,
    });
    console.log(item, iddex, e);
  };

  render() {
    const { showValue } = this.state;

    const data1 = data.slice(0);
    const data2 = data.slice(0);
    const data3 = data.slice(0);
    const data4 = data.slice(0);
    const data5 = data.slice(0);
    const data6 = data.slice(0);
    const data7 = data.slice(0);
    data1[0] = { ...data1[0], ...{ active: true } };
    data2[1] = { ...data2[1], ...{ active: true } };
    data3[2] = { ...data3[2], ...{ active: true } };
    data4[3] = { ...data4[3], ...{ active: true } };
    data5[4] = { ...data5[4], ...{ active: true } };
    data6[5] = { ...data6[5], ...{ active: true } };
    data7[6] = { ...data7[6], ...{ active: true } };

    return (
      <View className="root">
        <View>
          <RMTrends data={data1} height={100} color="default" lineColor="#000" size="small" />
        </View>
        <View>
          <RMTrends data={data2} height={100} color="primary" lineColor="#000" size="normal" />
        </View>
        <View>
          <RMTrends data={data3} height={100} color="secondary" lineColor="#fff" size="large" />
        </View>
        <View>
          <RMTrends data={data4} height={100} color="success" lineColor="#fff" variant="text" />
        </View>
        <View>
          <RMTrends data={data5} height={100} color="warning" lineColor="#fff" />
        </View>
        <View>
          <RMTrends
            onClick={this.handleClick}
            data={data6}
            height={100}
            color="primary"
            lineColor="#fff"
            showValue={showValue}
            showTitle={showValue}
          />
        </View>
        <View>
          <RMTrends
            onClick={this.handleClick}
            data={data6}
            height={100}
            color="secondary"
            lineColor="#fff"
            showValue={showValue}
            showTitle={showValue}
            size="small"
          />
        </View>
        <View>
          <RMTrends
            onClick={this.handleClick}
            data={data6}
            height={100}
            color="success"
            lineColor="#fff"
            showValue={showValue}
            showTitle={showValue}
            size="large"
          />
        </View>
        <View>
          <RMTrends
            onClick={this.handleClick}
            data={data7}
            height={100}
            color="primary"
            lineColor="#fff"
            showValue={showValue}
            showTitle={showValue}
            variant="text"
          />
        </View>
        <View>
          <RMTrends
            onClick={this.handleClick}
            data={data7}
            height={100}
            color="secondary"
            lineColor="#fff"
            showValue={showValue}
            showTitle={showValue}
            variant="text"
            size="small"
          />
        </View>
        <View>
          <RMTrends
            onClick={this.handleClick}
            data={data7}
            height={100}
            color="success"
            lineColor="#fff"
            showValue={showValue}
            showTitle={showValue}
            variant="text"
            size="large"
          />
        </View>
      </View>
    );
  }
}

export default Index;
