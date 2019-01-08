import Taro, { Component } from '@tarojs/taro';
import PropTypes from 'prop-types';
import { View } from '@tarojs/components';

import { isNumber } from '../utils/typeof';

import theme from '../styles/theme';

import './index.scss';

class Affix extends Component {
  state = {
    fixed: false,
  };
  mount = false;

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
      const info = Taro.getSystemInfoSync();
      const { windowWidth, windowHeight } = info;
      let { left, top, bottom, right, width, height } = rect;

      if (this.mount) {
        this.setState({
          width,
          height,
        });
      } else {
        right = -left - width + windowWidth;
        bottom = -top - height + windowHeight;

        this.setState({
          left,
          top,
          bottom,
          right,
          width,
          height,
        });
      }

      this.mount = true;
    });

    task.exec();

    this.interval = setInterval(() => {
      const { resize } = this.props;
      const { fixed } = this.state;
      if (fixed && resize) {
        task.exec();
      }
    }, 1000);
  }

  componentWillMount() {}

  componentWillUnmount() {
    this.interval && clearInterval(this.interval);
  }

  componentDidShow() {}

  componentDidHide() {}

  handlePageScroll(params) {
    const { offsetBottom, offsetTop } = this.props;
    const { left, top, bottom, right, width, height } = this.state;

    let _fixed = false;
    const _affix = {};
    const offset = Math.floor(height) !== height ? 1 : 0;

    if (isNumber(offsetTop)) {
      _fixed = top <= params.scrollTop + offsetTop;
      _affix.top = `${offsetTop - offset}px`;
    } else if (isNumber(offsetBottom)) {
      _fixed = bottom <= -params.scrollTop + offsetBottom;
      _affix.bottom = `${offsetBottom - offset}px`;
    }

    if (_fixed) {
      _affix.left = `${left}px`;
    }

    this.setState({
      fixed: _fixed,
      affix: _affix,
    });
  }

  ref = node => {
    this.affix = node;
  };

  render() {
    const { offsetBottom, offsetTop, target, onChange, customStyle } = this.props;
    const { fixed, left, top, bottom, right, width, height, affix = {} } = this.state;

    let style = null;

    if (fixed) {
      style = {
        height: `${height}px`,
        width: `${width}px`,
        zIndex: theme.zIndex.affix,
        ...customStyle,
        ...{
          position: 'fixed',
          ...affix,
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
        <View ref={this.ref} style={style}>
          {this.props.children}
        </View>
      </View>
    );
  }
}

Affix.propTypes = {
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

Affix.defaultProps = {
  offsetBottom: null,
  offsetTop: null,
  target: 'window',
  customStyle: {},
  onChange: () => {},
  onAddPageScroll: () => {},
  resize: false,
};

export default Affix;
