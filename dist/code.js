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

        if (ret && Object.keys(ret).length !== 0) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL18vQ09NUE9ORU5ULnRzIiwid2VicGFjazovLy8uL3NyYy9fL0NPTkZJRy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvXy9OT0RFLnRzIiwid2VicGFjazovLy8uL3NyYy9fL1NBQ1NTLnRzIiwid2VicGFjazovLy8uL3NyYy9fL1VUSUxTLnRzIiwid2VicGFjazovLy8uL3NyYy9fL3JlbmRlci9ET00udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL18vcmVuZGVyL0hUTUwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL18vcmVuZGVyL0pTWC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvXy90b2tlbi9DT0xPUi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvXy90b2tlbi9FRkZFQ1QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL18vdG9rZW4vRklMTC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvXy90b2tlbi9GTEVYLnRzIiwid2VicGFjazovLy8uL3NyYy9fL3Rva2VuL0dSSUQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL18vdG9rZW4vT1RIRVJTLnRzIiwid2VicGFjazovLy8uL3NyYy9fL3Rva2VuL1NUUk9LRS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvXy90b2tlbi9URVhULnRzIiwid2VicGFjazovLy8uL3NyYy9jb2RlLnRzIiwid2VicGFjazovLy8uL3NyYy91aS91dGlscy9vYmpNZXJnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvdXRpbHMvdHJ5T2xkQ29uZmlnLmpzIl0sIm5hbWVzIjpbIkNPTVBPTkVOVCIsImlzQ29tcG9uZW50Iiwibm9kZSIsInR5cGUiLCJnZXRNYWluQ29tcG9uZW50IiwibWFpbkNvbXBvbmVudCIsImdldENvbXBvbmVudElkIiwia2V5Iiwic3RyaW5nVG9Db21wb25lbnROYW1lIiwibmFtZSIsInRyaW1OYW1lIiwidHJpbSIsInN0ck5hbWUiLCJyZXBsYWNlIiwiZmlyc3RDaGFyIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJsZW5ndGgiLCJzbGljZSIsImdldEluZm8iLCJub2RlSW5mbyIsImlkIiwibWF0Y2hUb2tlbiIsIkNPTkZJRyIsImdldFRva2VuIiwiREVGQVVMVCIsIm9iak1lcmdlIiwiX19yZXN0IiwicyIsImUiLCJ0IiwicCIsIk9iamVjdCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImluZGV4T2YiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJpIiwicHJvcGVydHlJc0VudW1lcmFibGUiLCJDT05GSUdfREVGQVVMVCIsImlzSlNYIiwiX2lnbm9yZUNsYXNzTmFtZSIsInRva2VucyIsIlZFUlNJT04iLCJzdG9yZSIsImNoYW5nZUpTWCIsInZhbHVlIiwiZ2V0Q3VycmVudCIsImZpZ21hIiwiY2xpZW50U3RvcmFnZSIsInNldEFzeW5jIiwiZWRpdCIsImRhdGEiLCJ1aSIsInBvc3RNZXNzYWdlIiwiYWxlcnRNc2ciLCJhZGRUb2tlbiIsIl9hIiwicmVzdCIsIm5ld1N0b3JlIiwiYXNzaWduIiwiaW5pdCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiZ2V0QXN5bmMiLCJ0aGVuIiwicmV0Iiwia2V5cyIsImNhdGNoIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5IiwiZ2V0SW5mb0J5SWQiLCJnZXRTdHlsZUJ5SWQiLCJ0b2tlbkNvbmZpZyIsImdldFNlbGVjdGlvblRva2VucyIsInNlbGVjdGlvbiIsInNlbGVjdGlvblRva2VucyIsImZpbmRUb2tlbiIsImNsYXNzTmFtZSIsIl9yZW5kZXJXaWR0aCIsIl9yZW5kZXJIZWlnaHQiLCJfdG9rZW5OYW1lIiwiX3Rva2VuVHlwZSIsImZpbGxTdHlsZUlkIiwidGV4dFN0eWxlSWQiLCJzdHJva2VTdHlsZUlkIiwiZWZmZWN0U3R5bGVJZCIsImdyaWRTdHlsZUlkIiwiZm9yRWFjaCIsIml0ZW0iLCJzdHlsZUtleSIsImV4dHJhVG9rZW4iLCJnZXRBbGxUb2tlbnMiLCJyb290IiwiY29tcG9uZW50cyIsImZpbmRBbGwiLCJjIiwicGFyZW50IiwidG9rZW4iLCJhZGRDb25maWciLCJnZXRMb2NhbFBhaW50U3R5bGVzIiwiZ2V0TG9jYWxUZXh0U3R5bGVzIiwiZ2V0TG9jYWxFZmZlY3RTdHlsZXMiLCJnZXRMb2NhbEdyaWRTdHlsZXMiLCJnb3RBbGxUb2tlbnMiLCJpZ25vcmVDbGFzc05hbWUiLCJOT0RFIiwiaXNTdHJ1Y3ROb2RlIiwic3RhcnRzV2l0aCIsInllc1R5cGVzIiwiY2hpbGRyZW4iLCJnb3RObyIsImZpbmQiLCJ2aXNpYmxlIiwiaXNSZW5kZXJDaGlsZHJlbiIsImdldE5vZGVJbmZvIiwidGFnTmFtZSIsIkZJTEwiLCJURVhUIiwiU1RST0tFIiwiR1JJRCIsIkVGRkVDVCIsIk9USEVSUyIsIkZMRVgiLCJTdHJpbmciLCJwdXNoIiwiU0FDU1MiLCJhZGQiLCJwYXJzZUludCIsIndpZHRoIiwiaGVpZ2h0IiwidGV4dHMiLCJnZXRUZXh0Q2hpbGRyZW4iLCJnZXROb2Rlc0luZm8iLCJVVElMUyIsImNsZWFyQ2xhc3NOYW1lIiwiQXJyYXkiLCJjaGlsZHJlbkluZm8iLCJzb3J0Iiwibm9kZXMiLCJhIiwiYiIsImFZIiwieSIsImJZIiwieCIsImluZm8iLCJzb3J0Tm9kZXMiLCJsZW4iLCJuYW1lTWFwIiwiZ2V0Q2xhc3NTZWxlY3RvckJ5TmFtZSIsImdldFN0cmluZyIsInJlc3VsdCIsIm1hcCIsImpvaW4iLCJ1bml0IiwicHJvcE5hbWUiLCJ1c2VWYWx1ZSIsIk51bWJlciIsInBhcnNlRmxvYXQiLCJ0b0ZpeGVkIiwiY2xhc3NVbml0IiwiYWRkRm9udEZhbWlseSIsInZhbHVlT2siLCJ0b0xvd2VyQ2FzZSIsImFkZENvbG9yIiwicmdiYSIsImFkZEJnQ29sb3IiLCJpc0Jsb2NrIiwiYmxvY2tUYWciLCJpc1NlbGZUYWciLCJzZWxmVGFnIiwiRE9NIiwicmVuZGVyIiwib2JqIiwiSlNYIiwiZ2V0SXRlbURvbSIsIkhUTUwiLCJnZXRQcm9wc1N0cmluZ0J5T2JqZWN0IiwicHJvcHMiLCJhcnJQcm9wcyIsImVudHJpZXMiLCJzdHJWYWx1ZSIsImtleU5hbWUiLCJfdGFnTmFtZSIsInN0clByb3BzIiwidGFnU3RhcnQiLCJnZXREb21CeUFycmF5IiwiZ2V0UHJvcHNTdHJpbmciLCJjb21wb25lbnROYW1lIiwiQ09MT1IiLCJnZXRSZ2JhQnlGaWxsIiwiY29sb3IiLCJvcGFjaXR5IiwiciIsImciLCJnZXRGaWxsIiwiZ2V0UmFuZ2VGaWxscyIsImZpbGxzIiwiZmlyc3RGaWxsIiwiZ2V0UmFuZ2VGaWxsU3R5bGVJZCIsImNsYXNzQ29sb3IiLCJpc0ZsZXgiLCJsYXlvdXRNb2RlIiwiZ2V0VGhpc0luZm8iLCJwcmltYXJ5QXhpc0FsaWduSXRlbXMiLCJjb3VudGVyQXhpc0FsaWduSXRlbXMiLCJnZXRJbmZvRnJvbVBhcmVudCIsIml0ZW1TcGFjaW5nIiwiZmlsdGVyIiwicG9wIiwiaXNMYXN0Q2hpbGRyZW4iLCJndXR0ZXJNYXAiLCJsYXlvdXRHcm93IiwiYmFzZUNsYXNzTmFtZSIsImMyIiwiaWMyIiwiZ2VyQm9yZGVyUmFkaXVzQ2xhc3NOYW1lIiwidGwiLCJ0b3BMZWZ0UmFkaXVzIiwidHIiLCJ0b3BSaWdodFJhZGl1cyIsImJyIiwiYm90dG9tUmlnaHRSYWRpdXMiLCJibCIsImJvdHRvbUxlZnRSYWRpdXMiLCJnZXRQYWRkaW5nQ2xhc3NOYW1lIiwicGFkZGluZ1RvcCIsInBhZGRpbmdSaWdodCIsInBhZGRpbmdCb3R0b20iLCJwYWRkaW5nTGVmdCIsInBhZGRpbmciLCJyYWRpdXMiLCJ1bml0TWFwIiwiZ2V0Rm9udE5hbWVDbGFzc0J5U3R5bGUiLCJzdHlsZSIsImZvbnRNYXAiLCJzcGxpdCIsImdldFByb3BCeU5vZGUiLCJnZXRBQ1NTU0luZm8iLCJmb250U2l6ZSIsImxpbmVIZWlnaHQiLCJsZXR0ZXJTcGFjaW5nIiwiZm9udE5hbWUiLCJmbkNsYXNzIiwiZmFtaWx5IiwidGFDbGFzcyIsInRleHRBbGlnbkhvcml6b250YWwiLCJ2YUNsYXNzIiwidGV4dEFsaWduVmVydGljYWwiLCJ0ZXh0Q2FzZSIsInR0Q2xhc3MiLCJ0ZXh0RGVjb3JhdGlvbiIsInRkQ2xhc3MiLCJzdHJDbGFzc05hbWUiLCJpc1N0cm9uZyIsImZpbmRJbmRleCIsImNoYXJhY3RlcnMiLCJsZWdhbFAiLCJtYkNsYXNzIiwicGFyYWdyYXBoU3BhY2luZyIsInBzIiwiaXNMYXN0IiwiYWNzc0luZm8iLCJBUEkiLCJ0YWJJbmRleCIsImdldFNlbGVjdGlvbiIsImN1cnJlbnRQYWdlIiwibm9TZWxlY3Rpb24iLCJvblRhYkNoYW5nZSIsImluZGV4IiwiYmVmb3JlSW5kZXgiLCJhY3Rpb25NYXAiLCJhY3Rpb24iLCJydW4iLCJydW5Ib21lIiwiSW5mbyIsInNldFRpbWVvdXQiLCJnZXRIVE1MIiwiZ2V0Q1NTIiwicnVuQ29uZmlnIiwiZ2V0Q29uZmlnIiwicnVuVG9rZW4iLCJvbm1lc3NhZ2UiLCJtc2ciLCJ0cnlPbGRDb25maWciLCJzaG93VUkiLCJfX2h0bWxfXyIsIm9uIiwicHJvamVjdHMiLCJjb25zb2xlIiwibG9nIiwiZ2V0T2xkQ29uZmlnIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtR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QUE7QUFFY2pJLHVFQUFmLEU7Ozs7Ozs7Ozs7OztBQ2pCQTtBQUFBLElBQU1zUSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQ3ZCO0FBQ0EvTyxPQUFLLENBQUNDLGFBQU4sQ0FBb0JnQixRQUFwQixDQUE2QixPQUE3QixFQUFzQ0MsSUFBdEMsQ0FBMkMsWUFBYztBQUFBLFFBQWJDLEdBQWEsdUVBQVAsRUFBTztBQUNyRCxRQUFPZ08sUUFBUCxHQUFtQmhPLEdBQW5CLENBQU9nTyxRQUFQOztBQUNBLFFBQUlBLFFBQVEsSUFBSUEsUUFBUSxDQUFDblIsTUFBekIsRUFBaUM7QUFDN0J1USxnQkFBVSxDQUFDLFlBQUk7QUFDWGEsZUFBTyxDQUFDQyxHQUFSLENBQVksT0FBWixFQUFxQmxPLEdBQXJCO0FBQ0FuQixhQUFLLENBQUNLLEVBQU4sQ0FBU0MsV0FBVCxDQUFxQjtBQUNqQmdQLHNCQUFZLEVBQUVuTztBQURHLFNBQXJCO0FBR0gsT0FMUyxFQUtQLEVBTE8sQ0FBVjtBQU1IO0FBQ0osR0FWRDtBQVdILENBYkQ7O0FBZWU0TiwyRUFBZixFIiwiZmlsZSI6ImNvZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9jb2RlLnRzXCIpO1xuIiwiaW1wb3J0IENPTkZJRyBmcm9tIFwiLi9DT05GSUdcIjtcbmltcG9ydCBvYmpNZXJnZSBmcm9tIFwiLi4vdWkvdXRpbHMvb2JqTWVyZ2UuanNcIjtcbmNvbnN0IENPTVBPTkVOVCA9IHtcbiAgICBpc0NvbXBvbmVudDogKG5vZGUpID0+IHtcbiAgICAgICAgLy8gJ0NPTVBPTkVOVF9TRVQnIOebruWJjeS4jeiDveS9nOS4uue7hOS7tueahOWIpOaWreagh+WHhlxuICAgICAgICByZXR1cm4gbm9kZS50eXBlID09PSAnSU5TVEFOQ0UnIHx8IG5vZGUudHlwZSA9PT0gJ0NPTVBPTkVOVCc7XG4gICAgfSxcbiAgICBnZXRNYWluQ29tcG9uZW50OiAobm9kZSkgPT4ge1xuICAgICAgICBpZiAobm9kZS50eXBlID09PSAnQ09NUE9ORU5UX1NFVCcgfHwgbm9kZS50eXBlID09PSAnQ09NUE9ORU5UJykge1xuICAgICAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gY29uc29sZS5sb2cobm9kZSwge2lzVmFyaWFudH0pO1xuICAgICAgICByZXR1cm4gbm9kZS5tYWluQ29tcG9uZW50O1xuICAgIH0sXG4gICAgZ2V0Q29tcG9uZW50SWQ6IChub2RlKSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKG5vZGUpO1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGNvbnN0IHsga2V5ID0gJycgfSA9IENPTVBPTkVOVC5nZXRNYWluQ29tcG9uZW50KG5vZGUpIHx8IHt9O1xuICAgICAgICByZXR1cm4ga2V5O1xuICAgIH0sXG4gICAgc3RyaW5nVG9Db21wb25lbnROYW1lOiAobmFtZSA9ICcnKSA9PiB7XG4gICAgICAgIGNvbnN0IHRyaW1OYW1lID0gbmFtZS50cmltKCk7XG4gICAgICAgIGlmICghdHJpbU5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzdHJOYW1lID0gdHJpbU5hbWUucmVwbGFjZSgvW1xcV10vZywgJycpO1xuICAgICAgICBjb25zdCBmaXJzdENoYXIgPSBzdHJOYW1lLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICBpZiAoc3RyTmFtZS5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiBmaXJzdENoYXI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZpcnN0Q2hhciArIHN0ck5hbWUuc2xpY2UoMSk7XG4gICAgfSxcbiAgICBnZXRJbmZvOiAobm9kZSwgbm9kZUluZm8gPSB7fSkgPT4ge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGNvbnN0IGlkID0gQ09NUE9ORU5ULmdldENvbXBvbmVudElkKG5vZGUpO1xuICAgICAgICBjb25zdCBtYXRjaFRva2VuID0gaWQgPyBDT05GSUcuZ2V0VG9rZW4oKVtpZF0gOiAnJztcbiAgICAgICAgaWYgKCFtYXRjaFRva2VuKSB7XG4gICAgICAgICAgICByZXR1cm4gbm9kZUluZm87XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyBERUZBVUxUID0ge30gfSA9IG1hdGNoVG9rZW47XG4gICAgICAgIHJldHVybiBvYmpNZXJnZShub2RlSW5mbywgREVGQVVMVCk7XG4gICAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IENPTVBPTkVOVDtcbiIsInZhciBfX3Jlc3QgPSAodGhpcyAmJiB0aGlzLl9fcmVzdCkgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgICB2YXIgdCA9IHt9O1xuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxuICAgICAgICB0W3BdID0gc1twXTtcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcbiAgICAgICAgfVxuICAgIHJldHVybiB0O1xufTtcbmltcG9ydCBDT01QT05FTlQgZnJvbSBcIi4vQ09NUE9ORU5UXCI7XG5jb25zdCBDT05GSUdfREVGQVVMVCA9IHtcbiAgICBpc0pTWDogZmFsc2UsXG4gICAgX2lnbm9yZUNsYXNzTmFtZTogW10sXG4gICAgdG9rZW5zOiB7fVxufTtcbmNvbnN0IFZFUlNJT04gPSBcIjEuMFwiO1xuY29uc3QgQ09ORklHID0ge1xuICAgIGtleTogYFRva2VuVG9Db2RlLSR7VkVSU0lPTn1gLFxuICAgIHN0b3JlOiBDT05GSUdfREVGQVVMVCxcbiAgICBjaGFuZ2VKU1g6ICh2YWx1ZSkgPT4ge1xuICAgICAgICBjb25zdCBzdG9yZSA9IENPTkZJRy5nZXRDdXJyZW50KCk7XG4gICAgICAgIC8vIOmHjee9ruWbnuesrOS4gOS4qlxuICAgICAgICBzdG9yZS5pc0pTWCA9IHZhbHVlO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhzdG9yZSk7XG4gICAgICAgIGZpZ21hLmNsaWVudFN0b3JhZ2Uuc2V0QXN5bmMoQ09ORklHLmtleSwgc3RvcmUpO1xuICAgIH0sXG4gICAgZWRpdDogKGRhdGEpID0+IHtcbiAgICAgICAgQ09ORklHLnN0b3JlID0gZGF0YTtcbiAgICAgICAgZmlnbWEuY2xpZW50U3RvcmFnZS5zZXRBc3luYyhDT05GSUcua2V5LCBkYXRhKTtcbiAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgYWxlcnRNc2c6IGBTYXZlIHN1Y2Nlc3NgXG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgYWRkVG9rZW46IChkYXRhKSA9PiB7XG4gICAgICAgIGNvbnN0IF9hID0gQ09ORklHLmdldEN1cnJlbnQoKSwgeyB0b2tlbnMgfSA9IF9hLCByZXN0ID0gX19yZXN0KF9hLCBbXCJ0b2tlbnNcIl0pO1xuICAgICAgICBjb25zdCBuZXdTdG9yZSA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgcmVzdCksIHsgdG9rZW5zOiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHRva2VucyksIGRhdGEpIH0pO1xuICAgICAgICBDT05GSUcuc3RvcmUgPSBuZXdTdG9yZTtcbiAgICAgICAgZmlnbWEuY2xpZW50U3RvcmFnZS5zZXRBc3luYyhDT05GSUcua2V5LCBuZXdTdG9yZSk7XG4gICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIGFsZXJ0TXNnOiBgU2F2ZSBzdWNjZXNzYFxuICAgICAgICB9KTtcbiAgICB9LFxuICAgIGlzSlNYOiAoKSA9PiB7XG4gICAgICAgIHJldHVybiAhIUNPTkZJRy5zdG9yZS5pc0pTWDtcbiAgICB9LFxuICAgIGluaXQ6ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBmaWdtYS5jbGllbnRTdG9yYWdlLmdldEFzeW5jKENPTkZJRy5rZXkpLnRoZW4oKHJldCA9IG51bGwpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmV0ICYmIE9iamVjdC5rZXlzKHJldCkubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIENPTkZJRy5zdG9yZSA9IHJldDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIOayoeaciee8k+WtmOWIm+W7uuS4gOS4quaWsOeahFxuICAgICAgICAgICAgICAgICAgICBmaWdtYS5jbGllbnRTdG9yYWdlLnNldEFzeW5jKENPTkZJRy5rZXksIENPTkZJR19ERUZBVUxUKTtcbiAgICAgICAgICAgICAgICAgICAgQ09ORklHLnN0b3JlID0gQ09ORklHX0RFRkFVTFQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlc29sdmUoQ09ORklHLmdldFRva2VuKCkpO1xuICAgICAgICAgICAgfSkuY2F0Y2gocmVqZWN0KTtcbiAgICAgICAgfSkpO1xuICAgIH0sXG4gICAgZ2V0Q3VycmVudDogKCkgPT4ge1xuICAgICAgICByZXR1cm4gQ09ORklHLnN0b3JlO1xuICAgIH0sXG4gICAgZ2V0VG9rZW46ICgpID0+IHtcbiAgICAgICAgY29uc3QgeyB0b2tlbnMgPSBudWxsIH0gPSBDT05GSUcuc3RvcmUgfHwge307XG4gICAgICAgIHJldHVybiB0b2tlbnMgPyBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRva2VucykpIDogbnVsbDtcbiAgICB9LFxuICAgIGdldEluZm9CeUlkOiAoaWQsIHR5cGUgPSBcIkRFRkFVTFRcIikgPT4ge1xuICAgICAgICBpZiAoIShpZCAmJiAodHlwZW9mIGlkID09PSAnc3RyaW5nJykpKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IGtleSA9ICcnIH0gPSBmaWdtYS5nZXRTdHlsZUJ5SWQoaWQpIHx8IHt9O1xuICAgICAgICBpZiAoIWtleSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdG9rZW5Db25maWcgPSBDT05GSUcuZ2V0VG9rZW4oKSB8fCB7fTtcbiAgICAgICAgY29uc3QgbWF0Y2hUb2tlbiA9IHRva2VuQ29uZmlnW2tleV0gfHwge307XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdnZXRJbmZvQnlJZCcsIG1hdGNoVG9rZW4sIHR5cGUpXG4gICAgICAgIC8vIOWmguaenOacieiHquWumuS5ieeUqOiHquWumuS5ieeahFxuICAgICAgICByZXR1cm4gbWF0Y2hUb2tlblt0eXBlXSB8fCBtYXRjaFRva2VuLkRFRkFVTFQgfHwgbnVsbDtcbiAgICB9LFxuICAgIGdldFNlbGVjdGlvblRva2VuczogKHNlbGVjdGlvbikgPT4ge1xuICAgICAgICBjb25zdCB7IHRva2VucyA9IHt9IH0gPSBDT05GSUcuc3RvcmU7XG4gICAgICAgIGlmICghc2VsZWN0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHNlbGVjdGlvblRva2VuczogbnVsbFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBtYXRjaFRva2VuID0ge307XG4gICAgICAgIC8vIOWmguaenOaYr+e7hOS7tlxuICAgICAgICBpZiAoQ09NUE9ORU5ULmlzQ29tcG9uZW50KHNlbGVjdGlvbikpIHtcbiAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICAgICAgY29uc3QgeyBrZXksIG5hbWUsIHR5cGUgfSA9IENPTVBPTkVOVC5nZXRNYWluQ29tcG9uZW50KHNlbGVjdGlvbik7XG4gICAgICAgICAgICBjb25zdCBmaW5kVG9rZW4gPSB0b2tlbnNba2V5XSB8fCB7fTtcbiAgICAgICAgICAgIG1hdGNoVG9rZW5ba2V5XSA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7IERFRkFVTFQ6IHtcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgX2lnbm9yZUNsYXNzTmFtZTogW10sXG4gICAgICAgICAgICAgICAgICAgIF9yZW5kZXJXaWR0aDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIF9yZW5kZXJIZWlnaHQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIH0gfSwgZmluZFRva2VuKSwgeyBfdG9rZW5OYW1lOiBuYW1lLCBfdG9rZW5UeXBlOiB0eXBlIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICBbc2VsZWN0aW9uLmZpbGxTdHlsZUlkLCBzZWxlY3Rpb24udGV4dFN0eWxlSWQsIHNlbGVjdGlvbi5zdHJva2VTdHlsZUlkLCBzZWxlY3Rpb24uZWZmZWN0U3R5bGVJZCwgc2VsZWN0aW9uLmdyaWRTdHlsZUlkXS5mb3JFYWNoKChpdGVtLCBrZXkpID0+IHtcbiAgICAgICAgICAgIGlmICghaXRlbSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHsga2V5OiBzdHlsZUtleSwgbmFtZSwgdHlwZSB9ID0gZmlnbWEuZ2V0U3R5bGVCeUlkKGl0ZW0pIHx8IHt9O1xuICAgICAgICAgICAgaWYgKCFzdHlsZUtleSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBleHRyYVRva2VuID0gbnVsbDtcbiAgICAgICAgICAgIC8vIOWmguaenOaciSBmaWxsU3R5bGVJZFxuICAgICAgICAgICAgaWYgKGtleSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGV4dHJhVG9rZW4gPSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIOWPr+S7pemineWkluWvueaWh+Wtl+i/m+ihjOiuvue9rlxuICAgICAgICAgICAgICAgICAgICBcIlRFWFRcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9pZ25vcmVDbGFzc05hbWU6IFtdXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbWF0Y2hUb2tlbltzdHlsZUtleV0gPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7IERFRkFVTFQ6IHtcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgX2lnbm9yZUNsYXNzTmFtZTogW11cbiAgICAgICAgICAgICAgICB9IH0sIGV4dHJhVG9rZW4pLCB0b2tlbnNbc3R5bGVLZXldKSwgeyBfdG9rZW5OYW1lOiBuYW1lLCBfdG9rZW5UeXBlOiB0eXBlIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNlbGVjdGlvblRva2VuczogbWF0Y2hUb2tlblxuICAgICAgICB9O1xuICAgIH0sXG4gICAgLyoqXG4gICAgICog6I635Y+W5omA5pyJ55qEIFRva2VuIOWMheaLrCBDb21wb25lbnRcbiAgICAgKi9cbiAgICBnZXRBbGxUb2tlbnM6ICgpID0+IHtcbiAgICAgICAgY29uc3QgbmFtZSA9IGZpZ21hLnJvb3QubmFtZTtcbiAgICAgICAgY29uc3QgY29tcG9uZW50cyA9IGZpZ21hLnJvb3QuZmluZEFsbChjID0+IHtcbiAgICAgICAgICAgIGlmIChjLnR5cGUgPT09ICdDT01QT05FTlRfU0VUJykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGMudHlwZSAhPT0gJ0NPTVBPTkVOVCcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYy5wYXJlbnQudHlwZSA9PT0gJ0NPTVBPTkVOVF9TRVQnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCB0b2tlbiA9IHt9O1xuICAgICAgICBjb25zdCBhZGRDb25maWcgPSAoZGF0YSA9IFtdKSA9PiB7XG4gICAgICAgICAgICBkYXRhLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICB0b2tlbltpdGVtLmlkXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogaXRlbS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBpdGVtLnR5cGVcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGFkZENvbmZpZyhjb21wb25lbnRzKTtcbiAgICAgICAgYWRkQ29uZmlnKGZpZ21hLmdldExvY2FsUGFpbnRTdHlsZXMoKSk7XG4gICAgICAgIGFkZENvbmZpZyhmaWdtYS5nZXRMb2NhbFRleHRTdHlsZXMoKSk7XG4gICAgICAgIGFkZENvbmZpZyhmaWdtYS5nZXRMb2NhbEVmZmVjdFN0eWxlcygpKTtcbiAgICAgICAgYWRkQ29uZmlnKGZpZ21hLmdldExvY2FsR3JpZFN0eWxlcygpKTtcbiAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgZ290QWxsVG9rZW5zOiB7XG4gICAgICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgICAgICBpZ25vcmVDbGFzc05hbWU6ICcnLFxuICAgICAgICAgICAgICAgIHRva2VuXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5leHBvcnQgZGVmYXVsdCBDT05GSUc7XG4iLCJpbXBvcnQgQ09NUE9ORU5UIGZyb20gXCIuL0NPTVBPTkVOVFwiO1xuaW1wb3J0IEZJTEwgZnJvbSBcIi4vdG9rZW4vRklMTFwiO1xuaW1wb3J0IFRFWFQgZnJvbSBcIi4vdG9rZW4vVEVYVFwiO1xuaW1wb3J0IFNUUk9LRSBmcm9tIFwiLi90b2tlbi9TVFJPS0VcIjtcbmltcG9ydCBHUklEIGZyb20gXCIuL3Rva2VuL0dSSURcIjtcbmltcG9ydCBGTEVYIGZyb20gXCIuL3Rva2VuL0ZMRVhcIjtcbmltcG9ydCBTQUNTUyBmcm9tIFwiLi9TQUNTU1wiO1xuaW1wb3J0IFVUSUxTIGZyb20gXCIuL1VUSUxTXCI7XG5pbXBvcnQgRUZGRUNUIGZyb20gXCIuL3Rva2VuL0VGRkVDVFwiO1xuaW1wb3J0IE9USEVSUyBmcm9tIFwiLi90b2tlbi9PVEhFUlNcIjtcbmltcG9ydCBDT05GSUcgZnJvbSBcIi4vQ09ORklHXCI7XG5jb25zdCBOT0RFID0ge1xuICAgIC8qKlxuICAgICAqIOWmguaenOS4gOS4quWFg+e0oOWGhemDqOWPquacieWHoOS9leWbvuW9ou+8jOmCo+S5iOWPquaYvuekuuWFtue7k+aehFxuICAgICAqL1xuICAgIGlzU3RydWN0Tm9kZTogKG5vZGUpID0+IHtcbiAgICAgICAgLy8g5LulI+WPt+W8gOWktFxuICAgICAgICBpZiAobm9kZS5uYW1lLnN0YXJ0c1dpdGgoXCIjXCIpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB5ZXNUeXBlcyA9IFsnUkVDVEFOR0xFJywgJ1ZFQ1RPUicsICdTVEFSJywgJ0xJTkUnLCAnUE9MWUdPTicsICdFTExJUFNFJywgJ1NMSUNFJ107XG4gICAgICAgIC8vIOWmguaenOacrOi6q+WwseaYr+i/meS6m+WFg+e0oOmCo+S5iOS5n+aYr+ebtOaOpei+k+WHulxuICAgICAgICBpZiAoeWVzVHlwZXMuaW5kZXhPZihub2RlLnR5cGUpID4gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChub2RlLnR5cGUgPT09ICdURVhUJykge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgY29uc3QgeyBjaGlsZHJlbiA9IFtdIH0gPSBub2RlO1xuICAgICAgICBpZiAoIWNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgLy8g5om+5Yiw5LqG5LiN5ZCI5rOV5YWD57Sg77yI5LiN5Zyo5LiK6Z2i55qE5Yeg5L2V5YiX6KGo6YeM6Z2i77yJXG4gICAgICAgIGNvbnN0IGdvdE5vID0gY2hpbGRyZW4uZmluZCgoaXRlbSkgPT4gaXRlbS52aXNpYmxlICYmIHllc1R5cGVzLmluZGV4T2YoaXRlbS50eXBlKSA9PT0gLTEpO1xuICAgICAgICByZXR1cm4gIWdvdE5vO1xuICAgIH0sXG4gICAgaXNSZW5kZXJDaGlsZHJlbjogKG5vZGUpID0+IHtcbiAgICAgICAgaWYgKCEobm9kZS50eXBlID09PSAnSU5TVEFOQ0UnIHx8IG5vZGUudHlwZSA9PT0gJ0NPTVBPTkVOVCcpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8g5Y+q5pyJ5LiA5Liq5a2Q5YWD57SgXG4gICAgICAgIGlmIChub2RlLmNoaWxkcmVuLmxlbmd0aCAhPT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIGNvbnN0IG9ubHlDaGlsZHJlbiA9IG5vZGUuY2hpbGRyZW5bMF07XG4gICAgICAgIC8vIGlmIChvbmx5Q2hpbGRyZW4udHlwZSA9PT0gJ0lOU1RBTkNFJykge1xuICAgICAgICAvLyAgIHJldHVybiB0cnVlO1xuICAgICAgICAvLyB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LFxuICAgIGdldE5vZGVJbmZvOiAobm9kZSkgPT4ge1xuICAgICAgICBpZiAoIW5vZGUudmlzaWJsZSB8fCBub2RlLm5hbWUuc3RhcnRzV2l0aChcIl9cIikpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIC8vIOebtOaOpea4suafk+WtkOWFg+e0oFxuICAgICAgICBpZiAoTk9ERS5pc1JlbmRlckNoaWxkcmVuKG5vZGUpKSB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlO1xuICAgICAgICAgICAgcmV0dXJuIE5PREUuZ2V0Tm9kZUluZm8obm9kZS5jaGlsZHJlblswXSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaXNTdHJ1Y3ROb2RlID0gTk9ERS5pc1N0cnVjdE5vZGUobm9kZSk7XG4gICAgICAgIGxldCBub2RlSW5mbyA9IHtcbiAgICAgICAgICAgIF9pZ25vcmVDbGFzc05hbWU6IFtdLFxuICAgICAgICAgICAgY2xhc3NOYW1lOiBbXSxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXVxuICAgICAgICB9O1xuICAgICAgICBpZiAoaXNTdHJ1Y3ROb2RlKSB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBub2RlSW5mby50YWdOYW1lID0gJ2knO1xuICAgICAgICB9XG4gICAgICAgIG5vZGVJbmZvID0gQ09NUE9ORU5ULmdldEluZm8obm9kZSwgbm9kZUluZm8pO1xuICAgICAgICBub2RlSW5mbyA9IEZJTEwuZ2V0SW5mbyhub2RlLCBub2RlSW5mbyk7XG4gICAgICAgIG5vZGVJbmZvID0gVEVYVC5nZXRJbmZvKG5vZGUsIG5vZGVJbmZvKTtcbiAgICAgICAgbm9kZUluZm8gPSBTVFJPS0UuZ2V0SW5mbyhub2RlLCBub2RlSW5mbyk7XG4gICAgICAgIG5vZGVJbmZvID0gR1JJRC5nZXRJbmZvKG5vZGUsIG5vZGVJbmZvKTtcbiAgICAgICAgbm9kZUluZm8gPSBFRkZFQ1QuZ2V0SW5mbyhub2RlLCBub2RlSW5mbyk7XG4gICAgICAgIG5vZGVJbmZvID0gT1RIRVJTLmdldEluZm8obm9kZSwgbm9kZUluZm8pO1xuICAgICAgICBub2RlSW5mbyA9IEZMRVguZ2V0SW5mbyhub2RlLCBub2RlSW5mbyk7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgaWYgKChpc1N0cnVjdE5vZGUgJiYgU3RyaW5nKG5vZGVJbmZvID09PSBudWxsIHx8IG5vZGVJbmZvID09PSB2b2lkIDAgPyB2b2lkIDAgOiBub2RlSW5mby5fcmVuZGVySGVpZ2h0KSAhPT0gZmFsc2UpIHx8IFN0cmluZyhub2RlSW5mbyA9PT0gbnVsbCB8fCBub2RlSW5mbyA9PT0gdm9pZCAwID8gdm9pZCAwIDogbm9kZUluZm8uX3JlbmRlcldpZHRoKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgbm9kZUluZm8uY2xhc3NOYW1lLnB1c2goU0FDU1MuYWRkKCd3JywgcGFyc2VJbnQoU3RyaW5nKG5vZGUud2lkdGgpKSkpO1xuICAgICAgICB9XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgaWYgKChpc1N0cnVjdE5vZGUgJiYgU3RyaW5nKG5vZGVJbmZvID09PSBudWxsIHx8IG5vZGVJbmZvID09PSB2b2lkIDAgPyB2b2lkIDAgOiBub2RlSW5mby5fcmVuZGVySGVpZ2h0KSAhPT0gZmFsc2UpIHx8IFN0cmluZyhub2RlSW5mbyA9PT0gbnVsbCB8fCBub2RlSW5mbyA9PT0gdm9pZCAwID8gdm9pZCAwIDogbm9kZUluZm8uX3JlbmRlckhlaWdodCkgPT09IHRydWUpIHtcbiAgICAgICAgICAgIG5vZGVJbmZvLmNsYXNzTmFtZS5wdXNoKFNBQ1NTLmFkZCgnaCcsIHBhcnNlSW50KFN0cmluZyhub2RlLmhlaWdodCkpKSk7XG4gICAgICAgIH1cbiAgICAgICAgbm9kZUluZm8uY2hpbGRyZW4gPSAoKCkgPT4ge1xuICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgaWYgKG5vZGUudHlwZSA9PT0gJ1RFWFQnKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGV4dHMgPSBURVhULmdldFRleHRDaGlsZHJlbihub2RlKTtcbiAgICAgICAgICAgICAgICAvLyDlpJrmrrXmlofmnKzov5nph4zopoHkv67lpI3kuIDkuIvltYzlpZfnmoTmoIfnrb7vvIzmnInlj6/og73lj5jmiJAgc3Ryb25nID4gcCDov5nmoLfnmoTnu5PmnoRcbiAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgICAgaWYgKCgoX2EgPSB0ZXh0c1swXSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnRhZ05hbWUpID09PSAncCcpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgICAgICBub2RlSW5mby50YWdOYW1lID0gXCJkaXZcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRleHRzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGlzU3RydWN0Tm9kZSB8fCBub2RlSW5mby5jaGlsZHJlbiA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIHJldHVybiBOT0RFLmdldE5vZGVzSW5mbyhub2RlLmNoaWxkcmVuKTtcbiAgICAgICAgfSkoKTtcbiAgICAgICAgLy8g5pW05Liq6aG555uu6YO95b+955Wl55qEIGNsYXNzTmFtZVxuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGNvbnN0IHsgX2lnbm9yZUNsYXNzTmFtZSA9IFtdIH0gPSBDT05GSUcuZ2V0Q3VycmVudCgpIHx8IHt9O1xuICAgICAgICBub2RlSW5mby5jbGFzc05hbWUgPSBVVElMUy5jbGVhckNsYXNzTmFtZShub2RlSW5mby5jbGFzc05hbWUsIFsuLi5ub2RlSW5mby5faWdub3JlQ2xhc3NOYW1lLCAuLi5faWdub3JlQ2xhc3NOYW1lXSk7XG4gICAgICAgIGlmICgobm9kZUluZm8uY2hpbGRyZW4gaW5zdGFuY2VvZiBBcnJheSkgJiYgbm9kZUluZm8uY2hpbGRyZW4ubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICBjb25zdCBjaGlsZHJlbkluZm8gPSBub2RlSW5mby5jaGlsZHJlblswXTtcbiAgICAgICAgICAgIC8vIOWmguaenOeItuWFg+e0oOWSjOWtkOWFg+e0oCB0YWdOYW1lIOebuOWQjOWQiOW5tiBjbGFzc05hbWVcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY2hpbGRyZW5JbmZvICE9PSAnc3RyaW5nJyAmJiBjaGlsZHJlbkluZm8udGFnTmFtZSA9PT0gbm9kZUluZm8udGFnTmFtZSkge1xuICAgICAgICAgICAgICAgIGNoaWxkcmVuSW5mby5jbGFzc05hbWUgPSBbLi4uY2hpbGRyZW5JbmZvLmNsYXNzTmFtZSwgLi4ubm9kZUluZm8uY2xhc3NOYW1lXTtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2hpbGRyZW5JbmZvO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHtub2RlSW5mb30pO1xuICAgICAgICByZXR1cm4gbm9kZUluZm87XG4gICAgfSxcbiAgICBzb3J0OiAobm9kZXMgPSBbXSkgPT4ge1xuICAgICAgICByZXR1cm4gWy4uLm5vZGVzXS5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhWSA9IGEueSArIGEuaGVpZ2h0O1xuICAgICAgICAgICAgY29uc3QgYlkgPSBiLnkgKyBiLmhlaWdodDtcbiAgICAgICAgICAgIGlmIChhLnkgPT09IGIueSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBhLnggLSBiLng7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYVkgLSBiWTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBnZXROb2Rlc0luZm86IChub2RlcyA9IFtdKSA9PiB7XG4gICAgICAgIGxldCBpbmZvID0gW107XG4gICAgICAgIC8vIOmcgOimgeaOkuW6j+S4gOS4i1xuICAgICAgICBjb25zdCBzb3J0Tm9kZXMgPSBOT0RFLnNvcnQobm9kZXMpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhub2Rlcywgc29ydE5vZGVzKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHNvcnROb2Rlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgY29uc3Qgbm9kZUluZm8gPSBOT0RFLmdldE5vZGVJbmZvKHNvcnROb2Rlc1tpXSk7XG4gICAgICAgICAgICBpZiAoIW5vZGVJbmZvKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobm9kZUluZm8gaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgICAgIGluZm8gPSBbLi4uaW5mbywgLi4ubm9kZUluZm9dO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaW5mby5wdXNoKG5vZGVJbmZvKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW5mbztcbiAgICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgTk9ERTtcbiIsImNvbnN0IFNBQ1NTID0ge1xuICAgIGRhdGE6IHt9LFxuICAgIGluaXQ6ICgpID0+IHtcbiAgICAgICAgU0FDU1MuZGF0YSA9IHt9O1xuICAgIH0sXG4gICAgbmFtZU1hcDoge1xuICAgICAgICAnZnMnOiAnZm9udC1zaXplJyxcbiAgICAgICAgJ2xoJzogJ2xpbmUtaGVpZ2h0JyxcbiAgICAgICAgJ2xzJzogJ2xldHRlci1zcGFjZScsXG4gICAgICAgICdmZic6ICdmb250LWZhbWlseScsXG4gICAgICAgICdwdCc6ICdwYWRkaW5nLXRvcCcsXG4gICAgICAgICdwcic6ICdwYWRkaW5nLXJpZ2h0JyxcbiAgICAgICAgJ3BiJzogJ3BhZGRpbmctYm90dG9tJyxcbiAgICAgICAgJ3BsJzogJ3BhZGRpbmctbGVmdCcsXG4gICAgICAgICdtdCc6ICdtYXJnaW4tdG9wJyxcbiAgICAgICAgJ21yJzogJ21hcmdpbi1yaWdodCcsXG4gICAgICAgICdtYic6ICdtYXJnaW4tYm90dG9tJyxcbiAgICAgICAgJ21sJzogJ21hcmdpbi1sZWZ0JyxcbiAgICAgICAgJ2gnOiAnaGVpZ2h0JyxcbiAgICAgICAgJ3cnOiAnd2lkdGgnLFxuICAgICAgICAnYnRscic6ICdib3JkZXItdG9wLWxlZnQtcmFkaXVzJyxcbiAgICAgICAgJ2J0cnInOiAnYm9yZGVyLXRvcC1yaWdodC1yYWRpdXMnLFxuICAgICAgICAnYmJycic6ICdib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1cycsXG4gICAgICAgICdiYmxyJzogJ2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXMnLFxuICAgICAgICAnYnInOiAnYm9yZGVyLXJhZGl1cydcbiAgICB9LFxuICAgIGdldENsYXNzU2VsZWN0b3JCeU5hbWU6IChjbGFzc05hbWUgPSAnJykgPT4ge1xuICAgICAgICBpZiAoY2xhc3NOYW1lLmluZGV4T2YoJy4nKSA+IC0xKSB7XG4gICAgICAgICAgICBjbGFzc05hbWUgPSBjbGFzc05hbWUucmVwbGFjZSgvXFwuL2csICdcXFxcLicpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjbGFzc05hbWUuaW5kZXhPZignOicpID4gLTEpIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IGNsYXNzTmFtZS5yZXBsYWNlKC9cXDovZywgJ1xcXFw6Jyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNsYXNzTmFtZS5pbmRleE9mKCclJykgPiAtMSkge1xuICAgICAgICAgICAgY2xhc3NOYW1lID0gY2xhc3NOYW1lLnJlcGxhY2UoL1xcJS9nLCAnXFxcXCUnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2xhc3NOYW1lO1xuICAgIH0sXG4gICAgZ2V0U3RyaW5nOiAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBTQUNTUy5kYXRhO1xuICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoZGF0YSkuc29ydCgpO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBrZXlzLm1hcCgobmFtZSkgPT4gYC4ke1NBQ1NTLmdldENsYXNzU2VsZWN0b3JCeU5hbWUobmFtZSl9eyR7ZGF0YVtuYW1lXX07fWApLmpvaW4oJ1xcbicpO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0sXG4gICAgYWRkOiAobmFtZSA9ICcnLCB2YWx1ZSwgdW5pdCA9ICdweCcpID0+IHtcbiAgICAgICAgaWYgKCFuYW1lIHx8ICF2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHByb3BOYW1lID0gU0FDU1MubmFtZU1hcFtuYW1lXTtcbiAgICAgICAgaWYgKCFwcm9wTmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG4gICAgICAgIC8vIOWPquS/neeVmeS4pOS9jeWwj+aVsFxuICAgICAgICBjb25zdCB1c2VWYWx1ZSA9IE51bWJlcih2YWx1ZSkgPyBwYXJzZUZsb2F0KE51bWJlcih2YWx1ZSkudG9GaXhlZCgyKSkgOiB2YWx1ZTtcbiAgICAgICAgLy8g5aaC5p6c5pivIHB4IOS4jemcgOimgea4suafk1xuICAgICAgICBjb25zdCBjbGFzc1VuaXQgPSB1bml0ID09PSAncHgnID8gJycgOiB1bml0O1xuICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBgJHtuYW1lfSR7dXNlVmFsdWV9JHtjbGFzc1VuaXR9YDtcbiAgICAgICAgU0FDU1MuZGF0YVtjbGFzc05hbWVdID0gYCR7cHJvcE5hbWV9OiR7dXNlVmFsdWV9JHt1bml0fWA7XG4gICAgICAgIHJldHVybiBjbGFzc05hbWU7XG4gICAgfSxcbiAgICBhZGRGb250RmFtaWx5OiAodmFsdWUpID0+IHtcbiAgICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHZhbHVlT2sgPSB2YWx1ZS5yZXBsYWNlKC9bXFxXXS9nLCAnJykudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gYGZmXyR7dmFsdWVPa31gO1xuICAgICAgICBTQUNTUy5kYXRhW2NsYXNzTmFtZV0gPSBgZm9udC1mYW1pbHk6XCIke3ZhbHVlfVwiYDtcbiAgICAgICAgcmV0dXJuIGNsYXNzTmFtZTtcbiAgICB9LFxuICAgIGFkZENvbG9yOiAocmdiYSA9IFtdKSA9PiB7XG4gICAgICAgIGlmICghcmdiYSAmJiByZ2JhLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IGBjXyR7cmdiYS5qb2luKCcnKX1gO1xuICAgICAgICBTQUNTUy5kYXRhW2NsYXNzTmFtZV0gPSBgY29sb3I6cmdiYSgke3JnYmEuam9pbignLCcpfSlgO1xuICAgICAgICByZXR1cm4gY2xhc3NOYW1lO1xuICAgIH0sXG4gICAgYWRkQmdDb2xvcjogKHJnYmEgPSBbXSkgPT4ge1xuICAgICAgICBpZiAoIXJnYmEgJiYgcmdiYS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBgYmNfJHtyZ2JhLmpvaW4oJycpfWA7XG4gICAgICAgIFNBQ1NTLmRhdGFbY2xhc3NOYW1lXSA9IGBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoJHtyZ2JhLmpvaW4oJywnKX0pYDtcbiAgICAgICAgcmV0dXJuIGNsYXNzTmFtZTtcbiAgICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgU0FDU1M7XG4iLCJjb25zdCBVVElMUyA9IHtcbiAgICBpc0Jsb2NrOiAodGFnTmFtZSA9ICcnKSA9PiB7XG4gICAgICAgIGNvbnN0IGJsb2NrVGFnID0gWydkaXYnLCAnaDEnLCAnaDInLCAnaDMnLCAnaDQnLCAnaDUnLCAnaDYnLCAncCddO1xuICAgICAgICByZXR1cm4gYmxvY2tUYWcuaW5kZXhPZih0YWdOYW1lKSA+IC0xO1xuICAgIH0sXG4gICAgaXNTZWxmVGFnOiAodGFnTmFtZSA9ICcnKSA9PiB7XG4gICAgICAgIGNvbnN0IHNlbGZUYWcgPSBbJ2ltZycsICdsaW5rJywgJ21ldGEnLCAnYnInLCAnYnInLCAnaHInLCAnaW5wdXQnLCAnY29sJywgJ2ZyYW1lJywgJ2FyZWEnLCAncGFyYW0nLCAnb2JqZWN0JywgJ2VtYmVkJywgJ2tleWdlbicsICdzb3VyY2UnXTtcbiAgICAgICAgcmV0dXJuIHNlbGZUYWcuaW5kZXhPZih0YWdOYW1lKSA+IC0xO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICog5Y676YeN5ZKM5Y6756m6XG4gICAgICogQHBhcmFtIGFyclN0clxuICAgICAqL1xuICAgIGNsZWFyQ2xhc3NOYW1lOiAoY2xhc3NOYW1lID0gW10sIGlnbm9yZUNsYXNzTmFtZSA9IFtdKSA9PiB7XG4gICAgICAgIGlmICghY2xhc3NOYW1lIHx8IGNsYXNzTmFtZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZXN1bHQgPSBbXTtcbiAgICAgICAgY2xhc3NOYW1lLmZvckVhY2goKGl0ZW0gPSAnJykgPT4ge1xuICAgICAgICAgICAgaWYgKGl0ZW0gJiYgaXRlbSAhPT0gJ251bGwnICYmIHJlc3VsdC5pbmRleE9mKGl0ZW0pID09PSAtMSAmJiBpZ25vcmVDbGFzc05hbWUuaW5kZXhPZihpdGVtKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChpdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IFVUSUxTO1xuIiwiaW1wb3J0IEhUTUwgZnJvbSBcIi4vSFRNTFwiO1xuaW1wb3J0IEpTWCBmcm9tIFwiLi9KU1hcIjtcbmNvbnN0IERPTSA9IHtcbiAgICByZW5kZXI6IChvYmosIGlzSlNYKSA9PiB7XG4gICAgICAgIGlmIChpc0pTWCkge1xuICAgICAgICAgICAgcmV0dXJuIEpTWC5nZXRJdGVtRG9tKG9iaik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIEhUTUwuZ2V0SXRlbURvbShvYmopO1xuICAgIH1cbn07XG5leHBvcnQgZGVmYXVsdCBET007XG4iLCJ2YXIgX19yZXN0ID0gKHRoaXMgJiYgdGhpcy5fX3Jlc3QpIHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gICAgdmFyIHQgPSB7fTtcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcbiAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XG4gICAgICAgIH1cbiAgICByZXR1cm4gdDtcbn07XG5pbXBvcnQgVVRJTFMgZnJvbSBcIi4uL1VUSUxTXCI7XG4vLyBsZWdhbCDlkIjms5XlsZ7mgKdcbi8vIGNvbnN0IGxlZ2FsUHJvcCA9IFsnY2xhc3MnLCAndHlwZScsICduYW1lJywgJ3JvbGUnLCAnZGlzYWJsZWQnLCAnaWQnLCAndGl0bGUnLCAnbGFuZycsICdkaXInLCAndGFiaW5kZXgnLCAnYWNjZXNza2V5JywgJ3NyYycsICdocmVmJywgJ3N0eWxlJywgJ2FyaWEtaGlkZGVuJywgJ3RhcmdldCcsICdyZWwnXTtcbmNvbnN0IEhUTUwgPSB7XG4gICAgZ2V0UHJvcHNTdHJpbmdCeU9iamVjdDogKHByb3BzKSA9PiB7XG4gICAgICAgIGNvbnN0IGFyclByb3BzID0gW107XG4gICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHByb3BzKSkge1xuICAgICAgICAgICAgLy8g5b+955WlICdfJyDlvIDlpLTnmoTlsZ7mgKdcbiAgICAgICAgICAgIGlmICgha2V5LnN0YXJ0c1dpdGgoJ18nKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0clZhbHVlID0gdmFsdWUgaW5zdGFuY2VvZiBBcnJheSA/IHZhbHVlLmpvaW4oJyAnKSA6IHZhbHVlO1xuICAgICAgICAgICAgICAgIGNvbnN0IGtleU5hbWUgPSBrZXkgPT09ICdjbGFzc05hbWUnID8gJ2NsYXNzJyA6IGtleTtcbiAgICAgICAgICAgICAgICBzdHJWYWx1ZSAmJiBhcnJQcm9wcy5wdXNoKGAke2tleU5hbWV9PVwiJHtzdHJWYWx1ZX1cImApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhcnJQcm9wcy5qb2luKCcgJyk7XG4gICAgfSxcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgZ2V0SXRlbURvbTogKGl0ZW0pID0+IHtcbiAgICAgICAgaWYgKCFpdGVtKSB7XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyB0YWdOYW1lOiBfdGFnTmFtZSwgY2hpbGRyZW4gPSBbXSB9ID0gaXRlbSwgcHJvcHMgPSBfX3Jlc3QoaXRlbSwgW1widGFnTmFtZVwiLCBcImNoaWxkcmVuXCJdKTtcbiAgICAgICAgY29uc3QgdGFnTmFtZSA9IF90YWdOYW1lID8gX3RhZ05hbWUudG9Mb3dlckNhc2UoKSA6ICdkaXYnO1xuICAgICAgICBjb25zdCBzdHJQcm9wcyA9IEhUTUwuZ2V0UHJvcHNTdHJpbmdCeU9iamVjdChwcm9wcyk7XG4gICAgICAgIGNvbnN0IHRhZ1N0YXJ0ID0gYCR7dGFnTmFtZX0ke3N0clByb3BzID8gYCAke3N0clByb3BzfWAgOiAnJ31gO1xuICAgICAgICBpZiAoVVRJTFMuaXNTZWxmVGFnKHRhZ05hbWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gYDwke3RhZ1N0YXJ0fS8+YDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIGA8JHt0YWdTdGFydH0+PC8ke3RhZ05hbWV9PmA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGA8JHt0YWdTdGFydH0+JHtIVE1MLmdldERvbUJ5QXJyYXkoY2hpbGRyZW4pfTwvJHt0YWdOYW1lfT5gO1xuICAgIH0sXG4gICAgZ2V0RG9tQnlBcnJheTogKG9iaiA9IFtdKSA9PiB7XG4gICAgICAgIHJldHVybiBvYmoubWFwKChpdGVtKSA9PiBIVE1MLmdldEl0ZW1Eb20oaXRlbSkpLmpvaW4oJycpO1xuICAgIH1cbn07XG5leHBvcnQgZGVmYXVsdCBIVE1MO1xuIiwidmFyIF9fcmVzdCA9ICh0aGlzICYmIHRoaXMuX19yZXN0KSB8fCBmdW5jdGlvbiAocywgZSkge1xuICAgIHZhciB0ID0ge307XG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXG4gICAgICAgIHRbcF0gPSBzW3BdO1xuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xuICAgICAgICB9XG4gICAgcmV0dXJuIHQ7XG59O1xuaW1wb3J0IFVUSUxTIGZyb20gXCIuLi9VVElMU1wiO1xuY29uc3QgSlNYID0ge1xuICAgIGdldFByb3BzU3RyaW5nOiAocHJvcHMpID0+IHtcbiAgICAgICAgY29uc3QgYXJyUHJvcHMgPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMocHJvcHMpKSB7XG4gICAgICAgICAgICAvLyDlv73nlaUgJ18nIOW8gOWktOeahOWxnuaAp1xuICAgICAgICAgICAgaWYgKCFrZXkuc3RhcnRzV2l0aCgnXycpKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RyVmFsdWUgPSB2YWx1ZSBpbnN0YW5jZW9mIEFycmF5ID8gdmFsdWUuam9pbignICcpIDogdmFsdWU7XG4gICAgICAgICAgICAgICAgc3RyVmFsdWUgJiYgYXJyUHJvcHMucHVzaChgJHtrZXl9PVwiJHtzdHJWYWx1ZX1cImApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhcnJQcm9wcy5qb2luKCcgJyk7XG4gICAgfSxcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgZ2V0SXRlbURvbTogKGl0ZW0pID0+IHtcbiAgICAgICAgaWYgKCFpdGVtKSB7XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgIH1cbiAgICAgICAgLy8gY29uc29sZS5sb2coe2l0ZW19KTtcbiAgICAgICAgY29uc3QgeyB0YWdOYW1lID0gJ2RpdicsIGNoaWxkcmVuID0gW10gfSA9IGl0ZW0sIHByb3BzID0gX19yZXN0KGl0ZW0sIFtcInRhZ05hbWVcIiwgXCJjaGlsZHJlblwiXSk7XG4gICAgICAgIGNvbnN0IHN0clByb3BzID0gSlNYLmdldFByb3BzU3RyaW5nKHByb3BzKTtcbiAgICAgICAgY29uc3QgdGFnU3RhcnQgPSBgJHt0YWdOYW1lfSR7c3RyUHJvcHMgPyBgICR7c3RyUHJvcHN9YCA6ICcnfWA7XG4gICAgICAgIGlmIChVVElMUy5pc1NlbGZUYWcodGFnTmFtZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBgPCR7dGFnU3RhcnR9Lz5gO1xuICAgICAgICB9XG4gICAgICAgIGlmICghY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaXRlbS5jb21wb25lbnROYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGA8JHt0YWdTdGFydH0vPmA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYDwke3RhZ1N0YXJ0fT48LyR7dGFnTmFtZX0+YDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYDwke3RhZ1N0YXJ0fT4ke0pTWC5nZXREb21CeUFycmF5KGNoaWxkcmVuKX08LyR7dGFnTmFtZX0+YDtcbiAgICB9LFxuICAgIGdldERvbUJ5QXJyYXk6IChvYmogPSBbXSkgPT4ge1xuICAgICAgICByZXR1cm4gb2JqLm1hcCgoaXRlbSkgPT4gSlNYLmdldEl0ZW1Eb20oaXRlbSkpLmpvaW4oJycpO1xuICAgIH1cbn07XG5leHBvcnQgZGVmYXVsdCBKU1g7XG4iLCJjb25zdCBDT0xPUiA9IHtcbiAgICBnZXRSZ2JhQnlGaWxsOiAoeyBjb2xvciwgb3BhY2l0eSwgdmlzaWJsZSB9KSA9PiB7XG4gICAgICAgIC8vIOWmguaenOS4jeWPr+ingVxuICAgICAgICBpZiAoIXZpc2libGUgfHwgb3BhY2l0eSA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgciA9IHBhcnNlSW50KFN0cmluZyhjb2xvci5yICogMjU1KSk7XG4gICAgICAgIGNvbnN0IGcgPSBwYXJzZUludChTdHJpbmcoY29sb3IuZyAqIDI1NSkpO1xuICAgICAgICBjb25zdCBiID0gcGFyc2VJbnQoU3RyaW5nKGNvbG9yLmIgKiAyNTUpKTtcbiAgICAgICAgY29uc3QgYSA9IFN0cmluZyhvcGFjaXR5KS5pbmRleE9mKCcuJykgPiAtMSA/IG9wYWNpdHkudG9GaXhlZCgxKSA6IG9wYWNpdHk7XG4gICAgICAgIHJldHVybiBbciwgZywgYiwgYV07XG4gICAgfSxcbn07XG5leHBvcnQgZGVmYXVsdCBDT0xPUjtcbiIsImltcG9ydCBDT05GSUcgZnJvbSBcIi4uL0NPTkZJR1wiO1xuaW1wb3J0IG9iak1lcmdlIGZyb20gXCIuLi8uLi91aS91dGlscy9vYmpNZXJnZVwiO1xuY29uc3QgRUZGRUNUID0ge1xuICAgIGdldEluZm86IChub2RlLCBub2RlSW5mbykgPT4ge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IENPTkZJRy5nZXRJbmZvQnlJZChub2RlLmVmZmVjdFN0eWxlSWQpO1xuICAgICAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgICAgICAgcmV0dXJuIG5vZGVJbmZvO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvYmpNZXJnZShub2RlSW5mbywgcmVzdWx0KTtcbiAgICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgRUZGRUNUO1xuIiwiaW1wb3J0IENPTE9SIGZyb20gXCIuL0NPTE9SXCI7XG5pbXBvcnQgQ09ORklHIGZyb20gXCIuLi9DT05GSUdcIjtcbmltcG9ydCBTQUNTUyBmcm9tIFwiLi4vU0FDU1NcIjtcbmltcG9ydCBvYmpNZXJnZSBmcm9tIFwiLi4vLi4vdWkvdXRpbHMvb2JqTWVyZ2VcIjtcbmNvbnN0IEZJTEwgPSB7XG4gICAgZ2V0RmlsbDogKG5vZGUpID0+IHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBjb25zdCBbZmlyc3RGaWxsXSA9ICh0eXBlb2Ygbm9kZS5nZXRSYW5nZUZpbGxzID09PSAnZnVuY3Rpb24nID8gbm9kZS5nZXRSYW5nZUZpbGxzKDAsIDEpIDogbm9kZS5maWxscykgfHwgW107XG4gICAgICAgIC8vIOayoeacieiuvue9ruS7u+S9leminOiJsiwg55uu5YmN5LiN5pSv5oyB5riQ5Y+YXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgaWYgKCFmaXJzdEZpbGwgfHwgZmlyc3RGaWxsLnR5cGUgIT09ICdTT0xJRCcpIHtcbiAgICAgICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvbG9yID0gQ09MT1IuZ2V0UmdiYUJ5RmlsbChmaXJzdEZpbGwpO1xuICAgICAgICBpZiAoIWNvbG9yKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBub2RlLnR5cGUgPT09ICdURVhUJyA/IFNBQ1NTLmFkZENvbG9yKGNvbG9yKSA6IFNBQ1NTLmFkZEJnQ29sb3IoY29sb3IpO1xuICAgICAgICAvLyDmlofmnKzmmK/nlKjpopzoibLvvIzlhbblroPnkIbop6PkuLrog4zmma/oibJcbiAgICAgICAgcmV0dXJuIGNsYXNzTmFtZTtcbiAgICB9LFxuICAgIC8vIOiOt+WPluWhq+WFheS/oeaBr1xuICAgIGdldEluZm86IChub2RlLCBub2RlSW5mbyA9IHt9KSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKG5vZGUpO1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGNvbnN0IGlkID0gdHlwZW9mIG5vZGUuZ2V0UmFuZ2VGaWxsU3R5bGVJZCA9PT0gJ2Z1bmN0aW9uJyA/IG5vZGUuZ2V0UmFuZ2VGaWxsU3R5bGVJZCgwLCAxKSA6IG5vZGUuZmlsbFN0eWxlSWQ7XG4gICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICBjb25zdCB0b2tlbiA9IENPTkZJRy5nZXRJbmZvQnlJZChpZCwgbm9kZS50eXBlKSB8fCB7fTtcbiAgICAgICAgaWYgKHRva2VuKSB7XG4gICAgICAgICAgICByZXR1cm4gb2JqTWVyZ2Uobm9kZUluZm8sIHRva2VuKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjbGFzc0NvbG9yID0gRklMTC5nZXRGaWxsKG5vZGUpO1xuICAgICAgICByZXR1cm4gb2JqTWVyZ2Uobm9kZUluZm8sIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogW2NsYXNzQ29sb3JdXG4gICAgICAgIH0pO1xuICAgIH0sXG59O1xuZXhwb3J0IGRlZmF1bHQgRklMTDtcbiIsImltcG9ydCBTQUNTUyBmcm9tIFwiLi4vU0FDU1NcIjtcbmltcG9ydCBvYmpNZXJnZSBmcm9tIFwiLi4vLi4vdWkvdXRpbHMvb2JqTWVyZ2VcIjtcbi8vIGltcG9ydCBDT05GSUcgZnJvbSBcIi4vQ09ORklHXCI7XG5jb25zdCBGTEVYID0ge1xuICAgIGlzRmxleDogKG5vZGUpID0+IHtcbiAgICAgICAgLy8g6L+Z5Yeg5Liq5YWD57Sg6YO95LiN5YGaIEZsZXgg5Yik5pat5aSE55CGXG4gICAgICAgIGlmIChbJ1RFWFQnXS5pbmRleE9mKG5vZGUudHlwZSkgPiAtMSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAobm9kZSA9PT0gbnVsbCB8fCBub2RlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBub2RlLmxheW91dE1vZGUpICYmIChub2RlID09PSBudWxsIHx8IG5vZGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG5vZGUubGF5b3V0TW9kZSkgIT09IFwiTk9ORVwiO1xuICAgIH0sXG4gICAgZ2V0VGhpc0luZm86IChub2RlKSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKG5vZGUubmFtZSwgbm9kZS5sYXlvdXRNb2RlLCBGTEVYLmlzRmxleChub2RlKSk7XG4gICAgICAgIGlmICghRkxFWC5pc0ZsZXgobm9kZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgbGF5b3V0TW9kZSwgcHJpbWFyeUF4aXNBbGlnbkl0ZW1zLCBjb3VudGVyQXhpc0FsaWduSXRlbXMsIGNoaWxkcmVuID0gW10gfSA9IG5vZGU7XG4gICAgICAgIC8vIOayoeacieWtkOWFg+e0oCBmbGV4IOW4g+WxgOayoeacieaEj+S5iVxuICAgICAgICBpZiAoIWNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gW107XG4gICAgICAgIC8vIOWmguaenOaYr+e6teWQkeeahCDov5nph4zlj6/ku6XkuI3kvb/nlKggZmxleCDluIPlsYBcbiAgICAgICAgaWYgKGxheW91dE1vZGUgPT09ICdWRVJUSUNBTCcpIHtcbiAgICAgICAgICAgIC8vIOW9k+aYr+e6teWQkeW4g+WxgOW9k+aXtuWAmVxuICAgICAgICAgICAgY2xhc3NOYW1lLnB1c2goe1xuICAgICAgICAgICAgICAgIC8vIFwiTUlOXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgXCJDRU5URVJcIjogXCJ0YWNcIixcbiAgICAgICAgICAgICAgICBcIk1BWFwiOiBcInRhclwiLFxuICAgICAgICAgICAgICAgIC8vIFwiU1BBQ0VfQkVUV0VFTlwiOiBcImpjc2JcIixcbiAgICAgICAgICAgIH1bY291bnRlckF4aXNBbGlnbkl0ZW1zXSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjbGFzc05hbWUucHVzaCh7XG4gICAgICAgICAgICAgICAgLy8gXCJNSU5cIjogXCJcIixcbiAgICAgICAgICAgICAgICBcIkNFTlRFUlwiOiBcImpjY1wiLFxuICAgICAgICAgICAgICAgIFwiTUFYXCI6IFwiamNmZVwiLFxuICAgICAgICAgICAgICAgIFwiU1BBQ0VfQkVUV0VFTlwiOiBcImpjc2JcIixcbiAgICAgICAgICAgIH1bcHJpbWFyeUF4aXNBbGlnbkl0ZW1zXSB8fCBcIlwiKTtcbiAgICAgICAgICAgIGNsYXNzTmFtZS5wdXNoKHtcbiAgICAgICAgICAgICAgICAvL1wiTUlOXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgXCJDRU5URVJcIjogXCJhaWNcIixcbiAgICAgICAgICAgICAgICBcIk1BWFwiOiBcImFpZmVcIixcbiAgICAgICAgICAgIH1bY291bnRlckF4aXNBbGlnbkl0ZW1zXSB8fCBcIlwiKTtcbiAgICAgICAgICAgIGNsYXNzTmFtZS5wdXNoKCdkZicpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjbGFzc05hbWU7XG4gICAgfSxcbiAgICBnZXRJbmZvRnJvbVBhcmVudDogKG5vZGUpID0+IHtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gbm9kZS5wYXJlbnQ7XG4gICAgICAgIGlmICghcGFyZW50IHx8ICFGTEVYLmlzRmxleChwYXJlbnQpKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGNvbnN0IHsgbGF5b3V0TW9kZSwgcHJpbWFyeUF4aXNBbGlnbkl0ZW1zLCBpdGVtU3BhY2luZyB9ID0gcGFyZW50O1xuICAgICAgICAvLyDkuKTnq6/kuKTnq6/lr7npvZDooajnpLrkuI3pnIDopoHov5nkuptcbiAgICAgICAgaWYgKHByaW1hcnlBeGlzQWxpZ25JdGVtcyA9PT0gXCJTUEFDRV9CRVRXRUVOXCIpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IFtdO1xuICAgICAgICBjb25zdCBpZ25vcmVDbGFzc05hbWUgPSBbXTtcbiAgICAgICAgY29uc3QgeyBpZCA9ICcnIH0gPSBwYXJlbnQuY2hpbGRyZW4uZmlsdGVyKGMgPT4gYy52aXNpYmxlKS5wb3AoKSB8fCB7fTtcbiAgICAgICAgY29uc3QgaXNMYXN0Q2hpbGRyZW4gPSBpZCA9PT0gbm9kZS5pZDtcbiAgICAgICAgLy8g54i25YWD57Sg5piv57q15ZCR55qEZmxleCDluIPlsYDvvIzlm6DkuLrlv73nlaXmjonkuoYgZGZcbiAgICAgICAgLy8g6L+Z6YeM6K6p6Ieq5bex5pyJIGRiIOWunueOsOe6teWQkeW4g+WxgFxuICAgICAgICBpZiAobGF5b3V0TW9kZSA9PT0gJ1ZFUlRJQ0FMJykge1xuICAgICAgICAgICAgY2xhc3NOYW1lLnB1c2goJ2RiJyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8g5Li65a2Q5YWD57Sg5re75Yqg6Ze06LedXG4gICAgICAgIGlmIChpdGVtU3BhY2luZyA+IDAgJiYgIWlzTGFzdENoaWxkcmVuKSB7XG4gICAgICAgICAgICBjb25zdCBndXR0ZXJNYXAgPSB7XG4gICAgICAgICAgICAgICAgXCJWRVJUSUNBTFwiOiBcIm1iXCIsXG4gICAgICAgICAgICAgICAgXCJIT1JJWk9OVEFMXCI6IFwibXJcIlxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNsYXNzTmFtZS5wdXNoKFNBQ1NTLmFkZChndXR0ZXJNYXBbbGF5b3V0TW9kZV0sIGl0ZW1TcGFjaW5nKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5vZGUubGF5b3V0R3JvdyA9PT0gMSkge1xuICAgICAgICAgICAgY2xhc3NOYW1lLnB1c2goJ2YxJyk7XG4gICAgICAgICAgICBpZ25vcmVDbGFzc05hbWUucHVzaChgdyR7bm9kZS53aWR0aH1gKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY2xhc3NOYW1lLFxuICAgICAgICAgICAgaWdub3JlQ2xhc3NOYW1lOiBpZ25vcmVDbGFzc05hbWVcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIGdldEluZm86IChub2RlLCBub2RlSW5mbykgPT4ge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGNvbnN0IGJhc2VDbGFzc05hbWUgPSBGTEVYLmdldFRoaXNJbmZvKG5vZGUpIHx8IFtdO1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGNvbnN0IHsgY2xhc3NOYW1lOiBjMiA9IFtdLCBpZ25vcmVDbGFzc05hbWU6IGljMiA9IFtdIH0gPSBGTEVYLmdldEluZm9Gcm9tUGFyZW50KG5vZGUpIHx8IHt9O1xuICAgICAgICByZXR1cm4gb2JqTWVyZ2Uobm9kZUluZm8sIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogWy4uLmJhc2VDbGFzc05hbWUsIC4uLmMyXSxcbiAgICAgICAgICAgIF9pZ25vcmVDbGFzc05hbWU6IGljMlxuICAgICAgICB9KTtcbiAgICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgRkxFWDtcbiIsImltcG9ydCBDT05GSUcgZnJvbSBcIi4uL0NPTkZJR1wiO1xuaW1wb3J0IG9iak1lcmdlIGZyb20gXCIuLi8uLi91aS91dGlscy9vYmpNZXJnZVwiO1xuY29uc3QgR1JJRCA9IHtcbiAgICBnZXRJbmZvOiAobm9kZSwgbm9kZUluZm8pID0+IHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBjb25zdCByZXN1bHQgPSBDT05GSUcuZ2V0SW5mb0J5SWQobm9kZS5ncmlkU3R5bGVJZCk7XG4gICAgICAgIGlmICghcmVzdWx0KSB7XG4gICAgICAgICAgICByZXR1cm4gbm9kZUluZm87XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9iak1lcmdlKG5vZGVJbmZvLCByZXN1bHQpO1xuICAgIH1cbn07XG5leHBvcnQgZGVmYXVsdCBHUklEO1xuIiwiaW1wb3J0IFNBQ1NTIGZyb20gXCIuLi9TQUNTU1wiO1xuaW1wb3J0IG9iak1lcmdlIGZyb20gXCIuLi8uLi91aS91dGlscy9vYmpNZXJnZVwiO1xuY29uc3QgT1RIRVJTID0ge1xuICAgIGdlckJvcmRlclJhZGl1c0NsYXNzTmFtZTogKG5vZGUpID0+IHtcbiAgICAgICAgY29uc3QgdGwgPSBub2RlLnRvcExlZnRSYWRpdXMgfHwgMDtcbiAgICAgICAgY29uc3QgdHIgPSBub2RlLnRvcFJpZ2h0UmFkaXVzIHx8IDA7XG4gICAgICAgIGNvbnN0IGJyID0gbm9kZS5ib3R0b21SaWdodFJhZGl1cyB8fCAwO1xuICAgICAgICBjb25zdCBibCA9IG5vZGUuYm90dG9tTGVmdFJhZGl1cyB8fCAwO1xuICAgICAgICAvLyDlhajpg6jkuLogMFxuICAgICAgICBpZiAoKHRsICsgdHIgKyBiciArIGJsKSA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9XG4gICAgICAgIC8vIOWmguaenOWbm+S4quWAvOmDveebuOetiVxuICAgICAgICBpZiAoKHRsID09PSB0cikgJiYgKHRsID09PSBicikgJiYgKHRsID09PSBibCkpIHtcbiAgICAgICAgICAgIHJldHVybiBbU0FDU1MuYWRkKCdicicsIHRsKV07XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gW107XG4gICAgICAgIHRsICYmIGNsYXNzTmFtZS5wdXNoKFNBQ1NTLmFkZCgnYnRscicsIHRsKSk7XG4gICAgICAgIHRyICYmIGNsYXNzTmFtZS5wdXNoKFNBQ1NTLmFkZCgnYnRycicsIHRyKSk7XG4gICAgICAgIGJyICYmIGNsYXNzTmFtZS5wdXNoKFNBQ1NTLmFkZCgnYmJycicsIGJyKSk7XG4gICAgICAgIGJsICYmIGNsYXNzTmFtZS5wdXNoKFNBQ1NTLmFkZCgnYmJscicsIGJsKSk7XG4gICAgICAgIHJldHVybiBjbGFzc05hbWU7XG4gICAgfSxcbiAgICBnZXRQYWRkaW5nQ2xhc3NOYW1lOiAobm9kZSkgPT4ge1xuICAgICAgICAvLyDkvJrlv73nlaXmjokgMeWDj+e0oOeahCBwYWRkaW5nXG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICBub2RlLnBhZGRpbmdUb3AgPiAxID8gU0FDU1MuYWRkKCdwdCcsIG5vZGUucGFkZGluZ1RvcCkgOiAnJyxcbiAgICAgICAgICAgIG5vZGUucGFkZGluZ1JpZ2h0ID4gMSA/IFNBQ1NTLmFkZCgncHInLCBub2RlLnBhZGRpbmdSaWdodCkgOiAnJyxcbiAgICAgICAgICAgIG5vZGUucGFkZGluZ0JvdHRvbSA+IDEgPyBTQUNTUy5hZGQoJ3BiJywgbm9kZS5wYWRkaW5nQm90dG9tKSA6ICcnLFxuICAgICAgICAgICAgbm9kZS5wYWRkaW5nTGVmdCA+IDEgPyBTQUNTUy5hZGQoJ3BsJywgbm9kZS5wYWRkaW5nTGVmdCkgOiAnJyxcbiAgICAgICAgXTtcbiAgICB9LFxuICAgIGdldEluZm86IChub2RlLCBub2RlSW5mbykgPT4ge1xuICAgICAgICBjb25zdCBwYWRkaW5nID0gT1RIRVJTLmdldFBhZGRpbmdDbGFzc05hbWUobm9kZSk7XG4gICAgICAgIGNvbnN0IHJhZGl1cyA9IE9USEVSUy5nZXJCb3JkZXJSYWRpdXNDbGFzc05hbWUobm9kZSk7XG4gICAgICAgIHJldHVybiBvYmpNZXJnZShub2RlSW5mbywge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiBbLi4ucGFkZGluZywgLi4ucmFkaXVzXVxuICAgICAgICB9KTtcbiAgICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgT1RIRVJTO1xuIiwiaW1wb3J0IENPTkZJRyBmcm9tIFwiLi4vQ09ORklHXCI7XG5pbXBvcnQgb2JqTWVyZ2UgZnJvbSBcIi4uLy4uL3VpL3V0aWxzL29iak1lcmdlXCI7XG5jb25zdCBTVFJPS0UgPSB7XG4gICAgLy8g5paH5pys57uE5Lu2XG4gICAgZ2V0SW5mbzogKG5vZGUsIG5vZGVJbmZvKSA9PiB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gQ09ORklHLmdldEluZm9CeUlkKG5vZGUuc3Ryb2tlU3R5bGVJZCk7XG4gICAgICAgIGlmICghcmVzdWx0KSB7XG4gICAgICAgICAgICByZXR1cm4gbm9kZUluZm87XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9iak1lcmdlKG5vZGVJbmZvLCByZXN1bHQpO1xuICAgIH0sXG59O1xuZXhwb3J0IGRlZmF1bHQgU1RST0tFO1xuIiwiaW1wb3J0IENPTkZJRyBmcm9tIFwiLi4vQ09ORklHXCI7XG5pbXBvcnQgU0FDU1MgZnJvbSBcIi4uL1NBQ1NTXCI7XG5pbXBvcnQgb2JqTWVyZ2UgZnJvbSBcIi4uLy4uL3VpL3V0aWxzL29iak1lcmdlXCI7XG4vLyBAdHMtaWdub3JlXG5jb25zdCBURVhUID0ge1xuICAgIHVuaXRNYXA6IHtcbiAgICAgICAgJ1BFUkNFTlQnOiAnJSdcbiAgICAgICAgLy8gXCJQSVhFTFNcIjpcIlwiXG4gICAgfSxcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgZ2V0Rm9udE5hbWVDbGFzc0J5U3R5bGU6IChzdHlsZSkgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIHN0eWxlICE9PSAnc3RyaW5nJyB8fCAhc3R5bGUpIHtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBmb250TWFwID0ge1xuICAgICAgICAgICAgXCJVTFRSQUxJR0hUXCI6IFwiZncxMDBcIixcbiAgICAgICAgICAgIFwiVEhJTlwiOiAnZncyMDAnLFxuICAgICAgICAgICAgXCJMSUdIVFwiOiBcImZ3MzAwXCIsXG4gICAgICAgICAgICBcIlJFR1VMQVJcIjogXCJcIixcbiAgICAgICAgICAgIFwiTUVESVVNXCI6IFwiZnc1MDBcIixcbiAgICAgICAgICAgIFwiU0VNSUJPTERcIjogXCJmdzYwMFwiLFxuICAgICAgICAgICAgXCJCT0xEXCI6IFwiZnc3MDBcIixcbiAgICAgICAgICAgIFwiQkxBQ0tcIjogXCJmdzkwMFwiLFxuICAgICAgICAgICAgXCJJVEFMSUNcIjogXCJmc2lcIixcbiAgICAgICAgICAgIFwiT0JMSVFVRVwiOiBcImZzaVwiXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IHN0eWxlLnNwbGl0KCcgJykubWFwKChpdGVtKSA9PiBmb250TWFwW2l0ZW0udG9VcHBlckNhc2UoKV0gfHwgJycpO1xuICAgICAgICByZXR1cm4gY2xhc3NOYW1lLmZpbHRlcihpdGVtID0+IGl0ZW0pLmpvaW4oJyAnKTtcbiAgICB9LFxuICAgIGdldFByb3BCeU5vZGU6IChub2RlLCBuYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IG5hbWVNYXAgPSB7XG4gICAgICAgICAgICAndGV4dENhc2UnOiAnZ2V0UmFuZ2VUZXh0Q2FzZScsXG4gICAgICAgICAgICAnbGluZUhlaWdodCc6ICdnZXRSYW5nZUxpbmVIZWlnaHQnLFxuICAgICAgICAgICAgJ2xldHRlclNwYWNpbmcnOiAnZ2V0UmFuZ2VMZXR0ZXJTcGFjaW5nJyxcbiAgICAgICAgICAgICdmb250U2l6ZSc6ICdnZXRSYW5nZUZvbnRTaXplJyxcbiAgICAgICAgICAgICd0ZXh0RGVjb3JhdGlvbic6ICdnZXRSYW5nZVRleHREZWNvcmF0aW9uJyxcbiAgICAgICAgICAgICdmb250TmFtZSc6ICdnZXRSYW5nZUZvbnROYW1lJyxcbiAgICAgICAgICAgICdmaWxscyc6ICdnZXRSYW5nZUZpbGxzJyxcbiAgICAgICAgICAgICd0ZXh0U3R5bGVJZCc6ICdnZXRSYW5nZVRleHRTdHlsZUlkJ1xuICAgICAgICB9O1xuICAgICAgICBpZiAodHlwZW9mIG5vZGVbbmFtZV0gPT09ICdzeW1ib2wnICYmIG5hbWVNYXBbbmFtZV0gJiYgdHlwZW9mIG5vZGVbbmFtZU1hcFtuYW1lXV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHJldHVybiBub2RlW25hbWVNYXBbbmFtZV1dKDAsIDEpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBub2RlW25hbWVdO1xuICAgIH0sXG4gICAgZ2V0QUNTU1NJbmZvOiAobm9kZSkgPT4ge1xuICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBbXTtcbiAgICAgICAgLy8g5paH5a2X5aSn5bCPXG4gICAgICAgIGNvbnN0IGZvbnRTaXplID0gVEVYVC5nZXRQcm9wQnlOb2RlKG5vZGUsICdmb250U2l6ZScpO1xuICAgICAgICBpZiAoZm9udFNpemUgPiAxKSB7XG4gICAgICAgICAgICBjbGFzc05hbWUucHVzaChTQUNTUy5hZGQoJ2ZzJywgZm9udFNpemUpKTtcbiAgICAgICAgfVxuICAgICAgICAvLyDooYzpq5hcbiAgICAgICAgY29uc3QgbGluZUhlaWdodCA9IFRFWFQuZ2V0UHJvcEJ5Tm9kZShub2RlLCAnbGluZUhlaWdodCcpO1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGlmIChsaW5lSGVpZ2h0ID09PSBudWxsIHx8IGxpbmVIZWlnaHQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGxpbmVIZWlnaHQudmFsdWUpIHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIGNvbnN0IHsgdmFsdWUsIHVuaXQgfSA9IGxpbmVIZWlnaHQ7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBjbGFzc05hbWUucHVzaChTQUNTUy5hZGQoJ2xoJywgdmFsdWUsIFRFWFQudW5pdE1hcFt1bml0XSkpO1xuICAgICAgICB9XG4gICAgICAgIC8vIOWtl+mXtOi3nVxuICAgICAgICBjb25zdCBsZXR0ZXJTcGFjaW5nID0gVEVYVC5nZXRQcm9wQnlOb2RlKG5vZGUsICdsZXR0ZXJTcGFjaW5nJyk7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgaWYgKGxldHRlclNwYWNpbmcgPT09IG51bGwgfHwgbGV0dGVyU3BhY2luZyA9PT0gdm9pZCAwID8gdm9pZCAwIDogbGV0dGVyU3BhY2luZy52YWx1ZSkge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgY29uc3QgeyB2YWx1ZSwgdW5pdCB9ID0gbGV0dGVyU3BhY2luZztcbiAgICAgICAgICAgIGNsYXNzTmFtZS5wdXNoKFNBQ1NTLmFkZCgnbHMnLCB2YWx1ZSwgVEVYVC51bml0TWFwW3VuaXRdKSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZm9udE5hbWUgPSBURVhULmdldFByb3BCeU5vZGUobm9kZSwgJ2ZvbnROYW1lJyk7XG4gICAgICAgIC8vIGZvbnQtd2VpZ2h0IGZvbnQtc3R5bGVcbiAgICAgICAgY29uc3QgZm5DbGFzcyA9IFRFWFQuZ2V0Rm9udE5hbWVDbGFzc0J5U3R5bGUoZm9udE5hbWUuc3R5bGUpO1xuICAgICAgICBmbkNsYXNzICYmIGNsYXNzTmFtZS5wdXNoKGZuQ2xhc3MpO1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGlmIChmb250TmFtZSA9PT0gbnVsbCB8fCBmb250TmFtZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogZm9udE5hbWUuZmFtaWx5KSB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBjbGFzc05hbWUucHVzaChTQUNTUy5hZGRGb250RmFtaWx5KGZvbnROYW1lLmZhbWlseSkpO1xuICAgICAgICB9XG4gICAgICAgIC8vIHRleHQtYWxpZ25cbiAgICAgICAgY29uc3QgdGFDbGFzcyA9IHtcbiAgICAgICAgICAgIFwiTEVGVFwiOiAnJyxcbiAgICAgICAgICAgIFwiQ0VOVEVSXCI6ICd0YWMnLFxuICAgICAgICAgICAgXCJSSUdIVFwiOiAndGFyJyxcbiAgICAgICAgICAgIFwiSlVTVElGSUVEXCI6ICd0YWonLFxuICAgICAgICB9W25vZGUudGV4dEFsaWduSG9yaXpvbnRhbF07XG4gICAgICAgIHRhQ2xhc3MgJiYgY2xhc3NOYW1lLnB1c2godGFDbGFzcyk7XG4gICAgICAgIC8vIHZlcnRpY2FsLWFsaWduXG4gICAgICAgIGNvbnN0IHZhQ2xhc3MgPSB7XG4gICAgICAgICAgICBcIlRPUFwiOiAnJyxcbiAgICAgICAgICAgIFwiQ0VOVEVSXCI6ICd2YW0nLFxuICAgICAgICAgICAgXCJCT1RUT01cIjogJ3ZhYicsXG4gICAgICAgIH1bbm9kZS50ZXh0QWxpZ25WZXJ0aWNhbF07XG4gICAgICAgIHZhQ2xhc3MgJiYgY2xhc3NOYW1lLnB1c2godmFDbGFzcyk7XG4gICAgICAgIGNvbnN0IHRleHRDYXNlID0gVEVYVC5nZXRQcm9wQnlOb2RlKG5vZGUsICd0ZXh0Q2FzZScpO1xuICAgICAgICAvLyB0dFxuICAgICAgICBjb25zdCB0dENsYXNzID0ge1xuICAgICAgICAgICAgXCJPUklHSU5BTFwiOiAnJyxcbiAgICAgICAgICAgIFwiVVBQRVJcIjogJ3R0dScsXG4gICAgICAgICAgICBcIkxPV0VSXCI6ICd0dGwnLFxuICAgICAgICAgICAgXCJUSVRMRVwiOiAndHRjJyxcbiAgICAgICAgfVt0ZXh0Q2FzZV07XG4gICAgICAgIHR0Q2xhc3MgJiYgY2xhc3NOYW1lLnB1c2godHRDbGFzcyk7XG4gICAgICAgIGNvbnN0IHRleHREZWNvcmF0aW9uID0gVEVYVC5nZXRQcm9wQnlOb2RlKG5vZGUsICd0ZXh0RGVjb3JhdGlvbicpO1xuICAgICAgICAvLyB0ZFxuICAgICAgICBjb25zdCB0ZENsYXNzID0ge1xuICAgICAgICAgICAgXCJOT05FXCI6IFwiXCIsXG4gICAgICAgICAgICBcIlVOREVSTElORVwiOiAndGR1JyxcbiAgICAgICAgICAgIFwiU1RSSUtFVEhST1VHSFwiOiAndGRsJ1xuICAgICAgICB9W3RleHREZWNvcmF0aW9uXTtcbiAgICAgICAgdGRDbGFzcyAmJiBjbGFzc05hbWUucHVzaCh0ZENsYXNzKTtcbiAgICAgICAgY29uc3Qgc3RyQ2xhc3NOYW1lID0gY2xhc3NOYW1lLmpvaW4oJyAnKTtcbiAgICAgICAgY29uc3QgaXNTdHJvbmcgPSBbJ2Z3NTAwJywgJ2Z3NjAwJywgJ2Z3NzAwJywgJ2Z3ODAwJywgJ2Z3OTAwJ10uZmluZEluZGV4KChpdGVtKSA9PiBzdHJDbGFzc05hbWUuaW5kZXhPZihpdGVtKSA+IC0xKSA+IC0xO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY2xhc3NOYW1lLFxuICAgICAgICAgICAgdGFnTmFtZTogaXNTdHJvbmcgPyAnc3Ryb25nJyA6ICdzcGFuJ1xuICAgICAgICB9O1xuICAgIH0sXG4gICAgZ2V0VGV4dENoaWxkcmVuOiAobm9kZSkgPT4ge1xuICAgICAgICBjb25zdCB7IGNoYXJhY3RlcnMgPSAnJyB9ID0gbm9kZTtcbiAgICAgICAgY29uc3QgbGVnYWxQID0gY2hhcmFjdGVycy5zcGxpdCgnXFxuJykuZmlsdGVyKGl0ZW0gPT4gaXRlbS50cmltKCkpO1xuICAgICAgICAvLyDmnInlm57ovabooajnpLrlpJrmrrXokL1cbiAgICAgICAgaWYgKGxlZ2FsUC5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICBjb25zdCBtYkNsYXNzID0gbm9kZS5wYXJhZ3JhcGhTcGFjaW5nID4gMCA/IFNBQ1NTLmFkZCgnbWInLCBub2RlLnBhcmFncmFwaFNwYWNpbmcpIDogJyc7XG4gICAgICAgICAgICBjb25zdCBwcyA9IGxlZ2FsUC5tYXAoKGl0ZW0sIGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlzTGFzdCA9IGtleSA9PT0gbGVnYWxQLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgdGFnTmFtZTogJ3AnLFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IGlzTGFzdCA/ICcnIDogbWJDbGFzcyxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtpdGVtXVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBwcztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW2NoYXJhY3RlcnNdO1xuICAgIH0sXG4gICAgLy8g5paH5pys57uE5Lu2XG4gICAgZ2V0SW5mbzogKG5vZGUsIG5vZGVJbmZvID0ge30pID0+IHtcbiAgICAgICAgaWYgKG5vZGUudHlwZSAhPT0gJ1RFWFQnKSB7XG4gICAgICAgICAgICByZXR1cm4gbm9kZUluZm87XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaWQgPSBURVhULmdldFByb3BCeU5vZGUobm9kZSwgJ3RleHRTdHlsZUlkJyk7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgY29uc3QgZ2V0SW5mbyA9IENPTkZJRy5nZXRJbmZvQnlJZChpZCk7XG4gICAgICAgIGlmIChnZXRJbmZvKSB7XG4gICAgICAgICAgICByZXR1cm4gb2JqTWVyZ2Uobm9kZUluZm8sIGdldEluZm8pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFjc3NJbmZvID0gVEVYVC5nZXRBQ1NTU0luZm8obm9kZSk7XG4gICAgICAgIHJldHVybiBvYmpNZXJnZShub2RlSW5mbywgYWNzc0luZm8pO1xuICAgIH0sXG59O1xuZXhwb3J0IGRlZmF1bHQgVEVYVDtcbiIsImltcG9ydCBOT0RFIGZyb20gXCIuL18vTk9ERVwiO1xuaW1wb3J0IENPTkZJRyBmcm9tIFwiLi9fL0NPTkZJR1wiO1xuaW1wb3J0IFNBQ1NTIGZyb20gXCIuL18vU0FDU1NcIjtcbmltcG9ydCBET00gZnJvbSBcIi4vXy9yZW5kZXIvRE9NXCI7XG5pbXBvcnQgdHJ5T2xkQ29uZmlnIGZyb20gXCIuL3VpL3V0aWxzL3RyeU9sZENvbmZpZy5qc1wiO1xuY29uc3QgQVBJID0ge1xuICAgIC8qKlxuICAgICAqIOm7mOiupOaYvuekuiBob21lXG4gICAgICovXG4gICAgdGFiSW5kZXg6IDAsXG4gICAgLyoqXG4gICAgICog6I635Y+W55So5oi36YCJ5Lit55qE5Zu+5bGCXG4gICAgICovXG4gICAgZ2V0U2VsZWN0aW9uOiAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbiA9IGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbjtcbiAgICAgICAgLy8gY29uc29sZS5sb2coc2VsZWN0aW9uKTtcbiAgICAgICAgaWYgKCFzZWxlY3Rpb24ubGVuZ3RoKSB7XG4gICAgICAgICAgICAvLyDmsqHmnInpgInmi6nku7vkvZXlhYPntKBcbiAgICAgICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHsgbm9TZWxlY3Rpb246IHRydWUgfSk7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2VsZWN0aW9uWzBdO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICog5b2TIFRhYiDliIfmjaLnmoTml7blgJnkvJrlh7rlj5Hov5nkuKrmlrnms5VcbiAgICAgKiBAcGFyYW0gaW5kZXhcbiAgICAgKi9cbiAgICBvblRhYkNoYW5nZTogKGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGJlZm9yZUluZGV4ID0gQVBJLnRhYkluZGV4O1xuICAgICAgICBBUEkudGFiSW5kZXggPSBpbmRleDtcbiAgICAgICAgLy8g5aaC5p6c5Y+q5piv5ZyoIEhUTUwg5ZKMIEFDU1Mg5LmL5YmN5YiH5o2iXG4gICAgICAgIGlmICgoYmVmb3JlSW5kZXggPT09IDAgfHwgYmVmb3JlSW5kZXggPT09IDEpICYmIChpbmRleCA9PT0gMCB8fCBpbmRleCA9PT0gMSkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBhY3Rpb25NYXAgPSBbJ3J1bkhvbWUnLCAncnVuSG9tZScsICdydW5Ub2tlbicsICdydW5Db25maWcnXTtcbiAgICAgICAgY29uc3QgYWN0aW9uID0gYWN0aW9uTWFwW2luZGV4XTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ29uVGFiQ2hhbmdlJywgYWN0aW9uKTtcbiAgICAgICAgYWN0aW9uICYmIEFQSVthY3Rpb25dKCk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiDop6blj5FcbiAgICAgKi9cbiAgICBydW46ICgpID0+IHtcbiAgICAgICAgY29uc3QgYWN0aW9uTWFwID0gWydydW5Ib21lJywgJ3J1bkhvbWUnLCAncnVuVG9rZW4nLCAnJ107XG4gICAgICAgIGNvbnN0IGFjdGlvbiA9IGFjdGlvbk1hcFtBUEkudGFiSW5kZXhdO1xuICAgICAgICBpZiAoIWFjdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIEFQSVthY3Rpb25dKCk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiDmmL7npLrnrKzkuIDlsY9cbiAgICAgKi9cbiAgICBydW5Ib21lOiAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbiA9IEFQSS5nZXRTZWxlY3Rpb24oKTtcbiAgICAgICAgaWYgKCFzZWxlY3Rpb24pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBTQUNTUy5pbml0KCk7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgY29uc3QgSW5mbyA9IE5PREUuZ2V0Tm9kZUluZm8oc2VsZWN0aW9uKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coSW5mbyk7XG4gICAgICAgIGNvbnN0IGlzSlNYID0gQ09ORklHLmlzSlNYKCk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgIGdldEhUTUw6IERPTS5yZW5kZXIoSW5mbywgaXNKU1gpLFxuICAgICAgICAgICAgICAgIGdldENTUzogU0FDU1MuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICAgICAgaXNKU1gsXG4gICAgICAgICAgICAgICAgbm9TZWxlY3Rpb246IGZhbHNlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSwgMTYpO1xuICAgIH0sXG4gICAgcnVuQ29uZmlnOiAoKSA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgIGdldENvbmZpZzogQ09ORklHLmdldEN1cnJlbnQoKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIDEwKTtcbiAgICB9LFxuICAgIHJ1blRva2VuOiAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbiA9IEFQSS5nZXRTZWxlY3Rpb24oKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZShDT05GSUcuZ2V0U2VsZWN0aW9uVG9rZW5zKHNlbGVjdGlvbikpO1xuICAgICAgICB9LCAxNik7XG4gICAgfSxcbiAgICBvbm1lc3NhZ2U6IChtc2cgPSB7fSkgPT4ge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGNvbnN0IHsgdHlwZSA9IG51bGwsIHZhbHVlID0gbnVsbCB9ID0gbXNnO1xuICAgICAgICBpZiAodHlwZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIOWwneivleajgOa1i+aXp+S7o+eggVxuICAgICAgICBpZiAodHlwZSA9PT0gJ3Rlc3RPbGRDb25maWcnKSB7XG4gICAgICAgICAgICB0cnlPbGRDb25maWcoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBbbmFtZSwgYWN0aW9uXSA9IHR5cGUuc3BsaXQoJy4nKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ0FQSSBvbm1lc3NhZ2UnLCBuYW1lLCBhY3Rpb24sIHZhbHVlKTtcbiAgICAgICAgaWYgKG5hbWUgPT09ICdBUEknICYmIChhY3Rpb24gaW4gQVBJKSkge1xuICAgICAgICAgICAgQVBJW2FjdGlvbl0odmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChuYW1lID09PSAnQ09ORklHJyAmJiAoYWN0aW9uIGluIENPTkZJRykpIHtcbiAgICAgICAgICAgIENPTkZJR1thY3Rpb25dKHZhbHVlKTtcbiAgICAgICAgICAgIC8vIOS4uuS6huinpuWPkemHjeaWsOa4suafk1xuICAgICAgICAgICAgaWYgKGFjdGlvbiA9PT0gJ2NoYW5nZUpTWCcpIHtcbiAgICAgICAgICAgICAgICBBUEkucnVuSG9tZSgpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIOS4uuS6huinpuWPkemHjeaWsOa4suafk1xuICAgICAgICAgICAgaWYgKGFjdGlvbiA9PT0gJ2FkZFRva2VuJykge1xuICAgICAgICAgICAgICAgIEFQSS5ydW5Ub2tlbigpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEFQSS5ydW5Db25maWcoKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG4vLyBUaGlzIHBsdWdpbiB3aWxsIG9wZW4gYSB3aW5kb3cgdG8gcHJvbXB0IHRoZSB1c2VyIHRvIGVudGVyIGEgbnVtYmVyLCBhbmRcbi8vIGl0IHdpbGwgdGhlbiBjcmVhdGUgdGhhdCBtYW55IHJlY3RhbmdsZXMgb24gdGhlIHNjcmVlbi5cbi8vIFRoaXMgZmlsZSBob2xkcyB0aGUgbWFpbiBjb2RlIGZvciB0aGUgcGx1Z2lucy4gSXQgaGFzIGFjY2VzcyB0byB0aGUgKmRvY3VtZW50Ki5cbi8vIFlvdSBjYW4gYWNjZXNzIGJyb3dzZXIgQVBJcyBpbiB0aGUgPHNjcmlwdD4gdGFnIGluc2lkZSBcInVpLmh0bWxcIiB3aGljaCBoYXMgYVxuLy8gZnVsbCBicm93c2VyIGVudmlyb25tZW50IChzZWUgZG9jdW1lbnRhdGlvbikuXG5DT05GSUcuaW5pdCgpLnRoZW4oKCkgPT4ge1xuICAgIC8vIFRoaXMgc2hvd3MgdGhlIEhUTUwgcGFnZSBpbiBcInVpLmh0bWxcIi5cbiAgICBmaWdtYS5zaG93VUkoX19odG1sX18sIHsgd2lkdGg6IDQwMCwgaGVpZ2h0OiA2MDAgfSk7XG4gICAgQVBJLnJ1bigpO1xuICAgIGZpZ21hLm9uKFwic2VsZWN0aW9uY2hhbmdlXCIsICgpID0+IHtcbiAgICAgICAgQVBJLnJ1bigpO1xuICAgIH0pO1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBmaWdtYS51aS5vbm1lc3NhZ2UgPSBBUEkub25tZXNzYWdlO1xufSk7XG4iLCJmdW5jdGlvbiBvYmpNZXJnZShhID0ge30sIGIpIHtcbiAgICBjb25zdCByZXN1bHQgPSBhO1xuICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGIpKSB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSBhW2tleV07XG4gICAgICAgIGlmICghaXRlbSB8fCAhdmFsdWUpIHtcbiAgICAgICAgICAgIHJlc3VsdFtrZXldID0gdmFsdWU7XG4gICAgICAgIH0gZWxzZSBpZiAoKGl0ZW0gaW5zdGFuY2VvZiBBcnJheSkgJiYgKHZhbHVlIGluc3RhbmNlb2YgQXJyYXkpKSB7XG4gICAgICAgICAgICByZXN1bHRba2V5XSA9IFsuLi5pdGVtLCAuLi52YWx1ZV07XG4gICAgICAgIH0gZWxzZSBpZiAoaXRlbSAmJiBpdGVtIGluc3RhbmNlb2YgT2JqZWN0KSB7XG4gICAgICAgICAgICByZXN1bHRba2V5XSA9IG9iak1lcmdlKGl0ZW0sIHZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc3VsdFtrZXldID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG9iak1lcmdlOyIsImNvbnN0IHRyeU9sZENvbmZpZyA9ICgpID0+IHtcbiAgICAvLyDlsJ3or5Xojrflj5ZcbiAgICBmaWdtYS5jbGllbnRTdG9yYWdlLmdldEFzeW5jKFwiU0FDU1NcIikudGhlbigocmV0ID0ge30pID0+IHtcbiAgICAgICAgY29uc3Qge3Byb2plY3RzfSA9IHJldDtcbiAgICAgICAgaWYgKHByb2plY3RzICYmIHByb2plY3RzLmxlbmd0aCkge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU0FDU1NcIiwgcmV0KTtcbiAgICAgICAgICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICAgICAgICAgIGdldE9sZENvbmZpZzogcmV0XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LCAxNik7XG4gICAgICAgIH1cbiAgICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRyeU9sZENvbmZpZzsiXSwic291cmNlUm9vdCI6IiJ9