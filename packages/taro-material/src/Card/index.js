import Taro, { Component } from '@tarojs/taro';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Image } from '@tarojs/components';
import { RMTypography } from '../Typography';

import theme from '../styles/theme';
import './index.scss';

class RMCard extends Component {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  handleClick(e) {
    const { onClick } = this.props;
    onClick && onClick(e, ...arguments);
  }

  render() {
    const {
      header,
      title,
      content,
      medias = [],
      raised,
      orientation,
      radius,
      customStyle,
      MediaProps: { height, width, placement },
    } = this.props;

    const style = {
      ...customStyle,
      borderRadius: `${radius}px`,
    };

    const vertical = orientation === 'vertical';
    const horizontal = orientation !== 'vertical' && medias.length > 0 && medias.length <= 2;
    const alignLeft = horizontal && placement === 'left';
    const alignRight = horizontal && placement === 'right';
    const radiusSize = !header && vertical && medias.length === 1 ? radius : 0;

    const maxWidth = width
      ? `${width}px`
      : medias.length === 2 && !vertical
        ? '96px'
        : medias.length === 1 && !vertical
          ? '128px'
          : 'unset';
    const maxHeight = `${height || 64}px`;

    const titleJSX = title ? (
      <View className="rm-card-title">
        <RMTypography className="subheading" block>
          <View className="rm-card-title-text">{title}</View>
        </RMTypography>
      </View>
    ) : (
      ''
    );

    const contentJSX = content ? (
      <View className="rm-card-content">
        <RMTypography className="caption" block>
          <View
            className={classNames({
              'rm-card-content-text': true,
              lessContent: medias.length === 1 && title,
            })}
          >
            {content}
          </View>
        </RMTypography>
      </View>
    ) : (
      ''
    );

    const mediasJSX =
      medias && medias.length > 0 ? (
        <View className="rm-card-medias">
          {medias.slice(0, 3).map(item => (
            <Image
              key={item}
              style={{
                borderTopRightRadius: `${radiusSize}px`,
                borderTopLeftRadius: `${radiusSize}px`,
                maxWidth,
                maxHeight,
              }}
              className="rm-card-media"
              mode="aspectFill"
              src={item}
            />
          ))}
        </View>
      ) : (
        ''
      );

    return (
      <View
        style={style}
        className={classNames({ 'rm-card': true, raised, vertical, horizontal: !vertical })}
        onClick={this.handleClick}
      >
        <View className="rm-card-header">
          {this.props.renderHeader}

          {header && (
            <View className="rm-card-header-title">
              <RMTypography className="body2" block>
                {header}
              </RMTypography>
            </View>
          )}
          <View className="rm-card-header-countdown">{this.props.renderCountDown}</View>
        </View>

        <View
          className={classNames({
            'rm-card-body': true,
            noMedias: medias.length <= 0,
            multiMedias: medias.length > 2,
            alignLeft,
            alignRight,
          })}
        >
          {vertical && medias.length > 2 && mediasJSX}
          {content && !vertical && medias.length >= 2 && titleJSX}
          <View className="rm-card-container">
            {(alignLeft || (vertical && medias.length <= 2)) && mediasJSX}
            <View className="rm-card-summary">
              {(!content || medias.length <= 1 || vertical) && titleJSX}
              {contentJSX}
            </View>
            {alignRight && mediasJSX}
          </View>
          {!vertical && medias.length > 2 && mediasJSX}
        </View>

        <View className="rm-card-footer">{this.props.renderActions}</View>
      </View>
    );
  }
}

RMCard.propTypes = {
  /**
   */
  header: PropTypes.string,
  /**
   */
  title: PropTypes.string,
  /**
   */
  content: PropTypes.string,
  /**
   */
  radius: PropTypes.number,
  medias: PropTypes.array,
  raised: PropTypes.bool,
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
  customStyle: PropTypes.object,
  onClick: PropTypes.func,
  renderHeader: PropTypes.element,
  renderCountDown: PropTypes.element,
  renderActions: PropTypes.element,
  MediaProps: PropTypes.shape({
    height: PropTypes.number,
    width: PropTypes.number,
    placement: PropTypes.oneOf(['left', 'right']),
  }),
};

RMCard.defaultProps = {
  medias: [],
  raised: false,
  radius: 0,
  orientation: 'horizontal',
  renderCountDown: null,
  renderActions: null,
  customStyle: {},
  onClick: () => {},
  MediaProps: {
    height: 64,
    placement: 'right',
  },
};

export default RMCard;
