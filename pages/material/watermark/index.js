import Taro, { Component } from '@tarojs/taro'
import { View, Button, Canvas } from '@tarojs/components'

import {
  RMWatermark,
} from '../../taro-material'

import RMPage from '../../taro-material/Page'

import theme from '../../taro-material/styles/theme'
import './index.scss'


let ctx = null;
class Index extends RMPage {
  config = {
    navigationBarTitleText: 'Watermark',
  }

  state = {
  }

  componentWillMount () {
    this.setState({
      id: `watermark-${new Date().getTime()}-${Math.floor(Math.random()*100)}`,
    })
  }

  componentDidMount () { 
    // setTimeout(()=>{
      ctx = Taro.createCanvasContext(this.state.id, this.$scope);
      this.draw();
    // }, 1000);
  }

  componentDidShow() { }

  componentDidHide () { }
  
  draw() {
    ctx.setStrokeStyle("#00ff00")
    ctx.setLineWidth(5)
    ctx.rect(0, 0, 200, 200)
    ctx.stroke()
    ctx.setStrokeStyle("#ff0000")
    ctx.setLineWidth(2)
    ctx.moveTo(160, 100)
    ctx.arc(100, 100, 60, 0, 2 * Math.PI, true)
    ctx.moveTo(140, 100)
    ctx.arc(100, 100, 40, 0, Math.PI, false)
    ctx.moveTo(85, 80)
    ctx.arc(80, 80, 5, 0, 2 * Math.PI, true)
    ctx.moveTo(125, 80)
    ctx.arc(120, 80, 5, 0, 2 * Math.PI, true)
    ctx.stroke()
    ctx.draw()
  }

  render () {
    let { id, value, helperText } = this.state;

    return (
      <View className='root'>
        <View className='watermark'>
          {id && <Canvas canvasId={`${id}`} class="canvas" />}
          <View className='parent' style={{position: 'relative'}}>
            <RMWatermark text='lico' container='parent'/>
          </View>
          <RMWatermark text='刘继超' container='window'/>
        </View>
      </View> 
    )
  }
}

export default Index
