import Taro, { Component } from '@tarojs/taro';
import { RadioGroup } from '@tarojs/components';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class RMRadioGroup extends Component {
  render() {
    const { name, value, onChange, customStyle } = this.props;

    return (
      <RadioGroup style={customStyle} onChange={this.props.onChange}>
        {this.props.children}
      </RadioGroup>
    );
  }
}

RMRadioGroup.propTypes = {
  value: PropTypes.object,
  onChange: PropTypes.func,
  customStyle: PropTypes.object,
  name: PropTypes.string,
};

RMRadioGroup.defaultProps = {
  customStyle: {},
  value: null,
  name: Date.now().toString(36),
  onChange: () => {},
};

export default RMRadioGroup;
