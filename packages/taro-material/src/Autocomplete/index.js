import Taro, { Component } from '@tarojs/taro'
import { View, ScrollView } from '@tarojs/components'
import PropTypes from 'prop-types'

import RMDropdown from '../Dropdown'
import RMTextField from '../TextField'
import './index.scss'
import theme from '../styles/theme'

class Autocomplete extends Component {
  constructor (props) {
    super(props)
    this.state = {
      open: false,
    }
  }

  componentWillMount () {}

  handleClick = e => {
    this.props.onChange(e)
    this.setState({
      open: false,
    })
  };

  handleChange = e => {
    this.props.onFilterChange(e)
    this.setState({
      open: true,
    })
  };

  handleFocus = () => {
    this.props.onFocus()
    this.setState({
      open: true,
    })
  };

  render () {
    const { open } = this.state
    const {
      disabled,
      InputProps,
      options,
      value,
      editable,
      customStyle,
      scrollDropDownStyle,
    } = this.props
    const {
      startAdornment,
      endAdornment,
      required,
      name,
      title,
      placeholder,
      type,
      helperText,
      helperTextClass,
      helperTextStyle,
    } = InputProps
    return (
      <View className='root' customStyle={customStyle}>
        <View className='content'>
          <RMTextField
            name={name}
            title={title}
            type={type}
            placeholder={placeholder}
            value={InputProps.value}
            // onBlur={this.handleBlur}
            onChange={this.handleChange.bind(value)}
            startAdornment={startAdornment}
            endAdornment={endAdornment}
            editable={editable}
            required={required}
            helperText={helperText}
            helperTextClass={helperTextClass}
            disabled={disabled}
            helperTextStyle={helperTextStyle}
            onFocus={this.handleFocus}
          />
        </View>
        {open && options.length > 0 && (
          <ScrollView
            style={scrollDropDownStyle}
            className='dropdown'
            scrollY
            scrollWithAnimation
            scrollTop='0'
          >
            <RMDropdown
              options={options}
              value={value}
              onClick={this.handleClick}
              customStyle={{ boxShadow: theme.shadows[0] }}
            />
          </ScrollView>
        )}
      </View>
    )
  }
}

Autocomplete.defaultProps = {
  InputProps: {},
  onChange: () => {},
  onFilterChange: () => {},
  options: [],
  value: '',
  onClose: () => {},
  onOpen: () => {},
  onFocus: () => {},
  editable: true,
  disabled: false,
  scrollDropDownStyle: {},
  // NoDataProps: {
  //   title: '暂无数据',
  // },
}
Autocomplete.propTypes = {
  options: PropTypes.array,
  InputProps: PropTypes.object,
  onChange: PropTypes.func,
  onClose: PropTypes.func,
  onOpen: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  disabled: PropTypes.bool,
  editable: PropTypes.bool,
  scrollDropDownStyle: PropTypes.object,
}
export default Autocomplete
