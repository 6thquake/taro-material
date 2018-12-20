import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './List.scss';

class List extends Component {
  render() {
    const { hasBorder, className, customStyle } = this.props;

    const rootClass = classNames(
      'at-list',
      {
        'at-list--no-border': !hasBorder,
      },
      className,
    );

    return (
      <View className={rootClass} style={customStyle}>
        {this.props.children}
      </View>
    );
  }
}

List.defaultProps = {
  hasBorder: true,
  customStyle: {},
};

List.propTypes = {
  hasBorder: PropTypes.bool,
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};

export default List;
