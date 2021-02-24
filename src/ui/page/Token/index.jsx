import * as React from "react";
import {useEffect, useState} from "react";
import COMPONENT from "../../../_/COMPONENT";
import {COMPONENT_DEFAULT} from "../../../_/CONFIG";
import Button from "../../component/Button";
import Input from "../../component/Input";
import InputRow from "../../component/InputRow";
import "./index.less";

const TokenItem = ({data = {}, id}) => {
  const {name, type, ...rest} = data;
  const propNames = Object.keys(rest);
  return (
    <div className="pt12 pb12 g_row g_hr">
      <input type="hidden" name={`${id}|name`} value={name}/>
      <input type="hidden" name={`${id}|type`} value={type}/>
      <div className="df aic jcsb mb8 fs14">
        <div className="c:s ttc mr8">{type}:</div>
        <div className="f1 g_ell tar">{name}</div>
      </div>
      {propNames.map((propName) => {
        // 属性不合法
        if (!(propName in COMPONENT_DEFAULT)) {
          return null;
        }
        const defaultValue = rest[propName];
        const isArray = defaultValue instanceof Array;
        const isSelect = String(defaultValue) === 'false' || String(defaultValue) === 'true';
        const name = `${id}|${propName}`;
        if (propName === 'renderChildren') {
          return (
            <div key={propName} label={propName} className="df aic jcsb mt8">
              <strong className="fs14 f1 ell mr8 ttc">{propName}</strong>
              <select name={name} defaultValue={String(defaultValue)}>
                <option value="0">false</option>
                <option value="1">true</option>
                <option value="2">only Text</option>
              </select>
            </div>
          );
        }
        if (isSelect) {
          return (
            <div key={propName} label={propName} className="df aic jcsb mt8">
              <strong className="fs14 f1 ell mr8 ttc">{propName}</strong>
              <input name={name} type="hidden" value="false"/>
              <input name={name} type="checkbox" value="true" defaultChecked={String(defaultValue) === 'true'}/>
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

const getValueParser = (name, value) => {
  const actions = {
    boolean: (value = '') => {
      if (value === 'true') {
        return true;
      }
      return false;
    },
    array: (value) => {
      const strValue = value.trim();
      if (!strValue) {
        return [];
      }
      return strValue.split(' ');
    },
    capitalize: (value) => {
      return COMPONENT.stringToComponentName(value);
    },
    default: (value) => {
      return value.trim();
    }
  };

  if (['componentName'].indexOf(name) > -1) {
    // 首字母大写
    return actions.capitalize;
  }
  if (value instanceof Array) {
    return actions.array;
  }
  if (typeof value === 'boolean' || value === 'true' || value === 'false') {
    return actions.boolean;
  }
  return actions.default;
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
        postData[id][name] = getValueParser(name, postData[id][name])(value);
      }
    });

    // console.log(postData);

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
