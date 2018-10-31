import Taro, { Component } from '@tarojs/taro'
import { View, Button, Canvas } from '@tarojs/components'

import {
  RMSelect,
} from '../../taro-material'

import RMPage from '../../taro-material/Page'

import theme from '../../taro-material/styles/theme'
import './index.scss'


class Index extends RMPage {
  config = {
    navigationBarTitleText: 'Select',
  }
  state = {
    value: 2,
    data: [
      {
        label: '第1个选择项',
        value: 0
      },
      {
        label: '第2个选择项',
        value: 2
      },
      {
        label: '第3个选择项',
        value: 3
      },
      {
        label: '第4个选择项',
        value: 4
      }
    ]
  }
  componentWillMount() { }

  componentDidMount() { }

  componentDidShow() { }

  componentDidHide() { }

  handleChange=(value)=>{
    this.setState({
      value
    })
  }
  handelClose =()=>{
    console.log('close')
  }
  handleOpen=()=>{
    console.log('open')
  }
  render() {
    const { data, value } = this.state
    return (
      <View className='root'>
        <RMSelect 
          title={'请选择一项'}
          onOpen={this.handleOpen}
          onClose={this.handelClose}
          onChange={this.handleChange}
          data={data}
          value={value}
        />
      </View>
    )
  }
}

export default Index
