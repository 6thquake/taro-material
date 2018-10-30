import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import {
  RMButton,
} from '../../taro-material'

import RMPage from '../../taro-material/Page'

import theme from '../../taro-material/styles/theme'
import './index.scss'


class Index extends RMPage {
  config = {
    navigationBarTitleText: 'Button',
  }

  componentWillMount () { }

  componentDidMount () { }

  componentDidShow() { }

  componentDidHide () { }

  handle(e) {
    console.log("------status button click-------")
    e.returnValue = new Promise((resolve, reject) => {
      setTimeout(function () {
        Math.random() > 0.5 ? reject('err') : resolve('ok');
      }, 1000);
    });
    return e.returnValue;
  }

  handle2(e) {
    console.log("------button click-------")
    if(Math.random() > 0.5){
      throw new Error('button click error')
    }
  }
  
  render () {
    return (
      <View className='root'>
        <View className='spacer'></View>
        <View className='actions'>
          <View className='ok'>
            <RMButton
              onClick={this.handle2.bind(this)}
              color='default'
            >
              text button - default color
            </RMButton>
            <RMButton
              onClick={this.handle2}
              color='default'
              variant='contained'
            >
              contained button - default color
            </RMButton>
            <RMButton
              onClick={this.handle2}
              color='default'
              variant='outlined'
            >
              outlined button - default color
            </RMButton>
            <RMButton
              onClick={this.handle2}
              color='default'
              variant='fab'
            >
              +
            </RMButton>
            <RMButton
              onClick={this.handle2}
              color='default'
              variant='extendedFab'
            >
              extendedFab button - default color
            </RMButton>


            <RMButton
              onClick={this.handle}
              color='default'
            >
              text status button - default color
            </RMButton>
            <RMButton
              onClick={this.handle}
              color='default'
              variant='contained'
            >
              contained status button - default color
            </RMButton>
            <RMButton
              onClick={this.handle}
              color='default'
              variant='outlined'
            >
              outlined status button - default color
            </RMButton>
            <RMButton
              onClick={this.handle}
              color='default'
              variant='fab'
            >
              +
            </RMButton>
            <RMButton
              onClick={this.handle}
              color='default'
              variant='extendedFab'
            >
              extendedFab status button - default color
            </RMButton>


            <RMButton
              onClick={this.handle}
              color='primary'
            >
              text status button - default color
            </RMButton>
            <RMButton
              onClick={this.handle}
              color='primary'
              variant='contained'
            >
              contained status button - default color
            </RMButton>
            <RMButton
              onClick={this.handle}
              color='primary'
              variant='outlined'
            >
              outlined status button - default color
            </RMButton>
            <RMButton
              onClick={this.handle}
              color='primary'
              variant='fab'
            >
              +
            </RMButton>
            <RMButton
              onClick={this.handle}
              color='primary'
              variant='extendedFab'
            >
              extendedFab status button - default color
            </RMButton>


            <RMButton
              onClick={this.handle}
              color='secondary'
            >
              text status button - default color
            </RMButton>
            <RMButton
              onClick={this.handle}
              color='secondary'
              variant='contained'
            >
              contained status button - default color
            </RMButton>
            <RMButton
              onClick={this.handle}
              color='secondary'
              variant='outlined'
            >
              outlined status button - default color
            </RMButton>
            <RMButton
              onClick={this.handle}
              color='secondary'
              variant='fab'
            >
              +
            </RMButton>
            <RMButton
              onClick={this.handle}
              color='secondary'
              variant='extendedFab'
            >
              extendedFab status button - default color
            </RMButton>


            <View className='inherit'>
              <RMButton
                onClick={this.handle}
                color='inherit'
              >
                text status button - default color
              </RMButton>
            </View>
            <View className='inherit'>
              <RMButton
                onClick={this.handle}
                color='inherit'
                variant='contained'
              >
                contained status button - default color
              </RMButton>
            </View>
            <View className='inherit'>
              <RMButton
                onClick={this.handle}
                color='inherit'
                variant='outlined'
              >
                outlined status button - default color
              </RMButton>
            </View>
            <View className='inherit'>
              <RMButton
                onClick={this.handle}
                color='inherit'
                variant='fab'
              >
                +
              </RMButton>
            </View>
            <View className='inherit'>
              <RMButton
                onClick={this.handle}
                color='inherit'
                variant='extendedFab'
              >
                extendedFab status button - default color
              </RMButton>
            </View>
          </View>
        </View>
      </View> 
    )
  }
}

export default Index
