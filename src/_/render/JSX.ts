import UTILS from "../UTILS";
import getPropsString from "./getPropsString";

const JSX = {
  // @ts-ignore
  getItemDom: (item) => {
    if (!item) {
      return '';
    }
    if (typeof item === 'string') {
      return item;
    }
    const {children = [], props = {}, className = ''} = item;
    const tagName = item.componentName || item.tagName || 'div';
    const strProps = getPropsString({
      ...props,
      className
    });
    const tagStart = `${tagName}${strProps ? ` ${strProps}` : ''}`;
    if (UTILS.isSelfTag(tagName)) {
      return `<${tagStart}/>`;
    }
    if (!children.length) {
      if (item.componentName) {
        return `<${tagStart}/>`;
      }
      return `<${tagStart}></${tagName}>`;
    }
    return `<${tagStart}>${JSX.getDomByArray(children)}</${tagName}>`;
  },
  getDomByArray: (obj = []) => {
    return obj.map((item) => JSX.getItemDom(item)).join('');
  }
};

export default JSX;
