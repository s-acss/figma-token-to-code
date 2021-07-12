import NODE from "./_/NODE";
import CONFIG from "./_/CONFIG";
import SACSS from "./_/SACSS";
import DOM from "./_/render/DOM";
import tryOldConfig from "./ui/utils/tryOldConfig.js";

const API = {
    /**
     * 默认显示 home
     */
    tabIndex: 0,
    /**
     * 获取用户选中的图层
     */
    getSelection: () => {
        const selection = figma.currentPage.selection;
        // console.log(selection);
        if (!selection.length) {
            // 没有选择任何元素
            figma.ui.postMessage({noSelection: true});
            return null;
        }
        return selection[0];
    },
    /**
     * 当 Tab 切换的时候会出发这个方法
     * @param index
     */
    onTabChange: (index) => {
        const beforeIndex = API.tabIndex;
        API.tabIndex = index;
        // 如果只是在 HTML 和 ACSS 之前切换
        if ((beforeIndex === 0 || beforeIndex === 1) && (index === 0 || index === 1)) {
            return;
        }
        const actionMap = ['runHome', 'runHome', 'runToken', 'runConfig'];
        const action = actionMap[index];
        // console.log('onTabChange', action);
        action && API[action]();
    },
    /**
     * 触发
     */
    run: () => {
        const actionMap = ['runHome', 'runHome', 'runToken', ''];
        const action = actionMap[API.tabIndex];
        if (!action) {
            return;
        }
        API[action]();
    },
    /**
     * 显示第一屏
     */
    runHome: () => {
        const selection = API.getSelection();
        if (!selection) {
            return;
        }
        SACSS.init();
        // @ts-ignore
        const Info = NODE.getNodeInfo(selection);
        // console.log(Info);
        const isJSX = CONFIG.isJSX();
        setTimeout(() => {
            figma.ui.postMessage({
                getHTML: DOM.render(Info, isJSX),
                getCSS: SACSS.getString(),
                isJSX,
                noSelection: false
            });
        }, 16);
    },
    runConfig: () => {
        setTimeout(() => {
            figma.ui.postMessage({
                getConfig: CONFIG.getCurrent()
            });
        }, 10);
    },
    runToken: () => {
        const selection = API.getSelection();
        if (!selection) {
            return;
        }
        setTimeout(() => {
            figma.ui.postMessage({
                selectionTokens: CONFIG.getSelectionTokens(selection),
                noSelection: false
            });
        }, 16);
    },
    onmessage: (msg = {}) => {
        // @ts-ignore
        const {type = null, value = null} = msg;
        if (type === null) {
            return;
        }
        // 尝试检测旧代码
        if (type === 'testOldConfig') {
            tryOldConfig();
            return;
        }
        const [name, action] = type.split('.');
        // console.log('API onmessage', name, action, value);
        if (name === 'API' && (action in API)) {
            API[action](value);
            return;
        }
        if (name === 'CONFIG' && (action in CONFIG)) {
            CONFIG[action](value);
            // 为了触发重新渲染
            if (action === 'changeJSX') {
                API.runHome();
                return;
            }
            // 为了触发重新渲染
            if (action === 'addToken') {
                API.runToken();
                return;
            }
            API.runConfig();
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
    API.run();
    figma.on("selectionchange", () => {
        API.run();
    });
    // @ts-ignore
    figma.ui.onmessage = API.onmessage;
});

