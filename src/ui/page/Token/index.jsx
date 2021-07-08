import {useEffect, useState} from 'preact/compat';
import "./index.less";
import Textarea from "../../component/Textarea";

const Token = () => {
    const [selectionInfo, setSelectionInfo] = useState({});
    const {name = '--', token: selectionTokens = {}} = selectionInfo || {};
    const selectionIds = Object.keys(selectionTokens);

    useEffect(() => {
        onmessage = (({data: {pluginMessage} = {}}) => {
            const {getSelectionInfo = null, alertMsg = null} = pluginMessage;
            (getSelectionInfo !== null) && setSelectionInfo(getSelectionInfo);
            (alertMsg !== null) && alertMsg && alert(alertMsg);
        });
    }, []);

    return (
        <div className="f1 df fdc oh">
            <div className="g_row df aic jcsb fs14 pt8 pb8">
                <strong className="c:s fs12 mr8">Current: </strong>
                <select disabled>
                    <option value={name}>{name}</option>
                </select>
            </div>
            {selectionIds.length ? (
                <Textarea readonly className="f1">
                    {JSON.stringify(selectionTokens, null, 2)}
                </Textarea>
            ) : (
                <Textarea className="f1 df oh c:s fs14 tac aic jcc">The node you select without any token</Textarea>
            )}
        </div>
    );
};

export default Token;
