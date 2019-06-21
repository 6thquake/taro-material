import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';

import { RMFloatBar,RMIcon } from '../../../';
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
                <RMFloatBar
                  placement={'top'}
                  offset={100}
                  spacing={10}
                  customStyle={'border-radius:10px'}
                  // fixed
                  // color={'grey'}
                >
                  <View>
                    不固定，宽度百分百
                  </View>
                </RMFloatBar>
                <RMFloatBar
                  placement={'top'}
                  offset={120}
                  spacing={10}
                  fixed
                  autoWidth
                  // color={'grey'}
                >
                  <View>
                    固定顶部,宽度自适应
                  </View>
                </RMFloatBar>
              </View>
            </View>
          </View>
        </View>

        <View className="doc-body">
          {/* 基本用法 */}
          <View className="panel">
            <View className="panel__title">基本用法</View>
            <View className="panel__content no-padding">
              <View className="example-item">
                <RMFloatBar
                  placement={'bottom'}
                  offset={100}
                  spacing={10}
                  autoWidth
                  fixed
                  color={'success'}
                >
                  <View>
                    固定底部,宽度自适应
                  </View>
                </RMFloatBar>
              </View>
            </View>
          </View>
        </View>


        <View className="doc-body">
          {/* 基本用法 */}
          <View className="panel">
            <View className="panel__title">参数说明</View>
            <View className="panel__content no-padding">
              <View className="example-item">

              </View>
              <View className="example-item">
                autoWidth:是否自适应宽度。如果值为false,那么该组件的宽度默认是100%。Boolean值。有autoWidth的时候spaing:表示的是距离两端的间隙的值 
              </View>
              <View className="example-item">
                spacing:当autoWidth值为false是发挥作用。值是一个数字(number)。
              </View>
              <View className="example-item">
                fixed：是否是固定定位。默认为false。Boolean值
              </View>
              <View className="example-item">
                placement:值是一个String类型的值（'top'|'bottom'）,表示布局的时候是顶部或者是底部
              </View>
              <View className="example-item">
                offset:值是number类型的值，与placement一起使用。比如placement为top:offset的值表示距离顶部偏移的值。
              </View>
              <View className="example-item">
                color:组件的背景色。String可取的值：'default' | 'inherit' | 'primary' | 'secondary' | 'error' | 'success' | 'warning' | 'progress'
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
