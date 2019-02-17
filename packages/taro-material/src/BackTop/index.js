import Taro, { Component } from '@tarojs/taro';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { View } from '@tarojs/components';

import RMButton from '../Button';
import RMIcon from '../Icon';
import theme from '../styles/theme';
import './BackTop.scss';

class BackTop extends Component {
  state = {
    visibility: false,
    // isIPhoneX: false,
  };

  componentWillMount() {}

  componentDidMount() {
    const { onAddPageScroll } = this.props;

    if (onAddPageScroll) {
      onAddPageScroll(this.handlePageScroll.bind(this));
    }

    // const curEnv = Taro.getEnv()

    // if (curEnv === Taro.ENV_TYPE.WEAPP && Taro.getSystemInfoSync().model.indexOf('iPhone X') >= 0) {
    //   this.setState({ isIPhoneX: true })
    // }
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  handlePageScroll(params) {
    const { visibilityHeight } = this.props;
    this.setState({
      visibility: params.scrollTop >= visibilityHeight,
    });
  }

  handleScrollTop() {
    const { onClick } = this.props;
    Taro.pageScrollTo({
      scrollTop: 0,
      duration: 500,
    });
    if (onClick) {
      onClick();
    }
  }

  render() {
    const { container, size, customStyle, bottom, right } = this.props;
    const { visibility /*, isIPhoneX */ } = this.state;
    // const bottomPx = `${isIPhoneX ? bottom + 34 : bottom}px`;
    const style = {
      ...customStyle,
      bottom: `${bottom}px`,
      right: `${right}px`,
    };
    return (
      <View
        className={classNames({
          'container-window': container === 'window',
          visibility,
        })}
        style={style}
      >
        <RMButton
          onClick={this.handleScrollTop.bind(this)}
          color="primary"
          variant="fab"
          size={size}
        >
          <RMIcon fontSize="inherit" color="inherit">
            arrow_upward
          </RMIcon>
        </RMButton>
      </View>
    );
  }
}

BackTop.defaultProps = {
  visibilityHeight: 300,
  container: 'window',
  size: 'medium',
  onClick: () => {},
  onAddPageScroll: () => {},
  customStyle: {},
  bottom: theme.spacing.unit * 2,
  right: theme.spacing.unit * 2,
};

BackTop.propTypes = {
  /**
   * show BackTop button when scroll to this height
   */
  visibilityHeight: PropTypes.number,

  /**
   * callback function when click BackTop button
   */
  onClick: PropTypes.func,

  /**
   * the default value is window
   */
  container: PropTypes.string,

  size: PropTypes.oneOf(['medium', 'normal', 'small']),

  onAddPageScroll: PropTypes.func,

  customStyle: PropTypes.object,

  bottom: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  right: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default BackTop;
