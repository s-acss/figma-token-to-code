import Highlight from "./Highlight";
import format from "xml-formatter";
import Button from "../../component/Button";
import clipboardCopy from "clipboard-copy";

import {useState} from 'preact/hooks';
import NoSelection from "./NoSelection";


const DEFAULT_COPY = 'Copy';

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

const RenderHtml = ({code = '', noSelection = true, isJSX}) => {
    const [copyText, setCopyText] = useState(DEFAULT_COPY);
    const onCopy = (e) => {
        e.preventDefault();
        clipboardCopy(code).then(() => {
            setCopyText(`HTML Copy Success`);
            setTimeout(() => {
                setCopyText('Copy');
            }, 2000);
        });
    };
    return (
        <>
            {noSelection ? <NoSelection/> : (
                <div className="f1 oa" style={{backgroundColor: '#282c34'}}>
                    <Highlight language="xml">
                        {code ? `${format(`<div>${code}</div>`)}` : ''}
                    </Highlight>
                </div>
            )}
            <div className="g_row df aic pt12 pb12 bc:fff">
                <InputJSX disabled={noSelection} isJSX={isJSX}/>
                <Button
                    className="f1"
                    disabled={noSelection || copyText !== DEFAULT_COPY}
                    onClick={onCopy}
                    block>{copyText}</Button>
            </div>
        </>
    );
}

export default RenderHtml;
