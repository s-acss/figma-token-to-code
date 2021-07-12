import Button from "../../component/Button";
import saveJSON from "../../utils/saveJSON";
import toast from "../../component/Toast/toast";

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

function transProject({isJSX = false, ignoreClassName = "", name, token = {}}) {
    return {
        isJSX,
        _name: name,
        _ignoreClassName: ignoreClassName.split(" "),
        tokens: transTokens(token)
    };
};

function transOld(data = {}) {
    const {projects = [], isJSX = false} = data;
    return projects.map((props) => transProject({isJSX, ...props}));
}

function OldConfigBar({data = {}, className = ""}) {
    const isEmpty = Object.keys(data).length === 0;
    if (isEmpty) {
        return null;
    }
    // 下载文件
    const onDownload = (e) => {
        e.preventDefault();
        saveJSON(transOld(data), 'token-to-code');
    };
    // 上传文件
    const onReplace = (e) => {
        const files = e.target.files || [];
        if (!files.length) {
            return;
        }
        var fr = new FileReader();
        fr.onload = function (e) {
            const valueUp = e.target.result;
            if (!valueUp.trimStart().trimEnd()) {
                toast("Config can't empty");
                return;
            }
            const objData = JSON.parse(valueUp);
            saveJSON(transProject(objData), 'token-to-code');
        }
        fr.readAsText(files.item(0));
    };
    return (
        <div className={`g_row pt8 pb8 ${className}`}>
            <h4 className="fs14 fw700 mb8 m0">Devastating upgrade</h4>
            <div className="df jcsb aic mb8">
                <p className="fs12 c:s mb4">Upload the old config and convert them</p>
                <label className="btn dib pr oh g_tip" data-title="Upload old config and get new">
                    Upload and Convert
                    <input className="o0 pa w100% h100% l0 t0" type="file" onChange={onReplace}/>
                </label>
            </div>
            <div className="df jcsb aic">
                <p className="fs12 c:s">Download all the configs in your localstorage and parse one of them to use</p>
                <Button onClick={onDownload} className="c:m ml8">Download</Button>
            </div>
        </div>
    )
};

export default OldConfigBar;