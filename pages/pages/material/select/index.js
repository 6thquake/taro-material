import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';

import { RMSelect, RMAsyncSelect } from '../../../';

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
    const { data, value } = this.state;
    return (
      <View className="root">
        <View className="notices">
          <View className="title">select - editable</View>
          <View className="select">
            <RMSelect
              title="editable"
              onOpen={this.handleOpen}
              onClose={this.handelClose}
              onChange={this.handleChange}
              editable
              InputProps={{
                helperText: '先选择门店啊',
              }}
              options={data.slice(0)}
              value={value}
            />
          </View>

          <View className="title">select - not editable</View>
          <View className="select">
            <RMSelect
              title="not editable"
              onOpen={this.handleOpen}
              onClose={this.handelClose}
              onChange={this.handleChange}
              editable={false}
              InputProps={{
                helperText: '先选择门店啊',
              }}
              options={data.slice(0)}
              value={value}
            />
          </View>

          <View className="title">select - disabled</View>
          <View className="select">
            <RMSelect
              title="disabled"
              onOpen={this.handleOpen}
              onClose={this.handelClose}
              onChange={this.handleChange}
              disabled
              InputProps={{
                helperText: '先选择门店啊',
              }}
              options={data.slice(0)}
              value={value}
            />
          </View>

          <View className="title">select - disabled + no editable</View>
          <View className="select">
            <RMSelect
              title="disabled + no editable"
              onOpen={this.handleOpen}
              onClose={this.handelClose}
              onChange={this.handleChange}
              disabled
              editable={false}
              InputProps={{
                helperText: '先选择门店啊',
              }}
              options={data.slice(0)}
              value={value}
            />
          </View>

          <View className="title">async select - editable</View>
          <RMAsyncSelect
            title="editable"
            onOpen={this.handleOpen}
            onClose={this.handelClose}
            onChange={this.handleChange}
            editable
            InputProps={{
              helperText: '先选择门店啊',
            }}
            options={data.slice(0)}
            value={value}
          />

          <View className="title">async select - not editable</View>
          <RMAsyncSelect
            title="disabled + no editable"
            onOpen={this.handleOpen}
            onClose={this.handelClose}
            onChange={this.handleChange}
            editable={false}
            InputProps={{
              helperText: '先选择门店啊',
            }}
            options={data.slice(0)}
            value={value}
          />

          <View className="title">async select - disabled</View>
          <View className="select">
            <RMAsyncSelect
              title="disabled"
              onOpen={this.handleOpen}
              onClose={this.handelClose}
              onChange={this.handleChange}
              disabled
              InputProps={{
                helperText: '先选择门店啊',
              }}
              options={data.slice(0)}
              value={value}
            />
          </View>

          <View className="title"> async select - disabled + no editable</View>
          <View className="select">
            <RMAsyncSelect
              title="disabled + no editable"
              onOpen={this.handleOpen}
              onClose={this.handelClose}
              onChange={this.handleChange}
              disabled
              editable={false}
              InputProps={{
                helperText: '先选择门店啊',
              }}
              options={data.slice(0)}
              value={value}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default Index;
