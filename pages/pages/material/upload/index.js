import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';

import { RMUpload, RMButton } from '../../../';

import RMPage from '../../../Page';

import theme from '../../../styles/theme';
import './index.scss';

class Index extends RMPage {
  config = {
    navigationBarTitleText: 'Upload',
  };

  files = [
    'https://code.aliyun.com/licoliu/resources/raw/master/images/navigators/contemplative-reptile.jpg',
    'https://code.aliyun.com/licoliu/resources/raw/master/images/navigators/live-from-space.jpg',
    'https://code.aliyun.com/licoliu/resources/raw/master/images/navigators/paella.jpg',
    'https://code.aliyun.com/licoliu/resources/raw/master/images/discovery/1-3.JPG',
    'https://code.aliyun.com/licoliu/resources/raw/master/images/discovery/2-3.JPG',
    'https://code.aliyun.com/licoliu/resources/raw/master/images/discovery/4-1.JPG',
    'https://code.aliyun.com/licoliu/resources/raw/master/images/discovery/4-3.JPG',
  ];

  state = {
    files: [
      'https://code.aliyun.com/licoliu/resources/raw/master/images/navigators/contemplative-reptile.jpg',
      'https://code.aliyun.com/licoliu/resources/raw/master/images/navigators/live-from-space.jpg',
      'https://code.aliyun.com/licoliu/resources/raw/master/images/discovery/1-3.JPG',
    ],
  };
  componentWillMount() {}

  componentDidMount() {
    // this.handleChangeImages();
  }

  componentDidShow() {}

  componentDidHide() {}

  handleChangeImages() {
    const length = this.files.length;
    const start = Math.floor(Math.random() * length);
    const end = start + Math.floor(Math.random() * (length - start));
    const files = this.files.slice(0, end);
    this.setState({
      files,
      // hello: '',
    });
  }

  render() {
    const { files } = this.state;
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
          <RMUpload files={this.state.files} />
          <RMButton color="primary" variant="contained" onClick={this.handleChangeImages}>
            换图片
          </RMButton>
        </View>
      </View>
    );
  }
}

export default Index;
