const debounce = (handler, wait) => {
  let timeout = null;
  return () => {
    if (timeout !== null) clearTimeout(timeout);
    timeout = setTimeout(handler, wait);
  };
};

const throttle = (handler, delay) => {
  let timer = null;
  let startTime = Date.now();
  return () => {
    const curTime = Date.now();
    const remaining = delay - (curTime - startTime);
    clearTimeout(timer);
    if (remaining <= 0) {
      handler(...arguments);
      startTime = Date.now();
    } else {
      timer = setTimeout(handler, remaining);
    }
  };
};

const identity = arr => {
  if (Array.isArray(arr)) {
    arr.forEach((item, index) => {
      if (!item.id) {
        item.id = index + 1;
      }
    });
  }
  return arr;
};

export { debounce, throttle, identity };
