import Taro, { Component } from '@tarojs/taro';
import { View, Image } from '@tarojs/components';
import dayjs from 'dayjs';
import classNames from 'classnames';
import { isString, isDate } from '../utils/typeof';

import RMTypography from '../Typography';

import theme from '../styles/theme';

import './Postmark.scss';

// import postmarkBlack from './images/postmark-black.png';
// import postmarkWhite from './images/postmark-white.png';
// import postmarkDefault from './images/postmark-default.png';
// import postmarkPrimary from './images/postmark-primary.png';
// import postmarkSecondary from './images/postmark-secondary.png';
// import postmarkProgress from './images/postmark-progress.png';
// import postmarkWarning from './images/postmark-warning.png';
// import postmarkSuccess from './images/postmark-success.png';
// import postmarkError from './images/postmark-error.png';
const [
  postmarkBlack,
  postmarkWhite,
  postmarkDefault,
  postmarkPrimary,
  postmarkSecondary,
  postmarkProgress,
  postmarkWarning,
  postmarkSuccess,
  postmarkError,
] = [
  'https://raw.githubusercontent.com/6thquake/taro-material/master/packages/taro-material/src/Postmark/images/postmark-black.png',
  'https://raw.githubusercontent.com/6thquake/taro-material/master/packages/taro-material/src/Postmark/images/postmark-white.png',
  'https://raw.githubusercontent.com/6thquake/taro-material/master/packages/taro-material/src/Postmark/images/postmark-default.png',
  'https://raw.githubusercontent.com/6thquake/taro-material/master/packages/taro-material/src/Postmark/images/postmark-primary.png',
  'https://raw.githubusercontent.com/6thquake/taro-material/master/packages/taro-material/src/Postmark/images/postmark-secondary.png',
  'https://raw.githubusercontent.com/6thquake/taro-material/master/packages/taro-material/src/Postmark/images/postmark-progress.png',
  'https://raw.githubusercontent.com/6thquake/taro-material/master/packages/taro-material/src/Postmark/images/postmark-warning.png',
  'https://raw.githubusercontent.com/6thquake/taro-material/master/packages/taro-material/src/Postmark/images/postmark-success.png',
  'https://raw.githubusercontent.com/6thquake/taro-material/master/packages/taro-material/src/Postmark/images/postmark-error.png',
];

class RMPostmark extends Component {
  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    const { color, text, date, size, signature, format } = this.props;

    let _src = '';
    let _color = '';
    let _date = '';

    if (isString(date)) {
      _date = date;
    } else if (isDate(date)) {
      _date = dayjs(date).format(format);
    }

    switch (color) {
      case 'warning':
        _src = postmarkWarning;
        _color = theme.palette.warning.main;
        break;
      case 'progress':
        _src = postmarkProgress;
        _color = theme.palette.progress.main;
        break;
      case 'success':
        _src = postmarkSuccess;
        _color = theme.palette.success.main;
        break;
      case 'error':
        _src = postmarkError;
        _color = theme.palette.error.main;
        break;
      case 'secondary':
        _src = postmarkSecondary;
        _color = theme.palette.secondary.main;
        break;
      case 'primary':
        _src = postmarkPrimary;
        _color = theme.palette.primary.main;
        break;
      case 'white':
        _src = postmarkWhite;
        _color = theme.palette.common.white;
        break;
      case 'black':
        _src = postmarkBlack;
        _color = theme.palette.common.black;
        break;
      case 'default':
      default:
        _src = postmarkDefault;
        _color = theme.palette.grey['200'];
        break;
    }

    const rootCls = classNames({
      root: true,
      [size]: true,
    });

    return (
      <View className={rootCls}>
        <Image className="image" mode="scaleToFill" src={_src} />
        <View className="info">
          <View className="text">
            <RMTypography className="body2" color={_color} fontSize="inherit">
              {text}
            </RMTypography>
          </View>
          <View className="signature">
            {signature.split('').map((char, index) => (
              <View
                className={classNames({
                  char: true,
                  clockwise: true,
                  [`char${index}`]: true,
                })}
                key={`${char}${index}`}
              >
                <RMTypography className="caption" color={_color} fontSize="inherit">
                  {char}
                </RMTypography>
              </View>
            ))}
          </View>
          <View className="date">
            {_date.split('').map((char, index) => (
              <View
                className={classNames({
                  char: true,
                  'anti-clockwise': true,
                  [`char${index}`]: true,
                })}
                key={`${char}${index}`}
              >
                <RMTypography className="caption" color={_color} fontSize="inherit">
                  {char}
                </RMTypography>
              </View>
            ))}
          </View>
        </View>
      </View>
    );
  }
}

RMPostmark.defaultProps = {
  /**
   * enum: 'primary', 'secondary', 'error', 'success', 'warning', 'progress', 'default', 'white', 'black'
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: 'default',
  text: '',
  date: '',
  size: 'medium', // small, medium, normal
  signature: '',
  format: 'YYYY-MM-DD HH:mm:ss',
};

export default RMPostmark;
