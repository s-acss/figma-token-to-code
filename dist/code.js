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
      return null;
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
          _renderHeight: false,
          tagName: 'div',
          children: true
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
    return matchToken;
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

    if (!selection) {
      return;
    }

    setTimeout(function () {
      figma.ui.postMessage({
        selectionTokens: _CONFIG__WEBPACK_IMPORTED_MODULE_1__["default"].getSelectionTokens(selection),
        noSelection: false
      });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL18vQ09NUE9ORU5ULnRzIiwid2VicGFjazovLy8uL3NyYy9fL0NPTkZJRy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvXy9OT0RFLnRzIiwid2VicGFjazovLy8uL3NyYy9fL1NBQ1NTLnRzIiwid2VicGFjazovLy8uL3NyYy9fL1VUSUxTLnRzIiwid2VicGFjazovLy8uL3NyYy9fL3JlbmRlci9ET00udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL18vcmVuZGVyL0hUTUwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL18vcmVuZGVyL0pTWC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvXy90b2tlbi9DT0xPUi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvXy90b2tlbi9FRkZFQ1QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL18vdG9rZW4vRklMTC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvXy90b2tlbi9GTEVYLnRzIiwid2VicGFjazovLy8uL3NyYy9fL3Rva2VuL0dSSUQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL18vdG9rZW4vT1RIRVJTLnRzIiwid2VicGFjazovLy8uL3NyYy9fL3Rva2VuL1NUUk9LRS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvXy90b2tlbi9URVhULnRzIiwid2VicGFjazovLy8uL3NyYy9jb2RlLnRzIiwid2VicGFjazovLy8uL3NyYy91aS91dGlscy9vYmpNZXJnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvdXRpbHMvdHJ5T2xkQ29uZmlnLmpzIl0sIm5hbWVzIjpbIkNPTVBPTkVOVCIsImlzQ29tcG9uZW50Iiwibm9kZSIsInR5cGUiLCJnZXRNYWluQ29tcG9uZW50IiwibWFpbkNvbXBvbmVudCIsImdldENvbXBvbmVudElkIiwia2V5Iiwic3RyaW5nVG9Db21wb25lbnROYW1lIiwibmFtZSIsInRyaW1OYW1lIiwidHJpbSIsInN0ck5hbWUiLCJyZXBsYWNlIiwiZmlyc3RDaGFyIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJsZW5ndGgiLCJzbGljZSIsImdldEluZm8iLCJub2RlSW5mbyIsImlkIiwibWF0Y2hUb2tlbiIsIkNPTkZJRyIsImdldFRva2VuIiwiREVGQVVMVCIsIm9iak1lcmdlIiwiX19yZXN0IiwicyIsImUiLCJ0IiwicCIsIk9iamVjdCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImluZGV4T2YiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJpIiwicHJvcGVydHlJc0VudW1lcmFibGUiLCJDT05GSUdfREVGQVVMVCIsImlzSlNYIiwiX2lnbm9yZUNsYXNzTmFtZSIsInRva2VucyIsIlZFUlNJT04iLCJzdG9yZSIsImNoYW5nZUpTWCIsInZhbHVlIiwiZ2V0Q3VycmVudCIsImZpZ21hIiwiY2xpZW50U3RvcmFnZSIsInNldEFzeW5jIiwiZWRpdCIsImRhdGEiLCJ1aSIsInBvc3RNZXNzYWdlIiwiYWxlcnRNc2ciLCJhZGRUb2tlbiIsIl9hIiwicmVzdCIsIm5ld1N0b3JlIiwiYXNzaWduIiwiaW5pdCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiZ2V0QXN5bmMiLCJ0aGVuIiwicmV0Iiwia2V5cyIsImNhdGNoIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5IiwiZ2V0SW5mb0J5SWQiLCJnZXRTdHlsZUJ5SWQiLCJ0b2tlbkNvbmZpZyIsImdldFNlbGVjdGlvblRva2VucyIsInNlbGVjdGlvbiIsImZpbmRUb2tlbiIsImNsYXNzTmFtZSIsIl9yZW5kZXJXaWR0aCIsIl9yZW5kZXJIZWlnaHQiLCJ0YWdOYW1lIiwiY2hpbGRyZW4iLCJfdG9rZW5OYW1lIiwiX3Rva2VuVHlwZSIsImZpbGxTdHlsZUlkIiwidGV4dFN0eWxlSWQiLCJzdHJva2VTdHlsZUlkIiwiZWZmZWN0U3R5bGVJZCIsImdyaWRTdHlsZUlkIiwiZm9yRWFjaCIsIml0ZW0iLCJzdHlsZUtleSIsImV4dHJhVG9rZW4iLCJnZXRBbGxUb2tlbnMiLCJyb290IiwiY29tcG9uZW50cyIsImZpbmRBbGwiLCJjIiwicGFyZW50IiwidG9rZW4iLCJhZGRDb25maWciLCJnZXRMb2NhbFBhaW50U3R5bGVzIiwiZ2V0TG9jYWxUZXh0U3R5bGVzIiwiZ2V0TG9jYWxFZmZlY3RTdHlsZXMiLCJnZXRMb2NhbEdyaWRTdHlsZXMiLCJnb3RBbGxUb2tlbnMiLCJpZ25vcmVDbGFzc05hbWUiLCJOT0RFIiwiaXNTdHJ1Y3ROb2RlIiwic3RhcnRzV2l0aCIsInllc1R5cGVzIiwiZ290Tm8iLCJmaW5kIiwidmlzaWJsZSIsImlzUmVuZGVyQ2hpbGRyZW4iLCJnZXROb2RlSW5mbyIsIkZJTEwiLCJURVhUIiwiU1RST0tFIiwiR1JJRCIsIkVGRkVDVCIsIk9USEVSUyIsIkZMRVgiLCJTdHJpbmciLCJwdXNoIiwiU0FDU1MiLCJhZGQiLCJwYXJzZUludCIsIndpZHRoIiwiaGVpZ2h0IiwidGV4dHMiLCJnZXRUZXh0Q2hpbGRyZW4iLCJnZXROb2Rlc0luZm8iLCJVVElMUyIsImNsZWFyQ2xhc3NOYW1lIiwiQXJyYXkiLCJjaGlsZHJlbkluZm8iLCJzb3J0Iiwibm9kZXMiLCJhIiwiYiIsImFZIiwieSIsImJZIiwieCIsImluZm8iLCJzb3J0Tm9kZXMiLCJsZW4iLCJuYW1lTWFwIiwiZ2V0Q2xhc3NTZWxlY3RvckJ5TmFtZSIsImdldFN0cmluZyIsInJlc3VsdCIsIm1hcCIsImpvaW4iLCJ1bml0IiwicHJvcE5hbWUiLCJ1c2VWYWx1ZSIsIk51bWJlciIsInBhcnNlRmxvYXQiLCJ0b0ZpeGVkIiwiY2xhc3NVbml0IiwiYWRkRm9udEZhbWlseSIsInZhbHVlT2siLCJ0b0xvd2VyQ2FzZSIsImFkZENvbG9yIiwicmdiYSIsImFkZEJnQ29sb3IiLCJpc0Jsb2NrIiwiYmxvY2tUYWciLCJpc1NlbGZUYWciLCJzZWxmVGFnIiwiRE9NIiwicmVuZGVyIiwib2JqIiwiSlNYIiwiZ2V0SXRlbURvbSIsIkhUTUwiLCJnZXRQcm9wc1N0cmluZ0J5T2JqZWN0IiwicHJvcHMiLCJhcnJQcm9wcyIsImVudHJpZXMiLCJzdHJWYWx1ZSIsImtleU5hbWUiLCJfdGFnTmFtZSIsInN0clByb3BzIiwidGFnU3RhcnQiLCJnZXREb21CeUFycmF5IiwiZ2V0UHJvcHNTdHJpbmciLCJjb21wb25lbnROYW1lIiwiQ09MT1IiLCJnZXRSZ2JhQnlGaWxsIiwiY29sb3IiLCJvcGFjaXR5IiwiciIsImciLCJnZXRGaWxsIiwiZ2V0UmFuZ2VGaWxscyIsImZpbGxzIiwiZmlyc3RGaWxsIiwiZ2V0UmFuZ2VGaWxsU3R5bGVJZCIsImNsYXNzQ29sb3IiLCJpc0ZsZXgiLCJsYXlvdXRNb2RlIiwiZ2V0VGhpc0luZm8iLCJwcmltYXJ5QXhpc0FsaWduSXRlbXMiLCJjb3VudGVyQXhpc0FsaWduSXRlbXMiLCJnZXRJbmZvRnJvbVBhcmVudCIsIml0ZW1TcGFjaW5nIiwiZmlsdGVyIiwicG9wIiwiaXNMYXN0Q2hpbGRyZW4iLCJndXR0ZXJNYXAiLCJsYXlvdXRHcm93IiwiYmFzZUNsYXNzTmFtZSIsImMyIiwiaWMyIiwiZ2VyQm9yZGVyUmFkaXVzQ2xhc3NOYW1lIiwidGwiLCJ0b3BMZWZ0UmFkaXVzIiwidHIiLCJ0b3BSaWdodFJhZGl1cyIsImJyIiwiYm90dG9tUmlnaHRSYWRpdXMiLCJibCIsImJvdHRvbUxlZnRSYWRpdXMiLCJnZXRQYWRkaW5nQ2xhc3NOYW1lIiwicGFkZGluZ1RvcCIsInBhZGRpbmdSaWdodCIsInBhZGRpbmdCb3R0b20iLCJwYWRkaW5nTGVmdCIsInBhZGRpbmciLCJyYWRpdXMiLCJ1bml0TWFwIiwiZ2V0Rm9udE5hbWVDbGFzc0J5U3R5bGUiLCJzdHlsZSIsImZvbnRNYXAiLCJzcGxpdCIsImdldFByb3BCeU5vZGUiLCJnZXRBQ1NTU0luZm8iLCJmb250U2l6ZSIsImxpbmVIZWlnaHQiLCJsZXR0ZXJTcGFjaW5nIiwiZm9udE5hbWUiLCJmbkNsYXNzIiwiZmFtaWx5IiwidGFDbGFzcyIsInRleHRBbGlnbkhvcml6b250YWwiLCJ2YUNsYXNzIiwidGV4dEFsaWduVmVydGljYWwiLCJ0ZXh0Q2FzZSIsInR0Q2xhc3MiLCJ0ZXh0RGVjb3JhdGlvbiIsInRkQ2xhc3MiLCJzdHJDbGFzc05hbWUiLCJpc1N0cm9uZyIsImZpbmRJbmRleCIsImNoYXJhY3RlcnMiLCJsZWdhbFAiLCJtYkNsYXNzIiwicGFyYWdyYXBoU3BhY2luZyIsInBzIiwiaXNMYXN0IiwiYWNzc0luZm8iLCJBUEkiLCJ0YWJJbmRleCIsImdldFNlbGVjdGlvbiIsImN1cnJlbnRQYWdlIiwibm9TZWxlY3Rpb24iLCJvblRhYkNoYW5nZSIsImluZGV4IiwiYmVmb3JlSW5kZXgiLCJhY3Rpb25NYXAiLCJhY3Rpb24iLCJydW4iLCJydW5Ib21lIiwiSW5mbyIsInNldFRpbWVvdXQiLCJnZXRIVE1MIiwiZ2V0Q1NTIiwicnVuQ29uZmlnIiwiZ2V0Q29uZmlnIiwicnVuVG9rZW4iLCJzZWxlY3Rpb25Ub2tlbnMiLCJvbm1lc3NhZ2UiLCJtc2ciLCJ0cnlPbGRDb25maWciLCJzaG93VUkiLCJfX2h0bWxfXyIsIm9uIiwicHJvamVjdHMiLCJjb25zb2xlIiwibG9nIiwiZ2V0T2xkQ29uZmlnIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtR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QUZNLE1BRUE7QUFDSDJHLFlBQU0sQ0FBQ25KLEdBQUQsQ0FBTixHQUFjd0MsS0FBZDtBQUNIO0FBQ0o7O0FBQ0QsU0FBTzJHLE1BQVA7QUFDSDs7QUFBQTtBQUVjaEksdUVBQWYsRTs7Ozs7Ozs7Ozs7O0FDakJBO0FBQUEsSUFBTXNRLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFDdkI7QUFDQS9PLE9BQUssQ0FBQ0MsYUFBTixDQUFvQmdCLFFBQXBCLENBQTZCLE9BQTdCLEVBQXNDQyxJQUF0QyxDQUEyQyxZQUFjO0FBQUEsUUFBYkMsR0FBYSx1RUFBUCxFQUFPO0FBQ3JELFFBQU9nTyxRQUFQLEdBQW1CaE8sR0FBbkIsQ0FBT2dPLFFBQVA7O0FBQ0EsUUFBSUEsUUFBUSxJQUFJQSxRQUFRLENBQUNuUixNQUF6QixFQUFpQztBQUM3QnNRLGdCQUFVLENBQUMsWUFBSTtBQUNYYyxlQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaLEVBQXFCbE8sR0FBckI7QUFDQW5CLGFBQUssQ0FBQ0ssRUFBTixDQUFTQyxXQUFULENBQXFCO0FBQ2pCZ1Asc0JBQVksRUFBRW5PO0FBREcsU0FBckI7QUFHSCxPQUxTLEVBS1AsRUFMTyxDQUFWO0FBTUg7QUFDSixHQVZEO0FBV0gsQ0FiRDs7QUFlZTROLDJFQUFmLEUiLCJmaWxlIjoiY29kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2NvZGUudHNcIik7XG4iLCJpbXBvcnQgQ09ORklHIGZyb20gXCIuL0NPTkZJR1wiO1xuaW1wb3J0IG9iak1lcmdlIGZyb20gXCIuLi91aS91dGlscy9vYmpNZXJnZS5qc1wiO1xuY29uc3QgQ09NUE9ORU5UID0ge1xuICAgIGlzQ29tcG9uZW50OiAobm9kZSkgPT4ge1xuICAgICAgICAvLyAnQ09NUE9ORU5UX1NFVCcg55uu5YmN5LiN6IO95L2c5Li657uE5Lu255qE5Yik5pat5qCH5YeGXG4gICAgICAgIHJldHVybiBub2RlLnR5cGUgPT09ICdJTlNUQU5DRScgfHwgbm9kZS50eXBlID09PSAnQ09NUE9ORU5UJztcbiAgICB9LFxuICAgIGdldE1haW5Db21wb25lbnQ6IChub2RlKSA9PiB7XG4gICAgICAgIGlmIChub2RlLnR5cGUgPT09ICdDT01QT05FTlRfU0VUJyB8fCBub2RlLnR5cGUgPT09ICdDT01QT05FTlQnKSB7XG4gICAgICAgICAgICByZXR1cm4gbm9kZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhub2RlLCB7aXNWYXJpYW50fSk7XG4gICAgICAgIHJldHVybiBub2RlLm1haW5Db21wb25lbnQ7XG4gICAgfSxcbiAgICBnZXRDb21wb25lbnRJZDogKG5vZGUpID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2cobm9kZSk7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgY29uc3QgeyBrZXkgPSAnJyB9ID0gQ09NUE9ORU5ULmdldE1haW5Db21wb25lbnQobm9kZSkgfHwge307XG4gICAgICAgIHJldHVybiBrZXk7XG4gICAgfSxcbiAgICBzdHJpbmdUb0NvbXBvbmVudE5hbWU6IChuYW1lID0gJycpID0+IHtcbiAgICAgICAgY29uc3QgdHJpbU5hbWUgPSBuYW1lLnRyaW0oKTtcbiAgICAgICAgaWYgKCF0cmltTmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHN0ck5hbWUgPSB0cmltTmFtZS5yZXBsYWNlKC9bXFxXXS9nLCAnJyk7XG4gICAgICAgIGNvbnN0IGZpcnN0Q2hhciA9IHN0ck5hbWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgIGlmIChzdHJOYW1lLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIGZpcnN0Q2hhcjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmlyc3RDaGFyICsgc3RyTmFtZS5zbGljZSgxKTtcbiAgICB9LFxuICAgIGdldEluZm86IChub2RlLCBub2RlSW5mbyA9IHt9KSA9PiB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgY29uc3QgaWQgPSBDT01QT05FTlQuZ2V0Q29tcG9uZW50SWQobm9kZSk7XG4gICAgICAgIGNvbnN0IG1hdGNoVG9rZW4gPSBpZCA/IENPTkZJRy5nZXRUb2tlbigpW2lkXSA6ICcnO1xuICAgICAgICBpZiAoIW1hdGNoVG9rZW4pIHtcbiAgICAgICAgICAgIHJldHVybiBub2RlSW5mbztcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IERFRkFVTFQgPSB7fSB9ID0gbWF0Y2hUb2tlbjtcbiAgICAgICAgcmV0dXJuIG9iak1lcmdlKG5vZGVJbmZvLCBERUZBVUxUKTtcbiAgICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgQ09NUE9ORU5UO1xuIiwidmFyIF9fcmVzdCA9ICh0aGlzICYmIHRoaXMuX19yZXN0KSB8fCBmdW5jdGlvbiAocywgZSkge1xuICAgIHZhciB0ID0ge307XG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXG4gICAgICAgIHRbcF0gPSBzW3BdO1xuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xuICAgICAgICB9XG4gICAgcmV0dXJuIHQ7XG59O1xuaW1wb3J0IENPTVBPTkVOVCBmcm9tIFwiLi9DT01QT05FTlRcIjtcbmNvbnN0IENPTkZJR19ERUZBVUxUID0ge1xuICAgIGlzSlNYOiBmYWxzZSxcbiAgICBfaWdub3JlQ2xhc3NOYW1lOiBbXSxcbiAgICB0b2tlbnM6IHt9XG59O1xuY29uc3QgVkVSU0lPTiA9IFwiMS4wXCI7XG5jb25zdCBDT05GSUcgPSB7XG4gICAga2V5OiBgVG9rZW5Ub0NvZGUtJHtWRVJTSU9OfWAsXG4gICAgc3RvcmU6IENPTkZJR19ERUZBVUxULFxuICAgIGNoYW5nZUpTWDogKHZhbHVlKSA9PiB7XG4gICAgICAgIGNvbnN0IHN0b3JlID0gQ09ORklHLmdldEN1cnJlbnQoKTtcbiAgICAgICAgLy8g6YeN572u5Zue56ys5LiA5LiqXG4gICAgICAgIHN0b3JlLmlzSlNYID0gdmFsdWU7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHN0b3JlKTtcbiAgICAgICAgZmlnbWEuY2xpZW50U3RvcmFnZS5zZXRBc3luYyhDT05GSUcua2V5LCBzdG9yZSk7XG4gICAgfSxcbiAgICBlZGl0OiAoZGF0YSkgPT4ge1xuICAgICAgICBDT05GSUcuc3RvcmUgPSBkYXRhO1xuICAgICAgICBmaWdtYS5jbGllbnRTdG9yYWdlLnNldEFzeW5jKENPTkZJRy5rZXksIGRhdGEpO1xuICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBhbGVydE1zZzogYFNhdmUgc3VjY2Vzc2BcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBhZGRUb2tlbjogKGRhdGEpID0+IHtcbiAgICAgICAgY29uc3QgX2EgPSBDT05GSUcuZ2V0Q3VycmVudCgpLCB7IHRva2VucyB9ID0gX2EsIHJlc3QgPSBfX3Jlc3QoX2EsIFtcInRva2Vuc1wiXSk7XG4gICAgICAgIGNvbnN0IG5ld1N0b3JlID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCByZXN0KSwgeyB0b2tlbnM6IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgdG9rZW5zKSwgZGF0YSkgfSk7XG4gICAgICAgIENPTkZJRy5zdG9yZSA9IG5ld1N0b3JlO1xuICAgICAgICBmaWdtYS5jbGllbnRTdG9yYWdlLnNldEFzeW5jKENPTkZJRy5rZXksIG5ld1N0b3JlKTtcbiAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgYWxlcnRNc2c6IGBTYXZlIHN1Y2Nlc3NgXG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgaXNKU1g6ICgpID0+IHtcbiAgICAgICAgcmV0dXJuICEhQ09ORklHLnN0b3JlLmlzSlNYO1xuICAgIH0sXG4gICAgaW5pdDogKCkgPT4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGZpZ21hLmNsaWVudFN0b3JhZ2UuZ2V0QXN5bmMoQ09ORklHLmtleSkudGhlbigocmV0ID0gbnVsbCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXQgJiYgT2JqZWN0LmtleXMocmV0KS5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgQ09ORklHLnN0b3JlID0gcmV0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g5rKh5pyJ57yT5a2Y5Yib5bu65LiA5Liq5paw55qEXG4gICAgICAgICAgICAgICAgICAgIGZpZ21hLmNsaWVudFN0b3JhZ2Uuc2V0QXN5bmMoQ09ORklHLmtleSwgQ09ORklHX0RFRkFVTFQpO1xuICAgICAgICAgICAgICAgICAgICBDT05GSUcuc3RvcmUgPSBDT05GSUdfREVGQVVMVDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShDT05GSUcuZ2V0VG9rZW4oKSk7XG4gICAgICAgICAgICB9KS5jYXRjaChyZWplY3QpO1xuICAgICAgICB9KSk7XG4gICAgfSxcbiAgICBnZXRDdXJyZW50OiAoKSA9PiB7XG4gICAgICAgIHJldHVybiBDT05GSUcuc3RvcmU7XG4gICAgfSxcbiAgICBnZXRUb2tlbjogKCkgPT4ge1xuICAgICAgICBjb25zdCB7IHRva2VucyA9IG51bGwgfSA9IENPTkZJRy5zdG9yZSB8fCB7fTtcbiAgICAgICAgcmV0dXJuIHRva2VucyA/IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodG9rZW5zKSkgOiBudWxsO1xuICAgIH0sXG4gICAgZ2V0SW5mb0J5SWQ6IChpZCwgdHlwZSA9IFwiREVGQVVMVFwiKSA9PiB7XG4gICAgICAgIGlmICghKGlkICYmICh0eXBlb2YgaWQgPT09ICdzdHJpbmcnKSkpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsga2V5ID0gJycgfSA9IGZpZ21hLmdldFN0eWxlQnlJZChpZCkgfHwge307XG4gICAgICAgIGlmICgha2V5KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB0b2tlbkNvbmZpZyA9IENPTkZJRy5nZXRUb2tlbigpIHx8IHt9O1xuICAgICAgICBjb25zdCBtYXRjaFRva2VuID0gdG9rZW5Db25maWdba2V5XSB8fCB7fTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2dldEluZm9CeUlkJywgbWF0Y2hUb2tlbiwgdHlwZSlcbiAgICAgICAgLy8g5aaC5p6c5pyJ6Ieq5a6a5LmJ55So6Ieq5a6a5LmJ55qEXG4gICAgICAgIHJldHVybiBtYXRjaFRva2VuW3R5cGVdIHx8IG1hdGNoVG9rZW4uREVGQVVMVCB8fCBudWxsO1xuICAgIH0sXG4gICAgZ2V0U2VsZWN0aW9uVG9rZW5zOiAoc2VsZWN0aW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgdG9rZW5zID0ge30gfSA9IENPTkZJRy5zdG9yZTtcbiAgICAgICAgaWYgKCFzZWxlY3Rpb24pIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG1hdGNoVG9rZW4gPSB7fTtcbiAgICAgICAgLy8g5aaC5p6c5piv57uE5Lu2XG4gICAgICAgIGlmIChDT01QT05FTlQuaXNDb21wb25lbnQoc2VsZWN0aW9uKSkge1xuICAgICAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgICAgICBjb25zdCB7IGtleSwgbmFtZSwgdHlwZSB9ID0gQ09NUE9ORU5ULmdldE1haW5Db21wb25lbnQoc2VsZWN0aW9uKTtcbiAgICAgICAgICAgIGNvbnN0IGZpbmRUb2tlbiA9IHRva2Vuc1trZXldIHx8IHt9O1xuICAgICAgICAgICAgbWF0Y2hUb2tlbltrZXldID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHsgREVGQVVMVDoge1xuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFtdLFxuICAgICAgICAgICAgICAgICAgICBfaWdub3JlQ2xhc3NOYW1lOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgX3JlbmRlcldpZHRoOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgX3JlbmRlckhlaWdodDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIHRhZ05hbWU6ICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogdHJ1ZVxuICAgICAgICAgICAgICAgIH0gfSwgZmluZFRva2VuKSwgeyBfdG9rZW5OYW1lOiBuYW1lLCBfdG9rZW5UeXBlOiB0eXBlIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICBbc2VsZWN0aW9uLmZpbGxTdHlsZUlkLCBzZWxlY3Rpb24udGV4dFN0eWxlSWQsIHNlbGVjdGlvbi5zdHJva2VTdHlsZUlkLCBzZWxlY3Rpb24uZWZmZWN0U3R5bGVJZCwgc2VsZWN0aW9uLmdyaWRTdHlsZUlkXS5mb3JFYWNoKChpdGVtLCBrZXkpID0+IHtcbiAgICAgICAgICAgIGlmICghaXRlbSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHsga2V5OiBzdHlsZUtleSwgbmFtZSwgdHlwZSB9ID0gZmlnbWEuZ2V0U3R5bGVCeUlkKGl0ZW0pIHx8IHt9O1xuICAgICAgICAgICAgaWYgKCFzdHlsZUtleSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBleHRyYVRva2VuID0gbnVsbDtcbiAgICAgICAgICAgIC8vIOWmguaenOaciSBmaWxsU3R5bGVJZFxuICAgICAgICAgICAgaWYgKGtleSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGV4dHJhVG9rZW4gPSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIOWPr+S7pemineWkluWvueaWh+Wtl+i/m+ihjOiuvue9rlxuICAgICAgICAgICAgICAgICAgICBcIlRFWFRcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9pZ25vcmVDbGFzc05hbWU6IFtdXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbWF0Y2hUb2tlbltzdHlsZUtleV0gPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7IERFRkFVTFQ6IHtcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgX2lnbm9yZUNsYXNzTmFtZTogW11cbiAgICAgICAgICAgICAgICB9IH0sIGV4dHJhVG9rZW4pLCB0b2tlbnNbc3R5bGVLZXldKSwgeyBfdG9rZW5OYW1lOiBuYW1lLCBfdG9rZW5UeXBlOiB0eXBlIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG1hdGNoVG9rZW47XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiDojrflj5bmiYDmnInnmoQgVG9rZW4g5YyF5ousIENvbXBvbmVudFxuICAgICAqL1xuICAgIGdldEFsbFRva2VuczogKCkgPT4ge1xuICAgICAgICBjb25zdCBuYW1lID0gZmlnbWEucm9vdC5uYW1lO1xuICAgICAgICBjb25zdCBjb21wb25lbnRzID0gZmlnbWEucm9vdC5maW5kQWxsKGMgPT4ge1xuICAgICAgICAgICAgaWYgKGMudHlwZSA9PT0gJ0NPTVBPTkVOVF9TRVQnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYy50eXBlICE9PSAnQ09NUE9ORU5UJykge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjLnBhcmVudC50eXBlID09PSAnQ09NUE9ORU5UX1NFVCcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IHRva2VuID0ge307XG4gICAgICAgIGNvbnN0IGFkZENvbmZpZyA9IChkYXRhID0gW10pID0+IHtcbiAgICAgICAgICAgIGRhdGEuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIHRva2VuW2l0ZW0uaWRdID0ge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBpdGVtLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IGl0ZW0udHlwZVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgYWRkQ29uZmlnKGNvbXBvbmVudHMpO1xuICAgICAgICBhZGRDb25maWcoZmlnbWEuZ2V0TG9jYWxQYWludFN0eWxlcygpKTtcbiAgICAgICAgYWRkQ29uZmlnKGZpZ21hLmdldExvY2FsVGV4dFN0eWxlcygpKTtcbiAgICAgICAgYWRkQ29uZmlnKGZpZ21hLmdldExvY2FsRWZmZWN0U3R5bGVzKCkpO1xuICAgICAgICBhZGRDb25maWcoZmlnbWEuZ2V0TG9jYWxHcmlkU3R5bGVzKCkpO1xuICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICBnb3RBbGxUb2tlbnM6IHtcbiAgICAgICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgICAgIGlnbm9yZUNsYXNzTmFtZTogJycsXG4gICAgICAgICAgICAgICAgdG9rZW5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IENPTkZJRztcbiIsImltcG9ydCBDT01QT05FTlQgZnJvbSBcIi4vQ09NUE9ORU5UXCI7XG5pbXBvcnQgRklMTCBmcm9tIFwiLi90b2tlbi9GSUxMXCI7XG5pbXBvcnQgVEVYVCBmcm9tIFwiLi90b2tlbi9URVhUXCI7XG5pbXBvcnQgU1RST0tFIGZyb20gXCIuL3Rva2VuL1NUUk9LRVwiO1xuaW1wb3J0IEdSSUQgZnJvbSBcIi4vdG9rZW4vR1JJRFwiO1xuaW1wb3J0IEZMRVggZnJvbSBcIi4vdG9rZW4vRkxFWFwiO1xuaW1wb3J0IFNBQ1NTIGZyb20gXCIuL1NBQ1NTXCI7XG5pbXBvcnQgVVRJTFMgZnJvbSBcIi4vVVRJTFNcIjtcbmltcG9ydCBFRkZFQ1QgZnJvbSBcIi4vdG9rZW4vRUZGRUNUXCI7XG5pbXBvcnQgT1RIRVJTIGZyb20gXCIuL3Rva2VuL09USEVSU1wiO1xuaW1wb3J0IENPTkZJRyBmcm9tIFwiLi9DT05GSUdcIjtcbmNvbnN0IE5PREUgPSB7XG4gICAgLyoqXG4gICAgICog5aaC5p6c5LiA5Liq5YWD57Sg5YaF6YOo5Y+q5pyJ5Yeg5L2V5Zu+5b2i77yM6YKj5LmI5Y+q5pi+56S65YW257uT5p6EXG4gICAgICovXG4gICAgaXNTdHJ1Y3ROb2RlOiAobm9kZSkgPT4ge1xuICAgICAgICAvLyDku6Uj5Y+35byA5aS0XG4gICAgICAgIGlmIChub2RlLm5hbWUuc3RhcnRzV2l0aChcIiNcIikpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHllc1R5cGVzID0gWydSRUNUQU5HTEUnLCAnVkVDVE9SJywgJ1NUQVInLCAnTElORScsICdQT0xZR09OJywgJ0VMTElQU0UnLCAnU0xJQ0UnXTtcbiAgICAgICAgLy8g5aaC5p6c5pys6Lqr5bCx5piv6L+Z5Lqb5YWD57Sg6YKj5LmI5Lmf5piv55u05o6l6L6T5Ye6XG4gICAgICAgIGlmICh5ZXNUeXBlcy5pbmRleE9mKG5vZGUudHlwZSkgPiAtMSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5vZGUudHlwZSA9PT0gJ1RFWFQnKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBjb25zdCB7IGNoaWxkcmVuID0gW10gfSA9IG5vZGU7XG4gICAgICAgIGlmICghY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICAvLyDmib7liLDkuobkuI3lkIjms5XlhYPntKDvvIjkuI3lnKjkuIrpnaLnmoTlh6DkvZXliJfooajph4zpnaLvvIlcbiAgICAgICAgY29uc3QgZ290Tm8gPSBjaGlsZHJlbi5maW5kKChpdGVtKSA9PiBpdGVtLnZpc2libGUgJiYgeWVzVHlwZXMuaW5kZXhPZihpdGVtLnR5cGUpID09PSAtMSk7XG4gICAgICAgIHJldHVybiAhZ290Tm87XG4gICAgfSxcbiAgICBpc1JlbmRlckNoaWxkcmVuOiAobm9kZSkgPT4ge1xuICAgICAgICBpZiAoIShub2RlLnR5cGUgPT09ICdJTlNUQU5DRScgfHwgbm9kZS50eXBlID09PSAnQ09NUE9ORU5UJykpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyDlj6rmnInkuIDkuKrlrZDlhYPntKBcbiAgICAgICAgaWYgKG5vZGUuY2hpbGRyZW4ubGVuZ3RoICE9PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gY29uc3Qgb25seUNoaWxkcmVuID0gbm9kZS5jaGlsZHJlblswXTtcbiAgICAgICAgLy8gaWYgKG9ubHlDaGlsZHJlbi50eXBlID09PSAnSU5TVEFOQ0UnKSB7XG4gICAgICAgIC8vICAgcmV0dXJuIHRydWU7XG4gICAgICAgIC8vIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0sXG4gICAgZ2V0Tm9kZUluZm86IChub2RlKSA9PiB7XG4gICAgICAgIGlmICghbm9kZS52aXNpYmxlIHx8IG5vZGUubmFtZS5zdGFydHNXaXRoKFwiX1wiKSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgLy8g55u05o6l5riy5p+T5a2Q5YWD57SgXG4gICAgICAgIGlmIChOT0RFLmlzUmVuZGVyQ2hpbGRyZW4obm9kZSkpIHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmU7XG4gICAgICAgICAgICByZXR1cm4gTk9ERS5nZXROb2RlSW5mbyhub2RlLmNoaWxkcmVuWzBdKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpc1N0cnVjdE5vZGUgPSBOT0RFLmlzU3RydWN0Tm9kZShub2RlKTtcbiAgICAgICAgbGV0IG5vZGVJbmZvID0ge1xuICAgICAgICAgICAgX2lnbm9yZUNsYXNzTmFtZTogW10sXG4gICAgICAgICAgICBjbGFzc05hbWU6IFtdLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtdXG4gICAgICAgIH07XG4gICAgICAgIGlmIChpc1N0cnVjdE5vZGUpIHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIG5vZGVJbmZvLnRhZ05hbWUgPSAnaSc7XG4gICAgICAgIH1cbiAgICAgICAgbm9kZUluZm8gPSBDT01QT05FTlQuZ2V0SW5mbyhub2RlLCBub2RlSW5mbyk7XG4gICAgICAgIG5vZGVJbmZvID0gRklMTC5nZXRJbmZvKG5vZGUsIG5vZGVJbmZvKTtcbiAgICAgICAgbm9kZUluZm8gPSBURVhULmdldEluZm8obm9kZSwgbm9kZUluZm8pO1xuICAgICAgICBub2RlSW5mbyA9IFNUUk9LRS5nZXRJbmZvKG5vZGUsIG5vZGVJbmZvKTtcbiAgICAgICAgbm9kZUluZm8gPSBHUklELmdldEluZm8obm9kZSwgbm9kZUluZm8pO1xuICAgICAgICBub2RlSW5mbyA9IEVGRkVDVC5nZXRJbmZvKG5vZGUsIG5vZGVJbmZvKTtcbiAgICAgICAgbm9kZUluZm8gPSBPVEhFUlMuZ2V0SW5mbyhub2RlLCBub2RlSW5mbyk7XG4gICAgICAgIG5vZGVJbmZvID0gRkxFWC5nZXRJbmZvKG5vZGUsIG5vZGVJbmZvKTtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBpZiAoKGlzU3RydWN0Tm9kZSAmJiBTdHJpbmcobm9kZUluZm8gPT09IG51bGwgfHwgbm9kZUluZm8gPT09IHZvaWQgMCA/IHZvaWQgMCA6IG5vZGVJbmZvLl9yZW5kZXJIZWlnaHQpICE9PSBmYWxzZSkgfHwgU3RyaW5nKG5vZGVJbmZvID09PSBudWxsIHx8IG5vZGVJbmZvID09PSB2b2lkIDAgPyB2b2lkIDAgOiBub2RlSW5mby5fcmVuZGVyV2lkdGgpID09PSB0cnVlKSB7XG4gICAgICAgICAgICBub2RlSW5mby5jbGFzc05hbWUucHVzaChTQUNTUy5hZGQoJ3cnLCBwYXJzZUludChTdHJpbmcobm9kZS53aWR0aCkpKSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBpZiAoKGlzU3RydWN0Tm9kZSAmJiBTdHJpbmcobm9kZUluZm8gPT09IG51bGwgfHwgbm9kZUluZm8gPT09IHZvaWQgMCA/IHZvaWQgMCA6IG5vZGVJbmZvLl9yZW5kZXJIZWlnaHQpICE9PSBmYWxzZSkgfHwgU3RyaW5nKG5vZGVJbmZvID09PSBudWxsIHx8IG5vZGVJbmZvID09PSB2b2lkIDAgPyB2b2lkIDAgOiBub2RlSW5mby5fcmVuZGVySGVpZ2h0KSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgbm9kZUluZm8uY2xhc3NOYW1lLnB1c2goU0FDU1MuYWRkKCdoJywgcGFyc2VJbnQoU3RyaW5nKG5vZGUuaGVpZ2h0KSkpKTtcbiAgICAgICAgfVxuICAgICAgICBub2RlSW5mby5jaGlsZHJlbiA9ICgoKSA9PiB7XG4gICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICBpZiAobm9kZS50eXBlID09PSAnVEVYVCcpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0ZXh0cyA9IFRFWFQuZ2V0VGV4dENoaWxkcmVuKG5vZGUpO1xuICAgICAgICAgICAgICAgIC8vIOWkmuauteaWh+acrOi/memHjOimgeS/ruWkjeS4gOS4i+W1jOWll+eahOagh+etvu+8jOacieWPr+iDveWPmOaIkCBzdHJvbmcgPiBwIOi/meagt+eahOe7k+aehFxuICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICBpZiAoKChfYSA9IHRleHRzWzBdKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EudGFnTmFtZSkgPT09ICdwJykge1xuICAgICAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgICAgICAgIG5vZGVJbmZvLnRhZ05hbWUgPSBcImRpdlwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdGV4dHM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaXNTdHJ1Y3ROb2RlIHx8IG5vZGVJbmZvLmNoaWxkcmVuID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgcmV0dXJuIE5PREUuZ2V0Tm9kZXNJbmZvKG5vZGUuY2hpbGRyZW4pO1xuICAgICAgICB9KSgpO1xuICAgICAgICAvLyDmlbTkuKrpobnnm67pg73lv73nlaXnmoQgY2xhc3NOYW1lXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgY29uc3QgeyBfaWdub3JlQ2xhc3NOYW1lID0gW10gfSA9IENPTkZJRy5nZXRDdXJyZW50KCkgfHwge307XG4gICAgICAgIG5vZGVJbmZvLmNsYXNzTmFtZSA9IFVUSUxTLmNsZWFyQ2xhc3NOYW1lKG5vZGVJbmZvLmNsYXNzTmFtZSwgWy4uLm5vZGVJbmZvLl9pZ25vcmVDbGFzc05hbWUsIC4uLl9pZ25vcmVDbGFzc05hbWVdKTtcbiAgICAgICAgaWYgKChub2RlSW5mby5jaGlsZHJlbiBpbnN0YW5jZW9mIEFycmF5KSAmJiBub2RlSW5mby5jaGlsZHJlbi5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkcmVuSW5mbyA9IG5vZGVJbmZvLmNoaWxkcmVuWzBdO1xuICAgICAgICAgICAgLy8g5aaC5p6c54i25YWD57Sg5ZKM5a2Q5YWD57SgIHRhZ05hbWUg55u45ZCM5ZCI5bm2IGNsYXNzTmFtZVxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjaGlsZHJlbkluZm8gIT09ICdzdHJpbmcnICYmIGNoaWxkcmVuSW5mby50YWdOYW1lID09PSBub2RlSW5mby50YWdOYW1lKSB7XG4gICAgICAgICAgICAgICAgY2hpbGRyZW5JbmZvLmNsYXNzTmFtZSA9IFsuLi5jaGlsZHJlbkluZm8uY2xhc3NOYW1lLCAuLi5ub2RlSW5mby5jbGFzc05hbWVdO1xuICAgICAgICAgICAgICAgIHJldHVybiBjaGlsZHJlbkluZm87XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gY29uc29sZS5sb2coe25vZGVJbmZvfSk7XG4gICAgICAgIHJldHVybiBub2RlSW5mbztcbiAgICB9LFxuICAgIHNvcnQ6IChub2RlcyA9IFtdKSA9PiB7XG4gICAgICAgIHJldHVybiBbLi4ubm9kZXNdLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGFZID0gYS55ICsgYS5oZWlnaHQ7XG4gICAgICAgICAgICBjb25zdCBiWSA9IGIueSArIGIuaGVpZ2h0O1xuICAgICAgICAgICAgaWYgKGEueSA9PT0gYi55KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGEueCAtIGIueDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBhWSAtIGJZO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIGdldE5vZGVzSW5mbzogKG5vZGVzID0gW10pID0+IHtcbiAgICAgICAgbGV0IGluZm8gPSBbXTtcbiAgICAgICAgLy8g6ZyA6KaB5o6S5bqP5LiA5LiLXG4gICAgICAgIGNvbnN0IHNvcnROb2RlcyA9IE5PREUuc29ydChub2Rlcyk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKG5vZGVzLCBzb3J0Tm9kZXMpO1xuICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gc29ydE5vZGVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBub2RlSW5mbyA9IE5PREUuZ2V0Tm9kZUluZm8oc29ydE5vZGVzW2ldKTtcbiAgICAgICAgICAgIGlmICghbm9kZUluZm8pIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChub2RlSW5mbyBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICAgICAgaW5mbyA9IFsuLi5pbmZvLCAuLi5ub2RlSW5mb107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpbmZvLnB1c2gobm9kZUluZm8pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpbmZvO1xuICAgIH1cbn07XG5leHBvcnQgZGVmYXVsdCBOT0RFO1xuIiwiY29uc3QgU0FDU1MgPSB7XG4gICAgZGF0YToge30sXG4gICAgaW5pdDogKCkgPT4ge1xuICAgICAgICBTQUNTUy5kYXRhID0ge307XG4gICAgfSxcbiAgICBuYW1lTWFwOiB7XG4gICAgICAgICdmcyc6ICdmb250LXNpemUnLFxuICAgICAgICAnbGgnOiAnbGluZS1oZWlnaHQnLFxuICAgICAgICAnbHMnOiAnbGV0dGVyLXNwYWNlJyxcbiAgICAgICAgJ2ZmJzogJ2ZvbnQtZmFtaWx5JyxcbiAgICAgICAgJ3B0JzogJ3BhZGRpbmctdG9wJyxcbiAgICAgICAgJ3ByJzogJ3BhZGRpbmctcmlnaHQnLFxuICAgICAgICAncGInOiAncGFkZGluZy1ib3R0b20nLFxuICAgICAgICAncGwnOiAncGFkZGluZy1sZWZ0JyxcbiAgICAgICAgJ210JzogJ21hcmdpbi10b3AnLFxuICAgICAgICAnbXInOiAnbWFyZ2luLXJpZ2h0JyxcbiAgICAgICAgJ21iJzogJ21hcmdpbi1ib3R0b20nLFxuICAgICAgICAnbWwnOiAnbWFyZ2luLWxlZnQnLFxuICAgICAgICAnaCc6ICdoZWlnaHQnLFxuICAgICAgICAndyc6ICd3aWR0aCcsXG4gICAgICAgICdidGxyJzogJ2JvcmRlci10b3AtbGVmdC1yYWRpdXMnLFxuICAgICAgICAnYnRycic6ICdib3JkZXItdG9wLXJpZ2h0LXJhZGl1cycsXG4gICAgICAgICdiYnJyJzogJ2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzJyxcbiAgICAgICAgJ2JibHInOiAnYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1cycsXG4gICAgICAgICdicic6ICdib3JkZXItcmFkaXVzJ1xuICAgIH0sXG4gICAgZ2V0Q2xhc3NTZWxlY3RvckJ5TmFtZTogKGNsYXNzTmFtZSA9ICcnKSA9PiB7XG4gICAgICAgIGlmIChjbGFzc05hbWUuaW5kZXhPZignLicpID4gLTEpIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IGNsYXNzTmFtZS5yZXBsYWNlKC9cXC4vZywgJ1xcXFwuJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNsYXNzTmFtZS5pbmRleE9mKCc6JykgPiAtMSkge1xuICAgICAgICAgICAgY2xhc3NOYW1lID0gY2xhc3NOYW1lLnJlcGxhY2UoL1xcOi9nLCAnXFxcXDonKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2xhc3NOYW1lLmluZGV4T2YoJyUnKSA+IC0xKSB7XG4gICAgICAgICAgICBjbGFzc05hbWUgPSBjbGFzc05hbWUucmVwbGFjZSgvXFwlL2csICdcXFxcJScpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjbGFzc05hbWU7XG4gICAgfSxcbiAgICBnZXRTdHJpbmc6ICgpID0+IHtcbiAgICAgICAgY29uc3QgZGF0YSA9IFNBQ1NTLmRhdGE7XG4gICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhkYXRhKS5zb3J0KCk7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGtleXMubWFwKChuYW1lKSA9PiBgLiR7U0FDU1MuZ2V0Q2xhc3NTZWxlY3RvckJ5TmFtZShuYW1lKX17JHtkYXRhW25hbWVdfTt9YCkuam9pbignXFxuJyk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSxcbiAgICBhZGQ6IChuYW1lID0gJycsIHZhbHVlLCB1bml0ID0gJ3B4JykgPT4ge1xuICAgICAgICBpZiAoIW5hbWUgfHwgIXZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcHJvcE5hbWUgPSBTQUNTUy5uYW1lTWFwW25hbWVdO1xuICAgICAgICBpZiAoIXByb3BOYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cbiAgICAgICAgLy8g5Y+q5L+d55WZ5Lik5L2N5bCP5pWwXG4gICAgICAgIGNvbnN0IHVzZVZhbHVlID0gTnVtYmVyKHZhbHVlKSA/IHBhcnNlRmxvYXQoTnVtYmVyKHZhbHVlKS50b0ZpeGVkKDIpKSA6IHZhbHVlO1xuICAgICAgICAvLyDlpoLmnpzmmK8gcHgg5LiN6ZyA6KaB5riy5p+TXG4gICAgICAgIGNvbnN0IGNsYXNzVW5pdCA9IHVuaXQgPT09ICdweCcgPyAnJyA6IHVuaXQ7XG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IGAke25hbWV9JHt1c2VWYWx1ZX0ke2NsYXNzVW5pdH1gO1xuICAgICAgICBTQUNTUy5kYXRhW2NsYXNzTmFtZV0gPSBgJHtwcm9wTmFtZX06JHt1c2VWYWx1ZX0ke3VuaXR9YDtcbiAgICAgICAgcmV0dXJuIGNsYXNzTmFtZTtcbiAgICB9LFxuICAgIGFkZEZvbnRGYW1pbHk6ICh2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdmFsdWVPayA9IHZhbHVlLnJlcGxhY2UoL1tcXFddL2csICcnKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBgZmZfJHt2YWx1ZU9rfWA7XG4gICAgICAgIFNBQ1NTLmRhdGFbY2xhc3NOYW1lXSA9IGBmb250LWZhbWlseTpcIiR7dmFsdWV9XCJgO1xuICAgICAgICByZXR1cm4gY2xhc3NOYW1lO1xuICAgIH0sXG4gICAgYWRkQ29sb3I6IChyZ2JhID0gW10pID0+IHtcbiAgICAgICAgaWYgKCFyZ2JhICYmIHJnYmEubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gYGNfJHtyZ2JhLmpvaW4oJycpfWA7XG4gICAgICAgIFNBQ1NTLmRhdGFbY2xhc3NOYW1lXSA9IGBjb2xvcjpyZ2JhKCR7cmdiYS5qb2luKCcsJyl9KWA7XG4gICAgICAgIHJldHVybiBjbGFzc05hbWU7XG4gICAgfSxcbiAgICBhZGRCZ0NvbG9yOiAocmdiYSA9IFtdKSA9PiB7XG4gICAgICAgIGlmICghcmdiYSAmJiByZ2JhLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IGBiY18ke3JnYmEuam9pbignJyl9YDtcbiAgICAgICAgU0FDU1MuZGF0YVtjbGFzc05hbWVdID0gYGJhY2tncm91bmQtY29sb3I6cmdiYSgke3JnYmEuam9pbignLCcpfSlgO1xuICAgICAgICByZXR1cm4gY2xhc3NOYW1lO1xuICAgIH1cbn07XG5leHBvcnQgZGVmYXVsdCBTQUNTUztcbiIsImNvbnN0IFVUSUxTID0ge1xuICAgIGlzQmxvY2s6ICh0YWdOYW1lID0gJycpID0+IHtcbiAgICAgICAgY29uc3QgYmxvY2tUYWcgPSBbJ2RpdicsICdoMScsICdoMicsICdoMycsICdoNCcsICdoNScsICdoNicsICdwJ107XG4gICAgICAgIHJldHVybiBibG9ja1RhZy5pbmRleE9mKHRhZ05hbWUpID4gLTE7XG4gICAgfSxcbiAgICBpc1NlbGZUYWc6ICh0YWdOYW1lID0gJycpID0+IHtcbiAgICAgICAgY29uc3Qgc2VsZlRhZyA9IFsnaW1nJywgJ2xpbmsnLCAnbWV0YScsICdicicsICdicicsICdocicsICdpbnB1dCcsICdjb2wnLCAnZnJhbWUnLCAnYXJlYScsICdwYXJhbScsICdvYmplY3QnLCAnZW1iZWQnLCAna2V5Z2VuJywgJ3NvdXJjZSddO1xuICAgICAgICByZXR1cm4gc2VsZlRhZy5pbmRleE9mKHRhZ05hbWUpID4gLTE7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiDljrvph43lkozljrvnqbpcbiAgICAgKiBAcGFyYW0gYXJyU3RyXG4gICAgICovXG4gICAgY2xlYXJDbGFzc05hbWU6IChjbGFzc05hbWUgPSBbXSwgaWdub3JlQ2xhc3NOYW1lID0gW10pID0+IHtcbiAgICAgICAgaWYgKCFjbGFzc05hbWUgfHwgY2xhc3NOYW1lLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgICAgICBjbGFzc05hbWUuZm9yRWFjaCgoaXRlbSA9ICcnKSA9PiB7XG4gICAgICAgICAgICBpZiAoaXRlbSAmJiBpdGVtICE9PSAnbnVsbCcgJiYgcmVzdWx0LmluZGV4T2YoaXRlbSkgPT09IC0xICYmIGlnbm9yZUNsYXNzTmFtZS5pbmRleE9mKGl0ZW0pID09PSAtMSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGl0ZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgVVRJTFM7XG4iLCJpbXBvcnQgSFRNTCBmcm9tIFwiLi9IVE1MXCI7XG5pbXBvcnQgSlNYIGZyb20gXCIuL0pTWFwiO1xuY29uc3QgRE9NID0ge1xuICAgIHJlbmRlcjogKG9iaiwgaXNKU1gpID0+IHtcbiAgICAgICAgaWYgKGlzSlNYKSB7XG4gICAgICAgICAgICByZXR1cm4gSlNYLmdldEl0ZW1Eb20ob2JqKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gSFRNTC5nZXRJdGVtRG9tKG9iaik7XG4gICAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IERPTTtcbiIsInZhciBfX3Jlc3QgPSAodGhpcyAmJiB0aGlzLl9fcmVzdCkgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgICB2YXIgdCA9IHt9O1xuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxuICAgICAgICB0W3BdID0gc1twXTtcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcbiAgICAgICAgfVxuICAgIHJldHVybiB0O1xufTtcbmltcG9ydCBVVElMUyBmcm9tIFwiLi4vVVRJTFNcIjtcbi8vIGxlZ2FsIOWQiOazleWxnuaAp1xuLy8gY29uc3QgbGVnYWxQcm9wID0gWydjbGFzcycsICd0eXBlJywgJ25hbWUnLCAncm9sZScsICdkaXNhYmxlZCcsICdpZCcsICd0aXRsZScsICdsYW5nJywgJ2RpcicsICd0YWJpbmRleCcsICdhY2Nlc3NrZXknLCAnc3JjJywgJ2hyZWYnLCAnc3R5bGUnLCAnYXJpYS1oaWRkZW4nLCAndGFyZ2V0JywgJ3JlbCddO1xuY29uc3QgSFRNTCA9IHtcbiAgICBnZXRQcm9wc1N0cmluZ0J5T2JqZWN0OiAocHJvcHMpID0+IHtcbiAgICAgICAgY29uc3QgYXJyUHJvcHMgPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMocHJvcHMpKSB7XG4gICAgICAgICAgICAvLyDlv73nlaUgJ18nIOW8gOWktOeahOWxnuaAp1xuICAgICAgICAgICAgaWYgKCFrZXkuc3RhcnRzV2l0aCgnXycpKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RyVmFsdWUgPSB2YWx1ZSBpbnN0YW5jZW9mIEFycmF5ID8gdmFsdWUuam9pbignICcpIDogdmFsdWU7XG4gICAgICAgICAgICAgICAgY29uc3Qga2V5TmFtZSA9IGtleSA9PT0gJ2NsYXNzTmFtZScgPyAnY2xhc3MnIDoga2V5O1xuICAgICAgICAgICAgICAgIHN0clZhbHVlICYmIGFyclByb3BzLnB1c2goYCR7a2V5TmFtZX09XCIke3N0clZhbHVlfVwiYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFyclByb3BzLmpvaW4oJyAnKTtcbiAgICB9LFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBnZXRJdGVtRG9tOiAoaXRlbSkgPT4ge1xuICAgICAgICBpZiAoIWl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGl0ZW0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IHRhZ05hbWU6IF90YWdOYW1lLCBjaGlsZHJlbiA9IFtdIH0gPSBpdGVtLCBwcm9wcyA9IF9fcmVzdChpdGVtLCBbXCJ0YWdOYW1lXCIsIFwiY2hpbGRyZW5cIl0pO1xuICAgICAgICBjb25zdCB0YWdOYW1lID0gX3RhZ05hbWUgPyBfdGFnTmFtZS50b0xvd2VyQ2FzZSgpIDogJ2Rpdic7XG4gICAgICAgIGNvbnN0IHN0clByb3BzID0gSFRNTC5nZXRQcm9wc1N0cmluZ0J5T2JqZWN0KHByb3BzKTtcbiAgICAgICAgY29uc3QgdGFnU3RhcnQgPSBgJHt0YWdOYW1lfSR7c3RyUHJvcHMgPyBgICR7c3RyUHJvcHN9YCA6ICcnfWA7XG4gICAgICAgIGlmIChVVElMUy5pc1NlbGZUYWcodGFnTmFtZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBgPCR7dGFnU3RhcnR9Lz5gO1xuICAgICAgICB9XG4gICAgICAgIGlmICghY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gYDwke3RhZ1N0YXJ0fT48LyR7dGFnTmFtZX0+YDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYDwke3RhZ1N0YXJ0fT4ke0hUTUwuZ2V0RG9tQnlBcnJheShjaGlsZHJlbil9PC8ke3RhZ05hbWV9PmA7XG4gICAgfSxcbiAgICBnZXREb21CeUFycmF5OiAob2JqID0gW10pID0+IHtcbiAgICAgICAgcmV0dXJuIG9iai5tYXAoKGl0ZW0pID0+IEhUTUwuZ2V0SXRlbURvbShpdGVtKSkuam9pbignJyk7XG4gICAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IEhUTUw7XG4iLCJ2YXIgX19yZXN0ID0gKHRoaXMgJiYgdGhpcy5fX3Jlc3QpIHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gICAgdmFyIHQgPSB7fTtcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcbiAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XG4gICAgICAgIH1cbiAgICByZXR1cm4gdDtcbn07XG5pbXBvcnQgVVRJTFMgZnJvbSBcIi4uL1VUSUxTXCI7XG5jb25zdCBKU1ggPSB7XG4gICAgZ2V0UHJvcHNTdHJpbmc6IChwcm9wcykgPT4ge1xuICAgICAgICBjb25zdCBhcnJQcm9wcyA9IFtdO1xuICAgICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhwcm9wcykpIHtcbiAgICAgICAgICAgIC8vIOW/veeVpSAnXycg5byA5aS055qE5bGe5oCnXG4gICAgICAgICAgICBpZiAoIWtleS5zdGFydHNXaXRoKCdfJykpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzdHJWYWx1ZSA9IHZhbHVlIGluc3RhbmNlb2YgQXJyYXkgPyB2YWx1ZS5qb2luKCcgJykgOiB2YWx1ZTtcbiAgICAgICAgICAgICAgICBzdHJWYWx1ZSAmJiBhcnJQcm9wcy5wdXNoKGAke2tleX09XCIke3N0clZhbHVlfVwiYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFyclByb3BzLmpvaW4oJyAnKTtcbiAgICB9LFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBnZXRJdGVtRG9tOiAoaXRlbSkgPT4ge1xuICAgICAgICBpZiAoIWl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGl0ZW0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgfVxuICAgICAgICAvLyBjb25zb2xlLmxvZyh7aXRlbX0pO1xuICAgICAgICBjb25zdCB7IHRhZ05hbWUgPSAnZGl2JywgY2hpbGRyZW4gPSBbXSB9ID0gaXRlbSwgcHJvcHMgPSBfX3Jlc3QoaXRlbSwgW1widGFnTmFtZVwiLCBcImNoaWxkcmVuXCJdKTtcbiAgICAgICAgY29uc3Qgc3RyUHJvcHMgPSBKU1guZ2V0UHJvcHNTdHJpbmcocHJvcHMpO1xuICAgICAgICBjb25zdCB0YWdTdGFydCA9IGAke3RhZ05hbWV9JHtzdHJQcm9wcyA/IGAgJHtzdHJQcm9wc31gIDogJyd9YDtcbiAgICAgICAgaWYgKFVUSUxTLmlzU2VsZlRhZyh0YWdOYW1lKSkge1xuICAgICAgICAgICAgcmV0dXJuIGA8JHt0YWdTdGFydH0vPmA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFjaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChpdGVtLmNvbXBvbmVudE5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYDwke3RhZ1N0YXJ0fS8+YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBgPCR7dGFnU3RhcnR9PjwvJHt0YWdOYW1lfT5gO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBgPCR7dGFnU3RhcnR9PiR7SlNYLmdldERvbUJ5QXJyYXkoY2hpbGRyZW4pfTwvJHt0YWdOYW1lfT5gO1xuICAgIH0sXG4gICAgZ2V0RG9tQnlBcnJheTogKG9iaiA9IFtdKSA9PiB7XG4gICAgICAgIHJldHVybiBvYmoubWFwKChpdGVtKSA9PiBKU1guZ2V0SXRlbURvbShpdGVtKSkuam9pbignJyk7XG4gICAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IEpTWDtcbiIsImNvbnN0IENPTE9SID0ge1xuICAgIGdldFJnYmFCeUZpbGw6ICh7IGNvbG9yLCBvcGFjaXR5LCB2aXNpYmxlIH0pID0+IHtcbiAgICAgICAgLy8g5aaC5p6c5LiN5Y+v6KeBXG4gICAgICAgIGlmICghdmlzaWJsZSB8fCBvcGFjaXR5ID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByID0gcGFyc2VJbnQoU3RyaW5nKGNvbG9yLnIgKiAyNTUpKTtcbiAgICAgICAgY29uc3QgZyA9IHBhcnNlSW50KFN0cmluZyhjb2xvci5nICogMjU1KSk7XG4gICAgICAgIGNvbnN0IGIgPSBwYXJzZUludChTdHJpbmcoY29sb3IuYiAqIDI1NSkpO1xuICAgICAgICBjb25zdCBhID0gU3RyaW5nKG9wYWNpdHkpLmluZGV4T2YoJy4nKSA+IC0xID8gb3BhY2l0eS50b0ZpeGVkKDEpIDogb3BhY2l0eTtcbiAgICAgICAgcmV0dXJuIFtyLCBnLCBiLCBhXTtcbiAgICB9LFxufTtcbmV4cG9ydCBkZWZhdWx0IENPTE9SO1xuIiwiaW1wb3J0IENPTkZJRyBmcm9tIFwiLi4vQ09ORklHXCI7XG5pbXBvcnQgb2JqTWVyZ2UgZnJvbSBcIi4uLy4uL3VpL3V0aWxzL29iak1lcmdlXCI7XG5jb25zdCBFRkZFQ1QgPSB7XG4gICAgZ2V0SW5mbzogKG5vZGUsIG5vZGVJbmZvKSA9PiB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gQ09ORklHLmdldEluZm9CeUlkKG5vZGUuZWZmZWN0U3R5bGVJZCk7XG4gICAgICAgIGlmICghcmVzdWx0KSB7XG4gICAgICAgICAgICByZXR1cm4gbm9kZUluZm87XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9iak1lcmdlKG5vZGVJbmZvLCByZXN1bHQpO1xuICAgIH1cbn07XG5leHBvcnQgZGVmYXVsdCBFRkZFQ1Q7XG4iLCJpbXBvcnQgQ09MT1IgZnJvbSBcIi4vQ09MT1JcIjtcbmltcG9ydCBDT05GSUcgZnJvbSBcIi4uL0NPTkZJR1wiO1xuaW1wb3J0IFNBQ1NTIGZyb20gXCIuLi9TQUNTU1wiO1xuaW1wb3J0IG9iak1lcmdlIGZyb20gXCIuLi8uLi91aS91dGlscy9vYmpNZXJnZVwiO1xuY29uc3QgRklMTCA9IHtcbiAgICBnZXRGaWxsOiAobm9kZSkgPT4ge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGNvbnN0IFtmaXJzdEZpbGxdID0gKHR5cGVvZiBub2RlLmdldFJhbmdlRmlsbHMgPT09ICdmdW5jdGlvbicgPyBub2RlLmdldFJhbmdlRmlsbHMoMCwgMSkgOiBub2RlLmZpbGxzKSB8fCBbXTtcbiAgICAgICAgLy8g5rKh5pyJ6K6+572u5Lu75L2V6aKc6ImyLCDnm67liY3kuI3mlK/mjIHmuJDlj5hcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBpZiAoIWZpcnN0RmlsbCB8fCBmaXJzdEZpbGwudHlwZSAhPT0gJ1NPTElEJykge1xuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY29sb3IgPSBDT0xPUi5nZXRSZ2JhQnlGaWxsKGZpcnN0RmlsbCk7XG4gICAgICAgIGlmICghY29sb3IpIHtcbiAgICAgICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IG5vZGUudHlwZSA9PT0gJ1RFWFQnID8gU0FDU1MuYWRkQ29sb3IoY29sb3IpIDogU0FDU1MuYWRkQmdDb2xvcihjb2xvcik7XG4gICAgICAgIC8vIOaWh+acrOaYr+eUqOminOiJsu+8jOWFtuWug+eQhuino+S4uuiDjOaZr+iJslxuICAgICAgICByZXR1cm4gY2xhc3NOYW1lO1xuICAgIH0sXG4gICAgLy8g6I635Y+W5aGr5YWF5L+h5oGvXG4gICAgZ2V0SW5mbzogKG5vZGUsIG5vZGVJbmZvID0ge30pID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2cobm9kZSk7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgY29uc3QgaWQgPSB0eXBlb2Ygbm9kZS5nZXRSYW5nZUZpbGxTdHlsZUlkID09PSAnZnVuY3Rpb24nID8gbm9kZS5nZXRSYW5nZUZpbGxTdHlsZUlkKDAsIDEpIDogbm9kZS5maWxsU3R5bGVJZDtcbiAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgIGNvbnN0IHRva2VuID0gQ09ORklHLmdldEluZm9CeUlkKGlkLCBub2RlLnR5cGUpIHx8IHt9O1xuICAgICAgICBpZiAodG9rZW4pIHtcbiAgICAgICAgICAgIHJldHVybiBvYmpNZXJnZShub2RlSW5mbywgdG9rZW4pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNsYXNzQ29sb3IgPSBGSUxMLmdldEZpbGwobm9kZSk7XG4gICAgICAgIHJldHVybiBvYmpNZXJnZShub2RlSW5mbywge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiBbY2xhc3NDb2xvcl1cbiAgICAgICAgfSk7XG4gICAgfSxcbn07XG5leHBvcnQgZGVmYXVsdCBGSUxMO1xuIiwiaW1wb3J0IFNBQ1NTIGZyb20gXCIuLi9TQUNTU1wiO1xuaW1wb3J0IG9iak1lcmdlIGZyb20gXCIuLi8uLi91aS91dGlscy9vYmpNZXJnZVwiO1xuLy8gaW1wb3J0IENPTkZJRyBmcm9tIFwiLi9DT05GSUdcIjtcbmNvbnN0IEZMRVggPSB7XG4gICAgaXNGbGV4OiAobm9kZSkgPT4ge1xuICAgICAgICAvLyDov5nlh6DkuKrlhYPntKDpg73kuI3lgZogRmxleCDliKTmlq3lpITnkIZcbiAgICAgICAgaWYgKFsnVEVYVCddLmluZGV4T2Yobm9kZS50eXBlKSA+IC0xKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChub2RlID09PSBudWxsIHx8IG5vZGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG5vZGUubGF5b3V0TW9kZSkgJiYgKG5vZGUgPT09IG51bGwgfHwgbm9kZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogbm9kZS5sYXlvdXRNb2RlKSAhPT0gXCJOT05FXCI7XG4gICAgfSxcbiAgICBnZXRUaGlzSW5mbzogKG5vZGUpID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2cobm9kZS5uYW1lLCBub2RlLmxheW91dE1vZGUsIEZMRVguaXNGbGV4KG5vZGUpKTtcbiAgICAgICAgaWYgKCFGTEVYLmlzRmxleChub2RlKSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyBsYXlvdXRNb2RlLCBwcmltYXJ5QXhpc0FsaWduSXRlbXMsIGNvdW50ZXJBeGlzQWxpZ25JdGVtcywgY2hpbGRyZW4gPSBbXSB9ID0gbm9kZTtcbiAgICAgICAgLy8g5rKh5pyJ5a2Q5YWD57SgIGZsZXgg5biD5bGA5rKh5pyJ5oSP5LmJXG4gICAgICAgIGlmICghY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBbXTtcbiAgICAgICAgLy8g5aaC5p6c5piv57q15ZCR55qEIOi/memHjOWPr+S7peS4jeS9v+eUqCBmbGV4IOW4g+WxgFxuICAgICAgICBpZiAobGF5b3V0TW9kZSA9PT0gJ1ZFUlRJQ0FMJykge1xuICAgICAgICAgICAgLy8g5b2T5piv57q15ZCR5biD5bGA5b2T5pe25YCZXG4gICAgICAgICAgICBjbGFzc05hbWUucHVzaCh7XG4gICAgICAgICAgICAgICAgLy8gXCJNSU5cIjogXCJcIixcbiAgICAgICAgICAgICAgICBcIkNFTlRFUlwiOiBcInRhY1wiLFxuICAgICAgICAgICAgICAgIFwiTUFYXCI6IFwidGFyXCIsXG4gICAgICAgICAgICAgICAgLy8gXCJTUEFDRV9CRVRXRUVOXCI6IFwiamNzYlwiLFxuICAgICAgICAgICAgfVtjb3VudGVyQXhpc0FsaWduSXRlbXNdKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZS5wdXNoKHtcbiAgICAgICAgICAgICAgICAvLyBcIk1JTlwiOiBcIlwiLFxuICAgICAgICAgICAgICAgIFwiQ0VOVEVSXCI6IFwiamNjXCIsXG4gICAgICAgICAgICAgICAgXCJNQVhcIjogXCJqY2ZlXCIsXG4gICAgICAgICAgICAgICAgXCJTUEFDRV9CRVRXRUVOXCI6IFwiamNzYlwiLFxuICAgICAgICAgICAgfVtwcmltYXJ5QXhpc0FsaWduSXRlbXNdIHx8IFwiXCIpO1xuICAgICAgICAgICAgY2xhc3NOYW1lLnB1c2goe1xuICAgICAgICAgICAgICAgIC8vXCJNSU5cIjogXCJcIixcbiAgICAgICAgICAgICAgICBcIkNFTlRFUlwiOiBcImFpY1wiLFxuICAgICAgICAgICAgICAgIFwiTUFYXCI6IFwiYWlmZVwiLFxuICAgICAgICAgICAgfVtjb3VudGVyQXhpc0FsaWduSXRlbXNdIHx8IFwiXCIpO1xuICAgICAgICAgICAgY2xhc3NOYW1lLnB1c2goJ2RmJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNsYXNzTmFtZTtcbiAgICB9LFxuICAgIGdldEluZm9Gcm9tUGFyZW50OiAobm9kZSkgPT4ge1xuICAgICAgICBjb25zdCBwYXJlbnQgPSBub2RlLnBhcmVudDtcbiAgICAgICAgaWYgKCFwYXJlbnQgfHwgIUZMRVguaXNGbGV4KHBhcmVudCkpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgY29uc3QgeyBsYXlvdXRNb2RlLCBwcmltYXJ5QXhpc0FsaWduSXRlbXMsIGl0ZW1TcGFjaW5nIH0gPSBwYXJlbnQ7XG4gICAgICAgIC8vIOS4pOerr+S4pOerr+Wvuem9kOihqOekuuS4jemcgOimgei/meS6m1xuICAgICAgICBpZiAocHJpbWFyeUF4aXNBbGlnbkl0ZW1zID09PSBcIlNQQUNFX0JFVFdFRU5cIikge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gW107XG4gICAgICAgIGNvbnN0IGlnbm9yZUNsYXNzTmFtZSA9IFtdO1xuICAgICAgICBjb25zdCB7IGlkID0gJycgfSA9IHBhcmVudC5jaGlsZHJlbi5maWx0ZXIoYyA9PiBjLnZpc2libGUpLnBvcCgpIHx8IHt9O1xuICAgICAgICBjb25zdCBpc0xhc3RDaGlsZHJlbiA9IGlkID09PSBub2RlLmlkO1xuICAgICAgICAvLyDniLblhYPntKDmmK/nurXlkJHnmoRmbGV4IOW4g+WxgO+8jOWboOS4uuW/veeVpeaOieS6hiBkZlxuICAgICAgICAvLyDov5nph4zorqnoh6rlt7HmnIkgZGIg5a6e546w57q15ZCR5biD5bGAXG4gICAgICAgIGlmIChsYXlvdXRNb2RlID09PSAnVkVSVElDQUwnKSB7XG4gICAgICAgICAgICBjbGFzc05hbWUucHVzaCgnZGInKTtcbiAgICAgICAgfVxuICAgICAgICAvLyDkuLrlrZDlhYPntKDmt7vliqDpl7Tot51cbiAgICAgICAgaWYgKGl0ZW1TcGFjaW5nID4gMCAmJiAhaXNMYXN0Q2hpbGRyZW4pIHtcbiAgICAgICAgICAgIGNvbnN0IGd1dHRlck1hcCA9IHtcbiAgICAgICAgICAgICAgICBcIlZFUlRJQ0FMXCI6IFwibWJcIixcbiAgICAgICAgICAgICAgICBcIkhPUklaT05UQUxcIjogXCJtclwiXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY2xhc3NOYW1lLnB1c2goU0FDU1MuYWRkKGd1dHRlck1hcFtsYXlvdXRNb2RlXSwgaXRlbVNwYWNpbmcpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobm9kZS5sYXlvdXRHcm93ID09PSAxKSB7XG4gICAgICAgICAgICBjbGFzc05hbWUucHVzaCgnZjEnKTtcbiAgICAgICAgICAgIGlnbm9yZUNsYXNzTmFtZS5wdXNoKGB3JHtub2RlLndpZHRofWApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjbGFzc05hbWUsXG4gICAgICAgICAgICBpZ25vcmVDbGFzc05hbWU6IGlnbm9yZUNsYXNzTmFtZVxuICAgICAgICB9O1xuICAgIH0sXG4gICAgZ2V0SW5mbzogKG5vZGUsIG5vZGVJbmZvKSA9PiB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgY29uc3QgYmFzZUNsYXNzTmFtZSA9IEZMRVguZ2V0VGhpc0luZm8obm9kZSkgfHwgW107XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgY29uc3QgeyBjbGFzc05hbWU6IGMyID0gW10sIGlnbm9yZUNsYXNzTmFtZTogaWMyID0gW10gfSA9IEZMRVguZ2V0SW5mb0Zyb21QYXJlbnQobm9kZSkgfHwge307XG4gICAgICAgIHJldHVybiBvYmpNZXJnZShub2RlSW5mbywge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiBbLi4uYmFzZUNsYXNzTmFtZSwgLi4uYzJdLFxuICAgICAgICAgICAgX2lnbm9yZUNsYXNzTmFtZTogaWMyXG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5leHBvcnQgZGVmYXVsdCBGTEVYO1xuIiwiaW1wb3J0IENPTkZJRyBmcm9tIFwiLi4vQ09ORklHXCI7XG5pbXBvcnQgb2JqTWVyZ2UgZnJvbSBcIi4uLy4uL3VpL3V0aWxzL29iak1lcmdlXCI7XG5jb25zdCBHUklEID0ge1xuICAgIGdldEluZm86IChub2RlLCBub2RlSW5mbykgPT4ge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IENPTkZJRy5nZXRJbmZvQnlJZChub2RlLmdyaWRTdHlsZUlkKTtcbiAgICAgICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgICAgICAgIHJldHVybiBub2RlSW5mbztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb2JqTWVyZ2Uobm9kZUluZm8sIHJlc3VsdCk7XG4gICAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IEdSSUQ7XG4iLCJpbXBvcnQgU0FDU1MgZnJvbSBcIi4uL1NBQ1NTXCI7XG5pbXBvcnQgb2JqTWVyZ2UgZnJvbSBcIi4uLy4uL3VpL3V0aWxzL29iak1lcmdlXCI7XG5jb25zdCBPVEhFUlMgPSB7XG4gICAgZ2VyQm9yZGVyUmFkaXVzQ2xhc3NOYW1lOiAobm9kZSkgPT4ge1xuICAgICAgICBjb25zdCB0bCA9IG5vZGUudG9wTGVmdFJhZGl1cyB8fCAwO1xuICAgICAgICBjb25zdCB0ciA9IG5vZGUudG9wUmlnaHRSYWRpdXMgfHwgMDtcbiAgICAgICAgY29uc3QgYnIgPSBub2RlLmJvdHRvbVJpZ2h0UmFkaXVzIHx8IDA7XG4gICAgICAgIGNvbnN0IGJsID0gbm9kZS5ib3R0b21MZWZ0UmFkaXVzIHx8IDA7XG4gICAgICAgIC8vIOWFqOmDqOS4uiAwXG4gICAgICAgIGlmICgodGwgKyB0ciArIGJyICsgYmwpID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cbiAgICAgICAgLy8g5aaC5p6c5Zub5Liq5YC86YO955u4562JXG4gICAgICAgIGlmICgodGwgPT09IHRyKSAmJiAodGwgPT09IGJyKSAmJiAodGwgPT09IGJsKSkge1xuICAgICAgICAgICAgcmV0dXJuIFtTQUNTUy5hZGQoJ2JyJywgdGwpXTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBbXTtcbiAgICAgICAgdGwgJiYgY2xhc3NOYW1lLnB1c2goU0FDU1MuYWRkKCdidGxyJywgdGwpKTtcbiAgICAgICAgdHIgJiYgY2xhc3NOYW1lLnB1c2goU0FDU1MuYWRkKCdidHJyJywgdHIpKTtcbiAgICAgICAgYnIgJiYgY2xhc3NOYW1lLnB1c2goU0FDU1MuYWRkKCdiYnJyJywgYnIpKTtcbiAgICAgICAgYmwgJiYgY2xhc3NOYW1lLnB1c2goU0FDU1MuYWRkKCdiYmxyJywgYmwpKTtcbiAgICAgICAgcmV0dXJuIGNsYXNzTmFtZTtcbiAgICB9LFxuICAgIGdldFBhZGRpbmdDbGFzc05hbWU6IChub2RlKSA9PiB7XG4gICAgICAgIC8vIOS8muW/veeVpeaOiSAx5YOP57Sg55qEIHBhZGRpbmdcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIG5vZGUucGFkZGluZ1RvcCA+IDEgPyBTQUNTUy5hZGQoJ3B0Jywgbm9kZS5wYWRkaW5nVG9wKSA6ICcnLFxuICAgICAgICAgICAgbm9kZS5wYWRkaW5nUmlnaHQgPiAxID8gU0FDU1MuYWRkKCdwcicsIG5vZGUucGFkZGluZ1JpZ2h0KSA6ICcnLFxuICAgICAgICAgICAgbm9kZS5wYWRkaW5nQm90dG9tID4gMSA/IFNBQ1NTLmFkZCgncGInLCBub2RlLnBhZGRpbmdCb3R0b20pIDogJycsXG4gICAgICAgICAgICBub2RlLnBhZGRpbmdMZWZ0ID4gMSA/IFNBQ1NTLmFkZCgncGwnLCBub2RlLnBhZGRpbmdMZWZ0KSA6ICcnLFxuICAgICAgICBdO1xuICAgIH0sXG4gICAgZ2V0SW5mbzogKG5vZGUsIG5vZGVJbmZvKSA9PiB7XG4gICAgICAgIGNvbnN0IHBhZGRpbmcgPSBPVEhFUlMuZ2V0UGFkZGluZ0NsYXNzTmFtZShub2RlKTtcbiAgICAgICAgY29uc3QgcmFkaXVzID0gT1RIRVJTLmdlckJvcmRlclJhZGl1c0NsYXNzTmFtZShub2RlKTtcbiAgICAgICAgcmV0dXJuIG9iak1lcmdlKG5vZGVJbmZvLCB7XG4gICAgICAgICAgICBjbGFzc05hbWU6IFsuLi5wYWRkaW5nLCAuLi5yYWRpdXNdXG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5leHBvcnQgZGVmYXVsdCBPVEhFUlM7XG4iLCJpbXBvcnQgQ09ORklHIGZyb20gXCIuLi9DT05GSUdcIjtcbmltcG9ydCBvYmpNZXJnZSBmcm9tIFwiLi4vLi4vdWkvdXRpbHMvb2JqTWVyZ2VcIjtcbmNvbnN0IFNUUk9LRSA9IHtcbiAgICAvLyDmlofmnKznu4Tku7ZcbiAgICBnZXRJbmZvOiAobm9kZSwgbm9kZUluZm8pID0+IHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBjb25zdCByZXN1bHQgPSBDT05GSUcuZ2V0SW5mb0J5SWQobm9kZS5zdHJva2VTdHlsZUlkKTtcbiAgICAgICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgICAgICAgIHJldHVybiBub2RlSW5mbztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb2JqTWVyZ2Uobm9kZUluZm8sIHJlc3VsdCk7XG4gICAgfSxcbn07XG5leHBvcnQgZGVmYXVsdCBTVFJPS0U7XG4iLCJpbXBvcnQgQ09ORklHIGZyb20gXCIuLi9DT05GSUdcIjtcbmltcG9ydCBTQUNTUyBmcm9tIFwiLi4vU0FDU1NcIjtcbmltcG9ydCBvYmpNZXJnZSBmcm9tIFwiLi4vLi4vdWkvdXRpbHMvb2JqTWVyZ2VcIjtcbi8vIEB0cy1pZ25vcmVcbmNvbnN0IFRFWFQgPSB7XG4gICAgdW5pdE1hcDoge1xuICAgICAgICAnUEVSQ0VOVCc6ICclJ1xuICAgICAgICAvLyBcIlBJWEVMU1wiOlwiXCJcbiAgICB9LFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBnZXRGb250TmFtZUNsYXNzQnlTdHlsZTogKHN0eWxlKSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2Ygc3R5bGUgIT09ICdzdHJpbmcnIHx8ICFzdHlsZSkge1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGZvbnRNYXAgPSB7XG4gICAgICAgICAgICBcIlVMVFJBTElHSFRcIjogXCJmdzEwMFwiLFxuICAgICAgICAgICAgXCJUSElOXCI6ICdmdzIwMCcsXG4gICAgICAgICAgICBcIkxJR0hUXCI6IFwiZnczMDBcIixcbiAgICAgICAgICAgIFwiUkVHVUxBUlwiOiBcIlwiLFxuICAgICAgICAgICAgXCJNRURJVU1cIjogXCJmdzUwMFwiLFxuICAgICAgICAgICAgXCJTRU1JQk9MRFwiOiBcImZ3NjAwXCIsXG4gICAgICAgICAgICBcIkJPTERcIjogXCJmdzcwMFwiLFxuICAgICAgICAgICAgXCJCTEFDS1wiOiBcImZ3OTAwXCIsXG4gICAgICAgICAgICBcIklUQUxJQ1wiOiBcImZzaVwiLFxuICAgICAgICAgICAgXCJPQkxJUVVFXCI6IFwiZnNpXCJcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gc3R5bGUuc3BsaXQoJyAnKS5tYXAoKGl0ZW0pID0+IGZvbnRNYXBbaXRlbS50b1VwcGVyQ2FzZSgpXSB8fCAnJyk7XG4gICAgICAgIHJldHVybiBjbGFzc05hbWUuZmlsdGVyKGl0ZW0gPT4gaXRlbSkuam9pbignICcpO1xuICAgIH0sXG4gICAgZ2V0UHJvcEJ5Tm9kZTogKG5vZGUsIG5hbWUpID0+IHtcbiAgICAgICAgY29uc3QgbmFtZU1hcCA9IHtcbiAgICAgICAgICAgICd0ZXh0Q2FzZSc6ICdnZXRSYW5nZVRleHRDYXNlJyxcbiAgICAgICAgICAgICdsaW5lSGVpZ2h0JzogJ2dldFJhbmdlTGluZUhlaWdodCcsXG4gICAgICAgICAgICAnbGV0dGVyU3BhY2luZyc6ICdnZXRSYW5nZUxldHRlclNwYWNpbmcnLFxuICAgICAgICAgICAgJ2ZvbnRTaXplJzogJ2dldFJhbmdlRm9udFNpemUnLFxuICAgICAgICAgICAgJ3RleHREZWNvcmF0aW9uJzogJ2dldFJhbmdlVGV4dERlY29yYXRpb24nLFxuICAgICAgICAgICAgJ2ZvbnROYW1lJzogJ2dldFJhbmdlRm9udE5hbWUnLFxuICAgICAgICAgICAgJ2ZpbGxzJzogJ2dldFJhbmdlRmlsbHMnLFxuICAgICAgICAgICAgJ3RleHRTdHlsZUlkJzogJ2dldFJhbmdlVGV4dFN0eWxlSWQnXG4gICAgICAgIH07XG4gICAgICAgIGlmICh0eXBlb2Ygbm9kZVtuYW1lXSA9PT0gJ3N5bWJvbCcgJiYgbmFtZU1hcFtuYW1lXSAmJiB0eXBlb2Ygbm9kZVtuYW1lTWFwW25hbWVdXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgcmV0dXJuIG5vZGVbbmFtZU1hcFtuYW1lXV0oMCwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5vZGVbbmFtZV07XG4gICAgfSxcbiAgICBnZXRBQ1NTU0luZm86IChub2RlKSA9PiB7XG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IFtdO1xuICAgICAgICAvLyDmloflrZflpKflsI9cbiAgICAgICAgY29uc3QgZm9udFNpemUgPSBURVhULmdldFByb3BCeU5vZGUobm9kZSwgJ2ZvbnRTaXplJyk7XG4gICAgICAgIGlmIChmb250U2l6ZSA+IDEpIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZS5wdXNoKFNBQ1NTLmFkZCgnZnMnLCBmb250U2l6ZSkpO1xuICAgICAgICB9XG4gICAgICAgIC8vIOihjOmrmFxuICAgICAgICBjb25zdCBsaW5lSGVpZ2h0ID0gVEVYVC5nZXRQcm9wQnlOb2RlKG5vZGUsICdsaW5lSGVpZ2h0Jyk7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgaWYgKGxpbmVIZWlnaHQgPT09IG51bGwgfHwgbGluZUhlaWdodCA9PT0gdm9pZCAwID8gdm9pZCAwIDogbGluZUhlaWdodC52YWx1ZSkge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgY29uc3QgeyB2YWx1ZSwgdW5pdCB9ID0gbGluZUhlaWdodDtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIGNsYXNzTmFtZS5wdXNoKFNBQ1NTLmFkZCgnbGgnLCB2YWx1ZSwgVEVYVC51bml0TWFwW3VuaXRdKSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8g5a2X6Ze06LedXG4gICAgICAgIGNvbnN0IGxldHRlclNwYWNpbmcgPSBURVhULmdldFByb3BCeU5vZGUobm9kZSwgJ2xldHRlclNwYWNpbmcnKTtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBpZiAobGV0dGVyU3BhY2luZyA9PT0gbnVsbCB8fCBsZXR0ZXJTcGFjaW5nID09PSB2b2lkIDAgPyB2b2lkIDAgOiBsZXR0ZXJTcGFjaW5nLnZhbHVlKSB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBjb25zdCB7IHZhbHVlLCB1bml0IH0gPSBsZXR0ZXJTcGFjaW5nO1xuICAgICAgICAgICAgY2xhc3NOYW1lLnB1c2goU0FDU1MuYWRkKCdscycsIHZhbHVlLCBURVhULnVuaXRNYXBbdW5pdF0pKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBmb250TmFtZSA9IFRFWFQuZ2V0UHJvcEJ5Tm9kZShub2RlLCAnZm9udE5hbWUnKTtcbiAgICAgICAgLy8gZm9udC13ZWlnaHQgZm9udC1zdHlsZVxuICAgICAgICBjb25zdCBmbkNsYXNzID0gVEVYVC5nZXRGb250TmFtZUNsYXNzQnlTdHlsZShmb250TmFtZS5zdHlsZSk7XG4gICAgICAgIGZuQ2xhc3MgJiYgY2xhc3NOYW1lLnB1c2goZm5DbGFzcyk7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgaWYgKGZvbnROYW1lID09PSBudWxsIHx8IGZvbnROYW1lID09PSB2b2lkIDAgPyB2b2lkIDAgOiBmb250TmFtZS5mYW1pbHkpIHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIGNsYXNzTmFtZS5wdXNoKFNBQ1NTLmFkZEZvbnRGYW1pbHkoZm9udE5hbWUuZmFtaWx5KSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gdGV4dC1hbGlnblxuICAgICAgICBjb25zdCB0YUNsYXNzID0ge1xuICAgICAgICAgICAgXCJMRUZUXCI6ICcnLFxuICAgICAgICAgICAgXCJDRU5URVJcIjogJ3RhYycsXG4gICAgICAgICAgICBcIlJJR0hUXCI6ICd0YXInLFxuICAgICAgICAgICAgXCJKVVNUSUZJRURcIjogJ3RhaicsXG4gICAgICAgIH1bbm9kZS50ZXh0QWxpZ25Ib3Jpem9udGFsXTtcbiAgICAgICAgdGFDbGFzcyAmJiBjbGFzc05hbWUucHVzaCh0YUNsYXNzKTtcbiAgICAgICAgLy8gdmVydGljYWwtYWxpZ25cbiAgICAgICAgY29uc3QgdmFDbGFzcyA9IHtcbiAgICAgICAgICAgIFwiVE9QXCI6ICcnLFxuICAgICAgICAgICAgXCJDRU5URVJcIjogJ3ZhbScsXG4gICAgICAgICAgICBcIkJPVFRPTVwiOiAndmFiJyxcbiAgICAgICAgfVtub2RlLnRleHRBbGlnblZlcnRpY2FsXTtcbiAgICAgICAgdmFDbGFzcyAmJiBjbGFzc05hbWUucHVzaCh2YUNsYXNzKTtcbiAgICAgICAgY29uc3QgdGV4dENhc2UgPSBURVhULmdldFByb3BCeU5vZGUobm9kZSwgJ3RleHRDYXNlJyk7XG4gICAgICAgIC8vIHR0XG4gICAgICAgIGNvbnN0IHR0Q2xhc3MgPSB7XG4gICAgICAgICAgICBcIk9SSUdJTkFMXCI6ICcnLFxuICAgICAgICAgICAgXCJVUFBFUlwiOiAndHR1JyxcbiAgICAgICAgICAgIFwiTE9XRVJcIjogJ3R0bCcsXG4gICAgICAgICAgICBcIlRJVExFXCI6ICd0dGMnLFxuICAgICAgICB9W3RleHRDYXNlXTtcbiAgICAgICAgdHRDbGFzcyAmJiBjbGFzc05hbWUucHVzaCh0dENsYXNzKTtcbiAgICAgICAgY29uc3QgdGV4dERlY29yYXRpb24gPSBURVhULmdldFByb3BCeU5vZGUobm9kZSwgJ3RleHREZWNvcmF0aW9uJyk7XG4gICAgICAgIC8vIHRkXG4gICAgICAgIGNvbnN0IHRkQ2xhc3MgPSB7XG4gICAgICAgICAgICBcIk5PTkVcIjogXCJcIixcbiAgICAgICAgICAgIFwiVU5ERVJMSU5FXCI6ICd0ZHUnLFxuICAgICAgICAgICAgXCJTVFJJS0VUSFJPVUdIXCI6ICd0ZGwnXG4gICAgICAgIH1bdGV4dERlY29yYXRpb25dO1xuICAgICAgICB0ZENsYXNzICYmIGNsYXNzTmFtZS5wdXNoKHRkQ2xhc3MpO1xuICAgICAgICBjb25zdCBzdHJDbGFzc05hbWUgPSBjbGFzc05hbWUuam9pbignICcpO1xuICAgICAgICBjb25zdCBpc1N0cm9uZyA9IFsnZnc1MDAnLCAnZnc2MDAnLCAnZnc3MDAnLCAnZnc4MDAnLCAnZnc5MDAnXS5maW5kSW5kZXgoKGl0ZW0pID0+IHN0ckNsYXNzTmFtZS5pbmRleE9mKGl0ZW0pID4gLTEpID4gLTE7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjbGFzc05hbWUsXG4gICAgICAgICAgICB0YWdOYW1lOiBpc1N0cm9uZyA/ICdzdHJvbmcnIDogJ3NwYW4nXG4gICAgICAgIH07XG4gICAgfSxcbiAgICBnZXRUZXh0Q2hpbGRyZW46IChub2RlKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgY2hhcmFjdGVycyA9ICcnIH0gPSBub2RlO1xuICAgICAgICBjb25zdCBsZWdhbFAgPSBjaGFyYWN0ZXJzLnNwbGl0KCdcXG4nKS5maWx0ZXIoaXRlbSA9PiBpdGVtLnRyaW0oKSk7XG4gICAgICAgIC8vIOacieWbnui9puihqOekuuWkmuauteiQvVxuICAgICAgICBpZiAobGVnYWxQLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIGNvbnN0IG1iQ2xhc3MgPSBub2RlLnBhcmFncmFwaFNwYWNpbmcgPiAwID8gU0FDU1MuYWRkKCdtYicsIG5vZGUucGFyYWdyYXBoU3BhY2luZykgOiAnJztcbiAgICAgICAgICAgIGNvbnN0IHBzID0gbGVnYWxQLm1hcCgoaXRlbSwga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXNMYXN0ID0ga2V5ID09PSBsZWdhbFAubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICB0YWdOYW1lOiAncCcsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogaXNMYXN0ID8gJycgOiBtYkNsYXNzLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW2l0ZW1dXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHBzO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbY2hhcmFjdGVyc107XG4gICAgfSxcbiAgICAvLyDmlofmnKznu4Tku7ZcbiAgICBnZXRJbmZvOiAobm9kZSwgbm9kZUluZm8gPSB7fSkgPT4ge1xuICAgICAgICBpZiAobm9kZS50eXBlICE9PSAnVEVYVCcpIHtcbiAgICAgICAgICAgIHJldHVybiBub2RlSW5mbztcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpZCA9IFRFWFQuZ2V0UHJvcEJ5Tm9kZShub2RlLCAndGV4dFN0eWxlSWQnKTtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBjb25zdCBnZXRJbmZvID0gQ09ORklHLmdldEluZm9CeUlkKGlkKTtcbiAgICAgICAgaWYgKGdldEluZm8pIHtcbiAgICAgICAgICAgIHJldHVybiBvYmpNZXJnZShub2RlSW5mbywgZ2V0SW5mbyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYWNzc0luZm8gPSBURVhULmdldEFDU1NTSW5mbyhub2RlKTtcbiAgICAgICAgcmV0dXJuIG9iak1lcmdlKG5vZGVJbmZvLCBhY3NzSW5mbyk7XG4gICAgfSxcbn07XG5leHBvcnQgZGVmYXVsdCBURVhUO1xuIiwiaW1wb3J0IE5PREUgZnJvbSBcIi4vXy9OT0RFXCI7XG5pbXBvcnQgQ09ORklHIGZyb20gXCIuL18vQ09ORklHXCI7XG5pbXBvcnQgU0FDU1MgZnJvbSBcIi4vXy9TQUNTU1wiO1xuaW1wb3J0IERPTSBmcm9tIFwiLi9fL3JlbmRlci9ET01cIjtcbmltcG9ydCB0cnlPbGRDb25maWcgZnJvbSBcIi4vdWkvdXRpbHMvdHJ5T2xkQ29uZmlnLmpzXCI7XG5jb25zdCBBUEkgPSB7XG4gICAgLyoqXG4gICAgICog6buY6K6k5pi+56S6IGhvbWVcbiAgICAgKi9cbiAgICB0YWJJbmRleDogMCxcbiAgICAvKipcbiAgICAgKiDojrflj5bnlKjmiLfpgInkuK3nmoTlm77lsYJcbiAgICAgKi9cbiAgICBnZXRTZWxlY3Rpb246ICgpID0+IHtcbiAgICAgICAgY29uc3Qgc2VsZWN0aW9uID0gZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhzZWxlY3Rpb24pO1xuICAgICAgICBpZiAoIXNlbGVjdGlvbi5sZW5ndGgpIHtcbiAgICAgICAgICAgIC8vIOayoeaciemAieaLqeS7u+S9leWFg+e0oFxuICAgICAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2UoeyBub1NlbGVjdGlvbjogdHJ1ZSB9KTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzZWxlY3Rpb25bMF07XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiDlvZMgVGFiIOWIh+aNoueahOaXtuWAmeS8muWHuuWPkei/meS4quaWueazlVxuICAgICAqIEBwYXJhbSBpbmRleFxuICAgICAqL1xuICAgIG9uVGFiQ2hhbmdlOiAoaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgYmVmb3JlSW5kZXggPSBBUEkudGFiSW5kZXg7XG4gICAgICAgIEFQSS50YWJJbmRleCA9IGluZGV4O1xuICAgICAgICAvLyDlpoLmnpzlj6rmmK/lnKggSFRNTCDlkowgQUNTUyDkuYvliY3liIfmjaJcbiAgICAgICAgaWYgKChiZWZvcmVJbmRleCA9PT0gMCB8fCBiZWZvcmVJbmRleCA9PT0gMSkgJiYgKGluZGV4ID09PSAwIHx8IGluZGV4ID09PSAxKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFjdGlvbk1hcCA9IFsncnVuSG9tZScsICdydW5Ib21lJywgJ3J1blRva2VuJywgJ3J1bkNvbmZpZyddO1xuICAgICAgICBjb25zdCBhY3Rpb24gPSBhY3Rpb25NYXBbaW5kZXhdO1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnb25UYWJDaGFuZ2UnLCBhY3Rpb24pO1xuICAgICAgICBhY3Rpb24gJiYgQVBJW2FjdGlvbl0oKTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIOinpuWPkVxuICAgICAqL1xuICAgIHJ1bjogKCkgPT4ge1xuICAgICAgICBjb25zdCBhY3Rpb25NYXAgPSBbJ3J1bkhvbWUnLCAncnVuSG9tZScsICdydW5Ub2tlbicsICcnXTtcbiAgICAgICAgY29uc3QgYWN0aW9uID0gYWN0aW9uTWFwW0FQSS50YWJJbmRleF07XG4gICAgICAgIGlmICghYWN0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgQVBJW2FjdGlvbl0oKTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIOaYvuekuuesrOS4gOWxj1xuICAgICAqL1xuICAgIHJ1bkhvbWU6ICgpID0+IHtcbiAgICAgICAgY29uc3Qgc2VsZWN0aW9uID0gQVBJLmdldFNlbGVjdGlvbigpO1xuICAgICAgICBpZiAoIXNlbGVjdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIFNBQ1NTLmluaXQoKTtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBjb25zdCBJbmZvID0gTk9ERS5nZXROb2RlSW5mbyhzZWxlY3Rpb24pO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhJbmZvKTtcbiAgICAgICAgY29uc3QgaXNKU1ggPSBDT05GSUcuaXNKU1goKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICAgICAgZ2V0SFRNTDogRE9NLnJlbmRlcihJbmZvLCBpc0pTWCksXG4gICAgICAgICAgICAgICAgZ2V0Q1NTOiBTQUNTUy5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgICAgICBpc0pTWCxcbiAgICAgICAgICAgICAgICBub1NlbGVjdGlvbjogZmFsc2VcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCAxNik7XG4gICAgfSxcbiAgICBydW5Db25maWc6ICgpID0+IHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICAgICAgZ2V0Q29uZmlnOiBDT05GSUcuZ2V0Q3VycmVudCgpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSwgMTApO1xuICAgIH0sXG4gICAgcnVuVG9rZW46ICgpID0+IHtcbiAgICAgICAgY29uc3Qgc2VsZWN0aW9uID0gQVBJLmdldFNlbGVjdGlvbigpO1xuICAgICAgICBpZiAoIXNlbGVjdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgIHNlbGVjdGlvblRva2VuczogQ09ORklHLmdldFNlbGVjdGlvblRva2VucyhzZWxlY3Rpb24pLFxuICAgICAgICAgICAgICAgIG5vU2VsZWN0aW9uOiBmYWxzZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIDE2KTtcbiAgICB9LFxuICAgIG9ubWVzc2FnZTogKG1zZyA9IHt9KSA9PiB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgY29uc3QgeyB0eXBlID0gbnVsbCwgdmFsdWUgPSBudWxsIH0gPSBtc2c7XG4gICAgICAgIGlmICh0eXBlID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8g5bCd6K+V5qOA5rWL5pen5Luj56CBXG4gICAgICAgIGlmICh0eXBlID09PSAndGVzdE9sZENvbmZpZycpIHtcbiAgICAgICAgICAgIHRyeU9sZENvbmZpZygpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IFtuYW1lLCBhY3Rpb25dID0gdHlwZS5zcGxpdCgnLicpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnQVBJIG9ubWVzc2FnZScsIG5hbWUsIGFjdGlvbiwgdmFsdWUpO1xuICAgICAgICBpZiAobmFtZSA9PT0gJ0FQSScgJiYgKGFjdGlvbiBpbiBBUEkpKSB7XG4gICAgICAgICAgICBBUElbYWN0aW9uXSh2YWx1ZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5hbWUgPT09ICdDT05GSUcnICYmIChhY3Rpb24gaW4gQ09ORklHKSkge1xuICAgICAgICAgICAgQ09ORklHW2FjdGlvbl0odmFsdWUpO1xuICAgICAgICAgICAgLy8g5Li65LqG6Kem5Y+R6YeN5paw5riy5p+TXG4gICAgICAgICAgICBpZiAoYWN0aW9uID09PSAnY2hhbmdlSlNYJykge1xuICAgICAgICAgICAgICAgIEFQSS5ydW5Ib21lKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8g5Li65LqG6Kem5Y+R6YeN5paw5riy5p+TXG4gICAgICAgICAgICBpZiAoYWN0aW9uID09PSAnYWRkVG9rZW4nKSB7XG4gICAgICAgICAgICAgICAgQVBJLnJ1blRva2VuKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQVBJLnJ1bkNvbmZpZygpO1xuICAgICAgICB9XG4gICAgfVxufTtcbi8vIFRoaXMgcGx1Z2luIHdpbGwgb3BlbiBhIHdpbmRvdyB0byBwcm9tcHQgdGhlIHVzZXIgdG8gZW50ZXIgYSBudW1iZXIsIGFuZFxuLy8gaXQgd2lsbCB0aGVuIGNyZWF0ZSB0aGF0IG1hbnkgcmVjdGFuZ2xlcyBvbiB0aGUgc2NyZWVuLlxuLy8gVGhpcyBmaWxlIGhvbGRzIHRoZSBtYWluIGNvZGUgZm9yIHRoZSBwbHVnaW5zLiBJdCBoYXMgYWNjZXNzIHRvIHRoZSAqZG9jdW1lbnQqLlxuLy8gWW91IGNhbiBhY2Nlc3MgYnJvd3NlciBBUElzIGluIHRoZSA8c2NyaXB0PiB0YWcgaW5zaWRlIFwidWkuaHRtbFwiIHdoaWNoIGhhcyBhXG4vLyBmdWxsIGJyb3dzZXIgZW52aXJvbm1lbnQgKHNlZSBkb2N1bWVudGF0aW9uKS5cbkNPTkZJRy5pbml0KCkudGhlbigoKSA9PiB7XG4gICAgLy8gVGhpcyBzaG93cyB0aGUgSFRNTCBwYWdlIGluIFwidWkuaHRtbFwiLlxuICAgIGZpZ21hLnNob3dVSShfX2h0bWxfXywgeyB3aWR0aDogNDAwLCBoZWlnaHQ6IDYwMCB9KTtcbiAgICBBUEkucnVuKCk7XG4gICAgZmlnbWEub24oXCJzZWxlY3Rpb25jaGFuZ2VcIiwgKCkgPT4ge1xuICAgICAgICBBUEkucnVuKCk7XG4gICAgfSk7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGZpZ21hLnVpLm9ubWVzc2FnZSA9IEFQSS5vbm1lc3NhZ2U7XG59KTtcbiIsImZ1bmN0aW9uIG9iak1lcmdlKGEgPSB7fSwgYikge1xuICAgIGNvbnN0IHJlc3VsdCA9IGE7XG4gICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoYikpIHtcbiAgICAgICAgY29uc3QgaXRlbSA9IGFba2V5XTtcbiAgICAgICAgaWYgKCFpdGVtIHx8ICF2YWx1ZSkge1xuICAgICAgICAgICAgcmVzdWx0W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfSBlbHNlIGlmICgoaXRlbSBpbnN0YW5jZW9mIEFycmF5KSAmJiAodmFsdWUgaW5zdGFuY2VvZiBBcnJheSkpIHtcbiAgICAgICAgICAgIHJlc3VsdFtrZXldID0gWy4uLml0ZW0sIC4uLnZhbHVlXTtcbiAgICAgICAgfSBlbHNlIGlmIChpdGVtICYmIGl0ZW0gaW5zdGFuY2VvZiBPYmplY3QpIHtcbiAgICAgICAgICAgIHJlc3VsdFtrZXldID0gb2JqTWVyZ2UoaXRlbSwgdmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzdWx0W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgb2JqTWVyZ2U7IiwiY29uc3QgdHJ5T2xkQ29uZmlnID0gKCkgPT4ge1xuICAgIC8vIOWwneivleiOt+WPllxuICAgIGZpZ21hLmNsaWVudFN0b3JhZ2UuZ2V0QXN5bmMoXCJTQUNTU1wiKS50aGVuKChyZXQgPSB7fSkgPT4ge1xuICAgICAgICBjb25zdCB7cHJvamVjdHN9ID0gcmV0O1xuICAgICAgICBpZiAocHJvamVjdHMgJiYgcHJvamVjdHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJTQUNTU1wiLCByZXQpO1xuICAgICAgICAgICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgICAgICAgICAgZ2V0T2xkQ29uZmlnOiByZXRcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sIDE2KTtcbiAgICAgICAgfVxuICAgIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdHJ5T2xkQ29uZmlnOyJdLCJzb3VyY2VSb290IjoiIn0=