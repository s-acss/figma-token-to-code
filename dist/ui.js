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
___CSS_LOADER_EXPORT___.push([module.i, ".textarea {\n  background-color: #f5f5f5;\n  border: none 0;\n  resize: vertical;\n  resize: none;\n}\n.textarea:focus,\n.textarea:hover {\n  border-color: #333;\n}\n", "",{"version":3,"sources":["webpack://./src/ui/component/Textarea/index.less"],"names":[],"mappings":"AACA;EACE,yBAAA;EACA,cAAA;EACA,gBAAA;EACA,YAAA;AAAF;AAGA;;EACE,kBAAA;AAAF","sourcesContent":["\n.textarea {\n  background-color: #f5f5f5;\n  border: none 0;\n  resize: vertical;\n  resize: none;\n}\n\n.textarea:focus, .textarea:hover {\n  border-color: #333;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/ui/component/Toast/index.less":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/ui/component/Toast/index.less ***!
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
___CSS_LOADER_EXPORT___.push([module.i, ".toast-box {\n  z-index: 100;\n}\n.toast {\n  background-color: rgba(0, 0, 0, 0.8);\n  word-break: break-all;\n}\n.toast-box {\n  opacity: 0;\n  visibility: hidden;\n  transform: translateY(0);\n}\n.toast-box._show {\n  visibility: visible;\n  opacity: 1;\n  transform: translateY(-10px);\n  transition: 200ms;\n}\n", "",{"version":3,"sources":["webpack://./src/ui/component/Toast/index.less"],"names":[],"mappings":"AACA;EACE,YAAA;AAAF;AAGA;EACE,oCAAA;EACA,qBAAA;AADF;AAIA;EACE,UAAA;EACA,kBAAA;EACA,wBAAA;AAFF;AAKA;EACE,mBAAA;EACA,UAAA;EACA,4BAAA;EACA,iBAAA;AAHF","sourcesContent":["\n.toast-box {\n  z-index: 100;\n}\n\n.toast {\n  background-color: rgba(0, 0, 0, 0.8);\n  word-break: break-all;\n}\n\n.toast-box {\n  opacity: 0;\n  visibility: hidden;\n  transform: translateY(0);\n}\n\n.toast-box._show {\n  visibility: visible;\n  opacity: 1;\n  transform: translateY(-10px);\n  transition: 200ms;\n}"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.i, "@charset \"utf-8\";\n.aic {\n  align-items: center;\n}\n.aife {\n  align-items: flex-end;\n}\n.aifs {\n  align-items: flex-start;\n}\n.b0 {\n  bottom: 0;\n}\n.bct {\n  background-color: transparent;\n}\n.bn {\n  border: none;\n}\n.br0 {\n  border-radius: 0;\n}\n.br100\\% {\n  border-radius: 100%;\n}\n.bsbb {\n  box-sizing: border-box;\n}\n.bc_fff {\n  background-color: #fff;\n}\n.bc_000 {\n  background-color: #000;\n}\n.c_000 {\n  color: #000;\n}\n.c_fff {\n  color: #fff;\n}\n.cb {\n  clear: both;\n}\n.cp {\n  cursor: pointer;\n}\n.db {\n  display: block;\n}\n.df {\n  display: flex;\n}\n.di {\n  display: inline;\n}\n.dib {\n  display: inline-block;\n}\n.dif {\n  display: inline-flex;\n}\n.dn {\n  display: none;\n}\n.dt {\n  display: table;\n}\n.dtc {\n  display: table-cell;\n}\n.f1 {\n  flex: 1;\n  min-width: 0;\n}\n.fa {\n  flex: auto;\n}\n.fdc {\n  flex-direction: column;\n}\n.fdr {\n  flex-direction: row;\n}\n.fi {\n  font: inherit;\n}\n.fl {\n  float: left;\n}\n.fr {\n  float: right;\n}\n.fs0 {\n  font-size: 0;\n}\n.fs1 {\n  flex-shrink: 1;\n}\n.fsi {\n  font-style: italic;\n}\n.fsn {\n  font-style: normal;\n}\n.fvsc {\n  font-variant: small-caps;\n  text-transform: lowercase;\n}\n.fw100 {\n  font-weight: 100;\n}\n.fw200 {\n  font-weight: 200;\n}\n.fw300 {\n  font-weight: 300;\n}\n.fw400 {\n  font-weight: 400;\n}\n.fw500 {\n  font-weight: 500;\n}\n.fw600 {\n  font-weight: 600;\n}\n.fw700 {\n  font-weight: 700;\n}\n.fw800 {\n  font-weight: 800;\n}\n.fw900 {\n  font-weight: 900;\n}\n.fwn {\n  font-weight: 400;\n}\n.fww {\n  flex-wrap: wrap;\n}\n.h100\\% {\n  height: 100%;\n}\n.jcc {\n  justify-content: center;\n}\n.jcfe {\n  justify-content: flex-end;\n}\n.jcsa {\n  justify-content: space-around;\n}\n.jcsb {\n  justify-content: space-between;\n}\n.l0 {\n  left: 0;\n}\n.l100\\% {\n  left: 100%;\n}\n.l50\\% {\n  left: 50%;\n}\n.lh1 {\n  line-height: 1;\n}\n.lh1\\.2 {\n  line-height: 1.2;\n}\n.lh1\\.5 {\n  line-height: 1.5;\n}\n.lh1\\.8 {\n  line-height: 1.8;\n}\n.lsn {\n  list-style: none;\n}\n.m0 {\n  margin: 0;\n}\n.mla {\n  margin-left: auto;\n}\n.mra {\n  margin-right: auto;\n}\n.mta {\n  margin-top: auto;\n}\n.mba {\n  margin-bottom: auto;\n}\n.o0 {\n  opacity: 0;\n}\n.oa {\n  overflow: auto;\n  -webkit-overflow-scrolling: touch;\n}\n.oh {\n  overflow: hidden;\n}\n.p0 {\n  padding: 0;\n}\n.pa {\n  position: absolute;\n}\n.pen {\n  pointer-events: none;\n}\n.pf {\n  position: fixed;\n}\n.pr {\n  position: relative;\n}\n.pt100\\% {\n  padding-top: 100%;\n}\n.r0 {\n  right: 0;\n}\n.r100\\% {\n  right: 100%;\n}\n.t0 {\n  top: 0;\n}\n.t100\\% {\n  top: 100%;\n}\n.t50\\% {\n  top: 50%;\n}\n.mw100\\% {\n  max-width: 100%;\n}\n.tac {\n  text-align: center;\n}\n.taj {\n  text-align: justify;\n}\n.tal {\n  text-align: left;\n}\n.tar {\n  text-align: right;\n}\n.tdn {\n  text-decoration: none;\n}\n.tdu {\n  text-decoration: underline;\n}\n.tlf {\n  table-layout: fixed;\n}\n.ttc {\n  text-transform: capitalize;\n}\n.ttl {\n  text-transform: lowercase;\n}\n.ttn {\n  text-transform: none;\n}\n.ttu {\n  text-transform: uppercase;\n}\n.usn {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.vam {\n  vertical-align: middle;\n}\n.vat {\n  vertical-align: top;\n}\n.vh {\n  visibility: hidden;\n}\n.w100\\% {\n  width: 100%;\n}\n.wan {\n  -webkit-appearance: none;\n}\n.wsn {\n  white-space: nowrap;\n}\n.wwbw {\n  word-wrap: break-word;\n  word-break: break-all;\n}\n.zi1 {\n  z-index: 1;\n}\n/**\n * #SACSS(font-size; fs; 12, 16; 1px);\n * @prop: 属性名\n * @name: 缩写名\n * @list: 值列表\n * @unit: 单位换算表达式, 默认为1px, 想要 rem 填写 1/16*1rem\n */\n/**\n * #SACSS(font-weight; fw; 400, 700);\n * @prop: 属性名\n * @name: 缩写名\n * @list: 值列表\n */\n/* 清除浮动 */\n/* 文字超出一行点点点 */\n/* 多行文本超出点点点 */\n/* 用表格的方式撑满浮动之后的剩余空间 */\n.mt-1 {\n  margin-top: -0.0625rem;\n}\n.mt4 {\n  margin-top: 0.25rem;\n}\n.mt8 {\n  margin-top: 0.5rem;\n}\n.mt12 {\n  margin-top: 0.75rem;\n}\n.mt16 {\n  margin-top: 1rem;\n}\n.mb-1 {\n  margin-bottom: -0.0625rem;\n}\n.mb4 {\n  margin-bottom: 0.25rem;\n}\n.mb8 {\n  margin-bottom: 0.5rem;\n}\n.mb12 {\n  margin-bottom: 0.75rem;\n}\n.mb16 {\n  margin-bottom: 1rem;\n}\n.mr-1 {\n  margin-right: -0.0625rem;\n}\n.mr4 {\n  margin-right: 0.25rem;\n}\n.mr8 {\n  margin-right: 0.5rem;\n}\n.mr12 {\n  margin-right: 0.75rem;\n}\n.mr16 {\n  margin-right: 1rem;\n}\n.ml-1 {\n  margin-left: -0.0625rem;\n}\n.ml4 {\n  margin-left: 0.25rem;\n}\n.ml8 {\n  margin-left: 0.5rem;\n}\n.ml12 {\n  margin-left: 0.75rem;\n}\n.ml16 {\n  margin-left: 1rem;\n}\n.pt4 {\n  padding-top: 0.25rem;\n}\n.pt8 {\n  padding-top: 0.5rem;\n}\n.pt12 {\n  padding-top: 0.75rem;\n}\n.pt16 {\n  padding-top: 1rem;\n}\n.pr4 {\n  padding-right: 0.25rem;\n}\n.pr8 {\n  padding-right: 0.5rem;\n}\n.pr12 {\n  padding-right: 0.75rem;\n}\n.pr16 {\n  padding-right: 1rem;\n}\n.pb4 {\n  padding-bottom: 0.25rem;\n}\n.pb8 {\n  padding-bottom: 0.5rem;\n}\n.pb12 {\n  padding-bottom: 0.75rem;\n}\n.pb16 {\n  padding-bottom: 1rem;\n}\n.pl4 {\n  padding-left: 0.25rem;\n}\n.pl8 {\n  padding-left: 0.5rem;\n}\n.pl12 {\n  padding-left: 0.75rem;\n}\n.pl16 {\n  padding-left: 1rem;\n}\n.fw600 {\n  font-weight: 600;\n}\n.fw600 {\n  font-weight: 600;\n}\n.fs12 {\n  font-size: 0.75rem;\n}\n.fs14 {\n  font-size: 0.875rem;\n}\n.fs16 {\n  font-size: 1rem;\n}\n.fs20 {\n  font-size: 1.25rem;\n}\n.lh16 {\n  line-height: 1rem;\n}\n.lh20 {\n  line-height: 1.25rem;\n}\n.lh24 {\n  line-height: 1.5rem;\n}\n.br2 {\n  border-radius: 2px;\n}\n.br4 {\n  border-radius: 4px;\n}\n.h24 {\n  height: 1.5rem;\n}\n.c\\:l,\n.c\\:l\\:h:hover {\n  color: #111;\n}\n.c\\:m,\n.c\\:m\\:h:hover {\n  color: #333;\n}\n.c\\:s,\n.c\\:s\\:h:hover {\n  color: #666;\n}\n.c\\:xs,\n.c\\:xs\\:h:hover {\n  color: #999;\n}\n.c\\:primary,\n.c\\:primary\\:h:hover {\n  color: #4c5fe2;\n}\n.td200 {\n  transition-duration: 200ms;\n}\n/* others */\n* {\n  font: inherit;\n  color: inherit;\n  text-decoration: inherit;\n}\nroot {\n  font-size: 16px;\n}\nsvg {\n  width: 1em;\n  height: 1em;\n  fill: currentColor;\n}\nbody,\npre,\nform,\ninput,\np {\n  margin: 0;\n}\nbody {\n  font-family: sans-serif;\n}\nbody,\nhtml {\n  height: 100%;\n  overflow: hidden;\n  background-color: #ffffff;\n}\n.g_wrap {\n  margin-left: 1rem;\n  margin-right: 1rem;\n}\n.g_row {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n.react-page {\n  background-color: red;\n}\n.g_hr {\n  border-bottom: 1px solid #ddd;\n}\n.g_hr_t {\n  border-top: 1px solid #ddd;\n}\n.g_ell {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n/* tips */\n.g_tip[data-title] {\n  text-indent: 0;\n  position: relative;\n  overflow: visible;\n}\n.g_tip[data-title]::before,\n.g_tip[data-title]::after {\n  position: absolute;\n  left: 50%;\n  -ms-pointer-events: none;\n  pointer-events: none;\n  -webkit-transform: translateX(-50%);\n  -ms-transform: translateX(-50%);\n  transform: translateX(-50%);\n  visibility: hidden;\n  z-index: 100;\n}\n.g_tip[data-title]::before {\n  content: attr(data-title);\n  top: -41px;\n  max-width: 90vw;\n  padding: 6px 10px;\n  line-height: 18px;\n  border-radius: 3px;\n  background-color: #373c42;\n  text-align: left;\n  color: #fff;\n  font-size: 12px;\n  font-style: normal;\n  white-space: nowrap;\n}\n.g_tip[data-title]::after {\n  content: '';\n  width: 0;\n  height: 0;\n  overflow: hidden;\n  border: 6px solid transparent;\n  border-top-color: #373c42;\n  top: -12px;\n}\n.g_tip[data-title]:hover::before,\n.g_tip[data-title]:hover::after,\n.g_tip[data-title]:focus::before,\n.g_tip[data-title]:focus::after {\n  -webkit-transition: visibility 0.1s 0.1s;\n  transition: visibility 0.1s 0.1s;\n  visibility: visible;\n}\n.g_tip[data-title]:hover {\n  outline: none;\n}\nselect {\n  font-size: 0.75rem;\n  height: 1.5rem;\n  border-color: #000000;\n  border-radius: 3px;\n}\n", "",{"version":3,"sources":["webpack://./node_modules/sacss/less/SACSS.less","webpack://./node_modules/sacss/index.css","webpack://./src/ui/index.less","webpack://./node_modules/sacss/less/Helpers.less"],"names":[],"mappings":"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DcK,sBAAA;AEsTN;ADpUC;EDcK,mBAAA;AEyTN;ADvUC;EDcK,kBAAA;AE4TN;AD1UC;EDcK,mBAAA;AE+TN;AD7UC;EDcK,gBAAA;AEkUN;ADhVC;EDcK,yBAAA;AEqUN;ADnVC;EDcK,sBAAA;AEwUN;ADtVC;EDcK,qBAAA;AE2UN;ADzVC;EDcK,sBAAA;AE8UN;AD5VC;EDcK,mBAAA;AEiVN;AD/VC;EDcK,wBAAA;AEoVN;ADlWC;EDcK,qBAAA;AEuVN;ADrWC;EDcK,oBAAA;AE0VN;ADxWC;EDcK,qBAAA;AE6VN;AD3WC;EDcK,kBAAA;AEgWN;AD9WC;EDcK,uBAAA;AEmWN;ADjXC;EDcK,oBAAA;AEsWN;ADpXC;EDcK,mBAAA;AEyWN;ADvXC;EDcK,oBAAA;AE4WN;AD1XC;EDcK,iBAAA;AE+WN;AD7XC;EDcK,oBAAA;AEkXN;ADhYC;EDcK,mBAAA;AEqXN;ADnYC;EDcK,oBAAA;AEwXN;ADtYC;EDcK,iBAAA;AE2XN;ADzYC;EDcK,sBAAA;AE8XN;AD5YC;EDcK,qBAAA;AEiYN;AD/YC;EDcK,sBAAA;AEoYN;ADlZC;EDcK,mBAAA;AEuYN;ADrZC;EDcK,uBAAA;AE0YN;ADxZC;EDcK,sBAAA;AE6YN;AD3ZC;EDcK,uBAAA;AEgZN;AD9ZC;EDcK,oBAAA;AEmZN;ADjaC;EDcK,qBAAA;AEsZN;ADpaC;EDcK,oBAAA;AEyZN;ADvaC;EDcK,qBAAA;AE4ZN;AD1aC;EDcK,kBAAA;AE+ZN;AD7aC;EDkCK,gBAAA;AE8YN;ADhbC;EDkCK,gBAAA;AEiZN;ADnbC;EDcK,kBAAA;AEwaN;ADtbC;EDcK,mBAAA;AE2aN;ADzbC;EDcK,eAAA;AE8aN;AD5bC;EDcK,kBAAA;AEibN;AD/bC;EDcK,iBAAA;AEobN;ADlcC;EDcK,oBAAA;AEubN;ADrcC;EDcK,mBAAA;AE0bN;ADxcC;EDcK,kBAAA;AE6bN;AD3cC;EDcK,kBAAA;AEgcN;AArbA;EAAM,cAAA;AAwbN;AAtbA;;EACE,WAAA;AAybF;AAtbA;;EACE,WAAA;AAybF;AAtbA;;EACE,WAAA;AAybF;AAtbA;;EACE,WAAA;AAybF;AAtbA;;EACE,cAAA;AAybF;AAtbA;EACE,0BAAA;AAwbF;AACA,WAAW;AArbX;EACE,aAAA;EACA,cAAA;EACA,wBAAA;AAubF;AApbA;EACE,eAAA;AAsbF;AAnbA;EACE,UAAA;EACA,WAAA;EACA,kBAAA;AAqbF;AAlbA;;;;;EACE,SAAA;AAwbF;AArbA;EACE,uBAAA;AAubF;AApbA;;EACE,YAAA;EACA,gBAAA;EACA,yBAAA;AAubF;AApbA;EACE,iBAAA;EACA,kBAAA;AAsbF;AAnbA;EACE,kBAAA;EACA,mBAAA;AAqbF;AAlbA;EACE,qBAAA;AAobF;AAjbA;EACE,6BAAA;AAmbF;AAhbA;EACE,0BAAA;AAkbF;AA/aA;EC/FE,mBAAA;EAAqB,gBAAA;EAAkB,uBAAA;ADmhBzC;AACA,SAAS;AAhbT;EACE,cAAA;EACA,kBAAA;EACA,iBAAA;AAkbF;AA/aA;;EAEE,kBAAA;EACA,SAAA;EACA,wBAAA;EACA,oBAAA;EACA,mCAAA;EACA,+BAAA;EACA,2BAAA;EACA,kBAAA;EACA,YAAA;AAibF;AA9aA;EACE,yBAAA;EACA,UAAA;EACA,eAAA;EACA,iBAAA;EACA,iBAAA;EACA,kBAAA;EACA,yBAAA;EACA,gBAAA;EACA,WAAA;EACA,eAAA;EACA,kBAAA;EACA,mBAAA;AAgbF;AA7aA;EACE,WAAA;EACA,QAAA;EACA,SAAA;EACA,gBAAA;EACA,6BAAA;EACA,yBAAA;EACA,UAAA;AA+aF;AA5aA;;;;EAIE,wCAAA;EACA,gCAAA;EACA,mBAAA;AA8aF;AA3aA;EACE,aAAA;AA6aF;AA1aA;EACE,kBAAA;EACA,cAAA;EACA,qBAAA;EACA,kBAAA;AA4aF","sourcesContent":["@charset \"utf-8\";\n/**\n * #SACSS(font-size; fs; 12, 16; 1px);\n * @prop: 属性名\n * @name: 缩写名\n * @list: 值列表\n * @unit: 单位换算表达式, 默认为1px, 想要 rem 填写 1/16*1rem\n */\n#SACSS(@prop; @name; @list; @unit) when not(@list = false) {\n  @escapeProp: escape(@prop);\n  @escapeName: escape(@name);\n  .loop(@i) when (@i < length(@list) + 1) {\n    @item: extract(@list, @i);\n    .@{escapeName}@{item} {\n      @{escapeProp}: @item * @unit;\n    }\n    .loop(@i+1);\n  }\n\n  .loop(1);\n}\n\n/**\n * #SACSS(font-weight; fw; 400, 700);\n * @prop: 属性名\n * @name: 缩写名\n * @list: 值列表\n */\n#SACSS(@prop; @name; @list;) when not(@list =false) {\n  @escapeProp: escape(@prop);\n  @escapeName: escape(@name);\n  .loop(@i) when (@i < length(@list) + 1) {\n    @item: extract(@list, @i);\n    .@{escapeName}@{item} {\n      @{escapeProp}: @item;\n    }\n    .loop(@i+1);\n  }\n  .loop(1);\n}\n",".aic{align-items:center}\n.aife{align-items:flex-end}\n.aifs{align-items:flex-start}\n.b0{bottom:0}\n.bct{background-color:transparent}\n.bn{border:none}\n.br0{border-radius:0}\n.br100\\%{border-radius:100%}\n.bsbb{box-sizing:border-box}\n.bc_fff{background-color:#fff}\n.bc_000{background-color:#000}\n.c_000{color:#000}\n.c_fff{color:#fff}\n.cb{clear:both}\n.cp{cursor:pointer}\n.db{display:block}\n.df{display:flex}\n.di{display:inline}\n.dib{display:inline-block}\n.dif{display:inline-flex}\n.dn{display:none}\n.dt{display:table}\n.dtc{display:table-cell}\n.f1{flex:1;min-width:0}\n.fa{flex:auto}\n.fdc{flex-direction:column}\n.fdr{flex-direction:row}\n.fi{font:inherit}\n.fl{float:left}\n.fr{float:right}\n.fs0{font-size:0}\n.fs1{flex-shrink:1}\n.fsi{font-style:italic}\n.fsn{font-style:normal}\n.fvsc{font-variant:small-caps;text-transform:lowercase}\n.fw100{font-weight:100}\n.fw200{font-weight:200}\n.fw300{font-weight:300}\n.fw400{font-weight:400}\n.fw500{font-weight:500}\n.fw600{font-weight:600}\n.fw700{font-weight:700}\n.fw800{font-weight:800}\n.fw900{font-weight:900}\n.fwn{font-weight:400}\n.fww{flex-wrap:wrap}\n.h100\\%{height:100%}\n.jcc{justify-content:center}\n.jcfe{justify-content:flex-end}\n.jcsa{justify-content:space-around}\n.jcsb{justify-content:space-between}\n.l0{left:0}\n.l100\\%{left:100%}\n.l50\\%{left:50%}\n.lh1{line-height:1}\n.lh1\\.2{line-height:1.2}\n.lh1\\.5{line-height:1.5}\n.lh1\\.8{line-height:1.8}\n.lsn{list-style:none}\n.m0{margin:0}\n.mla{margin-left:auto}\n.mra{margin-right:auto}\n.mta{margin-top:auto}\n.mba{margin-bottom:auto}\n.o0{opacity:0}\n.oa{overflow:auto;-webkit-overflow-scrolling:touch}\n.oh{overflow:hidden}\n.p0{padding:0}\n.pa{position:absolute}\n.pen{pointer-events:none}\n.pf{position:fixed}\n.pr{position:relative}\n.pt100\\%{padding-top:100%}\n.r0{right:0}\n.r100\\%{right:100%}\n.t0{top:0}\n.t100\\%{top:100%}\n.t50\\%{top:50%}\n.mw100\\%{max-width:100%}\n.tac{text-align:center}\n.taj{text-align:justify}\n.tal{text-align:left}\n.tar{text-align:right}\n.tdn{text-decoration:none}\n.tdu{text-decoration:underline}\n.tlf{table-layout:fixed}\n.ttc{text-transform:capitalize}\n.ttl{text-transform:lowercase}\n.ttn{text-transform:none}\n.ttu{text-transform:uppercase}\n.usn{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}\n.vam{vertical-align:middle}\n.vat{vertical-align:top}\n.vh{visibility:hidden}\n.w100\\%{width:100%}\n.wan{-webkit-appearance:none}\n.wsn{white-space:nowrap}\n.wwbw{word-wrap:break-word;word-break:break-all}\n.zi1{z-index:1}","@import '~sacss';\n@import '~sacss/less/SACSS.less';\n@import '~sacss/less/Helpers.less';\n\n\n@rem: 1/16rem;\n\n@margins: -1, 4, 8, 12, 16;\n#SACSS(margin-top; mt; @margins; @rem);\n#SACSS(margin-bottom; mb; @margins; @rem);\n#SACSS(margin-right; mr; @margins; @rem);\n#SACSS(margin-left; ml; @margins; @rem);\n\n@paddings: 4, 8, 12, 16;\n#SACSS(padding-top; pt; @paddings; @rem);\n#SACSS(padding-right; pr; @paddings; @rem);\n#SACSS(padding-bottom; pb; @paddings; @rem);\n#SACSS(padding-left; pl; @paddings; @rem);\n\n#SACSS(font-weight; fw; 600);\n#SACSS(font-weight; fw; 600);\n#SACSS(font-size; fs; 12, 14, 16, 20; 1/16rem);\n#SACSS(line-height; lh; 16, 20, 24; 1/16rem);\n#SACSS(border-radius; br; 2, 4; 1px);\n\n.h24{ height: 1.5rem; }\n\n.c\\:l, .c\\:l\\:h:hover {\n  color: #111;\n}\n\n.c\\:m, .c\\:m\\:h:hover {\n  color: #333;\n}\n\n.c\\:s, .c\\:s\\:h:hover {\n  color: #666;\n}\n\n.c\\:xs, .c\\:xs\\:h:hover {\n  color: #999;\n}\n\n.c\\:primary, .c\\:primary\\:h:hover {\n  color: #4c5fe2;\n}\n\n.td200 {\n  transition-duration: 200ms;\n}\n\n/* others */\n* {\n  font: inherit;\n  color: inherit;\n  text-decoration: inherit;\n}\n\nroot {\n  font-size: 16px;\n}\n\nsvg {\n  width: 1em;\n  height: 1em;\n  fill: currentColor;\n}\n\nbody, pre, form, input, p {\n  margin: 0;\n}\n\nbody {\n  font-family: sans-serif;\n}\n\nbody, html {\n  height: 100%;\n  overflow: hidden;\n  background-color: #ffffff;\n}\n\n.g_wrap {\n  margin-left: 1rem;\n  margin-right: 1rem;\n}\n\n.g_row {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n\n.react-page {\n  background-color: red;\n}\n\n.g_hr {\n  border-bottom: 1px solid #ddd;\n}\n\n.g_hr_t {\n  border-top: 1px solid #ddd;\n}\n\n.g_ell {\n  #Ellipsis();\n}\n\n/* tips */\n.g_tip[data-title] {\n  text-indent: 0;\n  position: relative;\n  overflow: visible;\n}\n\n.g_tip[data-title]::before,\n.g_tip[data-title]::after {\n  position: absolute;\n  left: 50%;\n  -ms-pointer-events: none;\n  pointer-events: none;\n  -webkit-transform: translateX(-50%);\n  -ms-transform: translateX(-50%);\n  transform: translateX(-50%);\n  visibility: hidden;\n  z-index: 100;\n}\n\n.g_tip[data-title]::before {\n  content: attr(data-title);\n  top: -41px;\n  max-width: 90vw;\n  padding: 6px 10px;\n  line-height: 18px;\n  border-radius: 3px;\n  background-color: #373c42;\n  text-align: left;\n  color: #fff;\n  font-size: 12px;\n  font-style: normal;\n  white-space: nowrap;\n}\n\n.g_tip[data-title]::after {\n  content: '';\n  width: 0;\n  height: 0;\n  overflow: hidden;\n  border: 6px solid transparent;\n  border-top-color: #373c42;\n  top: -12px;\n}\n\n.g_tip[data-title]:hover::before,\n.g_tip[data-title]:hover::after,\n.g_tip[data-title]:focus::before,\n.g_tip[data-title]:focus::after {\n  -webkit-transition: visibility .1s .1s;\n  transition: visibility .1s .1s;\n  visibility: visible;\n}\n\n.g_tip[data-title]:hover {\n  outline: none;\n}\n\nselect{\n  font-size: 12/16*1rem;\n  height: 24/16*1rem;\n  border-color: #000000;\n  border-radius: 3px;\n}","/* 清除浮动 */\n#Clearfix(){\n  &:after{\n    display: table; content: ''; clear: both;\n  }\n}\n\n/* 文字超出一行点点点 */\n#Ellipsis(){\n  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;\n}\n\n/* 多行文本超出点点点 */\n#Ellipsis-multiple(){\n  display: -webkit-box; overflow: hidden; word-wrap: break-word; -webkit-box-orient: vertical;\n}\n\n/* 用表格的方式撑满浮动之后的剩余空间 */\n#Cell(){\n  display: table-cell; *display: inline-block; width: 2000px; *width: auto;\n}\n"],"sourceRoot":""}]);
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

/***/ "./node_modules/highlight.js/lib/languages/json.js":
/*!*********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/json.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: JSON
Description: JSON (JavaScript Object Notation) is a lightweight data-interchange format.
Author: Ivan Sagalaev <maniac@softwaremaniacs.org>
Website: http://www.json.org
Category: common, protocols
*/

function json(hljs) {
  const LITERALS = {
    literal: 'true false null'
  };
  const ALLOWED_COMMENTS = [
    hljs.C_LINE_COMMENT_MODE,
    hljs.C_BLOCK_COMMENT_MODE
  ];
  const TYPES = [
    hljs.QUOTE_STRING_MODE,
    hljs.C_NUMBER_MODE
  ];
  const VALUE_CONTAINER = {
    end: ',',
    endsWithParent: true,
    excludeEnd: true,
    contains: TYPES,
    keywords: LITERALS
  };
  const OBJECT = {
    begin: /\{/,
    end: /\}/,
    contains: [
      {
        className: 'attr',
        begin: /"/,
        end: /"/,
        contains: [hljs.BACKSLASH_ESCAPE],
        illegal: '\\n'
      },
      hljs.inherit(VALUE_CONTAINER, {
        begin: /:/
      })
    ].concat(ALLOWED_COMMENTS),
    illegal: '\\S'
  };
  const ARRAY = {
    begin: '\\[',
    end: '\\]',
    contains: [hljs.inherit(VALUE_CONTAINER)], // inherit is a workaround for a bug that makes shared modes with endsWithParent compile only the ending of one of the parents
    illegal: '\\S'
  };
  TYPES.push(OBJECT, ARRAY);
  ALLOWED_COMMENTS.forEach(function(rule) {
    TYPES.push(rule);
  });
  return {
    name: 'JSON',
    contains: TYPES,
    keywords: LITERALS,
    illegal: '\\S'
  };
}

module.exports = json;


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

/***/ "./src/ui/component/Toast/index.jsx":
/*!******************************************!*\
  !*** ./src/ui/component/Toast/index.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.less */ "./src/ui/component/Toast/index.less");
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact/hooks */ "./node_modules/preact/hooks/dist/hooks.module.js");
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! preact/jsx-runtime */ "./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





function Toast(_ref) {
  var _ref$open = _ref.open,
      open = _ref$open === void 0 ? false : _ref$open,
      _ref$children = _ref.children,
      children = _ref$children === void 0 ? null : _ref$children,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className;

  var _useState = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      show = _useState2[0],
      setShow = _useState2[1];

  Object(preact_hooks__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setShow(open);
  }, [open]);
  return Object(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
    className: "pf df aic jcc t50% l0 w100% pl16 pr16 pen bsbb toast-box ".concat(show ? "_show" : '', " ").concat(className),
    children: Object(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
      className: "toast br4 c_fff pl8 pr8 fs12 lh16 pt8 pb8",
      children: children
    })
  });
}

/* harmony default export */ __webpack_exports__["default"] = (Toast);

/***/ }),

/***/ "./src/ui/component/Toast/index.less":
/*!*******************************************!*\
  !*** ./src/ui/component/Toast/index.less ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_index_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/less-loader/dist/cjs.js!./index.less */ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/ui/component/Toast/index.less");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_index_less__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_index_less__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/ui/component/Toast/toast.jsx":
/*!******************************************!*\
  !*** ./src/ui/component/Toast/toast.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/ui/component/Toast/index.jsx");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! preact/jsx-runtime */ "./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");



var CONTAINER_ID = 'ToastBox';

function getContainer() {
  var $item = document.getElementById(CONTAINER_ID); // 已经存在则什么都不做

  if ($item) {
    return $item;
  }

  var $container = document.createElement('div');
  $container.id = 'CONTAINER_ID';
  document.body.append($container);
  return $container;
}

function toast() {
  var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$showTime = _ref.showTime,
      showTime = _ref$showTime === void 0 ? 2000 : _ref$showTime;

  var $container = getContainer();
  Object(preact__WEBPACK_IMPORTED_MODULE_1__["render"])(Object(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_index__WEBPACK_IMPORTED_MODULE_0__["default"], {
    open: true,
    children: text
  }), $container);
  setTimeout(function () {
    Object(preact__WEBPACK_IMPORTED_MODULE_1__["render"])('', $container);
    document.body.removeChild($container);
  }, showTime);
}

;
/* harmony default export */ __webpack_exports__["default"] = (toast);

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
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.less */ "./src/ui/page/Config/index.less");
/* harmony import */ var _postConfig_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_postConfig.js */ "./src/ui/page/Config/_postConfig.js");
/* harmony import */ var _component_Textarea__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../component/Textarea */ "./src/ui/component/Textarea/index.jsx");
/* harmony import */ var _component_Toast_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../component/Toast/toast */ "./src/ui/component/Toast/toast.jsx");
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! preact/jsx-runtime */ "./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");
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

  var form = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var isEmpty = Object.keys(config).length === 0;
  Object(preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    onmessage = function onmessage(_ref) {
      var _ref$data = _ref.data;
      _ref$data = _ref$data === void 0 ? {} : _ref$data;
      var pluginMessage = _ref$data.pluginMessage;
      var _pluginMessage$getCon = pluginMessage.getConfig,
          getConfig = _pluginMessage$getCon === void 0 ? null : _pluginMessage$getCon,
          _pluginMessage$alertM = pluginMessage.alertMsg,
          alertMsg = _pluginMessage$alertM === void 0 ? null : _pluginMessage$alertM;
      getConfig !== null && setConfig(getConfig || {});
      alertMsg && Object(_component_Toast_toast__WEBPACK_IMPORTED_MODULE_5__["default"])(alertMsg);
    };
  }, []); // 修改

  var onEdit = function onEdit(e) {
    e.preventDefault();
    var dataSave = e.target.data.value;

    if (!dataSave.trimStart().trimEnd()) {
      Object(_component_Toast_toast__WEBPACK_IMPORTED_MODULE_5__["default"])("Config can't empty");
      return;
    }

    try {
      var objData = JSON.parse(dataSave);

      if (objData) {
        Object(_postConfig_js__WEBPACK_IMPORTED_MODULE_3__["default"])({
          action: 'edit',
          value: objData
        });
      }

      form.current.reset();
    } catch (error) {
      Object(_component_Toast_toast__WEBPACK_IMPORTED_MODULE_5__["default"])('Save error');
    }
  };

  return Object(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])("form", {
    onSubmit: onEdit,
    ref: form,
    className: "f1 df fdc",
    children: [Object(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_component_Textarea__WEBPACK_IMPORTED_MODULE_4__["default"], {
      style: {
        backgroundColor: '#282c34',
        color: 'rgba(255, 255, 255, 0.8)',
        borderRadius: 0
      },
      name: "data",
      className: "f1",
      defaultValue: isEmpty ? "" : JSON.stringify(config, null, 2),
      placeholder: "Parse your config here"
    }), Object(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])("div", {
      className: "df aic g_row pt8 pb8",
      children: [Object(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])("p", {
        className: "fs12 c:s",
        children: "\u2B06\uFE0F Parse your config in textarea"
      }), Object(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_component_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
        type: "reset",
        className: "mla",
        children: "Reset"
      }), Object(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_component_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
        type: "submit",
        className: "ml8",
        children: "Save"
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
/* harmony import */ var highlight_js_lib_languages_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highlight.js/lib/languages/json */ "./node_modules/highlight.js/lib/languages/json.js");
/* harmony import */ var highlight_js_lib_languages_json__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_languages_json__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! preact/hooks */ "./node_modules/preact/hooks/dist/hooks.module.js");
/* harmony import */ var highlight_js_styles_atom_one_dark_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! highlight.js/styles/atom-one-dark.css */ "./node_modules/highlight.js/styles/atom-one-dark.css");
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! preact/jsx-runtime */ "./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0___default.a.registerLanguage('xml', highlight_js_lib_languages_xml__WEBPACK_IMPORTED_MODULE_1___default.a);
highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0___default.a.registerLanguage('css', highlight_js_lib_languages_css__WEBPACK_IMPORTED_MODULE_2___default.a);
highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0___default.a.registerLanguage('json', highlight_js_lib_languages_json__WEBPACK_IMPORTED_MODULE_3___default.a);
var CSS_MAP = {
  "xml": "xml",
  "css": "css",
  "json": "json"
};

function Highlight(_ref) {
  var _ref$children = _ref.children,
      children = _ref$children === void 0 ? "" : _ref$children,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? "" : _ref$className,
      _ref$language = _ref.language,
      language = _ref$language === void 0 ? "xml" : _ref$language;

  var _useState = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      _useState2 = _slicedToArray(_useState, 2),
      strHtml = _useState2[0],
      setStrHtml = _useState2[1];

  var appendClassName = CSS_MAP[language] || '';
  Object(preact_hooks__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    var html = highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0___default.a.highlight(children, {
      language: language
    }).value;
    setStrHtml(html);
  }, [children, language]);
  return Object(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])("pre", {
    style: {
      backgroundColor: '#282c34',
      overflow: 'auto'
    },
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
/* harmony import */ var clipboard_copy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clipboard-copy */ "./node_modules/clipboard-copy/index.js");
/* harmony import */ var clipboard_copy__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clipboard_copy__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _NoSelection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NoSelection */ "./src/ui/page/Home/NoSelection/index.jsx");
/* harmony import */ var _component_Toast_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../component/Toast/toast */ "./src/ui/component/Toast/toast.jsx");
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! preact/jsx-runtime */ "./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");








var CODE_PRE = "/*\n * All rules in \u300C sacss \u300D will filter out.\n * Make sure you got \u300C scass \u300D in your project\n * $ npm install sacss\n * @import '~sacss';\n */\n\n";

var RenderCSS = function RenderCSS(_ref) {
  var _ref$noSelection = _ref.noSelection,
      noSelection = _ref$noSelection === void 0 ? true : _ref$noSelection,
      code = _ref.code;

  var onCopy = function onCopy(e) {
    e.preventDefault();
    clipboard_copy__WEBPACK_IMPORTED_MODULE_2___default()(code || '/* nothing */').then(function () {
      Object(_component_Toast_toast__WEBPACK_IMPORTED_MODULE_4__["default"])('CSS Copy Success');
    });
  };

  return Object(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxs"])(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["Fragment"], {
    children: [noSelection ? Object(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_NoSelection__WEBPACK_IMPORTED_MODULE_3__["default"], {}) : Object(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_Highlight__WEBPACK_IMPORTED_MODULE_0__["default"], {
      language: "css",
      className: "f1",
      children: "".concat(CODE_PRE).concat(code || '')
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
        onClick: onCopy,
        children: "Copy"
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
/* harmony import */ var _NoSelection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NoSelection */ "./src/ui/page/Home/NoSelection/index.jsx");
/* harmony import */ var _component_Toast_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../component/Toast/toast */ "./src/ui/component/Toast/toast.jsx");
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! preact/jsx-runtime */ "./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");










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

  var onCopy = function onCopy(e) {
    e.preventDefault();
    clipboard_copy__WEBPACK_IMPORTED_MODULE_3___default()(code).then(function () {
      Object(_component_Toast_toast__WEBPACK_IMPORTED_MODULE_5__["default"])('Html Copy Success');
    });
  };

  return Object(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["Fragment"], {
    children: [noSelection ? Object(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_NoSelection__WEBPACK_IMPORTED_MODULE_4__["default"], {}) : Object(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_Highlight__WEBPACK_IMPORTED_MODULE_0__["default"], {
      className: "f1",
      language: "xml",
      children: code ? xml_formatter__WEBPACK_IMPORTED_MODULE_1___default()(code) : ''
    }), Object(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])("div", {
      className: "g_row df aic jcsb pt8 pb8 bc:fff",
      children: [Object(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(InputJSX, {
        disabled: noSelection,
        isJSX: isJSX
      }), Object(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_component_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
        onClick: onCopy,
        children: "Copy"
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
/* harmony import */ var _component_Toast_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../component/Toast/toast */ "./src/ui/component/Toast/toast.jsx");
/* harmony import */ var _Home_Highlight__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Home/Highlight */ "./src/ui/page/Home/Highlight/index.jsx");
/* harmony import */ var _component_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../component/Button */ "./src/ui/component/Button/index.jsx");
/* harmony import */ var clipboard_copy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! clipboard-copy */ "./node_modules/clipboard-copy/index.js");
/* harmony import */ var clipboard_copy__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(clipboard_copy__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! preact/jsx-runtime */ "./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











var Token = function Token() {
  var _useState = Object(preact_compat__WEBPACK_IMPORTED_MODULE_0__["useState"])({}),
      _useState2 = _slicedToArray(_useState, 2),
      selectionTokens = _useState2[0],
      setSelectionTokens = _useState2[1];

  var selectionIds = Object.keys(selectionTokens);
  Object(preact_compat__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    onmessage = function onmessage(_ref) {
      var _ref$data = _ref.data;
      _ref$data = _ref$data === void 0 ? {} : _ref$data;
      var pluginMessage = _ref$data.pluginMessage;
      var _pluginMessage$alertM = pluginMessage.alertMsg,
          alertMsg = _pluginMessage$alertM === void 0 ? null : _pluginMessage$alertM;
      setSelectionTokens(pluginMessage.selectionTokens || {});
      alertMsg !== null && alertMsg && Object(_component_Toast_toast__WEBPACK_IMPORTED_MODULE_2__["default"])(alertMsg);
    };
  }, []);

  var onCopy = function onCopy(e) {
    e.preventDefault();
    clipboard_copy__WEBPACK_IMPORTED_MODULE_5___default()(JSON.stringify(selectionTokens, null, 2)).then(function () {
      Object(_component_Toast_toast__WEBPACK_IMPORTED_MODULE_2__["default"])('Token Copy Success');
    });
  };

  return Object(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["Fragment"], {
    children: [selectionIds.length ? Object(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_Home_Highlight__WEBPACK_IMPORTED_MODULE_3__["default"], {
      language: "json",
      className: "f1",
      children: JSON.stringify(selectionTokens, null, 2)
    }) : Object(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])("div", {
      className: "f1 dif aic jcc",
      style: {
        backgroundColor: '#282c34',
        color: 'rgba(255, 255, 255, 0.8)'
      },
      children: "The node you selected without any token"
    }), Object(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])("div", {
      className: "g_row df aic jcsb tac pt8 pb8 lh24 bc:fff",
      children: [Object(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])("p", {
        className: "fs12 c:s g_ell",
        children: "Copy the token to the project panel and change them"
      }), Object(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_component_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
        onClick: onCopy,
        children: "Copy"
      })]
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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NsaXBib2FyZC1jb3B5L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9oaWdobGlnaHQuanMvc3R5bGVzL2F0b20tb25lLWRhcmsuY3NzIiwid2VicGFjazovLy8uL3NyYy91aS9jb21wb25lbnQvQnV0dG9uL2luZGV4Lmxlc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2NvbXBvbmVudC9UZXh0YXJlYS9pbmRleC5sZXNzIiwid2VicGFjazovLy8uL3NyYy91aS9jb21wb25lbnQvVG9hc3QvaW5kZXgubGVzcyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvaW5kZXgubGVzcyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvcGFnZS9Db25maWcvaW5kZXgubGVzcyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvcGFnZS9Ub2tlbi9pbmRleC5sZXNzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvY3NzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9oaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9qc29uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9oaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy94bWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9zdHlsZXMvYXRvbS1vbmUtZGFyay5jc3M/ZTkzZiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJlYWN0L2NvbXBhdC9kaXN0L2NvbXBhdC5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ByZWFjdC9kaXN0L3ByZWFjdC5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ByZWFjdC9ob29rcy9kaXN0L2hvb2tzLm1vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJlYWN0L2pzeC1ydW50aW1lL2Rpc3QvanN4UnVudGltZS5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy94bWwtZm9ybWF0dGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy94bWwtcGFyc2VyLXhvL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy91aS9jb21wb25lbnQvQnV0dG9uL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvY29tcG9uZW50L0J1dHRvbi9pbmRleC5sZXNzPzQ2OTciLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2NvbXBvbmVudC9IZWFkZXIvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy91aS9jb21wb25lbnQvVGFicy9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2NvbXBvbmVudC9UZXh0YXJlYS9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2NvbXBvbmVudC9UZXh0YXJlYS9pbmRleC5sZXNzPzcyNzEiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2NvbXBvbmVudC9Ub2FzdC9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2NvbXBvbmVudC9Ub2FzdC9pbmRleC5sZXNzP2UxMmEiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2NvbXBvbmVudC9Ub2FzdC90b2FzdC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvaW5kZXgubGVzcz85NGEyIiwid2VicGFjazovLy8uL3NyYy91aS9wYWdlL0NvbmZpZy9fcG9zdENvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvcGFnZS9Db25maWcvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy91aS9wYWdlL0NvbmZpZy9pbmRleC5sZXNzP2U2NTEiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL3BhZ2UvSG9tZS9IaWdobGlnaHQvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy91aS9wYWdlL0hvbWUvTm9TZWxlY3Rpb24vaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy91aS9wYWdlL0hvbWUvUmVuZGVyQ1NTLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvcGFnZS9Ib21lL1JlbmRlckhUTUwuanN4Iiwid2VicGFjazovLy8uL3NyYy91aS9wYWdlL0hvbWUvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy91aS9wYWdlL1Rva2VuL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvcGFnZS9Ub2tlbi9pbmRleC5sZXNzPzY1OTIiXSwibmFtZXMiOlsiQnV0dG9uIiwiYmxvY2siLCJzcXVhcmUiLCJjbGFzc05hbWUiLCJwcm9wcyIsImNsYXNzTmFtZXMiLCJTZXQiLCJqb2luIiwiSGVhZGVyIiwiY2hpbGRyZW4iLCJleHRyYSIsIlRhYnMiLCJkYXRhIiwidGFiSW5kZXgiLCJvbkNoYW5nZSIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIlRleHRhcmVhIiwiVG9hc3QiLCJvcGVuIiwidXNlU3RhdGUiLCJzaG93Iiwic2V0U2hvdyIsInVzZUVmZmVjdCIsIkNPTlRBSU5FUl9JRCIsImdldENvbnRhaW5lciIsIiRpdGVtIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIiRjb250YWluZXIiLCJjcmVhdGVFbGVtZW50IiwiaWQiLCJib2R5IiwiYXBwZW5kIiwidG9hc3QiLCJ0ZXh0Iiwic2hvd1RpbWUiLCJyZW5kZXIiLCJzZXRUaW1lb3V0IiwicmVtb3ZlQ2hpbGQiLCJEQVRBX1RBQiIsIkFQUCIsInNldFRhYkluZGV4Iiwib25UYWJDaGFuZ2UiLCJwYXJlbnQiLCJwb3N0TWVzc2FnZSIsInBsdWdpbk1lc3NhZ2UiLCJ0eXBlIiwidmFsdWUiLCJfcG9zdENvbmZpZyIsImFjdGlvbiIsIkNvbmZpZyIsImNvbmZpZyIsInNldENvbmZpZyIsImZvcm0iLCJ1c2VSZWYiLCJpc0VtcHR5IiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsIm9ubWVzc2FnZSIsImdldENvbmZpZyIsImFsZXJ0TXNnIiwib25FZGl0IiwiZGF0YVNhdmUiLCJ0YXJnZXQiLCJ0cmltU3RhcnQiLCJ0cmltRW5kIiwib2JqRGF0YSIsIkpTT04iLCJwYXJzZSIsImN1cnJlbnQiLCJyZXNldCIsImVycm9yIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJib3JkZXJSYWRpdXMiLCJzdHJpbmdpZnkiLCJobGpzIiwicmVnaXN0ZXJMYW5ndWFnZSIsInhtbCIsImNzcyIsImpzb24iLCJDU1NfTUFQIiwiSGlnaGxpZ2h0IiwibGFuZ3VhZ2UiLCJzdHJIdG1sIiwic2V0U3RySHRtbCIsImFwcGVuZENsYXNzTmFtZSIsImh0bWwiLCJoaWdobGlnaHQiLCJvdmVyZmxvdyIsIl9faHRtbCIsIk5vU2VsZWN0aW9uIiwiQ09ERV9QUkUiLCJSZW5kZXJDU1MiLCJub1NlbGVjdGlvbiIsImNvZGUiLCJvbkNvcHkiLCJjbGlwYm9hcmRDb3B5IiwidGhlbiIsIklucHV0SlNYIiwiZGlzYWJsZWQiLCJpc0pTWCIsIm9uQ2hhbmdlSlNYIiwiY2hlY2tlZCIsIlJlbmRlckh0bWwiLCJmb3JtYXQiLCJIb21lIiwic2V0SHRtbCIsIkNTUyIsInNldENTUyIsInNldElzSlNYIiwic2V0Tm9TZWxlY3Rpb24iLCJnZXRIVE1MIiwiZ2V0Q1NTIiwiVG9rZW4iLCJzZWxlY3Rpb25Ub2tlbnMiLCJzZXRTZWxl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V0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFlBQVksWUFBWSxZQUFZLE9BQU8sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFlBQVksT0FBTyxNQUFNLFVBQVUsTUFBTSxVQUFVLEtBQUssU0FBUyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sT0FBTyxVQUFVLE1BQU0sT0FBTyxVQUFVLE1BQU0sT0FBTyxVQUFVLE1BQU0sT0FBTyxVQUFVLE1BQU0sT0FBTyxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sVUFBVSxNQUFNLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUs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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGlCQUFpQjtBQUM1QixXQUFXLGlCQUFpQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsd0RBQXdEO0FBQ25FLFdBQVcsUUFBUTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsY0FBYztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEIsWUFBWSx1QkFBdUI7QUFDbkMsYUFBYTtBQUNiO0FBQ0Esb0NBQW9DLFVBQVU7QUFDOUM7QUFDQTtBQUNBO0FBQ0EsYUFBYSxnQkFBZ0I7QUFDN0IsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0JBQWdCLE9BQU87QUFDdkI7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGFBQWE7O0FBRWhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0JBQWdCLE9BQU87QUFDdkI7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Q3RCLGVBQWUsY0FBYztBQUM3QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGVBQWU7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsbUJBQW1CLGVBQWU7QUFDbEM7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTs7QUFFQSwwQ0FBMEMsVUFBVTtBQUNwRDtBQUNBLGVBQWUsYUFBYTtBQUM1QjtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtB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QkFBdUI7O0FBRXZCOzs7Ozs7Ozs7Ozs7QUNwOUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLDRCQUE0QixFQUFFLGFBQWEsRUFBRTtBQUM3QyxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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TW9DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNuRixDQUFELEVBQU87QUFDbEJBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNBbUYseURBQWEsQ0FBQzlCLElBQUksQ0FBQ1EsU0FBTCxDQUFld0MsZUFBZixFQUFnQyxJQUFoQyxFQUFzQyxDQUF0QyxDQUFELENBQWIsQ0FBd0RqQixJQUF4RCxDQUE2RCxZQUFNO0FBQy9EbEUsNEVBQUssQ0FBQyxvQkFBRCxDQUFMO0FBQ0gsS0FGRDtBQUdILEdBTEQ7O0FBT0EsU0FDSTtBQUFBLGVBQ0txRixZQUFZLENBQUM1RCxNQUFiLEdBQ0csK0RBQUMsdURBQUQ7QUFBVyxjQUFRLEVBQUMsTUFBcEI7QUFBMkIsZUFBUyxFQUFDLElBQXJDO0FBQUEsZ0JBQ0tVLElBQUksQ0FBQ1EsU0FBTCxDQUFld0MsZUFBZixFQUFnQyxJQUFoQyxFQUFzQyxDQUF0QztBQURMLE1BREgsR0FLRztBQUFLLGVBQVMsRUFBQyxnQkFBZjtBQUFnQyxXQUFLLEVBQUU7QUFBQzNDLHVCQUFlLEVBQUUsU0FBbEI7QUFBNkJDLGFBQUssRUFBQztBQUFuQyxPQUF2QztBQUFBO0FBQUEsTUFOUixFQVVJO0FBQUssZUFBUyxFQUFDLDJDQUFmO0FBQUEsaUJBQ0k7QUFBRyxpQkFBUyxFQUFDLGdCQUFiO0FBQUE7QUFBQSxRQURKLEVBRUksK0RBQUMseURBQUQ7QUFBUSxlQUFPLEVBQUV1QixNQUFqQjtBQUFBO0FBQUEsUUFGSjtBQUFBLE1BVko7QUFBQSxJQURKO0FBaUJILENBcENEOztBQXFDZWtCLG9FQUFmLEU7Ozs7Ozs7Ozs7OztBQzVDQTtBQUFBO0FBQUE7QUFBQTtBQUFrRztBQUNsRyxZQUFrSjs7QUFFbEo7O0FBRUE7QUFDQTs7QUFFQSxhQUFhLDBHQUFHLENBQUMsNEhBQU87Ozs7QUFJVCwyTEFBTyxhQUFhLEUiLCJmaWxlIjoidWkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy91aS9pbmRleC5qc3hcIik7XG4iLCIvKiEgY2xpcGJvYXJkLWNvcHkuIE1JVCBMaWNlbnNlLiBGZXJvc3MgQWJvdWtoYWRpamVoIDxodHRwczovL2Zlcm9zcy5vcmcvb3BlbnNvdXJjZT4gKi9cbi8qIGdsb2JhbCBET01FeGNlcHRpb24gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBjbGlwYm9hcmRDb3B5XG5cbmZ1bmN0aW9uIG1ha2VFcnJvciAoKSB7XG4gIHJldHVybiBuZXcgRE9NRXhjZXB0aW9uKCdUaGUgcmVxdWVzdCBpcyBub3QgYWxsb3dlZCcsICdOb3RBbGxvd2VkRXJyb3InKVxufVxuXG5hc3luYyBmdW5jdGlvbiBjb3B5Q2xpcGJvYXJkQXBpICh0ZXh0KSB7XG4gIC8vIFVzZSB0aGUgQXN5bmMgQ2xpcGJvYXJkIEFQSSB3aGVuIGF2YWlsYWJsZS4gUmVxdWlyZXMgYSBzZWN1cmUgYnJvd3NpbmdcbiAgLy8gY29udGV4dCAoaS5lLiBIVFRQUylcbiAgaWYgKCFuYXZpZ2F0b3IuY2xpcGJvYXJkKSB7XG4gICAgdGhyb3cgbWFrZUVycm9yKClcbiAgfVxuICByZXR1cm4gbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQodGV4dClcbn1cblxuYXN5bmMgZnVuY3Rpb24gY29weUV4ZWNDb21tYW5kICh0ZXh0KSB7XG4gIC8vIFB1dCB0aGUgdGV4dCB0byBjb3B5IGludG8gYSA8c3Bhbj5cbiAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICBzcGFuLnRleHRDb250ZW50ID0gdGV4dFxuXG4gIC8vIFByZXNlcnZlIGNvbnNlY3V0aXZlIHNwYWNlcyBhbmQgbmV3bGluZXNcbiAgc3Bhbi5zdHlsZS53aGl0ZVNwYWNlID0gJ3ByZSdcbiAgc3Bhbi5zdHlsZS53ZWJraXRVc2VyU2VsZWN0ID0gJ2F1dG8nXG4gIHNwYW4uc3R5bGUudXNlclNlbGVjdCA9ICdhbGwnXG5cbiAgLy8gQWRkIHRoZSA8c3Bhbj4gdG8gdGhlIHBhZ2VcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzcGFuKVxuXG4gIC8vIE1ha2UgYSBzZWxlY3Rpb24gb2JqZWN0IHJlcHJlc2VudGluZyB0aGUgcmFuZ2Ugb2YgdGV4dCBzZWxlY3RlZCBieSB0aGUgdXNlclxuICBjb25zdCBzZWxlY3Rpb24gPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKClcbiAgY29uc3QgcmFuZ2UgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKVxuICBzZWxlY3Rpb24ucmVtb3ZlQWxsUmFuZ2VzKClcbiAgcmFuZ2Uuc2VsZWN0Tm9kZShzcGFuKVxuICBzZWxlY3Rpb24uYWRkUmFuZ2UocmFuZ2UpXG5cbiAgLy8gQ29weSB0ZXh0IHRvIHRoZSBjbGlwYm9hcmRcbiAgbGV0IHN1Y2Nlc3MgPSBmYWxzZVxuICB0cnkge1xuICAgIHN1Y2Nlc3MgPSB3aW5kb3cuZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2NvcHknKVxuICB9IGZpbmFsbHkge1xuICAgIC8vIENsZWFudXBcbiAgICBzZWxlY3Rpb24ucmVtb3ZlQWxsUmFuZ2VzKClcbiAgICB3aW5kb3cuZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChzcGFuKVxuICB9XG5cbiAgaWYgKCFzdWNjZXNzKSB0aHJvdyBtYWtlRXJyb3IoKVxufVxuXG5hc3luYyBmdW5jdGlvbiBjbGlwYm9hcmRDb3B5ICh0ZXh0KSB7XG4gIHRyeSB7XG4gICAgYXdhaXQgY29weUNsaXBib2FyZEFwaSh0ZXh0KVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICAvLyAuLi5PdGhlcndpc2UsIHVzZSBkb2N1bWVudC5leGVjQ29tbWFuZCgpIGZhbGxiYWNrXG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGNvcHlFeGVjQ29tbWFuZCh0ZXh0KVxuICAgIH0gY2F0Y2ggKGVycjIpIHtcbiAgICAgIHRocm93IChlcnIyIHx8IGVyciB8fCBtYWtlRXJyb3IoKSlcbiAgICB9XG4gIH1cbn1cbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qXFxuXFxuQXRvbSBPbmUgRGFyayBieSBEYW5pZWwgR2FtYWdlXFxuT3JpZ2luYWwgT25lIERhcmsgU3ludGF4IHRoZW1lIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2F0b20vb25lLWRhcmstc3ludGF4XFxuXFxuYmFzZTogICAgIzI4MmMzNFxcbm1vbm8tMTogICNhYmIyYmZcXG5tb25vLTI6ICAjODE4ODk2XFxubW9uby0zOiAgIzVjNjM3MFxcbmh1ZS0xOiAgICM1NmI2YzJcXG5odWUtMjogICAjNjFhZWVlXFxuaHVlLTM6ICAgI2M2NzhkZFxcbmh1ZS00OiAgICM5OGMzNzlcXG5odWUtNTogICAjZTA2Yzc1XFxuaHVlLTUtMjogI2JlNTA0Nlxcbmh1ZS02OiAgICNkMTlhNjZcXG5odWUtNi0yOiAjZTZjMDdiXFxuXFxuKi9cXG5cXG4uaGxqcyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG92ZXJmbG93LXg6IGF1dG87XFxuICBwYWRkaW5nOiAwLjVlbTtcXG4gIGNvbG9yOiAjYWJiMmJmO1xcbiAgYmFja2dyb3VuZDogIzI4MmMzNDtcXG59XFxuXFxuLmhsanMtY29tbWVudCxcXG4uaGxqcy1xdW90ZSB7XFxuICBjb2xvcjogIzVjNjM3MDtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLmhsanMtZG9jdGFnLFxcbi5obGpzLWtleXdvcmQsXFxuLmhsanMtZm9ybXVsYSB7XFxuICBjb2xvcjogI2M2NzhkZDtcXG59XFxuXFxuLmhsanMtc2VjdGlvbixcXG4uaGxqcy1uYW1lLFxcbi5obGpzLXNlbGVjdG9yLXRhZyxcXG4uaGxqcy1kZWxldGlvbixcXG4uaGxqcy1zdWJzdCB7XFxuICBjb2xvcjogI2UwNmM3NTtcXG59XFxuXFxuLmhsanMtbGl0ZXJhbCB7XFxuICBjb2xvcjogIzU2YjZjMjtcXG59XFxuXFxuLmhsanMtc3RyaW5nLFxcbi5obGpzLXJlZ2V4cCxcXG4uaGxqcy1hZGRpdGlvbixcXG4uaGxqcy1hdHRyaWJ1dGUsXFxuLmhsanMtbWV0YS1zdHJpbmcge1xcbiAgY29sb3I6ICM5OGMzNzk7XFxufVxcblxcbi5obGpzLWJ1aWx0X2luLFxcbi5obGpzLWNsYXNzIC5obGpzLXRpdGxlIHtcXG4gIGNvbG9yOiAjZTZjMDdiO1xcbn1cXG5cXG4uaGxqcy1hdHRyLFxcbi5obGpzLXZhcmlhYmxlLFxcbi5obGpzLXRlbXBsYXRlLXZhcmlhYmxlLFxcbi5obGpzLXR5cGUsXFxuLmhsanMtc2VsZWN0b3ItY2xhc3MsXFxuLmhsanMtc2VsZWN0b3ItYXR0cixcXG4uaGxqcy1zZWxlY3Rvci1wc2V1ZG8sXFxuLmhsanMtbnVtYmVyIHtcXG4gIGNvbG9yOiAjZDE5YTY2O1xcbn1cXG5cXG4uaGxqcy1zeW1ib2wsXFxuLmhsanMtYnVsbGV0LFxcbi5obGpzLWxpbmssXFxuLmhsanMtbWV0YSxcXG4uaGxqcy1zZWxlY3Rvci1pZCxcXG4uaGxqcy10aXRsZSB7XFxuICBjb2xvcjogIzYxYWVlZTtcXG59XFxuXFxuLmhsanMtZW1waGFzaXMge1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4uaGxqcy1zdHJvbmcge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5obGpzLWxpbmsge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9oaWdobGlnaHQuanMvc3R5bGVzL2F0b20tb25lLWRhcmsuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FrQkM7O0FBRUQ7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxjQUFjO0VBQ2QsbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7O0FBRUE7OztFQUdFLGNBQWM7QUFDaEI7O0FBRUE7Ozs7O0VBS0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7Ozs7O0VBS0UsY0FBYztBQUNoQjs7QUFFQTs7RUFFRSxjQUFjO0FBQ2hCOztBQUVBOzs7Ozs7OztFQVFFLGNBQWM7QUFDaEI7O0FBRUE7Ozs7OztFQU1FLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLypcXG5cXG5BdG9tIE9uZSBEYXJrIGJ5IERhbmllbCBHYW1hZ2VcXG5PcmlnaW5hbCBPbmUgRGFyayBTeW50YXggdGhlbWUgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vYXRvbS9vbmUtZGFyay1zeW50YXhcXG5cXG5iYXNlOiAgICAjMjgyYzM0XFxubW9uby0xOiAgI2FiYjJiZlxcbm1vbm8tMjogICM4MTg4OTZcXG5tb25vLTM6ICAjNWM2MzcwXFxuaHVlLTE6ICAgIzU2YjZjMlxcbmh1ZS0yOiAgICM2MWFlZWVcXG5odWUtMzogICAjYzY3OGRkXFxuaHVlLTQ6ICAgIzk4YzM3OVxcbmh1ZS01OiAgICNlMDZjNzVcXG5odWUtNS0yOiAjYmU1MDQ2XFxuaHVlLTY6ICAgI2QxOWE2Nlxcbmh1ZS02LTI6ICNlNmMwN2JcXG5cXG4qL1xcblxcbi5obGpzIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgb3ZlcmZsb3cteDogYXV0bztcXG4gIHBhZGRpbmc6IDAuNWVtO1xcbiAgY29sb3I6ICNhYmIyYmY7XFxuICBiYWNrZ3JvdW5kOiAjMjgyYzM0O1xcbn1cXG5cXG4uaGxqcy1jb21tZW50LFxcbi5obGpzLXF1b3RlIHtcXG4gIGNvbG9yOiAjNWM2MzcwO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4uaGxqcy1kb2N0YWcsXFxuLmhsanMta2V5d29yZCxcXG4uaGxqcy1mb3JtdWxhIHtcXG4gIGNvbG9yOiAjYzY3OGRkO1xcbn1cXG5cXG4uaGxqcy1zZWN0aW9uLFxcbi5obGpzLW5hbWUsXFxuLmhsanMtc2VsZWN0b3ItdGFnLFxcbi5obGpzLWRlbGV0aW9uLFxcbi5obGpzLXN1YnN0IHtcXG4gIGNvbG9yOiAjZTA2Yzc1O1xcbn1cXG5cXG4uaGxqcy1saXRlcmFsIHtcXG4gIGNvbG9yOiAjNTZiNmMyO1xcbn1cXG5cXG4uaGxqcy1zdHJpbmcsXFxuLmhsanMtcmVnZXhwLFxcbi5obGpzLWFkZGl0aW9uLFxcbi5obGpzLWF0dHJpYnV0ZSxcXG4uaGxqcy1tZXRhLXN0cmluZyB7XFxuICBjb2xvcjogIzk4YzM3OTtcXG59XFxuXFxuLmhsanMtYnVpbHRfaW4sXFxuLmhsanMtY2xhc3MgLmhsanMtdGl0bGUge1xcbiAgY29sb3I6ICNlNmMwN2I7XFxufVxcblxcbi5obGpzLWF0dHIsXFxuLmhsanMtdmFyaWFibGUsXFxuLmhsanMtdGVtcGxhdGUtdmFyaWFibGUsXFxuLmhsanMtdHlwZSxcXG4uaGxqcy1zZWxlY3Rvci1jbGFzcyxcXG4uaGxqcy1zZWxlY3Rvci1hdHRyLFxcbi5obGpzLXNlbGVjdG9yLXBzZXVkbyxcXG4uaGxqcy1udW1iZXIge1xcbiAgY29sb3I6ICNkMTlhNjY7XFxufVxcblxcbi5obGpzLXN5bWJvbCxcXG4uaGxqcy1idWxsZXQsXFxuLmhsanMtbGluayxcXG4uaGxqcy1tZXRhLFxcbi5obGpzLXNlbGVjdG9yLWlkLFxcbi5obGpzLXRpdGxlIHtcXG4gIGNvbG9yOiAjNjFhZWVlO1xcbn1cXG5cXG4uaGxqcy1lbXBoYXNpcyB7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi5obGpzLXN0cm9uZyB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmhsanMtbGluayB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmJ0biB7XFxuICBoZWlnaHQ6IDEuNXJlbTtcXG4gIHBhZGRpbmc6IDAuMjVyZW0gMC41cmVtO1xcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDFyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxcHggIzAwMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG4uYnRuOmhvdmVyIHtcXG4gIGNvbG9yOiAjNGM1ZmUyO1xcbn1cXG4uYnRuOmRpc2FibGVkIHtcXG4gIG9wYWNpdHk6IDAuNTtcXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxufVxcbi5idG4uX2Jsb2NrIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5idG4uX3NxdWFyZSB7XFxuICBwYWRkaW5nOiAwLjM3NXJlbTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3VpL2NvbXBvbmVudC9CdXR0b24vaW5kZXgubGVzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQTtFQUNFLGNBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0NBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7QUFBRjtBQUdBO0VBQ0UsY0FBQTtBQURGO0FBSUE7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QUFGRjtBQUtBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7QUFIRjtBQU1BO0VBQ0UsaUJBQUE7QUFKRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG4uYnRuIHtcXG4gIGhlaWdodDogMjQvMTYqMXJlbTtcXG4gIHBhZGRpbmc6IDQvMTYqMXJlbSA4LzE2KjFyZW07XFxuICBmb250LXNpemU6IDEyLzE2KjFyZW07XFxuICBsaW5lLWhlaWdodDogMXJlbTtcXG4gIGJvcmRlcjpub25lO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMXB4ICMwMDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuXFxuLmJ0bjpob3ZlciB7XFxuICBjb2xvcjogIzRjNWZlMjtcXG59XFxuXFxuLmJ0bjpkaXNhYmxlZCB7XFxuICBvcGFjaXR5OiAwLjU7XFxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbn1cXG5cXG4uYnRuLl9ibG9jayB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uYnRuLl9zcXVhcmUge1xcbiAgcGFkZGluZzogNi8xNioxcmVtO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIudGV4dGFyZWEge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcXG4gIGJvcmRlcjogbm9uZSAwO1xcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcXG4gIHJlc2l6ZTogbm9uZTtcXG59XFxuLnRleHRhcmVhOmZvY3VzLFxcbi50ZXh0YXJlYTpob3ZlciB7XFxuICBib3JkZXItY29sb3I6ICMzMzM7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy91aS9jb21wb25lbnQvVGV4dGFyZWEvaW5kZXgubGVzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUFGO0FBR0E7O0VBQ0Usa0JBQUE7QUFBRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG4udGV4dGFyZWEge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcXG4gIGJvcmRlcjogbm9uZSAwO1xcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcXG4gIHJlc2l6ZTogbm9uZTtcXG59XFxuXFxuLnRleHRhcmVhOmZvY3VzLCAudGV4dGFyZWE6aG92ZXIge1xcbiAgYm9yZGVyLWNvbG9yOiAjMzMzO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIudG9hc3QtYm94IHtcXG4gIHotaW5kZXg6IDEwMDtcXG59XFxuLnRvYXN0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcXG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcXG59XFxuLnRvYXN0LWJveCB7XFxuICBvcGFjaXR5OiAwO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbn1cXG4udG9hc3QtYm94Ll9zaG93IHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICBvcGFjaXR5OiAxO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcXG4gIHRyYW5zaXRpb246IDIwMG1zO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvdWkvY29tcG9uZW50L1RvYXN0L2luZGV4Lmxlc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQ0E7RUFDRSxZQUFBO0FBQUY7QUFHQTtFQUNFLG9DQUFBO0VBQ0EscUJBQUE7QUFERjtBQUlBO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7QUFGRjtBQUtBO0VBQ0UsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsNEJBQUE7RUFDQSxpQkFBQTtBQUhGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcbi50b2FzdC1ib3gge1xcbiAgei1pbmRleDogMTAwO1xcbn1cXG5cXG4udG9hc3Qge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xcbn1cXG5cXG4udG9hc3QtYm94IHtcXG4gIG9wYWNpdHk6IDA7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxufVxcblxcbi50b2FzdC1ib3guX3Nob3cge1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gIG9wYWNpdHk6IDE7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xcbiAgdHJhbnNpdGlvbjogMjAwbXM7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBjaGFyc2V0IFxcXCJ1dGYtOFxcXCI7XFxuLmFpYyB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uYWlmZSB7XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxufVxcbi5haWZzIHtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cXG4uYjAge1xcbiAgYm90dG9tOiAwO1xcbn1cXG4uYmN0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG4uYm4ge1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG4uYnIwIHtcXG4gIGJvcmRlci1yYWRpdXM6IDA7XFxufVxcbi5icjEwMFxcXFwlIHtcXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxufVxcbi5ic2JiIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbi5iY19mZmYge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG59XFxuLmJjXzAwMCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcbn1cXG4uY18wMDAge1xcbiAgY29sb3I6ICMwMDA7XFxufVxcbi5jX2ZmZiB7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuLmNiIHtcXG4gIGNsZWFyOiBib3RoO1xcbn1cXG4uY3Age1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uZGIge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi5kZiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4uZGkge1xcbiAgZGlzcGxheTogaW5saW5lO1xcbn1cXG4uZGliIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuLmRpZiB7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG59XFxuLmRuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5kdCB7XFxuICBkaXNwbGF5OiB0YWJsZTtcXG59XFxuLmR0YyB7XFxuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xcbn1cXG4uZjEge1xcbiAgZmxleDogMTtcXG4gIG1pbi13aWR0aDogMDtcXG59XFxuLmZhIHtcXG4gIGZsZXg6IGF1dG87XFxufVxcbi5mZGMge1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLmZkciB7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG4uZmkge1xcbiAgZm9udDogaW5oZXJpdDtcXG59XFxuLmZsIHtcXG4gIGZsb2F0OiBsZWZ0O1xcbn1cXG4uZnIge1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbn1cXG4uZnMwIHtcXG4gIGZvbnQtc2l6ZTogMDtcXG59XFxuLmZzMSB7XFxuICBmbGV4LXNocmluazogMTtcXG59XFxuLmZzaSB7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcbi5mc24ge1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG4uZnZzYyB7XFxuICBmb250LXZhcmlhbnQ6IHNtYWxsLWNhcHM7XFxuICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlO1xcbn1cXG4uZncxMDAge1xcbiAgZm9udC13ZWlnaHQ6IDEwMDtcXG59XFxuLmZ3MjAwIHtcXG4gIGZvbnQtd2VpZ2h0OiAyMDA7XFxufVxcbi5mdzMwMCB7XFxuICBmb250LXdlaWdodDogMzAwO1xcbn1cXG4uZnc0MDAge1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuLmZ3NTAwIHtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcbi5mdzYwMCB7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG4uZnc3MDAge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuLmZ3ODAwIHtcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxufVxcbi5mdzkwMCB7XFxuICBmb250LXdlaWdodDogOTAwO1xcbn1cXG4uZnduIHtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcbi5md3cge1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG4uaDEwMFxcXFwlIHtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuLmpjYyB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLmpjZmUge1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuLmpjc2Ege1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcbi5qY3NiIHtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLmwwIHtcXG4gIGxlZnQ6IDA7XFxufVxcbi5sMTAwXFxcXCUge1xcbiAgbGVmdDogMTAwJTtcXG59XFxuLmw1MFxcXFwlIHtcXG4gIGxlZnQ6IDUwJTtcXG59XFxuLmxoMSB7XFxuICBsaW5lLWhlaWdodDogMTtcXG59XFxuLmxoMVxcXFwuMiB7XFxuICBsaW5lLWhlaWdodDogMS4yO1xcbn1cXG4ubGgxXFxcXC41IHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxufVxcbi5saDFcXFxcLjgge1xcbiAgbGluZS1oZWlnaHQ6IDEuODtcXG59XFxuLmxzbiB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG4ubTAge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG4ubWxhIHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG4ubXJhIHtcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuLm10YSB7XFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcbn1cXG4ubWJhIHtcXG4gIG1hcmdpbi1ib3R0b206IGF1dG87XFxufVxcbi5vMCB7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG4ub2Ege1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XFxufVxcbi5vaCB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4ucDAge1xcbiAgcGFkZGluZzogMDtcXG59XFxuLnBhIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuLnBlbiB7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuLnBmIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG59XFxuLnByIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLnB0MTAwXFxcXCUge1xcbiAgcGFkZGluZy10b3A6IDEwMCU7XFxufVxcbi5yMCB7XFxuICByaWdodDogMDtcXG59XFxuLnIxMDBcXFxcJSB7XFxuICByaWdodDogMTAwJTtcXG59XFxuLnQwIHtcXG4gIHRvcDogMDtcXG59XFxuLnQxMDBcXFxcJSB7XFxuICB0b3A6IDEwMCU7XFxufVxcbi50NTBcXFxcJSB7XFxuICB0b3A6IDUwJTtcXG59XFxuLm13MTAwXFxcXCUge1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG4udGFjIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLnRhaiB7XFxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcbn1cXG4udGFsIHtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcbi50YXIge1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxufVxcbi50ZG4ge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG4udGR1IHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG4udGxmIHtcXG4gIHRhYmxlLWxheW91dDogZml4ZWQ7XFxufVxcbi50dGMge1xcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxufVxcbi50dGwge1xcbiAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTtcXG59XFxuLnR0biB7XFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG59XFxuLnR0dSB7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbn1cXG4udXNuIHtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcbi52YW0ge1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuLnZhdCB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbn1cXG4udmgge1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG4udzEwMFxcXFwlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4ud2FuIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuLndzbiB7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG4ud3didyB7XFxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XFxufVxcbi56aTEge1xcbiAgei1pbmRleDogMTtcXG59XFxuLyoqXFxuICogI1NBQ1NTKGZvbnQtc2l6ZTsgZnM7IDEyLCAxNjsgMXB4KTtcXG4gKiBAcHJvcDog5bGe5oCn5ZCNXFxuICogQG5hbWU6IOe8qeWGmeWQjVxcbiAqIEBsaXN0OiDlgLzliJfooahcXG4gKiBAdW5pdDog5Y2V5L2N5o2i566X6KGo6L6+5byPLCDpu5jorqTkuLoxcHgsIOaDs+imgSByZW0g5aGr5YaZIDEvMTYqMXJlbVxcbiAqL1xcbi8qKlxcbiAqICNTQUNTUyhmb250LXdlaWdodDsgZnc7IDQwMCwgNzAwKTtcXG4gKiBAcHJvcDog5bGe5oCn5ZCNXFxuICogQG5hbWU6IOe8qeWGmeWQjVxcbiAqIEBsaXN0OiDlgLzliJfooahcXG4gKi9cXG4vKiDmuIXpmaTmta7liqggKi9cXG4vKiDmloflrZfotoXlh7rkuIDooYzngrnngrnngrkgKi9cXG4vKiDlpJrooYzmlofmnKzotoXlh7rngrnngrnngrkgKi9cXG4vKiDnlKjooajmoLznmoTmlrnlvI/mkpHmu6Hmta7liqjkuYvlkI7nmoTliankvZnnqbrpl7QgKi9cXG4ubXQtMSB7XFxuICBtYXJnaW4tdG9wOiAtMC4wNjI1cmVtO1xcbn1cXG4ubXQ0IHtcXG4gIG1hcmdpbi10b3A6IDAuMjVyZW07XFxufVxcbi5tdDgge1xcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xcbn1cXG4ubXQxMiB7XFxuICBtYXJnaW4tdG9wOiAwLjc1cmVtO1xcbn1cXG4ubXQxNiB7XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbn1cXG4ubWItMSB7XFxuICBtYXJnaW4tYm90dG9tOiAtMC4wNjI1cmVtO1xcbn1cXG4ubWI0IHtcXG4gIG1hcmdpbi1ib3R0b206IDAuMjVyZW07XFxufVxcbi5tYjgge1xcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbn1cXG4ubWIxMiB7XFxuICBtYXJnaW4tYm90dG9tOiAwLjc1cmVtO1xcbn1cXG4ubWIxNiB7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG4ubXItMSB7XFxuICBtYXJnaW4tcmlnaHQ6IC0wLjA2MjVyZW07XFxufVxcbi5tcjQge1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjI1cmVtO1xcbn1cXG4ubXI4IHtcXG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xcbn1cXG4ubXIxMiB7XFxuICBtYXJnaW4tcmlnaHQ6IDAuNzVyZW07XFxufVxcbi5tcjE2IHtcXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcXG59XFxuLm1sLTEge1xcbiAgbWFyZ2luLWxlZnQ6IC0wLjA2MjVyZW07XFxufVxcbi5tbDQge1xcbiAgbWFyZ2luLWxlZnQ6IDAuMjVyZW07XFxufVxcbi5tbDgge1xcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcXG59XFxuLm1sMTIge1xcbiAgbWFyZ2luLWxlZnQ6IDAuNzVyZW07XFxufVxcbi5tbDE2IHtcXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xcbn1cXG4ucHQ0IHtcXG4gIHBhZGRpbmctdG9wOiAwLjI1cmVtO1xcbn1cXG4ucHQ4IHtcXG4gIHBhZGRpbmctdG9wOiAwLjVyZW07XFxufVxcbi5wdDEyIHtcXG4gIHBhZGRpbmctdG9wOiAwLjc1cmVtO1xcbn1cXG4ucHQxNiB7XFxuICBwYWRkaW5nLXRvcDogMXJlbTtcXG59XFxuLnByNCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAwLjI1cmVtO1xcbn1cXG4ucHI4IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcXG59XFxuLnByMTIge1xcbiAgcGFkZGluZy1yaWdodDogMC43NXJlbTtcXG59XFxuLnByMTYge1xcbiAgcGFkZGluZy1yaWdodDogMXJlbTtcXG59XFxuLnBiNCB7XFxuICBwYWRkaW5nLWJvdHRvbTogMC4yNXJlbTtcXG59XFxuLnBiOCB7XFxuICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xcbn1cXG4ucGIxMiB7XFxuICBwYWRkaW5nLWJvdHRvbTogMC43NXJlbTtcXG59XFxuLnBiMTYge1xcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XFxufVxcbi5wbDQge1xcbiAgcGFkZGluZy1sZWZ0OiAwLjI1cmVtO1xcbn1cXG4ucGw4IHtcXG4gIHBhZGRpbmctbGVmdDogMC41cmVtO1xcbn1cXG4ucGwxMiB7XFxuICBwYWRkaW5nLWxlZnQ6IDAuNzVyZW07XFxufVxcbi5wbDE2IHtcXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcXG59XFxuLmZ3NjAwIHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcbi5mdzYwMCB7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG4uZnMxMiB7XFxuICBmb250LXNpemU6IDAuNzVyZW07XFxufVxcbi5mczE0IHtcXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XFxufVxcbi5mczE2IHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuLmZzMjAge1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbn1cXG4ubGgxNiB7XFxuICBsaW5lLWhlaWdodDogMXJlbTtcXG59XFxuLmxoMjAge1xcbiAgbGluZS1oZWlnaHQ6IDEuMjVyZW07XFxufVxcbi5saDI0IHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjVyZW07XFxufVxcbi5icjIge1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbn1cXG4uYnI0IHtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuLmgyNCB7XFxuICBoZWlnaHQ6IDEuNXJlbTtcXG59XFxuLmNcXFxcOmwsXFxuLmNcXFxcOmxcXFxcOmg6aG92ZXIge1xcbiAgY29sb3I6ICMxMTE7XFxufVxcbi5jXFxcXDptLFxcbi5jXFxcXDptXFxcXDpoOmhvdmVyIHtcXG4gIGNvbG9yOiAjMzMzO1xcbn1cXG4uY1xcXFw6cyxcXG4uY1xcXFw6c1xcXFw6aDpob3ZlciB7XFxuICBjb2xvcjogIzY2NjtcXG59XFxuLmNcXFxcOnhzLFxcbi5jXFxcXDp4c1xcXFw6aDpob3ZlciB7XFxuICBjb2xvcjogIzk5OTtcXG59XFxuLmNcXFxcOnByaW1hcnksXFxuLmNcXFxcOnByaW1hcnlcXFxcOmg6aG92ZXIge1xcbiAgY29sb3I6ICM0YzVmZTI7XFxufVxcbi50ZDIwMCB7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAyMDBtcztcXG59XFxuLyogb3RoZXJzICovXFxuKiB7XFxuICBmb250OiBpbmhlcml0O1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICB0ZXh0LWRlY29yYXRpb246IGluaGVyaXQ7XFxufVxcbnJvb3Qge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5zdmcge1xcbiAgd2lkdGg6IDFlbTtcXG4gIGhlaWdodDogMWVtO1xcbiAgZmlsbDogY3VycmVudENvbG9yO1xcbn1cXG5ib2R5LFxcbnByZSxcXG5mb3JtLFxcbmlucHV0LFxcbnAge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbn1cXG5ib2R5LFxcbmh0bWwge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxufVxcbi5nX3dyYXAge1xcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XFxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxufVxcbi5nX3JvdyB7XFxuICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xcbn1cXG4ucmVhY3QtcGFnZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcbi5nX2hyIHtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xcbn1cXG4uZ19ocl90IHtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGRkO1xcbn1cXG4uZ19lbGwge1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG59XFxuLyogdGlwcyAqL1xcbi5nX3RpcFtkYXRhLXRpdGxlXSB7XFxuICB0ZXh0LWluZGVudDogMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbn1cXG4uZ190aXBbZGF0YS10aXRsZV06OmJlZm9yZSxcXG4uZ190aXBbZGF0YS10aXRsZV06OmFmdGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDUwJTtcXG4gIC1tcy1wb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgei1pbmRleDogMTAwO1xcbn1cXG4uZ190aXBbZGF0YS10aXRsZV06OmJlZm9yZSB7XFxuICBjb250ZW50OiBhdHRyKGRhdGEtdGl0bGUpO1xcbiAgdG9wOiAtNDFweDtcXG4gIG1heC13aWR0aDogOTB2dztcXG4gIHBhZGRpbmc6IDZweCAxMHB4O1xcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzczYzQyO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuLmdfdGlwW2RhdGEtdGl0bGVdOjphZnRlciB7XFxuICBjb250ZW50OiAnJztcXG4gIHdpZHRoOiAwO1xcbiAgaGVpZ2h0OiAwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJvcmRlcjogNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzM3M2M0MjtcXG4gIHRvcDogLTEycHg7XFxufVxcbi5nX3RpcFtkYXRhLXRpdGxlXTpob3Zlcjo6YmVmb3JlLFxcbi5nX3RpcFtkYXRhLXRpdGxlXTpob3Zlcjo6YWZ0ZXIsXFxuLmdfdGlwW2RhdGEtdGl0bGVdOmZvY3VzOjpiZWZvcmUsXFxuLmdfdGlwW2RhdGEtdGl0bGVdOmZvY3VzOjphZnRlciB7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IHZpc2liaWxpdHkgMC4xcyAwLjFzO1xcbiAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwLjFzIDAuMXM7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG4uZ190aXBbZGF0YS10aXRsZV06aG92ZXIge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuc2VsZWN0IHtcXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcXG4gIGhlaWdodDogMS41cmVtO1xcbiAgYm9yZGVyLWNvbG9yOiAjMDAwMDAwO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9ub2RlX21vZHVsZXMvc2Fjc3MvbGVzcy9TQUNTUy5sZXNzXCIsXCJ3ZWJwYWNrOi8vLi9ub2RlX21vZHVsZXMvc2Fjc3MvaW5kZXguY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvdWkvaW5kZXgubGVzc1wiLFwid2VicGFjazovLy4vbm9kZV9tb2R1bGVzL3NhY3NzL2xlc3MvSGVscGVycy5sZXNzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGdCQUFTO0FDQVQ7RUFBSyxtQkFBQTtBQ0dMO0FERkE7RUFBTSxxQkFBQTtBQ0tOO0FESkE7RUFBTSx1QkFBQTtBQ09OO0FETkE7RUFBSSxTQUFBO0FDU0o7QURSQTtFQUFLLDZCQUFBO0FDV0w7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LHFCQUFBO0FDNEtMO0FEM0tBO0VBQUssMEJBQUE7QUM4S0w7QUQ3S0E7RUFBSyxtQkFBQTtBQ2dMTDtBRC9LQTtFQUFLLDBCQUFBO0FDa0xMO0FEakxBO0VBQUsseUJBQUE7QUNvTEw7QURuTEE7RUFBSyxvQkFBQTtBQ3NMTDtBRHJMQTtFQUFLLHlCQUFBO0FDd0xMO0FEdkxBO0VBQUsseUJBQUE7RUFBeUIsc0JBQUE7RUFBc0IscUJBQUE7RUFBcUIsaUJBQUE7QUM2THpFO0FENUxBO0VBQUssc0JBQUE7QUMrTEw7QUQ5TEE7RUFBSyxtQkFBQTtBQ2lNTDtBRGhNQTtFQUFJLGtCQUFBO0FDbU1KO0FEbE1BO0VBQVEsV0FBQTtBQ3FNUjtBRHBNQTtFQUFLLHdCQUFBO0FDdU1MO0FEdE1BO0VBQUssbUJBQUE7QUN5TUw7QUR4TUE7RUFBTSxxQkFBQTtFQUFxQixxQkFBQTtBQzRNM0I7QUQzTUE7RUFBSyxVQUFBO0FDOE1MO0FBQ0E7Ozs7OztFQU1FO0FBQ0Y7Ozs7O0VBS0U7QUFDRixTQUFTO0FBQ1QsY0FBYztBQUNkLGNBQWM7QUFDZCxzQkFBc0I7QURqVXJCO0VEY0ssc0JBQUE7QUVzVE47QURwVUM7RURjSyxtQkFBQTtBRXlUTjtBRHZVQztFRGNLLGtCQUFBO0FFNFROO0FEMVVDO0VEY0ssbUJBQUE7QUUrVE47QUQ3VUM7RURjSyxnQkFBQTtBRWtVTjtBRGhWQztFRGNLLHlCQUFBO0FFcVVOO0FEblZDO0VEY0ssc0JBQUE7QUV3VU47QUR0VkM7RURjSyxxQkFBQTtBRTJVTjtBRHpWQztFRGNLLHNCQUFBO0FFOFVOO0FENVZDO0VEY0ssbUJBQUE7QUVpVk47QUQvVkM7RURjSyx3QkFBQTtBRW9WTjtBRGxXQztFRGNLLHFCQUFBO0FFdVZOO0FEcldDO0VEY0ssb0JBQUE7QUUwVk47QUR4V0M7RURjSyxxQkFBQTtBRTZWTjtBRDNXQztFRGNLLGtCQUFBO0FFZ1dOO0FEOVdDO0VEY0ssdUJBQUE7QUVtV047QURqWEM7RURjSyxvQkFBQTtBRXNXTjtBRHBYQztFRGNLLG1CQUFBO0FFeVdOO0FEdlhDO0VEY0ssb0JBQUE7QUU0V047QUQxWEM7RURjSyxpQkFBQTtBRStXTjtBRDdYQztFRGNLLG9CQUFBO0FFa1hOO0FEaFlDO0VEY0ssbUJBQUE7QUVxWE47QURuWUM7RURjSyxvQkFBQTtBRXdYTjtBRHRZQztFRGNLLGlCQUFBO0FFMlhOO0FEellDO0VEY0ssc0JBQUE7QUU4WE47QUQ1WUM7RURjSyxxQkFBQTtBRWlZTjtBRC9ZQztFRGNLLHNCQUFBO0FFb1lOO0FEbFpDO0VEY0ssbUJBQUE7QUV1WU47QURyWkM7RURjSyx1QkFBQTtBRTBZTjtBRHhaQztFRGNLLHNCQUFBO0FFNllOO0FEM1pDO0VEY0ssdUJBQUE7QUVnWk47QUQ5WkM7RURjSyxvQkFBQTtBRW1aTjtBRGphQztFRGNLLHFCQUFBO0FFc1pOO0FEcGFDO0VEY0ssb0JBQUE7QUV5Wk47QUR2YUM7RURjSyxxQkFBQTtBRTRaTjtBRDFhQztFRGNLLGtCQUFBO0FFK1pOO0FEN2FDO0VEa0NLLGdCQUFBO0FFOFlOO0FEaGJDO0VEa0NLLGdCQUFBO0FFaVpOO0FEbmJDO0VEY0ssa0JBQUE7QUV3YU47QUR0YkM7RURjSyxtQkFBQTtBRTJhTjtBRHpiQztFRGNLLGVBQUE7QUU4YU47QUQ1YkM7RURjSyxrQkFBQTtBRWliTjtBRC9iQztFRGNLLGlCQUFBO0FFb2JOO0FEbGNDO0VEY0ssb0JBQUE7QUV1Yk47QURyY0M7RURjSyxtQkFBQTtBRTBiTjtBRHhjQztFRGNLLGtCQUFBO0FFNmJOO0FEM2NDO0VEY0ssa0JBQUE7QUVnY047QUFyYkE7RUFBTSxjQUFBO0FBd2JOO0FBdGJBOztFQUNFLFdBQUE7QUF5YkY7QUF0YkE7O0VBQ0UsV0FBQTtBQXliRjtBQXRiQTs7RUFDRSxXQUFBO0FBeWJGO0FBdGJBOztFQUNFLFdBQUE7QUF5YkY7QUF0YkE7O0VBQ0UsY0FBQTtBQXliRjtBQXRiQTtFQUNFLDBCQUFBO0FBd2JGO0FBQ0EsV0FBVztBQXJiWDtFQUNFLGFBQUE7RUFDQSxjQUFBO0VBQ0Esd0JBQUE7QUF1YkY7QUFwYkE7RUFDRSxlQUFBO0FBc2JGO0FBbmJBO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQXFiRjtBQWxiQTs7Ozs7RUFDRSxTQUFBO0FBd2JGO0FBcmJBO0VBQ0UsdUJBQUE7QUF1YkY7QUFwYkE7O0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUF1YkY7QUFwYkE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FBc2JGO0FBbmJBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQXFiRjtBQWxiQTtFQUNFLHFCQUFBO0FBb2JGO0FBamJBO0VBQ0UsNkJBQUE7QUFtYkY7QUFoYkE7RUFDRSwwQkFBQTtBQWtiRjtBQS9hQTtFQy9GRSxtQkFBQTtFQUFxQixnQkFBQTtFQUFrQix1QkFBQTtBRG1oQnpDO0FBQ0EsU0FBUztBQWhiVDtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBa2JGO0FBL2FBOztFQUVFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLHdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQ0FBQTtFQUNBLCtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFpYkY7QUE5YUE7RUFDRSx5QkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQWdiRjtBQTdhQTtFQUNFLFdBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7QUErYUY7QUE1YUE7Ozs7RUFJRSx3Q0FBQTtFQUNBLGdDQUFBO0VBQ0EsbUJBQUE7QUE4YUY7QUEzYUE7RUFDRSxhQUFBO0FBNmFGO0FBMWFBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQTRhRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAY2hhcnNldCBcXFwidXRmLThcXFwiO1xcbi8qKlxcbiAqICNTQUNTUyhmb250LXNpemU7IGZzOyAxMiwgMTY7IDFweCk7XFxuICogQHByb3A6IOWxnuaAp+WQjVxcbiAqIEBuYW1lOiDnvKnlhpnlkI1cXG4gKiBAbGlzdDog5YC85YiX6KGoXFxuICogQHVuaXQ6IOWNleS9jeaNoueul+ihqOi+vuW8jywg6buY6K6k5Li6MXB4LCDmg7PopoEgcmVtIOWhq+WGmSAxLzE2KjFyZW1cXG4gKi9cXG4jU0FDU1MoQHByb3A7IEBuYW1lOyBAbGlzdDsgQHVuaXQpIHdoZW4gbm90KEBsaXN0ID0gZmFsc2UpIHtcXG4gIEBlc2NhcGVQcm9wOiBlc2NhcGUoQHByb3ApO1xcbiAgQGVzY2FwZU5hbWU6IGVzY2FwZShAbmFtZSk7XFxuICAubG9vcChAaSkgd2hlbiAoQGkgPCBsZW5ndGgoQGxpc3QpICsgMSkge1xcbiAgICBAaXRlbTogZXh0cmFjdChAbGlzdCwgQGkpO1xcbiAgICAuQHtlc2NhcGVOYW1lfUB7aXRlbX0ge1xcbiAgICAgIEB7ZXNjYXBlUHJvcH06IEBpdGVtICogQHVuaXQ7XFxuICAgIH1cXG4gICAgLmxvb3AoQGkrMSk7XFxuICB9XFxuXFxuICAubG9vcCgxKTtcXG59XFxuXFxuLyoqXFxuICogI1NBQ1NTKGZvbnQtd2VpZ2h0OyBmdzsgNDAwLCA3MDApO1xcbiAqIEBwcm9wOiDlsZ7mgKflkI1cXG4gKiBAbmFtZTog57yp5YaZ5ZCNXFxuICogQGxpc3Q6IOWAvOWIl+ihqFxcbiAqL1xcbiNTQUNTUyhAcHJvcDsgQG5hbWU7IEBsaXN0Oykgd2hlbiBub3QoQGxpc3QgPWZhbHNlKSB7XFxuICBAZXNjYXBlUHJvcDogZXNjYXBlKEBwcm9wKTtcXG4gIEBlc2NhcGVOYW1lOiBlc2NhcGUoQG5hbWUpO1xcbiAgLmxvb3AoQGkpIHdoZW4gKEBpIDwgbGVuZ3RoKEBsaXN0KSArIDEpIHtcXG4gICAgQGl0ZW06IGV4dHJhY3QoQGxpc3QsIEBpKTtcXG4gICAgLkB7ZXNjYXBlTmFtZX1Ae2l0ZW19IHtcXG4gICAgICBAe2VzY2FwZVByb3B9OiBAaXRlbTtcXG4gICAgfVxcbiAgICAubG9vcChAaSsxKTtcXG4gIH1cXG4gIC5sb29wKDEpO1xcbn1cXG5cIixcIi5haWN7YWxpZ24taXRlbXM6Y2VudGVyfVxcbi5haWZle2FsaWduLWl0ZW1zOmZsZXgtZW5kfVxcbi5haWZze2FsaWduLWl0ZW1zOmZsZXgtc3RhcnR9XFxuLmIwe2JvdHRvbTowfVxcbi5iY3R7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudH1cXG4uYm57Ym9yZGVyOm5vbmV9XFxuLmJyMHtib3JkZXItcmFkaXVzOjB9XFxuLmJyMTAwXFxcXCV7Ym9yZGVyLXJhZGl1czoxMDAlfVxcbi5ic2Jie2JveC1zaXppbmc6Ym9yZGVyLWJveH1cXG4uYmNfZmZme2JhY2tncm91bmQtY29sb3I6I2ZmZn1cXG4uYmNfMDAwe2JhY2tncm91bmQtY29sb3I6IzAwMH1cXG4uY18wMDB7Y29sb3I6IzAwMH1cXG4uY19mZmZ7Y29sb3I6I2ZmZn1cXG4uY2J7Y2xlYXI6Ym90aH1cXG4uY3B7Y3Vyc29yOnBvaW50ZXJ9XFxuLmRie2Rpc3BsYXk6YmxvY2t9XFxuLmRme2Rpc3BsYXk6ZmxleH1cXG4uZGl7ZGlzcGxheTppbmxpbmV9XFxuLmRpYntkaXNwbGF5OmlubGluZS1ibG9ja31cXG4uZGlme2Rpc3BsYXk6aW5saW5lLWZsZXh9XFxuLmRue2Rpc3BsYXk6bm9uZX1cXG4uZHR7ZGlzcGxheTp0YWJsZX1cXG4uZHRje2Rpc3BsYXk6dGFibGUtY2VsbH1cXG4uZjF7ZmxleDoxO21pbi13aWR0aDowfVxcbi5mYXtmbGV4OmF1dG99XFxuLmZkY3tmbGV4LWRpcmVjdGlvbjpjb2x1bW59XFxuLmZkcntmbGV4LWRpcmVjdGlvbjpyb3d9XFxuLmZpe2ZvbnQ6aW5oZXJpdH1cXG4uZmx7ZmxvYXQ6bGVmdH1cXG4uZnJ7ZmxvYXQ6cmlnaHR9XFxuLmZzMHtmb250LXNpemU6MH1cXG4uZnMxe2ZsZXgtc2hyaW5rOjF9XFxuLmZzaXtmb250LXN0eWxlOml0YWxpY31cXG4uZnNue2ZvbnQtc3R5bGU6bm9ybWFsfVxcbi5mdnNje2ZvbnQtdmFyaWFudDpzbWFsbC1jYXBzO3RleHQtdHJhbnNmb3JtOmxvd2VyY2FzZX1cXG4uZncxMDB7Zm9udC13ZWlnaHQ6MTAwfVxcbi5mdzIwMHtmb250LXdlaWdodDoyMDB9XFxuLmZ3MzAwe2ZvbnQtd2VpZ2h0OjMwMH1cXG4uZnc0MDB7Zm9udC13ZWlnaHQ6NDAwfVxcbi5mdzUwMHtmb250LXdlaWdodDo1MDB9XFxuLmZ3NjAwe2ZvbnQtd2VpZ2h0OjYwMH1cXG4uZnc3MDB7Zm9udC13ZWlnaHQ6NzAwfVxcbi5mdzgwMHtmb250LXdlaWdodDo4MDB9XFxuLmZ3OTAwe2ZvbnQtd2VpZ2h0OjkwMH1cXG4uZndue2ZvbnQtd2VpZ2h0OjQwMH1cXG4uZnd3e2ZsZXgtd3JhcDp3cmFwfVxcbi5oMTAwXFxcXCV7aGVpZ2h0OjEwMCV9XFxuLmpjY3tqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyfVxcbi5qY2Zle2p1c3RpZnktY29udGVudDpmbGV4LWVuZH1cXG4uamNzYXtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYXJvdW5kfVxcbi5qY3Nie2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVufVxcbi5sMHtsZWZ0OjB9XFxuLmwxMDBcXFxcJXtsZWZ0OjEwMCV9XFxuLmw1MFxcXFwle2xlZnQ6NTAlfVxcbi5saDF7bGluZS1oZWlnaHQ6MX1cXG4ubGgxXFxcXC4ye2xpbmUtaGVpZ2h0OjEuMn1cXG4ubGgxXFxcXC41e2xpbmUtaGVpZ2h0OjEuNX1cXG4ubGgxXFxcXC44e2xpbmUtaGVpZ2h0OjEuOH1cXG4ubHNue2xpc3Qtc3R5bGU6bm9uZX1cXG4ubTB7bWFyZ2luOjB9XFxuLm1sYXttYXJnaW4tbGVmdDphdXRvfVxcbi5tcmF7bWFyZ2luLXJpZ2h0OmF1dG99XFxuLm10YXttYXJnaW4tdG9wOmF1dG99XFxuLm1iYXttYXJnaW4tYm90dG9tOmF1dG99XFxuLm8we29wYWNpdHk6MH1cXG4ub2F7b3ZlcmZsb3c6YXV0bzstd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzp0b3VjaH1cXG4ub2h7b3ZlcmZsb3c6aGlkZGVufVxcbi5wMHtwYWRkaW5nOjB9XFxuLnBhe3Bvc2l0aW9uOmFic29sdXRlfVxcbi5wZW57cG9pbnRlci1ldmVudHM6bm9uZX1cXG4ucGZ7cG9zaXRpb246Zml4ZWR9XFxuLnBye3Bvc2l0aW9uOnJlbGF0aXZlfVxcbi5wdDEwMFxcXFwle3BhZGRpbmctdG9wOjEwMCV9XFxuLnIwe3JpZ2h0OjB9XFxuLnIxMDBcXFxcJXtyaWdodDoxMDAlfVxcbi50MHt0b3A6MH1cXG4udDEwMFxcXFwle3RvcDoxMDAlfVxcbi50NTBcXFxcJXt0b3A6NTAlfVxcbi5tdzEwMFxcXFwle21heC13aWR0aDoxMDAlfVxcbi50YWN7dGV4dC1hbGlnbjpjZW50ZXJ9XFxuLnRhant0ZXh0LWFsaWduOmp1c3RpZnl9XFxuLnRhbHt0ZXh0LWFsaWduOmxlZnR9XFxuLnRhcnt0ZXh0LWFsaWduOnJpZ2h0fVxcbi50ZG57dGV4dC1kZWNvcmF0aW9uOm5vbmV9XFxuLnRkdXt0ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lfVxcbi50bGZ7dGFibGUtbGF5b3V0OmZpeGVkfVxcbi50dGN7dGV4dC10cmFuc2Zvcm06Y2FwaXRhbGl6ZX1cXG4udHRse3RleHQtdHJhbnNmb3JtOmxvd2VyY2FzZX1cXG4udHRue3RleHQtdHJhbnNmb3JtOm5vbmV9XFxuLnR0dXt0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2V9XFxuLnVzbnstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmV9XFxuLnZhbXt2ZXJ0aWNhbC1hbGlnbjptaWRkbGV9XFxuLnZhdHt2ZXJ0aWNhbC1hbGlnbjp0b3B9XFxuLnZoe3Zpc2liaWxpdHk6aGlkZGVufVxcbi53MTAwXFxcXCV7d2lkdGg6MTAwJX1cXG4ud2Fuey13ZWJraXQtYXBwZWFyYW5jZTpub25lfVxcbi53c257d2hpdGUtc3BhY2U6bm93cmFwfVxcbi53d2J3e3dvcmQtd3JhcDpicmVhay13b3JkO3dvcmQtYnJlYWs6YnJlYWstYWxsfVxcbi56aTF7ei1pbmRleDoxfVwiLFwiQGltcG9ydCAnfnNhY3NzJztcXG5AaW1wb3J0ICd+c2Fjc3MvbGVzcy9TQUNTUy5sZXNzJztcXG5AaW1wb3J0ICd+c2Fjc3MvbGVzcy9IZWxwZXJzLmxlc3MnO1xcblxcblxcbkByZW06IDEvMTZyZW07XFxuXFxuQG1hcmdpbnM6IC0xLCA0LCA4LCAxMiwgMTY7XFxuI1NBQ1NTKG1hcmdpbi10b3A7IG10OyBAbWFyZ2luczsgQHJlbSk7XFxuI1NBQ1NTKG1hcmdpbi1ib3R0b207IG1iOyBAbWFyZ2luczsgQHJlbSk7XFxuI1NBQ1NTKG1hcmdpbi1yaWdodDsgbXI7IEBtYXJnaW5zOyBAcmVtKTtcXG4jU0FDU1MobWFyZ2luLWxlZnQ7IG1sOyBAbWFyZ2luczsgQHJlbSk7XFxuXFxuQHBhZGRpbmdzOiA0LCA4LCAxMiwgMTY7XFxuI1NBQ1NTKHBhZGRpbmctdG9wOyBwdDsgQHBhZGRpbmdzOyBAcmVtKTtcXG4jU0FDU1MocGFkZGluZy1yaWdodDsgcHI7IEBwYWRkaW5nczsgQHJlbSk7XFxuI1NBQ1NTKHBhZGRpbmctYm90dG9tOyBwYjsgQHBhZGRpbmdzOyBAcmVtKTtcXG4jU0FDU1MocGFkZGluZy1sZWZ0OyBwbDsgQHBhZGRpbmdzOyBAcmVtKTtcXG5cXG4jU0FDU1MoZm9udC13ZWlnaHQ7IGZ3OyA2MDApO1xcbiNTQUNTUyhmb250LXdlaWdodDsgZnc7IDYwMCk7XFxuI1NBQ1NTKGZvbnQtc2l6ZTsgZnM7IDEyLCAxNCwgMTYsIDIwOyAxLzE2cmVtKTtcXG4jU0FDU1MobGluZS1oZWlnaHQ7IGxoOyAxNiwgMjAsIDI0OyAxLzE2cmVtKTtcXG4jU0FDU1MoYm9yZGVyLXJhZGl1czsgYnI7IDIsIDQ7IDFweCk7XFxuXFxuLmgyNHsgaGVpZ2h0OiAxLjVyZW07IH1cXG5cXG4uY1xcXFw6bCwgLmNcXFxcOmxcXFxcOmg6aG92ZXIge1xcbiAgY29sb3I6ICMxMTE7XFxufVxcblxcbi5jXFxcXDptLCAuY1xcXFw6bVxcXFw6aDpob3ZlciB7XFxuICBjb2xvcjogIzMzMztcXG59XFxuXFxuLmNcXFxcOnMsIC5jXFxcXDpzXFxcXDpoOmhvdmVyIHtcXG4gIGNvbG9yOiAjNjY2O1xcbn1cXG5cXG4uY1xcXFw6eHMsIC5jXFxcXDp4c1xcXFw6aDpob3ZlciB7XFxuICBjb2xvcjogIzk5OTtcXG59XFxuXFxuLmNcXFxcOnByaW1hcnksIC5jXFxcXDpwcmltYXJ5XFxcXDpoOmhvdmVyIHtcXG4gIGNvbG9yOiAjNGM1ZmUyO1xcbn1cXG5cXG4udGQyMDAge1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMjAwbXM7XFxufVxcblxcbi8qIG90aGVycyAqL1xcbioge1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBpbmhlcml0O1xcbn1cXG5cXG5yb290IHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuc3ZnIHtcXG4gIHdpZHRoOiAxZW07XFxuICBoZWlnaHQ6IDFlbTtcXG4gIGZpbGw6IGN1cnJlbnRDb2xvcjtcXG59XFxuXFxuYm9keSwgcHJlLCBmb3JtLCBpbnB1dCwgcCB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxufVxcblxcbmJvZHksIGh0bWwge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxufVxcblxcbi5nX3dyYXAge1xcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XFxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxufVxcblxcbi5nX3JvdyB7XFxuICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xcbn1cXG5cXG4ucmVhY3QtcGFnZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5nX2hyIHtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xcbn1cXG5cXG4uZ19ocl90IHtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGRkO1xcbn1cXG5cXG4uZ19lbGwge1xcbiAgI0VsbGlwc2lzKCk7XFxufVxcblxcbi8qIHRpcHMgKi9cXG4uZ190aXBbZGF0YS10aXRsZV0ge1xcbiAgdGV4dC1pbmRlbnQ6IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG59XFxuXFxuLmdfdGlwW2RhdGEtdGl0bGVdOjpiZWZvcmUsXFxuLmdfdGlwW2RhdGEtdGl0bGVdOjphZnRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiA1MCU7XFxuICAtbXMtcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIHotaW5kZXg6IDEwMDtcXG59XFxuXFxuLmdfdGlwW2RhdGEtdGl0bGVdOjpiZWZvcmUge1xcbiAgY29udGVudDogYXR0cihkYXRhLXRpdGxlKTtcXG4gIHRvcDogLTQxcHg7XFxuICBtYXgtd2lkdGg6IDkwdnc7XFxuICBwYWRkaW5nOiA2cHggMTBweDtcXG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM3M2M0MjtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbi5nX3RpcFtkYXRhLXRpdGxlXTo6YWZ0ZXIge1xcbiAgY29udGVudDogJyc7XFxuICB3aWR0aDogMDtcXG4gIGhlaWdodDogMDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBib3JkZXI6IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci10b3AtY29sb3I6ICMzNzNjNDI7XFxuICB0b3A6IC0xMnB4O1xcbn1cXG5cXG4uZ190aXBbZGF0YS10aXRsZV06aG92ZXI6OmJlZm9yZSxcXG4uZ190aXBbZGF0YS10aXRsZV06aG92ZXI6OmFmdGVyLFxcbi5nX3RpcFtkYXRhLXRpdGxlXTpmb2N1czo6YmVmb3JlLFxcbi5nX3RpcFtkYXRhLXRpdGxlXTpmb2N1czo6YWZ0ZXIge1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiB2aXNpYmlsaXR5IC4xcyAuMXM7XFxuICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IC4xcyAuMXM7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG5cXG4uZ190aXBbZGF0YS10aXRsZV06aG92ZXIge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuc2VsZWN0e1xcbiAgZm9udC1zaXplOiAxMi8xNioxcmVtO1xcbiAgaGVpZ2h0OiAyNC8xNioxcmVtO1xcbiAgYm9yZGVyLWNvbG9yOiAjMDAwMDAwO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbn1cIixcIi8qIOa4hemZpOa1ruWKqCAqL1xcbiNDbGVhcmZpeCgpe1xcbiAgJjphZnRlcntcXG4gICAgZGlzcGxheTogdGFibGU7IGNvbnRlbnQ6ICcnOyBjbGVhcjogYm90aDtcXG4gIH1cXG59XFxuXFxuLyog5paH5a2X6LaF5Ye65LiA6KGM54K554K554K5ICovXFxuI0VsbGlwc2lzKCl7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwOyBvdmVyZmxvdzogaGlkZGVuOyB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG59XFxuXFxuLyog5aSa6KGM5paH5pys6LaF5Ye654K554K554K5ICovXFxuI0VsbGlwc2lzLW11bHRpcGxlKCl7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDsgb3ZlcmZsb3c6IGhpZGRlbjsgd29yZC13cmFwOiBicmVhay13b3JkOyAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xcbn1cXG5cXG4vKiDnlKjooajmoLznmoTmlrnlvI/mkpHmu6Hmta7liqjkuYvlkI7nmoTliankvZnnqbrpl7QgKi9cXG4jQ2VsbCgpe1xcbiAgZGlzcGxheTogdGFibGUtY2VsbDsgKmRpc3BsYXk6IGlubGluZS1ibG9jazsgd2lkdGg6IDIwMDBweDsgKndpZHRoOiBhdXRvO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiXCIsXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiXCIsXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyICYmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl0pOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJmdW5jdGlvbiBkZWVwRnJlZXplKG9iaikge1xuICAgIGlmIChvYmogaW5zdGFuY2VvZiBNYXApIHtcbiAgICAgICAgb2JqLmNsZWFyID0gb2JqLmRlbGV0ZSA9IG9iai5zZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ21hcCBpcyByZWFkLW9ubHknKTtcbiAgICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKG9iaiBpbnN0YW5jZW9mIFNldCkge1xuICAgICAgICBvYmouYWRkID0gb2JqLmNsZWFyID0gb2JqLmRlbGV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignc2V0IGlzIHJlYWQtb25seScpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8vIEZyZWV6ZSBzZWxmXG4gICAgT2JqZWN0LmZyZWV6ZShvYmopO1xuXG4gICAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMob2JqKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgIHZhciBwcm9wID0gb2JqW25hbWVdO1xuXG4gICAgICAgIC8vIEZyZWV6ZSBwcm9wIGlmIGl0IGlzIGFuIG9iamVjdFxuICAgICAgICBpZiAodHlwZW9mIHByb3AgPT0gJ29iamVjdCcgJiYgIU9iamVjdC5pc0Zyb3plbihwcm9wKSkge1xuICAgICAgICAgICAgZGVlcEZyZWV6ZShwcm9wKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG9iajtcbn1cblxudmFyIGRlZXBGcmVlemVFczYgPSBkZWVwRnJlZXplO1xudmFyIF9kZWZhdWx0ID0gZGVlcEZyZWV6ZTtcbmRlZXBGcmVlemVFczYuZGVmYXVsdCA9IF9kZWZhdWx0O1xuXG4vKiogQGltcGxlbWVudHMgQ2FsbGJhY2tSZXNwb25zZSAqL1xuY2xhc3MgUmVzcG9uc2Uge1xuICAvKipcbiAgICogQHBhcmFtIHtDb21waWxlZE1vZGV9IG1vZGVcbiAgICovXG4gIGNvbnN0cnVjdG9yKG1vZGUpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZpbmVkXG4gICAgaWYgKG1vZGUuZGF0YSA9PT0gdW5kZWZpbmVkKSBtb2RlLmRhdGEgPSB7fTtcblxuICAgIHRoaXMuZGF0YSA9IG1vZGUuZGF0YTtcbiAgICB0aGlzLmlzTWF0Y2hJZ25vcmVkID0gZmFsc2U7XG4gIH1cblxuICBpZ25vcmVNYXRjaCgpIHtcbiAgICB0aGlzLmlzTWF0Y2hJZ25vcmVkID0gdHJ1ZTtcbiAgfVxufVxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gZXNjYXBlSFRNTCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWVcbiAgICAucmVwbGFjZSgvJi9nLCAnJmFtcDsnKVxuICAgIC5yZXBsYWNlKC88L2csICcmbHQ7JylcbiAgICAucmVwbGFjZSgvPi9nLCAnJmd0OycpXG4gICAgLnJlcGxhY2UoL1wiL2csICcmcXVvdDsnKVxuICAgIC5yZXBsYWNlKC8nL2csICcmI3gyNzsnKTtcbn1cblxuLyoqXG4gKiBwZXJmb3JtcyBhIHNoYWxsb3cgbWVyZ2Ugb2YgbXVsdGlwbGUgb2JqZWN0cyBpbnRvIG9uZVxuICpcbiAqIEB0ZW1wbGF0ZSBUXG4gKiBAcGFyYW0ge1R9IG9yaWdpbmFsXG4gKiBAcGFyYW0ge1JlY29yZDxzdHJpbmcsYW55PltdfSBvYmplY3RzXG4gKiBAcmV0dXJucyB7VH0gYSBzaW5nbGUgbmV3IG9iamVjdFxuICovXG5mdW5jdGlvbiBpbmhlcml0KG9yaWdpbmFsLCAuLi5vYmplY3RzKSB7XG4gIC8qKiBAdHlwZSBSZWNvcmQ8c3RyaW5nLGFueT4gKi9cbiAgY29uc3QgcmVzdWx0ID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcblxuICBmb3IgKGNvbnN0IGtleSBpbiBvcmlnaW5hbCkge1xuICAgIHJlc3VsdFtrZXldID0gb3JpZ2luYWxba2V5XTtcbiAgfVxuICBvYmplY3RzLmZvckVhY2goZnVuY3Rpb24ob2JqKSB7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gb2JqKSB7XG4gICAgICByZXN1bHRba2V5XSA9IG9ialtrZXldO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiAvKiogQHR5cGUge1R9ICovIChyZXN1bHQpO1xufVxuXG4vKipcbiAqIEB0eXBlZGVmIHtvYmplY3R9IFJlbmRlcmVyXG4gKiBAcHJvcGVydHkgeyh0ZXh0OiBzdHJpbmcpID0+IHZvaWR9IGFkZFRleHRcbiAqIEBwcm9wZXJ0eSB7KG5vZGU6IE5vZGUpID0+IHZvaWR9IG9wZW5Ob2RlXG4gKiBAcHJvcGVydHkgeyhub2RlOiBOb2RlKSA9PiB2b2lkfSBjbG9zZU5vZGVcbiAqIEBwcm9wZXJ0eSB7KCkgPT4gc3RyaW5nfSB2YWx1ZVxuICovXG5cbi8qKiBAdHlwZWRlZiB7e2tpbmQ/OiBzdHJpbmcsIHN1Ymxhbmd1YWdlPzogYm9vbGVhbn19IE5vZGUgKi9cbi8qKiBAdHlwZWRlZiB7e3dhbGs6IChyOiBSZW5kZXJlcikgPT4gdm9pZH19IFRyZWUgKi9cbi8qKiAqL1xuXG5jb25zdCBTUEFOX0NMT1NFID0gJzwvc3Bhbj4nO1xuXG4vKipcbiAqIERldGVybWluZXMgaWYgYSBub2RlIG5lZWRzIHRvIGJlIHdyYXBwZWQgaW4gPHNwYW4+XG4gKlxuICogQHBhcmFtIHtOb2RlfSBub2RlICovXG5jb25zdCBlbWl0c1dyYXBwaW5nVGFncyA9IChub2RlKSA9PiB7XG4gIHJldHVybiAhIW5vZGUua2luZDtcbn07XG5cbi8qKiBAdHlwZSB7UmVuZGVyZXJ9ICovXG5jbGFzcyBIVE1MUmVuZGVyZXIge1xuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBIVE1MUmVuZGVyZXJcbiAgICpcbiAgICogQHBhcmFtIHtUcmVlfSBwYXJzZVRyZWUgLSB0aGUgcGFyc2UgdHJlZSAobXVzdCBzdXBwb3J0IGB3YWxrYCBBUEkpXG4gICAqIEBwYXJhbSB7e2NsYXNzUHJlZml4OiBzdHJpbmd9fSBvcHRpb25zXG4gICAqL1xuICBjb25zdHJ1Y3RvcihwYXJzZVRyZWUsIG9wdGlvbnMpIHtcbiAgICB0aGlzLmJ1ZmZlciA9IFwiXCI7XG4gICAgdGhpcy5jbGFzc1ByZWZpeCA9IG9wdGlvbnMuY2xhc3NQcmVmaXg7XG4gICAgcGFyc2VUcmVlLndhbGsodGhpcyk7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyB0ZXh0cyB0byB0aGUgb3V0cHV0IHN0cmVhbVxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAqL1xuICBhZGRUZXh0KHRleHQpIHtcbiAgICB0aGlzLmJ1ZmZlciArPSBlc2NhcGVIVE1MKHRleHQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSBub2RlIG9wZW4gdG8gdGhlIG91dHB1dCBzdHJlYW0gKGlmIG5lZWRlZClcbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlICovXG4gIG9wZW5Ob2RlKG5vZGUpIHtcbiAgICBpZiAoIWVtaXRzV3JhcHBpbmdUYWdzKG5vZGUpKSByZXR1cm47XG5cbiAgICBsZXQgY2xhc3NOYW1lID0gbm9kZS5raW5kO1xuICAgIGlmICghbm9kZS5zdWJsYW5ndWFnZSkge1xuICAgICAgY2xhc3NOYW1lID0gYCR7dGhpcy5jbGFzc1ByZWZpeH0ke2NsYXNzTmFtZX1gO1xuICAgIH1cbiAgICB0aGlzLnNwYW4oY2xhc3NOYW1lKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgbm9kZSBjbG9zZSB0byB0aGUgb3V0cHV0IHN0cmVhbSAoaWYgbmVlZGVkKVxuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGUgKi9cbiAgY2xvc2VOb2RlKG5vZGUpIHtcbiAgICBpZiAoIWVtaXRzV3JhcHBpbmdUYWdzKG5vZGUpKSByZXR1cm47XG5cbiAgICB0aGlzLmJ1ZmZlciArPSBTUEFOX0NMT1NFO1xuICB9XG5cbiAgLyoqXG4gICAqIHJldHVybnMgdGhlIGFjY3VtdWxhdGVkIGJ1ZmZlclxuICAqL1xuICB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5idWZmZXI7XG4gIH1cblxuICAvLyBoZWxwZXJzXG5cbiAgLyoqXG4gICAqIEJ1aWxkcyBhIHNwYW4gZWxlbWVudFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lICovXG4gIHNwYW4oY2xhc3NOYW1lKSB7XG4gICAgdGhpcy5idWZmZXIgKz0gYDxzcGFuIGNsYXNzPVwiJHtjbGFzc05hbWV9XCI+YDtcbiAgfVxufVxuXG4vKiogQHR5cGVkZWYge3traW5kPzogc3RyaW5nLCBzdWJsYW5ndWFnZT86IGJvb2xlYW4sIGNoaWxkcmVuOiBOb2RlW119IHwgc3RyaW5nfSBOb2RlICovXG4vKiogQHR5cGVkZWYge3traW5kPzogc3RyaW5nLCBzdWJsYW5ndWFnZT86IGJvb2xlYW4sIGNoaWxkcmVuOiBOb2RlW119IH0gRGF0YU5vZGUgKi9cbi8qKiAgKi9cblxuY2xhc3MgVG9rZW5UcmVlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLyoqIEB0eXBlIERhdGFOb2RlICovXG4gICAgdGhpcy5yb290Tm9kZSA9IHsgY2hpbGRyZW46IFtdIH07XG4gICAgdGhpcy5zdGFjayA9IFt0aGlzLnJvb3ROb2RlXTtcbiAgfVxuXG4gIGdldCB0b3AoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhY2tbdGhpcy5zdGFjay5sZW5ndGggLSAxXTtcbiAgfVxuXG4gIGdldCByb290KCkgeyByZXR1cm4gdGhpcy5yb290Tm9kZTsgfVxuXG4gIC8qKiBAcGFyYW0ge05vZGV9IG5vZGUgKi9cbiAgYWRkKG5vZGUpIHtcbiAgICB0aGlzLnRvcC5jaGlsZHJlbi5wdXNoKG5vZGUpO1xuICB9XG5cbiAgLyoqIEBwYXJhbSB7c3RyaW5nfSBraW5kICovXG4gIG9wZW5Ob2RlKGtpbmQpIHtcbiAgICAvKiogQHR5cGUgTm9kZSAqL1xuICAgIGNvbnN0IG5vZGUgPSB7IGtpbmQsIGNoaWxkcmVuOiBbXSB9O1xuICAgIHRoaXMuYWRkKG5vZGUpO1xuICAgIHRoaXMuc3RhY2sucHVzaChub2RlKTtcbiAgfVxuXG4gIGNsb3NlTm9kZSgpIHtcbiAgICBpZiAodGhpcy5zdGFjay5sZW5ndGggPiAxKSB7XG4gICAgICByZXR1cm4gdGhpcy5zdGFjay5wb3AoKTtcbiAgICB9XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmaW5lZFxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICBjbG9zZUFsbE5vZGVzKCkge1xuICAgIHdoaWxlICh0aGlzLmNsb3NlTm9kZSgpKTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodGhpcy5yb290Tm9kZSwgbnVsbCwgNCk7XG4gIH1cblxuICAvKipcbiAgICogQHR5cGVkZWYgeyBpbXBvcnQoXCIuL2h0bWxfcmVuZGVyZXJcIikuUmVuZGVyZXIgfSBSZW5kZXJlclxuICAgKiBAcGFyYW0ge1JlbmRlcmVyfSBidWlsZGVyXG4gICAqL1xuICB3YWxrKGJ1aWxkZXIpIHtcbiAgICAvLyB0aGlzIGRvZXMgbm90XG4gICAgcmV0dXJuIHRoaXMuY29uc3RydWN0b3IuX3dhbGsoYnVpbGRlciwgdGhpcy5yb290Tm9kZSk7XG4gICAgLy8gdGhpcyB3b3Jrc1xuICAgIC8vIHJldHVybiBUb2tlblRyZWUuX3dhbGsoYnVpbGRlciwgdGhpcy5yb290Tm9kZSk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtSZW5kZXJlcn0gYnVpbGRlclxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICovXG4gIHN0YXRpYyBfd2FsayhidWlsZGVyLCBub2RlKSB7XG4gICAgaWYgKHR5cGVvZiBub2RlID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBidWlsZGVyLmFkZFRleHQobm9kZSk7XG4gICAgfSBlbHNlIGlmIChub2RlLmNoaWxkcmVuKSB7XG4gICAgICBidWlsZGVyLm9wZW5Ob2RlKG5vZGUpO1xuICAgICAgbm9kZS5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4gdGhpcy5fd2FsayhidWlsZGVyLCBjaGlsZCkpO1xuICAgICAgYnVpbGRlci5jbG9zZU5vZGUobm9kZSk7XG4gICAgfVxuICAgIHJldHVybiBidWlsZGVyO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKi9cbiAgc3RhdGljIF9jb2xsYXBzZShub2RlKSB7XG4gICAgaWYgKHR5cGVvZiBub2RlID09PSBcInN0cmluZ1wiKSByZXR1cm47XG4gICAgaWYgKCFub2RlLmNoaWxkcmVuKSByZXR1cm47XG5cbiAgICBpZiAobm9kZS5jaGlsZHJlbi5ldmVyeShlbCA9PiB0eXBlb2YgZWwgPT09IFwic3RyaW5nXCIpKSB7XG4gICAgICAvLyBub2RlLnRleHQgPSBub2RlLmNoaWxkcmVuLmpvaW4oXCJcIik7XG4gICAgICAvLyBkZWxldGUgbm9kZS5jaGlsZHJlbjtcbiAgICAgIG5vZGUuY2hpbGRyZW4gPSBbbm9kZS5jaGlsZHJlbi5qb2luKFwiXCIpXTtcbiAgICB9IGVsc2Uge1xuICAgICAgbm9kZS5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgICBUb2tlblRyZWUuX2NvbGxhcHNlKGNoaWxkKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAgQ3VycmVudGx5IHRoaXMgaXMgYWxsIHByaXZhdGUgQVBJLCBidXQgdGhpcyBpcyB0aGUgbWluaW1hbCBBUEkgbmVjZXNzYXJ5XG4gIHRoYXQgYW4gRW1pdHRlciBtdXN0IGltcGxlbWVudCB0byBmdWxseSBzdXBwb3J0IHRoZSBwYXJzZXIuXG5cbiAgTWluaW1hbCBpbnRlcmZhY2U6XG5cbiAgLSBhZGRLZXl3b3JkKHRleHQsIGtpbmQpXG4gIC0gYWRkVGV4dCh0ZXh0KVxuICAtIGFkZFN1Ymxhbmd1YWdlKGVtaXR0ZXIsIHN1Ykxhbmd1YWdlTmFtZSlcbiAgLSBmaW5hbGl6ZSgpXG4gIC0gb3Blbk5vZGUoa2luZClcbiAgLSBjbG9zZU5vZGUoKVxuICAtIGNsb3NlQWxsTm9kZXMoKVxuICAtIHRvSFRNTCgpXG5cbiovXG5cbi8qKlxuICogQGltcGxlbWVudHMge0VtaXR0ZXJ9XG4gKi9cbmNsYXNzIFRva2VuVHJlZUVtaXR0ZXIgZXh0ZW5kcyBUb2tlblRyZWUge1xuICAvKipcbiAgICogQHBhcmFtIHsqfSBvcHRpb25zXG4gICAqL1xuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBraW5kXG4gICAqL1xuICBhZGRLZXl3b3JkKHRleHQsIGtpbmQpIHtcbiAgICBpZiAodGV4dCA9PT0gXCJcIikgeyByZXR1cm47IH1cblxuICAgIHRoaXMub3Blbk5vZGUoa2luZCk7XG4gICAgdGhpcy5hZGRUZXh0KHRleHQpO1xuICAgIHRoaXMuY2xvc2VOb2RlKCk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRleHRcbiAgICovXG4gIGFkZFRleHQodGV4dCkge1xuICAgIGlmICh0ZXh0ID09PSBcIlwiKSB7IHJldHVybjsgfVxuXG4gICAgdGhpcy5hZGQodGV4dCk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtFbWl0dGVyICYge3Jvb3Q6IERhdGFOb2RlfX0gZW1pdHRlclxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgKi9cbiAgYWRkU3VibGFuZ3VhZ2UoZW1pdHRlciwgbmFtZSkge1xuICAgIC8qKiBAdHlwZSBEYXRhTm9kZSAqL1xuICAgIGNvbnN0IG5vZGUgPSBlbWl0dGVyLnJvb3Q7XG4gICAgbm9kZS5raW5kID0gbmFtZTtcbiAgICBub2RlLnN1Ymxhbmd1YWdlID0gdHJ1ZTtcbiAgICB0aGlzLmFkZChub2RlKTtcbiAgfVxuXG4gIHRvSFRNTCgpIHtcbiAgICBjb25zdCByZW5kZXJlciA9IG5ldyBIVE1MUmVuZGVyZXIodGhpcywgdGhpcy5vcHRpb25zKTtcbiAgICByZXR1cm4gcmVuZGVyZXIudmFsdWUoKTtcbiAgfVxuXG4gIGZpbmFsaXplKCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiBAcmV0dXJucyB7UmVnRXhwfVxuICogKi9cbmZ1bmN0aW9uIGVzY2FwZSh2YWx1ZSkge1xuICByZXR1cm4gbmV3IFJlZ0V4cCh2YWx1ZS5yZXBsYWNlKC9bLS9cXFxcXiQqKz8uKCl8W1xcXXt9XS9nLCAnXFxcXCQmJyksICdtJyk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtSZWdFeHAgfCBzdHJpbmcgfSByZVxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gc291cmNlKHJlKSB7XG4gIGlmICghcmUpIHJldHVybiBudWxsO1xuICBpZiAodHlwZW9mIHJlID09PSBcInN0cmluZ1wiKSByZXR1cm4gcmU7XG5cbiAgcmV0dXJuIHJlLnNvdXJjZTtcbn1cblxuLyoqXG4gKiBAcGFyYW0gey4uLihSZWdFeHAgfCBzdHJpbmcpIH0gYXJnc1xuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gY29uY2F0KC4uLmFyZ3MpIHtcbiAgY29uc3Qgam9pbmVkID0gYXJncy5tYXAoKHgpID0+IHNvdXJjZSh4KSkuam9pbihcIlwiKTtcbiAgcmV0dXJuIGpvaW5lZDtcbn1cblxuLyoqXG4gKiBBbnkgb2YgdGhlIHBhc3NlZCBleHByZXNzc2lvbnMgbWF5IG1hdGNoXG4gKlxuICogQ3JlYXRlcyBhIGh1Z2UgdGhpcyB8IHRoaXMgfCB0aGF0IHwgdGhhdCBtYXRjaFxuICogQHBhcmFtIHsoUmVnRXhwIHwgc3RyaW5nKVtdIH0gYXJnc1xuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gZWl0aGVyKC4uLmFyZ3MpIHtcbiAgY29uc3Qgam9pbmVkID0gJygnICsgYXJncy5tYXAoKHgpID0+IHNvdXJjZSh4KSkuam9pbihcInxcIikgKyBcIilcIjtcbiAgcmV0dXJuIGpvaW5lZDtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge1JlZ0V4cH0gcmVcbiAqIEByZXR1cm5zIHtudW1iZXJ9XG4gKi9cbmZ1bmN0aW9uIGNvdW50TWF0Y2hHcm91cHMocmUpIHtcbiAgcmV0dXJuIChuZXcgUmVnRXhwKHJlLnRvU3RyaW5nKCkgKyAnfCcpKS5leGVjKCcnKS5sZW5ndGggLSAxO1xufVxuXG4vKipcbiAqIERvZXMgbGV4ZW1lIHN0YXJ0IHdpdGggYSByZWd1bGFyIGV4cHJlc3Npb24gbWF0Y2ggYXQgdGhlIGJlZ2lubmluZ1xuICogQHBhcmFtIHtSZWdFeHB9IHJlXG4gKiBAcGFyYW0ge3N0cmluZ30gbGV4ZW1lXG4gKi9cbmZ1bmN0aW9uIHN0YXJ0c1dpdGgocmUsIGxleGVtZSkge1xuICBjb25zdCBtYXRjaCA9IHJlICYmIHJlLmV4ZWMobGV4ZW1lKTtcbiAgcmV0dXJuIG1hdGNoICYmIG1hdGNoLmluZGV4ID09PSAwO1xufVxuXG4vLyBCQUNLUkVGX1JFIG1hdGNoZXMgYW4gb3BlbiBwYXJlbnRoZXNpcyBvciBiYWNrcmVmZXJlbmNlLiBUbyBhdm9pZFxuLy8gYW4gaW5jb3JyZWN0IHBhcnNlLCBpdCBhZGRpdGlvbmFsbHkgbWF0Y2hlcyB0aGUgZm9sbG93aW5nOlxuLy8gLSBbLi4uXSBlbGVtZW50cywgd2hlcmUgdGhlIG1lYW5pbmcgb2YgcGFyZW50aGVzZXMgYW5kIGVzY2FwZXMgY2hhbmdlXG4vLyAtIG90aGVyIGVzY2FwZSBzZXF1ZW5jZXMsIHNvIHdlIGRvIG5vdCBtaXNwYXJzZSBlc2NhcGUgc2VxdWVuY2VzIGFzXG4vLyAgIGludGVyZXN0aW5nIGVsZW1lbnRzXG4vLyAtIG5vbi1tYXRjaGluZyBvciBsb29rYWhlYWQgcGFyZW50aGVzZXMsIHdoaWNoIGRvIG5vdCBjYXB0dXJlLiBUaGVzZVxuLy8gICBmb2xsb3cgdGhlICcoJyB3aXRoIGEgJz8nLlxuY29uc3QgQkFDS1JFRl9SRSA9IC9cXFsoPzpbXlxcXFxcXF1dfFxcXFwuKSpcXF18XFwoXFw/P3xcXFxcKFsxLTldWzAtOV0qKXxcXFxcLi87XG5cbi8vIGpvaW4gbG9naWNhbGx5IGNvbXB1dGVzIHJlZ2V4cHMuam9pbihzZXBhcmF0b3IpLCBidXQgZml4ZXMgdGhlXG4vLyBiYWNrcmVmZXJlbmNlcyBzbyB0aGV5IGNvbnRpbnVlIHRvIG1hdGNoLlxuLy8gaXQgYWxzbyBwbGFjZXMgZWFjaCBpbmRpdmlkdWFsIHJlZ3VsYXIgZXhwcmVzc2lvbiBpbnRvIGl0J3Mgb3duXG4vLyBtYXRjaCBncm91cCwga2VlcGluZyB0cmFjayBvZiB0aGUgc2VxdWVuY2luZyBvZiB0aG9zZSBtYXRjaCBncm91cHNcbi8vIGlzIGN1cnJlbnRseSBhbiBleGVyY2lzZSBmb3IgdGhlIGNhbGxlci4gOi0pXG4vKipcbiAqIEBwYXJhbSB7KHN0cmluZyB8IFJlZ0V4cClbXX0gcmVnZXhwc1xuICogQHBhcmFtIHtzdHJpbmd9IHNlcGFyYXRvclxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gam9pbihyZWdleHBzLCBzZXBhcmF0b3IgPSBcInxcIikge1xuICBsZXQgbnVtQ2FwdHVyZXMgPSAwO1xuXG4gIHJldHVybiByZWdleHBzLm1hcCgocmVnZXgpID0+IHtcbiAgICBudW1DYXB0dXJlcyArPSAxO1xuICAgIGNvbnN0IG9mZnNldCA9IG51bUNhcHR1cmVzO1xuICAgIGxldCByZSA9IHNvdXJjZShyZWdleCk7XG4gICAgbGV0IG91dCA9ICcnO1xuXG4gICAgd2hpbGUgKHJlLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IG1hdGNoID0gQkFDS1JFRl9SRS5leGVjKHJlKTtcbiAgICAgIGlmICghbWF0Y2gpIHtcbiAgICAgICAgb3V0ICs9IHJlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIG91dCArPSByZS5zdWJzdHJpbmcoMCwgbWF0Y2guaW5kZXgpO1xuICAgICAgcmUgPSByZS5zdWJzdHJpbmcobWF0Y2guaW5kZXggKyBtYXRjaFswXS5sZW5ndGgpO1xuICAgICAgaWYgKG1hdGNoWzBdWzBdID09PSAnXFxcXCcgJiYgbWF0Y2hbMV0pIHtcbiAgICAgICAgLy8gQWRqdXN0IHRoZSBiYWNrcmVmZXJlbmNlLlxuICAgICAgICBvdXQgKz0gJ1xcXFwnICsgU3RyaW5nKE51bWJlcihtYXRjaFsxXSkgKyBvZmZzZXQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb3V0ICs9IG1hdGNoWzBdO1xuICAgICAgICBpZiAobWF0Y2hbMF0gPT09ICcoJykge1xuICAgICAgICAgIG51bUNhcHR1cmVzKys7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG91dDtcbiAgfSkubWFwKHJlID0+IGAoJHtyZX0pYCkuam9pbihzZXBhcmF0b3IpO1xufVxuXG4vLyBDb21tb24gcmVnZXhwc1xuY29uc3QgTUFUQ0hfTk9USElOR19SRSA9IC9cXGJcXEIvO1xuY29uc3QgSURFTlRfUkUgPSAnW2EtekEtWl1cXFxcdyonO1xuY29uc3QgVU5ERVJTQ09SRV9JREVOVF9SRSA9ICdbYS16QS1aX11cXFxcdyonO1xuY29uc3QgTlVNQkVSX1JFID0gJ1xcXFxiXFxcXGQrKFxcXFwuXFxcXGQrKT8nO1xuY29uc3QgQ19OVU1CRVJfUkUgPSAnKC0/KShcXFxcYjBbeFhdW2EtZkEtRjAtOV0rfChcXFxcYlxcXFxkKyhcXFxcLlxcXFxkKik/fFxcXFwuXFxcXGQrKShbZUVdWy0rXT9cXFxcZCspPyknOyAvLyAweC4uLiwgMC4uLiwgZGVjaW1hbCwgZmxvYXRcbmNvbnN0IEJJTkFSWV9OVU1CRVJfUkUgPSAnXFxcXGIoMGJbMDFdKyknOyAvLyAwYi4uLlxuY29uc3QgUkVfU1RBUlRFUlNfUkUgPSAnIXwhPXwhPT18JXwlPXwmfCYmfCY9fFxcXFwqfFxcXFwqPXxcXFxcK3xcXFxcKz18LHwtfC09fC89fC98Onw7fDw8fDw8PXw8PXw8fD09PXw9PXw9fD4+Pj18Pj49fD49fD4+Pnw+Pnw+fFxcXFw/fFxcXFxbfFxcXFx7fFxcXFwofFxcXFxefFxcXFxePXxcXFxcfHxcXFxcfD18XFxcXHxcXFxcfHx+JztcblxuLyoqXG4qIEBwYXJhbSB7IFBhcnRpYWw8TW9kZT4gJiB7YmluYXJ5Pzogc3RyaW5nIHwgUmVnRXhwfSB9IG9wdHNcbiovXG5jb25zdCBTSEVCQU5HID0gKG9wdHMgPSB7fSkgPT4ge1xuICBjb25zdCBiZWdpblNoZWJhbmcgPSAvXiMhWyBdKlxcLy87XG4gIGlmIChvcHRzLmJpbmFyeSkge1xuICAgIG9wdHMuYmVnaW4gPSBjb25jYXQoXG4gICAgICBiZWdpblNoZWJhbmcsXG4gICAgICAvLipcXGIvLFxuICAgICAgb3B0cy5iaW5hcnksXG4gICAgICAvXFxiLiovKTtcbiAgfVxuICByZXR1cm4gaW5oZXJpdCh7XG4gICAgY2xhc3NOYW1lOiAnbWV0YScsXG4gICAgYmVnaW46IGJlZ2luU2hlYmFuZyxcbiAgICBlbmQ6IC8kLyxcbiAgICByZWxldmFuY2U6IDAsXG4gICAgLyoqIEB0eXBlIHtNb2RlQ2FsbGJhY2t9ICovXG4gICAgXCJvbjpiZWdpblwiOiAobSwgcmVzcCkgPT4ge1xuICAgICAgaWYgKG0uaW5kZXggIT09IDApIHJlc3AuaWdub3JlTWF0Y2goKTtcbiAgICB9XG4gIH0sIG9wdHMpO1xufTtcblxuLy8gQ29tbW9uIG1vZGVzXG5jb25zdCBCQUNLU0xBU0hfRVNDQVBFID0ge1xuICBiZWdpbjogJ1xcXFxcXFxcW1xcXFxzXFxcXFNdJywgcmVsZXZhbmNlOiAwXG59O1xuY29uc3QgQVBPU19TVFJJTkdfTU9ERSA9IHtcbiAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgYmVnaW46ICdcXCcnLFxuICBlbmQ6ICdcXCcnLFxuICBpbGxlZ2FsOiAnXFxcXG4nLFxuICBjb250YWluczogW0JBQ0tTTEFTSF9FU0NBUEVdXG59O1xuY29uc3QgUVVPVEVfU1RSSU5HX01PREUgPSB7XG4gIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gIGJlZ2luOiAnXCInLFxuICBlbmQ6ICdcIicsXG4gIGlsbGVnYWw6ICdcXFxcbicsXG4gIGNvbnRhaW5zOiBbQkFDS1NMQVNIX0VTQ0FQRV1cbn07XG5jb25zdCBQSFJBU0FMX1dPUkRTX01PREUgPSB7XG4gIGJlZ2luOiAvXFxiKGF8YW58dGhlfGFyZXxJJ218aXNuJ3R8ZG9uJ3R8ZG9lc24ndHx3b24ndHxidXR8anVzdHxzaG91bGR8cHJldHR5fHNpbXBseXxlbm91Z2h8Z29ubmF8Z29pbmd8d3RmfHNvfHN1Y2h8d2lsbHx5b3V8eW91cnx0aGV5fGxpa2V8bW9yZSlcXGIvXG59O1xuLyoqXG4gKiBDcmVhdGVzIGEgY29tbWVudCBtb2RlXG4gKlxuICogQHBhcmFtIHtzdHJpbmcgfCBSZWdFeHB9IGJlZ2luXG4gKiBAcGFyYW0ge3N0cmluZyB8IFJlZ0V4cH0gZW5kXG4gKiBAcGFyYW0ge01vZGUgfCB7fX0gW21vZGVPcHRpb25zXVxuICogQHJldHVybnMge1BhcnRpYWw8TW9kZT59XG4gKi9cbmNvbnN0IENPTU1FTlQgPSBmdW5jdGlvbihiZWdpbiwgZW5kLCBtb2RlT3B0aW9ucyA9IHt9KSB7XG4gIGNvbnN0IG1vZGUgPSBpbmhlcml0KFxuICAgIHtcbiAgICAgIGNsYXNzTmFtZTogJ2NvbW1lbnQnLFxuICAgICAgYmVnaW4sXG4gICAgICBlbmQsXG4gICAgICBjb250YWluczogW11cbiAgICB9LFxuICAgIG1vZGVPcHRpb25zXG4gICk7XG4gIG1vZGUuY29udGFpbnMucHVzaChQSFJBU0FMX1dPUkRTX01PREUpO1xuICBtb2RlLmNvbnRhaW5zLnB1c2goe1xuICAgIGNsYXNzTmFtZTogJ2RvY3RhZycsXG4gICAgYmVnaW46ICcoPzpUT0RPfEZJWE1FfE5PVEV8QlVHfE9QVElNSVpFfEhBQ0t8WFhYKTonLFxuICAgIHJlbGV2YW5jZTogMFxuICB9KTtcbiAgcmV0dXJuIG1vZGU7XG59O1xuY29uc3QgQ19MSU5FX0NPTU1FTlRfTU9ERSA9IENPTU1FTlQoJy8vJywgJyQnKTtcbmNvbnN0IENfQkxPQ0tfQ09NTUVOVF9NT0RFID0gQ09NTUVOVCgnL1xcXFwqJywgJ1xcXFwqLycpO1xuY29uc3QgSEFTSF9DT01NRU5UX01PREUgPSBDT01NRU5UKCcjJywgJyQnKTtcbmNvbnN0IE5VTUJFUl9NT0RFID0ge1xuICBjbGFzc05hbWU6ICdudW1iZXInLFxuICBiZWdpbjogTlVNQkVSX1JFLFxuICByZWxldmFuY2U6IDBcbn07XG5jb25zdCBDX05VTUJFUl9NT0RFID0ge1xuICBjbGFzc05hbWU6ICdudW1iZXInLFxuICBiZWdpbjogQ19OVU1CRVJfUkUsXG4gIHJlbGV2YW5jZTogMFxufTtcbmNvbnN0IEJJTkFSWV9OVU1CRVJfTU9ERSA9IHtcbiAgY2xhc3NOYW1lOiAnbnVtYmVyJyxcbiAgYmVnaW46IEJJTkFSWV9OVU1CRVJfUkUsXG4gIHJlbGV2YW5jZTogMFxufTtcbmNvbnN0IENTU19OVU1CRVJfTU9ERSA9IHtcbiAgY2xhc3NOYW1lOiAnbnVtYmVyJyxcbiAgYmVnaW46IE5VTUJFUl9SRSArICcoJyArXG4gICAgJyV8ZW18ZXh8Y2h8cmVtJyArXG4gICAgJ3x2d3x2aHx2bWlufHZtYXgnICtcbiAgICAnfGNtfG1tfGlufHB0fHBjfHB4JyArXG4gICAgJ3xkZWd8Z3JhZHxyYWR8dHVybicgK1xuICAgICd8c3xtcycgK1xuICAgICd8SHp8a0h6JyArXG4gICAgJ3xkcGl8ZHBjbXxkcHB4JyArXG4gICAgJyk/JyxcbiAgcmVsZXZhbmNlOiAwXG59O1xuY29uc3QgUkVHRVhQX01PREUgPSB7XG4gIC8vIHRoaXMgb3V0ZXIgcnVsZSBtYWtlcyBzdXJlIHdlIGFjdHVhbGx5IGhhdmUgYSBXSE9MRSByZWdleCBhbmQgbm90IHNpbXBseVxuICAvLyBhbiBleHByZXNzaW9uIHN1Y2ggYXM6XG4gIC8vXG4gIC8vICAgICAzIC8gc29tZXRoaW5nXG4gIC8vXG4gIC8vICh3aGljaCB3aWxsIHRoZW4gYmxvdyB1cCB3aGVuIHJlZ2V4J3MgYGlsbGVnYWxgIHNlZXMgdGhlIG5ld2xpbmUpXG4gIGJlZ2luOiAvKD89XFwvW14vXFxuXSpcXC8pLyxcbiAgY29udGFpbnM6IFt7XG4gICAgY2xhc3NOYW1lOiAncmVnZXhwJyxcbiAgICBiZWdpbjogL1xcLy8sXG4gICAgZW5kOiAvXFwvW2dpbXV5XSovLFxuICAgIGlsbGVnYWw6IC9cXG4vLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICBCQUNLU0xBU0hfRVNDQVBFLFxuICAgICAge1xuICAgICAgICBiZWdpbjogL1xcWy8sXG4gICAgICAgIGVuZDogL1xcXS8sXG4gICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgY29udGFpbnM6IFtCQUNLU0xBU0hfRVNDQVBFXVxuICAgICAgfVxuICAgIF1cbiAgfV1cbn07XG5jb25zdCBUSVRMRV9NT0RFID0ge1xuICBjbGFzc05hbWU6ICd0aXRsZScsXG4gIGJlZ2luOiBJREVOVF9SRSxcbiAgcmVsZXZhbmNlOiAwXG59O1xuY29uc3QgVU5ERVJTQ09SRV9USVRMRV9NT0RFID0ge1xuICBjbGFzc05hbWU6ICd0aXRsZScsXG4gIGJlZ2luOiBVTkRFUlNDT1JFX0lERU5UX1JFLFxuICByZWxldmFuY2U6IDBcbn07XG5jb25zdCBNRVRIT0RfR1VBUkQgPSB7XG4gIC8vIGV4Y2x1ZGVzIG1ldGhvZCBuYW1lcyBmcm9tIGtleXdvcmQgcHJvY2Vzc2luZ1xuICBiZWdpbjogJ1xcXFwuXFxcXHMqJyArIFVOREVSU0NPUkVfSURFTlRfUkUsXG4gIHJlbGV2YW5jZTogMFxufTtcblxuLyoqXG4gKiBBZGRzIGVuZCBzYW1lIGFzIGJlZ2luIG1lY2hhbmljcyB0byBhIG1vZGVcbiAqXG4gKiBZb3VyIG1vZGUgbXVzdCBpbmNsdWRlIGF0IGxlYXN0IGEgc2luZ2xlICgpIG1hdGNoIGdyb3VwIGFzIHRoYXQgZmlyc3QgbWF0Y2hcbiAqIGdyb3VwIGlzIHdoYXQgaXMgdXNlZCBmb3IgY29tcGFyaXNvblxuICogQHBhcmFtIHtQYXJ0aWFsPE1vZGU+fSBtb2RlXG4gKi9cbmNvbnN0IEVORF9TQU1FX0FTX0JFR0lOID0gZnVuY3Rpb24obW9kZSkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbihtb2RlLFxuICAgIHtcbiAgICAgIC8qKiBAdHlwZSB7TW9kZUNhbGxiYWNrfSAqL1xuICAgICAgJ29uOmJlZ2luJzogKG0sIHJlc3ApID0+IHsgcmVzcC5kYXRhLl9iZWdpbk1hdGNoID0gbVsxXTsgfSxcbiAgICAgIC8qKiBAdHlwZSB7TW9kZUNhbGxiYWNrfSAqL1xuICAgICAgJ29uOmVuZCc6IChtLCByZXNwKSA9PiB7IGlmIChyZXNwLmRhdGEuX2JlZ2luTWF0Y2ggIT09IG1bMV0pIHJlc3AuaWdub3JlTWF0Y2goKTsgfVxuICAgIH0pO1xufTtcblxudmFyIE1PREVTID0gLyojX19QVVJFX18qL09iamVjdC5mcmVlemUoe1xuICAgIF9fcHJvdG9fXzogbnVsbCxcbiAgICBNQVRDSF9OT1RISU5HX1JFOiBNQVRDSF9OT1RISU5HX1JFLFxuICAgIElERU5UX1JFOiBJREVOVF9SRSxcbiAgICBVTkRFUlNDT1JFX0lERU5UX1JFOiBVTkRFUlNDT1JFX0lERU5UX1JFLFxuICAgIE5VTUJFUl9SRTogTlVNQkVSX1JFLFxuICAgIENfTlVNQkVSX1JFOiBDX05VTUJFUl9SRSxcbiAgICBCSU5BUllfTlVNQkVSX1JFOiBCSU5BUllfTlVNQkVSX1JFLFxuICAgIFJFX1NUQVJURVJTX1JFOiBSRV9TVEFSVEVSU19SRSxcbiAgICBTSEVCQU5HOiBTSEVCQU5HLFxuICAgIEJBQ0tTTEFTSF9FU0NBUEU6IEJBQ0tTTEFTSF9FU0NBUEUsXG4gICAgQVBPU19TVFJJTkdfTU9ERTogQVBPU19TVFJJTkdfTU9ERSxcbiAgICBRVU9URV9TVFJJTkdfTU9ERTogUVVPVEVfU1RSSU5HX01PREUsXG4gICAgUEhSQVNBTF9XT1JEU19NT0RFOiBQSFJBU0FMX1dPUkRTX01PREUsXG4gICAgQ09NTUVOVDogQ09NTUVOVCxcbiAgICBDX0xJTkVfQ09NTUVOVF9NT0RFOiBDX0xJTkVfQ09NTUVOVF9NT0RFLFxuICAgIENfQkxPQ0tfQ09NTUVOVF9NT0RFOiBDX0JMT0NLX0NPTU1FTlRfTU9ERSxcbiAgICBIQVNIX0NPTU1FTlRfTU9ERTogSEFTSF9DT01NRU5UX01PREUsXG4gICAgTlVNQkVSX01PREU6IE5VTUJFUl9NT0RFLFxuICAgIENfTlVNQkVSX01PREU6IENfTlVNQkVSX01PREUsXG4gICAgQklOQVJZX05VTUJFUl9NT0RFOiBCSU5BUllfTlVNQkVSX01PREUsXG4gICAgQ1NTX05VTUJFUl9NT0RFOiBDU1NfTlVNQkVSX01PREUsXG4gICAgUkVHRVhQX01PREU6IFJFR0VYUF9NT0RFLFxuICAgIFRJVExFX01PREU6IFRJVExFX01PREUsXG4gICAgVU5ERVJTQ09SRV9USVRMRV9NT0RFOiBVTkRFUlNDT1JFX1RJVExFX01PREUsXG4gICAgTUVUSE9EX0dVQVJEOiBNRVRIT0RfR1VBUkQsXG4gICAgRU5EX1NBTUVfQVNfQkVHSU46IEVORF9TQU1FX0FTX0JFR0lOXG59KTtcblxuLy8gR3JhbW1hciBleHRlbnNpb25zIC8gcGx1Z2luc1xuLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vaGlnaGxpZ2h0anMvaGlnaGxpZ2h0LmpzL2lzc3Vlcy8yODMzXG5cbi8vIEdyYW1tYXIgZXh0ZW5zaW9ucyBhbGxvdyBcInN5bnRhY3RpYyBzdWdhclwiIHRvIGJlIGFkZGVkIHRvIHRoZSBncmFtbWFyIG1vZGVzXG4vLyB3aXRob3V0IHJlcXVpcmluZyBhbnkgdW5kZXJseWluZyBjaGFuZ2VzIHRvIHRoZSBjb21waWxlciBpbnRlcm5hbHMuXG5cbi8vIGBjb21waWxlTWF0Y2hgIGJlaW5nIHRoZSBwZXJmZWN0IHNtYWxsIGV4YW1wbGUgb2Ygbm93IGFsbG93aW5nIGEgZ3JhbW1hclxuLy8gYXV0aG9yIHRvIHdyaXRlIGBtYXRjaGAgd2hlbiB0aGV5IGRlc2lyZSB0byBtYXRjaCBhIHNpbmdsZSBleHByZXNzaW9uIHJhdGhlclxuLy8gdGhhbiBiZWluZyBmb3JjZWQgdG8gdXNlIGBiZWdpbmAuICBUaGUgZXh0ZW5zaW9uIHRoZW4ganVzdCBtb3ZlcyBgbWF0Y2hgIGludG9cbi8vIGBiZWdpbmAgd2hlbiBpdCBydW5zLiAgSWUsIG5vIGZlYXR1cmVzIGhhdmUgYmVlbiBhZGRlZCwgYnV0IHdlJ3ZlIGp1c3QgbWFkZVxuLy8gdGhlIGV4cGVyaWVuY2Ugb2Ygd3JpdGluZyAoYW5kIHJlYWRpbmcgZ3JhbW1hcnMpIGEgbGl0dGxlIGJpdCBuaWNlci5cblxuLy8gLS0tLS0tXG5cbi8vIFRPRE86IFdlIG5lZWQgbmVnYXRpdmUgbG9vay1iZWhpbmQgc3VwcG9ydCB0byBkbyB0aGlzIHByb3Blcmx5XG4vKipcbiAqIFNraXAgYSBtYXRjaCBpZiBpdCBoYXMgYSBwcmVjZWRpbmcgZG90XG4gKlxuICogVGhpcyBpcyB1c2VkIGZvciBgYmVnaW5LZXl3b3Jkc2AgdG8gcHJldmVudCBtYXRjaGluZyBleHByZXNzaW9ucyBzdWNoIGFzXG4gKiBgYm9iLmtleXdvcmQuZG8oKWAuIFRoZSBtb2RlIGNvbXBpbGVyIGF1dG9tYXRpY2FsbHkgd2lyZXMgdGhpcyB1cCBhcyBhXG4gKiBzcGVjaWFsIF9pbnRlcm5hbF8gJ29uOmJlZ2luJyBjYWxsYmFjayBmb3IgbW9kZXMgd2l0aCBgYmVnaW5LZXl3b3Jkc2BcbiAqIEBwYXJhbSB7UmVnRXhwTWF0Y2hBcnJheX0gbWF0Y2hcbiAqIEBwYXJhbSB7Q2FsbGJhY2tSZXNwb25zZX0gcmVzcG9uc2VcbiAqL1xuZnVuY3Rpb24gc2tpcElmaGFzUHJlY2VkaW5nRG90KG1hdGNoLCByZXNwb25zZSkge1xuICBjb25zdCBiZWZvcmUgPSBtYXRjaC5pbnB1dFttYXRjaC5pbmRleCAtIDFdO1xuICBpZiAoYmVmb3JlID09PSBcIi5cIikge1xuICAgIHJlc3BvbnNlLmlnbm9yZU1hdGNoKCk7XG4gIH1cbn1cblxuXG4vKipcbiAqIGBiZWdpbktleXdvcmRzYCBzeW50YWN0aWMgc3VnYXJcbiAqIEB0eXBlIHtDb21waWxlckV4dH1cbiAqL1xuZnVuY3Rpb24gYmVnaW5LZXl3b3Jkcyhtb2RlLCBwYXJlbnQpIHtcbiAgaWYgKCFwYXJlbnQpIHJldHVybjtcbiAgaWYgKCFtb2RlLmJlZ2luS2V5d29yZHMpIHJldHVybjtcblxuICAvLyBmb3IgbGFuZ3VhZ2VzIHdpdGgga2V5d29yZHMgdGhhdCBpbmNsdWRlIG5vbi13b3JkIGNoYXJhY3RlcnMgY2hlY2tpbmcgZm9yXG4gIC8vIGEgd29yZCBib3VuZGFyeSBpcyBub3Qgc3VmZmljaWVudCwgc28gaW5zdGVhZCB3ZSBjaGVjayBmb3IgYSB3b3JkIGJvdW5kYXJ5XG4gIC8vIG9yIHdoaXRlc3BhY2UgLSB0aGlzIGRvZXMgbm8gaGFybSBpbiBhbnkgY2FzZSBzaW5jZSBvdXIga2V5d29yZCBlbmdpbmVcbiAgLy8gZG9lc24ndCBhbGxvdyBzcGFjZXMgaW4ga2V5d29yZHMgYW55d2F5cyBhbmQgd2Ugc3RpbGwgY2hlY2sgZm9yIHRoZSBib3VuZGFyeVxuICAvLyBmaXJzdFxuICBtb2RlLmJlZ2luID0gJ1xcXFxiKCcgKyBtb2RlLmJlZ2luS2V5d29yZHMuc3BsaXQoJyAnKS5qb2luKCd8JykgKyAnKSg/IVxcXFwuKSg/PVxcXFxifFxcXFxzKSc7XG4gIG1vZGUuX19iZWZvcmVCZWdpbiA9IHNraXBJZmhhc1ByZWNlZGluZ0RvdDtcbiAgbW9kZS5rZXl3b3JkcyA9IG1vZGUua2V5d29yZHMgfHwgbW9kZS5iZWdpbktleXdvcmRzO1xuICBkZWxldGUgbW9kZS5iZWdpbktleXdvcmRzO1xuXG4gIC8vIHByZXZlbnRzIGRvdWJsZSByZWxldmFuY2UsIHRoZSBrZXl3b3JkcyB0aGVtc2VsdmVzIHByb3ZpZGVcbiAgLy8gcmVsZXZhbmNlLCB0aGUgbW9kZSBkb2Vzbid0IG5lZWQgdG8gZG91YmxlIGl0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZmluZWRcbiAgaWYgKG1vZGUucmVsZXZhbmNlID09PSB1bmRlZmluZWQpIG1vZGUucmVsZXZhbmNlID0gMDtcbn1cblxuLyoqXG4gKiBBbGxvdyBgaWxsZWdhbGAgdG8gY29udGFpbiBhbiBhcnJheSBvZiBpbGxlZ2FsIHZhbHVlc1xuICogQHR5cGUge0NvbXBpbGVyRXh0fVxuICovXG5mdW5jdGlvbiBjb21waWxlSWxsZWdhbChtb2RlLCBfcGFyZW50KSB7XG4gIGlmICghQXJyYXkuaXNBcnJheShtb2RlLmlsbGVnYWwpKSByZXR1cm47XG5cbiAgbW9kZS5pbGxlZ2FsID0gZWl0aGVyKC4uLm1vZGUuaWxsZWdhbCk7XG59XG5cbi8qKlxuICogYG1hdGNoYCB0byBtYXRjaCBhIHNpbmdsZSBleHByZXNzaW9uIGZvciByZWFkYWJpbGl0eVxuICogQHR5cGUge0NvbXBpbGVyRXh0fVxuICovXG5mdW5jdGlvbiBjb21waWxlTWF0Y2gobW9kZSwgX3BhcmVudCkge1xuICBpZiAoIW1vZGUubWF0Y2gpIHJldHVybjtcbiAgaWYgKG1vZGUuYmVnaW4gfHwgbW9kZS5lbmQpIHRocm93IG5ldyBFcnJvcihcImJlZ2luICYgZW5kIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggbWF0Y2hcIik7XG5cbiAgbW9kZS5iZWdpbiA9IG1vZGUubWF0Y2g7XG4gIGRlbGV0ZSBtb2RlLm1hdGNoO1xufVxuXG4vKipcbiAqIHByb3ZpZGVzIHRoZSBkZWZhdWx0IDEgcmVsZXZhbmNlIHRvIGFsbCBtb2Rlc1xuICogQHR5cGUge0NvbXBpbGVyRXh0fVxuICovXG5mdW5jdGlvbiBjb21waWxlUmVsZXZhbmNlKG1vZGUsIF9wYXJlbnQpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmaW5lZFxuICBpZiAobW9kZS5yZWxldmFuY2UgPT09IHVuZGVmaW5lZCkgbW9kZS5yZWxldmFuY2UgPSAxO1xufVxuXG4vLyBrZXl3b3JkcyB0aGF0IHNob3VsZCBoYXZlIG5vIGRlZmF1bHQgcmVsZXZhbmNlIHZhbHVlXG5jb25zdCBDT01NT05fS0VZV09SRFMgPSBbXG4gICdvZicsXG4gICdhbmQnLFxuICAnZm9yJyxcbiAgJ2luJyxcbiAgJ25vdCcsXG4gICdvcicsXG4gICdpZicsXG4gICd0aGVuJyxcbiAgJ3BhcmVudCcsIC8vIGNvbW1vbiB2YXJpYWJsZSBuYW1lXG4gICdsaXN0JywgLy8gY29tbW9uIHZhcmlhYmxlIG5hbWVcbiAgJ3ZhbHVlJyAvLyBjb21tb24gdmFyaWFibGUgbmFtZVxuXTtcblxuY29uc3QgREVGQVVMVF9LRVlXT1JEX0NMQVNTTkFNRSA9IFwia2V5d29yZFwiO1xuXG4vKipcbiAqIEdpdmVuIHJhdyBrZXl3b3JkcyBmcm9tIGEgbGFuZ3VhZ2UgZGVmaW5pdGlvbiwgY29tcGlsZSB0aGVtLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nIHwgUmVjb3JkPHN0cmluZyxzdHJpbmd8c3RyaW5nW10+IHwgQXJyYXk8c3RyaW5nPn0gcmF3S2V5d29yZHNcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gY2FzZUluc2Vuc2l0aXZlXG4gKi9cbmZ1bmN0aW9uIGNvbXBpbGVLZXl3b3JkcyhyYXdLZXl3b3JkcywgY2FzZUluc2Vuc2l0aXZlLCBjbGFzc05hbWUgPSBERUZBVUxUX0tFWVdPUkRfQ0xBU1NOQU1FKSB7XG4gIC8qKiBAdHlwZSBLZXl3b3JkRGljdCAqL1xuICBjb25zdCBjb21waWxlZEtleXdvcmRzID0ge307XG5cbiAgLy8gaW5wdXQgY2FuIGJlIGEgc3RyaW5nIG9mIGtleXdvcmRzLCBhbiBhcnJheSBvZiBrZXl3b3Jkcywgb3IgYSBvYmplY3Qgd2l0aFxuICAvLyBuYW1lZCBrZXlzIHJlcHJlc2VudGluZyBjbGFzc05hbWUgKHdoaWNoIGNhbiB0aGVuIHBvaW50IHRvIGEgc3RyaW5nIG9yIGFycmF5KVxuICBpZiAodHlwZW9mIHJhd0tleXdvcmRzID09PSAnc3RyaW5nJykge1xuICAgIGNvbXBpbGVMaXN0KGNsYXNzTmFtZSwgcmF3S2V5d29yZHMuc3BsaXQoXCIgXCIpKTtcbiAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHJhd0tleXdvcmRzKSkge1xuICAgIGNvbXBpbGVMaXN0KGNsYXNzTmFtZSwgcmF3S2V5d29yZHMpO1xuICB9IGVsc2Uge1xuICAgIE9iamVjdC5rZXlzKHJhd0tleXdvcmRzKS5mb3JFYWNoKGZ1bmN0aW9uKGNsYXNzTmFtZSkge1xuICAgICAgLy8gY29sbGFwc2UgYWxsIG91ciBvYmplY3RzIGJhY2sgaW50byB0aGUgcGFyZW50IG9iamVjdFxuICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgY29tcGlsZWRLZXl3b3JkcyxcbiAgICAgICAgY29tcGlsZUtleXdvcmRzKHJhd0tleXdvcmRzW2NsYXNzTmFtZV0sIGNhc2VJbnNlbnNpdGl2ZSwgY2xhc3NOYW1lKVxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gY29tcGlsZWRLZXl3b3JkcztcblxuICAvLyAtLS1cblxuICAvKipcbiAgICogQ29tcGlsZXMgYW4gaW5kaXZpZHVhbCBsaXN0IG9mIGtleXdvcmRzXG4gICAqXG4gICAqIEV4OiBcImZvciBpZiB3aGVuIHdoaWxlfDVcIlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lXG4gICAqIEBwYXJhbSB7QXJyYXk8c3RyaW5nPn0ga2V5d29yZExpc3RcbiAgICovXG4gIGZ1bmN0aW9uIGNvbXBpbGVMaXN0KGNsYXNzTmFtZSwga2V5d29yZExpc3QpIHtcbiAgICBpZiAoY2FzZUluc2Vuc2l0aXZlKSB7XG4gICAgICBrZXl3b3JkTGlzdCA9IGtleXdvcmRMaXN0Lm1hcCh4ID0+IHgudG9Mb3dlckNhc2UoKSk7XG4gICAgfVxuICAgIGtleXdvcmRMaXN0LmZvckVhY2goZnVuY3Rpb24oa2V5d29yZCkge1xuICAgICAgY29uc3QgcGFpciA9IGtleXdvcmQuc3BsaXQoJ3wnKTtcbiAgICAgIGNvbXBpbGVkS2V5d29yZHNbcGFpclswXV0gPSBbY2xhc3NOYW1lLCBzY29yZUZvcktleXdvcmQocGFpclswXSwgcGFpclsxXSldO1xuICAgIH0pO1xuICB9XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgcHJvcGVyIHNjb3JlIGZvciBhIGdpdmVuIGtleXdvcmRcbiAqXG4gKiBBbHNvIHRha2VzIGludG8gYWNjb3VudCBjb21tZW50IGtleXdvcmRzLCB3aGljaCB3aWxsIGJlIHNjb3JlZCAwIFVOTEVTU1xuICogYW5vdGhlciBzY29yZSBoYXMgYmVlbiBtYW51YWxseSBhc3NpZ25lZC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXl3b3JkXG4gKiBAcGFyYW0ge3N0cmluZ30gW3Byb3ZpZGVkU2NvcmVdXG4gKi9cbmZ1bmN0aW9uIHNjb3JlRm9yS2V5d29yZChrZXl3b3JkLCBwcm92aWRlZFNjb3JlKSB7XG4gIC8vIG1hbnVhbCBzY29yZXMgYWx3YXlzIHdpbiBvdmVyIGNvbW1vbiBrZXl3b3Jkc1xuICAvLyBzbyB5b3UgY2FuIGZvcmNlIGEgc2NvcmUgb2YgMSBpZiB5b3UgcmVhbGx5IGluc2lzdFxuICBpZiAocHJvdmlkZWRTY29yZSkge1xuICAgIHJldHVybiBOdW1iZXIocHJvdmlkZWRTY29yZSk7XG4gIH1cblxuICByZXR1cm4gY29tbW9uS2V5d29yZChrZXl3b3JkKSA/IDAgOiAxO1xufVxuXG4vKipcbiAqIERldGVybWluZXMgaWYgYSBnaXZlbiBrZXl3b3JkIGlzIGNvbW1vbiBvciBub3RcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5d29yZCAqL1xuZnVuY3Rpb24gY29tbW9uS2V5d29yZChrZXl3b3JkKSB7XG4gIHJldHVybiBDT01NT05fS0VZV09SRFMuaW5jbHVkZXMoa2V5d29yZC50b0xvd2VyQ2FzZSgpKTtcbn1cblxuLy8gY29tcGlsYXRpb25cblxuLyoqXG4gKiBDb21waWxlcyBhIGxhbmd1YWdlIGRlZmluaXRpb24gcmVzdWx0XG4gKlxuICogR2l2ZW4gdGhlIHJhdyByZXN1bHQgb2YgYSBsYW5ndWFnZSBkZWZpbml0aW9uIChMYW5ndWFnZSksIGNvbXBpbGVzIHRoaXMgc29cbiAqIHRoYXQgaXQgaXMgcmVhZHkgZm9yIGhpZ2hsaWdodGluZyBjb2RlLlxuICogQHBhcmFtIHtMYW5ndWFnZX0gbGFuZ3VhZ2VcbiAqIEBwYXJhbSB7e3BsdWdpbnM6IEhMSlNQbHVnaW5bXX19IG9wdHNcbiAqIEByZXR1cm5zIHtDb21waWxlZExhbmd1YWdlfVxuICovXG5mdW5jdGlvbiBjb21waWxlTGFuZ3VhZ2UobGFuZ3VhZ2UsIHsgcGx1Z2lucyB9KSB7XG4gIC8qKlxuICAgKiBCdWlsZHMgYSByZWdleCB3aXRoIHRoZSBjYXNlIHNlbnNhdGl2aWxpdHkgb2YgdGhlIGN1cnJlbnQgbGFuZ3VhZ2VcbiAgICpcbiAgICogQHBhcmFtIHtSZWdFeHAgfCBzdHJpbmd9IHZhbHVlXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2dsb2JhbF1cbiAgICovXG4gIGZ1bmN0aW9uIGxhbmdSZSh2YWx1ZSwgZ2xvYmFsKSB7XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoXG4gICAgICBzb3VyY2UodmFsdWUpLFxuICAgICAgJ20nICsgKGxhbmd1YWdlLmNhc2VfaW5zZW5zaXRpdmUgPyAnaScgOiAnJykgKyAoZ2xvYmFsID8gJ2cnIDogJycpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgIFN0b3JlcyBtdWx0aXBsZSByZWd1bGFyIGV4cHJlc3Npb25zIGFuZCBhbGxvd3MgeW91IHRvIHF1aWNrbHkgc2VhcmNoIGZvclxuICAgIHRoZW0gYWxsIGluIGEgc3RyaW5nIHNpbXVsdGFuZW91c2x5IC0gcmV0dXJuaW5nIHRoZSBmaXJzdCBtYXRjaC4gIEl0IGRvZXNcbiAgICB0aGlzIGJ5IGNyZWF0aW5nIGEgaHVnZSAoYXxifGMpIHJlZ2V4IC0gZWFjaCBpbmRpdmlkdWFsIGl0ZW0gd3JhcHBlZCB3aXRoICgpXG4gICAgYW5kIGpvaW5lZCBieSBgfGAgLSB1c2luZyBtYXRjaCBncm91cHMgdG8gdHJhY2sgcG9zaXRpb24uICBXaGVuIGEgbWF0Y2ggaXNcbiAgICBmb3VuZCBjaGVja2luZyB3aGljaCBwb3NpdGlvbiBpbiB0aGUgYXJyYXkgaGFzIGNvbnRlbnQgYWxsb3dzIHVzIHRvIGZpZ3VyZVxuICAgIG91dCB3aGljaCBvZiB0aGUgb3JpZ2luYWwgcmVnZXhlcyAvIG1hdGNoIGdyb3VwcyB0cmlnZ2VyZWQgdGhlIG1hdGNoLlxuXG4gICAgVGhlIG1hdGNoIG9iamVjdCBpdHNlbGYgKHRoZSByZXN1bHQgb2YgYFJlZ2V4LmV4ZWNgKSBpcyByZXR1cm5lZCBidXQgYWxzb1xuICAgIGVuaGFuY2VkIGJ5IG1lcmdpbmcgaW4gYW55IG1ldGEtZGF0YSB0aGF0IHdhcyByZWdpc3RlcmVkIHdpdGggdGhlIHJlZ2V4LlxuICAgIFRoaXMgaXMgaG93IHdlIGtlZXAgdHJhY2sgb2Ygd2hpY2ggbW9kZSBtYXRjaGVkLCBhbmQgd2hhdCB0eXBlIG9mIHJ1bGVcbiAgICAoYGlsbGVnYWxgLCBgYmVnaW5gLCBlbmQsIGV0YykuXG4gICovXG4gIGNsYXNzIE11bHRpUmVnZXgge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgdGhpcy5tYXRjaEluZGV4ZXMgPSB7fTtcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIHRoaXMucmVnZXhlcyA9IFtdO1xuICAgICAgdGhpcy5tYXRjaEF0ID0gMTtcbiAgICAgIHRoaXMucG9zaXRpb24gPSAwO1xuICAgIH1cblxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBhZGRSdWxlKHJlLCBvcHRzKSB7XG4gICAgICBvcHRzLnBvc2l0aW9uID0gdGhpcy5wb3NpdGlvbisrO1xuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgdGhpcy5tYXRjaEluZGV4ZXNbdGhpcy5tYXRjaEF0XSA9IG9wdHM7XG4gICAgICB0aGlzLnJlZ2V4ZXMucHVzaChbb3B0cywgcmVdKTtcbiAgICAgIHRoaXMubWF0Y2hBdCArPSBjb3VudE1hdGNoR3JvdXBzKHJlKSArIDE7XG4gICAgfVxuXG4gICAgY29tcGlsZSgpIHtcbiAgICAgIGlmICh0aGlzLnJlZ2V4ZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIC8vIGF2b2lkcyB0aGUgbmVlZCB0byBjaGVjayBsZW5ndGggZXZlcnkgdGltZSBleGVjIGlzIGNhbGxlZFxuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHRoaXMuZXhlYyA9ICgpID0+IG51bGw7XG4gICAgICB9XG4gICAgICBjb25zdCB0ZXJtaW5hdG9ycyA9IHRoaXMucmVnZXhlcy5tYXAoZWwgPT4gZWxbMV0pO1xuICAgICAgdGhpcy5tYXRjaGVyUmUgPSBsYW5nUmUoam9pbih0ZXJtaW5hdG9ycyksIHRydWUpO1xuICAgICAgdGhpcy5sYXN0SW5kZXggPSAwO1xuICAgIH1cblxuICAgIC8qKiBAcGFyYW0ge3N0cmluZ30gcyAqL1xuICAgIGV4ZWMocykge1xuICAgICAgdGhpcy5tYXRjaGVyUmUubGFzdEluZGV4ID0gdGhpcy5sYXN0SW5kZXg7XG4gICAgICBjb25zdCBtYXRjaCA9IHRoaXMubWF0Y2hlclJlLmV4ZWMocyk7XG4gICAgICBpZiAoIW1hdGNoKSB7IHJldHVybiBudWxsOyB9XG5cbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZmluZWRcbiAgICAgIGNvbnN0IGkgPSBtYXRjaC5maW5kSW5kZXgoKGVsLCBpKSA9PiBpID4gMCAmJiBlbCAhPT0gdW5kZWZpbmVkKTtcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIGNvbnN0IG1hdGNoRGF0YSA9IHRoaXMubWF0Y2hJbmRleGVzW2ldO1xuICAgICAgLy8gdHJpbSBvZmYgYW55IGVhcmxpZXIgbm9uLXJlbGV2YW50IG1hdGNoIGdyb3VwcyAoaWUsIHRoZSBvdGhlciByZWdleFxuICAgICAgLy8gbWF0Y2ggZ3JvdXBzIHRoYXQgbWFrZSB1cCB0aGUgbXVsdGktbWF0Y2hlcilcbiAgICAgIG1hdGNoLnNwbGljZSgwLCBpKTtcblxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24obWF0Y2gsIG1hdGNoRGF0YSk7XG4gICAgfVxuICB9XG5cbiAgLypcbiAgICBDcmVhdGVkIHRvIHNvbHZlIHRoZSBrZXkgZGVmaWNpZW50bHkgd2l0aCBNdWx0aVJlZ2V4IC0gdGhlcmUgaXMgbm8gd2F5IHRvXG4gICAgdGVzdCBmb3IgbXVsdGlwbGUgbWF0Y2hlcyBhdCBhIHNpbmdsZSBsb2NhdGlvbi4gIFdoeSB3b3VsZCB3ZSBuZWVkIHRvIGRvXG4gICAgdGhhdD8gIEluIHRoZSBmdXR1cmUgYSBtb3JlIGR5bmFtaWMgZW5naW5lIHdpbGwgYWxsb3cgY2VydGFpbiBtYXRjaGVzIHRvIGJlXG4gICAgaWdub3JlZC4gIEFuIGV4YW1wbGU6IGlmIHdlIG1hdGNoZWQgc2F5IHRoZSAzcmQgcmVnZXggaW4gYSBsYXJnZSBncm91cCBidXRcbiAgICBkZWNpZGVkIHRvIGlnbm9yZSBpdCAtIHdlJ2QgbmVlZCB0byBzdGFydGVkIHRlc3RpbmcgYWdhaW4gYXQgdGhlIDR0aFxuICAgIHJlZ2V4Li4uIGJ1dCBNdWx0aVJlZ2V4IGl0c2VsZiBnaXZlcyB1cyBubyByZWFsIHdheSB0byBkbyB0aGF0LlxuXG4gICAgU28gd2hhdCB0aGlzIGNsYXNzIGNyZWF0ZXMgTXVsdGlSZWdleHMgb24gdGhlIGZseSBmb3Igd2hhdGV2ZXIgc2VhcmNoXG4gICAgcG9zaXRpb24gdGhleSBhcmUgbmVlZGVkLlxuXG4gICAgTk9URTogVGhlc2UgYWRkaXRpb25hbCBNdWx0aVJlZ2V4IG9iamVjdHMgYXJlIGNyZWF0ZWQgZHluYW1pY2FsbHkuICBGb3IgbW9zdFxuICAgIGdyYW1tYXJzIG1vc3Qgb2YgdGhlIHRpbWUgd2Ugd2lsbCBuZXZlciBhY3R1YWxseSBuZWVkIGFueXRoaW5nIG1vcmUgdGhhbiB0aGVcbiAgICBmaXJzdCBNdWx0aVJlZ2V4IC0gc28gdGhpcyBzaG91bGRuJ3QgaGF2ZSB0b28gbXVjaCBvdmVyaGVhZC5cblxuICAgIFNheSB0aGlzIGlzIG91ciBzZWFyY2ggZ3JvdXAsIGFuZCB3ZSBtYXRjaCByZWdleDMsIGJ1dCB3aXNoIHRvIGlnbm9yZSBpdC5cblxuICAgICAgcmVnZXgxIHwgcmVnZXgyIHwgcmVnZXgzIHwgcmVnZXg0IHwgcmVnZXg1ICAgICcgaWUsIHN0YXJ0QXQgPSAwXG5cbiAgICBXaGF0IHdlIG5lZWQgaXMgYSBuZXcgTXVsdGlSZWdleCB0aGF0IG9ubHkgaW5jbHVkZXMgdGhlIHJlbWFpbmluZ1xuICAgIHBvc3NpYmlsaXRpZXM6XG5cbiAgICAgIHJlZ2V4NCB8IHJlZ2V4NSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnIGllLCBzdGFydEF0ID0gM1xuXG4gICAgVGhpcyBjbGFzcyB3cmFwcyBhbGwgdGhhdCBjb21wbGV4aXR5IHVwIGluIGEgc2ltcGxlIEFQSS4uLiBgc3RhcnRBdGAgZGVjaWRlc1xuICAgIHdoZXJlIGluIHRoZSBhcnJheSBvZiBleHByZXNzaW9ucyB0byBzdGFydCBkb2luZyB0aGUgbWF0Y2hpbmcuIEl0XG4gICAgYXV0by1pbmNyZW1lbnRzLCBzbyBpZiBhIG1hdGNoIGlzIGZvdW5kIGF0IHBvc2l0aW9uIDIsIHRoZW4gc3RhcnRBdCB3aWxsIGJlXG4gICAgc2V0IHRvIDMuICBJZiB0aGUgZW5kIGlzIHJlYWNoZWQgc3RhcnRBdCB3aWxsIHJldHVybiB0byAwLlxuXG4gICAgTU9TVCBvZiB0aGUgdGltZSB0aGUgcGFyc2VyIHdpbGwgYmUgc2V0dGluZyBzdGFydEF0IG1hbnVhbGx5IHRvIDAuXG4gICovXG4gIGNsYXNzIFJlc3VtYWJsZU11bHRpUmVnZXgge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgdGhpcy5ydWxlcyA9IFtdO1xuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgdGhpcy5tdWx0aVJlZ2V4ZXMgPSBbXTtcbiAgICAgIHRoaXMuY291bnQgPSAwO1xuXG4gICAgICB0aGlzLmxhc3RJbmRleCA9IDA7XG4gICAgICB0aGlzLnJlZ2V4SW5kZXggPSAwO1xuICAgIH1cblxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBnZXRNYXRjaGVyKGluZGV4KSB7XG4gICAgICBpZiAodGhpcy5tdWx0aVJlZ2V4ZXNbaW5kZXhdKSByZXR1cm4gdGhpcy5tdWx0aVJlZ2V4ZXNbaW5kZXhdO1xuXG4gICAgICBjb25zdCBtYXRjaGVyID0gbmV3IE11bHRpUmVnZXgoKTtcbiAgICAgIHRoaXMucnVsZXMuc2xpY2UoaW5kZXgpLmZvckVhY2goKFtyZSwgb3B0c10pID0+IG1hdGNoZXIuYWRkUnVsZShyZSwgb3B0cykpO1xuICAgICAgbWF0Y2hlci5jb21waWxlKCk7XG4gICAgICB0aGlzLm11bHRpUmVnZXhlc1tpbmRleF0gPSBtYXRjaGVyO1xuICAgICAgcmV0dXJuIG1hdGNoZXI7XG4gICAgfVxuXG4gICAgcmVzdW1pbmdTY2FuQXRTYW1lUG9zaXRpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZWdleEluZGV4ICE9PSAwO1xuICAgIH1cblxuICAgIGNvbnNpZGVyQWxsKCkge1xuICAgICAgdGhpcy5yZWdleEluZGV4ID0gMDtcbiAgICB9XG5cbiAgICAvLyBAdHMtaWdub3JlXG4gICAgYWRkUnVsZShyZSwgb3B0cykge1xuICAgICAgdGhpcy5ydWxlcy5wdXNoKFtyZSwgb3B0c10pO1xuICAgICAgaWYgKG9wdHMudHlwZSA9PT0gXCJiZWdpblwiKSB0aGlzLmNvdW50Kys7XG4gICAgfVxuXG4gICAgLyoqIEBwYXJhbSB7c3RyaW5nfSBzICovXG4gICAgZXhlYyhzKSB7XG4gICAgICBjb25zdCBtID0gdGhpcy5nZXRNYXRjaGVyKHRoaXMucmVnZXhJbmRleCk7XG4gICAgICBtLmxhc3RJbmRleCA9IHRoaXMubGFzdEluZGV4O1xuICAgICAgbGV0IHJlc3VsdCA9IG0uZXhlYyhzKTtcblxuICAgICAgLy8gVGhlIGZvbGxvd2luZyBpcyBiZWNhdXNlIHdlIGhhdmUgbm8gZWFzeSB3YXkgdG8gc2F5IFwicmVzdW1lIHNjYW5uaW5nIGF0IHRoZVxuICAgICAgLy8gZXhpc3RpbmcgcG9zaXRpb24gYnV0IGFsc28gc2tpcCB0aGUgY3VycmVudCBydWxlIE9OTFlcIi4gV2hhdCBoYXBwZW5zIGlzXG4gICAgICAvLyBhbGwgcHJpb3IgcnVsZXMgYXJlIGFsc28gc2tpcHBlZCB3aGljaCBjYW4gcmVzdWx0IGluIG1hdGNoaW5nIHRoZSB3cm9uZ1xuICAgICAgLy8gdGhpbmcuIEV4YW1wbGUgb2YgbWF0Y2hpbmcgXCJib29nZXJcIjpcblxuICAgICAgLy8gb3VyIG1hdGNoZXIgaXMgW3N0cmluZywgXCJib29nZXJcIiwgbnVtYmVyXVxuICAgICAgLy9cbiAgICAgIC8vIC4uLi5ib29nZXIuLi4uXG5cbiAgICAgIC8vIGlmIFwiYm9vZ2VyXCIgaXMgaWdub3JlZCB0aGVuIHdlJ2QgcmVhbGx5IG5lZWQgYSByZWdleCB0byBzY2FuIGZyb20gdGhlXG4gICAgICAvLyBTQU1FIHBvc2l0aW9uIGZvciBvbmx5OiBbc3RyaW5nLCBudW1iZXJdIGJ1dCBpZ25vcmluZyBcImJvb2dlclwiIChpZiBpdFxuICAgICAgLy8gd2FzIHRoZSBmaXJzdCBtYXRjaCksIGEgc2ltcGxlIHJlc3VtZSB3b3VsZCBzY2FuIGFoZWFkIHdobyBrbm93cyBob3dcbiAgICAgIC8vIGZhciBsb29raW5nIG9ubHkgZm9yIFwibnVtYmVyXCIsIGlnbm9yaW5nIHBvdGVudGlhbCBzdHJpbmcgbWF0Y2hlcyAob3JcbiAgICAgIC8vIGZ1dHVyZSBcImJvb2dlclwiIG1hdGNoZXMgdGhhdCBtaWdodCBiZSB2YWxpZC4pXG5cbiAgICAgIC8vIFNvIHdoYXQgd2UgZG86IFdlIGV4ZWN1dGUgdHdvIG1hdGNoZXJzLCBvbmUgcmVzdW1pbmcgYXQgdGhlIHNhbWVcbiAgICAgIC8vIHBvc2l0aW9uLCBidXQgdGhlIHNlY29uZCBmdWxsIG1hdGNoZXIgc3RhcnRpbmcgYXQgdGhlIHBvc2l0aW9uIGFmdGVyOlxuXG4gICAgICAvLyAgICAgLy0tLSByZXN1bWUgZmlyc3QgcmVnZXggbWF0Y2ggaGVyZSAoZm9yIFtudW1iZXJdKVxuICAgICAgLy8gICAgIHwvLS0tLSBmdWxsIG1hdGNoIGhlcmUgZm9yIFtzdHJpbmcsIFwiYm9vZ2VyXCIsIG51bWJlcl1cbiAgICAgIC8vICAgICB2dlxuICAgICAgLy8gLi4uLmJvb2dlci4uLi5cblxuICAgICAgLy8gV2hpY2ggZXZlciByZXN1bHRzIGluIGEgbWF0Y2ggZmlyc3QgaXMgdGhlbiB1c2VkLiBTbyB0aGlzIDMtNCBzdGVwXG4gICAgICAvLyBwcm9jZXNzIGVzc2VudGlhbGx5IGFsbG93cyB1cyB0byBzYXkgXCJtYXRjaCBhdCB0aGlzIHBvc2l0aW9uLCBleGNsdWRpbmdcbiAgICAgIC8vIGEgcHJpb3IgcnVsZSB0aGF0IHdhcyBpZ25vcmVkXCIuXG4gICAgICAvL1xuICAgICAgLy8gMS4gTWF0Y2ggXCJib29nZXJcIiBmaXJzdCwgaWdub3JlLiBBbHNvIHByb3ZlcyB0aGF0IFtzdHJpbmddIGRvZXMgbm9uIG1hdGNoLlxuICAgICAgLy8gMi4gUmVzdW1lIG1hdGNoaW5nIGZvciBbbnVtYmVyXVxuICAgICAgLy8gMy4gTWF0Y2ggYXQgaW5kZXggKyAxIGZvciBbc3RyaW5nLCBcImJvb2dlclwiLCBudW1iZXJdXG4gICAgICAvLyA0LiBJZiAjMiBhbmQgIzMgcmVzdWx0IGluIG1hdGNoZXMsIHdoaWNoIGNhbWUgZmlyc3Q/XG4gICAgICBpZiAodGhpcy5yZXN1bWluZ1NjYW5BdFNhbWVQb3NpdGlvbigpKSB7XG4gICAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0LmluZGV4ID09PSB0aGlzLmxhc3RJbmRleCkgOyBlbHNlIHsgLy8gdXNlIHRoZSBzZWNvbmQgbWF0Y2hlciByZXN1bHRcbiAgICAgICAgICBjb25zdCBtMiA9IHRoaXMuZ2V0TWF0Y2hlcigwKTtcbiAgICAgICAgICBtMi5sYXN0SW5kZXggPSB0aGlzLmxhc3RJbmRleCArIDE7XG4gICAgICAgICAgcmVzdWx0ID0gbTIuZXhlYyhzKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIHRoaXMucmVnZXhJbmRleCArPSByZXN1bHQucG9zaXRpb24gKyAxO1xuICAgICAgICBpZiAodGhpcy5yZWdleEluZGV4ID09PSB0aGlzLmNvdW50KSB7XG4gICAgICAgICAgLy8gd3JhcC1hcm91bmQgdG8gY29uc2lkZXJpbmcgYWxsIG1hdGNoZXMgYWdhaW5cbiAgICAgICAgICB0aGlzLmNvbnNpZGVyQWxsKCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogR2l2ZW4gYSBtb2RlLCBidWlsZHMgYSBodWdlIFJlc3VtYWJsZU11bHRpUmVnZXggdGhhdCBjYW4gYmUgdXNlZCB0byB3YWxrXG4gICAqIHRoZSBjb250ZW50IGFuZCBmaW5kIG1hdGNoZXMuXG4gICAqXG4gICAqIEBwYXJhbSB7Q29tcGlsZWRNb2RlfSBtb2RlXG4gICAqIEByZXR1cm5zIHtSZXN1bWFibGVNdWx0aVJlZ2V4fVxuICAgKi9cbiAgZnVuY3Rpb24gYnVpbGRNb2RlUmVnZXgobW9kZSkge1xuICAgIGNvbnN0IG1tID0gbmV3IFJlc3VtYWJsZU11bHRpUmVnZXgoKTtcblxuICAgIG1vZGUuY29udGFpbnMuZm9yRWFjaCh0ZXJtID0+IG1tLmFkZFJ1bGUodGVybS5iZWdpbiwgeyBydWxlOiB0ZXJtLCB0eXBlOiBcImJlZ2luXCIgfSkpO1xuXG4gICAgaWYgKG1vZGUudGVybWluYXRvckVuZCkge1xuICAgICAgbW0uYWRkUnVsZShtb2RlLnRlcm1pbmF0b3JFbmQsIHsgdHlwZTogXCJlbmRcIiB9KTtcbiAgICB9XG4gICAgaWYgKG1vZGUuaWxsZWdhbCkge1xuICAgICAgbW0uYWRkUnVsZShtb2RlLmlsbGVnYWwsIHsgdHlwZTogXCJpbGxlZ2FsXCIgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1tO1xuICB9XG5cbiAgLyoqIHNraXAgdnMgYWJvcnQgdnMgaWdub3JlXG4gICAqXG4gICAqIEBza2lwICAgLSBUaGUgbW9kZSBpcyBzdGlsbCBlbnRlcmVkIGFuZCBleGl0ZWQgbm9ybWFsbHkgKGFuZCBjb250YWlucyBydWxlcyBhcHBseSksXG4gICAqICAgICAgICAgICBidXQgYWxsIGNvbnRlbnQgaXMgaGVsZCBhbmQgYWRkZWQgdG8gdGhlIHBhcmVudCBidWZmZXIgcmF0aGVyIHRoYW4gYmVpbmdcbiAgICogICAgICAgICAgIG91dHB1dCB3aGVuIHRoZSBtb2RlIGVuZHMuICBNb3N0bHkgdXNlZCB3aXRoIGBzdWJsYW5ndWFnZWAgdG8gYnVpbGQgdXBcbiAgICogICAgICAgICAgIGEgc2luZ2xlIGxhcmdlIGJ1ZmZlciB0aGFuIGNhbiBiZSBwYXJzZWQgYnkgc3VibGFuZ3VhZ2UuXG4gICAqXG4gICAqICAgICAgICAgICAgIC0gVGhlIG1vZGUgYmVnaW4gYW5kcyBlbmRzIG5vcm1hbGx5LlxuICAgKiAgICAgICAgICAgICAtIENvbnRlbnQgbWF0Y2hlZCBpcyBhZGRlZCB0byB0aGUgcGFyZW50IG1vZGUgYnVmZmVyLlxuICAgKiAgICAgICAgICAgICAtIFRoZSBwYXJzZXIgY3Vyc29yIGlzIG1vdmVkIGZvcndhcmQgbm9ybWFsbHkuXG4gICAqXG4gICAqIEBhYm9ydCAgLSBBIGhhY2sgcGxhY2Vob2xkZXIgdW50aWwgd2UgaGF2ZSBpZ25vcmUuICBBYm9ydHMgdGhlIG1vZGUgKGFzIGlmIGl0XG4gICAqICAgICAgICAgICBuZXZlciBtYXRjaGVkKSBidXQgRE9FUyBOT1QgY29udGludWUgdG8gbWF0Y2ggc3Vic2VxdWVudCBgY29udGFpbnNgXG4gICAqICAgICAgICAgICBtb2Rlcy4gIEFib3J0IGlzIGJhZC9zdWJvcHRpbWFsIGJlY2F1c2UgaXQgY2FuIHJlc3VsdCBpbiBtb2Rlc1xuICAgKiAgICAgICAgICAgZmFydGhlciBkb3duIG5vdCBnZXR0aW5nIGFwcGxpZWQgYmVjYXVzZSBhbiBlYXJsaWVyIHJ1bGUgZWF0cyB0aGVcbiAgICogICAgICAgICAgIGNvbnRlbnQgYnV0IHRoZW4gYWJvcnRzLlxuICAgKlxuICAgKiAgICAgICAgICAgICAtIFRoZSBtb2RlIGRvZXMgbm90IGJlZ2luLlxuICAgKiAgICAgICAgICAgICAtIENvbnRlbnQgbWF0Y2hlZCBieSBgYmVnaW5gIGlzIGFkZGVkIHRvIHRoZSBtb2RlIGJ1ZmZlci5cbiAgICogICAgICAgICAgICAgLSBUaGUgcGFyc2VyIGN1cnNvciBpcyBtb3ZlZCBmb3J3YXJkIGFjY29yZGluZ2x5LlxuICAgKlxuICAgKiBAaWdub3JlIC0gSWdub3JlcyB0aGUgbW9kZSAoYXMgaWYgaXQgbmV2ZXIgbWF0Y2hlZCkgYW5kIGNvbnRpbnVlcyB0byBtYXRjaCBhbnlcbiAgICogICAgICAgICAgIHN1YnNlcXVlbnQgYGNvbnRhaW5zYCBtb2Rlcy4gIElnbm9yZSBpc24ndCB0ZWNobmljYWxseSBwb3NzaWJsZSB3aXRoXG4gICAqICAgICAgICAgICB0aGUgY3VycmVudCBwYXJzZXIgaW1wbGVtZW50YXRpb24uXG4gICAqXG4gICAqICAgICAgICAgICAgIC0gVGhlIG1vZGUgZG9lcyBub3QgYmVnaW4uXG4gICAqICAgICAgICAgICAgIC0gQ29udGVudCBtYXRjaGVkIGJ5IGBiZWdpbmAgaXMgaWdub3JlZC5cbiAgICogICAgICAgICAgICAgLSBUaGUgcGFyc2VyIGN1cnNvciBpcyBub3QgbW92ZWQgZm9yd2FyZC5cbiAgICovXG5cbiAgLyoqXG4gICAqIENvbXBpbGVzIGFuIGluZGl2aWR1YWwgbW9kZVxuICAgKlxuICAgKiBUaGlzIGNhbiByYWlzZSBhbiBlcnJvciBpZiB0aGUgbW9kZSBjb250YWlucyBjZXJ0YWluIGRldGVjdGFibGUga25vd24gbG9naWNcbiAgICogaXNzdWVzLlxuICAgKiBAcGFyYW0ge01vZGV9IG1vZGVcbiAgICogQHBhcmFtIHtDb21waWxlZE1vZGUgfCBudWxsfSBbcGFyZW50XVxuICAgKiBAcmV0dXJucyB7Q29tcGlsZWRNb2RlIHwgbmV2ZXJ9XG4gICAqL1xuICBmdW5jdGlvbiBjb21waWxlTW9kZShtb2RlLCBwYXJlbnQpIHtcbiAgICBjb25zdCBjbW9kZSA9IC8qKiBAdHlwZSBDb21waWxlZE1vZGUgKi8gKG1vZGUpO1xuICAgIGlmIChtb2RlLmlzQ29tcGlsZWQpIHJldHVybiBjbW9kZTtcblxuICAgIFtcbiAgICAgIC8vIGRvIHRoaXMgZWFybHkgc28gY29tcGlsZXIgZXh0ZW5zaW9ucyBnZW5lcmFsbHkgZG9uJ3QgaGF2ZSB0byB3b3JyeSBhYm91dFxuICAgICAgLy8gdGhlIGRpc3RpbmN0aW9uIGJldHdlZW4gbWF0Y2gvYmVnaW5cbiAgICAgIGNvbXBpbGVNYXRjaFxuICAgIF0uZm9yRWFjaChleHQgPT4gZXh0KG1vZGUsIHBhcmVudCkpO1xuXG4gICAgbGFuZ3VhZ2UuY29tcGlsZXJFeHRlbnNpb25zLmZvckVhY2goZXh0ID0+IGV4dChtb2RlLCBwYXJlbnQpKTtcblxuICAgIC8vIF9fYmVmb3JlQmVnaW4gaXMgY29uc2lkZXJlZCBwcml2YXRlIEFQSSwgaW50ZXJuYWwgdXNlIG9ubHlcbiAgICBtb2RlLl9fYmVmb3JlQmVnaW4gPSBudWxsO1xuXG4gICAgW1xuICAgICAgYmVnaW5LZXl3b3JkcyxcbiAgICAgIC8vIGRvIHRoaXMgbGF0ZXIgc28gY29tcGlsZXIgZXh0ZW5zaW9ucyB0aGF0IGNvbWUgZWFybGllciBoYXZlIGFjY2VzcyB0byB0aGVcbiAgICAgIC8vIHJhdyBhcnJheSBpZiB0aGV5IHdhbnRlZCB0byBwZXJoYXBzIG1hbmlwdWxhdGUgaXQsIGV0Yy5cbiAgICAgIGNvbXBpbGVJbGxlZ2FsLFxuICAgICAgLy8gZGVmYXVsdCB0byAxIHJlbGV2YW5jZSBpZiBub3Qgc3BlY2lmaWVkXG4gICAgICBjb21waWxlUmVsZXZhbmNlXG4gICAgXS5mb3JFYWNoKGV4dCA9PiBleHQobW9kZSwgcGFyZW50KSk7XG5cbiAgICBtb2RlLmlzQ29tcGlsZWQgPSB0cnVlO1xuXG4gICAgbGV0IGtleXdvcmRQYXR0ZXJuID0gbnVsbDtcbiAgICBpZiAodHlwZW9mIG1vZGUua2V5d29yZHMgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgIGtleXdvcmRQYXR0ZXJuID0gbW9kZS5rZXl3b3Jkcy4kcGF0dGVybjtcbiAgICAgIGRlbGV0ZSBtb2RlLmtleXdvcmRzLiRwYXR0ZXJuO1xuICAgIH1cblxuICAgIGlmIChtb2RlLmtleXdvcmRzKSB7XG4gICAgICBtb2RlLmtleXdvcmRzID0gY29tcGlsZUtleXdvcmRzKG1vZGUua2V5d29yZHMsIGxhbmd1YWdlLmNhc2VfaW5zZW5zaXRpdmUpO1xuICAgIH1cblxuICAgIC8vIGJvdGggYXJlIG5vdCBhbGxvd2VkXG4gICAgaWYgKG1vZGUubGV4ZW1lcyAmJiBrZXl3b3JkUGF0dGVybikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRVJSOiBQcmVmZXIgYGtleXdvcmRzLiRwYXR0ZXJuYCB0byBgbW9kZS5sZXhlbWVzYCwgQk9USCBhcmUgbm90IGFsbG93ZWQuIChzZWUgbW9kZSByZWZlcmVuY2UpIFwiKTtcbiAgICB9XG5cbiAgICAvLyBgbW9kZS5sZXhlbWVzYCB3YXMgdGhlIG9sZCBzdGFuZGFyZCBiZWZvcmUgd2UgYWRkZWQgYW5kIG5vdyByZWNvbW1lbmRcbiAgICAvLyB1c2luZyBga2V5d29yZHMuJHBhdHRlcm5gIHRvIHBhc3MgdGhlIGtleXdvcmQgcGF0dGVyblxuICAgIGtleXdvcmRQYXR0ZXJuID0ga2V5d29yZFBhdHRlcm4gfHwgbW9kZS5sZXhlbWVzIHx8IC9cXHcrLztcbiAgICBjbW9kZS5rZXl3b3JkUGF0dGVyblJlID0gbGFuZ1JlKGtleXdvcmRQYXR0ZXJuLCB0cnVlKTtcblxuICAgIGlmIChwYXJlbnQpIHtcbiAgICAgIGlmICghbW9kZS5iZWdpbikgbW9kZS5iZWdpbiA9IC9cXEJ8XFxiLztcbiAgICAgIGNtb2RlLmJlZ2luUmUgPSBsYW5nUmUobW9kZS5iZWdpbik7XG4gICAgICBpZiAobW9kZS5lbmRTYW1lQXNCZWdpbikgbW9kZS5lbmQgPSBtb2RlLmJlZ2luO1xuICAgICAgaWYgKCFtb2RlLmVuZCAmJiAhbW9kZS5lbmRzV2l0aFBhcmVudCkgbW9kZS5lbmQgPSAvXFxCfFxcYi87XG4gICAgICBpZiAobW9kZS5lbmQpIGNtb2RlLmVuZFJlID0gbGFuZ1JlKG1vZGUuZW5kKTtcbiAgICAgIGNtb2RlLnRlcm1pbmF0b3JFbmQgPSBzb3VyY2UobW9kZS5lbmQpIHx8ICcnO1xuICAgICAgaWYgKG1vZGUuZW5kc1dpdGhQYXJlbnQgJiYgcGFyZW50LnRlcm1pbmF0b3JFbmQpIHtcbiAgICAgICAgY21vZGUudGVybWluYXRvckVuZCArPSAobW9kZS5lbmQgPyAnfCcgOiAnJykgKyBwYXJlbnQudGVybWluYXRvckVuZDtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKG1vZGUuaWxsZWdhbCkgY21vZGUuaWxsZWdhbFJlID0gbGFuZ1JlKC8qKiBAdHlwZSB7UmVnRXhwIHwgc3RyaW5nfSAqLyAobW9kZS5pbGxlZ2FsKSk7XG4gICAgaWYgKCFtb2RlLmNvbnRhaW5zKSBtb2RlLmNvbnRhaW5zID0gW107XG5cbiAgICBtb2RlLmNvbnRhaW5zID0gW10uY29uY2F0KC4uLm1vZGUuY29udGFpbnMubWFwKGZ1bmN0aW9uKGMpIHtcbiAgICAgIHJldHVybiBleHBhbmRPckNsb25lTW9kZShjID09PSAnc2VsZicgPyBtb2RlIDogYyk7XG4gICAgfSkpO1xuICAgIG1vZGUuY29udGFpbnMuZm9yRWFjaChmdW5jdGlvbihjKSB7IGNvbXBpbGVNb2RlKC8qKiBAdHlwZSBNb2RlICovIChjKSwgY21vZGUpOyB9KTtcblxuICAgIGlmIChtb2RlLnN0YXJ0cykge1xuICAgICAgY29tcGlsZU1vZGUobW9kZS5zdGFydHMsIHBhcmVudCk7XG4gICAgfVxuXG4gICAgY21vZGUubWF0Y2hlciA9IGJ1aWxkTW9kZVJlZ2V4KGNtb2RlKTtcbiAgICByZXR1cm4gY21vZGU7XG4gIH1cblxuICBpZiAoIWxhbmd1YWdlLmNvbXBpbGVyRXh0ZW5zaW9ucykgbGFuZ3VhZ2UuY29tcGlsZXJFeHRlbnNpb25zID0gW107XG5cbiAgLy8gc2VsZiBpcyBub3QgdmFsaWQgYXQgdGhlIHRvcC1sZXZlbFxuICBpZiAobGFuZ3VhZ2UuY29udGFpbnMgJiYgbGFuZ3VhZ2UuY29udGFpbnMuaW5jbHVkZXMoJ3NlbGYnKSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkVSUjogY29udGFpbnMgYHNlbGZgIGlzIG5vdCBzdXBwb3J0ZWQgYXQgdGhlIHRvcC1sZXZlbCBvZiBhIGxhbmd1YWdlLiAgU2VlIGRvY3VtZW50YXRpb24uXCIpO1xuICB9XG5cbiAgLy8gd2UgbmVlZCBhIG51bGwgb2JqZWN0LCB3aGljaCBpbmhlcml0IHdpbGwgZ3VhcmFudGVlXG4gIGxhbmd1YWdlLmNsYXNzTmFtZUFsaWFzZXMgPSBpbmhlcml0KGxhbmd1YWdlLmNsYXNzTmFtZUFsaWFzZXMgfHwge30pO1xuXG4gIHJldHVybiBjb21waWxlTW9kZSgvKiogQHR5cGUgTW9kZSAqLyAobGFuZ3VhZ2UpKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmVzIGlmIGEgbW9kZSBoYXMgYSBkZXBlbmRlbmN5IG9uIGl0J3MgcGFyZW50IG9yIG5vdFxuICpcbiAqIElmIGEgbW9kZSBkb2VzIGhhdmUgYSBwYXJlbnQgZGVwZW5kZW5jeSB0aGVuIG9mdGVuIHdlIG5lZWQgdG8gY2xvbmUgaXQgaWZcbiAqIGl0J3MgdXNlZCBpbiBtdWx0aXBsZSBwbGFjZXMgc28gdGhhdCBlYWNoIGNvcHkgcG9pbnRzIHRvIHRoZSBjb3JyZWN0IHBhcmVudCxcbiAqIHdoZXJlLWFzIG1vZGVzIHdpdGhvdXQgYSBwYXJlbnQgY2FuIG9mdGVuIHNhZmVseSBiZSByZS11c2VkIGF0IHRoZSBib3R0b20gb2ZcbiAqIGEgbW9kZSBjaGFpbi5cbiAqXG4gKiBAcGFyYW0ge01vZGUgfCBudWxsfSBtb2RlXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gLSBpcyB0aGVyZSBhIGRlcGVuZGVuY3kgb24gdGhlIHBhcmVudD9cbiAqICovXG5mdW5jdGlvbiBkZXBlbmRlbmN5T25QYXJlbnQobW9kZSkge1xuICBpZiAoIW1vZGUpIHJldHVybiBmYWxzZTtcblxuICByZXR1cm4gbW9kZS5lbmRzV2l0aFBhcmVudCB8fCBkZXBlbmRlbmN5T25QYXJlbnQobW9kZS5zdGFydHMpO1xufVxuXG4vKipcbiAqIEV4cGFuZHMgYSBtb2RlIG9yIGNsb25lcyBpdCBpZiBuZWNlc3NhcnlcbiAqXG4gKiBUaGlzIGlzIG5lY2Vzc2FyeSBmb3IgbW9kZXMgd2l0aCBwYXJlbnRhbCBkZXBlbmRlbmNlaXMgKHNlZSBub3RlcyBvblxuICogYGRlcGVuZGVuY3lPblBhcmVudGApIGFuZCBmb3Igbm9kZXMgdGhhdCBoYXZlIGB2YXJpYW50c2AgLSB3aGljaCBtdXN0IHRoZW4gYmVcbiAqIGV4cGxvZGVkIGludG8gdGhlaXIgb3duIGluZGl2aWR1YWwgbW9kZXMgYXQgY29tcGlsZSB0aW1lLlxuICpcbiAqIEBwYXJhbSB7TW9kZX0gbW9kZVxuICogQHJldHVybnMge01vZGUgfCBNb2RlW119XG4gKiAqL1xuZnVuY3Rpb24gZXhwYW5kT3JDbG9uZU1vZGUobW9kZSkge1xuICBpZiAobW9kZS52YXJpYW50cyAmJiAhbW9kZS5jYWNoZWRWYXJpYW50cykge1xuICAgIG1vZGUuY2FjaGVkVmFyaWFudHMgPSBtb2RlLnZhcmlhbnRzLm1hcChmdW5jdGlvbih2YXJpYW50KSB7XG4gICAgICByZXR1cm4gaW5oZXJpdChtb2RlLCB7IHZhcmlhbnRzOiBudWxsIH0sIHZhcmlhbnQpO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gRVhQQU5EXG4gIC8vIGlmIHdlIGhhdmUgdmFyaWFudHMgdGhlbiBlc3NlbnRpYWxseSBcInJlcGxhY2VcIiB0aGUgbW9kZSB3aXRoIHRoZSB2YXJpYW50c1xuICAvLyB0aGlzIGhhcHBlbnMgaW4gY29tcGlsZU1vZGUsIHdoZXJlIHRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkIGZyb21cbiAgaWYgKG1vZGUuY2FjaGVkVmFyaWFudHMpIHtcbiAgICByZXR1cm4gbW9kZS5jYWNoZWRWYXJpYW50cztcbiAgfVxuXG4gIC8vIENMT05FXG4gIC8vIGlmIHdlIGhhdmUgZGVwZW5kZW5jaWVzIG9uIHBhcmVudHMgdGhlbiB3ZSBuZWVkIGEgdW5pcXVlXG4gIC8vIGluc3RhbmNlIG9mIG91cnNlbHZlcywgc28gd2UgY2FuIGJlIHJldXNlZCB3aXRoIG1hbnlcbiAgLy8gZGlmZmVyZW50IHBhcmVudHMgd2l0aG91dCBpc3N1ZVxuICBpZiAoZGVwZW5kZW5jeU9uUGFyZW50KG1vZGUpKSB7XG4gICAgcmV0dXJuIGluaGVyaXQobW9kZSwgeyBzdGFydHM6IG1vZGUuc3RhcnRzID8gaW5oZXJpdChtb2RlLnN0YXJ0cykgOiBudWxsIH0pO1xuICB9XG5cbiAgaWYgKE9iamVjdC5pc0Zyb3plbihtb2RlKSkge1xuICAgIHJldHVybiBpbmhlcml0KG1vZGUpO1xuICB9XG5cbiAgLy8gbm8gc3BlY2lhbCBkZXBlbmRlbmN5IGlzc3VlcywganVzdCByZXR1cm4gb3Vyc2VsdmVzXG4gIHJldHVybiBtb2RlO1xufVxuXG52YXIgdmVyc2lvbiA9IFwiMTAuNy4zXCI7XG5cbi8vIEB0cy1ub2NoZWNrXG5cbmZ1bmN0aW9uIGhhc1ZhbHVlT3JFbXB0eUF0dHJpYnV0ZSh2YWx1ZSkge1xuICByZXR1cm4gQm9vbGVhbih2YWx1ZSB8fCB2YWx1ZSA9PT0gXCJcIik7XG59XG5cbmZ1bmN0aW9uIEJ1aWxkVnVlUGx1Z2luKGhsanMpIHtcbiAgY29uc3QgQ29tcG9uZW50ID0ge1xuICAgIHByb3BzOiBbXCJsYW5ndWFnZVwiLCBcImNvZGVcIiwgXCJhdXRvZGV0ZWN0XCJdLFxuICAgIGRhdGE6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZGV0ZWN0ZWRMYW5ndWFnZTogXCJcIixcbiAgICAgICAgdW5rbm93bkxhbmd1YWdlOiBmYWxzZVxuICAgICAgfTtcbiAgICB9LFxuICAgIGNvbXB1dGVkOiB7XG4gICAgICBjbGFzc05hbWUoKSB7XG4gICAgICAgIGlmICh0aGlzLnVua25vd25MYW5ndWFnZSkgcmV0dXJuIFwiXCI7XG5cbiAgICAgICAgcmV0dXJuIFwiaGxqcyBcIiArIHRoaXMuZGV0ZWN0ZWRMYW5ndWFnZTtcbiAgICAgIH0sXG4gICAgICBoaWdobGlnaHRlZCgpIHtcbiAgICAgICAgLy8gbm8gaWRlYSB3aGF0IGxhbmd1YWdlIHRvIHVzZSwgcmV0dXJuIHJhdyBjb2RlXG4gICAgICAgIGlmICghdGhpcy5hdXRvRGV0ZWN0ICYmICFobGpzLmdldExhbmd1YWdlKHRoaXMubGFuZ3VhZ2UpKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKGBUaGUgbGFuZ3VhZ2UgXCIke3RoaXMubGFuZ3VhZ2V9XCIgeW91IHNwZWNpZmllZCBjb3VsZCBub3QgYmUgZm91bmQuYCk7XG4gICAgICAgICAgdGhpcy51bmtub3duTGFuZ3VhZ2UgPSB0cnVlO1xuICAgICAgICAgIHJldHVybiBlc2NhcGVIVE1MKHRoaXMuY29kZSk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcmVzdWx0ID0ge307XG4gICAgICAgIGlmICh0aGlzLmF1dG9EZXRlY3QpIHtcbiAgICAgICAgICByZXN1bHQgPSBobGpzLmhpZ2hsaWdodEF1dG8odGhpcy5jb2RlKTtcbiAgICAgICAgICB0aGlzLmRldGVjdGVkTGFuZ3VhZ2UgPSByZXN1bHQubGFuZ3VhZ2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzdWx0ID0gaGxqcy5oaWdobGlnaHQodGhpcy5sYW5ndWFnZSwgdGhpcy5jb2RlLCB0aGlzLmlnbm9yZUlsbGVnYWxzKTtcbiAgICAgICAgICB0aGlzLmRldGVjdGVkTGFuZ3VhZ2UgPSB0aGlzLmxhbmd1YWdlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQudmFsdWU7XG4gICAgICB9LFxuICAgICAgYXV0b0RldGVjdCgpIHtcbiAgICAgICAgcmV0dXJuICF0aGlzLmxhbmd1YWdlIHx8IGhhc1ZhbHVlT3JFbXB0eUF0dHJpYnV0ZSh0aGlzLmF1dG9kZXRlY3QpO1xuICAgICAgfSxcbiAgICAgIGlnbm9yZUlsbGVnYWxzKCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9LFxuICAgIC8vIHRoaXMgYXZvaWRzIG5lZWRpbmcgdG8gdXNlIGEgd2hvbGUgVnVlIGNvbXBpbGF0aW9uIHBpcGVsaW5lIGp1c3RcbiAgICAvLyB0byBidWlsZCBIaWdobGlnaHQuanNcbiAgICByZW5kZXIoY3JlYXRlRWxlbWVudCkge1xuICAgICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoXCJwcmVcIiwge30sIFtcbiAgICAgICAgY3JlYXRlRWxlbWVudChcImNvZGVcIiwge1xuICAgICAgICAgIGNsYXNzOiB0aGlzLmNsYXNzTmFtZSxcbiAgICAgICAgICBkb21Qcm9wczogeyBpbm5lckhUTUw6IHRoaXMuaGlnaGxpZ2h0ZWQgfVxuICAgICAgICB9KVxuICAgICAgXSk7XG4gICAgfVxuICAgIC8vIHRlbXBsYXRlOiBgPHByZT48Y29kZSA6Y2xhc3M9XCJjbGFzc05hbWVcIiB2LWh0bWw9XCJoaWdobGlnaHRlZFwiPjwvY29kZT48L3ByZT5gXG4gIH07XG5cbiAgY29uc3QgVnVlUGx1Z2luID0ge1xuICAgIGluc3RhbGwoVnVlKSB7XG4gICAgICBWdWUuY29tcG9uZW50KCdoaWdobGlnaHRqcycsIENvbXBvbmVudCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB7IENvbXBvbmVudCwgVnVlUGx1Z2luIH07XG59XG5cbi8qIHBsdWdpbiBpdHNlbGYgKi9cblxuLyoqIEB0eXBlIHtITEpTUGx1Z2lufSAqL1xuY29uc3QgbWVyZ2VIVE1MUGx1Z2luID0ge1xuICBcImFmdGVyOmhpZ2hsaWdodEVsZW1lbnRcIjogKHsgZWwsIHJlc3VsdCwgdGV4dCB9KSA9PiB7XG4gICAgY29uc3Qgb3JpZ2luYWxTdHJlYW0gPSBub2RlU3RyZWFtKGVsKTtcbiAgICBpZiAoIW9yaWdpbmFsU3RyZWFtLmxlbmd0aCkgcmV0dXJuO1xuXG4gICAgY29uc3QgcmVzdWx0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHJlc3VsdE5vZGUuaW5uZXJIVE1MID0gcmVzdWx0LnZhbHVlO1xuICAgIHJlc3VsdC52YWx1ZSA9IG1lcmdlU3RyZWFtcyhvcmlnaW5hbFN0cmVhbSwgbm9kZVN0cmVhbShyZXN1bHROb2RlKSwgdGV4dCk7XG4gIH1cbn07XG5cbi8qIFN0cmVhbSBtZXJnaW5nIHN1cHBvcnQgZnVuY3Rpb25zICovXG5cbi8qKlxuICogQHR5cGVkZWYgRXZlbnRcbiAqIEBwcm9wZXJ0eSB7J3N0YXJ0J3wnc3RvcCd9IGV2ZW50XG4gKiBAcHJvcGVydHkge251bWJlcn0gb2Zmc2V0XG4gKiBAcHJvcGVydHkge05vZGV9IG5vZGVcbiAqL1xuXG4vKipcbiAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICovXG5mdW5jdGlvbiB0YWcobm9kZSkge1xuICByZXR1cm4gbm9kZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICovXG5mdW5jdGlvbiBub2RlU3RyZWFtKG5vZGUpIHtcbiAgLyoqIEB0eXBlIEV2ZW50W10gKi9cbiAgY29uc3QgcmVzdWx0ID0gW107XG4gIChmdW5jdGlvbiBfbm9kZVN0cmVhbShub2RlLCBvZmZzZXQpIHtcbiAgICBmb3IgKGxldCBjaGlsZCA9IG5vZGUuZmlyc3RDaGlsZDsgY2hpbGQ7IGNoaWxkID0gY2hpbGQubmV4dFNpYmxpbmcpIHtcbiAgICAgIGlmIChjaGlsZC5ub2RlVHlwZSA9PT0gMykge1xuICAgICAgICBvZmZzZXQgKz0gY2hpbGQubm9kZVZhbHVlLmxlbmd0aDtcbiAgICAgIH0gZWxzZSBpZiAoY2hpbGQubm9kZVR5cGUgPT09IDEpIHtcbiAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgIGV2ZW50OiAnc3RhcnQnLFxuICAgICAgICAgIG9mZnNldDogb2Zmc2V0LFxuICAgICAgICAgIG5vZGU6IGNoaWxkXG4gICAgICAgIH0pO1xuICAgICAgICBvZmZzZXQgPSBfbm9kZVN0cmVhbShjaGlsZCwgb2Zmc2V0KTtcbiAgICAgICAgLy8gUHJldmVudCB2b2lkIGVsZW1lbnRzIGZyb20gaGF2aW5nIGFuIGVuZCB0YWcgdGhhdCB3b3VsZCBhY3R1YWxseVxuICAgICAgICAvLyBkb3VibGUgdGhlbSBpbiB0aGUgb3V0cHV0LiBUaGVyZSBhcmUgbW9yZSB2b2lkIGVsZW1lbnRzIGluIEhUTUxcbiAgICAgICAgLy8gYnV0IHdlIGxpc3Qgb25seSB0aG9zZSByZWFsaXN0aWNhbGx5IGV4cGVjdGVkIGluIGNvZGUgZGlzcGxheS5cbiAgICAgICAgaWYgKCF0YWcoY2hpbGQpLm1hdGNoKC9icnxocnxpbWd8aW5wdXQvKSkge1xuICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgIGV2ZW50OiAnc3RvcCcsXG4gICAgICAgICAgICBvZmZzZXQ6IG9mZnNldCxcbiAgICAgICAgICAgIG5vZGU6IGNoaWxkXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG9mZnNldDtcbiAgfSkobm9kZSwgMCk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQHBhcmFtIHthbnl9IG9yaWdpbmFsIC0gdGhlIG9yaWdpbmFsIHN0cmVhbVxuICogQHBhcmFtIHthbnl9IGhpZ2hsaWdodGVkIC0gc3RyZWFtIG9mIHRoZSBoaWdobGlnaHRlZCBzb3VyY2VcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSAtIHRoZSBvcmlnaW5hbCBzb3VyY2UgaXRzZWxmXG4gKi9cbmZ1bmN0aW9uIG1lcmdlU3RyZWFtcyhvcmlnaW5hbCwgaGlnaGxpZ2h0ZWQsIHZhbHVlKSB7XG4gIGxldCBwcm9jZXNzZWQgPSAwO1xuICBsZXQgcmVzdWx0ID0gJyc7XG4gIGNvbnN0IG5vZGVTdGFjayA9IFtdO1xuXG4gIGZ1bmN0aW9uIHNlbGVjdFN0cmVhbSgpIHtcbiAgICBpZiAoIW9yaWdpbmFsLmxlbmd0aCB8fCAhaGlnaGxpZ2h0ZWQubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gb3JpZ2luYWwubGVuZ3RoID8gb3JpZ2luYWwgOiBoaWdobGlnaHRlZDtcbiAgICB9XG4gICAgaWYgKG9yaWdpbmFsWzBdLm9mZnNldCAhPT0gaGlnaGxpZ2h0ZWRbMF0ub2Zmc2V0KSB7XG4gICAgICByZXR1cm4gKG9yaWdpbmFsWzBdLm9mZnNldCA8IGhpZ2hsaWdodGVkWzBdLm9mZnNldCkgPyBvcmlnaW5hbCA6IGhpZ2hsaWdodGVkO1xuICAgIH1cblxuICAgIC8qXG4gICAgVG8gYXZvaWQgc3RhcnRpbmcgdGhlIHN0cmVhbSBqdXN0IGJlZm9yZSBpdCBzaG91bGQgc3RvcCB0aGUgb3JkZXIgaXNcbiAgICBlbnN1cmVkIHRoYXQgb3JpZ2luYWwgYWx3YXlzIHN0YXJ0cyBmaXJzdCBhbmQgY2xvc2VzIGxhc3Q6XG5cbiAgICBpZiAoZXZlbnQxID09ICdzdGFydCcgJiYgZXZlbnQyID09ICdzdGFydCcpXG4gICAgICByZXR1cm4gb3JpZ2luYWw7XG4gICAgaWYgKGV2ZW50MSA9PSAnc3RhcnQnICYmIGV2ZW50MiA9PSAnc3RvcCcpXG4gICAgICByZXR1cm4gaGlnaGxpZ2h0ZWQ7XG4gICAgaWYgKGV2ZW50MSA9PSAnc3RvcCcgJiYgZXZlbnQyID09ICdzdGFydCcpXG4gICAgICByZXR1cm4gb3JpZ2luYWw7XG4gICAgaWYgKGV2ZW50MSA9PSAnc3RvcCcgJiYgZXZlbnQyID09ICdzdG9wJylcbiAgICAgIHJldHVybiBoaWdobGlnaHRlZDtcblxuICAgIC4uLiB3aGljaCBpcyBjb2xsYXBzZWQgdG86XG4gICAgKi9cbiAgICByZXR1cm4gaGlnaGxpZ2h0ZWRbMF0uZXZlbnQgPT09ICdzdGFydCcgPyBvcmlnaW5hbCA6IGhpZ2hsaWdodGVkO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKi9cbiAgZnVuY3Rpb24gb3Blbihub2RlKSB7XG4gICAgLyoqIEBwYXJhbSB7QXR0cn0gYXR0ciAqL1xuICAgIGZ1bmN0aW9uIGF0dHJpYnV0ZVN0cmluZyhhdHRyKSB7XG4gICAgICByZXR1cm4gJyAnICsgYXR0ci5ub2RlTmFtZSArICc9XCInICsgZXNjYXBlSFRNTChhdHRyLnZhbHVlKSArICdcIic7XG4gICAgfVxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICByZXN1bHQgKz0gJzwnICsgdGFnKG5vZGUpICsgW10ubWFwLmNhbGwobm9kZS5hdHRyaWJ1dGVzLCBhdHRyaWJ1dGVTdHJpbmcpLmpvaW4oJycpICsgJz4nO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICAgKi9cbiAgZnVuY3Rpb24gY2xvc2Uobm9kZSkge1xuICAgIHJlc3VsdCArPSAnPC8nICsgdGFnKG5vZGUpICsgJz4nO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XG4gICAqL1xuICBmdW5jdGlvbiByZW5kZXIoZXZlbnQpIHtcbiAgICAoZXZlbnQuZXZlbnQgPT09ICdzdGFydCcgPyBvcGVuIDogY2xvc2UpKGV2ZW50Lm5vZGUpO1xuICB9XG5cbiAgd2hpbGUgKG9yaWdpbmFsLmxlbmd0aCB8fCBoaWdobGlnaHRlZC5sZW5ndGgpIHtcbiAgICBsZXQgc3RyZWFtID0gc2VsZWN0U3RyZWFtKCk7XG4gICAgcmVzdWx0ICs9IGVzY2FwZUhUTUwodmFsdWUuc3Vic3RyaW5nKHByb2Nlc3NlZCwgc3RyZWFtWzBdLm9mZnNldCkpO1xuICAgIHByb2Nlc3NlZCA9IHN0cmVhbVswXS5vZmZzZXQ7XG4gICAgaWYgKHN0cmVhbSA9PT0gb3JpZ2luYWwpIHtcbiAgICAgIC8qXG4gICAgICBPbiBhbnkgb3BlbmluZyBvciBjbG9zaW5nIHRhZyBvZiB0aGUgb3JpZ2luYWwgbWFya3VwIHdlIGZpcnN0IGNsb3NlXG4gICAgICB0aGUgZW50aXJlIGhpZ2hsaWdodGVkIG5vZGUgc3RhY2ssIHRoZW4gcmVuZGVyIHRoZSBvcmlnaW5hbCB0YWcgYWxvbmdcbiAgICAgIHdpdGggYWxsIHRoZSBmb2xsb3dpbmcgb3JpZ2luYWwgdGFncyBhdCB0aGUgc2FtZSBvZmZzZXQgYW5kIHRoZW5cbiAgICAgIHJlb3BlbiBhbGwgdGhlIHRhZ3Mgb24gdGhlIGhpZ2hsaWdodGVkIHN0YWNrLlxuICAgICAgKi9cbiAgICAgIG5vZGVTdGFjay5yZXZlcnNlKCkuZm9yRWFjaChjbG9zZSk7XG4gICAgICBkbyB7XG4gICAgICAgIHJlbmRlcihzdHJlYW0uc3BsaWNlKDAsIDEpWzBdKTtcbiAgICAgICAgc3RyZWFtID0gc2VsZWN0U3RyZWFtKCk7XG4gICAgICB9IHdoaWxlIChzdHJlYW0gPT09IG9yaWdpbmFsICYmIHN0cmVhbS5sZW5ndGggJiYgc3RyZWFtWzBdLm9mZnNldCA9PT0gcHJvY2Vzc2VkKTtcbiAgICAgIG5vZGVTdGFjay5yZXZlcnNlKCkuZm9yRWFjaChvcGVuKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHN0cmVhbVswXS5ldmVudCA9PT0gJ3N0YXJ0Jykge1xuICAgICAgICBub2RlU3RhY2sucHVzaChzdHJlYW1bMF0ubm9kZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBub2RlU3RhY2sucG9wKCk7XG4gICAgICB9XG4gICAgICByZW5kZXIoc3RyZWFtLnNwbGljZSgwLCAxKVswXSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQgKyBlc2NhcGVIVE1MKHZhbHVlLnN1YnN0cihwcm9jZXNzZWQpKTtcbn1cblxuLypcblxuRm9yIHRoZSByZWFzb25pbmcgYmVoaW5kIHRoaXMgcGxlYXNlIHNlZTpcbmh0dHBzOi8vZ2l0aHViLmNvbS9oaWdobGlnaHRqcy9oaWdobGlnaHQuanMvaXNzdWVzLzI4ODAjaXNzdWVjb21tZW50LTc0NzI3NTQxOVxuXG4qL1xuXG4vKipcbiAqIEB0eXBlIHtSZWNvcmQ8c3RyaW5nLCBib29sZWFuPn1cbiAqL1xuY29uc3Qgc2VlbkRlcHJlY2F0aW9ucyA9IHt9O1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlXG4gKi9cbmNvbnN0IGVycm9yID0gKG1lc3NhZ2UpID0+IHtcbiAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbn07XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2VcbiAqIEBwYXJhbSB7YW55fSBhcmdzXG4gKi9cbmNvbnN0IHdhcm4gPSAobWVzc2FnZSwgLi4uYXJncykgPT4ge1xuICBjb25zb2xlLmxvZyhgV0FSTjogJHttZXNzYWdlfWAsIC4uLmFyZ3MpO1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmVyc2lvblxuICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2VcbiAqL1xuY29uc3QgZGVwcmVjYXRlZCA9ICh2ZXJzaW9uLCBtZXNzYWdlKSA9PiB7XG4gIGlmIChzZWVuRGVwcmVjYXRpb25zW2Ake3ZlcnNpb259LyR7bWVzc2FnZX1gXSkgcmV0dXJuO1xuXG4gIGNvbnNvbGUubG9nKGBEZXByZWNhdGVkIGFzIG9mICR7dmVyc2lvbn0uICR7bWVzc2FnZX1gKTtcbiAgc2VlbkRlcHJlY2F0aW9uc1tgJHt2ZXJzaW9ufS8ke21lc3NhZ2V9YF0gPSB0cnVlO1xufTtcblxuLypcblN5bnRheCBoaWdobGlnaHRpbmcgd2l0aCBsYW5ndWFnZSBhdXRvZGV0ZWN0aW9uLlxuaHR0cHM6Ly9oaWdobGlnaHRqcy5vcmcvXG4qL1xuXG5jb25zdCBlc2NhcGUkMSA9IGVzY2FwZUhUTUw7XG5jb25zdCBpbmhlcml0JDEgPSBpbmhlcml0O1xuY29uc3QgTk9fTUFUQ0ggPSBTeW1ib2woXCJub21hdGNoXCIpO1xuXG4vKipcbiAqIEBwYXJhbSB7YW55fSBobGpzIC0gb2JqZWN0IHRoYXQgaXMgZXh0ZW5kZWQgKGxlZ2FjeSlcbiAqIEByZXR1cm5zIHtITEpTQXBpfVxuICovXG5jb25zdCBITEpTID0gZnVuY3Rpb24oaGxqcykge1xuICAvLyBHbG9iYWwgaW50ZXJuYWwgdmFyaWFibGVzIHVzZWQgd2l0aGluIHRoZSBoaWdobGlnaHQuanMgbGlicmFyeS5cbiAgLyoqIEB0eXBlIHtSZWNvcmQ8c3RyaW5nLCBMYW5ndWFnZT59ICovXG4gIGNvbnN0IGxhbmd1YWdlcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIC8qKiBAdHlwZSB7UmVjb3JkPHN0cmluZywgc3RyaW5nPn0gKi9cbiAgY29uc3QgYWxpYXNlcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIC8qKiBAdHlwZSB7SExKU1BsdWdpbltdfSAqL1xuICBjb25zdCBwbHVnaW5zID0gW107XG5cbiAgLy8gc2FmZS9wcm9kdWN0aW9uIG1vZGUgLSBzd2FsbG93cyBtb3JlIGVycm9ycywgdHJpZXMgdG8ga2VlcCBydW5uaW5nXG4gIC8vIGV2ZW4gaWYgYSBzaW5nbGUgc3ludGF4IG9yIHBhcnNlIGhpdHMgYSBmYXRhbCBlcnJvclxuICBsZXQgU0FGRV9NT0RFID0gdHJ1ZTtcbiAgY29uc3QgZml4TWFya3VwUmUgPSAvKF4oPFtePl0rPnxcXHR8KSt8XFxuKS9nbTtcbiAgY29uc3QgTEFOR1VBR0VfTk9UX0ZPVU5EID0gXCJDb3VsZCBub3QgZmluZCB0aGUgbGFuZ3VhZ2UgJ3t9JywgZGlkIHlvdSBmb3JnZXQgdG8gbG9hZC9pbmNsdWRlIGEgbGFuZ3VhZ2UgbW9kdWxlP1wiO1xuICAvKiogQHR5cGUge0xhbmd1YWdlfSAqL1xuICBjb25zdCBQTEFJTlRFWFRfTEFOR1VBR0UgPSB7IGRpc2FibGVBdXRvZGV0ZWN0OiB0cnVlLCBuYW1lOiAnUGxhaW4gdGV4dCcsIGNvbnRhaW5zOiBbXSB9O1xuXG4gIC8vIEdsb2JhbCBvcHRpb25zIHVzZWQgd2hlbiB3aXRoaW4gZXh0ZXJuYWwgQVBJcy4gVGhpcyBpcyBtb2RpZmllZCB3aGVuXG4gIC8vIGNhbGxpbmcgdGhlIGBobGpzLmNvbmZpZ3VyZWAgZnVuY3Rpb24uXG4gIC8qKiBAdHlwZSBITEpTT3B0aW9ucyAqL1xuICBsZXQgb3B0aW9ucyA9IHtcbiAgICBub0hpZ2hsaWdodFJlOiAvXihuby0/aGlnaGxpZ2h0KSQvaSxcbiAgICBsYW5ndWFnZURldGVjdFJlOiAvXFxibGFuZyg/OnVhZ2UpPy0oW1xcdy1dKylcXGIvaSxcbiAgICBjbGFzc1ByZWZpeDogJ2hsanMtJyxcbiAgICB0YWJSZXBsYWNlOiBudWxsLFxuICAgIHVzZUJSOiBmYWxzZSxcbiAgICBsYW5ndWFnZXM6IG51bGwsXG4gICAgLy8gYmV0YSBjb25maWd1cmF0aW9uIG9wdGlvbnMsIHN1YmplY3QgdG8gY2hhbmdlLCB3ZWxjb21lIHRvIGRpc2N1c3NcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vaGlnaGxpZ2h0anMvaGlnaGxpZ2h0LmpzL2lzc3Vlcy8xMDg2XG4gICAgX19lbWl0dGVyOiBUb2tlblRyZWVFbWl0dGVyXG4gIH07XG5cbiAgLyogVXRpbGl0eSBmdW5jdGlvbnMgKi9cblxuICAvKipcbiAgICogVGVzdHMgYSBsYW5ndWFnZSBuYW1lIHRvIHNlZSBpZiBoaWdobGlnaHRpbmcgc2hvdWxkIGJlIHNraXBwZWRcbiAgICogQHBhcmFtIHtzdHJpbmd9IGxhbmd1YWdlTmFtZVxuICAgKi9cbiAgZnVuY3Rpb24gc2hvdWxkTm90SGlnaGxpZ2h0KGxhbmd1YWdlTmFtZSkge1xuICAgIHJldHVybiBvcHRpb25zLm5vSGlnaGxpZ2h0UmUudGVzdChsYW5ndWFnZU5hbWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7SGlnaGxpZ2h0ZWRIVE1MRWxlbWVudH0gYmxvY2sgLSB0aGUgSFRNTCBlbGVtZW50IHRvIGRldGVybWluZSBsYW5ndWFnZSBmb3JcbiAgICovXG4gIGZ1bmN0aW9uIGJsb2NrTGFuZ3VhZ2UoYmxvY2spIHtcbiAgICBsZXQgY2xhc3NlcyA9IGJsb2NrLmNsYXNzTmFtZSArICcgJztcblxuICAgIGNsYXNzZXMgKz0gYmxvY2sucGFyZW50Tm9kZSA/IGJsb2NrLnBhcmVudE5vZGUuY2xhc3NOYW1lIDogJyc7XG5cbiAgICAvLyBsYW5ndWFnZS0qIHRha2VzIHByZWNlZGVuY2Ugb3ZlciBub24tcHJlZml4ZWQgY2xhc3MgbmFtZXMuXG4gICAgY29uc3QgbWF0Y2ggPSBvcHRpb25zLmxhbmd1YWdlRGV0ZWN0UmUuZXhlYyhjbGFzc2VzKTtcbiAgICBpZiAobWF0Y2gpIHtcbiAgICAgIGNvbnN0IGxhbmd1YWdlID0gZ2V0TGFuZ3VhZ2UobWF0Y2hbMV0pO1xuICAgICAgaWYgKCFsYW5ndWFnZSkge1xuICAgICAgICB3YXJuKExBTkdVQUdFX05PVF9GT1VORC5yZXBsYWNlKFwie31cIiwgbWF0Y2hbMV0pKTtcbiAgICAgICAgd2FybihcIkZhbGxpbmcgYmFjayB0byBuby1oaWdobGlnaHQgbW9kZSBmb3IgdGhpcyBibG9jay5cIiwgYmxvY2spO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGxhbmd1YWdlID8gbWF0Y2hbMV0gOiAnbm8taGlnaGxpZ2h0JztcbiAgICB9XG5cbiAgICByZXR1cm4gY2xhc3Nlc1xuICAgICAgLnNwbGl0KC9cXHMrLylcbiAgICAgIC5maW5kKChfY2xhc3MpID0+IHNob3VsZE5vdEhpZ2hsaWdodChfY2xhc3MpIHx8IGdldExhbmd1YWdlKF9jbGFzcykpO1xuICB9XG5cbiAgLyoqXG4gICAqIENvcmUgaGlnaGxpZ2h0aW5nIGZ1bmN0aW9uLlxuICAgKlxuICAgKiBPTEQgQVBJXG4gICAqIGhpZ2hsaWdodChsYW5nLCBjb2RlLCBpZ25vcmVJbGxlZ2FscywgY29udGludWF0aW9uKVxuICAgKlxuICAgKiBORVcgQVBJXG4gICAqIGhpZ2hsaWdodChjb2RlLCB7bGFuZywgaWdub3JlSWxsZWdhbHN9KVxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY29kZU9ybGFuZ3VhZ2VOYW1lIC0gdGhlIGxhbmd1YWdlIHRvIHVzZSBmb3IgaGlnaGxpZ2h0aW5nXG4gICAqIEBwYXJhbSB7c3RyaW5nIHwgSGlnaGxpZ2h0T3B0aW9uc30gb3B0aW9uc09yQ29kZSAtIHRoZSBjb2RlIHRvIGhpZ2hsaWdodFxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtpZ25vcmVJbGxlZ2Fsc10gLSB3aGV0aGVyIHRvIGlnbm9yZSBpbGxlZ2FsIG1hdGNoZXMsIGRlZmF1bHQgaXMgdG8gYmFpbFxuICAgKiBAcGFyYW0ge0NvbXBpbGVkTW9kZX0gW2NvbnRpbnVhdGlvbl0gLSBjdXJyZW50IGNvbnRpbnVhdGlvbiBtb2RlLCBpZiBhbnlcbiAgICpcbiAgICogQHJldHVybnMge0hpZ2hsaWdodFJlc3VsdH0gUmVzdWx0IC0gYW4gb2JqZWN0IHRoYXQgcmVwcmVzZW50cyB0aGUgcmVzdWx0XG4gICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBsYW5ndWFnZSAtIHRoZSBsYW5ndWFnZSBuYW1lXG4gICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSByZWxldmFuY2UgLSB0aGUgcmVsZXZhbmNlIHNjb3JlXG4gICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSB2YWx1ZSAtIHRoZSBoaWdobGlnaHRlZCBIVE1MIGNvZGVcbiAgICogQHByb3BlcnR5IHtzdHJpbmd9IGNvZGUgLSB0aGUgb3JpZ2luYWwgcmF3IGNvZGVcbiAgICogQHByb3BlcnR5IHtDb21waWxlZE1vZGV9IHRvcCAtIHRvcCBvZiB0aGUgY3VycmVudCBtb2RlIHN0YWNrXG4gICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gaWxsZWdhbCAtIGluZGljYXRlcyB3aGV0aGVyIGFueSBpbGxlZ2FsIG1hdGNoZXMgd2VyZSBmb3VuZFxuICAqL1xuICBmdW5jdGlvbiBoaWdobGlnaHQoY29kZU9ybGFuZ3VhZ2VOYW1lLCBvcHRpb25zT3JDb2RlLCBpZ25vcmVJbGxlZ2FscywgY29udGludWF0aW9uKSB7XG4gICAgbGV0IGNvZGUgPSBcIlwiO1xuICAgIGxldCBsYW5ndWFnZU5hbWUgPSBcIlwiO1xuICAgIGlmICh0eXBlb2Ygb3B0aW9uc09yQ29kZSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgY29kZSA9IGNvZGVPcmxhbmd1YWdlTmFtZTtcbiAgICAgIGlnbm9yZUlsbGVnYWxzID0gb3B0aW9uc09yQ29kZS5pZ25vcmVJbGxlZ2FscztcbiAgICAgIGxhbmd1YWdlTmFtZSA9IG9wdGlvbnNPckNvZGUubGFuZ3VhZ2U7XG4gICAgICAvLyBjb250aW51YXRpb24gbm90IHN1cHBvcnRlZCBhdCBhbGwgdmlhIHRoZSBuZXcgQVBJXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZpbmVkXG4gICAgICBjb250aW51YXRpb24gPSB1bmRlZmluZWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIG9sZCBBUElcbiAgICAgIGRlcHJlY2F0ZWQoXCIxMC43LjBcIiwgXCJoaWdobGlnaHQobGFuZywgY29kZSwgLi4uYXJncykgaGFzIGJlZW4gZGVwcmVjYXRlZC5cIik7XG4gICAgICBkZXByZWNhdGVkKFwiMTAuNy4wXCIsIFwiUGxlYXNlIHVzZSBoaWdobGlnaHQoY29kZSwgb3B0aW9ucykgaW5zdGVhZC5cXG5odHRwczovL2dpdGh1Yi5jb20vaGlnaGxpZ2h0anMvaGlnaGxpZ2h0LmpzL2lzc3Vlcy8yMjc3XCIpO1xuICAgICAgbGFuZ3VhZ2VOYW1lID0gY29kZU9ybGFuZ3VhZ2VOYW1lO1xuICAgICAgY29kZSA9IG9wdGlvbnNPckNvZGU7XG4gICAgfVxuXG4gICAgLyoqIEB0eXBlIHtCZWZvcmVIaWdobGlnaHRDb250ZXh0fSAqL1xuICAgIGNvbnN0IGNvbnRleHQgPSB7XG4gICAgICBjb2RlLFxuICAgICAgbGFuZ3VhZ2U6IGxhbmd1YWdlTmFtZVxuICAgIH07XG4gICAgLy8gdGhlIHBsdWdpbiBjYW4gY2hhbmdlIHRoZSBkZXNpcmVkIGxhbmd1YWdlIG9yIHRoZSBjb2RlIHRvIGJlIGhpZ2hsaWdodGVkXG4gICAgLy8ganVzdCBiZSBjaGFuZ2luZyB0aGUgb2JqZWN0IGl0IHdhcyBwYXNzZWRcbiAgICBmaXJlKFwiYmVmb3JlOmhpZ2hsaWdodFwiLCBjb250ZXh0KTtcblxuICAgIC8vIGEgYmVmb3JlIHBsdWdpbiBjYW4gdXN1cnAgdGhlIHJlc3VsdCBjb21wbGV0ZWx5IGJ5IHByb3ZpZGluZyBpdCdzIG93blxuICAgIC8vIGluIHdoaWNoIGNhc2Ugd2UgZG9uJ3QgZXZlbiBuZWVkIHRvIGNhbGwgaGlnaGxpZ2h0XG4gICAgY29uc3QgcmVzdWx0ID0gY29udGV4dC5yZXN1bHRcbiAgICAgID8gY29udGV4dC5yZXN1bHRcbiAgICAgIDogX2hpZ2hsaWdodChjb250ZXh0Lmxhbmd1YWdlLCBjb250ZXh0LmNvZGUsIGlnbm9yZUlsbGVnYWxzLCBjb250aW51YXRpb24pO1xuXG4gICAgcmVzdWx0LmNvZGUgPSBjb250ZXh0LmNvZGU7XG4gICAgLy8gdGhlIHBsdWdpbiBjYW4gY2hhbmdlIGFueXRoaW5nIGluIHJlc3VsdCB0byBzdWl0ZSBpdFxuICAgIGZpcmUoXCJhZnRlcjpoaWdobGlnaHRcIiwgcmVzdWx0KTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICAvKipcbiAgICogcHJpdmF0ZSBoaWdobGlnaHQgdGhhdCdzIHVzZWQgaW50ZXJuYWxseSBhbmQgZG9lcyBub3QgZmlyZSBjYWxsYmFja3NcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGxhbmd1YWdlTmFtZSAtIHRoZSBsYW5ndWFnZSB0byB1c2UgZm9yIGhpZ2hsaWdodGluZ1xuICAgKiBAcGFyYW0ge3N0cmluZ30gY29kZVRvSGlnaGxpZ2h0IC0gdGhlIGNvZGUgdG8gaGlnaGxpZ2h0XG4gICAqIEBwYXJhbSB7Ym9vbGVhbj99IFtpZ25vcmVJbGxlZ2Fsc10gLSB3aGV0aGVyIHRvIGlnbm9yZSBpbGxlZ2FsIG1hdGNoZXMsIGRlZmF1bHQgaXMgdG8gYmFpbFxuICAgKiBAcGFyYW0ge0NvbXBpbGVkTW9kZT99IFtjb250aW51YXRpb25dIC0gY3VycmVudCBjb250aW51YXRpb24gbW9kZSwgaWYgYW55XG4gICAqIEByZXR1cm5zIHtIaWdobGlnaHRSZXN1bHR9IC0gcmVzdWx0IG9mIHRoZSBoaWdobGlnaHQgb3BlcmF0aW9uXG4gICovXG4gIGZ1bmN0aW9uIF9oaWdobGlnaHQobGFuZ3VhZ2VOYW1lLCBjb2RlVG9IaWdobGlnaHQsIGlnbm9yZUlsbGVnYWxzLCBjb250aW51YXRpb24pIHtcbiAgICAvKipcbiAgICAgKiBSZXR1cm4ga2V5d29yZCBkYXRhIGlmIGEgbWF0Y2ggaXMgYSBrZXl3b3JkXG4gICAgICogQHBhcmFtIHtDb21waWxlZE1vZGV9IG1vZGUgLSBjdXJyZW50IG1vZGVcbiAgICAgKiBAcGFyYW0ge1JlZ0V4cE1hdGNoQXJyYXl9IG1hdGNoIC0gcmVnZXhwIG1hdGNoIGRhdGFcbiAgICAgKiBAcmV0dXJucyB7S2V5d29yZERhdGEgfCBmYWxzZX1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBrZXl3b3JkRGF0YShtb2RlLCBtYXRjaCkge1xuICAgICAgY29uc3QgbWF0Y2hUZXh0ID0gbGFuZ3VhZ2UuY2FzZV9pbnNlbnNpdGl2ZSA/IG1hdGNoWzBdLnRvTG93ZXJDYXNlKCkgOiBtYXRjaFswXTtcbiAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kZS5rZXl3b3JkcywgbWF0Y2hUZXh0KSAmJiBtb2RlLmtleXdvcmRzW21hdGNoVGV4dF07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcHJvY2Vzc0tleXdvcmRzKCkge1xuICAgICAgaWYgKCF0b3Aua2V5d29yZHMpIHtcbiAgICAgICAgZW1pdHRlci5hZGRUZXh0KG1vZGVCdWZmZXIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGxldCBsYXN0SW5kZXggPSAwO1xuICAgICAgdG9wLmtleXdvcmRQYXR0ZXJuUmUubGFzdEluZGV4ID0gMDtcbiAgICAgIGxldCBtYXRjaCA9IHRvcC5rZXl3b3JkUGF0dGVyblJlLmV4ZWMobW9kZUJ1ZmZlcik7XG4gICAgICBsZXQgYnVmID0gXCJcIjtcblxuICAgICAgd2hpbGUgKG1hdGNoKSB7XG4gICAgICAgIGJ1ZiArPSBtb2RlQnVmZmVyLnN1YnN0cmluZyhsYXN0SW5kZXgsIG1hdGNoLmluZGV4KTtcbiAgICAgICAgY29uc3QgZGF0YSA9IGtleXdvcmREYXRhKHRvcCwgbWF0Y2gpO1xuICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgIGNvbnN0IFtraW5kLCBrZXl3b3JkUmVsZXZhbmNlXSA9IGRhdGE7XG4gICAgICAgICAgZW1pdHRlci5hZGRUZXh0KGJ1Zik7XG4gICAgICAgICAgYnVmID0gXCJcIjtcblxuICAgICAgICAgIHJlbGV2YW5jZSArPSBrZXl3b3JkUmVsZXZhbmNlO1xuICAgICAgICAgIGlmIChraW5kLnN0YXJ0c1dpdGgoXCJfXCIpKSB7XG4gICAgICAgICAgICAvLyBfIGltcGxpZWQgZm9yIHJlbGV2YW5jZSBvbmx5LCBkbyBub3QgaGlnaGxpZ2h0XG4gICAgICAgICAgICAvLyBieSBhcHBseWluZyBhIGNsYXNzIG5hbWVcbiAgICAgICAgICAgIGJ1ZiArPSBtYXRjaFswXTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgY3NzQ2xhc3MgPSBsYW5ndWFnZS5jbGFzc05hbWVBbGlhc2VzW2tpbmRdIHx8IGtpbmQ7XG4gICAgICAgICAgICBlbWl0dGVyLmFkZEtleXdvcmQobWF0Y2hbMF0sIGNzc0NsYXNzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYnVmICs9IG1hdGNoWzBdO1xuICAgICAgICB9XG4gICAgICAgIGxhc3RJbmRleCA9IHRvcC5rZXl3b3JkUGF0dGVyblJlLmxhc3RJbmRleDtcbiAgICAgICAgbWF0Y2ggPSB0b3Aua2V5d29yZFBhdHRlcm5SZS5leGVjKG1vZGVCdWZmZXIpO1xuICAgICAgfVxuICAgICAgYnVmICs9IG1vZGVCdWZmZXIuc3Vic3RyKGxhc3RJbmRleCk7XG4gICAgICBlbWl0dGVyLmFkZFRleHQoYnVmKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwcm9jZXNzU3ViTGFuZ3VhZ2UoKSB7XG4gICAgICBpZiAobW9kZUJ1ZmZlciA9PT0gXCJcIikgcmV0dXJuO1xuICAgICAgLyoqIEB0eXBlIEhpZ2hsaWdodFJlc3VsdCAqL1xuICAgICAgbGV0IHJlc3VsdCA9IG51bGw7XG5cbiAgICAgIGlmICh0eXBlb2YgdG9wLnN1Ykxhbmd1YWdlID09PSAnc3RyaW5nJykge1xuICAgICAgICBpZiAoIWxhbmd1YWdlc1t0b3Auc3ViTGFuZ3VhZ2VdKSB7XG4gICAgICAgICAgZW1pdHRlci5hZGRUZXh0KG1vZGVCdWZmZXIpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICByZXN1bHQgPSBfaGlnaGxpZ2h0KHRvcC5zdWJMYW5ndWFnZSwgbW9kZUJ1ZmZlciwgdHJ1ZSwgY29udGludWF0aW9uc1t0b3Auc3ViTGFuZ3VhZ2VdKTtcbiAgICAgICAgY29udGludWF0aW9uc1t0b3Auc3ViTGFuZ3VhZ2VdID0gLyoqIEB0eXBlIHtDb21waWxlZE1vZGV9ICovIChyZXN1bHQudG9wKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdCA9IGhpZ2hsaWdodEF1dG8obW9kZUJ1ZmZlciwgdG9wLnN1Ykxhbmd1YWdlLmxlbmd0aCA/IHRvcC5zdWJMYW5ndWFnZSA6IG51bGwpO1xuICAgICAgfVxuXG4gICAgICAvLyBDb3VudGluZyBlbWJlZGRlZCBsYW5ndWFnZSBzY29yZSB0b3dhcmRzIHRoZSBob3N0IGxhbmd1YWdlIG1heSBiZSBkaXNhYmxlZFxuICAgICAgLy8gd2l0aCB6ZXJvaW5nIHRoZSBjb250YWluaW5nIG1vZGUgcmVsZXZhbmNlLiBVc2UgY2FzZSBpbiBwb2ludCBpcyBNYXJrZG93biB0aGF0XG4gICAgICAvLyBhbGxvd3MgWE1MIGV2ZXJ5d2hlcmUgYW5kIG1ha2VzIGV2ZXJ5IFhNTCBzbmlwcGV0IHRvIGhhdmUgYSBtdWNoIGxhcmdlciBNYXJrZG93blxuICAgICAgLy8gc2NvcmUuXG4gICAgICBpZiAodG9wLnJlbGV2YW5jZSA+IDApIHtcbiAgICAgICAgcmVsZXZhbmNlICs9IHJlc3VsdC5yZWxldmFuY2U7XG4gICAgICB9XG4gICAgICBlbWl0dGVyLmFkZFN1Ymxhbmd1YWdlKHJlc3VsdC5lbWl0dGVyLCByZXN1bHQubGFuZ3VhZ2UpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHByb2Nlc3NCdWZmZXIoKSB7XG4gICAgICBpZiAodG9wLnN1Ykxhbmd1YWdlICE9IG51bGwpIHtcbiAgICAgICAgcHJvY2Vzc1N1Ykxhbmd1YWdlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcm9jZXNzS2V5d29yZHMoKTtcbiAgICAgIH1cbiAgICAgIG1vZGVCdWZmZXIgPSAnJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge01vZGV9IG1vZGUgLSBuZXcgbW9kZSB0byBzdGFydFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHN0YXJ0TmV3TW9kZShtb2RlKSB7XG4gICAgICBpZiAobW9kZS5jbGFzc05hbWUpIHtcbiAgICAgICAgZW1pdHRlci5vcGVuTm9kZShsYW5ndWFnZS5jbGFzc05hbWVBbGlhc2VzW21vZGUuY2xhc3NOYW1lXSB8fCBtb2RlLmNsYXNzTmFtZSk7XG4gICAgICB9XG4gICAgICB0b3AgPSBPYmplY3QuY3JlYXRlKG1vZGUsIHsgcGFyZW50OiB7IHZhbHVlOiB0b3AgfSB9KTtcbiAgICAgIHJldHVybiB0b3A7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtDb21waWxlZE1vZGUgfSBtb2RlIC0gdGhlIG1vZGUgdG8gcG90ZW50aWFsbHkgZW5kXG4gICAgICogQHBhcmFtIHtSZWdFeHBNYXRjaEFycmF5fSBtYXRjaCAtIHRoZSBsYXRlc3QgbWF0Y2hcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbWF0Y2hQbHVzUmVtYWluZGVyIC0gbWF0Y2ggcGx1cyByZW1haW5kZXIgb2YgY29udGVudFxuICAgICAqIEByZXR1cm5zIHtDb21waWxlZE1vZGUgfCB2b2lkfSAtIHRoZSBuZXh0IG1vZGUsIG9yIGlmIHZvaWQgY29udGludWUgb24gaW4gY3VycmVudCBtb2RlXG4gICAgICovXG4gICAgZnVuY3Rpb24gZW5kT2ZNb2RlKG1vZGUsIG1hdGNoLCBtYXRjaFBsdXNSZW1haW5kZXIpIHtcbiAgICAgIGxldCBtYXRjaGVkID0gc3RhcnRzV2l0aChtb2RlLmVuZFJlLCBtYXRjaFBsdXNSZW1haW5kZXIpO1xuXG4gICAgICBpZiAobWF0Y2hlZCkge1xuICAgICAgICBpZiAobW9kZVtcIm9uOmVuZFwiXSkge1xuICAgICAgICAgIGNvbnN0IHJlc3AgPSBuZXcgUmVzcG9uc2UobW9kZSk7XG4gICAgICAgICAgbW9kZVtcIm9uOmVuZFwiXShtYXRjaCwgcmVzcCk7XG4gICAgICAgICAgaWYgKHJlc3AuaXNNYXRjaElnbm9yZWQpIG1hdGNoZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtYXRjaGVkKSB7XG4gICAgICAgICAgd2hpbGUgKG1vZGUuZW5kc1BhcmVudCAmJiBtb2RlLnBhcmVudCkge1xuICAgICAgICAgICAgbW9kZSA9IG1vZGUucGFyZW50O1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gbW9kZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gZXZlbiBpZiBvbjplbmQgZmlyZXMgYW4gYGlnbm9yZWAgaXQncyBzdGlsbCBwb3NzaWJsZVxuICAgICAgLy8gdGhhdCB3ZSBtaWdodCB0cmlnZ2VyIHRoZSBlbmQgbm9kZSBiZWNhdXNlIG9mIGEgcGFyZW50IG1vZGVcbiAgICAgIGlmIChtb2RlLmVuZHNXaXRoUGFyZW50KSB7XG4gICAgICAgIHJldHVybiBlbmRPZk1vZGUobW9kZS5wYXJlbnQsIG1hdGNoLCBtYXRjaFBsdXNSZW1haW5kZXIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhhbmRsZSBtYXRjaGluZyBidXQgdGhlbiBpZ25vcmluZyBhIHNlcXVlbmNlIG9mIHRleHRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBsZXhlbWUgLSBzdHJpbmcgY29udGFpbmluZyBmdWxsIG1hdGNoIHRleHRcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBkb0lnbm9yZShsZXhlbWUpIHtcbiAgICAgIGlmICh0b3AubWF0Y2hlci5yZWdleEluZGV4ID09PSAwKSB7XG4gICAgICAgIC8vIG5vIG1vcmUgcmVnZXhzIHRvIHBvdGVudGlhbGx5IG1hdGNoIGhlcmUsIHNvIHdlIG1vdmUgdGhlIGN1cnNvciBmb3J3YXJkIG9uZVxuICAgICAgICAvLyBzcGFjZVxuICAgICAgICBtb2RlQnVmZmVyICs9IGxleGVtZVswXTtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBubyBuZWVkIHRvIG1vdmUgdGhlIGN1cnNvciwgd2Ugc3RpbGwgaGF2ZSBhZGRpdGlvbmFsIHJlZ2V4ZXMgdG8gdHJ5IGFuZFxuICAgICAgICAvLyBtYXRjaCBhdCB0aGlzIHZlcnkgc3BvdFxuICAgICAgICByZXN1bWVTY2FuQXRTYW1lUG9zaXRpb24gPSB0cnVlO1xuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGUgdGhlIHN0YXJ0IG9mIGEgbmV3IHBvdGVudGlhbCBtb2RlIG1hdGNoXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0VuaGFuY2VkTWF0Y2h9IG1hdGNoIC0gdGhlIGN1cnJlbnQgbWF0Y2hcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfSBob3cgZmFyIHRvIGFkdmFuY2UgdGhlIHBhcnNlIGN1cnNvclxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGRvQmVnaW5NYXRjaChtYXRjaCkge1xuICAgICAgY29uc3QgbGV4ZW1lID0gbWF0Y2hbMF07XG4gICAgICBjb25zdCBuZXdNb2RlID0gbWF0Y2gucnVsZTtcblxuICAgICAgY29uc3QgcmVzcCA9IG5ldyBSZXNwb25zZShuZXdNb2RlKTtcbiAgICAgIC8vIGZpcnN0IGludGVybmFsIGJlZm9yZSBjYWxsYmFja3MsIHRoZW4gdGhlIHB1YmxpYyBvbmVzXG4gICAgICBjb25zdCBiZWZvcmVDYWxsYmFja3MgPSBbbmV3TW9kZS5fX2JlZm9yZUJlZ2luLCBuZXdNb2RlW1wib246YmVnaW5cIl1dO1xuICAgICAgZm9yIChjb25zdCBjYiBvZiBiZWZvcmVDYWxsYmFja3MpIHtcbiAgICAgICAgaWYgKCFjYikgY29udGludWU7XG4gICAgICAgIGNiKG1hdGNoLCByZXNwKTtcbiAgICAgICAgaWYgKHJlc3AuaXNNYXRjaElnbm9yZWQpIHJldHVybiBkb0lnbm9yZShsZXhlbWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmV3TW9kZSAmJiBuZXdNb2RlLmVuZFNhbWVBc0JlZ2luKSB7XG4gICAgICAgIG5ld01vZGUuZW5kUmUgPSBlc2NhcGUobGV4ZW1lKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5ld01vZGUuc2tpcCkge1xuICAgICAgICBtb2RlQnVmZmVyICs9IGxleGVtZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChuZXdNb2RlLmV4Y2x1ZGVCZWdpbikge1xuICAgICAgICAgIG1vZGVCdWZmZXIgKz0gbGV4ZW1lO1xuICAgICAgICB9XG4gICAgICAgIHByb2Nlc3NCdWZmZXIoKTtcbiAgICAgICAgaWYgKCFuZXdNb2RlLnJldHVybkJlZ2luICYmICFuZXdNb2RlLmV4Y2x1ZGVCZWdpbikge1xuICAgICAgICAgIG1vZGVCdWZmZXIgPSBsZXhlbWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHN0YXJ0TmV3TW9kZShuZXdNb2RlKTtcbiAgICAgIC8vIGlmIChtb2RlW1wiYWZ0ZXI6YmVnaW5cIl0pIHtcbiAgICAgIC8vICAgbGV0IHJlc3AgPSBuZXcgUmVzcG9uc2UobW9kZSk7XG4gICAgICAvLyAgIG1vZGVbXCJhZnRlcjpiZWdpblwiXShtYXRjaCwgcmVzcCk7XG4gICAgICAvLyB9XG4gICAgICByZXR1cm4gbmV3TW9kZS5yZXR1cm5CZWdpbiA/IDAgOiBsZXhlbWUubGVuZ3RoO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhhbmRsZSB0aGUgcG90ZW50aWFsIGVuZCBvZiBtb2RlXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1JlZ0V4cE1hdGNoQXJyYXl9IG1hdGNoIC0gdGhlIGN1cnJlbnQgbWF0Y2hcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBkb0VuZE1hdGNoKG1hdGNoKSB7XG4gICAgICBjb25zdCBsZXhlbWUgPSBtYXRjaFswXTtcbiAgICAgIGNvbnN0IG1hdGNoUGx1c1JlbWFpbmRlciA9IGNvZGVUb0hpZ2hsaWdodC5zdWJzdHIobWF0Y2guaW5kZXgpO1xuXG4gICAgICBjb25zdCBlbmRNb2RlID0gZW5kT2ZNb2RlKHRvcCwgbWF0Y2gsIG1hdGNoUGx1c1JlbWFpbmRlcik7XG4gICAgICBpZiAoIWVuZE1vZGUpIHsgcmV0dXJuIE5PX01BVENIOyB9XG5cbiAgICAgIGNvbnN0IG9yaWdpbiA9IHRvcDtcbiAgICAgIGlmIChvcmlnaW4uc2tpcCkge1xuICAgICAgICBtb2RlQnVmZmVyICs9IGxleGVtZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICghKG9yaWdpbi5yZXR1cm5FbmQgfHwgb3JpZ2luLmV4Y2x1ZGVFbmQpKSB7XG4gICAgICAgICAgbW9kZUJ1ZmZlciArPSBsZXhlbWU7XG4gICAgICAgIH1cbiAgICAgICAgcHJvY2Vzc0J1ZmZlcigpO1xuICAgICAgICBpZiAob3JpZ2luLmV4Y2x1ZGVFbmQpIHtcbiAgICAgICAgICBtb2RlQnVmZmVyID0gbGV4ZW1lO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBkbyB7XG4gICAgICAgIGlmICh0b3AuY2xhc3NOYW1lKSB7XG4gICAgICAgICAgZW1pdHRlci5jbG9zZU5vZGUoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRvcC5za2lwICYmICF0b3Auc3ViTGFuZ3VhZ2UpIHtcbiAgICAgICAgICByZWxldmFuY2UgKz0gdG9wLnJlbGV2YW5jZTtcbiAgICAgICAgfVxuICAgICAgICB0b3AgPSB0b3AucGFyZW50O1xuICAgICAgfSB3aGlsZSAodG9wICE9PSBlbmRNb2RlLnBhcmVudCk7XG4gICAgICBpZiAoZW5kTW9kZS5zdGFydHMpIHtcbiAgICAgICAgaWYgKGVuZE1vZGUuZW5kU2FtZUFzQmVnaW4pIHtcbiAgICAgICAgICBlbmRNb2RlLnN0YXJ0cy5lbmRSZSA9IGVuZE1vZGUuZW5kUmU7XG4gICAgICAgIH1cbiAgICAgICAgc3RhcnROZXdNb2RlKGVuZE1vZGUuc3RhcnRzKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBvcmlnaW4ucmV0dXJuRW5kID8gMCA6IGxleGVtZS5sZW5ndGg7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcHJvY2Vzc0NvbnRpbnVhdGlvbnMoKSB7XG4gICAgICBjb25zdCBsaXN0ID0gW107XG4gICAgICBmb3IgKGxldCBjdXJyZW50ID0gdG9wOyBjdXJyZW50ICE9PSBsYW5ndWFnZTsgY3VycmVudCA9IGN1cnJlbnQucGFyZW50KSB7XG4gICAgICAgIGlmIChjdXJyZW50LmNsYXNzTmFtZSkge1xuICAgICAgICAgIGxpc3QudW5zaGlmdChjdXJyZW50LmNsYXNzTmFtZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QuZm9yRWFjaChpdGVtID0+IGVtaXR0ZXIub3Blbk5vZGUoaXRlbSkpO1xuICAgIH1cblxuICAgIC8qKiBAdHlwZSB7e3R5cGU/OiBNYXRjaFR5cGUsIGluZGV4PzogbnVtYmVyLCBydWxlPzogTW9kZX19fSAqL1xuICAgIGxldCBsYXN0TWF0Y2ggPSB7fTtcblxuICAgIC8qKlxuICAgICAqICBQcm9jZXNzIGFuIGluZGl2aWR1YWwgbWF0Y2hcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0QmVmb3JlTWF0Y2ggLSB0ZXh0IHByZWNlZWRpbmcgdGhlIG1hdGNoIChzaW5jZSB0aGUgbGFzdCBtYXRjaClcbiAgICAgKiBAcGFyYW0ge0VuaGFuY2VkTWF0Y2h9IFttYXRjaF0gLSB0aGUgbWF0Y2ggaXRzZWxmXG4gICAgICovXG4gICAgZnVuY3Rpb24gcHJvY2Vzc0xleGVtZSh0ZXh0QmVmb3JlTWF0Y2gsIG1hdGNoKSB7XG4gICAgICBjb25zdCBsZXhlbWUgPSBtYXRjaCAmJiBtYXRjaFswXTtcblxuICAgICAgLy8gYWRkIG5vbi1tYXRjaGVkIHRleHQgdG8gdGhlIGN1cnJlbnQgbW9kZSBidWZmZXJcbiAgICAgIG1vZGVCdWZmZXIgKz0gdGV4dEJlZm9yZU1hdGNoO1xuXG4gICAgICBpZiAobGV4ZW1lID09IG51bGwpIHtcbiAgICAgICAgcHJvY2Vzc0J1ZmZlcigpO1xuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH1cblxuICAgICAgLy8gd2UndmUgZm91bmQgYSAwIHdpZHRoIG1hdGNoIGFuZCB3ZSdyZSBzdHVjaywgc28gd2UgbmVlZCB0byBhZHZhbmNlXG4gICAgICAvLyB0aGlzIGhhcHBlbnMgd2hlbiB3ZSBoYXZlIGJhZGx5IGJlaGF2ZWQgcnVsZXMgdGhhdCBoYXZlIG9wdGlvbmFsIG1hdGNoZXJzIHRvIHRoZSBkZWdyZWUgdGhhdFxuICAgICAgLy8gc29tZXRpbWVzIHRoZXkgY2FuIGVuZCB1cCBtYXRjaGluZyBub3RoaW5nIGF0IGFsbFxuICAgICAgLy8gUmVmOiBodHRwczovL2dpdGh1Yi5jb20vaGlnaGxpZ2h0anMvaGlnaGxpZ2h0LmpzL2lzc3Vlcy8yMTQwXG4gICAgICBpZiAobGFzdE1hdGNoLnR5cGUgPT09IFwiYmVnaW5cIiAmJiBtYXRjaC50eXBlID09PSBcImVuZFwiICYmIGxhc3RNYXRjaC5pbmRleCA9PT0gbWF0Y2guaW5kZXggJiYgbGV4ZW1lID09PSBcIlwiKSB7XG4gICAgICAgIC8vIHNwaXQgdGhlIFwic2tpcHBlZFwiIGNoYXJhY3RlciB0aGF0IG91ciByZWdleCBjaG9rZWQgb24gYmFjayBpbnRvIHRoZSBvdXRwdXQgc2VxdWVuY2VcbiAgICAgICAgbW9kZUJ1ZmZlciArPSBjb2RlVG9IaWdobGlnaHQuc2xpY2UobWF0Y2guaW5kZXgsIG1hdGNoLmluZGV4ICsgMSk7XG4gICAgICAgIGlmICghU0FGRV9NT0RFKSB7XG4gICAgICAgICAgLyoqIEB0eXBlIHtBbm5vdGF0ZWRFcnJvcn0gKi9cbiAgICAgICAgICBjb25zdCBlcnIgPSBuZXcgRXJyb3IoJzAgd2lkdGggbWF0Y2ggcmVnZXgnKTtcbiAgICAgICAgICBlcnIubGFuZ3VhZ2VOYW1lID0gbGFuZ3VhZ2VOYW1lO1xuICAgICAgICAgIGVyci5iYWRSdWxlID0gbGFzdE1hdGNoLnJ1bGU7XG4gICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAxO1xuICAgICAgfVxuICAgICAgbGFzdE1hdGNoID0gbWF0Y2g7XG5cbiAgICAgIGlmIChtYXRjaC50eXBlID09PSBcImJlZ2luXCIpIHtcbiAgICAgICAgcmV0dXJuIGRvQmVnaW5NYXRjaChtYXRjaCk7XG4gICAgICB9IGVsc2UgaWYgKG1hdGNoLnR5cGUgPT09IFwiaWxsZWdhbFwiICYmICFpZ25vcmVJbGxlZ2Fscykge1xuICAgICAgICAvLyBpbGxlZ2FsIG1hdGNoLCB3ZSBkbyBub3QgY29udGludWUgcHJvY2Vzc2luZ1xuICAgICAgICAvKiogQHR5cGUge0Fubm90YXRlZEVycm9yfSAqL1xuICAgICAgICBjb25zdCBlcnIgPSBuZXcgRXJyb3IoJ0lsbGVnYWwgbGV4ZW1lIFwiJyArIGxleGVtZSArICdcIiBmb3IgbW9kZSBcIicgKyAodG9wLmNsYXNzTmFtZSB8fCAnPHVubmFtZWQ+JykgKyAnXCInKTtcbiAgICAgICAgZXJyLm1vZGUgPSB0b3A7XG4gICAgICAgIHRocm93IGVycjtcbiAgICAgIH0gZWxzZSBpZiAobWF0Y2gudHlwZSA9PT0gXCJlbmRcIikge1xuICAgICAgICBjb25zdCBwcm9jZXNzZWQgPSBkb0VuZE1hdGNoKG1hdGNoKTtcbiAgICAgICAgaWYgKHByb2Nlc3NlZCAhPT0gTk9fTUFUQ0gpIHtcbiAgICAgICAgICByZXR1cm4gcHJvY2Vzc2VkO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIGVkZ2UgY2FzZSBmb3Igd2hlbiBpbGxlZ2FsIG1hdGNoZXMgJCAoZW5kIG9mIGxpbmUpIHdoaWNoIGlzIHRlY2huaWNhbGx5XG4gICAgICAvLyBhIDAgd2lkdGggbWF0Y2ggYnV0IG5vdCBhIGJlZ2luL2VuZCBtYXRjaCBzbyBpdCdzIG5vdCBjYXVnaHQgYnkgdGhlXG4gICAgICAvLyBmaXJzdCBoYW5kbGVyICh3aGVuIGlnbm9yZUlsbGVnYWxzIGlzIHRydWUpXG4gICAgICBpZiAobWF0Y2gudHlwZSA9PT0gXCJpbGxlZ2FsXCIgJiYgbGV4ZW1lID09PSBcIlwiKSB7XG4gICAgICAgIC8vIGFkdmFuY2Ugc28gd2UgYXJlbid0IHN0dWNrIGluIGFuIGluZmluaXRlIGxvb3BcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgICB9XG5cbiAgICAgIC8vIGluZmluaXRlIGxvb3BzIGFyZSBCQUQsIHRoaXMgaXMgYSBsYXN0IGRpdGNoIGNhdGNoIGFsbC4gaWYgd2UgaGF2ZSBhXG4gICAgICAvLyBkZWNlbnQgbnVtYmVyIG9mIGl0ZXJhdGlvbnMgeWV0IG91ciBpbmRleCAoY3Vyc29yIHBvc2l0aW9uIGluIG91clxuICAgICAgLy8gcGFyc2luZykgc3RpbGwgM3ggYmVoaW5kIG91ciBpbmRleCB0aGVuIHNvbWV0aGluZyBpcyB2ZXJ5IHdyb25nXG4gICAgICAvLyBzbyB3ZSBiYWlsXG4gICAgICBpZiAoaXRlcmF0aW9ucyA+IDEwMDAwMCAmJiBpdGVyYXRpb25zID4gbWF0Y2guaW5kZXggKiAzKSB7XG4gICAgICAgIGNvbnN0IGVyciA9IG5ldyBFcnJvcigncG90ZW50aWFsIGluZmluaXRlIGxvb3AsIHdheSBtb3JlIGl0ZXJhdGlvbnMgdGhhbiBtYXRjaGVzJyk7XG4gICAgICAgIHRocm93IGVycjtcbiAgICAgIH1cblxuICAgICAgLypcbiAgICAgIFdoeSBtaWdodCBiZSBmaW5kIG91cnNlbHZlcyBoZXJlPyAgT25seSBvbmUgb2NjYXNpb24gbm93LiAgQW4gZW5kIG1hdGNoIHRoYXQgd2FzXG4gICAgICB0cmlnZ2VyZWQgYnV0IGNvdWxkIG5vdCBiZSBjb21wbGV0ZWQuICBXaGVuIG1pZ2h0IHRoaXMgaGFwcGVuPyAgV2hlbiBhbiBgZW5kU2FtZWFzQmVnaW5gXG4gICAgICBydWxlIHNldHMgdGhlIGVuZCBydWxlIHRvIGEgc3BlY2lmaWMgbWF0Y2guICBTaW5jZSB0aGUgb3ZlcmFsbCBtb2RlIHRlcm1pbmF0aW9uIHJ1bGUgdGhhdCdzXG4gICAgICBiZWluZyB1c2VkIHRvIHNjYW4gdGhlIHRleHQgaXNuJ3QgcmVjb21waWxlZCB0aGF0IG1lYW5zIHRoYXQgYW55IG1hdGNoIHRoYXQgTE9PS1MgbGlrZVxuICAgICAgdGhlIGVuZCAoYnV0IGlzIG5vdCwgYmVjYXVzZSBpdCBpcyBub3QgYW4gZXhhY3QgbWF0Y2ggdG8gdGhlIGJlZ2lubmluZykgd2lsbFxuICAgICAgZW5kIHVwIGhlcmUuICBBIGRlZmluaXRlIGVuZCBtYXRjaCwgYnV0IHdoZW4gYGRvRW5kTWF0Y2hgIHRyaWVzIHRvIFwicmVhcHBseVwiXG4gICAgICB0aGUgZW5kIHJ1bGUgYW5kIGZhaWxzIHRvIG1hdGNoLCB3ZSB3aW5kIHVwIGhlcmUsIGFuZCBqdXN0IHNpbGVudGx5IGlnbm9yZSB0aGUgZW5kLlxuXG4gICAgICBUaGlzIGNhdXNlcyBubyByZWFsIGhhcm0gb3RoZXIgdGhhbiBzdG9wcGluZyBhIGZldyB0aW1lcyB0b28gbWFueS5cbiAgICAgICovXG5cbiAgICAgIG1vZGVCdWZmZXIgKz0gbGV4ZW1lO1xuICAgICAgcmV0dXJuIGxleGVtZS5sZW5ndGg7XG4gICAgfVxuXG4gICAgY29uc3QgbGFuZ3VhZ2UgPSBnZXRMYW5ndWFnZShsYW5ndWFnZU5hbWUpO1xuICAgIGlmICghbGFuZ3VhZ2UpIHtcbiAgICAgIGVycm9yKExBTkdVQUdFX05PVF9GT1VORC5yZXBsYWNlKFwie31cIiwgbGFuZ3VhZ2VOYW1lKSk7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gbGFuZ3VhZ2U6IFwiJyArIGxhbmd1YWdlTmFtZSArICdcIicpO1xuICAgIH1cblxuICAgIGNvbnN0IG1kID0gY29tcGlsZUxhbmd1YWdlKGxhbmd1YWdlLCB7IHBsdWdpbnMgfSk7XG4gICAgbGV0IHJlc3VsdCA9ICcnO1xuICAgIC8qKiBAdHlwZSB7Q29tcGlsZWRNb2RlfSAqL1xuICAgIGxldCB0b3AgPSBjb250aW51YXRpb24gfHwgbWQ7XG4gICAgLyoqIEB0eXBlIFJlY29yZDxzdHJpbmcsQ29tcGlsZWRNb2RlPiAqL1xuICAgIGNvbnN0IGNvbnRpbnVhdGlvbnMgPSB7fTsgLy8ga2VlcCBjb250aW51YXRpb25zIGZvciBzdWItbGFuZ3VhZ2VzXG4gICAgY29uc3QgZW1pdHRlciA9IG5ldyBvcHRpb25zLl9fZW1pdHRlcihvcHRpb25zKTtcbiAgICBwcm9jZXNzQ29udGludWF0aW9ucygpO1xuICAgIGxldCBtb2RlQnVmZmVyID0gJyc7XG4gICAgbGV0IHJlbGV2YW5jZSA9IDA7XG4gICAgbGV0IGluZGV4ID0gMDtcbiAgICBsZXQgaXRlcmF0aW9ucyA9IDA7XG4gICAgbGV0IHJlc3VtZVNjYW5BdFNhbWVQb3NpdGlvbiA9IGZhbHNlO1xuXG4gICAgdHJ5IHtcbiAgICAgIHRvcC5tYXRjaGVyLmNvbnNpZGVyQWxsKCk7XG5cbiAgICAgIGZvciAoOzspIHtcbiAgICAgICAgaXRlcmF0aW9ucysrO1xuICAgICAgICBpZiAocmVzdW1lU2NhbkF0U2FtZVBvc2l0aW9uKSB7XG4gICAgICAgICAgLy8gb25seSByZWdleGVzIG5vdCBtYXRjaGVkIHByZXZpb3VzbHkgd2lsbCBub3cgYmVcbiAgICAgICAgICAvLyBjb25zaWRlcmVkIGZvciBhIHBvdGVudGlhbCBtYXRjaFxuICAgICAgICAgIHJlc3VtZVNjYW5BdFNhbWVQb3NpdGlvbiA9IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRvcC5tYXRjaGVyLmNvbnNpZGVyQWxsKCk7XG4gICAgICAgIH1cbiAgICAgICAgdG9wLm1hdGNoZXIubGFzdEluZGV4ID0gaW5kZXg7XG5cbiAgICAgICAgY29uc3QgbWF0Y2ggPSB0b3AubWF0Y2hlci5leGVjKGNvZGVUb0hpZ2hsaWdodCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwibWF0Y2hcIiwgbWF0Y2hbMF0sIG1hdGNoLnJ1bGUgJiYgbWF0Y2gucnVsZS5iZWdpbilcblxuICAgICAgICBpZiAoIW1hdGNoKSBicmVhaztcblxuICAgICAgICBjb25zdCBiZWZvcmVNYXRjaCA9IGNvZGVUb0hpZ2hsaWdodC5zdWJzdHJpbmcoaW5kZXgsIG1hdGNoLmluZGV4KTtcbiAgICAgICAgY29uc3QgcHJvY2Vzc2VkQ291bnQgPSBwcm9jZXNzTGV4ZW1lKGJlZm9yZU1hdGNoLCBtYXRjaCk7XG4gICAgICAgIGluZGV4ID0gbWF0Y2guaW5kZXggKyBwcm9jZXNzZWRDb3VudDtcbiAgICAgIH1cbiAgICAgIHByb2Nlc3NMZXhlbWUoY29kZVRvSGlnaGxpZ2h0LnN1YnN0cihpbmRleCkpO1xuICAgICAgZW1pdHRlci5jbG9zZUFsbE5vZGVzKCk7XG4gICAgICBlbWl0dGVyLmZpbmFsaXplKCk7XG4gICAgICByZXN1bHQgPSBlbWl0dGVyLnRvSFRNTCgpO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAvLyBhdm9pZCBwb3NzaWJsZSBicmVha2FnZSB3aXRoIHYxMCBjbGllbnRzIGV4cGVjdGluZ1xuICAgICAgICAvLyB0aGlzIHRvIGFsd2F5cyBiZSBhbiBpbnRlZ2VyXG4gICAgICAgIHJlbGV2YW5jZTogTWF0aC5mbG9vcihyZWxldmFuY2UpLFxuICAgICAgICB2YWx1ZTogcmVzdWx0LFxuICAgICAgICBsYW5ndWFnZTogbGFuZ3VhZ2VOYW1lLFxuICAgICAgICBpbGxlZ2FsOiBmYWxzZSxcbiAgICAgICAgZW1pdHRlcjogZW1pdHRlcixcbiAgICAgICAgdG9wOiB0b3BcbiAgICAgIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyLm1lc3NhZ2UgJiYgZXJyLm1lc3NhZ2UuaW5jbHVkZXMoJ0lsbGVnYWwnKSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGlsbGVnYWw6IHRydWUsXG4gICAgICAgICAgaWxsZWdhbEJ5OiB7XG4gICAgICAgICAgICBtc2c6IGVyci5tZXNzYWdlLFxuICAgICAgICAgICAgY29udGV4dDogY29kZVRvSGlnaGxpZ2h0LnNsaWNlKGluZGV4IC0gMTAwLCBpbmRleCArIDEwMCksXG4gICAgICAgICAgICBtb2RlOiBlcnIubW9kZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgc29mYXI6IHJlc3VsdCxcbiAgICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgICAgdmFsdWU6IGVzY2FwZSQxKGNvZGVUb0hpZ2hsaWdodCksXG4gICAgICAgICAgZW1pdHRlcjogZW1pdHRlclxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIGlmIChTQUZFX01PREUpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBpbGxlZ2FsOiBmYWxzZSxcbiAgICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgICAgdmFsdWU6IGVzY2FwZSQxKGNvZGVUb0hpZ2hsaWdodCksXG4gICAgICAgICAgZW1pdHRlcjogZW1pdHRlcixcbiAgICAgICAgICBsYW5ndWFnZTogbGFuZ3VhZ2VOYW1lLFxuICAgICAgICAgIHRvcDogdG9wLFxuICAgICAgICAgIGVycm9yUmFpc2VkOiBlcnJcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IGVycjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogcmV0dXJucyBhIHZhbGlkIGhpZ2hsaWdodCByZXN1bHQsIHdpdGhvdXQgYWN0dWFsbHkgZG9pbmcgYW55IGFjdHVhbCB3b3JrLFxuICAgKiBhdXRvIGhpZ2hsaWdodCBzdGFydHMgd2l0aCB0aGlzIGFuZCBpdCdzIHBvc3NpYmxlIGZvciBzbWFsbCBzbmlwcGV0cyB0aGF0XG4gICAqIGF1dG8tZGV0ZWN0aW9uIG1heSBub3QgZmluZCBhIGJldHRlciBtYXRjaFxuICAgKiBAcGFyYW0ge3N0cmluZ30gY29kZVxuICAgKiBAcmV0dXJucyB7SGlnaGxpZ2h0UmVzdWx0fVxuICAgKi9cbiAgZnVuY3Rpb24ganVzdFRleHRIaWdobGlnaHRSZXN1bHQoY29kZSkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHtcbiAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgIGVtaXR0ZXI6IG5ldyBvcHRpb25zLl9fZW1pdHRlcihvcHRpb25zKSxcbiAgICAgIHZhbHVlOiBlc2NhcGUkMShjb2RlKSxcbiAgICAgIGlsbGVnYWw6IGZhbHNlLFxuICAgICAgdG9wOiBQTEFJTlRFWFRfTEFOR1VBR0VcbiAgICB9O1xuICAgIHJlc3VsdC5lbWl0dGVyLmFkZFRleHQoY29kZSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8qKlxuICBIaWdobGlnaHRpbmcgd2l0aCBsYW5ndWFnZSBkZXRlY3Rpb24uIEFjY2VwdHMgYSBzdHJpbmcgd2l0aCB0aGUgY29kZSB0b1xuICBoaWdobGlnaHQuIFJldHVybnMgYW4gb2JqZWN0IHdpdGggdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxuXG4gIC0gbGFuZ3VhZ2UgKGRldGVjdGVkIGxhbmd1YWdlKVxuICAtIHJlbGV2YW5jZSAoaW50KVxuICAtIHZhbHVlIChhbiBIVE1MIHN0cmluZyB3aXRoIGhpZ2hsaWdodGluZyBtYXJrdXApXG4gIC0gc2Vjb25kX2Jlc3QgKG9iamVjdCB3aXRoIHRoZSBzYW1lIHN0cnVjdHVyZSBmb3Igc2Vjb25kLWJlc3QgaGV1cmlzdGljYWxseVxuICAgIGRldGVjdGVkIGxhbmd1YWdlLCBtYXkgYmUgYWJzZW50KVxuXG4gICAgQHBhcmFtIHtzdHJpbmd9IGNvZGVcbiAgICBAcGFyYW0ge0FycmF5PHN0cmluZz59IFtsYW5ndWFnZVN1YnNldF1cbiAgICBAcmV0dXJucyB7QXV0b0hpZ2hsaWdodFJlc3VsdH1cbiAgKi9cbiAgZnVuY3Rpb24gaGlnaGxpZ2h0QXV0byhjb2RlLCBsYW5ndWFnZVN1YnNldCkge1xuICAgIGxhbmd1YWdlU3Vic2V0ID0gbGFuZ3VhZ2VTdWJzZXQgfHwgb3B0aW9ucy5sYW5ndWFnZXMgfHwgT2JqZWN0LmtleXMobGFuZ3VhZ2VzKTtcbiAgICBjb25zdCBwbGFpbnRleHQgPSBqdXN0VGV4dEhpZ2hsaWdodFJlc3VsdChjb2RlKTtcblxuICAgIGNvbnN0IHJlc3VsdHMgPSBsYW5ndWFnZVN1YnNldC5maWx0ZXIoZ2V0TGFuZ3VhZ2UpLmZpbHRlcihhdXRvRGV0ZWN0aW9uKS5tYXAobmFtZSA9PlxuICAgICAgX2hpZ2hsaWdodChuYW1lLCBjb2RlLCBmYWxzZSlcbiAgICApO1xuICAgIHJlc3VsdHMudW5zaGlmdChwbGFpbnRleHQpOyAvLyBwbGFpbnRleHQgaXMgYWx3YXlzIGFuIG9wdGlvblxuXG4gICAgY29uc3Qgc29ydGVkID0gcmVzdWx0cy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAvLyBzb3J0IGJhc2Ugb24gcmVsZXZhbmNlXG4gICAgICBpZiAoYS5yZWxldmFuY2UgIT09IGIucmVsZXZhbmNlKSByZXR1cm4gYi5yZWxldmFuY2UgLSBhLnJlbGV2YW5jZTtcblxuICAgICAgLy8gYWx3YXlzIGF3YXJkIHRoZSB0aWUgdG8gdGhlIGJhc2UgbGFuZ3VhZ2VcbiAgICAgIC8vIGllIGlmIEMrKyBhbmQgQXJkdWlubyBhcmUgdGllZCwgaXQncyBtb3JlIGxpa2VseSB0byBiZSBDKytcbiAgICAgIGlmIChhLmxhbmd1YWdlICYmIGIubGFuZ3VhZ2UpIHtcbiAgICAgICAgaWYgKGdldExhbmd1YWdlKGEubGFuZ3VhZ2UpLnN1cGVyc2V0T2YgPT09IGIubGFuZ3VhZ2UpIHtcbiAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfSBlbHNlIGlmIChnZXRMYW5ndWFnZShiLmxhbmd1YWdlKS5zdXBlcnNldE9mID09PSBhLmxhbmd1YWdlKSB7XG4gICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIG90aGVyd2lzZSBzYXkgdGhleSBhcmUgZXF1YWwsIHdoaWNoIGhhcyB0aGUgZWZmZWN0IG9mIHNvcnRpbmcgb25cbiAgICAgIC8vIHJlbGV2YW5jZSB3aGlsZSBwcmVzZXJ2aW5nIHRoZSBvcmlnaW5hbCBvcmRlcmluZyAtIHdoaWNoIGlzIGhvdyB0aWVzXG4gICAgICAvLyBoYXZlIGhpc3RvcmljYWxseSBiZWVuIHNldHRsZWQsIGllIHRoZSBsYW5ndWFnZSB0aGF0IGNvbWVzIGZpcnN0IGFsd2F5c1xuICAgICAgLy8gd2lucyBpbiB0aGUgY2FzZSBvZiBhIHRpZVxuICAgICAgcmV0dXJuIDA7XG4gICAgfSk7XG5cbiAgICBjb25zdCBbYmVzdCwgc2Vjb25kQmVzdF0gPSBzb3J0ZWQ7XG5cbiAgICAvKiogQHR5cGUge0F1dG9IaWdobGlnaHRSZXN1bHR9ICovXG4gICAgY29uc3QgcmVzdWx0ID0gYmVzdDtcbiAgICByZXN1bHQuc2Vjb25kX2Jlc3QgPSBzZWNvbmRCZXN0O1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8qKlxuICBQb3N0LXByb2Nlc3Npbmcgb2YgdGhlIGhpZ2hsaWdodGVkIG1hcmt1cDpcblxuICAtIHJlcGxhY2UgVEFCcyB3aXRoIHNvbWV0aGluZyBtb3JlIHVzZWZ1bFxuICAtIHJlcGxhY2UgcmVhbCBsaW5lLWJyZWFrcyB3aXRoICc8YnI+JyBmb3Igbm9uLXByZSBjb250YWluZXJzXG5cbiAgICBAcGFyYW0ge3N0cmluZ30gaHRtbFxuICAgIEByZXR1cm5zIHtzdHJpbmd9XG4gICovXG4gIGZ1bmN0aW9uIGZpeE1hcmt1cChodG1sKSB7XG4gICAgaWYgKCEob3B0aW9ucy50YWJSZXBsYWNlIHx8IG9wdGlvbnMudXNlQlIpKSB7XG4gICAgICByZXR1cm4gaHRtbDtcbiAgICB9XG5cbiAgICByZXR1cm4gaHRtbC5yZXBsYWNlKGZpeE1hcmt1cFJlLCBtYXRjaCA9PiB7XG4gICAgICBpZiAobWF0Y2ggPT09ICdcXG4nKSB7XG4gICAgICAgIHJldHVybiBvcHRpb25zLnVzZUJSID8gJzxicj4nIDogbWF0Y2g7XG4gICAgICB9IGVsc2UgaWYgKG9wdGlvbnMudGFiUmVwbGFjZSkge1xuICAgICAgICByZXR1cm4gbWF0Y2gucmVwbGFjZSgvXFx0L2csIG9wdGlvbnMudGFiUmVwbGFjZSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbWF0Y2g7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQnVpbGRzIG5ldyBjbGFzcyBuYW1lIGZvciBibG9jayBnaXZlbiB0aGUgbGFuZ3VhZ2UgbmFtZVxuICAgKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbY3VycmVudExhbmddXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbcmVzdWx0TGFuZ11cbiAgICovXG4gIGZ1bmN0aW9uIHVwZGF0ZUNsYXNzTmFtZShlbGVtZW50LCBjdXJyZW50TGFuZywgcmVzdWx0TGFuZykge1xuICAgIGNvbnN0IGxhbmd1YWdlID0gY3VycmVudExhbmcgPyBhbGlhc2VzW2N1cnJlbnRMYW5nXSA6IHJlc3VsdExhbmc7XG5cbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJobGpzXCIpO1xuICAgIGlmIChsYW5ndWFnZSkgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGxhbmd1YWdlKTtcbiAgfVxuXG4gIC8qKiBAdHlwZSB7SExKU1BsdWdpbn0gKi9cbiAgY29uc3QgYnJQbHVnaW4gPSB7XG4gICAgXCJiZWZvcmU6aGlnaGxpZ2h0RWxlbWVudFwiOiAoeyBlbCB9KSA9PiB7XG4gICAgICBpZiAob3B0aW9ucy51c2VCUikge1xuICAgICAgICBlbC5pbm5lckhUTUwgPSBlbC5pbm5lckhUTUwucmVwbGFjZSgvXFxuL2csICcnKS5yZXBsYWNlKC88YnJbIC9dKj4vZywgJ1xcbicpO1xuICAgICAgfVxuICAgIH0sXG4gICAgXCJhZnRlcjpoaWdobGlnaHRFbGVtZW50XCI6ICh7IHJlc3VsdCB9KSA9PiB7XG4gICAgICBpZiAob3B0aW9ucy51c2VCUikge1xuICAgICAgICByZXN1bHQudmFsdWUgPSByZXN1bHQudmFsdWUucmVwbGFjZSgvXFxuL2csIFwiPGJyPlwiKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgVEFCX1JFUExBQ0VfUkUgPSAvXig8W14+XSs+fFxcdCkrL2dtO1xuICAvKiogQHR5cGUge0hMSlNQbHVnaW59ICovXG4gIGNvbnN0IHRhYlJlcGxhY2VQbHVnaW4gPSB7XG4gICAgXCJhZnRlcjpoaWdobGlnaHRFbGVtZW50XCI6ICh7IHJlc3VsdCB9KSA9PiB7XG4gICAgICBpZiAob3B0aW9ucy50YWJSZXBsYWNlKSB7XG4gICAgICAgIHJlc3VsdC52YWx1ZSA9IHJlc3VsdC52YWx1ZS5yZXBsYWNlKFRBQl9SRVBMQUNFX1JFLCAobSkgPT5cbiAgICAgICAgICBtLnJlcGxhY2UoL1xcdC9nLCBvcHRpb25zLnRhYlJlcGxhY2UpXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBBcHBsaWVzIGhpZ2hsaWdodGluZyB0byBhIERPTSBub2RlIGNvbnRhaW5pbmcgY29kZS4gQWNjZXB0cyBhIERPTSBub2RlIGFuZFxuICAgKiB0d28gb3B0aW9uYWwgcGFyYW1ldGVycyBmb3IgZml4TWFya3VwLlxuICAgKlxuICAgKiBAcGFyYW0ge0hpZ2hsaWdodGVkSFRNTEVsZW1lbnR9IGVsZW1lbnQgLSB0aGUgSFRNTCBlbGVtZW50IHRvIGhpZ2hsaWdodFxuICAqL1xuICBmdW5jdGlvbiBoaWdobGlnaHRFbGVtZW50KGVsZW1lbnQpIHtcbiAgICAvKiogQHR5cGUgSFRNTEVsZW1lbnQgKi9cbiAgICBsZXQgbm9kZSA9IG51bGw7XG4gICAgY29uc3QgbGFuZ3VhZ2UgPSBibG9ja0xhbmd1YWdlKGVsZW1lbnQpO1xuXG4gICAgaWYgKHNob3VsZE5vdEhpZ2hsaWdodChsYW5ndWFnZSkpIHJldHVybjtcblxuICAgIC8vIHN1cHBvcnQgZm9yIHYxMCBBUElcbiAgICBmaXJlKFwiYmVmb3JlOmhpZ2hsaWdodEVsZW1lbnRcIixcbiAgICAgIHsgZWw6IGVsZW1lbnQsIGxhbmd1YWdlOiBsYW5ndWFnZSB9KTtcblxuICAgIG5vZGUgPSBlbGVtZW50O1xuICAgIGNvbnN0IHRleHQgPSBub2RlLnRleHRDb250ZW50O1xuICAgIGNvbnN0IHJlc3VsdCA9IGxhbmd1YWdlID8gaGlnaGxpZ2h0KHRleHQsIHsgbGFuZ3VhZ2UsIGlnbm9yZUlsbGVnYWxzOiB0cnVlIH0pIDogaGlnaGxpZ2h0QXV0byh0ZXh0KTtcblxuICAgIC8vIHN1cHBvcnQgZm9yIHYxMCBBUElcbiAgICBmaXJlKFwiYWZ0ZXI6aGlnaGxpZ2h0RWxlbWVudFwiLCB7IGVsOiBlbGVtZW50LCByZXN1bHQsIHRleHQgfSk7XG5cbiAgICBlbGVtZW50LmlubmVySFRNTCA9IHJlc3VsdC52YWx1ZTtcbiAgICB1cGRhdGVDbGFzc05hbWUoZWxlbWVudCwgbGFuZ3VhZ2UsIHJlc3VsdC5sYW5ndWFnZSk7XG4gICAgZWxlbWVudC5yZXN1bHQgPSB7XG4gICAgICBsYW5ndWFnZTogcmVzdWx0Lmxhbmd1YWdlLFxuICAgICAgLy8gVE9ETzogcmVtb3ZlIHdpdGggdmVyc2lvbiAxMS4wXG4gICAgICByZTogcmVzdWx0LnJlbGV2YW5jZSxcbiAgICAgIHJlbGF2YW5jZTogcmVzdWx0LnJlbGV2YW5jZVxuICAgIH07XG4gICAgaWYgKHJlc3VsdC5zZWNvbmRfYmVzdCkge1xuICAgICAgZWxlbWVudC5zZWNvbmRfYmVzdCA9IHtcbiAgICAgICAgbGFuZ3VhZ2U6IHJlc3VsdC5zZWNvbmRfYmVzdC5sYW5ndWFnZSxcbiAgICAgICAgLy8gVE9ETzogcmVtb3ZlIHdpdGggdmVyc2lvbiAxMS4wXG4gICAgICAgIHJlOiByZXN1bHQuc2Vjb25kX2Jlc3QucmVsZXZhbmNlLFxuICAgICAgICByZWxhdmFuY2U6IHJlc3VsdC5zZWNvbmRfYmVzdC5yZWxldmFuY2VcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgaGlnaGxpZ2h0LmpzIGdsb2JhbCBvcHRpb25zIHdpdGggdGhlIHBhc3NlZCBvcHRpb25zXG4gICAqXG4gICAqIEBwYXJhbSB7UGFydGlhbDxITEpTT3B0aW9ucz59IHVzZXJPcHRpb25zXG4gICAqL1xuICBmdW5jdGlvbiBjb25maWd1cmUodXNlck9wdGlvbnMpIHtcbiAgICBpZiAodXNlck9wdGlvbnMudXNlQlIpIHtcbiAgICAgIGRlcHJlY2F0ZWQoXCIxMC4zLjBcIiwgXCIndXNlQlInIHdpbGwgYmUgcmVtb3ZlZCBlbnRpcmVseSBpbiB2MTEuMFwiKTtcbiAgICAgIGRlcHJlY2F0ZWQoXCIxMC4zLjBcIiwgXCJQbGVhc2Ugc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9oaWdobGlnaHRqcy9oaWdobGlnaHQuanMvaXNzdWVzLzI1NTlcIik7XG4gICAgfVxuICAgIG9wdGlvbnMgPSBpbmhlcml0JDEob3B0aW9ucywgdXNlck9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEhpZ2hsaWdodHMgdG8gYWxsIDxwcmU+PGNvZGU+IGJsb2NrcyBvbiBhIHBhZ2VcbiAgICpcbiAgICogQHR5cGUge0Z1bmN0aW9uICYge2NhbGxlZD86IGJvb2xlYW59fVxuICAgKi9cbiAgLy8gVE9ETzogcmVtb3ZlIHYxMiwgZGVwcmVjYXRlZFxuICBjb25zdCBpbml0SGlnaGxpZ2h0aW5nID0gKCkgPT4ge1xuICAgIGlmIChpbml0SGlnaGxpZ2h0aW5nLmNhbGxlZCkgcmV0dXJuO1xuICAgIGluaXRIaWdobGlnaHRpbmcuY2FsbGVkID0gdHJ1ZTtcblxuICAgIGRlcHJlY2F0ZWQoXCIxMC42LjBcIiwgXCJpbml0SGlnaGxpZ2h0aW5nKCkgaXMgZGVwcmVjYXRlZC4gIFVzZSBoaWdobGlnaHRBbGwoKSBpbnN0ZWFkLlwiKTtcblxuICAgIGNvbnN0IGJsb2NrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3ByZSBjb2RlJyk7XG4gICAgYmxvY2tzLmZvckVhY2goaGlnaGxpZ2h0RWxlbWVudCk7XG4gIH07XG5cbiAgLy8gSGlnbGlnaHRzIGFsbCB3aGVuIERPTUNvbnRlbnRMb2FkZWQgZmlyZXNcbiAgLy8gVE9ETzogcmVtb3ZlIHYxMiwgZGVwcmVjYXRlZFxuICBmdW5jdGlvbiBpbml0SGlnaGxpZ2h0aW5nT25Mb2FkKCkge1xuICAgIGRlcHJlY2F0ZWQoXCIxMC42LjBcIiwgXCJpbml0SGlnaGxpZ2h0aW5nT25Mb2FkKCkgaXMgZGVwcmVjYXRlZC4gIFVzZSBoaWdobGlnaHRBbGwoKSBpbnN0ZWFkLlwiKTtcbiAgICB3YW50c0hpZ2hsaWdodCA9IHRydWU7XG4gIH1cblxuICBsZXQgd2FudHNIaWdobGlnaHQgPSBmYWxzZTtcblxuICAvKipcbiAgICogYXV0by1oaWdobGlnaHRzIGFsbCBwcmU+Y29kZSBlbGVtZW50cyBvbiB0aGUgcGFnZVxuICAgKi9cbiAgZnVuY3Rpb24gaGlnaGxpZ2h0QWxsKCkge1xuICAgIC8vIGlmIHdlIGFyZSBjYWxsZWQgdG9vIGVhcmx5IGluIHRoZSBsb2FkaW5nIHByb2Nlc3NcbiAgICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gXCJsb2FkaW5nXCIpIHtcbiAgICAgIHdhbnRzSGlnaGxpZ2h0ID0gdHJ1ZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBibG9ja3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdwcmUgY29kZScpO1xuICAgIGJsb2Nrcy5mb3JFYWNoKGhpZ2hsaWdodEVsZW1lbnQpO1xuICB9XG5cbiAgZnVuY3Rpb24gYm9vdCgpIHtcbiAgICAvLyBpZiBhIGhpZ2hsaWdodCB3YXMgcmVxdWVzdGVkIGJlZm9yZSBET00gd2FzIGxvYWRlZCwgZG8gbm93XG4gICAgaWYgKHdhbnRzSGlnaGxpZ2h0KSBoaWdobGlnaHRBbGwoKTtcbiAgfVxuXG4gIC8vIG1ha2Ugc3VyZSB3ZSBhcmUgaW4gdGhlIGJyb3dzZXIgZW52aXJvbm1lbnRcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBib290LCBmYWxzZSk7XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXIgYSBsYW5ndWFnZSBncmFtbWFyIG1vZHVsZVxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbGFuZ3VhZ2VOYW1lXG4gICAqIEBwYXJhbSB7TGFuZ3VhZ2VGbn0gbGFuZ3VhZ2VEZWZpbml0aW9uXG4gICAqL1xuICBmdW5jdGlvbiByZWdpc3Rlckxhbmd1YWdlKGxhbmd1YWdlTmFtZSwgbGFuZ3VhZ2VEZWZpbml0aW9uKSB7XG4gICAgbGV0IGxhbmcgPSBudWxsO1xuICAgIHRyeSB7XG4gICAgICBsYW5nID0gbGFuZ3VhZ2VEZWZpbml0aW9uKGhsanMpO1xuICAgIH0gY2F0Y2ggKGVycm9yJDEpIHtcbiAgICAgIGVycm9yKFwiTGFuZ3VhZ2UgZGVmaW5pdGlvbiBmb3IgJ3t9JyBjb3VsZCBub3QgYmUgcmVnaXN0ZXJlZC5cIi5yZXBsYWNlKFwie31cIiwgbGFuZ3VhZ2VOYW1lKSk7XG4gICAgICAvLyBoYXJkIG9yIHNvZnQgZXJyb3JcbiAgICAgIGlmICghU0FGRV9NT0RFKSB7IHRocm93IGVycm9yJDE7IH0gZWxzZSB7IGVycm9yKGVycm9yJDEpOyB9XG4gICAgICAvLyBsYW5ndWFnZXMgdGhhdCBoYXZlIHNlcmlvdXMgZXJyb3JzIGFyZSByZXBsYWNlZCB3aXRoIGVzc2VudGlhbGx5IGFcbiAgICAgIC8vIFwicGxhaW50ZXh0XCIgc3RhbmQtaW4gc28gdGhhdCB0aGUgY29kZSBibG9ja3Mgd2lsbCBzdGlsbCBnZXQgbm9ybWFsXG4gICAgICAvLyBjc3MgY2xhc3NlcyBhcHBsaWVkIHRvIHRoZW0gLSBhbmQgb25lIGJhZCBsYW5ndWFnZSB3b24ndCBicmVhayB0aGVcbiAgICAgIC8vIGVudGlyZSBoaWdobGlnaHRlclxuICAgICAgbGFuZyA9IFBMQUlOVEVYVF9MQU5HVUFHRTtcbiAgICB9XG4gICAgLy8gZ2l2ZSBpdCBhIHRlbXBvcmFyeSBuYW1lIGlmIGl0IGRvZXNuJ3QgaGF2ZSBvbmUgaW4gdGhlIG1ldGEtZGF0YVxuICAgIGlmICghbGFuZy5uYW1lKSBsYW5nLm5hbWUgPSBsYW5ndWFnZU5hbWU7XG4gICAgbGFuZ3VhZ2VzW2xhbmd1YWdlTmFtZV0gPSBsYW5nO1xuICAgIGxhbmcucmF3RGVmaW5pdGlvbiA9IGxhbmd1YWdlRGVmaW5pdGlvbi5iaW5kKG51bGwsIGhsanMpO1xuXG4gICAgaWYgKGxhbmcuYWxpYXNlcykge1xuICAgICAgcmVnaXN0ZXJBbGlhc2VzKGxhbmcuYWxpYXNlcywgeyBsYW5ndWFnZU5hbWUgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBhIGxhbmd1YWdlIGdyYW1tYXIgbW9kdWxlXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBsYW5ndWFnZU5hbWVcbiAgICovXG4gIGZ1bmN0aW9uIHVucmVnaXN0ZXJMYW5ndWFnZShsYW5ndWFnZU5hbWUpIHtcbiAgICBkZWxldGUgbGFuZ3VhZ2VzW2xhbmd1YWdlTmFtZV07XG4gICAgZm9yIChjb25zdCBhbGlhcyBvZiBPYmplY3Qua2V5cyhhbGlhc2VzKSkge1xuICAgICAgaWYgKGFsaWFzZXNbYWxpYXNdID09PSBsYW5ndWFnZU5hbWUpIHtcbiAgICAgICAgZGVsZXRlIGFsaWFzZXNbYWxpYXNdO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJucyB7c3RyaW5nW119IExpc3Qgb2YgbGFuZ3VhZ2UgaW50ZXJuYWwgbmFtZXNcbiAgICovXG4gIGZ1bmN0aW9uIGxpc3RMYW5ndWFnZXMoKSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGxhbmd1YWdlcyk7XG4gIH1cblxuICAvKipcbiAgICBpbnRlbmRlZCB1c2FnZTogV2hlbiBvbmUgbGFuZ3VhZ2UgdHJ1bHkgcmVxdWlyZXMgYW5vdGhlclxuXG4gICAgVW5saWtlIGBnZXRMYW5ndWFnZWAsIHRoaXMgd2lsbCB0aHJvdyB3aGVuIHRoZSByZXF1ZXN0ZWQgbGFuZ3VhZ2VcbiAgICBpcyBub3QgYXZhaWxhYmxlLlxuXG4gICAgQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSBuYW1lIG9mIHRoZSBsYW5ndWFnZSB0byBmZXRjaC9yZXF1aXJlXG4gICAgQHJldHVybnMge0xhbmd1YWdlIHwgbmV2ZXJ9XG4gICovXG4gIGZ1bmN0aW9uIHJlcXVpcmVMYW5ndWFnZShuYW1lKSB7XG4gICAgZGVwcmVjYXRlZChcIjEwLjQuMFwiLCBcInJlcXVpcmVMYW5ndWFnZSB3aWxsIGJlIHJlbW92ZWQgZW50aXJlbHkgaW4gdjExLlwiKTtcbiAgICBkZXByZWNhdGVkKFwiMTAuNC4wXCIsIFwiUGxlYXNlIHNlZSBodHRwczovL2dpdGh1Yi5jb20vaGlnaGxpZ2h0anMvaGlnaGxpZ2h0LmpzL3B1bGwvMjg0NFwiKTtcblxuICAgIGNvbnN0IGxhbmcgPSBnZXRMYW5ndWFnZShuYW1lKTtcbiAgICBpZiAobGFuZykgeyByZXR1cm4gbGFuZzsgfVxuXG4gICAgY29uc3QgZXJyID0gbmV3IEVycm9yKCdUaGUgXFwne31cXCcgbGFuZ3VhZ2UgaXMgcmVxdWlyZWQsIGJ1dCBub3QgbG9hZGVkLicucmVwbGFjZSgne30nLCBuYW1lKSk7XG4gICAgdGhyb3cgZXJyO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gbmFtZSBvZiB0aGUgbGFuZ3VhZ2UgdG8gcmV0cmlldmVcbiAgICogQHJldHVybnMge0xhbmd1YWdlIHwgdW5kZWZpbmVkfVxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0TGFuZ3VhZ2UobmFtZSkge1xuICAgIG5hbWUgPSAobmFtZSB8fCAnJykudG9Mb3dlckNhc2UoKTtcbiAgICByZXR1cm4gbGFuZ3VhZ2VzW25hbWVdIHx8IGxhbmd1YWdlc1thbGlhc2VzW25hbWVdXTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXX0gYWxpYXNMaXN0IC0gc2luZ2xlIGFsaWFzIG9yIGxpc3Qgb2YgYWxpYXNlc1xuICAgKiBAcGFyYW0ge3tsYW5ndWFnZU5hbWU6IHN0cmluZ319IG9wdHNcbiAgICovXG4gIGZ1bmN0aW9uIHJlZ2lzdGVyQWxpYXNlcyhhbGlhc0xpc3QsIHsgbGFuZ3VhZ2VOYW1lIH0pIHtcbiAgICBpZiAodHlwZW9mIGFsaWFzTGlzdCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGFsaWFzTGlzdCA9IFthbGlhc0xpc3RdO1xuICAgIH1cbiAgICBhbGlhc0xpc3QuZm9yRWFjaChhbGlhcyA9PiB7IGFsaWFzZXNbYWxpYXMudG9Mb3dlckNhc2UoKV0gPSBsYW5ndWFnZU5hbWU7IH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgaWYgYSBnaXZlbiBsYW5ndWFnZSBoYXMgYXV0by1kZXRlY3Rpb24gZW5hYmxlZFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIG5hbWUgb2YgdGhlIGxhbmd1YWdlXG4gICAqL1xuICBmdW5jdGlvbiBhdXRvRGV0ZWN0aW9uKG5hbWUpIHtcbiAgICBjb25zdCBsYW5nID0gZ2V0TGFuZ3VhZ2UobmFtZSk7XG4gICAgcmV0dXJuIGxhbmcgJiYgIWxhbmcuZGlzYWJsZUF1dG9kZXRlY3Q7XG4gIH1cblxuICAvKipcbiAgICogVXBncmFkZXMgdGhlIG9sZCBoaWdobGlnaHRCbG9jayBwbHVnaW5zIHRvIHRoZSBuZXdcbiAgICogaGlnaGxpZ2h0RWxlbWVudCBBUElcbiAgICogQHBhcmFtIHtITEpTUGx1Z2lufSBwbHVnaW5cbiAgICovXG4gIGZ1bmN0aW9uIHVwZ3JhZGVQbHVnaW5BUEkocGx1Z2luKSB7XG4gICAgLy8gVE9ETzogcmVtb3ZlIHdpdGggdjEyXG4gICAgaWYgKHBsdWdpbltcImJlZm9yZTpoaWdobGlnaHRCbG9ja1wiXSAmJiAhcGx1Z2luW1wiYmVmb3JlOmhpZ2hsaWdodEVsZW1lbnRcIl0pIHtcbiAgICAgIHBsdWdpbltcImJlZm9yZTpoaWdobGlnaHRFbGVtZW50XCJdID0gKGRhdGEpID0+IHtcbiAgICAgICAgcGx1Z2luW1wiYmVmb3JlOmhpZ2hsaWdodEJsb2NrXCJdKFxuICAgICAgICAgIE9iamVjdC5hc3NpZ24oeyBibG9jazogZGF0YS5lbCB9LCBkYXRhKVxuICAgICAgICApO1xuICAgICAgfTtcbiAgICB9XG4gICAgaWYgKHBsdWdpbltcImFmdGVyOmhpZ2hsaWdodEJsb2NrXCJdICYmICFwbHVnaW5bXCJhZnRlcjpoaWdobGlnaHRFbGVtZW50XCJdKSB7XG4gICAgICBwbHVnaW5bXCJhZnRlcjpoaWdobGlnaHRFbGVtZW50XCJdID0gKGRhdGEpID0+IHtcbiAgICAgICAgcGx1Z2luW1wiYWZ0ZXI6aGlnaGxpZ2h0QmxvY2tcIl0oXG4gICAgICAgICAgT2JqZWN0LmFzc2lnbih7IGJsb2NrOiBkYXRhLmVsIH0sIGRhdGEpXG4gICAgICAgICk7XG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0hMSlNQbHVnaW59IHBsdWdpblxuICAgKi9cbiAgZnVuY3Rpb24gYWRkUGx1Z2luKHBsdWdpbikge1xuICAgIHVwZ3JhZGVQbHVnaW5BUEkocGx1Z2luKTtcbiAgICBwbHVnaW5zLnB1c2gocGx1Z2luKTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0ge1BsdWdpbkV2ZW50fSBldmVudFxuICAgKiBAcGFyYW0ge2FueX0gYXJnc1xuICAgKi9cbiAgZnVuY3Rpb24gZmlyZShldmVudCwgYXJncykge1xuICAgIGNvbnN0IGNiID0gZXZlbnQ7XG4gICAgcGx1Z2lucy5mb3JFYWNoKGZ1bmN0aW9uKHBsdWdpbikge1xuICAgICAgaWYgKHBsdWdpbltjYl0pIHtcbiAgICAgICAgcGx1Z2luW2NiXShhcmdzKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICBOb3RlOiBmaXhNYXJrdXAgaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGVudGlyZWx5IGluIHYxMVxuXG4gIEBwYXJhbSB7c3RyaW5nfSBhcmdcbiAgQHJldHVybnMge3N0cmluZ31cbiAgKi9cbiAgZnVuY3Rpb24gZGVwcmVjYXRlRml4TWFya3VwKGFyZykge1xuICAgIGRlcHJlY2F0ZWQoXCIxMC4yLjBcIiwgXCJmaXhNYXJrdXAgd2lsbCBiZSByZW1vdmVkIGVudGlyZWx5IGluIHYxMS4wXCIpO1xuICAgIGRlcHJlY2F0ZWQoXCIxMC4yLjBcIiwgXCJQbGVhc2Ugc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9oaWdobGlnaHRqcy9oaWdobGlnaHQuanMvaXNzdWVzLzI1MzRcIik7XG5cbiAgICByZXR1cm4gZml4TWFya3VwKGFyZyk7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIHtIaWdobGlnaHRlZEhUTUxFbGVtZW50fSBlbFxuICAgKi9cbiAgZnVuY3Rpb24gZGVwcmVjYXRlSGlnaGxpZ2h0QmxvY2soZWwpIHtcbiAgICBkZXByZWNhdGVkKFwiMTAuNy4wXCIsIFwiaGlnaGxpZ2h0QmxvY2sgd2lsbCBiZSByZW1vdmVkIGVudGlyZWx5IGluIHYxMi4wXCIpO1xuICAgIGRlcHJlY2F0ZWQoXCIxMC43LjBcIiwgXCJQbGVhc2UgdXNlIGhpZ2hsaWdodEVsZW1lbnQgbm93LlwiKTtcblxuICAgIHJldHVybiBoaWdobGlnaHRFbGVtZW50KGVsKTtcbiAgfVxuXG4gIC8qIEludGVyZmFjZSBkZWZpbml0aW9uICovXG4gIE9iamVjdC5hc3NpZ24oaGxqcywge1xuICAgIGhpZ2hsaWdodCxcbiAgICBoaWdobGlnaHRBdXRvLFxuICAgIGhpZ2hsaWdodEFsbCxcbiAgICBmaXhNYXJrdXA6IGRlcHJlY2F0ZUZpeE1hcmt1cCxcbiAgICBoaWdobGlnaHRFbGVtZW50LFxuICAgIC8vIFRPRE86IFJlbW92ZSB3aXRoIHYxMiBBUElcbiAgICBoaWdobGlnaHRCbG9jazogZGVwcmVjYXRlSGlnaGxpZ2h0QmxvY2ssXG4gICAgY29uZmlndXJlLFxuICAgIGluaXRIaWdobGlnaHRpbmcsXG4gICAgaW5pdEhpZ2hsaWdodGluZ09uTG9hZCxcbiAgICByZWdpc3Rlckxhbmd1YWdlLFxuICAgIHVucmVnaXN0ZXJMYW5ndWFnZSxcbiAgICBsaXN0TGFuZ3VhZ2VzLFxuICAgIGdldExhbmd1YWdlLFxuICAgIHJlZ2lzdGVyQWxpYXNlcyxcbiAgICByZXF1aXJlTGFuZ3VhZ2UsXG4gICAgYXV0b0RldGVjdGlvbixcbiAgICBpbmhlcml0OiBpbmhlcml0JDEsXG4gICAgYWRkUGx1Z2luLFxuICAgIC8vIHBsdWdpbnMgZm9yIGZyYW1ld29ya3NcbiAgICB2dWVQbHVnaW46IEJ1aWxkVnVlUGx1Z2luKGhsanMpLlZ1ZVBsdWdpblxuICB9KTtcblxuICBobGpzLmRlYnVnTW9kZSA9IGZ1bmN0aW9uKCkgeyBTQUZFX01PREUgPSBmYWxzZTsgfTtcbiAgaGxqcy5zYWZlTW9kZSA9IGZ1bmN0aW9uKCkgeyBTQUZFX01PREUgPSB0cnVlOyB9O1xuICBobGpzLnZlcnNpb25TdHJpbmcgPSB2ZXJzaW9uO1xuXG4gIGZvciAoY29uc3Qga2V5IGluIE1PREVTKSB7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGlmICh0eXBlb2YgTU9ERVNba2V5XSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgZGVlcEZyZWV6ZUVzNihNT0RFU1trZXldKTtcbiAgICB9XG4gIH1cblxuICAvLyBtZXJnZSBhbGwgdGhlIG1vZGVzL3JlZ2V4cyBpbnRvIG91ciBtYWluIG9iamVjdFxuICBPYmplY3QuYXNzaWduKGhsanMsIE1PREVTKTtcblxuICAvLyBidWlsdC1pbiBwbHVnaW5zLCBsaWtlbHkgdG8gYmUgbW92ZWQgb3V0IG9mIGNvcmUgaW4gdGhlIGZ1dHVyZVxuICBobGpzLmFkZFBsdWdpbihiclBsdWdpbik7IC8vIHNsYXRlZCB0byBiZSByZW1vdmVkIGluIHYxMVxuICBobGpzLmFkZFBsdWdpbihtZXJnZUhUTUxQbHVnaW4pO1xuICBobGpzLmFkZFBsdWdpbih0YWJSZXBsYWNlUGx1Z2luKTtcbiAgcmV0dXJuIGhsanM7XG59O1xuXG4vLyBleHBvcnQgYW4gXCJpbnN0YW5jZVwiIG9mIHRoZSBoaWdobGlnaHRlclxudmFyIGhpZ2hsaWdodCA9IEhMSlMoe30pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGhpZ2hsaWdodDtcbiIsImNvbnN0IE1PREVTID0gKGhsanMpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBJTVBPUlRBTlQ6IHtcbiAgICAgIGNsYXNzTmFtZTogJ21ldGEnLFxuICAgICAgYmVnaW46ICchaW1wb3J0YW50J1xuICAgIH0sXG4gICAgSEVYQ09MT1I6IHtcbiAgICAgIGNsYXNzTmFtZTogJ251bWJlcicsXG4gICAgICBiZWdpbjogJyMoW2EtZkEtRjAtOV17Nn18W2EtZkEtRjAtOV17M30pJ1xuICAgIH0sXG4gICAgQVRUUklCVVRFX1NFTEVDVE9SX01PREU6IHtcbiAgICAgIGNsYXNzTmFtZTogJ3NlbGVjdG9yLWF0dHInLFxuICAgICAgYmVnaW46IC9cXFsvLFxuICAgICAgZW5kOiAvXFxdLyxcbiAgICAgIGlsbGVnYWw6ICckJyxcbiAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgIGhsanMuQVBPU19TVFJJTkdfTU9ERSxcbiAgICAgICAgaGxqcy5RVU9URV9TVFJJTkdfTU9ERVxuICAgICAgXVxuICAgIH1cbiAgfTtcbn07XG5cbmNvbnN0IFRBR1MgPSBbXG4gICdhJyxcbiAgJ2FiYnInLFxuICAnYWRkcmVzcycsXG4gICdhcnRpY2xlJyxcbiAgJ2FzaWRlJyxcbiAgJ2F1ZGlvJyxcbiAgJ2InLFxuICAnYmxvY2txdW90ZScsXG4gICdib2R5JyxcbiAgJ2J1dHRvbicsXG4gICdjYW52YXMnLFxuICAnY2FwdGlvbicsXG4gICdjaXRlJyxcbiAgJ2NvZGUnLFxuICAnZGQnLFxuICAnZGVsJyxcbiAgJ2RldGFpbHMnLFxuICAnZGZuJyxcbiAgJ2RpdicsXG4gICdkbCcsXG4gICdkdCcsXG4gICdlbScsXG4gICdmaWVsZHNldCcsXG4gICdmaWdjYXB0aW9uJyxcbiAgJ2ZpZ3VyZScsXG4gICdmb290ZXInLFxuICAnZm9ybScsXG4gICdoMScsXG4gICdoMicsXG4gICdoMycsXG4gICdoNCcsXG4gICdoNScsXG4gICdoNicsXG4gICdoZWFkZXInLFxuICAnaGdyb3VwJyxcbiAgJ2h0bWwnLFxuICAnaScsXG4gICdpZnJhbWUnLFxuICAnaW1nJyxcbiAgJ2lucHV0JyxcbiAgJ2lucycsXG4gICdrYmQnLFxuICAnbGFiZWwnLFxuICAnbGVnZW5kJyxcbiAgJ2xpJyxcbiAgJ21haW4nLFxuICAnbWFyaycsXG4gICdtZW51JyxcbiAgJ25hdicsXG4gICdvYmplY3QnLFxuICAnb2wnLFxuICAncCcsXG4gICdxJyxcbiAgJ3F1b3RlJyxcbiAgJ3NhbXAnLFxuICAnc2VjdGlvbicsXG4gICdzcGFuJyxcbiAgJ3N0cm9uZycsXG4gICdzdW1tYXJ5JyxcbiAgJ3N1cCcsXG4gICd0YWJsZScsXG4gICd0Ym9keScsXG4gICd0ZCcsXG4gICd0ZXh0YXJlYScsXG4gICd0Zm9vdCcsXG4gICd0aCcsXG4gICd0aGVhZCcsXG4gICd0aW1lJyxcbiAgJ3RyJyxcbiAgJ3VsJyxcbiAgJ3ZhcicsXG4gICd2aWRlbydcbl07XG5cbmNvbnN0IE1FRElBX0ZFQVRVUkVTID0gW1xuICAnYW55LWhvdmVyJyxcbiAgJ2FueS1wb2ludGVyJyxcbiAgJ2FzcGVjdC1yYXRpbycsXG4gICdjb2xvcicsXG4gICdjb2xvci1nYW11dCcsXG4gICdjb2xvci1pbmRleCcsXG4gICdkZXZpY2UtYXNwZWN0LXJhdGlvJyxcbiAgJ2RldmljZS1oZWlnaHQnLFxuICAnZGV2aWNlLXdpZHRoJyxcbiAgJ2Rpc3BsYXktbW9kZScsXG4gICdmb3JjZWQtY29sb3JzJyxcbiAgJ2dyaWQnLFxuICAnaGVpZ2h0JyxcbiAgJ2hvdmVyJyxcbiAgJ2ludmVydGVkLWNvbG9ycycsXG4gICdtb25vY2hyb21lJyxcbiAgJ29yaWVudGF0aW9uJyxcbiAgJ292ZXJmbG93LWJsb2NrJyxcbiAgJ292ZXJmbG93LWlubGluZScsXG4gICdwb2ludGVyJyxcbiAgJ3ByZWZlcnMtY29sb3Itc2NoZW1lJyxcbiAgJ3ByZWZlcnMtY29udHJhc3QnLFxuICAncHJlZmVycy1yZWR1Y2VkLW1vdGlvbicsXG4gICdwcmVmZXJzLXJlZHVjZWQtdHJhbnNwYXJlbmN5JyxcbiAgJ3Jlc29sdXRpb24nLFxuICAnc2NhbicsXG4gICdzY3JpcHRpbmcnLFxuICAndXBkYXRlJyxcbiAgJ3dpZHRoJyxcbiAgLy8gVE9ETzogZmluZCBhIGJldHRlciBzb2x1dGlvbj9cbiAgJ21pbi13aWR0aCcsXG4gICdtYXgtd2lkdGgnLFxuICAnbWluLWhlaWdodCcsXG4gICdtYXgtaGVpZ2h0J1xuXTtcblxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL1BzZXVkby1jbGFzc2VzXG5jb25zdCBQU0VVRE9fQ0xBU1NFUyA9IFtcbiAgJ2FjdGl2ZScsXG4gICdhbnktbGluaycsXG4gICdibGFuaycsXG4gICdjaGVja2VkJyxcbiAgJ2N1cnJlbnQnLFxuICAnZGVmYXVsdCcsXG4gICdkZWZpbmVkJyxcbiAgJ2RpcicsIC8vIGRpcigpXG4gICdkaXNhYmxlZCcsXG4gICdkcm9wJyxcbiAgJ2VtcHR5JyxcbiAgJ2VuYWJsZWQnLFxuICAnZmlyc3QnLFxuICAnZmlyc3QtY2hpbGQnLFxuICAnZmlyc3Qtb2YtdHlwZScsXG4gICdmdWxsc2NyZWVuJyxcbiAgJ2Z1dHVyZScsXG4gICdmb2N1cycsXG4gICdmb2N1cy12aXNpYmxlJyxcbiAgJ2ZvY3VzLXdpdGhpbicsXG4gICdoYXMnLCAvLyBoYXMoKVxuICAnaG9zdCcsIC8vIGhvc3Qgb3IgaG9zdCgpXG4gICdob3N0LWNvbnRleHQnLCAvLyBob3N0LWNvbnRleHQoKVxuICAnaG92ZXInLFxuICAnaW5kZXRlcm1pbmF0ZScsXG4gICdpbi1yYW5nZScsXG4gICdpbnZhbGlkJyxcbiAgJ2lzJywgLy8gaXMoKVxuICAnbGFuZycsIC8vIGxhbmcoKVxuICAnbGFzdC1jaGlsZCcsXG4gICdsYXN0LW9mLXR5cGUnLFxuICAnbGVmdCcsXG4gICdsaW5rJyxcbiAgJ2xvY2FsLWxpbmsnLFxuICAnbm90JywgLy8gbm90KClcbiAgJ250aC1jaGlsZCcsIC8vIG50aC1jaGlsZCgpXG4gICdudGgtY29sJywgLy8gbnRoLWNvbCgpXG4gICdudGgtbGFzdC1jaGlsZCcsIC8vIG50aC1sYXN0LWNoaWxkKClcbiAgJ250aC1sYXN0LWNvbCcsIC8vIG50aC1sYXN0LWNvbCgpXG4gICdudGgtbGFzdC1vZi10eXBlJywgLy9udGgtbGFzdC1vZi10eXBlKClcbiAgJ250aC1vZi10eXBlJywgLy9udGgtb2YtdHlwZSgpXG4gICdvbmx5LWNoaWxkJyxcbiAgJ29ubHktb2YtdHlwZScsXG4gICdvcHRpb25hbCcsXG4gICdvdXQtb2YtcmFuZ2UnLFxuICAncGFzdCcsXG4gICdwbGFjZWhvbGRlci1zaG93bicsXG4gICdyZWFkLW9ubHknLFxuICAncmVhZC13cml0ZScsXG4gICdyZXF1aXJlZCcsXG4gICdyaWdodCcsXG4gICdyb290JyxcbiAgJ3Njb3BlJyxcbiAgJ3RhcmdldCcsXG4gICd0YXJnZXQtd2l0aGluJyxcbiAgJ3VzZXItaW52YWxpZCcsXG4gICd2YWxpZCcsXG4gICd2aXNpdGVkJyxcbiAgJ3doZXJlJyAvLyB3aGVyZSgpXG5dO1xuXG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvUHNldWRvLWVsZW1lbnRzXG5jb25zdCBQU0VVRE9fRUxFTUVOVFMgPSBbXG4gICdhZnRlcicsXG4gICdiYWNrZHJvcCcsXG4gICdiZWZvcmUnLFxuICAnY3VlJyxcbiAgJ2N1ZS1yZWdpb24nLFxuICAnZmlyc3QtbGV0dGVyJyxcbiAgJ2ZpcnN0LWxpbmUnLFxuICAnZ3JhbW1hci1lcnJvcicsXG4gICdtYXJrZXInLFxuICAncGFydCcsXG4gICdwbGFjZWhvbGRlcicsXG4gICdzZWxlY3Rpb24nLFxuICAnc2xvdHRlZCcsXG4gICdzcGVsbGluZy1lcnJvcidcbl07XG5cbmNvbnN0IEFUVFJJQlVURVMgPSBbXG4gICdhbGlnbi1jb250ZW50JyxcbiAgJ2FsaWduLWl0ZW1zJyxcbiAgJ2FsaWduLXNlbGYnLFxuICAnYW5pbWF0aW9uJyxcbiAgJ2FuaW1hdGlvbi1kZWxheScsXG4gICdhbmltYXRpb24tZGlyZWN0aW9uJyxcbiAgJ2FuaW1hdGlvbi1kdXJhdGlvbicsXG4gICdhbmltYXRpb24tZmlsbC1tb2RlJyxcbiAgJ2FuaW1hdGlvbi1pdGVyYXRpb24tY291bnQnLFxuICAnYW5pbWF0aW9uLW5hbWUnLFxuICAnYW5pbWF0aW9uLXBsYXktc3RhdGUnLFxuICAnYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbicsXG4gICdhdXRvJyxcbiAgJ2JhY2tmYWNlLXZpc2liaWxpdHknLFxuICAnYmFja2dyb3VuZCcsXG4gICdiYWNrZ3JvdW5kLWF0dGFjaG1lbnQnLFxuICAnYmFja2dyb3VuZC1jbGlwJyxcbiAgJ2JhY2tncm91bmQtY29sb3InLFxuICAnYmFja2dyb3VuZC1pbWFnZScsXG4gICdiYWNrZ3JvdW5kLW9yaWdpbicsXG4gICdiYWNrZ3JvdW5kLXBvc2l0aW9uJyxcbiAgJ2JhY2tncm91bmQtcmVwZWF0JyxcbiAgJ2JhY2tncm91bmQtc2l6ZScsXG4gICdib3JkZXInLFxuICAnYm9yZGVyLWJvdHRvbScsXG4gICdib3JkZXItYm90dG9tLWNvbG9yJyxcbiAgJ2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXMnLFxuICAnYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXMnLFxuICAnYm9yZGVyLWJvdHRvbS1zdHlsZScsXG4gICdib3JkZXItYm90dG9tLXdpZHRoJyxcbiAgJ2JvcmRlci1jb2xsYXBzZScsXG4gICdib3JkZXItY29sb3InLFxuICAnYm9yZGVyLWltYWdlJyxcbiAgJ2JvcmRlci1pbWFnZS1vdXRzZXQnLFxuICAnYm9yZGVyLWltYWdlLXJlcGVhdCcsXG4gICdib3JkZXItaW1hZ2Utc2xpY2UnLFxuICAnYm9yZGVyLWltYWdlLXNvdXJjZScsXG4gICdib3JkZXItaW1hZ2Utd2lkdGgnLFxuICAnYm9yZGVyLWxlZnQnLFxuICAnYm9yZGVyLWxlZnQtY29sb3InLFxuICAnYm9yZGVyLWxlZnQtc3R5bGUnLFxuICAnYm9yZGVyLWxlZnQtd2lkdGgnLFxuICAnYm9yZGVyLXJhZGl1cycsXG4gICdib3JkZXItcmlnaHQnLFxuICAnYm9yZGVyLXJpZ2h0LWNvbG9yJyxcbiAgJ2JvcmRlci1yaWdodC1zdHlsZScsXG4gICdib3JkZXItcmlnaHQtd2lkdGgnLFxuICAnYm9yZGVyLXNwYWNpbmcnLFxuICAnYm9yZGVyLXN0eWxlJyxcbiAgJ2JvcmRlci10b3AnLFxuICAnYm9yZGVyLXRvcC1jb2xvcicsXG4gICdib3JkZXItdG9wLWxlZnQtcmFkaXVzJyxcbiAgJ2JvcmRlci10b3AtcmlnaHQtcmFkaXVzJyxcbiAgJ2JvcmRlci10b3Atc3R5bGUnLFxuICAnYm9yZGVyLXRvcC13aWR0aCcsXG4gICdib3JkZXItd2lkdGgnLFxuICAnYm90dG9tJyxcbiAgJ2JveC1kZWNvcmF0aW9uLWJyZWFrJyxcbiAgJ2JveC1zaGFkb3cnLFxuICAnYm94LXNpemluZycsXG4gICdicmVhay1hZnRlcicsXG4gICdicmVhay1iZWZvcmUnLFxuICAnYnJlYWstaW5zaWRlJyxcbiAgJ2NhcHRpb24tc2lkZScsXG4gICdjbGVhcicsXG4gICdjbGlwJyxcbiAgJ2NsaXAtcGF0aCcsXG4gICdjb2xvcicsXG4gICdjb2x1bW4tY291bnQnLFxuICAnY29sdW1uLWZpbGwnLFxuICAnY29sdW1uLWdhcCcsXG4gICdjb2x1bW4tcnVsZScsXG4gICdjb2x1bW4tcnVsZS1jb2xvcicsXG4gICdjb2x1bW4tcnVsZS1zdHlsZScsXG4gICdjb2x1bW4tcnVsZS13aWR0aCcsXG4gICdjb2x1bW4tc3BhbicsXG4gICdjb2x1bW4td2lkdGgnLFxuICAnY29sdW1ucycsXG4gICdjb250ZW50JyxcbiAgJ2NvdW50ZXItaW5jcmVtZW50JyxcbiAgJ2NvdW50ZXItcmVzZXQnLFxuICAnY3Vyc29yJyxcbiAgJ2RpcmVjdGlvbicsXG4gICdkaXNwbGF5JyxcbiAgJ2VtcHR5LWNlbGxzJyxcbiAgJ2ZpbHRlcicsXG4gICdmbGV4JyxcbiAgJ2ZsZXgtYmFzaXMnLFxuICAnZmxleC1kaXJlY3Rpb24nLFxuICAnZmxleC1mbG93JyxcbiAgJ2ZsZXgtZ3JvdycsXG4gICdmbGV4LXNocmluaycsXG4gICdmbGV4LXdyYXAnLFxuICAnZmxvYXQnLFxuICAnZm9udCcsXG4gICdmb250LWRpc3BsYXknLFxuICAnZm9udC1mYW1pbHknLFxuICAnZm9udC1mZWF0dXJlLXNldHRpbmdzJyxcbiAgJ2ZvbnQta2VybmluZycsXG4gICdmb250LWxhbmd1YWdlLW92ZXJyaWRlJyxcbiAgJ2ZvbnQtc2l6ZScsXG4gICdmb250LXNpemUtYWRqdXN0JyxcbiAgJ2ZvbnQtc21vb3RoaW5nJyxcbiAgJ2ZvbnQtc3RyZXRjaCcsXG4gICdmb250LXN0eWxlJyxcbiAgJ2ZvbnQtdmFyaWFudCcsXG4gICdmb250LXZhcmlhbnQtbGlnYXR1cmVzJyxcbiAgJ2ZvbnQtdmFyaWF0aW9uLXNldHRpbmdzJyxcbiAgJ2ZvbnQtd2VpZ2h0JyxcbiAgJ2hlaWdodCcsXG4gICdoeXBoZW5zJyxcbiAgJ2ljb24nLFxuICAnaW1hZ2Utb3JpZW50YXRpb24nLFxuICAnaW1hZ2UtcmVuZGVyaW5nJyxcbiAgJ2ltYWdlLXJlc29sdXRpb24nLFxuICAnaW1lLW1vZGUnLFxuICAnaW5oZXJpdCcsXG4gICdpbml0aWFsJyxcbiAgJ2p1c3RpZnktY29udGVudCcsXG4gICdsZWZ0JyxcbiAgJ2xldHRlci1zcGFjaW5nJyxcbiAgJ2xpbmUtaGVpZ2h0JyxcbiAgJ2xpc3Qtc3R5bGUnLFxuICAnbGlzdC1zdHlsZS1pbWFnZScsXG4gICdsaXN0LXN0eWxlLXBvc2l0aW9uJyxcbiAgJ2xpc3Qtc3R5bGUtdHlwZScsXG4gICdtYXJnaW4nLFxuICAnbWFyZ2luLWJvdHRvbScsXG4gICdtYXJnaW4tbGVmdCcsXG4gICdtYXJnaW4tcmlnaHQnLFxuICAnbWFyZ2luLXRvcCcsXG4gICdtYXJrcycsXG4gICdtYXNrJyxcbiAgJ21heC1oZWlnaHQnLFxuICAnbWF4LXdpZHRoJyxcbiAgJ21pbi1oZWlnaHQnLFxuICAnbWluLXdpZHRoJyxcbiAgJ25hdi1kb3duJyxcbiAgJ25hdi1pbmRleCcsXG4gICduYXYtbGVmdCcsXG4gICduYXYtcmlnaHQnLFxuICAnbmF2LXVwJyxcbiAgJ25vbmUnLFxuICAnbm9ybWFsJyxcbiAgJ29iamVjdC1maXQnLFxuICAnb2JqZWN0LXBvc2l0aW9uJyxcbiAgJ29wYWNpdHknLFxuICAnb3JkZXInLFxuICAnb3JwaGFucycsXG4gICdvdXRsaW5lJyxcbiAgJ291dGxpbmUtY29sb3InLFxuICAnb3V0bGluZS1vZmZzZXQnLFxuICAnb3V0bGluZS1zdHlsZScsXG4gICdvdXRsaW5lLXdpZHRoJyxcbiAgJ292ZXJmbG93JyxcbiAgJ292ZXJmbG93LXdyYXAnLFxuICAnb3ZlcmZsb3cteCcsXG4gICdvdmVyZmxvdy15JyxcbiAgJ3BhZGRpbmcnLFxuICAncGFkZGluZy1ib3R0b20nLFxuICAncGFkZGluZy1sZWZ0JyxcbiAgJ3BhZGRpbmctcmlnaHQnLFxuICAncGFkZGluZy10b3AnLFxuICAncGFnZS1icmVhay1hZnRlcicsXG4gICdwYWdlLWJyZWFrLWJlZm9yZScsXG4gICdwYWdlLWJyZWFrLWluc2lkZScsXG4gICdwZXJzcGVjdGl2ZScsXG4gICdwZXJzcGVjdGl2ZS1vcmlnaW4nLFxuICAncG9pbnRlci1ldmVudHMnLFxuICAncG9zaXRpb24nLFxuICAncXVvdGVzJyxcbiAgJ3Jlc2l6ZScsXG4gICdyaWdodCcsXG4gICdzcmMnLCAvLyBAZm9udC1mYWNlXG4gICd0YWItc2l6ZScsXG4gICd0YWJsZS1sYXlvdXQnLFxuICAndGV4dC1hbGlnbicsXG4gICd0ZXh0LWFsaWduLWxhc3QnLFxuICAndGV4dC1kZWNvcmF0aW9uJyxcbiAgJ3RleHQtZGVjb3JhdGlvbi1jb2xvcicsXG4gICd0ZXh0LWRlY29yYXRpb24tbGluZScsXG4gICd0ZXh0LWRlY29yYXRpb24tc3R5bGUnLFxuICAndGV4dC1pbmRlbnQnLFxuICAndGV4dC1vdmVyZmxvdycsXG4gICd0ZXh0LXJlbmRlcmluZycsXG4gICd0ZXh0LXNoYWRvdycsXG4gICd0ZXh0LXRyYW5zZm9ybScsXG4gICd0ZXh0LXVuZGVybGluZS1wb3NpdGlvbicsXG4gICd0b3AnLFxuICAndHJhbnNmb3JtJyxcbiAgJ3RyYW5zZm9ybS1vcmlnaW4nLFxuICAndHJhbnNmb3JtLXN0eWxlJyxcbiAgJ3RyYW5zaXRpb24nLFxuICAndHJhbnNpdGlvbi1kZWxheScsXG4gICd0cmFuc2l0aW9uLWR1cmF0aW9uJyxcbiAgJ3RyYW5zaXRpb24tcHJvcGVydHknLFxuICAndHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb24nLFxuICAndW5pY29kZS1iaWRpJyxcbiAgJ3ZlcnRpY2FsLWFsaWduJyxcbiAgJ3Zpc2liaWxpdHknLFxuICAnd2hpdGUtc3BhY2UnLFxuICAnd2lkb3dzJyxcbiAgJ3dpZHRoJyxcbiAgJ3dvcmQtYnJlYWsnLFxuICAnd29yZC1zcGFjaW5nJyxcbiAgJ3dvcmQtd3JhcCcsXG4gICd6LWluZGV4J1xuICAvLyByZXZlcnNlIG1ha2VzIHN1cmUgbG9uZ2VyIGF0dHJpYnV0ZXMgYGZvbnQtd2VpZ2h0YCBhcmUgbWF0Y2hlZCBmdWxseVxuICAvLyBpbnN0ZWFkIG9mIGdldHRpbmcgZmFsc2UgcG9zaXRpdmVzIG9uIHNheSBgZm9udGBcbl0ucmV2ZXJzZSgpO1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICogQHJldHVybnMge1JlZ0V4cH1cbiAqICovXG5cbi8qKlxuICogQHBhcmFtIHtSZWdFeHAgfCBzdHJpbmcgfSByZVxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gc291cmNlKHJlKSB7XG4gIGlmICghcmUpIHJldHVybiBudWxsO1xuICBpZiAodHlwZW9mIHJlID09PSBcInN0cmluZ1wiKSByZXR1cm4gcmU7XG5cbiAgcmV0dXJuIHJlLnNvdXJjZTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge1JlZ0V4cCB8IHN0cmluZyB9IHJlXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBsb29rYWhlYWQocmUpIHtcbiAgcmV0dXJuIGNvbmNhdCgnKD89JywgcmUsICcpJyk7XG59XG5cbi8qKlxuICogQHBhcmFtIHsuLi4oUmVnRXhwIHwgc3RyaW5nKSB9IGFyZ3NcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGNvbmNhdCguLi5hcmdzKSB7XG4gIGNvbnN0IGpvaW5lZCA9IGFyZ3MubWFwKCh4KSA9PiBzb3VyY2UoeCkpLmpvaW4oXCJcIik7XG4gIHJldHVybiBqb2luZWQ7XG59XG5cbi8qXG5MYW5ndWFnZTogQ1NTXG5DYXRlZ29yeTogY29tbW9uLCBjc3NcbldlYnNpdGU6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTU1xuKi9cblxuLyoqIEB0eXBlIExhbmd1YWdlRm4gKi9cbmZ1bmN0aW9uIGNzcyhobGpzKSB7XG4gIGNvbnN0IG1vZGVzID0gTU9ERVMoaGxqcyk7XG4gIGNvbnN0IEZVTkNUSU9OX0RJU1BBVENIID0ge1xuICAgIGNsYXNzTmFtZTogXCJidWlsdF9pblwiLFxuICAgIGJlZ2luOiAvW1xcdy1dKyg/PVxcKCkvXG4gIH07XG4gIGNvbnN0IFZFTkRPUl9QUkVGSVggPSB7XG4gICAgYmVnaW46IC8tKHdlYmtpdHxtb3p8bXN8byktKD89W2Etel0pL1xuICB9O1xuICBjb25zdCBBVF9NT0RJRklFUlMgPSBcImFuZCBvciBub3Qgb25seVwiO1xuICBjb25zdCBBVF9QUk9QRVJUWV9SRSA9IC9ALT9cXHdbXFx3XSooLVxcdyspKi87IC8vIEAtd2Via2l0LWtleWZyYW1lc1xuICBjb25zdCBJREVOVF9SRSA9ICdbYS16QS1aLV1bYS16QS1aMC05Xy1dKic7XG4gIGNvbnN0IFNUUklOR1MgPSBbXG4gICAgaGxqcy5BUE9TX1NUUklOR19NT0RFLFxuICAgIGhsanMuUVVPVEVfU1RSSU5HX01PREVcbiAgXTtcblxuICByZXR1cm4ge1xuICAgIG5hbWU6ICdDU1MnLFxuICAgIGNhc2VfaW5zZW5zaXRpdmU6IHRydWUsXG4gICAgaWxsZWdhbDogL1s9fCdcXCRdLyxcbiAgICBrZXl3b3Jkczoge1xuICAgICAga2V5ZnJhbWVQb3NpdGlvbjogXCJmcm9tIHRvXCJcbiAgICB9LFxuICAgIGNsYXNzTmFtZUFsaWFzZXM6IHtcbiAgICAgIC8vIGZvciB2aXN1YWwgY29udGludWl0eSB3aXRoIGB0YWcge31gIGFuZCBiZWNhdXNlIHdlXG4gICAgICAvLyBkb24ndCBoYXZlIGEgZ3JlYXQgY2xhc3MgZm9yIHRoaXM/XG4gICAgICBrZXlmcmFtZVBvc2l0aW9uOiBcInNlbGVjdG9yLXRhZ1wiXG4gICAgfSxcbiAgICBjb250YWluczogW1xuICAgICAgaGxqcy5DX0JMT0NLX0NPTU1FTlRfTU9ERSxcbiAgICAgIFZFTkRPUl9QUkVGSVgsXG4gICAgICAvLyB0byByZWNvZ25pemUga2V5ZnJhbWUgNDAlIGV0YyB3aGljaCBhcmUgb3V0c2lkZSB0aGUgc2NvcGUgb2Ygb3VyXG4gICAgICAvLyBhdHRyaWJ1dGUgdmFsdWUgbW9kZVxuICAgICAgaGxqcy5DU1NfTlVNQkVSX01PREUsXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3NlbGVjdG9yLWlkJyxcbiAgICAgICAgYmVnaW46IC8jW0EtWmEtejAtOV8tXSsvLFxuICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3NlbGVjdG9yLWNsYXNzJyxcbiAgICAgICAgYmVnaW46ICdcXFxcLicgKyBJREVOVF9SRSxcbiAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICB9LFxuICAgICAgbW9kZXMuQVRUUklCVVRFX1NFTEVDVE9SX01PREUsXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3NlbGVjdG9yLXBzZXVkbycsXG4gICAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgYmVnaW46ICc6KCcgKyBQU0VVRE9fQ0xBU1NFUy5qb2luKCd8JykgKyAnKSdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJlZ2luOiAnOjooJyArIFBTRVVET19FTEVNRU5UUy5qb2luKCd8JykgKyAnKSdcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICAvLyB3ZSBtYXkgYWN0dWFsbHkgbmVlZCB0aGlzICgxMi8yMDIwKVxuICAgICAgLy8geyAvLyBwc2V1ZG8tc2VsZWN0b3IgcGFyYW1zXG4gICAgICAvLyAgIGJlZ2luOiAvXFwoLyxcbiAgICAgIC8vICAgZW5kOiAvXFwpLyxcbiAgICAgIC8vICAgY29udGFpbnM6IFsgaGxqcy5DU1NfTlVNQkVSX01PREUgXVxuICAgICAgLy8gfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnYXR0cmlidXRlJyxcbiAgICAgICAgYmVnaW46ICdcXFxcYignICsgQVRUUklCVVRFUy5qb2luKCd8JykgKyAnKVxcXFxiJ1xuICAgICAgfSxcbiAgICAgIC8vIGF0dHJpYnV0ZSB2YWx1ZXNcbiAgICAgIHtcbiAgICAgICAgYmVnaW46ICc6JyxcbiAgICAgICAgZW5kOiAnWzt9XScsXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgbW9kZXMuSEVYQ09MT1IsXG4gICAgICAgICAgbW9kZXMuSU1QT1JUQU5ULFxuICAgICAgICAgIGhsanMuQ1NTX05VTUJFUl9NT0RFLFxuICAgICAgICAgIC4uLlNUUklOR1MsXG4gICAgICAgICAgLy8gbmVlZGVkIHRvIGhpZ2hsaWdodCB0aGVzZSBhcyBzdHJpbmdzIGFuZCB0byBhdm9pZCBpc3N1ZXMgd2l0aFxuICAgICAgICAgIC8vIGlsbGVnYWwgY2hhcmFjdGVycyB0aGF0IG1pZ2h0IGJlIGluc2lkZSB1cmxzIHRoYXQgd291bGQgdGlnZ2VyIHRoZVxuICAgICAgICAgIC8vIGxhbmd1YWdlcyBpbGxlZ2FsIHN0YWNrXG4gICAgICAgICAge1xuICAgICAgICAgICAgYmVnaW46IC8odXJsfGRhdGEtdXJpKVxcKC8sXG4gICAgICAgICAgICBlbmQ6IC9cXCkvLFxuICAgICAgICAgICAgcmVsZXZhbmNlOiAwLCAvLyBmcm9tIGtleXdvcmRzXG4gICAgICAgICAgICBrZXl3b3Jkczoge1xuICAgICAgICAgICAgICBidWlsdF9pbjogXCJ1cmwgZGF0YS11cmlcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgLy8gYW55IGNoYXJhY3RlciBvdGhlciB0aGFuIGApYCBhcyBpbiBgdXJsKClgIHdpbGwgYmUgdGhlIHN0YXJ0XG4gICAgICAgICAgICAgICAgLy8gb2YgYSBzdHJpbmcsIHdoaWNoIGVuZHMgd2l0aCBgKWAgKGZyb20gdGhlIHBhcmVudCBtb2RlKVxuICAgICAgICAgICAgICAgIGJlZ2luOiAvW14pXS8sXG4gICAgICAgICAgICAgICAgZW5kc1dpdGhQYXJlbnQ6IHRydWUsXG4gICAgICAgICAgICAgICAgZXhjbHVkZUVuZDogdHJ1ZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICBGVU5DVElPTl9ESVNQQVRDSFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbjogbG9va2FoZWFkKC9ALyksXG4gICAgICAgIGVuZDogJ1t7O10nLFxuICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgIGlsbGVnYWw6IC86LywgLy8gYnJlYWsgb24gTGVzcyB2YXJpYWJsZXMgQHZhcjogLi4uXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAna2V5d29yZCcsXG4gICAgICAgICAgICBiZWdpbjogQVRfUFJPUEVSVFlfUkVcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJlZ2luOiAvXFxzLyxcbiAgICAgICAgICAgIGVuZHNXaXRoUGFyZW50OiB0cnVlLFxuICAgICAgICAgICAgZXhjbHVkZUVuZDogdHJ1ZSxcbiAgICAgICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgICAgIGtleXdvcmRzOiB7XG4gICAgICAgICAgICAgICRwYXR0ZXJuOiAvW2Etei1dKy8sXG4gICAgICAgICAgICAgIGtleXdvcmQ6IEFUX01PRElGSUVSUyxcbiAgICAgICAgICAgICAgYXR0cmlidXRlOiBNRURJQV9GRUFUVVJFUy5qb2luKFwiIFwiKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBiZWdpbjogL1thLXotXSsoPz06KS8sXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcImF0dHJpYnV0ZVwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIC4uLlNUUklOR1MsXG4gICAgICAgICAgICAgIGhsanMuQ1NTX05VTUJFUl9NT0RFXG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdzZWxlY3Rvci10YWcnLFxuICAgICAgICBiZWdpbjogJ1xcXFxiKCcgKyBUQUdTLmpvaW4oJ3wnKSArICcpXFxcXGInXG4gICAgICB9XG4gICAgXVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNzcztcbiIsIi8qXG5MYW5ndWFnZTogSlNPTlxuRGVzY3JpcHRpb246IEpTT04gKEphdmFTY3JpcHQgT2JqZWN0IE5vdGF0aW9uKSBpcyBhIGxpZ2h0d2VpZ2h0IGRhdGEtaW50ZXJjaGFuZ2UgZm9ybWF0LlxuQXV0aG9yOiBJdmFuIFNhZ2FsYWV2IDxtYW5pYWNAc29mdHdhcmVtYW5pYWNzLm9yZz5cbldlYnNpdGU6IGh0dHA6Ly93d3cuanNvbi5vcmdcbkNhdGVnb3J5OiBjb21tb24sIHByb3RvY29sc1xuKi9cblxuZnVuY3Rpb24ganNvbihobGpzKSB7XG4gIGNvbnN0IExJVEVSQUxTID0ge1xuICAgIGxpdGVyYWw6ICd0cnVlIGZhbHNlIG51bGwnXG4gIH07XG4gIGNvbnN0IEFMTE9XRURfQ09NTUVOVFMgPSBbXG4gICAgaGxqcy5DX0xJTkVfQ09NTUVOVF9NT0RFLFxuICAgIGhsanMuQ19CTE9DS19DT01NRU5UX01PREVcbiAgXTtcbiAgY29uc3QgVFlQRVMgPSBbXG4gICAgaGxqcy5RVU9URV9TVFJJTkdfTU9ERSxcbiAgICBobGpzLkNfTlVNQkVSX01PREVcbiAgXTtcbiAgY29uc3QgVkFMVUVfQ09OVEFJTkVSID0ge1xuICAgIGVuZDogJywnLFxuICAgIGVuZHNXaXRoUGFyZW50OiB0cnVlLFxuICAgIGV4Y2x1ZGVFbmQ6IHRydWUsXG4gICAgY29udGFpbnM6IFRZUEVTLFxuICAgIGtleXdvcmRzOiBMSVRFUkFMU1xuICB9O1xuICBjb25zdCBPQkpFQ1QgPSB7XG4gICAgYmVnaW46IC9cXHsvLFxuICAgIGVuZDogL1xcfS8sXG4gICAgY29udGFpbnM6IFtcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnYXR0cicsXG4gICAgICAgIGJlZ2luOiAvXCIvLFxuICAgICAgICBlbmQ6IC9cIi8sXG4gICAgICAgIGNvbnRhaW5zOiBbaGxqcy5CQUNLU0xBU0hfRVNDQVBFXSxcbiAgICAgICAgaWxsZWdhbDogJ1xcXFxuJ1xuICAgICAgfSxcbiAgICAgIGhsanMuaW5oZXJpdChWQUxVRV9DT05UQUlORVIsIHtcbiAgICAgICAgYmVnaW46IC86L1xuICAgICAgfSlcbiAgICBdLmNvbmNhdChBTExPV0VEX0NPTU1FTlRTKSxcbiAgICBpbGxlZ2FsOiAnXFxcXFMnXG4gIH07XG4gIGNvbnN0IEFSUkFZID0ge1xuICAgIGJlZ2luOiAnXFxcXFsnLFxuICAgIGVuZDogJ1xcXFxdJyxcbiAgICBjb250YWluczogW2hsanMuaW5oZXJpdChWQUxVRV9DT05UQUlORVIpXSwgLy8gaW5oZXJpdCBpcyBhIHdvcmthcm91bmQgZm9yIGEgYnVnIHRoYXQgbWFrZXMgc2hhcmVkIG1vZGVzIHdpdGggZW5kc1dpdGhQYXJlbnQgY29tcGlsZSBvbmx5IHRoZSBlbmRpbmcgb2Ygb25lIG9mIHRoZSBwYXJlbnRzXG4gICAgaWxsZWdhbDogJ1xcXFxTJ1xuICB9O1xuICBUWVBFUy5wdXNoKE9CSkVDVCwgQVJSQVkpO1xuICBBTExPV0VEX0NPTU1FTlRTLmZvckVhY2goZnVuY3Rpb24ocnVsZSkge1xuICAgIFRZUEVTLnB1c2gocnVsZSk7XG4gIH0pO1xuICByZXR1cm4ge1xuICAgIG5hbWU6ICdKU09OJyxcbiAgICBjb250YWluczogVFlQRVMsXG4gICAga2V5d29yZHM6IExJVEVSQUxTLFxuICAgIGlsbGVnYWw6ICdcXFxcUydcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBqc29uO1xuIiwiLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqIEByZXR1cm5zIHtSZWdFeHB9XG4gKiAqL1xuXG4vKipcbiAqIEBwYXJhbSB7UmVnRXhwIHwgc3RyaW5nIH0gcmVcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIHNvdXJjZShyZSkge1xuICBpZiAoIXJlKSByZXR1cm4gbnVsbDtcbiAgaWYgKHR5cGVvZiByZSA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIHJlO1xuXG4gIHJldHVybiByZS5zb3VyY2U7XG59XG5cbi8qKlxuICogQHBhcmFtIHtSZWdFeHAgfCBzdHJpbmcgfSByZVxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gbG9va2FoZWFkKHJlKSB7XG4gIHJldHVybiBjb25jYXQoJyg/PScsIHJlLCAnKScpO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7UmVnRXhwIHwgc3RyaW5nIH0gcmVcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIG9wdGlvbmFsKHJlKSB7XG4gIHJldHVybiBjb25jYXQoJygnLCByZSwgJyk/Jyk7XG59XG5cbi8qKlxuICogQHBhcmFtIHsuLi4oUmVnRXhwIHwgc3RyaW5nKSB9IGFyZ3NcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGNvbmNhdCguLi5hcmdzKSB7XG4gIGNvbnN0IGpvaW5lZCA9IGFyZ3MubWFwKCh4KSA9PiBzb3VyY2UoeCkpLmpvaW4oXCJcIik7XG4gIHJldHVybiBqb2luZWQ7XG59XG5cbi8qKlxuICogQW55IG9mIHRoZSBwYXNzZWQgZXhwcmVzc3Npb25zIG1heSBtYXRjaFxuICpcbiAqIENyZWF0ZXMgYSBodWdlIHRoaXMgfCB0aGlzIHwgdGhhdCB8IHRoYXQgbWF0Y2hcbiAqIEBwYXJhbSB7KFJlZ0V4cCB8IHN0cmluZylbXSB9IGFyZ3NcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGVpdGhlciguLi5hcmdzKSB7XG4gIGNvbnN0IGpvaW5lZCA9ICcoJyArIGFyZ3MubWFwKCh4KSA9PiBzb3VyY2UoeCkpLmpvaW4oXCJ8XCIpICsgXCIpXCI7XG4gIHJldHVybiBqb2luZWQ7XG59XG5cbi8qXG5MYW5ndWFnZTogSFRNTCwgWE1MXG5XZWJzaXRlOiBodHRwczovL3d3dy53My5vcmcvWE1ML1xuQ2F0ZWdvcnk6IGNvbW1vblxuQXVkaXQ6IDIwMjBcbiovXG5cbi8qKiBAdHlwZSBMYW5ndWFnZUZuICovXG5mdW5jdGlvbiB4bWwoaGxqcykge1xuICAvLyBFbGVtZW50IG5hbWVzIGNhbiBjb250YWluIGxldHRlcnMsIGRpZ2l0cywgaHlwaGVucywgdW5kZXJzY29yZXMsIGFuZCBwZXJpb2RzXG4gIGNvbnN0IFRBR19OQU1FX1JFID0gY29uY2F0KC9bQS1aX10vLCBvcHRpb25hbCgvW0EtWjAtOV8uLV0qOi8pLCAvW0EtWjAtOV8uLV0qLyk7XG4gIGNvbnN0IFhNTF9JREVOVF9SRSA9IC9bQS1aYS16MC05Ll86LV0rLztcbiAgY29uc3QgWE1MX0VOVElUSUVTID0ge1xuICAgIGNsYXNzTmFtZTogJ3N5bWJvbCcsXG4gICAgYmVnaW46IC8mW2Etel0rO3wmI1swLTldKzt8JiN4W2EtZjAtOV0rOy9cbiAgfTtcbiAgY29uc3QgWE1MX01FVEFfS0VZV09SRFMgPSB7XG4gICAgYmVnaW46IC9cXHMvLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ21ldGEta2V5d29yZCcsXG4gICAgICAgIGJlZ2luOiAvIz9bYS16X11bYS16MS05Xy1dKy8sXG4gICAgICAgIGlsbGVnYWw6IC9cXG4vXG4gICAgICB9XG4gICAgXVxuICB9O1xuICBjb25zdCBYTUxfTUVUQV9QQVJfS0VZV09SRFMgPSBobGpzLmluaGVyaXQoWE1MX01FVEFfS0VZV09SRFMsIHtcbiAgICBiZWdpbjogL1xcKC8sXG4gICAgZW5kOiAvXFwpL1xuICB9KTtcbiAgY29uc3QgQVBPU19NRVRBX1NUUklOR19NT0RFID0gaGxqcy5pbmhlcml0KGhsanMuQVBPU19TVFJJTkdfTU9ERSwge1xuICAgIGNsYXNzTmFtZTogJ21ldGEtc3RyaW5nJ1xuICB9KTtcbiAgY29uc3QgUVVPVEVfTUVUQV9TVFJJTkdfTU9ERSA9IGhsanMuaW5oZXJpdChobGpzLlFVT1RFX1NUUklOR19NT0RFLCB7XG4gICAgY2xhc3NOYW1lOiAnbWV0YS1zdHJpbmcnXG4gIH0pO1xuICBjb25zdCBUQUdfSU5URVJOQUxTID0ge1xuICAgIGVuZHNXaXRoUGFyZW50OiB0cnVlLFxuICAgIGlsbGVnYWw6IC88LyxcbiAgICByZWxldmFuY2U6IDAsXG4gICAgY29udGFpbnM6IFtcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnYXR0cicsXG4gICAgICAgIGJlZ2luOiBYTUxfSURFTlRfUkUsXG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46IC89XFxzKi8sXG4gICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgZW5kc1BhcmVudDogdHJ1ZSxcbiAgICAgICAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBiZWdpbjogL1wiLyxcbiAgICAgICAgICAgICAgICBlbmQ6IC9cIi8sXG4gICAgICAgICAgICAgICAgY29udGFpbnM6IFsgWE1MX0VOVElUSUVTIF1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGJlZ2luOiAvJy8sXG4gICAgICAgICAgICAgICAgZW5kOiAvJy8sXG4gICAgICAgICAgICAgICAgY29udGFpbnM6IFsgWE1MX0VOVElUSUVTIF1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGJlZ2luOiAvW15cXHNcIic9PD5gXSsvXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdXG4gIH07XG4gIHJldHVybiB7XG4gICAgbmFtZTogJ0hUTUwsIFhNTCcsXG4gICAgYWxpYXNlczogW1xuICAgICAgJ2h0bWwnLFxuICAgICAgJ3hodG1sJyxcbiAgICAgICdyc3MnLFxuICAgICAgJ2F0b20nLFxuICAgICAgJ3hqYicsXG4gICAgICAneHNkJyxcbiAgICAgICd4c2wnLFxuICAgICAgJ3BsaXN0JyxcbiAgICAgICd3c2YnLFxuICAgICAgJ3N2ZydcbiAgICBdLFxuICAgIGNhc2VfaW5zZW5zaXRpdmU6IHRydWUsXG4gICAgY29udGFpbnM6IFtcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnbWV0YScsXG4gICAgICAgIGJlZ2luOiAvPCFbYS16XS8sXG4gICAgICAgIGVuZDogLz4vLFxuICAgICAgICByZWxldmFuY2U6IDEwLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIFhNTF9NRVRBX0tFWVdPUkRTLFxuICAgICAgICAgIFFVT1RFX01FVEFfU1RSSU5HX01PREUsXG4gICAgICAgICAgQVBPU19NRVRBX1NUUklOR19NT0RFLFxuICAgICAgICAgIFhNTF9NRVRBX1BBUl9LRVlXT1JEUyxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBiZWdpbjogL1xcWy8sXG4gICAgICAgICAgICBlbmQ6IC9cXF0vLFxuICAgICAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ21ldGEnLFxuICAgICAgICAgICAgICAgIGJlZ2luOiAvPCFbYS16XS8sXG4gICAgICAgICAgICAgICAgZW5kOiAvPi8sXG4gICAgICAgICAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAgICAgICAgIFhNTF9NRVRBX0tFWVdPUkRTLFxuICAgICAgICAgICAgICAgICAgWE1MX01FVEFfUEFSX0tFWVdPUkRTLFxuICAgICAgICAgICAgICAgICAgUVVPVEVfTUVUQV9TVFJJTkdfTU9ERSxcbiAgICAgICAgICAgICAgICAgIEFQT1NfTUVUQV9TVFJJTkdfTU9ERVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIGhsanMuQ09NTUVOVChcbiAgICAgICAgLzwhLS0vLFxuICAgICAgICAvLS0+LyxcbiAgICAgICAge1xuICAgICAgICAgIHJlbGV2YW5jZTogMTBcbiAgICAgICAgfVxuICAgICAgKSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46IC88IVxcW0NEQVRBXFxbLyxcbiAgICAgICAgZW5kOiAvXFxdXFxdPi8sXG4gICAgICAgIHJlbGV2YW5jZTogMTBcbiAgICAgIH0sXG4gICAgICBYTUxfRU5USVRJRVMsXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ21ldGEnLFxuICAgICAgICBiZWdpbjogLzxcXD94bWwvLFxuICAgICAgICBlbmQ6IC9cXD8+LyxcbiAgICAgICAgcmVsZXZhbmNlOiAxMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAndGFnJyxcbiAgICAgICAgLypcbiAgICAgICAgVGhlIGxvb2thaGVhZCBwYXR0ZXJuICg/PS4uLikgZW5zdXJlcyB0aGF0ICdiZWdpbicgb25seSBtYXRjaGVzXG4gICAgICAgICc8c3R5bGUnIGFzIGEgc2luZ2xlIHdvcmQsIGZvbGxvd2VkIGJ5IGEgd2hpdGVzcGFjZSBvciBhblxuICAgICAgICBlbmRpbmcgYnJha2V0LiBUaGUgJyQnIGlzIG5lZWRlZCBmb3IgdGhlIGxleGVtZSB0byBiZSByZWNvZ25pemVkXG4gICAgICAgIGJ5IGhsanMuc3ViTW9kZSgpIHRoYXQgdGVzdHMgbGV4ZW1lcyBvdXRzaWRlIHRoZSBzdHJlYW0uXG4gICAgICAgICovXG4gICAgICAgIGJlZ2luOiAvPHN0eWxlKD89XFxzfD4pLyxcbiAgICAgICAgZW5kOiAvPi8sXG4gICAgICAgIGtleXdvcmRzOiB7XG4gICAgICAgICAgbmFtZTogJ3N0eWxlJ1xuICAgICAgICB9LFxuICAgICAgICBjb250YWluczogWyBUQUdfSU5URVJOQUxTIF0sXG4gICAgICAgIHN0YXJ0czoge1xuICAgICAgICAgIGVuZDogLzxcXC9zdHlsZT4vLFxuICAgICAgICAgIHJldHVybkVuZDogdHJ1ZSxcbiAgICAgICAgICBzdWJMYW5ndWFnZTogW1xuICAgICAgICAgICAgJ2NzcycsXG4gICAgICAgICAgICAneG1sJ1xuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAndGFnJyxcbiAgICAgICAgLy8gU2VlIHRoZSBjb21tZW50IGluIHRoZSA8c3R5bGUgdGFnIGFib3V0IHRoZSBsb29rYWhlYWQgcGF0dGVyblxuICAgICAgICBiZWdpbjogLzxzY3JpcHQoPz1cXHN8PikvLFxuICAgICAgICBlbmQ6IC8+LyxcbiAgICAgICAga2V5d29yZHM6IHtcbiAgICAgICAgICBuYW1lOiAnc2NyaXB0J1xuICAgICAgICB9LFxuICAgICAgICBjb250YWluczogWyBUQUdfSU5URVJOQUxTIF0sXG4gICAgICAgIHN0YXJ0czoge1xuICAgICAgICAgIGVuZDogLzxcXC9zY3JpcHQ+LyxcbiAgICAgICAgICByZXR1cm5FbmQ6IHRydWUsXG4gICAgICAgICAgc3ViTGFuZ3VhZ2U6IFtcbiAgICAgICAgICAgICdqYXZhc2NyaXB0JyxcbiAgICAgICAgICAgICdoYW5kbGViYXJzJyxcbiAgICAgICAgICAgICd4bWwnXG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgLy8gd2UgbmVlZCB0aGlzIGZvciBub3cgZm9yIGpTWFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICd0YWcnLFxuICAgICAgICBiZWdpbjogLzw+fDxcXC8+L1xuICAgICAgfSxcbiAgICAgIC8vIG9wZW4gdGFnXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3RhZycsXG4gICAgICAgIGJlZ2luOiBjb25jYXQoXG4gICAgICAgICAgLzwvLFxuICAgICAgICAgIGxvb2thaGVhZChjb25jYXQoXG4gICAgICAgICAgICBUQUdfTkFNRV9SRSxcbiAgICAgICAgICAgIC8vIDx0YWcvPlxuICAgICAgICAgICAgLy8gPHRhZz5cbiAgICAgICAgICAgIC8vIDx0YWcgLi4uXG4gICAgICAgICAgICBlaXRoZXIoL1xcLz4vLCAvPi8sIC9cXHMvKVxuICAgICAgICAgICkpXG4gICAgICAgICksXG4gICAgICAgIGVuZDogL1xcLz8+LyxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICduYW1lJyxcbiAgICAgICAgICAgIGJlZ2luOiBUQUdfTkFNRV9SRSxcbiAgICAgICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgICAgIHN0YXJ0czogVEFHX0lOVEVSTkFMU1xuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIC8vIGNsb3NlIHRhZ1xuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICd0YWcnLFxuICAgICAgICBiZWdpbjogY29uY2F0KFxuICAgICAgICAgIC88XFwvLyxcbiAgICAgICAgICBsb29rYWhlYWQoY29uY2F0KFxuICAgICAgICAgICAgVEFHX05BTUVfUkUsIC8+L1xuICAgICAgICAgICkpXG4gICAgICAgICksXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAnbmFtZScsXG4gICAgICAgICAgICBiZWdpbjogVEFHX05BTUVfUkUsXG4gICAgICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJlZ2luOiAvPi8sXG4gICAgICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgICAgICBlbmRzUGFyZW50OiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgXVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHhtbDtcbiIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2F0b20tb25lLWRhcmsuY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0e3VzZVN0YXRlIGFzIG4sdXNlUmVkdWNlciBhcyB0LHVzZUVmZmVjdCBhcyBlLHVzZUxheW91dEVmZmVjdCBhcyByLHVzZVJlZiBhcyB1LHVzZUltcGVyYXRpdmVIYW5kbGUgYXMgbyx1c2VNZW1vIGFzIGksdXNlQ2FsbGJhY2sgYXMgbCx1c2VDb250ZXh0IGFzIGYsdXNlRGVidWdWYWx1ZSBhcyBjfWZyb21cInByZWFjdC9ob29rc1wiO2V4cG9ydCpmcm9tXCJwcmVhY3QvaG9va3NcIjtpbXBvcnR7Q29tcG9uZW50IGFzIGEsY3JlYXRlRWxlbWVudCBhcyBzLG9wdGlvbnMgYXMgaCx0b0NoaWxkQXJyYXkgYXMgdixGcmFnbWVudCBhcyBkLHJlbmRlciBhcyBwLGh5ZHJhdGUgYXMgbSxjbG9uZUVsZW1lbnQgYXMgeSxjcmVhdGVSZWYgYXMgYixjcmVhdGVDb250ZXh0IGFzIF99ZnJvbVwicHJlYWN0XCI7ZXhwb3J0e2NyZWF0ZUVsZW1lbnQsY3JlYXRlQ29udGV4dCxjcmVhdGVSZWYsRnJhZ21lbnQsQ29tcG9uZW50fWZyb21cInByZWFjdFwiO2Z1bmN0aW9uIFMobix0KXtmb3IodmFyIGUgaW4gdCluW2VdPXRbZV07cmV0dXJuIG59ZnVuY3Rpb24gQyhuLHQpe2Zvcih2YXIgZSBpbiBuKWlmKFwiX19zb3VyY2VcIiE9PWUmJiEoZSBpbiB0KSlyZXR1cm4hMDtmb3IodmFyIHIgaW4gdClpZihcIl9fc291cmNlXCIhPT1yJiZuW3JdIT09dFtyXSlyZXR1cm4hMDtyZXR1cm4hMX1mdW5jdGlvbiBFKG4pe3RoaXMucHJvcHM9bn1mdW5jdGlvbiBnKG4sdCl7ZnVuY3Rpb24gZShuKXt2YXIgZT10aGlzLnByb3BzLnJlZixyPWU9PW4ucmVmO3JldHVybiFyJiZlJiYoZS5jYWxsP2UobnVsbCk6ZS5jdXJyZW50PW51bGwpLHQ/IXQodGhpcy5wcm9wcyxuKXx8IXI6Qyh0aGlzLnByb3BzLG4pfWZ1bmN0aW9uIHIodCl7cmV0dXJuIHRoaXMuc2hvdWxkQ29tcG9uZW50VXBkYXRlPWUscyhuLHQpfXJldHVybiByLmRpc3BsYXlOYW1lPVwiTWVtbyhcIisobi5kaXNwbGF5TmFtZXx8bi5uYW1lKStcIilcIixyLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50PSEwLHIuX19mPSEwLHJ9KEUucHJvdG90eXBlPW5ldyBhKS5pc1B1cmVSZWFjdENvbXBvbmVudD0hMCxFLnByb3RvdHlwZS5zaG91bGRDb21wb25lbnRVcGRhdGU9ZnVuY3Rpb24obix0KXtyZXR1cm4gQyh0aGlzLnByb3BzLG4pfHxDKHRoaXMuc3RhdGUsdCl9O3ZhciB3PWguX19iO2guX19iPWZ1bmN0aW9uKG4pe24udHlwZSYmbi50eXBlLl9fZiYmbi5yZWYmJihuLnByb3BzLnJlZj1uLnJlZixuLnJlZj1udWxsKSx3JiZ3KG4pfTt2YXIgUj1cInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wuZm9yJiZTeW1ib2wuZm9yKFwicmVhY3QuZm9yd2FyZF9yZWZcIil8fDM5MTE7ZnVuY3Rpb24geChuKXtmdW5jdGlvbiB0KHQsZSl7dmFyIHI9Uyh7fSx0KTtyZXR1cm4gZGVsZXRlIHIucmVmLG4ociwoZT10LnJlZnx8ZSkmJihcIm9iamVjdFwiIT10eXBlb2YgZXx8XCJjdXJyZW50XCJpbiBlKT9lOm51bGwpfXJldHVybiB0LiQkdHlwZW9mPVIsdC5yZW5kZXI9dCx0LnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50PXQuX19mPSEwLHQuZGlzcGxheU5hbWU9XCJGb3J3YXJkUmVmKFwiKyhuLmRpc3BsYXlOYW1lfHxuLm5hbWUpK1wiKVwiLHR9dmFyIE49ZnVuY3Rpb24obix0KXtyZXR1cm4gbnVsbD09bj9udWxsOnYodihuKS5tYXAodCkpfSxrPXttYXA6Tixmb3JFYWNoOk4sY291bnQ6ZnVuY3Rpb24obil7cmV0dXJuIG4/dihuKS5sZW5ndGg6MH0sb25seTpmdW5jdGlvbihuKXt2YXIgdD12KG4pO2lmKDEhPT10Lmxlbmd0aCl0aHJvd1wiQ2hpbGRyZW4ub25seVwiO3JldHVybiB0WzBdfSx0b0FycmF5OnZ9LEE9aC5fX2U7aC5fX2U9ZnVuY3Rpb24obix0LGUpe2lmKG4udGhlbilmb3IodmFyIHIsdT10O3U9dS5fXzspaWYoKHI9dS5fX2MpJiZyLl9fYylyZXR1cm4gbnVsbD09dC5fX2UmJih0Ll9fZT1lLl9fZSx0Ll9faz1lLl9fayksci5fX2Mobix0KTtBKG4sdCxlKX07dmFyIE89aC51bm1vdW50O2Z1bmN0aW9uIEwoKXt0aGlzLl9fdT0wLHRoaXMudD1udWxsLHRoaXMuX19iPW51bGx9ZnVuY3Rpb24gVShuKXt2YXIgdD1uLl9fLl9fYztyZXR1cm4gdCYmdC5fX2UmJnQuX19lKG4pfWZ1bmN0aW9uIEYobil7dmFyIHQsZSxyO2Z1bmN0aW9uIHUodSl7aWYodHx8KHQ9bigpKS50aGVuKGZ1bmN0aW9uKG4pe2U9bi5kZWZhdWx0fHxufSxmdW5jdGlvbihuKXtyPW59KSxyKXRocm93IHI7aWYoIWUpdGhyb3cgdDtyZXR1cm4gcyhlLHUpfXJldHVybiB1LmRpc3BsYXlOYW1lPVwiTGF6eVwiLHUuX19mPSEwLHV9ZnVuY3Rpb24gTSgpe3RoaXMudT1udWxsLHRoaXMubz1udWxsfWgudW5tb3VudD1mdW5jdGlvbihuKXt2YXIgdD1uLl9fYzt0JiZ0Ll9fUiYmdC5fX1IoKSx0JiYhMD09PW4uX19oJiYobi50eXBlPW51bGwpLE8mJk8obil9LChMLnByb3RvdHlwZT1uZXcgYSkuX19jPWZ1bmN0aW9uKG4sdCl7dmFyIGU9dC5fX2Mscj10aGlzO251bGw9PXIudCYmKHIudD1bXSksci50LnB1c2goZSk7dmFyIHU9VShyLl9fdiksbz0hMSxpPWZ1bmN0aW9uKCl7b3x8KG89ITAsZS5fX1I9bnVsbCx1P3UobCk6bCgpKX07ZS5fX1I9aTt2YXIgbD1mdW5jdGlvbigpe2lmKCEtLXIuX191KXtpZihyLnN0YXRlLl9fZSl7dmFyIG49ci5zdGF0ZS5fX2U7ci5fX3YuX19rWzBdPWZ1bmN0aW9uIG4odCxlLHIpe3JldHVybiB0JiYodC5fX3Y9bnVsbCx0Ll9faz10Ll9fayYmdC5fX2subWFwKGZ1bmN0aW9uKHQpe3JldHVybiBuKHQsZSxyKX0pLHQuX19jJiZ0Ll9fYy5fX1A9PT1lJiYodC5fX2UmJnIuaW5zZXJ0QmVmb3JlKHQuX19lLHQuX19kKSx0Ll9fYy5fX2U9ITAsdC5fX2MuX19QPXIpKSx0fShuLG4uX19jLl9fUCxuLl9fYy5fX08pfXZhciB0O2ZvcihyLnNldFN0YXRlKHtfX2U6ci5fX2I9bnVsbH0pO3Q9ci50LnBvcCgpOyl0LmZvcmNlVXBkYXRlKCl9fSxmPSEwPT09dC5fX2g7ci5fX3UrK3x8Znx8ci5zZXRTdGF0ZSh7X19lOnIuX19iPXIuX192Ll9fa1swXX0pLG4udGhlbihpLGkpfSxMLnByb3RvdHlwZS5jb21wb25lbnRXaWxsVW5tb3VudD1mdW5jdGlvbigpe3RoaXMudD1bXX0sTC5wcm90b3R5cGUucmVuZGVyPWZ1bmN0aW9uKG4sdCl7aWYodGhpcy5fX2Ipe2lmKHRoaXMuX192Ll9fayl7dmFyIGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxyPXRoaXMuX192Ll9fa1swXS5fX2M7dGhpcy5fX3YuX19rWzBdPWZ1bmN0aW9uIG4odCxlLHIpe3JldHVybiB0JiYodC5fX2MmJnQuX19jLl9fSCYmKHQuX19jLl9fSC5fXy5mb3JFYWNoKGZ1bmN0aW9uKG4pe1wiZnVuY3Rpb25cIj09dHlwZW9mIG4uX19jJiZuLl9fYygpfSksdC5fX2MuX19IPW51bGwpLG51bGwhPSh0PVMoe30sdCkpLl9fYyYmKHQuX19jLl9fUD09PXImJih0Ll9fYy5fX1A9ZSksdC5fX2M9bnVsbCksdC5fX2s9dC5fX2smJnQuX19rLm1hcChmdW5jdGlvbih0KXtyZXR1cm4gbih0LGUscil9KSksdH0odGhpcy5fX2IsZSxyLl9fTz1yLl9fUCl9dGhpcy5fX2I9bnVsbH12YXIgdT10Ll9fZSYmcyhkLG51bGwsbi5mYWxsYmFjayk7cmV0dXJuIHUmJih1Ll9faD1udWxsKSxbcyhkLG51bGwsdC5fX2U/bnVsbDpuLmNoaWxkcmVuKSx1XX07dmFyIFQ9ZnVuY3Rpb24obix0LGUpe2lmKCsrZVsxXT09PWVbMF0mJm4uby5kZWxldGUodCksbi5wcm9wcy5yZXZlYWxPcmRlciYmKFwidFwiIT09bi5wcm9wcy5yZXZlYWxPcmRlclswXXx8IW4uby5zaXplKSlmb3IoZT1uLnU7ZTspe2Zvcig7ZS5sZW5ndGg+MzspZS5wb3AoKSgpO2lmKGVbMV08ZVswXSlicmVhaztuLnU9ZT1lWzJdfX07ZnVuY3Rpb24gRChuKXtyZXR1cm4gdGhpcy5nZXRDaGlsZENvbnRleHQ9ZnVuY3Rpb24oKXtyZXR1cm4gbi5jb250ZXh0fSxuLmNoaWxkcmVufWZ1bmN0aW9uIEkobil7dmFyIHQ9dGhpcyxlPW4uaTt0LmNvbXBvbmVudFdpbGxVbm1vdW50PWZ1bmN0aW9uKCl7cChudWxsLHQubCksdC5sPW51bGwsdC5pPW51bGx9LHQuaSYmdC5pIT09ZSYmdC5jb21wb25lbnRXaWxsVW5tb3VudCgpLG4uX192Pyh0Lmx8fCh0Lmk9ZSx0Lmw9e25vZGVUeXBlOjEscGFyZW50Tm9kZTplLGNoaWxkTm9kZXM6W10sYXBwZW5kQ2hpbGQ6ZnVuY3Rpb24obil7dGhpcy5jaGlsZE5vZGVzLnB1c2gobiksdC5pLmFwcGVuZENoaWxkKG4pfSxpbnNlcnRCZWZvcmU6ZnVuY3Rpb24obixlKXt0aGlzLmNoaWxkTm9kZXMucHVzaChuKSx0LmkuYXBwZW5kQ2hpbGQobil9LHJlbW92ZUNoaWxkOmZ1bmN0aW9uKG4pe3RoaXMuY2hpbGROb2Rlcy5zcGxpY2UodGhpcy5jaGlsZE5vZGVzLmluZGV4T2Yobik+Pj4xLDEpLHQuaS5yZW1vdmVDaGlsZChuKX19KSxwKHMoRCx7Y29udGV4dDp0LmNvbnRleHR9LG4uX192KSx0LmwpKTp0LmwmJnQuY29tcG9uZW50V2lsbFVubW91bnQoKX1mdW5jdGlvbiBXKG4sdCl7cmV0dXJuIHMoSSx7X192Om4saTp0fSl9KE0ucHJvdG90eXBlPW5ldyBhKS5fX2U9ZnVuY3Rpb24obil7dmFyIHQ9dGhpcyxlPVUodC5fX3YpLHI9dC5vLmdldChuKTtyZXR1cm4gclswXSsrLGZ1bmN0aW9uKHUpe3ZhciBvPWZ1bmN0aW9uKCl7dC5wcm9wcy5yZXZlYWxPcmRlcj8oci5wdXNoKHUpLFQodCxuLHIpKTp1KCl9O2U/ZShvKTpvKCl9fSxNLnByb3RvdHlwZS5yZW5kZXI9ZnVuY3Rpb24obil7dGhpcy51PW51bGwsdGhpcy5vPW5ldyBNYXA7dmFyIHQ9dihuLmNoaWxkcmVuKTtuLnJldmVhbE9yZGVyJiZcImJcIj09PW4ucmV2ZWFsT3JkZXJbMF0mJnQucmV2ZXJzZSgpO2Zvcih2YXIgZT10Lmxlbmd0aDtlLS07KXRoaXMuby5zZXQodFtlXSx0aGlzLnU9WzEsMCx0aGlzLnVdKTtyZXR1cm4gbi5jaGlsZHJlbn0sTS5wcm90b3R5cGUuY29tcG9uZW50RGlkVXBkYXRlPU0ucHJvdG90eXBlLmNvbXBvbmVudERpZE1vdW50PWZ1bmN0aW9uKCl7dmFyIG49dGhpczt0aGlzLm8uZm9yRWFjaChmdW5jdGlvbih0LGUpe1QobixlLHQpfSl9O3ZhciBqPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlN5bWJvbC5mb3ImJlN5bWJvbC5mb3IoXCJyZWFjdC5lbGVtZW50XCIpfHw2MDEwMyxQPS9eKD86YWNjZW50fGFsaWdubWVudHxhcmFiaWN8YmFzZWxpbmV8Y2FwfGNsaXAoPyFQYXRoVSl8Y29sb3J8ZmlsbHxmbG9vZHxmb250fGdseXBoKD8hUil8aG9yaXp8bWFya2VyKD8hSHxXfFUpfG92ZXJsaW5lfHBhaW50fHN0b3B8c3RyaWtldGhyb3VnaHxzdHJva2V8dGV4dCg/IUwpfHVuZGVybGluZXx1bmljb2RlfHVuaXRzfHZ8dmVjdG9yfHZlcnR8d29yZHx3cml0aW5nfHgoPyFDKSlbQS1aXS8sVj1mdW5jdGlvbihuKXtyZXR1cm4oXCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmXCJzeW1ib2xcIj09dHlwZW9mIFN5bWJvbCgpPy9maWx8Y2hlfHJhZC9pOi9maWx8Y2hlfHJhL2kpLnRlc3Qobil9O2Z1bmN0aW9uIHoobix0LGUpe3JldHVybiBudWxsPT10Ll9fayYmKHQudGV4dENvbnRlbnQ9XCJcIikscChuLHQpLFwiZnVuY3Rpb25cIj09dHlwZW9mIGUmJmUoKSxuP24uX19jOm51bGx9ZnVuY3Rpb24gQihuLHQsZSl7cmV0dXJuIG0obix0KSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBlJiZlKCksbj9uLl9fYzpudWxsfWEucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQ9e30sW1wiY29tcG9uZW50V2lsbE1vdW50XCIsXCJjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzXCIsXCJjb21wb25lbnRXaWxsVXBkYXRlXCJdLmZvckVhY2goZnVuY3Rpb24obil7T2JqZWN0LmRlZmluZVByb3BlcnR5KGEucHJvdG90eXBlLG4se2NvbmZpZ3VyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpc1tcIlVOU0FGRV9cIituXX0sc2V0OmZ1bmN0aW9uKHQpe09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLG4se2NvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTp0fSl9fSl9KTt2YXIgSD1oLmV2ZW50O2Z1bmN0aW9uIFooKXt9ZnVuY3Rpb24gWSgpe3JldHVybiB0aGlzLmNhbmNlbEJ1YmJsZX1mdW5jdGlvbiAkKCl7cmV0dXJuIHRoaXMuZGVmYXVsdFByZXZlbnRlZH1oLmV2ZW50PWZ1bmN0aW9uKG4pe3JldHVybiBIJiYobj1IKG4pKSxuLnBlcnNpc3Q9WixuLmlzUHJvcGFnYXRpb25TdG9wcGVkPVksbi5pc0RlZmF1bHRQcmV2ZW50ZWQ9JCxuLm5hdGl2ZUV2ZW50PW59O3ZhciBxLEc9e2NvbmZpZ3VyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5jbGFzc319LEo9aC52bm9kZTtoLnZub2RlPWZ1bmN0aW9uKG4pe3ZhciB0PW4udHlwZSxlPW4ucHJvcHMscj1lO2lmKFwic3RyaW5nXCI9PXR5cGVvZiB0KXtmb3IodmFyIHUgaW4gcj17fSxlKXt2YXIgbz1lW3VdO1widmFsdWVcIj09PXUmJlwiZGVmYXVsdFZhbHVlXCJpbiBlJiZudWxsPT1vfHwoXCJkZWZhdWx0VmFsdWVcIj09PXUmJlwidmFsdWVcImluIGUmJm51bGw9PWUudmFsdWU/dT1cInZhbHVlXCI6XCJkb3dubG9hZFwiPT09dSYmITA9PT1vP289XCJcIjovb25kb3VibGVjbGljay9pLnRlc3QodSk/dT1cIm9uZGJsY2xpY2tcIjovXm9uY2hhbmdlKHRleHRhcmVhfGlucHV0KS9pLnRlc3QodSt0KSYmIVYoZS50eXBlKT91PVwib25pbnB1dFwiOi9eb24oQW5pfFRyYXxUb3V8QmVmb3JlSW5wKS8udGVzdCh1KT91PXUudG9Mb3dlckNhc2UoKTpQLnRlc3QodSk/dT11LnJlcGxhY2UoL1tBLVowLTldLyxcIi0kJlwiKS50b0xvd2VyQ2FzZSgpOm51bGw9PT1vJiYobz12b2lkIDApLHJbdV09byl9XCJzZWxlY3RcIj09dCYmci5tdWx0aXBsZSYmQXJyYXkuaXNBcnJheShyLnZhbHVlKSYmKHIudmFsdWU9dihlLmNoaWxkcmVuKS5mb3JFYWNoKGZ1bmN0aW9uKG4pe24ucHJvcHMuc2VsZWN0ZWQ9LTEhPXIudmFsdWUuaW5kZXhPZihuLnByb3BzLnZhbHVlKX0pKSxcInNlbGVjdFwiPT10JiZudWxsIT1yLmRlZmF1bHRWYWx1ZSYmKHIudmFsdWU9dihlLmNoaWxkcmVuKS5mb3JFYWNoKGZ1bmN0aW9uKG4pe24ucHJvcHMuc2VsZWN0ZWQ9ci5tdWx0aXBsZT8tMSE9ci5kZWZhdWx0VmFsdWUuaW5kZXhPZihuLnByb3BzLnZhbHVlKTpyLmRlZmF1bHRWYWx1ZT09bi5wcm9wcy52YWx1ZX0pKSxuLnByb3BzPXJ9dCYmZS5jbGFzcyE9ZS5jbGFzc05hbWUmJihHLmVudW1lcmFibGU9XCJjbGFzc05hbWVcImluIGUsbnVsbCE9ZS5jbGFzc05hbWUmJihyLmNsYXNzPWUuY2xhc3NOYW1lKSxPYmplY3QuZGVmaW5lUHJvcGVydHkocixcImNsYXNzTmFtZVwiLEcpKSxuLiQkdHlwZW9mPWosSiYmSihuKX07dmFyIEs9aC5fX3I7aC5fX3I9ZnVuY3Rpb24obil7SyYmSyhuKSxxPW4uX19jfTt2YXIgUT17UmVhY3RDdXJyZW50RGlzcGF0Y2hlcjp7Y3VycmVudDp7cmVhZENvbnRleHQ6ZnVuY3Rpb24obil7cmV0dXJuIHEuX19uW24uX19jXS5wcm9wcy52YWx1ZX19fX0sWD1cIjE3LjAuMlwiO2Z1bmN0aW9uIG5uKG4pe3JldHVybiBzLmJpbmQobnVsbCxuKX1mdW5jdGlvbiB0bihuKXtyZXR1cm4hIW4mJm4uJCR0eXBlb2Y9PT1qfWZ1bmN0aW9uIGVuKG4pe3JldHVybiB0bihuKT95LmFwcGx5KG51bGwsYXJndW1lbnRzKTpufWZ1bmN0aW9uIHJuKG4pe3JldHVybiEhbi5fX2smJihwKG51bGwsbiksITApfWZ1bmN0aW9uIHVuKG4pe3JldHVybiBuJiYobi5iYXNlfHwxPT09bi5ub2RlVHlwZSYmbil8fG51bGx9dmFyIG9uPWZ1bmN0aW9uKG4sdCl7cmV0dXJuIG4odCl9LGxuPWZ1bmN0aW9uKG4sdCl7cmV0dXJuIG4odCl9LGZuPWQ7ZXhwb3J0IGRlZmF1bHR7dXNlU3RhdGU6bix1c2VSZWR1Y2VyOnQsdXNlRWZmZWN0OmUsdXNlTGF5b3V0RWZmZWN0OnIsdXNlUmVmOnUsdXNlSW1wZXJhdGl2ZUhhbmRsZTpvLHVzZU1lbW86aSx1c2VDYWxsYmFjazpsLHVzZUNvbnRleHQ6Zix1c2VEZWJ1Z1ZhbHVlOmMsdmVyc2lvbjpcIjE3LjAuMlwiLENoaWxkcmVuOmsscmVuZGVyOnosaHlkcmF0ZTpCLHVubW91bnRDb21wb25lbnRBdE5vZGU6cm4sY3JlYXRlUG9ydGFsOlcsY3JlYXRlRWxlbWVudDpzLGNyZWF0ZUNvbnRleHQ6XyxjcmVhdGVGYWN0b3J5Om5uLGNsb25lRWxlbWVudDplbixjcmVhdGVSZWY6YixGcmFnbWVudDpkLGlzVmFsaWRFbGVtZW50OnRuLGZpbmRET01Ob2RlOnVuLENvbXBvbmVudDphLFB1cmVDb21wb25lbnQ6RSxtZW1vOmcsZm9yd2FyZFJlZjp4LGZsdXNoU3luYzpsbix1bnN0YWJsZV9iYXRjaGVkVXBkYXRlczpvbixTdHJpY3RNb2RlOmQsU3VzcGVuc2U6TCxTdXNwZW5zZUxpc3Q6TSxsYXp5OkYsX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQ6UX07ZXhwb3J0e1ggYXMgdmVyc2lvbixrIGFzIENoaWxkcmVuLHogYXMgcmVuZGVyLEIgYXMgaHlkcmF0ZSxybiBhcyB1bm1vdW50Q29tcG9uZW50QXROb2RlLFcgYXMgY3JlYXRlUG9ydGFsLG5uIGFzIGNyZWF0ZUZhY3RvcnksZW4gYXMgY2xvbmVFbGVtZW50LHRuIGFzIGlzVmFsaWRFbGVtZW50LHVuIGFzIGZpbmRET01Ob2RlLEUgYXMgUHVyZUNvbXBvbmVudCxnIGFzIG1lbW8seCBhcyBmb3J3YXJkUmVmLGxuIGFzIGZsdXNoU3luYyxvbiBhcyB1bnN0YWJsZV9iYXRjaGVkVXBkYXRlcyxmbiBhcyBTdHJpY3RNb2RlLEwgYXMgU3VzcGVuc2UsTSBhcyBTdXNwZW5zZUxpc3QsRiBhcyBsYXp5LFEgYXMgX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUR9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29tcGF0Lm1vZHVsZS5qcy5tYXBcbiIsInZhciBuLGwsdSxpLHQsbyxyLGYsZT17fSxjPVtdLHM9L2FjaXR8ZXgoPzpzfGd8bnxwfCQpfHJwaHxncmlkfG93c3xtbmN8bnR3fGluZVtjaF18em9vfF5vcmR8aXRlcmEvaTtmdW5jdGlvbiBhKG4sbCl7Zm9yKHZhciB1IGluIGwpblt1XT1sW3VdO3JldHVybiBufWZ1bmN0aW9uIGgobil7dmFyIGw9bi5wYXJlbnROb2RlO2wmJmwucmVtb3ZlQ2hpbGQobil9ZnVuY3Rpb24gdihsLHUsaSl7dmFyIHQsbyxyLGY9e307Zm9yKHIgaW4gdSlcImtleVwiPT1yP3Q9dVtyXTpcInJlZlwiPT1yP289dVtyXTpmW3JdPXVbcl07aWYoYXJndW1lbnRzLmxlbmd0aD4yJiYoZi5jaGlsZHJlbj1hcmd1bWVudHMubGVuZ3RoPjM/bi5jYWxsKGFyZ3VtZW50cywyKTppKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBsJiZudWxsIT1sLmRlZmF1bHRQcm9wcylmb3IociBpbiBsLmRlZmF1bHRQcm9wcyl2b2lkIDA9PT1mW3JdJiYoZltyXT1sLmRlZmF1bHRQcm9wc1tyXSk7cmV0dXJuIHkobCxmLHQsbyxudWxsKX1mdW5jdGlvbiB5KG4saSx0LG8scil7dmFyIGY9e3R5cGU6bixwcm9wczppLGtleTp0LHJlZjpvLF9fazpudWxsLF9fOm51bGwsX19iOjAsX19lOm51bGwsX19kOnZvaWQgMCxfX2M6bnVsbCxfX2g6bnVsbCxjb25zdHJ1Y3Rvcjp2b2lkIDAsX192Om51bGw9PXI/Kyt1OnJ9O3JldHVybiBudWxsIT1sLnZub2RlJiZsLnZub2RlKGYpLGZ9ZnVuY3Rpb24gcCgpe3JldHVybntjdXJyZW50Om51bGx9fWZ1bmN0aW9uIGQobil7cmV0dXJuIG4uY2hpbGRyZW59ZnVuY3Rpb24gXyhuLGwpe3RoaXMucHJvcHM9bix0aGlzLmNvbnRleHQ9bH1mdW5jdGlvbiBrKG4sbCl7aWYobnVsbD09bClyZXR1cm4gbi5fXz9rKG4uX18sbi5fXy5fX2suaW5kZXhPZihuKSsxKTpudWxsO2Zvcih2YXIgdTtsPG4uX19rLmxlbmd0aDtsKyspaWYobnVsbCE9KHU9bi5fX2tbbF0pJiZudWxsIT11Ll9fZSlyZXR1cm4gdS5fX2U7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2Ygbi50eXBlP2sobik6bnVsbH1mdW5jdGlvbiBiKG4pe3ZhciBsLHU7aWYobnVsbCE9KG49bi5fXykmJm51bGwhPW4uX19jKXtmb3Iobi5fX2U9bi5fX2MuYmFzZT1udWxsLGw9MDtsPG4uX19rLmxlbmd0aDtsKyspaWYobnVsbCE9KHU9bi5fX2tbbF0pJiZudWxsIT11Ll9fZSl7bi5fX2U9bi5fX2MuYmFzZT11Ll9fZTticmVha31yZXR1cm4gYihuKX19ZnVuY3Rpb24gbShuKXsoIW4uX19kJiYobi5fX2Q9ITApJiZ0LnB1c2gobikmJiFnLl9fcisrfHxyIT09bC5kZWJvdW5jZVJlbmRlcmluZykmJigocj1sLmRlYm91bmNlUmVuZGVyaW5nKXx8bykoZyl9ZnVuY3Rpb24gZygpe2Zvcih2YXIgbjtnLl9fcj10Lmxlbmd0aDspbj10LnNvcnQoZnVuY3Rpb24obixsKXtyZXR1cm4gbi5fX3YuX19iLWwuX192Ll9fYn0pLHQ9W10sbi5zb21lKGZ1bmN0aW9uKG4pe3ZhciBsLHUsaSx0LG8scjtuLl9fZCYmKG89KHQ9KGw9bikuX192KS5fX2UsKHI9bC5fX1ApJiYodT1bXSwoaT1hKHt9LHQpKS5fX3Y9dC5fX3YrMSxqKHIsdCxpLGwuX19uLHZvaWQgMCE9PXIub3duZXJTVkdFbGVtZW50LG51bGwhPXQuX19oP1tvXTpudWxsLHUsbnVsbD09bz9rKHQpOm8sdC5fX2gpLHoodSx0KSx0Ll9fZSE9byYmYih0KSkpfSl9ZnVuY3Rpb24gdyhuLGwsdSxpLHQsbyxyLGYscyxhKXt2YXIgaCx2LHAsXyxiLG0sZyx3PWkmJmkuX19rfHxjLEE9dy5sZW5ndGg7Zm9yKHUuX19rPVtdLGg9MDtoPGwubGVuZ3RoO2grKylpZihudWxsIT0oXz11Ll9fa1toXT1udWxsPT0oXz1sW2hdKXx8XCJib29sZWFuXCI9PXR5cGVvZiBfP251bGw6XCJzdHJpbmdcIj09dHlwZW9mIF98fFwibnVtYmVyXCI9PXR5cGVvZiBffHxcImJpZ2ludFwiPT10eXBlb2YgXz95KG51bGwsXyxudWxsLG51bGwsXyk6QXJyYXkuaXNBcnJheShfKT95KGQse2NoaWxkcmVuOl99LG51bGwsbnVsbCxudWxsKTpfLl9fYj4wP3koXy50eXBlLF8ucHJvcHMsXy5rZXksbnVsbCxfLl9fdik6Xykpe2lmKF8uX189dSxfLl9fYj11Ll9fYisxLG51bGw9PT0ocD13W2hdKXx8cCYmXy5rZXk9PXAua2V5JiZfLnR5cGU9PT1wLnR5cGUpd1toXT12b2lkIDA7ZWxzZSBmb3Iodj0wO3Y8QTt2Kyspe2lmKChwPXdbdl0pJiZfLmtleT09cC5rZXkmJl8udHlwZT09PXAudHlwZSl7d1t2XT12b2lkIDA7YnJlYWt9cD1udWxsfWoobixfLHA9cHx8ZSx0LG8scixmLHMsYSksYj1fLl9fZSwodj1fLnJlZikmJnAucmVmIT12JiYoZ3x8KGc9W10pLHAucmVmJiZnLnB1c2gocC5yZWYsbnVsbCxfKSxnLnB1c2godixfLl9fY3x8YixfKSksbnVsbCE9Yj8obnVsbD09bSYmKG09YiksXCJmdW5jdGlvblwiPT10eXBlb2YgXy50eXBlJiZudWxsIT1fLl9fayYmXy5fX2s9PT1wLl9faz9fLl9fZD1zPXgoXyxzLG4pOnM9UChuLF8scCx3LGIscyksYXx8XCJvcHRpb25cIiE9PXUudHlwZT9cImZ1bmN0aW9uXCI9PXR5cGVvZiB1LnR5cGUmJih1Ll9fZD1zKTpuLnZhbHVlPVwiXCIpOnMmJnAuX19lPT1zJiZzLnBhcmVudE5vZGUhPW4mJihzPWsocCkpfWZvcih1Ll9fZT1tLGg9QTtoLS07KW51bGwhPXdbaF0mJihcImZ1bmN0aW9uXCI9PXR5cGVvZiB1LnR5cGUmJm51bGwhPXdbaF0uX19lJiZ3W2hdLl9fZT09dS5fX2QmJih1Ll9fZD1rKGksaCsxKSksTih3W2hdLHdbaF0pKTtpZihnKWZvcihoPTA7aDxnLmxlbmd0aDtoKyspTShnW2hdLGdbKytoXSxnWysraF0pfWZ1bmN0aW9uIHgobixsLHUpe3ZhciBpLHQ7Zm9yKGk9MDtpPG4uX19rLmxlbmd0aDtpKyspKHQ9bi5fX2tbaV0pJiYodC5fXz1uLGw9XCJmdW5jdGlvblwiPT10eXBlb2YgdC50eXBlP3godCxsLHUpOlAodSx0LHQsbi5fX2ssdC5fX2UsbCkpO3JldHVybiBsfWZ1bmN0aW9uIEEobixsKXtyZXR1cm4gbD1sfHxbXSxudWxsPT1ufHxcImJvb2xlYW5cIj09dHlwZW9mIG58fChBcnJheS5pc0FycmF5KG4pP24uc29tZShmdW5jdGlvbihuKXtBKG4sbCl9KTpsLnB1c2gobikpLGx9ZnVuY3Rpb24gUChuLGwsdSxpLHQsbyl7dmFyIHIsZixlO2lmKHZvaWQgMCE9PWwuX19kKXI9bC5fX2QsbC5fX2Q9dm9pZCAwO2Vsc2UgaWYobnVsbD09dXx8dCE9b3x8bnVsbD09dC5wYXJlbnROb2RlKW46aWYobnVsbD09b3x8by5wYXJlbnROb2RlIT09biluLmFwcGVuZENoaWxkKHQpLHI9bnVsbDtlbHNle2ZvcihmPW8sZT0wOyhmPWYubmV4dFNpYmxpbmcpJiZlPGkubGVuZ3RoO2UrPTIpaWYoZj09dClicmVhayBuO24uaW5zZXJ0QmVmb3JlKHQsbykscj1vfXJldHVybiB2b2lkIDAhPT1yP3I6dC5uZXh0U2libGluZ31mdW5jdGlvbiBDKG4sbCx1LGksdCl7dmFyIG87Zm9yKG8gaW4gdSlcImNoaWxkcmVuXCI9PT1vfHxcImtleVwiPT09b3x8byBpbiBsfHxIKG4sbyxudWxsLHVbb10saSk7Zm9yKG8gaW4gbCl0JiZcImZ1bmN0aW9uXCIhPXR5cGVvZiBsW29dfHxcImNoaWxkcmVuXCI9PT1vfHxcImtleVwiPT09b3x8XCJ2YWx1ZVwiPT09b3x8XCJjaGVja2VkXCI9PT1vfHx1W29dPT09bFtvXXx8SChuLG8sbFtvXSx1W29dLGkpfWZ1bmN0aW9uICQobixsLHUpe1wiLVwiPT09bFswXT9uLnNldFByb3BlcnR5KGwsdSk6bltsXT1udWxsPT11P1wiXCI6XCJudW1iZXJcIiE9dHlwZW9mIHV8fHMudGVzdChsKT91OnUrXCJweFwifWZ1bmN0aW9uIEgobixsLHUsaSx0KXt2YXIgbztuOmlmKFwic3R5bGVcIj09PWwpaWYoXCJzdHJpbmdcIj09dHlwZW9mIHUpbi5zdHlsZS5jc3NUZXh0PXU7ZWxzZXtpZihcInN0cmluZ1wiPT10eXBlb2YgaSYmKG4uc3R5bGUuY3NzVGV4dD1pPVwiXCIpLGkpZm9yKGwgaW4gaSl1JiZsIGluIHV8fCQobi5zdHlsZSxsLFwiXCIpO2lmKHUpZm9yKGwgaW4gdSlpJiZ1W2xdPT09aVtsXXx8JChuLnN0eWxlLGwsdVtsXSl9ZWxzZSBpZihcIm9cIj09PWxbMF0mJlwiblwiPT09bFsxXSlvPWwhPT0obD1sLnJlcGxhY2UoL0NhcHR1cmUkLyxcIlwiKSksbD1sLnRvTG93ZXJDYXNlKClpbiBuP2wudG9Mb3dlckNhc2UoKS5zbGljZSgyKTpsLnNsaWNlKDIpLG4ubHx8KG4ubD17fSksbi5sW2wrb109dSx1P2l8fG4uYWRkRXZlbnRMaXN0ZW5lcihsLG8/VDpJLG8pOm4ucmVtb3ZlRXZlbnRMaXN0ZW5lcihsLG8/VDpJLG8pO2Vsc2UgaWYoXCJkYW5nZXJvdXNseVNldElubmVySFRNTFwiIT09bCl7aWYodClsPWwucmVwbGFjZSgveGxpbmtbSDpoXS8sXCJoXCIpLnJlcGxhY2UoL3NOYW1lJC8sXCJzXCIpO2Vsc2UgaWYoXCJocmVmXCIhPT1sJiZcImxpc3RcIiE9PWwmJlwiZm9ybVwiIT09bCYmXCJ0YWJJbmRleFwiIT09bCYmXCJkb3dubG9hZFwiIT09bCYmbCBpbiBuKXRyeXtuW2xdPW51bGw9PXU/XCJcIjp1O2JyZWFrIG59Y2F0Y2gobil7fVwiZnVuY3Rpb25cIj09dHlwZW9mIHV8fChudWxsIT11JiYoITEhPT11fHxcImFcIj09PWxbMF0mJlwiclwiPT09bFsxXSk/bi5zZXRBdHRyaWJ1dGUobCx1KTpuLnJlbW92ZUF0dHJpYnV0ZShsKSl9fWZ1bmN0aW9uIEkobil7dGhpcy5sW24udHlwZSshMV0obC5ldmVudD9sLmV2ZW50KG4pOm4pfWZ1bmN0aW9uIFQobil7dGhpcy5sW24udHlwZSshMF0obC5ldmVudD9sLmV2ZW50KG4pOm4pfWZ1bmN0aW9uIGoobix1LGksdCxvLHIsZixlLGMpe3ZhciBzLGgsdix5LHAsayxiLG0sZyx4LEEsUD11LnR5cGU7aWYodm9pZCAwIT09dS5jb25zdHJ1Y3RvcilyZXR1cm4gbnVsbDtudWxsIT1pLl9faCYmKGM9aS5fX2gsZT11Ll9fZT1pLl9fZSx1Ll9faD1udWxsLHI9W2VdKSwocz1sLl9fYikmJnModSk7dHJ5e246aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgUCl7aWYobT11LnByb3BzLGc9KHM9UC5jb250ZXh0VHlwZSkmJnRbcy5fX2NdLHg9cz9nP2cucHJvcHMudmFsdWU6cy5fXzp0LGkuX19jP2I9KGg9dS5fX2M9aS5fX2MpLl9fPWguX19FOihcInByb3RvdHlwZVwiaW4gUCYmUC5wcm90b3R5cGUucmVuZGVyP3UuX19jPWg9bmV3IFAobSx4KToodS5fX2M9aD1uZXcgXyhtLHgpLGguY29uc3RydWN0b3I9UCxoLnJlbmRlcj1PKSxnJiZnLnN1YihoKSxoLnByb3BzPW0saC5zdGF0ZXx8KGguc3RhdGU9e30pLGguY29udGV4dD14LGguX19uPXQsdj1oLl9fZD0hMCxoLl9faD1bXSksbnVsbD09aC5fX3MmJihoLl9fcz1oLnN0YXRlKSxudWxsIT1QLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyYmKGguX19zPT1oLnN0YXRlJiYoaC5fX3M9YSh7fSxoLl9fcykpLGEoaC5fX3MsUC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMobSxoLl9fcykpKSx5PWgucHJvcHMscD1oLnN0YXRlLHYpbnVsbD09UC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMmJm51bGwhPWguY29tcG9uZW50V2lsbE1vdW50JiZoLmNvbXBvbmVudFdpbGxNb3VudCgpLG51bGwhPWguY29tcG9uZW50RGlkTW91bnQmJmguX19oLnB1c2goaC5jb21wb25lbnREaWRNb3VudCk7ZWxzZXtpZihudWxsPT1QLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyYmbSE9PXkmJm51bGwhPWguY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyYmaC5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG0seCksIWguX19lJiZudWxsIT1oLnNob3VsZENvbXBvbmVudFVwZGF0ZSYmITE9PT1oLnNob3VsZENvbXBvbmVudFVwZGF0ZShtLGguX19zLHgpfHx1Ll9fdj09PWkuX192KXtoLnByb3BzPW0saC5zdGF0ZT1oLl9fcyx1Ll9fdiE9PWkuX192JiYoaC5fX2Q9ITEpLGguX192PXUsdS5fX2U9aS5fX2UsdS5fX2s9aS5fX2ssdS5fX2suZm9yRWFjaChmdW5jdGlvbihuKXtuJiYobi5fXz11KX0pLGguX19oLmxlbmd0aCYmZi5wdXNoKGgpO2JyZWFrIG59bnVsbCE9aC5jb21wb25lbnRXaWxsVXBkYXRlJiZoLmNvbXBvbmVudFdpbGxVcGRhdGUobSxoLl9fcyx4KSxudWxsIT1oLmNvbXBvbmVudERpZFVwZGF0ZSYmaC5fX2gucHVzaChmdW5jdGlvbigpe2guY29tcG9uZW50RGlkVXBkYXRlKHkscCxrKX0pfWguY29udGV4dD14LGgucHJvcHM9bSxoLnN0YXRlPWguX19zLChzPWwuX19yKSYmcyh1KSxoLl9fZD0hMSxoLl9fdj11LGguX19QPW4scz1oLnJlbmRlcihoLnByb3BzLGguc3RhdGUsaC5jb250ZXh0KSxoLnN0YXRlPWguX19zLG51bGwhPWguZ2V0Q2hpbGRDb250ZXh0JiYodD1hKGEoe30sdCksaC5nZXRDaGlsZENvbnRleHQoKSkpLHZ8fG51bGw9PWguZ2V0U25hcHNob3RCZWZvcmVVcGRhdGV8fChrPWguZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUoeSxwKSksQT1udWxsIT1zJiZzLnR5cGU9PT1kJiZudWxsPT1zLmtleT9zLnByb3BzLmNoaWxkcmVuOnMsdyhuLEFycmF5LmlzQXJyYXkoQSk/QTpbQV0sdSxpLHQsbyxyLGYsZSxjKSxoLmJhc2U9dS5fX2UsdS5fX2g9bnVsbCxoLl9faC5sZW5ndGgmJmYucHVzaChoKSxiJiYoaC5fX0U9aC5fXz1udWxsKSxoLl9fZT0hMX1lbHNlIG51bGw9PXImJnUuX192PT09aS5fX3Y/KHUuX19rPWkuX19rLHUuX19lPWkuX19lKTp1Ll9fZT1MKGkuX19lLHUsaSx0LG8scixmLGMpOyhzPWwuZGlmZmVkKSYmcyh1KX1jYXRjaChuKXt1Ll9fdj1udWxsLChjfHxudWxsIT1yKSYmKHUuX19lPWUsdS5fX2g9ISFjLHJbci5pbmRleE9mKGUpXT1udWxsKSxsLl9fZShuLHUsaSl9fWZ1bmN0aW9uIHoobix1KXtsLl9fYyYmbC5fX2ModSxuKSxuLnNvbWUoZnVuY3Rpb24odSl7dHJ5e249dS5fX2gsdS5fX2g9W10sbi5zb21lKGZ1bmN0aW9uKG4pe24uY2FsbCh1KX0pfWNhdGNoKG4pe2wuX19lKG4sdS5fX3YpfX0pfWZ1bmN0aW9uIEwobCx1LGksdCxvLHIsZixjKXt2YXIgcyxhLHYseT1pLnByb3BzLHA9dS5wcm9wcyxkPXUudHlwZSxfPTA7aWYoXCJzdmdcIj09PWQmJihvPSEwKSxudWxsIT1yKWZvcig7XzxyLmxlbmd0aDtfKyspaWYoKHM9cltfXSkmJihzPT09bHx8KGQ/cy5sb2NhbE5hbWU9PWQ6Mz09cy5ub2RlVHlwZSkpKXtsPXMscltfXT1udWxsO2JyZWFrfWlmKG51bGw9PWwpe2lmKG51bGw9PT1kKXJldHVybiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShwKTtsPW8/ZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixkKTpkb2N1bWVudC5jcmVhdGVFbGVtZW50KGQscC5pcyYmcCkscj1udWxsLGM9ITF9aWYobnVsbD09PWQpeT09PXB8fGMmJmwuZGF0YT09PXB8fChsLmRhdGE9cCk7ZWxzZXtpZihyPXImJm4uY2FsbChsLmNoaWxkTm9kZXMpLGE9KHk9aS5wcm9wc3x8ZSkuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwsdj1wLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MLCFjKXtpZihudWxsIT1yKWZvcih5PXt9LF89MDtfPGwuYXR0cmlidXRlcy5sZW5ndGg7XysrKXlbbC5hdHRyaWJ1dGVzW19dLm5hbWVdPWwuYXR0cmlidXRlc1tfXS52YWx1ZTsodnx8YSkmJih2JiYoYSYmdi5fX2h0bWw9PWEuX19odG1sfHx2Ll9faHRtbD09PWwuaW5uZXJIVE1MKXx8KGwuaW5uZXJIVE1MPXYmJnYuX19odG1sfHxcIlwiKSl9aWYoQyhsLHAseSxvLGMpLHYpdS5fX2s9W107ZWxzZSBpZihfPXUucHJvcHMuY2hpbGRyZW4sdyhsLEFycmF5LmlzQXJyYXkoXyk/XzpbX10sdSxpLHQsbyYmXCJmb3JlaWduT2JqZWN0XCIhPT1kLHIsZixyP3JbMF06aS5fX2smJmsoaSwwKSxjKSxudWxsIT1yKWZvcihfPXIubGVuZ3RoO18tLTspbnVsbCE9cltfXSYmaChyW19dKTtjfHwoXCJ2YWx1ZVwiaW4gcCYmdm9pZCAwIT09KF89cC52YWx1ZSkmJihfIT09bC52YWx1ZXx8XCJwcm9ncmVzc1wiPT09ZCYmIV8pJiZIKGwsXCJ2YWx1ZVwiLF8seS52YWx1ZSwhMSksXCJjaGVja2VkXCJpbiBwJiZ2b2lkIDAhPT0oXz1wLmNoZWNrZWQpJiZfIT09bC5jaGVja2VkJiZIKGwsXCJjaGVja2VkXCIsXyx5LmNoZWNrZWQsITEpKX1yZXR1cm4gbH1mdW5jdGlvbiBNKG4sdSxpKXt0cnl7XCJmdW5jdGlvblwiPT10eXBlb2Ygbj9uKHUpOm4uY3VycmVudD11fWNhdGNoKG4pe2wuX19lKG4saSl9fWZ1bmN0aW9uIE4obix1LGkpe3ZhciB0LG87aWYobC51bm1vdW50JiZsLnVubW91bnQobiksKHQ9bi5yZWYpJiYodC5jdXJyZW50JiZ0LmN1cnJlbnQhPT1uLl9fZXx8TSh0LG51bGwsdSkpLG51bGwhPSh0PW4uX19jKSl7aWYodC5jb21wb25lbnRXaWxsVW5tb3VudCl0cnl7dC5jb21wb25lbnRXaWxsVW5tb3VudCgpfWNhdGNoKG4pe2wuX19lKG4sdSl9dC5iYXNlPXQuX19QPW51bGx9aWYodD1uLl9faylmb3Iobz0wO288dC5sZW5ndGg7bysrKXRbb10mJk4odFtvXSx1LFwiZnVuY3Rpb25cIiE9dHlwZW9mIG4udHlwZSk7aXx8bnVsbD09bi5fX2V8fGgobi5fX2UpLG4uX19lPW4uX19kPXZvaWQgMH1mdW5jdGlvbiBPKG4sbCx1KXtyZXR1cm4gdGhpcy5jb25zdHJ1Y3RvcihuLHUpfWZ1bmN0aW9uIFModSxpLHQpe3ZhciBvLHIsZjtsLl9fJiZsLl9fKHUsaSkscj0obz1cImZ1bmN0aW9uXCI9PXR5cGVvZiB0KT9udWxsOnQmJnQuX19rfHxpLl9fayxmPVtdLGooaSx1PSghbyYmdHx8aSkuX19rPXYoZCxudWxsLFt1XSkscnx8ZSxlLHZvaWQgMCE9PWkub3duZXJTVkdFbGVtZW50LCFvJiZ0P1t0XTpyP251bGw6aS5maXJzdENoaWxkP24uY2FsbChpLmNoaWxkTm9kZXMpOm51bGwsZiwhbyYmdD90OnI/ci5fX2U6aS5maXJzdENoaWxkLG8pLHooZix1KX1mdW5jdGlvbiBxKG4sbCl7UyhuLGwscSl9ZnVuY3Rpb24gQihsLHUsaSl7dmFyIHQsbyxyLGY9YSh7fSxsLnByb3BzKTtmb3IociBpbiB1KVwia2V5XCI9PXI/dD11W3JdOlwicmVmXCI9PXI/bz11W3JdOmZbcl09dVtyXTtyZXR1cm4gYXJndW1lbnRzLmxlbmd0aD4yJiYoZi5jaGlsZHJlbj1hcmd1bWVudHMubGVuZ3RoPjM/bi5jYWxsKGFyZ3VtZW50cywyKTppKSx5KGwudHlwZSxmLHR8fGwua2V5LG98fGwucmVmLG51bGwpfWZ1bmN0aW9uIEQobixsKXt2YXIgdT17X19jOmw9XCJfX2NDXCIrZisrLF9fOm4sQ29uc3VtZXI6ZnVuY3Rpb24obixsKXtyZXR1cm4gbi5jaGlsZHJlbihsKX0sUHJvdmlkZXI6ZnVuY3Rpb24obil7dmFyIHUsaTtyZXR1cm4gdGhpcy5nZXRDaGlsZENvbnRleHR8fCh1PVtdLChpPXt9KVtsXT10aGlzLHRoaXMuZ2V0Q2hpbGRDb250ZXh0PWZ1bmN0aW9uKCl7cmV0dXJuIGl9LHRoaXMuc2hvdWxkQ29tcG9uZW50VXBkYXRlPWZ1bmN0aW9uKG4pe3RoaXMucHJvcHMudmFsdWUhPT1uLnZhbHVlJiZ1LnNvbWUobSl9LHRoaXMuc3ViPWZ1bmN0aW9uKG4pe3UucHVzaChuKTt2YXIgbD1uLmNvbXBvbmVudFdpbGxVbm1vdW50O24uY29tcG9uZW50V2lsbFVubW91bnQ9ZnVuY3Rpb24oKXt1LnNwbGljZSh1LmluZGV4T2YobiksMSksbCYmbC5jYWxsKG4pfX0pLG4uY2hpbGRyZW59fTtyZXR1cm4gdS5Qcm92aWRlci5fXz11LkNvbnN1bWVyLmNvbnRleHRUeXBlPXV9bj1jLnNsaWNlLGw9e19fZTpmdW5jdGlvbihuLGwpe2Zvcih2YXIgdSxpLHQ7bD1sLl9fOylpZigodT1sLl9fYykmJiF1Ll9fKXRyeXtpZigoaT11LmNvbnN0cnVjdG9yKSYmbnVsbCE9aS5nZXREZXJpdmVkU3RhdGVGcm9tRXJyb3ImJih1LnNldFN0YXRlKGkuZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yKG4pKSx0PXUuX19kKSxudWxsIT11LmNvbXBvbmVudERpZENhdGNoJiYodS5jb21wb25lbnREaWRDYXRjaChuKSx0PXUuX19kKSx0KXJldHVybiB1Ll9fRT11fWNhdGNoKGwpe249bH10aHJvdyBufX0sdT0wLGk9ZnVuY3Rpb24obil7cmV0dXJuIG51bGwhPW4mJnZvaWQgMD09PW4uY29uc3RydWN0b3J9LF8ucHJvdG90eXBlLnNldFN0YXRlPWZ1bmN0aW9uKG4sbCl7dmFyIHU7dT1udWxsIT10aGlzLl9fcyYmdGhpcy5fX3MhPT10aGlzLnN0YXRlP3RoaXMuX19zOnRoaXMuX19zPWEoe30sdGhpcy5zdGF0ZSksXCJmdW5jdGlvblwiPT10eXBlb2YgbiYmKG49bihhKHt9LHUpLHRoaXMucHJvcHMpKSxuJiZhKHUsbiksbnVsbCE9biYmdGhpcy5fX3YmJihsJiZ0aGlzLl9faC5wdXNoKGwpLG0odGhpcykpfSxfLnByb3RvdHlwZS5mb3JjZVVwZGF0ZT1mdW5jdGlvbihuKXt0aGlzLl9fdiYmKHRoaXMuX19lPSEwLG4mJnRoaXMuX19oLnB1c2gobiksbSh0aGlzKSl9LF8ucHJvdG90eXBlLnJlbmRlcj1kLHQ9W10sbz1cImZ1bmN0aW9uXCI9PXR5cGVvZiBQcm9taXNlP1Byb21pc2UucHJvdG90eXBlLnRoZW4uYmluZChQcm9taXNlLnJlc29sdmUoKSk6c2V0VGltZW91dCxnLl9fcj0wLGY9MDtleHBvcnR7UyBhcyByZW5kZXIscSBhcyBoeWRyYXRlLHYgYXMgY3JlYXRlRWxlbWVudCx2IGFzIGgsZCBhcyBGcmFnbWVudCxwIGFzIGNyZWF0ZVJlZixpIGFzIGlzVmFsaWRFbGVtZW50LF8gYXMgQ29tcG9uZW50LEIgYXMgY2xvbmVFbGVtZW50LEQgYXMgY3JlYXRlQ29udGV4dCxBIGFzIHRvQ2hpbGRBcnJheSxsIGFzIG9wdGlvbnN9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cHJlYWN0Lm1vZHVsZS5qcy5tYXBcbiIsImltcG9ydHtvcHRpb25zIGFzIG59ZnJvbVwicHJlYWN0XCI7dmFyIHQsdSxyLG89MCxpPVtdLGM9bi5fX2IsZj1uLl9fcixlPW4uZGlmZmVkLGE9bi5fX2Msdj1uLnVubW91bnQ7ZnVuY3Rpb24gbSh0LHIpe24uX19oJiZuLl9faCh1LHQsb3x8ciksbz0wO3ZhciBpPXUuX19IfHwodS5fX0g9e19fOltdLF9faDpbXX0pO3JldHVybiB0Pj1pLl9fLmxlbmd0aCYmaS5fXy5wdXNoKHt9KSxpLl9fW3RdfWZ1bmN0aW9uIGwobil7cmV0dXJuIG89MSxwKHcsbil9ZnVuY3Rpb24gcChuLHIsbyl7dmFyIGk9bSh0KyssMik7cmV0dXJuIGkudD1uLGkuX19jfHwoaS5fXz1bbz9vKHIpOncodm9pZCAwLHIpLGZ1bmN0aW9uKG4pe3ZhciB0PWkudChpLl9fWzBdLG4pO2kuX19bMF0hPT10JiYoaS5fXz1bdCxpLl9fWzFdXSxpLl9fYy5zZXRTdGF0ZSh7fSkpfV0saS5fX2M9dSksaS5fX31mdW5jdGlvbiB5KHIsbyl7dmFyIGk9bSh0KyssMyk7IW4uX19zJiZrKGkuX19ILG8pJiYoaS5fXz1yLGkuX19IPW8sdS5fX0guX19oLnB1c2goaSkpfWZ1bmN0aW9uIGgocixvKXt2YXIgaT1tKHQrKyw0KTshbi5fX3MmJmsoaS5fX0gsbykmJihpLl9fPXIsaS5fX0g9byx1Ll9faC5wdXNoKGkpKX1mdW5jdGlvbiBzKG4pe3JldHVybiBvPTUsZChmdW5jdGlvbigpe3JldHVybntjdXJyZW50Om59fSxbXSl9ZnVuY3Rpb24gXyhuLHQsdSl7bz02LGgoZnVuY3Rpb24oKXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBuP24odCgpKTpuJiYobi5jdXJyZW50PXQoKSl9LG51bGw9PXU/dTp1LmNvbmNhdChuKSl9ZnVuY3Rpb24gZChuLHUpe3ZhciByPW0odCsrLDcpO3JldHVybiBrKHIuX19ILHUpJiYoci5fXz1uKCksci5fX0g9dSxyLl9faD1uKSxyLl9ffWZ1bmN0aW9uIEEobix0KXtyZXR1cm4gbz04LGQoZnVuY3Rpb24oKXtyZXR1cm4gbn0sdCl9ZnVuY3Rpb24gRihuKXt2YXIgcj11LmNvbnRleHRbbi5fX2NdLG89bSh0KyssOSk7cmV0dXJuIG8uYz1uLHI/KG51bGw9PW8uX18mJihvLl9fPSEwLHIuc3ViKHUpKSxyLnByb3BzLnZhbHVlKTpuLl9ffWZ1bmN0aW9uIFQodCx1KXtuLnVzZURlYnVnVmFsdWUmJm4udXNlRGVidWdWYWx1ZSh1P3UodCk6dCl9ZnVuY3Rpb24gcShuKXt2YXIgcj1tKHQrKywxMCksbz1sKCk7cmV0dXJuIHIuX189bix1LmNvbXBvbmVudERpZENhdGNofHwodS5jb21wb25lbnREaWRDYXRjaD1mdW5jdGlvbihuKXtyLl9fJiZyLl9fKG4pLG9bMV0obil9KSxbb1swXSxmdW5jdGlvbigpe29bMV0odm9pZCAwKX1dfWZ1bmN0aW9uIHgoKXtpLmZvckVhY2goZnVuY3Rpb24odCl7aWYodC5fX1ApdHJ5e3QuX19ILl9faC5mb3JFYWNoKGcpLHQuX19ILl9faC5mb3JFYWNoKGopLHQuX19ILl9faD1bXX1jYXRjaCh1KXt0Ll9fSC5fX2g9W10sbi5fX2UodSx0Ll9fdil9fSksaT1bXX1uLl9fYj1mdW5jdGlvbihuKXt1PW51bGwsYyYmYyhuKX0sbi5fX3I9ZnVuY3Rpb24obil7ZiYmZihuKSx0PTA7dmFyIHI9KHU9bi5fX2MpLl9fSDtyJiYoci5fX2guZm9yRWFjaChnKSxyLl9faC5mb3JFYWNoKGopLHIuX19oPVtdKX0sbi5kaWZmZWQ9ZnVuY3Rpb24odCl7ZSYmZSh0KTt2YXIgbz10Ll9fYztvJiZvLl9fSCYmby5fX0guX19oLmxlbmd0aCYmKDEhPT1pLnB1c2gobykmJnI9PT1uLnJlcXVlc3RBbmltYXRpb25GcmFtZXx8KChyPW4ucmVxdWVzdEFuaW1hdGlvbkZyYW1lKXx8ZnVuY3Rpb24obil7dmFyIHQsdT1mdW5jdGlvbigpe2NsZWFyVGltZW91dChyKSxiJiZjYW5jZWxBbmltYXRpb25GcmFtZSh0KSxzZXRUaW1lb3V0KG4pfSxyPXNldFRpbWVvdXQodSwxMDApO2ImJih0PXJlcXVlc3RBbmltYXRpb25GcmFtZSh1KSl9KSh4KSksdT12b2lkIDB9LG4uX19jPWZ1bmN0aW9uKHQsdSl7dS5zb21lKGZ1bmN0aW9uKHQpe3RyeXt0Ll9faC5mb3JFYWNoKGcpLHQuX19oPXQuX19oLmZpbHRlcihmdW5jdGlvbihuKXtyZXR1cm4hbi5fX3x8aihuKX0pfWNhdGNoKHIpe3Uuc29tZShmdW5jdGlvbihuKXtuLl9faCYmKG4uX19oPVtdKX0pLHU9W10sbi5fX2Uocix0Ll9fdil9fSksYSYmYSh0LHUpfSxuLnVubW91bnQ9ZnVuY3Rpb24odCl7diYmdih0KTt2YXIgdT10Ll9fYztpZih1JiZ1Ll9fSCl0cnl7dS5fX0guX18uZm9yRWFjaChnKX1jYXRjaCh0KXtuLl9fZSh0LHUuX192KX19O3ZhciBiPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVlc3RBbmltYXRpb25GcmFtZTtmdW5jdGlvbiBnKG4pe3ZhciB0PXU7XCJmdW5jdGlvblwiPT10eXBlb2Ygbi5fX2MmJm4uX19jKCksdT10fWZ1bmN0aW9uIGoobil7dmFyIHQ9dTtuLl9fYz1uLl9fKCksdT10fWZ1bmN0aW9uIGsobix0KXtyZXR1cm4hbnx8bi5sZW5ndGghPT10Lmxlbmd0aHx8dC5zb21lKGZ1bmN0aW9uKHQsdSl7cmV0dXJuIHQhPT1uW3VdfSl9ZnVuY3Rpb24gdyhuLHQpe3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIHQ/dChuKTp0fWV4cG9ydHtsIGFzIHVzZVN0YXRlLHAgYXMgdXNlUmVkdWNlcix5IGFzIHVzZUVmZmVjdCxoIGFzIHVzZUxheW91dEVmZmVjdCxzIGFzIHVzZVJlZixfIGFzIHVzZUltcGVyYXRpdmVIYW5kbGUsZCBhcyB1c2VNZW1vLEEgYXMgdXNlQ2FsbGJhY2ssRiBhcyB1c2VDb250ZXh0LFQgYXMgdXNlRGVidWdWYWx1ZSxxIGFzIHVzZUVycm9yQm91bmRhcnl9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aG9va3MubW9kdWxlLmpzLm1hcFxuIiwiaW1wb3J0e29wdGlvbnMgYXMgcixGcmFnbWVudCBhcyBffWZyb21cInByZWFjdFwiO2V4cG9ydHtGcmFnbWVudH1mcm9tXCJwcmVhY3RcIjt2YXIgbz0wO2Z1bmN0aW9uIGUoXyxlLG4sdCxmKXt2YXIgbCxzLHU9e307Zm9yKHMgaW4gZSlcInJlZlwiPT1zP2w9ZVtzXTp1W3NdPWVbc107dmFyIGE9e3R5cGU6Xyxwcm9wczp1LGtleTpuLHJlZjpsLF9fazpudWxsLF9fOm51bGwsX19iOjAsX19lOm51bGwsX19kOnZvaWQgMCxfX2M6bnVsbCxfX2g6bnVsbCxjb25zdHJ1Y3Rvcjp2b2lkIDAsX192Oi0tbyxfX3NvdXJjZTp0LF9fc2VsZjpmfTtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBfJiYobD1fLmRlZmF1bHRQcm9wcykpZm9yKHMgaW4gbCl2b2lkIDA9PT11W3NdJiYodVtzXT1sW3NdKTtyZXR1cm4gci52bm9kZSYmci52bm9kZShhKSxhfWV4cG9ydHtlIGFzIGpzeCxlIGFzIGpzeHMsZSBhcyBqc3hERVZ9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9anN4UnVudGltZS5tb2R1bGUuanMubWFwXG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gWE1MRm9ybWF0dGVyT3B0aW9uc1xuICogIEBwcm9wZXJ0eSB7U3RyaW5nfSBbaW5kZW50YXRpb249JyAgICAnXSBUaGUgdmFsdWUgdXNlZCBmb3IgaW5kZW50YXRpb25cbiAqICBAcHJvcGVydHkge2Z1bmN0aW9uKG5vZGUpOiBib29sZWFufSBbZmlsdGVyXSBSZXR1cm4gZmFsc2UgdG8gZXhjbHVkZSB0aGUgbm9kZS5cbiAqICBAcHJvcGVydHkge0Jvb2xlYW59IFtjb2xsYXBzZUNvbnRlbnQ9ZmFsc2VdIFRydWUgdG8ga2VlcCBjb250ZW50IGluIHRoZSBzYW1lIGxpbmUgYXMgdGhlIGVsZW1lbnQuIE9ubHkgd29ya3MgaWYgZWxlbWVudCBjb250YWlucyBhdCBsZWFzdCBvbmUgdGV4dCBub2RlXG4gKiAgQHByb3BlcnR5IHtTdHJpbmd9IFtsaW5lU2VwYXJhdG9yPSdcXHJcXG4nXSBUaGUgbGluZSBzZXBhcmF0b3IgdG8gdXNlXG4gKiAgQHByb3BlcnR5IHtTdHJpbmd9IFt3aGl0ZVNwYWNlQXRFbmRPZlNlbGZjbG9zaW5nVGFnPWZhbHNlXSB0byBlaXRoZXIgZW5kIGFkIHNlbGYgY2xvc2luZyB0YWcgd2l0aCBgPHRhZy8+YCBvciBgPHRhZyAvPmBcbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IFhNTEZvcm1hdHRlclN0YXRlXG4gKiBAcGFyYW0ge1N0cmluZ30gY29udGVudFxuICogQHBhcmFtIHtOdW1iZXJ9IGxldmVsXG4gKiBAcGFyYW0ge1hNTEZvcm1hdHRlck9wdGlvbnN9IG9wdGlvbnNcbiAqL1xuXG4vKipcbiAqIEBwYXJhbSB7WE1MRm9ybWF0dGVyU3RhdGV9IHN0YXRlXG4gKiBAcmV0dXJuIHt2b2lkfVxuICovXG5mdW5jdGlvbiBuZXdMaW5lKHN0YXRlKSB7XG4gICAgaWYgKCFzdGF0ZS5vcHRpb25zLmluZGVudGF0aW9uICYmICFzdGF0ZS5vcHRpb25zLmxpbmVTZXBhcmF0b3IpIHJldHVybjtcbiAgICBzdGF0ZS5jb250ZW50ICs9IHN0YXRlLm9wdGlvbnMubGluZVNlcGFyYXRvcjtcbiAgICBsZXQgaTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgc3RhdGUubGV2ZWw7IGkrKykge1xuICAgICAgICBzdGF0ZS5jb250ZW50ICs9IHN0YXRlLm9wdGlvbnMuaW5kZW50YXRpb247XG4gICAgfVxufVxuXG4vKipcbiAqIEBwYXJhbSB7WE1MRm9ybWF0dGVyU3RhdGV9IHN0YXRlXG4gKiBAcGFyYW0ge1N0cmluZ30gY29udGVudFxuICogQHJldHVybiB7dm9pZH1cbiAqL1xuZnVuY3Rpb24gYXBwZW5kQ29udGVudChzdGF0ZSwgY29udGVudCkge1xuICAgIHN0YXRlLmNvbnRlbnQgKz0gY29udGVudDtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge09iamVjdH0gbm9kZVxuICogQHBhcmFtIHtYTUxGb3JtYXR0ZXJTdGF0ZX0gc3RhdGVcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gcHJlc2VydmVTcGFjZVxuICogQHJldHVybiB7dm9pZH1cbiAqL1xuZnVuY3Rpb24gcHJvY2Vzc05vZGUobm9kZSwgc3RhdGUsIHByZXNlcnZlU3BhY2UpIHtcbiAgICBpZiAodHlwZW9mIG5vZGUuY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcHJvY2Vzc0NvbnRlbnROb2RlKG5vZGUsIHN0YXRlLCBwcmVzZXJ2ZVNwYWNlKTtcbiAgICB9IGVsc2UgaWYgKG5vZGUudHlwZSA9PT0gJ0VsZW1lbnQnKSB7XG4gICAgICAgIHByb2Nlc3NFbGVtZW50Tm9kZShub2RlLCBzdGF0ZSwgcHJlc2VydmVTcGFjZSk7XG4gICAgfSBlbHNlIGlmIChub2RlLnR5cGUgPT09ICdQcm9jZXNzaW5nSW5zdHJ1Y3Rpb24nKSB7XG4gICAgICAgIHByb2Nlc3NQcm9jZXNzaW5nSW50cnVjdGlvbihub2RlLCBzdGF0ZSwgcHJlc2VydmVTcGFjZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmtub3duIG5vZGUgdHlwZTogJyArIG5vZGUudHlwZSk7XG4gICAgfVxufVxuXG4vKipcbiAqIEBwYXJhbSB7T2JqZWN0fSBub2RlXG4gKiBAcGFyYW0ge1hNTEZvcm1hdHRlclN0YXRlfSBzdGF0ZVxuICogQHBhcmFtIHtCb29sZWFufSBwcmVzZXJ2ZVNwYWNlXG4gKiBAcmV0dXJuIHt2b2lkfVxuICovXG5mdW5jdGlvbiBwcm9jZXNzQ29udGVudE5vZGUobm9kZSwgc3RhdGUsIHByZXNlcnZlU3BhY2UpIHtcbiAgICBpZiAoIXByZXNlcnZlU3BhY2UpIHtcbiAgICAgICAgbm9kZS5jb250ZW50ID0gbm9kZS5jb250ZW50LnRyaW0oKTtcbiAgICB9XG4gICAgaWYgKG5vZGUuY29udGVudC5sZW5ndGggPiAwKSB7XG4gICAgICAgIGlmICghcHJlc2VydmVTcGFjZSAmJiBzdGF0ZS5jb250ZW50Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIG5ld0xpbmUoc3RhdGUpO1xuICAgICAgICB9XG4gICAgICAgIGFwcGVuZENvbnRlbnQoc3RhdGUsIG5vZGUuY29udGVudCk7XG4gICAgfVxufVxuXG4vKipcbiAqIEBwYXJhbSB7T2JqZWN0fSBub2RlXG4gKiBAcGFyYW0ge1hNTEZvcm1hdHRlclN0YXRlfSBzdGF0ZVxuICogQHBhcmFtIHtCb29sZWFufSBwcmVzZXJ2ZVNwYWNlXG4gKiBAcmV0dXJuIHt2b2lkfVxuICovXG5mdW5jdGlvbiBwcm9jZXNzRWxlbWVudE5vZGUobm9kZSwgc3RhdGUsIHByZXNlcnZlU3BhY2UpIHtcbiAgICBpZiAoIXByZXNlcnZlU3BhY2UgJiYgc3RhdGUuY29udGVudC5sZW5ndGggPiAwKSB7XG4gICAgICAgIG5ld0xpbmUoc3RhdGUpO1xuICAgIH1cblxuICAgIGFwcGVuZENvbnRlbnQoc3RhdGUsICc8JyArIG5vZGUubmFtZSk7XG4gICAgcHJvY2Vzc0F0dHJpYnV0ZXMoc3RhdGUsIG5vZGUuYXR0cmlidXRlcyk7XG5cbiAgICBpZiAobm9kZS5jaGlsZHJlbiA9PT0gbnVsbCkge1xuICAgICAgICBjb25zdCBzZWxmQ2xvc2luZ05vZGVDbG9zaW5nVGFnID0gc3RhdGUub3B0aW9ucy53aGl0ZVNwYWNlQXRFbmRPZlNlbGZjbG9zaW5nVGFnID8gJyAvPicgOiAnLz4nXG4gICAgICAgIC8vIHNlbGYtY2xvc2luZyBub2RlXG4gICAgICAgIGFwcGVuZENvbnRlbnQoc3RhdGUsIHNlbGZDbG9zaW5nTm9kZUNsb3NpbmdUYWcpO1xuICAgIH0gZWxzZSBpZiAobm9kZS5jaGlsZHJlbi5sZW5ndGggPT09IDApIHtcbiAgICAgICAgLy8gZW1wdHkgbm9kZVxuICAgICAgICBhcHBlbmRDb250ZW50KHN0YXRlLCAnPjwvJyArIG5vZGUubmFtZSArICc+Jyk7XG4gICAgfSBlbHNlIHtcblxuICAgICAgICBhcHBlbmRDb250ZW50KHN0YXRlLCAnPicpO1xuXG4gICAgICAgIHN0YXRlLmxldmVsKys7XG5cbiAgICAgICAgbGV0IG5vZGVQcmVzZXJ2ZVNwYWNlID0gbm9kZS5hdHRyaWJ1dGVzWyd4bWw6c3BhY2UnXSA9PT0gJ3ByZXNlcnZlJztcblxuICAgICAgICBpZiAoIW5vZGVQcmVzZXJ2ZVNwYWNlICYmIHN0YXRlLm9wdGlvbnMuY29sbGFwc2VDb250ZW50KSB7XG5cbiAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5zVGV4dE5vZGVzID0gbm9kZS5jaGlsZHJlbi5zb21lKGZ1bmN0aW9uKGNoaWxkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNoaWxkLnR5cGUgPT09ICdUZXh0JyAmJiBjaGlsZC5jb250ZW50LnRyaW0oKSAhPT0gJyc7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKGNvbnRhaW5zVGV4dE5vZGVzKSB7XG4gICAgICAgICAgICAgICAgbm9kZVByZXNlcnZlU3BhY2UgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbm9kZS5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkKSB7XG4gICAgICAgICAgICBwcm9jZXNzTm9kZShjaGlsZCwgc3RhdGUsIHByZXNlcnZlU3BhY2UgfHwgbm9kZVByZXNlcnZlU3BhY2UsIHN0YXRlLm9wdGlvbnMpO1xuICAgICAgICB9KTtcblxuICAgICAgICBzdGF0ZS5sZXZlbC0tO1xuXG4gICAgICAgIGlmICghcHJlc2VydmVTcGFjZSAmJiAhbm9kZVByZXNlcnZlU3BhY2UpIHtcbiAgICAgICAgICAgIG5ld0xpbmUoc3RhdGUpO1xuICAgICAgICB9XG4gICAgICAgIGFwcGVuZENvbnRlbnQoc3RhdGUsICc8LycgKyBub2RlLm5hbWUgKyAnPicpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge1hNTEZvcm1hdHRlclN0YXRlfSBzdGF0ZVxuICogQHBhcmFtIHtSZWNvcmQ8U3RyaW5nLCBTdHJpbmc+fSBhdHRyaWJ1dGVzXG4gKiBAcmV0dXJuIHt2b2lkfVxuICovXG5mdW5jdGlvbiBwcm9jZXNzQXR0cmlidXRlcyhzdGF0ZSwgYXR0cmlidXRlcykge1xuICAgIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24oYXR0cikge1xuICAgICAgICBjb25zdCBlc2NhcGVkID0gYXR0cmlidXRlc1thdHRyXS5yZXBsYWNlKC9cIi9nLCAnJnF1b3Q7Jyk7XG4gICAgICAgIGFwcGVuZENvbnRlbnQoc3RhdGUsICcgJyArIGF0dHIgKyAnPVwiJyArIGVzY2FwZWQgKyAnXCInKTtcbiAgICB9KTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge09iamVjdH0gbm9kZVxuICogQHBhcmFtIHtYTUxGb3JtYXR0ZXJTdGF0ZX0gc3RhdGVcbiAqIEByZXR1cm4ge3ZvaWR9XG4gKi9cbmZ1bmN0aW9uIHByb2Nlc3NQcm9jZXNzaW5nSW50cnVjdGlvbihub2RlLCBzdGF0ZSkge1xuICAgIGlmIChzdGF0ZS5jb250ZW50Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgbmV3TGluZShzdGF0ZSk7XG4gICAgfVxuICAgIGFwcGVuZENvbnRlbnQoc3RhdGUsICc8PycgKyBub2RlLm5hbWUpO1xuICAgIHByb2Nlc3NBdHRyaWJ1dGVzKHN0YXRlLCBub2RlLmF0dHJpYnV0ZXMpO1xuICAgIGFwcGVuZENvbnRlbnQoc3RhdGUsICc/PicpO1xufVxuXG5cbi8qKlxuICogQ29udmVydHMgdGhlIGdpdmVuIFhNTCBpbnRvIGh1bWFuIHJlYWRhYmxlIGZvcm1hdC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30geG1sXG4gKiBAcGFyYW0ge1hNTEZvcm1hdHRlck9wdGlvbnN9IG9wdGlvbnNcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGZvcm1hdCh4bWwsIG9wdGlvbnMgPSB7fSkge1xuICAgIG9wdGlvbnMuaW5kZW50YXRpb24gPSAnaW5kZW50YXRpb24nIGluIG9wdGlvbnMgPyBvcHRpb25zLmluZGVudGF0aW9uIDogJyAgICAnO1xuICAgIG9wdGlvbnMuY29sbGFwc2VDb250ZW50ID0gb3B0aW9ucy5jb2xsYXBzZUNvbnRlbnQgPT09IHRydWU7XG4gICAgb3B0aW9ucy5saW5lU2VwYXJhdG9yID0gJ2xpbmVTZXBhcmF0b3InIGluIG9wdGlvbnMgPyBvcHRpb25zLmxpbmVTZXBhcmF0b3IgOiAnXFxyXFxuJztcbiAgICBvcHRpb25zLndoaXRlU3BhY2VBdEVuZE9mU2VsZmNsb3NpbmdUYWcgPSAhIW9wdGlvbnMud2hpdGVTcGFjZUF0RW5kT2ZTZWxmY2xvc2luZ1RhZztcblxuICAgIGNvbnN0IHBhcnNlciA9IHJlcXVpcmUoJ3htbC1wYXJzZXIteG8nKTtcbiAgICBjb25zdCBwYXJzZWRYbWwgPSBwYXJzZXIoeG1sLCB7ZmlsdGVyOiBvcHRpb25zLmZpbHRlcn0pO1xuICAgIGNvbnN0IHN0YXRlID0ge2NvbnRlbnQ6ICcnLCBsZXZlbDogMCwgb3B0aW9uczogb3B0aW9uc307XG5cbiAgICBpZiAocGFyc2VkWG1sLmRlY2xhcmF0aW9uKSB7XG4gICAgICAgIHByb2Nlc3NQcm9jZXNzaW5nSW50cnVjdGlvbihwYXJzZWRYbWwuZGVjbGFyYXRpb24sIHN0YXRlKTtcbiAgICB9XG5cbiAgICBwYXJzZWRYbWwuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihjaGlsZCkge1xuICAgICAgICBwcm9jZXNzTm9kZShjaGlsZCwgc3RhdGUsIGZhbHNlKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBzdGF0ZS5jb250ZW50O1xufVxuXG5cbm1vZHVsZS5leHBvcnRzID0gZm9ybWF0O1xuIiwiLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBQYXJzaW5nT3B0aW9uc1xuICogIEBwcm9wZXJ0eSB7ZnVuY3Rpb24obm9kZSl9IGZpbHRlciBSZXR1cm5zIGZhbHNlIHRvIGV4Y2x1ZGUgYSBub2RlLiBEZWZhdWx0IGlzIHRydWUuXG4gKi9cblxuLyoqXG4gKiBQYXJzZSB0aGUgZ2l2ZW4gWE1MIHN0cmluZyBpbnRvIGFuIG9iamVjdC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30geG1sXG4gKiBAcGFyYW0ge1BhcnNpbmdPcHRpb25zfSBbb3B0aW9uc11cbiAqIEByZXR1cm4ge09iamVjdH1cbiAqIEBhcGkgcHVibGljXG4gKi9cbmZ1bmN0aW9uIHBhcnNlKHhtbCwgb3B0aW9ucyA9IHt9KSB7XG5cbiAgICBvcHRpb25zLmZpbHRlciA9IG9wdGlvbnMuZmlsdGVyIHx8ICgoKSA9PiB0cnVlKTtcblxuICAgIGZ1bmN0aW9uIG5leHRDaGlsZCgpIHtcbiAgICAgICAgcmV0dXJuIHRhZygpIHx8IGNvbnRlbnQoKSB8fCBjb21tZW50KCkgfHwgY2RhdGEoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBuZXh0Um9vdENoaWxkKCkge1xuICAgICAgICBtYXRjaCgvXFxzKi8pO1xuICAgICAgICByZXR1cm4gdGFnKHRydWUpIHx8IGNvbW1lbnQoKSB8fCBkb2N0eXBlKCkgfHwgcHJvY2Vzc2luZ0luc3RydWN0aW9uKGZhbHNlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkb2N1bWVudCgpIHtcbiAgICAgICAgY29uc3QgZGVjbCA9IGRlY2xhcmF0aW9uKCk7XG4gICAgICAgIGNvbnN0IGNoaWxkcmVuID0gW107XG4gICAgICAgIGxldCBkb2N1bWVudFJvb3ROb2RlO1xuICAgICAgICBsZXQgY2hpbGQgPSBuZXh0Um9vdENoaWxkKCk7XG5cbiAgICAgICAgd2hpbGUgKGNoaWxkKSB7XG4gICAgICAgICAgICBpZiAoY2hpbGQubm9kZS50eXBlID09PSAnRWxlbWVudCcpIHtcbiAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnRSb290Tm9kZSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZvdW5kIG11bHRpcGxlIHJvb3Qgbm9kZXMnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZG9jdW1lbnRSb290Tm9kZSA9IGNoaWxkLm5vZGU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghY2hpbGQuZXhjbHVkZWQpIHtcbiAgICAgICAgICAgICAgICBjaGlsZHJlbi5wdXNoKGNoaWxkLm5vZGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjaGlsZCA9IG5leHRSb290Q2hpbGQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghZG9jdW1lbnRSb290Tm9kZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gcGFyc2UgWE1MJyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZGVjbGFyYXRpb246IGRlY2wgPyBkZWNsLm5vZGUgOiBudWxsLFxuICAgICAgICAgICAgcm9vdDogZG9jdW1lbnRSb290Tm9kZSxcbiAgICAgICAgICAgIGNoaWxkcmVuXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGVjbGFyYXRpb24oKSB7XG4gICAgICAgIHJldHVybiBwcm9jZXNzaW5nSW5zdHJ1Y3Rpb24odHJ1ZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcHJvY2Vzc2luZ0luc3RydWN0aW9uKG1hdGNoRGVjbGFyYXRpb24pIHtcbiAgICAgICAgY29uc3QgbSA9IG1hdGNoRGVjbGFyYXRpb24gPyBtYXRjaCgvXjxcXD8oeG1sKVxccyovKSA6IG1hdGNoKC9ePFxcPyhbXFx3LTouXSspXFxzKi8pO1xuICAgICAgICBpZiAoIW0pIHJldHVybjtcblxuICAgICAgICAvLyB0YWdcbiAgICAgICAgY29uc3Qgbm9kZSA9IHtcbiAgICAgICAgICAgIG5hbWU6IG1bMV0sXG4gICAgICAgICAgICB0eXBlOiAnUHJvY2Vzc2luZ0luc3RydWN0aW9uJyxcbiAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHt9XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gYXR0cmlidXRlc1xuICAgICAgICB3aGlsZSAoIShlb3MoKSB8fCBpcygnPz4nKSkpIHtcbiAgICAgICAgICAgIGNvbnN0IGF0dHIgPSBhdHRyaWJ1dGUoKTtcbiAgICAgICAgICAgIGlmICghYXR0cikgcmV0dXJuIG5vZGU7XG4gICAgICAgICAgICBub2RlLmF0dHJpYnV0ZXNbYXR0ci5uYW1lXSA9IGF0dHIudmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBtYXRjaCgvXFw/Pi8pO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBleGNsdWRlZDogbWF0Y2hEZWNsYXJhdGlvbiA/IGZhbHNlIDogb3B0aW9ucy5maWx0ZXIobm9kZSkgPT09IGZhbHNlLFxuICAgICAgICAgICAgbm9kZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRhZyhtYXRjaFJvb3QpIHtcbiAgICAgICAgY29uc3QgbSA9IG1hdGNoKC9ePChbXFx3LTouXSspXFxzKi8pO1xuICAgICAgICBpZiAoIW0pIHJldHVybjtcblxuICAgICAgICAvLyBuYW1lXG4gICAgICAgIGNvbnN0IG5vZGUgPSB7XG4gICAgICAgICAgICB0eXBlOiAnRWxlbWVudCcsXG4gICAgICAgICAgICBuYW1lOiBtWzFdLFxuICAgICAgICAgICAgYXR0cmlidXRlczoge30sXG4gICAgICAgICAgICBjaGlsZHJlbjogW11cbiAgICAgICAgfTtcblxuICAgICAgICAvLyBhdHRyaWJ1dGVzXG4gICAgICAgIHdoaWxlICghKGVvcygpIHx8IGlzKCc+JykgfHwgaXMoJz8+JykgfHwgaXMoJy8+JykpKSB7XG4gICAgICAgICAgICBjb25zdCBhdHRyID0gYXR0cmlidXRlKCk7XG4gICAgICAgICAgICBpZiAoIWF0dHIpIHJldHVybiBub2RlO1xuICAgICAgICAgICAgbm9kZS5hdHRyaWJ1dGVzW2F0dHIubmFtZV0gPSBhdHRyLnZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZXhjbHVkZWQgPSBtYXRjaFJvb3QgPyBmYWxzZSA6IG9wdGlvbnMuZmlsdGVyKG5vZGUpID09PSBmYWxzZTtcblxuICAgICAgICAvLyBzZWxmIGNsb3NpbmcgdGFnXG4gICAgICAgIGlmIChtYXRjaCgvXlxccypcXC8+LykpIHtcbiAgICAgICAgICAgIG5vZGUuY2hpbGRyZW4gPSBudWxsO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBleGNsdWRlZCxcbiAgICAgICAgICAgICAgICBub2RlXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgbWF0Y2goL1xcPz8+Lyk7XG5cbiAgICAgICAgaWYgKCFleGNsdWRlZCkge1xuICAgICAgICAgICAgLy8gY2hpbGRyZW5cbiAgICAgICAgICAgIGxldCBjaGlsZCA9IG5leHRDaGlsZCgpO1xuICAgICAgICAgICAgd2hpbGUgKGNoaWxkKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFjaGlsZC5leGNsdWRlZCkge1xuICAgICAgICAgICAgICAgICAgICBub2RlLmNoaWxkcmVuLnB1c2goY2hpbGQubm9kZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNoaWxkID0gbmV4dENoaWxkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBjbG9zaW5nXG4gICAgICAgIG1hdGNoKC9ePFxcL1tcXHctOi5dKz4vKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZXhjbHVkZWQsXG4gICAgICAgICAgICBub2RlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZG9jdHlwZSgpIHtcbiAgICAgICAgY29uc3QgbSA9IG1hdGNoKC9ePCFET0NUWVBFXFxzK1tePl0qPi8pO1xuICAgICAgICBpZiAobSkge1xuICAgICAgICAgICAgY29uc3Qgbm9kZSA9IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnRG9jdW1lbnRUeXBlJyxcbiAgICAgICAgICAgICAgICBjb250ZW50OiBtWzBdXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBleGNsdWRlZDogb3B0aW9ucy5maWx0ZXIobm9kZSkgPT09IGZhbHNlLFxuICAgICAgICAgICAgICAgIG5vZGVcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjZGF0YSgpIHtcbiAgICAgICAgaWYgKHhtbC5zdGFydHNXaXRoKCc8IVtDREFUQVsnKSkge1xuICAgICAgICAgICAgY29uc3QgZW5kUG9zaXRpb25TdGFydCA9IHhtbC5pbmRleE9mKCddXT4nKTtcbiAgICAgICAgICAgIGlmIChlbmRQb3NpdGlvblN0YXJ0ID4gLTEpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlbmRQb3NpdGlvbkZpbmlzaCAgPSBlbmRQb3NpdGlvblN0YXJ0ICsgMztcbiAgICAgICAgICAgICAgICBjb25zdCBub2RlID0ge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnQ0RBVEEnLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiB4bWwuc3Vic3RyaW5nKDAsIGVuZFBvc2l0aW9uRmluaXNoKVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgeG1sID0geG1sLnNsaWNlKGVuZFBvc2l0aW9uRmluaXNoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBleGNsdWRlZDogb3B0aW9ucy5maWx0ZXIobm9kZSkgPT09IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBub2RlXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNvbW1lbnQoKSB7XG4gICAgICAgIGNvbnN0IG0gPSBtYXRjaCgvXjwhLS1bXFxzXFxTXSo/LS0+Lyk7XG4gICAgICAgIGlmIChtKSB7XG4gICAgICAgICAgICBjb25zdCBub2RlID0ge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdDb21tZW50JyxcbiAgICAgICAgICAgICAgICBjb250ZW50OiBtWzBdXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBleGNsdWRlZDogb3B0aW9ucy5maWx0ZXIobm9kZSkgPT09IGZhbHNlLFxuICAgICAgICAgICAgICAgIG5vZGVcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjb250ZW50KCkge1xuICAgICAgICBjb25zdCBtID0gbWF0Y2goL14oW148XSspLyk7XG4gICAgICAgIGlmIChtKSB7XG4gICAgICAgICAgICBjb25zdCBub2RlID0ge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdUZXh0JyxcbiAgICAgICAgICAgICAgICBjb250ZW50OiBtWzFdXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBleGNsdWRlZDogb3B0aW9ucy5maWx0ZXIobm9kZSkgPT09IGZhbHNlLFxuICAgICAgICAgICAgICAgIG5vZGVcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhdHRyaWJ1dGUoKSB7XG4gICAgICAgIGNvbnN0IG0gPSBtYXRjaCgvKFtcXHc6LV0rKVxccyo9XFxzKihcIlteXCJdKlwifCdbXiddKid8XFx3KylcXHMqLyk7XG4gICAgICAgIGlmICghbSkgcmV0dXJuO1xuICAgICAgICByZXR1cm4ge25hbWU6IG1bMV0sIHZhbHVlOiBzdHJpcChtWzJdKX1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTdHJpcCBxdW90ZXMgZnJvbSBgdmFsYC5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBzdHJpcCh2YWwpIHtcbiAgICAgICAgcmV0dXJuIHZhbC5yZXBsYWNlKC9eWydcIl18WydcIl0kL2csICcnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNYXRjaCBgcmVgIGFuZCBhZHZhbmNlIHRoZSBzdHJpbmcuXG4gICAgICovXG4gICAgZnVuY3Rpb24gbWF0Y2gocmUpIHtcbiAgICAgICAgY29uc3QgbSA9IHhtbC5tYXRjaChyZSk7XG4gICAgICAgIGlmICghbSkgcmV0dXJuO1xuICAgICAgICB4bWwgPSB4bWwuc2xpY2UobVswXS5sZW5ndGgpO1xuICAgICAgICByZXR1cm4gbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFbmQtb2Ytc291cmNlLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGVvcygpIHtcbiAgICAgICAgcmV0dXJuIDAgPT09IHhtbC5sZW5ndGg7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgZm9yIGBwcmVmaXhgLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGlzKHByZWZpeCkge1xuICAgICAgICByZXR1cm4gMCA9PT0geG1sLmluZGV4T2YocHJlZml4KTtcbiAgICB9XG5cbiAgICB4bWwgPSB4bWwudHJpbSgpO1xuXG4gICAgcmV0dXJuIGRvY3VtZW50KCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcGFyc2U7XG4iLCJpbXBvcnQgXCIuL2luZGV4Lmxlc3NcIjtcblxuXG5mdW5jdGlvbiBCdXR0b24oe2Jsb2NrID0gZmFsc2UsIHNxdWFyZSA9IGZhbHNlLCBjbGFzc05hbWUgPSAnJywgLi4ucHJvcHN9KSB7XG4gICAgY29uc3QgY2xhc3NOYW1lcyA9IFsuLi5uZXcgU2V0KFsnYnRuJywgY2xhc3NOYW1lLCBibG9jayA/ICdfYmxvY2snIDogJycsIHNxdWFyZSA/ICdfc3F1YXJlJyA6ICcnXSldLmpvaW4oJyAnKTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9e2NsYXNzTmFtZXN9IHsuLi5wcm9wc30gLz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbjtcbiIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4Lmxlc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCIvLyBpbXBvcnQgXCIuL2luZGV4Lmxlc3NcIjtcblxuY29uc3QgSGVhZGVyID0gKHtjaGlsZHJlbiA9IG51bGwsIGV4dHJhID0gbnVsbH0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsOCBwcjggYnNiYiBkZiBhaWMgZ19ociBiYzpmZmZcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZjEgYzpzIGZzMTIgbGgxNlwiPlxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj57ZXh0cmF9PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn07XG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iLCJmdW5jdGlvbiBUYWJzKHtjbGFzc05hbWUgPSAnJywgZGF0YSwgdGFiSW5kZXgsIG9uQ2hhbmdlfSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgYzp4cyBmdzcwMCBsaDEuNSAke2NsYXNzTmFtZX1gfT5cbiAgICAgICAgICAgIHtkYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiIyNcIiBrZXk9e2l0ZW19XG4gICAgICAgICAgICAgICAgICAgdGl0bGU9e2l0ZW19XG4gICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZGliIHZhdCBwdDggcGI4IHBsOCBwcjggJHtpbmRleCA9PT0gdGFiSW5kZXggPyAnYzptJyA6ICdjOm06aCd9YH1cbiAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlKGluZGV4KTtcbiAgICAgICAgICAgICAgICAgICB9fT57aXRlbX08L2E+KSl9XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFicztcbiIsImltcG9ydCBcIi4vaW5kZXgubGVzc1wiO1xuXG5mdW5jdGlvbiBUZXh0YXJlYSh7Y2xhc3NOYW1lID0gJycsIC4uLnByb3BzfSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDx0ZXh0YXJlYSBwbGFjZWhvbGRlcj1cIkVudGVyXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHRleHRhcmVhIGJzYmIgdzEwMCUgZGIgZnMxMiBsaDIwIHB0OCBwYjggcHI4IHBsOCBicjQgbGgyMCAke2NsYXNzTmFtZX1gfSB7Li4ucHJvcHN9IC8+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBUZXh0YXJlYTtcbiIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4Lmxlc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgXCIuL2luZGV4Lmxlc3NcIjtcbmltcG9ydCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuXG5mdW5jdGlvbiBUb2FzdCh7b3BlbiA9IGZhbHNlLCBjaGlsZHJlbiA9IG51bGwsIGNsYXNzTmFtZSA9ICcnfSkge1xuICAgIGNvbnN0IFtzaG93LCBzZXRTaG93XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzZXRTaG93KG9wZW4pO1xuICAgIH0sIFtvcGVuXSk7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BwZiBkZiBhaWMgamNjIHQ1MCUgbDAgdzEwMCUgcGwxNiBwcjE2IHBlbiBic2JiIHRvYXN0LWJveCAke3Nob3cgPyBgX3Nob3dgIDogJyd9ICR7Y2xhc3NOYW1lfWB9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b2FzdCBicjQgY19mZmYgcGw4IHByOCBmczEyIGxoMTYgcHQ4IHBiOFwiPntjaGlsZHJlbn08L2Rpdj5cbiAgICAgICAgPC9kaXY+KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9hc3Q7IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXgubGVzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBUb2FzdCBmcm9tIFwiLi9pbmRleFwiO1xuaW1wb3J0IHtyZW5kZXJ9IGZyb20gXCJwcmVhY3RcIjtcblxuY29uc3QgQ09OVEFJTkVSX0lEID0gJ1RvYXN0Qm94JztcblxuZnVuY3Rpb24gZ2V0Q29udGFpbmVyKCkge1xuICAgIGNvbnN0ICRpdGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoQ09OVEFJTkVSX0lEKTtcbiAgICAvLyDlt7Lnu4/lrZjlnKjliJnku4DkuYjpg73kuI3lgZpcbiAgICBpZiAoJGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuICRpdGVtO1xuICAgIH1cbiAgICBjb25zdCAkY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgJGNvbnRhaW5lci5pZCA9ICdDT05UQUlORVJfSUQnO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKCRjb250YWluZXIpO1xuICAgIHJldHVybiAkY29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiB0b2FzdCh0ZXh0ID0gXCJcIiwge3Nob3dUaW1lID0gMjAwMH0gPSB7fSkge1xuICAgIGNvbnN0ICRjb250YWluZXIgPSBnZXRDb250YWluZXIoKTtcbiAgICByZW5kZXIoPFRvYXN0IG9wZW4+e3RleHR9PC9Ub2FzdD4sICRjb250YWluZXIpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICByZW5kZXIoJycsICRjb250YWluZXIpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKCRjb250YWluZXIpO1xuICAgIH0sIHNob3dUaW1lKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRvYXN0OyIsImltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3ByZWFjdC9ob29rcyc7XG5pbXBvcnQge3JlbmRlcn0gZnJvbSAncHJlYWN0JztcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vY29tcG9uZW50L0hlYWRlci9pbmRleFwiO1xuaW1wb3J0IFRhYnMgZnJvbSBcIi4vY29tcG9uZW50L1RhYnNcIjtcbmltcG9ydCBDb25maWcgZnJvbSBcIi4vcGFnZS9Db25maWcvaW5kZXhcIjtcbmltcG9ydCBUb2tlbiBmcm9tIFwiLi9wYWdlL1Rva2VuL2luZGV4XCI7XG5pbXBvcnQgSG9tZSBmcm9tIFwiLi9wYWdlL0hvbWUvaW5kZXhcIjtcbmltcG9ydCAnLi9pbmRleC5sZXNzJztcblxuY29uc3QgREFUQV9UQUIgPSBbJ0hUTUwnLCAnQ1NTJywgJ1Rva2VuJywgJ1Byb2plY3QnXTtcblxuXG5jb25zdCBBUFAgPSAoKSA9PiB7XG4gICAgY29uc3QgW3RhYkluZGV4LCBzZXRUYWJJbmRleF0gPSB1c2VTdGF0ZSgwKTtcblxuICAgIGNvbnN0IG9uVGFiQ2hhbmdlID0gKGluZGV4KSA9PiB7XG4gICAgICAgIHNldFRhYkluZGV4KGluZGV4KTtcbiAgICAgICAgcGFyZW50LnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgIHBsdWdpbk1lc3NhZ2U6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBgQVBJLm9uVGFiQ2hhbmdlYCxcbiAgICAgICAgICAgICAgICB2YWx1ZTogaW5kZXhcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgJyonKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxIZWFkZXJcbiAgICAgICAgICAgICAgICBleHRyYT17XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImM6cyBjOnByaW1hcnk6aCBmczE0IGZ3NTAwIHBsOCBwcjggcHQ4IHBiOCBmdzcwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vcy1hY3NzL2ZpZ21hLXRva2VuLXRvLWNvZGVcIiB0YXJnZXQ9XCJfYmxhbmtcIiB0aXRsZT1cIkhlbHBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuc2hpZWxkcy5pby9naXRodWIvc3RhcnMvcy1hY3NzL2ZpZ21hLXRva2VuLXRvLWNvZGUuc3ZnP3N0eWxlPXNvY2lhbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImZpZ21hLXRva2VuLXRvLWNvZGVcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICB9PlxuICAgICAgICAgICAgICAgIDxUYWJzIGNsYXNzTmFtZT1cImZzMTRcIiBkYXRhPXtEQVRBX1RBQn0gdGFiSW5kZXg9e3RhYkluZGV4fSBvbkNoYW5nZT17b25UYWJDaGFuZ2V9PjwvVGFicz5cbiAgICAgICAgICAgIDwvSGVhZGVyPlxuICAgICAgICAgICAgeygoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRhYkluZGV4ID09PSAwIHx8IHRhYkluZGV4ID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8SG9tZSB0YWJJbmRleD17dGFiSW5kZXh9Lz47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0YWJJbmRleCA9PT0gMykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPENvbmZpZy8+O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGFiSW5kZXggPT09IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxUb2tlbi8+O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH0pKCl9XG4gICAgICAgIDwvPlxuICAgIClcbn07XG5cbnJlbmRlcig8QVBQLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWFjdC1wYWdlJykpO1xuIiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXgubGVzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIlxuY29uc3QgX3Bvc3RDb25maWcgPSAoe2FjdGlvbiwgdmFsdWV9KSA9PiB7XG4gICAgcGFyZW50LnBvc3RNZXNzYWdlKHtcbiAgICAgICAgcGx1Z2luTWVzc2FnZToge1xuICAgICAgICAgICAgdHlwZTogYENPTkZJRy4ke2FjdGlvbn1gLFxuICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgfVxuICAgIH0sICcqJyk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBfcG9zdENvbmZpZzsiLCJpbXBvcnQge3VzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZX0gZnJvbSAncHJlYWN0L2hvb2tzJztcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uLy4uL2NvbXBvbmVudC9CdXR0b25cIjtcbmltcG9ydCBcIi4vaW5kZXgubGVzc1wiO1xuaW1wb3J0IF9wb3N0Q29uZmlnIGZyb20gXCIuL19wb3N0Q29uZmlnLmpzXCI7XG5pbXBvcnQgVGV4dGFyZWEgZnJvbSBcIi4uLy4uL2NvbXBvbmVudC9UZXh0YXJlYVwiO1xuaW1wb3J0IHRvYXN0IGZyb20gXCIuLi8uLi9jb21wb25lbnQvVG9hc3QvdG9hc3RcIjtcblxuY29uc3QgQ29uZmlnID0gKCkgPT4ge1xuICAgIGNvbnN0IFtjb25maWcsIHNldENvbmZpZ10gPSB1c2VTdGF0ZSh7fSk7XG4gICAgY29uc3QgZm9ybSA9IHVzZVJlZihudWxsKTtcbiAgICBjb25zdCBpc0VtcHR5ID0gT2JqZWN0LmtleXMoY29uZmlnKS5sZW5ndGggPT09IDA7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBvbm1lc3NhZ2UgPSAoKHtkYXRhOiB7cGx1Z2luTWVzc2FnZX0gPSB7fX0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHtnZXRDb25maWcgPSBudWxsLCBhbGVydE1zZyA9IG51bGx9ID0gcGx1Z2luTWVzc2FnZTtcbiAgICAgICAgICAgIChnZXRDb25maWcgIT09IG51bGwpICYmIHNldENvbmZpZyhnZXRDb25maWcgfHwge30pO1xuICAgICAgICAgICAgYWxlcnRNc2cgJiYgdG9hc3QoYWxlcnRNc2cpO1xuICAgICAgICB9KTtcbiAgICB9LCBbXSk7XG5cbiAgICAvLyDkv67mlLlcbiAgICBjb25zdCBvbkVkaXQgPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IGRhdGFTYXZlID0gZS50YXJnZXQuZGF0YS52YWx1ZTtcbiAgICAgICAgaWYoIWRhdGFTYXZlLnRyaW1TdGFydCgpLnRyaW1FbmQoKSl7XG4gICAgICAgICAgICB0b2FzdChcIkNvbmZpZyBjYW4ndCBlbXB0eVwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3Qgb2JqRGF0YSA9IEpTT04ucGFyc2UoZGF0YVNhdmUpO1xuICAgICAgICAgICAgaWYgKG9iakRhdGEpIHtcbiAgICAgICAgICAgICAgICBfcG9zdENvbmZpZyh7XG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbjogJ2VkaXQnLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogb2JqRGF0YVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9ybS5jdXJyZW50LnJlc2V0KCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICB0b2FzdCgnU2F2ZSBlcnJvcicpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17b25FZGl0fSByZWY9e2Zvcm19IGNsYXNzTmFtZT1cImYxIGRmIGZkY1wiPlxuICAgICAgICAgICAgPFRleHRhcmVhIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAnIzI4MmMzNCcsIGNvbG9yOidyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCknLCBib3JkZXJSYWRpdXM6MH19IG5hbWU9XCJkYXRhXCIgY2xhc3NOYW1lPVwiZjFcIiBkZWZhdWx0VmFsdWU9e2lzRW1wdHkgPyBcIlwiIDogSlNPTi5zdHJpbmdpZnkoY29uZmlnLCBudWxsLCAyKX1cbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhcnNlIHlvdXIgY29uZmlnIGhlcmVcIi8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRmIGFpYyBnX3JvdyBwdDggcGI4XCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnMxMiBjOnNcIj7irIbvuI8gUGFyc2UgeW91ciBjb25maWcgaW4gdGV4dGFyZWE8L3A+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicmVzZXRcIiBjbGFzc05hbWU9XCJtbGFcIj5SZXNldDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cIm1sOFwiPlNhdmU8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvcm0+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbmZpZztcbiIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4Lmxlc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgaGxqcyBmcm9tICdoaWdobGlnaHQuanMvbGliL2NvcmUnO1xuaW1wb3J0IHhtbCBmcm9tICdoaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy94bWwnO1xuaW1wb3J0IGNzcyBmcm9tICdoaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9jc3MnO1xuaW1wb3J0IGpzb24gZnJvbSAnaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvanNvbic7XG5pbXBvcnQge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCAnaGlnaGxpZ2h0LmpzL3N0eWxlcy9hdG9tLW9uZS1kYXJrLmNzcyc7XG5cbmhsanMucmVnaXN0ZXJMYW5ndWFnZSgneG1sJywgeG1sKTtcbmhsanMucmVnaXN0ZXJMYW5ndWFnZSgnY3NzJywgY3NzKTtcbmhsanMucmVnaXN0ZXJMYW5ndWFnZSgnanNvbicsIGpzb24pO1xuXG5jb25zdCBDU1NfTUFQID0ge1xuICAgIFwieG1sXCI6IFwieG1sXCIsXG4gICAgXCJjc3NcIjogXCJjc3NcIixcbiAgICBcImpzb25cIjogXCJqc29uXCJcbn07XG5cbmZ1bmN0aW9uIEhpZ2hsaWdodCh7Y2hpbGRyZW4gPSBcIlwiLCBjbGFzc05hbWUgPSBcIlwiLCBsYW5ndWFnZSA9IFwieG1sXCJ9KSB7XG4gICAgY29uc3QgW3N0ckh0bWwsIHNldFN0ckh0bWxdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IGFwcGVuZENsYXNzTmFtZSA9IENTU19NQVBbbGFuZ3VhZ2VdIHx8ICcnO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGh0bWwgPSBobGpzLmhpZ2hsaWdodChjaGlsZHJlbiwge2xhbmd1YWdlfSkudmFsdWU7XG4gICAgICAgIHNldFN0ckh0bWwoaHRtbCk7XG4gICAgfSwgW2NoaWxkcmVuLCBsYW5ndWFnZV0pO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxwcmUgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6ICcjMjgyYzM0Jywgb3ZlcmZsb3c6J2F1dG8nfX0gY2xhc3NOYW1lPXtgaGxqcyAke2NsYXNzTmFtZX0gJHthcHBlbmRDbGFzc05hbWV9YH1cbiAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogc3RySHRtbH19Lz5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGlnaGxpZ2h0O1xuIiwiZnVuY3Rpb24gTm9TZWxlY3Rpb24oKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBzdHlsZT17e2NvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwwLjgpJywgYmFja2dyb3VuZENvbG9yOiAnIzI4MmMzNCd9fSBjbGFzc05hbWU9XCJmMSBkZiBhaWMgamNjIGZzMTRcIj5cbiAgICAgICAgICAgIFBsZWFzZSBTZWxlY3QgU29tZXRoaW5nIVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBOb1NlbGVjdGlvbjtcbiIsImltcG9ydCBIaWdobGlnaHQgZnJvbSBcIi4vSGlnaGxpZ2h0XCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi8uLi9jb21wb25lbnQvQnV0dG9uXCI7XG5pbXBvcnQgY2xpcGJvYXJkQ29weSBmcm9tIFwiY2xpcGJvYXJkLWNvcHlcIjtcbmltcG9ydCBOb1NlbGVjdGlvbiBmcm9tIFwiLi9Ob1NlbGVjdGlvblwiO1xuaW1wb3J0IHRvYXN0IGZyb20gXCIuLi8uLi9jb21wb25lbnQvVG9hc3QvdG9hc3RcIjtcblxuY29uc3QgQ09ERV9QUkUgPSBgLypcbiAqIEFsbCBydWxlcyBpbiDjgIwgc2Fjc3Mg44CNIHdpbGwgZmlsdGVyIG91dC5cbiAqIE1ha2Ugc3VyZSB5b3UgZ290IOOAjCBzY2FzcyDjgI0gaW4geW91ciBwcm9qZWN0XG4gKiAkIG5wbSBpbnN0YWxsIHNhY3NzXG4gKiBAaW1wb3J0ICd+c2Fjc3MnO1xuICovXFxuXG5gO1xuXG5jb25zdCBSZW5kZXJDU1MgPSAoe25vU2VsZWN0aW9uID0gdHJ1ZSwgY29kZX0pID0+IHtcblxuICAgIGNvbnN0IG9uQ29weSA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY2xpcGJvYXJkQ29weShjb2RlIHx8ICcvKiBub3RoaW5nICovJykudGhlbigoKSA9PiB7XG4gICAgICAgICAgICB0b2FzdCgnQ1NTIENvcHkgU3VjY2VzcycpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICB7bm9TZWxlY3Rpb24gPyA8Tm9TZWxlY3Rpb24vPiA6IChcbiAgICAgICAgICAgICAgICA8SGlnaGxpZ2h0IGxhbmd1YWdlPVwiY3NzXCIgY2xhc3NOYW1lPVwiZjFcIj5cbiAgICAgICAgICAgICAgICAgICAge2Ake0NPREVfUFJFfSR7Y29kZSB8fCAnJ31gfVxuICAgICAgICAgICAgICAgIDwvSGlnaGxpZ2h0PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ19yb3cgZGYgYWljIGpjc2IgcHQ4IHBiOCBiYzpmZmZcIj5cbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJtcjhcIiBocmVmPVwiaHR0cHM6Ly93d3cubnBtanMuY29tL3BhY2thZ2Uvc2Fjc3NcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2ltZy5zaGllbGRzLmlvL25wbS92L3NhY3NzLnN2Z1wiIHdpZHRoPVwiODBcIiBoZWlnaHQ9XCIyMFwiIGFsdD1cInNhY3NzXCIvPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e29uQ29weX0+Q29weTwvQnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgIClcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlbmRlckNTUztcbiIsImltcG9ydCBIaWdobGlnaHQgZnJvbSBcIi4vSGlnaGxpZ2h0XCI7XG5pbXBvcnQgZm9ybWF0IGZyb20gXCJ4bWwtZm9ybWF0dGVyXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi8uLi9jb21wb25lbnQvQnV0dG9uXCI7XG5pbXBvcnQgY2xpcGJvYXJkQ29weSBmcm9tIFwiY2xpcGJvYXJkLWNvcHlcIjtcbmltcG9ydCBOb1NlbGVjdGlvbiBmcm9tIFwiLi9Ob1NlbGVjdGlvblwiO1xuaW1wb3J0IHRvYXN0IGZyb20gXCIuLi8uLi9jb21wb25lbnQvVG9hc3QvdG9hc3RcIjtcblxuXG5jb25zdCBJbnB1dEpTWCA9ICh7ZGlzYWJsZWQgPSB0cnVlLCBpc0pTWH0pID0+IHtcbiAgICBjb25zdCBvbkNoYW5nZUpTWCA9IChlKSA9PiB7XG4gICAgICAgIHBhcmVudC5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICBwbHVnaW5NZXNzYWdlOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogYENPTkZJRy5jaGFuZ2VKU1hgLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBlLnRhcmdldC5jaGVja2VkXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sICcqJyk7XG4gICAgfTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibXIxNiBkZiBhaWNcIj5cbiAgICAgICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPVwiZnMxNCBtcjRcIj5KU1g6PC9zdHJvbmc+XG4gICAgICAgICAgICA8aW5wdXQgZGlzYWJsZWQ9e2Rpc2FibGVkfSB0eXBlPVwiY2hlY2tib3hcIiBjaGVja2VkPXtpc0pTWH0gb25DaGFuZ2U9e29uQ2hhbmdlSlNYfS8+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgKVxufVxuXG5jb25zdCBSZW5kZXJIdG1sID0gKHtjb2RlID0gJycsIG5vU2VsZWN0aW9uID0gdHJ1ZSwgaXNKU1h9KSA9PiB7XG4gICAgY29uc3Qgb25Db3B5ID0gKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjbGlwYm9hcmRDb3B5KGNvZGUpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgdG9hc3QoJ0h0bWwgQ29weSBTdWNjZXNzJyk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIHtub1NlbGVjdGlvbiA/IDxOb1NlbGVjdGlvbi8+IDogKFxuICAgICAgICAgICAgICAgIDxIaWdobGlnaHQgY2xhc3NOYW1lPVwiZjFcIiBsYW5ndWFnZT1cInhtbFwiPlxuICAgICAgICAgICAgICAgICAgICB7Y29kZSA/IGZvcm1hdChjb2RlKSA6ICcnfVxuICAgICAgICAgICAgICAgIDwvSGlnaGxpZ2h0PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ19yb3cgZGYgYWljIGpjc2IgcHQ4IHBiOCBiYzpmZmZcIj5cbiAgICAgICAgICAgICAgICA8SW5wdXRKU1ggZGlzYWJsZWQ9e25vU2VsZWN0aW9ufSBpc0pTWD17aXNKU1h9Lz5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e29uQ29weX0+Q29weTwvQnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlbmRlckh0bWw7XG4iLCJpbXBvcnQge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3ByZWFjdC9ob29rcyc7XG5pbXBvcnQgUmVuZGVySHRtbCBmcm9tIFwiLi9SZW5kZXJIVE1MXCI7XG5pbXBvcnQgUmVuZGVyQ1NTIGZyb20gXCIuL1JlbmRlckNTU1wiO1xuXG5jb25zdCBIb21lID0gKHt0YWJJbmRleH0pID0+IHtcbiAgICBjb25zdCBbaHRtbCwgc2V0SHRtbF0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW0NTUywgc2V0Q1NTXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbaXNKU1gsIHNldElzSlNYXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbbm9TZWxlY3Rpb24sIHNldE5vU2VsZWN0aW9uXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgb25tZXNzYWdlID0gKCh7ZGF0YToge3BsdWdpbk1lc3NhZ2V9ID0ge319KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7Z2V0SFRNTCA9IG51bGwsIGdldENTUyA9IG51bGwsIGlzSlNYID0gbnVsbCwgbm9TZWxlY3Rpb24gPSBudWxsfSA9IHBsdWdpbk1lc3NhZ2U7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh7Z2V0SFRNTCwgZ2V0Q1NTfSk7XG4gICAgICAgICAgICBnZXRIVE1MICE9PSBudWxsICYmIHNldEh0bWwoZ2V0SFRNTCk7XG4gICAgICAgICAgICBnZXRDU1MgIT09IG51bGwgJiYgc2V0Q1NTKGdldENTUyk7XG4gICAgICAgICAgICBpc0pTWCAhPT0gbnVsbCAmJiBzZXRJc0pTWChpc0pTWCk7XG4gICAgICAgICAgICBub1NlbGVjdGlvbiAhPT0gbnVsbCAmJiBzZXROb1NlbGVjdGlvbihub1NlbGVjdGlvbik7XG4gICAgICAgIH0pO1xuICAgIH0sIFtdKTtcblxuICAgIGlmICh0YWJJbmRleCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gKDxSZW5kZXJIdG1sIG5vU2VsZWN0aW9uPXtub1NlbGVjdGlvbn0gY29kZT17aHRtbH0gaXNKU1g9e2lzSlNYfS8+KVxuICAgIH1cbiAgICBpZiAodGFiSW5kZXggPT09IDEpIHtcbiAgICAgICAgcmV0dXJuIDxSZW5kZXJDU1Mgbm9TZWxlY3Rpb249e25vU2VsZWN0aW9ufSBjb2RlPXtDU1N9Lz5cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIiwiaW1wb3J0IHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdwcmVhY3QvY29tcGF0JztcbmltcG9ydCBcIi4vaW5kZXgubGVzc1wiO1xuaW1wb3J0IHRvYXN0IGZyb20gXCIuLi8uLi9jb21wb25lbnQvVG9hc3QvdG9hc3RcIjtcbmltcG9ydCBIaWdobGlnaHQgZnJvbSBcIi4uL0hvbWUvSGlnaGxpZ2h0XCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi8uLi9jb21wb25lbnQvQnV0dG9uXCI7XG5pbXBvcnQgY2xpcGJvYXJkQ29weSBmcm9tIFwiY2xpcGJvYXJkLWNvcHlcIjtcblxuY29uc3QgVG9rZW4gPSAoKSA9PiB7XG4gICAgY29uc3QgW3NlbGVjdGlvblRva2Vucywgc2V0U2VsZWN0aW9uVG9rZW5zXSA9IHVzZVN0YXRlKHt9KTtcbiAgICBjb25zdCBzZWxlY3Rpb25JZHMgPSBPYmplY3Qua2V5cyhzZWxlY3Rpb25Ub2tlbnMpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgb25tZXNzYWdlID0gKCh7ZGF0YToge3BsdWdpbk1lc3NhZ2V9ID0ge319KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7YWxlcnRNc2cgPSBudWxsfSA9IHBsdWdpbk1lc3NhZ2U7XG4gICAgICAgICAgICBzZXRTZWxlY3Rpb25Ub2tlbnMocGx1Z2luTWVzc2FnZS5zZWxlY3Rpb25Ub2tlbnMgfHwge30pO1xuICAgICAgICAgICAgKGFsZXJ0TXNnICE9PSBudWxsKSAmJiBhbGVydE1zZyAmJiB0b2FzdChhbGVydE1zZyk7XG4gICAgICAgIH0pO1xuICAgIH0sIFtdKTtcblxuICAgIGNvbnN0IG9uQ29weSA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY2xpcGJvYXJkQ29weShKU09OLnN0cmluZ2lmeShzZWxlY3Rpb25Ub2tlbnMsIG51bGwsIDIpKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHRvYXN0KCdUb2tlbiBDb3B5IFN1Y2Nlc3MnKTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICB7c2VsZWN0aW9uSWRzLmxlbmd0aCA/IChcbiAgICAgICAgICAgICAgICA8SGlnaGxpZ2h0IGxhbmd1YWdlPVwianNvblwiIGNsYXNzTmFtZT1cImYxXCI+XG4gICAgICAgICAgICAgICAgICAgIHtKU09OLnN0cmluZ2lmeShzZWxlY3Rpb25Ub2tlbnMsIG51bGwsIDIpfVxuICAgICAgICAgICAgICAgIDwvSGlnaGxpZ2h0PlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImYxIGRpZiBhaWMgamNjXCIgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6ICcjMjgyYzM0JywgY29sb3I6J3JnYmEoMjU1LCAyNTUsIDI1NSwgMC44KSd9fT5cbiAgICAgICAgICAgICAgICAgICAgVGhlIG5vZGUgeW91IHNlbGVjdGVkIHdpdGhvdXQgYW55IHRva2VuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnX3JvdyBkZiBhaWMgamNzYiB0YWMgcHQ4IHBiOCBsaDI0IGJjOmZmZlwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZzMTIgYzpzIGdfZWxsXCI+Q29weSB0aGUgdG9rZW4gdG8gdGhlIHByb2plY3QgcGFuZWwgYW5kIGNoYW5nZSB0aGVtPC9wPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17b25Db3B5fT5Db3B5PC9CdXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBUb2tlbjtcbiIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4Lmxlc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiXSwic291cmNlUm9vdCI6IiJ9