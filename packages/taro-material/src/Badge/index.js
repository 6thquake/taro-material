import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import AtBadge from '../components/badge';

import './index.scss';

export default class Badge extends Component {
  render() {
    const { value, maxValue, variant, color, customStyle } = this.props;

    return (
      <View className={classNames('rm-badge', this.props.className)}>
        {variant === 'dot' && (
          <AtBadge value={value} maxValue={maxValue} dot customStyle={customStyle}>
            {this.props.children}
          </AtBadge>
        )}

        {variant === 'text' && (
          <AtBadge value={value} maxValue={maxValue} dot={false} customStyle={customStyle}>
            {this.props.children}
          </AtBadge>
        )}

        {variant === 'mark' && (
          <View>
            {this.props.children}
            <View className="rm-badge-mark">{value}</View>
          </View>
        )}

        {variant === 'ribbon' && (
          <View>
            {this.props.children}
            <View className="rm-badge-ribbon">
              <View className="rm-badge-ribbon-content">
                <View className="rm-badge-ribbon-content-text">{value}</View>
              </View>
            </View>
          </View>
        )}
      </View>
    );
  }
}

Badge.defaultProps = {
  value: '',
  maxValue: 99,
  variant: 'text',
  color: 'error',
  customStyle: {},
  className: '',
};

Badge.propTypes = {
  value: PropTypes.string,
  maxValue: PropTypes.number,
  variant: PropTypes.oneOf(['text', 'ribbon', 'mark', 'dot']),
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
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
};
