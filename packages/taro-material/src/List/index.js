import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './List.scss';

class List extends Component {
  render() {
    const rootClass = classNames(
      'at-list',
      {
        'at-list--no-border': !this.props.hasBorder,
      },
      this.props.className,
    );

    return <View className={rootClass}>{this.props.children}</View>;
  }
}

List.defaultProps = {
  hasBorder: true,
};

List.propTypes = {
  hasBorder: PropTypes.bool,
};

export default List;
