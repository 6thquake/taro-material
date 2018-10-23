import Taro, { Component } from '@tarojs/taro'
import PropTypes from 'prop-types';
import { View } from '@tarojs/components'
import classNames from 'classnames'

import AtTag from '../components/tag'

import RMTypography from '../Typography'
import RMIcon from '../Icon'

import theme from '../styles/theme';

import './Tag.scss'

class RMTag extends Component {
  
  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }
  
  render() {
    const { color, size, name, circle, active, disabled, customStyle, onClick, block, prefix, suffix } = this.props;

    let style = null;
    switch(color){
      case 'progress': 
      case 'warning': 
      case 'success': 
      case 'error': 
      case 'secondary': 
      case 'primary':
        style = active ? {
          borderColor: theme.palette[color].main, 
          background: theme.palette[color].main,
          color: theme.palette[color].contrastText,
        } : {
          background: theme.palette.background.paper,
          borderColor: theme.palette[color].main, 
          color: theme.palette[color].main,
        } 
        break;
      case 'inherit':
        style = {
          background: 'inherit',
          borderColor: 'inherit',
          color: 'inherit',
        }
        break;
      case 'default': 
      default:
        style = active ? {
          background: theme.palette.grey[200],
          borderColor: theme.palette.grey[200],
          color: theme.palette.text.secondary,
        } : {
          background: theme.palette.background.paper,
          borderColor: theme.palette.grey[300],
          color: theme.palette.text.primary,
        }
        break;
    }

    let _customStyle = {
      ...style,
      ...customStyle,
      display: !!block ? 'block' : 'inline-block',
    }

    let small = size === 'small';
    let tagClasses = classNames({
      tag: true,
      small: small,
    });

    let margin = {
      marginTop: `0px`,
      marginBottom: `0px`,
      marginLeft: prefix ? `${theme.spacing.unit / (small ? 2 : 1)}px`: `0px`,
      marginRight: suffix ? `${theme.spacing.unit / (small ? 2 : 1)}px`: `0px`,
    };

    return (
        <AtTag 
          size={size} 
          name={name}
          circle={circle} 
          active={active} 
          disabled={disabled}
          type='primary' 
          customStyle={_customStyle} 
          onClick={onClick}
        >
          <View className={tagClasses}>
            <RMIcon fontSize='inherit' color='inherit' block={true}>{prefix}</RMIcon>
            <View style={margin}>
              <RMTypography block={true} className='body1' fontSize='inherit' color='inherit'>
                {this.props.children}
              </RMTypography>
            </View>
            <RMIcon fontSize='inherit' color='inherit' block={true}>{suffix}</RMIcon>
          </View>
        </AtTag>
    );
  }
}

RMTag.defaultProps = {
  color: 'default',
  size: 'normal',
  name: '',
  circle: false,
  active: false,
  disabled: false,
  customStyle: {},
  onClick: () => {},
  block: false,
  prefix: '',
  suffix: '',
}

RMTag.propTypes = {
  color: PropTypes.oneOf(['default', 'inherit', 'primary', 'secondary', 'error', 'success', 'warning', 'progress']),
  size: PropTypes.oneOf(['normal', 'small']),
  name: PropTypes.string,
  circle: PropTypes.bool,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  onClick: PropTypes.func,
  block: PropTypes.bool,
  prefix: PropTypes.string,
  suffix: PropTypes.string,
}

export default RMTag;
