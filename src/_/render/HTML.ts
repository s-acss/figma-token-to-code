import UTILS from "../UTILS";

// legal 合法属性
// const legalProp = ['class', 'type', 'name', 'role', 'disabled', 'id', 'title', 'lang', 'dir', 'tabindex', 'accesskey', 'src', 'href', 'style', 'aria-hidden', 'target', 'rel'];
const HTML = {
    getPropsStringByObject: (props) => {
        const arrProps = [];
        for (const [key, value] of Object.entries(props)) {
            // 忽略 '_' 开头的属性
            if(!key.startsWith('_')){
                const strValue = value instanceof Array ? value.join(' ') : value;
                const keyName = key === 'className' ? 'class' : key;
                strValue && arrProps.push(`${keyName}="${strValue}"`);
            }
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
        const {tagName: _tagName, children = [], ...props} = item;
        const tagName = _tagName ? _tagName.toLowerCase() : 'div';
        const strProps = HTML.getPropsStringByObject(props);
        const tagStart = `${tagName}${strProps ? ` ${strProps}` : ''}`;
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
