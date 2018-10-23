import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import RMIcon from '../Icon'
import RMTypography from '../Typography'
import RMDrawer from '../Drawer'
import RMFilters from '../Filters'
import RMDropdown from '../Dropdown'

import theme from '../styles/theme'

import './ToolBar.scss'

class ToolBar extends Component {
  constructor(props){
    super(props)
    let option = props.sorts.filter((item)=> item.priority !== 0 && item.active)[0] || props.sorts[0]
    let value = option ? option.value : ''
    this.state={
      expanded: false,
      value: value,
      show: false,
      sorts: props.sorts,
      multi: []
    }
  }

  refDrawer =(node)=> this.drawer = node
  multi =[]
  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  handleTitleClick(){
    this.setState({
      expanded: !this.state.expanded
    })
  }

  handleChange = value => {
    const { sorts } = this.props
    sorts.filter(item => {
      if (item.value === value){
        item.active = true
      }else{
        item.active = false
      }
      return item.value === value
    })[0] || {}

    this.setState({
      value: value,
      expanded:false,
    }, () => {
      this.onChange()
    })
  }

  handleSiftingClick(){
    this.setState({
      show: true,
      expanded: false,
    })
  }

  handleSiftingChange(e) {
    // this.state.multi = e
    this.drawer.animHide()
    this.setState({
      multi: e
    }, ()=>{
      this.onChange()    
    })
  }

  handleDrawerClose(){
    this.setState({
      show: false
    })
  }

  handlePriorities(index){
    let { sorts } = this.props
    sorts.map((item, i)=>{
      if(i === index){
        item.active = true
      }else{
        item.active = false
      }
    })
    this.setState({
      sorts,
      expanded:false,
    }, ()=>{
      this.onChange()
    })
    
  }

  onChange(){
    const { onChange, sorts } = this.props
    const data = {
      sort: sorts.filter(item => item.active)[0],
      filters: this.state.multi,
    }
    onChange(data) 
  }

  render() {
    const { filters } = this.props
    const { sorts, expanded, value, show, multi} = this.state
    const option = sorts.filter((item)=>item.value === value)[0]
    const normalItems = sorts.filter(item => item.priority !== 0)
    const multiLength = multi.reduce((r, next)=>{
      return r + next.data.length
    }, 0)

    return (
      <View className='root'>
        <View className='header'>
          <View onClick={this.handleTitleClick} className='title'>
            <View className='label'>
              <RMTypography color={option.active ? theme.palette.primary.main : 'default'} className='body2'>
                {option.label}
              </RMTypography>
            </View>
            <RMIcon color={option.active ? 'primary' : 'inherit'} block={true} fontSize={'inherit'}>{expanded ? 'keyboard_arrow_down' : 'keyboard_arrow_up'}</RMIcon>
          </View>
          
          {
            sorts.map((item, index)=>{
              let color = item.active ? theme.palette.primary.main : 'default'
              return item.priority === 0? (
                <View 
                  key={item.value} 
                  className='priorities' 
                  onClick={this.handlePriorities.bind(this, index)}
                >
                  <RMTypography color={color} className='body2'>
                    {item.label}
                  </RMTypography>
                </View>
              ): null
            })
          }
          <View onClick={this.handleSiftingClick} className='title'>
            <View className='label'>
              <RMTypography color={multiLength > 0? theme.palette.primary.main : 'default'} className='body2'>
                筛选{multiLength ?`(${multiLength})`: ''}
              </RMTypography>
            </View>
            <RMIcon color={multiLength > 0? 'primary': ''} block={true} fontSize={'inherit'}>{'filter_list'}</RMIcon>
            
            {/* <RMTag active={true} circle={true} color='default' size='small'>5</RMTag> */}
          </View>
        </View>
        {
          expanded && 
          <RMDropdown
            options={normalItems}
            value={value}
            onClick={this.handleChange}
          />
        }
        <RMDrawer
          ref={this.refDrawer}
          onClose={this.handleDrawerClose}
          show={show}
          width={320}
          right
        >
          <RMFilters data={filters} onOk={this.handleSiftingChange}></RMFilters>
        </RMDrawer>

      </View>
    )
  }
}

ToolBar.propTypes ={
  onChange: PropTypes.func,
  data: PropTypes.array,
  sorts: PropTypes.array,
}

ToolBar.defaultProps = {
  onChange: ()=>{},
  filters: [],
  sorts: [],
}

export default ToolBar;
