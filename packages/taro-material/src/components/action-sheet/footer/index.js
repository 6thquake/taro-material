import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

import PropTypes from 'prop-types'
import classNames from 'classnames'
import { isFunction } from '../../../utils/typeof'

import AtComponent from '../../../common/component'

import './index.scss'

export default class AtActionSheetFooter extends AtComponent {
  handleClick = (...args) => {
    if (isFunction(this.props.onClick)) {
      this.props.onClick(...args)
    }
  }

  render () {
    const rootClass = classNames(
      'at-action-sheet-footer',
      this.props.className
    )

    return (
      <View onClick={this.handleClick} className={rootClass}>
        {this.props.children}
      </View>
    )
  }
}

AtActionSheetFooter.propTypes = {
  onClick: PropTypes.func
}
