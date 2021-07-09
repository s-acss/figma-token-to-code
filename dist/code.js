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
/* harmony import */ var _ui_utils_objMerge_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/utils/objMerge.js */ "./src/ui/utils/objMerge.js");


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
    var nodeInfo = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    // @ts-ignore
    var id = COMPONENT.getComponentId(node);
    var matchToken = id ? _CONFIG__WEBPACK_IMPORTED_MODULE_0__["default"].getToken()[id] : '';

    if (!matchToken) {
      return nodeInfo;
    }

    var _matchToken$DEFAULT = matchToken.DEFAULT,
        DEFAULT = _matchToken$DEFAULT === void 0 ? {} : _matchToken$DEFAULT;
    return Object(_ui_utils_objMerge_js__WEBPACK_IMPORTED_MODULE_1__["default"])(nodeInfo, DEFAULT);
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

var CONFIG_DEFAULT = {
  isJSX: false,
  ignoreClassName: [],
  tokens: {}
};
var VERSION = "1.0";
var CONFIG = {
  key: "TokenToCode-".concat(VERSION),
  store: CONFIG_DEFAULT,
  changeJSX: function changeJSX(value) {
    var store = CONFIG.getCurrent(); // 重置回第一个

    store.isJSX = value; // console.log(store);

    figma.clientStorage.setAsync(CONFIG.key, store);
  },
  edit: function edit(data) {
    CONFIG.store = data;
    figma.clientStorage.setAsync(CONFIG.key, data);
    figma.ui.postMessage({
      // @ts-ignore
      alertMsg: "Save success"
    });
  },
  isJSX: function isJSX() {
    return !!CONFIG.store.isJSX;
  },
  init: function init() {
    return new Promise(function (resolve, reject) {
      figma.clientStorage.getAsync(CONFIG.key).then(function () {
        var ret = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

        if (ret) {
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
    return CONFIG.store;
  },
  getToken: function getToken() {
    var _ref = CONFIG.store || {},
        _ref$tokens = _ref.tokens,
        tokens = _ref$tokens === void 0 ? null : _ref$tokens;

    return tokens ? JSON.parse(JSON.stringify(tokens)) : null;
  },
  getInfoById: function getInfoById(id) {
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "DEFAULT";

    if (!(id && typeof id === 'string')) {
      return null;
    }

    var _ref2 = figma.getStyleById(id) || {},
        _ref2$key = _ref2.key,
        key = _ref2$key === void 0 ? '' : _ref2$key;

    if (!key) {
      return null;
    }

    var tokenConfig = CONFIG.getToken() || {};
    var matchToken = tokenConfig[key] || {}; // console.log('getInfoById', matchToken, type)
    // 如果有自定义用自定义的

    return matchToken[type] || matchToken.DEFAULT || null;
  },
  getSelectionTokens: function getSelectionTokens(selection) {
    var _CONFIG$store$tokens = CONFIG.store.tokens,
        tokens = _CONFIG$store$tokens === void 0 ? {} : _CONFIG$store$tokens;

    if (!selection) {
      return {
        selectionTokens: null
      };
    }

    var matchToken = {}; // 如果是组件

    if (_COMPONENT__WEBPACK_IMPORTED_MODULE_0__["default"].isComponent(selection)) {
      //@ts-ignore
      var _COMPONENT$getMainCom = _COMPONENT__WEBPACK_IMPORTED_MODULE_0__["default"].getMainComponent(selection),
          key = _COMPONENT$getMainCom.key,
          name = _COMPONENT$getMainCom.name,
          type = _COMPONENT$getMainCom.type;

      var findToken = tokens[key] || {};
      matchToken[key] = Object.assign(Object.assign({
        DEFAULT: {
          className: []
        }
      }, findToken), {
        _tokenName: name,
        _tokenType: type
      });
    } //@ts-ignore


    [selection.fillStyleId, selection.textStyleId, selection.strokeStyleId, selection.effectStyleId, selection.gridStyleId].forEach(function (item, key) {
      if (!item) {
        return '';
      }

      var _ref3 = figma.getStyleById(item) || {},
          styleKey = _ref3.key,
          name = _ref3.name,
          type = _ref3.type;

      if (!styleKey) {
        return '';
      }

      var extraToken = null; // 如果有 fillStyleId

      if (key === 0) {
        extraToken = {
          // 可以额外对文字进行设置
          "TEXT": {
            className: []
          }
        };
      }

      matchToken[styleKey] = Object.assign(Object.assign(Object.assign({
        DEFAULT: {
          className: []
        }
      }, extraToken), tokens[styleKey]), {
        _nodeName: name,
        _tokenType: type
      });
    });
    return {
      selectionTokens: matchToken
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
      ignoreClassName: [],
      className: [],
      children: []
    };

    if (isStructNode) {
      // @ts-ignore
      nodeInfo.tagName = 'i';
    }

    nodeInfo = _COMPONENT__WEBPACK_IMPORTED_MODULE_0__["default"].getInfo(node, nodeInfo);
    nodeInfo = _token_FILL__WEBPACK_IMPORTED_MODULE_1__["default"].getInfo(node, nodeInfo);
    nodeInfo = _token_TEXT__WEBPACK_IMPORTED_MODULE_2__["default"].getInfo(node, nodeInfo);
    nodeInfo = _token_STROKE__WEBPACK_IMPORTED_MODULE_3__["default"].getInfo(node, nodeInfo);
    nodeInfo = _token_GRID__WEBPACK_IMPORTED_MODULE_4__["default"].getInfo(node, nodeInfo);
    nodeInfo = _token_EFFECT__WEBPACK_IMPORTED_MODULE_8__["default"].getInfo(node, nodeInfo);
    nodeInfo = _token_OTHERS__WEBPACK_IMPORTED_MODULE_9__["default"].getInfo(node, nodeInfo);
    nodeInfo = _token_FLEX__WEBPACK_IMPORTED_MODULE_5__["default"].getInfo(node, nodeInfo); // @ts-ignore

    if (isStructNode && String(nodeInfo === null || nodeInfo === void 0 ? void 0 : nodeInfo.renderHeight) !== '0' || String(nodeInfo === null || nodeInfo === void 0 ? void 0 : nodeInfo.renderWidth) === '1') {
      nodeInfo.className.push(_SACSS__WEBPACK_IMPORTED_MODULE_6__["default"].add('w', parseInt(String(node.width))));
    } // @ts-ignore


    if (isStructNode && String(nodeInfo === null || nodeInfo === void 0 ? void 0 : nodeInfo.renderHeight) !== '0' || String(nodeInfo === null || nodeInfo === void 0 ? void 0 : nodeInfo.renderHeight) === '1') {
      nodeInfo.className.push(_SACSS__WEBPACK_IMPORTED_MODULE_6__["default"].add('h', parseInt(String(node.height))));
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

      if (isStructNode || nodeInfo.children === null) {
        return [];
      } // 渲染文字节点
      // if (String(nodeInfo.children) === 'TEXT') {
      //     // @ts-ignore
      //     return node.findAll(c => c.type === 'TEXT' && c.visible).map((c) => c.characters);
      // }
      // @ts-ignore


      return NODE.getNodesInfo(node.children);
    }(); // 整个项目都忽略的 className
    // @ts-ignore


    var _ref = _CONFIG__WEBPACK_IMPORTED_MODULE_10__["default"].getCurrent() || {},
        _ref$ignoreClassName = _ref.ignoreClassName,
        ignoreClassName = _ref$ignoreClassName === void 0 ? [] : _ref$ignoreClassName;

    nodeInfo.className = _UTILS__WEBPACK_IMPORTED_MODULE_7__["default"].clearClassName(nodeInfo.className, [].concat(_toConsumableArray(nodeInfo.ignoreClassName), _toConsumableArray(ignoreClassName)));
    delete nodeInfo.ignoreClassName;

    if (nodeInfo.children instanceof Array && nodeInfo.children.length === 1) {
      var childrenInfo = nodeInfo.children[0]; // 如果父元素和子元素 tagName 相同合并 className
      // @ts-ignore

      if (typeof childrenInfo !== 'string' && childrenInfo.tagName === nodeInfo.tagName) {
        childrenInfo.className = [].concat(_toConsumableArray(childrenInfo.className), _toConsumableArray(nodeInfo.className));
        return childrenInfo;
      }
    } // console.log({nodeInfo});


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
    var className = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var ignoreClassName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

    if (!className || className.length === 0) {
      return [];
    }

    var result = [];
    className.forEach(function () {
      var item = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      if (item && item !== 'null' && result.indexOf(item) === -1 && ignoreClassName.indexOf(item) === -1) {
        result.push(item);
      }
    });
    return result;
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
  render: function render(obj, isJSX) {
    if (isJSX) {
      return _JSX__WEBPACK_IMPORTED_MODULE_1__["default"].getItemDom(obj);
    }

    return _HTML__WEBPACK_IMPORTED_MODULE_0__["default"].getItemDom(obj);
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

 // legal 合法属性
// const legalProp = ['class', 'type', 'name', 'role', 'disabled', 'id', 'title', 'lang', 'dir', 'tabindex', 'accesskey', 'src', 'href', 'style', 'aria-hidden', 'target', 'rel'];

var HTML = {
  getPropsStringByObject: function getPropsStringByObject(props) {
    var arrProps = [];

    for (var _i = 0, _Object$entries = Object.entries(props); _i < _Object$entries.length; _i++) {
      var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
          key = _Object$entries$_i[0],
          value = _Object$entries$_i[1];

      var strValue = value instanceof Array ? value.join(' ') : value;
      var keyName = key === 'className' ? 'class' : key;
      strValue && arrProps.push("".concat(keyName, "=\"").concat(strValue, "\""));
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

    var _tagName = item.tagName,
        _item$children = item.children,
        children = _item$children === void 0 ? [] : _item$children,
        props = __rest(item, ["tagName", "children"]);

    var tagName = _tagName ? _tagName.toLowerCase() : 'div';
    var strProps = HTML.getPropsStringByObject(props);
    var tagStart = "".concat(tagName).concat(strProps ? " ".concat(strProps) : '');

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


var JSX = {
  getPropsString: function getPropsString(props) {
    var arrProps = [];

    for (var _i = 0, _Object$entries = Object.entries(props); _i < _Object$entries.length; _i++) {
      var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
          key = _Object$entries$_i[0],
          value = _Object$entries$_i[1];

      var strValue = value instanceof Array ? value.join(' ') : value;
      strValue && arrProps.push("".concat(key, "=\"").concat(strValue, "\""));
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


    var _item$tagName = item.tagName,
        tagName = _item$tagName === void 0 ? 'div' : _item$tagName,
        _item$children = item.children,
        children = _item$children === void 0 ? [] : _item$children,
        props = __rest(item, ["tagName", "children"]);

    var strProps = JSX.getPropsString(props);
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
/* harmony import */ var _ui_utils_objMerge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/utils/objMerge */ "./src/ui/utils/objMerge.js");


var EFFECT = {
  getInfo: function getInfo(node, nodeInfo) {
    // @ts-ignore
    var result = _CONFIG__WEBPACK_IMPORTED_MODULE_0__["default"].getInfoById(node.effectStyleId);

    if (!result) {
      return nodeInfo;
    }

    return Object(_ui_utils_objMerge__WEBPACK_IMPORTED_MODULE_1__["default"])(nodeInfo, result);
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
/* harmony import */ var _ui_utils_objMerge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/utils/objMerge */ "./src/ui/utils/objMerge.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var FILL = {
  getFill: function getFill(node) {
    // @ts-ignore
    var _ref = (typeof node.getRangeFills === 'function' ? node.getRangeFills(0, 1) : node.fills) || [],
        _ref2 = _slicedToArray(_ref, 1),
        firstFill = _ref2[0]; // 没有设置任何颜色, 目前不支持渐变
    // @ts-ignore


    if (!firstFill || firstFill.type !== 'SOLID') {
      return "";
    }

    var color = _COLOR__WEBPACK_IMPORTED_MODULE_0__["default"].getRgbaByFill(firstFill);

    if (!color) {
      return "";
    }

    var className = node.type === 'TEXT' ? _SACSS__WEBPACK_IMPORTED_MODULE_2__["default"].addColor(color) : _SACSS__WEBPACK_IMPORTED_MODULE_2__["default"].addBgColor(color); // 文本是用颜色，其它理解为背景色

    return className;
  },
  // 获取填充信息
  getInfo: function getInfo(node) {
    var nodeInfo = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    // console.log(node);
    // @ts-ignore
    var id = typeof node.getRangeFillStyleId === 'function' ? node.getRangeFillStyleId(0, 1) : node.fillStyleId; //@ts-ignore

    var token = _CONFIG__WEBPACK_IMPORTED_MODULE_1__["default"].getInfoById(id, node.type) || {};

    if (token) {
      return Object(_ui_utils_objMerge__WEBPACK_IMPORTED_MODULE_3__["default"])(nodeInfo, token);
    }

    var classColor = FILL.getFill(node);
    return Object(_ui_utils_objMerge__WEBPACK_IMPORTED_MODULE_3__["default"])(nodeInfo, {
      className: [classColor]
    });
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
/* harmony import */ var _ui_utils_objMerge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/utils/objMerge */ "./src/ui/utils/objMerge.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


 // import CONFIG from "./CONFIG";

var FLEX = {
  isFlex: function isFlex(node) {
    // 这几个元素都不做 Flex 判断处理
    if (['TEXT'].indexOf(node.type) > -1) {
      return false;
    }

    return (node === null || node === void 0 ? void 0 : node.layoutMode) && (node === null || node === void 0 ? void 0 : node.layoutMode) !== "NONE";
  },
  getThisInfo: function getThisInfo(node) {
    // console.log(node.name, node.layoutMode, FLEX.isFlex(node));
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

    return className;
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
      className: className,
      ignoreClassName: ignoreClassName
    };
  },
  getInfo: function getInfo(node, nodeInfo) {
    // @ts-ignore
    var baseClassName = FLEX.getThisInfo(node) || []; // @ts-ignore

    var _ref2 = FLEX.getInfoFromParent(node) || {},
        _ref2$className = _ref2.className,
        c2 = _ref2$className === void 0 ? [] : _ref2$className,
        _ref2$ignoreClassName = _ref2.ignoreClassName,
        ic2 = _ref2$ignoreClassName === void 0 ? [] : _ref2$ignoreClassName;

    return Object(_ui_utils_objMerge__WEBPACK_IMPORTED_MODULE_1__["default"])(nodeInfo, {
      className: [].concat(_toConsumableArray(baseClassName), _toConsumableArray(c2)),
      ignoreClassName: ic2
    });
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
/* harmony import */ var _ui_utils_objMerge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/utils/objMerge */ "./src/ui/utils/objMerge.js");


var GRID = {
  getInfo: function getInfo(node, nodeInfo) {
    // @ts-ignore
    var result = _CONFIG__WEBPACK_IMPORTED_MODULE_0__["default"].getInfoById(node.gridStyleId);

    if (!result) {
      return nodeInfo;
    }

    return Object(_ui_utils_objMerge__WEBPACK_IMPORTED_MODULE_1__["default"])(nodeInfo, result);
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
/* harmony import */ var _ui_utils_objMerge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/utils/objMerge */ "./src/ui/utils/objMerge.js");
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
  getInfo: function getInfo(node, nodeInfo) {
    var padding = OTHERS.getPaddingClassName(node);
    var radius = OTHERS.gerBorderRadiusClassName(node);
    return Object(_ui_utils_objMerge__WEBPACK_IMPORTED_MODULE_1__["default"])(nodeInfo, {
      className: [].concat(_toConsumableArray(padding), _toConsumableArray(radius))
    });
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
/* harmony import */ var _ui_utils_objMerge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/utils/objMerge */ "./src/ui/utils/objMerge.js");


var STROKE = {
  // 文本组件
  getInfo: function getInfo(node, nodeInfo) {
    // @ts-ignore
    var result = _CONFIG__WEBPACK_IMPORTED_MODULE_0__["default"].getInfoById(node.strokeStyleId);

    if (!result) {
      return nodeInfo;
    }

    return Object(_ui_utils_objMerge__WEBPACK_IMPORTED_MODULE_1__["default"])(nodeInfo, result);
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
/* harmony import */ var _ui_utils_objMerge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/utils/objMerge */ "./src/ui/utils/objMerge.js");
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
      className: className,
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
    var nodeInfo = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (node.type !== 'TEXT') {
      return nodeInfo;
    }

    var id = TEXT.getPropByNode(node, 'textStyleId'); // @ts-ignore

    var getInfo = _CONFIG__WEBPACK_IMPORTED_MODULE_0__["default"].getInfoById(id);

    if (getInfo) {
      return Object(_ui_utils_objMerge__WEBPACK_IMPORTED_MODULE_2__["default"])(nodeInfo, getInfo);
    }

    var acssInfo = TEXT.getACSSSInfo(node);
    return Object(_ui_utils_objMerge__WEBPACK_IMPORTED_MODULE_2__["default"])(nodeInfo, acssInfo);
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

    return selection[0];
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

    var Info = _NODE__WEBPACK_IMPORTED_MODULE_0__["default"].getNodeInfo(selection); // console.log(Info);

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
        getConfig: _CONFIG__WEBPACK_IMPORTED_MODULE_1__["default"].getCurrent()
      });
    }, 10);
  },
  runToken: function runToken() {
    var selection = API.getSelection();
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

/***/ }),

/***/ "./src/ui/utils/objMerge.js":
/*!**********************************!*\
  !*** ./src/ui/utils/objMerge.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function objMerge() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var b = arguments.length > 1 ? arguments[1] : undefined;
  var result = a;

  for (var _i = 0, _Object$entries = Object.entries(b); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
        key = _Object$entries$_i[0],
        value = _Object$entries$_i[1];

    var item = a[key];

    if (!item || !value) {
      result[key] = value;
    } else if (item instanceof Array && value instanceof Array) {
      result[key] = [].concat(_toConsumableArray(item), _toConsumableArray(value));
    } else if (item && item instanceof Object) {
      result[key] = objMerge(item, value);
    } else {
      result[key] = value;
    }
  }

  return result;
}

;
/* harmony default export */ __webpack_exports__["default"] = (objMerge);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL18vQ09NUE9ORU5ULnRzIiwid2VicGFjazovLy8uL3NyYy9fL0NPTkZJRy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvXy9OT0RFLnRzIiwid2VicGFjazovLy8uL3NyYy9fL1NBQ1NTLnRzIiwid2VicGFjazovLy8uL3NyYy9fL1VUSUxTLnRzIiwid2VicGFjazovLy8uL3NyYy9fL3JlbmRlci9ET00udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL18vcmVuZGVyL0hUTUwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL18vcmVuZGVyL0pTWC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvXy90b2tlbi9DT0xPUi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvXy90b2tlbi9FRkZFQ1QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL18vdG9rZW4vRklMTC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvXy90b2tlbi9GTEVYLnRzIiwid2VicGFjazovLy8uL3NyYy9fL3Rva2VuL0dSSUQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL18vdG9rZW4vT1RIRVJTLnRzIiwid2VicGFjazovLy8uL3NyYy9fL3Rva2VuL1NUUk9LRS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvXy90b2tlbi9URVhULnRzIiwid2VicGFjazovLy8uL3NyYy9jb2RlLnRzIiwid2VicGFjazovLy8uL3NyYy91aS91dGlscy9vYmpNZXJnZS5qcyJdLCJuYW1lcyI6WyJDT01QT05FTlQiLCJpc0NvbXBvbmVudCIsIm5vZGUiLCJ0eXBlIiwiZ2V0TWFpbkNvbXBvbmVudCIsIm1haW5Db21wb25lbnQiLCJnZXRDb21wb25lbnRJZCIsImtleSIsInN0cmluZ1RvQ29tcG9uZW50TmFtZSIsIm5hbWUiLCJ0cmltTmFtZSIsInRyaW0iLCJzdHJOYW1lIiwicmVwbGFjZSIsImZpcnN0Q2hhciIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwibGVuZ3RoIiwic2xpY2UiLCJnZXRJbmZvIiwibm9kZUluZm8iLCJpZCIsIm1hdGNoVG9rZW4iLCJDT05GSUciLCJnZXRUb2tlbiIsIkRFRkFVTFQiLCJvYmpNZXJnZSIsIkNPTkZJR19ERUZBVUxUIiwiaXNKU1giLCJpZ25vcmVDbGFzc05hbWUiLCJ0b2tlbnMiLCJWRVJTSU9OIiwic3RvcmUiLCJjaGFuZ2VKU1giLCJ2YWx1ZSIsImdldEN1cnJlbnQiLCJmaWdtYSIsImNsaWVudFN0b3JhZ2UiLCJzZXRBc3luYyIsImVkaXQiLCJkYXRhIiwidWkiLCJwb3N0TWVzc2FnZSIsImFsZXJ0TXNnIiwiaW5pdCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiZ2V0QXN5bmMiLCJ0aGVuIiwicmV0IiwiY2F0Y2giLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJnZXRJbmZvQnlJZCIsImdldFN0eWxlQnlJZCIsInRva2VuQ29uZmlnIiwiZ2V0U2VsZWN0aW9uVG9rZW5zIiwic2VsZWN0aW9uIiwic2VsZWN0aW9uVG9rZW5zIiwiZmluZFRva2VuIiwiT2JqZWN0IiwiYXNzaWduIiwiY2xhc3NOYW1lIiwiX3Rva2VuTmFtZSIsIl90b2tlblR5cGUiLCJmaWxsU3R5bGVJZCIsInRleHRTdHlsZUlkIiwic3Ryb2tlU3R5bGVJZCIsImVmZmVjdFN0eWxlSWQiLCJncmlkU3R5bGVJZCIsImZvckVhY2giLCJpdGVtIiwic3R5bGVLZXkiLCJleHRyYVRva2VuIiwiX25vZGVOYW1lIiwiZ2V0QWxsVG9rZW5zIiwicm9vdCIsImNvbXBvbmVudHMiLCJmaW5kQWxsIiwiYyIsInBhcmVudCIsInRva2VuIiwiYWRkQ29uZmlnIiwiZ2V0TG9jYWxQYWludFN0eWxlcyIsImdldExvY2FsVGV4dFN0eWxlcyIsImdldExvY2FsRWZmZWN0U3R5bGVzIiwiZ2V0TG9jYWxHcmlkU3R5bGVzIiwiZ290QWxsVG9rZW5zIiwiX19yZXN0IiwicyIsImUiLCJ0IiwicCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImluZGV4T2YiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJpIiwicHJvcGVydHlJc0VudW1lcmFibGUiLCJOT0RFIiwiZXh0ZW5kSW5mbyIsImEiLCJiIiwiY2xhc3NOYW1lQSIsImlnbm9yZUNsYXNzTmFtZUEiLCJjb21wb25lbnRQcm9wcyIsImNvbXBvbmVudFByb3BzQSIsInByb3BzIiwicHJvcHNBIiwiaHRtbFByb3BzIiwiaHRtbFByb3BzQSIsInJlc3RBIiwiY2xhc3NOYW1lQiIsImlnbm9yZUNsYXNzTmFtZUIiLCJjb21wb25lbnRQcm9wc0IiLCJwcm9wc0IiLCJodG1sUHJvcHNCIiwiY2hpbGRyZW4iLCJyZXN0QiIsImlzU3RydWN0Tm9kZSIsInN0YXJ0c1dpdGgiLCJ5ZXNUeXBlcyIsImdvdE5vIiwiZmluZCIsInZpc2libGUiLCJpc1JlbmRlckNoaWxkcmVuIiwiZ2V0Tm9kZUluZm8iLCJ0YWdOYW1lIiwiRklMTCIsIlRFWFQiLCJTVFJPS0UiLCJHUklEIiwiRUZGRUNUIiwiT1RIRVJTIiwiRkxFWCIsIlN0cmluZyIsInJlbmRlckhlaWdodCIsInJlbmRlcldpZHRoIiwicHVzaCIsIlNBQ1NTIiwiYWRkIiwicGFyc2VJbnQiLCJ3aWR0aCIsImhlaWdodCIsIl9hIiwidGV4dHMiLCJnZXRUZXh0Q2hpbGRyZW4iLCJnZXROb2Rlc0luZm8iLCJVVElMUyIsImNsZWFyQ2xhc3NOYW1lIiwiQXJyYXkiLCJjaGlsZHJlbkluZm8iLCJzb3J0Iiwibm9kZXMiLCJhWSIsInkiLCJiWSIsIngiLCJpbmZvIiwic29ydE5vZGVzIiwibGVuIiwibmFtZU1hcCIsImdldENsYXNzU2VsZWN0b3JCeU5hbWUiLCJnZXRTdHJpbmciLCJrZXlzIiwicmVzdWx0IiwibWFwIiwiam9pbiIsInVuaXQiLCJwcm9wTmFtZSIsInVzZVZhbHVlIiwiTnVtYmVyIiwicGFyc2VGbG9hdCIsInRvRml4ZWQiLCJjbGFzc1VuaXQiLCJhZGRGb250RmFtaWx5IiwidmFsdWVPayIsInRvTG93ZXJDYXNlIiwiYWRkQ29sb3IiLCJyZ2JhIiwiYWRkQmdDb2xvciIsImlzQmxvY2siLCJibG9ja1RhZyIsImlzU2VsZlRhZyIsInNlbGZUYWciLCJET00iLCJyZW5kZXIiLCJvYmoiLCJKU1giLCJnZXRJdGVtRG9tIiwiSFRNTCIsImdldFByb3BzU3RyaW5nQnlPYmplY3QiLCJhcnJQcm9wcyIsImVudHJpZXMiLCJzdHJWYWx1ZSIsImtleU5hbWUiLCJfdGFnTmFtZSIsInN0clByb3BzIiwidGFnU3RhcnQiLCJnZXREb21CeUFycmF5IiwiZ2V0UHJvcHNTdHJpbmciLCJjb21wb25lbnROYW1lIiwiQ09MT1IiLCJnZXRSZ2JhQnlGaWxsIiwiY29sb3IiLCJvcGFjaXR5IiwiciIsImciLCJnZXRGaWxsIiwiZ2V0UmFuZ2VGaWxscyIsImZpbGxzIiwiZmlyc3RGaWxsIiwiZ2V0UmFuZ2VGaWxsU3R5bGVJZCIsImNsYXNzQ29sb3IiLCJpc0ZsZXgiLCJsYXlvdXRNb2RlIiwiZ2V0VGhpc0luZm8iLCJwcmltYXJ5QXhpc0FsaWduSXRlbXMiLCJjb3VudGVyQXhpc0FsaWduSXRlbXMiLCJnZXRJbmZvRnJvbVBhcmVudCIsIml0ZW1TcGFjaW5nIiwiZmlsdGVyIiwicG9wIiwiaXNMYXN0Q2hpbGRyZW4iLCJndXR0ZXJNYXAiLCJsYXlvdXRHcm93IiwiYmFzZUNsYXNzTmFtZSIsImMyIiwiaWMyIiwiZ2VyQm9yZGVyUmFkaXVzQ2xhc3NOYW1lIiwidGwiLCJ0b3BMZWZ0UmFkaXVzIiwidHIiLCJ0b3BSaWdodFJhZGl1cyIsImJyIiwiYm90dG9tUmlnaHRSYWRpdXMiLCJibCIsImJvdHRvbUxlZnRSYWRpdXMiLCJnZXRQYWRkaW5nQ2xhc3NOYW1lIiwicGFkZGluZ1RvcCIsInBhZGRpbmdSaWdodCIsInBhZGRpbmdCb3R0b20iLCJwYWRkaW5nTGVmdCIsInBhZGRpbmciLCJyYWRpdXMiLCJ1bml0TWFwIiwiZ2V0Rm9udE5hbWVDbGFzc0J5U3R5bGUiLCJzdHlsZSIsImZvbnRNYXAiLCJzcGxpdCIsImdldFByb3BCeU5vZGUiLCJnZXRBQ1NTU0luZm8iLCJmb250U2l6ZSIsImxpbmVIZWlnaHQiLCJsZXR0ZXJTcGFjaW5nIiwiZm9udE5hbWUiLCJmbkNsYXNzIiwiZmFtaWx5IiwidGFDbGFzcyIsInRleHRBbGlnbkhvcml6b250YWwiLCJ2YUNsYXNzIiwidGV4dEFsaWduVmVydGljYWwiLCJ0ZXh0Q2FzZSIsInR0Q2xhc3MiLCJ0ZXh0RGVjb3JhdGlvbiIsInRkQ2xhc3MiLCJzdHJDbGFzc05hbWUiLCJpc1N0cm9uZyIsImZpbmRJbmRleCIsImNoYXJhY3RlcnMiLCJsZWdhbFAiLCJtYkNsYXNzIiwicGFyYWdyYXBoU3BhY2luZyIsInBzIiwiaXNMYXN0IiwiYWNzc0luZm8iLCJBUEkiLCJ0YWJJbmRleCIsImdldFNlbGVjdGlvbiIsImN1cnJlbnRQYWdlIiwibm9TZWxlY3Rpb24iLCJvblRhYkNoYW5nZSIsImluZGV4IiwiYmVmb3JlSW5kZXgiLCJhY3Rpb25NYXAiLCJhY3Rpb24iLCJydW4iLCJydW5Ib21lIiwiSW5mbyIsInNldFRpbWVvdXQiLCJnZXRIVE1MIiwiZ2V0Q1NTIiwicnVuQ29uZmlnIiwiZ2V0Q29uZmlnIiwicnVuVG9rZW4iLCJvbm1lc3NhZ2UiLCJtc2ciLCJzaG93VUkiLCJfX2h0bWxfXyIsIm9uIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztR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QU0sR0FBR2hFLENBQWY7O0FBQ0EscUNBQTJCMUMsTUFBTSxDQUFDc0ksT0FBUCxDQUFlM0YsQ0FBZixDQUEzQixxQ0FBOEM7QUFBekM7QUFBQSxRQUFPbEcsR0FBUDtBQUFBLFFBQVkyQixLQUFaOztBQUNELFFBQU11QyxJQUFJLEdBQUcrQixDQUFDLENBQUNqRyxHQUFELENBQWQ7O0FBQ0EsUUFBSSxDQUFDa0UsSUFBRCxJQUFTLENBQUN2QyxLQUFkLEVBQXFCO0FBQ2pCc0ksWUFBTSxDQUFDakssR0FBRCxDQUFOLEdBQWMyQixLQUFkO0FBQ0gsS0FGRCxNQUVPLElBQUt1QyxJQUFJLFlBQVlnRixLQUFqQixJQUE0QnZILEtBQUssWUFBWXVILEtBQWpELEVBQXlEO0FBQzVEZSxZQUFNLENBQUNqSyxHQUFELENBQU4sZ0NBQWtCa0UsSUFBbEIsc0JBQTJCdkMsS0FBM0I7QUFDSCxLQUZNLE1BRUEsSUFBSXVDLElBQUksSUFBSUEsSUFBSSxZQUFZWCxNQUE1QixFQUFvQztBQUN2QzBHLFlBQU0sQ0FBQ2pLLEdBQUQsQ0FBTixHQUFjbUIsUUFBUSxDQUFDK0MsSUFBRCxFQUFPdkMsS0FBUCxDQUF0QjtBQUNILEtBRk0sTUFFQTtBQUNIc0ksWUFBTSxDQUFDakssR0FBRCxDQUFOLEdBQWMyQixLQUFkO0FBQ0g7QUFDSjs7QUFDRCxTQUFPc0ksTUFBUDtBQUNIOztBQUFBO0FBRWM5SSx1RUFBZixFIiwiZmlsZSI6ImNvZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9jb2RlLnRzXCIpO1xuIiwiaW1wb3J0IENPTkZJRyBmcm9tIFwiLi9DT05GSUdcIjtcbmltcG9ydCBvYmpNZXJnZSBmcm9tIFwiLi4vdWkvdXRpbHMvb2JqTWVyZ2UuanNcIjtcbmNvbnN0IENPTVBPTkVOVCA9IHtcbiAgICBpc0NvbXBvbmVudDogKG5vZGUpID0+IHtcbiAgICAgICAgLy8gJ0NPTVBPTkVOVF9TRVQnIOebruWJjeS4jeiDveS9nOS4uue7hOS7tueahOWIpOaWreagh+WHhlxuICAgICAgICByZXR1cm4gbm9kZS50eXBlID09PSAnSU5TVEFOQ0UnIHx8IG5vZGUudHlwZSA9PT0gJ0NPTVBPTkVOVCc7XG4gICAgfSxcbiAgICBnZXRNYWluQ29tcG9uZW50OiAobm9kZSkgPT4ge1xuICAgICAgICBpZiAobm9kZS50eXBlID09PSAnQ09NUE9ORU5UX1NFVCcgfHwgbm9kZS50eXBlID09PSAnQ09NUE9ORU5UJykge1xuICAgICAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gY29uc29sZS5sb2cobm9kZSwge2lzVmFyaWFudH0pO1xuICAgICAgICByZXR1cm4gbm9kZS5tYWluQ29tcG9uZW50O1xuICAgIH0sXG4gICAgZ2V0Q29tcG9uZW50SWQ6IChub2RlKSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKG5vZGUpO1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGNvbnN0IHsga2V5ID0gJycgfSA9IENPTVBPTkVOVC5nZXRNYWluQ29tcG9uZW50KG5vZGUpIHx8IHt9O1xuICAgICAgICByZXR1cm4ga2V5O1xuICAgIH0sXG4gICAgc3RyaW5nVG9Db21wb25lbnROYW1lOiAobmFtZSA9ICcnKSA9PiB7XG4gICAgICAgIGNvbnN0IHRyaW1OYW1lID0gbmFtZS50cmltKCk7XG4gICAgICAgIGlmICghdHJpbU5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzdHJOYW1lID0gdHJpbU5hbWUucmVwbGFjZSgvW1xcV10vZywgJycpO1xuICAgICAgICBjb25zdCBmaXJzdENoYXIgPSBzdHJOYW1lLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICBpZiAoc3RyTmFtZS5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiBmaXJzdENoYXI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZpcnN0Q2hhciArIHN0ck5hbWUuc2xpY2UoMSk7XG4gICAgfSxcbiAgICBnZXRJbmZvOiAobm9kZSwgbm9kZUluZm8gPSB7fSkgPT4ge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGNvbnN0IGlkID0gQ09NUE9ORU5ULmdldENvbXBvbmVudElkKG5vZGUpO1xuICAgICAgICBjb25zdCBtYXRjaFRva2VuID0gaWQgPyBDT05GSUcuZ2V0VG9rZW4oKVtpZF0gOiAnJztcbiAgICAgICAgaWYgKCFtYXRjaFRva2VuKSB7XG4gICAgICAgICAgICByZXR1cm4gbm9kZUluZm87XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyBERUZBVUxUID0ge30gfSA9IG1hdGNoVG9rZW47XG4gICAgICAgIHJldHVybiBvYmpNZXJnZShub2RlSW5mbywgREVGQVVMVCk7XG4gICAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IENPTVBPTkVOVDtcbiIsImltcG9ydCBDT01QT05FTlQgZnJvbSBcIi4vQ09NUE9ORU5UXCI7XG5jb25zdCBDT05GSUdfREVGQVVMVCA9IHtcbiAgICBpc0pTWDogZmFsc2UsXG4gICAgaWdub3JlQ2xhc3NOYW1lOiBbXSxcbiAgICB0b2tlbnM6IHt9XG59O1xuY29uc3QgVkVSU0lPTiA9IFwiMS4wXCI7XG5jb25zdCBDT05GSUcgPSB7XG4gICAga2V5OiBgVG9rZW5Ub0NvZGUtJHtWRVJTSU9OfWAsXG4gICAgc3RvcmU6IENPTkZJR19ERUZBVUxULFxuICAgIGNoYW5nZUpTWDogKHZhbHVlKSA9PiB7XG4gICAgICAgIGNvbnN0IHN0b3JlID0gQ09ORklHLmdldEN1cnJlbnQoKTtcbiAgICAgICAgLy8g6YeN572u5Zue56ys5LiA5LiqXG4gICAgICAgIHN0b3JlLmlzSlNYID0gdmFsdWU7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHN0b3JlKTtcbiAgICAgICAgZmlnbWEuY2xpZW50U3RvcmFnZS5zZXRBc3luYyhDT05GSUcua2V5LCBzdG9yZSk7XG4gICAgfSxcbiAgICBlZGl0OiAoZGF0YSkgPT4ge1xuICAgICAgICBDT05GSUcuc3RvcmUgPSBkYXRhO1xuICAgICAgICBmaWdtYS5jbGllbnRTdG9yYWdlLnNldEFzeW5jKENPTkZJRy5rZXksIGRhdGEpO1xuICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBhbGVydE1zZzogYFNhdmUgc3VjY2Vzc2BcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBpc0pTWDogKCkgPT4ge1xuICAgICAgICByZXR1cm4gISFDT05GSUcuc3RvcmUuaXNKU1g7XG4gICAgfSxcbiAgICBpbml0OiAoKSA9PiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgZmlnbWEuY2xpZW50U3RvcmFnZS5nZXRBc3luYyhDT05GSUcua2V5KS50aGVuKChyZXQgPSBudWxsKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJldCkge1xuICAgICAgICAgICAgICAgICAgICBDT05GSUcuc3RvcmUgPSByZXQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyDmsqHmnInnvJPlrZjliJvlu7rkuIDkuKrmlrDnmoRcbiAgICAgICAgICAgICAgICAgICAgZmlnbWEuY2xpZW50U3RvcmFnZS5zZXRBc3luYyhDT05GSUcua2V5LCBDT05GSUdfREVGQVVMVCk7XG4gICAgICAgICAgICAgICAgICAgIENPTkZJRy5zdG9yZSA9IENPTkZJR19ERUZBVUxUO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXNvbHZlKENPTkZJRy5nZXRUb2tlbigpKTtcbiAgICAgICAgICAgIH0pLmNhdGNoKHJlamVjdCk7XG4gICAgICAgIH0pKTtcbiAgICB9LFxuICAgIGdldEN1cnJlbnQ6ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIENPTkZJRy5zdG9yZTtcbiAgICB9LFxuICAgIGdldFRva2VuOiAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgdG9rZW5zID0gbnVsbCB9ID0gQ09ORklHLnN0b3JlIHx8IHt9O1xuICAgICAgICByZXR1cm4gdG9rZW5zID8gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0b2tlbnMpKSA6IG51bGw7XG4gICAgfSxcbiAgICBnZXRJbmZvQnlJZDogKGlkLCB0eXBlID0gXCJERUZBVUxUXCIpID0+IHtcbiAgICAgICAgaWYgKCEoaWQgJiYgKHR5cGVvZiBpZCA9PT0gJ3N0cmluZycpKSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyBrZXkgPSAnJyB9ID0gZmlnbWEuZ2V0U3R5bGVCeUlkKGlkKSB8fCB7fTtcbiAgICAgICAgaWYgKCFrZXkpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHRva2VuQ29uZmlnID0gQ09ORklHLmdldFRva2VuKCkgfHwge307XG4gICAgICAgIGNvbnN0IG1hdGNoVG9rZW4gPSB0b2tlbkNvbmZpZ1trZXldIHx8IHt9O1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnZ2V0SW5mb0J5SWQnLCBtYXRjaFRva2VuLCB0eXBlKVxuICAgICAgICAvLyDlpoLmnpzmnInoh6rlrprkuYnnlKjoh6rlrprkuYnnmoRcbiAgICAgICAgcmV0dXJuIG1hdGNoVG9rZW5bdHlwZV0gfHwgbWF0Y2hUb2tlbi5ERUZBVUxUIHx8IG51bGw7XG4gICAgfSxcbiAgICBnZXRTZWxlY3Rpb25Ub2tlbnM6IChzZWxlY3Rpb24pID0+IHtcbiAgICAgICAgY29uc3QgeyB0b2tlbnMgPSB7fSB9ID0gQ09ORklHLnN0b3JlO1xuICAgICAgICBpZiAoIXNlbGVjdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBzZWxlY3Rpb25Ub2tlbnM6IG51bGxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbWF0Y2hUb2tlbiA9IHt9O1xuICAgICAgICAvLyDlpoLmnpzmmK/nu4Tku7ZcbiAgICAgICAgaWYgKENPTVBPTkVOVC5pc0NvbXBvbmVudChzZWxlY3Rpb24pKSB7XG4gICAgICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgICAgIGNvbnN0IHsga2V5LCBuYW1lLCB0eXBlIH0gPSBDT01QT05FTlQuZ2V0TWFpbkNvbXBvbmVudChzZWxlY3Rpb24pO1xuICAgICAgICAgICAgY29uc3QgZmluZFRva2VuID0gdG9rZW5zW2tleV0gfHwge307XG4gICAgICAgICAgICBtYXRjaFRva2VuW2tleV0gPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oeyBERUZBVUxUOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogW11cbiAgICAgICAgICAgICAgICB9IH0sIGZpbmRUb2tlbiksIHsgX3Rva2VuTmFtZTogbmFtZSwgX3Rva2VuVHlwZTogdHlwZSB9KTtcbiAgICAgICAgfVxuICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgW3NlbGVjdGlvbi5maWxsU3R5bGVJZCwgc2VsZWN0aW9uLnRleHRTdHlsZUlkLCBzZWxlY3Rpb24uc3Ryb2tlU3R5bGVJZCwgc2VsZWN0aW9uLmVmZmVjdFN0eWxlSWQsIHNlbGVjdGlvbi5ncmlkU3R5bGVJZF0uZm9yRWFjaCgoaXRlbSwga2V5KSA9PiB7XG4gICAgICAgICAgICBpZiAoIWl0ZW0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB7IGtleTogc3R5bGVLZXksIG5hbWUsIHR5cGUgfSA9IGZpZ21hLmdldFN0eWxlQnlJZChpdGVtKSB8fCB7fTtcbiAgICAgICAgICAgIGlmICghc3R5bGVLZXkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgZXh0cmFUb2tlbiA9IG51bGw7XG4gICAgICAgICAgICAvLyDlpoLmnpzmnIkgZmlsbFN0eWxlSWRcbiAgICAgICAgICAgIGlmIChrZXkgPT09IDApIHtcbiAgICAgICAgICAgICAgICBleHRyYVRva2VuID0ge1xuICAgICAgICAgICAgICAgICAgICAvLyDlj6/ku6Xpop3lpJblr7nmloflrZfov5vooYzorr7nva5cbiAgICAgICAgICAgICAgICAgICAgXCJURVhUXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogW11cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtYXRjaFRva2VuW3N0eWxlS2V5XSA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHsgREVGQVVMVDoge1xuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFtdXG4gICAgICAgICAgICAgICAgfSB9LCBleHRyYVRva2VuKSwgdG9rZW5zW3N0eWxlS2V5XSksIHsgX25vZGVOYW1lOiBuYW1lLCBfdG9rZW5UeXBlOiB0eXBlIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNlbGVjdGlvblRva2VuczogbWF0Y2hUb2tlblxuICAgICAgICB9O1xuICAgIH0sXG4gICAgLyoqXG4gICAgICog6I635Y+W5omA5pyJ55qEIFRva2VuIOWMheaLrCBDb21wb25lbnRcbiAgICAgKi9cbiAgICBnZXRBbGxUb2tlbnM6ICgpID0+IHtcbiAgICAgICAgY29uc3QgbmFtZSA9IGZpZ21hLnJvb3QubmFtZTtcbiAgICAgICAgY29uc3QgY29tcG9uZW50cyA9IGZpZ21hLnJvb3QuZmluZEFsbChjID0+IHtcbiAgICAgICAgICAgIGlmIChjLnR5cGUgPT09ICdDT01QT05FTlRfU0VUJykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGMudHlwZSAhPT0gJ0NPTVBPTkVOVCcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYy5wYXJlbnQudHlwZSA9PT0gJ0NPTVBPTkVOVF9TRVQnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCB0b2tlbiA9IHt9O1xuICAgICAgICBjb25zdCBhZGRDb25maWcgPSAoZGF0YSA9IFtdKSA9PiB7XG4gICAgICAgICAgICBkYXRhLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICB0b2tlbltpdGVtLmlkXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogaXRlbS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBpdGVtLnR5cGVcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGFkZENvbmZpZyhjb21wb25lbnRzKTtcbiAgICAgICAgYWRkQ29uZmlnKGZpZ21hLmdldExvY2FsUGFpbnRTdHlsZXMoKSk7XG4gICAgICAgIGFkZENvbmZpZyhmaWdtYS5nZXRMb2NhbFRleHRTdHlsZXMoKSk7XG4gICAgICAgIGFkZENvbmZpZyhmaWdtYS5nZXRMb2NhbEVmZmVjdFN0eWxlcygpKTtcbiAgICAgICAgYWRkQ29uZmlnKGZpZ21hLmdldExvY2FsR3JpZFN0eWxlcygpKTtcbiAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgZ290QWxsVG9rZW5zOiB7XG4gICAgICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgICAgICBpZ25vcmVDbGFzc05hbWU6ICcnLFxuICAgICAgICAgICAgICAgIHRva2VuXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5leHBvcnQgZGVmYXVsdCBDT05GSUc7XG4iLCJ2YXIgX19yZXN0ID0gKHRoaXMgJiYgdGhpcy5fX3Jlc3QpIHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gICAgdmFyIHQgPSB7fTtcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcbiAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XG4gICAgICAgIH1cbiAgICByZXR1cm4gdDtcbn07XG5pbXBvcnQgQ09NUE9ORU5UIGZyb20gXCIuL0NPTVBPTkVOVFwiO1xuaW1wb3J0IEZJTEwgZnJvbSBcIi4vdG9rZW4vRklMTFwiO1xuaW1wb3J0IFRFWFQgZnJvbSBcIi4vdG9rZW4vVEVYVFwiO1xuaW1wb3J0IFNUUk9LRSBmcm9tIFwiLi90b2tlbi9TVFJPS0VcIjtcbmltcG9ydCBHUklEIGZyb20gXCIuL3Rva2VuL0dSSURcIjtcbmltcG9ydCBGTEVYIGZyb20gXCIuL3Rva2VuL0ZMRVhcIjtcbmltcG9ydCBTQUNTUyBmcm9tIFwiLi9TQUNTU1wiO1xuaW1wb3J0IFVUSUxTIGZyb20gXCIuL1VUSUxTXCI7XG5pbXBvcnQgRUZGRUNUIGZyb20gXCIuL3Rva2VuL0VGRkVDVFwiO1xuaW1wb3J0IE9USEVSUyBmcm9tIFwiLi90b2tlbi9PVEhFUlNcIjtcbmltcG9ydCBDT05GSUcgZnJvbSBcIi4vQ09ORklHXCI7XG5jb25zdCBOT0RFID0ge1xuICAgIC8qKlxuICAgICAqIOWQiOW5tuS4pOS4qmluZm9cbiAgICAgKiBAcGFyYW0gYVxuICAgICAqIEBwYXJhbSBiXG4gICAgICovXG4gICAgZXh0ZW5kSW5mbzogKGEsIGIpID0+IHtcbiAgICAgICAgaWYgKCFiKSB7XG4gICAgICAgICAgICByZXR1cm4gYTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IGNsYXNzTmFtZTogY2xhc3NOYW1lQSA9ICcnLCBpZ25vcmVDbGFzc05hbWU6IGlnbm9yZUNsYXNzTmFtZUEgPSAnJywgY29tcG9uZW50UHJvcHM6IGNvbXBvbmVudFByb3BzQSA9IHt9LCBwcm9wczogcHJvcHNBID0ge30sIGh0bWxQcm9wczogaHRtbFByb3BzQSA9IHt9IH0gPSBhLCByZXN0QSA9IF9fcmVzdChhLCBbXCJjbGFzc05hbWVcIiwgXCJpZ25vcmVDbGFzc05hbWVcIiwgXCJjb21wb25lbnRQcm9wc1wiLCBcInByb3BzXCIsIFwiaHRtbFByb3BzXCJdKTtcbiAgICAgICAgY29uc3QgeyBjbGFzc05hbWU6IGNsYXNzTmFtZUIgPSAnJywgaWdub3JlQ2xhc3NOYW1lOiBpZ25vcmVDbGFzc05hbWVCID0gJycsIGNvbXBvbmVudFByb3BzOiBjb21wb25lbnRQcm9wc0IgPSB7fSwgcHJvcHM6IHByb3BzQiA9IHt9LCBodG1sUHJvcHM6IGh0bWxQcm9wc0IgPSB7fSwgY2hpbGRyZW4gfSA9IGIsIHJlc3RCID0gX19yZXN0KGIsIFtcImNsYXNzTmFtZVwiLCBcImlnbm9yZUNsYXNzTmFtZVwiLCBcImNvbXBvbmVudFByb3BzXCIsIFwicHJvcHNcIiwgXCJodG1sUHJvcHNcIiwgXCJjaGlsZHJlblwiXSk7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IGAke2NsYXNzTmFtZUF9ICR7Y2xhc3NOYW1lQn1gLnRyaW0oKSwgaWdub3JlQ2xhc3NOYW1lOiBgJHtpZ25vcmVDbGFzc05hbWVBfSAke2lnbm9yZUNsYXNzTmFtZUJ9YC50cmltKCksIGh0bWxQcm9wczogT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBodG1sUHJvcHNBKSwgaHRtbFByb3BzQiksIGNvbXBvbmVudFByb3BzOiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGNvbXBvbmVudFByb3BzQSksIGNvbXBvbmVudFByb3BzQikgfSwgcmVzdEEpLCByZXN0Qik7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiDlpoLmnpzkuIDkuKrlhYPntKDlhoXpg6jlj6rmnInlh6DkvZXlm77lvaLvvIzpgqPkuYjlj6rmmL7npLrlhbbnu5PmnoRcbiAgICAgKi9cbiAgICBpc1N0cnVjdE5vZGU6IChub2RlKSA9PiB7XG4gICAgICAgIC8vIOS7pSPlj7flvIDlpLRcbiAgICAgICAgaWYgKG5vZGUubmFtZS5zdGFydHNXaXRoKFwiI1wiKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeWVzVHlwZXMgPSBbJ1JFQ1RBTkdMRScsICdWRUNUT1InLCAnU1RBUicsICdMSU5FJywgJ1BPTFlHT04nLCAnRUxMSVBTRScsICdTTElDRSddO1xuICAgICAgICAvLyDlpoLmnpzmnKzouqvlsLHmmK/ov5nkupvlhYPntKDpgqPkuYjkuZ/mmK/nm7TmjqXovpPlh7pcbiAgICAgICAgaWYgKHllc1R5cGVzLmluZGV4T2Yobm9kZS50eXBlKSA+IC0xKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobm9kZS50eXBlID09PSAnVEVYVCcpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGNvbnN0IHsgY2hpbGRyZW4gPSBbXSB9ID0gbm9kZTtcbiAgICAgICAgaWYgKCFjaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIOaJvuWIsOS6huS4jeWQiOazleWFg+e0oO+8iOS4jeWcqOS4iumdoueahOWHoOS9leWIl+ihqOmHjOmdou+8iVxuICAgICAgICBjb25zdCBnb3RObyA9IGNoaWxkcmVuLmZpbmQoKGl0ZW0pID0+IGl0ZW0udmlzaWJsZSAmJiB5ZXNUeXBlcy5pbmRleE9mKGl0ZW0udHlwZSkgPT09IC0xKTtcbiAgICAgICAgcmV0dXJuICFnb3RObztcbiAgICB9LFxuICAgIGlzUmVuZGVyQ2hpbGRyZW46IChub2RlKSA9PiB7XG4gICAgICAgIGlmICghKG5vZGUudHlwZSA9PT0gJ0lOU1RBTkNFJyB8fCBub2RlLnR5cGUgPT09ICdDT01QT05FTlQnKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIOWPquacieS4gOS4quWtkOWFg+e0oFxuICAgICAgICBpZiAobm9kZS5jaGlsZHJlbi5sZW5ndGggIT09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBjb25zdCBvbmx5Q2hpbGRyZW4gPSBub2RlLmNoaWxkcmVuWzBdO1xuICAgICAgICAvLyBpZiAob25seUNoaWxkcmVuLnR5cGUgPT09ICdJTlNUQU5DRScpIHtcbiAgICAgICAgLy8gICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgLy8gfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSxcbiAgICBnZXROb2RlSW5mbzogKG5vZGUpID0+IHtcbiAgICAgICAgaWYgKCFub2RlLnZpc2libGUgfHwgbm9kZS5uYW1lLnN0YXJ0c1dpdGgoXCJfXCIpKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICAvLyDnm7TmjqXmuLLmn5PlrZDlhYPntKBcbiAgICAgICAgaWYgKE5PREUuaXNSZW5kZXJDaGlsZHJlbihub2RlKSkge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZTtcbiAgICAgICAgICAgIHJldHVybiBOT0RFLmdldE5vZGVJbmZvKG5vZGUuY2hpbGRyZW5bMF0pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGlzU3RydWN0Tm9kZSA9IE5PREUuaXNTdHJ1Y3ROb2RlKG5vZGUpO1xuICAgICAgICBsZXQgbm9kZUluZm8gPSB7XG4gICAgICAgICAgICBpZ25vcmVDbGFzc05hbWU6IFtdLFxuICAgICAgICAgICAgY2xhc3NOYW1lOiBbXSxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXVxuICAgICAgICB9O1xuICAgICAgICBpZiAoaXNTdHJ1Y3ROb2RlKSB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBub2RlSW5mby50YWdOYW1lID0gJ2knO1xuICAgICAgICB9XG4gICAgICAgIG5vZGVJbmZvID0gQ09NUE9ORU5ULmdldEluZm8obm9kZSwgbm9kZUluZm8pO1xuICAgICAgICBub2RlSW5mbyA9IEZJTEwuZ2V0SW5mbyhub2RlLCBub2RlSW5mbyk7XG4gICAgICAgIG5vZGVJbmZvID0gVEVYVC5nZXRJbmZvKG5vZGUsIG5vZGVJbmZvKTtcbiAgICAgICAgbm9kZUluZm8gPSBTVFJPS0UuZ2V0SW5mbyhub2RlLCBub2RlSW5mbyk7XG4gICAgICAgIG5vZGVJbmZvID0gR1JJRC5nZXRJbmZvKG5vZGUsIG5vZGVJbmZvKTtcbiAgICAgICAgbm9kZUluZm8gPSBFRkZFQ1QuZ2V0SW5mbyhub2RlLCBub2RlSW5mbyk7XG4gICAgICAgIG5vZGVJbmZvID0gT1RIRVJTLmdldEluZm8obm9kZSwgbm9kZUluZm8pO1xuICAgICAgICBub2RlSW5mbyA9IEZMRVguZ2V0SW5mbyhub2RlLCBub2RlSW5mbyk7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgaWYgKChpc1N0cnVjdE5vZGUgJiYgU3RyaW5nKG5vZGVJbmZvID09PSBudWxsIHx8IG5vZGVJbmZvID09PSB2b2lkIDAgPyB2b2lkIDAgOiBub2RlSW5mby5yZW5kZXJIZWlnaHQpICE9PSAnMCcpIHx8IFN0cmluZyhub2RlSW5mbyA9PT0gbnVsbCB8fCBub2RlSW5mbyA9PT0gdm9pZCAwID8gdm9pZCAwIDogbm9kZUluZm8ucmVuZGVyV2lkdGgpID09PSAnMScpIHtcbiAgICAgICAgICAgIG5vZGVJbmZvLmNsYXNzTmFtZS5wdXNoKFNBQ1NTLmFkZCgndycsIHBhcnNlSW50KFN0cmluZyhub2RlLndpZHRoKSkpKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGlmICgoaXNTdHJ1Y3ROb2RlICYmIFN0cmluZyhub2RlSW5mbyA9PT0gbnVsbCB8fCBub2RlSW5mbyA9PT0gdm9pZCAwID8gdm9pZCAwIDogbm9kZUluZm8ucmVuZGVySGVpZ2h0KSAhPT0gJzAnKSB8fCBTdHJpbmcobm9kZUluZm8gPT09IG51bGwgfHwgbm9kZUluZm8gPT09IHZvaWQgMCA/IHZvaWQgMCA6IG5vZGVJbmZvLnJlbmRlckhlaWdodCkgPT09ICcxJykge1xuICAgICAgICAgICAgbm9kZUluZm8uY2xhc3NOYW1lLnB1c2goU0FDU1MuYWRkKCdoJywgcGFyc2VJbnQoU3RyaW5nKG5vZGUuaGVpZ2h0KSkpKTtcbiAgICAgICAgfVxuICAgICAgICBub2RlSW5mby5jaGlsZHJlbiA9ICgoKSA9PiB7XG4gICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICBpZiAobm9kZS50eXBlID09PSAnVEVYVCcpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0ZXh0cyA9IFRFWFQuZ2V0VGV4dENoaWxkcmVuKG5vZGUpO1xuICAgICAgICAgICAgICAgIC8vIOWkmuauteaWh+acrOi/memHjOimgeS/ruWkjeS4gOS4i+W1jOWll+eahOagh+etvu+8jOacieWPr+iDveWPmOaIkCBzdHJvbmcgPiBwIOi/meagt+eahOe7k+aehFxuICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICBpZiAoKChfYSA9IHRleHRzWzBdKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EudGFnTmFtZSkgPT09ICdwJykge1xuICAgICAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgICAgICAgIG5vZGVJbmZvLnRhZ05hbWUgPSBcImRpdlwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdGV4dHM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaXNTdHJ1Y3ROb2RlIHx8IG5vZGVJbmZvLmNoaWxkcmVuID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8g5riy5p+T5paH5a2X6IqC54K5XG4gICAgICAgICAgICAvLyBpZiAoU3RyaW5nKG5vZGVJbmZvLmNoaWxkcmVuKSA9PT0gJ1RFWFQnKSB7XG4gICAgICAgICAgICAvLyAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgLy8gICAgIHJldHVybiBub2RlLmZpbmRBbGwoYyA9PiBjLnR5cGUgPT09ICdURVhUJyAmJiBjLnZpc2libGUpLm1hcCgoYykgPT4gYy5jaGFyYWN0ZXJzKTtcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIHJldHVybiBOT0RFLmdldE5vZGVzSW5mbyhub2RlLmNoaWxkcmVuKTtcbiAgICAgICAgfSkoKTtcbiAgICAgICAgLy8g5pW05Liq6aG555uu6YO95b+955Wl55qEIGNsYXNzTmFtZVxuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGNvbnN0IHsgaWdub3JlQ2xhc3NOYW1lID0gW10gfSA9IENPTkZJRy5nZXRDdXJyZW50KCkgfHwge307XG4gICAgICAgIG5vZGVJbmZvLmNsYXNzTmFtZSA9IFVUSUxTLmNsZWFyQ2xhc3NOYW1lKG5vZGVJbmZvLmNsYXNzTmFtZSwgWy4uLm5vZGVJbmZvLmlnbm9yZUNsYXNzTmFtZSwgLi4uaWdub3JlQ2xhc3NOYW1lXSk7XG4gICAgICAgIGRlbGV0ZSBub2RlSW5mby5pZ25vcmVDbGFzc05hbWU7XG4gICAgICAgIGlmICgobm9kZUluZm8uY2hpbGRyZW4gaW5zdGFuY2VvZiBBcnJheSkgJiYgbm9kZUluZm8uY2hpbGRyZW4ubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICBjb25zdCBjaGlsZHJlbkluZm8gPSBub2RlSW5mby5jaGlsZHJlblswXTtcbiAgICAgICAgICAgIC8vIOWmguaenOeItuWFg+e0oOWSjOWtkOWFg+e0oCB0YWdOYW1lIOebuOWQjOWQiOW5tiBjbGFzc05hbWVcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY2hpbGRyZW5JbmZvICE9PSAnc3RyaW5nJyAmJiBjaGlsZHJlbkluZm8udGFnTmFtZSA9PT0gbm9kZUluZm8udGFnTmFtZSkge1xuICAgICAgICAgICAgICAgIGNoaWxkcmVuSW5mby5jbGFzc05hbWUgPSBbLi4uY2hpbGRyZW5JbmZvLmNsYXNzTmFtZSwgLi4ubm9kZUluZm8uY2xhc3NOYW1lXTtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2hpbGRyZW5JbmZvO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHtub2RlSW5mb30pO1xuICAgICAgICByZXR1cm4gbm9kZUluZm87XG4gICAgfSxcbiAgICBzb3J0OiAobm9kZXMgPSBbXSkgPT4ge1xuICAgICAgICByZXR1cm4gWy4uLm5vZGVzXS5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhWSA9IGEueSArIGEuaGVpZ2h0O1xuICAgICAgICAgICAgY29uc3QgYlkgPSBiLnkgKyBiLmhlaWdodDtcbiAgICAgICAgICAgIGlmIChhLnkgPT09IGIueSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBhLnggLSBiLng7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYVkgLSBiWTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBnZXROb2Rlc0luZm86IChub2RlcyA9IFtdKSA9PiB7XG4gICAgICAgIGxldCBpbmZvID0gW107XG4gICAgICAgIC8vIOmcgOimgeaOkuW6j+S4gOS4i1xuICAgICAgICBjb25zdCBzb3J0Tm9kZXMgPSBOT0RFLnNvcnQobm9kZXMpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhub2Rlcywgc29ydE5vZGVzKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHNvcnROb2Rlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgY29uc3Qgbm9kZUluZm8gPSBOT0RFLmdldE5vZGVJbmZvKHNvcnROb2Rlc1tpXSk7XG4gICAgICAgICAgICBpZiAoIW5vZGVJbmZvKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobm9kZUluZm8gaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgICAgIGluZm8gPSBbLi4uaW5mbywgLi4ubm9kZUluZm9dO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaW5mby5wdXNoKG5vZGVJbmZvKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW5mbztcbiAgICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgTk9ERTtcbiIsImNvbnN0IFNBQ1NTID0ge1xuICAgIGRhdGE6IHt9LFxuICAgIGluaXQ6ICgpID0+IHtcbiAgICAgICAgU0FDU1MuZGF0YSA9IHt9O1xuICAgIH0sXG4gICAgbmFtZU1hcDoge1xuICAgICAgICAnZnMnOiAnZm9udC1zaXplJyxcbiAgICAgICAgJ2xoJzogJ2xpbmUtaGVpZ2h0JyxcbiAgICAgICAgJ2xzJzogJ2xldHRlci1zcGFjZScsXG4gICAgICAgICdmZic6ICdmb250LWZhbWlseScsXG4gICAgICAgICdwdCc6ICdwYWRkaW5nLXRvcCcsXG4gICAgICAgICdwcic6ICdwYWRkaW5nLXJpZ2h0JyxcbiAgICAgICAgJ3BiJzogJ3BhZGRpbmctYm90dG9tJyxcbiAgICAgICAgJ3BsJzogJ3BhZGRpbmctbGVmdCcsXG4gICAgICAgICdtdCc6ICdtYXJnaW4tdG9wJyxcbiAgICAgICAgJ21yJzogJ21hcmdpbi1yaWdodCcsXG4gICAgICAgICdtYic6ICdtYXJnaW4tYm90dG9tJyxcbiAgICAgICAgJ21sJzogJ21hcmdpbi1sZWZ0JyxcbiAgICAgICAgJ2gnOiAnaGVpZ2h0JyxcbiAgICAgICAgJ3cnOiAnd2lkdGgnLFxuICAgICAgICAnYnRscic6ICdib3JkZXItdG9wLWxlZnQtcmFkaXVzJyxcbiAgICAgICAgJ2J0cnInOiAnYm9yZGVyLXRvcC1yaWdodC1yYWRpdXMnLFxuICAgICAgICAnYmJycic6ICdib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1cycsXG4gICAgICAgICdiYmxyJzogJ2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXMnLFxuICAgICAgICAnYnInOiAnYm9yZGVyLXJhZGl1cydcbiAgICB9LFxuICAgIGdldENsYXNzU2VsZWN0b3JCeU5hbWU6IChjbGFzc05hbWUgPSAnJykgPT4ge1xuICAgICAgICBpZiAoY2xhc3NOYW1lLmluZGV4T2YoJy4nKSA+IC0xKSB7XG4gICAgICAgICAgICBjbGFzc05hbWUgPSBjbGFzc05hbWUucmVwbGFjZSgvXFwuL2csICdcXFxcLicpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjbGFzc05hbWUuaW5kZXhPZignOicpID4gLTEpIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IGNsYXNzTmFtZS5yZXBsYWNlKC9cXDovZywgJ1xcXFw6Jyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNsYXNzTmFtZS5pbmRleE9mKCclJykgPiAtMSkge1xuICAgICAgICAgICAgY2xhc3NOYW1lID0gY2xhc3NOYW1lLnJlcGxhY2UoL1xcJS9nLCAnXFxcXCUnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2xhc3NOYW1lO1xuICAgIH0sXG4gICAgZ2V0U3RyaW5nOiAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBTQUNTUy5kYXRhO1xuICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoZGF0YSkuc29ydCgpO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBrZXlzLm1hcCgobmFtZSkgPT4gYC4ke1NBQ1NTLmdldENsYXNzU2VsZWN0b3JCeU5hbWUobmFtZSl9eyR7ZGF0YVtuYW1lXX07fWApLmpvaW4oJ1xcbicpO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0sXG4gICAgYWRkOiAobmFtZSA9ICcnLCB2YWx1ZSwgdW5pdCA9ICdweCcpID0+IHtcbiAgICAgICAgaWYgKCFuYW1lIHx8ICF2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHByb3BOYW1lID0gU0FDU1MubmFtZU1hcFtuYW1lXTtcbiAgICAgICAgaWYgKCFwcm9wTmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG4gICAgICAgIC8vIOWPquS/neeVmeS4pOS9jeWwj+aVsFxuICAgICAgICBjb25zdCB1c2VWYWx1ZSA9IE51bWJlcih2YWx1ZSkgPyBwYXJzZUZsb2F0KE51bWJlcih2YWx1ZSkudG9GaXhlZCgyKSkgOiB2YWx1ZTtcbiAgICAgICAgLy8g5aaC5p6c5pivIHB4IOS4jemcgOimgea4suafk1xuICAgICAgICBjb25zdCBjbGFzc1VuaXQgPSB1bml0ID09PSAncHgnID8gJycgOiB1bml0O1xuICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBgJHtuYW1lfSR7dXNlVmFsdWV9JHtjbGFzc1VuaXR9YDtcbiAgICAgICAgU0FDU1MuZGF0YVtjbGFzc05hbWVdID0gYCR7cHJvcE5hbWV9OiR7dXNlVmFsdWV9JHt1bml0fWA7XG4gICAgICAgIHJldHVybiBjbGFzc05hbWU7XG4gICAgfSxcbiAgICBhZGRGb250RmFtaWx5OiAodmFsdWUpID0+IHtcbiAgICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHZhbHVlT2sgPSB2YWx1ZS5yZXBsYWNlKC9bXFxXXS9nLCAnJykudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gYGZmXyR7dmFsdWVPa31gO1xuICAgICAgICBTQUNTUy5kYXRhW2NsYXNzTmFtZV0gPSBgZm9udC1mYW1pbHk6XCIke3ZhbHVlfVwiYDtcbiAgICAgICAgcmV0dXJuIGNsYXNzTmFtZTtcbiAgICB9LFxuICAgIGFkZENvbG9yOiAocmdiYSA9IFtdKSA9PiB7XG4gICAgICAgIGlmICghcmdiYSAmJiByZ2JhLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IGBjXyR7cmdiYS5qb2luKCcnKX1gO1xuICAgICAgICBTQUNTUy5kYXRhW2NsYXNzTmFtZV0gPSBgY29sb3I6cmdiYSgke3JnYmEuam9pbignLCcpfSlgO1xuICAgICAgICByZXR1cm4gY2xhc3NOYW1lO1xuICAgIH0sXG4gICAgYWRkQmdDb2xvcjogKHJnYmEgPSBbXSkgPT4ge1xuICAgICAgICBpZiAoIXJnYmEgJiYgcmdiYS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBgYmNfJHtyZ2JhLmpvaW4oJycpfWA7XG4gICAgICAgIFNBQ1NTLmRhdGFbY2xhc3NOYW1lXSA9IGBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoJHtyZ2JhLmpvaW4oJywnKX0pYDtcbiAgICAgICAgcmV0dXJuIGNsYXNzTmFtZTtcbiAgICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgU0FDU1M7XG4iLCJjb25zdCBVVElMUyA9IHtcbiAgICBpc0Jsb2NrOiAodGFnTmFtZSA9ICcnKSA9PiB7XG4gICAgICAgIGNvbnN0IGJsb2NrVGFnID0gWydkaXYnLCAnaDEnLCAnaDInLCAnaDMnLCAnaDQnLCAnaDUnLCAnaDYnLCAncCddO1xuICAgICAgICByZXR1cm4gYmxvY2tUYWcuaW5kZXhPZih0YWdOYW1lKSA+IC0xO1xuICAgIH0sXG4gICAgaXNTZWxmVGFnOiAodGFnTmFtZSA9ICcnKSA9PiB7XG4gICAgICAgIGNvbnN0IHNlbGZUYWcgPSBbJ2ltZycsICdsaW5rJywgJ21ldGEnLCAnYnInLCAnYnInLCAnaHInLCAnaW5wdXQnLCAnY29sJywgJ2ZyYW1lJywgJ2FyZWEnLCAncGFyYW0nLCAnb2JqZWN0JywgJ2VtYmVkJywgJ2tleWdlbicsICdzb3VyY2UnXTtcbiAgICAgICAgcmV0dXJuIHNlbGZUYWcuaW5kZXhPZih0YWdOYW1lKSA+IC0xO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICog5Y676YeN5ZKM5Y6756m6XG4gICAgICogQHBhcmFtIGFyclN0clxuICAgICAqL1xuICAgIGNsZWFyQ2xhc3NOYW1lOiAoY2xhc3NOYW1lID0gW10sIGlnbm9yZUNsYXNzTmFtZSA9IFtdKSA9PiB7XG4gICAgICAgIGlmICghY2xhc3NOYW1lIHx8IGNsYXNzTmFtZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZXN1bHQgPSBbXTtcbiAgICAgICAgY2xhc3NOYW1lLmZvckVhY2goKGl0ZW0gPSAnJykgPT4ge1xuICAgICAgICAgICAgaWYgKGl0ZW0gJiYgaXRlbSAhPT0gJ251bGwnICYmIHJlc3VsdC5pbmRleE9mKGl0ZW0pID09PSAtMSAmJiBpZ25vcmVDbGFzc05hbWUuaW5kZXhPZihpdGVtKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChpdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IFVUSUxTO1xuIiwiaW1wb3J0IEhUTUwgZnJvbSBcIi4vSFRNTFwiO1xuaW1wb3J0IEpTWCBmcm9tIFwiLi9KU1hcIjtcbmNvbnN0IERPTSA9IHtcbiAgICByZW5kZXI6IChvYmosIGlzSlNYKSA9PiB7XG4gICAgICAgIGlmIChpc0pTWCkge1xuICAgICAgICAgICAgcmV0dXJuIEpTWC5nZXRJdGVtRG9tKG9iaik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIEhUTUwuZ2V0SXRlbURvbShvYmopO1xuICAgIH1cbn07XG5leHBvcnQgZGVmYXVsdCBET007XG4iLCJ2YXIgX19yZXN0ID0gKHRoaXMgJiYgdGhpcy5fX3Jlc3QpIHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gICAgdmFyIHQgPSB7fTtcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcbiAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XG4gICAgICAgIH1cbiAgICByZXR1cm4gdDtcbn07XG5pbXBvcnQgVVRJTFMgZnJvbSBcIi4uL1VUSUxTXCI7XG4vLyBsZWdhbCDlkIjms5XlsZ7mgKdcbi8vIGNvbnN0IGxlZ2FsUHJvcCA9IFsnY2xhc3MnLCAndHlwZScsICduYW1lJywgJ3JvbGUnLCAnZGlzYWJsZWQnLCAnaWQnLCAndGl0bGUnLCAnbGFuZycsICdkaXInLCAndGFiaW5kZXgnLCAnYWNjZXNza2V5JywgJ3NyYycsICdocmVmJywgJ3N0eWxlJywgJ2FyaWEtaGlkZGVuJywgJ3RhcmdldCcsICdyZWwnXTtcbmNvbnN0IEhUTUwgPSB7XG4gICAgZ2V0UHJvcHNTdHJpbmdCeU9iamVjdDogKHByb3BzKSA9PiB7XG4gICAgICAgIGNvbnN0IGFyclByb3BzID0gW107XG4gICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHByb3BzKSkge1xuICAgICAgICAgICAgY29uc3Qgc3RyVmFsdWUgPSB2YWx1ZSBpbnN0YW5jZW9mIEFycmF5ID8gdmFsdWUuam9pbignICcpIDogdmFsdWU7XG4gICAgICAgICAgICBjb25zdCBrZXlOYW1lID0ga2V5ID09PSAnY2xhc3NOYW1lJyA/ICdjbGFzcycgOiBrZXk7XG4gICAgICAgICAgICBzdHJWYWx1ZSAmJiBhcnJQcm9wcy5wdXNoKGAke2tleU5hbWV9PVwiJHtzdHJWYWx1ZX1cImApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhcnJQcm9wcy5qb2luKCcgJyk7XG4gICAgfSxcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgZ2V0SXRlbURvbTogKGl0ZW0pID0+IHtcbiAgICAgICAgaWYgKCFpdGVtKSB7XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyB0YWdOYW1lOiBfdGFnTmFtZSwgY2hpbGRyZW4gPSBbXSB9ID0gaXRlbSwgcHJvcHMgPSBfX3Jlc3QoaXRlbSwgW1widGFnTmFtZVwiLCBcImNoaWxkcmVuXCJdKTtcbiAgICAgICAgY29uc3QgdGFnTmFtZSA9IF90YWdOYW1lID8gX3RhZ05hbWUudG9Mb3dlckNhc2UoKSA6ICdkaXYnO1xuICAgICAgICBjb25zdCBzdHJQcm9wcyA9IEhUTUwuZ2V0UHJvcHNTdHJpbmdCeU9iamVjdChwcm9wcyk7XG4gICAgICAgIGNvbnN0IHRhZ1N0YXJ0ID0gYCR7dGFnTmFtZX0ke3N0clByb3BzID8gYCAke3N0clByb3BzfWAgOiAnJ31gO1xuICAgICAgICBpZiAoVVRJTFMuaXNTZWxmVGFnKHRhZ05hbWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gYDwke3RhZ1N0YXJ0fS8+YDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIGA8JHt0YWdTdGFydH0+PC8ke3RhZ05hbWV9PmA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGA8JHt0YWdTdGFydH0+JHtIVE1MLmdldERvbUJ5QXJyYXkoY2hpbGRyZW4pfTwvJHt0YWdOYW1lfT5gO1xuICAgIH0sXG4gICAgZ2V0RG9tQnlBcnJheTogKG9iaiA9IFtdKSA9PiB7XG4gICAgICAgIHJldHVybiBvYmoubWFwKChpdGVtKSA9PiBIVE1MLmdldEl0ZW1Eb20oaXRlbSkpLmpvaW4oJycpO1xuICAgIH1cbn07XG5leHBvcnQgZGVmYXVsdCBIVE1MO1xuIiwidmFyIF9fcmVzdCA9ICh0aGlzICYmIHRoaXMuX19yZXN0KSB8fCBmdW5jdGlvbiAocywgZSkge1xuICAgIHZhciB0ID0ge307XG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXG4gICAgICAgIHRbcF0gPSBzW3BdO1xuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xuICAgICAgICB9XG4gICAgcmV0dXJuIHQ7XG59O1xuaW1wb3J0IFVUSUxTIGZyb20gXCIuLi9VVElMU1wiO1xuY29uc3QgSlNYID0ge1xuICAgIGdldFByb3BzU3RyaW5nOiAocHJvcHMpID0+IHtcbiAgICAgICAgY29uc3QgYXJyUHJvcHMgPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMocHJvcHMpKSB7XG4gICAgICAgICAgICBjb25zdCBzdHJWYWx1ZSA9IHZhbHVlIGluc3RhbmNlb2YgQXJyYXkgPyB2YWx1ZS5qb2luKCcgJykgOiB2YWx1ZTtcbiAgICAgICAgICAgIHN0clZhbHVlICYmIGFyclByb3BzLnB1c2goYCR7a2V5fT1cIiR7c3RyVmFsdWV9XCJgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXJyUHJvcHMuam9pbignICcpO1xuICAgIH0sXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGdldEl0ZW1Eb206IChpdGVtKSA9PiB7XG4gICAgICAgIGlmICghaXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICB9XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHtpdGVtfSk7XG4gICAgICAgIGNvbnN0IHsgdGFnTmFtZSA9ICdkaXYnLCBjaGlsZHJlbiA9IFtdIH0gPSBpdGVtLCBwcm9wcyA9IF9fcmVzdChpdGVtLCBbXCJ0YWdOYW1lXCIsIFwiY2hpbGRyZW5cIl0pO1xuICAgICAgICBjb25zdCBzdHJQcm9wcyA9IEpTWC5nZXRQcm9wc1N0cmluZyhwcm9wcyk7XG4gICAgICAgIGNvbnN0IHRhZ1N0YXJ0ID0gYCR7dGFnTmFtZX0ke3N0clByb3BzID8gYCAke3N0clByb3BzfWAgOiAnJ31gO1xuICAgICAgICBpZiAoVVRJTFMuaXNTZWxmVGFnKHRhZ05hbWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gYDwke3RhZ1N0YXJ0fS8+YDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGl0ZW0uY29tcG9uZW50TmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBgPCR7dGFnU3RhcnR9Lz5gO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGA8JHt0YWdTdGFydH0+PC8ke3RhZ05hbWV9PmA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGA8JHt0YWdTdGFydH0+JHtKU1guZ2V0RG9tQnlBcnJheShjaGlsZHJlbil9PC8ke3RhZ05hbWV9PmA7XG4gICAgfSxcbiAgICBnZXREb21CeUFycmF5OiAob2JqID0gW10pID0+IHtcbiAgICAgICAgcmV0dXJuIG9iai5tYXAoKGl0ZW0pID0+IEpTWC5nZXRJdGVtRG9tKGl0ZW0pKS5qb2luKCcnKTtcbiAgICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgSlNYO1xuIiwiY29uc3QgQ09MT1IgPSB7XG4gICAgZ2V0UmdiYUJ5RmlsbDogKHsgY29sb3IsIG9wYWNpdHksIHZpc2libGUgfSkgPT4ge1xuICAgICAgICAvLyDlpoLmnpzkuI3lj6/op4FcbiAgICAgICAgaWYgKCF2aXNpYmxlIHx8IG9wYWNpdHkgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHIgPSBwYXJzZUludChTdHJpbmcoY29sb3IuciAqIDI1NSkpO1xuICAgICAgICBjb25zdCBnID0gcGFyc2VJbnQoU3RyaW5nKGNvbG9yLmcgKiAyNTUpKTtcbiAgICAgICAgY29uc3QgYiA9IHBhcnNlSW50KFN0cmluZyhjb2xvci5iICogMjU1KSk7XG4gICAgICAgIGNvbnN0IGEgPSBTdHJpbmcob3BhY2l0eSkuaW5kZXhPZignLicpID4gLTEgPyBvcGFjaXR5LnRvRml4ZWQoMSkgOiBvcGFjaXR5O1xuICAgICAgICByZXR1cm4gW3IsIGcsIGIsIGFdO1xuICAgIH0sXG59O1xuZXhwb3J0IGRlZmF1bHQgQ09MT1I7XG4iLCJpbXBvcnQgQ09ORklHIGZyb20gXCIuLi9DT05GSUdcIjtcbmltcG9ydCBvYmpNZXJnZSBmcm9tIFwiLi4vLi4vdWkvdXRpbHMvb2JqTWVyZ2VcIjtcbmNvbnN0IEVGRkVDVCA9IHtcbiAgICBnZXRJbmZvOiAobm9kZSwgbm9kZUluZm8pID0+IHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBjb25zdCByZXN1bHQgPSBDT05GSUcuZ2V0SW5mb0J5SWQobm9kZS5lZmZlY3RTdHlsZUlkKTtcbiAgICAgICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgICAgICAgIHJldHVybiBub2RlSW5mbztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb2JqTWVyZ2Uobm9kZUluZm8sIHJlc3VsdCk7XG4gICAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IEVGRkVDVDtcbiIsImltcG9ydCBDT0xPUiBmcm9tIFwiLi9DT0xPUlwiO1xuaW1wb3J0IENPTkZJRyBmcm9tIFwiLi4vQ09ORklHXCI7XG5pbXBvcnQgU0FDU1MgZnJvbSBcIi4uL1NBQ1NTXCI7XG5pbXBvcnQgb2JqTWVyZ2UgZnJvbSBcIi4uLy4uL3VpL3V0aWxzL29iak1lcmdlXCI7XG5jb25zdCBGSUxMID0ge1xuICAgIGdldEZpbGw6IChub2RlKSA9PiB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgY29uc3QgW2ZpcnN0RmlsbF0gPSAodHlwZW9mIG5vZGUuZ2V0UmFuZ2VGaWxscyA9PT0gJ2Z1bmN0aW9uJyA/IG5vZGUuZ2V0UmFuZ2VGaWxscygwLCAxKSA6IG5vZGUuZmlsbHMpIHx8IFtdO1xuICAgICAgICAvLyDmsqHmnInorr7nva7ku7vkvZXpopzoibIsIOebruWJjeS4jeaUr+aMgea4kOWPmFxuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGlmICghZmlyc3RGaWxsIHx8IGZpcnN0RmlsbC50eXBlICE9PSAnU09MSUQnKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb2xvciA9IENPTE9SLmdldFJnYmFCeUZpbGwoZmlyc3RGaWxsKTtcbiAgICAgICAgaWYgKCFjb2xvcikge1xuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gbm9kZS50eXBlID09PSAnVEVYVCcgPyBTQUNTUy5hZGRDb2xvcihjb2xvcikgOiBTQUNTUy5hZGRCZ0NvbG9yKGNvbG9yKTtcbiAgICAgICAgLy8g5paH5pys5piv55So6aKc6Imy77yM5YW25a6D55CG6Kej5Li66IOM5pmv6ImyXG4gICAgICAgIHJldHVybiBjbGFzc05hbWU7XG4gICAgfSxcbiAgICAvLyDojrflj5bloavlhYXkv6Hmga9cbiAgICBnZXRJbmZvOiAobm9kZSwgbm9kZUluZm8gPSB7fSkgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhub2RlKTtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBjb25zdCBpZCA9IHR5cGVvZiBub2RlLmdldFJhbmdlRmlsbFN0eWxlSWQgPT09ICdmdW5jdGlvbicgPyBub2RlLmdldFJhbmdlRmlsbFN0eWxlSWQoMCwgMSkgOiBub2RlLmZpbGxTdHlsZUlkO1xuICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgY29uc3QgdG9rZW4gPSBDT05GSUcuZ2V0SW5mb0J5SWQoaWQsIG5vZGUudHlwZSkgfHwge307XG4gICAgICAgIGlmICh0b2tlbikge1xuICAgICAgICAgICAgcmV0dXJuIG9iak1lcmdlKG5vZGVJbmZvLCB0b2tlbik7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY2xhc3NDb2xvciA9IEZJTEwuZ2V0RmlsbChub2RlKTtcbiAgICAgICAgcmV0dXJuIG9iak1lcmdlKG5vZGVJbmZvLCB7XG4gICAgICAgICAgICBjbGFzc05hbWU6IFtjbGFzc0NvbG9yXVxuICAgICAgICB9KTtcbiAgICB9LFxufTtcbmV4cG9ydCBkZWZhdWx0IEZJTEw7XG4iLCJpbXBvcnQgU0FDU1MgZnJvbSBcIi4uL1NBQ1NTXCI7XG5pbXBvcnQgb2JqTWVyZ2UgZnJvbSBcIi4uLy4uL3VpL3V0aWxzL29iak1lcmdlXCI7XG4vLyBpbXBvcnQgQ09ORklHIGZyb20gXCIuL0NPTkZJR1wiO1xuY29uc3QgRkxFWCA9IHtcbiAgICBpc0ZsZXg6IChub2RlKSA9PiB7XG4gICAgICAgIC8vIOi/meWHoOS4quWFg+e0oOmDveS4jeWBmiBGbGV4IOWIpOaWreWkhOeQhlxuICAgICAgICBpZiAoWydURVhUJ10uaW5kZXhPZihub2RlLnR5cGUpID4gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKG5vZGUgPT09IG51bGwgfHwgbm9kZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogbm9kZS5sYXlvdXRNb2RlKSAmJiAobm9kZSA9PT0gbnVsbCB8fCBub2RlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBub2RlLmxheW91dE1vZGUpICE9PSBcIk5PTkVcIjtcbiAgICB9LFxuICAgIGdldFRoaXNJbmZvOiAobm9kZSkgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhub2RlLm5hbWUsIG5vZGUubGF5b3V0TW9kZSwgRkxFWC5pc0ZsZXgobm9kZSkpO1xuICAgICAgICBpZiAoIUZMRVguaXNGbGV4KG5vZGUpKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IGxheW91dE1vZGUsIHByaW1hcnlBeGlzQWxpZ25JdGVtcywgY291bnRlckF4aXNBbGlnbkl0ZW1zLCBjaGlsZHJlbiA9IFtdIH0gPSBub2RlO1xuICAgICAgICAvLyDmsqHmnInlrZDlhYPntKAgZmxleCDluIPlsYDmsqHmnInmhI/kuYlcbiAgICAgICAgaWYgKCFjaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IFtdO1xuICAgICAgICAvLyDlpoLmnpzmmK/nurXlkJHnmoQg6L+Z6YeM5Y+v5Lul5LiN5L2/55SoIGZsZXgg5biD5bGAXG4gICAgICAgIGlmIChsYXlvdXRNb2RlID09PSAnVkVSVElDQUwnKSB7XG4gICAgICAgICAgICAvLyDlvZPmmK/nurXlkJHluIPlsYDlvZPml7blgJlcbiAgICAgICAgICAgIGNsYXNzTmFtZS5wdXNoKHtcbiAgICAgICAgICAgICAgICAvLyBcIk1JTlwiOiBcIlwiLFxuICAgICAgICAgICAgICAgIFwiQ0VOVEVSXCI6IFwidGFjXCIsXG4gICAgICAgICAgICAgICAgXCJNQVhcIjogXCJ0YXJcIixcbiAgICAgICAgICAgICAgICAvLyBcIlNQQUNFX0JFVFdFRU5cIjogXCJqY3NiXCIsXG4gICAgICAgICAgICB9W2NvdW50ZXJBeGlzQWxpZ25JdGVtc10pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY2xhc3NOYW1lLnB1c2goe1xuICAgICAgICAgICAgICAgIC8vIFwiTUlOXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgXCJDRU5URVJcIjogXCJqY2NcIixcbiAgICAgICAgICAgICAgICBcIk1BWFwiOiBcImpjZmVcIixcbiAgICAgICAgICAgICAgICBcIlNQQUNFX0JFVFdFRU5cIjogXCJqY3NiXCIsXG4gICAgICAgICAgICB9W3ByaW1hcnlBeGlzQWxpZ25JdGVtc10gfHwgXCJcIik7XG4gICAgICAgICAgICBjbGFzc05hbWUucHVzaCh7XG4gICAgICAgICAgICAgICAgLy9cIk1JTlwiOiBcIlwiLFxuICAgICAgICAgICAgICAgIFwiQ0VOVEVSXCI6IFwiYWljXCIsXG4gICAgICAgICAgICAgICAgXCJNQVhcIjogXCJhaWZlXCIsXG4gICAgICAgICAgICB9W2NvdW50ZXJBeGlzQWxpZ25JdGVtc10gfHwgXCJcIik7XG4gICAgICAgICAgICBjbGFzc05hbWUucHVzaCgnZGYnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2xhc3NOYW1lO1xuICAgIH0sXG4gICAgZ2V0SW5mb0Zyb21QYXJlbnQ6IChub2RlKSA9PiB7XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IG5vZGUucGFyZW50O1xuICAgICAgICBpZiAoIXBhcmVudCB8fCAhRkxFWC5pc0ZsZXgocGFyZW50KSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBjb25zdCB7IGxheW91dE1vZGUsIHByaW1hcnlBeGlzQWxpZ25JdGVtcywgaXRlbVNwYWNpbmcgfSA9IHBhcmVudDtcbiAgICAgICAgLy8g5Lik56uv5Lik56uv5a+56b2Q6KGo56S65LiN6ZyA6KaB6L+Z5LqbXG4gICAgICAgIGlmIChwcmltYXJ5QXhpc0FsaWduSXRlbXMgPT09IFwiU1BBQ0VfQkVUV0VFTlwiKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBbXTtcbiAgICAgICAgY29uc3QgaWdub3JlQ2xhc3NOYW1lID0gW107XG4gICAgICAgIGNvbnN0IHsgaWQgPSAnJyB9ID0gcGFyZW50LmNoaWxkcmVuLmZpbHRlcihjID0+IGMudmlzaWJsZSkucG9wKCkgfHwge307XG4gICAgICAgIGNvbnN0IGlzTGFzdENoaWxkcmVuID0gaWQgPT09IG5vZGUuaWQ7XG4gICAgICAgIC8vIOeItuWFg+e0oOaYr+e6teWQkeeahGZsZXgg5biD5bGA77yM5Zug5Li65b+955Wl5o6J5LqGIGRmXG4gICAgICAgIC8vIOi/memHjOiuqeiHquW3seaciSBkYiDlrp7njrDnurXlkJHluIPlsYBcbiAgICAgICAgaWYgKGxheW91dE1vZGUgPT09ICdWRVJUSUNBTCcpIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZS5wdXNoKCdkYicpO1xuICAgICAgICB9XG4gICAgICAgIC8vIOS4uuWtkOWFg+e0oOa3u+WKoOmXtOi3nVxuICAgICAgICBpZiAoaXRlbVNwYWNpbmcgPiAwICYmICFpc0xhc3RDaGlsZHJlbikge1xuICAgICAgICAgICAgY29uc3QgZ3V0dGVyTWFwID0ge1xuICAgICAgICAgICAgICAgIFwiVkVSVElDQUxcIjogXCJtYlwiLFxuICAgICAgICAgICAgICAgIFwiSE9SSVpPTlRBTFwiOiBcIm1yXCJcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjbGFzc05hbWUucHVzaChTQUNTUy5hZGQoZ3V0dGVyTWFwW2xheW91dE1vZGVdLCBpdGVtU3BhY2luZykpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChub2RlLmxheW91dEdyb3cgPT09IDEpIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZS5wdXNoKCdmMScpO1xuICAgICAgICAgICAgaWdub3JlQ2xhc3NOYW1lLnB1c2goYHcke25vZGUud2lkdGh9YCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICAgICAgIGlnbm9yZUNsYXNzTmFtZVxuICAgICAgICB9O1xuICAgIH0sXG4gICAgZ2V0SW5mbzogKG5vZGUsIG5vZGVJbmZvKSA9PiB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgY29uc3QgYmFzZUNsYXNzTmFtZSA9IEZMRVguZ2V0VGhpc0luZm8obm9kZSkgfHwgW107XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgY29uc3QgeyBjbGFzc05hbWU6IGMyID0gW10sIGlnbm9yZUNsYXNzTmFtZTogaWMyID0gW10gfSA9IEZMRVguZ2V0SW5mb0Zyb21QYXJlbnQobm9kZSkgfHwge307XG4gICAgICAgIHJldHVybiBvYmpNZXJnZShub2RlSW5mbywge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiBbLi4uYmFzZUNsYXNzTmFtZSwgLi4uYzJdLFxuICAgICAgICAgICAgaWdub3JlQ2xhc3NOYW1lOiBpYzJcbiAgICAgICAgfSk7XG4gICAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IEZMRVg7XG4iLCJpbXBvcnQgQ09ORklHIGZyb20gXCIuLi9DT05GSUdcIjtcbmltcG9ydCBvYmpNZXJnZSBmcm9tIFwiLi4vLi4vdWkvdXRpbHMvb2JqTWVyZ2VcIjtcbmNvbnN0IEdSSUQgPSB7XG4gICAgZ2V0SW5mbzogKG5vZGUsIG5vZGVJbmZvKSA9PiB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gQ09ORklHLmdldEluZm9CeUlkKG5vZGUuZ3JpZFN0eWxlSWQpO1xuICAgICAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgICAgICAgcmV0dXJuIG5vZGVJbmZvO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvYmpNZXJnZShub2RlSW5mbywgcmVzdWx0KTtcbiAgICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgR1JJRDtcbiIsImltcG9ydCBTQUNTUyBmcm9tIFwiLi4vU0FDU1NcIjtcbmltcG9ydCBvYmpNZXJnZSBmcm9tIFwiLi4vLi4vdWkvdXRpbHMvb2JqTWVyZ2VcIjtcbmNvbnN0IE9USEVSUyA9IHtcbiAgICBnZXJCb3JkZXJSYWRpdXNDbGFzc05hbWU6IChub2RlKSA9PiB7XG4gICAgICAgIGNvbnN0IHRsID0gbm9kZS50b3BMZWZ0UmFkaXVzIHx8IDA7XG4gICAgICAgIGNvbnN0IHRyID0gbm9kZS50b3BSaWdodFJhZGl1cyB8fCAwO1xuICAgICAgICBjb25zdCBiciA9IG5vZGUuYm90dG9tUmlnaHRSYWRpdXMgfHwgMDtcbiAgICAgICAgY29uc3QgYmwgPSBub2RlLmJvdHRvbUxlZnRSYWRpdXMgfHwgMDtcbiAgICAgICAgLy8g5YWo6YOo5Li6IDBcbiAgICAgICAgaWYgKCh0bCArIHRyICsgYnIgKyBibCkgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuICAgICAgICAvLyDlpoLmnpzlm5vkuKrlgLzpg73nm7jnrYlcbiAgICAgICAgaWYgKCh0bCA9PT0gdHIpICYmICh0bCA9PT0gYnIpICYmICh0bCA9PT0gYmwpKSB7XG4gICAgICAgICAgICByZXR1cm4gW1NBQ1NTLmFkZCgnYnInLCB0bCldO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IFtdO1xuICAgICAgICB0bCAmJiBjbGFzc05hbWUucHVzaChTQUNTUy5hZGQoJ2J0bHInLCB0bCkpO1xuICAgICAgICB0ciAmJiBjbGFzc05hbWUucHVzaChTQUNTUy5hZGQoJ2J0cnInLCB0cikpO1xuICAgICAgICBiciAmJiBjbGFzc05hbWUucHVzaChTQUNTUy5hZGQoJ2JicnInLCBicikpO1xuICAgICAgICBibCAmJiBjbGFzc05hbWUucHVzaChTQUNTUy5hZGQoJ2JibHInLCBibCkpO1xuICAgICAgICByZXR1cm4gY2xhc3NOYW1lO1xuICAgIH0sXG4gICAgZ2V0UGFkZGluZ0NsYXNzTmFtZTogKG5vZGUpID0+IHtcbiAgICAgICAgLy8g5Lya5b+955Wl5o6JIDHlg4/ntKDnmoQgcGFkZGluZ1xuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgbm9kZS5wYWRkaW5nVG9wID4gMSA/IFNBQ1NTLmFkZCgncHQnLCBub2RlLnBhZGRpbmdUb3ApIDogJycsXG4gICAgICAgICAgICBub2RlLnBhZGRpbmdSaWdodCA+IDEgPyBTQUNTUy5hZGQoJ3ByJywgbm9kZS5wYWRkaW5nUmlnaHQpIDogJycsXG4gICAgICAgICAgICBub2RlLnBhZGRpbmdCb3R0b20gPiAxID8gU0FDU1MuYWRkKCdwYicsIG5vZGUucGFkZGluZ0JvdHRvbSkgOiAnJyxcbiAgICAgICAgICAgIG5vZGUucGFkZGluZ0xlZnQgPiAxID8gU0FDU1MuYWRkKCdwbCcsIG5vZGUucGFkZGluZ0xlZnQpIDogJycsXG4gICAgICAgIF07XG4gICAgfSxcbiAgICBnZXRJbmZvOiAobm9kZSwgbm9kZUluZm8pID0+IHtcbiAgICAgICAgY29uc3QgcGFkZGluZyA9IE9USEVSUy5nZXRQYWRkaW5nQ2xhc3NOYW1lKG5vZGUpO1xuICAgICAgICBjb25zdCByYWRpdXMgPSBPVEhFUlMuZ2VyQm9yZGVyUmFkaXVzQ2xhc3NOYW1lKG5vZGUpO1xuICAgICAgICByZXR1cm4gb2JqTWVyZ2Uobm9kZUluZm8sIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogWy4uLnBhZGRpbmcsIC4uLnJhZGl1c11cbiAgICAgICAgfSk7XG4gICAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IE9USEVSUztcbiIsImltcG9ydCBDT05GSUcgZnJvbSBcIi4uL0NPTkZJR1wiO1xuaW1wb3J0IG9iak1lcmdlIGZyb20gXCIuLi8uLi91aS91dGlscy9vYmpNZXJnZVwiO1xuY29uc3QgU1RST0tFID0ge1xuICAgIC8vIOaWh+acrOe7hOS7tlxuICAgIGdldEluZm86IChub2RlLCBub2RlSW5mbykgPT4ge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IENPTkZJRy5nZXRJbmZvQnlJZChub2RlLnN0cm9rZVN0eWxlSWQpO1xuICAgICAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgICAgICAgcmV0dXJuIG5vZGVJbmZvO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvYmpNZXJnZShub2RlSW5mbywgcmVzdWx0KTtcbiAgICB9LFxufTtcbmV4cG9ydCBkZWZhdWx0IFNUUk9LRTtcbiIsImltcG9ydCBDT05GSUcgZnJvbSBcIi4uL0NPTkZJR1wiO1xuaW1wb3J0IFNBQ1NTIGZyb20gXCIuLi9TQUNTU1wiO1xuaW1wb3J0IG9iak1lcmdlIGZyb20gXCIuLi8uLi91aS91dGlscy9vYmpNZXJnZVwiO1xuLy8gQHRzLWlnbm9yZVxuY29uc3QgVEVYVCA9IHtcbiAgICB1bml0TWFwOiB7XG4gICAgICAgICdQRVJDRU5UJzogJyUnXG4gICAgICAgIC8vIFwiUElYRUxTXCI6XCJcIlxuICAgIH0sXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGdldEZvbnROYW1lQ2xhc3NCeVN0eWxlOiAoc3R5bGUpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzdHlsZSAhPT0gJ3N0cmluZycgfHwgIXN0eWxlKSB7XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZm9udE1hcCA9IHtcbiAgICAgICAgICAgIFwiVUxUUkFMSUdIVFwiOiBcImZ3MTAwXCIsXG4gICAgICAgICAgICBcIlRISU5cIjogJ2Z3MjAwJyxcbiAgICAgICAgICAgIFwiTElHSFRcIjogXCJmdzMwMFwiLFxuICAgICAgICAgICAgXCJSRUdVTEFSXCI6IFwiXCIsXG4gICAgICAgICAgICBcIk1FRElVTVwiOiBcImZ3NTAwXCIsXG4gICAgICAgICAgICBcIlNFTUlCT0xEXCI6IFwiZnc2MDBcIixcbiAgICAgICAgICAgIFwiQk9MRFwiOiBcImZ3NzAwXCIsXG4gICAgICAgICAgICBcIkJMQUNLXCI6IFwiZnc5MDBcIixcbiAgICAgICAgICAgIFwiSVRBTElDXCI6IFwiZnNpXCIsXG4gICAgICAgICAgICBcIk9CTElRVUVcIjogXCJmc2lcIlxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBzdHlsZS5zcGxpdCgnICcpLm1hcCgoaXRlbSkgPT4gZm9udE1hcFtpdGVtLnRvVXBwZXJDYXNlKCldIHx8ICcnKTtcbiAgICAgICAgcmV0dXJuIGNsYXNzTmFtZS5maWx0ZXIoaXRlbSA9PiBpdGVtKS5qb2luKCcgJyk7XG4gICAgfSxcbiAgICBnZXRQcm9wQnlOb2RlOiAobm9kZSwgbmFtZSkgPT4ge1xuICAgICAgICBjb25zdCBuYW1lTWFwID0ge1xuICAgICAgICAgICAgJ3RleHRDYXNlJzogJ2dldFJhbmdlVGV4dENhc2UnLFxuICAgICAgICAgICAgJ2xpbmVIZWlnaHQnOiAnZ2V0UmFuZ2VMaW5lSGVpZ2h0JyxcbiAgICAgICAgICAgICdsZXR0ZXJTcGFjaW5nJzogJ2dldFJhbmdlTGV0dGVyU3BhY2luZycsXG4gICAgICAgICAgICAnZm9udFNpemUnOiAnZ2V0UmFuZ2VGb250U2l6ZScsXG4gICAgICAgICAgICAndGV4dERlY29yYXRpb24nOiAnZ2V0UmFuZ2VUZXh0RGVjb3JhdGlvbicsXG4gICAgICAgICAgICAnZm9udE5hbWUnOiAnZ2V0UmFuZ2VGb250TmFtZScsXG4gICAgICAgICAgICAnZmlsbHMnOiAnZ2V0UmFuZ2VGaWxscycsXG4gICAgICAgICAgICAndGV4dFN0eWxlSWQnOiAnZ2V0UmFuZ2VUZXh0U3R5bGVJZCdcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHR5cGVvZiBub2RlW25hbWVdID09PSAnc3ltYm9sJyAmJiBuYW1lTWFwW25hbWVdICYmIHR5cGVvZiBub2RlW25hbWVNYXBbbmFtZV1dID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICByZXR1cm4gbm9kZVtuYW1lTWFwW25hbWVdXSgwLCAxKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbm9kZVtuYW1lXTtcbiAgICB9LFxuICAgIGdldEFDU1NTSW5mbzogKG5vZGUpID0+IHtcbiAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gW107XG4gICAgICAgIC8vIOaWh+Wtl+Wkp+Wwj1xuICAgICAgICBjb25zdCBmb250U2l6ZSA9IFRFWFQuZ2V0UHJvcEJ5Tm9kZShub2RlLCAnZm9udFNpemUnKTtcbiAgICAgICAgaWYgKGZvbnRTaXplID4gMSkge1xuICAgICAgICAgICAgY2xhc3NOYW1lLnB1c2goU0FDU1MuYWRkKCdmcycsIGZvbnRTaXplKSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8g6KGM6auYXG4gICAgICAgIGNvbnN0IGxpbmVIZWlnaHQgPSBURVhULmdldFByb3BCeU5vZGUobm9kZSwgJ2xpbmVIZWlnaHQnKTtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBpZiAobGluZUhlaWdodCA9PT0gbnVsbCB8fCBsaW5lSGVpZ2h0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBsaW5lSGVpZ2h0LnZhbHVlKSB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBjb25zdCB7IHZhbHVlLCB1bml0IH0gPSBsaW5lSGVpZ2h0O1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgY2xhc3NOYW1lLnB1c2goU0FDU1MuYWRkKCdsaCcsIHZhbHVlLCBURVhULnVuaXRNYXBbdW5pdF0pKTtcbiAgICAgICAgfVxuICAgICAgICAvLyDlrZfpl7Tot51cbiAgICAgICAgY29uc3QgbGV0dGVyU3BhY2luZyA9IFRFWFQuZ2V0UHJvcEJ5Tm9kZShub2RlLCAnbGV0dGVyU3BhY2luZycpO1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGlmIChsZXR0ZXJTcGFjaW5nID09PSBudWxsIHx8IGxldHRlclNwYWNpbmcgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGxldHRlclNwYWNpbmcudmFsdWUpIHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIGNvbnN0IHsgdmFsdWUsIHVuaXQgfSA9IGxldHRlclNwYWNpbmc7XG4gICAgICAgICAgICBjbGFzc05hbWUucHVzaChTQUNTUy5hZGQoJ2xzJywgdmFsdWUsIFRFWFQudW5pdE1hcFt1bml0XSkpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGZvbnROYW1lID0gVEVYVC5nZXRQcm9wQnlOb2RlKG5vZGUsICdmb250TmFtZScpO1xuICAgICAgICAvLyBmb250LXdlaWdodCBmb250LXN0eWxlXG4gICAgICAgIGNvbnN0IGZuQ2xhc3MgPSBURVhULmdldEZvbnROYW1lQ2xhc3NCeVN0eWxlKGZvbnROYW1lLnN0eWxlKTtcbiAgICAgICAgZm5DbGFzcyAmJiBjbGFzc05hbWUucHVzaChmbkNsYXNzKTtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBpZiAoZm9udE5hbWUgPT09IG51bGwgfHwgZm9udE5hbWUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGZvbnROYW1lLmZhbWlseSkge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgY2xhc3NOYW1lLnB1c2goU0FDU1MuYWRkRm9udEZhbWlseShmb250TmFtZS5mYW1pbHkpKTtcbiAgICAgICAgfVxuICAgICAgICAvLyB0ZXh0LWFsaWduXG4gICAgICAgIGNvbnN0IHRhQ2xhc3MgPSB7XG4gICAgICAgICAgICBcIkxFRlRcIjogJycsXG4gICAgICAgICAgICBcIkNFTlRFUlwiOiAndGFjJyxcbiAgICAgICAgICAgIFwiUklHSFRcIjogJ3RhcicsXG4gICAgICAgICAgICBcIkpVU1RJRklFRFwiOiAndGFqJyxcbiAgICAgICAgfVtub2RlLnRleHRBbGlnbkhvcml6b250YWxdO1xuICAgICAgICB0YUNsYXNzICYmIGNsYXNzTmFtZS5wdXNoKHRhQ2xhc3MpO1xuICAgICAgICAvLyB2ZXJ0aWNhbC1hbGlnblxuICAgICAgICBjb25zdCB2YUNsYXNzID0ge1xuICAgICAgICAgICAgXCJUT1BcIjogJycsXG4gICAgICAgICAgICBcIkNFTlRFUlwiOiAndmFtJyxcbiAgICAgICAgICAgIFwiQk9UVE9NXCI6ICd2YWInLFxuICAgICAgICB9W25vZGUudGV4dEFsaWduVmVydGljYWxdO1xuICAgICAgICB2YUNsYXNzICYmIGNsYXNzTmFtZS5wdXNoKHZhQ2xhc3MpO1xuICAgICAgICBjb25zdCB0ZXh0Q2FzZSA9IFRFWFQuZ2V0UHJvcEJ5Tm9kZShub2RlLCAndGV4dENhc2UnKTtcbiAgICAgICAgLy8gdHRcbiAgICAgICAgY29uc3QgdHRDbGFzcyA9IHtcbiAgICAgICAgICAgIFwiT1JJR0lOQUxcIjogJycsXG4gICAgICAgICAgICBcIlVQUEVSXCI6ICd0dHUnLFxuICAgICAgICAgICAgXCJMT1dFUlwiOiAndHRsJyxcbiAgICAgICAgICAgIFwiVElUTEVcIjogJ3R0YycsXG4gICAgICAgIH1bdGV4dENhc2VdO1xuICAgICAgICB0dENsYXNzICYmIGNsYXNzTmFtZS5wdXNoKHR0Q2xhc3MpO1xuICAgICAgICBjb25zdCB0ZXh0RGVjb3JhdGlvbiA9IFRFWFQuZ2V0UHJvcEJ5Tm9kZShub2RlLCAndGV4dERlY29yYXRpb24nKTtcbiAgICAgICAgLy8gdGRcbiAgICAgICAgY29uc3QgdGRDbGFzcyA9IHtcbiAgICAgICAgICAgIFwiTk9ORVwiOiBcIlwiLFxuICAgICAgICAgICAgXCJVTkRFUkxJTkVcIjogJ3RkdScsXG4gICAgICAgICAgICBcIlNUUklLRVRIUk9VR0hcIjogJ3RkbCdcbiAgICAgICAgfVt0ZXh0RGVjb3JhdGlvbl07XG4gICAgICAgIHRkQ2xhc3MgJiYgY2xhc3NOYW1lLnB1c2godGRDbGFzcyk7XG4gICAgICAgIGNvbnN0IHN0ckNsYXNzTmFtZSA9IGNsYXNzTmFtZS5qb2luKCcgJyk7XG4gICAgICAgIGNvbnN0IGlzU3Ryb25nID0gWydmdzUwMCcsICdmdzYwMCcsICdmdzcwMCcsICdmdzgwMCcsICdmdzkwMCddLmZpbmRJbmRleCgoaXRlbSkgPT4gc3RyQ2xhc3NOYW1lLmluZGV4T2YoaXRlbSkgPiAtMSkgPiAtMTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICAgICAgIHRhZ05hbWU6IGlzU3Ryb25nID8gJ3N0cm9uZycgOiAnc3BhbidcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIGdldFRleHRDaGlsZHJlbjogKG5vZGUpID0+IHtcbiAgICAgICAgY29uc3QgeyBjaGFyYWN0ZXJzID0gJycgfSA9IG5vZGU7XG4gICAgICAgIGNvbnN0IGxlZ2FsUCA9IGNoYXJhY3RlcnMuc3BsaXQoJ1xcbicpLmZpbHRlcihpdGVtID0+IGl0ZW0udHJpbSgpKTtcbiAgICAgICAgLy8g5pyJ5Zue6L2m6KGo56S65aSa5q616JC9XG4gICAgICAgIGlmIChsZWdhbFAubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgY29uc3QgbWJDbGFzcyA9IG5vZGUucGFyYWdyYXBoU3BhY2luZyA+IDAgPyBTQUNTUy5hZGQoJ21iJywgbm9kZS5wYXJhZ3JhcGhTcGFjaW5nKSA6ICcnO1xuICAgICAgICAgICAgY29uc3QgcHMgPSBsZWdhbFAubWFwKChpdGVtLCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBpc0xhc3QgPSBrZXkgPT09IGxlZ2FsUC5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHRhZ05hbWU6ICdwJyxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBpc0xhc3QgPyAnJyA6IG1iQ2xhc3MsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbaXRlbV1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gcHM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFtjaGFyYWN0ZXJzXTtcbiAgICB9LFxuICAgIC8vIOaWh+acrOe7hOS7tlxuICAgIGdldEluZm86IChub2RlLCBub2RlSW5mbyA9IHt9KSA9PiB7XG4gICAgICAgIGlmIChub2RlLnR5cGUgIT09ICdURVhUJykge1xuICAgICAgICAgICAgcmV0dXJuIG5vZGVJbmZvO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGlkID0gVEVYVC5nZXRQcm9wQnlOb2RlKG5vZGUsICd0ZXh0U3R5bGVJZCcpO1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGNvbnN0IGdldEluZm8gPSBDT05GSUcuZ2V0SW5mb0J5SWQoaWQpO1xuICAgICAgICBpZiAoZ2V0SW5mbykge1xuICAgICAgICAgICAgcmV0dXJuIG9iak1lcmdlKG5vZGVJbmZvLCBnZXRJbmZvKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBhY3NzSW5mbyA9IFRFWFQuZ2V0QUNTU1NJbmZvKG5vZGUpO1xuICAgICAgICByZXR1cm4gb2JqTWVyZ2Uobm9kZUluZm8sIGFjc3NJbmZvKTtcbiAgICB9LFxufTtcbmV4cG9ydCBkZWZhdWx0IFRFWFQ7XG4iLCJpbXBvcnQgTk9ERSBmcm9tIFwiLi9fL05PREVcIjtcbmltcG9ydCBDT05GSUcgZnJvbSBcIi4vXy9DT05GSUdcIjtcbmltcG9ydCBTQUNTUyBmcm9tIFwiLi9fL1NBQ1NTXCI7XG5pbXBvcnQgRE9NIGZyb20gXCIuL18vcmVuZGVyL0RPTVwiO1xuY29uc3QgQVBJID0ge1xuICAgIC8qKlxuICAgICAqIOm7mOiupOaYvuekuiBob21lXG4gICAgICovXG4gICAgdGFiSW5kZXg6IDAsXG4gICAgLyoqXG4gICAgICog6I635Y+W55So5oi36YCJ5Lit55qE5Zu+5bGCXG4gICAgICovXG4gICAgZ2V0U2VsZWN0aW9uOiAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbiA9IGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbjtcbiAgICAgICAgLy8gY29uc29sZS5sb2coc2VsZWN0aW9uKTtcbiAgICAgICAgaWYgKCFzZWxlY3Rpb24ubGVuZ3RoKSB7XG4gICAgICAgICAgICAvLyDmsqHmnInpgInmi6nku7vkvZXlhYPntKBcbiAgICAgICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHsgbm9TZWxlY3Rpb246IHRydWUgfSk7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2VsZWN0aW9uWzBdO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICog5b2TIFRhYiDliIfmjaLnmoTml7blgJnkvJrlh7rlj5Hov5nkuKrmlrnms5VcbiAgICAgKiBAcGFyYW0gaW5kZXhcbiAgICAgKi9cbiAgICBvblRhYkNoYW5nZTogKGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGJlZm9yZUluZGV4ID0gQVBJLnRhYkluZGV4O1xuICAgICAgICBBUEkudGFiSW5kZXggPSBpbmRleDtcbiAgICAgICAgLy8g5aaC5p6c5Y+q5piv5ZyoIEhUTUwg5ZKMIEFDU1Mg5LmL5YmN5YiH5o2iXG4gICAgICAgIGlmICgoYmVmb3JlSW5kZXggPT09IDAgfHwgYmVmb3JlSW5kZXggPT09IDEpICYmIChpbmRleCA9PT0gMCB8fCBpbmRleCA9PT0gMSkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBhY3Rpb25NYXAgPSBbJ3J1bkhvbWUnLCAncnVuSG9tZScsICdydW5Ub2tlbicsICdydW5Db25maWcnXTtcbiAgICAgICAgY29uc3QgYWN0aW9uID0gYWN0aW9uTWFwW2luZGV4XTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ29uVGFiQ2hhbmdlJywgYWN0aW9uKTtcbiAgICAgICAgYWN0aW9uICYmIEFQSVthY3Rpb25dKCk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiDop6blj5FcbiAgICAgKi9cbiAgICBydW46ICgpID0+IHtcbiAgICAgICAgY29uc3QgYWN0aW9uTWFwID0gWydydW5Ib21lJywgJ3J1bkhvbWUnLCAncnVuVG9rZW4nLCAnJ107XG4gICAgICAgIGNvbnN0IGFjdGlvbiA9IGFjdGlvbk1hcFtBUEkudGFiSW5kZXhdO1xuICAgICAgICBpZiAoIWFjdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIEFQSVthY3Rpb25dKCk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiDmmL7npLrnrKzkuIDlsY9cbiAgICAgKi9cbiAgICBydW5Ib21lOiAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbiA9IEFQSS5nZXRTZWxlY3Rpb24oKTtcbiAgICAgICAgaWYgKCFzZWxlY3Rpb24pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBTQUNTUy5pbml0KCk7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgY29uc3QgSW5mbyA9IE5PREUuZ2V0Tm9kZUluZm8oc2VsZWN0aW9uKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coSW5mbyk7XG4gICAgICAgIGNvbnN0IGlzSlNYID0gQ09ORklHLmlzSlNYKCk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgIGdldEhUTUw6IERPTS5yZW5kZXIoSW5mbywgaXNKU1gpLFxuICAgICAgICAgICAgICAgIGdldENTUzogU0FDU1MuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICAgICAgaXNKU1gsXG4gICAgICAgICAgICAgICAgbm9TZWxlY3Rpb246IGZhbHNlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSwgMTYpO1xuICAgIH0sXG4gICAgcnVuQ29uZmlnOiAoKSA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgIGdldENvbmZpZzogQ09ORklHLmdldEN1cnJlbnQoKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIDEwKTtcbiAgICB9LFxuICAgIHJ1blRva2VuOiAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbiA9IEFQSS5nZXRTZWxlY3Rpb24oKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZShDT05GSUcuZ2V0U2VsZWN0aW9uVG9rZW5zKHNlbGVjdGlvbikpO1xuICAgICAgICB9LCAxNik7XG4gICAgfSxcbiAgICBvbm1lc3NhZ2U6IChtc2cgPSB7fSkgPT4ge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGNvbnN0IHsgdHlwZSA9IG51bGwsIHZhbHVlID0gbnVsbCB9ID0gbXNnO1xuICAgICAgICBpZiAodHlwZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IFtuYW1lLCBhY3Rpb25dID0gdHlwZS5zcGxpdCgnLicpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnQVBJIG9ubWVzc2FnZScsIG5hbWUsIGFjdGlvbiwgdmFsdWUpO1xuICAgICAgICBpZiAobmFtZSA9PT0gJ0FQSScgJiYgKGFjdGlvbiBpbiBBUEkpKSB7XG4gICAgICAgICAgICBBUElbYWN0aW9uXSh2YWx1ZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5hbWUgPT09ICdDT05GSUcnICYmIChhY3Rpb24gaW4gQ09ORklHKSkge1xuICAgICAgICAgICAgQ09ORklHW2FjdGlvbl0odmFsdWUpO1xuICAgICAgICAgICAgaWYgKGFjdGlvbiA9PT0gJ2NoYW5nZUpTWCcpIHtcbiAgICAgICAgICAgICAgICBBUEkucnVuSG9tZSgpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChhY3Rpb24gPT09ICdhcHBlbmRUb2tlbicpIHtcbiAgICAgICAgICAgICAgICBBUEkucnVuVG9rZW4oKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBBUEkucnVuQ29uZmlnKCk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuLy8gVGhpcyBwbHVnaW4gd2lsbCBvcGVuIGEgd2luZG93IHRvIHByb21wdCB0aGUgdXNlciB0byBlbnRlciBhIG51bWJlciwgYW5kXG4vLyBpdCB3aWxsIHRoZW4gY3JlYXRlIHRoYXQgbWFueSByZWN0YW5nbGVzIG9uIHRoZSBzY3JlZW4uXG4vLyBUaGlzIGZpbGUgaG9sZHMgdGhlIG1haW4gY29kZSBmb3IgdGhlIHBsdWdpbnMuIEl0IGhhcyBhY2Nlc3MgdG8gdGhlICpkb2N1bWVudCouXG4vLyBZb3UgY2FuIGFjY2VzcyBicm93c2VyIEFQSXMgaW4gdGhlIDxzY3JpcHQ+IHRhZyBpbnNpZGUgXCJ1aS5odG1sXCIgd2hpY2ggaGFzIGFcbi8vIGZ1bGwgYnJvd3NlciBlbnZpcm9ubWVudCAoc2VlIGRvY3VtZW50YXRpb24pLlxuQ09ORklHLmluaXQoKS50aGVuKCgpID0+IHtcbiAgICAvLyBUaGlzIHNob3dzIHRoZSBIVE1MIHBhZ2UgaW4gXCJ1aS5odG1sXCIuXG4gICAgZmlnbWEuc2hvd1VJKF9faHRtbF9fLCB7IHdpZHRoOiA0MDAsIGhlaWdodDogNjAwIH0pO1xuICAgIEFQSS5ydW4oKTtcbiAgICBmaWdtYS5vbihcInNlbGVjdGlvbmNoYW5nZVwiLCAoKSA9PiB7XG4gICAgICAgIEFQSS5ydW4oKTtcbiAgICB9KTtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgZmlnbWEudWkub25tZXNzYWdlID0gQVBJLm9ubWVzc2FnZTtcbn0pO1xuIiwiZnVuY3Rpb24gb2JqTWVyZ2UoYSA9IHt9LCBiKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYTtcbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhiKSkge1xuICAgICAgICBjb25zdCBpdGVtID0gYVtrZXldO1xuICAgICAgICBpZiAoIWl0ZW0gfHwgIXZhbHVlKSB7XG4gICAgICAgICAgICByZXN1bHRba2V5XSA9IHZhbHVlO1xuICAgICAgICB9IGVsc2UgaWYgKChpdGVtIGluc3RhbmNlb2YgQXJyYXkpICYmICh2YWx1ZSBpbnN0YW5jZW9mIEFycmF5KSkge1xuICAgICAgICAgICAgcmVzdWx0W2tleV0gPSBbLi4uaXRlbSwgLi4udmFsdWVdO1xuICAgICAgICB9IGVsc2UgaWYgKGl0ZW0gJiYgaXRlbSBpbnN0YW5jZW9mIE9iamVjdCkge1xuICAgICAgICAgICAgcmVzdWx0W2tleV0gPSBvYmpNZXJnZShpdGVtLCB2YWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXN1bHRba2V5XSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBvYmpNZXJnZTsiXSwic291cmNlUm9vdCI6IiJ9