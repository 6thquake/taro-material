import Taro, { Component } from '@tarojs/taro';
import { View, ScrollView } from '@tarojs/components';
import PropTypes from 'prop-types';

import RMTag from '../Tag';
import RMTypography from '../Typography';
import RMButton from '../Button';

import theme from '../styles/theme';

import './ActionFilter.scss';

const cloneDeep = o => JSON.parse(JSON.stringify(o));

class ActionFilter extends Component {
  constructor(props) {
    super(props);

    this.state.data = props.data;
  }

  componentWillReceiveProps(nextProps) {
    const { data } = this.props;
    if (nextProps.data !== data) {
      this.setState({
        data: nextProps.data,
      });
    }
  }

  handleClick(i, j, immediately) {
    const { onChange } = this.props;
    const { data } = this.state;

    const options = cloneDeep(data);
    const option = options[i];
    if (option.single) {
      option.data.forEach((item, index) => {
        if (index !== j) {
          item.active = false;
        }
      });
    }

    const tag = option.data[j];
    tag.active = !tag.active;

    if (option.required) {
      const ops = option.data.filter(item => item.active);
      if (ops.length <= 0) {
        tag.active = true;
      }
    }

    this.setState(
      {
        data: options,
      },
      () => {
        onChange(cloneDeep(options));
        immediately && this.handleOkClick();
      },
    );
  }

  handleOkClick() {
    const { data: options } = this.state;
    const { onOk } = this.props;

    const selections = options
      .map(item => {
        const { label, value, data } = item;
        const activeTag = data.filter(d => d.active);
        return {
          label,
          value,
          data: cloneDeep(activeTag),
        };
      })
      .filter(item => item.data.length > 0);
    onOk(selections);
  }

  handleResetClick() {
    const { data, onReset, onChange } = this.props;
    const _data = cloneDeep(data);

    const selections = _data
      .map(item => {
        const { label, value } = item;
        const activeTag = item.data.filter(d => d.active);
        return {
          label,
          value,
          data: cloneDeep(activeTag),
        };
      })
      .filter(item => item.data.length > 0);

    this.setState(
      {
        data: _data,
      },
      () => {
        onChange(cloneDeep(_data));
        onReset(selections);
      },
    );
  }

  render() {
    const { data: options } = this.state;
    const tagCustomStyle = {
      borderRadius: `${theme.shape.borderRadius / 2}px`,
      padding: `0 ${theme.spacing.unit}px`,
    };

    const buttonCustomStyle = {
      width: '100%',
      boxShadow: 'none',
      borderRadius: '0px',
    };

    return (
      <View className="root">
        <View className="action-filter">
          <ScrollView scroll-y scrollX={false} style="height: calc(100vh - 48px); width: 100%;">
            {options &&
              options.map((option, i) => {
                const { label, value, data } = option;
                return (
                  <View key={value} className="option">
                    <View className="title">
                      <RMTypography className="body2">{label}</RMTypography>
                    </View>
                    <View className="tags">
                      {data.map((item, j) => (
                        <View
                          onClick={this.handleClick.bind(this, i, j, false)}
                          key={item.value}
                          className="tag"
                        >
                          <RMTag
                            active={false}
                            circle={false}
                            block
                            color={item.active ? 'primary' : 'default'}
                            size="normal"
                            customStyle={tagCustomStyle}
                          >
                            <RMTypography color="inherit" fontSize={12} block>
                              {item.label}
                            </RMTypography>
                          </RMTag>
                        </View>
                      ))}
                      <View className="spacing" />
                    </View>
                  </View>
                );
              })}
          </ScrollView>
        </View>
        <View className="actions">
          <View className="button">
            <RMButton
              color="default"
              variant="text"
              onClick={this.handleResetClick}
              size="normal"
              block
              customStyle={buttonCustomStyle}
            >
              重置
            </RMButton>
          </View>
          <View className="button primary">
            <RMButton
              color="primary"
              variant="contained"
              onClick={this.handleOkClick}
              size="normal"
              block
              customStyle={buttonCustomStyle}
            >
              确定
            </RMButton>
          </View>
        </View>
      </View>
    );
  }
}

ActionFilter.propTypes = {
  onOk: PropTypes.func,
  data: PropTypes.array,
  onChange: PropTypes.func,
  onReset: PropTypes.func,
};

ActionFilter.defaultProps = {
  onOk: () => {},
  onChange: () => {},
  onReset: () => {},
  data: [],
};

export default ActionFilter;
