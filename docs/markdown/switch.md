# Switch 开关组件

---
开关组件，在两个互斥对象进行选择

## 使用指南

在 Taro 文件中引入组件

:::demo

```js
import { AtForm, AtSwitch } from 'taro-ui'
```

:::

## 一般用法

说明：

* 该组件为非受控组件，开发者只能通过 checked 来初始化组件开关状态，后续开关状态开发者无法控制，切换开关时会触发 onChange 函数

:::demo

```js
import Taro from '@tarojs/taro'
import { AtForm, AtSwitch }  from 'taro-ui'
export default class Index extends Taro.Component {
  handleChange (value) {
    console.log(value)
  }
  render () {
    return (
      <AtForm>
        <AtSwitch title='开启中' checked onChange={this.handleChange.bind(this)} />
        <AtSwitch title='已禁止' disabled onChange={this.handleChange.bind(this)} />
        <AtSwitch border={false} title='已关闭' />
      </AtForm>
    )
  }
}

```

:::

## 参数

| 参数       | 说明                                   | 类型    | 可选值                                                              | 默认值   |
| ---------- | -------------------------------------- | ------- | ------------------------------------------------------------------- | -------- |
| title | 标签名 | String  | - | - |
| color | 背景颜色  | String  | - | `#6190e8` |
| checked     | 是否显示开启  | Boolean | - | false |
| disabled     | 是否禁止点击  | Boolean | - | false |
| border     | 是否显示下划线边框  | Boolean | - | true |

## 事件

| 事件名称 | 说明          | 返回参数  |
|---------- |-------------- |---------- |
| onChange | 输入框值改变时触发的事件 | 当前值 value  |
