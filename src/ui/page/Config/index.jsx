import {useEffect, useRef, useState} from 'preact/hooks';
import Button from "../../component/Button";
import _postConfig from "./_postConfig.js";
import Textarea from "../../component/Textarea";
import toast from "../../component/Toast/toast";
import saveJSON from "../../utils/saveJSON";
import "./index.less";
import OldConfigBar from "./OldConfigBar";

const Config = () => {
    const [config, setConfig] = useState({});
    const [oldConfig, setOldConfig] = useState({});
    const form = useRef(null);
    const isEmpty = Object.keys(config).length === 0;

    useEffect(() => {
        // 测试有没有旧的配置文件
        parent.postMessage({
            pluginMessage: {
                type: "testOldConfig"
            }
        }, '*');

        onmessage = (({data: {pluginMessage} = {}}) => {
            const {getConfig = null, alertMsg = null, getOldConfig = null} = pluginMessage;
            (getConfig !== null) && setConfig(getConfig || {});
            (getOldConfig !== null) && setOldConfig(getOldConfig || {});
            alertMsg && toast(alertMsg);
        });
    }, []);

    // 下载 JSON
    const onDownLoad = (e) => {
        e.preventDefault();
        saveJSON(config, config.name);
    };

    const save = (data) => {
        if (!data.trimStart().trimEnd()) {
            toast("Config can't empty");
            return;
        }
        try {
            const objData = JSON.parse(data);
            if (objData) {
                _postConfig({
                    action: 'edit',
                    value: objData
                });
            }
        } catch (error) {
            toast('Save error');
        }
    };

    // 上传文件
    const onReplace = (e) => {
        const files = e.target.files || [];
        if (!files.length) {
            return;
        }
        var fr = new FileReader();
        fr.onload = function (e) {
            save(e.target.result);
        }
        fr.readAsText(files.item(0));
    };

    // 修改
    const onEdit = (e) => {
        e.preventDefault();
        const dataSave = e.target.data.value;
        save(dataSave);
    };
    return (
        <form onSubmit={onEdit} ref={form} className="f1 df fdc">
            <Textarea style={{backgroundColor: '#282c34', color: 'rgba(255, 255, 255, 0.8)', borderRadius: 0}}
                      name="data" className="f1" defaultValue={isEmpty ? "" : JSON.stringify(config, null, 2)}
                      placeholder="Parse your config here"/>
            <div className="df aic g_row pt8 pb8">
                <Button title="Download" className="g_tip mr8" data-title="Download JSON" onClick={onDownLoad}>
                    DownLoad
                </Button>
                <label className="btn pr oh g_tip mr8" data-title="Replace By Upload JSON">
                    Upload
                    <input className="o0 pa w100% h100%" type="file" onChange={onReplace}/>
                </label>
                <Button type="reset" className="mla">Reset</Button>
                <Button type="submit" className="ml8">Save</Button>
            </div>
            <OldConfigBar data={oldConfig}/>
        </form>
    );
};

export default Config;
