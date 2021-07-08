import COMPONENT from "./COMPONENT";

const PRO_DEFAULT = {
    name: 'default',
    ignoreClassName: '',
    token: {}
};

const CONFIG_DEFAULT = {
    currentIndex: 0,
    isJSX: false,
    projects: [PRO_DEFAULT]
};

const CONFIG = {
    key: 'TokenToCode',
    store: CONFIG_DEFAULT,
    changeCurrent: (index) => {
        const store = CONFIG.getAll();
        store.currentIndex = index;
        figma.clientStorage.setAsync(CONFIG.key, store);
    },
    changeJSX: (value) => {
        const store = CONFIG.getAll();
        // 重置回第一个
        store.isJSX = value;
        // console.log(store);
        figma.clientStorage.setAsync(CONFIG.key, store);
    },
    remove: (index) => {
        const store = CONFIG.getAll();
        // 重置回第一个
        store.currentIndex = 0;
        store.projects.splice(index, 1);
        if (!store.projects.length) {
            store.projects.push(PRO_DEFAULT);
        }
        figma.clientStorage.setAsync(CONFIG.key, store);
    },
    addNewProject: ({name = '', token = {}} = {}) => {
        const store = CONFIG.getAll();
        store.projects.push({
            name,
            ignoreClassName: '',
            token
        });
        store.currentIndex = store.projects.length - 1;
        figma.clientStorage.setAsync(CONFIG.key, store);
    },
    editByIndex: ({data, index}) => {
        const store = CONFIG.getAll();
        const current = store.projects[index];
        store.projects[index] = {
            name: data.name,
            ignoreClassName: data.ignoreClassName,
            token: data.token ? data.token : current.token
        };
        figma.clientStorage.setAsync(CONFIG.key, store);
        // console.log(store);
        figma.ui.postMessage({
            // @ts-ignore
            alertMsg: `${data.name} save success`
        });
    },
    replaceByIndex: ({data, index}) => {
        const store = CONFIG.getAll();
        store.projects[index] = data || {};
        figma.clientStorage.setAsync(CONFIG.key, store);
        figma.ui.postMessage({
            alertMsg: `${data.name} replace success`
        });
    },
    appendToken: (appendToken = {}) => {
        const current = CONFIG.getCurrent();
        const {token = {}} = current;
        current.token = {...token, ...appendToken};
        // console.log(appendToken, CONFIG.store);
        figma.clientStorage.setAsync(CONFIG.key, CONFIG.store);
        figma.ui.postMessage({
            alertMsg: `${current.name} save success`
        });
    },
    isJSX: () => {
        return !!CONFIG.store.isJSX;
    },
    getAll: () => {
        return CONFIG.store;
    },
    init: () => {
        return new Promise(((resolve, reject) => {
            figma.clientStorage.getAsync(CONFIG.key).then((ret) => {
                if (ret && ret.projects && ret.projects.length) {
                    CONFIG.store = ret;
                } else {
                    // 没有缓存创建一个新的
                    figma.clientStorage.setAsync(CONFIG.key, CONFIG_DEFAULT);
                    CONFIG.store = CONFIG_DEFAULT;
                }
                resolve(CONFIG.getToken());
            }).catch(reject);
        }))
    },
    getCurrent: () => {
        const currentIndex = CONFIG.store.currentIndex;
        const current = CONFIG.store.projects[currentIndex];
        return current;
    },
    getToken: () => {
        const {token = null} = CONFIG.getCurrent() || {};
        return token ? JSON.parse(JSON.stringify(token)) : null;
    },
    getInfoById: (id) => {
        if (!(id && (typeof id === 'string'))) {
            return null;
        }
        const {key = ''} = figma.getStyleById(id) || {};
        if (!key) {
            return null;
        }
        const tokenConfig = CONFIG.getToken() || {};
        // 如果有自定义用自定义的
        return tokenConfig[key];
    },
    getSelectionTokens: (selection) => {
        const {name = '', token = {}} = CONFIG.getCurrent() || {};
        // console.log('runToken getSelectionTokens');
        if (!selection) {
            return {
                getSelectionInfo: {
                    name
                }
            };
        }
        const matchToken = {};
        // 如果是组件
        if (COMPONENT.isComponent(selection)) {
            //@ts-ignore
            const {key, name, type} = COMPONENT.getMainComponent(selection);
            const findToken = token[key] || {};
            matchToken[key] = {
                ...findToken,
                name,
                type
            };
        }
        //@ts-ignore
        [selection.fillStyleId, selection.textStyleId, selection.strokeStyleId, selection.effectStyleId, selection.gridStyleId].forEach((item, key) => {
            if (!item) {
                return '';
            }
            const {key: styleKey, name, type} = figma.getStyleById(item) || {};
            if (!styleKey) {
                return '';
            }
            matchToken[styleKey] = {
                ...token[styleKey],
                name,
                type
            }
        });
        return {
            getSelectionInfo: {
                name,
                token: matchToken
            }
        };
    },
    /**
     * 获取所有的 Token 包括 Component
     */
    getAllTokens: () => {
        const name = figma.root.name;
        const components = figma.root.findAll(c => {
            if (c.type === 'COMPONENT_SET') {
                return true;
            }
            if (c.type !== 'COMPONENT') {
                return false;
            }
            if (c.parent.type === 'COMPONENT_SET') {
                return false;
            }
            return true;
        });
        const token = {};
        const addConfig = (data = []) => {
            data.forEach((item) => {
                token[item.id] = {
                    name: item.name,
                    type: item.type
                };
            });
        };
        addConfig(components);
        addConfig(figma.getLocalPaintStyles());
        addConfig(figma.getLocalTextStyles());
        addConfig(figma.getLocalEffectStyles());
        addConfig(figma.getLocalGridStyles());
        figma.ui.postMessage({
            gotAllTokens: {
                name,
                ignoreClassName: '',
                token
            }
        });
    }
};
export default CONFIG;
