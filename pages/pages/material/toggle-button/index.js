import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import dayjs from 'dayjs';

import { RMToggleButton, RMTypography } from '../../../';

import theme from '../../../styles/theme';
import './index.scss';

class Index extends Component {
  config = {
    navigationBarTitleText: 'toggle-button',
  };

  state = {
    value: '',
    options: [
      {
        value: '首页',
        label: '首页',
        icon: 'home',
      },
      // {
      //   value: 'vue',
      //   label: 'react',
      //   icon: 'add_circle',
      // },
      {
        value: '纸篓',
        label: '纸篓',
        icon: 'delete',
      },
      {
        value: '收藏',
        label: '收藏',
        icon: 'favorite',
      },
      {
        value: '我的',
        label: '我的',
        icon: 'account_circle',
      },
    ],
    options2: [
      {
        value: '首页',
        label: '首页',
      },
      // {
      //   value: 'vue',
      //   label: 'react',
      //   icon: 'add_circle',
      // },
      {
        value: '纸篓',
        label: '纸篓',
      },
      {
        value: '收藏',
        label: '收藏',
      },
      {
        value: '我的',
        label: '我的',
      },
    ],
  };
  componentWillMount() {}

  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  handleChange = value => {
    console.log(value);
    this.setState({
      value,
    });
  };

  render() {
    const { options, options2, value } = this.state;

    return (
      <View className="root">
        <View className="box">
          <View className="title">
            <RMTypography className="body2">
              不显示所有label， 当项目比较多的时候可以使用
            </RMTypography>
          </View>
          <RMToggleButton onChange={this.handleChange} value={value} options={options} />
        </View>

        <View className="box">
          <View className="title">
            <RMTypography className="body2">显示所有label： showLabels</RMTypography>
          </View>
          <RMToggleButton showLabels onChange={this.handleChange} value={value} options={options} />
        </View>

        <View className="box">
          <View className="title">
            <RMTypography className="body2">暗背景： isDark & customStyle</RMTypography>
          </View>
          <RMToggleButton
            customStyle={{ background: theme.palette.error.light }}
            isDark
            onChange={this.handleChange}
            value={value}
            options={options}
          />
        </View>
        <View className="box">
          <View className="title">
            <RMTypography className="body2">阴影： hasShadow</RMTypography>
          </View>
          <RMToggleButton hasShadow onChange={this.handleChange} value={value} options={options} />
        </View>

        <View className="box">
          <View className="title">
            <RMTypography className="body2">小图标：mini</RMTypography>
          </View>
          <RMToggleButton mini onChange={this.handleChange} value={value} options={options} />
        </View>

        <View className="box">
          <View className="title">
            <RMTypography className="body2">自由的控制图标的大小： fontSize</RMTypography>
          </View>
          <RMToggleButton
            fontSize={24}
            hasShadow
            onChange={this.handleChange}
            value={value}
            options={options}
          />
        </View>

        <View className="box">
          <View className="title">
            <RMTypography className="body2">只有文字</RMTypography>
          </View>
          <RMToggleButton
            showLabels
            hasShadow
            onChange={this.handleChange}
            value={value}
            options={options2}
          />
        </View>

        <View className="box">
          <View className="title">
            <RMTypography className="body2">自定义选中颜色： activeColor</RMTypography>
          </View>
          <RMToggleButton
            activeColor={'progress'}
            onChange={this.handleChange}
            value={value}
            options={options}
          />
        </View>

        <View className="box">
          <View className="title">
            <RMTypography className="body2" block>
              不使用圆角： circle: false
            </RMTypography>
            <RMTypography className="body2" block>
              也可以直接使用 customStyle 更灵活的修改圆角
            </RMTypography>
          </View>
          <RMToggleButton
            circle={false}
            onChange={this.handleChange}
            value={value}
            options={options}
          />
        </View>
      </View>
    );
  }
}

export default Index;
