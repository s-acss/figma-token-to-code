import UTILS from "../UTILS";
import getPropsString from "./getPropsString";

const HTML = {
  // @ts-ignore
  getItemDom: (item) => {
    if (!item) {
      return '';
    }
    if (typeof item === 'string') {
      return item;
    }
    const {children = [], className = ''} = item;
    const tagName = item.tagName || 'div';
    const propsString = getPropsString({
      class: className
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
