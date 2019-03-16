import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

import 'dayjs/locale/zh-cn';

dayjs.extend(relativeTime);
dayjs.locale('zh-cn');

const localeData = {
  en: {
    years: 'years',
    months: 'months',
    days: 'days',
    hours: 'hours',
    minutes: 'minutes',
    seconds: 'seconds',
    milliseconds: 'a moment',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'evening',
  },
  zh: {
    years: '年',
    months: '月',
    days: '天',
    hours: '小时',
    minutes: '分钟',
    seconds: '秒',
    milliseconds: '刚刚',
    morning: '早上',
    forenoon: '上午',
    noon: '中午',
    afternoon: '下午',
    evening: '晚上',
    night: '晚上',
  },
};

const ago = (date, format) => dayjs(date, format).fromNow();

const ago2 = (date, format) => {
  if (!date) {
    return '';
  }

  const _ago = dayjs(date, format || `YYYY-MM-DD HH:mm:ss`);
  const now = dayjs();

  const range = now.diff(_ago);

  let key = '';
  const locale = 'zh-cn';

  if (range > 366 * 24 * 60 * 60 * 1000) {
    key = 'years';
  } else if (range > 31 * 24 * 60 * 60 * 1000) {
    key = 'months';
  } else if (range > 24 * 60 * 60 * 1000) {
    key = 'days';
  } else if (range > 60 * 60 * 1000) {
    key = 'hours';
  } else if (range > 60 * 1000) {
    key = 'minutes';
  } else if (range > 1000) {
    key = 'seconds';
  } else {
    key = null;
  }

  let resource = null;
  switch (locale) {
    case 'zh-cn':
    case 'zh':
      resource = localeData.zh;
      resource.ago = '前';
      break;
    case 'en':
    default:
      resource = localeData.en;
      resource.ago = 'ago';
      break;
  }

  if (!key) {
    return `${resource.milliseconds}`;
  }
  return `${now.diff(_ago, key)} ${resource[key]} ${resource.ago}`;
};

const greet = () => {
  const now = dayjs();
  const hour = now.hour();
  const minute = now.minute();

  let key = '';
  const locale = 'zh-cn';

  let resource = null;
  switch (locale) {
    case 'zh-cn':
    case 'zh':
      if (hour < 9) {
        key = 'morning';
      } else if (hour < 11 && minute < 30) {
        key = 'forenoon';
      } else if (hour < 13 && minute < 30) {
        key = 'noon';
      } else if (hour < 18) {
        key = 'afternoon';
      } else {
        key = 'evening';
      }
      resource = localeData.zh;
      return `${resource[key]}好`;
    case 'en':
    default:
      if (hour < 12) {
        key = 'morning';
      } else if (hour < 18) {
        key = 'afternoon';
      } else if (hour < 22) {
        key = 'evening';
      } else {
        key = 'night';
      }
      resource = localeData.en;
      return `Good ${resource[key]}`;
  }
};

export default ago;
export { greet, ago2 };
