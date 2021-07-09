import UTILS from "../UTILS";

const JSX = {
    getPropsString: (props) => {
        const arrProps = [];
        for (const [key, value] of Object.entries(props)) {
            const strValue = value instanceof Array ? value.join(' ') : value;
            strValue && arrProps.push(`${key}="${strValue}"`);
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
        // console.log({item});
        const {tagName = 'div', children = [], ...props} = item;
        const strProps = JSX.getPropsString(props);
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
