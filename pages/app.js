import Taro, { Component } from '@tarojs/taro';
import Index from './pages/index/index';

import './app.scss';

class App extends Component {
  config = {
    pages: [
      'pages/index/index',
      'pages/panel/index',
      'pages/basic/icon/index',
      'pages/basic/button/index',
      'pages/basic/color/index',
      'pages/basic/typo/index',
      'pages/view/noticebar/index',
      'pages/view/badge/index',
      'pages/view/tag/index',
      'pages/view/avatar/index',
      'pages/view/article/index',
      'pages/view/timeline/index',
      'pages/view/swiper/index',
      'pages/view/load-more/index',
      'pages/view/divider/index',
      'pages/view/countdown/index',
      'pages/view/steps/index',
      'pages/view/curtain/index',
      'pages/action/toast/index',
      'pages/action/modal/index',
      'pages/action/progress/index',
      'pages/action/action-sheet/index',
      'pages/action/swipe-action/index',
      'pages/action/activity-indicator/index',
      'pages/action/message/index',
      'pages/navigation/drawer/index',
      'pages/navigation/pagination/index',
      'pages/navigation/tabs/index',
      'pages/navigation/tabbar/index',
      'pages/navigation/segmented-control/index',
      'pages/navigation/navbar/index',
      'pages/navigation/indexes/index',
      'pages/layout/flex/index',
      'pages/layout/grid/index',
      'pages/layout/float-layout/index',
      'pages/layout/card/index',
      'pages/layout/list/index',
      'pages/layout/accordion/index',
      'pages/form/checkbox/index',
      'pages/form/input/index',
      'pages/form/input-number/index',
      'pages/form/radio/index',
      'pages/form/textarea/index',
      'pages/form/switch/index',
      'pages/form/rate/index',
      'pages/form/picker/index',
      'pages/form/picker-view/index',
      'pages/form/slider/index',
      'pages/form/search-bar/index',
      'pages/form/image-picker/index',
      'pages/form/range/index',
      'pages/advanced/calendar/index',
      'pages/theme/index',

      'pages/material/action-filter/index',
      'pages/material/search/index',
      'pages/material/affix/index',
      'pages/material/back-top/index',
      'pages/material/button/index',
      'pages/material/carousel/index',
      'pages/material/date-picker/index',
      'pages/material/icon/index',
      'pages/material/live-player/index',
      'pages/material/loading/index',
      'pages/material/panel/index',
      'pages/material/postmark/index',
      'pages/material/select/index',
      'pages/material/selection-controls/index',
      'pages/material/tag/index',
      'pages/material/bottom-navigation/index',
      'pages/material/text-field/index',
      'pages/material/textarea/index',
      'pages/material/action-bar/index',
      'pages/material/upload/index',
      'pages/material/watermark/index',
      'pages/material/notice-bar/index',
      'pages/material/tabs/index',
      'pages/material/meter/index',
      'pages/material/star-vote/index',
      'pages/material/steps/index',
      'pages/material/switch/index',
      'pages/material/coupon/index',
      'pages/material/autocomplete/index',
      'pages/material/badge/index',
      'pages/material/nav-list/index',
      'pages/material/typography/index',
      'pages/material/count-down/index',
      'pages/material/pretty-number/index',
      'pages/material/list/index',
      'pages/material/filter/index',
      'pages/material/indexes/index',
      'pages/material/drawer/index',
      'pages/material/timeline/index',
      'pages/material/trends/index',
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black',
    },
  };

  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentCatchError() {}

  render() {
    return <Index />;
  }
}

Taro.render(<App />, document.getElementById('app'));
