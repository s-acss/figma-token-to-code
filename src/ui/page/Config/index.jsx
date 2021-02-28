import * as React from "react";
import {useEffect, useRef, useState} from "react";
import saveFile from 'save-as-file';
import Button from "../../component/Button";
import Input from "../../component/Input";
import "./index.less";
import InputRow from "../../component/InputRow";


const _postConfig = ({action, value}) => {
  parent.postMessage({
    pluginMessage: {
      type: `CONFIG.${action}`,
      value
    }
  }, '*');
};

const saveJSON = (data, fileName = 'SACSS-project') => {
  if (!data) {
    return;
  }
  const json = JSON.stringify(data, null, 2);
  const file = new File([json], {type: 'application/json'});
  saveFile(file, `${fileName}.json`);
};

const ProjectItem = React.forwardRef(({data = {}, index, checked, projects = [], className = ''}, ref) => {
  const {name = '', ignoreClassName = '', replaceClassName = '', token} = data;
  const tokenLen = Object.keys(token).length;

  // 下载 JSON
  const onDownLoad = (e) => {
    e.preventDefault();
    saveJSON(data, data.name);
  };

  // 删除
  const onDel = (e) => {
    e.preventDefault();
    const result = confirm(`Are you sure to delete ${name}?`);
    if (!result) {
      return;
    }
    _postConfig({
      action: 'remove',
      value: index
    });
  };

  // 校验项目是否已经存在
  const checkName = (value) => {
    if (!value) {
      alert('project name is required!');
      return false;
    }
    if ((name !== value) && projects.find((item) => item.name === value)) {
      alert(`${value} is exist!`);
      return false;
    }
    return true;
  };

  // 上传文件
  const onReplace = (e) => {
    const files = e.target.files || [];
    if (!files.length) {
      return;
    }
    var fr = new FileReader();
    fr.onload = function (e) {
      var result = JSON.parse(e.target.result);
      checkName(result.name) && _postConfig({
        action: 'replaceByIndex',
        value: {
          data: result,
          index
        }
      });
    }
    fr.readAsText(files.item(0));
  };

  // 修改
  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const currentName = form.name.value;

    if (checkName(currentName)) {
      _postConfig({
        action: 'editByIndex',
        value: {
          data: {
            name: currentName,
            ignoreClassName: form.ignoreClassName.value
          },
          index
        }
      });
    }
  };

  return (
    <form ref={ref} onSubmit={onSubmit} className={`g_row pr pt12 pb12 ${className}`}>
      <div className="mb8">
        <strong className="mra fs14 c:m">{tokenLen ? `${tokenLen} tokens in this project` : 'No Token'}</strong>
      </div>
      <InputRow className="mb8" label="Project Name">
        <Input placeholder="Project Name" className="f1 mr8" name="name" defaultValue={name}/>
      </InputRow>
      <InputRow className="mb8 g_tip" data-title="it's for each token" label="ignoreClassName">
        <Input
          name="ignoreClassName"
          placeholder={`Enter`}
          className="w100% tar"
          type="text"
          defaultValue={ignoreClassName}
        />
      </InputRow>
      {/*<InputRow className="mb8 g_tip" data-title="Exp: w980=g_wrap, w1008=g_row" label="replaceClassName">*/}
      {/*  <Input*/}
      {/*    name="replaceClassName"*/}
      {/*    placeholder={`Enter`}*/}
      {/*    className="w100% tar"*/}
      {/*    type="text"*/}
      {/*    defaultValue={replaceClassName}*/}
      {/*  />*/}
      {/*</InputRow>*/}
      <div className="df mb16">
        {(name === 'default') ? (
          <div className="g_tip f1" data-title="Default Can't Delete">
            <Button disabled block title="Delete">
              Delete
            </Button>
          </div>
        ) : (
          <Button className="f1" block title="Delete" onClick={onDel}>
            Delete
          </Button>
        )}
        <div className="f1 ml8">
          <Button type="submit" block>Save</Button>
        </div>
      </div>
      <div className="g_hr mb16"></div>
      <div className="df">
        <label className="btn  _block pr oh g_tip mr8 f1" data-title="Replace By Upload JSON">
          Replace
          <input className="o0 pa w100% h100%" type="file" onChange={onReplace}/>
        </label>
        <Button block title="Download" className="g_tip f1" data-title="Download JSON" onClick={onDownLoad}>
          DownLoad
        </Button>
      </div>
    </form>
  );
});

const Config = () => {
  const [config, setConfig] = useState({});
  const {projects = [], currentIndex} = config;
  const currentProject = projects[currentIndex];
  const form = useRef(null);

  useEffect(() => {
    onmessage = (({data: {pluginMessage} = {}}) => {
      const {getConfig = null, alertMsg = null} = pluginMessage;
      (getConfig !== null) && setConfig(getConfig);
      (alertMsg !== null) && alertMsg && alert(alertMsg);
    });
  }, []);

  const addNew = (value = {}) => {
    // 没有名字
    if (!value.name) {
      alert(`Project Name is required!`);
      return false;
    }
    // 已经存在
    if (projects.find((item) => item.name === value.name)) {
      alert(`${value.name} is exist!`);
      return false;
    }
    _postConfig({
      action: 'addNewProject',
      value
    });
  };

  // 上传文件
  const onUpFile = (e) => {
    const files = e.target.files || [];
    if (!files.length) {
      return;
    }
    var fr = new FileReader();
    fr.onload = function (e) {
      var result = JSON.parse(e.target.result);
      addNew(result);
    }
    fr.readAsText(files.item(0));
  };

  // 添加
  const onAdd = (e) => {
    e.preventDefault();
    const form = e.target;
    const newName = form.name.value.trim();
    const result = addNew({name: newName});
    (result !== false) && form.reset();
  };

  const onChangeCurrent = (e) => {
    _postConfig({
      action: 'changeCurrent',
      value: e.target.value
    });
    form.current.reset();
  };
  return (
    <>
      <div className="g_row g_hr df jcsb aic fs14 pt12 pb12">
        <strong className="c:s">Current Project: </strong>
        <select onChange={onChangeCurrent} value={currentIndex}>
          {projects.map((project, key) => (<option key={project.name} value={key}>{project.name}</option>))}
        </select>
      </div>
      <div className="f1 oa">
        {currentProject ?
          <ProjectItem ref={form} index={currentIndex} checked data={currentProject} projects={currentProject}/> : null}
      </div>
      <form onSubmit={onAdd} action="" className="g_row pt12 pb12 bc:fff g_hr_t">
        <div className="df aic mb8">
          <Input placeholder="Enter new project name" className="f1 mr8" required type="text" name="name"/>
          <Button type="submit">Add</Button>
        </div>
        <label htmlFor="inputFile" className="btn pr _block oh"> Add New By Upload JSON
          <input className="o0 pa" id="inputFile" type="file" onChange={onUpFile}/>
        </label>
      </form>
    </>
  )
};

export default Config;
