import Taro, { Component } from '@tarojs/taro';
import { View, Button, Canvas } from '@tarojs/components';

import { RMTabs, RMTabsPane } from '../../taro-material';

import RMPage from '../../taro-material/Page';

import theme from '../../taro-material/styles/theme';
import './index.scss';

const allNavList = [
  {
    title: '充值中心',
    showIcon: true,
    icon: 'aspect_ratio',
  },
  {
    title: '账户余额',
    icon: 'aspect_ratio',
  },
  {
    title: '资源余量',
    icon: 'aspect_ratio',
  },
];

class Index extends RMPage {
  config = {
    navigationBarTitleText: 'Tabs',
  };

  state = {
    current: 0,
  };

  componentWillMount() {}

  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  handleClick(index) {
    this.setState({
      current: index,
    });
  }

  render() {
    const { current } = this.state;
    return (
      <View className="root">
        <View className="notices">
          <View className="title">垂直</View>
          <View className="notice">
            <RMTabs
              current={current}
              scroll
              height="200px"
              tabDirection="vertical"
              tabList={allNavList}
              onClick={this.handleClick.bind(this)}
              color="default"
            >
              {allNavList.map((item, index) => (
                <RMTabsPane tabDirection="vertical" current={current} index={index} key={index}>
                  <View style="height:200px;">default - {current}</View>
                </RMTabsPane>
              ))}
            </RMTabs>
          </View>

          <View className="notice">
            <RMTabs
              current={current}
              scroll
              height="200px"
              tabDirection="vertical"
              tabList={allNavList}
              onClick={this.handleClick.bind(this)}
              color="primary"
            >
              {allNavList.map((item, index) => (
                <RMTabsPane tabDirection="vertical" current={current} index={index} key={index}>
                  <View style="height:200px;">primary - {current}</View>
                </RMTabsPane>
              ))}
            </RMTabs>
          </View>

          <View className="notice">
            <RMTabs
              current={current}
              scroll
              height="200px"
              tabDirection="vertical"
              tabList={allNavList}
              onClick={this.handleClick.bind(this)}
              color="secondary"
            >
              {allNavList.map((item, index) => (
                <RMTabsPane tabDirection="vertical" current={current} index={index} key={index}>
                  <View style="height:200px;">secondary - {current}</View>
                </RMTabsPane>
              ))}
            </RMTabs>
          </View>

          <View className="notice">
            <RMTabs
              current={current}
              scroll
              height="200px"
              tabDirection="vertical"
              tabList={allNavList}
              onClick={this.handleClick.bind(this)}
              color="inherit"
            >
              {allNavList.map((item, index) => (
                <RMTabsPane tabDirection="vertical" current={current} index={index} key={index}>
                  <View style="height:200px;">inherit - {current}</View>
                </RMTabsPane>
              ))}
            </RMTabs>
          </View>

          <View className="notice">
            <RMTabs
              current={current}
              scroll
              height="200px"
              tabDirection="vertical"
              tabList={allNavList}
              onClick={this.handleClick.bind(this)}
              color="action"
            >
              {allNavList.map((item, index) => (
                <RMTabsPane tabDirection="vertical" current={current} index={index} key={index}>
                  <View style="height:200px;">action - {current}</View>
                </RMTabsPane>
              ))}
            </RMTabs>
          </View>

          <View className="notice">
            <RMTabs
              current={current}
              scroll
              height="200px"
              tabDirection="vertical"
              tabList={allNavList}
              onClick={this.handleClick.bind(this)}
              color="error"
            >
              {allNavList.map((item, index) => (
                <RMTabsPane tabDirection="vertical" current={current} index={index} key={index}>
                  <View style="height:200px;">error - {current}</View>
                </RMTabsPane>
              ))}
            </RMTabs>
          </View>

          <View className="notice">
            <RMTabs
              current={current}
              scroll
              height="200px"
              tabDirection="vertical"
              tabList={allNavList}
              onClick={this.handleClick.bind(this)}
              color="disabled"
            >
              {allNavList.map((item, index) => (
                <RMTabsPane tabDirection="vertical" current={current} index={index} key={index}>
                  <View style="height:200px;">disabled - {current}</View>
                </RMTabsPane>
              ))}
            </RMTabs>
          </View>

          <View className="notice">
            <RMTabs
              current={current}
              scroll
              height="200px"
              tabDirection="vertical"
              tabList={allNavList}
              onClick={this.handleClick.bind(this)}
              color="success"
            >
              {allNavList.map((item, index) => (
                <RMTabsPane tabDirection="vertical" current={current} index={index} key={index}>
                  <View style="height:200px;">success - {current}</View>
                </RMTabsPane>
              ))}
            </RMTabs>
          </View>

          <View className="notice">
            <RMTabs
              current={current}
              scroll
              height="200px"
              tabDirection="vertical"
              tabList={allNavList}
              onClick={this.handleClick.bind(this)}
              color="warning"
            >
              {allNavList.map((item, index) => (
                <RMTabsPane tabDirection="vertical" current={current} index={index} key={index}>
                  <View style="height:200px;">warning - {current}</View>
                </RMTabsPane>
              ))}
            </RMTabs>
          </View>

          <View className="notice">
            <RMTabs
              current={current}
              scroll
              height="200px"
              tabDirection="vertical"
              tabList={allNavList}
              onClick={this.handleClick.bind(this)}
              color="progress"
            >
              {allNavList.map((item, index) => (
                <RMTabsPane tabDirection="vertical" current={current} index={index} key={index}>
                  <View style="height:200px;">progress - {current}</View>
                </RMTabsPane>
              ))}
            </RMTabs>
          </View>
        </View>

        <View className="notices">
          <View className="title">横向</View>

          <View className="notice">
            <RMTabs
              current={current}
              scroll
              tabList={allNavList}
              onClick={this.handleClick.bind(this)}
              color="default"
            >
              {allNavList.map((item, index) => (
                <RMTabsPane current={current} index={index} key={index}>
                  <View style="height:200px;">default - {current}</View>
                </RMTabsPane>
              ))}
            </RMTabs>
          </View>

          <View className="notice">
            <RMTabs
              current={current}
              scroll
              tabList={allNavList}
              onClick={this.handleClick.bind(this)}
              color="primary"
            >
              {allNavList.map((item, index) => (
                <RMTabsPane current={current} index={index} key={index}>
                  <View style="height:200px;">primary - {current}</View>
                </RMTabsPane>
              ))}
            </RMTabs>
          </View>

          <View className="notice">
            <RMTabs
              current={current}
              scroll
              tabList={allNavList}
              onClick={this.handleClick.bind(this)}
              color="secondary"
            >
              {allNavList.map((item, index) => (
                <RMTabsPane current={current} index={index} key={index}>
                  <View style="height:200px;">secondary - {current}</View>
                </RMTabsPane>
              ))}
            </RMTabs>
          </View>

          <View className="notice">
            <RMTabs
              current={current}
              scroll
              tabList={allNavList}
              onClick={this.handleClick.bind(this)}
              color="inherit"
            >
              {allNavList.map((item, index) => (
                <RMTabsPane current={current} index={index} key={index}>
                  <View style="height:200px;">inherit - {current}</View>
                </RMTabsPane>
              ))}
            </RMTabs>
          </View>

          <View className="notice">
            <RMTabs
              current={current}
              scroll
              tabList={allNavList}
              onClick={this.handleClick.bind(this)}
              color="action"
            >
              {allNavList.map((item, index) => (
                <RMTabsPane current={current} index={index} key={index}>
                  <View style="height:200px;">action - {current}</View>
                </RMTabsPane>
              ))}
            </RMTabs>
          </View>

          <View className="notice">
            <RMTabs
              current={current}
              scroll
              tabList={allNavList}
              onClick={this.handleClick.bind(this)}
              color="error"
            >
              {allNavList.map((item, index) => (
                <RMTabsPane current={current} index={index} key={index}>
                  <View style="height:200px;">error - {current}</View>
                </RMTabsPane>
              ))}
            </RMTabs>
          </View>

          <View className="notice">
            <RMTabs
              current={current}
              scroll
              tabList={allNavList}
              onClick={this.handleClick.bind(this)}
              color="disabled"
            >
              {allNavList.map((item, index) => (
                <RMTabsPane current={current} index={index} key={index}>
                  <View style="height:200px;">disabled - {current}</View>
                </RMTabsPane>
              ))}
            </RMTabs>
          </View>

          <View className="notice">
            <RMTabs
              current={current}
              scroll
              tabList={allNavList}
              onClick={this.handleClick.bind(this)}
              color="success"
            >
              {allNavList.map((item, index) => (
                <RMTabsPane current={current} index={index} key={index}>
                  <View style="height:200px;">success - {current}</View>
                </RMTabsPane>
              ))}
            </RMTabs>
          </View>

          <View className="notice">
            <RMTabs
              current={current}
              scroll
              tabList={allNavList}
              onClick={this.handleClick.bind(this)}
              color="warning"
            >
              {allNavList.map((item, index) => (
                <RMTabsPane current={current} index={index} key={index}>
                  <View style="height:200px;">warning - {current}</View>
                </RMTabsPane>
              ))}
            </RMTabs>
          </View>

          <View className="notice">
            <RMTabs
              current={current}
              scroll
              tabList={allNavList}
              onClick={this.handleClick.bind(this)}
              color="progress"
            >
              {allNavList.map((item, index) => (
                <RMTabsPane current={current} index={index} key={index}>
                  <View style="height:200px;">progress - {current}</View>
                </RMTabsPane>
              ))}
            </RMTabs>
          </View>
        </View>
      </View>
    );
  }
}

export default Index;
