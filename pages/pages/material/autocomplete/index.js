import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import { RMAutocomplete } from '../../../'

import RMPage from '../../../Page'

import theme from '../../../styles/theme'

const suggestions = [
  { label: 'Afghanistan' },
  { label: 'Aland Islands' },
  { label: 'Albania' },
  { label: 'Algeria' },
  { label: 'American Samoa' },
  { label: 'Andorra' },
  { label: 'Angola' },
  { label: 'Anguilla' },
  { label: 'Antarctica' },
  { label: 'Antigua and Barbuda' },
  { label: 'Argentina' },
  { label: 'Armenia' },
  { label: 'Aruba' },
  { label: 'Australia' },
  { label: 'Austria' },
  { label: 'Azerbaijan' },
  { label: 'Bahamas' },
  { label: 'Bahrain' },
  { label: 'Bangladesh' },
  { label: 'Barbados' },
  { label: 'Belarus' },
  { label: 'Belgium' },
  { label: 'Belize' },
  { label: 'Benin' },
  { label: 'Bermuda' },
  { label: 'Bhutan' },
  { label: 'Bolivia, Plurinational State of' },
  { label: 'Bonaire, Sint Eustatius and Saba' },
  { label: 'Bosnia and Herzegovina' },
  { label: 'Botswana' },
  { label: 'Bouvet Island' },
  { label: 'Brazil' },
  { label: 'British Indian Ocean Territory' },
  { label: 'Brunei Darussalam' }
].map(suggestion => ({
  value: suggestion.label,
  label: suggestion.label,
}))

class Index extends RMPage {
  config = {
    navigationBarTitleText: 'Back Top',
  };

  state = {
    options: suggestions,
    value: '',
    search: '',
  };

  componentWillMount () {}

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  handleChange = v => {
    const { options } = this.state
    const option = options.find(r => r.value === v)
    this.setState({
      value: v,
      search: option.label,
    })
  };

  handleFocus = () => {
    // this.fetch()
  };

  fetch = () => {
    const { search } = this.state
    const data = suggestions.filter(option => {
      const label = option.label.toLocaleLowerCase()
      const s = search.toLocaleLowerCase()
      return label.indexOf(s) !== -1
    })
    this.setState({
      options: data,
    })
  };

  handlFilterChange = e => {
    this.setState(
      {
        search: e,
        value: '',
      },
      () => {
        this.fetch()
      }
    )
  };
  render () {
    const { options, value, search } = this.state
    const helperTextStyle = { display: 'none' }
    const InputProps = {
      name: 'Auto Auto',
      title: 'GO GO',
      placeholder: 'enter',
      value: search,
      helperTextStyle,
    }
    const style = {
      margin: `${theme.spacing.unit * 2}px`,
      position: 'relative',
    }
    const scrollDropDownStyle = {
      height: '300px',
    }
    return (
      <View className='root' style={style}>
        <RMAutocomplete
          onChange={this.handleChange}
          onFilterChange={this.handlFilterChange}
          options={options}
          value={value}
          InputProps={InputProps}
          onFocus={this.handleFocus}
          scrollDropDownStyle={scrollDropDownStyle}
        />
      </View>
    )
  }
}

export default Index
