import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';

import { RMIndexes, RMSwitch } from '../../../';

import mockData from './mock-data';

import theme from '../../../styles/theme';
import './index.scss';

export default class Index extends Taro.Component {
  config = {
    navigationBarTitleText: 'Taro Material',
  };

  onClick(item) {
    console.log(item);
  }

  handleChange = (type, checked, value, e) => {
    this.setState({
      [type]: checked,
    });
  };

  render() {
    const { itemBorder, listBorder } = this.state;
    return (
      <View className="page" style="height: 100vh;">
        {/* 基础用法 */}
        <View style="height: 100%;">
          <RMIndexes
            list={mockData}
            topKey="Top"
            onClick={this.onClick.bind(this)}
            ListProps={{ hasBorder: !!listBorder }}
            ListItemProps={{ hasBorder: !!itemBorder }}
          >
            <View className="custom-area">
              用户自定义内容
              <RMSwitch
                title="list border"
                value={listBorder}
                onChange={this.handleChange.bind(this, 'listBorder')}
              />
              <RMSwitch
                title="list item border"
                value={itemBorder}
                onChange={this.handleChange.bind(this, 'itemBorder')}
              />
            </View>
          </RMIndexes>
        </View>
      </View>
    );
  }
}
