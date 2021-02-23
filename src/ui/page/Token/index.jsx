import * as React from "react";
import {useEffect, useState} from "react";
import Button from "../../component/Button";
import Input from "../../component/Input";
import InputRow from "../../component/InputRow";
import "./index.less";
import COMPONENT from "../../../_/COMPONENT";

const TokenItem = ({data = {}, id}) => {
  const {name, type, ...rest} = data;
  return (
    <div className="pt12 pb12 g_row g_hr">
      <input type="hidden" name={`${id}|name`} value={name}/>
      <input type="hidden" name={`${id}|type`} value={type}/>
      <div className="df aic jcsb mb8 fs14">
        <div className="c:s ttc mr8">{type}:</div>
        <div className="f1 g_ell tar">{name}</div>
      </div>
      {Object.keys(rest).map((propName) => {
        const defaultValue = rest[propName];
        const isArray = defaultValue instanceof Array;
        const isSelect = String(defaultValue) === 'false' || String(defaultValue) === 'true';
        const name = `${id}|${propName}`;
        if (isSelect) {
          return (
            <div key={propName} label={propName} className="df aic jcsb mt8">
              <strong className="fs14 f1 ell mr8 ttc">{propName}</strong>
              <select name={name} defaultValue={String(defaultValue)}>
                <option value="false">false</option>
                <option value="true">true</option>
              </select>
            </div>
          );
        }
        return (
          <InputRow key={propName} label={propName} className="mt8">
            <Input
              name={name}
              placeholder={`Enter`}
              className="w100% tar"
              type="text"
              defaultValue={isArray ? defaultValue.join(' ') : defaultValue}
            />
          </InputRow>
        );
      })}
    </div>
  );
};


const getFormData = ({name, value}) => {
  const actions = {
    stopRenderChildren: (value = '') => {
      if (value === 'true') {
        return true;
      }
      return false;
    },
    classNames: (value) => {
      return value.trim().split(' ');
    },
    ignoreClassNames: (value) => {
      return value.trim().split(' ');
    },
    componentName: (value) => {
      return COMPONENT.stringToComponentName(value);
    }
  };
  if (actions[name]) {
    return actions[name](value.trim());
  }
  return value.trim();
};


const Token = () => {
  const [selectionInfo, setSelectionInfo] = useState({});
  const {name = '--', token: selectionTokens = {}} = selectionInfo || {};
  const selectionIds = Object.keys(selectionTokens);

  useEffect(() => {
    onmessage = (({data: {pluginMessage} = {}}) => {
      const {getSelectionInfo = null, alertMsg = null} = pluginMessage;
      (getSelectionInfo !== null) && setSelectionInfo(getSelectionInfo);
      (alertMsg !== null) && alertMsg && alert(alertMsg);
    });
  }, []);

  const onSave = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const postData = {...selectionTokens};
    formData.forEach(function (value, item) {
      const [id, name] = item.split('|');
      if (postData[id]) {
        postData[id][name] = getFormData({name, value});
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
    <form onSubmit={onSave} className="f1 df fdc">
      <div className="g_row g_hr df jcsb aic fs14 pt12 pb12">
        <strong className="c:s">Current Project: </strong>
        <em className="f1 tar ell">{name}</em>
      </div>
      {selectionIds.length ? (
        <div className="f1 oa">
          {selectionIds.map(id => {
            return <TokenItem key={id} data={selectionTokens[id]} id={id}/>
          })}
        </div>
      ) : (
        <div className="f1 df oh c:s fs14 tac aic jcc">The node you select without any token</div>
      )}
      <div className="g_row pt12 pb12 bc:fff g_hr_t">
        <Button disabled={!selectionIds.length} block type="submit">Save Change to 「 {name} 」</Button>
      </div>
    </form>
  );
};

export default Token;
