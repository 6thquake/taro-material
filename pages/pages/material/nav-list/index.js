import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';

import { RMNavList } from '../../../';

import { navList, imagesNavList } from './data';
import theme from '../../../styles/theme';

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

  handleNavListClick() {
    console.log(arguments);
  }

  render() {
    return (
      <View className="root">
        <View className="nav-lists">
          <View className="title">columnNum: 5</View>
          <View className="nav-list">
            <RMNavList data={navList} onClick={this.handleNavListClick.bind(this)} columnNum={5} />
          </View>

          <View className="title">columnNum: 5, visiableColumnNum: 4</View>
          <View className="nav-list">
            <RMNavList
              data={navList}
              onClick={this.handleNavListClick.bind(this)}
              columnNum={5}
              visiableColumnNum={4}
            />
          </View>

          <View className="title">columnNum: 10, visiableColumnNum: 5</View>
          <View className="nav-list">
            <RMNavList
              data={navList}
              onClick={this.handleNavListClick.bind(this)}
              columnNum={10}
              visiableColumnNum={5}
            />
          </View>

          <View className="title">columnNum: 5, visiableColumnNum: 4</View>
          <View className="nav-list">
            <RMNavList
              data={imagesNavList}
              onClick={this.handleNavListClick.bind(this)}
              columnNum={5}
              visiableColumnNum={4}
            />
          </View>

          <View className="title">columnNum: {imagesNavList.length}, visiableColumnNum: 5</View>
          <View className="nav-list">
            <RMNavList
              data={imagesNavList}
              onClick={this.handleNavListClick.bind(this)}
              columnNum={imagesNavList.length}
              visiableColumnNum={5}
            />
          </View>

          <View className="title">scrollbar color</View>
          <View className="nav-list">
            <RMNavList
              data={imagesNavList}
              onClick={this.handleNavListClick.bind(this)}
              columnNum={imagesNavList.length}
              visiableColumnNum={5}
              scrollbarColor={theme.palette.error.main}
            />
          </View>

          <View className="title">scrollbar color</View>
          <View className="nav-list">
            <RMNavList
              data={imagesNavList.slice(0, 6)}
              onClick={this.handleNavListClick.bind(this)}
              columnNum={6}
              visiableColumnNum={5}
              scrollbarColor={theme.palette.error.main}
            />
          </View>
        </View>
      </View>
    );
  }
}

Index.defaultProps = {};

export default Index;
