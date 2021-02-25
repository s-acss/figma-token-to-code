import * as React from "react";
import {useEffect, useState} from "react";
import saveFile from 'save-as-file';
import Button from "../../component/Button";
import Input from "../../component/Input";
import "./index.less";
import Svg from "../../component/Svg";
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

const ProjectItem = ({data = {}, index, checked, projects = [], className = ''}) => {
  const {name = '', ignoreClassName = '', token} = data;
  const tokenLen = Object.keys(token).length;

  // 下载 JSON
  const onDownLoad = (e) => {
    e.preventDefault();
    saveJSON(data, data.name);
  };

  const onChangeCurrent = (e) => {
    if (e.target.checked) {
      _postConfig({
        action: 'changeCurrent',
        value: index
      });
    }
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

  // 校验羡慕是否已经存在
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
    <form onSubmit={onSubmit} className={`g_row df pr pt12 pb12 ${className}`}>
      <label className="df pt8 pb8 cp">
        <input className="mr8" type="radio" checked={checked} onChange={onChangeCurrent}/>
      </label>
      <div className="f1">
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
        <div className="df aic">
          <strong className="mra fs14 c:m">{tokenLen ? `${tokenLen} tokens` : 'No Token'}</strong>
          <label className="btn _square pr oh mr8 g_tip" data-title="Replace By Upload JSON">
            <Svg name="replace" className="fs20"/>
            <input className="o0 pa w100% h100%" type="file" onChange={onReplace}/>
          </label>
          <Button title="Download" square className="mr8 g_tip" data-title="Download" onClick={onDownLoad}>
            <Svg name="download" className="fs20"/>
          </Button>
          <Button title="Delete" square className="mr8 g_tip" data-title="Delete" onClick={onDel}>
            <Svg name="close" className="fs20"/>
          </Button>
          <Button type="submit">Save</Button>
        </div>
      </div>
    </form>
  );
};

const Config = () => {
  const [config, setConfig] = useState({});
  const {projects = [], currentIndex} = config;

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

  return (
    <>
      <div className="g_row g_hr df jcsb aic fs14 pt12 pb12">
        <strong className="c:s">Current Project: </strong>
        <em className="f1 tar ell">{projects[currentIndex]?.name || '--'}</em>
      </div>
      {projects.length ? (
        <div className="f1 oa">
          {projects.map((project, key) => {
            const isLast = key === projects.length - 1;
            return (<ProjectItem
              checked={currentIndex === key}
              index={key}
              key={project.name}
              data={project}
              projects={projects}
              className={isLast ? '' : 'g_hr'}
            />);
          })}
        </div>) : (
        <div className="f1 df aic fdc jcc g_row">
          <p className="c:m mb8 fw700">No Project</p>
          <p className="c:s fs14">Download pure token at「 Token 」</p>
          <p className="c:s fs14">Custom and Upload</p>
        </div>
      )}
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
