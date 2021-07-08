import {useEffect, useRef, useState} from 'preact/hooks';
import Button from "../../component/Button";
import Input from "../../component/Input";
import "./index.less";
import _postConfig from "./_postConfig.js";
import Textarea from "../../component/Textarea";
import saveJSON from "../../utils/saveJSON";

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

    // 添加新的项目
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

    // 添加
    const onAdd = (e) => {
        e.preventDefault();
        const form = e.target;
        const newName = form.name.value.trim();
        const result = addNew({name: newName});
        (result !== false) && form.reset();
    };

    // 修改当前选中
    const onChangeCurrent = (e) => {
        _postConfig({
            action: 'changeCurrent',
            value: e.target.value
        });
        form.current.reset();
    };

    // 校验项目是否已经存在
    const checkName = (value) => {
        if (!value) {
            alert('project name is required!');
            return false;
        }
        if ((currentProject.name !== value) && projects.find((item) => item.name === value)) {
            alert(`${value} is exist!`);
            return false;
        }
        return true;
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

    // 下载 JSON
    const onDownLoad = (e) => {
        e.preventDefault();
        saveJSON(currentProject, currentProject.name);
    };
    // 修改
    const onEdit = (e) => {
        e.preventDefault();
        const form = e.target;
        const dataSave = form.data.value;
        const objData = JSON.parse(dataSave);

        if (checkName(objData.name)) {
            _postConfig({
                action: 'replaceByIndex',
                value: {
                    data: objData,
                    index: currentIndex
                }
            });
        }
    };

    return (
        <>
            <form onSubmit={onAdd} className="g_row pt8 pb8 bc:fff df aic">
                <strong className="c:s fs12 mr8">Current: </strong>
                <select onChange={onChangeCurrent} value={currentIndex}>
                    {projects.map((project, key) => (<option key={project.name} value={key}>{project.name}</option>))}
                </select>
                <Input placeholder="Enter new project name" className="f1 ml8" required type="text" name="name"/>
            </form>
            <form onSubmit={onEdit} ref={form} className="f1 df fdc" >
                <Textarea name="data" className="f1" defaultValue={JSON.stringify(currentProject,null,2)} placeholder="Parse your config file here" />
                <div className="df g_row pt12 pb12">
                    <Button title="Download" className="g_tip mr8" data-title="Download JSON" onClick={onDownLoad}>
                        DownLoad
                    </Button>
                    {(name === 'default') ? (
                        <div className="g_tip" data-title="Default Can't Delete">
                            <Button disabled title="Delete">
                                Delete
                            </Button>
                        </div>
                    ) : (
                        <Button className="g_tip" title="Delete" data-title="Delete this project" onClick={onDel}>
                            Delete
                        </Button>
                    )}
                    <Button type="reset" className="mla">Reset</Button>
                    <Button type="submit" className="ml8">Save</Button>
                </div>
            </form>
        </>
    )
};

export default Config;
