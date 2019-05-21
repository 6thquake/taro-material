import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';

import { RMTextarea } from '../../../';

import RMPage from '../../../Page';

import './index.scss';

class Index extends RMPage {
  config = {
    navigationBarTitleText: 'Textarea',
  };

  componentWillMount() {}

  componentDidMount() {
    this.setState({
      value: 'Textarea',
    });
  }

  componentDidShow() {}

  componentDidHide() {}

  handleChange(e) {
    console.log(e.target.value);
  }

  render() {
    const { value } = this.state;

    return (
      <View className="root">
        <View className="spacer" />
        <View className="input">
          <RMTextarea
            value={value}
            onChange={this.handleChange}
            maxlength={200}
            placeholder="请输入..."
            square={false}
          />
        </View>
      </View>
    );
  }
}

export default Index;
