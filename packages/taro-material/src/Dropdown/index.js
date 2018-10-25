import Taro,{ Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import RMIcon from '../Icon'
import RMTypography from '../Typography'

import './Dropdown.scss'

export default class Dropdown extends Component {

  handleClick (option) {
    if (option.disabled) return
    this.props.onClick(option.value, ...arguments)
  }

  render () {
    const {
      customStyle,
      className,
      options,
      value,
      color,
    } = this.props

    return (
      <View
        className={
          classNames(
            'at-radio',
            className
          )
        }
        style={customStyle}
      >
        {
          options.map(option => {
            const active = value === option.value;
            return (
              <View
                key={option.value}
                onClick={this.handleClick.bind(this, option)}
                className={
                  classNames({
                    'at-radio__option': true,
                    'at-radio__option--disabled': option.disabled,
                    'at-radio__option--active': active,
                    [color]: true,
                  })
                }
              >
                <View className='at-radio__option_wrap'>
                  <View className='at-radio__option_container'>
                    <View className='at-radio__title'><RMTypography className='body1' color='inherit'>{option.label}</RMTypography></View>
                    <View
                      className={
                        classNames({
                          'at-radio__icon': true,
                          'at-radio__icon--checked': active
                        })
                      }
                    >
                      <RMIcon fontSize={20} color='inherit' block={true}>check</RMIcon>
                    </View>
                  </View>
                  {
                    option.desc
                      ? <View className='at-radio__desc'><RMTypography className='caption'>{option.desc}</RMTypography></View>
                      : null
                  }
                </View>
              </View>
            )
          })
        }
      </View>
    )
  }
}

Dropdown.defaultProps = {
  customStyle: '',
  className: '',
  value: '',
  options: [],
  onClick: () => { },
  color: 'default',
}

Dropdown.propTypes = {
  customStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string
  ]),
  className: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string
  ]),
  value: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.string,
  ]),
  options: PropTypes.array,
  onClick: PropTypes.func,
  color: PropTypes.oneOf(['default', 'inherit', 'primary', 'secondary', 'error', 'success', 'warning', 'progress']),
}
