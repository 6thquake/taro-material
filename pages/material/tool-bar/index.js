import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import {
  RMToolBar,
} from '../../taro-material'

import RMPage from '../../taro-material/Page'

import theme from '../../taro-material/styles/theme'
import './index.scss'

const filterConfig = [
  {
    label: '特色1',
    value: 'D11',
    data: [
      {
        label: 'ASD',
        value: 'S12'
      },
      {
        label: 'ASD1',
        value: 'S121'
      },
      {
        label: 'ASD',
        value: 'S123'
      },
      {
        label: 'ASD1',
        value: 'S1214'
      },
      {
        label: 'ASD',
        value: 'S125'
      },
      {
        label: 'ASD1',
        value: 'S1216'
      }
    ]
  },
  {
    label: '特色2',
    value: 'D212',
    data: [
      {
        label: 'ASD',
        value: 'S12'
      },
      {
        label: 'ASD1',
        value: 'S121'
      },
      {
        label: 'ASD',
        value: 'S123'
      },
      {
        label: 'ASD1',
        value: 'S1214'
      },
      {
        label: 'ASD',
        value: 'S125'
      },
      {
        label: 'ASD1',
        value: 'S1216'
      }
    ]
  },
  {
    label: '特色3',
    value: 'D2123',
    data: [
      {
        label: 'ASD',
        value: 'S12'
      },
      {
        label: 'ASD1',
        value: 'S121'
      },
      {
        label: 'ASD',
        value: 'S123'
      },
      {
        label: 'ASD1',
        value: 'S1214'
      },
      {
        label: 'ASD',
        value: 'S125'
      },
      {
        label: 'ASD1',
        value: 'S1216'
      }
    ]
  }
]
const sorts = [
  {
    label: '评分最高',
    value: 'score',
    active: true,
  },
  {
    label: '评分最高2',
    value: 'score2'
  },
  {
    label: '评分最高3',
    value: 'score3'
  },
  {
    label: '评分最高4',
    value: 'score4',
    priority: 0,
    // active: true,
  },
  {
    label: '评分最高5',
    value: 'score5',
    priority: 0,
  },
]

class Index extends RMPage {
  config = {
    navigationBarTitleText: '测试',
  }

  state = {
    showDrawer: false,
  }

  componentWillMount () {
    this.setState({
      id: `watermark-${new Date().getTime()}-${Math.floor(Math.random()*100)}`,
    })
  }

  componentDidMount () { 
    
  }

  componentDidShow() { }

  componentDidHide () { }

  handleFilterChange(e){
    console.log('filters',e)
  }
  
  render () {
    return (
      <View className='root'>
        <RMToolBar onChange={this.handleFilterChange} sorts={sorts} filters={filterConfig} />
      </View> 
    )
  }
}

export default Index
