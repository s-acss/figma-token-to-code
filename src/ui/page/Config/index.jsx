import * as React from "react";
import {useEffect, useState} from "react";
import saveFile from 'save-as-file';
import Button from "../../component/Button";
import Input from "../../component/Input";
import "./index.less";
import Svg from "../../component/Svg";


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
  const {name} = data;
  const [currentName, setCurrentName] = useState(name);
  const onNameChange = (e) => {
    setCurrentName(e.target.value.trim());
  };

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

  // 上传文件
  const onReplace = (e) => {
    const files = e.target.files || [];
    if (!files.length) {
      return;
    }
    var fr = new FileReader();
    fr.onload = function (e) {
      var result = JSON.parse(e.target.result);
      if (!result.name) {
        alert('project name is required!');
        return;
      }
      if ((name !== result.name) && projects.find((item) => item.name === result.name)) {
        alert(`${result.name} is exist!`);
        return;
      }
      _postConfig({
        action: 'replaceProject',
        value: {
          data: result,
          index
        }
      });
    }
    fr.readAsText(files.item(0));
  };

  // 修改名字
  const onSubmit = (e) => {
    e.preventDefault();
    if (!currentName) {
      alert('project name is required!');
      return;
    }
    if (projects.find((item) => item.name === currentName)) {
      alert(`${currentName} is exist!`);
      return;
    }
    _postConfig({
      action: 'changeProjectName',
      value: {name: currentName, index}
    });
  };

  return (
    <form onSubmit={onSubmit} className={`g_row df aic pr pt12 pb12 ${className}`}>
      <div className="mr8">
        <input type="radio" checked={checked} onChange={onChangeCurrent}/>
      </div>
      <div className="f1 df aic">
        <Input title="project name" placeholder="Project Name" className="f1 mr8" name="name"
               value={currentName} onChange={onNameChange}/>
        <label className="btn _square pr oh mr8" title="Replace">
          <Svg name="replace" className="fs20"/>
          <input className="o0 pa" type="file" onChange={onReplace}/>
        </label>
        <Button title="Download" square className="mr8" onClick={onDownLoad}>
          <Svg name="download" className="fs20"/>
        </Button>
        <Button title="Delete" square onClick={onDel}>
          <Svg name="close" className="fs20"/>
        </Button>
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
      return;
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

  return (
    <>
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
      <div className="g_row pt12 pb12 bc:fff g_hr_t">
        <div className="df jcsb aic fs14 mb8">
          <strong className="c:s">Current Project: </strong>
          <em className="f1 tar ell">{projects[currentIndex]?.name || '--'}</em>
        </div>
        <label htmlFor="inputFile" className="btn pr _block oh"> Upload New
          <input id="inputFile" className="o0 pa" type="file" onChange={onUpFile}/>
        </label>
      </div>
    </>
  )
};

export default Config;
