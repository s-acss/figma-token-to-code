import Highlight from "../../component/Highlight";
import format from "xml-formatter";
import Button from "../../component/Button";
import clipboardCopy from "clipboard-copy";
import NoSelection from "../../component/NoSelection";
import toast from "../../component/Toast/toast";

const InputJSX = ({disabled = true, isJSX}) => {
    const onChangeJSX = (e) => {
        parent.postMessage({
            pluginMessage: {
                type: `CONFIG.changeJSX`,
                value: e.target.checked
            }
        }, '*');
    };
    return (
        <label className="mr16 df aic">
            <strong className="fs14 mr4">JSX:</strong>
            <input disabled={disabled} type="checkbox" checked={isJSX} onChange={onChangeJSX}/>
        </label>
    )
}

const HTML = ({code = '', noSelection = true, isJSX}) => {
    const onCopy = (e) => {
        e.preventDefault();
        clipboardCopy(code).then(() => {
            toast('Html Copy Success');
        });
    };
    return (
        <>
            {noSelection ? <NoSelection/> : (
                <Highlight className="f1" language="xml">
                    {code ? format(code) : ''}
                </Highlight>
            )}
            <div className="g_row df aic jcsb pt8 pb8 bc:fff">
                <InputJSX disabled={noSelection} isJSX={isJSX}/>
                <Button onClick={onCopy}>Copy</Button>
            </div>
        </>
    );
}

export default HTML;
