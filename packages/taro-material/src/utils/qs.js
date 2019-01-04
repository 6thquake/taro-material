import { isString, isObject, isBlank } from './typeof';

const stringify = qs => {
  if (isObject(qs)) {
    const qsStr = [];
    Object.keys(qs).forEach(key => {
      const value = isBlank(qs[key]) ? '' : qs[key];
      qsStr.push(`${key}=${value}`);
    });
    return qsStr.join('&');
  }
  return qs;
};

const parse = qs => {
  if (isString(qs)) {
    const qsArr = qs.split('&');
    const qsObj = {};
    qsArr.map(item => {
      const its = item.split('=');
      let val = null;
      if (its.length < 2) {
        val = true;
      } else {
        val = its[1];
        try {
          if (val === 'true') {
            val = true;
          } else if (val === 'false') {
            val = false;
          } else if (!Number.isNaN(val * 1)) {
            val *= 1;
          }
        } catch (e) {
          console.error(e);
        }
      }
      qsObj[its[0]] = val;
      return null;
    });
    return qsObj;
  }
  return qs;
};

export default stringify;
export { parse, stringify };
