let _toString = Object.prototype.toString;

let getObjectType = function(obj) {
  return _toString
    .call(obj)
    .slice(8, -1)
    .toLowerCase();
};

let getType = function(obj) {
  if (obj == null) {
    return String(obj);
  }
  return typeof obj === 'object' || typeof obj === 'function'
    ? getObjectType(obj) || 'object'
    : typeof obj;
};

/**
 * 判断是否为基本数据类型
 */
function isPrimitive(value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  );
}

function isObject(obj) {
  return obj !== null && typeof obj === 'object';
}

function isPlainObject(obj) {
  return getObjectType(obj) === 'object';
}

function isRegExp(v) {
  return getObjectType(v) === 'regexp';
}

function isNull() {
  return obj === null;
}

function isPresent(obj) {
  return obj !== undefined && obj !== null;
}

function isBlank(obj) {
  return obj === undefined || obj === null;
}

function isBoolean(obj) {
  return typeof obj === 'boolean';
}

function isNumber(obj) {
  return typeof obj === 'number';
}

function isString(obj) {
  return typeof obj === 'string';
}

function isFunction(obj) {
  return typeof obj === 'function';
}

function isType(obj) {
  return isFunction(obj);
}

function isPromise(obj) {
  return obj instanceof Promise;
}

function isArray(obj) {
  return Array.isArray(obj);
}

function isDate(obj) {
  return obj instanceof Date && !isNaN(obj.valueOf());
}

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
};
