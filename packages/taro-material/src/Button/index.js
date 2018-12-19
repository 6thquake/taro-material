import Taro, { Component } from '@tarojs/taro';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { View, Button } from '@tarojs/components';

import AtButton from '../components/button/index';
import AtActivityIndicator from '../components/activity-indicator';

import RMIcon from '../Icon';

import theme from '../styles/theme';

import './Button.scss';

class RMButton extends Component {
  state = {
    status: {
      status: '',
    },
    second: 3,
  };

  status = {
    status: '',
    text: '',
    timer: null,
  };

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  onHandler = e => {
    const { onClick } = this.props;

    if (!onClick) {
      return void 0;
    }

    if (typeof onClick !== 'function') {
      return void 0;
    }

    if (this.status.status === 'progress' || this.status.status === 'success') {
      return void 0;
    }

    this.status.status = 'progress';

    let resolve = null,
      reject = null;
    e.resultPromise = new Promise((_resolve, _reject) => {
      resolve = _resolve;
      reject = _reject;
    });

    try {
      onClick(e);
    } catch (e) {
      this.status.status = 'failed';
      this.setState({
        status: {
          status: 'failed',
        },
      });
      reject && reject(e);
      return void 0;
    }

    let promise = e.returnValue;
    if (promise instanceof Promise) {
      this.status.status = 'progress';
      this.setState({
        status: {
          status: 'progress',
        },
      });
      promise
        .then(r => {
          this.status.status = 'success';
          this.setState({
            status: {
              status: 'success',
            },
          });

          return this.reset().then(() => {
            resolve && resolve();
          });
        })
        .catch(r => {
          this.status.status = 'failed';
          this.setState({
            status: {
              status: 'failed',
            },
          });

          reject && reject(r);
          throw r;
        });
    } else {
      this.status.status = '';
      resolve && resolve();
    }
  };

  reset = () => {
    const { delay } = this.props;

    return new Promise((resolve, reject) => {
      if (delay == 0) {
        this.status = {
          status: '',
          text: '',
          timer: null,
        };
        this.setState(
          {
            status: {
              status: '',
            },
            second: 3,
          },
          () => {
            resolve();
          },
        );
      }
      this.status.timer = setInterval(() => {
        if (this.state.second > 0) {
          this.setState({
            second: this.state.second - 1,
          });
        } else {
          this.status.timer && clearInterval(this.status.timer);
          this.status = {
            status: '',
            text: '',
            timer: null,
          };
          this.setState(
            {
              status: {
                status: '',
              },
              second: 3,
            },
            () => {
              resolve();
            },
          );
        }
      }, delay);
    });
  };

  render() {
    const {
      size,
      variant,
      color,
      disabled,
      customStyle,
      countdown,

      formType,
      openType,
      lang,
      sessionFrom,
      sendMessageTitle,
      sendMessagePath,
      sendMessageImg,
      showMessageCard,
      appParameter,
      onGetUserInfo,
      onGetPhoneNumber,
      onOpenSetting,
      onError,
      onContact,
    } = this.props;

    const common = theme.palette.common.white;
    const progress = theme.palette.progress.main;
    const success = theme.palette.success.main;
    const error = theme.palette.error.main;
    const primary = theme.palette.primary.main;
    const grey = theme.palette.grey[300];

    const { status, second } = this.state;

    let loading = false,
      circle = false,
      _color = null,
      _fontColor = null,
      icon = null,
      iconComponent = null,
      _customStyle = {},
      _status = status.status,
      _size = null,
      _diameter = 56,
      iconSize = 20,
      _reverse = variant === 'outlined' || variant === 'text';

    switch (size) {
      case 'small':
        _size = 'small';
        _diameter = variant == 'fab' ? 40 : 32;
        iconSize = 16;
        _customStyle.padding = `0 ${theme.spacing.unit / 2}px`;
        break;
      case 'medium':
      case 'normal':
      default:
        _size = 'normal';
        _diameter = variant == 'fab' ? 56 : 48;
        iconSize = 20;
        _customStyle.padding = `0 ${theme.spacing.unit}px`;
        break;
    }
    _customStyle.height = `${_diameter}px`;
    _customStyle.lineHeight = `${_diameter - 2}px`;
    _customStyle.fontSize = `${iconSize}px`;

    switch (color) {
      case 'default':
        if (_reverse) {
          _color = theme.palette.text.primary;
          _fontColor = grey;
        } else {
          _color = grey;
          _fontColor = theme.palette.text.primary;
        }
        break;
      case 'inherit':
        _color = 'inherit';
        _fontColor = 'inherit';
        break;
      default:
        _color = theme.palette[color].main;
        _fontColor = theme.palette[color].contrastText;
        break;
    }

    switch (_status) {
      case 'progress':
        _color = progress;
        _fontColor = theme.palette.progress.contrastText;
        loading = true;
        break;
      case 'success':
        _color = success;
        _fontColor = theme.palette.success.contrastText;
        icon = 'check';
        break;
      case 'failed':
        _color = error;
        _fontColor = theme.palette.error.contrastText;
        icon = 'replay';
        break;
      default:
        break;
    }

    switch (variant) {
      case 'extendedFab':
        circle = true;
        _customStyle.boxShadow = theme.shadows[6];
        _customStyle.width = 'auto';
        _customStyle.minWidth = `${_diameter}px`;
        _customStyle.height = `${_diameter}px`;
        _customStyle.padding = `0 ${theme.spacing.unit}px`;
        _customStyle.borderRadius = `${_diameter / 2}px`;
        _customStyle.color = _fontColor;
        _customStyle.border = `1px solid ${_color}`;
        _customStyle.background = _color;
        break;
      case 'fab':
        circle = true;
        _customStyle.boxShadow = theme.shadows[6];
        _customStyle.width = `${_diameter}px`;
        _customStyle.height = `${_diameter}px`;
        _customStyle.lineHeight = `${_diameter}px`;
        _customStyle.borderRadius = '50%';
        _customStyle.color = _fontColor;
        _customStyle.border = `1px solid ${_color}`;
        _customStyle.background = _color;
        break;
      case 'outlined':
        _customStyle.color = _color;
        _customStyle.border = `1px solid ${_color}`;
        _customStyle.background = 'transparent';
        break;
      case 'contained':
        _customStyle.color = _fontColor;
        _customStyle.border = `1px solid ${_color}`;
        _customStyle.background = _color;
        _customStyle.boxShadow = theme.shadows[1];
        break;
      case 'text':
      default:
        _customStyle.color = _color;
        _customStyle.border = `1px none`;
        _customStyle.background = 'transparent';
        break;
    }

    _customStyle = {
      ..._customStyle,
      ...customStyle,
    };

    let classes = classNames({
      text: true,
      fat: variant === 'fab',
    });

    let _countdown = second >= 0 && second < 3;
    let _second = second + 1;

    return (
      <AtButton
        size={_size}
        className="status-button"
        type={'primary'}
        circle={circle}
        loading={false}
        disabled={disabled}
        customStyle={_customStyle}
        formType={formType}
        openType={openType}
        lang={lang}
        sessionFrom={sessionFrom}
        sendMessageTitle={sendMessageTitle}
        sendMessagePath={sendMessagePath}
        sendMessageImg={sendMessageImg}
        showMessageCard={showMessageCard}
        appParameter={appParameter}
        onGetUserInfo={onGetUserInfo}
        onGetPhoneNumber={onGetPhoneNumber}
        onOpenSetting={onOpenSetting}
        onError={onError}
        onContact={onContact}
        onClick={this.onHandler}
      >
        <View className="box">
          {loading && (
            <View>
              <AtActivityIndicator size={iconSize} color={_reverse ? _color : _fontColor} />
            </View>
          )}
          {_countdown && countdown && <View>{_second}</View>}
          {(!_countdown || (_countdown && !countdown)) &&
            !loading &&
            icon && (
              <RMIcon fontSize={'inherit'} color={'inherit'} block={true}>
                {icon}
              </RMIcon>
            )}
          {!(variant === 'fab' && (loading || icon)) && (
            <View className={classes}>{this.props.children}</View>
          )}
        </View>
      </AtButton>
    );
  }
}

RMButton.defaultProps = {
  variant: 'text',
  size: 'medium',
  color: 'default',
  disabled: false,
  customStyle: {},
  onClick: () => {},
  // Button props
  formType: '',
  openType: '',
  lang: 'en',
  sessionFrom: '',
  sendMessageTitle: '',
  sendMessagePath: '',
  sendMessageImg: '',
  showMessageCard: false,
  appParameter: '',
  onGetUserInfo: () => {},
  onContact: () => {},
  onGetPhoneNumber: () => {},
  onError: () => {},
  onOpenSetting: () => {},
  delay: 2040,
  countdown: false,
};

RMButton.propTypes = {
  size: PropTypes.oneOf(['medium', 'normal', 'small']),
  variant: PropTypes.oneOf(['text', 'outlined', 'contained', 'fab', 'extendedFab']),
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

  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),

  formType: PropTypes.oneOf(['submit', 'reset', '']),
  openType: PropTypes.oneOf([
    'contact',
    'share',
    'getUserInfo',
    'getPhoneNumber',
    'launchApp',
    'openSetting',
    'feedback',
    'getRealnameAuthInfo',
    '',
  ]),
  lang: PropTypes.string,
  sessionFrom: PropTypes.string,
  sendMessageTitle: PropTypes.string,
  sendMessagePath: PropTypes.string,
  sendMessageImg: PropTypes.string,
  showMessageCard: PropTypes.bool,
  appParameter: PropTypes.string,
  onGetUserInfo: PropTypes.func,
  onContact: PropTypes.func,
  onGetPhoneNumber: PropTypes.func,
  onError: PropTypes.func,
  onOpenSetting: PropTypes.func,
  delay: PropTypes.number,
  countdown: PropTypes.bool,
};

export default RMButton;
