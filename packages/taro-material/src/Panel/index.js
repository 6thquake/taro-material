import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import PropTypes from 'prop-types';

import RMIcon from '../Icon';
import RMTypography from '../Typography';
import RMButton from '../Button';

import './Panel.scss';

class Panel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: props.open,
    };
  }

  componentDidShow() {}

  componentDidHide() {}

  handleClick = id => {
    const { expanded } = this.state;
    this.setState({
      expanded: !expanded,
    });
  };

  handleAction(name) {
    const { onAction } = this.props;
    onAction && onAction(name);
  }

  render() {
    const { expanded } = this.state;
    const { title, subheading, extra, actions, expandable } = this.props;
    return (
      <View className="root">
        <View onClick={this.handleClick} className="header">
          <View className="left">
            <View className="name">
              <RMTypography block className="subheading">
                {title}
              </RMTypography>
            </View>
            <View className="company">
              <RMTypography block className="caption">
                {subheading}
              </RMTypography>
            </View>
          </View>
          <View className="right">
            <View className="right-box">
              <View className="extra">
                <RMTypography className="caption">{extra || '2018-02-09'}</RMTypography>
              </View>
              {expandable && (
                <View>
                  <RMIcon block fontSize="inherit">
                    {expanded ? 'keyboard_arrow_down' : 'keyboard_arrow_up'}
                  </RMIcon>
                </View>
              )}
            </View>
          </View>
        </View>
        {(!expandable || expanded) && <View className="body">{this.props.children}</View>}
        {(!expandable || expanded) && (
          <View className="footer">
            {actions.map(item => {
              const { name, label, size = 'small', variant, color } = item;
              return (
                <View key={name} className="action">
                  <RMButton
                    size={size}
                    variant={variant}
                    color={color}
                    onClick={this.handleAction.bind(this, name)}
                  >
                    <View className="button">{label || name}</View>
                  </RMButton>
                </View>
              );
            })}
          </View>
        )}
      </View>
    );
  }
}

Panel.defaultProps = {
  open: false,
  title: '',
  subheading: '',
  expandable: false,
  extra: '',
  onAction: () => {},
  actions: [],
  // actions: [
  //   {
  //     name: 'cancel',
  //     size: 'small',
  //     variant: 'outlined',
  //     color: 'default',
  //     label: '取消',
  //   },
  //   {
  //     name: 'ok',
  //     size: 'small',
  //     variant: 'contained',
  //     color: 'primary',
  //     label: '确认'
  //   },
  // ]
};
Panel.propTypes = {
  open: PropTypes.bool,
  title: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  subheading: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  extra: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  expandable: PropTypes.bool,
  action: PropTypes.array,
};
export default Panel;
