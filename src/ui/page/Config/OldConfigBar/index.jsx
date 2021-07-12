import Button from "../../../component/Button";
import saveJSON from "../../../utils/saveJSON";
import transProject from "./transProject";


function transOld(data = {}) {
    const {projects = [], isJSX = false} = data;
    return projects.map((props) => transProject({isJSX, ...props}));
}

function OldConfigBar({data = {}, className = ""}) {
    const isEmpty = Object.keys(data).length === 0;
    if (isEmpty) {
        return null;
    }
    // 下载文件
    const onDownload = (e) => {
        e.preventDefault();
        saveJSON(transOld(data), 'token-to-code');
    };

    return (
        <div className="df jcsb aic">
            <p className="fs12 c:s">Download all the configs in your localstorage and parse one of them to use</p>
            <Button onClick={onDownload} className="c:m ml8">Download</Button>
        </div>
    )
};

export default OldConfigBar;