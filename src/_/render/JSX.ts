import UTILS from "../UTILS";

const JSX = {
    getPropsString: ({className = '', props = {}} = {}) => {
        const arrProps = [];
        const classNames = className ? className.split(' ') : [];
        if (classNames.length) {
            arrProps.push(`className="${classNames.join(' ')}"`)
        }
        for (const [key, value] of Object.entries(props)) {
            arrProps.push(`${key}="${value}"`);
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
        const {children = [], componentProps = {}, className = ''} = item;
        const tagName = item.componentName || item.tagName || 'div';
        const strProps = JSX.getPropsString({
            props: componentProps,
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
