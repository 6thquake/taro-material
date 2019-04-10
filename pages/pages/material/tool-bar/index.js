import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';

import { RMToolBar, RMButton } from '../../../';

import RMPage from '../../../Page';

import theme from '../../../styles/theme';
import './index.scss';

const filterConfig = [
  {
    label: '单选 - 只能一个',
    value: 'D111',
    single: true,
    required: true,
    data: [
      {
        label: '测试',
        value: 'S121',
        active: true,
        priority: true,
      },
      {
        label: 'ASD11',
        value: 'S1211',
        priority: true,
      },
      {
        label: 'ASD1',
        value: 'S1231',
      },
      {
        label: 'ASD11',
        value: 'S12141',
      },
      {
        label: 'ASD1',
        value: 'S1251',
      },
      {
        label: 'ASD11',
        value: 'S12161',
      },
    ],
  },
  {
    label: '单选 - 最多一个',
    value: 'D11',
    single: true,
    data: [
      {
        label: '测试',
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
    label: '多选 - 最少一个',
    required: true,
    value: 'D212',
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
    label: '多选 - 最少零个',
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
];
const sorts = [
  {
    label: '评分最高',
    value: 'score',
  },
  {
    label: '评分最高2',
    value: 'score2',
  },
  {
    label: '评分最高3',
    value: 'score3',
  },
  {
    label: '评分最高4',
    value: 'score4',
    priority: true,
    active: true,
  },
  {
    label: '评分最高5',
    value: 'score5',
  },
];

class Index extends RMPage {
  config = {
    navigationBarTitleText: '测试',
  };

  state = {
    value: 'Hi',
    showDrawer: false,
    filters: JSON.parse(JSON.stringify(filterConfig)),
  };

  componentWillMount() {
    this.setState({
      id: `watermark-${new Date().getTime()}-${Math.floor(Math.random() * 100)}`,
    });
  }

  componentDidMount() {
    const data = filterConfig;
    data[0].data.push({
      label: 'hello',
      value: 'd1222',
    });
    setTimeout(() => {
      this.setState({
        filters: data,
      });
    }, 3000);
  }

  componentDidShow() {}

  componentDidHide() {}

  handleFilterChange(e) {
    console.log('filters', e);
    this.setState({
      value: 'hello',
    });
  }

  render() {
    const { filters, value } = this.state;
    return (
      <View className="root">
        <RMToolBar
          onChange={this.handleFilterChange}
          sorts={sorts}
          filters={filters}
          renderTools={
            <RMButton variant="contained" size="small">
              测试
            </RMButton>
          }
        />
        <View>{value}</View>

        <RMToolBar
          onChange={this.handleFilterChange}
          sorts={[]}
          filters={[]}
          renderTools={
            <RMButton variant="contained" size="small">
              测试
            </RMButton>
          }
        />
      </View>
    );
  }
}

export default Index;
