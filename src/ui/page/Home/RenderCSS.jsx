import Highlight from "./Highlight";

import Button from "../../component/Button";

import {useState} from 'preact/hooks';
import clipboardCopy from "clipboard-copy";
import NoSelection from "./NoSelection";


const DEFAULT_COPY = 'Copy';

const CODE_PRE = `/*
 * All rules in 「 sacss 」 will filter out.
 * Make sure you got 「 scass 」 in your project
 * $ npm install sacss
 * @import '~sacss';
 */\n
`;

const RenderCSS = ({noSelection = true, code}) => {

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
            {noSelection ? <NoSelection/> : (
                <div className="f1 oa" style={{backgroundColor: '#282c34'}}>
                    <Highlight language="css" className="css">
                        {`${CODE_PRE}${code || ''}`}
                    </Highlight>
                </div>
            )}
            <div className="g_row df aic jcsb pt8 pb8 bc:fff">
                <a className="mr8" href="https://www.npmjs.com/package/sacss" target="_blank">
                    <img src="https://img.shields.io/npm/v/sacss.svg" width="80" height="20" alt="sacss"/>
                </a>
                <Button
                    disabled={noSelection || copyText !== DEFAULT_COPY}
                    onClick={onCopy}>{copyText}</Button>
            </div>
        </>
    )
};

export default RenderCSS;
