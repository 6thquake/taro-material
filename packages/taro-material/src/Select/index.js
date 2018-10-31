import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import PropTypes from 'prop-types'

import NoData from '../NoData'
import RMTextField from '../TextField'

import AtFloatLayout from '../components/float-layout'
import AtRadio from '../components/radio'


import './Select.scss'


class Select extends Component {
  state = {
    open: false,
  }

  handleInputClick = (e) => {
    const { open } = this.state
    const { onOpen } = this.props
    
    this.setState({
      open: true,
    }, ()=>{
      onOpen()
    })
    
  }

  handleChange = value => {
    const { onChange } = this.props
    this.setState({
      open: false,
    }, () => {
      onChange(value)
    })
  }

  handleClose = () => {
    const { onClose } = this.props
    this.setState({
      open: false
    }, () => {
      onClose()
    })
  }

  render () {
    const { open } = this.state
    const { InputProps, data, value, title: selectTitle} = this.props
    const { required, name, title, placeholder, editable, type, helperText, helperTextClass } = InputProps
    const option = data.filter((e) => e.value === value)[0]
    return (
      <View className='root'>
        <View onClick={this.handleInputClick}>
          <RMTextField
            className='custome-input'
            name={name}
            title={title}
            type={type}
            placeholder={placeholder}
            value={option.label}
            editable={false}
            disabled={false}
            readOnlyStyle='normal'
            required={required}
            helperText={helperText}
            helperTextClass={helperTextClass}
          />
        </View>
        <AtFloatLayout onClose={this.handleClose} isOpened={open} title={selectTitle}>
          <AtRadio
            options={data}
            value={value}
            onClick={this.handleChange}
          />
          {!(data && data.length > 0) && <NoData />}
        </AtFloatLayout>
      </View>
    )
  }
}

Select.defaultProps = {
  InputProps: {},
  onChange: () => { },
  data: [],
  value: '',
  onClose: () => { },
  onOpen: () => {},
}
Select.propTypes = {
  data: PropTypes.array
}

export default Select
