import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';

import { RMFloatBar } from '../../../';

import './index.scss';

export default class FloatBarPage extends Component {
  config = {
    navigationBarTitleText: 'FloatBar',
  };


  render() {
    return (
      <View className="page">
        <View className="doc-body">
          {/* 基本用法 */}
          <View className="panel">
            <View className="panel__title">基本用法</View>
            <View className="panel__content no-padding">
              <View className="example-item">
                <RMFloatBar>
                  
                </RMFloatBar>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
