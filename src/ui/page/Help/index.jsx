import Highlight from "../../component/Highlight";

const CODE= `/* base config */
{
  "isJSX": true, /* is jsx in html */
  "_ignoreClassName": [], /* ignore in html*/
  "tokens": {
    /* Config default token */
    "$tokenId":{
        "DEFAULT":{
          "className": [],   /* ignore in html*/
          "_ignoreClassName": [] /* ignore in html*/
        }
        /* 
        * just help you to know 
        * what's this token mean 
        */
        "_tokenName": "***", 
        "_tokenType": "***"
    },
    /* Config Text token */
    "$tokenId":{
        /* When Token match the TEXT Element */
        "TEXT":{
          "className": [],   /* ignore in html*/
          "_ignoreClassName": [] /* ignore in html*/
        }
        /* When Token match the other Element */
        "DEFAULT":{
          "className": [],   /* ignore in html*/
          "_ignoreClassName": [] /* ignore in html*/
        },
        /* 
        * just help you to know 
        * what's this token mean 
        */
        "_tokenName": "***", 
        /* 
         * PAINT Token can work on 
         * color, background-color, fill 
         */
        "_tokenType": "PAINT"
    },  
    /* Config Component token */
    "$tokenId": {
        "DEFAULT":{
          "tagName": "Button", /* tag name of element */
          "className": [],   /* class in html*/
          /*
           * TEXT: only render text in this element
           * false: ignore children in this component
           */
          "children": "TEXT",    
          "_ignoreClassName": [], /* ignore in html*/
          "_renderWidth": false,  /* is render width */
          "_renderHeight": false, /* is render height*/
          /* 
           * The rest below 
           * will render as component props 
           */
          "size": "middle",
          "type": "primary",
        },
        /* 
        * just help you to know 
        * what's this token mean 
        */
        "_tokenName": "Button",
        "_tokenType": "COMPONENT"
    }
  }
}`;

const Help = () => {
    return (
        <>
            <div className="f1 oa">
                <Highlight className="fs12" language="json">
                    {CODE}
                </Highlight>
            </div>
            <div className="g_row df pt8 pb8 jcsb aic jcsb fs12 lh16">
                <a className="df jcsb aic c:s c:primary:h"
                   href="https://github.com/s-acss/figma-token-to-code" target="_blank" title="Help">
                    <strong className="mr4">Github</strong>
                    <span>
                        <img className="db"
                             src="https://img.shields.io/github/stars/s-acss/figma-token-to-code.svg?style=social"
                             alt="figma-token-to-code"/>
                    </span>
                </a>
                <a className="df jcsb aic c:s c:primary:h"
                   href="https://www.npmjs.com/package/sacss" target="_blank">
                    <strong className="mr4">NPM</strong>
                    <span>
                        <img className="db" src="https://img.shields.io/npm/v/sacss.svg" width="80" height="20"
                             alt="sacss"/>
                    </span>
                </a>
            </div>
        </>

    )
};

export default Help;
