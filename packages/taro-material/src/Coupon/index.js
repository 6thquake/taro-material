import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { format } from '../utils/math';

import './index.scss';

export default class Coupon extends Component {
  handleClick() {
    const { disabled, onClick } = this.props;
    !disabled && onClick && onClick(...arguments);
  }
  render() {
    const {
      title,
      value,
      prefix,
      suffix,
      purpose,
      comment,
      variant,
      status,
      disabled,
    } = this.props;
    const denomination = format(value, 0);

    return (
      <View className="coupon coupon-item">
        <View
          className={classNames({
            [`style-${variant}`]: true,
            have: disabled,
          })}
        >
          <View className="info-box">
            <View className="infos">
              <View className="nick">{title}</View>

              <View className="coupon-money">
                <View className="lay of">
                  {prefix}
                  <View className="em">{denomination}</View>
                  {suffix}
                </View>

                <View className="lay">
                  <View className="tit">{purpose}</View>
                  <View className="demand">{comment}</View>
                </View>
              </View>
            </View>
          </View>

          <View className="get-btn" onClick={this.handleClick.bind(this)}>
            {status}
          </View>
        </View>
      </View>
    );
  }
}

Coupon.defaultProps = {
  title: '',
  prefix: '￥',
  suffix: '',
  value: 0,
  purpose: '优惠劵',
  comment: '',
  variant: 'default',
  disabled: false,
  status: '',
  onClick: () => {},
};

Coupon.propTypes = {
  title: PropTypes.string,
  prefix: PropTypes.string,
  suffix: PropTypes.string,
  value: PropTypes.number,
  purpose: PropTypes.string,
  comment: PropTypes.string,
  variant: PropTypes.oneOf(['jd', 'vip', 'yhd', 'suning', 'default']),
  disabled: PropTypes.bool,
  status: PropTypes.string,
  onClick: PropTypes.func,
};
