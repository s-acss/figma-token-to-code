import {forwardRef} from "preact/compat";
import saveJSON from "../../utils/saveJSON";
import InputRow from "../../component/InputRow";
import Input from "../../component/Input";
import Button from "../../component/Button";

const ProjectItem = forwardRef(({data = {}, index, checked, projects = [], className = ''}, ref) => {
    const {name = '', ignoreClassName = '', token = {}} = data;
    const tokenLen = Object.keys(token).length;

    // 下载 JSON
    const onDownLoad = (e) => {
        e.preventDefault();
        saveJSON(data, data.name);
    };

    // 删除
    const onDel = (e) => {
        e.preventDefault();
        const result = confirm(`Are you sure to delete ${name}?`);
        if (!result) {
            return;
        }
        _postConfig({
            action: 'remove',
            value: index
        });
    };

    // 校验项目是否已经存在
    const checkName = (value) => {
        if (!value) {
            alert('project name is required!');
            return false;
        }
        if ((name !== value) && projects.find((item) => item.name === value)) {
            alert(`${value} is exist!`);
            return false;
        }
        return true;
    };

    // 上传文件
    const onReplace = (e) => {
        const files = e.target.files || [];
        if (!files.length) {
            return;
        }
        var fr = new FileReader();
        fr.onload = function (e) {
            var result = JSON.parse(e.target.result);
            checkName(result.name) && _postConfig({
                action: 'replaceByIndex',
                value: {
                    data: result,
                    index
                }
            });
        }
        fr.readAsText(files.item(0));
    };

    // 修改
    const onSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const currentName = form.name.value;

        if (checkName(currentName)) {
            _postConfig({
                action: 'editByIndex',
                value: {
                    data: {
                        name: currentName,
                        ignoreClassName: form.ignoreClassName.value
                    },
                    index
                }
            });
        }
    };

    return (
        <form ref={ref} onSubmit={onSubmit} className={`g_row pr pt12 pb12 ${className}`}>
            <div className="mb8 df jcsb aic">
                <span className="f1 g_ell mr8">{name}</span>
                <strong className="fs14 c:m">{tokenLen ? `${tokenLen} tokens in this project` : 'No Token'}</strong>
            </div>
            <InputRow className="mb8" label="Project Name">
                <Input placeholder="Project Name" className="f1 mr8" name="name" defaultValue={name}/>
            </InputRow>
            <InputRow className="mb8 g_tip" data-title="it's for each token, split with blank" label="ignoreClassName">
                <Input
                    name="ignoreClassName"
                    placeholder={`Enter`}
                    className="w100% tar"
                    type="text"
                    defaultValue={ignoreClassName}
                />
            </InputRow>
            {/*<InputRow className="mb8 g_tip" data-title="Exp: w980=g_wrap, w1008=g_row" label="replaceClassName">*/}
            {/*  <Input*/}
            {/*    name="replaceClassName"*/}
            {/*    placeholder={`Enter`}*/}
            {/*    className="w100% tar"*/}
            {/*    type="text"*/}
            {/*    defaultValue={replaceClassName}*/}
            {/*  />*/}
            {/*</InputRow>*/}
            <Button type="submit" block className="mb8">Save</Button>
            <div className="g_hr mb16"></div>
            <div className="df">
                <label className="btn f1 pr oh g_tip mr8" data-title="Replace By Upload JSON">
                    Replace
                    <input className="o0 pa w100% h100%" type="file" onChange={onReplace}/>
                </label>
                <Button title="Download" className="g_tip f1 mr8" data-title="Download JSON" onClick={onDownLoad}>
                    DownLoad
                </Button>
                {(name === 'default') ? (
                    <div className="g_tip f1" data-title="Default Can't Delete">
                        <Button disabled block title="Delete">
                            Delete
                        </Button>
                    </div>
                ) : (
                    <Button className="f1 g_tip" block title="Delete" data-title="Delete this project" onClick={onDel}>
                        Delete
                    </Button>
                )}
            </div>
        </form>
    );
});


export default ProjectItem;