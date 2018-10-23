import Taro from '@tarojs/taro'

import './components/article/index.scss'
import './components/flex/index.scss'
import './components/flex/item/index.scss'

Taro.initPxTransform({ designWidth: 750 })

export { default as AtActionSheet } from './components/action-sheet'
export { default as AtActionSheetItem } from './components/action-sheet/body/item'
export { default as AtActivityIndicator } from './components/activity-indicator'
export { default as AtAvatar } from './components/avatar'
export { default as AtBadge } from './components/badge'
export { default as AtButton } from './components/button'
export { default as AtCard } from './components/card'
export { default as AtCheckbox } from './components/checkbox'
export { default as AtDrawer } from './components/drawer'
export { default as AtFloatLayout } from './components/float-layout'
export { default as AtForm } from './components/form'
export { default as AtGrid } from './components/grid'
export { default as AtIcon } from './components/icon'
export { default as AtInput } from './components/input'
export { default as AtInputNumber } from './components/input-number'
export { default as AtList } from './components/list'
export { default as AtListItem } from './components/list/item'
export { default as AtModal } from './components/modal'
export { default as AtModalHeader } from './components/modal/header'
export { default as AtModalContent } from './components/modal/content'
export { default as AtModalAction } from './components/modal/action'
export { default as AtNavBar } from './components/nav-bar'
export { default as AtNoticebar } from './components/noticebar'
export { default as AtPagination } from './components/pagination'
export { default as AtProgress } from './components/progress'
export { default as AtRadio } from './components/radio'
export { default as AtRate } from './components/rate'
export { default as AtSegmentedControl } from './components/segmented-control'
export { default as AtSwitch } from './components/switch'
export { default as AtTabBar } from './components/tab-bar'
export { default as AtTabs } from './components/tabs'
export { default as AtTabsPane } from './components/tabs-pane'
export { default as AtTag } from './components/tag'
export { default as AtTextarea } from './components/textarea'
export { default as AtTimeline } from './components/timeline'
export { default as AtToast } from './components/toast'
export { default as AtAccordion } from './components/accordion'
export { default as AtSlider } from './components/slider'
export { default as AtSwipeAction } from './components/swipe-action'
export { default as AtSearchBar } from './components/search-bar'

/* 私有的组件  */
export { default as AtLoading } from './components/loading'
export { default as AtComponent } from './common/component'


export { default as RMAccordion } from './Accordion';
export { default as RMBackTop } from './BackTop';
export { default as RMButton } from './Button';
export { default as RMDrawer } from './Drawer';
export { default as RMDropdown } from './Dropdown';
export { default as RMFilters } from './Filters';
export { default as RMIcon } from './Icon';
export { default as RMInput } from './Input';
export { default as RMList } from './List';
export { default as RMListItem } from './ListItem';
export { default as RMLoading } from './Loading';
export { default as RMNoData } from './NoData';
export { default as RMPage } from './Page';
export { default as RMPanel } from './Panel';
export { default as RMDatePicker } from './Picker';
export { default as RMPostmark } from './Postmark';
export { default as RMSelect } from './Select';
export { default as RMTabBar } from './TabBar';
export { default as RMTag } from './Tag';
export { default as RMTextArea } from './TextArea';
export { default as RMTextField } from './TextField';
export { default as RMTimeLine } from './TimeLine';
export { default as RMToolbar } from './Toolbar';
export { default as RMTypography } from './Typography';
export { default as RMUpload } from './Upload';
export { default as RMWatermark } from './Watermark';

