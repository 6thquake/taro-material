import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

import PropTypes from 'prop-types'

import AtComponent from '../../../common/component'

import './index.scss'

export default class AtFlexItem extends AtComponent {
  render () {
    const rootClass = ['at-col']

    Object.keys(this.props).forEach((key)=>{
      let value = this.props[key];
      if (key === 'isAuto' && value) {
        return rootClass.push('at-col--auto')
      }
      if (key === 'isWrap' && value) {
        return rootClass.push('at-col--wrap')
      }
      if (key === 'size' && value) {
        rootClass.push(`at-col-${value}`)
      }
      rootClass.push(`at-col__${key}--${value}`)
    })

    return <View className={rootClass}>{this.props.children}</View>
  }
}

AtFlexItem.propTypes = {
  isAuto: PropTypes.bool,
  isWrap: PropTypes.bool,
  align: PropTypes.oneOf(['top', 'bottom', 'center']),
  size: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  offset: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
}
