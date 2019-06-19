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
    onClick && onClick(e.target.value, e, ...arguments);
  }

  render() {
    const { header, title, content, medias = [], actions = [], customStyle } = this.props;

    const style = {
      width: '100%',
      ...customStyle,
    };

    const titleJSX = (
      <View className="rm-card-title">
        <RMTypography className="subheading" block>
          <View className="rm-card-title-text">{title}</View>
        </RMTypography>
      </View>
    );

    const mediasJSX = (
      <View className="rm-card-medias">
        {medias.slice(0, 3).map(item => (
          <Image
            key={item}
            style={{
              maxWidth: medias.length > 2 ? '33%' : medias.length === 2 ? '96px' : '128px',
            }}
            className="rm-card-media"
            mode="aspectFill"
            src={item}
          />
        ))}
      </View>
    );

    const alignLeft = medias.length < 2 && Math.random() < 0.24;

    return (
      <View className="rm-card" style={style}>
        <View className="rm-card-header">
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
            alignLeft,
            alignRight: !alignLeft && medias.length <= 2 && medias.length > 0,
          })}
        >
          {content && medias.length >= 2 && titleJSX}
          <View className="rm-card-container">
            {medias.length <= 2 && alignLeft && mediasJSX}
            <View className="rm-card-summary">
              {(!content || medias.length <= 1) && titleJSX}
              <View className="rm-card-content">
                <RMTypography className="caption" block>
                  <View className="rm-card-content-text">{content}</View>
                </RMTypography>
              </View>
            </View>
            {medias.length <= 2 && !alignLeft && mediasJSX}
          </View>
          {medias.length > 2 && mediasJSX}
        </View>

        <View className="rm-card-footer">{actionsJSX}</View>
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
  medias: PropTypes.array,

  customStyle: PropTypes.object,
  onClick: PropTypes.func,

  renderCountDown: PropTypes.element,
  renderActions: PropTypes.element,
};

RMCard.defaultProps = {
  medias: [],
  renderCountDown: null,
  renderActions: null,
  customStyle: {},
  onClick: () => {},
};

export default RMCard;
