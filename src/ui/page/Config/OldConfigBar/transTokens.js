const getObjByPropString = (strProps) => {
    if (!strProps) {
        return {};
    }
    const result = {};
    strProps.split(' ').map((item) => {
        const [name, value = ""] = item.split('=');
        result[name] = value.replace(/"/g, "");
    });
    return result;
};

const transTokens = (tokens) => {
    const newToken = {};
    for (const [id, item] of Object.entries(tokens)) {
        const {
            name,
            type,
            className = "",
            ignoreClassName,
            textClassName,
            componentProps,
            renderChildren,
            renderHeight,
            renderWidth
        } = item;
        const newItem = {
            _tokenName: name,
            _tokenType: type,
            DEFAULT: getObjByPropString(componentProps)
        };
        if (textClassName) {
            newItem["TEXT"] = {
                className: textClassName.split(' ')
            }
        }
        if (renderChildren && String(renderChildren) === '0') {
            newItem.DEFAULT.children = null;
        }
        if (renderHeight) {
            if (String(renderHeight) === '1') {
                newItem.DEFAULT._renderHeight = true;
            } else if (String(renderHeight) === '0') {
                newItem.DEFAULT._renderHeight = false;
            }
        }
        if (renderWidth) {
            if (String(renderWidth) === '1') {
                newItem.DEFAULT._renderWidth = true;
            } else if (String(renderWidth) === '0') {
                newItem.DEFAULT._renderWidth = false;
            }
        }
        newItem.DEFAULT.className = className ? className.split(' ') : [];
        if (ignoreClassName) {
            newItem.DEFAULT._ignoreClassName = ignoreClassName.split(' ');
        }
        newToken[id] = newItem;
    }
    return newToken;
}
export default transTokens;