
const _postConfig = ({action, value}) => {
    parent.postMessage({
        pluginMessage: {
            type: `CONFIG.${action}`,
            value
        }
    }, '*');
};

export default _postConfig;