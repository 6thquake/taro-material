import Taro from '@tarojs/taro';
import classNames from 'classnames';
import { View } from '@tarojs/components';
import { RMDrawer, RMButton, RMIcon, RMBadge } from '../../../';
import DocsHeader from '../../components/doc-header';
import './index.scss';

export default class DrawerPage extends Taro.Component {
  config = {
    navigationBarTitleText: 'Taro Material',
  };

  constructor() {
    super(...arguments);
    this.state = {
      leftDrawerShow: false,
      rightDrawerShow: false,

      leftPushDrawerShow: false,
      rightPushDrawerShow: false,

      leftPushDrawerShowAlignTop: false,
      leftPushDrawerShowAlignMiddle: false,
      leftPushDrawerShowAlignBottom: false,

      childrenDrawerShow: false,

      childrenItem: [
        { name: 'A', children: [{ name: '首页' }] },
        { name: 'B', children: [{ name: '可自定义结构' }, { name: '或自定义样式' }] },
        { name: 'C', children: [{ name: '消息' }, { name: '个人' }] },
      ],
      icons: ['home', 'message', 'message', 'message', 'user'],
    };
  }

  leftDrawerClick() {
    this.setState({
      leftDrawerShow: !this.state.leftDrawerShow,
    });
  }

  rightDrawerClick() {
    this.setState({
      rightDrawerShow: !this.state.rightDrawerShow,
    });
  }

  leftPushDrawerClick() {
    const animation = Taro.createAnimation({ duration: 384 });
    animation.translateX(320).step();

    this.setState({
      animationData: animation.export(),
      leftPushDrawerShow: !this.state.leftPushDrawerShow,
    });
  }

  rightPushDrawerClick() {
    const animation = Taro.createAnimation({ duration: 384 });
    animation.translateX(-320).step();

    this.setState({
      rightPushDrawerShow: !this.state.rightPushDrawerShow,
    });
  }

  leftPushDrawerClickAlignTop() {
    const animation = Taro.createAnimation({ duration: 384 });
    animation.translateX(320).step();

    this.setState({
      animationData: animation.export(),
      leftPushDrawerShowAlignTop: !this.state.leftPushDrawerShowAlignTop,
    });
  }

  leftPushDrawerClickAlignMiddle() {
    const animation = Taro.createAnimation({ duration: 384 });
    animation.translateX(320).step();

    this.setState({
      animationData: animation.export(),
      leftPushDrawerShowAlignMiddle: !this.state.leftPushDrawerShowAlignMiddle,
    });
  }

  leftPushDrawerClickAlignBottom() {
    const animation = Taro.createAnimation({ duration: 384 });
    animation.translateX(320).step();

    this.setState({
      animationData: animation.export(),
      leftPushDrawerShowAlignBottom: !this.state.leftPushDrawerShowAlignBottom,
    });
  }

  childrenDrawerClick() {
    this.setState({
      childrenDrawerShow: !this.state.childrenDrawerShow,
    });
  }

  onItemClick(item) {
    const ENV = Taro.getEnv();
    const content = `你点击了 ${item.name}`;
    if (ENV !== 'WEB') content && Taro.showModal({ content, showCancel: false });
    else content && alert(content);
  }

  onClose() {
    const animation = Taro.createAnimation({ duration: 56 });
    animation.translateX(0).step();

    this.setState({
      leftDrawerShow: false,
      rightDrawerShow: false,

      leftPushDrawerShow: false,
      rightPushDrawerShow: false,

      leftPushDrawerShowAlignTop: false,
      leftPushDrawerShowAlignMiddle: false,
      leftPushDrawerShowAlignBottom: false,

      childrenDrawerShow: false,

      animationData: animation.export(),
    });
  }

  render() {
    const { icons, animationData, childrenItem } = this.state;
    return (
      <View className="page">
        <View animation={animationData}>
          <DocsHeader title="Drawer 抽屉" />

          <View className="doc-body">
            <View className="panel">
              <View className="panel__title">左边滑出</View>
              <View className="panel__content no-padding">
                <View className="example">
                  <RMButton variant="contained" onClick={this.leftDrawerClick.bind(this)}>
                    左边滑出
                  </RMButton>
                  <RMDrawer
                    show={this.state.leftDrawerShow}
                    mask
                    onItemClick={this.onItemClick.bind(this)}
                    onClose={this.onClose.bind(this)}
                    items={childrenItem}
                    width={320}
                  />
                </View>
              </View>
            </View>

            <View className="panel">
              <View className="panel__title">右边滑出</View>
              <View className="panel__content no-padding">
                <View className="example">
                  <RMButton variant="contained" onClick={this.rightDrawerClick.bind(this)}>
                    右边滑出
                  </RMButton>
                  <RMDrawer
                    show={this.state.rightDrawerShow}
                    right
                    mask
                    onItemClick={this.onItemClick.bind(this)}
                    onClose={this.onClose.bind(this)}
                    items={childrenItem}
                    width={320}
                  />
                </View>
              </View>
            </View>

            <View className="panel">
              <View className="panel__title">左边推出</View>
              <View className="panel__content no-padding">
                <View className="example">
                  <RMButton variant="contained" onClick={this.leftPushDrawerClick.bind(this)}>
                    左边推出
                  </RMButton>
                </View>
              </View>
            </View>

            <View className="panel">
              <View className="panel__title">右边推出</View>
              <View className="panel__content no-padding">
                <View className="example">
                  <RMButton variant="contained" onClick={this.rightPushDrawerClick.bind(this)}>
                    右边推出
                  </RMButton>
                </View>
              </View>
            </View>

            <View className="panel">
              <View className="panel__title">itemsAlign: top</View>
              <View className="panel__content no-padding">
                <View className="example">
                  <RMButton
                    variant="contained"
                    onClick={this.leftPushDrawerClickAlignTop.bind(this)}
                  >
                    itemsAlign: top
                  </RMButton>
                </View>
              </View>
            </View>

            <View className="panel">
              <View className="panel__title">itemsAlign: middle</View>
              <View className="panel__content no-padding">
                <View className="example">
                  <RMButton
                    variant="contained"
                    onClick={this.leftPushDrawerClickAlignMiddle.bind(this)}
                  >
                    itemsAlign: middle
                  </RMButton>
                </View>
              </View>
            </View>

            <View className="panel">
              <View className="panel__title">itemsAlign: bottom</View>
              <View className="panel__content no-padding">
                <View className="example">
                  <RMButton
                    variant="contained"
                    onClick={this.leftPushDrawerClickAlignBottom.bind(this)}
                  >
                    itemsAlign: bottom
                  </RMButton>
                </View>
              </View>
            </View>

            <View className="panel">
              <View className="panel__title">自定义内容</View>
              <View className="panel__content no-padding">
                <View className="example">
                  <RMButton variant="contained" onClick={this.childrenDrawerClick.bind(this)}>
                    显示 Drawer
                  </RMButton>
                  <RMDrawer
                    show={this.state.childrenDrawerShow}
                    mask
                    onItemClick={this.onItemClick.bind(this)}
                    onClose={this.onClose.bind(this)}
                    itemsAlign="bottom"
                    width={320}
                  >
                    {this.state.childrenItem.map((group, key) => (
                      <View key={group.name} style={{ width: '100%' }}>
                        <View>{group.name}</View>
                        <View>
                          {group.children.map((item, index) => (
                            <View
                              className={classNames('drawer-item', {
                                'drawer-item--sub': index !== 0,
                              })}
                              onClick={this.onItemClick.bind(this, index)}
                              key={item.name}
                            >
                              {item.name}
                              {index === 0 &&
                                icons[index] && <RMIcon fontSize={24}>{icons[index]}</RMIcon>}
                              {index !== 0 &&
                                icons[index] && (
                                  <RMBadge variant="text" value={key + index}>
                                    <RMIcon fontSize={24}>{icons[index]}</RMIcon>
                                  </RMBadge>
                                )}
                            </View>
                          ))}
                        </View>
                      </View>
                    ))}
                  </RMDrawer>
                </View>
              </View>
            </View>
          </View>
        </View>

        <RMDrawer
          show={this.state.leftPushDrawerShow}
          mask
          onItemClick={this.onItemClick.bind(this)}
          onClose={this.onClose.bind(this)}
          items={childrenItem}
          width={320}
        />
        <RMDrawer
          show={this.state.rightPushDrawerShow}
          right
          mask
          onItemClick={this.onItemClick.bind(this)}
          onClose={this.onClose.bind(this)}
          items={childrenItem}
          width={320}
        />
        <RMDrawer
          show={this.state.leftPushDrawerShowAlignTop}
          mask
          onItemClick={this.onItemClick.bind(this)}
          onClose={this.onClose.bind(this)}
          items={childrenItem}
          itemsAlign="top"
          width={320}
        />
        <RMDrawer
          show={this.state.leftPushDrawerShowAlignMiddle}
          mask
          onItemClick={this.onItemClick.bind(this)}
          onClose={this.onClose.bind(this)}
          items={childrenItem}
          itemsAlign="middle"
          width={320}
        />
        <RMDrawer
          show={this.state.leftPushDrawerShowAlignBottom}
          mask
          onItemClick={this.onItemClick.bind(this)}
          onClose={this.onClose.bind(this)}
          items={childrenItem}
          itemsAlign="bottom"
          width={320}
        />
      </View>
    );
  }
}
