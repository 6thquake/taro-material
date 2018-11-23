import Taro, { Component } from '@tarojs/taro';
import { View, Button, Canvas } from '@tarojs/components';

import { RMSearch } from '../../taro-material';

import RMPage from '../../taro-material/Page';

import theme from '../../taro-material/styles/theme';
import './index.scss';

class Index extends RMPage {
  config = {
    navigationBarTitleText: 'Search Bar',
  };
  state = {
    value: '',
  };
  componentWillMount() {}

  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  handleChange = value => {
    console.log('change', value);
    this.setState({
      value,
    });
  };
  handleBlur = e => {
    console.log('blur', e);
  };
  handleClear = e => {
    console.log('clear', e);
  };
  handleOk = e => {
    console.log('ok', e);
  };
  handleFocus = e => {
    console.log(e);
  };
  render() {
    const { value } = this.state;
    return (
      <View className="root">
        <View className="title">default</View>
        <View className="search">
          <RMSearch
            value={value}
            onChange={this.handleChange}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            onConfirm={this.handleOk}
            onActionClick={this.handleOk}
            onClear={this.handleClear}
            color="default"
          />
        </View>

        <View className="title">inherit</View>
        <View className="search">
          <RMSearch
            value={value}
            onChange={this.handleChange}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            onConfirm={this.handleOk}
            onActionClick={this.handleOk}
            onClear={this.handleClear}
            color="inherit"
          />
        </View>

        <View className="title">primary</View>
        <View className="search">
          <RMSearch
            value={value}
            onChange={this.handleChange}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            onConfirm={this.handleOk}
            onActionClick={this.handleOk}
            onClear={this.handleClear}
            color="primary"
          />
        </View>

        <View className="title">secondary</View>
        <View className="search">
          <RMSearch
            value={value}
            onChange={this.handleChange}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            onConfirm={this.handleOk}
            onActionClick={this.handleOk}
            onClear={this.handleClear}
            color="secondary"
          />
        </View>

        <View className="title">error</View>
        <View className="search">
          <RMSearch
            value={value}
            onChange={this.handleChange}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            onConfirm={this.handleOk}
            onActionClick={this.handleOk}
            onClear={this.handleClear}
            color="error"
          />
        </View>

        <View className="title">success</View>
        <View className="search">
          <RMSearch
            value={value}
            onChange={this.handleChange}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            onConfirm={this.handleOk}
            onActionClick={this.handleOk}
            onClear={this.handleClear}
            color="success"
          />
        </View>

        <View className="title">warning</View>
        <View className="search">
          <RMSearch
            value={value}
            onChange={this.handleChange}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            onConfirm={this.handleOk}
            onActionClick={this.handleOk}
            onClear={this.handleClear}
            color="warning"
          />
        </View>

        <View className="title">progress</View>
        <View className="search">
          <RMSearch
            value={value}
            onChange={this.handleChange}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            onConfirm={this.handleOk}
            onActionClick={this.handleOk}
            onClear={this.handleClear}
            color="progress"
          />
        </View>
      </View>
    );
  }
}

export default Index;
