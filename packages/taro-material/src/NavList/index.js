import Taro, { Component } from '@tarojs/taro';
import PropTypes from 'prop-types';
import { View, ScrollView, Image } from '@tarojs/components';

import RMBadge from '../Badge';
import RMIcon from '../Icon';
import RMTypography from '../Typography';

import { parse, stringify } from '../utils/qs';

import theme from '../styles/theme';

import './index.scss';
import '../style/components/progress.scss';

class RMNavList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scrollLeft: 0,
      scrollWidth: 750,
    };
  }
  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  handleClick(data) {
    const { onClick } = this.props;
    const { path, title } = data;

    if (!path) {
      Taro.showModal({
        showCancel: false,
        content: '敬请期待~',
        confirmColor: theme.palette.primary.main,
      });
      return;
    }

    if (onClick) {
      onClick(data);
    } else {
      const urls = path.split('?');
      const url = urls[0];
      let querystring = {};

      if (urls.length > 1) {
        const qs = urls[1];
        querystring = parse(qs);
      }

      Taro.navigateTo({
        url: `${url}?${stringify({ title, ...querystring })}`,
      });
    }
  }

  handleScroll(e) {
    const { scrollLeft, scrollWidth } = e.detail;
    this.setState({
      scrollLeft,
      scrollWidth,
    });
  }

  render() {
    const {
      data,
      columnNum,
      visiableColumnNum,
      size,
      concise,
      titleColor,
      backgroundColor,
      subTitleColor,
      color,
      scrollbarColor,
      customStyle,
    } = this.props;

    const { scrollLeft, scrollWidth } = this.state;

    let vcn = visiableColumnNum;
    if (columnNum < visiableColumnNum) {
      vcn = columnNum;
    }

    const wrapperStyle = {
      ...customStyle,
      width: `${Math.round((100 * columnNum) / vcn)}%`,
    };

    const style = {
      width: `${Math.round(100 / columnNum)}%`,
    };

    const progressStyle = {
      width: `${(100 * vcn) / columnNum}%`,
      marginLeft: `${(100 * scrollLeft) / scrollWidth}%`,
      height: `4px`,
      backgroundColor: scrollbarColor || theme.palette.primary.main,
    };

    return (
      <View className="rm-nav-list">
        <ScrollView scrollX scrollWithAnimation onScroll={this.handleScroll}>
          <View className={`rm-nav-list-wrapper ${size}`} style={wrapperStyle}>
            {data.map((item, index) => {
              const badge = item.badge || {};
              return (
                <View style={style} key={item.id || item.title} className="box">
                  {item && (
                    <View className="content" onClick={this.handleClick.bind(this, item)}>
                      <RMBadge
                        variant={badge.variant || 'text'}
                        value={badge.value}
                        maxValue={badge.maxValue}
                      >
                        <View
                          className="image"
                          style={{
                            background: item.background || backgroundColor || 'inherit',
                            color: item.color || color || 'inherit',
                          }}
                        >
                          {item.image && (
                            <Image
                              style={{
                                width: '100%',
                                height: '100%',
                                background: theme.palette.background.paper,
                              }}
                              src={item.image}
                            />
                          )}
                          {item.icon && (
                            <RMIcon
                              block
                              fontSize={item.fontSize || 'inherit'}
                              customStyle={item.customStyle}
                            >
                              {item.icon}
                            </RMIcon>
                          )}
                          {item.mark && <View className="mark">{item.mark}</View>}
                        </View>
                      </RMBadge>
                      {!concise &&
                        item.title && (
                          <View className="title">
                            <RMTypography
                              className="body1"
                              fontSize="inherit"
                              color={titleColor || 'inherit'}
                              block
                            >
                              {item.title}
                            </RMTypography>
                          </View>
                        )}

                      {!concise &&
                        item.subTitle && (
                          <View className="subTitle">
                            <RMTypography className="caption" color={subTitleColor || 'default'}>
                              {item.subTitle}
                            </RMTypography>
                          </View>
                        )}
                    </View>
                  )}
                </View>
              );
            })}
          </View>
        </ScrollView>

        {columnNum > visiableColumnNum && (
          <View className="rm-nav-list-scrollbar">
            <View className="at-progress">
              <View className="at-progress__outer">
                <View className="at-progress__outer-inner">
                  <View className="at-progress__outer-inner-background" style={progressStyle} />
                </View>
              </View>
            </View>
          </View>
        )}
      </View>
    );
  }
}

RMNavList.defaultProps = {
  data: [],
  onClick: () => {},
  columnNum: 5,
  visiableColumnNum: 5,
  color: theme.palette.primary.contrastText,
  size: 'normal',
  concise: false,
  backgroundColor: null,
  titleColor: null,
  subTitleColor: null,
  scrollbarColor: null,
  customStyle: {},
};

RMNavList.propTypes = {
  size: PropTypes.oneOf(['large', 'medium', 'normal', 'small']),
};
export default RMNavList;
