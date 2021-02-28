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

    if (strProp && typeof strProp === 'string') {
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
    } // console.log(matchToken);


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
        token = _ref6$token === void 0 ? {} : _ref6$token;

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
    } // console.log(node);
    // console.log(nodeInfo);


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
    var _ref = node.getRangeFills(0, 1) || [],
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
    // console.log(node);
    // @ts-ignore
    var id = typeof node.fillStyleId === 'string' ? node.fillStyleId : node.getRangeFillStyleId(0, 1); //@ts-ignore

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL18vQ09NUE9ORU5ULnRzIiwid2VicGFjazovLy8uL3NyYy9fL0NPTkZJRy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvXy9OT0RFLnRzIiwid2VicGFjazovLy8uL3NyYy9fL1NBQ1NTLnRzIiwid2VicGFjazovLy8uL3NyYy9fL1VUSUxTLnRzIiwid2VicGFjazovLy8uL3NyYy9fL3JlbmRlci9ET00udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL18vcmVuZGVyL0hUTUwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL18vcmVuZGVyL0pTWC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvXy90b2tlbi9DT0xPUi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvXy90b2tlbi9FRkZFQ1QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL18vdG9rZW4vRklMTC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvXy90b2tlbi9GTEVYLnRzIiwid2VicGFjazovLy8uL3NyYy9fL3Rva2VuL0dSSUQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL18vdG9rZW4vT1RIRVJTLnRzIiwid2VicGFjazovLy8uL3NyYy9fL3Rva2VuL1NUUk9LRS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvXy90b2tlbi9URVhULnRzIiwid2VicGFjazovLy8uL3NyYy9jb2RlLnRzIl0sIm5hbWVzIjpbIkNPTVBPTkVOVCIsImlzVmFyaWFudCIsIm5vZGUiLCJfYSIsIl9iIiwibWFpbkNvbXBvbmVudCIsInBhcmVudCIsInR5cGUiLCJpc0NvbXBvbmVudCIsImdldE1haW5Db21wb25lbnQiLCJnZXRDb21wb25lbnRJZCIsImtleSIsInN0cmluZ1RvQ29tcG9uZW50TmFtZSIsIm5hbWUiLCJ0cmltTmFtZSIsInRyaW0iLCJzdHJOYW1lIiwicmVwbGFjZSIsImZpcnN0Q2hhciIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwibGVuZ3RoIiwic2xpY2UiLCJnZXRDb21wb25lbnROYW1lIiwiZ2V0Q29tcG9uZW50UHJvcHNCeVN0cmluZyIsInN0clByb3AiLCJwcm9wcyIsImxlZ2FsUHJvcHMiLCJzcGxpdCIsImZvckVhY2giLCJpdGVtIiwidmFsdWUiLCJ0cmltVmFsdWUiLCJTdHJpbmciLCJnZXRDb21wb25lbnRQcm9wcyIsImdldEluZm8iLCJpZCIsIm1hdGNoVG9rZW4iLCJDT05GSUciLCJnZXRJbmZvQnlJZCIsIk9iamVjdCIsImFzc2lnbiIsInJlbmRlckNoaWxkcmVuIiwicmVuZGVyV2lkdGgiLCJyZW5kZXJIZWlnaHQiLCJQUk9fREVGQVVMVCIsImlnbm9yZUNsYXNzTmFtZSIsInRva2VuIiwiQ09ORklHX0RFRkFVTFQiLCJjdXJyZW50SW5kZXgiLCJpc0pTWCIsInByb2plY3RzIiwic3RvcmUiLCJjaGFuZ2VDdXJyZW50IiwiaW5kZXgiLCJnZXRBbGwiLCJmaWdtYSIsImNsaWVudFN0b3JhZ2UiLCJzZXRBc3luYyIsImNoYW5nZUpTWCIsInJlbW92ZSIsInNwbGljZSIsInB1c2giLCJhZGROZXdQcm9qZWN0IiwiZWRpdEJ5SW5kZXgiLCJkYXRhIiwiY3VycmVudCIsInVpIiwicG9zdE1lc3NhZ2UiLCJhbGVydE1zZyIsInJlcGxhY2VCeUluZGV4IiwiYXBwZW5kVG9rZW4iLCJnZXRDdXJyZW50IiwiaW5pdCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiZ2V0QXN5bmMiLCJ0aGVuIiwicmV0IiwiZ2V0VG9rZW4iLCJjYXRjaCIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsImdldFN0eWxlQnlJZCIsInRva2VuQ29uZmlnIiwiZ2V0U2VsZWN0aW9uVG9rZW5zIiwic2VsZWN0aW9uIiwiZ2V0U2VsZWN0aW9uSW5mbyIsImZpbmRUb2tlbiIsImZpbGxTdHlsZUlkIiwidGV4dFN0eWxlSWQiLCJzdHJva2VTdHlsZUlkIiwiZWZmZWN0U3R5bGVJZCIsImdyaWRTdHlsZUlkIiwic3R5bGVLZXkiLCJnZXRBbGxUb2tlbnMiLCJyb290IiwiY29tcG9uZW50cyIsImZpbmRBbGwiLCJjIiwiYWRkQ29uZmlnIiwiZ2V0TG9jYWxQYWludFN0eWxlcyIsImdldExvY2FsVGV4dFN0eWxlcyIsImdldExvY2FsRWZmZWN0U3R5bGVzIiwiZ2V0TG9jYWxHcmlkU3R5bGVzIiwiZ290QWxsVG9rZW5zIiwiX19yZXN0IiwicyIsImUiLCJ0IiwicCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImluZGV4T2YiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJpIiwicHJvcGVydHlJc0VudW1lcmFibGUiLCJOT0RFIiwiZXh0ZW5kSW5mbyIsImEiLCJiIiwiY2xhc3NOYW1lIiwiY2xhc3NOYW1lQSIsImlnbm9yZUNsYXNzTmFtZUEiLCJwcm9wc0EiLCJyZXN0QSIsImNsYXNzTmFtZUIiLCJpZ25vcmVDbGFzc05hbWVCIiwicHJvcHNCIiwiY2hpbGRyZW4iLCJyZXN0QiIsImlzU3RydWN0Tm9kZSIsInN0YXJ0c1dpdGgiLCJ5ZXNUeXBlcyIsImdvdE5vIiwiZmluZCIsInZpc2libGUiLCJpc1JlbmRlckNoaWxkcmVuIiwiZ2V0Tm9kZUluZm8iLCJub2RlSW5mbyIsInRhZ05hbWUiLCJjb21wb25lbnQiLCJmaWxsIiwiRklMTCIsInRleHQiLCJURVhUIiwic3Ryb2tlIiwiU1RST0tFIiwiZ3JpZCIsIkdSSUQiLCJlZmZlY3QiLCJFRkZFQ1QiLCJvdGhlcnMiLCJPVEhFUlMiLCJmbGV4IiwiRkxFWCIsIlNBQ1NTIiwiYWRkIiwicGFyc2VJbnQiLCJ3aWR0aCIsImhlaWdodCIsImdldFRleHRDaGlsZHJlbiIsIm1hcCIsImNoYXJhY3RlcnMiLCJnZXROb2Rlc0luZm8iLCJVVElMUyIsImNsZWFyQ2xhc3NOYW1lIiwiY2hpbGRyZW5JbmZvIiwiY29tcG9uZW50TmFtZSIsInNvcnQiLCJub2RlcyIsInkiLCJ4IiwiaW5mbyIsInNvcnROb2RlcyIsImxlbiIsIkFycmF5IiwibmFtZU1hcCIsImdldENsYXNzU2VsZWN0b3JCeU5hbWUiLCJnZXRTdHJpbmciLCJrZXlzIiwicmVzdWx0Iiwiam9pbiIsInVuaXQiLCJwcm9wTmFtZSIsInVzZVZhbHVlIiwiTnVtYmVyIiwicGFyc2VGbG9hdCIsInRvRml4ZWQiLCJjbGFzc1VuaXQiLCJhZGRGb250RmFtaWx5IiwidmFsdWVPayIsInRvTG93ZXJDYXNlIiwiYWRkQ29sb3IiLCJyZ2JhIiwiYWRkQmdDb2xvciIsImlzQmxvY2siLCJibG9ja1RhZyIsImlzU2VsZlRhZyIsInNlbGZUYWciLCJjbGFzc05hbWVzIiwiRE9NIiwicmVuZGVyIiwib2JqIiwiSlNYIiwiZ2V0RG9tQnlBcnJheSIsIkhUTUwiLCJsZWdhbFByb3AiLCJnZXRQcm9wc1N0cmluZyIsImFyclByb3BzIiwiZW50cmllcyIsInN0clZhbHVlIiwiZ2V0SXRlbURvbSIsInByb3BzU3RyaW5nIiwidGFnU3RhcnQiLCJzdHJQcm9wcyIsIkNPTE9SIiwiZ2V0UmdiYUJ5RmlsbCIsImNvbG9yIiwib3BhY2l0eSIsInIiLCJnIiwiZ2V0RmlsbCIsImdldFJhbmdlRmlsbHMiLCJmaXJzdEZpbGwiLCJnZXRSYW5nZUZpbGxTdHlsZUlkIiwidGV4dENsYXNzTmFtZSIsInJlc3QiLCJyZW5kZXJDbGFzc05hbWUiLCJpc0ZsZXgiLCJsYXlvdXRNb2RlIiwiZ2V0VGhpc0luZm8iLCJwcmltYXJ5QXhpc0FsaWduSXRlbXMiLCJjb3VudGVyQXhpc0FsaWduSXRlbXMiLCJnZXRJbmZvRnJvbVBhcmVudCIsIml0ZW1TcGFjaW5nIiwiZmlsdGVyIiwicG9wIiwiaXNMYXN0Q2hpbGRyZW4iLCJndXR0ZXJNYXAiLCJsYXlvdXRHcm93IiwiYzEiLCJpYzEiLCJjMiIsImljMiIsImdlckJvcmRlclJhZGl1c0NsYXNzTmFtZSIsInRsIiwidG9wTGVmdFJhZGl1cyIsInRyIiwidG9wUmlnaHRSYWRpdXMiLCJiciIsImJvdHRvbVJpZ2h0UmFkaXVzIiwiYmwiLCJib3R0b21MZWZ0UmFkaXVzIiwiZ2V0UGFkZGluZ0NsYXNzTmFtZSIsInBhZGRpbmdUb3AiLCJwYWRkaW5nUmlnaHQiLCJwYWRkaW5nQm90dG9tIiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nIiwicmFkaXVzIiwidW5pdE1hcCIsImdldEZvbnROYW1lQ2xhc3NCeVN0eWxlIiwic3R5bGUiLCJmb250TWFwIiwiZ2V0UHJvcEJ5Tm9kZSIsImdldEFDU1NTSW5mbyIsImZvbnRTaXplIiwibGluZUhlaWdodCIsImxldHRlclNwYWNpbmciLCJmb250TmFtZSIsImZuQ2xhc3MiLCJmYW1pbHkiLCJ0YUNsYXNzIiwidGV4dEFsaWduSG9yaXpvbnRhbCIsInZhQ2xhc3MiLCJ0ZXh0QWxpZ25WZXJ0aWNhbCIsInRleHRDYXNlIiwidHRDbGFzcyIsInRleHREZWNvcmF0aW9uIiwidGRDbGFzcyIsInN0ckNsYXNzTmFtZSIsImlzU3Ryb25nIiwiZmluZEluZGV4IiwibGVnYWxQIiwibWJDbGFzcyIsInBhcmFncmFwaFNwYWNpbmciLCJwcyIsImlzTGFzdCIsImFjc3NJbmZvIiwiQVBJIiwidGFiSW5kZXgiLCJnZXRTZWxlY3Rpb24iLCJjdXJyZW50UGFnZSIsIm5vU2VsZWN0aW9uIiwib25UYWJDaGFuZ2UiLCJiZWZvcmVJbmRleCIsImFjdGlvbk1hcCIsImFjdGlvbiIsIm9uU2VsZWN0aW9uQ2hhbmdlIiwicnVuSG9tZSIsIkluZm8iLCJnZXRIVE1MIiwiZ2V0Q1NTIiwicnVuQ29uZmlnIiwiZ2V0Q29uZmlnIiwicnVuVG9rZW4iLCJvbm1lc3NhZ2UiLCJtc2ciLCJzaG93VUkiLCJfX2h0bWxfXyIsIm9uIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFj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RUFBNEIsWUFBTTtBQUM5QnJCLE9BQUcsQ0FBQ1MsaUJBQUo7QUFDSCxHQUZELEVBSnFCLENBT3JCOztBQUNBdFAsT0FBSyxDQUFDVyxFQUFOLENBQVNtUCxTQUFULEdBQXFCakIsR0FBRyxDQUFDaUIsU0FBekI7QUFDSCxDQVRELEUiLCJmaWxlIjoiY29kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2NvZGUudHNcIik7XG4iLCJpbXBvcnQgQ09ORklHIGZyb20gXCIuL0NPTkZJR1wiO1xuY29uc3QgQ09NUE9ORU5UID0ge1xuICAgIGlzVmFyaWFudDogKG5vZGUpID0+IHtcbiAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICByZXR1cm4gKChfYiA9IChfYSA9IG5vZGUubWFpbkNvbXBvbmVudCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnBhcmVudCkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLnR5cGUpID09PSAnQ09NUE9ORU5UX1NFVCc7XG4gICAgfSxcbiAgICBpc0NvbXBvbmVudDogKG5vZGUpID0+IHtcbiAgICAgICAgcmV0dXJuIG5vZGUudHlwZSA9PT0gJ0lOU1RBTkNFJyB8fCBub2RlLnR5cGUgPT09ICdDT01QT05FTlQnO1xuICAgIH0sXG4gICAgZ2V0TWFpbkNvbXBvbmVudDogKG5vZGUpID0+IHtcbiAgICAgICAgaWYgKG5vZGUudHlwZSA9PT0gJ0NPTVBPTkVOVCcpIHtcbiAgICAgICAgICAgIHJldHVybiBub2RlO1xuICAgICAgICB9XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgY29uc3QgaXNWYXJpYW50ID0gQ09NUE9ORU5ULmlzVmFyaWFudChub2RlKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2cobm9kZSwge2lzVmFyaWFudH0pO1xuICAgICAgICByZXR1cm4gaXNWYXJpYW50ID8gbm9kZS5tYWluQ29tcG9uZW50LnBhcmVudCA6IG5vZGUubWFpbkNvbXBvbmVudDtcbiAgICB9LFxuICAgIGdldENvbXBvbmVudElkOiAobm9kZSkgPT4ge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGNvbnN0IHsga2V5ID0gJycgfSA9IENPTVBPTkVOVC5nZXRNYWluQ29tcG9uZW50KG5vZGUpIHx8IHt9O1xuICAgICAgICByZXR1cm4ga2V5O1xuICAgIH0sXG4gICAgc3RyaW5nVG9Db21wb25lbnROYW1lOiAobmFtZSA9ICcnKSA9PiB7XG4gICAgICAgIGNvbnN0IHRyaW1OYW1lID0gbmFtZS50cmltKCk7XG4gICAgICAgIGlmICghdHJpbU5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzdHJOYW1lID0gdHJpbU5hbWUucmVwbGFjZSgvW1xcV10vZywgJycpO1xuICAgICAgICBjb25zdCBmaXJzdENoYXIgPSBzdHJOYW1lLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICBpZiAoc3RyTmFtZS5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiBmaXJzdENoYXI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZpcnN0Q2hhciArIHN0ck5hbWUuc2xpY2UoMSk7XG4gICAgfSxcbiAgICBnZXRDb21wb25lbnROYW1lOiAobm9kZSkgPT4ge1xuICAgICAgICBjb25zdCB7IG5hbWUgPSAnJyB9ID0gQ09NUE9ORU5ULmdldE1haW5Db21wb25lbnQobm9kZSk7XG4gICAgICAgIGlmICghbmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBDT01QT05FTlQuc3RyaW5nVG9Db21wb25lbnROYW1lKG5hbWUpO1xuICAgIH0sXG4gICAgZ2V0Q29tcG9uZW50UHJvcHNCeVN0cmluZzogKHN0clByb3ApID0+IHtcbiAgICAgICAgY29uc3QgcHJvcHMgPSB7fTtcbiAgICAgICAgaWYgKHN0clByb3AgJiYgdHlwZW9mIHN0clByb3AgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAvLyDljrvmjonljZXlj4zlvJXlj7dcbiAgICAgICAgICAgIGNvbnN0IGxlZ2FsUHJvcHMgPSBzdHJQcm9wLnJlcGxhY2UoL1xcXCIvZywgJycpLnJlcGxhY2UoL1xcJy9nLCAnJyk7XG4gICAgICAgICAgICBsZWdhbFByb3BzLnNwbGl0KFwiLFwiKS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgW2tleSwgdmFsdWVdID0gaXRlbS5zcGxpdChcIj1cIik7XG4gICAgICAgICAgICAgICAgY29uc3QgdHJpbVZhbHVlID0gU3RyaW5nKHZhbHVlKS50cmltKCk7XG4gICAgICAgICAgICAgICAgLy8gZmFsc2Ug6KGo56S65rKh5pyJ6L+Z5Liq5YC8IOS4jeWBmuWkhOeQhlxuICAgICAgICAgICAgICAgIGlmICh0cmltVmFsdWUgPT09IFwiZmFsc2VcIikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHByb3BzW1N0cmluZyhrZXkpLnRyaW0oKV0gPSB2YWx1ZSA/IHRyaW1WYWx1ZSA6ICd0cnVlJztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwcm9wcztcbiAgICB9LFxuICAgIGdldENvbXBvbmVudFByb3BzOiAobm9kZSkgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnZ2V0Q29tcG9uZW50UHJvcHMnLCBub2RlKTtcbiAgICAgICAgY29uc3QgaXNWYXJpYW50ID0gQ09NUE9ORU5ULmlzVmFyaWFudChub2RlKTtcbiAgICAgICAgLy8g5rKh5pyJ5Y+Y5L2T6KGo56S65rKh5pyJIHByb3BzXG4gICAgICAgIGlmICghaXNWYXJpYW50KSB7XG4gICAgICAgICAgICByZXR1cm4ge307XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyBuYW1lIH0gPSBub2RlLm1haW5Db21wb25lbnQ7XG4gICAgICAgIHJldHVybiBDT01QT05FTlQuZ2V0Q29tcG9uZW50UHJvcHNCeVN0cmluZyhuYW1lKTtcbiAgICB9LFxuICAgIGdldEluZm86IChub2RlKSA9PiB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgY29uc3QgaWQgPSBDT01QT05FTlQuZ2V0Q29tcG9uZW50SWQobm9kZSk7XG4gICAgICAgIGNvbnN0IG1hdGNoVG9rZW4gPSBDT05GSUcuZ2V0SW5mb0J5SWQoaWQpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhpZCwgbWF0Y2hUb2tlbiwgbm9kZSk7XG4gICAgICAgIGlmICghbWF0Y2hUb2tlbikge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgbWF0Y2hUb2tlbi5wcm9wcyA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgQ09NUE9ORU5ULmdldENvbXBvbmVudFByb3BzKG5vZGUpKSwgQ09NUE9ORU5ULmdldENvbXBvbmVudFByb3BzQnlTdHJpbmcobWF0Y2hUb2tlbi5wcm9wcyB8fCAnJykpO1xuICAgICAgICAvLyDnlKjmiLfmsqHmnInmjIflrprooajnpLropoHmuLLmn5NcbiAgICAgICAgaWYgKCEoJ3JlbmRlckNoaWxkcmVuJyBpbiBtYXRjaFRva2VuKSkge1xuICAgICAgICAgICAgbWF0Y2hUb2tlbi5yZW5kZXJDaGlsZHJlbiA9ICcxJztcbiAgICAgICAgfVxuICAgICAgICAvLyDnlKjmiLfmsqHmnInmjIflrprooajnpLropoHmuLLmn5NcbiAgICAgICAgaWYgKCEoJ3JlbmRlcldpZHRoJyBpbiBtYXRjaFRva2VuKSkge1xuICAgICAgICAgICAgbWF0Y2hUb2tlbi5yZW5kZXJXaWR0aCA9ICcwJztcbiAgICAgICAgfVxuICAgICAgICAvLyDnlKjmiLfmsqHmnInmjIflrprooajnpLropoHmuLLmn5NcbiAgICAgICAgaWYgKCEoJ3JlbmRlckhlaWdodCcgaW4gbWF0Y2hUb2tlbikpIHtcbiAgICAgICAgICAgIG1hdGNoVG9rZW4ucmVuZGVySGVpZ2h0ID0gJzAnO1xuICAgICAgICB9XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKG1hdGNoVG9rZW4pO1xuICAgICAgICByZXR1cm4gbWF0Y2hUb2tlbjtcbiAgICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgQ09NUE9ORU5UO1xuIiwiaW1wb3J0IENPTVBPTkVOVCBmcm9tIFwiLi9DT01QT05FTlRcIjtcbmNvbnN0IFBST19ERUZBVUxUID0ge1xuICAgIG5hbWU6ICdkZWZhdWx0JyxcbiAgICBpZ25vcmVDbGFzc05hbWU6ICcnLFxuICAgIHRva2VuOiB7fVxufTtcbmNvbnN0IENPTkZJR19ERUZBVUxUID0ge1xuICAgIGN1cnJlbnRJbmRleDogMCxcbiAgICBpc0pTWDogZmFsc2UsXG4gICAgcHJvamVjdHM6IFtQUk9fREVGQVVMVF1cbn07XG5jb25zdCBDT05GSUcgPSB7XG4gICAga2V5OiAnU0FDU1MnLFxuICAgIHN0b3JlOiBDT05GSUdfREVGQVVMVCxcbiAgICBjaGFuZ2VDdXJyZW50OiAoaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3Qgc3RvcmUgPSBDT05GSUcuZ2V0QWxsKCk7XG4gICAgICAgIHN0b3JlLmN1cnJlbnRJbmRleCA9IGluZGV4O1xuICAgICAgICBmaWdtYS5jbGllbnRTdG9yYWdlLnNldEFzeW5jKENPTkZJRy5rZXksIHN0b3JlKTtcbiAgICB9LFxuICAgIGNoYW5nZUpTWDogKHZhbHVlKSA9PiB7XG4gICAgICAgIGNvbnN0IHN0b3JlID0gQ09ORklHLmdldEFsbCgpO1xuICAgICAgICAvLyDph43nva7lm57nrKzkuIDkuKpcbiAgICAgICAgc3RvcmUuaXNKU1ggPSB2YWx1ZTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coc3RvcmUpO1xuICAgICAgICBmaWdtYS5jbGllbnRTdG9yYWdlLnNldEFzeW5jKENPTkZJRy5rZXksIHN0b3JlKTtcbiAgICB9LFxuICAgIHJlbW92ZTogKGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IHN0b3JlID0gQ09ORklHLmdldEFsbCgpO1xuICAgICAgICAvLyDph43nva7lm57nrKzkuIDkuKpcbiAgICAgICAgc3RvcmUuY3VycmVudEluZGV4ID0gMDtcbiAgICAgICAgc3RvcmUucHJvamVjdHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgaWYgKCFzdG9yZS5wcm9qZWN0cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHN0b3JlLnByb2plY3RzLnB1c2goUFJPX0RFRkFVTFQpO1xuICAgICAgICB9XG4gICAgICAgIGZpZ21hLmNsaWVudFN0b3JhZ2Uuc2V0QXN5bmMoQ09ORklHLmtleSwgc3RvcmUpO1xuICAgIH0sXG4gICAgYWRkTmV3UHJvamVjdDogKHsgbmFtZSA9ICcnLCB0b2tlbiA9IHt9IH0gPSB7fSkgPT4ge1xuICAgICAgICBjb25zdCBzdG9yZSA9IENPTkZJRy5nZXRBbGwoKTtcbiAgICAgICAgc3RvcmUucHJvamVjdHMucHVzaCh7XG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgaWdub3JlQ2xhc3NOYW1lOiAnJyxcbiAgICAgICAgICAgIHRva2VuXG4gICAgICAgIH0pO1xuICAgICAgICBzdG9yZS5jdXJyZW50SW5kZXggPSBzdG9yZS5wcm9qZWN0cy5sZW5ndGggLSAxO1xuICAgICAgICBmaWdtYS5jbGllbnRTdG9yYWdlLnNldEFzeW5jKENPTkZJRy5rZXksIHN0b3JlKTtcbiAgICB9LFxuICAgIGVkaXRCeUluZGV4OiAoeyBkYXRhLCBpbmRleCB9KSA9PiB7XG4gICAgICAgIGNvbnN0IHN0b3JlID0gQ09ORklHLmdldEFsbCgpO1xuICAgICAgICBjb25zdCBjdXJyZW50ID0gc3RvcmUucHJvamVjdHNbaW5kZXhdO1xuICAgICAgICBzdG9yZS5wcm9qZWN0c1tpbmRleF0gPSB7XG4gICAgICAgICAgICBuYW1lOiBkYXRhLm5hbWUsXG4gICAgICAgICAgICBpZ25vcmVDbGFzc05hbWU6IGRhdGEuaWdub3JlQ2xhc3NOYW1lLFxuICAgICAgICAgICAgdG9rZW46IGRhdGEudG9rZW4gPyBkYXRhLnRva2VuIDogY3VycmVudC50b2tlblxuICAgICAgICB9O1xuICAgICAgICBmaWdtYS5jbGllbnRTdG9yYWdlLnNldEFzeW5jKENPTkZJRy5rZXksIHN0b3JlKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coc3RvcmUpO1xuICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBhbGVydE1zZzogYCR7ZGF0YS5uYW1lfSBzYXZlIHN1Y2Nlc3NgXG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgcmVwbGFjZUJ5SW5kZXg6ICh7IGRhdGEsIGluZGV4IH0pID0+IHtcbiAgICAgICAgY29uc3Qgc3RvcmUgPSBDT05GSUcuZ2V0QWxsKCk7XG4gICAgICAgIHN0b3JlLnByb2plY3RzW2luZGV4XSA9IGRhdGEgfHwge307XG4gICAgICAgIGZpZ21hLmNsaWVudFN0b3JhZ2Uuc2V0QXN5bmMoQ09ORklHLmtleSwgc3RvcmUpO1xuICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICBhbGVydE1zZzogYCR7ZGF0YS5uYW1lfSByZXBsYWNlIHN1Y2Nlc3NgXG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgYXBwZW5kVG9rZW46IChhcHBlbmRUb2tlbiA9IHt9KSA9PiB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnQgPSBDT05GSUcuZ2V0Q3VycmVudCgpO1xuICAgICAgICBjb25zdCB7IHRva2VuID0ge30gfSA9IGN1cnJlbnQ7XG4gICAgICAgIGN1cnJlbnQudG9rZW4gPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHRva2VuKSwgYXBwZW5kVG9rZW4pO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhhcHBlbmRUb2tlbiwgQ09ORklHLnN0b3JlKTtcbiAgICAgICAgZmlnbWEuY2xpZW50U3RvcmFnZS5zZXRBc3luYyhDT05GSUcua2V5LCBDT05GSUcuc3RvcmUpO1xuICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICBhbGVydE1zZzogYCR7Y3VycmVudC5uYW1lfSBzYXZlIHN1Y2Nlc3NgXG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgaXNKU1g6ICgpID0+IHtcbiAgICAgICAgcmV0dXJuICEhQ09ORklHLnN0b3JlLmlzSlNYO1xuICAgIH0sXG4gICAgZ2V0QWxsOiAoKSA9PiB7XG4gICAgICAgIHJldHVybiBDT05GSUcuc3RvcmU7XG4gICAgfSxcbiAgICBpbml0OiAoKSA9PiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgZmlnbWEuY2xpZW50U3RvcmFnZS5nZXRBc3luYyhDT05GSUcua2V5KS50aGVuKChyZXQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmV0ICYmIHJldC5wcm9qZWN0cyAmJiByZXQucHJvamVjdHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIENPTkZJRy5zdG9yZSA9IHJldDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIOayoeaciee8k+WtmOWIm+W7uuS4gOS4quaWsOeahFxuICAgICAgICAgICAgICAgICAgICBmaWdtYS5jbGllbnRTdG9yYWdlLnNldEFzeW5jKENPTkZJRy5rZXksIENPTkZJR19ERUZBVUxUKTtcbiAgICAgICAgICAgICAgICAgICAgQ09ORklHLnN0b3JlID0gQ09ORklHX0RFRkFVTFQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlc29sdmUoQ09ORklHLmdldFRva2VuKCkpO1xuICAgICAgICAgICAgfSkuY2F0Y2gocmVqZWN0KTtcbiAgICAgICAgfSkpO1xuICAgIH0sXG4gICAgZ2V0Q3VycmVudDogKCkgPT4ge1xuICAgICAgICBjb25zdCBjdXJyZW50SW5kZXggPSBDT05GSUcuc3RvcmUuY3VycmVudEluZGV4O1xuICAgICAgICBjb25zdCBjdXJyZW50ID0gQ09ORklHLnN0b3JlLnByb2plY3RzW2N1cnJlbnRJbmRleF07XG4gICAgICAgIHJldHVybiBjdXJyZW50O1xuICAgIH0sXG4gICAgZ2V0VG9rZW46ICgpID0+IHtcbiAgICAgICAgY29uc3QgeyB0b2tlbiA9IG51bGwgfSA9IENPTkZJRy5nZXRDdXJyZW50KCkgfHwge307XG4gICAgICAgIHJldHVybiB0b2tlbiA/IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodG9rZW4pKSA6IG51bGw7XG4gICAgfSxcbiAgICBnZXRJbmZvQnlJZDogKGlkKSA9PiB7XG4gICAgICAgIGlmICghKGlkICYmICh0eXBlb2YgaWQgPT09ICdzdHJpbmcnKSkpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsga2V5ID0gJycgfSA9IGZpZ21hLmdldFN0eWxlQnlJZChpZCkgfHwge307XG4gICAgICAgIGlmICgha2V5KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB0b2tlbkNvbmZpZyA9IENPTkZJRy5nZXRUb2tlbigpIHx8IHt9O1xuICAgICAgICAvLyDlpoLmnpzmnInoh6rlrprkuYnnlKjoh6rlrprkuYnnmoRcbiAgICAgICAgcmV0dXJuIHRva2VuQ29uZmlnW2tleV07XG4gICAgfSxcbiAgICBnZXRTZWxlY3Rpb25Ub2tlbnM6IChzZWxlY3Rpb24pID0+IHtcbiAgICAgICAgY29uc3QgeyBuYW1lID0gJycsIHRva2VuID0ge30gfSA9IENPTkZJRy5nZXRDdXJyZW50KCkgfHwge307XG4gICAgICAgIGlmICghc2VsZWN0aW9uKSB7XG4gICAgICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICAgICAgZ2V0U2VsZWN0aW9uSW5mbzoge1xuICAgICAgICAgICAgICAgICAgICBuYW1lXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbWF0Y2hUb2tlbiA9IHt9O1xuICAgICAgICAvLyDlpoLmnpzmmK/nu4Tku7bliJnkuI3pnIDopoHmmL7npLrku7vkvZXlhbblroPnmoTlsZ7mgKdcbiAgICAgICAgaWYgKENPTVBPTkVOVC5pc0NvbXBvbmVudChzZWxlY3Rpb24pKSB7XG4gICAgICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgICAgIGNvbnN0IHsga2V5LCBuYW1lLCB0eXBlIH0gPSBDT01QT05FTlQuZ2V0TWFpbkNvbXBvbmVudChzZWxlY3Rpb24pO1xuICAgICAgICAgICAgY29uc3QgZmluZFRva2VuID0gdG9rZW5ba2V5XSB8fCB7fTtcbiAgICAgICAgICAgIG1hdGNoVG9rZW5ba2V5XSA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZmluZFRva2VuKSwgeyBuYW1lLFxuICAgICAgICAgICAgICAgIHR5cGUgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgIFtzZWxlY3Rpb24uZmlsbFN0eWxlSWQsIHNlbGVjdGlvbi50ZXh0U3R5bGVJZCwgc2VsZWN0aW9uLnN0cm9rZVN0eWxlSWQsIHNlbGVjdGlvbi5lZmZlY3RTdHlsZUlkLCBzZWxlY3Rpb24uZ3JpZFN0eWxlSWRdLmZvckVhY2goKGl0ZW0sIGtleSkgPT4ge1xuICAgICAgICAgICAgaWYgKCFpdGVtKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgeyBrZXk6IHN0eWxlS2V5LCBuYW1lLCB0eXBlIH0gPSBmaWdtYS5nZXRTdHlsZUJ5SWQoaXRlbSkgfHwge307XG4gICAgICAgICAgICBpZiAoIXN0eWxlS2V5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbWF0Y2hUb2tlbltzdHlsZUtleV0gPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHRva2VuW3N0eWxlS2V5XSksIHsgbmFtZSxcbiAgICAgICAgICAgICAgICB0eXBlIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgZ2V0U2VsZWN0aW9uSW5mbzoge1xuICAgICAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICAgICAgdG9rZW46IG1hdGNoVG9rZW5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiDojrflj5bmiYDmnInnmoQgVG9rZW4g5YyF5ousIENvbXBvbmVudFxuICAgICAqL1xuICAgIGdldEFsbFRva2VuczogKCkgPT4ge1xuICAgICAgICBjb25zdCBuYW1lID0gZmlnbWEucm9vdC5uYW1lO1xuICAgICAgICBjb25zdCBjb21wb25lbnRzID0gZmlnbWEucm9vdC5maW5kQWxsKGMgPT4ge1xuICAgICAgICAgICAgaWYgKGMudHlwZSA9PT0gJ0NPTVBPTkVOVF9TRVQnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYy50eXBlICE9PSAnQ09NUE9ORU5UJykge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjLnBhcmVudC50eXBlID09PSAnQ09NUE9ORU5UX1NFVCcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IHRva2VuID0ge307XG4gICAgICAgIGNvbnN0IGFkZENvbmZpZyA9IChkYXRhID0gW10pID0+IHtcbiAgICAgICAgICAgIGRhdGEuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIHRva2VuW2l0ZW0uaWRdID0ge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBpdGVtLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IGl0ZW0udHlwZVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgYWRkQ29uZmlnKGNvbXBvbmVudHMpO1xuICAgICAgICBhZGRDb25maWcoZmlnbWEuZ2V0TG9jYWxQYWludFN0eWxlcygpKTtcbiAgICAgICAgYWRkQ29uZmlnKGZpZ21hLmdldExvY2FsVGV4dFN0eWxlcygpKTtcbiAgICAgICAgYWRkQ29uZmlnKGZpZ21hLmdldExvY2FsRWZmZWN0U3R5bGVzKCkpO1xuICAgICAgICBhZGRDb25maWcoZmlnbWEuZ2V0TG9jYWxHcmlkU3R5bGVzKCkpO1xuICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICBnb3RBbGxUb2tlbnM6IHtcbiAgICAgICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgICAgIGlnbm9yZUNsYXNzTmFtZTogJycsXG4gICAgICAgICAgICAgICAgdG9rZW5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IENPTkZJRztcbiIsInZhciBfX3Jlc3QgPSAodGhpcyAmJiB0aGlzLl9fcmVzdCkgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgICB2YXIgdCA9IHt9O1xuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxuICAgICAgICB0W3BdID0gc1twXTtcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcbiAgICAgICAgfVxuICAgIHJldHVybiB0O1xufTtcbmltcG9ydCBDT01QT05FTlQgZnJvbSBcIi4vQ09NUE9ORU5UXCI7XG5pbXBvcnQgRklMTCBmcm9tIFwiLi90b2tlbi9GSUxMXCI7XG5pbXBvcnQgVEVYVCBmcm9tIFwiLi90b2tlbi9URVhUXCI7XG5pbXBvcnQgU1RST0tFIGZyb20gXCIuL3Rva2VuL1NUUk9LRVwiO1xuaW1wb3J0IEdSSUQgZnJvbSBcIi4vdG9rZW4vR1JJRFwiO1xuaW1wb3J0IEZMRVggZnJvbSBcIi4vdG9rZW4vRkxFWFwiO1xuaW1wb3J0IFNBQ1NTIGZyb20gXCIuL1NBQ1NTXCI7XG5pbXBvcnQgVVRJTFMgZnJvbSBcIi4vVVRJTFNcIjtcbmltcG9ydCBFRkZFQ1QgZnJvbSBcIi4vdG9rZW4vRUZGRUNUXCI7XG5pbXBvcnQgT1RIRVJTIGZyb20gXCIuL3Rva2VuL09USEVSU1wiO1xuaW1wb3J0IENPTkZJRyBmcm9tIFwiLi9DT05GSUdcIjtcbmNvbnN0IE5PREUgPSB7XG4gICAgLyoqXG4gICAgICog5ZCI5bm25Lik5LiqaW5mb1xuICAgICAqIEBwYXJhbSBhXG4gICAgICogQHBhcmFtIGJcbiAgICAgKi9cbiAgICBleHRlbmRJbmZvOiAoYSwgYikgPT4ge1xuICAgICAgICBpZiAoIWIpIHtcbiAgICAgICAgICAgIHJldHVybiBhO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgY2xhc3NOYW1lOiBjbGFzc05hbWVBID0gJycsIGlnbm9yZUNsYXNzTmFtZTogaWdub3JlQ2xhc3NOYW1lQSA9ICcnLCBwcm9wczogcHJvcHNBID0ge30gfSA9IGEsIHJlc3RBID0gX19yZXN0KGEsIFtcImNsYXNzTmFtZVwiLCBcImlnbm9yZUNsYXNzTmFtZVwiLCBcInByb3BzXCJdKTtcbiAgICAgICAgY29uc3QgeyBjbGFzc05hbWU6IGNsYXNzTmFtZUIgPSAnJywgaWdub3JlQ2xhc3NOYW1lOiBpZ25vcmVDbGFzc05hbWVCID0gJycsIHByb3BzOiBwcm9wc0IgPSB7fSwgY2hpbGRyZW4gfSA9IGIsIHJlc3RCID0gX19yZXN0KGIsIFtcImNsYXNzTmFtZVwiLCBcImlnbm9yZUNsYXNzTmFtZVwiLCBcInByb3BzXCIsIFwiY2hpbGRyZW5cIl0pO1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHsgcHJvcHM6IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgcHJvcHNBKSwgcHJvcHNCKSwgY2xhc3NOYW1lOiBgJHtjbGFzc05hbWVBfSAke2NsYXNzTmFtZUJ9YCwgaWdub3JlQ2xhc3NOYW1lOiBgJHtpZ25vcmVDbGFzc05hbWVBfSAke2lnbm9yZUNsYXNzTmFtZUJ9YCB9LCByZXN0QSksIHJlc3RCKTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIOWmguaenOS4gOS4quWFg+e0oOWGhemDqOWPquacieWHoOS9leWbvuW9ou+8jOmCo+S5iOWPquaYvuekuuWFtue7k+aehFxuICAgICAqL1xuICAgIGlzU3RydWN0Tm9kZTogKG5vZGUpID0+IHtcbiAgICAgICAgLy8g5LulI+WPt+W8gOWktFxuICAgICAgICBpZiAobm9kZS5uYW1lLnN0YXJ0c1dpdGgoXCIjXCIpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB5ZXNUeXBlcyA9IFsnUkVDVEFOR0xFJywgJ1ZFQ1RPUicsICdTVEFSJywgJ0xJTkUnLCAnUE9MWUdPTicsICdFTExJUFNFJywgJ1NMSUNFJ107XG4gICAgICAgIC8vIOWmguaenOacrOi6q+WwseaYr+i/meS6m+WFg+e0oOmCo+S5iOS5n+aYr+ebtOaOpei+k+WHulxuICAgICAgICBpZiAoeWVzVHlwZXMuaW5kZXhPZihub2RlLnR5cGUpID4gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChub2RlLnR5cGUgPT09ICdURVhUJykge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgY29uc3QgeyBjaGlsZHJlbiA9IFtdIH0gPSBub2RlO1xuICAgICAgICBpZiAoIWNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgLy8g5om+5Yiw5LqG5LiN5ZCI5rOV5YWD57Sg77yI5LiN5Zyo5LiK6Z2i55qE5Yeg5L2V5YiX6KGo6YeM6Z2i77yJXG4gICAgICAgIGNvbnN0IGdvdE5vID0gY2hpbGRyZW4uZmluZCgoaXRlbSkgPT4gaXRlbS52aXNpYmxlICYmIHllc1R5cGVzLmluZGV4T2YoaXRlbS50eXBlKSA9PT0gLTEpO1xuICAgICAgICByZXR1cm4gIWdvdE5vO1xuICAgIH0sXG4gICAgaXNSZW5kZXJDaGlsZHJlbjogKG5vZGUpID0+IHtcbiAgICAgICAgaWYgKCEobm9kZS50eXBlID09PSAnSU5TVEFOQ0UnIHx8IG5vZGUudHlwZSA9PT0gJ0NPTVBPTkVOVCcpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8g5Y+q5pyJ5LiA5Liq5a2Q5YWD57SgXG4gICAgICAgIGlmIChub2RlLmNoaWxkcmVuLmxlbmd0aCAhPT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIGNvbnN0IG9ubHlDaGlsZHJlbiA9IG5vZGUuY2hpbGRyZW5bMF07XG4gICAgICAgIC8vIGlmIChvbmx5Q2hpbGRyZW4udHlwZSA9PT0gJ0lOU1RBTkNFJykge1xuICAgICAgICAvLyAgIHJldHVybiB0cnVlO1xuICAgICAgICAvLyB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LFxuICAgIGdldE5vZGVJbmZvOiAobm9kZSkgPT4ge1xuICAgICAgICBpZiAoIW5vZGUudmlzaWJsZSB8fCBub2RlLm5hbWUuc3RhcnRzV2l0aChcIl9cIikpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIC8vIOebtOaOpea4suafk+WtkOWFg+e0oFxuICAgICAgICBpZiAoTk9ERS5pc1JlbmRlckNoaWxkcmVuKG5vZGUpKSB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlO1xuICAgICAgICAgICAgcmV0dXJuIE5PREUuZ2V0Tm9kZUluZm8obm9kZS5jaGlsZHJlblswXSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaXNTdHJ1Y3ROb2RlID0gTk9ERS5pc1N0cnVjdE5vZGUobm9kZSk7XG4gICAgICAgIGxldCBub2RlSW5mbyA9IHtcbiAgICAgICAgICAgIGlnbm9yZUNsYXNzTmFtZTogJycsXG4gICAgICAgICAgICBjbGFzc05hbWU6ICcnLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtdXG4gICAgICAgIH07XG4gICAgICAgIGlmIChpc1N0cnVjdE5vZGUpIHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIG5vZGVJbmZvLnRhZ05hbWUgPSAnaSc7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY29tcG9uZW50ID0gQ09NUE9ORU5ULmdldEluZm8obm9kZSk7XG4gICAgICAgIGNvbnN0IGZpbGwgPSBGSUxMLmdldEluZm8obm9kZSk7XG4gICAgICAgIGNvbnN0IHRleHQgPSBURVhULmdldEluZm8obm9kZSk7XG4gICAgICAgIGNvbnN0IHN0cm9rZSA9IFNUUk9LRS5nZXRJbmZvKG5vZGUpO1xuICAgICAgICBjb25zdCBncmlkID0gR1JJRC5nZXRJbmZvKG5vZGUpO1xuICAgICAgICBjb25zdCBlZmZlY3QgPSBFRkZFQ1QuZ2V0SW5mbyhub2RlKTtcbiAgICAgICAgY29uc3Qgb3RoZXJzID0gT1RIRVJTLmdldEluZm8obm9kZSk7XG4gICAgICAgIGNvbnN0IGZsZXggPSBGTEVYLmdldEluZm8obm9kZSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHtjb21wb25lbnQsIGZpbGwsIHRleHQsIHN0cm9rZSwgZ3JpZCwgZWZmZWN0fSk7XG4gICAgICAgIG5vZGVJbmZvID0gTk9ERS5leHRlbmRJbmZvKG5vZGVJbmZvLCBmaWxsKTtcbiAgICAgICAgbm9kZUluZm8gPSBOT0RFLmV4dGVuZEluZm8obm9kZUluZm8sIHRleHQpO1xuICAgICAgICBub2RlSW5mbyA9IE5PREUuZXh0ZW5kSW5mbyhub2RlSW5mbywgc3Ryb2tlKTtcbiAgICAgICAgbm9kZUluZm8gPSBOT0RFLmV4dGVuZEluZm8obm9kZUluZm8sIGdyaWQpO1xuICAgICAgICBub2RlSW5mbyA9IE5PREUuZXh0ZW5kSW5mbyhub2RlSW5mbywgZWZmZWN0KTtcbiAgICAgICAgbm9kZUluZm8gPSBOT0RFLmV4dGVuZEluZm8obm9kZUluZm8sIGNvbXBvbmVudCk7XG4gICAgICAgIG5vZGVJbmZvID0gTk9ERS5leHRlbmRJbmZvKG5vZGVJbmZvLCBmbGV4KTtcbiAgICAgICAgbm9kZUluZm8gPSBOT0RFLmV4dGVuZEluZm8obm9kZUluZm8sIG90aGVycyk7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgaWYgKGlzU3RydWN0Tm9kZSB8fCBTdHJpbmcobm9kZUluZm8gPT09IG51bGwgfHwgbm9kZUluZm8gPT09IHZvaWQgMCA/IHZvaWQgMCA6IG5vZGVJbmZvLnJlbmRlcldpZHRoKSA9PT0gJzEnKSB7XG4gICAgICAgICAgICBub2RlSW5mby5jbGFzc05hbWUgKz0gJyAnICsgU0FDU1MuYWRkKCd3JywgcGFyc2VJbnQoU3RyaW5nKG5vZGUud2lkdGgpKSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBpZiAoaXNTdHJ1Y3ROb2RlIHx8IFN0cmluZyhub2RlSW5mbyA9PT0gbnVsbCB8fCBub2RlSW5mbyA9PT0gdm9pZCAwID8gdm9pZCAwIDogbm9kZUluZm8ucmVuZGVySGVpZ2h0KSA9PT0gJzEnKSB7XG4gICAgICAgICAgICBub2RlSW5mby5jbGFzc05hbWUgKz0gJyAnICsgU0FDU1MuYWRkKCdoJywgcGFyc2VJbnQoU3RyaW5nKG5vZGUuaGVpZ2h0KSkpO1xuICAgICAgICB9XG4gICAgICAgIG5vZGVJbmZvLmNoaWxkcmVuID0gKCgpID0+IHtcbiAgICAgICAgICAgIGlmIChub2RlLnR5cGUgPT09ICdURVhUJykge1xuICAgICAgICAgICAgICAgIHJldHVybiBURVhULmdldFRleHRDaGlsZHJlbihub2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHsgcmVuZGVyQ2hpbGRyZW4gPSAxIH0gPSBjb21wb25lbnQgfHwge307XG4gICAgICAgICAgICBpZiAoaXNTdHJ1Y3ROb2RlIHx8IFN0cmluZyhyZW5kZXJDaGlsZHJlbikgPT09ICcwJykge1xuICAgICAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIOa4suafk+WtkOiKgueCuVxuICAgICAgICAgICAgaWYgKFN0cmluZyhyZW5kZXJDaGlsZHJlbikgPT09ICcyJykge1xuICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICByZXR1cm4gbm9kZS5maW5kQWxsKGMgPT4gYy50eXBlID09PSAnVEVYVCcpLm1hcCgoYykgPT4gYy5jaGFyYWN0ZXJzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIHJldHVybiBOT0RFLmdldE5vZGVzSW5mbyhub2RlLmNoaWxkcmVuKTtcbiAgICAgICAgfSkoKTtcbiAgICAgICAgLy8g5pW05Liq6aG555uu6YO95b+955Wl55qEIGNsYXNzTmFtZVxuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGNvbnN0IHsgaWdub3JlQ2xhc3NOYW1lID0gJycgfSA9IENPTkZJRy5nZXRDdXJyZW50KCkgfHwge307XG4gICAgICAgIG5vZGVJbmZvLmNsYXNzTmFtZSA9IFVUSUxTLmNsZWFyQ2xhc3NOYW1lKG5vZGVJbmZvLmNsYXNzTmFtZSwgYCR7bm9kZUluZm8uaWdub3JlQ2xhc3NOYW1lfSAke2lnbm9yZUNsYXNzTmFtZX1gKTtcbiAgICAgICAgZGVsZXRlIG5vZGVJbmZvLmlnbm9yZUNsYXNzTmFtZTtcbiAgICAgICAgLy8g5YeP5bCR5bWM5aWXXG4gICAgICAgIGlmIChub2RlSW5mby5jaGlsZHJlbi5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkcmVuSW5mbyA9IG5vZGVJbmZvLmNoaWxkcmVuWzBdO1xuICAgICAgICAgICAgLy8g5aaC5p6c54i25YWD57Sg5ZKM5a2Q5YWD57SgIHRhZ05hbWUg55u45ZCM5ZCI5bm2IGNsYXNzTmFtZVxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgaWYgKGNoaWxkcmVuSW5mby50YWdOYW1lID09PSBub2RlSW5mby50YWdOYW1lICYmICFub2RlSW5mby5jb21wb25lbnROYW1lICYmICFjaGlsZHJlbkluZm8uY29tcG9uZW50TmFtZSkge1xuICAgICAgICAgICAgICAgIGNoaWxkcmVuSW5mby5jbGFzc05hbWUgPSBVVElMUy5jbGVhckNsYXNzTmFtZShgJHtjaGlsZHJlbkluZm8uY2xhc3NOYW1lfSAke25vZGVJbmZvLmNsYXNzTmFtZX1gKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2hpbGRyZW5JbmZvO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKG5vZGUpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhub2RlSW5mbyk7XG4gICAgICAgIHJldHVybiBub2RlSW5mbztcbiAgICB9LFxuICAgIHNvcnQ6IChub2RlcyA9IFtdKSA9PiB7XG4gICAgICAgIHJldHVybiBbLi4ubm9kZXNdLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgIGlmIChhLnkgPT09IGIueSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBhLnggLSBiLng7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYS55IC0gYi55O1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIGdldE5vZGVzSW5mbzogKG5vZGVzID0gW10pID0+IHtcbiAgICAgICAgbGV0IGluZm8gPSBbXTtcbiAgICAgICAgLy8g6ZyA6KaB5o6S5bqP5LiA5LiLXG4gICAgICAgIGNvbnN0IHNvcnROb2RlcyA9IE5PREUuc29ydChub2Rlcyk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBzb3J0Tm9kZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IG5vZGVJbmZvID0gTk9ERS5nZXROb2RlSW5mbyhzb3J0Tm9kZXNbaV0pO1xuICAgICAgICAgICAgaWYgKCFub2RlSW5mbykge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG5vZGVJbmZvIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgICAgICBpbmZvID0gWy4uLmluZm8sIC4uLm5vZGVJbmZvXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGluZm8ucHVzaChub2RlSW5mbyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IE5PREU7XG4iLCJjb25zdCBTQUNTUyA9IHtcbiAgICBkYXRhOiB7fSxcbiAgICBpbml0OiAoKSA9PiB7XG4gICAgICAgIFNBQ1NTLmRhdGEgPSB7fTtcbiAgICB9LFxuICAgIG5hbWVNYXA6IHtcbiAgICAgICAgJ2ZzJzogJ2ZvbnQtc2l6ZScsXG4gICAgICAgICdsaCc6ICdsaW5lLWhlaWdodCcsXG4gICAgICAgICdscyc6ICdsZXR0ZXItc3BhY2UnLFxuICAgICAgICAnZmYnOiAnZm9udC1mYW1pbHknLFxuICAgICAgICAncHQnOiAncGFkZGluZy10b3AnLFxuICAgICAgICAncHInOiAncGFkZGluZy1yaWdodCcsXG4gICAgICAgICdwYic6ICdwYWRkaW5nLWJvdHRvbScsXG4gICAgICAgICdwbCc6ICdwYWRkaW5nLWxlZnQnLFxuICAgICAgICAnbXQnOiAnbWFyZ2luLXRvcCcsXG4gICAgICAgICdtcic6ICdtYXJnaW4tcmlnaHQnLFxuICAgICAgICAnbWInOiAnbWFyZ2luLWJvdHRvbScsXG4gICAgICAgICdtbCc6ICdtYXJnaW4tbGVmdCcsXG4gICAgICAgICdoJzogJ2hlaWdodCcsXG4gICAgICAgICd3JzogJ3dpZHRoJyxcbiAgICAgICAgJ2J0bHInOiAnYm9yZGVyLXRvcC1sZWZ0LXJhZGl1cycsXG4gICAgICAgICdidHJyJzogJ2JvcmRlci10b3AtcmlnaHQtcmFkaXVzJyxcbiAgICAgICAgJ2JicnInOiAnYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXMnLFxuICAgICAgICAnYmJscic6ICdib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzJyxcbiAgICAgICAgJ2JyJzogJ2JvcmRlci1yYWRpdXMnXG4gICAgfSxcbiAgICBnZXRDbGFzc1NlbGVjdG9yQnlOYW1lOiAoY2xhc3NOYW1lID0gJycpID0+IHtcbiAgICAgICAgaWYgKGNsYXNzTmFtZS5pbmRleE9mKCcuJykgPiAtMSkge1xuICAgICAgICAgICAgY2xhc3NOYW1lID0gY2xhc3NOYW1lLnJlcGxhY2UoL1xcLi9nLCAnXFxcXC4nKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2xhc3NOYW1lLmluZGV4T2YoJzonKSA+IC0xKSB7XG4gICAgICAgICAgICBjbGFzc05hbWUgPSBjbGFzc05hbWUucmVwbGFjZSgvXFw6L2csICdcXFxcOicpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjbGFzc05hbWUuaW5kZXhPZignJScpID4gLTEpIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IGNsYXNzTmFtZS5yZXBsYWNlKC9cXCUvZywgJ1xcXFwlJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNsYXNzTmFtZTtcbiAgICB9LFxuICAgIGdldFN0cmluZzogKCkgPT4ge1xuICAgICAgICBjb25zdCBkYXRhID0gU0FDU1MuZGF0YTtcbiAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGRhdGEpLnNvcnQoKTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0ga2V5cy5tYXAoKG5hbWUpID0+IGAuJHtTQUNTUy5nZXRDbGFzc1NlbGVjdG9yQnlOYW1lKG5hbWUpfXske2RhdGFbbmFtZV19O31gKS5qb2luKCdcXG4nKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9LFxuICAgIGFkZDogKG5hbWUgPSAnJywgdmFsdWUsIHVuaXQgPSAncHgnKSA9PiB7XG4gICAgICAgIGlmICghbmFtZSB8fCAhdmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwcm9wTmFtZSA9IFNBQ1NTLm5hbWVNYXBbbmFtZV07XG4gICAgICAgIGlmICghcHJvcE5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuICAgICAgICAvLyDlj6rkv53nlZnkuKTkvY3lsI/mlbBcbiAgICAgICAgY29uc3QgdXNlVmFsdWUgPSBOdW1iZXIodmFsdWUpID8gcGFyc2VGbG9hdChOdW1iZXIodmFsdWUpLnRvRml4ZWQoMikpIDogdmFsdWU7XG4gICAgICAgIC8vIOWmguaenOaYryBweCDkuI3pnIDopoHmuLLmn5NcbiAgICAgICAgY29uc3QgY2xhc3NVbml0ID0gdW5pdCA9PT0gJ3B4JyA/ICcnIDogdW5pdDtcbiAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gYCR7bmFtZX0ke3VzZVZhbHVlfSR7Y2xhc3NVbml0fWA7XG4gICAgICAgIFNBQ1NTLmRhdGFbY2xhc3NOYW1lXSA9IGAke3Byb3BOYW1lfToke3VzZVZhbHVlfSR7dW5pdH1gO1xuICAgICAgICByZXR1cm4gY2xhc3NOYW1lO1xuICAgIH0sXG4gICAgYWRkRm9udEZhbWlseTogKHZhbHVlKSA9PiB7XG4gICAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB2YWx1ZU9rID0gdmFsdWUucmVwbGFjZSgvW1xcV10vZywgJycpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IGBmZjoke3ZhbHVlT2t9YDtcbiAgICAgICAgU0FDU1MuZGF0YVtjbGFzc05hbWVdID0gYGZvbnQtZmFtaWx5OlwiJHt2YWx1ZX1cImA7XG4gICAgICAgIHJldHVybiBjbGFzc05hbWU7XG4gICAgfSxcbiAgICBhZGRDb2xvcjogKHJnYmEgPSBbXSkgPT4ge1xuICAgICAgICBpZiAoIXJnYmEgJiYgcmdiYS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBgYzoke3JnYmEuam9pbignJyl9YDtcbiAgICAgICAgU0FDU1MuZGF0YVtjbGFzc05hbWVdID0gYGNvbG9yOnJnYmEoJHtyZ2JhLmpvaW4oJywnKX0pYDtcbiAgICAgICAgcmV0dXJuIGNsYXNzTmFtZTtcbiAgICB9LFxuICAgIGFkZEJnQ29sb3I6IChyZ2JhID0gW10pID0+IHtcbiAgICAgICAgaWYgKCFyZ2JhICYmIHJnYmEubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gYGJjOiR7cmdiYS5qb2luKCcnKX1gO1xuICAgICAgICBTQUNTUy5kYXRhW2NsYXNzTmFtZV0gPSBgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKCR7cmdiYS5qb2luKCcsJyl9KWA7XG4gICAgICAgIHJldHVybiBjbGFzc05hbWU7XG4gICAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IFNBQ1NTO1xuIiwiY29uc3QgVVRJTFMgPSB7XG4gICAgaXNCbG9jazogKHRhZ05hbWUgPSAnJykgPT4ge1xuICAgICAgICBjb25zdCBibG9ja1RhZyA9IFsnZGl2JywgJ2gxJywgJ2gyJywgJ2gzJywgJ2g0JywgJ2g1JywgJ2g2JywgJ3AnXTtcbiAgICAgICAgcmV0dXJuIGJsb2NrVGFnLmluZGV4T2YodGFnTmFtZSkgPiAtMTtcbiAgICB9LFxuICAgIGlzU2VsZlRhZzogKHRhZ05hbWUgPSAnJykgPT4ge1xuICAgICAgICBjb25zdCBzZWxmVGFnID0gWydpbWcnLCAnbGluaycsICdtZXRhJywgJ2JyJywgJ2JyJywgJ2hyJywgJ2lucHV0JywgJ2NvbCcsICdmcmFtZScsICdhcmVhJywgJ3BhcmFtJywgJ29iamVjdCcsICdlbWJlZCcsICdrZXlnZW4nLCAnc291cmNlJ107XG4gICAgICAgIHJldHVybiBzZWxmVGFnLmluZGV4T2YodGFnTmFtZSkgPiAtMTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIOWOu+mHjeWSjOWOu+epulxuICAgICAqIEBwYXJhbSBhcnJTdHJcbiAgICAgKi9cbiAgICBjbGVhckNsYXNzTmFtZTogKGNsYXNzTmFtZSA9ICcnLCBpZ25vcmVDbGFzc05hbWUgPSAnJykgPT4ge1xuICAgICAgICBpZiAoIWNsYXNzTmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZXMgPSBjbGFzc05hbWUuc3BsaXQoJyAnKTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgICAgIGNsYXNzTmFtZXMuZm9yRWFjaCgoaXRlbSA9ICcnKSA9PiB7XG4gICAgICAgICAgICBpZiAoaXRlbSAmJiBpdGVtICE9PSAnbnVsbCcgJiYgcmVzdWx0LmluZGV4T2YoaXRlbSkgPT09IC0xICYmIGlnbm9yZUNsYXNzTmFtZS5pbmRleE9mKGl0ZW0pID09PSAtMSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGl0ZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdC5qb2luKCcgJyk7XG4gICAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IFVUSUxTO1xuIiwiaW1wb3J0IEhUTUwgZnJvbSBcIi4vSFRNTFwiO1xuaW1wb3J0IEpTWCBmcm9tIFwiLi9KU1hcIjtcbmNvbnN0IERPTSA9IHtcbiAgICByZW5kZXI6IChvYmogPSBbXSwgaXNKU1gpID0+IHtcbiAgICAgICAgaWYgKGlzSlNYKSB7XG4gICAgICAgICAgICByZXR1cm4gSlNYLmdldERvbUJ5QXJyYXkob2JqKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gSFRNTC5nZXREb21CeUFycmF5KG9iaik7XG4gICAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IERPTTtcbiIsInZhciBfX3Jlc3QgPSAodGhpcyAmJiB0aGlzLl9fcmVzdCkgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgICB2YXIgdCA9IHt9O1xuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxuICAgICAgICB0W3BdID0gc1twXTtcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcbiAgICAgICAgfVxuICAgIHJldHVybiB0O1xufTtcbmltcG9ydCBVVElMUyBmcm9tIFwiLi4vVVRJTFNcIjtcbi8vIGxlZ2FsIOWQiOazleWxnuaAp1xuY29uc3QgbGVnYWxQcm9wID0gWydjbGFzcycsICd0eXBlJywgJ25hbWUnLCAncm9sZScsICdkaXNhYmxlZCcsICdpZCcsICd0aXRsZScsICdsYW5nJywgJ2RpcicsICd0YWJpbmRleCcsICdhY2Nlc3NrZXknLCAnc3JjJywgJ2hyZWYnLCAnc3R5bGUnLCAnYXJpYS1oaWRkZW4nLCAndGFyZ2V0JywgJ3JlbCddO1xuY29uc3QgSFRNTCA9IHtcbiAgICBnZXRQcm9wc1N0cmluZzogKF9hID0ge30pID0+IHtcbiAgICAgICAgdmFyIHsgY2xhc3NOYW1lID0gJycgfSA9IF9hLCBwcm9wcyA9IF9fcmVzdChfYSwgW1wiY2xhc3NOYW1lXCJdKTtcbiAgICAgICAgY29uc3QgYXJyUHJvcHMgPSBbXTtcbiAgICAgICAgY29uc3QgY2xhc3NOYW1lcyA9IGNsYXNzTmFtZS5zcGxpdCgnICcpO1xuICAgICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhwcm9wcykpIHtcbiAgICAgICAgICAgIGNvbnN0IHN0clZhbHVlID0gU3RyaW5nKHZhbHVlKTtcbiAgICAgICAgICAgIGlmIChzdHJWYWx1ZSA9PT0gJycgfHwgc3RyVmFsdWUgPT09ICdmYWxzZScpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChrZXkuc3RhcnRzV2l0aCgnZGF0YS0nKSkge1xuICAgICAgICAgICAgICAgIGFyclByb3BzLnB1c2goYCR7a2V5fT1cIiR7c3RyVmFsdWV9XCJgKTtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChsZWdhbFByb3AuaW5kZXhPZihrZXkpID4gLTEpIHtcbiAgICAgICAgICAgICAgICBhcnJQcm9wcy5wdXNoKGAke2tleX09XCIke3N0clZhbHVlfVwiYCk7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChzdHJWYWx1ZSA9PT0gJ3RydWUnKSB7XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lcy5wdXNoKGBfJHtrZXl9YCk7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNsYXNzTmFtZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBhcnJQcm9wcy5wdXNoKGBjbGFzcz1cIiR7Y2xhc3NOYW1lcy5qb2luKCcgJyl9XCJgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXJyUHJvcHMuam9pbignICcpO1xuICAgIH0sXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGdldEl0ZW1Eb206IChpdGVtKSA9PiB7XG4gICAgICAgIGlmICghaXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgY2hpbGRyZW4gPSBbXSwgcHJvcHMgPSB7fSwgY2xhc3NOYW1lID0gJycgfSA9IGl0ZW07XG4gICAgICAgIGNvbnN0IHRhZ05hbWUgPSBpdGVtLnRhZ05hbWUgfHwgJ2Rpdic7XG4gICAgICAgIGNvbnN0IHByb3BzU3RyaW5nID0gSFRNTC5nZXRQcm9wc1N0cmluZyhPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHByb3BzKSwgeyBjbGFzc05hbWUgfSkpO1xuICAgICAgICBjb25zdCB0YWdTdGFydCA9IGAke3RhZ05hbWV9JHtwcm9wc1N0cmluZyA/IGAgJHtwcm9wc1N0cmluZ31gIDogJyd9YDtcbiAgICAgICAgaWYgKFVUSUxTLmlzU2VsZlRhZyh0YWdOYW1lKSkge1xuICAgICAgICAgICAgcmV0dXJuIGA8JHt0YWdTdGFydH0vPmA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFjaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBgPCR7dGFnU3RhcnR9PjwvJHt0YWdOYW1lfT5gO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBgPCR7dGFnU3RhcnR9PiR7SFRNTC5nZXREb21CeUFycmF5KGNoaWxkcmVuKX08LyR7dGFnTmFtZX0+YDtcbiAgICB9LFxuICAgIGdldERvbUJ5QXJyYXk6IChvYmogPSBbXSkgPT4ge1xuICAgICAgICByZXR1cm4gb2JqLm1hcCgoaXRlbSkgPT4gSFRNTC5nZXRJdGVtRG9tKGl0ZW0pKS5qb2luKCcnKTtcbiAgICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgSFRNTDtcbiIsImltcG9ydCBVVElMUyBmcm9tIFwiLi4vVVRJTFNcIjtcbmNvbnN0IEpTWCA9IHtcbiAgICBnZXRQcm9wc1N0cmluZzogKHByb3BzID0ge30pID0+IHtcbiAgICAgICAgY29uc3QgYXJyUHJvcHMgPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMocHJvcHMpKSB7XG4gICAgICAgICAgICBjb25zdCBpdGVtID0gKChrZXksIHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RyVmFsdWUgPSBTdHJpbmcodmFsdWUpO1xuICAgICAgICAgICAgICAgIGlmIChzdHJWYWx1ZSA9PT0gJycgfHwgdmFsdWUgPT09ICdmYWxzZScpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gYCR7a2V5fT1cIiR7c3RyVmFsdWV9XCJgO1xuICAgICAgICAgICAgfSkoa2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICBpdGVtICYmIGFyclByb3BzLnB1c2goaXRlbSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFyclByb3BzLmpvaW4oJyAnKTtcbiAgICB9LFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBnZXRJdGVtRG9tOiAoaXRlbSkgPT4ge1xuICAgICAgICBpZiAoIWl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGl0ZW0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IGNoaWxkcmVuID0gW10sIHByb3BzID0ge30sIGNsYXNzTmFtZSA9ICcnIH0gPSBpdGVtO1xuICAgICAgICBjb25zdCB0YWdOYW1lID0gaXRlbS5jb21wb25lbnROYW1lIHx8IGl0ZW0udGFnTmFtZSB8fCAnZGl2JztcbiAgICAgICAgY29uc3Qgc3RyUHJvcHMgPSBKU1guZ2V0UHJvcHNTdHJpbmcoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBwcm9wcyksIHsgY2xhc3NOYW1lIH0pKTtcbiAgICAgICAgY29uc3QgdGFnU3RhcnQgPSBgJHt0YWdOYW1lfSR7c3RyUHJvcHMgPyBgICR7c3RyUHJvcHN9YCA6ICcnfWA7XG4gICAgICAgIGlmIChVVElMUy5pc1NlbGZUYWcodGFnTmFtZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBgPCR7dGFnU3RhcnR9Lz5gO1xuICAgICAgICB9XG4gICAgICAgIGlmICghY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaXRlbS5jb21wb25lbnROYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGA8JHt0YWdTdGFydH0vPmA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYDwke3RhZ1N0YXJ0fT48LyR7dGFnTmFtZX0+YDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYDwke3RhZ1N0YXJ0fT4ke0pTWC5nZXREb21CeUFycmF5KGNoaWxkcmVuKX08LyR7dGFnTmFtZX0+YDtcbiAgICB9LFxuICAgIGdldERvbUJ5QXJyYXk6IChvYmogPSBbXSkgPT4ge1xuICAgICAgICByZXR1cm4gb2JqLm1hcCgoaXRlbSkgPT4gSlNYLmdldEl0ZW1Eb20oaXRlbSkpLmpvaW4oJycpO1xuICAgIH1cbn07XG5leHBvcnQgZGVmYXVsdCBKU1g7XG4iLCJjb25zdCBDT0xPUiA9IHtcbiAgICBnZXRSZ2JhQnlGaWxsOiAoeyBjb2xvciwgb3BhY2l0eSwgdmlzaWJsZSB9KSA9PiB7XG4gICAgICAgIC8vIOWmguaenOS4jeWPr+ingVxuICAgICAgICBpZiAoIXZpc2libGUgfHwgb3BhY2l0eSA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgciA9IHBhcnNlSW50KFN0cmluZyhjb2xvci5yICogMjU1KSk7XG4gICAgICAgIGNvbnN0IGcgPSBwYXJzZUludChTdHJpbmcoY29sb3IuZyAqIDI1NSkpO1xuICAgICAgICBjb25zdCBiID0gcGFyc2VJbnQoU3RyaW5nKGNvbG9yLmIgKiAyNTUpKTtcbiAgICAgICAgY29uc3QgYSA9IFN0cmluZyhvcGFjaXR5KS5pbmRleE9mKCcuJykgPiAtMSA/IG9wYWNpdHkudG9GaXhlZCgxKSA6IG9wYWNpdHk7XG4gICAgICAgIHJldHVybiBbciwgZywgYiwgYV07XG4gICAgfSxcbn07XG5leHBvcnQgZGVmYXVsdCBDT0xPUjtcbiIsImltcG9ydCBDT05GSUcgZnJvbSBcIi4uL0NPTkZJR1wiO1xuY29uc3QgRUZGRUNUID0ge1xuICAgIGdldEluZm86IChub2RlKSA9PiB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgcmV0dXJuIENPTkZJRy5nZXRJbmZvQnlJZChub2RlLmVmZmVjdFN0eWxlSWQpO1xuICAgIH1cbn07XG5leHBvcnQgZGVmYXVsdCBFRkZFQ1Q7XG4iLCJ2YXIgX19yZXN0ID0gKHRoaXMgJiYgdGhpcy5fX3Jlc3QpIHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gICAgdmFyIHQgPSB7fTtcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcbiAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XG4gICAgICAgIH1cbiAgICByZXR1cm4gdDtcbn07XG5pbXBvcnQgQ09MT1IgZnJvbSBcIi4vQ09MT1JcIjtcbmltcG9ydCBDT05GSUcgZnJvbSBcIi4uL0NPTkZJR1wiO1xuaW1wb3J0IFNBQ1NTIGZyb20gXCIuLi9TQUNTU1wiO1xuY29uc3QgRklMTCA9IHtcbiAgICBnZXRGaWxsOiAobm9kZSkgPT4ge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGNvbnN0IFtmaXJzdEZpbGwgPSBudWxsXSA9IG5vZGUuZ2V0UmFuZ2VGaWxscygwLCAxKSB8fCBbXTtcbiAgICAgICAgLy8g5rKh5pyJ6K6+572u5Lu75L2V6aKc6ImyLCDnm67liY3kuI3mlK/mjIHmuJDlj5hcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBpZiAoIWZpcnN0RmlsbCB8fCBmaXJzdEZpbGwudHlwZSAhPT0gJ1NPTElEJykge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY29sb3IgPSBDT0xPUi5nZXRSZ2JhQnlGaWxsKGZpcnN0RmlsbCk7XG4gICAgICAgIGlmICghY29sb3IpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IG5vZGUudHlwZSA9PT0gJ1RFWFQnID8gU0FDU1MuYWRkQ29sb3IoY29sb3IpIDogU0FDU1MuYWRkQmdDb2xvcihjb2xvcik7XG4gICAgICAgIC8vIOaWh+acrOaYr+eUqOminOiJsu+8jOWFtuWug+eQhuino+S4uuiDjOaZr+iJslxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY2xhc3NOYW1lXG4gICAgICAgIH07XG4gICAgfSxcbiAgICAvLyDojrflj5bloavlhYXkv6Hmga9cbiAgICBnZXRJbmZvOiAobm9kZSkgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhub2RlKTtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBjb25zdCBpZCA9IHR5cGVvZiBub2RlLmZpbGxTdHlsZUlkID09PSAnc3RyaW5nJyA/IG5vZGUuZmlsbFN0eWxlSWQgOiBub2RlLmdldFJhbmdlRmlsbFN0eWxlSWQoMCwgMSk7XG4gICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICBjb25zdCBfYSA9IENPTkZJRy5nZXRJbmZvQnlJZChpZCkgfHwge30sIHsgdGV4dENsYXNzTmFtZSA9ICcnLCBjbGFzc05hbWUgPSAnJyB9ID0gX2EsIHJlc3QgPSBfX3Jlc3QoX2EsIFtcInRleHRDbGFzc05hbWVcIiwgXCJjbGFzc05hbWVcIl0pO1xuICAgICAgICBjb25zdCByZW5kZXJDbGFzc05hbWUgPSBub2RlLnR5cGUgPT09ICdURVhUJyA/IHRleHRDbGFzc05hbWUgOiBjbGFzc05hbWU7XG4gICAgICAgIGlmICghcmVuZGVyQ2xhc3NOYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gRklMTC5nZXRGaWxsKG5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiByZW5kZXJDbGFzc05hbWUgfSwgcmVzdCk7XG4gICAgfSxcbn07XG5leHBvcnQgZGVmYXVsdCBGSUxMO1xuIiwiaW1wb3J0IFNBQ1NTIGZyb20gXCIuLi9TQUNTU1wiO1xuLy8gaW1wb3J0IENPTkZJRyBmcm9tIFwiLi9DT05GSUdcIjtcbmNvbnN0IEZMRVggPSB7XG4gICAgaXNGbGV4OiAobm9kZSkgPT4ge1xuICAgICAgICAvLyDov5nlh6DkuKrlhYPntKDpg73kuI3lgZogRmxleCDliKTmlq3lpITnkIZcbiAgICAgICAgaWYgKFsnVEVYVCddLmluZGV4T2Yobm9kZS50eXBlKSA+IC0xKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChub2RlID09PSBudWxsIHx8IG5vZGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG5vZGUubGF5b3V0TW9kZSkgIT09IFwiTk9ORVwiO1xuICAgIH0sXG4gICAgZ2V0VGhpc0luZm86IChub2RlKSA9PiB7XG4gICAgICAgIGlmICghRkxFWC5pc0ZsZXgobm9kZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgbGF5b3V0TW9kZSwgcHJpbWFyeUF4aXNBbGlnbkl0ZW1zLCBjb3VudGVyQXhpc0FsaWduSXRlbXMsIGNoaWxkcmVuID0gW10gfSA9IG5vZGU7XG4gICAgICAgIC8vIOayoeacieWtkOWFg+e0oCBmbGV4IOW4g+WxgOayoeacieaEj+S5iVxuICAgICAgICBpZiAoIWNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gW107XG4gICAgICAgIC8vIOWmguaenOaYr+e6teWQkeeahCDov5nph4zlj6/ku6XkuI3kvb/nlKggZmxleCDluIPlsYBcbiAgICAgICAgaWYgKGxheW91dE1vZGUgPT09ICdWRVJUSUNBTCcpIHtcbiAgICAgICAgICAgIC8vIOW9k+aYr+e6teWQkeW4g+WxgOW9k+aXtuWAmVxuICAgICAgICAgICAgY2xhc3NOYW1lLnB1c2goe1xuICAgICAgICAgICAgICAgIC8vIFwiTUlOXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgXCJDRU5URVJcIjogXCJ0YWNcIixcbiAgICAgICAgICAgICAgICBcIk1BWFwiOiBcInRhclwiLFxuICAgICAgICAgICAgfVtjb3VudGVyQXhpc0FsaWduSXRlbXNdKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZS5wdXNoKHtcbiAgICAgICAgICAgICAgICAvLyBcIk1JTlwiOiBcIlwiLFxuICAgICAgICAgICAgICAgIFwiQ0VOVEVSXCI6IFwiamNjXCIsXG4gICAgICAgICAgICAgICAgXCJNQVhcIjogXCJqY2ZlXCIsXG4gICAgICAgICAgICAgICAgXCJTUEFDRV9CRVRXRUVOXCI6IFwiamNzYlwiLFxuICAgICAgICAgICAgfVtwcmltYXJ5QXhpc0FsaWduSXRlbXNdIHx8IFwiXCIpO1xuICAgICAgICAgICAgY2xhc3NOYW1lLnB1c2goe1xuICAgICAgICAgICAgICAgIC8vXCJNSU5cIjogXCJcIixcbiAgICAgICAgICAgICAgICBcIkNFTlRFUlwiOiBcImFpY1wiLFxuICAgICAgICAgICAgICAgIFwiTUFYXCI6IFwiYWlmZVwiLFxuICAgICAgICAgICAgfVtjb3VudGVyQXhpc0FsaWduSXRlbXNdIHx8IFwiXCIpO1xuICAgICAgICAgICAgY2xhc3NOYW1lLnB1c2goJ2RmJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLmpvaW4oJyAnKVxuICAgICAgICB9O1xuICAgIH0sXG4gICAgZ2V0SW5mb0Zyb21QYXJlbnQ6IChub2RlKSA9PiB7XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IG5vZGUucGFyZW50O1xuICAgICAgICBpZiAoIXBhcmVudCB8fCAhRkxFWC5pc0ZsZXgocGFyZW50KSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBjb25zdCB7IGxheW91dE1vZGUsIHByaW1hcnlBeGlzQWxpZ25JdGVtcywgaXRlbVNwYWNpbmcgfSA9IHBhcmVudDtcbiAgICAgICAgLy8g5Lik56uv5a+55YW26KGo56S65LiN6ZyA6KaB6L+Z5LqbXG4gICAgICAgIGlmIChwcmltYXJ5QXhpc0FsaWduSXRlbXMgPT09IFwiU1BBQ0VfQkVUV0VFTlwiKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBbXTtcbiAgICAgICAgY29uc3QgaWdub3JlQ2xhc3NOYW1lID0gW107XG4gICAgICAgIGNvbnN0IHsgaWQgPSAnJyB9ID0gcGFyZW50LmNoaWxkcmVuLmZpbHRlcihjID0+IGMudmlzaWJsZSkucG9wKCkgfHwge307XG4gICAgICAgIGNvbnN0IGlzTGFzdENoaWxkcmVuID0gaWQgPT09IG5vZGUuaWQ7XG4gICAgICAgIC8vIOS4uuWtkOWFg+e0oOa3u+WKoOmXtOi3nVxuICAgICAgICBpZiAoaXRlbVNwYWNpbmcgPiAwICYmICFpc0xhc3RDaGlsZHJlbikge1xuICAgICAgICAgICAgY29uc3QgZ3V0dGVyTWFwID0ge1xuICAgICAgICAgICAgICAgIFwiVkVSVElDQUxcIjogXCJtYlwiLFxuICAgICAgICAgICAgICAgIFwiSE9SSVpPTlRBTFwiOiBcIm1yXCJcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjbGFzc05hbWUucHVzaChTQUNTUy5hZGQoZ3V0dGVyTWFwW2xheW91dE1vZGVdLCBpdGVtU3BhY2luZykpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChub2RlLmxheW91dEdyb3cgPT09IDEpIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZS5wdXNoKCdmMScpO1xuICAgICAgICAgICAgaWdub3JlQ2xhc3NOYW1lLnB1c2goYHcke25vZGUud2lkdGh9YCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLmpvaW4oJyAnKSxcbiAgICAgICAgICAgIGlnbm9yZUNsYXNzTmFtZTogaWdub3JlQ2xhc3NOYW1lLmpvaW4oJyAnKVxuICAgICAgICB9O1xuICAgIH0sXG4gICAgZ2V0SW5mbzogKG5vZGUpID0+IHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBjb25zdCB7IGNsYXNzTmFtZTogYzEgPSAnJywgaWdub3JlQ2xhc3NOYW1lOiBpYzEgPSAnJyB9ID0gRkxFWC5nZXRUaGlzSW5mbyhub2RlKSB8fCB7fTtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBjb25zdCB7IGNsYXNzTmFtZTogYzIgPSAnJywgaWdub3JlQ2xhc3NOYW1lOiBpYzIgPSAnJyB9ID0gRkxFWC5nZXRJbmZvRnJvbVBhcmVudChub2RlKSB8fCB7fTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogYCR7YzF9ICR7YzJ9YCxcbiAgICAgICAgICAgIGlnbm9yZUNsYXNzTmFtZTogYCR7aWMxfSAke2ljMn1gXG4gICAgICAgIH07XG4gICAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IEZMRVg7XG4iLCJpbXBvcnQgQ09ORklHIGZyb20gXCIuLi9DT05GSUdcIjtcbmNvbnN0IEdSSUQgPSB7XG4gICAgZ2V0SW5mbzogKG5vZGUpID0+IHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICByZXR1cm4gQ09ORklHLmdldEluZm9CeUlkKG5vZGUuZ3JpZFN0eWxlSWQpO1xuICAgIH1cbn07XG5leHBvcnQgZGVmYXVsdCBHUklEO1xuIiwiaW1wb3J0IFNBQ1NTIGZyb20gXCIuLi9TQUNTU1wiO1xuY29uc3QgT1RIRVJTID0ge1xuICAgIGdlckJvcmRlclJhZGl1c0NsYXNzTmFtZTogKG5vZGUpID0+IHtcbiAgICAgICAgY29uc3QgdGwgPSBub2RlLnRvcExlZnRSYWRpdXMgfHwgMDtcbiAgICAgICAgY29uc3QgdHIgPSBub2RlLnRvcFJpZ2h0UmFkaXVzIHx8IDA7XG4gICAgICAgIGNvbnN0IGJyID0gbm9kZS5ib3R0b21SaWdodFJhZGl1cyB8fCAwO1xuICAgICAgICBjb25zdCBibCA9IG5vZGUuYm90dG9tTGVmdFJhZGl1cyB8fCAwO1xuICAgICAgICAvLyDlhajpg6jkuLogMFxuICAgICAgICBpZiAoKHRsICsgdHIgKyBiciArIGJsKSA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9XG4gICAgICAgIC8vIOWmguaenOWbm+S4quWAvOmDveebuOetiVxuICAgICAgICBpZiAoKHRsID09PSB0cikgJiYgKHRsID09PSBicikgJiYgKHRsID09PSBibCkpIHtcbiAgICAgICAgICAgIHJldHVybiBbU0FDU1MuYWRkKCdicicsIHRsKV07XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gW107XG4gICAgICAgIHRsICYmIGNsYXNzTmFtZS5wdXNoKFNBQ1NTLmFkZCgnYnRscicsIHRsKSk7XG4gICAgICAgIHRyICYmIGNsYXNzTmFtZS5wdXNoKFNBQ1NTLmFkZCgnYnRycicsIHRyKSk7XG4gICAgICAgIGJyICYmIGNsYXNzTmFtZS5wdXNoKFNBQ1NTLmFkZCgnYmJycicsIGJyKSk7XG4gICAgICAgIGJsICYmIGNsYXNzTmFtZS5wdXNoKFNBQ1NTLmFkZCgnYmJscicsIGJsKSk7XG4gICAgICAgIHJldHVybiBjbGFzc05hbWU7XG4gICAgfSxcbiAgICBnZXRQYWRkaW5nQ2xhc3NOYW1lOiAobm9kZSkgPT4ge1xuICAgICAgICAvLyDkvJrlv73nlaXmjokgMeWDj+e0oOeahCBwYWRkaW5nXG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICBub2RlLnBhZGRpbmdUb3AgPiAxID8gU0FDU1MuYWRkKCdwdCcsIG5vZGUucGFkZGluZ1RvcCkgOiAnJyxcbiAgICAgICAgICAgIG5vZGUucGFkZGluZ1JpZ2h0ID4gMSA/IFNBQ1NTLmFkZCgncHInLCBub2RlLnBhZGRpbmdSaWdodCkgOiAnJyxcbiAgICAgICAgICAgIG5vZGUucGFkZGluZ0JvdHRvbSA+IDEgPyBTQUNTUy5hZGQoJ3BiJywgbm9kZS5wYWRkaW5nQm90dG9tKSA6ICcnLFxuICAgICAgICAgICAgbm9kZS5wYWRkaW5nTGVmdCA+IDEgPyBTQUNTUy5hZGQoJ3BsJywgbm9kZS5wYWRkaW5nTGVmdCkgOiAnJyxcbiAgICAgICAgXTtcbiAgICB9LFxuICAgIGdldEluZm86IChub2RlKSA9PiB7XG4gICAgICAgIGNvbnN0IHBhZGRpbmcgPSBPVEhFUlMuZ2V0UGFkZGluZ0NsYXNzTmFtZShub2RlKTtcbiAgICAgICAgY29uc3QgcmFkaXVzID0gT1RIRVJTLmdlckJvcmRlclJhZGl1c0NsYXNzTmFtZShub2RlKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogWy4uLnBhZGRpbmcsIC4uLnJhZGl1c10uam9pbignICcpXG4gICAgICAgIH07XG4gICAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IE9USEVSUztcbiIsImltcG9ydCBDT05GSUcgZnJvbSBcIi4uL0NPTkZJR1wiO1xuY29uc3QgU1RST0tFID0ge1xuICAgIC8vIOaWh+acrOe7hOS7tlxuICAgIGdldEluZm86IChub2RlKSA9PiB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgcmV0dXJuIENPTkZJRy5nZXRJbmZvQnlJZChub2RlLnN0cm9rZVN0eWxlSWQpO1xuICAgIH0sXG59O1xuZXhwb3J0IGRlZmF1bHQgU1RST0tFO1xuIiwiaW1wb3J0IENPTkZJRyBmcm9tIFwiLi4vQ09ORklHXCI7XG5pbXBvcnQgU0FDU1MgZnJvbSBcIi4uL1NBQ1NTXCI7XG4vLyBAdHMtaWdub3JlXG5jb25zdCBURVhUID0ge1xuICAgIHVuaXRNYXA6IHtcbiAgICAgICAgJ1BFUkNFTlQnOiAnJSdcbiAgICAgICAgLy8gXCJQSVhFTFNcIjpcIlwiXG4gICAgfSxcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgZ2V0Rm9udE5hbWVDbGFzc0J5U3R5bGU6IChzdHlsZSkgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIHN0eWxlICE9PSAnc3RyaW5nJyB8fCAhc3R5bGUpIHtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBmb250TWFwID0ge1xuICAgICAgICAgICAgXCJVTFRSQUxJR0hUXCI6IFwiZncxMDBcIixcbiAgICAgICAgICAgIFwiVEhJTlwiOiAnZncyMDAnLFxuICAgICAgICAgICAgXCJMSUdIVFwiOiBcImZ3MzAwXCIsXG4gICAgICAgICAgICBcIlJFR1VMQVJcIjogXCJcIixcbiAgICAgICAgICAgIFwiTUVESVVNXCI6IFwiZnc1MDBcIixcbiAgICAgICAgICAgIFwiU0VNSUJPTERcIjogXCJmdzYwMFwiLFxuICAgICAgICAgICAgXCJCT0xEXCI6IFwiZnc3MDBcIixcbiAgICAgICAgICAgIFwiQkxBQ0tcIjogXCJmdzkwMFwiLFxuICAgICAgICAgICAgXCJJVEFMSUNcIjogXCJmc2lcIixcbiAgICAgICAgICAgIFwiT0JMSVFVRVwiOiBcImZzaVwiXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IHN0eWxlLnNwbGl0KCcgJykubWFwKChpdGVtKSA9PiBmb250TWFwW2l0ZW0udG9VcHBlckNhc2UoKV0gfHwgJycpO1xuICAgICAgICByZXR1cm4gY2xhc3NOYW1lLmZpbHRlcihpdGVtID0+IGl0ZW0pLmpvaW4oJyAnKTtcbiAgICB9LFxuICAgIGdldFByb3BCeU5vZGU6IChub2RlLCBuYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IG5hbWVNYXAgPSB7XG4gICAgICAgICAgICAndGV4dENhc2UnOiAnZ2V0UmFuZ2VUZXh0Q2FzZScsXG4gICAgICAgICAgICAnbGluZUhlaWdodCc6ICdnZXRSYW5nZUxpbmVIZWlnaHQnLFxuICAgICAgICAgICAgJ2xldHRlclNwYWNpbmcnOiAnZ2V0UmFuZ2VMZXR0ZXJTcGFjaW5nJyxcbiAgICAgICAgICAgICdmb250U2l6ZSc6ICdnZXRSYW5nZUZvbnRTaXplJyxcbiAgICAgICAgICAgICd0ZXh0RGVjb3JhdGlvbic6ICdnZXRSYW5nZVRleHREZWNvcmF0aW9uJyxcbiAgICAgICAgICAgICdmb250TmFtZSc6ICdnZXRSYW5nZUZvbnROYW1lJyxcbiAgICAgICAgICAgICdmaWxscyc6ICdnZXRSYW5nZUZpbGxzJyxcbiAgICAgICAgICAgICd0ZXh0U3R5bGVJZCc6ICdnZXRSYW5nZVRleHRTdHlsZUlkJ1xuICAgICAgICB9O1xuICAgICAgICBpZiAodHlwZW9mIG5vZGVbbmFtZV0gPT09ICdzeW1ib2wnICYmIG5hbWVNYXBbbmFtZV0gJiYgdHlwZW9mIG5vZGVbbmFtZU1hcFtuYW1lXV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHJldHVybiBub2RlW25hbWVNYXBbbmFtZV1dKDAsIDEpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBub2RlW25hbWVdO1xuICAgIH0sXG4gICAgZ2V0QUNTU1NJbmZvOiAobm9kZSkgPT4ge1xuICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBbXTtcbiAgICAgICAgLy8g5paH5a2X5aSn5bCPXG4gICAgICAgIGNvbnN0IGZvbnRTaXplID0gVEVYVC5nZXRQcm9wQnlOb2RlKG5vZGUsICdmb250U2l6ZScpO1xuICAgICAgICBpZiAoZm9udFNpemUgPiAxKSB7XG4gICAgICAgICAgICBjbGFzc05hbWUucHVzaChTQUNTUy5hZGQoJ2ZzJywgZm9udFNpemUpKTtcbiAgICAgICAgfVxuICAgICAgICAvLyDooYzpq5hcbiAgICAgICAgY29uc3QgbGluZUhlaWdodCA9IFRFWFQuZ2V0UHJvcEJ5Tm9kZShub2RlLCAnbGluZUhlaWdodCcpO1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGlmIChsaW5lSGVpZ2h0ID09PSBudWxsIHx8IGxpbmVIZWlnaHQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGxpbmVIZWlnaHQudmFsdWUpIHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIGNvbnN0IHsgdmFsdWUsIHVuaXQgfSA9IGxpbmVIZWlnaHQ7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBjbGFzc05hbWUucHVzaChTQUNTUy5hZGQoJ2xoJywgdmFsdWUsIFRFWFQudW5pdE1hcFt1bml0XSkpO1xuICAgICAgICB9XG4gICAgICAgIC8vIOWtl+mXtOi3nVxuICAgICAgICBjb25zdCBsZXR0ZXJTcGFjaW5nID0gVEVYVC5nZXRQcm9wQnlOb2RlKG5vZGUsICdsZXR0ZXJTcGFjaW5nJyk7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgaWYgKGxldHRlclNwYWNpbmcgPT09IG51bGwgfHwgbGV0dGVyU3BhY2luZyA9PT0gdm9pZCAwID8gdm9pZCAwIDogbGV0dGVyU3BhY2luZy52YWx1ZSkge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgY29uc3QgeyB2YWx1ZSwgdW5pdCB9ID0gbGV0dGVyU3BhY2luZztcbiAgICAgICAgICAgIGNsYXNzTmFtZS5wdXNoKFNBQ1NTLmFkZCgnbHMnLCB2YWx1ZSwgVEVYVC51bml0TWFwW3VuaXRdKSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZm9udE5hbWUgPSBURVhULmdldFByb3BCeU5vZGUobm9kZSwgJ2ZvbnROYW1lJyk7XG4gICAgICAgIC8vIGZvbnQtd2VpZ2h0IGZvbnQtc3R5bGVcbiAgICAgICAgY29uc3QgZm5DbGFzcyA9IFRFWFQuZ2V0Rm9udE5hbWVDbGFzc0J5U3R5bGUoZm9udE5hbWUuc3R5bGUpO1xuICAgICAgICBmbkNsYXNzICYmIGNsYXNzTmFtZS5wdXNoKGZuQ2xhc3MpO1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGlmIChmb250TmFtZSA9PT0gbnVsbCB8fCBmb250TmFtZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogZm9udE5hbWUuZmFtaWx5KSB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBjbGFzc05hbWUucHVzaChTQUNTUy5hZGRGb250RmFtaWx5KGZvbnROYW1lLmZhbWlseSkpO1xuICAgICAgICB9XG4gICAgICAgIC8vIHRleHQtYWxpZ25cbiAgICAgICAgY29uc3QgdGFDbGFzcyA9IHtcbiAgICAgICAgICAgIFwiTEVGVFwiOiAnJyxcbiAgICAgICAgICAgIFwiQ0VOVEVSXCI6ICd0YWMnLFxuICAgICAgICAgICAgXCJSSUdIVFwiOiAndGFyJyxcbiAgICAgICAgICAgIFwiSlVTVElGSUVEXCI6ICd0YWonLFxuICAgICAgICB9W25vZGUudGV4dEFsaWduSG9yaXpvbnRhbF07XG4gICAgICAgIHRhQ2xhc3MgJiYgY2xhc3NOYW1lLnB1c2godGFDbGFzcyk7XG4gICAgICAgIC8vIHZlcnRpY2FsLWFsaWduXG4gICAgICAgIGNvbnN0IHZhQ2xhc3MgPSB7XG4gICAgICAgICAgICBcIlRPUFwiOiAnJyxcbiAgICAgICAgICAgIFwiQ0VOVEVSXCI6ICd2YW0nLFxuICAgICAgICAgICAgXCJCT1RUT01cIjogJ3ZhYicsXG4gICAgICAgIH1bbm9kZS50ZXh0QWxpZ25WZXJ0aWNhbF07XG4gICAgICAgIHZhQ2xhc3MgJiYgY2xhc3NOYW1lLnB1c2godmFDbGFzcyk7XG4gICAgICAgIGNvbnN0IHRleHRDYXNlID0gVEVYVC5nZXRQcm9wQnlOb2RlKG5vZGUsICd0ZXh0Q2FzZScpO1xuICAgICAgICAvLyB0dFxuICAgICAgICBjb25zdCB0dENsYXNzID0ge1xuICAgICAgICAgICAgXCJPUklHSU5BTFwiOiAnJyxcbiAgICAgICAgICAgIFwiVVBQRVJcIjogJ3R0dScsXG4gICAgICAgICAgICBcIkxPV0VSXCI6ICd0dGwnLFxuICAgICAgICAgICAgXCJUSVRMRVwiOiAndHRjJyxcbiAgICAgICAgfVt0ZXh0Q2FzZV07XG4gICAgICAgIHR0Q2xhc3MgJiYgY2xhc3NOYW1lLnB1c2godHRDbGFzcyk7XG4gICAgICAgIGNvbnN0IHRleHREZWNvcmF0aW9uID0gVEVYVC5nZXRQcm9wQnlOb2RlKG5vZGUsICd0ZXh0RGVjb3JhdGlvbicpO1xuICAgICAgICAvLyB0ZFxuICAgICAgICBjb25zdCB0ZENsYXNzID0ge1xuICAgICAgICAgICAgXCJOT05FXCI6IFwiXCIsXG4gICAgICAgICAgICBcIlVOREVSTElORVwiOiAndGR1JyxcbiAgICAgICAgICAgIFwiU1RSSUtFVEhST1VHSFwiOiAndGRsJ1xuICAgICAgICB9W3RleHREZWNvcmF0aW9uXTtcbiAgICAgICAgdGRDbGFzcyAmJiBjbGFzc05hbWUucHVzaCh0ZENsYXNzKTtcbiAgICAgICAgY29uc3Qgc3RyQ2xhc3NOYW1lID0gY2xhc3NOYW1lLmpvaW4oJyAnKTtcbiAgICAgICAgY29uc3QgaXNTdHJvbmcgPSBbJ2Z3NTAwJywgJ2Z3NjAwJywgJ2Z3NzAwJywgJ2Z3ODAwJywgJ2Z3OTAwJ10uZmluZEluZGV4KChpdGVtKSA9PiBzdHJDbGFzc05hbWUuaW5kZXhPZihpdGVtKSA+IC0xKSA+IC0xO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiBzdHJDbGFzc05hbWUsXG4gICAgICAgICAgICB0YWdOYW1lOiBpc1N0cm9uZyA/ICdzdHJvbmcnIDogJ3NwYW4nXG4gICAgICAgIH07XG4gICAgfSxcbiAgICBnZXRUZXh0Q2hpbGRyZW46IChub2RlKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgY2hhcmFjdGVycyA9ICcnIH0gPSBub2RlO1xuICAgICAgICBjb25zdCBsZWdhbFAgPSBjaGFyYWN0ZXJzLnNwbGl0KCdcXG4nKS5maWx0ZXIoaXRlbSA9PiBpdGVtLnRyaW0oKSk7XG4gICAgICAgIC8vIOacieWbnui9puihqOekuuWkmuauteiQvVxuICAgICAgICBpZiAobGVnYWxQLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIGNvbnN0IG1iQ2xhc3MgPSBub2RlLnBhcmFncmFwaFNwYWNpbmcgPiAwID8gU0FDU1MuYWRkKCdtYicsIG5vZGUucGFyYWdyYXBoU3BhY2luZykgOiAnJztcbiAgICAgICAgICAgIGNvbnN0IHBzID0gbGVnYWxQLm1hcCgoaXRlbSwga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXNMYXN0ID0ga2V5ID09PSBsZWdhbFAubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICB0YWdOYW1lOiAncCcsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogaXNMYXN0ID8gJycgOiBtYkNsYXNzLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW2l0ZW1dXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHBzO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbY2hhcmFjdGVyc107XG4gICAgfSxcbiAgICAvLyDmlofmnKznu4Tku7ZcbiAgICBnZXRJbmZvOiAobm9kZSkgPT4ge1xuICAgICAgICBpZiAobm9kZS50eXBlICE9PSAnVEVYVCcpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGlkID0gVEVYVC5nZXRQcm9wQnlOb2RlKG5vZGUsICd0ZXh0U3R5bGVJZCcpO1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGNvbnN0IGdldEluZm8gPSBDT05GSUcuZ2V0SW5mb0J5SWQoaWQpIHx8IHt9O1xuICAgICAgICBjb25zdCBhY3NzSW5mbyA9IFRFWFQuZ2V0QUNTU1NJbmZvKG5vZGUpO1xuICAgICAgICBjb25zdCByZXN1bHQgPSB7XG4gICAgICAgICAgICBjbGFzc05hbWU6IGdldEluZm8uY2xhc3NOYW1lIHx8IGFjc3NJbmZvLmNsYXNzTmFtZSB8fCAnJyxcbiAgICAgICAgICAgIHRhZ05hbWU6IGdldEluZm8udGFnTmFtZSB8fCBhY3NzSW5mby50YWdOYW1lIHx8ICcnLFxuICAgICAgICAgICAgaWdub3JlQ2xhc3NOYW1lOiBnZXRJbmZvLmlnbm9yZUNsYXNzTmFtZSB8fCAnJ1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0sXG59O1xuZXhwb3J0IGRlZmF1bHQgVEVYVDtcbiIsImltcG9ydCBOT0RFIGZyb20gXCIuL18vTk9ERVwiO1xuaW1wb3J0IENPTkZJRyBmcm9tIFwiLi9fL0NPTkZJR1wiO1xuaW1wb3J0IFNBQ1NTIGZyb20gXCIuL18vU0FDU1NcIjtcbmltcG9ydCBET00gZnJvbSBcIi4vXy9yZW5kZXIvRE9NXCI7XG5jb25zdCBBUEkgPSB7XG4gICAgdGFiSW5kZXg6IDAsXG4gICAgZ2V0U2VsZWN0aW9uOiAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbiA9IGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbjtcbiAgICAgICAgLy8gY29uc29sZS5sb2coc2VsZWN0aW9uKTtcbiAgICAgICAgaWYgKCFzZWxlY3Rpb24ubGVuZ3RoKSB7XG4gICAgICAgICAgICAvLyDmsqHmnInpgInmi6nku7vkvZXlhYPntKBcbiAgICAgICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHsgbm9TZWxlY3Rpb246IHRydWUgfSk7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2VsZWN0aW9uO1xuICAgIH0sXG4gICAgb25UYWJDaGFuZ2U6IChpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBiZWZvcmVJbmRleCA9IEFQSS50YWJJbmRleDtcbiAgICAgICAgQVBJLnRhYkluZGV4ID0gaW5kZXg7XG4gICAgICAgIC8vIOWmguaenOWPquaYr+WcqCBIVE1MIOWSjCBBQ1NTIOS5i+WJjeWIh+aNolxuICAgICAgICBpZiAoKGJlZm9yZUluZGV4ID09PSAwIHx8IGJlZm9yZUluZGV4ID09PSAxKSAmJiAoaW5kZXggPT09IDAgfHwgaW5kZXggPT09IDEpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYWN0aW9uTWFwID0gWydydW5Ib21lJywgJ3J1bkhvbWUnLCAncnVuVG9rZW4nLCAncnVuQ29uZmlnJ107XG4gICAgICAgIGNvbnN0IGFjdGlvbiA9IGFjdGlvbk1hcFtpbmRleF07XG4gICAgICAgIGFjdGlvbiAmJiBBUElbYWN0aW9uXSgpO1xuICAgIH0sXG4gICAgb25TZWxlY3Rpb25DaGFuZ2U6ICgpID0+IHtcbiAgICAgICAgY29uc3QgYWN0aW9uTWFwID0gWydydW5Ib21lJywgJ3J1bkhvbWUnLCAncnVuVG9rZW4nLCAnJ107XG4gICAgICAgIGNvbnN0IGFjdGlvbiA9IGFjdGlvbk1hcFtBUEkudGFiSW5kZXhdO1xuICAgICAgICBpZiAoIWFjdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIEFQSVthY3Rpb25dKCk7XG4gICAgfSxcbiAgICBydW5Ib21lOiAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbiA9IEFQSS5nZXRTZWxlY3Rpb24oKTtcbiAgICAgICAgaWYgKCFzZWxlY3Rpb24pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBTQUNTUy5pbml0KCk7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgY29uc3QgSW5mbyA9IE5PREUuZ2V0Tm9kZXNJbmZvKHNlbGVjdGlvbik7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKEluZm8pO1xuICAgICAgICBjb25zdCBpc0pTWCA9IENPTkZJRy5pc0pTWCgpO1xuICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICBnZXRIVE1MOiBET00ucmVuZGVyKEluZm8sIGlzSlNYKSxcbiAgICAgICAgICAgIGdldENTUzogU0FDU1MuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBpc0pTWCxcbiAgICAgICAgICAgIG5vU2VsZWN0aW9uOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICB9LFxuICAgIHJ1bkNvbmZpZzogKCkgPT4ge1xuICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICBnZXRDb25maWc6IENPTkZJRy5nZXRBbGwoKVxuICAgICAgICB9KTtcbiAgICB9LFxuICAgIHJ1blRva2VuOiAoKSA9PiB7XG4gICAgICAgIGNvbnN0IFtzZWxlY3Rpb25dID0gQVBJLmdldFNlbGVjdGlvbigpIHx8IFtdO1xuICAgICAgICBDT05GSUcuZ2V0U2VsZWN0aW9uVG9rZW5zKHNlbGVjdGlvbik7XG4gICAgfSxcbiAgICBvbm1lc3NhZ2U6IChtc2cgPSB7fSkgPT4ge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGNvbnN0IHsgdHlwZSA9IG51bGwsIHZhbHVlID0gbnVsbCB9ID0gbXNnO1xuICAgICAgICBpZiAodHlwZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IFtuYW1lLCBhY3Rpb25dID0gdHlwZS5zcGxpdCgnLicpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnQVBJIG9ubWVzc2FnZScsIG5hbWUsIGFjdGlvbiwgdmFsdWUpO1xuICAgICAgICBpZiAobmFtZSA9PT0gJ0FQSScgJiYgKGFjdGlvbiBpbiBBUEkpKSB7XG4gICAgICAgICAgICBBUElbYWN0aW9uXSh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobmFtZSA9PT0gJ0NPTkZJRycgJiYgKGFjdGlvbiBpbiBDT05GSUcpKSB7XG4gICAgICAgICAgICBDT05GSUdbYWN0aW9uXSh2YWx1ZSk7XG4gICAgICAgICAgICBpZiAoYWN0aW9uID09PSAnY2hhbmdlSlNYJykge1xuICAgICAgICAgICAgICAgIEFQSS5ydW5Ib21lKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChhY3Rpb24gPT09ICdhcHBlbmRUb2tlbicpIHtcbiAgICAgICAgICAgICAgICBBUEkucnVuVG9rZW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIEFQSS5ydW5Db25maWcoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn07XG4vLyBUaGlzIHBsdWdpbiB3aWxsIG9wZW4gYSB3aW5kb3cgdG8gcHJvbXB0IHRoZSB1c2VyIHRvIGVudGVyIGEgbnVtYmVyLCBhbmRcbi8vIGl0IHdpbGwgdGhlbiBjcmVhdGUgdGhhdCBtYW55IHJlY3RhbmdsZXMgb24gdGhlIHNjcmVlbi5cbi8vIFRoaXMgZmlsZSBob2xkcyB0aGUgbWFpbiBjb2RlIGZvciB0aGUgcGx1Z2lucy4gSXQgaGFzIGFjY2VzcyB0byB0aGUgKmRvY3VtZW50Ki5cbi8vIFlvdSBjYW4gYWNjZXNzIGJyb3dzZXIgQVBJcyBpbiB0aGUgPHNjcmlwdD4gdGFnIGluc2lkZSBcInVpLmh0bWxcIiB3aGljaCBoYXMgYVxuLy8gZnVsbCBicm93c2VyIGVudmlyb25tZW50IChzZWUgZG9jdW1lbnRhdGlvbikuXG5DT05GSUcuaW5pdCgpLnRoZW4oKCkgPT4ge1xuICAgIC8vIFRoaXMgc2hvd3MgdGhlIEhUTUwgcGFnZSBpbiBcInVpLmh0bWxcIi5cbiAgICBmaWdtYS5zaG93VUkoX19odG1sX18sIHsgd2lkdGg6IDQwMCwgaGVpZ2h0OiA2MDAgfSk7XG4gICAgQVBJLnJ1bkhvbWUoKTtcbiAgICBmaWdtYS5vbihcInNlbGVjdGlvbmNoYW5nZVwiLCAoKSA9PiB7XG4gICAgICAgIEFQSS5vblNlbGVjdGlvbkNoYW5nZSgpO1xuICAgIH0pO1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBmaWdtYS51aS5vbm1lc3NhZ2UgPSBBUEkub25tZXNzYWdlO1xufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9