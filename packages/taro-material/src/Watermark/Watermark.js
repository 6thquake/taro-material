import Taro, { Component } from '@tarojs/taro'
import { Canvas, Image } from '@tarojs/components'

import theme from '../styles/theme'

import './Watermark.scss'

let unit = 80;
class Watermark extends Component {
  
  state = {
    id: null,
    width: 300,
    height: 150,
  }

  componentWillMount() { }

  componentDidMount() { 
    const id = `watermark-${new Date().getTime()}-${Math.floor(Math.random()*100)}`
    const res = wx.getSystemInfoSync();
    this.setState({
      width: res.windowWidth, 
      height: res.windowHeight, 
      id,
    },()=>{
      //setTimeout(()=>{
      this.ctx = wx.createCanvasContext(id, this.$scope);
      this.draw();
      //},2000)
    })
  }

  componentDidShow() { }

  componentWillUnmount() { }

  componentDidUpdate(nextProps, nextState){
    // this.draw();
  }

  draw() {
    let ctx = this.ctx;

    if(!ctx){
      return;
    }
    
    let {text,type} = this.props;
    let {width,height,id} = this.state;

    let fontSize = theme.typography.fontSize;
    let fontColor = theme.palette.text.divider;
    
    ctx.font = `${fontSize * 1 / 1.81}px ${theme.typography.fontFamily}`;
    ctx.setFontSize(fontSize * 1 / 1.81);
    ctx.setFillStyle(fontColor);

    if(type === 'stretch'){
      let deg = 45 * Math.PI / 180;
      ctx.rotate(deg);

      let length = Math.ceil( Math.max(height, width) / Math.sin(deg) / Math.sin(deg) / unit );

      for (let j = 0; j <= length; j++) { 
        for (let i = 0; i <= length; i++) {
          ctx.beginPath();
          ctx.fillText(text, unit * i, unit * j);
          if(j > 0){
            ctx.fillText(text, unit * i, -unit * j);
          }
        }
      }
    } else {
      ctx.beginPath();
      ctx.fillText(text, width - theme.spacing.unit * 4 - fontSize / 2 * text.length, height - theme.spacing.unit * 4);
    }
    
    ctx.draw(false, ()=>{
      let {id} = this.state;
      wx.canvasToTempFilePath({
        canvasId: id,
        quality: 1,
        success: (res) => {
          this.setState({
            mark: res.tempFilePath,
          })
        }
      }, this.$scope);
    });
  }

  render() {
    const { id, height, mark } = this.state;
    const { customStyle, type, container } = this.props;

    const position = container === 'window' ? 'fixed': 'absolute';
    
    let positionStyle = {
      position: position,
    };

    let style = {
      ...customStyle,
      ...positionStyle,
    };

    let canvasStyle = {
      ...positionStyle,
    };

    if(mark) {
      canvasStyle.display = 'none'
    }

    return (
      <View className='root' style={style}>
        { /* mark && <View className={`mark ${type}`} style={{backgroundImage: `url(${mark})`}} /> */ }
        { mark && <Image className={`mark ${type}`} mode='scaleToFill' src={mark} style={positionStyle}/> }
        { id && <Canvas canvasId={id} className='canvas' style={canvasStyle} /> }
      </View>
    )
  }
}

Watermark.defaultProps = {
  text: '',
  type: 'stretch', // stretch, rightBottom,
  customStyle: null,
  container: 'window', // parent, window
}

export default Watermark;