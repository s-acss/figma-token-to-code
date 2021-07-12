import OldConfigBar from "./OldConfigBar/index";
import toast from "../../component/Toast/toast";
import saveJSON from "../../utils/saveJSON";
import transProject from "./OldConfigBar/transProject";

const Help = ({oldConfig}) => {

    // 上传文件
    const onReplace = (e) => {
        const files = e.target.files || [];
        if (!files.length) {
            return;
        }
        var fr = new FileReader();
        fr.onload = function (e) {
            const valueUp = e.target.result;
            if (!valueUp.trimStart().trimEnd()) {
                toast("Config can't empty");
                return;
            }
            const objData = JSON.parse(valueUp);
            saveJSON(transProject(objData), 'token-to-code');
        }
        fr.readAsText(files.item(0));
    };

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
            <div className="g_row pt8 pb8 g_hr">
                <h4 className="fs14 fw700 mb8 m0">Devastating upgrade</h4>
                <div className="df jcsb aic mb8">
                    <p className="fs12 c:s mb4">Upload the old config and convert them</p>
                    <label className="btn dib pr oh g_tip" data-title="Upload old config and get new">
                        Upload and Convert
                        <input className="o0 pa w100% h100% l0 t0" type="file" onChange={onReplace}/>
                    </label>
                </div>
            </div>
            <OldConfigBar data={oldConfig}/>
        </div>
    )
};

export default Help;
