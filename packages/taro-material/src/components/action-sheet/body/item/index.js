import Taro from '@tarojs/taro'
import classNames from 'classnames'
import { View } from '@tarojs/components'

import PropTypes from 'prop-types'
import _isFunction from 'lodash/isFunction'

import AtComponent from '../../../../common/component'

import './index.scss'

export default class AtActionSheetItem extends AtComponent {
  handleClick = (...args) => {
    if (_isFunction(this.props.onClick)) {
      this.props.onClick(...args)
    }
  }

  render () {
    const rootClass = classNames('at-action-sheet-item', this.props.className)

    return (
      <View className={rootClass} onClick={this.handleClick}>
        {this.props.children}
      </View>
    )
  }
}

AtActionSheetItem.propTypes = {
  onClick: PropTypes.func
}
