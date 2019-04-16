import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';

import { RMUpload } from '../../../';

import RMPage from '../../../Page';

import theme from '../../../styles/theme';
import './index.scss';

class Index extends RMPage {
  config = {
    navigationBarTitleText: 'Upload',
  };

  componentWillMount() {}

  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="root">
        <View className="spacer" />
        <View className="title">multiple, max length = 3</View>
        <View className="upload">
          <RMUpload maxLength={3} />
        </View>

        <View className="title">sigle</View>
        <View className="upload">
          <RMUpload multiple={false} />
        </View>

        <View className="title">disabled</View>
        <View className="upload">
          <RMUpload disabled={false} />
        </View>

        <View className="title">square</View>
        <View className="upload">
          <RMUpload square={false} />
        </View>

        <View className="title">helperText</View>
        <View className="upload">
          <RMUpload square placeholder="快来戳我" helperText="最多上传9张哦" />
        </View>

        <View className="title">default value</View>
        <View className="upload">
          <RMUpload
            files={[
              'https://code.aliyun.com/licoliu/resources/raw/master/images/navigators/contemplative-reptile.jpg',
              'https://code.aliyun.com/licoliu/resources/raw/master/images/navigators/live-from-space.jpg',
              'https://code.aliyun.com/licoliu/resources/raw/master/images/navigators/paella.jpg',
            ]}
          />
        </View>
      </View>
    );
  }
}

export default Index;
