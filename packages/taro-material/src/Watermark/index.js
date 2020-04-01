import Taro, { Component } from '@tarojs/taro';
import { View, Canvas, Image } from '@tarojs/components';
import PropTypes from 'prop-types';

import theme from '../styles/theme';

import './Watermark.scss';

const unit = 80;
class RMWatermark extends Component {
  state = {
    id: null,
    width: 300,
    height: 150,
  };

  componentWillMount() {}

  componentDidMount() {
    const id = `watermark-${new Date().getTime()}-${Math.floor(Math.random() * 100)}`;
    const res = Taro.getSystemInfoSync();
    this.setState(
      {
        width: res.windowWidth,
        height: res.windowHeight,
        id,
      },
      () => {
        // setTimeout(()=>{
        this.ctx = Taro.createCanvasContext(id, this.$scope);
        this.draw();
        // }, 2000)
      },
    );
  }

  componentDidShow() {}

  componentWillUnmount() {}

  componentDidUpdate(nextProps, nextState) {
    // this.draw();
  }

  draw() {
    const ctx = this.ctx;

    if (!ctx) {
      return;
    }

    const { text, type } = this.props;
    const { width, height } = this.state;

    const fontSize = theme.typography.fontSize;
    const fontColor = theme.palette.text.divider;

    ctx.font = `${(fontSize * 1) / 1.81}px ${theme.typography.fontFamily}`;
    ctx.setFontSize((fontSize * 1) / 1.81);
    ctx.setFillStyle(fontColor);

    if (type === 'stretch') {
      const deg = (45 * Math.PI) / 180;
      ctx.rotate(deg);

      const length = Math.ceil(Math.max(height, width) / Math.sin(deg) / Math.sin(deg) / unit);

      for (let j = 0; j <= length; j++) {
        for (let i = 0; i <= length; i++) {
          ctx.beginPath();
          ctx.fillText(text, unit * i, unit * j);
          if (j > 0) {
            ctx.fillText(text, unit * i, -unit * j);
          }
        }
      }
    } else {
      ctx.beginPath();
      ctx.fillText(
        text,
        width - theme.spacing.unit * 4 - (fontSize / 2) * text.length,
        height - theme.spacing.unit * 4,
      );
    }

    ctx.draw(false, () => {
      const { id } = this.state;
      Taro.canvasToTempFilePath(
        {
          canvasId: id,
          quality: 1,
          success: res => {
            this.setState({
              mark: res.tempFilePath,
            });
          },
        },
        this.$scope,
      );
    });
  }

  render() {
    const { id, /* height, */ mark } = this.state;
    const { customStyle, type, container, onClick } = this.props;

    const position = container === 'window' ? 'fixed' : 'absolute';

    const positionStyle = {
      position,
    };

    const style = {
      ...customStyle,
      ...positionStyle,
    };

    const canvasStyle = {
      ...positionStyle,
    };

    if (mark) {
      canvasStyle.display = 'none';
    }

    return (
      <View className="root" style={style} onClick={onClick}>
        {/* mark && <View className={`mark ${type}`} style={{backgroundImage: `url(${mark})`}} /> */}
        {mark && (
          <Image className={`mark ${type}`} mode="scaleToFill" src={mark} style={positionStyle} />
        )}
        {id && <Canvas canvasId={id} className="canvas" style={canvasStyle} />}
      </View>
    );
  }
}

RMWatermark.defaultProps = {
  text: '',
  type: 'stretch', // stretch, rightBottom,
  customStyle: {},
  container: 'window', // parent, window
  onClick: () => {},
};

RMWatermark.propTypes = {
  text: PropTypes.string,
  type: PropTypes.oneOf(['stretch', 'rightBottom']),
  customStyle: PropTypes.object,
  container: PropTypes.oneOf(['parent', 'window']),
  onClick: PropTypes.func,
};

export default RMWatermark;
