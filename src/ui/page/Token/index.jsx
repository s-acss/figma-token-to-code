import {useEffect, useState} from 'preact/compat';
import "./index.less";
import toast from "../../component/Toast/toast";
import Button from "../../component/Button";
import Textarea from "../../component/Textarea";
import _postConfig from "../Config/_postConfig";
import {useRef} from "preact/hooks";

const Token = () => {
    const [selectionTokens, setSelectionTokens] = useState({});
    const isEmpty = Object.keys(selectionTokens).length === 0;
    const form = useRef(null);

    useEffect(() => {
        onmessage = (({data: {pluginMessage} = {}}) => {
            const {selectionTokens = null, alertMsg = null} = pluginMessage;
            (selectionTokens !== null) && setSelectionTokens(selectionTokens || {});
            alertMsg && toast(alertMsg);
        });
    }, []);

    const onSave = (e) => {
        e.preventDefault();
        const data = e.target.data.value;
        try {
            const objData = JSON.parse(data);
            if (objData) {
                _postConfig({
                    action: 'addToken',
                    value: objData
                });
            }
        } catch (error) {
            toast('Save error');
        }
    }

    return (
        <form className="f1 df fdc" rel={form} onSubmit={onSave}>
            <Textarea
                style={{backgroundColor: '#282c34', color: 'rgba(255, 255, 255, 0.8)', borderRadius: 0}}
                name="data"
                className="f1"
                defaultValue={isEmpty ? "" : JSON.stringify(selectionTokens, null, 2)}
                placeholder="The node you selected without any token"/>
            <div className="g_row df aic jcsb tac pt8 pb8 lh24 bc:fff">
                <Button type="reset" className="mla">Reset</Button>
                <Button disabled={isEmpty} type="submit" className="ml8">Save</Button>
            </div>
        </form>
    );
};
export default Token;
