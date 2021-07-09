// @ts-ignore
import saveFile from "save-as-file";

const saveJSON = (data, filename = 'token-to-code') => {
    if (!data) {
        return;
    }
    const json = JSON.stringify(data, null, 2);
    // @ts-ignore
    const file = new File([json], {type: 'application/json'});
    saveFile(file, `${filename}.json`);
};


export default saveJSON;
