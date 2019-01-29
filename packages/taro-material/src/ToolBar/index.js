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
const isEqual = (array1, array2) => {
  if (array1 === array2) {
    return true;
  }
  if (!(array1 && array2)) {
    return false;
  }

  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (!(array1[i].label === array2[i].label && array1[i].value === array2[i].value)) {
      return false;
    } else if ((!array1[i].data && array2[i].data) || (array1[i].data && !array2[i].data)) {
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
  state = {
    expanded: false,
    show: false,
    value: '',
  };

  constructor(props) {
    super(props);
    this.init(props.filter, props.sorts);
  }

  init() {
    const { filters, sorts } = this.props;

    const _filters = cloneDeep(filters);
    const _sorts = cloneDeep(sorts);

    const priorityFilters = [];
    const selectedFilters = [];
    _filters.forEach((filter, i) => {
      const { label, value, data } = filter;
      const datas = [];
      data.forEach((item, j) => {
        if (item.priority) {
          item.i = i;
          item.j = j;
          priorityFilters.push(item);
        }
        if (item.active) {
          datas.push(item);
        }
      });

      if (datas.length > 0) {
        selectedFilters.push({
          label,
          value,
          data: datas,
        });
      }
    });

    const prioritySorts = [];
    const normalSorts = [];
    let value = '';
    _sorts.forEach(item => {
      if (item.priority) {
        prioritySorts.push(item);
      } else {
        normalSorts.push(item);
      }
      if (item.active) {
        value = item.value;
      }
    });

    this.setState({
      value,
      prioritySorts,
      normalSorts,
      priorityFilters,
      selectedFilters,
    });
  }

  refDrawer = node => (this.drawer = node);

  refFilter = node => (this.filter = node);

  componentWillReceiveProps(nextProps) {
    const { filter, sorts } = this.props;
    if (!isEqual(nextProps.filter, filter) || !isEqual(nextProps.sorts, sorts)) {
      this.init(nextProps.filter, nextProps.sorts);
    }
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  handleTitleClick() {
    const { expanded } = this.state;
    this.setState({
      expanded: !expanded,
    });
  }

  handleChange = value => {
    const { normalSorts, prioritySorts } = this.state;
    normalSorts.forEach(item => {
      if (item.value === value) {
        item.active = true;
      } else {
        item.active = false;
      }
    });
    prioritySorts.forEach(item => {
      item.active = false;
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
    const { normalSorts, prioritySorts } = this.state;
    let value = null;
    prioritySorts.forEach((item, i) => {
      if (i === index) {
        item.active = true;
        value = item.value;
      } else {
        item.active = false;
      }
    });
    normalSorts.forEach(item => {
      item.active = false;
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
    const priorityFilters = [];
    e.forEach((filter, i) => {
      filter.data.forEach((item, j) => {
        if (item.priority) {
          item.i = i;
          item.j = j;
          priorityFilters.push(item);
        }
      });
    });
    this.setState({
      priorityFilters,
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

  handleFilterReset(e) {
    this.setState(
      {
        selectedFilters: e,
      },
      () => {
        this.onChange();
      },
    );
  }

  onChange() {
    const { onChange, sorts } = this.props;
    const { selectedFilters, value } = this.state;
    const data = {
      sort: sorts.filter(item => item.value === value)[0],
      filters: selectedFilters,
    };
    onChange(data);
  }

  handleFilters(i, j) {
    this.filter.handleClick(i, j, true);
  }

  handleDrawerClose() {
    this.setState({
      show: false,
    });
  }

  handleDropDownClose = () => {
    this.setState({
      expanded: false,
    });
  };
  render() {
    const { filters } = this.props;

    const { expanded, value, show } = this.state;
    const {
      selectedFilters = [],
      priorityFilters = [],
      normalSorts = [],
      prioritySorts = [],
    } = this.state;

    const multiLength = selectedFilters.reduce((r, next) => r + next.data.length, 0);
    const selectedSort = normalSorts.filter(item => item.value === value)[0] || {
      label: '排序',
      active: false,
      value,
    };

    return (
      <View className="root">
        <View className="header">
          <View onClick={this.handleTitleClick} className="title">
            <View className="label">
              <RMTypography
                color={selectedSort.active ? theme.palette.primary.main : 'default'}
                className="body2"
              >
                {selectedSort.label}
              </RMTypography>
            </View>
            <RMIcon color={selectedSort.active ? 'primary' : 'inherit'} block fontSize="inherit">
              {expanded ? 'keyboard_arrow_down' : 'keyboard_arrow_up'}
            </RMIcon>
          </View>

          {prioritySorts.map((item, index) => {
            const color = item.active ? theme.palette.primary.main : 'default';
            const className = item.active ? 'body2' : 'body1';
            return (
              <View
                key={item.value || index}
                className="priorities"
                onClick={this.handlePriorities.bind(this, index)}
              >
                <RMTypography color={color} className={className}>
                  {item.label}
                </RMTypography>
              </View>
            );
          })}

          <View className="title">{this.props.renderTools}</View>

          {priorityFilters.map(item => {
            const color = item.active ? theme.palette.primary.main : 'default';
            const className = item.active ? 'body2' : 'body1';
            return (
              <View
                key={item.value || `${item.i}-${item.j}`}
                className="priorities"
                onClick={this.handleFilters.bind(this, item.i, item.j)}
              >
                <RMTypography color={color} className={className}>
                  {item.label}
                </RMTypography>
              </View>
            );
          })}

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
          </View>
        </View>
        {
          <RMDropdown
            isOpened={expanded}
            options={normalSorts}
            onClose={this.handleDropDownClose}
            value={value}
            onChange={this.handleChange}
          />
        }
        <RMDrawer
          ref={this.refDrawer}
          show={show}
          width={320}
          right
          onClose={this.handleDrawerClose}
        >
          <RMFilters
            data={filters}
            onOk={this.handleFilterOk}
            onReset={this.handleFilterReset}
            onChange={this.handleFilterChange}
            ref={this.refFilter}
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
