const CONFIG_DEFAULT = {
  currentIndex: 0,
  isJSX: false,
  projects: [{
    name: 'default',
    token: {}
  }]
};

const CONFIG = {
  key: 'ACSS',
  store: CONFIG_DEFAULT,
  changeCurrent: (index) => {
    const store = CONFIG.getAll();
    store.currentIndex = index;
    figma.clientStorage.setAsync(CONFIG.key, store);
  },
  changeJSX:(value)=>{
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

        // console.log('config init', ret);
        CONFIG.store = ret?.projects?.length ? ret : CONFIG_DEFAULT;
        if (!ret) {
          figma.clientStorage.setAsync(CONFIG.key, CONFIG_DEFAULT);
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
  getInfoById: (id = '') => {
    if (!id) {
      return null;
    }
    const tokenConfig = CONFIG.getToken() || {};
    // 如果有自定义用自定义的
    return tokenConfig[id];
  }
};
export default CONFIG;
