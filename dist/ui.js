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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/ui/index.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/clipboard-copy/index.js":
/*!**********************************************!*\
  !*** ./node_modules/clipboard-copy/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*! clipboard-copy. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
/* global DOMException */

module.exports = clipboardCopy

function makeError () {
  return new DOMException('The request is not allowed', 'NotAllowedError')
}

async function copyClipboardApi (text) {
  // Use the Async Clipboard API when available. Requires a secure browsing
  // context (i.e. HTTPS)
  if (!navigator.clipboard) {
    throw makeError()
  }
  return navigator.clipboard.writeText(text)
}

async function copyExecCommand (text) {
  // Put the text to copy into a <span>
  const span = document.createElement('span')
  span.textContent = text

  // Preserve consecutive spaces and newlines
  span.style.whiteSpace = 'pre'
  span.style.webkitUserSelect = 'auto'
  span.style.userSelect = 'all'

  // Add the <span> to the page
  document.body.appendChild(span)

  // Make a selection object representing the range of text selected by the user
  const selection = window.getSelection()
  const range = window.document.createRange()
  selection.removeAllRanges()
  range.selectNode(span)
  selection.addRange(range)

  // Copy text to the clipboard
  let success = false
  try {
    success = window.document.execCommand('copy')
  } finally {
    // Cleanup
    selection.removeAllRanges()
    window.document.body.removeChild(span)
  }

  if (!success) throw makeError()
}

async function clipboardCopy (text) {
  try {
    await copyClipboardApi(text)
  } catch (err) {
    // ...Otherwise, use document.execCommand() fallback
    try {
      await copyExecCommand(text)
    } catch (err2) {
      throw (err2 || err || makeError())
    }
  }
}


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/highlight.js/styles/atom-one-dark.css":
/*!**************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/highlight.js/styles/atom-one-dark.css ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*\n\nAtom One Dark by Daniel Gamage\nOriginal One Dark Syntax theme from https://github.com/atom/one-dark-syntax\n\nbase:    #282c34\nmono-1:  #abb2bf\nmono-2:  #818896\nmono-3:  #5c6370\nhue-1:   #56b6c2\nhue-2:   #61aeee\nhue-3:   #c678dd\nhue-4:   #98c379\nhue-5:   #e06c75\nhue-5-2: #be5046\nhue-6:   #d19a66\nhue-6-2: #e6c07b\n\n*/\n\n.hljs {\n  display: block;\n  overflow-x: auto;\n  padding: 0.5em;\n  color: #abb2bf;\n  background: #282c34;\n}\n\n.hljs-comment,\n.hljs-quote {\n  color: #5c6370;\n  font-style: italic;\n}\n\n.hljs-doctag,\n.hljs-keyword,\n.hljs-formula {\n  color: #c678dd;\n}\n\n.hljs-section,\n.hljs-name,\n.hljs-selector-tag,\n.hljs-deletion,\n.hljs-subst {\n  color: #e06c75;\n}\n\n.hljs-literal {\n  color: #56b6c2;\n}\n\n.hljs-string,\n.hljs-regexp,\n.hljs-addition,\n.hljs-attribute,\n.hljs-meta-string {\n  color: #98c379;\n}\n\n.hljs-built_in,\n.hljs-class .hljs-title {\n  color: #e6c07b;\n}\n\n.hljs-attr,\n.hljs-variable,\n.hljs-template-variable,\n.hljs-type,\n.hljs-selector-class,\n.hljs-selector-attr,\n.hljs-selector-pseudo,\n.hljs-number {\n  color: #d19a66;\n}\n\n.hljs-symbol,\n.hljs-bullet,\n.hljs-link,\n.hljs-meta,\n.hljs-selector-id,\n.hljs-title {\n  color: #61aeee;\n}\n\n.hljs-emphasis {\n  font-style: italic;\n}\n\n.hljs-strong {\n  font-weight: bold;\n}\n\n.hljs-link {\n  text-decoration: underline;\n}\n", "",{"version":3,"sources":["webpack://./node_modules/highlight.js/styles/atom-one-dark.css"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;;CAkBC;;AAED;EACE,cAAc;EACd,gBAAgB;EAChB,cAAc;EACd,cAAc;EACd,mBAAmB;AACrB;;AAEA;;EAEE,cAAc;EACd,kBAAkB;AACpB;;AAEA;;;EAGE,cAAc;AAChB;;AAEA;;;;;EAKE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;;;;;EAKE,cAAc;AAChB;;AAEA;;EAEE,cAAc;AAChB;;AAEA;;;;;;;;EAQE,cAAc;AAChB;;AAEA;;;;;;EAME,cAAc;AAChB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,0BAA0B;AAC5B","sourcesContent":["/*\n\nAtom One Dark by Daniel Gamage\nOriginal One Dark Syntax theme from https://github.com/atom/one-dark-syntax\n\nbase:    #282c34\nmono-1:  #abb2bf\nmono-2:  #818896\nmono-3:  #5c6370\nhue-1:   #56b6c2\nhue-2:   #61aeee\nhue-3:   #c678dd\nhue-4:   #98c379\nhue-5:   #e06c75\nhue-5-2: #be5046\nhue-6:   #d19a66\nhue-6-2: #e6c07b\n\n*/\n\n.hljs {\n  display: block;\n  overflow-x: auto;\n  padding: 0.5em;\n  color: #abb2bf;\n  background: #282c34;\n}\n\n.hljs-comment,\n.hljs-quote {\n  color: #5c6370;\n  font-style: italic;\n}\n\n.hljs-doctag,\n.hljs-keyword,\n.hljs-formula {\n  color: #c678dd;\n}\n\n.hljs-section,\n.hljs-name,\n.hljs-selector-tag,\n.hljs-deletion,\n.hljs-subst {\n  color: #e06c75;\n}\n\n.hljs-literal {\n  color: #56b6c2;\n}\n\n.hljs-string,\n.hljs-regexp,\n.hljs-addition,\n.hljs-attribute,\n.hljs-meta-string {\n  color: #98c379;\n}\n\n.hljs-built_in,\n.hljs-class .hljs-title {\n  color: #e6c07b;\n}\n\n.hljs-attr,\n.hljs-variable,\n.hljs-template-variable,\n.hljs-type,\n.hljs-selector-class,\n.hljs-selector-attr,\n.hljs-selector-pseudo,\n.hljs-number {\n  color: #d19a66;\n}\n\n.hljs-symbol,\n.hljs-bullet,\n.hljs-link,\n.hljs-meta,\n.hljs-selector-id,\n.hljs-title {\n  color: #61aeee;\n}\n\n.hljs-emphasis {\n  font-style: italic;\n}\n\n.hljs-strong {\n  font-weight: bold;\n}\n\n.hljs-link {\n  text-decoration: underline;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/ui/component/Button/index.less":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/ui/component/Button/index.less ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".btn {\n  height: 1.5rem;\n  padding: 0.25rem 0.5rem;\n  font-size: 0.75rem;\n  line-height: 1rem;\n  border: none;\n  box-shadow: inset 0 0 0 1px #000;\n  background-color: transparent;\n  border-radius: 3px;\n  display: inline-block;\n  text-align: center;\n  white-space: nowrap;\n  box-sizing: border-box;\n  cursor: pointer;\n  vertical-align: middle;\n}\n.btn:hover {\n  color: #4c5fe2;\n}\n.btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn._block {\n  display: block;\n  width: 100%;\n}\n.btn._square {\n  padding: 0.375rem;\n}\n", "",{"version":3,"sources":["webpack://./src/ui/component/Button/index.less"],"names":[],"mappings":"AACA;EACE,cAAA;EACA,uBAAA;EACA,kBAAA;EACA,iBAAA;EACA,YAAA;EACA,gCAAA;EACA,6BAAA;EACA,kBAAA;EACA,qBAAA;EACA,kBAAA;EACA,mBAAA;EACA,sBAAA;EACA,eAAA;EACA,sBAAA;AAAF;AAGA;EACE,cAAA;AADF;AAIA;EACE,YAAA;EACA,mBAAA;AAFF;AAKA;EACE,cAAA;EACA,WAAA;AAHF;AAMA;EACE,iBAAA;AAJF","sourcesContent":["\n.btn {\n  height: 24/16*1rem;\n  padding: 4/16*1rem 8/16*1rem;\n  font-size: 12/16*1rem;\n  line-height: 1rem;\n  border:none;\n  box-shadow: inset 0 0 0 1px #000;\n  background-color: transparent;\n  border-radius: 3px;\n  display: inline-block;\n  text-align: center;\n  white-space: nowrap;\n  box-sizing: border-box;\n  cursor: pointer;\n  vertical-align: middle;\n}\n\n.btn:hover {\n  color: #4c5fe2;\n}\n\n.btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\n.btn._block {\n  display: block;\n  width: 100%;\n}\n\n.btn._square {\n  padding: 6/16*1rem;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/ui/component/Input/index.less":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/ui/component/Input/index.less ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".input {\n  height: 1.5rem;\n  padding: 0.25rem 0.5rem;\n  font-size: 0.75rem;\n  line-height: 1rem;\n  border-radius: 3px;\n  background-color: #f5f5f5;\n  display: inline-block;\n  border: none 0;\n}\n.input._block {\n  display: block;\n}\n", "",{"version":3,"sources":["webpack://./src/ui/component/Input/index.less"],"names":[],"mappings":"AACA;EACE,cAAA;EACA,uBAAA;EACA,kBAAA;EACA,iBAAA;EACA,kBAAA;EACA,yBAAA;EACA,qBAAA;EACA,cAAA;AAAF;AAGA;EACE,cAAA;AADF","sourcesContent":["\n.input {\n  height: 24/16*1rem;\n  padding: 4/16*1rem 8/16*1rem;\n  font-size: 12/16*1rem;\n  line-height: 1rem;\n  border-radius: 3px;\n  background-color: #f5f5f5;\n  display: inline-block;\n  border:none 0;\n}\n\n.input._block {\n  display: block;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/ui/component/Textarea/index.less":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/ui/component/Textarea/index.less ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".textarea {\n  background-color: #f5f5f5;\n  border: none 0;\n  resize: vertical;\n}\n.textarea:focus,\n.textarea:hover {\n  border-color: #333;\n}\n", "",{"version":3,"sources":["webpack://./src/ui/component/Textarea/index.less"],"names":[],"mappings":"AACA;EACE,yBAAA;EACA,cAAA;EACA,gBAAA;AAAF;AAGA;;EACE,kBAAA;AAAF","sourcesContent":["\n.textarea {\n  background-color: #f5f5f5;\n  border: none 0;\n  resize: vertical;\n}\n\n.textarea:focus, .textarea:hover {\n  border-color: #333;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/ui/index.less":
/*!********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/ui/index.less ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@charset \"utf-8\";\n.aic {\n  align-items: center;\n}\n.aife {\n  align-items: flex-end;\n}\n.aifs {\n  align-items: flex-start;\n}\n.b0 {\n  bottom: 0;\n}\n.bct {\n  background-color: transparent;\n}\n.bn {\n  border: none;\n}\n.br0 {\n  border-radius: 0;\n}\n.br100\\% {\n  border-radius: 100%;\n}\n.bsbb {\n  box-sizing: border-box;\n}\n.bc_fff {\n  background-color: #fff;\n}\n.bc_000 {\n  background-color: #000;\n}\n.c_000 {\n  color: #000;\n}\n.c_fff {\n  color: #fff;\n}\n.cb {\n  clear: both;\n}\n.cp {\n  cursor: pointer;\n}\n.db {\n  display: block;\n}\n.df {\n  display: flex;\n}\n.di {\n  display: inline;\n}\n.dib {\n  display: inline-block;\n}\n.dif {\n  display: inline-flex;\n}\n.dn {\n  display: none;\n}\n.dt {\n  display: table;\n}\n.dtc {\n  display: table-cell;\n}\n.f1 {\n  flex: 1;\n  min-width: 0;\n}\n.fa {\n  flex: auto;\n}\n.fdc {\n  flex-direction: column;\n}\n.fdr {\n  flex-direction: row;\n}\n.fi {\n  font: inherit;\n}\n.fl {\n  float: left;\n}\n.fr {\n  float: right;\n}\n.fs0 {\n  font-size: 0;\n}\n.fs1 {\n  flex-shrink: 1;\n}\n.fsi {\n  font-style: italic;\n}\n.fsn {\n  font-style: normal;\n}\n.fvsc {\n  font-variant: small-caps;\n  text-transform: lowercase;\n}\n.fw100 {\n  font-weight: 100;\n}\n.fw200 {\n  font-weight: 200;\n}\n.fw300 {\n  font-weight: 300;\n}\n.fw400 {\n  font-weight: 400;\n}\n.fw500 {\n  font-weight: 500;\n}\n.fw600 {\n  font-weight: 600;\n}\n.fw700 {\n  font-weight: 700;\n}\n.fw800 {\n  font-weight: 800;\n}\n.fw900 {\n  font-weight: 900;\n}\n.fwn {\n  font-weight: 400;\n}\n.fww {\n  flex-wrap: wrap;\n}\n.h100\\% {\n  height: 100%;\n}\n.jcc {\n  justify-content: center;\n}\n.jcfe {\n  justify-content: flex-end;\n}\n.jcsa {\n  justify-content: space-around;\n}\n.jcsb {\n  justify-content: space-between;\n}\n.l0 {\n  left: 0;\n}\n.l100\\% {\n  left: 100%;\n}\n.l50\\% {\n  left: 50%;\n}\n.lh1 {\n  line-height: 1;\n}\n.lh1\\.2 {\n  line-height: 1.2;\n}\n.lh1\\.5 {\n  line-height: 1.5;\n}\n.lh1\\.8 {\n  line-height: 1.8;\n}\n.lsn {\n  list-style: none;\n}\n.m0 {\n  margin: 0;\n}\n.mla {\n  margin-left: auto;\n}\n.mra {\n  margin-right: auto;\n}\n.mta {\n  margin-top: auto;\n}\n.mba {\n  margin-bottom: auto;\n}\n.o0 {\n  opacity: 0;\n}\n.oa {\n  overflow: auto;\n  -webkit-overflow-scrolling: touch;\n}\n.oh {\n  overflow: hidden;\n}\n.p0 {\n  padding: 0;\n}\n.pa {\n  position: absolute;\n}\n.pen {\n  pointer-events: none;\n}\n.pf {\n  position: fixed;\n}\n.pr {\n  position: relative;\n}\n.pt100\\% {\n  padding-top: 100%;\n}\n.r0 {\n  right: 0;\n}\n.r100\\% {\n  right: 100%;\n}\n.t0 {\n  top: 0;\n}\n.t100\\% {\n  top: 100%;\n}\n.t50\\% {\n  top: 50%;\n}\n.mw100\\% {\n  max-width: 100%;\n}\n.tac {\n  text-align: center;\n}\n.taj {\n  text-align: justify;\n}\n.tal {\n  text-align: left;\n}\n.tar {\n  text-align: right;\n}\n.tdn {\n  text-decoration: none;\n}\n.tdu {\n  text-decoration: underline;\n}\n.tlf {\n  table-layout: fixed;\n}\n.ttc {\n  text-transform: capitalize;\n}\n.ttl {\n  text-transform: lowercase;\n}\n.ttn {\n  text-transform: none;\n}\n.ttu {\n  text-transform: uppercase;\n}\n.usn {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.vam {\n  vertical-align: middle;\n}\n.vat {\n  vertical-align: top;\n}\n.vh {\n  visibility: hidden;\n}\n.w100\\% {\n  width: 100%;\n}\n.wan {\n  -webkit-appearance: none;\n}\n.wsn {\n  white-space: nowrap;\n}\n.wwbw {\n  word-wrap: break-word;\n  word-break: break-all;\n}\n.zi1 {\n  z-index: 1;\n}\n/**\n * #SACSS(font-size; fs; 12, 16; 1px);\n * @prop: 属性名\n * @name: 缩写名\n * @list: 值列表\n * @unit: 单位换算表达式, 默认为1px, 想要 rem 填写 1/16*1rem\n */\n/**\n * #SACSS(font-weight; fw; 400, 700);\n * @prop: 属性名\n * @name: 缩写名\n * @list: 值列表\n */\n/* 清除浮动 */\n/* 文字超出一行点点点 */\n/* 多行文本超出点点点 */\n/* 用表格的方式撑满浮动之后的剩余空间 */\n.mt-1 {\n  margin-top: -0.0625rem;\n}\n.mt4 {\n  margin-top: 0.25rem;\n}\n.mt8 {\n  margin-top: 0.5rem;\n}\n.mt12 {\n  margin-top: 0.75rem;\n}\n.mt16 {\n  margin-top: 1rem;\n}\n.mb-1 {\n  margin-bottom: -0.0625rem;\n}\n.mb4 {\n  margin-bottom: 0.25rem;\n}\n.mb8 {\n  margin-bottom: 0.5rem;\n}\n.mb12 {\n  margin-bottom: 0.75rem;\n}\n.mb16 {\n  margin-bottom: 1rem;\n}\n.mr-1 {\n  margin-right: -0.0625rem;\n}\n.mr4 {\n  margin-right: 0.25rem;\n}\n.mr8 {\n  margin-right: 0.5rem;\n}\n.mr12 {\n  margin-right: 0.75rem;\n}\n.mr16 {\n  margin-right: 1rem;\n}\n.ml-1 {\n  margin-left: -0.0625rem;\n}\n.ml4 {\n  margin-left: 0.25rem;\n}\n.ml8 {\n  margin-left: 0.5rem;\n}\n.ml12 {\n  margin-left: 0.75rem;\n}\n.ml16 {\n  margin-left: 1rem;\n}\n.pt4 {\n  padding-top: 0.25rem;\n}\n.pt8 {\n  padding-top: 0.5rem;\n}\n.pt12 {\n  padding-top: 0.75rem;\n}\n.pt16 {\n  padding-top: 1rem;\n}\n.pt4 {\n  padding-right: 0.25rem;\n}\n.pt8 {\n  padding-right: 0.5rem;\n}\n.pt12 {\n  padding-right: 0.75rem;\n}\n.pt16 {\n  padding-right: 1rem;\n}\n.pb4 {\n  padding-bottom: 0.25rem;\n}\n.pb8 {\n  padding-bottom: 0.5rem;\n}\n.pb12 {\n  padding-bottom: 0.75rem;\n}\n.pb16 {\n  padding-bottom: 1rem;\n}\n.pl4 {\n  padding-left: 0.25rem;\n}\n.pl8 {\n  padding-left: 0.5rem;\n}\n.pl12 {\n  padding-left: 0.75rem;\n}\n.pl16 {\n  padding-left: 1rem;\n}\n.fw600 {\n  font-weight: 600;\n}\n.fw600 {\n  font-weight: 600;\n}\n.fs12 {\n  font-size: 0.75rem;\n}\n.fs14 {\n  font-size: 0.875rem;\n}\n.fs16 {\n  font-size: 1rem;\n}\n.fs20 {\n  font-size: 1.25rem;\n}\n.lh16 {\n  line-height: 1rem;\n}\n.lh20 {\n  line-height: 1.25rem;\n}\n.lh24 {\n  line-height: 1.5rem;\n}\n.br2 {\n  border-radius: 2px;\n}\n.br4 {\n  border-radius: 4px;\n}\n.h24 {\n  height: 1.5rem;\n}\n.c\\:l,\n.c\\:l\\:h:hover {\n  color: #111;\n}\n.c\\:m,\n.c\\:m\\:h:hover {\n  color: #333;\n}\n.c\\:s,\n.c\\:s\\:h:hover {\n  color: #666;\n}\n.c\\:xs,\n.c\\:xs\\:h:hover {\n  color: #999;\n}\n.c\\:primary,\n.c\\:primary\\:h:hover {\n  color: #4c5fe2;\n}\n.td200 {\n  transition-duration: 200ms;\n}\n/* others */\n* {\n  font: inherit;\n  color: inherit;\n  text-decoration: inherit;\n}\nroot {\n  font-size: 16px;\n}\nsvg {\n  width: 1em;\n  height: 1em;\n  fill: currentColor;\n}\nbody,\npre,\nform,\ninput,\np {\n  margin: 0;\n}\nbody {\n  font-family: sans-serif;\n}\nbody,\nhtml {\n  height: 100%;\n  overflow: hidden;\n  background-color: #ffffff;\n}\n.g_wrap {\n  margin-left: 1rem;\n  margin-right: 1rem;\n}\n.g_row {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n.react-page {\n  background-color: red;\n}\n.g_hr {\n  border-bottom: 1px solid #ddd;\n}\n.g_hr_t {\n  border-top: 1px solid #ddd;\n}\n.g_ell {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n/* tips */\n.g_tip[data-title] {\n  text-indent: 0;\n  position: relative;\n  overflow: visible;\n}\n.g_tip[data-title]::before,\n.g_tip[data-title]::after {\n  position: absolute;\n  left: 50%;\n  -ms-pointer-events: none;\n  pointer-events: none;\n  -webkit-transform: translateX(-50%);\n  -ms-transform: translateX(-50%);\n  transform: translateX(-50%);\n  visibility: hidden;\n  z-index: 100;\n}\n.g_tip[data-title]::before {\n  content: attr(data-title);\n  top: -41px;\n  max-width: 90vw;\n  padding: 6px 10px;\n  line-height: 18px;\n  border-radius: 3px;\n  background-color: #373c42;\n  text-align: left;\n  color: #fff;\n  font-size: 12px;\n  font-style: normal;\n  white-space: nowrap;\n}\n.g_tip[data-title]::after {\n  content: '';\n  width: 0;\n  height: 0;\n  overflow: hidden;\n  border: 6px solid transparent;\n  border-top-color: #373c42;\n  top: -12px;\n}\n.g_tip[data-title]:hover::before,\n.g_tip[data-title]:hover::after,\n.g_tip[data-title]:focus::before,\n.g_tip[data-title]:focus::after {\n  -webkit-transition: visibility 0.1s 0.1s;\n  transition: visibility 0.1s 0.1s;\n  visibility: visible;\n}\n.g_tip[data-title]:hover {\n  outline: none;\n}\nselect {\n  font-size: 0.75rem;\n  height: 1.5rem;\n  border-color: #000000;\n  border-radius: 3px;\n}\n", "",{"version":3,"sources":["webpack://./node_modules/sacss/less/SACSS.less","webpack://./node_modules/sacss/index.css","webpack://./src/ui/index.less","webpack://./node_modules/sacss/less/Helpers.less"],"names":[],"mappings":"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HcK,sBAAA;AEsTN;ACpUC;EHcK,mBAAA;AEyTN;ACvUC;EHcK,kBAAA;AE4TN;AC1UC;EHcK,mBAAA;AE+TN;AC7UC;EHcK,gBAAA;AEkUN;AChVC;EHcK,yBAAA;AEqUN;ACnVC;EHcK,sBAAA;AEwUN;ACtVC;EHcK,qBAAA;AE2UN;ACzVC;EHcK,sBAAA;AE8UN;AC5VC;EHcK,mBAAA;AEiVN;AC/VC;EHcK,wBAAA;AEoVN;AClWC;EHcK,qBAAA;AEuVN;ACrWC;EHcK,oBAAA;AE0VN;ACxWC;EHcK,qBAAA;AE6VN;AC3WC;EHcK,kBAAA;AEgWN;AC9WC;EHcK,uBAAA;AEmWN;ACjXC;EHcK,oBAAA;AEsWN;ACpXC;EHcK,mBAAA;AEyWN;ACvXC;EHcK,oBAAA;AE4WN;AC1XC;EHcK,iBAAA;AE+WN;AC7XC;EHcK,oBAAA;AEkXN;AChYC;EHcK,mBAAA;AEqXN;ACnYC;EHcK,oBAAA;AEwXN;ACtYC;EHcK,iBAAA;AE2XN;ACzYC;EHcK,sBAAA;AE8XN;AC5YC;EHcK,qBAAA;AEiYN;AC/YC;EHcK,sBAAA;AEoYN;AClZC;EHcK,mBAAA;AEuYN;ACrZC;EHcK,uBAAA;AE0YN;ACxZC;EHcK,sBAAA;AE6YN;AC3ZC;EHcK,uBAAA;AEgZN;AC9ZC;EHcK,oBAAA;AEmZN;ACjaC;EHcK,qBAAA;AEsZN;ACpaC;EHcK,oBAAA;AEyZN;ACvaC;EHcK,qBAAA;AE4ZN;AC1aC;EHcK,kBAAA;AE+ZN;AC7aC;EHkCK,gBAAA;AE8YN;AChbC;EHkCK,gBAAA;AEiZN;ACnbC;EHcK,kBAAA;AEwaN;ACtbC;EHcK,mBAAA;AE2aN;ACzbC;EHcK,eAAA;AE8aN;AC5bC;EHcK,kBAAA;AEibN;AC/bC;EHcK,iBAAA;AEobN;AClcC;EHcK,oBAAA;AEubN;ACrcC;EHcK,mBAAA;AE0bN;ACxcC;EHcK,kBAAA;AE6bN;AC3cC;EHcK,kBAAA;AEgcN;AAzbA;EAAM,cAAA;AA4bN;AA1bA;;EACE,WAAA;AA6bF;AA1bA;;EACE,WAAA;AA6bF;AA1bA;;EACE,WAAA;AA6bF;AA1bA;;EACE,WAAA;AA6bF;AA1bA;;EACE,cAAA;AA6bF;AA1bA;EACE,0BAAA;AA4bF;AACA,WAAW;AAzbX;EACE,aAAA;EACA,cAAA;EACA,wBAAA;AA2bF;AAxbA;EACE,eAAA;AA0bF;AAvbA;EACE,UAAA;EACA,WAAA;EACA,kBAAA;AAybF;AAtbA;;;;;EACE,SAAA;AA4bF;AAzbA;EACE,uBAAA;AA2bF;AAxbA;;EACE,YAAA;EACA,gBAAA;EACA,yBAAA;AA2bF;AAxbA;EACE,iBAAA;EACA,kBAAA;AA0bF;AAvbA;EACE,kBAAA;EACA,mBAAA;AAybF;AAtbA;EACE,qBAAA;AAwbF;AArbA;EACE,6BAAA;AAubF;AApbA;EACE,0BAAA;AAsbF;AAnbA;EC3FE,mBAAA;EAAqB,gBAAA;EAAkB,uBAAA;ADmhBzC;AACA,SAAS;AApbT;EACE,cAAA;EACA,kBAAA;EACA,iBAAA;AAsbF;AAnbA;;EAEE,kBAAA;EACA,SAAA;EACA,wBAAA;EACA,oBAAA;EACA,mCAAA;EACA,+BAAA;EACA,2BAAA;EACA,kBAAA;EACA,YAAA;AAqbF;AAlbA;EACE,yBAAA;EACA,UAAA;EACA,eAAA;EACA,iBAAA;EACA,iBAAA;EACA,kBAAA;EACA,yBAAA;EACA,gBAAA;EACA,WAAA;EACA,eAAA;EACA,kBAAA;EACA,mBAAA;AAobF;AAjbA;EACE,WAAA;EACA,QAAA;EACA,SAAA;EACA,gBAAA;EACA,6BAAA;EACA,yBAAA;EACA,UAAA;AAmbF;AAhbA;;;;EAIE,wCAAA;EACA,gCAAA;EACA,mBAAA;AAkbF;AA/aA;EACE,aAAA;AAibF;AA9aA;EACE,kBAAA;EACA,cAAA;EACA,qBAAA;EACA,kBAAA;AAgbF","sourcesContent":["@charset \"utf-8\";\n/**\n * #SACSS(font-size; fs; 12, 16; 1px);\n * @prop: 属性名\n * @name: 缩写名\n * @list: 值列表\n * @unit: 单位换算表达式, 默认为1px, 想要 rem 填写 1/16*1rem\n */\n#SACSS(@prop; @name; @list; @unit) when not(@list = false) {\n  @escapeProp: escape(@prop);\n  @escapeName: escape(@name);\n  .loop(@i) when (@i < length(@list) + 1) {\n    @item: extract(@list, @i);\n    .@{escapeName}@{item} {\n      @{escapeProp}: @item * @unit;\n    }\n    .loop(@i+1);\n  }\n\n  .loop(1);\n}\n\n/**\n * #SACSS(font-weight; fw; 400, 700);\n * @prop: 属性名\n * @name: 缩写名\n * @list: 值列表\n */\n#SACSS(@prop; @name; @list;) when not(@list =false) {\n  @escapeProp: escape(@prop);\n  @escapeName: escape(@name);\n  .loop(@i) when (@i < length(@list) + 1) {\n    @item: extract(@list, @i);\n    .@{escapeName}@{item} {\n      @{escapeProp}: @item;\n    }\n    .loop(@i+1);\n  }\n  .loop(1);\n}\n",".aic{align-items:center}\n.aife{align-items:flex-end}\n.aifs{align-items:flex-start}\n.b0{bottom:0}\n.bct{background-color:transparent}\n.bn{border:none}\n.br0{border-radius:0}\n.br100\\%{border-radius:100%}\n.bsbb{box-sizing:border-box}\n.bc_fff{background-color:#fff}\n.bc_000{background-color:#000}\n.c_000{color:#000}\n.c_fff{color:#fff}\n.cb{clear:both}\n.cp{cursor:pointer}\n.db{display:block}\n.df{display:flex}\n.di{display:inline}\n.dib{display:inline-block}\n.dif{display:inline-flex}\n.dn{display:none}\n.dt{display:table}\n.dtc{display:table-cell}\n.f1{flex:1;min-width:0}\n.fa{flex:auto}\n.fdc{flex-direction:column}\n.fdr{flex-direction:row}\n.fi{font:inherit}\n.fl{float:left}\n.fr{float:right}\n.fs0{font-size:0}\n.fs1{flex-shrink:1}\n.fsi{font-style:italic}\n.fsn{font-style:normal}\n.fvsc{font-variant:small-caps;text-transform:lowercase}\n.fw100{font-weight:100}\n.fw200{font-weight:200}\n.fw300{font-weight:300}\n.fw400{font-weight:400}\n.fw500{font-weight:500}\n.fw600{font-weight:600}\n.fw700{font-weight:700}\n.fw800{font-weight:800}\n.fw900{font-weight:900}\n.fwn{font-weight:400}\n.fww{flex-wrap:wrap}\n.h100\\%{height:100%}\n.jcc{justify-content:center}\n.jcfe{justify-content:flex-end}\n.jcsa{justify-content:space-around}\n.jcsb{justify-content:space-between}\n.l0{left:0}\n.l100\\%{left:100%}\n.l50\\%{left:50%}\n.lh1{line-height:1}\n.lh1\\.2{line-height:1.2}\n.lh1\\.5{line-height:1.5}\n.lh1\\.8{line-height:1.8}\n.lsn{list-style:none}\n.m0{margin:0}\n.mla{margin-left:auto}\n.mra{margin-right:auto}\n.mta{margin-top:auto}\n.mba{margin-bottom:auto}\n.o0{opacity:0}\n.oa{overflow:auto;-webkit-overflow-scrolling:touch}\n.oh{overflow:hidden}\n.p0{padding:0}\n.pa{position:absolute}\n.pen{pointer-events:none}\n.pf{position:fixed}\n.pr{position:relative}\n.pt100\\%{padding-top:100%}\n.r0{right:0}\n.r100\\%{right:100%}\n.t0{top:0}\n.t100\\%{top:100%}\n.t50\\%{top:50%}\n.mw100\\%{max-width:100%}\n.tac{text-align:center}\n.taj{text-align:justify}\n.tal{text-align:left}\n.tar{text-align:right}\n.tdn{text-decoration:none}\n.tdu{text-decoration:underline}\n.tlf{table-layout:fixed}\n.ttc{text-transform:capitalize}\n.ttl{text-transform:lowercase}\n.ttn{text-transform:none}\n.ttu{text-transform:uppercase}\n.usn{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}\n.vam{vertical-align:middle}\n.vat{vertical-align:top}\n.vh{visibility:hidden}\n.w100\\%{width:100%}\n.wan{-webkit-appearance:none}\n.wsn{white-space:nowrap}\n.wwbw{word-wrap:break-word;word-break:break-all}\n.zi1{z-index:1}","@import '~sacss';\n@import '~sacss/less/SACSS.less';\n@import '~sacss/less/Helpers.less';\n\n\n#SACSS(margin-top; mt; -1, 4, 8, 12, 16; 1/16rem);\n#SACSS(margin-bottom; mb; -1, 4, 8, 12, 16; 1/16rem);\n#SACSS(margin-right; mr; -1, 4, 8, 12, 16; 1/16rem);\n#SACSS(margin-left; ml; -1, 4, 8, 12, 16; 1/16rem);\n\n#SACSS(padding-top; pt; 4, 8, 12, 16; 1/16rem);\n#SACSS(padding-right; pt; 4, 8, 12, 16; 1/16rem);\n#SACSS(padding-bottom; pb; 4, 8, 12, 16; 1/16rem);\n#SACSS(padding-left; pl; 4, 8, 12, 16; 1/16rem);\n\n#SACSS(font-weight; fw; 600);\n#SACSS(font-weight; fw; 600);\n#SACSS(font-size; fs; 12, 14, 16, 20; 1/16rem);\n#SACSS(line-height; lh; 16, 20, 24; 1/16rem);\n#SACSS(border-radius; br; 2, 4; 1px);\n\n.h24{ height: 1.5rem; }\n\n.c\\:l, .c\\:l\\:h:hover {\n  color: #111;\n}\n\n.c\\:m, .c\\:m\\:h:hover {\n  color: #333;\n}\n\n.c\\:s, .c\\:s\\:h:hover {\n  color: #666;\n}\n\n.c\\:xs, .c\\:xs\\:h:hover {\n  color: #999;\n}\n\n.c\\:primary, .c\\:primary\\:h:hover {\n  color: #4c5fe2;\n}\n\n.td200 {\n  transition-duration: 200ms;\n}\n\n/* others */\n* {\n  font: inherit;\n  color: inherit;\n  text-decoration: inherit;\n}\n\nroot {\n  font-size: 16px;\n}\n\nsvg {\n  width: 1em;\n  height: 1em;\n  fill: currentColor;\n}\n\nbody, pre, form, input, p {\n  margin: 0;\n}\n\nbody {\n  font-family: sans-serif;\n}\n\nbody, html {\n  height: 100%;\n  overflow: hidden;\n  background-color: #ffffff;\n}\n\n.g_wrap {\n  margin-left: 1rem;\n  margin-right: 1rem;\n}\n\n.g_row {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n\n.react-page {\n  background-color: red;\n}\n\n.g_hr {\n  border-bottom: 1px solid #ddd;\n}\n\n.g_hr_t {\n  border-top: 1px solid #ddd;\n}\n\n.g_ell {\n  #Ellipsis();\n}\n\n/* tips */\n.g_tip[data-title] {\n  text-indent: 0;\n  position: relative;\n  overflow: visible;\n}\n\n.g_tip[data-title]::before,\n.g_tip[data-title]::after {\n  position: absolute;\n  left: 50%;\n  -ms-pointer-events: none;\n  pointer-events: none;\n  -webkit-transform: translateX(-50%);\n  -ms-transform: translateX(-50%);\n  transform: translateX(-50%);\n  visibility: hidden;\n  z-index: 100;\n}\n\n.g_tip[data-title]::before {\n  content: attr(data-title);\n  top: -41px;\n  max-width: 90vw;\n  padding: 6px 10px;\n  line-height: 18px;\n  border-radius: 3px;\n  background-color: #373c42;\n  text-align: left;\n  color: #fff;\n  font-size: 12px;\n  font-style: normal;\n  white-space: nowrap;\n}\n\n.g_tip[data-title]::after {\n  content: '';\n  width: 0;\n  height: 0;\n  overflow: hidden;\n  border: 6px solid transparent;\n  border-top-color: #373c42;\n  top: -12px;\n}\n\n.g_tip[data-title]:hover::before,\n.g_tip[data-title]:hover::after,\n.g_tip[data-title]:focus::before,\n.g_tip[data-title]:focus::after {\n  -webkit-transition: visibility .1s .1s;\n  transition: visibility .1s .1s;\n  visibility: visible;\n}\n\n.g_tip[data-title]:hover {\n  outline: none;\n}\n\nselect{\n  font-size: 12/16*1rem;\n  height: 24/16*1rem;\n  border-color: #000000;\n  border-radius: 3px;\n}","/* 清除浮动 */\n#Clearfix(){\n  &:after{\n    display: table; content: ''; clear: both;\n  }\n}\n\n/* 文字超出一行点点点 */\n#Ellipsis(){\n  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;\n}\n\n/* 多行文本超出点点点 */\n#Ellipsis-multiple(){\n  display: -webkit-box; overflow: hidden; word-wrap: break-word; -webkit-box-orient: vertical;\n}\n\n/* 用表格的方式撑满浮动之后的剩余空间 */\n#Cell(){\n  display: table-cell; *display: inline-block; width: 2000px; *width: auto;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/ui/page/Config/index.less":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/ui/page/Config/index.less ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/ui/page/Token/index.less":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/ui/page/Token/index.less ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/highlight.js/lib/core.js":
/*!***********************************************!*\
  !*** ./node_modules/highlight.js/lib/core.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function deepFreeze(obj) {
    if (obj instanceof Map) {
        obj.clear = obj.delete = obj.set = function () {
            throw new Error('map is read-only');
        };
    } else if (obj instanceof Set) {
        obj.add = obj.clear = obj.delete = function () {
            throw new Error('set is read-only');
        };
    }

    // Freeze self
    Object.freeze(obj);

    Object.getOwnPropertyNames(obj).forEach(function (name) {
        var prop = obj[name];

        // Freeze prop if it is an object
        if (typeof prop == 'object' && !Object.isFrozen(prop)) {
            deepFreeze(prop);
        }
    });

    return obj;
}

var deepFreezeEs6 = deepFreeze;
var _default = deepFreeze;
deepFreezeEs6.default = _default;

/** @implements CallbackResponse */
class Response {
  /**
   * @param {CompiledMode} mode
   */
  constructor(mode) {
    // eslint-disable-next-line no-undefined
    if (mode.data === undefined) mode.data = {};

    this.data = mode.data;
    this.isMatchIgnored = false;
  }

  ignoreMatch() {
    this.isMatchIgnored = true;
  }
}

/**
 * @param {string} value
 * @returns {string}
 */
function escapeHTML(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
}

/**
 * performs a shallow merge of multiple objects into one
 *
 * @template T
 * @param {T} original
 * @param {Record<string,any>[]} objects
 * @returns {T} a single new object
 */
function inherit(original, ...objects) {
  /** @type Record<string,any> */
  const result = Object.create(null);

  for (const key in original) {
    result[key] = original[key];
  }
  objects.forEach(function(obj) {
    for (const key in obj) {
      result[key] = obj[key];
    }
  });
  return /** @type {T} */ (result);
}

/**
 * @typedef {object} Renderer
 * @property {(text: string) => void} addText
 * @property {(node: Node) => void} openNode
 * @property {(node: Node) => void} closeNode
 * @property {() => string} value
 */

/** @typedef {{kind?: string, sublanguage?: boolean}} Node */
/** @typedef {{walk: (r: Renderer) => void}} Tree */
/** */

const SPAN_CLOSE = '</span>';

/**
 * Determines if a node needs to be wrapped in <span>
 *
 * @param {Node} node */
const emitsWrappingTags = (node) => {
  return !!node.kind;
};

/** @type {Renderer} */
class HTMLRenderer {
  /**
   * Creates a new HTMLRenderer
   *
   * @param {Tree} parseTree - the parse tree (must support `walk` API)
   * @param {{classPrefix: string}} options
   */
  constructor(parseTree, options) {
    this.buffer = "";
    this.classPrefix = options.classPrefix;
    parseTree.walk(this);
  }

  /**
   * Adds texts to the output stream
   *
   * @param {string} text */
  addText(text) {
    this.buffer += escapeHTML(text);
  }

  /**
   * Adds a node open to the output stream (if needed)
   *
   * @param {Node} node */
  openNode(node) {
    if (!emitsWrappingTags(node)) return;

    let className = node.kind;
    if (!node.sublanguage) {
      className = `${this.classPrefix}${className}`;
    }
    this.span(className);
  }

  /**
   * Adds a node close to the output stream (if needed)
   *
   * @param {Node} node */
  closeNode(node) {
    if (!emitsWrappingTags(node)) return;

    this.buffer += SPAN_CLOSE;
  }

  /**
   * returns the accumulated buffer
  */
  value() {
    return this.buffer;
  }

  // helpers

  /**
   * Builds a span element
   *
   * @param {string} className */
  span(className) {
    this.buffer += `<span class="${className}">`;
  }
}

/** @typedef {{kind?: string, sublanguage?: boolean, children: Node[]} | string} Node */
/** @typedef {{kind?: string, sublanguage?: boolean, children: Node[]} } DataNode */
/**  */

class TokenTree {
  constructor() {
    /** @type DataNode */
    this.rootNode = { children: [] };
    this.stack = [this.rootNode];
  }

  get top() {
    return this.stack[this.stack.length - 1];
  }

  get root() { return this.rootNode; }

  /** @param {Node} node */
  add(node) {
    this.top.children.push(node);
  }

  /** @param {string} kind */
  openNode(kind) {
    /** @type Node */
    const node = { kind, children: [] };
    this.add(node);
    this.stack.push(node);
  }

  closeNode() {
    if (this.stack.length > 1) {
      return this.stack.pop();
    }
    // eslint-disable-next-line no-undefined
    return undefined;
  }

  closeAllNodes() {
    while (this.closeNode());
  }

  toJSON() {
    return JSON.stringify(this.rootNode, null, 4);
  }

  /**
   * @typedef { import("./html_renderer").Renderer } Renderer
   * @param {Renderer} builder
   */
  walk(builder) {
    // this does not
    return this.constructor._walk(builder, this.rootNode);
    // this works
    // return TokenTree._walk(builder, this.rootNode);
  }

  /**
   * @param {Renderer} builder
   * @param {Node} node
   */
  static _walk(builder, node) {
    if (typeof node === "string") {
      builder.addText(node);
    } else if (node.children) {
      builder.openNode(node);
      node.children.forEach((child) => this._walk(builder, child));
      builder.closeNode(node);
    }
    return builder;
  }

  /**
   * @param {Node} node
   */
  static _collapse(node) {
    if (typeof node === "string") return;
    if (!node.children) return;

    if (node.children.every(el => typeof el === "string")) {
      // node.text = node.children.join("");
      // delete node.children;
      node.children = [node.children.join("")];
    } else {
      node.children.forEach((child) => {
        TokenTree._collapse(child);
      });
    }
  }
}

/**
  Currently this is all private API, but this is the minimal API necessary
  that an Emitter must implement to fully support the parser.

  Minimal interface:

  - addKeyword(text, kind)
  - addText(text)
  - addSublanguage(emitter, subLanguageName)
  - finalize()
  - openNode(kind)
  - closeNode()
  - closeAllNodes()
  - toHTML()

*/

/**
 * @implements {Emitter}
 */
class TokenTreeEmitter extends TokenTree {
  /**
   * @param {*} options
   */
  constructor(options) {
    super();
    this.options = options;
  }

  /**
   * @param {string} text
   * @param {string} kind
   */
  addKeyword(text, kind) {
    if (text === "") { return; }

    this.openNode(kind);
    this.addText(text);
    this.closeNode();
  }

  /**
   * @param {string} text
   */
  addText(text) {
    if (text === "") { return; }

    this.add(text);
  }

  /**
   * @param {Emitter & {root: DataNode}} emitter
   * @param {string} name
   */
  addSublanguage(emitter, name) {
    /** @type DataNode */
    const node = emitter.root;
    node.kind = name;
    node.sublanguage = true;
    this.add(node);
  }

  toHTML() {
    const renderer = new HTMLRenderer(this, this.options);
    return renderer.value();
  }

  finalize() {
    return true;
  }
}

/**
 * @param {string} value
 * @returns {RegExp}
 * */
function escape(value) {
  return new RegExp(value.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&'), 'm');
}

/**
 * @param {RegExp | string } re
 * @returns {string}
 */
function source(re) {
  if (!re) return null;
  if (typeof re === "string") return re;

  return re.source;
}

/**
 * @param {...(RegExp | string) } args
 * @returns {string}
 */
function concat(...args) {
  const joined = args.map((x) => source(x)).join("");
  return joined;
}

/**
 * Any of the passed expresssions may match
 *
 * Creates a huge this | this | that | that match
 * @param {(RegExp | string)[] } args
 * @returns {string}
 */
function either(...args) {
  const joined = '(' + args.map((x) => source(x)).join("|") + ")";
  return joined;
}

/**
 * @param {RegExp} re
 * @returns {number}
 */
function countMatchGroups(re) {
  return (new RegExp(re.toString() + '|')).exec('').length - 1;
}

/**
 * Does lexeme start with a regular expression match at the beginning
 * @param {RegExp} re
 * @param {string} lexeme
 */
function startsWith(re, lexeme) {
  const match = re && re.exec(lexeme);
  return match && match.index === 0;
}

// BACKREF_RE matches an open parenthesis or backreference. To avoid
// an incorrect parse, it additionally matches the following:
// - [...] elements, where the meaning of parentheses and escapes change
// - other escape sequences, so we do not misparse escape sequences as
//   interesting elements
// - non-matching or lookahead parentheses, which do not capture. These
//   follow the '(' with a '?'.
const BACKREF_RE = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;

// join logically computes regexps.join(separator), but fixes the
// backreferences so they continue to match.
// it also places each individual regular expression into it's own
// match group, keeping track of the sequencing of those match groups
// is currently an exercise for the caller. :-)
/**
 * @param {(string | RegExp)[]} regexps
 * @param {string} separator
 * @returns {string}
 */
function join(regexps, separator = "|") {
  let numCaptures = 0;

  return regexps.map((regex) => {
    numCaptures += 1;
    const offset = numCaptures;
    let re = source(regex);
    let out = '';

    while (re.length > 0) {
      const match = BACKREF_RE.exec(re);
      if (!match) {
        out += re;
        break;
      }
      out += re.substring(0, match.index);
      re = re.substring(match.index + match[0].length);
      if (match[0][0] === '\\' && match[1]) {
        // Adjust the backreference.
        out += '\\' + String(Number(match[1]) + offset);
      } else {
        out += match[0];
        if (match[0] === '(') {
          numCaptures++;
        }
      }
    }
    return out;
  }).map(re => `(${re})`).join(separator);
}

// Common regexps
const MATCH_NOTHING_RE = /\b\B/;
const IDENT_RE = '[a-zA-Z]\\w*';
const UNDERSCORE_IDENT_RE = '[a-zA-Z_]\\w*';
const NUMBER_RE = '\\b\\d+(\\.\\d+)?';
const C_NUMBER_RE = '(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)'; // 0x..., 0..., decimal, float
const BINARY_NUMBER_RE = '\\b(0b[01]+)'; // 0b...
const RE_STARTERS_RE = '!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~';

/**
* @param { Partial<Mode> & {binary?: string | RegExp} } opts
*/
const SHEBANG = (opts = {}) => {
  const beginShebang = /^#![ ]*\//;
  if (opts.binary) {
    opts.begin = concat(
      beginShebang,
      /.*\b/,
      opts.binary,
      /\b.*/);
  }
  return inherit({
    className: 'meta',
    begin: beginShebang,
    end: /$/,
    relevance: 0,
    /** @type {ModeCallback} */
    "on:begin": (m, resp) => {
      if (m.index !== 0) resp.ignoreMatch();
    }
  }, opts);
};

// Common modes
const BACKSLASH_ESCAPE = {
  begin: '\\\\[\\s\\S]', relevance: 0
};
const APOS_STRING_MODE = {
  className: 'string',
  begin: '\'',
  end: '\'',
  illegal: '\\n',
  contains: [BACKSLASH_ESCAPE]
};
const QUOTE_STRING_MODE = {
  className: 'string',
  begin: '"',
  end: '"',
  illegal: '\\n',
  contains: [BACKSLASH_ESCAPE]
};
const PHRASAL_WORDS_MODE = {
  begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
};
/**
 * Creates a comment mode
 *
 * @param {string | RegExp} begin
 * @param {string | RegExp} end
 * @param {Mode | {}} [modeOptions]
 * @returns {Partial<Mode>}
 */
const COMMENT = function(begin, end, modeOptions = {}) {
  const mode = inherit(
    {
      className: 'comment',
      begin,
      end,
      contains: []
    },
    modeOptions
  );
  mode.contains.push(PHRASAL_WORDS_MODE);
  mode.contains.push({
    className: 'doctag',
    begin: '(?:TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):',
    relevance: 0
  });
  return mode;
};
const C_LINE_COMMENT_MODE = COMMENT('//', '$');
const C_BLOCK_COMMENT_MODE = COMMENT('/\\*', '\\*/');
const HASH_COMMENT_MODE = COMMENT('#', '$');
const NUMBER_MODE = {
  className: 'number',
  begin: NUMBER_RE,
  relevance: 0
};
const C_NUMBER_MODE = {
  className: 'number',
  begin: C_NUMBER_RE,
  relevance: 0
};
const BINARY_NUMBER_MODE = {
  className: 'number',
  begin: BINARY_NUMBER_RE,
  relevance: 0
};
const CSS_NUMBER_MODE = {
  className: 'number',
  begin: NUMBER_RE + '(' +
    '%|em|ex|ch|rem' +
    '|vw|vh|vmin|vmax' +
    '|cm|mm|in|pt|pc|px' +
    '|deg|grad|rad|turn' +
    '|s|ms' +
    '|Hz|kHz' +
    '|dpi|dpcm|dppx' +
    ')?',
  relevance: 0
};
const REGEXP_MODE = {
  // this outer rule makes sure we actually have a WHOLE regex and not simply
  // an expression such as:
  //
  //     3 / something
  //
  // (which will then blow up when regex's `illegal` sees the newline)
  begin: /(?=\/[^/\n]*\/)/,
  contains: [{
    className: 'regexp',
    begin: /\//,
    end: /\/[gimuy]*/,
    illegal: /\n/,
    contains: [
      BACKSLASH_ESCAPE,
      {
        begin: /\[/,
        end: /\]/,
        relevance: 0,
        contains: [BACKSLASH_ESCAPE]
      }
    ]
  }]
};
const TITLE_MODE = {
  className: 'title',
  begin: IDENT_RE,
  relevance: 0
};
const UNDERSCORE_TITLE_MODE = {
  className: 'title',
  begin: UNDERSCORE_IDENT_RE,
  relevance: 0
};
const METHOD_GUARD = {
  // excludes method names from keyword processing
  begin: '\\.\\s*' + UNDERSCORE_IDENT_RE,
  relevance: 0
};

/**
 * Adds end same as begin mechanics to a mode
 *
 * Your mode must include at least a single () match group as that first match
 * group is what is used for comparison
 * @param {Partial<Mode>} mode
 */
const END_SAME_AS_BEGIN = function(mode) {
  return Object.assign(mode,
    {
      /** @type {ModeCallback} */
      'on:begin': (m, resp) => { resp.data._beginMatch = m[1]; },
      /** @type {ModeCallback} */
      'on:end': (m, resp) => { if (resp.data._beginMatch !== m[1]) resp.ignoreMatch(); }
    });
};

var MODES = /*#__PURE__*/Object.freeze({
    __proto__: null,
    MATCH_NOTHING_RE: MATCH_NOTHING_RE,
    IDENT_RE: IDENT_RE,
    UNDERSCORE_IDENT_RE: UNDERSCORE_IDENT_RE,
    NUMBER_RE: NUMBER_RE,
    C_NUMBER_RE: C_NUMBER_RE,
    BINARY_NUMBER_RE: BINARY_NUMBER_RE,
    RE_STARTERS_RE: RE_STARTERS_RE,
    SHEBANG: SHEBANG,
    BACKSLASH_ESCAPE: BACKSLASH_ESCAPE,
    APOS_STRING_MODE: APOS_STRING_MODE,
    QUOTE_STRING_MODE: QUOTE_STRING_MODE,
    PHRASAL_WORDS_MODE: PHRASAL_WORDS_MODE,
    COMMENT: COMMENT,
    C_LINE_COMMENT_MODE: C_LINE_COMMENT_MODE,
    C_BLOCK_COMMENT_MODE: C_BLOCK_COMMENT_MODE,
    HASH_COMMENT_MODE: HASH_COMMENT_MODE,
    NUMBER_MODE: NUMBER_MODE,
    C_NUMBER_MODE: C_NUMBER_MODE,
    BINARY_NUMBER_MODE: BINARY_NUMBER_MODE,
    CSS_NUMBER_MODE: CSS_NUMBER_MODE,
    REGEXP_MODE: REGEXP_MODE,
    TITLE_MODE: TITLE_MODE,
    UNDERSCORE_TITLE_MODE: UNDERSCORE_TITLE_MODE,
    METHOD_GUARD: METHOD_GUARD,
    END_SAME_AS_BEGIN: END_SAME_AS_BEGIN
});

// Grammar extensions / plugins
// See: https://github.com/highlightjs/highlight.js/issues/2833

// Grammar extensions allow "syntactic sugar" to be added to the grammar modes
// without requiring any underlying changes to the compiler internals.

// `compileMatch` being the perfect small example of now allowing a grammar
// author to write `match` when they desire to match a single expression rather
// than being forced to use `begin`.  The extension then just moves `match` into
// `begin` when it runs.  Ie, no features have been added, but we've just made
// the experience of writing (and reading grammars) a little bit nicer.

// ------

// TODO: We need negative look-behind support to do this properly
/**
 * Skip a match if it has a preceding dot
 *
 * This is used for `beginKeywords` to prevent matching expressions such as
 * `bob.keyword.do()`. The mode compiler automatically wires this up as a
 * special _internal_ 'on:begin' callback for modes with `beginKeywords`
 * @param {RegExpMatchArray} match
 * @param {CallbackResponse} response
 */
function skipIfhasPrecedingDot(match, response) {
  const before = match.input[match.index - 1];
  if (before === ".") {
    response.ignoreMatch();
  }
}


/**
 * `beginKeywords` syntactic sugar
 * @type {CompilerExt}
 */
function beginKeywords(mode, parent) {
  if (!parent) return;
  if (!mode.beginKeywords) return;

  // for languages with keywords that include non-word characters checking for
  // a word boundary is not sufficient, so instead we check for a word boundary
  // or whitespace - this does no harm in any case since our keyword engine
  // doesn't allow spaces in keywords anyways and we still check for the boundary
  // first
  mode.begin = '\\b(' + mode.beginKeywords.split(' ').join('|') + ')(?!\\.)(?=\\b|\\s)';
  mode.__beforeBegin = skipIfhasPrecedingDot;
  mode.keywords = mode.keywords || mode.beginKeywords;
  delete mode.beginKeywords;

  // prevents double relevance, the keywords themselves provide
  // relevance, the mode doesn't need to double it
  // eslint-disable-next-line no-undefined
  if (mode.relevance === undefined) mode.relevance = 0;
}

/**
 * Allow `illegal` to contain an array of illegal values
 * @type {CompilerExt}
 */
function compileIllegal(mode, _parent) {
  if (!Array.isArray(mode.illegal)) return;

  mode.illegal = either(...mode.illegal);
}

/**
 * `match` to match a single expression for readability
 * @type {CompilerExt}
 */
function compileMatch(mode, _parent) {
  if (!mode.match) return;
  if (mode.begin || mode.end) throw new Error("begin & end are not supported with match");

  mode.begin = mode.match;
  delete mode.match;
}

/**
 * provides the default 1 relevance to all modes
 * @type {CompilerExt}
 */
function compileRelevance(mode, _parent) {
  // eslint-disable-next-line no-undefined
  if (mode.relevance === undefined) mode.relevance = 1;
}

// keywords that should have no default relevance value
const COMMON_KEYWORDS = [
  'of',
  'and',
  'for',
  'in',
  'not',
  'or',
  'if',
  'then',
  'parent', // common variable name
  'list', // common variable name
  'value' // common variable name
];

const DEFAULT_KEYWORD_CLASSNAME = "keyword";

/**
 * Given raw keywords from a language definition, compile them.
 *
 * @param {string | Record<string,string|string[]> | Array<string>} rawKeywords
 * @param {boolean} caseInsensitive
 */
function compileKeywords(rawKeywords, caseInsensitive, className = DEFAULT_KEYWORD_CLASSNAME) {
  /** @type KeywordDict */
  const compiledKeywords = {};

  // input can be a string of keywords, an array of keywords, or a object with
  // named keys representing className (which can then point to a string or array)
  if (typeof rawKeywords === 'string') {
    compileList(className, rawKeywords.split(" "));
  } else if (Array.isArray(rawKeywords)) {
    compileList(className, rawKeywords);
  } else {
    Object.keys(rawKeywords).forEach(function(className) {
      // collapse all our objects back into the parent object
      Object.assign(
        compiledKeywords,
        compileKeywords(rawKeywords[className], caseInsensitive, className)
      );
    });
  }
  return compiledKeywords;

  // ---

  /**
   * Compiles an individual list of keywords
   *
   * Ex: "for if when while|5"
   *
   * @param {string} className
   * @param {Array<string>} keywordList
   */
  function compileList(className, keywordList) {
    if (caseInsensitive) {
      keywordList = keywordList.map(x => x.toLowerCase());
    }
    keywordList.forEach(function(keyword) {
      const pair = keyword.split('|');
      compiledKeywords[pair[0]] = [className, scoreForKeyword(pair[0], pair[1])];
    });
  }
}

/**
 * Returns the proper score for a given keyword
 *
 * Also takes into account comment keywords, which will be scored 0 UNLESS
 * another score has been manually assigned.
 * @param {string} keyword
 * @param {string} [providedScore]
 */
function scoreForKeyword(keyword, providedScore) {
  // manual scores always win over common keywords
  // so you can force a score of 1 if you really insist
  if (providedScore) {
    return Number(providedScore);
  }

  return commonKeyword(keyword) ? 0 : 1;
}

/**
 * Determines if a given keyword is common or not
 *
 * @param {string} keyword */
function commonKeyword(keyword) {
  return COMMON_KEYWORDS.includes(keyword.toLowerCase());
}

// compilation

/**
 * Compiles a language definition result
 *
 * Given the raw result of a language definition (Language), compiles this so
 * that it is ready for highlighting code.
 * @param {Language} language
 * @param {{plugins: HLJSPlugin[]}} opts
 * @returns {CompiledLanguage}
 */
function compileLanguage(language, { plugins }) {
  /**
   * Builds a regex with the case sensativility of the current language
   *
   * @param {RegExp | string} value
   * @param {boolean} [global]
   */
  function langRe(value, global) {
    return new RegExp(
      source(value),
      'm' + (language.case_insensitive ? 'i' : '') + (global ? 'g' : '')
    );
  }

  /**
    Stores multiple regular expressions and allows you to quickly search for
    them all in a string simultaneously - returning the first match.  It does
    this by creating a huge (a|b|c) regex - each individual item wrapped with ()
    and joined by `|` - using match groups to track position.  When a match is
    found checking which position in the array has content allows us to figure
    out which of the original regexes / match groups triggered the match.

    The match object itself (the result of `Regex.exec`) is returned but also
    enhanced by merging in any meta-data that was registered with the regex.
    This is how we keep track of which mode matched, and what type of rule
    (`illegal`, `begin`, end, etc).
  */
  class MultiRegex {
    constructor() {
      this.matchIndexes = {};
      // @ts-ignore
      this.regexes = [];
      this.matchAt = 1;
      this.position = 0;
    }

    // @ts-ignore
    addRule(re, opts) {
      opts.position = this.position++;
      // @ts-ignore
      this.matchIndexes[this.matchAt] = opts;
      this.regexes.push([opts, re]);
      this.matchAt += countMatchGroups(re) + 1;
    }

    compile() {
      if (this.regexes.length === 0) {
        // avoids the need to check length every time exec is called
        // @ts-ignore
        this.exec = () => null;
      }
      const terminators = this.regexes.map(el => el[1]);
      this.matcherRe = langRe(join(terminators), true);
      this.lastIndex = 0;
    }

    /** @param {string} s */
    exec(s) {
      this.matcherRe.lastIndex = this.lastIndex;
      const match = this.matcherRe.exec(s);
      if (!match) { return null; }

      // eslint-disable-next-line no-undefined
      const i = match.findIndex((el, i) => i > 0 && el !== undefined);
      // @ts-ignore
      const matchData = this.matchIndexes[i];
      // trim off any earlier non-relevant match groups (ie, the other regex
      // match groups that make up the multi-matcher)
      match.splice(0, i);

      return Object.assign(match, matchData);
    }
  }

  /*
    Created to solve the key deficiently with MultiRegex - there is no way to
    test for multiple matches at a single location.  Why would we need to do
    that?  In the future a more dynamic engine will allow certain matches to be
    ignored.  An example: if we matched say the 3rd regex in a large group but
    decided to ignore it - we'd need to started testing again at the 4th
    regex... but MultiRegex itself gives us no real way to do that.

    So what this class creates MultiRegexs on the fly for whatever search
    position they are needed.

    NOTE: These additional MultiRegex objects are created dynamically.  For most
    grammars most of the time we will never actually need anything more than the
    first MultiRegex - so this shouldn't have too much overhead.

    Say this is our search group, and we match regex3, but wish to ignore it.

      regex1 | regex2 | regex3 | regex4 | regex5    ' ie, startAt = 0

    What we need is a new MultiRegex that only includes the remaining
    possibilities:

      regex4 | regex5                               ' ie, startAt = 3

    This class wraps all that complexity up in a simple API... `startAt` decides
    where in the array of expressions to start doing the matching. It
    auto-increments, so if a match is found at position 2, then startAt will be
    set to 3.  If the end is reached startAt will return to 0.

    MOST of the time the parser will be setting startAt manually to 0.
  */
  class ResumableMultiRegex {
    constructor() {
      // @ts-ignore
      this.rules = [];
      // @ts-ignore
      this.multiRegexes = [];
      this.count = 0;

      this.lastIndex = 0;
      this.regexIndex = 0;
    }

    // @ts-ignore
    getMatcher(index) {
      if (this.multiRegexes[index]) return this.multiRegexes[index];

      const matcher = new MultiRegex();
      this.rules.slice(index).forEach(([re, opts]) => matcher.addRule(re, opts));
      matcher.compile();
      this.multiRegexes[index] = matcher;
      return matcher;
    }

    resumingScanAtSamePosition() {
      return this.regexIndex !== 0;
    }

    considerAll() {
      this.regexIndex = 0;
    }

    // @ts-ignore
    addRule(re, opts) {
      this.rules.push([re, opts]);
      if (opts.type === "begin") this.count++;
    }

    /** @param {string} s */
    exec(s) {
      const m = this.getMatcher(this.regexIndex);
      m.lastIndex = this.lastIndex;
      let result = m.exec(s);

      // The following is because we have no easy way to say "resume scanning at the
      // existing position but also skip the current rule ONLY". What happens is
      // all prior rules are also skipped which can result in matching the wrong
      // thing. Example of matching "booger":

      // our matcher is [string, "booger", number]
      //
      // ....booger....

      // if "booger" is ignored then we'd really need a regex to scan from the
      // SAME position for only: [string, number] but ignoring "booger" (if it
      // was the first match), a simple resume would scan ahead who knows how
      // far looking only for "number", ignoring potential string matches (or
      // future "booger" matches that might be valid.)

      // So what we do: We execute two matchers, one resuming at the same
      // position, but the second full matcher starting at the position after:

      //     /--- resume first regex match here (for [number])
      //     |/---- full match here for [string, "booger", number]
      //     vv
      // ....booger....

      // Which ever results in a match first is then used. So this 3-4 step
      // process essentially allows us to say "match at this position, excluding
      // a prior rule that was ignored".
      //
      // 1. Match "booger" first, ignore. Also proves that [string] does non match.
      // 2. Resume matching for [number]
      // 3. Match at index + 1 for [string, "booger", number]
      // 4. If #2 and #3 result in matches, which came first?
      if (this.resumingScanAtSamePosition()) {
        if (result && result.index === this.lastIndex) ; else { // use the second matcher result
          const m2 = this.getMatcher(0);
          m2.lastIndex = this.lastIndex + 1;
          result = m2.exec(s);
        }
      }

      if (result) {
        this.regexIndex += result.position + 1;
        if (this.regexIndex === this.count) {
          // wrap-around to considering all matches again
          this.considerAll();
        }
      }

      return result;
    }
  }

  /**
   * Given a mode, builds a huge ResumableMultiRegex that can be used to walk
   * the content and find matches.
   *
   * @param {CompiledMode} mode
   * @returns {ResumableMultiRegex}
   */
  function buildModeRegex(mode) {
    const mm = new ResumableMultiRegex();

    mode.contains.forEach(term => mm.addRule(term.begin, { rule: term, type: "begin" }));

    if (mode.terminatorEnd) {
      mm.addRule(mode.terminatorEnd, { type: "end" });
    }
    if (mode.illegal) {
      mm.addRule(mode.illegal, { type: "illegal" });
    }

    return mm;
  }

  /** skip vs abort vs ignore
   *
   * @skip   - The mode is still entered and exited normally (and contains rules apply),
   *           but all content is held and added to the parent buffer rather than being
   *           output when the mode ends.  Mostly used with `sublanguage` to build up
   *           a single large buffer than can be parsed by sublanguage.
   *
   *             - The mode begin ands ends normally.
   *             - Content matched is added to the parent mode buffer.
   *             - The parser cursor is moved forward normally.
   *
   * @abort  - A hack placeholder until we have ignore.  Aborts the mode (as if it
   *           never matched) but DOES NOT continue to match subsequent `contains`
   *           modes.  Abort is bad/suboptimal because it can result in modes
   *           farther down not getting applied because an earlier rule eats the
   *           content but then aborts.
   *
   *             - The mode does not begin.
   *             - Content matched by `begin` is added to the mode buffer.
   *             - The parser cursor is moved forward accordingly.
   *
   * @ignore - Ignores the mode (as if it never matched) and continues to match any
   *           subsequent `contains` modes.  Ignore isn't technically possible with
   *           the current parser implementation.
   *
   *             - The mode does not begin.
   *             - Content matched by `begin` is ignored.
   *             - The parser cursor is not moved forward.
   */

  /**
   * Compiles an individual mode
   *
   * This can raise an error if the mode contains certain detectable known logic
   * issues.
   * @param {Mode} mode
   * @param {CompiledMode | null} [parent]
   * @returns {CompiledMode | never}
   */
  function compileMode(mode, parent) {
    const cmode = /** @type CompiledMode */ (mode);
    if (mode.isCompiled) return cmode;

    [
      // do this early so compiler extensions generally don't have to worry about
      // the distinction between match/begin
      compileMatch
    ].forEach(ext => ext(mode, parent));

    language.compilerExtensions.forEach(ext => ext(mode, parent));

    // __beforeBegin is considered private API, internal use only
    mode.__beforeBegin = null;

    [
      beginKeywords,
      // do this later so compiler extensions that come earlier have access to the
      // raw array if they wanted to perhaps manipulate it, etc.
      compileIllegal,
      // default to 1 relevance if not specified
      compileRelevance
    ].forEach(ext => ext(mode, parent));

    mode.isCompiled = true;

    let keywordPattern = null;
    if (typeof mode.keywords === "object") {
      keywordPattern = mode.keywords.$pattern;
      delete mode.keywords.$pattern;
    }

    if (mode.keywords) {
      mode.keywords = compileKeywords(mode.keywords, language.case_insensitive);
    }

    // both are not allowed
    if (mode.lexemes && keywordPattern) {
      throw new Error("ERR: Prefer `keywords.$pattern` to `mode.lexemes`, BOTH are not allowed. (see mode reference) ");
    }

    // `mode.lexemes` was the old standard before we added and now recommend
    // using `keywords.$pattern` to pass the keyword pattern
    keywordPattern = keywordPattern || mode.lexemes || /\w+/;
    cmode.keywordPatternRe = langRe(keywordPattern, true);

    if (parent) {
      if (!mode.begin) mode.begin = /\B|\b/;
      cmode.beginRe = langRe(mode.begin);
      if (mode.endSameAsBegin) mode.end = mode.begin;
      if (!mode.end && !mode.endsWithParent) mode.end = /\B|\b/;
      if (mode.end) cmode.endRe = langRe(mode.end);
      cmode.terminatorEnd = source(mode.end) || '';
      if (mode.endsWithParent && parent.terminatorEnd) {
        cmode.terminatorEnd += (mode.end ? '|' : '') + parent.terminatorEnd;
      }
    }
    if (mode.illegal) cmode.illegalRe = langRe(/** @type {RegExp | string} */ (mode.illegal));
    if (!mode.contains) mode.contains = [];

    mode.contains = [].concat(...mode.contains.map(function(c) {
      return expandOrCloneMode(c === 'self' ? mode : c);
    }));
    mode.contains.forEach(function(c) { compileMode(/** @type Mode */ (c), cmode); });

    if (mode.starts) {
      compileMode(mode.starts, parent);
    }

    cmode.matcher = buildModeRegex(cmode);
    return cmode;
  }

  if (!language.compilerExtensions) language.compilerExtensions = [];

  // self is not valid at the top-level
  if (language.contains && language.contains.includes('self')) {
    throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
  }

  // we need a null object, which inherit will guarantee
  language.classNameAliases = inherit(language.classNameAliases || {});

  return compileMode(/** @type Mode */ (language));
}

/**
 * Determines if a mode has a dependency on it's parent or not
 *
 * If a mode does have a parent dependency then often we need to clone it if
 * it's used in multiple places so that each copy points to the correct parent,
 * where-as modes without a parent can often safely be re-used at the bottom of
 * a mode chain.
 *
 * @param {Mode | null} mode
 * @returns {boolean} - is there a dependency on the parent?
 * */
function dependencyOnParent(mode) {
  if (!mode) return false;

  return mode.endsWithParent || dependencyOnParent(mode.starts);
}

/**
 * Expands a mode or clones it if necessary
 *
 * This is necessary for modes with parental dependenceis (see notes on
 * `dependencyOnParent`) and for nodes that have `variants` - which must then be
 * exploded into their own individual modes at compile time.
 *
 * @param {Mode} mode
 * @returns {Mode | Mode[]}
 * */
function expandOrCloneMode(mode) {
  if (mode.variants && !mode.cachedVariants) {
    mode.cachedVariants = mode.variants.map(function(variant) {
      return inherit(mode, { variants: null }, variant);
    });
  }

  // EXPAND
  // if we have variants then essentially "replace" the mode with the variants
  // this happens in compileMode, where this function is called from
  if (mode.cachedVariants) {
    return mode.cachedVariants;
  }

  // CLONE
  // if we have dependencies on parents then we need a unique
  // instance of ourselves, so we can be reused with many
  // different parents without issue
  if (dependencyOnParent(mode)) {
    return inherit(mode, { starts: mode.starts ? inherit(mode.starts) : null });
  }

  if (Object.isFrozen(mode)) {
    return inherit(mode);
  }

  // no special dependency issues, just return ourselves
  return mode;
}

var version = "10.7.3";

// @ts-nocheck

function hasValueOrEmptyAttribute(value) {
  return Boolean(value || value === "");
}

function BuildVuePlugin(hljs) {
  const Component = {
    props: ["language", "code", "autodetect"],
    data: function() {
      return {
        detectedLanguage: "",
        unknownLanguage: false
      };
    },
    computed: {
      className() {
        if (this.unknownLanguage) return "";

        return "hljs " + this.detectedLanguage;
      },
      highlighted() {
        // no idea what language to use, return raw code
        if (!this.autoDetect && !hljs.getLanguage(this.language)) {
          console.warn(`The language "${this.language}" you specified could not be found.`);
          this.unknownLanguage = true;
          return escapeHTML(this.code);
        }

        let result = {};
        if (this.autoDetect) {
          result = hljs.highlightAuto(this.code);
          this.detectedLanguage = result.language;
        } else {
          result = hljs.highlight(this.language, this.code, this.ignoreIllegals);
          this.detectedLanguage = this.language;
        }
        return result.value;
      },
      autoDetect() {
        return !this.language || hasValueOrEmptyAttribute(this.autodetect);
      },
      ignoreIllegals() {
        return true;
      }
    },
    // this avoids needing to use a whole Vue compilation pipeline just
    // to build Highlight.js
    render(createElement) {
      return createElement("pre", {}, [
        createElement("code", {
          class: this.className,
          domProps: { innerHTML: this.highlighted }
        })
      ]);
    }
    // template: `<pre><code :class="className" v-html="highlighted"></code></pre>`
  };

  const VuePlugin = {
    install(Vue) {
      Vue.component('highlightjs', Component);
    }
  };

  return { Component, VuePlugin };
}

/* plugin itself */

/** @type {HLJSPlugin} */
const mergeHTMLPlugin = {
  "after:highlightElement": ({ el, result, text }) => {
    const originalStream = nodeStream(el);
    if (!originalStream.length) return;

    const resultNode = document.createElement('div');
    resultNode.innerHTML = result.value;
    result.value = mergeStreams(originalStream, nodeStream(resultNode), text);
  }
};

/* Stream merging support functions */

/**
 * @typedef Event
 * @property {'start'|'stop'} event
 * @property {number} offset
 * @property {Node} node
 */

/**
 * @param {Node} node
 */
function tag(node) {
  return node.nodeName.toLowerCase();
}

/**
 * @param {Node} node
 */
function nodeStream(node) {
  /** @type Event[] */
  const result = [];
  (function _nodeStream(node, offset) {
    for (let child = node.firstChild; child; child = child.nextSibling) {
      if (child.nodeType === 3) {
        offset += child.nodeValue.length;
      } else if (child.nodeType === 1) {
        result.push({
          event: 'start',
          offset: offset,
          node: child
        });
        offset = _nodeStream(child, offset);
        // Prevent void elements from having an end tag that would actually
        // double them in the output. There are more void elements in HTML
        // but we list only those realistically expected in code display.
        if (!tag(child).match(/br|hr|img|input/)) {
          result.push({
            event: 'stop',
            offset: offset,
            node: child
          });
        }
      }
    }
    return offset;
  })(node, 0);
  return result;
}

/**
 * @param {any} original - the original stream
 * @param {any} highlighted - stream of the highlighted source
 * @param {string} value - the original source itself
 */
function mergeStreams(original, highlighted, value) {
  let processed = 0;
  let result = '';
  const nodeStack = [];

  function selectStream() {
    if (!original.length || !highlighted.length) {
      return original.length ? original : highlighted;
    }
    if (original[0].offset !== highlighted[0].offset) {
      return (original[0].offset < highlighted[0].offset) ? original : highlighted;
    }

    /*
    To avoid starting the stream just before it should stop the order is
    ensured that original always starts first and closes last:

    if (event1 == 'start' && event2 == 'start')
      return original;
    if (event1 == 'start' && event2 == 'stop')
      return highlighted;
    if (event1 == 'stop' && event2 == 'start')
      return original;
    if (event1 == 'stop' && event2 == 'stop')
      return highlighted;

    ... which is collapsed to:
    */
    return highlighted[0].event === 'start' ? original : highlighted;
  }

  /**
   * @param {Node} node
   */
  function open(node) {
    /** @param {Attr} attr */
    function attributeString(attr) {
      return ' ' + attr.nodeName + '="' + escapeHTML(attr.value) + '"';
    }
    // @ts-ignore
    result += '<' + tag(node) + [].map.call(node.attributes, attributeString).join('') + '>';
  }

  /**
   * @param {Node} node
   */
  function close(node) {
    result += '</' + tag(node) + '>';
  }

  /**
   * @param {Event} event
   */
  function render(event) {
    (event.event === 'start' ? open : close)(event.node);
  }

  while (original.length || highlighted.length) {
    let stream = selectStream();
    result += escapeHTML(value.substring(processed, stream[0].offset));
    processed = stream[0].offset;
    if (stream === original) {
      /*
      On any opening or closing tag of the original markup we first close
      the entire highlighted node stack, then render the original tag along
      with all the following original tags at the same offset and then
      reopen all the tags on the highlighted stack.
      */
      nodeStack.reverse().forEach(close);
      do {
        render(stream.splice(0, 1)[0]);
        stream = selectStream();
      } while (stream === original && stream.length && stream[0].offset === processed);
      nodeStack.reverse().forEach(open);
    } else {
      if (stream[0].event === 'start') {
        nodeStack.push(stream[0].node);
      } else {
        nodeStack.pop();
      }
      render(stream.splice(0, 1)[0]);
    }
  }
  return result + escapeHTML(value.substr(processed));
}

/*

For the reasoning behind this please see:
https://github.com/highlightjs/highlight.js/issues/2880#issuecomment-747275419

*/

/**
 * @type {Record<string, boolean>}
 */
const seenDeprecations = {};

/**
 * @param {string} message
 */
const error = (message) => {
  console.error(message);
};

/**
 * @param {string} message
 * @param {any} args
 */
const warn = (message, ...args) => {
  console.log(`WARN: ${message}`, ...args);
};

/**
 * @param {string} version
 * @param {string} message
 */
const deprecated = (version, message) => {
  if (seenDeprecations[`${version}/${message}`]) return;

  console.log(`Deprecated as of ${version}. ${message}`);
  seenDeprecations[`${version}/${message}`] = true;
};

/*
Syntax highlighting with language autodetection.
https://highlightjs.org/
*/

const escape$1 = escapeHTML;
const inherit$1 = inherit;
const NO_MATCH = Symbol("nomatch");

/**
 * @param {any} hljs - object that is extended (legacy)
 * @returns {HLJSApi}
 */
const HLJS = function(hljs) {
  // Global internal variables used within the highlight.js library.
  /** @type {Record<string, Language>} */
  const languages = Object.create(null);
  /** @type {Record<string, string>} */
  const aliases = Object.create(null);
  /** @type {HLJSPlugin[]} */
  const plugins = [];

  // safe/production mode - swallows more errors, tries to keep running
  // even if a single syntax or parse hits a fatal error
  let SAFE_MODE = true;
  const fixMarkupRe = /(^(<[^>]+>|\t|)+|\n)/gm;
  const LANGUAGE_NOT_FOUND = "Could not find the language '{}', did you forget to load/include a language module?";
  /** @type {Language} */
  const PLAINTEXT_LANGUAGE = { disableAutodetect: true, name: 'Plain text', contains: [] };

  // Global options used when within external APIs. This is modified when
  // calling the `hljs.configure` function.
  /** @type HLJSOptions */
  let options = {
    noHighlightRe: /^(no-?highlight)$/i,
    languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
    classPrefix: 'hljs-',
    tabReplace: null,
    useBR: false,
    languages: null,
    // beta configuration options, subject to change, welcome to discuss
    // https://github.com/highlightjs/highlight.js/issues/1086
    __emitter: TokenTreeEmitter
  };

  /* Utility functions */

  /**
   * Tests a language name to see if highlighting should be skipped
   * @param {string} languageName
   */
  function shouldNotHighlight(languageName) {
    return options.noHighlightRe.test(languageName);
  }

  /**
   * @param {HighlightedHTMLElement} block - the HTML element to determine language for
   */
  function blockLanguage(block) {
    let classes = block.className + ' ';

    classes += block.parentNode ? block.parentNode.className : '';

    // language-* takes precedence over non-prefixed class names.
    const match = options.languageDetectRe.exec(classes);
    if (match) {
      const language = getLanguage(match[1]);
      if (!language) {
        warn(LANGUAGE_NOT_FOUND.replace("{}", match[1]));
        warn("Falling back to no-highlight mode for this block.", block);
      }
      return language ? match[1] : 'no-highlight';
    }

    return classes
      .split(/\s+/)
      .find((_class) => shouldNotHighlight(_class) || getLanguage(_class));
  }

  /**
   * Core highlighting function.
   *
   * OLD API
   * highlight(lang, code, ignoreIllegals, continuation)
   *
   * NEW API
   * highlight(code, {lang, ignoreIllegals})
   *
   * @param {string} codeOrlanguageName - the language to use for highlighting
   * @param {string | HighlightOptions} optionsOrCode - the code to highlight
   * @param {boolean} [ignoreIllegals] - whether to ignore illegal matches, default is to bail
   * @param {CompiledMode} [continuation] - current continuation mode, if any
   *
   * @returns {HighlightResult} Result - an object that represents the result
   * @property {string} language - the language name
   * @property {number} relevance - the relevance score
   * @property {string} value - the highlighted HTML code
   * @property {string} code - the original raw code
   * @property {CompiledMode} top - top of the current mode stack
   * @property {boolean} illegal - indicates whether any illegal matches were found
  */
  function highlight(codeOrlanguageName, optionsOrCode, ignoreIllegals, continuation) {
    let code = "";
    let languageName = "";
    if (typeof optionsOrCode === "object") {
      code = codeOrlanguageName;
      ignoreIllegals = optionsOrCode.ignoreIllegals;
      languageName = optionsOrCode.language;
      // continuation not supported at all via the new API
      // eslint-disable-next-line no-undefined
      continuation = undefined;
    } else {
      // old API
      deprecated("10.7.0", "highlight(lang, code, ...args) has been deprecated.");
      deprecated("10.7.0", "Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277");
      languageName = codeOrlanguageName;
      code = optionsOrCode;
    }

    /** @type {BeforeHighlightContext} */
    const context = {
      code,
      language: languageName
    };
    // the plugin can change the desired language or the code to be highlighted
    // just be changing the object it was passed
    fire("before:highlight", context);

    // a before plugin can usurp the result completely by providing it's own
    // in which case we don't even need to call highlight
    const result = context.result
      ? context.result
      : _highlight(context.language, context.code, ignoreIllegals, continuation);

    result.code = context.code;
    // the plugin can change anything in result to suite it
    fire("after:highlight", result);

    return result;
  }

  /**
   * private highlight that's used internally and does not fire callbacks
   *
   * @param {string} languageName - the language to use for highlighting
   * @param {string} codeToHighlight - the code to highlight
   * @param {boolean?} [ignoreIllegals] - whether to ignore illegal matches, default is to bail
   * @param {CompiledMode?} [continuation] - current continuation mode, if any
   * @returns {HighlightResult} - result of the highlight operation
  */
  function _highlight(languageName, codeToHighlight, ignoreIllegals, continuation) {
    /**
     * Return keyword data if a match is a keyword
     * @param {CompiledMode} mode - current mode
     * @param {RegExpMatchArray} match - regexp match data
     * @returns {KeywordData | false}
     */
    function keywordData(mode, match) {
      const matchText = language.case_insensitive ? match[0].toLowerCase() : match[0];
      return Object.prototype.hasOwnProperty.call(mode.keywords, matchText) && mode.keywords[matchText];
    }

    function processKeywords() {
      if (!top.keywords) {
        emitter.addText(modeBuffer);
        return;
      }

      let lastIndex = 0;
      top.keywordPatternRe.lastIndex = 0;
      let match = top.keywordPatternRe.exec(modeBuffer);
      let buf = "";

      while (match) {
        buf += modeBuffer.substring(lastIndex, match.index);
        const data = keywordData(top, match);
        if (data) {
          const [kind, keywordRelevance] = data;
          emitter.addText(buf);
          buf = "";

          relevance += keywordRelevance;
          if (kind.startsWith("_")) {
            // _ implied for relevance only, do not highlight
            // by applying a class name
            buf += match[0];
          } else {
            const cssClass = language.classNameAliases[kind] || kind;
            emitter.addKeyword(match[0], cssClass);
          }
        } else {
          buf += match[0];
        }
        lastIndex = top.keywordPatternRe.lastIndex;
        match = top.keywordPatternRe.exec(modeBuffer);
      }
      buf += modeBuffer.substr(lastIndex);
      emitter.addText(buf);
    }

    function processSubLanguage() {
      if (modeBuffer === "") return;
      /** @type HighlightResult */
      let result = null;

      if (typeof top.subLanguage === 'string') {
        if (!languages[top.subLanguage]) {
          emitter.addText(modeBuffer);
          return;
        }
        result = _highlight(top.subLanguage, modeBuffer, true, continuations[top.subLanguage]);
        continuations[top.subLanguage] = /** @type {CompiledMode} */ (result.top);
      } else {
        result = highlightAuto(modeBuffer, top.subLanguage.length ? top.subLanguage : null);
      }

      // Counting embedded language score towards the host language may be disabled
      // with zeroing the containing mode relevance. Use case in point is Markdown that
      // allows XML everywhere and makes every XML snippet to have a much larger Markdown
      // score.
      if (top.relevance > 0) {
        relevance += result.relevance;
      }
      emitter.addSublanguage(result.emitter, result.language);
    }

    function processBuffer() {
      if (top.subLanguage != null) {
        processSubLanguage();
      } else {
        processKeywords();
      }
      modeBuffer = '';
    }

    /**
     * @param {Mode} mode - new mode to start
     */
    function startNewMode(mode) {
      if (mode.className) {
        emitter.openNode(language.classNameAliases[mode.className] || mode.className);
      }
      top = Object.create(mode, { parent: { value: top } });
      return top;
    }

    /**
     * @param {CompiledMode } mode - the mode to potentially end
     * @param {RegExpMatchArray} match - the latest match
     * @param {string} matchPlusRemainder - match plus remainder of content
     * @returns {CompiledMode | void} - the next mode, or if void continue on in current mode
     */
    function endOfMode(mode, match, matchPlusRemainder) {
      let matched = startsWith(mode.endRe, matchPlusRemainder);

      if (matched) {
        if (mode["on:end"]) {
          const resp = new Response(mode);
          mode["on:end"](match, resp);
          if (resp.isMatchIgnored) matched = false;
        }

        if (matched) {
          while (mode.endsParent && mode.parent) {
            mode = mode.parent;
          }
          return mode;
        }
      }
      // even if on:end fires an `ignore` it's still possible
      // that we might trigger the end node because of a parent mode
      if (mode.endsWithParent) {
        return endOfMode(mode.parent, match, matchPlusRemainder);
      }
    }

    /**
     * Handle matching but then ignoring a sequence of text
     *
     * @param {string} lexeme - string containing full match text
     */
    function doIgnore(lexeme) {
      if (top.matcher.regexIndex === 0) {
        // no more regexs to potentially match here, so we move the cursor forward one
        // space
        modeBuffer += lexeme[0];
        return 1;
      } else {
        // no need to move the cursor, we still have additional regexes to try and
        // match at this very spot
        resumeScanAtSamePosition = true;
        return 0;
      }
    }

    /**
     * Handle the start of a new potential mode match
     *
     * @param {EnhancedMatch} match - the current match
     * @returns {number} how far to advance the parse cursor
     */
    function doBeginMatch(match) {
      const lexeme = match[0];
      const newMode = match.rule;

      const resp = new Response(newMode);
      // first internal before callbacks, then the public ones
      const beforeCallbacks = [newMode.__beforeBegin, newMode["on:begin"]];
      for (const cb of beforeCallbacks) {
        if (!cb) continue;
        cb(match, resp);
        if (resp.isMatchIgnored) return doIgnore(lexeme);
      }

      if (newMode && newMode.endSameAsBegin) {
        newMode.endRe = escape(lexeme);
      }

      if (newMode.skip) {
        modeBuffer += lexeme;
      } else {
        if (newMode.excludeBegin) {
          modeBuffer += lexeme;
        }
        processBuffer();
        if (!newMode.returnBegin && !newMode.excludeBegin) {
          modeBuffer = lexeme;
        }
      }
      startNewMode(newMode);
      // if (mode["after:begin"]) {
      //   let resp = new Response(mode);
      //   mode["after:begin"](match, resp);
      // }
      return newMode.returnBegin ? 0 : lexeme.length;
    }

    /**
     * Handle the potential end of mode
     *
     * @param {RegExpMatchArray} match - the current match
     */
    function doEndMatch(match) {
      const lexeme = match[0];
      const matchPlusRemainder = codeToHighlight.substr(match.index);

      const endMode = endOfMode(top, match, matchPlusRemainder);
      if (!endMode) { return NO_MATCH; }

      const origin = top;
      if (origin.skip) {
        modeBuffer += lexeme;
      } else {
        if (!(origin.returnEnd || origin.excludeEnd)) {
          modeBuffer += lexeme;
        }
        processBuffer();
        if (origin.excludeEnd) {
          modeBuffer = lexeme;
        }
      }
      do {
        if (top.className) {
          emitter.closeNode();
        }
        if (!top.skip && !top.subLanguage) {
          relevance += top.relevance;
        }
        top = top.parent;
      } while (top !== endMode.parent);
      if (endMode.starts) {
        if (endMode.endSameAsBegin) {
          endMode.starts.endRe = endMode.endRe;
        }
        startNewMode(endMode.starts);
      }
      return origin.returnEnd ? 0 : lexeme.length;
    }

    function processContinuations() {
      const list = [];
      for (let current = top; current !== language; current = current.parent) {
        if (current.className) {
          list.unshift(current.className);
        }
      }
      list.forEach(item => emitter.openNode(item));
    }

    /** @type {{type?: MatchType, index?: number, rule?: Mode}}} */
    let lastMatch = {};

    /**
     *  Process an individual match
     *
     * @param {string} textBeforeMatch - text preceeding the match (since the last match)
     * @param {EnhancedMatch} [match] - the match itself
     */
    function processLexeme(textBeforeMatch, match) {
      const lexeme = match && match[0];

      // add non-matched text to the current mode buffer
      modeBuffer += textBeforeMatch;

      if (lexeme == null) {
        processBuffer();
        return 0;
      }

      // we've found a 0 width match and we're stuck, so we need to advance
      // this happens when we have badly behaved rules that have optional matchers to the degree that
      // sometimes they can end up matching nothing at all
      // Ref: https://github.com/highlightjs/highlight.js/issues/2140
      if (lastMatch.type === "begin" && match.type === "end" && lastMatch.index === match.index && lexeme === "") {
        // spit the "skipped" character that our regex choked on back into the output sequence
        modeBuffer += codeToHighlight.slice(match.index, match.index + 1);
        if (!SAFE_MODE) {
          /** @type {AnnotatedError} */
          const err = new Error('0 width match regex');
          err.languageName = languageName;
          err.badRule = lastMatch.rule;
          throw err;
        }
        return 1;
      }
      lastMatch = match;

      if (match.type === "begin") {
        return doBeginMatch(match);
      } else if (match.type === "illegal" && !ignoreIllegals) {
        // illegal match, we do not continue processing
        /** @type {AnnotatedError} */
        const err = new Error('Illegal lexeme "' + lexeme + '" for mode "' + (top.className || '<unnamed>') + '"');
        err.mode = top;
        throw err;
      } else if (match.type === "end") {
        const processed = doEndMatch(match);
        if (processed !== NO_MATCH) {
          return processed;
        }
      }

      // edge case for when illegal matches $ (end of line) which is technically
      // a 0 width match but not a begin/end match so it's not caught by the
      // first handler (when ignoreIllegals is true)
      if (match.type === "illegal" && lexeme === "") {
        // advance so we aren't stuck in an infinite loop
        return 1;
      }

      // infinite loops are BAD, this is a last ditch catch all. if we have a
      // decent number of iterations yet our index (cursor position in our
      // parsing) still 3x behind our index then something is very wrong
      // so we bail
      if (iterations > 100000 && iterations > match.index * 3) {
        const err = new Error('potential infinite loop, way more iterations than matches');
        throw err;
      }

      /*
      Why might be find ourselves here?  Only one occasion now.  An end match that was
      triggered but could not be completed.  When might this happen?  When an `endSameasBegin`
      rule sets the end rule to a specific match.  Since the overall mode termination rule that's
      being used to scan the text isn't recompiled that means that any match that LOOKS like
      the end (but is not, because it is not an exact match to the beginning) will
      end up here.  A definite end match, but when `doEndMatch` tries to "reapply"
      the end rule and fails to match, we wind up here, and just silently ignore the end.

      This causes no real harm other than stopping a few times too many.
      */

      modeBuffer += lexeme;
      return lexeme.length;
    }

    const language = getLanguage(languageName);
    if (!language) {
      error(LANGUAGE_NOT_FOUND.replace("{}", languageName));
      throw new Error('Unknown language: "' + languageName + '"');
    }

    const md = compileLanguage(language, { plugins });
    let result = '';
    /** @type {CompiledMode} */
    let top = continuation || md;
    /** @type Record<string,CompiledMode> */
    const continuations = {}; // keep continuations for sub-languages
    const emitter = new options.__emitter(options);
    processContinuations();
    let modeBuffer = '';
    let relevance = 0;
    let index = 0;
    let iterations = 0;
    let resumeScanAtSamePosition = false;

    try {
      top.matcher.considerAll();

      for (;;) {
        iterations++;
        if (resumeScanAtSamePosition) {
          // only regexes not matched previously will now be
          // considered for a potential match
          resumeScanAtSamePosition = false;
        } else {
          top.matcher.considerAll();
        }
        top.matcher.lastIndex = index;

        const match = top.matcher.exec(codeToHighlight);
        // console.log("match", match[0], match.rule && match.rule.begin)

        if (!match) break;

        const beforeMatch = codeToHighlight.substring(index, match.index);
        const processedCount = processLexeme(beforeMatch, match);
        index = match.index + processedCount;
      }
      processLexeme(codeToHighlight.substr(index));
      emitter.closeAllNodes();
      emitter.finalize();
      result = emitter.toHTML();

      return {
        // avoid possible breakage with v10 clients expecting
        // this to always be an integer
        relevance: Math.floor(relevance),
        value: result,
        language: languageName,
        illegal: false,
        emitter: emitter,
        top: top
      };
    } catch (err) {
      if (err.message && err.message.includes('Illegal')) {
        return {
          illegal: true,
          illegalBy: {
            msg: err.message,
            context: codeToHighlight.slice(index - 100, index + 100),
            mode: err.mode
          },
          sofar: result,
          relevance: 0,
          value: escape$1(codeToHighlight),
          emitter: emitter
        };
      } else if (SAFE_MODE) {
        return {
          illegal: false,
          relevance: 0,
          value: escape$1(codeToHighlight),
          emitter: emitter,
          language: languageName,
          top: top,
          errorRaised: err
        };
      } else {
        throw err;
      }
    }
  }

  /**
   * returns a valid highlight result, without actually doing any actual work,
   * auto highlight starts with this and it's possible for small snippets that
   * auto-detection may not find a better match
   * @param {string} code
   * @returns {HighlightResult}
   */
  function justTextHighlightResult(code) {
    const result = {
      relevance: 0,
      emitter: new options.__emitter(options),
      value: escape$1(code),
      illegal: false,
      top: PLAINTEXT_LANGUAGE
    };
    result.emitter.addText(code);
    return result;
  }

  /**
  Highlighting with language detection. Accepts a string with the code to
  highlight. Returns an object with the following properties:

  - language (detected language)
  - relevance (int)
  - value (an HTML string with highlighting markup)
  - second_best (object with the same structure for second-best heuristically
    detected language, may be absent)

    @param {string} code
    @param {Array<string>} [languageSubset]
    @returns {AutoHighlightResult}
  */
  function highlightAuto(code, languageSubset) {
    languageSubset = languageSubset || options.languages || Object.keys(languages);
    const plaintext = justTextHighlightResult(code);

    const results = languageSubset.filter(getLanguage).filter(autoDetection).map(name =>
      _highlight(name, code, false)
    );
    results.unshift(plaintext); // plaintext is always an option

    const sorted = results.sort((a, b) => {
      // sort base on relevance
      if (a.relevance !== b.relevance) return b.relevance - a.relevance;

      // always award the tie to the base language
      // ie if C++ and Arduino are tied, it's more likely to be C++
      if (a.language && b.language) {
        if (getLanguage(a.language).supersetOf === b.language) {
          return 1;
        } else if (getLanguage(b.language).supersetOf === a.language) {
          return -1;
        }
      }

      // otherwise say they are equal, which has the effect of sorting on
      // relevance while preserving the original ordering - which is how ties
      // have historically been settled, ie the language that comes first always
      // wins in the case of a tie
      return 0;
    });

    const [best, secondBest] = sorted;

    /** @type {AutoHighlightResult} */
    const result = best;
    result.second_best = secondBest;

    return result;
  }

  /**
  Post-processing of the highlighted markup:

  - replace TABs with something more useful
  - replace real line-breaks with '<br>' for non-pre containers

    @param {string} html
    @returns {string}
  */
  function fixMarkup(html) {
    if (!(options.tabReplace || options.useBR)) {
      return html;
    }

    return html.replace(fixMarkupRe, match => {
      if (match === '\n') {
        return options.useBR ? '<br>' : match;
      } else if (options.tabReplace) {
        return match.replace(/\t/g, options.tabReplace);
      }
      return match;
    });
  }

  /**
   * Builds new class name for block given the language name
   *
   * @param {HTMLElement} element
   * @param {string} [currentLang]
   * @param {string} [resultLang]
   */
  function updateClassName(element, currentLang, resultLang) {
    const language = currentLang ? aliases[currentLang] : resultLang;

    element.classList.add("hljs");
    if (language) element.classList.add(language);
  }

  /** @type {HLJSPlugin} */
  const brPlugin = {
    "before:highlightElement": ({ el }) => {
      if (options.useBR) {
        el.innerHTML = el.innerHTML.replace(/\n/g, '').replace(/<br[ /]*>/g, '\n');
      }
    },
    "after:highlightElement": ({ result }) => {
      if (options.useBR) {
        result.value = result.value.replace(/\n/g, "<br>");
      }
    }
  };

  const TAB_REPLACE_RE = /^(<[^>]+>|\t)+/gm;
  /** @type {HLJSPlugin} */
  const tabReplacePlugin = {
    "after:highlightElement": ({ result }) => {
      if (options.tabReplace) {
        result.value = result.value.replace(TAB_REPLACE_RE, (m) =>
          m.replace(/\t/g, options.tabReplace)
        );
      }
    }
  };

  /**
   * Applies highlighting to a DOM node containing code. Accepts a DOM node and
   * two optional parameters for fixMarkup.
   *
   * @param {HighlightedHTMLElement} element - the HTML element to highlight
  */
  function highlightElement(element) {
    /** @type HTMLElement */
    let node = null;
    const language = blockLanguage(element);

    if (shouldNotHighlight(language)) return;

    // support for v10 API
    fire("before:highlightElement",
      { el: element, language: language });

    node = element;
    const text = node.textContent;
    const result = language ? highlight(text, { language, ignoreIllegals: true }) : highlightAuto(text);

    // support for v10 API
    fire("after:highlightElement", { el: element, result, text });

    element.innerHTML = result.value;
    updateClassName(element, language, result.language);
    element.result = {
      language: result.language,
      // TODO: remove with version 11.0
      re: result.relevance,
      relavance: result.relevance
    };
    if (result.second_best) {
      element.second_best = {
        language: result.second_best.language,
        // TODO: remove with version 11.0
        re: result.second_best.relevance,
        relavance: result.second_best.relevance
      };
    }
  }

  /**
   * Updates highlight.js global options with the passed options
   *
   * @param {Partial<HLJSOptions>} userOptions
   */
  function configure(userOptions) {
    if (userOptions.useBR) {
      deprecated("10.3.0", "'useBR' will be removed entirely in v11.0");
      deprecated("10.3.0", "Please see https://github.com/highlightjs/highlight.js/issues/2559");
    }
    options = inherit$1(options, userOptions);
  }

  /**
   * Highlights to all <pre><code> blocks on a page
   *
   * @type {Function & {called?: boolean}}
   */
  // TODO: remove v12, deprecated
  const initHighlighting = () => {
    if (initHighlighting.called) return;
    initHighlighting.called = true;

    deprecated("10.6.0", "initHighlighting() is deprecated.  Use highlightAll() instead.");

    const blocks = document.querySelectorAll('pre code');
    blocks.forEach(highlightElement);
  };

  // Higlights all when DOMContentLoaded fires
  // TODO: remove v12, deprecated
  function initHighlightingOnLoad() {
    deprecated("10.6.0", "initHighlightingOnLoad() is deprecated.  Use highlightAll() instead.");
    wantsHighlight = true;
  }

  let wantsHighlight = false;

  /**
   * auto-highlights all pre>code elements on the page
   */
  function highlightAll() {
    // if we are called too early in the loading process
    if (document.readyState === "loading") {
      wantsHighlight = true;
      return;
    }

    const blocks = document.querySelectorAll('pre code');
    blocks.forEach(highlightElement);
  }

  function boot() {
    // if a highlight was requested before DOM was loaded, do now
    if (wantsHighlight) highlightAll();
  }

  // make sure we are in the browser environment
  if (typeof window !== 'undefined' && window.addEventListener) {
    window.addEventListener('DOMContentLoaded', boot, false);
  }

  /**
   * Register a language grammar module
   *
   * @param {string} languageName
   * @param {LanguageFn} languageDefinition
   */
  function registerLanguage(languageName, languageDefinition) {
    let lang = null;
    try {
      lang = languageDefinition(hljs);
    } catch (error$1) {
      error("Language definition for '{}' could not be registered.".replace("{}", languageName));
      // hard or soft error
      if (!SAFE_MODE) { throw error$1; } else { error(error$1); }
      // languages that have serious errors are replaced with essentially a
      // "plaintext" stand-in so that the code blocks will still get normal
      // css classes applied to them - and one bad language won't break the
      // entire highlighter
      lang = PLAINTEXT_LANGUAGE;
    }
    // give it a temporary name if it doesn't have one in the meta-data
    if (!lang.name) lang.name = languageName;
    languages[languageName] = lang;
    lang.rawDefinition = languageDefinition.bind(null, hljs);

    if (lang.aliases) {
      registerAliases(lang.aliases, { languageName });
    }
  }

  /**
   * Remove a language grammar module
   *
   * @param {string} languageName
   */
  function unregisterLanguage(languageName) {
    delete languages[languageName];
    for (const alias of Object.keys(aliases)) {
      if (aliases[alias] === languageName) {
        delete aliases[alias];
      }
    }
  }

  /**
   * @returns {string[]} List of language internal names
   */
  function listLanguages() {
    return Object.keys(languages);
  }

  /**
    intended usage: When one language truly requires another

    Unlike `getLanguage`, this will throw when the requested language
    is not available.

    @param {string} name - name of the language to fetch/require
    @returns {Language | never}
  */
  function requireLanguage(name) {
    deprecated("10.4.0", "requireLanguage will be removed entirely in v11.");
    deprecated("10.4.0", "Please see https://github.com/highlightjs/highlight.js/pull/2844");

    const lang = getLanguage(name);
    if (lang) { return lang; }

    const err = new Error('The \'{}\' language is required, but not loaded.'.replace('{}', name));
    throw err;
  }

  /**
   * @param {string} name - name of the language to retrieve
   * @returns {Language | undefined}
   */
  function getLanguage(name) {
    name = (name || '').toLowerCase();
    return languages[name] || languages[aliases[name]];
  }

  /**
   *
   * @param {string|string[]} aliasList - single alias or list of aliases
   * @param {{languageName: string}} opts
   */
  function registerAliases(aliasList, { languageName }) {
    if (typeof aliasList === 'string') {
      aliasList = [aliasList];
    }
    aliasList.forEach(alias => { aliases[alias.toLowerCase()] = languageName; });
  }

  /**
   * Determines if a given language has auto-detection enabled
   * @param {string} name - name of the language
   */
  function autoDetection(name) {
    const lang = getLanguage(name);
    return lang && !lang.disableAutodetect;
  }

  /**
   * Upgrades the old highlightBlock plugins to the new
   * highlightElement API
   * @param {HLJSPlugin} plugin
   */
  function upgradePluginAPI(plugin) {
    // TODO: remove with v12
    if (plugin["before:highlightBlock"] && !plugin["before:highlightElement"]) {
      plugin["before:highlightElement"] = (data) => {
        plugin["before:highlightBlock"](
          Object.assign({ block: data.el }, data)
        );
      };
    }
    if (plugin["after:highlightBlock"] && !plugin["after:highlightElement"]) {
      plugin["after:highlightElement"] = (data) => {
        plugin["after:highlightBlock"](
          Object.assign({ block: data.el }, data)
        );
      };
    }
  }

  /**
   * @param {HLJSPlugin} plugin
   */
  function addPlugin(plugin) {
    upgradePluginAPI(plugin);
    plugins.push(plugin);
  }

  /**
   *
   * @param {PluginEvent} event
   * @param {any} args
   */
  function fire(event, args) {
    const cb = event;
    plugins.forEach(function(plugin) {
      if (plugin[cb]) {
        plugin[cb](args);
      }
    });
  }

  /**
  Note: fixMarkup is deprecated and will be removed entirely in v11

  @param {string} arg
  @returns {string}
  */
  function deprecateFixMarkup(arg) {
    deprecated("10.2.0", "fixMarkup will be removed entirely in v11.0");
    deprecated("10.2.0", "Please see https://github.com/highlightjs/highlight.js/issues/2534");

    return fixMarkup(arg);
  }

  /**
   *
   * @param {HighlightedHTMLElement} el
   */
  function deprecateHighlightBlock(el) {
    deprecated("10.7.0", "highlightBlock will be removed entirely in v12.0");
    deprecated("10.7.0", "Please use highlightElement now.");

    return highlightElement(el);
  }

  /* Interface definition */
  Object.assign(hljs, {
    highlight,
    highlightAuto,
    highlightAll,
    fixMarkup: deprecateFixMarkup,
    highlightElement,
    // TODO: Remove with v12 API
    highlightBlock: deprecateHighlightBlock,
    configure,
    initHighlighting,
    initHighlightingOnLoad,
    registerLanguage,
    unregisterLanguage,
    listLanguages,
    getLanguage,
    registerAliases,
    requireLanguage,
    autoDetection,
    inherit: inherit$1,
    addPlugin,
    // plugins for frameworks
    vuePlugin: BuildVuePlugin(hljs).VuePlugin
  });

  hljs.debugMode = function() { SAFE_MODE = false; };
  hljs.safeMode = function() { SAFE_MODE = true; };
  hljs.versionString = version;

  for (const key in MODES) {
    // @ts-ignore
    if (typeof MODES[key] === "object") {
      // @ts-ignore
      deepFreezeEs6(MODES[key]);
    }
  }

  // merge all the modes/regexs into our main object
  Object.assign(hljs, MODES);

  // built-in plugins, likely to be moved out of core in the future
  hljs.addPlugin(brPlugin); // slated to be removed in v11
  hljs.addPlugin(mergeHTMLPlugin);
  hljs.addPlugin(tabReplacePlugin);
  return hljs;
};

// export an "instance" of the highlighter
var highlight = HLJS({});

module.exports = highlight;


/***/ }),

/***/ "./node_modules/highlight.js/lib/languages/css.js":
/*!********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/css.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

const MODES = (hljs) => {
  return {
    IMPORTANT: {
      className: 'meta',
      begin: '!important'
    },
    HEXCOLOR: {
      className: 'number',
      begin: '#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})'
    },
    ATTRIBUTE_SELECTOR_MODE: {
      className: 'selector-attr',
      begin: /\[/,
      end: /\]/,
      illegal: '$',
      contains: [
        hljs.APOS_STRING_MODE,
        hljs.QUOTE_STRING_MODE
      ]
    }
  };
};

const TAGS = [
  'a',
  'abbr',
  'address',
  'article',
  'aside',
  'audio',
  'b',
  'blockquote',
  'body',
  'button',
  'canvas',
  'caption',
  'cite',
  'code',
  'dd',
  'del',
  'details',
  'dfn',
  'div',
  'dl',
  'dt',
  'em',
  'fieldset',
  'figcaption',
  'figure',
  'footer',
  'form',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'header',
  'hgroup',
  'html',
  'i',
  'iframe',
  'img',
  'input',
  'ins',
  'kbd',
  'label',
  'legend',
  'li',
  'main',
  'mark',
  'menu',
  'nav',
  'object',
  'ol',
  'p',
  'q',
  'quote',
  'samp',
  'section',
  'span',
  'strong',
  'summary',
  'sup',
  'table',
  'tbody',
  'td',
  'textarea',
  'tfoot',
  'th',
  'thead',
  'time',
  'tr',
  'ul',
  'var',
  'video'
];

const MEDIA_FEATURES = [
  'any-hover',
  'any-pointer',
  'aspect-ratio',
  'color',
  'color-gamut',
  'color-index',
  'device-aspect-ratio',
  'device-height',
  'device-width',
  'display-mode',
  'forced-colors',
  'grid',
  'height',
  'hover',
  'inverted-colors',
  'monochrome',
  'orientation',
  'overflow-block',
  'overflow-inline',
  'pointer',
  'prefers-color-scheme',
  'prefers-contrast',
  'prefers-reduced-motion',
  'prefers-reduced-transparency',
  'resolution',
  'scan',
  'scripting',
  'update',
  'width',
  // TODO: find a better solution?
  'min-width',
  'max-width',
  'min-height',
  'max-height'
];

// https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes
const PSEUDO_CLASSES = [
  'active',
  'any-link',
  'blank',
  'checked',
  'current',
  'default',
  'defined',
  'dir', // dir()
  'disabled',
  'drop',
  'empty',
  'enabled',
  'first',
  'first-child',
  'first-of-type',
  'fullscreen',
  'future',
  'focus',
  'focus-visible',
  'focus-within',
  'has', // has()
  'host', // host or host()
  'host-context', // host-context()
  'hover',
  'indeterminate',
  'in-range',
  'invalid',
  'is', // is()
  'lang', // lang()
  'last-child',
  'last-of-type',
  'left',
  'link',
  'local-link',
  'not', // not()
  'nth-child', // nth-child()
  'nth-col', // nth-col()
  'nth-last-child', // nth-last-child()
  'nth-last-col', // nth-last-col()
  'nth-last-of-type', //nth-last-of-type()
  'nth-of-type', //nth-of-type()
  'only-child',
  'only-of-type',
  'optional',
  'out-of-range',
  'past',
  'placeholder-shown',
  'read-only',
  'read-write',
  'required',
  'right',
  'root',
  'scope',
  'target',
  'target-within',
  'user-invalid',
  'valid',
  'visited',
  'where' // where()
];

// https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements
const PSEUDO_ELEMENTS = [
  'after',
  'backdrop',
  'before',
  'cue',
  'cue-region',
  'first-letter',
  'first-line',
  'grammar-error',
  'marker',
  'part',
  'placeholder',
  'selection',
  'slotted',
  'spelling-error'
];

const ATTRIBUTES = [
  'align-content',
  'align-items',
  'align-self',
  'animation',
  'animation-delay',
  'animation-direction',
  'animation-duration',
  'animation-fill-mode',
  'animation-iteration-count',
  'animation-name',
  'animation-play-state',
  'animation-timing-function',
  'auto',
  'backface-visibility',
  'background',
  'background-attachment',
  'background-clip',
  'background-color',
  'background-image',
  'background-origin',
  'background-position',
  'background-repeat',
  'background-size',
  'border',
  'border-bottom',
  'border-bottom-color',
  'border-bottom-left-radius',
  'border-bottom-right-radius',
  'border-bottom-style',
  'border-bottom-width',
  'border-collapse',
  'border-color',
  'border-image',
  'border-image-outset',
  'border-image-repeat',
  'border-image-slice',
  'border-image-source',
  'border-image-width',
  'border-left',
  'border-left-color',
  'border-left-style',
  'border-left-width',
  'border-radius',
  'border-right',
  'border-right-color',
  'border-right-style',
  'border-right-width',
  'border-spacing',
  'border-style',
  'border-top',
  'border-top-color',
  'border-top-left-radius',
  'border-top-right-radius',
  'border-top-style',
  'border-top-width',
  'border-width',
  'bottom',
  'box-decoration-break',
  'box-shadow',
  'box-sizing',
  'break-after',
  'break-before',
  'break-inside',
  'caption-side',
  'clear',
  'clip',
  'clip-path',
  'color',
  'column-count',
  'column-fill',
  'column-gap',
  'column-rule',
  'column-rule-color',
  'column-rule-style',
  'column-rule-width',
  'column-span',
  'column-width',
  'columns',
  'content',
  'counter-increment',
  'counter-reset',
  'cursor',
  'direction',
  'display',
  'empty-cells',
  'filter',
  'flex',
  'flex-basis',
  'flex-direction',
  'flex-flow',
  'flex-grow',
  'flex-shrink',
  'flex-wrap',
  'float',
  'font',
  'font-display',
  'font-family',
  'font-feature-settings',
  'font-kerning',
  'font-language-override',
  'font-size',
  'font-size-adjust',
  'font-smoothing',
  'font-stretch',
  'font-style',
  'font-variant',
  'font-variant-ligatures',
  'font-variation-settings',
  'font-weight',
  'height',
  'hyphens',
  'icon',
  'image-orientation',
  'image-rendering',
  'image-resolution',
  'ime-mode',
  'inherit',
  'initial',
  'justify-content',
  'left',
  'letter-spacing',
  'line-height',
  'list-style',
  'list-style-image',
  'list-style-position',
  'list-style-type',
  'margin',
  'margin-bottom',
  'margin-left',
  'margin-right',
  'margin-top',
  'marks',
  'mask',
  'max-height',
  'max-width',
  'min-height',
  'min-width',
  'nav-down',
  'nav-index',
  'nav-left',
  'nav-right',
  'nav-up',
  'none',
  'normal',
  'object-fit',
  'object-position',
  'opacity',
  'order',
  'orphans',
  'outline',
  'outline-color',
  'outline-offset',
  'outline-style',
  'outline-width',
  'overflow',
  'overflow-wrap',
  'overflow-x',
  'overflow-y',
  'padding',
  'padding-bottom',
  'padding-left',
  'padding-right',
  'padding-top',
  'page-break-after',
  'page-break-before',
  'page-break-inside',
  'perspective',
  'perspective-origin',
  'pointer-events',
  'position',
  'quotes',
  'resize',
  'right',
  'src', // @font-face
  'tab-size',
  'table-layout',
  'text-align',
  'text-align-last',
  'text-decoration',
  'text-decoration-color',
  'text-decoration-line',
  'text-decoration-style',
  'text-indent',
  'text-overflow',
  'text-rendering',
  'text-shadow',
  'text-transform',
  'text-underline-position',
  'top',
  'transform',
  'transform-origin',
  'transform-style',
  'transition',
  'transition-delay',
  'transition-duration',
  'transition-property',
  'transition-timing-function',
  'unicode-bidi',
  'vertical-align',
  'visibility',
  'white-space',
  'widows',
  'width',
  'word-break',
  'word-spacing',
  'word-wrap',
  'z-index'
  // reverse makes sure longer attributes `font-weight` are matched fully
  // instead of getting false positives on say `font`
].reverse();

/**
 * @param {string} value
 * @returns {RegExp}
 * */

/**
 * @param {RegExp | string } re
 * @returns {string}
 */
function source(re) {
  if (!re) return null;
  if (typeof re === "string") return re;

  return re.source;
}

/**
 * @param {RegExp | string } re
 * @returns {string}
 */
function lookahead(re) {
  return concat('(?=', re, ')');
}

/**
 * @param {...(RegExp | string) } args
 * @returns {string}
 */
function concat(...args) {
  const joined = args.map((x) => source(x)).join("");
  return joined;
}

/*
Language: CSS
Category: common, css
Website: https://developer.mozilla.org/en-US/docs/Web/CSS
*/

/** @type LanguageFn */
function css(hljs) {
  const modes = MODES(hljs);
  const FUNCTION_DISPATCH = {
    className: "built_in",
    begin: /[\w-]+(?=\()/
  };
  const VENDOR_PREFIX = {
    begin: /-(webkit|moz|ms|o)-(?=[a-z])/
  };
  const AT_MODIFIERS = "and or not only";
  const AT_PROPERTY_RE = /@-?\w[\w]*(-\w+)*/; // @-webkit-keyframes
  const IDENT_RE = '[a-zA-Z-][a-zA-Z0-9_-]*';
  const STRINGS = [
    hljs.APOS_STRING_MODE,
    hljs.QUOTE_STRING_MODE
  ];

  return {
    name: 'CSS',
    case_insensitive: true,
    illegal: /[=|'\$]/,
    keywords: {
      keyframePosition: "from to"
    },
    classNameAliases: {
      // for visual continuity with `tag {}` and because we
      // don't have a great class for this?
      keyframePosition: "selector-tag"
    },
    contains: [
      hljs.C_BLOCK_COMMENT_MODE,
      VENDOR_PREFIX,
      // to recognize keyframe 40% etc which are outside the scope of our
      // attribute value mode
      hljs.CSS_NUMBER_MODE,
      {
        className: 'selector-id',
        begin: /#[A-Za-z0-9_-]+/,
        relevance: 0
      },
      {
        className: 'selector-class',
        begin: '\\.' + IDENT_RE,
        relevance: 0
      },
      modes.ATTRIBUTE_SELECTOR_MODE,
      {
        className: 'selector-pseudo',
        variants: [
          {
            begin: ':(' + PSEUDO_CLASSES.join('|') + ')'
          },
          {
            begin: '::(' + PSEUDO_ELEMENTS.join('|') + ')'
          }
        ]
      },
      // we may actually need this (12/2020)
      // { // pseudo-selector params
      //   begin: /\(/,
      //   end: /\)/,
      //   contains: [ hljs.CSS_NUMBER_MODE ]
      // },
      {
        className: 'attribute',
        begin: '\\b(' + ATTRIBUTES.join('|') + ')\\b'
      },
      // attribute values
      {
        begin: ':',
        end: '[;}]',
        contains: [
          modes.HEXCOLOR,
          modes.IMPORTANT,
          hljs.CSS_NUMBER_MODE,
          ...STRINGS,
          // needed to highlight these as strings and to avoid issues with
          // illegal characters that might be inside urls that would tigger the
          // languages illegal stack
          {
            begin: /(url|data-uri)\(/,
            end: /\)/,
            relevance: 0, // from keywords
            keywords: {
              built_in: "url data-uri"
            },
            contains: [
              {
                className: "string",
                // any character other than `)` as in `url()` will be the start
                // of a string, which ends with `)` (from the parent mode)
                begin: /[^)]/,
                endsWithParent: true,
                excludeEnd: true
              }
            ]
          },
          FUNCTION_DISPATCH
        ]
      },
      {
        begin: lookahead(/@/),
        end: '[{;]',
        relevance: 0,
        illegal: /:/, // break on Less variables @var: ...
        contains: [
          {
            className: 'keyword',
            begin: AT_PROPERTY_RE
          },
          {
            begin: /\s/,
            endsWithParent: true,
            excludeEnd: true,
            relevance: 0,
            keywords: {
              $pattern: /[a-z-]+/,
              keyword: AT_MODIFIERS,
              attribute: MEDIA_FEATURES.join(" ")
            },
            contains: [
              {
                begin: /[a-z-]+(?=:)/,
                className: "attribute"
              },
              ...STRINGS,
              hljs.CSS_NUMBER_MODE
            ]
          }
        ]
      },
      {
        className: 'selector-tag',
        begin: '\\b(' + TAGS.join('|') + ')\\b'
      }
    ]
  };
}

module.exports = css;


/***/ }),

/***/ "./node_modules/highlight.js/lib/languages/xml.js":
/*!********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/xml.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @param {string} value
 * @returns {RegExp}
 * */

/**
 * @param {RegExp | string } re
 * @returns {string}
 */
function source(re) {
  if (!re) return null;
  if (typeof re === "string") return re;

  return re.source;
}

/**
 * @param {RegExp | string } re
 * @returns {string}
 */
function lookahead(re) {
  return concat('(?=', re, ')');
}

/**
 * @param {RegExp | string } re
 * @returns {string}
 */
function optional(re) {
  return concat('(', re, ')?');
}

/**
 * @param {...(RegExp | string) } args
 * @returns {string}
 */
function concat(...args) {
  const joined = args.map((x) => source(x)).join("");
  return joined;
}

/**
 * Any of the passed expresssions may match
 *
 * Creates a huge this | this | that | that match
 * @param {(RegExp | string)[] } args
 * @returns {string}
 */
function either(...args) {
  const joined = '(' + args.map((x) => source(x)).join("|") + ")";
  return joined;
}

/*
Language: HTML, XML
Website: https://www.w3.org/XML/
Category: common
Audit: 2020
*/

/** @type LanguageFn */
function xml(hljs) {
  // Element names can contain letters, digits, hyphens, underscores, and periods
  const TAG_NAME_RE = concat(/[A-Z_]/, optional(/[A-Z0-9_.-]*:/), /[A-Z0-9_.-]*/);
  const XML_IDENT_RE = /[A-Za-z0-9._:-]+/;
  const XML_ENTITIES = {
    className: 'symbol',
    begin: /&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/
  };
  const XML_META_KEYWORDS = {
    begin: /\s/,
    contains: [
      {
        className: 'meta-keyword',
        begin: /#?[a-z_][a-z1-9_-]+/,
        illegal: /\n/
      }
    ]
  };
  const XML_META_PAR_KEYWORDS = hljs.inherit(XML_META_KEYWORDS, {
    begin: /\(/,
    end: /\)/
  });
  const APOS_META_STRING_MODE = hljs.inherit(hljs.APOS_STRING_MODE, {
    className: 'meta-string'
  });
  const QUOTE_META_STRING_MODE = hljs.inherit(hljs.QUOTE_STRING_MODE, {
    className: 'meta-string'
  });
  const TAG_INTERNALS = {
    endsWithParent: true,
    illegal: /</,
    relevance: 0,
    contains: [
      {
        className: 'attr',
        begin: XML_IDENT_RE,
        relevance: 0
      },
      {
        begin: /=\s*/,
        relevance: 0,
        contains: [
          {
            className: 'string',
            endsParent: true,
            variants: [
              {
                begin: /"/,
                end: /"/,
                contains: [ XML_ENTITIES ]
              },
              {
                begin: /'/,
                end: /'/,
                contains: [ XML_ENTITIES ]
              },
              {
                begin: /[^\s"'=<>`]+/
              }
            ]
          }
        ]
      }
    ]
  };
  return {
    name: 'HTML, XML',
    aliases: [
      'html',
      'xhtml',
      'rss',
      'atom',
      'xjb',
      'xsd',
      'xsl',
      'plist',
      'wsf',
      'svg'
    ],
    case_insensitive: true,
    contains: [
      {
        className: 'meta',
        begin: /<![a-z]/,
        end: />/,
        relevance: 10,
        contains: [
          XML_META_KEYWORDS,
          QUOTE_META_STRING_MODE,
          APOS_META_STRING_MODE,
          XML_META_PAR_KEYWORDS,
          {
            begin: /\[/,
            end: /\]/,
            contains: [
              {
                className: 'meta',
                begin: /<![a-z]/,
                end: />/,
                contains: [
                  XML_META_KEYWORDS,
                  XML_META_PAR_KEYWORDS,
                  QUOTE_META_STRING_MODE,
                  APOS_META_STRING_MODE
                ]
              }
            ]
          }
        ]
      },
      hljs.COMMENT(
        /<!--/,
        /-->/,
        {
          relevance: 10
        }
      ),
      {
        begin: /<!\[CDATA\[/,
        end: /\]\]>/,
        relevance: 10
      },
      XML_ENTITIES,
      {
        className: 'meta',
        begin: /<\?xml/,
        end: /\?>/,
        relevance: 10
      },
      {
        className: 'tag',
        /*
        The lookahead pattern (?=...) ensures that 'begin' only matches
        '<style' as a single word, followed by a whitespace or an
        ending braket. The '$' is needed for the lexeme to be recognized
        by hljs.subMode() that tests lexemes outside the stream.
        */
        begin: /<style(?=\s|>)/,
        end: />/,
        keywords: {
          name: 'style'
        },
        contains: [ TAG_INTERNALS ],
        starts: {
          end: /<\/style>/,
          returnEnd: true,
          subLanguage: [
            'css',
            'xml'
          ]
        }
      },
      {
        className: 'tag',
        // See the comment in the <style tag about the lookahead pattern
        begin: /<script(?=\s|>)/,
        end: />/,
        keywords: {
          name: 'script'
        },
        contains: [ TAG_INTERNALS ],
        starts: {
          end: /<\/script>/,
          returnEnd: true,
          subLanguage: [
            'javascript',
            'handlebars',
            'xml'
          ]
        }
      },
      // we need this for now for jSX
      {
        className: 'tag',
        begin: /<>|<\/>/
      },
      // open tag
      {
        className: 'tag',
        begin: concat(
          /</,
          lookahead(concat(
            TAG_NAME_RE,
            // <tag/>
            // <tag>
            // <tag ...
            either(/\/>/, />/, /\s/)
          ))
        ),
        end: /\/?>/,
        contains: [
          {
            className: 'name',
            begin: TAG_NAME_RE,
            relevance: 0,
            starts: TAG_INTERNALS
          }
        ]
      },
      // close tag
      {
        className: 'tag',
        begin: concat(
          /<\//,
          lookahead(concat(
            TAG_NAME_RE, />/
          ))
        ),
        contains: [
          {
            className: 'name',
            begin: TAG_NAME_RE,
            relevance: 0
          },
          {
            begin: />/,
            relevance: 0,
            endsParent: true
          }
        ]
      }
    ]
  };
}

module.exports = xml;


/***/ }),

/***/ "./node_modules/highlight.js/styles/atom-one-dark.css":
/*!************************************************************!*\
  !*** ./node_modules/highlight.js/styles/atom-one-dark.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_cjs_js_atom_one_dark_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../css-loader/dist/cjs.js!./atom-one-dark.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/highlight.js/styles/atom-one-dark.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_atom_one_dark_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_css_loader_dist_cjs_js_atom_one_dark_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/preact/compat/dist/compat.module.js":
/*!**********************************************************!*\
  !*** ./node_modules/preact/compat/dist/compat.module.js ***!
  \**********************************************************/
/*! exports provided: useState, useReducer, useEffect, useLayoutEffect, useRef, useImperativeHandle, useMemo, useCallback, useContext, useDebugValue, useErrorBoundary, createElement, createContext, createRef, Fragment, Component, default, version, Children, render, hydrate, unmountComponentAtNode, createPortal, createFactory, cloneElement, isValidElement, findDOMNode, PureComponent, memo, forwardRef, flushSync, unstable_batchedUpdates, StrictMode, Suspense, SuspenseList, lazy, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return X; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Children", function() { return k; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hydrate", function() { return B; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unmountComponentAtNode", function() { return rn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPortal", function() { return W; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFactory", function() { return nn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneElement", function() { return en; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidElement", function() { return tn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findDOMNode", function() { return un; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PureComponent", function() { return E; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "memo", function() { return g; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forwardRef", function() { return x; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flushSync", function() { return ln; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unstable_batchedUpdates", function() { return on; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StrictMode", function() { return fn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Suspense", function() { return L; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuspenseList", function() { return M; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lazy", function() { return F; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED", function() { return Q; });
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact/hooks */ "./node_modules/preact/hooks/dist/hooks.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useState", function() { return preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useReducer", function() { return preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useReducer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useEffect", function() { return preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useEffect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useLayoutEffect", function() { return preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useRef", function() { return preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useImperativeHandle", function() { return preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useImperativeHandle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useMemo", function() { return preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useMemo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useCallback", function() { return preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useCallback"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useContext", function() { return preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDebugValue", function() { return preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useDebugValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useErrorBoundary", function() { return preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useErrorBoundary"]; });

/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return preact__WEBPACK_IMPORTED_MODULE_1__["createElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createContext", function() { return preact__WEBPACK_IMPORTED_MODULE_1__["createContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createRef", function() { return preact__WEBPACK_IMPORTED_MODULE_1__["createRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Fragment", function() { return preact__WEBPACK_IMPORTED_MODULE_1__["Fragment"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return preact__WEBPACK_IMPORTED_MODULE_1__["Component"]; });

function S(n,t){for(var e in t)n[e]=t[e];return n}function C(n,t){for(var e in n)if("__source"!==e&&!(e in t))return!0;for(var r in t)if("__source"!==r&&n[r]!==t[r])return!0;return!1}function E(n){this.props=n}function g(n,t){function e(n){var e=this.props.ref,r=e==n.ref;return!r&&e&&(e.call?e(null):e.current=null),t?!t(this.props,n)||!r:C(this.props,n)}function r(t){return this.shouldComponentUpdate=e,Object(preact__WEBPACK_IMPORTED_MODULE_1__["createElement"])(n,t)}return r.displayName="Memo("+(n.displayName||n.name)+")",r.prototype.isReactComponent=!0,r.__f=!0,r}(E.prototype=new preact__WEBPACK_IMPORTED_MODULE_1__["Component"]).isPureReactComponent=!0,E.prototype.shouldComponentUpdate=function(n,t){return C(this.props,n)||C(this.state,t)};var w=preact__WEBPACK_IMPORTED_MODULE_1__["options"].__b;preact__WEBPACK_IMPORTED_MODULE_1__["options"].__b=function(n){n.type&&n.type.__f&&n.ref&&(n.props.ref=n.ref,n.ref=null),w&&w(n)};var R="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function x(n){function t(t,e){var r=S({},t);return delete r.ref,n(r,(e=t.ref||e)&&("object"!=typeof e||"current"in e)?e:null)}return t.$$typeof=R,t.render=t,t.prototype.isReactComponent=t.__f=!0,t.displayName="ForwardRef("+(n.displayName||n.name)+")",t}var N=function(n,t){return null==n?null:Object(preact__WEBPACK_IMPORTED_MODULE_1__["toChildArray"])(Object(preact__WEBPACK_IMPORTED_MODULE_1__["toChildArray"])(n).map(t))},k={map:N,forEach:N,count:function(n){return n?Object(preact__WEBPACK_IMPORTED_MODULE_1__["toChildArray"])(n).length:0},only:function(n){var t=Object(preact__WEBPACK_IMPORTED_MODULE_1__["toChildArray"])(n);if(1!==t.length)throw"Children.only";return t[0]},toArray:preact__WEBPACK_IMPORTED_MODULE_1__["toChildArray"]},A=preact__WEBPACK_IMPORTED_MODULE_1__["options"].__e;preact__WEBPACK_IMPORTED_MODULE_1__["options"].__e=function(n,t,e){if(n.then)for(var r,u=t;u=u.__;)if((r=u.__c)&&r.__c)return null==t.__e&&(t.__e=e.__e,t.__k=e.__k),r.__c(n,t);A(n,t,e)};var O=preact__WEBPACK_IMPORTED_MODULE_1__["options"].unmount;function L(){this.__u=0,this.t=null,this.__b=null}function U(n){var t=n.__.__c;return t&&t.__e&&t.__e(n)}function F(n){var t,e,r;function u(u){if(t||(t=n()).then(function(n){e=n.default||n},function(n){r=n}),r)throw r;if(!e)throw t;return Object(preact__WEBPACK_IMPORTED_MODULE_1__["createElement"])(e,u)}return u.displayName="Lazy",u.__f=!0,u}function M(){this.u=null,this.o=null}preact__WEBPACK_IMPORTED_MODULE_1__["options"].unmount=function(n){var t=n.__c;t&&t.__R&&t.__R(),t&&!0===n.__h&&(n.type=null),O&&O(n)},(L.prototype=new preact__WEBPACK_IMPORTED_MODULE_1__["Component"]).__c=function(n,t){var e=t.__c,r=this;null==r.t&&(r.t=[]),r.t.push(e);var u=U(r.__v),o=!1,i=function(){o||(o=!0,e.__R=null,u?u(l):l())};e.__R=i;var l=function(){if(!--r.__u){if(r.state.__e){var n=r.state.__e;r.__v.__k[0]=function n(t,e,r){return t&&(t.__v=null,t.__k=t.__k&&t.__k.map(function(t){return n(t,e,r)}),t.__c&&t.__c.__P===e&&(t.__e&&r.insertBefore(t.__e,t.__d),t.__c.__e=!0,t.__c.__P=r)),t}(n,n.__c.__P,n.__c.__O)}var t;for(r.setState({__e:r.__b=null});t=r.t.pop();)t.forceUpdate()}},f=!0===t.__h;r.__u++||f||r.setState({__e:r.__b=r.__v.__k[0]}),n.then(i,i)},L.prototype.componentWillUnmount=function(){this.t=[]},L.prototype.render=function(n,t){if(this.__b){if(this.__v.__k){var e=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=function n(t,e,r){return t&&(t.__c&&t.__c.__H&&(t.__c.__H.__.forEach(function(n){"function"==typeof n.__c&&n.__c()}),t.__c.__H=null),null!=(t=S({},t)).__c&&(t.__c.__P===r&&(t.__c.__P=e),t.__c=null),t.__k=t.__k&&t.__k.map(function(t){return n(t,e,r)})),t}(this.__b,e,r.__O=r.__P)}this.__b=null}var u=t.__e&&Object(preact__WEBPACK_IMPORTED_MODULE_1__["createElement"])(preact__WEBPACK_IMPORTED_MODULE_1__["Fragment"],null,n.fallback);return u&&(u.__h=null),[Object(preact__WEBPACK_IMPORTED_MODULE_1__["createElement"])(preact__WEBPACK_IMPORTED_MODULE_1__["Fragment"],null,t.__e?null:n.children),u]};var T=function(n,t,e){if(++e[1]===e[0]&&n.o.delete(t),n.props.revealOrder&&("t"!==n.props.revealOrder[0]||!n.o.size))for(e=n.u;e;){for(;e.length>3;)e.pop()();if(e[1]<e[0])break;n.u=e=e[2]}};function D(n){return this.getChildContext=function(){return n.context},n.children}function I(n){var t=this,e=n.i;t.componentWillUnmount=function(){Object(preact__WEBPACK_IMPORTED_MODULE_1__["render"])(null,t.l),t.l=null,t.i=null},t.i&&t.i!==e&&t.componentWillUnmount(),n.__v?(t.l||(t.i=e,t.l={nodeType:1,parentNode:e,childNodes:[],appendChild:function(n){this.childNodes.push(n),t.i.appendChild(n)},insertBefore:function(n,e){this.childNodes.push(n),t.i.appendChild(n)},removeChild:function(n){this.childNodes.splice(this.childNodes.indexOf(n)>>>1,1),t.i.removeChild(n)}}),Object(preact__WEBPACK_IMPORTED_MODULE_1__["render"])(Object(preact__WEBPACK_IMPORTED_MODULE_1__["createElement"])(D,{context:t.context},n.__v),t.l)):t.l&&t.componentWillUnmount()}function W(n,t){return Object(preact__WEBPACK_IMPORTED_MODULE_1__["createElement"])(I,{__v:n,i:t})}(M.prototype=new preact__WEBPACK_IMPORTED_MODULE_1__["Component"]).__e=function(n){var t=this,e=U(t.__v),r=t.o.get(n);return r[0]++,function(u){var o=function(){t.props.revealOrder?(r.push(u),T(t,n,r)):u()};e?e(o):o()}},M.prototype.render=function(n){this.u=null,this.o=new Map;var t=Object(preact__WEBPACK_IMPORTED_MODULE_1__["toChildArray"])(n.children);n.revealOrder&&"b"===n.revealOrder[0]&&t.reverse();for(var e=t.length;e--;)this.o.set(t[e],this.u=[1,0,this.u]);return n.children},M.prototype.componentDidUpdate=M.prototype.componentDidMount=function(){var n=this;this.o.forEach(function(t,e){T(n,e,t)})};var j="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,P=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,V=function(n){return("undefined"!=typeof Symbol&&"symbol"==typeof Symbol()?/fil|che|rad/i:/fil|che|ra/i).test(n)};function z(n,t,e){return null==t.__k&&(t.textContent=""),Object(preact__WEBPACK_IMPORTED_MODULE_1__["render"])(n,t),"function"==typeof e&&e(),n?n.__c:null}function B(n,t,e){return Object(preact__WEBPACK_IMPORTED_MODULE_1__["hydrate"])(n,t),"function"==typeof e&&e(),n?n.__c:null}preact__WEBPACK_IMPORTED_MODULE_1__["Component"].prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(n){Object.defineProperty(preact__WEBPACK_IMPORTED_MODULE_1__["Component"].prototype,n,{configurable:!0,get:function(){return this["UNSAFE_"+n]},set:function(t){Object.defineProperty(this,n,{configurable:!0,writable:!0,value:t})}})});var H=preact__WEBPACK_IMPORTED_MODULE_1__["options"].event;function Z(){}function Y(){return this.cancelBubble}function $(){return this.defaultPrevented}preact__WEBPACK_IMPORTED_MODULE_1__["options"].event=function(n){return H&&(n=H(n)),n.persist=Z,n.isPropagationStopped=Y,n.isDefaultPrevented=$,n.nativeEvent=n};var q,G={configurable:!0,get:function(){return this.class}},J=preact__WEBPACK_IMPORTED_MODULE_1__["options"].vnode;preact__WEBPACK_IMPORTED_MODULE_1__["options"].vnode=function(n){var t=n.type,e=n.props,r=e;if("string"==typeof t){for(var u in r={},e){var o=e[u];"value"===u&&"defaultValue"in e&&null==o||("defaultValue"===u&&"value"in e&&null==e.value?u="value":"download"===u&&!0===o?o="":/ondoubleclick/i.test(u)?u="ondblclick":/^onchange(textarea|input)/i.test(u+t)&&!V(e.type)?u="oninput":/^on(Ani|Tra|Tou|BeforeInp)/.test(u)?u=u.toLowerCase():P.test(u)?u=u.replace(/[A-Z0-9]/,"-$&").toLowerCase():null===o&&(o=void 0),r[u]=o)}"select"==t&&r.multiple&&Array.isArray(r.value)&&(r.value=Object(preact__WEBPACK_IMPORTED_MODULE_1__["toChildArray"])(e.children).forEach(function(n){n.props.selected=-1!=r.value.indexOf(n.props.value)})),"select"==t&&null!=r.defaultValue&&(r.value=Object(preact__WEBPACK_IMPORTED_MODULE_1__["toChildArray"])(e.children).forEach(function(n){n.props.selected=r.multiple?-1!=r.defaultValue.indexOf(n.props.value):r.defaultValue==n.props.value})),n.props=r}t&&e.class!=e.className&&(G.enumerable="className"in e,null!=e.className&&(r.class=e.className),Object.defineProperty(r,"className",G)),n.$$typeof=j,J&&J(n)};var K=preact__WEBPACK_IMPORTED_MODULE_1__["options"].__r;preact__WEBPACK_IMPORTED_MODULE_1__["options"].__r=function(n){K&&K(n),q=n.__c};var Q={ReactCurrentDispatcher:{current:{readContext:function(n){return q.__n[n.__c].props.value}}}},X="17.0.2";function nn(n){return preact__WEBPACK_IMPORTED_MODULE_1__["createElement"].bind(null,n)}function tn(n){return!!n&&n.$$typeof===j}function en(n){return tn(n)?preact__WEBPACK_IMPORTED_MODULE_1__["cloneElement"].apply(null,arguments):n}function rn(n){return!!n.__k&&(Object(preact__WEBPACK_IMPORTED_MODULE_1__["render"])(null,n),!0)}function un(n){return n&&(n.base||1===n.nodeType&&n)||null}var on=function(n,t){return n(t)},ln=function(n,t){return n(t)},fn=preact__WEBPACK_IMPORTED_MODULE_1__["Fragment"];/* harmony default export */ __webpack_exports__["default"] = ({useState:preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useState"],useReducer:preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useReducer"],useEffect:preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useEffect"],useLayoutEffect:preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"],useRef:preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useRef"],useImperativeHandle:preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useImperativeHandle"],useMemo:preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useMemo"],useCallback:preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useCallback"],useContext:preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useContext"],useDebugValue:preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useDebugValue"],version:"17.0.2",Children:k,render:z,hydrate:B,unmountComponentAtNode:rn,createPortal:W,createElement:preact__WEBPACK_IMPORTED_MODULE_1__["createElement"],createContext:preact__WEBPACK_IMPORTED_MODULE_1__["createContext"],createFactory:nn,cloneElement:en,createRef:preact__WEBPACK_IMPORTED_MODULE_1__["createRef"],Fragment:preact__WEBPACK_IMPORTED_MODULE_1__["Fragment"],isValidElement:tn,findDOMNode:un,Component:preact__WEBPACK_IMPORTED_MODULE_1__["Component"],PureComponent:E,memo:g,forwardRef:x,flushSync:ln,unstable_batchedUpdates:on,StrictMode:preact__WEBPACK_IMPORTED_MODULE_1__["Fragment"],Suspense:L,SuspenseList:M,lazy:F,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:Q});
//# sourceMappingURL=compat.module.js.map


/***/ }),

/***/ "./node_modules/preact/dist/preact.module.js":
/*!***************************************************!*\
  !*** ./node_modules/preact/dist/preact.module.js ***!
  \***************************************************/
/*! exports provided: render, hydrate, createElement, h, Fragment, createRef, isValidElement, Component, cloneElement, createContext, toChildArray, options */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return S; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hydrate", function() { return q; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return v; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return v; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fragment", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRef", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidElement", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return _; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneElement", function() { return B; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createContext", function() { return D; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toChildArray", function() { return A; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "options", function() { return l; });
var n,l,u,i,t,o,r,f,e={},c=[],s=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function a(n,l){for(var u in l)n[u]=l[u];return n}function h(n){var l=n.parentNode;l&&l.removeChild(n)}function v(l,u,i){var t,o,r,f={};for(r in u)"key"==r?t=u[r]:"ref"==r?o=u[r]:f[r]=u[r];if(arguments.length>2&&(f.children=arguments.length>3?n.call(arguments,2):i),"function"==typeof l&&null!=l.defaultProps)for(r in l.defaultProps)void 0===f[r]&&(f[r]=l.defaultProps[r]);return y(l,f,t,o,null)}function y(n,i,t,o,r){var f={type:n,props:i,key:t,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==r?++u:r};return null!=l.vnode&&l.vnode(f),f}function p(){return{current:null}}function d(n){return n.children}function _(n,l){this.props=n,this.context=l}function k(n,l){if(null==l)return n.__?k(n.__,n.__.__k.indexOf(n)+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return"function"==typeof n.type?k(n):null}function b(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return b(n)}}function m(n){(!n.__d&&(n.__d=!0)&&t.push(n)&&!g.__r++||r!==l.debounceRendering)&&((r=l.debounceRendering)||o)(g)}function g(){for(var n;g.__r=t.length;)n=t.sort(function(n,l){return n.__v.__b-l.__v.__b}),t=[],n.some(function(n){var l,u,i,t,o,r;n.__d&&(o=(t=(l=n).__v).__e,(r=l.__P)&&(u=[],(i=a({},t)).__v=t.__v+1,j(r,t,i,l.__n,void 0!==r.ownerSVGElement,null!=t.__h?[o]:null,u,null==o?k(t):o,t.__h),z(u,t),t.__e!=o&&b(t)))})}function w(n,l,u,i,t,o,r,f,s,a){var h,v,p,_,b,m,g,w=i&&i.__k||c,A=w.length;for(u.__k=[],h=0;h<l.length;h++)if(null!=(_=u.__k[h]=null==(_=l[h])||"boolean"==typeof _?null:"string"==typeof _||"number"==typeof _||"bigint"==typeof _?y(null,_,null,null,_):Array.isArray(_)?y(d,{children:_},null,null,null):_.__b>0?y(_.type,_.props,_.key,null,_.__v):_)){if(_.__=u,_.__b=u.__b+1,null===(p=w[h])||p&&_.key==p.key&&_.type===p.type)w[h]=void 0;else for(v=0;v<A;v++){if((p=w[v])&&_.key==p.key&&_.type===p.type){w[v]=void 0;break}p=null}j(n,_,p=p||e,t,o,r,f,s,a),b=_.__e,(v=_.ref)&&p.ref!=v&&(g||(g=[]),p.ref&&g.push(p.ref,null,_),g.push(v,_.__c||b,_)),null!=b?(null==m&&(m=b),"function"==typeof _.type&&null!=_.__k&&_.__k===p.__k?_.__d=s=x(_,s,n):s=P(n,_,p,w,b,s),a||"option"!==u.type?"function"==typeof u.type&&(u.__d=s):n.value=""):s&&p.__e==s&&s.parentNode!=n&&(s=k(p))}for(u.__e=m,h=A;h--;)null!=w[h]&&("function"==typeof u.type&&null!=w[h].__e&&w[h].__e==u.__d&&(u.__d=k(i,h+1)),N(w[h],w[h]));if(g)for(h=0;h<g.length;h++)M(g[h],g[++h],g[++h])}function x(n,l,u){var i,t;for(i=0;i<n.__k.length;i++)(t=n.__k[i])&&(t.__=n,l="function"==typeof t.type?x(t,l,u):P(u,t,t,n.__k,t.__e,l));return l}function A(n,l){return l=l||[],null==n||"boolean"==typeof n||(Array.isArray(n)?n.some(function(n){A(n,l)}):l.push(n)),l}function P(n,l,u,i,t,o){var r,f,e;if(void 0!==l.__d)r=l.__d,l.__d=void 0;else if(null==u||t!=o||null==t.parentNode)n:if(null==o||o.parentNode!==n)n.appendChild(t),r=null;else{for(f=o,e=0;(f=f.nextSibling)&&e<i.length;e+=2)if(f==t)break n;n.insertBefore(t,o),r=o}return void 0!==r?r:t.nextSibling}function C(n,l,u,i,t){var o;for(o in u)"children"===o||"key"===o||o in l||H(n,o,null,u[o],i);for(o in l)t&&"function"!=typeof l[o]||"children"===o||"key"===o||"value"===o||"checked"===o||u[o]===l[o]||H(n,o,l[o],u[o],i)}function $(n,l,u){"-"===l[0]?n.setProperty(l,u):n[l]=null==u?"":"number"!=typeof u||s.test(l)?u:u+"px"}function H(n,l,u,i,t){var o;n:if("style"===l)if("string"==typeof u)n.style.cssText=u;else{if("string"==typeof i&&(n.style.cssText=i=""),i)for(l in i)u&&l in u||$(n.style,l,"");if(u)for(l in u)i&&u[l]===i[l]||$(n.style,l,u[l])}else if("o"===l[0]&&"n"===l[1])o=l!==(l=l.replace(/Capture$/,"")),l=l.toLowerCase()in n?l.toLowerCase().slice(2):l.slice(2),n.l||(n.l={}),n.l[l+o]=u,u?i||n.addEventListener(l,o?T:I,o):n.removeEventListener(l,o?T:I,o);else if("dangerouslySetInnerHTML"!==l){if(t)l=l.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if("href"!==l&&"list"!==l&&"form"!==l&&"tabIndex"!==l&&"download"!==l&&l in n)try{n[l]=null==u?"":u;break n}catch(n){}"function"==typeof u||(null!=u&&(!1!==u||"a"===l[0]&&"r"===l[1])?n.setAttribute(l,u):n.removeAttribute(l))}}function I(n){this.l[n.type+!1](l.event?l.event(n):n)}function T(n){this.l[n.type+!0](l.event?l.event(n):n)}function j(n,u,i,t,o,r,f,e,c){var s,h,v,y,p,k,b,m,g,x,A,P=u.type;if(void 0!==u.constructor)return null;null!=i.__h&&(c=i.__h,e=u.__e=i.__e,u.__h=null,r=[e]),(s=l.__b)&&s(u);try{n:if("function"==typeof P){if(m=u.props,g=(s=P.contextType)&&t[s.__c],x=s?g?g.props.value:s.__:t,i.__c?b=(h=u.__c=i.__c).__=h.__E:("prototype"in P&&P.prototype.render?u.__c=h=new P(m,x):(u.__c=h=new _(m,x),h.constructor=P,h.render=O),g&&g.sub(h),h.props=m,h.state||(h.state={}),h.context=x,h.__n=t,v=h.__d=!0,h.__h=[]),null==h.__s&&(h.__s=h.state),null!=P.getDerivedStateFromProps&&(h.__s==h.state&&(h.__s=a({},h.__s)),a(h.__s,P.getDerivedStateFromProps(m,h.__s))),y=h.props,p=h.state,v)null==P.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),null!=h.componentDidMount&&h.__h.push(h.componentDidMount);else{if(null==P.getDerivedStateFromProps&&m!==y&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(m,x),!h.__e&&null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(m,h.__s,x)||u.__v===i.__v){h.props=m,h.state=h.__s,u.__v!==i.__v&&(h.__d=!1),h.__v=u,u.__e=i.__e,u.__k=i.__k,u.__k.forEach(function(n){n&&(n.__=u)}),h.__h.length&&f.push(h);break n}null!=h.componentWillUpdate&&h.componentWillUpdate(m,h.__s,x),null!=h.componentDidUpdate&&h.__h.push(function(){h.componentDidUpdate(y,p,k)})}h.context=x,h.props=m,h.state=h.__s,(s=l.__r)&&s(u),h.__d=!1,h.__v=u,h.__P=n,s=h.render(h.props,h.state,h.context),h.state=h.__s,null!=h.getChildContext&&(t=a(a({},t),h.getChildContext())),v||null==h.getSnapshotBeforeUpdate||(k=h.getSnapshotBeforeUpdate(y,p)),A=null!=s&&s.type===d&&null==s.key?s.props.children:s,w(n,Array.isArray(A)?A:[A],u,i,t,o,r,f,e,c),h.base=u.__e,u.__h=null,h.__h.length&&f.push(h),b&&(h.__E=h.__=null),h.__e=!1}else null==r&&u.__v===i.__v?(u.__k=i.__k,u.__e=i.__e):u.__e=L(i.__e,u,i,t,o,r,f,c);(s=l.diffed)&&s(u)}catch(n){u.__v=null,(c||null!=r)&&(u.__e=e,u.__h=!!c,r[r.indexOf(e)]=null),l.__e(n,u,i)}}function z(n,u){l.__c&&l.__c(u,n),n.some(function(u){try{n=u.__h,u.__h=[],n.some(function(n){n.call(u)})}catch(n){l.__e(n,u.__v)}})}function L(l,u,i,t,o,r,f,c){var s,a,v,y=i.props,p=u.props,d=u.type,_=0;if("svg"===d&&(o=!0),null!=r)for(;_<r.length;_++)if((s=r[_])&&(s===l||(d?s.localName==d:3==s.nodeType))){l=s,r[_]=null;break}if(null==l){if(null===d)return document.createTextNode(p);l=o?document.createElementNS("http://www.w3.org/2000/svg",d):document.createElement(d,p.is&&p),r=null,c=!1}if(null===d)y===p||c&&l.data===p||(l.data=p);else{if(r=r&&n.call(l.childNodes),a=(y=i.props||e).dangerouslySetInnerHTML,v=p.dangerouslySetInnerHTML,!c){if(null!=r)for(y={},_=0;_<l.attributes.length;_++)y[l.attributes[_].name]=l.attributes[_].value;(v||a)&&(v&&(a&&v.__html==a.__html||v.__html===l.innerHTML)||(l.innerHTML=v&&v.__html||""))}if(C(l,p,y,o,c),v)u.__k=[];else if(_=u.props.children,w(l,Array.isArray(_)?_:[_],u,i,t,o&&"foreignObject"!==d,r,f,r?r[0]:i.__k&&k(i,0),c),null!=r)for(_=r.length;_--;)null!=r[_]&&h(r[_]);c||("value"in p&&void 0!==(_=p.value)&&(_!==l.value||"progress"===d&&!_)&&H(l,"value",_,y.value,!1),"checked"in p&&void 0!==(_=p.checked)&&_!==l.checked&&H(l,"checked",_,y.checked,!1))}return l}function M(n,u,i){try{"function"==typeof n?n(u):n.current=u}catch(n){l.__e(n,i)}}function N(n,u,i){var t,o;if(l.unmount&&l.unmount(n),(t=n.ref)&&(t.current&&t.current!==n.__e||M(t,null,u)),null!=(t=n.__c)){if(t.componentWillUnmount)try{t.componentWillUnmount()}catch(n){l.__e(n,u)}t.base=t.__P=null}if(t=n.__k)for(o=0;o<t.length;o++)t[o]&&N(t[o],u,"function"!=typeof n.type);i||null==n.__e||h(n.__e),n.__e=n.__d=void 0}function O(n,l,u){return this.constructor(n,u)}function S(u,i,t){var o,r,f;l.__&&l.__(u,i),r=(o="function"==typeof t)?null:t&&t.__k||i.__k,f=[],j(i,u=(!o&&t||i).__k=v(d,null,[u]),r||e,e,void 0!==i.ownerSVGElement,!o&&t?[t]:r?null:i.firstChild?n.call(i.childNodes):null,f,!o&&t?t:r?r.__e:i.firstChild,o),z(f,u)}function q(n,l){S(n,l,q)}function B(l,u,i){var t,o,r,f=a({},l.props);for(r in u)"key"==r?t=u[r]:"ref"==r?o=u[r]:f[r]=u[r];return arguments.length>2&&(f.children=arguments.length>3?n.call(arguments,2):i),y(l.type,f,t||l.key,o||l.ref,null)}function D(n,l){var u={__c:l="__cC"+f++,__:n,Consumer:function(n,l){return n.children(l)},Provider:function(n){var u,i;return this.getChildContext||(u=[],(i={})[l]=this,this.getChildContext=function(){return i},this.shouldComponentUpdate=function(n){this.props.value!==n.value&&u.some(m)},this.sub=function(n){u.push(n);var l=n.componentWillUnmount;n.componentWillUnmount=function(){u.splice(u.indexOf(n),1),l&&l.call(n)}}),n.children}};return u.Provider.__=u.Consumer.contextType=u}n=c.slice,l={__e:function(n,l){for(var u,i,t;l=l.__;)if((u=l.__c)&&!u.__)try{if((i=u.constructor)&&null!=i.getDerivedStateFromError&&(u.setState(i.getDerivedStateFromError(n)),t=u.__d),null!=u.componentDidCatch&&(u.componentDidCatch(n),t=u.__d),t)return u.__E=u}catch(l){n=l}throw n}},u=0,i=function(n){return null!=n&&void 0===n.constructor},_.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=a({},this.state),"function"==typeof n&&(n=n(a({},u),this.props)),n&&a(u,n),null!=n&&this.__v&&(l&&this.__h.push(l),m(this))},_.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),m(this))},_.prototype.render=d,t=[],o="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,g.__r=0,f=0;
//# sourceMappingURL=preact.module.js.map


/***/ }),

/***/ "./node_modules/preact/hooks/dist/hooks.module.js":
/*!********************************************************!*\
  !*** ./node_modules/preact/hooks/dist/hooks.module.js ***!
  \********************************************************/
/*! exports provided: useState, useReducer, useEffect, useLayoutEffect, useRef, useImperativeHandle, useMemo, useCallback, useContext, useDebugValue, useErrorBoundary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useState", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useReducer", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useEffect", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLayoutEffect", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRef", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useImperativeHandle", function() { return _; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMemo", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCallback", function() { return A; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useContext", function() { return F; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDebugValue", function() { return T; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useErrorBoundary", function() { return q; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
var t,u,r,o=0,i=[],c=preact__WEBPACK_IMPORTED_MODULE_0__["options"].__b,f=preact__WEBPACK_IMPORTED_MODULE_0__["options"].__r,e=preact__WEBPACK_IMPORTED_MODULE_0__["options"].diffed,a=preact__WEBPACK_IMPORTED_MODULE_0__["options"].__c,v=preact__WEBPACK_IMPORTED_MODULE_0__["options"].unmount;function m(t,r){preact__WEBPACK_IMPORTED_MODULE_0__["options"].__h&&preact__WEBPACK_IMPORTED_MODULE_0__["options"].__h(u,t,o||r),o=0;var i=u.__H||(u.__H={__:[],__h:[]});return t>=i.__.length&&i.__.push({}),i.__[t]}function l(n){return o=1,p(w,n)}function p(n,r,o){var i=m(t++,2);return i.t=n,i.__c||(i.__=[o?o(r):w(void 0,r),function(n){var t=i.t(i.__[0],n);i.__[0]!==t&&(i.__=[t,i.__[1]],i.__c.setState({}))}],i.__c=u),i.__}function y(r,o){var i=m(t++,3);!preact__WEBPACK_IMPORTED_MODULE_0__["options"].__s&&k(i.__H,o)&&(i.__=r,i.__H=o,u.__H.__h.push(i))}function h(r,o){var i=m(t++,4);!preact__WEBPACK_IMPORTED_MODULE_0__["options"].__s&&k(i.__H,o)&&(i.__=r,i.__H=o,u.__h.push(i))}function s(n){return o=5,d(function(){return{current:n}},[])}function _(n,t,u){o=6,h(function(){"function"==typeof n?n(t()):n&&(n.current=t())},null==u?u:u.concat(n))}function d(n,u){var r=m(t++,7);return k(r.__H,u)&&(r.__=n(),r.__H=u,r.__h=n),r.__}function A(n,t){return o=8,d(function(){return n},t)}function F(n){var r=u.context[n.__c],o=m(t++,9);return o.c=n,r?(null==o.__&&(o.__=!0,r.sub(u)),r.props.value):n.__}function T(t,u){preact__WEBPACK_IMPORTED_MODULE_0__["options"].useDebugValue&&preact__WEBPACK_IMPORTED_MODULE_0__["options"].useDebugValue(u?u(t):t)}function q(n){var r=m(t++,10),o=l();return r.__=n,u.componentDidCatch||(u.componentDidCatch=function(n){r.__&&r.__(n),o[1](n)}),[o[0],function(){o[1](void 0)}]}function x(){i.forEach(function(t){if(t.__P)try{t.__H.__h.forEach(g),t.__H.__h.forEach(j),t.__H.__h=[]}catch(u){t.__H.__h=[],preact__WEBPACK_IMPORTED_MODULE_0__["options"].__e(u,t.__v)}}),i=[]}preact__WEBPACK_IMPORTED_MODULE_0__["options"].__b=function(n){u=null,c&&c(n)},preact__WEBPACK_IMPORTED_MODULE_0__["options"].__r=function(n){f&&f(n),t=0;var r=(u=n.__c).__H;r&&(r.__h.forEach(g),r.__h.forEach(j),r.__h=[])},preact__WEBPACK_IMPORTED_MODULE_0__["options"].diffed=function(t){e&&e(t);var o=t.__c;o&&o.__H&&o.__H.__h.length&&(1!==i.push(o)&&r===preact__WEBPACK_IMPORTED_MODULE_0__["options"].requestAnimationFrame||((r=preact__WEBPACK_IMPORTED_MODULE_0__["options"].requestAnimationFrame)||function(n){var t,u=function(){clearTimeout(r),b&&cancelAnimationFrame(t),setTimeout(n)},r=setTimeout(u,100);b&&(t=requestAnimationFrame(u))})(x)),u=void 0},preact__WEBPACK_IMPORTED_MODULE_0__["options"].__c=function(t,u){u.some(function(t){try{t.__h.forEach(g),t.__h=t.__h.filter(function(n){return!n.__||j(n)})}catch(r){u.some(function(n){n.__h&&(n.__h=[])}),u=[],preact__WEBPACK_IMPORTED_MODULE_0__["options"].__e(r,t.__v)}}),a&&a(t,u)},preact__WEBPACK_IMPORTED_MODULE_0__["options"].unmount=function(t){v&&v(t);var u=t.__c;if(u&&u.__H)try{u.__H.__.forEach(g)}catch(t){preact__WEBPACK_IMPORTED_MODULE_0__["options"].__e(t,u.__v)}};var b="function"==typeof requestAnimationFrame;function g(n){var t=u;"function"==typeof n.__c&&n.__c(),u=t}function j(n){var t=u;n.__c=n.__(),u=t}function k(n,t){return!n||n.length!==t.length||t.some(function(t,u){return t!==n[u]})}function w(n,t){return"function"==typeof t?t(n):t}
//# sourceMappingURL=hooks.module.js.map


/***/ }),

/***/ "./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js":
/*!*******************************************************************!*\
  !*** ./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js ***!
  \*******************************************************************/
/*! exports provided: Fragment, jsx, jsxs, jsxDEV */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsx", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsxs", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsxDEV", function() { return e; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Fragment", function() { return preact__WEBPACK_IMPORTED_MODULE_0__["Fragment"]; });

var o=0;function e(_,e,n,t,f){var l,s,u={};for(s in e)"ref"==s?l=e[s]:u[s]=e[s];var a={type:_,props:u,key:n,ref:l,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--o,__source:t,__self:f};if("function"==typeof _&&(l=_.defaultProps))for(s in l)void 0===u[s]&&(u[s]=l[s]);return preact__WEBPACK_IMPORTED_MODULE_0__["options"].vnode&&preact__WEBPACK_IMPORTED_MODULE_0__["options"].vnode(a),a}
//# sourceMappingURL=jsxRuntime.module.js.map


/***/ }),

/***/ "./node_modules/save-as-file/dist/es5/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/save-as-file/dist/es5/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _save_file__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./save-file */ "./node_modules/save-as-file/dist/es5/save-file.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _save_file__WEBPACK_IMPORTED_MODULE_0__["default"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/save-as-file/dist/es5/save-file.js":
/*!*********************************************************!*\
  !*** ./node_modules/save-as-file/dist/es5/save-file.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return saveFile; });
var GC_TIMEOUT = 1000 * 60; // 1 min
/**
 * Save a file from Blob or object url
 * We achieve this by using the HTML5 download attr of <a>.
 * Check https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#Browser_compatibility
 * for browser compatibility.
 *
 * @param data
 * @param filename
 * @param gcTimeout - When to remove the data uri
 */
function saveFile(data, filename, gcTimeout) {
    if (gcTimeout === void 0) { gcTimeout = GC_TIMEOUT; }
    var isBlob = data instanceof Blob;
    var url = isBlob ? URL.createObjectURL(data) : data;
    var a = document.createElement('a');
    a.href = url;
    a.download = filename;
    var click = new MouseEvent('click');
    // Push the download operation on the next tick
    requestAnimationFrame(function () {
        a.dispatchEvent(click);
    });
    // Revoke the object url later in time
    // when the download of the file is completed (or so we assume)
    if (isBlob) {
        setTimeout(function () {
            URL.revokeObjectURL(url);
        }, gcTimeout);
    }
}
//# sourceMappingURL=save-file.js.map

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/xml-formatter/index.js":
/*!*********************************************!*\
  !*** ./node_modules/xml-formatter/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @typedef {Object} XMLFormatterOptions
 *  @property {String} [indentation='    '] The value used for indentation
 *  @property {function(node): boolean} [filter] Return false to exclude the node.
 *  @property {Boolean} [collapseContent=false] True to keep content in the same line as the element. Only works if element contains at least one text node
 *  @property {String} [lineSeparator='\r\n'] The line separator to use
 *  @property {String} [whiteSpaceAtEndOfSelfclosingTag=false] to either end ad self closing tag with `<tag/>` or `<tag />`
 */

/**
 * @typedef {Object} XMLFormatterState
 * @param {String} content
 * @param {Number} level
 * @param {XMLFormatterOptions} options
 */

/**
 * @param {XMLFormatterState} state
 * @return {void}
 */
function newLine(state) {
    if (!state.options.indentation && !state.options.lineSeparator) return;
    state.content += state.options.lineSeparator;
    let i;
    for (i = 0; i < state.level; i++) {
        state.content += state.options.indentation;
    }
}

/**
 * @param {XMLFormatterState} state
 * @param {String} content
 * @return {void}
 */
function appendContent(state, content) {
    state.content += content;
}

/**
 * @param {Object} node
 * @param {XMLFormatterState} state
 * @param {Boolean} preserveSpace
 * @return {void}
 */
function processNode(node, state, preserveSpace) {
    if (typeof node.content === 'string') {
        processContentNode(node, state, preserveSpace);
    } else if (node.type === 'Element') {
        processElementNode(node, state, preserveSpace);
    } else if (node.type === 'ProcessingInstruction') {
        processProcessingIntruction(node, state, preserveSpace);
    } else {
        throw new Error('Unknown node type: ' + node.type);
    }
}

/**
 * @param {Object} node
 * @param {XMLFormatterState} state
 * @param {Boolean} preserveSpace
 * @return {void}
 */
function processContentNode(node, state, preserveSpace) {
    if (!preserveSpace) {
        node.content = node.content.trim();
    }
    if (node.content.length > 0) {
        if (!preserveSpace && state.content.length > 0) {
            newLine(state);
        }
        appendContent(state, node.content);
    }
}

/**
 * @param {Object} node
 * @param {XMLFormatterState} state
 * @param {Boolean} preserveSpace
 * @return {void}
 */
function processElementNode(node, state, preserveSpace) {
    if (!preserveSpace && state.content.length > 0) {
        newLine(state);
    }

    appendContent(state, '<' + node.name);
    processAttributes(state, node.attributes);

    if (node.children === null) {
        const selfClosingNodeClosingTag = state.options.whiteSpaceAtEndOfSelfclosingTag ? ' />' : '/>'
        // self-closing node
        appendContent(state, selfClosingNodeClosingTag);
    } else if (node.children.length === 0) {
        // empty node
        appendContent(state, '></' + node.name + '>');
    } else {

        appendContent(state, '>');

        state.level++;

        let nodePreserveSpace = node.attributes['xml:space'] === 'preserve';

        if (!nodePreserveSpace && state.options.collapseContent) {

            const containsTextNodes = node.children.some(function(child) {
                return child.type === 'Text' && child.content.trim() !== '';
            });

            if (containsTextNodes) {
                nodePreserveSpace = true;
            }
        }

        node.children.forEach(function(child) {
            processNode(child, state, preserveSpace || nodePreserveSpace, state.options);
        });

        state.level--;

        if (!preserveSpace && !nodePreserveSpace) {
            newLine(state);
        }
        appendContent(state, '</' + node.name + '>');
    }
}

/**
 * @param {XMLFormatterState} state
 * @param {Record<String, String>} attributes
 * @return {void}
 */
function processAttributes(state, attributes) {
    Object.keys(attributes).forEach(function(attr) {
        const escaped = attributes[attr].replace(/"/g, '&quot;');
        appendContent(state, ' ' + attr + '="' + escaped + '"');
    });
}

/**
 * @param {Object} node
 * @param {XMLFormatterState} state
 * @return {void}
 */
function processProcessingIntruction(node, state) {
    if (state.content.length > 0) {
        newLine(state);
    }
    appendContent(state, '<?' + node.name);
    processAttributes(state, node.attributes);
    appendContent(state, '?>');
}


/**
 * Converts the given XML into human readable format.
 *
 * @param {String} xml
 * @param {XMLFormatterOptions} options
 * @returns {string}
 */
function format(xml, options = {}) {
    options.indentation = 'indentation' in options ? options.indentation : '    ';
    options.collapseContent = options.collapseContent === true;
    options.lineSeparator = 'lineSeparator' in options ? options.lineSeparator : '\r\n';
    options.whiteSpaceAtEndOfSelfclosingTag = !!options.whiteSpaceAtEndOfSelfclosingTag;

    const parser = __webpack_require__(/*! xml-parser-xo */ "./node_modules/xml-parser-xo/index.js");
    const parsedXml = parser(xml, {filter: options.filter});
    const state = {content: '', level: 0, options: options};

    if (parsedXml.declaration) {
        processProcessingIntruction(parsedXml.declaration, state);
    }

    parsedXml.children.forEach(function(child) {
        processNode(child, state, false);
    });

    return state.content;
}


module.exports = format;


/***/ }),

/***/ "./node_modules/xml-parser-xo/index.js":
/*!*********************************************!*\
  !*** ./node_modules/xml-parser-xo/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @typedef {Object} ParsingOptions
 *  @property {function(node)} filter Returns false to exclude a node. Default is true.
 */

/**
 * Parse the given XML string into an object.
 *
 * @param {String} xml
 * @param {ParsingOptions} [options]
 * @return {Object}
 * @api public
 */
function parse(xml, options = {}) {

    options.filter = options.filter || (() => true);

    function nextChild() {
        return tag() || content() || comment() || cdata();
    }

    function nextRootChild() {
        match(/\s*/);
        return tag(true) || comment() || doctype() || processingInstruction(false);
    }

    function document() {
        const decl = declaration();
        const children = [];
        let documentRootNode;
        let child = nextRootChild();

        while (child) {
            if (child.node.type === 'Element') {
                if (documentRootNode) {
                    throw new Error('Found multiple root nodes');
                }
                documentRootNode = child.node;
            }

            if (!child.excluded) {
                children.push(child.node);
            }

            child = nextRootChild();
        }

        if (!documentRootNode) {
            throw new Error('Failed to parse XML');
        }

        return {
            declaration: decl ? decl.node : null,
            root: documentRootNode,
            children
        };
    }

    function declaration() {
        return processingInstruction(true);
    }

    function processingInstruction(matchDeclaration) {
        const m = matchDeclaration ? match(/^<\?(xml)\s*/) : match(/^<\?([\w-:.]+)\s*/);
        if (!m) return;

        // tag
        const node = {
            name: m[1],
            type: 'ProcessingInstruction',
            attributes: {}
        };

        // attributes
        while (!(eos() || is('?>'))) {
            const attr = attribute();
            if (!attr) return node;
            node.attributes[attr.name] = attr.value;
        }

        match(/\?>/);

        return {
            excluded: matchDeclaration ? false : options.filter(node) === false,
            node
        };
    }

    function tag(matchRoot) {
        const m = match(/^<([\w-:.]+)\s*/);
        if (!m) return;

        // name
        const node = {
            type: 'Element',
            name: m[1],
            attributes: {},
            children: []
        };

        // attributes
        while (!(eos() || is('>') || is('?>') || is('/>'))) {
            const attr = attribute();
            if (!attr) return node;
            node.attributes[attr.name] = attr.value;
        }

        const excluded = matchRoot ? false : options.filter(node) === false;

        // self closing tag
        if (match(/^\s*\/>/)) {
            node.children = null;
            return {
                excluded,
                node
            };
        }

        match(/\??>/);

        if (!excluded) {
            // children
            let child = nextChild();
            while (child) {
                if (!child.excluded) {
                    node.children.push(child.node);
                }
                child = nextChild();
            }
        }

        // closing
        match(/^<\/[\w-:.]+>/);

        return {
            excluded,
            node
        };
    }

    function doctype() {
        const m = match(/^<!DOCTYPE\s+[^>]*>/);
        if (m) {
            const node = {
                type: 'DocumentType',
                content: m[0]
            };
            return {
                excluded: options.filter(node) === false,
                node
            };
        }
    }

    function cdata() {
        if (xml.startsWith('<![CDATA[')) {
            const endPositionStart = xml.indexOf(']]>');
            if (endPositionStart > -1) {
                const endPositionFinish  = endPositionStart + 3;
                const node = {
                    type: 'CDATA',
                    content: xml.substring(0, endPositionFinish)
                };
                xml = xml.slice(endPositionFinish);
                return {
                    excluded: options.filter(node) === false,
                    node
                };
            }
        }
    }

    function comment() {
        const m = match(/^<!--[\s\S]*?-->/);
        if (m) {
            const node = {
                type: 'Comment',
                content: m[0]
            };
            return {
                excluded: options.filter(node) === false,
                node
            };
        }
    }

    function content() {
        const m = match(/^([^<]+)/);
        if (m) {
            const node = {
                type: 'Text',
                content: m[1]
            };
            return {
                excluded: options.filter(node) === false,
                node
            };
        }
    }

    function attribute() {
        const m = match(/([\w:-]+)\s*=\s*("[^"]*"|'[^']*'|\w+)\s*/);
        if (!m) return;
        return {name: m[1], value: strip(m[2])}
    }

    /**
     * Strip quotes from `val`.
     */
    function strip(val) {
        return val.replace(/^['"]|['"]$/g, '');
    }

    /**
     * Match `re` and advance the string.
     */
    function match(re) {
        const m = xml.match(re);
        if (!m) return;
        xml = xml.slice(m[0].length);
        return m;
    }

    /**
     * End-of-source.
     */
    function eos() {
        return 0 === xml.length;
    }

    /**
     * Check for `prefix`.
     */
    function is(prefix) {
        return 0 === xml.indexOf(prefix);
    }

    xml = xml.trim();

    return document();
}

module.exports = parse;


/***/ }),

/***/ "./src/ui/component/Button/index.jsx":
/*!*******************************************!*\
  !*** ./src/ui/component/Button/index.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.less */ "./src/ui/component/Button/index.less");
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact/jsx-runtime */ "./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");
var _excluded = ["block", "square", "className"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




function Button(_ref) {
  var _ref$block = _ref.block,
      block = _ref$block === void 0 ? false : _ref$block,
      _ref$square = _ref.square,
      square = _ref$square === void 0 ? false : _ref$square,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      props = _objectWithoutProperties(_ref, _excluded);

  var classNames = _toConsumableArray(new Set(['btn', className, block ? '_block' : '', square ? '_square' : ''])).join(' ');

  return Object(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("button", _objectSpread({
    type: "button",
    className: classNames
  }, props));
}

/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./src/ui/component/Button/index.less":
/*!********************************************!*\
  !*** ./src/ui/component/Button/index.less ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_index_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/less-loader/dist/cjs.js!./index.less */ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/ui/component/Button/index.less");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_index_less__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_index_less__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/ui/component/Header/index.jsx":
/*!*******************************************!*\
  !*** ./src/ui/component/Header/index.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact/jsx-runtime */ "./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");



// import "./index.less";
var Header = function Header(_ref) {
  var _ref$children = _ref.children,
      children = _ref$children === void 0 ? null : _ref$children,
      _ref$extra = _ref.extra,
      extra = _ref$extra === void 0 ? null : _ref$extra;
  return Object(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
    className: "pl8 pr8 bsbb df aic g_hr bc:fff",
    children: [Object(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      className: "f1 c:s fs12 lh16",
      children: children
    }), Object(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      children: extra
    })]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/ui/component/Input/index.jsx":
/*!******************************************!*\
  !*** ./src/ui/component/Input/index.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.less */ "./src/ui/component/Input/index.less");
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact/jsx-runtime */ "./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");
var _excluded = ["block", "small", "className"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




function Input(_ref) {
  var _ref$block = _ref.block,
      block = _ref$block === void 0 ? false : _ref$block,
      _ref$small = _ref.small,
      small = _ref$small === void 0 ? false : _ref$small,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      props = _objectWithoutProperties(_ref, _excluded);

  return Object(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("input", _objectSpread({
    type: "text",
    placeholder: "Enter",
    className: "input bsbb ".concat(className, " ").concat(block ? 'w100% db' : '', " ").concat(small ? '_s' : '')
  }, props));
}

/* harmony default export */ __webpack_exports__["default"] = (Input);

/***/ }),

/***/ "./src/ui/component/Input/index.less":
/*!*******************************************!*\
  !*** ./src/ui/component/Input/index.less ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_index_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/less-loader/dist/cjs.js!./index.less */ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/ui/component/Input/index.less");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_index_less__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_index_less__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/ui/component/Tabs/index.jsx":
/*!*****************************************!*\
  !*** ./src/ui/component/Tabs/index.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact/jsx-runtime */ "./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");


function Tabs(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      data = _ref.data,
      tabIndex = _ref.tabIndex,
      onChange = _ref.onChange;
  return Object(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
    className: "c:xs fw700 lh1.5 ".concat(className),
    children: data.map(function (item, index) {
      return Object(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
        href: "##",
        title: item,
        className: "dib vat pt8 pb8 pl8 pr8 ".concat(index === tabIndex ? 'c:m' : 'c:m:h'),
        onClick: function onClick(e) {
          e.preventDefault();
          onChange(index);
        },
        children: item
      }, item);
    })
  });
}

/* harmony default export */ __webpack_exports__["default"] = (Tabs);

/***/ }),

/***/ "./src/ui/component/Textarea/index.jsx":
/*!*********************************************!*\
  !*** ./src/ui/component/Textarea/index.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.less */ "./src/ui/component/Textarea/index.less");
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact/jsx-runtime */ "./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");
var _excluded = ["className"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




function Textarea(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      props = _objectWithoutProperties(_ref, _excluded);

  return Object(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("textarea", _objectSpread({
    placeholder: "Enter",
    className: "textarea bsbb w100% db fs12 lh20 pt8 pb8 pr8 pl8 br4 lh20 ".concat(className)
  }, props));
}

/* harmony default export */ __webpack_exports__["default"] = (Textarea);

/***/ }),

/***/ "./src/ui/component/Textarea/index.less":
/*!**********************************************!*\
  !*** ./src/ui/component/Textarea/index.less ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_index_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/less-loader/dist/cjs.js!./index.less */ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/ui/component/Textarea/index.less");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_index_less__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_index_less__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/ui/index.jsx":
/*!**************************!*\
  !*** ./src/ui/index.jsx ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact/hooks */ "./node_modules/preact/hooks/dist/hooks.module.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var _component_Header_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/Header/index */ "./src/ui/component/Header/index.jsx");
/* harmony import */ var _component_Tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/Tabs */ "./src/ui/component/Tabs/index.jsx");
/* harmony import */ var _page_Config_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page/Config/index */ "./src/ui/page/Config/index.jsx");
/* harmony import */ var _page_Token_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page/Token/index */ "./src/ui/page/Token/index.jsx");
/* harmony import */ var _page_Home_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page/Home/index */ "./src/ui/page/Home/index.jsx");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index.less */ "./src/ui/index.less");
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! preact/jsx-runtime */ "./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }












var DATA_TAB = ['HTML', 'CSS', 'Token', 'Project'];

var APP = function APP() {
  var _useState = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      _useState2 = _slicedToArray(_useState, 2),
      tabIndex = _useState2[0],
      setTabIndex = _useState2[1];

  var onTabChange = function onTabChange(index) {
    setTabIndex(index);
    parent.postMessage({
      pluginMessage: {
        type: "API.onTabChange",
        value: index
      }
    }, '*');
  };

  return Object(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["Fragment"], {
    children: [Object(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_component_Header_index__WEBPACK_IMPORTED_MODULE_2__["default"], {
      extra: Object(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("a", {
        className: "c:s c:primary:h fs14 fw500 pl8 pr8 pt8 pb8 fw700",
        href: "https://github.com/s-acss/figma-token-to-code",
        target: "_blank",
        title: "Help",
        children: Object(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("img", {
          src: "https://img.shields.io/github/stars/s-acss/figma-token-to-code.svg?style=social",
          alt: "figma-token-to-code"
        })
      }),
      children: Object(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_component_Tabs__WEBPACK_IMPORTED_MODULE_3__["default"], {
        className: "fs14",
        data: DATA_TAB,
        tabIndex: tabIndex,
        onChange: onTabChange
      })
    }), function () {
      if (tabIndex === 0 || tabIndex === 1) {
        return Object(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_page_Home_index__WEBPACK_IMPORTED_MODULE_6__["default"], {
          tabIndex: tabIndex
        });
      }

      if (tabIndex === 3) {
        return Object(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_page_Config_index__WEBPACK_IMPORTED_MODULE_4__["default"], {});
      }

      if (tabIndex === 2) {
        return Object(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_page_Token_index__WEBPACK_IMPORTED_MODULE_5__["default"], {});
      }

      return null;
    }()]
  });
};

Object(preact__WEBPACK_IMPORTED_MODULE_1__["render"])(Object(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(APP, {}), document.getElementById('react-page'));

/***/ }),

/***/ "./src/ui/index.less":
/*!***************************!*\
  !*** ./src/ui/index.less ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_index_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/less-loader/dist/cjs.js!./index.less */ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/ui/index.less");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_index_less__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_index_less__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/ui/page/Config/_postConfig.js":
/*!*******************************************!*\
  !*** ./src/ui/page/Config/_postConfig.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var _postConfig = function _postConfig(_ref) {
  var action = _ref.action,
      value = _ref.value;
  parent.postMessage({
    pluginMessage: {
      type: "CONFIG.".concat(action),
      value: value
    }
  }, '*');
};

/* harmony default export */ __webpack_exports__["default"] = (_postConfig);

/***/ }),

/***/ "./src/ui/page/Config/index.jsx":
/*!**************************************!*\
  !*** ./src/ui/page/Config/index.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact/hooks */ "./node_modules/preact/hooks/dist/hooks.module.js");
/* harmony import */ var _component_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../component/Button */ "./src/ui/component/Button/index.jsx");
/* harmony import */ var _component_Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../component/Input */ "./src/ui/component/Input/index.jsx");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.less */ "./src/ui/page/Config/index.less");
/* harmony import */ var _postConfig_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_postConfig.js */ "./src/ui/page/Config/_postConfig.js");
/* harmony import */ var _component_Textarea__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../component/Textarea */ "./src/ui/component/Textarea/index.jsx");
/* harmony import */ var _utils_saveJSON__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/saveJSON */ "./src/ui/utils/saveJSON.ts");
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! preact/jsx-runtime */ "./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }












var Config = function Config() {
  var _useState = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useState"])({}),
      _useState2 = _slicedToArray(_useState, 2),
      config = _useState2[0],
      setConfig = _useState2[1];

  var _config$projects = config.projects,
      projects = _config$projects === void 0 ? [] : _config$projects,
      currentIndex = config.currentIndex;
  var currentProject = projects[currentIndex];
  var form = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  Object(preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    // console.log('config useEffect');
    onmessage = function onmessage(_ref) {
      var _ref$data = _ref.data;
      _ref$data = _ref$data === void 0 ? {} : _ref$data;
      var pluginMessage = _ref$data.pluginMessage;
      var _pluginMessage$getCon = pluginMessage.getConfig,
          getConfig = _pluginMessage$getCon === void 0 ? null : _pluginMessage$getCon,
          _pluginMessage$alertM = pluginMessage.alertMsg,
          alertMsg = _pluginMessage$alertM === void 0 ? null : _pluginMessage$alertM;
      getConfig !== null && setConfig(getConfig);
      alertMsg !== null && alertMsg && alert(alertMsg);
    };
  }, []); // 添加新的项目

  var addNew = function addNew() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    // 没有名字
    if (!value.name) {
      alert("Project Name is required!");
      return false;
    } // 已经存在


    if (projects.find(function (item) {
      return item.name === value.name;
    })) {
      alert("".concat(value.name, " is exist!"));
      return false;
    }

    Object(_postConfig_js__WEBPACK_IMPORTED_MODULE_4__["default"])({
      action: 'addNewProject',
      value: value
    });
  }; // 添加


  var onAdd = function onAdd(e) {
    e.preventDefault();
    var form = e.target;
    var newName = form.name.value.trim();
    var result = addNew({
      name: newName
    });
    result !== false && form.reset();
  }; // 修改当前选中


  var onChangeCurrent = function onChangeCurrent(e) {
    Object(_postConfig_js__WEBPACK_IMPORTED_MODULE_4__["default"])({
      action: 'changeCurrent',
      value: e.target.value
    });

    form.current.reset();
  }; // 校验项目是否已经存在


  var checkName = function checkName(value) {
    if (!value) {
      alert('project name is required!');
      return false;
    }

    if (currentProject.name !== value && projects.find(function (item) {
      return item.name === value;
    })) {
      alert("".concat(value, " is exist!"));
      return false;
    }

    return true;
  }; // 删除


  var onDel = function onDel(e) {
    e.preventDefault();
    var result = confirm("Are you sure to delete ".concat(currentProject.name, "?"));

    if (!result) {
      return;
    }

    Object(_postConfig_js__WEBPACK_IMPORTED_MODULE_4__["default"])({
      action: 'remove',
      value: currentIndex
    });
  }; // 下载 JSON


  var onDownLoad = function onDownLoad(e) {
    e.preventDefault();
    Object(_utils_saveJSON__WEBPACK_IMPORTED_MODULE_6__["default"])(currentProject, currentProject.name);
  }; // 修改


  var onEdit = function onEdit(e) {
    e.preventDefault();
    var form = e.target;
    var dataSave = form.data.value;
    var objData = JSON.parse(dataSave);

    if (checkName(objData.name)) {
      Object(_postConfig_js__WEBPACK_IMPORTED_MODULE_4__["default"])({
        action: 'replaceByIndex',
        value: {
          data: objData,
          index: currentIndex
        }
      });
    }
  };

  return Object(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxs"])(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["Fragment"], {
    children: [Object(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxs"])("form", {
      onSubmit: onAdd,
      className: "g_row pt8 pb8 bc:fff df aic",
      children: [Object(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])("strong", {
        className: "c:s fs12 mr8",
        children: "Current: "
      }), Object(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])("select", {
        onChange: onChangeCurrent,
        value: currentIndex,
        children: projects.map(function (project, key) {
          return Object(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])("option", {
            value: key,
            children: project.name
          }, project.name);
        })
      }), Object(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_component_Input__WEBPACK_IMPORTED_MODULE_2__["default"], {
        placeholder: "Enter new project name",
        className: "f1 ml8",
        required: true,
        type: "text",
        name: "name"
      })]
    }), Object(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxs"])("form", {
      onSubmit: onEdit,
      ref: form,
      className: "f1 df fdc",
      children: [Object(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_component_Textarea__WEBPACK_IMPORTED_MODULE_5__["default"], {
        name: "data",
        className: "f1",
        defaultValue: JSON.stringify(currentProject, null, 2),
        placeholder: "Parse your config file here"
      }), Object(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxs"])("div", {
        className: "df g_row pt12 pb12",
        children: [Object(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_component_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
          title: "Download",
          className: "g_tip mr8",
          "data-title": "Download JSON",
          onClick: onDownLoad,
          children: "DownLoad"
        }), name === 'default' ? Object(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])("div", {
          className: "g_tip",
          "data-title": "Default Can't Delete",
          children: Object(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_component_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
            disabled: true,
            title: "Delete",
            children: "Delete"
          })
        }) : Object(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_component_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
          className: "g_tip",
          title: "Delete",
          "data-title": "Delete this project",
          onClick: onDel,
          children: "Delete"
        }), Object(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_component_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
          type: "reset",
          className: "mla",
          children: "Reset"
        }), Object(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_component_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
          type: "submit",
          className: "ml8",
          children: "Save"
        })]
      })]
    })]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Config);

/***/ }),

/***/ "./src/ui/page/Config/index.less":
/*!***************************************!*\
  !*** ./src/ui/page/Config/index.less ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_index_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/less-loader/dist/cjs.js!./index.less */ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/ui/page/Config/index.less");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_index_less__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_index_less__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/ui/page/Home/Highlight/index.jsx":
/*!**********************************************!*\
  !*** ./src/ui/page/Home/Highlight/index.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! highlight.js/lib/core */ "./node_modules/highlight.js/lib/core.js");
/* harmony import */ var highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var highlight_js_lib_languages_xml__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highlight.js/lib/languages/xml */ "./node_modules/highlight.js/lib/languages/xml.js");
/* harmony import */ var highlight_js_lib_languages_xml__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_languages_xml__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var highlight_js_lib_languages_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highlight.js/lib/languages/css */ "./node_modules/highlight.js/lib/languages/css.js");
/* harmony import */ var highlight_js_lib_languages_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_languages_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! preact/hooks */ "./node_modules/preact/hooks/dist/hooks.module.js");
/* harmony import */ var highlight_js_styles_atom_one_dark_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! highlight.js/styles/atom-one-dark.css */ "./node_modules/highlight.js/styles/atom-one-dark.css");
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! preact/jsx-runtime */ "./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0___default.a.registerLanguage('xml', highlight_js_lib_languages_xml__WEBPACK_IMPORTED_MODULE_1___default.a);
highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0___default.a.registerLanguage('css', highlight_js_lib_languages_css__WEBPACK_IMPORTED_MODULE_2___default.a);
var CSS_MAP = {
  "xml": "xml",
  "css": "css"
};

function Highlight(_ref) {
  var _ref$children = _ref.children,
      children = _ref$children === void 0 ? "" : _ref$children,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? "" : _ref$className,
      _ref$language = _ref.language,
      language = _ref$language === void 0 ? "xml" : _ref$language;

  var _useState = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      _useState2 = _slicedToArray(_useState, 2),
      strHtml = _useState2[0],
      setStrHtml = _useState2[1];

  var appendClassName = CSS_MAP[language] || '';
  Object(preact_hooks__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var html = highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0___default.a.highlight(children, {
      language: language
    }).value;
    setStrHtml(html);
  }, [children, language]);
  return Object(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])("pre", {
    className: "hljs ".concat(className, " ").concat(appendClassName),
    dangerouslySetInnerHTML: {
      __html: strHtml
    }
  });
}

;
/* harmony default export */ __webpack_exports__["default"] = (Highlight);

/***/ }),

/***/ "./src/ui/page/Home/NoSelection/index.jsx":
/*!************************************************!*\
  !*** ./src/ui/page/Home/NoSelection/index.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact/jsx-runtime */ "./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");


function NoSelection() {
  return Object(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
    style: {
      color: 'rgba(255,255,255,0.8)',
      backgroundColor: '#282c34'
    },
    className: "f1 df aic jcc fs14",
    children: "Please Select Something!"
  });
}

/* harmony default export */ __webpack_exports__["default"] = (NoSelection);

/***/ }),

/***/ "./src/ui/page/Home/RenderCSS.jsx":
/*!****************************************!*\
  !*** ./src/ui/page/Home/RenderCSS.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Highlight__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Highlight */ "./src/ui/page/Home/Highlight/index.jsx");
/* harmony import */ var _component_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../component/Button */ "./src/ui/component/Button/index.jsx");
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! preact/hooks */ "./node_modules/preact/hooks/dist/hooks.module.js");
/* harmony import */ var clipboard_copy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clipboard-copy */ "./node_modules/clipboard-copy/index.js");
/* harmony import */ var clipboard_copy__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(clipboard_copy__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _NoSelection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NoSelection */ "./src/ui/page/Home/NoSelection/index.jsx");
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! preact/jsx-runtime */ "./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









var DEFAULT_COPY = 'Copy';
var CODE_PRE = "/*\n * All rules in \u300C sacss \u300D will filter out.\n * Make sure you got \u300C scass \u300D in your project\n * $ npm install sacss\n * @import '~sacss';\n */\n\n";

var RenderCSS = function RenderCSS(_ref) {
  var _ref$noSelection = _ref.noSelection,
      noSelection = _ref$noSelection === void 0 ? true : _ref$noSelection,
      code = _ref.code;

  var _useState = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_2__["useState"])(DEFAULT_COPY),
      _useState2 = _slicedToArray(_useState, 2),
      copyText = _useState2[0],
      setCopyText = _useState2[1];

  var onCopy = function onCopy(e) {
    e.preventDefault();
    clipboard_copy__WEBPACK_IMPORTED_MODULE_3___default()(code).then(function () {
      setCopyText("CSS Copy Success");
      setTimeout(function () {
        setCopyText('Copy');
      }, 2000);
    });
  };

  return Object(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxs"])(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["Fragment"], {
    children: [noSelection ? Object(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_NoSelection__WEBPACK_IMPORTED_MODULE_4__["default"], {}) : Object(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])("div", {
      className: "f1 oa",
      style: {
        backgroundColor: '#282c34'
      },
      children: Object(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_Highlight__WEBPACK_IMPORTED_MODULE_0__["default"], {
        language: "css",
        className: "css",
        children: "".concat(CODE_PRE).concat(code || '')
      })
    }), Object(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxs"])("div", {
      className: "g_row df aic jcsb pt8 pb8 bc:fff",
      children: [Object(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])("a", {
        className: "mr8",
        href: "https://www.npmjs.com/package/sacss",
        target: "_blank",
        children: Object(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])("img", {
          src: "https://img.shields.io/npm/v/sacss.svg",
          width: "80",
          height: "20",
          alt: "sacss"
        })
      }), Object(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_component_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
        disabled: noSelection || copyText !== DEFAULT_COPY,
        onClick: onCopy,
        children: copyText
      })]
    })]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (RenderCSS);

/***/ }),

/***/ "./src/ui/page/Home/RenderHTML.jsx":
/*!*****************************************!*\
  !*** ./src/ui/page/Home/RenderHTML.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Highlight__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Highlight */ "./src/ui/page/Home/Highlight/index.jsx");
/* harmony import */ var xml_formatter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! xml-formatter */ "./node_modules/xml-formatter/index.js");
/* harmony import */ var xml_formatter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(xml_formatter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _component_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../component/Button */ "./src/ui/component/Button/index.jsx");
/* harmony import */ var clipboard_copy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clipboard-copy */ "./node_modules/clipboard-copy/index.js");
/* harmony import */ var clipboard_copy__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(clipboard_copy__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! preact/hooks */ "./node_modules/preact/hooks/dist/hooks.module.js");
/* harmony import */ var _NoSelection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./NoSelection */ "./src/ui/page/Home/NoSelection/index.jsx");
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! preact/jsx-runtime */ "./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










var DEFAULT_COPY = 'Copy';

var InputJSX = function InputJSX(_ref) {
  var _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? true : _ref$disabled,
      isJSX = _ref.isJSX;

  var onChangeJSX = function onChangeJSX(e) {
    parent.postMessage({
      pluginMessage: {
        type: "CONFIG.changeJSX",
        value: e.target.checked
      }
    }, '*');
  };

  return Object(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])("label", {
    className: "mr16 df aic",
    children: [Object(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])("strong", {
      className: "fs14 mr4",
      children: "JSX:"
    }), Object(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])("input", {
      disabled: disabled,
      type: "checkbox",
      checked: isJSX,
      onChange: onChangeJSX
    })]
  });
};

var RenderHtml = function RenderHtml(_ref2) {
  var _ref2$code = _ref2.code,
      code = _ref2$code === void 0 ? '' : _ref2$code,
      _ref2$noSelection = _ref2.noSelection,
      noSelection = _ref2$noSelection === void 0 ? true : _ref2$noSelection,
      isJSX = _ref2.isJSX;

  var _useState = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_4__["useState"])(DEFAULT_COPY),
      _useState2 = _slicedToArray(_useState, 2),
      copyText = _useState2[0],
      setCopyText = _useState2[1];

  var onCopy = function onCopy(e) {
    e.preventDefault();
    clipboard_copy__WEBPACK_IMPORTED_MODULE_3___default()(code).then(function () {
      setCopyText("HTML Copy Success");
      setTimeout(function () {
        setCopyText('Copy');
      }, 2000);
    });
  };

  return Object(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["Fragment"], {
    children: [noSelection ? Object(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_NoSelection__WEBPACK_IMPORTED_MODULE_5__["default"], {}) : Object(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])("div", {
      className: "f1 oa",
      style: {
        backgroundColor: '#282c34'
      },
      children: Object(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_Highlight__WEBPACK_IMPORTED_MODULE_0__["default"], {
        language: "xml",
        children: code ? "".concat(xml_formatter__WEBPACK_IMPORTED_MODULE_1___default()("<div>".concat(code, "</div>"))) : ''
      })
    }), Object(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])("div", {
      className: "g_row df aic jcsb pt8 pb8 bc:fff",
      children: [Object(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(InputJSX, {
        disabled: noSelection,
        isJSX: isJSX
      }), Object(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_component_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
        disabled: noSelection || copyText !== DEFAULT_COPY,
        onClick: onCopy,
        children: copyText
      })]
    })]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (RenderHtml);

/***/ }),

/***/ "./src/ui/page/Home/index.jsx":
/*!************************************!*\
  !*** ./src/ui/page/Home/index.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact/hooks */ "./node_modules/preact/hooks/dist/hooks.module.js");
/* harmony import */ var _RenderHTML__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RenderHTML */ "./src/ui/page/Home/RenderHTML.jsx");
/* harmony import */ var _RenderCSS__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RenderCSS */ "./src/ui/page/Home/RenderCSS.jsx");
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! preact/jsx-runtime */ "./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var Home = function Home(_ref) {
  var tabIndex = _ref.tabIndex;

  var _useState = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      _useState2 = _slicedToArray(_useState, 2),
      html = _useState2[0],
      setHtml = _useState2[1];

  var _useState3 = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      _useState4 = _slicedToArray(_useState3, 2),
      CSS = _useState4[0],
      setCSS = _useState4[1];

  var _useState5 = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isJSX = _useState6[0],
      setIsJSX = _useState6[1];

  var _useState7 = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      _useState8 = _slicedToArray(_useState7, 2),
      noSelection = _useState8[0],
      setNoSelection = _useState8[1];

  Object(preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    onmessage = function onmessage(_ref2) {
      var _ref2$data = _ref2.data;
      _ref2$data = _ref2$data === void 0 ? {} : _ref2$data;
      var pluginMessage = _ref2$data.pluginMessage;
      var _pluginMessage$getHTM = pluginMessage.getHTML,
          getHTML = _pluginMessage$getHTM === void 0 ? null : _pluginMessage$getHTM,
          _pluginMessage$getCSS = pluginMessage.getCSS,
          getCSS = _pluginMessage$getCSS === void 0 ? null : _pluginMessage$getCSS,
          _pluginMessage$isJSX = pluginMessage.isJSX,
          isJSX = _pluginMessage$isJSX === void 0 ? null : _pluginMessage$isJSX,
          _pluginMessage$noSele = pluginMessage.noSelection,
          noSelection = _pluginMessage$noSele === void 0 ? null : _pluginMessage$noSele; // console.log({getHTML, getCSS});

      getHTML !== null && setHtml(getHTML);
      getCSS !== null && setCSS(getCSS);
      isJSX !== null && setIsJSX(isJSX);
      noSelection !== null && setNoSelection(noSelection);
    };
  }, []);

  if (tabIndex === 0) {
    return Object(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_RenderHTML__WEBPACK_IMPORTED_MODULE_1__["default"], {
      noSelection: noSelection,
      code: html,
      isJSX: isJSX
    });
  }

  if (tabIndex === 1) {
    return Object(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_RenderCSS__WEBPACK_IMPORTED_MODULE_2__["default"], {
      noSelection: noSelection,
      code: CSS
    });
  }

  return null;
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/ui/page/Token/index.jsx":
/*!*************************************!*\
  !*** ./src/ui/page/Token/index.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var preact_compat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact/compat */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.less */ "./src/ui/page/Token/index.less");
/* harmony import */ var _component_Textarea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../component/Textarea */ "./src/ui/component/Textarea/index.jsx");
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! preact/jsx-runtime */ "./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var Token = function Token() {
  var _useState = Object(preact_compat__WEBPACK_IMPORTED_MODULE_0__["useState"])({}),
      _useState2 = _slicedToArray(_useState, 2),
      selectionInfo = _useState2[0],
      setSelectionInfo = _useState2[1];

  var _ref = selectionInfo || {},
      _ref$name = _ref.name,
      name = _ref$name === void 0 ? '--' : _ref$name,
      _ref$token = _ref.token,
      selectionTokens = _ref$token === void 0 ? {} : _ref$token;

  var selectionIds = Object.keys(selectionTokens);
  Object(preact_compat__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    onmessage = function onmessage(_ref2) {
      var _ref2$data = _ref2.data;
      _ref2$data = _ref2$data === void 0 ? {} : _ref2$data;
      var pluginMessage = _ref2$data.pluginMessage;
      var _pluginMessage$getSel = pluginMessage.getSelectionInfo,
          getSelectionInfo = _pluginMessage$getSel === void 0 ? null : _pluginMessage$getSel,
          _pluginMessage$alertM = pluginMessage.alertMsg,
          alertMsg = _pluginMessage$alertM === void 0 ? null : _pluginMessage$alertM;
      getSelectionInfo !== null && setSelectionInfo(getSelectionInfo);
      alertMsg !== null && alertMsg && alert(alertMsg);
    };
  }, []);
  return Object(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("div", {
    className: "f1 df fdc oh",
    children: [Object(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("div", {
      className: "g_row df aic jcsb fs14 pt8 pb8",
      children: [Object(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("strong", {
        className: "c:s fs12 mr8",
        children: "Current: "
      }), Object(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("select", {
        disabled: true,
        children: Object(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("option", {
          value: name,
          children: name
        })
      })]
    }), selectionIds.length ? Object(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_component_Textarea__WEBPACK_IMPORTED_MODULE_2__["default"], {
      readonly: true,
      className: "f1",
      children: JSON.stringify(selectionTokens, null, 2)
    }) : Object(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_component_Textarea__WEBPACK_IMPORTED_MODULE_2__["default"], {
      className: "f1 df oh c:s fs14 tac aic jcc",
      children: "The node you select without any token"
    })]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Token);

/***/ }),

/***/ "./src/ui/page/Token/index.less":
/*!**************************************!*\
  !*** ./src/ui/page/Token/index.less ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_index_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/less-loader/dist/cjs.js!./index.less */ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/ui/page/Token/index.less");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_index_less__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_index_less__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/ui/utils/saveJSON.ts":
/*!**********************************!*\
  !*** ./src/ui/utils/saveJSON.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var save_as_file__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! save-as-file */ "./node_modules/save-as-file/dist/es5/index.js");
// @ts-ignore


var saveJSON = function saveJSON(data) {
  var filename = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'sacss-project';

  if (!data) {
    return;
  }

  var json = JSON.stringify(data, null, 2); // @ts-ignore

  var file = new File([json], {
    type: 'application/json'
  });
  Object(save_as_file__WEBPACK_IMPORTED_MODULE_0__["default"])(file, "".concat(filename, ".json"));
};

/* harmony default export */ __webpack_exports__["default"] = (saveJSON);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NsaXBib2FyZC1jb3B5L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9oaWdobGlnaHQuanMvc3R5bGVzL2F0b20tb25lLWRhcmsuY3NzIiwid2VicGFjazovLy8uL3NyYy91aS9jb21wb25lbnQvQnV0dG9uL2luZGV4Lmxlc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2NvbXBvbmVudC9JbnB1dC9pbmRleC5sZXNzIiwid2VicGFjazovLy8uL3NyYy91aS9jb21wb25lbnQvVGV4dGFyZWEvaW5kZXgubGVzcyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvaW5kZXgubGVzcyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvcGFnZS9Db25maWcvaW5kZXgubGVzcyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvcGFnZS9Ub2tlbi9pbmRleC5sZXNzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvY3NzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9oaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy94bWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9zdHlsZXMvYXRvbS1vbmUtZGFyay5jc3M/ZTkzZiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJlYWN0L2NvbXBhdC9kaXN0L2NvbXBhdC5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ByZWFjdC9kaXN0L3ByZWFjdC5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ByZWFjdC9ob29rcy9kaXN0L2hvb2tzLm1vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJlYWN0L2pzeC1ydW50aW1lL2Rpc3QvanN4UnVudGltZS5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NhdmUtYXMtZmlsZS9kaXN0L2VzNS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2F2ZS1hcy1maWxlL2Rpc3QvZXM1L3NhdmUtZmlsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3htbC1mb3JtYXR0ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3htbC1wYXJzZXIteG8vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2NvbXBvbmVudC9CdXR0b24vaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy91aS9jb21wb25lbnQvQnV0dG9uL2luZGV4Lmxlc3M/NDY5NyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvY29tcG9uZW50L0hlYWRlci9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2NvbXBvbmVudC9JbnB1dC9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2NvbXBvbmVudC9JbnB1dC9pbmRleC5sZXNzPzU4Y2EiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2NvbXBvbmVudC9UYWJzL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvY29tcG9uZW50L1RleHRhcmVhL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvY29tcG9uZW50L1RleHRhcmVhL2luZGV4Lmxlc3M/NzI3MSIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy91aS9pbmRleC5sZXNzPzk0YTIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL3BhZ2UvQ29uZmlnL19wb3N0Q29uZmlnLmpzIiwid2VicGFjazovLy8uL3NyYy91aS9wYWdlL0NvbmZpZy9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL3BhZ2UvQ29uZmlnL2luZGV4Lmxlc3M/ZTY1MSIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvcGFnZS9Ib21lL0hpZ2hsaWdodC9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL3BhZ2UvSG9tZS9Ob1NlbGVjdGlvbi9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL3BhZ2UvSG9tZS9SZW5kZXJDU1MuanN4Iiwid2VicGFjazovLy8uL3NyYy91aS9wYWdlL0hvbWUvUmVuZGVySFRNTC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL3BhZ2UvSG9tZS9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL3BhZ2UvVG9rZW4vaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy91aS9wYWdlL1Rva2VuL2luZGV4Lmxlc3M/NjU5MiIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvdXRpbHMvc2F2ZUpTT04udHMiXSwibmFtZXMiOlsiQnV0dG9uIiwiYmxvY2siLCJzcXVhcmUiLCJjbGFzc05hbWUiLCJwcm9wcyIsImNsYXNzTmFtZXMiLCJTZXQiLCJqb2luIiwiSGVhZGVyIiwiY2hpbGRyZW4iLCJleHRyYSIsIklucHV0Iiwic21hbGwiLCJUYWJzIiwiZGF0YSIsInRhYkluZGV4Iiwib25DaGFuZ2UiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJlIiwicHJldmVudERlZmF1bHQiLCJUZXh0YXJlYSIsIkRBVEFfVEFCIiwiQVBQIiwidXNlU3RhdGUiLCJzZXRUYWJJbmRleCIsIm9uVGFiQ2hhbmdlIiwicGFyZW50IiwicG9zdE1lc3NhZ2UiLCJwbHVnaW5NZXNzYWdlIiwidHlwZSIsInZhbHVlIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIl9wb3N0Q29uZmlnIiwiYWN0aW9uIiwiQ29uZmlnIiwiY29uZmlnIiwic2V0Q29uZmlnIiwicHJvamVjdHMiLCJjdXJyZW50SW5kZXgiLCJjdXJyZW50UHJvamVjdCIsImZvcm0iLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJvbm1lc3NhZ2UiLCJnZXRDb25maWciLCJhbGVydE1zZyIsImFsZXJ0IiwiYWRkTmV3IiwibmFtZSIsImZpbmQiLCJvbkFkZCIsInRhcmdldCIsIm5ld05hbWUiLCJ0cmltIiwicmVzdWx0IiwicmVzZXQiLCJvbkNoYW5nZUN1cnJlbnQiLCJjdXJyZW50IiwiY2hlY2tOYW1lIiwib25EZWwiLCJjb25maXJtIiwib25Eb3duTG9hZCIsInNhdmVKU09OIiwib25FZGl0IiwiZGF0YVNhdmUiLCJvYmpEYXRhIiwiSlNPTiIsInBhcnNlIiwicHJvamVjdCIsImtleSIsInN0cmluZ2lmeSIsImhsanMiLCJyZWdpc3Rlckxhbmd1YWdlIiwieG1sIiwiY3NzIiwiQ1NTX01BUCIsIkhpZ2hsaWdodCIsImxhbmd1YWdlIiwic3RySHRtbCIsInNldFN0ckh0bWwiLCJhcHBlbmRDbGFzc05hbWUiLCJodG1sIiwiaGlnaGxpZ2h0IiwiX19odG1sIiwiTm9TZWxlY3Rpb24iLCJjb2xvciIsImJhY2tncm91bmRDb2xvciIsIkRFRkFVTFRfQ09QWSIsIkNPREVfUFJFIiwiUmVuZGVyQ1NTIiwibm9TZWxlY3Rpb24iLCJjb2RlIiwiY29weVRleHQiLCJzZXRDb3B5VGV4dCIsIm9uQ29weSIsImNsaXBib2FyZENvcHkiLCJ0aGVuIiwic2V0VGltZW91dCIsIklucHV0SlNYIiwiZGlzYWJsZWQiLCJpc0pTWCIsIm9uQ2hhbmdlSlNYIiwiY2hlY2tlZCIsIlJlbmRlckh0bWwiLCJmb3JtYXQiLCJIb21lIiwic2V0SHRtbCIsIkNTUyIsInNldENTUyIsInNldElzSlNYIiwic2V0Tm9TZWxlY3Rpb24iLCJnZXRIVE1MIiwiZ2V0Q1NTIiwiVG9rZW4iLCJzZWxlY3Rpb25JbmZvIiwic2V0U2VsZWN0aW9uSW5mbyIsInRva2VuIiwic2VsZWN0aW9uVG9rZW5zIiwic2VsZWN0aW9uSWRzIiwiT2JqZWN0Iiwia2V5cyIsImdldFNlbGVjdGlvbkluZm8iLCJsZW5ndGgiLCJmaWxlbmFtZSIsImpzb24iLCJmaWxlIiwiRmlsZSIsInNhdmVGaWxlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtB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TSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsWUFBWSxZQUFZLFlBQVksT0FBTyxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsWUFBWSxPQUFPLE1BQU0sVUFBVSxNQUFNLFVBQVUsS0FBSyxTQUFTLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxPQUFPLFVBQVUsTUFBTSxPQUFPLFVBQVUsTUFBTSxPQUFPLFVBQVUsTUFBTSxPQUFPLFVBQVUsTUFBTSxPQUFPLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxVQUFVLE1BQU0sVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sT0FBTyxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFlBQVksWUFBWSxZQUFZLFFBQVEsVUFBVSxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sT0FBTyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxTQUFTLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLDZDQUE2QywyQkFBMkIsSUFBSSxRQUFRLE1BQU0saUhBQWlILE9BQU8sT0FBTyxpQ0FBaUMsK0JBQStCLCtCQUErQiw2Q0FBNkMsZ0NBQWdDLFNBQVMsV0FBVyxFQUFFLEtBQUssRUFBRSxVQUFVLFdBQVcsZ0JBQWdCLE9BQU8sa0JBQWtCLEtBQUssZUFBZSxHQUFHLCtCQUErQixJQUFJLFdBQVcsaUVBQWlFLE9BQU8sT0FBTywwQkFBMEIsK0JBQStCLCtCQUErQiw2Q0FBNkMsZ0NBQWdDLFNBQVMsV0FBVyxFQUFFLEtBQUssRUFBRSxVQUFVLFdBQVcsUUFBUSxPQUFPLGtCQUFrQixLQUFLLGFBQWEsR0FBRyxVQUFVLG1CQUFtQixRQUFRLHFCQUFxQixRQUFRLHVCQUF1QixNQUFNLFNBQVMsT0FBTyw2QkFBNkIsTUFBTSxZQUFZLE9BQU8sZ0JBQWdCLFlBQVksbUJBQW1CLFFBQVEsc0JBQXNCLFVBQVUsc0JBQXNCLFVBQVUsc0JBQXNCLFNBQVMsV0FBVyxTQUFTLFdBQVcsTUFBTSxXQUFXLE1BQU0sZUFBZSxNQUFNLGNBQWMsTUFBTSxhQUFhLE1BQU0sZUFBZSxPQUFPLHFCQUFxQixPQUFPLG9CQUFvQixNQUFNLGFBQWEsTUFBTSxjQUFjLE9BQU8sbUJBQW1CLE1BQU0sT0FBTyxZQUFZLE1BQU0sVUFBVSxPQUFPLHNCQUFzQixPQUFPLG1CQUFtQixNQUFNLGFBQWEsTUFBTSxXQUFXLE1BQU0sWUFBWSxPQUFPLFlBQVksT0FBTyxjQUFjLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLFFBQVEsd0JBQXdCLHlCQUF5QixTQUFTLGdCQUFnQixTQUFTLGdCQUFnQixTQUFTLGdCQUFnQixTQUFTLGdCQUFnQixTQUFTLGdCQUFnQixTQUFTLGdCQUFnQixTQUFTLGdCQUFnQixTQUFTLGdCQUFnQixTQUFTLGdCQUFnQixPQUFPLGdCQUFnQixPQUFPLGVBQWUsV0FBVyxZQUFZLE9BQU8sdUJBQXVCLFFBQVEseUJBQXlCLFFBQVEsNkJBQTZCLFFBQVEsOEJBQThCLE1BQU0sT0FBTyxXQUFXLFVBQVUsVUFBVSxTQUFTLE9BQU8sY0FBYyxXQUFXLGdCQUFnQixXQUFXLGdCQUFnQixXQUFXLGdCQUFnQixPQUFPLGdCQUFnQixNQUFNLFNBQVMsT0FBTyxpQkFBaUIsT0FBTyxrQkFBa0IsT0FBTyxnQkFBZ0IsT0FBTyxtQkFBbUIsTUFBTSxVQUFVLE1BQU0sY0FBYyxpQ0FBaUMsTUFBTSxnQkFBZ0IsTUFBTSxVQUFVLE1BQU0sa0JBQWtCLE9BQU8sb0JBQW9CLE1BQU0sZUFBZSxNQUFNLGtCQUFrQixZQUFZLGlCQUFpQixNQUFNLFFBQVEsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFNBQVMsVUFBVSxRQUFRLFlBQVksZUFBZSxPQUFPLGtCQUFrQixPQUFPLG1CQUFtQixPQUFPLGdCQUFnQixPQUFPLGlCQUFpQixPQUFPLHFCQUFxQixPQUFPLDBCQUEwQixPQUFPLG1CQUFtQixPQUFPLDBCQUEwQixPQUFPLHlCQUF5QixPQUFPLG9CQUFvQixPQUFPLHlCQUF5QixPQUFPLHlCQUF5QixzQkFBc0IscUJBQXFCLGlCQUFpQixPQUFPLHNCQUFzQixPQUFPLG1CQUFtQixNQUFNLGtCQUFrQixXQUFXLFdBQVcsT0FBTyx3QkFBd0IsT0FBTyxtQkFBbUIsUUFBUSxxQkFBcUIscUJBQXFCLE9BQU8sVUFBVSxvQkFBb0IsbUNBQW1DLHFDQUFxQyx3QkFBd0IsSUFBSSxrQkFBa0IsVUFBVSx1QkFBdUIsSUFBSSxrQkFBa0IsVUFBVSxzQkFBc0IsSUFBSSxrQkFBa0IsVUFBVSxxQkFBcUIsSUFBSSxrQkFBa0IsVUFBVSx1QkFBdUIsSUFBSSxjQUFjLFVBQVUsdUJBQXVCLElBQUksY0FBYyxVQUFVLHdCQUF3QixJQUFJLGNBQWMsVUFBVSxzQkFBc0IsSUFBSSxjQUFjLFVBQVUsdUJBQXVCLElBQUksTUFBTSxxQkFBcUIsSUFBSSxNQUFNLG1CQUFtQixJQUFJLGdCQUFnQixVQUFVLHFCQUFxQixJQUFJLFlBQVksVUFBVSx1QkFBdUIsSUFBSSxNQUFNLE1BQU0sU0FBUyxnQkFBZ0IsRUFBRSw4QkFBOEIsZ0JBQWdCLEdBQUcsOEJBQThCLGdCQUFnQixHQUFHLDhCQUE4QixnQkFBZ0IsR0FBRyxnQ0FBZ0MsZ0JBQWdCLEdBQUcsMENBQTBDLG1CQUFtQixHQUFHLFlBQVksK0JBQStCLEdBQUcscUJBQXFCLGtCQUFrQixtQkFBbUIsNkJBQTZCLEdBQUcsVUFBVSxvQkFBb0IsR0FBRyxTQUFTLGVBQWUsZ0JBQWdCLHVCQUF1QixHQUFHLCtCQUErQixjQUFjLEdBQUcsVUFBVSw0QkFBNEIsR0FBRyxnQkFBZ0IsaUJBQWlCLHFCQUFxQiw4QkFBOEIsR0FBRyxhQUFhLHNCQUFzQix1QkFBdUIsR0FBRyxZQUFZLHVCQUF1Qix3QkFBd0IsR0FBRyxpQkFBaUIsMEJBQTBCLEdBQUcsV0FBVyxrQ0FBa0MsR0FBRyxhQUFhLCtCQUErQixHQUFHLFlBQVksZ0JBQWdCLEdBQUcsb0NBQW9DLG1CQUFtQix1QkFBdUIsc0JBQXNCLEdBQUcsNERBQTRELHVCQUF1QixjQUFjLDZCQUE2Qix5QkFBeUIsd0NBQXdDLG9DQUFvQyxnQ0FBZ0MsdUJBQXVCLGlCQUFpQixHQUFHLGdDQUFnQyw4QkFBOEIsZUFBZSxvQkFBb0Isc0JBQXNCLHNCQUFzQix1QkFBdUIsOEJBQThCLHFCQUFxQixnQkFBZ0Isb0JBQW9CLHVCQUF1Qix3QkFBd0IsR0FBRywrQkFBK0IsZ0JBQWdCLGFBQWEsY0FBYyxxQkFBcUIsa0NBQWtDLDhCQUE4QixlQUFlLEdBQUcsNklBQTZJLDJDQUEyQyxtQ0FBbUMsd0JBQXdCLEdBQUcsOEJBQThCLGtCQUFrQixHQUFHLFdBQVcsMEJBQTBCLHVCQUF1QiwwQkFBMEIsdUJBQXVCLEdBQUcsMkJBQTJCLFlBQVkscUJBQXFCLGFBQWEsYUFBYSxLQUFLLEdBQUcsaUNBQWlDLHdCQUF3QixrQkFBa0IseUJBQXlCLEdBQUcsMENBQTBDLHlCQUF5QixrQkFBa0IsdUJBQXVCLDhCQUE4QixHQUFHLHFDQUFxQyx3QkFBd0Isd0JBQXdCLGVBQWUsY0FBYyxHQUFHLHFCQUFxQjtBQUMxbW1CO0FBQ2Usc0ZBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNQdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQytIO0FBQzdCO0FBQ2xHLDhCQUE4QixtRkFBMkIsQ0FBQyxzR0FBcUM7QUFDL0Y7QUFDQSw4QkFBOEIsUUFBUyxVQUFVLGtFQUFrRTtBQUNuSDtBQUNlLHNGQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7O0FDUHZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUMrSDtBQUM3QjtBQUNsRyw4QkFBOEIsbUZBQTJCLENBQUMsc0dBQXFDO0FBQy9GO0FBQ0EsOEJBQThCLFFBQVMsVUFBVSxrRUFBa0U7QUFDbkg7QUFDZSxzRkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7OztBQ1AxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjs7QUFFaEI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNENBQTRDLHFCQUFxQjtBQUNqRTs7QUFFQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUIsaUJBQWlCO0FBQ3RDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IscUJBQXFCO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRTs7Ozs7Ozs7Ozs7O0FDakVhOztBQUViLGlDQUFpQywySEFBMkg7O0FBRTVKLDZCQUE2QixrS0FBa0s7O0FBRS9MLGlEQUFpRCxnQkFBZ0IsZ0VBQWdFLHdEQUF3RCw2REFBNkQsc0RBQXNELGtIQUFrSDs7QUFFOVosc0NBQXNDLHVEQUF1RCx1Q0FBdUMsU0FBUyxPQUFPLGtCQUFrQixFQUFFLGFBQWE7O0FBRXJMLHdDQUF3Qyw4RkFBOEYsd0JBQXdCLGVBQWUsZUFBZSxnQkFBZ0IsWUFBWSxNQUFNLHdCQUF3QiwrQkFBK0IsYUFBYSxxQkFBcUIsbUNBQW1DLEVBQUUsRUFBRSxjQUFjLFdBQVcsVUFBVSxFQUFFLFVBQVUsTUFBTSxpREFBaUQsRUFBRSxVQUFVLGtCQUFrQixFQUFFLEVBQUUsYUFBYTs7QUFFbmYsK0JBQStCLG9DQUFvQzs7QUFFbkU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSxFOzs7Ozs7Ozs7OztBQy9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxhQUFhO0FBQzFCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCLHdCQUF3QjtBQUN4Qix3QkFBd0I7QUFDeEIsMEJBQTBCO0FBQzFCLDBCQUEwQjtBQUMxQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLFdBQVcscUJBQXFCO0FBQ2hDLGFBQWEsRUFBRTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILG9CQUFvQixFQUFFO0FBQ3RCOztBQUVBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGNBQWMsdUJBQXVCO0FBQ3JDLGNBQWMscUJBQXFCO0FBQ25DLGNBQWMscUJBQXFCO0FBQ25DLGNBQWMsYUFBYTtBQUMzQjs7QUFFQSxlQUFlLHNDQUFzQztBQUNyRCxlQUFlLDZCQUE2QjtBQUM1Qzs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEI7QUFDQTtBQUNBOztBQUVBLFdBQVcsU0FBUztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsS0FBSztBQUNsQixjQUFjLHFCQUFxQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLEtBQUs7QUFDbEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUJBQXFCLGlCQUFpQixFQUFFLFVBQVU7QUFDbEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsS0FBSztBQUNsQjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQjtBQUNBLG1DQUFtQyxVQUFVO0FBQzdDO0FBQ0E7O0FBRUEsZUFBZSx1REFBdUQsVUFBVTtBQUNoRixlQUFlLHVEQUF1RCxFQUFFO0FBQ3hFOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxjQUFjLHNCQUFzQjs7QUFFcEMsY0FBYyxLQUFLO0FBQ25CO0FBQ0E7QUFDQTs7QUFFQSxjQUFjLE9BQU87QUFDckI7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUscUNBQXFDO0FBQ3BELGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWEsU0FBUztBQUN0QixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBLGFBQWEsRUFBRTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQSxzQkFBc0IsUUFBUTs7QUFFOUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBLHNCQUFzQixRQUFROztBQUU5QjtBQUNBOztBQUVBO0FBQ0EsYUFBYSxXQUFXLGdCQUFnQjtBQUN4QyxhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhO0FBQ2I7QUFDQTtBQUNBLHNEQUFzRDtBQUN0RDs7QUFFQTtBQUNBLFdBQVcsaUJBQWlCO0FBQzVCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsV0FBVyxzQkFBc0I7QUFDakMsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHFCQUFxQjtBQUNoQyxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsb0JBQW9CO0FBQy9CLFdBQVcsT0FBTztBQUNsQixhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsZ0JBQWdCLEdBQUc7QUFDdEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZGQUE2RjtBQUM3Rix3Q0FBd0M7QUFDeEMsK0VBQStFLHNEQUFzRDs7QUFFckk7QUFDQSxVQUFVLGtCQUFrQix5QkFBeUIsRUFBRTtBQUN2RDtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsYUFBYTtBQUM1QjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxnQkFBZ0I7QUFDM0IsV0FBVyxnQkFBZ0I7QUFDM0IsV0FBVyxVQUFVO0FBQ3JCLGFBQWE7QUFDYjtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsY0FBYztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixhQUFhO0FBQzlCLGdDQUFnQyw4QkFBOEIsRUFBRTtBQUNoRSxpQkFBaUIsYUFBYTtBQUM5Qiw4QkFBOEIsd0RBQXdEO0FBQ3RGLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxpQkFBaUI7QUFDNUIsV0FBVyxpQkFBaUI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHdEQUF3RDtBQUNuRSxXQUFXLFFBQVE7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixhQUFhLGNBQWM7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCLFlBQVksdUJBQXVCO0FBQ25DLGFBQWE7QUFDYjtBQUNBLG9DQUFvQyxVQUFVO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLGFBQWEsZ0JBQWdCO0FBQzdCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdCQUFnQixPQUFPO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixhQUFhOztBQUVoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdCQUFnQixPQUFPO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXdELE9BQU87QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGFBQWE7QUFDMUIsZUFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQSwwREFBMEQsNEJBQTRCOztBQUV0RjtBQUNBLHNDQUFzQyxjQUFjO0FBQ3BEO0FBQ0E7QUFDQSxnQ0FBZ0Msa0JBQWtCO0FBQ2xEOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxLQUFLO0FBQ2xCLGFBQWEsb0JBQW9CO0FBQ2pDLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMERBQTBELGdCQUFnQjtBQUMxRTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMLHVDQUF1QywyQ0FBMkMsRUFBRTs7QUFFcEY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFFQUFxRTs7QUFFckU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxZQUFZO0FBQ3ZCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsaUJBQWlCO0FBQzdDLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixvREFBb0Q7QUFDOUU7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLGNBQWM7QUFDdEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQztBQUNwQztBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFVBQVU7QUFDVjs7QUFFQTs7QUFFQSxXQUFXLFdBQVc7QUFDdEI7QUFDQSw4QkFBOEIsbUJBQW1CO0FBQ2pEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYyxlQUFlO0FBQzdCLGNBQWMsT0FBTztBQUNyQixjQUFjLEtBQUs7QUFDbkI7O0FBRUE7QUFDQSxXQUFXLEtBQUs7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLEtBQUs7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLElBQUk7QUFDZixXQUFXLElBQUk7QUFDZixXQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0EsZ0JBQWdCLEtBQUs7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYSxNQUFNO0FBQ25CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLElBQUk7QUFDZjtBQUNBO0FBQ0EsdUJBQXVCLFFBQVE7QUFDL0I7O0FBRUE7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQSwwQkFBMEIsUUFBUSxHQUFHLFFBQVE7O0FBRTdDLGtDQUFrQyxRQUFRLElBQUksUUFBUTtBQUN0RCxzQkFBc0IsUUFBUSxHQUFHLFFBQVE7QUFDekM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsV0FBVyxJQUFJO0FBQ2YsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWEseUJBQXlCO0FBQ3RDO0FBQ0EsYUFBYSx1QkFBdUI7QUFDcEM7QUFDQSxhQUFhLGFBQWE7QUFDMUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQ7QUFDN0QsYUFBYSxTQUFTO0FBQ3RCLDhCQUE4Qjs7QUFFOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYSx1QkFBdUI7QUFDcEM7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IscUJBQXFCO0FBQzNDO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsMEJBQTBCO0FBQ3ZDLGFBQWEsUUFBUTtBQUNyQixhQUFhLGFBQWE7QUFDMUI7QUFDQSxlQUFlLGdCQUFnQjtBQUMvQixnQkFBZ0IsT0FBTztBQUN2QixnQkFBZ0IsT0FBTztBQUN2QixnQkFBZ0IsT0FBTztBQUN2QixnQkFBZ0IsT0FBTztBQUN2QixnQkFBZ0IsYUFBYTtBQUM3QixnQkFBZ0IsUUFBUTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxlQUFlLHVCQUF1QjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEIsYUFBYSxTQUFTO0FBQ3RCLGFBQWEsY0FBYztBQUMzQixlQUFlLGdCQUFnQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsYUFBYTtBQUM1QixlQUFlLGlCQUFpQjtBQUNoQyxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELGFBQWE7QUFDakUsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUsS0FBSztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLFVBQVUsYUFBYSxFQUFFO0FBQzFEO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLGNBQWM7QUFDN0IsZUFBZSxpQkFBaUI7QUFDaEMsZUFBZSxPQUFPO0FBQ3RCLGlCQUFpQixvQkFBb0I7QUFDckM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsY0FBYztBQUM3QixpQkFBaUIsT0FBTztBQUN4QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGlCQUFpQjtBQUNoQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQixpQkFBaUI7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2QkFBNkIsc0JBQXNCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnQkFBZ0IsZ0RBQWdEO0FBQ2hFOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixlQUFlLGNBQWM7QUFDN0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixlQUFlO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLG1CQUFtQixlQUFlO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7O0FBRUEsMENBQTBDLFVBQVU7QUFDcEQ7QUFDQSxlQUFlLGFBQWE7QUFDNUI7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEIsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxZQUFZLE9BQU87QUFDbkIsWUFBWSxjQUFjO0FBQzFCLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7O0FBRS9CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQSxlQUFlLG9CQUFvQjtBQUNuQztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLFlBQVksT0FBTztBQUNuQixjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsWUFBWTtBQUN6QixhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYSxXQUFXO0FBQ3hCO0FBQ0EsaUNBQWlDLEtBQUs7QUFDdEM7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLGdDQUFnQyxTQUFTO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhLFdBQVc7QUFDeEI7QUFDQSxnQ0FBZ0MsU0FBUztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsdUJBQXVCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLE9BQU8sa0NBQWtDOztBQUV6QztBQUNBO0FBQ0EsK0NBQStDLGlDQUFpQzs7QUFFaEY7QUFDQSxvQ0FBb0MsNEJBQTRCOztBQUVoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEscUJBQXFCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWSxZQUFZO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixhQUFhLFdBQVc7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCx3Q0FBd0MsdUNBQXVDO0FBQy9FO0FBQ0EsdUJBQXVCLGVBQWUsRUFBRSxPQUFPLGdCQUFnQjtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFDQUFxQyxlQUFlO0FBQ3BEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUsU0FBUztBQUN4QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsWUFBWSxPQUFPO0FBQ25CLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUsYUFBYTs7QUFFNUIsbUNBQW1DLHFEQUFxRDtBQUN4RjtBQUNBOztBQUVBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLGdCQUFnQjtBQUM3QixjQUFjLHNCQUFzQjtBQUNwQztBQUNBLHVDQUF1QyxlQUFlO0FBQ3REO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyw2Q0FBNkMsRUFBRTtBQUMvRTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxXQUFXO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixpQkFBaUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGlCQUFpQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWEsV0FBVztBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLFlBQVk7QUFDekIsYUFBYSxJQUFJO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUEsVUFBVSxPQUFPO0FBQ2pCLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLHVCQUF1QjtBQUNwQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVILCtCQUErQixtQkFBbUI7QUFDbEQsOEJBQThCLGtCQUFrQjtBQUNoRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdUJBQXVCOztBQUV2Qjs7Ozs7Ozs7Ozs7O0FDcDlFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSw0QkFBNEIsRUFBRSxhQUFhLEVBQUU7QUFDN0MsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsVUFBVSxjQUFjO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztB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Q0E7O0FBQ0EsSUFBTW5ELFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNwRCxJQUFELEVBQXNDO0FBQUEsTUFBL0JpSCxRQUErQix1RUFBcEIsZUFBb0I7O0FBQ25ELE1BQUksQ0FBQ2pILElBQUwsRUFBVztBQUNQO0FBQ0g7O0FBQ0QsTUFBTWtILElBQUksR0FBRzFELElBQUksQ0FBQ0ksU0FBTCxDQUFlNUQsSUFBZixFQUFxQixJQUFyQixFQUEyQixDQUEzQixDQUFiLENBSm1ELENBS25EOztBQUNBLE1BQU1tSCxJQUFJLEdBQUcsSUFBSUMsSUFBSixDQUFTLENBQUNGLElBQUQsQ0FBVCxFQUFpQjtBQUFFakcsUUFBSSxFQUFFO0FBQVIsR0FBakIsQ0FBYjtBQUNBb0csOERBQVEsQ0FBQ0YsSUFBRCxZQUFVRixRQUFWLFdBQVI7QUFDSCxDQVJEOztBQVNlN0QsdUVBQWYsRSIsImZpbGUiOiJ1aS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3VpL2luZGV4LmpzeFwiKTtcbiIsIi8qISBjbGlwYm9hcmQtY29weS4gTUlUIExpY2Vuc2UuIEZlcm9zcyBBYm91a2hhZGlqZWggPGh0dHBzOi8vZmVyb3NzLm9yZy9vcGVuc291cmNlPiAqL1xuLyogZ2xvYmFsIERPTUV4Y2VwdGlvbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNsaXBib2FyZENvcHlcblxuZnVuY3Rpb24gbWFrZUVycm9yICgpIHtcbiAgcmV0dXJuIG5ldyBET01FeGNlcHRpb24oJ1RoZSByZXF1ZXN0IGlzIG5vdCBhbGxvd2VkJywgJ05vdEFsbG93ZWRFcnJvcicpXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGNvcHlDbGlwYm9hcmRBcGkgKHRleHQpIHtcbiAgLy8gVXNlIHRoZSBBc3luYyBDbGlwYm9hcmQgQVBJIHdoZW4gYXZhaWxhYmxlLiBSZXF1aXJlcyBhIHNlY3VyZSBicm93c2luZ1xuICAvLyBjb250ZXh0IChpLmUuIEhUVFBTKVxuICBpZiAoIW5hdmlnYXRvci5jbGlwYm9hcmQpIHtcbiAgICB0aHJvdyBtYWtlRXJyb3IoKVxuICB9XG4gIHJldHVybiBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dCh0ZXh0KVxufVxuXG5hc3luYyBmdW5jdGlvbiBjb3B5RXhlY0NvbW1hbmQgKHRleHQpIHtcbiAgLy8gUHV0IHRoZSB0ZXh0IHRvIGNvcHkgaW50byBhIDxzcGFuPlxuICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gIHNwYW4udGV4dENvbnRlbnQgPSB0ZXh0XG5cbiAgLy8gUHJlc2VydmUgY29uc2VjdXRpdmUgc3BhY2VzIGFuZCBuZXdsaW5lc1xuICBzcGFuLnN0eWxlLndoaXRlU3BhY2UgPSAncHJlJ1xuICBzcGFuLnN0eWxlLndlYmtpdFVzZXJTZWxlY3QgPSAnYXV0bydcbiAgc3Bhbi5zdHlsZS51c2VyU2VsZWN0ID0gJ2FsbCdcblxuICAvLyBBZGQgdGhlIDxzcGFuPiB0byB0aGUgcGFnZVxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNwYW4pXG5cbiAgLy8gTWFrZSBhIHNlbGVjdGlvbiBvYmplY3QgcmVwcmVzZW50aW5nIHRoZSByYW5nZSBvZiB0ZXh0IHNlbGVjdGVkIGJ5IHRoZSB1c2VyXG4gIGNvbnN0IHNlbGVjdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKVxuICBjb25zdCByYW5nZSA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVSYW5nZSgpXG4gIHNlbGVjdGlvbi5yZW1vdmVBbGxSYW5nZXMoKVxuICByYW5nZS5zZWxlY3ROb2RlKHNwYW4pXG4gIHNlbGVjdGlvbi5hZGRSYW5nZShyYW5nZSlcblxuICAvLyBDb3B5IHRleHQgdG8gdGhlIGNsaXBib2FyZFxuICBsZXQgc3VjY2VzcyA9IGZhbHNlXG4gIHRyeSB7XG4gICAgc3VjY2VzcyA9IHdpbmRvdy5kb2N1bWVudC5leGVjQ29tbWFuZCgnY29weScpXG4gIH0gZmluYWxseSB7XG4gICAgLy8gQ2xlYW51cFxuICAgIHNlbGVjdGlvbi5yZW1vdmVBbGxSYW5nZXMoKVxuICAgIHdpbmRvdy5kb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHNwYW4pXG4gIH1cblxuICBpZiAoIXN1Y2Nlc3MpIHRocm93IG1ha2VFcnJvcigpXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGNsaXBib2FyZENvcHkgKHRleHQpIHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBjb3B5Q2xpcGJvYXJkQXBpKHRleHQpXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIC8vIC4uLk90aGVyd2lzZSwgdXNlIGRvY3VtZW50LmV4ZWNDb21tYW5kKCkgZmFsbGJhY2tcbiAgICB0cnkge1xuICAgICAgYXdhaXQgY29weUV4ZWNDb21tYW5kKHRleHQpXG4gICAgfSBjYXRjaCAoZXJyMikge1xuICAgICAgdGhyb3cgKGVycjIgfHwgZXJyIHx8IG1ha2VFcnJvcigpKVxuICAgIH1cbiAgfVxufVxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLypcXG5cXG5BdG9tIE9uZSBEYXJrIGJ5IERhbmllbCBHYW1hZ2VcXG5PcmlnaW5hbCBPbmUgRGFyayBTeW50YXggdGhlbWUgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vYXRvbS9vbmUtZGFyay1zeW50YXhcXG5cXG5iYXNlOiAgICAjMjgyYzM0XFxubW9uby0xOiAgI2FiYjJiZlxcbm1vbm8tMjogICM4MTg4OTZcXG5tb25vLTM6ICAjNWM2MzcwXFxuaHVlLTE6ICAgIzU2YjZjMlxcbmh1ZS0yOiAgICM2MWFlZWVcXG5odWUtMzogICAjYzY3OGRkXFxuaHVlLTQ6ICAgIzk4YzM3OVxcbmh1ZS01OiAgICNlMDZjNzVcXG5odWUtNS0yOiAjYmU1MDQ2XFxuaHVlLTY6ICAgI2QxOWE2Nlxcbmh1ZS02LTI6ICNlNmMwN2JcXG5cXG4qL1xcblxcbi5obGpzIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgb3ZlcmZsb3cteDogYXV0bztcXG4gIHBhZGRpbmc6IDAuNWVtO1xcbiAgY29sb3I6ICNhYmIyYmY7XFxuICBiYWNrZ3JvdW5kOiAjMjgyYzM0O1xcbn1cXG5cXG4uaGxqcy1jb21tZW50LFxcbi5obGpzLXF1b3RlIHtcXG4gIGNvbG9yOiAjNWM2MzcwO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4uaGxqcy1kb2N0YWcsXFxuLmhsanMta2V5d29yZCxcXG4uaGxqcy1mb3JtdWxhIHtcXG4gIGNvbG9yOiAjYzY3OGRkO1xcbn1cXG5cXG4uaGxqcy1zZWN0aW9uLFxcbi5obGpzLW5hbWUsXFxuLmhsanMtc2VsZWN0b3ItdGFnLFxcbi5obGpzLWRlbGV0aW9uLFxcbi5obGpzLXN1YnN0IHtcXG4gIGNvbG9yOiAjZTA2Yzc1O1xcbn1cXG5cXG4uaGxqcy1saXRlcmFsIHtcXG4gIGNvbG9yOiAjNTZiNmMyO1xcbn1cXG5cXG4uaGxqcy1zdHJpbmcsXFxuLmhsanMtcmVnZXhwLFxcbi5obGpzLWFkZGl0aW9uLFxcbi5obGpzLWF0dHJpYnV0ZSxcXG4uaGxqcy1tZXRhLXN0cmluZyB7XFxuICBjb2xvcjogIzk4YzM3OTtcXG59XFxuXFxuLmhsanMtYnVpbHRfaW4sXFxuLmhsanMtY2xhc3MgLmhsanMtdGl0bGUge1xcbiAgY29sb3I6ICNlNmMwN2I7XFxufVxcblxcbi5obGpzLWF0dHIsXFxuLmhsanMtdmFyaWFibGUsXFxuLmhsanMtdGVtcGxhdGUtdmFyaWFibGUsXFxuLmhsanMtdHlwZSxcXG4uaGxqcy1zZWxlY3Rvci1jbGFzcyxcXG4uaGxqcy1zZWxlY3Rvci1hdHRyLFxcbi5obGpzLXNlbGVjdG9yLXBzZXVkbyxcXG4uaGxqcy1udW1iZXIge1xcbiAgY29sb3I6ICNkMTlhNjY7XFxufVxcblxcbi5obGpzLXN5bWJvbCxcXG4uaGxqcy1idWxsZXQsXFxuLmhsanMtbGluayxcXG4uaGxqcy1tZXRhLFxcbi5obGpzLXNlbGVjdG9yLWlkLFxcbi5obGpzLXRpdGxlIHtcXG4gIGNvbG9yOiAjNjFhZWVlO1xcbn1cXG5cXG4uaGxqcy1lbXBoYXNpcyB7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi5obGpzLXN0cm9uZyB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmhsanMtbGluayB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9zdHlsZXMvYXRvbS1vbmUtZGFyay5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQWtCQzs7QUFFRDtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGNBQWM7RUFDZCxtQkFBbUI7QUFDckI7O0FBRUE7O0VBRUUsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFFQTs7O0VBR0UsY0FBYztBQUNoQjs7QUFFQTs7Ozs7RUFLRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTs7Ozs7RUFLRSxjQUFjO0FBQ2hCOztBQUVBOztFQUVFLGNBQWM7QUFDaEI7O0FBRUE7Ozs7Ozs7O0VBUUUsY0FBYztBQUNoQjs7QUFFQTs7Ozs7O0VBTUUsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKlxcblxcbkF0b20gT25lIERhcmsgYnkgRGFuaWVsIEdhbWFnZVxcbk9yaWdpbmFsIE9uZSBEYXJrIFN5bnRheCB0aGVtZSBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9hdG9tL29uZS1kYXJrLXN5bnRheFxcblxcbmJhc2U6ICAgICMyODJjMzRcXG5tb25vLTE6ICAjYWJiMmJmXFxubW9uby0yOiAgIzgxODg5Nlxcbm1vbm8tMzogICM1YzYzNzBcXG5odWUtMTogICAjNTZiNmMyXFxuaHVlLTI6ICAgIzYxYWVlZVxcbmh1ZS0zOiAgICNjNjc4ZGRcXG5odWUtNDogICAjOThjMzc5XFxuaHVlLTU6ICAgI2UwNmM3NVxcbmh1ZS01LTI6ICNiZTUwNDZcXG5odWUtNjogICAjZDE5YTY2XFxuaHVlLTYtMjogI2U2YzA3YlxcblxcbiovXFxuXFxuLmhsanMge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBvdmVyZmxvdy14OiBhdXRvO1xcbiAgcGFkZGluZzogMC41ZW07XFxuICBjb2xvcjogI2FiYjJiZjtcXG4gIGJhY2tncm91bmQ6ICMyODJjMzQ7XFxufVxcblxcbi5obGpzLWNvbW1lbnQsXFxuLmhsanMtcXVvdGUge1xcbiAgY29sb3I6ICM1YzYzNzA7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi5obGpzLWRvY3RhZyxcXG4uaGxqcy1rZXl3b3JkLFxcbi5obGpzLWZvcm11bGEge1xcbiAgY29sb3I6ICNjNjc4ZGQ7XFxufVxcblxcbi5obGpzLXNlY3Rpb24sXFxuLmhsanMtbmFtZSxcXG4uaGxqcy1zZWxlY3Rvci10YWcsXFxuLmhsanMtZGVsZXRpb24sXFxuLmhsanMtc3Vic3Qge1xcbiAgY29sb3I6ICNlMDZjNzU7XFxufVxcblxcbi5obGpzLWxpdGVyYWwge1xcbiAgY29sb3I6ICM1NmI2YzI7XFxufVxcblxcbi5obGpzLXN0cmluZyxcXG4uaGxqcy1yZWdleHAsXFxuLmhsanMtYWRkaXRpb24sXFxuLmhsanMtYXR0cmlidXRlLFxcbi5obGpzLW1ldGEtc3RyaW5nIHtcXG4gIGNvbG9yOiAjOThjMzc5O1xcbn1cXG5cXG4uaGxqcy1idWlsdF9pbixcXG4uaGxqcy1jbGFzcyAuaGxqcy10aXRsZSB7XFxuICBjb2xvcjogI2U2YzA3YjtcXG59XFxuXFxuLmhsanMtYXR0cixcXG4uaGxqcy12YXJpYWJsZSxcXG4uaGxqcy10ZW1wbGF0ZS12YXJpYWJsZSxcXG4uaGxqcy10eXBlLFxcbi5obGpzLXNlbGVjdG9yLWNsYXNzLFxcbi5obGpzLXNlbGVjdG9yLWF0dHIsXFxuLmhsanMtc2VsZWN0b3ItcHNldWRvLFxcbi5obGpzLW51bWJlciB7XFxuICBjb2xvcjogI2QxOWE2NjtcXG59XFxuXFxuLmhsanMtc3ltYm9sLFxcbi5obGpzLWJ1bGxldCxcXG4uaGxqcy1saW5rLFxcbi5obGpzLW1ldGEsXFxuLmhsanMtc2VsZWN0b3ItaWQsXFxuLmhsanMtdGl0bGUge1xcbiAgY29sb3I6ICM2MWFlZWU7XFxufVxcblxcbi5obGpzLWVtcGhhc2lzIHtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLmhsanMtc3Ryb25nIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uaGxqcy1saW5rIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuYnRuIHtcXG4gIGhlaWdodDogMS41cmVtO1xcbiAgcGFkZGluZzogMC4yNXJlbSAwLjVyZW07XFxuICBmb250LXNpemU6IDAuNzVyZW07XFxuICBsaW5lLWhlaWdodDogMXJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDFweCAjMDAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcbi5idG46aG92ZXIge1xcbiAgY29sb3I6ICM0YzVmZTI7XFxufVxcbi5idG46ZGlzYWJsZWQge1xcbiAgb3BhY2l0eTogMC41O1xcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG59XFxuLmJ0bi5fYmxvY2sge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLmJ0bi5fc3F1YXJlIHtcXG4gIHBhZGRpbmc6IDAuMzc1cmVtO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvdWkvY29tcG9uZW50L0J1dHRvbi9pbmRleC5sZXNzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUNBO0VBQ0UsY0FBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtBQUFGO0FBR0E7RUFDRSxjQUFBO0FBREY7QUFJQTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBQUZGO0FBS0E7RUFDRSxjQUFBO0VBQ0EsV0FBQTtBQUhGO0FBTUE7RUFDRSxpQkFBQTtBQUpGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcbi5idG4ge1xcbiAgaGVpZ2h0OiAyNC8xNioxcmVtO1xcbiAgcGFkZGluZzogNC8xNioxcmVtIDgvMTYqMXJlbTtcXG4gIGZvbnQtc2l6ZTogMTIvMTYqMXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxcmVtO1xcbiAgYm9yZGVyOm5vbmU7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxcHggIzAwMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG5cXG4uYnRuOmhvdmVyIHtcXG4gIGNvbG9yOiAjNGM1ZmUyO1xcbn1cXG5cXG4uYnRuOmRpc2FibGVkIHtcXG4gIG9wYWNpdHk6IDAuNTtcXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxufVxcblxcbi5idG4uX2Jsb2NrIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5idG4uX3NxdWFyZSB7XFxuICBwYWRkaW5nOiA2LzE2KjFyZW07XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5pbnB1dCB7XFxuICBoZWlnaHQ6IDEuNXJlbTtcXG4gIHBhZGRpbmc6IDAuMjVyZW0gMC41cmVtO1xcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDFyZW07XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgYm9yZGVyOiBub25lIDA7XFxufVxcbi5pbnB1dC5fYmxvY2sge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy91aS9jb21wb25lbnQvSW5wdXQvaW5kZXgubGVzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQTtFQUNFLGNBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0FBQUY7QUFHQTtFQUNFLGNBQUE7QUFERlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG4uaW5wdXQge1xcbiAgaGVpZ2h0OiAyNC8xNioxcmVtO1xcbiAgcGFkZGluZzogNC8xNioxcmVtIDgvMTYqMXJlbTtcXG4gIGZvbnQtc2l6ZTogMTIvMTYqMXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGJvcmRlcjpub25lIDA7XFxufVxcblxcbi5pbnB1dC5fYmxvY2sge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi50ZXh0YXJlYSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xcbiAgYm9yZGVyOiBub25lIDA7XFxuICByZXNpemU6IHZlcnRpY2FsO1xcbn1cXG4udGV4dGFyZWE6Zm9jdXMsXFxuLnRleHRhcmVhOmhvdmVyIHtcXG4gIGJvcmRlci1jb2xvcjogIzMzMztcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3VpL2NvbXBvbmVudC9UZXh0YXJlYS9pbmRleC5sZXNzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUNBO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFBRjtBQUdBOztFQUNFLGtCQUFBO0FBQUZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuLnRleHRhcmVhIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XFxuICBib3JkZXI6IG5vbmUgMDtcXG4gIHJlc2l6ZTogdmVydGljYWw7XFxufVxcblxcbi50ZXh0YXJlYTpmb2N1cywgLnRleHRhcmVhOmhvdmVyIHtcXG4gIGJvcmRlci1jb2xvcjogIzMzMztcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGNoYXJzZXQgXFxcInV0Zi04XFxcIjtcXG4uYWljIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5haWZlIHtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG59XFxuLmFpZnMge1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcbi5iMCB7XFxuICBib3R0b206IDA7XFxufVxcbi5iY3Qge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcbi5ibiB7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcbi5icjAge1xcbiAgYm9yZGVyLXJhZGl1czogMDtcXG59XFxuLmJyMTAwXFxcXCUge1xcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG59XFxuLmJzYmIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuLmJjX2ZmZiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbn1cXG4uYmNfMDAwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxufVxcbi5jXzAwMCB7XFxuICBjb2xvcjogIzAwMDtcXG59XFxuLmNfZmZmIHtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG4uY2Ige1xcbiAgY2xlYXI6IGJvdGg7XFxufVxcbi5jcCB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5kYiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuLmRmIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5kaSB7XFxuICBkaXNwbGF5OiBpbmxpbmU7XFxufVxcbi5kaWIge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG4uZGlmIHtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbn1cXG4uZG4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLmR0IHtcXG4gIGRpc3BsYXk6IHRhYmxlO1xcbn1cXG4uZHRjIHtcXG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XFxufVxcbi5mMSB7XFxuICBmbGV4OiAxO1xcbiAgbWluLXdpZHRoOiAwO1xcbn1cXG4uZmEge1xcbiAgZmxleDogYXV0bztcXG59XFxuLmZkYyB7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4uZmRyIHtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcbi5maSB7XFxuICBmb250OiBpbmhlcml0O1xcbn1cXG4uZmwge1xcbiAgZmxvYXQ6IGxlZnQ7XFxufVxcbi5mciB7XFxuICBmbG9hdDogcmlnaHQ7XFxufVxcbi5mczAge1xcbiAgZm9udC1zaXplOiAwO1xcbn1cXG4uZnMxIHtcXG4gIGZsZXgtc2hyaW5rOiAxO1xcbn1cXG4uZnNpIHtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuLmZzbiB7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcbi5mdnNjIHtcXG4gIGZvbnQtdmFyaWFudDogc21hbGwtY2FwcztcXG4gIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7XFxufVxcbi5mdzEwMCB7XFxuICBmb250LXdlaWdodDogMTAwO1xcbn1cXG4uZncyMDAge1xcbiAgZm9udC13ZWlnaHQ6IDIwMDtcXG59XFxuLmZ3MzAwIHtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxufVxcbi5mdzQwMCB7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG4uZnc1MDAge1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuLmZ3NjAwIHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcbi5mdzcwMCB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG4uZnc4MDAge1xcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXG59XFxuLmZ3OTAwIHtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxufVxcbi5md24ge1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuLmZ3dyB7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcbi5oMTAwXFxcXCUge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4uamNjIHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4uamNmZSB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG4uamNzYSB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuLmpjc2Ige1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4ubDAge1xcbiAgbGVmdDogMDtcXG59XFxuLmwxMDBcXFxcJSB7XFxuICBsZWZ0OiAxMDAlO1xcbn1cXG4ubDUwXFxcXCUge1xcbiAgbGVmdDogNTAlO1xcbn1cXG4ubGgxIHtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG4ubGgxXFxcXC4yIHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjI7XFxufVxcbi5saDFcXFxcLjUge1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG59XFxuLmxoMVxcXFwuOCB7XFxuICBsaW5lLWhlaWdodDogMS44O1xcbn1cXG4ubHNuIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbi5tMCB7XFxuICBtYXJnaW46IDA7XFxufVxcbi5tbGEge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcbi5tcmEge1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbn1cXG4ubXRhIHtcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxufVxcbi5tYmEge1xcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcXG59XFxuLm8wIHtcXG4gIG9wYWNpdHk6IDA7XFxufVxcbi5vYSB7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcXG59XFxuLm9oIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5wMCB7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG4ucGEge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG4ucGVuIHtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG4ucGYge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbn1cXG4ucHIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4ucHQxMDBcXFxcJSB7XFxuICBwYWRkaW5nLXRvcDogMTAwJTtcXG59XFxuLnIwIHtcXG4gIHJpZ2h0OiAwO1xcbn1cXG4ucjEwMFxcXFwlIHtcXG4gIHJpZ2h0OiAxMDAlO1xcbn1cXG4udDAge1xcbiAgdG9wOiAwO1xcbn1cXG4udDEwMFxcXFwlIHtcXG4gIHRvcDogMTAwJTtcXG59XFxuLnQ1MFxcXFwlIHtcXG4gIHRvcDogNTAlO1xcbn1cXG4ubXcxMDBcXFxcJSB7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxufVxcbi50YWMge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4udGFqIHtcXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XFxufVxcbi50YWwge1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuLnRhciB7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuLnRkbiB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcbi50ZHUge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcbi50bGYge1xcbiAgdGFibGUtbGF5b3V0OiBmaXhlZDtcXG59XFxuLnR0YyB7XFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG59XFxuLnR0bCB7XFxuICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlO1xcbn1cXG4udHRuIHtcXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbn1cXG4udHR1IHtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcbi51c24ge1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuLnZhbSB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG4udmF0IHtcXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxufVxcbi52aCB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcbi53MTAwXFxcXCUge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi53YW4ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG4ud3NuIHtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcbi53d2J3IHtcXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcXG59XFxuLnppMSB7XFxuICB6LWluZGV4OiAxO1xcbn1cXG4vKipcXG4gKiAjU0FDU1MoZm9udC1zaXplOyBmczsgMTIsIDE2OyAxcHgpO1xcbiAqIEBwcm9wOiDlsZ7mgKflkI1cXG4gKiBAbmFtZTog57yp5YaZ5ZCNXFxuICogQGxpc3Q6IOWAvOWIl+ihqFxcbiAqIEB1bml0OiDljZXkvY3mjaLnrpfooajovr7lvI8sIOm7mOiupOS4ujFweCwg5oOz6KaBIHJlbSDloavlhpkgMS8xNioxcmVtXFxuICovXFxuLyoqXFxuICogI1NBQ1NTKGZvbnQtd2VpZ2h0OyBmdzsgNDAwLCA3MDApO1xcbiAqIEBwcm9wOiDlsZ7mgKflkI1cXG4gKiBAbmFtZTog57yp5YaZ5ZCNXFxuICogQGxpc3Q6IOWAvOWIl+ihqFxcbiAqL1xcbi8qIOa4hemZpOa1ruWKqCAqL1xcbi8qIOaWh+Wtl+i2heWHuuS4gOihjOeCueeCueeCuSAqL1xcbi8qIOWkmuihjOaWh+acrOi2heWHuueCueeCueeCuSAqL1xcbi8qIOeUqOihqOagvOeahOaWueW8j+aSkea7oea1ruWKqOS5i+WQjueahOWJqeS9meepuumXtCAqL1xcbi5tdC0xIHtcXG4gIG1hcmdpbi10b3A6IC0wLjA2MjVyZW07XFxufVxcbi5tdDQge1xcbiAgbWFyZ2luLXRvcDogMC4yNXJlbTtcXG59XFxuLm10OCB7XFxuICBtYXJnaW4tdG9wOiAwLjVyZW07XFxufVxcbi5tdDEyIHtcXG4gIG1hcmdpbi10b3A6IDAuNzVyZW07XFxufVxcbi5tdDE2IHtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxufVxcbi5tYi0xIHtcXG4gIG1hcmdpbi1ib3R0b206IC0wLjA2MjVyZW07XFxufVxcbi5tYjQge1xcbiAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbTtcXG59XFxuLm1iOCB7XFxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxufVxcbi5tYjEyIHtcXG4gIG1hcmdpbi1ib3R0b206IDAuNzVyZW07XFxufVxcbi5tYjE2IHtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcbi5tci0xIHtcXG4gIG1hcmdpbi1yaWdodDogLTAuMDYyNXJlbTtcXG59XFxuLm1yNCB7XFxuICBtYXJnaW4tcmlnaHQ6IDAuMjVyZW07XFxufVxcbi5tcjgge1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XFxufVxcbi5tcjEyIHtcXG4gIG1hcmdpbi1yaWdodDogMC43NXJlbTtcXG59XFxuLm1yMTYge1xcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbn1cXG4ubWwtMSB7XFxuICBtYXJnaW4tbGVmdDogLTAuMDYyNXJlbTtcXG59XFxuLm1sNCB7XFxuICBtYXJnaW4tbGVmdDogMC4yNXJlbTtcXG59XFxuLm1sOCB7XFxuICBtYXJnaW4tbGVmdDogMC41cmVtO1xcbn1cXG4ubWwxMiB7XFxuICBtYXJnaW4tbGVmdDogMC43NXJlbTtcXG59XFxuLm1sMTYge1xcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XFxufVxcbi5wdDQge1xcbiAgcGFkZGluZy10b3A6IDAuMjVyZW07XFxufVxcbi5wdDgge1xcbiAgcGFkZGluZy10b3A6IDAuNXJlbTtcXG59XFxuLnB0MTIge1xcbiAgcGFkZGluZy10b3A6IDAuNzVyZW07XFxufVxcbi5wdDE2IHtcXG4gIHBhZGRpbmctdG9wOiAxcmVtO1xcbn1cXG4ucHQ0IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDAuMjVyZW07XFxufVxcbi5wdDgge1xcbiAgcGFkZGluZy1yaWdodDogMC41cmVtO1xcbn1cXG4ucHQxMiB7XFxuICBwYWRkaW5nLXJpZ2h0OiAwLjc1cmVtO1xcbn1cXG4ucHQxNiB7XFxuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xcbn1cXG4ucGI0IHtcXG4gIHBhZGRpbmctYm90dG9tOiAwLjI1cmVtO1xcbn1cXG4ucGI4IHtcXG4gIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XFxufVxcbi5wYjEyIHtcXG4gIHBhZGRpbmctYm90dG9tOiAwLjc1cmVtO1xcbn1cXG4ucGIxNiB7XFxuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcXG59XFxuLnBsNCB7XFxuICBwYWRkaW5nLWxlZnQ6IDAuMjVyZW07XFxufVxcbi5wbDgge1xcbiAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XFxufVxcbi5wbDEyIHtcXG4gIHBhZGRpbmctbGVmdDogMC43NXJlbTtcXG59XFxuLnBsMTYge1xcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcbn1cXG4uZnc2MDAge1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuLmZ3NjAwIHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcbi5mczEyIHtcXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcXG59XFxuLmZzMTQge1xcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcXG59XFxuLmZzMTYge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG4uZnMyMCB7XFxuICBmb250LXNpemU6IDEuMjVyZW07XFxufVxcbi5saDE2IHtcXG4gIGxpbmUtaGVpZ2h0OiAxcmVtO1xcbn1cXG4ubGgyMCB7XFxuICBsaW5lLWhlaWdodDogMS4yNXJlbTtcXG59XFxuLmxoMjQge1xcbiAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcXG59XFxuLmJyMiB7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxufVxcbi5icjQge1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG4uaDI0IHtcXG4gIGhlaWdodDogMS41cmVtO1xcbn1cXG4uY1xcXFw6bCxcXG4uY1xcXFw6bFxcXFw6aDpob3ZlciB7XFxuICBjb2xvcjogIzExMTtcXG59XFxuLmNcXFxcOm0sXFxuLmNcXFxcOm1cXFxcOmg6aG92ZXIge1xcbiAgY29sb3I6ICMzMzM7XFxufVxcbi5jXFxcXDpzLFxcbi5jXFxcXDpzXFxcXDpoOmhvdmVyIHtcXG4gIGNvbG9yOiAjNjY2O1xcbn1cXG4uY1xcXFw6eHMsXFxuLmNcXFxcOnhzXFxcXDpoOmhvdmVyIHtcXG4gIGNvbG9yOiAjOTk5O1xcbn1cXG4uY1xcXFw6cHJpbWFyeSxcXG4uY1xcXFw6cHJpbWFyeVxcXFw6aDpob3ZlciB7XFxuICBjb2xvcjogIzRjNWZlMjtcXG59XFxuLnRkMjAwIHtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDIwMG1zO1xcbn1cXG4vKiBvdGhlcnMgKi9cXG4qIHtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIHRleHQtZGVjb3JhdGlvbjogaW5oZXJpdDtcXG59XFxucm9vdCB7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcbnN2ZyB7XFxuICB3aWR0aDogMWVtO1xcbiAgaGVpZ2h0OiAxZW07XFxuICBmaWxsOiBjdXJyZW50Q29sb3I7XFxufVxcbmJvZHksXFxucHJlLFxcbmZvcm0sXFxuaW5wdXQsXFxucCB7XFxuICBtYXJnaW46IDA7XFxufVxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxufVxcbmJvZHksXFxuaHRtbCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG59XFxuLmdfd3JhcCB7XFxuICBtYXJnaW4tbGVmdDogMXJlbTtcXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcXG59XFxuLmdfcm93IHtcXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcXG4gIHBhZGRpbmctcmlnaHQ6IDFyZW07XFxufVxcbi5yZWFjdC1wYWdlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuLmdfaHIge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XFxufVxcbi5nX2hyX3Qge1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZGQ7XFxufVxcbi5nX2VsbCB7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbn1cXG4vKiB0aXBzICovXFxuLmdfdGlwW2RhdGEtdGl0bGVdIHtcXG4gIHRleHQtaW5kZW50OiAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxufVxcbi5nX3RpcFtkYXRhLXRpdGxlXTo6YmVmb3JlLFxcbi5nX3RpcFtkYXRhLXRpdGxlXTo6YWZ0ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogNTAlO1xcbiAgLW1zLXBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICB6LWluZGV4OiAxMDA7XFxufVxcbi5nX3RpcFtkYXRhLXRpdGxlXTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS10aXRsZSk7XFxuICB0b3A6IC00MXB4O1xcbiAgbWF4LXdpZHRoOiA5MHZ3O1xcbiAgcGFkZGluZzogNnB4IDEwcHg7XFxuICBsaW5lLWhlaWdodDogMThweDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzNzNjNDI7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgY29sb3I6ICNmZmY7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG4uZ190aXBbZGF0YS10aXRsZV06OmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgd2lkdGg6IDA7XFxuICBoZWlnaHQ6IDA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYm9yZGVyOiA2cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItdG9wLWNvbG9yOiAjMzczYzQyO1xcbiAgdG9wOiAtMTJweDtcXG59XFxuLmdfdGlwW2RhdGEtdGl0bGVdOmhvdmVyOjpiZWZvcmUsXFxuLmdfdGlwW2RhdGEtdGl0bGVdOmhvdmVyOjphZnRlcixcXG4uZ190aXBbZGF0YS10aXRsZV06Zm9jdXM6OmJlZm9yZSxcXG4uZ190aXBbZGF0YS10aXRsZV06Zm9jdXM6OmFmdGVyIHtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwLjFzIDAuMXM7XFxuICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDAuMXMgMC4xcztcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcbi5nX3RpcFtkYXRhLXRpdGxlXTpob3ZlciB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5zZWxlY3Qge1xcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xcbiAgaGVpZ2h0OiAxLjVyZW07XFxuICBib3JkZXItY29sb3I6ICMwMDAwMDA7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9zYWNzcy9sZXNzL1NBQ1NTLmxlc3NcIixcIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9zYWNzcy9pbmRleC5jc3NcIixcIndlYnBhY2s6Ly8uL3NyYy91aS9pbmRleC5sZXNzXCIsXCJ3ZWJwYWNrOi8vLi9ub2RlX21vZHVsZXMvc2Fjc3MvbGVzcy9IZWxwZXJzLmxlc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsZ0JBQVM7QUNBVDtFQUFLLG1CQUFBO0FDR0w7QURGQTtFQUFNLHFCQUFBO0FDS047QURKQTtFQUFNLHVCQUFBO0FDT047QUROQTtFQUFJLFNBQUE7QUNTSjtBRFJBO0VBQUssNkJBQUE7QUNXTDtBRFZBO0VBQUksWUFBQTtBQ2FKO0FEWkE7RUFBSyxnQkFBQTtBQ2VMO0FEZEE7RUFBUyxtQkFBQTtBQ2lCVDtBRGhCQTtFQUFNLHNCQUFBO0FDbUJOO0FEbEJBO0VBQVEsc0JBQUE7QUNxQlI7QURwQkE7RUFBUSxzQkFBQTtBQ3VCUjtBRHRCQTtFQUFPLFdBQUE7QUN5QlA7QUR4QkE7RUFBTyxXQUFBO0FDMkJQO0FEMUJBO0VBQUksV0FBQTtBQzZCSjtBRDVCQTtFQUFJLGVBQUE7QUMrQko7QUQ5QkE7RUFBSSxjQUFBO0FDaUNKO0FEaENBO0VBQUksYUFBQTtBQ21DSjtBRGxDQTtFQUFJLGVBQUE7QUNxQ0o7QURwQ0E7RUFBSyxxQkFBQTtBQ3VDTDtBRHRDQTtFQUFLLG9CQUFBO0FDeUNMO0FEeENBO0VBQUksYUFBQTtBQzJDSjtBRDFDQTtFQUFJLGNBQUE7QUM2Q0o7QUQ1Q0E7RUFBSyxtQkFBQTtBQytDTDtBRDlDQTtFQUFJLE9BQUE7RUFBTyxZQUFBO0FDa0RYO0FEakRBO0VBQUksVUFBQTtBQ29ESjtBRG5EQTtFQUFLLHNCQUFBO0FDc0RMO0FEckRBO0VBQUssbUJBQUE7QUN3REw7QUR2REE7RUFBSSxhQUFBO0FDMERKO0FEekRBO0VBQUksV0FBQTtBQzRESjtBRDNEQTtFQUFJLFlBQUE7QUM4REo7QUQ3REE7RUFBSyxZQUFBO0FDZ0VMO0FEL0RBO0VBQUssY0FBQTtBQ2tFTDtBRGpFQTtFQUFLLGtCQUFBO0FDb0VMO0FEbkVBO0VBQUssa0JB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SGNLLHFCQUFBO0FFMlVOO0FDelZDO0VIY0ssc0JBQUE7QUU4VU47QUM1VkM7RUhjSyxtQkFBQTtBRWlWTjtBQy9WQztFSGNLLHdCQUFBO0FFb1ZOO0FDbFdDO0VIY0sscUJBQUE7QUV1Vk47QUNyV0M7RUhjSyxvQkFBQTtBRTBWTjtBQ3hXQztFSGNLLHFCQUFBO0FFNlZOO0FDM1dDO0VIY0ssa0JBQUE7QUVnV047QUM5V0M7RUhjSyx1QkFBQTtBRW1XTjtBQ2pYQztFSGNLLG9CQUFBO0FFc1dOO0FDcFhDO0VIY0ssbUJBQUE7QUV5V047QUN2WEM7RUhjSyxvQkFBQTtBRTRXTjtBQzFYQztFSGNLLGlCQUFBO0FFK1dOO0FDN1hDO0VIY0ssb0JBQUE7QUVrWE47QUNoWUM7RUhjSyxtQkFBQTtBRXFYTjtBQ25ZQztFSGNLLG9CQUFBO0FFd1hOO0FDdFlDO0VIY0ssaUJBQUE7QUUyWE47QUN6WUM7RUhjSyxzQkFBQTtBRThYTjtBQzVZQztFSGNLLHFCQUFBO0FFaVlOO0FDL1lDO0VIY0ssc0JBQUE7QUVvWU47QUNsWkM7RUhjSyxtQkFBQTtBRXVZTjtBQ3JaQztFSGNLLHVCQUFBO0FFMFlOO0FDeFpDO0VIY0ssc0JBQUE7QUU2WU47QUMzWkM7RUhjSyx1QkFBQTtBRWdaTjtBQzlaQztFSGNLLG9CQUFBO0FFbVpOO0FDamFDO0VIY0sscUJBQUE7QUVzWk47QUNwYUM7RUhjSyxvQkFBQTtBRXlaTjtBQ3ZhQztFSGNLLHFCQUFBO0FFNFpOO0FDMWFDO0VIY0ssa0JBQUE7QUUrWk47QUM3YUM7RUhrQ0ssZ0JBQUE7QUU4WU47QUNoYkM7RUhrQ0ssZ0JBQUE7QUVpWk47QUNuYkM7RUhjSyxrQkFBQTtBRXdhTjtBQ3RiQztFSGNLLG1CQUFBO0FFMmFOO0FDemJDO0VIY0ssZUFBQTtBRThhTjtBQzViQztFSGNLLGtCQUFBO0FFaWJOO0FDL2JDO0VIY0ssaUJBQUE7QUVvYk47QUNsY0M7RUhjSyxvQkFBQTtBRXViTjtBQ3JjQztFSGNLLG1CQUFBO0FFMGJOO0FDeGNDO0VIY0ssa0JBQUE7QUU2Yk47QUMzY0M7RUhjSyxrQkFBQTtBRWdjTjtBQXpiQTtFQUFNLGNBQUE7QUE0Yk47QUExYkE7O0VBQ0UsV0FBQTtBQTZiRjtBQTFiQTs7RUFDRSxXQUFBO0FBNmJGO0FBMWJBOztFQUNFLFdBQUE7QUE2YkY7QUExYkE7O0VBQ0UsV0FBQTtBQTZiRjtBQTFiQTs7RUFDRSxjQUFBO0FBNmJGO0FBMWJBO0VBQ0UsMEJBQUE7QUE0YkY7QUFDQSxXQUFXO0FBemJYO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSx3QkFBQTtBQTJiRjtBQXhiQTtFQUNFLGVBQUE7QUEwYkY7QUF2YkE7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBeWJGO0FBdGJBOzs7OztFQUNFLFNBQUE7QUE0YkY7QUF6YkE7RUFDRSx1QkFBQTtBQTJiRjtBQXhiQTs7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQTJiRjtBQXhiQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUEwYkY7QUF2YkE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FBeWJGO0FBdGJBO0VBQ0UscUJBQUE7QUF3YkY7QUFyYkE7RUFDRSw2QkFBQTtBQXViRjtBQXBiQTtFQUNFLDBCQUFBO0FBc2JGO0FBbmJBO0VDM0ZFLG1CQUFBO0VBQXFCLGdCQUFBO0VBQWtCLHVCQUFBO0FEbWhCekM7QUFDQSxTQUFTO0FBcGJUO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFzYkY7QUFuYkE7O0VBRUUsa0JBQUE7RUFDQSxTQUFBO0VBQ0Esd0JBQUE7RUFDQSxvQkFBQTtFQUNBLG1DQUFBO0VBQ0EsK0JBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQXFiRjtBQWxiQTtFQUNFLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBb2JGO0FBamJBO0VBQ0UsV0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtBQW1iRjtBQWhiQTs7OztFQUlFLHdDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtQkFBQTtBQWtiRjtBQS9hQTtFQUNFLGFBQUE7QUFpYkY7QUE5YUE7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FBZ2JGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBjaGFyc2V0IFxcXCJ1dGYtOFxcXCI7XFxuLyoqXFxuICogI1NBQ1NTKGZvbnQtc2l6ZTsgZnM7IDEyLCAxNjsgMXB4KTtcXG4gKiBAcHJvcDog5bGe5oCn5ZCNXFxuICogQG5hbWU6IOe8qeWGmeWQjVxcbiAqIEBsaXN0OiDlgLzliJfooahcXG4gKiBAdW5pdDog5Y2V5L2N5o2i566X6KGo6L6+5byPLCDpu5jorqTkuLoxcHgsIOaDs+imgSByZW0g5aGr5YaZIDEvMTYqMXJlbVxcbiAqL1xcbiNTQUNTUyhAcHJvcDsgQG5hbWU7IEBsaXN0OyBAdW5pdCkgd2hlbiBub3QoQGxpc3QgPSBmYWxzZSkge1xcbiAgQGVzY2FwZVByb3A6IGVzY2FwZShAcHJvcCk7XFxuICBAZXNjYXBlTmFtZTogZXNjYXBlKEBuYW1lKTtcXG4gIC5sb29wKEBpKSB3aGVuIChAaSA8IGxlbmd0aChAbGlzdCkgKyAxKSB7XFxuICAgIEBpdGVtOiBleHRyYWN0KEBsaXN0LCBAaSk7XFxuICAgIC5Ae2VzY2FwZU5hbWV9QHtpdGVtfSB7XFxuICAgICAgQHtlc2NhcGVQcm9wfTogQGl0ZW0gKiBAdW5pdDtcXG4gICAgfVxcbiAgICAubG9vcChAaSsxKTtcXG4gIH1cXG5cXG4gIC5sb29wKDEpO1xcbn1cXG5cXG4vKipcXG4gKiAjU0FDU1MoZm9udC13ZWlnaHQ7IGZ3OyA0MDAsIDcwMCk7XFxuICogQHByb3A6IOWxnuaAp+WQjVxcbiAqIEBuYW1lOiDnvKnlhpnlkI1cXG4gKiBAbGlzdDog5YC85YiX6KGoXFxuICovXFxuI1NBQ1NTKEBwcm9wOyBAbmFtZTsgQGxpc3Q7KSB3aGVuIG5vdChAbGlzdCA9ZmFsc2UpIHtcXG4gIEBlc2NhcGVQcm9wOiBlc2NhcGUoQHByb3ApO1xcbiAgQGVzY2FwZU5hbWU6IGVzY2FwZShAbmFtZSk7XFxuICAubG9vcChAaSkgd2hlbiAoQGkgPCBsZW5ndGgoQGxpc3QpICsgMSkge1xcbiAgICBAaXRlbTogZXh0cmFjdChAbGlzdCwgQGkpO1xcbiAgICAuQHtlc2NhcGVOYW1lfUB7aXRlbX0ge1xcbiAgICAgIEB7ZXNjYXBlUHJvcH06IEBpdGVtO1xcbiAgICB9XFxuICAgIC5sb29wKEBpKzEpO1xcbiAgfVxcbiAgLmxvb3AoMSk7XFxufVxcblwiLFwiLmFpY3thbGlnbi1pdGVtczpjZW50ZXJ9XFxuLmFpZmV7YWxpZ24taXRlbXM6ZmxleC1lbmR9XFxuLmFpZnN7YWxpZ24taXRlbXM6ZmxleC1zdGFydH1cXG4uYjB7Ym90dG9tOjB9XFxuLmJjdHtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50fVxcbi5ibntib3JkZXI6bm9uZX1cXG4uYnIwe2JvcmRlci1yYWRpdXM6MH1cXG4uYnIxMDBcXFxcJXtib3JkZXItcmFkaXVzOjEwMCV9XFxuLmJzYmJ7Ym94LXNpemluZzpib3JkZXItYm94fVxcbi5iY19mZmZ7YmFja2dyb3VuZC1jb2xvcjojZmZmfVxcbi5iY18wMDB7YmFja2dyb3VuZC1jb2xvcjojMDAwfVxcbi5jXzAwMHtjb2xvcjojMDAwfVxcbi5jX2ZmZntjb2xvcjojZmZmfVxcbi5jYntjbGVhcjpib3RofVxcbi5jcHtjdXJzb3I6cG9pbnRlcn1cXG4uZGJ7ZGlzcGxheTpibG9ja31cXG4uZGZ7ZGlzcGxheTpmbGV4fVxcbi5kaXtkaXNwbGF5OmlubGluZX1cXG4uZGlie2Rpc3BsYXk6aW5saW5lLWJsb2NrfVxcbi5kaWZ7ZGlzcGxheTppbmxpbmUtZmxleH1cXG4uZG57ZGlzcGxheTpub25lfVxcbi5kdHtkaXNwbGF5OnRhYmxlfVxcbi5kdGN7ZGlzcGxheTp0YWJsZS1jZWxsfVxcbi5mMXtmbGV4OjE7bWluLXdpZHRoOjB9XFxuLmZhe2ZsZXg6YXV0b31cXG4uZmRje2ZsZXgtZGlyZWN0aW9uOmNvbHVtbn1cXG4uZmRye2ZsZXgtZGlyZWN0aW9uOnJvd31cXG4uZml7Zm9udDppbmhlcml0fVxcbi5mbHtmbG9hdDpsZWZ0fVxcbi5mcntmbG9hdDpyaWdodH1cXG4uZnMwe2ZvbnQtc2l6ZTowfVxcbi5mczF7ZmxleC1zaHJpbms6MX1cXG4uZnNpe2ZvbnQtc3R5bGU6aXRhbGljfVxcbi5mc257Zm9udC1zdHlsZTpub3JtYWx9XFxuLmZ2c2N7Zm9udC12YXJpYW50OnNtYWxsLWNhcHM7dGV4dC10cmFuc2Zvcm06bG93ZXJjYXNlfVxcbi5mdzEwMHtmb250LXdlaWdodDoxMDB9XFxuLmZ3MjAwe2ZvbnQtd2VpZ2h0OjIwMH1cXG4uZnczMDB7Zm9udC13ZWlnaHQ6MzAwfVxcbi5mdzQwMHtmb250LXdlaWdodDo0MDB9XFxuLmZ3NTAwe2ZvbnQtd2VpZ2h0OjUwMH1cXG4uZnc2MDB7Zm9udC13ZWlnaHQ6NjAwfVxcbi5mdzcwMHtmb250LXdlaWdodDo3MDB9XFxuLmZ3ODAwe2ZvbnQtd2VpZ2h0OjgwMH1cXG4uZnc5MDB7Zm9udC13ZWlnaHQ6OTAwfVxcbi5md257Zm9udC13ZWlnaHQ6NDAwfVxcbi5md3d7ZmxleC13cmFwOndyYXB9XFxuLmgxMDBcXFxcJXtoZWlnaHQ6MTAwJX1cXG4uamNje2p1c3RpZnktY29udGVudDpjZW50ZXJ9XFxuLmpjZmV7anVzdGlmeS1jb250ZW50OmZsZXgtZW5kfVxcbi5qY3Nhe2p1c3RpZnktY29udGVudDpzcGFjZS1hcm91bmR9XFxuLmpjc2J7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW59XFxuLmwwe2xlZnQ6MH1cXG4ubDEwMFxcXFwle2xlZnQ6MTAwJX1cXG4ubDUwXFxcXCV7bGVmdDo1MCV9XFxuLmxoMXtsaW5lLWhlaWdodDoxfVxcbi5saDFcXFxcLjJ7bGluZS1oZWlnaHQ6MS4yfVxcbi5saDFcXFxcLjV7bGluZS1oZWlnaHQ6MS41fVxcbi5saDFcXFxcLjh7bGluZS1oZWlnaHQ6MS44fVxcbi5sc257bGlzdC1zdHlsZTpub25lfVxcbi5tMHttYXJnaW46MH1cXG4ubWxhe21hcmdpbi1sZWZ0OmF1dG99XFxuLm1yYXttYXJnaW4tcmlnaHQ6YXV0b31cXG4ubXRhe21hcmdpbi10b3A6YXV0b31cXG4ubWJhe21hcmdpbi1ib3R0b206YXV0b31cXG4ubzB7b3BhY2l0eTowfVxcbi5vYXtvdmVyZmxvdzphdXRvOy13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOnRvdWNofVxcbi5vaHtvdmVyZmxvdzpoaWRkZW59XFxuLnAwe3BhZGRpbmc6MH1cXG4ucGF7cG9zaXRpb246YWJzb2x1dGV9XFxuLnBlbntwb2ludGVyLWV2ZW50czpub25lfVxcbi5wZntwb3NpdGlvbjpmaXhlZH1cXG4ucHJ7cG9zaXRpb246cmVsYXRpdmV9XFxuLnB0MTAwXFxcXCV7cGFkZGluZy10b3A6MTAwJX1cXG4ucjB7cmlnaHQ6MH1cXG4ucjEwMFxcXFwle3JpZ2h0OjEwMCV9XFxuLnQwe3RvcDowfVxcbi50MTAwXFxcXCV7dG9wOjEwMCV9XFxuLnQ1MFxcXFwle3RvcDo1MCV9XFxuLm13MTAwXFxcXCV7bWF4LXdpZHRoOjEwMCV9XFxuLnRhY3t0ZXh0LWFsaWduOmNlbnRlcn1cXG4udGFqe3RleHQtYWxpZ246anVzdGlmeX1cXG4udGFse3RleHQtYWxpZ246bGVmdH1cXG4udGFye3RleHQtYWxpZ246cmlnaHR9XFxuLnRkbnt0ZXh0LWRlY29yYXRpb246bm9uZX1cXG4udGR1e3RleHQtZGVjb3JhdGlvbjp1bmRlcmxpbmV9XFxuLnRsZnt0YWJsZS1sYXlvdXQ6Zml4ZWR9XFxuLnR0Y3t0ZXh0LXRyYW5zZm9ybTpjYXBpdGFsaXplfVxcbi50dGx7dGV4dC10cmFuc2Zvcm06bG93ZXJjYXNlfVxcbi50dG57dGV4dC10cmFuc2Zvcm06bm9uZX1cXG4udHR1e3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZX1cXG4udXNuey13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZX1cXG4udmFte3ZlcnRpY2FsLWFsaWduOm1pZGRsZX1cXG4udmF0e3ZlcnRpY2FsLWFsaWduOnRvcH1cXG4udmh7dmlzaWJpbGl0eTpoaWRkZW59XFxuLncxMDBcXFxcJXt3aWR0aDoxMDAlfVxcbi53YW57LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmV9XFxuLndzbnt3aGl0ZS1zcGFjZTpub3dyYXB9XFxuLnd3Ynd7d29yZC13cmFwOmJyZWFrLXdvcmQ7d29yZC1icmVhazpicmVhay1hbGx9XFxuLnppMXt6LWluZGV4OjF9XCIsXCJAaW1wb3J0ICd+c2Fjc3MnO1xcbkBpbXBvcnQgJ35zYWNzcy9sZXNzL1NBQ1NTLmxlc3MnO1xcbkBpbXBvcnQgJ35zYWNzcy9sZXNzL0hlbHBlcnMubGVzcyc7XFxuXFxuXFxuI1NBQ1NTKG1hcmdpbi10b3A7IG10OyAtMSwgNCwgOCwgMTIsIDE2OyAxLzE2cmVtKTtcXG4jU0FDU1MobWFyZ2luLWJvdHRvbTsgbWI7IC0xLCA0LCA4LCAxMiwgMTY7IDEvMTZyZW0pO1xcbiNTQUNTUyhtYXJnaW4tcmlnaHQ7IG1yOyAtMSwgNCwgOCwgMTIsIDE2OyAxLzE2cmVtKTtcXG4jU0FDU1MobWFyZ2luLWxlZnQ7IG1sOyAtMSwgNCwgOCwgMTIsIDE2OyAxLzE2cmVtKTtcXG5cXG4jU0FDU1MocGFkZGluZy10b3A7IHB0OyA0LCA4LCAxMiwgMTY7IDEvMTZyZW0pO1xcbiNTQUNTUyhwYWRkaW5nLXJpZ2h0OyBwdDsgNCwgOCwgMTIsIDE2OyAxLzE2cmVtKTtcXG4jU0FDU1MocGFkZGluZy1ib3R0b207IHBiOyA0LCA4LCAxMiwgMTY7IDEvMTZyZW0pO1xcbiNTQUNTUyhwYWRkaW5nLWxlZnQ7IHBsOyA0LCA4LCAxMiwgMTY7IDEvMTZyZW0pO1xcblxcbiNTQUNTUyhmb250LXdlaWdodDsgZnc7IDYwMCk7XFxuI1NBQ1NTKGZvbnQtd2VpZ2h0OyBmdzsgNjAwKTtcXG4jU0FDU1MoZm9udC1zaXplOyBmczsgMTIsIDE0LCAxNiwgMjA7IDEvMTZyZW0pO1xcbiNTQUNTUyhsaW5lLWhlaWdodDsgbGg7IDE2LCAyMCwgMjQ7IDEvMTZyZW0pO1xcbiNTQUNTUyhib3JkZXItcmFkaXVzOyBicjsgMiwgNDsgMXB4KTtcXG5cXG4uaDI0eyBoZWlnaHQ6IDEuNXJlbTsgfVxcblxcbi5jXFxcXDpsLCAuY1xcXFw6bFxcXFw6aDpob3ZlciB7XFxuICBjb2xvcjogIzExMTtcXG59XFxuXFxuLmNcXFxcOm0sIC5jXFxcXDptXFxcXDpoOmhvdmVyIHtcXG4gIGNvbG9yOiAjMzMzO1xcbn1cXG5cXG4uY1xcXFw6cywgLmNcXFxcOnNcXFxcOmg6aG92ZXIge1xcbiAgY29sb3I6ICM2NjY7XFxufVxcblxcbi5jXFxcXDp4cywgLmNcXFxcOnhzXFxcXDpoOmhvdmVyIHtcXG4gIGNvbG9yOiAjOTk5O1xcbn1cXG5cXG4uY1xcXFw6cHJpbWFyeSwgLmNcXFxcOnByaW1hcnlcXFxcOmg6aG92ZXIge1xcbiAgY29sb3I6ICM0YzVmZTI7XFxufVxcblxcbi50ZDIwMCB7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAyMDBtcztcXG59XFxuXFxuLyogb3RoZXJzICovXFxuKiB7XFxuICBmb250OiBpbmhlcml0O1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICB0ZXh0LWRlY29yYXRpb246IGluaGVyaXQ7XFxufVxcblxcbnJvb3Qge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG5zdmcge1xcbiAgd2lkdGg6IDFlbTtcXG4gIGhlaWdodDogMWVtO1xcbiAgZmlsbDogY3VycmVudENvbG9yO1xcbn1cXG5cXG5ib2R5LCBwcmUsIGZvcm0sIGlucHV0LCBwIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG59XFxuXFxuYm9keSwgaHRtbCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG59XFxuXFxuLmdfd3JhcCB7XFxuICBtYXJnaW4tbGVmdDogMXJlbTtcXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcXG59XFxuXFxuLmdfcm93IHtcXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcXG4gIHBhZGRpbmctcmlnaHQ6IDFyZW07XFxufVxcblxcbi5yZWFjdC1wYWdlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLmdfaHIge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XFxufVxcblxcbi5nX2hyX3Qge1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZGQ7XFxufVxcblxcbi5nX2VsbCB7XFxuICAjRWxsaXBzaXMoKTtcXG59XFxuXFxuLyogdGlwcyAqL1xcbi5nX3RpcFtkYXRhLXRpdGxlXSB7XFxuICB0ZXh0LWluZGVudDogMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbn1cXG5cXG4uZ190aXBbZGF0YS10aXRsZV06OmJlZm9yZSxcXG4uZ190aXBbZGF0YS10aXRsZV06OmFmdGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDUwJTtcXG4gIC1tcy1wb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgei1pbmRleDogMTAwO1xcbn1cXG5cXG4uZ190aXBbZGF0YS10aXRsZV06OmJlZm9yZSB7XFxuICBjb250ZW50OiBhdHRyKGRhdGEtdGl0bGUpO1xcbiAgdG9wOiAtNDFweDtcXG4gIG1heC13aWR0aDogOTB2dztcXG4gIHBhZGRpbmc6IDZweCAxMHB4O1xcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzczYzQyO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuLmdfdGlwW2RhdGEtdGl0bGVdOjphZnRlciB7XFxuICBjb250ZW50OiAnJztcXG4gIHdpZHRoOiAwO1xcbiAgaGVpZ2h0OiAwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJvcmRlcjogNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzM3M2M0MjtcXG4gIHRvcDogLTEycHg7XFxufVxcblxcbi5nX3RpcFtkYXRhLXRpdGxlXTpob3Zlcjo6YmVmb3JlLFxcbi5nX3RpcFtkYXRhLXRpdGxlXTpob3Zlcjo6YWZ0ZXIsXFxuLmdfdGlwW2RhdGEtdGl0bGVdOmZvY3VzOjpiZWZvcmUsXFxuLmdfdGlwW2RhdGEtdGl0bGVdOmZvY3VzOjphZnRlciB7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IHZpc2liaWxpdHkgLjFzIC4xcztcXG4gIHRyYW5zaXRpb246IHZpc2liaWxpdHkgLjFzIC4xcztcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcblxcbi5nX3RpcFtkYXRhLXRpdGxlXTpob3ZlciB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG5zZWxlY3R7XFxuICBmb250LXNpemU6IDEyLzE2KjFyZW07XFxuICBoZWlnaHQ6IDI0LzE2KjFyZW07XFxuICBib3JkZXItY29sb3I6ICMwMDAwMDA7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxufVwiLFwiLyog5riF6Zmk5rWu5YqoICovXFxuI0NsZWFyZml4KCl7XFxuICAmOmFmdGVye1xcbiAgICBkaXNwbGF5OiB0YWJsZTsgY29udGVudDogJyc7IGNsZWFyOiBib3RoO1xcbiAgfVxcbn1cXG5cXG4vKiDmloflrZfotoXlh7rkuIDooYzngrnngrnngrkgKi9cXG4jRWxsaXBzaXMoKXtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7IG92ZXJmbG93OiBoaWRkZW47IHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbn1cXG5cXG4vKiDlpJrooYzmlofmnKzotoXlh7rngrnngrnngrkgKi9cXG4jRWxsaXBzaXMtbXVsdGlwbGUoKXtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94OyBvdmVyZmxvdzogaGlkZGVuOyB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7IC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XFxufVxcblxcbi8qIOeUqOihqOagvOeahOaWueW8j+aSkea7oea1ruWKqOS5i+WQjueahOWJqeS9meepuumXtCAqL1xcbiNDZWxsKCl7XFxuICBkaXNwbGF5OiB0YWJsZS1jZWxsOyAqZGlzcGxheTogaW5saW5lLWJsb2NrOyB3aWR0aDogMjAwMHB4OyAqd2lkdGg6IGF1dG87XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJcIixcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJcIixcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgJiYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXSk7IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImZ1bmN0aW9uIGRlZXBGcmVlemUob2JqKSB7XG4gICAgaWYgKG9iaiBpbnN0YW5jZW9mIE1hcCkge1xuICAgICAgICBvYmouY2xlYXIgPSBvYmouZGVsZXRlID0gb2JqLnNldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignbWFwIGlzIHJlYWQtb25seScpO1xuICAgICAgICB9O1xuICAgIH0gZWxzZSBpZiAob2JqIGluc3RhbmNlb2YgU2V0KSB7XG4gICAgICAgIG9iai5hZGQgPSBvYmouY2xlYXIgPSBvYmouZGVsZXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdzZXQgaXMgcmVhZC1vbmx5Jyk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gRnJlZXplIHNlbGZcbiAgICBPYmplY3QuZnJlZXplKG9iaik7XG5cbiAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhvYmopLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgdmFyIHByb3AgPSBvYmpbbmFtZV07XG5cbiAgICAgICAgLy8gRnJlZXplIHByb3AgaWYgaXQgaXMgYW4gb2JqZWN0XG4gICAgICAgIGlmICh0eXBlb2YgcHJvcCA9PSAnb2JqZWN0JyAmJiAhT2JqZWN0LmlzRnJvemVuKHByb3ApKSB7XG4gICAgICAgICAgICBkZWVwRnJlZXplKHByb3ApO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gb2JqO1xufVxuXG52YXIgZGVlcEZyZWV6ZUVzNiA9IGRlZXBGcmVlemU7XG52YXIgX2RlZmF1bHQgPSBkZWVwRnJlZXplO1xuZGVlcEZyZWV6ZUVzNi5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5cbi8qKiBAaW1wbGVtZW50cyBDYWxsYmFja1Jlc3BvbnNlICovXG5jbGFzcyBSZXNwb25zZSB7XG4gIC8qKlxuICAgKiBAcGFyYW0ge0NvbXBpbGVkTW9kZX0gbW9kZVxuICAgKi9cbiAgY29uc3RydWN0b3IobW9kZSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZmluZWRcbiAgICBpZiAobW9kZS5kYXRhID09PSB1bmRlZmluZWQpIG1vZGUuZGF0YSA9IHt9O1xuXG4gICAgdGhpcy5kYXRhID0gbW9kZS5kYXRhO1xuICAgIHRoaXMuaXNNYXRjaElnbm9yZWQgPSBmYWxzZTtcbiAgfVxuXG4gIGlnbm9yZU1hdGNoKCkge1xuICAgIHRoaXMuaXNNYXRjaElnbm9yZWQgPSB0cnVlO1xuICB9XG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBlc2NhcGVIVE1MKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZVxuICAgIC5yZXBsYWNlKC8mL2csICcmYW1wOycpXG4gICAgLnJlcGxhY2UoLzwvZywgJyZsdDsnKVxuICAgIC5yZXBsYWNlKC8+L2csICcmZ3Q7JylcbiAgICAucmVwbGFjZSgvXCIvZywgJyZxdW90OycpXG4gICAgLnJlcGxhY2UoLycvZywgJyYjeDI3OycpO1xufVxuXG4vKipcbiAqIHBlcmZvcm1zIGEgc2hhbGxvdyBtZXJnZSBvZiBtdWx0aXBsZSBvYmplY3RzIGludG8gb25lXG4gKlxuICogQHRlbXBsYXRlIFRcbiAqIEBwYXJhbSB7VH0gb3JpZ2luYWxcbiAqIEBwYXJhbSB7UmVjb3JkPHN0cmluZyxhbnk+W119IG9iamVjdHNcbiAqIEByZXR1cm5zIHtUfSBhIHNpbmdsZSBuZXcgb2JqZWN0XG4gKi9cbmZ1bmN0aW9uIGluaGVyaXQob3JpZ2luYWwsIC4uLm9iamVjdHMpIHtcbiAgLyoqIEB0eXBlIFJlY29yZDxzdHJpbmcsYW55PiAqL1xuICBjb25zdCByZXN1bHQgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXG4gIGZvciAoY29uc3Qga2V5IGluIG9yaWdpbmFsKSB7XG4gICAgcmVzdWx0W2tleV0gPSBvcmlnaW5hbFtrZXldO1xuICB9XG4gIG9iamVjdHMuZm9yRWFjaChmdW5jdGlvbihvYmopIHtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBvYmopIHtcbiAgICAgIHJlc3VsdFtrZXldID0gb2JqW2tleV07XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIC8qKiBAdHlwZSB7VH0gKi8gKHJlc3VsdCk7XG59XG5cbi8qKlxuICogQHR5cGVkZWYge29iamVjdH0gUmVuZGVyZXJcbiAqIEBwcm9wZXJ0eSB7KHRleHQ6IHN0cmluZykgPT4gdm9pZH0gYWRkVGV4dFxuICogQHByb3BlcnR5IHsobm9kZTogTm9kZSkgPT4gdm9pZH0gb3Blbk5vZGVcbiAqIEBwcm9wZXJ0eSB7KG5vZGU6IE5vZGUpID0+IHZvaWR9IGNsb3NlTm9kZVxuICogQHByb3BlcnR5IHsoKSA9PiBzdHJpbmd9IHZhbHVlXG4gKi9cblxuLyoqIEB0eXBlZGVmIHt7a2luZD86IHN0cmluZywgc3VibGFuZ3VhZ2U/OiBib29sZWFufX0gTm9kZSAqL1xuLyoqIEB0eXBlZGVmIHt7d2FsazogKHI6IFJlbmRlcmVyKSA9PiB2b2lkfX0gVHJlZSAqL1xuLyoqICovXG5cbmNvbnN0IFNQQU5fQ0xPU0UgPSAnPC9zcGFuPic7XG5cbi8qKlxuICogRGV0ZXJtaW5lcyBpZiBhIG5vZGUgbmVlZHMgdG8gYmUgd3JhcHBlZCBpbiA8c3Bhbj5cbiAqXG4gKiBAcGFyYW0ge05vZGV9IG5vZGUgKi9cbmNvbnN0IGVtaXRzV3JhcHBpbmdUYWdzID0gKG5vZGUpID0+IHtcbiAgcmV0dXJuICEhbm9kZS5raW5kO1xufTtcblxuLyoqIEB0eXBlIHtSZW5kZXJlcn0gKi9cbmNsYXNzIEhUTUxSZW5kZXJlciB7XG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmV3IEhUTUxSZW5kZXJlclxuICAgKlxuICAgKiBAcGFyYW0ge1RyZWV9IHBhcnNlVHJlZSAtIHRoZSBwYXJzZSB0cmVlIChtdXN0IHN1cHBvcnQgYHdhbGtgIEFQSSlcbiAgICogQHBhcmFtIHt7Y2xhc3NQcmVmaXg6IHN0cmluZ319IG9wdGlvbnNcbiAgICovXG4gIGNvbnN0cnVjdG9yKHBhcnNlVHJlZSwgb3B0aW9ucykge1xuICAgIHRoaXMuYnVmZmVyID0gXCJcIjtcbiAgICB0aGlzLmNsYXNzUHJlZml4ID0gb3B0aW9ucy5jbGFzc1ByZWZpeDtcbiAgICBwYXJzZVRyZWUud2Fsayh0aGlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIHRleHRzIHRvIHRoZSBvdXRwdXQgc3RyZWFtXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0ICovXG4gIGFkZFRleHQodGV4dCkge1xuICAgIHRoaXMuYnVmZmVyICs9IGVzY2FwZUhUTUwodGV4dCk7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIG5vZGUgb3BlbiB0byB0aGUgb3V0cHV0IHN0cmVhbSAoaWYgbmVlZGVkKVxuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGUgKi9cbiAgb3Blbk5vZGUobm9kZSkge1xuICAgIGlmICghZW1pdHNXcmFwcGluZ1RhZ3Mobm9kZSkpIHJldHVybjtcblxuICAgIGxldCBjbGFzc05hbWUgPSBub2RlLmtpbmQ7XG4gICAgaWYgKCFub2RlLnN1Ymxhbmd1YWdlKSB7XG4gICAgICBjbGFzc05hbWUgPSBgJHt0aGlzLmNsYXNzUHJlZml4fSR7Y2xhc3NOYW1lfWA7XG4gICAgfVxuICAgIHRoaXMuc3BhbihjbGFzc05hbWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSBub2RlIGNsb3NlIHRvIHRoZSBvdXRwdXQgc3RyZWFtIChpZiBuZWVkZWQpXG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZSAqL1xuICBjbG9zZU5vZGUobm9kZSkge1xuICAgIGlmICghZW1pdHNXcmFwcGluZ1RhZ3Mobm9kZSkpIHJldHVybjtcblxuICAgIHRoaXMuYnVmZmVyICs9IFNQQU5fQ0xPU0U7XG4gIH1cblxuICAvKipcbiAgICogcmV0dXJucyB0aGUgYWNjdW11bGF0ZWQgYnVmZmVyXG4gICovXG4gIHZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLmJ1ZmZlcjtcbiAgfVxuXG4gIC8vIGhlbHBlcnNcblxuICAvKipcbiAgICogQnVpbGRzIGEgc3BhbiBlbGVtZW50XG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWUgKi9cbiAgc3BhbihjbGFzc05hbWUpIHtcbiAgICB0aGlzLmJ1ZmZlciArPSBgPHNwYW4gY2xhc3M9XCIke2NsYXNzTmFtZX1cIj5gO1xuICB9XG59XG5cbi8qKiBAdHlwZWRlZiB7e2tpbmQ/OiBzdHJpbmcsIHN1Ymxhbmd1YWdlPzogYm9vbGVhbiwgY2hpbGRyZW46IE5vZGVbXX0gfCBzdHJpbmd9IE5vZGUgKi9cbi8qKiBAdHlwZWRlZiB7e2tpbmQ/OiBzdHJpbmcsIHN1Ymxhbmd1YWdlPzogYm9vbGVhbiwgY2hpbGRyZW46IE5vZGVbXX0gfSBEYXRhTm9kZSAqL1xuLyoqICAqL1xuXG5jbGFzcyBUb2tlblRyZWUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvKiogQHR5cGUgRGF0YU5vZGUgKi9cbiAgICB0aGlzLnJvb3ROb2RlID0geyBjaGlsZHJlbjogW10gfTtcbiAgICB0aGlzLnN0YWNrID0gW3RoaXMucm9vdE5vZGVdO1xuICB9XG5cbiAgZ2V0IHRvcCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGFja1t0aGlzLnN0YWNrLmxlbmd0aCAtIDFdO1xuICB9XG5cbiAgZ2V0IHJvb3QoKSB7IHJldHVybiB0aGlzLnJvb3ROb2RlOyB9XG5cbiAgLyoqIEBwYXJhbSB7Tm9kZX0gbm9kZSAqL1xuICBhZGQobm9kZSkge1xuICAgIHRoaXMudG9wLmNoaWxkcmVuLnB1c2gobm9kZSk7XG4gIH1cblxuICAvKiogQHBhcmFtIHtzdHJpbmd9IGtpbmQgKi9cbiAgb3Blbk5vZGUoa2luZCkge1xuICAgIC8qKiBAdHlwZSBOb2RlICovXG4gICAgY29uc3Qgbm9kZSA9IHsga2luZCwgY2hpbGRyZW46IFtdIH07XG4gICAgdGhpcy5hZGQobm9kZSk7XG4gICAgdGhpcy5zdGFjay5wdXNoKG5vZGUpO1xuICB9XG5cbiAgY2xvc2VOb2RlKCkge1xuICAgIGlmICh0aGlzLnN0YWNrLmxlbmd0aCA+IDEpIHtcbiAgICAgIHJldHVybiB0aGlzLnN0YWNrLnBvcCgpO1xuICAgIH1cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZpbmVkXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIGNsb3NlQWxsTm9kZXMoKSB7XG4gICAgd2hpbGUgKHRoaXMuY2xvc2VOb2RlKCkpO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh0aGlzLnJvb3ROb2RlLCBudWxsLCA0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAdHlwZWRlZiB7IGltcG9ydChcIi4vaHRtbF9yZW5kZXJlclwiKS5SZW5kZXJlciB9IFJlbmRlcmVyXG4gICAqIEBwYXJhbSB7UmVuZGVyZXJ9IGJ1aWxkZXJcbiAgICovXG4gIHdhbGsoYnVpbGRlcikge1xuICAgIC8vIHRoaXMgZG9lcyBub3RcbiAgICByZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci5fd2FsayhidWlsZGVyLCB0aGlzLnJvb3ROb2RlKTtcbiAgICAvLyB0aGlzIHdvcmtzXG4gICAgLy8gcmV0dXJuIFRva2VuVHJlZS5fd2FsayhidWlsZGVyLCB0aGlzLnJvb3ROb2RlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1JlbmRlcmVyfSBidWlsZGVyXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKi9cbiAgc3RhdGljIF93YWxrKGJ1aWxkZXIsIG5vZGUpIHtcbiAgICBpZiAodHlwZW9mIG5vZGUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIGJ1aWxkZXIuYWRkVGV4dChub2RlKTtcbiAgICB9IGVsc2UgaWYgKG5vZGUuY2hpbGRyZW4pIHtcbiAgICAgIGJ1aWxkZXIub3Blbk5vZGUobm9kZSk7XG4gICAgICBub2RlLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB0aGlzLl93YWxrKGJ1aWxkZXIsIGNoaWxkKSk7XG4gICAgICBidWlsZGVyLmNsb3NlTm9kZShub2RlKTtcbiAgICB9XG4gICAgcmV0dXJuIGJ1aWxkZXI7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqL1xuICBzdGF0aWMgX2NvbGxhcHNlKG5vZGUpIHtcbiAgICBpZiAodHlwZW9mIG5vZGUgPT09IFwic3RyaW5nXCIpIHJldHVybjtcbiAgICBpZiAoIW5vZGUuY2hpbGRyZW4pIHJldHVybjtcblxuICAgIGlmIChub2RlLmNoaWxkcmVuLmV2ZXJ5KGVsID0+IHR5cGVvZiBlbCA9PT0gXCJzdHJpbmdcIikpIHtcbiAgICAgIC8vIG5vZGUudGV4dCA9IG5vZGUuY2hpbGRyZW4uam9pbihcIlwiKTtcbiAgICAgIC8vIGRlbGV0ZSBub2RlLmNoaWxkcmVuO1xuICAgICAgbm9kZS5jaGlsZHJlbiA9IFtub2RlLmNoaWxkcmVuLmpvaW4oXCJcIildO1xuICAgIH0gZWxzZSB7XG4gICAgICBub2RlLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICAgIFRva2VuVHJlZS5fY29sbGFwc2UoY2hpbGQpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICBDdXJyZW50bHkgdGhpcyBpcyBhbGwgcHJpdmF0ZSBBUEksIGJ1dCB0aGlzIGlzIHRoZSBtaW5pbWFsIEFQSSBuZWNlc3NhcnlcbiAgdGhhdCBhbiBFbWl0dGVyIG11c3QgaW1wbGVtZW50IHRvIGZ1bGx5IHN1cHBvcnQgdGhlIHBhcnNlci5cblxuICBNaW5pbWFsIGludGVyZmFjZTpcblxuICAtIGFkZEtleXdvcmQodGV4dCwga2luZClcbiAgLSBhZGRUZXh0KHRleHQpXG4gIC0gYWRkU3VibGFuZ3VhZ2UoZW1pdHRlciwgc3ViTGFuZ3VhZ2VOYW1lKVxuICAtIGZpbmFsaXplKClcbiAgLSBvcGVuTm9kZShraW5kKVxuICAtIGNsb3NlTm9kZSgpXG4gIC0gY2xvc2VBbGxOb2RlcygpXG4gIC0gdG9IVE1MKClcblxuKi9cblxuLyoqXG4gKiBAaW1wbGVtZW50cyB7RW1pdHRlcn1cbiAqL1xuY2xhc3MgVG9rZW5UcmVlRW1pdHRlciBleHRlbmRzIFRva2VuVHJlZSB7XG4gIC8qKlxuICAgKiBAcGFyYW0geyp9IG9wdGlvbnNcbiAgICovXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRleHRcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtpbmRcbiAgICovXG4gIGFkZEtleXdvcmQodGV4dCwga2luZCkge1xuICAgIGlmICh0ZXh0ID09PSBcIlwiKSB7IHJldHVybjsgfVxuXG4gICAgdGhpcy5vcGVuTm9kZShraW5kKTtcbiAgICB0aGlzLmFkZFRleHQodGV4dCk7XG4gICAgdGhpcy5jbG9zZU5vZGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dFxuICAgKi9cbiAgYWRkVGV4dCh0ZXh0KSB7XG4gICAgaWYgKHRleHQgPT09IFwiXCIpIHsgcmV0dXJuOyB9XG5cbiAgICB0aGlzLmFkZCh0ZXh0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0VtaXR0ZXIgJiB7cm9vdDogRGF0YU5vZGV9fSBlbWl0dGVyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAqL1xuICBhZGRTdWJsYW5ndWFnZShlbWl0dGVyLCBuYW1lKSB7XG4gICAgLyoqIEB0eXBlIERhdGFOb2RlICovXG4gICAgY29uc3Qgbm9kZSA9IGVtaXR0ZXIucm9vdDtcbiAgICBub2RlLmtpbmQgPSBuYW1lO1xuICAgIG5vZGUuc3VibGFuZ3VhZ2UgPSB0cnVlO1xuICAgIHRoaXMuYWRkKG5vZGUpO1xuICB9XG5cbiAgdG9IVE1MKCkge1xuICAgIGNvbnN0IHJlbmRlcmVyID0gbmV3IEhUTUxSZW5kZXJlcih0aGlzLCB0aGlzLm9wdGlvbnMpO1xuICAgIHJldHVybiByZW5kZXJlci52YWx1ZSgpO1xuICB9XG5cbiAgZmluYWxpemUoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqIEByZXR1cm5zIHtSZWdFeHB9XG4gKiAqL1xuZnVuY3Rpb24gZXNjYXBlKHZhbHVlKSB7XG4gIHJldHVybiBuZXcgUmVnRXhwKHZhbHVlLnJlcGxhY2UoL1stL1xcXFxeJCorPy4oKXxbXFxde31dL2csICdcXFxcJCYnKSwgJ20nKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge1JlZ0V4cCB8IHN0cmluZyB9IHJlXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBzb3VyY2UocmUpIHtcbiAgaWYgKCFyZSkgcmV0dXJuIG51bGw7XG4gIGlmICh0eXBlb2YgcmUgPT09IFwic3RyaW5nXCIpIHJldHVybiByZTtcblxuICByZXR1cm4gcmUuc291cmNlO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7Li4uKFJlZ0V4cCB8IHN0cmluZykgfSBhcmdzXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBjb25jYXQoLi4uYXJncykge1xuICBjb25zdCBqb2luZWQgPSBhcmdzLm1hcCgoeCkgPT4gc291cmNlKHgpKS5qb2luKFwiXCIpO1xuICByZXR1cm4gam9pbmVkO1xufVxuXG4vKipcbiAqIEFueSBvZiB0aGUgcGFzc2VkIGV4cHJlc3NzaW9ucyBtYXkgbWF0Y2hcbiAqXG4gKiBDcmVhdGVzIGEgaHVnZSB0aGlzIHwgdGhpcyB8IHRoYXQgfCB0aGF0IG1hdGNoXG4gKiBAcGFyYW0geyhSZWdFeHAgfCBzdHJpbmcpW10gfSBhcmdzXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBlaXRoZXIoLi4uYXJncykge1xuICBjb25zdCBqb2luZWQgPSAnKCcgKyBhcmdzLm1hcCgoeCkgPT4gc291cmNlKHgpKS5qb2luKFwifFwiKSArIFwiKVwiO1xuICByZXR1cm4gam9pbmVkO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7UmVnRXhwfSByZVxuICogQHJldHVybnMge251bWJlcn1cbiAqL1xuZnVuY3Rpb24gY291bnRNYXRjaEdyb3VwcyhyZSkge1xuICByZXR1cm4gKG5ldyBSZWdFeHAocmUudG9TdHJpbmcoKSArICd8JykpLmV4ZWMoJycpLmxlbmd0aCAtIDE7XG59XG5cbi8qKlxuICogRG9lcyBsZXhlbWUgc3RhcnQgd2l0aCBhIHJlZ3VsYXIgZXhwcmVzc2lvbiBtYXRjaCBhdCB0aGUgYmVnaW5uaW5nXG4gKiBAcGFyYW0ge1JlZ0V4cH0gcmVcbiAqIEBwYXJhbSB7c3RyaW5nfSBsZXhlbWVcbiAqL1xuZnVuY3Rpb24gc3RhcnRzV2l0aChyZSwgbGV4ZW1lKSB7XG4gIGNvbnN0IG1hdGNoID0gcmUgJiYgcmUuZXhlYyhsZXhlbWUpO1xuICByZXR1cm4gbWF0Y2ggJiYgbWF0Y2guaW5kZXggPT09IDA7XG59XG5cbi8vIEJBQ0tSRUZfUkUgbWF0Y2hlcyBhbiBvcGVuIHBhcmVudGhlc2lzIG9yIGJhY2tyZWZlcmVuY2UuIFRvIGF2b2lkXG4vLyBhbiBpbmNvcnJlY3QgcGFyc2UsIGl0IGFkZGl0aW9uYWxseSBtYXRjaGVzIHRoZSBmb2xsb3dpbmc6XG4vLyAtIFsuLi5dIGVsZW1lbnRzLCB3aGVyZSB0aGUgbWVhbmluZyBvZiBwYXJlbnRoZXNlcyBhbmQgZXNjYXBlcyBjaGFuZ2Vcbi8vIC0gb3RoZXIgZXNjYXBlIHNlcXVlbmNlcywgc28gd2UgZG8gbm90IG1pc3BhcnNlIGVzY2FwZSBzZXF1ZW5jZXMgYXNcbi8vICAgaW50ZXJlc3RpbmcgZWxlbWVudHNcbi8vIC0gbm9uLW1hdGNoaW5nIG9yIGxvb2thaGVhZCBwYXJlbnRoZXNlcywgd2hpY2ggZG8gbm90IGNhcHR1cmUuIFRoZXNlXG4vLyAgIGZvbGxvdyB0aGUgJygnIHdpdGggYSAnPycuXG5jb25zdCBCQUNLUkVGX1JFID0gL1xcWyg/OlteXFxcXFxcXV18XFxcXC4pKlxcXXxcXChcXD8/fFxcXFwoWzEtOV1bMC05XSopfFxcXFwuLztcblxuLy8gam9pbiBsb2dpY2FsbHkgY29tcHV0ZXMgcmVnZXhwcy5qb2luKHNlcGFyYXRvciksIGJ1dCBmaXhlcyB0aGVcbi8vIGJhY2tyZWZlcmVuY2VzIHNvIHRoZXkgY29udGludWUgdG8gbWF0Y2guXG4vLyBpdCBhbHNvIHBsYWNlcyBlYWNoIGluZGl2aWR1YWwgcmVndWxhciBleHByZXNzaW9uIGludG8gaXQncyBvd25cbi8vIG1hdGNoIGdyb3VwLCBrZWVwaW5nIHRyYWNrIG9mIHRoZSBzZXF1ZW5jaW5nIG9mIHRob3NlIG1hdGNoIGdyb3Vwc1xuLy8gaXMgY3VycmVudGx5IGFuIGV4ZXJjaXNlIGZvciB0aGUgY2FsbGVyLiA6LSlcbi8qKlxuICogQHBhcmFtIHsoc3RyaW5nIHwgUmVnRXhwKVtdfSByZWdleHBzXG4gKiBAcGFyYW0ge3N0cmluZ30gc2VwYXJhdG9yXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBqb2luKHJlZ2V4cHMsIHNlcGFyYXRvciA9IFwifFwiKSB7XG4gIGxldCBudW1DYXB0dXJlcyA9IDA7XG5cbiAgcmV0dXJuIHJlZ2V4cHMubWFwKChyZWdleCkgPT4ge1xuICAgIG51bUNhcHR1cmVzICs9IDE7XG4gICAgY29uc3Qgb2Zmc2V0ID0gbnVtQ2FwdHVyZXM7XG4gICAgbGV0IHJlID0gc291cmNlKHJlZ2V4KTtcbiAgICBsZXQgb3V0ID0gJyc7XG5cbiAgICB3aGlsZSAocmUubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgbWF0Y2ggPSBCQUNLUkVGX1JFLmV4ZWMocmUpO1xuICAgICAgaWYgKCFtYXRjaCkge1xuICAgICAgICBvdXQgKz0gcmU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgb3V0ICs9IHJlLnN1YnN0cmluZygwLCBtYXRjaC5pbmRleCk7XG4gICAgICByZSA9IHJlLnN1YnN0cmluZyhtYXRjaC5pbmRleCArIG1hdGNoWzBdLmxlbmd0aCk7XG4gICAgICBpZiAobWF0Y2hbMF1bMF0gPT09ICdcXFxcJyAmJiBtYXRjaFsxXSkge1xuICAgICAgICAvLyBBZGp1c3QgdGhlIGJhY2tyZWZlcmVuY2UuXG4gICAgICAgIG91dCArPSAnXFxcXCcgKyBTdHJpbmcoTnVtYmVyKG1hdGNoWzFdKSArIG9mZnNldCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvdXQgKz0gbWF0Y2hbMF07XG4gICAgICAgIGlmIChtYXRjaFswXSA9PT0gJygnKSB7XG4gICAgICAgICAgbnVtQ2FwdHVyZXMrKztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb3V0O1xuICB9KS5tYXAocmUgPT4gYCgke3JlfSlgKS5qb2luKHNlcGFyYXRvcik7XG59XG5cbi8vIENvbW1vbiByZWdleHBzXG5jb25zdCBNQVRDSF9OT1RISU5HX1JFID0gL1xcYlxcQi87XG5jb25zdCBJREVOVF9SRSA9ICdbYS16QS1aXVxcXFx3Kic7XG5jb25zdCBVTkRFUlNDT1JFX0lERU5UX1JFID0gJ1thLXpBLVpfXVxcXFx3Kic7XG5jb25zdCBOVU1CRVJfUkUgPSAnXFxcXGJcXFxcZCsoXFxcXC5cXFxcZCspPyc7XG5jb25zdCBDX05VTUJFUl9SRSA9ICcoLT8pKFxcXFxiMFt4WF1bYS1mQS1GMC05XSt8KFxcXFxiXFxcXGQrKFxcXFwuXFxcXGQqKT98XFxcXC5cXFxcZCspKFtlRV1bLStdP1xcXFxkKyk/KSc7IC8vIDB4Li4uLCAwLi4uLCBkZWNpbWFsLCBmbG9hdFxuY29uc3QgQklOQVJZX05VTUJFUl9SRSA9ICdcXFxcYigwYlswMV0rKSc7IC8vIDBiLi4uXG5jb25zdCBSRV9TVEFSVEVSU19SRSA9ICchfCE9fCE9PXwlfCU9fCZ8JiZ8Jj18XFxcXCp8XFxcXCo9fFxcXFwrfFxcXFwrPXwsfC18LT18Lz18L3w6fDt8PDx8PDw9fDw9fDx8PT09fD09fD18Pj4+PXw+Pj18Pj18Pj4+fD4+fD58XFxcXD98XFxcXFt8XFxcXHt8XFxcXCh8XFxcXF58XFxcXF49fFxcXFx8fFxcXFx8PXxcXFxcfFxcXFx8fH4nO1xuXG4vKipcbiogQHBhcmFtIHsgUGFydGlhbDxNb2RlPiAmIHtiaW5hcnk/OiBzdHJpbmcgfCBSZWdFeHB9IH0gb3B0c1xuKi9cbmNvbnN0IFNIRUJBTkcgPSAob3B0cyA9IHt9KSA9PiB7XG4gIGNvbnN0IGJlZ2luU2hlYmFuZyA9IC9eIyFbIF0qXFwvLztcbiAgaWYgKG9wdHMuYmluYXJ5KSB7XG4gICAgb3B0cy5iZWdpbiA9IGNvbmNhdChcbiAgICAgIGJlZ2luU2hlYmFuZyxcbiAgICAgIC8uKlxcYi8sXG4gICAgICBvcHRzLmJpbmFyeSxcbiAgICAgIC9cXGIuKi8pO1xuICB9XG4gIHJldHVybiBpbmhlcml0KHtcbiAgICBjbGFzc05hbWU6ICdtZXRhJyxcbiAgICBiZWdpbjogYmVnaW5TaGViYW5nLFxuICAgIGVuZDogLyQvLFxuICAgIHJlbGV2YW5jZTogMCxcbiAgICAvKiogQHR5cGUge01vZGVDYWxsYmFja30gKi9cbiAgICBcIm9uOmJlZ2luXCI6IChtLCByZXNwKSA9PiB7XG4gICAgICBpZiAobS5pbmRleCAhPT0gMCkgcmVzcC5pZ25vcmVNYXRjaCgpO1xuICAgIH1cbiAgfSwgb3B0cyk7XG59O1xuXG4vLyBDb21tb24gbW9kZXNcbmNvbnN0IEJBQ0tTTEFTSF9FU0NBUEUgPSB7XG4gIGJlZ2luOiAnXFxcXFxcXFxbXFxcXHNcXFxcU10nLCByZWxldmFuY2U6IDBcbn07XG5jb25zdCBBUE9TX1NUUklOR19NT0RFID0ge1xuICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICBiZWdpbjogJ1xcJycsXG4gIGVuZDogJ1xcJycsXG4gIGlsbGVnYWw6ICdcXFxcbicsXG4gIGNvbnRhaW5zOiBbQkFDS1NMQVNIX0VTQ0FQRV1cbn07XG5jb25zdCBRVU9URV9TVFJJTkdfTU9ERSA9IHtcbiAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgYmVnaW46ICdcIicsXG4gIGVuZDogJ1wiJyxcbiAgaWxsZWdhbDogJ1xcXFxuJyxcbiAgY29udGFpbnM6IFtCQUNLU0xBU0hfRVNDQVBFXVxufTtcbmNvbnN0IFBIUkFTQUxfV09SRFNfTU9ERSA9IHtcbiAgYmVnaW46IC9cXGIoYXxhbnx0aGV8YXJlfEknbXxpc24ndHxkb24ndHxkb2Vzbid0fHdvbid0fGJ1dHxqdXN0fHNob3VsZHxwcmV0dHl8c2ltcGx5fGVub3VnaHxnb25uYXxnb2luZ3x3dGZ8c298c3VjaHx3aWxsfHlvdXx5b3VyfHRoZXl8bGlrZXxtb3JlKVxcYi9cbn07XG4vKipcbiAqIENyZWF0ZXMgYSBjb21tZW50IG1vZGVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZyB8IFJlZ0V4cH0gYmVnaW5cbiAqIEBwYXJhbSB7c3RyaW5nIHwgUmVnRXhwfSBlbmRcbiAqIEBwYXJhbSB7TW9kZSB8IHt9fSBbbW9kZU9wdGlvbnNdXG4gKiBAcmV0dXJucyB7UGFydGlhbDxNb2RlPn1cbiAqL1xuY29uc3QgQ09NTUVOVCA9IGZ1bmN0aW9uKGJlZ2luLCBlbmQsIG1vZGVPcHRpb25zID0ge30pIHtcbiAgY29uc3QgbW9kZSA9IGluaGVyaXQoXG4gICAge1xuICAgICAgY2xhc3NOYW1lOiAnY29tbWVudCcsXG4gICAgICBiZWdpbixcbiAgICAgIGVuZCxcbiAgICAgIGNvbnRhaW5zOiBbXVxuICAgIH0sXG4gICAgbW9kZU9wdGlvbnNcbiAgKTtcbiAgbW9kZS5jb250YWlucy5wdXNoKFBIUkFTQUxfV09SRFNfTU9ERSk7XG4gIG1vZGUuY29udGFpbnMucHVzaCh7XG4gICAgY2xhc3NOYW1lOiAnZG9jdGFnJyxcbiAgICBiZWdpbjogJyg/OlRPRE98RklYTUV8Tk9URXxCVUd8T1BUSU1JWkV8SEFDS3xYWFgpOicsXG4gICAgcmVsZXZhbmNlOiAwXG4gIH0pO1xuICByZXR1cm4gbW9kZTtcbn07XG5jb25zdCBDX0xJTkVfQ09NTUVOVF9NT0RFID0gQ09NTUVOVCgnLy8nLCAnJCcpO1xuY29uc3QgQ19CTE9DS19DT01NRU5UX01PREUgPSBDT01NRU5UKCcvXFxcXConLCAnXFxcXCovJyk7XG5jb25zdCBIQVNIX0NPTU1FTlRfTU9ERSA9IENPTU1FTlQoJyMnLCAnJCcpO1xuY29uc3QgTlVNQkVSX01PREUgPSB7XG4gIGNsYXNzTmFtZTogJ251bWJlcicsXG4gIGJlZ2luOiBOVU1CRVJfUkUsXG4gIHJlbGV2YW5jZTogMFxufTtcbmNvbnN0IENfTlVNQkVSX01PREUgPSB7XG4gIGNsYXNzTmFtZTogJ251bWJlcicsXG4gIGJlZ2luOiBDX05VTUJFUl9SRSxcbiAgcmVsZXZhbmNlOiAwXG59O1xuY29uc3QgQklOQVJZX05VTUJFUl9NT0RFID0ge1xuICBjbGFzc05hbWU6ICdudW1iZXInLFxuICBiZWdpbjogQklOQVJZX05VTUJFUl9SRSxcbiAgcmVsZXZhbmNlOiAwXG59O1xuY29uc3QgQ1NTX05VTUJFUl9NT0RFID0ge1xuICBjbGFzc05hbWU6ICdudW1iZXInLFxuICBiZWdpbjogTlVNQkVSX1JFICsgJygnICtcbiAgICAnJXxlbXxleHxjaHxyZW0nICtcbiAgICAnfHZ3fHZofHZtaW58dm1heCcgK1xuICAgICd8Y218bW18aW58cHR8cGN8cHgnICtcbiAgICAnfGRlZ3xncmFkfHJhZHx0dXJuJyArXG4gICAgJ3xzfG1zJyArXG4gICAgJ3xIenxrSHonICtcbiAgICAnfGRwaXxkcGNtfGRwcHgnICtcbiAgICAnKT8nLFxuICByZWxldmFuY2U6IDBcbn07XG5jb25zdCBSRUdFWFBfTU9ERSA9IHtcbiAgLy8gdGhpcyBvdXRlciBydWxlIG1ha2VzIHN1cmUgd2UgYWN0dWFsbHkgaGF2ZSBhIFdIT0xFIHJlZ2V4IGFuZCBub3Qgc2ltcGx5XG4gIC8vIGFuIGV4cHJlc3Npb24gc3VjaCBhczpcbiAgLy9cbiAgLy8gICAgIDMgLyBzb21ldGhpbmdcbiAgLy9cbiAgLy8gKHdoaWNoIHdpbGwgdGhlbiBibG93IHVwIHdoZW4gcmVnZXgncyBgaWxsZWdhbGAgc2VlcyB0aGUgbmV3bGluZSlcbiAgYmVnaW46IC8oPz1cXC9bXi9cXG5dKlxcLykvLFxuICBjb250YWluczogW3tcbiAgICBjbGFzc05hbWU6ICdyZWdleHAnLFxuICAgIGJlZ2luOiAvXFwvLyxcbiAgICBlbmQ6IC9cXC9bZ2ltdXldKi8sXG4gICAgaWxsZWdhbDogL1xcbi8sXG4gICAgY29udGFpbnM6IFtcbiAgICAgIEJBQ0tTTEFTSF9FU0NBUEUsXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAvXFxbLyxcbiAgICAgICAgZW5kOiAvXFxdLyxcbiAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICBjb250YWluczogW0JBQ0tTTEFTSF9FU0NBUEVdXG4gICAgICB9XG4gICAgXVxuICB9XVxufTtcbmNvbnN0IFRJVExFX01PREUgPSB7XG4gIGNsYXNzTmFtZTogJ3RpdGxlJyxcbiAgYmVnaW46IElERU5UX1JFLFxuICByZWxldmFuY2U6IDBcbn07XG5jb25zdCBVTkRFUlNDT1JFX1RJVExFX01PREUgPSB7XG4gIGNsYXNzTmFtZTogJ3RpdGxlJyxcbiAgYmVnaW46IFVOREVSU0NPUkVfSURFTlRfUkUsXG4gIHJlbGV2YW5jZTogMFxufTtcbmNvbnN0IE1FVEhPRF9HVUFSRCA9IHtcbiAgLy8gZXhjbHVkZXMgbWV0aG9kIG5hbWVzIGZyb20ga2V5d29yZCBwcm9jZXNzaW5nXG4gIGJlZ2luOiAnXFxcXC5cXFxccyonICsgVU5ERVJTQ09SRV9JREVOVF9SRSxcbiAgcmVsZXZhbmNlOiAwXG59O1xuXG4vKipcbiAqIEFkZHMgZW5kIHNhbWUgYXMgYmVnaW4gbWVjaGFuaWNzIHRvIGEgbW9kZVxuICpcbiAqIFlvdXIgbW9kZSBtdXN0IGluY2x1ZGUgYXQgbGVhc3QgYSBzaW5nbGUgKCkgbWF0Y2ggZ3JvdXAgYXMgdGhhdCBmaXJzdCBtYXRjaFxuICogZ3JvdXAgaXMgd2hhdCBpcyB1c2VkIGZvciBjb21wYXJpc29uXG4gKiBAcGFyYW0ge1BhcnRpYWw8TW9kZT59IG1vZGVcbiAqL1xuY29uc3QgRU5EX1NBTUVfQVNfQkVHSU4gPSBmdW5jdGlvbihtb2RlKSB7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKG1vZGUsXG4gICAge1xuICAgICAgLyoqIEB0eXBlIHtNb2RlQ2FsbGJhY2t9ICovXG4gICAgICAnb246YmVnaW4nOiAobSwgcmVzcCkgPT4geyByZXNwLmRhdGEuX2JlZ2luTWF0Y2ggPSBtWzFdOyB9LFxuICAgICAgLyoqIEB0eXBlIHtNb2RlQ2FsbGJhY2t9ICovXG4gICAgICAnb246ZW5kJzogKG0sIHJlc3ApID0+IHsgaWYgKHJlc3AuZGF0YS5fYmVnaW5NYXRjaCAhPT0gbVsxXSkgcmVzcC5pZ25vcmVNYXRjaCgpOyB9XG4gICAgfSk7XG59O1xuXG52YXIgTU9ERVMgPSAvKiNfX1BVUkVfXyovT2JqZWN0LmZyZWV6ZSh7XG4gICAgX19wcm90b19fOiBudWxsLFxuICAgIE1BVENIX05PVEhJTkdfUkU6IE1BVENIX05PVEhJTkdfUkUsXG4gICAgSURFTlRfUkU6IElERU5UX1JFLFxuICAgIFVOREVSU0NPUkVfSURFTlRfUkU6IFVOREVSU0NPUkVfSURFTlRfUkUsXG4gICAgTlVNQkVSX1JFOiBOVU1CRVJfUkUsXG4gICAgQ19OVU1CRVJfUkU6IENfTlVNQkVSX1JFLFxuICAgIEJJTkFSWV9OVU1CRVJfUkU6IEJJTkFSWV9OVU1CRVJfUkUsXG4gICAgUkVfU1RBUlRFUlNfUkU6IFJFX1NUQVJURVJTX1JFLFxuICAgIFNIRUJBTkc6IFNIRUJBTkcsXG4gICAgQkFDS1NMQVNIX0VTQ0FQRTogQkFDS1NMQVNIX0VTQ0FQRSxcbiAgICBBUE9TX1NUUklOR19NT0RFOiBBUE9TX1NUUklOR19NT0RFLFxuICAgIFFVT1RFX1NUUklOR19NT0RFOiBRVU9URV9TVFJJTkdfTU9ERSxcbiAgICBQSFJBU0FMX1dPUkRTX01PREU6IFBIUkFTQUxfV09SRFNfTU9ERSxcbiAgICBDT01NRU5UOiBDT01NRU5ULFxuICAgIENfTElORV9DT01NRU5UX01PREU6IENfTElORV9DT01NRU5UX01PREUsXG4gICAgQ19CTE9DS19DT01NRU5UX01PREU6IENfQkxPQ0tfQ09NTUVOVF9NT0RFLFxuICAgIEhBU0hfQ09NTUVOVF9NT0RFOiBIQVNIX0NPTU1FTlRfTU9ERSxcbiAgICBOVU1CRVJfTU9ERTogTlVNQkVSX01PREUsXG4gICAgQ19OVU1CRVJfTU9ERTogQ19OVU1CRVJfTU9ERSxcbiAgICBCSU5BUllfTlVNQkVSX01PREU6IEJJTkFSWV9OVU1CRVJfTU9ERSxcbiAgICBDU1NfTlVNQkVSX01PREU6IENTU19OVU1CRVJfTU9ERSxcbiAgICBSRUdFWFBfTU9ERTogUkVHRVhQX01PREUsXG4gICAgVElUTEVfTU9ERTogVElUTEVfTU9ERSxcbiAgICBVTkRFUlNDT1JFX1RJVExFX01PREU6IFVOREVSU0NPUkVfVElUTEVfTU9ERSxcbiAgICBNRVRIT0RfR1VBUkQ6IE1FVEhPRF9HVUFSRCxcbiAgICBFTkRfU0FNRV9BU19CRUdJTjogRU5EX1NBTUVfQVNfQkVHSU5cbn0pO1xuXG4vLyBHcmFtbWFyIGV4dGVuc2lvbnMgLyBwbHVnaW5zXG4vLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9oaWdobGlnaHRqcy9oaWdobGlnaHQuanMvaXNzdWVzLzI4MzNcblxuLy8gR3JhbW1hciBleHRlbnNpb25zIGFsbG93IFwic3ludGFjdGljIHN1Z2FyXCIgdG8gYmUgYWRkZWQgdG8gdGhlIGdyYW1tYXIgbW9kZXNcbi8vIHdpdGhvdXQgcmVxdWlyaW5nIGFueSB1bmRlcmx5aW5nIGNoYW5nZXMgdG8gdGhlIGNvbXBpbGVyIGludGVybmFscy5cblxuLy8gYGNvbXBpbGVNYXRjaGAgYmVpbmcgdGhlIHBlcmZlY3Qgc21hbGwgZXhhbXBsZSBvZiBub3cgYWxsb3dpbmcgYSBncmFtbWFyXG4vLyBhdXRob3IgdG8gd3JpdGUgYG1hdGNoYCB3aGVuIHRoZXkgZGVzaXJlIHRvIG1hdGNoIGEgc2luZ2xlIGV4cHJlc3Npb24gcmF0aGVyXG4vLyB0aGFuIGJlaW5nIGZvcmNlZCB0byB1c2UgYGJlZ2luYC4gIFRoZSBleHRlbnNpb24gdGhlbiBqdXN0IG1vdmVzIGBtYXRjaGAgaW50b1xuLy8gYGJlZ2luYCB3aGVuIGl0IHJ1bnMuICBJZSwgbm8gZmVhdHVyZXMgaGF2ZSBiZWVuIGFkZGVkLCBidXQgd2UndmUganVzdCBtYWRlXG4vLyB0aGUgZXhwZXJpZW5jZSBvZiB3cml0aW5nIChhbmQgcmVhZGluZyBncmFtbWFycykgYSBsaXR0bGUgYml0IG5pY2VyLlxuXG4vLyAtLS0tLS1cblxuLy8gVE9ETzogV2UgbmVlZCBuZWdhdGl2ZSBsb29rLWJlaGluZCBzdXBwb3J0IHRvIGRvIHRoaXMgcHJvcGVybHlcbi8qKlxuICogU2tpcCBhIG1hdGNoIGlmIGl0IGhhcyBhIHByZWNlZGluZyBkb3RcbiAqXG4gKiBUaGlzIGlzIHVzZWQgZm9yIGBiZWdpbktleXdvcmRzYCB0byBwcmV2ZW50IG1hdGNoaW5nIGV4cHJlc3Npb25zIHN1Y2ggYXNcbiAqIGBib2Iua2V5d29yZC5kbygpYC4gVGhlIG1vZGUgY29tcGlsZXIgYXV0b21hdGljYWxseSB3aXJlcyB0aGlzIHVwIGFzIGFcbiAqIHNwZWNpYWwgX2ludGVybmFsXyAnb246YmVnaW4nIGNhbGxiYWNrIGZvciBtb2RlcyB3aXRoIGBiZWdpbktleXdvcmRzYFxuICogQHBhcmFtIHtSZWdFeHBNYXRjaEFycmF5fSBtYXRjaFxuICogQHBhcmFtIHtDYWxsYmFja1Jlc3BvbnNlfSByZXNwb25zZVxuICovXG5mdW5jdGlvbiBza2lwSWZoYXNQcmVjZWRpbmdEb3QobWF0Y2gsIHJlc3BvbnNlKSB7XG4gIGNvbnN0IGJlZm9yZSA9IG1hdGNoLmlucHV0W21hdGNoLmluZGV4IC0gMV07XG4gIGlmIChiZWZvcmUgPT09IFwiLlwiKSB7XG4gICAgcmVzcG9uc2UuaWdub3JlTWF0Y2goKTtcbiAgfVxufVxuXG5cbi8qKlxuICogYGJlZ2luS2V5d29yZHNgIHN5bnRhY3RpYyBzdWdhclxuICogQHR5cGUge0NvbXBpbGVyRXh0fVxuICovXG5mdW5jdGlvbiBiZWdpbktleXdvcmRzKG1vZGUsIHBhcmVudCkge1xuICBpZiAoIXBhcmVudCkgcmV0dXJuO1xuICBpZiAoIW1vZGUuYmVnaW5LZXl3b3JkcykgcmV0dXJuO1xuXG4gIC8vIGZvciBsYW5ndWFnZXMgd2l0aCBrZXl3b3JkcyB0aGF0IGluY2x1ZGUgbm9uLXdvcmQgY2hhcmFjdGVycyBjaGVja2luZyBmb3JcbiAgLy8gYSB3b3JkIGJvdW5kYXJ5IGlzIG5vdCBzdWZmaWNpZW50LCBzbyBpbnN0ZWFkIHdlIGNoZWNrIGZvciBhIHdvcmQgYm91bmRhcnlcbiAgLy8gb3Igd2hpdGVzcGFjZSAtIHRoaXMgZG9lcyBubyBoYXJtIGluIGFueSBjYXNlIHNpbmNlIG91ciBrZXl3b3JkIGVuZ2luZVxuICAvLyBkb2Vzbid0IGFsbG93IHNwYWNlcyBpbiBrZXl3b3JkcyBhbnl3YXlzIGFuZCB3ZSBzdGlsbCBjaGVjayBmb3IgdGhlIGJvdW5kYXJ5XG4gIC8vIGZpcnN0XG4gIG1vZGUuYmVnaW4gPSAnXFxcXGIoJyArIG1vZGUuYmVnaW5LZXl3b3Jkcy5zcGxpdCgnICcpLmpvaW4oJ3wnKSArICcpKD8hXFxcXC4pKD89XFxcXGJ8XFxcXHMpJztcbiAgbW9kZS5fX2JlZm9yZUJlZ2luID0gc2tpcElmaGFzUHJlY2VkaW5nRG90O1xuICBtb2RlLmtleXdvcmRzID0gbW9kZS5rZXl3b3JkcyB8fCBtb2RlLmJlZ2luS2V5d29yZHM7XG4gIGRlbGV0ZSBtb2RlLmJlZ2luS2V5d29yZHM7XG5cbiAgLy8gcHJldmVudHMgZG91YmxlIHJlbGV2YW5jZSwgdGhlIGtleXdvcmRzIHRoZW1zZWx2ZXMgcHJvdmlkZVxuICAvLyByZWxldmFuY2UsIHRoZSBtb2RlIGRvZXNuJ3QgbmVlZCB0byBkb3VibGUgaXRcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmaW5lZFxuICBpZiAobW9kZS5yZWxldmFuY2UgPT09IHVuZGVmaW5lZCkgbW9kZS5yZWxldmFuY2UgPSAwO1xufVxuXG4vKipcbiAqIEFsbG93IGBpbGxlZ2FsYCB0byBjb250YWluIGFuIGFycmF5IG9mIGlsbGVnYWwgdmFsdWVzXG4gKiBAdHlwZSB7Q29tcGlsZXJFeHR9XG4gKi9cbmZ1bmN0aW9uIGNvbXBpbGVJbGxlZ2FsKG1vZGUsIF9wYXJlbnQpIHtcbiAgaWYgKCFBcnJheS5pc0FycmF5KG1vZGUuaWxsZWdhbCkpIHJldHVybjtcblxuICBtb2RlLmlsbGVnYWwgPSBlaXRoZXIoLi4ubW9kZS5pbGxlZ2FsKTtcbn1cblxuLyoqXG4gKiBgbWF0Y2hgIHRvIG1hdGNoIGEgc2luZ2xlIGV4cHJlc3Npb24gZm9yIHJlYWRhYmlsaXR5XG4gKiBAdHlwZSB7Q29tcGlsZXJFeHR9XG4gKi9cbmZ1bmN0aW9uIGNvbXBpbGVNYXRjaChtb2RlLCBfcGFyZW50KSB7XG4gIGlmICghbW9kZS5tYXRjaCkgcmV0dXJuO1xuICBpZiAobW9kZS5iZWdpbiB8fCBtb2RlLmVuZCkgdGhyb3cgbmV3IEVycm9yKFwiYmVnaW4gJiBlbmQgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCBtYXRjaFwiKTtcblxuICBtb2RlLmJlZ2luID0gbW9kZS5tYXRjaDtcbiAgZGVsZXRlIG1vZGUubWF0Y2g7XG59XG5cbi8qKlxuICogcHJvdmlkZXMgdGhlIGRlZmF1bHQgMSByZWxldmFuY2UgdG8gYWxsIG1vZGVzXG4gKiBAdHlwZSB7Q29tcGlsZXJFeHR9XG4gKi9cbmZ1bmN0aW9uIGNvbXBpbGVSZWxldmFuY2UobW9kZSwgX3BhcmVudCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZpbmVkXG4gIGlmIChtb2RlLnJlbGV2YW5jZSA9PT0gdW5kZWZpbmVkKSBtb2RlLnJlbGV2YW5jZSA9IDE7XG59XG5cbi8vIGtleXdvcmRzIHRoYXQgc2hvdWxkIGhhdmUgbm8gZGVmYXVsdCByZWxldmFuY2UgdmFsdWVcbmNvbnN0IENPTU1PTl9LRVlXT1JEUyA9IFtcbiAgJ29mJyxcbiAgJ2FuZCcsXG4gICdmb3InLFxuICAnaW4nLFxuICAnbm90JyxcbiAgJ29yJyxcbiAgJ2lmJyxcbiAgJ3RoZW4nLFxuICAncGFyZW50JywgLy8gY29tbW9uIHZhcmlhYmxlIG5hbWVcbiAgJ2xpc3QnLCAvLyBjb21tb24gdmFyaWFibGUgbmFtZVxuICAndmFsdWUnIC8vIGNvbW1vbiB2YXJpYWJsZSBuYW1lXG5dO1xuXG5jb25zdCBERUZBVUxUX0tFWVdPUkRfQ0xBU1NOQU1FID0gXCJrZXl3b3JkXCI7XG5cbi8qKlxuICogR2l2ZW4gcmF3IGtleXdvcmRzIGZyb20gYSBsYW5ndWFnZSBkZWZpbml0aW9uLCBjb21waWxlIHRoZW0uXG4gKlxuICogQHBhcmFtIHtzdHJpbmcgfCBSZWNvcmQ8c3RyaW5nLHN0cmluZ3xzdHJpbmdbXT4gfCBBcnJheTxzdHJpbmc+fSByYXdLZXl3b3Jkc1xuICogQHBhcmFtIHtib29sZWFufSBjYXNlSW5zZW5zaXRpdmVcbiAqL1xuZnVuY3Rpb24gY29tcGlsZUtleXdvcmRzKHJhd0tleXdvcmRzLCBjYXNlSW5zZW5zaXRpdmUsIGNsYXNzTmFtZSA9IERFRkFVTFRfS0VZV09SRF9DTEFTU05BTUUpIHtcbiAgLyoqIEB0eXBlIEtleXdvcmREaWN0ICovXG4gIGNvbnN0IGNvbXBpbGVkS2V5d29yZHMgPSB7fTtcblxuICAvLyBpbnB1dCBjYW4gYmUgYSBzdHJpbmcgb2Yga2V5d29yZHMsIGFuIGFycmF5IG9mIGtleXdvcmRzLCBvciBhIG9iamVjdCB3aXRoXG4gIC8vIG5hbWVkIGtleXMgcmVwcmVzZW50aW5nIGNsYXNzTmFtZSAod2hpY2ggY2FuIHRoZW4gcG9pbnQgdG8gYSBzdHJpbmcgb3IgYXJyYXkpXG4gIGlmICh0eXBlb2YgcmF3S2V5d29yZHMgPT09ICdzdHJpbmcnKSB7XG4gICAgY29tcGlsZUxpc3QoY2xhc3NOYW1lLCByYXdLZXl3b3Jkcy5zcGxpdChcIiBcIikpO1xuICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocmF3S2V5d29yZHMpKSB7XG4gICAgY29tcGlsZUxpc3QoY2xhc3NOYW1lLCByYXdLZXl3b3Jkcyk7XG4gIH0gZWxzZSB7XG4gICAgT2JqZWN0LmtleXMocmF3S2V5d29yZHMpLmZvckVhY2goZnVuY3Rpb24oY2xhc3NOYW1lKSB7XG4gICAgICAvLyBjb2xsYXBzZSBhbGwgb3VyIG9iamVjdHMgYmFjayBpbnRvIHRoZSBwYXJlbnQgb2JqZWN0XG4gICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICBjb21waWxlZEtleXdvcmRzLFxuICAgICAgICBjb21waWxlS2V5d29yZHMocmF3S2V5d29yZHNbY2xhc3NOYW1lXSwgY2FzZUluc2Vuc2l0aXZlLCBjbGFzc05hbWUpXG4gICAgICApO1xuICAgIH0pO1xuICB9XG4gIHJldHVybiBjb21waWxlZEtleXdvcmRzO1xuXG4gIC8vIC0tLVxuXG4gIC8qKlxuICAgKiBDb21waWxlcyBhbiBpbmRpdmlkdWFsIGxpc3Qgb2Yga2V5d29yZHNcbiAgICpcbiAgICogRXg6IFwiZm9yIGlmIHdoZW4gd2hpbGV8NVwiXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWVcbiAgICogQHBhcmFtIHtBcnJheTxzdHJpbmc+fSBrZXl3b3JkTGlzdFxuICAgKi9cbiAgZnVuY3Rpb24gY29tcGlsZUxpc3QoY2xhc3NOYW1lLCBrZXl3b3JkTGlzdCkge1xuICAgIGlmIChjYXNlSW5zZW5zaXRpdmUpIHtcbiAgICAgIGtleXdvcmRMaXN0ID0ga2V5d29yZExpc3QubWFwKHggPT4geC50b0xvd2VyQ2FzZSgpKTtcbiAgICB9XG4gICAga2V5d29yZExpc3QuZm9yRWFjaChmdW5jdGlvbihrZXl3b3JkKSB7XG4gICAgICBjb25zdCBwYWlyID0ga2V5d29yZC5zcGxpdCgnfCcpO1xuICAgICAgY29tcGlsZWRLZXl3b3Jkc1twYWlyWzBdXSA9IFtjbGFzc05hbWUsIHNjb3JlRm9yS2V5d29yZChwYWlyWzBdLCBwYWlyWzFdKV07XG4gICAgfSk7XG4gIH1cbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBwcm9wZXIgc2NvcmUgZm9yIGEgZ2l2ZW4ga2V5d29yZFxuICpcbiAqIEFsc28gdGFrZXMgaW50byBhY2NvdW50IGNvbW1lbnQga2V5d29yZHMsIHdoaWNoIHdpbGwgYmUgc2NvcmVkIDAgVU5MRVNTXG4gKiBhbm90aGVyIHNjb3JlIGhhcyBiZWVuIG1hbnVhbGx5IGFzc2lnbmVkLlxuICogQHBhcmFtIHtzdHJpbmd9IGtleXdvcmRcbiAqIEBwYXJhbSB7c3RyaW5nfSBbcHJvdmlkZWRTY29yZV1cbiAqL1xuZnVuY3Rpb24gc2NvcmVGb3JLZXl3b3JkKGtleXdvcmQsIHByb3ZpZGVkU2NvcmUpIHtcbiAgLy8gbWFudWFsIHNjb3JlcyBhbHdheXMgd2luIG92ZXIgY29tbW9uIGtleXdvcmRzXG4gIC8vIHNvIHlvdSBjYW4gZm9yY2UgYSBzY29yZSBvZiAxIGlmIHlvdSByZWFsbHkgaW5zaXN0XG4gIGlmIChwcm92aWRlZFNjb3JlKSB7XG4gICAgcmV0dXJuIE51bWJlcihwcm92aWRlZFNjb3JlKTtcbiAgfVxuXG4gIHJldHVybiBjb21tb25LZXl3b3JkKGtleXdvcmQpID8gMCA6IDE7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyBpZiBhIGdpdmVuIGtleXdvcmQgaXMgY29tbW9uIG9yIG5vdFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXl3b3JkICovXG5mdW5jdGlvbiBjb21tb25LZXl3b3JkKGtleXdvcmQpIHtcbiAgcmV0dXJuIENPTU1PTl9LRVlXT1JEUy5pbmNsdWRlcyhrZXl3b3JkLnRvTG93ZXJDYXNlKCkpO1xufVxuXG4vLyBjb21waWxhdGlvblxuXG4vKipcbiAqIENvbXBpbGVzIGEgbGFuZ3VhZ2UgZGVmaW5pdGlvbiByZXN1bHRcbiAqXG4gKiBHaXZlbiB0aGUgcmF3IHJlc3VsdCBvZiBhIGxhbmd1YWdlIGRlZmluaXRpb24gKExhbmd1YWdlKSwgY29tcGlsZXMgdGhpcyBzb1xuICogdGhhdCBpdCBpcyByZWFkeSBmb3IgaGlnaGxpZ2h0aW5nIGNvZGUuXG4gKiBAcGFyYW0ge0xhbmd1YWdlfSBsYW5ndWFnZVxuICogQHBhcmFtIHt7cGx1Z2luczogSExKU1BsdWdpbltdfX0gb3B0c1xuICogQHJldHVybnMge0NvbXBpbGVkTGFuZ3VhZ2V9XG4gKi9cbmZ1bmN0aW9uIGNvbXBpbGVMYW5ndWFnZShsYW5ndWFnZSwgeyBwbHVnaW5zIH0pIHtcbiAgLyoqXG4gICAqIEJ1aWxkcyBhIHJlZ2V4IHdpdGggdGhlIGNhc2Ugc2Vuc2F0aXZpbGl0eSBvZiB0aGUgY3VycmVudCBsYW5ndWFnZVxuICAgKlxuICAgKiBAcGFyYW0ge1JlZ0V4cCB8IHN0cmluZ30gdmFsdWVcbiAgICogQHBhcmFtIHtib29sZWFufSBbZ2xvYmFsXVxuICAgKi9cbiAgZnVuY3Rpb24gbGFuZ1JlKHZhbHVlLCBnbG9iYWwpIHtcbiAgICByZXR1cm4gbmV3IFJlZ0V4cChcbiAgICAgIHNvdXJjZSh2YWx1ZSksXG4gICAgICAnbScgKyAobGFuZ3VhZ2UuY2FzZV9pbnNlbnNpdGl2ZSA/ICdpJyA6ICcnKSArIChnbG9iYWwgPyAnZycgOiAnJylcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAgU3RvcmVzIG11bHRpcGxlIHJlZ3VsYXIgZXhwcmVzc2lvbnMgYW5kIGFsbG93cyB5b3UgdG8gcXVpY2tseSBzZWFyY2ggZm9yXG4gICAgdGhlbSBhbGwgaW4gYSBzdHJpbmcgc2ltdWx0YW5lb3VzbHkgLSByZXR1cm5pbmcgdGhlIGZpcnN0IG1hdGNoLiAgSXQgZG9lc1xuICAgIHRoaXMgYnkgY3JlYXRpbmcgYSBodWdlIChhfGJ8YykgcmVnZXggLSBlYWNoIGluZGl2aWR1YWwgaXRlbSB3cmFwcGVkIHdpdGggKClcbiAgICBhbmQgam9pbmVkIGJ5IGB8YCAtIHVzaW5nIG1hdGNoIGdyb3VwcyB0byB0cmFjayBwb3NpdGlvbi4gIFdoZW4gYSBtYXRjaCBpc1xuICAgIGZvdW5kIGNoZWNraW5nIHdoaWNoIHBvc2l0aW9uIGluIHRoZSBhcnJheSBoYXMgY29udGVudCBhbGxvd3MgdXMgdG8gZmlndXJlXG4gICAgb3V0IHdoaWNoIG9mIHRoZSBvcmlnaW5hbCByZWdleGVzIC8gbWF0Y2ggZ3JvdXBzIHRyaWdnZXJlZCB0aGUgbWF0Y2guXG5cbiAgICBUaGUgbWF0Y2ggb2JqZWN0IGl0c2VsZiAodGhlIHJlc3VsdCBvZiBgUmVnZXguZXhlY2ApIGlzIHJldHVybmVkIGJ1dCBhbHNvXG4gICAgZW5oYW5jZWQgYnkgbWVyZ2luZyBpbiBhbnkgbWV0YS1kYXRhIHRoYXQgd2FzIHJlZ2lzdGVyZWQgd2l0aCB0aGUgcmVnZXguXG4gICAgVGhpcyBpcyBob3cgd2Uga2VlcCB0cmFjayBvZiB3aGljaCBtb2RlIG1hdGNoZWQsIGFuZCB3aGF0IHR5cGUgb2YgcnVsZVxuICAgIChgaWxsZWdhbGAsIGBiZWdpbmAsIGVuZCwgZXRjKS5cbiAgKi9cbiAgY2xhc3MgTXVsdGlSZWdleCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICB0aGlzLm1hdGNoSW5kZXhlcyA9IHt9O1xuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgdGhpcy5yZWdleGVzID0gW107XG4gICAgICB0aGlzLm1hdGNoQXQgPSAxO1xuICAgICAgdGhpcy5wb3NpdGlvbiA9IDA7XG4gICAgfVxuXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGFkZFJ1bGUocmUsIG9wdHMpIHtcbiAgICAgIG9wdHMucG9zaXRpb24gPSB0aGlzLnBvc2l0aW9uKys7XG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICB0aGlzLm1hdGNoSW5kZXhlc1t0aGlzLm1hdGNoQXRdID0gb3B0cztcbiAgICAgIHRoaXMucmVnZXhlcy5wdXNoKFtvcHRzLCByZV0pO1xuICAgICAgdGhpcy5tYXRjaEF0ICs9IGNvdW50TWF0Y2hHcm91cHMocmUpICsgMTtcbiAgICB9XG5cbiAgICBjb21waWxlKCkge1xuICAgICAgaWYgKHRoaXMucmVnZXhlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgLy8gYXZvaWRzIHRoZSBuZWVkIHRvIGNoZWNrIGxlbmd0aCBldmVyeSB0aW1lIGV4ZWMgaXMgY2FsbGVkXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgdGhpcy5leGVjID0gKCkgPT4gbnVsbDtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHRlcm1pbmF0b3JzID0gdGhpcy5yZWdleGVzLm1hcChlbCA9PiBlbFsxXSk7XG4gICAgICB0aGlzLm1hdGNoZXJSZSA9IGxhbmdSZShqb2luKHRlcm1pbmF0b3JzKSwgdHJ1ZSk7XG4gICAgICB0aGlzLmxhc3RJbmRleCA9IDA7XG4gICAgfVxuXG4gICAgLyoqIEBwYXJhbSB7c3RyaW5nfSBzICovXG4gICAgZXhlYyhzKSB7XG4gICAgICB0aGlzLm1hdGNoZXJSZS5sYXN0SW5kZXggPSB0aGlzLmxhc3RJbmRleDtcbiAgICAgIGNvbnN0IG1hdGNoID0gdGhpcy5tYXRjaGVyUmUuZXhlYyhzKTtcbiAgICAgIGlmICghbWF0Y2gpIHsgcmV0dXJuIG51bGw7IH1cblxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmaW5lZFxuICAgICAgY29uc3QgaSA9IG1hdGNoLmZpbmRJbmRleCgoZWwsIGkpID0+IGkgPiAwICYmIGVsICE9PSB1bmRlZmluZWQpO1xuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgY29uc3QgbWF0Y2hEYXRhID0gdGhpcy5tYXRjaEluZGV4ZXNbaV07XG4gICAgICAvLyB0cmltIG9mZiBhbnkgZWFybGllciBub24tcmVsZXZhbnQgbWF0Y2ggZ3JvdXBzIChpZSwgdGhlIG90aGVyIHJlZ2V4XG4gICAgICAvLyBtYXRjaCBncm91cHMgdGhhdCBtYWtlIHVwIHRoZSBtdWx0aS1tYXRjaGVyKVxuICAgICAgbWF0Y2guc3BsaWNlKDAsIGkpO1xuXG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihtYXRjaCwgbWF0Y2hEYXRhKTtcbiAgICB9XG4gIH1cblxuICAvKlxuICAgIENyZWF0ZWQgdG8gc29sdmUgdGhlIGtleSBkZWZpY2llbnRseSB3aXRoIE11bHRpUmVnZXggLSB0aGVyZSBpcyBubyB3YXkgdG9cbiAgICB0ZXN0IGZvciBtdWx0aXBsZSBtYXRjaGVzIGF0IGEgc2luZ2xlIGxvY2F0aW9uLiAgV2h5IHdvdWxkIHdlIG5lZWQgdG8gZG9cbiAgICB0aGF0PyAgSW4gdGhlIGZ1dHVyZSBhIG1vcmUgZHluYW1pYyBlbmdpbmUgd2lsbCBhbGxvdyBjZXJ0YWluIG1hdGNoZXMgdG8gYmVcbiAgICBpZ25vcmVkLiAgQW4gZXhhbXBsZTogaWYgd2UgbWF0Y2hlZCBzYXkgdGhlIDNyZCByZWdleCBpbiBhIGxhcmdlIGdyb3VwIGJ1dFxuICAgIGRlY2lkZWQgdG8gaWdub3JlIGl0IC0gd2UnZCBuZWVkIHRvIHN0YXJ0ZWQgdGVzdGluZyBhZ2FpbiBhdCB0aGUgNHRoXG4gICAgcmVnZXguLi4gYnV0IE11bHRpUmVnZXggaXRzZWxmIGdpdmVzIHVzIG5vIHJlYWwgd2F5IHRvIGRvIHRoYXQuXG5cbiAgICBTbyB3aGF0IHRoaXMgY2xhc3MgY3JlYXRlcyBNdWx0aVJlZ2V4cyBvbiB0aGUgZmx5IGZvciB3aGF0ZXZlciBzZWFyY2hcbiAgICBwb3NpdGlvbiB0aGV5IGFyZSBuZWVkZWQuXG5cbiAgICBOT1RFOiBUaGVzZSBhZGRpdGlvbmFsIE11bHRpUmVnZXggb2JqZWN0cyBhcmUgY3JlYXRlZCBkeW5hbWljYWxseS4gIEZvciBtb3N0XG4gICAgZ3JhbW1hcnMgbW9zdCBvZiB0aGUgdGltZSB3ZSB3aWxsIG5ldmVyIGFjdHVhbGx5IG5lZWQgYW55dGhpbmcgbW9yZSB0aGFuIHRoZVxuICAgIGZpcnN0IE11bHRpUmVnZXggLSBzbyB0aGlzIHNob3VsZG4ndCBoYXZlIHRvbyBtdWNoIG92ZXJoZWFkLlxuXG4gICAgU2F5IHRoaXMgaXMgb3VyIHNlYXJjaCBncm91cCwgYW5kIHdlIG1hdGNoIHJlZ2V4MywgYnV0IHdpc2ggdG8gaWdub3JlIGl0LlxuXG4gICAgICByZWdleDEgfCByZWdleDIgfCByZWdleDMgfCByZWdleDQgfCByZWdleDUgICAgJyBpZSwgc3RhcnRBdCA9IDBcblxuICAgIFdoYXQgd2UgbmVlZCBpcyBhIG5ldyBNdWx0aVJlZ2V4IHRoYXQgb25seSBpbmNsdWRlcyB0aGUgcmVtYWluaW5nXG4gICAgcG9zc2liaWxpdGllczpcblxuICAgICAgcmVnZXg0IHwgcmVnZXg1ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcgaWUsIHN0YXJ0QXQgPSAzXG5cbiAgICBUaGlzIGNsYXNzIHdyYXBzIGFsbCB0aGF0IGNvbXBsZXhpdHkgdXAgaW4gYSBzaW1wbGUgQVBJLi4uIGBzdGFydEF0YCBkZWNpZGVzXG4gICAgd2hlcmUgaW4gdGhlIGFycmF5IG9mIGV4cHJlc3Npb25zIHRvIHN0YXJ0IGRvaW5nIHRoZSBtYXRjaGluZy4gSXRcbiAgICBhdXRvLWluY3JlbWVudHMsIHNvIGlmIGEgbWF0Y2ggaXMgZm91bmQgYXQgcG9zaXRpb24gMiwgdGhlbiBzdGFydEF0IHdpbGwgYmVcbiAgICBzZXQgdG8gMy4gIElmIHRoZSBlbmQgaXMgcmVhY2hlZCBzdGFydEF0IHdpbGwgcmV0dXJuIHRvIDAuXG5cbiAgICBNT1NUIG9mIHRoZSB0aW1lIHRoZSBwYXJzZXIgd2lsbCBiZSBzZXR0aW5nIHN0YXJ0QXQgbWFudWFsbHkgdG8gMC5cbiAgKi9cbiAgY2xhc3MgUmVzdW1hYmxlTXVsdGlSZWdleCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICB0aGlzLnJ1bGVzID0gW107XG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICB0aGlzLm11bHRpUmVnZXhlcyA9IFtdO1xuICAgICAgdGhpcy5jb3VudCA9IDA7XG5cbiAgICAgIHRoaXMubGFzdEluZGV4ID0gMDtcbiAgICAgIHRoaXMucmVnZXhJbmRleCA9IDA7XG4gICAgfVxuXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGdldE1hdGNoZXIoaW5kZXgpIHtcbiAgICAgIGlmICh0aGlzLm11bHRpUmVnZXhlc1tpbmRleF0pIHJldHVybiB0aGlzLm11bHRpUmVnZXhlc1tpbmRleF07XG5cbiAgICAgIGNvbnN0IG1hdGNoZXIgPSBuZXcgTXVsdGlSZWdleCgpO1xuICAgICAgdGhpcy5ydWxlcy5zbGljZShpbmRleCkuZm9yRWFjaCgoW3JlLCBvcHRzXSkgPT4gbWF0Y2hlci5hZGRSdWxlKHJlLCBvcHRzKSk7XG4gICAgICBtYXRjaGVyLmNvbXBpbGUoKTtcbiAgICAgIHRoaXMubXVsdGlSZWdleGVzW2luZGV4XSA9IG1hdGNoZXI7XG4gICAgICByZXR1cm4gbWF0Y2hlcjtcbiAgICB9XG5cbiAgICByZXN1bWluZ1NjYW5BdFNhbWVQb3NpdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlZ2V4SW5kZXggIT09IDA7XG4gICAgfVxuXG4gICAgY29uc2lkZXJBbGwoKSB7XG4gICAgICB0aGlzLnJlZ2V4SW5kZXggPSAwO1xuICAgIH1cblxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBhZGRSdWxlKHJlLCBvcHRzKSB7XG4gICAgICB0aGlzLnJ1bGVzLnB1c2goW3JlLCBvcHRzXSk7XG4gICAgICBpZiAob3B0cy50eXBlID09PSBcImJlZ2luXCIpIHRoaXMuY291bnQrKztcbiAgICB9XG5cbiAgICAvKiogQHBhcmFtIHtzdHJpbmd9IHMgKi9cbiAgICBleGVjKHMpIHtcbiAgICAgIGNvbnN0IG0gPSB0aGlzLmdldE1hdGNoZXIodGhpcy5yZWdleEluZGV4KTtcbiAgICAgIG0ubGFzdEluZGV4ID0gdGhpcy5sYXN0SW5kZXg7XG4gICAgICBsZXQgcmVzdWx0ID0gbS5leGVjKHMpO1xuXG4gICAgICAvLyBUaGUgZm9sbG93aW5nIGlzIGJlY2F1c2Ugd2UgaGF2ZSBubyBlYXN5IHdheSB0byBzYXkgXCJyZXN1bWUgc2Nhbm5pbmcgYXQgdGhlXG4gICAgICAvLyBleGlzdGluZyBwb3NpdGlvbiBidXQgYWxzbyBza2lwIHRoZSBjdXJyZW50IHJ1bGUgT05MWVwiLiBXaGF0IGhhcHBlbnMgaXNcbiAgICAgIC8vIGFsbCBwcmlvciBydWxlcyBhcmUgYWxzbyBza2lwcGVkIHdoaWNoIGNhbiByZXN1bHQgaW4gbWF0Y2hpbmcgdGhlIHdyb25nXG4gICAgICAvLyB0aGluZy4gRXhhbXBsZSBvZiBtYXRjaGluZyBcImJvb2dlclwiOlxuXG4gICAgICAvLyBvdXIgbWF0Y2hlciBpcyBbc3RyaW5nLCBcImJvb2dlclwiLCBudW1iZXJdXG4gICAgICAvL1xuICAgICAgLy8gLi4uLmJvb2dlci4uLi5cblxuICAgICAgLy8gaWYgXCJib29nZXJcIiBpcyBpZ25vcmVkIHRoZW4gd2UnZCByZWFsbHkgbmVlZCBhIHJlZ2V4IHRvIHNjYW4gZnJvbSB0aGVcbiAgICAgIC8vIFNBTUUgcG9zaXRpb24gZm9yIG9ubHk6IFtzdHJpbmcsIG51bWJlcl0gYnV0IGlnbm9yaW5nIFwiYm9vZ2VyXCIgKGlmIGl0XG4gICAgICAvLyB3YXMgdGhlIGZpcnN0IG1hdGNoKSwgYSBzaW1wbGUgcmVzdW1lIHdvdWxkIHNjYW4gYWhlYWQgd2hvIGtub3dzIGhvd1xuICAgICAgLy8gZmFyIGxvb2tpbmcgb25seSBmb3IgXCJudW1iZXJcIiwgaWdub3JpbmcgcG90ZW50aWFsIHN0cmluZyBtYXRjaGVzIChvclxuICAgICAgLy8gZnV0dXJlIFwiYm9vZ2VyXCIgbWF0Y2hlcyB0aGF0IG1pZ2h0IGJlIHZhbGlkLilcblxuICAgICAgLy8gU28gd2hhdCB3ZSBkbzogV2UgZXhlY3V0ZSB0d28gbWF0Y2hlcnMsIG9uZSByZXN1bWluZyBhdCB0aGUgc2FtZVxuICAgICAgLy8gcG9zaXRpb24sIGJ1dCB0aGUgc2Vjb25kIGZ1bGwgbWF0Y2hlciBzdGFydGluZyBhdCB0aGUgcG9zaXRpb24gYWZ0ZXI6XG5cbiAgICAgIC8vICAgICAvLS0tIHJlc3VtZSBmaXJzdCByZWdleCBtYXRjaCBoZXJlIChmb3IgW251bWJlcl0pXG4gICAgICAvLyAgICAgfC8tLS0tIGZ1bGwgbWF0Y2ggaGVyZSBmb3IgW3N0cmluZywgXCJib29nZXJcIiwgbnVtYmVyXVxuICAgICAgLy8gICAgIHZ2XG4gICAgICAvLyAuLi4uYm9vZ2VyLi4uLlxuXG4gICAgICAvLyBXaGljaCBldmVyIHJlc3VsdHMgaW4gYSBtYXRjaCBmaXJzdCBpcyB0aGVuIHVzZWQuIFNvIHRoaXMgMy00IHN0ZXBcbiAgICAgIC8vIHByb2Nlc3MgZXNzZW50aWFsbHkgYWxsb3dzIHVzIHRvIHNheSBcIm1hdGNoIGF0IHRoaXMgcG9zaXRpb24sIGV4Y2x1ZGluZ1xuICAgICAgLy8gYSBwcmlvciBydWxlIHRoYXQgd2FzIGlnbm9yZWRcIi5cbiAgICAgIC8vXG4gICAgICAvLyAxLiBNYXRjaCBcImJvb2dlclwiIGZpcnN0LCBpZ25vcmUuIEFsc28gcHJvdmVzIHRoYXQgW3N0cmluZ10gZG9lcyBub24gbWF0Y2guXG4gICAgICAvLyAyLiBSZXN1bWUgbWF0Y2hpbmcgZm9yIFtudW1iZXJdXG4gICAgICAvLyAzLiBNYXRjaCBhdCBpbmRleCArIDEgZm9yIFtzdHJpbmcsIFwiYm9vZ2VyXCIsIG51bWJlcl1cbiAgICAgIC8vIDQuIElmICMyIGFuZCAjMyByZXN1bHQgaW4gbWF0Y2hlcywgd2hpY2ggY2FtZSBmaXJzdD9cbiAgICAgIGlmICh0aGlzLnJlc3VtaW5nU2NhbkF0U2FtZVBvc2l0aW9uKCkpIHtcbiAgICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQuaW5kZXggPT09IHRoaXMubGFzdEluZGV4KSA7IGVsc2UgeyAvLyB1c2UgdGhlIHNlY29uZCBtYXRjaGVyIHJlc3VsdFxuICAgICAgICAgIGNvbnN0IG0yID0gdGhpcy5nZXRNYXRjaGVyKDApO1xuICAgICAgICAgIG0yLmxhc3RJbmRleCA9IHRoaXMubGFzdEluZGV4ICsgMTtcbiAgICAgICAgICByZXN1bHQgPSBtMi5leGVjKHMpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgdGhpcy5yZWdleEluZGV4ICs9IHJlc3VsdC5wb3NpdGlvbiArIDE7XG4gICAgICAgIGlmICh0aGlzLnJlZ2V4SW5kZXggPT09IHRoaXMuY291bnQpIHtcbiAgICAgICAgICAvLyB3cmFwLWFyb3VuZCB0byBjb25zaWRlcmluZyBhbGwgbWF0Y2hlcyBhZ2FpblxuICAgICAgICAgIHRoaXMuY29uc2lkZXJBbGwoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBHaXZlbiBhIG1vZGUsIGJ1aWxkcyBhIGh1Z2UgUmVzdW1hYmxlTXVsdGlSZWdleCB0aGF0IGNhbiBiZSB1c2VkIHRvIHdhbGtcbiAgICogdGhlIGNvbnRlbnQgYW5kIGZpbmQgbWF0Y2hlcy5cbiAgICpcbiAgICogQHBhcmFtIHtDb21waWxlZE1vZGV9IG1vZGVcbiAgICogQHJldHVybnMge1Jlc3VtYWJsZU11bHRpUmVnZXh9XG4gICAqL1xuICBmdW5jdGlvbiBidWlsZE1vZGVSZWdleChtb2RlKSB7XG4gICAgY29uc3QgbW0gPSBuZXcgUmVzdW1hYmxlTXVsdGlSZWdleCgpO1xuXG4gICAgbW9kZS5jb250YWlucy5mb3JFYWNoKHRlcm0gPT4gbW0uYWRkUnVsZSh0ZXJtLmJlZ2luLCB7IHJ1bGU6IHRlcm0sIHR5cGU6IFwiYmVnaW5cIiB9KSk7XG5cbiAgICBpZiAobW9kZS50ZXJtaW5hdG9yRW5kKSB7XG4gICAgICBtbS5hZGRSdWxlKG1vZGUudGVybWluYXRvckVuZCwgeyB0eXBlOiBcImVuZFwiIH0pO1xuICAgIH1cbiAgICBpZiAobW9kZS5pbGxlZ2FsKSB7XG4gICAgICBtbS5hZGRSdWxlKG1vZGUuaWxsZWdhbCwgeyB0eXBlOiBcImlsbGVnYWxcIiB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbW07XG4gIH1cblxuICAvKiogc2tpcCB2cyBhYm9ydCB2cyBpZ25vcmVcbiAgICpcbiAgICogQHNraXAgICAtIFRoZSBtb2RlIGlzIHN0aWxsIGVudGVyZWQgYW5kIGV4aXRlZCBub3JtYWxseSAoYW5kIGNvbnRhaW5zIHJ1bGVzIGFwcGx5KSxcbiAgICogICAgICAgICAgIGJ1dCBhbGwgY29udGVudCBpcyBoZWxkIGFuZCBhZGRlZCB0byB0aGUgcGFyZW50IGJ1ZmZlciByYXRoZXIgdGhhbiBiZWluZ1xuICAgKiAgICAgICAgICAgb3V0cHV0IHdoZW4gdGhlIG1vZGUgZW5kcy4gIE1vc3RseSB1c2VkIHdpdGggYHN1Ymxhbmd1YWdlYCB0byBidWlsZCB1cFxuICAgKiAgICAgICAgICAgYSBzaW5nbGUgbGFyZ2UgYnVmZmVyIHRoYW4gY2FuIGJlIHBhcnNlZCBieSBzdWJsYW5ndWFnZS5cbiAgICpcbiAgICogICAgICAgICAgICAgLSBUaGUgbW9kZSBiZWdpbiBhbmRzIGVuZHMgbm9ybWFsbHkuXG4gICAqICAgICAgICAgICAgIC0gQ29udGVudCBtYXRjaGVkIGlzIGFkZGVkIHRvIHRoZSBwYXJlbnQgbW9kZSBidWZmZXIuXG4gICAqICAgICAgICAgICAgIC0gVGhlIHBhcnNlciBjdXJzb3IgaXMgbW92ZWQgZm9yd2FyZCBub3JtYWxseS5cbiAgICpcbiAgICogQGFib3J0ICAtIEEgaGFjayBwbGFjZWhvbGRlciB1bnRpbCB3ZSBoYXZlIGlnbm9yZS4gIEFib3J0cyB0aGUgbW9kZSAoYXMgaWYgaXRcbiAgICogICAgICAgICAgIG5ldmVyIG1hdGNoZWQpIGJ1dCBET0VTIE5PVCBjb250aW51ZSB0byBtYXRjaCBzdWJzZXF1ZW50IGBjb250YWluc2BcbiAgICogICAgICAgICAgIG1vZGVzLiAgQWJvcnQgaXMgYmFkL3N1Ym9wdGltYWwgYmVjYXVzZSBpdCBjYW4gcmVzdWx0IGluIG1vZGVzXG4gICAqICAgICAgICAgICBmYXJ0aGVyIGRvd24gbm90IGdldHRpbmcgYXBwbGllZCBiZWNhdXNlIGFuIGVhcmxpZXIgcnVsZSBlYXRzIHRoZVxuICAgKiAgICAgICAgICAgY29udGVudCBidXQgdGhlbiBhYm9ydHMuXG4gICAqXG4gICAqICAgICAgICAgICAgIC0gVGhlIG1vZGUgZG9lcyBub3QgYmVnaW4uXG4gICAqICAgICAgICAgICAgIC0gQ29udGVudCBtYXRjaGVkIGJ5IGBiZWdpbmAgaXMgYWRkZWQgdG8gdGhlIG1vZGUgYnVmZmVyLlxuICAgKiAgICAgICAgICAgICAtIFRoZSBwYXJzZXIgY3Vyc29yIGlzIG1vdmVkIGZvcndhcmQgYWNjb3JkaW5nbHkuXG4gICAqXG4gICAqIEBpZ25vcmUgLSBJZ25vcmVzIHRoZSBtb2RlIChhcyBpZiBpdCBuZXZlciBtYXRjaGVkKSBhbmQgY29udGludWVzIHRvIG1hdGNoIGFueVxuICAgKiAgICAgICAgICAgc3Vic2VxdWVudCBgY29udGFpbnNgIG1vZGVzLiAgSWdub3JlIGlzbid0IHRlY2huaWNhbGx5IHBvc3NpYmxlIHdpdGhcbiAgICogICAgICAgICAgIHRoZSBjdXJyZW50IHBhcnNlciBpbXBsZW1lbnRhdGlvbi5cbiAgICpcbiAgICogICAgICAgICAgICAgLSBUaGUgbW9kZSBkb2VzIG5vdCBiZWdpbi5cbiAgICogICAgICAgICAgICAgLSBDb250ZW50IG1hdGNoZWQgYnkgYGJlZ2luYCBpcyBpZ25vcmVkLlxuICAgKiAgICAgICAgICAgICAtIFRoZSBwYXJzZXIgY3Vyc29yIGlzIG5vdCBtb3ZlZCBmb3J3YXJkLlxuICAgKi9cblxuICAvKipcbiAgICogQ29tcGlsZXMgYW4gaW5kaXZpZHVhbCBtb2RlXG4gICAqXG4gICAqIFRoaXMgY2FuIHJhaXNlIGFuIGVycm9yIGlmIHRoZSBtb2RlIGNvbnRhaW5zIGNlcnRhaW4gZGV0ZWN0YWJsZSBrbm93biBsb2dpY1xuICAgKiBpc3N1ZXMuXG4gICAqIEBwYXJhbSB7TW9kZX0gbW9kZVxuICAgKiBAcGFyYW0ge0NvbXBpbGVkTW9kZSB8IG51bGx9IFtwYXJlbnRdXG4gICAqIEByZXR1cm5zIHtDb21waWxlZE1vZGUgfCBuZXZlcn1cbiAgICovXG4gIGZ1bmN0aW9uIGNvbXBpbGVNb2RlKG1vZGUsIHBhcmVudCkge1xuICAgIGNvbnN0IGNtb2RlID0gLyoqIEB0eXBlIENvbXBpbGVkTW9kZSAqLyAobW9kZSk7XG4gICAgaWYgKG1vZGUuaXNDb21waWxlZCkgcmV0dXJuIGNtb2RlO1xuXG4gICAgW1xuICAgICAgLy8gZG8gdGhpcyBlYXJseSBzbyBjb21waWxlciBleHRlbnNpb25zIGdlbmVyYWxseSBkb24ndCBoYXZlIHRvIHdvcnJ5IGFib3V0XG4gICAgICAvLyB0aGUgZGlzdGluY3Rpb24gYmV0d2VlbiBtYXRjaC9iZWdpblxuICAgICAgY29tcGlsZU1hdGNoXG4gICAgXS5mb3JFYWNoKGV4dCA9PiBleHQobW9kZSwgcGFyZW50KSk7XG5cbiAgICBsYW5ndWFnZS5jb21waWxlckV4dGVuc2lvbnMuZm9yRWFjaChleHQgPT4gZXh0KG1vZGUsIHBhcmVudCkpO1xuXG4gICAgLy8gX19iZWZvcmVCZWdpbiBpcyBjb25zaWRlcmVkIHByaXZhdGUgQVBJLCBpbnRlcm5hbCB1c2Ugb25seVxuICAgIG1vZGUuX19iZWZvcmVCZWdpbiA9IG51bGw7XG5cbiAgICBbXG4gICAgICBiZWdpbktleXdvcmRzLFxuICAgICAgLy8gZG8gdGhpcyBsYXRlciBzbyBjb21waWxlciBleHRlbnNpb25zIHRoYXQgY29tZSBlYXJsaWVyIGhhdmUgYWNjZXNzIHRvIHRoZVxuICAgICAgLy8gcmF3IGFycmF5IGlmIHRoZXkgd2FudGVkIHRvIHBlcmhhcHMgbWFuaXB1bGF0ZSBpdCwgZXRjLlxuICAgICAgY29tcGlsZUlsbGVnYWwsXG4gICAgICAvLyBkZWZhdWx0IHRvIDEgcmVsZXZhbmNlIGlmIG5vdCBzcGVjaWZpZWRcbiAgICAgIGNvbXBpbGVSZWxldmFuY2VcbiAgICBdLmZvckVhY2goZXh0ID0+IGV4dChtb2RlLCBwYXJlbnQpKTtcblxuICAgIG1vZGUuaXNDb21waWxlZCA9IHRydWU7XG5cbiAgICBsZXQga2V5d29yZFBhdHRlcm4gPSBudWxsO1xuICAgIGlmICh0eXBlb2YgbW9kZS5rZXl3b3JkcyA9PT0gXCJvYmplY3RcIikge1xuICAgICAga2V5d29yZFBhdHRlcm4gPSBtb2RlLmtleXdvcmRzLiRwYXR0ZXJuO1xuICAgICAgZGVsZXRlIG1vZGUua2V5d29yZHMuJHBhdHRlcm47XG4gICAgfVxuXG4gICAgaWYgKG1vZGUua2V5d29yZHMpIHtcbiAgICAgIG1vZGUua2V5d29yZHMgPSBjb21waWxlS2V5d29yZHMobW9kZS5rZXl3b3JkcywgbGFuZ3VhZ2UuY2FzZV9pbnNlbnNpdGl2ZSk7XG4gICAgfVxuXG4gICAgLy8gYm90aCBhcmUgbm90IGFsbG93ZWRcbiAgICBpZiAobW9kZS5sZXhlbWVzICYmIGtleXdvcmRQYXR0ZXJuKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJFUlI6IFByZWZlciBga2V5d29yZHMuJHBhdHRlcm5gIHRvIGBtb2RlLmxleGVtZXNgLCBCT1RIIGFyZSBub3QgYWxsb3dlZC4gKHNlZSBtb2RlIHJlZmVyZW5jZSkgXCIpO1xuICAgIH1cblxuICAgIC8vIGBtb2RlLmxleGVtZXNgIHdhcyB0aGUgb2xkIHN0YW5kYXJkIGJlZm9yZSB3ZSBhZGRlZCBhbmQgbm93IHJlY29tbWVuZFxuICAgIC8vIHVzaW5nIGBrZXl3b3Jkcy4kcGF0dGVybmAgdG8gcGFzcyB0aGUga2V5d29yZCBwYXR0ZXJuXG4gICAga2V5d29yZFBhdHRlcm4gPSBrZXl3b3JkUGF0dGVybiB8fCBtb2RlLmxleGVtZXMgfHwgL1xcdysvO1xuICAgIGNtb2RlLmtleXdvcmRQYXR0ZXJuUmUgPSBsYW5nUmUoa2V5d29yZFBhdHRlcm4sIHRydWUpO1xuXG4gICAgaWYgKHBhcmVudCkge1xuICAgICAgaWYgKCFtb2RlLmJlZ2luKSBtb2RlLmJlZ2luID0gL1xcQnxcXGIvO1xuICAgICAgY21vZGUuYmVnaW5SZSA9IGxhbmdSZShtb2RlLmJlZ2luKTtcbiAgICAgIGlmIChtb2RlLmVuZFNhbWVBc0JlZ2luKSBtb2RlLmVuZCA9IG1vZGUuYmVnaW47XG4gICAgICBpZiAoIW1vZGUuZW5kICYmICFtb2RlLmVuZHNXaXRoUGFyZW50KSBtb2RlLmVuZCA9IC9cXEJ8XFxiLztcbiAgICAgIGlmIChtb2RlLmVuZCkgY21vZGUuZW5kUmUgPSBsYW5nUmUobW9kZS5lbmQpO1xuICAgICAgY21vZGUudGVybWluYXRvckVuZCA9IHNvdXJjZShtb2RlLmVuZCkgfHwgJyc7XG4gICAgICBpZiAobW9kZS5lbmRzV2l0aFBhcmVudCAmJiBwYXJlbnQudGVybWluYXRvckVuZCkge1xuICAgICAgICBjbW9kZS50ZXJtaW5hdG9yRW5kICs9IChtb2RlLmVuZCA/ICd8JyA6ICcnKSArIHBhcmVudC50ZXJtaW5hdG9yRW5kO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAobW9kZS5pbGxlZ2FsKSBjbW9kZS5pbGxlZ2FsUmUgPSBsYW5nUmUoLyoqIEB0eXBlIHtSZWdFeHAgfCBzdHJpbmd9ICovIChtb2RlLmlsbGVnYWwpKTtcbiAgICBpZiAoIW1vZGUuY29udGFpbnMpIG1vZGUuY29udGFpbnMgPSBbXTtcblxuICAgIG1vZGUuY29udGFpbnMgPSBbXS5jb25jYXQoLi4ubW9kZS5jb250YWlucy5tYXAoZnVuY3Rpb24oYykge1xuICAgICAgcmV0dXJuIGV4cGFuZE9yQ2xvbmVNb2RlKGMgPT09ICdzZWxmJyA/IG1vZGUgOiBjKTtcbiAgICB9KSk7XG4gICAgbW9kZS5jb250YWlucy5mb3JFYWNoKGZ1bmN0aW9uKGMpIHsgY29tcGlsZU1vZGUoLyoqIEB0eXBlIE1vZGUgKi8gKGMpLCBjbW9kZSk7IH0pO1xuXG4gICAgaWYgKG1vZGUuc3RhcnRzKSB7XG4gICAgICBjb21waWxlTW9kZShtb2RlLnN0YXJ0cywgcGFyZW50KTtcbiAgICB9XG5cbiAgICBjbW9kZS5tYXRjaGVyID0gYnVpbGRNb2RlUmVnZXgoY21vZGUpO1xuICAgIHJldHVybiBjbW9kZTtcbiAgfVxuXG4gIGlmICghbGFuZ3VhZ2UuY29tcGlsZXJFeHRlbnNpb25zKSBsYW5ndWFnZS5jb21waWxlckV4dGVuc2lvbnMgPSBbXTtcblxuICAvLyBzZWxmIGlzIG5vdCB2YWxpZCBhdCB0aGUgdG9wLWxldmVsXG4gIGlmIChsYW5ndWFnZS5jb250YWlucyAmJiBsYW5ndWFnZS5jb250YWlucy5pbmNsdWRlcygnc2VsZicpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiRVJSOiBjb250YWlucyBgc2VsZmAgaXMgbm90IHN1cHBvcnRlZCBhdCB0aGUgdG9wLWxldmVsIG9mIGEgbGFuZ3VhZ2UuICBTZWUgZG9jdW1lbnRhdGlvbi5cIik7XG4gIH1cblxuICAvLyB3ZSBuZWVkIGEgbnVsbCBvYmplY3QsIHdoaWNoIGluaGVyaXQgd2lsbCBndWFyYW50ZWVcbiAgbGFuZ3VhZ2UuY2xhc3NOYW1lQWxpYXNlcyA9IGluaGVyaXQobGFuZ3VhZ2UuY2xhc3NOYW1lQWxpYXNlcyB8fCB7fSk7XG5cbiAgcmV0dXJuIGNvbXBpbGVNb2RlKC8qKiBAdHlwZSBNb2RlICovIChsYW5ndWFnZSkpO1xufVxuXG4vKipcbiAqIERldGVybWluZXMgaWYgYSBtb2RlIGhhcyBhIGRlcGVuZGVuY3kgb24gaXQncyBwYXJlbnQgb3Igbm90XG4gKlxuICogSWYgYSBtb2RlIGRvZXMgaGF2ZSBhIHBhcmVudCBkZXBlbmRlbmN5IHRoZW4gb2Z0ZW4gd2UgbmVlZCB0byBjbG9uZSBpdCBpZlxuICogaXQncyB1c2VkIGluIG11bHRpcGxlIHBsYWNlcyBzbyB0aGF0IGVhY2ggY29weSBwb2ludHMgdG8gdGhlIGNvcnJlY3QgcGFyZW50LFxuICogd2hlcmUtYXMgbW9kZXMgd2l0aG91dCBhIHBhcmVudCBjYW4gb2Z0ZW4gc2FmZWx5IGJlIHJlLXVzZWQgYXQgdGhlIGJvdHRvbSBvZlxuICogYSBtb2RlIGNoYWluLlxuICpcbiAqIEBwYXJhbSB7TW9kZSB8IG51bGx9IG1vZGVcbiAqIEByZXR1cm5zIHtib29sZWFufSAtIGlzIHRoZXJlIGEgZGVwZW5kZW5jeSBvbiB0aGUgcGFyZW50P1xuICogKi9cbmZ1bmN0aW9uIGRlcGVuZGVuY3lPblBhcmVudChtb2RlKSB7XG4gIGlmICghbW9kZSkgcmV0dXJuIGZhbHNlO1xuXG4gIHJldHVybiBtb2RlLmVuZHNXaXRoUGFyZW50IHx8IGRlcGVuZGVuY3lPblBhcmVudChtb2RlLnN0YXJ0cyk7XG59XG5cbi8qKlxuICogRXhwYW5kcyBhIG1vZGUgb3IgY2xvbmVzIGl0IGlmIG5lY2Vzc2FyeVxuICpcbiAqIFRoaXMgaXMgbmVjZXNzYXJ5IGZvciBtb2RlcyB3aXRoIHBhcmVudGFsIGRlcGVuZGVuY2VpcyAoc2VlIG5vdGVzIG9uXG4gKiBgZGVwZW5kZW5jeU9uUGFyZW50YCkgYW5kIGZvciBub2RlcyB0aGF0IGhhdmUgYHZhcmlhbnRzYCAtIHdoaWNoIG11c3QgdGhlbiBiZVxuICogZXhwbG9kZWQgaW50byB0aGVpciBvd24gaW5kaXZpZHVhbCBtb2RlcyBhdCBjb21waWxlIHRpbWUuXG4gKlxuICogQHBhcmFtIHtNb2RlfSBtb2RlXG4gKiBAcmV0dXJucyB7TW9kZSB8IE1vZGVbXX1cbiAqICovXG5mdW5jdGlvbiBleHBhbmRPckNsb25lTW9kZShtb2RlKSB7XG4gIGlmIChtb2RlLnZhcmlhbnRzICYmICFtb2RlLmNhY2hlZFZhcmlhbnRzKSB7XG4gICAgbW9kZS5jYWNoZWRWYXJpYW50cyA9IG1vZGUudmFyaWFudHMubWFwKGZ1bmN0aW9uKHZhcmlhbnQpIHtcbiAgICAgIHJldHVybiBpbmhlcml0KG1vZGUsIHsgdmFyaWFudHM6IG51bGwgfSwgdmFyaWFudCk7XG4gICAgfSk7XG4gIH1cblxuICAvLyBFWFBBTkRcbiAgLy8gaWYgd2UgaGF2ZSB2YXJpYW50cyB0aGVuIGVzc2VudGlhbGx5IFwicmVwbGFjZVwiIHRoZSBtb2RlIHdpdGggdGhlIHZhcmlhbnRzXG4gIC8vIHRoaXMgaGFwcGVucyBpbiBjb21waWxlTW9kZSwgd2hlcmUgdGhpcyBmdW5jdGlvbiBpcyBjYWxsZWQgZnJvbVxuICBpZiAobW9kZS5jYWNoZWRWYXJpYW50cykge1xuICAgIHJldHVybiBtb2RlLmNhY2hlZFZhcmlhbnRzO1xuICB9XG5cbiAgLy8gQ0xPTkVcbiAgLy8gaWYgd2UgaGF2ZSBkZXBlbmRlbmNpZXMgb24gcGFyZW50cyB0aGVuIHdlIG5lZWQgYSB1bmlxdWVcbiAgLy8gaW5zdGFuY2Ugb2Ygb3Vyc2VsdmVzLCBzbyB3ZSBjYW4gYmUgcmV1c2VkIHdpdGggbWFueVxuICAvLyBkaWZmZXJlbnQgcGFyZW50cyB3aXRob3V0IGlzc3VlXG4gIGlmIChkZXBlbmRlbmN5T25QYXJlbnQobW9kZSkpIHtcbiAgICByZXR1cm4gaW5oZXJpdChtb2RlLCB7IHN0YXJ0czogbW9kZS5zdGFydHMgPyBpbmhlcml0KG1vZGUuc3RhcnRzKSA6IG51bGwgfSk7XG4gIH1cblxuICBpZiAoT2JqZWN0LmlzRnJvemVuKG1vZGUpKSB7XG4gICAgcmV0dXJuIGluaGVyaXQobW9kZSk7XG4gIH1cblxuICAvLyBubyBzcGVjaWFsIGRlcGVuZGVuY3kgaXNzdWVzLCBqdXN0IHJldHVybiBvdXJzZWx2ZXNcbiAgcmV0dXJuIG1vZGU7XG59XG5cbnZhciB2ZXJzaW9uID0gXCIxMC43LjNcIjtcblxuLy8gQHRzLW5vY2hlY2tcblxuZnVuY3Rpb24gaGFzVmFsdWVPckVtcHR5QXR0cmlidXRlKHZhbHVlKSB7XG4gIHJldHVybiBCb29sZWFuKHZhbHVlIHx8IHZhbHVlID09PSBcIlwiKTtcbn1cblxuZnVuY3Rpb24gQnVpbGRWdWVQbHVnaW4oaGxqcykge1xuICBjb25zdCBDb21wb25lbnQgPSB7XG4gICAgcHJvcHM6IFtcImxhbmd1YWdlXCIsIFwiY29kZVwiLCBcImF1dG9kZXRlY3RcIl0sXG4gICAgZGF0YTogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBkZXRlY3RlZExhbmd1YWdlOiBcIlwiLFxuICAgICAgICB1bmtub3duTGFuZ3VhZ2U6IGZhbHNlXG4gICAgICB9O1xuICAgIH0sXG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgIGNsYXNzTmFtZSgpIHtcbiAgICAgICAgaWYgKHRoaXMudW5rbm93bkxhbmd1YWdlKSByZXR1cm4gXCJcIjtcblxuICAgICAgICByZXR1cm4gXCJobGpzIFwiICsgdGhpcy5kZXRlY3RlZExhbmd1YWdlO1xuICAgICAgfSxcbiAgICAgIGhpZ2hsaWdodGVkKCkge1xuICAgICAgICAvLyBubyBpZGVhIHdoYXQgbGFuZ3VhZ2UgdG8gdXNlLCByZXR1cm4gcmF3IGNvZGVcbiAgICAgICAgaWYgKCF0aGlzLmF1dG9EZXRlY3QgJiYgIWhsanMuZ2V0TGFuZ3VhZ2UodGhpcy5sYW5ndWFnZSkpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oYFRoZSBsYW5ndWFnZSBcIiR7dGhpcy5sYW5ndWFnZX1cIiB5b3Ugc3BlY2lmaWVkIGNvdWxkIG5vdCBiZSBmb3VuZC5gKTtcbiAgICAgICAgICB0aGlzLnVua25vd25MYW5ndWFnZSA9IHRydWU7XG4gICAgICAgICAgcmV0dXJuIGVzY2FwZUhUTUwodGhpcy5jb2RlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCByZXN1bHQgPSB7fTtcbiAgICAgICAgaWYgKHRoaXMuYXV0b0RldGVjdCkge1xuICAgICAgICAgIHJlc3VsdCA9IGhsanMuaGlnaGxpZ2h0QXV0byh0aGlzLmNvZGUpO1xuICAgICAgICAgIHRoaXMuZGV0ZWN0ZWRMYW5ndWFnZSA9IHJlc3VsdC5sYW5ndWFnZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXN1bHQgPSBobGpzLmhpZ2hsaWdodCh0aGlzLmxhbmd1YWdlLCB0aGlzLmNvZGUsIHRoaXMuaWdub3JlSWxsZWdhbHMpO1xuICAgICAgICAgIHRoaXMuZGV0ZWN0ZWRMYW5ndWFnZSA9IHRoaXMubGFuZ3VhZ2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdC52YWx1ZTtcbiAgICAgIH0sXG4gICAgICBhdXRvRGV0ZWN0KCkge1xuICAgICAgICByZXR1cm4gIXRoaXMubGFuZ3VhZ2UgfHwgaGFzVmFsdWVPckVtcHR5QXR0cmlidXRlKHRoaXMuYXV0b2RldGVjdCk7XG4gICAgICB9LFxuICAgICAgaWdub3JlSWxsZWdhbHMoKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0sXG4gICAgLy8gdGhpcyBhdm9pZHMgbmVlZGluZyB0byB1c2UgYSB3aG9sZSBWdWUgY29tcGlsYXRpb24gcGlwZWxpbmUganVzdFxuICAgIC8vIHRvIGJ1aWxkIEhpZ2hsaWdodC5qc1xuICAgIHJlbmRlcihjcmVhdGVFbGVtZW50KSB7XG4gICAgICByZXR1cm4gY3JlYXRlRWxlbWVudChcInByZVwiLCB7fSwgW1xuICAgICAgICBjcmVhdGVFbGVtZW50KFwiY29kZVwiLCB7XG4gICAgICAgICAgY2xhc3M6IHRoaXMuY2xhc3NOYW1lLFxuICAgICAgICAgIGRvbVByb3BzOiB7IGlubmVySFRNTDogdGhpcy5oaWdobGlnaHRlZCB9XG4gICAgICAgIH0pXG4gICAgICBdKTtcbiAgICB9XG4gICAgLy8gdGVtcGxhdGU6IGA8cHJlPjxjb2RlIDpjbGFzcz1cImNsYXNzTmFtZVwiIHYtaHRtbD1cImhpZ2hsaWdodGVkXCI+PC9jb2RlPjwvcHJlPmBcbiAgfTtcblxuICBjb25zdCBWdWVQbHVnaW4gPSB7XG4gICAgaW5zdGFsbChWdWUpIHtcbiAgICAgIFZ1ZS5jb21wb25lbnQoJ2hpZ2hsaWdodGpzJywgQ29tcG9uZW50KTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHsgQ29tcG9uZW50LCBWdWVQbHVnaW4gfTtcbn1cblxuLyogcGx1Z2luIGl0c2VsZiAqL1xuXG4vKiogQHR5cGUge0hMSlNQbHVnaW59ICovXG5jb25zdCBtZXJnZUhUTUxQbHVnaW4gPSB7XG4gIFwiYWZ0ZXI6aGlnaGxpZ2h0RWxlbWVudFwiOiAoeyBlbCwgcmVzdWx0LCB0ZXh0IH0pID0+IHtcbiAgICBjb25zdCBvcmlnaW5hbFN0cmVhbSA9IG5vZGVTdHJlYW0oZWwpO1xuICAgIGlmICghb3JpZ2luYWxTdHJlYW0ubGVuZ3RoKSByZXR1cm47XG5cbiAgICBjb25zdCByZXN1bHROb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcmVzdWx0Tm9kZS5pbm5lckhUTUwgPSByZXN1bHQudmFsdWU7XG4gICAgcmVzdWx0LnZhbHVlID0gbWVyZ2VTdHJlYW1zKG9yaWdpbmFsU3RyZWFtLCBub2RlU3RyZWFtKHJlc3VsdE5vZGUpLCB0ZXh0KTtcbiAgfVxufTtcblxuLyogU3RyZWFtIG1lcmdpbmcgc3VwcG9ydCBmdW5jdGlvbnMgKi9cblxuLyoqXG4gKiBAdHlwZWRlZiBFdmVudFxuICogQHByb3BlcnR5IHsnc3RhcnQnfCdzdG9wJ30gZXZlbnRcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBvZmZzZXRcbiAqIEBwcm9wZXJ0eSB7Tm9kZX0gbm9kZVxuICovXG5cbi8qKlxuICogQHBhcmFtIHtOb2RlfSBub2RlXG4gKi9cbmZ1bmN0aW9uIHRhZyhub2RlKSB7XG4gIHJldHVybiBub2RlLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtOb2RlfSBub2RlXG4gKi9cbmZ1bmN0aW9uIG5vZGVTdHJlYW0obm9kZSkge1xuICAvKiogQHR5cGUgRXZlbnRbXSAqL1xuICBjb25zdCByZXN1bHQgPSBbXTtcbiAgKGZ1bmN0aW9uIF9ub2RlU3RyZWFtKG5vZGUsIG9mZnNldCkge1xuICAgIGZvciAobGV0IGNoaWxkID0gbm9kZS5maXJzdENoaWxkOyBjaGlsZDsgY2hpbGQgPSBjaGlsZC5uZXh0U2libGluZykge1xuICAgICAgaWYgKGNoaWxkLm5vZGVUeXBlID09PSAzKSB7XG4gICAgICAgIG9mZnNldCArPSBjaGlsZC5ub2RlVmFsdWUubGVuZ3RoO1xuICAgICAgfSBlbHNlIGlmIChjaGlsZC5ub2RlVHlwZSA9PT0gMSkge1xuICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgZXZlbnQ6ICdzdGFydCcsXG4gICAgICAgICAgb2Zmc2V0OiBvZmZzZXQsXG4gICAgICAgICAgbm9kZTogY2hpbGRcbiAgICAgICAgfSk7XG4gICAgICAgIG9mZnNldCA9IF9ub2RlU3RyZWFtKGNoaWxkLCBvZmZzZXQpO1xuICAgICAgICAvLyBQcmV2ZW50IHZvaWQgZWxlbWVudHMgZnJvbSBoYXZpbmcgYW4gZW5kIHRhZyB0aGF0IHdvdWxkIGFjdHVhbGx5XG4gICAgICAgIC8vIGRvdWJsZSB0aGVtIGluIHRoZSBvdXRwdXQuIFRoZXJlIGFyZSBtb3JlIHZvaWQgZWxlbWVudHMgaW4gSFRNTFxuICAgICAgICAvLyBidXQgd2UgbGlzdCBvbmx5IHRob3NlIHJlYWxpc3RpY2FsbHkgZXhwZWN0ZWQgaW4gY29kZSBkaXNwbGF5LlxuICAgICAgICBpZiAoIXRhZyhjaGlsZCkubWF0Y2goL2JyfGhyfGltZ3xpbnB1dC8pKSB7XG4gICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgZXZlbnQ6ICdzdG9wJyxcbiAgICAgICAgICAgIG9mZnNldDogb2Zmc2V0LFxuICAgICAgICAgICAgbm9kZTogY2hpbGRcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb2Zmc2V0O1xuICB9KShub2RlLCAwKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge2FueX0gb3JpZ2luYWwgLSB0aGUgb3JpZ2luYWwgc3RyZWFtXG4gKiBAcGFyYW0ge2FueX0gaGlnaGxpZ2h0ZWQgLSBzdHJlYW0gb2YgdGhlIGhpZ2hsaWdodGVkIHNvdXJjZVxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIC0gdGhlIG9yaWdpbmFsIHNvdXJjZSBpdHNlbGZcbiAqL1xuZnVuY3Rpb24gbWVyZ2VTdHJlYW1zKG9yaWdpbmFsLCBoaWdobGlnaHRlZCwgdmFsdWUpIHtcbiAgbGV0IHByb2Nlc3NlZCA9IDA7XG4gIGxldCByZXN1bHQgPSAnJztcbiAgY29uc3Qgbm9kZVN0YWNrID0gW107XG5cbiAgZnVuY3Rpb24gc2VsZWN0U3RyZWFtKCkge1xuICAgIGlmICghb3JpZ2luYWwubGVuZ3RoIHx8ICFoaWdobGlnaHRlZC5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBvcmlnaW5hbC5sZW5ndGggPyBvcmlnaW5hbCA6IGhpZ2hsaWdodGVkO1xuICAgIH1cbiAgICBpZiAob3JpZ2luYWxbMF0ub2Zmc2V0ICE9PSBoaWdobGlnaHRlZFswXS5vZmZzZXQpIHtcbiAgICAgIHJldHVybiAob3JpZ2luYWxbMF0ub2Zmc2V0IDwgaGlnaGxpZ2h0ZWRbMF0ub2Zmc2V0KSA/IG9yaWdpbmFsIDogaGlnaGxpZ2h0ZWQ7XG4gICAgfVxuXG4gICAgLypcbiAgICBUbyBhdm9pZCBzdGFydGluZyB0aGUgc3RyZWFtIGp1c3QgYmVmb3JlIGl0IHNob3VsZCBzdG9wIHRoZSBvcmRlciBpc1xuICAgIGVuc3VyZWQgdGhhdCBvcmlnaW5hbCBhbHdheXMgc3RhcnRzIGZpcnN0IGFuZCBjbG9zZXMgbGFzdDpcblxuICAgIGlmIChldmVudDEgPT0gJ3N0YXJ0JyAmJiBldmVudDIgPT0gJ3N0YXJ0JylcbiAgICAgIHJldHVybiBvcmlnaW5hbDtcbiAgICBpZiAoZXZlbnQxID09ICdzdGFydCcgJiYgZXZlbnQyID09ICdzdG9wJylcbiAgICAgIHJldHVybiBoaWdobGlnaHRlZDtcbiAgICBpZiAoZXZlbnQxID09ICdzdG9wJyAmJiBldmVudDIgPT0gJ3N0YXJ0JylcbiAgICAgIHJldHVybiBvcmlnaW5hbDtcbiAgICBpZiAoZXZlbnQxID09ICdzdG9wJyAmJiBldmVudDIgPT0gJ3N0b3AnKVxuICAgICAgcmV0dXJuIGhpZ2hsaWdodGVkO1xuXG4gICAgLi4uIHdoaWNoIGlzIGNvbGxhcHNlZCB0bzpcbiAgICAqL1xuICAgIHJldHVybiBoaWdobGlnaHRlZFswXS5ldmVudCA9PT0gJ3N0YXJ0JyA/IG9yaWdpbmFsIDogaGlnaGxpZ2h0ZWQ7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqL1xuICBmdW5jdGlvbiBvcGVuKG5vZGUpIHtcbiAgICAvKiogQHBhcmFtIHtBdHRyfSBhdHRyICovXG4gICAgZnVuY3Rpb24gYXR0cmlidXRlU3RyaW5nKGF0dHIpIHtcbiAgICAgIHJldHVybiAnICcgKyBhdHRyLm5vZGVOYW1lICsgJz1cIicgKyBlc2NhcGVIVE1MKGF0dHIudmFsdWUpICsgJ1wiJztcbiAgICB9XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIHJlc3VsdCArPSAnPCcgKyB0YWcobm9kZSkgKyBbXS5tYXAuY2FsbChub2RlLmF0dHJpYnV0ZXMsIGF0dHJpYnV0ZVN0cmluZykuam9pbignJykgKyAnPic7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqL1xuICBmdW5jdGlvbiBjbG9zZShub2RlKSB7XG4gICAgcmVzdWx0ICs9ICc8LycgKyB0YWcobm9kZSkgKyAnPic7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtFdmVudH0gZXZlbnRcbiAgICovXG4gIGZ1bmN0aW9uIHJlbmRlcihldmVudCkge1xuICAgIChldmVudC5ldmVudCA9PT0gJ3N0YXJ0JyA/IG9wZW4gOiBjbG9zZSkoZXZlbnQubm9kZSk7XG4gIH1cblxuICB3aGlsZSAob3JpZ2luYWwubGVuZ3RoIHx8IGhpZ2hsaWdodGVkLmxlbmd0aCkge1xuICAgIGxldCBzdHJlYW0gPSBzZWxlY3RTdHJlYW0oKTtcbiAgICByZXN1bHQgKz0gZXNjYXBlSFRNTCh2YWx1ZS5zdWJzdHJpbmcocHJvY2Vzc2VkLCBzdHJlYW1bMF0ub2Zmc2V0KSk7XG4gICAgcHJvY2Vzc2VkID0gc3RyZWFtWzBdLm9mZnNldDtcbiAgICBpZiAoc3RyZWFtID09PSBvcmlnaW5hbCkge1xuICAgICAgLypcbiAgICAgIE9uIGFueSBvcGVuaW5nIG9yIGNsb3NpbmcgdGFnIG9mIHRoZSBvcmlnaW5hbCBtYXJrdXAgd2UgZmlyc3QgY2xvc2VcbiAgICAgIHRoZSBlbnRpcmUgaGlnaGxpZ2h0ZWQgbm9kZSBzdGFjaywgdGhlbiByZW5kZXIgdGhlIG9yaWdpbmFsIHRhZyBhbG9uZ1xuICAgICAgd2l0aCBhbGwgdGhlIGZvbGxvd2luZyBvcmlnaW5hbCB0YWdzIGF0IHRoZSBzYW1lIG9mZnNldCBhbmQgdGhlblxuICAgICAgcmVvcGVuIGFsbCB0aGUgdGFncyBvbiB0aGUgaGlnaGxpZ2h0ZWQgc3RhY2suXG4gICAgICAqL1xuICAgICAgbm9kZVN0YWNrLnJldmVyc2UoKS5mb3JFYWNoKGNsb3NlKTtcbiAgICAgIGRvIHtcbiAgICAgICAgcmVuZGVyKHN0cmVhbS5zcGxpY2UoMCwgMSlbMF0pO1xuICAgICAgICBzdHJlYW0gPSBzZWxlY3RTdHJlYW0oKTtcbiAgICAgIH0gd2hpbGUgKHN0cmVhbSA9PT0gb3JpZ2luYWwgJiYgc3RyZWFtLmxlbmd0aCAmJiBzdHJlYW1bMF0ub2Zmc2V0ID09PSBwcm9jZXNzZWQpO1xuICAgICAgbm9kZVN0YWNrLnJldmVyc2UoKS5mb3JFYWNoKG9wZW4pO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoc3RyZWFtWzBdLmV2ZW50ID09PSAnc3RhcnQnKSB7XG4gICAgICAgIG5vZGVTdGFjay5wdXNoKHN0cmVhbVswXS5ub2RlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5vZGVTdGFjay5wb3AoKTtcbiAgICAgIH1cbiAgICAgIHJlbmRlcihzdHJlYW0uc3BsaWNlKDAsIDEpWzBdKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdCArIGVzY2FwZUhUTUwodmFsdWUuc3Vic3RyKHByb2Nlc3NlZCkpO1xufVxuXG4vKlxuXG5Gb3IgdGhlIHJlYXNvbmluZyBiZWhpbmQgdGhpcyBwbGVhc2Ugc2VlOlxuaHR0cHM6Ly9naXRodWIuY29tL2hpZ2hsaWdodGpzL2hpZ2hsaWdodC5qcy9pc3N1ZXMvMjg4MCNpc3N1ZWNvbW1lbnQtNzQ3Mjc1NDE5XG5cbiovXG5cbi8qKlxuICogQHR5cGUge1JlY29yZDxzdHJpbmcsIGJvb2xlYW4+fVxuICovXG5jb25zdCBzZWVuRGVwcmVjYXRpb25zID0ge307XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2VcbiAqL1xuY29uc3QgZXJyb3IgPSAobWVzc2FnZSkgPT4ge1xuICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZVxuICogQHBhcmFtIHthbnl9IGFyZ3NcbiAqL1xuY29uc3Qgd2FybiA9IChtZXNzYWdlLCAuLi5hcmdzKSA9PiB7XG4gIGNvbnNvbGUubG9nKGBXQVJOOiAke21lc3NhZ2V9YCwgLi4uYXJncyk7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB2ZXJzaW9uXG4gKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZVxuICovXG5jb25zdCBkZXByZWNhdGVkID0gKHZlcnNpb24sIG1lc3NhZ2UpID0+IHtcbiAgaWYgKHNlZW5EZXByZWNhdGlvbnNbYCR7dmVyc2lvbn0vJHttZXNzYWdlfWBdKSByZXR1cm47XG5cbiAgY29uc29sZS5sb2coYERlcHJlY2F0ZWQgYXMgb2YgJHt2ZXJzaW9ufS4gJHttZXNzYWdlfWApO1xuICBzZWVuRGVwcmVjYXRpb25zW2Ake3ZlcnNpb259LyR7bWVzc2FnZX1gXSA9IHRydWU7XG59O1xuXG4vKlxuU3ludGF4IGhpZ2hsaWdodGluZyB3aXRoIGxhbmd1YWdlIGF1dG9kZXRlY3Rpb24uXG5odHRwczovL2hpZ2hsaWdodGpzLm9yZy9cbiovXG5cbmNvbnN0IGVzY2FwZSQxID0gZXNjYXBlSFRNTDtcbmNvbnN0IGluaGVyaXQkMSA9IGluaGVyaXQ7XG5jb25zdCBOT19NQVRDSCA9IFN5bWJvbChcIm5vbWF0Y2hcIik7XG5cbi8qKlxuICogQHBhcmFtIHthbnl9IGhsanMgLSBvYmplY3QgdGhhdCBpcyBleHRlbmRlZCAobGVnYWN5KVxuICogQHJldHVybnMge0hMSlNBcGl9XG4gKi9cbmNvbnN0IEhMSlMgPSBmdW5jdGlvbihobGpzKSB7XG4gIC8vIEdsb2JhbCBpbnRlcm5hbCB2YXJpYWJsZXMgdXNlZCB3aXRoaW4gdGhlIGhpZ2hsaWdodC5qcyBsaWJyYXJ5LlxuICAvKiogQHR5cGUge1JlY29yZDxzdHJpbmcsIExhbmd1YWdlPn0gKi9cbiAgY29uc3QgbGFuZ3VhZ2VzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgLyoqIEB0eXBlIHtSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+fSAqL1xuICBjb25zdCBhbGlhc2VzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgLyoqIEB0eXBlIHtITEpTUGx1Z2luW119ICovXG4gIGNvbnN0IHBsdWdpbnMgPSBbXTtcblxuICAvLyBzYWZlL3Byb2R1Y3Rpb24gbW9kZSAtIHN3YWxsb3dzIG1vcmUgZXJyb3JzLCB0cmllcyB0byBrZWVwIHJ1bm5pbmdcbiAgLy8gZXZlbiBpZiBhIHNpbmdsZSBzeW50YXggb3IgcGFyc2UgaGl0cyBhIGZhdGFsIGVycm9yXG4gIGxldCBTQUZFX01PREUgPSB0cnVlO1xuICBjb25zdCBmaXhNYXJrdXBSZSA9IC8oXig8W14+XSs+fFxcdHwpK3xcXG4pL2dtO1xuICBjb25zdCBMQU5HVUFHRV9OT1RfRk9VTkQgPSBcIkNvdWxkIG5vdCBmaW5kIHRoZSBsYW5ndWFnZSAne30nLCBkaWQgeW91IGZvcmdldCB0byBsb2FkL2luY2x1ZGUgYSBsYW5ndWFnZSBtb2R1bGU/XCI7XG4gIC8qKiBAdHlwZSB7TGFuZ3VhZ2V9ICovXG4gIGNvbnN0IFBMQUlOVEVYVF9MQU5HVUFHRSA9IHsgZGlzYWJsZUF1dG9kZXRlY3Q6IHRydWUsIG5hbWU6ICdQbGFpbiB0ZXh0JywgY29udGFpbnM6IFtdIH07XG5cbiAgLy8gR2xvYmFsIG9wdGlvbnMgdXNlZCB3aGVuIHdpdGhpbiBleHRlcm5hbCBBUElzLiBUaGlzIGlzIG1vZGlmaWVkIHdoZW5cbiAgLy8gY2FsbGluZyB0aGUgYGhsanMuY29uZmlndXJlYCBmdW5jdGlvbi5cbiAgLyoqIEB0eXBlIEhMSlNPcHRpb25zICovXG4gIGxldCBvcHRpb25zID0ge1xuICAgIG5vSGlnaGxpZ2h0UmU6IC9eKG5vLT9oaWdobGlnaHQpJC9pLFxuICAgIGxhbmd1YWdlRGV0ZWN0UmU6IC9cXGJsYW5nKD86dWFnZSk/LShbXFx3LV0rKVxcYi9pLFxuICAgIGNsYXNzUHJlZml4OiAnaGxqcy0nLFxuICAgIHRhYlJlcGxhY2U6IG51bGwsXG4gICAgdXNlQlI6IGZhbHNlLFxuICAgIGxhbmd1YWdlczogbnVsbCxcbiAgICAvLyBiZXRhIGNvbmZpZ3VyYXRpb24gb3B0aW9ucywgc3ViamVjdCB0byBjaGFuZ2UsIHdlbGNvbWUgdG8gZGlzY3Vzc1xuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9oaWdobGlnaHRqcy9oaWdobGlnaHQuanMvaXNzdWVzLzEwODZcbiAgICBfX2VtaXR0ZXI6IFRva2VuVHJlZUVtaXR0ZXJcbiAgfTtcblxuICAvKiBVdGlsaXR5IGZ1bmN0aW9ucyAqL1xuXG4gIC8qKlxuICAgKiBUZXN0cyBhIGxhbmd1YWdlIG5hbWUgdG8gc2VlIGlmIGhpZ2hsaWdodGluZyBzaG91bGQgYmUgc2tpcHBlZFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbGFuZ3VhZ2VOYW1lXG4gICAqL1xuICBmdW5jdGlvbiBzaG91bGROb3RIaWdobGlnaHQobGFuZ3VhZ2VOYW1lKSB7XG4gICAgcmV0dXJuIG9wdGlvbnMubm9IaWdobGlnaHRSZS50ZXN0KGxhbmd1YWdlTmFtZSk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtIaWdobGlnaHRlZEhUTUxFbGVtZW50fSBibG9jayAtIHRoZSBIVE1MIGVsZW1lbnQgdG8gZGV0ZXJtaW5lIGxhbmd1YWdlIGZvclxuICAgKi9cbiAgZnVuY3Rpb24gYmxvY2tMYW5ndWFnZShibG9jaykge1xuICAgIGxldCBjbGFzc2VzID0gYmxvY2suY2xhc3NOYW1lICsgJyAnO1xuXG4gICAgY2xhc3NlcyArPSBibG9jay5wYXJlbnROb2RlID8gYmxvY2sucGFyZW50Tm9kZS5jbGFzc05hbWUgOiAnJztcblxuICAgIC8vIGxhbmd1YWdlLSogdGFrZXMgcHJlY2VkZW5jZSBvdmVyIG5vbi1wcmVmaXhlZCBjbGFzcyBuYW1lcy5cbiAgICBjb25zdCBtYXRjaCA9IG9wdGlvbnMubGFuZ3VhZ2VEZXRlY3RSZS5leGVjKGNsYXNzZXMpO1xuICAgIGlmIChtYXRjaCkge1xuICAgICAgY29uc3QgbGFuZ3VhZ2UgPSBnZXRMYW5ndWFnZShtYXRjaFsxXSk7XG4gICAgICBpZiAoIWxhbmd1YWdlKSB7XG4gICAgICAgIHdhcm4oTEFOR1VBR0VfTk9UX0ZPVU5ELnJlcGxhY2UoXCJ7fVwiLCBtYXRjaFsxXSkpO1xuICAgICAgICB3YXJuKFwiRmFsbGluZyBiYWNrIHRvIG5vLWhpZ2hsaWdodCBtb2RlIGZvciB0aGlzIGJsb2NrLlwiLCBibG9jayk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbGFuZ3VhZ2UgPyBtYXRjaFsxXSA6ICduby1oaWdobGlnaHQnO1xuICAgIH1cblxuICAgIHJldHVybiBjbGFzc2VzXG4gICAgICAuc3BsaXQoL1xccysvKVxuICAgICAgLmZpbmQoKF9jbGFzcykgPT4gc2hvdWxkTm90SGlnaGxpZ2h0KF9jbGFzcykgfHwgZ2V0TGFuZ3VhZ2UoX2NsYXNzKSk7XG4gIH1cblxuICAvKipcbiAgICogQ29yZSBoaWdobGlnaHRpbmcgZnVuY3Rpb24uXG4gICAqXG4gICAqIE9MRCBBUElcbiAgICogaGlnaGxpZ2h0KGxhbmcsIGNvZGUsIGlnbm9yZUlsbGVnYWxzLCBjb250aW51YXRpb24pXG4gICAqXG4gICAqIE5FVyBBUElcbiAgICogaGlnaGxpZ2h0KGNvZGUsIHtsYW5nLCBpZ25vcmVJbGxlZ2Fsc30pXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjb2RlT3JsYW5ndWFnZU5hbWUgLSB0aGUgbGFuZ3VhZ2UgdG8gdXNlIGZvciBoaWdobGlnaHRpbmdcbiAgICogQHBhcmFtIHtzdHJpbmcgfCBIaWdobGlnaHRPcHRpb25zfSBvcHRpb25zT3JDb2RlIC0gdGhlIGNvZGUgdG8gaGlnaGxpZ2h0XG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lnbm9yZUlsbGVnYWxzXSAtIHdoZXRoZXIgdG8gaWdub3JlIGlsbGVnYWwgbWF0Y2hlcywgZGVmYXVsdCBpcyB0byBiYWlsXG4gICAqIEBwYXJhbSB7Q29tcGlsZWRNb2RlfSBbY29udGludWF0aW9uXSAtIGN1cnJlbnQgY29udGludWF0aW9uIG1vZGUsIGlmIGFueVxuICAgKlxuICAgKiBAcmV0dXJucyB7SGlnaGxpZ2h0UmVzdWx0fSBSZXN1bHQgLSBhbiBvYmplY3QgdGhhdCByZXByZXNlbnRzIHRoZSByZXN1bHRcbiAgICogQHByb3BlcnR5IHtzdHJpbmd9IGxhbmd1YWdlIC0gdGhlIGxhbmd1YWdlIG5hbWVcbiAgICogQHByb3BlcnR5IHtudW1iZXJ9IHJlbGV2YW5jZSAtIHRoZSByZWxldmFuY2Ugc2NvcmVcbiAgICogQHByb3BlcnR5IHtzdHJpbmd9IHZhbHVlIC0gdGhlIGhpZ2hsaWdodGVkIEhUTUwgY29kZVxuICAgKiBAcHJvcGVydHkge3N0cmluZ30gY29kZSAtIHRoZSBvcmlnaW5hbCByYXcgY29kZVxuICAgKiBAcHJvcGVydHkge0NvbXBpbGVkTW9kZX0gdG9wIC0gdG9wIG9mIHRoZSBjdXJyZW50IG1vZGUgc3RhY2tcbiAgICogQHByb3BlcnR5IHtib29sZWFufSBpbGxlZ2FsIC0gaW5kaWNhdGVzIHdoZXRoZXIgYW55IGlsbGVnYWwgbWF0Y2hlcyB3ZXJlIGZvdW5kXG4gICovXG4gIGZ1bmN0aW9uIGhpZ2hsaWdodChjb2RlT3JsYW5ndWFnZU5hbWUsIG9wdGlvbnNPckNvZGUsIGlnbm9yZUlsbGVnYWxzLCBjb250aW51YXRpb24pIHtcbiAgICBsZXQgY29kZSA9IFwiXCI7XG4gICAgbGV0IGxhbmd1YWdlTmFtZSA9IFwiXCI7XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zT3JDb2RlID09PSBcIm9iamVjdFwiKSB7XG4gICAgICBjb2RlID0gY29kZU9ybGFuZ3VhZ2VOYW1lO1xuICAgICAgaWdub3JlSWxsZWdhbHMgPSBvcHRpb25zT3JDb2RlLmlnbm9yZUlsbGVnYWxzO1xuICAgICAgbGFuZ3VhZ2VOYW1lID0gb3B0aW9uc09yQ29kZS5sYW5ndWFnZTtcbiAgICAgIC8vIGNvbnRpbnVhdGlvbiBub3Qgc3VwcG9ydGVkIGF0IGFsbCB2aWEgdGhlIG5ldyBBUElcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZmluZWRcbiAgICAgIGNvbnRpbnVhdGlvbiA9IHVuZGVmaW5lZDtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gb2xkIEFQSVxuICAgICAgZGVwcmVjYXRlZChcIjEwLjcuMFwiLCBcImhpZ2hsaWdodChsYW5nLCBjb2RlLCAuLi5hcmdzKSBoYXMgYmVlbiBkZXByZWNhdGVkLlwiKTtcbiAgICAgIGRlcHJlY2F0ZWQoXCIxMC43LjBcIiwgXCJQbGVhc2UgdXNlIGhpZ2hsaWdodChjb2RlLCBvcHRpb25zKSBpbnN0ZWFkLlxcbmh0dHBzOi8vZ2l0aHViLmNvbS9oaWdobGlnaHRqcy9oaWdobGlnaHQuanMvaXNzdWVzLzIyNzdcIik7XG4gICAgICBsYW5ndWFnZU5hbWUgPSBjb2RlT3JsYW5ndWFnZU5hbWU7XG4gICAgICBjb2RlID0gb3B0aW9uc09yQ29kZTtcbiAgICB9XG5cbiAgICAvKiogQHR5cGUge0JlZm9yZUhpZ2hsaWdodENvbnRleHR9ICovXG4gICAgY29uc3QgY29udGV4dCA9IHtcbiAgICAgIGNvZGUsXG4gICAgICBsYW5ndWFnZTogbGFuZ3VhZ2VOYW1lXG4gICAgfTtcbiAgICAvLyB0aGUgcGx1Z2luIGNhbiBjaGFuZ2UgdGhlIGRlc2lyZWQgbGFuZ3VhZ2Ugb3IgdGhlIGNvZGUgdG8gYmUgaGlnaGxpZ2h0ZWRcbiAgICAvLyBqdXN0IGJlIGNoYW5naW5nIHRoZSBvYmplY3QgaXQgd2FzIHBhc3NlZFxuICAgIGZpcmUoXCJiZWZvcmU6aGlnaGxpZ2h0XCIsIGNvbnRleHQpO1xuXG4gICAgLy8gYSBiZWZvcmUgcGx1Z2luIGNhbiB1c3VycCB0aGUgcmVzdWx0IGNvbXBsZXRlbHkgYnkgcHJvdmlkaW5nIGl0J3Mgb3duXG4gICAgLy8gaW4gd2hpY2ggY2FzZSB3ZSBkb24ndCBldmVuIG5lZWQgdG8gY2FsbCBoaWdobGlnaHRcbiAgICBjb25zdCByZXN1bHQgPSBjb250ZXh0LnJlc3VsdFxuICAgICAgPyBjb250ZXh0LnJlc3VsdFxuICAgICAgOiBfaGlnaGxpZ2h0KGNvbnRleHQubGFuZ3VhZ2UsIGNvbnRleHQuY29kZSwgaWdub3JlSWxsZWdhbHMsIGNvbnRpbnVhdGlvbik7XG5cbiAgICByZXN1bHQuY29kZSA9IGNvbnRleHQuY29kZTtcbiAgICAvLyB0aGUgcGx1Z2luIGNhbiBjaGFuZ2UgYW55dGhpbmcgaW4gcmVzdWx0IHRvIHN1aXRlIGl0XG4gICAgZmlyZShcImFmdGVyOmhpZ2hsaWdodFwiLCByZXN1bHQpO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBwcml2YXRlIGhpZ2hsaWdodCB0aGF0J3MgdXNlZCBpbnRlcm5hbGx5IGFuZCBkb2VzIG5vdCBmaXJlIGNhbGxiYWNrc1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbGFuZ3VhZ2VOYW1lIC0gdGhlIGxhbmd1YWdlIHRvIHVzZSBmb3IgaGlnaGxpZ2h0aW5nXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjb2RlVG9IaWdobGlnaHQgLSB0aGUgY29kZSB0byBoaWdobGlnaHRcbiAgICogQHBhcmFtIHtib29sZWFuP30gW2lnbm9yZUlsbGVnYWxzXSAtIHdoZXRoZXIgdG8gaWdub3JlIGlsbGVnYWwgbWF0Y2hlcywgZGVmYXVsdCBpcyB0byBiYWlsXG4gICAqIEBwYXJhbSB7Q29tcGlsZWRNb2RlP30gW2NvbnRpbnVhdGlvbl0gLSBjdXJyZW50IGNvbnRpbnVhdGlvbiBtb2RlLCBpZiBhbnlcbiAgICogQHJldHVybnMge0hpZ2hsaWdodFJlc3VsdH0gLSByZXN1bHQgb2YgdGhlIGhpZ2hsaWdodCBvcGVyYXRpb25cbiAgKi9cbiAgZnVuY3Rpb24gX2hpZ2hsaWdodChsYW5ndWFnZU5hbWUsIGNvZGVUb0hpZ2hsaWdodCwgaWdub3JlSWxsZWdhbHMsIGNvbnRpbnVhdGlvbikge1xuICAgIC8qKlxuICAgICAqIFJldHVybiBrZXl3b3JkIGRhdGEgaWYgYSBtYXRjaCBpcyBhIGtleXdvcmRcbiAgICAgKiBAcGFyYW0ge0NvbXBpbGVkTW9kZX0gbW9kZSAtIGN1cnJlbnQgbW9kZVxuICAgICAqIEBwYXJhbSB7UmVnRXhwTWF0Y2hBcnJheX0gbWF0Y2ggLSByZWdleHAgbWF0Y2ggZGF0YVxuICAgICAqIEByZXR1cm5zIHtLZXl3b3JkRGF0YSB8IGZhbHNlfVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGtleXdvcmREYXRhKG1vZGUsIG1hdGNoKSB7XG4gICAgICBjb25zdCBtYXRjaFRleHQgPSBsYW5ndWFnZS5jYXNlX2luc2Vuc2l0aXZlID8gbWF0Y2hbMF0udG9Mb3dlckNhc2UoKSA6IG1hdGNoWzBdO1xuICAgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2RlLmtleXdvcmRzLCBtYXRjaFRleHQpICYmIG1vZGUua2V5d29yZHNbbWF0Y2hUZXh0XTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwcm9jZXNzS2V5d29yZHMoKSB7XG4gICAgICBpZiAoIXRvcC5rZXl3b3Jkcykge1xuICAgICAgICBlbWl0dGVyLmFkZFRleHQobW9kZUJ1ZmZlcik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgbGV0IGxhc3RJbmRleCA9IDA7XG4gICAgICB0b3Aua2V5d29yZFBhdHRlcm5SZS5sYXN0SW5kZXggPSAwO1xuICAgICAgbGV0IG1hdGNoID0gdG9wLmtleXdvcmRQYXR0ZXJuUmUuZXhlYyhtb2RlQnVmZmVyKTtcbiAgICAgIGxldCBidWYgPSBcIlwiO1xuXG4gICAgICB3aGlsZSAobWF0Y2gpIHtcbiAgICAgICAgYnVmICs9IG1vZGVCdWZmZXIuc3Vic3RyaW5nKGxhc3RJbmRleCwgbWF0Y2guaW5kZXgpO1xuICAgICAgICBjb25zdCBkYXRhID0ga2V5d29yZERhdGEodG9wLCBtYXRjaCk7XG4gICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgY29uc3QgW2tpbmQsIGtleXdvcmRSZWxldmFuY2VdID0gZGF0YTtcbiAgICAgICAgICBlbWl0dGVyLmFkZFRleHQoYnVmKTtcbiAgICAgICAgICBidWYgPSBcIlwiO1xuXG4gICAgICAgICAgcmVsZXZhbmNlICs9IGtleXdvcmRSZWxldmFuY2U7XG4gICAgICAgICAgaWYgKGtpbmQuc3RhcnRzV2l0aChcIl9cIikpIHtcbiAgICAgICAgICAgIC8vIF8gaW1wbGllZCBmb3IgcmVsZXZhbmNlIG9ubHksIGRvIG5vdCBoaWdobGlnaHRcbiAgICAgICAgICAgIC8vIGJ5IGFwcGx5aW5nIGEgY2xhc3MgbmFtZVxuICAgICAgICAgICAgYnVmICs9IG1hdGNoWzBdO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBjc3NDbGFzcyA9IGxhbmd1YWdlLmNsYXNzTmFtZUFsaWFzZXNba2luZF0gfHwga2luZDtcbiAgICAgICAgICAgIGVtaXR0ZXIuYWRkS2V5d29yZChtYXRjaFswXSwgY3NzQ2xhc3MpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBidWYgKz0gbWF0Y2hbMF07XG4gICAgICAgIH1cbiAgICAgICAgbGFzdEluZGV4ID0gdG9wLmtleXdvcmRQYXR0ZXJuUmUubGFzdEluZGV4O1xuICAgICAgICBtYXRjaCA9IHRvcC5rZXl3b3JkUGF0dGVyblJlLmV4ZWMobW9kZUJ1ZmZlcik7XG4gICAgICB9XG4gICAgICBidWYgKz0gbW9kZUJ1ZmZlci5zdWJzdHIobGFzdEluZGV4KTtcbiAgICAgIGVtaXR0ZXIuYWRkVGV4dChidWYpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHByb2Nlc3NTdWJMYW5ndWFnZSgpIHtcbiAgICAgIGlmIChtb2RlQnVmZmVyID09PSBcIlwiKSByZXR1cm47XG4gICAgICAvKiogQHR5cGUgSGlnaGxpZ2h0UmVzdWx0ICovXG4gICAgICBsZXQgcmVzdWx0ID0gbnVsbDtcblxuICAgICAgaWYgKHR5cGVvZiB0b3Auc3ViTGFuZ3VhZ2UgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGlmICghbGFuZ3VhZ2VzW3RvcC5zdWJMYW5ndWFnZV0pIHtcbiAgICAgICAgICBlbWl0dGVyLmFkZFRleHQobW9kZUJ1ZmZlcik7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdCA9IF9oaWdobGlnaHQodG9wLnN1Ykxhbmd1YWdlLCBtb2RlQnVmZmVyLCB0cnVlLCBjb250aW51YXRpb25zW3RvcC5zdWJMYW5ndWFnZV0pO1xuICAgICAgICBjb250aW51YXRpb25zW3RvcC5zdWJMYW5ndWFnZV0gPSAvKiogQHR5cGUge0NvbXBpbGVkTW9kZX0gKi8gKHJlc3VsdC50b3ApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0ID0gaGlnaGxpZ2h0QXV0byhtb2RlQnVmZmVyLCB0b3Auc3ViTGFuZ3VhZ2UubGVuZ3RoID8gdG9wLnN1Ykxhbmd1YWdlIDogbnVsbCk7XG4gICAgICB9XG5cbiAgICAgIC8vIENvdW50aW5nIGVtYmVkZGVkIGxhbmd1YWdlIHNjb3JlIHRvd2FyZHMgdGhlIGhvc3QgbGFuZ3VhZ2UgbWF5IGJlIGRpc2FibGVkXG4gICAgICAvLyB3aXRoIHplcm9pbmcgdGhlIGNvbnRhaW5pbmcgbW9kZSByZWxldmFuY2UuIFVzZSBjYXNlIGluIHBvaW50IGlzIE1hcmtkb3duIHRoYXRcbiAgICAgIC8vIGFsbG93cyBYTUwgZXZlcnl3aGVyZSBhbmQgbWFrZXMgZXZlcnkgWE1MIHNuaXBwZXQgdG8gaGF2ZSBhIG11Y2ggbGFyZ2VyIE1hcmtkb3duXG4gICAgICAvLyBzY29yZS5cbiAgICAgIGlmICh0b3AucmVsZXZhbmNlID4gMCkge1xuICAgICAgICByZWxldmFuY2UgKz0gcmVzdWx0LnJlbGV2YW5jZTtcbiAgICAgIH1cbiAgICAgIGVtaXR0ZXIuYWRkU3VibGFuZ3VhZ2UocmVzdWx0LmVtaXR0ZXIsIHJlc3VsdC5sYW5ndWFnZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcHJvY2Vzc0J1ZmZlcigpIHtcbiAgICAgIGlmICh0b3Auc3ViTGFuZ3VhZ2UgIT0gbnVsbCkge1xuICAgICAgICBwcm9jZXNzU3ViTGFuZ3VhZ2UoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb2Nlc3NLZXl3b3JkcygpO1xuICAgICAgfVxuICAgICAgbW9kZUJ1ZmZlciA9ICcnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7TW9kZX0gbW9kZSAtIG5ldyBtb2RlIHRvIHN0YXJ0XG4gICAgICovXG4gICAgZnVuY3Rpb24gc3RhcnROZXdNb2RlKG1vZGUpIHtcbiAgICAgIGlmIChtb2RlLmNsYXNzTmFtZSkge1xuICAgICAgICBlbWl0dGVyLm9wZW5Ob2RlKGxhbmd1YWdlLmNsYXNzTmFtZUFsaWFzZXNbbW9kZS5jbGFzc05hbWVdIHx8IG1vZGUuY2xhc3NOYW1lKTtcbiAgICAgIH1cbiAgICAgIHRvcCA9IE9iamVjdC5jcmVhdGUobW9kZSwgeyBwYXJlbnQ6IHsgdmFsdWU6IHRvcCB9IH0pO1xuICAgICAgcmV0dXJuIHRvcDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge0NvbXBpbGVkTW9kZSB9IG1vZGUgLSB0aGUgbW9kZSB0byBwb3RlbnRpYWxseSBlbmRcbiAgICAgKiBAcGFyYW0ge1JlZ0V4cE1hdGNoQXJyYXl9IG1hdGNoIC0gdGhlIGxhdGVzdCBtYXRjaFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtYXRjaFBsdXNSZW1haW5kZXIgLSBtYXRjaCBwbHVzIHJlbWFpbmRlciBvZiBjb250ZW50XG4gICAgICogQHJldHVybnMge0NvbXBpbGVkTW9kZSB8IHZvaWR9IC0gdGhlIG5leHQgbW9kZSwgb3IgaWYgdm9pZCBjb250aW51ZSBvbiBpbiBjdXJyZW50IG1vZGVcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBlbmRPZk1vZGUobW9kZSwgbWF0Y2gsIG1hdGNoUGx1c1JlbWFpbmRlcikge1xuICAgICAgbGV0IG1hdGNoZWQgPSBzdGFydHNXaXRoKG1vZGUuZW5kUmUsIG1hdGNoUGx1c1JlbWFpbmRlcik7XG5cbiAgICAgIGlmIChtYXRjaGVkKSB7XG4gICAgICAgIGlmIChtb2RlW1wib246ZW5kXCJdKSB7XG4gICAgICAgICAgY29uc3QgcmVzcCA9IG5ldyBSZXNwb25zZShtb2RlKTtcbiAgICAgICAgICBtb2RlW1wib246ZW5kXCJdKG1hdGNoLCByZXNwKTtcbiAgICAgICAgICBpZiAocmVzcC5pc01hdGNoSWdub3JlZCkgbWF0Y2hlZCA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1hdGNoZWQpIHtcbiAgICAgICAgICB3aGlsZSAobW9kZS5lbmRzUGFyZW50ICYmIG1vZGUucGFyZW50KSB7XG4gICAgICAgICAgICBtb2RlID0gbW9kZS5wYXJlbnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBtb2RlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyBldmVuIGlmIG9uOmVuZCBmaXJlcyBhbiBgaWdub3JlYCBpdCdzIHN0aWxsIHBvc3NpYmxlXG4gICAgICAvLyB0aGF0IHdlIG1pZ2h0IHRyaWdnZXIgdGhlIGVuZCBub2RlIGJlY2F1c2Ugb2YgYSBwYXJlbnQgbW9kZVxuICAgICAgaWYgKG1vZGUuZW5kc1dpdGhQYXJlbnQpIHtcbiAgICAgICAgcmV0dXJuIGVuZE9mTW9kZShtb2RlLnBhcmVudCwgbWF0Y2gsIG1hdGNoUGx1c1JlbWFpbmRlcik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlIG1hdGNoaW5nIGJ1dCB0aGVuIGlnbm9yaW5nIGEgc2VxdWVuY2Ugb2YgdGV4dFxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGxleGVtZSAtIHN0cmluZyBjb250YWluaW5nIGZ1bGwgbWF0Y2ggdGV4dFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGRvSWdub3JlKGxleGVtZSkge1xuICAgICAgaWYgKHRvcC5tYXRjaGVyLnJlZ2V4SW5kZXggPT09IDApIHtcbiAgICAgICAgLy8gbm8gbW9yZSByZWdleHMgdG8gcG90ZW50aWFsbHkgbWF0Y2ggaGVyZSwgc28gd2UgbW92ZSB0aGUgY3Vyc29yIGZvcndhcmQgb25lXG4gICAgICAgIC8vIHNwYWNlXG4gICAgICAgIG1vZGVCdWZmZXIgKz0gbGV4ZW1lWzBdO1xuICAgICAgICByZXR1cm4gMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIG5vIG5lZWQgdG8gbW92ZSB0aGUgY3Vyc29yLCB3ZSBzdGlsbCBoYXZlIGFkZGl0aW9uYWwgcmVnZXhlcyB0byB0cnkgYW5kXG4gICAgICAgIC8vIG1hdGNoIGF0IHRoaXMgdmVyeSBzcG90XG4gICAgICAgIHJlc3VtZVNjYW5BdFNhbWVQb3NpdGlvbiA9IHRydWU7XG4gICAgICAgIHJldHVybiAwO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhhbmRsZSB0aGUgc3RhcnQgb2YgYSBuZXcgcG90ZW50aWFsIG1vZGUgbWF0Y2hcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RW5oYW5jZWRNYXRjaH0gbWF0Y2ggLSB0aGUgY3VycmVudCBtYXRjaFxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9IGhvdyBmYXIgdG8gYWR2YW5jZSB0aGUgcGFyc2UgY3Vyc29yXG4gICAgICovXG4gICAgZnVuY3Rpb24gZG9CZWdpbk1hdGNoKG1hdGNoKSB7XG4gICAgICBjb25zdCBsZXhlbWUgPSBtYXRjaFswXTtcbiAgICAgIGNvbnN0IG5ld01vZGUgPSBtYXRjaC5ydWxlO1xuXG4gICAgICBjb25zdCByZXNwID0gbmV3IFJlc3BvbnNlKG5ld01vZGUpO1xuICAgICAgLy8gZmlyc3QgaW50ZXJuYWwgYmVmb3JlIGNhbGxiYWNrcywgdGhlbiB0aGUgcHVibGljIG9uZXNcbiAgICAgIGNvbnN0IGJlZm9yZUNhbGxiYWNrcyA9IFtuZXdNb2RlLl9fYmVmb3JlQmVnaW4sIG5ld01vZGVbXCJvbjpiZWdpblwiXV07XG4gICAgICBmb3IgKGNvbnN0IGNiIG9mIGJlZm9yZUNhbGxiYWNrcykge1xuICAgICAgICBpZiAoIWNiKSBjb250aW51ZTtcbiAgICAgICAgY2IobWF0Y2gsIHJlc3ApO1xuICAgICAgICBpZiAocmVzcC5pc01hdGNoSWdub3JlZCkgcmV0dXJuIGRvSWdub3JlKGxleGVtZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZXdNb2RlICYmIG5ld01vZGUuZW5kU2FtZUFzQmVnaW4pIHtcbiAgICAgICAgbmV3TW9kZS5lbmRSZSA9IGVzY2FwZShsZXhlbWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmV3TW9kZS5za2lwKSB7XG4gICAgICAgIG1vZGVCdWZmZXIgKz0gbGV4ZW1lO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKG5ld01vZGUuZXhjbHVkZUJlZ2luKSB7XG4gICAgICAgICAgbW9kZUJ1ZmZlciArPSBsZXhlbWU7XG4gICAgICAgIH1cbiAgICAgICAgcHJvY2Vzc0J1ZmZlcigpO1xuICAgICAgICBpZiAoIW5ld01vZGUucmV0dXJuQmVnaW4gJiYgIW5ld01vZGUuZXhjbHVkZUJlZ2luKSB7XG4gICAgICAgICAgbW9kZUJ1ZmZlciA9IGxleGVtZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgc3RhcnROZXdNb2RlKG5ld01vZGUpO1xuICAgICAgLy8gaWYgKG1vZGVbXCJhZnRlcjpiZWdpblwiXSkge1xuICAgICAgLy8gICBsZXQgcmVzcCA9IG5ldyBSZXNwb25zZShtb2RlKTtcbiAgICAgIC8vICAgbW9kZVtcImFmdGVyOmJlZ2luXCJdKG1hdGNoLCByZXNwKTtcbiAgICAgIC8vIH1cbiAgICAgIHJldHVybiBuZXdNb2RlLnJldHVybkJlZ2luID8gMCA6IGxleGVtZS5sZW5ndGg7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlIHRoZSBwb3RlbnRpYWwgZW5kIG9mIG1vZGVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7UmVnRXhwTWF0Y2hBcnJheX0gbWF0Y2ggLSB0aGUgY3VycmVudCBtYXRjaFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGRvRW5kTWF0Y2gobWF0Y2gpIHtcbiAgICAgIGNvbnN0IGxleGVtZSA9IG1hdGNoWzBdO1xuICAgICAgY29uc3QgbWF0Y2hQbHVzUmVtYWluZGVyID0gY29kZVRvSGlnaGxpZ2h0LnN1YnN0cihtYXRjaC5pbmRleCk7XG5cbiAgICAgIGNvbnN0IGVuZE1vZGUgPSBlbmRPZk1vZGUodG9wLCBtYXRjaCwgbWF0Y2hQbHVzUmVtYWluZGVyKTtcbiAgICAgIGlmICghZW5kTW9kZSkgeyByZXR1cm4gTk9fTUFUQ0g7IH1cblxuICAgICAgY29uc3Qgb3JpZ2luID0gdG9wO1xuICAgICAgaWYgKG9yaWdpbi5za2lwKSB7XG4gICAgICAgIG1vZGVCdWZmZXIgKz0gbGV4ZW1lO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCEob3JpZ2luLnJldHVybkVuZCB8fCBvcmlnaW4uZXhjbHVkZUVuZCkpIHtcbiAgICAgICAgICBtb2RlQnVmZmVyICs9IGxleGVtZTtcbiAgICAgICAgfVxuICAgICAgICBwcm9jZXNzQnVmZmVyKCk7XG4gICAgICAgIGlmIChvcmlnaW4uZXhjbHVkZUVuZCkge1xuICAgICAgICAgIG1vZGVCdWZmZXIgPSBsZXhlbWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGRvIHtcbiAgICAgICAgaWYgKHRvcC5jbGFzc05hbWUpIHtcbiAgICAgICAgICBlbWl0dGVyLmNsb3NlTm9kZSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdG9wLnNraXAgJiYgIXRvcC5zdWJMYW5ndWFnZSkge1xuICAgICAgICAgIHJlbGV2YW5jZSArPSB0b3AucmVsZXZhbmNlO1xuICAgICAgICB9XG4gICAgICAgIHRvcCA9IHRvcC5wYXJlbnQ7XG4gICAgICB9IHdoaWxlICh0b3AgIT09IGVuZE1vZGUucGFyZW50KTtcbiAgICAgIGlmIChlbmRNb2RlLnN0YXJ0cykge1xuICAgICAgICBpZiAoZW5kTW9kZS5lbmRTYW1lQXNCZWdpbikge1xuICAgICAgICAgIGVuZE1vZGUuc3RhcnRzLmVuZFJlID0gZW5kTW9kZS5lbmRSZTtcbiAgICAgICAgfVxuICAgICAgICBzdGFydE5ld01vZGUoZW5kTW9kZS5zdGFydHMpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG9yaWdpbi5yZXR1cm5FbmQgPyAwIDogbGV4ZW1lLmxlbmd0aDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwcm9jZXNzQ29udGludWF0aW9ucygpIHtcbiAgICAgIGNvbnN0IGxpc3QgPSBbXTtcbiAgICAgIGZvciAobGV0IGN1cnJlbnQgPSB0b3A7IGN1cnJlbnQgIT09IGxhbmd1YWdlOyBjdXJyZW50ID0gY3VycmVudC5wYXJlbnQpIHtcbiAgICAgICAgaWYgKGN1cnJlbnQuY2xhc3NOYW1lKSB7XG4gICAgICAgICAgbGlzdC51bnNoaWZ0KGN1cnJlbnQuY2xhc3NOYW1lKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5mb3JFYWNoKGl0ZW0gPT4gZW1pdHRlci5vcGVuTm9kZShpdGVtKSk7XG4gICAgfVxuXG4gICAgLyoqIEB0eXBlIHt7dHlwZT86IE1hdGNoVHlwZSwgaW5kZXg/OiBudW1iZXIsIHJ1bGU/OiBNb2RlfX19ICovXG4gICAgbGV0IGxhc3RNYXRjaCA9IHt9O1xuXG4gICAgLyoqXG4gICAgICogIFByb2Nlc3MgYW4gaW5kaXZpZHVhbCBtYXRjaFxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRleHRCZWZvcmVNYXRjaCAtIHRleHQgcHJlY2VlZGluZyB0aGUgbWF0Y2ggKHNpbmNlIHRoZSBsYXN0IG1hdGNoKVxuICAgICAqIEBwYXJhbSB7RW5oYW5jZWRNYXRjaH0gW21hdGNoXSAtIHRoZSBtYXRjaCBpdHNlbGZcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBwcm9jZXNzTGV4ZW1lKHRleHRCZWZvcmVNYXRjaCwgbWF0Y2gpIHtcbiAgICAgIGNvbnN0IGxleGVtZSA9IG1hdGNoICYmIG1hdGNoWzBdO1xuXG4gICAgICAvLyBhZGQgbm9uLW1hdGNoZWQgdGV4dCB0byB0aGUgY3VycmVudCBtb2RlIGJ1ZmZlclxuICAgICAgbW9kZUJ1ZmZlciArPSB0ZXh0QmVmb3JlTWF0Y2g7XG5cbiAgICAgIGlmIChsZXhlbWUgPT0gbnVsbCkge1xuICAgICAgICBwcm9jZXNzQnVmZmVyKCk7XG4gICAgICAgIHJldHVybiAwO1xuICAgICAgfVxuXG4gICAgICAvLyB3ZSd2ZSBmb3VuZCBhIDAgd2lkdGggbWF0Y2ggYW5kIHdlJ3JlIHN0dWNrLCBzbyB3ZSBuZWVkIHRvIGFkdmFuY2VcbiAgICAgIC8vIHRoaXMgaGFwcGVucyB3aGVuIHdlIGhhdmUgYmFkbHkgYmVoYXZlZCBydWxlcyB0aGF0IGhhdmUgb3B0aW9uYWwgbWF0Y2hlcnMgdG8gdGhlIGRlZ3JlZSB0aGF0XG4gICAgICAvLyBzb21ldGltZXMgdGhleSBjYW4gZW5kIHVwIG1hdGNoaW5nIG5vdGhpbmcgYXQgYWxsXG4gICAgICAvLyBSZWY6IGh0dHBzOi8vZ2l0aHViLmNvbS9oaWdobGlnaHRqcy9oaWdobGlnaHQuanMvaXNzdWVzLzIxNDBcbiAgICAgIGlmIChsYXN0TWF0Y2gudHlwZSA9PT0gXCJiZWdpblwiICYmIG1hdGNoLnR5cGUgPT09IFwiZW5kXCIgJiYgbGFzdE1hdGNoLmluZGV4ID09PSBtYXRjaC5pbmRleCAmJiBsZXhlbWUgPT09IFwiXCIpIHtcbiAgICAgICAgLy8gc3BpdCB0aGUgXCJza2lwcGVkXCIgY2hhcmFjdGVyIHRoYXQgb3VyIHJlZ2V4IGNob2tlZCBvbiBiYWNrIGludG8gdGhlIG91dHB1dCBzZXF1ZW5jZVxuICAgICAgICBtb2RlQnVmZmVyICs9IGNvZGVUb0hpZ2hsaWdodC5zbGljZShtYXRjaC5pbmRleCwgbWF0Y2guaW5kZXggKyAxKTtcbiAgICAgICAgaWYgKCFTQUZFX01PREUpIHtcbiAgICAgICAgICAvKiogQHR5cGUge0Fubm90YXRlZEVycm9yfSAqL1xuICAgICAgICAgIGNvbnN0IGVyciA9IG5ldyBFcnJvcignMCB3aWR0aCBtYXRjaCByZWdleCcpO1xuICAgICAgICAgIGVyci5sYW5ndWFnZU5hbWUgPSBsYW5ndWFnZU5hbWU7XG4gICAgICAgICAgZXJyLmJhZFJ1bGUgPSBsYXN0TWF0Y2gucnVsZTtcbiAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDE7XG4gICAgICB9XG4gICAgICBsYXN0TWF0Y2ggPSBtYXRjaDtcblxuICAgICAgaWYgKG1hdGNoLnR5cGUgPT09IFwiYmVnaW5cIikge1xuICAgICAgICByZXR1cm4gZG9CZWdpbk1hdGNoKG1hdGNoKTtcbiAgICAgIH0gZWxzZSBpZiAobWF0Y2gudHlwZSA9PT0gXCJpbGxlZ2FsXCIgJiYgIWlnbm9yZUlsbGVnYWxzKSB7XG4gICAgICAgIC8vIGlsbGVnYWwgbWF0Y2gsIHdlIGRvIG5vdCBjb250aW51ZSBwcm9jZXNzaW5nXG4gICAgICAgIC8qKiBAdHlwZSB7QW5ub3RhdGVkRXJyb3J9ICovXG4gICAgICAgIGNvbnN0IGVyciA9IG5ldyBFcnJvcignSWxsZWdhbCBsZXhlbWUgXCInICsgbGV4ZW1lICsgJ1wiIGZvciBtb2RlIFwiJyArICh0b3AuY2xhc3NOYW1lIHx8ICc8dW5uYW1lZD4nKSArICdcIicpO1xuICAgICAgICBlcnIubW9kZSA9IHRvcDtcbiAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgfSBlbHNlIGlmIChtYXRjaC50eXBlID09PSBcImVuZFwiKSB7XG4gICAgICAgIGNvbnN0IHByb2Nlc3NlZCA9IGRvRW5kTWF0Y2gobWF0Y2gpO1xuICAgICAgICBpZiAocHJvY2Vzc2VkICE9PSBOT19NQVRDSCkge1xuICAgICAgICAgIHJldHVybiBwcm9jZXNzZWQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gZWRnZSBjYXNlIGZvciB3aGVuIGlsbGVnYWwgbWF0Y2hlcyAkIChlbmQgb2YgbGluZSkgd2hpY2ggaXMgdGVjaG5pY2FsbHlcbiAgICAgIC8vIGEgMCB3aWR0aCBtYXRjaCBidXQgbm90IGEgYmVnaW4vZW5kIG1hdGNoIHNvIGl0J3Mgbm90IGNhdWdodCBieSB0aGVcbiAgICAgIC8vIGZpcnN0IGhhbmRsZXIgKHdoZW4gaWdub3JlSWxsZWdhbHMgaXMgdHJ1ZSlcbiAgICAgIGlmIChtYXRjaC50eXBlID09PSBcImlsbGVnYWxcIiAmJiBsZXhlbWUgPT09IFwiXCIpIHtcbiAgICAgICAgLy8gYWR2YW5jZSBzbyB3ZSBhcmVuJ3Qgc3R1Y2sgaW4gYW4gaW5maW5pdGUgbG9vcFxuICAgICAgICByZXR1cm4gMTtcbiAgICAgIH1cblxuICAgICAgLy8gaW5maW5pdGUgbG9vcHMgYXJlIEJBRCwgdGhpcyBpcyBhIGxhc3QgZGl0Y2ggY2F0Y2ggYWxsLiBpZiB3ZSBoYXZlIGFcbiAgICAgIC8vIGRlY2VudCBudW1iZXIgb2YgaXRlcmF0aW9ucyB5ZXQgb3VyIGluZGV4IChjdXJzb3IgcG9zaXRpb24gaW4gb3VyXG4gICAgICAvLyBwYXJzaW5nKSBzdGlsbCAzeCBiZWhpbmQgb3VyIGluZGV4IHRoZW4gc29tZXRoaW5nIGlzIHZlcnkgd3JvbmdcbiAgICAgIC8vIHNvIHdlIGJhaWxcbiAgICAgIGlmIChpdGVyYXRpb25zID4gMTAwMDAwICYmIGl0ZXJhdGlvbnMgPiBtYXRjaC5pbmRleCAqIDMpIHtcbiAgICAgICAgY29uc3QgZXJyID0gbmV3IEVycm9yKCdwb3RlbnRpYWwgaW5maW5pdGUgbG9vcCwgd2F5IG1vcmUgaXRlcmF0aW9ucyB0aGFuIG1hdGNoZXMnKTtcbiAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgfVxuXG4gICAgICAvKlxuICAgICAgV2h5IG1pZ2h0IGJlIGZpbmQgb3Vyc2VsdmVzIGhlcmU/ICBPbmx5IG9uZSBvY2Nhc2lvbiBub3cuICBBbiBlbmQgbWF0Y2ggdGhhdCB3YXNcbiAgICAgIHRyaWdnZXJlZCBidXQgY291bGQgbm90IGJlIGNvbXBsZXRlZC4gIFdoZW4gbWlnaHQgdGhpcyBoYXBwZW4/ICBXaGVuIGFuIGBlbmRTYW1lYXNCZWdpbmBcbiAgICAgIHJ1bGUgc2V0cyB0aGUgZW5kIHJ1bGUgdG8gYSBzcGVjaWZpYyBtYXRjaC4gIFNpbmNlIHRoZSBvdmVyYWxsIG1vZGUgdGVybWluYXRpb24gcnVsZSB0aGF0J3NcbiAgICAgIGJlaW5nIHVzZWQgdG8gc2NhbiB0aGUgdGV4dCBpc24ndCByZWNvbXBpbGVkIHRoYXQgbWVhbnMgdGhhdCBhbnkgbWF0Y2ggdGhhdCBMT09LUyBsaWtlXG4gICAgICB0aGUgZW5kIChidXQgaXMgbm90LCBiZWNhdXNlIGl0IGlzIG5vdCBhbiBleGFjdCBtYXRjaCB0byB0aGUgYmVnaW5uaW5nKSB3aWxsXG4gICAgICBlbmQgdXAgaGVyZS4gIEEgZGVmaW5pdGUgZW5kIG1hdGNoLCBidXQgd2hlbiBgZG9FbmRNYXRjaGAgdHJpZXMgdG8gXCJyZWFwcGx5XCJcbiAgICAgIHRoZSBlbmQgcnVsZSBhbmQgZmFpbHMgdG8gbWF0Y2gsIHdlIHdpbmQgdXAgaGVyZSwgYW5kIGp1c3Qgc2lsZW50bHkgaWdub3JlIHRoZSBlbmQuXG5cbiAgICAgIFRoaXMgY2F1c2VzIG5vIHJlYWwgaGFybSBvdGhlciB0aGFuIHN0b3BwaW5nIGEgZmV3IHRpbWVzIHRvbyBtYW55LlxuICAgICAgKi9cblxuICAgICAgbW9kZUJ1ZmZlciArPSBsZXhlbWU7XG4gICAgICByZXR1cm4gbGV4ZW1lLmxlbmd0aDtcbiAgICB9XG5cbiAgICBjb25zdCBsYW5ndWFnZSA9IGdldExhbmd1YWdlKGxhbmd1YWdlTmFtZSk7XG4gICAgaWYgKCFsYW5ndWFnZSkge1xuICAgICAgZXJyb3IoTEFOR1VBR0VfTk9UX0ZPVU5ELnJlcGxhY2UoXCJ7fVwiLCBsYW5ndWFnZU5hbWUpKTtcbiAgICAgIHRocm93IG5ldyBFcnJvcignVW5rbm93biBsYW5ndWFnZTogXCInICsgbGFuZ3VhZ2VOYW1lICsgJ1wiJyk7XG4gICAgfVxuXG4gICAgY29uc3QgbWQgPSBjb21waWxlTGFuZ3VhZ2UobGFuZ3VhZ2UsIHsgcGx1Z2lucyB9KTtcbiAgICBsZXQgcmVzdWx0ID0gJyc7XG4gICAgLyoqIEB0eXBlIHtDb21waWxlZE1vZGV9ICovXG4gICAgbGV0IHRvcCA9IGNvbnRpbnVhdGlvbiB8fCBtZDtcbiAgICAvKiogQHR5cGUgUmVjb3JkPHN0cmluZyxDb21waWxlZE1vZGU+ICovXG4gICAgY29uc3QgY29udGludWF0aW9ucyA9IHt9OyAvLyBrZWVwIGNvbnRpbnVhdGlvbnMgZm9yIHN1Yi1sYW5ndWFnZXNcbiAgICBjb25zdCBlbWl0dGVyID0gbmV3IG9wdGlvbnMuX19lbWl0dGVyKG9wdGlvbnMpO1xuICAgIHByb2Nlc3NDb250aW51YXRpb25zKCk7XG4gICAgbGV0IG1vZGVCdWZmZXIgPSAnJztcbiAgICBsZXQgcmVsZXZhbmNlID0gMDtcbiAgICBsZXQgaW5kZXggPSAwO1xuICAgIGxldCBpdGVyYXRpb25zID0gMDtcbiAgICBsZXQgcmVzdW1lU2NhbkF0U2FtZVBvc2l0aW9uID0gZmFsc2U7XG5cbiAgICB0cnkge1xuICAgICAgdG9wLm1hdGNoZXIuY29uc2lkZXJBbGwoKTtcblxuICAgICAgZm9yICg7Oykge1xuICAgICAgICBpdGVyYXRpb25zKys7XG4gICAgICAgIGlmIChyZXN1bWVTY2FuQXRTYW1lUG9zaXRpb24pIHtcbiAgICAgICAgICAvLyBvbmx5IHJlZ2V4ZXMgbm90IG1hdGNoZWQgcHJldmlvdXNseSB3aWxsIG5vdyBiZVxuICAgICAgICAgIC8vIGNvbnNpZGVyZWQgZm9yIGEgcG90ZW50aWFsIG1hdGNoXG4gICAgICAgICAgcmVzdW1lU2NhbkF0U2FtZVBvc2l0aW9uID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdG9wLm1hdGNoZXIuY29uc2lkZXJBbGwoKTtcbiAgICAgICAgfVxuICAgICAgICB0b3AubWF0Y2hlci5sYXN0SW5kZXggPSBpbmRleDtcblxuICAgICAgICBjb25zdCBtYXRjaCA9IHRvcC5tYXRjaGVyLmV4ZWMoY29kZVRvSGlnaGxpZ2h0KTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJtYXRjaFwiLCBtYXRjaFswXSwgbWF0Y2gucnVsZSAmJiBtYXRjaC5ydWxlLmJlZ2luKVxuXG4gICAgICAgIGlmICghbWF0Y2gpIGJyZWFrO1xuXG4gICAgICAgIGNvbnN0IGJlZm9yZU1hdGNoID0gY29kZVRvSGlnaGxpZ2h0LnN1YnN0cmluZyhpbmRleCwgbWF0Y2guaW5kZXgpO1xuICAgICAgICBjb25zdCBwcm9jZXNzZWRDb3VudCA9IHByb2Nlc3NMZXhlbWUoYmVmb3JlTWF0Y2gsIG1hdGNoKTtcbiAgICAgICAgaW5kZXggPSBtYXRjaC5pbmRleCArIHByb2Nlc3NlZENvdW50O1xuICAgICAgfVxuICAgICAgcHJvY2Vzc0xleGVtZShjb2RlVG9IaWdobGlnaHQuc3Vic3RyKGluZGV4KSk7XG4gICAgICBlbWl0dGVyLmNsb3NlQWxsTm9kZXMoKTtcbiAgICAgIGVtaXR0ZXIuZmluYWxpemUoKTtcbiAgICAgIHJlc3VsdCA9IGVtaXR0ZXIudG9IVE1MKCk7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC8vIGF2b2lkIHBvc3NpYmxlIGJyZWFrYWdlIHdpdGggdjEwIGNsaWVudHMgZXhwZWN0aW5nXG4gICAgICAgIC8vIHRoaXMgdG8gYWx3YXlzIGJlIGFuIGludGVnZXJcbiAgICAgICAgcmVsZXZhbmNlOiBNYXRoLmZsb29yKHJlbGV2YW5jZSksXG4gICAgICAgIHZhbHVlOiByZXN1bHQsXG4gICAgICAgIGxhbmd1YWdlOiBsYW5ndWFnZU5hbWUsXG4gICAgICAgIGlsbGVnYWw6IGZhbHNlLFxuICAgICAgICBlbWl0dGVyOiBlbWl0dGVyLFxuICAgICAgICB0b3A6IHRvcFxuICAgICAgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGlmIChlcnIubWVzc2FnZSAmJiBlcnIubWVzc2FnZS5pbmNsdWRlcygnSWxsZWdhbCcpKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaWxsZWdhbDogdHJ1ZSxcbiAgICAgICAgICBpbGxlZ2FsQnk6IHtcbiAgICAgICAgICAgIG1zZzogZXJyLm1lc3NhZ2UsXG4gICAgICAgICAgICBjb250ZXh0OiBjb2RlVG9IaWdobGlnaHQuc2xpY2UoaW5kZXggLSAxMDAsIGluZGV4ICsgMTAwKSxcbiAgICAgICAgICAgIG1vZGU6IGVyci5tb2RlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBzb2ZhcjogcmVzdWx0LFxuICAgICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgICB2YWx1ZTogZXNjYXBlJDEoY29kZVRvSGlnaGxpZ2h0KSxcbiAgICAgICAgICBlbWl0dGVyOiBlbWl0dGVyXG4gICAgICAgIH07XG4gICAgICB9IGVsc2UgaWYgKFNBRkVfTU9ERSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGlsbGVnYWw6IGZhbHNlLFxuICAgICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgICB2YWx1ZTogZXNjYXBlJDEoY29kZVRvSGlnaGxpZ2h0KSxcbiAgICAgICAgICBlbWl0dGVyOiBlbWl0dGVyLFxuICAgICAgICAgIGxhbmd1YWdlOiBsYW5ndWFnZU5hbWUsXG4gICAgICAgICAgdG9wOiB0b3AsXG4gICAgICAgICAgZXJyb3JSYWlzZWQ6IGVyclxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiByZXR1cm5zIGEgdmFsaWQgaGlnaGxpZ2h0IHJlc3VsdCwgd2l0aG91dCBhY3R1YWxseSBkb2luZyBhbnkgYWN0dWFsIHdvcmssXG4gICAqIGF1dG8gaGlnaGxpZ2h0IHN0YXJ0cyB3aXRoIHRoaXMgYW5kIGl0J3MgcG9zc2libGUgZm9yIHNtYWxsIHNuaXBwZXRzIHRoYXRcbiAgICogYXV0by1kZXRlY3Rpb24gbWF5IG5vdCBmaW5kIGEgYmV0dGVyIG1hdGNoXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjb2RlXG4gICAqIEByZXR1cm5zIHtIaWdobGlnaHRSZXN1bHR9XG4gICAqL1xuICBmdW5jdGlvbiBqdXN0VGV4dEhpZ2hsaWdodFJlc3VsdChjb2RlKSB7XG4gICAgY29uc3QgcmVzdWx0ID0ge1xuICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgZW1pdHRlcjogbmV3IG9wdGlvbnMuX19lbWl0dGVyKG9wdGlvbnMpLFxuICAgICAgdmFsdWU6IGVzY2FwZSQxKGNvZGUpLFxuICAgICAgaWxsZWdhbDogZmFsc2UsXG4gICAgICB0b3A6IFBMQUlOVEVYVF9MQU5HVUFHRVxuICAgIH07XG4gICAgcmVzdWx0LmVtaXR0ZXIuYWRkVGV4dChjb2RlKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLyoqXG4gIEhpZ2hsaWdodGluZyB3aXRoIGxhbmd1YWdlIGRldGVjdGlvbi4gQWNjZXB0cyBhIHN0cmluZyB3aXRoIHRoZSBjb2RlIHRvXG4gIGhpZ2hsaWdodC4gUmV0dXJucyBhbiBvYmplY3Qgd2l0aCB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXM6XG5cbiAgLSBsYW5ndWFnZSAoZGV0ZWN0ZWQgbGFuZ3VhZ2UpXG4gIC0gcmVsZXZhbmNlIChpbnQpXG4gIC0gdmFsdWUgKGFuIEhUTUwgc3RyaW5nIHdpdGggaGlnaGxpZ2h0aW5nIG1hcmt1cClcbiAgLSBzZWNvbmRfYmVzdCAob2JqZWN0IHdpdGggdGhlIHNhbWUgc3RydWN0dXJlIGZvciBzZWNvbmQtYmVzdCBoZXVyaXN0aWNhbGx5XG4gICAgZGV0ZWN0ZWQgbGFuZ3VhZ2UsIG1heSBiZSBhYnNlbnQpXG5cbiAgICBAcGFyYW0ge3N0cmluZ30gY29kZVxuICAgIEBwYXJhbSB7QXJyYXk8c3RyaW5nPn0gW2xhbmd1YWdlU3Vic2V0XVxuICAgIEByZXR1cm5zIHtBdXRvSGlnaGxpZ2h0UmVzdWx0fVxuICAqL1xuICBmdW5jdGlvbiBoaWdobGlnaHRBdXRvKGNvZGUsIGxhbmd1YWdlU3Vic2V0KSB7XG4gICAgbGFuZ3VhZ2VTdWJzZXQgPSBsYW5ndWFnZVN1YnNldCB8fCBvcHRpb25zLmxhbmd1YWdlcyB8fCBPYmplY3Qua2V5cyhsYW5ndWFnZXMpO1xuICAgIGNvbnN0IHBsYWludGV4dCA9IGp1c3RUZXh0SGlnaGxpZ2h0UmVzdWx0KGNvZGUpO1xuXG4gICAgY29uc3QgcmVzdWx0cyA9IGxhbmd1YWdlU3Vic2V0LmZpbHRlcihnZXRMYW5ndWFnZSkuZmlsdGVyKGF1dG9EZXRlY3Rpb24pLm1hcChuYW1lID0+XG4gICAgICBfaGlnaGxpZ2h0KG5hbWUsIGNvZGUsIGZhbHNlKVxuICAgICk7XG4gICAgcmVzdWx0cy51bnNoaWZ0KHBsYWludGV4dCk7IC8vIHBsYWludGV4dCBpcyBhbHdheXMgYW4gb3B0aW9uXG5cbiAgICBjb25zdCBzb3J0ZWQgPSByZXN1bHRzLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgIC8vIHNvcnQgYmFzZSBvbiByZWxldmFuY2VcbiAgICAgIGlmIChhLnJlbGV2YW5jZSAhPT0gYi5yZWxldmFuY2UpIHJldHVybiBiLnJlbGV2YW5jZSAtIGEucmVsZXZhbmNlO1xuXG4gICAgICAvLyBhbHdheXMgYXdhcmQgdGhlIHRpZSB0byB0aGUgYmFzZSBsYW5ndWFnZVxuICAgICAgLy8gaWUgaWYgQysrIGFuZCBBcmR1aW5vIGFyZSB0aWVkLCBpdCdzIG1vcmUgbGlrZWx5IHRvIGJlIEMrK1xuICAgICAgaWYgKGEubGFuZ3VhZ2UgJiYgYi5sYW5ndWFnZSkge1xuICAgICAgICBpZiAoZ2V0TGFuZ3VhZ2UoYS5sYW5ndWFnZSkuc3VwZXJzZXRPZiA9PT0gYi5sYW5ndWFnZSkge1xuICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9IGVsc2UgaWYgKGdldExhbmd1YWdlKGIubGFuZ3VhZ2UpLnN1cGVyc2V0T2YgPT09IGEubGFuZ3VhZ2UpIHtcbiAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gb3RoZXJ3aXNlIHNheSB0aGV5IGFyZSBlcXVhbCwgd2hpY2ggaGFzIHRoZSBlZmZlY3Qgb2Ygc29ydGluZyBvblxuICAgICAgLy8gcmVsZXZhbmNlIHdoaWxlIHByZXNlcnZpbmcgdGhlIG9yaWdpbmFsIG9yZGVyaW5nIC0gd2hpY2ggaXMgaG93IHRpZXNcbiAgICAgIC8vIGhhdmUgaGlzdG9yaWNhbGx5IGJlZW4gc2V0dGxlZCwgaWUgdGhlIGxhbmd1YWdlIHRoYXQgY29tZXMgZmlyc3QgYWx3YXlzXG4gICAgICAvLyB3aW5zIGluIHRoZSBjYXNlIG9mIGEgdGllXG4gICAgICByZXR1cm4gMDtcbiAgICB9KTtcblxuICAgIGNvbnN0IFtiZXN0LCBzZWNvbmRCZXN0XSA9IHNvcnRlZDtcblxuICAgIC8qKiBAdHlwZSB7QXV0b0hpZ2hsaWdodFJlc3VsdH0gKi9cbiAgICBjb25zdCByZXN1bHQgPSBiZXN0O1xuICAgIHJlc3VsdC5zZWNvbmRfYmVzdCA9IHNlY29uZEJlc3Q7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLyoqXG4gIFBvc3QtcHJvY2Vzc2luZyBvZiB0aGUgaGlnaGxpZ2h0ZWQgbWFya3VwOlxuXG4gIC0gcmVwbGFjZSBUQUJzIHdpdGggc29tZXRoaW5nIG1vcmUgdXNlZnVsXG4gIC0gcmVwbGFjZSByZWFsIGxpbmUtYnJlYWtzIHdpdGggJzxicj4nIGZvciBub24tcHJlIGNvbnRhaW5lcnNcblxuICAgIEBwYXJhbSB7c3RyaW5nfSBodG1sXG4gICAgQHJldHVybnMge3N0cmluZ31cbiAgKi9cbiAgZnVuY3Rpb24gZml4TWFya3VwKGh0bWwpIHtcbiAgICBpZiAoIShvcHRpb25zLnRhYlJlcGxhY2UgfHwgb3B0aW9ucy51c2VCUikpIHtcbiAgICAgIHJldHVybiBodG1sO1xuICAgIH1cblxuICAgIHJldHVybiBodG1sLnJlcGxhY2UoZml4TWFya3VwUmUsIG1hdGNoID0+IHtcbiAgICAgIGlmIChtYXRjaCA9PT0gJ1xcbicpIHtcbiAgICAgICAgcmV0dXJuIG9wdGlvbnMudXNlQlIgPyAnPGJyPicgOiBtYXRjaDtcbiAgICAgIH0gZWxzZSBpZiAob3B0aW9ucy50YWJSZXBsYWNlKSB7XG4gICAgICAgIHJldHVybiBtYXRjaC5yZXBsYWNlKC9cXHQvZywgb3B0aW9ucy50YWJSZXBsYWNlKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBtYXRjaDtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBCdWlsZHMgbmV3IGNsYXNzIG5hbWUgZm9yIGJsb2NrIGdpdmVuIHRoZSBsYW5ndWFnZSBuYW1lXG4gICAqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtjdXJyZW50TGFuZ11cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtyZXN1bHRMYW5nXVxuICAgKi9cbiAgZnVuY3Rpb24gdXBkYXRlQ2xhc3NOYW1lKGVsZW1lbnQsIGN1cnJlbnRMYW5nLCByZXN1bHRMYW5nKSB7XG4gICAgY29uc3QgbGFuZ3VhZ2UgPSBjdXJyZW50TGFuZyA/IGFsaWFzZXNbY3VycmVudExhbmddIDogcmVzdWx0TGFuZztcblxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImhsanNcIik7XG4gICAgaWYgKGxhbmd1YWdlKSBlbGVtZW50LmNsYXNzTGlzdC5hZGQobGFuZ3VhZ2UpO1xuICB9XG5cbiAgLyoqIEB0eXBlIHtITEpTUGx1Z2lufSAqL1xuICBjb25zdCBiclBsdWdpbiA9IHtcbiAgICBcImJlZm9yZTpoaWdobGlnaHRFbGVtZW50XCI6ICh7IGVsIH0pID0+IHtcbiAgICAgIGlmIChvcHRpb25zLnVzZUJSKSB7XG4gICAgICAgIGVsLmlubmVySFRNTCA9IGVsLmlubmVySFRNTC5yZXBsYWNlKC9cXG4vZywgJycpLnJlcGxhY2UoLzxiclsgL10qPi9nLCAnXFxuJyk7XG4gICAgICB9XG4gICAgfSxcbiAgICBcImFmdGVyOmhpZ2hsaWdodEVsZW1lbnRcIjogKHsgcmVzdWx0IH0pID0+IHtcbiAgICAgIGlmIChvcHRpb25zLnVzZUJSKSB7XG4gICAgICAgIHJlc3VsdC52YWx1ZSA9IHJlc3VsdC52YWx1ZS5yZXBsYWNlKC9cXG4vZywgXCI8YnI+XCIpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBUQUJfUkVQTEFDRV9SRSA9IC9eKDxbXj5dKz58XFx0KSsvZ207XG4gIC8qKiBAdHlwZSB7SExKU1BsdWdpbn0gKi9cbiAgY29uc3QgdGFiUmVwbGFjZVBsdWdpbiA9IHtcbiAgICBcImFmdGVyOmhpZ2hsaWdodEVsZW1lbnRcIjogKHsgcmVzdWx0IH0pID0+IHtcbiAgICAgIGlmIChvcHRpb25zLnRhYlJlcGxhY2UpIHtcbiAgICAgICAgcmVzdWx0LnZhbHVlID0gcmVzdWx0LnZhbHVlLnJlcGxhY2UoVEFCX1JFUExBQ0VfUkUsIChtKSA9PlxuICAgICAgICAgIG0ucmVwbGFjZSgvXFx0L2csIG9wdGlvbnMudGFiUmVwbGFjZSlcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEFwcGxpZXMgaGlnaGxpZ2h0aW5nIHRvIGEgRE9NIG5vZGUgY29udGFpbmluZyBjb2RlLiBBY2NlcHRzIGEgRE9NIG5vZGUgYW5kXG4gICAqIHR3byBvcHRpb25hbCBwYXJhbWV0ZXJzIGZvciBmaXhNYXJrdXAuXG4gICAqXG4gICAqIEBwYXJhbSB7SGlnaGxpZ2h0ZWRIVE1MRWxlbWVudH0gZWxlbWVudCAtIHRoZSBIVE1MIGVsZW1lbnQgdG8gaGlnaGxpZ2h0XG4gICovXG4gIGZ1bmN0aW9uIGhpZ2hsaWdodEVsZW1lbnQoZWxlbWVudCkge1xuICAgIC8qKiBAdHlwZSBIVE1MRWxlbWVudCAqL1xuICAgIGxldCBub2RlID0gbnVsbDtcbiAgICBjb25zdCBsYW5ndWFnZSA9IGJsb2NrTGFuZ3VhZ2UoZWxlbWVudCk7XG5cbiAgICBpZiAoc2hvdWxkTm90SGlnaGxpZ2h0KGxhbmd1YWdlKSkgcmV0dXJuO1xuXG4gICAgLy8gc3VwcG9ydCBmb3IgdjEwIEFQSVxuICAgIGZpcmUoXCJiZWZvcmU6aGlnaGxpZ2h0RWxlbWVudFwiLFxuICAgICAgeyBlbDogZWxlbWVudCwgbGFuZ3VhZ2U6IGxhbmd1YWdlIH0pO1xuXG4gICAgbm9kZSA9IGVsZW1lbnQ7XG4gICAgY29uc3QgdGV4dCA9IG5vZGUudGV4dENvbnRlbnQ7XG4gICAgY29uc3QgcmVzdWx0ID0gbGFuZ3VhZ2UgPyBoaWdobGlnaHQodGV4dCwgeyBsYW5ndWFnZSwgaWdub3JlSWxsZWdhbHM6IHRydWUgfSkgOiBoaWdobGlnaHRBdXRvKHRleHQpO1xuXG4gICAgLy8gc3VwcG9ydCBmb3IgdjEwIEFQSVxuICAgIGZpcmUoXCJhZnRlcjpoaWdobGlnaHRFbGVtZW50XCIsIHsgZWw6IGVsZW1lbnQsIHJlc3VsdCwgdGV4dCB9KTtcblxuICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gcmVzdWx0LnZhbHVlO1xuICAgIHVwZGF0ZUNsYXNzTmFtZShlbGVtZW50LCBsYW5ndWFnZSwgcmVzdWx0Lmxhbmd1YWdlKTtcbiAgICBlbGVtZW50LnJlc3VsdCA9IHtcbiAgICAgIGxhbmd1YWdlOiByZXN1bHQubGFuZ3VhZ2UsXG4gICAgICAvLyBUT0RPOiByZW1vdmUgd2l0aCB2ZXJzaW9uIDExLjBcbiAgICAgIHJlOiByZXN1bHQucmVsZXZhbmNlLFxuICAgICAgcmVsYXZhbmNlOiByZXN1bHQucmVsZXZhbmNlXG4gICAgfTtcbiAgICBpZiAocmVzdWx0LnNlY29uZF9iZXN0KSB7XG4gICAgICBlbGVtZW50LnNlY29uZF9iZXN0ID0ge1xuICAgICAgICBsYW5ndWFnZTogcmVzdWx0LnNlY29uZF9iZXN0Lmxhbmd1YWdlLFxuICAgICAgICAvLyBUT0RPOiByZW1vdmUgd2l0aCB2ZXJzaW9uIDExLjBcbiAgICAgICAgcmU6IHJlc3VsdC5zZWNvbmRfYmVzdC5yZWxldmFuY2UsXG4gICAgICAgIHJlbGF2YW5jZTogcmVzdWx0LnNlY29uZF9iZXN0LnJlbGV2YW5jZVxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlcyBoaWdobGlnaHQuanMgZ2xvYmFsIG9wdGlvbnMgd2l0aCB0aGUgcGFzc2VkIG9wdGlvbnNcbiAgICpcbiAgICogQHBhcmFtIHtQYXJ0aWFsPEhMSlNPcHRpb25zPn0gdXNlck9wdGlvbnNcbiAgICovXG4gIGZ1bmN0aW9uIGNvbmZpZ3VyZSh1c2VyT3B0aW9ucykge1xuICAgIGlmICh1c2VyT3B0aW9ucy51c2VCUikge1xuICAgICAgZGVwcmVjYXRlZChcIjEwLjMuMFwiLCBcIid1c2VCUicgd2lsbCBiZSByZW1vdmVkIGVudGlyZWx5IGluIHYxMS4wXCIpO1xuICAgICAgZGVwcmVjYXRlZChcIjEwLjMuMFwiLCBcIlBsZWFzZSBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2hpZ2hsaWdodGpzL2hpZ2hsaWdodC5qcy9pc3N1ZXMvMjU1OVwiKTtcbiAgICB9XG4gICAgb3B0aW9ucyA9IGluaGVyaXQkMShvcHRpb25zLCB1c2VyT3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogSGlnaGxpZ2h0cyB0byBhbGwgPHByZT48Y29kZT4gYmxvY2tzIG9uIGEgcGFnZVxuICAgKlxuICAgKiBAdHlwZSB7RnVuY3Rpb24gJiB7Y2FsbGVkPzogYm9vbGVhbn19XG4gICAqL1xuICAvLyBUT0RPOiByZW1vdmUgdjEyLCBkZXByZWNhdGVkXG4gIGNvbnN0IGluaXRIaWdobGlnaHRpbmcgPSAoKSA9PiB7XG4gICAgaWYgKGluaXRIaWdobGlnaHRpbmcuY2FsbGVkKSByZXR1cm47XG4gICAgaW5pdEhpZ2hsaWdodGluZy5jYWxsZWQgPSB0cnVlO1xuXG4gICAgZGVwcmVjYXRlZChcIjEwLjYuMFwiLCBcImluaXRIaWdobGlnaHRpbmcoKSBpcyBkZXByZWNhdGVkLiAgVXNlIGhpZ2hsaWdodEFsbCgpIGluc3RlYWQuXCIpO1xuXG4gICAgY29uc3QgYmxvY2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgncHJlIGNvZGUnKTtcbiAgICBibG9ja3MuZm9yRWFjaChoaWdobGlnaHRFbGVtZW50KTtcbiAgfTtcblxuICAvLyBIaWdsaWdodHMgYWxsIHdoZW4gRE9NQ29udGVudExvYWRlZCBmaXJlc1xuICAvLyBUT0RPOiByZW1vdmUgdjEyLCBkZXByZWNhdGVkXG4gIGZ1bmN0aW9uIGluaXRIaWdobGlnaHRpbmdPbkxvYWQoKSB7XG4gICAgZGVwcmVjYXRlZChcIjEwLjYuMFwiLCBcImluaXRIaWdobGlnaHRpbmdPbkxvYWQoKSBpcyBkZXByZWNhdGVkLiAgVXNlIGhpZ2hsaWdodEFsbCgpIGluc3RlYWQuXCIpO1xuICAgIHdhbnRzSGlnaGxpZ2h0ID0gdHJ1ZTtcbiAgfVxuXG4gIGxldCB3YW50c0hpZ2hsaWdodCA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBhdXRvLWhpZ2hsaWdodHMgYWxsIHByZT5jb2RlIGVsZW1lbnRzIG9uIHRoZSBwYWdlXG4gICAqL1xuICBmdW5jdGlvbiBoaWdobGlnaHRBbGwoKSB7XG4gICAgLy8gaWYgd2UgYXJlIGNhbGxlZCB0b28gZWFybHkgaW4gdGhlIGxvYWRpbmcgcHJvY2Vzc1xuICAgIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSBcImxvYWRpbmdcIikge1xuICAgICAgd2FudHNIaWdobGlnaHQgPSB0cnVlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGJsb2NrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3ByZSBjb2RlJyk7XG4gICAgYmxvY2tzLmZvckVhY2goaGlnaGxpZ2h0RWxlbWVudCk7XG4gIH1cblxuICBmdW5jdGlvbiBib290KCkge1xuICAgIC8vIGlmIGEgaGlnaGxpZ2h0IHdhcyByZXF1ZXN0ZWQgYmVmb3JlIERPTSB3YXMgbG9hZGVkLCBkbyBub3dcbiAgICBpZiAod2FudHNIaWdobGlnaHQpIGhpZ2hsaWdodEFsbCgpO1xuICB9XG5cbiAgLy8gbWFrZSBzdXJlIHdlIGFyZSBpbiB0aGUgYnJvd3NlciBlbnZpcm9ubWVudFxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGJvb3QsIGZhbHNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlciBhIGxhbmd1YWdlIGdyYW1tYXIgbW9kdWxlXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBsYW5ndWFnZU5hbWVcbiAgICogQHBhcmFtIHtMYW5ndWFnZUZufSBsYW5ndWFnZURlZmluaXRpb25cbiAgICovXG4gIGZ1bmN0aW9uIHJlZ2lzdGVyTGFuZ3VhZ2UobGFuZ3VhZ2VOYW1lLCBsYW5ndWFnZURlZmluaXRpb24pIHtcbiAgICBsZXQgbGFuZyA9IG51bGw7XG4gICAgdHJ5IHtcbiAgICAgIGxhbmcgPSBsYW5ndWFnZURlZmluaXRpb24oaGxqcyk7XG4gICAgfSBjYXRjaCAoZXJyb3IkMSkge1xuICAgICAgZXJyb3IoXCJMYW5ndWFnZSBkZWZpbml0aW9uIGZvciAne30nIGNvdWxkIG5vdCBiZSByZWdpc3RlcmVkLlwiLnJlcGxhY2UoXCJ7fVwiLCBsYW5ndWFnZU5hbWUpKTtcbiAgICAgIC8vIGhhcmQgb3Igc29mdCBlcnJvclxuICAgICAgaWYgKCFTQUZFX01PREUpIHsgdGhyb3cgZXJyb3IkMTsgfSBlbHNlIHsgZXJyb3IoZXJyb3IkMSk7IH1cbiAgICAgIC8vIGxhbmd1YWdlcyB0aGF0IGhhdmUgc2VyaW91cyBlcnJvcnMgYXJlIHJlcGxhY2VkIHdpdGggZXNzZW50aWFsbHkgYVxuICAgICAgLy8gXCJwbGFpbnRleHRcIiBzdGFuZC1pbiBzbyB0aGF0IHRoZSBjb2RlIGJsb2NrcyB3aWxsIHN0aWxsIGdldCBub3JtYWxcbiAgICAgIC8vIGNzcyBjbGFzc2VzIGFwcGxpZWQgdG8gdGhlbSAtIGFuZCBvbmUgYmFkIGxhbmd1YWdlIHdvbid0IGJyZWFrIHRoZVxuICAgICAgLy8gZW50aXJlIGhpZ2hsaWdodGVyXG4gICAgICBsYW5nID0gUExBSU5URVhUX0xBTkdVQUdFO1xuICAgIH1cbiAgICAvLyBnaXZlIGl0IGEgdGVtcG9yYXJ5IG5hbWUgaWYgaXQgZG9lc24ndCBoYXZlIG9uZSBpbiB0aGUgbWV0YS1kYXRhXG4gICAgaWYgKCFsYW5nLm5hbWUpIGxhbmcubmFtZSA9IGxhbmd1YWdlTmFtZTtcbiAgICBsYW5ndWFnZXNbbGFuZ3VhZ2VOYW1lXSA9IGxhbmc7XG4gICAgbGFuZy5yYXdEZWZpbml0aW9uID0gbGFuZ3VhZ2VEZWZpbml0aW9uLmJpbmQobnVsbCwgaGxqcyk7XG5cbiAgICBpZiAobGFuZy5hbGlhc2VzKSB7XG4gICAgICByZWdpc3RlckFsaWFzZXMobGFuZy5hbGlhc2VzLCB7IGxhbmd1YWdlTmFtZSB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGEgbGFuZ3VhZ2UgZ3JhbW1hciBtb2R1bGVcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGxhbmd1YWdlTmFtZVxuICAgKi9cbiAgZnVuY3Rpb24gdW5yZWdpc3Rlckxhbmd1YWdlKGxhbmd1YWdlTmFtZSkge1xuICAgIGRlbGV0ZSBsYW5ndWFnZXNbbGFuZ3VhZ2VOYW1lXTtcbiAgICBmb3IgKGNvbnN0IGFsaWFzIG9mIE9iamVjdC5rZXlzKGFsaWFzZXMpKSB7XG4gICAgICBpZiAoYWxpYXNlc1thbGlhc10gPT09IGxhbmd1YWdlTmFtZSkge1xuICAgICAgICBkZWxldGUgYWxpYXNlc1thbGlhc107XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm5zIHtzdHJpbmdbXX0gTGlzdCBvZiBsYW5ndWFnZSBpbnRlcm5hbCBuYW1lc1xuICAgKi9cbiAgZnVuY3Rpb24gbGlzdExhbmd1YWdlcygpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMobGFuZ3VhZ2VzKTtcbiAgfVxuXG4gIC8qKlxuICAgIGludGVuZGVkIHVzYWdlOiBXaGVuIG9uZSBsYW5ndWFnZSB0cnVseSByZXF1aXJlcyBhbm90aGVyXG5cbiAgICBVbmxpa2UgYGdldExhbmd1YWdlYCwgdGhpcyB3aWxsIHRocm93IHdoZW4gdGhlIHJlcXVlc3RlZCBsYW5ndWFnZVxuICAgIGlzIG5vdCBhdmFpbGFibGUuXG5cbiAgICBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIG5hbWUgb2YgdGhlIGxhbmd1YWdlIHRvIGZldGNoL3JlcXVpcmVcbiAgICBAcmV0dXJucyB7TGFuZ3VhZ2UgfCBuZXZlcn1cbiAgKi9cbiAgZnVuY3Rpb24gcmVxdWlyZUxhbmd1YWdlKG5hbWUpIHtcbiAgICBkZXByZWNhdGVkKFwiMTAuNC4wXCIsIFwicmVxdWlyZUxhbmd1YWdlIHdpbGwgYmUgcmVtb3ZlZCBlbnRpcmVseSBpbiB2MTEuXCIpO1xuICAgIGRlcHJlY2F0ZWQoXCIxMC40LjBcIiwgXCJQbGVhc2Ugc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9oaWdobGlnaHRqcy9oaWdobGlnaHQuanMvcHVsbC8yODQ0XCIpO1xuXG4gICAgY29uc3QgbGFuZyA9IGdldExhbmd1YWdlKG5hbWUpO1xuICAgIGlmIChsYW5nKSB7IHJldHVybiBsYW5nOyB9XG5cbiAgICBjb25zdCBlcnIgPSBuZXcgRXJyb3IoJ1RoZSBcXCd7fVxcJyBsYW5ndWFnZSBpcyByZXF1aXJlZCwgYnV0IG5vdCBsb2FkZWQuJy5yZXBsYWNlKCd7fScsIG5hbWUpKTtcbiAgICB0aHJvdyBlcnI7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSBuYW1lIG9mIHRoZSBsYW5ndWFnZSB0byByZXRyaWV2ZVxuICAgKiBAcmV0dXJucyB7TGFuZ3VhZ2UgfCB1bmRlZmluZWR9XG4gICAqL1xuICBmdW5jdGlvbiBnZXRMYW5ndWFnZShuYW1lKSB7XG4gICAgbmFtZSA9IChuYW1lIHx8ICcnKS50b0xvd2VyQ2FzZSgpO1xuICAgIHJldHVybiBsYW5ndWFnZXNbbmFtZV0gfHwgbGFuZ3VhZ2VzW2FsaWFzZXNbbmFtZV1dO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfSBhbGlhc0xpc3QgLSBzaW5nbGUgYWxpYXMgb3IgbGlzdCBvZiBhbGlhc2VzXG4gICAqIEBwYXJhbSB7e2xhbmd1YWdlTmFtZTogc3RyaW5nfX0gb3B0c1xuICAgKi9cbiAgZnVuY3Rpb24gcmVnaXN0ZXJBbGlhc2VzKGFsaWFzTGlzdCwgeyBsYW5ndWFnZU5hbWUgfSkge1xuICAgIGlmICh0eXBlb2YgYWxpYXNMaXN0ID09PSAnc3RyaW5nJykge1xuICAgICAgYWxpYXNMaXN0ID0gW2FsaWFzTGlzdF07XG4gICAgfVxuICAgIGFsaWFzTGlzdC5mb3JFYWNoKGFsaWFzID0+IHsgYWxpYXNlc1thbGlhcy50b0xvd2VyQ2FzZSgpXSA9IGxhbmd1YWdlTmFtZTsgfSk7XG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyBpZiBhIGdpdmVuIGxhbmd1YWdlIGhhcyBhdXRvLWRldGVjdGlvbiBlbmFibGVkXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gbmFtZSBvZiB0aGUgbGFuZ3VhZ2VcbiAgICovXG4gIGZ1bmN0aW9uIGF1dG9EZXRlY3Rpb24obmFtZSkge1xuICAgIGNvbnN0IGxhbmcgPSBnZXRMYW5ndWFnZShuYW1lKTtcbiAgICByZXR1cm4gbGFuZyAmJiAhbGFuZy5kaXNhYmxlQXV0b2RldGVjdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGdyYWRlcyB0aGUgb2xkIGhpZ2hsaWdodEJsb2NrIHBsdWdpbnMgdG8gdGhlIG5ld1xuICAgKiBoaWdobGlnaHRFbGVtZW50IEFQSVxuICAgKiBAcGFyYW0ge0hMSlNQbHVnaW59IHBsdWdpblxuICAgKi9cbiAgZnVuY3Rpb24gdXBncmFkZVBsdWdpbkFQSShwbHVnaW4pIHtcbiAgICAvLyBUT0RPOiByZW1vdmUgd2l0aCB2MTJcbiAgICBpZiAocGx1Z2luW1wiYmVmb3JlOmhpZ2hsaWdodEJsb2NrXCJdICYmICFwbHVnaW5bXCJiZWZvcmU6aGlnaGxpZ2h0RWxlbWVudFwiXSkge1xuICAgICAgcGx1Z2luW1wiYmVmb3JlOmhpZ2hsaWdodEVsZW1lbnRcIl0gPSAoZGF0YSkgPT4ge1xuICAgICAgICBwbHVnaW5bXCJiZWZvcmU6aGlnaGxpZ2h0QmxvY2tcIl0oXG4gICAgICAgICAgT2JqZWN0LmFzc2lnbih7IGJsb2NrOiBkYXRhLmVsIH0sIGRhdGEpXG4gICAgICAgICk7XG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAocGx1Z2luW1wiYWZ0ZXI6aGlnaGxpZ2h0QmxvY2tcIl0gJiYgIXBsdWdpbltcImFmdGVyOmhpZ2hsaWdodEVsZW1lbnRcIl0pIHtcbiAgICAgIHBsdWdpbltcImFmdGVyOmhpZ2hsaWdodEVsZW1lbnRcIl0gPSAoZGF0YSkgPT4ge1xuICAgICAgICBwbHVnaW5bXCJhZnRlcjpoaWdobGlnaHRCbG9ja1wiXShcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHsgYmxvY2s6IGRhdGEuZWwgfSwgZGF0YSlcbiAgICAgICAgKTtcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7SExKU1BsdWdpbn0gcGx1Z2luXG4gICAqL1xuICBmdW5jdGlvbiBhZGRQbHVnaW4ocGx1Z2luKSB7XG4gICAgdXBncmFkZVBsdWdpbkFQSShwbHVnaW4pO1xuICAgIHBsdWdpbnMucHVzaChwbHVnaW4pO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSB7UGx1Z2luRXZlbnR9IGV2ZW50XG4gICAqIEBwYXJhbSB7YW55fSBhcmdzXG4gICAqL1xuICBmdW5jdGlvbiBmaXJlKGV2ZW50LCBhcmdzKSB7XG4gICAgY29uc3QgY2IgPSBldmVudDtcbiAgICBwbHVnaW5zLmZvckVhY2goZnVuY3Rpb24ocGx1Z2luKSB7XG4gICAgICBpZiAocGx1Z2luW2NiXSkge1xuICAgICAgICBwbHVnaW5bY2JdKGFyZ3MpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gIE5vdGU6IGZpeE1hcmt1cCBpcyBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgZW50aXJlbHkgaW4gdjExXG5cbiAgQHBhcmFtIHtzdHJpbmd9IGFyZ1xuICBAcmV0dXJucyB7c3RyaW5nfVxuICAqL1xuICBmdW5jdGlvbiBkZXByZWNhdGVGaXhNYXJrdXAoYXJnKSB7XG4gICAgZGVwcmVjYXRlZChcIjEwLjIuMFwiLCBcImZpeE1hcmt1cCB3aWxsIGJlIHJlbW92ZWQgZW50aXJlbHkgaW4gdjExLjBcIik7XG4gICAgZGVwcmVjYXRlZChcIjEwLjIuMFwiLCBcIlBsZWFzZSBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2hpZ2hsaWdodGpzL2hpZ2hsaWdodC5qcy9pc3N1ZXMvMjUzNFwiKTtcblxuICAgIHJldHVybiBmaXhNYXJrdXAoYXJnKTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0ge0hpZ2hsaWdodGVkSFRNTEVsZW1lbnR9IGVsXG4gICAqL1xuICBmdW5jdGlvbiBkZXByZWNhdGVIaWdobGlnaHRCbG9jayhlbCkge1xuICAgIGRlcHJlY2F0ZWQoXCIxMC43LjBcIiwgXCJoaWdobGlnaHRCbG9jayB3aWxsIGJlIHJlbW92ZWQgZW50aXJlbHkgaW4gdjEyLjBcIik7XG4gICAgZGVwcmVjYXRlZChcIjEwLjcuMFwiLCBcIlBsZWFzZSB1c2UgaGlnaGxpZ2h0RWxlbWVudCBub3cuXCIpO1xuXG4gICAgcmV0dXJuIGhpZ2hsaWdodEVsZW1lbnQoZWwpO1xuICB9XG5cbiAgLyogSW50ZXJmYWNlIGRlZmluaXRpb24gKi9cbiAgT2JqZWN0LmFzc2lnbihobGpzLCB7XG4gICAgaGlnaGxpZ2h0LFxuICAgIGhpZ2hsaWdodEF1dG8sXG4gICAgaGlnaGxpZ2h0QWxsLFxuICAgIGZpeE1hcmt1cDogZGVwcmVjYXRlRml4TWFya3VwLFxuICAgIGhpZ2hsaWdodEVsZW1lbnQsXG4gICAgLy8gVE9ETzogUmVtb3ZlIHdpdGggdjEyIEFQSVxuICAgIGhpZ2hsaWdodEJsb2NrOiBkZXByZWNhdGVIaWdobGlnaHRCbG9jayxcbiAgICBjb25maWd1cmUsXG4gICAgaW5pdEhpZ2hsaWdodGluZyxcbiAgICBpbml0SGlnaGxpZ2h0aW5nT25Mb2FkLFxuICAgIHJlZ2lzdGVyTGFuZ3VhZ2UsXG4gICAgdW5yZWdpc3Rlckxhbmd1YWdlLFxuICAgIGxpc3RMYW5ndWFnZXMsXG4gICAgZ2V0TGFuZ3VhZ2UsXG4gICAgcmVnaXN0ZXJBbGlhc2VzLFxuICAgIHJlcXVpcmVMYW5ndWFnZSxcbiAgICBhdXRvRGV0ZWN0aW9uLFxuICAgIGluaGVyaXQ6IGluaGVyaXQkMSxcbiAgICBhZGRQbHVnaW4sXG4gICAgLy8gcGx1Z2lucyBmb3IgZnJhbWV3b3Jrc1xuICAgIHZ1ZVBsdWdpbjogQnVpbGRWdWVQbHVnaW4oaGxqcykuVnVlUGx1Z2luXG4gIH0pO1xuXG4gIGhsanMuZGVidWdNb2RlID0gZnVuY3Rpb24oKSB7IFNBRkVfTU9ERSA9IGZhbHNlOyB9O1xuICBobGpzLnNhZmVNb2RlID0gZnVuY3Rpb24oKSB7IFNBRkVfTU9ERSA9IHRydWU7IH07XG4gIGhsanMudmVyc2lvblN0cmluZyA9IHZlcnNpb247XG5cbiAgZm9yIChjb25zdCBrZXkgaW4gTU9ERVMpIHtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgaWYgKHR5cGVvZiBNT0RFU1trZXldID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICBkZWVwRnJlZXplRXM2KE1PREVTW2tleV0pO1xuICAgIH1cbiAgfVxuXG4gIC8vIG1lcmdlIGFsbCB0aGUgbW9kZXMvcmVnZXhzIGludG8gb3VyIG1haW4gb2JqZWN0XG4gIE9iamVjdC5hc3NpZ24oaGxqcywgTU9ERVMpO1xuXG4gIC8vIGJ1aWx0LWluIHBsdWdpbnMsIGxpa2VseSB0byBiZSBtb3ZlZCBvdXQgb2YgY29yZSBpbiB0aGUgZnV0dXJlXG4gIGhsanMuYWRkUGx1Z2luKGJyUGx1Z2luKTsgLy8gc2xhdGVkIHRvIGJlIHJlbW92ZWQgaW4gdjExXG4gIGhsanMuYWRkUGx1Z2luKG1lcmdlSFRNTFBsdWdpbik7XG4gIGhsanMuYWRkUGx1Z2luKHRhYlJlcGxhY2VQbHVnaW4pO1xuICByZXR1cm4gaGxqcztcbn07XG5cbi8vIGV4cG9ydCBhbiBcImluc3RhbmNlXCIgb2YgdGhlIGhpZ2hsaWdodGVyXG52YXIgaGlnaGxpZ2h0ID0gSExKUyh7fSk7XG5cbm1vZHVsZS5leHBvcnRzID0gaGlnaGxpZ2h0O1xuIiwiY29uc3QgTU9ERVMgPSAoaGxqcykgPT4ge1xuICByZXR1cm4ge1xuICAgIElNUE9SVEFOVDoge1xuICAgICAgY2xhc3NOYW1lOiAnbWV0YScsXG4gICAgICBiZWdpbjogJyFpbXBvcnRhbnQnXG4gICAgfSxcbiAgICBIRVhDT0xPUjoge1xuICAgICAgY2xhc3NOYW1lOiAnbnVtYmVyJyxcbiAgICAgIGJlZ2luOiAnIyhbYS1mQS1GMC05XXs2fXxbYS1mQS1GMC05XXszfSknXG4gICAgfSxcbiAgICBBVFRSSUJVVEVfU0VMRUNUT1JfTU9ERToge1xuICAgICAgY2xhc3NOYW1lOiAnc2VsZWN0b3ItYXR0cicsXG4gICAgICBiZWdpbjogL1xcWy8sXG4gICAgICBlbmQ6IC9cXF0vLFxuICAgICAgaWxsZWdhbDogJyQnLFxuICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgaGxqcy5BUE9TX1NUUklOR19NT0RFLFxuICAgICAgICBobGpzLlFVT1RFX1NUUklOR19NT0RFXG4gICAgICBdXG4gICAgfVxuICB9O1xufTtcblxuY29uc3QgVEFHUyA9IFtcbiAgJ2EnLFxuICAnYWJicicsXG4gICdhZGRyZXNzJyxcbiAgJ2FydGljbGUnLFxuICAnYXNpZGUnLFxuICAnYXVkaW8nLFxuICAnYicsXG4gICdibG9ja3F1b3RlJyxcbiAgJ2JvZHknLFxuICAnYnV0dG9uJyxcbiAgJ2NhbnZhcycsXG4gICdjYXB0aW9uJyxcbiAgJ2NpdGUnLFxuICAnY29kZScsXG4gICdkZCcsXG4gICdkZWwnLFxuICAnZGV0YWlscycsXG4gICdkZm4nLFxuICAnZGl2JyxcbiAgJ2RsJyxcbiAgJ2R0JyxcbiAgJ2VtJyxcbiAgJ2ZpZWxkc2V0JyxcbiAgJ2ZpZ2NhcHRpb24nLFxuICAnZmlndXJlJyxcbiAgJ2Zvb3RlcicsXG4gICdmb3JtJyxcbiAgJ2gxJyxcbiAgJ2gyJyxcbiAgJ2gzJyxcbiAgJ2g0JyxcbiAgJ2g1JyxcbiAgJ2g2JyxcbiAgJ2hlYWRlcicsXG4gICdoZ3JvdXAnLFxuICAnaHRtbCcsXG4gICdpJyxcbiAgJ2lmcmFtZScsXG4gICdpbWcnLFxuICAnaW5wdXQnLFxuICAnaW5zJyxcbiAgJ2tiZCcsXG4gICdsYWJlbCcsXG4gICdsZWdlbmQnLFxuICAnbGknLFxuICAnbWFpbicsXG4gICdtYXJrJyxcbiAgJ21lbnUnLFxuICAnbmF2JyxcbiAgJ29iamVjdCcsXG4gICdvbCcsXG4gICdwJyxcbiAgJ3EnLFxuICAncXVvdGUnLFxuICAnc2FtcCcsXG4gICdzZWN0aW9uJyxcbiAgJ3NwYW4nLFxuICAnc3Ryb25nJyxcbiAgJ3N1bW1hcnknLFxuICAnc3VwJyxcbiAgJ3RhYmxlJyxcbiAgJ3Rib2R5JyxcbiAgJ3RkJyxcbiAgJ3RleHRhcmVhJyxcbiAgJ3Rmb290JyxcbiAgJ3RoJyxcbiAgJ3RoZWFkJyxcbiAgJ3RpbWUnLFxuICAndHInLFxuICAndWwnLFxuICAndmFyJyxcbiAgJ3ZpZGVvJ1xuXTtcblxuY29uc3QgTUVESUFfRkVBVFVSRVMgPSBbXG4gICdhbnktaG92ZXInLFxuICAnYW55LXBvaW50ZXInLFxuICAnYXNwZWN0LXJhdGlvJyxcbiAgJ2NvbG9yJyxcbiAgJ2NvbG9yLWdhbXV0JyxcbiAgJ2NvbG9yLWluZGV4JyxcbiAgJ2RldmljZS1hc3BlY3QtcmF0aW8nLFxuICAnZGV2aWNlLWhlaWdodCcsXG4gICdkZXZpY2Utd2lkdGgnLFxuICAnZGlzcGxheS1tb2RlJyxcbiAgJ2ZvcmNlZC1jb2xvcnMnLFxuICAnZ3JpZCcsXG4gICdoZWlnaHQnLFxuICAnaG92ZXInLFxuICAnaW52ZXJ0ZWQtY29sb3JzJyxcbiAgJ21vbm9jaHJvbWUnLFxuICAnb3JpZW50YXRpb24nLFxuICAnb3ZlcmZsb3ctYmxvY2snLFxuICAnb3ZlcmZsb3ctaW5saW5lJyxcbiAgJ3BvaW50ZXInLFxuICAncHJlZmVycy1jb2xvci1zY2hlbWUnLFxuICAncHJlZmVycy1jb250cmFzdCcsXG4gICdwcmVmZXJzLXJlZHVjZWQtbW90aW9uJyxcbiAgJ3ByZWZlcnMtcmVkdWNlZC10cmFuc3BhcmVuY3knLFxuICAncmVzb2x1dGlvbicsXG4gICdzY2FuJyxcbiAgJ3NjcmlwdGluZycsXG4gICd1cGRhdGUnLFxuICAnd2lkdGgnLFxuICAvLyBUT0RPOiBmaW5kIGEgYmV0dGVyIHNvbHV0aW9uP1xuICAnbWluLXdpZHRoJyxcbiAgJ21heC13aWR0aCcsXG4gICdtaW4taGVpZ2h0JyxcbiAgJ21heC1oZWlnaHQnXG5dO1xuXG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvUHNldWRvLWNsYXNzZXNcbmNvbnN0IFBTRVVET19DTEFTU0VTID0gW1xuICAnYWN0aXZlJyxcbiAgJ2FueS1saW5rJyxcbiAgJ2JsYW5rJyxcbiAgJ2NoZWNrZWQnLFxuICAnY3VycmVudCcsXG4gICdkZWZhdWx0JyxcbiAgJ2RlZmluZWQnLFxuICAnZGlyJywgLy8gZGlyKClcbiAgJ2Rpc2FibGVkJyxcbiAgJ2Ryb3AnLFxuICAnZW1wdHknLFxuICAnZW5hYmxlZCcsXG4gICdmaXJzdCcsXG4gICdmaXJzdC1jaGlsZCcsXG4gICdmaXJzdC1vZi10eXBlJyxcbiAgJ2Z1bGxzY3JlZW4nLFxuICAnZnV0dXJlJyxcbiAgJ2ZvY3VzJyxcbiAgJ2ZvY3VzLXZpc2libGUnLFxuICAnZm9jdXMtd2l0aGluJyxcbiAgJ2hhcycsIC8vIGhhcygpXG4gICdob3N0JywgLy8gaG9zdCBvciBob3N0KClcbiAgJ2hvc3QtY29udGV4dCcsIC8vIGhvc3QtY29udGV4dCgpXG4gICdob3ZlcicsXG4gICdpbmRldGVybWluYXRlJyxcbiAgJ2luLXJhbmdlJyxcbiAgJ2ludmFsaWQnLFxuICAnaXMnLCAvLyBpcygpXG4gICdsYW5nJywgLy8gbGFuZygpXG4gICdsYXN0LWNoaWxkJyxcbiAgJ2xhc3Qtb2YtdHlwZScsXG4gICdsZWZ0JyxcbiAgJ2xpbmsnLFxuICAnbG9jYWwtbGluaycsXG4gICdub3QnLCAvLyBub3QoKVxuICAnbnRoLWNoaWxkJywgLy8gbnRoLWNoaWxkKClcbiAgJ250aC1jb2wnLCAvLyBudGgtY29sKClcbiAgJ250aC1sYXN0LWNoaWxkJywgLy8gbnRoLWxhc3QtY2hpbGQoKVxuICAnbnRoLWxhc3QtY29sJywgLy8gbnRoLWxhc3QtY29sKClcbiAgJ250aC1sYXN0LW9mLXR5cGUnLCAvL250aC1sYXN0LW9mLXR5cGUoKVxuICAnbnRoLW9mLXR5cGUnLCAvL250aC1vZi10eXBlKClcbiAgJ29ubHktY2hpbGQnLFxuICAnb25seS1vZi10eXBlJyxcbiAgJ29wdGlvbmFsJyxcbiAgJ291dC1vZi1yYW5nZScsXG4gICdwYXN0JyxcbiAgJ3BsYWNlaG9sZGVyLXNob3duJyxcbiAgJ3JlYWQtb25seScsXG4gICdyZWFkLXdyaXRlJyxcbiAgJ3JlcXVpcmVkJyxcbiAgJ3JpZ2h0JyxcbiAgJ3Jvb3QnLFxuICAnc2NvcGUnLFxuICAndGFyZ2V0JyxcbiAgJ3RhcmdldC13aXRoaW4nLFxuICAndXNlci1pbnZhbGlkJyxcbiAgJ3ZhbGlkJyxcbiAgJ3Zpc2l0ZWQnLFxuICAnd2hlcmUnIC8vIHdoZXJlKClcbl07XG5cbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9Qc2V1ZG8tZWxlbWVudHNcbmNvbnN0IFBTRVVET19FTEVNRU5UUyA9IFtcbiAgJ2FmdGVyJyxcbiAgJ2JhY2tkcm9wJyxcbiAgJ2JlZm9yZScsXG4gICdjdWUnLFxuICAnY3VlLXJlZ2lvbicsXG4gICdmaXJzdC1sZXR0ZXInLFxuICAnZmlyc3QtbGluZScsXG4gICdncmFtbWFyLWVycm9yJyxcbiAgJ21hcmtlcicsXG4gICdwYXJ0JyxcbiAgJ3BsYWNlaG9sZGVyJyxcbiAgJ3NlbGVjdGlvbicsXG4gICdzbG90dGVkJyxcbiAgJ3NwZWxsaW5nLWVycm9yJ1xuXTtcblxuY29uc3QgQVRUUklCVVRFUyA9IFtcbiAgJ2FsaWduLWNvbnRlbnQnLFxuICAnYWxpZ24taXRlbXMnLFxuICAnYWxpZ24tc2VsZicsXG4gICdhbmltYXRpb24nLFxuICAnYW5pbWF0aW9uLWRlbGF5JyxcbiAgJ2FuaW1hdGlvbi1kaXJlY3Rpb24nLFxuICAnYW5pbWF0aW9uLWR1cmF0aW9uJyxcbiAgJ2FuaW1hdGlvbi1maWxsLW1vZGUnLFxuICAnYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudCcsXG4gICdhbmltYXRpb24tbmFtZScsXG4gICdhbmltYXRpb24tcGxheS1zdGF0ZScsXG4gICdhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uJyxcbiAgJ2F1dG8nLFxuICAnYmFja2ZhY2UtdmlzaWJpbGl0eScsXG4gICdiYWNrZ3JvdW5kJyxcbiAgJ2JhY2tncm91bmQtYXR0YWNobWVudCcsXG4gICdiYWNrZ3JvdW5kLWNsaXAnLFxuICAnYmFja2dyb3VuZC1jb2xvcicsXG4gICdiYWNrZ3JvdW5kLWltYWdlJyxcbiAgJ2JhY2tncm91bmQtb3JpZ2luJyxcbiAgJ2JhY2tncm91bmQtcG9zaXRpb24nLFxuICAnYmFja2dyb3VuZC1yZXBlYXQnLFxuICAnYmFja2dyb3VuZC1zaXplJyxcbiAgJ2JvcmRlcicsXG4gICdib3JkZXItYm90dG9tJyxcbiAgJ2JvcmRlci1ib3R0b20tY29sb3InLFxuICAnYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1cycsXG4gICdib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1cycsXG4gICdib3JkZXItYm90dG9tLXN0eWxlJyxcbiAgJ2JvcmRlci1ib3R0b20td2lkdGgnLFxuICAnYm9yZGVyLWNvbGxhcHNlJyxcbiAgJ2JvcmRlci1jb2xvcicsXG4gICdib3JkZXItaW1hZ2UnLFxuICAnYm9yZGVyLWltYWdlLW91dHNldCcsXG4gICdib3JkZXItaW1hZ2UtcmVwZWF0JyxcbiAgJ2JvcmRlci1pbWFnZS1zbGljZScsXG4gICdib3JkZXItaW1hZ2Utc291cmNlJyxcbiAgJ2JvcmRlci1pbWFnZS13aWR0aCcsXG4gICdib3JkZXItbGVmdCcsXG4gICdib3JkZXItbGVmdC1jb2xvcicsXG4gICdib3JkZXItbGVmdC1zdHlsZScsXG4gICdib3JkZXItbGVmdC13aWR0aCcsXG4gICdib3JkZXItcmFkaXVzJyxcbiAgJ2JvcmRlci1yaWdodCcsXG4gICdib3JkZXItcmlnaHQtY29sb3InLFxuICAnYm9yZGVyLXJpZ2h0LXN0eWxlJyxcbiAgJ2JvcmRlci1yaWdodC13aWR0aCcsXG4gICdib3JkZXItc3BhY2luZycsXG4gICdib3JkZXItc3R5bGUnLFxuICAnYm9yZGVyLXRvcCcsXG4gICdib3JkZXItdG9wLWNvbG9yJyxcbiAgJ2JvcmRlci10b3AtbGVmdC1yYWRpdXMnLFxuICAnYm9yZGVyLXRvcC1yaWdodC1yYWRpdXMnLFxuICAnYm9yZGVyLXRvcC1zdHlsZScsXG4gICdib3JkZXItdG9wLXdpZHRoJyxcbiAgJ2JvcmRlci13aWR0aCcsXG4gICdib3R0b20nLFxuICAnYm94LWRlY29yYXRpb24tYnJlYWsnLFxuICAnYm94LXNoYWRvdycsXG4gICdib3gtc2l6aW5nJyxcbiAgJ2JyZWFrLWFmdGVyJyxcbiAgJ2JyZWFrLWJlZm9yZScsXG4gICdicmVhay1pbnNpZGUnLFxuICAnY2FwdGlvbi1zaWRlJyxcbiAgJ2NsZWFyJyxcbiAgJ2NsaXAnLFxuICAnY2xpcC1wYXRoJyxcbiAgJ2NvbG9yJyxcbiAgJ2NvbHVtbi1jb3VudCcsXG4gICdjb2x1bW4tZmlsbCcsXG4gICdjb2x1bW4tZ2FwJyxcbiAgJ2NvbHVtbi1ydWxlJyxcbiAgJ2NvbHVtbi1ydWxlLWNvbG9yJyxcbiAgJ2NvbHVtbi1ydWxlLXN0eWxlJyxcbiAgJ2NvbHVtbi1ydWxlLXdpZHRoJyxcbiAgJ2NvbHVtbi1zcGFuJyxcbiAgJ2NvbHVtbi13aWR0aCcsXG4gICdjb2x1bW5zJyxcbiAgJ2NvbnRlbnQnLFxuICAnY291bnRlci1pbmNyZW1lbnQnLFxuICAnY291bnRlci1yZXNldCcsXG4gICdjdXJzb3InLFxuICAnZGlyZWN0aW9uJyxcbiAgJ2Rpc3BsYXknLFxuICAnZW1wdHktY2VsbHMnLFxuICAnZmlsdGVyJyxcbiAgJ2ZsZXgnLFxuICAnZmxleC1iYXNpcycsXG4gICdmbGV4LWRpcmVjdGlvbicsXG4gICdmbGV4LWZsb3cnLFxuICAnZmxleC1ncm93JyxcbiAgJ2ZsZXgtc2hyaW5rJyxcbiAgJ2ZsZXgtd3JhcCcsXG4gICdmbG9hdCcsXG4gICdmb250JyxcbiAgJ2ZvbnQtZGlzcGxheScsXG4gICdmb250LWZhbWlseScsXG4gICdmb250LWZlYXR1cmUtc2V0dGluZ3MnLFxuICAnZm9udC1rZXJuaW5nJyxcbiAgJ2ZvbnQtbGFuZ3VhZ2Utb3ZlcnJpZGUnLFxuICAnZm9udC1zaXplJyxcbiAgJ2ZvbnQtc2l6ZS1hZGp1c3QnLFxuICAnZm9udC1zbW9vdGhpbmcnLFxuICAnZm9udC1zdHJldGNoJyxcbiAgJ2ZvbnQtc3R5bGUnLFxuICAnZm9udC12YXJpYW50JyxcbiAgJ2ZvbnQtdmFyaWFudC1saWdhdHVyZXMnLFxuICAnZm9udC12YXJpYXRpb24tc2V0dGluZ3MnLFxuICAnZm9udC13ZWlnaHQnLFxuICAnaGVpZ2h0JyxcbiAgJ2h5cGhlbnMnLFxuICAnaWNvbicsXG4gICdpbWFnZS1vcmllbnRhdGlvbicsXG4gICdpbWFnZS1yZW5kZXJpbmcnLFxuICAnaW1hZ2UtcmVzb2x1dGlvbicsXG4gICdpbWUtbW9kZScsXG4gICdpbmhlcml0JyxcbiAgJ2luaXRpYWwnLFxuICAnanVzdGlmeS1jb250ZW50JyxcbiAgJ2xlZnQnLFxuICAnbGV0dGVyLXNwYWNpbmcnLFxuICAnbGluZS1oZWlnaHQnLFxuICAnbGlzdC1zdHlsZScsXG4gICdsaXN0LXN0eWxlLWltYWdlJyxcbiAgJ2xpc3Qtc3R5bGUtcG9zaXRpb24nLFxuICAnbGlzdC1zdHlsZS10eXBlJyxcbiAgJ21hcmdpbicsXG4gICdtYXJnaW4tYm90dG9tJyxcbiAgJ21hcmdpbi1sZWZ0JyxcbiAgJ21hcmdpbi1yaWdodCcsXG4gICdtYXJnaW4tdG9wJyxcbiAgJ21hcmtzJyxcbiAgJ21hc2snLFxuICAnbWF4LWhlaWdodCcsXG4gICdtYXgtd2lkdGgnLFxuICAnbWluLWhlaWdodCcsXG4gICdtaW4td2lkdGgnLFxuICAnbmF2LWRvd24nLFxuICAnbmF2LWluZGV4JyxcbiAgJ25hdi1sZWZ0JyxcbiAgJ25hdi1yaWdodCcsXG4gICduYXYtdXAnLFxuICAnbm9uZScsXG4gICdub3JtYWwnLFxuICAnb2JqZWN0LWZpdCcsXG4gICdvYmplY3QtcG9zaXRpb24nLFxuICAnb3BhY2l0eScsXG4gICdvcmRlcicsXG4gICdvcnBoYW5zJyxcbiAgJ291dGxpbmUnLFxuICAnb3V0bGluZS1jb2xvcicsXG4gICdvdXRsaW5lLW9mZnNldCcsXG4gICdvdXRsaW5lLXN0eWxlJyxcbiAgJ291dGxpbmUtd2lkdGgnLFxuICAnb3ZlcmZsb3cnLFxuICAnb3ZlcmZsb3ctd3JhcCcsXG4gICdvdmVyZmxvdy14JyxcbiAgJ292ZXJmbG93LXknLFxuICAncGFkZGluZycsXG4gICdwYWRkaW5nLWJvdHRvbScsXG4gICdwYWRkaW5nLWxlZnQnLFxuICAncGFkZGluZy1yaWdodCcsXG4gICdwYWRkaW5nLXRvcCcsXG4gICdwYWdlLWJyZWFrLWFmdGVyJyxcbiAgJ3BhZ2UtYnJlYWstYmVmb3JlJyxcbiAgJ3BhZ2UtYnJlYWstaW5zaWRlJyxcbiAgJ3BlcnNwZWN0aXZlJyxcbiAgJ3BlcnNwZWN0aXZlLW9yaWdpbicsXG4gICdwb2ludGVyLWV2ZW50cycsXG4gICdwb3NpdGlvbicsXG4gICdxdW90ZXMnLFxuICAncmVzaXplJyxcbiAgJ3JpZ2h0JyxcbiAgJ3NyYycsIC8vIEBmb250LWZhY2VcbiAgJ3RhYi1zaXplJyxcbiAgJ3RhYmxlLWxheW91dCcsXG4gICd0ZXh0LWFsaWduJyxcbiAgJ3RleHQtYWxpZ24tbGFzdCcsXG4gICd0ZXh0LWRlY29yYXRpb24nLFxuICAndGV4dC1kZWNvcmF0aW9uLWNvbG9yJyxcbiAgJ3RleHQtZGVjb3JhdGlvbi1saW5lJyxcbiAgJ3RleHQtZGVjb3JhdGlvbi1zdHlsZScsXG4gICd0ZXh0LWluZGVudCcsXG4gICd0ZXh0LW92ZXJmbG93JyxcbiAgJ3RleHQtcmVuZGVyaW5nJyxcbiAgJ3RleHQtc2hhZG93JyxcbiAgJ3RleHQtdHJhbnNmb3JtJyxcbiAgJ3RleHQtdW5kZXJsaW5lLXBvc2l0aW9uJyxcbiAgJ3RvcCcsXG4gICd0cmFuc2Zvcm0nLFxuICAndHJhbnNmb3JtLW9yaWdpbicsXG4gICd0cmFuc2Zvcm0tc3R5bGUnLFxuICAndHJhbnNpdGlvbicsXG4gICd0cmFuc2l0aW9uLWRlbGF5JyxcbiAgJ3RyYW5zaXRpb24tZHVyYXRpb24nLFxuICAndHJhbnNpdGlvbi1wcm9wZXJ0eScsXG4gICd0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbicsXG4gICd1bmljb2RlLWJpZGknLFxuICAndmVydGljYWwtYWxpZ24nLFxuICAndmlzaWJpbGl0eScsXG4gICd3aGl0ZS1zcGFjZScsXG4gICd3aWRvd3MnLFxuICAnd2lkdGgnLFxuICAnd29yZC1icmVhaycsXG4gICd3b3JkLXNwYWNpbmcnLFxuICAnd29yZC13cmFwJyxcbiAgJ3otaW5kZXgnXG4gIC8vIHJldmVyc2UgbWFrZXMgc3VyZSBsb25nZXIgYXR0cmlidXRlcyBgZm9udC13ZWlnaHRgIGFyZSBtYXRjaGVkIGZ1bGx5XG4gIC8vIGluc3RlYWQgb2YgZ2V0dGluZyBmYWxzZSBwb3NpdGl2ZXMgb24gc2F5IGBmb250YFxuXS5yZXZlcnNlKCk7XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiBAcmV0dXJucyB7UmVnRXhwfVxuICogKi9cblxuLyoqXG4gKiBAcGFyYW0ge1JlZ0V4cCB8IHN0cmluZyB9IHJlXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBzb3VyY2UocmUpIHtcbiAgaWYgKCFyZSkgcmV0dXJuIG51bGw7XG4gIGlmICh0eXBlb2YgcmUgPT09IFwic3RyaW5nXCIpIHJldHVybiByZTtcblxuICByZXR1cm4gcmUuc291cmNlO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7UmVnRXhwIHwgc3RyaW5nIH0gcmVcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGxvb2thaGVhZChyZSkge1xuICByZXR1cm4gY29uY2F0KCcoPz0nLCByZSwgJyknKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0gey4uLihSZWdFeHAgfCBzdHJpbmcpIH0gYXJnc1xuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gY29uY2F0KC4uLmFyZ3MpIHtcbiAgY29uc3Qgam9pbmVkID0gYXJncy5tYXAoKHgpID0+IHNvdXJjZSh4KSkuam9pbihcIlwiKTtcbiAgcmV0dXJuIGpvaW5lZDtcbn1cblxuLypcbkxhbmd1YWdlOiBDU1NcbkNhdGVnb3J5OiBjb21tb24sIGNzc1xuV2Vic2l0ZTogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTXG4qL1xuXG4vKiogQHR5cGUgTGFuZ3VhZ2VGbiAqL1xuZnVuY3Rpb24gY3NzKGhsanMpIHtcbiAgY29uc3QgbW9kZXMgPSBNT0RFUyhobGpzKTtcbiAgY29uc3QgRlVOQ1RJT05fRElTUEFUQ0ggPSB7XG4gICAgY2xhc3NOYW1lOiBcImJ1aWx0X2luXCIsXG4gICAgYmVnaW46IC9bXFx3LV0rKD89XFwoKS9cbiAgfTtcbiAgY29uc3QgVkVORE9SX1BSRUZJWCA9IHtcbiAgICBiZWdpbjogLy0od2Via2l0fG1venxtc3xvKS0oPz1bYS16XSkvXG4gIH07XG4gIGNvbnN0IEFUX01PRElGSUVSUyA9IFwiYW5kIG9yIG5vdCBvbmx5XCI7XG4gIGNvbnN0IEFUX1BST1BFUlRZX1JFID0gL0AtP1xcd1tcXHddKigtXFx3KykqLzsgLy8gQC13ZWJraXQta2V5ZnJhbWVzXG4gIGNvbnN0IElERU5UX1JFID0gJ1thLXpBLVotXVthLXpBLVowLTlfLV0qJztcbiAgY29uc3QgU1RSSU5HUyA9IFtcbiAgICBobGpzLkFQT1NfU1RSSU5HX01PREUsXG4gICAgaGxqcy5RVU9URV9TVFJJTkdfTU9ERVxuICBdO1xuXG4gIHJldHVybiB7XG4gICAgbmFtZTogJ0NTUycsXG4gICAgY2FzZV9pbnNlbnNpdGl2ZTogdHJ1ZSxcbiAgICBpbGxlZ2FsOiAvWz18J1xcJF0vLFxuICAgIGtleXdvcmRzOiB7XG4gICAgICBrZXlmcmFtZVBvc2l0aW9uOiBcImZyb20gdG9cIlxuICAgIH0sXG4gICAgY2xhc3NOYW1lQWxpYXNlczoge1xuICAgICAgLy8gZm9yIHZpc3VhbCBjb250aW51aXR5IHdpdGggYHRhZyB7fWAgYW5kIGJlY2F1c2Ugd2VcbiAgICAgIC8vIGRvbid0IGhhdmUgYSBncmVhdCBjbGFzcyBmb3IgdGhpcz9cbiAgICAgIGtleWZyYW1lUG9zaXRpb246IFwic2VsZWN0b3ItdGFnXCJcbiAgICB9LFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICBobGpzLkNfQkxPQ0tfQ09NTUVOVF9NT0RFLFxuICAgICAgVkVORE9SX1BSRUZJWCxcbiAgICAgIC8vIHRvIHJlY29nbml6ZSBrZXlmcmFtZSA0MCUgZXRjIHdoaWNoIGFyZSBvdXRzaWRlIHRoZSBzY29wZSBvZiBvdXJcbiAgICAgIC8vIGF0dHJpYnV0ZSB2YWx1ZSBtb2RlXG4gICAgICBobGpzLkNTU19OVU1CRVJfTU9ERSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnc2VsZWN0b3ItaWQnLFxuICAgICAgICBiZWdpbjogLyNbQS1aYS16MC05Xy1dKy8sXG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnc2VsZWN0b3ItY2xhc3MnLFxuICAgICAgICBiZWdpbjogJ1xcXFwuJyArIElERU5UX1JFLFxuICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgIH0sXG4gICAgICBtb2Rlcy5BVFRSSUJVVEVfU0VMRUNUT1JfTU9ERSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnc2VsZWN0b3ItcHNldWRvJyxcbiAgICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBiZWdpbjogJzooJyArIFBTRVVET19DTEFTU0VTLmpvaW4oJ3wnKSArICcpJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgYmVnaW46ICc6OignICsgUFNFVURPX0VMRU1FTlRTLmpvaW4oJ3wnKSArICcpJ1xuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIC8vIHdlIG1heSBhY3R1YWxseSBuZWVkIHRoaXMgKDEyLzIwMjApXG4gICAgICAvLyB7IC8vIHBzZXVkby1zZWxlY3RvciBwYXJhbXNcbiAgICAgIC8vICAgYmVnaW46IC9cXCgvLFxuICAgICAgLy8gICBlbmQ6IC9cXCkvLFxuICAgICAgLy8gICBjb250YWluczogWyBobGpzLkNTU19OVU1CRVJfTU9ERSBdXG4gICAgICAvLyB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdhdHRyaWJ1dGUnLFxuICAgICAgICBiZWdpbjogJ1xcXFxiKCcgKyBBVFRSSUJVVEVTLmpvaW4oJ3wnKSArICcpXFxcXGInXG4gICAgICB9LFxuICAgICAgLy8gYXR0cmlidXRlIHZhbHVlc1xuICAgICAge1xuICAgICAgICBiZWdpbjogJzonLFxuICAgICAgICBlbmQ6ICdbO31dJyxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICBtb2Rlcy5IRVhDT0xPUixcbiAgICAgICAgICBtb2Rlcy5JTVBPUlRBTlQsXG4gICAgICAgICAgaGxqcy5DU1NfTlVNQkVSX01PREUsXG4gICAgICAgICAgLi4uU1RSSU5HUyxcbiAgICAgICAgICAvLyBuZWVkZWQgdG8gaGlnaGxpZ2h0IHRoZXNlIGFzIHN0cmluZ3MgYW5kIHRvIGF2b2lkIGlzc3VlcyB3aXRoXG4gICAgICAgICAgLy8gaWxsZWdhbCBjaGFyYWN0ZXJzIHRoYXQgbWlnaHQgYmUgaW5zaWRlIHVybHMgdGhhdCB3b3VsZCB0aWdnZXIgdGhlXG4gICAgICAgICAgLy8gbGFuZ3VhZ2VzIGlsbGVnYWwgc3RhY2tcbiAgICAgICAgICB7XG4gICAgICAgICAgICBiZWdpbjogLyh1cmx8ZGF0YS11cmkpXFwoLyxcbiAgICAgICAgICAgIGVuZDogL1xcKS8sXG4gICAgICAgICAgICByZWxldmFuY2U6IDAsIC8vIGZyb20ga2V5d29yZHNcbiAgICAgICAgICAgIGtleXdvcmRzOiB7XG4gICAgICAgICAgICAgIGJ1aWx0X2luOiBcInVybCBkYXRhLXVyaVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICAvLyBhbnkgY2hhcmFjdGVyIG90aGVyIHRoYW4gYClgIGFzIGluIGB1cmwoKWAgd2lsbCBiZSB0aGUgc3RhcnRcbiAgICAgICAgICAgICAgICAvLyBvZiBhIHN0cmluZywgd2hpY2ggZW5kcyB3aXRoIGApYCAoZnJvbSB0aGUgcGFyZW50IG1vZGUpXG4gICAgICAgICAgICAgICAgYmVnaW46IC9bXildLyxcbiAgICAgICAgICAgICAgICBlbmRzV2l0aFBhcmVudDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBleGNsdWRlRW5kOiB0cnVlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9LFxuICAgICAgICAgIEZVTkNUSU9OX0RJU1BBVENIXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiBsb29rYWhlYWQoL0AvKSxcbiAgICAgICAgZW5kOiAnW3s7XScsXG4gICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgaWxsZWdhbDogLzovLCAvLyBicmVhayBvbiBMZXNzIHZhcmlhYmxlcyBAdmFyOiAuLi5cbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICdrZXl3b3JkJyxcbiAgICAgICAgICAgIGJlZ2luOiBBVF9QUk9QRVJUWV9SRVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgYmVnaW46IC9cXHMvLFxuICAgICAgICAgICAgZW5kc1dpdGhQYXJlbnQ6IHRydWUsXG4gICAgICAgICAgICBleGNsdWRlRW5kOiB0cnVlLFxuICAgICAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICAgICAga2V5d29yZHM6IHtcbiAgICAgICAgICAgICAgJHBhdHRlcm46IC9bYS16LV0rLyxcbiAgICAgICAgICAgICAga2V5d29yZDogQVRfTU9ESUZJRVJTLFxuICAgICAgICAgICAgICBhdHRyaWJ1dGU6IE1FRElBX0ZFQVRVUkVTLmpvaW4oXCIgXCIpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGJlZ2luOiAvW2Etei1dKyg/PTopLyxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwiYXR0cmlidXRlXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgLi4uU1RSSU5HUyxcbiAgICAgICAgICAgICAgaGxqcy5DU1NfTlVNQkVSX01PREVcbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3NlbGVjdG9yLXRhZycsXG4gICAgICAgIGJlZ2luOiAnXFxcXGIoJyArIFRBR1Muam9pbignfCcpICsgJylcXFxcYidcbiAgICAgIH1cbiAgICBdXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY3NzO1xuIiwiLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqIEByZXR1cm5zIHtSZWdFeHB9XG4gKiAqL1xuXG4vKipcbiAqIEBwYXJhbSB7UmVnRXhwIHwgc3RyaW5nIH0gcmVcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIHNvdXJjZShyZSkge1xuICBpZiAoIXJlKSByZXR1cm4gbnVsbDtcbiAgaWYgKHR5cGVvZiByZSA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIHJlO1xuXG4gIHJldHVybiByZS5zb3VyY2U7XG59XG5cbi8qKlxuICogQHBhcmFtIHtSZWdFeHAgfCBzdHJpbmcgfSByZVxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gbG9va2FoZWFkKHJlKSB7XG4gIHJldHVybiBjb25jYXQoJyg/PScsIHJlLCAnKScpO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7UmVnRXhwIHwgc3RyaW5nIH0gcmVcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIG9wdGlvbmFsKHJlKSB7XG4gIHJldHVybiBjb25jYXQoJygnLCByZSwgJyk/Jyk7XG59XG5cbi8qKlxuICogQHBhcmFtIHsuLi4oUmVnRXhwIHwgc3RyaW5nKSB9IGFyZ3NcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGNvbmNhdCguLi5hcmdzKSB7XG4gIGNvbnN0IGpvaW5lZCA9IGFyZ3MubWFwKCh4KSA9PiBzb3VyY2UoeCkpLmpvaW4oXCJcIik7XG4gIHJldHVybiBqb2luZWQ7XG59XG5cbi8qKlxuICogQW55IG9mIHRoZSBwYXNzZWQgZXhwcmVzc3Npb25zIG1heSBtYXRjaFxuICpcbiAqIENyZWF0ZXMgYSBodWdlIHRoaXMgfCB0aGlzIHwgdGhhdCB8IHRoYXQgbWF0Y2hcbiAqIEBwYXJhbSB7KFJlZ0V4cCB8IHN0cmluZylbXSB9IGFyZ3NcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGVpdGhlciguLi5hcmdzKSB7XG4gIGNvbnN0IGpvaW5lZCA9ICcoJyArIGFyZ3MubWFwKCh4KSA9PiBzb3VyY2UoeCkpLmpvaW4oXCJ8XCIpICsgXCIpXCI7XG4gIHJldHVybiBqb2luZWQ7XG59XG5cbi8qXG5MYW5ndWFnZTogSFRNTCwgWE1MXG5XZWJzaXRlOiBodHRwczovL3d3dy53My5vcmcvWE1ML1xuQ2F0ZWdvcnk6IGNvbW1vblxuQXVkaXQ6IDIwMjBcbiovXG5cbi8qKiBAdHlwZSBMYW5ndWFnZUZuICovXG5mdW5jdGlvbiB4bWwoaGxqcykge1xuICAvLyBFbGVtZW50IG5hbWVzIGNhbiBjb250YWluIGxldHRlcnMsIGRpZ2l0cywgaHlwaGVucywgdW5kZXJzY29yZXMsIGFuZCBwZXJpb2RzXG4gIGNvbnN0IFRBR19OQU1FX1JFID0gY29uY2F0KC9bQS1aX10vLCBvcHRpb25hbCgvW0EtWjAtOV8uLV0qOi8pLCAvW0EtWjAtOV8uLV0qLyk7XG4gIGNvbnN0IFhNTF9JREVOVF9SRSA9IC9bQS1aYS16MC05Ll86LV0rLztcbiAgY29uc3QgWE1MX0VOVElUSUVTID0ge1xuICAgIGNsYXNzTmFtZTogJ3N5bWJvbCcsXG4gICAgYmVnaW46IC8mW2Etel0rO3wmI1swLTldKzt8JiN4W2EtZjAtOV0rOy9cbiAgfTtcbiAgY29uc3QgWE1MX01FVEFfS0VZV09SRFMgPSB7XG4gICAgYmVnaW46IC9cXHMvLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ21ldGEta2V5d29yZCcsXG4gICAgICAgIGJlZ2luOiAvIz9bYS16X11bYS16MS05Xy1dKy8sXG4gICAgICAgIGlsbGVnYWw6IC9cXG4vXG4gICAgICB9XG4gICAgXVxuICB9O1xuICBjb25zdCBYTUxfTUVUQV9QQVJfS0VZV09SRFMgPSBobGpzLmluaGVyaXQoWE1MX01FVEFfS0VZV09SRFMsIHtcbiAgICBiZWdpbjogL1xcKC8sXG4gICAgZW5kOiAvXFwpL1xuICB9KTtcbiAgY29uc3QgQVBPU19NRVRBX1NUUklOR19NT0RFID0gaGxqcy5pbmhlcml0KGhsanMuQVBPU19TVFJJTkdfTU9ERSwge1xuICAgIGNsYXNzTmFtZTogJ21ldGEtc3RyaW5nJ1xuICB9KTtcbiAgY29uc3QgUVVPVEVfTUVUQV9TVFJJTkdfTU9ERSA9IGhsanMuaW5oZXJpdChobGpzLlFVT1RFX1NUUklOR19NT0RFLCB7XG4gICAgY2xhc3NOYW1lOiAnbWV0YS1zdHJpbmcnXG4gIH0pO1xuICBjb25zdCBUQUdfSU5URVJOQUxTID0ge1xuICAgIGVuZHNXaXRoUGFyZW50OiB0cnVlLFxuICAgIGlsbGVnYWw6IC88LyxcbiAgICByZWxldmFuY2U6IDAsXG4gICAgY29udGFpbnM6IFtcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnYXR0cicsXG4gICAgICAgIGJlZ2luOiBYTUxfSURFTlRfUkUsXG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46IC89XFxzKi8sXG4gICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgZW5kc1BhcmVudDogdHJ1ZSxcbiAgICAgICAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBiZWdpbjogL1wiLyxcbiAgICAgICAgICAgICAgICBlbmQ6IC9cIi8sXG4gICAgICAgICAgICAgICAgY29udGFpbnM6IFsgWE1MX0VOVElUSUVTIF1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGJlZ2luOiAvJy8sXG4gICAgICAgICAgICAgICAgZW5kOiAvJy8sXG4gICAgICAgICAgICAgICAgY29udGFpbnM6IFsgWE1MX0VOVElUSUVTIF1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGJlZ2luOiAvW15cXHNcIic9PD5gXSsvXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdXG4gIH07XG4gIHJldHVybiB7XG4gICAgbmFtZTogJ0hUTUwsIFhNTCcsXG4gICAgYWxpYXNlczogW1xuICAgICAgJ2h0bWwnLFxuICAgICAgJ3hodG1sJyxcbiAgICAgICdyc3MnLFxuICAgICAgJ2F0b20nLFxuICAgICAgJ3hqYicsXG4gICAgICAneHNkJyxcbiAgICAgICd4c2wnLFxuICAgICAgJ3BsaXN0JyxcbiAgICAgICd3c2YnLFxuICAgICAgJ3N2ZydcbiAgICBdLFxuICAgIGNhc2VfaW5zZW5zaXRpdmU6IHRydWUsXG4gICAgY29udGFpbnM6IFtcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnbWV0YScsXG4gICAgICAgIGJlZ2luOiAvPCFbYS16XS8sXG4gICAgICAgIGVuZDogLz4vLFxuICAgICAgICByZWxldmFuY2U6IDEwLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIFhNTF9NRVRBX0tFWVdPUkRTLFxuICAgICAgICAgIFFVT1RFX01FVEFfU1RSSU5HX01PREUsXG4gICAgICAgICAgQVBPU19NRVRBX1NUUklOR19NT0RFLFxuICAgICAgICAgIFhNTF9NRVRBX1BBUl9LRVlXT1JEUyxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBiZWdpbjogL1xcWy8sXG4gICAgICAgICAgICBlbmQ6IC9cXF0vLFxuICAgICAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ21ldGEnLFxuICAgICAgICAgICAgICAgIGJlZ2luOiAvPCFbYS16XS8sXG4gICAgICAgICAgICAgICAgZW5kOiAvPi8sXG4gICAgICAgICAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAgICAgICAgIFhNTF9NRVRBX0tFWVdPUkRTLFxuICAgICAgICAgICAgICAgICAgWE1MX01FVEFfUEFSX0tFWVdPUkRTLFxuICAgICAgICAgICAgICAgICAgUVVPVEVfTUVUQV9TVFJJTkdfTU9ERSxcbiAgICAgICAgICAgICAgICAgIEFQT1NfTUVUQV9TVFJJTkdfTU9ERVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIGhsanMuQ09NTUVOVChcbiAgICAgICAgLzwhLS0vLFxuICAgICAgICAvLS0+LyxcbiAgICAgICAge1xuICAgICAgICAgIHJlbGV2YW5jZTogMTBcbiAgICAgICAgfVxuICAgICAgKSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46IC88IVxcW0NEQVRBXFxbLyxcbiAgICAgICAgZW5kOiAvXFxdXFxdPi8sXG4gICAgICAgIHJlbGV2YW5jZTogMTBcbiAgICAgIH0sXG4gICAgICBYTUxfRU5USVRJRVMsXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ21ldGEnLFxuICAgICAgICBiZWdpbjogLzxcXD94bWwvLFxuICAgICAgICBlbmQ6IC9cXD8+LyxcbiAgICAgICAgcmVsZXZhbmNlOiAxMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAndGFnJyxcbiAgICAgICAgLypcbiAgICAgICAgVGhlIGxvb2thaGVhZCBwYXR0ZXJuICg/PS4uLikgZW5zdXJlcyB0aGF0ICdiZWdpbicgb25seSBtYXRjaGVzXG4gICAgICAgICc8c3R5bGUnIGFzIGEgc2luZ2xlIHdvcmQsIGZvbGxvd2VkIGJ5IGEgd2hpdGVzcGFjZSBvciBhblxuICAgICAgICBlbmRpbmcgYnJha2V0LiBUaGUgJyQnIGlzIG5lZWRlZCBmb3IgdGhlIGxleGVtZSB0byBiZSByZWNvZ25pemVkXG4gICAgICAgIGJ5IGhsanMuc3ViTW9kZSgpIHRoYXQgdGVzdHMgbGV4ZW1lcyBvdXRzaWRlIHRoZSBzdHJlYW0uXG4gICAgICAgICovXG4gICAgICAgIGJlZ2luOiAvPHN0eWxlKD89XFxzfD4pLyxcbiAgICAgICAgZW5kOiAvPi8sXG4gICAgICAgIGtleXdvcmRzOiB7XG4gICAgICAgICAgbmFtZTogJ3N0eWxlJ1xuICAgICAgICB9LFxuICAgICAgICBjb250YWluczogWyBUQUdfSU5URVJOQUxTIF0sXG4gICAgICAgIHN0YXJ0czoge1xuICAgICAgICAgIGVuZDogLzxcXC9zdHlsZT4vLFxuICAgICAgICAgIHJldHVybkVuZDogdHJ1ZSxcbiAgICAgICAgICBzdWJMYW5ndWFnZTogW1xuICAgICAgICAgICAgJ2NzcycsXG4gICAgICAgICAgICAneG1sJ1xuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAndGFnJyxcbiAgICAgICAgLy8gU2VlIHRoZSBjb21tZW50IGluIHRoZSA8c3R5bGUgdGFnIGFib3V0IHRoZSBsb29rYWhlYWQgcGF0dGVyblxuICAgICAgICBiZWdpbjogLzxzY3JpcHQoPz1cXHN8PikvLFxuICAgICAgICBlbmQ6IC8+LyxcbiAgICAgICAga2V5d29yZHM6IHtcbiAgICAgICAgICBuYW1lOiAnc2NyaXB0J1xuICAgICAgICB9LFxuICAgICAgICBjb250YWluczogWyBUQUdfSU5URVJOQUxTIF0sXG4gICAgICAgIHN0YXJ0czoge1xuICAgICAgICAgIGVuZDogLzxcXC9zY3JpcHQ+LyxcbiAgICAgICAgICByZXR1cm5FbmQ6IHRydWUsXG4gICAgICAgICAgc3ViTGFuZ3VhZ2U6IFtcbiAgICAgICAgICAgICdqYXZhc2NyaXB0JyxcbiAgICAgICAgICAgICdoYW5kbGViYXJzJyxcbiAgICAgICAgICAgICd4bWwnXG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgLy8gd2UgbmVlZCB0aGlzIGZvciBub3cgZm9yIGpTWFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICd0YWcnLFxuICAgICAgICBiZWdpbjogLzw+fDxcXC8+L1xuICAgICAgfSxcbiAgICAgIC8vIG9wZW4gdGFnXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3RhZycsXG4gICAgICAgIGJlZ2luOiBjb25jYXQoXG4gICAgICAgICAgLzwvLFxuICAgICAgICAgIGxvb2thaGVhZChjb25jYXQoXG4gICAgICAgICAgICBUQUdfTkFNRV9SRSxcbiAgICAgICAgICAgIC8vIDx0YWcvPlxuICAgICAgICAgICAgLy8gPHRhZz5cbiAgICAgICAgICAgIC8vIDx0YWcgLi4uXG4gICAgICAgICAgICBlaXRoZXIoL1xcLz4vLCAvPi8sIC9cXHMvKVxuICAgICAgICAgICkpXG4gICAgICAgICksXG4gICAgICAgIGVuZDogL1xcLz8+LyxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICduYW1lJyxcbiAgICAgICAgICAgIGJlZ2luOiBUQUdfTkFNRV9SRSxcbiAgICAgICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgICAgIHN0YXJ0czogVEFHX0lOVEVSTkFMU1xuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIC8vIGNsb3NlIHRhZ1xuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICd0YWcnLFxuICAgICAgICBiZWdpbjogY29uY2F0KFxuICAgICAgICAgIC88XFwvLyxcbiAgICAgICAgICBsb29rYWhlYWQoY29uY2F0KFxuICAgICAgICAgICAgVEFHX05BTUVfUkUsIC8+L1xuICAgICAgICAgICkpXG4gICAgICAgICksXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAnbmFtZScsXG4gICAgICAgICAgICBiZWdpbjogVEFHX05BTUVfUkUsXG4gICAgICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJlZ2luOiAvPi8sXG4gICAgICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgICAgICBlbmRzUGFyZW50OiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgXVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHhtbDtcbiIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2F0b20tb25lLWRhcmsuY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0e3VzZVN0YXRlIGFzIG4sdXNlUmVkdWNlciBhcyB0LHVzZUVmZmVjdCBhcyBlLHVzZUxheW91dEVmZmVjdCBhcyByLHVzZVJlZiBhcyB1LHVzZUltcGVyYXRpdmVIYW5kbGUgYXMgbyx1c2VNZW1vIGFzIGksdXNlQ2FsbGJhY2sgYXMgbCx1c2VDb250ZXh0IGFzIGYsdXNlRGVidWdWYWx1ZSBhcyBjfWZyb21cInByZWFjdC9ob29rc1wiO2V4cG9ydCpmcm9tXCJwcmVhY3QvaG9va3NcIjtpbXBvcnR7Q29tcG9uZW50IGFzIGEsY3JlYXRlRWxlbWVudCBhcyBzLG9wdGlvbnMgYXMgaCx0b0NoaWxkQXJyYXkgYXMgdixGcmFnbWVudCBhcyBkLHJlbmRlciBhcyBwLGh5ZHJhdGUgYXMgbSxjbG9uZUVsZW1lbnQgYXMgeSxjcmVhdGVSZWYgYXMgYixjcmVhdGVDb250ZXh0IGFzIF99ZnJvbVwicHJlYWN0XCI7ZXhwb3J0e2NyZWF0ZUVsZW1lbnQsY3JlYXRlQ29udGV4dCxjcmVhdGVSZWYsRnJhZ21lbnQsQ29tcG9uZW50fWZyb21cInByZWFjdFwiO2Z1bmN0aW9uIFMobix0KXtmb3IodmFyIGUgaW4gdCluW2VdPXRbZV07cmV0dXJuIG59ZnVuY3Rpb24gQyhuLHQpe2Zvcih2YXIgZSBpbiBuKWlmKFwiX19zb3VyY2VcIiE9PWUmJiEoZSBpbiB0KSlyZXR1cm4hMDtmb3IodmFyIHIgaW4gdClpZihcIl9fc291cmNlXCIhPT1yJiZuW3JdIT09dFtyXSlyZXR1cm4hMDtyZXR1cm4hMX1mdW5jdGlvbiBFKG4pe3RoaXMucHJvcHM9bn1mdW5jdGlvbiBnKG4sdCl7ZnVuY3Rpb24gZShuKXt2YXIgZT10aGlzLnByb3BzLnJlZixyPWU9PW4ucmVmO3JldHVybiFyJiZlJiYoZS5jYWxsP2UobnVsbCk6ZS5jdXJyZW50PW51bGwpLHQ/IXQodGhpcy5wcm9wcyxuKXx8IXI6Qyh0aGlzLnByb3BzLG4pfWZ1bmN0aW9uIHIodCl7cmV0dXJuIHRoaXMuc2hvdWxkQ29tcG9uZW50VXBkYXRlPWUscyhuLHQpfXJldHVybiByLmRpc3BsYXlOYW1lPVwiTWVtbyhcIisobi5kaXNwbGF5TmFtZXx8bi5uYW1lKStcIilcIixyLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50PSEwLHIuX19mPSEwLHJ9KEUucHJvdG90eXBlPW5ldyBhKS5pc1B1cmVSZWFjdENvbXBvbmVudD0hMCxFLnByb3RvdHlwZS5zaG91bGRDb21wb25lbnRVcGRhdGU9ZnVuY3Rpb24obix0KXtyZXR1cm4gQyh0aGlzLnByb3BzLG4pfHxDKHRoaXMuc3RhdGUsdCl9O3ZhciB3PWguX19iO2guX19iPWZ1bmN0aW9uKG4pe24udHlwZSYmbi50eXBlLl9fZiYmbi5yZWYmJihuLnByb3BzLnJlZj1uLnJlZixuLnJlZj1udWxsKSx3JiZ3KG4pfTt2YXIgUj1cInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wuZm9yJiZTeW1ib2wuZm9yKFwicmVhY3QuZm9yd2FyZF9yZWZcIil8fDM5MTE7ZnVuY3Rpb24geChuKXtmdW5jdGlvbiB0KHQsZSl7dmFyIHI9Uyh7fSx0KTtyZXR1cm4gZGVsZXRlIHIucmVmLG4ociwoZT10LnJlZnx8ZSkmJihcIm9iamVjdFwiIT10eXBlb2YgZXx8XCJjdXJyZW50XCJpbiBlKT9lOm51bGwpfXJldHVybiB0LiQkdHlwZW9mPVIsdC5yZW5kZXI9dCx0LnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50PXQuX19mPSEwLHQuZGlzcGxheU5hbWU9XCJGb3J3YXJkUmVmKFwiKyhuLmRpc3BsYXlOYW1lfHxuLm5hbWUpK1wiKVwiLHR9dmFyIE49ZnVuY3Rpb24obix0KXtyZXR1cm4gbnVsbD09bj9udWxsOnYodihuKS5tYXAodCkpfSxrPXttYXA6Tixmb3JFYWNoOk4sY291bnQ6ZnVuY3Rpb24obil7cmV0dXJuIG4/dihuKS5sZW5ndGg6MH0sb25seTpmdW5jdGlvbihuKXt2YXIgdD12KG4pO2lmKDEhPT10Lmxlbmd0aCl0aHJvd1wiQ2hpbGRyZW4ub25seVwiO3JldHVybiB0WzBdfSx0b0FycmF5OnZ9LEE9aC5fX2U7aC5fX2U9ZnVuY3Rpb24obix0LGUpe2lmKG4udGhlbilmb3IodmFyIHIsdT10O3U9dS5fXzspaWYoKHI9dS5fX2MpJiZyLl9fYylyZXR1cm4gbnVsbD09dC5fX2UmJih0Ll9fZT1lLl9fZSx0Ll9faz1lLl9fayksci5fX2Mobix0KTtBKG4sdCxlKX07dmFyIE89aC51bm1vdW50O2Z1bmN0aW9uIEwoKXt0aGlzLl9fdT0wLHRoaXMudD1udWxsLHRoaXMuX19iPW51bGx9ZnVuY3Rpb24gVShuKXt2YXIgdD1uLl9fLl9fYztyZXR1cm4gdCYmdC5fX2UmJnQuX19lKG4pfWZ1bmN0aW9uIEYobil7dmFyIHQsZSxyO2Z1bmN0aW9uIHUodSl7aWYodHx8KHQ9bigpKS50aGVuKGZ1bmN0aW9uKG4pe2U9bi5kZWZhdWx0fHxufSxmdW5jdGlvbihuKXtyPW59KSxyKXRocm93IHI7aWYoIWUpdGhyb3cgdDtyZXR1cm4gcyhlLHUpfXJldHVybiB1LmRpc3BsYXlOYW1lPVwiTGF6eVwiLHUuX19mPSEwLHV9ZnVuY3Rpb24gTSgpe3RoaXMudT1udWxsLHRoaXMubz1udWxsfWgudW5tb3VudD1mdW5jdGlvbihuKXt2YXIgdD1uLl9fYzt0JiZ0Ll9fUiYmdC5fX1IoKSx0JiYhMD09PW4uX19oJiYobi50eXBlPW51bGwpLE8mJk8obil9LChMLnByb3RvdHlwZT1uZXcgYSkuX19jPWZ1bmN0aW9uKG4sdCl7dmFyIGU9dC5fX2Mscj10aGlzO251bGw9PXIudCYmKHIudD1bXSksci50LnB1c2goZSk7dmFyIHU9VShyLl9fdiksbz0hMSxpPWZ1bmN0aW9uKCl7b3x8KG89ITAsZS5fX1I9bnVsbCx1P3UobCk6bCgpKX07ZS5fX1I9aTt2YXIgbD1mdW5jdGlvbigpe2lmKCEtLXIuX191KXtpZihyLnN0YXRlLl9fZSl7dmFyIG49ci5zdGF0ZS5fX2U7ci5fX3YuX19rWzBdPWZ1bmN0aW9uIG4odCxlLHIpe3JldHVybiB0JiYodC5fX3Y9bnVsbCx0Ll9faz10Ll9fayYmdC5fX2subWFwKGZ1bmN0aW9uKHQpe3JldHVybiBuKHQsZSxyKX0pLHQuX19jJiZ0Ll9fYy5fX1A9PT1lJiYodC5fX2UmJnIuaW5zZXJ0QmVmb3JlKHQuX19lLHQuX19kKSx0Ll9fYy5fX2U9ITAsdC5fX2MuX19QPXIpKSx0fShuLG4uX19jLl9fUCxuLl9fYy5fX08pfXZhciB0O2ZvcihyLnNldFN0YXRlKHtfX2U6ci5fX2I9bnVsbH0pO3Q9ci50LnBvcCgpOyl0LmZvcmNlVXBkYXRlKCl9fSxmPSEwPT09dC5fX2g7ci5fX3UrK3x8Znx8ci5zZXRTdGF0ZSh7X19lOnIuX19iPXIuX192Ll9fa1swXX0pLG4udGhlbihpLGkpfSxMLnByb3RvdHlwZS5jb21wb25lbnRXaWxsVW5tb3VudD1mdW5jdGlvbigpe3RoaXMudD1bXX0sTC5wcm90b3R5cGUucmVuZGVyPWZ1bmN0aW9uKG4sdCl7aWYodGhpcy5fX2Ipe2lmKHRoaXMuX192Ll9fayl7dmFyIGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxyPXRoaXMuX192Ll9fa1swXS5fX2M7dGhpcy5fX3YuX19rWzBdPWZ1bmN0aW9uIG4odCxlLHIpe3JldHVybiB0JiYodC5fX2MmJnQuX19jLl9fSCYmKHQuX19jLl9fSC5fXy5mb3JFYWNoKGZ1bmN0aW9uKG4pe1wiZnVuY3Rpb25cIj09dHlwZW9mIG4uX19jJiZuLl9fYygpfSksdC5fX2MuX19IPW51bGwpLG51bGwhPSh0PVMoe30sdCkpLl9fYyYmKHQuX19jLl9fUD09PXImJih0Ll9fYy5fX1A9ZSksdC5fX2M9bnVsbCksdC5fX2s9dC5fX2smJnQuX19rLm1hcChmdW5jdGlvbih0KXtyZXR1cm4gbih0LGUscil9KSksdH0odGhpcy5fX2IsZSxyLl9fTz1yLl9fUCl9dGhpcy5fX2I9bnVsbH12YXIgdT10Ll9fZSYmcyhkLG51bGwsbi5mYWxsYmFjayk7cmV0dXJuIHUmJih1Ll9faD1udWxsKSxbcyhkLG51bGwsdC5fX2U/bnVsbDpuLmNoaWxkcmVuKSx1XX07dmFyIFQ9ZnVuY3Rpb24obix0LGUpe2lmKCsrZVsxXT09PWVbMF0mJm4uby5kZWxldGUodCksbi5wcm9wcy5yZXZlYWxPcmRlciYmKFwidFwiIT09bi5wcm9wcy5yZXZlYWxPcmRlclswXXx8IW4uby5zaXplKSlmb3IoZT1uLnU7ZTspe2Zvcig7ZS5sZW5ndGg+MzspZS5wb3AoKSgpO2lmKGVbMV08ZVswXSlicmVhaztuLnU9ZT1lWzJdfX07ZnVuY3Rpb24gRChuKXtyZXR1cm4gdGhpcy5nZXRDaGlsZENvbnRleHQ9ZnVuY3Rpb24oKXtyZXR1cm4gbi5jb250ZXh0fSxuLmNoaWxkcmVufWZ1bmN0aW9uIEkobil7dmFyIHQ9dGhpcyxlPW4uaTt0LmNvbXBvbmVudFdpbGxVbm1vdW50PWZ1bmN0aW9uKCl7cChudWxsLHQubCksdC5sPW51bGwsdC5pPW51bGx9LHQuaSYmdC5pIT09ZSYmdC5jb21wb25lbnRXaWxsVW5tb3VudCgpLG4uX192Pyh0Lmx8fCh0Lmk9ZSx0Lmw9e25vZGVUeXBlOjEscGFyZW50Tm9kZTplLGNoaWxkTm9kZXM6W10sYXBwZW5kQ2hpbGQ6ZnVuY3Rpb24obil7dGhpcy5jaGlsZE5vZGVzLnB1c2gobiksdC5pLmFwcGVuZENoaWxkKG4pfSxpbnNlcnRCZWZvcmU6ZnVuY3Rpb24obixlKXt0aGlzLmNoaWxkTm9kZXMucHVzaChuKSx0LmkuYXBwZW5kQ2hpbGQobil9LHJlbW92ZUNoaWxkOmZ1bmN0aW9uKG4pe3RoaXMuY2hpbGROb2Rlcy5zcGxpY2UodGhpcy5jaGlsZE5vZGVzLmluZGV4T2Yobik+Pj4xLDEpLHQuaS5yZW1vdmVDaGlsZChuKX19KSxwKHMoRCx7Y29udGV4dDp0LmNvbnRleHR9LG4uX192KSx0LmwpKTp0LmwmJnQuY29tcG9uZW50V2lsbFVubW91bnQoKX1mdW5jdGlvbiBXKG4sdCl7cmV0dXJuIHMoSSx7X192Om4saTp0fSl9KE0ucHJvdG90eXBlPW5ldyBhKS5fX2U9ZnVuY3Rpb24obil7dmFyIHQ9dGhpcyxlPVUodC5fX3YpLHI9dC5vLmdldChuKTtyZXR1cm4gclswXSsrLGZ1bmN0aW9uKHUpe3ZhciBvPWZ1bmN0aW9uKCl7dC5wcm9wcy5yZXZlYWxPcmRlcj8oci5wdXNoKHUpLFQodCxuLHIpKTp1KCl9O2U/ZShvKTpvKCl9fSxNLnByb3RvdHlwZS5yZW5kZXI9ZnVuY3Rpb24obil7dGhpcy51PW51bGwsdGhpcy5vPW5ldyBNYXA7dmFyIHQ9dihuLmNoaWxkcmVuKTtuLnJldmVhbE9yZGVyJiZcImJcIj09PW4ucmV2ZWFsT3JkZXJbMF0mJnQucmV2ZXJzZSgpO2Zvcih2YXIgZT10Lmxlbmd0aDtlLS07KXRoaXMuby5zZXQodFtlXSx0aGlzLnU9WzEsMCx0aGlzLnVdKTtyZXR1cm4gbi5jaGlsZHJlbn0sTS5wcm90b3R5cGUuY29tcG9uZW50RGlkVXBkYXRlPU0ucHJvdG90eXBlLmNvbXBvbmVudERpZE1vdW50PWZ1bmN0aW9uKCl7dmFyIG49dGhpczt0aGlzLm8uZm9yRWFjaChmdW5jdGlvbih0LGUpe1QobixlLHQpfSl9O3ZhciBqPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlN5bWJvbC5mb3ImJlN5bWJvbC5mb3IoXCJyZWFjdC5lbGVtZW50XCIpfHw2MDEwMyxQPS9eKD86YWNjZW50fGFsaWdubWVudHxhcmFiaWN8YmFzZWxpbmV8Y2FwfGNsaXAoPyFQYXRoVSl8Y29sb3J8ZmlsbHxmbG9vZHxmb250fGdseXBoKD8hUil8aG9yaXp8bWFya2VyKD8hSHxXfFUpfG92ZXJsaW5lfHBhaW50fHN0b3B8c3RyaWtldGhyb3VnaHxzdHJva2V8dGV4dCg/IUwpfHVuZGVybGluZXx1bmljb2RlfHVuaXRzfHZ8dmVjdG9yfHZlcnR8d29yZHx3cml0aW5nfHgoPyFDKSlbQS1aXS8sVj1mdW5jdGlvbihuKXtyZXR1cm4oXCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmXCJzeW1ib2xcIj09dHlwZW9mIFN5bWJvbCgpPy9maWx8Y2hlfHJhZC9pOi9maWx8Y2hlfHJhL2kpLnRlc3Qobil9O2Z1bmN0aW9uIHoobix0LGUpe3JldHVybiBudWxsPT10Ll9fayYmKHQudGV4dENvbnRlbnQ9XCJcIikscChuLHQpLFwiZnVuY3Rpb25cIj09dHlwZW9mIGUmJmUoKSxuP24uX19jOm51bGx9ZnVuY3Rpb24gQihuLHQsZSl7cmV0dXJuIG0obix0KSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBlJiZlKCksbj9uLl9fYzpudWxsfWEucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQ9e30sW1wiY29tcG9uZW50V2lsbE1vdW50XCIsXCJjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzXCIsXCJjb21wb25lbnRXaWxsVXBkYXRlXCJdLmZvckVhY2goZnVuY3Rpb24obil7T2JqZWN0LmRlZmluZVByb3BlcnR5KGEucHJvdG90eXBlLG4se2NvbmZpZ3VyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpc1tcIlVOU0FGRV9cIituXX0sc2V0OmZ1bmN0aW9uKHQpe09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLG4se2NvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTp0fSl9fSl9KTt2YXIgSD1oLmV2ZW50O2Z1bmN0aW9uIFooKXt9ZnVuY3Rpb24gWSgpe3JldHVybiB0aGlzLmNhbmNlbEJ1YmJsZX1mdW5jdGlvbiAkKCl7cmV0dXJuIHRoaXMuZGVmYXVsdFByZXZlbnRlZH1oLmV2ZW50PWZ1bmN0aW9uKG4pe3JldHVybiBIJiYobj1IKG4pKSxuLnBlcnNpc3Q9WixuLmlzUHJvcGFnYXRpb25TdG9wcGVkPVksbi5pc0RlZmF1bHRQcmV2ZW50ZWQ9JCxuLm5hdGl2ZUV2ZW50PW59O3ZhciBxLEc9e2NvbmZpZ3VyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5jbGFzc319LEo9aC52bm9kZTtoLnZub2RlPWZ1bmN0aW9uKG4pe3ZhciB0PW4udHlwZSxlPW4ucHJvcHMscj1lO2lmKFwic3RyaW5nXCI9PXR5cGVvZiB0KXtmb3IodmFyIHUgaW4gcj17fSxlKXt2YXIgbz1lW3VdO1widmFsdWVcIj09PXUmJlwiZGVmYXVsdFZhbHVlXCJpbiBlJiZudWxsPT1vfHwoXCJkZWZhdWx0VmFsdWVcIj09PXUmJlwidmFsdWVcImluIGUmJm51bGw9PWUudmFsdWU/dT1cInZhbHVlXCI6XCJkb3dubG9hZFwiPT09dSYmITA9PT1vP289XCJcIjovb25kb3VibGVjbGljay9pLnRlc3QodSk/dT1cIm9uZGJsY2xpY2tcIjovXm9uY2hhbmdlKHRleHRhcmVhfGlucHV0KS9pLnRlc3QodSt0KSYmIVYoZS50eXBlKT91PVwib25pbnB1dFwiOi9eb24oQW5pfFRyYXxUb3V8QmVmb3JlSW5wKS8udGVzdCh1KT91PXUudG9Mb3dlckNhc2UoKTpQLnRlc3QodSk/dT11LnJlcGxhY2UoL1tBLVowLTldLyxcIi0kJlwiKS50b0xvd2VyQ2FzZSgpOm51bGw9PT1vJiYobz12b2lkIDApLHJbdV09byl9XCJzZWxlY3RcIj09dCYmci5tdWx0aXBsZSYmQXJyYXkuaXNBcnJheShyLnZhbHVlKSYmKHIudmFsdWU9dihlLmNoaWxkcmVuKS5mb3JFYWNoKGZ1bmN0aW9uKG4pe24ucHJvcHMuc2VsZWN0ZWQ9LTEhPXIudmFsdWUuaW5kZXhPZihuLnByb3BzLnZhbHVlKX0pKSxcInNlbGVjdFwiPT10JiZudWxsIT1yLmRlZmF1bHRWYWx1ZSYmKHIudmFsdWU9dihlLmNoaWxkcmVuKS5mb3JFYWNoKGZ1bmN0aW9uKG4pe24ucHJvcHMuc2VsZWN0ZWQ9ci5tdWx0aXBsZT8tMSE9ci5kZWZhdWx0VmFsdWUuaW5kZXhPZihuLnByb3BzLnZhbHVlKTpyLmRlZmF1bHRWYWx1ZT09bi5wcm9wcy52YWx1ZX0pKSxuLnByb3BzPXJ9dCYmZS5jbGFzcyE9ZS5jbGFzc05hbWUmJihHLmVudW1lcmFibGU9XCJjbGFzc05hbWVcImluIGUsbnVsbCE9ZS5jbGFzc05hbWUmJihyLmNsYXNzPWUuY2xhc3NOYW1lKSxPYmplY3QuZGVmaW5lUHJvcGVydHkocixcImNsYXNzTmFtZVwiLEcpKSxuLiQkdHlwZW9mPWosSiYmSihuKX07dmFyIEs9aC5fX3I7aC5fX3I9ZnVuY3Rpb24obil7SyYmSyhuKSxxPW4uX19jfTt2YXIgUT17UmVhY3RDdXJyZW50RGlzcGF0Y2hlcjp7Y3VycmVudDp7cmVhZENvbnRleHQ6ZnVuY3Rpb24obil7cmV0dXJuIHEuX19uW24uX19jXS5wcm9wcy52YWx1ZX19fX0sWD1cIjE3LjAuMlwiO2Z1bmN0aW9uIG5uKG4pe3JldHVybiBzLmJpbmQobnVsbCxuKX1mdW5jdGlvbiB0bihuKXtyZXR1cm4hIW4mJm4uJCR0eXBlb2Y9PT1qfWZ1bmN0aW9uIGVuKG4pe3JldHVybiB0bihuKT95LmFwcGx5KG51bGwsYXJndW1lbnRzKTpufWZ1bmN0aW9uIHJuKG4pe3JldHVybiEhbi5fX2smJihwKG51bGwsbiksITApfWZ1bmN0aW9uIHVuKG4pe3JldHVybiBuJiYobi5iYXNlfHwxPT09bi5ub2RlVHlwZSYmbil8fG51bGx9dmFyIG9uPWZ1bmN0aW9uKG4sdCl7cmV0dXJuIG4odCl9LGxuPWZ1bmN0aW9uKG4sdCl7cmV0dXJuIG4odCl9LGZuPWQ7ZXhwb3J0IGRlZmF1bHR7dXNlU3RhdGU6bix1c2VSZWR1Y2VyOnQsdXNlRWZmZWN0OmUsdXNlTGF5b3V0RWZmZWN0OnIsdXNlUmVmOnUsdXNlSW1wZXJhdGl2ZUhhbmRsZTpvLHVzZU1lbW86aSx1c2VDYWxsYmFjazpsLHVzZUNvbnRleHQ6Zix1c2VEZWJ1Z1ZhbHVlOmMsdmVyc2lvbjpcIjE3LjAuMlwiLENoaWxkcmVuOmsscmVuZGVyOnosaHlkcmF0ZTpCLHVubW91bnRDb21wb25lbnRBdE5vZGU6cm4sY3JlYXRlUG9ydGFsOlcsY3JlYXRlRWxlbWVudDpzLGNyZWF0ZUNvbnRleHQ6XyxjcmVhdGVGYWN0b3J5Om5uLGNsb25lRWxlbWVudDplbixjcmVhdGVSZWY6YixGcmFnbWVudDpkLGlzVmFsaWRFbGVtZW50OnRuLGZpbmRET01Ob2RlOnVuLENvbXBvbmVudDphLFB1cmVDb21wb25lbnQ6RSxtZW1vOmcsZm9yd2FyZFJlZjp4LGZsdXNoU3luYzpsbix1bnN0YWJsZV9iYXRjaGVkVXBkYXRlczpvbixTdHJpY3RNb2RlOmQsU3VzcGVuc2U6TCxTdXNwZW5zZUxpc3Q6TSxsYXp5OkYsX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQ6UX07ZXhwb3J0e1ggYXMgdmVyc2lvbixrIGFzIENoaWxkcmVuLHogYXMgcmVuZGVyLEIgYXMgaHlkcmF0ZSxybiBhcyB1bm1vdW50Q29tcG9uZW50QXROb2RlLFcgYXMgY3JlYXRlUG9ydGFsLG5uIGFzIGNyZWF0ZUZhY3RvcnksZW4gYXMgY2xvbmVFbGVtZW50LHRuIGFzIGlzVmFsaWRFbGVtZW50LHVuIGFzIGZpbmRET01Ob2RlLEUgYXMgUHVyZUNvbXBvbmVudCxnIGFzIG1lbW8seCBhcyBmb3J3YXJkUmVmLGxuIGFzIGZsdXNoU3luYyxvbiBhcyB1bnN0YWJsZV9iYXRjaGVkVXBkYXRlcyxmbiBhcyBTdHJpY3RNb2RlLEwgYXMgU3VzcGVuc2UsTSBhcyBTdXNwZW5zZUxpc3QsRiBhcyBsYXp5LFEgYXMgX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUR9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29tcGF0Lm1vZHVsZS5qcy5tYXBcbiIsInZhciBuLGwsdSxpLHQsbyxyLGYsZT17fSxjPVtdLHM9L2FjaXR8ZXgoPzpzfGd8bnxwfCQpfHJwaHxncmlkfG93c3xtbmN8bnR3fGluZVtjaF18em9vfF5vcmR8aXRlcmEvaTtmdW5jdGlvbiBhKG4sbCl7Zm9yKHZhciB1IGluIGwpblt1XT1sW3VdO3JldHVybiBufWZ1bmN0aW9uIGgobil7dmFyIGw9bi5wYXJlbnROb2RlO2wmJmwucmVtb3ZlQ2hpbGQobil9ZnVuY3Rpb24gdihsLHUsaSl7dmFyIHQsbyxyLGY9e307Zm9yKHIgaW4gdSlcImtleVwiPT1yP3Q9dVtyXTpcInJlZlwiPT1yP289dVtyXTpmW3JdPXVbcl07aWYoYXJndW1lbnRzLmxlbmd0aD4yJiYoZi5jaGlsZHJlbj1hcmd1bWVudHMubGVuZ3RoPjM/bi5jYWxsKGFyZ3VtZW50cywyKTppKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBsJiZudWxsIT1sLmRlZmF1bHRQcm9wcylmb3IociBpbiBsLmRlZmF1bHRQcm9wcyl2b2lkIDA9PT1mW3JdJiYoZltyXT1sLmRlZmF1bHRQcm9wc1tyXSk7cmV0dXJuIHkobCxmLHQsbyxudWxsKX1mdW5jdGlvbiB5KG4saSx0LG8scil7dmFyIGY9e3R5cGU6bixwcm9wczppLGtleTp0LHJlZjpvLF9fazpudWxsLF9fOm51bGwsX19iOjAsX19lOm51bGwsX19kOnZvaWQgMCxfX2M6bnVsbCxfX2g6bnVsbCxjb25zdHJ1Y3Rvcjp2b2lkIDAsX192Om51bGw9PXI/Kyt1OnJ9O3JldHVybiBudWxsIT1sLnZub2RlJiZsLnZub2RlKGYpLGZ9ZnVuY3Rpb24gcCgpe3JldHVybntjdXJyZW50Om51bGx9fWZ1bmN0aW9uIGQobil7cmV0dXJuIG4uY2hpbGRyZW59ZnVuY3Rpb24gXyhuLGwpe3RoaXMucHJvcHM9bix0aGlzLmNvbnRleHQ9bH1mdW5jdGlvbiBrKG4sbCl7aWYobnVsbD09bClyZXR1cm4gbi5fXz9rKG4uX18sbi5fXy5fX2suaW5kZXhPZihuKSsxKTpudWxsO2Zvcih2YXIgdTtsPG4uX19rLmxlbmd0aDtsKyspaWYobnVsbCE9KHU9bi5fX2tbbF0pJiZudWxsIT11Ll9fZSlyZXR1cm4gdS5fX2U7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2Ygbi50eXBlP2sobik6bnVsbH1mdW5jdGlvbiBiKG4pe3ZhciBsLHU7aWYobnVsbCE9KG49bi5fXykmJm51bGwhPW4uX19jKXtmb3Iobi5fX2U9bi5fX2MuYmFzZT1udWxsLGw9MDtsPG4uX19rLmxlbmd0aDtsKyspaWYobnVsbCE9KHU9bi5fX2tbbF0pJiZudWxsIT11Ll9fZSl7bi5fX2U9bi5fX2MuYmFzZT11Ll9fZTticmVha31yZXR1cm4gYihuKX19ZnVuY3Rpb24gbShuKXsoIW4uX19kJiYobi5fX2Q9ITApJiZ0LnB1c2gobikmJiFnLl9fcisrfHxyIT09bC5kZWJvdW5jZVJlbmRlcmluZykmJigocj1sLmRlYm91bmNlUmVuZGVyaW5nKXx8bykoZyl9ZnVuY3Rpb24gZygpe2Zvcih2YXIgbjtnLl9fcj10Lmxlbmd0aDspbj10LnNvcnQoZnVuY3Rpb24obixsKXtyZXR1cm4gbi5fX3YuX19iLWwuX192Ll9fYn0pLHQ9W10sbi5zb21lKGZ1bmN0aW9uKG4pe3ZhciBsLHUsaSx0LG8scjtuLl9fZCYmKG89KHQ9KGw9bikuX192KS5fX2UsKHI9bC5fX1ApJiYodT1bXSwoaT1hKHt9LHQpKS5fX3Y9dC5fX3YrMSxqKHIsdCxpLGwuX19uLHZvaWQgMCE9PXIub3duZXJTVkdFbGVtZW50LG51bGwhPXQuX19oP1tvXTpudWxsLHUsbnVsbD09bz9rKHQpOm8sdC5fX2gpLHoodSx0KSx0Ll9fZSE9byYmYih0KSkpfSl9ZnVuY3Rpb24gdyhuLGwsdSxpLHQsbyxyLGYscyxhKXt2YXIgaCx2LHAsXyxiLG0sZyx3PWkmJmkuX19rfHxjLEE9dy5sZW5ndGg7Zm9yKHUuX19rPVtdLGg9MDtoPGwubGVuZ3RoO2grKylpZihudWxsIT0oXz11Ll9fa1toXT1udWxsPT0oXz1sW2hdKXx8XCJib29sZWFuXCI9PXR5cGVvZiBfP251bGw6XCJzdHJpbmdcIj09dHlwZW9mIF98fFwibnVtYmVyXCI9PXR5cGVvZiBffHxcImJpZ2ludFwiPT10eXBlb2YgXz95KG51bGwsXyxudWxsLG51bGwsXyk6QXJyYXkuaXNBcnJheShfKT95KGQse2NoaWxkcmVuOl99LG51bGwsbnVsbCxudWxsKTpfLl9fYj4wP3koXy50eXBlLF8ucHJvcHMsXy5rZXksbnVsbCxfLl9fdik6Xykpe2lmKF8uX189dSxfLl9fYj11Ll9fYisxLG51bGw9PT0ocD13W2hdKXx8cCYmXy5rZXk9PXAua2V5JiZfLnR5cGU9PT1wLnR5cGUpd1toXT12b2lkIDA7ZWxzZSBmb3Iodj0wO3Y8QTt2Kyspe2lmKChwPXdbdl0pJiZfLmtleT09cC5rZXkmJl8udHlwZT09PXAudHlwZSl7d1t2XT12b2lkIDA7YnJlYWt9cD1udWxsfWoobixfLHA9cHx8ZSx0LG8scixmLHMsYSksYj1fLl9fZSwodj1fLnJlZikmJnAucmVmIT12JiYoZ3x8KGc9W10pLHAucmVmJiZnLnB1c2gocC5yZWYsbnVsbCxfKSxnLnB1c2godixfLl9fY3x8YixfKSksbnVsbCE9Yj8obnVsbD09bSYmKG09YiksXCJmdW5jdGlvblwiPT10eXBlb2YgXy50eXBlJiZudWxsIT1fLl9fayYmXy5fX2s9PT1wLl9faz9fLl9fZD1zPXgoXyxzLG4pOnM9UChuLF8scCx3LGIscyksYXx8XCJvcHRpb25cIiE9PXUudHlwZT9cImZ1bmN0aW9uXCI9PXR5cGVvZiB1LnR5cGUmJih1Ll9fZD1zKTpuLnZhbHVlPVwiXCIpOnMmJnAuX19lPT1zJiZzLnBhcmVudE5vZGUhPW4mJihzPWsocCkpfWZvcih1Ll9fZT1tLGg9QTtoLS07KW51bGwhPXdbaF0mJihcImZ1bmN0aW9uXCI9PXR5cGVvZiB1LnR5cGUmJm51bGwhPXdbaF0uX19lJiZ3W2hdLl9fZT09dS5fX2QmJih1Ll9fZD1rKGksaCsxKSksTih3W2hdLHdbaF0pKTtpZihnKWZvcihoPTA7aDxnLmxlbmd0aDtoKyspTShnW2hdLGdbKytoXSxnWysraF0pfWZ1bmN0aW9uIHgobixsLHUpe3ZhciBpLHQ7Zm9yKGk9MDtpPG4uX19rLmxlbmd0aDtpKyspKHQ9bi5fX2tbaV0pJiYodC5fXz1uLGw9XCJmdW5jdGlvblwiPT10eXBlb2YgdC50eXBlP3godCxsLHUpOlAodSx0LHQsbi5fX2ssdC5fX2UsbCkpO3JldHVybiBsfWZ1bmN0aW9uIEEobixsKXtyZXR1cm4gbD1sfHxbXSxudWxsPT1ufHxcImJvb2xlYW5cIj09dHlwZW9mIG58fChBcnJheS5pc0FycmF5KG4pP24uc29tZShmdW5jdGlvbihuKXtBKG4sbCl9KTpsLnB1c2gobikpLGx9ZnVuY3Rpb24gUChuLGwsdSxpLHQsbyl7dmFyIHIsZixlO2lmKHZvaWQgMCE9PWwuX19kKXI9bC5fX2QsbC5fX2Q9dm9pZCAwO2Vsc2UgaWYobnVsbD09dXx8dCE9b3x8bnVsbD09dC5wYXJlbnROb2RlKW46aWYobnVsbD09b3x8by5wYXJlbnROb2RlIT09biluLmFwcGVuZENoaWxkKHQpLHI9bnVsbDtlbHNle2ZvcihmPW8sZT0wOyhmPWYubmV4dFNpYmxpbmcpJiZlPGkubGVuZ3RoO2UrPTIpaWYoZj09dClicmVhayBuO24uaW5zZXJ0QmVmb3JlKHQsbykscj1vfXJldHVybiB2b2lkIDAhPT1yP3I6dC5uZXh0U2libGluZ31mdW5jdGlvbiBDKG4sbCx1LGksdCl7dmFyIG87Zm9yKG8gaW4gdSlcImNoaWxkcmVuXCI9PT1vfHxcImtleVwiPT09b3x8byBpbiBsfHxIKG4sbyxudWxsLHVbb10saSk7Zm9yKG8gaW4gbCl0JiZcImZ1bmN0aW9uXCIhPXR5cGVvZiBsW29dfHxcImNoaWxkcmVuXCI9PT1vfHxcImtleVwiPT09b3x8XCJ2YWx1ZVwiPT09b3x8XCJjaGVja2VkXCI9PT1vfHx1W29dPT09bFtvXXx8SChuLG8sbFtvXSx1W29dLGkpfWZ1bmN0aW9uICQobixsLHUpe1wiLVwiPT09bFswXT9uLnNldFByb3BlcnR5KGwsdSk6bltsXT1udWxsPT11P1wiXCI6XCJudW1iZXJcIiE9dHlwZW9mIHV8fHMudGVzdChsKT91OnUrXCJweFwifWZ1bmN0aW9uIEgobixsLHUsaSx0KXt2YXIgbztuOmlmKFwic3R5bGVcIj09PWwpaWYoXCJzdHJpbmdcIj09dHlwZW9mIHUpbi5zdHlsZS5jc3NUZXh0PXU7ZWxzZXtpZihcInN0cmluZ1wiPT10eXBlb2YgaSYmKG4uc3R5bGUuY3NzVGV4dD1pPVwiXCIpLGkpZm9yKGwgaW4gaSl1JiZsIGluIHV8fCQobi5zdHlsZSxsLFwiXCIpO2lmKHUpZm9yKGwgaW4gdSlpJiZ1W2xdPT09aVtsXXx8JChuLnN0eWxlLGwsdVtsXSl9ZWxzZSBpZihcIm9cIj09PWxbMF0mJlwiblwiPT09bFsxXSlvPWwhPT0obD1sLnJlcGxhY2UoL0NhcHR1cmUkLyxcIlwiKSksbD1sLnRvTG93ZXJDYXNlKClpbiBuP2wudG9Mb3dlckNhc2UoKS5zbGljZSgyKTpsLnNsaWNlKDIpLG4ubHx8KG4ubD17fSksbi5sW2wrb109dSx1P2l8fG4uYWRkRXZlbnRMaXN0ZW5lcihsLG8/VDpJLG8pOm4ucmVtb3ZlRXZlbnRMaXN0ZW5lcihsLG8/VDpJLG8pO2Vsc2UgaWYoXCJkYW5nZXJvdXNseVNldElubmVySFRNTFwiIT09bCl7aWYodClsPWwucmVwbGFjZSgveGxpbmtbSDpoXS8sXCJoXCIpLnJlcGxhY2UoL3NOYW1lJC8sXCJzXCIpO2Vsc2UgaWYoXCJocmVmXCIhPT1sJiZcImxpc3RcIiE9PWwmJlwiZm9ybVwiIT09bCYmXCJ0YWJJbmRleFwiIT09bCYmXCJkb3dubG9hZFwiIT09bCYmbCBpbiBuKXRyeXtuW2xdPW51bGw9PXU/XCJcIjp1O2JyZWFrIG59Y2F0Y2gobil7fVwiZnVuY3Rpb25cIj09dHlwZW9mIHV8fChudWxsIT11JiYoITEhPT11fHxcImFcIj09PWxbMF0mJlwiclwiPT09bFsxXSk/bi5zZXRBdHRyaWJ1dGUobCx1KTpuLnJlbW92ZUF0dHJpYnV0ZShsKSl9fWZ1bmN0aW9uIEkobil7dGhpcy5sW24udHlwZSshMV0obC5ldmVudD9sLmV2ZW50KG4pOm4pfWZ1bmN0aW9uIFQobil7dGhpcy5sW24udHlwZSshMF0obC5ldmVudD9sLmV2ZW50KG4pOm4pfWZ1bmN0aW9uIGoobix1LGksdCxvLHIsZixlLGMpe3ZhciBzLGgsdix5LHAsayxiLG0sZyx4LEEsUD11LnR5cGU7aWYodm9pZCAwIT09dS5jb25zdHJ1Y3RvcilyZXR1cm4gbnVsbDtudWxsIT1pLl9faCYmKGM9aS5fX2gsZT11Ll9fZT1pLl9fZSx1Ll9faD1udWxsLHI9W2VdKSwocz1sLl9fYikmJnModSk7dHJ5e246aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgUCl7aWYobT11LnByb3BzLGc9KHM9UC5jb250ZXh0VHlwZSkmJnRbcy5fX2NdLHg9cz9nP2cucHJvcHMudmFsdWU6cy5fXzp0LGkuX19jP2I9KGg9dS5fX2M9aS5fX2MpLl9fPWguX19FOihcInByb3RvdHlwZVwiaW4gUCYmUC5wcm90b3R5cGUucmVuZGVyP3UuX19jPWg9bmV3IFAobSx4KToodS5fX2M9aD1uZXcgXyhtLHgpLGguY29uc3RydWN0b3I9UCxoLnJlbmRlcj1PKSxnJiZnLnN1YihoKSxoLnByb3BzPW0saC5zdGF0ZXx8KGguc3RhdGU9e30pLGguY29udGV4dD14LGguX19uPXQsdj1oLl9fZD0hMCxoLl9faD1bXSksbnVsbD09aC5fX3MmJihoLl9fcz1oLnN0YXRlKSxudWxsIT1QLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyYmKGguX19zPT1oLnN0YXRlJiYoaC5fX3M9YSh7fSxoLl9fcykpLGEoaC5fX3MsUC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMobSxoLl9fcykpKSx5PWgucHJvcHMscD1oLnN0YXRlLHYpbnVsbD09UC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMmJm51bGwhPWguY29tcG9uZW50V2lsbE1vdW50JiZoLmNvbXBvbmVudFdpbGxNb3VudCgpLG51bGwhPWguY29tcG9uZW50RGlkTW91bnQmJmguX19oLnB1c2goaC5jb21wb25lbnREaWRNb3VudCk7ZWxzZXtpZihudWxsPT1QLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyYmbSE9PXkmJm51bGwhPWguY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyYmaC5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG0seCksIWguX19lJiZudWxsIT1oLnNob3VsZENvbXBvbmVudFVwZGF0ZSYmITE9PT1oLnNob3VsZENvbXBvbmVudFVwZGF0ZShtLGguX19zLHgpfHx1Ll9fdj09PWkuX192KXtoLnByb3BzPW0saC5zdGF0ZT1oLl9fcyx1Ll9fdiE9PWkuX192JiYoaC5fX2Q9ITEpLGguX192PXUsdS5fX2U9aS5fX2UsdS5fX2s9aS5fX2ssdS5fX2suZm9yRWFjaChmdW5jdGlvbihuKXtuJiYobi5fXz11KX0pLGguX19oLmxlbmd0aCYmZi5wdXNoKGgpO2JyZWFrIG59bnVsbCE9aC5jb21wb25lbnRXaWxsVXBkYXRlJiZoLmNvbXBvbmVudFdpbGxVcGRhdGUobSxoLl9fcyx4KSxudWxsIT1oLmNvbXBvbmVudERpZFVwZGF0ZSYmaC5fX2gucHVzaChmdW5jdGlvbigpe2guY29tcG9uZW50RGlkVXBkYXRlKHkscCxrKX0pfWguY29udGV4dD14LGgucHJvcHM9bSxoLnN0YXRlPWguX19zLChzPWwuX19yKSYmcyh1KSxoLl9fZD0hMSxoLl9fdj11LGguX19QPW4scz1oLnJlbmRlcihoLnByb3BzLGguc3RhdGUsaC5jb250ZXh0KSxoLnN0YXRlPWguX19zLG51bGwhPWguZ2V0Q2hpbGRDb250ZXh0JiYodD1hKGEoe30sdCksaC5nZXRDaGlsZENvbnRleHQoKSkpLHZ8fG51bGw9PWguZ2V0U25hcHNob3RCZWZvcmVVcGRhdGV8fChrPWguZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUoeSxwKSksQT1udWxsIT1zJiZzLnR5cGU9PT1kJiZudWxsPT1zLmtleT9zLnByb3BzLmNoaWxkcmVuOnMsdyhuLEFycmF5LmlzQXJyYXkoQSk/QTpbQV0sdSxpLHQsbyxyLGYsZSxjKSxoLmJhc2U9dS5fX2UsdS5fX2g9bnVsbCxoLl9faC5sZW5ndGgmJmYucHVzaChoKSxiJiYoaC5fX0U9aC5fXz1udWxsKSxoLl9fZT0hMX1lbHNlIG51bGw9PXImJnUuX192PT09aS5fX3Y/KHUuX19rPWkuX19rLHUuX19lPWkuX19lKTp1Ll9fZT1MKGkuX19lLHUsaSx0LG8scixmLGMpOyhzPWwuZGlmZmVkKSYmcyh1KX1jYXRjaChuKXt1Ll9fdj1udWxsLChjfHxudWxsIT1yKSYmKHUuX19lPWUsdS5fX2g9ISFjLHJbci5pbmRleE9mKGUpXT1udWxsKSxsLl9fZShuLHUsaSl9fWZ1bmN0aW9uIHoobix1KXtsLl9fYyYmbC5fX2ModSxuKSxuLnNvbWUoZnVuY3Rpb24odSl7dHJ5e249dS5fX2gsdS5fX2g9W10sbi5zb21lKGZ1bmN0aW9uKG4pe24uY2FsbCh1KX0pfWNhdGNoKG4pe2wuX19lKG4sdS5fX3YpfX0pfWZ1bmN0aW9uIEwobCx1LGksdCxvLHIsZixjKXt2YXIgcyxhLHYseT1pLnByb3BzLHA9dS5wcm9wcyxkPXUudHlwZSxfPTA7aWYoXCJzdmdcIj09PWQmJihvPSEwKSxudWxsIT1yKWZvcig7XzxyLmxlbmd0aDtfKyspaWYoKHM9cltfXSkmJihzPT09bHx8KGQ/cy5sb2NhbE5hbWU9PWQ6Mz09cy5ub2RlVHlwZSkpKXtsPXMscltfXT1udWxsO2JyZWFrfWlmKG51bGw9PWwpe2lmKG51bGw9PT1kKXJldHVybiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShwKTtsPW8/ZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixkKTpkb2N1bWVudC5jcmVhdGVFbGVtZW50KGQscC5pcyYmcCkscj1udWxsLGM9ITF9aWYobnVsbD09PWQpeT09PXB8fGMmJmwuZGF0YT09PXB8fChsLmRhdGE9cCk7ZWxzZXtpZihyPXImJm4uY2FsbChsLmNoaWxkTm9kZXMpLGE9KHk9aS5wcm9wc3x8ZSkuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwsdj1wLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MLCFjKXtpZihudWxsIT1yKWZvcih5PXt9LF89MDtfPGwuYXR0cmlidXRlcy5sZW5ndGg7XysrKXlbbC5hdHRyaWJ1dGVzW19dLm5hbWVdPWwuYXR0cmlidXRlc1tfXS52YWx1ZTsodnx8YSkmJih2JiYoYSYmdi5fX2h0bWw9PWEuX19odG1sfHx2Ll9faHRtbD09PWwuaW5uZXJIVE1MKXx8KGwuaW5uZXJIVE1MPXYmJnYuX19odG1sfHxcIlwiKSl9aWYoQyhsLHAseSxvLGMpLHYpdS5fX2s9W107ZWxzZSBpZihfPXUucHJvcHMuY2hpbGRyZW4sdyhsLEFycmF5LmlzQXJyYXkoXyk/XzpbX10sdSxpLHQsbyYmXCJmb3JlaWduT2JqZWN0XCIhPT1kLHIsZixyP3JbMF06aS5fX2smJmsoaSwwKSxjKSxudWxsIT1yKWZvcihfPXIubGVuZ3RoO18tLTspbnVsbCE9cltfXSYmaChyW19dKTtjfHwoXCJ2YWx1ZVwiaW4gcCYmdm9pZCAwIT09KF89cC52YWx1ZSkmJihfIT09bC52YWx1ZXx8XCJwcm9ncmVzc1wiPT09ZCYmIV8pJiZIKGwsXCJ2YWx1ZVwiLF8seS52YWx1ZSwhMSksXCJjaGVja2VkXCJpbiBwJiZ2b2lkIDAhPT0oXz1wLmNoZWNrZWQpJiZfIT09bC5jaGVja2VkJiZIKGwsXCJjaGVja2VkXCIsXyx5LmNoZWNrZWQsITEpKX1yZXR1cm4gbH1mdW5jdGlvbiBNKG4sdSxpKXt0cnl7XCJmdW5jdGlvblwiPT10eXBlb2Ygbj9uKHUpOm4uY3VycmVudD11fWNhdGNoKG4pe2wuX19lKG4saSl9fWZ1bmN0aW9uIE4obix1LGkpe3ZhciB0LG87aWYobC51bm1vdW50JiZsLnVubW91bnQobiksKHQ9bi5yZWYpJiYodC5jdXJyZW50JiZ0LmN1cnJlbnQhPT1uLl9fZXx8TSh0LG51bGwsdSkpLG51bGwhPSh0PW4uX19jKSl7aWYodC5jb21wb25lbnRXaWxsVW5tb3VudCl0cnl7dC5jb21wb25lbnRXaWxsVW5tb3VudCgpfWNhdGNoKG4pe2wuX19lKG4sdSl9dC5iYXNlPXQuX19QPW51bGx9aWYodD1uLl9faylmb3Iobz0wO288dC5sZW5ndGg7bysrKXRbb10mJk4odFtvXSx1LFwiZnVuY3Rpb25cIiE9dHlwZW9mIG4udHlwZSk7aXx8bnVsbD09bi5fX2V8fGgobi5fX2UpLG4uX19lPW4uX19kPXZvaWQgMH1mdW5jdGlvbiBPKG4sbCx1KXtyZXR1cm4gdGhpcy5jb25zdHJ1Y3RvcihuLHUpfWZ1bmN0aW9uIFModSxpLHQpe3ZhciBvLHIsZjtsLl9fJiZsLl9fKHUsaSkscj0obz1cImZ1bmN0aW9uXCI9PXR5cGVvZiB0KT9udWxsOnQmJnQuX19rfHxpLl9fayxmPVtdLGooaSx1PSghbyYmdHx8aSkuX19rPXYoZCxudWxsLFt1XSkscnx8ZSxlLHZvaWQgMCE9PWkub3duZXJTVkdFbGVtZW50LCFvJiZ0P1t0XTpyP251bGw6aS5maXJzdENoaWxkP24uY2FsbChpLmNoaWxkTm9kZXMpOm51bGwsZiwhbyYmdD90OnI/ci5fX2U6aS5maXJzdENoaWxkLG8pLHooZix1KX1mdW5jdGlvbiBxKG4sbCl7UyhuLGwscSl9ZnVuY3Rpb24gQihsLHUsaSl7dmFyIHQsbyxyLGY9YSh7fSxsLnByb3BzKTtmb3IociBpbiB1KVwia2V5XCI9PXI/dD11W3JdOlwicmVmXCI9PXI/bz11W3JdOmZbcl09dVtyXTtyZXR1cm4gYXJndW1lbnRzLmxlbmd0aD4yJiYoZi5jaGlsZHJlbj1hcmd1bWVudHMubGVuZ3RoPjM/bi5jYWxsKGFyZ3VtZW50cywyKTppKSx5KGwudHlwZSxmLHR8fGwua2V5LG98fGwucmVmLG51bGwpfWZ1bmN0aW9uIEQobixsKXt2YXIgdT17X19jOmw9XCJfX2NDXCIrZisrLF9fOm4sQ29uc3VtZXI6ZnVuY3Rpb24obixsKXtyZXR1cm4gbi5jaGlsZHJlbihsKX0sUHJvdmlkZXI6ZnVuY3Rpb24obil7dmFyIHUsaTtyZXR1cm4gdGhpcy5nZXRDaGlsZENvbnRleHR8fCh1PVtdLChpPXt9KVtsXT10aGlzLHRoaXMuZ2V0Q2hpbGRDb250ZXh0PWZ1bmN0aW9uKCl7cmV0dXJuIGl9LHRoaXMuc2hvdWxkQ29tcG9uZW50VXBkYXRlPWZ1bmN0aW9uKG4pe3RoaXMucHJvcHMudmFsdWUhPT1uLnZhbHVlJiZ1LnNvbWUobSl9LHRoaXMuc3ViPWZ1bmN0aW9uKG4pe3UucHVzaChuKTt2YXIgbD1uLmNvbXBvbmVudFdpbGxVbm1vdW50O24uY29tcG9uZW50V2lsbFVubW91bnQ9ZnVuY3Rpb24oKXt1LnNwbGljZSh1LmluZGV4T2YobiksMSksbCYmbC5jYWxsKG4pfX0pLG4uY2hpbGRyZW59fTtyZXR1cm4gdS5Qcm92aWRlci5fXz11LkNvbnN1bWVyLmNvbnRleHRUeXBlPXV9bj1jLnNsaWNlLGw9e19fZTpmdW5jdGlvbihuLGwpe2Zvcih2YXIgdSxpLHQ7bD1sLl9fOylpZigodT1sLl9fYykmJiF1Ll9fKXRyeXtpZigoaT11LmNvbnN0cnVjdG9yKSYmbnVsbCE9aS5nZXREZXJpdmVkU3RhdGVGcm9tRXJyb3ImJih1LnNldFN0YXRlKGkuZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yKG4pKSx0PXUuX19kKSxudWxsIT11LmNvbXBvbmVudERpZENhdGNoJiYodS5jb21wb25lbnREaWRDYXRjaChuKSx0PXUuX19kKSx0KXJldHVybiB1Ll9fRT11fWNhdGNoKGwpe249bH10aHJvdyBufX0sdT0wLGk9ZnVuY3Rpb24obil7cmV0dXJuIG51bGwhPW4mJnZvaWQgMD09PW4uY29uc3RydWN0b3J9LF8ucHJvdG90eXBlLnNldFN0YXRlPWZ1bmN0aW9uKG4sbCl7dmFyIHU7dT1udWxsIT10aGlzLl9fcyYmdGhpcy5fX3MhPT10aGlzLnN0YXRlP3RoaXMuX19zOnRoaXMuX19zPWEoe30sdGhpcy5zdGF0ZSksXCJmdW5jdGlvblwiPT10eXBlb2YgbiYmKG49bihhKHt9LHUpLHRoaXMucHJvcHMpKSxuJiZhKHUsbiksbnVsbCE9biYmdGhpcy5fX3YmJihsJiZ0aGlzLl9faC5wdXNoKGwpLG0odGhpcykpfSxfLnByb3RvdHlwZS5mb3JjZVVwZGF0ZT1mdW5jdGlvbihuKXt0aGlzLl9fdiYmKHRoaXMuX19lPSEwLG4mJnRoaXMuX19oLnB1c2gobiksbSh0aGlzKSl9LF8ucHJvdG90eXBlLnJlbmRlcj1kLHQ9W10sbz1cImZ1bmN0aW9uXCI9PXR5cGVvZiBQcm9taXNlP1Byb21pc2UucHJvdG90eXBlLnRoZW4uYmluZChQcm9taXNlLnJlc29sdmUoKSk6c2V0VGltZW91dCxnLl9fcj0wLGY9MDtleHBvcnR7UyBhcyByZW5kZXIscSBhcyBoeWRyYXRlLHYgYXMgY3JlYXRlRWxlbWVudCx2IGFzIGgsZCBhcyBGcmFnbWVudCxwIGFzIGNyZWF0ZVJlZixpIGFzIGlzVmFsaWRFbGVtZW50LF8gYXMgQ29tcG9uZW50LEIgYXMgY2xvbmVFbGVtZW50LEQgYXMgY3JlYXRlQ29udGV4dCxBIGFzIHRvQ2hpbGRBcnJheSxsIGFzIG9wdGlvbnN9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cHJlYWN0Lm1vZHVsZS5qcy5tYXBcbiIsImltcG9ydHtvcHRpb25zIGFzIG59ZnJvbVwicHJlYWN0XCI7dmFyIHQsdSxyLG89MCxpPVtdLGM9bi5fX2IsZj1uLl9fcixlPW4uZGlmZmVkLGE9bi5fX2Msdj1uLnVubW91bnQ7ZnVuY3Rpb24gbSh0LHIpe24uX19oJiZuLl9faCh1LHQsb3x8ciksbz0wO3ZhciBpPXUuX19IfHwodS5fX0g9e19fOltdLF9faDpbXX0pO3JldHVybiB0Pj1pLl9fLmxlbmd0aCYmaS5fXy5wdXNoKHt9KSxpLl9fW3RdfWZ1bmN0aW9uIGwobil7cmV0dXJuIG89MSxwKHcsbil9ZnVuY3Rpb24gcChuLHIsbyl7dmFyIGk9bSh0KyssMik7cmV0dXJuIGkudD1uLGkuX19jfHwoaS5fXz1bbz9vKHIpOncodm9pZCAwLHIpLGZ1bmN0aW9uKG4pe3ZhciB0PWkudChpLl9fWzBdLG4pO2kuX19bMF0hPT10JiYoaS5fXz1bdCxpLl9fWzFdXSxpLl9fYy5zZXRTdGF0ZSh7fSkpfV0saS5fX2M9dSksaS5fX31mdW5jdGlvbiB5KHIsbyl7dmFyIGk9bSh0KyssMyk7IW4uX19zJiZrKGkuX19ILG8pJiYoaS5fXz1yLGkuX19IPW8sdS5fX0guX19oLnB1c2goaSkpfWZ1bmN0aW9uIGgocixvKXt2YXIgaT1tKHQrKyw0KTshbi5fX3MmJmsoaS5fX0gsbykmJihpLl9fPXIsaS5fX0g9byx1Ll9faC5wdXNoKGkpKX1mdW5jdGlvbiBzKG4pe3JldHVybiBvPTUsZChmdW5jdGlvbigpe3JldHVybntjdXJyZW50Om59fSxbXSl9ZnVuY3Rpb24gXyhuLHQsdSl7bz02LGgoZnVuY3Rpb24oKXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBuP24odCgpKTpuJiYobi5jdXJyZW50PXQoKSl9LG51bGw9PXU/dTp1LmNvbmNhdChuKSl9ZnVuY3Rpb24gZChuLHUpe3ZhciByPW0odCsrLDcpO3JldHVybiBrKHIuX19ILHUpJiYoci5fXz1uKCksci5fX0g9dSxyLl9faD1uKSxyLl9ffWZ1bmN0aW9uIEEobix0KXtyZXR1cm4gbz04LGQoZnVuY3Rpb24oKXtyZXR1cm4gbn0sdCl9ZnVuY3Rpb24gRihuKXt2YXIgcj11LmNvbnRleHRbbi5fX2NdLG89bSh0KyssOSk7cmV0dXJuIG8uYz1uLHI/KG51bGw9PW8uX18mJihvLl9fPSEwLHIuc3ViKHUpKSxyLnByb3BzLnZhbHVlKTpuLl9ffWZ1bmN0aW9uIFQodCx1KXtuLnVzZURlYnVnVmFsdWUmJm4udXNlRGVidWdWYWx1ZSh1P3UodCk6dCl9ZnVuY3Rpb24gcShuKXt2YXIgcj1tKHQrKywxMCksbz1sKCk7cmV0dXJuIHIuX189bix1LmNvbXBvbmVudERpZENhdGNofHwodS5jb21wb25lbnREaWRDYXRjaD1mdW5jdGlvbihuKXtyLl9fJiZyLl9fKG4pLG9bMV0obil9KSxbb1swXSxmdW5jdGlvbigpe29bMV0odm9pZCAwKX1dfWZ1bmN0aW9uIHgoKXtpLmZvckVhY2goZnVuY3Rpb24odCl7aWYodC5fX1ApdHJ5e3QuX19ILl9faC5mb3JFYWNoKGcpLHQuX19ILl9faC5mb3JFYWNoKGopLHQuX19ILl9faD1bXX1jYXRjaCh1KXt0Ll9fSC5fX2g9W10sbi5fX2UodSx0Ll9fdil9fSksaT1bXX1uLl9fYj1mdW5jdGlvbihuKXt1PW51bGwsYyYmYyhuKX0sbi5fX3I9ZnVuY3Rpb24obil7ZiYmZihuKSx0PTA7dmFyIHI9KHU9bi5fX2MpLl9fSDtyJiYoci5fX2guZm9yRWFjaChnKSxyLl9faC5mb3JFYWNoKGopLHIuX19oPVtdKX0sbi5kaWZmZWQ9ZnVuY3Rpb24odCl7ZSYmZSh0KTt2YXIgbz10Ll9fYztvJiZvLl9fSCYmby5fX0guX19oLmxlbmd0aCYmKDEhPT1pLnB1c2gobykmJnI9PT1uLnJlcXVlc3RBbmltYXRpb25GcmFtZXx8KChyPW4ucmVxdWVzdEFuaW1hdGlvbkZyYW1lKXx8ZnVuY3Rpb24obil7dmFyIHQsdT1mdW5jdGlvbigpe2NsZWFyVGltZW91dChyKSxiJiZjYW5jZWxBbmltYXRpb25GcmFtZSh0KSxzZXRUaW1lb3V0KG4pfSxyPXNldFRpbWVvdXQodSwxMDApO2ImJih0PXJlcXVlc3RBbmltYXRpb25GcmFtZSh1KSl9KSh4KSksdT12b2lkIDB9LG4uX19jPWZ1bmN0aW9uKHQsdSl7dS5zb21lKGZ1bmN0aW9uKHQpe3RyeXt0Ll9faC5mb3JFYWNoKGcpLHQuX19oPXQuX19oLmZpbHRlcihmdW5jdGlvbihuKXtyZXR1cm4hbi5fX3x8aihuKX0pfWNhdGNoKHIpe3Uuc29tZShmdW5jdGlvbihuKXtuLl9faCYmKG4uX19oPVtdKX0pLHU9W10sbi5fX2Uocix0Ll9fdil9fSksYSYmYSh0LHUpfSxuLnVubW91bnQ9ZnVuY3Rpb24odCl7diYmdih0KTt2YXIgdT10Ll9fYztpZih1JiZ1Ll9fSCl0cnl7dS5fX0guX18uZm9yRWFjaChnKX1jYXRjaCh0KXtuLl9fZSh0LHUuX192KX19O3ZhciBiPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVlc3RBbmltYXRpb25GcmFtZTtmdW5jdGlvbiBnKG4pe3ZhciB0PXU7XCJmdW5jdGlvblwiPT10eXBlb2Ygbi5fX2MmJm4uX19jKCksdT10fWZ1bmN0aW9uIGoobil7dmFyIHQ9dTtuLl9fYz1uLl9fKCksdT10fWZ1bmN0aW9uIGsobix0KXtyZXR1cm4hbnx8bi5sZW5ndGghPT10Lmxlbmd0aHx8dC5zb21lKGZ1bmN0aW9uKHQsdSl7cmV0dXJuIHQhPT1uW3VdfSl9ZnVuY3Rpb24gdyhuLHQpe3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIHQ/dChuKTp0fWV4cG9ydHtsIGFzIHVzZVN0YXRlLHAgYXMgdXNlUmVkdWNlcix5IGFzIHVzZUVmZmVjdCxoIGFzIHVzZUxheW91dEVmZmVjdCxzIGFzIHVzZVJlZixfIGFzIHVzZUltcGVyYXRpdmVIYW5kbGUsZCBhcyB1c2VNZW1vLEEgYXMgdXNlQ2FsbGJhY2ssRiBhcyB1c2VDb250ZXh0LFQgYXMgdXNlRGVidWdWYWx1ZSxxIGFzIHVzZUVycm9yQm91bmRhcnl9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aG9va3MubW9kdWxlLmpzLm1hcFxuIiwiaW1wb3J0e29wdGlvbnMgYXMgcixGcmFnbWVudCBhcyBffWZyb21cInByZWFjdFwiO2V4cG9ydHtGcmFnbWVudH1mcm9tXCJwcmVhY3RcIjt2YXIgbz0wO2Z1bmN0aW9uIGUoXyxlLG4sdCxmKXt2YXIgbCxzLHU9e307Zm9yKHMgaW4gZSlcInJlZlwiPT1zP2w9ZVtzXTp1W3NdPWVbc107dmFyIGE9e3R5cGU6Xyxwcm9wczp1LGtleTpuLHJlZjpsLF9fazpudWxsLF9fOm51bGwsX19iOjAsX19lOm51bGwsX19kOnZvaWQgMCxfX2M6bnVsbCxfX2g6bnVsbCxjb25zdHJ1Y3Rvcjp2b2lkIDAsX192Oi0tbyxfX3NvdXJjZTp0LF9fc2VsZjpmfTtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBfJiYobD1fLmRlZmF1bHRQcm9wcykpZm9yKHMgaW4gbCl2b2lkIDA9PT11W3NdJiYodVtzXT1sW3NdKTtyZXR1cm4gci52bm9kZSYmci52bm9kZShhKSxhfWV4cG9ydHtlIGFzIGpzeCxlIGFzIGpzeHMsZSBhcyBqc3hERVZ9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9anN4UnVudGltZS5tb2R1bGUuanMubWFwXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9zYXZlLWZpbGUnO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwidmFyIEdDX1RJTUVPVVQgPSAxMDAwICogNjA7IC8vIDEgbWluXG4vKipcbiAqIFNhdmUgYSBmaWxlIGZyb20gQmxvYiBvciBvYmplY3QgdXJsXG4gKiBXZSBhY2hpZXZlIHRoaXMgYnkgdXNpbmcgdGhlIEhUTUw1IGRvd25sb2FkIGF0dHIgb2YgPGE+LlxuICogQ2hlY2sgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSFRNTC9FbGVtZW50L2EjQnJvd3Nlcl9jb21wYXRpYmlsaXR5XG4gKiBmb3IgYnJvd3NlciBjb21wYXRpYmlsaXR5LlxuICpcbiAqIEBwYXJhbSBkYXRhXG4gKiBAcGFyYW0gZmlsZW5hbWVcbiAqIEBwYXJhbSBnY1RpbWVvdXQgLSBXaGVuIHRvIHJlbW92ZSB0aGUgZGF0YSB1cmlcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2F2ZUZpbGUoZGF0YSwgZmlsZW5hbWUsIGdjVGltZW91dCkge1xuICAgIGlmIChnY1RpbWVvdXQgPT09IHZvaWQgMCkgeyBnY1RpbWVvdXQgPSBHQ19USU1FT1VUOyB9XG4gICAgdmFyIGlzQmxvYiA9IGRhdGEgaW5zdGFuY2VvZiBCbG9iO1xuICAgIHZhciB1cmwgPSBpc0Jsb2IgPyBVUkwuY3JlYXRlT2JqZWN0VVJMKGRhdGEpIDogZGF0YTtcbiAgICB2YXIgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBhLmhyZWYgPSB1cmw7XG4gICAgYS5kb3dubG9hZCA9IGZpbGVuYW1lO1xuICAgIHZhciBjbGljayA9IG5ldyBNb3VzZUV2ZW50KCdjbGljaycpO1xuICAgIC8vIFB1c2ggdGhlIGRvd25sb2FkIG9wZXJhdGlvbiBvbiB0aGUgbmV4dCB0aWNrXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgYS5kaXNwYXRjaEV2ZW50KGNsaWNrKTtcbiAgICB9KTtcbiAgICAvLyBSZXZva2UgdGhlIG9iamVjdCB1cmwgbGF0ZXIgaW4gdGltZVxuICAgIC8vIHdoZW4gdGhlIGRvd25sb2FkIG9mIHRoZSBmaWxlIGlzIGNvbXBsZXRlZCAob3Igc28gd2UgYXNzdW1lKVxuICAgIGlmIChpc0Jsb2IpIHtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBVUkwucmV2b2tlT2JqZWN0VVJMKHVybCk7XG4gICAgICAgIH0sIGdjVGltZW91dCk7XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c2F2ZS1maWxlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBYTUxGb3JtYXR0ZXJPcHRpb25zXG4gKiAgQHByb3BlcnR5IHtTdHJpbmd9IFtpbmRlbnRhdGlvbj0nICAgICddIFRoZSB2YWx1ZSB1c2VkIGZvciBpbmRlbnRhdGlvblxuICogIEBwcm9wZXJ0eSB7ZnVuY3Rpb24obm9kZSk6IGJvb2xlYW59IFtmaWx0ZXJdIFJldHVybiBmYWxzZSB0byBleGNsdWRlIHRoZSBub2RlLlxuICogIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gW2NvbGxhcHNlQ29udGVudD1mYWxzZV0gVHJ1ZSB0byBrZWVwIGNvbnRlbnQgaW4gdGhlIHNhbWUgbGluZSBhcyB0aGUgZWxlbWVudC4gT25seSB3b3JrcyBpZiBlbGVtZW50IGNvbnRhaW5zIGF0IGxlYXN0IG9uZSB0ZXh0IG5vZGVcbiAqICBAcHJvcGVydHkge1N0cmluZ30gW2xpbmVTZXBhcmF0b3I9J1xcclxcbiddIFRoZSBsaW5lIHNlcGFyYXRvciB0byB1c2VcbiAqICBAcHJvcGVydHkge1N0cmluZ30gW3doaXRlU3BhY2VBdEVuZE9mU2VsZmNsb3NpbmdUYWc9ZmFsc2VdIHRvIGVpdGhlciBlbmQgYWQgc2VsZiBjbG9zaW5nIHRhZyB3aXRoIGA8dGFnLz5gIG9yIGA8dGFnIC8+YFxuICovXG5cbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gWE1MRm9ybWF0dGVyU3RhdGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBjb250ZW50XG4gKiBAcGFyYW0ge051bWJlcn0gbGV2ZWxcbiAqIEBwYXJhbSB7WE1MRm9ybWF0dGVyT3B0aW9uc30gb3B0aW9uc1xuICovXG5cbi8qKlxuICogQHBhcmFtIHtYTUxGb3JtYXR0ZXJTdGF0ZX0gc3RhdGVcbiAqIEByZXR1cm4ge3ZvaWR9XG4gKi9cbmZ1bmN0aW9uIG5ld0xpbmUoc3RhdGUpIHtcbiAgICBpZiAoIXN0YXRlLm9wdGlvbnMuaW5kZW50YXRpb24gJiYgIXN0YXRlLm9wdGlvbnMubGluZVNlcGFyYXRvcikgcmV0dXJuO1xuICAgIHN0YXRlLmNvbnRlbnQgKz0gc3RhdGUub3B0aW9ucy5saW5lU2VwYXJhdG9yO1xuICAgIGxldCBpO1xuICAgIGZvciAoaSA9IDA7IGkgPCBzdGF0ZS5sZXZlbDsgaSsrKSB7XG4gICAgICAgIHN0YXRlLmNvbnRlbnQgKz0gc3RhdGUub3B0aW9ucy5pbmRlbnRhdGlvbjtcbiAgICB9XG59XG5cbi8qKlxuICogQHBhcmFtIHtYTUxGb3JtYXR0ZXJTdGF0ZX0gc3RhdGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBjb250ZW50XG4gKiBAcmV0dXJuIHt2b2lkfVxuICovXG5mdW5jdGlvbiBhcHBlbmRDb250ZW50KHN0YXRlLCBjb250ZW50KSB7XG4gICAgc3RhdGUuY29udGVudCArPSBjb250ZW50O1xufVxuXG4vKipcbiAqIEBwYXJhbSB7T2JqZWN0fSBub2RlXG4gKiBAcGFyYW0ge1hNTEZvcm1hdHRlclN0YXRlfSBzdGF0ZVxuICogQHBhcmFtIHtCb29sZWFufSBwcmVzZXJ2ZVNwYWNlXG4gKiBAcmV0dXJuIHt2b2lkfVxuICovXG5mdW5jdGlvbiBwcm9jZXNzTm9kZShub2RlLCBzdGF0ZSwgcHJlc2VydmVTcGFjZSkge1xuICAgIGlmICh0eXBlb2Ygbm9kZS5jb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICBwcm9jZXNzQ29udGVudE5vZGUobm9kZSwgc3RhdGUsIHByZXNlcnZlU3BhY2UpO1xuICAgIH0gZWxzZSBpZiAobm9kZS50eXBlID09PSAnRWxlbWVudCcpIHtcbiAgICAgICAgcHJvY2Vzc0VsZW1lbnROb2RlKG5vZGUsIHN0YXRlLCBwcmVzZXJ2ZVNwYWNlKTtcbiAgICB9IGVsc2UgaWYgKG5vZGUudHlwZSA9PT0gJ1Byb2Nlc3NpbmdJbnN0cnVjdGlvbicpIHtcbiAgICAgICAgcHJvY2Vzc1Byb2Nlc3NpbmdJbnRydWN0aW9uKG5vZGUsIHN0YXRlLCBwcmVzZXJ2ZVNwYWNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gbm9kZSB0eXBlOiAnICsgbm9kZS50eXBlKTtcbiAgICB9XG59XG5cbi8qKlxuICogQHBhcmFtIHtPYmplY3R9IG5vZGVcbiAqIEBwYXJhbSB7WE1MRm9ybWF0dGVyU3RhdGV9IHN0YXRlXG4gKiBAcGFyYW0ge0Jvb2xlYW59IHByZXNlcnZlU3BhY2VcbiAqIEByZXR1cm4ge3ZvaWR9XG4gKi9cbmZ1bmN0aW9uIHByb2Nlc3NDb250ZW50Tm9kZShub2RlLCBzdGF0ZSwgcHJlc2VydmVTcGFjZSkge1xuICAgIGlmICghcHJlc2VydmVTcGFjZSkge1xuICAgICAgICBub2RlLmNvbnRlbnQgPSBub2RlLmNvbnRlbnQudHJpbSgpO1xuICAgIH1cbiAgICBpZiAobm9kZS5jb250ZW50Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgaWYgKCFwcmVzZXJ2ZVNwYWNlICYmIHN0YXRlLmNvbnRlbnQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgbmV3TGluZShzdGF0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgYXBwZW5kQ29udGVudChzdGF0ZSwgbm9kZS5jb250ZW50KTtcbiAgICB9XG59XG5cbi8qKlxuICogQHBhcmFtIHtPYmplY3R9IG5vZGVcbiAqIEBwYXJhbSB7WE1MRm9ybWF0dGVyU3RhdGV9IHN0YXRlXG4gKiBAcGFyYW0ge0Jvb2xlYW59IHByZXNlcnZlU3BhY2VcbiAqIEByZXR1cm4ge3ZvaWR9XG4gKi9cbmZ1bmN0aW9uIHByb2Nlc3NFbGVtZW50Tm9kZShub2RlLCBzdGF0ZSwgcHJlc2VydmVTcGFjZSkge1xuICAgIGlmICghcHJlc2VydmVTcGFjZSAmJiBzdGF0ZS5jb250ZW50Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgbmV3TGluZShzdGF0ZSk7XG4gICAgfVxuXG4gICAgYXBwZW5kQ29udGVudChzdGF0ZSwgJzwnICsgbm9kZS5uYW1lKTtcbiAgICBwcm9jZXNzQXR0cmlidXRlcyhzdGF0ZSwgbm9kZS5hdHRyaWJ1dGVzKTtcblxuICAgIGlmIChub2RlLmNoaWxkcmVuID09PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHNlbGZDbG9zaW5nTm9kZUNsb3NpbmdUYWcgPSBzdGF0ZS5vcHRpb25zLndoaXRlU3BhY2VBdEVuZE9mU2VsZmNsb3NpbmdUYWcgPyAnIC8+JyA6ICcvPidcbiAgICAgICAgLy8gc2VsZi1jbG9zaW5nIG5vZGVcbiAgICAgICAgYXBwZW5kQ29udGVudChzdGF0ZSwgc2VsZkNsb3NpbmdOb2RlQ2xvc2luZ1RhZyk7XG4gICAgfSBlbHNlIGlmIChub2RlLmNoaWxkcmVuLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAvLyBlbXB0eSBub2RlXG4gICAgICAgIGFwcGVuZENvbnRlbnQoc3RhdGUsICc+PC8nICsgbm9kZS5uYW1lICsgJz4nKTtcbiAgICB9IGVsc2Uge1xuXG4gICAgICAgIGFwcGVuZENvbnRlbnQoc3RhdGUsICc+Jyk7XG5cbiAgICAgICAgc3RhdGUubGV2ZWwrKztcblxuICAgICAgICBsZXQgbm9kZVByZXNlcnZlU3BhY2UgPSBub2RlLmF0dHJpYnV0ZXNbJ3htbDpzcGFjZSddID09PSAncHJlc2VydmUnO1xuXG4gICAgICAgIGlmICghbm9kZVByZXNlcnZlU3BhY2UgJiYgc3RhdGUub3B0aW9ucy5jb2xsYXBzZUNvbnRlbnQpIHtcblxuICAgICAgICAgICAgY29uc3QgY29udGFpbnNUZXh0Tm9kZXMgPSBub2RlLmNoaWxkcmVuLnNvbWUoZnVuY3Rpb24oY2hpbGQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2hpbGQudHlwZSA9PT0gJ1RleHQnICYmIGNoaWxkLmNvbnRlbnQudHJpbSgpICE9PSAnJztcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoY29udGFpbnNUZXh0Tm9kZXMpIHtcbiAgICAgICAgICAgICAgICBub2RlUHJlc2VydmVTcGFjZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBub2RlLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24oY2hpbGQpIHtcbiAgICAgICAgICAgIHByb2Nlc3NOb2RlKGNoaWxkLCBzdGF0ZSwgcHJlc2VydmVTcGFjZSB8fCBub2RlUHJlc2VydmVTcGFjZSwgc3RhdGUub3B0aW9ucyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHN0YXRlLmxldmVsLS07XG5cbiAgICAgICAgaWYgKCFwcmVzZXJ2ZVNwYWNlICYmICFub2RlUHJlc2VydmVTcGFjZSkge1xuICAgICAgICAgICAgbmV3TGluZShzdGF0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgYXBwZW5kQ29udGVudChzdGF0ZSwgJzwvJyArIG5vZGUubmFtZSArICc+Jyk7XG4gICAgfVxufVxuXG4vKipcbiAqIEBwYXJhbSB7WE1MRm9ybWF0dGVyU3RhdGV9IHN0YXRlXG4gKiBAcGFyYW0ge1JlY29yZDxTdHJpbmcsIFN0cmluZz59IGF0dHJpYnV0ZXNcbiAqIEByZXR1cm4ge3ZvaWR9XG4gKi9cbmZ1bmN0aW9uIHByb2Nlc3NBdHRyaWJ1dGVzKHN0YXRlLCBhdHRyaWJ1dGVzKSB7XG4gICAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbihhdHRyKSB7XG4gICAgICAgIGNvbnN0IGVzY2FwZWQgPSBhdHRyaWJ1dGVzW2F0dHJdLnJlcGxhY2UoL1wiL2csICcmcXVvdDsnKTtcbiAgICAgICAgYXBwZW5kQ29udGVudChzdGF0ZSwgJyAnICsgYXR0ciArICc9XCInICsgZXNjYXBlZCArICdcIicpO1xuICAgIH0pO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7T2JqZWN0fSBub2RlXG4gKiBAcGFyYW0ge1hNTEZvcm1hdHRlclN0YXRlfSBzdGF0ZVxuICogQHJldHVybiB7dm9pZH1cbiAqL1xuZnVuY3Rpb24gcHJvY2Vzc1Byb2Nlc3NpbmdJbnRydWN0aW9uKG5vZGUsIHN0YXRlKSB7XG4gICAgaWYgKHN0YXRlLmNvbnRlbnQubGVuZ3RoID4gMCkge1xuICAgICAgICBuZXdMaW5lKHN0YXRlKTtcbiAgICB9XG4gICAgYXBwZW5kQ29udGVudChzdGF0ZSwgJzw/JyArIG5vZGUubmFtZSk7XG4gICAgcHJvY2Vzc0F0dHJpYnV0ZXMoc3RhdGUsIG5vZGUuYXR0cmlidXRlcyk7XG4gICAgYXBwZW5kQ29udGVudChzdGF0ZSwgJz8+Jyk7XG59XG5cblxuLyoqXG4gKiBDb252ZXJ0cyB0aGUgZ2l2ZW4gWE1MIGludG8gaHVtYW4gcmVhZGFibGUgZm9ybWF0LlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB4bWxcbiAqIEBwYXJhbSB7WE1MRm9ybWF0dGVyT3B0aW9uc30gb3B0aW9uc1xuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gZm9ybWF0KHhtbCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgb3B0aW9ucy5pbmRlbnRhdGlvbiA9ICdpbmRlbnRhdGlvbicgaW4gb3B0aW9ucyA/IG9wdGlvbnMuaW5kZW50YXRpb24gOiAnICAgICc7XG4gICAgb3B0aW9ucy5jb2xsYXBzZUNvbnRlbnQgPSBvcHRpb25zLmNvbGxhcHNlQ29udGVudCA9PT0gdHJ1ZTtcbiAgICBvcHRpb25zLmxpbmVTZXBhcmF0b3IgPSAnbGluZVNlcGFyYXRvcicgaW4gb3B0aW9ucyA/IG9wdGlvbnMubGluZVNlcGFyYXRvciA6ICdcXHJcXG4nO1xuICAgIG9wdGlvbnMud2hpdGVTcGFjZUF0RW5kT2ZTZWxmY2xvc2luZ1RhZyA9ICEhb3B0aW9ucy53aGl0ZVNwYWNlQXRFbmRPZlNlbGZjbG9zaW5nVGFnO1xuXG4gICAgY29uc3QgcGFyc2VyID0gcmVxdWlyZSgneG1sLXBhcnNlci14bycpO1xuICAgIGNvbnN0IHBhcnNlZFhtbCA9IHBhcnNlcih4bWwsIHtmaWx0ZXI6IG9wdGlvbnMuZmlsdGVyfSk7XG4gICAgY29uc3Qgc3RhdGUgPSB7Y29udGVudDogJycsIGxldmVsOiAwLCBvcHRpb25zOiBvcHRpb25zfTtcblxuICAgIGlmIChwYXJzZWRYbWwuZGVjbGFyYXRpb24pIHtcbiAgICAgICAgcHJvY2Vzc1Byb2Nlc3NpbmdJbnRydWN0aW9uKHBhcnNlZFhtbC5kZWNsYXJhdGlvbiwgc3RhdGUpO1xuICAgIH1cblxuICAgIHBhcnNlZFhtbC5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkKSB7XG4gICAgICAgIHByb2Nlc3NOb2RlKGNoaWxkLCBzdGF0ZSwgZmFsc2UpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHN0YXRlLmNvbnRlbnQ7XG59XG5cblxubW9kdWxlLmV4cG9ydHMgPSBmb3JtYXQ7XG4iLCIvKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IFBhcnNpbmdPcHRpb25zXG4gKiAgQHByb3BlcnR5IHtmdW5jdGlvbihub2RlKX0gZmlsdGVyIFJldHVybnMgZmFsc2UgdG8gZXhjbHVkZSBhIG5vZGUuIERlZmF1bHQgaXMgdHJ1ZS5cbiAqL1xuXG4vKipcbiAqIFBhcnNlIHRoZSBnaXZlbiBYTUwgc3RyaW5nIGludG8gYW4gb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB4bWxcbiAqIEBwYXJhbSB7UGFyc2luZ09wdGlvbnN9IFtvcHRpb25zXVxuICogQHJldHVybiB7T2JqZWN0fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuZnVuY3Rpb24gcGFyc2UoeG1sLCBvcHRpb25zID0ge30pIHtcblxuICAgIG9wdGlvbnMuZmlsdGVyID0gb3B0aW9ucy5maWx0ZXIgfHwgKCgpID0+IHRydWUpO1xuXG4gICAgZnVuY3Rpb24gbmV4dENoaWxkKCkge1xuICAgICAgICByZXR1cm4gdGFnKCkgfHwgY29udGVudCgpIHx8IGNvbW1lbnQoKSB8fCBjZGF0YSgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG5leHRSb290Q2hpbGQoKSB7XG4gICAgICAgIG1hdGNoKC9cXHMqLyk7XG4gICAgICAgIHJldHVybiB0YWcodHJ1ZSkgfHwgY29tbWVudCgpIHx8IGRvY3R5cGUoKSB8fCBwcm9jZXNzaW5nSW5zdHJ1Y3Rpb24oZmFsc2UpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRvY3VtZW50KCkge1xuICAgICAgICBjb25zdCBkZWNsID0gZGVjbGFyYXRpb24oKTtcbiAgICAgICAgY29uc3QgY2hpbGRyZW4gPSBbXTtcbiAgICAgICAgbGV0IGRvY3VtZW50Um9vdE5vZGU7XG4gICAgICAgIGxldCBjaGlsZCA9IG5leHRSb290Q2hpbGQoKTtcblxuICAgICAgICB3aGlsZSAoY2hpbGQpIHtcbiAgICAgICAgICAgIGlmIChjaGlsZC5ub2RlLnR5cGUgPT09ICdFbGVtZW50Jykge1xuICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudFJvb3ROb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRm91bmQgbXVsdGlwbGUgcm9vdCBub2RlcycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBkb2N1bWVudFJvb3ROb2RlID0gY2hpbGQubm9kZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFjaGlsZC5leGNsdWRlZCkge1xuICAgICAgICAgICAgICAgIGNoaWxkcmVuLnB1c2goY2hpbGQubm9kZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNoaWxkID0gbmV4dFJvb3RDaGlsZCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFkb2N1bWVudFJvb3ROb2RlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBwYXJzZSBYTUwnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkZWNsYXJhdGlvbjogZGVjbCA/IGRlY2wubm9kZSA6IG51bGwsXG4gICAgICAgICAgICByb290OiBkb2N1bWVudFJvb3ROb2RlLFxuICAgICAgICAgICAgY2hpbGRyZW5cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZWNsYXJhdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHByb2Nlc3NpbmdJbnN0cnVjdGlvbih0cnVlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwcm9jZXNzaW5nSW5zdHJ1Y3Rpb24obWF0Y2hEZWNsYXJhdGlvbikge1xuICAgICAgICBjb25zdCBtID0gbWF0Y2hEZWNsYXJhdGlvbiA/IG1hdGNoKC9ePFxcPyh4bWwpXFxzKi8pIDogbWF0Y2goL148XFw/KFtcXHctOi5dKylcXHMqLyk7XG4gICAgICAgIGlmICghbSkgcmV0dXJuO1xuXG4gICAgICAgIC8vIHRhZ1xuICAgICAgICBjb25zdCBub2RlID0ge1xuICAgICAgICAgICAgbmFtZTogbVsxXSxcbiAgICAgICAgICAgIHR5cGU6ICdQcm9jZXNzaW5nSW5zdHJ1Y3Rpb24nLFxuICAgICAgICAgICAgYXR0cmlidXRlczoge31cbiAgICAgICAgfTtcblxuICAgICAgICAvLyBhdHRyaWJ1dGVzXG4gICAgICAgIHdoaWxlICghKGVvcygpIHx8IGlzKCc/PicpKSkge1xuICAgICAgICAgICAgY29uc3QgYXR0ciA9IGF0dHJpYnV0ZSgpO1xuICAgICAgICAgICAgaWYgKCFhdHRyKSByZXR1cm4gbm9kZTtcbiAgICAgICAgICAgIG5vZGUuYXR0cmlidXRlc1thdHRyLm5hbWVdID0gYXR0ci52YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1hdGNoKC9cXD8+Lyk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGV4Y2x1ZGVkOiBtYXRjaERlY2xhcmF0aW9uID8gZmFsc2UgOiBvcHRpb25zLmZpbHRlcihub2RlKSA9PT0gZmFsc2UsXG4gICAgICAgICAgICBub2RlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdGFnKG1hdGNoUm9vdCkge1xuICAgICAgICBjb25zdCBtID0gbWF0Y2goL148KFtcXHctOi5dKylcXHMqLyk7XG4gICAgICAgIGlmICghbSkgcmV0dXJuO1xuXG4gICAgICAgIC8vIG5hbWVcbiAgICAgICAgY29uc3Qgbm9kZSA9IHtcbiAgICAgICAgICAgIHR5cGU6ICdFbGVtZW50JyxcbiAgICAgICAgICAgIG5hbWU6IG1bMV0sXG4gICAgICAgICAgICBhdHRyaWJ1dGVzOiB7fSxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXVxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIGF0dHJpYnV0ZXNcbiAgICAgICAgd2hpbGUgKCEoZW9zKCkgfHwgaXMoJz4nKSB8fCBpcygnPz4nKSB8fCBpcygnLz4nKSkpIHtcbiAgICAgICAgICAgIGNvbnN0IGF0dHIgPSBhdHRyaWJ1dGUoKTtcbiAgICAgICAgICAgIGlmICghYXR0cikgcmV0dXJuIG5vZGU7XG4gICAgICAgICAgICBub2RlLmF0dHJpYnV0ZXNbYXR0ci5uYW1lXSA9IGF0dHIudmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBleGNsdWRlZCA9IG1hdGNoUm9vdCA/IGZhbHNlIDogb3B0aW9ucy5maWx0ZXIobm9kZSkgPT09IGZhbHNlO1xuXG4gICAgICAgIC8vIHNlbGYgY2xvc2luZyB0YWdcbiAgICAgICAgaWYgKG1hdGNoKC9eXFxzKlxcLz4vKSkge1xuICAgICAgICAgICAgbm9kZS5jaGlsZHJlbiA9IG51bGw7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGV4Y2x1ZGVkLFxuICAgICAgICAgICAgICAgIG5vZGVcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBtYXRjaCgvXFw/Pz4vKTtcblxuICAgICAgICBpZiAoIWV4Y2x1ZGVkKSB7XG4gICAgICAgICAgICAvLyBjaGlsZHJlblxuICAgICAgICAgICAgbGV0IGNoaWxkID0gbmV4dENoaWxkKCk7XG4gICAgICAgICAgICB3aGlsZSAoY2hpbGQpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWNoaWxkLmV4Y2x1ZGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuY2hpbGRyZW4ucHVzaChjaGlsZC5ub2RlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2hpbGQgPSBuZXh0Q2hpbGQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNsb3NpbmdcbiAgICAgICAgbWF0Y2goL148XFwvW1xcdy06Ll0rPi8pO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBleGNsdWRlZCxcbiAgICAgICAgICAgIG5vZGVcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkb2N0eXBlKCkge1xuICAgICAgICBjb25zdCBtID0gbWF0Y2goL148IURPQ1RZUEVcXHMrW14+XSo+Lyk7XG4gICAgICAgIGlmIChtKSB7XG4gICAgICAgICAgICBjb25zdCBub2RlID0ge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdEb2N1bWVudFR5cGUnLFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IG1bMF1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGV4Y2x1ZGVkOiBvcHRpb25zLmZpbHRlcihub2RlKSA9PT0gZmFsc2UsXG4gICAgICAgICAgICAgICAgbm9kZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNkYXRhKCkge1xuICAgICAgICBpZiAoeG1sLnN0YXJ0c1dpdGgoJzwhW0NEQVRBWycpKSB7XG4gICAgICAgICAgICBjb25zdCBlbmRQb3NpdGlvblN0YXJ0ID0geG1sLmluZGV4T2YoJ11dPicpO1xuICAgICAgICAgICAgaWYgKGVuZFBvc2l0aW9uU3RhcnQgPiAtMSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVuZFBvc2l0aW9uRmluaXNoICA9IGVuZFBvc2l0aW9uU3RhcnQgKyAzO1xuICAgICAgICAgICAgICAgIGNvbnN0IG5vZGUgPSB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdDREFUQScsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHhtbC5zdWJzdHJpbmcoMCwgZW5kUG9zaXRpb25GaW5pc2gpXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB4bWwgPSB4bWwuc2xpY2UoZW5kUG9zaXRpb25GaW5pc2gpO1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGV4Y2x1ZGVkOiBvcHRpb25zLmZpbHRlcihub2RlKSA9PT0gZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIG5vZGVcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY29tbWVudCgpIHtcbiAgICAgICAgY29uc3QgbSA9IG1hdGNoKC9ePCEtLVtcXHNcXFNdKj8tLT4vKTtcbiAgICAgICAgaWYgKG0pIHtcbiAgICAgICAgICAgIGNvbnN0IG5vZGUgPSB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ0NvbW1lbnQnLFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IG1bMF1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGV4Y2x1ZGVkOiBvcHRpb25zLmZpbHRlcihub2RlKSA9PT0gZmFsc2UsXG4gICAgICAgICAgICAgICAgbm9kZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNvbnRlbnQoKSB7XG4gICAgICAgIGNvbnN0IG0gPSBtYXRjaCgvXihbXjxdKykvKTtcbiAgICAgICAgaWYgKG0pIHtcbiAgICAgICAgICAgIGNvbnN0IG5vZGUgPSB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ1RleHQnLFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IG1bMV1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGV4Y2x1ZGVkOiBvcHRpb25zLmZpbHRlcihub2RlKSA9PT0gZmFsc2UsXG4gICAgICAgICAgICAgICAgbm9kZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGF0dHJpYnV0ZSgpIHtcbiAgICAgICAgY29uc3QgbSA9IG1hdGNoKC8oW1xcdzotXSspXFxzKj1cXHMqKFwiW15cIl0qXCJ8J1teJ10qJ3xcXHcrKVxccyovKTtcbiAgICAgICAgaWYgKCFtKSByZXR1cm47XG4gICAgICAgIHJldHVybiB7bmFtZTogbVsxXSwgdmFsdWU6IHN0cmlwKG1bMl0pfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN0cmlwIHF1b3RlcyBmcm9tIGB2YWxgLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHN0cmlwKHZhbCkge1xuICAgICAgICByZXR1cm4gdmFsLnJlcGxhY2UoL15bJ1wiXXxbJ1wiXSQvZywgJycpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1hdGNoIGByZWAgYW5kIGFkdmFuY2UgdGhlIHN0cmluZy5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBtYXRjaChyZSkge1xuICAgICAgICBjb25zdCBtID0geG1sLm1hdGNoKHJlKTtcbiAgICAgICAgaWYgKCFtKSByZXR1cm47XG4gICAgICAgIHhtbCA9IHhtbC5zbGljZShtWzBdLmxlbmd0aCk7XG4gICAgICAgIHJldHVybiBtO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEVuZC1vZi1zb3VyY2UuXG4gICAgICovXG4gICAgZnVuY3Rpb24gZW9zKCkge1xuICAgICAgICByZXR1cm4gMCA9PT0geG1sLmxlbmd0aDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBmb3IgYHByZWZpeGAuXG4gICAgICovXG4gICAgZnVuY3Rpb24gaXMocHJlZml4KSB7XG4gICAgICAgIHJldHVybiAwID09PSB4bWwuaW5kZXhPZihwcmVmaXgpO1xuICAgIH1cblxuICAgIHhtbCA9IHhtbC50cmltKCk7XG5cbiAgICByZXR1cm4gZG9jdW1lbnQoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBwYXJzZTtcbiIsImltcG9ydCBcIi4vaW5kZXgubGVzc1wiO1xuXG5cbmZ1bmN0aW9uIEJ1dHRvbih7YmxvY2sgPSBmYWxzZSwgc3F1YXJlID0gZmFsc2UsIGNsYXNzTmFtZSA9ICcnLCAuLi5wcm9wc30pIHtcbiAgICBjb25zdCBjbGFzc05hbWVzID0gWy4uLm5ldyBTZXQoWydidG4nLCBjbGFzc05hbWUsIGJsb2NrID8gJ19ibG9jaycgOiAnJywgc3F1YXJlID8gJ19zcXVhcmUnIDogJyddKV0uam9pbignICcpO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT17Y2xhc3NOYW1lc30gey4uLnByb3BzfSAvPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uO1xuIiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXgubGVzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIi8vIGltcG9ydCBcIi4vaW5kZXgubGVzc1wiO1xuXG5jb25zdCBIZWFkZXIgPSAoe2NoaWxkcmVuID0gbnVsbCwgZXh0cmEgPSBudWxsfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGw4IHByOCBic2JiIGRmIGFpYyBnX2hyIGJjOmZmZlwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmMSBjOnMgZnMxMiBsaDE2XCI+XG4gICAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PntleHRyYX08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufTtcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiIsImltcG9ydCBcIi4vaW5kZXgubGVzc1wiO1xuXG5mdW5jdGlvbiBJbnB1dCh7YmxvY2sgPSBmYWxzZSwgc21hbGwgPSBmYWxzZSwgY2xhc3NOYW1lID0gJycsIC4uLnByb3BzfSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiRW50ZXJcIlxuICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgaW5wdXQgYnNiYiAke2NsYXNzTmFtZX0gJHtibG9jayA/ICd3MTAwJSBkYicgOiAnJ30gJHtzbWFsbCA/ICdfcycgOiAnJ31gfSB7Li4ucHJvcHN9IC8+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnB1dDtcbiIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4Lmxlc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJmdW5jdGlvbiBUYWJzKHtjbGFzc05hbWUgPSAnJywgZGF0YSwgdGFiSW5kZXgsIG9uQ2hhbmdlfSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgYzp4cyBmdzcwMCBsaDEuNSAke2NsYXNzTmFtZX1gfT5cbiAgICAgICAgICAgIHtkYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiIyNcIiBrZXk9e2l0ZW19XG4gICAgICAgICAgICAgICAgICAgdGl0bGU9e2l0ZW19XG4gICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZGliIHZhdCBwdDggcGI4IHBsOCBwcjggJHtpbmRleCA9PT0gdGFiSW5kZXggPyAnYzptJyA6ICdjOm06aCd9YH1cbiAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlKGluZGV4KTtcbiAgICAgICAgICAgICAgICAgICB9fT57aXRlbX08L2E+KSl9XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFicztcbiIsImltcG9ydCBcIi4vaW5kZXgubGVzc1wiO1xuXG5mdW5jdGlvbiBUZXh0YXJlYSh7Y2xhc3NOYW1lID0gJycsIC4uLnByb3BzfSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDx0ZXh0YXJlYSBwbGFjZWhvbGRlcj1cIkVudGVyXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHRleHRhcmVhIGJzYmIgdzEwMCUgZGIgZnMxMiBsaDIwIHB0OCBwYjggcHI4IHBsOCBicjQgbGgyMCAke2NsYXNzTmFtZX1gfSB7Li4ucHJvcHN9IC8+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBUZXh0YXJlYTtcbiIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4Lmxlc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQge3VzZVN0YXRlfSBmcm9tICdwcmVhY3QvaG9va3MnO1xuaW1wb3J0IHtyZW5kZXJ9IGZyb20gJ3ByZWFjdCc7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL2NvbXBvbmVudC9IZWFkZXIvaW5kZXhcIjtcbmltcG9ydCBUYWJzIGZyb20gXCIuL2NvbXBvbmVudC9UYWJzXCI7XG5pbXBvcnQgQ29uZmlnIGZyb20gXCIuL3BhZ2UvQ29uZmlnL2luZGV4XCI7XG5pbXBvcnQgVG9rZW4gZnJvbSBcIi4vcGFnZS9Ub2tlbi9pbmRleFwiO1xuaW1wb3J0IEhvbWUgZnJvbSBcIi4vcGFnZS9Ib21lL2luZGV4XCI7XG5pbXBvcnQgJy4vaW5kZXgubGVzcyc7XG5cbmNvbnN0IERBVEFfVEFCID0gWydIVE1MJywgJ0NTUycsICdUb2tlbicsICdQcm9qZWN0J107XG5cblxuY29uc3QgQVBQID0gKCkgPT4ge1xuICAgIGNvbnN0IFt0YWJJbmRleCwgc2V0VGFiSW5kZXhdID0gdXNlU3RhdGUoMCk7XG5cbiAgICBjb25zdCBvblRhYkNoYW5nZSA9IChpbmRleCkgPT4ge1xuICAgICAgICBzZXRUYWJJbmRleChpbmRleCk7XG4gICAgICAgIHBhcmVudC5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICBwbHVnaW5NZXNzYWdlOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogYEFQSS5vblRhYkNoYW5nZWAsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGluZGV4XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sICcqJyk7XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8SGVhZGVyXG4gICAgICAgICAgICAgICAgZXh0cmE9e1xuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJjOnMgYzpwcmltYXJ5OmggZnMxNCBmdzUwMCBwbDggcHI4IHB0OCBwYjggZnc3MDBcIlxuICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3MtYWNzcy9maWdtYS10b2tlbi10by1jb2RlXCIgdGFyZ2V0PVwiX2JsYW5rXCIgdGl0bGU9XCJIZWxwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vaW1nLnNoaWVsZHMuaW8vZ2l0aHViL3N0YXJzL3MtYWNzcy9maWdtYS10b2tlbi10by1jb2RlLnN2Zz9zdHlsZT1zb2NpYWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJmaWdtYS10b2tlbi10by1jb2RlXCIvPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgfT5cbiAgICAgICAgICAgICAgICA8VGFicyBjbGFzc05hbWU9XCJmczE0XCIgZGF0YT17REFUQV9UQUJ9IHRhYkluZGV4PXt0YWJJbmRleH0gb25DaGFuZ2U9e29uVGFiQ2hhbmdlfT48L1RhYnM+XG4gICAgICAgICAgICA8L0hlYWRlcj5cbiAgICAgICAgICAgIHsoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0YWJJbmRleCA9PT0gMCB8fCB0YWJJbmRleCA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPEhvbWUgdGFiSW5kZXg9e3RhYkluZGV4fS8+O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGFiSW5kZXggPT09IDMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxDb25maWcvPjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRhYkluZGV4ID09PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8VG9rZW4vPjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9KSgpfVxuICAgICAgICA8Lz5cbiAgICApXG59O1xuXG5yZW5kZXIoPEFQUC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVhY3QtcGFnZScpKTtcbiIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4Lmxlc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJcbmNvbnN0IF9wb3N0Q29uZmlnID0gKHthY3Rpb24sIHZhbHVlfSkgPT4ge1xuICAgIHBhcmVudC5wb3N0TWVzc2FnZSh7XG4gICAgICAgIHBsdWdpbk1lc3NhZ2U6IHtcbiAgICAgICAgICAgIHR5cGU6IGBDT05GSUcuJHthY3Rpb259YCxcbiAgICAgICAgICAgIHZhbHVlXG4gICAgICAgIH1cbiAgICB9LCAnKicpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgX3Bvc3RDb25maWc7IiwiaW1wb3J0IHt1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGV9IGZyb20gJ3ByZWFjdC9ob29rcyc7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi8uLi9jb21wb25lbnQvQnV0dG9uXCI7XG5pbXBvcnQgSW5wdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudC9JbnB1dFwiO1xuaW1wb3J0IFwiLi9pbmRleC5sZXNzXCI7XG5pbXBvcnQgX3Bvc3RDb25maWcgZnJvbSBcIi4vX3Bvc3RDb25maWcuanNcIjtcbmltcG9ydCBUZXh0YXJlYSBmcm9tIFwiLi4vLi4vY29tcG9uZW50L1RleHRhcmVhXCI7XG5pbXBvcnQgc2F2ZUpTT04gZnJvbSBcIi4uLy4uL3V0aWxzL3NhdmVKU09OXCI7XG5cbmNvbnN0IENvbmZpZyA9ICgpID0+IHtcbiAgICBjb25zdCBbY29uZmlnLCBzZXRDb25maWddID0gdXNlU3RhdGUoe30pO1xuICAgIGNvbnN0IHtwcm9qZWN0cyA9IFtdLCBjdXJyZW50SW5kZXh9ID0gY29uZmlnO1xuICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdHNbY3VycmVudEluZGV4XTtcbiAgICBjb25zdCBmb3JtID0gdXNlUmVmKG51bGwpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2NvbmZpZyB1c2VFZmZlY3QnKTtcbiAgICAgICAgb25tZXNzYWdlID0gKCh7ZGF0YToge3BsdWdpbk1lc3NhZ2V9ID0ge319KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7Z2V0Q29uZmlnID0gbnVsbCwgYWxlcnRNc2cgPSBudWxsfSA9IHBsdWdpbk1lc3NhZ2U7XG4gICAgICAgICAgICAoZ2V0Q29uZmlnICE9PSBudWxsKSAmJiBzZXRDb25maWcoZ2V0Q29uZmlnKTtcbiAgICAgICAgICAgIChhbGVydE1zZyAhPT0gbnVsbCkgJiYgYWxlcnRNc2cgJiYgYWxlcnQoYWxlcnRNc2cpO1xuICAgICAgICB9KTtcbiAgICB9LCBbXSk7XG5cbiAgICAvLyDmt7vliqDmlrDnmoTpobnnm65cbiAgICBjb25zdCBhZGROZXcgPSAodmFsdWUgPSB7fSkgPT4ge1xuICAgICAgICAvLyDmsqHmnInlkI3lrZdcbiAgICAgICAgaWYgKCF2YWx1ZS5uYW1lKSB7XG4gICAgICAgICAgICBhbGVydChgUHJvamVjdCBOYW1lIGlzIHJlcXVpcmVkIWApO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIOW3sue7j+WtmOWcqFxuICAgICAgICBpZiAocHJvamVjdHMuZmluZCgoaXRlbSkgPT4gaXRlbS5uYW1lID09PSB2YWx1ZS5uYW1lKSkge1xuICAgICAgICAgICAgYWxlcnQoYCR7dmFsdWUubmFtZX0gaXMgZXhpc3QhYCk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgX3Bvc3RDb25maWcoe1xuICAgICAgICAgICAgYWN0aW9uOiAnYWRkTmV3UHJvamVjdCcsXG4gICAgICAgICAgICB2YWx1ZVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgLy8g5re75YqgXG4gICAgY29uc3Qgb25BZGQgPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IGZvcm0gPSBlLnRhcmdldDtcbiAgICAgICAgY29uc3QgbmV3TmFtZSA9IGZvcm0ubmFtZS52YWx1ZS50cmltKCk7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGFkZE5ldyh7bmFtZTogbmV3TmFtZX0pO1xuICAgICAgICAocmVzdWx0ICE9PSBmYWxzZSkgJiYgZm9ybS5yZXNldCgpO1xuICAgIH07XG5cbiAgICAvLyDkv67mlLnlvZPliY3pgInkuK1cbiAgICBjb25zdCBvbkNoYW5nZUN1cnJlbnQgPSAoZSkgPT4ge1xuICAgICAgICBfcG9zdENvbmZpZyh7XG4gICAgICAgICAgICBhY3Rpb246ICdjaGFuZ2VDdXJyZW50JyxcbiAgICAgICAgICAgIHZhbHVlOiBlLnRhcmdldC52YWx1ZVxuICAgICAgICB9KTtcbiAgICAgICAgZm9ybS5jdXJyZW50LnJlc2V0KCk7XG4gICAgfTtcblxuICAgIC8vIOagoemqjOmhueebruaYr+WQpuW3sue7j+WtmOWcqFxuICAgIGNvbnN0IGNoZWNrTmFtZSA9ICh2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgICAgICBhbGVydCgncHJvamVjdCBuYW1lIGlzIHJlcXVpcmVkIScpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoY3VycmVudFByb2plY3QubmFtZSAhPT0gdmFsdWUpICYmIHByb2plY3RzLmZpbmQoKGl0ZW0pID0+IGl0ZW0ubmFtZSA9PT0gdmFsdWUpKSB7XG4gICAgICAgICAgICBhbGVydChgJHt2YWx1ZX0gaXMgZXhpc3QhYCk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbiAgICAvLyDliKDpmaRcbiAgICBjb25zdCBvbkRlbCA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gY29uZmlybShgQXJlIHlvdSBzdXJlIHRvIGRlbGV0ZSAke2N1cnJlbnRQcm9qZWN0Lm5hbWV9P2ApO1xuICAgICAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIF9wb3N0Q29uZmlnKHtcbiAgICAgICAgICAgIGFjdGlvbjogJ3JlbW92ZScsXG4gICAgICAgICAgICB2YWx1ZTogY3VycmVudEluZGV4XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvLyDkuIvovb0gSlNPTlxuICAgIGNvbnN0IG9uRG93bkxvYWQgPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHNhdmVKU09OKGN1cnJlbnRQcm9qZWN0LCBjdXJyZW50UHJvamVjdC5uYW1lKTtcbiAgICB9O1xuICAgIC8vIOS/ruaUuVxuICAgIGNvbnN0IG9uRWRpdCA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgZm9ybSA9IGUudGFyZ2V0O1xuICAgICAgICBjb25zdCBkYXRhU2F2ZSA9IGZvcm0uZGF0YS52YWx1ZTtcbiAgICAgICAgY29uc3Qgb2JqRGF0YSA9IEpTT04ucGFyc2UoZGF0YVNhdmUpO1xuXG4gICAgICAgIGlmIChjaGVja05hbWUob2JqRGF0YS5uYW1lKSkge1xuICAgICAgICAgICAgX3Bvc3RDb25maWcoe1xuICAgICAgICAgICAgICAgIGFjdGlvbjogJ3JlcGxhY2VCeUluZGV4JyxcbiAgICAgICAgICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgICAgICAgICBkYXRhOiBvYmpEYXRhLFxuICAgICAgICAgICAgICAgICAgICBpbmRleDogY3VycmVudEluZGV4XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtvbkFkZH0gY2xhc3NOYW1lPVwiZ19yb3cgcHQ4IHBiOCBiYzpmZmYgZGYgYWljXCI+XG4gICAgICAgICAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9XCJjOnMgZnMxMiBtcjhcIj5DdXJyZW50OiA8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICA8c2VsZWN0IG9uQ2hhbmdlPXtvbkNoYW5nZUN1cnJlbnR9IHZhbHVlPXtjdXJyZW50SW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICB7cHJvamVjdHMubWFwKChwcm9qZWN0LCBrZXkpID0+ICg8b3B0aW9uIGtleT17cHJvamVjdC5uYW1lfSB2YWx1ZT17a2V5fT57cHJvamVjdC5uYW1lfTwvb3B0aW9uPikpfVxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgIDxJbnB1dCBwbGFjZWhvbGRlcj1cIkVudGVyIG5ldyBwcm9qZWN0IG5hbWVcIiBjbGFzc05hbWU9XCJmMSBtbDhcIiByZXF1aXJlZCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIvPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e29uRWRpdH0gcmVmPXtmb3JtfSBjbGFzc05hbWU9XCJmMSBkZiBmZGNcIiA+XG4gICAgICAgICAgICAgICAgPFRleHRhcmVhIG5hbWU9XCJkYXRhXCIgY2xhc3NOYW1lPVwiZjFcIiBkZWZhdWx0VmFsdWU9e0pTT04uc3RyaW5naWZ5KGN1cnJlbnRQcm9qZWN0LG51bGwsMil9IHBsYWNlaG9sZGVyPVwiUGFyc2UgeW91ciBjb25maWcgZmlsZSBoZXJlXCIgLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRmIGdfcm93IHB0MTIgcGIxMlwiPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHRpdGxlPVwiRG93bmxvYWRcIiBjbGFzc05hbWU9XCJnX3RpcCBtcjhcIiBkYXRhLXRpdGxlPVwiRG93bmxvYWQgSlNPTlwiIG9uQ2xpY2s9e29uRG93bkxvYWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgRG93bkxvYWRcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIHsobmFtZSA9PT0gJ2RlZmF1bHQnKSA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ190aXBcIiBkYXRhLXRpdGxlPVwiRGVmYXVsdCBDYW4ndCBEZWxldGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGRpc2FibGVkIHRpdGxlPVwiRGVsZXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERlbGV0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cImdfdGlwXCIgdGl0bGU9XCJEZWxldGVcIiBkYXRhLXRpdGxlPVwiRGVsZXRlIHRoaXMgcHJvamVjdFwiIG9uQ2xpY2s9e29uRGVsfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBEZWxldGVcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJyZXNldFwiIGNsYXNzTmFtZT1cIm1sYVwiPlJlc2V0PC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cIm1sOFwiPlNhdmU8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC8+XG4gICAgKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29uZmlnO1xuIiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXgubGVzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBobGpzIGZyb20gJ2hpZ2hsaWdodC5qcy9saWIvY29yZSc7XG5pbXBvcnQgeG1sIGZyb20gJ2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3htbCc7XG5pbXBvcnQgY3NzIGZyb20gJ2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2Nzcyc7XG5pbXBvcnQge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCAnaGlnaGxpZ2h0LmpzL3N0eWxlcy9hdG9tLW9uZS1kYXJrLmNzcyc7XG5cbmhsanMucmVnaXN0ZXJMYW5ndWFnZSgneG1sJywgeG1sKTtcbmhsanMucmVnaXN0ZXJMYW5ndWFnZSgnY3NzJywgY3NzKTtcblxuY29uc3QgQ1NTX01BUCA9IHtcbiAgICBcInhtbFwiOiBcInhtbFwiLFxuICAgIFwiY3NzXCI6IFwiY3NzXCJcbn07XG5cbmZ1bmN0aW9uIEhpZ2hsaWdodCh7Y2hpbGRyZW4gPSBcIlwiLCBjbGFzc05hbWUgPSBcIlwiLCBsYW5ndWFnZSA9IFwieG1sXCJ9KSB7XG4gICAgY29uc3QgW3N0ckh0bWwsIHNldFN0ckh0bWxdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IGFwcGVuZENsYXNzTmFtZSA9IENTU19NQVBbbGFuZ3VhZ2VdIHx8ICcnO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGh0bWwgPSBobGpzLmhpZ2hsaWdodChjaGlsZHJlbiwge2xhbmd1YWdlfSkudmFsdWU7XG4gICAgICAgIHNldFN0ckh0bWwoaHRtbCk7XG4gICAgfSwgW2NoaWxkcmVuLCBsYW5ndWFnZV0pO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxwcmUgY2xhc3NOYW1lPXtgaGxqcyAke2NsYXNzTmFtZX0gJHthcHBlbmRDbGFzc05hbWV9YH0gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IHN0ckh0bWx9fS8+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhpZ2hsaWdodDtcbiIsImZ1bmN0aW9uIE5vU2VsZWN0aW9uKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgc3R5bGU9e3tjb2xvcjogJ3JnYmEoMjU1LDI1NSwyNTUsMC44KScsIGJhY2tncm91bmRDb2xvcjogJyMyODJjMzQnfX0gY2xhc3NOYW1lPVwiZjEgZGYgYWljIGpjYyBmczE0XCI+XG4gICAgICAgICAgICBQbGVhc2UgU2VsZWN0IFNvbWV0aGluZyFcbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTm9TZWxlY3Rpb247XG4iLCJpbXBvcnQgSGlnaGxpZ2h0IGZyb20gXCIuL0hpZ2hsaWdodFwiO1xuXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi8uLi9jb21wb25lbnQvQnV0dG9uXCI7XG5cbmltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3ByZWFjdC9ob29rcyc7XG5pbXBvcnQgY2xpcGJvYXJkQ29weSBmcm9tIFwiY2xpcGJvYXJkLWNvcHlcIjtcbmltcG9ydCBOb1NlbGVjdGlvbiBmcm9tIFwiLi9Ob1NlbGVjdGlvblwiO1xuXG5cbmNvbnN0IERFRkFVTFRfQ09QWSA9ICdDb3B5JztcblxuY29uc3QgQ09ERV9QUkUgPSBgLypcbiAqIEFsbCBydWxlcyBpbiDjgIwgc2Fjc3Mg44CNIHdpbGwgZmlsdGVyIG91dC5cbiAqIE1ha2Ugc3VyZSB5b3UgZ290IOOAjCBzY2FzcyDjgI0gaW4geW91ciBwcm9qZWN0XG4gKiAkIG5wbSBpbnN0YWxsIHNhY3NzXG4gKiBAaW1wb3J0ICd+c2Fjc3MnO1xuICovXFxuXG5gO1xuXG5jb25zdCBSZW5kZXJDU1MgPSAoe25vU2VsZWN0aW9uID0gdHJ1ZSwgY29kZX0pID0+IHtcblxuICAgIGNvbnN0IFtjb3B5VGV4dCwgc2V0Q29weVRleHRdID0gdXNlU3RhdGUoREVGQVVMVF9DT1BZKTtcbiAgICBjb25zdCBvbkNvcHkgPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNsaXBib2FyZENvcHkoY29kZSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBzZXRDb3B5VGV4dChgQ1NTIENvcHkgU3VjY2Vzc2ApO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0Q29weVRleHQoJ0NvcHknKTtcbiAgICAgICAgICAgIH0sIDIwMDApO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICB7bm9TZWxlY3Rpb24gPyA8Tm9TZWxlY3Rpb24vPiA6IChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImYxIG9hXCIgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6ICcjMjgyYzM0J319PlxuICAgICAgICAgICAgICAgICAgICA8SGlnaGxpZ2h0IGxhbmd1YWdlPVwiY3NzXCIgY2xhc3NOYW1lPVwiY3NzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7YCR7Q09ERV9QUkV9JHtjb2RlIHx8ICcnfWB9XG4gICAgICAgICAgICAgICAgICAgIDwvSGlnaGxpZ2h0PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ19yb3cgZGYgYWljIGpjc2IgcHQ4IHBiOCBiYzpmZmZcIj5cbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJtcjhcIiBocmVmPVwiaHR0cHM6Ly93d3cubnBtanMuY29tL3BhY2thZ2Uvc2Fjc3NcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2ltZy5zaGllbGRzLmlvL25wbS92L3NhY3NzLnN2Z1wiIHdpZHRoPVwiODBcIiBoZWlnaHQ9XCIyMFwiIGFsdD1cInNhY3NzXCIvPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtub1NlbGVjdGlvbiB8fCBjb3B5VGV4dCAhPT0gREVGQVVMVF9DT1BZfVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvbkNvcHl9Pntjb3B5VGV4dH08L0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICApXG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZW5kZXJDU1M7XG4iLCJpbXBvcnQgSGlnaGxpZ2h0IGZyb20gXCIuL0hpZ2hsaWdodFwiO1xuaW1wb3J0IGZvcm1hdCBmcm9tIFwieG1sLWZvcm1hdHRlclwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vLi4vY29tcG9uZW50L0J1dHRvblwiO1xuaW1wb3J0IGNsaXBib2FyZENvcHkgZnJvbSBcImNsaXBib2FyZC1jb3B5XCI7XG5cbmltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3ByZWFjdC9ob29rcyc7XG5pbXBvcnQgTm9TZWxlY3Rpb24gZnJvbSBcIi4vTm9TZWxlY3Rpb25cIjtcblxuXG5jb25zdCBERUZBVUxUX0NPUFkgPSAnQ29weSc7XG5cbmNvbnN0IElucHV0SlNYID0gKHtkaXNhYmxlZCA9IHRydWUsIGlzSlNYfSkgPT4ge1xuICAgIGNvbnN0IG9uQ2hhbmdlSlNYID0gKGUpID0+IHtcbiAgICAgICAgcGFyZW50LnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgIHBsdWdpbk1lc3NhZ2U6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBgQ09ORklHLmNoYW5nZUpTWGAsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGUudGFyZ2V0LmNoZWNrZWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgJyonKTtcbiAgICB9O1xuICAgIHJldHVybiAoXG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJtcjE2IGRmIGFpY1wiPlxuICAgICAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9XCJmczE0IG1yNFwiPkpTWDo8L3N0cm9uZz5cbiAgICAgICAgICAgIDxpbnB1dCBkaXNhYmxlZD17ZGlzYWJsZWR9IHR5cGU9XCJjaGVja2JveFwiIGNoZWNrZWQ9e2lzSlNYfSBvbkNoYW5nZT17b25DaGFuZ2VKU1h9Lz5cbiAgICAgICAgPC9sYWJlbD5cbiAgICApXG59XG5cbmNvbnN0IFJlbmRlckh0bWwgPSAoe2NvZGUgPSAnJywgbm9TZWxlY3Rpb24gPSB0cnVlLCBpc0pTWH0pID0+IHtcbiAgICBjb25zdCBbY29weVRleHQsIHNldENvcHlUZXh0XSA9IHVzZVN0YXRlKERFRkFVTFRfQ09QWSk7XG4gICAgY29uc3Qgb25Db3B5ID0gKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjbGlwYm9hcmRDb3B5KGNvZGUpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgc2V0Q29weVRleHQoYEhUTUwgQ29weSBTdWNjZXNzYCk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRDb3B5VGV4dCgnQ29weScpO1xuICAgICAgICAgICAgfSwgMjAwMCk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIHtub1NlbGVjdGlvbiA/IDxOb1NlbGVjdGlvbi8+IDogKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZjEgb2FcIiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogJyMyODJjMzQnfX0+XG4gICAgICAgICAgICAgICAgICAgIDxIaWdobGlnaHQgbGFuZ3VhZ2U9XCJ4bWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtjb2RlID8gYCR7Zm9ybWF0KGA8ZGl2PiR7Y29kZX08L2Rpdj5gKX1gIDogJyd9XG4gICAgICAgICAgICAgICAgICAgIDwvSGlnaGxpZ2h0PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ19yb3cgZGYgYWljIGpjc2IgcHQ4IHBiOCBiYzpmZmZcIj5cbiAgICAgICAgICAgICAgICA8SW5wdXRKU1ggZGlzYWJsZWQ9e25vU2VsZWN0aW9ufSBpc0pTWD17aXNKU1h9Lz5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtub1NlbGVjdGlvbiB8fCBjb3B5VGV4dCAhPT0gREVGQVVMVF9DT1BZfVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvbkNvcHl9Pntjb3B5VGV4dH08L0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBSZW5kZXJIdG1sO1xuIiwiaW1wb3J0IHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdwcmVhY3QvaG9va3MnO1xuaW1wb3J0IFJlbmRlckh0bWwgZnJvbSBcIi4vUmVuZGVySFRNTFwiO1xuaW1wb3J0IFJlbmRlckNTUyBmcm9tIFwiLi9SZW5kZXJDU1NcIjtcblxuY29uc3QgSG9tZSA9ICh7dGFiSW5kZXh9KSA9PiB7XG4gICAgY29uc3QgW2h0bWwsIHNldEh0bWxdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtDU1MsIHNldENTU10gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW2lzSlNYLCBzZXRJc0pTWF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW25vU2VsZWN0aW9uLCBzZXROb1NlbGVjdGlvbl0gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIG9ubWVzc2FnZSA9ICgoe2RhdGE6IHtwbHVnaW5NZXNzYWdlfSA9IHt9fSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qge2dldEhUTUwgPSBudWxsLCBnZXRDU1MgPSBudWxsLCBpc0pTWCA9IG51bGwsIG5vU2VsZWN0aW9uID0gbnVsbH0gPSBwbHVnaW5NZXNzYWdlO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coe2dldEhUTUwsIGdldENTU30pO1xuICAgICAgICAgICAgZ2V0SFRNTCAhPT0gbnVsbCAmJiBzZXRIdG1sKGdldEhUTUwpO1xuICAgICAgICAgICAgZ2V0Q1NTICE9PSBudWxsICYmIHNldENTUyhnZXRDU1MpO1xuICAgICAgICAgICAgaXNKU1ggIT09IG51bGwgJiYgc2V0SXNKU1goaXNKU1gpO1xuICAgICAgICAgICAgbm9TZWxlY3Rpb24gIT09IG51bGwgJiYgc2V0Tm9TZWxlY3Rpb24obm9TZWxlY3Rpb24pO1xuICAgICAgICB9KTtcbiAgICB9LCBbXSk7XG5cbiAgICBpZiAodGFiSW5kZXggPT09IDApIHtcbiAgICAgICAgcmV0dXJuICg8UmVuZGVySHRtbCBub1NlbGVjdGlvbj17bm9TZWxlY3Rpb259IGNvZGU9e2h0bWx9IGlzSlNYPXtpc0pTWH0vPilcbiAgICB9XG4gICAgaWYgKHRhYkluZGV4ID09PSAxKSB7XG4gICAgICAgIHJldHVybiA8UmVuZGVyQ1NTIG5vU2VsZWN0aW9uPXtub1NlbGVjdGlvbn0gY29kZT17Q1NTfS8+XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiIsImltcG9ydCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncHJlYWN0L2NvbXBhdCc7XG5pbXBvcnQgXCIuL2luZGV4Lmxlc3NcIjtcbmltcG9ydCBUZXh0YXJlYSBmcm9tIFwiLi4vLi4vY29tcG9uZW50L1RleHRhcmVhXCI7XG5cbmNvbnN0IFRva2VuID0gKCkgPT4ge1xuICAgIGNvbnN0IFtzZWxlY3Rpb25JbmZvLCBzZXRTZWxlY3Rpb25JbmZvXSA9IHVzZVN0YXRlKHt9KTtcbiAgICBjb25zdCB7bmFtZSA9ICctLScsIHRva2VuOiBzZWxlY3Rpb25Ub2tlbnMgPSB7fX0gPSBzZWxlY3Rpb25JbmZvIHx8IHt9O1xuICAgIGNvbnN0IHNlbGVjdGlvbklkcyA9IE9iamVjdC5rZXlzKHNlbGVjdGlvblRva2Vucyk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBvbm1lc3NhZ2UgPSAoKHtkYXRhOiB7cGx1Z2luTWVzc2FnZX0gPSB7fX0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHtnZXRTZWxlY3Rpb25JbmZvID0gbnVsbCwgYWxlcnRNc2cgPSBudWxsfSA9IHBsdWdpbk1lc3NhZ2U7XG4gICAgICAgICAgICAoZ2V0U2VsZWN0aW9uSW5mbyAhPT0gbnVsbCkgJiYgc2V0U2VsZWN0aW9uSW5mbyhnZXRTZWxlY3Rpb25JbmZvKTtcbiAgICAgICAgICAgIChhbGVydE1zZyAhPT0gbnVsbCkgJiYgYWxlcnRNc2cgJiYgYWxlcnQoYWxlcnRNc2cpO1xuICAgICAgICB9KTtcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImYxIGRmIGZkYyBvaFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnX3JvdyBkZiBhaWMgamNzYiBmczE0IHB0OCBwYjhcIj5cbiAgICAgICAgICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT1cImM6cyBmczEyIG1yOFwiPkN1cnJlbnQ6IDwvc3Ryb25nPlxuICAgICAgICAgICAgICAgIDxzZWxlY3QgZGlzYWJsZWQ+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e25hbWV9PntuYW1lfTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7c2VsZWN0aW9uSWRzLmxlbmd0aCA/IChcbiAgICAgICAgICAgICAgICA8VGV4dGFyZWEgcmVhZG9ubHkgY2xhc3NOYW1lPVwiZjFcIj5cbiAgICAgICAgICAgICAgICAgICAge0pTT04uc3RyaW5naWZ5KHNlbGVjdGlvblRva2VucywgbnVsbCwgMil9XG4gICAgICAgICAgICAgICAgPC9UZXh0YXJlYT5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgPFRleHRhcmVhIGNsYXNzTmFtZT1cImYxIGRmIG9oIGM6cyBmczE0IHRhYyBhaWMgamNjXCI+VGhlIG5vZGUgeW91IHNlbGVjdCB3aXRob3V0IGFueSB0b2tlbjwvVGV4dGFyZWE+XG4gICAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVG9rZW47XG4iLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5sZXNzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiLy8gQHRzLWlnbm9yZVxuaW1wb3J0IHNhdmVGaWxlIGZyb20gXCJzYXZlLWFzLWZpbGVcIjtcbmNvbnN0IHNhdmVKU09OID0gKGRhdGEsIGZpbGVuYW1lID0gJ3NhY3NzLXByb2plY3QnKSA9PiB7XG4gICAgaWYgKCFkYXRhKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QganNvbiA9IEpTT04uc3RyaW5naWZ5KGRhdGEsIG51bGwsIDIpO1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBjb25zdCBmaWxlID0gbmV3IEZpbGUoW2pzb25dLCB7IHR5cGU6ICdhcHBsaWNhdGlvbi9qc29uJyB9KTtcbiAgICBzYXZlRmlsZShmaWxlLCBgJHtmaWxlbmFtZX0uanNvbmApO1xufTtcbmV4cG9ydCBkZWZhdWx0IHNhdmVKU09OO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==