import theme from '../../../styles/theme';

const navigators = [
  {
    id: 'payment',
    title: '缴费中心',
    icon: 'local_atm',
    color: theme.palette.primary.main,
    shortcut: true,
    path: '../../pages/navigators/index?group=payment',
  },
  {
    id: 'monitor',
    title: '实时监控',
    icon: 'videocam',
    color: theme.palette.primary.main,
    path: '../../pages/navigators/index?group=monitor',
    shortcut: true,
  },
  {
    id: 'bi',
    title: '运营报表',
    icon: 'equalizer',
    color: theme.palette.primary.main,
    path: '../../pages/navigators/index?group=bi',
    shortcut: true,
  },
  {
    id: 'purchase',
    title: '采购',
    color: theme.palette.primary.main,
    icon: 'shopping_cart',
    path: '../../pages/navigators/index?group=purchase',
    shortcut: true,
  },
  {
    id: 'analysis',
    title: '智能分析',
    icon: 'extension',
    color: theme.palette.primary.main,
    path: '../../pages/navigators/index?group=analysis',
    shortcut: true,
  },
  {
    id: 'employ',
    title: '人员招聘',
    icon: 'group',
    shortcut: true,
    color: theme.palette.primary.main,
    path: '../../pages/navigators/index?group=employ',
  },
  {
    id: 'marketing',
    title: '营销活动',
    icon: 'highlight',
    shortcut: true,
    color: theme.palette.primary.main,
    path: '../../pages/navigators/index?group=marketing',
    customStyle: {
      'background-image': '-webkit-linear-gradient(bottom,red,#fd8403,yellow)',
      '-webkit-background-clip': 'text',
      '-webkit-text-fill-color': 'transparent',
    },
  },
  {
    id: 'chamberlain',
    title: '管家服务',
    icon: 'security',
    shortcut: true,
    color: theme.palette.primary.main,
    path: '../../pages/navigators/index?group=chamberlain',
  },
];

const navList = [];

function find(items) {
  if (!items || items.lenght <= 0) {
    return;
  }
  items.map(item => {
    if (item.shortcut) {
      navList.push(item);
    }
    find(item.children);
  });
}

find(navigators);

navList.push({
  title: '更多',
  icon: 'widgets',
  color: theme.palette.grey['600'],
  path: '../navigators/index',
});

export { navList };

export default navigators;
