import Highlight from "./Highlight";
import 'highlight.js/styles/atom-one-dark.css';
import Button from "../../component/Button";
import * as React from "react";
import {useState} from "react";
import clipboardCopy from "clipboard-copy";
import NoSelection from "./NoSelection";


const DEFAULT_COPY = 'Copy';
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
          <Highlight languages={["css"]} className="css">
            {`/* @import '~sacss'; */\n\n${code||''}`}
          </Highlight>
        </div>
      )}
      <div className="g_row df aic pt12 pb12 bc:fff">
        <a className="btn mr8" href="https://www.npmjs.com/package/sacss" target="_blank">NPM SACSS</a>
        <Button
          className="f1"
          disabled={noSelection || copyText !== DEFAULT_COPY}
          onClick={onCopy}
          block>{copyText}</Button>
      </div>
    </>
  )
};

export default RenderCSS;
