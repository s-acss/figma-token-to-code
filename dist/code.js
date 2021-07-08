/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/code.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/_/COMPONENT.ts":
/*!****************************!*\
  !*** ./src/_/COMPONENT.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CONFIG__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CONFIG */ "./src/_/CONFIG.ts");

var COMPONENT = {
  isComponent: function isComponent(node) {
    // 'COMPONENT_SET' 目前不能作为组件的判断标准
    return node.type === 'INSTANCE' || node.type === 'COMPONENT';
  },
  getMainComponent: function getMainComponent(node) {
    if (node.type === 'COMPONENT_SET' || node.type === 'COMPONENT') {
      return node;
    } // console.log(node, {isVariant});


    return node.mainComponent;
  },
  getComponentId: function getComponentId(node) {
    // console.log(node);
    // @ts-ignore
    var _ref = COMPONENT.getMainComponent(node) || {},
        _ref$key = _ref.key,
        key = _ref$key === void 0 ? '' : _ref$key;

    return key;
  },
  stringToComponentName: function stringToComponentName() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var trimName = name.trim();

    if (!trimName) {
      return '';
    }

    var strName = trimName.replace(/[\W]/g, '');
    var firstChar = strName.charAt(0).toUpperCase();

    if (strName.length === 1) {
      return firstChar;
    }

    return firstChar + strName.slice(1);
  },
  getInfo: function getInfo(node) {
    // @ts-ignore
    var id = COMPONENT.getComponentId(node);
    var matchToken = id ? _CONFIG__WEBPACK_IMPORTED_MODULE_0__["default"].getToken()[id] : ''; // console.log({matchToken});

    if (!matchToken) {
      return null;
    } // 用户没有指定表示要渲染


    if (!('renderChildren' in matchToken)) {
      matchToken.renderChildren = '1';
    } // 用户没有指定表示要渲染


    if (!('renderWidth' in matchToken)) {
      matchToken.renderWidth = '1';
    } // 用户没有指定表示要渲染


    if (!('renderHeight' in matchToken)) {
      matchToken.renderHeight = '1';
    } // console.log({matchToken});


    return matchToken;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (COMPONENT);

/***/ }),

/***/ "./src/_/CONFIG.ts":
/*!*************************!*\
  !*** ./src/_/CONFIG.ts ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _COMPONENT__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./COMPONENT */ "./src/_/COMPONENT.ts");

var PRO_DEFAULT = {
  name: 'default',
  ignoreClassName: '',
  token: {}
};
var CONFIG_DEFAULT = {
  currentIndex: 0,
  isJSX: false,
  projects: [PRO_DEFAULT]
};
var CONFIG = {
  key: 'TokenToCode',
  store: CONFIG_DEFAULT,
  changeCurrent: function changeCurrent(index) {
    var store = CONFIG.getAll();
    store.currentIndex = index;
    figma.clientStorage.setAsync(CONFIG.key, store);
  },
  changeJSX: function changeJSX(value) {
    var store = CONFIG.getAll(); // 重置回第一个

    store.isJSX = value; // console.log(store);

    figma.clientStorage.setAsync(CONFIG.key, store);
  },
  remove: function remove(index) {
    var store = CONFIG.getAll(); // 重置回第一个

    store.currentIndex = 0;
    store.projects.splice(index, 1);

    if (!store.projects.length) {
      store.projects.push(PRO_DEFAULT);
    }

    figma.clientStorage.setAsync(CONFIG.key, store);
  },
  addNewProject: function addNewProject() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$name = _ref.name,
        name = _ref$name === void 0 ? '' : _ref$name,
        _ref$token = _ref.token,
        token = _ref$token === void 0 ? {} : _ref$token;

    var store = CONFIG.getAll();
    store.projects.push({
      name: name,
      ignoreClassName: '',
      token: token
    });
    store.currentIndex = store.projects.length - 1;
    figma.clientStorage.setAsync(CONFIG.key, store);
  },
  editByIndex: function editByIndex(_ref2) {
    var data = _ref2.data,
        index = _ref2.index;
    var store = CONFIG.getAll();
    var current = store.projects[index];
    store.projects[index] = {
      name: data.name,
      ignoreClassName: data.ignoreClassName,
      token: data.token ? data.token : current.token
    };
    figma.clientStorage.setAsync(CONFIG.key, store); // console.log(store);

    figma.ui.postMessage({
      // @ts-ignore
      alertMsg: "".concat(data.name, " save success")
    });
  },
  replaceByIndex: function replaceByIndex(_ref3) {
    var data = _ref3.data,
        index = _ref3.index;
    var store = CONFIG.getAll();
    store.projects[index] = data || {};
    figma.clientStorage.setAsync(CONFIG.key, store);
    figma.ui.postMessage({
      alertMsg: "".concat(data.name, " replace success")
    });
  },
  appendToken: function appendToken() {
    var _appendToken = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var current = CONFIG.getCurrent();
    var _current$token = current.token,
        token = _current$token === void 0 ? {} : _current$token;
    current.token = Object.assign(Object.assign({}, token), _appendToken); // console.log(appendToken, CONFIG.store);

    figma.clientStorage.setAsync(CONFIG.key, CONFIG.store);
    figma.ui.postMessage({
      alertMsg: "".concat(current.name, " save success")
    });
  },
  isJSX: function isJSX() {
    return !!CONFIG.store.isJSX;
  },
  getAll: function getAll() {
    return CONFIG.store;
  },
  init: function init() {
    return new Promise(function (resolve, reject) {
      figma.clientStorage.getAsync(CONFIG.key).then(function (ret) {
        if (ret && ret.projects && ret.projects.length) {
          CONFIG.store = ret;
        } else {
          // 没有缓存创建一个新的
          figma.clientStorage.setAsync(CONFIG.key, CONFIG_DEFAULT);
          CONFIG.store = CONFIG_DEFAULT;
        }

        resolve(CONFIG.getToken());
      }).catch(reject);
    });
  },
  getCurrent: function getCurrent() {
    var currentIndex = CONFIG.store.currentIndex;
    var current = CONFIG.store.projects[currentIndex];
    return current;
  },
  getToken: function getToken() {
    var _ref4 = CONFIG.getCurrent() || {},
        _ref4$token = _ref4.token,
        token = _ref4$token === void 0 ? null : _ref4$token;

    return token ? JSON.parse(JSON.stringify(token)) : null;
  },
  getInfoById: function getInfoById(id) {
    if (!(id && typeof id === 'string')) {
      return null;
    }

    var _ref5 = figma.getStyleById(id) || {},
        _ref5$key = _ref5.key,
        key = _ref5$key === void 0 ? '' : _ref5$key;

    if (!key) {
      return null;
    }

    var tokenConfig = CONFIG.getToken() || {}; // 如果有自定义用自定义的

    return tokenConfig[key];
  },
  getSelectionTokens: function getSelectionTokens(selection) {
    var _ref6 = CONFIG.getCurrent() || {},
        _ref6$name = _ref6.name,
        name = _ref6$name === void 0 ? '' : _ref6$name,
        _ref6$token = _ref6.token,
        token = _ref6$token === void 0 ? {} : _ref6$token; // console.log('runToken getSelectionTokens');


    if (!selection) {
      return {
        getSelectionInfo: {
          name: name
        }
      };
    }

    var matchToken = {}; // 如果是组件

    if (_COMPONENT__WEBPACK_IMPORTED_MODULE_0__["default"].isComponent(selection)) {
      //@ts-ignore
      var _COMPONENT$getMainCom = _COMPONENT__WEBPACK_IMPORTED_MODULE_0__["default"].getMainComponent(selection),
          key = _COMPONENT$getMainCom.key,
          _name = _COMPONENT$getMainCom.name,
          type = _COMPONENT$getMainCom.type;

      var findToken = token[key] || {};
      matchToken[key] = Object.assign(Object.assign({}, findToken), {
        name: _name,
        type: type
      });
    } //@ts-ignore


    [selection.fillStyleId, selection.textStyleId, selection.strokeStyleId, selection.effectStyleId, selection.gridStyleId].forEach(function (item, key) {
      if (!item) {
        return '';
      }

      var _ref7 = figma.getStyleById(item) || {},
          styleKey = _ref7.key,
          name = _ref7.name,
          type = _ref7.type;

      if (!styleKey) {
        return '';
      }

      matchToken[styleKey] = Object.assign(Object.assign({}, token[styleKey]), {
        name: name,
        type: type
      });
    });
    return {
      getSelectionInfo: {
        name: name,
        token: matchToken
      }
    };
  },

  /**
   * 获取所有的 Token 包括 Component
   */
  getAllTokens: function getAllTokens() {
    var name = figma.root.name;
    var components = figma.root.findAll(function (c) {
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
    var token = {};

    var addConfig = function addConfig() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      data.forEach(function (item) {
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
        name: name,
        ignoreClassName: '',
        token: token
      }
    });
  }
};
/* harmony default export */ __webpack_exports__["default"] = (CONFIG);

/***/ }),

/***/ "./src/_/NODE.ts":
/*!***********************!*\
  !*** ./src/_/NODE.ts ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _COMPONENT__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./COMPONENT */ "./src/_/COMPONENT.ts");
/* harmony import */ var _token_FILL__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./token/FILL */ "./src/_/token/FILL.ts");
/* harmony import */ var _token_TEXT__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./token/TEXT */ "./src/_/token/TEXT.ts");
/* harmony import */ var _token_STROKE__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./token/STROKE */ "./src/_/token/STROKE.ts");
/* harmony import */ var _token_GRID__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./token/GRID */ "./src/_/token/GRID.ts");
/* harmony import */ var _token_FLEX__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./token/FLEX */ "./src/_/token/FLEX.ts");
/* harmony import */ var _SACSS__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SACSS */ "./src/_/SACSS.ts");
/* harmony import */ var _UTILS__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./UTILS */ "./src/_/UTILS.ts");
/* harmony import */ var _token_EFFECT__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./token/EFFECT */ "./src/_/token/EFFECT.ts");
/* harmony import */ var _token_OTHERS__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./token/OTHERS */ "./src/_/token/OTHERS.ts");
/* harmony import */ var _CONFIG__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./CONFIG */ "./src/_/CONFIG.ts");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};












var NODE = {
  /**
   * 合并两个info
   * @param a
   * @param b
   */
  extendInfo: function extendInfo(a, b) {
    if (!b) {
      return a;
    }

    var _a$className = a.className,
        classNameA = _a$className === void 0 ? '' : _a$className,
        _a$ignoreClassName = a.ignoreClassName,
        ignoreClassNameA = _a$ignoreClassName === void 0 ? '' : _a$ignoreClassName,
        _a$componentProps = a.componentProps,
        componentPropsA = _a$componentProps === void 0 ? {} : _a$componentProps,
        _a$props = a.props,
        propsA = _a$props === void 0 ? {} : _a$props,
        _a$htmlProps = a.htmlProps,
        htmlPropsA = _a$htmlProps === void 0 ? {} : _a$htmlProps,
        restA = __rest(a, ["className", "ignoreClassName", "componentProps", "props", "htmlProps"]);

    var _b$className = b.className,
        classNameB = _b$className === void 0 ? '' : _b$className,
        _b$ignoreClassName = b.ignoreClassName,
        ignoreClassNameB = _b$ignoreClassName === void 0 ? '' : _b$ignoreClassName,
        _b$componentProps = b.componentProps,
        componentPropsB = _b$componentProps === void 0 ? {} : _b$componentProps,
        _b$props = b.props,
        propsB = _b$props === void 0 ? {} : _b$props,
        _b$htmlProps = b.htmlProps,
        htmlPropsB = _b$htmlProps === void 0 ? {} : _b$htmlProps,
        children = b.children,
        restB = __rest(b, ["className", "ignoreClassName", "componentProps", "props", "htmlProps", "children"]);

    return Object.assign(Object.assign({
      className: "".concat(classNameA, " ").concat(classNameB).trim(),
      ignoreClassName: "".concat(ignoreClassNameA, " ").concat(ignoreClassNameB).trim(),
      htmlProps: Object.assign(Object.assign({}, htmlPropsA), htmlPropsB),
      componentProps: Object.assign(Object.assign({}, componentPropsA), componentPropsB)
    }, restA), restB);
  },

  /**
   * 如果一个元素内部只有几何图形，那么只显示其结构
   */
  isStructNode: function isStructNode(node) {
    // 以#号开头
    if (node.name.startsWith("#")) {
      return true;
    }

    var yesTypes = ['RECTANGLE', 'VECTOR', 'STAR', 'LINE', 'POLYGON', 'ELLIPSE', 'SLICE']; // 如果本身就是这些元素那么也是直接输出

    if (yesTypes.indexOf(node.type) > -1) {
      return true;
    }

    if (node.type === 'TEXT') {
      return false;
    } // @ts-ignore


    var _node$children = node.children,
        children = _node$children === void 0 ? [] : _node$children;

    if (!children.length) {
      return true;
    } // 找到了不合法元素（不在上面的几何列表里面）


    var gotNo = children.find(function (item) {
      return item.visible && yesTypes.indexOf(item.type) === -1;
    });
    return !gotNo;
  },
  isRenderChildren: function isRenderChildren(node) {
    if (!(node.type === 'INSTANCE' || node.type === 'COMPONENT')) {
      return false;
    } // 只有一个子元素


    if (node.children.length !== 1) {
      return false;
    } // const onlyChildren = node.children[0];
    // if (onlyChildren.type === 'INSTANCE') {
    //   return true;
    // }


    return false;
  },
  getNodeInfo: function getNodeInfo(node) {
    if (!node.visible || node.name.startsWith("_")) {
      return null;
    } // 直接渲染子元素


    if (NODE.isRenderChildren(node)) {
      // @ts-ignore;
      return NODE.getNodeInfo(node.children[0]);
    }

    var isStructNode = NODE.isStructNode(node);
    var nodeInfo = {
      ignoreClassName: '',
      className: '',
      children: []
    };

    if (isStructNode) {
      // @ts-ignore
      nodeInfo.tagName = 'i';
    }

    var component = _COMPONENT__WEBPACK_IMPORTED_MODULE_0__["default"].getInfo(node);
    var fill = _token_FILL__WEBPACK_IMPORTED_MODULE_1__["default"].getInfo(node);
    var text = _token_TEXT__WEBPACK_IMPORTED_MODULE_2__["default"].getInfo(node);
    var stroke = _token_STROKE__WEBPACK_IMPORTED_MODULE_3__["default"].getInfo(node);
    var grid = _token_GRID__WEBPACK_IMPORTED_MODULE_4__["default"].getInfo(node);
    var effect = _token_EFFECT__WEBPACK_IMPORTED_MODULE_8__["default"].getInfo(node);
    var others = _token_OTHERS__WEBPACK_IMPORTED_MODULE_9__["default"].getInfo(node);
    var flex = _token_FLEX__WEBPACK_IMPORTED_MODULE_5__["default"].getInfo(node); // console.log({component, fill, text, stroke, grid, effect});

    nodeInfo = NODE.extendInfo(nodeInfo, fill);
    nodeInfo = NODE.extendInfo(nodeInfo, text);
    nodeInfo = NODE.extendInfo(nodeInfo, stroke);
    nodeInfo = NODE.extendInfo(nodeInfo, grid);
    nodeInfo = NODE.extendInfo(nodeInfo, effect);
    nodeInfo = NODE.extendInfo(nodeInfo, component);
    nodeInfo = NODE.extendInfo(nodeInfo, flex);
    nodeInfo = NODE.extendInfo(nodeInfo, others); // @ts-ignore

    if (isStructNode && String(nodeInfo === null || nodeInfo === void 0 ? void 0 : nodeInfo.renderHeight) !== '0' || String(nodeInfo === null || nodeInfo === void 0 ? void 0 : nodeInfo.renderWidth) === '1') {
      nodeInfo.className += ' ' + _SACSS__WEBPACK_IMPORTED_MODULE_6__["default"].add('w', parseInt(String(node.width)));
    } // @ts-ignore


    if (isStructNode && String(nodeInfo === null || nodeInfo === void 0 ? void 0 : nodeInfo.renderHeight) !== '0' || String(nodeInfo === null || nodeInfo === void 0 ? void 0 : nodeInfo.renderHeight) === '1') {
      nodeInfo.className += ' ' + _SACSS__WEBPACK_IMPORTED_MODULE_6__["default"].add('h', parseInt(String(node.height)));
    }

    nodeInfo.children = function () {
      var _a;

      if (node.type === 'TEXT') {
        var texts = _token_TEXT__WEBPACK_IMPORTED_MODULE_2__["default"].getTextChildren(node); // 多段文本这里要修复一下嵌套的标签，有可能变成 strong > p 这样的结构
        // @ts-ignore

        if (((_a = texts[0]) === null || _a === void 0 ? void 0 : _a.tagName) === 'p') {
          // @ts-ignore
          nodeInfo.tagName = "div";
        }

        return texts;
      }

      var _ref = component || {},
          _ref$renderChildren = _ref.renderChildren,
          renderChildren = _ref$renderChildren === void 0 ? 1 : _ref$renderChildren;

      if (isStructNode || String(renderChildren) === '0') {
        return [];
      } // 渲染子节点


      if (String(renderChildren) === '2') {
        // @ts-ignore
        return node.findAll(function (c) {
          return c.type === 'TEXT' && c.visible;
        }).map(function (c) {
          return c.characters;
        });
      } // @ts-ignore


      return NODE.getNodesInfo(node.children);
    }(); // 整个项目都忽略的 className
    // @ts-ignore


    var _ref2 = _CONFIG__WEBPACK_IMPORTED_MODULE_10__["default"].getCurrent() || {},
        _ref2$ignoreClassName = _ref2.ignoreClassName,
        ignoreClassName = _ref2$ignoreClassName === void 0 ? '' : _ref2$ignoreClassName;

    nodeInfo.className = _UTILS__WEBPACK_IMPORTED_MODULE_7__["default"].clearClassName(nodeInfo.className, "".concat(nodeInfo.ignoreClassName, " ").concat(ignoreClassName));
    delete nodeInfo.ignoreClassName; // 减少嵌套

    if (nodeInfo.children.length === 1) {
      var childrenInfo = nodeInfo.children[0]; // 如果父元素和子元素 tagName 相同合并 className
      // @ts-ignore

      if (childrenInfo.tagName === nodeInfo.tagName && !nodeInfo.componentName && !childrenInfo.componentName) {
        childrenInfo.className = _UTILS__WEBPACK_IMPORTED_MODULE_7__["default"].clearClassName("".concat(childrenInfo.className, " ").concat(nodeInfo.className));
        return childrenInfo;
      }
    } // console.log(node);
    // console.log(nodeInfo);


    return nodeInfo;
  },
  sort: function sort() {
    var nodes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    return _toConsumableArray(nodes).sort(function (a, b) {
      var aY = a.y + a.height;
      var bY = b.y + b.height;

      if (a.y === b.y) {
        return a.x - b.x;
      }

      return aY - bY;
    });
  },
  getNodesInfo: function getNodesInfo() {
    var nodes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var info = []; // 需要排序一下

    var sortNodes = NODE.sort(nodes); // console.log(nodes, sortNodes);

    for (var i = 0, len = sortNodes.length; i < len; i++) {
      var nodeInfo = NODE.getNodeInfo(sortNodes[i]);

      if (!nodeInfo) {
        continue;
      }

      if (nodeInfo instanceof Array) {
        info = [].concat(_toConsumableArray(info), _toConsumableArray(nodeInfo));
      } else {
        info.push(nodeInfo);
      }
    }

    return info;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (NODE);

/***/ }),

/***/ "./src/_/SACSS.ts":
/*!************************!*\
  !*** ./src/_/SACSS.ts ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var SACSS = {
  data: {},
  init: function init() {
    SACSS.data = {};
  },
  nameMap: {
    'fs': 'font-size',
    'lh': 'line-height',
    'ls': 'letter-space',
    'ff': 'font-family',
    'pt': 'padding-top',
    'pr': 'padding-right',
    'pb': 'padding-bottom',
    'pl': 'padding-left',
    'mt': 'margin-top',
    'mr': 'margin-right',
    'mb': 'margin-bottom',
    'ml': 'margin-left',
    'h': 'height',
    'w': 'width',
    'btlr': 'border-top-left-radius',
    'btrr': 'border-top-right-radius',
    'bbrr': 'border-bottom-right-radius',
    'bblr': 'border-bottom-left-radius',
    'br': 'border-radius'
  },
  getClassSelectorByName: function getClassSelectorByName() {
    var className = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

    if (className.indexOf('.') > -1) {
      className = className.replace(/\./g, '\\.');
    }

    if (className.indexOf(':') > -1) {
      className = className.replace(/\:/g, '\\:');
    }

    if (className.indexOf('%') > -1) {
      className = className.replace(/\%/g, '\\%');
    }

    return className;
  },
  getString: function getString() {
    var data = SACSS.data;
    var keys = Object.keys(data).sort();
    var result = keys.map(function (name) {
      return ".".concat(SACSS.getClassSelectorByName(name), "{").concat(data[name], ";}");
    }).join('\n');
    return result;
  },
  add: function add() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var value = arguments.length > 1 ? arguments[1] : undefined;
    var unit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'px';

    if (!name || !value) {
      return '';
    }

    var propName = SACSS.nameMap[name];

    if (!propName) {
      return '';
    } // 只保留两位小数


    var useValue = Number(value) ? parseFloat(Number(value).toFixed(2)) : value; // 如果是 px 不需要渲染

    var classUnit = unit === 'px' ? '' : unit;
    var className = "".concat(name).concat(useValue).concat(classUnit);
    SACSS.data[className] = "".concat(propName, ":").concat(useValue).concat(unit);
    return className;
  },
  addFontFamily: function addFontFamily(value) {
    if (!value) {
      return '';
    }

    var valueOk = value.replace(/[\W]/g, '').toLowerCase();
    var className = "ff_".concat(valueOk);
    SACSS.data[className] = "font-family:\"".concat(value, "\"");
    return className;
  },
  addColor: function addColor() {
    var rgba = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    if (!rgba && rgba.length) {
      return '';
    }

    var className = "c_".concat(rgba.join(''));
    SACSS.data[className] = "color:rgba(".concat(rgba.join(','), ")");
    return className;
  },
  addBgColor: function addBgColor() {
    var rgba = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    if (!rgba && rgba.length) {
      return '';
    }

    var className = "bc_".concat(rgba.join(''));
    SACSS.data[className] = "background-color:rgba(".concat(rgba.join(','), ")");
    return className;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (SACSS);

/***/ }),

/***/ "./src/_/UTILS.ts":
/*!************************!*\
  !*** ./src/_/UTILS.ts ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var UTILS = {
  isBlock: function isBlock() {
    var tagName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var blockTag = ['div', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p'];
    return blockTag.indexOf(tagName) > -1;
  },
  isSelfTag: function isSelfTag() {
    var tagName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var selfTag = ['img', 'link', 'meta', 'br', 'br', 'hr', 'input', 'col', 'frame', 'area', 'param', 'object', 'embed', 'keygen', 'source'];
    return selfTag.indexOf(tagName) > -1;
  },

  /**
   * 去重和去空
   * @param arrStr
   */
  clearClassName: function clearClassName() {
    var className = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var ignoreClassName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

    if (!className) {
      return '';
    }

    var classNames = className.split(' ');
    var result = [];
    classNames.forEach(function () {
      var item = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      if (item && item !== 'null' && result.indexOf(item) === -1 && ignoreClassName.indexOf(item) === -1) {
        result.push(item);
      }
    });
    return result.join(' ');
  }
};
/* harmony default export */ __webpack_exports__["default"] = (UTILS);

/***/ }),

/***/ "./src/_/render/DOM.ts":
/*!*****************************!*\
  !*** ./src/_/render/DOM.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HTML__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HTML */ "./src/_/render/HTML.ts");
/* harmony import */ var _JSX__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./JSX */ "./src/_/render/JSX.ts");


var DOM = {
  render: function render() {
    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var isJSX = arguments.length > 1 ? arguments[1] : undefined;

    if (isJSX) {
      return _JSX__WEBPACK_IMPORTED_MODULE_1__["default"].getDomByArray(obj);
    }

    return _HTML__WEBPACK_IMPORTED_MODULE_0__["default"].getDomByArray(obj);
  }
};
/* harmony default export */ __webpack_exports__["default"] = (DOM);

/***/ }),

/***/ "./src/_/render/HTML.ts":
/*!******************************!*\
  !*** ./src/_/render/HTML.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UTILS__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../UTILS */ "./src/_/UTILS.ts");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

 // legal 合法属性
// const legalProp = ['class', 'type', 'name', 'role', 'disabled', 'id', 'title', 'lang', 'dir', 'tabindex', 'accesskey', 'src', 'href', 'style', 'aria-hidden', 'target', 'rel'];

var HTML = {
  getPropsString: function getPropsString() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$className = _ref.className,
        className = _ref$className === void 0 ? '' : _ref$className,
        _ref$props = _ref.props,
        props = _ref$props === void 0 ? {} : _ref$props;

    var arrProps = [];
    var classNames = className ? className.split(' ') : [];

    if (classNames.length) {
      arrProps.push("class=\"".concat(classNames.join(' '), "\""));
    }

    for (var _i = 0, _Object$entries = Object.entries(props); _i < _Object$entries.length; _i++) {
      var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
          key = _Object$entries$_i[0],
          value = _Object$entries$_i[1];

      arrProps.push("".concat(key, "=\"").concat(value, "\""));
    }

    return arrProps.join(' ');
  },
  // @ts-ignore
  getItemDom: function getItemDom(item) {
    if (!item) {
      return '';
    }

    if (typeof item === 'string') {
      return item;
    }

    var _item$children = item.children,
        children = _item$children === void 0 ? [] : _item$children,
        _item$htmlProps = item.htmlProps,
        htmlProps = _item$htmlProps === void 0 ? {} : _item$htmlProps,
        _item$className = item.className,
        className = _item$className === void 0 ? '' : _item$className;
    var tagName = item.tagName || 'div';
    var propsString = HTML.getPropsString({
      props: htmlProps,
      className: className
    });
    var tagStart = "".concat(tagName).concat(propsString ? " ".concat(propsString) : '');

    if (_UTILS__WEBPACK_IMPORTED_MODULE_0__["default"].isSelfTag(tagName)) {
      return "<".concat(tagStart, "/>");
    }

    if (!children.length) {
      return "<".concat(tagStart, "></").concat(tagName, ">");
    }

    return "<".concat(tagStart, ">").concat(HTML.getDomByArray(children), "</").concat(tagName, ">");
  },
  getDomByArray: function getDomByArray() {
    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    return obj.map(function (item) {
      return HTML.getItemDom(item);
    }).join('');
  }
};
/* harmony default export */ __webpack_exports__["default"] = (HTML);

/***/ }),

/***/ "./src/_/render/JSX.ts":
/*!*****************************!*\
  !*** ./src/_/render/JSX.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UTILS__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../UTILS */ "./src/_/UTILS.ts");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var JSX = {
  getPropsString: function getPropsString() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$className = _ref.className,
        className = _ref$className === void 0 ? '' : _ref$className,
        _ref$props = _ref.props,
        props = _ref$props === void 0 ? {} : _ref$props;

    var arrProps = [];
    var classNames = className ? className.split(' ') : [];

    if (classNames.length) {
      arrProps.push("className=\"".concat(classNames.join(' '), "\""));
    }

    for (var _i = 0, _Object$entries = Object.entries(props); _i < _Object$entries.length; _i++) {
      var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
          key = _Object$entries$_i[0],
          value = _Object$entries$_i[1];

      arrProps.push("".concat(key, "=\"").concat(value, "\""));
    }

    return arrProps.join(' ');
  },
  // @ts-ignore
  getItemDom: function getItemDom(item) {
    if (!item) {
      return '';
    }

    if (typeof item === 'string') {
      return item;
    } // console.log({item});


    var _item$children = item.children,
        children = _item$children === void 0 ? [] : _item$children,
        _item$componentProps = item.componentProps,
        componentProps = _item$componentProps === void 0 ? {} : _item$componentProps,
        _item$className = item.className,
        className = _item$className === void 0 ? '' : _item$className;
    var tagName = item.componentName || item.tagName || 'div';
    var strProps = JSX.getPropsString({
      props: componentProps,
      className: className
    });
    var tagStart = "".concat(tagName).concat(strProps ? " ".concat(strProps) : '');

    if (_UTILS__WEBPACK_IMPORTED_MODULE_0__["default"].isSelfTag(tagName)) {
      return "<".concat(tagStart, "/>");
    }

    if (!children.length) {
      if (item.componentName) {
        return "<".concat(tagStart, "/>");
      }

      return "<".concat(tagStart, "></").concat(tagName, ">");
    }

    return "<".concat(tagStart, ">").concat(JSX.getDomByArray(children), "</").concat(tagName, ">");
  },
  getDomByArray: function getDomByArray() {
    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    return obj.map(function (item) {
      return JSX.getItemDom(item);
    }).join('');
  }
};
/* harmony default export */ __webpack_exports__["default"] = (JSX);

/***/ }),

/***/ "./src/_/token/COLOR.ts":
/*!******************************!*\
  !*** ./src/_/token/COLOR.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var COLOR = {
  getRgbaByFill: function getRgbaByFill(_ref) {
    var color = _ref.color,
        opacity = _ref.opacity,
        visible = _ref.visible;

    // 如果不可见
    if (!visible || opacity === 0) {
      return null;
    }

    var r = parseInt(String(color.r * 255));
    var g = parseInt(String(color.g * 255));
    var b = parseInt(String(color.b * 255));
    var a = String(opacity).indexOf('.') > -1 ? opacity.toFixed(1) : opacity;
    return [r, g, b, a];
  }
};
/* harmony default export */ __webpack_exports__["default"] = (COLOR);

/***/ }),

/***/ "./src/_/token/EFFECT.ts":
/*!*******************************!*\
  !*** ./src/_/token/EFFECT.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CONFIG__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../CONFIG */ "./src/_/CONFIG.ts");

var EFFECT = {
  getInfo: function getInfo(node) {
    // @ts-ignore
    return _CONFIG__WEBPACK_IMPORTED_MODULE_0__["default"].getInfoById(node.effectStyleId);
  }
};
/* harmony default export */ __webpack_exports__["default"] = (EFFECT);

/***/ }),

/***/ "./src/_/token/FILL.ts":
/*!*****************************!*\
  !*** ./src/_/token/FILL.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _COLOR__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./COLOR */ "./src/_/token/COLOR.ts");
/* harmony import */ var _CONFIG__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../CONFIG */ "./src/_/CONFIG.ts");
/* harmony import */ var _SACSS__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../SACSS */ "./src/_/SACSS.ts");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};




var FILL = {
  getFill: function getFill(node) {
    // @ts-ignore
    var _ref = (typeof node.getRangeFills === 'function' ? node.getRangeFills(0, 1) : node.fills) || [],
        _ref2 = _slicedToArray(_ref, 1),
        firstFill = _ref2[0]; // 没有设置任何颜色, 目前不支持渐变
    // @ts-ignore


    if (!firstFill || firstFill.type !== 'SOLID') {
      return null;
    }

    var color = _COLOR__WEBPACK_IMPORTED_MODULE_0__["default"].getRgbaByFill(firstFill);

    if (!color) {
      return null;
    }

    var className = node.type === 'TEXT' ? _SACSS__WEBPACK_IMPORTED_MODULE_2__["default"].addColor(color) : _SACSS__WEBPACK_IMPORTED_MODULE_2__["default"].addBgColor(color); // 文本是用颜色，其它理解为背景色

    return {
      className: className
    };
  },
  // 获取填充信息
  getInfo: function getInfo(node) {
    // console.log(node);
    // @ts-ignore
    var id = typeof node.getRangeFillStyleId === 'function' ? node.getRangeFillStyleId(0, 1) : node.fillStyleId; //@ts-ignore

    var _a = _CONFIG__WEBPACK_IMPORTED_MODULE_1__["default"].getInfoById(id) || {},
        _a$textClassName = _a.textClassName,
        textClassName = _a$textClassName === void 0 ? '' : _a$textClassName,
        _a$className = _a.className,
        className = _a$className === void 0 ? '' : _a$className,
        rest = __rest(_a, ["textClassName", "className"]);

    var renderClassName = node.type === 'TEXT' ? textClassName : className;

    if (!renderClassName) {
      return FILL.getFill(node);
    }

    return Object.assign({
      className: renderClassName
    }, rest);
  }
};
/* harmony default export */ __webpack_exports__["default"] = (FILL);

/***/ }),

/***/ "./src/_/token/FLEX.ts":
/*!*****************************!*\
  !*** ./src/_/token/FLEX.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SACSS__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../SACSS */ "./src/_/SACSS.ts");
 // import CONFIG from "./CONFIG";

var FLEX = {
  isFlex: function isFlex(node) {
    // 这几个元素都不做 Flex 判断处理
    if (['TEXT'].indexOf(node.type) > -1) {
      return false;
    }

    return (node === null || node === void 0 ? void 0 : node.layoutMode) !== "NONE";
  },
  getThisInfo: function getThisInfo(node) {
    if (!FLEX.isFlex(node)) {
      return null;
    }

    var layoutMode = node.layoutMode,
        primaryAxisAlignItems = node.primaryAxisAlignItems,
        counterAxisAlignItems = node.counterAxisAlignItems,
        _node$children = node.children,
        children = _node$children === void 0 ? [] : _node$children; // 没有子元素 flex 布局没有意义

    if (!children.length) {
      return null;
    }

    var className = []; // 如果是纵向的 这里可以不使用 flex 布局

    if (layoutMode === 'VERTICAL') {
      // 当是纵向布局当时候
      className.push({
        // "MIN": "",
        "CENTER": "tac",
        "MAX": "tar" // "SPACE_BETWEEN": "jcsb",

      }[counterAxisAlignItems]);
    } else {
      className.push({
        // "MIN": "",
        "CENTER": "jcc",
        "MAX": "jcfe",
        "SPACE_BETWEEN": "jcsb"
      }[primaryAxisAlignItems] || "");
      className.push({
        //"MIN": "",
        "CENTER": "aic",
        "MAX": "aife"
      }[counterAxisAlignItems] || "");
      className.push('df');
    }

    return {
      className: className.join(' ')
    };
  },
  getInfoFromParent: function getInfoFromParent(node) {
    var parent = node.parent;

    if (!parent || !FLEX.isFlex(parent)) {
      return null;
    } // @ts-ignore


    var layoutMode = parent.layoutMode,
        primaryAxisAlignItems = parent.primaryAxisAlignItems,
        itemSpacing = parent.itemSpacing; // 两端两端对齐表示不需要这些

    if (primaryAxisAlignItems === "SPACE_BETWEEN") {
      return null;
    }

    var className = [];
    var ignoreClassName = [];

    var _ref = parent.children.filter(function (c) {
      return c.visible;
    }).pop() || {},
        _ref$id = _ref.id,
        id = _ref$id === void 0 ? '' : _ref$id;

    var isLastChildren = id === node.id; // 父元素是纵向的flex 布局，因为忽略掉了 df
    // 这里让自己有 db 实现纵向布局

    if (layoutMode === 'VERTICAL') {
      className.push('db');
    } // 为子元素添加间距


    if (itemSpacing > 0 && !isLastChildren) {
      var gutterMap = {
        "VERTICAL": "mb",
        "HORIZONTAL": "mr"
      };
      className.push(_SACSS__WEBPACK_IMPORTED_MODULE_0__["default"].add(gutterMap[layoutMode], itemSpacing));
    }

    if (node.layoutGrow === 1) {
      className.push('f1');
      ignoreClassName.push("w".concat(node.width));
    }

    return {
      className: className.join(' '),
      ignoreClassName: ignoreClassName.join(' ')
    };
  },
  getInfo: function getInfo(node) {
    // @ts-ignore
    var _ref2 = FLEX.getThisInfo(node) || {},
        _ref2$className = _ref2.className,
        c1 = _ref2$className === void 0 ? '' : _ref2$className,
        _ref2$ignoreClassName = _ref2.ignoreClassName,
        ic1 = _ref2$ignoreClassName === void 0 ? '' : _ref2$ignoreClassName; // @ts-ignore


    var _ref3 = FLEX.getInfoFromParent(node) || {},
        _ref3$className = _ref3.className,
        c2 = _ref3$className === void 0 ? '' : _ref3$className,
        _ref3$ignoreClassName = _ref3.ignoreClassName,
        ic2 = _ref3$ignoreClassName === void 0 ? '' : _ref3$ignoreClassName;

    return {
      className: "".concat(c1, " ").concat(c2),
      ignoreClassName: "".concat(ic1, " ").concat(ic2)
    };
  }
};
/* harmony default export */ __webpack_exports__["default"] = (FLEX);

/***/ }),

/***/ "./src/_/token/GRID.ts":
/*!*****************************!*\
  !*** ./src/_/token/GRID.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CONFIG__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../CONFIG */ "./src/_/CONFIG.ts");

var GRID = {
  getInfo: function getInfo(node) {
    // @ts-ignore
    return _CONFIG__WEBPACK_IMPORTED_MODULE_0__["default"].getInfoById(node.gridStyleId);
  }
};
/* harmony default export */ __webpack_exports__["default"] = (GRID);

/***/ }),

/***/ "./src/_/token/OTHERS.ts":
/*!*******************************!*\
  !*** ./src/_/token/OTHERS.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SACSS__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../SACSS */ "./src/_/SACSS.ts");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


var OTHERS = {
  gerBorderRadiusClassName: function gerBorderRadiusClassName(node) {
    var tl = node.topLeftRadius || 0;
    var tr = node.topRightRadius || 0;
    var br = node.bottomRightRadius || 0;
    var bl = node.bottomLeftRadius || 0; // 全部为 0

    if (tl + tr + br + bl === 0) {
      return [];
    } // 如果四个值都相等


    if (tl === tr && tl === br && tl === bl) {
      return [_SACSS__WEBPACK_IMPORTED_MODULE_0__["default"].add('br', tl)];
    }

    var className = [];
    tl && className.push(_SACSS__WEBPACK_IMPORTED_MODULE_0__["default"].add('btlr', tl));
    tr && className.push(_SACSS__WEBPACK_IMPORTED_MODULE_0__["default"].add('btrr', tr));
    br && className.push(_SACSS__WEBPACK_IMPORTED_MODULE_0__["default"].add('bbrr', br));
    bl && className.push(_SACSS__WEBPACK_IMPORTED_MODULE_0__["default"].add('bblr', bl));
    return className;
  },
  getPaddingClassName: function getPaddingClassName(node) {
    // 会忽略掉 1像素的 padding
    return [node.paddingTop > 1 ? _SACSS__WEBPACK_IMPORTED_MODULE_0__["default"].add('pt', node.paddingTop) : '', node.paddingRight > 1 ? _SACSS__WEBPACK_IMPORTED_MODULE_0__["default"].add('pr', node.paddingRight) : '', node.paddingBottom > 1 ? _SACSS__WEBPACK_IMPORTED_MODULE_0__["default"].add('pb', node.paddingBottom) : '', node.paddingLeft > 1 ? _SACSS__WEBPACK_IMPORTED_MODULE_0__["default"].add('pl', node.paddingLeft) : ''];
  },
  getInfo: function getInfo(node) {
    var padding = OTHERS.getPaddingClassName(node);
    var radius = OTHERS.gerBorderRadiusClassName(node);
    return {
      className: [].concat(_toConsumableArray(padding), _toConsumableArray(radius)).join(' ')
    };
  }
};
/* harmony default export */ __webpack_exports__["default"] = (OTHERS);

/***/ }),

/***/ "./src/_/token/STROKE.ts":
/*!*******************************!*\
  !*** ./src/_/token/STROKE.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CONFIG__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../CONFIG */ "./src/_/CONFIG.ts");

var STROKE = {
  // 文本组件
  getInfo: function getInfo(node) {
    // @ts-ignore
    return _CONFIG__WEBPACK_IMPORTED_MODULE_0__["default"].getInfoById(node.strokeStyleId);
  }
};
/* harmony default export */ __webpack_exports__["default"] = (STROKE);

/***/ }),

/***/ "./src/_/token/TEXT.ts":
/*!*****************************!*\
  !*** ./src/_/token/TEXT.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CONFIG__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../CONFIG */ "./src/_/CONFIG.ts");
/* harmony import */ var _SACSS__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../SACSS */ "./src/_/SACSS.ts");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


 // @ts-ignore

var TEXT = {
  unitMap: {
    'PERCENT': '%' // "PIXELS":""

  },
  // @ts-ignore
  getFontNameClassByStyle: function getFontNameClassByStyle(style) {
    if (typeof style !== 'string' || !style) {
      return '';
    }

    var fontMap = {
      "ULTRALIGHT": "fw100",
      "THIN": 'fw200',
      "LIGHT": "fw300",
      "REGULAR": "",
      "MEDIUM": "fw500",
      "SEMIBOLD": "fw600",
      "BOLD": "fw700",
      "BLACK": "fw900",
      "ITALIC": "fsi",
      "OBLIQUE": "fsi"
    };
    var className = style.split(' ').map(function (item) {
      return fontMap[item.toUpperCase()] || '';
    });
    return className.filter(function (item) {
      return item;
    }).join(' ');
  },
  getPropByNode: function getPropByNode(node, name) {
    var nameMap = {
      'textCase': 'getRangeTextCase',
      'lineHeight': 'getRangeLineHeight',
      'letterSpacing': 'getRangeLetterSpacing',
      'fontSize': 'getRangeFontSize',
      'textDecoration': 'getRangeTextDecoration',
      'fontName': 'getRangeFontName',
      'fills': 'getRangeFills',
      'textStyleId': 'getRangeTextStyleId'
    };

    if (_typeof(node[name]) === 'symbol' && nameMap[name] && typeof node[nameMap[name]] === 'function') {
      return node[nameMap[name]](0, 1);
    }

    return node[name];
  },
  getACSSSInfo: function getACSSSInfo(node) {
    var className = []; // 文字大小

    var fontSize = TEXT.getPropByNode(node, 'fontSize');

    if (fontSize > 1) {
      className.push(_SACSS__WEBPACK_IMPORTED_MODULE_1__["default"].add('fs', fontSize));
    } // 行高


    var lineHeight = TEXT.getPropByNode(node, 'lineHeight'); // @ts-ignore

    if (lineHeight === null || lineHeight === void 0 ? void 0 : lineHeight.value) {
      // @ts-ignore
      var value = lineHeight.value,
          unit = lineHeight.unit; // @ts-ignore

      className.push(_SACSS__WEBPACK_IMPORTED_MODULE_1__["default"].add('lh', value, TEXT.unitMap[unit]));
    } // 字间距


    var letterSpacing = TEXT.getPropByNode(node, 'letterSpacing'); // @ts-ignore

    if (letterSpacing === null || letterSpacing === void 0 ? void 0 : letterSpacing.value) {
      // @ts-ignore
      var _value = letterSpacing.value,
          _unit = letterSpacing.unit;
      className.push(_SACSS__WEBPACK_IMPORTED_MODULE_1__["default"].add('ls', _value, TEXT.unitMap[_unit]));
    }

    var fontName = TEXT.getPropByNode(node, 'fontName'); // font-weight font-style

    var fnClass = TEXT.getFontNameClassByStyle(fontName.style);
    fnClass && className.push(fnClass); // @ts-ignore

    if (fontName === null || fontName === void 0 ? void 0 : fontName.family) {
      // @ts-ignore
      className.push(_SACSS__WEBPACK_IMPORTED_MODULE_1__["default"].addFontFamily(fontName.family));
    } // text-align


    var taClass = {
      "LEFT": '',
      "CENTER": 'tac',
      "RIGHT": 'tar',
      "JUSTIFIED": 'taj'
    }[node.textAlignHorizontal];
    taClass && className.push(taClass); // vertical-align

    var vaClass = {
      "TOP": '',
      "CENTER": 'vam',
      "BOTTOM": 'vab'
    }[node.textAlignVertical];
    vaClass && className.push(vaClass);
    var textCase = TEXT.getPropByNode(node, 'textCase'); // tt

    var ttClass = {
      "ORIGINAL": '',
      "UPPER": 'ttu',
      "LOWER": 'ttl',
      "TITLE": 'ttc'
    }[textCase];
    ttClass && className.push(ttClass);
    var textDecoration = TEXT.getPropByNode(node, 'textDecoration'); // td

    var tdClass = {
      "NONE": "",
      "UNDERLINE": 'tdu',
      "STRIKETHROUGH": 'tdl'
    }[textDecoration];
    tdClass && className.push(tdClass);
    var strClassName = className.join(' ');
    var isStrong = ['fw500', 'fw600', 'fw700', 'fw800', 'fw900'].findIndex(function (item) {
      return strClassName.indexOf(item) > -1;
    }) > -1;
    return {
      className: strClassName,
      tagName: isStrong ? 'strong' : 'span'
    };
  },
  getTextChildren: function getTextChildren(node) {
    var _node$characters = node.characters,
        characters = _node$characters === void 0 ? '' : _node$characters;
    var legalP = characters.split('\n').filter(function (item) {
      return item.trim();
    }); // 有回车表示多段落

    if (legalP.length > 1) {
      var mbClass = node.paragraphSpacing > 0 ? _SACSS__WEBPACK_IMPORTED_MODULE_1__["default"].add('mb', node.paragraphSpacing) : '';
      var ps = legalP.map(function (item, key) {
        var isLast = key === legalP.length - 1;
        return {
          tagName: 'p',
          className: isLast ? '' : mbClass,
          children: [item]
        };
      });
      return ps;
    }

    return [characters];
  },
  // 文本组件
  getInfo: function getInfo(node) {
    if (node.type !== 'TEXT') {
      return null;
    }

    var id = TEXT.getPropByNode(node, 'textStyleId'); // @ts-ignore

    var getInfo = _CONFIG__WEBPACK_IMPORTED_MODULE_0__["default"].getInfoById(id) || {};
    var acssInfo = TEXT.getACSSSInfo(node);
    var result = {
      className: getInfo.className || acssInfo.className || '',
      tagName: getInfo.tagName || acssInfo.tagName || '',
      ignoreClassName: getInfo.ignoreClassName || ''
    };
    return result;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (TEXT);

/***/ }),

/***/ "./src/code.ts":
/*!*********************!*\
  !*** ./src/code.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NODE__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_/NODE */ "./src/_/NODE.ts");
/* harmony import */ var _CONFIG__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_/CONFIG */ "./src/_/CONFIG.ts");
/* harmony import */ var _SACSS__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_/SACSS */ "./src/_/SACSS.ts");
/* harmony import */ var _render_DOM__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_/render/DOM */ "./src/_/render/DOM.ts");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var API = {
  /**
   * 默认显示 home
   */
  tabIndex: 0,

  /**
   * 获取用户选中的图层
   */
  getSelection: function getSelection() {
    var selection = figma.currentPage.selection; // console.log(selection);

    if (!selection.length) {
      // 没有选择任何元素
      figma.ui.postMessage({
        noSelection: true
      });
      return null;
    }

    return selection;
  },

  /**
   * 当 Tab 切换的时候会出发这个方法
   * @param index
   */
  onTabChange: function onTabChange(index) {
    var beforeIndex = API.tabIndex;
    API.tabIndex = index; // 如果只是在 HTML 和 ACSS 之前切换

    if ((beforeIndex === 0 || beforeIndex === 1) && (index === 0 || index === 1)) {
      return;
    }

    var actionMap = ['runHome', 'runHome', 'runToken', 'runConfig'];
    var action = actionMap[index]; // console.log('onTabChange', action);

    action && API[action]();
  },

  /**
   * 触发
   */
  run: function run() {
    var actionMap = ['runHome', 'runHome', 'runToken', ''];
    var action = actionMap[API.tabIndex];

    if (!action) {
      return;
    }

    API[action]();
  },

  /**
   * 显示第一屏
   */
  runHome: function runHome() {
    var selection = API.getSelection();

    if (!selection) {
      return;
    }

    _SACSS__WEBPACK_IMPORTED_MODULE_2__["default"].init(); // @ts-ignore

    var Info = _NODE__WEBPACK_IMPORTED_MODULE_0__["default"].getNodesInfo(selection); // console.log(Info);

    var isJSX = _CONFIG__WEBPACK_IMPORTED_MODULE_1__["default"].isJSX();
    setTimeout(function () {
      figma.ui.postMessage({
        getHTML: _render_DOM__WEBPACK_IMPORTED_MODULE_3__["default"].render(Info, isJSX),
        getCSS: _SACSS__WEBPACK_IMPORTED_MODULE_2__["default"].getString(),
        isJSX: isJSX,
        noSelection: false
      });
    }, 16);
  },
  runConfig: function runConfig() {
    setTimeout(function () {
      figma.ui.postMessage({
        getConfig: _CONFIG__WEBPACK_IMPORTED_MODULE_1__["default"].getAll()
      });
    }, 10);
  },
  runToken: function runToken() {
    var _ref = API.getSelection() || [],
        _ref2 = _slicedToArray(_ref, 1),
        selection = _ref2[0];

    setTimeout(function () {
      figma.ui.postMessage(_CONFIG__WEBPACK_IMPORTED_MODULE_1__["default"].getSelectionTokens(selection));
    }, 16);
  },
  onmessage: function onmessage() {
    var msg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    // @ts-ignore
    var _msg$type = msg.type,
        type = _msg$type === void 0 ? null : _msg$type,
        _msg$value = msg.value,
        value = _msg$value === void 0 ? null : _msg$value;

    if (type === null) {
      return;
    }

    var _type$split = type.split('.'),
        _type$split2 = _slicedToArray(_type$split, 2),
        name = _type$split2[0],
        action = _type$split2[1]; // console.log('API onmessage', name, action, value);


    if (name === 'API' && action in API) {
      API[action](value);
      return;
    }

    if (name === 'CONFIG' && action in _CONFIG__WEBPACK_IMPORTED_MODULE_1__["default"]) {
      _CONFIG__WEBPACK_IMPORTED_MODULE_1__["default"][action](value);

      if (action === 'changeJSX') {
        API.runHome();
        return;
      }

      if (action === 'appendToken') {
        API.runToken();
        return;
      }

      API.runConfig();
    }
  }
}; // This plugin will open a window to prompt the user to enter a number, and
// it will then create that many rectangles on the screen.
// This file holds the main code for the plugins. It has access to the *document*.
// You can access browser APIs in the <script> tag inside "ui.html" which has a
// full browser environment (see documentation).

_CONFIG__WEBPACK_IMPORTED_MODULE_1__["default"].init().then(function () {
  // This shows the HTML page in "ui.html".
  figma.showUI(__html__, {
    width: 400,
    height: 600
  });
  API.run();
  figma.on("selectionchange", function () {
    API.run();
  }); // @ts-ignore

  figma.ui.onmessage = API.onmessage;
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL18vQ09NUE9ORU5ULnRzIiwid2VicGFjazovLy8uL3NyYy9fL0NPTkZJRy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvXy9OT0RFLnRzIiwid2VicGFjazovLy8uL3NyYy9fL1NBQ1NTLnRzIiwid2VicGFjazovLy8uL3NyYy9fL1VUSUxTLnRzIiwid2VicGFjazovLy8uL3NyYy9fL3JlbmRlci9ET00udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL18vcmVuZGVyL0hUTUwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL18vcmVuZGVyL0pTWC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvXy90b2tlbi9DT0xPUi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvXy90b2tlbi9FRkZFQ1QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL18vdG9rZW4vRklMTC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvXy90b2tlbi9GTEVYLnRzIiwid2VicGFjazovLy8uL3NyYy9fL3Rva2VuL0dSSUQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL18vdG9rZW4vT1RIRVJTLnRzIiwid2VicGFjazovLy8uL3NyYy9fL3Rva2VuL1NUUk9LRS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvXy90b2tlbi9URVhULnRzIiwid2VicGFjazovLy8uL3NyYy9jb2RlLnRzIl0sIm5hbWVzIjpbIkNPTVBPTkVOVCIsImlzQ29tcG9uZW50Iiwibm9kZSIsInR5cGUiLCJnZXRNYWluQ29tcG9uZW50IiwibWFpbkNvbXBvbmVudCIsImdldENvbXBvbmVudElkIiwia2V5Iiwic3RyaW5nVG9Db21wb25lbnROYW1lIiwibmFtZSIsInRyaW1OYW1lIiwidHJpbSIsInN0ck5hbWUiLCJyZXBsYWNlIiwiZmlyc3RDaGFyIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJsZW5ndGgiLCJzbGljZSIsImdldEluZm8iLCJpZCIsIm1hdGNoVG9rZW4iLCJDT05GSUciLCJnZXRUb2tlbiIsInJlbmRlckNoaWxkcmVuIiwicmVuZGVyV2lkdGgiLCJyZW5kZXJIZWlnaHQiLCJQUk9fREVGQVVMVCIsImlnbm9yZUNsYXNzTmFtZSIsInRva2VuIiwiQ09ORklHX0RFRkFVTFQiLCJjdXJyZW50SW5kZXgiLCJpc0pTWCIsInByb2plY3RzIiwic3RvcmUiLCJjaGFuZ2VDdXJyZW50IiwiaW5kZXgiLCJnZXRBbGwiLCJmaWdtYSIsImNsaWVudFN0b3JhZ2UiLCJzZXRBc3luYyIsImNoYW5nZUpTWCIsInZhbHVlIiwicmVtb3ZlIiwic3BsaWNlIiwicHVzaCIsImFkZE5ld1Byb2plY3QiLCJlZGl0QnlJbmRleCIsImRhdGEiLCJjdXJyZW50IiwidWkiLCJwb3N0TWVzc2FnZSIsImFsZXJ0TXNnIiwicmVwbGFjZUJ5SW5kZXgiLCJhcHBlbmRUb2tlbiIsImdldEN1cnJlbnQiLCJPYmplY3QiLCJhc3NpZ24iLCJpbml0IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJnZXRBc3luYyIsInRoZW4iLCJyZXQiLCJjYXRjaCIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsImdldEluZm9CeUlkIiwiZ2V0U3R5bGVCeUlkIiwidG9rZW5Db25maWciLCJnZXRTZWxlY3Rpb25Ub2tlbnMiLCJzZWxlY3Rpb24iLCJnZXRTZWxlY3Rpb25JbmZvIiwiZmluZFRva2VuIiwiZmlsbFN0eWxlSWQiLCJ0ZXh0U3R5bGVJZCIsInN0cm9rZVN0eWxlSWQiLCJlZmZlY3RTdHlsZUlkIiwiZ3JpZFN0eWxlSWQiLCJmb3JFYWNoIiwiaXRlbSIsInN0eWxlS2V5IiwiZ2V0QWxsVG9rZW5zIiwicm9vdCIsImNvbXBvbmVudHMiLCJmaW5kQWxsIiwiYyIsInBhcmVudCIsImFkZENvbmZpZyIsImdldExvY2FsUGFpbnRTdHlsZXMiLCJnZXRMb2NhbFRleHRTdHlsZXMiLCJnZXRMb2NhbEVmZmVjdFN0eWxlcyIsImdldExvY2FsR3JpZFN0eWxlcyIsImdvdEFsbFRva2VucyIsIl9fcmVzdCIsInMiLCJlIiwidCIsInAiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJpbmRleE9mIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwiaSIsInByb3BlcnR5SXNFbnVtZXJhYmxlIiwiTk9ERSIsImV4dGVuZEluZm8iLCJhIiwiYiIsImNsYXNzTmFtZSIsImNsYXNzTmFtZUEiLCJpZ25vcmVDbGFzc05hbWVBIiwiY29tcG9uZW50UHJvcHMiLCJjb21wb25lbnRQcm9wc0EiLCJwcm9wcyIsInByb3BzQSIsImh0bWxQcm9wcyIsImh0bWxQcm9wc0EiLCJyZXN0QSIsImNsYXNzTmFtZUIiLCJpZ25vcmVDbGFzc05hbWVCIiwiY29tcG9uZW50UHJvcHNCIiwicHJvcHNCIiwiaHRtbFByb3BzQiIsImNoaWxkcmVuIiwicmVzdEIiLCJpc1N0cnVjdE5vZGUiLCJzdGFydHNXaXRoIiwieWVzVHlwZXMiLCJnb3RObyIsImZpbmQiLCJ2aXNpYmxlIiwiaXNSZW5kZXJDaGlsZHJlbiIsImdldE5vZGVJbmZvIiwibm9kZUluZm8iLCJ0YWdOYW1lIiwiY29tcG9uZW50IiwiZmlsbCIsIkZJTEwiLCJ0ZXh0IiwiVEVYVCIsInN0cm9rZSIsIlNUUk9LRSIsImdyaWQiLCJHUklEIiwiZWZmZWN0IiwiRUZGRUNUIiwib3RoZXJzIiwiT1RIRVJTIiwiZmxleCIsIkZMRVgiLCJTdHJpbmciLCJTQUNTUyIsImFkZCIsInBhcnNlSW50Iiwid2lkdGgiLCJoZWlnaHQiLCJfYSIsInRleHRzIiwiZ2V0VGV4dENoaWxkcmVuIiwibWFwIiwiY2hhcmFjdGVycyIsImdldE5vZGVzSW5mbyIsIlVUSUxTIiwiY2xlYXJDbGFzc05hbWUiLCJjaGlsZHJlbkluZm8iLCJjb21wb25lbnROYW1lIiwic29ydCIsIm5vZGVzIiwiYVkiLCJ5IiwiYlkiLCJ4IiwiaW5mbyIsInNvcnROb2RlcyIsImxlbiIsIkFycmF5IiwibmFtZU1hcCIsImdldENsYXNzU2VsZWN0b3JCeU5hbWUiLCJnZXRTdHJpbmciLCJrZXlzIiwicmVzdWx0Iiwiam9pbiIsInVuaXQiLCJwcm9wTmFtZSIsInVzZVZhbHVlIiwiTnVtYmVyIiwicGFyc2VGbG9hdCIsInRvRml4ZWQiLCJjbGFzc1VuaXQiLCJhZGRGb250RmFtaWx5IiwidmFsdWVPayIsInRvTG93ZXJDYXNlIiwiYWRkQ29sb3IiLCJyZ2JhIiwiYWRkQmdDb2xvciIsImlzQmxvY2siLCJibG9ja1RhZyIsImlzU2VsZlRhZyIsInNlbGZUYWciLCJjbGFzc05hbWVzIiwic3BsaXQiLCJET00iLCJyZW5kZXIiLCJvYmoiLCJKU1giLCJnZXREb21CeUFycmF5IiwiSFRNTCIsImdldFByb3BzU3RyaW5nIiwiYXJyUHJvcHMiLCJlbnRyaWVzIiwiZ2V0SXRlbURvbSIsInByb3BzU3RyaW5nIiwidGFnU3RhcnQiLCJzdHJQcm9wcyIsIkNPTE9SIiwiZ2V0UmdiYUJ5RmlsbCIsImNvbG9yIiwib3BhY2l0eSIsInIiLCJnIiwiZ2V0RmlsbCIsImdldFJhbmdlRmlsbHMiLCJmaWxscyIsImZpcnN0RmlsbCIsImdldFJhbmdlRmlsbFN0eWxlSWQiLCJ0ZXh0Q2xhc3NOYW1lIiwicmVzdCIsInJlbmRlckNsYXNzTmFtZSIsImlzRmxleCIsImxheW91dE1vZGUiLCJnZXRUaGlzSW5mbyIsInByaW1hcnlBeGlzQWxpZ25JdGVtcyIsImNvdW50ZXJBeGlzQWxpZ25JdGVtcyIsImdldEluZm9Gcm9tUGFyZW50IiwiaXRlbVNwYWNpbmciLCJmaWx0ZXIiLCJwb3AiLCJpc0xhc3RDaGlsZHJlbiIsImd1dHRlck1hcCIsImxheW91dEdyb3ciLCJjMSIsImljMSIsImMyIiwiaWMyIiwiZ2VyQm9yZGVyUmFkaXVzQ2xhc3NOYW1lIiwidGwiLCJ0b3BMZWZ0UmFkaXVzIiwidHIiLCJ0b3BSaWdodFJhZGl1cyIsImJyIiwiYm90dG9tUmlnaHRSYWRpdXMiLCJibCIsImJvdHRvbUxlZnRSYWRpdXMiLCJnZXRQYWRkaW5nQ2xhc3NOYW1lIiwicGFkZGluZ1RvcCIsInBhZGRpbmdSaWdodCIsInBhZGRpbmdCb3R0b20iLCJwYWRkaW5nTGVmdCIsInBhZGRpbmciLCJyYWRpdXMiLCJ1bml0TWFwIiwiZ2V0Rm9udE5hbWVDbGFzc0J5U3R5bGUiLCJzdHlsZSIsImZvbnRNYXAiLCJnZXRQcm9wQnlOb2RlIiwiZ2V0QUNTU1NJbmZvIiwiZm9udFNpemUiLCJsaW5lSGVpZ2h0IiwibGV0dGVyU3BhY2luZyIsImZvbnROYW1lIiwiZm5DbGFzcyIsImZhbWlseSIsInRhQ2xhc3MiLCJ0ZXh0QWxpZ25Ib3Jpem9udGFsIiwidmFDbGFzcyIsInRleHRBbGlnblZlcnRpY2FsIiwidGV4dENhc2UiLCJ0dENsYXNzIiwidGV4dERlY29yYXRpb24iLCJ0ZENsYXNzIiwic3RyQ2xhc3NOYW1lIiwiaXNTdHJvbmciLCJmaW5kSW5kZXgiLCJsZWdhbFAiLCJtYkNsYXNzIiwicGFyYWdyYXBoU3BhY2luZyIsInBzIiwiaXNMYXN0IiwiYWNzc0luZm8iLCJBUEkiLCJ0YWJJbmRleCIsImdldFNlbGVjdGlvbiIsImN1cnJlbnRQYWdlIiwibm9TZWxlY3Rpb24iLCJvblRhYkNoYW5nZSIsImJlZm9yZUluZGV4IiwiYWN0aW9uTWFwIiwiYWN0aW9uIiwicnVuIiwicnVuSG9tZSIsIkluZm8iLCJzZXRUaW1lb3V0IiwiZ2V0SFRNTCIsImdldENTUyIsInJ1bkNvbmZpZyIsImdldENvbmZpZyIsInJ1blRva2VuIiwib25tZXNzYWdlIiwibXNnIiwic2hvd1VJIiwiX19odG1sX18iLCJvbiJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFD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RUFBTixDQUFTLGlCQUFULEVBQTRCLFlBQU07QUFDOUJ0QixPQUFHLENBQUNTLEdBQUo7QUFDSCxHQUZELEVBSnFCLENBT3JCOztBQUNBeFEsT0FBSyxDQUFDWSxFQUFOLENBQVNxUSxTQUFULEdBQXFCbEIsR0FBRyxDQUFDa0IsU0FBekI7QUFDSCxDQVRELEUiLCJmaWxlIjoiY29kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2NvZGUudHNcIik7XG4iLCJpbXBvcnQgQ09ORklHIGZyb20gXCIuL0NPTkZJR1wiO1xuY29uc3QgQ09NUE9ORU5UID0ge1xuICAgIGlzQ29tcG9uZW50OiAobm9kZSkgPT4ge1xuICAgICAgICAvLyAnQ09NUE9ORU5UX1NFVCcg55uu5YmN5LiN6IO95L2c5Li657uE5Lu255qE5Yik5pat5qCH5YeGXG4gICAgICAgIHJldHVybiBub2RlLnR5cGUgPT09ICdJTlNUQU5DRScgfHwgbm9kZS50eXBlID09PSAnQ09NUE9ORU5UJztcbiAgICB9LFxuICAgIGdldE1haW5Db21wb25lbnQ6IChub2RlKSA9PiB7XG4gICAgICAgIGlmIChub2RlLnR5cGUgPT09ICdDT01QT05FTlRfU0VUJyB8fCBub2RlLnR5cGUgPT09ICdDT01QT05FTlQnKSB7XG4gICAgICAgICAgICByZXR1cm4gbm9kZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhub2RlLCB7aXNWYXJpYW50fSk7XG4gICAgICAgIHJldHVybiBub2RlLm1haW5Db21wb25lbnQ7XG4gICAgfSxcbiAgICBnZXRDb21wb25lbnRJZDogKG5vZGUpID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2cobm9kZSk7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgY29uc3QgeyBrZXkgPSAnJyB9ID0gQ09NUE9ORU5ULmdldE1haW5Db21wb25lbnQobm9kZSkgfHwge307XG4gICAgICAgIHJldHVybiBrZXk7XG4gICAgfSxcbiAgICBzdHJpbmdUb0NvbXBvbmVudE5hbWU6IChuYW1lID0gJycpID0+IHtcbiAgICAgICAgY29uc3QgdHJpbU5hbWUgPSBuYW1lLnRyaW0oKTtcbiAgICAgICAgaWYgKCF0cmltTmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHN0ck5hbWUgPSB0cmltTmFtZS5yZXBsYWNlKC9bXFxXXS9nLCAnJyk7XG4gICAgICAgIGNvbnN0IGZpcnN0Q2hhciA9IHN0ck5hbWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgIGlmIChzdHJOYW1lLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIGZpcnN0Q2hhcjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmlyc3RDaGFyICsgc3RyTmFtZS5zbGljZSgxKTtcbiAgICB9LFxuICAgIGdldEluZm86IChub2RlKSA9PiB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgY29uc3QgaWQgPSBDT01QT05FTlQuZ2V0Q29tcG9uZW50SWQobm9kZSk7XG4gICAgICAgIGNvbnN0IG1hdGNoVG9rZW4gPSBpZCA/IENPTkZJRy5nZXRUb2tlbigpW2lkXSA6ICcnO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh7bWF0Y2hUb2tlbn0pO1xuICAgICAgICBpZiAoIW1hdGNoVG9rZW4pIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIC8vIOeUqOaIt+ayoeacieaMh+WumuihqOekuuimgea4suafk1xuICAgICAgICBpZiAoISgncmVuZGVyQ2hpbGRyZW4nIGluIG1hdGNoVG9rZW4pKSB7XG4gICAgICAgICAgICBtYXRjaFRva2VuLnJlbmRlckNoaWxkcmVuID0gJzEnO1xuICAgICAgICB9XG4gICAgICAgIC8vIOeUqOaIt+ayoeacieaMh+WumuihqOekuuimgea4suafk1xuICAgICAgICBpZiAoISgncmVuZGVyV2lkdGgnIGluIG1hdGNoVG9rZW4pKSB7XG4gICAgICAgICAgICBtYXRjaFRva2VuLnJlbmRlcldpZHRoID0gJzEnO1xuICAgICAgICB9XG4gICAgICAgIC8vIOeUqOaIt+ayoeacieaMh+WumuihqOekuuimgea4suafk1xuICAgICAgICBpZiAoISgncmVuZGVySGVpZ2h0JyBpbiBtYXRjaFRva2VuKSkge1xuICAgICAgICAgICAgbWF0Y2hUb2tlbi5yZW5kZXJIZWlnaHQgPSAnMSc7XG4gICAgICAgIH1cbiAgICAgICAgLy8gY29uc29sZS5sb2coe21hdGNoVG9rZW59KTtcbiAgICAgICAgcmV0dXJuIG1hdGNoVG9rZW47XG4gICAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IENPTVBPTkVOVDtcbiIsImltcG9ydCBDT01QT05FTlQgZnJvbSBcIi4vQ09NUE9ORU5UXCI7XG5jb25zdCBQUk9fREVGQVVMVCA9IHtcbiAgICBuYW1lOiAnZGVmYXVsdCcsXG4gICAgaWdub3JlQ2xhc3NOYW1lOiAnJyxcbiAgICB0b2tlbjoge31cbn07XG5jb25zdCBDT05GSUdfREVGQVVMVCA9IHtcbiAgICBjdXJyZW50SW5kZXg6IDAsXG4gICAgaXNKU1g6IGZhbHNlLFxuICAgIHByb2plY3RzOiBbUFJPX0RFRkFVTFRdXG59O1xuY29uc3QgQ09ORklHID0ge1xuICAgIGtleTogJ1Rva2VuVG9Db2RlJyxcbiAgICBzdG9yZTogQ09ORklHX0RFRkFVTFQsXG4gICAgY2hhbmdlQ3VycmVudDogKGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IHN0b3JlID0gQ09ORklHLmdldEFsbCgpO1xuICAgICAgICBzdG9yZS5jdXJyZW50SW5kZXggPSBpbmRleDtcbiAgICAgICAgZmlnbWEuY2xpZW50U3RvcmFnZS5zZXRBc3luYyhDT05GSUcua2V5LCBzdG9yZSk7XG4gICAgfSxcbiAgICBjaGFuZ2VKU1g6ICh2YWx1ZSkgPT4ge1xuICAgICAgICBjb25zdCBzdG9yZSA9IENPTkZJRy5nZXRBbGwoKTtcbiAgICAgICAgLy8g6YeN572u5Zue56ys5LiA5LiqXG4gICAgICAgIHN0b3JlLmlzSlNYID0gdmFsdWU7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHN0b3JlKTtcbiAgICAgICAgZmlnbWEuY2xpZW50U3RvcmFnZS5zZXRBc3luYyhDT05GSUcua2V5LCBzdG9yZSk7XG4gICAgfSxcbiAgICByZW1vdmU6IChpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBzdG9yZSA9IENPTkZJRy5nZXRBbGwoKTtcbiAgICAgICAgLy8g6YeN572u5Zue56ys5LiA5LiqXG4gICAgICAgIHN0b3JlLmN1cnJlbnRJbmRleCA9IDA7XG4gICAgICAgIHN0b3JlLnByb2plY3RzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIGlmICghc3RvcmUucHJvamVjdHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBzdG9yZS5wcm9qZWN0cy5wdXNoKFBST19ERUZBVUxUKTtcbiAgICAgICAgfVxuICAgICAgICBmaWdtYS5jbGllbnRTdG9yYWdlLnNldEFzeW5jKENPTkZJRy5rZXksIHN0b3JlKTtcbiAgICB9LFxuICAgIGFkZE5ld1Byb2plY3Q6ICh7IG5hbWUgPSAnJywgdG9rZW4gPSB7fSB9ID0ge30pID0+IHtcbiAgICAgICAgY29uc3Qgc3RvcmUgPSBDT05GSUcuZ2V0QWxsKCk7XG4gICAgICAgIHN0b3JlLnByb2plY3RzLnB1c2goe1xuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIGlnbm9yZUNsYXNzTmFtZTogJycsXG4gICAgICAgICAgICB0b2tlblxuICAgICAgICB9KTtcbiAgICAgICAgc3RvcmUuY3VycmVudEluZGV4ID0gc3RvcmUucHJvamVjdHMubGVuZ3RoIC0gMTtcbiAgICAgICAgZmlnbWEuY2xpZW50U3RvcmFnZS5zZXRBc3luYyhDT05GSUcua2V5LCBzdG9yZSk7XG4gICAgfSxcbiAgICBlZGl0QnlJbmRleDogKHsgZGF0YSwgaW5kZXggfSkgPT4ge1xuICAgICAgICBjb25zdCBzdG9yZSA9IENPTkZJRy5nZXRBbGwoKTtcbiAgICAgICAgY29uc3QgY3VycmVudCA9IHN0b3JlLnByb2plY3RzW2luZGV4XTtcbiAgICAgICAgc3RvcmUucHJvamVjdHNbaW5kZXhdID0ge1xuICAgICAgICAgICAgbmFtZTogZGF0YS5uYW1lLFxuICAgICAgICAgICAgaWdub3JlQ2xhc3NOYW1lOiBkYXRhLmlnbm9yZUNsYXNzTmFtZSxcbiAgICAgICAgICAgIHRva2VuOiBkYXRhLnRva2VuID8gZGF0YS50b2tlbiA6IGN1cnJlbnQudG9rZW5cbiAgICAgICAgfTtcbiAgICAgICAgZmlnbWEuY2xpZW50U3RvcmFnZS5zZXRBc3luYyhDT05GSUcua2V5LCBzdG9yZSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHN0b3JlKTtcbiAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgYWxlcnRNc2c6IGAke2RhdGEubmFtZX0gc2F2ZSBzdWNjZXNzYFxuICAgICAgICB9KTtcbiAgICB9LFxuICAgIHJlcGxhY2VCeUluZGV4OiAoeyBkYXRhLCBpbmRleCB9KSA9PiB7XG4gICAgICAgIGNvbnN0IHN0b3JlID0gQ09ORklHLmdldEFsbCgpO1xuICAgICAgICBzdG9yZS5wcm9qZWN0c1tpbmRleF0gPSBkYXRhIHx8IHt9O1xuICAgICAgICBmaWdtYS5jbGllbnRTdG9yYWdlLnNldEFzeW5jKENPTkZJRy5rZXksIHN0b3JlKTtcbiAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgYWxlcnRNc2c6IGAke2RhdGEubmFtZX0gcmVwbGFjZSBzdWNjZXNzYFxuICAgICAgICB9KTtcbiAgICB9LFxuICAgIGFwcGVuZFRva2VuOiAoYXBwZW5kVG9rZW4gPSB7fSkgPT4ge1xuICAgICAgICBjb25zdCBjdXJyZW50ID0gQ09ORklHLmdldEN1cnJlbnQoKTtcbiAgICAgICAgY29uc3QgeyB0b2tlbiA9IHt9IH0gPSBjdXJyZW50O1xuICAgICAgICBjdXJyZW50LnRva2VuID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCB0b2tlbiksIGFwcGVuZFRva2VuKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coYXBwZW5kVG9rZW4sIENPTkZJRy5zdG9yZSk7XG4gICAgICAgIGZpZ21hLmNsaWVudFN0b3JhZ2Uuc2V0QXN5bmMoQ09ORklHLmtleSwgQ09ORklHLnN0b3JlKTtcbiAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgYWxlcnRNc2c6IGAke2N1cnJlbnQubmFtZX0gc2F2ZSBzdWNjZXNzYFxuICAgICAgICB9KTtcbiAgICB9LFxuICAgIGlzSlNYOiAoKSA9PiB7XG4gICAgICAgIHJldHVybiAhIUNPTkZJRy5zdG9yZS5pc0pTWDtcbiAgICB9LFxuICAgIGdldEFsbDogKCkgPT4ge1xuICAgICAgICByZXR1cm4gQ09ORklHLnN0b3JlO1xuICAgIH0sXG4gICAgaW5pdDogKCkgPT4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGZpZ21hLmNsaWVudFN0b3JhZ2UuZ2V0QXN5bmMoQ09ORklHLmtleSkudGhlbigocmV0KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJldCAmJiByZXQucHJvamVjdHMgJiYgcmV0LnByb2plY3RzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBDT05GSUcuc3RvcmUgPSByZXQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyDmsqHmnInnvJPlrZjliJvlu7rkuIDkuKrmlrDnmoRcbiAgICAgICAgICAgICAgICAgICAgZmlnbWEuY2xpZW50U3RvcmFnZS5zZXRBc3luYyhDT05GSUcua2V5LCBDT05GSUdfREVGQVVMVCk7XG4gICAgICAgICAgICAgICAgICAgIENPTkZJRy5zdG9yZSA9IENPTkZJR19ERUZBVUxUO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXNvbHZlKENPTkZJRy5nZXRUb2tlbigpKTtcbiAgICAgICAgICAgIH0pLmNhdGNoKHJlamVjdCk7XG4gICAgICAgIH0pKTtcbiAgICB9LFxuICAgIGdldEN1cnJlbnQ6ICgpID0+IHtcbiAgICAgICAgY29uc3QgY3VycmVudEluZGV4ID0gQ09ORklHLnN0b3JlLmN1cnJlbnRJbmRleDtcbiAgICAgICAgY29uc3QgY3VycmVudCA9IENPTkZJRy5zdG9yZS5wcm9qZWN0c1tjdXJyZW50SW5kZXhdO1xuICAgICAgICByZXR1cm4gY3VycmVudDtcbiAgICB9LFxuICAgIGdldFRva2VuOiAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgdG9rZW4gPSBudWxsIH0gPSBDT05GSUcuZ2V0Q3VycmVudCgpIHx8IHt9O1xuICAgICAgICByZXR1cm4gdG9rZW4gPyBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRva2VuKSkgOiBudWxsO1xuICAgIH0sXG4gICAgZ2V0SW5mb0J5SWQ6IChpZCkgPT4ge1xuICAgICAgICBpZiAoIShpZCAmJiAodHlwZW9mIGlkID09PSAnc3RyaW5nJykpKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IGtleSA9ICcnIH0gPSBmaWdtYS5nZXRTdHlsZUJ5SWQoaWQpIHx8IHt9O1xuICAgICAgICBpZiAoIWtleSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdG9rZW5Db25maWcgPSBDT05GSUcuZ2V0VG9rZW4oKSB8fCB7fTtcbiAgICAgICAgLy8g5aaC5p6c5pyJ6Ieq5a6a5LmJ55So6Ieq5a6a5LmJ55qEXG4gICAgICAgIHJldHVybiB0b2tlbkNvbmZpZ1trZXldO1xuICAgIH0sXG4gICAgZ2V0U2VsZWN0aW9uVG9rZW5zOiAoc2VsZWN0aW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgbmFtZSA9ICcnLCB0b2tlbiA9IHt9IH0gPSBDT05GSUcuZ2V0Q3VycmVudCgpIHx8IHt9O1xuICAgICAgICAvLyBjb25zb2xlLmxvZygncnVuVG9rZW4gZ2V0U2VsZWN0aW9uVG9rZW5zJyk7XG4gICAgICAgIGlmICghc2VsZWN0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGdldFNlbGVjdGlvbkluZm86IHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbWF0Y2hUb2tlbiA9IHt9O1xuICAgICAgICAvLyDlpoLmnpzmmK/nu4Tku7ZcbiAgICAgICAgaWYgKENPTVBPTkVOVC5pc0NvbXBvbmVudChzZWxlY3Rpb24pKSB7XG4gICAgICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgICAgIGNvbnN0IHsga2V5LCBuYW1lLCB0eXBlIH0gPSBDT01QT05FTlQuZ2V0TWFpbkNvbXBvbmVudChzZWxlY3Rpb24pO1xuICAgICAgICAgICAgY29uc3QgZmluZFRva2VuID0gdG9rZW5ba2V5XSB8fCB7fTtcbiAgICAgICAgICAgIG1hdGNoVG9rZW5ba2V5XSA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZmluZFRva2VuKSwgeyBuYW1lLFxuICAgICAgICAgICAgICAgIHR5cGUgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgIFtzZWxlY3Rpb24uZmlsbFN0eWxlSWQsIHNlbGVjdGlvbi50ZXh0U3R5bGVJZCwgc2VsZWN0aW9uLnN0cm9rZVN0eWxlSWQsIHNlbGVjdGlvbi5lZmZlY3RTdHlsZUlkLCBzZWxlY3Rpb24uZ3JpZFN0eWxlSWRdLmZvckVhY2goKGl0ZW0sIGtleSkgPT4ge1xuICAgICAgICAgICAgaWYgKCFpdGVtKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgeyBrZXk6IHN0eWxlS2V5LCBuYW1lLCB0eXBlIH0gPSBmaWdtYS5nZXRTdHlsZUJ5SWQoaXRlbSkgfHwge307XG4gICAgICAgICAgICBpZiAoIXN0eWxlS2V5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbWF0Y2hUb2tlbltzdHlsZUtleV0gPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHRva2VuW3N0eWxlS2V5XSksIHsgbmFtZSxcbiAgICAgICAgICAgICAgICB0eXBlIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGdldFNlbGVjdGlvbkluZm86IHtcbiAgICAgICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgICAgIHRva2VuOiBtYXRjaFRva2VuXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiDojrflj5bmiYDmnInnmoQgVG9rZW4g5YyF5ousIENvbXBvbmVudFxuICAgICAqL1xuICAgIGdldEFsbFRva2VuczogKCkgPT4ge1xuICAgICAgICBjb25zdCBuYW1lID0gZmlnbWEucm9vdC5uYW1lO1xuICAgICAgICBjb25zdCBjb21wb25lbnRzID0gZmlnbWEucm9vdC5maW5kQWxsKGMgPT4ge1xuICAgICAgICAgICAgaWYgKGMudHlwZSA9PT0gJ0NPTVBPTkVOVF9TRVQnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYy50eXBlICE9PSAnQ09NUE9ORU5UJykge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjLnBhcmVudC50eXBlID09PSAnQ09NUE9ORU5UX1NFVCcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IHRva2VuID0ge307XG4gICAgICAgIGNvbnN0IGFkZENvbmZpZyA9IChkYXRhID0gW10pID0+IHtcbiAgICAgICAgICAgIGRhdGEuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIHRva2VuW2l0ZW0uaWRdID0ge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBpdGVtLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IGl0ZW0udHlwZVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgYWRkQ29uZmlnKGNvbXBvbmVudHMpO1xuICAgICAgICBhZGRDb25maWcoZmlnbWEuZ2V0TG9jYWxQYWludFN0eWxlcygpKTtcbiAgICAgICAgYWRkQ29uZmlnKGZpZ21hLmdldExvY2FsVGV4dFN0eWxlcygpKTtcbiAgICAgICAgYWRkQ29uZmlnKGZpZ21hLmdldExvY2FsRWZmZWN0U3R5bGVzKCkpO1xuICAgICAgICBhZGRDb25maWcoZmlnbWEuZ2V0TG9jYWxHcmlkU3R5bGVzKCkpO1xuICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICBnb3RBbGxUb2tlbnM6IHtcbiAgICAgICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgICAgIGlnbm9yZUNsYXNzTmFtZTogJycsXG4gICAgICAgICAgICAgICAgdG9rZW5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IENPTkZJRztcbiIsInZhciBfX3Jlc3QgPSAodGhpcyAmJiB0aGlzLl9fcmVzdCkgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgICB2YXIgdCA9IHt9O1xuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxuICAgICAgICB0W3BdID0gc1twXTtcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcbiAgICAgICAgfVxuICAgIHJldHVybiB0O1xufTtcbmltcG9ydCBDT01QT05FTlQgZnJvbSBcIi4vQ09NUE9ORU5UXCI7XG5pbXBvcnQgRklMTCBmcm9tIFwiLi90b2tlbi9GSUxMXCI7XG5pbXBvcnQgVEVYVCBmcm9tIFwiLi90b2tlbi9URVhUXCI7XG5pbXBvcnQgU1RST0tFIGZyb20gXCIuL3Rva2VuL1NUUk9LRVwiO1xuaW1wb3J0IEdSSUQgZnJvbSBcIi4vdG9rZW4vR1JJRFwiO1xuaW1wb3J0IEZMRVggZnJvbSBcIi4vdG9rZW4vRkxFWFwiO1xuaW1wb3J0IFNBQ1NTIGZyb20gXCIuL1NBQ1NTXCI7XG5pbXBvcnQgVVRJTFMgZnJvbSBcIi4vVVRJTFNcIjtcbmltcG9ydCBFRkZFQ1QgZnJvbSBcIi4vdG9rZW4vRUZGRUNUXCI7XG5pbXBvcnQgT1RIRVJTIGZyb20gXCIuL3Rva2VuL09USEVSU1wiO1xuaW1wb3J0IENPTkZJRyBmcm9tIFwiLi9DT05GSUdcIjtcbmNvbnN0IE5PREUgPSB7XG4gICAgLyoqXG4gICAgICog5ZCI5bm25Lik5LiqaW5mb1xuICAgICAqIEBwYXJhbSBhXG4gICAgICogQHBhcmFtIGJcbiAgICAgKi9cbiAgICBleHRlbmRJbmZvOiAoYSwgYikgPT4ge1xuICAgICAgICBpZiAoIWIpIHtcbiAgICAgICAgICAgIHJldHVybiBhO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgY2xhc3NOYW1lOiBjbGFzc05hbWVBID0gJycsIGlnbm9yZUNsYXNzTmFtZTogaWdub3JlQ2xhc3NOYW1lQSA9ICcnLCBjb21wb25lbnRQcm9wczogY29tcG9uZW50UHJvcHNBID0ge30sIHByb3BzOiBwcm9wc0EgPSB7fSwgaHRtbFByb3BzOiBodG1sUHJvcHNBID0ge30gfSA9IGEsIHJlc3RBID0gX19yZXN0KGEsIFtcImNsYXNzTmFtZVwiLCBcImlnbm9yZUNsYXNzTmFtZVwiLCBcImNvbXBvbmVudFByb3BzXCIsIFwicHJvcHNcIiwgXCJodG1sUHJvcHNcIl0pO1xuICAgICAgICBjb25zdCB7IGNsYXNzTmFtZTogY2xhc3NOYW1lQiA9ICcnLCBpZ25vcmVDbGFzc05hbWU6IGlnbm9yZUNsYXNzTmFtZUIgPSAnJywgY29tcG9uZW50UHJvcHM6IGNvbXBvbmVudFByb3BzQiA9IHt9LCBwcm9wczogcHJvcHNCID0ge30sIGh0bWxQcm9wczogaHRtbFByb3BzQiA9IHt9LCBjaGlsZHJlbiB9ID0gYiwgcmVzdEIgPSBfX3Jlc3QoYiwgW1wiY2xhc3NOYW1lXCIsIFwiaWdub3JlQ2xhc3NOYW1lXCIsIFwiY29tcG9uZW50UHJvcHNcIiwgXCJwcm9wc1wiLCBcImh0bWxQcm9wc1wiLCBcImNoaWxkcmVuXCJdKTtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogYCR7Y2xhc3NOYW1lQX0gJHtjbGFzc05hbWVCfWAudHJpbSgpLCBpZ25vcmVDbGFzc05hbWU6IGAke2lnbm9yZUNsYXNzTmFtZUF9ICR7aWdub3JlQ2xhc3NOYW1lQn1gLnRyaW0oKSwgaHRtbFByb3BzOiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGh0bWxQcm9wc0EpLCBodG1sUHJvcHNCKSwgY29tcG9uZW50UHJvcHM6IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgY29tcG9uZW50UHJvcHNBKSwgY29tcG9uZW50UHJvcHNCKSB9LCByZXN0QSksIHJlc3RCKTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIOWmguaenOS4gOS4quWFg+e0oOWGhemDqOWPquacieWHoOS9leWbvuW9ou+8jOmCo+S5iOWPquaYvuekuuWFtue7k+aehFxuICAgICAqL1xuICAgIGlzU3RydWN0Tm9kZTogKG5vZGUpID0+IHtcbiAgICAgICAgLy8g5LulI+WPt+W8gOWktFxuICAgICAgICBpZiAobm9kZS5uYW1lLnN0YXJ0c1dpdGgoXCIjXCIpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB5ZXNUeXBlcyA9IFsnUkVDVEFOR0xFJywgJ1ZFQ1RPUicsICdTVEFSJywgJ0xJTkUnLCAnUE9MWUdPTicsICdFTExJUFNFJywgJ1NMSUNFJ107XG4gICAgICAgIC8vIOWmguaenOacrOi6q+WwseaYr+i/meS6m+WFg+e0oOmCo+S5iOS5n+aYr+ebtOaOpei+k+WHulxuICAgICAgICBpZiAoeWVzVHlwZXMuaW5kZXhPZihub2RlLnR5cGUpID4gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChub2RlLnR5cGUgPT09ICdURVhUJykge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgY29uc3QgeyBjaGlsZHJlbiA9IFtdIH0gPSBub2RlO1xuICAgICAgICBpZiAoIWNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgLy8g5om+5Yiw5LqG5LiN5ZCI5rOV5YWD57Sg77yI5LiN5Zyo5LiK6Z2i55qE5Yeg5L2V5YiX6KGo6YeM6Z2i77yJXG4gICAgICAgIGNvbnN0IGdvdE5vID0gY2hpbGRyZW4uZmluZCgoaXRlbSkgPT4gaXRlbS52aXNpYmxlICYmIHllc1R5cGVzLmluZGV4T2YoaXRlbS50eXBlKSA9PT0gLTEpO1xuICAgICAgICByZXR1cm4gIWdvdE5vO1xuICAgIH0sXG4gICAgaXNSZW5kZXJDaGlsZHJlbjogKG5vZGUpID0+IHtcbiAgICAgICAgaWYgKCEobm9kZS50eXBlID09PSAnSU5TVEFOQ0UnIHx8IG5vZGUudHlwZSA9PT0gJ0NPTVBPTkVOVCcpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8g5Y+q5pyJ5LiA5Liq5a2Q5YWD57SgXG4gICAgICAgIGlmIChub2RlLmNoaWxkcmVuLmxlbmd0aCAhPT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIGNvbnN0IG9ubHlDaGlsZHJlbiA9IG5vZGUuY2hpbGRyZW5bMF07XG4gICAgICAgIC8vIGlmIChvbmx5Q2hpbGRyZW4udHlwZSA9PT0gJ0lOU1RBTkNFJykge1xuICAgICAgICAvLyAgIHJldHVybiB0cnVlO1xuICAgICAgICAvLyB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LFxuICAgIGdldE5vZGVJbmZvOiAobm9kZSkgPT4ge1xuICAgICAgICBpZiAoIW5vZGUudmlzaWJsZSB8fCBub2RlLm5hbWUuc3RhcnRzV2l0aChcIl9cIikpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIC8vIOebtOaOpea4suafk+WtkOWFg+e0oFxuICAgICAgICBpZiAoTk9ERS5pc1JlbmRlckNoaWxkcmVuKG5vZGUpKSB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlO1xuICAgICAgICAgICAgcmV0dXJuIE5PREUuZ2V0Tm9kZUluZm8obm9kZS5jaGlsZHJlblswXSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaXNTdHJ1Y3ROb2RlID0gTk9ERS5pc1N0cnVjdE5vZGUobm9kZSk7XG4gICAgICAgIGxldCBub2RlSW5mbyA9IHtcbiAgICAgICAgICAgIGlnbm9yZUNsYXNzTmFtZTogJycsXG4gICAgICAgICAgICBjbGFzc05hbWU6ICcnLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtdXG4gICAgICAgIH07XG4gICAgICAgIGlmIChpc1N0cnVjdE5vZGUpIHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIG5vZGVJbmZvLnRhZ05hbWUgPSAnaSc7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY29tcG9uZW50ID0gQ09NUE9ORU5ULmdldEluZm8obm9kZSk7XG4gICAgICAgIGNvbnN0IGZpbGwgPSBGSUxMLmdldEluZm8obm9kZSk7XG4gICAgICAgIGNvbnN0IHRleHQgPSBURVhULmdldEluZm8obm9kZSk7XG4gICAgICAgIGNvbnN0IHN0cm9rZSA9IFNUUk9LRS5nZXRJbmZvKG5vZGUpO1xuICAgICAgICBjb25zdCBncmlkID0gR1JJRC5nZXRJbmZvKG5vZGUpO1xuICAgICAgICBjb25zdCBlZmZlY3QgPSBFRkZFQ1QuZ2V0SW5mbyhub2RlKTtcbiAgICAgICAgY29uc3Qgb3RoZXJzID0gT1RIRVJTLmdldEluZm8obm9kZSk7XG4gICAgICAgIGNvbnN0IGZsZXggPSBGTEVYLmdldEluZm8obm9kZSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHtjb21wb25lbnQsIGZpbGwsIHRleHQsIHN0cm9rZSwgZ3JpZCwgZWZmZWN0fSk7XG4gICAgICAgIG5vZGVJbmZvID0gTk9ERS5leHRlbmRJbmZvKG5vZGVJbmZvLCBmaWxsKTtcbiAgICAgICAgbm9kZUluZm8gPSBOT0RFLmV4dGVuZEluZm8obm9kZUluZm8sIHRleHQpO1xuICAgICAgICBub2RlSW5mbyA9IE5PREUuZXh0ZW5kSW5mbyhub2RlSW5mbywgc3Ryb2tlKTtcbiAgICAgICAgbm9kZUluZm8gPSBOT0RFLmV4dGVuZEluZm8obm9kZUluZm8sIGdyaWQpO1xuICAgICAgICBub2RlSW5mbyA9IE5PREUuZXh0ZW5kSW5mbyhub2RlSW5mbywgZWZmZWN0KTtcbiAgICAgICAgbm9kZUluZm8gPSBOT0RFLmV4dGVuZEluZm8obm9kZUluZm8sIGNvbXBvbmVudCk7XG4gICAgICAgIG5vZGVJbmZvID0gTk9ERS5leHRlbmRJbmZvKG5vZGVJbmZvLCBmbGV4KTtcbiAgICAgICAgbm9kZUluZm8gPSBOT0RFLmV4dGVuZEluZm8obm9kZUluZm8sIG90aGVycyk7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgaWYgKChpc1N0cnVjdE5vZGUgJiYgU3RyaW5nKG5vZGVJbmZvID09PSBudWxsIHx8IG5vZGVJbmZvID09PSB2b2lkIDAgPyB2b2lkIDAgOiBub2RlSW5mby5yZW5kZXJIZWlnaHQpICE9PSAnMCcpIHx8IFN0cmluZyhub2RlSW5mbyA9PT0gbnVsbCB8fCBub2RlSW5mbyA9PT0gdm9pZCAwID8gdm9pZCAwIDogbm9kZUluZm8ucmVuZGVyV2lkdGgpID09PSAnMScpIHtcbiAgICAgICAgICAgIG5vZGVJbmZvLmNsYXNzTmFtZSArPSAnICcgKyBTQUNTUy5hZGQoJ3cnLCBwYXJzZUludChTdHJpbmcobm9kZS53aWR0aCkpKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGlmICgoaXNTdHJ1Y3ROb2RlICYmIFN0cmluZyhub2RlSW5mbyA9PT0gbnVsbCB8fCBub2RlSW5mbyA9PT0gdm9pZCAwID8gdm9pZCAwIDogbm9kZUluZm8ucmVuZGVySGVpZ2h0KSAhPT0gJzAnKSB8fCBTdHJpbmcobm9kZUluZm8gPT09IG51bGwgfHwgbm9kZUluZm8gPT09IHZvaWQgMCA/IHZvaWQgMCA6IG5vZGVJbmZvLnJlbmRlckhlaWdodCkgPT09ICcxJykge1xuICAgICAgICAgICAgbm9kZUluZm8uY2xhc3NOYW1lICs9ICcgJyArIFNBQ1NTLmFkZCgnaCcsIHBhcnNlSW50KFN0cmluZyhub2RlLmhlaWdodCkpKTtcbiAgICAgICAgfVxuICAgICAgICBub2RlSW5mby5jaGlsZHJlbiA9ICgoKSA9PiB7XG4gICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICBpZiAobm9kZS50eXBlID09PSAnVEVYVCcpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0ZXh0cyA9IFRFWFQuZ2V0VGV4dENoaWxkcmVuKG5vZGUpO1xuICAgICAgICAgICAgICAgIC8vIOWkmuauteaWh+acrOi/memHjOimgeS/ruWkjeS4gOS4i+W1jOWll+eahOagh+etvu+8jOacieWPr+iDveWPmOaIkCBzdHJvbmcgPiBwIOi/meagt+eahOe7k+aehFxuICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICBpZiAoKChfYSA9IHRleHRzWzBdKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EudGFnTmFtZSkgPT09ICdwJykge1xuICAgICAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgICAgICAgIG5vZGVJbmZvLnRhZ05hbWUgPSBcImRpdlwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdGV4dHM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB7IHJlbmRlckNoaWxkcmVuID0gMSB9ID0gY29tcG9uZW50IHx8IHt9O1xuICAgICAgICAgICAgaWYgKGlzU3RydWN0Tm9kZSB8fCBTdHJpbmcocmVuZGVyQ2hpbGRyZW4pID09PSAnMCcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyDmuLLmn5PlrZDoioLngrlcbiAgICAgICAgICAgIGlmIChTdHJpbmcocmVuZGVyQ2hpbGRyZW4pID09PSAnMicpIHtcbiAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5vZGUuZmluZEFsbChjID0+IGMudHlwZSA9PT0gJ1RFWFQnICYmIGMudmlzaWJsZSkubWFwKChjKSA9PiBjLmNoYXJhY3RlcnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgcmV0dXJuIE5PREUuZ2V0Tm9kZXNJbmZvKG5vZGUuY2hpbGRyZW4pO1xuICAgICAgICB9KSgpO1xuICAgICAgICAvLyDmlbTkuKrpobnnm67pg73lv73nlaXnmoQgY2xhc3NOYW1lXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgY29uc3QgeyBpZ25vcmVDbGFzc05hbWUgPSAnJyB9ID0gQ09ORklHLmdldEN1cnJlbnQoKSB8fCB7fTtcbiAgICAgICAgbm9kZUluZm8uY2xhc3NOYW1lID0gVVRJTFMuY2xlYXJDbGFzc05hbWUobm9kZUluZm8uY2xhc3NOYW1lLCBgJHtub2RlSW5mby5pZ25vcmVDbGFzc05hbWV9ICR7aWdub3JlQ2xhc3NOYW1lfWApO1xuICAgICAgICBkZWxldGUgbm9kZUluZm8uaWdub3JlQ2xhc3NOYW1lO1xuICAgICAgICAvLyDlh4/lsJHltYzlpZdcbiAgICAgICAgaWYgKG5vZGVJbmZvLmNoaWxkcmVuLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgY29uc3QgY2hpbGRyZW5JbmZvID0gbm9kZUluZm8uY2hpbGRyZW5bMF07XG4gICAgICAgICAgICAvLyDlpoLmnpzniLblhYPntKDlkozlrZDlhYPntKAgdGFnTmFtZSDnm7jlkIzlkIjlubYgY2xhc3NOYW1lXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBpZiAoY2hpbGRyZW5JbmZvLnRhZ05hbWUgPT09IG5vZGVJbmZvLnRhZ05hbWUgJiYgIW5vZGVJbmZvLmNvbXBvbmVudE5hbWUgJiYgIWNoaWxkcmVuSW5mby5jb21wb25lbnROYW1lKSB7XG4gICAgICAgICAgICAgICAgY2hpbGRyZW5JbmZvLmNsYXNzTmFtZSA9IFVUSUxTLmNsZWFyQ2xhc3NOYW1lKGAke2NoaWxkcmVuSW5mby5jbGFzc05hbWV9ICR7bm9kZUluZm8uY2xhc3NOYW1lfWApO1xuICAgICAgICAgICAgICAgIHJldHVybiBjaGlsZHJlbkluZm87XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gY29uc29sZS5sb2cobm9kZSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKG5vZGVJbmZvKTtcbiAgICAgICAgcmV0dXJuIG5vZGVJbmZvO1xuICAgIH0sXG4gICAgc29ydDogKG5vZGVzID0gW10pID0+IHtcbiAgICAgICAgcmV0dXJuIFsuLi5ub2Rlc10uc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgY29uc3QgYVkgPSBhLnkgKyBhLmhlaWdodDtcbiAgICAgICAgICAgIGNvbnN0IGJZID0gYi55ICsgYi5oZWlnaHQ7XG4gICAgICAgICAgICBpZiAoYS55ID09PSBiLnkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYS54IC0gYi54O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGFZIC0gYlk7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgZ2V0Tm9kZXNJbmZvOiAobm9kZXMgPSBbXSkgPT4ge1xuICAgICAgICBsZXQgaW5mbyA9IFtdO1xuICAgICAgICAvLyDpnIDopoHmjpLluo/kuIDkuItcbiAgICAgICAgY29uc3Qgc29ydE5vZGVzID0gTk9ERS5zb3J0KG5vZGVzKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2cobm9kZXMsIHNvcnROb2Rlcyk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBzb3J0Tm9kZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IG5vZGVJbmZvID0gTk9ERS5nZXROb2RlSW5mbyhzb3J0Tm9kZXNbaV0pO1xuICAgICAgICAgICAgaWYgKCFub2RlSW5mbykge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG5vZGVJbmZvIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgICAgICBpbmZvID0gWy4uLmluZm8sIC4uLm5vZGVJbmZvXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGluZm8ucHVzaChub2RlSW5mbyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IE5PREU7XG4iLCJjb25zdCBTQUNTUyA9IHtcbiAgICBkYXRhOiB7fSxcbiAgICBpbml0OiAoKSA9PiB7XG4gICAgICAgIFNBQ1NTLmRhdGEgPSB7fTtcbiAgICB9LFxuICAgIG5hbWVNYXA6IHtcbiAgICAgICAgJ2ZzJzogJ2ZvbnQtc2l6ZScsXG4gICAgICAgICdsaCc6ICdsaW5lLWhlaWdodCcsXG4gICAgICAgICdscyc6ICdsZXR0ZXItc3BhY2UnLFxuICAgICAgICAnZmYnOiAnZm9udC1mYW1pbHknLFxuICAgICAgICAncHQnOiAncGFkZGluZy10b3AnLFxuICAgICAgICAncHInOiAncGFkZGluZy1yaWdodCcsXG4gICAgICAgICdwYic6ICdwYWRkaW5nLWJvdHRvbScsXG4gICAgICAgICdwbCc6ICdwYWRkaW5nLWxlZnQnLFxuICAgICAgICAnbXQnOiAnbWFyZ2luLXRvcCcsXG4gICAgICAgICdtcic6ICdtYXJnaW4tcmlnaHQnLFxuICAgICAgICAnbWInOiAnbWFyZ2luLWJvdHRvbScsXG4gICAgICAgICdtbCc6ICdtYXJnaW4tbGVmdCcsXG4gICAgICAgICdoJzogJ2hlaWdodCcsXG4gICAgICAgICd3JzogJ3dpZHRoJyxcbiAgICAgICAgJ2J0bHInOiAnYm9yZGVyLXRvcC1sZWZ0LXJhZGl1cycsXG4gICAgICAgICdidHJyJzogJ2JvcmRlci10b3AtcmlnaHQtcmFkaXVzJyxcbiAgICAgICAgJ2JicnInOiAnYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXMnLFxuICAgICAgICAnYmJscic6ICdib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzJyxcbiAgICAgICAgJ2JyJzogJ2JvcmRlci1yYWRpdXMnXG4gICAgfSxcbiAgICBnZXRDbGFzc1NlbGVjdG9yQnlOYW1lOiAoY2xhc3NOYW1lID0gJycpID0+IHtcbiAgICAgICAgaWYgKGNsYXNzTmFtZS5pbmRleE9mKCcuJykgPiAtMSkge1xuICAgICAgICAgICAgY2xhc3NOYW1lID0gY2xhc3NOYW1lLnJlcGxhY2UoL1xcLi9nLCAnXFxcXC4nKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2xhc3NOYW1lLmluZGV4T2YoJzonKSA+IC0xKSB7XG4gICAgICAgICAgICBjbGFzc05hbWUgPSBjbGFzc05hbWUucmVwbGFjZSgvXFw6L2csICdcXFxcOicpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjbGFzc05hbWUuaW5kZXhPZignJScpID4gLTEpIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IGNsYXNzTmFtZS5yZXBsYWNlKC9cXCUvZywgJ1xcXFwlJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNsYXNzTmFtZTtcbiAgICB9LFxuICAgIGdldFN0cmluZzogKCkgPT4ge1xuICAgICAgICBjb25zdCBkYXRhID0gU0FDU1MuZGF0YTtcbiAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGRhdGEpLnNvcnQoKTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0ga2V5cy5tYXAoKG5hbWUpID0+IGAuJHtTQUNTUy5nZXRDbGFzc1NlbGVjdG9yQnlOYW1lKG5hbWUpfXske2RhdGFbbmFtZV19O31gKS5qb2luKCdcXG4nKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9LFxuICAgIGFkZDogKG5hbWUgPSAnJywgdmFsdWUsIHVuaXQgPSAncHgnKSA9PiB7XG4gICAgICAgIGlmICghbmFtZSB8fCAhdmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwcm9wTmFtZSA9IFNBQ1NTLm5hbWVNYXBbbmFtZV07XG4gICAgICAgIGlmICghcHJvcE5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuICAgICAgICAvLyDlj6rkv53nlZnkuKTkvY3lsI/mlbBcbiAgICAgICAgY29uc3QgdXNlVmFsdWUgPSBOdW1iZXIodmFsdWUpID8gcGFyc2VGbG9hdChOdW1iZXIodmFsdWUpLnRvRml4ZWQoMikpIDogdmFsdWU7XG4gICAgICAgIC8vIOWmguaenOaYryBweCDkuI3pnIDopoHmuLLmn5NcbiAgICAgICAgY29uc3QgY2xhc3NVbml0ID0gdW5pdCA9PT0gJ3B4JyA/ICcnIDogdW5pdDtcbiAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gYCR7bmFtZX0ke3VzZVZhbHVlfSR7Y2xhc3NVbml0fWA7XG4gICAgICAgIFNBQ1NTLmRhdGFbY2xhc3NOYW1lXSA9IGAke3Byb3BOYW1lfToke3VzZVZhbHVlfSR7dW5pdH1gO1xuICAgICAgICByZXR1cm4gY2xhc3NOYW1lO1xuICAgIH0sXG4gICAgYWRkRm9udEZhbWlseTogKHZhbHVlKSA9PiB7XG4gICAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB2YWx1ZU9rID0gdmFsdWUucmVwbGFjZSgvW1xcV10vZywgJycpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IGBmZl8ke3ZhbHVlT2t9YDtcbiAgICAgICAgU0FDU1MuZGF0YVtjbGFzc05hbWVdID0gYGZvbnQtZmFtaWx5OlwiJHt2YWx1ZX1cImA7XG4gICAgICAgIHJldHVybiBjbGFzc05hbWU7XG4gICAgfSxcbiAgICBhZGRDb2xvcjogKHJnYmEgPSBbXSkgPT4ge1xuICAgICAgICBpZiAoIXJnYmEgJiYgcmdiYS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBgY18ke3JnYmEuam9pbignJyl9YDtcbiAgICAgICAgU0FDU1MuZGF0YVtjbGFzc05hbWVdID0gYGNvbG9yOnJnYmEoJHtyZ2JhLmpvaW4oJywnKX0pYDtcbiAgICAgICAgcmV0dXJuIGNsYXNzTmFtZTtcbiAgICB9LFxuICAgIGFkZEJnQ29sb3I6IChyZ2JhID0gW10pID0+IHtcbiAgICAgICAgaWYgKCFyZ2JhICYmIHJnYmEubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gYGJjXyR7cmdiYS5qb2luKCcnKX1gO1xuICAgICAgICBTQUNTUy5kYXRhW2NsYXNzTmFtZV0gPSBgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKCR7cmdiYS5qb2luKCcsJyl9KWA7XG4gICAgICAgIHJldHVybiBjbGFzc05hbWU7XG4gICAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IFNBQ1NTO1xuIiwiY29uc3QgVVRJTFMgPSB7XG4gICAgaXNCbG9jazogKHRhZ05hbWUgPSAnJykgPT4ge1xuICAgICAgICBjb25zdCBibG9ja1RhZyA9IFsnZGl2JywgJ2gxJywgJ2gyJywgJ2gzJywgJ2g0JywgJ2g1JywgJ2g2JywgJ3AnXTtcbiAgICAgICAgcmV0dXJuIGJsb2NrVGFnLmluZGV4T2YodGFnTmFtZSkgPiAtMTtcbiAgICB9LFxuICAgIGlzU2VsZlRhZzogKHRhZ05hbWUgPSAnJykgPT4ge1xuICAgICAgICBjb25zdCBzZWxmVGFnID0gWydpbWcnLCAnbGluaycsICdtZXRhJywgJ2JyJywgJ2JyJywgJ2hyJywgJ2lucHV0JywgJ2NvbCcsICdmcmFtZScsICdhcmVhJywgJ3BhcmFtJywgJ29iamVjdCcsICdlbWJlZCcsICdrZXlnZW4nLCAnc291cmNlJ107XG4gICAgICAgIHJldHVybiBzZWxmVGFnLmluZGV4T2YodGFnTmFtZSkgPiAtMTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIOWOu+mHjeWSjOWOu+epulxuICAgICAqIEBwYXJhbSBhcnJTdHJcbiAgICAgKi9cbiAgICBjbGVhckNsYXNzTmFtZTogKGNsYXNzTmFtZSA9ICcnLCBpZ25vcmVDbGFzc05hbWUgPSAnJykgPT4ge1xuICAgICAgICBpZiAoIWNsYXNzTmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZXMgPSBjbGFzc05hbWUuc3BsaXQoJyAnKTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgICAgIGNsYXNzTmFtZXMuZm9yRWFjaCgoaXRlbSA9ICcnKSA9PiB7XG4gICAgICAgICAgICBpZiAoaXRlbSAmJiBpdGVtICE9PSAnbnVsbCcgJiYgcmVzdWx0LmluZGV4T2YoaXRlbSkgPT09IC0xICYmIGlnbm9yZUNsYXNzTmFtZS5pbmRleE9mKGl0ZW0pID09PSAtMSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGl0ZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdC5qb2luKCcgJyk7XG4gICAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IFVUSUxTO1xuIiwiaW1wb3J0IEhUTUwgZnJvbSBcIi4vSFRNTFwiO1xuaW1wb3J0IEpTWCBmcm9tIFwiLi9KU1hcIjtcbmNvbnN0IERPTSA9IHtcbiAgICByZW5kZXI6IChvYmogPSBbXSwgaXNKU1gpID0+IHtcbiAgICAgICAgaWYgKGlzSlNYKSB7XG4gICAgICAgICAgICByZXR1cm4gSlNYLmdldERvbUJ5QXJyYXkob2JqKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gSFRNTC5nZXREb21CeUFycmF5KG9iaik7XG4gICAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IERPTTtcbiIsImltcG9ydCBVVElMUyBmcm9tIFwiLi4vVVRJTFNcIjtcbi8vIGxlZ2FsIOWQiOazleWxnuaAp1xuLy8gY29uc3QgbGVnYWxQcm9wID0gWydjbGFzcycsICd0eXBlJywgJ25hbWUnLCAncm9sZScsICdkaXNhYmxlZCcsICdpZCcsICd0aXRsZScsICdsYW5nJywgJ2RpcicsICd0YWJpbmRleCcsICdhY2Nlc3NrZXknLCAnc3JjJywgJ2hyZWYnLCAnc3R5bGUnLCAnYXJpYS1oaWRkZW4nLCAndGFyZ2V0JywgJ3JlbCddO1xuY29uc3QgSFRNTCA9IHtcbiAgICBnZXRQcm9wc1N0cmluZzogKHsgY2xhc3NOYW1lID0gJycsIHByb3BzID0ge30gfSA9IHt9KSA9PiB7XG4gICAgICAgIGNvbnN0IGFyclByb3BzID0gW107XG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZXMgPSBjbGFzc05hbWUgPyBjbGFzc05hbWUuc3BsaXQoJyAnKSA6IFtdO1xuICAgICAgICBpZiAoY2xhc3NOYW1lcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGFyclByb3BzLnB1c2goYGNsYXNzPVwiJHtjbGFzc05hbWVzLmpvaW4oJyAnKX1cImApO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHByb3BzKSkge1xuICAgICAgICAgICAgYXJyUHJvcHMucHVzaChgJHtrZXl9PVwiJHt2YWx1ZX1cImApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhcnJQcm9wcy5qb2luKCcgJyk7XG4gICAgfSxcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgZ2V0SXRlbURvbTogKGl0ZW0pID0+IHtcbiAgICAgICAgaWYgKCFpdGVtKSB7XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyBjaGlsZHJlbiA9IFtdLCBodG1sUHJvcHMgPSB7fSwgY2xhc3NOYW1lID0gJycgfSA9IGl0ZW07XG4gICAgICAgIGNvbnN0IHRhZ05hbWUgPSBpdGVtLnRhZ05hbWUgfHwgJ2Rpdic7XG4gICAgICAgIGNvbnN0IHByb3BzU3RyaW5nID0gSFRNTC5nZXRQcm9wc1N0cmluZyh7XG4gICAgICAgICAgICBwcm9wczogaHRtbFByb3BzLFxuICAgICAgICAgICAgY2xhc3NOYW1lXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCB0YWdTdGFydCA9IGAke3RhZ05hbWV9JHtwcm9wc1N0cmluZyA/IGAgJHtwcm9wc1N0cmluZ31gIDogJyd9YDtcbiAgICAgICAgaWYgKFVUSUxTLmlzU2VsZlRhZyh0YWdOYW1lKSkge1xuICAgICAgICAgICAgcmV0dXJuIGA8JHt0YWdTdGFydH0vPmA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFjaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBgPCR7dGFnU3RhcnR9PjwvJHt0YWdOYW1lfT5gO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBgPCR7dGFnU3RhcnR9PiR7SFRNTC5nZXREb21CeUFycmF5KGNoaWxkcmVuKX08LyR7dGFnTmFtZX0+YDtcbiAgICB9LFxuICAgIGdldERvbUJ5QXJyYXk6IChvYmogPSBbXSkgPT4ge1xuICAgICAgICByZXR1cm4gb2JqLm1hcCgoaXRlbSkgPT4gSFRNTC5nZXRJdGVtRG9tKGl0ZW0pKS5qb2luKCcnKTtcbiAgICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgSFRNTDtcbiIsImltcG9ydCBVVElMUyBmcm9tIFwiLi4vVVRJTFNcIjtcbmNvbnN0IEpTWCA9IHtcbiAgICBnZXRQcm9wc1N0cmluZzogKHsgY2xhc3NOYW1lID0gJycsIHByb3BzID0ge30gfSA9IHt9KSA9PiB7XG4gICAgICAgIGNvbnN0IGFyclByb3BzID0gW107XG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZXMgPSBjbGFzc05hbWUgPyBjbGFzc05hbWUuc3BsaXQoJyAnKSA6IFtdO1xuICAgICAgICBpZiAoY2xhc3NOYW1lcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGFyclByb3BzLnB1c2goYGNsYXNzTmFtZT1cIiR7Y2xhc3NOYW1lcy5qb2luKCcgJyl9XCJgKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhwcm9wcykpIHtcbiAgICAgICAgICAgIGFyclByb3BzLnB1c2goYCR7a2V5fT1cIiR7dmFsdWV9XCJgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXJyUHJvcHMuam9pbignICcpO1xuICAgIH0sXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGdldEl0ZW1Eb206IChpdGVtKSA9PiB7XG4gICAgICAgIGlmICghaXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICB9XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHtpdGVtfSk7XG4gICAgICAgIGNvbnN0IHsgY2hpbGRyZW4gPSBbXSwgY29tcG9uZW50UHJvcHMgPSB7fSwgY2xhc3NOYW1lID0gJycgfSA9IGl0ZW07XG4gICAgICAgIGNvbnN0IHRhZ05hbWUgPSBpdGVtLmNvbXBvbmVudE5hbWUgfHwgaXRlbS50YWdOYW1lIHx8ICdkaXYnO1xuICAgICAgICBjb25zdCBzdHJQcm9wcyA9IEpTWC5nZXRQcm9wc1N0cmluZyh7XG4gICAgICAgICAgICBwcm9wczogY29tcG9uZW50UHJvcHMsXG4gICAgICAgICAgICBjbGFzc05hbWVcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IHRhZ1N0YXJ0ID0gYCR7dGFnTmFtZX0ke3N0clByb3BzID8gYCAke3N0clByb3BzfWAgOiAnJ31gO1xuICAgICAgICBpZiAoVVRJTFMuaXNTZWxmVGFnKHRhZ05hbWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gYDwke3RhZ1N0YXJ0fS8+YDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGl0ZW0uY29tcG9uZW50TmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBgPCR7dGFnU3RhcnR9Lz5gO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGA8JHt0YWdTdGFydH0+PC8ke3RhZ05hbWV9PmA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGA8JHt0YWdTdGFydH0+JHtKU1guZ2V0RG9tQnlBcnJheShjaGlsZHJlbil9PC8ke3RhZ05hbWV9PmA7XG4gICAgfSxcbiAgICBnZXREb21CeUFycmF5OiAob2JqID0gW10pID0+IHtcbiAgICAgICAgcmV0dXJuIG9iai5tYXAoKGl0ZW0pID0+IEpTWC5nZXRJdGVtRG9tKGl0ZW0pKS5qb2luKCcnKTtcbiAgICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgSlNYO1xuIiwiY29uc3QgQ09MT1IgPSB7XG4gICAgZ2V0UmdiYUJ5RmlsbDogKHsgY29sb3IsIG9wYWNpdHksIHZpc2libGUgfSkgPT4ge1xuICAgICAgICAvLyDlpoLmnpzkuI3lj6/op4FcbiAgICAgICAgaWYgKCF2aXNpYmxlIHx8IG9wYWNpdHkgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHIgPSBwYXJzZUludChTdHJpbmcoY29sb3IuciAqIDI1NSkpO1xuICAgICAgICBjb25zdCBnID0gcGFyc2VJbnQoU3RyaW5nKGNvbG9yLmcgKiAyNTUpKTtcbiAgICAgICAgY29uc3QgYiA9IHBhcnNlSW50KFN0cmluZyhjb2xvci5iICogMjU1KSk7XG4gICAgICAgIGNvbnN0IGEgPSBTdHJpbmcob3BhY2l0eSkuaW5kZXhPZignLicpID4gLTEgPyBvcGFjaXR5LnRvRml4ZWQoMSkgOiBvcGFjaXR5O1xuICAgICAgICByZXR1cm4gW3IsIGcsIGIsIGFdO1xuICAgIH0sXG59O1xuZXhwb3J0IGRlZmF1bHQgQ09MT1I7XG4iLCJpbXBvcnQgQ09ORklHIGZyb20gXCIuLi9DT05GSUdcIjtcbmNvbnN0IEVGRkVDVCA9IHtcbiAgICBnZXRJbmZvOiAobm9kZSkgPT4ge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHJldHVybiBDT05GSUcuZ2V0SW5mb0J5SWQobm9kZS5lZmZlY3RTdHlsZUlkKTtcbiAgICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgRUZGRUNUO1xuIiwidmFyIF9fcmVzdCA9ICh0aGlzICYmIHRoaXMuX19yZXN0KSB8fCBmdW5jdGlvbiAocywgZSkge1xuICAgIHZhciB0ID0ge307XG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXG4gICAgICAgIHRbcF0gPSBzW3BdO1xuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xuICAgICAgICB9XG4gICAgcmV0dXJuIHQ7XG59O1xuaW1wb3J0IENPTE9SIGZyb20gXCIuL0NPTE9SXCI7XG5pbXBvcnQgQ09ORklHIGZyb20gXCIuLi9DT05GSUdcIjtcbmltcG9ydCBTQUNTUyBmcm9tIFwiLi4vU0FDU1NcIjtcbmNvbnN0IEZJTEwgPSB7XG4gICAgZ2V0RmlsbDogKG5vZGUpID0+IHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBjb25zdCBbZmlyc3RGaWxsXSA9ICh0eXBlb2Ygbm9kZS5nZXRSYW5nZUZpbGxzID09PSAnZnVuY3Rpb24nID8gbm9kZS5nZXRSYW5nZUZpbGxzKDAsIDEpIDogbm9kZS5maWxscykgfHwgW107XG4gICAgICAgIC8vIOayoeacieiuvue9ruS7u+S9leminOiJsiwg55uu5YmN5LiN5pSv5oyB5riQ5Y+YXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgaWYgKCFmaXJzdEZpbGwgfHwgZmlyc3RGaWxsLnR5cGUgIT09ICdTT0xJRCcpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvbG9yID0gQ09MT1IuZ2V0UmdiYUJ5RmlsbChmaXJzdEZpbGwpO1xuICAgICAgICBpZiAoIWNvbG9yKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBub2RlLnR5cGUgPT09ICdURVhUJyA/IFNBQ1NTLmFkZENvbG9yKGNvbG9yKSA6IFNBQ1NTLmFkZEJnQ29sb3IoY29sb3IpO1xuICAgICAgICAvLyDmlofmnKzmmK/nlKjpopzoibLvvIzlhbblroPnkIbop6PkuLrog4zmma/oibJcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZVxuICAgICAgICB9O1xuICAgIH0sXG4gICAgLy8g6I635Y+W5aGr5YWF5L+h5oGvXG4gICAgZ2V0SW5mbzogKG5vZGUpID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2cobm9kZSk7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgY29uc3QgaWQgPSB0eXBlb2Ygbm9kZS5nZXRSYW5nZUZpbGxTdHlsZUlkID09PSAnZnVuY3Rpb24nID8gbm9kZS5nZXRSYW5nZUZpbGxTdHlsZUlkKDAsIDEpIDogbm9kZS5maWxsU3R5bGVJZDtcbiAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgIGNvbnN0IF9hID0gQ09ORklHLmdldEluZm9CeUlkKGlkKSB8fCB7fSwgeyB0ZXh0Q2xhc3NOYW1lID0gJycsIGNsYXNzTmFtZSA9ICcnIH0gPSBfYSwgcmVzdCA9IF9fcmVzdChfYSwgW1widGV4dENsYXNzTmFtZVwiLCBcImNsYXNzTmFtZVwiXSk7XG4gICAgICAgIGNvbnN0IHJlbmRlckNsYXNzTmFtZSA9IG5vZGUudHlwZSA9PT0gJ1RFWFQnID8gdGV4dENsYXNzTmFtZSA6IGNsYXNzTmFtZTtcbiAgICAgICAgaWYgKCFyZW5kZXJDbGFzc05hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiBGSUxMLmdldEZpbGwobm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IHJlbmRlckNsYXNzTmFtZSB9LCByZXN0KTtcbiAgICB9LFxufTtcbmV4cG9ydCBkZWZhdWx0IEZJTEw7XG4iLCJpbXBvcnQgU0FDU1MgZnJvbSBcIi4uL1NBQ1NTXCI7XG4vLyBpbXBvcnQgQ09ORklHIGZyb20gXCIuL0NPTkZJR1wiO1xuY29uc3QgRkxFWCA9IHtcbiAgICBpc0ZsZXg6IChub2RlKSA9PiB7XG4gICAgICAgIC8vIOi/meWHoOS4quWFg+e0oOmDveS4jeWBmiBGbGV4IOWIpOaWreWkhOeQhlxuICAgICAgICBpZiAoWydURVhUJ10uaW5kZXhPZihub2RlLnR5cGUpID4gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKG5vZGUgPT09IG51bGwgfHwgbm9kZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogbm9kZS5sYXlvdXRNb2RlKSAhPT0gXCJOT05FXCI7XG4gICAgfSxcbiAgICBnZXRUaGlzSW5mbzogKG5vZGUpID0+IHtcbiAgICAgICAgaWYgKCFGTEVYLmlzRmxleChub2RlKSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyBsYXlvdXRNb2RlLCBwcmltYXJ5QXhpc0FsaWduSXRlbXMsIGNvdW50ZXJBeGlzQWxpZ25JdGVtcywgY2hpbGRyZW4gPSBbXSB9ID0gbm9kZTtcbiAgICAgICAgLy8g5rKh5pyJ5a2Q5YWD57SgIGZsZXgg5biD5bGA5rKh5pyJ5oSP5LmJXG4gICAgICAgIGlmICghY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBbXTtcbiAgICAgICAgLy8g5aaC5p6c5piv57q15ZCR55qEIOi/memHjOWPr+S7peS4jeS9v+eUqCBmbGV4IOW4g+WxgFxuICAgICAgICBpZiAobGF5b3V0TW9kZSA9PT0gJ1ZFUlRJQ0FMJykge1xuICAgICAgICAgICAgLy8g5b2T5piv57q15ZCR5biD5bGA5b2T5pe25YCZXG4gICAgICAgICAgICBjbGFzc05hbWUucHVzaCh7XG4gICAgICAgICAgICAgICAgLy8gXCJNSU5cIjogXCJcIixcbiAgICAgICAgICAgICAgICBcIkNFTlRFUlwiOiBcInRhY1wiLFxuICAgICAgICAgICAgICAgIFwiTUFYXCI6IFwidGFyXCIsXG4gICAgICAgICAgICAgICAgLy8gXCJTUEFDRV9CRVRXRUVOXCI6IFwiamNzYlwiLFxuICAgICAgICAgICAgfVtjb3VudGVyQXhpc0FsaWduSXRlbXNdKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZS5wdXNoKHtcbiAgICAgICAgICAgICAgICAvLyBcIk1JTlwiOiBcIlwiLFxuICAgICAgICAgICAgICAgIFwiQ0VOVEVSXCI6IFwiamNjXCIsXG4gICAgICAgICAgICAgICAgXCJNQVhcIjogXCJqY2ZlXCIsXG4gICAgICAgICAgICAgICAgXCJTUEFDRV9CRVRXRUVOXCI6IFwiamNzYlwiLFxuICAgICAgICAgICAgfVtwcmltYXJ5QXhpc0FsaWduSXRlbXNdIHx8IFwiXCIpO1xuICAgICAgICAgICAgY2xhc3NOYW1lLnB1c2goe1xuICAgICAgICAgICAgICAgIC8vXCJNSU5cIjogXCJcIixcbiAgICAgICAgICAgICAgICBcIkNFTlRFUlwiOiBcImFpY1wiLFxuICAgICAgICAgICAgICAgIFwiTUFYXCI6IFwiYWlmZVwiLFxuICAgICAgICAgICAgfVtjb3VudGVyQXhpc0FsaWduSXRlbXNdIHx8IFwiXCIpO1xuICAgICAgICAgICAgY2xhc3NOYW1lLnB1c2goJ2RmJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLmpvaW4oJyAnKVxuICAgICAgICB9O1xuICAgIH0sXG4gICAgZ2V0SW5mb0Zyb21QYXJlbnQ6IChub2RlKSA9PiB7XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IG5vZGUucGFyZW50O1xuICAgICAgICBpZiAoIXBhcmVudCB8fCAhRkxFWC5pc0ZsZXgocGFyZW50KSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBjb25zdCB7IGxheW91dE1vZGUsIHByaW1hcnlBeGlzQWxpZ25JdGVtcywgaXRlbVNwYWNpbmcgfSA9IHBhcmVudDtcbiAgICAgICAgLy8g5Lik56uv5Lik56uv5a+56b2Q6KGo56S65LiN6ZyA6KaB6L+Z5LqbXG4gICAgICAgIGlmIChwcmltYXJ5QXhpc0FsaWduSXRlbXMgPT09IFwiU1BBQ0VfQkVUV0VFTlwiKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBbXTtcbiAgICAgICAgY29uc3QgaWdub3JlQ2xhc3NOYW1lID0gW107XG4gICAgICAgIGNvbnN0IHsgaWQgPSAnJyB9ID0gcGFyZW50LmNoaWxkcmVuLmZpbHRlcihjID0+IGMudmlzaWJsZSkucG9wKCkgfHwge307XG4gICAgICAgIGNvbnN0IGlzTGFzdENoaWxkcmVuID0gaWQgPT09IG5vZGUuaWQ7XG4gICAgICAgIC8vIOeItuWFg+e0oOaYr+e6teWQkeeahGZsZXgg5biD5bGA77yM5Zug5Li65b+955Wl5o6J5LqGIGRmXG4gICAgICAgIC8vIOi/memHjOiuqeiHquW3seaciSBkYiDlrp7njrDnurXlkJHluIPlsYBcbiAgICAgICAgaWYgKGxheW91dE1vZGUgPT09ICdWRVJUSUNBTCcpIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZS5wdXNoKCdkYicpO1xuICAgICAgICB9XG4gICAgICAgIC8vIOS4uuWtkOWFg+e0oOa3u+WKoOmXtOi3nVxuICAgICAgICBpZiAoaXRlbVNwYWNpbmcgPiAwICYmICFpc0xhc3RDaGlsZHJlbikge1xuICAgICAgICAgICAgY29uc3QgZ3V0dGVyTWFwID0ge1xuICAgICAgICAgICAgICAgIFwiVkVSVElDQUxcIjogXCJtYlwiLFxuICAgICAgICAgICAgICAgIFwiSE9SSVpPTlRBTFwiOiBcIm1yXCJcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjbGFzc05hbWUucHVzaChTQUNTUy5hZGQoZ3V0dGVyTWFwW2xheW91dE1vZGVdLCBpdGVtU3BhY2luZykpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChub2RlLmxheW91dEdyb3cgPT09IDEpIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZS5wdXNoKCdmMScpO1xuICAgICAgICAgICAgaWdub3JlQ2xhc3NOYW1lLnB1c2goYHcke25vZGUud2lkdGh9YCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLmpvaW4oJyAnKSxcbiAgICAgICAgICAgIGlnbm9yZUNsYXNzTmFtZTogaWdub3JlQ2xhc3NOYW1lLmpvaW4oJyAnKVxuICAgICAgICB9O1xuICAgIH0sXG4gICAgZ2V0SW5mbzogKG5vZGUpID0+IHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBjb25zdCB7IGNsYXNzTmFtZTogYzEgPSAnJywgaWdub3JlQ2xhc3NOYW1lOiBpYzEgPSAnJyB9ID0gRkxFWC5nZXRUaGlzSW5mbyhub2RlKSB8fCB7fTtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBjb25zdCB7IGNsYXNzTmFtZTogYzIgPSAnJywgaWdub3JlQ2xhc3NOYW1lOiBpYzIgPSAnJyB9ID0gRkxFWC5nZXRJbmZvRnJvbVBhcmVudChub2RlKSB8fCB7fTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogYCR7YzF9ICR7YzJ9YCxcbiAgICAgICAgICAgIGlnbm9yZUNsYXNzTmFtZTogYCR7aWMxfSAke2ljMn1gXG4gICAgICAgIH07XG4gICAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IEZMRVg7XG4iLCJpbXBvcnQgQ09ORklHIGZyb20gXCIuLi9DT05GSUdcIjtcbmNvbnN0IEdSSUQgPSB7XG4gICAgZ2V0SW5mbzogKG5vZGUpID0+IHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICByZXR1cm4gQ09ORklHLmdldEluZm9CeUlkKG5vZGUuZ3JpZFN0eWxlSWQpO1xuICAgIH1cbn07XG5leHBvcnQgZGVmYXVsdCBHUklEO1xuIiwiaW1wb3J0IFNBQ1NTIGZyb20gXCIuLi9TQUNTU1wiO1xuY29uc3QgT1RIRVJTID0ge1xuICAgIGdlckJvcmRlclJhZGl1c0NsYXNzTmFtZTogKG5vZGUpID0+IHtcbiAgICAgICAgY29uc3QgdGwgPSBub2RlLnRvcExlZnRSYWRpdXMgfHwgMDtcbiAgICAgICAgY29uc3QgdHIgPSBub2RlLnRvcFJpZ2h0UmFkaXVzIHx8IDA7XG4gICAgICAgIGNvbnN0IGJyID0gbm9kZS5ib3R0b21SaWdodFJhZGl1cyB8fCAwO1xuICAgICAgICBjb25zdCBibCA9IG5vZGUuYm90dG9tTGVmdFJhZGl1cyB8fCAwO1xuICAgICAgICAvLyDlhajpg6jkuLogMFxuICAgICAgICBpZiAoKHRsICsgdHIgKyBiciArIGJsKSA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9XG4gICAgICAgIC8vIOWmguaenOWbm+S4quWAvOmDveebuOetiVxuICAgICAgICBpZiAoKHRsID09PSB0cikgJiYgKHRsID09PSBicikgJiYgKHRsID09PSBibCkpIHtcbiAgICAgICAgICAgIHJldHVybiBbU0FDU1MuYWRkKCdicicsIHRsKV07XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gW107XG4gICAgICAgIHRsICYmIGNsYXNzTmFtZS5wdXNoKFNBQ1NTLmFkZCgnYnRscicsIHRsKSk7XG4gICAgICAgIHRyICYmIGNsYXNzTmFtZS5wdXNoKFNBQ1NTLmFkZCgnYnRycicsIHRyKSk7XG4gICAgICAgIGJyICYmIGNsYXNzTmFtZS5wdXNoKFNBQ1NTLmFkZCgnYmJycicsIGJyKSk7XG4gICAgICAgIGJsICYmIGNsYXNzTmFtZS5wdXNoKFNBQ1NTLmFkZCgnYmJscicsIGJsKSk7XG4gICAgICAgIHJldHVybiBjbGFzc05hbWU7XG4gICAgfSxcbiAgICBnZXRQYWRkaW5nQ2xhc3NOYW1lOiAobm9kZSkgPT4ge1xuICAgICAgICAvLyDkvJrlv73nlaXmjokgMeWDj+e0oOeahCBwYWRkaW5nXG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICBub2RlLnBhZGRpbmdUb3AgPiAxID8gU0FDU1MuYWRkKCdwdCcsIG5vZGUucGFkZGluZ1RvcCkgOiAnJyxcbiAgICAgICAgICAgIG5vZGUucGFkZGluZ1JpZ2h0ID4gMSA/IFNBQ1NTLmFkZCgncHInLCBub2RlLnBhZGRpbmdSaWdodCkgOiAnJyxcbiAgICAgICAgICAgIG5vZGUucGFkZGluZ0JvdHRvbSA+IDEgPyBTQUNTUy5hZGQoJ3BiJywgbm9kZS5wYWRkaW5nQm90dG9tKSA6ICcnLFxuICAgICAgICAgICAgbm9kZS5wYWRkaW5nTGVmdCA+IDEgPyBTQUNTUy5hZGQoJ3BsJywgbm9kZS5wYWRkaW5nTGVmdCkgOiAnJyxcbiAgICAgICAgXTtcbiAgICB9LFxuICAgIGdldEluZm86IChub2RlKSA9PiB7XG4gICAgICAgIGNvbnN0IHBhZGRpbmcgPSBPVEhFUlMuZ2V0UGFkZGluZ0NsYXNzTmFtZShub2RlKTtcbiAgICAgICAgY29uc3QgcmFkaXVzID0gT1RIRVJTLmdlckJvcmRlclJhZGl1c0NsYXNzTmFtZShub2RlKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogWy4uLnBhZGRpbmcsIC4uLnJhZGl1c10uam9pbignICcpXG4gICAgICAgIH07XG4gICAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IE9USEVSUztcbiIsImltcG9ydCBDT05GSUcgZnJvbSBcIi4uL0NPTkZJR1wiO1xuY29uc3QgU1RST0tFID0ge1xuICAgIC8vIOaWh+acrOe7hOS7tlxuICAgIGdldEluZm86IChub2RlKSA9PiB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgcmV0dXJuIENPTkZJRy5nZXRJbmZvQnlJZChub2RlLnN0cm9rZVN0eWxlSWQpO1xuICAgIH0sXG59O1xuZXhwb3J0IGRlZmF1bHQgU1RST0tFO1xuIiwiaW1wb3J0IENPTkZJRyBmcm9tIFwiLi4vQ09ORklHXCI7XG5pbXBvcnQgU0FDU1MgZnJvbSBcIi4uL1NBQ1NTXCI7XG4vLyBAdHMtaWdub3JlXG5jb25zdCBURVhUID0ge1xuICAgIHVuaXRNYXA6IHtcbiAgICAgICAgJ1BFUkNFTlQnOiAnJSdcbiAgICAgICAgLy8gXCJQSVhFTFNcIjpcIlwiXG4gICAgfSxcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgZ2V0Rm9udE5hbWVDbGFzc0J5U3R5bGU6IChzdHlsZSkgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIHN0eWxlICE9PSAnc3RyaW5nJyB8fCAhc3R5bGUpIHtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBmb250TWFwID0ge1xuICAgICAgICAgICAgXCJVTFRSQUxJR0hUXCI6IFwiZncxMDBcIixcbiAgICAgICAgICAgIFwiVEhJTlwiOiAnZncyMDAnLFxuICAgICAgICAgICAgXCJMSUdIVFwiOiBcImZ3MzAwXCIsXG4gICAgICAgICAgICBcIlJFR1VMQVJcIjogXCJcIixcbiAgICAgICAgICAgIFwiTUVESVVNXCI6IFwiZnc1MDBcIixcbiAgICAgICAgICAgIFwiU0VNSUJPTERcIjogXCJmdzYwMFwiLFxuICAgICAgICAgICAgXCJCT0xEXCI6IFwiZnc3MDBcIixcbiAgICAgICAgICAgIFwiQkxBQ0tcIjogXCJmdzkwMFwiLFxuICAgICAgICAgICAgXCJJVEFMSUNcIjogXCJmc2lcIixcbiAgICAgICAgICAgIFwiT0JMSVFVRVwiOiBcImZzaVwiXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IHN0eWxlLnNwbGl0KCcgJykubWFwKChpdGVtKSA9PiBmb250TWFwW2l0ZW0udG9VcHBlckNhc2UoKV0gfHwgJycpO1xuICAgICAgICByZXR1cm4gY2xhc3NOYW1lLmZpbHRlcihpdGVtID0+IGl0ZW0pLmpvaW4oJyAnKTtcbiAgICB9LFxuICAgIGdldFByb3BCeU5vZGU6IChub2RlLCBuYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IG5hbWVNYXAgPSB7XG4gICAgICAgICAgICAndGV4dENhc2UnOiAnZ2V0UmFuZ2VUZXh0Q2FzZScsXG4gICAgICAgICAgICAnbGluZUhlaWdodCc6ICdnZXRSYW5nZUxpbmVIZWlnaHQnLFxuICAgICAgICAgICAgJ2xldHRlclNwYWNpbmcnOiAnZ2V0UmFuZ2VMZXR0ZXJTcGFjaW5nJyxcbiAgICAgICAgICAgICdmb250U2l6ZSc6ICdnZXRSYW5nZUZvbnRTaXplJyxcbiAgICAgICAgICAgICd0ZXh0RGVjb3JhdGlvbic6ICdnZXRSYW5nZVRleHREZWNvcmF0aW9uJyxcbiAgICAgICAgICAgICdmb250TmFtZSc6ICdnZXRSYW5nZUZvbnROYW1lJyxcbiAgICAgICAgICAgICdmaWxscyc6ICdnZXRSYW5nZUZpbGxzJyxcbiAgICAgICAgICAgICd0ZXh0U3R5bGVJZCc6ICdnZXRSYW5nZVRleHRTdHlsZUlkJ1xuICAgICAgICB9O1xuICAgICAgICBpZiAodHlwZW9mIG5vZGVbbmFtZV0gPT09ICdzeW1ib2wnICYmIG5hbWVNYXBbbmFtZV0gJiYgdHlwZW9mIG5vZGVbbmFtZU1hcFtuYW1lXV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHJldHVybiBub2RlW25hbWVNYXBbbmFtZV1dKDAsIDEpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBub2RlW25hbWVdO1xuICAgIH0sXG4gICAgZ2V0QUNTU1NJbmZvOiAobm9kZSkgPT4ge1xuICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBbXTtcbiAgICAgICAgLy8g5paH5a2X5aSn5bCPXG4gICAgICAgIGNvbnN0IGZvbnRTaXplID0gVEVYVC5nZXRQcm9wQnlOb2RlKG5vZGUsICdmb250U2l6ZScpO1xuICAgICAgICBpZiAoZm9udFNpemUgPiAxKSB7XG4gICAgICAgICAgICBjbGFzc05hbWUucHVzaChTQUNTUy5hZGQoJ2ZzJywgZm9udFNpemUpKTtcbiAgICAgICAgfVxuICAgICAgICAvLyDooYzpq5hcbiAgICAgICAgY29uc3QgbGluZUhlaWdodCA9IFRFWFQuZ2V0UHJvcEJ5Tm9kZShub2RlLCAnbGluZUhlaWdodCcpO1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGlmIChsaW5lSGVpZ2h0ID09PSBudWxsIHx8IGxpbmVIZWlnaHQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGxpbmVIZWlnaHQudmFsdWUpIHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIGNvbnN0IHsgdmFsdWUsIHVuaXQgfSA9IGxpbmVIZWlnaHQ7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBjbGFzc05hbWUucHVzaChTQUNTUy5hZGQoJ2xoJywgdmFsdWUsIFRFWFQudW5pdE1hcFt1bml0XSkpO1xuICAgICAgICB9XG4gICAgICAgIC8vIOWtl+mXtOi3nVxuICAgICAgICBjb25zdCBsZXR0ZXJTcGFjaW5nID0gVEVYVC5nZXRQcm9wQnlOb2RlKG5vZGUsICdsZXR0ZXJTcGFjaW5nJyk7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgaWYgKGxldHRlclNwYWNpbmcgPT09IG51bGwgfHwgbGV0dGVyU3BhY2luZyA9PT0gdm9pZCAwID8gdm9pZCAwIDogbGV0dGVyU3BhY2luZy52YWx1ZSkge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgY29uc3QgeyB2YWx1ZSwgdW5pdCB9ID0gbGV0dGVyU3BhY2luZztcbiAgICAgICAgICAgIGNsYXNzTmFtZS5wdXNoKFNBQ1NTLmFkZCgnbHMnLCB2YWx1ZSwgVEVYVC51bml0TWFwW3VuaXRdKSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZm9udE5hbWUgPSBURVhULmdldFByb3BCeU5vZGUobm9kZSwgJ2ZvbnROYW1lJyk7XG4gICAgICAgIC8vIGZvbnQtd2VpZ2h0IGZvbnQtc3R5bGVcbiAgICAgICAgY29uc3QgZm5DbGFzcyA9IFRFWFQuZ2V0Rm9udE5hbWVDbGFzc0J5U3R5bGUoZm9udE5hbWUuc3R5bGUpO1xuICAgICAgICBmbkNsYXNzICYmIGNsYXNzTmFtZS5wdXNoKGZuQ2xhc3MpO1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGlmIChmb250TmFtZSA9PT0gbnVsbCB8fCBmb250TmFtZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogZm9udE5hbWUuZmFtaWx5KSB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBjbGFzc05hbWUucHVzaChTQUNTUy5hZGRGb250RmFtaWx5KGZvbnROYW1lLmZhbWlseSkpO1xuICAgICAgICB9XG4gICAgICAgIC8vIHRleHQtYWxpZ25cbiAgICAgICAgY29uc3QgdGFDbGFzcyA9IHtcbiAgICAgICAgICAgIFwiTEVGVFwiOiAnJyxcbiAgICAgICAgICAgIFwiQ0VOVEVSXCI6ICd0YWMnLFxuICAgICAgICAgICAgXCJSSUdIVFwiOiAndGFyJyxcbiAgICAgICAgICAgIFwiSlVTVElGSUVEXCI6ICd0YWonLFxuICAgICAgICB9W25vZGUudGV4dEFsaWduSG9yaXpvbnRhbF07XG4gICAgICAgIHRhQ2xhc3MgJiYgY2xhc3NOYW1lLnB1c2godGFDbGFzcyk7XG4gICAgICAgIC8vIHZlcnRpY2FsLWFsaWduXG4gICAgICAgIGNvbnN0IHZhQ2xhc3MgPSB7XG4gICAgICAgICAgICBcIlRPUFwiOiAnJyxcbiAgICAgICAgICAgIFwiQ0VOVEVSXCI6ICd2YW0nLFxuICAgICAgICAgICAgXCJCT1RUT01cIjogJ3ZhYicsXG4gICAgICAgIH1bbm9kZS50ZXh0QWxpZ25WZXJ0aWNhbF07XG4gICAgICAgIHZhQ2xhc3MgJiYgY2xhc3NOYW1lLnB1c2godmFDbGFzcyk7XG4gICAgICAgIGNvbnN0IHRleHRDYXNlID0gVEVYVC5nZXRQcm9wQnlOb2RlKG5vZGUsICd0ZXh0Q2FzZScpO1xuICAgICAgICAvLyB0dFxuICAgICAgICBjb25zdCB0dENsYXNzID0ge1xuICAgICAgICAgICAgXCJPUklHSU5BTFwiOiAnJyxcbiAgICAgICAgICAgIFwiVVBQRVJcIjogJ3R0dScsXG4gICAgICAgICAgICBcIkxPV0VSXCI6ICd0dGwnLFxuICAgICAgICAgICAgXCJUSVRMRVwiOiAndHRjJyxcbiAgICAgICAgfVt0ZXh0Q2FzZV07XG4gICAgICAgIHR0Q2xhc3MgJiYgY2xhc3NOYW1lLnB1c2godHRDbGFzcyk7XG4gICAgICAgIGNvbnN0IHRleHREZWNvcmF0aW9uID0gVEVYVC5nZXRQcm9wQnlOb2RlKG5vZGUsICd0ZXh0RGVjb3JhdGlvbicpO1xuICAgICAgICAvLyB0ZFxuICAgICAgICBjb25zdCB0ZENsYXNzID0ge1xuICAgICAgICAgICAgXCJOT05FXCI6IFwiXCIsXG4gICAgICAgICAgICBcIlVOREVSTElORVwiOiAndGR1JyxcbiAgICAgICAgICAgIFwiU1RSSUtFVEhST1VHSFwiOiAndGRsJ1xuICAgICAgICB9W3RleHREZWNvcmF0aW9uXTtcbiAgICAgICAgdGRDbGFzcyAmJiBjbGFzc05hbWUucHVzaCh0ZENsYXNzKTtcbiAgICAgICAgY29uc3Qgc3RyQ2xhc3NOYW1lID0gY2xhc3NOYW1lLmpvaW4oJyAnKTtcbiAgICAgICAgY29uc3QgaXNTdHJvbmcgPSBbJ2Z3NTAwJywgJ2Z3NjAwJywgJ2Z3NzAwJywgJ2Z3ODAwJywgJ2Z3OTAwJ10uZmluZEluZGV4KChpdGVtKSA9PiBzdHJDbGFzc05hbWUuaW5kZXhPZihpdGVtKSA+IC0xKSA+IC0xO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiBzdHJDbGFzc05hbWUsXG4gICAgICAgICAgICB0YWdOYW1lOiBpc1N0cm9uZyA/ICdzdHJvbmcnIDogJ3NwYW4nXG4gICAgICAgIH07XG4gICAgfSxcbiAgICBnZXRUZXh0Q2hpbGRyZW46IChub2RlKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgY2hhcmFjdGVycyA9ICcnIH0gPSBub2RlO1xuICAgICAgICBjb25zdCBsZWdhbFAgPSBjaGFyYWN0ZXJzLnNwbGl0KCdcXG4nKS5maWx0ZXIoaXRlbSA9PiBpdGVtLnRyaW0oKSk7XG4gICAgICAgIC8vIOacieWbnui9puihqOekuuWkmuauteiQvVxuICAgICAgICBpZiAobGVnYWxQLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIGNvbnN0IG1iQ2xhc3MgPSBub2RlLnBhcmFncmFwaFNwYWNpbmcgPiAwID8gU0FDU1MuYWRkKCdtYicsIG5vZGUucGFyYWdyYXBoU3BhY2luZykgOiAnJztcbiAgICAgICAgICAgIGNvbnN0IHBzID0gbGVnYWxQLm1hcCgoaXRlbSwga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXNMYXN0ID0ga2V5ID09PSBsZWdhbFAubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICB0YWdOYW1lOiAncCcsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogaXNMYXN0ID8gJycgOiBtYkNsYXNzLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW2l0ZW1dXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHBzO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbY2hhcmFjdGVyc107XG4gICAgfSxcbiAgICAvLyDmlofmnKznu4Tku7ZcbiAgICBnZXRJbmZvOiAobm9kZSkgPT4ge1xuICAgICAgICBpZiAobm9kZS50eXBlICE9PSAnVEVYVCcpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGlkID0gVEVYVC5nZXRQcm9wQnlOb2RlKG5vZGUsICd0ZXh0U3R5bGVJZCcpO1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGNvbnN0IGdldEluZm8gPSBDT05GSUcuZ2V0SW5mb0J5SWQoaWQpIHx8IHt9O1xuICAgICAgICBjb25zdCBhY3NzSW5mbyA9IFRFWFQuZ2V0QUNTU1NJbmZvKG5vZGUpO1xuICAgICAgICBjb25zdCByZXN1bHQgPSB7XG4gICAgICAgICAgICBjbGFzc05hbWU6IGdldEluZm8uY2xhc3NOYW1lIHx8IGFjc3NJbmZvLmNsYXNzTmFtZSB8fCAnJyxcbiAgICAgICAgICAgIHRhZ05hbWU6IGdldEluZm8udGFnTmFtZSB8fCBhY3NzSW5mby50YWdOYW1lIHx8ICcnLFxuICAgICAgICAgICAgaWdub3JlQ2xhc3NOYW1lOiBnZXRJbmZvLmlnbm9yZUNsYXNzTmFtZSB8fCAnJ1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0sXG59O1xuZXhwb3J0IGRlZmF1bHQgVEVYVDtcbiIsImltcG9ydCBOT0RFIGZyb20gXCIuL18vTk9ERVwiO1xuaW1wb3J0IENPTkZJRyBmcm9tIFwiLi9fL0NPTkZJR1wiO1xuaW1wb3J0IFNBQ1NTIGZyb20gXCIuL18vU0FDU1NcIjtcbmltcG9ydCBET00gZnJvbSBcIi4vXy9yZW5kZXIvRE9NXCI7XG5jb25zdCBBUEkgPSB7XG4gICAgLyoqXG4gICAgICog6buY6K6k5pi+56S6IGhvbWVcbiAgICAgKi9cbiAgICB0YWJJbmRleDogMCxcbiAgICAvKipcbiAgICAgKiDojrflj5bnlKjmiLfpgInkuK3nmoTlm77lsYJcbiAgICAgKi9cbiAgICBnZXRTZWxlY3Rpb246ICgpID0+IHtcbiAgICAgICAgY29uc3Qgc2VsZWN0aW9uID0gZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhzZWxlY3Rpb24pO1xuICAgICAgICBpZiAoIXNlbGVjdGlvbi5sZW5ndGgpIHtcbiAgICAgICAgICAgIC8vIOayoeaciemAieaLqeS7u+S9leWFg+e0oFxuICAgICAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2UoeyBub1NlbGVjdGlvbjogdHJ1ZSB9KTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzZWxlY3Rpb247XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiDlvZMgVGFiIOWIh+aNoueahOaXtuWAmeS8muWHuuWPkei/meS4quaWueazlVxuICAgICAqIEBwYXJhbSBpbmRleFxuICAgICAqL1xuICAgIG9uVGFiQ2hhbmdlOiAoaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgYmVmb3JlSW5kZXggPSBBUEkudGFiSW5kZXg7XG4gICAgICAgIEFQSS50YWJJbmRleCA9IGluZGV4O1xuICAgICAgICAvLyDlpoLmnpzlj6rmmK/lnKggSFRNTCDlkowgQUNTUyDkuYvliY3liIfmjaJcbiAgICAgICAgaWYgKChiZWZvcmVJbmRleCA9PT0gMCB8fCBiZWZvcmVJbmRleCA9PT0gMSkgJiYgKGluZGV4ID09PSAwIHx8IGluZGV4ID09PSAxKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFjdGlvbk1hcCA9IFsncnVuSG9tZScsICdydW5Ib21lJywgJ3J1blRva2VuJywgJ3J1bkNvbmZpZyddO1xuICAgICAgICBjb25zdCBhY3Rpb24gPSBhY3Rpb25NYXBbaW5kZXhdO1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnb25UYWJDaGFuZ2UnLCBhY3Rpb24pO1xuICAgICAgICBhY3Rpb24gJiYgQVBJW2FjdGlvbl0oKTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIOinpuWPkVxuICAgICAqL1xuICAgIHJ1bjogKCkgPT4ge1xuICAgICAgICBjb25zdCBhY3Rpb25NYXAgPSBbJ3J1bkhvbWUnLCAncnVuSG9tZScsICdydW5Ub2tlbicsICcnXTtcbiAgICAgICAgY29uc3QgYWN0aW9uID0gYWN0aW9uTWFwW0FQSS50YWJJbmRleF07XG4gICAgICAgIGlmICghYWN0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgQVBJW2FjdGlvbl0oKTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIOaYvuekuuesrOS4gOWxj1xuICAgICAqL1xuICAgIHJ1bkhvbWU6ICgpID0+IHtcbiAgICAgICAgY29uc3Qgc2VsZWN0aW9uID0gQVBJLmdldFNlbGVjdGlvbigpO1xuICAgICAgICBpZiAoIXNlbGVjdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIFNBQ1NTLmluaXQoKTtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBjb25zdCBJbmZvID0gTk9ERS5nZXROb2Rlc0luZm8oc2VsZWN0aW9uKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coSW5mbyk7XG4gICAgICAgIGNvbnN0IGlzSlNYID0gQ09ORklHLmlzSlNYKCk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgIGdldEhUTUw6IERPTS5yZW5kZXIoSW5mbywgaXNKU1gpLFxuICAgICAgICAgICAgICAgIGdldENTUzogU0FDU1MuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICAgICAgaXNKU1gsXG4gICAgICAgICAgICAgICAgbm9TZWxlY3Rpb246IGZhbHNlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSwgMTYpO1xuICAgIH0sXG4gICAgcnVuQ29uZmlnOiAoKSA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgIGdldENvbmZpZzogQ09ORklHLmdldEFsbCgpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSwgMTApO1xuICAgIH0sXG4gICAgcnVuVG9rZW46ICgpID0+IHtcbiAgICAgICAgY29uc3QgW3NlbGVjdGlvbl0gPSBBUEkuZ2V0U2VsZWN0aW9uKCkgfHwgW107XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2UoQ09ORklHLmdldFNlbGVjdGlvblRva2VucyhzZWxlY3Rpb24pKTtcbiAgICAgICAgfSwgMTYpO1xuICAgIH0sXG4gICAgb25tZXNzYWdlOiAobXNnID0ge30pID0+IHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBjb25zdCB7IHR5cGUgPSBudWxsLCB2YWx1ZSA9IG51bGwgfSA9IG1zZztcbiAgICAgICAgaWYgKHR5cGUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBbbmFtZSwgYWN0aW9uXSA9IHR5cGUuc3BsaXQoJy4nKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ0FQSSBvbm1lc3NhZ2UnLCBuYW1lLCBhY3Rpb24sIHZhbHVlKTtcbiAgICAgICAgaWYgKG5hbWUgPT09ICdBUEknICYmIChhY3Rpb24gaW4gQVBJKSkge1xuICAgICAgICAgICAgQVBJW2FjdGlvbl0odmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChuYW1lID09PSAnQ09ORklHJyAmJiAoYWN0aW9uIGluIENPTkZJRykpIHtcbiAgICAgICAgICAgIENPTkZJR1thY3Rpb25dKHZhbHVlKTtcbiAgICAgICAgICAgIGlmIChhY3Rpb24gPT09ICdjaGFuZ2VKU1gnKSB7XG4gICAgICAgICAgICAgICAgQVBJLnJ1bkhvbWUoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYWN0aW9uID09PSAnYXBwZW5kVG9rZW4nKSB7XG4gICAgICAgICAgICAgICAgQVBJLnJ1blRva2VuKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQVBJLnJ1bkNvbmZpZygpO1xuICAgICAgICB9XG4gICAgfVxufTtcbi8vIFRoaXMgcGx1Z2luIHdpbGwgb3BlbiBhIHdpbmRvdyB0byBwcm9tcHQgdGhlIHVzZXIgdG8gZW50ZXIgYSBudW1iZXIsIGFuZFxuLy8gaXQgd2lsbCB0aGVuIGNyZWF0ZSB0aGF0IG1hbnkgcmVjdGFuZ2xlcyBvbiB0aGUgc2NyZWVuLlxuLy8gVGhpcyBmaWxlIGhvbGRzIHRoZSBtYWluIGNvZGUgZm9yIHRoZSBwbHVnaW5zLiBJdCBoYXMgYWNjZXNzIHRvIHRoZSAqZG9jdW1lbnQqLlxuLy8gWW91IGNhbiBhY2Nlc3MgYnJvd3NlciBBUElzIGluIHRoZSA8c2NyaXB0PiB0YWcgaW5zaWRlIFwidWkuaHRtbFwiIHdoaWNoIGhhcyBhXG4vLyBmdWxsIGJyb3dzZXIgZW52aXJvbm1lbnQgKHNlZSBkb2N1bWVudGF0aW9uKS5cbkNPTkZJRy5pbml0KCkudGhlbigoKSA9PiB7XG4gICAgLy8gVGhpcyBzaG93cyB0aGUgSFRNTCBwYWdlIGluIFwidWkuaHRtbFwiLlxuICAgIGZpZ21hLnNob3dVSShfX2h0bWxfXywgeyB3aWR0aDogNDAwLCBoZWlnaHQ6IDYwMCB9KTtcbiAgICBBUEkucnVuKCk7XG4gICAgZmlnbWEub24oXCJzZWxlY3Rpb25jaGFuZ2VcIiwgKCkgPT4ge1xuICAgICAgICBBUEkucnVuKCk7XG4gICAgfSk7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGZpZ21hLnVpLm9ubWVzc2FnZSA9IEFQSS5vbm1lc3NhZ2U7XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=