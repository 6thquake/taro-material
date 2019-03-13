import Taro, { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './Typography.scss';

class Typography extends Component {
  static externalClasses = ['classes'];

  static options = {
    addGlobalClass: true,
  };

  render() {
    const {
      className,
      color,
      block,
      onClick,
      customStyle,
      fontSize,
      space,
      decode,
      selectable,
    } = this.props;

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
        <Text space={space} selectable={selectable} decode={decode}>
          {this.props.children}
        </Text>
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
  space: 'nbsp',
  decode: false,
  selectable: true,
};

Typography.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  block: PropTypes.bool,
  onClick: PropTypes.func,
  customStyle: PropTypes.object,
  space: PropTypes.oneOf(['ensp', 'emsp', 'nbsp']),
  selectable: PropTypes.bool,
  decode: PropTypes.bool,
};

export default Typography;
