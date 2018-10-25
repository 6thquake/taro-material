import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import PropTypes from 'prop-types'
import cloneDeep from 'lodash/cloneDeep'
import isEqual from 'lodash/isEqual'

import RMTag from '../Tag'
import RMTypography from '../Typography'
import RMButton from '../Button'

import theme from '../styles/theme'

import './Filters.scss'

class Filters extends Component {

  constructor(props){
    super(props)
    this.state = {
      options: cloneDeep(props.data),
    }
  }

  componentWillReceiveProps(props){
    if (!isEqual(this.options, props.data)){
      this.options = cloneDeep(props.data)
      this.setState({
        options: cloneDeep(props.data)
      })
    }
  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }
  
  handleClick(i, j){
    const { options } = this.state
    let option = options[i]
    let tag = option.data[j]
    tag.active = !tag.active
    this.setState({
      options
    }, ()=>{
      // onOk(selections)
    })
    
  }

  handleOkClick(){
    const { options } = this.state
    const { onOk } = this.props
    const selections = options.map((item) => {
      let { label, value, data } = item
      let activeTag = data.filter((d) => d.active)
      return {
        label,
        value,
        data: activeTag
      }
    }).filter((item) => item.data.length > 0)
    onOk(selections)
  }

  handleResetClick(){
    const { data } = this.props
    this.setState({
      options: cloneDeep(data)
    })
  }

  render() {
    const { options } = this.state

    let tagCustomStyle = {
      borderRadius: `0px`, //${theme.shape.borderRadius}
      padding: `0 ${theme.spacing.unit}px`,
      width: '88px',
    };

    let buttonCustomStyle = {
      width: '100%',
      boxShadow: 'none',
      borderRadius: '0px'
    };

    return (
      <View className='root'>
        <View className='filters'>
          {
            options.map((option, i) => {
              const { label ,value, data} = option
              return (
                <View key={value} className='option'>
                  <View className='title'>
                    <RMTypography className='body2'>
                      {label}
                    </RMTypography>
                  </View>
                  <View className='tags'>
                    {data.map((item, j)=> {
                      return (
                        <View onClick={this.handleClick.bind(this, i, j)} key={item.value} className='tag'>
                          <RMTag active={false} circle={false} block={true} 
                            color={item.active ? 'primary' : 'default'}  
                            size={'small'}
                            customStyle={tagCustomStyle}
                          >
                            {item.label}
                          </RMTag>
                        </View>
                      )
                    })}
                  </View>
                </View>
              )
            })
          }
        </View>
        <View className='actions'>
          <View className='button'>
            <RMButton
              color='default'
              variant='text'
              onClick={this.handleResetClick}
              size={'normal'}
              block={true}
              customStyle={buttonCustomStyle}
            >
              重置
            </RMButton>
          </View>
          <View className='button primary'>
            <RMButton
              color='primary'
              variant='contained'
              onClick={this.handleOkClick}
              size={'normal'}
              block={true}
              customStyle={buttonCustomStyle}
            >
              确定
            </RMButton>
          </View>
        </View>
      </View>
    )
  }
}

Filters.propTypes = {
  onOk: PropTypes.func,
  data: PropTypes.array,
}

Filters.defaultProps = {
  onOK: ()=>{},
  data: [],
  options: [],
}

export default Filters;
