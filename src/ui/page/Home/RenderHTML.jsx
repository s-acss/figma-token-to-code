import Highlight from "./Highlight";
import 'highlight.js/styles/atom-one-dark.css';
import format from "xml-formatter";
import Button from "../../component/Button";
import clipboardCopy from "clipboard-copy";
import * as React from "react";
import {useState} from "react";


const DEFAULT_COPY = 'Copy';

const InputJSX = ({isJSX}) => {
  const onChangeJSX = (e) => {
    parent.postMessage({
      pluginMessage: {
        type: `CONFIG.changeJSX`,
        value: e.target.checked
      }
    }, '*');
  };
  return (
    <label className="mr16">
      <strong className="fs14">JSX:</strong>
      <input type="checkbox" checked={isJSX} onChange={onChangeJSX}/>
    </label>
  )
}

const RenderHtml = ({code, isJSX}) => {

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
      <div className="f1 oa" style={{backgroundColor: '#282c34'}}>
        <Highlight languages={["xml"]} className="xml">
          {format(code)}
        </Highlight>
      </div>
      <div className="g_row df aic pt12 pb12 bc:fff">
        <InputJSX isJSX={isJSX}/>
        <Button
          className="f1"
          disabled={copyText !== DEFAULT_COPY}
          onClick={onCopy}
          block>{copyText}</Button>
      </div>
    </>
  );
}

export default RenderHtml;
