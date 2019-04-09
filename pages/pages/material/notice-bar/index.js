import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';

import { RMNoticeBar, RMNotice } from '../../../';

import RMPage from '../../../Page';

import './index.scss';

class Index extends RMPage {
  config = {
    navigationBarTitleText: 'NoticeBar',
  };

  state = {
    data: [1, 2],
    show: true,
  };

  componentWillMount() {
    const { data } = this.state;
    this.interval = setInterval(() => {
      if (data.length > 10) {
        return;
      }
      data.push(data.length + 1);
      this.setState({ data });
    }, 3000);
  }

  componentDidMount() {}

  componentWillUnMount() {
    this.interval && clearInterval(this.interval);
  }

  componentDidShow() {}

  componentDidHide() {}

  handleClick(show) {
    this.setState({
      show,
    });
  }

  render() {
    const { data, show } = this.state;
    const style = show
      ? {}
      : {
          display: 'none',
        };

    return (
      <View className="root">
        <View className="notices">
          <View className="title">文字</View>
          <View className="notice">
            <RMNoticeBar rows={1}>
              <RMNotice rows={1}>单行文本 - 这是 NoticeBar 通告栏，结束。</RMNotice>
            </RMNoticeBar>
          </View>
          <View className="notice">
            <RMNoticeBar rows={2}>
              <RMNotice rows={2}>
                两行文本 - 这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是
                NoticeBar 通告栏，这是 NoticeBar 通告栏，结束。
              </RMNotice>
            </RMNoticeBar>
          </View>
          <View className="notice">
            <RMNoticeBar>
              <RMNotice>
                多行文本 - 这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是
                NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar
                通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，结束。
              </RMNotice>
            </RMNoticeBar>
          </View>

          <View className="title">跑马灯</View>
          <View className="notice">
            <RMNoticeBar marquee rows={1}>
              <RMNotice rows={1}>
                单行文本 - 这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar
                通告栏，结束。
              </RMNotice>
            </RMNoticeBar>
          </View>

          <View className="notice">
            <RMNoticeBar marquee rows={2}>
              <RMNotice rows={2}>
                多行文本 - 这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是
                NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar
                通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，结束。
              </RMNotice>
            </RMNoticeBar>
          </View>

          <View className="title">纵向滚动</View>
          <View className="notice">
            <RMNoticeBar marquee rows={1} vertical duration={2000}>
              <RMNotice rows={1}>
                单行文本 - 这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar
                通告栏，结束。
              </RMNotice>
            </RMNoticeBar>
          </View>

          <View className="notice">
            <RMNoticeBar marquee rows={2} vertical duration={2000}>
              <RMNotice rows={2}>
                多行文本 - 这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是
                NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar
                通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，结束。
              </RMNotice>
            </RMNoticeBar>
          </View>

          <View className="notice">
            <RMNoticeBar marquee rows={2} vertical duration={2000}>
              <RMNotice rows={2}>
                多行文本 - 这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是
                NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar
                通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，结束。
              </RMNotice>
            </RMNoticeBar>
          </View>

          <View className="title">带图标</View>
          <View className="notice">
            <RMNoticeBar icon="access_alarm">
              <RMNotice>
                单行文本 - 这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar
                通告栏，结束。
              </RMNotice>
            </RMNoticeBar>
          </View>
          <View className="notice">
            <RMNoticeBar icon="access_alarm">
              <RMNotice>
                多行文本 - 这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是
                NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar
                通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，结束。
              </RMNotice>
            </RMNoticeBar>
          </View>

          <View className="title">查看更多</View>
          <View className="notice">
            <RMNoticeBar rows={1} moreText="查看详情" showMore>
              <RMNotice rows={1}>
                单行文本 - 这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar
                通告栏，结束。
              </RMNotice>
            </RMNoticeBar>
          </View>
          <View className="notice">
            <RMNoticeBar icon="volume_up" marquee rows={1} moreText="查看详情" showMore>
              <RMNotice rows={1}>
                单行文本 - 这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar
                通告栏，结束。
              </RMNotice>
            </RMNoticeBar>
          </View>
          <View className="notice">
            <RMNoticeBar rows={2} moreText="查看" showMore>
              <RMNotice rows={2}>
                多行文本 - 这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是
                NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar
                通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，结束。
              </RMNotice>
            </RMNoticeBar>
          </View>
          <View className="notice">
            <RMNoticeBar icon="volume_up" marquee rows={2} vertical moreText="" showMore>
              <RMNotice rows={2}>
                多行文本 - 这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是
                NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar
                通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，结束。
              </RMNotice>
            </RMNoticeBar>
          </View>
          <View className="notice">
            <RMNoticeBar icon="volume_up" marquee vertical moreText="查看详情" showMore>
              <RMNotice>
                多行文本 - 这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是
                NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar
                通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，结束。
              </RMNotice>
            </RMNoticeBar>
          </View>

          <View className="title">unread</View>
          <View className="notice">
            <RMNoticeBar rows={1} moreText="查看详情" showMore unread>
              <RMNotice rows={1}>
                单行文本 - 这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar
                通告栏，结束。
              </RMNotice>
            </RMNoticeBar>
          </View>
          <View className="notice">
            <RMNoticeBar icon="volume_up" marquee rows={1} moreText="查看详情" showMore unread>
              <RMNotice rows={1}>
                单行文本 - 这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar
                通告栏，结束。
              </RMNotice>
            </RMNoticeBar>
          </View>
          <View className="notice">
            <RMNoticeBar rows={2} moreText="查看" showMore unread>
              <RMNotice rows={2}>
                多行文本 - 这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是
                NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar
                通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，结束。
              </RMNotice>
            </RMNoticeBar>
          </View>
          <View className="notice">
            <RMNoticeBar icon="volume_up" marquee rows={2} vertical moreText="" unread showMore>
              <RMNotice rows={2}>
                多行文本 - 这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是
                NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar
                通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，结束。
              </RMNotice>
            </RMNoticeBar>
          </View>
          <View className="notice">
            <RMNoticeBar icon="volume_up" marquee vertical moreText="查看详情" unread showMore>
              <RMNotice>
                多行文本 - 这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是
                NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar
                通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，结束。
              </RMNotice>
            </RMNoticeBar>
          </View>

          <View className="title">关闭按钮</View>
          <View className="notice">
            <RMNoticeBar rows={1} close>
              <RMNotice rows={1}>
                单行文本 - 这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar
                通告栏，结束。
              </RMNotice>
            </RMNoticeBar>
          </View>
          <View className="notice">
            <RMNoticeBar icon="volume_up" rows={1} close>
              <RMNotice rows={1}>
                单行文本 - 这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar
                通告栏，结束。
              </RMNotice>
            </RMNoticeBar>
          </View>
          <View className="notice">
            <RMNoticeBar icon="volume_up" marquee rows={1} close>
              <RMNotice rows={1}>
                单行文本 - 这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar
                通告栏，结束。
              </RMNotice>
            </RMNoticeBar>
          </View>
          <View className="notice">
            <RMNoticeBar icon="volume_up" marquee rows={2} close>
              <RMNotice rows={2}>
                多行文本 - 这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是
                NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar
                通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，结束。
              </RMNotice>
            </RMNoticeBar>
          </View>

          <View className="title">only once</View>
          <View className="notice">
            <RMNoticeBar icon="volume_up" marquee rows={1} close infinite={false}>
              <RMNotice rows={1}>
                单行文本 - 这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar
                通告栏，结束。
              </RMNotice>
            </RMNoticeBar>
          </View>
          <View className="notice">
            <RMNoticeBar icon="volume_up" marquee rows={2} close infinite={false}>
              <RMNotice rows={2}>
                多行文本 - 这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是
                NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar
                通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，结束。
              </RMNotice>
            </RMNoticeBar>
          </View>
          <View className="notice">
            <RMNoticeBar marquee rows={1} vertical infinite={false} duration={1000}>
              <RMNotice rows={1}>
                单行文本 - 这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar
                通告栏，结束。
              </RMNotice>
            </RMNoticeBar>
          </View>
          <View className="notice">
            <RMNoticeBar marquee rows={2} vertical infinite={false} duration={1000}>
              <RMNotice rows={2}>
                多行文本 - 这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是
                NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar
                通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，结束。
              </RMNotice>
            </RMNoticeBar>
          </View>

          <View className="title">pauseTime</View>
          <View className="notice">
            <RMNoticeBar marquee rows={1} vertical pauseTime={1000} duration={500}>
              <RMNotice rows={1}>
                1.单行文本 - 这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，结束。
              </RMNotice>
              <RMNotice rows={1}>
                2.单行文本 - 这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，结束。
              </RMNotice>
              <RMNotice rows={1}>
                3.单行文本 - 这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，结束。
              </RMNotice>
            </RMNoticeBar>
          </View>
          <View className="notice">
            <RMNoticeBar marquee rows={2} vertical pauseTime={1000} duration={500}>
              <RMNotice rows={2}>
                1.单行文本 - 这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar
                通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是
                NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，结束。
              </RMNotice>
              <RMNotice rows={2}>
                2.单行文本 - 这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar
                通告栏，结束。
              </RMNotice>
              <RMNotice rows={2}>
                3.单行文本 - 这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar
                通告栏，结束。
              </RMNotice>
            </RMNoticeBar>
          </View>

          <View className="title">dynamic</View>
          <View className="notice">
            <RMNoticeBar marquee rows={1} vertical infinite pauseTime={3000} duration={500}>
              {data.map((item, index) => (
                <RMNotice title={`标题${index}`} rows={1} key={item}>
                  单行文本 - 这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，结束。
                </RMNotice>
              ))}
            </RMNoticeBar>
          </View>
          <View className="notice">
            <RMNoticeBar marquee rows={2} vertical infinite pauseTime={3000} duration={500}>
              {data.map((item, index) => (
                <RMNotice title={`标题${index}`} rows={2} key={item}>
                  多行文本 - 这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar
                  通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是
                  NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，结束。
                </RMNotice>
              ))}
            </RMNoticeBar>
          </View>

          <View className="title">主题</View>
          <View className="notice">
            <RMNoticeBar
              icon="access_alarm"
              iconColor="secondary"
              rows={1}
              color="default"
              showMore
              unread
            >
              <RMNotice rows={1} color="default">
                单行文本 - 这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar
                通告栏，结束。
              </RMNotice>
            </RMNoticeBar>
          </View>
          <View className="notice">
            <RMNoticeBar icon="access_alarm" color="primary" showMore unread>
              <RMNotice color="primary">
                多行文本 - 这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是
                NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar
                通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，结束。
              </RMNotice>
            </RMNoticeBar>
          </View>
          <View className="notice">
            <RMNoticeBar
              marquee
              vertical
              rows={1}
              color="secondary"
              duration={3000}
              showMore
              unread
            >
              <RMNotice rows={1} color="secondary">
                单行文本 - 这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar
                通告栏，结束。
              </RMNotice>
            </RMNoticeBar>
          </View>
          <View className="notice">
            <RMNoticeBar marquee vertical color="error" duration={3000} showMore unread>
              <RMNotice color="error">
                多行文本 - 这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是
                NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar
                通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，结束。
              </RMNotice>
            </RMNoticeBar>
          </View>
          <View className="notice">
            <RMNoticeBar rows={1} color="success" showMore unread>
              <RMNotice rows={1} color="success">
                单行文本 - 这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar
                通告栏，结束。
              </RMNotice>
            </RMNoticeBar>
          </View>
          <View className="notice">
            <RMNoticeBar icon="volume_up" marquee rows={1} color="warning" showMore unread>
              <RMNotice rows={1} color="warning">
                单行文本 - 这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar
                通告栏，结束。
              </RMNotice>
            </RMNoticeBar>
          </View>
          <View className="notice">
            <RMNoticeBar icon="volume_up" marquee rows={1} color="action" showMore unread>
              <RMNotice rows={1} color="action">
                单行文本 - 这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar
                通告栏，结束。
              </RMNotice>
            </RMNoticeBar>
          </View>
          <View className="notice">
            <RMNoticeBar icon="volume_up" marquee rows={1} color="disabled" showMore unread>
              <RMNotice rows={1} color="disabled">
                单行文本 - 这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar
                通告栏，结束。
              </RMNotice>
            </RMNoticeBar>
          </View>
          <View className="notice">
            <RMNoticeBar icon="volume_up" marquee rows={1} color="progress" showMore unread>
              <RMNotice rows={1} color="progress">
                单行文本 - 这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar
                通告栏，结束。
              </RMNotice>
            </RMNoticeBar>
          </View>

          <View className="title">显示/隐藏</View>
          <View className="notice">
            <View style={style}>
              <RMNoticeBar marquee rows={2} vertical infinite pauseTime={1000} duration={500}>
                {data.map((item, index) => (
                  <RMNotice title={`标题${index}`} rows={2} key={item}>
                    多行文本 - 这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar
                    通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar
                    通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar
                    通告栏，结束。
                  </RMNotice>
                ))}
              </RMNoticeBar>
            </View>
            <View onClick={this.handleClick.bind(this, true)}>显示</View>
            <View onClick={this.handleClick.bind(this, false)}>隐藏</View>
          </View>
        </View>
      </View>
    );
  }
}

export default Index;
