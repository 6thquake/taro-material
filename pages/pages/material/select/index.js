import Taro, { Component } from '@tarojs/taro';
import { View, Button, Canvas } from '@tarojs/components';

import { RMSelect, RMButton } from '../../../';

import RMPage from '../../../Page';

import theme from '../../../styles/theme';
import './index.scss';

class Index extends RMPage {
  config = {
    navigationBarTitleText: 'Select',
  };
  state = {
    value: 2,
    editable: false,
    data: [
      {
        label: '第1个选择项',
        value: 0,
      },
      {
        label: '第2个选择项',
        value: 2,
      },
      {
        label: '第3个选择项',
        value: 3,
      },
      {
        label: '第4个选择项',
        value: 4,
      },
    ],
  };
  componentWillMount() {}

  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}
  handleButtonClick = () => {
    this.setState({
      editable: !this.state.editable,
    });
  };
  handleChange = value => {
    this.setState({
      value,
    });
  };
  handelClose = () => {
    console.log('close');
  };
  handleOpen = () => {
    console.log('open');
  };
  render() {
    const { data, value, editable } = this.state;
    return (
      <View className="root">
        <RMButton onClick={this.handleButtonClick}>toggle</RMButton>
        <RMSelect
          title={'请选择一项'}
          onOpen={this.handleOpen}
          onClose={this.handelClose}
          onChange={this.handleChange}
          editable={editable}
          InputProps={{
            helperText: !editable && '先选择门店啊',
          }}
          data={data}
          value={value}
        />
      </View>
    );
  }
}

export default Index;
