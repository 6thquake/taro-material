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
        <RMSearch
          value={value}
          onChange={this.handleChange}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          onConfirm={this.handleOk}
          onActionClick={this.handleOk}
          onClear={this.handleClear}
        />
      </View>
    );
  }
}

export default Index;
