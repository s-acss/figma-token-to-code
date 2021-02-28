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

      var _ref6 = figma.getStyleById(item) || {},
          styleKey = _ref6.key,
          name = _ref6.name,
          type = _ref6.type;

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

    console.log(selection[0]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL18vQ09NUE9ORU5ULnRzIiwid2VicGFjazovLy8uL3NyYy9fL0NPTkZJRy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvXy9OT0RFLnRzIiwid2VicGFjazovLy8uL3NyYy9fL1NBQ1NTLnRzIiwid2VicGFjazovLy8uL3NyYy9fL1VUSUxTLnRzIiwid2VicGFjazovLy8uL3NyYy9fL3JlbmRlci9ET00udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL18vcmVuZGVyL0hUTUwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL18vcmVuZGVyL0pTWC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvXy90b2tlbi9DT0xPUi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvXy90b2tlbi9FRkZFQ1QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL18vdG9rZW4vRklMTC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvXy90b2tlbi9GTEVYLnRzIiwid2VicGFjazovLy8uL3NyYy9fL3Rva2VuL0dSSUQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL18vdG9rZW4vT1RIRVJTLnRzIiwid2VicGFjazovLy8uL3NyYy9fL3Rva2VuL1NUUk9LRS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvXy90b2tlbi9URVhULnRzIiwid2VicGFjazovLy8uL3NyYy9jb2RlLnRzIl0sIm5hbWVzIjpbIkNPTVBPTkVOVCIsImlzVmFyaWFudCIsIm5vZGUiLCJfYSIsIl9iIiwibWFpbkNvbXBvbmVudCIsInBhcmVudCIsInR5cGUiLCJpc0NvbXBvbmVudCIsImdldE1haW5Db21wb25lbnQiLCJnZXRDb21wb25lbnRJZCIsImtleSIsInN0cmluZ1RvQ29tcG9uZW50TmFtZSIsIm5hbWUiLCJ0cmltTmFtZSIsInRyaW0iLCJzdHJOYW1lIiwicmVwbGFjZSIsImZpcnN0Q2hhciIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwibGVuZ3RoIiwic2xpY2UiLCJnZXRDb21wb25lbnROYW1lIiwiZ2V0Q29tcG9uZW50UHJvcHNCeVN0cmluZyIsInN0clByb3AiLCJwcm9wcyIsImxlZ2FsUHJvcHMiLCJzcGxpdCIsImZvckVhY2giLCJpdGVtIiwidmFsdWUiLCJ0cmltVmFsdWUiLCJTdHJpbmciLCJnZXRDb21wb25lbnRQcm9wcyIsImdldEluZm8iLCJpZCIsIm1hdGNoVG9rZW4iLCJDT05GSUciLCJnZXRJbmZvQnlJZCIsIk9iamVjdCIsImFzc2lnbiIsInJlbmRlckNoaWxkcmVuIiwicmVuZGVyV2lkdGgiLCJyZW5kZXJIZWlnaHQiLCJQUk9fREVGQVVMVCIsImlnbm9yZUNsYXNzTmFtZSIsInRva2VuIiwiQ09ORklHX0RFRkFVTFQiLCJjdXJyZW50SW5kZXgiLCJpc0pTWCIsInByb2plY3RzIiwic3RvcmUiLCJjaGFuZ2VDdXJyZW50IiwiaW5kZXgiLCJnZXRBbGwiLCJmaWdtYSIsImNsaWVudFN0b3JhZ2UiLCJzZXRBc3luYyIsImNoYW5nZUpTWCIsInJlbW92ZSIsInNwbGljZSIsInB1c2giLCJhZGROZXdQcm9qZWN0IiwiZWRpdEJ5SW5kZXgiLCJkYXRhIiwiY3VycmVudCIsInVpIiwicG9zdE1lc3NhZ2UiLCJhbGVydE1zZyIsInJlcGxhY2VCeUluZGV4IiwiYXBwZW5kVG9rZW4iLCJnZXRDdXJyZW50IiwiaW5pdCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiZ2V0QXN5bmMiLCJ0aGVuIiwicmV0IiwiZ2V0VG9rZW4iLCJjYXRjaCIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsInRva2VuQ29uZmlnIiwiZ2V0U2VsZWN0aW9uVG9rZW5zIiwic2VsZWN0aW9uIiwiZ2V0U2VsZWN0aW9uSW5mbyIsImZpbmRUb2tlbiIsImZpbGxTdHlsZUlkIiwidGV4dFN0eWxlSWQiLCJzdHJva2VTdHlsZUlkIiwiZWZmZWN0U3R5bGVJZCIsImdyaWRTdHlsZUlkIiwiZ2V0U3R5bGVCeUlkIiwic3R5bGVLZXkiLCJnZXRBbGxUb2tlbnMiLCJyb290IiwiY29tcG9uZW50cyIsImZpbmRBbGwiLCJjIiwiYWRkQ29uZmlnIiwiZ2V0TG9jYWxQYWludFN0eWxlcyIsImdldExvY2FsVGV4dFN0eWxlcyIsImdldExvY2FsRWZmZWN0U3R5bGVzIiwiZ2V0TG9jYWxHcmlkU3R5bGVzIiwiZ290QWxsVG9rZW5zIiwiX19yZXN0IiwicyIsImUiLCJ0IiwicCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImluZGV4T2YiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJpIiwicHJvcGVydHlJc0VudW1lcmFibGUiLCJOT0RFIiwiZXh0ZW5kSW5mbyIsImEiLCJiIiwiY2xhc3NOYW1lIiwiY2xhc3NOYW1lQSIsImlnbm9yZUNsYXNzTmFtZUEiLCJwcm9wc0EiLCJyZXN0QSIsImNsYXNzTmFtZUIiLCJpZ25vcmVDbGFzc05hbWVCIiwicHJvcHNCIiwiY2hpbGRyZW4iLCJyZXN0QiIsImlzU3RydWN0Tm9kZSIsInN0YXJ0c1dpdGgiLCJ5ZXNUeXBlcyIsImdvdE5vIiwiZmluZCIsInZpc2libGUiLCJpc1JlbmRlckNoaWxkcmVuIiwiZ2V0Tm9kZUluZm8iLCJub2RlSW5mbyIsInRhZ05hbWUiLCJjb21wb25lbnQiLCJmaWxsIiwiRklMTCIsInRleHQiLCJURVhUIiwic3Ryb2tlIiwiU1RST0tFIiwiZ3JpZCIsIkdSSUQiLCJlZmZlY3QiLCJFRkZFQ1QiLCJvdGhlcnMiLCJPVEhFUlMiLCJmbGV4IiwiRkxFWCIsIlNBQ1NTIiwiYWRkIiwicGFyc2VJbnQiLCJ3aWR0aCIsImhlaWdodCIsImdldFRleHRDaGlsZHJlbiIsIm1hcCIsImNoYXJhY3RlcnMiLCJnZXROb2Rlc0luZm8iLCJVVElMUyIsImNsZWFyQ2xhc3NOYW1lIiwiY2hpbGRyZW5JbmZvIiwiY29tcG9uZW50TmFtZSIsInNvcnQiLCJub2RlcyIsInkiLCJ4IiwiaW5mbyIsInNvcnROb2RlcyIsImxlbiIsIkFycmF5IiwibmFtZU1hcCIsImdldENsYXNzU2VsZWN0b3JCeU5hbWUiLCJnZXRTdHJpbmciLCJrZXlzIiwicmVzdWx0Iiwiam9pbiIsInVuaXQiLCJwcm9wTmFtZSIsInVzZVZhbHVlIiwiTnVtYmVyIiwicGFyc2VGbG9hdCIsInRvRml4ZWQiLCJjbGFzc1VuaXQiLCJhZGRGb250RmFtaWx5IiwidmFsdWVPayIsInRvTG93ZXJDYXNlIiwiYWRkQ29sb3IiLCJyZ2JhIiwiYWRkQmdDb2xvciIsImlzQmxvY2siLCJibG9ja1RhZyIsImlzU2VsZlRhZyIsInNlbGZUYWciLCJjbGFzc05hbWVzIiwiRE9NIiwicmVuZGVyIiwib2JqIiwiSlNYIiwiZ2V0RG9tQnlBcnJheSIsIkhUTUwiLCJsZWdhbFByb3AiLCJnZXRQcm9wc1N0cmluZyIsImFyclByb3BzIiwiZW50cmllcyIsInN0clZhbHVlIiwiZ2V0SXRlbURvbSIsInByb3BzU3RyaW5nIiwidGFnU3RhcnQiLCJzdHJQcm9wcyIsIkNPTE9SIiwiZ2V0UmdiYUJ5RmlsbCIsImNvbG9yIiwib3BhY2l0eSIsInIiLCJnIiwiZ2V0RmlsbCIsImZpbGxzIiwiZmlyc3RGaWxsIiwidGV4dENsYXNzTmFtZSIsInJlc3QiLCJyZW5kZXJDbGFzc05hbWUiLCJpc0ZsZXgiLCJsYXlvdXRNb2RlIiwiZ2V0VGhpc0luZm8iLCJwcmltYXJ5QXhpc0FsaWduSXRlbXMiLCJjb3VudGVyQXhpc0FsaWduSXRlbXMiLCJnZXRJbmZvRnJvbVBhcmVudCIsIml0ZW1TcGFjaW5nIiwiZmlsdGVyIiwicG9wIiwiaXNMYXN0Q2hpbGRyZW4iLCJndXR0ZXJNYXAiLCJsYXlvdXRHcm93IiwiYzEiLCJpYzEiLCJjMiIsImljMiIsImdlckJvcmRlclJhZGl1c0NsYXNzTmFtZSIsInRsIiwidG9wTGVmdFJhZGl1cyIsInRyIiwidG9wUmlnaHRSYWRpdXMiLCJiciIsImJvdHRvbVJpZ2h0UmFkaXVzIiwiYmwiLCJib3R0b21MZWZ0UmFkaXVzIiwiZ2V0UGFkZGluZ0NsYXNzTmFtZSIsInBhZGRpbmdUb3AiLCJwYWRkaW5nUmlnaHQiLCJwYWRkaW5nQm90dG9tIiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nIiwicmFkaXVzIiwidW5pdE1hcCIsImdldEZvbnROYW1lQ2xhc3MiLCJmb250TmFtZSIsInN0eWxlIiwiZm9udE1hcCIsImdldEFDU1NTSW5mbyIsIl9jIiwiZm9udFNpemUiLCJsaW5lSGVpZ2h0IiwibGV0dGVyU3BhY2luZyIsImZuQ2xhc3MiLCJmYW1pbHkiLCJ0YUNsYXNzIiwidGV4dEFsaWduSG9yaXpvbnRhbCIsInZhQ2xhc3MiLCJ0ZXh0QWxpZ25WZXJ0aWNhbCIsInR0Q2xhc3MiLCJ0ZXh0Q2FzZSIsInRkQ2xhc3MiLCJ0ZXh0RGVjb3JhdGlvbiIsInN0ckNsYXNzTmFtZSIsImlzU3Ryb25nIiwiZmluZEluZGV4IiwibGVnYWxQIiwibWJDbGFzcyIsInBhcmFncmFwaFNwYWNpbmciLCJwcyIsImlzTGFzdCIsImFjc3NJbmZvIiwiQVBJIiwidGFiSW5kZXgiLCJnZXRTZWxlY3Rpb24iLCJjdXJyZW50UGFnZSIsIm5vU2VsZWN0aW9uIiwiY29uc29sZSIsImxvZyIsIm9uVGFiQ2hhbmdlIiwiYmVmb3JlSW5kZXgiLCJhY3Rpb25NYXAiLCJhY3Rpb24iLCJvblNlbGVjdGlvbkNoYW5nZSIsInJ1bkhvbWUiLCJJbmZvIiwiZ2V0SFRNTCIsImdldENTUyIsInJ1bkNvbmZpZyIsImdldENvbmZpZyIsInJ1blRva2VuIiwib25tZXNzYWdlIiwibXNnIiwic2hvd1VJIiwiX19odG1sX18iLCJvbiJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNB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O0FBQ0gsQ0FURCxFIiwiZmlsZSI6ImNvZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9jb2RlLnRzXCIpO1xuIiwiaW1wb3J0IENPTkZJRyBmcm9tIFwiLi9DT05GSUdcIjtcbmNvbnN0IENPTVBPTkVOVCA9IHtcbiAgICBpc1ZhcmlhbnQ6IChub2RlKSA9PiB7XG4gICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgcmV0dXJuICgoX2IgPSAoX2EgPSBub2RlLm1haW5Db21wb25lbnQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5wYXJlbnQpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi50eXBlKSA9PT0gJ0NPTVBPTkVOVF9TRVQnO1xuICAgIH0sXG4gICAgaXNDb21wb25lbnQ6IChub2RlKSA9PiB7XG4gICAgICAgIHJldHVybiBub2RlLnR5cGUgPT09ICdJTlNUQU5DRScgfHwgbm9kZS50eXBlID09PSAnQ09NUE9ORU5UJztcbiAgICB9LFxuICAgIGdldE1haW5Db21wb25lbnQ6IChub2RlKSA9PiB7XG4gICAgICAgIGlmIChub2RlLnR5cGUgPT09ICdDT01QT05FTlQnKSB7XG4gICAgICAgICAgICByZXR1cm4gbm9kZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGNvbnN0IGlzVmFyaWFudCA9IENPTVBPTkVOVC5pc1ZhcmlhbnQobm9kZSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKG5vZGUsIHtpc1ZhcmlhbnR9KTtcbiAgICAgICAgcmV0dXJuIGlzVmFyaWFudCA/IG5vZGUubWFpbkNvbXBvbmVudC5wYXJlbnQgOiBub2RlLm1haW5Db21wb25lbnQ7XG4gICAgfSxcbiAgICBnZXRDb21wb25lbnRJZDogKG5vZGUpID0+IHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBjb25zdCB7IGtleSA9ICcnIH0gPSBDT01QT05FTlQuZ2V0TWFpbkNvbXBvbmVudChub2RlKSB8fCB7fTtcbiAgICAgICAgcmV0dXJuIGtleTtcbiAgICB9LFxuICAgIHN0cmluZ1RvQ29tcG9uZW50TmFtZTogKG5hbWUgPSAnJykgPT4ge1xuICAgICAgICBjb25zdCB0cmltTmFtZSA9IG5hbWUudHJpbSgpO1xuICAgICAgICBpZiAoIXRyaW1OYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc3RyTmFtZSA9IHRyaW1OYW1lLnJlcGxhY2UoL1tcXFddL2csICcnKTtcbiAgICAgICAgY29uc3QgZmlyc3RDaGFyID0gc3RyTmFtZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKTtcbiAgICAgICAgaWYgKHN0ck5hbWUubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gZmlyc3RDaGFyO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmaXJzdENoYXIgKyBzdHJOYW1lLnNsaWNlKDEpO1xuICAgIH0sXG4gICAgZ2V0Q29tcG9uZW50TmFtZTogKG5vZGUpID0+IHtcbiAgICAgICAgY29uc3QgeyBuYW1lID0gJycgfSA9IENPTVBPTkVOVC5nZXRNYWluQ29tcG9uZW50KG5vZGUpO1xuICAgICAgICBpZiAoIW5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gQ09NUE9ORU5ULnN0cmluZ1RvQ29tcG9uZW50TmFtZShuYW1lKTtcbiAgICB9LFxuICAgIGdldENvbXBvbmVudFByb3BzQnlTdHJpbmc6IChzdHJQcm9wKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb3BzID0ge307XG4gICAgICAgIGlmIChzdHJQcm9wICYmIHR5cGVvZiBzdHJQcm9wID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgLy8g5Y675o6J5Y2V5Y+M5byV5Y+3XG4gICAgICAgICAgICBjb25zdCBsZWdhbFByb3BzID0gc3RyUHJvcC5yZXBsYWNlKC9cXFwiL2csICcnKS5yZXBsYWNlKC9cXCcvZywgJycpO1xuICAgICAgICAgICAgbGVnYWxQcm9wcy5zcGxpdChcIixcIikuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IFtrZXksIHZhbHVlXSA9IGl0ZW0uc3BsaXQoXCI9XCIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRyaW1WYWx1ZSA9IFN0cmluZyh2YWx1ZSkudHJpbSgpO1xuICAgICAgICAgICAgICAgIC8vIGZhbHNlIOihqOekuuayoeaciei/meS4quWAvCDkuI3lgZrlpITnkIZcbiAgICAgICAgICAgICAgICBpZiAodHJpbVZhbHVlID09PSBcImZhbHNlXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwcm9wc1tTdHJpbmcoa2V5KS50cmltKCldID0gdmFsdWUgPyB0cmltVmFsdWUgOiAndHJ1ZSc7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcHJvcHM7XG4gICAgfSxcbiAgICBnZXRDb21wb25lbnRQcm9wczogKG5vZGUpID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2dldENvbXBvbmVudFByb3BzJywgbm9kZSk7XG4gICAgICAgIGNvbnN0IGlzVmFyaWFudCA9IENPTVBPTkVOVC5pc1ZhcmlhbnQobm9kZSk7XG4gICAgICAgIC8vIOayoeacieWPmOS9k+ihqOekuuayoeaciSBwcm9wc1xuICAgICAgICBpZiAoIWlzVmFyaWFudCkge1xuICAgICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgbmFtZSB9ID0gbm9kZS5tYWluQ29tcG9uZW50O1xuICAgICAgICByZXR1cm4gQ09NUE9ORU5ULmdldENvbXBvbmVudFByb3BzQnlTdHJpbmcobmFtZSk7XG4gICAgfSxcbiAgICBnZXRJbmZvOiAobm9kZSkgPT4ge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGNvbnN0IGlkID0gQ09NUE9ORU5ULmdldENvbXBvbmVudElkKG5vZGUpO1xuICAgICAgICBjb25zdCBtYXRjaFRva2VuID0gQ09ORklHLmdldEluZm9CeUlkKGlkKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coaWQsIG1hdGNoVG9rZW4sIG5vZGUpO1xuICAgICAgICBpZiAoIW1hdGNoVG9rZW4pIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIG1hdGNoVG9rZW4ucHJvcHMgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIENPTVBPTkVOVC5nZXRDb21wb25lbnRQcm9wcyhub2RlKSksIENPTVBPTkVOVC5nZXRDb21wb25lbnRQcm9wc0J5U3RyaW5nKG1hdGNoVG9rZW4ucHJvcHMgfHwgJycpKTtcbiAgICAgICAgLy8g55So5oi35rKh5pyJ5oyH5a6a6KGo56S66KaB5riy5p+TXG4gICAgICAgIGlmICghKCdyZW5kZXJDaGlsZHJlbicgaW4gbWF0Y2hUb2tlbikpIHtcbiAgICAgICAgICAgIG1hdGNoVG9rZW4ucmVuZGVyQ2hpbGRyZW4gPSAnMSc7XG4gICAgICAgIH1cbiAgICAgICAgLy8g55So5oi35rKh5pyJ5oyH5a6a6KGo56S66KaB5riy5p+TXG4gICAgICAgIGlmICghKCdyZW5kZXJXaWR0aCcgaW4gbWF0Y2hUb2tlbikpIHtcbiAgICAgICAgICAgIG1hdGNoVG9rZW4ucmVuZGVyV2lkdGggPSAnMCc7XG4gICAgICAgIH1cbiAgICAgICAgLy8g55So5oi35rKh5pyJ5oyH5a6a6KGo56S66KaB5riy5p+TXG4gICAgICAgIGlmICghKCdyZW5kZXJIZWlnaHQnIGluIG1hdGNoVG9rZW4pKSB7XG4gICAgICAgICAgICBtYXRjaFRva2VuLnJlbmRlckhlaWdodCA9ICcwJztcbiAgICAgICAgfVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhtYXRjaFRva2VuKTtcbiAgICAgICAgcmV0dXJuIG1hdGNoVG9rZW47XG4gICAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IENPTVBPTkVOVDtcbiIsImltcG9ydCBDT01QT05FTlQgZnJvbSBcIi4vQ09NUE9ORU5UXCI7XG5jb25zdCBQUk9fREVGQVVMVCA9IHtcbiAgICBuYW1lOiAnZGVmYXVsdCcsXG4gICAgaWdub3JlQ2xhc3NOYW1lOiAnJyxcbiAgICB0b2tlbjoge31cbn07XG5jb25zdCBDT05GSUdfREVGQVVMVCA9IHtcbiAgICBjdXJyZW50SW5kZXg6IDAsXG4gICAgaXNKU1g6IGZhbHNlLFxuICAgIHByb2plY3RzOiBbUFJPX0RFRkFVTFRdXG59O1xuY29uc3QgQ09ORklHID0ge1xuICAgIGtleTogJ1NBQ1NTJyxcbiAgICBzdG9yZTogQ09ORklHX0RFRkFVTFQsXG4gICAgY2hhbmdlQ3VycmVudDogKGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IHN0b3JlID0gQ09ORklHLmdldEFsbCgpO1xuICAgICAgICBzdG9yZS5jdXJyZW50SW5kZXggPSBpbmRleDtcbiAgICAgICAgZmlnbWEuY2xpZW50U3RvcmFnZS5zZXRBc3luYyhDT05GSUcua2V5LCBzdG9yZSk7XG4gICAgfSxcbiAgICBjaGFuZ2VKU1g6ICh2YWx1ZSkgPT4ge1xuICAgICAgICBjb25zdCBzdG9yZSA9IENPTkZJRy5nZXRBbGwoKTtcbiAgICAgICAgLy8g6YeN572u5Zue56ys5LiA5LiqXG4gICAgICAgIHN0b3JlLmlzSlNYID0gdmFsdWU7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHN0b3JlKTtcbiAgICAgICAgZmlnbWEuY2xpZW50U3RvcmFnZS5zZXRBc3luYyhDT05GSUcua2V5LCBzdG9yZSk7XG4gICAgfSxcbiAgICByZW1vdmU6IChpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBzdG9yZSA9IENPTkZJRy5nZXRBbGwoKTtcbiAgICAgICAgLy8g6YeN572u5Zue56ys5LiA5LiqXG4gICAgICAgIHN0b3JlLmN1cnJlbnRJbmRleCA9IDA7XG4gICAgICAgIHN0b3JlLnByb2plY3RzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIGlmICghc3RvcmUucHJvamVjdHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBzdG9yZS5wcm9qZWN0cy5wdXNoKFBST19ERUZBVUxUKTtcbiAgICAgICAgfVxuICAgICAgICBmaWdtYS5jbGllbnRTdG9yYWdlLnNldEFzeW5jKENPTkZJRy5rZXksIHN0b3JlKTtcbiAgICB9LFxuICAgIGFkZE5ld1Byb2plY3Q6ICh7IG5hbWUgPSAnJywgdG9rZW4gPSB7fSB9ID0ge30pID0+IHtcbiAgICAgICAgY29uc3Qgc3RvcmUgPSBDT05GSUcuZ2V0QWxsKCk7XG4gICAgICAgIHN0b3JlLnByb2plY3RzLnB1c2goe1xuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIGlnbm9yZUNsYXNzTmFtZTogJycsXG4gICAgICAgICAgICB0b2tlblxuICAgICAgICB9KTtcbiAgICAgICAgc3RvcmUuY3VycmVudEluZGV4ID0gc3RvcmUucHJvamVjdHMubGVuZ3RoIC0gMTtcbiAgICAgICAgZmlnbWEuY2xpZW50U3RvcmFnZS5zZXRBc3luYyhDT05GSUcua2V5LCBzdG9yZSk7XG4gICAgfSxcbiAgICBlZGl0QnlJbmRleDogKHsgZGF0YSwgaW5kZXggfSkgPT4ge1xuICAgICAgICBjb25zdCBzdG9yZSA9IENPTkZJRy5nZXRBbGwoKTtcbiAgICAgICAgY29uc3QgY3VycmVudCA9IHN0b3JlLnByb2plY3RzW2luZGV4XTtcbiAgICAgICAgc3RvcmUucHJvamVjdHNbaW5kZXhdID0ge1xuICAgICAgICAgICAgbmFtZTogZGF0YS5uYW1lLFxuICAgICAgICAgICAgaWdub3JlQ2xhc3NOYW1lOiBkYXRhLmlnbm9yZUNsYXNzTmFtZSxcbiAgICAgICAgICAgIHRva2VuOiBkYXRhLnRva2VuID8gZGF0YS50b2tlbiA6IGN1cnJlbnQudG9rZW5cbiAgICAgICAgfTtcbiAgICAgICAgZmlnbWEuY2xpZW50U3RvcmFnZS5zZXRBc3luYyhDT05GSUcua2V5LCBzdG9yZSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHN0b3JlKTtcbiAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgYWxlcnRNc2c6IGAke2RhdGEubmFtZX0gc2F2ZSBzdWNjZXNzYFxuICAgICAgICB9KTtcbiAgICB9LFxuICAgIHJlcGxhY2VCeUluZGV4OiAoeyBkYXRhLCBpbmRleCB9KSA9PiB7XG4gICAgICAgIGNvbnN0IHN0b3JlID0gQ09ORklHLmdldEFsbCgpO1xuICAgICAgICBzdG9yZS5wcm9qZWN0c1tpbmRleF0gPSBkYXRhIHx8IHt9O1xuICAgICAgICBmaWdtYS5jbGllbnRTdG9yYWdlLnNldEFzeW5jKENPTkZJRy5rZXksIHN0b3JlKTtcbiAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgYWxlcnRNc2c6IGAke2RhdGEubmFtZX0gcmVwbGFjZSBzdWNjZXNzYFxuICAgICAgICB9KTtcbiAgICB9LFxuICAgIGFwcGVuZFRva2VuOiAoYXBwZW5kVG9rZW4gPSB7fSkgPT4ge1xuICAgICAgICBjb25zdCBjdXJyZW50ID0gQ09ORklHLmdldEN1cnJlbnQoKTtcbiAgICAgICAgY29uc3QgeyB0b2tlbiA9IHt9IH0gPSBjdXJyZW50O1xuICAgICAgICBjdXJyZW50LnRva2VuID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCB0b2tlbiksIGFwcGVuZFRva2VuKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coYXBwZW5kVG9rZW4sIENPTkZJRy5zdG9yZSk7XG4gICAgICAgIGZpZ21hLmNsaWVudFN0b3JhZ2Uuc2V0QXN5bmMoQ09ORklHLmtleSwgQ09ORklHLnN0b3JlKTtcbiAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgYWxlcnRNc2c6IGAke2N1cnJlbnQubmFtZX0gc2F2ZSBzdWNjZXNzYFxuICAgICAgICB9KTtcbiAgICB9LFxuICAgIGlzSlNYOiAoKSA9PiB7XG4gICAgICAgIHJldHVybiAhIUNPTkZJRy5zdG9yZS5pc0pTWDtcbiAgICB9LFxuICAgIGdldEFsbDogKCkgPT4ge1xuICAgICAgICByZXR1cm4gQ09ORklHLnN0b3JlO1xuICAgIH0sXG4gICAgaW5pdDogKCkgPT4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGZpZ21hLmNsaWVudFN0b3JhZ2UuZ2V0QXN5bmMoQ09ORklHLmtleSkudGhlbigocmV0KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJldCAmJiByZXQucHJvamVjdHMgJiYgcmV0LnByb2plY3RzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBDT05GSUcuc3RvcmUgPSByZXQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyDmsqHmnInnvJPlrZjliJvlu7rkuIDkuKrmlrDnmoRcbiAgICAgICAgICAgICAgICAgICAgZmlnbWEuY2xpZW50U3RvcmFnZS5zZXRBc3luYyhDT05GSUcua2V5LCBDT05GSUdfREVGQVVMVCk7XG4gICAgICAgICAgICAgICAgICAgIENPTkZJRy5zdG9yZSA9IENPTkZJR19ERUZBVUxUO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXNvbHZlKENPTkZJRy5nZXRUb2tlbigpKTtcbiAgICAgICAgICAgIH0pLmNhdGNoKHJlamVjdCk7XG4gICAgICAgIH0pKTtcbiAgICB9LFxuICAgIGdldEN1cnJlbnQ6ICgpID0+IHtcbiAgICAgICAgY29uc3QgY3VycmVudEluZGV4ID0gQ09ORklHLnN0b3JlLmN1cnJlbnRJbmRleDtcbiAgICAgICAgY29uc3QgY3VycmVudCA9IENPTkZJRy5zdG9yZS5wcm9qZWN0c1tjdXJyZW50SW5kZXhdO1xuICAgICAgICByZXR1cm4gY3VycmVudDtcbiAgICB9LFxuICAgIGdldFRva2VuOiAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgdG9rZW4gPSBudWxsIH0gPSBDT05GSUcuZ2V0Q3VycmVudCgpIHx8IHt9O1xuICAgICAgICByZXR1cm4gdG9rZW4gPyBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRva2VuKSkgOiBudWxsO1xuICAgIH0sXG4gICAgZ2V0SW5mb0J5SWQ6IChpZCA9ICcnKSA9PiB7XG4gICAgICAgIGlmICghaWQpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHRva2VuQ29uZmlnID0gQ09ORklHLmdldFRva2VuKCkgfHwge307XG4gICAgICAgIC8vIOWmguaenOacieiHquWumuS5ieeUqOiHquWumuS5ieeahFxuICAgICAgICByZXR1cm4gdG9rZW5Db25maWdbaWRdO1xuICAgIH0sXG4gICAgZ2V0U2VsZWN0aW9uVG9rZW5zOiAoc2VsZWN0aW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgbmFtZSA9ICcnLCB0b2tlbiA9IHt9IH0gPSBDT05GSUcuZ2V0Q3VycmVudCgpIHx8IHt9O1xuICAgICAgICBpZiAoIXNlbGVjdGlvbikge1xuICAgICAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgIGdldFNlbGVjdGlvbkluZm86IHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG1hdGNoVG9rZW4gPSB7fTtcbiAgICAgICAgLy8g5aaC5p6c5piv57uE5Lu25YiZ5LiN6ZyA6KaB5pi+56S65Lu75L2V5YW25a6D55qE5bGe5oCnXG4gICAgICAgIGlmIChDT01QT05FTlQuaXNDb21wb25lbnQoc2VsZWN0aW9uKSkge1xuICAgICAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgICAgICBjb25zdCB7IGtleSwgbmFtZSwgdHlwZSB9ID0gQ09NUE9ORU5ULmdldE1haW5Db21wb25lbnQoc2VsZWN0aW9uKTtcbiAgICAgICAgICAgIGNvbnN0IGZpbmRUb2tlbiA9IHRva2VuW2tleV0gfHwge307XG4gICAgICAgICAgICBtYXRjaFRva2VuW2tleV0gPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGZpbmRUb2tlbiksIHsgbmFtZSxcbiAgICAgICAgICAgICAgICB0eXBlIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICBbc2VsZWN0aW9uLmZpbGxTdHlsZUlkLCBzZWxlY3Rpb24udGV4dFN0eWxlSWQsIHNlbGVjdGlvbi5zdHJva2VTdHlsZUlkLCBzZWxlY3Rpb24uZWZmZWN0U3R5bGVJZCwgc2VsZWN0aW9uLmdyaWRTdHlsZUlkXS5mb3JFYWNoKChpdGVtLCBrZXkpID0+IHtcbiAgICAgICAgICAgIGlmICghaXRlbSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHsga2V5OiBzdHlsZUtleSwgbmFtZSwgdHlwZSB9ID0gZmlnbWEuZ2V0U3R5bGVCeUlkKGl0ZW0pIHx8IHt9O1xuICAgICAgICAgICAgaWYgKCFzdHlsZUtleSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1hdGNoVG9rZW5bc3R5bGVLZXldID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCB0b2tlbltzdHlsZUtleV0pLCB7IG5hbWUsXG4gICAgICAgICAgICAgICAgdHlwZSB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgIGdldFNlbGVjdGlvbkluZm86IHtcbiAgICAgICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgICAgIHRva2VuOiBtYXRjaFRva2VuXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICog6I635Y+W5omA5pyJ55qEIFRva2VuIOWMheaLrCBDb21wb25lbnRcbiAgICAgKi9cbiAgICBnZXRBbGxUb2tlbnM6ICgpID0+IHtcbiAgICAgICAgY29uc3QgbmFtZSA9IGZpZ21hLnJvb3QubmFtZTtcbiAgICAgICAgY29uc3QgY29tcG9uZW50cyA9IGZpZ21hLnJvb3QuZmluZEFsbChjID0+IHtcbiAgICAgICAgICAgIGlmIChjLnR5cGUgPT09ICdDT01QT05FTlRfU0VUJykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGMudHlwZSAhPT0gJ0NPTVBPTkVOVCcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYy5wYXJlbnQudHlwZSA9PT0gJ0NPTVBPTkVOVF9TRVQnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCB0b2tlbiA9IHt9O1xuICAgICAgICBjb25zdCBhZGRDb25maWcgPSAoZGF0YSA9IFtdKSA9PiB7XG4gICAgICAgICAgICBkYXRhLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICB0b2tlbltpdGVtLmlkXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogaXRlbS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBpdGVtLnR5cGVcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGFkZENvbmZpZyhjb21wb25lbnRzKTtcbiAgICAgICAgYWRkQ29uZmlnKGZpZ21hLmdldExvY2FsUGFpbnRTdHlsZXMoKSk7XG4gICAgICAgIGFkZENvbmZpZyhmaWdtYS5nZXRMb2NhbFRleHRTdHlsZXMoKSk7XG4gICAgICAgIGFkZENvbmZpZyhmaWdtYS5nZXRMb2NhbEVmZmVjdFN0eWxlcygpKTtcbiAgICAgICAgYWRkQ29uZmlnKGZpZ21hLmdldExvY2FsR3JpZFN0eWxlcygpKTtcbiAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgZ290QWxsVG9rZW5zOiB7XG4gICAgICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgICAgICBpZ25vcmVDbGFzc05hbWU6ICcnLFxuICAgICAgICAgICAgICAgIHRva2VuXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5leHBvcnQgZGVmYXVsdCBDT05GSUc7XG4iLCJ2YXIgX19yZXN0ID0gKHRoaXMgJiYgdGhpcy5fX3Jlc3QpIHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gICAgdmFyIHQgPSB7fTtcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcbiAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XG4gICAgICAgIH1cbiAgICByZXR1cm4gdDtcbn07XG5pbXBvcnQgQ09NUE9ORU5UIGZyb20gXCIuL0NPTVBPTkVOVFwiO1xuaW1wb3J0IEZJTEwgZnJvbSBcIi4vdG9rZW4vRklMTFwiO1xuaW1wb3J0IFRFWFQgZnJvbSBcIi4vdG9rZW4vVEVYVFwiO1xuaW1wb3J0IFNUUk9LRSBmcm9tIFwiLi90b2tlbi9TVFJPS0VcIjtcbmltcG9ydCBHUklEIGZyb20gXCIuL3Rva2VuL0dSSURcIjtcbmltcG9ydCBGTEVYIGZyb20gXCIuL3Rva2VuL0ZMRVhcIjtcbmltcG9ydCBTQUNTUyBmcm9tIFwiLi9TQUNTU1wiO1xuaW1wb3J0IFVUSUxTIGZyb20gXCIuL1VUSUxTXCI7XG5pbXBvcnQgRUZGRUNUIGZyb20gXCIuL3Rva2VuL0VGRkVDVFwiO1xuaW1wb3J0IE9USEVSUyBmcm9tIFwiLi90b2tlbi9PVEhFUlNcIjtcbmltcG9ydCBDT05GSUcgZnJvbSBcIi4vQ09ORklHXCI7XG5jb25zdCBOT0RFID0ge1xuICAgIC8qKlxuICAgICAqIOWQiOW5tuS4pOS4qmluZm9cbiAgICAgKiBAcGFyYW0gYVxuICAgICAqIEBwYXJhbSBiXG4gICAgICovXG4gICAgZXh0ZW5kSW5mbzogKGEsIGIpID0+IHtcbiAgICAgICAgaWYgKCFiKSB7XG4gICAgICAgICAgICByZXR1cm4gYTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IGNsYXNzTmFtZTogY2xhc3NOYW1lQSA9ICcnLCBpZ25vcmVDbGFzc05hbWU6IGlnbm9yZUNsYXNzTmFtZUEgPSAnJywgcHJvcHM6IHByb3BzQSA9IHt9IH0gPSBhLCByZXN0QSA9IF9fcmVzdChhLCBbXCJjbGFzc05hbWVcIiwgXCJpZ25vcmVDbGFzc05hbWVcIiwgXCJwcm9wc1wiXSk7XG4gICAgICAgIGNvbnN0IHsgY2xhc3NOYW1lOiBjbGFzc05hbWVCID0gJycsIGlnbm9yZUNsYXNzTmFtZTogaWdub3JlQ2xhc3NOYW1lQiA9ICcnLCBwcm9wczogcHJvcHNCID0ge30sIGNoaWxkcmVuIH0gPSBiLCByZXN0QiA9IF9fcmVzdChiLCBbXCJjbGFzc05hbWVcIiwgXCJpZ25vcmVDbGFzc05hbWVcIiwgXCJwcm9wc1wiLCBcImNoaWxkcmVuXCJdKTtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7IHByb3BzOiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHByb3BzQSksIHByb3BzQiksIGNsYXNzTmFtZTogYCR7Y2xhc3NOYW1lQX0gJHtjbGFzc05hbWVCfWAsIGlnbm9yZUNsYXNzTmFtZTogYCR7aWdub3JlQ2xhc3NOYW1lQX0gJHtpZ25vcmVDbGFzc05hbWVCfWAgfSwgcmVzdEEpLCByZXN0Qik7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiDlpoLmnpzkuIDkuKrlhYPntKDlhoXpg6jlj6rmnInlh6DkvZXlm77lvaLvvIzpgqPkuYjlj6rmmL7npLrlhbbnu5PmnoRcbiAgICAgKi9cbiAgICBpc1N0cnVjdE5vZGU6IChub2RlKSA9PiB7XG4gICAgICAgIC8vIOS7pSPlj7flvIDlpLRcbiAgICAgICAgaWYgKG5vZGUubmFtZS5zdGFydHNXaXRoKFwiI1wiKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeWVzVHlwZXMgPSBbJ1JFQ1RBTkdMRScsICdWRUNUT1InLCAnU1RBUicsICdMSU5FJywgJ1BPTFlHT04nLCAnRUxMSVBTRScsICdTTElDRSddO1xuICAgICAgICAvLyDlpoLmnpzmnKzouqvlsLHmmK/ov5nkupvlhYPntKDpgqPkuYjkuZ/mmK/nm7TmjqXovpPlh7pcbiAgICAgICAgaWYgKHllc1R5cGVzLmluZGV4T2Yobm9kZS50eXBlKSA+IC0xKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobm9kZS50eXBlID09PSAnVEVYVCcpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGNvbnN0IHsgY2hpbGRyZW4gPSBbXSB9ID0gbm9kZTtcbiAgICAgICAgaWYgKCFjaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIOaJvuWIsOS6huS4jeWQiOazleWFg+e0oO+8iOS4jeWcqOS4iumdoueahOWHoOS9leWIl+ihqOmHjOmdou+8iVxuICAgICAgICBjb25zdCBnb3RObyA9IGNoaWxkcmVuLmZpbmQoKGl0ZW0pID0+IGl0ZW0udmlzaWJsZSAmJiB5ZXNUeXBlcy5pbmRleE9mKGl0ZW0udHlwZSkgPT09IC0xKTtcbiAgICAgICAgcmV0dXJuICFnb3RObztcbiAgICB9LFxuICAgIGlzUmVuZGVyQ2hpbGRyZW46IChub2RlKSA9PiB7XG4gICAgICAgIGlmICghKG5vZGUudHlwZSA9PT0gJ0lOU1RBTkNFJyB8fCBub2RlLnR5cGUgPT09ICdDT01QT05FTlQnKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIOWPquacieS4gOS4quWtkOWFg+e0oFxuICAgICAgICBpZiAobm9kZS5jaGlsZHJlbi5sZW5ndGggIT09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBjb25zdCBvbmx5Q2hpbGRyZW4gPSBub2RlLmNoaWxkcmVuWzBdO1xuICAgICAgICAvLyBpZiAob25seUNoaWxkcmVuLnR5cGUgPT09ICdJTlNUQU5DRScpIHtcbiAgICAgICAgLy8gICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgLy8gfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSxcbiAgICBnZXROb2RlSW5mbzogKG5vZGUpID0+IHtcbiAgICAgICAgaWYgKCFub2RlLnZpc2libGUgfHwgbm9kZS5uYW1lLnN0YXJ0c1dpdGgoXCJfXCIpKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICAvLyDnm7TmjqXmuLLmn5PlrZDlhYPntKBcbiAgICAgICAgaWYgKE5PREUuaXNSZW5kZXJDaGlsZHJlbihub2RlKSkge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZTtcbiAgICAgICAgICAgIHJldHVybiBOT0RFLmdldE5vZGVJbmZvKG5vZGUuY2hpbGRyZW5bMF0pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGlzU3RydWN0Tm9kZSA9IE5PREUuaXNTdHJ1Y3ROb2RlKG5vZGUpO1xuICAgICAgICBsZXQgbm9kZUluZm8gPSB7XG4gICAgICAgICAgICBpZ25vcmVDbGFzc05hbWU6ICcnLFxuICAgICAgICAgICAgY2xhc3NOYW1lOiAnJyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXVxuICAgICAgICB9O1xuICAgICAgICBpZiAoaXNTdHJ1Y3ROb2RlKSB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBub2RlSW5mby50YWdOYW1lID0gJ2knO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IENPTVBPTkVOVC5nZXRJbmZvKG5vZGUpO1xuICAgICAgICBjb25zdCBmaWxsID0gRklMTC5nZXRJbmZvKG5vZGUpO1xuICAgICAgICBjb25zdCB0ZXh0ID0gVEVYVC5nZXRJbmZvKG5vZGUpO1xuICAgICAgICBjb25zdCBzdHJva2UgPSBTVFJPS0UuZ2V0SW5mbyhub2RlKTtcbiAgICAgICAgY29uc3QgZ3JpZCA9IEdSSUQuZ2V0SW5mbyhub2RlKTtcbiAgICAgICAgY29uc3QgZWZmZWN0ID0gRUZGRUNULmdldEluZm8obm9kZSk7XG4gICAgICAgIGNvbnN0IG90aGVycyA9IE9USEVSUy5nZXRJbmZvKG5vZGUpO1xuICAgICAgICBjb25zdCBmbGV4ID0gRkxFWC5nZXRJbmZvKG5vZGUpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh7Y29tcG9uZW50LCBmaWxsLCB0ZXh0LCBzdHJva2UsIGdyaWQsIGVmZmVjdH0pO1xuICAgICAgICBub2RlSW5mbyA9IE5PREUuZXh0ZW5kSW5mbyhub2RlSW5mbywgZmlsbCk7XG4gICAgICAgIG5vZGVJbmZvID0gTk9ERS5leHRlbmRJbmZvKG5vZGVJbmZvLCB0ZXh0KTtcbiAgICAgICAgbm9kZUluZm8gPSBOT0RFLmV4dGVuZEluZm8obm9kZUluZm8sIHN0cm9rZSk7XG4gICAgICAgIG5vZGVJbmZvID0gTk9ERS5leHRlbmRJbmZvKG5vZGVJbmZvLCBncmlkKTtcbiAgICAgICAgbm9kZUluZm8gPSBOT0RFLmV4dGVuZEluZm8obm9kZUluZm8sIGVmZmVjdCk7XG4gICAgICAgIG5vZGVJbmZvID0gTk9ERS5leHRlbmRJbmZvKG5vZGVJbmZvLCBjb21wb25lbnQpO1xuICAgICAgICBub2RlSW5mbyA9IE5PREUuZXh0ZW5kSW5mbyhub2RlSW5mbywgZmxleCk7XG4gICAgICAgIG5vZGVJbmZvID0gTk9ERS5leHRlbmRJbmZvKG5vZGVJbmZvLCBvdGhlcnMpO1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGlmIChpc1N0cnVjdE5vZGUgfHwgU3RyaW5nKG5vZGVJbmZvID09PSBudWxsIHx8IG5vZGVJbmZvID09PSB2b2lkIDAgPyB2b2lkIDAgOiBub2RlSW5mby5yZW5kZXJXaWR0aCkgPT09ICcxJykge1xuICAgICAgICAgICAgbm9kZUluZm8uY2xhc3NOYW1lICs9ICcgJyArIFNBQ1NTLmFkZCgndycsIHBhcnNlSW50KFN0cmluZyhub2RlLndpZHRoKSkpO1xuICAgICAgICB9XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgaWYgKGlzU3RydWN0Tm9kZSB8fCBTdHJpbmcobm9kZUluZm8gPT09IG51bGwgfHwgbm9kZUluZm8gPT09IHZvaWQgMCA/IHZvaWQgMCA6IG5vZGVJbmZvLnJlbmRlckhlaWdodCkgPT09ICcxJykge1xuICAgICAgICAgICAgbm9kZUluZm8uY2xhc3NOYW1lICs9ICcgJyArIFNBQ1NTLmFkZCgnaCcsIHBhcnNlSW50KFN0cmluZyhub2RlLmhlaWdodCkpKTtcbiAgICAgICAgfVxuICAgICAgICBub2RlSW5mby5jaGlsZHJlbiA9ICgoKSA9PiB7XG4gICAgICAgICAgICBpZiAobm9kZS50eXBlID09PSAnVEVYVCcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gVEVYVC5nZXRUZXh0Q2hpbGRyZW4obm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB7IHJlbmRlckNoaWxkcmVuID0gMSB9ID0gY29tcG9uZW50IHx8IHt9O1xuICAgICAgICAgICAgaWYgKGlzU3RydWN0Tm9kZSB8fCBTdHJpbmcocmVuZGVyQ2hpbGRyZW4pID09PSAnMCcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyDmuLLmn5PlrZDoioLngrlcbiAgICAgICAgICAgIGlmIChTdHJpbmcocmVuZGVyQ2hpbGRyZW4pID09PSAnMicpIHtcbiAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5vZGUuZmluZEFsbChjID0+IGMudHlwZSA9PT0gJ1RFWFQnKS5tYXAoKGMpID0+IGMuY2hhcmFjdGVycyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICByZXR1cm4gTk9ERS5nZXROb2Rlc0luZm8obm9kZS5jaGlsZHJlbik7XG4gICAgICAgIH0pKCk7XG4gICAgICAgIC8vIOaVtOS4qumhueebrumDveW/veeVpeeahCBjbGFzc05hbWVcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBjb25zdCB7IGlnbm9yZUNsYXNzTmFtZSA9ICcnIH0gPSBDT05GSUcuZ2V0Q3VycmVudCgpIHx8IHt9O1xuICAgICAgICBub2RlSW5mby5jbGFzc05hbWUgPSBVVElMUy5jbGVhckNsYXNzTmFtZShub2RlSW5mby5jbGFzc05hbWUsIGAke25vZGVJbmZvLmlnbm9yZUNsYXNzTmFtZX0gJHtpZ25vcmVDbGFzc05hbWV9YCk7XG4gICAgICAgIGRlbGV0ZSBub2RlSW5mby5pZ25vcmVDbGFzc05hbWU7XG4gICAgICAgIC8vIOWHj+WwkeW1jOWll1xuICAgICAgICBpZiAobm9kZUluZm8uY2hpbGRyZW4ubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICBjb25zdCBjaGlsZHJlbkluZm8gPSBub2RlSW5mby5jaGlsZHJlblswXTtcbiAgICAgICAgICAgIC8vIOWmguaenOeItuWFg+e0oOWSjOWtkOWFg+e0oCB0YWdOYW1lIOebuOWQjOWQiOW5tiBjbGFzc05hbWVcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIGlmIChjaGlsZHJlbkluZm8udGFnTmFtZSA9PT0gbm9kZUluZm8udGFnTmFtZSAmJiAhbm9kZUluZm8uY29tcG9uZW50TmFtZSAmJiAhY2hpbGRyZW5JbmZvLmNvbXBvbmVudE5hbWUpIHtcbiAgICAgICAgICAgICAgICBjaGlsZHJlbkluZm8uY2xhc3NOYW1lID0gVVRJTFMuY2xlYXJDbGFzc05hbWUoYCR7Y2hpbGRyZW5JbmZvLmNsYXNzTmFtZX0gJHtub2RlSW5mby5jbGFzc05hbWV9YCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNoaWxkcmVuSW5mbztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhub2RlKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2cobm9kZUluZm8pO1xuICAgICAgICByZXR1cm4gbm9kZUluZm87XG4gICAgfSxcbiAgICBzb3J0OiAobm9kZXMgPSBbXSkgPT4ge1xuICAgICAgICByZXR1cm4gWy4uLm5vZGVzXS5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICBpZiAoYS55ID09PSBiLnkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYS54IC0gYi54O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGEueSAtIGIueTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBnZXROb2Rlc0luZm86IChub2RlcyA9IFtdKSA9PiB7XG4gICAgICAgIGxldCBpbmZvID0gW107XG4gICAgICAgIC8vIOmcgOimgeaOkuW6j+S4gOS4i1xuICAgICAgICBjb25zdCBzb3J0Tm9kZXMgPSBOT0RFLnNvcnQobm9kZXMpO1xuICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gc29ydE5vZGVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBub2RlSW5mbyA9IE5PREUuZ2V0Tm9kZUluZm8oc29ydE5vZGVzW2ldKTtcbiAgICAgICAgICAgIGlmICghbm9kZUluZm8pIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChub2RlSW5mbyBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICAgICAgaW5mbyA9IFsuLi5pbmZvLCAuLi5ub2RlSW5mb107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpbmZvLnB1c2gobm9kZUluZm8pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpbmZvO1xuICAgIH1cbn07XG5leHBvcnQgZGVmYXVsdCBOT0RFO1xuIiwiY29uc3QgU0FDU1MgPSB7XG4gICAgZGF0YToge30sXG4gICAgaW5pdDogKCkgPT4ge1xuICAgICAgICBTQUNTUy5kYXRhID0ge307XG4gICAgfSxcbiAgICBuYW1lTWFwOiB7XG4gICAgICAgICdmcyc6ICdmb250LXNpemUnLFxuICAgICAgICAnbGgnOiAnbGluZS1oZWlnaHQnLFxuICAgICAgICAnbHMnOiAnbGV0dGVyLXNwYWNlJyxcbiAgICAgICAgJ2ZmJzogJ2ZvbnQtZmFtaWx5JyxcbiAgICAgICAgJ3B0JzogJ3BhZGRpbmctdG9wJyxcbiAgICAgICAgJ3ByJzogJ3BhZGRpbmctcmlnaHQnLFxuICAgICAgICAncGInOiAncGFkZGluZy1ib3R0b20nLFxuICAgICAgICAncGwnOiAncGFkZGluZy1sZWZ0JyxcbiAgICAgICAgJ210JzogJ21hcmdpbi10b3AnLFxuICAgICAgICAnbXInOiAnbWFyZ2luLXJpZ2h0JyxcbiAgICAgICAgJ21iJzogJ21hcmdpbi1ib3R0b20nLFxuICAgICAgICAnbWwnOiAnbWFyZ2luLWxlZnQnLFxuICAgICAgICAnaCc6ICdoZWlnaHQnLFxuICAgICAgICAndyc6ICd3aWR0aCcsXG4gICAgICAgICdidGxyJzogJ2JvcmRlci10b3AtbGVmdC1yYWRpdXMnLFxuICAgICAgICAnYnRycic6ICdib3JkZXItdG9wLXJpZ2h0LXJhZGl1cycsXG4gICAgICAgICdiYnJyJzogJ2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzJyxcbiAgICAgICAgJ2JibHInOiAnYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1cycsXG4gICAgICAgICdicic6ICdib3JkZXItcmFkaXVzJ1xuICAgIH0sXG4gICAgZ2V0Q2xhc3NTZWxlY3RvckJ5TmFtZTogKGNsYXNzTmFtZSA9ICcnKSA9PiB7XG4gICAgICAgIGlmIChjbGFzc05hbWUuaW5kZXhPZignLicpID4gLTEpIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IGNsYXNzTmFtZS5yZXBsYWNlKC9cXC4vZywgJ1xcXFwuJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNsYXNzTmFtZS5pbmRleE9mKCc6JykgPiAtMSkge1xuICAgICAgICAgICAgY2xhc3NOYW1lID0gY2xhc3NOYW1lLnJlcGxhY2UoL1xcOi9nLCAnXFxcXDonKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2xhc3NOYW1lLmluZGV4T2YoJyUnKSA+IC0xKSB7XG4gICAgICAgICAgICBjbGFzc05hbWUgPSBjbGFzc05hbWUucmVwbGFjZSgvXFwlL2csICdcXFxcJScpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjbGFzc05hbWU7XG4gICAgfSxcbiAgICBnZXRTdHJpbmc6ICgpID0+IHtcbiAgICAgICAgY29uc3QgZGF0YSA9IFNBQ1NTLmRhdGE7XG4gICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhkYXRhKS5zb3J0KCk7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGtleXMubWFwKChuYW1lKSA9PiBgLiR7U0FDU1MuZ2V0Q2xhc3NTZWxlY3RvckJ5TmFtZShuYW1lKX17JHtkYXRhW25hbWVdfTt9YCkuam9pbignXFxuJyk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSxcbiAgICBhZGQ6IChuYW1lID0gJycsIHZhbHVlLCB1bml0ID0gJ3B4JykgPT4ge1xuICAgICAgICBpZiAoIW5hbWUgfHwgIXZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcHJvcE5hbWUgPSBTQUNTUy5uYW1lTWFwW25hbWVdO1xuICAgICAgICBpZiAoIXByb3BOYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cbiAgICAgICAgLy8g5Y+q5L+d55WZ5Lik5L2N5bCP5pWwXG4gICAgICAgIGNvbnN0IHVzZVZhbHVlID0gTnVtYmVyKHZhbHVlKSA/IHBhcnNlRmxvYXQoTnVtYmVyKHZhbHVlKS50b0ZpeGVkKDIpKSA6IHZhbHVlO1xuICAgICAgICAvLyDlpoLmnpzmmK8gcHgg5LiN6ZyA6KaB5riy5p+TXG4gICAgICAgIGNvbnN0IGNsYXNzVW5pdCA9IHVuaXQgPT09ICdweCcgPyAnJyA6IHVuaXQ7XG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IGAke25hbWV9JHt1c2VWYWx1ZX0ke2NsYXNzVW5pdH1gO1xuICAgICAgICBTQUNTUy5kYXRhW2NsYXNzTmFtZV0gPSBgJHtwcm9wTmFtZX06JHt1c2VWYWx1ZX0ke3VuaXR9YDtcbiAgICAgICAgcmV0dXJuIGNsYXNzTmFtZTtcbiAgICB9LFxuICAgIGFkZEZvbnRGYW1pbHk6ICh2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdmFsdWVPayA9IHZhbHVlLnJlcGxhY2UoL1tcXFddL2csICcnKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBgZmY6JHt2YWx1ZU9rfWA7XG4gICAgICAgIFNBQ1NTLmRhdGFbY2xhc3NOYW1lXSA9IGBmb250LWZhbWlseTpcIiR7dmFsdWV9XCJgO1xuICAgICAgICByZXR1cm4gY2xhc3NOYW1lO1xuICAgIH0sXG4gICAgYWRkQ29sb3I6IChyZ2JhID0gW10pID0+IHtcbiAgICAgICAgaWYgKCFyZ2JhICYmIHJnYmEubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gYGM6JHtyZ2JhLmpvaW4oJycpfWA7XG4gICAgICAgIFNBQ1NTLmRhdGFbY2xhc3NOYW1lXSA9IGBjb2xvcjpyZ2JhKCR7cmdiYS5qb2luKCcsJyl9KWA7XG4gICAgICAgIHJldHVybiBjbGFzc05hbWU7XG4gICAgfSxcbiAgICBhZGRCZ0NvbG9yOiAocmdiYSA9IFtdKSA9PiB7XG4gICAgICAgIGlmICghcmdiYSAmJiByZ2JhLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IGBiYzoke3JnYmEuam9pbignJyl9YDtcbiAgICAgICAgU0FDU1MuZGF0YVtjbGFzc05hbWVdID0gYGJhY2tncm91bmQtY29sb3I6cmdiYSgke3JnYmEuam9pbignLCcpfSlgO1xuICAgICAgICByZXR1cm4gY2xhc3NOYW1lO1xuICAgIH1cbn07XG5leHBvcnQgZGVmYXVsdCBTQUNTUztcbiIsImNvbnN0IFVUSUxTID0ge1xuICAgIGlzQmxvY2s6ICh0YWdOYW1lID0gJycpID0+IHtcbiAgICAgICAgY29uc3QgYmxvY2tUYWcgPSBbJ2RpdicsICdoMScsICdoMicsICdoMycsICdoNCcsICdoNScsICdoNicsICdwJ107XG4gICAgICAgIHJldHVybiBibG9ja1RhZy5pbmRleE9mKHRhZ05hbWUpID4gLTE7XG4gICAgfSxcbiAgICBpc1NlbGZUYWc6ICh0YWdOYW1lID0gJycpID0+IHtcbiAgICAgICAgY29uc3Qgc2VsZlRhZyA9IFsnaW1nJywgJ2xpbmsnLCAnbWV0YScsICdicicsICdicicsICdocicsICdpbnB1dCcsICdjb2wnLCAnZnJhbWUnLCAnYXJlYScsICdwYXJhbScsICdvYmplY3QnLCAnZW1iZWQnLCAna2V5Z2VuJywgJ3NvdXJjZSddO1xuICAgICAgICByZXR1cm4gc2VsZlRhZy5pbmRleE9mKHRhZ05hbWUpID4gLTE7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiDljrvph43lkozljrvnqbpcbiAgICAgKiBAcGFyYW0gYXJyU3RyXG4gICAgICovXG4gICAgY2xlYXJDbGFzc05hbWU6IChjbGFzc05hbWUgPSAnJywgaWdub3JlQ2xhc3NOYW1lID0gJycpID0+IHtcbiAgICAgICAgaWYgKCFjbGFzc05hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjbGFzc05hbWVzID0gY2xhc3NOYW1lLnNwbGl0KCcgJyk7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgICAgICBjbGFzc05hbWVzLmZvckVhY2goKGl0ZW0gPSAnJykgPT4ge1xuICAgICAgICAgICAgaWYgKGl0ZW0gJiYgaXRlbSAhPT0gJ251bGwnICYmIHJlc3VsdC5pbmRleE9mKGl0ZW0pID09PSAtMSAmJiBpZ25vcmVDbGFzc05hbWUuaW5kZXhPZihpdGVtKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChpdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXN1bHQuam9pbignICcpO1xuICAgIH1cbn07XG5leHBvcnQgZGVmYXVsdCBVVElMUztcbiIsImltcG9ydCBIVE1MIGZyb20gXCIuL0hUTUxcIjtcbmltcG9ydCBKU1ggZnJvbSBcIi4vSlNYXCI7XG5jb25zdCBET00gPSB7XG4gICAgcmVuZGVyOiAob2JqID0gW10sIGlzSlNYKSA9PiB7XG4gICAgICAgIGlmIChpc0pTWCkge1xuICAgICAgICAgICAgcmV0dXJuIEpTWC5nZXREb21CeUFycmF5KG9iaik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIEhUTUwuZ2V0RG9tQnlBcnJheShvYmopO1xuICAgIH1cbn07XG5leHBvcnQgZGVmYXVsdCBET007XG4iLCJ2YXIgX19yZXN0ID0gKHRoaXMgJiYgdGhpcy5fX3Jlc3QpIHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gICAgdmFyIHQgPSB7fTtcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcbiAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XG4gICAgICAgIH1cbiAgICByZXR1cm4gdDtcbn07XG5pbXBvcnQgVVRJTFMgZnJvbSBcIi4uL1VUSUxTXCI7XG4vLyBsZWdhbCDlkIjms5XlsZ7mgKdcbmNvbnN0IGxlZ2FsUHJvcCA9IFsnY2xhc3MnLCAndHlwZScsICduYW1lJywgJ3JvbGUnLCAnZGlzYWJsZWQnLCAnaWQnLCAndGl0bGUnLCAnbGFuZycsICdkaXInLCAndGFiaW5kZXgnLCAnYWNjZXNza2V5JywgJ3NyYycsICdocmVmJywgJ3N0eWxlJywgJ2FyaWEtaGlkZGVuJywgJ3RhcmdldCcsICdyZWwnXTtcbmNvbnN0IEhUTUwgPSB7XG4gICAgZ2V0UHJvcHNTdHJpbmc6IChfYSA9IHt9KSA9PiB7XG4gICAgICAgIHZhciB7IGNsYXNzTmFtZSA9ICcnIH0gPSBfYSwgcHJvcHMgPSBfX3Jlc3QoX2EsIFtcImNsYXNzTmFtZVwiXSk7XG4gICAgICAgIGNvbnN0IGFyclByb3BzID0gW107XG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZXMgPSBjbGFzc05hbWUuc3BsaXQoJyAnKTtcbiAgICAgICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMocHJvcHMpKSB7XG4gICAgICAgICAgICBjb25zdCBzdHJWYWx1ZSA9IFN0cmluZyh2YWx1ZSk7XG4gICAgICAgICAgICBpZiAoc3RyVmFsdWUgPT09ICcnIHx8IHN0clZhbHVlID09PSAnZmFsc2UnKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoa2V5LnN0YXJ0c1dpdGgoJ2RhdGEtJykpIHtcbiAgICAgICAgICAgICAgICBhcnJQcm9wcy5wdXNoKGAke2tleX09XCIke3N0clZhbHVlfVwiYCk7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobGVnYWxQcm9wLmluZGV4T2Yoa2V5KSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgYXJyUHJvcHMucHVzaChgJHtrZXl9PVwiJHtzdHJWYWx1ZX1cImApO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoc3RyVmFsdWUgPT09ICd0cnVlJykge1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZXMucHVzaChgXyR7a2V5fWApO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChjbGFzc05hbWVzLmxlbmd0aCkge1xuICAgICAgICAgICAgYXJyUHJvcHMucHVzaChgY2xhc3M9XCIke2NsYXNzTmFtZXMuam9pbignICcpfVwiYCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFyclByb3BzLmpvaW4oJyAnKTtcbiAgICB9LFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBnZXRJdGVtRG9tOiAoaXRlbSkgPT4ge1xuICAgICAgICBpZiAoIWl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGl0ZW0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IGNoaWxkcmVuID0gW10sIHByb3BzID0ge30sIGNsYXNzTmFtZSA9ICcnIH0gPSBpdGVtO1xuICAgICAgICBjb25zdCB0YWdOYW1lID0gaXRlbS50YWdOYW1lIHx8ICdkaXYnO1xuICAgICAgICBjb25zdCBwcm9wc1N0cmluZyA9IEhUTUwuZ2V0UHJvcHNTdHJpbmcoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBwcm9wcyksIHsgY2xhc3NOYW1lIH0pKTtcbiAgICAgICAgY29uc3QgdGFnU3RhcnQgPSBgJHt0YWdOYW1lfSR7cHJvcHNTdHJpbmcgPyBgICR7cHJvcHNTdHJpbmd9YCA6ICcnfWA7XG4gICAgICAgIGlmIChVVElMUy5pc1NlbGZUYWcodGFnTmFtZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBgPCR7dGFnU3RhcnR9Lz5gO1xuICAgICAgICB9XG4gICAgICAgIGlmICghY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gYDwke3RhZ1N0YXJ0fT48LyR7dGFnTmFtZX0+YDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYDwke3RhZ1N0YXJ0fT4ke0hUTUwuZ2V0RG9tQnlBcnJheShjaGlsZHJlbil9PC8ke3RhZ05hbWV9PmA7XG4gICAgfSxcbiAgICBnZXREb21CeUFycmF5OiAob2JqID0gW10pID0+IHtcbiAgICAgICAgcmV0dXJuIG9iai5tYXAoKGl0ZW0pID0+IEhUTUwuZ2V0SXRlbURvbShpdGVtKSkuam9pbignJyk7XG4gICAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IEhUTUw7XG4iLCJpbXBvcnQgVVRJTFMgZnJvbSBcIi4uL1VUSUxTXCI7XG5jb25zdCBKU1ggPSB7XG4gICAgZ2V0UHJvcHNTdHJpbmc6IChwcm9wcyA9IHt9KSA9PiB7XG4gICAgICAgIGNvbnN0IGFyclByb3BzID0gW107XG4gICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHByb3BzKSkge1xuICAgICAgICAgICAgY29uc3QgaXRlbSA9ICgoa2V5LCB2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0clZhbHVlID0gU3RyaW5nKHZhbHVlKTtcbiAgICAgICAgICAgICAgICBpZiAoc3RyVmFsdWUgPT09ICcnIHx8IHZhbHVlID09PSAnZmFsc2UnKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGAke2tleX09XCIke3N0clZhbHVlfVwiYDtcbiAgICAgICAgICAgIH0pKGtleSwgdmFsdWUpO1xuICAgICAgICAgICAgaXRlbSAmJiBhcnJQcm9wcy5wdXNoKGl0ZW0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhcnJQcm9wcy5qb2luKCcgJyk7XG4gICAgfSxcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgZ2V0SXRlbURvbTogKGl0ZW0pID0+IHtcbiAgICAgICAgaWYgKCFpdGVtKSB7XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyBjaGlsZHJlbiA9IFtdLCBwcm9wcyA9IHt9LCBjbGFzc05hbWUgPSAnJyB9ID0gaXRlbTtcbiAgICAgICAgY29uc3QgdGFnTmFtZSA9IGl0ZW0uY29tcG9uZW50TmFtZSB8fCBpdGVtLnRhZ05hbWUgfHwgJ2Rpdic7XG4gICAgICAgIGNvbnN0IHN0clByb3BzID0gSlNYLmdldFByb3BzU3RyaW5nKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMpLCB7IGNsYXNzTmFtZSB9KSk7XG4gICAgICAgIGNvbnN0IHRhZ1N0YXJ0ID0gYCR7dGFnTmFtZX0ke3N0clByb3BzID8gYCAke3N0clByb3BzfWAgOiAnJ31gO1xuICAgICAgICBpZiAoVVRJTFMuaXNTZWxmVGFnKHRhZ05hbWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gYDwke3RhZ1N0YXJ0fS8+YDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGl0ZW0uY29tcG9uZW50TmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBgPCR7dGFnU3RhcnR9Lz5gO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGA8JHt0YWdTdGFydH0+PC8ke3RhZ05hbWV9PmA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGA8JHt0YWdTdGFydH0+JHtKU1guZ2V0RG9tQnlBcnJheShjaGlsZHJlbil9PC8ke3RhZ05hbWV9PmA7XG4gICAgfSxcbiAgICBnZXREb21CeUFycmF5OiAob2JqID0gW10pID0+IHtcbiAgICAgICAgcmV0dXJuIG9iai5tYXAoKGl0ZW0pID0+IEpTWC5nZXRJdGVtRG9tKGl0ZW0pKS5qb2luKCcnKTtcbiAgICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgSlNYO1xuIiwiY29uc3QgQ09MT1IgPSB7XG4gICAgZ2V0UmdiYUJ5RmlsbDogKHsgY29sb3IsIG9wYWNpdHksIHZpc2libGUgfSkgPT4ge1xuICAgICAgICAvLyDlpoLmnpzkuI3lj6/op4FcbiAgICAgICAgaWYgKCF2aXNpYmxlIHx8IG9wYWNpdHkgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHIgPSBwYXJzZUludChTdHJpbmcoY29sb3IuciAqIDI1NSkpO1xuICAgICAgICBjb25zdCBnID0gcGFyc2VJbnQoU3RyaW5nKGNvbG9yLmcgKiAyNTUpKTtcbiAgICAgICAgY29uc3QgYiA9IHBhcnNlSW50KFN0cmluZyhjb2xvci5iICogMjU1KSk7XG4gICAgICAgIGNvbnN0IGEgPSBTdHJpbmcob3BhY2l0eSkuaW5kZXhPZignLicpID4gLTEgPyBvcGFjaXR5LnRvRml4ZWQoMSkgOiBvcGFjaXR5O1xuICAgICAgICByZXR1cm4gW3IsIGcsIGIsIGFdO1xuICAgIH0sXG59O1xuZXhwb3J0IGRlZmF1bHQgQ09MT1I7XG4iLCJpbXBvcnQgQ09ORklHIGZyb20gXCIuLi9DT05GSUdcIjtcbmNvbnN0IEVGRkVDVCA9IHtcbiAgICBnZXRJbmZvOiAobm9kZSkgPT4ge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHJldHVybiBDT05GSUcuZ2V0SW5mb0J5SWQobm9kZS5lZmZlY3RTdHlsZUlkKTtcbiAgICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgRUZGRUNUO1xuIiwidmFyIF9fcmVzdCA9ICh0aGlzICYmIHRoaXMuX19yZXN0KSB8fCBmdW5jdGlvbiAocywgZSkge1xuICAgIHZhciB0ID0ge307XG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXG4gICAgICAgIHRbcF0gPSBzW3BdO1xuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xuICAgICAgICB9XG4gICAgcmV0dXJuIHQ7XG59O1xuaW1wb3J0IENPTE9SIGZyb20gXCIuL0NPTE9SXCI7XG5pbXBvcnQgQ09ORklHIGZyb20gXCIuLi9DT05GSUdcIjtcbmltcG9ydCBTQUNTUyBmcm9tIFwiLi4vU0FDU1NcIjtcbmNvbnN0IEZJTEwgPSB7XG4gICAgZ2V0RmlsbDogKG5vZGUpID0+IHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBjb25zdCBbZmlyc3RGaWxsID0gbnVsbF0gPSBub2RlLmZpbGxzIHx8IFtdO1xuICAgICAgICAvLyDmsqHmnInorr7nva7ku7vkvZXpopzoibIsIOebruWJjeS4jeaUr+aMgea4kOWPmFxuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGlmICghZmlyc3RGaWxsIHx8IGZpcnN0RmlsbC50eXBlICE9PSAnU09MSUQnKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb2xvciA9IENPTE9SLmdldFJnYmFCeUZpbGwoZmlyc3RGaWxsKTtcbiAgICAgICAgaWYgKCFjb2xvcikge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gbm9kZS50eXBlID09PSAnVEVYVCcgPyBTQUNTUy5hZGRDb2xvcihjb2xvcikgOiBTQUNTUy5hZGRCZ0NvbG9yKGNvbG9yKTtcbiAgICAgICAgLy8g5paH5pys5piv55So6aKc6Imy77yM5YW25a6D55CG6Kej5Li66IOM5pmv6ImyXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjbGFzc05hbWVcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIC8vIOiOt+WPluWhq+WFheS/oeaBr1xuICAgIGdldEluZm86IChub2RlKSA9PiB7XG4gICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICBjb25zdCBfYSA9IENPTkZJRy5nZXRJbmZvQnlJZChub2RlLmZpbGxTdHlsZUlkKSB8fCB7fSwgeyB0ZXh0Q2xhc3NOYW1lID0gJycsIGNsYXNzTmFtZSA9ICcnIH0gPSBfYSwgcmVzdCA9IF9fcmVzdChfYSwgW1widGV4dENsYXNzTmFtZVwiLCBcImNsYXNzTmFtZVwiXSk7XG4gICAgICAgIGNvbnN0IHJlbmRlckNsYXNzTmFtZSA9IG5vZGUudHlwZSA9PT0gJ1RFWFQnID8gdGV4dENsYXNzTmFtZSA6IGNsYXNzTmFtZTtcbiAgICAgICAgaWYgKCFyZW5kZXJDbGFzc05hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiBGSUxMLmdldEZpbGwobm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IHJlbmRlckNsYXNzTmFtZSB9LCByZXN0KTtcbiAgICB9LFxufTtcbmV4cG9ydCBkZWZhdWx0IEZJTEw7XG4iLCJpbXBvcnQgU0FDU1MgZnJvbSBcIi4uL1NBQ1NTXCI7XG4vLyBpbXBvcnQgQ09ORklHIGZyb20gXCIuL0NPTkZJR1wiO1xuY29uc3QgRkxFWCA9IHtcbiAgICBpc0ZsZXg6IChub2RlKSA9PiB7XG4gICAgICAgIC8vIOi/meWHoOS4quWFg+e0oOmDveS4jeWBmiBGbGV4IOWIpOaWreWkhOeQhlxuICAgICAgICBpZiAoWydURVhUJ10uaW5kZXhPZihub2RlLnR5cGUpID4gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKG5vZGUgPT09IG51bGwgfHwgbm9kZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogbm9kZS5sYXlvdXRNb2RlKSAhPT0gXCJOT05FXCI7XG4gICAgfSxcbiAgICBnZXRUaGlzSW5mbzogKG5vZGUpID0+IHtcbiAgICAgICAgaWYgKCFGTEVYLmlzRmxleChub2RlKSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyBsYXlvdXRNb2RlLCBwcmltYXJ5QXhpc0FsaWduSXRlbXMsIGNvdW50ZXJBeGlzQWxpZ25JdGVtcywgY2hpbGRyZW4gPSBbXSB9ID0gbm9kZTtcbiAgICAgICAgLy8g5rKh5pyJ5a2Q5YWD57SgIGZsZXgg5biD5bGA5rKh5pyJ5oSP5LmJXG4gICAgICAgIGlmICghY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBbXTtcbiAgICAgICAgLy8g5aaC5p6c5piv57q15ZCR55qEIOi/memHjOWPr+S7peS4jeS9v+eUqCBmbGV4IOW4g+WxgFxuICAgICAgICBpZiAobGF5b3V0TW9kZSA9PT0gJ1ZFUlRJQ0FMJykge1xuICAgICAgICAgICAgLy8g5b2T5piv57q15ZCR5biD5bGA5b2T5pe25YCZXG4gICAgICAgICAgICBjbGFzc05hbWUucHVzaCh7XG4gICAgICAgICAgICAgICAgLy8gXCJNSU5cIjogXCJcIixcbiAgICAgICAgICAgICAgICBcIkNFTlRFUlwiOiBcInRhY1wiLFxuICAgICAgICAgICAgICAgIFwiTUFYXCI6IFwidGFyXCIsXG4gICAgICAgICAgICB9W2NvdW50ZXJBeGlzQWxpZ25JdGVtc10pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY2xhc3NOYW1lLnB1c2goe1xuICAgICAgICAgICAgICAgIC8vIFwiTUlOXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgXCJDRU5URVJcIjogXCJqY2NcIixcbiAgICAgICAgICAgICAgICBcIk1BWFwiOiBcImpjZmVcIixcbiAgICAgICAgICAgICAgICBcIlNQQUNFX0JFVFdFRU5cIjogXCJqY3NiXCIsXG4gICAgICAgICAgICB9W3ByaW1hcnlBeGlzQWxpZ25JdGVtc10gfHwgXCJcIik7XG4gICAgICAgICAgICBjbGFzc05hbWUucHVzaCh7XG4gICAgICAgICAgICAgICAgLy9cIk1JTlwiOiBcIlwiLFxuICAgICAgICAgICAgICAgIFwiQ0VOVEVSXCI6IFwiYWljXCIsXG4gICAgICAgICAgICAgICAgXCJNQVhcIjogXCJhaWZlXCIsXG4gICAgICAgICAgICB9W2NvdW50ZXJBeGlzQWxpZ25JdGVtc10gfHwgXCJcIik7XG4gICAgICAgICAgICBjbGFzc05hbWUucHVzaCgnZGYnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUuam9pbignICcpXG4gICAgICAgIH07XG4gICAgfSxcbiAgICBnZXRJbmZvRnJvbVBhcmVudDogKG5vZGUpID0+IHtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gbm9kZS5wYXJlbnQ7XG4gICAgICAgIGlmICghcGFyZW50IHx8ICFGTEVYLmlzRmxleChwYXJlbnQpKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGNvbnN0IHsgbGF5b3V0TW9kZSwgcHJpbWFyeUF4aXNBbGlnbkl0ZW1zLCBpdGVtU3BhY2luZyB9ID0gcGFyZW50O1xuICAgICAgICAvLyDkuKTnq6/lr7nlhbbooajnpLrkuI3pnIDopoHov5nkuptcbiAgICAgICAgaWYgKHByaW1hcnlBeGlzQWxpZ25JdGVtcyA9PT0gXCJTUEFDRV9CRVRXRUVOXCIpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IFtdO1xuICAgICAgICBjb25zdCBpZ25vcmVDbGFzc05hbWUgPSBbXTtcbiAgICAgICAgY29uc3QgeyBpZCA9ICcnIH0gPSBwYXJlbnQuY2hpbGRyZW4uZmlsdGVyKGMgPT4gYy52aXNpYmxlKS5wb3AoKSB8fCB7fTtcbiAgICAgICAgY29uc3QgaXNMYXN0Q2hpbGRyZW4gPSBpZCA9PT0gbm9kZS5pZDtcbiAgICAgICAgLy8g5Li65a2Q5YWD57Sg5re75Yqg6Ze06LedXG4gICAgICAgIGlmIChpdGVtU3BhY2luZyA+IDAgJiYgIWlzTGFzdENoaWxkcmVuKSB7XG4gICAgICAgICAgICBjb25zdCBndXR0ZXJNYXAgPSB7XG4gICAgICAgICAgICAgICAgXCJWRVJUSUNBTFwiOiBcIm1iXCIsXG4gICAgICAgICAgICAgICAgXCJIT1JJWk9OVEFMXCI6IFwibXJcIlxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNsYXNzTmFtZS5wdXNoKFNBQ1NTLmFkZChndXR0ZXJNYXBbbGF5b3V0TW9kZV0sIGl0ZW1TcGFjaW5nKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5vZGUubGF5b3V0R3JvdyA9PT0gMSkge1xuICAgICAgICAgICAgY2xhc3NOYW1lLnB1c2goJ2YxJyk7XG4gICAgICAgICAgICBpZ25vcmVDbGFzc05hbWUucHVzaChgdyR7bm9kZS53aWR0aH1gKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUuam9pbignICcpLFxuICAgICAgICAgICAgaWdub3JlQ2xhc3NOYW1lOiBpZ25vcmVDbGFzc05hbWUuam9pbignICcpXG4gICAgICAgIH07XG4gICAgfSxcbiAgICBnZXRJbmZvOiAobm9kZSkgPT4ge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGNvbnN0IHsgY2xhc3NOYW1lOiBjMSA9ICcnLCBpZ25vcmVDbGFzc05hbWU6IGljMSA9ICcnIH0gPSBGTEVYLmdldFRoaXNJbmZvKG5vZGUpIHx8IHt9O1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGNvbnN0IHsgY2xhc3NOYW1lOiBjMiA9ICcnLCBpZ25vcmVDbGFzc05hbWU6IGljMiA9ICcnIH0gPSBGTEVYLmdldEluZm9Gcm9tUGFyZW50KG5vZGUpIHx8IHt9O1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiBgJHtjMX0gJHtjMn1gLFxuICAgICAgICAgICAgaWdub3JlQ2xhc3NOYW1lOiBgJHtpYzF9ICR7aWMyfWBcbiAgICAgICAgfTtcbiAgICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgRkxFWDtcbiIsImltcG9ydCBDT05GSUcgZnJvbSBcIi4uL0NPTkZJR1wiO1xuY29uc3QgR1JJRCA9IHtcbiAgICBnZXRJbmZvOiAobm9kZSkgPT4ge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHJldHVybiBDT05GSUcuZ2V0SW5mb0J5SWQobm9kZS5ncmlkU3R5bGVJZCk7XG4gICAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IEdSSUQ7XG4iLCJpbXBvcnQgU0FDU1MgZnJvbSBcIi4uL1NBQ1NTXCI7XG5jb25zdCBPVEhFUlMgPSB7XG4gICAgZ2VyQm9yZGVyUmFkaXVzQ2xhc3NOYW1lOiAobm9kZSkgPT4ge1xuICAgICAgICBjb25zdCB0bCA9IG5vZGUudG9wTGVmdFJhZGl1cyB8fCAwO1xuICAgICAgICBjb25zdCB0ciA9IG5vZGUudG9wUmlnaHRSYWRpdXMgfHwgMDtcbiAgICAgICAgY29uc3QgYnIgPSBub2RlLmJvdHRvbVJpZ2h0UmFkaXVzIHx8IDA7XG4gICAgICAgIGNvbnN0IGJsID0gbm9kZS5ib3R0b21MZWZ0UmFkaXVzIHx8IDA7XG4gICAgICAgIC8vIOWFqOmDqOS4uiAwXG4gICAgICAgIGlmICgodGwgKyB0ciArIGJyICsgYmwpID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cbiAgICAgICAgLy8g5aaC5p6c5Zub5Liq5YC86YO955u4562JXG4gICAgICAgIGlmICgodGwgPT09IHRyKSAmJiAodGwgPT09IGJyKSAmJiAodGwgPT09IGJsKSkge1xuICAgICAgICAgICAgcmV0dXJuIFtTQUNTUy5hZGQoJ2JyJywgdGwpXTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBbXTtcbiAgICAgICAgdGwgJiYgY2xhc3NOYW1lLnB1c2goU0FDU1MuYWRkKCdidGxyJywgdGwpKTtcbiAgICAgICAgdHIgJiYgY2xhc3NOYW1lLnB1c2goU0FDU1MuYWRkKCdidHJyJywgdHIpKTtcbiAgICAgICAgYnIgJiYgY2xhc3NOYW1lLnB1c2goU0FDU1MuYWRkKCdiYnJyJywgYnIpKTtcbiAgICAgICAgYmwgJiYgY2xhc3NOYW1lLnB1c2goU0FDU1MuYWRkKCdiYmxyJywgYmwpKTtcbiAgICAgICAgcmV0dXJuIGNsYXNzTmFtZTtcbiAgICB9LFxuICAgIGdldFBhZGRpbmdDbGFzc05hbWU6IChub2RlKSA9PiB7XG4gICAgICAgIC8vIOS8muW/veeVpeaOiSAx5YOP57Sg55qEIHBhZGRpbmdcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIG5vZGUucGFkZGluZ1RvcCA+IDEgPyBTQUNTUy5hZGQoJ3B0Jywgbm9kZS5wYWRkaW5nVG9wKSA6ICcnLFxuICAgICAgICAgICAgbm9kZS5wYWRkaW5nUmlnaHQgPiAxID8gU0FDU1MuYWRkKCdwcicsIG5vZGUucGFkZGluZ1JpZ2h0KSA6ICcnLFxuICAgICAgICAgICAgbm9kZS5wYWRkaW5nQm90dG9tID4gMSA/IFNBQ1NTLmFkZCgncGInLCBub2RlLnBhZGRpbmdCb3R0b20pIDogJycsXG4gICAgICAgICAgICBub2RlLnBhZGRpbmdMZWZ0ID4gMSA/IFNBQ1NTLmFkZCgncGwnLCBub2RlLnBhZGRpbmdMZWZ0KSA6ICcnLFxuICAgICAgICBdO1xuICAgIH0sXG4gICAgZ2V0SW5mbzogKG5vZGUpID0+IHtcbiAgICAgICAgY29uc3QgcGFkZGluZyA9IE9USEVSUy5nZXRQYWRkaW5nQ2xhc3NOYW1lKG5vZGUpO1xuICAgICAgICBjb25zdCByYWRpdXMgPSBPVEhFUlMuZ2VyQm9yZGVyUmFkaXVzQ2xhc3NOYW1lKG5vZGUpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiBbLi4ucGFkZGluZywgLi4ucmFkaXVzXS5qb2luKCcgJylcbiAgICAgICAgfTtcbiAgICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgT1RIRVJTO1xuIiwiaW1wb3J0IENPTkZJRyBmcm9tIFwiLi4vQ09ORklHXCI7XG5jb25zdCBTVFJPS0UgPSB7XG4gICAgLy8g5paH5pys57uE5Lu2XG4gICAgZ2V0SW5mbzogKG5vZGUpID0+IHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICByZXR1cm4gQ09ORklHLmdldEluZm9CeUlkKG5vZGUuc3Ryb2tlU3R5bGVJZCk7XG4gICAgfSxcbn07XG5leHBvcnQgZGVmYXVsdCBTVFJPS0U7XG4iLCJpbXBvcnQgQ09ORklHIGZyb20gXCIuLi9DT05GSUdcIjtcbmltcG9ydCBTQUNTUyBmcm9tIFwiLi4vU0FDU1NcIjtcbmNvbnN0IFRFWFQgPSB7XG4gICAgdW5pdE1hcDoge1xuICAgICAgICAnUEVSQ0VOVCc6ICclJ1xuICAgICAgICAvLyBcIlBJWEVMU1wiOlwiXCJcbiAgICB9LFxuICAgIGdldEZvbnROYW1lQ2xhc3M6IChub2RlKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgZm9udE5hbWUgfSA9IG5vZGU7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgY29uc3QgeyBzdHlsZSB9ID0gZm9udE5hbWU7XG4gICAgICAgIGlmICh0eXBlb2Ygc3R5bGUgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZm9udE1hcCA9IHtcbiAgICAgICAgICAgIFwiVUxUUkFMSUdIVFwiOiBcImZ3MTAwXCIsXG4gICAgICAgICAgICBcIlRISU5cIjogJ2Z3MjAwJyxcbiAgICAgICAgICAgIFwiTElHSFRcIjogXCJmdzMwMFwiLFxuICAgICAgICAgICAgXCJSRUdVTEFSXCI6IFwiXCIsXG4gICAgICAgICAgICBcIk1FRElVTVwiOiBcImZ3NTAwXCIsXG4gICAgICAgICAgICBcIlNFTUlCT0xEXCI6IFwiZnc2MDBcIixcbiAgICAgICAgICAgIFwiQk9MRFwiOiBcImZ3NzAwXCIsXG4gICAgICAgICAgICBcIkJMQUNLXCI6IFwiZnc5MDBcIixcbiAgICAgICAgICAgIFwiSVRBTElDXCI6IFwiZnNpXCIsXG4gICAgICAgICAgICBcIk9CTElRVUVcIjogXCJmc2lcIlxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBzdHlsZS5zcGxpdCgnICcpLm1hcCgoaXRlbSkgPT4gZm9udE1hcFtpdGVtLnRvVXBwZXJDYXNlKCldIHx8ICcnKTtcbiAgICAgICAgcmV0dXJuIGNsYXNzTmFtZS5maWx0ZXIoaXRlbSA9PiBpdGVtKS5qb2luKCcgJyk7XG4gICAgfSxcbiAgICBnZXRBQ1NTU0luZm86IChub2RlKSA9PiB7XG4gICAgICAgIHZhciBfYSwgX2IsIF9jO1xuICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBbXTtcbiAgICAgICAgaWYgKFtcInN0cmluZ1wiLCBcIm51bWJlclwiXS5pbmRleE9mKHR5cGVvZiBub2RlLmZvbnRTaXplKSA+IC0xKSB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBjbGFzc05hbWUucHVzaChTQUNTUy5hZGQoJ2ZzJywgbm9kZS5mb250U2l6ZSkpO1xuICAgICAgICB9XG4gICAgICAgIC8vIOadremrmFxuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGlmICgoX2EgPSBub2RlLmxpbmVIZWlnaHQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS52YWx1ZSkge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgY29uc3QgeyB2YWx1ZSwgdW5pdCB9ID0gbm9kZS5saW5lSGVpZ2h0O1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgY2xhc3NOYW1lLnB1c2goU0FDU1MuYWRkKCdsaCcsIHZhbHVlLCBURVhULnVuaXRNYXBbdW5pdF0pKTtcbiAgICAgICAgfVxuICAgICAgICAvLyDlrZfpl7Tot51cbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBpZiAoKF9iID0gbm9kZS5sZXR0ZXJTcGFjaW5nKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IudmFsdWUpIHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIGNvbnN0IHsgdmFsdWUsIHVuaXQgfSA9IG5vZGUubGV0dGVyU3BhY2luZztcbiAgICAgICAgICAgIGNsYXNzTmFtZS5wdXNoKFNBQ1NTLmFkZCgnbHMnLCB2YWx1ZSwgVEVYVC51bml0TWFwW3VuaXRdKSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gZm9udC13ZWlnaHQgZm9udC1zdHlsZVxuICAgICAgICBjb25zdCBmbkNsYXNzID0gVEVYVC5nZXRGb250TmFtZUNsYXNzKG5vZGUpO1xuICAgICAgICBmbkNsYXNzICYmIGNsYXNzTmFtZS5wdXNoKGZuQ2xhc3MpO1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGlmICgoX2MgPSBub2RlLmZvbnROYW1lKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MuZmFtaWx5KSB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBjbGFzc05hbWUucHVzaChTQUNTUy5hZGRGb250RmFtaWx5KG5vZGUuZm9udE5hbWUuZmFtaWx5KSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gdGV4dC1hbGlnblxuICAgICAgICBjb25zdCB0YUNsYXNzID0ge1xuICAgICAgICAgICAgXCJMRUZUXCI6ICcnLFxuICAgICAgICAgICAgXCJDRU5URVJcIjogJ3RhYycsXG4gICAgICAgICAgICBcIlJJR0hUXCI6ICd0YXInLFxuICAgICAgICAgICAgXCJKVVNUSUZJRURcIjogJ3RhaicsXG4gICAgICAgIH1bbm9kZS50ZXh0QWxpZ25Ib3Jpem9udGFsXTtcbiAgICAgICAgdGFDbGFzcyAmJiBjbGFzc05hbWUucHVzaCh0YUNsYXNzKTtcbiAgICAgICAgLy8gdmVydGljYWwtYWxpZ25cbiAgICAgICAgY29uc3QgdmFDbGFzcyA9IHtcbiAgICAgICAgICAgIFwiVE9QXCI6ICcnLFxuICAgICAgICAgICAgXCJDRU5URVJcIjogJ3ZhbScsXG4gICAgICAgICAgICBcIkJPVFRPTVwiOiAndmFiJyxcbiAgICAgICAgfVtub2RlLnRleHRBbGlnblZlcnRpY2FsXTtcbiAgICAgICAgdmFDbGFzcyAmJiBjbGFzc05hbWUucHVzaCh2YUNsYXNzKTtcbiAgICAgICAgLy8gdHRcbiAgICAgICAgY29uc3QgdHRDbGFzcyA9IHtcbiAgICAgICAgICAgIFwiT1JJR0lOQUxcIjogJycsXG4gICAgICAgICAgICBcIlVQUEVSXCI6ICd0dHUnLFxuICAgICAgICAgICAgXCJMT1dFUlwiOiAndHRsJyxcbiAgICAgICAgICAgIFwiVElUTEVcIjogJ3R0YycsXG4gICAgICAgIH1bbm9kZS50ZXh0Q2FzZV07XG4gICAgICAgIHR0Q2xhc3MgJiYgY2xhc3NOYW1lLnB1c2godHRDbGFzcyk7XG4gICAgICAgIC8vIHRkXG4gICAgICAgIGNvbnN0IHRkQ2xhc3MgPSB7XG4gICAgICAgICAgICBcIk5PTkVcIjogXCJcIixcbiAgICAgICAgICAgIFwiVU5ERVJMSU5FXCI6ICd0ZHUnLFxuICAgICAgICAgICAgXCJTVFJJS0VUSFJPVUdIXCI6ICd0ZGwnXG4gICAgICAgIH1bbm9kZS50ZXh0RGVjb3JhdGlvbl07XG4gICAgICAgIHRkQ2xhc3MgJiYgY2xhc3NOYW1lLnB1c2godGRDbGFzcyk7XG4gICAgICAgIGNvbnN0IHN0ckNsYXNzTmFtZSA9IGNsYXNzTmFtZS5qb2luKCcgJyk7XG4gICAgICAgIGNvbnN0IGlzU3Ryb25nID0gWydmdzUwMCcsICdmdzYwMCcsICdmdzcwMCcsICdmdzgwMCcsICdmdzkwMCddLmZpbmRJbmRleCgoaXRlbSkgPT4gc3RyQ2xhc3NOYW1lLmluZGV4T2YoaXRlbSkgPiAtMSkgPiAtMTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogc3RyQ2xhc3NOYW1lLFxuICAgICAgICAgICAgdGFnTmFtZTogaXNTdHJvbmcgPyAnc3Ryb25nJyA6ICdzcGFuJ1xuICAgICAgICB9O1xuICAgIH0sXG4gICAgZ2V0VGV4dENoaWxkcmVuOiAobm9kZSkgPT4ge1xuICAgICAgICBjb25zdCB7IGNoYXJhY3RlcnMgPSAnJyB9ID0gbm9kZTtcbiAgICAgICAgY29uc3QgbGVnYWxQID0gY2hhcmFjdGVycy5zcGxpdCgnXFxuJykuZmlsdGVyKGl0ZW0gPT4gaXRlbS50cmltKCkpO1xuICAgICAgICAvLyDmnInlm57ovabooajnpLrlpJrmrrXokL1cbiAgICAgICAgaWYgKGxlZ2FsUC5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICBjb25zdCBtYkNsYXNzID0gbm9kZS5wYXJhZ3JhcGhTcGFjaW5nID4gMCA/IFNBQ1NTLmFkZCgnbWInLCBub2RlLnBhcmFncmFwaFNwYWNpbmcpIDogJyc7XG4gICAgICAgICAgICBjb25zdCBwcyA9IGxlZ2FsUC5tYXAoKGl0ZW0sIGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlzTGFzdCA9IGtleSA9PT0gbGVnYWxQLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgdGFnTmFtZTogJ3AnLFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IGlzTGFzdCA/ICcnIDogbWJDbGFzcyxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtpdGVtXVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBwcztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW2NoYXJhY3RlcnNdO1xuICAgIH0sXG4gICAgLy8g5paH5pys57uE5Lu2XG4gICAgZ2V0SW5mbzogKG5vZGUpID0+IHtcbiAgICAgICAgaWYgKG5vZGUudHlwZSAhPT0gJ1RFWFQnKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGNvbnN0IGdldEluZm8gPSBDT05GSUcuZ2V0SW5mb0J5SWQobm9kZS50ZXh0U3R5bGVJZCkgfHwge307XG4gICAgICAgIGNvbnN0IGFjc3NJbmZvID0gVEVYVC5nZXRBQ1NTU0luZm8obm9kZSk7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogZ2V0SW5mby5jbGFzc05hbWUgfHwgYWNzc0luZm8uY2xhc3NOYW1lIHx8ICcnLFxuICAgICAgICAgICAgdGFnTmFtZTogZ2V0SW5mby50YWdOYW1lIHx8IGFjc3NJbmZvLnRhZ05hbWUgfHwgJycsXG4gICAgICAgICAgICBpZ25vcmVDbGFzc05hbWU6IGdldEluZm8uaWdub3JlQ2xhc3NOYW1lIHx8ICcnXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSxcbn07XG5leHBvcnQgZGVmYXVsdCBURVhUO1xuIiwiaW1wb3J0IE5PREUgZnJvbSBcIi4vXy9OT0RFXCI7XG5pbXBvcnQgQ09ORklHIGZyb20gXCIuL18vQ09ORklHXCI7XG5pbXBvcnQgU0FDU1MgZnJvbSBcIi4vXy9TQUNTU1wiO1xuaW1wb3J0IERPTSBmcm9tIFwiLi9fL3JlbmRlci9ET01cIjtcbmNvbnN0IEFQSSA9IHtcbiAgICB0YWJJbmRleDogMCxcbiAgICBnZXRTZWxlY3Rpb246ICgpID0+IHtcbiAgICAgICAgY29uc3Qgc2VsZWN0aW9uID0gZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhzZWxlY3Rpb24pO1xuICAgICAgICBpZiAoIXNlbGVjdGlvbi5sZW5ndGgpIHtcbiAgICAgICAgICAgIC8vIOayoeaciemAieaLqeS7u+S9leWFg+e0oFxuICAgICAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2UoeyBub1NlbGVjdGlvbjogdHJ1ZSB9KTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKHNlbGVjdGlvblswXSk7XG4gICAgICAgIHJldHVybiBzZWxlY3Rpb247XG4gICAgfSxcbiAgICBvblRhYkNoYW5nZTogKGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGJlZm9yZUluZGV4ID0gQVBJLnRhYkluZGV4O1xuICAgICAgICBBUEkudGFiSW5kZXggPSBpbmRleDtcbiAgICAgICAgLy8g5aaC5p6c5Y+q5piv5ZyoIEhUTUwg5ZKMIEFDU1Mg5LmL5YmN5YiH5o2iXG4gICAgICAgIGlmICgoYmVmb3JlSW5kZXggPT09IDAgfHwgYmVmb3JlSW5kZXggPT09IDEpICYmIChpbmRleCA9PT0gMCB8fCBpbmRleCA9PT0gMSkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBhY3Rpb25NYXAgPSBbJ3J1bkhvbWUnLCAncnVuSG9tZScsICdydW5Ub2tlbicsICdydW5Db25maWcnXTtcbiAgICAgICAgY29uc3QgYWN0aW9uID0gYWN0aW9uTWFwW2luZGV4XTtcbiAgICAgICAgYWN0aW9uICYmIEFQSVthY3Rpb25dKCk7XG4gICAgfSxcbiAgICBvblNlbGVjdGlvbkNoYW5nZTogKCkgPT4ge1xuICAgICAgICBjb25zdCBhY3Rpb25NYXAgPSBbJ3J1bkhvbWUnLCAncnVuSG9tZScsICdydW5Ub2tlbicsICcnXTtcbiAgICAgICAgY29uc3QgYWN0aW9uID0gYWN0aW9uTWFwW0FQSS50YWJJbmRleF07XG4gICAgICAgIGlmICghYWN0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgQVBJW2FjdGlvbl0oKTtcbiAgICB9LFxuICAgIHJ1bkhvbWU6ICgpID0+IHtcbiAgICAgICAgY29uc3Qgc2VsZWN0aW9uID0gQVBJLmdldFNlbGVjdGlvbigpO1xuICAgICAgICBpZiAoIXNlbGVjdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIFNBQ1NTLmluaXQoKTtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBjb25zdCBJbmZvID0gTk9ERS5nZXROb2Rlc0luZm8oc2VsZWN0aW9uKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coSW5mbyk7XG4gICAgICAgIGNvbnN0IGlzSlNYID0gQ09ORklHLmlzSlNYKCk7XG4gICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgIGdldEhUTUw6IERPTS5yZW5kZXIoSW5mbywgaXNKU1gpLFxuICAgICAgICAgICAgZ2V0Q1NTOiBTQUNTUy5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIGlzSlNYLFxuICAgICAgICAgICAgbm9TZWxlY3Rpb246IGZhbHNlXG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgcnVuQ29uZmlnOiAoKSA9PiB7XG4gICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgIGdldENvbmZpZzogQ09ORklHLmdldEFsbCgpXG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgcnVuVG9rZW46ICgpID0+IHtcbiAgICAgICAgY29uc3QgW3NlbGVjdGlvbl0gPSBBUEkuZ2V0U2VsZWN0aW9uKCkgfHwgW107XG4gICAgICAgIENPTkZJRy5nZXRTZWxlY3Rpb25Ub2tlbnMoc2VsZWN0aW9uKTtcbiAgICB9LFxuICAgIG9ubWVzc2FnZTogKG1zZyA9IHt9KSA9PiB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgY29uc3QgeyB0eXBlID0gbnVsbCwgdmFsdWUgPSBudWxsIH0gPSBtc2c7XG4gICAgICAgIGlmICh0eXBlID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgW25hbWUsIGFjdGlvbl0gPSB0eXBlLnNwbGl0KCcuJyk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdBUEkgb25tZXNzYWdlJywgbmFtZSwgYWN0aW9uLCB2YWx1ZSk7XG4gICAgICAgIGlmIChuYW1lID09PSAnQVBJJyAmJiAoYWN0aW9uIGluIEFQSSkpIHtcbiAgICAgICAgICAgIEFQSVthY3Rpb25dKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChuYW1lID09PSAnQ09ORklHJyAmJiAoYWN0aW9uIGluIENPTkZJRykpIHtcbiAgICAgICAgICAgIENPTkZJR1thY3Rpb25dKHZhbHVlKTtcbiAgICAgICAgICAgIGlmIChhY3Rpb24gPT09ICdjaGFuZ2VKU1gnKSB7XG4gICAgICAgICAgICAgICAgQVBJLnJ1bkhvbWUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGFjdGlvbiA9PT0gJ2FwcGVuZFRva2VuJykge1xuICAgICAgICAgICAgICAgIEFQSS5ydW5Ub2tlbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgQVBJLnJ1bkNvbmZpZygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufTtcbi8vIFRoaXMgcGx1Z2luIHdpbGwgb3BlbiBhIHdpbmRvdyB0byBwcm9tcHQgdGhlIHVzZXIgdG8gZW50ZXIgYSBudW1iZXIsIGFuZFxuLy8gaXQgd2lsbCB0aGVuIGNyZWF0ZSB0aGF0IG1hbnkgcmVjdGFuZ2xlcyBvbiB0aGUgc2NyZWVuLlxuLy8gVGhpcyBmaWxlIGhvbGRzIHRoZSBtYWluIGNvZGUgZm9yIHRoZSBwbHVnaW5zLiBJdCBoYXMgYWNjZXNzIHRvIHRoZSAqZG9jdW1lbnQqLlxuLy8gWW91IGNhbiBhY2Nlc3MgYnJvd3NlciBBUElzIGluIHRoZSA8c2NyaXB0PiB0YWcgaW5zaWRlIFwidWkuaHRtbFwiIHdoaWNoIGhhcyBhXG4vLyBmdWxsIGJyb3dzZXIgZW52aXJvbm1lbnQgKHNlZSBkb2N1bWVudGF0aW9uKS5cbkNPTkZJRy5pbml0KCkudGhlbigoKSA9PiB7XG4gICAgLy8gVGhpcyBzaG93cyB0aGUgSFRNTCBwYWdlIGluIFwidWkuaHRtbFwiLlxuICAgIGZpZ21hLnNob3dVSShfX2h0bWxfXywgeyB3aWR0aDogNDAwLCBoZWlnaHQ6IDYwMCB9KTtcbiAgICBBUEkucnVuSG9tZSgpO1xuICAgIGZpZ21hLm9uKFwic2VsZWN0aW9uY2hhbmdlXCIsICgpID0+IHtcbiAgICAgICAgQVBJLm9uU2VsZWN0aW9uQ2hhbmdlKCk7XG4gICAgfSk7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGZpZ21hLnVpLm9ubWVzc2FnZSA9IEFQSS5vbm1lc3NhZ2U7XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=