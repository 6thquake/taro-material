import Taro, { Component } from '@tarojs/taro';
import { View, Button, Canvas } from '@tarojs/components';

import { RMTag, AtDivider } from '../../../';

import RMPage from '../../../Page';

import theme from '../../../styles/theme';
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
          <RMTag color="progress">热</RMTag>

          <RMTag circle color="default" active prefix="account_circle" suffix="alarm" block>
            default
          </RMTag>
          <RMTag circle color="inherit" active prefix="account_circle" suffix="alarm" block>
            inherit
          </RMTag>
          <RMTag circle color="primary" active prefix="account_circle" suffix="alarm" block>
            primary
          </RMTag>
          <RMTag circle color="secondary" active prefix="account_circle" suffix="alarm" block>
            secondary
          </RMTag>
          <RMTag circle color="error" active prefix="account_circle" suffix="alarm" block>
            error
          </RMTag>
          <RMTag circle color="success" active prefix="account_circle" suffix="alarm" block>
            success
          </RMTag>
          <RMTag circle color="warning" active prefix="account_circle" suffix="alarm" block>
            warning
          </RMTag>
          <RMTag circle color="progress" active prefix="account_circle" suffix="alarm" block>
            progress
          </RMTag>
          <RMTag circle color="progress" active prefix="account_circle" suffix="alarm" block>
            热
          </RMTag>

          <AtDivider />
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
          <RMTag color="progress" size="small">
            热
          </RMTag>

          <RMTag color="default" size="small" prefix="account_circle" suffix="alarm">
            default
          </RMTag>
          <RMTag color="inherit" size="small" prefix="account_circle" suffix="alarm">
            inherit
          </RMTag>
          <RMTag color="primary" size="small" prefix="account_circle" suffix="alarm">
            primary
          </RMTag>
          <RMTag color="secondary" size="small" prefix="account_circle" suffix="alarm">
            secondary
          </RMTag>
          <RMTag color="error" size="small" prefix="account_circle" suffix="alarm">
            error
          </RMTag>
          <RMTag color="success" size="small" prefix="account_circle" suffix="alarm">
            success
          </RMTag>
          <RMTag color="warning" size="small" prefix="account_circle" suffix="alarm">
            warning
          </RMTag>
          <RMTag color="progress" size="small" prefix="account_circle" suffix="alarm">
            progress
          </RMTag>

          <RMTag circle color="default" size="small" prefix="account_circle" suffix="alarm">
            default
          </RMTag>
          <RMTag circle color="inherit" size="small" prefix="account_circle" suffix="alarm">
            inherit
          </RMTag>
          <RMTag circle color="primary" size="small" prefix="account_circle" suffix="alarm">
            primary
          </RMTag>
          <RMTag circle color="secondary" size="small" prefix="account_circle" suffix="alarm">
            secondary
          </RMTag>
          <RMTag circle color="error" size="small" prefix="account_circle" suffix="alarm">
            error
          </RMTag>
          <RMTag circle color="success" size="small" prefix="account_circle" suffix="alarm">
            success
          </RMTag>
          <RMTag circle color="warning" size="small" prefix="account_circle" suffix="alarm">
            warning
          </RMTag>
          <RMTag circle color="progress" size="small" prefix="account_circle" suffix="alarm">
            progress
          </RMTag>
          <RMTag circle color="default" active size="small" prefix="account_circle" suffix="alarm">
            default
          </RMTag>
          <RMTag circle color="inherit" active size="small" prefix="account_circle" suffix="alarm">
            inherit
          </RMTag>
          <RMTag circle color="primary" active size="small" prefix="account_circle" suffix="alarm">
            primary
          </RMTag>
          <RMTag
            circle
            color="secondary"
            active
            size="small"
            prefix="account_circle"
            suffix="alarm"
          >
            secondary
          </RMTag>
          <RMTag circle color="error" active size="small" prefix="account_circle" suffix="alarm">
            error
          </RMTag>
          <RMTag circle color="success" active size="small" prefix="account_circle" suffix="alarm">
            success
          </RMTag>
          <RMTag circle color="warning" active size="small" prefix="account_circle" suffix="alarm">
            warning
          </RMTag>
          <RMTag circle color="progress" active size="small" prefix="account_circle" suffix="alarm">
            progress
          </RMTag>
          <RMTag circle color="progress" active size="small" prefix="account_circle" suffix="alarm">
            热
          </RMTag>

          <AtDivider />

          <RMTag color="default" size="xs">
            default
          </RMTag>
          <RMTag color="inherit" size="xs">
            inherit
          </RMTag>
          <RMTag color="primary" size="xs">
            primary
          </RMTag>
          <RMTag color="secondary" size="xs">
            secondary
          </RMTag>
          <RMTag color="error" size="xs">
            error
          </RMTag>
          <RMTag color="success" size="xs">
            success
          </RMTag>
          <RMTag color="warning" size="xs">
            warning
          </RMTag>
          <RMTag color="progress" size="xs">
            progress
          </RMTag>
          <RMTag color="progress" size="xs">
            热
          </RMTag>

          <RMTag color="default" size="xs" prefix="account_circle" suffix="alarm">
            default
          </RMTag>
          <RMTag color="inherit" size="xs" prefix="account_circle" suffix="alarm">
            inherit
          </RMTag>
          <RMTag color="primary" size="xs" prefix="account_circle" suffix="alarm">
            primary
          </RMTag>
          <RMTag color="secondary" size="xs" prefix="account_circle" suffix="alarm">
            secondary
          </RMTag>
          <RMTag color="error" size="xs" prefix="account_circle" suffix="alarm">
            error
          </RMTag>
          <RMTag color="success" size="xs" prefix="account_circle" suffix="alarm">
            success
          </RMTag>
          <RMTag color="warning" size="xs" prefix="account_circle" suffix="alarm">
            warning
          </RMTag>
          <RMTag color="progress" size="xs" prefix="account_circle" suffix="alarm">
            progress
          </RMTag>

          <RMTag circle color="default" size="xs" prefix="account_circle" suffix="alarm">
            default
          </RMTag>
          <RMTag circle color="inherit" size="xs" prefix="account_circle" suffix="alarm">
            inherit
          </RMTag>
          <RMTag circle color="primary" size="xs" prefix="account_circle" suffix="alarm">
            primary
          </RMTag>
          <RMTag circle color="secondary" size="xs" prefix="account_circle" suffix="alarm">
            secondary
          </RMTag>
          <RMTag circle color="error" size="xs" prefix="account_circle" suffix="alarm">
            error
          </RMTag>
          <RMTag circle color="success" size="xs" prefix="account_circle" suffix="alarm">
            success
          </RMTag>
          <RMTag circle color="warning" size="xs" prefix="account_circle" suffix="alarm">
            warning
          </RMTag>
          <RMTag circle color="progress" size="xs" prefix="account_circle" suffix="alarm">
            progress
          </RMTag>
          <RMTag circle color="default" active size="xs" prefix="account_circle" suffix="alarm">
            default
          </RMTag>
          <RMTag circle color="inherit" active size="xs" prefix="account_circle" suffix="alarm">
            inherit
          </RMTag>
          <RMTag circle color="primary" active size="xs" prefix="account_circle" suffix="alarm">
            primary
          </RMTag>
          <RMTag circle color="secondary" active size="xs" prefix="account_circle" suffix="alarm">
            secondary
          </RMTag>
          <RMTag circle color="error" active size="xs" prefix="account_circle" suffix="alarm">
            error
          </RMTag>
          <RMTag circle color="success" active size="xs" prefix="account_circle" suffix="alarm">
            success
          </RMTag>
          <RMTag circle color="warning" active size="xs" prefix="account_circle" suffix="alarm">
            warning
          </RMTag>
          <RMTag circle color="progress" active size="xs" prefix="account_circle" suffix="alarm">
            progress
          </RMTag>
          <RMTag circle color="progress" active size="xs" prefix="account_circle" suffix="alarm">
            热
          </RMTag>
        </View>
      </View>
    );
  }
}

export default Index;
