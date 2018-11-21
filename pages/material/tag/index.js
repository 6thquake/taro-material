import Taro, { Component } from '@tarojs/taro';
import { View, Button, Canvas } from '@tarojs/components';

import { RMTag } from '../../taro-material';

import RMPage from '../../taro-material/Page';

import theme from '../../taro-material/styles/theme';
import './index.scss';

class Index extends RMPage {
  config = {
    navigationBarTitleText: 'Tag',
  };

  componentWillMount() {}

  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="root">
        <View className="spacer" />
        <View className="tags">
          <RMTag color="default">default</RMTag>
          <RMTag color="inherit">inherit</RMTag>
          <RMTag color="primary">primary</RMTag>
          <RMTag color="secondary">secondary</RMTag>
          <RMTag color="error">error</RMTag>
          <RMTag color="success">success</RMTag>
          <RMTag color="warning">warning</RMTag>
          <RMTag color="progress">progress</RMTag>

          <RMTag
            circle={true}
            color="default"
            active={true}
            prefix={'account_circle'}
            suffix={'alarm'}
            block={true}
          >
            default
          </RMTag>
          <RMTag
            circle={true}
            color="inherit"
            active={true}
            prefix={'account_circle'}
            suffix={'alarm'}
            block={true}
          >
            inherit
          </RMTag>
          <RMTag
            circle={true}
            color="primary"
            active={true}
            prefix={'account_circle'}
            suffix={'alarm'}
            block={true}
          >
            primary
          </RMTag>
          <RMTag
            circle={true}
            color="secondary"
            active={true}
            prefix={'account_circle'}
            suffix={'alarm'}
            block={true}
          >
            secondary
          </RMTag>
          <RMTag
            circle={true}
            color="error"
            active={true}
            prefix={'account_circle'}
            suffix={'alarm'}
            block={true}
          >
            error
          </RMTag>
          <RMTag
            circle={true}
            color="success"
            active={true}
            prefix={'account_circle'}
            suffix={'alarm'}
            block={true}
          >
            success
          </RMTag>
          <RMTag
            circle={true}
            color="warning"
            active={true}
            prefix={'account_circle'}
            suffix={'alarm'}
            block={true}
          >
            warning
          </RMTag>
          <RMTag
            circle={true}
            color="progress"
            active={true}
            prefix={'account_circle'}
            suffix={'alarm'}
            block={true}
          >
            progress
          </RMTag>

          <RMTag color="default" size="small">
            default
          </RMTag>
          <RMTag color="inherit" size="small">
            inherit
          </RMTag>
          <RMTag color="primary" size="small">
            primary
          </RMTag>
          <RMTag color="secondary" size="small">
            secondary
          </RMTag>
          <RMTag color="error" size="small">
            error
          </RMTag>
          <RMTag color="success" size="small">
            success
          </RMTag>
          <RMTag color="warning" size="small">
            warning
          </RMTag>
          <RMTag color="progress" size="small">
            progress
          </RMTag>

          <RMTag color="default" size="small" prefix={'account_circle'} suffix={'alarm'}>
            default
          </RMTag>
          <RMTag color="inherit" size="small" prefix={'account_circle'} suffix={'alarm'}>
            inherit
          </RMTag>
          <RMTag color="primary" size="small" prefix={'account_circle'} suffix={'alarm'}>
            primary
          </RMTag>
          <RMTag color="secondary" size="small" prefix={'account_circle'} suffix={'alarm'}>
            secondary
          </RMTag>
          <RMTag color="error" size="small" prefix={'account_circle'} suffix={'alarm'}>
            error
          </RMTag>
          <RMTag color="success" size="small" prefix={'account_circle'} suffix={'alarm'}>
            success
          </RMTag>
          <RMTag color="warning" size="small" prefix={'account_circle'} suffix={'alarm'}>
            warning
          </RMTag>
          <RMTag color="progress" size="small" prefix={'account_circle'} suffix={'alarm'}>
            progress
          </RMTag>

          <RMTag
            circle={true}
            color="default"
            size="small"
            prefix={'account_circle'}
            suffix={'alarm'}
          >
            default
          </RMTag>
          <RMTag
            circle={true}
            color="inherit"
            size="small"
            prefix={'account_circle'}
            suffix={'alarm'}
          >
            inherit
          </RMTag>
          <RMTag
            circle={true}
            color="primary"
            size="small"
            prefix={'account_circle'}
            suffix={'alarm'}
          >
            primary
          </RMTag>
          <RMTag
            circle={true}
            color="secondary"
            size="small"
            prefix={'account_circle'}
            suffix={'alarm'}
          >
            secondary
          </RMTag>
          <RMTag
            circle={true}
            color="error"
            size="small"
            prefix={'account_circle'}
            suffix={'alarm'}
          >
            error
          </RMTag>
          <RMTag
            circle={true}
            color="success"
            size="small"
            prefix={'account_circle'}
            suffix={'alarm'}
          >
            success
          </RMTag>
          <RMTag
            circle={true}
            color="warning"
            size="small"
            prefix={'account_circle'}
            suffix={'alarm'}
          >
            warning
          </RMTag>
          <RMTag
            circle={true}
            color="progress"
            size="small"
            prefix={'account_circle'}
            suffix={'alarm'}
          >
            progress
          </RMTag>
          <RMTag
            circle={true}
            color="default"
            active={true}
            size="small"
            prefix={'account_circle'}
            suffix={'alarm'}
          >
            default
          </RMTag>
          <RMTag
            circle={true}
            color="inherit"
            active={true}
            size="small"
            prefix={'account_circle'}
            suffix={'alarm'}
          >
            inherit
          </RMTag>
          <RMTag
            circle={true}
            color="primary"
            active={true}
            size="small"
            prefix={'account_circle'}
            suffix={'alarm'}
          >
            primary
          </RMTag>
          <RMTag
            circle={true}
            color="secondary"
            active={true}
            size="small"
            prefix={'account_circle'}
            suffix={'alarm'}
          >
            secondary
          </RMTag>
          <RMTag
            circle={true}
            color="error"
            active={true}
            size="small"
            prefix={'account_circle'}
            suffix={'alarm'}
          >
            error
          </RMTag>
          <RMTag
            circle={true}
            color="success"
            active={true}
            size="small"
            prefix={'account_circle'}
            suffix={'alarm'}
          >
            success
          </RMTag>
          <RMTag
            circle={true}
            color="warning"
            active={true}
            size="small"
            prefix={'account_circle'}
            suffix={'alarm'}
          >
            warning
          </RMTag>
          <RMTag
            circle={true}
            color="progress"
            active={true}
            size="small"
            prefix={'account_circle'}
            suffix={'alarm'}
          >
            progress
          </RMTag>
        </View>
      </View>
    );
  }
}

export default Index;
