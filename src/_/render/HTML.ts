import UTILS from "../UTILS";
import getPropsArray from "./getPropsArray";

const HTML = {
  // @ts-ignore
  getItemDom: (item) => {
    if (!item) {
      return '';
    }
    if (typeof item === 'string') {
      return item;
    }
    const {tagName = 'i', children = [], classNames = []} = item;
    const arrProps = getPropsArray({
      class: classNames.join(' ')
    });
    const tagStart = `${tagName}${arrProps.length ? ` ${arrProps.join(' ')}` : ''}`;
    if (UTILS.isSelfTag(tagName)) {
      return `<${tagStart}/>`;
    }
    if (!children.length) {
      return `<${tagStart}></${tagName}>`;
    }
    return `<${tagStart}>\n${HTML.getDomByArray(children)}\n</${tagName}>`;
  },
  getDomByArray: (obj = []) => {
    return obj.map((item) => HTML.getItemDom(item)).join('\n');
  }
};

export default HTML;
