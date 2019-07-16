import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';

import { RMList, RMListItem } from '../../../';

import './index.scss';

export default class ListPage extends Component {
  config = {
    navigationBarTitleText: 'List',
  };

  handleChange = e => {
    console.log('Change Switch', e);
  };

  handleClick = e => {
    console.log('Click Item', e);
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
                <RMList>
                  <RMListItem title="标题文字" onClick={this.handleClick} />
                  <RMListItem title="标题文字" arrow="right" />
                  <RMListItem title="标题文字" extraText="详细信息" />
                  <RMListItem title="禁用状态" disabled extraText="详细信息" />
                </RMList>
              </View>
            </View>
          </View>

          {/* 包含描述信息 */}
          <View className="panel">
            <View className="panel__title">包含描述信息</View>
            <View className="panel__content no-padding">
              <View className="example-item">
                <RMList>
                  <RMListItem title="标题文字" note="描述信息" />
                  <RMListItem title="标题文字" note="描述信息" arrow="right" />
                  <RMListItem
                    arrow="right"
                    note="描述信息"
                    title="标题文字标题文字标题文字标题文字标题文字"
                    extraText="详细信息详细信息详细信息详细信息"
                  />
                </RMList>
              </View>
            </View>
          </View>

          {/* 包含图片 */}
          <View className="panel">
            <View className="panel__title">包含图片</View>
            <View className="panel__content no-padding">
              <View className="example-item">
                <RMList>
                  <RMListItem
                    title="标题文字"
                    arrow="right"
                    thumb="https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png"
                  />
                  <RMListItem
                    title="标题文字"
                    note="描述信息"
                    arrow="right"
                    thumb="http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png"
                  />
                  <RMListItem
                    title="标题文字"
                    note="描述信息"
                    extraText="详细信息"
                    arrow="right"
                    thumb="http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png"
                  />
                </RMList>
              </View>
            </View>
          </View>

          {/* 图标 */}
          <View className="panel">
            <View className="panel__title">支持图标(不能与thumb同时存在)</View>
            <View className="panel__content no-padding">
              <View className="example-item">
                <RMList>
                  <RMListItem
                    title="标题文字"
                    note="描述信息"
                    arrow="right"
                    iconThumb="date_range"
                    iconThumbColor="warning"
                  />
                  <RMListItem
                    title="标题文字"
                    note="描述信息"
                    extraText="详细信息"
                    arrow="right"
                    iconThumb="bookmark"
                    iconThumbColor="primary"
                  />
                </RMList>
              </View>
            </View>
          </View>

          {/* 图标 */}
          <View className="panel">
            <View className="panel__title">支持图标(不能与thumb同时存在)</View>
            <View className="panel__content no-padding">
              <View className="example-item">
                <RMList>
                  <RMListItem
                    title="标题文字"
                    note="描述信息"
                    arrow="right"
                    iconThumb="date_range"
                    iconThumbColor="warning"
                    extraText="信息"
                    extraTextColor="warning"
                    extraIconThumb="bookmark"
                    extraIconThumbColor="warning"
                  />
                </RMList>
              </View>
            </View>
          </View>

          {/* 图标 */}
          <View className="panel">
            <View className="panel__title">支持图标(不能与thumb同时存在)</View>
            <View className="panel__content no-padding">
              <View className="example-item">
                <RMList>
                  <RMListItem
                    title="标题文字"
                    arrow="right"
                    badge={{
                      variant: 'dot',
                    }}
                    image="https://code.aliyun.com/licoliu/resources/raw/master/images/icons/%E6%88%91%E7%9A%84/%E5%8F%91%E7%A5%A8%E5%B7%A5%E5%85%B7.png"
                  />
                  <RMListItem
                    title="标题文字"
                    arrow="right"
                    iconThumb="date_range"
                    iconThumbColor="warning"
                    badge={{
                      variant: 'dot',
                    }}
                  />
                  <RMListItem
                    title="标题文字"
                    note="描述信息"
                    arrow="right"
                    iconThumb="date_range"
                    iconThumbColor="warning"
                    badge={{
                      variant: 'dot',
                    }}
                  />
                  <RMListItem
                    title="标题文字"
                    note="描述信息"
                    arrow="right"
                    iconThumb="date_range"
                    iconThumbColor="warning"
                    badge={{
                      variant: 'text',
                      value: 999,
                      maxValue: 99,
                    }}
                  />
                  <RMListItem
                    title="标题文字"
                    note="描述信息"
                    arrow="right"
                    iconThumb="date_range"
                    iconThumbColor="warning"
                    extraText="信息"
                    extraTextColor="warning"
                    extraIconThumb="bookmark"
                    extraIconThumbColor="warning"
                    badge={{
                      variant: 'dot',
                    }}
                  />
                  <RMListItem
                    title="标题文字"
                    note="描述信息"
                    arrow="right"
                    iconThumb="date_range"
                    iconThumbColor="warning"
                    extraText="信息"
                    extraTextColor="warning"
                    extraIconThumb="bookmark"
                    extraIconThumbColor="warning"
                    badge={{
                      variant: 'text',
                      value: 999,
                      maxValue: 99,
                    }}
                  />

                  <RMListItem
                    title="标题文字"
                    note="描述信息"
                    arrow="right"
                    iconThumb="date_range"
                    iconThumbColor="warning"
                    extraText="信息"
                    extraTextColor="warning"
                    extraIconThumb="bookmark"
                    extraIconThumbColor="warning"
                    badge={{
                      value: '热',
                      variant: 'mark',
                    }}
                  />

                  <RMListItem
                    title="标题文字"
                    note="描述信息"
                    arrow="right"
                    iconThumb="date_range"
                    iconThumbColor="warning"
                    extraText="信息"
                    extraTextColor="warning"
                    extraIconThumb="bookmark"
                    extraIconThumbColor="warning"
                    badge={{
                      value: '奖',
                      variant: 'ribbon',
                    }}
                  />

                  <RMListItem
                    title="标题文字"
                    note="描述信息"
                    arrow="right"
                    iconThumb="date_range"
                    iconThumbColor="warning"
                    extraText="信息"
                    extraTextColor="warning"
                    extraIconThumb="bookmark"
                    extraIconThumbColor="warning"
                    badge={{}}
                  />
                </RMList>
              </View>
            </View>
          </View>

          {/* 无边框 */}
          <View className="panel">
            <View className="panel__title">无边框</View>
            <View className="panel__content no-padding">
              <View className="example-item">
                <RMList hasBorder={false}>
                  <RMListItem
                    isSwitch
                    title="标题文字"
                    hasBorder={false}
                    onSwitchChange={this.handleChange}
                  />
                  <RMListItem
                    isSwitch
                    title="标题文字"
                    hasBorder={false}
                    onSwitchChange={this.handleChange}
                  />
                </RMList>
              </View>
            </View>
          </View>

          {/* Switch 按钮列表 */}
          <View className="panel">
            <View className="panel__title">Switch 按钮列表</View>
            <View className="panel__content no-padding">
              <View className="example-item">
                <RMList>
                  <RMListItem
                    title="标题文字"
                    isSwitch
                    onClick={this.handleClick}
                    onSwitchChange={this.handleChange}
                  />
                  <RMListItem
                    isSwitch
                    disabled
                    switchIsCheck
                    title="禁用状态"
                    onSwitchChange={this.handleChange}
                  />
                  <RMListItem
                    isSwitch
                    switchIsCheck
                    title="标题文字"
                    onSwitchChange={this.handleChange}
                  />
                </RMList>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
