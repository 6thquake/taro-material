import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import PropTypes from 'prop-types';

import { RMNavList } from '../../../';

import { navList } from './data';

class Index extends Component {
  config = {
    navigationBarTitleText: '导航',
  };

  componentWillReceiveProps(nextProps) {}

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="root">
        <RMNavList data={navList} onClick={this.handleNavListClick.bind(this)} columnNum={5} />
      </View>
    );
  }
}

Index.defaultProps = {};

export default Index;
