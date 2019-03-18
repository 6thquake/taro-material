import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import PropTypes from 'prop-types';

import RMIcon from '../Icon';
import RMTypography from '../Typography';
import RMButton from '../Button';

import './Panel.scss';

class RMPanel extends Component {
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
    const { title, note, extra = ' ', actions, expandable, customStyle } = this.props;
    return (
      <View className="root" style={customStyle}>
        <View onClick={this.handleClick} className="header">
          <View className="left">
            <View className="name">
              {title ? (
                <RMTypography block className="subheading">
                  {title}
                </RMTypography>
              ) : (
                this.props.renderTitle
              )}
            </View>
            <View className="company">
              {note ? (
                <RMTypography block className="caption">
                  {note}
                </RMTypography>
              ) : (
                this.props.renderNote
              )}
            </View>
          </View>
          <View className="right">
            <View className="right-box">
              <View className="extra">
                {extra ? (
                  <RMTypography className="caption">{extra}</RMTypography>
                ) : (
                  this.props.renderExtra
                )}
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
            {this.props.renderActions}
          </View>
        )}
      </View>
    );
  }
}

RMPanel.defaultProps = {
  open: false,
  title: null,
  note: null,
  expandable: false,
  extra: null,
  onAction: () => {},
  actions: null,
  customStyle: {},
};

RMPanel.propTypes = {
  open: PropTypes.bool,
  title: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  note: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  extra: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  renderTitle: PropTypes.element,
  renderNote: PropTypes.element,
  renderExtra: PropTypes.element,
  renderActions: PropTypes.element,
  expandable: PropTypes.bool,
  action: PropTypes.array,
  customStyle: PropTypes.object,
};
export default RMPanel;
