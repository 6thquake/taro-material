import Taro, {Component} from '@tarojs/taro'
import { View } from '@tarojs/components'

import PropTypes from 'prop-types'
import classNames from 'classnames'

import './List.scss'

export default class RMList extends Component {
  render () {
    const rootClass = classNames(
      'at-list',
      {
        'at-list--no-border': !this.props.hasBorder
      },
      this.props.className
    )

    return <View className={rootClass}>{this.props.children}</View>
  }
}

RMList.defaultProps = {
  hasBorder: true
}

RMList.propTypes = {
  hasBorder: PropTypes.bool
}
