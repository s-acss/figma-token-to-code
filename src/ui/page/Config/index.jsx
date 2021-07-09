import {useEffect, useRef, useState} from 'preact/hooks';
import Button from "../../component/Button";
import "./index.less";
import _postConfig from "./_postConfig.js";
import Textarea from "../../component/Textarea";
import toast from "../../component/Toast/toast";

const Config = () => {
    const [config, setConfig] = useState({});
    const form = useRef(null);
    const isEmpty = Object.keys(config).length === 0;

    useEffect(() => {
        onmessage = (({data: {pluginMessage} = {}}) => {
            const {getConfig = null, alertMsg = null} = pluginMessage;
            (getConfig !== null) && setConfig(getConfig || {});
            alertMsg && toast(alertMsg);
        });
    }, []);

    // 修改
    const onEdit = (e) => {
        e.preventDefault();
        const dataSave = e.target.data.value;
        if(!dataSave.trimStart().trimEnd()){
            toast("Config can't empty");
            return;
        }
        try {
            const objData = JSON.parse(dataSave);
            if (objData) {
                _postConfig({
                    action: 'edit',
                    value: objData
                });
            }
            form.current.reset();
        } catch (error) {
            toast('Save error');
        }
    };
    return (
        <form onSubmit={onEdit} ref={form} className="f1 df fdc">
            <Textarea style={{backgroundColor: '#282c34', color:'rgba(255, 255, 255, 0.8)', borderRadius:0}} name="data" className="f1" defaultValue={isEmpty ? "" : JSON.stringify(config, null, 2)}
                      placeholder="Parse your config here"/>
            <div className="df aic g_row pt8 pb8">
                <p className="fs12 c:s">⬆️ Parse your config in textarea</p>
                <Button type="reset" className="mla">Reset</Button>
                <Button type="submit" className="ml8">Save</Button>
            </div>
        </form>
    );
};

export default Config;
