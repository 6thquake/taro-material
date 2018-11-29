import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './Typography.scss';

class Typography extends Component {
  static externalClasses = ['classes'];

  static options = {
    addGlobalClass: true,
  };

  render() {
    let { className, color, fontSize, block, onClick } = this.props;

    const classes = classNames(
      {
        typography: true,
        block,
      },
      className,
    );

    const style = {};

    if (color && color != 'default') {
      style.color = color;
    }

    if (fontSize && fontSize != 'default') {
      if (typeof fontSize === 'number') {
        fontSize += 'px';
      }
      style.fontSize = fontSize;
    }

    return (
      <View className={classes} style={style} onClick={onClick}>
        {this.props.children}
      </View>
    );
  }
}
Typography.defaultProps = {
  className: '',
  color: 'default',
  fontSize: 'default',
  block: false,
  onClick: () => {},
};

Typography.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  fontSize: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
  block: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Typography;
