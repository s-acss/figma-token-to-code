const tryOldConfig = () => {
    // 尝试获取
    figma.clientStorage.getAsync("SACSS").then((ret = {}) => {
        const {projects} = ret;
        if (projects && projects.length) {
            setTimeout(()=>{
                console.log("SACSS", ret);
                figma.ui.postMessage({
                    getOldConfig: ret
                });
            }, 16);
        }
    });
};

export default tryOldConfig;