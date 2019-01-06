# TabBar 标签栏

---
标签栏组件，主要用于底部导航，方便用户在不同功能模块之间进行快速切换，建议标签数量控制在3～5个，可以通过控制标签的 text ，dot 属性进行内容更新提示。

## 使用指南

在 Taro 文件中引入组件

:::demo

```js
import { AtTabBar } from 'taro-ui'
```

:::

## 一般用法

说明：

* 该组件为受控组件，开发者需要通过 onClick 事件来更新 current 值变化，current 与 onClick 函数必填

:::demo

```js
import Taro from '@tarojs/taro'
import { AtTabBar }  from 'taro-ui'
export default class Index extends Taro.Component {
  constructor () {
    super(...arguments)
    this.state = {
      current: 0
    }
  }
  handleClick (value) {
    this.setState({
      current: value
    })
  }
  render () {
    return (
      <AtTabBar
        tabList={[
          { title: '待办事项', text: 8 },
          { title: '拍照' },
          { title: '通讯录', dot: true }
        ]}
        onClick={this.handleClick.bind(this)}
        current={this.state.current}
      />
    )
  }
}
```

:::

## 带图标标签栏

:::demo

```html
<AtTabBar
  tabList={[
    { title: '待办事项', iconType: 'bullet-list', text: 'new' },
    { title: '拍照', iconType: 'camera' },
    { title: '文件夹', iconType: 'folder', text: '100', max: '99' }
  ]}
  onClick={this.handleClick.bind(this)}
  current={this.state.current}
/>
```

:::

## 自定义图标颜色、字体颜色、背景颜色

:::demo

```html
<AtTabBar
  backgroundColor='#ececec'
  color='#ea6bb8'
  tabList={[
    { title: '待办事项', iconType: 'bullet-list', text: 'new' },
    { title: '拍照', iconType: 'camera' },
    { title: '文件夹', iconType: 'folder', text: '100', max: '99' }
  ]}
  onClick={this.handleClick.bind(this)}
  current={this.state.current}
/>
```

:::

## 固定底部

:::demo

```html
<AtTabBar
  fixed
  tabList={[
    { title: '待办事项', iconType: 'bullet-list', text: 'new' },
    { title: '拍照', iconType: 'camera' },
    { title: '文件夹', iconType: 'folder', text: '100', max: '99' }
  ]}
  onClick={this.handleClick.bind(this)}
  current={this.state.current}
/>
```

:::

## 使用自定义图标

在 `AtTabBar` 使用自定义图标，需要对 `AtIcon` 进行拓展，具体请查看 [拓展图标库详细](/#/docs/icon)

:::demo

```html
<AtTabBar
  fixed
  tabList={[
    { title: '自定义图标', iconPrefixClass:'fa', iconType: 'clock', text: 'new' },
    { title: '拍照', iconType: 'camera' },
    { title: '文件夹', iconType: 'folder', text: '100', max: '99' }
  ]}
  onClick={this.handleClick.bind(this)}
  current={this.state.current}
/>
```

:::

## 参数

| 参数       | 说明                                   | 类型    | 可选值                                                              | 默认值   |
| ---------- | -------------------------------------- | ------- | ------------------------------------------------------------------- | -------- |
| current | 当前选中的标签索引值，从0计数  | Number  | - | 0 |
| color     | 未选中标签字体与图标颜色  | String | - | `#333` |
| selectedColor  | 选中标签字体与图标颜色  | String | - | `#6190E8` |
| fixed | 是否固定底部 | Boolean  | - | false |
| backgroundColor | 背景颜色 | String  | - | `#fff` |
| iconSize | 图标大小 | Number  | - | 24 |
| fontSize | 字体大小 | Number  | - | 14 |
| tabList | tab 列表, object 字段说明请看下表 | Array  | - | false |

## tabList object 字段详解

| 参数       | 说明                                   | 类型    | 可选值                                                              | 默认值   | 可选或必填
| ---------- | -------------------------------------- | ------- | ------------------------------------------------------------------- | -------- |-------- |
| title | 标题  | String  | - | 0 | 必填 |
| iconPrefixClass |  icon className 前缀，用于第三方字体图标库，比如想使用'fa fa-clock' 的图标，则 传入`iconPrefixClass='fa' iconType='clock'`,[拓展图标库详细](/#/docs/icon) | String | - | - | - |
| iconType | 未选中时展示的 icon 类型，可扩展第三方字体图标库，[拓展图标库详细](/#/docs/icon)  | String | - | - | 可选 |
| selectedIconType  | 选中时展示的 icon 类型，可扩展第三方字体图标库，[拓展图标库详细](/#/docs/icon)  | String | - | - |可选 |
| text | 右上角显示到文本，可以为数字或文字，如果有 dot，优先显示 dot | String  | - | - | 可选 |
| max | text 可显示的最大数字，超过则显示最大数字加'+'，如'99+' | Number  | - | - | 可选 |
| dot | 是否显示红点，优先级比 text 高 | Boolean  | - | false |可选 |


## 事件

| 事件名称 | 说明          | 返回参数  |
|---------- |-------------- |---------- |
| onClick | 点击触发事件，开发者需要通过 onClick 事件来更新 current 值变化，onClick 函数必填  | 选中 tab 列表索引值  |
