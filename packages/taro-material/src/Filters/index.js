import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import PropTypes from 'prop-types'

import RMTag from '../Tag'
import RMTypography from '../Typography'
import RMButton from '../Button'

import theme from '../styles/theme'

import './Filters.scss'

const cloneDeep = o => JSON.parse(JSON.stringify(o))

class Filters extends Component {
  handleClick (i, j) {
    const { data, onChange } = this.props
    const options = cloneDeep(data)
    const option = options[i]
    const tag = option.data[j]
    tag.active = !tag.active
    onChange(options)
  }

  handleOkClick(){
    const { data: options } = this.props
    const { onOk } = this.props

    const selections = options.map((item) => {
      let { label, value, data } = item
      let activeTag = data.filter((d) => d.active)
      return {
        label,
        value,
        data: cloneDeep(activeTag)
      }
    }).filter((item) => item.data.length > 0)
    onOk(selections)
  }

  handleResetClick(){
    const { onReset } = this.props
    onReset()
  }

  render () {
    const { data: options } = this.props
    const tagCustomStyle = {
      borderRadius: `0px`, // ${theme.shape.borderRadius}
      padding: `0 ${theme.spacing.unit}px`,
      width: '88px',
    }

    const buttonCustomStyle = {
      width: '100%',
      boxShadow: 'none',
      borderRadius: '0px'
    }

    return (
      <View className='root'>
        <View className='filters'>
          {
            options.map((option, i) => {
              const { label, value, data } = option
              return (
                <View key={value} className='option'>
                  <View className='title'>
                    <RMTypography className='body2'>
                      {label}
                    </RMTypography>
                  </View>
                  <View className='tags'>
                    {data.map((item, j)=> {
                      return (
                        <View onClick={this.handleClick.bind(this, i, j)} key={item.value} className='tag'>
                          <RMTag active={false} circle={false} block={true} 
                            color={item.active ? 'primary' : 'default'}  
                            size={'small'}
                            customStyle={tagCustomStyle}
                          >
                            {item.label}
                          </RMTag>
                        </View>
                      )
                    })}
                  </View>
                </View>
              )
            })
          }
        </View>
        <View className='actions'>
          <View className='button'>
            <RMButton
              color='default'
              variant='text'
              onClick={this.handleResetClick}
              size={'normal'}
              block={true}
              customStyle={buttonCustomStyle}
            >
              重置
            </RMButton>
          </View>
          <View className='button primary'>
            <RMButton
              color='primary'
              variant='contained'
              onClick={this.handleOkClick}
              size={'normal'}
              block={true}
              customStyle={buttonCustomStyle}
            >
              确定
            </RMButton>
          </View>
        </View>
      </View>
    )
  }
}

Filters.propTypes = {
  onOk: PropTypes.func,
  data: PropTypes.array,
  onChange: PropTypes.func,
  onReset: PropTypes.func,
}

Filters.defaultProps = {
  onOK: () => {},
  onChange: () => {},
  onReset: () => {},
  data: [],
}

export default Filters
