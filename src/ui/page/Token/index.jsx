import "./index.less";
import toast from "../../component/Toast/toast";
import Button from "../../component/Button";
import Textarea from "../../component/Textarea";
import _postConfig from "../Config/_postConfig";
import {useRef, useState} from "preact/hooks";

const Token = ({selectionTokens, noSelection}) => {
    const tokenKeys = Object.keys(selectionTokens);
    const lenToken = tokenKeys.length;
    const isEmpty = noSelection || lenToken === 0;
    const [selectedId, setSelectedId] = useState(isEmpty ? null : tokenKeys[0]);
    const form = useRef(null);

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

    const onChange = (e) => {
        setSelectedId(e.target.value);
    };

    const onReset = (e) => {
        if (!isEmpty) {
            setSelectedId(tokenKeys[0]);
        }
    };

    const renderData = (() => {
        if (isEmpty) {
            return "";
        }
        let useId = selectedId || tokenKeys[0];
        console.log(useId);
        return JSON.stringify({
            [useId]: selectionTokens[useId]
        }, null, 2);
    })();

    return (
        <form className="f1 df fdc" rel={form} onSubmit={onSave} onReset={onReset}>
            <Textarea
                style={{backgroundColor: '#282c34', color: 'rgba(255, 255, 255, 0.8)', borderRadius: 0}}
                name="data"
                className="f1"
                defaultValue={renderData}
                placeholder="Please Select Something!"/>
            <div className="g_row df aic jcsb tac pt8 pb8 lh24 bc:fff">
                <div>
                    <span className="fs12 lh16 c:s mr8">Matched {isEmpty ? 0 : lenToken} Token: </span>
                    {!isEmpty ? (
                        <select disabled={isEmpty} onChange={onChange}>
                            {Object.keys(selectionTokens).map((tokenId) => {
                                return (
                                    <option key={tokenId} value={tokenId}>{selectionTokens[tokenId]._tokenName}</option>
                                )
                            })}
                        </select>) : null}
                </div>
                <Button type="reset" className="mla">Reset</Button>
                <Button disabled={isEmpty} type="submit" className="ml8">Save</Button>
            </div>
        </form>
    );
};
export default Token;
