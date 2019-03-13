import Taro, { Component } from '@tarojs/taro';
import { View, ScrollView } from '@tarojs/components';
import PropTypes from 'prop-types';

import RMTag from '../Tag';
import RMTypography from '../Typography';

import theme from '../styles/theme';

import './index.scss';

class TagBar extends Component {
  state = {
    scrollTop: 0,
    scrollbar: { opacity: 1, _height: 'auto' },
    valueBar: { opacity: 0, _height: 'auto' },
  };

  scrollbarRef = node => (this.scrollbarRefEle = node);

  valueBarRef = node => (this.valueBarRefEle = node);

  componentDidMount() {
    const { onAddPageScroll } = this.props;
    if (onAddPageScroll) {
      onAddPageScroll(this.handlePageScroll.bind(this));
    }

    this.scrollbarRefEle
      .boundingClientRect(rect => {
        this.setState({
          top: rect.top,
          scrollbar: { ...rect, opacity: 1, _height: rect.height },
        });
      })
      .exec();
    this.valueBarRefEle
      .boundingClientRect(rect => {
        this.setState({ valueBar: rect, opacity: 0, _height: rect.height });
      })
      .exec();
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
          _height: scrollbar.height,
        },
        valueBar: {
          ...valueBar,
          opacity: 0,
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
          _height: scrollbar.height - h,
        },
        valueBar: {
          ...valueBar,
          opacity,
          _height: h,
        },
      };
    } else if (scrollTop - offsetTop >= scrollbar.height) {
      comps = {
        scrollbar: {
          ...scrollbar,
          opacity: 0,
          _height: scrollbar.height - valueBar.height,
        },
        valueBar: {
          ...valueBar,
          opacity: 1,
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

  render() {
    const { data, values, offsetTop, color } = this.props;
    const { scrollbar, valueBar } = this.state;
    const valText = Object.values(values).join(' · ') || '暂无过滤条件';
    const valColor = theme.palette[color] ? theme.palette[color].main : color;

    return (
      <View className="tagbar">
        <View
          ref={this.scrollbarRef}
          style={{
            opacity: scrollbar.opacity,
            height: `${scrollbar._height}px`,
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
                    <RMTypography color="default" className="body1" block>
                      {item.label}
                    </RMTypography>
                  )}
                </View>

                {item.options.map((option, key) => {
                  const active =
                    !option.disabled && values[item.name] && values[item.name] === option.value;

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
                        <RMTypography color="default" className="body1" block>
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
            opacity: valueBar.opacity,
            height: `${valueBar._height}px`,
            minHeight: '24px',
            position: 'fixed',
            top: `${offsetTop}px`,
            width: '100%',
          }}
        >
          <RMTypography color={valColor} className="body2" block>
            {valText}
          </RMTypography>
        </View>
      </View>
    );
  }
}

TagBar.propTypes = {
  onChange: PropTypes.func,
  onAddPageScroll: PropTypes.func,
  data: PropTypes.array,
  values: PropTypes.object,
  offsetTop: PropTypes.number,

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

TagBar.defaultProps = {
  onChange: () => {},
  data: [],
  values: {},
  onAddPageScroll: () => {},
  offsetTop: 0,
  color: 'primary',
};

export default TagBar;
