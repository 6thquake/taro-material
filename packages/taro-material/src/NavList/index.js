import Taro, { Component } from '@tarojs/taro';
import PropTypes from 'prop-types';
import { View, Image } from '@tarojs/components';

import RMIcon from '../Icon';
import RMTypography from '../Typography';

import { parse, stringify } from '../utils/qs';

import theme from '../styles/theme';

import './index.scss';

class Index extends Component {
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

  render() {
    const {
      data,
      columnNum,
      size,
      concise,
      titleColor,
      backgroundColor,
      subTitleColor,
      isDark,
      color,
      customStyle,
    } = this.props;

    const style = {
      width: `${Math.round(100 / columnNum)}%`,
    };

    // let rows = data.length % columnNum;
    // let renderData = data.slice(0);
    // renderData.length = renderData.length + rows;

    return (
      <View className={`root ${size}`} style={customStyle}>
        {data.map(
          (item, index) =>
            item ? (
              <View
                style={style}
                key={index}
                onClick={this.handleClick.bind(this, item)}
                className="box"
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
                    <RMIcon block fontSize={item.fontSize || 'inherit'}>
                      {item.icon}
                    </RMIcon>
                  )}
                </View>
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
            ) : (
              <View style={style} key={index} className="box" />
            ),
        )}
      </View>
    );
  }
}

Index.defaultProps = {
  data: [],
  onClick: () => {},
  columnNum: 4,
  color: theme.palette.primary.contrastText,
  size: 'normal',
  concise: false,
  backgroundColor: null,
  titleColor: null,
  subTitleColor: null,
  customStyle: {},
};

Index.propTypes = {
  size: PropTypes.oneOf(['large', 'medium', 'normal', 'small']),
};
export default Index;
