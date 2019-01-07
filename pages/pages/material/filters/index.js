import Taro, { Component } from '@tarojs/taro';
import { View, Button, Canvas } from '@tarojs/components';

import { RMFilters } from '../../../';

import RMPage from '../../../Page';

import theme from '../../../styles/theme';
import './index.scss';

const defaultData = [
  {
    label: '特色1',
    value: 'D11',
    data: [
      {
        label: 'ASD',
        value: 'S12',
        active: true,
      },
      {
        label: 'ASD1',
        value: 'S121',
      },
      {
        label: 'ASD',
        value: 'S123',
      },
      {
        label: 'ASD1',
        value: 'S1214',
      },
      {
        label: 'ASD',
        value: 'S125',
      },
      {
        label: 'ASD1',
        value: 'S1216',
      },
    ],
  },
  {
    label: '特色2',
    value: 'D212',
    data: [
      {
        label: 'ASD',
        value: 'S12',
      },
      {
        label: 'ASD1',
        value: 'S121',
        active: true,
      },
      {
        label: 'ASD',
        value: 'S123',
      },
      {
        label: 'ASD1',
        value: 'S1214',
      },
      {
        label: 'ASD',
        value: 'S125',
      },
    ],
  },
  {
    label: '特色3',
    value: 'D2123',
    data: [
      {
        label: 'ASD',
        value: 'S12',
      },
      {
        label: 'ASD1',
        value: 'S121',
      },
      {
        label: 'ASD',
        value: 'S123',
      },
      {
        label: 'ASD1',
        value: 'S1214',
      },
    ],
  },
];

class Index extends RMPage {
  config = {
    navigationBarTitleText: 'Filters',
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
        <RMFilters
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
