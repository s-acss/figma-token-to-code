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

/***/ "./src/_/ACSS.ts":
/*!***********************!*\
  !*** ./src/_/ACSS.ts ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var ACSS = {
  data: {},
  init: function init() {
    ACSS.data = {};
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
    var data = ACSS.data;
    var keys = Object.keys(data).sort();
    var result = keys.map(function (name) {
      return ".".concat(ACSS.getClassSelectorByName(name), "{").concat(data[name], ";}");
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

    var propName = ACSS.nameMap[name];

    if (!propName) {
      return '';
    } // 只保留两位小数


    var useValue = Number(value) ? parseFloat(Number(value).toFixed(2)) : value; // 如果是 px 不需要渲染

    var classUnit = unit === 'px' ? '' : unit;
    var className = "".concat(name).concat(useValue).concat(classUnit);
    ACSS.data[className] = "".concat(propName, ":").concat(useValue).concat(unit);
    return className;
  },
  addFontFamily: function addFontFamily(value) {
    if (!value) {
      return '';
    }

    var className = "ff:".concat(value.toLowerCase());
    ACSS.data[className] = "font-family:\"".concat(value, "\"");
    return className;
  },
  addColor: function addColor() {
    var rgba = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    if (!rgba && rgba.length) {
      return '';
    }

    var className = "c:".concat(rgba.join(''));
    ACSS.data[className] = "color:rgba(".concat(rgba.join(','), ")");
    return className;
  },
  addBgColor: function addBgColor() {
    var rgba = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    if (!rgba && rgba.length) {
      return '';
    }

    var className = "bc:".concat(rgba.join(''));
    ACSS.data[className] = "background-color:rgba(".concat(rgba.join(','), ")");
    return className;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (ACSS);

/***/ }),

/***/ "./src/_/COMPONENT.ts":
/*!****************************!*\
  !*** ./src/_/COMPONENT.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CONFIG__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CONFIG */ "./src/_/CONFIG.ts");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var COMPONENT = {
  isVariant: function isVariant(node) {
    var _a, _b; // @ts-ignore


    return ((_b = (_a = node.mainComponent) === null || _a === void 0 ? void 0 : _a.parent) === null || _b === void 0 ? void 0 : _b.type) === 'COMPONENT_SET';
  },
  isComponent: function isComponent(node) {
    return node.type === 'INSTANCE' || node.type === 'COMPONENT';
  },
  getMainComponent: function getMainComponent(node) {
    if (node.type === 'COMPONENT') {
      return node;
    } // @ts-ignore


    var isVariant = COMPONENT.isVariant(node); // console.log(node, {isVariant});

    return isVariant ? node.mainComponent.parent : node.mainComponent;
  },
  getComponentId: function getComponentId(node) {
    var _ref = COMPONENT.getMainComponent(node) || {},
        _ref$id = _ref.id,
        id = _ref$id === void 0 ? '' : _ref$id;

    return id;
  },
  getComponentName: function getComponentName(node) {
    var _COMPONENT$getMainCom = COMPONENT.getMainComponent(node),
        _COMPONENT$getMainCom2 = _COMPONENT$getMainCom.name,
        name = _COMPONENT$getMainCom2 === void 0 ? '' : _COMPONENT$getMainCom2;

    if (!name) {
      return '';
    }

    var strName = name.replace(/[\W]/g, '');
    return strName.charAt(0).toUpperCase() + strName.slice(1);
  },
  getComponentProps: function getComponentProps(node) {
    // console.log('getComponentProps', node);
    var isVariant = COMPONENT.isVariant(node); // 没有变体表示没有 props

    if (!isVariant) {
      return {};
    }

    var name = node.mainComponent.name;
    var props = {};

    if (typeof name === 'string' && name.indexOf('=') > -1) {
      name.split(",").forEach(function (item) {
        var _item$split = item.split("="),
            _item$split2 = _slicedToArray(_item$split, 2),
            key = _item$split2[0],
            value = _item$split2[1]; // false 表示没有这个值 不做处理


        if (value === "false") {
          return;
        }

        props[key.trim()] = value.trim();
      });
    }

    return props;
  },
  getInfo: function getInfo(node) {
    // @ts-ignore
    var id = COMPONENT.getComponentId(node);
    var matchToken = _CONFIG__WEBPACK_IMPORTED_MODULE_0__["default"].getInfoById(id); // console.log(id, matchToken, node);

    if (!matchToken) {
      return null;
    } // @ts-ignore


    matchToken.props = COMPONENT.getComponentProps(node);
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
var CONFIG_DEFAULT = {
  currentIndex: 0,
  isJSX: false,
  projects: []
};
var CONFIG = {
  key: 'SACSS',
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
      token: token
    });
    store.currentIndex = store.projects.length - 1;
    figma.clientStorage.setAsync(CONFIG.key, store);
  },
  changeProjectName: function changeProjectName(_ref2) {
    var name = _ref2.name,
        index = _ref2.index;
    var store = CONFIG.getAll();
    store.projects[index].name = name;
    figma.clientStorage.setAsync(CONFIG.key, store);
  },
  replaceProject: function replaceProject(_ref3) {
    var data = _ref3.data,
        index = _ref3.index;
    var store = CONFIG.getAll();
    store.projects[index] = data;
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
        CONFIG.store = ret || CONFIG_DEFAULT;
        resolve(CONFIG.getToken()); // 没有缓存创建一个新的

        !ret && figma.clientStorage.setAsync(CONFIG.key, CONFIG_DEFAULT);
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
  getInfoById: function getInfoById() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

    if (!id) {
      return null;
    }

    var tokenConfig = CONFIG.getToken() || {}; // 如果有自定义用自定义的

    return tokenConfig[id];
  },

  /**
   * 获取所有的 Token 包括 Component
   */
  getAllTokens: function getAllTokens() {
    /**
     * 组件的默认属性
     */
    var COMPONENT_DEFAULT = {
      classNames: [],
      componentName: '',
      stopRenderChildren: false,
      ignoreClassNames: []
    };
    /**
     * Token 默认属性
     */

    var TOKEN_DEFAULT = {
      classNames: [],
      ignoreClassNames: []
    };
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
      var template = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      data.forEach(function (item) {
        token[item.id] = Object.assign(Object.assign({}, template), {
          name: item.name,
          type: item.type
        });
      });
    };

    addConfig(components, COMPONENT_DEFAULT);
    addConfig(figma.getLocalPaintStyles(), TOKEN_DEFAULT);
    addConfig(figma.getLocalTextStyles(), TOKEN_DEFAULT);
    addConfig(figma.getLocalEffectStyles(), TOKEN_DEFAULT);
    addConfig(figma.getLocalGridStyles(), TOKEN_DEFAULT);
    figma.ui.postMessage({
      gotAllTokens: {
        name: name,
        ignoreClassNames: [],
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
/* harmony import */ var _ACSS__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ACSS */ "./src/_/ACSS.ts");
/* harmony import */ var _UTILS__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./UTILS */ "./src/_/UTILS.ts");
/* harmony import */ var _token_EFFECT__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./token/EFFECT */ "./src/_/token/EFFECT.ts");
/* harmony import */ var _token_OTHERS__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./token/OTHERS */ "./src/_/token/OTHERS.ts");
/* harmony import */ var _CONFIG__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./CONFIG */ "./src/_/CONFIG.ts");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

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

    var _a$classNames = a.classNames,
        classNamesA = _a$classNames === void 0 ? [] : _a$classNames,
        _a$ignoreClassNames = a.ignoreClassNames,
        ignoreClassNamesA = _a$ignoreClassNames === void 0 ? [] : _a$ignoreClassNames,
        _a$props = a.props,
        propsA = _a$props === void 0 ? {} : _a$props,
        restA = __rest(a, ["classNames", "ignoreClassNames", "props"]);

    var _b$classNames = b.classNames,
        classNamesB = _b$classNames === void 0 ? [] : _b$classNames,
        _b$ignoreClassNames = b.ignoreClassNames,
        ignoreClassNamesB = _b$ignoreClassNames === void 0 ? [] : _b$ignoreClassNames,
        _b$props = b.props,
        propsB = _b$props === void 0 ? {} : _b$props,
        children = b.children,
        restB = __rest(b, ["classNames", "ignoreClassNames", "props", "children"]);

    return Object.assign(Object.assign({
      props: Object.assign(Object.assign({}, propsA), propsB),
      classNames: [].concat(_toConsumableArray(classNamesA), _toConsumableArray(classNamesB)),
      ignoreClassNames: [].concat(_toConsumableArray(ignoreClassNamesA), _toConsumableArray(ignoreClassNamesB))
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
      return yesTypes.indexOf(item.type) === -1;
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
      // node,
      tagName: NODE.isBlockElement(node) ? 'div' : 'span',
      ignoreClassNames: [],
      classNames: [],
      children: []
    };
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
    nodeInfo = NODE.extendInfo(nodeInfo, others);

    if (isStructNode || (component === null || component === void 0 ? void 0 : component.componentName)) {
      nodeInfo.classNames.push(_ACSS__WEBPACK_IMPORTED_MODULE_6__["default"].add('h', parseInt(String(node.height))));
      nodeInfo.classNames.push(_ACSS__WEBPACK_IMPORTED_MODULE_6__["default"].add('w', parseInt(String(node.width))));
    }

    var _ref = component || {},
        _ref$stopRenderChildr = _ref.stopRenderChildren,
        stopRenderChildren = _ref$stopRenderChildr === void 0 ? false : _ref$stopRenderChildr; // 渲染子节点


    if (!stopRenderChildren && !isStructNode) {
      // @ts-ignore
      nodeInfo.children = node.type === 'TEXT' ? [node.characters] : NODE.getNodesInfo(node.children);
    } // 把 flex 间距添加到子元素


    nodeInfo.children = _token_FLEX__WEBPACK_IMPORTED_MODULE_5__["default"].addClassNodes(nodeInfo.children, flex === null || flex === void 0 ? void 0 : flex.gutterClass); // 整个项目都忽略的 classNames

    var _ref2 = _CONFIG__WEBPACK_IMPORTED_MODULE_10__["default"].getCurrent() || {},
        _ref2$ignoreClassName = _ref2.ignoreClassNames,
        ignoreClassNames = _ref2$ignoreClassName === void 0 ? [] : _ref2$ignoreClassName;

    nodeInfo.classNames = _UTILS__WEBPACK_IMPORTED_MODULE_7__["default"].clearStingArray(nodeInfo.classNames, [].concat(_toConsumableArray(nodeInfo.ignoreClassNames), _toConsumableArray(ignoreClassNames)));
    delete nodeInfo.ignoreClassNames;
    return nodeInfo;
  },

  /**
   * 获取 Tag Name
   * @param node
   */
  isBlockElement: function isBlockElement(node) {
    var parent = node.parent; // 没有父元素

    if (!parent) {
      return true;
    } // @ts-ignore
    // 和父元素宽度一样


    if (node.width === parent.width) {
      return true;
    } // 如果父元素是纵向 的 flex 布局
    // @ts-ignore


    if (parent.layoutMode !== "NONE") {
      return true;
    }

    return false;
  },
  sort: function sort() {
    var nodes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    return _toConsumableArray(nodes).sort(function (a, b) {
      if (a.y === b.y) {
        return a.x - b.x;
      }

      return a.y - b.y;
    });
  },
  getNodesInfo: function getNodesInfo() {
    var nodes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var info = []; // 需要排序一下

    var sortNodes = NODE.sort(nodes);

    for (var i = 0, len = sortNodes.length; i < len; i++) {
      var nodeInfo = NODE.getNodeInfo(sortNodes[i]);
      nodeInfo && info.push(nodeInfo);
    }

    return info;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (NODE);

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
  clearStingArray: function clearStingArray() {
    var arrStr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var arrIgnore = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

    if (!arrStr || !arrStr.length) {
      return [];
    }

    var result = [];
    arrStr.forEach(function (item) {
      if (item && result.indexOf(item) === -1 && arrIgnore.indexOf(item) === -1) {
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
/* harmony import */ var _getPropsArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getPropsArray */ "./src/_/render/getPropsArray.ts");


var HTML = {
  // @ts-ignore
  getItemDom: function getItemDom(item) {
    if (!item) {
      return '';
    }

    if (typeof item === 'string') {
      return item;
    }

    var _item$tagName = item.tagName,
        tagName = _item$tagName === void 0 ? 'i' : _item$tagName,
        _item$children = item.children,
        children = _item$children === void 0 ? [] : _item$children,
        _item$classNames = item.classNames,
        classNames = _item$classNames === void 0 ? [] : _item$classNames;
    var arrProps = Object(_getPropsArray__WEBPACK_IMPORTED_MODULE_1__["default"])({
      class: classNames.join(' ')
    });
    var tagStart = "".concat(tagName).concat(arrProps.length ? " ".concat(arrProps.join(' ')) : '');

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
/* harmony import */ var _getPropsArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getPropsArray */ "./src/_/render/getPropsArray.ts");


var JSX = {
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
        _item$props = item.props,
        props = _item$props === void 0 ? {} : _item$props,
        _item$classNames = item.classNames,
        classNames = _item$classNames === void 0 ? [] : _item$classNames;
    var tagName = item.componentName || item.tagName;
    var arrProps = Object(_getPropsArray__WEBPACK_IMPORTED_MODULE_1__["default"])(Object.assign(Object.assign({}, props), {
      className: classNames.filter(function (item) {
        return item;
      }).join(' ')
    }));
    var tagStart = "".concat(tagName).concat(arrProps.length ? " ".concat(arrProps.join(' ')) : '');

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

/***/ "./src/_/render/getPropsArray.ts":
/*!***************************************!*\
  !*** ./src/_/render/getPropsArray.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var getPropsArray = function getPropsArray() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var arrProps = [];

  for (var _i = 0, _Object$entries = Object.entries(props); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
        key = _Object$entries$_i[0],
        value = _Object$entries$_i[1];

    var item = function (key, value) {
      if (value === '' || value === false || value === 'false') {
        return '';
      }

      if (value === true || value === 'true') {
        return key;
      }

      if (typeof value === 'string' || typeof value === 'number') {
        return "".concat(key, "=\"").concat(value, "\"");
      }

      return "".concat(key, "={").concat(JSON.stringify(value), "}");
    }(key, value);

    item && arrProps.push(item);
  }

  return arrProps;
};

/* harmony default export */ __webpack_exports__["default"] = (getPropsArray);

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
/* harmony import */ var _ACSS__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ACSS */ "./src/_/ACSS.ts");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var FILL = {
  getFill: function getFill(node) {
    // @ts-ignore
    var _ref = node.fills || [],
        _ref2 = _slicedToArray(_ref, 1),
        _ref2$ = _ref2[0],
        firstFill = _ref2$ === void 0 ? null : _ref2$; // 没有设置任何颜色, 目前不支持渐变
    // @ts-ignore


    if (!firstFill || firstFill.type !== 'SOLID') {
      return null;
    }

    var color = _COLOR__WEBPACK_IMPORTED_MODULE_0__["default"].getRgbaByFill(firstFill);

    if (!color) {
      return null;
    }

    var className = node.type === 'TEXT' ? _ACSS__WEBPACK_IMPORTED_MODULE_2__["default"].addColor(color) : _ACSS__WEBPACK_IMPORTED_MODULE_2__["default"].addBgColor(color); // 文本是用颜色，其它理解为背景色

    return {
      classNames: [className]
    };
  },
  // 获取填充信息
  getInfo: function getInfo(node) {
    //@ts-ignore
    return _CONFIG__WEBPACK_IMPORTED_MODULE_1__["default"].getInfoById(node.fillStyleId) || FILL.getFill(node);
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
/* harmony import */ var _ACSS__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ACSS */ "./src/_/ACSS.ts");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

 // import CONFIG from "./CONFIG";

var FLEX = {
  getFlex: function getFlex(node) {
    var layoutMode = node.layoutMode,
        primaryAxisAlignItems = node.primaryAxisAlignItems,
        counterAxisAlignItems = node.counterAxisAlignItems,
        itemSpacing = node.itemSpacing; // 没有是用 Flex 布局

    if (layoutMode === "NONE") {
      return null;
    } // 没有子元素 flex 布局没有意义


    var _node$children = node.children,
        children = _node$children === void 0 ? [] : _node$children;

    if (!children.length) {
      return null;
    }

    var classNames = [];
    var gutterClass = []; // 为子元素添加间距

    if (itemSpacing > 0 && primaryAxisAlignItems !== "SPACE_BETWEEN") {
      var gutterMap = {
        "VERTICAL": "mb",
        "HORIZONTAL": "mr"
      };
      gutterClass.push(_ACSS__WEBPACK_IMPORTED_MODULE_0__["default"].add(gutterMap[layoutMode], itemSpacing));
    } // 如果是纵向的 这里可以不使用 flex 布局


    if (layoutMode === 'VERTICAL') {
      // 当是纵向布局当时候
      classNames.push({
        // "MIN": "",
        "CENTER": "tac",
        "MAX": "tar"
      }[counterAxisAlignItems]);
    } else {
      classNames.push('df');
      classNames.push({
        // "MIN": "",
        "CENTER": "jcc",
        "MAX": "jcfe",
        "SPACE_BETWEEN": "jcsb"
      }[primaryAxisAlignItems]);
      classNames.push({
        //"MIN": "",
        "CENTER": "aic",
        "MAX": "aife"
      }[counterAxisAlignItems] || "");
    }

    return {
      classNames: classNames,
      gutterClass: gutterClass
    };
  },
  addClassNodes: function addClassNodes() {
    var arrNode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var gutterClass = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

    if (!(gutterClass === null || gutterClass === void 0 ? void 0 : gutterClass.length)) {
      return arrNode;
    }

    return arrNode.map(function (item, key) {
      var _item$classNames = item.classNames,
          classNames = _item$classNames === void 0 ? [] : _item$classNames; // 最后一个元素不做任何处理

      if (key !== arrNode.length - 1) {
        item.classNames = [].concat(_toConsumableArray(classNames), _toConsumableArray(gutterClass));
      } else {
        item.classNames = classNames;
      }

      return item;
    });
  },
  getInfo: function getInfo(node) {
    // 这几个元素都不做处理
    if (['TEXT'].indexOf(node.type) > -1) {
      return null;
    } // @ts-ignore


    return FLEX.getFlex(node);
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
/* harmony import */ var _ACSS__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ACSS */ "./src/_/ACSS.ts");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


var OTHERS = {
  gerBorderRadiusClassNames: function gerBorderRadiusClassNames(node) {
    var tl = node.topLeftRadius || 0;
    var tr = node.topRightRadius || 0;
    var br = node.bottomRightRadius || 0;
    var bl = node.bottomLeftRadius || 0; // 全部为 0

    if (tl + tr + br + bl === 0) {
      return [];
    } // 如果四个值都相等


    if (tl === tr && tl === br && tl === bl) {
      return [_ACSS__WEBPACK_IMPORTED_MODULE_0__["default"].add('br', tl)];
    }

    var classNames = [];
    tl && classNames.push(_ACSS__WEBPACK_IMPORTED_MODULE_0__["default"].add('btlr', tl));
    tr && classNames.push(_ACSS__WEBPACK_IMPORTED_MODULE_0__["default"].add('btrr', tr));
    br && classNames.push(_ACSS__WEBPACK_IMPORTED_MODULE_0__["default"].add('bbrr', br));
    bl && classNames.push(_ACSS__WEBPACK_IMPORTED_MODULE_0__["default"].add('bblr', bl));
    return classNames;
  },
  getPaddingClassNames: function getPaddingClassNames(node) {
    return [_ACSS__WEBPACK_IMPORTED_MODULE_0__["default"].add('pt', node.paddingTop), _ACSS__WEBPACK_IMPORTED_MODULE_0__["default"].add('pr', node.paddingRight), _ACSS__WEBPACK_IMPORTED_MODULE_0__["default"].add('pb', node.paddingBottom), _ACSS__WEBPACK_IMPORTED_MODULE_0__["default"].add('pl', node.paddingLeft)];
  },
  getInfo: function getInfo(node) {
    var padding = OTHERS.getPaddingClassNames(node);
    var radius = OTHERS.gerBorderRadiusClassNames(node);
    return {
      classNames: [].concat(_toConsumableArray(padding), _toConsumableArray(radius))
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
/* harmony import */ var _ACSS__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ACSS */ "./src/_/ACSS.ts");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }



var TEXT = {
  unitMap: {
    'PERCENT': '%' // "PIXELS":""

  },
  getFontNameClass: function getFontNameClass(node) {
    var fontName = node.fontName; // @ts-ignore

    var style = fontName.style;

    if (typeof style !== 'string') {
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
    var classNames = style.split(' ').map(function (item) {
      return fontMap[item.toUpperCase()] || '';
    });
    return classNames.filter(function (item) {
      return item;
    }).join(' ');
  },
  getACSSSInfo: function getACSSSInfo(node) {
    var _a, _b, _c;

    var classNames = [];

    if (["string", "number"].indexOf(_typeof(node.fontSize)) > -1) {
      // @ts-ignore
      classNames.push(_ACSS__WEBPACK_IMPORTED_MODULE_1__["default"].add('fs', node.fontSize));
    } // 杭高
    // @ts-ignore


    if ((_a = node.lineHeight) === null || _a === void 0 ? void 0 : _a.value) {
      // @ts-ignore
      var _node$lineHeight = node.lineHeight,
          value = _node$lineHeight.value,
          unit = _node$lineHeight.unit; // @ts-ignore

      classNames.push(_ACSS__WEBPACK_IMPORTED_MODULE_1__["default"].add('lh', value, TEXT.unitMap[unit]));
    } // 字间距
    // @ts-ignore


    if ((_b = node.letterSpacing) === null || _b === void 0 ? void 0 : _b.value) {
      // @ts-ignore
      var _node$letterSpacing = node.letterSpacing,
          _value = _node$letterSpacing.value,
          _unit = _node$letterSpacing.unit;
      classNames.push(_ACSS__WEBPACK_IMPORTED_MODULE_1__["default"].add('ls', _value, TEXT.unitMap[_unit]));
    } // font-weight font-style


    var fnClass = TEXT.getFontNameClass(node);
    fnClass && classNames.push(fnClass); // @ts-ignore

    if ((_c = node.fontName) === null || _c === void 0 ? void 0 : _c.family) {
      // @ts-ignore
      classNames.push(_ACSS__WEBPACK_IMPORTED_MODULE_1__["default"].addFontFamily(node.fontName.family));
    } // text-align


    var taClass = {
      "LEFT": '',
      "CENTER": 'tac',
      "RIGHT": 'tar',
      "JUSTIFIED": 'taj'
    }[node.textAlignHorizontal];
    taClass && classNames.push(taClass); // vertical-align

    var vaClass = {
      "TOP": '',
      "CENTER": 'vam',
      "BOTTOM": 'vab'
    }[node.textAlignVertical];
    vaClass && classNames.push(vaClass); // tt

    var ttClass = {
      "ORIGINAL": '',
      "UPPER": 'ttu',
      "LOWER": 'ttl',
      "TITLE": 'ttc'
    }[node.textCase];
    ttClass && classNames.push(ttClass); // td

    var tdClass = {
      "NONE": "",
      "UNDERLINE": 'tdu',
      "STRIKETHROUGH": 'tdl'
    }[node.textDecoration];
    tdClass && classNames.push(tdClass);
    return classNames;
  },
  // 文本组件
  getInfo: function getInfo(node) {
    if (node.type !== 'TEXT') {
      return null;
    } // @ts-ignore


    var _ref = _CONFIG__WEBPACK_IMPORTED_MODULE_0__["default"].getInfoById(node.textStyleId) || {},
        _ref$classNames = _ref.classNames,
        classNames = _ref$classNames === void 0 ? [] : _ref$classNames,
        _ref$ignoreClassNames = _ref.ignoreClassNames,
        ignoreClassNames = _ref$ignoreClassNames === void 0 ? [] : _ref$ignoreClassNames; // @ts-ignore


    return {
      classNames: classNames.length ? classNames : TEXT.getACSSSInfo(node),
      ignoreClassNames: ignoreClassNames
    };
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
/* harmony import */ var _ACSS__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_/ACSS */ "./src/_/ACSS.ts");
/* harmony import */ var _render_DOM__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_/render/DOM */ "./src/_/render/DOM.ts");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var API = {
  tabIndex: 0,
  getSelection: function getSelection() {
    var selection = figma.currentPage.selection;

    if (!selection.length) {
      // 没有选择任何元素
      figma.ui.postMessage({
        noSelection: true
      });
      return null;
    }

    return selection;
  },
  onTabChange: function onTabChange(index) {
    var beforeIndex = API.tabIndex;
    API.tabIndex = index; // 如果只是在 HTML 和 ACSS 之前切换

    if ((beforeIndex === 0 || beforeIndex === 1) && (index === 0 || index === 1)) {
      return;
    }

    var actionMap = ['runHome', 'runHome', 'runConfig', 'runToken'];
    var action = actionMap[index];
    action && API[action]();
  },
  onSelectionChange: function onSelectionChange() {
    // 更新样式
    if (API.tabIndex === 0 || API.tabIndex === 2) {
      API.runHome();
    }
  },
  runHome: function runHome() {
    var selection = API.getSelection();

    if (!selection) {
      return;
    }

    _ACSS__WEBPACK_IMPORTED_MODULE_2__["default"].init(); // @ts-ignore

    var Info = _NODE__WEBPACK_IMPORTED_MODULE_0__["default"].getNodesInfo(selection); // console.log(Info);

    var isJSX = _CONFIG__WEBPACK_IMPORTED_MODULE_1__["default"].isJSX();
    figma.ui.postMessage({
      getHTML: _render_DOM__WEBPACK_IMPORTED_MODULE_3__["default"].render(Info, isJSX),
      getCSS: _ACSS__WEBPACK_IMPORTED_MODULE_2__["default"].getString(),
      isJSX: isJSX,
      noSelection: false
    });
  },
  runConfig: function runConfig() {
    figma.ui.postMessage({
      getConfig: _CONFIG__WEBPACK_IMPORTED_MODULE_1__["default"].getAll()
    });
  },
  runToken: function runToken() {
    _CONFIG__WEBPACK_IMPORTED_MODULE_1__["default"].getAllTokens();
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
    } else if (name === 'CONFIG' && action in _CONFIG__WEBPACK_IMPORTED_MODULE_1__["default"]) {
      _CONFIG__WEBPACK_IMPORTED_MODULE_1__["default"][action](value);

      if (action === 'changeJSX') {
        API.runHome();
      } else if (action === 'appendToken') {
        API.runToken();
      } else {
        API.runConfig();
      }
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
  API.runHome();
  figma.on("selectionchange", function () {
    API.onSelectionChange();
  }); // @ts-ignore

  figma.ui.onmessage = API.onmessage;
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL18vQUNTUy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvXy9DT01QT05FTlQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL18vQ09ORklHLnRzIiwid2VicGFjazovLy8uL3NyYy9fL05PREUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL18vVVRJTFMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL18vcmVuZGVyL0RPTS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvXy9yZW5kZXIvSFRNTC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvXy9yZW5kZXIvSlNYLnRzIiwid2VicGFjazovLy8uL3NyYy9fL3JlbmRlci9nZXRQcm9wc0FycmF5LnRzIiwid2VicGFjazovLy8uL3NyYy9fL3Rva2VuL0NPTE9SLnRzIiwid2VicGFjazovLy8uL3NyYy9fL3Rva2VuL0VGRkVDVC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvXy90b2tlbi9GSUxMLnRzIiwid2VicGFjazovLy8uL3NyYy9fL3Rva2VuL0ZMRVgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL18vdG9rZW4vR1JJRC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvXy90b2tlbi9PVEhFUlMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL18vdG9rZW4vU1RST0tFLnRzIiwid2VicGFjazovLy8uL3NyYy9fL3Rva2VuL1RFWFQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvZGUudHMiXSwibmFtZXMiOlsiQUNTUyIsImRhdGEiLCJpbml0IiwibmFtZU1hcCIsImdldENsYXNzU2VsZWN0b3JCeU5hbWUiLCJjbGFzc05hbWUiLCJpbmRleE9mIiwicmVwbGFjZSIsImdldFN0cmluZyIsImtleXMiLCJPYmplY3QiLCJzb3J0IiwicmVzdWx0IiwibWFwIiwibmFtZSIsImpvaW4iLCJhZGQiLCJ2YWx1ZSIsInVuaXQiLCJwcm9wTmFtZSIsInVzZVZhbHVlIiwiTnVtYmVyIiwicGFyc2VGbG9hdCIsInRvRml4ZWQiLCJjbGFzc1VuaXQiLCJhZGRGb250RmFtaWx5IiwidG9Mb3dlckNhc2UiLCJhZGRDb2xvciIsInJnYmEiLCJsZW5ndGgiLCJhZGRCZ0NvbG9yIiwiQ09NUE9ORU5UIiwiaXNWYXJpYW50Iiwibm9kZSIsIl9hIiwiX2IiLCJtYWluQ29tcG9uZW50IiwicGFyZW50IiwidHlwZSIsImlzQ29tcG9uZW50IiwiZ2V0TWFpbkNvbXBvbmVudCIsImdldENvbXBvbmVudElkIiwiaWQiLCJnZXRDb21wb25lbnROYW1lIiwic3RyTmFtZSIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJnZXRDb21wb25lbnRQcm9wcyIsInByb3BzIiwic3BsaXQiLCJmb3JFYWNoIiwiaXRlbSIsImtleSIsInRyaW0iLCJnZXRJbmZvIiwibWF0Y2hUb2tlbiIsIkNPTkZJRyIsImdldEluZm9CeUlkIiwiQ09ORklHX0RFRkFVTFQiLCJjdXJyZW50SW5kZXgiLCJpc0pTWCIsInByb2plY3RzIiwic3RvcmUiLCJjaGFuZ2VDdXJyZW50IiwiaW5kZXgiLCJnZXRBbGwiLCJmaWdtYSIsImNsaWVudFN0b3JhZ2UiLCJzZXRBc3luYyIsImNoYW5nZUpTWCIsInJlbW92ZSIsInNwbGljZSIsImFkZE5ld1Byb2plY3QiLCJ0b2tlbiIsInB1c2giLCJjaGFuZ2VQcm9qZWN0TmFtZSIsInJlcGxhY2VQcm9qZWN0IiwidWkiLCJwb3N0TWVzc2FnZSIsImFsZXJ0TXNnIiwiYXBwZW5kVG9rZW4iLCJjdXJyZW50IiwiZ2V0Q3VycmVudCIsImFzc2lnbiIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiZ2V0QXN5bmMiLCJ0aGVuIiwicmV0IiwiZ2V0VG9rZW4iLCJjYXRjaCIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsInRva2VuQ29uZmlnIiwiZ2V0QWxsVG9rZW5zIiwiQ09NUE9ORU5UX0RFRkFVTFQiLCJjbGFzc05hbWVzIiwiY29tcG9uZW50TmFtZSIsInN0b3BSZW5kZXJDaGlsZHJlbiIsImlnbm9yZUNsYXNzTmFtZXMiLCJUT0tFTl9ERUZBVUxUIiwicm9vdCIsImNvbXBvbmVudHMiLCJmaW5kQWxsIiwiYyIsImFkZENvbmZpZyIsInRlbXBsYXRlIiwiZ2V0TG9jYWxQYWludFN0eWxlcyIsImdldExvY2FsVGV4dFN0eWxlcyIsImdldExvY2FsRWZmZWN0U3R5bGVzIiwiZ2V0TG9jYWxHcmlkU3R5bGVzIiwiZ290QWxsVG9rZW5zIiwiX19yZXN0IiwicyIsImUiLCJ0IiwicCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImdldE93blByb3BlcnR5U3ltYm9scyIsImkiLCJwcm9wZXJ0eUlzRW51bWVyYWJsZSIsIk5PREUiLCJleHRlbmRJbmZvIiwiYSIsImIiLCJjbGFzc05hbWVzQSIsImlnbm9yZUNsYXNzTmFtZXNBIiwicHJvcHNBIiwicmVzdEEiLCJjbGFzc05hbWVzQiIsImlnbm9yZUNsYXNzTmFtZXNCIiwicHJvcHNCIiwiY2hpbGRyZW4iLCJyZXN0QiIsImlzU3RydWN0Tm9kZSIsInN0YXJ0c1dpdGgiLCJ5ZXNUeXBlcyIsImdvdE5vIiwiZmluZCIsImlzUmVuZGVyQ2hpbGRyZW4iLCJnZXROb2RlSW5mbyIsInZpc2libGUiLCJub2RlSW5mbyIsInRhZ05hbWUiLCJpc0Jsb2NrRWxlbWVudCIsImNvbXBvbmVudCIsImZpbGwiLCJGSUxMIiwidGV4dCIsIlRFWFQiLCJzdHJva2UiLCJTVFJPS0UiLCJncmlkIiwiR1JJRCIsImVmZmVjdCIsIkVGRkVDVCIsIm90aGVycyIsIk9USEVSUyIsImZsZXgiLCJGTEVYIiwicGFyc2VJbnQiLCJTdHJpbmciLCJoZWlnaHQiLCJ3aWR0aCIsImNoYXJhY3RlcnMiLCJnZXROb2Rlc0luZm8iLCJhZGRDbGFzc05vZGVzIiwiZ3V0dGVyQ2xhc3MiLCJVVElMUyIsImNsZWFyU3RpbmdBcnJheSIsImxheW91dE1vZGUiLCJub2RlcyIsInkiLCJ4IiwiaW5mbyIsInNvcnROb2RlcyIsImxlbiIsImlzQmxvY2siLCJibG9ja1RhZyIsImlzU2VsZlRhZyIsInNlbGZUYWciLCJhcnJTdHIiLCJhcnJJZ25vcmUiLCJET00iLCJyZW5kZXIiLCJvYmoiLCJKU1giLCJnZXREb21CeUFycmF5IiwiSFRNTCIsImdldEl0ZW1Eb20iLCJhcnJQcm9wcyIsImdldFByb3BzQXJyYXkiLCJjbGFzcyIsInRhZ1N0YXJ0IiwiZmlsdGVyIiwiZW50cmllcyIsIkNPTE9SIiwiZ2V0UmdiYUJ5RmlsbCIsImNvbG9yIiwib3BhY2l0eSIsInIiLCJnIiwiZWZmZWN0U3R5bGVJZCIsImdldEZpbGwiLCJmaWxscyIsImZpcnN0RmlsbCIsImZpbGxTdHlsZUlkIiwiZ2V0RmxleCIsInByaW1hcnlBeGlzQWxpZ25JdGVtcyIsImNvdW50ZXJBeGlzQWxpZ25JdGVtcyIsIml0ZW1TcGFjaW5nIiwiZ3V0dGVyTWFwIiwiYXJyTm9kZSIsImdyaWRTdHlsZUlkIiwiZ2VyQm9yZGVyUmFkaXVzQ2xhc3NOYW1lcyIsInRsIiwidG9wTGVmdFJhZGl1cyIsInRyIiwidG9wUmlnaHRSYWRpdXMiLCJiciIsImJvdHRvbVJpZ2h0UmFkaXVzIiwiYmwiLCJib3R0b21MZWZ0UmFkaXVzIiwiZ2V0UGFkZGluZ0NsYXNzTmFtZXMiLCJwYWRkaW5nVG9wIiwicGFkZGluZ1JpZ2h0IiwicGFkZGluZ0JvdHRvbSIsInBhZGRpbmdMZWZ0IiwicGFkZGluZyIsInJhZGl1cyIsInN0cm9rZVN0eWxlSWQiLCJ1bml0TWFwIiwiZ2V0Rm9udE5hbWVDbGFzcyIsImZvbnROYW1lIiwic3R5bGUiLCJmb250TWFwIiwiZ2V0QUNTU1NJbmZvIiwiX2MiLCJmb250U2l6ZSIsImxpbmVIZWlnaHQiLCJsZXR0ZXJTcGFjaW5nIiwiZm5DbGFzcyIsImZhbWlseSIsInRhQ2xhc3MiLCJ0ZXh0QWxpZ25Ib3Jpem9udGFsIiwidmFDbGFzcyIsInRleHRBbGlnblZlcnRpY2FsIiwidHRDbGFzcyIsInRleHRDYXNlIiwidGRDbGFzcyIsInRleHREZWNvcmF0aW9uIiwidGV4dFN0eWxlSWQiLCJBUEkiLCJ0YWJJbmRleCIsImdldFNlbGVjdGlvbiIsInNlbGVjdGlvbiIsImN1cnJlbnRQYWdlIiwibm9TZWxlY3Rpb24iLCJvblRhYkNoYW5nZSIsImJlZm9yZUluZGV4IiwiYWN0aW9uTWFwIiwiYWN0aW9uIiwib25TZWxlY3Rpb25DaGFuZ2UiLCJydW5Ib21lIiwiSW5mbyIsImdldEhUTUwiLCJnZXRDU1MiLCJydW5Db25maWciLCJnZXRDb25maWciLCJydW5Ub2tlbiIsIm9ubWVzc2FnZSIsIm1zZyIsInNob3dVSSIsIl9faHRtbF9fIiwib24iXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQSxJQUFNQSxJQUFJLEdBQUc7QUFDVEMsTUFBSSxFQUFFLEVBREc7QUFFVEMsTUFBSSxFQUFFLGdCQUFNO0FBQ1JGLFFBQUksQ0FBQ0MsSUFBTCxHQUFZLEVBQVo7QUFDSCxHQUpRO0FBS1RFLFNBQU8sRUFBRTtBQUNMLFVBQU0sV0FERDtBQUVMLFVBQU0sYUFGRDtBQUdMLFVB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SyxJQUFJRixNQUFNLEtBQUssYUFBZixFQUE4QjtBQUMvQlQsV0FBRyxDQUFDaUIsUUFBSjtBQUNILE9BRkksTUFHQTtBQUNEakIsV0FBRyxDQUFDZSxTQUFKO0FBQ0g7QUFDSjtBQUNKO0FBNUVPLENBQVosQyxDQThFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBdk4sK0NBQU0sQ0FBQ3ZELElBQVAsR0FBY3VGLElBQWQsQ0FBbUIsWUFBTTtBQUNyQjtBQUNBdEIsT0FBSyxDQUFDa04sTUFBTixDQUFhQyxRQUFiLEVBQXVCO0FBQUU5RyxTQUFLLEVBQUUsR0FBVDtBQUFjRCxVQUFNLEVBQUU7QUFBdEIsR0FBdkI7QUFDQTBGLEtBQUcsQ0FBQ1csT0FBSjtBQUNBek0sT0FBSyxDQUFDb04sRUFBTixDQUFTLGlCQUFULEVBQTRCLFlBQU07QUFDOUJ0QixPQUFHLENBQUNVLGlCQUFKO0FBQ0gsR0FGRCxFQUpxQixDQU9yQjs7QUFDQXhNLE9BQUssQ0FBQ1csRUFBTixDQUFTcU0sU0FBVCxHQUFxQmxCLEdBQUcsQ0FBQ2tCLFNBQXpCO0FBQ0gsQ0FURCxFIiwiZmlsZSI6ImNvZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9jb2RlLnRzXCIpO1xuIiwiY29uc3QgQUNTUyA9IHtcbiAgICBkYXRhOiB7fSxcbiAgICBpbml0OiAoKSA9PiB7XG4gICAgICAgIEFDU1MuZGF0YSA9IHt9O1xuICAgIH0sXG4gICAgbmFtZU1hcDoge1xuICAgICAgICAnZnMnOiAnZm9udC1zaXplJyxcbiAgICAgICAgJ2xoJzogJ2xpbmUtaGVpZ2h0JyxcbiAgICAgICAgJ2xzJzogJ2xldHRlci1zcGFjZScsXG4gICAgICAgICdmZic6ICdmb250LWZhbWlseScsXG4gICAgICAgICdwdCc6ICdwYWRkaW5nLXRvcCcsXG4gICAgICAgICdwcic6ICdwYWRkaW5nLXJpZ2h0JyxcbiAgICAgICAgJ3BiJzogJ3BhZGRpbmctYm90dG9tJyxcbiAgICAgICAgJ3BsJzogJ3BhZGRpbmctbGVmdCcsXG4gICAgICAgICdtdCc6ICdtYXJnaW4tdG9wJyxcbiAgICAgICAgJ21yJzogJ21hcmdpbi1yaWdodCcsXG4gICAgICAgICdtYic6ICdtYXJnaW4tYm90dG9tJyxcbiAgICAgICAgJ21sJzogJ21hcmdpbi1sZWZ0JyxcbiAgICAgICAgJ2gnOiAnaGVpZ2h0JyxcbiAgICAgICAgJ3cnOiAnd2lkdGgnLFxuICAgICAgICAnYnRscic6ICdib3JkZXItdG9wLWxlZnQtcmFkaXVzJyxcbiAgICAgICAgJ2J0cnInOiAnYm9yZGVyLXRvcC1yaWdodC1yYWRpdXMnLFxuICAgICAgICAnYmJycic6ICdib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1cycsXG4gICAgICAgICdiYmxyJzogJ2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXMnLFxuICAgICAgICAnYnInOiAnYm9yZGVyLXJhZGl1cydcbiAgICB9LFxuICAgIGdldENsYXNzU2VsZWN0b3JCeU5hbWU6IChjbGFzc05hbWUgPSAnJykgPT4ge1xuICAgICAgICBpZiAoY2xhc3NOYW1lLmluZGV4T2YoJy4nKSA+IC0xKSB7XG4gICAgICAgICAgICBjbGFzc05hbWUgPSBjbGFzc05hbWUucmVwbGFjZSgvXFwuL2csICdcXFxcLicpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjbGFzc05hbWUuaW5kZXhPZignOicpID4gLTEpIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IGNsYXNzTmFtZS5yZXBsYWNlKC9cXDovZywgJ1xcXFw6Jyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNsYXNzTmFtZS5pbmRleE9mKCclJykgPiAtMSkge1xuICAgICAgICAgICAgY2xhc3NOYW1lID0gY2xhc3NOYW1lLnJlcGxhY2UoL1xcJS9nLCAnXFxcXCUnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2xhc3NOYW1lO1xuICAgIH0sXG4gICAgZ2V0U3RyaW5nOiAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBBQ1NTLmRhdGE7XG4gICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhkYXRhKS5zb3J0KCk7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGtleXMubWFwKChuYW1lKSA9PiBgLiR7QUNTUy5nZXRDbGFzc1NlbGVjdG9yQnlOYW1lKG5hbWUpfXske2RhdGFbbmFtZV19O31gKS5qb2luKCdcXG4nKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9LFxuICAgIGFkZDogKG5hbWUgPSAnJywgdmFsdWUsIHVuaXQgPSAncHgnKSA9PiB7XG4gICAgICAgIGlmICghbmFtZSB8fCAhdmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwcm9wTmFtZSA9IEFDU1MubmFtZU1hcFtuYW1lXTtcbiAgICAgICAgaWYgKCFwcm9wTmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG4gICAgICAgIC8vIOWPquS/neeVmeS4pOS9jeWwj+aVsFxuICAgICAgICBjb25zdCB1c2VWYWx1ZSA9IE51bWJlcih2YWx1ZSkgPyBwYXJzZUZsb2F0KE51bWJlcih2YWx1ZSkudG9GaXhlZCgyKSkgOiB2YWx1ZTtcbiAgICAgICAgLy8g5aaC5p6c5pivIHB4IOS4jemcgOimgea4suafk1xuICAgICAgICBjb25zdCBjbGFzc1VuaXQgPSB1bml0ID09PSAncHgnID8gJycgOiB1bml0O1xuICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBgJHtuYW1lfSR7dXNlVmFsdWV9JHtjbGFzc1VuaXR9YDtcbiAgICAgICAgQUNTUy5kYXRhW2NsYXNzTmFtZV0gPSBgJHtwcm9wTmFtZX06JHt1c2VWYWx1ZX0ke3VuaXR9YDtcbiAgICAgICAgcmV0dXJuIGNsYXNzTmFtZTtcbiAgICB9LFxuICAgIGFkZEZvbnRGYW1pbHk6ICh2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gYGZmOiR7dmFsdWUudG9Mb3dlckNhc2UoKX1gO1xuICAgICAgICBBQ1NTLmRhdGFbY2xhc3NOYW1lXSA9IGBmb250LWZhbWlseTpcIiR7dmFsdWV9XCJgO1xuICAgICAgICByZXR1cm4gY2xhc3NOYW1lO1xuICAgIH0sXG4gICAgYWRkQ29sb3I6IChyZ2JhID0gW10pID0+IHtcbiAgICAgICAgaWYgKCFyZ2JhICYmIHJnYmEubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gYGM6JHtyZ2JhLmpvaW4oJycpfWA7XG4gICAgICAgIEFDU1MuZGF0YVtjbGFzc05hbWVdID0gYGNvbG9yOnJnYmEoJHtyZ2JhLmpvaW4oJywnKX0pYDtcbiAgICAgICAgcmV0dXJuIGNsYXNzTmFtZTtcbiAgICB9LFxuICAgIGFkZEJnQ29sb3I6IChyZ2JhID0gW10pID0+IHtcbiAgICAgICAgaWYgKCFyZ2JhICYmIHJnYmEubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gYGJjOiR7cmdiYS5qb2luKCcnKX1gO1xuICAgICAgICBBQ1NTLmRhdGFbY2xhc3NOYW1lXSA9IGBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoJHtyZ2JhLmpvaW4oJywnKX0pYDtcbiAgICAgICAgcmV0dXJuIGNsYXNzTmFtZTtcbiAgICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgQUNTUztcbiIsImltcG9ydCBDT05GSUcgZnJvbSBcIi4vQ09ORklHXCI7XG5jb25zdCBDT01QT05FTlQgPSB7XG4gICAgaXNWYXJpYW50OiAobm9kZSkgPT4ge1xuICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHJldHVybiAoKF9iID0gKF9hID0gbm9kZS5tYWluQ29tcG9uZW50KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucGFyZW50KSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IudHlwZSkgPT09ICdDT01QT05FTlRfU0VUJztcbiAgICB9LFxuICAgIGlzQ29tcG9uZW50OiAobm9kZSkgPT4ge1xuICAgICAgICByZXR1cm4gbm9kZS50eXBlID09PSAnSU5TVEFOQ0UnIHx8IG5vZGUudHlwZSA9PT0gJ0NPTVBPTkVOVCc7XG4gICAgfSxcbiAgICBnZXRNYWluQ29tcG9uZW50OiAobm9kZSkgPT4ge1xuICAgICAgICBpZiAobm9kZS50eXBlID09PSAnQ09NUE9ORU5UJykge1xuICAgICAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBjb25zdCBpc1ZhcmlhbnQgPSBDT01QT05FTlQuaXNWYXJpYW50KG5vZGUpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhub2RlLCB7aXNWYXJpYW50fSk7XG4gICAgICAgIHJldHVybiBpc1ZhcmlhbnQgPyBub2RlLm1haW5Db21wb25lbnQucGFyZW50IDogbm9kZS5tYWluQ29tcG9uZW50O1xuICAgIH0sXG4gICAgZ2V0Q29tcG9uZW50SWQ6IChub2RlKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgaWQgPSAnJyB9ID0gQ09NUE9ORU5ULmdldE1haW5Db21wb25lbnQobm9kZSkgfHwge307XG4gICAgICAgIHJldHVybiBpZDtcbiAgICB9LFxuICAgIGdldENvbXBvbmVudE5hbWU6IChub2RlKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgbmFtZSA9ICcnIH0gPSBDT01QT05FTlQuZ2V0TWFpbkNvbXBvbmVudChub2RlKTtcbiAgICAgICAgaWYgKCFuYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc3RyTmFtZSA9IG5hbWUucmVwbGFjZSgvW1xcV10vZywgJycpO1xuICAgICAgICByZXR1cm4gc3RyTmFtZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0ck5hbWUuc2xpY2UoMSk7XG4gICAgfSxcbiAgICBnZXRDb21wb25lbnRQcm9wczogKG5vZGUpID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2dldENvbXBvbmVudFByb3BzJywgbm9kZSk7XG4gICAgICAgIGNvbnN0IGlzVmFyaWFudCA9IENPTVBPTkVOVC5pc1ZhcmlhbnQobm9kZSk7XG4gICAgICAgIC8vIOayoeacieWPmOS9k+ihqOekuuayoeaciSBwcm9wc1xuICAgICAgICBpZiAoIWlzVmFyaWFudCkge1xuICAgICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgbmFtZSB9ID0gbm9kZS5tYWluQ29tcG9uZW50O1xuICAgICAgICBjb25zdCBwcm9wcyA9IHt9O1xuICAgICAgICBpZiAodHlwZW9mIG5hbWUgPT09ICdzdHJpbmcnICYmIG5hbWUuaW5kZXhPZignPScpID4gLTEpIHtcbiAgICAgICAgICAgIG5hbWUuc3BsaXQoXCIsXCIpLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBba2V5LCB2YWx1ZV0gPSBpdGVtLnNwbGl0KFwiPVwiKTtcbiAgICAgICAgICAgICAgICAvLyBmYWxzZSDooajnpLrmsqHmnInov5nkuKrlgLwg5LiN5YGa5aSE55CGXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlID09PSBcImZhbHNlXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwcm9wc1trZXkudHJpbSgpXSA9IHZhbHVlLnRyaW0oKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwcm9wcztcbiAgICB9LFxuICAgIGdldEluZm86IChub2RlKSA9PiB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgY29uc3QgaWQgPSBDT01QT05FTlQuZ2V0Q29tcG9uZW50SWQobm9kZSk7XG4gICAgICAgIGNvbnN0IG1hdGNoVG9rZW4gPSBDT05GSUcuZ2V0SW5mb0J5SWQoaWQpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhpZCwgbWF0Y2hUb2tlbiwgbm9kZSk7XG4gICAgICAgIGlmICghbWF0Y2hUb2tlbikge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBtYXRjaFRva2VuLnByb3BzID0gQ09NUE9ORU5ULmdldENvbXBvbmVudFByb3BzKG5vZGUpO1xuICAgICAgICByZXR1cm4gbWF0Y2hUb2tlbjtcbiAgICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgQ09NUE9ORU5UO1xuIiwiY29uc3QgQ09ORklHX0RFRkFVTFQgPSB7XG4gICAgY3VycmVudEluZGV4OiAwLFxuICAgIGlzSlNYOiBmYWxzZSxcbiAgICBwcm9qZWN0czogW11cbn07XG5jb25zdCBDT05GSUcgPSB7XG4gICAga2V5OiAnU0FDU1MnLFxuICAgIHN0b3JlOiBDT05GSUdfREVGQVVMVCxcbiAgICBjaGFuZ2VDdXJyZW50OiAoaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3Qgc3RvcmUgPSBDT05GSUcuZ2V0QWxsKCk7XG4gICAgICAgIHN0b3JlLmN1cnJlbnRJbmRleCA9IGluZGV4O1xuICAgICAgICBmaWdtYS5jbGllbnRTdG9yYWdlLnNldEFzeW5jKENPTkZJRy5rZXksIHN0b3JlKTtcbiAgICB9LFxuICAgIGNoYW5nZUpTWDogKHZhbHVlKSA9PiB7XG4gICAgICAgIGNvbnN0IHN0b3JlID0gQ09ORklHLmdldEFsbCgpO1xuICAgICAgICAvLyDph43nva7lm57nrKzkuIDkuKpcbiAgICAgICAgc3RvcmUuaXNKU1ggPSB2YWx1ZTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coc3RvcmUpO1xuICAgICAgICBmaWdtYS5jbGllbnRTdG9yYWdlLnNldEFzeW5jKENPTkZJRy5rZXksIHN0b3JlKTtcbiAgICB9LFxuICAgIHJlbW92ZTogKGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IHN0b3JlID0gQ09ORklHLmdldEFsbCgpO1xuICAgICAgICAvLyDph43nva7lm57nrKzkuIDkuKpcbiAgICAgICAgc3RvcmUuY3VycmVudEluZGV4ID0gMDtcbiAgICAgICAgc3RvcmUucHJvamVjdHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgZmlnbWEuY2xpZW50U3RvcmFnZS5zZXRBc3luYyhDT05GSUcua2V5LCBzdG9yZSk7XG4gICAgfSxcbiAgICBhZGROZXdQcm9qZWN0OiAoeyBuYW1lID0gJycsIHRva2VuID0ge30gfSA9IHt9KSA9PiB7XG4gICAgICAgIGNvbnN0IHN0b3JlID0gQ09ORklHLmdldEFsbCgpO1xuICAgICAgICBzdG9yZS5wcm9qZWN0cy5wdXNoKHtcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICB0b2tlblxuICAgICAgICB9KTtcbiAgICAgICAgc3RvcmUuY3VycmVudEluZGV4ID0gc3RvcmUucHJvamVjdHMubGVuZ3RoIC0gMTtcbiAgICAgICAgZmlnbWEuY2xpZW50U3RvcmFnZS5zZXRBc3luYyhDT05GSUcua2V5LCBzdG9yZSk7XG4gICAgfSxcbiAgICBjaGFuZ2VQcm9qZWN0TmFtZTogKHsgbmFtZSwgaW5kZXggfSkgPT4ge1xuICAgICAgICBjb25zdCBzdG9yZSA9IENPTkZJRy5nZXRBbGwoKTtcbiAgICAgICAgc3RvcmUucHJvamVjdHNbaW5kZXhdLm5hbWUgPSBuYW1lO1xuICAgICAgICBmaWdtYS5jbGllbnRTdG9yYWdlLnNldEFzeW5jKENPTkZJRy5rZXksIHN0b3JlKTtcbiAgICB9LFxuICAgIHJlcGxhY2VQcm9qZWN0OiAoeyBkYXRhLCBpbmRleCB9KSA9PiB7XG4gICAgICAgIGNvbnN0IHN0b3JlID0gQ09ORklHLmdldEFsbCgpO1xuICAgICAgICBzdG9yZS5wcm9qZWN0c1tpbmRleF0gPSBkYXRhO1xuICAgICAgICBmaWdtYS5jbGllbnRTdG9yYWdlLnNldEFzeW5jKENPTkZJRy5rZXksIHN0b3JlKTtcbiAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgYWxlcnRNc2c6IGAke2RhdGEubmFtZX0gcmVwbGFjZSBzdWNjZXNzYFxuICAgICAgICB9KTtcbiAgICB9LFxuICAgIGFwcGVuZFRva2VuOiAoYXBwZW5kVG9rZW4gPSB7fSkgPT4ge1xuICAgICAgICBjb25zdCBjdXJyZW50ID0gQ09ORklHLmdldEN1cnJlbnQoKTtcbiAgICAgICAgY29uc3QgeyB0b2tlbiA9IHt9IH0gPSBjdXJyZW50O1xuICAgICAgICBjdXJyZW50LnRva2VuID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCB0b2tlbiksIGFwcGVuZFRva2VuKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coYXBwZW5kVG9rZW4sIENPTkZJRy5zdG9yZSk7XG4gICAgICAgIGZpZ21hLmNsaWVudFN0b3JhZ2Uuc2V0QXN5bmMoQ09ORklHLmtleSwgQ09ORklHLnN0b3JlKTtcbiAgICB9LFxuICAgIGlzSlNYOiAoKSA9PiB7XG4gICAgICAgIHJldHVybiAhIUNPTkZJRy5zdG9yZS5pc0pTWDtcbiAgICB9LFxuICAgIGdldEFsbDogKCkgPT4ge1xuICAgICAgICByZXR1cm4gQ09ORklHLnN0b3JlO1xuICAgIH0sXG4gICAgaW5pdDogKCkgPT4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGZpZ21hLmNsaWVudFN0b3JhZ2UuZ2V0QXN5bmMoQ09ORklHLmtleSkudGhlbigocmV0KSA9PiB7XG4gICAgICAgICAgICAgICAgQ09ORklHLnN0b3JlID0gcmV0IHx8IENPTkZJR19ERUZBVUxUO1xuICAgICAgICAgICAgICAgIHJlc29sdmUoQ09ORklHLmdldFRva2VuKCkpO1xuICAgICAgICAgICAgICAgIC8vIOayoeaciee8k+WtmOWIm+W7uuS4gOS4quaWsOeahFxuICAgICAgICAgICAgICAgICghcmV0KSAmJiBmaWdtYS5jbGllbnRTdG9yYWdlLnNldEFzeW5jKENPTkZJRy5rZXksIENPTkZJR19ERUZBVUxUKTtcbiAgICAgICAgICAgIH0pLmNhdGNoKHJlamVjdCk7XG4gICAgICAgIH0pKTtcbiAgICB9LFxuICAgIGdldEN1cnJlbnQ6ICgpID0+IHtcbiAgICAgICAgY29uc3QgY3VycmVudEluZGV4ID0gQ09ORklHLnN0b3JlLmN1cnJlbnRJbmRleDtcbiAgICAgICAgY29uc3QgY3VycmVudCA9IENPTkZJRy5zdG9yZS5wcm9qZWN0c1tjdXJyZW50SW5kZXhdO1xuICAgICAgICByZXR1cm4gY3VycmVudDtcbiAgICB9LFxuICAgIGdldFRva2VuOiAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgdG9rZW4gPSBudWxsIH0gPSBDT05GSUcuZ2V0Q3VycmVudCgpIHx8IHt9O1xuICAgICAgICByZXR1cm4gdG9rZW4gPyBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRva2VuKSkgOiBudWxsO1xuICAgIH0sXG4gICAgZ2V0SW5mb0J5SWQ6IChpZCA9ICcnKSA9PiB7XG4gICAgICAgIGlmICghaWQpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHRva2VuQ29uZmlnID0gQ09ORklHLmdldFRva2VuKCkgfHwge307XG4gICAgICAgIC8vIOWmguaenOacieiHquWumuS5ieeUqOiHquWumuS5ieeahFxuICAgICAgICByZXR1cm4gdG9rZW5Db25maWdbaWRdO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICog6I635Y+W5omA5pyJ55qEIFRva2VuIOWMheaLrCBDb21wb25lbnRcbiAgICAgKi9cbiAgICBnZXRBbGxUb2tlbnM6ICgpID0+IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOe7hOS7tueahOm7mOiupOWxnuaAp1xuICAgICAgICAgKi9cbiAgICAgICAgY29uc3QgQ09NUE9ORU5UX0RFRkFVTFQgPSB7XG4gICAgICAgICAgICBjbGFzc05hbWVzOiBbXSxcbiAgICAgICAgICAgIGNvbXBvbmVudE5hbWU6ICcnLFxuICAgICAgICAgICAgc3RvcFJlbmRlckNoaWxkcmVuOiBmYWxzZSxcbiAgICAgICAgICAgIGlnbm9yZUNsYXNzTmFtZXM6IFtdXG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUb2tlbiDpu5jorqTlsZ7mgKdcbiAgICAgICAgICovXG4gICAgICAgIGNvbnN0IFRPS0VOX0RFRkFVTFQgPSB7XG4gICAgICAgICAgICBjbGFzc05hbWVzOiBbXSxcbiAgICAgICAgICAgIGlnbm9yZUNsYXNzTmFtZXM6IFtdXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IG5hbWUgPSBmaWdtYS5yb290Lm5hbWU7XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudHMgPSBmaWdtYS5yb290LmZpbmRBbGwoYyA9PiB7XG4gICAgICAgICAgICBpZiAoYy50eXBlID09PSAnQ09NUE9ORU5UX1NFVCcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjLnR5cGUgIT09ICdDT01QT05FTlQnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGMucGFyZW50LnR5cGUgPT09ICdDT01QT05FTlRfU0VUJykge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgdG9rZW4gPSB7fTtcbiAgICAgICAgY29uc3QgYWRkQ29uZmlnID0gKGRhdGEgPSBbXSwgdGVtcGxhdGUgPSB7fSkgPT4ge1xuICAgICAgICAgICAgZGF0YS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgdG9rZW5baXRlbS5pZF0gPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHRlbXBsYXRlKSwgeyBuYW1lOiBpdGVtLm5hbWUsIHR5cGU6IGl0ZW0udHlwZSB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBhZGRDb25maWcoY29tcG9uZW50cywgQ09NUE9ORU5UX0RFRkFVTFQpO1xuICAgICAgICBhZGRDb25maWcoZmlnbWEuZ2V0TG9jYWxQYWludFN0eWxlcygpLCBUT0tFTl9ERUZBVUxUKTtcbiAgICAgICAgYWRkQ29uZmlnKGZpZ21hLmdldExvY2FsVGV4dFN0eWxlcygpLCBUT0tFTl9ERUZBVUxUKTtcbiAgICAgICAgYWRkQ29uZmlnKGZpZ21hLmdldExvY2FsRWZmZWN0U3R5bGVzKCksIFRPS0VOX0RFRkFVTFQpO1xuICAgICAgICBhZGRDb25maWcoZmlnbWEuZ2V0TG9jYWxHcmlkU3R5bGVzKCksIFRPS0VOX0RFRkFVTFQpO1xuICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICBnb3RBbGxUb2tlbnM6IHtcbiAgICAgICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgICAgIGlnbm9yZUNsYXNzTmFtZXM6IFtdLFxuICAgICAgICAgICAgICAgIHRva2VuXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5leHBvcnQgZGVmYXVsdCBDT05GSUc7XG4iLCJ2YXIgX19yZXN0ID0gKHRoaXMgJiYgdGhpcy5fX3Jlc3QpIHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gICAgdmFyIHQgPSB7fTtcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcbiAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XG4gICAgICAgIH1cbiAgICByZXR1cm4gdDtcbn07XG5pbXBvcnQgQ09NUE9ORU5UIGZyb20gXCIuL0NPTVBPTkVOVFwiO1xuaW1wb3J0IEZJTEwgZnJvbSBcIi4vdG9rZW4vRklMTFwiO1xuaW1wb3J0IFRFWFQgZnJvbSBcIi4vdG9rZW4vVEVYVFwiO1xuaW1wb3J0IFNUUk9LRSBmcm9tIFwiLi90b2tlbi9TVFJPS0VcIjtcbmltcG9ydCBHUklEIGZyb20gXCIuL3Rva2VuL0dSSURcIjtcbmltcG9ydCBGTEVYIGZyb20gXCIuL3Rva2VuL0ZMRVhcIjtcbmltcG9ydCBBQ1NTIGZyb20gXCIuL0FDU1NcIjtcbmltcG9ydCBVVElMUyBmcm9tIFwiLi9VVElMU1wiO1xuaW1wb3J0IEVGRkVDVCBmcm9tIFwiLi90b2tlbi9FRkZFQ1RcIjtcbmltcG9ydCBPVEhFUlMgZnJvbSBcIi4vdG9rZW4vT1RIRVJTXCI7XG5pbXBvcnQgQ09ORklHIGZyb20gXCIuL0NPTkZJR1wiO1xuY29uc3QgTk9ERSA9IHtcbiAgICAvKipcbiAgICAgKiDlkIjlubbkuKTkuKppbmZvXG4gICAgICogQHBhcmFtIGFcbiAgICAgKiBAcGFyYW0gYlxuICAgICAqL1xuICAgIGV4dGVuZEluZm86IChhLCBiKSA9PiB7XG4gICAgICAgIGlmICghYikge1xuICAgICAgICAgICAgcmV0dXJuIGE7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyBjbGFzc05hbWVzOiBjbGFzc05hbWVzQSA9IFtdLCBpZ25vcmVDbGFzc05hbWVzOiBpZ25vcmVDbGFzc05hbWVzQSA9IFtdLCBwcm9wczogcHJvcHNBID0ge30gfSA9IGEsIHJlc3RBID0gX19yZXN0KGEsIFtcImNsYXNzTmFtZXNcIiwgXCJpZ25vcmVDbGFzc05hbWVzXCIsIFwicHJvcHNcIl0pO1xuICAgICAgICBjb25zdCB7IGNsYXNzTmFtZXM6IGNsYXNzTmFtZXNCID0gW10sIGlnbm9yZUNsYXNzTmFtZXM6IGlnbm9yZUNsYXNzTmFtZXNCID0gW10sIHByb3BzOiBwcm9wc0IgPSB7fSwgY2hpbGRyZW4gfSA9IGIsIHJlc3RCID0gX19yZXN0KGIsIFtcImNsYXNzTmFtZXNcIiwgXCJpZ25vcmVDbGFzc05hbWVzXCIsIFwicHJvcHNcIiwgXCJjaGlsZHJlblwiXSk7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oeyBwcm9wczogT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBwcm9wc0EpLCBwcm9wc0IpLCBjbGFzc05hbWVzOiBbLi4uY2xhc3NOYW1lc0EsIC4uLmNsYXNzTmFtZXNCXSwgaWdub3JlQ2xhc3NOYW1lczogWy4uLmlnbm9yZUNsYXNzTmFtZXNBLCAuLi5pZ25vcmVDbGFzc05hbWVzQl0gfSwgcmVzdEEpLCByZXN0Qik7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiDlpoLmnpzkuIDkuKrlhYPntKDlhoXpg6jlj6rmnInlh6DkvZXlm77lvaLvvIzpgqPkuYjlj6rmmL7npLrlhbbnu5PmnoRcbiAgICAgKi9cbiAgICBpc1N0cnVjdE5vZGU6IChub2RlKSA9PiB7XG4gICAgICAgIC8vIOS7pSPlj7flvIDlpLRcbiAgICAgICAgaWYgKG5vZGUubmFtZS5zdGFydHNXaXRoKFwiI1wiKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeWVzVHlwZXMgPSBbJ1JFQ1RBTkdMRScsICdWRUNUT1InLCAnU1RBUicsICdMSU5FJywgJ1BPTFlHT04nLCAnRUxMSVBTRScsICdTTElDRSddO1xuICAgICAgICAvLyDlpoLmnpzmnKzouqvlsLHmmK/ov5nkupvlhYPntKDpgqPkuYjkuZ/mmK/nm7TmjqXovpPlh7pcbiAgICAgICAgaWYgKHllc1R5cGVzLmluZGV4T2Yobm9kZS50eXBlKSA+IC0xKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobm9kZS50eXBlID09PSAnVEVYVCcpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGNvbnN0IHsgY2hpbGRyZW4gPSBbXSB9ID0gbm9kZTtcbiAgICAgICAgaWYgKCFjaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIOaJvuWIsOS6huS4jeWQiOazleWFg+e0oO+8iOS4jeWcqOS4iumdoueahOWHoOS9leWIl+ihqOmHjOmdou+8iVxuICAgICAgICBjb25zdCBnb3RObyA9IGNoaWxkcmVuLmZpbmQoKGl0ZW0pID0+IHllc1R5cGVzLmluZGV4T2YoaXRlbS50eXBlKSA9PT0gLTEpO1xuICAgICAgICByZXR1cm4gIWdvdE5vO1xuICAgIH0sXG4gICAgaXNSZW5kZXJDaGlsZHJlbjogKG5vZGUpID0+IHtcbiAgICAgICAgaWYgKCEobm9kZS50eXBlID09PSAnSU5TVEFOQ0UnIHx8IG5vZGUudHlwZSA9PT0gJ0NPTVBPTkVOVCcpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8g5Y+q5pyJ5LiA5Liq5a2Q5YWD57SgXG4gICAgICAgIGlmIChub2RlLmNoaWxkcmVuLmxlbmd0aCAhPT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIGNvbnN0IG9ubHlDaGlsZHJlbiA9IG5vZGUuY2hpbGRyZW5bMF07XG4gICAgICAgIC8vIGlmIChvbmx5Q2hpbGRyZW4udHlwZSA9PT0gJ0lOU1RBTkNFJykge1xuICAgICAgICAvLyAgIHJldHVybiB0cnVlO1xuICAgICAgICAvLyB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LFxuICAgIGdldE5vZGVJbmZvOiAobm9kZSkgPT4ge1xuICAgICAgICBpZiAoIW5vZGUudmlzaWJsZSB8fCBub2RlLm5hbWUuc3RhcnRzV2l0aChcIl9cIikpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIC8vIOebtOaOpea4suafk+WtkOWFg+e0oFxuICAgICAgICBpZiAoTk9ERS5pc1JlbmRlckNoaWxkcmVuKG5vZGUpKSB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlO1xuICAgICAgICAgICAgcmV0dXJuIE5PREUuZ2V0Tm9kZUluZm8obm9kZS5jaGlsZHJlblswXSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaXNTdHJ1Y3ROb2RlID0gTk9ERS5pc1N0cnVjdE5vZGUobm9kZSk7XG4gICAgICAgIGxldCBub2RlSW5mbyA9IHtcbiAgICAgICAgICAgIC8vIG5vZGUsXG4gICAgICAgICAgICB0YWdOYW1lOiBOT0RFLmlzQmxvY2tFbGVtZW50KG5vZGUpID8gJ2RpdicgOiAnc3BhbicsXG4gICAgICAgICAgICBpZ25vcmVDbGFzc05hbWVzOiBbXSxcbiAgICAgICAgICAgIGNsYXNzTmFtZXM6IFtdLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtdXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IENPTVBPTkVOVC5nZXRJbmZvKG5vZGUpO1xuICAgICAgICBjb25zdCBmaWxsID0gRklMTC5nZXRJbmZvKG5vZGUpO1xuICAgICAgICBjb25zdCB0ZXh0ID0gVEVYVC5nZXRJbmZvKG5vZGUpO1xuICAgICAgICBjb25zdCBzdHJva2UgPSBTVFJPS0UuZ2V0SW5mbyhub2RlKTtcbiAgICAgICAgY29uc3QgZ3JpZCA9IEdSSUQuZ2V0SW5mbyhub2RlKTtcbiAgICAgICAgY29uc3QgZWZmZWN0ID0gRUZGRUNULmdldEluZm8obm9kZSk7XG4gICAgICAgIGNvbnN0IG90aGVycyA9IE9USEVSUy5nZXRJbmZvKG5vZGUpO1xuICAgICAgICBjb25zdCBmbGV4ID0gRkxFWC5nZXRJbmZvKG5vZGUpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh7Y29tcG9uZW50LCBmaWxsLCB0ZXh0LCBzdHJva2UsIGdyaWQsIGVmZmVjdH0pO1xuICAgICAgICBub2RlSW5mbyA9IE5PREUuZXh0ZW5kSW5mbyhub2RlSW5mbywgZmlsbCk7XG4gICAgICAgIG5vZGVJbmZvID0gTk9ERS5leHRlbmRJbmZvKG5vZGVJbmZvLCB0ZXh0KTtcbiAgICAgICAgbm9kZUluZm8gPSBOT0RFLmV4dGVuZEluZm8obm9kZUluZm8sIHN0cm9rZSk7XG4gICAgICAgIG5vZGVJbmZvID0gTk9ERS5leHRlbmRJbmZvKG5vZGVJbmZvLCBncmlkKTtcbiAgICAgICAgbm9kZUluZm8gPSBOT0RFLmV4dGVuZEluZm8obm9kZUluZm8sIGVmZmVjdCk7XG4gICAgICAgIG5vZGVJbmZvID0gTk9ERS5leHRlbmRJbmZvKG5vZGVJbmZvLCBjb21wb25lbnQpO1xuICAgICAgICBub2RlSW5mbyA9IE5PREUuZXh0ZW5kSW5mbyhub2RlSW5mbywgZmxleCk7XG4gICAgICAgIG5vZGVJbmZvID0gTk9ERS5leHRlbmRJbmZvKG5vZGVJbmZvLCBvdGhlcnMpO1xuICAgICAgICBpZiAoaXNTdHJ1Y3ROb2RlIHx8IChjb21wb25lbnQgPT09IG51bGwgfHwgY29tcG9uZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjb21wb25lbnQuY29tcG9uZW50TmFtZSkpIHtcbiAgICAgICAgICAgIG5vZGVJbmZvLmNsYXNzTmFtZXMucHVzaChBQ1NTLmFkZCgnaCcsIHBhcnNlSW50KFN0cmluZyhub2RlLmhlaWdodCkpKSk7XG4gICAgICAgICAgICBub2RlSW5mby5jbGFzc05hbWVzLnB1c2goQUNTUy5hZGQoJ3cnLCBwYXJzZUludChTdHJpbmcobm9kZS53aWR0aCkpKSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyBzdG9wUmVuZGVyQ2hpbGRyZW4gPSBmYWxzZSB9ID0gY29tcG9uZW50IHx8IHt9O1xuICAgICAgICAvLyDmuLLmn5PlrZDoioLngrlcbiAgICAgICAgaWYgKCFzdG9wUmVuZGVyQ2hpbGRyZW4gJiYgIWlzU3RydWN0Tm9kZSkge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgbm9kZUluZm8uY2hpbGRyZW4gPSBub2RlLnR5cGUgPT09ICdURVhUJyA/IFtub2RlLmNoYXJhY3RlcnNdIDogTk9ERS5nZXROb2Rlc0luZm8obm9kZS5jaGlsZHJlbik7XG4gICAgICAgIH1cbiAgICAgICAgLy8g5oqKIGZsZXgg6Ze06Led5re75Yqg5Yiw5a2Q5YWD57SgXG4gICAgICAgIG5vZGVJbmZvLmNoaWxkcmVuID0gRkxFWC5hZGRDbGFzc05vZGVzKG5vZGVJbmZvLmNoaWxkcmVuLCBmbGV4ID09PSBudWxsIHx8IGZsZXggPT09IHZvaWQgMCA/IHZvaWQgMCA6IGZsZXguZ3V0dGVyQ2xhc3MpO1xuICAgICAgICAvLyDmlbTkuKrpobnnm67pg73lv73nlaXnmoQgY2xhc3NOYW1lc1xuICAgICAgICBjb25zdCB7IGlnbm9yZUNsYXNzTmFtZXMgPSBbXSB9ID0gQ09ORklHLmdldEN1cnJlbnQoKSB8fCB7fTtcbiAgICAgICAgbm9kZUluZm8uY2xhc3NOYW1lcyA9IFVUSUxTLmNsZWFyU3RpbmdBcnJheShub2RlSW5mby5jbGFzc05hbWVzLCBbLi4ubm9kZUluZm8uaWdub3JlQ2xhc3NOYW1lcywgLi4uaWdub3JlQ2xhc3NOYW1lc10pO1xuICAgICAgICBkZWxldGUgbm9kZUluZm8uaWdub3JlQ2xhc3NOYW1lcztcbiAgICAgICAgcmV0dXJuIG5vZGVJbmZvO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICog6I635Y+WIFRhZyBOYW1lXG4gICAgICogQHBhcmFtIG5vZGVcbiAgICAgKi9cbiAgICBpc0Jsb2NrRWxlbWVudDogKG5vZGUpID0+IHtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gbm9kZS5wYXJlbnQ7XG4gICAgICAgIC8vIOayoeacieeItuWFg+e0oFxuICAgICAgICBpZiAoIXBhcmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAvLyDlkozniLblhYPntKDlrr3luqbkuIDmoLdcbiAgICAgICAgaWYgKG5vZGUud2lkdGggPT09IHBhcmVudC53aWR0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgLy8g5aaC5p6c54i25YWD57Sg5piv57q15ZCRIOeahCBmbGV4IOW4g+WxgFxuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGlmIChwYXJlbnQubGF5b3V0TW9kZSAhPT0gXCJOT05FXCIpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LFxuICAgIHNvcnQ6IChub2RlcyA9IFtdKSA9PiB7XG4gICAgICAgIHJldHVybiBbLi4ubm9kZXNdLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgIGlmIChhLnkgPT09IGIueSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBhLnggLSBiLng7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYS55IC0gYi55O1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIGdldE5vZGVzSW5mbzogKG5vZGVzID0gW10pID0+IHtcbiAgICAgICAgbGV0IGluZm8gPSBbXTtcbiAgICAgICAgLy8g6ZyA6KaB5o6S5bqP5LiA5LiLXG4gICAgICAgIGNvbnN0IHNvcnROb2RlcyA9IE5PREUuc29ydChub2Rlcyk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBzb3J0Tm9kZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IG5vZGVJbmZvID0gTk9ERS5nZXROb2RlSW5mbyhzb3J0Tm9kZXNbaV0pO1xuICAgICAgICAgICAgbm9kZUluZm8gJiYgaW5mby5wdXNoKG5vZGVJbmZvKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW5mbztcbiAgICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgTk9ERTtcbiIsImNvbnN0IFVUSUxTID0ge1xuICAgIGlzQmxvY2s6ICh0YWdOYW1lID0gJycpID0+IHtcbiAgICAgICAgY29uc3QgYmxvY2tUYWcgPSBbJ2RpdicsICdoMScsICdoMicsICdoMycsICdoNCcsICdoNScsICdoNicsICdwJ107XG4gICAgICAgIHJldHVybiBibG9ja1RhZy5pbmRleE9mKHRhZ05hbWUpID4gLTE7XG4gICAgfSxcbiAgICBpc1NlbGZUYWc6ICh0YWdOYW1lID0gJycpID0+IHtcbiAgICAgICAgY29uc3Qgc2VsZlRhZyA9IFsnaW1nJywgJ2xpbmsnLCAnbWV0YScsICdicicsICdicicsICdocicsICdpbnB1dCcsICdjb2wnLCAnZnJhbWUnLCAnYXJlYScsICdwYXJhbScsICdvYmplY3QnLCAnZW1iZWQnLCAna2V5Z2VuJywgJ3NvdXJjZSddO1xuICAgICAgICByZXR1cm4gc2VsZlRhZy5pbmRleE9mKHRhZ05hbWUpID4gLTE7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiDljrvph43lkozljrvnqbpcbiAgICAgKiBAcGFyYW0gYXJyU3RyXG4gICAgICovXG4gICAgY2xlYXJTdGluZ0FycmF5OiAoYXJyU3RyID0gW10sIGFycklnbm9yZSA9IFtdKSA9PiB7XG4gICAgICAgIGlmICghYXJyU3RyIHx8ICFhcnJTdHIubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgICAgIGFyclN0ci5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBpZiAoaXRlbSAmJiByZXN1bHQuaW5kZXhPZihpdGVtKSA9PT0gLTEgJiYgYXJySWdub3JlLmluZGV4T2YoaXRlbSkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goaXRlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn07XG5leHBvcnQgZGVmYXVsdCBVVElMUztcbiIsImltcG9ydCBIVE1MIGZyb20gXCIuL0hUTUxcIjtcbmltcG9ydCBKU1ggZnJvbSBcIi4vSlNYXCI7XG5jb25zdCBET00gPSB7XG4gICAgcmVuZGVyOiAob2JqID0gW10sIGlzSlNYKSA9PiB7XG4gICAgICAgIGlmIChpc0pTWCkge1xuICAgICAgICAgICAgcmV0dXJuIEpTWC5nZXREb21CeUFycmF5KG9iaik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIEhUTUwuZ2V0RG9tQnlBcnJheShvYmopO1xuICAgIH1cbn07XG5leHBvcnQgZGVmYXVsdCBET007XG4iLCJpbXBvcnQgVVRJTFMgZnJvbSBcIi4uL1VUSUxTXCI7XG5pbXBvcnQgZ2V0UHJvcHNBcnJheSBmcm9tIFwiLi9nZXRQcm9wc0FycmF5XCI7XG5jb25zdCBIVE1MID0ge1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBnZXRJdGVtRG9tOiAoaXRlbSkgPT4ge1xuICAgICAgICBpZiAoIWl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGl0ZW0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IHRhZ05hbWUgPSAnaScsIGNoaWxkcmVuID0gW10sIGNsYXNzTmFtZXMgPSBbXSB9ID0gaXRlbTtcbiAgICAgICAgY29uc3QgYXJyUHJvcHMgPSBnZXRQcm9wc0FycmF5KHtcbiAgICAgICAgICAgIGNsYXNzOiBjbGFzc05hbWVzLmpvaW4oJyAnKVxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgdGFnU3RhcnQgPSBgJHt0YWdOYW1lfSR7YXJyUHJvcHMubGVuZ3RoID8gYCAke2FyclByb3BzLmpvaW4oJyAnKX1gIDogJyd9YDtcbiAgICAgICAgaWYgKFVUSUxTLmlzU2VsZlRhZyh0YWdOYW1lKSkge1xuICAgICAgICAgICAgcmV0dXJuIGA8JHt0YWdTdGFydH0vPmA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFjaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBgPCR7dGFnU3RhcnR9PjwvJHt0YWdOYW1lfT5gO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBgPCR7dGFnU3RhcnR9PiR7SFRNTC5nZXREb21CeUFycmF5KGNoaWxkcmVuKX08LyR7dGFnTmFtZX0+YDtcbiAgICB9LFxuICAgIGdldERvbUJ5QXJyYXk6IChvYmogPSBbXSkgPT4ge1xuICAgICAgICByZXR1cm4gb2JqLm1hcCgoaXRlbSkgPT4gSFRNTC5nZXRJdGVtRG9tKGl0ZW0pKS5qb2luKCcnKTtcbiAgICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgSFRNTDtcbiIsImltcG9ydCBVVElMUyBmcm9tIFwiLi4vVVRJTFNcIjtcbmltcG9ydCBnZXRQcm9wc0FycmF5IGZyb20gXCIuL2dldFByb3BzQXJyYXlcIjtcbmNvbnN0IEpTWCA9IHtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgZ2V0SXRlbURvbTogKGl0ZW0pID0+IHtcbiAgICAgICAgaWYgKCFpdGVtKSB7XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyBjaGlsZHJlbiA9IFtdLCBwcm9wcyA9IHt9LCBjbGFzc05hbWVzID0gW10gfSA9IGl0ZW07XG4gICAgICAgIGNvbnN0IHRhZ05hbWUgPSBpdGVtLmNvbXBvbmVudE5hbWUgfHwgaXRlbS50YWdOYW1lO1xuICAgICAgICBjb25zdCBhcnJQcm9wcyA9IGdldFByb3BzQXJyYXkoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBwcm9wcyksIHsgY2xhc3NOYW1lOiBjbGFzc05hbWVzLmZpbHRlcihpdGVtID0+IGl0ZW0pLmpvaW4oJyAnKSB9KSk7XG4gICAgICAgIGNvbnN0IHRhZ1N0YXJ0ID0gYCR7dGFnTmFtZX0ke2FyclByb3BzLmxlbmd0aCA/IGAgJHthcnJQcm9wcy5qb2luKCcgJyl9YCA6ICcnfWA7XG4gICAgICAgIGlmIChVVElMUy5pc1NlbGZUYWcodGFnTmFtZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBgPCR7dGFnU3RhcnR9Lz5gO1xuICAgICAgICB9XG4gICAgICAgIGlmICghY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaXRlbS5jb21wb25lbnROYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGA8JHt0YWdTdGFydH0vPmA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYDwke3RhZ1N0YXJ0fT48LyR7dGFnTmFtZX0+YDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYDwke3RhZ1N0YXJ0fT4ke0pTWC5nZXREb21CeUFycmF5KGNoaWxkcmVuKX08LyR7dGFnTmFtZX0+YDtcbiAgICB9LFxuICAgIGdldERvbUJ5QXJyYXk6IChvYmogPSBbXSkgPT4ge1xuICAgICAgICByZXR1cm4gb2JqLm1hcCgoaXRlbSkgPT4gSlNYLmdldEl0ZW1Eb20oaXRlbSkpLmpvaW4oJycpO1xuICAgIH1cbn07XG5leHBvcnQgZGVmYXVsdCBKU1g7XG4iLCJjb25zdCBnZXRQcm9wc0FycmF5ID0gKHByb3BzID0ge30pID0+IHtcbiAgICBjb25zdCBhcnJQcm9wcyA9IFtdO1xuICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHByb3BzKSkge1xuICAgICAgICBjb25zdCBpdGVtID0gKChrZXksIHZhbHVlKSA9PiB7XG4gICAgICAgICAgICBpZiAodmFsdWUgPT09ICcnIHx8IHZhbHVlID09PSBmYWxzZSB8fCB2YWx1ZSA9PT0gJ2ZhbHNlJykge1xuICAgICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gdHJ1ZSB8fCB2YWx1ZSA9PT0gJ3RydWUnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGtleTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYCR7a2V5fT1cIiR7dmFsdWV9XCJgO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGAke2tleX09eyR7SlNPTi5zdHJpbmdpZnkodmFsdWUpfX1gO1xuICAgICAgICB9KShrZXksIHZhbHVlKTtcbiAgICAgICAgaXRlbSAmJiBhcnJQcm9wcy5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgICByZXR1cm4gYXJyUHJvcHM7XG59O1xuZXhwb3J0IGRlZmF1bHQgZ2V0UHJvcHNBcnJheTtcbiIsImNvbnN0IENPTE9SID0ge1xuICAgIGdldFJnYmFCeUZpbGw6ICh7IGNvbG9yLCBvcGFjaXR5LCB2aXNpYmxlIH0pID0+IHtcbiAgICAgICAgLy8g5aaC5p6c5LiN5Y+v6KeBXG4gICAgICAgIGlmICghdmlzaWJsZSB8fCBvcGFjaXR5ID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByID0gcGFyc2VJbnQoU3RyaW5nKGNvbG9yLnIgKiAyNTUpKTtcbiAgICAgICAgY29uc3QgZyA9IHBhcnNlSW50KFN0cmluZyhjb2xvci5nICogMjU1KSk7XG4gICAgICAgIGNvbnN0IGIgPSBwYXJzZUludChTdHJpbmcoY29sb3IuYiAqIDI1NSkpO1xuICAgICAgICBjb25zdCBhID0gU3RyaW5nKG9wYWNpdHkpLmluZGV4T2YoJy4nKSA+IC0xID8gb3BhY2l0eS50b0ZpeGVkKDEpIDogb3BhY2l0eTtcbiAgICAgICAgcmV0dXJuIFtyLCBnLCBiLCBhXTtcbiAgICB9LFxufTtcbmV4cG9ydCBkZWZhdWx0IENPTE9SO1xuIiwiaW1wb3J0IENPTkZJRyBmcm9tIFwiLi4vQ09ORklHXCI7XG5jb25zdCBFRkZFQ1QgPSB7XG4gICAgZ2V0SW5mbzogKG5vZGUpID0+IHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICByZXR1cm4gQ09ORklHLmdldEluZm9CeUlkKG5vZGUuZWZmZWN0U3R5bGVJZCk7XG4gICAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IEVGRkVDVDtcbiIsImltcG9ydCBDT0xPUiBmcm9tIFwiLi9DT0xPUlwiO1xuaW1wb3J0IENPTkZJRyBmcm9tIFwiLi4vQ09ORklHXCI7XG5pbXBvcnQgQUNTUyBmcm9tIFwiLi4vQUNTU1wiO1xuY29uc3QgRklMTCA9IHtcbiAgICBnZXRGaWxsOiAobm9kZSkgPT4ge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGNvbnN0IFtmaXJzdEZpbGwgPSBudWxsXSA9IG5vZGUuZmlsbHMgfHwgW107XG4gICAgICAgIC8vIOayoeacieiuvue9ruS7u+S9leminOiJsiwg55uu5YmN5LiN5pSv5oyB5riQ5Y+YXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgaWYgKCFmaXJzdEZpbGwgfHwgZmlyc3RGaWxsLnR5cGUgIT09ICdTT0xJRCcpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvbG9yID0gQ09MT1IuZ2V0UmdiYUJ5RmlsbChmaXJzdEZpbGwpO1xuICAgICAgICBpZiAoIWNvbG9yKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBub2RlLnR5cGUgPT09ICdURVhUJyA/IEFDU1MuYWRkQ29sb3IoY29sb3IpIDogQUNTUy5hZGRCZ0NvbG9yKGNvbG9yKTtcbiAgICAgICAgLy8g5paH5pys5piv55So6aKc6Imy77yM5YW25a6D55CG6Kej5Li66IOM5pmv6ImyXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjbGFzc05hbWVzOiBbY2xhc3NOYW1lXVxuICAgICAgICB9O1xuICAgIH0sXG4gICAgLy8g6I635Y+W5aGr5YWF5L+h5oGvXG4gICAgZ2V0SW5mbzogKG5vZGUpID0+IHtcbiAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgIHJldHVybiBDT05GSUcuZ2V0SW5mb0J5SWQobm9kZS5maWxsU3R5bGVJZCkgfHwgRklMTC5nZXRGaWxsKG5vZGUpO1xuICAgIH0sXG59O1xuZXhwb3J0IGRlZmF1bHQgRklMTDtcbiIsImltcG9ydCBBQ1NTIGZyb20gXCIuLi9BQ1NTXCI7XG4vLyBpbXBvcnQgQ09ORklHIGZyb20gXCIuL0NPTkZJR1wiO1xuY29uc3QgRkxFWCA9IHtcbiAgICBnZXRGbGV4OiAobm9kZSkgPT4ge1xuICAgICAgICBjb25zdCB7IGxheW91dE1vZGUsIHByaW1hcnlBeGlzQWxpZ25JdGVtcywgY291bnRlckF4aXNBbGlnbkl0ZW1zLCBpdGVtU3BhY2luZyB9ID0gbm9kZTtcbiAgICAgICAgLy8g5rKh5pyJ5piv55SoIEZsZXgg5biD5bGAXG4gICAgICAgIGlmIChsYXlvdXRNb2RlID09PSBcIk5PTkVcIikge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgLy8g5rKh5pyJ5a2Q5YWD57SgIGZsZXgg5biD5bGA5rKh5pyJ5oSP5LmJXG4gICAgICAgIGNvbnN0IHsgY2hpbGRyZW4gPSBbXSB9ID0gbm9kZTtcbiAgICAgICAgaWYgKCFjaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZXMgPSBbXTtcbiAgICAgICAgY29uc3QgZ3V0dGVyQ2xhc3MgPSBbXTtcbiAgICAgICAgLy8g5Li65a2Q5YWD57Sg5re75Yqg6Ze06LedXG4gICAgICAgIGlmIChpdGVtU3BhY2luZyA+IDAgJiYgcHJpbWFyeUF4aXNBbGlnbkl0ZW1zICE9PSBcIlNQQUNFX0JFVFdFRU5cIikge1xuICAgICAgICAgICAgY29uc3QgZ3V0dGVyTWFwID0ge1xuICAgICAgICAgICAgICAgIFwiVkVSVElDQUxcIjogXCJtYlwiLFxuICAgICAgICAgICAgICAgIFwiSE9SSVpPTlRBTFwiOiBcIm1yXCJcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBndXR0ZXJDbGFzcy5wdXNoKEFDU1MuYWRkKGd1dHRlck1hcFtsYXlvdXRNb2RlXSwgaXRlbVNwYWNpbmcpKTtcbiAgICAgICAgfVxuICAgICAgICAvLyDlpoLmnpzmmK/nurXlkJHnmoQg6L+Z6YeM5Y+v5Lul5LiN5L2/55SoIGZsZXgg5biD5bGAXG4gICAgICAgIGlmIChsYXlvdXRNb2RlID09PSAnVkVSVElDQUwnKSB7XG4gICAgICAgICAgICAvLyDlvZPmmK/nurXlkJHluIPlsYDlvZPml7blgJlcbiAgICAgICAgICAgIGNsYXNzTmFtZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgLy8gXCJNSU5cIjogXCJcIixcbiAgICAgICAgICAgICAgICBcIkNFTlRFUlwiOiBcInRhY1wiLFxuICAgICAgICAgICAgICAgIFwiTUFYXCI6IFwidGFyXCIsXG4gICAgICAgICAgICB9W2NvdW50ZXJBeGlzQWxpZ25JdGVtc10pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY2xhc3NOYW1lcy5wdXNoKCdkZicpO1xuICAgICAgICAgICAgY2xhc3NOYW1lcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAvLyBcIk1JTlwiOiBcIlwiLFxuICAgICAgICAgICAgICAgIFwiQ0VOVEVSXCI6IFwiamNjXCIsXG4gICAgICAgICAgICAgICAgXCJNQVhcIjogXCJqY2ZlXCIsXG4gICAgICAgICAgICAgICAgXCJTUEFDRV9CRVRXRUVOXCI6IFwiamNzYlwiLFxuICAgICAgICAgICAgfVtwcmltYXJ5QXhpc0FsaWduSXRlbXNdKTtcbiAgICAgICAgICAgIGNsYXNzTmFtZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgLy9cIk1JTlwiOiBcIlwiLFxuICAgICAgICAgICAgICAgIFwiQ0VOVEVSXCI6IFwiYWljXCIsXG4gICAgICAgICAgICAgICAgXCJNQVhcIjogXCJhaWZlXCIsXG4gICAgICAgICAgICB9W2NvdW50ZXJBeGlzQWxpZ25JdGVtc10gfHwgXCJcIik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZXMsXG4gICAgICAgICAgICBndXR0ZXJDbGFzc1xuICAgICAgICB9O1xuICAgIH0sXG4gICAgYWRkQ2xhc3NOb2RlczogKGFyck5vZGUgPSBbXSwgZ3V0dGVyQ2xhc3MgPSBbXSkgPT4ge1xuICAgICAgICBpZiAoIShndXR0ZXJDbGFzcyA9PT0gbnVsbCB8fCBndXR0ZXJDbGFzcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogZ3V0dGVyQ2xhc3MubGVuZ3RoKSkge1xuICAgICAgICAgICAgcmV0dXJuIGFyck5vZGU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFyck5vZGUubWFwKChpdGVtLCBrZXkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgY2xhc3NOYW1lcyA9IFtdIH0gPSBpdGVtO1xuICAgICAgICAgICAgLy8g5pyA5ZCO5LiA5Liq5YWD57Sg5LiN5YGa5Lu75L2V5aSE55CGXG4gICAgICAgICAgICBpZiAoa2V5ICE9PSBhcnJOb2RlLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTmFtZXMgPSBbLi4uY2xhc3NOYW1lcywgLi4uZ3V0dGVyQ2xhc3NdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaXRlbS5jbGFzc05hbWVzID0gY2xhc3NOYW1lcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIGdldEluZm86IChub2RlKSA9PiB7XG4gICAgICAgIC8vIOi/meWHoOS4quWFg+e0oOmDveS4jeWBmuWkhOeQhlxuICAgICAgICBpZiAoWydURVhUJ10uaW5kZXhPZihub2RlLnR5cGUpID4gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgcmV0dXJuIEZMRVguZ2V0RmxleChub2RlKTtcbiAgICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgRkxFWDtcbiIsImltcG9ydCBDT05GSUcgZnJvbSBcIi4uL0NPTkZJR1wiO1xuY29uc3QgR1JJRCA9IHtcbiAgICBnZXRJbmZvOiAobm9kZSkgPT4ge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHJldHVybiBDT05GSUcuZ2V0SW5mb0J5SWQobm9kZS5ncmlkU3R5bGVJZCk7XG4gICAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IEdSSUQ7XG4iLCJpbXBvcnQgQUNTUyBmcm9tIFwiLi4vQUNTU1wiO1xuY29uc3QgT1RIRVJTID0ge1xuICAgIGdlckJvcmRlclJhZGl1c0NsYXNzTmFtZXM6IChub2RlKSA9PiB7XG4gICAgICAgIGNvbnN0IHRsID0gbm9kZS50b3BMZWZ0UmFkaXVzIHx8IDA7XG4gICAgICAgIGNvbnN0IHRyID0gbm9kZS50b3BSaWdodFJhZGl1cyB8fCAwO1xuICAgICAgICBjb25zdCBiciA9IG5vZGUuYm90dG9tUmlnaHRSYWRpdXMgfHwgMDtcbiAgICAgICAgY29uc3QgYmwgPSBub2RlLmJvdHRvbUxlZnRSYWRpdXMgfHwgMDtcbiAgICAgICAgLy8g5YWo6YOo5Li6IDBcbiAgICAgICAgaWYgKCh0bCArIHRyICsgYnIgKyBibCkgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuICAgICAgICAvLyDlpoLmnpzlm5vkuKrlgLzpg73nm7jnrYlcbiAgICAgICAgaWYgKCh0bCA9PT0gdHIpICYmICh0bCA9PT0gYnIpICYmICh0bCA9PT0gYmwpKSB7XG4gICAgICAgICAgICByZXR1cm4gW0FDU1MuYWRkKCdicicsIHRsKV07XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY2xhc3NOYW1lcyA9IFtdO1xuICAgICAgICB0bCAmJiBjbGFzc05hbWVzLnB1c2goQUNTUy5hZGQoJ2J0bHInLCB0bCkpO1xuICAgICAgICB0ciAmJiBjbGFzc05hbWVzLnB1c2goQUNTUy5hZGQoJ2J0cnInLCB0cikpO1xuICAgICAgICBiciAmJiBjbGFzc05hbWVzLnB1c2goQUNTUy5hZGQoJ2JicnInLCBicikpO1xuICAgICAgICBibCAmJiBjbGFzc05hbWVzLnB1c2goQUNTUy5hZGQoJ2JibHInLCBibCkpO1xuICAgICAgICByZXR1cm4gY2xhc3NOYW1lcztcbiAgICB9LFxuICAgIGdldFBhZGRpbmdDbGFzc05hbWVzOiAobm9kZSkgPT4ge1xuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgQUNTUy5hZGQoJ3B0Jywgbm9kZS5wYWRkaW5nVG9wKSxcbiAgICAgICAgICAgIEFDU1MuYWRkKCdwcicsIG5vZGUucGFkZGluZ1JpZ2h0KSxcbiAgICAgICAgICAgIEFDU1MuYWRkKCdwYicsIG5vZGUucGFkZGluZ0JvdHRvbSksXG4gICAgICAgICAgICBBQ1NTLmFkZCgncGwnLCBub2RlLnBhZGRpbmdMZWZ0KSxcbiAgICAgICAgXTtcbiAgICB9LFxuICAgIGdldEluZm86IChub2RlKSA9PiB7XG4gICAgICAgIGNvbnN0IHBhZGRpbmcgPSBPVEhFUlMuZ2V0UGFkZGluZ0NsYXNzTmFtZXMobm9kZSk7XG4gICAgICAgIGNvbnN0IHJhZGl1cyA9IE9USEVSUy5nZXJCb3JkZXJSYWRpdXNDbGFzc05hbWVzKG5vZGUpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY2xhc3NOYW1lczogWy4uLnBhZGRpbmcsIC4uLnJhZGl1c11cbiAgICAgICAgfTtcbiAgICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgT1RIRVJTO1xuIiwiaW1wb3J0IENPTkZJRyBmcm9tIFwiLi4vQ09ORklHXCI7XG5jb25zdCBTVFJPS0UgPSB7XG4gICAgLy8g5paH5pys57uE5Lu2XG4gICAgZ2V0SW5mbzogKG5vZGUpID0+IHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICByZXR1cm4gQ09ORklHLmdldEluZm9CeUlkKG5vZGUuc3Ryb2tlU3R5bGVJZCk7XG4gICAgfSxcbn07XG5leHBvcnQgZGVmYXVsdCBTVFJPS0U7XG4iLCJpbXBvcnQgQ09ORklHIGZyb20gXCIuLi9DT05GSUdcIjtcbmltcG9ydCBBQ1NTIGZyb20gXCIuLi9BQ1NTXCI7XG5jb25zdCBURVhUID0ge1xuICAgIHVuaXRNYXA6IHtcbiAgICAgICAgJ1BFUkNFTlQnOiAnJSdcbiAgICAgICAgLy8gXCJQSVhFTFNcIjpcIlwiXG4gICAgfSxcbiAgICBnZXRGb250TmFtZUNsYXNzOiAobm9kZSkgPT4ge1xuICAgICAgICBjb25zdCB7IGZvbnROYW1lIH0gPSBub2RlO1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGNvbnN0IHsgc3R5bGUgfSA9IGZvbnROYW1lO1xuICAgICAgICBpZiAodHlwZW9mIHN0eWxlICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGZvbnRNYXAgPSB7XG4gICAgICAgICAgICBcIlVMVFJBTElHSFRcIjogXCJmdzEwMFwiLFxuICAgICAgICAgICAgXCJUSElOXCI6ICdmdzIwMCcsXG4gICAgICAgICAgICBcIkxJR0hUXCI6IFwiZnczMDBcIixcbiAgICAgICAgICAgIFwiUkVHVUxBUlwiOiBcIlwiLFxuICAgICAgICAgICAgXCJNRURJVU1cIjogXCJmdzUwMFwiLFxuICAgICAgICAgICAgXCJTRU1JQk9MRFwiOiBcImZ3NjAwXCIsXG4gICAgICAgICAgICBcIkJPTERcIjogXCJmdzcwMFwiLFxuICAgICAgICAgICAgXCJCTEFDS1wiOiBcImZ3OTAwXCIsXG4gICAgICAgICAgICBcIklUQUxJQ1wiOiBcImZzaVwiLFxuICAgICAgICAgICAgXCJPQkxJUVVFXCI6IFwiZnNpXCJcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgY2xhc3NOYW1lcyA9IHN0eWxlLnNwbGl0KCcgJykubWFwKChpdGVtKSA9PiBmb250TWFwW2l0ZW0udG9VcHBlckNhc2UoKV0gfHwgJycpO1xuICAgICAgICByZXR1cm4gY2xhc3NOYW1lcy5maWx0ZXIoaXRlbSA9PiBpdGVtKS5qb2luKCcgJyk7XG4gICAgfSxcbiAgICBnZXRBQ1NTU0luZm86IChub2RlKSA9PiB7XG4gICAgICAgIHZhciBfYSwgX2IsIF9jO1xuICAgICAgICBjb25zdCBjbGFzc05hbWVzID0gW107XG4gICAgICAgIGlmIChbXCJzdHJpbmdcIiwgXCJudW1iZXJcIl0uaW5kZXhPZih0eXBlb2Ygbm9kZS5mb250U2l6ZSkgPiAtMSkge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgY2xhc3NOYW1lcy5wdXNoKEFDU1MuYWRkKCdmcycsIG5vZGUuZm9udFNpemUpKTtcbiAgICAgICAgfVxuICAgICAgICAvLyDmna3pq5hcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBpZiAoKF9hID0gbm9kZS5saW5lSGVpZ2h0KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EudmFsdWUpIHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIGNvbnN0IHsgdmFsdWUsIHVuaXQgfSA9IG5vZGUubGluZUhlaWdodDtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIGNsYXNzTmFtZXMucHVzaChBQ1NTLmFkZCgnbGgnLCB2YWx1ZSwgVEVYVC51bml0TWFwW3VuaXRdKSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8g5a2X6Ze06LedXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgaWYgKChfYiA9IG5vZGUubGV0dGVyU3BhY2luZykgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLnZhbHVlKSB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBjb25zdCB7IHZhbHVlLCB1bml0IH0gPSBub2RlLmxldHRlclNwYWNpbmc7XG4gICAgICAgICAgICBjbGFzc05hbWVzLnB1c2goQUNTUy5hZGQoJ2xzJywgdmFsdWUsIFRFWFQudW5pdE1hcFt1bml0XSkpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGZvbnQtd2VpZ2h0IGZvbnQtc3R5bGVcbiAgICAgICAgY29uc3QgZm5DbGFzcyA9IFRFWFQuZ2V0Rm9udE5hbWVDbGFzcyhub2RlKTtcbiAgICAgICAgZm5DbGFzcyAmJiBjbGFzc05hbWVzLnB1c2goZm5DbGFzcyk7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgaWYgKChfYyA9IG5vZGUuZm9udE5hbWUpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5mYW1pbHkpIHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIGNsYXNzTmFtZXMucHVzaChBQ1NTLmFkZEZvbnRGYW1pbHkobm9kZS5mb250TmFtZS5mYW1pbHkpKTtcbiAgICAgICAgfVxuICAgICAgICAvLyB0ZXh0LWFsaWduXG4gICAgICAgIGNvbnN0IHRhQ2xhc3MgPSB7XG4gICAgICAgICAgICBcIkxFRlRcIjogJycsXG4gICAgICAgICAgICBcIkNFTlRFUlwiOiAndGFjJyxcbiAgICAgICAgICAgIFwiUklHSFRcIjogJ3RhcicsXG4gICAgICAgICAgICBcIkpVU1RJRklFRFwiOiAndGFqJyxcbiAgICAgICAgfVtub2RlLnRleHRBbGlnbkhvcml6b250YWxdO1xuICAgICAgICB0YUNsYXNzICYmIGNsYXNzTmFtZXMucHVzaCh0YUNsYXNzKTtcbiAgICAgICAgLy8gdmVydGljYWwtYWxpZ25cbiAgICAgICAgY29uc3QgdmFDbGFzcyA9IHtcbiAgICAgICAgICAgIFwiVE9QXCI6ICcnLFxuICAgICAgICAgICAgXCJDRU5URVJcIjogJ3ZhbScsXG4gICAgICAgICAgICBcIkJPVFRPTVwiOiAndmFiJyxcbiAgICAgICAgfVtub2RlLnRleHRBbGlnblZlcnRpY2FsXTtcbiAgICAgICAgdmFDbGFzcyAmJiBjbGFzc05hbWVzLnB1c2godmFDbGFzcyk7XG4gICAgICAgIC8vIHR0XG4gICAgICAgIGNvbnN0IHR0Q2xhc3MgPSB7XG4gICAgICAgICAgICBcIk9SSUdJTkFMXCI6ICcnLFxuICAgICAgICAgICAgXCJVUFBFUlwiOiAndHR1JyxcbiAgICAgICAgICAgIFwiTE9XRVJcIjogJ3R0bCcsXG4gICAgICAgICAgICBcIlRJVExFXCI6ICd0dGMnLFxuICAgICAgICB9W25vZGUudGV4dENhc2VdO1xuICAgICAgICB0dENsYXNzICYmIGNsYXNzTmFtZXMucHVzaCh0dENsYXNzKTtcbiAgICAgICAgLy8gdGRcbiAgICAgICAgY29uc3QgdGRDbGFzcyA9IHtcbiAgICAgICAgICAgIFwiTk9ORVwiOiBcIlwiLFxuICAgICAgICAgICAgXCJVTkRFUkxJTkVcIjogJ3RkdScsXG4gICAgICAgICAgICBcIlNUUklLRVRIUk9VR0hcIjogJ3RkbCdcbiAgICAgICAgfVtub2RlLnRleHREZWNvcmF0aW9uXTtcbiAgICAgICAgdGRDbGFzcyAmJiBjbGFzc05hbWVzLnB1c2godGRDbGFzcyk7XG4gICAgICAgIHJldHVybiBjbGFzc05hbWVzO1xuICAgIH0sXG4gICAgLy8g5paH5pys57uE5Lu2XG4gICAgZ2V0SW5mbzogKG5vZGUpID0+IHtcbiAgICAgICAgaWYgKG5vZGUudHlwZSAhPT0gJ1RFWFQnKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGNvbnN0IHsgY2xhc3NOYW1lcyA9IFtdLCBpZ25vcmVDbGFzc05hbWVzID0gW10gfSA9IENPTkZJRy5nZXRJbmZvQnlJZChub2RlLnRleHRTdHlsZUlkKSB8fCB7fTtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY2xhc3NOYW1lczogY2xhc3NOYW1lcy5sZW5ndGggPyBjbGFzc05hbWVzIDogVEVYVC5nZXRBQ1NTU0luZm8obm9kZSksXG4gICAgICAgICAgICBpZ25vcmVDbGFzc05hbWVzOiBpZ25vcmVDbGFzc05hbWVzXG4gICAgICAgIH07XG4gICAgfSxcbn07XG5leHBvcnQgZGVmYXVsdCBURVhUO1xuIiwiaW1wb3J0IE5PREUgZnJvbSBcIi4vXy9OT0RFXCI7XG5pbXBvcnQgQ09ORklHIGZyb20gXCIuL18vQ09ORklHXCI7XG5pbXBvcnQgQUNTUyBmcm9tIFwiLi9fL0FDU1NcIjtcbmltcG9ydCBET00gZnJvbSBcIi4vXy9yZW5kZXIvRE9NXCI7XG5jb25zdCBBUEkgPSB7XG4gICAgdGFiSW5kZXg6IDAsXG4gICAgZ2V0U2VsZWN0aW9uOiAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbiA9IGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbjtcbiAgICAgICAgaWYgKCFzZWxlY3Rpb24ubGVuZ3RoKSB7XG4gICAgICAgICAgICAvLyDmsqHmnInpgInmi6nku7vkvZXlhYPntKBcbiAgICAgICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHsgbm9TZWxlY3Rpb246IHRydWUgfSk7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2VsZWN0aW9uO1xuICAgIH0sXG4gICAgb25UYWJDaGFuZ2U6IChpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBiZWZvcmVJbmRleCA9IEFQSS50YWJJbmRleDtcbiAgICAgICAgQVBJLnRhYkluZGV4ID0gaW5kZXg7XG4gICAgICAgIC8vIOWmguaenOWPquaYr+WcqCBIVE1MIOWSjCBBQ1NTIOS5i+WJjeWIh+aNolxuICAgICAgICBpZiAoKGJlZm9yZUluZGV4ID09PSAwIHx8IGJlZm9yZUluZGV4ID09PSAxKSAmJiAoaW5kZXggPT09IDAgfHwgaW5kZXggPT09IDEpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYWN0aW9uTWFwID0gWydydW5Ib21lJywgJ3J1bkhvbWUnLCAncnVuQ29uZmlnJywgJ3J1blRva2VuJ107XG4gICAgICAgIGNvbnN0IGFjdGlvbiA9IGFjdGlvbk1hcFtpbmRleF07XG4gICAgICAgIGFjdGlvbiAmJiBBUElbYWN0aW9uXSgpO1xuICAgIH0sXG4gICAgb25TZWxlY3Rpb25DaGFuZ2U6ICgpID0+IHtcbiAgICAgICAgLy8g5pu05paw5qC35byPXG4gICAgICAgIGlmIChBUEkudGFiSW5kZXggPT09IDAgfHwgQVBJLnRhYkluZGV4ID09PSAyKSB7XG4gICAgICAgICAgICBBUEkucnVuSG9tZSgpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBydW5Ib21lOiAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbiA9IEFQSS5nZXRTZWxlY3Rpb24oKTtcbiAgICAgICAgaWYgKCFzZWxlY3Rpb24pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBBQ1NTLmluaXQoKTtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBjb25zdCBJbmZvID0gTk9ERS5nZXROb2Rlc0luZm8oc2VsZWN0aW9uKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coSW5mbyk7XG4gICAgICAgIGNvbnN0IGlzSlNYID0gQ09ORklHLmlzSlNYKCk7XG4gICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgIGdldEhUTUw6IERPTS5yZW5kZXIoSW5mbywgaXNKU1gpLFxuICAgICAgICAgICAgZ2V0Q1NTOiBBQ1NTLmdldFN0cmluZygpLFxuICAgICAgICAgICAgaXNKU1gsXG4gICAgICAgICAgICBub1NlbGVjdGlvbjogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBydW5Db25maWc6ICgpID0+IHtcbiAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgZ2V0Q29uZmlnOiBDT05GSUcuZ2V0QWxsKClcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBydW5Ub2tlbjogKCkgPT4ge1xuICAgICAgICBDT05GSUcuZ2V0QWxsVG9rZW5zKCk7XG4gICAgfSxcbiAgICBvbm1lc3NhZ2U6IChtc2cgPSB7fSkgPT4ge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGNvbnN0IHsgdHlwZSA9IG51bGwsIHZhbHVlID0gbnVsbCB9ID0gbXNnO1xuICAgICAgICBpZiAodHlwZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IFtuYW1lLCBhY3Rpb25dID0gdHlwZS5zcGxpdCgnLicpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnQVBJIG9ubWVzc2FnZScsIG5hbWUsIGFjdGlvbiwgdmFsdWUpO1xuICAgICAgICBpZiAobmFtZSA9PT0gJ0FQSScgJiYgKGFjdGlvbiBpbiBBUEkpKSB7XG4gICAgICAgICAgICBBUElbYWN0aW9uXSh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobmFtZSA9PT0gJ0NPTkZJRycgJiYgKGFjdGlvbiBpbiBDT05GSUcpKSB7XG4gICAgICAgICAgICBDT05GSUdbYWN0aW9uXSh2YWx1ZSk7XG4gICAgICAgICAgICBpZiAoYWN0aW9uID09PSAnY2hhbmdlSlNYJykge1xuICAgICAgICAgICAgICAgIEFQSS5ydW5Ib21lKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChhY3Rpb24gPT09ICdhcHBlbmRUb2tlbicpIHtcbiAgICAgICAgICAgICAgICBBUEkucnVuVG9rZW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIEFQSS5ydW5Db25maWcoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn07XG4vLyBUaGlzIHBsdWdpbiB3aWxsIG9wZW4gYSB3aW5kb3cgdG8gcHJvbXB0IHRoZSB1c2VyIHRvIGVudGVyIGEgbnVtYmVyLCBhbmRcbi8vIGl0IHdpbGwgdGhlbiBjcmVhdGUgdGhhdCBtYW55IHJlY3RhbmdsZXMgb24gdGhlIHNjcmVlbi5cbi8vIFRoaXMgZmlsZSBob2xkcyB0aGUgbWFpbiBjb2RlIGZvciB0aGUgcGx1Z2lucy4gSXQgaGFzIGFjY2VzcyB0byB0aGUgKmRvY3VtZW50Ki5cbi8vIFlvdSBjYW4gYWNjZXNzIGJyb3dzZXIgQVBJcyBpbiB0aGUgPHNjcmlwdD4gdGFnIGluc2lkZSBcInVpLmh0bWxcIiB3aGljaCBoYXMgYVxuLy8gZnVsbCBicm93c2VyIGVudmlyb25tZW50IChzZWUgZG9jdW1lbnRhdGlvbikuXG5DT05GSUcuaW5pdCgpLnRoZW4oKCkgPT4ge1xuICAgIC8vIFRoaXMgc2hvd3MgdGhlIEhUTUwgcGFnZSBpbiBcInVpLmh0bWxcIi5cbiAgICBmaWdtYS5zaG93VUkoX19odG1sX18sIHsgd2lkdGg6IDQwMCwgaGVpZ2h0OiA2MDAgfSk7XG4gICAgQVBJLnJ1bkhvbWUoKTtcbiAgICBmaWdtYS5vbihcInNlbGVjdGlvbmNoYW5nZVwiLCAoKSA9PiB7XG4gICAgICAgIEFQSS5vblNlbGVjdGlvbkNoYW5nZSgpO1xuICAgIH0pO1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBmaWdtYS51aS5vbm1lc3NhZ2UgPSBBUEkub25tZXNzYWdlO1xufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9