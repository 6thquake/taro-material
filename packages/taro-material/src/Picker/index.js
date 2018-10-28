import Taro, { Component } from '@tarojs/taro'
import { View, Picker } from '@tarojs/components'
import moment from 'moment'

import RMTextField from '../TextField'


class DatePicker extends Component {
  constructor(props){
    super(props)
    this.state = {
      value: props.value || moment().format(props.format),
    }
  }
  
  componentDidMount() {
    const { value } = this.state
    const { onChange } = this.props
    onChange(value)
  }

  componentWillReceiveProps(nextProps){
    const { value } = nextProps;
    const { onChange } = this.props;
    this.setState({
      value,
    }, ()=> {
      onChange(value)
    })
  }
  
  handelDateChange = e => {
    const { onChange } = this.props
    let value = e.detail.value
    this.setState({
      value,
    }, ()=> {
      onChange(value)
    })
  }
  
  render() {
    const { value } = this.state
    const { name, title, placeholder, disabled, start, end, fields, required} = this.props
    return (
      <View className='container'>
        <Picker mode='date' onChange={this.handelDateChange} value={value} start={start} end={end} disabled={disabled} fields={fields}>
          <View className='picker'>
            <RMTextField
              name={name}
              title={title}
              type={'date'}
              placeholder={placeholder}
              value={value}
              editable={false}
              disabled={disabled}
              readOnlyStyle='normal'
              required={required}
            />
          </View>
        </Picker>
      </View>
    )
  }
}

DatePicker.defaultProps = {
  title: '日期',
  name: 'date',
  placeholder: '请选择日期',
  fields: 'day', // year, month, day
  start: '',
  end: '',
  disabled: false,
  onChange: ()=>{},
  required: false,
  value: '',
  format:'YYYY-MM-DD',
}

export default DatePicker