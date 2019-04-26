import Taro from '@tarojs/taro';
import './style/index.scss';

import './styles/default.scss';

Taro.initPxTransform({ designWidth: 750 });

export { default as AtActionSheet } from './components/action-sheet';
export { default as AtActionSheetItem } from './components/action-sheet/body/item';
export { default as AtActivityIndicator } from './components/activity-indicator';
export { default as AtAvatar } from './components/avatar';
export { default as AtBadge } from './components/badge';
export { default as AtButton } from './components/button';
export { default as AtCard } from './components/card';
export { default as AtCheckbox } from './components/checkbox';
export { default as AtDrawer } from './components/drawer';
export { default as AtFloatLayout } from './components/float-layout';
export { default as AtForm } from './components/form';
export { default as AtGrid } from './components/grid';
// export { default as AtIcon } from './components/icon';
export { default as AtInput } from './components/input';
export { default as AtInputNumber } from './components/input-number';
export { default as AtList } from './components/list';
export { default as AtListItem } from './components/list/item';
export { default as AtModal } from './components/modal';
export { default as AtModalHeader } from './components/modal/header';
export { default as AtModalContent } from './components/modal/content';
export { default as AtModalAction } from './components/modal/action';
export { default as AtNavBar } from './components/nav-bar';
export { default as AtNoticebar } from './components/noticebar';
export { default as AtPagination } from './components/pagination';
export { default as AtProgress } from './components/progress';
export { default as AtRadio } from './components/radio';
export { default as AtRate } from './components/rate';
export { default as AtSegmentedControl } from './components/segmented-control';
export { default as AtSwitch } from './components/switch';
export { default as AtTabBar } from './components/tab-bar';
export { default as AtTabs } from './components/tabs';
export { default as AtTabsPane } from './components/tabs-pane';
export { default as AtTag } from './components/tag';
export { default as AtTextarea } from './components/textarea';
export { default as AtTimeline } from './components/timeline';
export { default as AtToast } from './components/toast';
export { default as AtAccordion } from './components/accordion';
export { default as AtSlider } from './components/slider';
export { default as AtSwipeAction } from './components/swipe-action';
export { default as AtSearchBar } from './components/search-bar';
export { default as AtLoadMore } from './components/load-more';
export { default as AtDivider } from './components/divider';
export { default as AtCountdown } from './components/countdown';
export { default as AtSteps } from './components/steps';
export { default as AtCurtain } from './components/curtain';
export { default as AtMessage } from './components/message';
export { default as AtImagePicker } from './components/image-picker';
export { default as AtRange } from './components/range';
export { default as AtIndexes } from './components/indexes';
export { default as AtCalendar } from './components/calendar';

/* 私有的组件  */
export { default as AtLoading } from './components/loading';
export { default as AtComponent } from './common/component';

export { default as RMAffix } from './Affix';
export { default as RMAutocomplete } from './Autocomplete';
export { default as RMBackTop } from './BackTop';
export { default as RMButton } from './Button';
export { default as RMCarousel } from './Carousel';
export { default as RMDrawer } from './Drawer';
export { default as RMDropdown } from './Dropdown';
export { default as RMFilters } from './Filters';
export { default as RMIcon } from './Icon';
export { default as RMInput } from './Input';
export { default as RMList } from './List';
export { default as RMListItem } from './ListItem';
export { default as RMLivePlayer } from './LivePlayer';
export { default as RMLoading } from './Loading';
export { default as RMNoData } from './NoData';
export { default as RMPage } from './Page';
export { default as RMPanel } from './Panel';
export { default as RMDatePicker } from './Picker';
export { default as RMPostmark } from './Postmark';
export { default as RMSearch } from './Search';
export { default as RMSelect } from './Select';
export { default as RMSwitch } from './Switch';
export { default as RMRadio } from './Radio';
export { default as RMRadioGroup } from './RadioGroup';
export { default as RMCheckbox } from './Checkbox';
export { default as RMCheckboxGroup } from './CheckboxGroup';

export { default as RMAsyncSelect } from './AsyncSelect';
export { default as RMTabBar } from './TabBar';
export { default as RMTag } from './Tag';
export { default as RMTextArea } from './TextArea';
export { default as RMTextField } from './TextField';
export { default as RMTimeline } from './Timeline';
export { default as RMTimelineItem } from './TimelineItem';
export { default as RMToolBar } from './ToolBar';
export { default as RMTypography } from './Typography';
export { default as RMUpload } from './Upload';
export { default as RMWatermark } from './Watermark';
export { default as RMNoticeBar } from './NoticeBar';
export { default as RMNotice } from './Notice';
export { default as RMTabs } from './Tabs';
export { default as RMTabsPane } from './TabsPane';
export { default as RMMeter } from './Meter';
export { default as RMStarVote } from './StarVote';
export { default as RMSteps } from './Steps';
export { default as RMCoupon } from './Coupon';
export { default as RMBadge } from './Badge';
export { default as RMNavList } from './NavList';
export { default as RMCountDown } from './CountDown';
export { default as RMTimer } from './Timer';
export { default as RMPrettyNumber } from './PrettyNumber';
export { default as RMTagBar } from './TagBar';
export { default as RMIndexes } from './Indexes';
export { default as RMTrends } from './Trends';

export { default as ago, greet } from './utils/date';
export { default as chunk } from './utils/chunk';
export { default as slice } from './utils/slice';
export { objectToString, getClassName, mergeStyle } from './utils/styles';
export {
  getType,
  isPrimitive,
  isObject,
  isPlainObject,
  isRegExp,
  isPresent,
  isBlank,
  isNull,
  isBoolean,
  isNumber,
  isString,
  isFunction,
  isType,
  isPromise,
  isArray,
  isDate,
} from './utils/typeof';
export { default as stringify, parse } from './utils/qs';
export {
  clamp,
  convertHexToRGB,
  rgbToHex,
  decomposeColor,
  recomposeColor,
  getContrastRatio,
  getLuminance,
  emphasize,
  fade,
  darken,
  lighten,
} from './utils/colorManipulator';

export { default as theme } from './styles/theme';
