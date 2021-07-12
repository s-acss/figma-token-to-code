import Button from "../../../component/Button";
import saveJSON from "../../../utils/saveJSON";
import transProject from "./transProject";


function OldConfigBar({data = {}, className = ""}) {
    const {projects = []} = data;
    if (!projects.length) {
        return null;
    }
    // 下载文件
    const onDownload = (key) => {
        saveJSON(transProject(projects[key]), 'token-to-code');
    };

    return (
        <div className="g_row g_hr pt8 pb8">
            <p className="fs12 c:s mb8">There are {projects.length} project in your localstorage. Download and parse one
                of them to use.</p>
            {projects.map((projects, key) => {
                return (
                    <div className="df mt8 aic">
                        <p className="g_ell f1 fs12 c:s">
                            {projects.name}
                        </p>
                        <Button onClick={(e) => {
                            e.preventDefault();
                            onDownload(key);
                        }} className="c:m ml8">Download</Button>
                    </div>
                )
            })}
        </div>
    )
};

export default OldConfigBar;