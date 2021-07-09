import {useState} from 'preact/hooks';
import {render} from 'preact';
import Header from "./component/Header/index";
import Tabs from "./component/Tabs";
import Config from "./page/Config/index";
import Token from "./page/Token/index";
import Home from "./page/Home/index";
import './index.less';

const DATA_TAB = ['HTML', 'CSS', 'Token', 'Project'];

const APP = () => {
    const [tabIndex, setTabIndex] = useState(0);

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
            <Header
                extra={
                    <a className="c:s c:primary:h fs14 fw500 pl8 pr8 pt8 pb8 fw700"
                       href="https://github.com/s-acss/figma-token-to-code" target="_blank" title="Help">
                        <img className="vam" src="https://img.shields.io/github/stars/s-acss/figma-token-to-code.svg?style=social"
                             alt="figma-token-to-code"/>
                    </a>
                }>
                <Tabs className="fs14" data={DATA_TAB} tabIndex={tabIndex} onChange={onTabChange}></Tabs>
            </Header>
            {(() => {
                if (tabIndex === 0 || tabIndex === 1) {
                    return <Home tabIndex={tabIndex}/>;
                }
                if (tabIndex === 3) {
                    return <Config/>;
                }
                if (tabIndex === 2) {
                    return <Token/>;
                }
                return null;
            })()}
        </>
    )
};

render(<APP/>, document.getElementById('react-page'));
