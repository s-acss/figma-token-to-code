import COMPONENT from "./COMPONENT";

const CONFIG_DEFAULT = {
    isJSX: false,
    _ignoreClassName: [],
    tokens: {}
};

const VERSION = "1.0";


const CONFIG = {
    key: `TokenToCode-${VERSION}`,
    store: CONFIG_DEFAULT,
    changeJSX: (value) => {
        const store = CONFIG.getCurrent();
        // 重置回第一个
        store.isJSX = value;
        // console.log(store);
        figma.clientStorage.setAsync(CONFIG.key, store);
    },
    edit: (data) => {
        CONFIG.store = data;
        figma.clientStorage.setAsync(CONFIG.key, data);
        figma.ui.postMessage({
            // @ts-ignore
            alertMsg: `Save success`
        });
    },
    addToken: (data) => {
        const {tokens, ...rest} = CONFIG.getCurrent();
        const newStore = {...rest, tokens: {...tokens, ...data}};
        CONFIG.store = newStore;
        figma.clientStorage.setAsync(CONFIG.key, newStore);
        figma.ui.postMessage({
            // @ts-ignore
            alertMsg: `Save success`
        });
    },
    isJSX: () => {
        return !!CONFIG.store.isJSX;
    },
    init: () => {
        return new Promise(((resolve, reject) => {
            figma.clientStorage.getAsync(CONFIG.key).then((ret = null) => {
                if (ret) {
                    CONFIG.store = ret;
                } else {
                    // 没有缓存创建一个新的
                    figma.clientStorage.setAsync(CONFIG.key, CONFIG_DEFAULT);
                    CONFIG.store = CONFIG_DEFAULT;
                }
                resolve(CONFIG.getToken());
            }).catch(reject);
        }));
    },
    getCurrent: () => {
        return CONFIG.store;
    },
    getToken: () => {
        const {tokens = null} = CONFIG.store || {};
        return tokens ? JSON.parse(JSON.stringify(tokens)) : null;
    },
    getInfoById: (id, type = "DEFAULT") => {
        if (!(id && (typeof id === 'string'))) {
            return null;
        }
        const {key = ''} = figma.getStyleById(id) || {};
        if (!key) {
            return null;
        }
        const tokenConfig = CONFIG.getToken() || {};
        const matchToken = tokenConfig[key] || {};
        // console.log('getInfoById', matchToken, type)
        // 如果有自定义用自定义的
        return matchToken[type] || matchToken.DEFAULT || null;
    },
    getSelectionTokens: (selection) => {
        const {tokens = {}} = CONFIG.store;
        if (!selection) {
            return {
                selectionTokens: null
            };
        }
        const matchToken = {};
        // 如果是组件
        if (COMPONENT.isComponent(selection)) {
            //@ts-ignore
            const {key, name, type} = COMPONENT.getMainComponent(selection);
            const findToken = tokens[key] || {};
            matchToken[key] = {
                DEFAULT: {
                    className: [],
                    _ignoreClassName: [],
                    _renderWidth: false,
                    _renderHeight: false,
                },
                ...findToken,
                _tokenName: name,
                _tokenType: type
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
            let extraToken = null;
            // 如果有 fillStyleId
            if (key === 0) {
                extraToken = {
                    // 可以额外对文字进行设置
                    "TEXT": {
                        className: [],
                        _ignoreClassName: []
                    }
                }
            }
            matchToken[styleKey] = {
                DEFAULT: {
                    className: [],
                    _ignoreClassName: []
                },
                ...extraToken,
                ...tokens[styleKey],
                _tokenName: name,
                _tokenType: type
            }
        });
        return {
            selectionTokens: matchToken
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
