import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';

// import RMSteps from '../../../Steps'

import theme from '../../../styles/theme';
import './index.scss';
import { RMSteps } from '../../../';

class Index extends Component {
  config = {
    navigationBarTitleText: 'Switch',
  };

  state = {
    current: 1,
  };
  componentWillMount() {}

  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  handleChange = e => {
    console.log(e);
    this.setState({
      current: e,
    });
  };

  render() {
    const { current } = this.state;
    const items = [
      { title: '4000', desc: '这里是额外的信息，最多两行', value: 2 },
      { title: '6000', desc: '这里是额外的信息，最多两行', value: 3 },
      { title: '8000', desc: '这里是额外的信息，最多两行', value: 4 },
      { title: '10000', desc: '这里是额外的信息，最多两行', value: 5 },
    ];

    const items2 = [
      {
        title: '步骤一',
        desc: '这里是额外的信息，最多两行',
        icon: {
          value: 'done',
          activeColor: '#fff',
          inactiveColor: 'primary',
          size: '20',
        },
      },
      {
        title: '步骤二',
        desc: '这里是额外的信息，最多两行',
        icon: {
          value: 'warning',
          activeColor: '#fff',
          inactiveColor: '#78A4FA',
          size: '14',
        },
      },
      {
        title: '步骤三',
        desc: '这里是额外的信息，最多两行',
        icon: {
          value: 'clear',
          activeColor: '#fff',
          inactiveColor: '#78A4FA',
          size: '14',
        },
      },
    ];

    const items3 = [
      {
        title: '步骤一',
        desc: '这里是额外的信息，最多两行',
        success: true,
      },
      {
        title: '步骤二',
        desc: '这里是额外的信息，最多两行',
        value: 2,
      },
      {
        title: '步骤三',
        desc: '这里是额外的信息，最多两行',
        error: true,
      },
    ];
    const items4 = [
      { title: '4000', value: 2 },
      { title: '6000', value: 3 },
      { title: '8000', value: 4 },
      { title: '10000', value: 5 },
    ];
    return (
      <View className="root">
        <View className="dark">
          <RMSteps activeColor="#ff784e" items={items} current={current} isDark />
        </View>

        <View className="box">
          <RMSteps
            items={items2}
            current={this.state.current}
            onChange={this.handleChange.bind(this)}
          />
        </View>

        <View className="box">
          <RMSteps items={items3} current={current} />
        </View>

        <View className="dark">
          <RMSteps
            onChange={this.handleChange}
            activeColor="#ff784e"
            items={items4}
            current={current}
            isDark
          />
        </View>
      </View>
    );
  }
}

export default Index;
