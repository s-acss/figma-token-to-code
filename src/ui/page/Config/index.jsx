import {useEffect, useRef, useState} from 'preact/hooks';
import Button from "../../component/Button";
import Input from "../../component/Input";
import "./index.less";
import ProjectItem from "./ProjectItem";
import _postConfig from "./_postConfig.js";



const Config = () => {
    const [config, setConfig] = useState({});
    const {projects = [], currentIndex} = config;
    const currentProject = projects[currentIndex];
    const form = useRef(null);

    useEffect(() => {
        // console.log('config useEffect');
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
                    <ProjectItem ref={form} index={currentIndex} checked data={currentProject}
                                 projects={projects}/> : null}
            </div>
            <form onSubmit={onAdd} action="" className="g_row pt12 pb12 bc:fff df aic g_hr_t">
                <Input placeholder="Enter new project name" className="f1 mr8" required type="text" name="name"/>
                <label htmlFor="inputFile" className="dib btn pr oh g_tip mr8" data-title="Add New By Upload JSON" >
                    Upload
                    <input className="o0 pa vh" id="inputFile" type="file" onChange={onUpFile}/>
                </label>
                <Button type="submit">Add</Button>
            </form>
        </>
    )
};

export default Config;
