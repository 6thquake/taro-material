const objectToString = style => {
  if (style && typeof style === 'object') {
    let styleStr = '';
    Object.keys(style).forEach(key => {
      const lowerCaseKey = key.replace(/([A-Z])/g, '-$1').toLowerCase();
      styleStr += `${lowerCaseKey}:${style[key]};`;
    });
    return styleStr;
  } else if (style && typeof style === 'string') {
    return style;
  }
  return '';
};

/**
 * 合并 style
 * @param {Object|String} style1
 * @param {Object|String} style2
 * @returns {String}
 */
const mergeStyle = (style1, style2) => objectToString(style1) + objectToString(style2);

const getClassName = (arg, className) => {
  // const { className } = props

  if (!className) {
    return arg;
  }

  let componentClass = arg;
  let propsClass = className;

  if (!Array.isArray(propsClass)) {
    propsClass = [propsClass];
  }

  if (!Array.isArray(componentClass)) {
    componentClass = [componentClass];
  }

  return componentClass.concat(propsClass);
};

const isColor = () => {
  const hex = /^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/;

  const rgb = /^[rR][gG][Bb][Aa]?[(]([\s]*(2[0-4][0-9]|25[0-5]|[01]?[0-9][0-9]?),){2}[\s]*(2[0-4][0-9]|25[0-5]|[01]?[0-9][0-9]?),?[\s]*(0\.\d{1,2}|1|0)?[)]{1}$/g;

  return color => hex.test(color) || rgb(color);
};

export { objectToString, getClassName, mergeStyle, isColor };
