import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import classNames from 'classnames'
import RMIcon from '../Icon'
import RMTypography from '../Typography'
import RMDrawer from '../Drawer'
import RMFilters from '../Filters'

import AtRadio from '../components/radio'

import './Accordion.scss'

class Accordion extends Component {
  constructor(props){
    super(props)
    this.state={
      expanded: false,
      value: props.value || '',
      show: false,
    }
  }
  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }
  handleTitleClick(){
    this.setState({
      expanded: !this.state.expanded
    })
  }

  handleChange = value => {
    const { onChange } = this.props
    const { options } = this.props
    let option = options.filter(item => item.value === value)[0] || {}
    this.setState({
      value: value,
      expanded:false,
    }, () => {
      onChange(option)
    })
  }
  handleSiftingClick(){
    this.setState({
      show: true
    })
  }

  handleSiftingChange(e) {
    console.log('filters', e)
  }

  handleDrawerClose(){
    this.setState({
      show: false
    })
  }

  render() {
    const { expanded, value, show} = this.state
    const {options,} = this.props
    const option = options.filter((item)=>item.value === value)[0]
    console.log('optins', option)
    return (
      <View className='root'>
        <View className='header'>
          <View onClick={this.handleTitleClick} className='title'>
            <View className='label'>
              <RMTypography className='body2'>
                {option.label}
              </RMTypography>
            </View>
            <RMIcon block={true} fontSize={'inherit'}>{expanded ? 'keyboard_arrow_down' : 'keyboard_arrow_up'}</RMIcon>
          </View>
          {/* {this.props.children} */}

          <View onClick={this.handleSiftingClick} className='title'>
            <View className='label'>
              <RMTypography className='body2'>
                {'筛选'}
              </RMTypography>
            </View>
            <RMIcon block={true} fontSize={'inherit'}>{'sort'}</RMIcon>
          </View>
        </View>
        {
          expanded? (
            <View className='body'>
              <AtRadio
                options={options}
                value={value}
                onClick={this.handleChange}
              />
            </View>
          ): null
        }

        <RMDrawer
          onClose={this.handleDrawerClose}
          show={show}
          width={'300px'}
          right
        >
          <RMFilters onChange={this.handleSiftingChange}></RMFilters>
        </RMDrawer>
      </View>
    )
  }
}

Accordion.defaultProps = {
  onChange: ()=>{},
  value: 'score',
  options: []
}

export default Accordion;
