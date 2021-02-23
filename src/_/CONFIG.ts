const CONFIG_DEFAULT = {
  currentIndex: 0,
  isJSX: false,
  projects: []
};

const CONFIG = {
  key: 'SACSS',
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
    figma.clientStorage.setAsync(CONFIG.key, store);
  },
  addNewProject: ({name = '', token = {}} = {}) => {
    const store = CONFIG.getAll();
    store.projects.push({
      name,
      token
    });
    store.currentIndex = store.projects.length - 1;
    figma.clientStorage.setAsync(CONFIG.key, store);
  },
  changeProjectName: ({name, index}) => {
    const store = CONFIG.getAll();
    store.projects[index].name = name;
    figma.clientStorage.setAsync(CONFIG.key, store);
  },
  replaceProject: ({data, index}) => {
    const store = CONFIG.getAll();
    store.projects[index] = data;
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
        CONFIG.store = ret || CONFIG_DEFAULT;
        resolve(CONFIG.getToken());
        // 没有缓存创建一个新的
        (!ret) && figma.clientStorage.setAsync(CONFIG.key, CONFIG_DEFAULT);
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
  getInfoById: (id = '') => {
    if (!id) {
      return null;
    }
    const tokenConfig = CONFIG.getToken() || {};
    // 如果有自定义用自定义的
    return tokenConfig[id];
  },
  /**
   * 获取所有的 Token 包括 Component
   */
  getAllTokens: () => {
    /**
     * 组件的默认属性
     */
    const COMPONENT_DEFAULT = {
      classNames: [],
      componentName: '',
      stopRenderChildren: false,
      ignoreClassNames: []
    };

    /**
     * Token 默认属性
     */
    const TOKEN_DEFAULT = {
      classNames: [],
      ignoreClassNames: []
    };
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
    const addConfig = (data = [], template = {}) => {
      data.forEach((item) => {
        token[item.id] = {
          ...template,
          name: item.name,
          type: item.type
        };
      });
    };
    addConfig(components, COMPONENT_DEFAULT);
    addConfig(figma.getLocalPaintStyles(), TOKEN_DEFAULT);
    addConfig(figma.getLocalTextStyles(), TOKEN_DEFAULT);
    addConfig(figma.getLocalEffectStyles(), TOKEN_DEFAULT);
    addConfig(figma.getLocalGridStyles(), TOKEN_DEFAULT);
    figma.ui.postMessage({
      gotAllTokens: {
        name,
        ignoreClassNames: [],
        token
      }
    });
  }
};
export default CONFIG;
