import hljs from 'highlight.js/lib/core';
import xml from 'highlight.js/lib/languages/xml';
import css from 'highlight.js/lib/languages/css';
import {useEffect, useState} from "preact/hooks";
import 'highlight.js/styles/atom-one-dark.css';

hljs.registerLanguage('xml', xml);
hljs.registerLanguage('css', css);

const CSS_MAP = {
    "xml": "xml",
    "css": "css"
};

function Highlight({children = "", className = "", language = "xml"}) {
    const [strHtml, setStrHtml] = useState('');
    const appendClassName = CSS_MAP[language] || '';
    useEffect(() => {
        const html = hljs.highlight(children, {language}).value;
        setStrHtml(html);
    }, [children, language]);
    return (
        <pre className={`hljs ${className} ${appendClassName}`} dangerouslySetInnerHTML={{__html: strHtml}}/>
    );
};

export default Highlight;
