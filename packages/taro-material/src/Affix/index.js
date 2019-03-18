import Taro, { Component } from '@tarojs/taro';
import PropTypes from 'prop-types';
import { View } from '@tarojs/components';

import { isNumber } from '../utils/typeof';

import theme from '../styles/theme';

import './index.scss';

class RMAffix extends Component {
  state = {
    fixed: false,
    position: {},
    width: 0,
    height: 0,
  };

  mount = false;

  position = {
    scrollLeft: 0,
    scrollTop: 0,
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
  };

  componentWillUpdate(nextProps, nextState) {
    const { onChange } = this.props;

    const { fixed } = this.state;
    const _fixed = nextState.fixed;

    if (fixed !== _fixed) {
      onChange && onChange(fixed);
    }
  }

  componentDidMount() {
    const { onAddPageScroll } = this.props;

    if (onAddPageScroll) {
      onAddPageScroll(this.handlePageScroll.bind(this));
    }

    const task = this.affix.boundingClientRect(rect => {
      const { left, top, /* bottom, right, */ width, height } = rect;
      const { resize } = this.props;
      const { fixed } = this.state;

      if (width !== 0 && height !== 0) {
        const info = Taro.getSystemInfoSync();
        const { windowWidth, windowHeight } = info;

        const { scrollLeft = 0, scrollTop = 0 } = this.position;

        if (!fixed) {
          this.position.left = left + scrollLeft;
          this.position.top = top + scrollTop;
          this.position.bottom = -top - scrollTop - height + windowHeight;
          this.position.right = -left - scrollLeft - width + windowWidth;
        }

        this.setState({
          width,
          height,
        });
      }

      if (resize) {
        this.interval = setTimeout(() => {
          task.exec();
        }, 1000);
      }

      this.mount = true;
    });

    Taro.createSelectorQuery()
      .selectViewport()
      .scrollOffset(res => {
        this.position.scrollTop = res.scrollTop || 0;
        this.position.scrollLeft = res.scrollLeft || 0;
        task.exec();
      })
      .exec();
  }

  componentWillMount() {}

  componentWillUnmount() {
    this.interval && clearTimeout(this.interval);
  }

  componentDidShow() {}

  componentDidHide() {}

  handlePageScroll(params) {
    const { scrollTop, scrollLeft } = params;

    this.position.scrollTop = scrollTop || 0;
    this.position.scrollLeft = scrollLeft || 0;

    if (this.mount) {
      const { offsetBottom, offsetTop } = this.props;
      const { /* width, */ height } = this.state;
      const { left, top, bottom /* right, */ } = this.position;

      let _fixed = false;
      const _position = {};
      const offset = Math.floor(height) !== height ? 1 : 0;

      if (isNumber(offsetTop)) {
        _fixed = top < params.scrollTop + offsetTop;
        _position.top = `${offsetTop - offset}px`;
      } else if (isNumber(offsetBottom)) {
        _fixed = bottom < -params.scrollTop + offsetBottom;
        _position.bottom = `${offsetBottom - offset}px`;
      }

      if (_fixed) {
        _position.left = `${left}px`;
      }

      this.setState({
        fixed: _fixed,
        position: _position,
      });
    }
  }

  ref = node => {
    this.affix = node;
  };

  render() {
    const { customStyle } = this.props;
    const { fixed, width, height, position = {} } = this.state;

    let style = null;

    if (fixed) {
      style = {
        height: `${height}px`,
        width: `${width}px`,
        zIndex: theme.zIndex.affix,
        ...customStyle,
        ...{
          position: 'fixed',
          ...position,
        },
      };
    } else {
      style = {
        ...customStyle,
      };
    }

    return (
      <View className="affix">
        {fixed && (
          <View
            style={{
              height: `${height}px`,
              width: `${width}px`,
            }}
          />
        )}
        <View style={style}>
          <View ref={this.ref}>{this.props.children}</View>
        </View>
      </View>
    );
  }
}

RMAffix.propTypes = {
  /**
   * 距离窗口底部达到指定偏移量后触发
   */
  offsetBottom: PropTypes.number,
  /**
   * 距离窗口顶部达到指定偏移量后触发
   */
  offsetTop: PropTypes.number,
  /**
   * delay of pictrue slide，unit second
   */
  target: PropTypes.string,
  /**
   * 固定状态改变时触发的回调函数
   */
  onChange: PropTypes.func,

  onAddPageScroll: PropTypes.func,

  customStyle: PropTypes.object,

  resize: PropTypes.bool,
};

RMAffix.defaultProps = {
  offsetBottom: null,
  offsetTop: null,
  target: 'window',
  customStyle: {},
  onChange: () => {},
  onAddPageScroll: () => {},
  resize: false,
};

export default RMAffix;
