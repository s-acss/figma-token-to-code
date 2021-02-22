import Highlight from "./Highlight";
import 'highlight.js/styles/atom-one-dark.css';
import Button from "../../component/Button";
import * as React from "react";
import {useState} from "react";
import clipboardCopy from "clipboard-copy";


const DEFAULT_COPY = 'Copy';
const RenderCSS = ({code}) => {

    const [copyText, setCopyText] = useState(DEFAULT_COPY);
    const onCopy = (e) => {
        e.preventDefault();
        clipboardCopy(code).then(() => {
            setCopyText(`CSS Copy Success`);
            setTimeout(() => {
                setCopyText('Copy');
            }, 2000);
        });
    };
    return (
        <>
            <div className="f1 oa" style={{backgroundColor: '#282c34'}}>
                <Highlight languages={["css"]} className="css">
                    {`/* @import '~@_nu/css-acss'; */\n\n${code}`}
                </Highlight>
            </div>
            <div className="g_row df aic pt12 pb12 bc:fff">
                <a className="btn mr8" href="https://www.npmjs.com/package/@_nu/css-acss" target="_blank">NPM ACSS</a>
                <Button
                    className="f1"
                    disabled={copyText !== DEFAULT_COPY}
                    onClick={onCopy}
                    block>{copyText}</Button>
            </div>
        </>
    )
};

export default RenderCSS;
