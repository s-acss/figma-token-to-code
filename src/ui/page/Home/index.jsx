import * as React from "react";
import {useEffect, useState} from "react";
import RenderHtml from "./RenderHTML";
import RenderCSS from "./RenderCSS";

const Home = ({tabIndex}) => {
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

    if (tabIndex === 0) {
        return (<RenderHtml noSelection={noSelection} code={html} isJSX={isJSX}/>)
    }
    if (tabIndex === 1) {
        return <RenderCSS noSelection={noSelection} code={CSS}/>
    }
    return null;
};

export default Home;
