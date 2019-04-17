import Taro, { Component } from '@tarojs/taro';
import { RadioGroup, Radio, Label, View } from '@tarojs/components';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import RMTypography from '../Typography';

import '../Checkbox/index.scss';

class RMRadioGroup extends Component {
  handleChange(e) {
    const { name, disabled, onChange } = this.props;

    !disabled && onChange && onChange(e.detail.value, name);
  }

  render() {
    const { customStyle, options } = this.props;

    return (
      <RadioGroup style={customStyle} onChange={this.handleChange}>
        {options &&
          options.map(item => {
            const { color, name, value, label } = item;
            const checked = value === this.props.value;
            const disabled = this.props.disabled || item.disabled;
            return (
              <Label
                className={classNames({
                  'at-selection': true,
                  'at-selection--disabled': disabled,
                  [color]: true,
                })}
                // onClick={this.handleChange.bind(this)}
                for={name || value}
                key={value}
              >
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
                    {label}
                  </RMTypography>
                }

                <Radio
                  className="at-selection__selection"
                  value={value}
                  checked={checked}
                  disabled={disabled}
                  style={{ opacity: 0 }}
                  name={name || value}
                  // onChange={this.handleChange.bind(this)}
                />
                <View className="at-selection__mask" />
              </Label>
            );
          })}
      </RadioGroup>
    );
  }
}

RMRadioGroup.propTypes = {
  disabled: PropTypes.bool,
  value: PropTypes.object,
  onChange: PropTypes.func,
  customStyle: PropTypes.object,
  name: PropTypes.string,
};

RMRadioGroup.defaultProps = {
  disabled: false,
  customStyle: {},
  value: null,
  name: Date.now().toString(36),
  onChange: () => {},
};

export default RMRadioGroup;
