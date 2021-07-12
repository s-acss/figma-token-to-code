import {useEffect, useState} from 'preact/hooks';
import {render} from 'preact';
import Header from "./component/Header/index";
import Tabs from "./component/Tabs";
import Config from "./page/Config/index";
import Token from "./page/Token/index";
import HTML from "./page/HTML";
import PageCSS from "./page/CSS";
import PageHelp from "./page/Help";
import './index.less';
import toast from "./component/Toast/toast";

const DATA_TAB = ['HTML', 'CSS', 'Token', 'Config', 'Help'];

const APP = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [html, setHtml] = useState('');
    const [CSS, setCSS] = useState('');
    const [isJSX, setIsJSX] = useState(false);
    const [noSelection, setNoSelection] = useState(true);
    const [selectionTokens, setSelectionTokens] = useState({});
    const [config, setConfig] = useState({});
    const [oldConfig, setOldConfig] = useState({});

    useEffect(() => {
        // 测试有没有旧的配置文件
        parent.postMessage({
            pluginMessage: {
                type: "testOldConfig"
            }
        }, '*');
        onmessage = (({data: {pluginMessage} = {}}) => {
            const {
                getHTML = null,
                getCSS = null,
                isJSX = null,
                noSelection = null,
                selectionTokens = null,
                alertMsg = null,
                getConfig = null,
                getOldConfig = null
            } = pluginMessage;
            // console.log({getHTML, getCSS});
            getHTML !== null && setHtml(getHTML);
            getCSS !== null && setCSS(getCSS);
            isJSX !== null && setIsJSX(isJSX);
            noSelection !== null && setNoSelection(noSelection);
            selectionTokens !== null && setSelectionTokens(selectionTokens || {});
            alertMsg !== null && alertMsg && toast(alertMsg);
            (getConfig !== null) && setConfig(getConfig || {});
            (getOldConfig !== null) && setOldConfig(getOldConfig || {});
        });
    }, []);

    const onTabChange = (index) => {
        setTabIndex(index);
        parent.postMessage({
            pluginMessage: {
                type: `API.onTabChange`,
                value: index
            }
        }, '*');
    };

    return (
        <>
            <Header>
                <Tabs className="fs14" data={DATA_TAB} tabIndex={tabIndex} onChange={onTabChange}></Tabs>
            </Header>
            {(() => {
                if (tabIndex === 0) {
                    return (<HTML noSelection={noSelection} code={html} isJSX={isJSX}/>)
                }
                if (tabIndex === 1) {
                    return <PageCSS noSelection={noSelection} code={CSS}/>
                }
                if (tabIndex === 2) {
                    return <Token selectionTokens={selectionTokens}/>;
                }
                if (tabIndex === 3) {
                    return <Config config={config}/>;
                }
                if (tabIndex === 4) {
                    return <PageHelp oldConfig={oldConfig}/>;
                }
                return null;
            })()}
        </>
    )
};

render(<APP/>, document.getElementById('react-page'));
