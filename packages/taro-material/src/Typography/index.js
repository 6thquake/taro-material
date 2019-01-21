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
    const { className, color, block, onClick, customStyle, fontSize } = this.props;

    const classes = classNames(
      {
        typography: true,
        block,
      },
      className,
    );

    const style = {
      ...customStyle,
    };

    if (color && color !== 'default') {
      style.color = color;
    }

    if (fontSize && fontSize !== 'default') {
      style.fontSize = typeof fontSize === 'number' ? `${fontSize}px` : fontSize;
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
  customStyle: {},
};

Typography.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  block: PropTypes.bool,
  onClick: PropTypes.func,
  customStyle: PropTypes.object,
};

export default Typography;
