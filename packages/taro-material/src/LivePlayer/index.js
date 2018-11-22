import Taro, { Component, LivePlayer, CoverView, CoverImage } from '@tarojs/taro';
import PropTypes from 'prop-types';
import { View } from '@tarojs/components';
import FullScreen from './images/fullscreen.png';
import Refresh from './images/refresh.png';
import FullScreenExit from './images/fullscreen_exit.png';
import ArrowUp from './images/arrow_drop_up.png';
import ArrowDown from './images/arrow_down.png';
import RoundPlayCircle from './images/round_play_circle2.png';
import RoundPauseCircle from './images/round_pause_circle.png';

import './LivePlayer.scss';
import theme from '../styles/theme';

class RMLivePlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      livePlayerId: props.livePlayerId || `live-player-${Date.now()}`,
      isFullScreen: false,
      show: true,
      qshow: false,
      src: props.src,
      loading: false,
      play: props.autoplay,
    };
  }
  livePlayerContext = null;
  componentDidMount() {
    const { livePlayerId } = this.state;
    this.livePlayerContext = Taro.createLivePlayerContext(livePlayerId, this.$scope);
  }
  handleScreenChange = e => {
    const { fullScreen } = e.detail;
    this.props.onFullScreenChange({ fullScreen });
    this.setState({
      isFullScreen: fullScreen,
    });
  };

  toggleScreen = isFullScreen => {
    this.props.onFullScreenChange({ fullScreen: isFullScreen });
    if (isFullScreen) {
      this.exitFullScreen();
    } else {
      this.requestFullScreen();
    }
  };

  requestFullScreen = () => {
    this.livePlayerContext.requestFullScreen({
      direction: -90,
      success: res => {
        this.setState({
          isFullScreen: true,
        });
      },
      fail: err => {
        console.log('requestFullScreen err', err);
      },
      complete: res => {
        console.log('finish', res);
      },
    });
  };

  exitFullScreen = () => {
    this.livePlayerContext.exitFullScreen({
      direction: 90,
      success: res => {
        console.log('exitFullScreen ok', res);
        this.setState({
          isFullScreen: false,
        });
      },
      fail: err => {
        console.log('exitFullScreen err', err);
      },
      complete: res => {
        console.log('finish', res);
      },
    });
  };

  handleRefresh = () => {
    const { src } = this.state;
    this.setState({
      src,
    });
  };

  handlePlayerClick = () => {
    this.setState({
      show: !this.state.show,
      qshow: false,
    });
  };

  handleStateChange = e => {
    this.props.onStateChange(e);
    const { code, message } = e.detail;
    const startCodes = [2002, 2007, 2008];
    const endCodes = [2003, 2004];
    if (startCodes.includes(code)) {
      this.setState({
        loading: true,
      });
    }
    if (endCodes.includes(code)) {
      this.setState({
        loading: false,
      });
    }
  };

  handleNetStatus = e => {
    this.props.onNetStatus(e);
  };

  handleError = e => {
    this.props.onError(e);
  };
  handleQulityClick = e => {
    this.setState(
      {
        qshow: !this.state.qshow,
      },
      () => {
        // this.livePlayerContext.play()
      },
    );
  };
  handleControlsClick = e => {
    e.stopPropagation();
  };
  handleListClick = (src, e) => {
    e.stopPropagation();
    this.setState({
      qshow: false,
      src,
    });
  };
  handlePlay = () => {
    this.setState(
      {
        play: true,
      },
      () => {
        this.livePlayerContext.play();
        this.props.onPlay();
      },
    );
  };
  handlePause = () => {
    this.setState(
      {
        play: false,
      },
      () => {
        this.livePlayerContext.pause();
        this.props.onPause();
      },
    );
  };
  togglePlay = () => {
    const { play } = this.state;
    if (play) {
      this.handlePause();
    } else {
      this.handlePlay();
    }
  };
  render() {
    const { play, livePlayerId, isFullScreen, show, qshow, src, loading } = this.state;

    const {
      mode,
      autoplay,
      muted,
      orientation,
      objectFit,
      minCache,
      maxCache,
      title,
      sources,
      refreshable,
      hasPlayBar,
    } = this.props;
    const qualityItem = sources.filter(item => item.src === src)[0];
    const qualityName = qualityItem && qualityItem.name;

    return (
      <View className="root">
        <LivePlayer
          onFullScreenChange={this.handleScreenChange}
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
          id={livePlayerId}
          className="player"
          onError={theme.handleError}
        >
          <CoverView onClick={this.handlePlayerClick} className="box">
            {!play && (
              <CoverImage className="play-icon" onClick={this.handlePlay} src={RoundPlayCircle} />
            )}
            {loading && <CoverView className="loading">加载中...</CoverView>}
            {show && (
              <CoverView onClick={this.handleControlsClick} className="controls">
                <CoverView className="left-box">
                  {hasPlayBar && (
                    <CoverImage
                      onClick={this.togglePlay}
                      className="image play-action"
                      src={play ? RoundPauseCircle : RoundPlayCircle}
                    />
                  )}
                  <CoverView className="title">{title}</CoverView>
                </CoverView>

                <CoverView className="actions">
                  {refreshable && (
                    <CoverView className="refresh action">
                      <CoverImage className="image" onClick={this.handleRefresh} src={Refresh} />
                    </CoverView>
                  )}
                  {isFullScreen &&
                    qualityName && (
                      <CoverView onClick={this.handleQulityClick} className="action quality">
                        <CoverView className="name">{qualityName}</CoverView>
                        <CoverImage className="arrow" src={qshow ? ArrowDown : ArrowUp} />
                      </CoverView>
                    )}
                  <CoverView className="screen action">
                    <CoverImage
                      className="image"
                      onClick={this.toggleScreen.bind(this, isFullScreen)}
                      src={isFullScreen ? FullScreenExit : FullScreen}
                    />
                  </CoverView>
                </CoverView>
              </CoverView>
            )}

            {qshow && (
              <CoverView className="options">
                {sources.map(item => (
                  <CoverView
                    onClick={theme.handleListClick.bind(this, item.src)}
                    className="option"
                    key={item.name}
                  >
                    {item.name}
                  </CoverView>
                ))}
              </CoverView>
            )}
          </CoverView>
        </LivePlayer>
      </View>
    );
  }
}

RMLivePlayer.defaultProps = {
  hasPlayBar: false,
  refreshable: false,
  /**
   * 名称
   */
  title: '',
  livePlayerId: '',
  /**
   * 音视频地址。目前仅支持 flv, rtmp 格式
   */
  src: '',

  sources: [],
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
  onError: () => {},
  onPlay: () => {},
  onPause: () => {},
};

RMLivePlayer.propTypes = {
  /**
   * 是否有暂停播放
   */
  hasPlayBar: PropTypes.bool,
  /**
   * 是否可刷新
   */
  refreshable: PropTypes.bool,
  /**
   * 名称
   */
  title: PropTypes.string,
  /**
   * live-player的id
   */
  livePlayerId: PropTypes.string,
  /**
   * 音视频地址。目前仅支持 flv, rtmp 格式
   */
  src: PropTypes.string.isRequired,
  sources: PropTypes.array,
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
  onError: PropTypes.func,
  onPlay: PropTypes.func,
  onPause: PropTypes.func,
};

export default RMLivePlayer;
