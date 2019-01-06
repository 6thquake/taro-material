# Accordion 手风琴

---
可以折叠 / 展开的内容区域。

## 使用指南

Taro-UI 版本需要在 `v1.3.1` 以上，在 Taro 文件中引入组件

:::demo

```js
import { AtAccordion } from 'taro-ui'
```

:::

## 一般用法

说明

:::demo

```html
<AtAccordion
  onClick={this.onClick.bind(this)}
  title='标题一'
>
  <AtList hasBorder={false}>
    <AtListItem
      title='标题文字'
      arrow='right'
      thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
    />
    <AtListItem
      title='标题文字'
      note='描述信息'
      arrow='right'
      thumb='http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'
    />
    <AtListItem
      title='标题文字'
      note='描述信息'
      extraText='详细信息'
      arrow='right'
      thumb='http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png'
    />
  </AtList>
</AtAccordion>
```

:::

## 带图标

:::demo

```html
<AtAccordion title='标题三' icon={{ value: 'chevron-down', color: 'red', size: '15' }}>
  <AtList hasBorder={false}>
    <AtListItem
      title='标题文字'
      arrow='right'
      thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
    />
    <AtListItem
      title='标题文字'
      note='描述信息'
      arrow='right'
      thumb='http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'
    />
    <AtListItem
      title='标题文字'
      note='描述信息'
      extraText='详细信息'
      arrow='right'
      thumb='http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png'
    />
  </AtList>
</AtAccordion>
```

:::

## 参数

| 参数       | 说明                                   | 类型    | 可选值                                                              | 默认值   |
| ---------- | -------------------------------------- | ------- | ------------------------------------------------------------------- | -------- |
| open | 是否默认开启 | Boolean  | - | false |
| title | 标题 | String  | - | - |
| icon | 图标，仅支持 AtIcon 支持的类型，object 属性有 value color size  | object  | - | - |

## 事件

| 事件名称 | 说明          | 返回参数  |
|---------- |-------------- |---------- |
| onClick | 点击头部触发事件 | event  |
