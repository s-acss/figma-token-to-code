import * as React from "react";
import {useEffect, useState} from "react";
import "./index.less";
import Button from "../../component/Button";
import Input from "../../component/Input";
import InputRow from "../../component/InputRow";


const TokenItem = ({item, id}) => {
    const {name, type, classNames = [], componentName = '', stopRenderChildren = false} = item;
    return (
        <div className="pt12 pb12 g_row mb8 bc:fff">
            <input type="hidden" name={`${id}|name`} value={name}/>
            <input type="hidden" name={`${id}|type`} value={type}/>
            <div className="df aic jcsb mb8">
                <div className="c:s ttc mr8">token {type}:</div>
                <div className="f1 g_ell tar">{name}</div>
            </div>
            <InputRow label="className" className="mb8">
                <Input name={`${id}|className`}
                       placeholder="Enter"
                       className="w100% tar"
                       type="text"
                       defaultValue={classNames.join(' ')}/>
            </InputRow>
            {type === 'Component' ? (
                <>
                    <InputRow label="componentName" className="mb8">
                        <Input name={`${id}|componentName`}
                               placeholder="Enter"
                               className="f1 tar"
                               type="text"
                               defaultValue={componentName}/>
                    </InputRow>
                    <label className="df aic jcsb mt8">
                        <strong className="c:s ttc mr8">stopRenderChildren:</strong>
                        <Input name={`${id}|stopRenderChildren`} type="checkbox" defaultChecked={!!stopRenderChildren}/>
                    </label>
                </>
            ) : null}
        </div>
    );
};

const Token = () => {
    const [dataSelect, setDataSelect] = useState({});
    const [noSelection, setNoSelection] = useState(true);
    const {token = {}} = dataSelect || {};
    const tokenKeys = Object.keys(token) || [];

    useEffect(() => {
        onmessage = (({data: {pluginMessage} = {}}) => {
            const {gotToken = null, noSelection = null} = pluginMessage;
            // console.log({gotToken});
            setDataSelect(gotToken || {});
            noSelection !== null && setNoSelection(noSelection);
        });
    }, []);

    const onSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const postData = {};
        formData.forEach(function (value, item) {
            const [id, name] = item.split('|');
            if (!postData[id]) {
                postData[id] = {};
            }
            if (!value) {
                return;
            }
            if (name === 'stopRenderChildren') {
                postData[id]['stopRenderChildren'] = true;
            } else if (name === 'className') {
                postData[id]['classNames'] = value.trim().split(' ');
            } else if (name === 'componentName') {
                const componentName = value.replace(/[\W]/g, '');
                postData[id]['componentName'] = componentName.charAt(0).toUpperCase() + componentName.slice(1);
            } else {
                postData[id][name] = value;
            }
        });
        parent.postMessage({
            pluginMessage: {
                type: 'CONFIG.appendToken',
                value: postData
            }
        }, '*');
    };
    return (
        <form className="f1 df fs14 fdc" onSubmit={onSubmit}>
            <div className="f1">
                {(() => {
                    if (tokenKeys.length) {
                        return tokenKeys.map((id) => <TokenItem id={id} key={id} item={token[id]}/>);
                    }
                    return (<div
                        className="h100% df aic jcc tac c:s">
                        {noSelection ? 'Please Select Something' : 'The Node without any token'}
                    </div>);
                })()}
            </div>
            <div className="g_row pt12 pb12 bc:fff g_hr_t">
                <Button disabled={noSelection || !tokenKeys.length} block type="submit">Save</Button>
            </div>
        </form>
    )
};
export default Token;
