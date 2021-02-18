import * as React from "react";
import {useEffect, useState} from "react";
import clipboardCopy from "clipboard-copy";
import Highlight from "react-highlight";
import 'highlight.js/styles/atom-one-dark.css';
import Button from "../../component/Button";

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

const Home = ({tabIndex}) => {
  const [copyText, setCopyText] = useState(DEFAULT_COPY);
  const [html, setHtml] = useState('');
  const [CSS, setCSS] = useState('');
  const [isJSX, setIsJSX] = useState(false);
  const [noSelection, setNoSelection] = useState(true);

  useEffect(() => {
    onmessage = (({data: {pluginMessage} = {}}) => {
      const {getHTML = null, getCSS = null, isJSX = null, noSelection = null} = pluginMessage;
      getHTML !== null && setHtml(getHTML);
      getCSS !== null && setCSS(getCSS);
      isJSX !== null && setIsJSX(isJSX);
      noSelection !== null && setNoSelection(noSelection);
    });
  }, []);

  const onCopy = (e) => {
    e.preventDefault();
    const textMap = ['HTML', 'CSS'];
    const actionMap = [html, CSS];
    clipboardCopy(actionMap[tabIndex]).then(() => {
      setCopyText(`${textMap[tabIndex]} Copy Success`);
      setTimeout(() => {
        setCopyText('Copy');
      }, 2000);
    });
  };

  if (noSelection) {
    return (
      <div style={{color: 'rgba(255,255,255,0.8)', backgroundColor: '#282c34'}} className="f1 df aic jcc fs14">
        Please Select Something!
      </div>);
  }

  if (tabIndex === 0) {
    return (
      <>
        <div className="f1 oa" style={{backgroundColor: '#282c34'}}>
          <Highlight language="html">
            {html}
          </Highlight>
        </div>
        <div className="g_row df aic pt12 pb12 bc:fff">
          <InputJSX isJSX={isJSX}/>
          <Button
            className="f1"
            disabled={noSelection || copyText !== DEFAULT_COPY}
            onClick={onCopy}
            block>{copyText}</Button>
        </div>
      </>
    )
  }

  if (tabIndex === 1) {
    return (
      <>
        <div className="f1 oa" style={{backgroundColor: '#282c34'}}>
          <Highlight language="css">
            {`/* @import '~@_nu/css-acss'; */\n\n${CSS}`}
          </Highlight>
        </div>
        <div className="g_row df aic pt12 pb12 bc:fff">
          <a className="btn mr8" href="https://www.npmjs.com/package/@_nu/css-acss" target="_blank">NPM ACSS</a>
          <Button
            className="f1"
            disabled={noSelection || copyText !== DEFAULT_COPY}
            onClick={onCopy}
            block>{copyText}</Button>
        </div>
      </>
    )
  }
  return null;
};

export default Home;
