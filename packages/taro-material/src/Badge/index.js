import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import AtBadge from '../components/badge';

import './index.scss';

export default class Badge extends Component {
  ref = node => (this.refElem = node);

  componentDidMount() {
    const { variant } = this.props;
    if (variant === 'ribbon') {
      this.refElem
        .boundingClientRect(res => {
          const { width, height } = res;
          const w = Math.ceil(width);
          const h = Math.ceil(height);
          const top = Math.ceil((Math.sqrt(2) / 2) * h) + 2;
          const right = Math.ceil((1 - 1 / Math.sqrt(2)) * w + h / Math.sqrt(2)) + 2;

          this.setState({
            width: `${w}px`,
            height: `${h}px`,
            top: `-${top}px`,
            right: `-${right}px`,
            transform: 'rotate(45deg)',
            transformOrigin: 'left top',
            sutureStyle: height < 32 ? 'solid' : 'dashed',
            sutureWidth: height < 32 ? '0px' : '2px',
            suturePadding: height < 32 ? '2px 0px' : '4px 0px',
          });
        })
        .exec();
    }
  }

  handleClick() {
    const { onClick } = this.props;

    if (onClick) {
      onClick();
    }
  }

  render() {
    const { value, maxValue, variant, /* color, */ customStyle } = this.props;
    const {
      width,
      height,
      top,
      right,
      transform,
      transformOrigin,
      sutureStyle,
      sutureWidth,
      suturePadding,
    } = this.state;

    let style = {
      ...customStyle,
    };
    let contentStyle = null;
    let textStyle = null;

    if (variant === 'ribbon') {
      style = {
        ...style,
        ...{
          width,
          height,
          top,
          right,
          transform,
          transformOrigin,
        },
      };
      contentStyle = { padding: suturePadding };
      textStyle = { borderStyle: sutureStyle, borderWidth: sutureWidth };
    }

    return (
      <View
        className={classNames('rm-badge', this.props.className)}
        onClick={this.handleClick.bind(this)}
      >
        {variant === 'dot' && (
          <AtBadge value={value} maxValue={maxValue} dot customStyle={customStyle}>
            {this.props.children}
          </AtBadge>
        )}

        {value &&
          variant === 'text' && (
            <AtBadge value={value} maxValue={maxValue} dot={false} customStyle={customStyle}>
              {this.props.children}
            </AtBadge>
          )}

        {!value && variant === 'text' && <View>{this.props.children} </View>}

        {variant === 'mark' && (
          <View>
            {this.props.children}
            <View className="rm-badge-mark" style={style}>
              {value}
              {this.props.renderValue}
            </View>
          </View>
        )}

        {variant === 'ribbon' && (
          <View>
            {this.props.children}
            <View className="rm-badge-wrapper">
              <View className="rm-badge-ribbon" style={style} ref={this.ref}>
                <View className="rm-badge-ribbon-content" style={contentStyle}>
                  <View className="rm-badge-ribbon-content-text" style={textStyle}>
                    {value}
                    {this.props.renderValue}
                  </View>
                </View>
              </View>
            </View>
          </View>
        )}
      </View>
    );
  }
}

Badge.defaultProps = {
  value: '',
  maxValue: 99,
  variant: 'text',
  // color: 'error',
  customStyle: {},
  className: '',
  renderValue: null,
  onClick: () => {},
};

Badge.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  maxValue: PropTypes.number,
  variant: PropTypes.oneOf(['text', 'ribbon', 'mark', 'dot']),
  // color: PropTypes.oneOf([
  //   'default',
  //   'inherit',
  //   'primary',
  //   'secondary',
  //   'error',
  //   'success',
  //   'warning',
  //   'progress'
  // ]),
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  renderValue: PropTypes.element,
  onClick: PropTypes.func,
};
