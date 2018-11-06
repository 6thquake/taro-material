import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import PropTypes from 'prop-types'

import RMIcon from '../Icon'
import RMTypography from '../Typography'
import RMDrawer from '../Drawer'
import RMFilters from '../Filters'
import RMDropdown from '../Dropdown'

import theme from '../styles/theme'

import './ToolBar.scss'

const cloneDeep = o => JSON.parse(JSON.stringify(o))
const isEqual = (array1 = [], array2 = []) => {
  if (array1.length !== array2.length) {
    return false
  }
  for (let i = 0; i < array1.length; i++) {
    if (!(array1[i].label === array2[i].label && array1[i].value === array2[i].value)) {
      return false
    } else if (Array.isArray(array1[i].data) && Array.isArray(array2[i].data)) {
      let r = isEqual(array1[i].data, array2[i].data)
      if (!r) {
        return false
      }
    }
  }
  return true
}

class ToolBar extends Component {
  constructor(props){
    super(props)
    let option = props.sorts.filter((item)=> item.priority !== 0 && item.active)[0] || props.sorts[0]
    let value = option ? option.value : ''
    this.state={
      filterData: cloneDeep(props.filters),
      expanded: false,
      value: value,
      show: false,
      sorts: props.sorts,
      selectedFilters: []
    }
  }

  refDrawer =(node)=> this.drawer = node

  componentWillReceiveProps(nextProps){
    if(!isEqual(this.state.filters, nextProps.filters)){
      this.setState({
        filterData: cloneDeep(nextProps.filters)
      })
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

  handleFilterChange(e) {
    this.setState({
      filterData: e
    })
  }

  handleFilterOk(e){
    this.drawer.animHide()
    this.setState({
      selectedFilters: e
    }, () => {
      this.onChange()
    })
  }

  handleFilterReset(){
    const { filters } = this.props
    this.setState({
      filterData: cloneDeep(filters)
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
      filters: this.state.selectedFilters,
    }
    onChange(data) 
  }

  render() {
    const { filterData, sorts, expanded, value, show, selectedFilters} = this.state
    const option = sorts.filter((item)=>item.value === value)[0]
    const normalItems = sorts.filter(item => item.priority !== 0)
    const multiLength = selectedFilters.reduce((r, next)=>{
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
          <RMFilters 
            data={filterData} 
            onOk={this.handleFilterOk}
            onReset={this.handleFilterReset}
            onChange={this.handleFilterChange}
          ></RMFilters>
        </RMDrawer>

      </View>
    )
  }
}

ToolBar.propTypes ={
  onChange: PropTypes.func,
  filters: PropTypes.array,
  sorts: PropTypes.array,
}

ToolBar.defaultProps = {
  onChange: ()=>{},
  filters: [],
  sorts: [],
}

export default ToolBar;
