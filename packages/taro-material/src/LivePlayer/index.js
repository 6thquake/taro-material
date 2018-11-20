import Taro, { Component, LivePlayer, CoverView, CoverImage } from '@tarojs/taro'
import PropTypes from 'prop-types'
import { View, Icon } from '@tarojs/components'

import RMTypography from '../Typography'
import RMIcon from '../Icon'
import fullscreen from './images/fullscreen.png'
import refresh from './images/loop.png'
import fullscreenExit from './images/fullscreen_exit.png'

import './LivePlayer.scss'
import theme from '../styles/theme'

class RMLivePlayer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      livePlayerId: props.id || `live-player-${Date.now()}`,
    }
  }
  livePlayerContext = null;
  componentDidMount () {
    const { livePlayerId } = this.state
    this.livePlayerContext = Taro.createLivePlayerContext(livePlayerId, this)
    console.log('this.livePlayerContext', this.livePlayerContext)
  }

  requestFullScreen = () => {
    console.log('requestFullScreen', this.livePlayerContext.requestFullScreen)
    this.livePlayerContext.requestFullScreen({
      direction: -90,
      success: res => {
        console.log('requestFullScreen ok', res)
      },
      fail: err => {
        console.log('requestFullScreen err', err)
      },
      complete: res => {
        console.log('finish', res)
      },
    })
  };

  exitFullScreen = () => {
    this.livePlayerContext.exitFullScreen({
      direction: 90,
      success: res => {
        console.log('exitFullScreen ok', res)
      },
      fail: err => {
        console.log('exitFullScreen err', err)
      },
      complete: res => {
        console.log('finish', res)
      },
    })
  };

  handleRefresh = () => {
    console.log('refresh')
    this.livePlayerContext.resume({
      success: res => {
        console.log('resume res', res)
      },
      fail: err => {
        console.log('resume fail', err)
      },
      complete: res => {
        console.log('finish', res)
      },
    })
  };

  handlePlayerClick = () => {
    console.log('live player')
  };

  handleStateChange = e => {
    console.log('state', e)
  };

  handleNetStatus = e => {
    // console.log('status', e)
  };
  handleError = e => {
    console.log('live player error', e)
  };
  render () {
    const { livePlayerId } = this.state
    const { src, mode, autoplay, muted, orientation, objectFit, minCache, maxCache } = this.props
    return (
      <View className='root'>
        <LivePlayer
          onNetStatus={this.handleNetStatus}
          onStateChange={this.handleStateChange}
          autoplay={autoplay}
          src={src}
          mode={mode}
          muted={muted}
          orientation={orientation}
          objectFit={objectFit}
          minCache={minCache}
          maxCache={maxCache}
          onClick={this.handlePlayerClick}
          id={livePlayerId}
          className='player'
          onError={theme.handleError}
        >
          <CoverView className='controls'>
            <CoverView className='actions'>
              <CoverView className='refresh'>
                <CoverImage onClick={this.handleRefresh} src={refresh} />
              </CoverView>
              <CoverView className='screen'>
                <CoverImage onClick={this.requestFullScreen} src={fullscreen} />
              </CoverView>
              <CoverView className='screen'>
                <CoverImage onClick={this.exitFullScreen} src={fullscreenExit} />
              </CoverView>
            </CoverView>
          </CoverView>
        </LivePlayer>
      </View>
    )
  }
}

RMLivePlayer.defaultProps = {
  id: '',
  /**
   * 音视频地址。目前仅支持 flv, rtmp 格式
   */
  src: '',

  /**
   * live（直播），RTC（实时通话，该模式时延更低）
   */
  mode: 'live',

  /**
   * 自动播放
   */
  autoplay: false,

  /**
   * 是否静音
   */
  muted: false,

  /**
   * 画面方向，可选值有 vertical，horizontal
   */
  orientation: 'vertical',

  /**
   * 填充模式，可选值有 contain，fillCrop
   */
  objectFit: 'contain',

  /**
   * 最小缓冲区，单位s（RTC 模式推荐 0.2s）
   */
  minCache: 1,

  /**
   * 最大缓冲区，单位s（RTC 模式推荐 0.8s）
   */
  maxCache: 3,

  /**
   * 播放状态变化事件，detail = {code}
   */
  onStateChange: () => {},
  /**
   * 全屏变化事件，detail = {direction, fullScreen}
   */
  onFullScreenChange: () => {},
  /**
   * 网络状态通知，detail = {info}
   */
  onNetStatus: () => {},
  customStyle: PropTypes.object,
}

RMLivePlayer.propTypes = {
  /**
   * live-player的id
   */
  id: PropTypes.string,
  /**
   * 音视频地址。目前仅支持 flv, rtmp 格式
   */
  src: PropTypes.string.isRequired,

  /**
   * live（直播），RTC（实时通话，该模式时延更低）
   */
  mode: PropTypes.oneOf(['live', 'RTC']),

  /**
   * 自动播放
   */
  autoplay: PropTypes.bool,

  /**
   * 是否静音
   */
  muted: PropTypes.bool,

  /**
   * 画面方向，可选值有 vertical，horizontal
   */
  orientation: PropTypes.oneOf(['vertical', 'horizontal']),

  /**
   * 填充模式，可选值有 contain，fillCrop
   */
  objectFit: PropTypes.oneOf(['contain', 'fillCrop']),

  /**
   * 最小缓冲区，单位s（RTC 模式推荐 0.2s）
   */
  minCache: PropTypes.number,

  /**
   * 最大缓冲区，单位s（RTC 模式推荐 0.8s）
   */
  maxCache: PropTypes.number,

  /**
   * 播放状态变化事件，detail = {code}
   */
  onStateChange: PropTypes.func,
  /**
   * 全屏变化事件，detail = {direction, fullScreen}
   */
  onFullScreenChange: PropTypes.func,
  /**
   * 网络状态通知，detail = {info}
   */
  onNetStatus: PropTypes.func,
  customStyle: PropTypes.object,
}

export default RMLivePlayer
