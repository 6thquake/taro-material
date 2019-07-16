import Taro, { Component } from '@tarojs/taro';
import { View, Image, Switch } from '@tarojs/components';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { isFunction } from '../utils/typeof';

import RMBadge from '../Badge';
import RMIcon from '../Icon';
import RMTypography from '../Typography';
import RMButton from '../Button';

import theme from '../styles/theme';

import './ListItem.scss';

class RMListItem extends Component {
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
    const { disabled } = this.props;

    if (disabled) {
      return;
    }

    if (isFunction(this.props.onSwitchChange)) {
      this.props.onSwitchChange(...args);
    }
  };

  render() {
    const {
      note,
      arrow,
      title,
      wrap,
      thumb,
      iconThumb,
      iconThumbFill,
      iconThumbColor,
      isSwitch,
      extraText,
      extraTextColor,
      hasBorder,
      extraThumb,
      extraIconThumb,
      extraIconThumbFill,
      extraIconThumbColor,
      switchIsCheck,
      disabled,
      customStyle,
      customExtraStyle,
      badge = { dot: false, value: '', maxValue: 0 },
      image,
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
        'at-list__item--thumb': thumb || iconThumb || image,
        'at-list__item--multiple': note,
        'at-list__item--no-border': !hasBorder,
      },
      this.props.className,
    );

    return (
      <View className={rootClass} onClick={this.handleClick} style={customStyle}>
        {thumb && (
          <View className="at-list__item-thumb item-thumb">
            <Image className="item-thumb-info" mode="scaleToFill" src={thumb} />
          </View>
        )}
        {image && (
          <View className="at-list__item-thumb item-thumb">
            <Image className="item-thumb-info" mode="scaleToFill" src={image} />
          </View>
        )}
        {iconThumb && (
          <View className="at-list__item-thumb item-thumb">
            <RMIcon
              className="item-thumb-info"
              color={iconThumbColor}
              fill={iconThumbFill}
              fontSize="inherit"
              block
            >
              {iconThumb}
            </RMIcon>
          </View>
        )}
        <View className="at-list__item-content item-content">
          <View className="item-content__info">
            <View
              className={classNames({
                'item-content__info-title': true,
                wrap,
              })}
            >
              <RMTypography className="subheading">{title}</RMTypography>
              {this.props.renderTitle}
            </View>
            {note && (
              <View className="item-content__info-note">
                <RMTypography className="caption">{note}</RMTypography>
              </View>
            )}
            {<View className="item-content__info-note">{this.props.renderNote}</View>}
          </View>
        </View>
        <View className="at-list__item-extra item-extra" style={customExtraStyle}>
          <RMBadge variant={badge.variant || 'text'} value={badge.value} maxValue={badge.maxValue}>
            <View
              className={classNames({
                'item-extra__badge': true,
              })}
            >
              {extraText && (
                <View className="item-extra__info">
                  <RMTypography className="body1" color={extraTextColor}>
                    {extraText}
                  </RMTypography>
                </View>
              )}

              {extraThumb && (
                <View className="item-extra__image">
                  <Image className="item-extra__image-info" mode="aspectFit" src={extraThumb} />
                </View>
              )}

              {extraIconThumb && (
                <View className="item-extra__image">
                  <RMIcon
                    className="item-extra__image-info"
                    color={extraIconThumbColor}
                    fill={extraIconThumbFill}
                    fontSize="inherit"
                    block
                  >
                    {extraIconThumb}
                  </RMIcon>
                </View>
              )}

              {this.props.renderExtra}

              {isSwitch && (
                <View className="item-extra__switch" onClick={this.handleSwitchClick}>
                  <Switch
                    color={theme.palette.primary.main}
                    checked={switchIsCheck}
                    onChange={this.handleSwitchChange}
                    disabled={disabled}
                  />
                </View>
              )}
            </View>
          </RMBadge>

          {!extraText && !extraThumb && !extraIconThumb && !isSwitch && (badge.dot || badge.value) && (
            <View
              className={classNames({
                'item-extra__badge-num': badge.value,
              })}
            />
          )}

          {arrowIcon && (
            <View
              className="item-extra__icon"
              style={{
                margin: '0px -16px',
              }}
            >
              <RMButton variant="text" color="default" size="normal" disabled={disabled}>
                <RMIcon color="inherit" fontSize="inherit" block>
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

RMListItem.defaultProps = {
  wrap: false,
  hasBorder: true,
  isSwitch: false,
  disabled: false,
  customStyle: {},
  customExtraStyle: {},
  badge: { dot: false, value: '', maxValue: 0 },
};

RMListItem.propTypes = {
  note: PropTypes.string,
  title: PropTypes.string,
  thumb: PropTypes.string,
  iconThumb: PropTypes.string,
  iconThumbFill: PropTypes.string,
  iconThumbColor: PropTypes.oneOf([
    'inherit',
    'primary',
    'secondary',
    'action',
    'error',
    'disabled',
    'success',
    'warning',
    'progress',
    'default',
  ]),
  onClick: PropTypes.func,
  isSwitch: PropTypes.bool,
  hasBorder: PropTypes.bool,
  switchIsCheck: PropTypes.bool,
  extraText: PropTypes.string,
  extraTextColor: PropTypes.string,
  extraThumb: PropTypes.string,
  extraIconThumb: PropTypes.string,
  extraIconThumbFill: PropTypes.string,
  extraIconThumbColor: PropTypes.oneOf([
    'inherit',
    'primary',
    'secondary',
    'action',
    'error',
    'disabled',
    'success',
    'warning',
    'progress',
    'default',
  ]),
  onSwitchChange: PropTypes.func,
  arrow: PropTypes.oneOf(['up', 'down', 'right', '']),
  disabled: PropTypes.bool,
  renderNote: PropTypes.element,
  renderTitle: PropTypes.element,
  renderExtra: PropTypes.element,
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  customExtraStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  badge: PropTypes.shape({
    variant: PropTypes.oneOf(['text', 'ribbon', 'mark', 'dot']),
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    maxValue: PropTypes.number,
  }),
  wrap: PropTypes.bool,
  image: PropTypes.string,
};

export default RMListItem;
