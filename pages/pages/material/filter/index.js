import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';

import { RMFilter } from '../../../';

import RMPage from '../../../Page';

import './index.scss';

class Index extends RMPage {
  config = {
    navigationBarTitleText: 'Filter',
  };

  state = {
    data: [
      {
        name: 'order',
        label: '综合排序',
        options: [
          { label: '热播榜', value: '热播榜' },
          { label: '好评榜', value: '好评榜' },
          { label: '新上线', value: '新上线' },
        ],
      },
      {
        name: 'region',
        label: '全部地区',
        options: [
          { label: '内地', value: '内地' },
          { label: '香港地区', value: '香港地区' },
          { label: '韩国', value: '韩国' },
          { label: '美剧', value: '美剧' },
          { label: '日本', value: '日本' },
          { label: '泰国', value: '泰国' },
          { label: '台湾地区', value: '台湾地区' },
          { label: '英国', value: '英国' },
          { label: '其他', value: '其他' },
        ],
      },
      {
        name: 'type',
        label: '全部类型',
        options: [
          { label: '自制', value: '自制' },
          { label: '古装', value: '古装' },
          { label: '言情', value: '言情' },
          { label: '武侠', value: '武侠' },
          { label: '偶像', value: '偶像' },
          { label: '家庭', value: '家庭' },
          { label: '青春', value: '青春' },
          { label: '都市', value: '都市' },
          { label: '喜剧', value: '喜剧' },
          { label: '战争', value: '战争' },
          { label: '军事', value: '军事' },
          { label: '谍战', value: '谍战' },
          { label: '悬疑', value: '悬疑' },
          { label: '罪案', value: '罪案' },
          { label: '穿越', value: '穿越' },
          { label: '宫廷', value: '宫廷' },
          { label: '历史', value: '历史' },
          { label: '神话', value: '神话' },
          { label: '科幻', value: '科幻' },
          { label: '年代', value: '年代' },
          { label: '商战', value: '商战' },
          { label: '剧情', value: '剧情' },
          { label: '奇幻', value: '奇幻' },
          { label: '其他', value: '其他' },
        ],
      },
      {
        name: 'year',
        label: '全部年份',
        options: [
          { label: '2019', value: '2019' },
          { label: '2018', value: '2018' },
          { label: '2017', value: '2017' },
          { label: '2016', value: '2016' },
          { label: '2015~2010', value: '2015~2010' },
          { label: '2009~2000', value: '2009~2000' },
          { label: '90年代', value: '90年代' },
          { label: '80年代', value: '80年代' },
          { label: '更早', value: '更早' },
        ],
      },
    ],
  };

  listeners = [];

  componentWillMount() {}

  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  handleChange(values) {
    this.setState({
      values,
    });

    console.log(values);
  }

  onPageScroll(params) {
    this.listeners.forEach(listener => {
      listener && listener(params);
    });
  }

  onAddPageScroll(listener) {
    this.listeners.push(listener);
  }

  render() {
    const { data, values } = this.state;
    return (
      <View className="root">
        <View className="title">TagBar</View>
        <View className="tagbar">
          <RMFilter
            data={data}
            values={values}
            onChange={this.handleChange}
            onAddPageScroll={this.onAddPageScroll}
          />
        </View>

        <View className="title">TagBar, default theme</View>
        <View className="tagbar">
          <RMFilter
            data={data}
            values={values}
            onChange={this.handleChange}
            onAddPageScroll={this.onAddPageScroll}
            selectedColor="default"
          />
        </View>

        <View className="title">TagBar, primary theme</View>
        <View className="tagbar">
          <RMFilter
            data={data}
            values={values}
            onChange={this.handleChange}
            onAddPageScroll={this.onAddPageScroll}
            selectedColor="primary"
          />
        </View>

        <View className="title">TagBar, secondary theme</View>
        <View className="tagbar">
          <RMFilter
            data={data}
            values={values}
            onChange={this.handleChange}
            onAddPageScroll={this.onAddPageScroll}
            selectedColor="secondary"
          />
        </View>

        <View className="title">TagBar, error theme</View>
        <View className="tagbar">
          <RMFilter
            data={data}
            values={values}
            onChange={this.handleChange}
            onAddPageScroll={this.onAddPageScroll}
            selectedColor="error"
          />
        </View>

        <View className="title">TagBar, success theme</View>
        <View className="tagbar">
          <RMFilter
            data={data}
            values={values}
            onChange={this.handleChange}
            onAddPageScroll={this.onAddPageScroll}
            selectedColor="success"
          />
        </View>

        <View className="title">TagBar, warning theme</View>
        <View className="tagbar">
          <RMFilter
            data={data}
            values={values}
            onChange={this.handleChange}
            onAddPageScroll={this.onAddPageScroll}
            selectedColor="warning"
          />
        </View>

        <View className="title">TagBar, progress theme</View>
        <View className="tagbar">
          <RMFilter
            data={data}
            values={values}
            onChange={this.handleChange}
            onAddPageScroll={this.onAddPageScroll}
            selectedColor="progress"
          />
        </View>

        <View className="body">呵呵呵</View>
        <View className="body">呵呵呵</View>
        <View className="body">呵呵呵</View>
      </View>
    );
  }
}

export default Index;
