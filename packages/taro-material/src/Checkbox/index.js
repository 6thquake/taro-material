import Taro, { Component } from '@tarojs/taro'
import PropTypes from 'prop-types';
import { Checkbox, Label } from '@tarojs/components'
import classNames from 'classnames'

import RMIcon from '../Icon'
import RMTypography from '../Typography'

import theme from '../styles/theme';

import './index.scss'


class RMCheckbox extends Component {

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  handleChange (e) {
    const { value, checked, onChange } = this.props;
    onChange && onChange(!checked, value, e);
  }

  render () {
    const { value, color, checked, disabled, customStyle, className, icon, } = this.props;
    return (
        <View
          className={
            classNames({
              'at-selection': true,
              'at-selection--disabled': disabled,
              [color]: true
            })
          }
          style={customStyle}
        >
          <View className='at-selection__container' >
            <View 
              className={
                classNames({
                  'checkbox': true,
                  'checked': checked,
                })
              }
            >
              { checked && 
                <RMIcon fontSize='inherit' color='inherit' block={true} customStyle={{marginLeft: '-1px'}}>{icon}</RMIcon> 
              }
            </View>
            
          </View>
          {
            <RMTypography className='subheading' color='inherit' block={true}>{this.props.children}</RMTypography>
          }
          <Checkbox
            className='at-selection__selection'
            value={value}
            checked={checked}
            disabled={disabled}
            style={{opacity: 0}} 
            onClick={this.handleChange.bind(this)}
          ></Checkbox>
          <View className='at-selection__mask'></View>
        </View>
    )
  }
}

RMCheckbox.propTypes = {
  value: PropTypes.object,
  color: PropTypes.oneOf(['default', 'primary', 'secondary', 'error', 'success', 'warning', 'progress']),
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  customStyle: PropTypes.object,
  required: PropTypes.bool,
  icon: PropTypes.string,
}

RMCheckbox.defaultProps = {
  customStyle: {},
  value: null,
  color: 'primary',
  disabled: false,
  checked: false,
  icon: 'check',
  onChange: () => {}
}

export default RMCheckbox;