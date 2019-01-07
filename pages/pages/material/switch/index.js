import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';

import { RMSwitch } from '../../../';

import theme from '../../../styles/theme';
import './index.scss';

class Index extends Component {
  config = {
    navigationBarTitleText: 'Switch',
  };

  componentWillMount() {}

  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  handleChange = (checked, value, e) => {
    console.log(`${value}: ${checked}, ${e.detail.value}`);
  };

  render() {
    const { items } = this.state;
    return (
      <View className="root">
        <View className="body">
          <RMSwitch
            checked={this.state.checkedA}
            onChange={this.handleChange.bind(this)}
            value="checkedA"
          />
          <RMSwitch
            checked={this.state.checkedB}
            onChange={this.handleChange.bind(this)}
            value="checkedB"
            color="primary"
          />
          <RMSwitch value="checkedC" />
          <RMSwitch disabled value="checkedD" />
          <RMSwitch disabled checked value="checkedE" />
          <RMSwitch value="checkedF" color="secondary" title={'开关'} required={true} />
          <RMSwitch value="checkedF" color="warning" title={'开关'} helperText={'请选择'} />
        </View>
        <View className="spacer" />
      </View>
    );
  }
}

export default Index;
