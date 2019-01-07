import Taro, { Component } from '@tarojs/taro';
import { View, Button, Canvas } from '@tarojs/components';

import { RMTabs, RMTabsPane } from '../../../';

import RMPage from '../../../Page';

import theme from '../../../styles/theme';
import './index.scss';

const allNavList = [
  {
    title: '充值中心1',
    showIcon: true,
    icon: 'aspect_ratio',
  },
  {
    title: '账户余额2',
    icon: 'aspect_ratio',
  },
  {
    title: '资源余量3',
    icon: 'aspect_ratio',
  },
  {
    title: '充值中心4',
    showIcon: true,
    icon: 'aspect_ratio',
  },
  {
    title: '账户余额5',
    icon: 'aspect_ratio',
  },
  {
    title: '资源余量6',
    icon: 'aspect_ratio',
  },
  {
    title: '充值中心7',
    showIcon: true,
    icon: 'aspect_ratio',
  },
  {
    title: '账户余额8',
    icon: 'aspect_ratio',
  },
  {
    title: '资源余量9',
    icon: 'aspect_ratio',
  },
  {
    title: '充值中心10',
    showIcon: true,
    icon: 'aspect_ratio',
  },
  {
    title: '账户余额11',
    icon: 'aspect_ratio',
  },
  {
    title: '资源余量12',
    icon: 'aspect_ratio',
  },
];

const navList = allNavList.slice(0, 2);

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
              scroll={false}
              height="200px"
              tabDirection="vertical"
              tabList={navList}
              onClick={this.handleClick.bind(this)}
              color="default"
              centered
            >
              {navList.map((item, index) => (
                <RMTabsPane tabDirection="vertical" current={current} index={index} key={index}>
                  <View style="height:200px;">default - no scroll - {current}</View>
                </RMTabsPane>
              ))}
            </RMTabs>
          </View>

          <View className="notice">
            <RMTabs
              current={current}
              scroll={false}
              height="200px"
              tabDirection="vertical"
              tabList={navList}
              onClick={this.handleClick.bind(this)}
              color="default"
            >
              {navList.map((item, index) => (
                <RMTabsPane tabDirection="vertical" current={current} index={index} key={index}>
                  <View style="height:200px;">default - no scroll - {current}</View>
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
              scroll={false}
              tabList={navList}
              onClick={this.handleClick.bind(this)}
              color="default"
              centered
            >
              {navList.map((item, index) => (
                <RMTabsPane current={current} index={index} key={index}>
                  <View style="height:200px;">default - no scroll - centered - {current}</View>
                </RMTabsPane>
              ))}
            </RMTabs>
          </View>

          <View className="notice">
            <RMTabs
              current={current}
              scroll={false}
              tabList={navList}
              onClick={this.handleClick.bind(this)}
              color="default"
              centered={false}
            >
              {navList.map((item, index) => (
                <RMTabsPane current={current} index={index} key={index}>
                  <View style="height:200px;">default - no scroll - not centered - {current}</View>
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
