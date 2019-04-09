import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { getClassName } from '../utils/styles';

import RMList from '../List';
import RMListItem from '../ListItem';

// import theme from '../styles/theme'

import './Drawer.scss';

export default class RMDrawer extends Component {
  constructor() {
    super(...arguments);
    this.state = { animShow: false };
    if (this.props.show) this.animShow();
  }

  onItemClick(item, e) {
    if (this.props.onItemClick) {
      const result = this.props.onItemClick(item);
      if (result === false) {
        return;
      }
    }
    this.animHide(e, item);
  }

  onHide() {
    this.setState({ show: false });
    this.props.onClose && this.props.onClose();
  }

  animHide() {
    this.setState({
      animShow: false,
    });
    setTimeout(() => {
      this.onHide(...arguments);
    }, 300);
  }

  animShow() {
    this.setState({ show: true });
    setTimeout(() => {
      this.setState({
        animShow: true,
      });
    }, 200);
  }

  onMaskClick() {
    this.animHide(...arguments);
  }

  preventMaskMove() {
    console.log('stop user scroll it!');
  }

  componentWillReceiveProps(props) {
    const { show } = props;
    if (show !== this.props.show) {
      if (show) this.animShow();
      else this.animHide(...arguments);
    }
  }

  render() {
    const {
      mask,
      width,
      right,
      items,
      itemsAlign,
      color,
      dark,
      ListProps,
      ListItemProps,
    } = this.props;
    const { animShow, show } = this.state;
    let rootClassName = ['at-drawer'];

    const maskStyle = {
      display: mask ? 'block' : 'none',
      opacity: animShow ? 1 : 0,
    };
    const listStyle = {
      width: `${width}px`,
      transition: animShow
        ? 'all 225ms cubic-bezier(0, 0, 0.2, 1)'
        : 'all 195ms cubic-bezier(0.4, 0, 0.6, 1)',
    };
    if (right) rootClassName.push('at-drawer--right');
    else rootClassName.push('at-drawer--left');

    if (animShow) rootClassName.push('at-drawer--show');
    rootClassName = rootClassName.filter(str => str !== '');

    return (
      show && (
        <View
          className={getClassName(rootClassName, this.props.className)}
          catchtouchmove={this.preventMaskMove}
        >
          <View
            className="at-drawer__mask"
            style={maskStyle}
            onClick={this.onMaskClick.bind(this)}
          />

          <View
            className={classNames({
              [color]: true,
              dark,
              'at-drawer__content': true,
              [itemsAlign]: true,
            })}
            style={listStyle}
          >
            {items.map((group, key) => (
              <View key={group.id || group.name} className="at-drawer__wrapper">
                <View className="at-drawer__list--title">{group.name}</View>
                <RMList
                  hasBorder={ListProps.hasBorder}
                  customStyle={{ ...ListProps.customStyle, ...{ backgroundColor: 'transparent' } }}
                >
                  {group.children.map((item, index) => (
                    <RMListItem
                      key={item.id || item.title || item.name}
                      data-index={index}
                      onClick={this.onItemClick.bind(this, item)}
                      arrow={item.arrow}
                      disabled={item.disabled}
                      note={item.note}
                      title={item.title || item.name}
                      thumb={item.thumb}
                      iconThumb={item.iconThumb}
                      iconThumbFill={item.iconThumbFill}
                      iconThumbColor={item.iconThumbColor}
                      isSwitch={item.isSwitch}
                      switchIsCheck={item.switchIsCheck}
                      extraText={item.extraText}
                      extraTextColor={item.extraTextColor}
                      extraThumb={item.extraThumb}
                      extraIconThumb={item.extraIconThumb}
                      extraIconThumbFill={item.extraIconThumbFill}
                      extraIconThumbColor={item.extraIconThumbColor}
                      hasBorder={ListItemProps.hasBorder}
                      customStyle={ListItemProps.customStyle}
                      customExtraStyle={ListItemProps.customExtraStyle}
                    />
                  ))}
                </RMList>
              </View>
            ))}
            {this.props.children}
          </View>
        </View>
      )
    );
  }
}

RMDrawer.defaultProps = {
  show: false,
  mask: true,
  width: 368,
  right: false,
  items: [],
  itemsAlign: 'top',
  onItemClick: () => {},
  onClose: () => {},
  color: 'default',
  dark: false,
  ListProps: { hasBorder: false },
  ListItemProps: { hasBorder: true },
};

RMDrawer.propTypes = {
  show: PropTypes.bool,
  mask: PropTypes.bool,
  width: PropTypes.number,
  items: PropTypes.array,
  itemsAlign: PropTypes.oneOf(['top', 'middle', 'bottom']),
  onItemClick: PropTypes.func,
  onClose: PropTypes.func,
  color: PropTypes.oneOf([
    'default',
    'inherit',
    'primary',
    'secondary',
    'error',
    'success',
    'warning',
    'progress',
  ]),
  dark: PropTypes.bool,
  ListProps: PropTypes.object,
  ListItemProps: PropTypes.object,
};
