import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import PropTypes from 'prop-types';
import { getClassName } from '../utils/styles';

import AtList from '../List';
import AtListItem from '../ListItem';

import theme from '../styles/theme';

import './Drawer.scss';

export default class Drawer extends Component {
  constructor() {
    super(...arguments);
    this.state = { animShow: false };
    if (this.props.show) this.animShow();
  }

  onItemClick(index, e) {
    this.props.onItemClick && this.props.onItemClick(index);
    this.animHide(e, index);
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
    return;
  }

  componentWillReceiveProps(props) {
    const { show } = props;
    if (show !== this.props.show) {
      if (show) this.animShow();
      else this.animHide(...arguments);
    }
  }

  render() {
    const { mask, width, right, items } = this.props;
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

          <View className="at-drawer__content" style={listStyle}>
            <AtList>
              {items.map((name, index) => (
                <AtListItem
                  key={index}
                  data-index={index}
                  onClick={this.onItemClick.bind(this, index)}
                  title={name}
                  arrow="right"
                />
              ))}
              {this.props.children}
            </AtList>
          </View>
        </View>
      )
    );
  }
}

Drawer.defaultProps = {
  show: false,
  mask: true,
  width: 368,
  right: false,
  items: [],
  onItemClick: () => {},
  onClose: () => {},
};

Drawer.propTypes = {
  show: PropTypes.bool,
  mask: PropTypes.bool,
  width: PropTypes.number,
  items: PropTypes.arrayOf(PropTypes.string),
  onItemClick: PropTypes.func,
  onClose: PropTypes.func,
};
