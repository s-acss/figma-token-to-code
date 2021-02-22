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
    if (!COMPONENT.isComponent(node)) {
      return null;
    } // @ts-ignore


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
  projects: [{
    name: 'default',
    token: {}
  }]
};
var CONFIG = {
  key: 'ACSS',
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
        var _a; // console.log('config init', ret);


        CONFIG.store = ((_a = ret === null || ret === void 0 ? void 0 : ret.projects) === null || _a === void 0 ? void 0 : _a.length) ? ret : CONFIG_DEFAULT;

        if (!ret) {
          figma.clientStorage.setAsync(CONFIG.key, CONFIG_DEFAULT);
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
    var _ref3 = CONFIG.getCurrent() || {},
        _ref3$token = _ref3.token,
        token = _ref3$token === void 0 ? null : _ref3$token;

    return token ? JSON.parse(JSON.stringify(token)) : null;
  },
  getInfoById: function getInfoById() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

    if (!id) {
      return null;
    }

    var tokenConfig = CONFIG.getToken() || {}; // 如果有自定义用自定义的

    return tokenConfig[id];
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
        _a$style = a.style,
        styleA = _a$style === void 0 ? {} : _a$style,
        _a$props = a.props,
        propsA = _a$props === void 0 ? {} : _a$props,
        restA = __rest(a, ["classNames", "style", "props"]);

    var _b$classNames = b.classNames,
        classNamesB = _b$classNames === void 0 ? [] : _b$classNames,
        _b$style = b.style,
        styleB = _b$style === void 0 ? {} : _b$style,
        _b$props = b.props,
        propsB = _b$props === void 0 ? {} : _b$props,
        children = b.children,
        restB = __rest(b, ["classNames", "style", "props", "children"]);

    return Object.assign(Object.assign({
      props: Object.assign(Object.assign({}, propsA), propsB),
      classNames: [].concat(_toConsumableArray(classNamesA), _toConsumableArray(classNamesB)),
      style: Object.assign(Object.assign({}, styleA), styleB)
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


    nodeInfo.children = _token_FLEX__WEBPACK_IMPORTED_MODULE_5__["default"].addClassNodes(nodeInfo.children, flex === null || flex === void 0 ? void 0 : flex.gutterClass);
    nodeInfo.classNames = _UTILS__WEBPACK_IMPORTED_MODULE_7__["default"].clearStingArray(nodeInfo.classNames);
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

    if (!arrStr || !arrStr.length) {
      return [];
    }

    var result = [];
    arrStr.forEach(function (item) {
      if (item && result.indexOf(item) === -1) {
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

    var style = {};
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
    return {
      style: style,
      classNames: classNames
    };
  },
  // 文本组件
  getInfo: function getInfo(node) {
    if (node.type !== 'TEXT') {
      return null;
    } // @ts-ignore


    return _CONFIG__WEBPACK_IMPORTED_MODULE_0__["default"].getInfoById(node.textStyleId) || TEXT.getACSSSInfo(node);
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
/* harmony import */ var _COMPONENT__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_/COMPONENT */ "./src/_/COMPONENT.ts");
/* harmony import */ var _ACSS__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_/ACSS */ "./src/_/ACSS.ts");
/* harmony import */ var _render_DOM__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_/render/DOM */ "./src/_/render/DOM.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

    var actionMap = ['runHome', 'runHome', 'runToken', 'runConfig'];
    var action = actionMap[index];

    if (!action) {
      return;
    }

    API[action]();
  },
  onSelectionChange: function onSelectionChange() {
    var actionMap = ['runHome', 'runHome', 'runToken', ''];
    var action = actionMap[API.tabIndex];

    if (!action) {
      return;
    }

    API[action]();
  },
  runHome: function runHome() {
    var selection = API.getSelection();

    if (!selection) {
      return;
    }

    _ACSS__WEBPACK_IMPORTED_MODULE_3__["default"].init(); // @ts-ignore

    var Info = _NODE__WEBPACK_IMPORTED_MODULE_0__["default"].getNodesInfo(selection); // console.log(Info);

    var isJSX = _CONFIG__WEBPACK_IMPORTED_MODULE_1__["default"].isJSX();
    figma.ui.postMessage({
      getHTML: _render_DOM__WEBPACK_IMPORTED_MODULE_4__["default"].render(Info, isJSX),
      getCSS: _ACSS__WEBPACK_IMPORTED_MODULE_3__["default"].getString(),
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
    var _ref = API.getSelection() || [],
        _ref2 = _slicedToArray(_ref, 1),
        selection = _ref2[0];

    if (!selection) {
      return;
    }

    var typeMap = ['fill', 'text', 'stroke', 'effect', 'grid'];
    var token = _CONFIG__WEBPACK_IMPORTED_MODULE_1__["default"].getToken() || {}; // 如果是组件则不需要显示任何其它的属性

    if (_COMPONENT__WEBPACK_IMPORTED_MODULE_2__["default"].isComponent(selection)) {
      //@ts-ignore
      var _COMPONENT$getMainCom = _COMPONENT__WEBPACK_IMPORTED_MODULE_2__["default"].getMainComponent(selection),
          id = _COMPONENT$getMainCom.id,
          name = _COMPONENT$getMainCom.name;

      var componentToken = Object.assign({
        name: name,
        type: 'Component'
      }, token[id]);
      figma.ui.postMessage({
        gotToken: {
          type: selection.type,
          token: _defineProperty({}, id, componentToken)
        },
        noSelection: false
      });
      return '';
    }

    var matchToken = {}; // console.log(selection);
    //@ts-ignore

    [selection.fillStyleId, selection.textStyleId, selection.strokeStyleId, selection.effectStyleId, selection.gridStyleId].forEach(function (item, key) {
      if (!item) {
        return '';
      }

      var getStyle = figma.getStyleById(item);

      var _ref3 = getStyle || {},
          id = _ref3.id,
          name = _ref3.name;

      if (!id) {
        return '';
      }

      matchToken[id] = Object.assign(Object.assign({}, token[id]), {
        name: name,
        type: typeMap[key]
      });
    });
    figma.ui.postMessage({
      gotToken: {
        type: selection.type,
        token: matchToken
      },
      noSelection: false
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL18vQUNTUy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvXy9DT01QT05FTlQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL18vQ09ORklHLnRzIiwid2VicGFjazovLy8uL3NyYy9fL05PREUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL18vVVRJTFMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL18vcmVuZGVyL0RPTS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvXy9yZW5kZXIvSFRNTC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvXy9yZW5kZXIvSlNYLnRzIiwid2VicGFjazovLy8uL3NyYy9fL3JlbmRlci9nZXRQcm9wc0FycmF5LnRzIiwid2VicGFjazovLy8uL3NyYy9fL3Rva2VuL0NPTE9SLnRzIiwid2VicGFjazovLy8uL3NyYy9fL3Rva2VuL0VGRkVDVC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvXy90b2tlbi9GSUxMLnRzIiwid2VicGFjazovLy8uL3NyYy9fL3Rva2VuL0ZMRVgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL18vdG9rZW4vR1JJRC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvXy90b2tlbi9PVEhFUlMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL18vdG9rZW4vU1RST0tFLnRzIiwid2VicGFjazovLy8uL3NyYy9fL3Rva2VuL1RFWFQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvZGUudHMiXSwibmFtZXMiOlsiQUNTUyIsImRhdGEiLCJpbml0IiwibmFtZU1hcCIsImdldENsYXNzU2VsZWN0b3JCeU5hbWUiLCJjbGFzc05hbWUiLCJpbmRleE9mIiwicmVwbGFjZSIsImdldFN0cmluZyIsImtleXMiLCJPYmplY3QiLCJzb3J0IiwicmVzdWx0IiwibWFwIiwibmFtZSIsImpvaW4iLCJhZGQiLCJ2YWx1ZSIsInVuaXQiLCJwcm9wTmFtZSIsInVzZVZhbHVlIiwiTnVtYmVyIiwicGFyc2VGbG9hdCIsInRvRml4ZWQiLCJjbGFzc1VuaXQiLCJhZGRGb250RmFtaWx5IiwidG9Mb3dlckNhc2UiLCJhZGRDb2xvciIsInJnYmEiLCJsZW5ndGgiLCJhZGRCZ0NvbG9yIiwiQ09NUE9ORU5UIiwiaXNWYXJpYW50Iiwibm9kZSIsIl9hIiwiX2IiLCJtYWluQ29tcG9uZW50IiwicGFyZW50IiwidHlwZSIsImlzQ29tcG9uZW50IiwiZ2V0TWFpbkNvbXBvbmVudCIsImdldENvbXBvbmVudElkIiwiaWQiLCJnZXRDb21wb25lbnROYW1lIiwic3RyTmFtZSIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJnZXRDb21wb25lbnRQcm9wcyIsInByb3BzIiwic3BsaXQiLCJmb3JFYWNoIiwiaXRlbSIsImtleSIsInRyaW0iLCJnZXRJbmZvIiwibWF0Y2hUb2tlbiIsIkNPTkZJRyIsImdldEluZm9CeUlkIiwiQ09ORklHX0RFRkFVTFQiLCJjdXJyZW50SW5kZXgiLCJpc0pTWCIsInByb2plY3RzIiwidG9rZW4iLCJzdG9yZSIsImNoYW5nZUN1cnJlbnQiLCJpbmRleCIsImdldEFsbCIsImZpZ21hIiwiY2xpZW50U3RvcmFnZSIsInNldEFzeW5jIiwiY2hhbmdlSlNYIiwicmVtb3ZlIiwic3BsaWNlIiwiYWRkTmV3UHJvamVjdCIsInB1c2giLCJjaGFuZ2VQcm9qZWN0TmFtZSIsImFwcGVuZFRva2VuIiwiY3VycmVudCIsImdldEN1cnJlbnQiLCJhc3NpZ24iLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImdldEFzeW5jIiwidGhlbiIsInJldCIsImdldFRva2VuIiwiY2F0Y2giLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJ0b2tlbkNvbmZpZyIsIl9fcmVzdCIsInMiLCJlIiwidCIsInAiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJpIiwicHJvcGVydHlJc0VudW1lcmFibGUiLCJOT0RFIiwiZXh0ZW5kSW5mbyIsImEiLCJiIiwiY2xhc3NOYW1lcyIsImNsYXNzTmFtZXNBIiwic3R5bGUiLCJzdHlsZUEiLCJwcm9wc0EiLCJyZXN0QSIsImNsYXNzTmFtZXNCIiwic3R5bGVCIiwicHJvcHNCIiwiY2hpbGRyZW4iLCJyZXN0QiIsImlzU3RydWN0Tm9kZSIsInN0YXJ0c1dpdGgiLCJ5ZXNUeXBlcyIsImdvdE5vIiwiZmluZCIsImlzUmVuZGVyQ2hpbGRyZW4iLCJnZXROb2RlSW5mbyIsInZpc2libGUiLCJub2RlSW5mbyIsInRhZ05hbWUiLCJpc0Jsb2NrRWxlbWVudCIsImNvbXBvbmVudCIsImZpbGwiLCJGSUxMIiwidGV4dCIsIlRFWFQiLCJzdHJva2UiLCJTVFJPS0UiLCJncmlkIiwiR1JJRCIsImVmZmVjdCIsIkVGRkVDVCIsIm90aGVycyIsIk9USEVSUyIsImZsZXgiLCJGTEVYIiwiY29tcG9uZW50TmFtZSIsInBhcnNlSW50IiwiU3RyaW5nIiwiaGVpZ2h0Iiwid2lkdGgiLCJzdG9wUmVuZGVyQ2hpbGRyZW4iLCJjaGFyYWN0ZXJzIiwiZ2V0Tm9kZXNJbmZvIiwiYWRkQ2xhc3NOb2RlcyIsImd1dHRlckNsYXNzIiwiVVRJTFMiLCJjbGVhclN0aW5nQXJyYXkiLCJsYXlvdXRNb2RlIiwibm9kZXMiLCJ5IiwieCIsImluZm8iLCJzb3J0Tm9kZXMiLCJsZW4iLCJpc0Jsb2NrIiwiYmxvY2tUYWciLCJpc1NlbGZUYWciLCJzZWxmVGFnIiwiYXJyU3RyIiwiRE9NIiwicmVuZGVyIiwib2JqIiwiSlNYIiwiZ2V0RG9tQnlBcnJheSIsIkhUTUwiLCJnZXRJdGVtRG9tIiwiYXJyUHJvcHMiLCJnZXRQcm9wc0FycmF5IiwiY2xhc3MiLCJ0YWdTdGFydCIsImZpbHRlciIsImVudHJpZXMiLCJDT0xPUiIsImdldFJnYmFCeUZpbGwiLCJjb2xvciIsIm9wYWNpdHkiLCJyIiwiZyIsImVmZmVjdFN0eWxlSWQiLCJnZXRGaWxsIiwiZmlsbHMiLCJmaXJzdEZpbGwiLCJmaWxsU3R5bGVJZCIsImdldEZsZXgiLCJwcmltYXJ5QXhpc0FsaWduSXRlbXMiLCJjb3VudGVyQXhpc0FsaWduSXRlbXMiLCJpdGVtU3BhY2luZyIsImd1dHRlck1hcCIsImFyck5vZGUiLCJncmlkU3R5bGVJZCIsImdlckJvcmRlclJhZGl1c0NsYXNzTmFtZXMiLCJ0bCIsInRvcExlZnRSYWRpdXMiLCJ0ciIsInRvcFJpZ2h0UmFkaXVzIiwiYnIiLCJib3R0b21SaWdodFJhZGl1cyIsImJsIiwiYm90dG9tTGVmdFJhZGl1cyIsImdldFBhZGRpbmdDbGFzc05hbWVzIiwicGFkZGluZ1RvcCIsInBhZGRpbmdSaWdodCIsInBhZGRpbmdCb3R0b20iLCJwYWRkaW5nTGVmdCIsInBhZGRpbmciLCJyYWRpdXMiLCJzdHJva2VTdHlsZUlkIiwidW5pdE1hcCIsImdldEZvbnROYW1lQ2xhc3MiLCJmb250TmFtZSIsImZvbnRNYXAiLCJnZXRBQ1NTU0luZm8iLCJfYyIsImZvbnRTaXplIiwibGluZUhlaWdodCIsImxldHRlclNwYWNpbmciLCJmbkNsYXNzIiwiZmFtaWx5IiwidGFDbGFzcyIsInRleHRBbGlnbkhvcml6b250YWwiLCJ2YUNsYXNzIiwidGV4dEFsaWduVmVydGljYWwiLCJ0dENsYXNzIiwidGV4dENhc2UiLCJ0ZENsYXNzIiwidGV4dERlY29yYXRpb24iLCJ0ZXh0U3R5bGVJZCIsIkFQSSIsInRhYkluZGV4IiwiZ2V0U2VsZWN0aW9uIiwic2VsZWN0aW9uIiwiY3VycmVudFBhZ2UiLCJ1aSIsInBvc3RNZXNzYWdlIiwibm9TZWxlY3Rpb24iLCJvblRhYkNoYW5nZSIsImJlZm9yZUluZGV4IiwiYWN0aW9uTWFwIiwiYWN0aW9uIiwib25TZWxlY3Rpb25DaGFuZ2UiLCJydW5Ib21lIiwiSW5mbyIsImdldEhUTUwiLCJnZXRDU1MiLCJydW5Db25maWciLCJnZXRDb25maWciLCJydW5Ub2tlbiIsInR5cGVNYXAiLCJjb21wb25lbnRUb2tlbiIsImdvdFRva2VuIiwiZ2V0U3R5bGUiLCJnZXRTdHlsZUJ5SWQiLCJvbm1lc3NhZ2UiLCJtc2ciLCJzaG93VUkiLCJfX2h0bWxfXyIs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QUpxQixDQU9yQjs7QUFDQXJMLE9BQUssQ0FBQzhLLEVBQU4sQ0FBU29CLFNBQVQsR0FBcUJ6QixHQUFHLENBQUN5QixTQUF6QjtBQUNILENBVEQsRSIsImZpbGUiOiJjb2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvY29kZS50c1wiKTtcbiIsImNvbnN0IEFDU1MgPSB7XG4gICAgZGF0YToge30sXG4gICAgaW5pdDogKCkgPT4ge1xuICAgICAgICBBQ1NTLmRhdGEgPSB7fTtcbiAgICB9LFxuICAgIG5hbWVNYXA6IHtcbiAgICAgICAgJ2ZzJzogJ2ZvbnQtc2l6ZScsXG4gICAgICAgICdsaCc6ICdsaW5lLWhlaWdodCcsXG4gICAgICAgICdscyc6ICdsZXR0ZXItc3BhY2UnLFxuICAgICAgICAnZmYnOiAnZm9udC1mYW1pbHknLFxuICAgICAgICAncHQnOiAncGFkZGluZy10b3AnLFxuICAgICAgICAncHInOiAncGFkZGluZy1yaWdodCcsXG4gICAgICAgICdwYic6ICdwYWRkaW5nLWJvdHRvbScsXG4gICAgICAgICdwbCc6ICdwYWRkaW5nLWxlZnQnLFxuICAgICAgICAnbXQnOiAnbWFyZ2luLXRvcCcsXG4gICAgICAgICdtcic6ICdtYXJnaW4tcmlnaHQnLFxuICAgICAgICAnbWInOiAnbWFyZ2luLWJvdHRvbScsXG4gICAgICAgICdtbCc6ICdtYXJnaW4tbGVmdCcsXG4gICAgICAgICdoJzogJ2hlaWdodCcsXG4gICAgICAgICd3JzogJ3dpZHRoJyxcbiAgICAgICAgJ2J0bHInOiAnYm9yZGVyLXRvcC1sZWZ0LXJhZGl1cycsXG4gICAgICAgICdidHJyJzogJ2JvcmRlci10b3AtcmlnaHQtcmFkaXVzJyxcbiAgICAgICAgJ2JicnInOiAnYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXMnLFxuICAgICAgICAnYmJscic6ICdib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzJyxcbiAgICAgICAgJ2JyJzogJ2JvcmRlci1yYWRpdXMnXG4gICAgfSxcbiAgICBnZXRDbGFzc1NlbGVjdG9yQnlOYW1lOiAoY2xhc3NOYW1lID0gJycpID0+IHtcbiAgICAgICAgaWYgKGNsYXNzTmFtZS5pbmRleE9mKCcuJykgPiAtMSkge1xuICAgICAgICAgICAgY2xhc3NOYW1lID0gY2xhc3NOYW1lLnJlcGxhY2UoL1xcLi9nLCAnXFxcXC4nKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2xhc3NOYW1lLmluZGV4T2YoJzonKSA+IC0xKSB7XG4gICAgICAgICAgICBjbGFzc05hbWUgPSBjbGFzc05hbWUucmVwbGFjZSgvXFw6L2csICdcXFxcOicpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjbGFzc05hbWUuaW5kZXhPZignJScpID4gLTEpIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IGNsYXNzTmFtZS5yZXBsYWNlKC9cXCUvZywgJ1xcXFwlJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNsYXNzTmFtZTtcbiAgICB9LFxuICAgIGdldFN0cmluZzogKCkgPT4ge1xuICAgICAgICBjb25zdCBkYXRhID0gQUNTUy5kYXRhO1xuICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoZGF0YSkuc29ydCgpO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBrZXlzLm1hcCgobmFtZSkgPT4gYC4ke0FDU1MuZ2V0Q2xhc3NTZWxlY3RvckJ5TmFtZShuYW1lKX17JHtkYXRhW25hbWVdfTt9YCkuam9pbignXFxuJyk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSxcbiAgICBhZGQ6IChuYW1lID0gJycsIHZhbHVlLCB1bml0ID0gJ3B4JykgPT4ge1xuICAgICAgICBpZiAoIW5hbWUgfHwgIXZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcHJvcE5hbWUgPSBBQ1NTLm5hbWVNYXBbbmFtZV07XG4gICAgICAgIGlmICghcHJvcE5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuICAgICAgICAvLyDlj6rkv53nlZnkuKTkvY3lsI/mlbBcbiAgICAgICAgY29uc3QgdXNlVmFsdWUgPSBOdW1iZXIodmFsdWUpID8gcGFyc2VGbG9hdChOdW1iZXIodmFsdWUpLnRvRml4ZWQoMikpIDogdmFsdWU7XG4gICAgICAgIC8vIOWmguaenOaYryBweCDkuI3pnIDopoHmuLLmn5NcbiAgICAgICAgY29uc3QgY2xhc3NVbml0ID0gdW5pdCA9PT0gJ3B4JyA/ICcnIDogdW5pdDtcbiAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gYCR7bmFtZX0ke3VzZVZhbHVlfSR7Y2xhc3NVbml0fWA7XG4gICAgICAgIEFDU1MuZGF0YVtjbGFzc05hbWVdID0gYCR7cHJvcE5hbWV9OiR7dXNlVmFsdWV9JHt1bml0fWA7XG4gICAgICAgIHJldHVybiBjbGFzc05hbWU7XG4gICAgfSxcbiAgICBhZGRGb250RmFtaWx5OiAodmFsdWUpID0+IHtcbiAgICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IGBmZjoke3ZhbHVlLnRvTG93ZXJDYXNlKCl9YDtcbiAgICAgICAgQUNTUy5kYXRhW2NsYXNzTmFtZV0gPSBgZm9udC1mYW1pbHk6XCIke3ZhbHVlfVwiYDtcbiAgICAgICAgcmV0dXJuIGNsYXNzTmFtZTtcbiAgICB9LFxuICAgIGFkZENvbG9yOiAocmdiYSA9IFtdKSA9PiB7XG4gICAgICAgIGlmICghcmdiYSAmJiByZ2JhLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IGBjOiR7cmdiYS5qb2luKCcnKX1gO1xuICAgICAgICBBQ1NTLmRhdGFbY2xhc3NOYW1lXSA9IGBjb2xvcjpyZ2JhKCR7cmdiYS5qb2luKCcsJyl9KWA7XG4gICAgICAgIHJldHVybiBjbGFzc05hbWU7XG4gICAgfSxcbiAgICBhZGRCZ0NvbG9yOiAocmdiYSA9IFtdKSA9PiB7XG4gICAgICAgIGlmICghcmdiYSAmJiByZ2JhLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IGBiYzoke3JnYmEuam9pbignJyl9YDtcbiAgICAgICAgQUNTUy5kYXRhW2NsYXNzTmFtZV0gPSBgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKCR7cmdiYS5qb2luKCcsJyl9KWA7XG4gICAgICAgIHJldHVybiBjbGFzc05hbWU7XG4gICAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IEFDU1M7XG4iLCJpbXBvcnQgQ09ORklHIGZyb20gXCIuL0NPTkZJR1wiO1xuY29uc3QgQ09NUE9ORU5UID0ge1xuICAgIGlzVmFyaWFudDogKG5vZGUpID0+IHtcbiAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICByZXR1cm4gKChfYiA9IChfYSA9IG5vZGUubWFpbkNvbXBvbmVudCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnBhcmVudCkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLnR5cGUpID09PSAnQ09NUE9ORU5UX1NFVCc7XG4gICAgfSxcbiAgICBpc0NvbXBvbmVudDogKG5vZGUpID0+IHtcbiAgICAgICAgcmV0dXJuIG5vZGUudHlwZSA9PT0gJ0lOU1RBTkNFJyB8fCBub2RlLnR5cGUgPT09ICdDT01QT05FTlQnO1xuICAgIH0sXG4gICAgZ2V0TWFpbkNvbXBvbmVudDogKG5vZGUpID0+IHtcbiAgICAgICAgaWYgKG5vZGUudHlwZSA9PT0gJ0NPTVBPTkVOVCcpIHtcbiAgICAgICAgICAgIHJldHVybiBub2RlO1xuICAgICAgICB9XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgY29uc3QgaXNWYXJpYW50ID0gQ09NUE9ORU5ULmlzVmFyaWFudChub2RlKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2cobm9kZSwge2lzVmFyaWFudH0pO1xuICAgICAgICByZXR1cm4gaXNWYXJpYW50ID8gbm9kZS5tYWluQ29tcG9uZW50LnBhcmVudCA6IG5vZGUubWFpbkNvbXBvbmVudDtcbiAgICB9LFxuICAgIGdldENvbXBvbmVudElkOiAobm9kZSkgPT4ge1xuICAgICAgICBjb25zdCB7IGlkID0gJycgfSA9IENPTVBPTkVOVC5nZXRNYWluQ29tcG9uZW50KG5vZGUpIHx8IHt9O1xuICAgICAgICByZXR1cm4gaWQ7XG4gICAgfSxcbiAgICBnZXRDb21wb25lbnROYW1lOiAobm9kZSkgPT4ge1xuICAgICAgICBjb25zdCB7IG5hbWUgPSAnJyB9ID0gQ09NUE9ORU5ULmdldE1haW5Db21wb25lbnQobm9kZSk7XG4gICAgICAgIGlmICghbmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHN0ck5hbWUgPSBuYW1lLnJlcGxhY2UoL1tcXFddL2csICcnKTtcbiAgICAgICAgcmV0dXJuIHN0ck5hbWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHJOYW1lLnNsaWNlKDEpO1xuICAgIH0sXG4gICAgZ2V0Q29tcG9uZW50UHJvcHM6IChub2RlKSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdnZXRDb21wb25lbnRQcm9wcycsIG5vZGUpO1xuICAgICAgICBjb25zdCBpc1ZhcmlhbnQgPSBDT01QT05FTlQuaXNWYXJpYW50KG5vZGUpO1xuICAgICAgICAvLyDmsqHmnInlj5jkvZPooajnpLrmsqHmnIkgcHJvcHNcbiAgICAgICAgaWYgKCFpc1ZhcmlhbnQpIHtcbiAgICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IG5hbWUgfSA9IG5vZGUubWFpbkNvbXBvbmVudDtcbiAgICAgICAgY29uc3QgcHJvcHMgPSB7fTtcbiAgICAgICAgaWYgKHR5cGVvZiBuYW1lID09PSAnc3RyaW5nJyAmJiBuYW1lLmluZGV4T2YoJz0nKSA+IC0xKSB7XG4gICAgICAgICAgICBuYW1lLnNwbGl0KFwiLFwiKS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgW2tleSwgdmFsdWVdID0gaXRlbS5zcGxpdChcIj1cIik7XG4gICAgICAgICAgICAgICAgLy8gZmFsc2Ug6KGo56S65rKh5pyJ6L+Z5Liq5YC8IOS4jeWBmuWkhOeQhlxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gXCJmYWxzZVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcHJvcHNba2V5LnRyaW0oKV0gPSB2YWx1ZS50cmltKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcHJvcHM7XG4gICAgfSxcbiAgICBnZXRJbmZvOiAobm9kZSkgPT4ge1xuICAgICAgICBpZiAoIUNPTVBPTkVOVC5pc0NvbXBvbmVudChub2RlKSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBjb25zdCBpZCA9IENPTVBPTkVOVC5nZXRDb21wb25lbnRJZChub2RlKTtcbiAgICAgICAgY29uc3QgbWF0Y2hUb2tlbiA9IENPTkZJRy5nZXRJbmZvQnlJZChpZCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGlkLCBtYXRjaFRva2VuLCBub2RlKTtcbiAgICAgICAgaWYgKCFtYXRjaFRva2VuKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIG1hdGNoVG9rZW4ucHJvcHMgPSBDT01QT05FTlQuZ2V0Q29tcG9uZW50UHJvcHMobm9kZSk7XG4gICAgICAgIHJldHVybiBtYXRjaFRva2VuO1xuICAgIH1cbn07XG5leHBvcnQgZGVmYXVsdCBDT01QT05FTlQ7XG4iLCJjb25zdCBDT05GSUdfREVGQVVMVCA9IHtcbiAgICBjdXJyZW50SW5kZXg6IDAsXG4gICAgaXNKU1g6IGZhbHNlLFxuICAgIHByb2plY3RzOiBbe1xuICAgICAgICAgICAgbmFtZTogJ2RlZmF1bHQnLFxuICAgICAgICAgICAgdG9rZW46IHt9XG4gICAgICAgIH1dXG59O1xuY29uc3QgQ09ORklHID0ge1xuICAgIGtleTogJ0FDU1MnLFxuICAgIHN0b3JlOiBDT05GSUdfREVGQVVMVCxcbiAgICBjaGFuZ2VDdXJyZW50OiAoaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3Qgc3RvcmUgPSBDT05GSUcuZ2V0QWxsKCk7XG4gICAgICAgIHN0b3JlLmN1cnJlbnRJbmRleCA9IGluZGV4O1xuICAgICAgICBmaWdtYS5jbGllbnRTdG9yYWdlLnNldEFzeW5jKENPTkZJRy5rZXksIHN0b3JlKTtcbiAgICB9LFxuICAgIGNoYW5nZUpTWDogKHZhbHVlKSA9PiB7XG4gICAgICAgIGNvbnN0IHN0b3JlID0gQ09ORklHLmdldEFsbCgpO1xuICAgICAgICAvLyDph43nva7lm57nrKzkuIDkuKpcbiAgICAgICAgc3RvcmUuaXNKU1ggPSB2YWx1ZTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coc3RvcmUpO1xuICAgICAgICBmaWdtYS5jbGllbnRTdG9yYWdlLnNldEFzeW5jKENPTkZJRy5rZXksIHN0b3JlKTtcbiAgICB9LFxuICAgIHJlbW92ZTogKGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IHN0b3JlID0gQ09ORklHLmdldEFsbCgpO1xuICAgICAgICAvLyDph43nva7lm57nrKzkuIDkuKpcbiAgICAgICAgc3RvcmUuY3VycmVudEluZGV4ID0gMDtcbiAgICAgICAgc3RvcmUucHJvamVjdHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgZmlnbWEuY2xpZW50U3RvcmFnZS5zZXRBc3luYyhDT05GSUcua2V5LCBzdG9yZSk7XG4gICAgfSxcbiAgICBhZGROZXdQcm9qZWN0OiAoeyBuYW1lID0gJycsIHRva2VuID0ge30gfSA9IHt9KSA9PiB7XG4gICAgICAgIGNvbnN0IHN0b3JlID0gQ09ORklHLmdldEFsbCgpO1xuICAgICAgICBzdG9yZS5wcm9qZWN0cy5wdXNoKHtcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICB0b2tlblxuICAgICAgICB9KTtcbiAgICAgICAgc3RvcmUuY3VycmVudEluZGV4ID0gc3RvcmUucHJvamVjdHMubGVuZ3RoIC0gMTtcbiAgICAgICAgZmlnbWEuY2xpZW50U3RvcmFnZS5zZXRBc3luYyhDT05GSUcua2V5LCBzdG9yZSk7XG4gICAgfSxcbiAgICBjaGFuZ2VQcm9qZWN0TmFtZTogKHsgbmFtZSwgaW5kZXggfSkgPT4ge1xuICAgICAgICBjb25zdCBzdG9yZSA9IENPTkZJRy5nZXRBbGwoKTtcbiAgICAgICAgc3RvcmUucHJvamVjdHNbaW5kZXhdLm5hbWUgPSBuYW1lO1xuICAgICAgICBmaWdtYS5jbGllbnRTdG9yYWdlLnNldEFzeW5jKENPTkZJRy5rZXksIHN0b3JlKTtcbiAgICB9LFxuICAgIGFwcGVuZFRva2VuOiAoYXBwZW5kVG9rZW4gPSB7fSkgPT4ge1xuICAgICAgICBjb25zdCBjdXJyZW50ID0gQ09ORklHLmdldEN1cnJlbnQoKTtcbiAgICAgICAgY29uc3QgeyB0b2tlbiA9IHt9IH0gPSBjdXJyZW50O1xuICAgICAgICBjdXJyZW50LnRva2VuID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCB0b2tlbiksIGFwcGVuZFRva2VuKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coYXBwZW5kVG9rZW4sIENPTkZJRy5zdG9yZSk7XG4gICAgICAgIGZpZ21hLmNsaWVudFN0b3JhZ2Uuc2V0QXN5bmMoQ09ORklHLmtleSwgQ09ORklHLnN0b3JlKTtcbiAgICB9LFxuICAgIGlzSlNYOiAoKSA9PiB7XG4gICAgICAgIHJldHVybiAhIUNPTkZJRy5zdG9yZS5pc0pTWDtcbiAgICB9LFxuICAgIGdldEFsbDogKCkgPT4ge1xuICAgICAgICByZXR1cm4gQ09ORklHLnN0b3JlO1xuICAgIH0sXG4gICAgaW5pdDogKCkgPT4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGZpZ21hLmNsaWVudFN0b3JhZ2UuZ2V0QXN5bmMoQ09ORklHLmtleSkudGhlbigocmV0KSA9PiB7XG4gICAgICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdjb25maWcgaW5pdCcsIHJldCk7XG4gICAgICAgICAgICAgICAgQ09ORklHLnN0b3JlID0gKChfYSA9IHJldCA9PT0gbnVsbCB8fCByZXQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHJldC5wcm9qZWN0cykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmxlbmd0aCkgPyByZXQgOiBDT05GSUdfREVGQVVMVDtcbiAgICAgICAgICAgICAgICBpZiAoIXJldCkge1xuICAgICAgICAgICAgICAgICAgICBmaWdtYS5jbGllbnRTdG9yYWdlLnNldEFzeW5jKENPTkZJRy5rZXksIENPTkZJR19ERUZBVUxUKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShDT05GSUcuZ2V0VG9rZW4oKSk7XG4gICAgICAgICAgICB9KS5jYXRjaChyZWplY3QpO1xuICAgICAgICB9KSk7XG4gICAgfSxcbiAgICBnZXRDdXJyZW50OiAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRJbmRleCA9IENPTkZJRy5zdG9yZS5jdXJyZW50SW5kZXg7XG4gICAgICAgIGNvbnN0IGN1cnJlbnQgPSBDT05GSUcuc3RvcmUucHJvamVjdHNbY3VycmVudEluZGV4XTtcbiAgICAgICAgcmV0dXJuIGN1cnJlbnQ7XG4gICAgfSxcbiAgICBnZXRUb2tlbjogKCkgPT4ge1xuICAgICAgICBjb25zdCB7IHRva2VuID0gbnVsbCB9ID0gQ09ORklHLmdldEN1cnJlbnQoKSB8fCB7fTtcbiAgICAgICAgcmV0dXJuIHRva2VuID8gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0b2tlbikpIDogbnVsbDtcbiAgICB9LFxuICAgIGdldEluZm9CeUlkOiAoaWQgPSAnJykgPT4ge1xuICAgICAgICBpZiAoIWlkKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB0b2tlbkNvbmZpZyA9IENPTkZJRy5nZXRUb2tlbigpIHx8IHt9O1xuICAgICAgICAvLyDlpoLmnpzmnInoh6rlrprkuYnnlKjoh6rlrprkuYnnmoRcbiAgICAgICAgcmV0dXJuIHRva2VuQ29uZmlnW2lkXTtcbiAgICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgQ09ORklHO1xuIiwidmFyIF9fcmVzdCA9ICh0aGlzICYmIHRoaXMuX19yZXN0KSB8fCBmdW5jdGlvbiAocywgZSkge1xuICAgIHZhciB0ID0ge307XG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXG4gICAgICAgIHRbcF0gPSBzW3BdO1xuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xuICAgICAgICB9XG4gICAgcmV0dXJuIHQ7XG59O1xuaW1wb3J0IENPTVBPTkVOVCBmcm9tIFwiLi9DT01QT05FTlRcIjtcbmltcG9ydCBGSUxMIGZyb20gXCIuL3Rva2VuL0ZJTExcIjtcbmltcG9ydCBURVhUIGZyb20gXCIuL3Rva2VuL1RFWFRcIjtcbmltcG9ydCBTVFJPS0UgZnJvbSBcIi4vdG9rZW4vU1RST0tFXCI7XG5pbXBvcnQgR1JJRCBmcm9tIFwiLi90b2tlbi9HUklEXCI7XG5pbXBvcnQgRkxFWCBmcm9tIFwiLi90b2tlbi9GTEVYXCI7XG5pbXBvcnQgQUNTUyBmcm9tIFwiLi9BQ1NTXCI7XG5pbXBvcnQgVVRJTFMgZnJvbSBcIi4vVVRJTFNcIjtcbmltcG9ydCBFRkZFQ1QgZnJvbSBcIi4vdG9rZW4vRUZGRUNUXCI7XG5pbXBvcnQgT1RIRVJTIGZyb20gXCIuL3Rva2VuL09USEVSU1wiO1xuY29uc3QgTk9ERSA9IHtcbiAgICAvKipcbiAgICAgKiDlkIjlubbkuKTkuKppbmZvXG4gICAgICogQHBhcmFtIGFcbiAgICAgKiBAcGFyYW0gYlxuICAgICAqL1xuICAgIGV4dGVuZEluZm86IChhLCBiKSA9PiB7XG4gICAgICAgIGlmICghYikge1xuICAgICAgICAgICAgcmV0dXJuIGE7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyBjbGFzc05hbWVzOiBjbGFzc05hbWVzQSA9IFtdLCBzdHlsZTogc3R5bGVBID0ge30sIHByb3BzOiBwcm9wc0EgPSB7fSB9ID0gYSwgcmVzdEEgPSBfX3Jlc3QoYSwgW1wiY2xhc3NOYW1lc1wiLCBcInN0eWxlXCIsIFwicHJvcHNcIl0pO1xuICAgICAgICBjb25zdCB7IGNsYXNzTmFtZXM6IGNsYXNzTmFtZXNCID0gW10sIHN0eWxlOiBzdHlsZUIgPSB7fSwgcHJvcHM6IHByb3BzQiA9IHt9LCBjaGlsZHJlbiB9ID0gYiwgcmVzdEIgPSBfX3Jlc3QoYiwgW1wiY2xhc3NOYW1lc1wiLCBcInN0eWxlXCIsIFwicHJvcHNcIiwgXCJjaGlsZHJlblwiXSk7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oeyBwcm9wczogT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBwcm9wc0EpLCBwcm9wc0IpLCBjbGFzc05hbWVzOiBbLi4uY2xhc3NOYW1lc0EsIC4uLmNsYXNzTmFtZXNCXSwgc3R5bGU6IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgc3R5bGVBKSwgc3R5bGVCKSB9LCByZXN0QSksIHJlc3RCKTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIOWmguaenOS4gOS4quWFg+e0oOWGhemDqOWPquacieWHoOS9leWbvuW9ou+8jOmCo+S5iOWPquaYvuekuuWFtue7k+aehFxuICAgICAqL1xuICAgIGlzU3RydWN0Tm9kZTogKG5vZGUpID0+IHtcbiAgICAgICAgLy8g5LulI+WPt+W8gOWktFxuICAgICAgICBpZiAobm9kZS5uYW1lLnN0YXJ0c1dpdGgoXCIjXCIpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB5ZXNUeXBlcyA9IFsnUkVDVEFOR0xFJywgJ1ZFQ1RPUicsICdTVEFSJywgJ0xJTkUnLCAnUE9MWUdPTicsICdFTExJUFNFJywgJ1NMSUNFJ107XG4gICAgICAgIC8vIOWmguaenOacrOi6q+WwseaYr+i/meS6m+WFg+e0oOmCo+S5iOS5n+aYr+ebtOaOpei+k+WHulxuICAgICAgICBpZiAoeWVzVHlwZXMuaW5kZXhPZihub2RlLnR5cGUpID4gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChub2RlLnR5cGUgPT09ICdURVhUJykge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgY29uc3QgeyBjaGlsZHJlbiA9IFtdIH0gPSBub2RlO1xuICAgICAgICBpZiAoIWNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgLy8g5om+5Yiw5LqG5LiN5ZCI5rOV5YWD57Sg77yI5LiN5Zyo5LiK6Z2i55qE5Yeg5L2V5YiX6KGo6YeM6Z2i77yJXG4gICAgICAgIGNvbnN0IGdvdE5vID0gY2hpbGRyZW4uZmluZCgoaXRlbSkgPT4geWVzVHlwZXMuaW5kZXhPZihpdGVtLnR5cGUpID09PSAtMSk7XG4gICAgICAgIHJldHVybiAhZ290Tm87XG4gICAgfSxcbiAgICBpc1JlbmRlckNoaWxkcmVuOiAobm9kZSkgPT4ge1xuICAgICAgICBpZiAoIShub2RlLnR5cGUgPT09ICdJTlNUQU5DRScgfHwgbm9kZS50eXBlID09PSAnQ09NUE9ORU5UJykpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyDlj6rmnInkuIDkuKrlrZDlhYPntKBcbiAgICAgICAgaWYgKG5vZGUuY2hpbGRyZW4ubGVuZ3RoICE9PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gY29uc3Qgb25seUNoaWxkcmVuID0gbm9kZS5jaGlsZHJlblswXTtcbiAgICAgICAgLy8gaWYgKG9ubHlDaGlsZHJlbi50eXBlID09PSAnSU5TVEFOQ0UnKSB7XG4gICAgICAgIC8vICAgcmV0dXJuIHRydWU7XG4gICAgICAgIC8vIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0sXG4gICAgZ2V0Tm9kZUluZm86IChub2RlKSA9PiB7XG4gICAgICAgIGlmICghbm9kZS52aXNpYmxlIHx8IG5vZGUubmFtZS5zdGFydHNXaXRoKFwiX1wiKSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgLy8g55u05o6l5riy5p+T5a2Q5YWD57SgXG4gICAgICAgIGlmIChOT0RFLmlzUmVuZGVyQ2hpbGRyZW4obm9kZSkpIHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmU7XG4gICAgICAgICAgICByZXR1cm4gTk9ERS5nZXROb2RlSW5mbyhub2RlLmNoaWxkcmVuWzBdKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpc1N0cnVjdE5vZGUgPSBOT0RFLmlzU3RydWN0Tm9kZShub2RlKTtcbiAgICAgICAgbGV0IG5vZGVJbmZvID0ge1xuICAgICAgICAgICAgLy8gbm9kZSxcbiAgICAgICAgICAgIHRhZ05hbWU6IE5PREUuaXNCbG9ja0VsZW1lbnQobm9kZSkgPyAnZGl2JyA6ICdzcGFuJyxcbiAgICAgICAgICAgIGNsYXNzTmFtZXM6IFtdLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtdXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IENPTVBPTkVOVC5nZXRJbmZvKG5vZGUpO1xuICAgICAgICBjb25zdCBmaWxsID0gRklMTC5nZXRJbmZvKG5vZGUpO1xuICAgICAgICBjb25zdCB0ZXh0ID0gVEVYVC5nZXRJbmZvKG5vZGUpO1xuICAgICAgICBjb25zdCBzdHJva2UgPSBTVFJPS0UuZ2V0SW5mbyhub2RlKTtcbiAgICAgICAgY29uc3QgZ3JpZCA9IEdSSUQuZ2V0SW5mbyhub2RlKTtcbiAgICAgICAgY29uc3QgZWZmZWN0ID0gRUZGRUNULmdldEluZm8obm9kZSk7XG4gICAgICAgIGNvbnN0IG90aGVycyA9IE9USEVSUy5nZXRJbmZvKG5vZGUpO1xuICAgICAgICBjb25zdCBmbGV4ID0gRkxFWC5nZXRJbmZvKG5vZGUpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh7Y29tcG9uZW50LCBmaWxsLCB0ZXh0LCBzdHJva2UsIGdyaWQsIGVmZmVjdH0pO1xuICAgICAgICBub2RlSW5mbyA9IE5PREUuZXh0ZW5kSW5mbyhub2RlSW5mbywgZmlsbCk7XG4gICAgICAgIG5vZGVJbmZvID0gTk9ERS5leHRlbmRJbmZvKG5vZGVJbmZvLCB0ZXh0KTtcbiAgICAgICAgbm9kZUluZm8gPSBOT0RFLmV4dGVuZEluZm8obm9kZUluZm8sIHN0cm9rZSk7XG4gICAgICAgIG5vZGVJbmZvID0gTk9ERS5leHRlbmRJbmZvKG5vZGVJbmZvLCBncmlkKTtcbiAgICAgICAgbm9kZUluZm8gPSBOT0RFLmV4dGVuZEluZm8obm9kZUluZm8sIGVmZmVjdCk7XG4gICAgICAgIG5vZGVJbmZvID0gTk9ERS5leHRlbmRJbmZvKG5vZGVJbmZvLCBjb21wb25lbnQpO1xuICAgICAgICBub2RlSW5mbyA9IE5PREUuZXh0ZW5kSW5mbyhub2RlSW5mbywgZmxleCk7XG4gICAgICAgIG5vZGVJbmZvID0gTk9ERS5leHRlbmRJbmZvKG5vZGVJbmZvLCBvdGhlcnMpO1xuICAgICAgICBpZiAoaXNTdHJ1Y3ROb2RlIHx8IChjb21wb25lbnQgPT09IG51bGwgfHwgY29tcG9uZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjb21wb25lbnQuY29tcG9uZW50TmFtZSkpIHtcbiAgICAgICAgICAgIG5vZGVJbmZvLmNsYXNzTmFtZXMucHVzaChBQ1NTLmFkZCgnaCcsIHBhcnNlSW50KFN0cmluZyhub2RlLmhlaWdodCkpKSk7XG4gICAgICAgICAgICBub2RlSW5mby5jbGFzc05hbWVzLnB1c2goQUNTUy5hZGQoJ3cnLCBwYXJzZUludChTdHJpbmcobm9kZS53aWR0aCkpKSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyBzdG9wUmVuZGVyQ2hpbGRyZW4gPSBmYWxzZSB9ID0gY29tcG9uZW50IHx8IHt9O1xuICAgICAgICAvLyDmuLLmn5PlrZDoioLngrlcbiAgICAgICAgaWYgKCFzdG9wUmVuZGVyQ2hpbGRyZW4gJiYgIWlzU3RydWN0Tm9kZSkge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgbm9kZUluZm8uY2hpbGRyZW4gPSBub2RlLnR5cGUgPT09ICdURVhUJyA/IFtub2RlLmNoYXJhY3RlcnNdIDogTk9ERS5nZXROb2Rlc0luZm8obm9kZS5jaGlsZHJlbik7XG4gICAgICAgIH1cbiAgICAgICAgLy8g5oqKIGZsZXgg6Ze06Led5re75Yqg5Yiw5a2Q5YWD57SgXG4gICAgICAgIG5vZGVJbmZvLmNoaWxkcmVuID0gRkxFWC5hZGRDbGFzc05vZGVzKG5vZGVJbmZvLmNoaWxkcmVuLCBmbGV4ID09PSBudWxsIHx8IGZsZXggPT09IHZvaWQgMCA/IHZvaWQgMCA6IGZsZXguZ3V0dGVyQ2xhc3MpO1xuICAgICAgICBub2RlSW5mby5jbGFzc05hbWVzID0gVVRJTFMuY2xlYXJTdGluZ0FycmF5KG5vZGVJbmZvLmNsYXNzTmFtZXMpO1xuICAgICAgICByZXR1cm4gbm9kZUluZm87XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiDojrflj5YgVGFnIE5hbWVcbiAgICAgKiBAcGFyYW0gbm9kZVxuICAgICAqL1xuICAgIGlzQmxvY2tFbGVtZW50OiAobm9kZSkgPT4ge1xuICAgICAgICBjb25zdCBwYXJlbnQgPSBub2RlLnBhcmVudDtcbiAgICAgICAgLy8g5rKh5pyJ54i25YWD57SgXG4gICAgICAgIGlmICghcGFyZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIC8vIOWSjOeItuWFg+e0oOWuveW6puS4gOagt1xuICAgICAgICBpZiAobm9kZS53aWR0aCA9PT0gcGFyZW50LndpZHRoKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICAvLyDlpoLmnpzniLblhYPntKDmmK/nurXlkJEg55qEIGZsZXgg5biD5bGAXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgaWYgKHBhcmVudC5sYXlvdXRNb2RlICE9PSBcIk5PTkVcIikge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0sXG4gICAgc29ydDogKG5vZGVzID0gW10pID0+IHtcbiAgICAgICAgcmV0dXJuIFsuLi5ub2Rlc10uc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgaWYgKGEueSA9PT0gYi55KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGEueCAtIGIueDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBhLnkgLSBiLnk7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgZ2V0Tm9kZXNJbmZvOiAobm9kZXMgPSBbXSkgPT4ge1xuICAgICAgICBsZXQgaW5mbyA9IFtdO1xuICAgICAgICAvLyDpnIDopoHmjpLluo/kuIDkuItcbiAgICAgICAgY29uc3Qgc29ydE5vZGVzID0gTk9ERS5zb3J0KG5vZGVzKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHNvcnROb2Rlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgY29uc3Qgbm9kZUluZm8gPSBOT0RFLmdldE5vZGVJbmZvKHNvcnROb2Rlc1tpXSk7XG4gICAgICAgICAgICBub2RlSW5mbyAmJiBpbmZvLnB1c2gobm9kZUluZm8pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpbmZvO1xuICAgIH1cbn07XG5leHBvcnQgZGVmYXVsdCBOT0RFO1xuIiwiY29uc3QgVVRJTFMgPSB7XG4gICAgaXNCbG9jazogKHRhZ05hbWUgPSAnJykgPT4ge1xuICAgICAgICBjb25zdCBibG9ja1RhZyA9IFsnZGl2JywgJ2gxJywgJ2gyJywgJ2gzJywgJ2g0JywgJ2g1JywgJ2g2JywgJ3AnXTtcbiAgICAgICAgcmV0dXJuIGJsb2NrVGFnLmluZGV4T2YodGFnTmFtZSkgPiAtMTtcbiAgICB9LFxuICAgIGlzU2VsZlRhZzogKHRhZ05hbWUgPSAnJykgPT4ge1xuICAgICAgICBjb25zdCBzZWxmVGFnID0gWydpbWcnLCAnbGluaycsICdtZXRhJywgJ2JyJywgJ2JyJywgJ2hyJywgJ2lucHV0JywgJ2NvbCcsICdmcmFtZScsICdhcmVhJywgJ3BhcmFtJywgJ29iamVjdCcsICdlbWJlZCcsICdrZXlnZW4nLCAnc291cmNlJ107XG4gICAgICAgIHJldHVybiBzZWxmVGFnLmluZGV4T2YodGFnTmFtZSkgPiAtMTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIOWOu+mHjeWSjOWOu+epulxuICAgICAqIEBwYXJhbSBhcnJTdHJcbiAgICAgKi9cbiAgICBjbGVhclN0aW5nQXJyYXk6IChhcnJTdHIgPSBbXSkgPT4ge1xuICAgICAgICBpZiAoIWFyclN0ciB8fCAhYXJyU3RyLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgICAgICBhcnJTdHIuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgaWYgKGl0ZW0gJiYgcmVzdWx0LmluZGV4T2YoaXRlbSkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goaXRlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn07XG5leHBvcnQgZGVmYXVsdCBVVElMUztcbiIsImltcG9ydCBIVE1MIGZyb20gXCIuL0hUTUxcIjtcbmltcG9ydCBKU1ggZnJvbSBcIi4vSlNYXCI7XG5jb25zdCBET00gPSB7XG4gICAgcmVuZGVyOiAob2JqID0gW10sIGlzSlNYKSA9PiB7XG4gICAgICAgIGlmIChpc0pTWCkge1xuICAgICAgICAgICAgcmV0dXJuIEpTWC5nZXREb21CeUFycmF5KG9iaik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIEhUTUwuZ2V0RG9tQnlBcnJheShvYmopO1xuICAgIH1cbn07XG5leHBvcnQgZGVmYXVsdCBET007XG4iLCJpbXBvcnQgVVRJTFMgZnJvbSBcIi4uL1VUSUxTXCI7XG5pbXBvcnQgZ2V0UHJvcHNBcnJheSBmcm9tIFwiLi9nZXRQcm9wc0FycmF5XCI7XG5jb25zdCBIVE1MID0ge1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBnZXRJdGVtRG9tOiAoaXRlbSkgPT4ge1xuICAgICAgICBpZiAoIWl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGl0ZW0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IHRhZ05hbWUgPSAnaScsIGNoaWxkcmVuID0gW10sIGNsYXNzTmFtZXMgPSBbXSB9ID0gaXRlbTtcbiAgICAgICAgY29uc3QgYXJyUHJvcHMgPSBnZXRQcm9wc0FycmF5KHtcbiAgICAgICAgICAgIGNsYXNzOiBjbGFzc05hbWVzLmpvaW4oJyAnKVxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgdGFnU3RhcnQgPSBgJHt0YWdOYW1lfSR7YXJyUHJvcHMubGVuZ3RoID8gYCAke2FyclByb3BzLmpvaW4oJyAnKX1gIDogJyd9YDtcbiAgICAgICAgaWYgKFVUSUxTLmlzU2VsZlRhZyh0YWdOYW1lKSkge1xuICAgICAgICAgICAgcmV0dXJuIGA8JHt0YWdTdGFydH0vPmA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFjaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBgPCR7dGFnU3RhcnR9PjwvJHt0YWdOYW1lfT5gO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBgPCR7dGFnU3RhcnR9PiR7SFRNTC5nZXREb21CeUFycmF5KGNoaWxkcmVuKX08LyR7dGFnTmFtZX0+YDtcbiAgICB9LFxuICAgIGdldERvbUJ5QXJyYXk6IChvYmogPSBbXSkgPT4ge1xuICAgICAgICByZXR1cm4gb2JqLm1hcCgoaXRlbSkgPT4gSFRNTC5nZXRJdGVtRG9tKGl0ZW0pKS5qb2luKCcnKTtcbiAgICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgSFRNTDtcbiIsImltcG9ydCBVVElMUyBmcm9tIFwiLi4vVVRJTFNcIjtcbmltcG9ydCBnZXRQcm9wc0FycmF5IGZyb20gXCIuL2dldFByb3BzQXJyYXlcIjtcbmNvbnN0IEpTWCA9IHtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgZ2V0SXRlbURvbTogKGl0ZW0pID0+IHtcbiAgICAgICAgaWYgKCFpdGVtKSB7XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyBjaGlsZHJlbiA9IFtdLCBwcm9wcyA9IHt9LCBjbGFzc05hbWVzID0gW10gfSA9IGl0ZW07XG4gICAgICAgIGNvbnN0IHRhZ05hbWUgPSBpdGVtLmNvbXBvbmVudE5hbWUgfHwgaXRlbS50YWdOYW1lO1xuICAgICAgICBjb25zdCBhcnJQcm9wcyA9IGdldFByb3BzQXJyYXkoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBwcm9wcyksIHsgY2xhc3NOYW1lOiBjbGFzc05hbWVzLmZpbHRlcihpdGVtID0+IGl0ZW0pLmpvaW4oJyAnKSB9KSk7XG4gICAgICAgIGNvbnN0IHRhZ1N0YXJ0ID0gYCR7dGFnTmFtZX0ke2FyclByb3BzLmxlbmd0aCA/IGAgJHthcnJQcm9wcy5qb2luKCcgJyl9YCA6ICcnfWA7XG4gICAgICAgIGlmIChVVElMUy5pc1NlbGZUYWcodGFnTmFtZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBgPCR7dGFnU3RhcnR9Lz5gO1xuICAgICAgICB9XG4gICAgICAgIGlmICghY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaXRlbS5jb21wb25lbnROYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGA8JHt0YWdTdGFydH0vPmA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYDwke3RhZ1N0YXJ0fT48LyR7dGFnTmFtZX0+YDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYDwke3RhZ1N0YXJ0fT4ke0pTWC5nZXREb21CeUFycmF5KGNoaWxkcmVuKX08LyR7dGFnTmFtZX0+YDtcbiAgICB9LFxuICAgIGdldERvbUJ5QXJyYXk6IChvYmogPSBbXSkgPT4ge1xuICAgICAgICByZXR1cm4gb2JqLm1hcCgoaXRlbSkgPT4gSlNYLmdldEl0ZW1Eb20oaXRlbSkpLmpvaW4oJycpO1xuICAgIH1cbn07XG5leHBvcnQgZGVmYXVsdCBKU1g7XG4iLCJjb25zdCBnZXRQcm9wc0FycmF5ID0gKHByb3BzID0ge30pID0+IHtcbiAgICBjb25zdCBhcnJQcm9wcyA9IFtdO1xuICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHByb3BzKSkge1xuICAgICAgICBjb25zdCBpdGVtID0gKChrZXksIHZhbHVlKSA9PiB7XG4gICAgICAgICAgICBpZiAodmFsdWUgPT09ICcnIHx8IHZhbHVlID09PSBmYWxzZSB8fCB2YWx1ZSA9PT0gJ2ZhbHNlJykge1xuICAgICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gdHJ1ZSB8fCB2YWx1ZSA9PT0gJ3RydWUnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGtleTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYCR7a2V5fT1cIiR7dmFsdWV9XCJgO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGAke2tleX09eyR7SlNPTi5zdHJpbmdpZnkodmFsdWUpfX1gO1xuICAgICAgICB9KShrZXksIHZhbHVlKTtcbiAgICAgICAgaXRlbSAmJiBhcnJQcm9wcy5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgICByZXR1cm4gYXJyUHJvcHM7XG59O1xuZXhwb3J0IGRlZmF1bHQgZ2V0UHJvcHNBcnJheTtcbiIsImNvbnN0IENPTE9SID0ge1xuICAgIGdldFJnYmFCeUZpbGw6ICh7IGNvbG9yLCBvcGFjaXR5LCB2aXNpYmxlIH0pID0+IHtcbiAgICAgICAgLy8g5aaC5p6c5LiN5Y+v6KeBXG4gICAgICAgIGlmICghdmlzaWJsZSB8fCBvcGFjaXR5ID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByID0gcGFyc2VJbnQoU3RyaW5nKGNvbG9yLnIgKiAyNTUpKTtcbiAgICAgICAgY29uc3QgZyA9IHBhcnNlSW50KFN0cmluZyhjb2xvci5nICogMjU1KSk7XG4gICAgICAgIGNvbnN0IGIgPSBwYXJzZUludChTdHJpbmcoY29sb3IuYiAqIDI1NSkpO1xuICAgICAgICBjb25zdCBhID0gU3RyaW5nKG9wYWNpdHkpLmluZGV4T2YoJy4nKSA+IC0xID8gb3BhY2l0eS50b0ZpeGVkKDEpIDogb3BhY2l0eTtcbiAgICAgICAgcmV0dXJuIFtyLCBnLCBiLCBhXTtcbiAgICB9LFxufTtcbmV4cG9ydCBkZWZhdWx0IENPTE9SO1xuIiwiaW1wb3J0IENPTkZJRyBmcm9tIFwiLi4vQ09ORklHXCI7XG5jb25zdCBFRkZFQ1QgPSB7XG4gICAgZ2V0SW5mbzogKG5vZGUpID0+IHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICByZXR1cm4gQ09ORklHLmdldEluZm9CeUlkKG5vZGUuZWZmZWN0U3R5bGVJZCk7XG4gICAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IEVGRkVDVDtcbiIsImltcG9ydCBDT0xPUiBmcm9tIFwiLi9DT0xPUlwiO1xuaW1wb3J0IENPTkZJRyBmcm9tIFwiLi4vQ09ORklHXCI7XG5pbXBvcnQgQUNTUyBmcm9tIFwiLi4vQUNTU1wiO1xuY29uc3QgRklMTCA9IHtcbiAgICBnZXRGaWxsOiAobm9kZSkgPT4ge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGNvbnN0IFtmaXJzdEZpbGwgPSBudWxsXSA9IG5vZGUuZmlsbHMgfHwgW107XG4gICAgICAgIC8vIOayoeacieiuvue9ruS7u+S9leminOiJsiwg55uu5YmN5LiN5pSv5oyB5riQ5Y+YXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgaWYgKCFmaXJzdEZpbGwgfHwgZmlyc3RGaWxsLnR5cGUgIT09ICdTT0xJRCcpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvbG9yID0gQ09MT1IuZ2V0UmdiYUJ5RmlsbChmaXJzdEZpbGwpO1xuICAgICAgICBpZiAoIWNvbG9yKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBub2RlLnR5cGUgPT09ICdURVhUJyA/IEFDU1MuYWRkQ29sb3IoY29sb3IpIDogQUNTUy5hZGRCZ0NvbG9yKGNvbG9yKTtcbiAgICAgICAgLy8g5paH5pys5piv55So6aKc6Imy77yM5YW25a6D55CG6Kej5Li66IOM5pmv6ImyXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjbGFzc05hbWVzOiBbY2xhc3NOYW1lXVxuICAgICAgICB9O1xuICAgIH0sXG4gICAgLy8g6I635Y+W5aGr5YWF5L+h5oGvXG4gICAgZ2V0SW5mbzogKG5vZGUpID0+IHtcbiAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgIHJldHVybiBDT05GSUcuZ2V0SW5mb0J5SWQobm9kZS5maWxsU3R5bGVJZCkgfHwgRklMTC5nZXRGaWxsKG5vZGUpO1xuICAgIH0sXG59O1xuZXhwb3J0IGRlZmF1bHQgRklMTDtcbiIsImltcG9ydCBBQ1NTIGZyb20gXCIuLi9BQ1NTXCI7XG4vLyBpbXBvcnQgQ09ORklHIGZyb20gXCIuL0NPTkZJR1wiO1xuY29uc3QgRkxFWCA9IHtcbiAgICBnZXRGbGV4OiAobm9kZSkgPT4ge1xuICAgICAgICBjb25zdCB7IGxheW91dE1vZGUsIHByaW1hcnlBeGlzQWxpZ25JdGVtcywgY291bnRlckF4aXNBbGlnbkl0ZW1zLCBpdGVtU3BhY2luZyB9ID0gbm9kZTtcbiAgICAgICAgLy8g5rKh5pyJ5piv55SoIEZsZXgg5biD5bGAXG4gICAgICAgIGlmIChsYXlvdXRNb2RlID09PSBcIk5PTkVcIikge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgLy8g5rKh5pyJ5a2Q5YWD57SgIGZsZXgg5biD5bGA5rKh5pyJ5oSP5LmJXG4gICAgICAgIGNvbnN0IHsgY2hpbGRyZW4gPSBbXSB9ID0gbm9kZTtcbiAgICAgICAgaWYgKCFjaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZXMgPSBbXTtcbiAgICAgICAgY29uc3QgZ3V0dGVyQ2xhc3MgPSBbXTtcbiAgICAgICAgLy8g5Li65a2Q5YWD57Sg5re75Yqg6Ze06LedXG4gICAgICAgIGlmIChpdGVtU3BhY2luZyA+IDAgJiYgcHJpbWFyeUF4aXNBbGlnbkl0ZW1zICE9PSBcIlNQQUNFX0JFVFdFRU5cIikge1xuICAgICAgICAgICAgY29uc3QgZ3V0dGVyTWFwID0ge1xuICAgICAgICAgICAgICAgIFwiVkVSVElDQUxcIjogXCJtYlwiLFxuICAgICAgICAgICAgICAgIFwiSE9SSVpPTlRBTFwiOiBcIm1yXCJcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBndXR0ZXJDbGFzcy5wdXNoKEFDU1MuYWRkKGd1dHRlck1hcFtsYXlvdXRNb2RlXSwgaXRlbVNwYWNpbmcpKTtcbiAgICAgICAgfVxuICAgICAgICAvLyDlpoLmnpzmmK/nurXlkJHnmoQg6L+Z6YeM5Y+v5Lul5LiN5L2/55SoIGZsZXgg5biD5bGAXG4gICAgICAgIGlmIChsYXlvdXRNb2RlID09PSAnVkVSVElDQUwnKSB7XG4gICAgICAgICAgICAvLyDlvZPmmK/nurXlkJHluIPlsYDlvZPml7blgJlcbiAgICAgICAgICAgIGNsYXNzTmFtZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgLy8gXCJNSU5cIjogXCJcIixcbiAgICAgICAgICAgICAgICBcIkNFTlRFUlwiOiBcInRhY1wiLFxuICAgICAgICAgICAgICAgIFwiTUFYXCI6IFwidGFyXCIsXG4gICAgICAgICAgICB9W2NvdW50ZXJBeGlzQWxpZ25JdGVtc10pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY2xhc3NOYW1lcy5wdXNoKCdkZicpO1xuICAgICAgICAgICAgY2xhc3NOYW1lcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAvLyBcIk1JTlwiOiBcIlwiLFxuICAgICAgICAgICAgICAgIFwiQ0VOVEVSXCI6IFwiamNjXCIsXG4gICAgICAgICAgICAgICAgXCJNQVhcIjogXCJqY2ZlXCIsXG4gICAgICAgICAgICAgICAgXCJTUEFDRV9CRVRXRUVOXCI6IFwiamNzYlwiLFxuICAgICAgICAgICAgfVtwcmltYXJ5QXhpc0FsaWduSXRlbXNdKTtcbiAgICAgICAgICAgIGNsYXNzTmFtZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgLy9cIk1JTlwiOiBcIlwiLFxuICAgICAgICAgICAgICAgIFwiQ0VOVEVSXCI6IFwiYWljXCIsXG4gICAgICAgICAgICAgICAgXCJNQVhcIjogXCJhaWZlXCIsXG4gICAgICAgICAgICB9W2NvdW50ZXJBeGlzQWxpZ25JdGVtc10gfHwgXCJcIik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZXMsXG4gICAgICAgICAgICBndXR0ZXJDbGFzc1xuICAgICAgICB9O1xuICAgIH0sXG4gICAgYWRkQ2xhc3NOb2RlczogKGFyck5vZGUgPSBbXSwgZ3V0dGVyQ2xhc3MgPSBbXSkgPT4ge1xuICAgICAgICBpZiAoIShndXR0ZXJDbGFzcyA9PT0gbnVsbCB8fCBndXR0ZXJDbGFzcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogZ3V0dGVyQ2xhc3MubGVuZ3RoKSkge1xuICAgICAgICAgICAgcmV0dXJuIGFyck5vZGU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFyck5vZGUubWFwKChpdGVtLCBrZXkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgY2xhc3NOYW1lcyA9IFtdIH0gPSBpdGVtO1xuICAgICAgICAgICAgLy8g5pyA5ZCO5LiA5Liq5YWD57Sg5LiN5YGa5Lu75L2V5aSE55CGXG4gICAgICAgICAgICBpZiAoa2V5ICE9PSBhcnJOb2RlLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTmFtZXMgPSBbLi4uY2xhc3NOYW1lcywgLi4uZ3V0dGVyQ2xhc3NdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaXRlbS5jbGFzc05hbWVzID0gY2xhc3NOYW1lcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIGdldEluZm86IChub2RlKSA9PiB7XG4gICAgICAgIC8vIOi/meWHoOS4quWFg+e0oOmDveS4jeWBmuWkhOeQhlxuICAgICAgICBpZiAoWydURVhUJ10uaW5kZXhPZihub2RlLnR5cGUpID4gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgcmV0dXJuIEZMRVguZ2V0RmxleChub2RlKTtcbiAgICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgRkxFWDtcbiIsImltcG9ydCBDT05GSUcgZnJvbSBcIi4uL0NPTkZJR1wiO1xuY29uc3QgR1JJRCA9IHtcbiAgICBnZXRJbmZvOiAobm9kZSkgPT4ge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHJldHVybiBDT05GSUcuZ2V0SW5mb0J5SWQobm9kZS5ncmlkU3R5bGVJZCk7XG4gICAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IEdSSUQ7XG4iLCJpbXBvcnQgQUNTUyBmcm9tIFwiLi4vQUNTU1wiO1xuY29uc3QgT1RIRVJTID0ge1xuICAgIGdlckJvcmRlclJhZGl1c0NsYXNzTmFtZXM6IChub2RlKSA9PiB7XG4gICAgICAgIGNvbnN0IHRsID0gbm9kZS50b3BMZWZ0UmFkaXVzIHx8IDA7XG4gICAgICAgIGNvbnN0IHRyID0gbm9kZS50b3BSaWdodFJhZGl1cyB8fCAwO1xuICAgICAgICBjb25zdCBiciA9IG5vZGUuYm90dG9tUmlnaHRSYWRpdXMgfHwgMDtcbiAgICAgICAgY29uc3QgYmwgPSBub2RlLmJvdHRvbUxlZnRSYWRpdXMgfHwgMDtcbiAgICAgICAgLy8g5YWo6YOo5Li6IDBcbiAgICAgICAgaWYgKCh0bCArIHRyICsgYnIgKyBibCkgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuICAgICAgICAvLyDlpoLmnpzlm5vkuKrlgLzpg73nm7jnrYlcbiAgICAgICAgaWYgKCh0bCA9PT0gdHIpICYmICh0bCA9PT0gYnIpICYmICh0bCA9PT0gYmwpKSB7XG4gICAgICAgICAgICByZXR1cm4gW0FDU1MuYWRkKCdicicsIHRsKV07XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY2xhc3NOYW1lcyA9IFtdO1xuICAgICAgICB0bCAmJiBjbGFzc05hbWVzLnB1c2goQUNTUy5hZGQoJ2J0bHInLCB0bCkpO1xuICAgICAgICB0ciAmJiBjbGFzc05hbWVzLnB1c2goQUNTUy5hZGQoJ2J0cnInLCB0cikpO1xuICAgICAgICBiciAmJiBjbGFzc05hbWVzLnB1c2goQUNTUy5hZGQoJ2JicnInLCBicikpO1xuICAgICAgICBibCAmJiBjbGFzc05hbWVzLnB1c2goQUNTUy5hZGQoJ2JibHInLCBibCkpO1xuICAgICAgICByZXR1cm4gY2xhc3NOYW1lcztcbiAgICB9LFxuICAgIGdldFBhZGRpbmdDbGFzc05hbWVzOiAobm9kZSkgPT4ge1xuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgQUNTUy5hZGQoJ3B0Jywgbm9kZS5wYWRkaW5nVG9wKSxcbiAgICAgICAgICAgIEFDU1MuYWRkKCdwcicsIG5vZGUucGFkZGluZ1JpZ2h0KSxcbiAgICAgICAgICAgIEFDU1MuYWRkKCdwYicsIG5vZGUucGFkZGluZ0JvdHRvbSksXG4gICAgICAgICAgICBBQ1NTLmFkZCgncGwnLCBub2RlLnBhZGRpbmdMZWZ0KSxcbiAgICAgICAgXTtcbiAgICB9LFxuICAgIGdldEluZm86IChub2RlKSA9PiB7XG4gICAgICAgIGNvbnN0IHBhZGRpbmcgPSBPVEhFUlMuZ2V0UGFkZGluZ0NsYXNzTmFtZXMobm9kZSk7XG4gICAgICAgIGNvbnN0IHJhZGl1cyA9IE9USEVSUy5nZXJCb3JkZXJSYWRpdXNDbGFzc05hbWVzKG5vZGUpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY2xhc3NOYW1lczogWy4uLnBhZGRpbmcsIC4uLnJhZGl1c11cbiAgICAgICAgfTtcbiAgICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgT1RIRVJTO1xuIiwiaW1wb3J0IENPTkZJRyBmcm9tIFwiLi4vQ09ORklHXCI7XG5jb25zdCBTVFJPS0UgPSB7XG4gICAgLy8g5paH5pys57uE5Lu2XG4gICAgZ2V0SW5mbzogKG5vZGUpID0+IHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICByZXR1cm4gQ09ORklHLmdldEluZm9CeUlkKG5vZGUuc3Ryb2tlU3R5bGVJZCk7XG4gICAgfSxcbn07XG5leHBvcnQgZGVmYXVsdCBTVFJPS0U7XG4iLCJpbXBvcnQgQ09ORklHIGZyb20gXCIuLi9DT05GSUdcIjtcbmltcG9ydCBBQ1NTIGZyb20gXCIuLi9BQ1NTXCI7XG5jb25zdCBURVhUID0ge1xuICAgIHVuaXRNYXA6IHtcbiAgICAgICAgJ1BFUkNFTlQnOiAnJSdcbiAgICAgICAgLy8gXCJQSVhFTFNcIjpcIlwiXG4gICAgfSxcbiAgICBnZXRGb250TmFtZUNsYXNzOiAobm9kZSkgPT4ge1xuICAgICAgICBjb25zdCB7IGZvbnROYW1lIH0gPSBub2RlO1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGNvbnN0IHsgc3R5bGUgfSA9IGZvbnROYW1lO1xuICAgICAgICBpZiAodHlwZW9mIHN0eWxlICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGZvbnRNYXAgPSB7XG4gICAgICAgICAgICBcIlVMVFJBTElHSFRcIjogXCJmdzEwMFwiLFxuICAgICAgICAgICAgXCJUSElOXCI6ICdmdzIwMCcsXG4gICAgICAgICAgICBcIkxJR0hUXCI6IFwiZnczMDBcIixcbiAgICAgICAgICAgIFwiUkVHVUxBUlwiOiBcIlwiLFxuICAgICAgICAgICAgXCJNRURJVU1cIjogXCJmdzUwMFwiLFxuICAgICAgICAgICAgXCJTRU1JQk9MRFwiOiBcImZ3NjAwXCIsXG4gICAgICAgICAgICBcIkJPTERcIjogXCJmdzcwMFwiLFxuICAgICAgICAgICAgXCJCTEFDS1wiOiBcImZ3OTAwXCIsXG4gICAgICAgICAgICBcIklUQUxJQ1wiOiBcImZzaVwiLFxuICAgICAgICAgICAgXCJPQkxJUVVFXCI6IFwiZnNpXCJcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgY2xhc3NOYW1lcyA9IHN0eWxlLnNwbGl0KCcgJykubWFwKChpdGVtKSA9PiBmb250TWFwW2l0ZW0udG9VcHBlckNhc2UoKV0gfHwgJycpO1xuICAgICAgICByZXR1cm4gY2xhc3NOYW1lcy5maWx0ZXIoaXRlbSA9PiBpdGVtKS5qb2luKCcgJyk7XG4gICAgfSxcbiAgICBnZXRBQ1NTU0luZm86IChub2RlKSA9PiB7XG4gICAgICAgIHZhciBfYSwgX2IsIF9jO1xuICAgICAgICBjb25zdCBzdHlsZSA9IHt9O1xuICAgICAgICBjb25zdCBjbGFzc05hbWVzID0gW107XG4gICAgICAgIGlmIChbXCJzdHJpbmdcIiwgXCJudW1iZXJcIl0uaW5kZXhPZih0eXBlb2Ygbm9kZS5mb250U2l6ZSkgPiAtMSkge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgY2xhc3NOYW1lcy5wdXNoKEFDU1MuYWRkKCdmcycsIG5vZGUuZm9udFNpemUpKTtcbiAgICAgICAgfVxuICAgICAgICAvLyDmna3pq5hcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBpZiAoKF9hID0gbm9kZS5saW5lSGVpZ2h0KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EudmFsdWUpIHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIGNvbnN0IHsgdmFsdWUsIHVuaXQgfSA9IG5vZGUubGluZUhlaWdodDtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIGNsYXNzTmFtZXMucHVzaChBQ1NTLmFkZCgnbGgnLCB2YWx1ZSwgVEVYVC51bml0TWFwW3VuaXRdKSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8g5a2X6Ze06LedXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgaWYgKChfYiA9IG5vZGUubGV0dGVyU3BhY2luZykgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLnZhbHVlKSB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBjb25zdCB7IHZhbHVlLCB1bml0IH0gPSBub2RlLmxldHRlclNwYWNpbmc7XG4gICAgICAgICAgICBjbGFzc05hbWVzLnB1c2goQUNTUy5hZGQoJ2xzJywgdmFsdWUsIFRFWFQudW5pdE1hcFt1bml0XSkpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGZvbnQtd2VpZ2h0IGZvbnQtc3R5bGVcbiAgICAgICAgY29uc3QgZm5DbGFzcyA9IFRFWFQuZ2V0Rm9udE5hbWVDbGFzcyhub2RlKTtcbiAgICAgICAgZm5DbGFzcyAmJiBjbGFzc05hbWVzLnB1c2goZm5DbGFzcyk7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgaWYgKChfYyA9IG5vZGUuZm9udE5hbWUpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5mYW1pbHkpIHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIGNsYXNzTmFtZXMucHVzaChBQ1NTLmFkZEZvbnRGYW1pbHkobm9kZS5mb250TmFtZS5mYW1pbHkpKTtcbiAgICAgICAgfVxuICAgICAgICAvLyB0ZXh0LWFsaWduXG4gICAgICAgIGNvbnN0IHRhQ2xhc3MgPSB7XG4gICAgICAgICAgICBcIkxFRlRcIjogJycsXG4gICAgICAgICAgICBcIkNFTlRFUlwiOiAndGFjJyxcbiAgICAgICAgICAgIFwiUklHSFRcIjogJ3RhcicsXG4gICAgICAgICAgICBcIkpVU1RJRklFRFwiOiAndGFqJyxcbiAgICAgICAgfVtub2RlLnRleHRBbGlnbkhvcml6b250YWxdO1xuICAgICAgICB0YUNsYXNzICYmIGNsYXNzTmFtZXMucHVzaCh0YUNsYXNzKTtcbiAgICAgICAgLy8gdmVydGljYWwtYWxpZ25cbiAgICAgICAgY29uc3QgdmFDbGFzcyA9IHtcbiAgICAgICAgICAgIFwiVE9QXCI6ICcnLFxuICAgICAgICAgICAgXCJDRU5URVJcIjogJ3ZhbScsXG4gICAgICAgICAgICBcIkJPVFRPTVwiOiAndmFiJyxcbiAgICAgICAgfVtub2RlLnRleHRBbGlnblZlcnRpY2FsXTtcbiAgICAgICAgdmFDbGFzcyAmJiBjbGFzc05hbWVzLnB1c2godmFDbGFzcyk7XG4gICAgICAgIC8vIHR0XG4gICAgICAgIGNvbnN0IHR0Q2xhc3MgPSB7XG4gICAgICAgICAgICBcIk9SSUdJTkFMXCI6ICcnLFxuICAgICAgICAgICAgXCJVUFBFUlwiOiAndHR1JyxcbiAgICAgICAgICAgIFwiTE9XRVJcIjogJ3R0bCcsXG4gICAgICAgICAgICBcIlRJVExFXCI6ICd0dGMnLFxuICAgICAgICB9W25vZGUudGV4dENhc2VdO1xuICAgICAgICB0dENsYXNzICYmIGNsYXNzTmFtZXMucHVzaCh0dENsYXNzKTtcbiAgICAgICAgLy8gdGRcbiAgICAgICAgY29uc3QgdGRDbGFzcyA9IHtcbiAgICAgICAgICAgIFwiTk9ORVwiOiBcIlwiLFxuICAgICAgICAgICAgXCJVTkRFUkxJTkVcIjogJ3RkdScsXG4gICAgICAgICAgICBcIlNUUklLRVRIUk9VR0hcIjogJ3RkbCdcbiAgICAgICAgfVtub2RlLnRleHREZWNvcmF0aW9uXTtcbiAgICAgICAgdGRDbGFzcyAmJiBjbGFzc05hbWVzLnB1c2godGRDbGFzcyk7XG4gICAgICAgIHJldHVybiB7IHN0eWxlLCBjbGFzc05hbWVzIH07XG4gICAgfSxcbiAgICAvLyDmlofmnKznu4Tku7ZcbiAgICBnZXRJbmZvOiAobm9kZSkgPT4ge1xuICAgICAgICBpZiAobm9kZS50eXBlICE9PSAnVEVYVCcpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgcmV0dXJuIENPTkZJRy5nZXRJbmZvQnlJZChub2RlLnRleHRTdHlsZUlkKSB8fCBURVhULmdldEFDU1NTSW5mbyhub2RlKTtcbiAgICB9LFxufTtcbmV4cG9ydCBkZWZhdWx0IFRFWFQ7XG4iLCJpbXBvcnQgTk9ERSBmcm9tIFwiLi9fL05PREVcIjtcbmltcG9ydCBDT05GSUcgZnJvbSBcIi4vXy9DT05GSUdcIjtcbmltcG9ydCBDT01QT05FTlQgZnJvbSBcIi4vXy9DT01QT05FTlRcIjtcbmltcG9ydCBBQ1NTIGZyb20gXCIuL18vQUNTU1wiO1xuaW1wb3J0IERPTSBmcm9tIFwiLi9fL3JlbmRlci9ET01cIjtcbmNvbnN0IEFQSSA9IHtcbiAgICB0YWJJbmRleDogMCxcbiAgICBnZXRTZWxlY3Rpb246ICgpID0+IHtcbiAgICAgICAgY29uc3Qgc2VsZWN0aW9uID0gZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uO1xuICAgICAgICBpZiAoIXNlbGVjdGlvbi5sZW5ndGgpIHtcbiAgICAgICAgICAgIC8vIOayoeaciemAieaLqeS7u+S9leWFg+e0oFxuICAgICAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2UoeyBub1NlbGVjdGlvbjogdHJ1ZSB9KTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzZWxlY3Rpb247XG4gICAgfSxcbiAgICBvblRhYkNoYW5nZTogKGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGJlZm9yZUluZGV4ID0gQVBJLnRhYkluZGV4O1xuICAgICAgICBBUEkudGFiSW5kZXggPSBpbmRleDtcbiAgICAgICAgLy8g5aaC5p6c5Y+q5piv5ZyoIEhUTUwg5ZKMIEFDU1Mg5LmL5YmN5YiH5o2iXG4gICAgICAgIGlmICgoYmVmb3JlSW5kZXggPT09IDAgfHwgYmVmb3JlSW5kZXggPT09IDEpICYmIChpbmRleCA9PT0gMCB8fCBpbmRleCA9PT0gMSkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBhY3Rpb25NYXAgPSBbJ3J1bkhvbWUnLCAncnVuSG9tZScsICdydW5Ub2tlbicsICdydW5Db25maWcnXTtcbiAgICAgICAgY29uc3QgYWN0aW9uID0gYWN0aW9uTWFwW2luZGV4XTtcbiAgICAgICAgaWYgKCFhY3Rpb24pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBBUElbYWN0aW9uXSgpO1xuICAgIH0sXG4gICAgb25TZWxlY3Rpb25DaGFuZ2U6ICgpID0+IHtcbiAgICAgICAgY29uc3QgYWN0aW9uTWFwID0gWydydW5Ib21lJywgJ3J1bkhvbWUnLCAncnVuVG9rZW4nLCAnJ107XG4gICAgICAgIGNvbnN0IGFjdGlvbiA9IGFjdGlvbk1hcFtBUEkudGFiSW5kZXhdO1xuICAgICAgICBpZiAoIWFjdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIEFQSVthY3Rpb25dKCk7XG4gICAgfSxcbiAgICBydW5Ib21lOiAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbiA9IEFQSS5nZXRTZWxlY3Rpb24oKTtcbiAgICAgICAgaWYgKCFzZWxlY3Rpb24pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBBQ1NTLmluaXQoKTtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBjb25zdCBJbmZvID0gTk9ERS5nZXROb2Rlc0luZm8oc2VsZWN0aW9uKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coSW5mbyk7XG4gICAgICAgIGNvbnN0IGlzSlNYID0gQ09ORklHLmlzSlNYKCk7XG4gICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgIGdldEhUTUw6IERPTS5yZW5kZXIoSW5mbywgaXNKU1gpLFxuICAgICAgICAgICAgZ2V0Q1NTOiBBQ1NTLmdldFN0cmluZygpLFxuICAgICAgICAgICAgaXNKU1gsXG4gICAgICAgICAgICBub1NlbGVjdGlvbjogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBydW5Db25maWc6ICgpID0+IHtcbiAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgZ2V0Q29uZmlnOiBDT05GSUcuZ2V0QWxsKClcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBydW5Ub2tlbjogKCkgPT4ge1xuICAgICAgICBjb25zdCBbc2VsZWN0aW9uXSA9IEFQSS5nZXRTZWxlY3Rpb24oKSB8fCBbXTtcbiAgICAgICAgaWYgKCFzZWxlY3Rpb24pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB0eXBlTWFwID0gWydmaWxsJywgJ3RleHQnLCAnc3Ryb2tlJywgJ2VmZmVjdCcsICdncmlkJ107XG4gICAgICAgIGNvbnN0IHRva2VuID0gQ09ORklHLmdldFRva2VuKCkgfHwge307XG4gICAgICAgIC8vIOWmguaenOaYr+e7hOS7tuWImeS4jemcgOimgeaYvuekuuS7u+S9leWFtuWug+eahOWxnuaAp1xuICAgICAgICBpZiAoQ09NUE9ORU5ULmlzQ29tcG9uZW50KHNlbGVjdGlvbikpIHtcbiAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICAgICAgY29uc3QgeyBpZCwgbmFtZSB9ID0gQ09NUE9ORU5ULmdldE1haW5Db21wb25lbnQoc2VsZWN0aW9uKTtcbiAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudFRva2VuID0gT2JqZWN0LmFzc2lnbih7IG5hbWUsIHR5cGU6ICdDb21wb25lbnQnIH0sIHRva2VuW2lkXSk7XG4gICAgICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICAgICAgZ290VG9rZW46IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogc2VsZWN0aW9uLnR5cGUsXG4gICAgICAgICAgICAgICAgICAgIHRva2VuOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBbaWRdOiBjb21wb25lbnRUb2tlblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBub1NlbGVjdGlvbjogZmFsc2VcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG1hdGNoVG9rZW4gPSB7fTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coc2VsZWN0aW9uKTtcbiAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgIFtzZWxlY3Rpb24uZmlsbFN0eWxlSWQsIHNlbGVjdGlvbi50ZXh0U3R5bGVJZCwgc2VsZWN0aW9uLnN0cm9rZVN0eWxlSWQsIHNlbGVjdGlvbi5lZmZlY3RTdHlsZUlkLCBzZWxlY3Rpb24uZ3JpZFN0eWxlSWRdLmZvckVhY2goKGl0ZW0sIGtleSkgPT4ge1xuICAgICAgICAgICAgaWYgKCFpdGVtKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZ2V0U3R5bGUgPSBmaWdtYS5nZXRTdHlsZUJ5SWQoaXRlbSk7XG4gICAgICAgICAgICBjb25zdCB7IGlkLCBuYW1lIH0gPSBnZXRTdHlsZSB8fCB7fTtcbiAgICAgICAgICAgIGlmICghaWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtYXRjaFRva2VuW2lkXSA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgdG9rZW5baWRdKSwgeyBuYW1lLCB0eXBlOiB0eXBlTWFwW2tleV0gfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICBnb3RUb2tlbjoge1xuICAgICAgICAgICAgICAgIHR5cGU6IHNlbGVjdGlvbi50eXBlLFxuICAgICAgICAgICAgICAgIHRva2VuOiBtYXRjaFRva2VuXG4gICAgICAgICAgICB9LCBub1NlbGVjdGlvbjogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBvbm1lc3NhZ2U6IChtc2cgPSB7fSkgPT4ge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGNvbnN0IHsgdHlwZSA9IG51bGwsIHZhbHVlID0gbnVsbCB9ID0gbXNnO1xuICAgICAgICBpZiAodHlwZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IFtuYW1lLCBhY3Rpb25dID0gdHlwZS5zcGxpdCgnLicpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnQVBJIG9ubWVzc2FnZScsIG5hbWUsIGFjdGlvbiwgdmFsdWUpO1xuICAgICAgICBpZiAobmFtZSA9PT0gJ0FQSScgJiYgKGFjdGlvbiBpbiBBUEkpKSB7XG4gICAgICAgICAgICBBUElbYWN0aW9uXSh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobmFtZSA9PT0gJ0NPTkZJRycgJiYgKGFjdGlvbiBpbiBDT05GSUcpKSB7XG4gICAgICAgICAgICBDT05GSUdbYWN0aW9uXSh2YWx1ZSk7XG4gICAgICAgICAgICBpZiAoYWN0aW9uID09PSAnY2hhbmdlSlNYJykge1xuICAgICAgICAgICAgICAgIEFQSS5ydW5Ib21lKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChhY3Rpb24gPT09ICdhcHBlbmRUb2tlbicpIHtcbiAgICAgICAgICAgICAgICBBUEkucnVuVG9rZW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIEFQSS5ydW5Db25maWcoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn07XG4vLyBUaGlzIHBsdWdpbiB3aWxsIG9wZW4gYSB3aW5kb3cgdG8gcHJvbXB0IHRoZSB1c2VyIHRvIGVudGVyIGEgbnVtYmVyLCBhbmRcbi8vIGl0IHdpbGwgdGhlbiBjcmVhdGUgdGhhdCBtYW55IHJlY3RhbmdsZXMgb24gdGhlIHNjcmVlbi5cbi8vIFRoaXMgZmlsZSBob2xkcyB0aGUgbWFpbiBjb2RlIGZvciB0aGUgcGx1Z2lucy4gSXQgaGFzIGFjY2VzcyB0byB0aGUgKmRvY3VtZW50Ki5cbi8vIFlvdSBjYW4gYWNjZXNzIGJyb3dzZXIgQVBJcyBpbiB0aGUgPHNjcmlwdD4gdGFnIGluc2lkZSBcInVpLmh0bWxcIiB3aGljaCBoYXMgYVxuLy8gZnVsbCBicm93c2VyIGVudmlyb25tZW50IChzZWUgZG9jdW1lbnRhdGlvbikuXG5DT05GSUcuaW5pdCgpLnRoZW4oKCkgPT4ge1xuICAgIC8vIFRoaXMgc2hvd3MgdGhlIEhUTUwgcGFnZSBpbiBcInVpLmh0bWxcIi5cbiAgICBmaWdtYS5zaG93VUkoX19odG1sX18sIHsgd2lkdGg6IDQwMCwgaGVpZ2h0OiA2MDAgfSk7XG4gICAgQVBJLnJ1bkhvbWUoKTtcbiAgICBmaWdtYS5vbihcInNlbGVjdGlvbmNoYW5nZVwiLCAoKSA9PiB7XG4gICAgICAgIEFQSS5vblNlbGVjdGlvbkNoYW5nZSgpO1xuICAgIH0pO1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBmaWdtYS51aS5vbm1lc3NhZ2UgPSBBUEkub25tZXNzYWdlO1xufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9