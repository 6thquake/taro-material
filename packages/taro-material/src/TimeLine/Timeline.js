import Taro, { Component } from '@tarojs/taro'
import { View, Button } from '@tarojs/components'

import RMTypography from '../material/Typography'

import Step from './Step'

import theme from '../styles/theme';

import './index.scss'

class Index extends Component {
  componentWillReceiveProps(nextProps) { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    const { data } = this.props
    return (
      <View className='root'>
        {
          data.map((item, index)=>{
            return (
              <Step tail={data.length - 1 !== index} key={item.id} data={item} />
            )
          })
        }
      </View>
    )
  }
}

Index.defaultProps = {
  data: [],
}

export default Index
