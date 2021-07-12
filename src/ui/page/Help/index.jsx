import OldConfigBar from "../Config/OldConfigBar";

const Help = ({oldConfig}) => {

    return (
        <div className="f1">
            <a className="g_row df jcsb aic g_hr pt8 pb8 c:s c:primary:h fs14 fw500 pl8 pr8 fw700 lh24"
               href="https://github.com/s-acss/figma-token-to-code" target="_blank" title="Help">
                <strong>Github 👉</strong>
                <span>
                <img className="db"
                     src="https://img.shields.io/github/stars/s-acss/figma-token-to-code.svg?style=social"
                     alt="figma-token-to-code"/>
            </span>
            </a>
            <a className="g_row df jcsb aic g_hr pt8 pb8 c:s c:primary:h fs14 fw500 pl8 pr8 fw700 lh24"
               href="https://www.npmjs.com/package/sacss" target="_blank">
                <strong>NPM 👉</strong>
                <span>
                <img className="db" src="https://img.shields.io/npm/v/sacss.svg" width="80" height="20"
                     alt="sacss"/>
            </span>
            </a>
            <OldConfigBar className="g_hr" data={oldConfig}/>
        </div>
    )
};

export default Help;
