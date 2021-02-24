import NODE from "./_/NODE";
import CONFIG from "./_/CONFIG";
import SACSS from "./_/SACSS";
import DOM from "./_/render/DOM";

const API = {
  tabIndex: 0,
  getSelection: () => {
    const selection = figma.currentPage.selection;
    // console.log(selection);
    if (!selection.length) {
      // 没有选择任何元素
      figma.ui.postMessage({noSelection: true});
      return null;
    }
    return selection;
  },
  onTabChange: (index) => {
    const beforeIndex = API.tabIndex;
    API.tabIndex = index;
    // 如果只是在 HTML 和 ACSS 之前切换
    if ((beforeIndex === 0 || beforeIndex === 1) && (index === 0 || index === 1)) {
      return;
    }
    const actionMap = ['runHome', 'runHome', 'runToken', 'runConfig'];
    const action = actionMap[index];
    action && API[action]();
  },
  onSelectionChange: () => {
    const actionMap = ['runHome', 'runHome', 'runToken', ''];
    const action = actionMap[API.tabIndex];
    if (!action) {
      return;
    }
    API[action]();
  },
  runHome: () => {
    const selection = API.getSelection();
    if (!selection) {
      return;
    }
    SACSS.init();
    // @ts-ignore
    const Info = NODE.getNodesInfo(selection);
    // console.log(Info);
    const isJSX = CONFIG.isJSX();
    figma.ui.postMessage({
      getHTML: DOM.render(Info, isJSX),
      getCSS: SACSS.getString(),
      isJSX,
      noSelection: false
    });
  },
  runConfig: () => {
    figma.ui.postMessage({
      getConfig: CONFIG.getAll()
    });
  },
  runToken: () => {
    const [selection] = API.getSelection() || [];
    CONFIG.getSelectionTokens(selection);
  },
  onmessage: (msg = {}) => {
    // @ts-ignore
    const {type = null, value = null} = msg;
    if (type === null) {
      return;
    }
    const [name, action] = type.split('.');
    // console.log('API onmessage', name, action, value);
    if (name === 'API' && (action in API)) {
      API[action](value);
    } else if (name === 'CONFIG' && (action in CONFIG)) {
      CONFIG[action](value);
      if (action === 'changeJSX') {
        API.runHome();
      } else if (action === 'appendToken') {
        API.runToken();
      } else {
        API.runConfig();
      }
    }
  }
}

// This plugin will open a window to prompt the user to enter a number, and
// it will then create that many rectangles on the screen.

// This file holds the main code for the plugins. It has access to the *document*.
// You can access browser APIs in the <script> tag inside "ui.html" which has a
// full browser environment (see documentation).
CONFIG.init().then(() => {
  // This shows the HTML page in "ui.html".
  figma.showUI(__html__, {width: 400, height: 600});
  API.runHome();
  figma.on("selectionchange", () => {
    API.onSelectionChange();
  });
  // @ts-ignore
  figma.ui.onmessage = API.onmessage;
});

