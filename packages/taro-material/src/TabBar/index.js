import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import RMBadge from '../Badge';
import RMIcon from '../Icon';
import RMTypography from '../Typography';

import theme from '../styles/theme';
import './TabBar.scss';

const objectToString = style => {
  if (typeof style === 'object') {
    let styleStr = '';
    Object.keys(style).forEach(key => {
      const lowerCaseKey = key.replace(/([A-Z])/g, '-$1').toLowerCase();
      styleStr += `${lowerCaseKey}:${style[key]};`;
    });
    return styleStr;
  }
  return style;
};

class RMTabBar extends Component {
  // state = {
  //   isIPhoneX: false,
  // };

  componentDidMount() {
    // const curEnv = Taro.getEnv();
    // if (curEnv === Taro.ENV_TYPE.WEAPP && Taro.getSystemInfoSync().model.indexOf('iPhone X') >= 0) {
    //   this.setState({ isIPhoneX: true });
    // }
  }

  handleClick(i) {
    this.props.onClick(i, ...arguments);
  }

  /**
   * 合并 style
   * @param {Object|String} style1
   * @param {Object|String} style2
   * @returns {String}
   */
  mergeStyle(style1, style2) {
    return objectToString(style1) + objectToString(style2);
  }

  render() {
    const {
      customStyle,
      className,
      fixed,
      backgroundColor,
      tabList,
      current,
      color,
      iconSize,
      fontSize,
      selectedColor,
    } = this.props;
    // const { isIPhoneX } = this.state;
    const defaultStyle = `color: ${color};`;
    const selectedStyle = `color: ${selectedColor};`;
    const titleStyle = `font-size: ${fontSize}px;`;
    const rootStyle = `background-color: ${backgroundColor};`;

    return (
      <View
        className={classNames(
          {
            'at-tab-bar': true,
            'at-tab-bar--fixed': fixed,
            // 'at-tab-bar--ipx': isIPhoneX,
          },
          className,
        )}
        style={this.mergeStyle(rootStyle, customStyle)}
      >
        {tabList.map((item, i) => {
          const { badge = {} } = item;
          return (
            <View
              className="at-tab-bar__item"
              style={current === i ? selectedStyle : defaultStyle}
              key={item.title}
              onClick={this.handleClick.bind(this, i)}
            >
              {item.iconType ? (
                <RMBadge
                  variant={badge.variant || 'text'}
                  value={badge.value}
                  maxValue={badge.maxValue}
                >
                  <View
                    className="at-tab-bar__icon"
                    style={{
                      ...{ fontSize: `${iconSize}px` },
                      ...{ color: current === i ? selectedStyle : defaultStyle },
                    }}
                  >
                    <RMIcon prefixClass={item.iconPrefixClass} fontSize="inherit" color="inherit">
                      {current === i && item.selectedIconType
                        ? item.selectedIconType
                        : item.iconType}
                    </RMIcon>
                  </View>
                </RMBadge>
              ) : null}
              <View>
                <RMBadge
                  variant={item.iconType ? 'text' : badge.variant}
                  value={item.iconType ? '' : badge.value}
                  maxValue={item.iconType ? 0 : badge.maxValue}
                >
                  <View className="at-tab-bar__title" style={titleStyle}>
                    <RMTypography className="caption" color="inherit" fontSize="inherit">
                      {item.title}
                    </RMTypography>
                  </View>
                </RMBadge>
              </View>
            </View>
          );
        })}
      </View>
    );
  }
}

RMTabBar.defaultProps = {
  customStyle: '',
  className: '',
  fixed: false,
  backgroundColor: theme.palette.background.paper,
  current: 0,
  iconSize: 28,
  fontSize: 10,
  color: theme.palette.text.secondary,
  selectedColor: theme.palette.primary.main,
  scroll: false,
  tabList: [],
  onClick: () => {},
};

RMTabBar.propTypes = {
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  fixed: PropTypes.bool,
  backgroundColor: PropTypes.string,
  current: PropTypes.number,
  iconSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  fontSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  color: PropTypes.string,
  selectedColor: PropTypes.string,
  scroll: PropTypes.bool,
  tabList: PropTypes.array,
  onClick: PropTypes.func,
};

export default RMTabBar;
