import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import PropTypes from 'prop-types';

import RMIcon from '../Icon';
import RMTypography from '../Typography';
import RMDrawer from '../Drawer';
import RMFilters from '../Filters';
import RMDropdown from '../Dropdown';

import theme from '../styles/theme';

import './ToolBar.scss';

const cloneDeep = o => JSON.parse(JSON.stringify(o));
const isEqual = (array1 = [], array2 = []) => {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (!(array1[i].label === array2[i].label && array1[i].value === array2[i].value)) {
      return false;
    } else if (Array.isArray(array1[i].data) && Array.isArray(array2[i].data)) {
      const r = isEqual(array1[i].data, array2[i].data);
      if (!r) {
        return false;
      }
    }
  }
  return true;
};

class ToolBar extends Component {
  constructor(props) {
    super(props);

    const option = props.sorts.filter(item => item.active)[0] || props.sorts[0];
    const value = option ? option.value : '';
    const filterData = cloneDeep(props.filters);
    const selectedFilters = filterData
      .map(item => {
        const { label, val, data } = item;
        const activeTag = data.filter(d => d.active);
        return {
          label,
          value: val,
          data: cloneDeep(activeTag),
        };
      })
      .filter(item => item.data.length > 0);

    this.state = {
      filterData,
      expanded: false,
      value,
      show: false,
      sorts: props.sorts,
      selectedFilters,
    };
  }

  refDrawer = node => (this.drawer = node);

  componentWillReceiveProps(nextProps) {
    if (!isEqual(this.state.filterData, nextProps.filters)) {
      this.setState({
        filterData: cloneDeep(nextProps.filters),
      });
    }
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  handleTitleClick() {
    this.setState({
      expanded: !this.state.expanded,
    });
  }

  handleChange = value => {
    const { sorts } = this.props;
    sorts.forEach(item => {
      if (item.value === value) {
        item.active = true;
      } else {
        item.active = false;
      }
    });

    this.setState(
      {
        value,
        expanded: false,
      },
      () => {
        this.onChange();
      },
    );
  };

  handlePriorities(index) {
    const { sorts } = this.props;
    let value = null;
    sorts.forEach((item, i) => {
      if (i === index) {
        item.active = true;
        value = item.value;
      } else {
        item.active = false;
      }
    });
    this.setState(
      {
        value,
        expanded: false,
      },
      () => {
        this.onChange();
      },
    );
  }

  handleSiftingClick() {
    this.setState({
      show: true,
      expanded: false,
    });
  }

  handleFilterChange(e) {
    this.setState({
      filterData: e,
    });
  }

  handleFilterOk(e) {
    this.drawer.animHide();
    this.setState(
      {
        selectedFilters: e,
      },
      () => {
        this.onChange();
      },
    );
  }

  handleFilterReset() {
    const { filters } = this.props;
    this.setState({
      filterData: cloneDeep(filters),
    });
  }

  handleDrawerClose() {
    this.setState({
      show: false,
    });
  }

  onChange() {
    const { onChange, sorts } = this.props;
    const data = {
      sort: sorts.filter(item => item.active)[0],
      filters: this.state.selectedFilters,
    };
    onChange(data);
  }

  render() {
    const { filterData, sorts, expanded, value, show, selectedFilters } = this.state;

    const normalItems = sorts.filter(item => !item.priority);
    const option = normalItems.filter(item => item.value === value)[0] || {};
    const multiLength = selectedFilters.reduce((r, next) => r + next.data.length, 0);

    return (
      <View className="root">
        <View className="header">
          <View onClick={this.handleTitleClick} className="title">
            <View className="label">
              <RMTypography
                color={option.active ? theme.palette.primary.main : 'default'}
                className="body2"
              >
                {option.label || '排序'}
              </RMTypography>
            </View>
            <RMIcon color={option.active ? 'primary' : 'inherit'} block fontSize="inherit">
              {expanded ? 'keyboard_arrow_down' : 'keyboard_arrow_up'}
            </RMIcon>
          </View>

          {sorts.map((item, index) => {
            const color = item.active ? theme.palette.primary.main : 'default';
            return item.priority ? (
              <View
                key={item.value || index}
                className="priorities"
                onClick={this.handlePriorities.bind(this, index)}
              >
                <RMTypography color={color} className="body2">
                  {item.label}
                </RMTypography>
              </View>
            ) : null;
          })}

          <View className="title">{this.props.renderTools}</View>

          <View onClick={this.handleSiftingClick} className="title">
            <View className="label">
              <RMTypography
                color={multiLength > 0 ? theme.palette.primary.main : 'default'}
                className="body2"
              >
                筛选
                {multiLength ? `(${multiLength})` : ''}
              </RMTypography>
            </View>
            <RMIcon color={multiLength > 0 ? 'primary' : ''} block fontSize="inherit">
              {'filter_list'}
            </RMIcon>

            {/* <RMTag active={true} circle={true} color='default' size='small'>5</RMTag> */}
          </View>
        </View>
        {expanded && <RMDropdown options={normalItems} value={value} onClick={this.handleChange} />}
        <RMDrawer
          ref={this.refDrawer}
          onClose={this.handleDrawerClose}
          show={show}
          width={320}
          right
        >
          <RMFilters
            data={filterData}
            onOk={this.handleFilterOk}
            onReset={this.handleFilterReset}
            onChange={this.handleFilterChange}
          />
        </RMDrawer>
      </View>
    );
  }
}

ToolBar.propTypes = {
  onChange: PropTypes.func,
  filters: PropTypes.array,
  sorts: PropTypes.array,
  renderTools: PropTypes.element,
};

ToolBar.defaultProps = {
  onChange: () => {},
  filters: [],
  sorts: [],
  renderTools: null,
};

export default ToolBar;
