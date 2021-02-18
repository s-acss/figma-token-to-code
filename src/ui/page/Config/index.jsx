import * as React from "react";
import {useEffect, useState} from "react";
import saveFile from 'save-as-file';
import Button from "../../component/Button";
import Input from "../../component/Input";
import "./index.less";


const _postConfig = ({action, value}) => {
  parent.postMessage({
    pluginMessage: {
      type: `CONFIG.${action}`,
      value
    }
  }, '*');
};

const ProjectItem = ({defaultValue = '', token = {}, className = '', onChange}) => {
  const [newName, setNewName] = useState(name);
  const tokenLen = Object.keys(token).length || 0;
  const onNameChange = (e) => {
    setNewName(e.target.value.trim());
  };
  const onSubmit = (e) => {
    e.preventDefault();
    onChange(newName);
  };
  return (
    <div className={`g_row pr bc:fff ${className}`}>
      <div className="c_s pt8 mb12">
        {tokenLen} token in current project
      </div>
      <div className="df">
        <Input className="f1 mr8" name="name" defaultValue={defaultValue} onChange={onNameChange}/>
        <Button disabled={!newName || newName === name} onClick={onSubmit}>Change Name</Button>
      </div>
    </div>
  );
};

const Config = () => {
  const [config, setConfig] = useState({});
  const {projects = [], currentIndex} = config;
  const currentProject = projects[currentIndex] || {};

  useEffect(() => {
    onmessage = (({data: {pluginMessage} = {}}) => {
      const {getConfig = null} = pluginMessage;
      (getConfig !== null) && setConfig(getConfig);
    });
  }, []);


  const addNew = (value = {}) => {
    // 没有名字
    if (!value.name) {
      alert(`Project Name is required!`);
      return '';
    }
    // 已经存在
    if (projects.find((item) => item.name === value.name)) {
      alert(`${value.name} is exist!`);
      return;
    }
    _postConfig({
      action: 'addNewProject',
      value
    });
  };

  // 添加
  const onAdd = (e) => {
    e.preventDefault();
    const form = e.target;
    const newName = form.name.value.trim();
    addNew({name: newName});
    form.reset();
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

  const onChangeCurrent = (e) => {
    _postConfig({
      action: 'changeCurrent',
      value: e.target.value
    });
  };

  // 下载 JSON
  const onDownLoad = (e) => {
    e.preventDefault();
    // 保存文件
    if (currentProject) {
      const json = JSON.stringify(currentProject, null, 2);
      const file = new File([json], {type: 'application/json'});
      saveFile(file, `${currentProject.name}.json`);
    }
  };

  // 删除
  const onDel = (e) => {
    e.preventDefault();
    const result = confirm(`Are you sure to delete ${currentProject.name}?`);
    if (!result) {
      return;
    }
    _postConfig({
      action: 'remove',
      value: currentIndex
    });
  };

  // 修改名字
  const onNameChange = (newName) => {
    if (projects.find((item) => item.name === newName)) {
      alert(`${newName} is exist!`);
      return;
    }
    _postConfig({
      action: 'changeProjectName',
      value: {name: newName, index: currentIndex}
    });
  };

  return (
    <>
      <div className="g_row pt12 pb12 bc:fff mb8">
        <div className="mb8 c_s mb8">
          {projects.length > 1 ? `There are ${projects.length} projects` : 'Only 1 project'}
        </div>
        <label className="df jcsb aic">
          <strong className="db">Current Project: </strong>
          <select value={currentIndex} onChange={onChangeCurrent}>
            {projects.map(({name = ''}, key) => <option key={key} value={key}>{name || 'undefined'}</option>)}
          </select>
        </label>
      </div>
      <div className="f1">
        <ProjectItem
          className="pt12 pb8"
          index={currentIndex}
          defaultValue={currentProject.name}
          token={currentProject.token}
          onChange={onNameChange}/>
        <div className="bc:fff pb16 g_row">
          <Button className="mb8" block onClick={onDownLoad}>Download JSON</Button>
          <Button disabled={projects.length < 2} block onClick={onDel}>Delete Current</Button>
        </div>
      </div>
      <form onSubmit={onAdd} action="" className="g_row pt12 pb12 bc:fff">
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
