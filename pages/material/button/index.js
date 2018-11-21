import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';

import { RMButton } from '../../taro-material';

import RMPage from '../../taro-material/Page';

import theme from '../../taro-material/styles/theme';
import './index.scss';

class Index extends RMPage {
  config = {
    navigationBarTitleText: 'Button',
  };

  componentWillMount() {}

  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  handle(e) {
    console.log('------status button click-------');
    e.returnValue = new Promise((resolve, reject) => {
      setTimeout(function() {
        Math.random() > 0.5 ? reject('err') : resolve('ok');
      }, 1000);
    });
    return e.returnValue;
  }

  handle2(e) {
    console.log('------button click-------');
    if (Math.random() > 0.5) {
      throw new Error('button click error');
    }
  }

  render() {
    return (
      <View className="root">
        <View className="spacer" />
        <View className="actions">
          <View className="ok">
            <RMButton onClick={this.handle2.bind(this)} color="default">
              text button - default color
            </RMButton>
            <RMButton onClick={this.handle2} color="default" variant="contained">
              contained button - default color
            </RMButton>
            <RMButton onClick={this.handle2} color="default" variant="outlined">
              outlined button - default color
            </RMButton>
            <RMButton onClick={this.handle2} color="default" variant="fab">
              +
            </RMButton>
            <RMButton onClick={this.handle2} color="default" variant="extendedFab">
              extendedFab button - default color
            </RMButton>

            <RMButton onClick={this.handle} color="primary" delay={3000} countdown={true}>
              text status button - delay
            </RMButton>
            <RMButton
              onClick={this.handle}
              color="primary"
              variant="contained"
              delay={3000}
              countdown={false}
            >
              contained status button - delay
            </RMButton>
            <RMButton onClick={this.handle} color="primary" variant="outlined" delay={0}>
              outlined status button - don't delay
            </RMButton>
            <RMButton onClick={this.handle} color="primary" variant="fab" delay={0}>
              +
            </RMButton>
            <RMButton onClick={this.handle} color="default" variant="extendedFab" delay={0}>
              extendedFab status button - don't delay
            </RMButton>

            <RMButton onClick={this.handle} color="default" delay={0}>
              text status button - default color
            </RMButton>
            <RMButton onClick={this.handle} color="default" variant="contained" delay={0}>
              contained status button - default color
            </RMButton>
            <RMButton onClick={this.handle} color="default" variant="outlined" delay={0}>
              outlined status button - default color
            </RMButton>
            <RMButton onClick={this.handle} color="default" variant="fab" delay={0}>
              +
            </RMButton>
            <RMButton onClick={this.handle} color="default" variant="extendedFab" delay={0}>
              extendedFab status button - default color
            </RMButton>

            <RMButton onClick={this.handle} color="primary">
              text status button - primary color
            </RMButton>
            <RMButton onClick={this.handle} color="primary" variant="contained">
              contained status button - primary color
            </RMButton>
            <RMButton onClick={this.handle} color="primary" variant="outlined">
              outlined status button - primary color
            </RMButton>
            <RMButton onClick={this.handle} color="primary" variant="fab">
              +
            </RMButton>
            <RMButton onClick={this.handle} color="primary" variant="extendedFab">
              extendedFab status button - primary color
            </RMButton>

            <RMButton onClick={this.handle} color="secondary">
              text status button - secondary color
            </RMButton>
            <RMButton onClick={this.handle} color="secondary" variant="contained">
              contained status button - secondary color
            </RMButton>
            <RMButton onClick={this.handle} color="secondary" variant="outlined">
              outlined status button - secondary color
            </RMButton>
            <RMButton onClick={this.handle} color="secondary" variant="fab">
              +
            </RMButton>
            <RMButton onClick={this.handle} color="secondary" variant="extendedFab">
              extendedFab status button - secondary color
            </RMButton>

            <View className="inherit">
              <RMButton onClick={this.handle} color="inherit">
                text status button - inherit color
              </RMButton>
            </View>
            <View className="inherit">
              <RMButton onClick={this.handle} color="inherit" variant="contained">
                contained status button - inherit color
              </RMButton>
            </View>
            <View className="inherit">
              <RMButton onClick={this.handle} color="inherit" variant="outlined">
                outlined status button - inherit color
              </RMButton>
            </View>
            <View className="inherit">
              <RMButton onClick={this.handle} color="inherit" variant="fab">
                +
              </RMButton>
            </View>
            <View className="inherit">
              <RMButton onClick={this.handle} color="inherit" variant="extendedFab">
                extendedFab status button - inherit color
              </RMButton>

              <RMButton onClick={this.handle2.bind(this)} color="default" size="small">
                text button - small
              </RMButton>
              <RMButton onClick={this.handle2} color="default" variant="contained" size="small">
                contained button - small
              </RMButton>
              <RMButton onClick={this.handle2} color="default" variant="outlined" size="small">
                outlined button - small
              </RMButton>
              <RMButton onClick={this.handle2} color="default" variant="fab" size="small">
                +
              </RMButton>
              <RMButton onClick={this.handle2} color="default" variant="extendedFab" size="small">
                extendedFab button - small
              </RMButton>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default Index;
