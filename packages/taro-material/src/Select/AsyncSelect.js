import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import AtModal from '../components/modal'
import AtModalContent from '../components/modal/content'
import AtRadio from '../components/radio'

import RMTextField from '../TextField';

import './Select.scss'

class AsyncSelect extends Component {
  
  constructor(props){
    super(props)
    let option = this.initOption(props)
    this.state = {
      option,
      open: false,
    }
  }

  componentWillReceiveProps(nextProps){
    let option = this.initOption(nextProps)
    this.setState({
      option,
    })
  }
  
  componentDidMount(){
    const { option } = this.state
    const { onChange } = this.props
    onChange(option.value)
  }

  initOption = (props) => {
    const { value , options} = props
    let option = options.filter((item)=>{
      return item.value === value
    })[0]
    return option || options[0] 
  }

  handleClick = e => {
    this.setState({
      open: true
    }, ()=>{
      
    })
  }
  
  handleChange = value => {
    const { onChange, options } = this.props
    let option = options.filter( item => item.value === value)[0]
    this.setState({
      option,
      open: false,
    }, ()=> {
      onChange(value)
    })
  }

  render() {
    const { option, open } = this.state
    const { required, name, title, placeholder, helperText, type, options} = this.props
    return (
      <View className='root'>
        <View onClick={this.handleClick}>
          <RMTextField
            name={name}
            title={title}
            type={type}
            placeholder={placeholder}
            value={option.label}
            editable={false}
            disabled={false}
            readOnlyStyle='normal'
            required={required}
            helperText={helperText}
          />
        </View>
        <AtModal isOpened={open}>
          <AtModalContent>
            <AtRadio
              options={options}
              value={option.value}
              onClick={this.handleChange}
            />

          </AtModalContent>
        </AtModal>
      </View>
    )
  }
}

AsyncSelect.defaultProps = {
  title: '请选择',
  name: 'select',
  placeholder: '请选择一项',
  editable: false,
  type: 'text',
  onChange: () => { },
  options:[],
  value: '',
  required: false,
  helperText: ''
}

export default AsyncSelect