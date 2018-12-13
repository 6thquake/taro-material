import moment from 'moment';

const ago = (date, format) => {
  if (!date) {
    return '';
  }

  let _date = null;
  if (moment.isDate(date)) {
    _date = moment(date);
  } else {
    _date = moment(date, format || `YYYY-MM-DD`);
  }

  const now = moment();
  const range = now.diff(_date);

  let key = '';

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
  } else {
    key = 'seconds';
  }

  return `${now.diff(_date, key)} ${key} ago`;
};

export default ago;
