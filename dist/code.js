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
  getComponentName: function getComponentName(node) {
    var _COMPONENT$getMainCom = COMPONENT.getMainComponent(node),
        _COMPONENT$getMainCom2 = _COMPONENT$getMainCom.name,
        name = _COMPONENT$getMainCom2 === void 0 ? '' : _COMPONENT$getMainCom2;

    if (!name) {
      return '';
    }

    return COMPONENT.stringToComponentName(name);
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


    matchToken.props = COMPONENT.getComponentProps(node); // 用户没有指定表示要渲染

    if (!('renderChildren' in matchToken)) {
      matchToken.renderChildren = '1';
    } // 用户没有指定表示要渲染


    if (!('renderWidth' in matchToken)) {
      matchToken.renderWidth = '0';
    } // 用户没有指定表示要渲染


    if (!('renderHeight' in matchToken)) {
      matchToken.renderHeight = '0';
    }

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
  getInfoById: function getInfoById() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

    if (!id) {
      return null;
    }

    var tokenConfig = CONFIG.getToken() || {}; // 如果有自定义用自定义的

    return tokenConfig[id];
  },
  getSelectionTokens: function getSelectionTokens(selection) {
    var _ref5 = CONFIG.getCurrent() || {},
        _ref5$name = _ref5.name,
        name = _ref5$name === void 0 ? '' : _ref5$name,
        _ref5$token = _ref5.token,
        token = _ref5$token === void 0 ? {} : _ref5$token;

    if (!selection) {
      figma.ui.postMessage({
        getSelectionInfo: {
          name: name
        }
      });
      return;
    }

    var matchToken = {}; // 如果是组件则不需要显示任何其它的属性

    if (_COMPONENT__WEBPACK_IMPORTED_MODULE_0__["default"].isComponent(selection)) {
      //@ts-ignore
      var _COMPONENT$getMainCom = _COMPONENT__WEBPACK_IMPORTED_MODULE_0__["default"].getMainComponent(selection),
          id = _COMPONENT$getMainCom.id,
          _name = _COMPONENT$getMainCom.name,
          type = _COMPONENT$getMainCom.type;

      var findToken = token[id] || {};
      matchToken[id] = Object.assign(Object.assign({}, findToken), {
        name: _name,
        type: type
      });
    } //@ts-ignore


    [selection.fillStyleId, selection.textStyleId, selection.strokeStyleId, selection.effectStyleId, selection.gridStyleId].forEach(function (item, key) {
      if (!item) {
        return '';
      }

      var _ref6 = figma.getStyleById(item) || {},
          id = _ref6.id,
          name = _ref6.name,
          type = _ref6.type;

      if (!id) {
        return '';
      }

      matchToken[id] = Object.assign(Object.assign({}, token[id]), {
        name: name,
        type: type
      });
    });
    figma.ui.postMessage({
      getSelectionInfo: {
        name: name,
        token: matchToken
      }
    });
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

    var _a$className = a.className,
        classNameA = _a$className === void 0 ? '' : _a$className,
        _a$ignoreClassName = a.ignoreClassName,
        ignoreClassNameA = _a$ignoreClassName === void 0 ? '' : _a$ignoreClassName,
        _a$props = a.props,
        propsA = _a$props === void 0 ? {} : _a$props,
        restA = __rest(a, ["className", "ignoreClassName", "props"]);

    var _b$className = b.className,
        classNameB = _b$className === void 0 ? '' : _b$className,
        _b$ignoreClassName = b.ignoreClassName,
        ignoreClassNameB = _b$ignoreClassName === void 0 ? '' : _b$ignoreClassName,
        _b$props = b.props,
        propsB = _b$props === void 0 ? {} : _b$props,
        children = b.children,
        restB = __rest(b, ["className", "ignoreClassName", "props", "children"]);

    return Object.assign(Object.assign({
      props: Object.assign(Object.assign({}, propsA), propsB),
      className: "".concat(classNameA, " ").concat(classNameB),
      ignoreClassName: "".concat(ignoreClassNameA, " ").concat(ignoreClassNameB)
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
      ignoreClassName: '',
      className: '',
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
    nodeInfo = NODE.extendInfo(nodeInfo, others); // @ts-ignore

    if (isStructNode || String(nodeInfo === null || nodeInfo === void 0 ? void 0 : nodeInfo.renderWidth) === '1') {
      nodeInfo.className += ' ' + _SACSS__WEBPACK_IMPORTED_MODULE_6__["default"].add('w', parseInt(String(node.width)));
    } // @ts-ignore


    if (isStructNode || String(nodeInfo === null || nodeInfo === void 0 ? void 0 : nodeInfo.renderHeight) === '1') {
      nodeInfo.className += ' ' + _SACSS__WEBPACK_IMPORTED_MODULE_6__["default"].add('h', parseInt(String(node.height)));
    }

    var _ref = component || {},
        renderChildren = _ref.renderChildren;

    if (!isStructNode || String(renderChildren) === '0') {
      if (String(renderChildren) === '2') {
        // @ts-ignore
        nodeInfo.children = node.findAll(function (c) {
          return c.type === 'TEXT';
        }).map(function (c) {
          return c.characters;
        });
      } // 渲染子节点


      if (String(renderChildren) === '1') {
        // @ts-ignore
        nodeInfo.children = node.type === 'TEXT' ? [node.characters] : NODE.getNodesInfo(node.children);
      }
    } // 整个项目都忽略的 className
    // @ts-ignore


    var _ref2 = _CONFIG__WEBPACK_IMPORTED_MODULE_10__["default"].getCurrent() || {},
        _ref2$ignoreClassName = _ref2.ignoreClassName,
        ignoreClassName = _ref2$ignoreClassName === void 0 ? '' : _ref2$ignoreClassName;

    nodeInfo.className = _UTILS__WEBPACK_IMPORTED_MODULE_7__["default"].clearClassName(nodeInfo.className, "".concat(nodeInfo.ignoreClassName, " ").concat(ignoreClassName));
    delete nodeInfo.ignoreClassName;
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
    var className = "ff:".concat(valueOk);
    SACSS.data[className] = "font-family:\"".concat(value, "\"");
    return className;
  },
  addColor: function addColor() {
    var rgba = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    if (!rgba && rgba.length) {
      return '';
    }

    var className = "c:".concat(rgba.join(''));
    SACSS.data[className] = "color:rgba(".concat(rgba.join(','), ")");
    return className;
  },
  addBgColor: function addBgColor() {
    var rgba = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    if (!rgba && rgba.length) {
      return '';
    }

    var className = "bc:".concat(rgba.join(''));
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
        _item$className = item.className,
        className = _item$className === void 0 ? '' : _item$className;
    var arrProps = Object(_getPropsArray__WEBPACK_IMPORTED_MODULE_1__["default"])({
      class: className
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
        _item$className = item.className,
        className = _item$className === void 0 ? '' : _item$className;
    var tagName = item.componentName || item.tagName;
    var arrProps = Object(_getPropsArray__WEBPACK_IMPORTED_MODULE_1__["default"])(Object.assign(Object.assign({}, props), {
      className: className
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
/* harmony import */ var _SACSS__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../SACSS */ "./src/_/SACSS.ts");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

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

    var className = node.type === 'TEXT' ? _SACSS__WEBPACK_IMPORTED_MODULE_2__["default"].addColor(color) : _SACSS__WEBPACK_IMPORTED_MODULE_2__["default"].addBgColor(color); // 文本是用颜色，其它理解为背景色

    return {
      className: className
    };
  },
  // 获取填充信息
  getInfo: function getInfo(node) {
    //@ts-ignore
    var getInfo = _CONFIG__WEBPACK_IMPORTED_MODULE_1__["default"].getInfoById(node.fillStyleId);

    if (!getInfo) {
      return FILL.getFill(node);
    }

    var _getInfo$textClassNam = getInfo.textClassName,
        textClassName = _getInfo$textClassNam === void 0 ? '' : _getInfo$textClassNam,
        _getInfo$className = getInfo.className,
        className = _getInfo$className === void 0 ? '' : _getInfo$className,
        rest = __rest(getInfo, ["textClassName", "className"]);

    return Object.assign({
      className: node.type === 'TEXT' ? textClassName : className
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
        "MAX": "tar"
      }[counterAxisAlignItems]);
    } else {
      className.push('df');
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
        itemSpacing = parent.itemSpacing; // 两端对其表示不需要这些

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

    var isLastChildren = id === node.id; // 为子元素添加间距

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

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

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
    return [_SACSS__WEBPACK_IMPORTED_MODULE_0__["default"].add('pt', node.paddingTop), _SACSS__WEBPACK_IMPORTED_MODULE_0__["default"].add('pr', node.paddingRight), _SACSS__WEBPACK_IMPORTED_MODULE_0__["default"].add('pb', node.paddingBottom), _SACSS__WEBPACK_IMPORTED_MODULE_0__["default"].add('pl', node.paddingLeft)];
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
    var className = style.split(' ').map(function (item) {
      return fontMap[item.toUpperCase()] || '';
    });
    return className.filter(function (item) {
      return item;
    }).join(' ');
  },
  getACSSSInfo: function getACSSSInfo(node) {
    var _a, _b, _c;

    var className = [];

    if (["string", "number"].indexOf(_typeof(node.fontSize)) > -1) {
      // @ts-ignore
      className.push(_SACSS__WEBPACK_IMPORTED_MODULE_1__["default"].add('fs', node.fontSize));
    } // 杭高
    // @ts-ignore


    if ((_a = node.lineHeight) === null || _a === void 0 ? void 0 : _a.value) {
      // @ts-ignore
      var _node$lineHeight = node.lineHeight,
          value = _node$lineHeight.value,
          unit = _node$lineHeight.unit; // @ts-ignore

      className.push(_SACSS__WEBPACK_IMPORTED_MODULE_1__["default"].add('lh', value, TEXT.unitMap[unit]));
    } // 字间距
    // @ts-ignore


    if ((_b = node.letterSpacing) === null || _b === void 0 ? void 0 : _b.value) {
      // @ts-ignore
      var _node$letterSpacing = node.letterSpacing,
          _value = _node$letterSpacing.value,
          _unit = _node$letterSpacing.unit;
      className.push(_SACSS__WEBPACK_IMPORTED_MODULE_1__["default"].add('ls', _value, TEXT.unitMap[_unit]));
    } // font-weight font-style


    var fnClass = TEXT.getFontNameClass(node);
    fnClass && className.push(fnClass); // @ts-ignore

    if ((_c = node.fontName) === null || _c === void 0 ? void 0 : _c.family) {
      // @ts-ignore
      className.push(_SACSS__WEBPACK_IMPORTED_MODULE_1__["default"].addFontFamily(node.fontName.family));
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
    vaClass && className.push(vaClass); // tt

    var ttClass = {
      "ORIGINAL": '',
      "UPPER": 'ttu',
      "LOWER": 'ttl',
      "TITLE": 'ttc'
    }[node.textCase];
    ttClass && className.push(ttClass); // td

    var tdClass = {
      "NONE": "",
      "UNDERLINE": 'tdu',
      "STRIKETHROUGH": 'tdl'
    }[node.textDecoration];
    tdClass && className.push(tdClass);
    return className.join(' ');
  },
  // 文本组件
  getInfo: function getInfo(node) {
    if (node.type !== 'TEXT') {
      return null;
    } // @ts-ignore


    var _ref = _CONFIG__WEBPACK_IMPORTED_MODULE_0__["default"].getInfoById(node.textStyleId) || {},
        _ref$className = _ref.className,
        className = _ref$className === void 0 ? '' : _ref$className,
        _ref$ignoreClassName = _ref.ignoreClassName,
        ignoreClassName = _ref$ignoreClassName === void 0 ? '' : _ref$ignoreClassName;

    var result = {
      className: className.length ? className : TEXT.getACSSSInfo(node),
      ignoreClassName: ignoreClassName
    }; // console.log(node, result);

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

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var API = {
  tabIndex: 0,
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
  onTabChange: function onTabChange(index) {
    var beforeIndex = API.tabIndex;
    API.tabIndex = index; // 如果只是在 HTML 和 ACSS 之前切换

    if ((beforeIndex === 0 || beforeIndex === 1) && (index === 0 || index === 1)) {
      return;
    }

    var actionMap = ['runHome', 'runHome', 'runToken', 'runConfig'];
    var action = actionMap[index];
    action && API[action]();
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

    _SACSS__WEBPACK_IMPORTED_MODULE_2__["default"].init(); // @ts-ignore

    var Info = _NODE__WEBPACK_IMPORTED_MODULE_0__["default"].getNodesInfo(selection); // console.log(Info);

    var isJSX = _CONFIG__WEBPACK_IMPORTED_MODULE_1__["default"].isJSX();
    figma.ui.postMessage({
      getHTML: _render_DOM__WEBPACK_IMPORTED_MODULE_3__["default"].render(Info, isJSX),
      getCSS: _SACSS__WEBPACK_IMPORTED_MODULE_2__["default"].getString(),
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

    _CONFIG__WEBPACK_IMPORTED_MODULE_1__["default"].getSelectionTokens(selection);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL18vQ09NUE9ORU5ULnRzIiwid2VicGFjazovLy8uL3NyYy9fL0NPTkZJRy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvXy9OT0RFLnRzIiwid2VicGFjazovLy8uL3NyYy9fL1NBQ1NTLnRzIiwid2VicGFjazovLy8uL3NyYy9fL1VUSUxTLnRzIiwid2VicGFjazovLy8uL3NyYy9fL3JlbmRlci9ET00udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL18vcmVuZGVyL0hUTUwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL18vcmVuZGVyL0pTWC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvXy9yZW5kZXIvZ2V0UHJvcHNBcnJheS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvXy90b2tlbi9DT0xPUi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvXy90b2tlbi9FRkZFQ1QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL18vdG9rZW4vRklMTC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvXy90b2tlbi9GTEVYLnRzIiwid2VicGFjazovLy8uL3NyYy9fL3Rva2VuL0dSSUQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL18vdG9rZW4vT1RIRVJTLnRzIiwid2VicGFjazovLy8uL3NyYy9fL3Rva2VuL1NUUk9LRS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvXy90b2tlbi9URVhULnRzIiwid2VicGFjazovLy8uL3NyYy9jb2RlLnRzIl0sIm5hbWVzIjpbIkNPTVBPTkVOVCIsImlzVmFyaWFudCIsIm5vZGUiLCJfYSIsIl9iIiwibWFpbkNvbXBvbmVudCIsInBhcmVudCIsInR5cGUiLCJpc0NvbXBvbmVudCIsImdldE1haW5Db21wb25lbnQiLCJnZXRDb21wb25lbnRJZCIsImlkIiwic3RyaW5nVG9Db21wb25lbnROYW1lIiwibmFtZSIsInRyaW1OYW1lIiwidHJpbSIsInN0ck5hbWUiLCJyZXBsYWNlIiwiZmlyc3RDaGFyIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJsZW5ndGgiLCJzbGljZSIsImdldENvbXBvbmVudE5hbWUiLCJnZXRDb21wb25lbnRQcm9wcyIsInByb3BzIiwiaW5kZXhPZiIsInNwbGl0IiwiZm9yRWFjaCIsIml0ZW0iLCJrZXkiLCJ2YWx1ZSIsImdldEluZm8iLCJtYXRjaFRva2VuIiwiQ09ORklHIiwiZ2V0SW5mb0J5SWQiLCJyZW5kZXJDaGlsZHJlbiIsInJlbmRlcldpZHRoIiwicmVuZGVySGVpZ2h0IiwiUFJPX0RFRkFVTFQiLCJpZ25vcmVDbGFzc05hbWUiLCJ0b2tlbiIsIkNPTkZJR19ERUZBVUxUIiwiY3VycmVudEluZGV4IiwiaXNKU1giLCJwcm9qZWN0cyIsInN0b3JlIiwiY2hhbmdlQ3VycmVudCIsImluZGV4IiwiZ2V0QWxsIiwiZmlnbWEiLCJjbGllbnRTdG9yYWdlIiwic2V0QXN5bmMiLCJjaGFuZ2VKU1giLCJyZW1vdmUiLCJzcGxpY2UiLCJwdXNoIiwiYWRkTmV3UHJvamVjdCIsImVkaXRCeUluZGV4IiwiZGF0YSIsImN1cnJlbnQiLCJ1aSIsInBvc3RNZXNzYWdlIiwiYWxlcnRNc2ciLCJyZXBsYWNlQnlJbmRleCIsImFwcGVuZFRva2VuIiwiZ2V0Q3VycmVudCIsIk9iamVjdCIsImFzc2lnbiIsImluaXQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImdldEFzeW5jIiwidGhlbiIsInJldCIsImdldFRva2VuIiwiY2F0Y2giLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJ0b2tlbkNvbmZpZyIsImdldFNlbGVjdGlvblRva2VucyIsInNlbGVjdGlvbiIsImdldFNlbGVjdGlvbkluZm8iLCJmaW5kVG9rZW4iLCJmaWxsU3R5bGVJZCIsInRleHRTdHlsZUlkIiwic3Ryb2tlU3R5bGVJZCIsImVmZmVjdFN0eWxlSWQiLCJncmlkU3R5bGVJZCIsImdldFN0eWxlQnlJZCIsImdldEFsbFRva2VucyIsInJvb3QiLCJjb21wb25lbnRzIiwiZmluZEFsbCIsImMiLCJhZGRDb25maWciLCJnZXRMb2NhbFBhaW50U3R5bGVzIiwiZ2V0TG9jYWxUZXh0U3R5bGVzIiwiZ2V0TG9jYWxFZmZlY3RTdHlsZXMiLCJnZXRMb2NhbEdyaWRTdHlsZXMiLCJnb3RBbGxUb2tlbnMiLCJfX3Jlc3QiLCJzIiwiZSIsInQiLCJwIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwiaSIsInByb3BlcnR5SXNFbnVtZXJhYmxlIiwiTk9ERSIsImV4dGVuZEluZm8iLCJhIiwiYiIsImNsYXNzTmFtZSIsImNsYXNzTmFtZUEiLCJpZ25vcmVDbGFzc05hbWVBIiwicHJvcHNBIiwicmVzdEEiLCJjbGFzc05hbWVCIiwiaWdub3JlQ2xhc3NOYW1lQiIsInByb3BzQiIsImNoaWxkcmVuIiwicmVzdEIiLCJpc1N0cnVjdE5vZGUiLCJzdGFydHNXaXRoIiwieWVzVHlwZXMiLCJnb3RObyIsImZpbmQiLCJpc1JlbmRlckNoaWxkcmVuIiwiZ2V0Tm9kZUluZm8iLCJ2aXNpYmxlIiwibm9kZUluZm8iLCJ0YWdOYW1lIiwiaXNCbG9ja0VsZW1lbnQiLCJjb21wb25lbnQiLCJmaWxsIiwiRklMTCIsInRleHQiLCJURVhUIiwic3Ryb2tlIiwiU1RST0tFIiwiZ3JpZCIsIkdSSUQiLCJlZmZlY3QiLCJFRkZFQ1QiLCJvdGhlcnMiLCJPVEhFUlMiLCJmbGV4IiwiRkxFWCIsIlN0cmluZyIsIlNBQ1NTIiwiYWRkIiwicGFyc2VJbnQiLCJ3aWR0aCIsImhlaWdodCIsIm1hcCIsImNoYXJhY3RlcnMiLCJnZXROb2Rlc0luZm8iLCJVVElMUyIsImNsZWFyQ2xhc3NOYW1lIiwibGF5b3V0TW9kZSIsInNvcnQiLCJub2RlcyIsInkiLCJ4IiwiaW5mbyIsInNvcnROb2RlcyIsImxlbiIsIm5hbWVNYXAiLCJnZXRDbGFzc1NlbGVjdG9yQnlOYW1lIiwiZ2V0U3RyaW5nIiwia2V5cyIsInJlc3VsdCIsImpvaW4iLCJ1bml0IiwicHJvcE5hbWUiLCJ1c2VWYWx1ZSIsIk51bWJlciIsInBhcnNlRmxvYXQiLCJ0b0ZpeGVkIiwiY2xhc3NVbml0IiwiYWRkRm9udEZhbWlseSIsInZhbHVlT2siLCJ0b0xvd2VyQ2FzZSIsImFkZENvbG9yIiwicmdiYSIsImFkZEJnQ29sb3IiLCJpc0Jsb2NrIiwiYmxvY2tUYWciLCJpc1NlbGZUYWciLCJzZWxmVGFnIiwiY2xhc3NOYW1lcyIsIkRPTSIsInJlbmRlciIsIm9iaiIsIkpTWCIsImdldERvbUJ5QXJyYXkiLCJIVE1MIiwiZ2V0SXRlbURvbSIsImFyclByb3BzIiwiZ2V0UHJvcHNBcnJheSIsImNsYXNzIiwidGFnU3RhcnQiLCJjb21wb25lbnROYW1lIiwiZW50cmllcyIsIkNPTE9SIiwiZ2V0UmdiYUJ5RmlsbCIsImNvbG9yIiwib3BhY2l0eSIsInIiLCJnIiwiZ2V0RmlsbCIsImZpbGxzIiwiZmlyc3RGaWxsIiwidGV4dENsYXNzTmFtZSIsInJlc3QiLCJpc0ZsZXgiLCJnZXRUaGlzSW5mbyIsInByaW1hcnlBeGlzQWxpZ25JdGVtcyIsImNvdW50ZXJBeGlzQWxpZ25JdGVtcyIsImdldEluZm9Gcm9tUGFyZW50IiwiaXRlbVNwYWNpbmciLCJmaWx0ZXIiLCJwb3AiLCJpc0xhc3RDaGlsZHJlbiIsImd1dHRlck1hcCIsImxheW91dEdyb3ciLCJjMSIsImljMSIsImMyIiwiaWMyIiwiZ2VyQm9yZGVyUmFkaXVzQ2xhc3NOYW1lIiwidGwiLCJ0b3BMZWZ0UmFkaXVzIiwidHIiLCJ0b3BSaWdodFJhZGl1cyIsImJyIiwiYm90dG9tUmlnaHRSYWRpdXMiLCJibCIsImJvdHRvbUxlZnRSYWRpdXMiLCJnZXRQYWRkaW5nQ2xhc3NOYW1lIiwicGFkZGluZ1RvcCIsInBhZGRpbmdSaWdodCIsInBhZGRpbmdCb3R0b20iLCJwYWRkaW5nTGVmdCIsInBhZGRpbmciLCJyYWRpdXMiLCJ1bml0TWFwIiwiZ2V0Rm9udE5hbWVDbGFzcyIsImZvbnROYW1lIiwic3R5bGUiLCJmb250TWFwIiwiZ2V0QUNTU1NJbmZvIiwiX2MiLCJmb250U2l6ZSIsImxpbmVIZWlnaHQiLCJsZXR0ZXJTcGFjaW5nIiwiZm5DbGFzcyIsImZhbWlseSIsInRhQ2xhc3MiLCJ0ZXh0QWxpZ25Ib3Jpem9udGFsIiwidmFDbGFzcyIsInRleHRBbGlnblZlcnRpY2FsIiwidHRDbGFzcyIsInRleHRDYXNlIiwidGRDbGFzcyIsInRleHREZWNvcmF0aW9uIiwiQVBJIiwidGFiSW5kZXgiLCJnZXRTZWxlY3Rpb24iLCJjdXJyZW50UGFnZSIsIm5vU2VsZWN0aW9uIiwib25UYWJDaGFuZ2UiLCJiZWZvcmVJbmRleCIsImFjdGlvbk1hcCIsImFjdGlvbiIsIm9uU2VsZWN0aW9uQ2hhbmdlIiwicnVuSG9tZSIsIkluZm8iLCJnZXRIVE1MIiwiZ2V0Q1NTIiwicnVuQ29uZmlnIiwiZ2V0Q29uZmlnIiwicnVuVG9rZW4iLCJvbm1lc3NhZ2UiLCJtc2ciLCJzaG93VUkiLCJfX2h0bWxfXyIsIm9uIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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TyxDQUFaLEMsQ0FrRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTVQLCtDQUFNLENBQUNtQyxJQUFQLEdBQWNLLElBQWQsQ0FBbUIsWUFBTTtBQUNyQjtBQUNBeEIsT0FBSyxDQUFDaVAsTUFBTixDQUFhQyxRQUFiLEVBQXVCO0FBQUV0SSxTQUFLLEVBQUUsR0FBVDtBQUFjQyxVQUFNLEVBQUU7QUFBdEIsR0FBdkI7QUFDQWlILEtBQUcsQ0FBQ1UsT0FBSjtBQUNBeE8sT0FBSyxDQUFDbVAsRUFBTixDQUFTLGlCQUFULEVBQTRCLFlBQU07QUFDOUJyQixPQUFHLENBQUNTLGlCQUFKO0FBQ0gsR0FGRCxFQUpxQixDQU9yQjs7QUFDQXZPLE9BQUssQ0FBQ1csRUFBTixDQUFTb08sU0FBVCxHQUFxQmpCLEdBQUcsQ0FBQ2lCLFNBQXpCO0FBQ0gsQ0FURCxFIiwiZmlsZSI6ImNvZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9jb2RlLnRzXCIpO1xuIiwiaW1wb3J0IENPTkZJRyBmcm9tIFwiLi9DT05GSUdcIjtcbmNvbnN0IENPTVBPTkVOVCA9IHtcbiAgICBpc1ZhcmlhbnQ6IChub2RlKSA9PiB7XG4gICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgcmV0dXJuICgoX2IgPSAoX2EgPSBub2RlLm1haW5Db21wb25lbnQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5wYXJlbnQpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi50eXBlKSA9PT0gJ0NPTVBPTkVOVF9TRVQnO1xuICAgIH0sXG4gICAgaXNDb21wb25lbnQ6IChub2RlKSA9PiB7XG4gICAgICAgIHJldHVybiBub2RlLnR5cGUgPT09ICdJTlNUQU5DRScgfHwgbm9kZS50eXBlID09PSAnQ09NUE9ORU5UJztcbiAgICB9LFxuICAgIGdldE1haW5Db21wb25lbnQ6IChub2RlKSA9PiB7XG4gICAgICAgIGlmIChub2RlLnR5cGUgPT09ICdDT01QT05FTlQnKSB7XG4gICAgICAgICAgICByZXR1cm4gbm9kZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGNvbnN0IGlzVmFyaWFudCA9IENPTVBPTkVOVC5pc1ZhcmlhbnQobm9kZSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKG5vZGUsIHtpc1ZhcmlhbnR9KTtcbiAgICAgICAgcmV0dXJuIGlzVmFyaWFudCA/IG5vZGUubWFpbkNvbXBvbmVudC5wYXJlbnQgOiBub2RlLm1haW5Db21wb25lbnQ7XG4gICAgfSxcbiAgICBnZXRDb21wb25lbnRJZDogKG5vZGUpID0+IHtcbiAgICAgICAgY29uc3QgeyBpZCA9ICcnIH0gPSBDT01QT05FTlQuZ2V0TWFpbkNvbXBvbmVudChub2RlKSB8fCB7fTtcbiAgICAgICAgcmV0dXJuIGlkO1xuICAgIH0sXG4gICAgc3RyaW5nVG9Db21wb25lbnROYW1lOiAobmFtZSA9ICcnKSA9PiB7XG4gICAgICAgIGNvbnN0IHRyaW1OYW1lID0gbmFtZS50cmltKCk7XG4gICAgICAgIGlmICghdHJpbU5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzdHJOYW1lID0gdHJpbU5hbWUucmVwbGFjZSgvW1xcV10vZywgJycpO1xuICAgICAgICBjb25zdCBmaXJzdENoYXIgPSBzdHJOYW1lLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICBpZiAoc3RyTmFtZS5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiBmaXJzdENoYXI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZpcnN0Q2hhciArIHN0ck5hbWUuc2xpY2UoMSk7XG4gICAgfSxcbiAgICBnZXRDb21wb25lbnROYW1lOiAobm9kZSkgPT4ge1xuICAgICAgICBjb25zdCB7IG5hbWUgPSAnJyB9ID0gQ09NUE9ORU5ULmdldE1haW5Db21wb25lbnQobm9kZSk7XG4gICAgICAgIGlmICghbmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBDT01QT05FTlQuc3RyaW5nVG9Db21wb25lbnROYW1lKG5hbWUpO1xuICAgIH0sXG4gICAgZ2V0Q29tcG9uZW50UHJvcHM6IChub2RlKSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdnZXRDb21wb25lbnRQcm9wcycsIG5vZGUpO1xuICAgICAgICBjb25zdCBpc1ZhcmlhbnQgPSBDT01QT05FTlQuaXNWYXJpYW50KG5vZGUpO1xuICAgICAgICAvLyDmsqHmnInlj5jkvZPooajnpLrmsqHmnIkgcHJvcHNcbiAgICAgICAgaWYgKCFpc1ZhcmlhbnQpIHtcbiAgICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IG5hbWUgfSA9IG5vZGUubWFpbkNvbXBvbmVudDtcbiAgICAgICAgY29uc3QgcHJvcHMgPSB7fTtcbiAgICAgICAgaWYgKHR5cGVvZiBuYW1lID09PSAnc3RyaW5nJyAmJiBuYW1lLmluZGV4T2YoJz0nKSA+IC0xKSB7XG4gICAgICAgICAgICBuYW1lLnNwbGl0KFwiLFwiKS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgW2tleSwgdmFsdWVdID0gaXRlbS5zcGxpdChcIj1cIik7XG4gICAgICAgICAgICAgICAgLy8gZmFsc2Ug6KGo56S65rKh5pyJ6L+Z5Liq5YC8IOS4jeWBmuWkhOeQhlxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gXCJmYWxzZVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcHJvcHNba2V5LnRyaW0oKV0gPSB2YWx1ZS50cmltKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcHJvcHM7XG4gICAgfSxcbiAgICBnZXRJbmZvOiAobm9kZSkgPT4ge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGNvbnN0IGlkID0gQ09NUE9ORU5ULmdldENvbXBvbmVudElkKG5vZGUpO1xuICAgICAgICBjb25zdCBtYXRjaFRva2VuID0gQ09ORklHLmdldEluZm9CeUlkKGlkKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coaWQsIG1hdGNoVG9rZW4sIG5vZGUpO1xuICAgICAgICBpZiAoIW1hdGNoVG9rZW4pIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgbWF0Y2hUb2tlbi5wcm9wcyA9IENPTVBPTkVOVC5nZXRDb21wb25lbnRQcm9wcyhub2RlKTtcbiAgICAgICAgLy8g55So5oi35rKh5pyJ5oyH5a6a6KGo56S66KaB5riy5p+TXG4gICAgICAgIGlmICghKCdyZW5kZXJDaGlsZHJlbicgaW4gbWF0Y2hUb2tlbikpIHtcbiAgICAgICAgICAgIG1hdGNoVG9rZW4ucmVuZGVyQ2hpbGRyZW4gPSAnMSc7XG4gICAgICAgIH1cbiAgICAgICAgLy8g55So5oi35rKh5pyJ5oyH5a6a6KGo56S66KaB5riy5p+TXG4gICAgICAgIGlmICghKCdyZW5kZXJXaWR0aCcgaW4gbWF0Y2hUb2tlbikpIHtcbiAgICAgICAgICAgIG1hdGNoVG9rZW4ucmVuZGVyV2lkdGggPSAnMCc7XG4gICAgICAgIH1cbiAgICAgICAgLy8g55So5oi35rKh5pyJ5oyH5a6a6KGo56S66KaB5riy5p+TXG4gICAgICAgIGlmICghKCdyZW5kZXJIZWlnaHQnIGluIG1hdGNoVG9rZW4pKSB7XG4gICAgICAgICAgICBtYXRjaFRva2VuLnJlbmRlckhlaWdodCA9ICcwJztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWF0Y2hUb2tlbjtcbiAgICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgQ09NUE9ORU5UO1xuIiwiaW1wb3J0IENPTVBPTkVOVCBmcm9tIFwiLi9DT01QT05FTlRcIjtcbmNvbnN0IFBST19ERUZBVUxUID0ge1xuICAgIG5hbWU6ICdkZWZhdWx0JyxcbiAgICBpZ25vcmVDbGFzc05hbWU6ICcnLFxuICAgIHRva2VuOiB7fVxufTtcbmNvbnN0IENPTkZJR19ERUZBVUxUID0ge1xuICAgIGN1cnJlbnRJbmRleDogMCxcbiAgICBpc0pTWDogZmFsc2UsXG4gICAgcHJvamVjdHM6IFtQUk9fREVGQVVMVF1cbn07XG5jb25zdCBDT05GSUcgPSB7XG4gICAga2V5OiAnU0FDU1MnLFxuICAgIHN0b3JlOiBDT05GSUdfREVGQVVMVCxcbiAgICBjaGFuZ2VDdXJyZW50OiAoaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3Qgc3RvcmUgPSBDT05GSUcuZ2V0QWxsKCk7XG4gICAgICAgIHN0b3JlLmN1cnJlbnRJbmRleCA9IGluZGV4O1xuICAgICAgICBmaWdtYS5jbGllbnRTdG9yYWdlLnNldEFzeW5jKENPTkZJRy5rZXksIHN0b3JlKTtcbiAgICB9LFxuICAgIGNoYW5nZUpTWDogKHZhbHVlKSA9PiB7XG4gICAgICAgIGNvbnN0IHN0b3JlID0gQ09ORklHLmdldEFsbCgpO1xuICAgICAgICAvLyDph43nva7lm57nrKzkuIDkuKpcbiAgICAgICAgc3RvcmUuaXNKU1ggPSB2YWx1ZTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coc3RvcmUpO1xuICAgICAgICBmaWdtYS5jbGllbnRTdG9yYWdlLnNldEFzeW5jKENPTkZJRy5rZXksIHN0b3JlKTtcbiAgICB9LFxuICAgIHJlbW92ZTogKGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IHN0b3JlID0gQ09ORklHLmdldEFsbCgpO1xuICAgICAgICAvLyDph43nva7lm57nrKzkuIDkuKpcbiAgICAgICAgc3RvcmUuY3VycmVudEluZGV4ID0gMDtcbiAgICAgICAgc3RvcmUucHJvamVjdHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgaWYgKCFzdG9yZS5wcm9qZWN0cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHN0b3JlLnByb2plY3RzLnB1c2goUFJPX0RFRkFVTFQpO1xuICAgICAgICB9XG4gICAgICAgIGZpZ21hLmNsaWVudFN0b3JhZ2Uuc2V0QXN5bmMoQ09ORklHLmtleSwgc3RvcmUpO1xuICAgIH0sXG4gICAgYWRkTmV3UHJvamVjdDogKHsgbmFtZSA9ICcnLCB0b2tlbiA9IHt9IH0gPSB7fSkgPT4ge1xuICAgICAgICBjb25zdCBzdG9yZSA9IENPTkZJRy5nZXRBbGwoKTtcbiAgICAgICAgc3RvcmUucHJvamVjdHMucHVzaCh7XG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgaWdub3JlQ2xhc3NOYW1lOiAnJyxcbiAgICAgICAgICAgIHRva2VuXG4gICAgICAgIH0pO1xuICAgICAgICBzdG9yZS5jdXJyZW50SW5kZXggPSBzdG9yZS5wcm9qZWN0cy5sZW5ndGggLSAxO1xuICAgICAgICBmaWdtYS5jbGllbnRTdG9yYWdlLnNldEFzeW5jKENPTkZJRy5rZXksIHN0b3JlKTtcbiAgICB9LFxuICAgIGVkaXRCeUluZGV4OiAoeyBkYXRhLCBpbmRleCB9KSA9PiB7XG4gICAgICAgIGNvbnN0IHN0b3JlID0gQ09ORklHLmdldEFsbCgpO1xuICAgICAgICBjb25zdCBjdXJyZW50ID0gc3RvcmUucHJvamVjdHNbaW5kZXhdO1xuICAgICAgICBzdG9yZS5wcm9qZWN0c1tpbmRleF0gPSB7XG4gICAgICAgICAgICBuYW1lOiBkYXRhLm5hbWUsXG4gICAgICAgICAgICBpZ25vcmVDbGFzc05hbWU6IGRhdGEuaWdub3JlQ2xhc3NOYW1lLFxuICAgICAgICAgICAgdG9rZW46IGRhdGEudG9rZW4gPyBkYXRhLnRva2VuIDogY3VycmVudC50b2tlblxuICAgICAgICB9O1xuICAgICAgICBmaWdtYS5jbGllbnRTdG9yYWdlLnNldEFzeW5jKENPTkZJRy5rZXksIHN0b3JlKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coc3RvcmUpO1xuICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBhbGVydE1zZzogYCR7ZGF0YS5uYW1lfSBzYXZlIHN1Y2Nlc3NgXG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgcmVwbGFjZUJ5SW5kZXg6ICh7IGRhdGEsIGluZGV4IH0pID0+IHtcbiAgICAgICAgY29uc3Qgc3RvcmUgPSBDT05GSUcuZ2V0QWxsKCk7XG4gICAgICAgIHN0b3JlLnByb2plY3RzW2luZGV4XSA9IGRhdGEgfHwge307XG4gICAgICAgIGZpZ21hLmNsaWVudFN0b3JhZ2Uuc2V0QXN5bmMoQ09ORklHLmtleSwgc3RvcmUpO1xuICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICBhbGVydE1zZzogYCR7ZGF0YS5uYW1lfSByZXBsYWNlIHN1Y2Nlc3NgXG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgYXBwZW5kVG9rZW46IChhcHBlbmRUb2tlbiA9IHt9KSA9PiB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnQgPSBDT05GSUcuZ2V0Q3VycmVudCgpO1xuICAgICAgICBjb25zdCB7IHRva2VuID0ge30gfSA9IGN1cnJlbnQ7XG4gICAgICAgIGN1cnJlbnQudG9rZW4gPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHRva2VuKSwgYXBwZW5kVG9rZW4pO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhhcHBlbmRUb2tlbiwgQ09ORklHLnN0b3JlKTtcbiAgICAgICAgZmlnbWEuY2xpZW50U3RvcmFnZS5zZXRBc3luYyhDT05GSUcua2V5LCBDT05GSUcuc3RvcmUpO1xuICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICBhbGVydE1zZzogYCR7Y3VycmVudC5uYW1lfSBzYXZlIHN1Y2Nlc3NgXG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgaXNKU1g6ICgpID0+IHtcbiAgICAgICAgcmV0dXJuICEhQ09ORklHLnN0b3JlLmlzSlNYO1xuICAgIH0sXG4gICAgZ2V0QWxsOiAoKSA9PiB7XG4gICAgICAgIHJldHVybiBDT05GSUcuc3RvcmU7XG4gICAgfSxcbiAgICBpbml0OiAoKSA9PiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgZmlnbWEuY2xpZW50U3RvcmFnZS5nZXRBc3luYyhDT05GSUcua2V5KS50aGVuKChyZXQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmV0ICYmIHJldC5wcm9qZWN0cyAmJiByZXQucHJvamVjdHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIENPTkZJRy5zdG9yZSA9IHJldDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIOayoeaciee8k+WtmOWIm+W7uuS4gOS4quaWsOeahFxuICAgICAgICAgICAgICAgICAgICBmaWdtYS5jbGllbnRTdG9yYWdlLnNldEFzeW5jKENPTkZJRy5rZXksIENPTkZJR19ERUZBVUxUKTtcbiAgICAgICAgICAgICAgICAgICAgQ09ORklHLnN0b3JlID0gQ09ORklHX0RFRkFVTFQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlc29sdmUoQ09ORklHLmdldFRva2VuKCkpO1xuICAgICAgICAgICAgfSkuY2F0Y2gocmVqZWN0KTtcbiAgICAgICAgfSkpO1xuICAgIH0sXG4gICAgZ2V0Q3VycmVudDogKCkgPT4ge1xuICAgICAgICBjb25zdCBjdXJyZW50SW5kZXggPSBDT05GSUcuc3RvcmUuY3VycmVudEluZGV4O1xuICAgICAgICBjb25zdCBjdXJyZW50ID0gQ09ORklHLnN0b3JlLnByb2plY3RzW2N1cnJlbnRJbmRleF07XG4gICAgICAgIHJldHVybiBjdXJyZW50O1xuICAgIH0sXG4gICAgZ2V0VG9rZW46ICgpID0+IHtcbiAgICAgICAgY29uc3QgeyB0b2tlbiA9IG51bGwgfSA9IENPTkZJRy5nZXRDdXJyZW50KCkgfHwge307XG4gICAgICAgIHJldHVybiB0b2tlbiA/IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodG9rZW4pKSA6IG51bGw7XG4gICAgfSxcbiAgICBnZXRJbmZvQnlJZDogKGlkID0gJycpID0+IHtcbiAgICAgICAgaWYgKCFpZCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdG9rZW5Db25maWcgPSBDT05GSUcuZ2V0VG9rZW4oKSB8fCB7fTtcbiAgICAgICAgLy8g5aaC5p6c5pyJ6Ieq5a6a5LmJ55So6Ieq5a6a5LmJ55qEXG4gICAgICAgIHJldHVybiB0b2tlbkNvbmZpZ1tpZF07XG4gICAgfSxcbiAgICBnZXRTZWxlY3Rpb25Ub2tlbnM6IChzZWxlY3Rpb24pID0+IHtcbiAgICAgICAgY29uc3QgeyBuYW1lID0gJycsIHRva2VuID0ge30gfSA9IENPTkZJRy5nZXRDdXJyZW50KCkgfHwge307XG4gICAgICAgIGlmICghc2VsZWN0aW9uKSB7XG4gICAgICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICAgICAgZ2V0U2VsZWN0aW9uSW5mbzoge1xuICAgICAgICAgICAgICAgICAgICBuYW1lXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbWF0Y2hUb2tlbiA9IHt9O1xuICAgICAgICAvLyDlpoLmnpzmmK/nu4Tku7bliJnkuI3pnIDopoHmmL7npLrku7vkvZXlhbblroPnmoTlsZ7mgKdcbiAgICAgICAgaWYgKENPTVBPTkVOVC5pc0NvbXBvbmVudChzZWxlY3Rpb24pKSB7XG4gICAgICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgICAgIGNvbnN0IHsgaWQsIG5hbWUsIHR5cGUgfSA9IENPTVBPTkVOVC5nZXRNYWluQ29tcG9uZW50KHNlbGVjdGlvbik7XG4gICAgICAgICAgICBjb25zdCBmaW5kVG9rZW4gPSB0b2tlbltpZF0gfHwge307XG4gICAgICAgICAgICBtYXRjaFRva2VuW2lkXSA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZmluZFRva2VuKSwgeyBuYW1lLFxuICAgICAgICAgICAgICAgIHR5cGUgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgIFtzZWxlY3Rpb24uZmlsbFN0eWxlSWQsIHNlbGVjdGlvbi50ZXh0U3R5bGVJZCwgc2VsZWN0aW9uLnN0cm9rZVN0eWxlSWQsIHNlbGVjdGlvbi5lZmZlY3RTdHlsZUlkLCBzZWxlY3Rpb24uZ3JpZFN0eWxlSWRdLmZvckVhY2goKGl0ZW0sIGtleSkgPT4ge1xuICAgICAgICAgICAgaWYgKCFpdGVtKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgeyBpZCwgbmFtZSwgdHlwZSB9ID0gZmlnbWEuZ2V0U3R5bGVCeUlkKGl0ZW0pIHx8IHt9O1xuICAgICAgICAgICAgaWYgKCFpZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1hdGNoVG9rZW5baWRdID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCB0b2tlbltpZF0pLCB7IG5hbWUsXG4gICAgICAgICAgICAgICAgdHlwZSB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgIGdldFNlbGVjdGlvbkluZm86IHtcbiAgICAgICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgICAgIHRva2VuOiBtYXRjaFRva2VuXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICog6I635Y+W5omA5pyJ55qEIFRva2VuIOWMheaLrCBDb21wb25lbnRcbiAgICAgKi9cbiAgICBnZXRBbGxUb2tlbnM6ICgpID0+IHtcbiAgICAgICAgY29uc3QgbmFtZSA9IGZpZ21hLnJvb3QubmFtZTtcbiAgICAgICAgY29uc3QgY29tcG9uZW50cyA9IGZpZ21hLnJvb3QuZmluZEFsbChjID0+IHtcbiAgICAgICAgICAgIGlmIChjLnR5cGUgPT09ICdDT01QT05FTlRfU0VUJykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGMudHlwZSAhPT0gJ0NPTVBPTkVOVCcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYy5wYXJlbnQudHlwZSA9PT0gJ0NPTVBPTkVOVF9TRVQnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCB0b2tlbiA9IHt9O1xuICAgICAgICBjb25zdCBhZGRDb25maWcgPSAoZGF0YSA9IFtdKSA9PiB7XG4gICAgICAgICAgICBkYXRhLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICB0b2tlbltpdGVtLmlkXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogaXRlbS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBpdGVtLnR5cGVcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGFkZENvbmZpZyhjb21wb25lbnRzKTtcbiAgICAgICAgYWRkQ29uZmlnKGZpZ21hLmdldExvY2FsUGFpbnRTdHlsZXMoKSk7XG4gICAgICAgIGFkZENvbmZpZyhmaWdtYS5nZXRMb2NhbFRleHRTdHlsZXMoKSk7XG4gICAgICAgIGFkZENvbmZpZyhmaWdtYS5nZXRMb2NhbEVmZmVjdFN0eWxlcygpKTtcbiAgICAgICAgYWRkQ29uZmlnKGZpZ21hLmdldExvY2FsR3JpZFN0eWxlcygpKTtcbiAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgZ290QWxsVG9rZW5zOiB7XG4gICAgICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgICAgICBpZ25vcmVDbGFzc05hbWU6ICcnLFxuICAgICAgICAgICAgICAgIHRva2VuXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5leHBvcnQgZGVmYXVsdCBDT05GSUc7XG4iLCJ2YXIgX19yZXN0ID0gKHRoaXMgJiYgdGhpcy5fX3Jlc3QpIHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gICAgdmFyIHQgPSB7fTtcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcbiAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XG4gICAgICAgIH1cbiAgICByZXR1cm4gdDtcbn07XG5pbXBvcnQgQ09NUE9ORU5UIGZyb20gXCIuL0NPTVBPTkVOVFwiO1xuaW1wb3J0IEZJTEwgZnJvbSBcIi4vdG9rZW4vRklMTFwiO1xuaW1wb3J0IFRFWFQgZnJvbSBcIi4vdG9rZW4vVEVYVFwiO1xuaW1wb3J0IFNUUk9LRSBmcm9tIFwiLi90b2tlbi9TVFJPS0VcIjtcbmltcG9ydCBHUklEIGZyb20gXCIuL3Rva2VuL0dSSURcIjtcbmltcG9ydCBGTEVYIGZyb20gXCIuL3Rva2VuL0ZMRVhcIjtcbmltcG9ydCBTQUNTUyBmcm9tIFwiLi9TQUNTU1wiO1xuaW1wb3J0IFVUSUxTIGZyb20gXCIuL1VUSUxTXCI7XG5pbXBvcnQgRUZGRUNUIGZyb20gXCIuL3Rva2VuL0VGRkVDVFwiO1xuaW1wb3J0IE9USEVSUyBmcm9tIFwiLi90b2tlbi9PVEhFUlNcIjtcbmltcG9ydCBDT05GSUcgZnJvbSBcIi4vQ09ORklHXCI7XG5jb25zdCBOT0RFID0ge1xuICAgIC8qKlxuICAgICAqIOWQiOW5tuS4pOS4qmluZm9cbiAgICAgKiBAcGFyYW0gYVxuICAgICAqIEBwYXJhbSBiXG4gICAgICovXG4gICAgZXh0ZW5kSW5mbzogKGEsIGIpID0+IHtcbiAgICAgICAgaWYgKCFiKSB7XG4gICAgICAgICAgICByZXR1cm4gYTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IGNsYXNzTmFtZTogY2xhc3NOYW1lQSA9ICcnLCBpZ25vcmVDbGFzc05hbWU6IGlnbm9yZUNsYXNzTmFtZUEgPSAnJywgcHJvcHM6IHByb3BzQSA9IHt9IH0gPSBhLCByZXN0QSA9IF9fcmVzdChhLCBbXCJjbGFzc05hbWVcIiwgXCJpZ25vcmVDbGFzc05hbWVcIiwgXCJwcm9wc1wiXSk7XG4gICAgICAgIGNvbnN0IHsgY2xhc3NOYW1lOiBjbGFzc05hbWVCID0gJycsIGlnbm9yZUNsYXNzTmFtZTogaWdub3JlQ2xhc3NOYW1lQiA9ICcnLCBwcm9wczogcHJvcHNCID0ge30sIGNoaWxkcmVuIH0gPSBiLCByZXN0QiA9IF9fcmVzdChiLCBbXCJjbGFzc05hbWVcIiwgXCJpZ25vcmVDbGFzc05hbWVcIiwgXCJwcm9wc1wiLCBcImNoaWxkcmVuXCJdKTtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7IHByb3BzOiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHByb3BzQSksIHByb3BzQiksIGNsYXNzTmFtZTogYCR7Y2xhc3NOYW1lQX0gJHtjbGFzc05hbWVCfWAsIGlnbm9yZUNsYXNzTmFtZTogYCR7aWdub3JlQ2xhc3NOYW1lQX0gJHtpZ25vcmVDbGFzc05hbWVCfWAgfSwgcmVzdEEpLCByZXN0Qik7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiDlpoLmnpzkuIDkuKrlhYPntKDlhoXpg6jlj6rmnInlh6DkvZXlm77lvaLvvIzpgqPkuYjlj6rmmL7npLrlhbbnu5PmnoRcbiAgICAgKi9cbiAgICBpc1N0cnVjdE5vZGU6IChub2RlKSA9PiB7XG4gICAgICAgIC8vIOS7pSPlj7flvIDlpLRcbiAgICAgICAgaWYgKG5vZGUubmFtZS5zdGFydHNXaXRoKFwiI1wiKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeWVzVHlwZXMgPSBbJ1JFQ1RBTkdMRScsICdWRUNUT1InLCAnU1RBUicsICdMSU5FJywgJ1BPTFlHT04nLCAnRUxMSVBTRScsICdTTElDRSddO1xuICAgICAgICAvLyDlpoLmnpzmnKzouqvlsLHmmK/ov5nkupvlhYPntKDpgqPkuYjkuZ/mmK/nm7TmjqXovpPlh7pcbiAgICAgICAgaWYgKHllc1R5cGVzLmluZGV4T2Yobm9kZS50eXBlKSA+IC0xKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobm9kZS50eXBlID09PSAnVEVYVCcpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGNvbnN0IHsgY2hpbGRyZW4gPSBbXSB9ID0gbm9kZTtcbiAgICAgICAgaWYgKCFjaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIOaJvuWIsOS6huS4jeWQiOazleWFg+e0oO+8iOS4jeWcqOS4iumdoueahOWHoOS9leWIl+ihqOmHjOmdou+8iVxuICAgICAgICBjb25zdCBnb3RObyA9IGNoaWxkcmVuLmZpbmQoKGl0ZW0pID0+IHllc1R5cGVzLmluZGV4T2YoaXRlbS50eXBlKSA9PT0gLTEpO1xuICAgICAgICByZXR1cm4gIWdvdE5vO1xuICAgIH0sXG4gICAgaXNSZW5kZXJDaGlsZHJlbjogKG5vZGUpID0+IHtcbiAgICAgICAgaWYgKCEobm9kZS50eXBlID09PSAnSU5TVEFOQ0UnIHx8IG5vZGUudHlwZSA9PT0gJ0NPTVBPTkVOVCcpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8g5Y+q5pyJ5LiA5Liq5a2Q5YWD57SgXG4gICAgICAgIGlmIChub2RlLmNoaWxkcmVuLmxlbmd0aCAhPT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIGNvbnN0IG9ubHlDaGlsZHJlbiA9IG5vZGUuY2hpbGRyZW5bMF07XG4gICAgICAgIC8vIGlmIChvbmx5Q2hpbGRyZW4udHlwZSA9PT0gJ0lOU1RBTkNFJykge1xuICAgICAgICAvLyAgIHJldHVybiB0cnVlO1xuICAgICAgICAvLyB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LFxuICAgIGdldE5vZGVJbmZvOiAobm9kZSkgPT4ge1xuICAgICAgICBpZiAoIW5vZGUudmlzaWJsZSB8fCBub2RlLm5hbWUuc3RhcnRzV2l0aChcIl9cIikpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIC8vIOebtOaOpea4suafk+WtkOWFg+e0oFxuICAgICAgICBpZiAoTk9ERS5pc1JlbmRlckNoaWxkcmVuKG5vZGUpKSB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlO1xuICAgICAgICAgICAgcmV0dXJuIE5PREUuZ2V0Tm9kZUluZm8obm9kZS5jaGlsZHJlblswXSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaXNTdHJ1Y3ROb2RlID0gTk9ERS5pc1N0cnVjdE5vZGUobm9kZSk7XG4gICAgICAgIGxldCBub2RlSW5mbyA9IHtcbiAgICAgICAgICAgIC8vIG5vZGUsXG4gICAgICAgICAgICB0YWdOYW1lOiBOT0RFLmlzQmxvY2tFbGVtZW50KG5vZGUpID8gJ2RpdicgOiAnc3BhbicsXG4gICAgICAgICAgICBpZ25vcmVDbGFzc05hbWU6ICcnLFxuICAgICAgICAgICAgY2xhc3NOYW1lOiAnJyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBjb21wb25lbnQgPSBDT01QT05FTlQuZ2V0SW5mbyhub2RlKTtcbiAgICAgICAgY29uc3QgZmlsbCA9IEZJTEwuZ2V0SW5mbyhub2RlKTtcbiAgICAgICAgY29uc3QgdGV4dCA9IFRFWFQuZ2V0SW5mbyhub2RlKTtcbiAgICAgICAgY29uc3Qgc3Ryb2tlID0gU1RST0tFLmdldEluZm8obm9kZSk7XG4gICAgICAgIGNvbnN0IGdyaWQgPSBHUklELmdldEluZm8obm9kZSk7XG4gICAgICAgIGNvbnN0IGVmZmVjdCA9IEVGRkVDVC5nZXRJbmZvKG5vZGUpO1xuICAgICAgICBjb25zdCBvdGhlcnMgPSBPVEhFUlMuZ2V0SW5mbyhub2RlKTtcbiAgICAgICAgY29uc3QgZmxleCA9IEZMRVguZ2V0SW5mbyhub2RlKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coe2NvbXBvbmVudCwgZmlsbCwgdGV4dCwgc3Ryb2tlLCBncmlkLCBlZmZlY3R9KTtcbiAgICAgICAgbm9kZUluZm8gPSBOT0RFLmV4dGVuZEluZm8obm9kZUluZm8sIGZpbGwpO1xuICAgICAgICBub2RlSW5mbyA9IE5PREUuZXh0ZW5kSW5mbyhub2RlSW5mbywgdGV4dCk7XG4gICAgICAgIG5vZGVJbmZvID0gTk9ERS5leHRlbmRJbmZvKG5vZGVJbmZvLCBzdHJva2UpO1xuICAgICAgICBub2RlSW5mbyA9IE5PREUuZXh0ZW5kSW5mbyhub2RlSW5mbywgZ3JpZCk7XG4gICAgICAgIG5vZGVJbmZvID0gTk9ERS5leHRlbmRJbmZvKG5vZGVJbmZvLCBlZmZlY3QpO1xuICAgICAgICBub2RlSW5mbyA9IE5PREUuZXh0ZW5kSW5mbyhub2RlSW5mbywgY29tcG9uZW50KTtcbiAgICAgICAgbm9kZUluZm8gPSBOT0RFLmV4dGVuZEluZm8obm9kZUluZm8sIGZsZXgpO1xuICAgICAgICBub2RlSW5mbyA9IE5PREUuZXh0ZW5kSW5mbyhub2RlSW5mbywgb3RoZXJzKTtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBpZiAoaXNTdHJ1Y3ROb2RlIHx8IFN0cmluZyhub2RlSW5mbyA9PT0gbnVsbCB8fCBub2RlSW5mbyA9PT0gdm9pZCAwID8gdm9pZCAwIDogbm9kZUluZm8ucmVuZGVyV2lkdGgpID09PSAnMScpIHtcbiAgICAgICAgICAgIG5vZGVJbmZvLmNsYXNzTmFtZSArPSAnICcgKyBTQUNTUy5hZGQoJ3cnLCBwYXJzZUludChTdHJpbmcobm9kZS53aWR0aCkpKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGlmIChpc1N0cnVjdE5vZGUgfHwgU3RyaW5nKG5vZGVJbmZvID09PSBudWxsIHx8IG5vZGVJbmZvID09PSB2b2lkIDAgPyB2b2lkIDAgOiBub2RlSW5mby5yZW5kZXJIZWlnaHQpID09PSAnMScpIHtcbiAgICAgICAgICAgIG5vZGVJbmZvLmNsYXNzTmFtZSArPSAnICcgKyBTQUNTUy5hZGQoJ2gnLCBwYXJzZUludChTdHJpbmcobm9kZS5oZWlnaHQpKSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyByZW5kZXJDaGlsZHJlbiB9ID0gY29tcG9uZW50IHx8IHt9O1xuICAgICAgICBpZiAoIWlzU3RydWN0Tm9kZSB8fCBTdHJpbmcocmVuZGVyQ2hpbGRyZW4pID09PSAnMCcpIHtcbiAgICAgICAgICAgIGlmIChTdHJpbmcocmVuZGVyQ2hpbGRyZW4pID09PSAnMicpIHtcbiAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgICAgbm9kZUluZm8uY2hpbGRyZW4gPSBub2RlLmZpbmRBbGwoYyA9PiBjLnR5cGUgPT09ICdURVhUJykubWFwKChjKSA9PiBjLmNoYXJhY3RlcnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8g5riy5p+T5a2Q6IqC54K5XG4gICAgICAgICAgICBpZiAoU3RyaW5nKHJlbmRlckNoaWxkcmVuKSA9PT0gJzEnKSB7XG4gICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgIG5vZGVJbmZvLmNoaWxkcmVuID0gbm9kZS50eXBlID09PSAnVEVYVCcgPyBbbm9kZS5jaGFyYWN0ZXJzXSA6IE5PREUuZ2V0Tm9kZXNJbmZvKG5vZGUuY2hpbGRyZW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIOaVtOS4qumhueebrumDveW/veeVpeeahCBjbGFzc05hbWVcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBjb25zdCB7IGlnbm9yZUNsYXNzTmFtZSA9ICcnIH0gPSBDT05GSUcuZ2V0Q3VycmVudCgpIHx8IHt9O1xuICAgICAgICBub2RlSW5mby5jbGFzc05hbWUgPSBVVElMUy5jbGVhckNsYXNzTmFtZShub2RlSW5mby5jbGFzc05hbWUsIGAke25vZGVJbmZvLmlnbm9yZUNsYXNzTmFtZX0gJHtpZ25vcmVDbGFzc05hbWV9YCk7XG4gICAgICAgIGRlbGV0ZSBub2RlSW5mby5pZ25vcmVDbGFzc05hbWU7XG4gICAgICAgIHJldHVybiBub2RlSW5mbztcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIOiOt+WPliBUYWcgTmFtZVxuICAgICAqIEBwYXJhbSBub2RlXG4gICAgICovXG4gICAgaXNCbG9ja0VsZW1lbnQ6IChub2RlKSA9PiB7XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IG5vZGUucGFyZW50O1xuICAgICAgICAvLyDmsqHmnInniLblhYPntKBcbiAgICAgICAgaWYgKCFwYXJlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgLy8g5ZKM54i25YWD57Sg5a695bqm5LiA5qC3XG4gICAgICAgIGlmIChub2RlLndpZHRoID09PSBwYXJlbnQud2lkdGgpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIOWmguaenOeItuWFg+e0oOaYr+e6teWQkSDnmoQgZmxleCDluIPlsYBcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBpZiAocGFyZW50LmxheW91dE1vZGUgIT09IFwiTk9ORVwiKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSxcbiAgICBzb3J0OiAobm9kZXMgPSBbXSkgPT4ge1xuICAgICAgICByZXR1cm4gWy4uLm5vZGVzXS5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICBpZiAoYS55ID09PSBiLnkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYS54IC0gYi54O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGEueSAtIGIueTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBnZXROb2Rlc0luZm86IChub2RlcyA9IFtdKSA9PiB7XG4gICAgICAgIGxldCBpbmZvID0gW107XG4gICAgICAgIC8vIOmcgOimgeaOkuW6j+S4gOS4i1xuICAgICAgICBjb25zdCBzb3J0Tm9kZXMgPSBOT0RFLnNvcnQobm9kZXMpO1xuICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gc29ydE5vZGVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBub2RlSW5mbyA9IE5PREUuZ2V0Tm9kZUluZm8oc29ydE5vZGVzW2ldKTtcbiAgICAgICAgICAgIG5vZGVJbmZvICYmIGluZm8ucHVzaChub2RlSW5mbyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IE5PREU7XG4iLCJjb25zdCBTQUNTUyA9IHtcbiAgICBkYXRhOiB7fSxcbiAgICBpbml0OiAoKSA9PiB7XG4gICAgICAgIFNBQ1NTLmRhdGEgPSB7fTtcbiAgICB9LFxuICAgIG5hbWVNYXA6IHtcbiAgICAgICAgJ2ZzJzogJ2ZvbnQtc2l6ZScsXG4gICAgICAgICdsaCc6ICdsaW5lLWhlaWdodCcsXG4gICAgICAgICdscyc6ICdsZXR0ZXItc3BhY2UnLFxuICAgICAgICAnZmYnOiAnZm9udC1mYW1pbHknLFxuICAgICAgICAncHQnOiAncGFkZGluZy10b3AnLFxuICAgICAgICAncHInOiAncGFkZGluZy1yaWdodCcsXG4gICAgICAgICdwYic6ICdwYWRkaW5nLWJvdHRvbScsXG4gICAgICAgICdwbCc6ICdwYWRkaW5nLWxlZnQnLFxuICAgICAgICAnbXQnOiAnbWFyZ2luLXRvcCcsXG4gICAgICAgICdtcic6ICdtYXJnaW4tcmlnaHQnLFxuICAgICAgICAnbWInOiAnbWFyZ2luLWJvdHRvbScsXG4gICAgICAgICdtbCc6ICdtYXJnaW4tbGVmdCcsXG4gICAgICAgICdoJzogJ2hlaWdodCcsXG4gICAgICAgICd3JzogJ3dpZHRoJyxcbiAgICAgICAgJ2J0bHInOiAnYm9yZGVyLXRvcC1sZWZ0LXJhZGl1cycsXG4gICAgICAgICdidHJyJzogJ2JvcmRlci10b3AtcmlnaHQtcmFkaXVzJyxcbiAgICAgICAgJ2JicnInOiAnYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXMnLFxuICAgICAgICAnYmJscic6ICdib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzJyxcbiAgICAgICAgJ2JyJzogJ2JvcmRlci1yYWRpdXMnXG4gICAgfSxcbiAgICBnZXRDbGFzc1NlbGVjdG9yQnlOYW1lOiAoY2xhc3NOYW1lID0gJycpID0+IHtcbiAgICAgICAgaWYgKGNsYXNzTmFtZS5pbmRleE9mKCcuJykgPiAtMSkge1xuICAgICAgICAgICAgY2xhc3NOYW1lID0gY2xhc3NOYW1lLnJlcGxhY2UoL1xcLi9nLCAnXFxcXC4nKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2xhc3NOYW1lLmluZGV4T2YoJzonKSA+IC0xKSB7XG4gICAgICAgICAgICBjbGFzc05hbWUgPSBjbGFzc05hbWUucmVwbGFjZSgvXFw6L2csICdcXFxcOicpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjbGFzc05hbWUuaW5kZXhPZignJScpID4gLTEpIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IGNsYXNzTmFtZS5yZXBsYWNlKC9cXCUvZywgJ1xcXFwlJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNsYXNzTmFtZTtcbiAgICB9LFxuICAgIGdldFN0cmluZzogKCkgPT4ge1xuICAgICAgICBjb25zdCBkYXRhID0gU0FDU1MuZGF0YTtcbiAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGRhdGEpLnNvcnQoKTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0ga2V5cy5tYXAoKG5hbWUpID0+IGAuJHtTQUNTUy5nZXRDbGFzc1NlbGVjdG9yQnlOYW1lKG5hbWUpfXske2RhdGFbbmFtZV19O31gKS5qb2luKCdcXG4nKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9LFxuICAgIGFkZDogKG5hbWUgPSAnJywgdmFsdWUsIHVuaXQgPSAncHgnKSA9PiB7XG4gICAgICAgIGlmICghbmFtZSB8fCAhdmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwcm9wTmFtZSA9IFNBQ1NTLm5hbWVNYXBbbmFtZV07XG4gICAgICAgIGlmICghcHJvcE5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuICAgICAgICAvLyDlj6rkv53nlZnkuKTkvY3lsI/mlbBcbiAgICAgICAgY29uc3QgdXNlVmFsdWUgPSBOdW1iZXIodmFsdWUpID8gcGFyc2VGbG9hdChOdW1iZXIodmFsdWUpLnRvRml4ZWQoMikpIDogdmFsdWU7XG4gICAgICAgIC8vIOWmguaenOaYryBweCDkuI3pnIDopoHmuLLmn5NcbiAgICAgICAgY29uc3QgY2xhc3NVbml0ID0gdW5pdCA9PT0gJ3B4JyA/ICcnIDogdW5pdDtcbiAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gYCR7bmFtZX0ke3VzZVZhbHVlfSR7Y2xhc3NVbml0fWA7XG4gICAgICAgIFNBQ1NTLmRhdGFbY2xhc3NOYW1lXSA9IGAke3Byb3BOYW1lfToke3VzZVZhbHVlfSR7dW5pdH1gO1xuICAgICAgICByZXR1cm4gY2xhc3NOYW1lO1xuICAgIH0sXG4gICAgYWRkRm9udEZhbWlseTogKHZhbHVlKSA9PiB7XG4gICAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB2YWx1ZU9rID0gdmFsdWUucmVwbGFjZSgvW1xcV10vZywgJycpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IGBmZjoke3ZhbHVlT2t9YDtcbiAgICAgICAgU0FDU1MuZGF0YVtjbGFzc05hbWVdID0gYGZvbnQtZmFtaWx5OlwiJHt2YWx1ZX1cImA7XG4gICAgICAgIHJldHVybiBjbGFzc05hbWU7XG4gICAgfSxcbiAgICBhZGRDb2xvcjogKHJnYmEgPSBbXSkgPT4ge1xuICAgICAgICBpZiAoIXJnYmEgJiYgcmdiYS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBgYzoke3JnYmEuam9pbignJyl9YDtcbiAgICAgICAgU0FDU1MuZGF0YVtjbGFzc05hbWVdID0gYGNvbG9yOnJnYmEoJHtyZ2JhLmpvaW4oJywnKX0pYDtcbiAgICAgICAgcmV0dXJuIGNsYXNzTmFtZTtcbiAgICB9LFxuICAgIGFkZEJnQ29sb3I6IChyZ2JhID0gW10pID0+IHtcbiAgICAgICAgaWYgKCFyZ2JhICYmIHJnYmEubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gYGJjOiR7cmdiYS5qb2luKCcnKX1gO1xuICAgICAgICBTQUNTUy5kYXRhW2NsYXNzTmFtZV0gPSBgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKCR7cmdiYS5qb2luKCcsJyl9KWA7XG4gICAgICAgIHJldHVybiBjbGFzc05hbWU7XG4gICAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IFNBQ1NTO1xuIiwiY29uc3QgVVRJTFMgPSB7XG4gICAgaXNCbG9jazogKHRhZ05hbWUgPSAnJykgPT4ge1xuICAgICAgICBjb25zdCBibG9ja1RhZyA9IFsnZGl2JywgJ2gxJywgJ2gyJywgJ2gzJywgJ2g0JywgJ2g1JywgJ2g2JywgJ3AnXTtcbiAgICAgICAgcmV0dXJuIGJsb2NrVGFnLmluZGV4T2YodGFnTmFtZSkgPiAtMTtcbiAgICB9LFxuICAgIGlzU2VsZlRhZzogKHRhZ05hbWUgPSAnJykgPT4ge1xuICAgICAgICBjb25zdCBzZWxmVGFnID0gWydpbWcnLCAnbGluaycsICdtZXRhJywgJ2JyJywgJ2JyJywgJ2hyJywgJ2lucHV0JywgJ2NvbCcsICdmcmFtZScsICdhcmVhJywgJ3BhcmFtJywgJ29iamVjdCcsICdlbWJlZCcsICdrZXlnZW4nLCAnc291cmNlJ107XG4gICAgICAgIHJldHVybiBzZWxmVGFnLmluZGV4T2YodGFnTmFtZSkgPiAtMTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIOWOu+mHjeWSjOWOu+epulxuICAgICAqIEBwYXJhbSBhcnJTdHJcbiAgICAgKi9cbiAgICBjbGVhckNsYXNzTmFtZTogKGNsYXNzTmFtZSA9ICcnLCBpZ25vcmVDbGFzc05hbWUgPSAnJykgPT4ge1xuICAgICAgICBpZiAoIWNsYXNzTmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZXMgPSBjbGFzc05hbWUuc3BsaXQoJyAnKTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgICAgIGNsYXNzTmFtZXMuZm9yRWFjaCgoaXRlbSA9ICcnKSA9PiB7XG4gICAgICAgICAgICBpZiAoaXRlbSAmJiBpdGVtICE9PSAnbnVsbCcgJiYgcmVzdWx0LmluZGV4T2YoaXRlbSkgPT09IC0xICYmIGlnbm9yZUNsYXNzTmFtZS5pbmRleE9mKGl0ZW0pID09PSAtMSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGl0ZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdC5qb2luKCcgJyk7XG4gICAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IFVUSUxTO1xuIiwiaW1wb3J0IEhUTUwgZnJvbSBcIi4vSFRNTFwiO1xuaW1wb3J0IEpTWCBmcm9tIFwiLi9KU1hcIjtcbmNvbnN0IERPTSA9IHtcbiAgICByZW5kZXI6IChvYmogPSBbXSwgaXNKU1gpID0+IHtcbiAgICAgICAgaWYgKGlzSlNYKSB7XG4gICAgICAgICAgICByZXR1cm4gSlNYLmdldERvbUJ5QXJyYXkob2JqKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gSFRNTC5nZXREb21CeUFycmF5KG9iaik7XG4gICAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IERPTTtcbiIsImltcG9ydCBVVElMUyBmcm9tIFwiLi4vVVRJTFNcIjtcbmltcG9ydCBnZXRQcm9wc0FycmF5IGZyb20gXCIuL2dldFByb3BzQXJyYXlcIjtcbmNvbnN0IEhUTUwgPSB7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGdldEl0ZW1Eb206IChpdGVtKSA9PiB7XG4gICAgICAgIGlmICghaXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgdGFnTmFtZSA9ICdpJywgY2hpbGRyZW4gPSBbXSwgY2xhc3NOYW1lID0gJycgfSA9IGl0ZW07XG4gICAgICAgIGNvbnN0IGFyclByb3BzID0gZ2V0UHJvcHNBcnJheSh7XG4gICAgICAgICAgICBjbGFzczogY2xhc3NOYW1lXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCB0YWdTdGFydCA9IGAke3RhZ05hbWV9JHthcnJQcm9wcy5sZW5ndGggPyBgICR7YXJyUHJvcHMuam9pbignICcpfWAgOiAnJ31gO1xuICAgICAgICBpZiAoVVRJTFMuaXNTZWxmVGFnKHRhZ05hbWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gYDwke3RhZ1N0YXJ0fS8+YDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIGA8JHt0YWdTdGFydH0+PC8ke3RhZ05hbWV9PmA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGA8JHt0YWdTdGFydH0+JHtIVE1MLmdldERvbUJ5QXJyYXkoY2hpbGRyZW4pfTwvJHt0YWdOYW1lfT5gO1xuICAgIH0sXG4gICAgZ2V0RG9tQnlBcnJheTogKG9iaiA9IFtdKSA9PiB7XG4gICAgICAgIHJldHVybiBvYmoubWFwKChpdGVtKSA9PiBIVE1MLmdldEl0ZW1Eb20oaXRlbSkpLmpvaW4oJycpO1xuICAgIH1cbn07XG5leHBvcnQgZGVmYXVsdCBIVE1MO1xuIiwiaW1wb3J0IFVUSUxTIGZyb20gXCIuLi9VVElMU1wiO1xuaW1wb3J0IGdldFByb3BzQXJyYXkgZnJvbSBcIi4vZ2V0UHJvcHNBcnJheVwiO1xuY29uc3QgSlNYID0ge1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBnZXRJdGVtRG9tOiAoaXRlbSkgPT4ge1xuICAgICAgICBpZiAoIWl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGl0ZW0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IGNoaWxkcmVuID0gW10sIHByb3BzID0ge30sIGNsYXNzTmFtZSA9ICcnIH0gPSBpdGVtO1xuICAgICAgICBjb25zdCB0YWdOYW1lID0gaXRlbS5jb21wb25lbnROYW1lIHx8IGl0ZW0udGFnTmFtZTtcbiAgICAgICAgY29uc3QgYXJyUHJvcHMgPSBnZXRQcm9wc0FycmF5KE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMpLCB7IGNsYXNzTmFtZSB9KSk7XG4gICAgICAgIGNvbnN0IHRhZ1N0YXJ0ID0gYCR7dGFnTmFtZX0ke2FyclByb3BzLmxlbmd0aCA/IGAgJHthcnJQcm9wcy5qb2luKCcgJyl9YCA6ICcnfWA7XG4gICAgICAgIGlmIChVVElMUy5pc1NlbGZUYWcodGFnTmFtZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBgPCR7dGFnU3RhcnR9Lz5gO1xuICAgICAgICB9XG4gICAgICAgIGlmICghY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaXRlbS5jb21wb25lbnROYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGA8JHt0YWdTdGFydH0vPmA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYDwke3RhZ1N0YXJ0fT48LyR7dGFnTmFtZX0+YDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYDwke3RhZ1N0YXJ0fT4ke0pTWC5nZXREb21CeUFycmF5KGNoaWxkcmVuKX08LyR7dGFnTmFtZX0+YDtcbiAgICB9LFxuICAgIGdldERvbUJ5QXJyYXk6IChvYmogPSBbXSkgPT4ge1xuICAgICAgICByZXR1cm4gb2JqLm1hcCgoaXRlbSkgPT4gSlNYLmdldEl0ZW1Eb20oaXRlbSkpLmpvaW4oJycpO1xuICAgIH1cbn07XG5leHBvcnQgZGVmYXVsdCBKU1g7XG4iLCJjb25zdCBnZXRQcm9wc0FycmF5ID0gKHByb3BzID0ge30pID0+IHtcbiAgICBjb25zdCBhcnJQcm9wcyA9IFtdO1xuICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHByb3BzKSkge1xuICAgICAgICBjb25zdCBpdGVtID0gKChrZXksIHZhbHVlKSA9PiB7XG4gICAgICAgICAgICBpZiAodmFsdWUgPT09ICcnIHx8IHZhbHVlID09PSBmYWxzZSB8fCB2YWx1ZSA9PT0gJ2ZhbHNlJykge1xuICAgICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gdHJ1ZSB8fCB2YWx1ZSA9PT0gJ3RydWUnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGtleTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYCR7a2V5fT1cIiR7dmFsdWV9XCJgO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGAke2tleX09eyR7SlNPTi5zdHJpbmdpZnkodmFsdWUpfX1gO1xuICAgICAgICB9KShrZXksIHZhbHVlKTtcbiAgICAgICAgaXRlbSAmJiBhcnJQcm9wcy5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgICByZXR1cm4gYXJyUHJvcHM7XG59O1xuZXhwb3J0IGRlZmF1bHQgZ2V0UHJvcHNBcnJheTtcbiIsImNvbnN0IENPTE9SID0ge1xuICAgIGdldFJnYmFCeUZpbGw6ICh7IGNvbG9yLCBvcGFjaXR5LCB2aXNpYmxlIH0pID0+IHtcbiAgICAgICAgLy8g5aaC5p6c5LiN5Y+v6KeBXG4gICAgICAgIGlmICghdmlzaWJsZSB8fCBvcGFjaXR5ID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByID0gcGFyc2VJbnQoU3RyaW5nKGNvbG9yLnIgKiAyNTUpKTtcbiAgICAgICAgY29uc3QgZyA9IHBhcnNlSW50KFN0cmluZyhjb2xvci5nICogMjU1KSk7XG4gICAgICAgIGNvbnN0IGIgPSBwYXJzZUludChTdHJpbmcoY29sb3IuYiAqIDI1NSkpO1xuICAgICAgICBjb25zdCBhID0gU3RyaW5nKG9wYWNpdHkpLmluZGV4T2YoJy4nKSA+IC0xID8gb3BhY2l0eS50b0ZpeGVkKDEpIDogb3BhY2l0eTtcbiAgICAgICAgcmV0dXJuIFtyLCBnLCBiLCBhXTtcbiAgICB9LFxufTtcbmV4cG9ydCBkZWZhdWx0IENPTE9SO1xuIiwiaW1wb3J0IENPTkZJRyBmcm9tIFwiLi4vQ09ORklHXCI7XG5jb25zdCBFRkZFQ1QgPSB7XG4gICAgZ2V0SW5mbzogKG5vZGUpID0+IHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICByZXR1cm4gQ09ORklHLmdldEluZm9CeUlkKG5vZGUuZWZmZWN0U3R5bGVJZCk7XG4gICAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IEVGRkVDVDtcbiIsInZhciBfX3Jlc3QgPSAodGhpcyAmJiB0aGlzLl9fcmVzdCkgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgICB2YXIgdCA9IHt9O1xuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxuICAgICAgICB0W3BdID0gc1twXTtcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcbiAgICAgICAgfVxuICAgIHJldHVybiB0O1xufTtcbmltcG9ydCBDT0xPUiBmcm9tIFwiLi9DT0xPUlwiO1xuaW1wb3J0IENPTkZJRyBmcm9tIFwiLi4vQ09ORklHXCI7XG5pbXBvcnQgU0FDU1MgZnJvbSBcIi4uL1NBQ1NTXCI7XG5jb25zdCBGSUxMID0ge1xuICAgIGdldEZpbGw6IChub2RlKSA9PiB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgY29uc3QgW2ZpcnN0RmlsbCA9IG51bGxdID0gbm9kZS5maWxscyB8fCBbXTtcbiAgICAgICAgLy8g5rKh5pyJ6K6+572u5Lu75L2V6aKc6ImyLCDnm67liY3kuI3mlK/mjIHmuJDlj5hcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBpZiAoIWZpcnN0RmlsbCB8fCBmaXJzdEZpbGwudHlwZSAhPT0gJ1NPTElEJykge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY29sb3IgPSBDT0xPUi5nZXRSZ2JhQnlGaWxsKGZpcnN0RmlsbCk7XG4gICAgICAgIGlmICghY29sb3IpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IG5vZGUudHlwZSA9PT0gJ1RFWFQnID8gU0FDU1MuYWRkQ29sb3IoY29sb3IpIDogU0FDU1MuYWRkQmdDb2xvcihjb2xvcik7XG4gICAgICAgIC8vIOaWh+acrOaYr+eUqOminOiJsu+8jOWFtuWug+eQhuino+S4uuiDjOaZr+iJslxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY2xhc3NOYW1lXG4gICAgICAgIH07XG4gICAgfSxcbiAgICAvLyDojrflj5bloavlhYXkv6Hmga9cbiAgICBnZXRJbmZvOiAobm9kZSkgPT4ge1xuICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgY29uc3QgZ2V0SW5mbyA9IENPTkZJRy5nZXRJbmZvQnlJZChub2RlLmZpbGxTdHlsZUlkKTtcbiAgICAgICAgaWYgKCFnZXRJbmZvKSB7XG4gICAgICAgICAgICByZXR1cm4gRklMTC5nZXRGaWxsKG5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgdGV4dENsYXNzTmFtZSA9ICcnLCBjbGFzc05hbWUgPSAnJyB9ID0gZ2V0SW5mbywgcmVzdCA9IF9fcmVzdChnZXRJbmZvLCBbXCJ0ZXh0Q2xhc3NOYW1lXCIsIFwiY2xhc3NOYW1lXCJdKTtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IG5vZGUudHlwZSA9PT0gJ1RFWFQnID8gdGV4dENsYXNzTmFtZSA6IGNsYXNzTmFtZSB9LCByZXN0KTtcbiAgICB9LFxufTtcbmV4cG9ydCBkZWZhdWx0IEZJTEw7XG4iLCJpbXBvcnQgU0FDU1MgZnJvbSBcIi4uL1NBQ1NTXCI7XG4vLyBpbXBvcnQgQ09ORklHIGZyb20gXCIuL0NPTkZJR1wiO1xuY29uc3QgRkxFWCA9IHtcbiAgICBpc0ZsZXg6IChub2RlKSA9PiB7XG4gICAgICAgIC8vIOi/meWHoOS4quWFg+e0oOmDveS4jeWBmiBGbGV4IOWIpOaWreWkhOeQhlxuICAgICAgICBpZiAoWydURVhUJ10uaW5kZXhPZihub2RlLnR5cGUpID4gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKG5vZGUgPT09IG51bGwgfHwgbm9kZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogbm9kZS5sYXlvdXRNb2RlKSAhPT0gXCJOT05FXCI7XG4gICAgfSxcbiAgICBnZXRUaGlzSW5mbzogKG5vZGUpID0+IHtcbiAgICAgICAgaWYgKCFGTEVYLmlzRmxleChub2RlKSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyBsYXlvdXRNb2RlLCBwcmltYXJ5QXhpc0FsaWduSXRlbXMsIGNvdW50ZXJBeGlzQWxpZ25JdGVtcywgY2hpbGRyZW4gPSBbXSB9ID0gbm9kZTtcbiAgICAgICAgLy8g5rKh5pyJ5a2Q5YWD57SgIGZsZXgg5biD5bGA5rKh5pyJ5oSP5LmJXG4gICAgICAgIGlmICghY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBbXTtcbiAgICAgICAgLy8g5aaC5p6c5piv57q15ZCR55qEIOi/memHjOWPr+S7peS4jeS9v+eUqCBmbGV4IOW4g+WxgFxuICAgICAgICBpZiAobGF5b3V0TW9kZSA9PT0gJ1ZFUlRJQ0FMJykge1xuICAgICAgICAgICAgLy8g5b2T5piv57q15ZCR5biD5bGA5b2T5pe25YCZXG4gICAgICAgICAgICBjbGFzc05hbWUucHVzaCh7XG4gICAgICAgICAgICAgICAgLy8gXCJNSU5cIjogXCJcIixcbiAgICAgICAgICAgICAgICBcIkNFTlRFUlwiOiBcInRhY1wiLFxuICAgICAgICAgICAgICAgIFwiTUFYXCI6IFwidGFyXCIsXG4gICAgICAgICAgICB9W2NvdW50ZXJBeGlzQWxpZ25JdGVtc10pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY2xhc3NOYW1lLnB1c2goJ2RmJyk7XG4gICAgICAgICAgICBjbGFzc05hbWUucHVzaCh7XG4gICAgICAgICAgICAgICAgLy8gXCJNSU5cIjogXCJcIixcbiAgICAgICAgICAgICAgICBcIkNFTlRFUlwiOiBcImpjY1wiLFxuICAgICAgICAgICAgICAgIFwiTUFYXCI6IFwiamNmZVwiLFxuICAgICAgICAgICAgICAgIFwiU1BBQ0VfQkVUV0VFTlwiOiBcImpjc2JcIixcbiAgICAgICAgICAgIH1bcHJpbWFyeUF4aXNBbGlnbkl0ZW1zXSB8fCBcIlwiKTtcbiAgICAgICAgICAgIGNsYXNzTmFtZS5wdXNoKHtcbiAgICAgICAgICAgICAgICAvL1wiTUlOXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgXCJDRU5URVJcIjogXCJhaWNcIixcbiAgICAgICAgICAgICAgICBcIk1BWFwiOiBcImFpZmVcIixcbiAgICAgICAgICAgIH1bY291bnRlckF4aXNBbGlnbkl0ZW1zXSB8fCBcIlwiKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUuam9pbignICcpXG4gICAgICAgIH07XG4gICAgfSxcbiAgICBnZXRJbmZvRnJvbVBhcmVudDogKG5vZGUpID0+IHtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gbm9kZS5wYXJlbnQ7XG4gICAgICAgIGlmICghcGFyZW50IHx8ICFGTEVYLmlzRmxleChwYXJlbnQpKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGNvbnN0IHsgbGF5b3V0TW9kZSwgcHJpbWFyeUF4aXNBbGlnbkl0ZW1zLCBpdGVtU3BhY2luZyB9ID0gcGFyZW50O1xuICAgICAgICAvLyDkuKTnq6/lr7nlhbbooajnpLrkuI3pnIDopoHov5nkuptcbiAgICAgICAgaWYgKHByaW1hcnlBeGlzQWxpZ25JdGVtcyA9PT0gXCJTUEFDRV9CRVRXRUVOXCIpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IFtdO1xuICAgICAgICBjb25zdCBpZ25vcmVDbGFzc05hbWUgPSBbXTtcbiAgICAgICAgY29uc3QgeyBpZCA9ICcnIH0gPSBwYXJlbnQuY2hpbGRyZW4uZmlsdGVyKGMgPT4gYy52aXNpYmxlKS5wb3AoKSB8fCB7fTtcbiAgICAgICAgY29uc3QgaXNMYXN0Q2hpbGRyZW4gPSBpZCA9PT0gbm9kZS5pZDtcbiAgICAgICAgLy8g5Li65a2Q5YWD57Sg5re75Yqg6Ze06LedXG4gICAgICAgIGlmIChpdGVtU3BhY2luZyA+IDAgJiYgIWlzTGFzdENoaWxkcmVuKSB7XG4gICAgICAgICAgICBjb25zdCBndXR0ZXJNYXAgPSB7XG4gICAgICAgICAgICAgICAgXCJWRVJUSUNBTFwiOiBcIm1iXCIsXG4gICAgICAgICAgICAgICAgXCJIT1JJWk9OVEFMXCI6IFwibXJcIlxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNsYXNzTmFtZS5wdXNoKFNBQ1NTLmFkZChndXR0ZXJNYXBbbGF5b3V0TW9kZV0sIGl0ZW1TcGFjaW5nKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5vZGUubGF5b3V0R3JvdyA9PT0gMSkge1xuICAgICAgICAgICAgY2xhc3NOYW1lLnB1c2goJ2YxJyk7XG4gICAgICAgICAgICBpZ25vcmVDbGFzc05hbWUucHVzaChgdyR7bm9kZS53aWR0aH1gKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUuam9pbignICcpLFxuICAgICAgICAgICAgaWdub3JlQ2xhc3NOYW1lOiBpZ25vcmVDbGFzc05hbWUuam9pbignICcpXG4gICAgICAgIH07XG4gICAgfSxcbiAgICBnZXRJbmZvOiAobm9kZSkgPT4ge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGNvbnN0IHsgY2xhc3NOYW1lOiBjMSA9ICcnLCBpZ25vcmVDbGFzc05hbWU6IGljMSA9ICcnIH0gPSBGTEVYLmdldFRoaXNJbmZvKG5vZGUpIHx8IHt9O1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGNvbnN0IHsgY2xhc3NOYW1lOiBjMiA9ICcnLCBpZ25vcmVDbGFzc05hbWU6IGljMiA9ICcnIH0gPSBGTEVYLmdldEluZm9Gcm9tUGFyZW50KG5vZGUpIHx8IHt9O1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiBgJHtjMX0gJHtjMn1gLFxuICAgICAgICAgICAgaWdub3JlQ2xhc3NOYW1lOiBgJHtpYzF9ICR7aWMyfWBcbiAgICAgICAgfTtcbiAgICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgRkxFWDtcbiIsImltcG9ydCBDT05GSUcgZnJvbSBcIi4uL0NPTkZJR1wiO1xuY29uc3QgR1JJRCA9IHtcbiAgICBnZXRJbmZvOiAobm9kZSkgPT4ge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHJldHVybiBDT05GSUcuZ2V0SW5mb0J5SWQobm9kZS5ncmlkU3R5bGVJZCk7XG4gICAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IEdSSUQ7XG4iLCJpbXBvcnQgU0FDU1MgZnJvbSBcIi4uL1NBQ1NTXCI7XG5jb25zdCBPVEhFUlMgPSB7XG4gICAgZ2VyQm9yZGVyUmFkaXVzQ2xhc3NOYW1lOiAobm9kZSkgPT4ge1xuICAgICAgICBjb25zdCB0bCA9IG5vZGUudG9wTGVmdFJhZGl1cyB8fCAwO1xuICAgICAgICBjb25zdCB0ciA9IG5vZGUudG9wUmlnaHRSYWRpdXMgfHwgMDtcbiAgICAgICAgY29uc3QgYnIgPSBub2RlLmJvdHRvbVJpZ2h0UmFkaXVzIHx8IDA7XG4gICAgICAgIGNvbnN0IGJsID0gbm9kZS5ib3R0b21MZWZ0UmFkaXVzIHx8IDA7XG4gICAgICAgIC8vIOWFqOmDqOS4uiAwXG4gICAgICAgIGlmICgodGwgKyB0ciArIGJyICsgYmwpID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cbiAgICAgICAgLy8g5aaC5p6c5Zub5Liq5YC86YO955u4562JXG4gICAgICAgIGlmICgodGwgPT09IHRyKSAmJiAodGwgPT09IGJyKSAmJiAodGwgPT09IGJsKSkge1xuICAgICAgICAgICAgcmV0dXJuIFtTQUNTUy5hZGQoJ2JyJywgdGwpXTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBbXTtcbiAgICAgICAgdGwgJiYgY2xhc3NOYW1lLnB1c2goU0FDU1MuYWRkKCdidGxyJywgdGwpKTtcbiAgICAgICAgdHIgJiYgY2xhc3NOYW1lLnB1c2goU0FDU1MuYWRkKCdidHJyJywgdHIpKTtcbiAgICAgICAgYnIgJiYgY2xhc3NOYW1lLnB1c2goU0FDU1MuYWRkKCdiYnJyJywgYnIpKTtcbiAgICAgICAgYmwgJiYgY2xhc3NOYW1lLnB1c2goU0FDU1MuYWRkKCdiYmxyJywgYmwpKTtcbiAgICAgICAgcmV0dXJuIGNsYXNzTmFtZTtcbiAgICB9LFxuICAgIGdldFBhZGRpbmdDbGFzc05hbWU6IChub2RlKSA9PiB7XG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICBTQUNTUy5hZGQoJ3B0Jywgbm9kZS5wYWRkaW5nVG9wKSxcbiAgICAgICAgICAgIFNBQ1NTLmFkZCgncHInLCBub2RlLnBhZGRpbmdSaWdodCksXG4gICAgICAgICAgICBTQUNTUy5hZGQoJ3BiJywgbm9kZS5wYWRkaW5nQm90dG9tKSxcbiAgICAgICAgICAgIFNBQ1NTLmFkZCgncGwnLCBub2RlLnBhZGRpbmdMZWZ0KSxcbiAgICAgICAgXTtcbiAgICB9LFxuICAgIGdldEluZm86IChub2RlKSA9PiB7XG4gICAgICAgIGNvbnN0IHBhZGRpbmcgPSBPVEhFUlMuZ2V0UGFkZGluZ0NsYXNzTmFtZShub2RlKTtcbiAgICAgICAgY29uc3QgcmFkaXVzID0gT1RIRVJTLmdlckJvcmRlclJhZGl1c0NsYXNzTmFtZShub2RlKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogWy4uLnBhZGRpbmcsIC4uLnJhZGl1c10uam9pbignICcpXG4gICAgICAgIH07XG4gICAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IE9USEVSUztcbiIsImltcG9ydCBDT05GSUcgZnJvbSBcIi4uL0NPTkZJR1wiO1xuY29uc3QgU1RST0tFID0ge1xuICAgIC8vIOaWh+acrOe7hOS7tlxuICAgIGdldEluZm86IChub2RlKSA9PiB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgcmV0dXJuIENPTkZJRy5nZXRJbmZvQnlJZChub2RlLnN0cm9rZVN0eWxlSWQpO1xuICAgIH0sXG59O1xuZXhwb3J0IGRlZmF1bHQgU1RST0tFO1xuIiwiaW1wb3J0IENPTkZJRyBmcm9tIFwiLi4vQ09ORklHXCI7XG5pbXBvcnQgU0FDU1MgZnJvbSBcIi4uL1NBQ1NTXCI7XG5jb25zdCBURVhUID0ge1xuICAgIHVuaXRNYXA6IHtcbiAgICAgICAgJ1BFUkNFTlQnOiAnJSdcbiAgICAgICAgLy8gXCJQSVhFTFNcIjpcIlwiXG4gICAgfSxcbiAgICBnZXRGb250TmFtZUNsYXNzOiAobm9kZSkgPT4ge1xuICAgICAgICBjb25zdCB7IGZvbnROYW1lIH0gPSBub2RlO1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGNvbnN0IHsgc3R5bGUgfSA9IGZvbnROYW1lO1xuICAgICAgICBpZiAodHlwZW9mIHN0eWxlICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGZvbnRNYXAgPSB7XG4gICAgICAgICAgICBcIlVMVFJBTElHSFRcIjogXCJmdzEwMFwiLFxuICAgICAgICAgICAgXCJUSElOXCI6ICdmdzIwMCcsXG4gICAgICAgICAgICBcIkxJR0hUXCI6IFwiZnczMDBcIixcbiAgICAgICAgICAgIFwiUkVHVUxBUlwiOiBcIlwiLFxuICAgICAgICAgICAgXCJNRURJVU1cIjogXCJmdzUwMFwiLFxuICAgICAgICAgICAgXCJTRU1JQk9MRFwiOiBcImZ3NjAwXCIsXG4gICAgICAgICAgICBcIkJPTERcIjogXCJmdzcwMFwiLFxuICAgICAgICAgICAgXCJCTEFDS1wiOiBcImZ3OTAwXCIsXG4gICAgICAgICAgICBcIklUQUxJQ1wiOiBcImZzaVwiLFxuICAgICAgICAgICAgXCJPQkxJUVVFXCI6IFwiZnNpXCJcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gc3R5bGUuc3BsaXQoJyAnKS5tYXAoKGl0ZW0pID0+IGZvbnRNYXBbaXRlbS50b1VwcGVyQ2FzZSgpXSB8fCAnJyk7XG4gICAgICAgIHJldHVybiBjbGFzc05hbWUuZmlsdGVyKGl0ZW0gPT4gaXRlbSkuam9pbignICcpO1xuICAgIH0sXG4gICAgZ2V0QUNTU1NJbmZvOiAobm9kZSkgPT4ge1xuICAgICAgICB2YXIgX2EsIF9iLCBfYztcbiAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gW107XG4gICAgICAgIGlmIChbXCJzdHJpbmdcIiwgXCJudW1iZXJcIl0uaW5kZXhPZih0eXBlb2Ygbm9kZS5mb250U2l6ZSkgPiAtMSkge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgY2xhc3NOYW1lLnB1c2goU0FDU1MuYWRkKCdmcycsIG5vZGUuZm9udFNpemUpKTtcbiAgICAgICAgfVxuICAgICAgICAvLyDmna3pq5hcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBpZiAoKF9hID0gbm9kZS5saW5lSGVpZ2h0KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EudmFsdWUpIHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIGNvbnN0IHsgdmFsdWUsIHVuaXQgfSA9IG5vZGUubGluZUhlaWdodDtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIGNsYXNzTmFtZS5wdXNoKFNBQ1NTLmFkZCgnbGgnLCB2YWx1ZSwgVEVYVC51bml0TWFwW3VuaXRdKSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8g5a2X6Ze06LedXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgaWYgKChfYiA9IG5vZGUubGV0dGVyU3BhY2luZykgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLnZhbHVlKSB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBjb25zdCB7IHZhbHVlLCB1bml0IH0gPSBub2RlLmxldHRlclNwYWNpbmc7XG4gICAgICAgICAgICBjbGFzc05hbWUucHVzaChTQUNTUy5hZGQoJ2xzJywgdmFsdWUsIFRFWFQudW5pdE1hcFt1bml0XSkpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGZvbnQtd2VpZ2h0IGZvbnQtc3R5bGVcbiAgICAgICAgY29uc3QgZm5DbGFzcyA9IFRFWFQuZ2V0Rm9udE5hbWVDbGFzcyhub2RlKTtcbiAgICAgICAgZm5DbGFzcyAmJiBjbGFzc05hbWUucHVzaChmbkNsYXNzKTtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBpZiAoKF9jID0gbm9kZS5mb250TmFtZSkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLmZhbWlseSkge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgY2xhc3NOYW1lLnB1c2goU0FDU1MuYWRkRm9udEZhbWlseShub2RlLmZvbnROYW1lLmZhbWlseSkpO1xuICAgICAgICB9XG4gICAgICAgIC8vIHRleHQtYWxpZ25cbiAgICAgICAgY29uc3QgdGFDbGFzcyA9IHtcbiAgICAgICAgICAgIFwiTEVGVFwiOiAnJyxcbiAgICAgICAgICAgIFwiQ0VOVEVSXCI6ICd0YWMnLFxuICAgICAgICAgICAgXCJSSUdIVFwiOiAndGFyJyxcbiAgICAgICAgICAgIFwiSlVTVElGSUVEXCI6ICd0YWonLFxuICAgICAgICB9W25vZGUudGV4dEFsaWduSG9yaXpvbnRhbF07XG4gICAgICAgIHRhQ2xhc3MgJiYgY2xhc3NOYW1lLnB1c2godGFDbGFzcyk7XG4gICAgICAgIC8vIHZlcnRpY2FsLWFsaWduXG4gICAgICAgIGNvbnN0IHZhQ2xhc3MgPSB7XG4gICAgICAgICAgICBcIlRPUFwiOiAnJyxcbiAgICAgICAgICAgIFwiQ0VOVEVSXCI6ICd2YW0nLFxuICAgICAgICAgICAgXCJCT1RUT01cIjogJ3ZhYicsXG4gICAgICAgIH1bbm9kZS50ZXh0QWxpZ25WZXJ0aWNhbF07XG4gICAgICAgIHZhQ2xhc3MgJiYgY2xhc3NOYW1lLnB1c2godmFDbGFzcyk7XG4gICAgICAgIC8vIHR0XG4gICAgICAgIGNvbnN0IHR0Q2xhc3MgPSB7XG4gICAgICAgICAgICBcIk9SSUdJTkFMXCI6ICcnLFxuICAgICAgICAgICAgXCJVUFBFUlwiOiAndHR1JyxcbiAgICAgICAgICAgIFwiTE9XRVJcIjogJ3R0bCcsXG4gICAgICAgICAgICBcIlRJVExFXCI6ICd0dGMnLFxuICAgICAgICB9W25vZGUudGV4dENhc2VdO1xuICAgICAgICB0dENsYXNzICYmIGNsYXNzTmFtZS5wdXNoKHR0Q2xhc3MpO1xuICAgICAgICAvLyB0ZFxuICAgICAgICBjb25zdCB0ZENsYXNzID0ge1xuICAgICAgICAgICAgXCJOT05FXCI6IFwiXCIsXG4gICAgICAgICAgICBcIlVOREVSTElORVwiOiAndGR1JyxcbiAgICAgICAgICAgIFwiU1RSSUtFVEhST1VHSFwiOiAndGRsJ1xuICAgICAgICB9W25vZGUudGV4dERlY29yYXRpb25dO1xuICAgICAgICB0ZENsYXNzICYmIGNsYXNzTmFtZS5wdXNoKHRkQ2xhc3MpO1xuICAgICAgICByZXR1cm4gY2xhc3NOYW1lLmpvaW4oJyAnKTtcbiAgICB9LFxuICAgIC8vIOaWh+acrOe7hOS7tlxuICAgIGdldEluZm86IChub2RlKSA9PiB7XG4gICAgICAgIGlmIChub2RlLnR5cGUgIT09ICdURVhUJykge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBjb25zdCB7IGNsYXNzTmFtZSA9ICcnLCBpZ25vcmVDbGFzc05hbWUgPSAnJyB9ID0gQ09ORklHLmdldEluZm9CeUlkKG5vZGUudGV4dFN0eWxlSWQpIHx8IHt9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSB7XG4gICAgICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZS5sZW5ndGggPyBjbGFzc05hbWUgOiBURVhULmdldEFDU1NTSW5mbyhub2RlKSxcbiAgICAgICAgICAgIGlnbm9yZUNsYXNzTmFtZTogaWdub3JlQ2xhc3NOYW1lXG4gICAgICAgIH07XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKG5vZGUsIHJlc3VsdCk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSxcbn07XG5leHBvcnQgZGVmYXVsdCBURVhUO1xuIiwiaW1wb3J0IE5PREUgZnJvbSBcIi4vXy9OT0RFXCI7XG5pbXBvcnQgQ09ORklHIGZyb20gXCIuL18vQ09ORklHXCI7XG5pbXBvcnQgU0FDU1MgZnJvbSBcIi4vXy9TQUNTU1wiO1xuaW1wb3J0IERPTSBmcm9tIFwiLi9fL3JlbmRlci9ET01cIjtcbmNvbnN0IEFQSSA9IHtcbiAgICB0YWJJbmRleDogMCxcbiAgICBnZXRTZWxlY3Rpb246ICgpID0+IHtcbiAgICAgICAgY29uc3Qgc2VsZWN0aW9uID0gZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhzZWxlY3Rpb24pO1xuICAgICAgICBpZiAoIXNlbGVjdGlvbi5sZW5ndGgpIHtcbiAgICAgICAgICAgIC8vIOayoeaciemAieaLqeS7u+S9leWFg+e0oFxuICAgICAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2UoeyBub1NlbGVjdGlvbjogdHJ1ZSB9KTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzZWxlY3Rpb247XG4gICAgfSxcbiAgICBvblRhYkNoYW5nZTogKGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGJlZm9yZUluZGV4ID0gQVBJLnRhYkluZGV4O1xuICAgICAgICBBUEkudGFiSW5kZXggPSBpbmRleDtcbiAgICAgICAgLy8g5aaC5p6c5Y+q5piv5ZyoIEhUTUwg5ZKMIEFDU1Mg5LmL5YmN5YiH5o2iXG4gICAgICAgIGlmICgoYmVmb3JlSW5kZXggPT09IDAgfHwgYmVmb3JlSW5kZXggPT09IDEpICYmIChpbmRleCA9PT0gMCB8fCBpbmRleCA9PT0gMSkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBhY3Rpb25NYXAgPSBbJ3J1bkhvbWUnLCAncnVuSG9tZScsICdydW5Ub2tlbicsICdydW5Db25maWcnXTtcbiAgICAgICAgY29uc3QgYWN0aW9uID0gYWN0aW9uTWFwW2luZGV4XTtcbiAgICAgICAgYWN0aW9uICYmIEFQSVthY3Rpb25dKCk7XG4gICAgfSxcbiAgICBvblNlbGVjdGlvbkNoYW5nZTogKCkgPT4ge1xuICAgICAgICBjb25zdCBhY3Rpb25NYXAgPSBbJ3J1bkhvbWUnLCAncnVuSG9tZScsICdydW5Ub2tlbicsICcnXTtcbiAgICAgICAgY29uc3QgYWN0aW9uID0gYWN0aW9uTWFwW0FQSS50YWJJbmRleF07XG4gICAgICAgIGlmICghYWN0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgQVBJW2FjdGlvbl0oKTtcbiAgICB9LFxuICAgIHJ1bkhvbWU6ICgpID0+IHtcbiAgICAgICAgY29uc3Qgc2VsZWN0aW9uID0gQVBJLmdldFNlbGVjdGlvbigpO1xuICAgICAgICBpZiAoIXNlbGVjdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIFNBQ1NTLmluaXQoKTtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBjb25zdCBJbmZvID0gTk9ERS5nZXROb2Rlc0luZm8oc2VsZWN0aW9uKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coSW5mbyk7XG4gICAgICAgIGNvbnN0IGlzSlNYID0gQ09ORklHLmlzSlNYKCk7XG4gICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgIGdldEhUTUw6IERPTS5yZW5kZXIoSW5mbywgaXNKU1gpLFxuICAgICAgICAgICAgZ2V0Q1NTOiBTQUNTUy5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIGlzSlNYLFxuICAgICAgICAgICAgbm9TZWxlY3Rpb246IGZhbHNlXG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgcnVuQ29uZmlnOiAoKSA9PiB7XG4gICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgIGdldENvbmZpZzogQ09ORklHLmdldEFsbCgpXG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgcnVuVG9rZW46ICgpID0+IHtcbiAgICAgICAgY29uc3QgW3NlbGVjdGlvbl0gPSBBUEkuZ2V0U2VsZWN0aW9uKCkgfHwgW107XG4gICAgICAgIENPTkZJRy5nZXRTZWxlY3Rpb25Ub2tlbnMoc2VsZWN0aW9uKTtcbiAgICB9LFxuICAgIG9ubWVzc2FnZTogKG1zZyA9IHt9KSA9PiB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgY29uc3QgeyB0eXBlID0gbnVsbCwgdmFsdWUgPSBudWxsIH0gPSBtc2c7XG4gICAgICAgIGlmICh0eXBlID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgW25hbWUsIGFjdGlvbl0gPSB0eXBlLnNwbGl0KCcuJyk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdBUEkgb25tZXNzYWdlJywgbmFtZSwgYWN0aW9uLCB2YWx1ZSk7XG4gICAgICAgIGlmIChuYW1lID09PSAnQVBJJyAmJiAoYWN0aW9uIGluIEFQSSkpIHtcbiAgICAgICAgICAgIEFQSVthY3Rpb25dKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChuYW1lID09PSAnQ09ORklHJyAmJiAoYWN0aW9uIGluIENPTkZJRykpIHtcbiAgICAgICAgICAgIENPTkZJR1thY3Rpb25dKHZhbHVlKTtcbiAgICAgICAgICAgIGlmIChhY3Rpb24gPT09ICdjaGFuZ2VKU1gnKSB7XG4gICAgICAgICAgICAgICAgQVBJLnJ1bkhvbWUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGFjdGlvbiA9PT0gJ2FwcGVuZFRva2VuJykge1xuICAgICAgICAgICAgICAgIEFQSS5ydW5Ub2tlbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgQVBJLnJ1bkNvbmZpZygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufTtcbi8vIFRoaXMgcGx1Z2luIHdpbGwgb3BlbiBhIHdpbmRvdyB0byBwcm9tcHQgdGhlIHVzZXIgdG8gZW50ZXIgYSBudW1iZXIsIGFuZFxuLy8gaXQgd2lsbCB0aGVuIGNyZWF0ZSB0aGF0IG1hbnkgcmVjdGFuZ2xlcyBvbiB0aGUgc2NyZWVuLlxuLy8gVGhpcyBmaWxlIGhvbGRzIHRoZSBtYWluIGNvZGUgZm9yIHRoZSBwbHVnaW5zLiBJdCBoYXMgYWNjZXNzIHRvIHRoZSAqZG9jdW1lbnQqLlxuLy8gWW91IGNhbiBhY2Nlc3MgYnJvd3NlciBBUElzIGluIHRoZSA8c2NyaXB0PiB0YWcgaW5zaWRlIFwidWkuaHRtbFwiIHdoaWNoIGhhcyBhXG4vLyBmdWxsIGJyb3dzZXIgZW52aXJvbm1lbnQgKHNlZSBkb2N1bWVudGF0aW9uKS5cbkNPTkZJRy5pbml0KCkudGhlbigoKSA9PiB7XG4gICAgLy8gVGhpcyBzaG93cyB0aGUgSFRNTCBwYWdlIGluIFwidWkuaHRtbFwiLlxuICAgIGZpZ21hLnNob3dVSShfX2h0bWxfXywgeyB3aWR0aDogNDAwLCBoZWlnaHQ6IDYwMCB9KTtcbiAgICBBUEkucnVuSG9tZSgpO1xuICAgIGZpZ21hLm9uKFwic2VsZWN0aW9uY2hhbmdlXCIsICgpID0+IHtcbiAgICAgICAgQVBJLm9uU2VsZWN0aW9uQ2hhbmdlKCk7XG4gICAgfSk7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGZpZ21hLnVpLm9ubWVzc2FnZSA9IEFQSS5vbm1lc3NhZ2U7XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=