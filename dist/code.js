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


var CONFIG_DEFAULT = {
  isJSX: false,
  _ignoreClassName: [],
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
  addToken: function addToken(data) {
    var _a = CONFIG.getCurrent(),
        tokens = _a.tokens,
        rest = __rest(_a, ["tokens"]);

    var newStore = Object.assign(Object.assign({}, rest), {
      tokens: Object.assign(Object.assign({}, tokens), data)
    });
    CONFIG.store = newStore;
    figma.clientStorage.setAsync(CONFIG.key, newStore);
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
          className: [],
          _ignoreClassName: [],
          _renderWidth: false,
          _renderHeight: false
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
            className: [],
            _ignoreClassName: []
          }
        };
      }

      matchToken[styleKey] = Object.assign(Object.assign(Object.assign({
        DEFAULT: {
          className: [],
          _ignoreClassName: []
        }
      }, extraToken), tokens[styleKey]), {
        _tokenName: name,
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












var NODE = {
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
      _ignoreClassName: [],
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

    if (isStructNode && String(nodeInfo === null || nodeInfo === void 0 ? void 0 : nodeInfo._renderHeight) !== false || String(nodeInfo === null || nodeInfo === void 0 ? void 0 : nodeInfo._renderWidth) === true) {
      nodeInfo.className.push(_SACSS__WEBPACK_IMPORTED_MODULE_6__["default"].add('w', parseInt(String(node.width))));
    } // @ts-ignore


    if (isStructNode && String(nodeInfo === null || nodeInfo === void 0 ? void 0 : nodeInfo._renderHeight) !== false || String(nodeInfo === null || nodeInfo === void 0 ? void 0 : nodeInfo._renderHeight) === true) {
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
      } // @ts-ignore


      return NODE.getNodesInfo(node.children);
    }(); // 整个项目都忽略的 className
    // @ts-ignore


    var _ref = _CONFIG__WEBPACK_IMPORTED_MODULE_10__["default"].getCurrent() || {},
        _ref$_ignoreClassName = _ref._ignoreClassName,
        _ignoreClassName = _ref$_ignoreClassName === void 0 ? [] : _ref$_ignoreClassName;

    nodeInfo.className = _UTILS__WEBPACK_IMPORTED_MODULE_7__["default"].clearClassName(nodeInfo.className, [].concat(_toConsumableArray(nodeInfo._ignoreClassName), _toConsumableArray(_ignoreClassName)));

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

      // 忽略 '_' 开头的属性
      if (!key.startsWith('_')) {
        var strValue = value instanceof Array ? value.join(' ') : value;
        var keyName = key === 'className' ? 'class' : key;
        strValue && arrProps.push("".concat(keyName, "=\"").concat(strValue, "\""));
      }
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

      // 忽略 '_' 开头的属性
      if (!key.startsWith('_')) {
        var strValue = value instanceof Array ? value.join(' ') : value;
        strValue && arrProps.push("".concat(key, "=\"").concat(strValue, "\""));
      }
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
      _ignoreClassName: ic2
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
/* harmony import */ var _ui_utils_tryOldConfig_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/utils/tryOldConfig.js */ "./src/ui/utils/tryOldConfig.js");
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
    } // 尝试检测旧代码


    if (type === 'testOldConfig') {
      Object(_ui_utils_tryOldConfig_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
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
      _CONFIG__WEBPACK_IMPORTED_MODULE_1__["default"][action](value); // 为了触发重新渲染

      if (action === 'changeJSX') {
        API.runHome();
        return;
      } // 为了触发重新渲染


      if (action === 'addToken') {
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

/***/ }),

/***/ "./src/ui/utils/tryOldConfig.js":
/*!**************************************!*\
  !*** ./src/ui/utils/tryOldConfig.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var tryOldConfig = function tryOldConfig() {
  // 尝试获取
  figma.clientStorage.getAsync("SACSS").then(function () {
    var ret = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var projects = ret.projects;

    if (projects && projects.length) {
      setTimeout(function () {
        console.log("SACSS", ret);
        figma.ui.postMessage({
          getOldConfig: ret
        });
      }, 16);
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (tryOldConfig);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL18vQ09NUE9ORU5ULnRzIiwid2VicGFjazovLy8uL3NyYy9fL0NPTkZJRy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvXy9OT0RFLnRzIiwid2VicGFjazovLy8uL3NyYy9fL1NBQ1NTLnRzIiwid2VicGFjazovLy8uL3NyYy9fL1VUSUxTLnRzIiwid2VicGFjazovLy8uL3NyYy9fL3JlbmRlci9ET00udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL18vcmVuZGVyL0hUTUwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL18vcmVuZGVyL0pTWC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvXy90b2tlbi9DT0xPUi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvXy90b2tlbi9FRkZFQ1QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL18vdG9rZW4vRklMTC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvXy90b2tlbi9GTEVYLnRzIiwid2VicGFjazovLy8uL3NyYy9fL3Rva2VuL0dSSUQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL18vdG9rZW4vT1RIRVJTLnRzIiwid2VicGFjazovLy8uL3NyYy9fL3Rva2VuL1NUUk9LRS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvXy90b2tlbi9URVhULnRzIiwid2VicGFjazovLy8uL3NyYy9jb2RlLnRzIiwid2VicGFjazovLy8uL3NyYy91aS91dGlscy9vYmpNZXJnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvdXRpbHMvdHJ5T2xkQ29uZmlnLmpzIl0sIm5hbWVzIjpbIkNPTVBPTkVOVCIsImlzQ29tcG9uZW50Iiwibm9kZSIsInR5cGUiLCJnZXRNYWluQ29tcG9uZW50IiwibWFpbkNvbXBvbmVudCIsImdldENvbXBvbmVudElkIiwia2V5Iiwic3RyaW5nVG9Db21wb25lbnROYW1lIiwibmFtZSIsInRyaW1OYW1lIiwidHJpbSIsInN0ck5hbWUiLCJyZXBsYWNlIiwiZmlyc3RDaGFyIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJsZW5ndGgiLCJzbGljZSIsImdldEluZm8iLCJub2RlSW5mbyIsImlkIiwibWF0Y2hUb2tlbiIsIkNPTkZJRyIsImdldFRva2VuIiwiREVGQVVMVCIsIm9iak1lcmdlIiwiX19yZXN0IiwicyIsImUiLCJ0IiwicCIsIk9iamVjdCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImluZGV4T2YiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJpIiwicHJvcGVydHlJc0VudW1lcmFibGUiLCJDT05GSUdfREVGQVVMVCIsImlzSlNYIiwiX2lnbm9yZUNsYXNzTmFtZSIsInRva2VucyIsIlZFUlNJT04iLCJzdG9yZSIsImNoYW5nZUpTWCIsInZhbHVlIiwiZ2V0Q3VycmVudCIsImZpZ21hIiwiY2xpZW50U3RvcmFnZSIsInNldEFzeW5jIiwiZWRpdCIsImRhdGEiLCJ1aSIsInBvc3RNZXNzYWdlIiwiYWxlcnRNc2ciLCJhZGRUb2tlbiIsIl9hIiwicmVzdCIsIm5ld1N0b3JlIiwiYXNzaWduIiwiaW5pdCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiZ2V0QXN5bmMiLCJ0aGVuIiwicmV0IiwiY2F0Y2giLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJnZXRJbmZvQnlJZCIsImdldFN0eWxlQnlJZCIsInRva2VuQ29uZmlnIiwiZ2V0U2VsZWN0aW9uVG9rZW5zIiwic2VsZWN0aW9uIiwic2VsZWN0aW9uVG9rZW5zIiwiZmluZFRva2VuIiwiY2xhc3NOYW1lIiwiX3JlbmRlcldpZHRoIiwiX3JlbmRlckhlaWdodCIsIl90b2tlbk5hbWUiLCJfdG9rZW5UeXBlIiwiZmlsbFN0eWxlSWQiLCJ0ZXh0U3R5bGVJZCIsInN0cm9rZVN0eWxlSWQiLCJlZmZlY3RTdHlsZUlkIiwiZ3JpZFN0eWxlSWQiLCJmb3JFYWNoIiwiaXRlbSIsInN0eWxlS2V5IiwiZXh0cmFUb2tlbiIsImdldEFsbFRva2VucyIsInJvb3QiLCJjb21wb25lbnRzIiwiZmluZEFsbCIsImMiLCJwYXJlbnQiLCJ0b2tlbiIsImFkZENvbmZpZyIsImdldExvY2FsUGFpbnRTdHlsZXMiLCJnZXRMb2NhbFRleHRTdHlsZXMiLCJnZXRMb2NhbEVmZmVjdFN0eWxlcyIsImdldExvY2FsR3JpZFN0eWxlcyIsImdvdEFsbFRva2VucyIsImlnbm9yZUNsYXNzTmFtZSIsIk5PREUiLCJpc1N0cnVjdE5vZGUiLCJzdGFydHNXaXRoIiwieWVzVHlwZXMiLCJjaGlsZHJlbiIsImdvdE5vIiwiZmluZCIsInZpc2libGUiLCJpc1JlbmRlckNoaWxkcmVuIiwiZ2V0Tm9kZUluZm8iLCJ0YWdOYW1lIiwiRklMTCIsIlRFWFQiLCJTVFJPS0UiLCJHUklEIiwiRUZGRUNUIiwiT1RIRVJTIiwiRkxFWCIsIlN0cmluZyIsInB1c2giLCJTQUNTUyIsImFkZCIsInBhcnNlSW50Iiwid2lkdGgiLCJoZWlnaHQiLCJ0ZXh0cyIsImdldFRleHRDaGlsZHJlbiIsImdldE5vZGVzSW5mbyIsIlVUSUxTIiwiY2xlYXJDbGFzc05hbWUiLCJBcnJheSIsImNoaWxkcmVuSW5mbyIsInNvcnQiLCJub2RlcyIsImEiLCJiIiwiYVkiLCJ5IiwiYlkiLCJ4IiwiaW5mbyIsInNvcnROb2RlcyIsImxlbiIsIm5hbWVNYXAiLCJnZXRDbGFzc1NlbGVjdG9yQnlOYW1lIiwiZ2V0U3RyaW5nIiwia2V5cyIsInJlc3VsdCIsIm1hcCIsImpvaW4iLCJ1bml0IiwicHJvcE5hbWUiLCJ1c2VWYWx1ZSIsIk51bWJlciIsInBhcnNlRmxvYXQiLCJ0b0ZpeGVkIiwiY2xhc3NVbml0IiwiYWRkRm9udEZhbWlseSIsInZhbHVlT2siLCJ0b0xvd2VyQ2FzZSIsImFkZENvbG9yIiwicmdiYSIsImFkZEJnQ29sb3IiLCJpc0Jsb2NrIiwiYmxvY2tUYWciLCJpc1NlbGZUYWciLCJzZWxmVGFnIiwiRE9NIiwicmVuZGVyIiwib2JqIiwiSlNYIiwiZ2V0SXRlbURvbSIsIkhUTUwiLCJnZXRQcm9wc1N0cmluZ0J5T2JqZWN0IiwicHJvcHMiLCJhcnJQcm9wcyIsImVudHJpZXMiLCJzdHJWYWx1ZSIsImtleU5hbWUiLCJfdGFnTmFtZSIsInN0clByb3BzIiwidGFnU3RhcnQiLCJnZXREb21CeUFycmF5IiwiZ2V0UHJvcHNTdHJpbmciLCJjb21wb25lbnROYW1lIiwiQ09MT1IiLCJnZXRSZ2JhQnlGaWxsIiwiY29sb3IiLCJvcGFjaXR5IiwiciIsImciLCJnZXRGaWxsIiwiZ2V0UmFuZ2VGaWxscyIsImZpbGxzIiwiZmlyc3RGaWxsIiwiZ2V0UmFuZ2VGaWxsU3R5bGVJZCIsImNsYXNzQ29sb3IiLCJpc0ZsZXgiLCJsYXlvdXRNb2RlIiwiZ2V0VGhpc0luZm8iLCJwcmltYXJ5QXhpc0FsaWduSXRlbXMiLCJjb3VudGVyQXhpc0FsaWduSXRlbXMiLCJnZXRJbmZvRnJvbVBhcmVudCIsIml0ZW1TcGFjaW5nIiwiZmlsdGVyIiwicG9wIiwiaXNMYXN0Q2hpbGRyZW4iLCJndXR0ZXJNYXAiLCJsYXlvdXRHcm93IiwiYmFzZUNsYXNzTmFtZSIsImMyIiwiaWMyIiwiZ2VyQm9yZGVyUmFkaXVzQ2xhc3NOYW1lIiwidGwiLCJ0b3BMZWZ0UmFkaXVzIiwidHIiLCJ0b3BSaWdodFJhZGl1cyIsImJyIiwiYm90dG9tUmlnaHRSYWRpdXMiLCJibCIsImJvdHRvbUxlZnRSYWRpdXMiLCJnZXRQYWRkaW5nQ2xhc3NOYW1lIiwicGFkZGluZ1RvcCIsInBhZGRpbmdSaWdodCIsInBhZGRpbmdCb3R0b20iLCJwYWRkaW5nTGVmdCIsInBhZGRpbmciLCJyYWRpdXMiLCJ1bml0TWFwIiwiZ2V0Rm9udE5hbWVDbGFzc0J5U3R5bGUiLCJzdHlsZSIsImZvbnRNYXAiLCJzcGxpdCIsImdldFByb3BCeU5vZGUiLCJnZXRBQ1NTU0luZm8iLCJmb250U2l6ZSIsImxpbmVIZWlnaHQiLCJsZXR0ZXJTcGFjaW5nIiwiZm9udE5hbWUiLCJmbkNsYXNzIiwiZmFtaWx5IiwidGFDbGFzcyIsInRleHRBbGlnbkhvcml6b250YWwiLCJ2YUNsYXNzIiwidGV4dEFsaWduVmVydGljYWwiLCJ0ZXh0Q2FzZSIsInR0Q2xhc3MiLCJ0ZXh0RGVjb3JhdGlvbiIsInRkQ2xhc3MiLCJzdHJDbGFzc05hbWUiLCJpc1N0cm9uZyIsImZpbmRJbmRleCIsImNoYXJhY3RlcnMiLCJsZWdhbFAiLCJtYkNsYXNzIiwicGFyYWdyYXBoU3BhY2luZyIsInBzIiwiaXNMYXN0IiwiYWNzc0luZm8iLCJBUEkiLCJ0YWJJbmRleCIsImdldFNlbGVjdGlvbiIsImN1cnJlbnRQYWdlIiwibm9TZWxlY3Rpb24iLCJvblRhYkNoYW5nZSIsImluZGV4IiwiYmVmb3JlSW5kZXgiLCJhY3Rpb25NYXAiLCJhY3Rpb24iLCJydW4iLCJydW5Ib21lIiwiSW5mbyIsInNldFRpbWVvdXQiLCJnZXRIVE1MIiwiZ2V0Q1NTIiwicnVuQ29uZmlnIiwiZ2V0Q29uZmlnIiwicnVuVG9rZW4iLCJvbm1lc3NhZ2UiLCJtc2ciLCJ0cnlPbGRDb25maWciLCJzaG93VUkiLCJfX2h0bWxfXyIsIm9uIiwicHJvamVjdHMiLCJjb25zb2xlIiwibG9nIiwiZ2V0T2xkQ29uZmlnIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtR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QUFlLEdBQU07QUFDdkI7QUFDQS9PLE9BQUssQ0FBQ0MsYUFBTixDQUFvQmdCLFFBQXBCLENBQTZCLE9BQTdCLEVBQXNDQyxJQUF0QyxDQUEyQyxZQUFjO0FBQUEsUUFBYkMsR0FBYSx1RUFBUCxFQUFPO0FBQ3JELFFBQU9nTyxRQUFQLEdBQW1CaE8sR0FBbkIsQ0FBT2dPLFFBQVA7O0FBQ0EsUUFBSUEsUUFBUSxJQUFJQSxRQUFRLENBQUNuUixNQUF6QixFQUFpQztBQUM3QnVRLGdCQUFVLENBQUMsWUFBSTtBQUNYYSxlQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaLEVBQXFCbE8sR0FBckI7QUFDQW5CLGFBQUssQ0FBQ0ssRUFBTixDQUFTQyxXQUFULENBQXFCO0FBQ2pCZ1Asc0JBQVksRUFBRW5PO0FBREcsU0FBckI7QUFHSCxPQUxTLEVBS1AsRUFMTyxDQUFWO0FBTUg7QUFDSixHQVZEO0FBV0gsQ0FiRDs7QUFlZTROLDJFQUFmLEUiLCJmaWxlIjoiY29kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2NvZGUudHNcIik7XG4iLCJpbXBvcnQgQ09ORklHIGZyb20gXCIuL0NPTkZJR1wiO1xuaW1wb3J0IG9iak1lcmdlIGZyb20gXCIuLi91aS91dGlscy9vYmpNZXJnZS5qc1wiO1xuY29uc3QgQ09NUE9ORU5UID0ge1xuICAgIGlzQ29tcG9uZW50OiAobm9kZSkgPT4ge1xuICAgICAgICAvLyAnQ09NUE9ORU5UX1NFVCcg55uu5YmN5LiN6IO95L2c5Li657uE5Lu255qE5Yik5pat5qCH5YeGXG4gICAgICAgIHJldHVybiBub2RlLnR5cGUgPT09ICdJTlNUQU5DRScgfHwgbm9kZS50eXBlID09PSAnQ09NUE9ORU5UJztcbiAgICB9LFxuICAgIGdldE1haW5Db21wb25lbnQ6IChub2RlKSA9PiB7XG4gICAgICAgIGlmIChub2RlLnR5cGUgPT09ICdDT01QT05FTlRfU0VUJyB8fCBub2RlLnR5cGUgPT09ICdDT01QT05FTlQnKSB7XG4gICAgICAgICAgICByZXR1cm4gbm9kZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhub2RlLCB7aXNWYXJpYW50fSk7XG4gICAgICAgIHJldHVybiBub2RlLm1haW5Db21wb25lbnQ7XG4gICAgfSxcbiAgICBnZXRDb21wb25lbnRJZDogKG5vZGUpID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2cobm9kZSk7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgY29uc3QgeyBrZXkgPSAnJyB9ID0gQ09NUE9ORU5ULmdldE1haW5Db21wb25lbnQobm9kZSkgfHwge307XG4gICAgICAgIHJldHVybiBrZXk7XG4gICAgfSxcbiAgICBzdHJpbmdUb0NvbXBvbmVudE5hbWU6IChuYW1lID0gJycpID0+IHtcbiAgICAgICAgY29uc3QgdHJpbU5hbWUgPSBuYW1lLnRyaW0oKTtcbiAgICAgICAgaWYgKCF0cmltTmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHN0ck5hbWUgPSB0cmltTmFtZS5yZXBsYWNlKC9bXFxXXS9nLCAnJyk7XG4gICAgICAgIGNvbnN0IGZpcnN0Q2hhciA9IHN0ck5hbWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgIGlmIChzdHJOYW1lLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIGZpcnN0Q2hhcjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmlyc3RDaGFyICsgc3RyTmFtZS5zbGljZSgxKTtcbiAgICB9LFxuICAgIGdldEluZm86IChub2RlLCBub2RlSW5mbyA9IHt9KSA9PiB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgY29uc3QgaWQgPSBDT01QT05FTlQuZ2V0Q29tcG9uZW50SWQobm9kZSk7XG4gICAgICAgIGNvbnN0IG1hdGNoVG9rZW4gPSBpZCA/IENPTkZJRy5nZXRUb2tlbigpW2lkXSA6ICcnO1xuICAgICAgICBpZiAoIW1hdGNoVG9rZW4pIHtcbiAgICAgICAgICAgIHJldHVybiBub2RlSW5mbztcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IERFRkFVTFQgPSB7fSB9ID0gbWF0Y2hUb2tlbjtcbiAgICAgICAgcmV0dXJuIG9iak1lcmdlKG5vZGVJbmZvLCBERUZBVUxUKTtcbiAgICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgQ09NUE9ORU5UO1xuIiwidmFyIF9fcmVzdCA9ICh0aGlzICYmIHRoaXMuX19yZXN0KSB8fCBmdW5jdGlvbiAocywgZSkge1xuICAgIHZhciB0ID0ge307XG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXG4gICAgICAgIHRbcF0gPSBzW3BdO1xuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xuICAgICAgICB9XG4gICAgcmV0dXJuIHQ7XG59O1xuaW1wb3J0IENPTVBPTkVOVCBmcm9tIFwiLi9DT01QT05FTlRcIjtcbmNvbnN0IENPTkZJR19ERUZBVUxUID0ge1xuICAgIGlzSlNYOiBmYWxzZSxcbiAgICBfaWdub3JlQ2xhc3NOYW1lOiBbXSxcbiAgICB0b2tlbnM6IHt9XG59O1xuY29uc3QgVkVSU0lPTiA9IFwiMS4wXCI7XG5jb25zdCBDT05GSUcgPSB7XG4gICAga2V5OiBgVG9rZW5Ub0NvZGUtJHtWRVJTSU9OfWAsXG4gICAgc3RvcmU6IENPTkZJR19ERUZBVUxULFxuICAgIGNoYW5nZUpTWDogKHZhbHVlKSA9PiB7XG4gICAgICAgIGNvbnN0IHN0b3JlID0gQ09ORklHLmdldEN1cnJlbnQoKTtcbiAgICAgICAgLy8g6YeN572u5Zue56ys5LiA5LiqXG4gICAgICAgIHN0b3JlLmlzSlNYID0gdmFsdWU7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHN0b3JlKTtcbiAgICAgICAgZmlnbWEuY2xpZW50U3RvcmFnZS5zZXRBc3luYyhDT05GSUcua2V5LCBzdG9yZSk7XG4gICAgfSxcbiAgICBlZGl0OiAoZGF0YSkgPT4ge1xuICAgICAgICBDT05GSUcuc3RvcmUgPSBkYXRhO1xuICAgICAgICBmaWdtYS5jbGllbnRTdG9yYWdlLnNldEFzeW5jKENPTkZJRy5rZXksIGRhdGEpO1xuICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBhbGVydE1zZzogYFNhdmUgc3VjY2Vzc2BcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBhZGRUb2tlbjogKGRhdGEpID0+IHtcbiAgICAgICAgY29uc3QgX2EgPSBDT05GSUcuZ2V0Q3VycmVudCgpLCB7IHRva2VucyB9ID0gX2EsIHJlc3QgPSBfX3Jlc3QoX2EsIFtcInRva2Vuc1wiXSk7XG4gICAgICAgIGNvbnN0IG5ld1N0b3JlID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCByZXN0KSwgeyB0b2tlbnM6IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgdG9rZW5zKSwgZGF0YSkgfSk7XG4gICAgICAgIENPTkZJRy5zdG9yZSA9IG5ld1N0b3JlO1xuICAgICAgICBmaWdtYS5jbGllbnRTdG9yYWdlLnNldEFzeW5jKENPTkZJRy5rZXksIG5ld1N0b3JlKTtcbiAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgYWxlcnRNc2c6IGBTYXZlIHN1Y2Nlc3NgXG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgaXNKU1g6ICgpID0+IHtcbiAgICAgICAgcmV0dXJuICEhQ09ORklHLnN0b3JlLmlzSlNYO1xuICAgIH0sXG4gICAgaW5pdDogKCkgPT4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGZpZ21hLmNsaWVudFN0b3JhZ2UuZ2V0QXN5bmMoQ09ORklHLmtleSkudGhlbigocmV0ID0gbnVsbCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgQ09ORklHLnN0b3JlID0gcmV0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g5rKh5pyJ57yT5a2Y5Yib5bu65LiA5Liq5paw55qEXG4gICAgICAgICAgICAgICAgICAgIGZpZ21hLmNsaWVudFN0b3JhZ2Uuc2V0QXN5bmMoQ09ORklHLmtleSwgQ09ORklHX0RFRkFVTFQpO1xuICAgICAgICAgICAgICAgICAgICBDT05GSUcuc3RvcmUgPSBDT05GSUdfREVGQVVMVDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShDT05GSUcuZ2V0VG9rZW4oKSk7XG4gICAgICAgICAgICB9KS5jYXRjaChyZWplY3QpO1xuICAgICAgICB9KSk7XG4gICAgfSxcbiAgICBnZXRDdXJyZW50OiAoKSA9PiB7XG4gICAgICAgIHJldHVybiBDT05GSUcuc3RvcmU7XG4gICAgfSxcbiAgICBnZXRUb2tlbjogKCkgPT4ge1xuICAgICAgICBjb25zdCB7IHRva2VucyA9IG51bGwgfSA9IENPTkZJRy5zdG9yZSB8fCB7fTtcbiAgICAgICAgcmV0dXJuIHRva2VucyA/IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodG9rZW5zKSkgOiBudWxsO1xuICAgIH0sXG4gICAgZ2V0SW5mb0J5SWQ6IChpZCwgdHlwZSA9IFwiREVGQVVMVFwiKSA9PiB7XG4gICAgICAgIGlmICghKGlkICYmICh0eXBlb2YgaWQgPT09ICdzdHJpbmcnKSkpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsga2V5ID0gJycgfSA9IGZpZ21hLmdldFN0eWxlQnlJZChpZCkgfHwge307XG4gICAgICAgIGlmICgha2V5KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB0b2tlbkNvbmZpZyA9IENPTkZJRy5nZXRUb2tlbigpIHx8IHt9O1xuICAgICAgICBjb25zdCBtYXRjaFRva2VuID0gdG9rZW5Db25maWdba2V5XSB8fCB7fTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2dldEluZm9CeUlkJywgbWF0Y2hUb2tlbiwgdHlwZSlcbiAgICAgICAgLy8g5aaC5p6c5pyJ6Ieq5a6a5LmJ55So6Ieq5a6a5LmJ55qEXG4gICAgICAgIHJldHVybiBtYXRjaFRva2VuW3R5cGVdIHx8IG1hdGNoVG9rZW4uREVGQVVMVCB8fCBudWxsO1xuICAgIH0sXG4gICAgZ2V0U2VsZWN0aW9uVG9rZW5zOiAoc2VsZWN0aW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgdG9rZW5zID0ge30gfSA9IENPTkZJRy5zdG9yZTtcbiAgICAgICAgaWYgKCFzZWxlY3Rpb24pIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgc2VsZWN0aW9uVG9rZW5zOiBudWxsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG1hdGNoVG9rZW4gPSB7fTtcbiAgICAgICAgLy8g5aaC5p6c5piv57uE5Lu2XG4gICAgICAgIGlmIChDT01QT05FTlQuaXNDb21wb25lbnQoc2VsZWN0aW9uKSkge1xuICAgICAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgICAgICBjb25zdCB7IGtleSwgbmFtZSwgdHlwZSB9ID0gQ09NUE9ORU5ULmdldE1haW5Db21wb25lbnQoc2VsZWN0aW9uKTtcbiAgICAgICAgICAgIGNvbnN0IGZpbmRUb2tlbiA9IHRva2Vuc1trZXldIHx8IHt9O1xuICAgICAgICAgICAgbWF0Y2hUb2tlbltrZXldID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHsgREVGQVVMVDoge1xuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFtdLFxuICAgICAgICAgICAgICAgICAgICBfaWdub3JlQ2xhc3NOYW1lOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgX3JlbmRlcldpZHRoOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgX3JlbmRlckhlaWdodDogZmFsc2UsXG4gICAgICAgICAgICAgICAgfSB9LCBmaW5kVG9rZW4pLCB7IF90b2tlbk5hbWU6IG5hbWUsIF90b2tlblR5cGU6IHR5cGUgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgIFtzZWxlY3Rpb24uZmlsbFN0eWxlSWQsIHNlbGVjdGlvbi50ZXh0U3R5bGVJZCwgc2VsZWN0aW9uLnN0cm9rZVN0eWxlSWQsIHNlbGVjdGlvbi5lZmZlY3RTdHlsZUlkLCBzZWxlY3Rpb24uZ3JpZFN0eWxlSWRdLmZvckVhY2goKGl0ZW0sIGtleSkgPT4ge1xuICAgICAgICAgICAgaWYgKCFpdGVtKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgeyBrZXk6IHN0eWxlS2V5LCBuYW1lLCB0eXBlIH0gPSBmaWdtYS5nZXRTdHlsZUJ5SWQoaXRlbSkgfHwge307XG4gICAgICAgICAgICBpZiAoIXN0eWxlS2V5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGV4dHJhVG9rZW4gPSBudWxsO1xuICAgICAgICAgICAgLy8g5aaC5p6c5pyJIGZpbGxTdHlsZUlkXG4gICAgICAgICAgICBpZiAoa2V5ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgZXh0cmFUb2tlbiA9IHtcbiAgICAgICAgICAgICAgICAgICAgLy8g5Y+v5Lul6aKd5aSW5a+55paH5a2X6L+b6KGM6K6+572uXG4gICAgICAgICAgICAgICAgICAgIFwiVEVYVFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2lnbm9yZUNsYXNzTmFtZTogW11cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtYXRjaFRva2VuW3N0eWxlS2V5XSA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHsgREVGQVVMVDoge1xuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFtdLFxuICAgICAgICAgICAgICAgICAgICBfaWdub3JlQ2xhc3NOYW1lOiBbXVxuICAgICAgICAgICAgICAgIH0gfSwgZXh0cmFUb2tlbiksIHRva2Vuc1tzdHlsZUtleV0pLCB7IF90b2tlbk5hbWU6IG5hbWUsIF90b2tlblR5cGU6IHR5cGUgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc2VsZWN0aW9uVG9rZW5zOiBtYXRjaFRva2VuXG4gICAgICAgIH07XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiDojrflj5bmiYDmnInnmoQgVG9rZW4g5YyF5ousIENvbXBvbmVudFxuICAgICAqL1xuICAgIGdldEFsbFRva2VuczogKCkgPT4ge1xuICAgICAgICBjb25zdCBuYW1lID0gZmlnbWEucm9vdC5uYW1lO1xuICAgICAgICBjb25zdCBjb21wb25lbnRzID0gZmlnbWEucm9vdC5maW5kQWxsKGMgPT4ge1xuICAgICAgICAgICAgaWYgKGMudHlwZSA9PT0gJ0NPTVBPTkVOVF9TRVQnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYy50eXBlICE9PSAnQ09NUE9ORU5UJykge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjLnBhcmVudC50eXBlID09PSAnQ09NUE9ORU5UX1NFVCcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IHRva2VuID0ge307XG4gICAgICAgIGNvbnN0IGFkZENvbmZpZyA9IChkYXRhID0gW10pID0+IHtcbiAgICAgICAgICAgIGRhdGEuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIHRva2VuW2l0ZW0uaWRdID0ge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBpdGVtLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IGl0ZW0udHlwZVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgYWRkQ29uZmlnKGNvbXBvbmVudHMpO1xuICAgICAgICBhZGRDb25maWcoZmlnbWEuZ2V0TG9jYWxQYWludFN0eWxlcygpKTtcbiAgICAgICAgYWRkQ29uZmlnKGZpZ21hLmdldExvY2FsVGV4dFN0eWxlcygpKTtcbiAgICAgICAgYWRkQ29uZmlnKGZpZ21hLmdldExvY2FsRWZmZWN0U3R5bGVzKCkpO1xuICAgICAgICBhZGRDb25maWcoZmlnbWEuZ2V0TG9jYWxHcmlkU3R5bGVzKCkpO1xuICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICBnb3RBbGxUb2tlbnM6IHtcbiAgICAgICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgICAgIGlnbm9yZUNsYXNzTmFtZTogJycsXG4gICAgICAgICAgICAgICAgdG9rZW5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IENPTkZJRztcbiIsImltcG9ydCBDT01QT05FTlQgZnJvbSBcIi4vQ09NUE9ORU5UXCI7XG5pbXBvcnQgRklMTCBmcm9tIFwiLi90b2tlbi9GSUxMXCI7XG5pbXBvcnQgVEVYVCBmcm9tIFwiLi90b2tlbi9URVhUXCI7XG5pbXBvcnQgU1RST0tFIGZyb20gXCIuL3Rva2VuL1NUUk9LRVwiO1xuaW1wb3J0IEdSSUQgZnJvbSBcIi4vdG9rZW4vR1JJRFwiO1xuaW1wb3J0IEZMRVggZnJvbSBcIi4vdG9rZW4vRkxFWFwiO1xuaW1wb3J0IFNBQ1NTIGZyb20gXCIuL1NBQ1NTXCI7XG5pbXBvcnQgVVRJTFMgZnJvbSBcIi4vVVRJTFNcIjtcbmltcG9ydCBFRkZFQ1QgZnJvbSBcIi4vdG9rZW4vRUZGRUNUXCI7XG5pbXBvcnQgT1RIRVJTIGZyb20gXCIuL3Rva2VuL09USEVSU1wiO1xuaW1wb3J0IENPTkZJRyBmcm9tIFwiLi9DT05GSUdcIjtcbmNvbnN0IE5PREUgPSB7XG4gICAgLyoqXG4gICAgICog5aaC5p6c5LiA5Liq5YWD57Sg5YaF6YOo5Y+q5pyJ5Yeg5L2V5Zu+5b2i77yM6YKj5LmI5Y+q5pi+56S65YW257uT5p6EXG4gICAgICovXG4gICAgaXNTdHJ1Y3ROb2RlOiAobm9kZSkgPT4ge1xuICAgICAgICAvLyDku6Uj5Y+35byA5aS0XG4gICAgICAgIGlmIChub2RlLm5hbWUuc3RhcnRzV2l0aChcIiNcIikpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHllc1R5cGVzID0gWydSRUNUQU5HTEUnLCAnVkVDVE9SJywgJ1NUQVInLCAnTElORScsICdQT0xZR09OJywgJ0VMTElQU0UnLCAnU0xJQ0UnXTtcbiAgICAgICAgLy8g5aaC5p6c5pys6Lqr5bCx5piv6L+Z5Lqb5YWD57Sg6YKj5LmI5Lmf5piv55u05o6l6L6T5Ye6XG4gICAgICAgIGlmICh5ZXNUeXBlcy5pbmRleE9mKG5vZGUudHlwZSkgPiAtMSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5vZGUudHlwZSA9PT0gJ1RFWFQnKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBjb25zdCB7IGNoaWxkcmVuID0gW10gfSA9IG5vZGU7XG4gICAgICAgIGlmICghY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICAvLyDmib7liLDkuobkuI3lkIjms5XlhYPntKDvvIjkuI3lnKjkuIrpnaLnmoTlh6DkvZXliJfooajph4zpnaLvvIlcbiAgICAgICAgY29uc3QgZ290Tm8gPSBjaGlsZHJlbi5maW5kKChpdGVtKSA9PiBpdGVtLnZpc2libGUgJiYgeWVzVHlwZXMuaW5kZXhPZihpdGVtLnR5cGUpID09PSAtMSk7XG4gICAgICAgIHJldHVybiAhZ290Tm87XG4gICAgfSxcbiAgICBpc1JlbmRlckNoaWxkcmVuOiAobm9kZSkgPT4ge1xuICAgICAgICBpZiAoIShub2RlLnR5cGUgPT09ICdJTlNUQU5DRScgfHwgbm9kZS50eXBlID09PSAnQ09NUE9ORU5UJykpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyDlj6rmnInkuIDkuKrlrZDlhYPntKBcbiAgICAgICAgaWYgKG5vZGUuY2hpbGRyZW4ubGVuZ3RoICE9PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gY29uc3Qgb25seUNoaWxkcmVuID0gbm9kZS5jaGlsZHJlblswXTtcbiAgICAgICAgLy8gaWYgKG9ubHlDaGlsZHJlbi50eXBlID09PSAnSU5TVEFOQ0UnKSB7XG4gICAgICAgIC8vICAgcmV0dXJuIHRydWU7XG4gICAgICAgIC8vIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0sXG4gICAgZ2V0Tm9kZUluZm86IChub2RlKSA9PiB7XG4gICAgICAgIGlmICghbm9kZS52aXNpYmxlIHx8IG5vZGUubmFtZS5zdGFydHNXaXRoKFwiX1wiKSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgLy8g55u05o6l5riy5p+T5a2Q5YWD57SgXG4gICAgICAgIGlmIChOT0RFLmlzUmVuZGVyQ2hpbGRyZW4obm9kZSkpIHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmU7XG4gICAgICAgICAgICByZXR1cm4gTk9ERS5nZXROb2RlSW5mbyhub2RlLmNoaWxkcmVuWzBdKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpc1N0cnVjdE5vZGUgPSBOT0RFLmlzU3RydWN0Tm9kZShub2RlKTtcbiAgICAgICAgbGV0IG5vZGVJbmZvID0ge1xuICAgICAgICAgICAgX2lnbm9yZUNsYXNzTmFtZTogW10sXG4gICAgICAgICAgICBjbGFzc05hbWU6IFtdLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtdXG4gICAgICAgIH07XG4gICAgICAgIGlmIChpc1N0cnVjdE5vZGUpIHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIG5vZGVJbmZvLnRhZ05hbWUgPSAnaSc7XG4gICAgICAgIH1cbiAgICAgICAgbm9kZUluZm8gPSBDT01QT05FTlQuZ2V0SW5mbyhub2RlLCBub2RlSW5mbyk7XG4gICAgICAgIG5vZGVJbmZvID0gRklMTC5nZXRJbmZvKG5vZGUsIG5vZGVJbmZvKTtcbiAgICAgICAgbm9kZUluZm8gPSBURVhULmdldEluZm8obm9kZSwgbm9kZUluZm8pO1xuICAgICAgICBub2RlSW5mbyA9IFNUUk9LRS5nZXRJbmZvKG5vZGUsIG5vZGVJbmZvKTtcbiAgICAgICAgbm9kZUluZm8gPSBHUklELmdldEluZm8obm9kZSwgbm9kZUluZm8pO1xuICAgICAgICBub2RlSW5mbyA9IEVGRkVDVC5nZXRJbmZvKG5vZGUsIG5vZGVJbmZvKTtcbiAgICAgICAgbm9kZUluZm8gPSBPVEhFUlMuZ2V0SW5mbyhub2RlLCBub2RlSW5mbyk7XG4gICAgICAgIG5vZGVJbmZvID0gRkxFWC5nZXRJbmZvKG5vZGUsIG5vZGVJbmZvKTtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBpZiAoKGlzU3RydWN0Tm9kZSAmJiBTdHJpbmcobm9kZUluZm8gPT09IG51bGwgfHwgbm9kZUluZm8gPT09IHZvaWQgMCA/IHZvaWQgMCA6IG5vZGVJbmZvLl9yZW5kZXJIZWlnaHQpICE9PSBmYWxzZSkgfHwgU3RyaW5nKG5vZGVJbmZvID09PSBudWxsIHx8IG5vZGVJbmZvID09PSB2b2lkIDAgPyB2b2lkIDAgOiBub2RlSW5mby5fcmVuZGVyV2lkdGgpID09PSB0cnVlKSB7XG4gICAgICAgICAgICBub2RlSW5mby5jbGFzc05hbWUucHVzaChTQUNTUy5hZGQoJ3cnLCBwYXJzZUludChTdHJpbmcobm9kZS53aWR0aCkpKSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBpZiAoKGlzU3RydWN0Tm9kZSAmJiBTdHJpbmcobm9kZUluZm8gPT09IG51bGwgfHwgbm9kZUluZm8gPT09IHZvaWQgMCA/IHZvaWQgMCA6IG5vZGVJbmZvLl9yZW5kZXJIZWlnaHQpICE9PSBmYWxzZSkgfHwgU3RyaW5nKG5vZGVJbmZvID09PSBudWxsIHx8IG5vZGVJbmZvID09PSB2b2lkIDAgPyB2b2lkIDAgOiBub2RlSW5mby5fcmVuZGVySGVpZ2h0KSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgbm9kZUluZm8uY2xhc3NOYW1lLnB1c2goU0FDU1MuYWRkKCdoJywgcGFyc2VJbnQoU3RyaW5nKG5vZGUuaGVpZ2h0KSkpKTtcbiAgICAgICAgfVxuICAgICAgICBub2RlSW5mby5jaGlsZHJlbiA9ICgoKSA9PiB7XG4gICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICBpZiAobm9kZS50eXBlID09PSAnVEVYVCcpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0ZXh0cyA9IFRFWFQuZ2V0VGV4dENoaWxkcmVuKG5vZGUpO1xuICAgICAgICAgICAgICAgIC8vIOWkmuauteaWh+acrOi/memHjOimgeS/ruWkjeS4gOS4i+W1jOWll+eahOagh+etvu+8jOacieWPr+iDveWPmOaIkCBzdHJvbmcgPiBwIOi/meagt+eahOe7k+aehFxuICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICBpZiAoKChfYSA9IHRleHRzWzBdKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EudGFnTmFtZSkgPT09ICdwJykge1xuICAgICAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgICAgICAgIG5vZGVJbmZvLnRhZ05hbWUgPSBcImRpdlwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdGV4dHM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaXNTdHJ1Y3ROb2RlIHx8IG5vZGVJbmZvLmNoaWxkcmVuID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgcmV0dXJuIE5PREUuZ2V0Tm9kZXNJbmZvKG5vZGUuY2hpbGRyZW4pO1xuICAgICAgICB9KSgpO1xuICAgICAgICAvLyDmlbTkuKrpobnnm67pg73lv73nlaXnmoQgY2xhc3NOYW1lXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgY29uc3QgeyBfaWdub3JlQ2xhc3NOYW1lID0gW10gfSA9IENPTkZJRy5nZXRDdXJyZW50KCkgfHwge307XG4gICAgICAgIG5vZGVJbmZvLmNsYXNzTmFtZSA9IFVUSUxTLmNsZWFyQ2xhc3NOYW1lKG5vZGVJbmZvLmNsYXNzTmFtZSwgWy4uLm5vZGVJbmZvLl9pZ25vcmVDbGFzc05hbWUsIC4uLl9pZ25vcmVDbGFzc05hbWVdKTtcbiAgICAgICAgaWYgKChub2RlSW5mby5jaGlsZHJlbiBpbnN0YW5jZW9mIEFycmF5KSAmJiBub2RlSW5mby5jaGlsZHJlbi5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkcmVuSW5mbyA9IG5vZGVJbmZvLmNoaWxkcmVuWzBdO1xuICAgICAgICAgICAgLy8g5aaC5p6c54i25YWD57Sg5ZKM5a2Q5YWD57SgIHRhZ05hbWUg55u45ZCM5ZCI5bm2IGNsYXNzTmFtZVxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjaGlsZHJlbkluZm8gIT09ICdzdHJpbmcnICYmIGNoaWxkcmVuSW5mby50YWdOYW1lID09PSBub2RlSW5mby50YWdOYW1lKSB7XG4gICAgICAgICAgICAgICAgY2hpbGRyZW5JbmZvLmNsYXNzTmFtZSA9IFsuLi5jaGlsZHJlbkluZm8uY2xhc3NOYW1lLCAuLi5ub2RlSW5mby5jbGFzc05hbWVdO1xuICAgICAgICAgICAgICAgIHJldHVybiBjaGlsZHJlbkluZm87XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gY29uc29sZS5sb2coe25vZGVJbmZvfSk7XG4gICAgICAgIHJldHVybiBub2RlSW5mbztcbiAgICB9LFxuICAgIHNvcnQ6IChub2RlcyA9IFtdKSA9PiB7XG4gICAgICAgIHJldHVybiBbLi4ubm9kZXNdLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGFZID0gYS55ICsgYS5oZWlnaHQ7XG4gICAgICAgICAgICBjb25zdCBiWSA9IGIueSArIGIuaGVpZ2h0O1xuICAgICAgICAgICAgaWYgKGEueSA9PT0gYi55KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGEueCAtIGIueDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBhWSAtIGJZO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIGdldE5vZGVzSW5mbzogKG5vZGVzID0gW10pID0+IHtcbiAgICAgICAgbGV0IGluZm8gPSBbXTtcbiAgICAgICAgLy8g6ZyA6KaB5o6S5bqP5LiA5LiLXG4gICAgICAgIGNvbnN0IHNvcnROb2RlcyA9IE5PREUuc29ydChub2Rlcyk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKG5vZGVzLCBzb3J0Tm9kZXMpO1xuICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gc29ydE5vZGVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBub2RlSW5mbyA9IE5PREUuZ2V0Tm9kZUluZm8oc29ydE5vZGVzW2ldKTtcbiAgICAgICAgICAgIGlmICghbm9kZUluZm8pIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChub2RlSW5mbyBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICAgICAgaW5mbyA9IFsuLi5pbmZvLCAuLi5ub2RlSW5mb107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpbmZvLnB1c2gobm9kZUluZm8pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpbmZvO1xuICAgIH1cbn07XG5leHBvcnQgZGVmYXVsdCBOT0RFO1xuIiwiY29uc3QgU0FDU1MgPSB7XG4gICAgZGF0YToge30sXG4gICAgaW5pdDogKCkgPT4ge1xuICAgICAgICBTQUNTUy5kYXRhID0ge307XG4gICAgfSxcbiAgICBuYW1lTWFwOiB7XG4gICAgICAgICdmcyc6ICdmb250LXNpemUnLFxuICAgICAgICAnbGgnOiAnbGluZS1oZWlnaHQnLFxuICAgICAgICAnbHMnOiAnbGV0dGVyLXNwYWNlJyxcbiAgICAgICAgJ2ZmJzogJ2ZvbnQtZmFtaWx5JyxcbiAgICAgICAgJ3B0JzogJ3BhZGRpbmctdG9wJyxcbiAgICAgICAgJ3ByJzogJ3BhZGRpbmctcmlnaHQnLFxuICAgICAgICAncGInOiAncGFkZGluZy1ib3R0b20nLFxuICAgICAgICAncGwnOiAncGFkZGluZy1sZWZ0JyxcbiAgICAgICAgJ210JzogJ21hcmdpbi10b3AnLFxuICAgICAgICAnbXInOiAnbWFyZ2luLXJpZ2h0JyxcbiAgICAgICAgJ21iJzogJ21hcmdpbi1ib3R0b20nLFxuICAgICAgICAnbWwnOiAnbWFyZ2luLWxlZnQnLFxuICAgICAgICAnaCc6ICdoZWlnaHQnLFxuICAgICAgICAndyc6ICd3aWR0aCcsXG4gICAgICAgICdidGxyJzogJ2JvcmRlci10b3AtbGVmdC1yYWRpdXMnLFxuICAgICAgICAnYnRycic6ICdib3JkZXItdG9wLXJpZ2h0LXJhZGl1cycsXG4gICAgICAgICdiYnJyJzogJ2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzJyxcbiAgICAgICAgJ2JibHInOiAnYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1cycsXG4gICAgICAgICdicic6ICdib3JkZXItcmFkaXVzJ1xuICAgIH0sXG4gICAgZ2V0Q2xhc3NTZWxlY3RvckJ5TmFtZTogKGNsYXNzTmFtZSA9ICcnKSA9PiB7XG4gICAgICAgIGlmIChjbGFzc05hbWUuaW5kZXhPZignLicpID4gLTEpIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IGNsYXNzTmFtZS5yZXBsYWNlKC9cXC4vZywgJ1xcXFwuJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNsYXNzTmFtZS5pbmRleE9mKCc6JykgPiAtMSkge1xuICAgICAgICAgICAgY2xhc3NOYW1lID0gY2xhc3NOYW1lLnJlcGxhY2UoL1xcOi9nLCAnXFxcXDonKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2xhc3NOYW1lLmluZGV4T2YoJyUnKSA+IC0xKSB7XG4gICAgICAgICAgICBjbGFzc05hbWUgPSBjbGFzc05hbWUucmVwbGFjZSgvXFwlL2csICdcXFxcJScpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjbGFzc05hbWU7XG4gICAgfSxcbiAgICBnZXRTdHJpbmc6ICgpID0+IHtcbiAgICAgICAgY29uc3QgZGF0YSA9IFNBQ1NTLmRhdGE7XG4gICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhkYXRhKS5zb3J0KCk7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGtleXMubWFwKChuYW1lKSA9PiBgLiR7U0FDU1MuZ2V0Q2xhc3NTZWxlY3RvckJ5TmFtZShuYW1lKX17JHtkYXRhW25hbWVdfTt9YCkuam9pbignXFxuJyk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSxcbiAgICBhZGQ6IChuYW1lID0gJycsIHZhbHVlLCB1bml0ID0gJ3B4JykgPT4ge1xuICAgICAgICBpZiAoIW5hbWUgfHwgIXZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcHJvcE5hbWUgPSBTQUNTUy5uYW1lTWFwW25hbWVdO1xuICAgICAgICBpZiAoIXByb3BOYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cbiAgICAgICAgLy8g5Y+q5L+d55WZ5Lik5L2N5bCP5pWwXG4gICAgICAgIGNvbnN0IHVzZVZhbHVlID0gTnVtYmVyKHZhbHVlKSA/IHBhcnNlRmxvYXQoTnVtYmVyKHZhbHVlKS50b0ZpeGVkKDIpKSA6IHZhbHVlO1xuICAgICAgICAvLyDlpoLmnpzmmK8gcHgg5LiN6ZyA6KaB5riy5p+TXG4gICAgICAgIGNvbnN0IGNsYXNzVW5pdCA9IHVuaXQgPT09ICdweCcgPyAnJyA6IHVuaXQ7XG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IGAke25hbWV9JHt1c2VWYWx1ZX0ke2NsYXNzVW5pdH1gO1xuICAgICAgICBTQUNTUy5kYXRhW2NsYXNzTmFtZV0gPSBgJHtwcm9wTmFtZX06JHt1c2VWYWx1ZX0ke3VuaXR9YDtcbiAgICAgICAgcmV0dXJuIGNsYXNzTmFtZTtcbiAgICB9LFxuICAgIGFkZEZvbnRGYW1pbHk6ICh2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdmFsdWVPayA9IHZhbHVlLnJlcGxhY2UoL1tcXFddL2csICcnKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBgZmZfJHt2YWx1ZU9rfWA7XG4gICAgICAgIFNBQ1NTLmRhdGFbY2xhc3NOYW1lXSA9IGBmb250LWZhbWlseTpcIiR7dmFsdWV9XCJgO1xuICAgICAgICByZXR1cm4gY2xhc3NOYW1lO1xuICAgIH0sXG4gICAgYWRkQ29sb3I6IChyZ2JhID0gW10pID0+IHtcbiAgICAgICAgaWYgKCFyZ2JhICYmIHJnYmEubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gYGNfJHtyZ2JhLmpvaW4oJycpfWA7XG4gICAgICAgIFNBQ1NTLmRhdGFbY2xhc3NOYW1lXSA9IGBjb2xvcjpyZ2JhKCR7cmdiYS5qb2luKCcsJyl9KWA7XG4gICAgICAgIHJldHVybiBjbGFzc05hbWU7XG4gICAgfSxcbiAgICBhZGRCZ0NvbG9yOiAocmdiYSA9IFtdKSA9PiB7XG4gICAgICAgIGlmICghcmdiYSAmJiByZ2JhLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IGBiY18ke3JnYmEuam9pbignJyl9YDtcbiAgICAgICAgU0FDU1MuZGF0YVtjbGFzc05hbWVdID0gYGJhY2tncm91bmQtY29sb3I6cmdiYSgke3JnYmEuam9pbignLCcpfSlgO1xuICAgICAgICByZXR1cm4gY2xhc3NOYW1lO1xuICAgIH1cbn07XG5leHBvcnQgZGVmYXVsdCBTQUNTUztcbiIsImNvbnN0IFVUSUxTID0ge1xuICAgIGlzQmxvY2s6ICh0YWdOYW1lID0gJycpID0+IHtcbiAgICAgICAgY29uc3QgYmxvY2tUYWcgPSBbJ2RpdicsICdoMScsICdoMicsICdoMycsICdoNCcsICdoNScsICdoNicsICdwJ107XG4gICAgICAgIHJldHVybiBibG9ja1RhZy5pbmRleE9mKHRhZ05hbWUpID4gLTE7XG4gICAgfSxcbiAgICBpc1NlbGZUYWc6ICh0YWdOYW1lID0gJycpID0+IHtcbiAgICAgICAgY29uc3Qgc2VsZlRhZyA9IFsnaW1nJywgJ2xpbmsnLCAnbWV0YScsICdicicsICdicicsICdocicsICdpbnB1dCcsICdjb2wnLCAnZnJhbWUnLCAnYXJlYScsICdwYXJhbScsICdvYmplY3QnLCAnZW1iZWQnLCAna2V5Z2VuJywgJ3NvdXJjZSddO1xuICAgICAgICByZXR1cm4gc2VsZlRhZy5pbmRleE9mKHRhZ05hbWUpID4gLTE7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiDljrvph43lkozljrvnqbpcbiAgICAgKiBAcGFyYW0gYXJyU3RyXG4gICAgICovXG4gICAgY2xlYXJDbGFzc05hbWU6IChjbGFzc05hbWUgPSBbXSwgaWdub3JlQ2xhc3NOYW1lID0gW10pID0+IHtcbiAgICAgICAgaWYgKCFjbGFzc05hbWUgfHwgY2xhc3NOYW1lLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgICAgICBjbGFzc05hbWUuZm9yRWFjaCgoaXRlbSA9ICcnKSA9PiB7XG4gICAgICAgICAgICBpZiAoaXRlbSAmJiBpdGVtICE9PSAnbnVsbCcgJiYgcmVzdWx0LmluZGV4T2YoaXRlbSkgPT09IC0xICYmIGlnbm9yZUNsYXNzTmFtZS5pbmRleE9mKGl0ZW0pID09PSAtMSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGl0ZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgVVRJTFM7XG4iLCJpbXBvcnQgSFRNTCBmcm9tIFwiLi9IVE1MXCI7XG5pbXBvcnQgSlNYIGZyb20gXCIuL0pTWFwiO1xuY29uc3QgRE9NID0ge1xuICAgIHJlbmRlcjogKG9iaiwgaXNKU1gpID0+IHtcbiAgICAgICAgaWYgKGlzSlNYKSB7XG4gICAgICAgICAgICByZXR1cm4gSlNYLmdldEl0ZW1Eb20ob2JqKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gSFRNTC5nZXRJdGVtRG9tKG9iaik7XG4gICAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IERPTTtcbiIsInZhciBfX3Jlc3QgPSAodGhpcyAmJiB0aGlzLl9fcmVzdCkgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgICB2YXIgdCA9IHt9O1xuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxuICAgICAgICB0W3BdID0gc1twXTtcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcbiAgICAgICAgfVxuICAgIHJldHVybiB0O1xufTtcbmltcG9ydCBVVElMUyBmcm9tIFwiLi4vVVRJTFNcIjtcbi8vIGxlZ2FsIOWQiOazleWxnuaAp1xuLy8gY29uc3QgbGVnYWxQcm9wID0gWydjbGFzcycsICd0eXBlJywgJ25hbWUnLCAncm9sZScsICdkaXNhYmxlZCcsICdpZCcsICd0aXRsZScsICdsYW5nJywgJ2RpcicsICd0YWJpbmRleCcsICdhY2Nlc3NrZXknLCAnc3JjJywgJ2hyZWYnLCAnc3R5bGUnLCAnYXJpYS1oaWRkZW4nLCAndGFyZ2V0JywgJ3JlbCddO1xuY29uc3QgSFRNTCA9IHtcbiAgICBnZXRQcm9wc1N0cmluZ0J5T2JqZWN0OiAocHJvcHMpID0+IHtcbiAgICAgICAgY29uc3QgYXJyUHJvcHMgPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMocHJvcHMpKSB7XG4gICAgICAgICAgICAvLyDlv73nlaUgJ18nIOW8gOWktOeahOWxnuaAp1xuICAgICAgICAgICAgaWYgKCFrZXkuc3RhcnRzV2l0aCgnXycpKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RyVmFsdWUgPSB2YWx1ZSBpbnN0YW5jZW9mIEFycmF5ID8gdmFsdWUuam9pbignICcpIDogdmFsdWU7XG4gICAgICAgICAgICAgICAgY29uc3Qga2V5TmFtZSA9IGtleSA9PT0gJ2NsYXNzTmFtZScgPyAnY2xhc3MnIDoga2V5O1xuICAgICAgICAgICAgICAgIHN0clZhbHVlICYmIGFyclByb3BzLnB1c2goYCR7a2V5TmFtZX09XCIke3N0clZhbHVlfVwiYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFyclByb3BzLmpvaW4oJyAnKTtcbiAgICB9LFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBnZXRJdGVtRG9tOiAoaXRlbSkgPT4ge1xuICAgICAgICBpZiAoIWl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGl0ZW0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IHRhZ05hbWU6IF90YWdOYW1lLCBjaGlsZHJlbiA9IFtdIH0gPSBpdGVtLCBwcm9wcyA9IF9fcmVzdChpdGVtLCBbXCJ0YWdOYW1lXCIsIFwiY2hpbGRyZW5cIl0pO1xuICAgICAgICBjb25zdCB0YWdOYW1lID0gX3RhZ05hbWUgPyBfdGFnTmFtZS50b0xvd2VyQ2FzZSgpIDogJ2Rpdic7XG4gICAgICAgIGNvbnN0IHN0clByb3BzID0gSFRNTC5nZXRQcm9wc1N0cmluZ0J5T2JqZWN0KHByb3BzKTtcbiAgICAgICAgY29uc3QgdGFnU3RhcnQgPSBgJHt0YWdOYW1lfSR7c3RyUHJvcHMgPyBgICR7c3RyUHJvcHN9YCA6ICcnfWA7XG4gICAgICAgIGlmIChVVElMUy5pc1NlbGZUYWcodGFnTmFtZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBgPCR7dGFnU3RhcnR9Lz5gO1xuICAgICAgICB9XG4gICAgICAgIGlmICghY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gYDwke3RhZ1N0YXJ0fT48LyR7dGFnTmFtZX0+YDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYDwke3RhZ1N0YXJ0fT4ke0hUTUwuZ2V0RG9tQnlBcnJheShjaGlsZHJlbil9PC8ke3RhZ05hbWV9PmA7XG4gICAgfSxcbiAgICBnZXREb21CeUFycmF5OiAob2JqID0gW10pID0+IHtcbiAgICAgICAgcmV0dXJuIG9iai5tYXAoKGl0ZW0pID0+IEhUTUwuZ2V0SXRlbURvbShpdGVtKSkuam9pbignJyk7XG4gICAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IEhUTUw7XG4iLCJ2YXIgX19yZXN0ID0gKHRoaXMgJiYgdGhpcy5fX3Jlc3QpIHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gICAgdmFyIHQgPSB7fTtcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcbiAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XG4gICAgICAgIH1cbiAgICByZXR1cm4gdDtcbn07XG5pbXBvcnQgVVRJTFMgZnJvbSBcIi4uL1VUSUxTXCI7XG5jb25zdCBKU1ggPSB7XG4gICAgZ2V0UHJvcHNTdHJpbmc6IChwcm9wcykgPT4ge1xuICAgICAgICBjb25zdCBhcnJQcm9wcyA9IFtdO1xuICAgICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhwcm9wcykpIHtcbiAgICAgICAgICAgIC8vIOW/veeVpSAnXycg5byA5aS055qE5bGe5oCnXG4gICAgICAgICAgICBpZiAoIWtleS5zdGFydHNXaXRoKCdfJykpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzdHJWYWx1ZSA9IHZhbHVlIGluc3RhbmNlb2YgQXJyYXkgPyB2YWx1ZS5qb2luKCcgJykgOiB2YWx1ZTtcbiAgICAgICAgICAgICAgICBzdHJWYWx1ZSAmJiBhcnJQcm9wcy5wdXNoKGAke2tleX09XCIke3N0clZhbHVlfVwiYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFyclByb3BzLmpvaW4oJyAnKTtcbiAgICB9LFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBnZXRJdGVtRG9tOiAoaXRlbSkgPT4ge1xuICAgICAgICBpZiAoIWl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGl0ZW0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgfVxuICAgICAgICAvLyBjb25zb2xlLmxvZyh7aXRlbX0pO1xuICAgICAgICBjb25zdCB7IHRhZ05hbWUgPSAnZGl2JywgY2hpbGRyZW4gPSBbXSB9ID0gaXRlbSwgcHJvcHMgPSBfX3Jlc3QoaXRlbSwgW1widGFnTmFtZVwiLCBcImNoaWxkcmVuXCJdKTtcbiAgICAgICAgY29uc3Qgc3RyUHJvcHMgPSBKU1guZ2V0UHJvcHNTdHJpbmcocHJvcHMpO1xuICAgICAgICBjb25zdCB0YWdTdGFydCA9IGAke3RhZ05hbWV9JHtzdHJQcm9wcyA/IGAgJHtzdHJQcm9wc31gIDogJyd9YDtcbiAgICAgICAgaWYgKFVUSUxTLmlzU2VsZlRhZyh0YWdOYW1lKSkge1xuICAgICAgICAgICAgcmV0dXJuIGA8JHt0YWdTdGFydH0vPmA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFjaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChpdGVtLmNvbXBvbmVudE5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYDwke3RhZ1N0YXJ0fS8+YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBgPCR7dGFnU3RhcnR9PjwvJHt0YWdOYW1lfT5gO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBgPCR7dGFnU3RhcnR9PiR7SlNYLmdldERvbUJ5QXJyYXkoY2hpbGRyZW4pfTwvJHt0YWdOYW1lfT5gO1xuICAgIH0sXG4gICAgZ2V0RG9tQnlBcnJheTogKG9iaiA9IFtdKSA9PiB7XG4gICAgICAgIHJldHVybiBvYmoubWFwKChpdGVtKSA9PiBKU1guZ2V0SXRlbURvbShpdGVtKSkuam9pbignJyk7XG4gICAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IEpTWDtcbiIsImNvbnN0IENPTE9SID0ge1xuICAgIGdldFJnYmFCeUZpbGw6ICh7IGNvbG9yLCBvcGFjaXR5LCB2aXNpYmxlIH0pID0+IHtcbiAgICAgICAgLy8g5aaC5p6c5LiN5Y+v6KeBXG4gICAgICAgIGlmICghdmlzaWJsZSB8fCBvcGFjaXR5ID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByID0gcGFyc2VJbnQoU3RyaW5nKGNvbG9yLnIgKiAyNTUpKTtcbiAgICAgICAgY29uc3QgZyA9IHBhcnNlSW50KFN0cmluZyhjb2xvci5nICogMjU1KSk7XG4gICAgICAgIGNvbnN0IGIgPSBwYXJzZUludChTdHJpbmcoY29sb3IuYiAqIDI1NSkpO1xuICAgICAgICBjb25zdCBhID0gU3RyaW5nKG9wYWNpdHkpLmluZGV4T2YoJy4nKSA+IC0xID8gb3BhY2l0eS50b0ZpeGVkKDEpIDogb3BhY2l0eTtcbiAgICAgICAgcmV0dXJuIFtyLCBnLCBiLCBhXTtcbiAgICB9LFxufTtcbmV4cG9ydCBkZWZhdWx0IENPTE9SO1xuIiwiaW1wb3J0IENPTkZJRyBmcm9tIFwiLi4vQ09ORklHXCI7XG5pbXBvcnQgb2JqTWVyZ2UgZnJvbSBcIi4uLy4uL3VpL3V0aWxzL29iak1lcmdlXCI7XG5jb25zdCBFRkZFQ1QgPSB7XG4gICAgZ2V0SW5mbzogKG5vZGUsIG5vZGVJbmZvKSA9PiB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gQ09ORklHLmdldEluZm9CeUlkKG5vZGUuZWZmZWN0U3R5bGVJZCk7XG4gICAgICAgIGlmICghcmVzdWx0KSB7XG4gICAgICAgICAgICByZXR1cm4gbm9kZUluZm87XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9iak1lcmdlKG5vZGVJbmZvLCByZXN1bHQpO1xuICAgIH1cbn07XG5leHBvcnQgZGVmYXVsdCBFRkZFQ1Q7XG4iLCJpbXBvcnQgQ09MT1IgZnJvbSBcIi4vQ09MT1JcIjtcbmltcG9ydCBDT05GSUcgZnJvbSBcIi4uL0NPTkZJR1wiO1xuaW1wb3J0IFNBQ1NTIGZyb20gXCIuLi9TQUNTU1wiO1xuaW1wb3J0IG9iak1lcmdlIGZyb20gXCIuLi8uLi91aS91dGlscy9vYmpNZXJnZVwiO1xuY29uc3QgRklMTCA9IHtcbiAgICBnZXRGaWxsOiAobm9kZSkgPT4ge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGNvbnN0IFtmaXJzdEZpbGxdID0gKHR5cGVvZiBub2RlLmdldFJhbmdlRmlsbHMgPT09ICdmdW5jdGlvbicgPyBub2RlLmdldFJhbmdlRmlsbHMoMCwgMSkgOiBub2RlLmZpbGxzKSB8fCBbXTtcbiAgICAgICAgLy8g5rKh5pyJ6K6+572u5Lu75L2V6aKc6ImyLCDnm67liY3kuI3mlK/mjIHmuJDlj5hcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBpZiAoIWZpcnN0RmlsbCB8fCBmaXJzdEZpbGwudHlwZSAhPT0gJ1NPTElEJykge1xuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY29sb3IgPSBDT0xPUi5nZXRSZ2JhQnlGaWxsKGZpcnN0RmlsbCk7XG4gICAgICAgIGlmICghY29sb3IpIHtcbiAgICAgICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IG5vZGUudHlwZSA9PT0gJ1RFWFQnID8gU0FDU1MuYWRkQ29sb3IoY29sb3IpIDogU0FDU1MuYWRkQmdDb2xvcihjb2xvcik7XG4gICAgICAgIC8vIOaWh+acrOaYr+eUqOminOiJsu+8jOWFtuWug+eQhuino+S4uuiDjOaZr+iJslxuICAgICAgICByZXR1cm4gY2xhc3NOYW1lO1xuICAgIH0sXG4gICAgLy8g6I635Y+W5aGr5YWF5L+h5oGvXG4gICAgZ2V0SW5mbzogKG5vZGUsIG5vZGVJbmZvID0ge30pID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2cobm9kZSk7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgY29uc3QgaWQgPSB0eXBlb2Ygbm9kZS5nZXRSYW5nZUZpbGxTdHlsZUlkID09PSAnZnVuY3Rpb24nID8gbm9kZS5nZXRSYW5nZUZpbGxTdHlsZUlkKDAsIDEpIDogbm9kZS5maWxsU3R5bGVJZDtcbiAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgIGNvbnN0IHRva2VuID0gQ09ORklHLmdldEluZm9CeUlkKGlkLCBub2RlLnR5cGUpIHx8IHt9O1xuICAgICAgICBpZiAodG9rZW4pIHtcbiAgICAgICAgICAgIHJldHVybiBvYmpNZXJnZShub2RlSW5mbywgdG9rZW4pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNsYXNzQ29sb3IgPSBGSUxMLmdldEZpbGwobm9kZSk7XG4gICAgICAgIHJldHVybiBvYmpNZXJnZShub2RlSW5mbywge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiBbY2xhc3NDb2xvcl1cbiAgICAgICAgfSk7XG4gICAgfSxcbn07XG5leHBvcnQgZGVmYXVsdCBGSUxMO1xuIiwiaW1wb3J0IFNBQ1NTIGZyb20gXCIuLi9TQUNTU1wiO1xuaW1wb3J0IG9iak1lcmdlIGZyb20gXCIuLi8uLi91aS91dGlscy9vYmpNZXJnZVwiO1xuLy8gaW1wb3J0IENPTkZJRyBmcm9tIFwiLi9DT05GSUdcIjtcbmNvbnN0IEZMRVggPSB7XG4gICAgaXNGbGV4OiAobm9kZSkgPT4ge1xuICAgICAgICAvLyDov5nlh6DkuKrlhYPntKDpg73kuI3lgZogRmxleCDliKTmlq3lpITnkIZcbiAgICAgICAgaWYgKFsnVEVYVCddLmluZGV4T2Yobm9kZS50eXBlKSA+IC0xKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChub2RlID09PSBudWxsIHx8IG5vZGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG5vZGUubGF5b3V0TW9kZSkgJiYgKG5vZGUgPT09IG51bGwgfHwgbm9kZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogbm9kZS5sYXlvdXRNb2RlKSAhPT0gXCJOT05FXCI7XG4gICAgfSxcbiAgICBnZXRUaGlzSW5mbzogKG5vZGUpID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2cobm9kZS5uYW1lLCBub2RlLmxheW91dE1vZGUsIEZMRVguaXNGbGV4KG5vZGUpKTtcbiAgICAgICAgaWYgKCFGTEVYLmlzRmxleChub2RlKSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyBsYXlvdXRNb2RlLCBwcmltYXJ5QXhpc0FsaWduSXRlbXMsIGNvdW50ZXJBeGlzQWxpZ25JdGVtcywgY2hpbGRyZW4gPSBbXSB9ID0gbm9kZTtcbiAgICAgICAgLy8g5rKh5pyJ5a2Q5YWD57SgIGZsZXgg5biD5bGA5rKh5pyJ5oSP5LmJXG4gICAgICAgIGlmICghY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBbXTtcbiAgICAgICAgLy8g5aaC5p6c5piv57q15ZCR55qEIOi/memHjOWPr+S7peS4jeS9v+eUqCBmbGV4IOW4g+WxgFxuICAgICAgICBpZiAobGF5b3V0TW9kZSA9PT0gJ1ZFUlRJQ0FMJykge1xuICAgICAgICAgICAgLy8g5b2T5piv57q15ZCR5biD5bGA5b2T5pe25YCZXG4gICAgICAgICAgICBjbGFzc05hbWUucHVzaCh7XG4gICAgICAgICAgICAgICAgLy8gXCJNSU5cIjogXCJcIixcbiAgICAgICAgICAgICAgICBcIkNFTlRFUlwiOiBcInRhY1wiLFxuICAgICAgICAgICAgICAgIFwiTUFYXCI6IFwidGFyXCIsXG4gICAgICAgICAgICAgICAgLy8gXCJTUEFDRV9CRVRXRUVOXCI6IFwiamNzYlwiLFxuICAgICAgICAgICAgfVtjb3VudGVyQXhpc0FsaWduSXRlbXNdKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZS5wdXNoKHtcbiAgICAgICAgICAgICAgICAvLyBcIk1JTlwiOiBcIlwiLFxuICAgICAgICAgICAgICAgIFwiQ0VOVEVSXCI6IFwiamNjXCIsXG4gICAgICAgICAgICAgICAgXCJNQVhcIjogXCJqY2ZlXCIsXG4gICAgICAgICAgICAgICAgXCJTUEFDRV9CRVRXRUVOXCI6IFwiamNzYlwiLFxuICAgICAgICAgICAgfVtwcmltYXJ5QXhpc0FsaWduSXRlbXNdIHx8IFwiXCIpO1xuICAgICAgICAgICAgY2xhc3NOYW1lLnB1c2goe1xuICAgICAgICAgICAgICAgIC8vXCJNSU5cIjogXCJcIixcbiAgICAgICAgICAgICAgICBcIkNFTlRFUlwiOiBcImFpY1wiLFxuICAgICAgICAgICAgICAgIFwiTUFYXCI6IFwiYWlmZVwiLFxuICAgICAgICAgICAgfVtjb3VudGVyQXhpc0FsaWduSXRlbXNdIHx8IFwiXCIpO1xuICAgICAgICAgICAgY2xhc3NOYW1lLnB1c2goJ2RmJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNsYXNzTmFtZTtcbiAgICB9LFxuICAgIGdldEluZm9Gcm9tUGFyZW50OiAobm9kZSkgPT4ge1xuICAgICAgICBjb25zdCBwYXJlbnQgPSBub2RlLnBhcmVudDtcbiAgICAgICAgaWYgKCFwYXJlbnQgfHwgIUZMRVguaXNGbGV4KHBhcmVudCkpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgY29uc3QgeyBsYXlvdXRNb2RlLCBwcmltYXJ5QXhpc0FsaWduSXRlbXMsIGl0ZW1TcGFjaW5nIH0gPSBwYXJlbnQ7XG4gICAgICAgIC8vIOS4pOerr+S4pOerr+Wvuem9kOihqOekuuS4jemcgOimgei/meS6m1xuICAgICAgICBpZiAocHJpbWFyeUF4aXNBbGlnbkl0ZW1zID09PSBcIlNQQUNFX0JFVFdFRU5cIikge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gW107XG4gICAgICAgIGNvbnN0IGlnbm9yZUNsYXNzTmFtZSA9IFtdO1xuICAgICAgICBjb25zdCB7IGlkID0gJycgfSA9IHBhcmVudC5jaGlsZHJlbi5maWx0ZXIoYyA9PiBjLnZpc2libGUpLnBvcCgpIHx8IHt9O1xuICAgICAgICBjb25zdCBpc0xhc3RDaGlsZHJlbiA9IGlkID09PSBub2RlLmlkO1xuICAgICAgICAvLyDniLblhYPntKDmmK/nurXlkJHnmoRmbGV4IOW4g+WxgO+8jOWboOS4uuW/veeVpeaOieS6hiBkZlxuICAgICAgICAvLyDov5nph4zorqnoh6rlt7HmnIkgZGIg5a6e546w57q15ZCR5biD5bGAXG4gICAgICAgIGlmIChsYXlvdXRNb2RlID09PSAnVkVSVElDQUwnKSB7XG4gICAgICAgICAgICBjbGFzc05hbWUucHVzaCgnZGInKTtcbiAgICAgICAgfVxuICAgICAgICAvLyDkuLrlrZDlhYPntKDmt7vliqDpl7Tot51cbiAgICAgICAgaWYgKGl0ZW1TcGFjaW5nID4gMCAmJiAhaXNMYXN0Q2hpbGRyZW4pIHtcbiAgICAgICAgICAgIGNvbnN0IGd1dHRlck1hcCA9IHtcbiAgICAgICAgICAgICAgICBcIlZFUlRJQ0FMXCI6IFwibWJcIixcbiAgICAgICAgICAgICAgICBcIkhPUklaT05UQUxcIjogXCJtclwiXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY2xhc3NOYW1lLnB1c2goU0FDU1MuYWRkKGd1dHRlck1hcFtsYXlvdXRNb2RlXSwgaXRlbVNwYWNpbmcpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobm9kZS5sYXlvdXRHcm93ID09PSAxKSB7XG4gICAgICAgICAgICBjbGFzc05hbWUucHVzaCgnZjEnKTtcbiAgICAgICAgICAgIGlnbm9yZUNsYXNzTmFtZS5wdXNoKGB3JHtub2RlLndpZHRofWApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjbGFzc05hbWUsXG4gICAgICAgICAgICBpZ25vcmVDbGFzc05hbWU6IGlnbm9yZUNsYXNzTmFtZVxuICAgICAgICB9O1xuICAgIH0sXG4gICAgZ2V0SW5mbzogKG5vZGUsIG5vZGVJbmZvKSA9PiB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgY29uc3QgYmFzZUNsYXNzTmFtZSA9IEZMRVguZ2V0VGhpc0luZm8obm9kZSkgfHwgW107XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgY29uc3QgeyBjbGFzc05hbWU6IGMyID0gW10sIGlnbm9yZUNsYXNzTmFtZTogaWMyID0gW10gfSA9IEZMRVguZ2V0SW5mb0Zyb21QYXJlbnQobm9kZSkgfHwge307XG4gICAgICAgIHJldHVybiBvYmpNZXJnZShub2RlSW5mbywge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiBbLi4uYmFzZUNsYXNzTmFtZSwgLi4uYzJdLFxuICAgICAgICAgICAgX2lnbm9yZUNsYXNzTmFtZTogaWMyXG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5leHBvcnQgZGVmYXVsdCBGTEVYO1xuIiwiaW1wb3J0IENPTkZJRyBmcm9tIFwiLi4vQ09ORklHXCI7XG5pbXBvcnQgb2JqTWVyZ2UgZnJvbSBcIi4uLy4uL3VpL3V0aWxzL29iak1lcmdlXCI7XG5jb25zdCBHUklEID0ge1xuICAgIGdldEluZm86IChub2RlLCBub2RlSW5mbykgPT4ge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IENPTkZJRy5nZXRJbmZvQnlJZChub2RlLmdyaWRTdHlsZUlkKTtcbiAgICAgICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgICAgICAgIHJldHVybiBub2RlSW5mbztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb2JqTWVyZ2Uobm9kZUluZm8sIHJlc3VsdCk7XG4gICAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IEdSSUQ7XG4iLCJpbXBvcnQgU0FDU1MgZnJvbSBcIi4uL1NBQ1NTXCI7XG5pbXBvcnQgb2JqTWVyZ2UgZnJvbSBcIi4uLy4uL3VpL3V0aWxzL29iak1lcmdlXCI7XG5jb25zdCBPVEhFUlMgPSB7XG4gICAgZ2VyQm9yZGVyUmFkaXVzQ2xhc3NOYW1lOiAobm9kZSkgPT4ge1xuICAgICAgICBjb25zdCB0bCA9IG5vZGUudG9wTGVmdFJhZGl1cyB8fCAwO1xuICAgICAgICBjb25zdCB0ciA9IG5vZGUudG9wUmlnaHRSYWRpdXMgfHwgMDtcbiAgICAgICAgY29uc3QgYnIgPSBub2RlLmJvdHRvbVJpZ2h0UmFkaXVzIHx8IDA7XG4gICAgICAgIGNvbnN0IGJsID0gbm9kZS5ib3R0b21MZWZ0UmFkaXVzIHx8IDA7XG4gICAgICAgIC8vIOWFqOmDqOS4uiAwXG4gICAgICAgIGlmICgodGwgKyB0ciArIGJyICsgYmwpID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cbiAgICAgICAgLy8g5aaC5p6c5Zub5Liq5YC86YO955u4562JXG4gICAgICAgIGlmICgodGwgPT09IHRyKSAmJiAodGwgPT09IGJyKSAmJiAodGwgPT09IGJsKSkge1xuICAgICAgICAgICAgcmV0dXJuIFtTQUNTUy5hZGQoJ2JyJywgdGwpXTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBbXTtcbiAgICAgICAgdGwgJiYgY2xhc3NOYW1lLnB1c2goU0FDU1MuYWRkKCdidGxyJywgdGwpKTtcbiAgICAgICAgdHIgJiYgY2xhc3NOYW1lLnB1c2goU0FDU1MuYWRkKCdidHJyJywgdHIpKTtcbiAgICAgICAgYnIgJiYgY2xhc3NOYW1lLnB1c2goU0FDU1MuYWRkKCdiYnJyJywgYnIpKTtcbiAgICAgICAgYmwgJiYgY2xhc3NOYW1lLnB1c2goU0FDU1MuYWRkKCdiYmxyJywgYmwpKTtcbiAgICAgICAgcmV0dXJuIGNsYXNzTmFtZTtcbiAgICB9LFxuICAgIGdldFBhZGRpbmdDbGFzc05hbWU6IChub2RlKSA9PiB7XG4gICAgICAgIC8vIOS8muW/veeVpeaOiSAx5YOP57Sg55qEIHBhZGRpbmdcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIG5vZGUucGFkZGluZ1RvcCA+IDEgPyBTQUNTUy5hZGQoJ3B0Jywgbm9kZS5wYWRkaW5nVG9wKSA6ICcnLFxuICAgICAgICAgICAgbm9kZS5wYWRkaW5nUmlnaHQgPiAxID8gU0FDU1MuYWRkKCdwcicsIG5vZGUucGFkZGluZ1JpZ2h0KSA6ICcnLFxuICAgICAgICAgICAgbm9kZS5wYWRkaW5nQm90dG9tID4gMSA/IFNBQ1NTLmFkZCgncGInLCBub2RlLnBhZGRpbmdCb3R0b20pIDogJycsXG4gICAgICAgICAgICBub2RlLnBhZGRpbmdMZWZ0ID4gMSA/IFNBQ1NTLmFkZCgncGwnLCBub2RlLnBhZGRpbmdMZWZ0KSA6ICcnLFxuICAgICAgICBdO1xuICAgIH0sXG4gICAgZ2V0SW5mbzogKG5vZGUsIG5vZGVJbmZvKSA9PiB7XG4gICAgICAgIGNvbnN0IHBhZGRpbmcgPSBPVEhFUlMuZ2V0UGFkZGluZ0NsYXNzTmFtZShub2RlKTtcbiAgICAgICAgY29uc3QgcmFkaXVzID0gT1RIRVJTLmdlckJvcmRlclJhZGl1c0NsYXNzTmFtZShub2RlKTtcbiAgICAgICAgcmV0dXJuIG9iak1lcmdlKG5vZGVJbmZvLCB7XG4gICAgICAgICAgICBjbGFzc05hbWU6IFsuLi5wYWRkaW5nLCAuLi5yYWRpdXNdXG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5leHBvcnQgZGVmYXVsdCBPVEhFUlM7XG4iLCJpbXBvcnQgQ09ORklHIGZyb20gXCIuLi9DT05GSUdcIjtcbmltcG9ydCBvYmpNZXJnZSBmcm9tIFwiLi4vLi4vdWkvdXRpbHMvb2JqTWVyZ2VcIjtcbmNvbnN0IFNUUk9LRSA9IHtcbiAgICAvLyDmlofmnKznu4Tku7ZcbiAgICBnZXRJbmZvOiAobm9kZSwgbm9kZUluZm8pID0+IHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBjb25zdCByZXN1bHQgPSBDT05GSUcuZ2V0SW5mb0J5SWQobm9kZS5zdHJva2VTdHlsZUlkKTtcbiAgICAgICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgICAgICAgIHJldHVybiBub2RlSW5mbztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb2JqTWVyZ2Uobm9kZUluZm8sIHJlc3VsdCk7XG4gICAgfSxcbn07XG5leHBvcnQgZGVmYXVsdCBTVFJPS0U7XG4iLCJpbXBvcnQgQ09ORklHIGZyb20gXCIuLi9DT05GSUdcIjtcbmltcG9ydCBTQUNTUyBmcm9tIFwiLi4vU0FDU1NcIjtcbmltcG9ydCBvYmpNZXJnZSBmcm9tIFwiLi4vLi4vdWkvdXRpbHMvb2JqTWVyZ2VcIjtcbi8vIEB0cy1pZ25vcmVcbmNvbnN0IFRFWFQgPSB7XG4gICAgdW5pdE1hcDoge1xuICAgICAgICAnUEVSQ0VOVCc6ICclJ1xuICAgICAgICAvLyBcIlBJWEVMU1wiOlwiXCJcbiAgICB9LFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBnZXRGb250TmFtZUNsYXNzQnlTdHlsZTogKHN0eWxlKSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2Ygc3R5bGUgIT09ICdzdHJpbmcnIHx8ICFzdHlsZSkge1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGZvbnRNYXAgPSB7XG4gICAgICAgICAgICBcIlVMVFJBTElHSFRcIjogXCJmdzEwMFwiLFxuICAgICAgICAgICAgXCJUSElOXCI6ICdmdzIwMCcsXG4gICAgICAgICAgICBcIkxJR0hUXCI6IFwiZnczMDBcIixcbiAgICAgICAgICAgIFwiUkVHVUxBUlwiOiBcIlwiLFxuICAgICAgICAgICAgXCJNRURJVU1cIjogXCJmdzUwMFwiLFxuICAgICAgICAgICAgXCJTRU1JQk9MRFwiOiBcImZ3NjAwXCIsXG4gICAgICAgICAgICBcIkJPTERcIjogXCJmdzcwMFwiLFxuICAgICAgICAgICAgXCJCTEFDS1wiOiBcImZ3OTAwXCIsXG4gICAgICAgICAgICBcIklUQUxJQ1wiOiBcImZzaVwiLFxuICAgICAgICAgICAgXCJPQkxJUVVFXCI6IFwiZnNpXCJcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gc3R5bGUuc3BsaXQoJyAnKS5tYXAoKGl0ZW0pID0+IGZvbnRNYXBbaXRlbS50b1VwcGVyQ2FzZSgpXSB8fCAnJyk7XG4gICAgICAgIHJldHVybiBjbGFzc05hbWUuZmlsdGVyKGl0ZW0gPT4gaXRlbSkuam9pbignICcpO1xuICAgIH0sXG4gICAgZ2V0UHJvcEJ5Tm9kZTogKG5vZGUsIG5hbWUpID0+IHtcbiAgICAgICAgY29uc3QgbmFtZU1hcCA9IHtcbiAgICAgICAgICAgICd0ZXh0Q2FzZSc6ICdnZXRSYW5nZVRleHRDYXNlJyxcbiAgICAgICAgICAgICdsaW5lSGVpZ2h0JzogJ2dldFJhbmdlTGluZUhlaWdodCcsXG4gICAgICAgICAgICAnbGV0dGVyU3BhY2luZyc6ICdnZXRSYW5nZUxldHRlclNwYWNpbmcnLFxuICAgICAgICAgICAgJ2ZvbnRTaXplJzogJ2dldFJhbmdlRm9udFNpemUnLFxuICAgICAgICAgICAgJ3RleHREZWNvcmF0aW9uJzogJ2dldFJhbmdlVGV4dERlY29yYXRpb24nLFxuICAgICAgICAgICAgJ2ZvbnROYW1lJzogJ2dldFJhbmdlRm9udE5hbWUnLFxuICAgICAgICAgICAgJ2ZpbGxzJzogJ2dldFJhbmdlRmlsbHMnLFxuICAgICAgICAgICAgJ3RleHRTdHlsZUlkJzogJ2dldFJhbmdlVGV4dFN0eWxlSWQnXG4gICAgICAgIH07XG4gICAgICAgIGlmICh0eXBlb2Ygbm9kZVtuYW1lXSA9PT0gJ3N5bWJvbCcgJiYgbmFtZU1hcFtuYW1lXSAmJiB0eXBlb2Ygbm9kZVtuYW1lTWFwW25hbWVdXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgcmV0dXJuIG5vZGVbbmFtZU1hcFtuYW1lXV0oMCwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5vZGVbbmFtZV07XG4gICAgfSxcbiAgICBnZXRBQ1NTU0luZm86IChub2RlKSA9PiB7XG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IFtdO1xuICAgICAgICAvLyDmloflrZflpKflsI9cbiAgICAgICAgY29uc3QgZm9udFNpemUgPSBURVhULmdldFByb3BCeU5vZGUobm9kZSwgJ2ZvbnRTaXplJyk7XG4gICAgICAgIGlmIChmb250U2l6ZSA+IDEpIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZS5wdXNoKFNBQ1NTLmFkZCgnZnMnLCBmb250U2l6ZSkpO1xuICAgICAgICB9XG4gICAgICAgIC8vIOihjOmrmFxuICAgICAgICBjb25zdCBsaW5lSGVpZ2h0ID0gVEVYVC5nZXRQcm9wQnlOb2RlKG5vZGUsICdsaW5lSGVpZ2h0Jyk7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgaWYgKGxpbmVIZWlnaHQgPT09IG51bGwgfHwgbGluZUhlaWdodCA9PT0gdm9pZCAwID8gdm9pZCAwIDogbGluZUhlaWdodC52YWx1ZSkge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgY29uc3QgeyB2YWx1ZSwgdW5pdCB9ID0gbGluZUhlaWdodDtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIGNsYXNzTmFtZS5wdXNoKFNBQ1NTLmFkZCgnbGgnLCB2YWx1ZSwgVEVYVC51bml0TWFwW3VuaXRdKSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8g5a2X6Ze06LedXG4gICAgICAgIGNvbnN0IGxldHRlclNwYWNpbmcgPSBURVhULmdldFByb3BCeU5vZGUobm9kZSwgJ2xldHRlclNwYWNpbmcnKTtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBpZiAobGV0dGVyU3BhY2luZyA9PT0gbnVsbCB8fCBsZXR0ZXJTcGFjaW5nID09PSB2b2lkIDAgPyB2b2lkIDAgOiBsZXR0ZXJTcGFjaW5nLnZhbHVlKSB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBjb25zdCB7IHZhbHVlLCB1bml0IH0gPSBsZXR0ZXJTcGFjaW5nO1xuICAgICAgICAgICAgY2xhc3NOYW1lLnB1c2goU0FDU1MuYWRkKCdscycsIHZhbHVlLCBURVhULnVuaXRNYXBbdW5pdF0pKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBmb250TmFtZSA9IFRFWFQuZ2V0UHJvcEJ5Tm9kZShub2RlLCAnZm9udE5hbWUnKTtcbiAgICAgICAgLy8gZm9udC13ZWlnaHQgZm9udC1zdHlsZVxuICAgICAgICBjb25zdCBmbkNsYXNzID0gVEVYVC5nZXRGb250TmFtZUNsYXNzQnlTdHlsZShmb250TmFtZS5zdHlsZSk7XG4gICAgICAgIGZuQ2xhc3MgJiYgY2xhc3NOYW1lLnB1c2goZm5DbGFzcyk7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgaWYgKGZvbnROYW1lID09PSBudWxsIHx8IGZvbnROYW1lID09PSB2b2lkIDAgPyB2b2lkIDAgOiBmb250TmFtZS5mYW1pbHkpIHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIGNsYXNzTmFtZS5wdXNoKFNBQ1NTLmFkZEZvbnRGYW1pbHkoZm9udE5hbWUuZmFtaWx5KSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gdGV4dC1hbGlnblxuICAgICAgICBjb25zdCB0YUNsYXNzID0ge1xuICAgICAgICAgICAgXCJMRUZUXCI6ICcnLFxuICAgICAgICAgICAgXCJDRU5URVJcIjogJ3RhYycsXG4gICAgICAgICAgICBcIlJJR0hUXCI6ICd0YXInLFxuICAgICAgICAgICAgXCJKVVNUSUZJRURcIjogJ3RhaicsXG4gICAgICAgIH1bbm9kZS50ZXh0QWxpZ25Ib3Jpem9udGFsXTtcbiAgICAgICAgdGFDbGFzcyAmJiBjbGFzc05hbWUucHVzaCh0YUNsYXNzKTtcbiAgICAgICAgLy8gdmVydGljYWwtYWxpZ25cbiAgICAgICAgY29uc3QgdmFDbGFzcyA9IHtcbiAgICAgICAgICAgIFwiVE9QXCI6ICcnLFxuICAgICAgICAgICAgXCJDRU5URVJcIjogJ3ZhbScsXG4gICAgICAgICAgICBcIkJPVFRPTVwiOiAndmFiJyxcbiAgICAgICAgfVtub2RlLnRleHRBbGlnblZlcnRpY2FsXTtcbiAgICAgICAgdmFDbGFzcyAmJiBjbGFzc05hbWUucHVzaCh2YUNsYXNzKTtcbiAgICAgICAgY29uc3QgdGV4dENhc2UgPSBURVhULmdldFByb3BCeU5vZGUobm9kZSwgJ3RleHRDYXNlJyk7XG4gICAgICAgIC8vIHR0XG4gICAgICAgIGNvbnN0IHR0Q2xhc3MgPSB7XG4gICAgICAgICAgICBcIk9SSUdJTkFMXCI6ICcnLFxuICAgICAgICAgICAgXCJVUFBFUlwiOiAndHR1JyxcbiAgICAgICAgICAgIFwiTE9XRVJcIjogJ3R0bCcsXG4gICAgICAgICAgICBcIlRJVExFXCI6ICd0dGMnLFxuICAgICAgICB9W3RleHRDYXNlXTtcbiAgICAgICAgdHRDbGFzcyAmJiBjbGFzc05hbWUucHVzaCh0dENsYXNzKTtcbiAgICAgICAgY29uc3QgdGV4dERlY29yYXRpb24gPSBURVhULmdldFByb3BCeU5vZGUobm9kZSwgJ3RleHREZWNvcmF0aW9uJyk7XG4gICAgICAgIC8vIHRkXG4gICAgICAgIGNvbnN0IHRkQ2xhc3MgPSB7XG4gICAgICAgICAgICBcIk5PTkVcIjogXCJcIixcbiAgICAgICAgICAgIFwiVU5ERVJMSU5FXCI6ICd0ZHUnLFxuICAgICAgICAgICAgXCJTVFJJS0VUSFJPVUdIXCI6ICd0ZGwnXG4gICAgICAgIH1bdGV4dERlY29yYXRpb25dO1xuICAgICAgICB0ZENsYXNzICYmIGNsYXNzTmFtZS5wdXNoKHRkQ2xhc3MpO1xuICAgICAgICBjb25zdCBzdHJDbGFzc05hbWUgPSBjbGFzc05hbWUuam9pbignICcpO1xuICAgICAgICBjb25zdCBpc1N0cm9uZyA9IFsnZnc1MDAnLCAnZnc2MDAnLCAnZnc3MDAnLCAnZnc4MDAnLCAnZnc5MDAnXS5maW5kSW5kZXgoKGl0ZW0pID0+IHN0ckNsYXNzTmFtZS5pbmRleE9mKGl0ZW0pID4gLTEpID4gLTE7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjbGFzc05hbWUsXG4gICAgICAgICAgICB0YWdOYW1lOiBpc1N0cm9uZyA/ICdzdHJvbmcnIDogJ3NwYW4nXG4gICAgICAgIH07XG4gICAgfSxcbiAgICBnZXRUZXh0Q2hpbGRyZW46IChub2RlKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgY2hhcmFjdGVycyA9ICcnIH0gPSBub2RlO1xuICAgICAgICBjb25zdCBsZWdhbFAgPSBjaGFyYWN0ZXJzLnNwbGl0KCdcXG4nKS5maWx0ZXIoaXRlbSA9PiBpdGVtLnRyaW0oKSk7XG4gICAgICAgIC8vIOacieWbnui9puihqOekuuWkmuauteiQvVxuICAgICAgICBpZiAobGVnYWxQLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIGNvbnN0IG1iQ2xhc3MgPSBub2RlLnBhcmFncmFwaFNwYWNpbmcgPiAwID8gU0FDU1MuYWRkKCdtYicsIG5vZGUucGFyYWdyYXBoU3BhY2luZykgOiAnJztcbiAgICAgICAgICAgIGNvbnN0IHBzID0gbGVnYWxQLm1hcCgoaXRlbSwga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXNMYXN0ID0ga2V5ID09PSBsZWdhbFAubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICB0YWdOYW1lOiAncCcsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogaXNMYXN0ID8gJycgOiBtYkNsYXNzLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW2l0ZW1dXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHBzO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbY2hhcmFjdGVyc107XG4gICAgfSxcbiAgICAvLyDmlofmnKznu4Tku7ZcbiAgICBnZXRJbmZvOiAobm9kZSwgbm9kZUluZm8gPSB7fSkgPT4ge1xuICAgICAgICBpZiAobm9kZS50eXBlICE9PSAnVEVYVCcpIHtcbiAgICAgICAgICAgIHJldHVybiBub2RlSW5mbztcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpZCA9IFRFWFQuZ2V0UHJvcEJ5Tm9kZShub2RlLCAndGV4dFN0eWxlSWQnKTtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBjb25zdCBnZXRJbmZvID0gQ09ORklHLmdldEluZm9CeUlkKGlkKTtcbiAgICAgICAgaWYgKGdldEluZm8pIHtcbiAgICAgICAgICAgIHJldHVybiBvYmpNZXJnZShub2RlSW5mbywgZ2V0SW5mbyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYWNzc0luZm8gPSBURVhULmdldEFDU1NTSW5mbyhub2RlKTtcbiAgICAgICAgcmV0dXJuIG9iak1lcmdlKG5vZGVJbmZvLCBhY3NzSW5mbyk7XG4gICAgfSxcbn07XG5leHBvcnQgZGVmYXVsdCBURVhUO1xuIiwiaW1wb3J0IE5PREUgZnJvbSBcIi4vXy9OT0RFXCI7XG5pbXBvcnQgQ09ORklHIGZyb20gXCIuL18vQ09ORklHXCI7XG5pbXBvcnQgU0FDU1MgZnJvbSBcIi4vXy9TQUNTU1wiO1xuaW1wb3J0IERPTSBmcm9tIFwiLi9fL3JlbmRlci9ET01cIjtcbmltcG9ydCB0cnlPbGRDb25maWcgZnJvbSBcIi4vdWkvdXRpbHMvdHJ5T2xkQ29uZmlnLmpzXCI7XG5jb25zdCBBUEkgPSB7XG4gICAgLyoqXG4gICAgICog6buY6K6k5pi+56S6IGhvbWVcbiAgICAgKi9cbiAgICB0YWJJbmRleDogMCxcbiAgICAvKipcbiAgICAgKiDojrflj5bnlKjmiLfpgInkuK3nmoTlm77lsYJcbiAgICAgKi9cbiAgICBnZXRTZWxlY3Rpb246ICgpID0+IHtcbiAgICAgICAgY29uc3Qgc2VsZWN0aW9uID0gZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhzZWxlY3Rpb24pO1xuICAgICAgICBpZiAoIXNlbGVjdGlvbi5sZW5ndGgpIHtcbiAgICAgICAgICAgIC8vIOayoeaciemAieaLqeS7u+S9leWFg+e0oFxuICAgICAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2UoeyBub1NlbGVjdGlvbjogdHJ1ZSB9KTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzZWxlY3Rpb25bMF07XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiDlvZMgVGFiIOWIh+aNoueahOaXtuWAmeS8muWHuuWPkei/meS4quaWueazlVxuICAgICAqIEBwYXJhbSBpbmRleFxuICAgICAqL1xuICAgIG9uVGFiQ2hhbmdlOiAoaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgYmVmb3JlSW5kZXggPSBBUEkudGFiSW5kZXg7XG4gICAgICAgIEFQSS50YWJJbmRleCA9IGluZGV4O1xuICAgICAgICAvLyDlpoLmnpzlj6rmmK/lnKggSFRNTCDlkowgQUNTUyDkuYvliY3liIfmjaJcbiAgICAgICAgaWYgKChiZWZvcmVJbmRleCA9PT0gMCB8fCBiZWZvcmVJbmRleCA9PT0gMSkgJiYgKGluZGV4ID09PSAwIHx8IGluZGV4ID09PSAxKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFjdGlvbk1hcCA9IFsncnVuSG9tZScsICdydW5Ib21lJywgJ3J1blRva2VuJywgJ3J1bkNvbmZpZyddO1xuICAgICAgICBjb25zdCBhY3Rpb24gPSBhY3Rpb25NYXBbaW5kZXhdO1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnb25UYWJDaGFuZ2UnLCBhY3Rpb24pO1xuICAgICAgICBhY3Rpb24gJiYgQVBJW2FjdGlvbl0oKTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIOinpuWPkVxuICAgICAqL1xuICAgIHJ1bjogKCkgPT4ge1xuICAgICAgICBjb25zdCBhY3Rpb25NYXAgPSBbJ3J1bkhvbWUnLCAncnVuSG9tZScsICdydW5Ub2tlbicsICcnXTtcbiAgICAgICAgY29uc3QgYWN0aW9uID0gYWN0aW9uTWFwW0FQSS50YWJJbmRleF07XG4gICAgICAgIGlmICghYWN0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgQVBJW2FjdGlvbl0oKTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIOaYvuekuuesrOS4gOWxj1xuICAgICAqL1xuICAgIHJ1bkhvbWU6ICgpID0+IHtcbiAgICAgICAgY29uc3Qgc2VsZWN0aW9uID0gQVBJLmdldFNlbGVjdGlvbigpO1xuICAgICAgICBpZiAoIXNlbGVjdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIFNBQ1NTLmluaXQoKTtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBjb25zdCBJbmZvID0gTk9ERS5nZXROb2RlSW5mbyhzZWxlY3Rpb24pO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhJbmZvKTtcbiAgICAgICAgY29uc3QgaXNKU1ggPSBDT05GSUcuaXNKU1goKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICAgICAgZ2V0SFRNTDogRE9NLnJlbmRlcihJbmZvLCBpc0pTWCksXG4gICAgICAgICAgICAgICAgZ2V0Q1NTOiBTQUNTUy5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgICAgICBpc0pTWCxcbiAgICAgICAgICAgICAgICBub1NlbGVjdGlvbjogZmFsc2VcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCAxNik7XG4gICAgfSxcbiAgICBydW5Db25maWc6ICgpID0+IHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICAgICAgZ2V0Q29uZmlnOiBDT05GSUcuZ2V0Q3VycmVudCgpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSwgMTApO1xuICAgIH0sXG4gICAgcnVuVG9rZW46ICgpID0+IHtcbiAgICAgICAgY29uc3Qgc2VsZWN0aW9uID0gQVBJLmdldFNlbGVjdGlvbigpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKENPTkZJRy5nZXRTZWxlY3Rpb25Ub2tlbnMoc2VsZWN0aW9uKSk7XG4gICAgICAgIH0sIDE2KTtcbiAgICB9LFxuICAgIG9ubWVzc2FnZTogKG1zZyA9IHt9KSA9PiB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgY29uc3QgeyB0eXBlID0gbnVsbCwgdmFsdWUgPSBudWxsIH0gPSBtc2c7XG4gICAgICAgIGlmICh0eXBlID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8g5bCd6K+V5qOA5rWL5pen5Luj56CBXG4gICAgICAgIGlmICh0eXBlID09PSAndGVzdE9sZENvbmZpZycpIHtcbiAgICAgICAgICAgIHRyeU9sZENvbmZpZygpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IFtuYW1lLCBhY3Rpb25dID0gdHlwZS5zcGxpdCgnLicpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnQVBJIG9ubWVzc2FnZScsIG5hbWUsIGFjdGlvbiwgdmFsdWUpO1xuICAgICAgICBpZiAobmFtZSA9PT0gJ0FQSScgJiYgKGFjdGlvbiBpbiBBUEkpKSB7XG4gICAgICAgICAgICBBUElbYWN0aW9uXSh2YWx1ZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5hbWUgPT09ICdDT05GSUcnICYmIChhY3Rpb24gaW4gQ09ORklHKSkge1xuICAgICAgICAgICAgQ09ORklHW2FjdGlvbl0odmFsdWUpO1xuICAgICAgICAgICAgLy8g5Li65LqG6Kem5Y+R6YeN5paw5riy5p+TXG4gICAgICAgICAgICBpZiAoYWN0aW9uID09PSAnY2hhbmdlSlNYJykge1xuICAgICAgICAgICAgICAgIEFQSS5ydW5Ib21lKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8g5Li65LqG6Kem5Y+R6YeN5paw5riy5p+TXG4gICAgICAgICAgICBpZiAoYWN0aW9uID09PSAnYWRkVG9rZW4nKSB7XG4gICAgICAgICAgICAgICAgQVBJLnJ1blRva2VuKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQVBJLnJ1bkNvbmZpZygpO1xuICAgICAgICB9XG4gICAgfVxufTtcbi8vIFRoaXMgcGx1Z2luIHdpbGwgb3BlbiBhIHdpbmRvdyB0byBwcm9tcHQgdGhlIHVzZXIgdG8gZW50ZXIgYSBudW1iZXIsIGFuZFxuLy8gaXQgd2lsbCB0aGVuIGNyZWF0ZSB0aGF0IG1hbnkgcmVjdGFuZ2xlcyBvbiB0aGUgc2NyZWVuLlxuLy8gVGhpcyBmaWxlIGhvbGRzIHRoZSBtYWluIGNvZGUgZm9yIHRoZSBwbHVnaW5zLiBJdCBoYXMgYWNjZXNzIHRvIHRoZSAqZG9jdW1lbnQqLlxuLy8gWW91IGNhbiBhY2Nlc3MgYnJvd3NlciBBUElzIGluIHRoZSA8c2NyaXB0PiB0YWcgaW5zaWRlIFwidWkuaHRtbFwiIHdoaWNoIGhhcyBhXG4vLyBmdWxsIGJyb3dzZXIgZW52aXJvbm1lbnQgKHNlZSBkb2N1bWVudGF0aW9uKS5cbkNPTkZJRy5pbml0KCkudGhlbigoKSA9PiB7XG4gICAgLy8gVGhpcyBzaG93cyB0aGUgSFRNTCBwYWdlIGluIFwidWkuaHRtbFwiLlxuICAgIGZpZ21hLnNob3dVSShfX2h0bWxfXywgeyB3aWR0aDogNDAwLCBoZWlnaHQ6IDYwMCB9KTtcbiAgICBBUEkucnVuKCk7XG4gICAgZmlnbWEub24oXCJzZWxlY3Rpb25jaGFuZ2VcIiwgKCkgPT4ge1xuICAgICAgICBBUEkucnVuKCk7XG4gICAgfSk7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGZpZ21hLnVpLm9ubWVzc2FnZSA9IEFQSS5vbm1lc3NhZ2U7XG59KTtcbiIsImZ1bmN0aW9uIG9iak1lcmdlKGEgPSB7fSwgYikge1xuICAgIGNvbnN0IHJlc3VsdCA9IGE7XG4gICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoYikpIHtcbiAgICAgICAgY29uc3QgaXRlbSA9IGFba2V5XTtcbiAgICAgICAgaWYgKCFpdGVtIHx8ICF2YWx1ZSkge1xuICAgICAgICAgICAgcmVzdWx0W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfSBlbHNlIGlmICgoaXRlbSBpbnN0YW5jZW9mIEFycmF5KSAmJiAodmFsdWUgaW5zdGFuY2VvZiBBcnJheSkpIHtcbiAgICAgICAgICAgIHJlc3VsdFtrZXldID0gWy4uLml0ZW0sIC4uLnZhbHVlXTtcbiAgICAgICAgfSBlbHNlIGlmIChpdGVtICYmIGl0ZW0gaW5zdGFuY2VvZiBPYmplY3QpIHtcbiAgICAgICAgICAgIHJlc3VsdFtrZXldID0gb2JqTWVyZ2UoaXRlbSwgdmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzdWx0W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgb2JqTWVyZ2U7IiwiY29uc3QgdHJ5T2xkQ29uZmlnID0gKCkgPT4ge1xuICAgIC8vIOWwneivleiOt+WPllxuICAgIGZpZ21hLmNsaWVudFN0b3JhZ2UuZ2V0QXN5bmMoXCJTQUNTU1wiKS50aGVuKChyZXQgPSB7fSkgPT4ge1xuICAgICAgICBjb25zdCB7cHJvamVjdHN9ID0gcmV0O1xuICAgICAgICBpZiAocHJvamVjdHMgJiYgcHJvamVjdHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJTQUNTU1wiLCByZXQpO1xuICAgICAgICAgICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgICAgICAgICAgZ2V0T2xkQ29uZmlnOiByZXRcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sIDE2KTtcbiAgICAgICAgfVxuICAgIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdHJ5T2xkQ29uZmlnOyJdLCJzb3VyY2VSb290IjoiIn0=