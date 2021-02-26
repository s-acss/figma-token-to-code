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
  getComponentPropsByString: function getComponentPropsByString(strProp) {
    var props = {};

    if (typeof strProp === 'string') {
      // 去掉单双引号
      var legalProps = strProp.replace(/\"/g, '').replace(/\'/g, '');
      legalProps.split(",").forEach(function (item) {
        var _item$split = item.split("="),
            _item$split2 = _slicedToArray(_item$split, 2),
            key = _item$split2[0],
            value = _item$split2[1];

        var trimValue = String(value).trim(); // false 表示没有这个值 不做处理

        if (trimValue === "false") {
          return;
        }

        props[String(key).trim()] = value ? trimValue : 'true';
      });
    }

    return props;
  },
  getComponentProps: function getComponentProps(node) {
    // console.log('getComponentProps', node);
    var isVariant = COMPONENT.isVariant(node); // 没有变体表示没有 props

    if (!isVariant) {
      return {};
    }

    var name = node.mainComponent.name;
    return COMPONENT.getComponentPropsByString(name);
  },
  getInfo: function getInfo(node) {
    // @ts-ignore
    var id = COMPONENT.getComponentId(node);
    var matchToken = _CONFIG__WEBPACK_IMPORTED_MODULE_0__["default"].getInfoById(id); // console.log(id, matchToken, node);

    if (!matchToken) {
      return null;
    }

    matchToken.props = Object.assign(Object.assign({}, COMPONENT.getComponentProps(node)), COMPONENT.getComponentPropsByString(matchToken.props || '')); // 用户没有指定表示要渲染

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

    if (isStructNode || String(nodeInfo === null || nodeInfo === void 0 ? void 0 : nodeInfo.renderWidth) === '1') {
      nodeInfo.className += ' ' + _SACSS__WEBPACK_IMPORTED_MODULE_6__["default"].add('w', parseInt(String(node.width)));
    } // @ts-ignore


    if (isStructNode || String(nodeInfo === null || nodeInfo === void 0 ? void 0 : nodeInfo.renderHeight) === '1') {
      nodeInfo.className += ' ' + _SACSS__WEBPACK_IMPORTED_MODULE_6__["default"].add('h', parseInt(String(node.height)));
    }

    nodeInfo.children = function () {
      if (node.type === 'TEXT') {
        return _token_TEXT__WEBPACK_IMPORTED_MODULE_2__["default"].getTextChildren(node);
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
          return c.type === 'TEXT';
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
    } // console.log(nodeInfo);


    return nodeInfo;
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

 // legal 合法属性

var legalProp = ['class', 'type', 'name', 'role', 'disabled', 'id', 'title', 'lang', 'dir', 'tabindex', 'accesskey', 'src', 'href', 'style', 'aria-hidden', 'target', 'rel'];
var HTML = {
  getPropsString: function getPropsString() {
    var _a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var _a$className = _a.className,
        className = _a$className === void 0 ? '' : _a$className,
        props = __rest(_a, ["className"]);

    var arrProps = [];
    var classNames = className.split(' ');

    for (var _i = 0, _Object$entries = Object.entries(props); _i < _Object$entries.length; _i++) {
      var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
          key = _Object$entries$_i[0],
          value = _Object$entries$_i[1];

      var strValue = String(value);

      if (strValue === '' || strValue === 'false') {
        continue;
      }

      if (key.startsWith('data-')) {
        arrProps.push("".concat(key, "=\"").concat(strValue, "\""));
        continue;
      }

      if (legalProp.indexOf(key) > -1) {
        arrProps.push("".concat(key, "=\"").concat(strValue, "\""));
        continue;
      } else if (strValue === 'true') {
        classNames.push("_".concat(key));
        continue;
      }
    }

    if (classNames.length) {
      arrProps.push("class=\"".concat(classNames.join(' '), "\""));
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
        _item$props = item.props,
        props = _item$props === void 0 ? {} : _item$props,
        _item$className = item.className,
        className = _item$className === void 0 ? '' : _item$className;
    var tagName = item.tagName || 'div';
    var propsString = HTML.getPropsString(Object.assign(Object.assign({}, props), {
      className: className
    }));
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

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var JSX = {
  getPropsString: function getPropsString() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var arrProps = [];

    for (var _i = 0, _Object$entries = Object.entries(props); _i < _Object$entries.length; _i++) {
      var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
          key = _Object$entries$_i[0],
          value = _Object$entries$_i[1];

      var item = function (key, value) {
        var strValue = String(value);

        if (strValue === '' || value === 'false') {
          return '';
        }

        return "".concat(key, "=\"").concat(strValue, "\"");
      }(key, value);

      item && arrProps.push(item);
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
        _item$props = item.props,
        props = _item$props === void 0 ? {} : _item$props,
        _item$className = item.className,
        className = _item$className === void 0 ? '' : _item$className;
    var tagName = item.componentName || item.tagName || 'div';
    var strProps = JSX.getPropsString(Object.assign(Object.assign({}, props), {
      className: className
    }));
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
    var _a = _CONFIG__WEBPACK_IMPORTED_MODULE_1__["default"].getInfoById(node.fillStyleId) || {},
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
        "MAX": "tar"
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
    } // @ts-ignore


    var getInfo = _CONFIG__WEBPACK_IMPORTED_MODULE_0__["default"].getInfoById(node.textStyleId) || {};
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL18vQ09NUE9ORU5ULnRzIiwid2VicGFjazovLy8uL3NyYy9fL0NPTkZJRy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvXy9OT0RFLnRzIiwid2VicGFjazovLy8uL3NyYy9fL1NBQ1NTLnRzIiwid2VicGFjazovLy8uL3NyYy9fL1VUSUxTLnRzIiwid2VicGFjazovLy8uL3NyYy9fL3JlbmRlci9ET00udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL18vcmVuZGVyL0hUTUwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL18vcmVuZGVyL0pTWC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvXy90b2tlbi9DT0xPUi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvXy90b2tlbi9FRkZFQ1QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL18vdG9rZW4vRklMTC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvXy90b2tlbi9GTEVYLnRzIiwid2VicGFjazovLy8uL3NyYy9fL3Rva2VuL0dSSUQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL18vdG9rZW4vT1RIRVJTLnRzIiwid2VicGFjazovLy8uL3NyYy9fL3Rva2VuL1NUUk9LRS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvXy90b2tlbi9URVhULnRzIiwid2VicGFjazovLy8uL3NyYy9jb2RlLnRzIl0sIm5hbWVzIjpbIkNPTVBPTkVOVCIsImlzVmFyaWFudCIsIm5vZGUiLCJfYSIsIl9iIiwibWFpbkNvbXBvbmVudCIsInBhcmVudCIsInR5cGUiLCJpc0NvbXBvbmVudCIsImdldE1haW5Db21wb25lbnQiLCJnZXRDb21wb25lbnRJZCIsImlkIiwic3RyaW5nVG9Db21wb25lbnROYW1lIiwibmFtZSIsInRyaW1OYW1lIiwidHJpbSIsInN0ck5hbWUiLCJyZXBsYWNlIiwiZmlyc3RDaGFyIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJsZW5ndGgiLCJzbGljZSIsImdldENvbXBvbmVudE5hbWUiLCJnZXRDb21wb25lbnRQcm9wc0J5U3RyaW5nIiwic3RyUHJvcCIsInByb3BzIiwibGVnYWxQcm9wcyIsInNwbGl0IiwiZm9yRWFjaCIsIml0ZW0iLCJrZXkiLCJ2YWx1ZSIsInRyaW1WYWx1ZSIsIlN0cmluZyIsImdldENvbXBvbmVudFByb3BzIiwiZ2V0SW5mbyIsIm1hdGNoVG9rZW4iLCJDT05GSUciLCJnZXRJbmZvQnlJZCIsIk9iamVjdCIsImFzc2lnbiIsInJlbmRlckNoaWxkcmVuIiwicmVuZGVyV2lkdGgiLCJyZW5kZXJIZWlnaHQiLCJQUk9fREVGQVVMVCIsImlnbm9yZUNsYXNzTmFtZSIsInRva2VuIiwiQ09ORklHX0RFRkFVTFQiLCJjdXJyZW50SW5kZXgiLCJpc0pTWCIsInByb2plY3RzIiwic3RvcmUiLCJjaGFuZ2VDdXJyZW50IiwiaW5kZXgiLCJnZXRBbGwiLCJmaWdtYSIsImNsaWVudFN0b3JhZ2UiLCJzZXRBc3luYyIsImNoYW5nZUpTWCIsInJlbW92ZSIsInNwbGljZSIsInB1c2giLCJhZGROZXdQcm9qZWN0IiwiZWRpdEJ5SW5kZXgiLCJkYXRhIiwiY3VycmVudCIsInVpIiwicG9zdE1lc3NhZ2UiLCJhbGVydE1zZyIsInJlcGxhY2VCeUluZGV4IiwiYXBwZW5kVG9rZW4iLCJnZXRDdXJyZW50IiwiaW5pdCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiZ2V0QXN5bmMiLCJ0aGVuIiwicmV0IiwiZ2V0VG9rZW4iLCJjYXRjaCIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsInRva2VuQ29uZmlnIiwiZ2V0U2VsZWN0aW9uVG9rZW5zIiwic2VsZWN0aW9uIiwiZ2V0U2VsZWN0aW9uSW5mbyIsImZpbmRUb2tlbiIsImZpbGxTdHlsZUlkIiwidGV4dFN0eWxlSWQiLCJzdHJva2VTdHlsZUlkIiwiZWZmZWN0U3R5bGVJZCIsImdyaWRTdHlsZUlkIiwiZ2V0U3R5bGVCeUlkIiwiZ2V0QWxsVG9rZW5zIiwicm9vdCIsImNvbXBvbmVudHMiLCJmaW5kQWxsIiwiYyIsImFkZENvbmZpZyIsImdldExvY2FsUGFpbnRTdHlsZXMiLCJnZXRMb2NhbFRleHRTdHlsZXMiLCJnZXRMb2NhbEVmZmVjdFN0eWxlcyIsImdldExvY2FsR3JpZFN0eWxlcyIsImdvdEFsbFRva2VucyIsIl9fcmVzdCIsInMiLCJlIiwidCIsInAiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJpbmRleE9mIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwiaSIsInByb3BlcnR5SXNFbnVtZXJhYmxlIiwiTk9ERSIsImV4dGVuZEluZm8iLCJhIiwiYiIsImNsYXNzTmFtZSIsImNsYXNzTmFtZUEiLCJpZ25vcmVDbGFzc05hbWVBIiwicHJvcHNBIiwicmVzdEEiLCJjbGFzc05hbWVCIiwiaWdub3JlQ2xhc3NOYW1lQiIsInByb3BzQiIsImNoaWxkcmVuIiwicmVzdEIiLCJpc1N0cnVjdE5vZGUiLCJzdGFydHNXaXRoIiwieWVzVHlwZXMiLCJnb3RObyIsImZpbmQiLCJ2aXNpYmxlIiwiaXNSZW5kZXJDaGlsZHJlbiIsImdldE5vZGVJbmZvIiwibm9kZUluZm8iLCJ0YWdOYW1lIiwiY29tcG9uZW50IiwiZmlsbCIsIkZJTEwiLCJ0ZXh0IiwiVEVYVCIsInN0cm9rZSIsIlNUUk9LRSIsImdyaWQiLCJHUklEIiwiZWZmZWN0IiwiRUZGRUNUIiwib3RoZXJzIiwiT1RIRVJTIiwiZmxleCIsIkZMRVgiLCJTQUNTUyIsImFkZCIsInBhcnNlSW50Iiwid2lkdGgiLCJoZWlnaHQiLCJnZXRUZXh0Q2hpbGRyZW4iLCJtYXAiLCJjaGFyYWN0ZXJzIiwiZ2V0Tm9kZXNJbmZvIiwiVVRJTFMiLCJjbGVhckNsYXNzTmFtZSIsImNoaWxkcmVuSW5mbyIsImNvbXBvbmVudE5hbWUiLCJzb3J0Iiwibm9kZXMiLCJ5IiwieCIsImluZm8iLCJzb3J0Tm9kZXMiLCJsZW4iLCJBcnJheSIsIm5hbWVNYXAiLCJnZXRDbGFzc1NlbGVjdG9yQnlOYW1lIiwiZ2V0U3RyaW5nIiwia2V5cyIsInJlc3VsdCIsImpvaW4iLCJ1bml0IiwicHJvcE5hbWUiLCJ1c2VWYWx1ZSIsIk51bWJlciIsInBhcnNlRmxvYXQiLCJ0b0ZpeGVkIiwiY2xhc3NVbml0IiwiYWRkRm9udEZhbWlseSIsInZhbHVlT2siLCJ0b0xvd2VyQ2FzZSIsImFkZENvbG9yIiwicmdiYSIsImFkZEJnQ29sb3IiLCJpc0Jsb2NrIiwiYmxvY2tUYWciLCJpc1NlbGZUYWciLCJzZWxmVGFnIiwiY2xhc3NOYW1lcyIsIkRPTSIsInJlbmRlciIsIm9iaiIsIkpTWCIsImdldERvbUJ5QXJyYXkiLCJIVE1MIiwibGVnYWxQcm9wIiwiZ2V0UHJvcHNTdHJpbmciLCJhcnJQcm9wcyIsImVudHJpZXMiLCJzdHJWYWx1ZSIsImdldEl0ZW1Eb20iLCJwcm9wc1N0cmluZyIsInRhZ1N0YXJ0Iiwic3RyUHJvcHMiLCJDT0xPUiIsImdldFJnYmFCeUZpbGwiLCJjb2xvciIsIm9wYWNpdHkiLCJyIiwiZyIsImdldEZpbGwiLCJmaWxscyIsImZpcnN0RmlsbCIsInRleHRDbGFzc05hbWUiLCJyZXN0IiwicmVuZGVyQ2xhc3NOYW1lIiwiaXNGbGV4IiwibGF5b3V0TW9kZSIsImdldFRoaXNJbmZvIiwicHJpbWFyeUF4aXNBbGlnbkl0ZW1zIiwiY291bnRlckF4aXNBbGlnbkl0ZW1zIiwiZ2V0SW5mb0Zyb21QYXJlbnQiLCJpdGVtU3BhY2luZyIsImZpbHRlciIsInBvcCIsImlzTGFzdENoaWxkcmVuIiwiZ3V0dGVyTWFwIiwibGF5b3V0R3JvdyIsImMxIiwiaWMxIiwiYzIiLCJpYzIiLCJnZXJCb3JkZXJSYWRpdXNDbGFzc05hbWUiLCJ0bCIsInRvcExlZnRSYWRpdXMiLCJ0ciIsInRvcFJpZ2h0UmFkaXVzIiwiYnIiLCJib3R0b21SaWdodFJhZGl1cyIsImJsIiwiYm90dG9tTGVmdFJhZGl1cyIsImdldFBhZGRpbmdDbGFzc05hbWUiLCJwYWRkaW5nVG9wIiwicGFkZGluZ1JpZ2h0IiwicGFkZGluZ0JvdHRvbSIsInBhZGRpbmdMZWZ0IiwicGFkZGluZyIsInJhZGl1cyIsInVuaXRNYXAiLCJnZXRGb250TmFtZUNsYXNzIiwiZm9udE5hbWUiLCJzdHlsZSIsImZvbnRNYXAiLCJnZXRBQ1NTU0luZm8iLCJfYyIsImZvbnRTaXplIiwibGluZUhlaWdodCIsImxldHRlclNwYWNpbmciLCJmbkNsYXNzIiwiZmFtaWx5IiwidGFDbGFzcyIsInRleHRBbGlnbkhvcml6b250YWwiLCJ2YUNsYXNzIiwidGV4dEFsaWduVmVydGljYWwiLCJ0dENsYXNzIiwidGV4dENhc2UiLCJ0ZENsYXNzIiwidGV4dERlY29yYXRpb24iLCJzdHJDbGFzc05hbWUiLCJpc1N0cm9uZyIsImZpbmRJbmRleCIsImxlZ2FsUCIsIm1iQ2xhc3MiLCJwYXJhZ3JhcGhTcGFjaW5nIiwicHMiLCJpc0xhc3QiLCJhY3NzSW5mbyIsIkFQSSIsInRhYkluZGV4IiwiZ2V0U2VsZWN0aW9uIiwiY3VycmVudFBhZ2UiLCJub1NlbGVjdGlvbiIsIm9uVGFiQ2hhbmdlIiwiYmVmb3JlSW5kZXgiLCJhY3Rpb25NYXAiLCJhY3Rpb24iLCJvblNlbGVjdGlvbkNoYW5nZSIsInJ1bkhvbWUiLCJJbmZvIiwiZ2V0SFRNTCIsImdldENTUyIsInJ1bkNvbmZpZyIsImdldENvbmZpZyIsInJ1blRva2VuIiwib25tZXNzYWdlIiwibXNnIiwic2hvd1VJIiwiX19odG1sX18iLCJvbiJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtR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UjhSLE1BTlEsb0JBT3JCOzs7QUFDQSxRQUFJOVIsSUFBSSxLQUFLLEtBQVQsSUFBbUI4UixNQUFNLElBQUlSLEdBQWpDLEVBQXVDO0FBQ25DQSxTQUFHLENBQUNRLE1BQUQsQ0FBSCxDQUFZM1EsS0FBWjtBQUNILEtBRkQsTUFHSyxJQUFJbkIsSUFBSSxLQUFLLFFBQVQsSUFBc0I4UixNQUFNLElBQUlyUSwrQ0FBcEMsRUFBNkM7QUFDOUNBLHFEQUFNLENBQUNxUSxNQUFELENBQU4sQ0FBZTNRLEtBQWY7O0FBQ0EsVUFBSTJRLE1BQU0sS0FBSyxXQUFmLEVBQTRCO0FBQ3hCUixXQUFHLENBQUNVLE9BQUo7QUFDSCxPQUZELE1BR0ssSUFBSUYsTUFBTSxLQUFLLGFBQWYsRUFBOEI7QUFDL0JSLFdBQUcsQ0FBQ2dCLFFBQUo7QUFDSCxPQUZJLE1BR0E7QUFDRGhCLFdBQUcsQ0FBQ2MsU0FBSjtBQUNIO0FBQ0o7QUFDSjtBQWhGTyxDQUFaLEMsQ0FrRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTNRLCtDQUFNLENBQUNtQyxJQUFQLEdBQWNLLElBQWQsQ0FBbUIsWUFBTTtBQUNyQjtBQUNBdEIsT0FBSyxDQUFDOFAsTUFBTixDQUFhQyxRQUFiLEVBQXVCO0FBQUV0SixTQUFLLEVBQUUsR0FBVDtBQUFjQyxVQUFNLEVBQUU7QUFBdEIsR0FBdkI7QUFDQWlJLEtBQUcsQ0FBQ1UsT0FBSjtBQUNBclAsT0FBSyxDQUFDZ1EsRUFBTixDQUFTLGlCQUFULEVBQTRCLFlBQU07QUFDOUJyQixPQUFHLENBQUNTLGlCQUFKO0FBQ0gsR0FGRCxFQUpxQixDQU9yQjs7QUFDQXBQLE9BQUssQ0FBQ1csRUFBTixDQUFTaVAsU0FBVCxHQUFxQmpCLEdBQUcsQ0FBQ2lCLFNBQXpCO0FBQ0gsQ0FURCxFIiwiZmlsZSI6ImNvZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9jb2RlLnRzXCIpO1xuIiwiaW1wb3J0IENPTkZJRyBmcm9tIFwiLi9DT05GSUdcIjtcbmNvbnN0IENPTVBPTkVOVCA9IHtcbiAgICBpc1ZhcmlhbnQ6IChub2RlKSA9PiB7XG4gICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgcmV0dXJuICgoX2IgPSAoX2EgPSBub2RlLm1haW5Db21wb25lbnQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5wYXJlbnQpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi50eXBlKSA9PT0gJ0NPTVBPTkVOVF9TRVQnO1xuICAgIH0sXG4gICAgaXNDb21wb25lbnQ6IChub2RlKSA9PiB7XG4gICAgICAgIHJldHVybiBub2RlLnR5cGUgPT09ICdJTlNUQU5DRScgfHwgbm9kZS50eXBlID09PSAnQ09NUE9ORU5UJztcbiAgICB9LFxuICAgIGdldE1haW5Db21wb25lbnQ6IChub2RlKSA9PiB7XG4gICAgICAgIGlmIChub2RlLnR5cGUgPT09ICdDT01QT05FTlQnKSB7XG4gICAgICAgICAgICByZXR1cm4gbm9kZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGNvbnN0IGlzVmFyaWFudCA9IENPTVBPTkVOVC5pc1ZhcmlhbnQobm9kZSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKG5vZGUsIHtpc1ZhcmlhbnR9KTtcbiAgICAgICAgcmV0dXJuIGlzVmFyaWFudCA/IG5vZGUubWFpbkNvbXBvbmVudC5wYXJlbnQgOiBub2RlLm1haW5Db21wb25lbnQ7XG4gICAgfSxcbiAgICBnZXRDb21wb25lbnRJZDogKG5vZGUpID0+IHtcbiAgICAgICAgY29uc3QgeyBpZCA9ICcnIH0gPSBDT01QT05FTlQuZ2V0TWFpbkNvbXBvbmVudChub2RlKSB8fCB7fTtcbiAgICAgICAgcmV0dXJuIGlkO1xuICAgIH0sXG4gICAgc3RyaW5nVG9Db21wb25lbnROYW1lOiAobmFtZSA9ICcnKSA9PiB7XG4gICAgICAgIGNvbnN0IHRyaW1OYW1lID0gbmFtZS50cmltKCk7XG4gICAgICAgIGlmICghdHJpbU5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzdHJOYW1lID0gdHJpbU5hbWUucmVwbGFjZSgvW1xcV10vZywgJycpO1xuICAgICAgICBjb25zdCBmaXJzdENoYXIgPSBzdHJOYW1lLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICBpZiAoc3RyTmFtZS5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiBmaXJzdENoYXI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZpcnN0Q2hhciArIHN0ck5hbWUuc2xpY2UoMSk7XG4gICAgfSxcbiAgICBnZXRDb21wb25lbnROYW1lOiAobm9kZSkgPT4ge1xuICAgICAgICBjb25zdCB7IG5hbWUgPSAnJyB9ID0gQ09NUE9ORU5ULmdldE1haW5Db21wb25lbnQobm9kZSk7XG4gICAgICAgIGlmICghbmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBDT01QT05FTlQuc3RyaW5nVG9Db21wb25lbnROYW1lKG5hbWUpO1xuICAgIH0sXG4gICAgZ2V0Q29tcG9uZW50UHJvcHNCeVN0cmluZzogKHN0clByb3ApID0+IHtcbiAgICAgICAgY29uc3QgcHJvcHMgPSB7fTtcbiAgICAgICAgaWYgKHR5cGVvZiBzdHJQcm9wID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgLy8g5Y675o6J5Y2V5Y+M5byV5Y+3XG4gICAgICAgICAgICBjb25zdCBsZWdhbFByb3BzID0gc3RyUHJvcC5yZXBsYWNlKC9cXFwiL2csICcnKS5yZXBsYWNlKC9cXCcvZywgJycpO1xuICAgICAgICAgICAgbGVnYWxQcm9wcy5zcGxpdChcIixcIikuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IFtrZXksIHZhbHVlXSA9IGl0ZW0uc3BsaXQoXCI9XCIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRyaW1WYWx1ZSA9IFN0cmluZyh2YWx1ZSkudHJpbSgpO1xuICAgICAgICAgICAgICAgIC8vIGZhbHNlIOihqOekuuayoeaciei/meS4quWAvCDkuI3lgZrlpITnkIZcbiAgICAgICAgICAgICAgICBpZiAodHJpbVZhbHVlID09PSBcImZhbHNlXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwcm9wc1tTdHJpbmcoa2V5KS50cmltKCldID0gdmFsdWUgPyB0cmltVmFsdWUgOiAndHJ1ZSc7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcHJvcHM7XG4gICAgfSxcbiAgICBnZXRDb21wb25lbnRQcm9wczogKG5vZGUpID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2dldENvbXBvbmVudFByb3BzJywgbm9kZSk7XG4gICAgICAgIGNvbnN0IGlzVmFyaWFudCA9IENPTVBPTkVOVC5pc1ZhcmlhbnQobm9kZSk7XG4gICAgICAgIC8vIOayoeacieWPmOS9k+ihqOekuuayoeaciSBwcm9wc1xuICAgICAgICBpZiAoIWlzVmFyaWFudCkge1xuICAgICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgbmFtZSB9ID0gbm9kZS5tYWluQ29tcG9uZW50O1xuICAgICAgICByZXR1cm4gQ09NUE9ORU5ULmdldENvbXBvbmVudFByb3BzQnlTdHJpbmcobmFtZSk7XG4gICAgfSxcbiAgICBnZXRJbmZvOiAobm9kZSkgPT4ge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGNvbnN0IGlkID0gQ09NUE9ORU5ULmdldENvbXBvbmVudElkKG5vZGUpO1xuICAgICAgICBjb25zdCBtYXRjaFRva2VuID0gQ09ORklHLmdldEluZm9CeUlkKGlkKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coaWQsIG1hdGNoVG9rZW4sIG5vZGUpO1xuICAgICAgICBpZiAoIW1hdGNoVG9rZW4pIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIG1hdGNoVG9rZW4ucHJvcHMgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIENPTVBPTkVOVC5nZXRDb21wb25lbnRQcm9wcyhub2RlKSksIENPTVBPTkVOVC5nZXRDb21wb25lbnRQcm9wc0J5U3RyaW5nKG1hdGNoVG9rZW4ucHJvcHMgfHwgJycpKTtcbiAgICAgICAgLy8g55So5oi35rKh5pyJ5oyH5a6a6KGo56S66KaB5riy5p+TXG4gICAgICAgIGlmICghKCdyZW5kZXJDaGlsZHJlbicgaW4gbWF0Y2hUb2tlbikpIHtcbiAgICAgICAgICAgIG1hdGNoVG9rZW4ucmVuZGVyQ2hpbGRyZW4gPSAnMSc7XG4gICAgICAgIH1cbiAgICAgICAgLy8g55So5oi35rKh5pyJ5oyH5a6a6KGo56S66KaB5riy5p+TXG4gICAgICAgIGlmICghKCdyZW5kZXJXaWR0aCcgaW4gbWF0Y2hUb2tlbikpIHtcbiAgICAgICAgICAgIG1hdGNoVG9rZW4ucmVuZGVyV2lkdGggPSAnMCc7XG4gICAgICAgIH1cbiAgICAgICAgLy8g55So5oi35rKh5pyJ5oyH5a6a6KGo56S66KaB5riy5p+TXG4gICAgICAgIGlmICghKCdyZW5kZXJIZWlnaHQnIGluIG1hdGNoVG9rZW4pKSB7XG4gICAgICAgICAgICBtYXRjaFRva2VuLnJlbmRlckhlaWdodCA9ICcwJztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWF0Y2hUb2tlbjtcbiAgICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgQ09NUE9ORU5UO1xuIiwiaW1wb3J0IENPTVBPTkVOVCBmcm9tIFwiLi9DT01QT05FTlRcIjtcbmNvbnN0IFBST19ERUZBVUxUID0ge1xuICAgIG5hbWU6ICdkZWZhdWx0JyxcbiAgICBpZ25vcmVDbGFzc05hbWU6ICcnLFxuICAgIHRva2VuOiB7fVxufTtcbmNvbnN0IENPTkZJR19ERUZBVUxUID0ge1xuICAgIGN1cnJlbnRJbmRleDogMCxcbiAgICBpc0pTWDogZmFsc2UsXG4gICAgcHJvamVjdHM6IFtQUk9fREVGQVVMVF1cbn07XG5jb25zdCBDT05GSUcgPSB7XG4gICAga2V5OiAnU0FDU1MnLFxuICAgIHN0b3JlOiBDT05GSUdfREVGQVVMVCxcbiAgICBjaGFuZ2VDdXJyZW50OiAoaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3Qgc3RvcmUgPSBDT05GSUcuZ2V0QWxsKCk7XG4gICAgICAgIHN0b3JlLmN1cnJlbnRJbmRleCA9IGluZGV4O1xuICAgICAgICBmaWdtYS5jbGllbnRTdG9yYWdlLnNldEFzeW5jKENPTkZJRy5rZXksIHN0b3JlKTtcbiAgICB9LFxuICAgIGNoYW5nZUpTWDogKHZhbHVlKSA9PiB7XG4gICAgICAgIGNvbnN0IHN0b3JlID0gQ09ORklHLmdldEFsbCgpO1xuICAgICAgICAvLyDph43nva7lm57nrKzkuIDkuKpcbiAgICAgICAgc3RvcmUuaXNKU1ggPSB2YWx1ZTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coc3RvcmUpO1xuICAgICAgICBmaWdtYS5jbGllbnRTdG9yYWdlLnNldEFzeW5jKENPTkZJRy5rZXksIHN0b3JlKTtcbiAgICB9LFxuICAgIHJlbW92ZTogKGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IHN0b3JlID0gQ09ORklHLmdldEFsbCgpO1xuICAgICAgICAvLyDph43nva7lm57nrKzkuIDkuKpcbiAgICAgICAgc3RvcmUuY3VycmVudEluZGV4ID0gMDtcbiAgICAgICAgc3RvcmUucHJvamVjdHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgaWYgKCFzdG9yZS5wcm9qZWN0cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHN0b3JlLnByb2plY3RzLnB1c2goUFJPX0RFRkFVTFQpO1xuICAgICAgICB9XG4gICAgICAgIGZpZ21hLmNsaWVudFN0b3JhZ2Uuc2V0QXN5bmMoQ09ORklHLmtleSwgc3RvcmUpO1xuICAgIH0sXG4gICAgYWRkTmV3UHJvamVjdDogKHsgbmFtZSA9ICcnLCB0b2tlbiA9IHt9IH0gPSB7fSkgPT4ge1xuICAgICAgICBjb25zdCBzdG9yZSA9IENPTkZJRy5nZXRBbGwoKTtcbiAgICAgICAgc3RvcmUucHJvamVjdHMucHVzaCh7XG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgaWdub3JlQ2xhc3NOYW1lOiAnJyxcbiAgICAgICAgICAgIHRva2VuXG4gICAgICAgIH0pO1xuICAgICAgICBzdG9yZS5jdXJyZW50SW5kZXggPSBzdG9yZS5wcm9qZWN0cy5sZW5ndGggLSAxO1xuICAgICAgICBmaWdtYS5jbGllbnRTdG9yYWdlLnNldEFzeW5jKENPTkZJRy5rZXksIHN0b3JlKTtcbiAgICB9LFxuICAgIGVkaXRCeUluZGV4OiAoeyBkYXRhLCBpbmRleCB9KSA9PiB7XG4gICAgICAgIGNvbnN0IHN0b3JlID0gQ09ORklHLmdldEFsbCgpO1xuICAgICAgICBjb25zdCBjdXJyZW50ID0gc3RvcmUucHJvamVjdHNbaW5kZXhdO1xuICAgICAgICBzdG9yZS5wcm9qZWN0c1tpbmRleF0gPSB7XG4gICAgICAgICAgICBuYW1lOiBkYXRhLm5hbWUsXG4gICAgICAgICAgICBpZ25vcmVDbGFzc05hbWU6IGRhdGEuaWdub3JlQ2xhc3NOYW1lLFxuICAgICAgICAgICAgdG9rZW46IGRhdGEudG9rZW4gPyBkYXRhLnRva2VuIDogY3VycmVudC50b2tlblxuICAgICAgICB9O1xuICAgICAgICBmaWdtYS5jbGllbnRTdG9yYWdlLnNldEFzeW5jKENPTkZJRy5rZXksIHN0b3JlKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coc3RvcmUpO1xuICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBhbGVydE1zZzogYCR7ZGF0YS5uYW1lfSBzYXZlIHN1Y2Nlc3NgXG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgcmVwbGFjZUJ5SW5kZXg6ICh7IGRhdGEsIGluZGV4IH0pID0+IHtcbiAgICAgICAgY29uc3Qgc3RvcmUgPSBDT05GSUcuZ2V0QWxsKCk7XG4gICAgICAgIHN0b3JlLnByb2plY3RzW2luZGV4XSA9IGRhdGEgfHwge307XG4gICAgICAgIGZpZ21hLmNsaWVudFN0b3JhZ2Uuc2V0QXN5bmMoQ09ORklHLmtleSwgc3RvcmUpO1xuICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICBhbGVydE1zZzogYCR7ZGF0YS5uYW1lfSByZXBsYWNlIHN1Y2Nlc3NgXG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgYXBwZW5kVG9rZW46IChhcHBlbmRUb2tlbiA9IHt9KSA9PiB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnQgPSBDT05GSUcuZ2V0Q3VycmVudCgpO1xuICAgICAgICBjb25zdCB7IHRva2VuID0ge30gfSA9IGN1cnJlbnQ7XG4gICAgICAgIGN1cnJlbnQudG9rZW4gPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHRva2VuKSwgYXBwZW5kVG9rZW4pO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhhcHBlbmRUb2tlbiwgQ09ORklHLnN0b3JlKTtcbiAgICAgICAgZmlnbWEuY2xpZW50U3RvcmFnZS5zZXRBc3luYyhDT05GSUcua2V5LCBDT05GSUcuc3RvcmUpO1xuICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICBhbGVydE1zZzogYCR7Y3VycmVudC5uYW1lfSBzYXZlIHN1Y2Nlc3NgXG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgaXNKU1g6ICgpID0+IHtcbiAgICAgICAgcmV0dXJuICEhQ09ORklHLnN0b3JlLmlzSlNYO1xuICAgIH0sXG4gICAgZ2V0QWxsOiAoKSA9PiB7XG4gICAgICAgIHJldHVybiBDT05GSUcuc3RvcmU7XG4gICAgfSxcbiAgICBpbml0OiAoKSA9PiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgZmlnbWEuY2xpZW50U3RvcmFnZS5nZXRBc3luYyhDT05GSUcua2V5KS50aGVuKChyZXQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmV0ICYmIHJldC5wcm9qZWN0cyAmJiByZXQucHJvamVjdHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIENPTkZJRy5zdG9yZSA9IHJldDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIOayoeaciee8k+WtmOWIm+W7uuS4gOS4quaWsOeahFxuICAgICAgICAgICAgICAgICAgICBmaWdtYS5jbGllbnRTdG9yYWdlLnNldEFzeW5jKENPTkZJRy5rZXksIENPTkZJR19ERUZBVUxUKTtcbiAgICAgICAgICAgICAgICAgICAgQ09ORklHLnN0b3JlID0gQ09ORklHX0RFRkFVTFQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlc29sdmUoQ09ORklHLmdldFRva2VuKCkpO1xuICAgICAgICAgICAgfSkuY2F0Y2gocmVqZWN0KTtcbiAgICAgICAgfSkpO1xuICAgIH0sXG4gICAgZ2V0Q3VycmVudDogKCkgPT4ge1xuICAgICAgICBjb25zdCBjdXJyZW50SW5kZXggPSBDT05GSUcuc3RvcmUuY3VycmVudEluZGV4O1xuICAgICAgICBjb25zdCBjdXJyZW50ID0gQ09ORklHLnN0b3JlLnByb2plY3RzW2N1cnJlbnRJbmRleF07XG4gICAgICAgIHJldHVybiBjdXJyZW50O1xuICAgIH0sXG4gICAgZ2V0VG9rZW46ICgpID0+IHtcbiAgICAgICAgY29uc3QgeyB0b2tlbiA9IG51bGwgfSA9IENPTkZJRy5nZXRDdXJyZW50KCkgfHwge307XG4gICAgICAgIHJldHVybiB0b2tlbiA/IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodG9rZW4pKSA6IG51bGw7XG4gICAgfSxcbiAgICBnZXRJbmZvQnlJZDogKGlkID0gJycpID0+IHtcbiAgICAgICAgaWYgKCFpZCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdG9rZW5Db25maWcgPSBDT05GSUcuZ2V0VG9rZW4oKSB8fCB7fTtcbiAgICAgICAgLy8g5aaC5p6c5pyJ6Ieq5a6a5LmJ55So6Ieq5a6a5LmJ55qEXG4gICAgICAgIHJldHVybiB0b2tlbkNvbmZpZ1tpZF07XG4gICAgfSxcbiAgICBnZXRTZWxlY3Rpb25Ub2tlbnM6IChzZWxlY3Rpb24pID0+IHtcbiAgICAgICAgY29uc3QgeyBuYW1lID0gJycsIHRva2VuID0ge30gfSA9IENPTkZJRy5nZXRDdXJyZW50KCkgfHwge307XG4gICAgICAgIGlmICghc2VsZWN0aW9uKSB7XG4gICAgICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICAgICAgZ2V0U2VsZWN0aW9uSW5mbzoge1xuICAgICAgICAgICAgICAgICAgICBuYW1lXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbWF0Y2hUb2tlbiA9IHt9O1xuICAgICAgICAvLyDlpoLmnpzmmK/nu4Tku7bliJnkuI3pnIDopoHmmL7npLrku7vkvZXlhbblroPnmoTlsZ7mgKdcbiAgICAgICAgaWYgKENPTVBPTkVOVC5pc0NvbXBvbmVudChzZWxlY3Rpb24pKSB7XG4gICAgICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgICAgIGNvbnN0IHsgaWQsIG5hbWUsIHR5cGUgfSA9IENPTVBPTkVOVC5nZXRNYWluQ29tcG9uZW50KHNlbGVjdGlvbik7XG4gICAgICAgICAgICBjb25zdCBmaW5kVG9rZW4gPSB0b2tlbltpZF0gfHwge307XG4gICAgICAgICAgICBtYXRjaFRva2VuW2lkXSA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZmluZFRva2VuKSwgeyBuYW1lLFxuICAgICAgICAgICAgICAgIHR5cGUgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgIFtzZWxlY3Rpb24uZmlsbFN0eWxlSWQsIHNlbGVjdGlvbi50ZXh0U3R5bGVJZCwgc2VsZWN0aW9uLnN0cm9rZVN0eWxlSWQsIHNlbGVjdGlvbi5lZmZlY3RTdHlsZUlkLCBzZWxlY3Rpb24uZ3JpZFN0eWxlSWRdLmZvckVhY2goKGl0ZW0sIGtleSkgPT4ge1xuICAgICAgICAgICAgaWYgKCFpdGVtKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgeyBpZCwgbmFtZSwgdHlwZSB9ID0gZmlnbWEuZ2V0U3R5bGVCeUlkKGl0ZW0pIHx8IHt9O1xuICAgICAgICAgICAgaWYgKCFpZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1hdGNoVG9rZW5baWRdID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCB0b2tlbltpZF0pLCB7IG5hbWUsXG4gICAgICAgICAgICAgICAgdHlwZSB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgIGdldFNlbGVjdGlvbkluZm86IHtcbiAgICAgICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgICAgIHRva2VuOiBtYXRjaFRva2VuXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICog6I635Y+W5omA5pyJ55qEIFRva2VuIOWMheaLrCBDb21wb25lbnRcbiAgICAgKi9cbiAgICBnZXRBbGxUb2tlbnM6ICgpID0+IHtcbiAgICAgICAgY29uc3QgbmFtZSA9IGZpZ21hLnJvb3QubmFtZTtcbiAgICAgICAgY29uc3QgY29tcG9uZW50cyA9IGZpZ21hLnJvb3QuZmluZEFsbChjID0+IHtcbiAgICAgICAgICAgIGlmIChjLnR5cGUgPT09ICdDT01QT05FTlRfU0VUJykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGMudHlwZSAhPT0gJ0NPTVBPTkVOVCcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYy5wYXJlbnQudHlwZSA9PT0gJ0NPTVBPTkVOVF9TRVQnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCB0b2tlbiA9IHt9O1xuICAgICAgICBjb25zdCBhZGRDb25maWcgPSAoZGF0YSA9IFtdKSA9PiB7XG4gICAgICAgICAgICBkYXRhLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICB0b2tlbltpdGVtLmlkXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogaXRlbS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBpdGVtLnR5cGVcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGFkZENvbmZpZyhjb21wb25lbnRzKTtcbiAgICAgICAgYWRkQ29uZmlnKGZpZ21hLmdldExvY2FsUGFpbnRTdHlsZXMoKSk7XG4gICAgICAgIGFkZENvbmZpZyhmaWdtYS5nZXRMb2NhbFRleHRTdHlsZXMoKSk7XG4gICAgICAgIGFkZENvbmZpZyhmaWdtYS5nZXRMb2NhbEVmZmVjdFN0eWxlcygpKTtcbiAgICAgICAgYWRkQ29uZmlnKGZpZ21hLmdldExvY2FsR3JpZFN0eWxlcygpKTtcbiAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgZ290QWxsVG9rZW5zOiB7XG4gICAgICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgICAgICBpZ25vcmVDbGFzc05hbWU6ICcnLFxuICAgICAgICAgICAgICAgIHRva2VuXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5leHBvcnQgZGVmYXVsdCBDT05GSUc7XG4iLCJ2YXIgX19yZXN0ID0gKHRoaXMgJiYgdGhpcy5fX3Jlc3QpIHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gICAgdmFyIHQgPSB7fTtcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcbiAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XG4gICAgICAgIH1cbiAgICByZXR1cm4gdDtcbn07XG5pbXBvcnQgQ09NUE9ORU5UIGZyb20gXCIuL0NPTVBPTkVOVFwiO1xuaW1wb3J0IEZJTEwgZnJvbSBcIi4vdG9rZW4vRklMTFwiO1xuaW1wb3J0IFRFWFQgZnJvbSBcIi4vdG9rZW4vVEVYVFwiO1xuaW1wb3J0IFNUUk9LRSBmcm9tIFwiLi90b2tlbi9TVFJPS0VcIjtcbmltcG9ydCBHUklEIGZyb20gXCIuL3Rva2VuL0dSSURcIjtcbmltcG9ydCBGTEVYIGZyb20gXCIuL3Rva2VuL0ZMRVhcIjtcbmltcG9ydCBTQUNTUyBmcm9tIFwiLi9TQUNTU1wiO1xuaW1wb3J0IFVUSUxTIGZyb20gXCIuL1VUSUxTXCI7XG5pbXBvcnQgRUZGRUNUIGZyb20gXCIuL3Rva2VuL0VGRkVDVFwiO1xuaW1wb3J0IE9USEVSUyBmcm9tIFwiLi90b2tlbi9PVEhFUlNcIjtcbmltcG9ydCBDT05GSUcgZnJvbSBcIi4vQ09ORklHXCI7XG5jb25zdCBOT0RFID0ge1xuICAgIC8qKlxuICAgICAqIOWQiOW5tuS4pOS4qmluZm9cbiAgICAgKiBAcGFyYW0gYVxuICAgICAqIEBwYXJhbSBiXG4gICAgICovXG4gICAgZXh0ZW5kSW5mbzogKGEsIGIpID0+IHtcbiAgICAgICAgaWYgKCFiKSB7XG4gICAgICAgICAgICByZXR1cm4gYTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IGNsYXNzTmFtZTogY2xhc3NOYW1lQSA9ICcnLCBpZ25vcmVDbGFzc05hbWU6IGlnbm9yZUNsYXNzTmFtZUEgPSAnJywgcHJvcHM6IHByb3BzQSA9IHt9IH0gPSBhLCByZXN0QSA9IF9fcmVzdChhLCBbXCJjbGFzc05hbWVcIiwgXCJpZ25vcmVDbGFzc05hbWVcIiwgXCJwcm9wc1wiXSk7XG4gICAgICAgIGNvbnN0IHsgY2xhc3NOYW1lOiBjbGFzc05hbWVCID0gJycsIGlnbm9yZUNsYXNzTmFtZTogaWdub3JlQ2xhc3NOYW1lQiA9ICcnLCBwcm9wczogcHJvcHNCID0ge30sIGNoaWxkcmVuIH0gPSBiLCByZXN0QiA9IF9fcmVzdChiLCBbXCJjbGFzc05hbWVcIiwgXCJpZ25vcmVDbGFzc05hbWVcIiwgXCJwcm9wc1wiLCBcImNoaWxkcmVuXCJdKTtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7IHByb3BzOiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHByb3BzQSksIHByb3BzQiksIGNsYXNzTmFtZTogYCR7Y2xhc3NOYW1lQX0gJHtjbGFzc05hbWVCfWAsIGlnbm9yZUNsYXNzTmFtZTogYCR7aWdub3JlQ2xhc3NOYW1lQX0gJHtpZ25vcmVDbGFzc05hbWVCfWAgfSwgcmVzdEEpLCByZXN0Qik7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiDlpoLmnpzkuIDkuKrlhYPntKDlhoXpg6jlj6rmnInlh6DkvZXlm77lvaLvvIzpgqPkuYjlj6rmmL7npLrlhbbnu5PmnoRcbiAgICAgKi9cbiAgICBpc1N0cnVjdE5vZGU6IChub2RlKSA9PiB7XG4gICAgICAgIC8vIOS7pSPlj7flvIDlpLRcbiAgICAgICAgaWYgKG5vZGUubmFtZS5zdGFydHNXaXRoKFwiI1wiKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeWVzVHlwZXMgPSBbJ1JFQ1RBTkdMRScsICdWRUNUT1InLCAnU1RBUicsICdMSU5FJywgJ1BPTFlHT04nLCAnRUxMSVBTRScsICdTTElDRSddO1xuICAgICAgICAvLyDlpoLmnpzmnKzouqvlsLHmmK/ov5nkupvlhYPntKDpgqPkuYjkuZ/mmK/nm7TmjqXovpPlh7pcbiAgICAgICAgaWYgKHllc1R5cGVzLmluZGV4T2Yobm9kZS50eXBlKSA+IC0xKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobm9kZS50eXBlID09PSAnVEVYVCcpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGNvbnN0IHsgY2hpbGRyZW4gPSBbXSB9ID0gbm9kZTtcbiAgICAgICAgaWYgKCFjaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIOaJvuWIsOS6huS4jeWQiOazleWFg+e0oO+8iOS4jeWcqOS4iumdoueahOWHoOS9leWIl+ihqOmHjOmdou+8iVxuICAgICAgICBjb25zdCBnb3RObyA9IGNoaWxkcmVuLmZpbmQoKGl0ZW0pID0+IGl0ZW0udmlzaWJsZSAmJiB5ZXNUeXBlcy5pbmRleE9mKGl0ZW0udHlwZSkgPT09IC0xKTtcbiAgICAgICAgcmV0dXJuICFnb3RObztcbiAgICB9LFxuICAgIGlzUmVuZGVyQ2hpbGRyZW46IChub2RlKSA9PiB7XG4gICAgICAgIGlmICghKG5vZGUudHlwZSA9PT0gJ0lOU1RBTkNFJyB8fCBub2RlLnR5cGUgPT09ICdDT01QT05FTlQnKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIOWPquacieS4gOS4quWtkOWFg+e0oFxuICAgICAgICBpZiAobm9kZS5jaGlsZHJlbi5sZW5ndGggIT09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBjb25zdCBvbmx5Q2hpbGRyZW4gPSBub2RlLmNoaWxkcmVuWzBdO1xuICAgICAgICAvLyBpZiAob25seUNoaWxkcmVuLnR5cGUgPT09ICdJTlNUQU5DRScpIHtcbiAgICAgICAgLy8gICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgLy8gfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSxcbiAgICBnZXROb2RlSW5mbzogKG5vZGUpID0+IHtcbiAgICAgICAgaWYgKCFub2RlLnZpc2libGUgfHwgbm9kZS5uYW1lLnN0YXJ0c1dpdGgoXCJfXCIpKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICAvLyDnm7TmjqXmuLLmn5PlrZDlhYPntKBcbiAgICAgICAgaWYgKE5PREUuaXNSZW5kZXJDaGlsZHJlbihub2RlKSkge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZTtcbiAgICAgICAgICAgIHJldHVybiBOT0RFLmdldE5vZGVJbmZvKG5vZGUuY2hpbGRyZW5bMF0pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGlzU3RydWN0Tm9kZSA9IE5PREUuaXNTdHJ1Y3ROb2RlKG5vZGUpO1xuICAgICAgICBsZXQgbm9kZUluZm8gPSB7XG4gICAgICAgICAgICBpZ25vcmVDbGFzc05hbWU6ICcnLFxuICAgICAgICAgICAgY2xhc3NOYW1lOiAnJyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXVxuICAgICAgICB9O1xuICAgICAgICBpZiAoaXNTdHJ1Y3ROb2RlKSB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBub2RlSW5mby50YWdOYW1lID0gJ2knO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IENPTVBPTkVOVC5nZXRJbmZvKG5vZGUpO1xuICAgICAgICBjb25zdCBmaWxsID0gRklMTC5nZXRJbmZvKG5vZGUpO1xuICAgICAgICBjb25zdCB0ZXh0ID0gVEVYVC5nZXRJbmZvKG5vZGUpO1xuICAgICAgICBjb25zdCBzdHJva2UgPSBTVFJPS0UuZ2V0SW5mbyhub2RlKTtcbiAgICAgICAgY29uc3QgZ3JpZCA9IEdSSUQuZ2V0SW5mbyhub2RlKTtcbiAgICAgICAgY29uc3QgZWZmZWN0ID0gRUZGRUNULmdldEluZm8obm9kZSk7XG4gICAgICAgIGNvbnN0IG90aGVycyA9IE9USEVSUy5nZXRJbmZvKG5vZGUpO1xuICAgICAgICBjb25zdCBmbGV4ID0gRkxFWC5nZXRJbmZvKG5vZGUpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh7Y29tcG9uZW50LCBmaWxsLCB0ZXh0LCBzdHJva2UsIGdyaWQsIGVmZmVjdH0pO1xuICAgICAgICBub2RlSW5mbyA9IE5PREUuZXh0ZW5kSW5mbyhub2RlSW5mbywgZmlsbCk7XG4gICAgICAgIG5vZGVJbmZvID0gTk9ERS5leHRlbmRJbmZvKG5vZGVJbmZvLCB0ZXh0KTtcbiAgICAgICAgbm9kZUluZm8gPSBOT0RFLmV4dGVuZEluZm8obm9kZUluZm8sIHN0cm9rZSk7XG4gICAgICAgIG5vZGVJbmZvID0gTk9ERS5leHRlbmRJbmZvKG5vZGVJbmZvLCBncmlkKTtcbiAgICAgICAgbm9kZUluZm8gPSBOT0RFLmV4dGVuZEluZm8obm9kZUluZm8sIGVmZmVjdCk7XG4gICAgICAgIG5vZGVJbmZvID0gTk9ERS5leHRlbmRJbmZvKG5vZGVJbmZvLCBjb21wb25lbnQpO1xuICAgICAgICBub2RlSW5mbyA9IE5PREUuZXh0ZW5kSW5mbyhub2RlSW5mbywgZmxleCk7XG4gICAgICAgIG5vZGVJbmZvID0gTk9ERS5leHRlbmRJbmZvKG5vZGVJbmZvLCBvdGhlcnMpO1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGlmIChpc1N0cnVjdE5vZGUgfHwgU3RyaW5nKG5vZGVJbmZvID09PSBudWxsIHx8IG5vZGVJbmZvID09PSB2b2lkIDAgPyB2b2lkIDAgOiBub2RlSW5mby5yZW5kZXJXaWR0aCkgPT09ICcxJykge1xuICAgICAgICAgICAgbm9kZUluZm8uY2xhc3NOYW1lICs9ICcgJyArIFNBQ1NTLmFkZCgndycsIHBhcnNlSW50KFN0cmluZyhub2RlLndpZHRoKSkpO1xuICAgICAgICB9XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgaWYgKGlzU3RydWN0Tm9kZSB8fCBTdHJpbmcobm9kZUluZm8gPT09IG51bGwgfHwgbm9kZUluZm8gPT09IHZvaWQgMCA/IHZvaWQgMCA6IG5vZGVJbmZvLnJlbmRlckhlaWdodCkgPT09ICcxJykge1xuICAgICAgICAgICAgbm9kZUluZm8uY2xhc3NOYW1lICs9ICcgJyArIFNBQ1NTLmFkZCgnaCcsIHBhcnNlSW50KFN0cmluZyhub2RlLmhlaWdodCkpKTtcbiAgICAgICAgfVxuICAgICAgICBub2RlSW5mby5jaGlsZHJlbiA9ICgoKSA9PiB7XG4gICAgICAgICAgICBpZiAobm9kZS50eXBlID09PSAnVEVYVCcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gVEVYVC5nZXRUZXh0Q2hpbGRyZW4obm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB7IHJlbmRlckNoaWxkcmVuID0gMSB9ID0gY29tcG9uZW50IHx8IHt9O1xuICAgICAgICAgICAgaWYgKGlzU3RydWN0Tm9kZSB8fCBTdHJpbmcocmVuZGVyQ2hpbGRyZW4pID09PSAnMCcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyDmuLLmn5PlrZDoioLngrlcbiAgICAgICAgICAgIGlmIChTdHJpbmcocmVuZGVyQ2hpbGRyZW4pID09PSAnMicpIHtcbiAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5vZGUuZmluZEFsbChjID0+IGMudHlwZSA9PT0gJ1RFWFQnKS5tYXAoKGMpID0+IGMuY2hhcmFjdGVycyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICByZXR1cm4gTk9ERS5nZXROb2Rlc0luZm8obm9kZS5jaGlsZHJlbik7XG4gICAgICAgIH0pKCk7XG4gICAgICAgIC8vIOaVtOS4qumhueebrumDveW/veeVpeeahCBjbGFzc05hbWVcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBjb25zdCB7IGlnbm9yZUNsYXNzTmFtZSA9ICcnIH0gPSBDT05GSUcuZ2V0Q3VycmVudCgpIHx8IHt9O1xuICAgICAgICBub2RlSW5mby5jbGFzc05hbWUgPSBVVElMUy5jbGVhckNsYXNzTmFtZShub2RlSW5mby5jbGFzc05hbWUsIGAke25vZGVJbmZvLmlnbm9yZUNsYXNzTmFtZX0gJHtpZ25vcmVDbGFzc05hbWV9YCk7XG4gICAgICAgIGRlbGV0ZSBub2RlSW5mby5pZ25vcmVDbGFzc05hbWU7XG4gICAgICAgIC8vIOWHj+WwkeW1jOWll1xuICAgICAgICBpZiAobm9kZUluZm8uY2hpbGRyZW4ubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICBjb25zdCBjaGlsZHJlbkluZm8gPSBub2RlSW5mby5jaGlsZHJlblswXTtcbiAgICAgICAgICAgIC8vIOWmguaenOeItuWFg+e0oOWSjOWtkOWFg+e0oCB0YWdOYW1lIOebuOWQjOWQiOW5tiBjbGFzc05hbWVcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIGlmIChjaGlsZHJlbkluZm8udGFnTmFtZSA9PT0gbm9kZUluZm8udGFnTmFtZSAmJiAhbm9kZUluZm8uY29tcG9uZW50TmFtZSAmJiAhY2hpbGRyZW5JbmZvLmNvbXBvbmVudE5hbWUpIHtcbiAgICAgICAgICAgICAgICBjaGlsZHJlbkluZm8uY2xhc3NOYW1lID0gVVRJTFMuY2xlYXJDbGFzc05hbWUoYCR7Y2hpbGRyZW5JbmZvLmNsYXNzTmFtZX0gJHtub2RlSW5mby5jbGFzc05hbWV9YCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNoaWxkcmVuSW5mbztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhub2RlSW5mbyk7XG4gICAgICAgIHJldHVybiBub2RlSW5mbztcbiAgICB9LFxuICAgIHNvcnQ6IChub2RlcyA9IFtdKSA9PiB7XG4gICAgICAgIHJldHVybiBbLi4ubm9kZXNdLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgIGlmIChhLnkgPT09IGIueSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBhLnggLSBiLng7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYS55IC0gYi55O1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIGdldE5vZGVzSW5mbzogKG5vZGVzID0gW10pID0+IHtcbiAgICAgICAgbGV0IGluZm8gPSBbXTtcbiAgICAgICAgLy8g6ZyA6KaB5o6S5bqP5LiA5LiLXG4gICAgICAgIGNvbnN0IHNvcnROb2RlcyA9IE5PREUuc29ydChub2Rlcyk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBzb3J0Tm9kZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IG5vZGVJbmZvID0gTk9ERS5nZXROb2RlSW5mbyhzb3J0Tm9kZXNbaV0pO1xuICAgICAgICAgICAgaWYgKCFub2RlSW5mbykge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG5vZGVJbmZvIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgICAgICBpbmZvID0gWy4uLmluZm8sIC4uLm5vZGVJbmZvXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGluZm8ucHVzaChub2RlSW5mbyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IE5PREU7XG4iLCJjb25zdCBTQUNTUyA9IHtcbiAgICBkYXRhOiB7fSxcbiAgICBpbml0OiAoKSA9PiB7XG4gICAgICAgIFNBQ1NTLmRhdGEgPSB7fTtcbiAgICB9LFxuICAgIG5hbWVNYXA6IHtcbiAgICAgICAgJ2ZzJzogJ2ZvbnQtc2l6ZScsXG4gICAgICAgICdsaCc6ICdsaW5lLWhlaWdodCcsXG4gICAgICAgICdscyc6ICdsZXR0ZXItc3BhY2UnLFxuICAgICAgICAnZmYnOiAnZm9udC1mYW1pbHknLFxuICAgICAgICAncHQnOiAncGFkZGluZy10b3AnLFxuICAgICAgICAncHInOiAncGFkZGluZy1yaWdodCcsXG4gICAgICAgICdwYic6ICdwYWRkaW5nLWJvdHRvbScsXG4gICAgICAgICdwbCc6ICdwYWRkaW5nLWxlZnQnLFxuICAgICAgICAnbXQnOiAnbWFyZ2luLXRvcCcsXG4gICAgICAgICdtcic6ICdtYXJnaW4tcmlnaHQnLFxuICAgICAgICAnbWInOiAnbWFyZ2luLWJvdHRvbScsXG4gICAgICAgICdtbCc6ICdtYXJnaW4tbGVmdCcsXG4gICAgICAgICdoJzogJ2hlaWdodCcsXG4gICAgICAgICd3JzogJ3dpZHRoJyxcbiAgICAgICAgJ2J0bHInOiAnYm9yZGVyLXRvcC1sZWZ0LXJhZGl1cycsXG4gICAgICAgICdidHJyJzogJ2JvcmRlci10b3AtcmlnaHQtcmFkaXVzJyxcbiAgICAgICAgJ2JicnInOiAnYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXMnLFxuICAgICAgICAnYmJscic6ICdib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzJyxcbiAgICAgICAgJ2JyJzogJ2JvcmRlci1yYWRpdXMnXG4gICAgfSxcbiAgICBnZXRDbGFzc1NlbGVjdG9yQnlOYW1lOiAoY2xhc3NOYW1lID0gJycpID0+IHtcbiAgICAgICAgaWYgKGNsYXNzTmFtZS5pbmRleE9mKCcuJykgPiAtMSkge1xuICAgICAgICAgICAgY2xhc3NOYW1lID0gY2xhc3NOYW1lLnJlcGxhY2UoL1xcLi9nLCAnXFxcXC4nKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2xhc3NOYW1lLmluZGV4T2YoJzonKSA+IC0xKSB7XG4gICAgICAgICAgICBjbGFzc05hbWUgPSBjbGFzc05hbWUucmVwbGFjZSgvXFw6L2csICdcXFxcOicpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjbGFzc05hbWUuaW5kZXhPZignJScpID4gLTEpIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IGNsYXNzTmFtZS5yZXBsYWNlKC9cXCUvZywgJ1xcXFwlJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNsYXNzTmFtZTtcbiAgICB9LFxuICAgIGdldFN0cmluZzogKCkgPT4ge1xuICAgICAgICBjb25zdCBkYXRhID0gU0FDU1MuZGF0YTtcbiAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGRhdGEpLnNvcnQoKTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0ga2V5cy5tYXAoKG5hbWUpID0+IGAuJHtTQUNTUy5nZXRDbGFzc1NlbGVjdG9yQnlOYW1lKG5hbWUpfXske2RhdGFbbmFtZV19O31gKS5qb2luKCdcXG4nKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9LFxuICAgIGFkZDogKG5hbWUgPSAnJywgdmFsdWUsIHVuaXQgPSAncHgnKSA9PiB7XG4gICAgICAgIGlmICghbmFtZSB8fCAhdmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwcm9wTmFtZSA9IFNBQ1NTLm5hbWVNYXBbbmFtZV07XG4gICAgICAgIGlmICghcHJvcE5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuICAgICAgICAvLyDlj6rkv53nlZnkuKTkvY3lsI/mlbBcbiAgICAgICAgY29uc3QgdXNlVmFsdWUgPSBOdW1iZXIodmFsdWUpID8gcGFyc2VGbG9hdChOdW1iZXIodmFsdWUpLnRvRml4ZWQoMikpIDogdmFsdWU7XG4gICAgICAgIC8vIOWmguaenOaYryBweCDkuI3pnIDopoHmuLLmn5NcbiAgICAgICAgY29uc3QgY2xhc3NVbml0ID0gdW5pdCA9PT0gJ3B4JyA/ICcnIDogdW5pdDtcbiAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gYCR7bmFtZX0ke3VzZVZhbHVlfSR7Y2xhc3NVbml0fWA7XG4gICAgICAgIFNBQ1NTLmRhdGFbY2xhc3NOYW1lXSA9IGAke3Byb3BOYW1lfToke3VzZVZhbHVlfSR7dW5pdH1gO1xuICAgICAgICByZXR1cm4gY2xhc3NOYW1lO1xuICAgIH0sXG4gICAgYWRkRm9udEZhbWlseTogKHZhbHVlKSA9PiB7XG4gICAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB2YWx1ZU9rID0gdmFsdWUucmVwbGFjZSgvW1xcV10vZywgJycpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IGBmZjoke3ZhbHVlT2t9YDtcbiAgICAgICAgU0FDU1MuZGF0YVtjbGFzc05hbWVdID0gYGZvbnQtZmFtaWx5OlwiJHt2YWx1ZX1cImA7XG4gICAgICAgIHJldHVybiBjbGFzc05hbWU7XG4gICAgfSxcbiAgICBhZGRDb2xvcjogKHJnYmEgPSBbXSkgPT4ge1xuICAgICAgICBpZiAoIXJnYmEgJiYgcmdiYS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBgYzoke3JnYmEuam9pbignJyl9YDtcbiAgICAgICAgU0FDU1MuZGF0YVtjbGFzc05hbWVdID0gYGNvbG9yOnJnYmEoJHtyZ2JhLmpvaW4oJywnKX0pYDtcbiAgICAgICAgcmV0dXJuIGNsYXNzTmFtZTtcbiAgICB9LFxuICAgIGFkZEJnQ29sb3I6IChyZ2JhID0gW10pID0+IHtcbiAgICAgICAgaWYgKCFyZ2JhICYmIHJnYmEubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gYGJjOiR7cmdiYS5qb2luKCcnKX1gO1xuICAgICAgICBTQUNTUy5kYXRhW2NsYXNzTmFtZV0gPSBgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKCR7cmdiYS5qb2luKCcsJyl9KWA7XG4gICAgICAgIHJldHVybiBjbGFzc05hbWU7XG4gICAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IFNBQ1NTO1xuIiwiY29uc3QgVVRJTFMgPSB7XG4gICAgaXNCbG9jazogKHRhZ05hbWUgPSAnJykgPT4ge1xuICAgICAgICBjb25zdCBibG9ja1RhZyA9IFsnZGl2JywgJ2gxJywgJ2gyJywgJ2gzJywgJ2g0JywgJ2g1JywgJ2g2JywgJ3AnXTtcbiAgICAgICAgcmV0dXJuIGJsb2NrVGFnLmluZGV4T2YodGFnTmFtZSkgPiAtMTtcbiAgICB9LFxuICAgIGlzU2VsZlRhZzogKHRhZ05hbWUgPSAnJykgPT4ge1xuICAgICAgICBjb25zdCBzZWxmVGFnID0gWydpbWcnLCAnbGluaycsICdtZXRhJywgJ2JyJywgJ2JyJywgJ2hyJywgJ2lucHV0JywgJ2NvbCcsICdmcmFtZScsICdhcmVhJywgJ3BhcmFtJywgJ29iamVjdCcsICdlbWJlZCcsICdrZXlnZW4nLCAnc291cmNlJ107XG4gICAgICAgIHJldHVybiBzZWxmVGFnLmluZGV4T2YodGFnTmFtZSkgPiAtMTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIOWOu+mHjeWSjOWOu+epulxuICAgICAqIEBwYXJhbSBhcnJTdHJcbiAgICAgKi9cbiAgICBjbGVhckNsYXNzTmFtZTogKGNsYXNzTmFtZSA9ICcnLCBpZ25vcmVDbGFzc05hbWUgPSAnJykgPT4ge1xuICAgICAgICBpZiAoIWNsYXNzTmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZXMgPSBjbGFzc05hbWUuc3BsaXQoJyAnKTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgICAgIGNsYXNzTmFtZXMuZm9yRWFjaCgoaXRlbSA9ICcnKSA9PiB7XG4gICAgICAgICAgICBpZiAoaXRlbSAmJiBpdGVtICE9PSAnbnVsbCcgJiYgcmVzdWx0LmluZGV4T2YoaXRlbSkgPT09IC0xICYmIGlnbm9yZUNsYXNzTmFtZS5pbmRleE9mKGl0ZW0pID09PSAtMSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGl0ZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdC5qb2luKCcgJyk7XG4gICAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IFVUSUxTO1xuIiwiaW1wb3J0IEhUTUwgZnJvbSBcIi4vSFRNTFwiO1xuaW1wb3J0IEpTWCBmcm9tIFwiLi9KU1hcIjtcbmNvbnN0IERPTSA9IHtcbiAgICByZW5kZXI6IChvYmogPSBbXSwgaXNKU1gpID0+IHtcbiAgICAgICAgaWYgKGlzSlNYKSB7XG4gICAgICAgICAgICByZXR1cm4gSlNYLmdldERvbUJ5QXJyYXkob2JqKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gSFRNTC5nZXREb21CeUFycmF5KG9iaik7XG4gICAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IERPTTtcbiIsInZhciBfX3Jlc3QgPSAodGhpcyAmJiB0aGlzLl9fcmVzdCkgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgICB2YXIgdCA9IHt9O1xuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxuICAgICAgICB0W3BdID0gc1twXTtcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcbiAgICAgICAgfVxuICAgIHJldHVybiB0O1xufTtcbmltcG9ydCBVVElMUyBmcm9tIFwiLi4vVVRJTFNcIjtcbi8vIGxlZ2FsIOWQiOazleWxnuaAp1xuY29uc3QgbGVnYWxQcm9wID0gWydjbGFzcycsICd0eXBlJywgJ25hbWUnLCAncm9sZScsICdkaXNhYmxlZCcsICdpZCcsICd0aXRsZScsICdsYW5nJywgJ2RpcicsICd0YWJpbmRleCcsICdhY2Nlc3NrZXknLCAnc3JjJywgJ2hyZWYnLCAnc3R5bGUnLCAnYXJpYS1oaWRkZW4nLCAndGFyZ2V0JywgJ3JlbCddO1xuY29uc3QgSFRNTCA9IHtcbiAgICBnZXRQcm9wc1N0cmluZzogKF9hID0ge30pID0+IHtcbiAgICAgICAgdmFyIHsgY2xhc3NOYW1lID0gJycgfSA9IF9hLCBwcm9wcyA9IF9fcmVzdChfYSwgW1wiY2xhc3NOYW1lXCJdKTtcbiAgICAgICAgY29uc3QgYXJyUHJvcHMgPSBbXTtcbiAgICAgICAgY29uc3QgY2xhc3NOYW1lcyA9IGNsYXNzTmFtZS5zcGxpdCgnICcpO1xuICAgICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhwcm9wcykpIHtcbiAgICAgICAgICAgIGNvbnN0IHN0clZhbHVlID0gU3RyaW5nKHZhbHVlKTtcbiAgICAgICAgICAgIGlmIChzdHJWYWx1ZSA9PT0gJycgfHwgc3RyVmFsdWUgPT09ICdmYWxzZScpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChrZXkuc3RhcnRzV2l0aCgnZGF0YS0nKSkge1xuICAgICAgICAgICAgICAgIGFyclByb3BzLnB1c2goYCR7a2V5fT1cIiR7c3RyVmFsdWV9XCJgKTtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChsZWdhbFByb3AuaW5kZXhPZihrZXkpID4gLTEpIHtcbiAgICAgICAgICAgICAgICBhcnJQcm9wcy5wdXNoKGAke2tleX09XCIke3N0clZhbHVlfVwiYCk7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChzdHJWYWx1ZSA9PT0gJ3RydWUnKSB7XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lcy5wdXNoKGBfJHtrZXl9YCk7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNsYXNzTmFtZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBhcnJQcm9wcy5wdXNoKGBjbGFzcz1cIiR7Y2xhc3NOYW1lcy5qb2luKCcgJyl9XCJgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXJyUHJvcHMuam9pbignICcpO1xuICAgIH0sXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGdldEl0ZW1Eb206IChpdGVtKSA9PiB7XG4gICAgICAgIGlmICghaXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgY2hpbGRyZW4gPSBbXSwgcHJvcHMgPSB7fSwgY2xhc3NOYW1lID0gJycgfSA9IGl0ZW07XG4gICAgICAgIGNvbnN0IHRhZ05hbWUgPSBpdGVtLnRhZ05hbWUgfHwgJ2Rpdic7XG4gICAgICAgIGNvbnN0IHByb3BzU3RyaW5nID0gSFRNTC5nZXRQcm9wc1N0cmluZyhPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHByb3BzKSwgeyBjbGFzc05hbWUgfSkpO1xuICAgICAgICBjb25zdCB0YWdTdGFydCA9IGAke3RhZ05hbWV9JHtwcm9wc1N0cmluZyA/IGAgJHtwcm9wc1N0cmluZ31gIDogJyd9YDtcbiAgICAgICAgaWYgKFVUSUxTLmlzU2VsZlRhZyh0YWdOYW1lKSkge1xuICAgICAgICAgICAgcmV0dXJuIGA8JHt0YWdTdGFydH0vPmA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFjaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBgPCR7dGFnU3RhcnR9PjwvJHt0YWdOYW1lfT5gO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBgPCR7dGFnU3RhcnR9PiR7SFRNTC5nZXREb21CeUFycmF5KGNoaWxkcmVuKX08LyR7dGFnTmFtZX0+YDtcbiAgICB9LFxuICAgIGdldERvbUJ5QXJyYXk6IChvYmogPSBbXSkgPT4ge1xuICAgICAgICByZXR1cm4gb2JqLm1hcCgoaXRlbSkgPT4gSFRNTC5nZXRJdGVtRG9tKGl0ZW0pKS5qb2luKCcnKTtcbiAgICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgSFRNTDtcbiIsImltcG9ydCBVVElMUyBmcm9tIFwiLi4vVVRJTFNcIjtcbmNvbnN0IEpTWCA9IHtcbiAgICBnZXRQcm9wc1N0cmluZzogKHByb3BzID0ge30pID0+IHtcbiAgICAgICAgY29uc3QgYXJyUHJvcHMgPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMocHJvcHMpKSB7XG4gICAgICAgICAgICBjb25zdCBpdGVtID0gKChrZXksIHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RyVmFsdWUgPSBTdHJpbmcodmFsdWUpO1xuICAgICAgICAgICAgICAgIGlmIChzdHJWYWx1ZSA9PT0gJycgfHwgdmFsdWUgPT09ICdmYWxzZScpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gYCR7a2V5fT1cIiR7c3RyVmFsdWV9XCJgO1xuICAgICAgICAgICAgfSkoa2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICBpdGVtICYmIGFyclByb3BzLnB1c2goaXRlbSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFyclByb3BzLmpvaW4oJyAnKTtcbiAgICB9LFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBnZXRJdGVtRG9tOiAoaXRlbSkgPT4ge1xuICAgICAgICBpZiAoIWl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGl0ZW0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IGNoaWxkcmVuID0gW10sIHByb3BzID0ge30sIGNsYXNzTmFtZSA9ICcnIH0gPSBpdGVtO1xuICAgICAgICBjb25zdCB0YWdOYW1lID0gaXRlbS5jb21wb25lbnROYW1lIHx8IGl0ZW0udGFnTmFtZSB8fCAnZGl2JztcbiAgICAgICAgY29uc3Qgc3RyUHJvcHMgPSBKU1guZ2V0UHJvcHNTdHJpbmcoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBwcm9wcyksIHsgY2xhc3NOYW1lIH0pKTtcbiAgICAgICAgY29uc3QgdGFnU3RhcnQgPSBgJHt0YWdOYW1lfSR7c3RyUHJvcHMgPyBgICR7c3RyUHJvcHN9YCA6ICcnfWA7XG4gICAgICAgIGlmIChVVElMUy5pc1NlbGZUYWcodGFnTmFtZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBgPCR7dGFnU3RhcnR9Lz5gO1xuICAgICAgICB9XG4gICAgICAgIGlmICghY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaXRlbS5jb21wb25lbnROYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGA8JHt0YWdTdGFydH0vPmA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYDwke3RhZ1N0YXJ0fT48LyR7dGFnTmFtZX0+YDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYDwke3RhZ1N0YXJ0fT4ke0pTWC5nZXREb21CeUFycmF5KGNoaWxkcmVuKX08LyR7dGFnTmFtZX0+YDtcbiAgICB9LFxuICAgIGdldERvbUJ5QXJyYXk6IChvYmogPSBbXSkgPT4ge1xuICAgICAgICByZXR1cm4gb2JqLm1hcCgoaXRlbSkgPT4gSlNYLmdldEl0ZW1Eb20oaXRlbSkpLmpvaW4oJycpO1xuICAgIH1cbn07XG5leHBvcnQgZGVmYXVsdCBKU1g7XG4iLCJjb25zdCBDT0xPUiA9IHtcbiAgICBnZXRSZ2JhQnlGaWxsOiAoeyBjb2xvciwgb3BhY2l0eSwgdmlzaWJsZSB9KSA9PiB7XG4gICAgICAgIC8vIOWmguaenOS4jeWPr+ingVxuICAgICAgICBpZiAoIXZpc2libGUgfHwgb3BhY2l0eSA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgciA9IHBhcnNlSW50KFN0cmluZyhjb2xvci5yICogMjU1KSk7XG4gICAgICAgIGNvbnN0IGcgPSBwYXJzZUludChTdHJpbmcoY29sb3IuZyAqIDI1NSkpO1xuICAgICAgICBjb25zdCBiID0gcGFyc2VJbnQoU3RyaW5nKGNvbG9yLmIgKiAyNTUpKTtcbiAgICAgICAgY29uc3QgYSA9IFN0cmluZyhvcGFjaXR5KS5pbmRleE9mKCcuJykgPiAtMSA/IG9wYWNpdHkudG9GaXhlZCgxKSA6IG9wYWNpdHk7XG4gICAgICAgIHJldHVybiBbciwgZywgYiwgYV07XG4gICAgfSxcbn07XG5leHBvcnQgZGVmYXVsdCBDT0xPUjtcbiIsImltcG9ydCBDT05GSUcgZnJvbSBcIi4uL0NPTkZJR1wiO1xuY29uc3QgRUZGRUNUID0ge1xuICAgIGdldEluZm86IChub2RlKSA9PiB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgcmV0dXJuIENPTkZJRy5nZXRJbmZvQnlJZChub2RlLmVmZmVjdFN0eWxlSWQpO1xuICAgIH1cbn07XG5leHBvcnQgZGVmYXVsdCBFRkZFQ1Q7XG4iLCJ2YXIgX19yZXN0ID0gKHRoaXMgJiYgdGhpcy5fX3Jlc3QpIHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gICAgdmFyIHQgPSB7fTtcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcbiAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XG4gICAgICAgIH1cbiAgICByZXR1cm4gdDtcbn07XG5pbXBvcnQgQ09MT1IgZnJvbSBcIi4vQ09MT1JcIjtcbmltcG9ydCBDT05GSUcgZnJvbSBcIi4uL0NPTkZJR1wiO1xuaW1wb3J0IFNBQ1NTIGZyb20gXCIuLi9TQUNTU1wiO1xuY29uc3QgRklMTCA9IHtcbiAgICBnZXRGaWxsOiAobm9kZSkgPT4ge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGNvbnN0IFtmaXJzdEZpbGwgPSBudWxsXSA9IG5vZGUuZmlsbHMgfHwgW107XG4gICAgICAgIC8vIOayoeacieiuvue9ruS7u+S9leminOiJsiwg55uu5YmN5LiN5pSv5oyB5riQ5Y+YXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgaWYgKCFmaXJzdEZpbGwgfHwgZmlyc3RGaWxsLnR5cGUgIT09ICdTT0xJRCcpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvbG9yID0gQ09MT1IuZ2V0UmdiYUJ5RmlsbChmaXJzdEZpbGwpO1xuICAgICAgICBpZiAoIWNvbG9yKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBub2RlLnR5cGUgPT09ICdURVhUJyA/IFNBQ1NTLmFkZENvbG9yKGNvbG9yKSA6IFNBQ1NTLmFkZEJnQ29sb3IoY29sb3IpO1xuICAgICAgICAvLyDmlofmnKzmmK/nlKjpopzoibLvvIzlhbblroPnkIbop6PkuLrog4zmma/oibJcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZVxuICAgICAgICB9O1xuICAgIH0sXG4gICAgLy8g6I635Y+W5aGr5YWF5L+h5oGvXG4gICAgZ2V0SW5mbzogKG5vZGUpID0+IHtcbiAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgIGNvbnN0IF9hID0gQ09ORklHLmdldEluZm9CeUlkKG5vZGUuZmlsbFN0eWxlSWQpIHx8IHt9LCB7IHRleHRDbGFzc05hbWUgPSAnJywgY2xhc3NOYW1lID0gJycgfSA9IF9hLCByZXN0ID0gX19yZXN0KF9hLCBbXCJ0ZXh0Q2xhc3NOYW1lXCIsIFwiY2xhc3NOYW1lXCJdKTtcbiAgICAgICAgY29uc3QgcmVuZGVyQ2xhc3NOYW1lID0gbm9kZS50eXBlID09PSAnVEVYVCcgPyB0ZXh0Q2xhc3NOYW1lIDogY2xhc3NOYW1lO1xuICAgICAgICBpZiAoIXJlbmRlckNsYXNzTmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIEZJTEwuZ2V0RmlsbChub2RlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogcmVuZGVyQ2xhc3NOYW1lIH0sIHJlc3QpO1xuICAgIH0sXG59O1xuZXhwb3J0IGRlZmF1bHQgRklMTDtcbiIsImltcG9ydCBTQUNTUyBmcm9tIFwiLi4vU0FDU1NcIjtcbi8vIGltcG9ydCBDT05GSUcgZnJvbSBcIi4vQ09ORklHXCI7XG5jb25zdCBGTEVYID0ge1xuICAgIGlzRmxleDogKG5vZGUpID0+IHtcbiAgICAgICAgLy8g6L+Z5Yeg5Liq5YWD57Sg6YO95LiN5YGaIEZsZXgg5Yik5pat5aSE55CGXG4gICAgICAgIGlmIChbJ1RFWFQnXS5pbmRleE9mKG5vZGUudHlwZSkgPiAtMSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAobm9kZSA9PT0gbnVsbCB8fCBub2RlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBub2RlLmxheW91dE1vZGUpICE9PSBcIk5PTkVcIjtcbiAgICB9LFxuICAgIGdldFRoaXNJbmZvOiAobm9kZSkgPT4ge1xuICAgICAgICBpZiAoIUZMRVguaXNGbGV4KG5vZGUpKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IGxheW91dE1vZGUsIHByaW1hcnlBeGlzQWxpZ25JdGVtcywgY291bnRlckF4aXNBbGlnbkl0ZW1zLCBjaGlsZHJlbiA9IFtdIH0gPSBub2RlO1xuICAgICAgICAvLyDmsqHmnInlrZDlhYPntKAgZmxleCDluIPlsYDmsqHmnInmhI/kuYlcbiAgICAgICAgaWYgKCFjaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IFtdO1xuICAgICAgICAvLyDlpoLmnpzmmK/nurXlkJHnmoQg6L+Z6YeM5Y+v5Lul5LiN5L2/55SoIGZsZXgg5biD5bGAXG4gICAgICAgIGlmIChsYXlvdXRNb2RlID09PSAnVkVSVElDQUwnKSB7XG4gICAgICAgICAgICAvLyDlvZPmmK/nurXlkJHluIPlsYDlvZPml7blgJlcbiAgICAgICAgICAgIGNsYXNzTmFtZS5wdXNoKHtcbiAgICAgICAgICAgICAgICAvLyBcIk1JTlwiOiBcIlwiLFxuICAgICAgICAgICAgICAgIFwiQ0VOVEVSXCI6IFwidGFjXCIsXG4gICAgICAgICAgICAgICAgXCJNQVhcIjogXCJ0YXJcIixcbiAgICAgICAgICAgIH1bY291bnRlckF4aXNBbGlnbkl0ZW1zXSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjbGFzc05hbWUucHVzaCh7XG4gICAgICAgICAgICAgICAgLy8gXCJNSU5cIjogXCJcIixcbiAgICAgICAgICAgICAgICBcIkNFTlRFUlwiOiBcImpjY1wiLFxuICAgICAgICAgICAgICAgIFwiTUFYXCI6IFwiamNmZVwiLFxuICAgICAgICAgICAgICAgIFwiU1BBQ0VfQkVUV0VFTlwiOiBcImpjc2JcIixcbiAgICAgICAgICAgIH1bcHJpbWFyeUF4aXNBbGlnbkl0ZW1zXSB8fCBcIlwiKTtcbiAgICAgICAgICAgIGNsYXNzTmFtZS5wdXNoKHtcbiAgICAgICAgICAgICAgICAvL1wiTUlOXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgXCJDRU5URVJcIjogXCJhaWNcIixcbiAgICAgICAgICAgICAgICBcIk1BWFwiOiBcImFpZmVcIixcbiAgICAgICAgICAgIH1bY291bnRlckF4aXNBbGlnbkl0ZW1zXSB8fCBcIlwiKTtcbiAgICAgICAgICAgIGNsYXNzTmFtZS5wdXNoKCdkZicpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZS5qb2luKCcgJylcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIGdldEluZm9Gcm9tUGFyZW50OiAobm9kZSkgPT4ge1xuICAgICAgICBjb25zdCBwYXJlbnQgPSBub2RlLnBhcmVudDtcbiAgICAgICAgaWYgKCFwYXJlbnQgfHwgIUZMRVguaXNGbGV4KHBhcmVudCkpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgY29uc3QgeyBsYXlvdXRNb2RlLCBwcmltYXJ5QXhpc0FsaWduSXRlbXMsIGl0ZW1TcGFjaW5nIH0gPSBwYXJlbnQ7XG4gICAgICAgIC8vIOS4pOerr+WvueWFtuihqOekuuS4jemcgOimgei/meS6m1xuICAgICAgICBpZiAocHJpbWFyeUF4aXNBbGlnbkl0ZW1zID09PSBcIlNQQUNFX0JFVFdFRU5cIikge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gW107XG4gICAgICAgIGNvbnN0IGlnbm9yZUNsYXNzTmFtZSA9IFtdO1xuICAgICAgICBjb25zdCB7IGlkID0gJycgfSA9IHBhcmVudC5jaGlsZHJlbi5maWx0ZXIoYyA9PiBjLnZpc2libGUpLnBvcCgpIHx8IHt9O1xuICAgICAgICBjb25zdCBpc0xhc3RDaGlsZHJlbiA9IGlkID09PSBub2RlLmlkO1xuICAgICAgICAvLyDkuLrlrZDlhYPntKDmt7vliqDpl7Tot51cbiAgICAgICAgaWYgKGl0ZW1TcGFjaW5nID4gMCAmJiAhaXNMYXN0Q2hpbGRyZW4pIHtcbiAgICAgICAgICAgIGNvbnN0IGd1dHRlck1hcCA9IHtcbiAgICAgICAgICAgICAgICBcIlZFUlRJQ0FMXCI6IFwibWJcIixcbiAgICAgICAgICAgICAgICBcIkhPUklaT05UQUxcIjogXCJtclwiXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY2xhc3NOYW1lLnB1c2goU0FDU1MuYWRkKGd1dHRlck1hcFtsYXlvdXRNb2RlXSwgaXRlbVNwYWNpbmcpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobm9kZS5sYXlvdXRHcm93ID09PSAxKSB7XG4gICAgICAgICAgICBjbGFzc05hbWUucHVzaCgnZjEnKTtcbiAgICAgICAgICAgIGlnbm9yZUNsYXNzTmFtZS5wdXNoKGB3JHtub2RlLndpZHRofWApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZS5qb2luKCcgJyksXG4gICAgICAgICAgICBpZ25vcmVDbGFzc05hbWU6IGlnbm9yZUNsYXNzTmFtZS5qb2luKCcgJylcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIGdldEluZm86IChub2RlKSA9PiB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgY29uc3QgeyBjbGFzc05hbWU6IGMxID0gJycsIGlnbm9yZUNsYXNzTmFtZTogaWMxID0gJycgfSA9IEZMRVguZ2V0VGhpc0luZm8obm9kZSkgfHwge307XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgY29uc3QgeyBjbGFzc05hbWU6IGMyID0gJycsIGlnbm9yZUNsYXNzTmFtZTogaWMyID0gJycgfSA9IEZMRVguZ2V0SW5mb0Zyb21QYXJlbnQobm9kZSkgfHwge307XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjbGFzc05hbWU6IGAke2MxfSAke2MyfWAsXG4gICAgICAgICAgICBpZ25vcmVDbGFzc05hbWU6IGAke2ljMX0gJHtpYzJ9YFxuICAgICAgICB9O1xuICAgIH1cbn07XG5leHBvcnQgZGVmYXVsdCBGTEVYO1xuIiwiaW1wb3J0IENPTkZJRyBmcm9tIFwiLi4vQ09ORklHXCI7XG5jb25zdCBHUklEID0ge1xuICAgIGdldEluZm86IChub2RlKSA9PiB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgcmV0dXJuIENPTkZJRy5nZXRJbmZvQnlJZChub2RlLmdyaWRTdHlsZUlkKTtcbiAgICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgR1JJRDtcbiIsImltcG9ydCBTQUNTUyBmcm9tIFwiLi4vU0FDU1NcIjtcbmNvbnN0IE9USEVSUyA9IHtcbiAgICBnZXJCb3JkZXJSYWRpdXNDbGFzc05hbWU6IChub2RlKSA9PiB7XG4gICAgICAgIGNvbnN0IHRsID0gbm9kZS50b3BMZWZ0UmFkaXVzIHx8IDA7XG4gICAgICAgIGNvbnN0IHRyID0gbm9kZS50b3BSaWdodFJhZGl1cyB8fCAwO1xuICAgICAgICBjb25zdCBiciA9IG5vZGUuYm90dG9tUmlnaHRSYWRpdXMgfHwgMDtcbiAgICAgICAgY29uc3QgYmwgPSBub2RlLmJvdHRvbUxlZnRSYWRpdXMgfHwgMDtcbiAgICAgICAgLy8g5YWo6YOo5Li6IDBcbiAgICAgICAgaWYgKCh0bCArIHRyICsgYnIgKyBibCkgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuICAgICAgICAvLyDlpoLmnpzlm5vkuKrlgLzpg73nm7jnrYlcbiAgICAgICAgaWYgKCh0bCA9PT0gdHIpICYmICh0bCA9PT0gYnIpICYmICh0bCA9PT0gYmwpKSB7XG4gICAgICAgICAgICByZXR1cm4gW1NBQ1NTLmFkZCgnYnInLCB0bCldO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IFtdO1xuICAgICAgICB0bCAmJiBjbGFzc05hbWUucHVzaChTQUNTUy5hZGQoJ2J0bHInLCB0bCkpO1xuICAgICAgICB0ciAmJiBjbGFzc05hbWUucHVzaChTQUNTUy5hZGQoJ2J0cnInLCB0cikpO1xuICAgICAgICBiciAmJiBjbGFzc05hbWUucHVzaChTQUNTUy5hZGQoJ2JicnInLCBicikpO1xuICAgICAgICBibCAmJiBjbGFzc05hbWUucHVzaChTQUNTUy5hZGQoJ2JibHInLCBibCkpO1xuICAgICAgICByZXR1cm4gY2xhc3NOYW1lO1xuICAgIH0sXG4gICAgZ2V0UGFkZGluZ0NsYXNzTmFtZTogKG5vZGUpID0+IHtcbiAgICAgICAgLy8g5Lya5b+955Wl5o6JIDHlg4/ntKDnmoQgcGFkZGluZ1xuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgbm9kZS5wYWRkaW5nVG9wID4gMSA/IFNBQ1NTLmFkZCgncHQnLCBub2RlLnBhZGRpbmdUb3ApIDogJycsXG4gICAgICAgICAgICBub2RlLnBhZGRpbmdSaWdodCA+IDEgPyBTQUNTUy5hZGQoJ3ByJywgbm9kZS5wYWRkaW5nUmlnaHQpIDogJycsXG4gICAgICAgICAgICBub2RlLnBhZGRpbmdCb3R0b20gPiAxID8gU0FDU1MuYWRkKCdwYicsIG5vZGUucGFkZGluZ0JvdHRvbSkgOiAnJyxcbiAgICAgICAgICAgIG5vZGUucGFkZGluZ0xlZnQgPiAxID8gU0FDU1MuYWRkKCdwbCcsIG5vZGUucGFkZGluZ0xlZnQpIDogJycsXG4gICAgICAgIF07XG4gICAgfSxcbiAgICBnZXRJbmZvOiAobm9kZSkgPT4ge1xuICAgICAgICBjb25zdCBwYWRkaW5nID0gT1RIRVJTLmdldFBhZGRpbmdDbGFzc05hbWUobm9kZSk7XG4gICAgICAgIGNvbnN0IHJhZGl1cyA9IE9USEVSUy5nZXJCb3JkZXJSYWRpdXNDbGFzc05hbWUobm9kZSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjbGFzc05hbWU6IFsuLi5wYWRkaW5nLCAuLi5yYWRpdXNdLmpvaW4oJyAnKVxuICAgICAgICB9O1xuICAgIH1cbn07XG5leHBvcnQgZGVmYXVsdCBPVEhFUlM7XG4iLCJpbXBvcnQgQ09ORklHIGZyb20gXCIuLi9DT05GSUdcIjtcbmNvbnN0IFNUUk9LRSA9IHtcbiAgICAvLyDmlofmnKznu4Tku7ZcbiAgICBnZXRJbmZvOiAobm9kZSkgPT4ge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHJldHVybiBDT05GSUcuZ2V0SW5mb0J5SWQobm9kZS5zdHJva2VTdHlsZUlkKTtcbiAgICB9LFxufTtcbmV4cG9ydCBkZWZhdWx0IFNUUk9LRTtcbiIsImltcG9ydCBDT05GSUcgZnJvbSBcIi4uL0NPTkZJR1wiO1xuaW1wb3J0IFNBQ1NTIGZyb20gXCIuLi9TQUNTU1wiO1xuY29uc3QgVEVYVCA9IHtcbiAgICB1bml0TWFwOiB7XG4gICAgICAgICdQRVJDRU5UJzogJyUnXG4gICAgICAgIC8vIFwiUElYRUxTXCI6XCJcIlxuICAgIH0sXG4gICAgZ2V0Rm9udE5hbWVDbGFzczogKG5vZGUpID0+IHtcbiAgICAgICAgY29uc3QgeyBmb250TmFtZSB9ID0gbm9kZTtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBjb25zdCB7IHN0eWxlIH0gPSBmb250TmFtZTtcbiAgICAgICAgaWYgKHR5cGVvZiBzdHlsZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBmb250TWFwID0ge1xuICAgICAgICAgICAgXCJVTFRSQUxJR0hUXCI6IFwiZncxMDBcIixcbiAgICAgICAgICAgIFwiVEhJTlwiOiAnZncyMDAnLFxuICAgICAgICAgICAgXCJMSUdIVFwiOiBcImZ3MzAwXCIsXG4gICAgICAgICAgICBcIlJFR1VMQVJcIjogXCJcIixcbiAgICAgICAgICAgIFwiTUVESVVNXCI6IFwiZnc1MDBcIixcbiAgICAgICAgICAgIFwiU0VNSUJPTERcIjogXCJmdzYwMFwiLFxuICAgICAgICAgICAgXCJCT0xEXCI6IFwiZnc3MDBcIixcbiAgICAgICAgICAgIFwiQkxBQ0tcIjogXCJmdzkwMFwiLFxuICAgICAgICAgICAgXCJJVEFMSUNcIjogXCJmc2lcIixcbiAgICAgICAgICAgIFwiT0JMSVFVRVwiOiBcImZzaVwiXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IHN0eWxlLnNwbGl0KCcgJykubWFwKChpdGVtKSA9PiBmb250TWFwW2l0ZW0udG9VcHBlckNhc2UoKV0gfHwgJycpO1xuICAgICAgICByZXR1cm4gY2xhc3NOYW1lLmZpbHRlcihpdGVtID0+IGl0ZW0pLmpvaW4oJyAnKTtcbiAgICB9LFxuICAgIGdldEFDU1NTSW5mbzogKG5vZGUpID0+IHtcbiAgICAgICAgdmFyIF9hLCBfYiwgX2M7XG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IFtdO1xuICAgICAgICBpZiAoW1wic3RyaW5nXCIsIFwibnVtYmVyXCJdLmluZGV4T2YodHlwZW9mIG5vZGUuZm9udFNpemUpID4gLTEpIHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIGNsYXNzTmFtZS5wdXNoKFNBQ1NTLmFkZCgnZnMnLCBub2RlLmZvbnRTaXplKSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8g5p2t6auYXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgaWYgKChfYSA9IG5vZGUubGluZUhlaWdodCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnZhbHVlKSB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBjb25zdCB7IHZhbHVlLCB1bml0IH0gPSBub2RlLmxpbmVIZWlnaHQ7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBjbGFzc05hbWUucHVzaChTQUNTUy5hZGQoJ2xoJywgdmFsdWUsIFRFWFQudW5pdE1hcFt1bml0XSkpO1xuICAgICAgICB9XG4gICAgICAgIC8vIOWtl+mXtOi3nVxuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGlmICgoX2IgPSBub2RlLmxldHRlclNwYWNpbmcpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi52YWx1ZSkge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgY29uc3QgeyB2YWx1ZSwgdW5pdCB9ID0gbm9kZS5sZXR0ZXJTcGFjaW5nO1xuICAgICAgICAgICAgY2xhc3NOYW1lLnB1c2goU0FDU1MuYWRkKCdscycsIHZhbHVlLCBURVhULnVuaXRNYXBbdW5pdF0pKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBmb250LXdlaWdodCBmb250LXN0eWxlXG4gICAgICAgIGNvbnN0IGZuQ2xhc3MgPSBURVhULmdldEZvbnROYW1lQ2xhc3Mobm9kZSk7XG4gICAgICAgIGZuQ2xhc3MgJiYgY2xhc3NOYW1lLnB1c2goZm5DbGFzcyk7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgaWYgKChfYyA9IG5vZGUuZm9udE5hbWUpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5mYW1pbHkpIHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIGNsYXNzTmFtZS5wdXNoKFNBQ1NTLmFkZEZvbnRGYW1pbHkobm9kZS5mb250TmFtZS5mYW1pbHkpKTtcbiAgICAgICAgfVxuICAgICAgICAvLyB0ZXh0LWFsaWduXG4gICAgICAgIGNvbnN0IHRhQ2xhc3MgPSB7XG4gICAgICAgICAgICBcIkxFRlRcIjogJycsXG4gICAgICAgICAgICBcIkNFTlRFUlwiOiAndGFjJyxcbiAgICAgICAgICAgIFwiUklHSFRcIjogJ3RhcicsXG4gICAgICAgICAgICBcIkpVU1RJRklFRFwiOiAndGFqJyxcbiAgICAgICAgfVtub2RlLnRleHRBbGlnbkhvcml6b250YWxdO1xuICAgICAgICB0YUNsYXNzICYmIGNsYXNzTmFtZS5wdXNoKHRhQ2xhc3MpO1xuICAgICAgICAvLyB2ZXJ0aWNhbC1hbGlnblxuICAgICAgICBjb25zdCB2YUNsYXNzID0ge1xuICAgICAgICAgICAgXCJUT1BcIjogJycsXG4gICAgICAgICAgICBcIkNFTlRFUlwiOiAndmFtJyxcbiAgICAgICAgICAgIFwiQk9UVE9NXCI6ICd2YWInLFxuICAgICAgICB9W25vZGUudGV4dEFsaWduVmVydGljYWxdO1xuICAgICAgICB2YUNsYXNzICYmIGNsYXNzTmFtZS5wdXNoKHZhQ2xhc3MpO1xuICAgICAgICAvLyB0dFxuICAgICAgICBjb25zdCB0dENsYXNzID0ge1xuICAgICAgICAgICAgXCJPUklHSU5BTFwiOiAnJyxcbiAgICAgICAgICAgIFwiVVBQRVJcIjogJ3R0dScsXG4gICAgICAgICAgICBcIkxPV0VSXCI6ICd0dGwnLFxuICAgICAgICAgICAgXCJUSVRMRVwiOiAndHRjJyxcbiAgICAgICAgfVtub2RlLnRleHRDYXNlXTtcbiAgICAgICAgdHRDbGFzcyAmJiBjbGFzc05hbWUucHVzaCh0dENsYXNzKTtcbiAgICAgICAgLy8gdGRcbiAgICAgICAgY29uc3QgdGRDbGFzcyA9IHtcbiAgICAgICAgICAgIFwiTk9ORVwiOiBcIlwiLFxuICAgICAgICAgICAgXCJVTkRFUkxJTkVcIjogJ3RkdScsXG4gICAgICAgICAgICBcIlNUUklLRVRIUk9VR0hcIjogJ3RkbCdcbiAgICAgICAgfVtub2RlLnRleHREZWNvcmF0aW9uXTtcbiAgICAgICAgdGRDbGFzcyAmJiBjbGFzc05hbWUucHVzaCh0ZENsYXNzKTtcbiAgICAgICAgY29uc3Qgc3RyQ2xhc3NOYW1lID0gY2xhc3NOYW1lLmpvaW4oJyAnKTtcbiAgICAgICAgY29uc3QgaXNTdHJvbmcgPSBbJ2Z3NTAwJywgJ2Z3NjAwJywgJ2Z3NzAwJywgJ2Z3ODAwJywgJ2Z3OTAwJ10uZmluZEluZGV4KChpdGVtKSA9PiBzdHJDbGFzc05hbWUuaW5kZXhPZihpdGVtKSA+IC0xKSA+IC0xO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiBzdHJDbGFzc05hbWUsXG4gICAgICAgICAgICB0YWdOYW1lOiBpc1N0cm9uZyA/ICdzdHJvbmcnIDogJ3NwYW4nXG4gICAgICAgIH07XG4gICAgfSxcbiAgICBnZXRUZXh0Q2hpbGRyZW46IChub2RlKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgY2hhcmFjdGVycyA9ICcnIH0gPSBub2RlO1xuICAgICAgICBjb25zdCBsZWdhbFAgPSBjaGFyYWN0ZXJzLnNwbGl0KCdcXG4nKS5maWx0ZXIoaXRlbSA9PiBpdGVtLnRyaW0oKSk7XG4gICAgICAgIC8vIOacieWbnui9puihqOekuuWkmuauteiQvVxuICAgICAgICBpZiAobGVnYWxQLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIGNvbnN0IG1iQ2xhc3MgPSBub2RlLnBhcmFncmFwaFNwYWNpbmcgPiAwID8gU0FDU1MuYWRkKCdtYicsIG5vZGUucGFyYWdyYXBoU3BhY2luZykgOiAnJztcbiAgICAgICAgICAgIGNvbnN0IHBzID0gbGVnYWxQLm1hcCgoaXRlbSwga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXNMYXN0ID0ga2V5ID09PSBsZWdhbFAubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICB0YWdOYW1lOiAncCcsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogaXNMYXN0ID8gJycgOiBtYkNsYXNzLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW2l0ZW1dXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHBzO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbY2hhcmFjdGVyc107XG4gICAgfSxcbiAgICAvLyDmlofmnKznu4Tku7ZcbiAgICBnZXRJbmZvOiAobm9kZSkgPT4ge1xuICAgICAgICBpZiAobm9kZS50eXBlICE9PSAnVEVYVCcpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgY29uc3QgZ2V0SW5mbyA9IENPTkZJRy5nZXRJbmZvQnlJZChub2RlLnRleHRTdHlsZUlkKSB8fCB7fTtcbiAgICAgICAgY29uc3QgYWNzc0luZm8gPSBURVhULmdldEFDU1NTSW5mbyhub2RlKTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0ge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiBnZXRJbmZvLmNsYXNzTmFtZSB8fCBhY3NzSW5mby5jbGFzc05hbWUgfHwgJycsXG4gICAgICAgICAgICB0YWdOYW1lOiBnZXRJbmZvLnRhZ05hbWUgfHwgYWNzc0luZm8udGFnTmFtZSB8fCAnJyxcbiAgICAgICAgICAgIGlnbm9yZUNsYXNzTmFtZTogZ2V0SW5mby5pZ25vcmVDbGFzc05hbWUgfHwgJydcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9LFxufTtcbmV4cG9ydCBkZWZhdWx0IFRFWFQ7XG4iLCJpbXBvcnQgTk9ERSBmcm9tIFwiLi9fL05PREVcIjtcbmltcG9ydCBDT05GSUcgZnJvbSBcIi4vXy9DT05GSUdcIjtcbmltcG9ydCBTQUNTUyBmcm9tIFwiLi9fL1NBQ1NTXCI7XG5pbXBvcnQgRE9NIGZyb20gXCIuL18vcmVuZGVyL0RPTVwiO1xuY29uc3QgQVBJID0ge1xuICAgIHRhYkluZGV4OiAwLFxuICAgIGdldFNlbGVjdGlvbjogKCkgPT4ge1xuICAgICAgICBjb25zdCBzZWxlY3Rpb24gPSBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb247XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHNlbGVjdGlvbik7XG4gICAgICAgIGlmICghc2VsZWN0aW9uLmxlbmd0aCkge1xuICAgICAgICAgICAgLy8g5rKh5pyJ6YCJ5oup5Lu75L2V5YWD57SgXG4gICAgICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7IG5vU2VsZWN0aW9uOiB0cnVlIH0pO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNlbGVjdGlvbjtcbiAgICB9LFxuICAgIG9uVGFiQ2hhbmdlOiAoaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgYmVmb3JlSW5kZXggPSBBUEkudGFiSW5kZXg7XG4gICAgICAgIEFQSS50YWJJbmRleCA9IGluZGV4O1xuICAgICAgICAvLyDlpoLmnpzlj6rmmK/lnKggSFRNTCDlkowgQUNTUyDkuYvliY3liIfmjaJcbiAgICAgICAgaWYgKChiZWZvcmVJbmRleCA9PT0gMCB8fCBiZWZvcmVJbmRleCA9PT0gMSkgJiYgKGluZGV4ID09PSAwIHx8IGluZGV4ID09PSAxKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFjdGlvbk1hcCA9IFsncnVuSG9tZScsICdydW5Ib21lJywgJ3J1blRva2VuJywgJ3J1bkNvbmZpZyddO1xuICAgICAgICBjb25zdCBhY3Rpb24gPSBhY3Rpb25NYXBbaW5kZXhdO1xuICAgICAgICBhY3Rpb24gJiYgQVBJW2FjdGlvbl0oKTtcbiAgICB9LFxuICAgIG9uU2VsZWN0aW9uQ2hhbmdlOiAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGFjdGlvbk1hcCA9IFsncnVuSG9tZScsICdydW5Ib21lJywgJ3J1blRva2VuJywgJyddO1xuICAgICAgICBjb25zdCBhY3Rpb24gPSBhY3Rpb25NYXBbQVBJLnRhYkluZGV4XTtcbiAgICAgICAgaWYgKCFhY3Rpb24pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBBUElbYWN0aW9uXSgpO1xuICAgIH0sXG4gICAgcnVuSG9tZTogKCkgPT4ge1xuICAgICAgICBjb25zdCBzZWxlY3Rpb24gPSBBUEkuZ2V0U2VsZWN0aW9uKCk7XG4gICAgICAgIGlmICghc2VsZWN0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgU0FDU1MuaW5pdCgpO1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGNvbnN0IEluZm8gPSBOT0RFLmdldE5vZGVzSW5mbyhzZWxlY3Rpb24pO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhJbmZvKTtcbiAgICAgICAgY29uc3QgaXNKU1ggPSBDT05GSUcuaXNKU1goKTtcbiAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgZ2V0SFRNTDogRE9NLnJlbmRlcihJbmZvLCBpc0pTWCksXG4gICAgICAgICAgICBnZXRDU1M6IFNBQ1NTLmdldFN0cmluZygpLFxuICAgICAgICAgICAgaXNKU1gsXG4gICAgICAgICAgICBub1NlbGVjdGlvbjogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBydW5Db25maWc6ICgpID0+IHtcbiAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgZ2V0Q29uZmlnOiBDT05GSUcuZ2V0QWxsKClcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBydW5Ub2tlbjogKCkgPT4ge1xuICAgICAgICBjb25zdCBbc2VsZWN0aW9uXSA9IEFQSS5nZXRTZWxlY3Rpb24oKSB8fCBbXTtcbiAgICAgICAgQ09ORklHLmdldFNlbGVjdGlvblRva2VucyhzZWxlY3Rpb24pO1xuICAgIH0sXG4gICAgb25tZXNzYWdlOiAobXNnID0ge30pID0+IHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBjb25zdCB7IHR5cGUgPSBudWxsLCB2YWx1ZSA9IG51bGwgfSA9IG1zZztcbiAgICAgICAgaWYgKHR5cGUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBbbmFtZSwgYWN0aW9uXSA9IHR5cGUuc3BsaXQoJy4nKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ0FQSSBvbm1lc3NhZ2UnLCBuYW1lLCBhY3Rpb24sIHZhbHVlKTtcbiAgICAgICAgaWYgKG5hbWUgPT09ICdBUEknICYmIChhY3Rpb24gaW4gQVBJKSkge1xuICAgICAgICAgICAgQVBJW2FjdGlvbl0odmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG5hbWUgPT09ICdDT05GSUcnICYmIChhY3Rpb24gaW4gQ09ORklHKSkge1xuICAgICAgICAgICAgQ09ORklHW2FjdGlvbl0odmFsdWUpO1xuICAgICAgICAgICAgaWYgKGFjdGlvbiA9PT0gJ2NoYW5nZUpTWCcpIHtcbiAgICAgICAgICAgICAgICBBUEkucnVuSG9tZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoYWN0aW9uID09PSAnYXBwZW5kVG9rZW4nKSB7XG4gICAgICAgICAgICAgICAgQVBJLnJ1blRva2VuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBBUEkucnVuQ29uZmlnKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59O1xuLy8gVGhpcyBwbHVnaW4gd2lsbCBvcGVuIGEgd2luZG93IHRvIHByb21wdCB0aGUgdXNlciB0byBlbnRlciBhIG51bWJlciwgYW5kXG4vLyBpdCB3aWxsIHRoZW4gY3JlYXRlIHRoYXQgbWFueSByZWN0YW5nbGVzIG9uIHRoZSBzY3JlZW4uXG4vLyBUaGlzIGZpbGUgaG9sZHMgdGhlIG1haW4gY29kZSBmb3IgdGhlIHBsdWdpbnMuIEl0IGhhcyBhY2Nlc3MgdG8gdGhlICpkb2N1bWVudCouXG4vLyBZb3UgY2FuIGFjY2VzcyBicm93c2VyIEFQSXMgaW4gdGhlIDxzY3JpcHQ+IHRhZyBpbnNpZGUgXCJ1aS5odG1sXCIgd2hpY2ggaGFzIGFcbi8vIGZ1bGwgYnJvd3NlciBlbnZpcm9ubWVudCAoc2VlIGRvY3VtZW50YXRpb24pLlxuQ09ORklHLmluaXQoKS50aGVuKCgpID0+IHtcbiAgICAvLyBUaGlzIHNob3dzIHRoZSBIVE1MIHBhZ2UgaW4gXCJ1aS5odG1sXCIuXG4gICAgZmlnbWEuc2hvd1VJKF9faHRtbF9fLCB7IHdpZHRoOiA0MDAsIGhlaWdodDogNjAwIH0pO1xuICAgIEFQSS5ydW5Ib21lKCk7XG4gICAgZmlnbWEub24oXCJzZWxlY3Rpb25jaGFuZ2VcIiwgKCkgPT4ge1xuICAgICAgICBBUEkub25TZWxlY3Rpb25DaGFuZ2UoKTtcbiAgICB9KTtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgZmlnbWEudWkub25tZXNzYWdlID0gQVBJLm9ubWVzc2FnZTtcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==