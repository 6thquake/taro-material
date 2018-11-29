import Taro, { Component } from '@tarojs/taro';
import { View, Radio, Label } from '@tarojs/components';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import RMTypography from '../Typography';

import theme from '../styles/theme';

import '../Checkbox/index.scss';

class RMRadio extends Component {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  handleChange(e) {
    const { value, checked, onChange } = this.props;

    onChange && onChange(!checked /* e.target.value */, value, e);
  }

  render() {
    const { value, color, disabled, checked, customStyle, className, name } = this.props;
    return (
      <Label
        className={classNames({
          'at-selection': true,
          'at-selection--disabled': disabled,
          [color]: true,
        })}
        style={customStyle}
        for={name}
        // onClick={this.handleChange.bind(this)}
      >
        <Radio
          className="at-selection__selection"
          value={value}
          checked={checked}
          disabled={disabled}
          style={{ opacity: 0 }}
          name={name}
        />

        <View className="at-selection__container">
          <View
            className={classNames({
              radio: true,
              checked,
            })}
          >
            {checked && <View className="point" />}
          </View>
        </View>
        {
          <RMTypography className="subheading" color="inherit" block>
            {this.props.children}
          </RMTypography>
        }

        <View className="at-selection__mask" />
      </Label>
    );
  }
}

RMRadio.propTypes = {
  value: PropTypes.object,
  color: PropTypes.oneOf([
    'default',
    'primary',
    'secondary',
    'error',
    'success',
    'warning',
    'progress',
  ]),
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  customStyle: PropTypes.object,
  required: PropTypes.bool,
  name: PropTypes.string,
};

RMRadio.defaultProps = {
  customStyle: {},
  value: null,
  color: 'primary',
  disabled: false,
  checked: false,
  name: Math.floor(Math.random() * Math.pow(10, 12)),
  onChange: () => {},
};

export default RMRadio;
