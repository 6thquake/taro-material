import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';

import { RMActionFilter } from '../../../';

import RMPage from '../../../Page';

import './index.scss';

const defaultData = [
  {
    label: '特色A',
    value: 'A',
    data: [
      {
        label: 'A1',
        value: 'A1',
      },
      {
        label: 'A12',
        value: 'A12',
        active: true,
      },
      {
        label: 'A123',
        value: 'A123',
      },
      {
        label: 'A1234',
        value: 'A1234',
      },
      {
        label: 'A12345',
        value: 'A12345',
      },
      {
        label: 'A123456',
        value: 'A123456',
      },
    ],
  },
  {
    label: '特色B',
    value: 'B',
    data: [
      {
        label: 'B1',
        value: 'B1',
      },
      {
        label: 'B12',
        value: 'B12',
        active: true,
      },
      {
        label: 'B123',
        value: 'B123',
      },
      {
        label: 'B1234',
        value: 'B1234',
      },
      {
        label: 'B12345',
        value: 'B12345',
      },
    ],
  },
  {
    label: '特色C',
    value: 'C',
    data: [
      {
        label: 'C1',
        value: 'C1',
      },
      {
        label: 'C12',
        value: 'C12',
      },
      {
        label: 'C123',
        value: 'C123',
      },
      {
        label: 'C1234',
        value: 'C1234',
      },
    ],
  },
];

class Index extends RMPage {
  config = {
    navigationBarTitleText: 'ActionFilter',
  };
  state = {
    data: JSON.parse(JSON.stringify(defaultData)),
  };
  componentWillMount() {}

  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  handleChange = value => {
    this.setState({
      data: value,
    });
  };

  handelReset = e => {
    console.log('reset');
    this.setState({
      data: defaultData,
    });
  };

  handleOk = e => {
    console.log(e);
  };

  render() {
    const { data } = this.state;
    return (
      <View className="root">
        <RMActionFilter
          onOk={this.handleOk}
          onReset={this.handelReset}
          onChange={this.handleChange}
          data={data}
        />
      </View>
    );
  }
}

export default Index;
