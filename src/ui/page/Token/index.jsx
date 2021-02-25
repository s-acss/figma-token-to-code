import * as React from "react";
import {useEffect, useState} from "react";
import COMPONENT from "../../../_/COMPONENT";
import Button from "../../component/Button";
import Input from "../../component/Input";
import InputRow from "../../component/InputRow";
import "./index.less";

const TokenItem = ({data = {}, id}) => {

  // 渲染组件
  if (['COMPONENT'].indexOf(data.type) > -1) {
    return (
      <>
        <InputRow label="componentName" className="mt8">
          <Input name={`${id}|componentName`} defaultValue={data.componentName || ''}/>
        </InputRow>
        <InputRow label="className" className="mt8 g_tip" data-title="Split with Blank">
          <Input name={`${id}|className`} defaultValue={data.className || ''}/>
        </InputRow>
        <InputRow label="ignoreClassName" className="mt8 g_tip" data-title="Split with Blank">
          <Input name={`${id}|ignoreClassName`} defaultValue={data.ignoreClassName || ''}/>
        </InputRow>
        <label label="renderChildren" className="df aic jcsb mt8">
          <strong className="fs14 f1 ell mr8 ttc">renderChildren</strong>
          <select name={`${id}|renderChildren`} defaultValue={String(data.renderChildren || 0)}>
            <option value="0">false</option>
            <option value="1">true</option>
            <option value="2">only Text</option>
          </select>
        </label>
        <label label="renderWidth" className="df aic jcsb mt8">
          <strong className="fs14 f1 ell mr8 ttc">renderWidth</strong>
          <select name={`${id}|renderWidth`} defaultValue={String(data.renderWidth) || 0}>
            <option value="0">false</option>
            <option value="1">true</option>
          </select>
        </label>
        <label label="renderHeight" className="df aic jcsb mt8">
          <strong className="fs14 f1 ell mr8 ttc">renderHeight</strong>
          <select name={`${id}|renderHeight`} defaultValue={String(data.renderHeight) || 0}>
            <option value="0">false</option>
            <option value="1">true</option>
          </select>
        </label>
      </>
    );
  }

  if (data.type === 'PAINT') {
    return (
      <>
        <InputRow key="textClassName" label="textClassName" className="mt8 g_tip" data-title="Only work on text node">
          <Input name={`${id}|textClassName`} defaultValue={data.textClassName || ''}/>
        </InputRow>
        <InputRow label="className" className="mt8 g_tip" data-title="Text node will ignore this">
          <Input name={`${id}|className`} defaultValue={data.className || ''}/>
        </InputRow>
        <InputRow label="ignoreClassName" className="mt8 g_tip" data-title="Split with Blank">
          <Input name={`${id}|ignoreClassName`} defaultValue={data.ignoreClassName || ''}/>
        </InputRow>
      </>
    )
  }
  if (data.type === 'TEXT') {
    return (
      <>
        <InputRow key="textClassName" label="textClassName" className="mt8 g_tip" data-title="Only work on text node">
          <Input name={`${id}|textClassName`} defaultValue={data.textClassName || ''}/>
        </InputRow>
        <InputRow label="className" className="mt8 g_tip" data-title="Text node will ignore this">
          <Input name={`${id}|className`} defaultValue={data.className || ''}/>
        </InputRow>
        <InputRow label="ignoreClassName" className="mt8 g_tip" data-title="Split with Blank">
          <Input name={`${id}|ignoreClassName`} defaultValue={data.ignoreClassName || ''}/>
        </InputRow>
        <InputRow label="tagName" className="mt8">
          <Input name={`${id}|tagName`} defaultValue={data.tagName || ''}/>
        </InputRow>
      </>
    )
  }
  return (
    <>
      <InputRow label="className" className="mt8 g_tip" data-title="Split with Blank">
        <Input name={`${id}|className`} defaultValue={data.className || ''}/>
      </InputRow>
      <InputRow label="ignoreClassName" className="mt8 g_tip" data-title="Split with Blank">
        <Input name={`${id}|ignoreClassName`} defaultValue={data.ignoreClassName || ''}/>
      </InputRow>
    </>
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
  if (value === 'true' || value === 'false') {
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
    const postData = {};

    formData.forEach(function (value, item) {
      const [id, name] = item.split('|');
      if (!value) {
        return;
      }
      if (!postData[id]) {
        postData[id] = {};
      }
      postData[id][name] = getValueParser(name, postData[id][name])(value);
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
            const data = selectionTokens[id];
            const {name, type} = data;
            return (
              <div key={id} className="pt12 pb12 g_row g_hr">
                <input type="hidden" name={`${id}|name`} value={name}/>
                <input type="hidden" name={`${id}|type`} value={type}/>
                <div className="df aic jcsb mb8 fs14">
                  <div className="c:s ttc mr8">{type}:</div>
                  <div className="f1 g_ell tar">{name}</div>
                </div>
                <TokenItem data={selectionTokens[id]} id={id}/>
                <div className="fs12 mt4 c:s tar g_tip" data-title="token id">{id}</div>
              </div>
            )
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
