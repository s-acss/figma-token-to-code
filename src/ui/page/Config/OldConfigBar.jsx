import Button from "../../component/Button";
import saveJSON from "../../utils/saveJSON";

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
        const {name, type, className = "", ignoreClassName, textClassName, componentProps, renderChildren, renderHeight, renderWidth} = item;
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

function transOld(data = {}) {
    const {projects = [], isJSX = false} = data;
    return projects.map(({ignoreClassName = "", name, token = {}}) => {
        return {
            isJSX,
            _name: name,
            ignoreClassName: ignoreClassName.split(" "),
            tokens: transTokens(token)
        };
    });
}

function OldConfigBar({data = {}}) {
    const isEmpty = Object.keys(data).length === 0;
    if (isEmpty) {
        return null;
    }
    const onSaveOld = (e) => {
        e.preventDefault();
        saveJSON(transOld(data), 'old-config');
    };
    return (
        <div className="g_row df aic pt8 pb8 g_hr_t">
            <p className="fs12 c:s">Token to code had a devastating upgrade, download the old config and upload them
                again</p>
            <Button onClick={onSaveOld} className="c:m ml8">Download Old</Button>
        </div>
    )
}

export default OldConfigBar;