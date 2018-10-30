import Taro, { Component } from '@tarojs/taro'
import Index from './index/index'

import './app.scss'

class App extends Component {
  config = {
    pages: [
      'index/index',
      'panel/index',
      'basic/icon/index',
      'basic/button/index',
      'basic/color/index',
      'basic/typo/index',
      'view/noticebar/index',
      'view/badge/index',
      'view/tag/index',
      'view/avatar/index',
      'view/article/index',
      'view/timeline/index',
      'view/swiper/index',
      'action/toast/index',
      'action/modal/index',
      'action/progress/index',
      'action/action-sheet/index',
      'action/swipe-action/index',
      'action/activity-indicator/index',
      'navigation/drawer/index',
      'navigation/pagination/index',
      'navigation/tabs/index',
      'navigation/tabbar/index',
      'navigation/segmented-control/index',
      'navigation/navbar/index',
      'layout/flex/index',
      'layout/grid/index',
      'layout/float-layout/index',
      'layout/card/index',
      'layout/list/index',
      'layout/accordion/index',
      'form/checkbox/index',
      'form/input/index',
      'form/input-number/index',
      'form/radio/index',
      'form/textarea/index',
      'form/switch/index',
      'form/rate/index',
      'form/picker/index',
      'form/picker-view/index',
      'form/slider/index',
      'form/search-bar/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentCatchError () {}

  render () {
    return <Index />
  }
}

Taro.render(<App />, document.getElementById('app'))
