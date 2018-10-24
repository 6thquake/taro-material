import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import AtList from '../list/index'
import AtListItem from '../list/item/index'
import AtComponent from '../../common/component'
import './index.scss'

export default class AtDrawer extends AtComponent {
  constructor () {
    super(...arguments)
    this.state = { animShow: false }
    if (this.props.show) this.animShow()
  }

  onItemClick (index, e) {
    this.props.onItemClick && this.props.onItemClick(index)
    this.animHide(e, index)
  }

  onHide () {
    this.setState({ show: false })
    this.props.onClose && this.props.onClose()
  }

  animHide () {
    this.setState({
      animShow: false,
    })
    setTimeout(() => {
      this.onHide(...arguments)
    }, 300)
  }

  animShow () {
    this.setState({ show: true })
    setTimeout(() => {
      this.setState({
        animShow: true,
      })
    }, 200)
  }

  onMaskClick () {
    this.animHide(...arguments)
  }

  componentWillReceiveProps (props) {
    const { show } = props
    if (show !== this.props.show) {
      if (show) this.animShow()
      else this.animHide(...arguments)
    }
  }

  render () {
    const {
      mask,
      width,
      right,
      items,
    } = this.props
    const {
      animShow,
      show,
    } = this.state
    const rootClassName = ['at-drawer']

    const maskStyle = {
      display: mask ? 'block' : 'none',
      opacity: animShow ? 1 : 0,
    }
    const listStyle = {
      width,
      transition: animShow ? 'all 225ms cubic-bezier(0, 0, 0.2, 1)' : 'all 195ms cubic-bezier(0.4, 0, 0.6, 1)',
    }

    const classObject = {
      'at-drawer--show': animShow,
      'at-drawer--right': right,
      'at-drawer--left': !right,
    }

    return (
      show && <View
        className={classNames(rootClassName, classObject, this.props.className)}
      >
        <View className='at-drawer__mask' style={maskStyle} onClick={this.onMaskClick.bind(this)}></View>

        <View className='at-drawer__content' style={listStyle}>
          <AtList>
            {
              items.map((name, index) =>
                <AtListItem
                  key={index}
                  data-index={index}
                  onClick={this.onItemClick.bind(this, index)}
                  title={name}
                  arrow='right'
                >
                </AtListItem>)
            }
          </AtList>
        </View>
      </View>
    )
  }
}

AtDrawer.defaultProps = {
  show: false,
  mask: true,
  width: '230px',
  right: false,
  items: [],
  onItemClick: () => {},
  onClose: () => {},
}

AtDrawer.propTypes = {
  show: PropTypes.bool,
  mask: PropTypes.bool,
  width: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.string),
  onItemClick: PropTypes.func,
  onClose: PropTypes.func,
}
