import Taro from '@tarojs/taro'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { View, Text } from '@tarojs/components'

import AtComponent from '../common/component'
import RMIcon from '../Icon'
import RMTypography from '../Typography'

import './index.scss'

class NoticeBar extends AtComponent {
  initial = false;

  constructor () {
    super(...arguments)
    const animElemId = `J_${Math.ceil(Math.random() * 10e5).toString(36)}`
    this.state = {
      show: true,
      animElemId,
      dura: 0.015,
      isWEAPP: Taro.getEnv() === Taro.ENV_TYPE.WEAPP,
      isWEB: Taro.getEnv() === Taro.ENV_TYPE.WEB,
    }
  }

  onClose () {
    this.setState({
      show: false,
    })
    this.props.onClose && this.props.onClose(...arguments)
  }

  onGotoMore () {
    this.props.onGotoMore && this.props.onGotoMore(...arguments)
  }

  componentWillReceiveProps () {
    if (!this.timeout) {
      // this.interval && clearInterval(this.interval)
      // this.initAnimation()
    }
  }

  componentDidShow () {
    if (!this.initial) {
      return
    }

    if (!this.props.marquee) {
      return
    }
    this.initAnimation()
  }

  componentDidHide () {
    if (!this.initial) {
      return
    }

    this.interval && clearInterval(this.interval)
  }

  componentDidMount () {
    this.initial = true
    if (!this.props.marquee) {
      return
    }
    this.initAnimation()
  }

  componentWillUnmount () {
    this.interval && clearInterval(this.interval)
  }

  initAnimation () {
    const { vertical, infinite, pauseTime, duration } = this.props
    const { rows } = this.props
    let length = 0
    if (vertical) {
      length = rows * 18
    }

    this.timeout = setTimeout(() => {
      this.timeout = null
      if (this.state.isWEB) {
        // const elem = this.animElem // document.querySelector(`.${this.state.animElemId}`)
        // if (elem) {
        //   const width = vertical
        //     ? elem.getBoundingClientRect().height
        //     : elem.getBoundingClientRect().width
        // }
      } else if (this.state.isWEAPP) {
        // const query = Taro.createSelectorQuery().in(this.$scope)
        // query.select(`.${this.state.animElemId}`)
        let index = 0
        const resetAnimation = Taro.createAnimation({
          duration: 0,
          timingFunction: 'ease',
        })
        const animation = Taro.createAnimation({
          duration,
          timingFunction: 'ease',
        })

        const nodeRef = this.animElem.boundingClientRect(res => {
          if (!res) return
          const { width, height } = res

          console.log(`notice bar: width: ${width}, height: ${height}`)
          if (!width || !height) {
            return
          }

          if (vertical) {
            const y = -length * index
            const _h = -height + (infinite ? 0 : length) - 6
            if (!pauseTime || y <= _h) {
              resetAnimation.translateY(height).step()
              index = 0
            }
          } else {
            resetAnimation.translateX(0).step()
          }

          this.setState({ animationData: resetAnimation.export() })

          setTimeout(() => {
            if (vertical) {
              let y = 0
              if (pauseTime) {
                y = -length * index++
                const _h = -height + (infinite ? 0 : length) - 6
                if (y <= _h + length) {
                  setTimeout(() => {
                    animBody()
                  }, duration)
                }
                if (y <= _h) {
                  y = _h
                }
              } else {
                y = -height + (infinite ? 0 : length)
              }
              animation.translateY(y).step()
            } else {
              animation.translateX(-width + (infinite ? 0 : 100)).step()
            }
            this.setState({ animationData: animation.export() })
          }, 100)
        })

        const animBody = () => {
          nodeRef.exec()
        }
        animBody()

        if (infinite) {
          this.interval = setInterval(animBody, duration + 100 + pauseTime)
        }
      }
    }, 100)
  }

  ref = node => (this.animElem = node);

  render () {
    const {
      icon,
      iconColor,
      customStyle,
      marquee,
      vertical,
      color,
      rows,
      showMore,
      close,
      unread,
    } = this.props
    const height = rows * 18
    const { animationData } = this.state
    const rootClassName = ['at-noticebar']
    const _moreText = this.props.moreText
    const single = rows === 1

    // if (!single) showMore = false;
    // if (!_moreText) _moreText = '查看详情'

    const style = {}
    const contentStyle = {}
    const innerClassName = ['at-noticebar__content-inner']
    if (marquee) {
      // close = false
      // style['animation-duration'] = `${dura * 1000}s`
      // innerClassName.push(this.state.animElemId)

      if (vertical) {
        innerClassName.push('vertical')
      }
    }

    if (height) {
      contentStyle.height = `${height}px`
    }

    let _color = ''
    if (color && color.length >= 1) {
      _color = color.charAt(0).toUpperCase() + color.substring(1)
    }

    const classObject = {
      'at-noticebar--marquee': marquee,
      'at-noticebar--weapp': marquee && this.state.isWEAPP,
      'at-noticebar--more': !marquee && showMore,
      'at-noticebar--single': single || (marquee && !vertical), // ! marquee &&
      [`color${_color}`]: color !== 'inherit',
    }

    return (
      this.state.show && (
        <View
          className={classNames(rootClassName, classObject, this.props.className)}
          style={customStyle}
        >
          <View className='at-noticebar__content'>
            {close && (
              <View className='at-noticebar__close' onClick={this.onClose.bind(this)}>
                <RMIcon color='action' fontSize={24}>
                  close
                </RMIcon>
              </View>
            )}
            {icon && (
              <View className='at-noticebar__content-icon'>
                <RMIcon color={iconColor || 'inherit'} fontSize={24}>
                  {icon}
                </RMIcon>
              </View>
            )}
            <View className='at-noticebar__content-text' style={contentStyle}>
              <View
                animation={animationData}
                className={innerClassName}
                style={style}
                ref={this.ref}
              >
                <RMTypography className='body1' color='inherit' fontSize='inherit' block>
                  {this.props.children}
                </RMTypography>
              </View>
            </View>
            {showMore && (
              <View className='at-noticebar__more' onClick={this.onGotoMore.bind(this)}>
                {unread && <View className='unread' />}
                <Text className='text'>{_moreText}</Text>
                <View className='at-noticebar__more-icon'>
                  <RMIcon color='inherit' fontSize={24}>
                    chevron_right
                  </RMIcon>
                </View>
              </View>
            )}
          </View>
        </View>
      )
    )
  }
}

NoticeBar.propTypes = {
  close: PropTypes.bool, //  是否需要关闭按钮  Boolean - false
  marquee: PropTypes.bool, // 内容是否滚动（内容只能单行）  Boolean - false
  duration: PropTypes.number, // 内容滚动速度 （默认速度100px/秒）  Number  - 100
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
    'default'
  ]),
  showMore: PropTypes.bool,
  onClose: PropTypes.func,
  onGotoMore: PropTypes.func,
  infinite: PropTypes.bool,
  pauseTime: PropTypes.number,
  rows: PropTypes.number, //  内容是否单行  Boolean - false
  unread: PropTypes.bool,
}

NoticeBar.defaultProps = {
  close: false,
  marquee: false,
  moreText: '查看详情',
  moreUrl: '',
  showMore: false,
  icon: '',
  iconColor: '',
  customStyle: {},
  vertical: false,
  /**
   * enum: 'inherit', 'primary', 'secondary', 'action', 'error', 'disabled', 'success', 'warning', 'progress', 'default'
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: 'default',
  onClose: () => {},
  onGotoMore: () => {},
  infinite: true,
  pauseTime: 0,
  duration: 15000,
  rows: 0,
  unread: false,
}

export default NoticeBar
