const toFixed = (number, digits = 0) => {
  if (typeof number !== 'number') {
    return number;
  }
  let d = Math.pow(10, digits);
  let result = Math.round(number * d) / d;
  return result;
};

const format = (number, digits, decPoint, thousandsSep) => {
  if (typeof number !== 'number') {
    return number;
  }
  /*
   * 参数说明：
   * number：要格式化的数字
   * digits：保留几位小数
   * decPoint：小数点符号
   * thousandsSep：千分位符号
   * */
  number = (number + '').replace(/[^0-9+-Ee.]/g, '');
  let n = !isFinite(+number) ? 0 : +number,
    prec = !isFinite(+digits) ? 0 : Math.abs(digits),
    sep = typeof thousandsSep === 'undefined' ? ',' : thousandsSep,
    dec = typeof decPoint === 'undefined' ? '.' : decPoint;

  let s = `${prec ? toFixed(n, prec) : Math.round(n)}`.split('.');
  let re = /(-?\d+)(\d{3})/;
  while (re.test(s[0])) {
    s[0] = s[0].replace(re, '$1' + sep + '$2');
  }

  if ((s[1] || '').length < prec) {
    s[1] = s[1] || '';
    s[1] += new Array(prec - s[1].length + 1).join('0');
  }
  return s.join(dec);
};

export { toFixed, format };
