import UTILS from "../UTILS";
import getPropsArray from "./getPropsArray";

const JSX = {
    // @ts-ignore
    getItemDom: (item) => {
        if (!item) {
            return '';
        }
        if (typeof item === 'string') {
            return item;
        }
        const {children = [], props = {}, classNames = []} = item;
        const tagName = item.componentName || item.tagName;
        const arrProps = getPropsArray({
            ...props,
            className: classNames.filter(item => item).join(' ')
        });
        const tagStart = `${tagName}${arrProps.length ? ` ${arrProps.join(' ')}` : ''}`;
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
