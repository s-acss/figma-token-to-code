import UTILS from "../UTILS";

// legal 合法属性
const legalProp = ['class','type','name', 'role', 'disabled', 'id', 'title', 'lang', 'dir', 'tabindex', 'accesskey', 'src', 'href','style','aria-hidden','target','rel'];
const HTML = {
  getPropsString: ({className = '', ...props} = {}) => {
    const arrProps = [];
    const classNames = className.split(' ');
    for (const [key, value] of Object.entries(props)) {
      const strValue = String(value);
      if (strValue === '' || strValue === 'false') {
        continue;
      }
      if (key.startsWith('data-')) {
        arrProps.push(`${key}="${strValue}"`)
        continue;
      }
      if (legalProp.indexOf(key) > -1) {
        arrProps.push(`${key}="${strValue}"`)
        continue;
      } else if (strValue === 'true') {
        classNames.push(`_${key}`);
        continue;
      }
    }
    if (classNames.length) {
      arrProps.push(`class="${classNames.join(' ')}"`)
    }
    return arrProps.join(' ');
  },
  // @ts-ignore
  getItemDom: (item) => {
    if (!item) {
      return '';
    }
    if (typeof item === 'string') {
      return item;
    }
    const {children = [], props = {}, className = ''} = item;
    const tagName = item.tagName || 'div';
    const propsString = HTML.getPropsString({
      ...props,
      className
    });
    const tagStart = `${tagName}${propsString ? ` ${propsString}` : ''}`;
    if (UTILS.isSelfTag(tagName)) {
      return `<${tagStart}/>`;
    }
    if (!children.length) {
      return `<${tagStart}></${tagName}>`;
    }
    return `<${tagStart}>${HTML.getDomByArray(children)}</${tagName}>`;
  },
  getDomByArray: (obj = []) => {
    return obj.map((item) => HTML.getItemDom(item)).join('');
  }
};

export default HTML;
