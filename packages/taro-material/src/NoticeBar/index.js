import Taro, { Component } from '@tarojs/taro';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { View, Text } from '@tarojs/components';

import AtComponent from '../common/component';
// import AtIcon from '../components/icon/index'
import RMIcon from '../Icon';
import RMTypography from '../Typography';

import theme from '../styles/theme';

import './index.scss';

class NoticeBar extends AtComponent {
  constructor() {
    super(...arguments);
    const animElemId = `J_${Math.ceil(Math.random() * 10e5).toString(36)}`;
    this.state = {
      show: true,
      animElemId,
      dura: 0.015,
      isWEAPP: Taro.getEnv() === Taro.ENV_TYPE.WEAPP,
      isWEB: Taro.getEnv() === Taro.ENV_TYPE.WEB,
    };
  }

  onClose() {
    this.setState({
      show: false,
    });
    this.props.onClose && this.props.onClose(...arguments);
  }

  onGotoMore() {
    this.props.onGotoMore && this.props.onGotoMore(...arguments);
  }

  componentWillReceiveProps() {
    if (!this.timeout) {
      this.interval && clearInterval(this.interval);
      this.initAnimation();
    }
  }

  componentDidMount() {
    if (!this.props.marquee) return;
    this.initAnimation();
  }

  initAnimation() {
    const { vertical } = this.props;

    this.timeout = setTimeout(() => {
      this.timeout = null;
      if (this.state.isWEB) {
        const elem = this.animElem; // document.querySelector(`.${this.state.animElemId}`)
        if (!elem) return;
        const width = vertical
          ? elem.getBoundingClientRect().height
          : elem.getBoundingClientRect().width;
        const dura = width / +this.props.speed;
        this.setState({ dura });
      } else if (this.state.isWEAPP) {
        // const query = Taro.createSelectorQuery().in(this.$scope)
        // query.select(`.${this.state.animElemId}`)
        this.animElem
          .boundingClientRect(res => {
            if (!res) return;
            const { width, height } = res;
            const dura = (vertical ? height : width) / +this.props.speed;

            const resetAnimation = Taro.createAnimation({
              duration: 0,
              timingFunction: 'linear',
            });
            const animation = Taro.createAnimation({
              duration: dura * 1000,
              timingFunction: 'linear',
            });
            const animBody = () => {
              if (vertical) {
                resetAnimation.translateY(height).step();
              } else {
                resetAnimation.translateX(0).step();
              }

              this.setState({ dura, animationData: resetAnimation.export() });

              setTimeout(() => {
                if (vertical) {
                  animation.translateY(-height).step();
                } else {
                  animation.translateX(-width).step();
                }
                this.setState({ dura, animationData: animation.export() });
              }, 100);
            };
            animBody();
            this.interval = setInterval(animBody, dura * 1000 + 100);
          })
          .exec();
      }
    }, 100);
  }

  ref = node => (this.animElem = node);

  render() {
    const { single, icon, customStyle, marquee, vertical, color, height } = this.props;
    let { showMore, close } = this.props;
    const { dura, animationData } = this.state;
    const rootClassName = ['at-noticebar'];
    let _moreText = this.props.moreText;

    if (!single) showMore = false;

    if (!_moreText) _moreText = '查看详情';

    const style = {};
    const contentStyle = {};
    const innerClassName = ['at-noticebar__content-inner'];
    if (marquee) {
      close = false;
      // style['animation-duration'] = `${dura * 1000}s`
      // innerClassName.push(this.state.animElemId)

      if (vertical) {
        innerClassName.push('vertical');
        if (height) {
          contentStyle.height = `${height}px`;
        }
      }
    }

    let _color = '';
    if (color && color.length >= 1) {
      _color = color.charAt(0).toUpperCase() + color.substring(1);
    }

    const classObject = {
      'at-noticebar--marquee': marquee,
      'at-noticebar--weapp': marquee && this.state.isWEAPP,
      'at-noticebar--more': !marquee && showMore,
      'at-noticebar--single': single || (marquee && !vertical), // ! marquee &&
      [`color${_color}`]: color !== 'inherit',
    };

    return (
      this.state.show && (
        <View
          className={classNames(rootClassName, classObject, this.props.className)}
          style={customStyle}
        >
          <View className="at-noticebar__content">
            {close && (
              <View className="at-noticebar__close" onClick={this.onClose.bind(this)}>
                <RMIcon color="action" fontSize={24}>
                  close
                </RMIcon>
              </View>
            )}
            {icon && (
              <View className="at-noticebar__content-icon">
                <RMIcon color="inherit" fontSize={24}>
                  {icon}
                </RMIcon>
              </View>
            )}
            <View className="at-noticebar__content-text" style={contentStyle}>
              <View
                animation={animationData}
                className={innerClassName}
                style={style}
                ref={this.ref}
              >
                <RMTypography className="body1" color="inherit" fontSize="inherit" block>
                  {this.props.children}
                </RMTypography>
              </View>
            </View>
            {showMore && (
              <View className="at-noticebar__more" onClick={this.onGotoMore.bind(this)}>
                <Text className="text">{_moreText}</Text>
                <View className="at-noticebar__more-icon">
                  <RMIcon color="inherit" fontSize={24}>
                    chevron_right
                  </RMIcon>
                </View>
              </View>
            )}
          </View>
        </View>
      )
    );
  }
}

NoticeBar.propTypes = {
  close: PropTypes.bool, //  是否需要关闭按钮  Boolean - false
  single: PropTypes.bool, //  内容是否单行  Boolean - false
  marquee: PropTypes.bool, // 内容是否滚动（内容只能单行）  Boolean - false
  speed: PropTypes.number, // 内容滚动速度 （默认速度100px/秒）  Number  - 100
  moreText: PropTypes.string, //  “查看更多”链接文本  String  - 查看详情
  moreUrl: PropTypes.string, // “查看更多”链接地址  String  - -
  icon: PropTypes.string, // 内容前的icon图标  String  参考icon组件
  customStyle: PropTypes.object,
  vertical: PropTypes.bool, // 滚动方向是否为纵向
  color: PropTypes.oneOf([
    'inherit',
    'primary',
    'secondary',
    'action',
    'error',
    'disabled',
    'success',
    'warning',
    'progress',
    'default',
  ]),
  showMore: PropTypes.bool,
  onClose: PropTypes.func,
  onGotoMore: PropTypes.func,
};

NoticeBar.defaultProps = {
  close: false,
  single: false,
  marquee: false,
  speed: 100,
  moreText: '查看详情',
  moreUrl: '',
  showMore: false,
  icon: '',
  customStyle: {},
  vertical: false,
  /**
   * enum: 'inherit', 'primary', 'secondary', 'action', 'error', 'disabled', 'success', 'warning', 'progress', 'default'
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: 'default',
  onClose: () => {},
  onGotoMore: () => {},
  height: 0,
};

export default NoticeBar;
