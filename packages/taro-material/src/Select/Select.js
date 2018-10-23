import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import PropTypes from 'prop-types';
import { connect } from '@tarojs/redux'
import isEqual from 'lodash/isEqual'
import cloneDeep from 'lodash/cloneDeep'
import NoData from '../NoData'
import RMTypography from '../Typography'

import AtFloatLayout from '../components/float-layout'
import AtRadio from '../components/radio'

import RMTextField from '../TextField';

import './Select.scss'


class Select extends Component {
  state = {
    option: {},
    open: false,
  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentWillMount() {
    this.setOption(this.props)
  }

  componentDidHide() { }

  componentWillReceiveProps(nextProps) {
    this.setOption(nextProps)
  }

  show= ''

  setOption = (props) => {
    let { data} = props
    if (data && !isEqual(data, this.data)){
      let value = ''
      let option = {
        label: '',
        value: '',
      }
      if (data.length === 1){
        option = data[0]
        value = data[0].value
      }
      this.data = cloneDeep(data)
      this.setState({
        option,
      },()=>{
        this.handleChange(value)
      })
    }
  }

  handleInputClick=(e) =>{
    const { onClick} = this.props
    onClick(this)
    if(this.show === false){
      return 
    }
    this.setState({
      open: true,
    }, ()=>{ })
  }

  handleChange = value => {
    const { onChange } = this.props
    const { data } = this.props
    let option = data.filter(item => item.value === value)[0] || {}
    this.setState({
      option,
      open: false,
    }, () => {
      onChange(option)
    })
  }

  handleClose = () => {
    this.setState({
      open: false
    })
  }

  render() {
    const { open, option } = this.state
    const { InputProps, data , title : selectTitle} = this.props
    const { required, name, title, placeholder, editable, type, helperText, helperTextClass } = InputProps
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
            value={option.value}
            onClick={this.handleChange}
          />
          {!(data && data.length > 0) && <NoData/>}
        </AtFloatLayout>
      </View>
    )
  }
}

Select.defaultProps = {
  InputProps: {},
  onChange: () => { },
  data: [],
  onClick: ()=> { },
  helperText: '',
}
Select.propTypes = {
  data: PropTypes.array
}

export default Select
