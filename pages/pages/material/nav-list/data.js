import theme from '../../../styles/theme';

const navigators = [
  {
    id: 'payment',
    title: '缴费中心',
    icon: 'local_atm',
    color: theme.palette.primary.main,
    shortcut: true,
    path: '../../pages/navigators/index?group=payment',
    badge: {
      variant: 'dot',
    },
  },
  {
    id: 'monitor',
    title: '实时监控',
    icon: 'videocam',
    color: theme.palette.primary.main,
    path: '../../pages/navigators/index?group=monitor',
    shortcut: true,
    mark: 'v2',
    badge: {
      variant: 'text',
      value: '哈哈哈',
    },
  },
  {
    id: 'bi',
    title: '运营报表',
    icon: 'equalizer',
    color: theme.palette.primary.main,
    path: '../../pages/navigators/index?group=bi',
    shortcut: true,
    badge: {
      variant: 'ribbon',
      value: '奖',
    },
  },
  {
    id: 'purchase',
    title: '采购',
    color: theme.palette.primary.main,
    icon: 'shopping_cart',
    path: '../../pages/navigators/index?group=purchase',
    shortcut: true,
    badge: {
      variant: 'mark',
      value: '热',
    },
  },
  {
    id: 'analysis',
    title: '智能分析',
    icon: 'extension',
    color: theme.palette.primary.main,
    path: '../../pages/navigators/index?group=analysis',
    shortcut: true,
    badge: {},
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
    id: 'monitor',
    title: '实时监控',
    icon: 'store',
    color: theme.palette.primary.main,
    path: '../../pages/navigators/index?group=monitor',
    shortcut: true,
    mark: 'v2',
    badge: {
      variant: 'text',
      value: '哈哈哈',
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
  items.forEach(item => {
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

const imagesNavList = [
  {
    id: 'payment',
    title: '菜品优化',
    image: 'https://code.aliyun.com/licoliu/resources/raw/master/images/icons/caipinyouhua.png',
    path: '../../pages/navigators/index?group=payment',
    badge: {
      variant: 'dot',
    },
  },
  {
    id: 'monitor',
    title: '实时监控',
    image: 'https://code.aliyun.com/licoliu/resources/raw/master/images/icons/jiankong.png',
    path: '../../pages/navigators/index?group=monitor',
    badge: {
      variant: 'text',
      value: '哈哈哈',
    },
  },
  {
    id: 'bi',
    title: '集合门店',
    image: 'https://code.aliyun.com/licoliu/resources/raw/master/images/icons/jihemendian.png',
    path: '../../pages/navigators/index?group=bi',
    badge: {
      variant: 'ribbon',
      value: '奖',
    },
  },
  {
    id: 'purchase',
    title: '客服',
    image: 'https://code.aliyun.com/licoliu/resources/raw/master/images/icons/kefu.png',
    path: '../../pages/navigators/index?group=purchase',
    badge: {
      variant: 'mark',
      value: '热',
    },
  },
  {
    id: 'analysis',
    title: '评分',
    image: 'https://code.aliyun.com/licoliu/resources/raw/master/images/icons/pingfen.png',
    path: '../../pages/navigators/index?group=analysis',
    badge: {},
  },
  {
    id: 'employ',
    title: '市场分析',
    image: 'https://code.aliyun.com/licoliu/resources/raw/master/images/icons/shichangfenxi.png',
    path: '../../pages/navigators/index?group=employ',
    mark: 'v2',
  },
  {
    id: 'monitor',
    title: '其他',
    image: 'https://code.aliyun.com/licoliu/resources/raw/master/images/icons/qita.png',
    path: '../../pages/navigators/index?group=monitor',
  },
];

export { navList, imagesNavList };

export default navigators;
