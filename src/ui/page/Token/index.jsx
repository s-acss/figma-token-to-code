import {useEffect, useState} from 'preact/compat';
import "./index.less";
import toast from "../../component/Toast/toast";
import Highlight from "../Home/Highlight";
import Button from "../../component/Button";
import clipboardCopy from "clipboard-copy";

const Token = () => {
    const [selectionTokens, setSelectionTokens] = useState({});
    const selectionIds = Object.keys(selectionTokens);

    useEffect(() => {
        onmessage = (({data: {pluginMessage} = {}}) => {
            const {alertMsg = null} = pluginMessage;
            setSelectionTokens(pluginMessage.selectionTokens || {});
            (alertMsg !== null) && alertMsg && toast(alertMsg);
        });
    }, []);

    const onCopy = (e) => {
        e.preventDefault();
        clipboardCopy(JSON.stringify(selectionTokens, null, 2)).then(() => {
            toast('Token Copy Success');
        });
    };

    return (
        <>
            {selectionIds.length ? (
                <Highlight language="json" className="f1">
                    {JSON.stringify(selectionTokens, null, 2)}
                </Highlight>
            ) : (
                <div className="f1 dif aic jcc" style={{backgroundColor: '#282c34', color:'rgba(255, 255, 255, 0.8)'}}>
                    The node you selected without any token
                </div>
            )}
            <div className="g_row df aic jcsb tac pt8 pb8 lh24 bc:fff">
                <p className="fs12 c:s g_ell">Copy the token to the project panel and change them</p>
                <Button onClick={onCopy}>Copy</Button>
            </div>
        </>
    );
};
export default Token;
