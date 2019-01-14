import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';

import { RMCoupon } from '../../../';

import './index.scss';

class Index extends Component {
  config = {
    navigationBarTitleText: '优惠券',
  };
  state = {};

  render() {
    return (
      <View className="root">
        <View className="coupons">
          <View className="title">京东优惠劵领取：</View>
          <View className="coupon">
            <RMCoupon
              title="京东平台优惠劵"
              value={10}
              prefix="￥"
              suffix=""
              purpose="优惠劵"
              comment="满100元可用"
              variant="jd"
              status="立即领取"
              disabled={false}
            />
          </View>
          <View className="coupon">
            <RMCoupon
              title="京东平台优惠劵"
              value={10}
              prefix="￥"
              suffix=""
              purpose="优惠劵"
              comment="满100元可用"
              variant="jd"
              status="已领取"
              disabled
            />
          </View>

          <View className="title">唯品会优惠劵领取：</View>
          <View className="coupon">
            <RMCoupon
              title="唯品会平台优惠劵"
              value={10}
              prefix="￥"
              suffix=""
              purpose="优惠劵"
              comment="满100元可用"
              variant="vip"
              status="立即领取"
              disabled={false}
            />
          </View>
          <View className="coupon">
            <RMCoupon
              title="唯品会平台优惠劵"
              value={10}
              prefix="￥"
              suffix=""
              purpose="优惠劵"
              comment="满100元可用"
              variant="vip"
              status="已领取"
              disabled
            />
          </View>

          <View className="title">1号店优惠劵领取：</View>
          <View className="coupon">
            <RMCoupon
              title="1号店平台优惠券"
              value={10}
              prefix="￥"
              suffix=""
              purpose="优惠劵"
              comment="满100元可用"
              variant="yhd"
              status="立即领取"
              disabled={false}
            />
          </View>
          <View className="coupon">
            <RMCoupon
              title="1号店平台优惠券"
              value={10}
              prefix="￥"
              suffix=""
              purpose="优惠劵"
              comment="满100元可用"
              variant="yhd"
              status="已领取"
              disabled
            />
          </View>

          <View className="title">苏宁优惠劵领取：</View>
          <View className="coupon">
            <RMCoupon
              title="苏宁平台优惠券"
              value={10}
              prefix="￥"
              suffix=""
              purpose="优惠劵"
              comment="满100元可用"
              variant="suning"
              status="立即领取"
              disabled={false}
            />
          </View>
          <View className="coupon">
            <RMCoupon
              title="苏宁平台优惠券"
              value={10}
              prefix="￥"
              suffix=""
              purpose="优惠劵"
              comment="满100元可用"
              variant="suning"
              status="已领取"
              disabled
            />
          </View>

          <View className="title">吉刻优惠劵领取：</View>
          <View className="coupon">
            <RMCoupon
              title="吉刻平台优惠券"
              value={10}
              prefix="￥"
              suffix=""
              purpose="优惠劵"
              comment="满100元可用"
              variant="default"
              status="立即领取"
              disabled={false}
            />
          </View>
          <View className="coupon">
            <RMCoupon
              title="吉刻平台优惠券"
              value={10}
              prefix="￥"
              suffix=""
              purpose="优惠劵"
              comment="满100元可用"
              variant="default"
              status="已领取"
              disabled
            />
          </View>
        </View>
      </View>
    );
  }
}

export default Index;
