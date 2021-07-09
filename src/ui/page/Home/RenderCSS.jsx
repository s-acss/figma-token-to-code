import Highlight from "./Highlight";
import Button from "../../component/Button";
import clipboardCopy from "clipboard-copy";
import NoSelection from "./NoSelection";
import toast from "../../component/Toast/toast";

const CODE_PRE = `/*
 * All rules in 「 sacss 」 will filter out.
 * Make sure you got 「 scass 」 in your project
 * $ npm install sacss
 * @import '~sacss';
 */\n
`;

const RenderCSS = ({noSelection = true, code}) => {

    const onCopy = (e) => {
        e.preventDefault();
        clipboardCopy(code || '/* nothing */').then(() => {
            toast('CSS Copy Success');
        });
    };
    return (
        <>
            {noSelection ? <NoSelection/> : (
                <Highlight language="css" className="f1">
                    {`${CODE_PRE}${code || ''}`}
                </Highlight>
            )}
            <div className="g_row df aic jcsb pt8 pb8 bc:fff">
                <a className="mr8" href="https://www.npmjs.com/package/sacss" target="_blank">
                    <img src="https://img.shields.io/npm/v/sacss.svg" width="80" height="20" alt="sacss"/>
                </a>
                <Button onClick={onCopy}>Copy</Button>
            </div>
        </>
    )
};

export default RenderCSS;
