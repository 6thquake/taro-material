import Taro, { Component } from '@tarojs/taro';
import { CheckboxGroup, Checkbox, View } from '@tarojs/components';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import RMIcon from '../Icon';
import RMTypography from '../Typography';

import '../Checkbox/index.scss';

class RMCheckboxGroup extends Component {
  handleChange(e) {
    const { name, disabled, onChange } = this.props;

    !disabled && onChange && onChange(e.detail.value, name);
  }

  render() {
    const { customStyle, options, vertical } = this.props;

    return (
      <CheckboxGroup
        style={customStyle}
        onChange={this.handleChange}
        className={classNames({ 'checkbox-group': true, vertical })}
      >
        {options &&
          options.map(item => {
            const { color, value, label, icon } = item;
            const checked = this.props.value && this.props.value.indexOf(value) !== -1;
            const disabled = this.props.disabled || item.disabled;
            return (
              <View
                className={classNames({
                  'at-selection': true,
                  'at-selection--disabled': disabled,
                  [color]: true,
                })}
                style={customStyle}
                // onClick={this.handleChange.bind(this)}
                key={value}
              >
                <View className="at-selection__container">
                  <View
                    className={classNames({
                      checkbox: true,
                      checked,
                    })}
                  >
                    {checked && (
                      <RMIcon fontSize="inherit" color="inherit" block>
                        {icon}
                      </RMIcon>
                    )}
                  </View>
                </View>
                {
                  <RMTypography className="subheading" color="inherit" block>
                    {label}
                  </RMTypography>
                }
                <Checkbox
                  className="at-selection__selection"
                  value={value}
                  checked={checked}
                  disabled={disabled}
                  style={{ opacity: 0 }}
                  // onChange={this.handleChange.bind(this)}
                />
                <View className="at-selection__mask" />
              </View>
            );
          })}
      </CheckboxGroup>
    );
  }
}

RMCheckboxGroup.propTypes = {
  vertical: PropTypes.bool,
  disabled: PropTypes.bool,
  value: PropTypes.object,
  onChange: PropTypes.func,
  customStyle: PropTypes.object,
  name: PropTypes.string,
};

RMCheckboxGroup.defaultProps = {
  vertical: false,
  disabled: false,
  customStyle: {},
  value: null,
  name: Date.now().toString(36),
  onChange: () => {},
};

export default RMCheckboxGroup;
