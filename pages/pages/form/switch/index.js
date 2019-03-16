import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';
import { AtSwitch, AtForm } from 'taro-material';
import DocsHeader from '../../components/doc-header';
import './index.scss';

export default class Index extends Taro.Component {
  config = {
    navigationBarTitleText: 'Taro Material',
  };

  constructor() {
    super(...arguments);
    this.state = {
      switchValue: false,
    };
  }

  handleChange = value => {
    this.setState({
      switchValue: value,
    });
  };

  render() {
    return (
      <View className="page">
        {/* S Header */}
        <DocsHeader title="Switch 开关" />
        {/* E Header */}

        {/* S Body */}
        <View className="doc-body">
          {/* 基础用法 */}
          <View className="panel">
            <View className="panel__title">基础用法</View>
            <View className="panel__content no-padding">
              <View className="example-item">
                <AtForm>
                  <AtSwitch
                    title="开启中"
                    checked={this.state.switchValue}
                    onChange={this.handleChange}
                  />
                  <AtSwitch title="已关闭" border={false} />
                </AtForm>
              </View>
            </View>
          </View>

          {/* 禁用状态 */}
          <View className="panel">
            <View className="panel__title">禁用状态</View>
            <View className="panel__content no-padding">
              <View className="example-item">
                <AtForm>
                  <AtSwitch title="不可点击" checked disabled />
                  <AtSwitch title="不可点击" border={false} disabled />
                </AtForm>
              </View>
            </View>
          </View>
        </View>
        {/* E Body */}
      </View>
    );
  }
}
