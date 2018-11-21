import Taro, { Component } from '@tarojs/taro';
import { View, Image, Switch } from '@tarojs/components';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import { isFunction } from '../utils/typeof';

import RMIcon from '../Icon';
import RMTypography from '../Typography';
import RMButton from '../Button';

import theme from '../styles/theme';

import './ListItem.scss';

class ListItem extends Component {
  handleClick = (...args) => {
    const { disabled } = this.props;

    if (disabled) {
      return;
    }

    if (isFunction(this.props.onClick)) {
      this.props.onClick(...args);
    }
  };

  handleSwitchClick(e) {
    e.stopPropagation();
  }

  handleSwitchChange = (...args) => {
    if (isFunction(this.props.onSwitchChange)) {
      this.props.onSwitchChange(...args);
    }
  };

  render() {
    const {
      note,
      arrow,
      title,
      thumb,
      iconThumb,
      iconThumbColor,
      isSwitch,
      extraText,
      hasBorder,
      extraThumb,
      extraIconThumb,
      switchIsCheck,
      disabled,
    } = this.props;

    let arrowIcon = null;
    switch (arrow) {
      case 'top':
        arrowIcon = 'expand_less';
        break;
      case 'bottom':
        arrowIcon = 'expand_more';
        break;
      case 'right':
        arrowIcon = 'chevron_right';
        break;
      default:
        break;
    }

    const rootClass = classNames(
      'at-list__item',
      {
        'at-list__item--thumb': thumb || iconThumb,
        'at-list__item--multiple': note,
        'at-list__item--no-border': !hasBorder,
      },
      this.props.className,
    );

    return (
      <View className={rootClass} onClick={this.handleClick}>
        {thumb && (
          <View className="at-list__item-thumb item-thumb">
            <Image className="item-thumb-info" mode="scaleToFill" src={thumb} />
          </View>
        )}
        {iconThumb && (
          <View className="at-list__item-thumb item-thumb">
            <RMIcon
              className="item-thumb-info"
              color={iconThumbColor}
              fontSize="inherit"
              block={true}
            >
              {iconThumb}
            </RMIcon>
          </View>
        )}
        <View className="at-list__item-content item-content">
          <View className="item-content__info">
            <View className="item-content__info-title">
              <RMTypography className="subheading">{title}</RMTypography>
            </View>
            {note && (
              <View className="item-content__info-note">
                <RMTypography className="caption">{note}</RMTypography>
              </View>
            )}
          </View>
        </View>
        <View className="at-list__item-extra item-extra">
          {extraText && (
            <View className="item-extra__info">
              <RMTypography className="body1">{extraText}</RMTypography>
            </View>
          )}

          {extraThumb && (
            <View className="item-extra__image">
              <Image className="item-extra__image-info" mode="aspectFit" src={extraThumb} />
            </View>
          )}

          {extraIconThumb && (
            <View className="item-extra__image">
              <RMIcon className="item-extra__image-info" fontSize="inherit" block={true}>
                {extraIconThumb}
              </RMIcon>
            </View>
          )}

          {isSwitch && (
            <View className="item-extra__switch" onClick={this.handleSwitchClick}>
              <Switch
                color={theme.palette.primary.main}
                checked={switchIsCheck}
                onChange={this.handleSwitchChange}
              />
            </View>
          )}

          {arrowIcon && (
            <View
              className="item-extra__icon"
              style={{
                margin: '0px -16px',
              }}
            >
              <RMButton variant="text" color="default" size="normal" disabled={disabled}>
                <RMIcon color="inherit" fontSize="inherit">
                  {arrowIcon}
                </RMIcon>
              </RMButton>
            </View>
          )}
        </View>
      </View>
    );
  }
}

ListItem.defaultProps = {
  hasBorder: true,
  isSwitch: false,
  disabled: false,
};

ListItem.propTypes = {
  note: PropTypes.string,
  title: PropTypes.string,
  thumb: PropTypes.string,
  iconThumb: PropTypes.string,
  iconThumbColor: PropTypes.string,
  onClick: PropTypes.func,
  isSwitch: PropTypes.bool,
  hasBorder: PropTypes.bool,
  switchIsCheck: PropTypes.bool,
  extraText: PropTypes.string,
  extraThumb: PropTypes.string,
  extraIconThumb: PropTypes.string,
  onSwitchChange: PropTypes.func,
  arrow: PropTypes.oneOf(['up', 'down', 'right']),
  disabled: PropTypes.bool,
};

export default ListItem;
