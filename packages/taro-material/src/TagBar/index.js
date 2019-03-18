import Taro, { Component } from '@tarojs/taro';
import { View, ScrollView } from '@tarojs/components';
import PropTypes from 'prop-types';

import RMTag from '../Tag';
import RMTypography from '../Typography';

import theme from '../styles/theme';

import './index.scss';

class RMTagBar extends Component {
  state = {
    scrollTop: 0,
    scrollbar: { opacity: 1, visibility: 'visible', _height: 'auto' },
    valueBar: { opacity: 0, visibility: 'hidden', _height: 'auto' },
  };

  scrollbarRef = node => (this.scrollbarRefEle = node);

  valueBarRef = node => (this.valueBarRefEle = node);

  componentDidMount() {
    const { onAddPageScroll } = this.props;
    if (onAddPageScroll) {
      onAddPageScroll(this.handlePageScroll.bind(this));
    }

    // setTimeout(() => {
    this.scrollbarRefEle
      .boundingClientRect(rect => {
        this.setState({
          top: rect.top,
          scrollbar: {
            ...rect,
            opacity: 1,
            visibility: 'visible',
            height: rect.height,
            _height: 'auto',
          },
        });
      })
      .exec();
    this.valueBarRefEle
      .boundingClientRect(rect => {
        this.setState({
          valueBar: {
            ...rect,
            opacity: 0,
            visibility: 'hidden',
            height: rect.height,
            _height: 'auto',
          },
        });
      })
      .exec();
    // }, 1000);
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  handlePageScroll(params) {
    const { scrollTop } = params;
    const { scrollbar, valueBar, top } = this.state;
    const { offsetTop } = this.props;

    let comps = {};
    if (scrollTop - offsetTop < scrollbar.height - valueBar.height) {
      comps = {
        scrollbar: {
          ...scrollbar,
          opacity: 1,
          visibility: 'visible',
          _height: scrollbar.height,
        },
        valueBar: {
          ...valueBar,
          opacity: 0,
          visibility: 'hidden',
          _height: 0,
        },
      };
    } else if (scrollTop - offsetTop < scrollbar.height) {
      const h = scrollTop - offsetTop - scrollbar.height + valueBar.height;
      const opacity = h / valueBar.height;
      comps = {
        scrollbar: {
          ...scrollbar,
          opacity: 1 - opacity,
          visibility: 'visible',
          _height: scrollbar.height - h,
        },
        valueBar: {
          ...valueBar,
          opacity,
          visibility: 'visible',
          _height: h,
        },
      };
    } else if (scrollTop - offsetTop >= scrollbar.height) {
      comps = {
        scrollbar: {
          ...scrollbar,
          opacity: 0,
          visibility: 'hidden',
          _height: scrollbar.height - valueBar.height,
        },
        valueBar: {
          ...valueBar,
          opacity: 1,
          visibility: 'visible',
          _height: valueBar.height,
        },
      };
    }

    let other = {};
    if (scrollTop >= 0) {
      other = {
        scrollTop,
      };
    }

    this.setState({
      ...comps,
      ...other,
    });
  }

  handleClick(name, option, e) {
    const { values, onChange } = this.props;
    const { value, disabled } = option;

    if (disabled) {
      return;
    }

    onChange &&
      onChange(
        {
          ...values,
          [name]: value,
        },
        e,
      );
  }

  handleReset(name, e) {
    const { values, onChange } = this.props;

    const rs = {
      ...values,
    };

    delete rs[name];

    onChange && onChange(rs, e);
  }

  getValuesText() {
    const { values, data } = this.props;

    const text = [];
    Object.keys(values).forEach(key => {
      const d = data.find(item => item.name === key);
      if (d) {
        const op = d.options.find(option => option.value === values[key]);
        if (op) {
          text.push(op.label);
        }
      }
    });

    return text.join(' · ') || '暂无过滤条件';
  }

  render() {
    const { data, values, offsetTop, color, customStyle } = this.props;
    const { scrollbar, valueBar } = this.state;

    const valuesText = this.getValuesText();

    const _color = theme.palette[color];
    const valColor = _color ? _color.main : color;
    const labelColor = _color ? _color.contrastText : color;

    return (
      <View className="tagbar">
        <View
          ref={this.scrollbarRef}
          style={{
            ...customStyle,
            opacity: scrollbar.opacity,
            // height: `${scrollbar._height}px`,
            visibility: scrollbar.visibility,
          }}
        >
          {data.map((item, index) => (
            <ScrollView key={index} scrollX scrollWithAnimation style={{ width: 'auto' }}>
              <View className="scrollbar">
                <View onClick={this.handleReset.bind(this, item.name)} className="tag">
                  {!values[item.name] ? (
                    <RMTag circle color={color} size="small" active block>
                      {item.label}
                    </RMTag>
                  ) : (
                    <RMTypography color={labelColor} className="body1" block>
                      {item.label}
                    </RMTypography>
                  )}
                </View>

                {item.options.map((option, key) => {
                  const active = !option.disabled && values[item.name] === option.value;

                  return (
                    <View
                      onClick={this.handleClick.bind(this, item.name, option)}
                      className="tag"
                      key={key}
                    >
                      {active ? (
                        <RMTag circle color={color} size="small" active block>
                          {option.label}
                        </RMTag>
                      ) : (
                        <RMTypography color={labelColor} className="body1" block>
                          {option.label}
                        </RMTypography>
                      )}
                    </View>
                  );
                })}
              </View>
            </ScrollView>
          ))}
        </View>
        <View
          className="vals"
          ref={this.valueBarRef}
          style={{
            ...customStyle,
            opacity: valueBar.opacity,
            height: `${valueBar._height}px`,
            visibility: valueBar.visibility,
            top: `${offsetTop}px`,
          }}
        >
          <RMTypography color={valColor} className="body2" block>
            {valuesText}
          </RMTypography>
        </View>
      </View>
    );
  }
}

RMTagBar.propTypes = {
  onChange: PropTypes.func,
  onAddPageScroll: PropTypes.func,
  data: PropTypes.array,
  values: PropTypes.object,
  offsetTop: PropTypes.number,
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  color: PropTypes.oneOf([
    'default',
    'inherit',
    'primary',
    'secondary',
    'error',
    'success',
    'warning',
    'progress',
  ]),
};

RMTagBar.defaultProps = {
  onChange: () => {},
  data: [],
  values: {},
  onAddPageScroll: () => {},
  offsetTop: 0,
  color: 'primary',
  customStyle: {},
};

export default RMTagBar;
