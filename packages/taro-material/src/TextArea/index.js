import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import AtTextarea from '../components/textarea'

import './TextArea.scss'

class TextArea extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false
    }
  }

  handleChange(value){
    const { onChange } = this.props
    onChange(value)
  }
  handleClick(){
    this.setState({
      show: true
    })
  }
  handleBlur(){
    this.setState({
      show: false
    })
  }
  render() {
    const { show } = this.props
    const { value, placeholder, maxlength} = this.props
    let length = value? value.length : 0
    let countText = `${length}/${maxlength}`
    return (
      <View className='root'>
      {
        show?(
            <View className='textareaBox'>
              <AtTextarea
                value={value}
                onChange={this.handleChange.bind(this)}
                maxlength={maxlength}
                placeholder={placeholder}
                autoFocus={show}
                onBlur={this.handleBlur.bind(this)}
              />
            </View>
        ): (
              <View onClick={this.handleClick.bind(this)} className='fakeTextarea'>
                <View className='text'>
                  {value || <View className='placeholder'>{placeholder}</View>}
                </View>
                <View className='count'>{countText}</View>
              </View>
        )
      }
      </View>
    )
  }
}

TextArea.defaultProps = {
  value: '',
  onChange: ()=>{},
  maxlength: 200,
  placeholder: '请输入...',
}

export default TextArea
