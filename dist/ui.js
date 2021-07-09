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
          className: "vam",
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

/***/ "./src/ui/page/Config/OldConfigBar.jsx":
/*!*********************************************!*\
  !*** ./src/ui/page/Config/OldConfigBar.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _component_Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../component/Button */ "./src/ui/component/Button/index.jsx");
/* harmony import */ var _utils_saveJSON__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/saveJSON */ "./src/ui/utils/saveJSON.ts");
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! preact/jsx-runtime */ "./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var getObjByPropString = function getObjByPropString(strProps) {
  if (!strProps) {
    return {};
  }

  var result = {};
  strProps.split(' ').map(function (item) {
    var _item$split = item.split('='),
        _item$split2 = _slicedToArray(_item$split, 2),
        name = _item$split2[0],
        _item$split2$ = _item$split2[1],
        value = _item$split2$ === void 0 ? "" : _item$split2$;

    result[name] = value.replace(/"/g, "");
  });
  return result;
};

var transTokens = function transTokens(tokens) {
  var newToken = {};

  for (var _i2 = 0, _Object$entries = Object.entries(tokens); _i2 < _Object$entries.length; _i2++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i2], 2),
        id = _Object$entries$_i[0],
        item = _Object$entries$_i[1];

    var name = item.name,
        type = item.type,
        _item$className = item.className,
        className = _item$className === void 0 ? "" : _item$className,
        ignoreClassName = item.ignoreClassName,
        textClassName = item.textClassName,
        componentProps = item.componentProps,
        renderChildren = item.renderChildren,
        renderHeight = item.renderHeight,
        renderWidth = item.renderWidth;
    var newItem = {
      _tokenName: name,
      _tokenType: type,
      DEFAULT: getObjByPropString(componentProps)
    };

    if (textClassName) {
      newItem["TEXT"] = {
        className: textClassName.split(' ')
      };
    }

    if (renderChildren && String(renderChildren) === '0') {
      newItem.DEFAULT.children = null;
    }

    if (renderHeight) {
      if (String(renderHeight) === '1') {
        newItem.DEFAULT._renderHeight = true;
      } else if (String(renderHeight) === '0') {
        newItem.DEFAULT._renderHeight = false;
      }
    }

    if (renderWidth) {
      if (String(renderWidth) === '1') {
        newItem.DEFAULT._renderWidth = true;
      } else if (String(renderWidth) === '0') {
        newItem.DEFAULT._renderWidth = false;
      }
    }

    newItem.DEFAULT.className = className ? className.split(' ') : [];

    if (ignoreClassName) {
      newItem.DEFAULT._ignoreClassName = ignoreClassName.split(' ');
    }

    newToken[id] = newItem;
  }

  return newToken;
};

function transOld() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _data$projects = data.projects,
      projects = _data$projects === void 0 ? [] : _data$projects,
      _data$isJSX = data.isJSX,
      isJSX = _data$isJSX === void 0 ? false : _data$isJSX;
  return projects.map(function (_ref) {
    var _ref$ignoreClassName = _ref.ignoreClassName,
        ignoreClassName = _ref$ignoreClassName === void 0 ? "" : _ref$ignoreClassName,
        name = _ref.name,
        _ref$token = _ref.token,
        token = _ref$token === void 0 ? {} : _ref$token;
    return {
      isJSX: isJSX,
      _name: name,
      ignoreClassName: ignoreClassName.split(" "),
      tokens: transTokens(token)
    };
  });
}

function OldConfigBar(_ref2) {
  var _ref2$data = _ref2.data,
      data = _ref2$data === void 0 ? {} : _ref2$data;
  var isEmpty = Object.keys(data).length === 0;

  if (isEmpty) {
    return null;
  }

  var onSaveOld = function onSaveOld(e) {
    e.preventDefault();
    Object(_utils_saveJSON__WEBPACK_IMPORTED_MODULE_1__["default"])(transOld(data), 'old-config');
  };

  return Object(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxs"])("div", {
    className: "g_row df aic pt8 pb8 g_hr_t",
    children: [Object(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("p", {
      className: "fs12 c:s",
      children: "Token to code had a devastating upgrade, download the old config and upload them again"
    }), Object(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_component_Button__WEBPACK_IMPORTED_MODULE_0__["default"], {
      onClick: onSaveOld,
      className: "c:m ml8",
      children: "Download Old"
    })]
  });
}

/* harmony default export */ __webpack_exports__["default"] = (OldConfigBar);

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
/* harmony import */ var _postConfig_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_postConfig.js */ "./src/ui/page/Config/_postConfig.js");
/* harmony import */ var _component_Textarea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../component/Textarea */ "./src/ui/component/Textarea/index.jsx");
/* harmony import */ var _component_Toast_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../component/Toast/toast */ "./src/ui/component/Toast/toast.jsx");
/* harmony import */ var _utils_saveJSON__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/saveJSON */ "./src/ui/utils/saveJSON.ts");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index.less */ "./src/ui/page/Config/index.less");
/* harmony import */ var _OldConfigBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./OldConfigBar */ "./src/ui/page/Config/OldConfigBar.jsx");
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! preact/jsx-runtime */ "./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");
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

  var _useState3 = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useState"])({}),
      _useState4 = _slicedToArray(_useState3, 2),
      oldConfig = _useState4[0],
      setOldConfig = _useState4[1];

  var form = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var isEmpty = Object.keys(config).length === 0;
  Object(preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    // 测试有没有旧的配置文件
    parent.postMessage({
      pluginMessage: {
        type: "testOldConfig"
      }
    }, '*');

    onmessage = function onmessage(_ref) {
      var _ref$data = _ref.data;
      _ref$data = _ref$data === void 0 ? {} : _ref$data;
      var pluginMessage = _ref$data.pluginMessage;
      var _pluginMessage$getCon = pluginMessage.getConfig,
          getConfig = _pluginMessage$getCon === void 0 ? null : _pluginMessage$getCon,
          _pluginMessage$alertM = pluginMessage.alertMsg,
          alertMsg = _pluginMessage$alertM === void 0 ? null : _pluginMessage$alertM,
          _pluginMessage$getOld = pluginMessage.getOldConfig,
          getOldConfig = _pluginMessage$getOld === void 0 ? null : _pluginMessage$getOld;
      getConfig !== null && setConfig(getConfig || {});
      getOldConfig !== null && setOldConfig(getOldConfig || {});
      alertMsg && Object(_component_Toast_toast__WEBPACK_IMPORTED_MODULE_4__["default"])(alertMsg);
    };
  }, []); // 下载 JSON

  var onDownLoad = function onDownLoad(e) {
    e.preventDefault();
    Object(_utils_saveJSON__WEBPACK_IMPORTED_MODULE_5__["default"])(config, config.name);
  };

  var save = function save(data) {
    if (!data.trimStart().trimEnd()) {
      Object(_component_Toast_toast__WEBPACK_IMPORTED_MODULE_4__["default"])("Config can't empty");
      return;
    }

    try {
      var objData = JSON.parse(data);

      if (objData) {
        Object(_postConfig_js__WEBPACK_IMPORTED_MODULE_2__["default"])({
          action: 'edit',
          value: objData
        });
      }
    } catch (error) {
      Object(_component_Toast_toast__WEBPACK_IMPORTED_MODULE_4__["default"])('Save error');
    }
  }; // 上传文件


  var onReplace = function onReplace(e) {
    var files = e.target.files || [];

    if (!files.length) {
      return;
    }

    var fr = new FileReader();

    fr.onload = function (e) {
      save(e.target.result);
    };

    fr.readAsText(files.item(0));
  }; // 修改


  var onEdit = function onEdit(e) {
    e.preventDefault();
    var dataSave = e.target.data.value;
    save(dataSave);
  };

  return Object(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])("form", {
    onSubmit: onEdit,
    ref: form,
    className: "f1 df fdc",
    children: [Object(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_component_Textarea__WEBPACK_IMPORTED_MODULE_3__["default"], {
      style: {
        backgroundColor: '#282c34',
        color: 'rgba(255, 255, 255, 0.8)',
        borderRadius: 0
      },
      name: "data",
      className: "f1",
      defaultValue: isEmpty ? "" : JSON.stringify(config, null, 2),
      placeholder: "Parse your config here"
    }), Object(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])("div", {
      className: "df aic g_row pt8 pb8",
      children: [Object(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_component_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
        title: "Download",
        className: "g_tip mr8",
        "data-title": "Download JSON",
        onClick: onDownLoad,
        children: "DownLoad"
      }), Object(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])("label", {
        className: "btn pr oh g_tip mr8",
        "data-title": "Replace By Upload JSON",
        children: ["Upload", Object(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("input", {
          className: "o0 pa w100% h100%",
          type: "file",
          onChange: onReplace
        })]
      }), Object(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_component_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
        type: "reset",
        className: "mla",
        children: "Reset"
      }), Object(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_component_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
        type: "submit",
        className: "ml8",
        children: "Save"
      })]
    }), Object(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_OldConfigBar__WEBPACK_IMPORTED_MODULE_7__["default"], {
      data: oldConfig
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
/* harmony import */ var _component_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../component/Button */ "./src/ui/component/Button/index.jsx");
/* harmony import */ var _component_Textarea__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../component/Textarea */ "./src/ui/component/Textarea/index.jsx");
/* harmony import */ var _Config_postConfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Config/_postConfig */ "./src/ui/page/Config/_postConfig.js");
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! preact/hooks */ "./node_modules/preact/hooks/dist/hooks.module.js");
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! preact/jsx-runtime */ "./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js");
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

  var isEmpty = Object.keys(selectionTokens).length === 0;
  var form = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_6__["useRef"])(null);
  Object(preact_compat__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    onmessage = function onmessage(_ref) {
      var _ref$data = _ref.data;
      _ref$data = _ref$data === void 0 ? {} : _ref$data;
      var pluginMessage = _ref$data.pluginMessage;
      var _pluginMessage$select = pluginMessage.selectionTokens,
          selectionTokens = _pluginMessage$select === void 0 ? null : _pluginMessage$select,
          _pluginMessage$alertM = pluginMessage.alertMsg,
          alertMsg = _pluginMessage$alertM === void 0 ? null : _pluginMessage$alertM;
      selectionTokens !== null && setSelectionTokens(selectionTokens || {});
      alertMsg && Object(_component_Toast_toast__WEBPACK_IMPORTED_MODULE_2__["default"])(alertMsg);
    };
  }, []);

  var onSave = function onSave(e) {
    e.preventDefault();
    var data = e.target.data.value;

    try {
      var objData = JSON.parse(data);

      if (objData) {
        Object(_Config_postConfig__WEBPACK_IMPORTED_MODULE_5__["default"])({
          action: 'addToken',
          value: objData
        });
      }
    } catch (error) {
      Object(_component_Toast_toast__WEBPACK_IMPORTED_MODULE_2__["default"])('Save error');
    }
  };

  return Object(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxs"])("form", {
    className: "f1 df fdc",
    rel: form,
    onSubmit: onSave,
    children: [Object(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_component_Textarea__WEBPACK_IMPORTED_MODULE_4__["default"], {
      style: {
        backgroundColor: '#282c34',
        color: 'rgba(255, 255, 255, 0.8)',
        borderRadius: 0
      },
      name: "data",
      className: "f1",
      defaultValue: isEmpty ? "" : JSON.stringify(selectionTokens, null, 2),
      placeholder: "The node you selected without any token"
    }), Object(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxs"])("div", {
      className: "g_row df aic jcsb tac pt8 pb8 lh24 bc:fff",
      children: [Object(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_component_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
        type: "reset",
        className: "mla",
        children: "Reset"
      }), Object(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_component_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
        disabled: isEmpty,
        type: "submit",
        className: "ml8",
        children: "Save"
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
  var filename = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'token-to-code';

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NsaXBib2FyZC1jb3B5L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9oaWdobGlnaHQuanMvc3R5bGVzL2F0b20tb25lLWRhcmsuY3NzIiwid2VicGFjazovLy8uL3NyYy91aS9jb21wb25lbnQvQnV0dG9uL2luZGV4Lmxlc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2NvbXBvbmVudC9UZXh0YXJlYS9pbmRleC5sZXNzIiwid2VicGFjazovLy8uL3NyYy91aS9jb21wb25lbnQvVG9hc3QvaW5kZXgubGVzcyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvaW5kZXgubGVzcyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvcGFnZS9Db25maWcvaW5kZXgubGVzcyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvcGFnZS9Ub2tlbi9pbmRleC5sZXNzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvY3NzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9oaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9qc29uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9oaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy94bWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9zdHlsZXMvYXRvbS1vbmUtZGFyay5jc3M/ZTkzZiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJlYWN0L2NvbXBhdC9kaXN0L2NvbXBhdC5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ByZWFjdC9kaXN0L3ByZWFjdC5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ByZWFjdC9ob29rcy9kaXN0L2hvb2tzLm1vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJlYWN0L2pzeC1ydW50aW1lL2Rpc3QvanN4UnVudGltZS5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NhdmUtYXMtZmlsZS9kaXN0L2VzNS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2F2ZS1hcy1maWxlL2Rpc3QvZXM1L3NhdmUtZmlsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3htbC1mb3JtYXR0ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3htbC1wYXJzZXIteG8vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2NvbXBvbmVudC9CdXR0b24vaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy91aS9jb21wb25lbnQvQnV0dG9uL2luZGV4Lmxlc3M/NDY5NyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvY29tcG9uZW50L0hlYWRlci9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL2NvbXBvbmVudC9UYWJzL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvY29tcG9uZW50L1RleHRhcmVhL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvY29tcG9uZW50L1RleHRhcmVhL2luZGV4Lmxlc3M/NzI3MSIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvY29tcG9uZW50L1RvYXN0L2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvY29tcG9uZW50L1RvYXN0L2luZGV4Lmxlc3M/ZTEyYSIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvY29tcG9uZW50L1RvYXN0L3RvYXN0LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy91aS9pbmRleC5sZXNzPzk0YTIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL3BhZ2UvQ29uZmlnL09sZENvbmZpZ0Jhci5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL3BhZ2UvQ29uZmlnL19wb3N0Q29uZmlnLmpzIiwid2VicGFjazovLy8uL3NyYy91aS9wYWdlL0NvbmZpZy9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL3BhZ2UvQ29uZmlnL2luZGV4Lmxlc3M/ZTY1MSIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvcGFnZS9Ib21lL0hpZ2hsaWdodC9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL3BhZ2UvSG9tZS9Ob1NlbGVjdGlvbi9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL3BhZ2UvSG9tZS9SZW5kZXJDU1MuanN4Iiwid2VicGFjazovLy8uL3NyYy91aS9wYWdlL0hvbWUvUmVuZGVySFRNTC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL3BhZ2UvSG9tZS9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL3BhZ2UvVG9rZW4vaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy91aS9wYWdlL1Rva2VuL2luZGV4Lmxlc3M/NjU5MiIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvdXRpbHMvc2F2ZUpTT04udHMiXSwibmFtZXMiOlsiQnV0dG9uIiwiYmxvY2siLCJzcXVhcmUiLCJjbGFzc05hbWUiLCJwcm9wcyIsImNsYXNzTmFtZXMiLCJTZXQiLCJqb2luIiwiSGVhZGVyIiwiY2hpbGRyZW4iLCJleHRyYSIsIlRhYnMiLCJkYXRhIiwidGFiSW5kZXgiLCJvbkNoYW5nZSIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIlRleHRhcmVhIiwiVG9hc3QiLCJvcGVuIiwidXNlU3RhdGUiLCJzaG93Iiwic2V0U2hvdyIsInVzZUVmZmVjdCIsIkNPTlRBSU5FUl9JRCIsImdldENvbnRhaW5lciIsIiRpdGVtIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIiRjb250YWluZXIiLCJjcmVhdGVFbGVtZW50IiwiaWQiLCJib2R5IiwiYXBwZW5kIiwidG9hc3QiLCJ0ZXh0Iiwic2hvd1RpbWUiLCJyZW5kZXIiLCJzZXRUaW1lb3V0IiwicmVtb3ZlQ2hpbGQiLCJEQVRBX1RBQiIsIkFQUCIsInNldFRhYkluZGV4Iiwib25UYWJDaGFuZ2UiLCJwYXJlbnQiLCJwb3N0TWVzc2FnZSIsInBsdWdpbk1lc3NhZ2UiLCJ0eXBlIiwidmFsdWUiLCJnZXRPYmpCeVByb3BTdHJpbmciLCJzdHJQcm9wcyIsInJlc3VsdCIsInNwbGl0IiwibmFtZSIsInJlcGxhY2UiLCJ0cmFuc1Rva2VucyIsInRva2VucyIsIm5ld1Rva2VuIiwiT2JqZWN0IiwiZW50cmllcyIsImlnbm9yZUNsYXNzTmFtZSIsInRleHRDbGFzc05hbWUiLCJjb21wb25lbnRQcm9wcyIsInJlbmRlckNoaWxkcmVuIiwicmVuZGVySGVpZ2h0IiwicmVuZGVyV2lkdGgiLCJuZXdJdGVtIiwiX3Rva2VuTmFtZSIsIl90b2tlblR5cGUiLCJERUZBVUxUIiwiU3RyaW5nIiwiX3JlbmRlckhlaWdodCIsIl9yZW5kZXJXaWR0aCIsIl9pZ25vcmVDbGFzc05hbWUiLCJ0cmFuc09sZCIsInByb2plY3RzIiwiaXNKU1giLCJ0b2tlbiIsIl9uYW1lIiwiT2xkQ29uZmlnQmFyIiwiaXNFbXB0eSIsImtleXMiLCJsZW5ndGgiLCJvblNhdmVPbGQiLCJzYXZlSlNPTiIsIl9wb3N0Q29uZmlnIiwiYWN0aW9uIiwiQ29uZmlnIiwiY29uZmlnIiwic2V0Q29uZmlnIiwib2xkQ29uZmlnIiwic2V0T2xkQ29uZmlnIiwiZm9ybSIsInVzZVJlZiIsIm9ubWVzc2FnZSIsImdldENvbmZpZyIsImFsZXJ0TXNnIiwiZ2V0T2xkQ29uZmlnIiwib25Eb3duTG9hZCIsInNhdmUiLCJ0cmltU3RhcnQiLCJ0cmltRW5kIiwib2JqRGF0YSIsIkpTT04iLCJwYXJzZSIsImVycm9yIiwib25SZXBsYWNlIiwiZmlsZXMiLCJ0YXJnZXQiLCJmciIsIkZpbGVSZWFkZXIiLCJvbmxvYWQiLCJyZWFkQXNUZXh0Iiwib25FZGl0IiwiZGF0YVNhdmUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsImJvcmRlclJhZGl1cyIsInN0cmluZ2lmeSIsImhsanMiLCJyZWdpc3Rlckxhbmd1YWdlIiwieG1sIiwiY3NzIiwianNvbiIsIkNTU19NQVAiLCJIaWdobGlnaHQiLCJsYW5ndWFnZSIsInN0ckh0bWwiLCJzZXRTdHJIdG1sIiwiYXBwZW5kQ2xhc3NOYW1lIiwiaHRtbCIsImhpZ2hsaWdodCIsIm92ZXJmbG93IiwiX19odG1sIiwiTm9TZWxlY3Rpb24iLCJDT0RFX1BSRSIsIlJlbmRlckNTUyIsIm5vU2VsZWN0aW9uIiwiY29kZSIsIm9uQ29weSIsImNsaXBib2FyZENvcHkiLCJ0aGVuIiwiSW5wdXRKU1giLCJkaXNhYmxlZCIsIm9uQ2hhbmdlSlNYIiwiY2hlY2tlZCIsIlJlbmRlckh0bWwiLCJmb3JtYXQiLCJIb21lIiwic2V0SHRtbCIsIkNTUyIsInNldENTUyIsInNldElzSlNYIiwic2V0Tm9TZWxlY3Rpb24iLCJnZXRIVE1MIiwiZ2V0Q1NTIiwiVG9rZW4iLCJzZWxlY3Rpb25Ub2tlbnMiLCJzZXRTZWxlY3Rpb25Ub2tlbnMiLCJvblNhdmUiLCJmaWxlbmFtZSIsImZpbGUiLCJGaWxlIiwic2F2ZUZpbGUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7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QUcsMklBQTJJLDZDQUE2QyxxQ0FBcUMsd0JBQXdCLEdBQUcsNEJBQTRCLGtCQUFrQixHQUFHLFVBQVUsdUJBQXVCLG1CQUFtQiwwQkFBMEIsdUJBQXVCLEdBQUcsU0FBUyx5T0FBeU8sS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsWUFBWSxPQUFPLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFlBQVksWUFBWSxZQUFZLE9BQU8sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFlBQVksT0FBTyxNQUFNLFVBQVUsTUFBTSxVQUFVLEtBQUssU0FBUyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sT0FBTyxVQUFVLE1BQU0sT0FBTyxVQUFVLE1BQU0sT0FBTyxVQUFVLE1BQU0sT0FBTyxVQUFVLE1BQU0sT0FBTyxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sVUFBVSxNQUFNLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE9BQU8sVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxZQUFZLFlBQVksWUFBWSxRQUFRLFVBQVUsTUFBTSxVQUFVLFdBQVcsV0FBVyxNQUFNLE9BQU8sV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sU0FBUyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyw2Q0FBNkMsMkJBQTJCLElBQUksUUFBUSxNQUFNLGlIQUFpSCxPQUFPLE9BQU8saUNBQWlDLCtCQUErQiwrQkFBK0IsNkNBQTZDLGdDQUFnQyxTQUFTLFdBQVcsRUFBRSxLQUFLLEVBQUUsVUFBVSxXQUFXLGdCQUFnQixPQUFPLGtCQUFrQixLQUFLLGVBQWUsR0FBRywrQkFBK0IsSUFBSSxXQUFXLGlFQUFpRSxPQUFPLE9BQU8sMEJBQTBCLCtCQUErQiwrQkFBK0IsNkNBQTZDLGdDQUFnQyxTQUFTLFdBQVcsRUFBRSxLQUFLLEVBQUUsVUFBVSxXQUFXLFFBQVEsT0FBTyxrQkFBa0IsS0FBSyxhQUFhLEdBQUcsVUFBVSxtQkFBbUIsUUFBUSxxQkFBcUIsUUFBUSx1QkFBdUIsTUFBTSxTQUFTLE9BQU8sNkJBQTZCLE1BQU0sWUFBWSxPQUFPLGdCQUFnQixZQUFZLG1CQUFtQixRQUFRLHNCQUFzQixVQUFVLHNCQUFzQixVQUFVLHNCQUFzQixTQUFTLFdBQVcsU0FBUyxXQUFXLE1BQU0sV0FBVyxNQUFNLGVBQWUsTUFBTSxjQUFjLE1BQU0sYUFBYSxNQUFNLGVBQWUsT0FBTyxxQkFBcUIsT0FBTyxvQkFBb0IsTUFBTSxhQUFhLE1BQU0sY0FBYyxPQUFPLG1CQUFtQixNQUFNLE9BQU8sWUFBWSxNQUFNLFVBQVUsT0FBTyxzQkFBc0IsT0FBTyxtQkFBbUIsTUFBTSxhQUFhLE1BQU0sV0FBVyxNQUFNLFlBQVksT0FBTyxZQUFZLE9BQU8sY0FBYyxPQUFPLGtCQUFrQixPQUFPLGtCQUFrQixRQUFRLHdCQUF3Qix5QkFBeUIsU0FBUyxnQkFBZ0IsU0FBUyxnQkFBZ0IsU0FBUyxnQkFBZ0IsU0FBUyxnQkFBZ0IsU0FBUyxnQkFBZ0IsU0FBUyxnQkFBZ0IsU0FBUyxnQkFBZ0IsU0FBUyxnQkFBZ0IsU0FBUyxnQkFBZ0IsT0FBTyxnQkFBZ0IsT0FBTyxlQUFlLFdBQVcsWUFBWSxPQUFPLHVCQUF1QixRQUFRLHlCQUF5QixRQUFRLDZCQUE2QixRQUFRLDhCQUE4QixNQUFNLE9BQU8sV0FBVyxVQUFVLFVBQVUsU0FBUyxPQUFPLGNBQWMsV0FBVyxnQkFBZ0IsV0FBVyxnQkFBZ0IsV0FBVyxnQkFBZ0IsT0FBTyxnQkFBZ0IsTUFBTSxTQUFTLE9BQU8saUJBQWlCLE9BQU8sa0JBQWtCLE9BQU8sZ0JBQWdCLE9BQU8sbUJBQW1CLE1BQU0sVUFBVSxNQUFNLGNBQWMsaUNBQWlDLE1BQU0sZ0JBQWdCLE1BQU0sVUFBVSxNQUFNLGtCQUFrQixPQUFPLG9CQUFvQixNQUFNLGVBQWUsTUFBTSxrQkFBa0IsWUFBWSxpQkFBaUIsTUFBTSxRQUFRLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxTQUFTLFVBQVUsUUFBUSxZQUFZLGVBQWUsT0FBTyxrQkFBa0IsT0FBTyxtQkFBbUIsT0FBTyxnQkFBZ0IsT0FBTyxpQkFBaUIsT0FBTyxxQkFBcUIsT0FBTywwQkFBMEIsT0FBTyxtQkFBbUIsT0FBTywwQkFBMEIsT0FBTyx5QkFBeUIsT0FBTyxvQkFBb0IsT0FBTyx5QkFBeUIsT0FBTyx5QkFBeUIsc0JBQXNCLHFCQUFxQixpQkFBaUIsT0FBTyxzQkFBc0IsT0FBTyxtQkFBbUIsTUFBTSxrQkFBa0IsV0FBVyxXQUFXLE9BQU8sd0JBQXdCLE9BQU8sbUJBQW1CLFFBQVEscUJBQXFCLHFCQUFxQixPQUFPLFVBQVUsb0JBQW9CLG1DQUFtQyxxQ0FBcUMsb0JBQW9CLCtCQUErQixvQkFBb0IsSUFBSSxVQUFVLE9BQU8sdUJBQXVCLElBQUksVUFBVSxPQUFPLHNCQUFzQixJQUFJLFVBQVUsT0FBTyxxQkFBcUIsSUFBSSxVQUFVLE9BQU8sNEJBQTRCLHFCQUFxQixJQUFJLFdBQVcsT0FBTyx1QkFBdUIsSUFBSSxXQUFXLE9BQU8sd0JBQXdCLElBQUksV0FBVyxPQUFPLHNCQUFzQixJQUFJLFdBQVcsT0FBTyx1QkFBdUIsSUFBSSxNQUFNLHFCQUFxQixJQUFJLE1BQU0sbUJBQW1CLElBQUksZ0JBQWdCLFVBQVUscUJBQXFCLElBQUksWUFBWSxVQUFVLHVCQUF1QixJQUFJLE1BQU0sTUFBTSxTQUFTLGdCQUFnQixFQUFFLDhCQUE4QixnQkFBZ0IsR0FBRyw4QkFBOEIsZ0JBQWdCLEdBQUcsOEJBQThCLGdCQUFnQixHQUFHLGdDQUFnQyxnQkFBZ0IsR0FBRywwQ0FBMEMsbUJBQW1CLEdBQUcsWUFBWSwrQkFBK0IsR0FBRyxxQkFBcUIsa0JBQWtCLG1CQUFtQiw2QkFBNkIsR0FBRyxVQUFVLG9CQUFvQixHQUFHLFNBQVMsZUFBZSxnQkFBZ0IsdUJBQXVCLEdBQUcsK0JBQStCLGNBQWMsR0FBRyxVQUFVLDRCQUE0QixHQUFHLGdCQUFnQixpQkFBaUIscUJBQXFCLDhCQUE4QixHQUFHLGFBQWEsc0JBQXNCLHVCQUF1QixHQUFHLFlBQVksdUJBQXVCLHdCQUF3QixHQUFHLGlCQUFpQiwwQkFBMEIsR0FBRyxXQUFXLGtDQUFrQyxHQUFHLGFBQWEsK0JBQStCLEdBQUcsWUFBWSxnQkFBZ0IsR0FBRyxvQ0FBb0MsbUJBQW1CLHVCQUF1QixzQkFBc0IsR0FBRyw0REFBNEQsdUJBQXVCLGNBQWMsNkJBQTZCLHlCQUF5Qix3Q0FBd0Msb0NBQW9DLGdDQUFnQyx1QkFBdUIsaUJBQWlCLEdBQUcsZ0NBQWdDLDhCQUE4QixlQUFlLG9CQUFvQixzQkFBc0Isc0JBQXNCLHVCQUF1Qiw4QkFBOEIscUJBQXFCLGdCQUFnQixvQkFBb0IsdUJBQXVCLHdCQUF3QixHQUFHLCtCQUErQixnQkFBZ0IsYUFBYSxjQUFjLHFCQUFxQixrQ0FBa0MsOEJBQThCLGVBQWUsR0FBRyw2SUFBNkksMkNBQTJDLG1DQUFtQyx3QkFBd0IsR0FBRyw4QkFBOEIsa0JBQWtCLEdBQUcsV0FBVywwQkFBMEIsdUJBQXVCLDBCQUEwQix1QkFBdUIsR0FBRywyQkFBMkIsWUFBWSxxQkFBcUIsYUFBYSxhQUFhLEtBQUssR0FBRyxpQ0FBaUMsd0JBQXdCLGtCQUFrQix5QkFBeUIsR0FBRywwQ0FBMEMseUJBQXlCLGtCQUFrQix1QkFBdUIsOEJBQThCLEdBQUcscUNBQXFDLHdCQUF3Qix3QkFBd0IsZUFBZSxjQUFjLEdBQUcscUJBQXFCO0FBQy9tbUI7QUFDZSxzRkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7OztBQ1B2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDK0g7QUFDN0I7QUFDbEcsOEJBQThCLG1GQUEyQixDQUFDLHNHQUFxQztBQUMvRjtBQUNBLDhCQUE4QixRQUFTLFVBQVUsa0VBQWtFO0FBQ25IO0FBQ2Usc0ZBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNQdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQytIO0FBQzdCO0FBQ2xHLDhCQUE4QixtRkFBMkIsQ0FBQyxzR0FBcUM7QUFDL0Y7QUFDQSw4QkFBOEIsUUFBUyxVQUFVLGtFQUFrRTtBQUNuSDtBQUNlLHNGQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7O0FDUDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCOztBQUVoQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0Q0FBNEMscUJBQXFCO0FBQ2pFOztBQUVBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQixpQkFBaUI7QUFDdEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQixxQkFBcUI7QUFDekM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFOzs7Ozs7Ozs7Ozs7QUNqRWE7O0FBRWIsaUNBQWlDLDJIQUEySDs7QUFFNUosNkJBQTZCLGtLQUFrSzs7QUFFL0wsaURBQWlELGdCQUFnQixnRUFBZ0Usd0RBQXdELDZEQUE2RCxzREFBc0Qsa0hBQWtIOztBQUU5WixzQ0FBc0MsdURBQXVELHVDQUF1QyxTQUFTLE9BQU8sa0JBQWtCLEVBQUUsYUFBYTs7QUFFckwsd0NBQXdDLDhGQUE4Rix3QkFBd0IsZUFBZSxlQUFlLGdCQUFnQixZQUFZLE1BQU0sd0JBQXdCLCtCQUErQixhQUFhLHFCQUFxQixtQ0FBbUMsRUFBRSxFQUFFLGNBQWMsV0FBVyxVQUFVLEVBQUUsVUFBVSxNQUFNLGlEQUFpRCxFQUFFLFVBQVUsa0JBQWtCLEVBQUUsRUFBRSxhQUFhOztBQUVuZiwrQkFBK0Isb0NBQW9DOztBQUVuRTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBLEU7Ozs7Ozs7Ozs7O0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGFBQWE7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekIsd0JBQXdCO0FBQ3hCLHdCQUF3QjtBQUN4QiwwQkFBMEI7QUFDMUIsMEJBQTBCO0FBQzFCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsV0FBVyxxQkFBcUI7QUFDaEMsYUFBYSxFQUFFO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsb0JBQW9CLEVBQUU7QUFDdEI7O0FBRUE7QUFDQSxhQUFhLE9BQU87QUFDcEIsY0FBYyx1QkFBdUI7QUFDckMsY0FBYyxxQkFBcUI7QUFDbkMsY0FBYyxxQkFBcUI7QUFDbkMsY0FBYyxhQUFhO0FBQzNCOztBQUVBLGVBQWUsc0NBQXNDO0FBQ3JELGVBQWUsNkJBQTZCO0FBQzVDOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQjtBQUNBO0FBQ0E7O0FBRUEsV0FBVyxTQUFTO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxLQUFLO0FBQ2xCLGNBQWMscUJBQXFCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsS0FBSztBQUNsQjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUIsaUJBQWlCLEVBQUUsVUFBVTtBQUNsRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCO0FBQ0EsbUNBQW1DLFVBQVU7QUFDN0M7QUFDQTs7QUFFQSxlQUFlLHVEQUF1RCxVQUFVO0FBQ2hGLGVBQWUsdURBQXVELEVBQUU7QUFDeEU7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGNBQWMsc0JBQXNCOztBQUVwQyxjQUFjLEtBQUs7QUFDbkI7QUFDQTtBQUNBOztBQUVBLGNBQWMsT0FBTztBQUNyQjtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxxQ0FBcUM7QUFDcEQsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0EsYUFBYSxFQUFFO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBLHNCQUFzQixRQUFROztBQUU5QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0Esc0JBQXNCLFFBQVE7O0FBRTlCO0FBQ0E7O0FBRUE7QUFDQSxhQUFhLFdBQVcsZ0JBQWdCO0FBQ3hDLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWE7QUFDYjtBQUNBO0FBQ0Esc0RBQXNEO0FBQ3REOztBQUVBO0FBQ0EsV0FBVyxpQkFBaUI7QUFDNUIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLHNCQUFzQjtBQUNqQyxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcscUJBQXFCO0FBQ2hDLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxvQkFBb0I7QUFDL0IsV0FBVyxPQUFPO0FBQ2xCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxnQkFBZ0IsR0FBRztBQUN0Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkZBQTZGO0FBQzdGLHdDQUF3QztBQUN4QywrRUFBK0Usc0RBQXNEOztBQUVySTtBQUNBLFVBQVUsa0JBQWtCLHlCQUF5QixFQUFFO0FBQ3ZEO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxhQUFhO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGdCQUFnQjtBQUMzQixXQUFXLGdCQUFnQjtBQUMzQixXQUFXLFVBQVU7QUFDckIsYUFBYTtBQUNiO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxjQUFjO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGFBQWE7QUFDOUIsZ0NBQWdDLDhCQUE4QixFQUFFO0FBQ2hFLGlCQUFpQixhQUFhO0FBQzlCLDhCQUE4Qix3REFBd0Q7QUFDdEYsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGlCQUFpQjtBQUM1QixXQUFXLGlCQUFpQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsd0RBQXdEO0FBQ25FLFdBQVcsUUFBUTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsY0FBYztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEIsWUFBWSx1QkFBdUI7QUFDbkMsYUFBYTtBQUNiO0FBQ0Esb0NBQW9DLFVBQVU7QUFDOUM7QUFDQTtBQUNBO0FBQ0EsYUFBYSxnQkFBZ0I7QUFDN0IsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0JBQWdCLE9BQU87QUFDdkI7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGFBQWE7O0FBRWhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0JBQWdCLE9BQU87QUFDdkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFB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QUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xQQTs7O0FBR0EsU0FBU0EsTUFBVCxPQUEyRTtBQUFBLHdCQUExREMsS0FBMEQ7QUFBQSxNQUExREEsS0FBMEQsMkJBQWxELEtBQWtEO0FBQUEseUJBQTNDQyxNQUEyQztBQUFBLE1BQTNDQSxNQUEyQyw0QkFBbEMsS0FBa0M7QUFBQSw0QkFB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MkNBQWY7QUFBQSxpQkFDSSwrREFBQyx5REFBRDtBQUFRLFlBQUksRUFBQyxPQUFiO0FBQXFCLGlCQUFTLEVBQUMsS0FBL0I7QUFBQTtBQUFBLFFBREosRUFFSSwrREFBQyx5REFBRDtBQUFRLGdCQUFRLEVBQUU3RSxPQUFsQjtBQUEyQixZQUFJLEVBQUMsUUFBaEM7QUFBeUMsaUJBQVMsRUFBQyxLQUFuRDtBQUFBO0FBQUEsUUFGSjtBQUFBLE1BUEo7QUFBQSxJQURKO0FBY0gsQ0EzQ0Q7O0FBNENlNEUsb0VBQWYsRTs7Ozs7Ozs7Ozs7O0FDcERBO0FBQUE7QUFBQTtBQUFBO0FBQWtHO0FBQ2xHLFlBQWtKOztBQUVsSjs7QUFFQTtBQUNBOztBQUVBLGFBQWEsMEdBQUcsQ0FBQyw0SEFBTzs7OztBQUlULDJMQUFPLGFBQWEsRTs7Ozs7Ozs7Ozs7O0FDWm5DO0FBQUE7QUFBQTtBQUNBOztBQUNBLElBQU14RSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDM0UsSUFBRCxFQUFzQztBQUFBLE1BQS9CdUosUUFBK0IsdUVBQXBCLGVBQW9COztBQUNuRCxNQUFJLENBQUN2SixJQUFMLEVBQVc7QUFDUDtBQUNIOztBQUNELE1BQU1rSCxJQUFJLEdBQUdwQixJQUFJLENBQUNlLFNBQUwsQ0FBZTdHLElBQWYsRUFBcUIsSUFBckIsRUFBMkIsQ0FBM0IsQ0FBYixDQUptRCxDQUtuRDs7QUFDQSxNQUFNd0osSUFBSSxHQUFHLElBQUlDLElBQUosQ0FBUyxDQUFDdkMsSUFBRCxDQUFULEVBQWlCO0FBQUU1RSxRQUFJLEVBQUU7QUFBUixHQUFqQixDQUFiO0FBQ0FvSCw4REFBUSxDQUFDRixJQUFELFlBQVVELFFBQVYsV0FBUjtBQUNILENBUkQ7O0FBU2U1RSx1RUFBZixFIiwiZmlsZSI6InVpLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvdWkvaW5kZXguanN4XCIpO1xuIiwiLyohIGNsaXBib2FyZC1jb3B5LiBNSVQgTGljZW5zZS4gRmVyb3NzIEFib3VraGFkaWplaCA8aHR0cHM6Ly9mZXJvc3Mub3JnL29wZW5zb3VyY2U+ICovXG4vKiBnbG9iYWwgRE9NRXhjZXB0aW9uICovXG5cbm1vZHVsZS5leHBvcnRzID0gY2xpcGJvYXJkQ29weVxuXG5mdW5jdGlvbiBtYWtlRXJyb3IgKCkge1xuICByZXR1cm4gbmV3IERPTUV4Y2VwdGlvbignVGhlIHJlcXVlc3QgaXMgbm90IGFsbG93ZWQnLCAnTm90QWxsb3dlZEVycm9yJylcbn1cblxuYXN5bmMgZnVuY3Rpb24gY29weUNsaXBib2FyZEFwaSAodGV4dCkge1xuICAvLyBVc2UgdGhlIEFzeW5jIENsaXBib2FyZCBBUEkgd2hlbiBhdmFpbGFibGUuIFJlcXVpcmVzIGEgc2VjdXJlIGJyb3dzaW5nXG4gIC8vIGNvbnRleHQgKGkuZS4gSFRUUFMpXG4gIGlmICghbmF2aWdhdG9yLmNsaXBib2FyZCkge1xuICAgIHRocm93IG1ha2VFcnJvcigpXG4gIH1cbiAgcmV0dXJuIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KHRleHQpXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGNvcHlFeGVjQ29tbWFuZCAodGV4dCkge1xuICAvLyBQdXQgdGhlIHRleHQgdG8gY29weSBpbnRvIGEgPHNwYW4+XG4gIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgc3Bhbi50ZXh0Q29udGVudCA9IHRleHRcblxuICAvLyBQcmVzZXJ2ZSBjb25zZWN1dGl2ZSBzcGFjZXMgYW5kIG5ld2xpbmVzXG4gIHNwYW4uc3R5bGUud2hpdGVTcGFjZSA9ICdwcmUnXG4gIHNwYW4uc3R5bGUud2Via2l0VXNlclNlbGVjdCA9ICdhdXRvJ1xuICBzcGFuLnN0eWxlLnVzZXJTZWxlY3QgPSAnYWxsJ1xuXG4gIC8vIEFkZCB0aGUgPHNwYW4+IHRvIHRoZSBwYWdlXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc3BhbilcblxuICAvLyBNYWtlIGEgc2VsZWN0aW9uIG9iamVjdCByZXByZXNlbnRpbmcgdGhlIHJhbmdlIG9mIHRleHQgc2VsZWN0ZWQgYnkgdGhlIHVzZXJcbiAgY29uc3Qgc2VsZWN0aW9uID0gd2luZG93LmdldFNlbGVjdGlvbigpXG4gIGNvbnN0IHJhbmdlID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZVJhbmdlKClcbiAgc2VsZWN0aW9uLnJlbW92ZUFsbFJhbmdlcygpXG4gIHJhbmdlLnNlbGVjdE5vZGUoc3BhbilcbiAgc2VsZWN0aW9uLmFkZFJhbmdlKHJhbmdlKVxuXG4gIC8vIENvcHkgdGV4dCB0byB0aGUgY2xpcGJvYXJkXG4gIGxldCBzdWNjZXNzID0gZmFsc2VcbiAgdHJ5IHtcbiAgICBzdWNjZXNzID0gd2luZG93LmRvY3VtZW50LmV4ZWNDb21tYW5kKCdjb3B5JylcbiAgfSBmaW5hbGx5IHtcbiAgICAvLyBDbGVhbnVwXG4gICAgc2VsZWN0aW9uLnJlbW92ZUFsbFJhbmdlcygpXG4gICAgd2luZG93LmRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoc3BhbilcbiAgfVxuXG4gIGlmICghc3VjY2VzcykgdGhyb3cgbWFrZUVycm9yKClcbn1cblxuYXN5bmMgZnVuY3Rpb24gY2xpcGJvYXJkQ29weSAodGV4dCkge1xuICB0cnkge1xuICAgIGF3YWl0IGNvcHlDbGlwYm9hcmRBcGkodGV4dClcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgLy8gLi4uT3RoZXJ3aXNlLCB1c2UgZG9jdW1lbnQuZXhlY0NvbW1hbmQoKSBmYWxsYmFja1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBjb3B5RXhlY0NvbW1hbmQodGV4dClcbiAgICB9IGNhdGNoIChlcnIyKSB7XG4gICAgICB0aHJvdyAoZXJyMiB8fCBlcnIgfHwgbWFrZUVycm9yKCkpXG4gICAgfVxuICB9XG59XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKlxcblxcbkF0b20gT25lIERhcmsgYnkgRGFuaWVsIEdhbWFnZVxcbk9yaWdpbmFsIE9uZSBEYXJrIFN5bnRheCB0aGVtZSBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9hdG9tL29uZS1kYXJrLXN5bnRheFxcblxcbmJhc2U6ICAgICMyODJjMzRcXG5tb25vLTE6ICAjYWJiMmJmXFxubW9uby0yOiAgIzgxODg5Nlxcbm1vbm8tMzogICM1YzYzNzBcXG5odWUtMTogICAjNTZiNmMyXFxuaHVlLTI6ICAgIzYxYWVlZVxcbmh1ZS0zOiAgICNjNjc4ZGRcXG5odWUtNDogICAjOThjMzc5XFxuaHVlLTU6ICAgI2UwNmM3NVxcbmh1ZS01LTI6ICNiZTUwNDZcXG5odWUtNjogICAjZDE5YTY2XFxuaHVlLTYtMjogI2U2YzA3YlxcblxcbiovXFxuXFxuLmhsanMge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBvdmVyZmxvdy14OiBhdXRvO1xcbiAgcGFkZGluZzogMC41ZW07XFxuICBjb2xvcjogI2FiYjJiZjtcXG4gIGJhY2tncm91bmQ6ICMyODJjMzQ7XFxufVxcblxcbi5obGpzLWNvbW1lbnQsXFxuLmhsanMtcXVvdGUge1xcbiAgY29sb3I6ICM1YzYzNzA7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi5obGpzLWRvY3RhZyxcXG4uaGxqcy1rZXl3b3JkLFxcbi5obGpzLWZvcm11bGEge1xcbiAgY29sb3I6ICNjNjc4ZGQ7XFxufVxcblxcbi5obGpzLXNlY3Rpb24sXFxuLmhsanMtbmFtZSxcXG4uaGxqcy1zZWxlY3Rvci10YWcsXFxuLmhsanMtZGVsZXRpb24sXFxuLmhsanMtc3Vic3Qge1xcbiAgY29sb3I6ICNlMDZjNzU7XFxufVxcblxcbi5obGpzLWxpdGVyYWwge1xcbiAgY29sb3I6ICM1NmI2YzI7XFxufVxcblxcbi5obGpzLXN0cmluZyxcXG4uaGxqcy1yZWdleHAsXFxuLmhsanMtYWRkaXRpb24sXFxuLmhsanMtYXR0cmlidXRlLFxcbi5obGpzLW1ldGEtc3RyaW5nIHtcXG4gIGNvbG9yOiAjOThjMzc5O1xcbn1cXG5cXG4uaGxqcy1idWlsdF9pbixcXG4uaGxqcy1jbGFzcyAuaGxqcy10aXRsZSB7XFxuICBjb2xvcjogI2U2YzA3YjtcXG59XFxuXFxuLmhsanMtYXR0cixcXG4uaGxqcy12YXJpYWJsZSxcXG4uaGxqcy10ZW1wbGF0ZS12YXJpYWJsZSxcXG4uaGxqcy10eXBlLFxcbi5obGpzLXNlbGVjdG9yLWNsYXNzLFxcbi5obGpzLXNlbGVjdG9yLWF0dHIsXFxuLmhsanMtc2VsZWN0b3ItcHNldWRvLFxcbi5obGpzLW51bWJlciB7XFxuICBjb2xvcjogI2QxOWE2NjtcXG59XFxuXFxuLmhsanMtc3ltYm9sLFxcbi5obGpzLWJ1bGxldCxcXG4uaGxqcy1saW5rLFxcbi5obGpzLW1ldGEsXFxuLmhsanMtc2VsZWN0b3ItaWQsXFxuLmhsanMtdGl0bGUge1xcbiAgY29sb3I6ICM2MWFlZWU7XFxufVxcblxcbi5obGpzLWVtcGhhc2lzIHtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLmhsanMtc3Ryb25nIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uaGxqcy1saW5rIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL3N0eWxlcy9hdG9tLW9uZS1kYXJrLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBa0JDOztBQUVEO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsY0FBYztFQUNkLG1CQUFtQjtBQUNyQjs7QUFFQTs7RUFFRSxjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBOzs7RUFHRSxjQUFjO0FBQ2hCOztBQUVBOzs7OztFQUtFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBOzs7OztFQUtFLGNBQWM7QUFDaEI7O0FBRUE7O0VBRUUsY0FBYztBQUNoQjs7QUFFQTs7Ozs7Ozs7RUFRRSxjQUFjO0FBQ2hCOztBQUVBOzs7Ozs7RUFNRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qXFxuXFxuQXRvbSBPbmUgRGFyayBieSBEYW5pZWwgR2FtYWdlXFxuT3JpZ2luYWwgT25lIERhcmsgU3ludGF4IHRoZW1lIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2F0b20vb25lLWRhcmstc3ludGF4XFxuXFxuYmFzZTogICAgIzI4MmMzNFxcbm1vbm8tMTogICNhYmIyYmZcXG5tb25vLTI6ICAjODE4ODk2XFxubW9uby0zOiAgIzVjNjM3MFxcbmh1ZS0xOiAgICM1NmI2YzJcXG5odWUtMjogICAjNjFhZWVlXFxuaHVlLTM6ICAgI2M2NzhkZFxcbmh1ZS00OiAgICM5OGMzNzlcXG5odWUtNTogICAjZTA2Yzc1XFxuaHVlLTUtMjogI2JlNTA0Nlxcbmh1ZS02OiAgICNkMTlhNjZcXG5odWUtNi0yOiAjZTZjMDdiXFxuXFxuKi9cXG5cXG4uaGxqcyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG92ZXJmbG93LXg6IGF1dG87XFxuICBwYWRkaW5nOiAwLjVlbTtcXG4gIGNvbG9yOiAjYWJiMmJmO1xcbiAgYmFja2dyb3VuZDogIzI4MmMzNDtcXG59XFxuXFxuLmhsanMtY29tbWVudCxcXG4uaGxqcy1xdW90ZSB7XFxuICBjb2xvcjogIzVjNjM3MDtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLmhsanMtZG9jdGFnLFxcbi5obGpzLWtleXdvcmQsXFxuLmhsanMtZm9ybXVsYSB7XFxuICBjb2xvcjogI2M2NzhkZDtcXG59XFxuXFxuLmhsanMtc2VjdGlvbixcXG4uaGxqcy1uYW1lLFxcbi5obGpzLXNlbGVjdG9yLXRhZyxcXG4uaGxqcy1kZWxldGlvbixcXG4uaGxqcy1zdWJzdCB7XFxuICBjb2xvcjogI2UwNmM3NTtcXG59XFxuXFxuLmhsanMtbGl0ZXJhbCB7XFxuICBjb2xvcjogIzU2YjZjMjtcXG59XFxuXFxuLmhsanMtc3RyaW5nLFxcbi5obGpzLXJlZ2V4cCxcXG4uaGxqcy1hZGRpdGlvbixcXG4uaGxqcy1hdHRyaWJ1dGUsXFxuLmhsanMtbWV0YS1zdHJpbmcge1xcbiAgY29sb3I6ICM5OGMzNzk7XFxufVxcblxcbi5obGpzLWJ1aWx0X2luLFxcbi5obGpzLWNsYXNzIC5obGpzLXRpdGxlIHtcXG4gIGNvbG9yOiAjZTZjMDdiO1xcbn1cXG5cXG4uaGxqcy1hdHRyLFxcbi5obGpzLXZhcmlhYmxlLFxcbi5obGpzLXRlbXBsYXRlLXZhcmlhYmxlLFxcbi5obGpzLXR5cGUsXFxuLmhsanMtc2VsZWN0b3ItY2xhc3MsXFxuLmhsanMtc2VsZWN0b3ItYXR0cixcXG4uaGxqcy1zZWxlY3Rvci1wc2V1ZG8sXFxuLmhsanMtbnVtYmVyIHtcXG4gIGNvbG9yOiAjZDE5YTY2O1xcbn1cXG5cXG4uaGxqcy1zeW1ib2wsXFxuLmhsanMtYnVsbGV0LFxcbi5obGpzLWxpbmssXFxuLmhsanMtbWV0YSxcXG4uaGxqcy1zZWxlY3Rvci1pZCxcXG4uaGxqcy10aXRsZSB7XFxuICBjb2xvcjogIzYxYWVlZTtcXG59XFxuXFxuLmhsanMtZW1waGFzaXMge1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4uaGxqcy1zdHJvbmcge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5obGpzLWxpbmsge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5idG4ge1xcbiAgaGVpZ2h0OiAxLjVyZW07XFxuICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTtcXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxcmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMXB4ICMwMDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuLmJ0bjpob3ZlciB7XFxuICBjb2xvcjogIzRjNWZlMjtcXG59XFxuLmJ0bjpkaXNhYmxlZCB7XFxuICBvcGFjaXR5OiAwLjU7XFxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbn1cXG4uYnRuLl9ibG9jayB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4uYnRuLl9zcXVhcmUge1xcbiAgcGFkZGluZzogMC4zNzVyZW07XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy91aS9jb21wb25lbnQvQnV0dG9uL2luZGV4Lmxlc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQ0E7RUFDRSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0FBQUY7QUFHQTtFQUNFLGNBQUE7QUFERjtBQUlBO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0FBRkY7QUFLQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0FBSEY7QUFNQTtFQUNFLGlCQUFBO0FBSkZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuLmJ0biB7XFxuICBoZWlnaHQ6IDI0LzE2KjFyZW07XFxuICBwYWRkaW5nOiA0LzE2KjFyZW0gOC8xNioxcmVtO1xcbiAgZm9udC1zaXplOiAxMi8xNioxcmVtO1xcbiAgbGluZS1oZWlnaHQ6IDFyZW07XFxuICBib3JkZXI6bm9uZTtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDFweCAjMDAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcblxcbi5idG46aG92ZXIge1xcbiAgY29sb3I6ICM0YzVmZTI7XFxufVxcblxcbi5idG46ZGlzYWJsZWQge1xcbiAgb3BhY2l0eTogMC41O1xcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG59XFxuXFxuLmJ0bi5fYmxvY2sge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmJ0bi5fc3F1YXJlIHtcXG4gIHBhZGRpbmc6IDYvMTYqMXJlbTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLnRleHRhcmVhIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XFxuICBib3JkZXI6IG5vbmUgMDtcXG4gIHJlc2l6ZTogdmVydGljYWw7XFxuICByZXNpemU6IG5vbmU7XFxufVxcbi50ZXh0YXJlYTpmb2N1cyxcXG4udGV4dGFyZWE6aG92ZXIge1xcbiAgYm9yZGVyLWNvbG9yOiAjMzMzO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvdWkvY29tcG9uZW50L1RleHRhcmVhL2luZGV4Lmxlc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQ0E7RUFDRSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFBRjtBQUdBOztFQUNFLGtCQUFBO0FBQUZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuLnRleHRhcmVhIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XFxuICBib3JkZXI6IG5vbmUgMDtcXG4gIHJlc2l6ZTogdmVydGljYWw7XFxuICByZXNpemU6IG5vbmU7XFxufVxcblxcbi50ZXh0YXJlYTpmb2N1cywgLnRleHRhcmVhOmhvdmVyIHtcXG4gIGJvcmRlci1jb2xvcjogIzMzMztcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLnRvYXN0LWJveCB7XFxuICB6LWluZGV4OiAxMDA7XFxufVxcbi50b2FzdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XFxuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XFxufVxcbi50b2FzdC1ib3gge1xcbiAgb3BhY2l0eTogMDtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG59XFxuLnRvYXN0LWJveC5fc2hvdyB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgb3BhY2l0eTogMTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XFxuICB0cmFuc2l0aW9uOiAyMDBtcztcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3VpL2NvbXBvbmVudC9Ub2FzdC9pbmRleC5sZXNzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUNBO0VBQ0UsWUFBQTtBQUFGO0FBR0E7RUFDRSxvQ0FBQTtFQUNBLHFCQUFBO0FBREY7QUFJQTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0FBRkY7QUFLQTtFQUNFLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLDRCQUFBO0VBQ0EsaUJBQUE7QUFIRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG4udG9hc3QtYm94IHtcXG4gIHotaW5kZXg6IDEwMDtcXG59XFxuXFxuLnRvYXN0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcXG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcXG59XFxuXFxuLnRvYXN0LWJveCB7XFxuICBvcGFjaXR5OiAwO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbn1cXG5cXG4udG9hc3QtYm94Ll9zaG93IHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICBvcGFjaXR5OiAxO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcXG4gIHRyYW5zaXRpb246IDIwMG1zO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAY2hhcnNldCBcXFwidXRmLThcXFwiO1xcbi5haWMge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmFpZmUge1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbn1cXG4uYWlmcyB7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuLmIwIHtcXG4gIGJvdHRvbTogMDtcXG59XFxuLmJjdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuLmJuIHtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuLmJyMCB7XFxuICBib3JkZXItcmFkaXVzOiAwO1xcbn1cXG4uYnIxMDBcXFxcJSB7XFxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbn1cXG4uYnNiYiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG4uYmNfZmZmIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxufVxcbi5iY18wMDAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXG59XFxuLmNfMDAwIHtcXG4gIGNvbG9yOiAjMDAwO1xcbn1cXG4uY19mZmYge1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbi5jYiB7XFxuICBjbGVhcjogYm90aDtcXG59XFxuLmNwIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmRiIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4uZGYge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuLmRpIHtcXG4gIGRpc3BsYXk6IGlubGluZTtcXG59XFxuLmRpYiB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcbi5kaWYge1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxufVxcbi5kbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4uZHQge1xcbiAgZGlzcGxheTogdGFibGU7XFxufVxcbi5kdGMge1xcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcXG59XFxuLmYxIHtcXG4gIGZsZXg6IDE7XFxuICBtaW4td2lkdGg6IDA7XFxufVxcbi5mYSB7XFxuICBmbGV4OiBhdXRvO1xcbn1cXG4uZmRjIHtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5mZHIge1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuLmZpIHtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxufVxcbi5mbCB7XFxuICBmbG9hdDogbGVmdDtcXG59XFxuLmZyIHtcXG4gIGZsb2F0OiByaWdodDtcXG59XFxuLmZzMCB7XFxuICBmb250LXNpemU6IDA7XFxufVxcbi5mczEge1xcbiAgZmxleC1zaHJpbms6IDE7XFxufVxcbi5mc2kge1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG4uZnNuIHtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuLmZ2c2Mge1xcbiAgZm9udC12YXJpYW50OiBzbWFsbC1jYXBzO1xcbiAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTtcXG59XFxuLmZ3MTAwIHtcXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XFxufVxcbi5mdzIwMCB7XFxuICBmb250LXdlaWdodDogMjAwO1xcbn1cXG4uZnczMDAge1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG59XFxuLmZ3NDAwIHtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcbi5mdzUwMCB7XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG4uZnc2MDAge1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuLmZ3NzAwIHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcbi5mdzgwMCB7XFxuICBmb250LXdlaWdodDogODAwO1xcbn1cXG4uZnc5MDAge1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG59XFxuLmZ3biB7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG4uZnd3IHtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuLmgxMDBcXFxcJSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbi5qY2Mge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5qY2ZlIHtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcbi5qY3NhIHtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG4uamNzYiB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5sMCB7XFxuICBsZWZ0OiAwO1xcbn1cXG4ubDEwMFxcXFwlIHtcXG4gIGxlZnQ6IDEwMCU7XFxufVxcbi5sNTBcXFxcJSB7XFxuICBsZWZ0OiA1MCU7XFxufVxcbi5saDEge1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxufVxcbi5saDFcXFxcLjIge1xcbiAgbGluZS1oZWlnaHQ6IDEuMjtcXG59XFxuLmxoMVxcXFwuNSB7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbn1cXG4ubGgxXFxcXC44IHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjg7XFxufVxcbi5sc24ge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuLm0wIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuLm1sYSB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuLm1yYSB7XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcbi5tdGEge1xcbiAgbWFyZ2luLXRvcDogYXV0bztcXG59XFxuLm1iYSB7XFxuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xcbn1cXG4ubzAge1xcbiAgb3BhY2l0eTogMDtcXG59XFxuLm9hIHtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xcbn1cXG4ub2gge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLnAwIHtcXG4gIHBhZGRpbmc6IDA7XFxufVxcbi5wYSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcbi5wZW4ge1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcbi5wZiB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxufVxcbi5wciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5wdDEwMFxcXFwlIHtcXG4gIHBhZGRpbmctdG9wOiAxMDAlO1xcbn1cXG4ucjAge1xcbiAgcmlnaHQ6IDA7XFxufVxcbi5yMTAwXFxcXCUge1xcbiAgcmlnaHQ6IDEwMCU7XFxufVxcbi50MCB7XFxuICB0b3A6IDA7XFxufVxcbi50MTAwXFxcXCUge1xcbiAgdG9wOiAxMDAlO1xcbn1cXG4udDUwXFxcXCUge1xcbiAgdG9wOiA1MCU7XFxufVxcbi5tdzEwMFxcXFwlIHtcXG4gIG1heC13aWR0aDogMTAwJTtcXG59XFxuLnRhYyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi50YWoge1xcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcXG59XFxuLnRhbCB7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG4udGFyIHtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG4udGRuIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuLnRkdSB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuLnRsZiB7XFxuICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xcbn1cXG4udHRjIHtcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbn1cXG4udHRsIHtcXG4gIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7XFxufVxcbi50dG4ge1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxufVxcbi50dHUge1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG59XFxuLnVzbiB7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG4udmFtIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcbi52YXQge1xcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcXG59XFxuLnZoIHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuLncxMDBcXFxcJSB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLndhbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxufVxcbi53c24ge1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuLnd3Yncge1xcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xcbn1cXG4uemkxIHtcXG4gIHotaW5kZXg6IDE7XFxufVxcbi8qKlxcbiAqICNTQUNTUyhmb250LXNpemU7IGZzOyAxMiwgMTY7IDFweCk7XFxuICogQHByb3A6IOWxnuaAp+WQjVxcbiAqIEBuYW1lOiDnvKnlhpnlkI1cXG4gKiBAbGlzdDog5YC85YiX6KGoXFxuICogQHVuaXQ6IOWNleS9jeaNoueul+ihqOi+vuW8jywg6buY6K6k5Li6MXB4LCDmg7PopoEgcmVtIOWhq+WGmSAxLzE2KjFyZW1cXG4gKi9cXG4vKipcXG4gKiAjU0FDU1MoZm9udC13ZWlnaHQ7IGZ3OyA0MDAsIDcwMCk7XFxuICogQHByb3A6IOWxnuaAp+WQjVxcbiAqIEBuYW1lOiDnvKnlhpnlkI1cXG4gKiBAbGlzdDog5YC85YiX6KGoXFxuICovXFxuLyog5riF6Zmk5rWu5YqoICovXFxuLyog5paH5a2X6LaF5Ye65LiA6KGM54K554K554K5ICovXFxuLyog5aSa6KGM5paH5pys6LaF5Ye654K554K554K5ICovXFxuLyog55So6KGo5qC855qE5pa55byP5pKR5ruh5rWu5Yqo5LmL5ZCO55qE5Ymp5L2Z56m66Ze0ICovXFxuLm10LTEge1xcbiAgbWFyZ2luLXRvcDogLTAuMDYyNXJlbTtcXG59XFxuLm10NCB7XFxuICBtYXJnaW4tdG9wOiAwLjI1cmVtO1xcbn1cXG4ubXQ4IHtcXG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcXG59XFxuLm10MTIge1xcbiAgbWFyZ2luLXRvcDogMC43NXJlbTtcXG59XFxuLm10MTYge1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG59XFxuLm1iLTEge1xcbiAgbWFyZ2luLWJvdHRvbTogLTAuMDYyNXJlbTtcXG59XFxuLm1iNCB7XFxuICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtO1xcbn1cXG4ubWI4IHtcXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG59XFxuLm1iMTIge1xcbiAgbWFyZ2luLWJvdHRvbTogMC43NXJlbTtcXG59XFxuLm1iMTYge1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuLm1yLTEge1xcbiAgbWFyZ2luLXJpZ2h0OiAtMC4wNjI1cmVtO1xcbn1cXG4ubXI0IHtcXG4gIG1hcmdpbi1yaWdodDogMC4yNXJlbTtcXG59XFxuLm1yOCB7XFxuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcXG59XFxuLm1yMTIge1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjc1cmVtO1xcbn1cXG4ubXIxNiB7XFxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxufVxcbi5tbC0xIHtcXG4gIG1hcmdpbi1sZWZ0OiAtMC4wNjI1cmVtO1xcbn1cXG4ubWw0IHtcXG4gIG1hcmdpbi1sZWZ0OiAwLjI1cmVtO1xcbn1cXG4ubWw4IHtcXG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07XFxufVxcbi5tbDEyIHtcXG4gIG1hcmdpbi1sZWZ0OiAwLjc1cmVtO1xcbn1cXG4ubWwxNiB7XFxuICBtYXJnaW4tbGVmdDogMXJlbTtcXG59XFxuLnB0NCB7XFxuICBwYWRkaW5nLXRvcDogMC4yNXJlbTtcXG59XFxuLnB0OCB7XFxuICBwYWRkaW5nLXRvcDogMC41cmVtO1xcbn1cXG4ucHQxMiB7XFxuICBwYWRkaW5nLXRvcDogMC43NXJlbTtcXG59XFxuLnB0MTYge1xcbiAgcGFkZGluZy10b3A6IDFyZW07XFxufVxcbi5wcjQge1xcbiAgcGFkZGluZy1yaWdodDogMC4yNXJlbTtcXG59XFxuLnByOCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XFxufVxcbi5wcjEyIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDAuNzVyZW07XFxufVxcbi5wcjE2IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDFyZW07XFxufVxcbi5wYjQge1xcbiAgcGFkZGluZy1ib3R0b206IDAuMjVyZW07XFxufVxcbi5wYjgge1xcbiAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcXG59XFxuLnBiMTIge1xcbiAgcGFkZGluZy1ib3R0b206IDAuNzVyZW07XFxufVxcbi5wYjE2IHtcXG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xcbn1cXG4ucGw0IHtcXG4gIHBhZGRpbmctbGVmdDogMC4yNXJlbTtcXG59XFxuLnBsOCB7XFxuICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcXG59XFxuLnBsMTIge1xcbiAgcGFkZGluZy1sZWZ0OiAwLjc1cmVtO1xcbn1cXG4ucGwxNiB7XFxuICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxufVxcbi5mdzYwMCB7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG4uZnc2MDAge1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuLmZzMTIge1xcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xcbn1cXG4uZnMxNCB7XFxuICBmb250LXNpemU6IDAuODc1cmVtO1xcbn1cXG4uZnMxNiB7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcbi5mczIwIHtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG59XFxuLmxoMTYge1xcbiAgbGluZS1oZWlnaHQ6IDFyZW07XFxufVxcbi5saDIwIHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjI1cmVtO1xcbn1cXG4ubGgyNCB7XFxuICBsaW5lLWhlaWdodDogMS41cmVtO1xcbn1cXG4uYnIyIHtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG59XFxuLmJyNCB7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcbi5oMjQge1xcbiAgaGVpZ2h0OiAxLjVyZW07XFxufVxcbi5jXFxcXDpsLFxcbi5jXFxcXDpsXFxcXDpoOmhvdmVyIHtcXG4gIGNvbG9yOiAjMTExO1xcbn1cXG4uY1xcXFw6bSxcXG4uY1xcXFw6bVxcXFw6aDpob3ZlciB7XFxuICBjb2xvcjogIzMzMztcXG59XFxuLmNcXFxcOnMsXFxuLmNcXFxcOnNcXFxcOmg6aG92ZXIge1xcbiAgY29sb3I6ICM2NjY7XFxufVxcbi5jXFxcXDp4cyxcXG4uY1xcXFw6eHNcXFxcOmg6aG92ZXIge1xcbiAgY29sb3I6ICM5OTk7XFxufVxcbi5jXFxcXDpwcmltYXJ5LFxcbi5jXFxcXDpwcmltYXJ5XFxcXDpoOmhvdmVyIHtcXG4gIGNvbG9yOiAjNGM1ZmUyO1xcbn1cXG4udGQyMDAge1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMjAwbXM7XFxufVxcbi8qIG90aGVycyAqL1xcbioge1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBpbmhlcml0O1xcbn1cXG5yb290IHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuc3ZnIHtcXG4gIHdpZHRoOiAxZW07XFxuICBoZWlnaHQ6IDFlbTtcXG4gIGZpbGw6IGN1cnJlbnRDb2xvcjtcXG59XFxuYm9keSxcXG5wcmUsXFxuZm9ybSxcXG5pbnB1dCxcXG5wIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuYm9keSB7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG59XFxuYm9keSxcXG5odG1sIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbn1cXG4uZ193cmFwIHtcXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbn1cXG4uZ19yb3cge1xcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcbiAgcGFkZGluZy1yaWdodDogMXJlbTtcXG59XFxuLnJlYWN0LXBhZ2Uge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG4uZ19ociB7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcXG59XFxuLmdfaHJfdCB7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2RkZDtcXG59XFxuLmdfZWxsIHtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxufVxcbi8qIHRpcHMgKi9cXG4uZ190aXBbZGF0YS10aXRsZV0ge1xcbiAgdGV4dC1pbmRlbnQ6IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG59XFxuLmdfdGlwW2RhdGEtdGl0bGVdOjpiZWZvcmUsXFxuLmdfdGlwW2RhdGEtdGl0bGVdOjphZnRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiA1MCU7XFxuICAtbXMtcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIHotaW5kZXg6IDEwMDtcXG59XFxuLmdfdGlwW2RhdGEtdGl0bGVdOjpiZWZvcmUge1xcbiAgY29udGVudDogYXR0cihkYXRhLXRpdGxlKTtcXG4gIHRvcDogLTQxcHg7XFxuICBtYXgtd2lkdGg6IDkwdnc7XFxuICBwYWRkaW5nOiA2cHggMTBweDtcXG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM3M2M0MjtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcbi5nX3RpcFtkYXRhLXRpdGxlXTo6YWZ0ZXIge1xcbiAgY29udGVudDogJyc7XFxuICB3aWR0aDogMDtcXG4gIGhlaWdodDogMDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBib3JkZXI6IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci10b3AtY29sb3I6ICMzNzNjNDI7XFxuICB0b3A6IC0xMnB4O1xcbn1cXG4uZ190aXBbZGF0YS10aXRsZV06aG92ZXI6OmJlZm9yZSxcXG4uZ190aXBbZGF0YS10aXRsZV06aG92ZXI6OmFmdGVyLFxcbi5nX3RpcFtkYXRhLXRpdGxlXTpmb2N1czo6YmVmb3JlLFxcbi5nX3RpcFtkYXRhLXRpdGxlXTpmb2N1czo6YWZ0ZXIge1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDAuMXMgMC4xcztcXG4gIHRyYW5zaXRpb246IHZpc2liaWxpdHkgMC4xcyAwLjFzO1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuLmdfdGlwW2RhdGEtdGl0bGVdOmhvdmVyIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcbnNlbGVjdCB7XFxuICBmb250LXNpemU6IDAuNzVyZW07XFxuICBoZWlnaHQ6IDEuNXJlbTtcXG4gIGJvcmRlci1jb2xvcjogIzAwMDAwMDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vbm9kZV9tb2R1bGVzL3NhY3NzL2xlc3MvU0FDU1MubGVzc1wiLFwid2VicGFjazovLy4vbm9kZV9tb2R1bGVzL3NhY3NzL2luZGV4LmNzc1wiLFwid2VicGFjazovLy4vc3JjL3VpL2luZGV4Lmxlc3NcIixcIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9zYWNzcy9sZXNzL0hlbHBlcnMubGVzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxnQkFBUztBQ0FUO0VBQUssbUJBQUE7QUNHTDtBREZBO0VBQU0scUJBQUE7QUNLTjtBREpBO0VBQU0sdUJBQUE7QUNPTjtBRE5BO0VBQUksU0FBQTtBQ1NKO0FEUkE7RUFBSyw2QkFBQTtBQ1dMO0FEVkE7RUFBSSxZQUFBO0FDYUo7QURaQTtFQUFLLGdCQUFBO0FDZUw7QURkQTtFQUFTLG1CQUFBO0FDaUJUO0FEaEJBO0VBQU0sc0JBQUE7QUNtQk47QURsQkE7RUFBUSxzQkFBQTtBQ3FCUjtBRHBCQTtFQUFRLHNCQUFBO0FDdUJSO0FEdEJBO0VBQU8sV0FBQTtBQ3lCUDtBRHhCQTtFQUFPLFdBQUE7QUMyQlA7QUQxQkE7RUFBSSxXQUFBO0FDNkJKO0FENUJBO0VBQUksZUFBQTtBQytCSjtBRDlCQTtFQUFJLGNBQUE7QUNpQ0o7QURoQ0E7RUFBSSxhQUFBO0FDbUNKO0FEbENBO0VBQUksZUFBQTtBQ3FDSjtBRHBDQTtFQUFLLHFCQUFBO0FDdUNMO0FEdENBO0VBQUssb0JBQUE7QUN5Q0w7QUR4Q0E7RUFBSSxhQUFBO0FDMkNKO0FEMUNBO0VBQUksY0FBQTtBQzZDSjtBRDVDQTtFQUFLLG1CQUFBO0FDK0NMO0FEOUNBO0VBQUksT0FBQTtFQUFPLFlBQUE7QUNrRFg7QURqREE7RUFBSSxVQUFBO0FDb0RKO0FEbkRBO0VBQUssc0JBQUE7QUNzREw7QURyREE7RUFBSyxtQkFBQTtBQ3dETDtBRHZEQTtFQUFJLGFBQUE7QUMwREo7QUR6REE7RUFBSSxXQUFBO0FDNERKO0FEM0RBO0VBQUksWUFBQTtBQzhESjtBRDdEQTtFQUFLLFlBQUE7QUNnRUw7QUQvREE7RUFBSyxjQUFBO0FDa0VMO0FEakVBO0VBQUssa0JBQUE7QUNvRUw7QURuRUE7RUFBSyxrQkFBQTtBQ3NFTDtBRHJFQTtFQUFNLHdCQUFBO0VBQXdCLHlCQUFBO0FDeUU5QjtBRHhFQTtFQUFPLGdCQUFBO0FDMkVQO0FEMUVBO0VBQU8sZ0JBQUE7QUM2RVA7QUQ1RUE7RUFBTyxnQkFBQTtBQytFUDtBRDlFQTtFQUFPLGdCQUFBO0FDaUZQO0FEaEZBO0VBQU8sZ0JBQUE7QUNtRlA7QURsRkE7RUFBTyxnQkFBQTtBQ3FGUDtBRHBGQTtFQUFPLGdCQUFBO0FDdUZQO0FEdEZBO0VBQU8sZ0JBQUE7QUN5RlA7QUR4RkE7RUFBTyxnQkFBQTtBQzJGUDtBRDFGQTtFQUFLLGdCQUFBO0FDNkZMO0FENUZBO0VBQUssZUFBQTtBQytGTDtBRDlGQTtFQUFRLFlBQUE7QUNpR1I7QURoR0E7RUFBSyx1QkFBQTtBQ21HTDtBRGxHQTtFQUFNLHlCQUFBO0FDcUdOO0FEcEdBO0VBQU0sNkJBQUE7QUN1R047QUR0R0E7RUFBTSw4QkFBQTtBQ3lHTjtBRHhHQTtFQUFJLE9BQUE7QUMyR0o7QUQxR0E7RUFBUSxVQUFBO0FDNkdSO0FENUdBO0VBQU8sU0FBQTtBQytHUDtBRDlHQTtFQUFLLGNBQUE7QUNpSEw7QURoSEE7RUFBUSxnQkFBQTtBQ21IUjtBRGxIQTtFQUFRLGdCQUFBO0FDcUhSO0FEcEhBO0VBQVEsZ0JBQUE7QUN1SFI7QUR0SEE7RUFBSyxnQkFBQTtBQ3lITDtBRHhIQTtFQUFJLFNBQUE7QUMySEo7QUQxSEE7RUFBSyxpQkFBQTtBQzZITDtBRDVIQTtFQUFLLGtCQUFBO0FDK0hMO0FEOUhBO0VBQUssZ0JBQUE7QUNpSUw7QURoSUE7RUFBSyxtQkFBQTtBQ21JTDtBRGxJQTtFQUFJLFVBQUE7QUNxSUo7QURwSUE7RUFBSSxjQUFBO0VBQWMsaUNBQUE7QUN3SWxCO0FEdklBO0VBQUksZ0JBQUE7QUMwSUo7QUR6SUE7RUFBSSxVQUFBO0FDNElKO0FEM0lBO0VBQUksa0JBQUE7QUM4SUo7QUQ3SUE7RUFBSyxvQkFBQTtBQ2dKTDtBRC9JQTtFQUFJLGVBQUE7QUNrSko7QURqSkE7RUFBSSxrQkFBQTtBQ29KSjtBRG5KQTtFQUFTLGlCQUFBO0FDc0pUO0FEckpBO0VBQUksUUFBQTtBQ3dKSjtBRHZKQTtFQUFRLFdBQUE7QUMwSlI7QUR6SkE7RUFBSSxNQUFBO0FDNEpKO0FEM0pBO0VBQVEsU0FBQTtBQzhKUjtBRDdKQTtFQUFPLFFBQUE7QUNnS1A7QUQvSkE7RUFBUyxlQUFBO0FDa0tUO0FEaktBO0VBQUssa0JBQUE7QUNvS0w7QURuS0E7RUFBSyxtQkFBQTtBQ3NLTDtBRHJLQTtFQUFLLGdCQUFBO0FDd0tMO0FEdktBO0VBQUssaUJBQUE7QUMwS0w7QUR6S0E7RUFBSyxxQkFBQTtBQzRLTDtBRDNLQTtFQUFLLDBCQUFBO0FDOEtMO0FEN0tBO0VBQUssbUJBQUE7QUNnTEw7QUQvS0E7RUFBSywwQkFBQTtBQ2tMTDtBRGpMQTtFQUFLLHlCQUFBO0FDb0xMO0FEbkxBO0VBQUssb0JBQUE7QUNzTEw7QURyTEE7RUFBSyx5QkFBQTtBQ3dMTDtBRHZMQTtFQUFLLHlCQUFBO0VBQXlCLHNCQUFBO0VBQXNCLHFCQUFBO0VBQXFCLGlCQUFBO0FDNkx6RTtBRDVMQTtFQUFLLHNCQUFBO0FDK0xMO0FEOUxBO0VBQUssbUJBQUE7QUNpTUw7QURoTUE7RUFBSSxrQkFBQTtBQ21NSjtBRGxNQTtFQUFRLFdBQUE7QUNxTVI7QURwTUE7RUFBSyx3QkFBQTtBQ3VNTDtBRHRNQTtFQUFLLG1CQUFBO0FDeU1MO0FEeE1BO0VBQU0scUJBQUE7RUFBcUIscUJBQUE7QUM0TTNCO0FEM01BO0VBQUssVUFBQTtBQzhNTDtBQUNBOzs7Ozs7RUFNRTtBQUNGOzs7OztFQUtFO0FBQ0YsU0FBUztBQUNULGNBQWM7QUFDZCxjQUFjO0FBQ2Qsc0JBQXNCO0FEalVyQjtFRGNLLHNCQUFBO0FFc1ROO0FEcFVDO0VEY0ssbUJBQUE7QUV5VE47QUR2VUM7RURjSyxrQkFBQTtBRTRUTjtBRDFVQztFRGNLLG1CQUFBO0FFK1ROO0FEN1VDO0VEY0ssZ0JBQUE7QUVrVU47QURoVkM7RURjSyx5QkFBQTtBRXFVTjtBRG5WQztFRGNLLHNCQUFBO0FFd1VOO0FEdFZDO0VEY0sscUJBQUE7QUUyVU47QUR6VkM7RURjSyxzQkFBQTtBRThVTjtBRDVWQztFRGNLLG1CQUFBO0FFaVZOO0FEL1ZDO0VEY0ssd0JBQUE7QUVvVk47QURsV0M7RURjSyxxQkFBQTtBRXVWTjtBRHJXQztFRGNLLG9CQUFBO0FFMFZOO0FEeFdDO0VEY0sscUJBQUE7QUU2Vk47QUQzV0M7RURjSyxrQkFBQTtBRWdXTjtBRDlXQztFRGNLLHVCQUFBO0FFbVdOO0FEalhDO0VEY0ssb0JBQUE7QUVzV047QURwWEM7RURjSyxtQkFBQTtBRXlXTjtBRHZYQztFRGNLLG9CQUFBO0FFNFdOO0FEMVhDO0VEY0ssaUJBQUE7QUUrV047QUQ3WEM7RURjSyxvQkFBQTtBRWtYTjtBRGhZQztFRGNLLG1CQUFBO0FFcVhOO0FEbllDO0VEY0ssb0JBQUE7QUV3WE47QUR0WUM7RURjSyxpQkFBQTtBRTJYTjtBRHpZQztFRGNLLHNCQUFBO0FFOFhOO0FENVlDO0VEY0sscUJBQUE7QUVpWU47QUQvWUM7RURjSyxzQkFBQTtBRW9ZTjtBRGxaQztFRGNLLG1CQUFBO0FFdVlOO0FEclpDO0VEY0ssdUJBQUE7QUUwWU47QUR4WkM7RURjSyxzQkFBQTtBRTZZTjtBRDNaQztFRGNLLHVCQUFBO0FFZ1pOO0FEOVpDO0VEY0ssb0JBQUE7QUVtWk47QURqYUM7RURjSyxxQkFBQTtBRXNaTjtBRHBhQztFRGNLLG9CQUFBO0FFeVpOO0FEdmFDO0VEY0sscUJBQUE7QUU0Wk47QUQxYUM7RURjSyxrQkFBQTtBRStaTjtBRDdhQztFRGtDSyxnQkFBQTtBRThZTjtBRGhiQztFRGtDSyxnQkFBQTtBRWlaTjtBRG5iQztFRGNLLGtCQUFBO0FFd2FOO0FEdGJDO0VEY0ssbUJBQUE7QUUyYU47QUR6YkM7RURjSyxlQUFBO0FFOGFOO0FENWJDO0VEY0ssa0JBQUE7QUVpYk47QUQvYkM7RURjSyxpQkFBQTtBRW9iTjtBRGxjQztFRGNLLG9CQUFBO0FFdWJOO0FEcmNDO0VEY0ssbUJBQUE7QUUwYk47QUR4Y0M7RURjSyxrQkFBQTtBRTZiTjtBRDNjQztFRGNLLGtCQUFBO0FFZ2NOO0FBcmJBO0VBQU0sY0FBQTtBQXdiTjtBQXRiQTs7RUFDRSxXQUFBO0FBeWJGO0FBdGJBOztFQUNFLFdBQUE7QUF5YkY7QUF0YkE7O0VBQ0UsV0FBQTtBQXliRjtBQXRiQTs7RUFDRSxXQUFBO0FBeWJGO0FBdGJBOztFQUNFLGNBQUE7QUF5YkY7QUF0YkE7RUFDRSwwQkFBQTtBQXdiRjtBQUNBLFdBQVc7QUFyYlg7RUFDRSxhQUFBO0VBQ0EsY0FBQTtFQUNBLHdCQUFBO0FBdWJGO0FBcGJBO0VBQ0UsZUFBQTtBQXNiRjtBQW5iQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFxYkY7QUFsYkE7Ozs7O0VBQ0UsU0FBQTtBQXdiRjtBQXJiQTtFQUNFLHVCQUFBO0FBdWJGO0FBcGJBOztFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FBdWJGO0FBcGJBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBQXNiRjtBQW5iQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUFxYkY7QUFsYkE7RUFDRSxxQkFBQTtBQW9iRjtBQWpiQTtFQUNFLDZCQUFBO0FBbWJGO0FBaGJBO0VBQ0UsMEJBQUE7QUFrYkY7QUEvYUE7RUMvRkUsbUJBQUE7RUFBcUIsZ0JBQUE7RUFBa0IsdUJBQUE7QURtaEJ6QztBQUNBLFNBQVM7QUFoYlQ7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQWtiRjtBQS9hQTs7RUFFRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSx3QkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUNBQUE7RUFDQSwrQkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBaWJGO0FBOWFBO0VBQ0UseUJBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFnYkY7QUE3YUE7RUFDRSxXQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0FBK2FGO0FBNWFBOzs7O0VBSUUsd0NBQUE7RUFDQSxnQ0FBQTtFQUNBLG1CQUFBO0FBOGFGO0FBM2FBO0VBQ0UsYUFBQTtBQTZhRjtBQTFhQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUE0YUZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGNoYXJzZXQgXFxcInV0Zi04XFxcIjtcXG4vKipcXG4gKiAjU0FDU1MoZm9udC1zaXplOyBmczsgMTIsIDE2OyAxcHgpO1xcbiAqIEBwcm9wOiDlsZ7mgKflkI1cXG4gKiBAbmFtZTog57yp5YaZ5ZCNXFxuICogQGxpc3Q6IOWAvOWIl+ihqFxcbiAqIEB1bml0OiDljZXkvY3mjaLnrpfooajovr7lvI8sIOm7mOiupOS4ujFweCwg5oOz6KaBIHJlbSDloavlhpkgMS8xNioxcmVtXFxuICovXFxuI1NBQ1NTKEBwcm9wOyBAbmFtZTsgQGxpc3Q7IEB1bml0KSB3aGVuIG5vdChAbGlzdCA9IGZhbHNlKSB7XFxuICBAZXNjYXBlUHJvcDogZXNjYXBlKEBwcm9wKTtcXG4gIEBlc2NhcGVOYW1lOiBlc2NhcGUoQG5hbWUpO1xcbiAgLmxvb3AoQGkpIHdoZW4gKEBpIDwgbGVuZ3RoKEBsaXN0KSArIDEpIHtcXG4gICAgQGl0ZW06IGV4dHJhY3QoQGxpc3QsIEBpKTtcXG4gICAgLkB7ZXNjYXBlTmFtZX1Ae2l0ZW19IHtcXG4gICAgICBAe2VzY2FwZVByb3B9OiBAaXRlbSAqIEB1bml0O1xcbiAgICB9XFxuICAgIC5sb29wKEBpKzEpO1xcbiAgfVxcblxcbiAgLmxvb3AoMSk7XFxufVxcblxcbi8qKlxcbiAqICNTQUNTUyhmb250LXdlaWdodDsgZnc7IDQwMCwgNzAwKTtcXG4gKiBAcHJvcDog5bGe5oCn5ZCNXFxuICogQG5hbWU6IOe8qeWGmeWQjVxcbiAqIEBsaXN0OiDlgLzliJfooahcXG4gKi9cXG4jU0FDU1MoQHByb3A7IEBuYW1lOyBAbGlzdDspIHdoZW4gbm90KEBsaXN0ID1mYWxzZSkge1xcbiAgQGVzY2FwZVByb3A6IGVzY2FwZShAcHJvcCk7XFxuICBAZXNjYXBlTmFtZTogZXNjYXBlKEBuYW1lKTtcXG4gIC5sb29wKEBpKSB3aGVuIChAaSA8IGxlbmd0aChAbGlzdCkgKyAxKSB7XFxuICAgIEBpdGVtOiBleHRyYWN0KEBsaXN0LCBAaSk7XFxuICAgIC5Ae2VzY2FwZU5hbWV9QHtpdGVtfSB7XFxuICAgICAgQHtlc2NhcGVQcm9wfTogQGl0ZW07XFxuICAgIH1cXG4gICAgLmxvb3AoQGkrMSk7XFxuICB9XFxuICAubG9vcCgxKTtcXG59XFxuXCIsXCIuYWlje2FsaWduLWl0ZW1zOmNlbnRlcn1cXG4uYWlmZXthbGlnbi1pdGVtczpmbGV4LWVuZH1cXG4uYWlmc3thbGlnbi1pdGVtczpmbGV4LXN0YXJ0fVxcbi5iMHtib3R0b206MH1cXG4uYmN0e2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnR9XFxuLmJue2JvcmRlcjpub25lfVxcbi5icjB7Ym9yZGVyLXJhZGl1czowfVxcbi5icjEwMFxcXFwle2JvcmRlci1yYWRpdXM6MTAwJX1cXG4uYnNiYntib3gtc2l6aW5nOmJvcmRlci1ib3h9XFxuLmJjX2ZmZntiYWNrZ3JvdW5kLWNvbG9yOiNmZmZ9XFxuLmJjXzAwMHtiYWNrZ3JvdW5kLWNvbG9yOiMwMDB9XFxuLmNfMDAwe2NvbG9yOiMwMDB9XFxuLmNfZmZme2NvbG9yOiNmZmZ9XFxuLmNie2NsZWFyOmJvdGh9XFxuLmNwe2N1cnNvcjpwb2ludGVyfVxcbi5kYntkaXNwbGF5OmJsb2NrfVxcbi5kZntkaXNwbGF5OmZsZXh9XFxuLmRpe2Rpc3BsYXk6aW5saW5lfVxcbi5kaWJ7ZGlzcGxheTppbmxpbmUtYmxvY2t9XFxuLmRpZntkaXNwbGF5OmlubGluZS1mbGV4fVxcbi5kbntkaXNwbGF5Om5vbmV9XFxuLmR0e2Rpc3BsYXk6dGFibGV9XFxuLmR0Y3tkaXNwbGF5OnRhYmxlLWNlbGx9XFxuLmYxe2ZsZXg6MTttaW4td2lkdGg6MH1cXG4uZmF7ZmxleDphdXRvfVxcbi5mZGN7ZmxleC1kaXJlY3Rpb246Y29sdW1ufVxcbi5mZHJ7ZmxleC1kaXJlY3Rpb246cm93fVxcbi5maXtmb250OmluaGVyaXR9XFxuLmZse2Zsb2F0OmxlZnR9XFxuLmZye2Zsb2F0OnJpZ2h0fVxcbi5mczB7Zm9udC1zaXplOjB9XFxuLmZzMXtmbGV4LXNocmluazoxfVxcbi5mc2l7Zm9udC1zdHlsZTppdGFsaWN9XFxuLmZzbntmb250LXN0eWxlOm5vcm1hbH1cXG4uZnZzY3tmb250LXZhcmlhbnQ6c21hbGwtY2Fwczt0ZXh0LXRyYW5zZm9ybTpsb3dlcmNhc2V9XFxuLmZ3MTAwe2ZvbnQtd2VpZ2h0OjEwMH1cXG4uZncyMDB7Zm9udC13ZWlnaHQ6MjAwfVxcbi5mdzMwMHtmb250LXdlaWdodDozMDB9XFxuLmZ3NDAwe2ZvbnQtd2VpZ2h0OjQwMH1cXG4uZnc1MDB7Zm9udC13ZWlnaHQ6NTAwfVxcbi5mdzYwMHtmb250LXdlaWdodDo2MDB9XFxuLmZ3NzAwe2ZvbnQtd2VpZ2h0OjcwMH1cXG4uZnc4MDB7Zm9udC13ZWlnaHQ6ODAwfVxcbi5mdzkwMHtmb250LXdlaWdodDo5MDB9XFxuLmZ3bntmb250LXdlaWdodDo0MDB9XFxuLmZ3d3tmbGV4LXdyYXA6d3JhcH1cXG4uaDEwMFxcXFwle2hlaWdodDoxMDAlfVxcbi5qY2N7anVzdGlmeS1jb250ZW50OmNlbnRlcn1cXG4uamNmZXtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmR9XFxuLmpjc2F7anVzdGlmeS1jb250ZW50OnNwYWNlLWFyb3VuZH1cXG4uamNzYntqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2Vlbn1cXG4ubDB7bGVmdDowfVxcbi5sMTAwXFxcXCV7bGVmdDoxMDAlfVxcbi5sNTBcXFxcJXtsZWZ0OjUwJX1cXG4ubGgxe2xpbmUtaGVpZ2h0OjF9XFxuLmxoMVxcXFwuMntsaW5lLWhlaWdodDoxLjJ9XFxuLmxoMVxcXFwuNXtsaW5lLWhlaWdodDoxLjV9XFxuLmxoMVxcXFwuOHtsaW5lLWhlaWdodDoxLjh9XFxuLmxzbntsaXN0LXN0eWxlOm5vbmV9XFxuLm0we21hcmdpbjowfVxcbi5tbGF7bWFyZ2luLWxlZnQ6YXV0b31cXG4ubXJhe21hcmdpbi1yaWdodDphdXRvfVxcbi5tdGF7bWFyZ2luLXRvcDphdXRvfVxcbi5tYmF7bWFyZ2luLWJvdHRvbTphdXRvfVxcbi5vMHtvcGFjaXR5OjB9XFxuLm9he292ZXJmbG93OmF1dG87LXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6dG91Y2h9XFxuLm9oe292ZXJmbG93OmhpZGRlbn1cXG4ucDB7cGFkZGluZzowfVxcbi5wYXtwb3NpdGlvbjphYnNvbHV0ZX1cXG4ucGVue3BvaW50ZXItZXZlbnRzOm5vbmV9XFxuLnBme3Bvc2l0aW9uOmZpeGVkfVxcbi5wcntwb3NpdGlvbjpyZWxhdGl2ZX1cXG4ucHQxMDBcXFxcJXtwYWRkaW5nLXRvcDoxMDAlfVxcbi5yMHtyaWdodDowfVxcbi5yMTAwXFxcXCV7cmlnaHQ6MTAwJX1cXG4udDB7dG9wOjB9XFxuLnQxMDBcXFxcJXt0b3A6MTAwJX1cXG4udDUwXFxcXCV7dG9wOjUwJX1cXG4ubXcxMDBcXFxcJXttYXgtd2lkdGg6MTAwJX1cXG4udGFje3RleHQtYWxpZ246Y2VudGVyfVxcbi50YWp7dGV4dC1hbGlnbjpqdXN0aWZ5fVxcbi50YWx7dGV4dC1hbGlnbjpsZWZ0fVxcbi50YXJ7dGV4dC1hbGlnbjpyaWdodH1cXG4udGRue3RleHQtZGVjb3JhdGlvbjpub25lfVxcbi50ZHV7dGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZX1cXG4udGxme3RhYmxlLWxheW91dDpmaXhlZH1cXG4udHRje3RleHQtdHJhbnNmb3JtOmNhcGl0YWxpemV9XFxuLnR0bHt0ZXh0LXRyYW5zZm9ybTpsb3dlcmNhc2V9XFxuLnR0bnt0ZXh0LXRyYW5zZm9ybTpub25lfVxcbi50dHV7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlfVxcbi51c257LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lfVxcbi52YW17dmVydGljYWwtYWxpZ246bWlkZGxlfVxcbi52YXR7dmVydGljYWwtYWxpZ246dG9wfVxcbi52aHt2aXNpYmlsaXR5OmhpZGRlbn1cXG4udzEwMFxcXFwle3dpZHRoOjEwMCV9XFxuLndhbnstd2Via2l0LWFwcGVhcmFuY2U6bm9uZX1cXG4ud3Nue3doaXRlLXNwYWNlOm5vd3JhcH1cXG4ud3did3t3b3JkLXdyYXA6YnJlYWstd29yZDt3b3JkLWJyZWFrOmJyZWFrLWFsbH1cXG4uemkxe3otaW5kZXg6MX1cIixcIkBpbXBvcnQgJ35zYWNzcyc7XFxuQGltcG9ydCAnfnNhY3NzL2xlc3MvU0FDU1MubGVzcyc7XFxuQGltcG9ydCAnfnNhY3NzL2xlc3MvSGVscGVycy5sZXNzJztcXG5cXG5cXG5AcmVtOiAxLzE2cmVtO1xcblxcbkBtYXJnaW5zOiAtMSwgNCwgOCwgMTIsIDE2O1xcbiNTQUNTUyhtYXJnaW4tdG9wOyBtdDsgQG1hcmdpbnM7IEByZW0pO1xcbiNTQUNTUyhtYXJnaW4tYm90dG9tOyBtYjsgQG1hcmdpbnM7IEByZW0pO1xcbiNTQUNTUyhtYXJnaW4tcmlnaHQ7IG1yOyBAbWFyZ2luczsgQHJlbSk7XFxuI1NBQ1NTKG1hcmdpbi1sZWZ0OyBtbDsgQG1hcmdpbnM7IEByZW0pO1xcblxcbkBwYWRkaW5nczogNCwgOCwgMTIsIDE2O1xcbiNTQUNTUyhwYWRkaW5nLXRvcDsgcHQ7IEBwYWRkaW5nczsgQHJlbSk7XFxuI1NBQ1NTKHBhZGRpbmctcmlnaHQ7IHByOyBAcGFkZGluZ3M7IEByZW0pO1xcbiNTQUNTUyhwYWRkaW5nLWJvdHRvbTsgcGI7IEBwYWRkaW5nczsgQHJlbSk7XFxuI1NBQ1NTKHBhZGRpbmctbGVmdDsgcGw7IEBwYWRkaW5nczsgQHJlbSk7XFxuXFxuI1NBQ1NTKGZvbnQtd2VpZ2h0OyBmdzsgNjAwKTtcXG4jU0FDU1MoZm9udC13ZWlnaHQ7IGZ3OyA2MDApO1xcbiNTQUNTUyhmb250LXNpemU7IGZzOyAxMiwgMTQsIDE2LCAyMDsgMS8xNnJlbSk7XFxuI1NBQ1NTKGxpbmUtaGVpZ2h0OyBsaDsgMTYsIDIwLCAyNDsgMS8xNnJlbSk7XFxuI1NBQ1NTKGJvcmRlci1yYWRpdXM7IGJyOyAyLCA0OyAxcHgpO1xcblxcbi5oMjR7IGhlaWdodDogMS41cmVtOyB9XFxuXFxuLmNcXFxcOmwsIC5jXFxcXDpsXFxcXDpoOmhvdmVyIHtcXG4gIGNvbG9yOiAjMTExO1xcbn1cXG5cXG4uY1xcXFw6bSwgLmNcXFxcOm1cXFxcOmg6aG92ZXIge1xcbiAgY29sb3I6ICMzMzM7XFxufVxcblxcbi5jXFxcXDpzLCAuY1xcXFw6c1xcXFw6aDpob3ZlciB7XFxuICBjb2xvcjogIzY2NjtcXG59XFxuXFxuLmNcXFxcOnhzLCAuY1xcXFw6eHNcXFxcOmg6aG92ZXIge1xcbiAgY29sb3I6ICM5OTk7XFxufVxcblxcbi5jXFxcXDpwcmltYXJ5LCAuY1xcXFw6cHJpbWFyeVxcXFw6aDpob3ZlciB7XFxuICBjb2xvcjogIzRjNWZlMjtcXG59XFxuXFxuLnRkMjAwIHtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDIwMG1zO1xcbn1cXG5cXG4vKiBvdGhlcnMgKi9cXG4qIHtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIHRleHQtZGVjb3JhdGlvbjogaW5oZXJpdDtcXG59XFxuXFxucm9vdCB7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbnN2ZyB7XFxuICB3aWR0aDogMWVtO1xcbiAgaGVpZ2h0OiAxZW07XFxuICBmaWxsOiBjdXJyZW50Q29sb3I7XFxufVxcblxcbmJvZHksIHByZSwgZm9ybSwgaW5wdXQsIHAge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbn1cXG5cXG5ib2R5LCBodG1sIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbn1cXG5cXG4uZ193cmFwIHtcXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbn1cXG5cXG4uZ19yb3cge1xcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcbiAgcGFkZGluZy1yaWdodDogMXJlbTtcXG59XFxuXFxuLnJlYWN0LXBhZ2Uge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4uZ19ociB7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcXG59XFxuXFxuLmdfaHJfdCB7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2RkZDtcXG59XFxuXFxuLmdfZWxsIHtcXG4gICNFbGxpcHNpcygpO1xcbn1cXG5cXG4vKiB0aXBzICovXFxuLmdfdGlwW2RhdGEtdGl0bGVdIHtcXG4gIHRleHQtaW5kZW50OiAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxufVxcblxcbi5nX3RpcFtkYXRhLXRpdGxlXTo6YmVmb3JlLFxcbi5nX3RpcFtkYXRhLXRpdGxlXTo6YWZ0ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogNTAlO1xcbiAgLW1zLXBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICB6LWluZGV4OiAxMDA7XFxufVxcblxcbi5nX3RpcFtkYXRhLXRpdGxlXTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS10aXRsZSk7XFxuICB0b3A6IC00MXB4O1xcbiAgbWF4LXdpZHRoOiA5MHZ3O1xcbiAgcGFkZGluZzogNnB4IDEwcHg7XFxuICBsaW5lLWhlaWdodDogMThweDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzNzNjNDI7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgY29sb3I6ICNmZmY7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG4uZ190aXBbZGF0YS10aXRsZV06OmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgd2lkdGg6IDA7XFxuICBoZWlnaHQ6IDA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYm9yZGVyOiA2cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItdG9wLWNvbG9yOiAjMzczYzQyO1xcbiAgdG9wOiAtMTJweDtcXG59XFxuXFxuLmdfdGlwW2RhdGEtdGl0bGVdOmhvdmVyOjpiZWZvcmUsXFxuLmdfdGlwW2RhdGEtdGl0bGVdOmhvdmVyOjphZnRlcixcXG4uZ190aXBbZGF0YS10aXRsZV06Zm9jdXM6OmJlZm9yZSxcXG4uZ190aXBbZGF0YS10aXRsZV06Zm9jdXM6OmFmdGVyIHtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAuMXMgLjFzO1xcbiAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAuMXMgLjFzO1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuXFxuLmdfdGlwW2RhdGEtdGl0bGVdOmhvdmVyIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbnNlbGVjdHtcXG4gIGZvbnQtc2l6ZTogMTIvMTYqMXJlbTtcXG4gIGhlaWdodDogMjQvMTYqMXJlbTtcXG4gIGJvcmRlci1jb2xvcjogIzAwMDAwMDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG59XCIsXCIvKiDmuIXpmaTmta7liqggKi9cXG4jQ2xlYXJmaXgoKXtcXG4gICY6YWZ0ZXJ7XFxuICAgIGRpc3BsYXk6IHRhYmxlOyBjb250ZW50OiAnJzsgY2xlYXI6IGJvdGg7XFxuICB9XFxufVxcblxcbi8qIOaWh+Wtl+i2heWHuuS4gOihjOeCueeCueeCuSAqL1xcbiNFbGxpcHNpcygpe1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgb3ZlcmZsb3c6IGhpZGRlbjsgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxufVxcblxcbi8qIOWkmuihjOaWh+acrOi2heWHuueCueeCueeCuSAqL1xcbiNFbGxpcHNpcy1tdWx0aXBsZSgpe1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7IG92ZXJmbG93OiBoaWRkZW47IHdvcmQtd3JhcDogYnJlYWstd29yZDsgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcXG59XFxuXFxuLyog55So6KGo5qC855qE5pa55byP5pKR5ruh5rWu5Yqo5LmL5ZCO55qE5Ymp5L2Z56m66Ze0ICovXFxuI0NlbGwoKXtcXG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7ICpkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IHdpZHRoOiAyMDAwcHg7ICp3aWR0aDogYXV0bztcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W10sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIlwiLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W10sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIlwiLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciAmJiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdKTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiZnVuY3Rpb24gZGVlcEZyZWV6ZShvYmopIHtcbiAgICBpZiAob2JqIGluc3RhbmNlb2YgTWFwKSB7XG4gICAgICAgIG9iai5jbGVhciA9IG9iai5kZWxldGUgPSBvYmouc2V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdtYXAgaXMgcmVhZC1vbmx5Jyk7XG4gICAgICAgIH07XG4gICAgfSBlbHNlIGlmIChvYmogaW5zdGFuY2VvZiBTZXQpIHtcbiAgICAgICAgb2JqLmFkZCA9IG9iai5jbGVhciA9IG9iai5kZWxldGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldCBpcyByZWFkLW9ubHknKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBGcmVlemUgc2VsZlxuICAgIE9iamVjdC5mcmVlemUob2JqKTtcblxuICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKG9iaikuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICB2YXIgcHJvcCA9IG9ialtuYW1lXTtcblxuICAgICAgICAvLyBGcmVlemUgcHJvcCBpZiBpdCBpcyBhbiBvYmplY3RcbiAgICAgICAgaWYgKHR5cGVvZiBwcm9wID09ICdvYmplY3QnICYmICFPYmplY3QuaXNGcm96ZW4ocHJvcCkpIHtcbiAgICAgICAgICAgIGRlZXBGcmVlemUocHJvcCk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBvYmo7XG59XG5cbnZhciBkZWVwRnJlZXplRXM2ID0gZGVlcEZyZWV6ZTtcbnZhciBfZGVmYXVsdCA9IGRlZXBGcmVlemU7XG5kZWVwRnJlZXplRXM2LmRlZmF1bHQgPSBfZGVmYXVsdDtcblxuLyoqIEBpbXBsZW1lbnRzIENhbGxiYWNrUmVzcG9uc2UgKi9cbmNsYXNzIFJlc3BvbnNlIHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7Q29tcGlsZWRNb2RlfSBtb2RlXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihtb2RlKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmaW5lZFxuICAgIGlmIChtb2RlLmRhdGEgPT09IHVuZGVmaW5lZCkgbW9kZS5kYXRhID0ge307XG5cbiAgICB0aGlzLmRhdGEgPSBtb2RlLmRhdGE7XG4gICAgdGhpcy5pc01hdGNoSWdub3JlZCA9IGZhbHNlO1xuICB9XG5cbiAgaWdub3JlTWF0Y2goKSB7XG4gICAgdGhpcy5pc01hdGNoSWdub3JlZCA9IHRydWU7XG4gIH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGVzY2FwZUhUTUwodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlXG4gICAgLnJlcGxhY2UoLyYvZywgJyZhbXA7JylcbiAgICAucmVwbGFjZSgvPC9nLCAnJmx0OycpXG4gICAgLnJlcGxhY2UoLz4vZywgJyZndDsnKVxuICAgIC5yZXBsYWNlKC9cIi9nLCAnJnF1b3Q7JylcbiAgICAucmVwbGFjZSgvJy9nLCAnJiN4Mjc7Jyk7XG59XG5cbi8qKlxuICogcGVyZm9ybXMgYSBzaGFsbG93IG1lcmdlIG9mIG11bHRpcGxlIG9iamVjdHMgaW50byBvbmVcbiAqXG4gKiBAdGVtcGxhdGUgVFxuICogQHBhcmFtIHtUfSBvcmlnaW5hbFxuICogQHBhcmFtIHtSZWNvcmQ8c3RyaW5nLGFueT5bXX0gb2JqZWN0c1xuICogQHJldHVybnMge1R9IGEgc2luZ2xlIG5ldyBvYmplY3RcbiAqL1xuZnVuY3Rpb24gaW5oZXJpdChvcmlnaW5hbCwgLi4ub2JqZWN0cykge1xuICAvKiogQHR5cGUgUmVjb3JkPHN0cmluZyxhbnk+ICovXG4gIGNvbnN0IHJlc3VsdCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cbiAgZm9yIChjb25zdCBrZXkgaW4gb3JpZ2luYWwpIHtcbiAgICByZXN1bHRba2V5XSA9IG9yaWdpbmFsW2tleV07XG4gIH1cbiAgb2JqZWN0cy5mb3JFYWNoKGZ1bmN0aW9uKG9iaikge1xuICAgIGZvciAoY29uc3Qga2V5IGluIG9iaikge1xuICAgICAgcmVzdWx0W2tleV0gPSBvYmpba2V5XTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gLyoqIEB0eXBlIHtUfSAqLyAocmVzdWx0KTtcbn1cblxuLyoqXG4gKiBAdHlwZWRlZiB7b2JqZWN0fSBSZW5kZXJlclxuICogQHByb3BlcnR5IHsodGV4dDogc3RyaW5nKSA9PiB2b2lkfSBhZGRUZXh0XG4gKiBAcHJvcGVydHkgeyhub2RlOiBOb2RlKSA9PiB2b2lkfSBvcGVuTm9kZVxuICogQHByb3BlcnR5IHsobm9kZTogTm9kZSkgPT4gdm9pZH0gY2xvc2VOb2RlXG4gKiBAcHJvcGVydHkgeygpID0+IHN0cmluZ30gdmFsdWVcbiAqL1xuXG4vKiogQHR5cGVkZWYge3traW5kPzogc3RyaW5nLCBzdWJsYW5ndWFnZT86IGJvb2xlYW59fSBOb2RlICovXG4vKiogQHR5cGVkZWYge3t3YWxrOiAocjogUmVuZGVyZXIpID0+IHZvaWR9fSBUcmVlICovXG4vKiogKi9cblxuY29uc3QgU1BBTl9DTE9TRSA9ICc8L3NwYW4+JztcblxuLyoqXG4gKiBEZXRlcm1pbmVzIGlmIGEgbm9kZSBuZWVkcyB0byBiZSB3cmFwcGVkIGluIDxzcGFuPlxuICpcbiAqIEBwYXJhbSB7Tm9kZX0gbm9kZSAqL1xuY29uc3QgZW1pdHNXcmFwcGluZ1RhZ3MgPSAobm9kZSkgPT4ge1xuICByZXR1cm4gISFub2RlLmtpbmQ7XG59O1xuXG4vKiogQHR5cGUge1JlbmRlcmVyfSAqL1xuY2xhc3MgSFRNTFJlbmRlcmVyIHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXcgSFRNTFJlbmRlcmVyXG4gICAqXG4gICAqIEBwYXJhbSB7VHJlZX0gcGFyc2VUcmVlIC0gdGhlIHBhcnNlIHRyZWUgKG11c3Qgc3VwcG9ydCBgd2Fsa2AgQVBJKVxuICAgKiBAcGFyYW0ge3tjbGFzc1ByZWZpeDogc3RyaW5nfX0gb3B0aW9uc1xuICAgKi9cbiAgY29uc3RydWN0b3IocGFyc2VUcmVlLCBvcHRpb25zKSB7XG4gICAgdGhpcy5idWZmZXIgPSBcIlwiO1xuICAgIHRoaXMuY2xhc3NQcmVmaXggPSBvcHRpb25zLmNsYXNzUHJlZml4O1xuICAgIHBhcnNlVHJlZS53YWxrKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgdGV4dHMgdG8gdGhlIG91dHB1dCBzdHJlYW1cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgKi9cbiAgYWRkVGV4dCh0ZXh0KSB7XG4gICAgdGhpcy5idWZmZXIgKz0gZXNjYXBlSFRNTCh0ZXh0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgbm9kZSBvcGVuIHRvIHRoZSBvdXRwdXQgc3RyZWFtIChpZiBuZWVkZWQpXG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZSAqL1xuICBvcGVuTm9kZShub2RlKSB7XG4gICAgaWYgKCFlbWl0c1dyYXBwaW5nVGFncyhub2RlKSkgcmV0dXJuO1xuXG4gICAgbGV0IGNsYXNzTmFtZSA9IG5vZGUua2luZDtcbiAgICBpZiAoIW5vZGUuc3VibGFuZ3VhZ2UpIHtcbiAgICAgIGNsYXNzTmFtZSA9IGAke3RoaXMuY2xhc3NQcmVmaXh9JHtjbGFzc05hbWV9YDtcbiAgICB9XG4gICAgdGhpcy5zcGFuKGNsYXNzTmFtZSk7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIG5vZGUgY2xvc2UgdG8gdGhlIG91dHB1dCBzdHJlYW0gKGlmIG5lZWRlZClcbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlICovXG4gIGNsb3NlTm9kZShub2RlKSB7XG4gICAgaWYgKCFlbWl0c1dyYXBwaW5nVGFncyhub2RlKSkgcmV0dXJuO1xuXG4gICAgdGhpcy5idWZmZXIgKz0gU1BBTl9DTE9TRTtcbiAgfVxuXG4gIC8qKlxuICAgKiByZXR1cm5zIHRoZSBhY2N1bXVsYXRlZCBidWZmZXJcbiAgKi9cbiAgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuYnVmZmVyO1xuICB9XG5cbiAgLy8gaGVscGVyc1xuXG4gIC8qKlxuICAgKiBCdWlsZHMgYSBzcGFuIGVsZW1lbnRcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZSAqL1xuICBzcGFuKGNsYXNzTmFtZSkge1xuICAgIHRoaXMuYnVmZmVyICs9IGA8c3BhbiBjbGFzcz1cIiR7Y2xhc3NOYW1lfVwiPmA7XG4gIH1cbn1cblxuLyoqIEB0eXBlZGVmIHt7a2luZD86IHN0cmluZywgc3VibGFuZ3VhZ2U/OiBib29sZWFuLCBjaGlsZHJlbjogTm9kZVtdfSB8IHN0cmluZ30gTm9kZSAqL1xuLyoqIEB0eXBlZGVmIHt7a2luZD86IHN0cmluZywgc3VibGFuZ3VhZ2U/OiBib29sZWFuLCBjaGlsZHJlbjogTm9kZVtdfSB9IERhdGFOb2RlICovXG4vKiogICovXG5cbmNsYXNzIFRva2VuVHJlZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8qKiBAdHlwZSBEYXRhTm9kZSAqL1xuICAgIHRoaXMucm9vdE5vZGUgPSB7IGNoaWxkcmVuOiBbXSB9O1xuICAgIHRoaXMuc3RhY2sgPSBbdGhpcy5yb290Tm9kZV07XG4gIH1cblxuICBnZXQgdG9wKCkge1xuICAgIHJldHVybiB0aGlzLnN0YWNrW3RoaXMuc3RhY2subGVuZ3RoIC0gMV07XG4gIH1cblxuICBnZXQgcm9vdCgpIHsgcmV0dXJuIHRoaXMucm9vdE5vZGU7IH1cblxuICAvKiogQHBhcmFtIHtOb2RlfSBub2RlICovXG4gIGFkZChub2RlKSB7XG4gICAgdGhpcy50b3AuY2hpbGRyZW4ucHVzaChub2RlKTtcbiAgfVxuXG4gIC8qKiBAcGFyYW0ge3N0cmluZ30ga2luZCAqL1xuICBvcGVuTm9kZShraW5kKSB7XG4gICAgLyoqIEB0eXBlIE5vZGUgKi9cbiAgICBjb25zdCBub2RlID0geyBraW5kLCBjaGlsZHJlbjogW10gfTtcbiAgICB0aGlzLmFkZChub2RlKTtcbiAgICB0aGlzLnN0YWNrLnB1c2gobm9kZSk7XG4gIH1cblxuICBjbG9zZU5vZGUoKSB7XG4gICAgaWYgKHRoaXMuc3RhY2subGVuZ3RoID4gMSkge1xuICAgICAgcmV0dXJuIHRoaXMuc3RhY2sucG9wKCk7XG4gICAgfVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZmluZWRcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgY2xvc2VBbGxOb2RlcygpIHtcbiAgICB3aGlsZSAodGhpcy5jbG9zZU5vZGUoKSk7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHRoaXMucm9vdE5vZGUsIG51bGwsIDQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEB0eXBlZGVmIHsgaW1wb3J0KFwiLi9odG1sX3JlbmRlcmVyXCIpLlJlbmRlcmVyIH0gUmVuZGVyZXJcbiAgICogQHBhcmFtIHtSZW5kZXJlcn0gYnVpbGRlclxuICAgKi9cbiAgd2FsayhidWlsZGVyKSB7XG4gICAgLy8gdGhpcyBkb2VzIG5vdFxuICAgIHJldHVybiB0aGlzLmNvbnN0cnVjdG9yLl93YWxrKGJ1aWxkZXIsIHRoaXMucm9vdE5vZGUpO1xuICAgIC8vIHRoaXMgd29ya3NcbiAgICAvLyByZXR1cm4gVG9rZW5UcmVlLl93YWxrKGJ1aWxkZXIsIHRoaXMucm9vdE5vZGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7UmVuZGVyZXJ9IGJ1aWxkZXJcbiAgICogQHBhcmFtIHtOb2RlfSBub2RlXG4gICAqL1xuICBzdGF0aWMgX3dhbGsoYnVpbGRlciwgbm9kZSkge1xuICAgIGlmICh0eXBlb2Ygbm9kZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgYnVpbGRlci5hZGRUZXh0KG5vZGUpO1xuICAgIH0gZWxzZSBpZiAobm9kZS5jaGlsZHJlbikge1xuICAgICAgYnVpbGRlci5vcGVuTm9kZShub2RlKTtcbiAgICAgIG5vZGUuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHRoaXMuX3dhbGsoYnVpbGRlciwgY2hpbGQpKTtcbiAgICAgIGJ1aWxkZXIuY2xvc2VOb2RlKG5vZGUpO1xuICAgIH1cbiAgICByZXR1cm4gYnVpbGRlcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICovXG4gIHN0YXRpYyBfY29sbGFwc2Uobm9kZSkge1xuICAgIGlmICh0eXBlb2Ygbm9kZSA9PT0gXCJzdHJpbmdcIikgcmV0dXJuO1xuICAgIGlmICghbm9kZS5jaGlsZHJlbikgcmV0dXJuO1xuXG4gICAgaWYgKG5vZGUuY2hpbGRyZW4uZXZlcnkoZWwgPT4gdHlwZW9mIGVsID09PSBcInN0cmluZ1wiKSkge1xuICAgICAgLy8gbm9kZS50ZXh0ID0gbm9kZS5jaGlsZHJlbi5qb2luKFwiXCIpO1xuICAgICAgLy8gZGVsZXRlIG5vZGUuY2hpbGRyZW47XG4gICAgICBub2RlLmNoaWxkcmVuID0gW25vZGUuY2hpbGRyZW4uam9pbihcIlwiKV07XG4gICAgfSBlbHNlIHtcbiAgICAgIG5vZGUuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgICAgVG9rZW5UcmVlLl9jb2xsYXBzZShjaGlsZCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gIEN1cnJlbnRseSB0aGlzIGlzIGFsbCBwcml2YXRlIEFQSSwgYnV0IHRoaXMgaXMgdGhlIG1pbmltYWwgQVBJIG5lY2Vzc2FyeVxuICB0aGF0IGFuIEVtaXR0ZXIgbXVzdCBpbXBsZW1lbnQgdG8gZnVsbHkgc3VwcG9ydCB0aGUgcGFyc2VyLlxuXG4gIE1pbmltYWwgaW50ZXJmYWNlOlxuXG4gIC0gYWRkS2V5d29yZCh0ZXh0LCBraW5kKVxuICAtIGFkZFRleHQodGV4dClcbiAgLSBhZGRTdWJsYW5ndWFnZShlbWl0dGVyLCBzdWJMYW5ndWFnZU5hbWUpXG4gIC0gZmluYWxpemUoKVxuICAtIG9wZW5Ob2RlKGtpbmQpXG4gIC0gY2xvc2VOb2RlKClcbiAgLSBjbG9zZUFsbE5vZGVzKClcbiAgLSB0b0hUTUwoKVxuXG4qL1xuXG4vKipcbiAqIEBpbXBsZW1lbnRzIHtFbWl0dGVyfVxuICovXG5jbGFzcyBUb2tlblRyZWVFbWl0dGVyIGV4dGVuZHMgVG9rZW5UcmVlIHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7Kn0gb3B0aW9uc1xuICAgKi9cbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dFxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2luZFxuICAgKi9cbiAgYWRkS2V5d29yZCh0ZXh0LCBraW5kKSB7XG4gICAgaWYgKHRleHQgPT09IFwiXCIpIHsgcmV0dXJuOyB9XG5cbiAgICB0aGlzLm9wZW5Ob2RlKGtpbmQpO1xuICAgIHRoaXMuYWRkVGV4dCh0ZXh0KTtcbiAgICB0aGlzLmNsb3NlTm9kZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0XG4gICAqL1xuICBhZGRUZXh0KHRleHQpIHtcbiAgICBpZiAodGV4dCA9PT0gXCJcIikgeyByZXR1cm47IH1cblxuICAgIHRoaXMuYWRkKHRleHQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7RW1pdHRlciAmIHtyb290OiBEYXRhTm9kZX19IGVtaXR0ZXJcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICovXG4gIGFkZFN1Ymxhbmd1YWdlKGVtaXR0ZXIsIG5hbWUpIHtcbiAgICAvKiogQHR5cGUgRGF0YU5vZGUgKi9cbiAgICBjb25zdCBub2RlID0gZW1pdHRlci5yb290O1xuICAgIG5vZGUua2luZCA9IG5hbWU7XG4gICAgbm9kZS5zdWJsYW5ndWFnZSA9IHRydWU7XG4gICAgdGhpcy5hZGQobm9kZSk7XG4gIH1cblxuICB0b0hUTUwoKSB7XG4gICAgY29uc3QgcmVuZGVyZXIgPSBuZXcgSFRNTFJlbmRlcmVyKHRoaXMsIHRoaXMub3B0aW9ucyk7XG4gICAgcmV0dXJuIHJlbmRlcmVyLnZhbHVlKCk7XG4gIH1cblxuICBmaW5hbGl6ZSgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICogQHJldHVybnMge1JlZ0V4cH1cbiAqICovXG5mdW5jdGlvbiBlc2NhcGUodmFsdWUpIHtcbiAgcmV0dXJuIG5ldyBSZWdFeHAodmFsdWUucmVwbGFjZSgvWy0vXFxcXF4kKis/LigpfFtcXF17fV0vZywgJ1xcXFwkJicpLCAnbScpO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7UmVnRXhwIHwgc3RyaW5nIH0gcmVcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIHNvdXJjZShyZSkge1xuICBpZiAoIXJlKSByZXR1cm4gbnVsbDtcbiAgaWYgKHR5cGVvZiByZSA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIHJlO1xuXG4gIHJldHVybiByZS5zb3VyY2U7XG59XG5cbi8qKlxuICogQHBhcmFtIHsuLi4oUmVnRXhwIHwgc3RyaW5nKSB9IGFyZ3NcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGNvbmNhdCguLi5hcmdzKSB7XG4gIGNvbnN0IGpvaW5lZCA9IGFyZ3MubWFwKCh4KSA9PiBzb3VyY2UoeCkpLmpvaW4oXCJcIik7XG4gIHJldHVybiBqb2luZWQ7XG59XG5cbi8qKlxuICogQW55IG9mIHRoZSBwYXNzZWQgZXhwcmVzc3Npb25zIG1heSBtYXRjaFxuICpcbiAqIENyZWF0ZXMgYSBodWdlIHRoaXMgfCB0aGlzIHwgdGhhdCB8IHRoYXQgbWF0Y2hcbiAqIEBwYXJhbSB7KFJlZ0V4cCB8IHN0cmluZylbXSB9IGFyZ3NcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGVpdGhlciguLi5hcmdzKSB7XG4gIGNvbnN0IGpvaW5lZCA9ICcoJyArIGFyZ3MubWFwKCh4KSA9PiBzb3VyY2UoeCkpLmpvaW4oXCJ8XCIpICsgXCIpXCI7XG4gIHJldHVybiBqb2luZWQ7XG59XG5cbi8qKlxuICogQHBhcmFtIHtSZWdFeHB9IHJlXG4gKiBAcmV0dXJucyB7bnVtYmVyfVxuICovXG5mdW5jdGlvbiBjb3VudE1hdGNoR3JvdXBzKHJlKSB7XG4gIHJldHVybiAobmV3IFJlZ0V4cChyZS50b1N0cmluZygpICsgJ3wnKSkuZXhlYygnJykubGVuZ3RoIC0gMTtcbn1cblxuLyoqXG4gKiBEb2VzIGxleGVtZSBzdGFydCB3aXRoIGEgcmVndWxhciBleHByZXNzaW9uIG1hdGNoIGF0IHRoZSBiZWdpbm5pbmdcbiAqIEBwYXJhbSB7UmVnRXhwfSByZVxuICogQHBhcmFtIHtzdHJpbmd9IGxleGVtZVxuICovXG5mdW5jdGlvbiBzdGFydHNXaXRoKHJlLCBsZXhlbWUpIHtcbiAgY29uc3QgbWF0Y2ggPSByZSAmJiByZS5leGVjKGxleGVtZSk7XG4gIHJldHVybiBtYXRjaCAmJiBtYXRjaC5pbmRleCA9PT0gMDtcbn1cblxuLy8gQkFDS1JFRl9SRSBtYXRjaGVzIGFuIG9wZW4gcGFyZW50aGVzaXMgb3IgYmFja3JlZmVyZW5jZS4gVG8gYXZvaWRcbi8vIGFuIGluY29ycmVjdCBwYXJzZSwgaXQgYWRkaXRpb25hbGx5IG1hdGNoZXMgdGhlIGZvbGxvd2luZzpcbi8vIC0gWy4uLl0gZWxlbWVudHMsIHdoZXJlIHRoZSBtZWFuaW5nIG9mIHBhcmVudGhlc2VzIGFuZCBlc2NhcGVzIGNoYW5nZVxuLy8gLSBvdGhlciBlc2NhcGUgc2VxdWVuY2VzLCBzbyB3ZSBkbyBub3QgbWlzcGFyc2UgZXNjYXBlIHNlcXVlbmNlcyBhc1xuLy8gICBpbnRlcmVzdGluZyBlbGVtZW50c1xuLy8gLSBub24tbWF0Y2hpbmcgb3IgbG9va2FoZWFkIHBhcmVudGhlc2VzLCB3aGljaCBkbyBub3QgY2FwdHVyZS4gVGhlc2Vcbi8vICAgZm9sbG93IHRoZSAnKCcgd2l0aCBhICc/Jy5cbmNvbnN0IEJBQ0tSRUZfUkUgPSAvXFxbKD86W15cXFxcXFxdXXxcXFxcLikqXFxdfFxcKFxcPz98XFxcXChbMS05XVswLTldKil8XFxcXC4vO1xuXG4vLyBqb2luIGxvZ2ljYWxseSBjb21wdXRlcyByZWdleHBzLmpvaW4oc2VwYXJhdG9yKSwgYnV0IGZpeGVzIHRoZVxuLy8gYmFja3JlZmVyZW5jZXMgc28gdGhleSBjb250aW51ZSB0byBtYXRjaC5cbi8vIGl0IGFsc28gcGxhY2VzIGVhY2ggaW5kaXZpZHVhbCByZWd1bGFyIGV4cHJlc3Npb24gaW50byBpdCdzIG93blxuLy8gbWF0Y2ggZ3JvdXAsIGtlZXBpbmcgdHJhY2sgb2YgdGhlIHNlcXVlbmNpbmcgb2YgdGhvc2UgbWF0Y2ggZ3JvdXBzXG4vLyBpcyBjdXJyZW50bHkgYW4gZXhlcmNpc2UgZm9yIHRoZSBjYWxsZXIuIDotKVxuLyoqXG4gKiBAcGFyYW0geyhzdHJpbmcgfCBSZWdFeHApW119IHJlZ2V4cHNcbiAqIEBwYXJhbSB7c3RyaW5nfSBzZXBhcmF0b3JcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGpvaW4ocmVnZXhwcywgc2VwYXJhdG9yID0gXCJ8XCIpIHtcbiAgbGV0IG51bUNhcHR1cmVzID0gMDtcblxuICByZXR1cm4gcmVnZXhwcy5tYXAoKHJlZ2V4KSA9PiB7XG4gICAgbnVtQ2FwdHVyZXMgKz0gMTtcbiAgICBjb25zdCBvZmZzZXQgPSBudW1DYXB0dXJlcztcbiAgICBsZXQgcmUgPSBzb3VyY2UocmVnZXgpO1xuICAgIGxldCBvdXQgPSAnJztcblxuICAgIHdoaWxlIChyZS5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBtYXRjaCA9IEJBQ0tSRUZfUkUuZXhlYyhyZSk7XG4gICAgICBpZiAoIW1hdGNoKSB7XG4gICAgICAgIG91dCArPSByZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBvdXQgKz0gcmUuc3Vic3RyaW5nKDAsIG1hdGNoLmluZGV4KTtcbiAgICAgIHJlID0gcmUuc3Vic3RyaW5nKG1hdGNoLmluZGV4ICsgbWF0Y2hbMF0ubGVuZ3RoKTtcbiAgICAgIGlmIChtYXRjaFswXVswXSA9PT0gJ1xcXFwnICYmIG1hdGNoWzFdKSB7XG4gICAgICAgIC8vIEFkanVzdCB0aGUgYmFja3JlZmVyZW5jZS5cbiAgICAgICAgb3V0ICs9ICdcXFxcJyArIFN0cmluZyhOdW1iZXIobWF0Y2hbMV0pICsgb2Zmc2V0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG91dCArPSBtYXRjaFswXTtcbiAgICAgICAgaWYgKG1hdGNoWzBdID09PSAnKCcpIHtcbiAgICAgICAgICBudW1DYXB0dXJlcysrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvdXQ7XG4gIH0pLm1hcChyZSA9PiBgKCR7cmV9KWApLmpvaW4oc2VwYXJhdG9yKTtcbn1cblxuLy8gQ29tbW9uIHJlZ2V4cHNcbmNvbnN0IE1BVENIX05PVEhJTkdfUkUgPSAvXFxiXFxCLztcbmNvbnN0IElERU5UX1JFID0gJ1thLXpBLVpdXFxcXHcqJztcbmNvbnN0IFVOREVSU0NPUkVfSURFTlRfUkUgPSAnW2EtekEtWl9dXFxcXHcqJztcbmNvbnN0IE5VTUJFUl9SRSA9ICdcXFxcYlxcXFxkKyhcXFxcLlxcXFxkKyk/JztcbmNvbnN0IENfTlVNQkVSX1JFID0gJygtPykoXFxcXGIwW3hYXVthLWZBLUYwLTldK3woXFxcXGJcXFxcZCsoXFxcXC5cXFxcZCopP3xcXFxcLlxcXFxkKykoW2VFXVstK10/XFxcXGQrKT8pJzsgLy8gMHguLi4sIDAuLi4sIGRlY2ltYWwsIGZsb2F0XG5jb25zdCBCSU5BUllfTlVNQkVSX1JFID0gJ1xcXFxiKDBiWzAxXSspJzsgLy8gMGIuLi5cbmNvbnN0IFJFX1NUQVJURVJTX1JFID0gJyF8IT18IT09fCV8JT18JnwmJnwmPXxcXFxcKnxcXFxcKj18XFxcXCt8XFxcXCs9fCx8LXwtPXwvPXwvfDp8O3w8PHw8PD18PD18PHw9PT18PT18PXw+Pj49fD4+PXw+PXw+Pj58Pj58PnxcXFxcP3xcXFxcW3xcXFxce3xcXFxcKHxcXFxcXnxcXFxcXj18XFxcXHx8XFxcXHw9fFxcXFx8XFxcXHx8fic7XG5cbi8qKlxuKiBAcGFyYW0geyBQYXJ0aWFsPE1vZGU+ICYge2JpbmFyeT86IHN0cmluZyB8IFJlZ0V4cH0gfSBvcHRzXG4qL1xuY29uc3QgU0hFQkFORyA9IChvcHRzID0ge30pID0+IHtcbiAgY29uc3QgYmVnaW5TaGViYW5nID0gL14jIVsgXSpcXC8vO1xuICBpZiAob3B0cy5iaW5hcnkpIHtcbiAgICBvcHRzLmJlZ2luID0gY29uY2F0KFxuICAgICAgYmVnaW5TaGViYW5nLFxuICAgICAgLy4qXFxiLyxcbiAgICAgIG9wdHMuYmluYXJ5LFxuICAgICAgL1xcYi4qLyk7XG4gIH1cbiAgcmV0dXJuIGluaGVyaXQoe1xuICAgIGNsYXNzTmFtZTogJ21ldGEnLFxuICAgIGJlZ2luOiBiZWdpblNoZWJhbmcsXG4gICAgZW5kOiAvJC8sXG4gICAgcmVsZXZhbmNlOiAwLFxuICAgIC8qKiBAdHlwZSB7TW9kZUNhbGxiYWNrfSAqL1xuICAgIFwib246YmVnaW5cIjogKG0sIHJlc3ApID0+IHtcbiAgICAgIGlmIChtLmluZGV4ICE9PSAwKSByZXNwLmlnbm9yZU1hdGNoKCk7XG4gICAgfVxuICB9LCBvcHRzKTtcbn07XG5cbi8vIENvbW1vbiBtb2Rlc1xuY29uc3QgQkFDS1NMQVNIX0VTQ0FQRSA9IHtcbiAgYmVnaW46ICdcXFxcXFxcXFtcXFxcc1xcXFxTXScsIHJlbGV2YW5jZTogMFxufTtcbmNvbnN0IEFQT1NfU1RSSU5HX01PREUgPSB7XG4gIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gIGJlZ2luOiAnXFwnJyxcbiAgZW5kOiAnXFwnJyxcbiAgaWxsZWdhbDogJ1xcXFxuJyxcbiAgY29udGFpbnM6IFtCQUNLU0xBU0hfRVNDQVBFXVxufTtcbmNvbnN0IFFVT1RFX1NUUklOR19NT0RFID0ge1xuICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICBiZWdpbjogJ1wiJyxcbiAgZW5kOiAnXCInLFxuICBpbGxlZ2FsOiAnXFxcXG4nLFxuICBjb250YWluczogW0JBQ0tTTEFTSF9FU0NBUEVdXG59O1xuY29uc3QgUEhSQVNBTF9XT1JEU19NT0RFID0ge1xuICBiZWdpbjogL1xcYihhfGFufHRoZXxhcmV8SSdtfGlzbid0fGRvbid0fGRvZXNuJ3R8d29uJ3R8YnV0fGp1c3R8c2hvdWxkfHByZXR0eXxzaW1wbHl8ZW5vdWdofGdvbm5hfGdvaW5nfHd0Znxzb3xzdWNofHdpbGx8eW91fHlvdXJ8dGhleXxsaWtlfG1vcmUpXFxiL1xufTtcbi8qKlxuICogQ3JlYXRlcyBhIGNvbW1lbnQgbW9kZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nIHwgUmVnRXhwfSBiZWdpblxuICogQHBhcmFtIHtzdHJpbmcgfCBSZWdFeHB9IGVuZFxuICogQHBhcmFtIHtNb2RlIHwge319IFttb2RlT3B0aW9uc11cbiAqIEByZXR1cm5zIHtQYXJ0aWFsPE1vZGU+fVxuICovXG5jb25zdCBDT01NRU5UID0gZnVuY3Rpb24oYmVnaW4sIGVuZCwgbW9kZU9wdGlvbnMgPSB7fSkge1xuICBjb25zdCBtb2RlID0gaW5oZXJpdChcbiAgICB7XG4gICAgICBjbGFzc05hbWU6ICdjb21tZW50JyxcbiAgICAgIGJlZ2luLFxuICAgICAgZW5kLFxuICAgICAgY29udGFpbnM6IFtdXG4gICAgfSxcbiAgICBtb2RlT3B0aW9uc1xuICApO1xuICBtb2RlLmNvbnRhaW5zLnB1c2goUEhSQVNBTF9XT1JEU19NT0RFKTtcbiAgbW9kZS5jb250YWlucy5wdXNoKHtcbiAgICBjbGFzc05hbWU6ICdkb2N0YWcnLFxuICAgIGJlZ2luOiAnKD86VE9ET3xGSVhNRXxOT1RFfEJVR3xPUFRJTUlaRXxIQUNLfFhYWCk6JyxcbiAgICByZWxldmFuY2U6IDBcbiAgfSk7XG4gIHJldHVybiBtb2RlO1xufTtcbmNvbnN0IENfTElORV9DT01NRU5UX01PREUgPSBDT01NRU5UKCcvLycsICckJyk7XG5jb25zdCBDX0JMT0NLX0NPTU1FTlRfTU9ERSA9IENPTU1FTlQoJy9cXFxcKicsICdcXFxcKi8nKTtcbmNvbnN0IEhBU0hfQ09NTUVOVF9NT0RFID0gQ09NTUVOVCgnIycsICckJyk7XG5jb25zdCBOVU1CRVJfTU9ERSA9IHtcbiAgY2xhc3NOYW1lOiAnbnVtYmVyJyxcbiAgYmVnaW46IE5VTUJFUl9SRSxcbiAgcmVsZXZhbmNlOiAwXG59O1xuY29uc3QgQ19OVU1CRVJfTU9ERSA9IHtcbiAgY2xhc3NOYW1lOiAnbnVtYmVyJyxcbiAgYmVnaW46IENfTlVNQkVSX1JFLFxuICByZWxldmFuY2U6IDBcbn07XG5jb25zdCBCSU5BUllfTlVNQkVSX01PREUgPSB7XG4gIGNsYXNzTmFtZTogJ251bWJlcicsXG4gIGJlZ2luOiBCSU5BUllfTlVNQkVSX1JFLFxuICByZWxldmFuY2U6IDBcbn07XG5jb25zdCBDU1NfTlVNQkVSX01PREUgPSB7XG4gIGNsYXNzTmFtZTogJ251bWJlcicsXG4gIGJlZ2luOiBOVU1CRVJfUkUgKyAnKCcgK1xuICAgICclfGVtfGV4fGNofHJlbScgK1xuICAgICd8dnd8dmh8dm1pbnx2bWF4JyArXG4gICAgJ3xjbXxtbXxpbnxwdHxwY3xweCcgK1xuICAgICd8ZGVnfGdyYWR8cmFkfHR1cm4nICtcbiAgICAnfHN8bXMnICtcbiAgICAnfEh6fGtIeicgK1xuICAgICd8ZHBpfGRwY218ZHBweCcgK1xuICAgICcpPycsXG4gIHJlbGV2YW5jZTogMFxufTtcbmNvbnN0IFJFR0VYUF9NT0RFID0ge1xuICAvLyB0aGlzIG91dGVyIHJ1bGUgbWFrZXMgc3VyZSB3ZSBhY3R1YWxseSBoYXZlIGEgV0hPTEUgcmVnZXggYW5kIG5vdCBzaW1wbHlcbiAgLy8gYW4gZXhwcmVzc2lvbiBzdWNoIGFzOlxuICAvL1xuICAvLyAgICAgMyAvIHNvbWV0aGluZ1xuICAvL1xuICAvLyAod2hpY2ggd2lsbCB0aGVuIGJsb3cgdXAgd2hlbiByZWdleCdzIGBpbGxlZ2FsYCBzZWVzIHRoZSBuZXdsaW5lKVxuICBiZWdpbjogLyg/PVxcL1teL1xcbl0qXFwvKS8sXG4gIGNvbnRhaW5zOiBbe1xuICAgIGNsYXNzTmFtZTogJ3JlZ2V4cCcsXG4gICAgYmVnaW46IC9cXC8vLFxuICAgIGVuZDogL1xcL1tnaW11eV0qLyxcbiAgICBpbGxlZ2FsOiAvXFxuLyxcbiAgICBjb250YWluczogW1xuICAgICAgQkFDS1NMQVNIX0VTQ0FQRSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46IC9cXFsvLFxuICAgICAgICBlbmQ6IC9cXF0vLFxuICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgIGNvbnRhaW5zOiBbQkFDS1NMQVNIX0VTQ0FQRV1cbiAgICAgIH1cbiAgICBdXG4gIH1dXG59O1xuY29uc3QgVElUTEVfTU9ERSA9IHtcbiAgY2xhc3NOYW1lOiAndGl0bGUnLFxuICBiZWdpbjogSURFTlRfUkUsXG4gIHJlbGV2YW5jZTogMFxufTtcbmNvbnN0IFVOREVSU0NPUkVfVElUTEVfTU9ERSA9IHtcbiAgY2xhc3NOYW1lOiAndGl0bGUnLFxuICBiZWdpbjogVU5ERVJTQ09SRV9JREVOVF9SRSxcbiAgcmVsZXZhbmNlOiAwXG59O1xuY29uc3QgTUVUSE9EX0dVQVJEID0ge1xuICAvLyBleGNsdWRlcyBtZXRob2QgbmFtZXMgZnJvbSBrZXl3b3JkIHByb2Nlc3NpbmdcbiAgYmVnaW46ICdcXFxcLlxcXFxzKicgKyBVTkRFUlNDT1JFX0lERU5UX1JFLFxuICByZWxldmFuY2U6IDBcbn07XG5cbi8qKlxuICogQWRkcyBlbmQgc2FtZSBhcyBiZWdpbiBtZWNoYW5pY3MgdG8gYSBtb2RlXG4gKlxuICogWW91ciBtb2RlIG11c3QgaW5jbHVkZSBhdCBsZWFzdCBhIHNpbmdsZSAoKSBtYXRjaCBncm91cCBhcyB0aGF0IGZpcnN0IG1hdGNoXG4gKiBncm91cCBpcyB3aGF0IGlzIHVzZWQgZm9yIGNvbXBhcmlzb25cbiAqIEBwYXJhbSB7UGFydGlhbDxNb2RlPn0gbW9kZVxuICovXG5jb25zdCBFTkRfU0FNRV9BU19CRUdJTiA9IGZ1bmN0aW9uKG1vZGUpIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24obW9kZSxcbiAgICB7XG4gICAgICAvKiogQHR5cGUge01vZGVDYWxsYmFja30gKi9cbiAgICAgICdvbjpiZWdpbic6IChtLCByZXNwKSA9PiB7IHJlc3AuZGF0YS5fYmVnaW5NYXRjaCA9IG1bMV07IH0sXG4gICAgICAvKiogQHR5cGUge01vZGVDYWxsYmFja30gKi9cbiAgICAgICdvbjplbmQnOiAobSwgcmVzcCkgPT4geyBpZiAocmVzcC5kYXRhLl9iZWdpbk1hdGNoICE9PSBtWzFdKSByZXNwLmlnbm9yZU1hdGNoKCk7IH1cbiAgICB9KTtcbn07XG5cbnZhciBNT0RFUyA9IC8qI19fUFVSRV9fKi9PYmplY3QuZnJlZXplKHtcbiAgICBfX3Byb3RvX186IG51bGwsXG4gICAgTUFUQ0hfTk9USElOR19SRTogTUFUQ0hfTk9USElOR19SRSxcbiAgICBJREVOVF9SRTogSURFTlRfUkUsXG4gICAgVU5ERVJTQ09SRV9JREVOVF9SRTogVU5ERVJTQ09SRV9JREVOVF9SRSxcbiAgICBOVU1CRVJfUkU6IE5VTUJFUl9SRSxcbiAgICBDX05VTUJFUl9SRTogQ19OVU1CRVJfUkUsXG4gICAgQklOQVJZX05VTUJFUl9SRTogQklOQVJZX05VTUJFUl9SRSxcbiAgICBSRV9TVEFSVEVSU19SRTogUkVfU1RBUlRFUlNfUkUsXG4gICAgU0hFQkFORzogU0hFQkFORyxcbiAgICBCQUNLU0xBU0hfRVNDQVBFOiBCQUNLU0xBU0hfRVNDQVBFLFxuICAgIEFQT1NfU1RSSU5HX01PREU6IEFQT1NfU1RSSU5HX01PREUsXG4gICAgUVVPVEVfU1RSSU5HX01PREU6IFFVT1RFX1NUUklOR19NT0RFLFxuICAgIFBIUkFTQUxfV09SRFNfTU9ERTogUEhSQVNBTF9XT1JEU19NT0RFLFxuICAgIENPTU1FTlQ6IENPTU1FTlQsXG4gICAgQ19MSU5FX0NPTU1FTlRfTU9ERTogQ19MSU5FX0NPTU1FTlRfTU9ERSxcbiAgICBDX0JMT0NLX0NPTU1FTlRfTU9ERTogQ19CTE9DS19DT01NRU5UX01PREUsXG4gICAgSEFTSF9DT01NRU5UX01PREU6IEhBU0hfQ09NTUVOVF9NT0RFLFxuICAgIE5VTUJFUl9NT0RFOiBOVU1CRVJfTU9ERSxcbiAgICBDX05VTUJFUl9NT0RFOiBDX05VTUJFUl9NT0RFLFxuICAgIEJJTkFSWV9OVU1CRVJfTU9ERTogQklOQVJZX05VTUJFUl9NT0RFLFxuICAgIENTU19OVU1CRVJfTU9ERTogQ1NTX05VTUJFUl9NT0RFLFxuICAgIFJFR0VYUF9NT0RFOiBSRUdFWFBfTU9ERSxcbiAgICBUSVRMRV9NT0RFOiBUSVRMRV9NT0RFLFxuICAgIFVOREVSU0NPUkVfVElUTEVfTU9ERTogVU5ERVJTQ09SRV9USVRMRV9NT0RFLFxuICAgIE1FVEhPRF9HVUFSRDogTUVUSE9EX0dVQVJELFxuICAgIEVORF9TQU1FX0FTX0JFR0lOOiBFTkRfU0FNRV9BU19CRUdJTlxufSk7XG5cbi8vIEdyYW1tYXIgZXh0ZW5zaW9ucyAvIHBsdWdpbnNcbi8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2hpZ2hsaWdodGpzL2hpZ2hsaWdodC5qcy9pc3N1ZXMvMjgzM1xuXG4vLyBHcmFtbWFyIGV4dGVuc2lvbnMgYWxsb3cgXCJzeW50YWN0aWMgc3VnYXJcIiB0byBiZSBhZGRlZCB0byB0aGUgZ3JhbW1hciBtb2Rlc1xuLy8gd2l0aG91dCByZXF1aXJpbmcgYW55IHVuZGVybHlpbmcgY2hhbmdlcyB0byB0aGUgY29tcGlsZXIgaW50ZXJuYWxzLlxuXG4vLyBgY29tcGlsZU1hdGNoYCBiZWluZyB0aGUgcGVyZmVjdCBzbWFsbCBleGFtcGxlIG9mIG5vdyBhbGxvd2luZyBhIGdyYW1tYXJcbi8vIGF1dGhvciB0byB3cml0ZSBgbWF0Y2hgIHdoZW4gdGhleSBkZXNpcmUgdG8gbWF0Y2ggYSBzaW5nbGUgZXhwcmVzc2lvbiByYXRoZXJcbi8vIHRoYW4gYmVpbmcgZm9yY2VkIHRvIHVzZSBgYmVnaW5gLiAgVGhlIGV4dGVuc2lvbiB0aGVuIGp1c3QgbW92ZXMgYG1hdGNoYCBpbnRvXG4vLyBgYmVnaW5gIHdoZW4gaXQgcnVucy4gIEllLCBubyBmZWF0dXJlcyBoYXZlIGJlZW4gYWRkZWQsIGJ1dCB3ZSd2ZSBqdXN0IG1hZGVcbi8vIHRoZSBleHBlcmllbmNlIG9mIHdyaXRpbmcgKGFuZCByZWFkaW5nIGdyYW1tYXJzKSBhIGxpdHRsZSBiaXQgbmljZXIuXG5cbi8vIC0tLS0tLVxuXG4vLyBUT0RPOiBXZSBuZWVkIG5lZ2F0aXZlIGxvb2stYmVoaW5kIHN1cHBvcnQgdG8gZG8gdGhpcyBwcm9wZXJseVxuLyoqXG4gKiBTa2lwIGEgbWF0Y2ggaWYgaXQgaGFzIGEgcHJlY2VkaW5nIGRvdFxuICpcbiAqIFRoaXMgaXMgdXNlZCBmb3IgYGJlZ2luS2V5d29yZHNgIHRvIHByZXZlbnQgbWF0Y2hpbmcgZXhwcmVzc2lvbnMgc3VjaCBhc1xuICogYGJvYi5rZXl3b3JkLmRvKClgLiBUaGUgbW9kZSBjb21waWxlciBhdXRvbWF0aWNhbGx5IHdpcmVzIHRoaXMgdXAgYXMgYVxuICogc3BlY2lhbCBfaW50ZXJuYWxfICdvbjpiZWdpbicgY2FsbGJhY2sgZm9yIG1vZGVzIHdpdGggYGJlZ2luS2V5d29yZHNgXG4gKiBAcGFyYW0ge1JlZ0V4cE1hdGNoQXJyYXl9IG1hdGNoXG4gKiBAcGFyYW0ge0NhbGxiYWNrUmVzcG9uc2V9IHJlc3BvbnNlXG4gKi9cbmZ1bmN0aW9uIHNraXBJZmhhc1ByZWNlZGluZ0RvdChtYXRjaCwgcmVzcG9uc2UpIHtcbiAgY29uc3QgYmVmb3JlID0gbWF0Y2guaW5wdXRbbWF0Y2guaW5kZXggLSAxXTtcbiAgaWYgKGJlZm9yZSA9PT0gXCIuXCIpIHtcbiAgICByZXNwb25zZS5pZ25vcmVNYXRjaCgpO1xuICB9XG59XG5cblxuLyoqXG4gKiBgYmVnaW5LZXl3b3Jkc2Agc3ludGFjdGljIHN1Z2FyXG4gKiBAdHlwZSB7Q29tcGlsZXJFeHR9XG4gKi9cbmZ1bmN0aW9uIGJlZ2luS2V5d29yZHMobW9kZSwgcGFyZW50KSB7XG4gIGlmICghcGFyZW50KSByZXR1cm47XG4gIGlmICghbW9kZS5iZWdpbktleXdvcmRzKSByZXR1cm47XG5cbiAgLy8gZm9yIGxhbmd1YWdlcyB3aXRoIGtleXdvcmRzIHRoYXQgaW5jbHVkZSBub24td29yZCBjaGFyYWN0ZXJzIGNoZWNraW5nIGZvclxuICAvLyBhIHdvcmQgYm91bmRhcnkgaXMgbm90IHN1ZmZpY2llbnQsIHNvIGluc3RlYWQgd2UgY2hlY2sgZm9yIGEgd29yZCBib3VuZGFyeVxuICAvLyBvciB3aGl0ZXNwYWNlIC0gdGhpcyBkb2VzIG5vIGhhcm0gaW4gYW55IGNhc2Ugc2luY2Ugb3VyIGtleXdvcmQgZW5naW5lXG4gIC8vIGRvZXNuJ3QgYWxsb3cgc3BhY2VzIGluIGtleXdvcmRzIGFueXdheXMgYW5kIHdlIHN0aWxsIGNoZWNrIGZvciB0aGUgYm91bmRhcnlcbiAgLy8gZmlyc3RcbiAgbW9kZS5iZWdpbiA9ICdcXFxcYignICsgbW9kZS5iZWdpbktleXdvcmRzLnNwbGl0KCcgJykuam9pbignfCcpICsgJykoPyFcXFxcLikoPz1cXFxcYnxcXFxccyknO1xuICBtb2RlLl9fYmVmb3JlQmVnaW4gPSBza2lwSWZoYXNQcmVjZWRpbmdEb3Q7XG4gIG1vZGUua2V5d29yZHMgPSBtb2RlLmtleXdvcmRzIHx8IG1vZGUuYmVnaW5LZXl3b3JkcztcbiAgZGVsZXRlIG1vZGUuYmVnaW5LZXl3b3JkcztcblxuICAvLyBwcmV2ZW50cyBkb3VibGUgcmVsZXZhbmNlLCB0aGUga2V5d29yZHMgdGhlbXNlbHZlcyBwcm92aWRlXG4gIC8vIHJlbGV2YW5jZSwgdGhlIG1vZGUgZG9lc24ndCBuZWVkIHRvIGRvdWJsZSBpdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZpbmVkXG4gIGlmIChtb2RlLnJlbGV2YW5jZSA9PT0gdW5kZWZpbmVkKSBtb2RlLnJlbGV2YW5jZSA9IDA7XG59XG5cbi8qKlxuICogQWxsb3cgYGlsbGVnYWxgIHRvIGNvbnRhaW4gYW4gYXJyYXkgb2YgaWxsZWdhbCB2YWx1ZXNcbiAqIEB0eXBlIHtDb21waWxlckV4dH1cbiAqL1xuZnVuY3Rpb24gY29tcGlsZUlsbGVnYWwobW9kZSwgX3BhcmVudCkge1xuICBpZiAoIUFycmF5LmlzQXJyYXkobW9kZS5pbGxlZ2FsKSkgcmV0dXJuO1xuXG4gIG1vZGUuaWxsZWdhbCA9IGVpdGhlciguLi5tb2RlLmlsbGVnYWwpO1xufVxuXG4vKipcbiAqIGBtYXRjaGAgdG8gbWF0Y2ggYSBzaW5nbGUgZXhwcmVzc2lvbiBmb3IgcmVhZGFiaWxpdHlcbiAqIEB0eXBlIHtDb21waWxlckV4dH1cbiAqL1xuZnVuY3Rpb24gY29tcGlsZU1hdGNoKG1vZGUsIF9wYXJlbnQpIHtcbiAgaWYgKCFtb2RlLm1hdGNoKSByZXR1cm47XG4gIGlmIChtb2RlLmJlZ2luIHx8IG1vZGUuZW5kKSB0aHJvdyBuZXcgRXJyb3IoXCJiZWdpbiAmIGVuZCBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIG1hdGNoXCIpO1xuXG4gIG1vZGUuYmVnaW4gPSBtb2RlLm1hdGNoO1xuICBkZWxldGUgbW9kZS5tYXRjaDtcbn1cblxuLyoqXG4gKiBwcm92aWRlcyB0aGUgZGVmYXVsdCAxIHJlbGV2YW5jZSB0byBhbGwgbW9kZXNcbiAqIEB0eXBlIHtDb21waWxlckV4dH1cbiAqL1xuZnVuY3Rpb24gY29tcGlsZVJlbGV2YW5jZShtb2RlLCBfcGFyZW50KSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZmluZWRcbiAgaWYgKG1vZGUucmVsZXZhbmNlID09PSB1bmRlZmluZWQpIG1vZGUucmVsZXZhbmNlID0gMTtcbn1cblxuLy8ga2V5d29yZHMgdGhhdCBzaG91bGQgaGF2ZSBubyBkZWZhdWx0IHJlbGV2YW5jZSB2YWx1ZVxuY29uc3QgQ09NTU9OX0tFWVdPUkRTID0gW1xuICAnb2YnLFxuICAnYW5kJyxcbiAgJ2ZvcicsXG4gICdpbicsXG4gICdub3QnLFxuICAnb3InLFxuICAnaWYnLFxuICAndGhlbicsXG4gICdwYXJlbnQnLCAvLyBjb21tb24gdmFyaWFibGUgbmFtZVxuICAnbGlzdCcsIC8vIGNvbW1vbiB2YXJpYWJsZSBuYW1lXG4gICd2YWx1ZScgLy8gY29tbW9uIHZhcmlhYmxlIG5hbWVcbl07XG5cbmNvbnN0IERFRkFVTFRfS0VZV09SRF9DTEFTU05BTUUgPSBcImtleXdvcmRcIjtcblxuLyoqXG4gKiBHaXZlbiByYXcga2V5d29yZHMgZnJvbSBhIGxhbmd1YWdlIGRlZmluaXRpb24sIGNvbXBpbGUgdGhlbS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZyB8IFJlY29yZDxzdHJpbmcsc3RyaW5nfHN0cmluZ1tdPiB8IEFycmF5PHN0cmluZz59IHJhd0tleXdvcmRzXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGNhc2VJbnNlbnNpdGl2ZVxuICovXG5mdW5jdGlvbiBjb21waWxlS2V5d29yZHMocmF3S2V5d29yZHMsIGNhc2VJbnNlbnNpdGl2ZSwgY2xhc3NOYW1lID0gREVGQVVMVF9LRVlXT1JEX0NMQVNTTkFNRSkge1xuICAvKiogQHR5cGUgS2V5d29yZERpY3QgKi9cbiAgY29uc3QgY29tcGlsZWRLZXl3b3JkcyA9IHt9O1xuXG4gIC8vIGlucHV0IGNhbiBiZSBhIHN0cmluZyBvZiBrZXl3b3JkcywgYW4gYXJyYXkgb2Yga2V5d29yZHMsIG9yIGEgb2JqZWN0IHdpdGhcbiAgLy8gbmFtZWQga2V5cyByZXByZXNlbnRpbmcgY2xhc3NOYW1lICh3aGljaCBjYW4gdGhlbiBwb2ludCB0byBhIHN0cmluZyBvciBhcnJheSlcbiAgaWYgKHR5cGVvZiByYXdLZXl3b3JkcyA9PT0gJ3N0cmluZycpIHtcbiAgICBjb21waWxlTGlzdChjbGFzc05hbWUsIHJhd0tleXdvcmRzLnNwbGl0KFwiIFwiKSk7XG4gIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShyYXdLZXl3b3JkcykpIHtcbiAgICBjb21waWxlTGlzdChjbGFzc05hbWUsIHJhd0tleXdvcmRzKTtcbiAgfSBlbHNlIHtcbiAgICBPYmplY3Qua2V5cyhyYXdLZXl3b3JkcykuZm9yRWFjaChmdW5jdGlvbihjbGFzc05hbWUpIHtcbiAgICAgIC8vIGNvbGxhcHNlIGFsbCBvdXIgb2JqZWN0cyBiYWNrIGludG8gdGhlIHBhcmVudCBvYmplY3RcbiAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgIGNvbXBpbGVkS2V5d29yZHMsXG4gICAgICAgIGNvbXBpbGVLZXl3b3JkcyhyYXdLZXl3b3Jkc1tjbGFzc05hbWVdLCBjYXNlSW5zZW5zaXRpdmUsIGNsYXNzTmFtZSlcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIGNvbXBpbGVkS2V5d29yZHM7XG5cbiAgLy8gLS0tXG5cbiAgLyoqXG4gICAqIENvbXBpbGVzIGFuIGluZGl2aWR1YWwgbGlzdCBvZiBrZXl3b3Jkc1xuICAgKlxuICAgKiBFeDogXCJmb3IgaWYgd2hlbiB3aGlsZXw1XCJcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZVxuICAgKiBAcGFyYW0ge0FycmF5PHN0cmluZz59IGtleXdvcmRMaXN0XG4gICAqL1xuICBmdW5jdGlvbiBjb21waWxlTGlzdChjbGFzc05hbWUsIGtleXdvcmRMaXN0KSB7XG4gICAgaWYgKGNhc2VJbnNlbnNpdGl2ZSkge1xuICAgICAga2V5d29yZExpc3QgPSBrZXl3b3JkTGlzdC5tYXAoeCA9PiB4LnRvTG93ZXJDYXNlKCkpO1xuICAgIH1cbiAgICBrZXl3b3JkTGlzdC5mb3JFYWNoKGZ1bmN0aW9uKGtleXdvcmQpIHtcbiAgICAgIGNvbnN0IHBhaXIgPSBrZXl3b3JkLnNwbGl0KCd8Jyk7XG4gICAgICBjb21waWxlZEtleXdvcmRzW3BhaXJbMF1dID0gW2NsYXNzTmFtZSwgc2NvcmVGb3JLZXl3b3JkKHBhaXJbMF0sIHBhaXJbMV0pXTtcbiAgICB9KTtcbiAgfVxufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIHByb3BlciBzY29yZSBmb3IgYSBnaXZlbiBrZXl3b3JkXG4gKlxuICogQWxzbyB0YWtlcyBpbnRvIGFjY291bnQgY29tbWVudCBrZXl3b3Jkcywgd2hpY2ggd2lsbCBiZSBzY29yZWQgMCBVTkxFU1NcbiAqIGFub3RoZXIgc2NvcmUgaGFzIGJlZW4gbWFudWFsbHkgYXNzaWduZWQuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5d29yZFxuICogQHBhcmFtIHtzdHJpbmd9IFtwcm92aWRlZFNjb3JlXVxuICovXG5mdW5jdGlvbiBzY29yZUZvcktleXdvcmQoa2V5d29yZCwgcHJvdmlkZWRTY29yZSkge1xuICAvLyBtYW51YWwgc2NvcmVzIGFsd2F5cyB3aW4gb3ZlciBjb21tb24ga2V5d29yZHNcbiAgLy8gc28geW91IGNhbiBmb3JjZSBhIHNjb3JlIG9mIDEgaWYgeW91IHJlYWxseSBpbnNpc3RcbiAgaWYgKHByb3ZpZGVkU2NvcmUpIHtcbiAgICByZXR1cm4gTnVtYmVyKHByb3ZpZGVkU2NvcmUpO1xuICB9XG5cbiAgcmV0dXJuIGNvbW1vbktleXdvcmQoa2V5d29yZCkgPyAwIDogMTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmVzIGlmIGEgZ2l2ZW4ga2V5d29yZCBpcyBjb21tb24gb3Igbm90XG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGtleXdvcmQgKi9cbmZ1bmN0aW9uIGNvbW1vbktleXdvcmQoa2V5d29yZCkge1xuICByZXR1cm4gQ09NTU9OX0tFWVdPUkRTLmluY2x1ZGVzKGtleXdvcmQudG9Mb3dlckNhc2UoKSk7XG59XG5cbi8vIGNvbXBpbGF0aW9uXG5cbi8qKlxuICogQ29tcGlsZXMgYSBsYW5ndWFnZSBkZWZpbml0aW9uIHJlc3VsdFxuICpcbiAqIEdpdmVuIHRoZSByYXcgcmVzdWx0IG9mIGEgbGFuZ3VhZ2UgZGVmaW5pdGlvbiAoTGFuZ3VhZ2UpLCBjb21waWxlcyB0aGlzIHNvXG4gKiB0aGF0IGl0IGlzIHJlYWR5IGZvciBoaWdobGlnaHRpbmcgY29kZS5cbiAqIEBwYXJhbSB7TGFuZ3VhZ2V9IGxhbmd1YWdlXG4gKiBAcGFyYW0ge3twbHVnaW5zOiBITEpTUGx1Z2luW119fSBvcHRzXG4gKiBAcmV0dXJucyB7Q29tcGlsZWRMYW5ndWFnZX1cbiAqL1xuZnVuY3Rpb24gY29tcGlsZUxhbmd1YWdlKGxhbmd1YWdlLCB7IHBsdWdpbnMgfSkge1xuICAvKipcbiAgICogQnVpbGRzIGEgcmVnZXggd2l0aCB0aGUgY2FzZSBzZW5zYXRpdmlsaXR5IG9mIHRoZSBjdXJyZW50IGxhbmd1YWdlXG4gICAqXG4gICAqIEBwYXJhbSB7UmVnRXhwIHwgc3RyaW5nfSB2YWx1ZVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtnbG9iYWxdXG4gICAqL1xuICBmdW5jdGlvbiBsYW5nUmUodmFsdWUsIGdsb2JhbCkge1xuICAgIHJldHVybiBuZXcgUmVnRXhwKFxuICAgICAgc291cmNlKHZhbHVlKSxcbiAgICAgICdtJyArIChsYW5ndWFnZS5jYXNlX2luc2Vuc2l0aXZlID8gJ2knIDogJycpICsgKGdsb2JhbCA/ICdnJyA6ICcnKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICBTdG9yZXMgbXVsdGlwbGUgcmVndWxhciBleHByZXNzaW9ucyBhbmQgYWxsb3dzIHlvdSB0byBxdWlja2x5IHNlYXJjaCBmb3JcbiAgICB0aGVtIGFsbCBpbiBhIHN0cmluZyBzaW11bHRhbmVvdXNseSAtIHJldHVybmluZyB0aGUgZmlyc3QgbWF0Y2guICBJdCBkb2VzXG4gICAgdGhpcyBieSBjcmVhdGluZyBhIGh1Z2UgKGF8YnxjKSByZWdleCAtIGVhY2ggaW5kaXZpZHVhbCBpdGVtIHdyYXBwZWQgd2l0aCAoKVxuICAgIGFuZCBqb2luZWQgYnkgYHxgIC0gdXNpbmcgbWF0Y2ggZ3JvdXBzIHRvIHRyYWNrIHBvc2l0aW9uLiAgV2hlbiBhIG1hdGNoIGlzXG4gICAgZm91bmQgY2hlY2tpbmcgd2hpY2ggcG9zaXRpb24gaW4gdGhlIGFycmF5IGhhcyBjb250ZW50IGFsbG93cyB1cyB0byBmaWd1cmVcbiAgICBvdXQgd2hpY2ggb2YgdGhlIG9yaWdpbmFsIHJlZ2V4ZXMgLyBtYXRjaCBncm91cHMgdHJpZ2dlcmVkIHRoZSBtYXRjaC5cblxuICAgIFRoZSBtYXRjaCBvYmplY3QgaXRzZWxmICh0aGUgcmVzdWx0IG9mIGBSZWdleC5leGVjYCkgaXMgcmV0dXJuZWQgYnV0IGFsc29cbiAgICBlbmhhbmNlZCBieSBtZXJnaW5nIGluIGFueSBtZXRhLWRhdGEgdGhhdCB3YXMgcmVnaXN0ZXJlZCB3aXRoIHRoZSByZWdleC5cbiAgICBUaGlzIGlzIGhvdyB3ZSBrZWVwIHRyYWNrIG9mIHdoaWNoIG1vZGUgbWF0Y2hlZCwgYW5kIHdoYXQgdHlwZSBvZiBydWxlXG4gICAgKGBpbGxlZ2FsYCwgYGJlZ2luYCwgZW5kLCBldGMpLlxuICAqL1xuICBjbGFzcyBNdWx0aVJlZ2V4IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHRoaXMubWF0Y2hJbmRleGVzID0ge307XG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICB0aGlzLnJlZ2V4ZXMgPSBbXTtcbiAgICAgIHRoaXMubWF0Y2hBdCA9IDE7XG4gICAgICB0aGlzLnBvc2l0aW9uID0gMDtcbiAgICB9XG5cbiAgICAvLyBAdHMtaWdub3JlXG4gICAgYWRkUnVsZShyZSwgb3B0cykge1xuICAgICAgb3B0cy5wb3NpdGlvbiA9IHRoaXMucG9zaXRpb24rKztcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIHRoaXMubWF0Y2hJbmRleGVzW3RoaXMubWF0Y2hBdF0gPSBvcHRzO1xuICAgICAgdGhpcy5yZWdleGVzLnB1c2goW29wdHMsIHJlXSk7XG4gICAgICB0aGlzLm1hdGNoQXQgKz0gY291bnRNYXRjaEdyb3VwcyhyZSkgKyAxO1xuICAgIH1cblxuICAgIGNvbXBpbGUoKSB7XG4gICAgICBpZiAodGhpcy5yZWdleGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAvLyBhdm9pZHMgdGhlIG5lZWQgdG8gY2hlY2sgbGVuZ3RoIGV2ZXJ5IHRpbWUgZXhlYyBpcyBjYWxsZWRcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICB0aGlzLmV4ZWMgPSAoKSA9PiBudWxsO1xuICAgICAgfVxuICAgICAgY29uc3QgdGVybWluYXRvcnMgPSB0aGlzLnJlZ2V4ZXMubWFwKGVsID0+IGVsWzFdKTtcbiAgICAgIHRoaXMubWF0Y2hlclJlID0gbGFuZ1JlKGpvaW4odGVybWluYXRvcnMpLCB0cnVlKTtcbiAgICAgIHRoaXMubGFzdEluZGV4ID0gMDtcbiAgICB9XG5cbiAgICAvKiogQHBhcmFtIHtzdHJpbmd9IHMgKi9cbiAgICBleGVjKHMpIHtcbiAgICAgIHRoaXMubWF0Y2hlclJlLmxhc3RJbmRleCA9IHRoaXMubGFzdEluZGV4O1xuICAgICAgY29uc3QgbWF0Y2ggPSB0aGlzLm1hdGNoZXJSZS5leGVjKHMpO1xuICAgICAgaWYgKCFtYXRjaCkgeyByZXR1cm4gbnVsbDsgfVxuXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZpbmVkXG4gICAgICBjb25zdCBpID0gbWF0Y2guZmluZEluZGV4KChlbCwgaSkgPT4gaSA+IDAgJiYgZWwgIT09IHVuZGVmaW5lZCk7XG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICBjb25zdCBtYXRjaERhdGEgPSB0aGlzLm1hdGNoSW5kZXhlc1tpXTtcbiAgICAgIC8vIHRyaW0gb2ZmIGFueSBlYXJsaWVyIG5vbi1yZWxldmFudCBtYXRjaCBncm91cHMgKGllLCB0aGUgb3RoZXIgcmVnZXhcbiAgICAgIC8vIG1hdGNoIGdyb3VwcyB0aGF0IG1ha2UgdXAgdGhlIG11bHRpLW1hdGNoZXIpXG4gICAgICBtYXRjaC5zcGxpY2UoMCwgaSk7XG5cbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKG1hdGNoLCBtYXRjaERhdGEpO1xuICAgIH1cbiAgfVxuXG4gIC8qXG4gICAgQ3JlYXRlZCB0byBzb2x2ZSB0aGUga2V5IGRlZmljaWVudGx5IHdpdGggTXVsdGlSZWdleCAtIHRoZXJlIGlzIG5vIHdheSB0b1xuICAgIHRlc3QgZm9yIG11bHRpcGxlIG1hdGNoZXMgYXQgYSBzaW5nbGUgbG9jYXRpb24uICBXaHkgd291bGQgd2UgbmVlZCB0byBkb1xuICAgIHRoYXQ/ICBJbiB0aGUgZnV0dXJlIGEgbW9yZSBkeW5hbWljIGVuZ2luZSB3aWxsIGFsbG93IGNlcnRhaW4gbWF0Y2hlcyB0byBiZVxuICAgIGlnbm9yZWQuICBBbiBleGFtcGxlOiBpZiB3ZSBtYXRjaGVkIHNheSB0aGUgM3JkIHJlZ2V4IGluIGEgbGFyZ2UgZ3JvdXAgYnV0XG4gICAgZGVjaWRlZCB0byBpZ25vcmUgaXQgLSB3ZSdkIG5lZWQgdG8gc3RhcnRlZCB0ZXN0aW5nIGFnYWluIGF0IHRoZSA0dGhcbiAgICByZWdleC4uLiBidXQgTXVsdGlSZWdleCBpdHNlbGYgZ2l2ZXMgdXMgbm8gcmVhbCB3YXkgdG8gZG8gdGhhdC5cblxuICAgIFNvIHdoYXQgdGhpcyBjbGFzcyBjcmVhdGVzIE11bHRpUmVnZXhzIG9uIHRoZSBmbHkgZm9yIHdoYXRldmVyIHNlYXJjaFxuICAgIHBvc2l0aW9uIHRoZXkgYXJlIG5lZWRlZC5cblxuICAgIE5PVEU6IFRoZXNlIGFkZGl0aW9uYWwgTXVsdGlSZWdleCBvYmplY3RzIGFyZSBjcmVhdGVkIGR5bmFtaWNhbGx5LiAgRm9yIG1vc3RcbiAgICBncmFtbWFycyBtb3N0IG9mIHRoZSB0aW1lIHdlIHdpbGwgbmV2ZXIgYWN0dWFsbHkgbmVlZCBhbnl0aGluZyBtb3JlIHRoYW4gdGhlXG4gICAgZmlyc3QgTXVsdGlSZWdleCAtIHNvIHRoaXMgc2hvdWxkbid0IGhhdmUgdG9vIG11Y2ggb3ZlcmhlYWQuXG5cbiAgICBTYXkgdGhpcyBpcyBvdXIgc2VhcmNoIGdyb3VwLCBhbmQgd2UgbWF0Y2ggcmVnZXgzLCBidXQgd2lzaCB0byBpZ25vcmUgaXQuXG5cbiAgICAgIHJlZ2V4MSB8IHJlZ2V4MiB8IHJlZ2V4MyB8IHJlZ2V4NCB8IHJlZ2V4NSAgICAnIGllLCBzdGFydEF0ID0gMFxuXG4gICAgV2hhdCB3ZSBuZWVkIGlzIGEgbmV3IE11bHRpUmVnZXggdGhhdCBvbmx5IGluY2x1ZGVzIHRoZSByZW1haW5pbmdcbiAgICBwb3NzaWJpbGl0aWVzOlxuXG4gICAgICByZWdleDQgfCByZWdleDUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJyBpZSwgc3RhcnRBdCA9IDNcblxuICAgIFRoaXMgY2xhc3Mgd3JhcHMgYWxsIHRoYXQgY29tcGxleGl0eSB1cCBpbiBhIHNpbXBsZSBBUEkuLi4gYHN0YXJ0QXRgIGRlY2lkZXNcbiAgICB3aGVyZSBpbiB0aGUgYXJyYXkgb2YgZXhwcmVzc2lvbnMgdG8gc3RhcnQgZG9pbmcgdGhlIG1hdGNoaW5nLiBJdFxuICAgIGF1dG8taW5jcmVtZW50cywgc28gaWYgYSBtYXRjaCBpcyBmb3VuZCBhdCBwb3NpdGlvbiAyLCB0aGVuIHN0YXJ0QXQgd2lsbCBiZVxuICAgIHNldCB0byAzLiAgSWYgdGhlIGVuZCBpcyByZWFjaGVkIHN0YXJ0QXQgd2lsbCByZXR1cm4gdG8gMC5cblxuICAgIE1PU1Qgb2YgdGhlIHRpbWUgdGhlIHBhcnNlciB3aWxsIGJlIHNldHRpbmcgc3RhcnRBdCBtYW51YWxseSB0byAwLlxuICAqL1xuICBjbGFzcyBSZXN1bWFibGVNdWx0aVJlZ2V4IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIHRoaXMucnVsZXMgPSBbXTtcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIHRoaXMubXVsdGlSZWdleGVzID0gW107XG4gICAgICB0aGlzLmNvdW50ID0gMDtcblxuICAgICAgdGhpcy5sYXN0SW5kZXggPSAwO1xuICAgICAgdGhpcy5yZWdleEluZGV4ID0gMDtcbiAgICB9XG5cbiAgICAvLyBAdHMtaWdub3JlXG4gICAgZ2V0TWF0Y2hlcihpbmRleCkge1xuICAgICAgaWYgKHRoaXMubXVsdGlSZWdleGVzW2luZGV4XSkgcmV0dXJuIHRoaXMubXVsdGlSZWdleGVzW2luZGV4XTtcblxuICAgICAgY29uc3QgbWF0Y2hlciA9IG5ldyBNdWx0aVJlZ2V4KCk7XG4gICAgICB0aGlzLnJ1bGVzLnNsaWNlKGluZGV4KS5mb3JFYWNoKChbcmUsIG9wdHNdKSA9PiBtYXRjaGVyLmFkZFJ1bGUocmUsIG9wdHMpKTtcbiAgICAgIG1hdGNoZXIuY29tcGlsZSgpO1xuICAgICAgdGhpcy5tdWx0aVJlZ2V4ZXNbaW5kZXhdID0gbWF0Y2hlcjtcbiAgICAgIHJldHVybiBtYXRjaGVyO1xuICAgIH1cblxuICAgIHJlc3VtaW5nU2NhbkF0U2FtZVBvc2l0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMucmVnZXhJbmRleCAhPT0gMDtcbiAgICB9XG5cbiAgICBjb25zaWRlckFsbCgpIHtcbiAgICAgIHRoaXMucmVnZXhJbmRleCA9IDA7XG4gICAgfVxuXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGFkZFJ1bGUocmUsIG9wdHMpIHtcbiAgICAgIHRoaXMucnVsZXMucHVzaChbcmUsIG9wdHNdKTtcbiAgICAgIGlmIChvcHRzLnR5cGUgPT09IFwiYmVnaW5cIikgdGhpcy5jb3VudCsrO1xuICAgIH1cblxuICAgIC8qKiBAcGFyYW0ge3N0cmluZ30gcyAqL1xuICAgIGV4ZWMocykge1xuICAgICAgY29uc3QgbSA9IHRoaXMuZ2V0TWF0Y2hlcih0aGlzLnJlZ2V4SW5kZXgpO1xuICAgICAgbS5sYXN0SW5kZXggPSB0aGlzLmxhc3RJbmRleDtcbiAgICAgIGxldCByZXN1bHQgPSBtLmV4ZWMocyk7XG5cbiAgICAgIC8vIFRoZSBmb2xsb3dpbmcgaXMgYmVjYXVzZSB3ZSBoYXZlIG5vIGVhc3kgd2F5IHRvIHNheSBcInJlc3VtZSBzY2FubmluZyBhdCB0aGVcbiAgICAgIC8vIGV4aXN0aW5nIHBvc2l0aW9uIGJ1dCBhbHNvIHNraXAgdGhlIGN1cnJlbnQgcnVsZSBPTkxZXCIuIFdoYXQgaGFwcGVucyBpc1xuICAgICAgLy8gYWxsIHByaW9yIHJ1bGVzIGFyZSBhbHNvIHNraXBwZWQgd2hpY2ggY2FuIHJlc3VsdCBpbiBtYXRjaGluZyB0aGUgd3JvbmdcbiAgICAgIC8vIHRoaW5nLiBFeGFtcGxlIG9mIG1hdGNoaW5nIFwiYm9vZ2VyXCI6XG5cbiAgICAgIC8vIG91ciBtYXRjaGVyIGlzIFtzdHJpbmcsIFwiYm9vZ2VyXCIsIG51bWJlcl1cbiAgICAgIC8vXG4gICAgICAvLyAuLi4uYm9vZ2VyLi4uLlxuXG4gICAgICAvLyBpZiBcImJvb2dlclwiIGlzIGlnbm9yZWQgdGhlbiB3ZSdkIHJlYWxseSBuZWVkIGEgcmVnZXggdG8gc2NhbiBmcm9tIHRoZVxuICAgICAgLy8gU0FNRSBwb3NpdGlvbiBmb3Igb25seTogW3N0cmluZywgbnVtYmVyXSBidXQgaWdub3JpbmcgXCJib29nZXJcIiAoaWYgaXRcbiAgICAgIC8vIHdhcyB0aGUgZmlyc3QgbWF0Y2gpLCBhIHNpbXBsZSByZXN1bWUgd291bGQgc2NhbiBhaGVhZCB3aG8ga25vd3MgaG93XG4gICAgICAvLyBmYXIgbG9va2luZyBvbmx5IGZvciBcIm51bWJlclwiLCBpZ25vcmluZyBwb3RlbnRpYWwgc3RyaW5nIG1hdGNoZXMgKG9yXG4gICAgICAvLyBmdXR1cmUgXCJib29nZXJcIiBtYXRjaGVzIHRoYXQgbWlnaHQgYmUgdmFsaWQuKVxuXG4gICAgICAvLyBTbyB3aGF0IHdlIGRvOiBXZSBleGVjdXRlIHR3byBtYXRjaGVycywgb25lIHJlc3VtaW5nIGF0IHRoZSBzYW1lXG4gICAgICAvLyBwb3NpdGlvbiwgYnV0IHRoZSBzZWNvbmQgZnVsbCBtYXRjaGVyIHN0YXJ0aW5nIGF0IHRoZSBwb3NpdGlvbiBhZnRlcjpcblxuICAgICAgLy8gICAgIC8tLS0gcmVzdW1lIGZpcnN0IHJlZ2V4IG1hdGNoIGhlcmUgKGZvciBbbnVtYmVyXSlcbiAgICAgIC8vICAgICB8Ly0tLS0gZnVsbCBtYXRjaCBoZXJlIGZvciBbc3RyaW5nLCBcImJvb2dlclwiLCBudW1iZXJdXG4gICAgICAvLyAgICAgdnZcbiAgICAgIC8vIC4uLi5ib29nZXIuLi4uXG5cbiAgICAgIC8vIFdoaWNoIGV2ZXIgcmVzdWx0cyBpbiBhIG1hdGNoIGZpcnN0IGlzIHRoZW4gdXNlZC4gU28gdGhpcyAzLTQgc3RlcFxuICAgICAgLy8gcHJvY2VzcyBlc3NlbnRpYWxseSBhbGxvd3MgdXMgdG8gc2F5IFwibWF0Y2ggYXQgdGhpcyBwb3NpdGlvbiwgZXhjbHVkaW5nXG4gICAgICAvLyBhIHByaW9yIHJ1bGUgdGhhdCB3YXMgaWdub3JlZFwiLlxuICAgICAgLy9cbiAgICAgIC8vIDEuIE1hdGNoIFwiYm9vZ2VyXCIgZmlyc3QsIGlnbm9yZS4gQWxzbyBwcm92ZXMgdGhhdCBbc3RyaW5nXSBkb2VzIG5vbiBtYXRjaC5cbiAgICAgIC8vIDIuIFJlc3VtZSBtYXRjaGluZyBmb3IgW251bWJlcl1cbiAgICAgIC8vIDMuIE1hdGNoIGF0IGluZGV4ICsgMSBmb3IgW3N0cmluZywgXCJib29nZXJcIiwgbnVtYmVyXVxuICAgICAgLy8gNC4gSWYgIzIgYW5kICMzIHJlc3VsdCBpbiBtYXRjaGVzLCB3aGljaCBjYW1lIGZpcnN0P1xuICAgICAgaWYgKHRoaXMucmVzdW1pbmdTY2FuQXRTYW1lUG9zaXRpb24oKSkge1xuICAgICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC5pbmRleCA9PT0gdGhpcy5sYXN0SW5kZXgpIDsgZWxzZSB7IC8vIHVzZSB0aGUgc2Vjb25kIG1hdGNoZXIgcmVzdWx0XG4gICAgICAgICAgY29uc3QgbTIgPSB0aGlzLmdldE1hdGNoZXIoMCk7XG4gICAgICAgICAgbTIubGFzdEluZGV4ID0gdGhpcy5sYXN0SW5kZXggKyAxO1xuICAgICAgICAgIHJlc3VsdCA9IG0yLmV4ZWMocyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICB0aGlzLnJlZ2V4SW5kZXggKz0gcmVzdWx0LnBvc2l0aW9uICsgMTtcbiAgICAgICAgaWYgKHRoaXMucmVnZXhJbmRleCA9PT0gdGhpcy5jb3VudCkge1xuICAgICAgICAgIC8vIHdyYXAtYXJvdW5kIHRvIGNvbnNpZGVyaW5nIGFsbCBtYXRjaGVzIGFnYWluXG4gICAgICAgICAgdGhpcy5jb25zaWRlckFsbCgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEdpdmVuIGEgbW9kZSwgYnVpbGRzIGEgaHVnZSBSZXN1bWFibGVNdWx0aVJlZ2V4IHRoYXQgY2FuIGJlIHVzZWQgdG8gd2Fsa1xuICAgKiB0aGUgY29udGVudCBhbmQgZmluZCBtYXRjaGVzLlxuICAgKlxuICAgKiBAcGFyYW0ge0NvbXBpbGVkTW9kZX0gbW9kZVxuICAgKiBAcmV0dXJucyB7UmVzdW1hYmxlTXVsdGlSZWdleH1cbiAgICovXG4gIGZ1bmN0aW9uIGJ1aWxkTW9kZVJlZ2V4KG1vZGUpIHtcbiAgICBjb25zdCBtbSA9IG5ldyBSZXN1bWFibGVNdWx0aVJlZ2V4KCk7XG5cbiAgICBtb2RlLmNvbnRhaW5zLmZvckVhY2godGVybSA9PiBtbS5hZGRSdWxlKHRlcm0uYmVnaW4sIHsgcnVsZTogdGVybSwgdHlwZTogXCJiZWdpblwiIH0pKTtcblxuICAgIGlmIChtb2RlLnRlcm1pbmF0b3JFbmQpIHtcbiAgICAgIG1tLmFkZFJ1bGUobW9kZS50ZXJtaW5hdG9yRW5kLCB7IHR5cGU6IFwiZW5kXCIgfSk7XG4gICAgfVxuICAgIGlmIChtb2RlLmlsbGVnYWwpIHtcbiAgICAgIG1tLmFkZFJ1bGUobW9kZS5pbGxlZ2FsLCB7IHR5cGU6IFwiaWxsZWdhbFwiIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBtbTtcbiAgfVxuXG4gIC8qKiBza2lwIHZzIGFib3J0IHZzIGlnbm9yZVxuICAgKlxuICAgKiBAc2tpcCAgIC0gVGhlIG1vZGUgaXMgc3RpbGwgZW50ZXJlZCBhbmQgZXhpdGVkIG5vcm1hbGx5IChhbmQgY29udGFpbnMgcnVsZXMgYXBwbHkpLFxuICAgKiAgICAgICAgICAgYnV0IGFsbCBjb250ZW50IGlzIGhlbGQgYW5kIGFkZGVkIHRvIHRoZSBwYXJlbnQgYnVmZmVyIHJhdGhlciB0aGFuIGJlaW5nXG4gICAqICAgICAgICAgICBvdXRwdXQgd2hlbiB0aGUgbW9kZSBlbmRzLiAgTW9zdGx5IHVzZWQgd2l0aCBgc3VibGFuZ3VhZ2VgIHRvIGJ1aWxkIHVwXG4gICAqICAgICAgICAgICBhIHNpbmdsZSBsYXJnZSBidWZmZXIgdGhhbiBjYW4gYmUgcGFyc2VkIGJ5IHN1Ymxhbmd1YWdlLlxuICAgKlxuICAgKiAgICAgICAgICAgICAtIFRoZSBtb2RlIGJlZ2luIGFuZHMgZW5kcyBub3JtYWxseS5cbiAgICogICAgICAgICAgICAgLSBDb250ZW50IG1hdGNoZWQgaXMgYWRkZWQgdG8gdGhlIHBhcmVudCBtb2RlIGJ1ZmZlci5cbiAgICogICAgICAgICAgICAgLSBUaGUgcGFyc2VyIGN1cnNvciBpcyBtb3ZlZCBmb3J3YXJkIG5vcm1hbGx5LlxuICAgKlxuICAgKiBAYWJvcnQgIC0gQSBoYWNrIHBsYWNlaG9sZGVyIHVudGlsIHdlIGhhdmUgaWdub3JlLiAgQWJvcnRzIHRoZSBtb2RlIChhcyBpZiBpdFxuICAgKiAgICAgICAgICAgbmV2ZXIgbWF0Y2hlZCkgYnV0IERPRVMgTk9UIGNvbnRpbnVlIHRvIG1hdGNoIHN1YnNlcXVlbnQgYGNvbnRhaW5zYFxuICAgKiAgICAgICAgICAgbW9kZXMuICBBYm9ydCBpcyBiYWQvc3Vib3B0aW1hbCBiZWNhdXNlIGl0IGNhbiByZXN1bHQgaW4gbW9kZXNcbiAgICogICAgICAgICAgIGZhcnRoZXIgZG93biBub3QgZ2V0dGluZyBhcHBsaWVkIGJlY2F1c2UgYW4gZWFybGllciBydWxlIGVhdHMgdGhlXG4gICAqICAgICAgICAgICBjb250ZW50IGJ1dCB0aGVuIGFib3J0cy5cbiAgICpcbiAgICogICAgICAgICAgICAgLSBUaGUgbW9kZSBkb2VzIG5vdCBiZWdpbi5cbiAgICogICAgICAgICAgICAgLSBDb250ZW50IG1hdGNoZWQgYnkgYGJlZ2luYCBpcyBhZGRlZCB0byB0aGUgbW9kZSBidWZmZXIuXG4gICAqICAgICAgICAgICAgIC0gVGhlIHBhcnNlciBjdXJzb3IgaXMgbW92ZWQgZm9yd2FyZCBhY2NvcmRpbmdseS5cbiAgICpcbiAgICogQGlnbm9yZSAtIElnbm9yZXMgdGhlIG1vZGUgKGFzIGlmIGl0IG5ldmVyIG1hdGNoZWQpIGFuZCBjb250aW51ZXMgdG8gbWF0Y2ggYW55XG4gICAqICAgICAgICAgICBzdWJzZXF1ZW50IGBjb250YWluc2AgbW9kZXMuICBJZ25vcmUgaXNuJ3QgdGVjaG5pY2FsbHkgcG9zc2libGUgd2l0aFxuICAgKiAgICAgICAgICAgdGhlIGN1cnJlbnQgcGFyc2VyIGltcGxlbWVudGF0aW9uLlxuICAgKlxuICAgKiAgICAgICAgICAgICAtIFRoZSBtb2RlIGRvZXMgbm90IGJlZ2luLlxuICAgKiAgICAgICAgICAgICAtIENvbnRlbnQgbWF0Y2hlZCBieSBgYmVnaW5gIGlzIGlnbm9yZWQuXG4gICAqICAgICAgICAgICAgIC0gVGhlIHBhcnNlciBjdXJzb3IgaXMgbm90IG1vdmVkIGZvcndhcmQuXG4gICAqL1xuXG4gIC8qKlxuICAgKiBDb21waWxlcyBhbiBpbmRpdmlkdWFsIG1vZGVcbiAgICpcbiAgICogVGhpcyBjYW4gcmFpc2UgYW4gZXJyb3IgaWYgdGhlIG1vZGUgY29udGFpbnMgY2VydGFpbiBkZXRlY3RhYmxlIGtub3duIGxvZ2ljXG4gICAqIGlzc3Vlcy5cbiAgICogQHBhcmFtIHtNb2RlfSBtb2RlXG4gICAqIEBwYXJhbSB7Q29tcGlsZWRNb2RlIHwgbnVsbH0gW3BhcmVudF1cbiAgICogQHJldHVybnMge0NvbXBpbGVkTW9kZSB8IG5ldmVyfVxuICAgKi9cbiAgZnVuY3Rpb24gY29tcGlsZU1vZGUobW9kZSwgcGFyZW50KSB7XG4gICAgY29uc3QgY21vZGUgPSAvKiogQHR5cGUgQ29tcGlsZWRNb2RlICovIChtb2RlKTtcbiAgICBpZiAobW9kZS5pc0NvbXBpbGVkKSByZXR1cm4gY21vZGU7XG5cbiAgICBbXG4gICAgICAvLyBkbyB0aGlzIGVhcmx5IHNvIGNvbXBpbGVyIGV4dGVuc2lvbnMgZ2VuZXJhbGx5IGRvbid0IGhhdmUgdG8gd29ycnkgYWJvdXRcbiAgICAgIC8vIHRoZSBkaXN0aW5jdGlvbiBiZXR3ZWVuIG1hdGNoL2JlZ2luXG4gICAgICBjb21waWxlTWF0Y2hcbiAgICBdLmZvckVhY2goZXh0ID0+IGV4dChtb2RlLCBwYXJlbnQpKTtcblxuICAgIGxhbmd1YWdlLmNvbXBpbGVyRXh0ZW5zaW9ucy5mb3JFYWNoKGV4dCA9PiBleHQobW9kZSwgcGFyZW50KSk7XG5cbiAgICAvLyBfX2JlZm9yZUJlZ2luIGlzIGNvbnNpZGVyZWQgcHJpdmF0ZSBBUEksIGludGVybmFsIHVzZSBvbmx5XG4gICAgbW9kZS5fX2JlZm9yZUJlZ2luID0gbnVsbDtcblxuICAgIFtcbiAgICAgIGJlZ2luS2V5d29yZHMsXG4gICAgICAvLyBkbyB0aGlzIGxhdGVyIHNvIGNvbXBpbGVyIGV4dGVuc2lvbnMgdGhhdCBjb21lIGVhcmxpZXIgaGF2ZSBhY2Nlc3MgdG8gdGhlXG4gICAgICAvLyByYXcgYXJyYXkgaWYgdGhleSB3YW50ZWQgdG8gcGVyaGFwcyBtYW5pcHVsYXRlIGl0LCBldGMuXG4gICAgICBjb21waWxlSWxsZWdhbCxcbiAgICAgIC8vIGRlZmF1bHQgdG8gMSByZWxldmFuY2UgaWYgbm90IHNwZWNpZmllZFxuICAgICAgY29tcGlsZVJlbGV2YW5jZVxuICAgIF0uZm9yRWFjaChleHQgPT4gZXh0KG1vZGUsIHBhcmVudCkpO1xuXG4gICAgbW9kZS5pc0NvbXBpbGVkID0gdHJ1ZTtcblxuICAgIGxldCBrZXl3b3JkUGF0dGVybiA9IG51bGw7XG4gICAgaWYgKHR5cGVvZiBtb2RlLmtleXdvcmRzID09PSBcIm9iamVjdFwiKSB7XG4gICAgICBrZXl3b3JkUGF0dGVybiA9IG1vZGUua2V5d29yZHMuJHBhdHRlcm47XG4gICAgICBkZWxldGUgbW9kZS5rZXl3b3Jkcy4kcGF0dGVybjtcbiAgICB9XG5cbiAgICBpZiAobW9kZS5rZXl3b3Jkcykge1xuICAgICAgbW9kZS5rZXl3b3JkcyA9IGNvbXBpbGVLZXl3b3Jkcyhtb2RlLmtleXdvcmRzLCBsYW5ndWFnZS5jYXNlX2luc2Vuc2l0aXZlKTtcbiAgICB9XG5cbiAgICAvLyBib3RoIGFyZSBub3QgYWxsb3dlZFxuICAgIGlmIChtb2RlLmxleGVtZXMgJiYga2V5d29yZFBhdHRlcm4pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkVSUjogUHJlZmVyIGBrZXl3b3Jkcy4kcGF0dGVybmAgdG8gYG1vZGUubGV4ZW1lc2AsIEJPVEggYXJlIG5vdCBhbGxvd2VkLiAoc2VlIG1vZGUgcmVmZXJlbmNlKSBcIik7XG4gICAgfVxuXG4gICAgLy8gYG1vZGUubGV4ZW1lc2Agd2FzIHRoZSBvbGQgc3RhbmRhcmQgYmVmb3JlIHdlIGFkZGVkIGFuZCBub3cgcmVjb21tZW5kXG4gICAgLy8gdXNpbmcgYGtleXdvcmRzLiRwYXR0ZXJuYCB0byBwYXNzIHRoZSBrZXl3b3JkIHBhdHRlcm5cbiAgICBrZXl3b3JkUGF0dGVybiA9IGtleXdvcmRQYXR0ZXJuIHx8IG1vZGUubGV4ZW1lcyB8fCAvXFx3Ky87XG4gICAgY21vZGUua2V5d29yZFBhdHRlcm5SZSA9IGxhbmdSZShrZXl3b3JkUGF0dGVybiwgdHJ1ZSk7XG5cbiAgICBpZiAocGFyZW50KSB7XG4gICAgICBpZiAoIW1vZGUuYmVnaW4pIG1vZGUuYmVnaW4gPSAvXFxCfFxcYi87XG4gICAgICBjbW9kZS5iZWdpblJlID0gbGFuZ1JlKG1vZGUuYmVnaW4pO1xuICAgICAgaWYgKG1vZGUuZW5kU2FtZUFzQmVnaW4pIG1vZGUuZW5kID0gbW9kZS5iZWdpbjtcbiAgICAgIGlmICghbW9kZS5lbmQgJiYgIW1vZGUuZW5kc1dpdGhQYXJlbnQpIG1vZGUuZW5kID0gL1xcQnxcXGIvO1xuICAgICAgaWYgKG1vZGUuZW5kKSBjbW9kZS5lbmRSZSA9IGxhbmdSZShtb2RlLmVuZCk7XG4gICAgICBjbW9kZS50ZXJtaW5hdG9yRW5kID0gc291cmNlKG1vZGUuZW5kKSB8fCAnJztcbiAgICAgIGlmIChtb2RlLmVuZHNXaXRoUGFyZW50ICYmIHBhcmVudC50ZXJtaW5hdG9yRW5kKSB7XG4gICAgICAgIGNtb2RlLnRlcm1pbmF0b3JFbmQgKz0gKG1vZGUuZW5kID8gJ3wnIDogJycpICsgcGFyZW50LnRlcm1pbmF0b3JFbmQ7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChtb2RlLmlsbGVnYWwpIGNtb2RlLmlsbGVnYWxSZSA9IGxhbmdSZSgvKiogQHR5cGUge1JlZ0V4cCB8IHN0cmluZ30gKi8gKG1vZGUuaWxsZWdhbCkpO1xuICAgIGlmICghbW9kZS5jb250YWlucykgbW9kZS5jb250YWlucyA9IFtdO1xuXG4gICAgbW9kZS5jb250YWlucyA9IFtdLmNvbmNhdCguLi5tb2RlLmNvbnRhaW5zLm1hcChmdW5jdGlvbihjKSB7XG4gICAgICByZXR1cm4gZXhwYW5kT3JDbG9uZU1vZGUoYyA9PT0gJ3NlbGYnID8gbW9kZSA6IGMpO1xuICAgIH0pKTtcbiAgICBtb2RlLmNvbnRhaW5zLmZvckVhY2goZnVuY3Rpb24oYykgeyBjb21waWxlTW9kZSgvKiogQHR5cGUgTW9kZSAqLyAoYyksIGNtb2RlKTsgfSk7XG5cbiAgICBpZiAobW9kZS5zdGFydHMpIHtcbiAgICAgIGNvbXBpbGVNb2RlKG1vZGUuc3RhcnRzLCBwYXJlbnQpO1xuICAgIH1cblxuICAgIGNtb2RlLm1hdGNoZXIgPSBidWlsZE1vZGVSZWdleChjbW9kZSk7XG4gICAgcmV0dXJuIGNtb2RlO1xuICB9XG5cbiAgaWYgKCFsYW5ndWFnZS5jb21waWxlckV4dGVuc2lvbnMpIGxhbmd1YWdlLmNvbXBpbGVyRXh0ZW5zaW9ucyA9IFtdO1xuXG4gIC8vIHNlbGYgaXMgbm90IHZhbGlkIGF0IHRoZSB0b3AtbGV2ZWxcbiAgaWYgKGxhbmd1YWdlLmNvbnRhaW5zICYmIGxhbmd1YWdlLmNvbnRhaW5zLmluY2x1ZGVzKCdzZWxmJykpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJFUlI6IGNvbnRhaW5zIGBzZWxmYCBpcyBub3Qgc3VwcG9ydGVkIGF0IHRoZSB0b3AtbGV2ZWwgb2YgYSBsYW5ndWFnZS4gIFNlZSBkb2N1bWVudGF0aW9uLlwiKTtcbiAgfVxuXG4gIC8vIHdlIG5lZWQgYSBudWxsIG9iamVjdCwgd2hpY2ggaW5oZXJpdCB3aWxsIGd1YXJhbnRlZVxuICBsYW5ndWFnZS5jbGFzc05hbWVBbGlhc2VzID0gaW5oZXJpdChsYW5ndWFnZS5jbGFzc05hbWVBbGlhc2VzIHx8IHt9KTtcblxuICByZXR1cm4gY29tcGlsZU1vZGUoLyoqIEB0eXBlIE1vZGUgKi8gKGxhbmd1YWdlKSk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyBpZiBhIG1vZGUgaGFzIGEgZGVwZW5kZW5jeSBvbiBpdCdzIHBhcmVudCBvciBub3RcbiAqXG4gKiBJZiBhIG1vZGUgZG9lcyBoYXZlIGEgcGFyZW50IGRlcGVuZGVuY3kgdGhlbiBvZnRlbiB3ZSBuZWVkIHRvIGNsb25lIGl0IGlmXG4gKiBpdCdzIHVzZWQgaW4gbXVsdGlwbGUgcGxhY2VzIHNvIHRoYXQgZWFjaCBjb3B5IHBvaW50cyB0byB0aGUgY29ycmVjdCBwYXJlbnQsXG4gKiB3aGVyZS1hcyBtb2RlcyB3aXRob3V0IGEgcGFyZW50IGNhbiBvZnRlbiBzYWZlbHkgYmUgcmUtdXNlZCBhdCB0aGUgYm90dG9tIG9mXG4gKiBhIG1vZGUgY2hhaW4uXG4gKlxuICogQHBhcmFtIHtNb2RlIHwgbnVsbH0gbW9kZVxuICogQHJldHVybnMge2Jvb2xlYW59IC0gaXMgdGhlcmUgYSBkZXBlbmRlbmN5IG9uIHRoZSBwYXJlbnQ/XG4gKiAqL1xuZnVuY3Rpb24gZGVwZW5kZW5jeU9uUGFyZW50KG1vZGUpIHtcbiAgaWYgKCFtb2RlKSByZXR1cm4gZmFsc2U7XG5cbiAgcmV0dXJuIG1vZGUuZW5kc1dpdGhQYXJlbnQgfHwgZGVwZW5kZW5jeU9uUGFyZW50KG1vZGUuc3RhcnRzKTtcbn1cblxuLyoqXG4gKiBFeHBhbmRzIGEgbW9kZSBvciBjbG9uZXMgaXQgaWYgbmVjZXNzYXJ5XG4gKlxuICogVGhpcyBpcyBuZWNlc3NhcnkgZm9yIG1vZGVzIHdpdGggcGFyZW50YWwgZGVwZW5kZW5jZWlzIChzZWUgbm90ZXMgb25cbiAqIGBkZXBlbmRlbmN5T25QYXJlbnRgKSBhbmQgZm9yIG5vZGVzIHRoYXQgaGF2ZSBgdmFyaWFudHNgIC0gd2hpY2ggbXVzdCB0aGVuIGJlXG4gKiBleHBsb2RlZCBpbnRvIHRoZWlyIG93biBpbmRpdmlkdWFsIG1vZGVzIGF0IGNvbXBpbGUgdGltZS5cbiAqXG4gKiBAcGFyYW0ge01vZGV9IG1vZGVcbiAqIEByZXR1cm5zIHtNb2RlIHwgTW9kZVtdfVxuICogKi9cbmZ1bmN0aW9uIGV4cGFuZE9yQ2xvbmVNb2RlKG1vZGUpIHtcbiAgaWYgKG1vZGUudmFyaWFudHMgJiYgIW1vZGUuY2FjaGVkVmFyaWFudHMpIHtcbiAgICBtb2RlLmNhY2hlZFZhcmlhbnRzID0gbW9kZS52YXJpYW50cy5tYXAoZnVuY3Rpb24odmFyaWFudCkge1xuICAgICAgcmV0dXJuIGluaGVyaXQobW9kZSwgeyB2YXJpYW50czogbnVsbCB9LCB2YXJpYW50KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIEVYUEFORFxuICAvLyBpZiB3ZSBoYXZlIHZhcmlhbnRzIHRoZW4gZXNzZW50aWFsbHkgXCJyZXBsYWNlXCIgdGhlIG1vZGUgd2l0aCB0aGUgdmFyaWFudHNcbiAgLy8gdGhpcyBoYXBwZW5zIGluIGNvbXBpbGVNb2RlLCB3aGVyZSB0aGlzIGZ1bmN0aW9uIGlzIGNhbGxlZCBmcm9tXG4gIGlmIChtb2RlLmNhY2hlZFZhcmlhbnRzKSB7XG4gICAgcmV0dXJuIG1vZGUuY2FjaGVkVmFyaWFudHM7XG4gIH1cblxuICAvLyBDTE9ORVxuICAvLyBpZiB3ZSBoYXZlIGRlcGVuZGVuY2llcyBvbiBwYXJlbnRzIHRoZW4gd2UgbmVlZCBhIHVuaXF1ZVxuICAvLyBpbnN0YW5jZSBvZiBvdXJzZWx2ZXMsIHNvIHdlIGNhbiBiZSByZXVzZWQgd2l0aCBtYW55XG4gIC8vIGRpZmZlcmVudCBwYXJlbnRzIHdpdGhvdXQgaXNzdWVcbiAgaWYgKGRlcGVuZGVuY3lPblBhcmVudChtb2RlKSkge1xuICAgIHJldHVybiBpbmhlcml0KG1vZGUsIHsgc3RhcnRzOiBtb2RlLnN0YXJ0cyA/IGluaGVyaXQobW9kZS5zdGFydHMpIDogbnVsbCB9KTtcbiAgfVxuXG4gIGlmIChPYmplY3QuaXNGcm96ZW4obW9kZSkpIHtcbiAgICByZXR1cm4gaW5oZXJpdChtb2RlKTtcbiAgfVxuXG4gIC8vIG5vIHNwZWNpYWwgZGVwZW5kZW5jeSBpc3N1ZXMsIGp1c3QgcmV0dXJuIG91cnNlbHZlc1xuICByZXR1cm4gbW9kZTtcbn1cblxudmFyIHZlcnNpb24gPSBcIjEwLjcuM1wiO1xuXG4vLyBAdHMtbm9jaGVja1xuXG5mdW5jdGlvbiBoYXNWYWx1ZU9yRW1wdHlBdHRyaWJ1dGUodmFsdWUpIHtcbiAgcmV0dXJuIEJvb2xlYW4odmFsdWUgfHwgdmFsdWUgPT09IFwiXCIpO1xufVxuXG5mdW5jdGlvbiBCdWlsZFZ1ZVBsdWdpbihobGpzKSB7XG4gIGNvbnN0IENvbXBvbmVudCA9IHtcbiAgICBwcm9wczogW1wibGFuZ3VhZ2VcIiwgXCJjb2RlXCIsIFwiYXV0b2RldGVjdFwiXSxcbiAgICBkYXRhOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGRldGVjdGVkTGFuZ3VhZ2U6IFwiXCIsXG4gICAgICAgIHVua25vd25MYW5ndWFnZTogZmFsc2VcbiAgICAgIH07XG4gICAgfSxcbiAgICBjb21wdXRlZDoge1xuICAgICAgY2xhc3NOYW1lKCkge1xuICAgICAgICBpZiAodGhpcy51bmtub3duTGFuZ3VhZ2UpIHJldHVybiBcIlwiO1xuXG4gICAgICAgIHJldHVybiBcImhsanMgXCIgKyB0aGlzLmRldGVjdGVkTGFuZ3VhZ2U7XG4gICAgICB9LFxuICAgICAgaGlnaGxpZ2h0ZWQoKSB7XG4gICAgICAgIC8vIG5vIGlkZWEgd2hhdCBsYW5ndWFnZSB0byB1c2UsIHJldHVybiByYXcgY29kZVxuICAgICAgICBpZiAoIXRoaXMuYXV0b0RldGVjdCAmJiAhaGxqcy5nZXRMYW5ndWFnZSh0aGlzLmxhbmd1YWdlKSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihgVGhlIGxhbmd1YWdlIFwiJHt0aGlzLmxhbmd1YWdlfVwiIHlvdSBzcGVjaWZpZWQgY291bGQgbm90IGJlIGZvdW5kLmApO1xuICAgICAgICAgIHRoaXMudW5rbm93bkxhbmd1YWdlID0gdHJ1ZTtcbiAgICAgICAgICByZXR1cm4gZXNjYXBlSFRNTCh0aGlzLmNvZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHJlc3VsdCA9IHt9O1xuICAgICAgICBpZiAodGhpcy5hdXRvRGV0ZWN0KSB7XG4gICAgICAgICAgcmVzdWx0ID0gaGxqcy5oaWdobGlnaHRBdXRvKHRoaXMuY29kZSk7XG4gICAgICAgICAgdGhpcy5kZXRlY3RlZExhbmd1YWdlID0gcmVzdWx0Lmxhbmd1YWdlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc3VsdCA9IGhsanMuaGlnaGxpZ2h0KHRoaXMubGFuZ3VhZ2UsIHRoaXMuY29kZSwgdGhpcy5pZ25vcmVJbGxlZ2Fscyk7XG4gICAgICAgICAgdGhpcy5kZXRlY3RlZExhbmd1YWdlID0gdGhpcy5sYW5ndWFnZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0LnZhbHVlO1xuICAgICAgfSxcbiAgICAgIGF1dG9EZXRlY3QoKSB7XG4gICAgICAgIHJldHVybiAhdGhpcy5sYW5ndWFnZSB8fCBoYXNWYWx1ZU9yRW1wdHlBdHRyaWJ1dGUodGhpcy5hdXRvZGV0ZWN0KTtcbiAgICAgIH0sXG4gICAgICBpZ25vcmVJbGxlZ2FscygpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSxcbiAgICAvLyB0aGlzIGF2b2lkcyBuZWVkaW5nIHRvIHVzZSBhIHdob2xlIFZ1ZSBjb21waWxhdGlvbiBwaXBlbGluZSBqdXN0XG4gICAgLy8gdG8gYnVpbGQgSGlnaGxpZ2h0LmpzXG4gICAgcmVuZGVyKGNyZWF0ZUVsZW1lbnQpIHtcbiAgICAgIHJldHVybiBjcmVhdGVFbGVtZW50KFwicHJlXCIsIHt9LCBbXG4gICAgICAgIGNyZWF0ZUVsZW1lbnQoXCJjb2RlXCIsIHtcbiAgICAgICAgICBjbGFzczogdGhpcy5jbGFzc05hbWUsXG4gICAgICAgICAgZG9tUHJvcHM6IHsgaW5uZXJIVE1MOiB0aGlzLmhpZ2hsaWdodGVkIH1cbiAgICAgICAgfSlcbiAgICAgIF0pO1xuICAgIH1cbiAgICAvLyB0ZW1wbGF0ZTogYDxwcmU+PGNvZGUgOmNsYXNzPVwiY2xhc3NOYW1lXCIgdi1odG1sPVwiaGlnaGxpZ2h0ZWRcIj48L2NvZGU+PC9wcmU+YFxuICB9O1xuXG4gIGNvbnN0IFZ1ZVBsdWdpbiA9IHtcbiAgICBpbnN0YWxsKFZ1ZSkge1xuICAgICAgVnVlLmNvbXBvbmVudCgnaGlnaGxpZ2h0anMnLCBDb21wb25lbnQpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4geyBDb21wb25lbnQsIFZ1ZVBsdWdpbiB9O1xufVxuXG4vKiBwbHVnaW4gaXRzZWxmICovXG5cbi8qKiBAdHlwZSB7SExKU1BsdWdpbn0gKi9cbmNvbnN0IG1lcmdlSFRNTFBsdWdpbiA9IHtcbiAgXCJhZnRlcjpoaWdobGlnaHRFbGVtZW50XCI6ICh7IGVsLCByZXN1bHQsIHRleHQgfSkgPT4ge1xuICAgIGNvbnN0IG9yaWdpbmFsU3RyZWFtID0gbm9kZVN0cmVhbShlbCk7XG4gICAgaWYgKCFvcmlnaW5hbFN0cmVhbS5sZW5ndGgpIHJldHVybjtcblxuICAgIGNvbnN0IHJlc3VsdE5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICByZXN1bHROb2RlLmlubmVySFRNTCA9IHJlc3VsdC52YWx1ZTtcbiAgICByZXN1bHQudmFsdWUgPSBtZXJnZVN0cmVhbXMob3JpZ2luYWxTdHJlYW0sIG5vZGVTdHJlYW0ocmVzdWx0Tm9kZSksIHRleHQpO1xuICB9XG59O1xuXG4vKiBTdHJlYW0gbWVyZ2luZyBzdXBwb3J0IGZ1bmN0aW9ucyAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIEV2ZW50XG4gKiBAcHJvcGVydHkgeydzdGFydCd8J3N0b3AnfSBldmVudFxuICogQHByb3BlcnR5IHtudW1iZXJ9IG9mZnNldFxuICogQHByb3BlcnR5IHtOb2RlfSBub2RlXG4gKi9cblxuLyoqXG4gKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAqL1xuZnVuY3Rpb24gdGFnKG5vZGUpIHtcbiAgcmV0dXJuIG5vZGUubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAqL1xuZnVuY3Rpb24gbm9kZVN0cmVhbShub2RlKSB7XG4gIC8qKiBAdHlwZSBFdmVudFtdICovXG4gIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAoZnVuY3Rpb24gX25vZGVTdHJlYW0obm9kZSwgb2Zmc2V0KSB7XG4gICAgZm9yIChsZXQgY2hpbGQgPSBub2RlLmZpcnN0Q2hpbGQ7IGNoaWxkOyBjaGlsZCA9IGNoaWxkLm5leHRTaWJsaW5nKSB7XG4gICAgICBpZiAoY2hpbGQubm9kZVR5cGUgPT09IDMpIHtcbiAgICAgICAgb2Zmc2V0ICs9IGNoaWxkLm5vZGVWYWx1ZS5sZW5ndGg7XG4gICAgICB9IGVsc2UgaWYgKGNoaWxkLm5vZGVUeXBlID09PSAxKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICBldmVudDogJ3N0YXJ0JyxcbiAgICAgICAgICBvZmZzZXQ6IG9mZnNldCxcbiAgICAgICAgICBub2RlOiBjaGlsZFxuICAgICAgICB9KTtcbiAgICAgICAgb2Zmc2V0ID0gX25vZGVTdHJlYW0oY2hpbGQsIG9mZnNldCk7XG4gICAgICAgIC8vIFByZXZlbnQgdm9pZCBlbGVtZW50cyBmcm9tIGhhdmluZyBhbiBlbmQgdGFnIHRoYXQgd291bGQgYWN0dWFsbHlcbiAgICAgICAgLy8gZG91YmxlIHRoZW0gaW4gdGhlIG91dHB1dC4gVGhlcmUgYXJlIG1vcmUgdm9pZCBlbGVtZW50cyBpbiBIVE1MXG4gICAgICAgIC8vIGJ1dCB3ZSBsaXN0IG9ubHkgdGhvc2UgcmVhbGlzdGljYWxseSBleHBlY3RlZCBpbiBjb2RlIGRpc3BsYXkuXG4gICAgICAgIGlmICghdGFnKGNoaWxkKS5tYXRjaCgvYnJ8aHJ8aW1nfGlucHV0LykpIHtcbiAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICBldmVudDogJ3N0b3AnLFxuICAgICAgICAgICAgb2Zmc2V0OiBvZmZzZXQsXG4gICAgICAgICAgICBub2RlOiBjaGlsZFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvZmZzZXQ7XG4gIH0pKG5vZGUsIDApO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEBwYXJhbSB7YW55fSBvcmlnaW5hbCAtIHRoZSBvcmlnaW5hbCBzdHJlYW1cbiAqIEBwYXJhbSB7YW55fSBoaWdobGlnaHRlZCAtIHN0cmVhbSBvZiB0aGUgaGlnaGxpZ2h0ZWQgc291cmNlXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUgLSB0aGUgb3JpZ2luYWwgc291cmNlIGl0c2VsZlxuICovXG5mdW5jdGlvbiBtZXJnZVN0cmVhbXMob3JpZ2luYWwsIGhpZ2hsaWdodGVkLCB2YWx1ZSkge1xuICBsZXQgcHJvY2Vzc2VkID0gMDtcbiAgbGV0IHJlc3VsdCA9ICcnO1xuICBjb25zdCBub2RlU3RhY2sgPSBbXTtcblxuICBmdW5jdGlvbiBzZWxlY3RTdHJlYW0oKSB7XG4gICAgaWYgKCFvcmlnaW5hbC5sZW5ndGggfHwgIWhpZ2hsaWdodGVkLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIG9yaWdpbmFsLmxlbmd0aCA/IG9yaWdpbmFsIDogaGlnaGxpZ2h0ZWQ7XG4gICAgfVxuICAgIGlmIChvcmlnaW5hbFswXS5vZmZzZXQgIT09IGhpZ2hsaWdodGVkWzBdLm9mZnNldCkge1xuICAgICAgcmV0dXJuIChvcmlnaW5hbFswXS5vZmZzZXQgPCBoaWdobGlnaHRlZFswXS5vZmZzZXQpID8gb3JpZ2luYWwgOiBoaWdobGlnaHRlZDtcbiAgICB9XG5cbiAgICAvKlxuICAgIFRvIGF2b2lkIHN0YXJ0aW5nIHRoZSBzdHJlYW0ganVzdCBiZWZvcmUgaXQgc2hvdWxkIHN0b3AgdGhlIG9yZGVyIGlzXG4gICAgZW5zdXJlZCB0aGF0IG9yaWdpbmFsIGFsd2F5cyBzdGFydHMgZmlyc3QgYW5kIGNsb3NlcyBsYXN0OlxuXG4gICAgaWYgKGV2ZW50MSA9PSAnc3RhcnQnICYmIGV2ZW50MiA9PSAnc3RhcnQnKVxuICAgICAgcmV0dXJuIG9yaWdpbmFsO1xuICAgIGlmIChldmVudDEgPT0gJ3N0YXJ0JyAmJiBldmVudDIgPT0gJ3N0b3AnKVxuICAgICAgcmV0dXJuIGhpZ2hsaWdodGVkO1xuICAgIGlmIChldmVudDEgPT0gJ3N0b3AnICYmIGV2ZW50MiA9PSAnc3RhcnQnKVxuICAgICAgcmV0dXJuIG9yaWdpbmFsO1xuICAgIGlmIChldmVudDEgPT0gJ3N0b3AnICYmIGV2ZW50MiA9PSAnc3RvcCcpXG4gICAgICByZXR1cm4gaGlnaGxpZ2h0ZWQ7XG5cbiAgICAuLi4gd2hpY2ggaXMgY29sbGFwc2VkIHRvOlxuICAgICovXG4gICAgcmV0dXJuIGhpZ2hsaWdodGVkWzBdLmV2ZW50ID09PSAnc3RhcnQnID8gb3JpZ2luYWwgOiBoaWdobGlnaHRlZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICovXG4gIGZ1bmN0aW9uIG9wZW4obm9kZSkge1xuICAgIC8qKiBAcGFyYW0ge0F0dHJ9IGF0dHIgKi9cbiAgICBmdW5jdGlvbiBhdHRyaWJ1dGVTdHJpbmcoYXR0cikge1xuICAgICAgcmV0dXJuICcgJyArIGF0dHIubm9kZU5hbWUgKyAnPVwiJyArIGVzY2FwZUhUTUwoYXR0ci52YWx1ZSkgKyAnXCInO1xuICAgIH1cbiAgICAvLyBAdHMtaWdub3JlXG4gICAgcmVzdWx0ICs9ICc8JyArIHRhZyhub2RlKSArIFtdLm1hcC5jYWxsKG5vZGUuYXR0cmlidXRlcywgYXR0cmlidXRlU3RyaW5nKS5qb2luKCcnKSArICc+JztcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAgICovXG4gIGZ1bmN0aW9uIGNsb3NlKG5vZGUpIHtcbiAgICByZXN1bHQgKz0gJzwvJyArIHRhZyhub2RlKSArICc+JztcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuICAgKi9cbiAgZnVuY3Rpb24gcmVuZGVyKGV2ZW50KSB7XG4gICAgKGV2ZW50LmV2ZW50ID09PSAnc3RhcnQnID8gb3BlbiA6IGNsb3NlKShldmVudC5ub2RlKTtcbiAgfVxuXG4gIHdoaWxlIChvcmlnaW5hbC5sZW5ndGggfHwgaGlnaGxpZ2h0ZWQubGVuZ3RoKSB7XG4gICAgbGV0IHN0cmVhbSA9IHNlbGVjdFN0cmVhbSgpO1xuICAgIHJlc3VsdCArPSBlc2NhcGVIVE1MKHZhbHVlLnN1YnN0cmluZyhwcm9jZXNzZWQsIHN0cmVhbVswXS5vZmZzZXQpKTtcbiAgICBwcm9jZXNzZWQgPSBzdHJlYW1bMF0ub2Zmc2V0O1xuICAgIGlmIChzdHJlYW0gPT09IG9yaWdpbmFsKSB7XG4gICAgICAvKlxuICAgICAgT24gYW55IG9wZW5pbmcgb3IgY2xvc2luZyB0YWcgb2YgdGhlIG9yaWdpbmFsIG1hcmt1cCB3ZSBmaXJzdCBjbG9zZVxuICAgICAgdGhlIGVudGlyZSBoaWdobGlnaHRlZCBub2RlIHN0YWNrLCB0aGVuIHJlbmRlciB0aGUgb3JpZ2luYWwgdGFnIGFsb25nXG4gICAgICB3aXRoIGFsbCB0aGUgZm9sbG93aW5nIG9yaWdpbmFsIHRhZ3MgYXQgdGhlIHNhbWUgb2Zmc2V0IGFuZCB0aGVuXG4gICAgICByZW9wZW4gYWxsIHRoZSB0YWdzIG9uIHRoZSBoaWdobGlnaHRlZCBzdGFjay5cbiAgICAgICovXG4gICAgICBub2RlU3RhY2sucmV2ZXJzZSgpLmZvckVhY2goY2xvc2UpO1xuICAgICAgZG8ge1xuICAgICAgICByZW5kZXIoc3RyZWFtLnNwbGljZSgwLCAxKVswXSk7XG4gICAgICAgIHN0cmVhbSA9IHNlbGVjdFN0cmVhbSgpO1xuICAgICAgfSB3aGlsZSAoc3RyZWFtID09PSBvcmlnaW5hbCAmJiBzdHJlYW0ubGVuZ3RoICYmIHN0cmVhbVswXS5vZmZzZXQgPT09IHByb2Nlc3NlZCk7XG4gICAgICBub2RlU3RhY2sucmV2ZXJzZSgpLmZvckVhY2gob3Blbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChzdHJlYW1bMF0uZXZlbnQgPT09ICdzdGFydCcpIHtcbiAgICAgICAgbm9kZVN0YWNrLnB1c2goc3RyZWFtWzBdLm5vZGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbm9kZVN0YWNrLnBvcCgpO1xuICAgICAgfVxuICAgICAgcmVuZGVyKHN0cmVhbS5zcGxpY2UoMCwgMSlbMF0pO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0ICsgZXNjYXBlSFRNTCh2YWx1ZS5zdWJzdHIocHJvY2Vzc2VkKSk7XG59XG5cbi8qXG5cbkZvciB0aGUgcmVhc29uaW5nIGJlaGluZCB0aGlzIHBsZWFzZSBzZWU6XG5odHRwczovL2dpdGh1Yi5jb20vaGlnaGxpZ2h0anMvaGlnaGxpZ2h0LmpzL2lzc3Vlcy8yODgwI2lzc3VlY29tbWVudC03NDcyNzU0MTlcblxuKi9cblxuLyoqXG4gKiBAdHlwZSB7UmVjb3JkPHN0cmluZywgYm9vbGVhbj59XG4gKi9cbmNvbnN0IHNlZW5EZXByZWNhdGlvbnMgPSB7fTtcblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZVxuICovXG5jb25zdCBlcnJvciA9IChtZXNzYWdlKSA9PiB7XG4gIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlXG4gKiBAcGFyYW0ge2FueX0gYXJnc1xuICovXG5jb25zdCB3YXJuID0gKG1lc3NhZ2UsIC4uLmFyZ3MpID0+IHtcbiAgY29uc29sZS5sb2coYFdBUk46ICR7bWVzc2FnZX1gLCAuLi5hcmdzKTtcbn07XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHZlcnNpb25cbiAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlXG4gKi9cbmNvbnN0IGRlcHJlY2F0ZWQgPSAodmVyc2lvbiwgbWVzc2FnZSkgPT4ge1xuICBpZiAoc2VlbkRlcHJlY2F0aW9uc1tgJHt2ZXJzaW9ufS8ke21lc3NhZ2V9YF0pIHJldHVybjtcblxuICBjb25zb2xlLmxvZyhgRGVwcmVjYXRlZCBhcyBvZiAke3ZlcnNpb259LiAke21lc3NhZ2V9YCk7XG4gIHNlZW5EZXByZWNhdGlvbnNbYCR7dmVyc2lvbn0vJHttZXNzYWdlfWBdID0gdHJ1ZTtcbn07XG5cbi8qXG5TeW50YXggaGlnaGxpZ2h0aW5nIHdpdGggbGFuZ3VhZ2UgYXV0b2RldGVjdGlvbi5cbmh0dHBzOi8vaGlnaGxpZ2h0anMub3JnL1xuKi9cblxuY29uc3QgZXNjYXBlJDEgPSBlc2NhcGVIVE1MO1xuY29uc3QgaW5oZXJpdCQxID0gaW5oZXJpdDtcbmNvbnN0IE5PX01BVENIID0gU3ltYm9sKFwibm9tYXRjaFwiKTtcblxuLyoqXG4gKiBAcGFyYW0ge2FueX0gaGxqcyAtIG9iamVjdCB0aGF0IGlzIGV4dGVuZGVkIChsZWdhY3kpXG4gKiBAcmV0dXJucyB7SExKU0FwaX1cbiAqL1xuY29uc3QgSExKUyA9IGZ1bmN0aW9uKGhsanMpIHtcbiAgLy8gR2xvYmFsIGludGVybmFsIHZhcmlhYmxlcyB1c2VkIHdpdGhpbiB0aGUgaGlnaGxpZ2h0LmpzIGxpYnJhcnkuXG4gIC8qKiBAdHlwZSB7UmVjb3JkPHN0cmluZywgTGFuZ3VhZ2U+fSAqL1xuICBjb25zdCBsYW5ndWFnZXMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAvKiogQHR5cGUge1JlY29yZDxzdHJpbmcsIHN0cmluZz59ICovXG4gIGNvbnN0IGFsaWFzZXMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAvKiogQHR5cGUge0hMSlNQbHVnaW5bXX0gKi9cbiAgY29uc3QgcGx1Z2lucyA9IFtdO1xuXG4gIC8vIHNhZmUvcHJvZHVjdGlvbiBtb2RlIC0gc3dhbGxvd3MgbW9yZSBlcnJvcnMsIHRyaWVzIHRvIGtlZXAgcnVubmluZ1xuICAvLyBldmVuIGlmIGEgc2luZ2xlIHN5bnRheCBvciBwYXJzZSBoaXRzIGEgZmF0YWwgZXJyb3JcbiAgbGV0IFNBRkVfTU9ERSA9IHRydWU7XG4gIGNvbnN0IGZpeE1hcmt1cFJlID0gLyheKDxbXj5dKz58XFx0fCkrfFxcbikvZ207XG4gIGNvbnN0IExBTkdVQUdFX05PVF9GT1VORCA9IFwiQ291bGQgbm90IGZpbmQgdGhlIGxhbmd1YWdlICd7fScsIGRpZCB5b3UgZm9yZ2V0IHRvIGxvYWQvaW5jbHVkZSBhIGxhbmd1YWdlIG1vZHVsZT9cIjtcbiAgLyoqIEB0eXBlIHtMYW5ndWFnZX0gKi9cbiAgY29uc3QgUExBSU5URVhUX0xBTkdVQUdFID0geyBkaXNhYmxlQXV0b2RldGVjdDogdHJ1ZSwgbmFtZTogJ1BsYWluIHRleHQnLCBjb250YWluczogW10gfTtcblxuICAvLyBHbG9iYWwgb3B0aW9ucyB1c2VkIHdoZW4gd2l0aGluIGV4dGVybmFsIEFQSXMuIFRoaXMgaXMgbW9kaWZpZWQgd2hlblxuICAvLyBjYWxsaW5nIHRoZSBgaGxqcy5jb25maWd1cmVgIGZ1bmN0aW9uLlxuICAvKiogQHR5cGUgSExKU09wdGlvbnMgKi9cbiAgbGV0IG9wdGlvbnMgPSB7XG4gICAgbm9IaWdobGlnaHRSZTogL14obm8tP2hpZ2hsaWdodCkkL2ksXG4gICAgbGFuZ3VhZ2VEZXRlY3RSZTogL1xcYmxhbmcoPzp1YWdlKT8tKFtcXHctXSspXFxiL2ksXG4gICAgY2xhc3NQcmVmaXg6ICdobGpzLScsXG4gICAgdGFiUmVwbGFjZTogbnVsbCxcbiAgICB1c2VCUjogZmFsc2UsXG4gICAgbGFuZ3VhZ2VzOiBudWxsLFxuICAgIC8vIGJldGEgY29uZmlndXJhdGlvbiBvcHRpb25zLCBzdWJqZWN0IHRvIGNoYW5nZSwgd2VsY29tZSB0byBkaXNjdXNzXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2hpZ2hsaWdodGpzL2hpZ2hsaWdodC5qcy9pc3N1ZXMvMTA4NlxuICAgIF9fZW1pdHRlcjogVG9rZW5UcmVlRW1pdHRlclxuICB9O1xuXG4gIC8qIFV0aWxpdHkgZnVuY3Rpb25zICovXG5cbiAgLyoqXG4gICAqIFRlc3RzIGEgbGFuZ3VhZ2UgbmFtZSB0byBzZWUgaWYgaGlnaGxpZ2h0aW5nIHNob3VsZCBiZSBza2lwcGVkXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBsYW5ndWFnZU5hbWVcbiAgICovXG4gIGZ1bmN0aW9uIHNob3VsZE5vdEhpZ2hsaWdodChsYW5ndWFnZU5hbWUpIHtcbiAgICByZXR1cm4gb3B0aW9ucy5ub0hpZ2hsaWdodFJlLnRlc3QobGFuZ3VhZ2VOYW1lKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0hpZ2hsaWdodGVkSFRNTEVsZW1lbnR9IGJsb2NrIC0gdGhlIEhUTUwgZWxlbWVudCB0byBkZXRlcm1pbmUgbGFuZ3VhZ2UgZm9yXG4gICAqL1xuICBmdW5jdGlvbiBibG9ja0xhbmd1YWdlKGJsb2NrKSB7XG4gICAgbGV0IGNsYXNzZXMgPSBibG9jay5jbGFzc05hbWUgKyAnICc7XG5cbiAgICBjbGFzc2VzICs9IGJsb2NrLnBhcmVudE5vZGUgPyBibG9jay5wYXJlbnROb2RlLmNsYXNzTmFtZSA6ICcnO1xuXG4gICAgLy8gbGFuZ3VhZ2UtKiB0YWtlcyBwcmVjZWRlbmNlIG92ZXIgbm9uLXByZWZpeGVkIGNsYXNzIG5hbWVzLlxuICAgIGNvbnN0IG1hdGNoID0gb3B0aW9ucy5sYW5ndWFnZURldGVjdFJlLmV4ZWMoY2xhc3Nlcyk7XG4gICAgaWYgKG1hdGNoKSB7XG4gICAgICBjb25zdCBsYW5ndWFnZSA9IGdldExhbmd1YWdlKG1hdGNoWzFdKTtcbiAgICAgIGlmICghbGFuZ3VhZ2UpIHtcbiAgICAgICAgd2FybihMQU5HVUFHRV9OT1RfRk9VTkQucmVwbGFjZShcInt9XCIsIG1hdGNoWzFdKSk7XG4gICAgICAgIHdhcm4oXCJGYWxsaW5nIGJhY2sgdG8gbm8taGlnaGxpZ2h0IG1vZGUgZm9yIHRoaXMgYmxvY2suXCIsIGJsb2NrKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBsYW5ndWFnZSA/IG1hdGNoWzFdIDogJ25vLWhpZ2hsaWdodCc7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNsYXNzZXNcbiAgICAgIC5zcGxpdCgvXFxzKy8pXG4gICAgICAuZmluZCgoX2NsYXNzKSA9PiBzaG91bGROb3RIaWdobGlnaHQoX2NsYXNzKSB8fCBnZXRMYW5ndWFnZShfY2xhc3MpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb3JlIGhpZ2hsaWdodGluZyBmdW5jdGlvbi5cbiAgICpcbiAgICogT0xEIEFQSVxuICAgKiBoaWdobGlnaHQobGFuZywgY29kZSwgaWdub3JlSWxsZWdhbHMsIGNvbnRpbnVhdGlvbilcbiAgICpcbiAgICogTkVXIEFQSVxuICAgKiBoaWdobGlnaHQoY29kZSwge2xhbmcsIGlnbm9yZUlsbGVnYWxzfSlcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNvZGVPcmxhbmd1YWdlTmFtZSAtIHRoZSBsYW5ndWFnZSB0byB1c2UgZm9yIGhpZ2hsaWdodGluZ1xuICAgKiBAcGFyYW0ge3N0cmluZyB8IEhpZ2hsaWdodE9wdGlvbnN9IG9wdGlvbnNPckNvZGUgLSB0aGUgY29kZSB0byBoaWdobGlnaHRcbiAgICogQHBhcmFtIHtib29sZWFufSBbaWdub3JlSWxsZWdhbHNdIC0gd2hldGhlciB0byBpZ25vcmUgaWxsZWdhbCBtYXRjaGVzLCBkZWZhdWx0IGlzIHRvIGJhaWxcbiAgICogQHBhcmFtIHtDb21waWxlZE1vZGV9IFtjb250aW51YXRpb25dIC0gY3VycmVudCBjb250aW51YXRpb24gbW9kZSwgaWYgYW55XG4gICAqXG4gICAqIEByZXR1cm5zIHtIaWdobGlnaHRSZXN1bHR9IFJlc3VsdCAtIGFuIG9iamVjdCB0aGF0IHJlcHJlc2VudHMgdGhlIHJlc3VsdFxuICAgKiBAcHJvcGVydHkge3N0cmluZ30gbGFuZ3VhZ2UgLSB0aGUgbGFuZ3VhZ2UgbmFtZVxuICAgKiBAcHJvcGVydHkge251bWJlcn0gcmVsZXZhbmNlIC0gdGhlIHJlbGV2YW5jZSBzY29yZVxuICAgKiBAcHJvcGVydHkge3N0cmluZ30gdmFsdWUgLSB0aGUgaGlnaGxpZ2h0ZWQgSFRNTCBjb2RlXG4gICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBjb2RlIC0gdGhlIG9yaWdpbmFsIHJhdyBjb2RlXG4gICAqIEBwcm9wZXJ0eSB7Q29tcGlsZWRNb2RlfSB0b3AgLSB0b3Agb2YgdGhlIGN1cnJlbnQgbW9kZSBzdGFja1xuICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGlsbGVnYWwgLSBpbmRpY2F0ZXMgd2hldGhlciBhbnkgaWxsZWdhbCBtYXRjaGVzIHdlcmUgZm91bmRcbiAgKi9cbiAgZnVuY3Rpb24gaGlnaGxpZ2h0KGNvZGVPcmxhbmd1YWdlTmFtZSwgb3B0aW9uc09yQ29kZSwgaWdub3JlSWxsZWdhbHMsIGNvbnRpbnVhdGlvbikge1xuICAgIGxldCBjb2RlID0gXCJcIjtcbiAgICBsZXQgbGFuZ3VhZ2VOYW1lID0gXCJcIjtcbiAgICBpZiAodHlwZW9mIG9wdGlvbnNPckNvZGUgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgIGNvZGUgPSBjb2RlT3JsYW5ndWFnZU5hbWU7XG4gICAgICBpZ25vcmVJbGxlZ2FscyA9IG9wdGlvbnNPckNvZGUuaWdub3JlSWxsZWdhbHM7XG4gICAgICBsYW5ndWFnZU5hbWUgPSBvcHRpb25zT3JDb2RlLmxhbmd1YWdlO1xuICAgICAgLy8gY29udGludWF0aW9uIG5vdCBzdXBwb3J0ZWQgYXQgYWxsIHZpYSB0aGUgbmV3IEFQSVxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmaW5lZFxuICAgICAgY29udGludWF0aW9uID0gdW5kZWZpbmVkO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBvbGQgQVBJXG4gICAgICBkZXByZWNhdGVkKFwiMTAuNy4wXCIsIFwiaGlnaGxpZ2h0KGxhbmcsIGNvZGUsIC4uLmFyZ3MpIGhhcyBiZWVuIGRlcHJlY2F0ZWQuXCIpO1xuICAgICAgZGVwcmVjYXRlZChcIjEwLjcuMFwiLCBcIlBsZWFzZSB1c2UgaGlnaGxpZ2h0KGNvZGUsIG9wdGlvbnMpIGluc3RlYWQuXFxuaHR0cHM6Ly9naXRodWIuY29tL2hpZ2hsaWdodGpzL2hpZ2hsaWdodC5qcy9pc3N1ZXMvMjI3N1wiKTtcbiAgICAgIGxhbmd1YWdlTmFtZSA9IGNvZGVPcmxhbmd1YWdlTmFtZTtcbiAgICAgIGNvZGUgPSBvcHRpb25zT3JDb2RlO1xuICAgIH1cblxuICAgIC8qKiBAdHlwZSB7QmVmb3JlSGlnaGxpZ2h0Q29udGV4dH0gKi9cbiAgICBjb25zdCBjb250ZXh0ID0ge1xuICAgICAgY29kZSxcbiAgICAgIGxhbmd1YWdlOiBsYW5ndWFnZU5hbWVcbiAgICB9O1xuICAgIC8vIHRoZSBwbHVnaW4gY2FuIGNoYW5nZSB0aGUgZGVzaXJlZCBsYW5ndWFnZSBvciB0aGUgY29kZSB0byBiZSBoaWdobGlnaHRlZFxuICAgIC8vIGp1c3QgYmUgY2hhbmdpbmcgdGhlIG9iamVjdCBpdCB3YXMgcGFzc2VkXG4gICAgZmlyZShcImJlZm9yZTpoaWdobGlnaHRcIiwgY29udGV4dCk7XG5cbiAgICAvLyBhIGJlZm9yZSBwbHVnaW4gY2FuIHVzdXJwIHRoZSByZXN1bHQgY29tcGxldGVseSBieSBwcm92aWRpbmcgaXQncyBvd25cbiAgICAvLyBpbiB3aGljaCBjYXNlIHdlIGRvbid0IGV2ZW4gbmVlZCB0byBjYWxsIGhpZ2hsaWdodFxuICAgIGNvbnN0IHJlc3VsdCA9IGNvbnRleHQucmVzdWx0XG4gICAgICA/IGNvbnRleHQucmVzdWx0XG4gICAgICA6IF9oaWdobGlnaHQoY29udGV4dC5sYW5ndWFnZSwgY29udGV4dC5jb2RlLCBpZ25vcmVJbGxlZ2FscywgY29udGludWF0aW9uKTtcblxuICAgIHJlc3VsdC5jb2RlID0gY29udGV4dC5jb2RlO1xuICAgIC8vIHRoZSBwbHVnaW4gY2FuIGNoYW5nZSBhbnl0aGluZyBpbiByZXN1bHQgdG8gc3VpdGUgaXRcbiAgICBmaXJlKFwiYWZ0ZXI6aGlnaGxpZ2h0XCIsIHJlc3VsdCk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLyoqXG4gICAqIHByaXZhdGUgaGlnaGxpZ2h0IHRoYXQncyB1c2VkIGludGVybmFsbHkgYW5kIGRvZXMgbm90IGZpcmUgY2FsbGJhY2tzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBsYW5ndWFnZU5hbWUgLSB0aGUgbGFuZ3VhZ2UgdG8gdXNlIGZvciBoaWdobGlnaHRpbmdcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNvZGVUb0hpZ2hsaWdodCAtIHRoZSBjb2RlIHRvIGhpZ2hsaWdodFxuICAgKiBAcGFyYW0ge2Jvb2xlYW4/fSBbaWdub3JlSWxsZWdhbHNdIC0gd2hldGhlciB0byBpZ25vcmUgaWxsZWdhbCBtYXRjaGVzLCBkZWZhdWx0IGlzIHRvIGJhaWxcbiAgICogQHBhcmFtIHtDb21waWxlZE1vZGU/fSBbY29udGludWF0aW9uXSAtIGN1cnJlbnQgY29udGludWF0aW9uIG1vZGUsIGlmIGFueVxuICAgKiBAcmV0dXJucyB7SGlnaGxpZ2h0UmVzdWx0fSAtIHJlc3VsdCBvZiB0aGUgaGlnaGxpZ2h0IG9wZXJhdGlvblxuICAqL1xuICBmdW5jdGlvbiBfaGlnaGxpZ2h0KGxhbmd1YWdlTmFtZSwgY29kZVRvSGlnaGxpZ2h0LCBpZ25vcmVJbGxlZ2FscywgY29udGludWF0aW9uKSB7XG4gICAgLyoqXG4gICAgICogUmV0dXJuIGtleXdvcmQgZGF0YSBpZiBhIG1hdGNoIGlzIGEga2V5d29yZFxuICAgICAqIEBwYXJhbSB7Q29tcGlsZWRNb2RlfSBtb2RlIC0gY3VycmVudCBtb2RlXG4gICAgICogQHBhcmFtIHtSZWdFeHBNYXRjaEFycmF5fSBtYXRjaCAtIHJlZ2V4cCBtYXRjaCBkYXRhXG4gICAgICogQHJldHVybnMge0tleXdvcmREYXRhIHwgZmFsc2V9XG4gICAgICovXG4gICAgZnVuY3Rpb24ga2V5d29yZERhdGEobW9kZSwgbWF0Y2gpIHtcbiAgICAgIGNvbnN0IG1hdGNoVGV4dCA9IGxhbmd1YWdlLmNhc2VfaW5zZW5zaXRpdmUgPyBtYXRjaFswXS50b0xvd2VyQ2FzZSgpIDogbWF0Y2hbMF07XG4gICAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZGUua2V5d29yZHMsIG1hdGNoVGV4dCkgJiYgbW9kZS5rZXl3b3Jkc1ttYXRjaFRleHRdO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHByb2Nlc3NLZXl3b3JkcygpIHtcbiAgICAgIGlmICghdG9wLmtleXdvcmRzKSB7XG4gICAgICAgIGVtaXR0ZXIuYWRkVGV4dChtb2RlQnVmZmVyKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBsZXQgbGFzdEluZGV4ID0gMDtcbiAgICAgIHRvcC5rZXl3b3JkUGF0dGVyblJlLmxhc3RJbmRleCA9IDA7XG4gICAgICBsZXQgbWF0Y2ggPSB0b3Aua2V5d29yZFBhdHRlcm5SZS5leGVjKG1vZGVCdWZmZXIpO1xuICAgICAgbGV0IGJ1ZiA9IFwiXCI7XG5cbiAgICAgIHdoaWxlIChtYXRjaCkge1xuICAgICAgICBidWYgKz0gbW9kZUJ1ZmZlci5zdWJzdHJpbmcobGFzdEluZGV4LCBtYXRjaC5pbmRleCk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBrZXl3b3JkRGF0YSh0b3AsIG1hdGNoKTtcbiAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICBjb25zdCBba2luZCwga2V5d29yZFJlbGV2YW5jZV0gPSBkYXRhO1xuICAgICAgICAgIGVtaXR0ZXIuYWRkVGV4dChidWYpO1xuICAgICAgICAgIGJ1ZiA9IFwiXCI7XG5cbiAgICAgICAgICByZWxldmFuY2UgKz0ga2V5d29yZFJlbGV2YW5jZTtcbiAgICAgICAgICBpZiAoa2luZC5zdGFydHNXaXRoKFwiX1wiKSkge1xuICAgICAgICAgICAgLy8gXyBpbXBsaWVkIGZvciByZWxldmFuY2Ugb25seSwgZG8gbm90IGhpZ2hsaWdodFxuICAgICAgICAgICAgLy8gYnkgYXBwbHlpbmcgYSBjbGFzcyBuYW1lXG4gICAgICAgICAgICBidWYgKz0gbWF0Y2hbMF07XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGNzc0NsYXNzID0gbGFuZ3VhZ2UuY2xhc3NOYW1lQWxpYXNlc1traW5kXSB8fCBraW5kO1xuICAgICAgICAgICAgZW1pdHRlci5hZGRLZXl3b3JkKG1hdGNoWzBdLCBjc3NDbGFzcyk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGJ1ZiArPSBtYXRjaFswXTtcbiAgICAgICAgfVxuICAgICAgICBsYXN0SW5kZXggPSB0b3Aua2V5d29yZFBhdHRlcm5SZS5sYXN0SW5kZXg7XG4gICAgICAgIG1hdGNoID0gdG9wLmtleXdvcmRQYXR0ZXJuUmUuZXhlYyhtb2RlQnVmZmVyKTtcbiAgICAgIH1cbiAgICAgIGJ1ZiArPSBtb2RlQnVmZmVyLnN1YnN0cihsYXN0SW5kZXgpO1xuICAgICAgZW1pdHRlci5hZGRUZXh0KGJ1Zik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcHJvY2Vzc1N1Ykxhbmd1YWdlKCkge1xuICAgICAgaWYgKG1vZGVCdWZmZXIgPT09IFwiXCIpIHJldHVybjtcbiAgICAgIC8qKiBAdHlwZSBIaWdobGlnaHRSZXN1bHQgKi9cbiAgICAgIGxldCByZXN1bHQgPSBudWxsO1xuXG4gICAgICBpZiAodHlwZW9mIHRvcC5zdWJMYW5ndWFnZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgaWYgKCFsYW5ndWFnZXNbdG9wLnN1Ykxhbmd1YWdlXSkge1xuICAgICAgICAgIGVtaXR0ZXIuYWRkVGV4dChtb2RlQnVmZmVyKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0ID0gX2hpZ2hsaWdodCh0b3Auc3ViTGFuZ3VhZ2UsIG1vZGVCdWZmZXIsIHRydWUsIGNvbnRpbnVhdGlvbnNbdG9wLnN1Ykxhbmd1YWdlXSk7XG4gICAgICAgIGNvbnRpbnVhdGlvbnNbdG9wLnN1Ykxhbmd1YWdlXSA9IC8qKiBAdHlwZSB7Q29tcGlsZWRNb2RlfSAqLyAocmVzdWx0LnRvcCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQgPSBoaWdobGlnaHRBdXRvKG1vZGVCdWZmZXIsIHRvcC5zdWJMYW5ndWFnZS5sZW5ndGggPyB0b3Auc3ViTGFuZ3VhZ2UgOiBudWxsKTtcbiAgICAgIH1cblxuICAgICAgLy8gQ291bnRpbmcgZW1iZWRkZWQgbGFuZ3VhZ2Ugc2NvcmUgdG93YXJkcyB0aGUgaG9zdCBsYW5ndWFnZSBtYXkgYmUgZGlzYWJsZWRcbiAgICAgIC8vIHdpdGggemVyb2luZyB0aGUgY29udGFpbmluZyBtb2RlIHJlbGV2YW5jZS4gVXNlIGNhc2UgaW4gcG9pbnQgaXMgTWFya2Rvd24gdGhhdFxuICAgICAgLy8gYWxsb3dzIFhNTCBldmVyeXdoZXJlIGFuZCBtYWtlcyBldmVyeSBYTUwgc25pcHBldCB0byBoYXZlIGEgbXVjaCBsYXJnZXIgTWFya2Rvd25cbiAgICAgIC8vIHNjb3JlLlxuICAgICAgaWYgKHRvcC5yZWxldmFuY2UgPiAwKSB7XG4gICAgICAgIHJlbGV2YW5jZSArPSByZXN1bHQucmVsZXZhbmNlO1xuICAgICAgfVxuICAgICAgZW1pdHRlci5hZGRTdWJsYW5ndWFnZShyZXN1bHQuZW1pdHRlciwgcmVzdWx0Lmxhbmd1YWdlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwcm9jZXNzQnVmZmVyKCkge1xuICAgICAgaWYgKHRvcC5zdWJMYW5ndWFnZSAhPSBudWxsKSB7XG4gICAgICAgIHByb2Nlc3NTdWJMYW5ndWFnZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJvY2Vzc0tleXdvcmRzKCk7XG4gICAgICB9XG4gICAgICBtb2RlQnVmZmVyID0gJyc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtNb2RlfSBtb2RlIC0gbmV3IG1vZGUgdG8gc3RhcnRcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBzdGFydE5ld01vZGUobW9kZSkge1xuICAgICAgaWYgKG1vZGUuY2xhc3NOYW1lKSB7XG4gICAgICAgIGVtaXR0ZXIub3Blbk5vZGUobGFuZ3VhZ2UuY2xhc3NOYW1lQWxpYXNlc1ttb2RlLmNsYXNzTmFtZV0gfHwgbW9kZS5jbGFzc05hbWUpO1xuICAgICAgfVxuICAgICAgdG9wID0gT2JqZWN0LmNyZWF0ZShtb2RlLCB7IHBhcmVudDogeyB2YWx1ZTogdG9wIH0gfSk7XG4gICAgICByZXR1cm4gdG9wO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7Q29tcGlsZWRNb2RlIH0gbW9kZSAtIHRoZSBtb2RlIHRvIHBvdGVudGlhbGx5IGVuZFxuICAgICAqIEBwYXJhbSB7UmVnRXhwTWF0Y2hBcnJheX0gbWF0Y2ggLSB0aGUgbGF0ZXN0IG1hdGNoXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG1hdGNoUGx1c1JlbWFpbmRlciAtIG1hdGNoIHBsdXMgcmVtYWluZGVyIG9mIGNvbnRlbnRcbiAgICAgKiBAcmV0dXJucyB7Q29tcGlsZWRNb2RlIHwgdm9pZH0gLSB0aGUgbmV4dCBtb2RlLCBvciBpZiB2b2lkIGNvbnRpbnVlIG9uIGluIGN1cnJlbnQgbW9kZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGVuZE9mTW9kZShtb2RlLCBtYXRjaCwgbWF0Y2hQbHVzUmVtYWluZGVyKSB7XG4gICAgICBsZXQgbWF0Y2hlZCA9IHN0YXJ0c1dpdGgobW9kZS5lbmRSZSwgbWF0Y2hQbHVzUmVtYWluZGVyKTtcblxuICAgICAgaWYgKG1hdGNoZWQpIHtcbiAgICAgICAgaWYgKG1vZGVbXCJvbjplbmRcIl0pIHtcbiAgICAgICAgICBjb25zdCByZXNwID0gbmV3IFJlc3BvbnNlKG1vZGUpO1xuICAgICAgICAgIG1vZGVbXCJvbjplbmRcIl0obWF0Y2gsIHJlc3ApO1xuICAgICAgICAgIGlmIChyZXNwLmlzTWF0Y2hJZ25vcmVkKSBtYXRjaGVkID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobWF0Y2hlZCkge1xuICAgICAgICAgIHdoaWxlIChtb2RlLmVuZHNQYXJlbnQgJiYgbW9kZS5wYXJlbnQpIHtcbiAgICAgICAgICAgIG1vZGUgPSBtb2RlLnBhcmVudDtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIG1vZGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIGV2ZW4gaWYgb246ZW5kIGZpcmVzIGFuIGBpZ25vcmVgIGl0J3Mgc3RpbGwgcG9zc2libGVcbiAgICAgIC8vIHRoYXQgd2UgbWlnaHQgdHJpZ2dlciB0aGUgZW5kIG5vZGUgYmVjYXVzZSBvZiBhIHBhcmVudCBtb2RlXG4gICAgICBpZiAobW9kZS5lbmRzV2l0aFBhcmVudCkge1xuICAgICAgICByZXR1cm4gZW5kT2ZNb2RlKG1vZGUucGFyZW50LCBtYXRjaCwgbWF0Y2hQbHVzUmVtYWluZGVyKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGUgbWF0Y2hpbmcgYnV0IHRoZW4gaWdub3JpbmcgYSBzZXF1ZW5jZSBvZiB0ZXh0XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbGV4ZW1lIC0gc3RyaW5nIGNvbnRhaW5pbmcgZnVsbCBtYXRjaCB0ZXh0XG4gICAgICovXG4gICAgZnVuY3Rpb24gZG9JZ25vcmUobGV4ZW1lKSB7XG4gICAgICBpZiAodG9wLm1hdGNoZXIucmVnZXhJbmRleCA9PT0gMCkge1xuICAgICAgICAvLyBubyBtb3JlIHJlZ2V4cyB0byBwb3RlbnRpYWxseSBtYXRjaCBoZXJlLCBzbyB3ZSBtb3ZlIHRoZSBjdXJzb3IgZm9yd2FyZCBvbmVcbiAgICAgICAgLy8gc3BhY2VcbiAgICAgICAgbW9kZUJ1ZmZlciArPSBsZXhlbWVbMF07XG4gICAgICAgIHJldHVybiAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gbm8gbmVlZCB0byBtb3ZlIHRoZSBjdXJzb3IsIHdlIHN0aWxsIGhhdmUgYWRkaXRpb25hbCByZWdleGVzIHRvIHRyeSBhbmRcbiAgICAgICAgLy8gbWF0Y2ggYXQgdGhpcyB2ZXJ5IHNwb3RcbiAgICAgICAgcmVzdW1lU2NhbkF0U2FtZVBvc2l0aW9uID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlIHRoZSBzdGFydCBvZiBhIG5ldyBwb3RlbnRpYWwgbW9kZSBtYXRjaFxuICAgICAqXG4gICAgICogQHBhcmFtIHtFbmhhbmNlZE1hdGNofSBtYXRjaCAtIHRoZSBjdXJyZW50IG1hdGNoXG4gICAgICogQHJldHVybnMge251bWJlcn0gaG93IGZhciB0byBhZHZhbmNlIHRoZSBwYXJzZSBjdXJzb3JcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBkb0JlZ2luTWF0Y2gobWF0Y2gpIHtcbiAgICAgIGNvbnN0IGxleGVtZSA9IG1hdGNoWzBdO1xuICAgICAgY29uc3QgbmV3TW9kZSA9IG1hdGNoLnJ1bGU7XG5cbiAgICAgIGNvbnN0IHJlc3AgPSBuZXcgUmVzcG9uc2UobmV3TW9kZSk7XG4gICAgICAvLyBmaXJzdCBpbnRlcm5hbCBiZWZvcmUgY2FsbGJhY2tzLCB0aGVuIHRoZSBwdWJsaWMgb25lc1xuICAgICAgY29uc3QgYmVmb3JlQ2FsbGJhY2tzID0gW25ld01vZGUuX19iZWZvcmVCZWdpbiwgbmV3TW9kZVtcIm9uOmJlZ2luXCJdXTtcbiAgICAgIGZvciAoY29uc3QgY2Igb2YgYmVmb3JlQ2FsbGJhY2tzKSB7XG4gICAgICAgIGlmICghY2IpIGNvbnRpbnVlO1xuICAgICAgICBjYihtYXRjaCwgcmVzcCk7XG4gICAgICAgIGlmIChyZXNwLmlzTWF0Y2hJZ25vcmVkKSByZXR1cm4gZG9JZ25vcmUobGV4ZW1lKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5ld01vZGUgJiYgbmV3TW9kZS5lbmRTYW1lQXNCZWdpbikge1xuICAgICAgICBuZXdNb2RlLmVuZFJlID0gZXNjYXBlKGxleGVtZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZXdNb2RlLnNraXApIHtcbiAgICAgICAgbW9kZUJ1ZmZlciArPSBsZXhlbWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAobmV3TW9kZS5leGNsdWRlQmVnaW4pIHtcbiAgICAgICAgICBtb2RlQnVmZmVyICs9IGxleGVtZTtcbiAgICAgICAgfVxuICAgICAgICBwcm9jZXNzQnVmZmVyKCk7XG4gICAgICAgIGlmICghbmV3TW9kZS5yZXR1cm5CZWdpbiAmJiAhbmV3TW9kZS5leGNsdWRlQmVnaW4pIHtcbiAgICAgICAgICBtb2RlQnVmZmVyID0gbGV4ZW1lO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBzdGFydE5ld01vZGUobmV3TW9kZSk7XG4gICAgICAvLyBpZiAobW9kZVtcImFmdGVyOmJlZ2luXCJdKSB7XG4gICAgICAvLyAgIGxldCByZXNwID0gbmV3IFJlc3BvbnNlKG1vZGUpO1xuICAgICAgLy8gICBtb2RlW1wiYWZ0ZXI6YmVnaW5cIl0obWF0Y2gsIHJlc3ApO1xuICAgICAgLy8gfVxuICAgICAgcmV0dXJuIG5ld01vZGUucmV0dXJuQmVnaW4gPyAwIDogbGV4ZW1lLmxlbmd0aDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGUgdGhlIHBvdGVudGlhbCBlbmQgb2YgbW9kZVxuICAgICAqXG4gICAgICogQHBhcmFtIHtSZWdFeHBNYXRjaEFycmF5fSBtYXRjaCAtIHRoZSBjdXJyZW50IG1hdGNoXG4gICAgICovXG4gICAgZnVuY3Rpb24gZG9FbmRNYXRjaChtYXRjaCkge1xuICAgICAgY29uc3QgbGV4ZW1lID0gbWF0Y2hbMF07XG4gICAgICBjb25zdCBtYXRjaFBsdXNSZW1haW5kZXIgPSBjb2RlVG9IaWdobGlnaHQuc3Vic3RyKG1hdGNoLmluZGV4KTtcblxuICAgICAgY29uc3QgZW5kTW9kZSA9IGVuZE9mTW9kZSh0b3AsIG1hdGNoLCBtYXRjaFBsdXNSZW1haW5kZXIpO1xuICAgICAgaWYgKCFlbmRNb2RlKSB7IHJldHVybiBOT19NQVRDSDsgfVxuXG4gICAgICBjb25zdCBvcmlnaW4gPSB0b3A7XG4gICAgICBpZiAob3JpZ2luLnNraXApIHtcbiAgICAgICAgbW9kZUJ1ZmZlciArPSBsZXhlbWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoIShvcmlnaW4ucmV0dXJuRW5kIHx8IG9yaWdpbi5leGNsdWRlRW5kKSkge1xuICAgICAgICAgIG1vZGVCdWZmZXIgKz0gbGV4ZW1lO1xuICAgICAgICB9XG4gICAgICAgIHByb2Nlc3NCdWZmZXIoKTtcbiAgICAgICAgaWYgKG9yaWdpbi5leGNsdWRlRW5kKSB7XG4gICAgICAgICAgbW9kZUJ1ZmZlciA9IGxleGVtZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZG8ge1xuICAgICAgICBpZiAodG9wLmNsYXNzTmFtZSkge1xuICAgICAgICAgIGVtaXR0ZXIuY2xvc2VOb2RlKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0b3Auc2tpcCAmJiAhdG9wLnN1Ykxhbmd1YWdlKSB7XG4gICAgICAgICAgcmVsZXZhbmNlICs9IHRvcC5yZWxldmFuY2U7XG4gICAgICAgIH1cbiAgICAgICAgdG9wID0gdG9wLnBhcmVudDtcbiAgICAgIH0gd2hpbGUgKHRvcCAhPT0gZW5kTW9kZS5wYXJlbnQpO1xuICAgICAgaWYgKGVuZE1vZGUuc3RhcnRzKSB7XG4gICAgICAgIGlmIChlbmRNb2RlLmVuZFNhbWVBc0JlZ2luKSB7XG4gICAgICAgICAgZW5kTW9kZS5zdGFydHMuZW5kUmUgPSBlbmRNb2RlLmVuZFJlO1xuICAgICAgICB9XG4gICAgICAgIHN0YXJ0TmV3TW9kZShlbmRNb2RlLnN0YXJ0cyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gb3JpZ2luLnJldHVybkVuZCA/IDAgOiBsZXhlbWUubGVuZ3RoO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHByb2Nlc3NDb250aW51YXRpb25zKCkge1xuICAgICAgY29uc3QgbGlzdCA9IFtdO1xuICAgICAgZm9yIChsZXQgY3VycmVudCA9IHRvcDsgY3VycmVudCAhPT0gbGFuZ3VhZ2U7IGN1cnJlbnQgPSBjdXJyZW50LnBhcmVudCkge1xuICAgICAgICBpZiAoY3VycmVudC5jbGFzc05hbWUpIHtcbiAgICAgICAgICBsaXN0LnVuc2hpZnQoY3VycmVudC5jbGFzc05hbWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LmZvckVhY2goaXRlbSA9PiBlbWl0dGVyLm9wZW5Ob2RlKGl0ZW0pKTtcbiAgICB9XG5cbiAgICAvKiogQHR5cGUge3t0eXBlPzogTWF0Y2hUeXBlLCBpbmRleD86IG51bWJlciwgcnVsZT86IE1vZGV9fX0gKi9cbiAgICBsZXQgbGFzdE1hdGNoID0ge307XG5cbiAgICAvKipcbiAgICAgKiAgUHJvY2VzcyBhbiBpbmRpdmlkdWFsIG1hdGNoXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dEJlZm9yZU1hdGNoIC0gdGV4dCBwcmVjZWVkaW5nIHRoZSBtYXRjaCAoc2luY2UgdGhlIGxhc3QgbWF0Y2gpXG4gICAgICogQHBhcmFtIHtFbmhhbmNlZE1hdGNofSBbbWF0Y2hdIC0gdGhlIG1hdGNoIGl0c2VsZlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHByb2Nlc3NMZXhlbWUodGV4dEJlZm9yZU1hdGNoLCBtYXRjaCkge1xuICAgICAgY29uc3QgbGV4ZW1lID0gbWF0Y2ggJiYgbWF0Y2hbMF07XG5cbiAgICAgIC8vIGFkZCBub24tbWF0Y2hlZCB0ZXh0IHRvIHRoZSBjdXJyZW50IG1vZGUgYnVmZmVyXG4gICAgICBtb2RlQnVmZmVyICs9IHRleHRCZWZvcmVNYXRjaDtcblxuICAgICAgaWYgKGxleGVtZSA9PSBudWxsKSB7XG4gICAgICAgIHByb2Nlc3NCdWZmZXIoKTtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgICB9XG5cbiAgICAgIC8vIHdlJ3ZlIGZvdW5kIGEgMCB3aWR0aCBtYXRjaCBhbmQgd2UncmUgc3R1Y2ssIHNvIHdlIG5lZWQgdG8gYWR2YW5jZVxuICAgICAgLy8gdGhpcyBoYXBwZW5zIHdoZW4gd2UgaGF2ZSBiYWRseSBiZWhhdmVkIHJ1bGVzIHRoYXQgaGF2ZSBvcHRpb25hbCBtYXRjaGVycyB0byB0aGUgZGVncmVlIHRoYXRcbiAgICAgIC8vIHNvbWV0aW1lcyB0aGV5IGNhbiBlbmQgdXAgbWF0Y2hpbmcgbm90aGluZyBhdCBhbGxcbiAgICAgIC8vIFJlZjogaHR0cHM6Ly9naXRodWIuY29tL2hpZ2hsaWdodGpzL2hpZ2hsaWdodC5qcy9pc3N1ZXMvMjE0MFxuICAgICAgaWYgKGxhc3RNYXRjaC50eXBlID09PSBcImJlZ2luXCIgJiYgbWF0Y2gudHlwZSA9PT0gXCJlbmRcIiAmJiBsYXN0TWF0Y2guaW5kZXggPT09IG1hdGNoLmluZGV4ICYmIGxleGVtZSA9PT0gXCJcIikge1xuICAgICAgICAvLyBzcGl0IHRoZSBcInNraXBwZWRcIiBjaGFyYWN0ZXIgdGhhdCBvdXIgcmVnZXggY2hva2VkIG9uIGJhY2sgaW50byB0aGUgb3V0cHV0IHNlcXVlbmNlXG4gICAgICAgIG1vZGVCdWZmZXIgKz0gY29kZVRvSGlnaGxpZ2h0LnNsaWNlKG1hdGNoLmluZGV4LCBtYXRjaC5pbmRleCArIDEpO1xuICAgICAgICBpZiAoIVNBRkVfTU9ERSkge1xuICAgICAgICAgIC8qKiBAdHlwZSB7QW5ub3RhdGVkRXJyb3J9ICovXG4gICAgICAgICAgY29uc3QgZXJyID0gbmV3IEVycm9yKCcwIHdpZHRoIG1hdGNoIHJlZ2V4Jyk7XG4gICAgICAgICAgZXJyLmxhbmd1YWdlTmFtZSA9IGxhbmd1YWdlTmFtZTtcbiAgICAgICAgICBlcnIuYmFkUnVsZSA9IGxhc3RNYXRjaC5ydWxlO1xuICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMTtcbiAgICAgIH1cbiAgICAgIGxhc3RNYXRjaCA9IG1hdGNoO1xuXG4gICAgICBpZiAobWF0Y2gudHlwZSA9PT0gXCJiZWdpblwiKSB7XG4gICAgICAgIHJldHVybiBkb0JlZ2luTWF0Y2gobWF0Y2gpO1xuICAgICAgfSBlbHNlIGlmIChtYXRjaC50eXBlID09PSBcImlsbGVnYWxcIiAmJiAhaWdub3JlSWxsZWdhbHMpIHtcbiAgICAgICAgLy8gaWxsZWdhbCBtYXRjaCwgd2UgZG8gbm90IGNvbnRpbnVlIHByb2Nlc3NpbmdcbiAgICAgICAgLyoqIEB0eXBlIHtBbm5vdGF0ZWRFcnJvcn0gKi9cbiAgICAgICAgY29uc3QgZXJyID0gbmV3IEVycm9yKCdJbGxlZ2FsIGxleGVtZSBcIicgKyBsZXhlbWUgKyAnXCIgZm9yIG1vZGUgXCInICsgKHRvcC5jbGFzc05hbWUgfHwgJzx1bm5hbWVkPicpICsgJ1wiJyk7XG4gICAgICAgIGVyci5tb2RlID0gdG9wO1xuICAgICAgICB0aHJvdyBlcnI7XG4gICAgICB9IGVsc2UgaWYgKG1hdGNoLnR5cGUgPT09IFwiZW5kXCIpIHtcbiAgICAgICAgY29uc3QgcHJvY2Vzc2VkID0gZG9FbmRNYXRjaChtYXRjaCk7XG4gICAgICAgIGlmIChwcm9jZXNzZWQgIT09IE5PX01BVENIKSB7XG4gICAgICAgICAgcmV0dXJuIHByb2Nlc3NlZDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBlZGdlIGNhc2UgZm9yIHdoZW4gaWxsZWdhbCBtYXRjaGVzICQgKGVuZCBvZiBsaW5lKSB3aGljaCBpcyB0ZWNobmljYWxseVxuICAgICAgLy8gYSAwIHdpZHRoIG1hdGNoIGJ1dCBub3QgYSBiZWdpbi9lbmQgbWF0Y2ggc28gaXQncyBub3QgY2F1Z2h0IGJ5IHRoZVxuICAgICAgLy8gZmlyc3QgaGFuZGxlciAod2hlbiBpZ25vcmVJbGxlZ2FscyBpcyB0cnVlKVxuICAgICAgaWYgKG1hdGNoLnR5cGUgPT09IFwiaWxsZWdhbFwiICYmIGxleGVtZSA9PT0gXCJcIikge1xuICAgICAgICAvLyBhZHZhbmNlIHNvIHdlIGFyZW4ndCBzdHVjayBpbiBhbiBpbmZpbml0ZSBsb29wXG4gICAgICAgIHJldHVybiAxO1xuICAgICAgfVxuXG4gICAgICAvLyBpbmZpbml0ZSBsb29wcyBhcmUgQkFELCB0aGlzIGlzIGEgbGFzdCBkaXRjaCBjYXRjaCBhbGwuIGlmIHdlIGhhdmUgYVxuICAgICAgLy8gZGVjZW50IG51bWJlciBvZiBpdGVyYXRpb25zIHlldCBvdXIgaW5kZXggKGN1cnNvciBwb3NpdGlvbiBpbiBvdXJcbiAgICAgIC8vIHBhcnNpbmcpIHN0aWxsIDN4IGJlaGluZCBvdXIgaW5kZXggdGhlbiBzb21ldGhpbmcgaXMgdmVyeSB3cm9uZ1xuICAgICAgLy8gc28gd2UgYmFpbFxuICAgICAgaWYgKGl0ZXJhdGlvbnMgPiAxMDAwMDAgJiYgaXRlcmF0aW9ucyA+IG1hdGNoLmluZGV4ICogMykge1xuICAgICAgICBjb25zdCBlcnIgPSBuZXcgRXJyb3IoJ3BvdGVudGlhbCBpbmZpbml0ZSBsb29wLCB3YXkgbW9yZSBpdGVyYXRpb25zIHRoYW4gbWF0Y2hlcycpO1xuICAgICAgICB0aHJvdyBlcnI7XG4gICAgICB9XG5cbiAgICAgIC8qXG4gICAgICBXaHkgbWlnaHQgYmUgZmluZCBvdXJzZWx2ZXMgaGVyZT8gIE9ubHkgb25lIG9jY2FzaW9uIG5vdy4gIEFuIGVuZCBtYXRjaCB0aGF0IHdhc1xuICAgICAgdHJpZ2dlcmVkIGJ1dCBjb3VsZCBub3QgYmUgY29tcGxldGVkLiAgV2hlbiBtaWdodCB0aGlzIGhhcHBlbj8gIFdoZW4gYW4gYGVuZFNhbWVhc0JlZ2luYFxuICAgICAgcnVsZSBzZXRzIHRoZSBlbmQgcnVsZSB0byBhIHNwZWNpZmljIG1hdGNoLiAgU2luY2UgdGhlIG92ZXJhbGwgbW9kZSB0ZXJtaW5hdGlvbiBydWxlIHRoYXQnc1xuICAgICAgYmVpbmcgdXNlZCB0byBzY2FuIHRoZSB0ZXh0IGlzbid0IHJlY29tcGlsZWQgdGhhdCBtZWFucyB0aGF0IGFueSBtYXRjaCB0aGF0IExPT0tTIGxpa2VcbiAgICAgIHRoZSBlbmQgKGJ1dCBpcyBub3QsIGJlY2F1c2UgaXQgaXMgbm90IGFuIGV4YWN0IG1hdGNoIHRvIHRoZSBiZWdpbm5pbmcpIHdpbGxcbiAgICAgIGVuZCB1cCBoZXJlLiAgQSBkZWZpbml0ZSBlbmQgbWF0Y2gsIGJ1dCB3aGVuIGBkb0VuZE1hdGNoYCB0cmllcyB0byBcInJlYXBwbHlcIlxuICAgICAgdGhlIGVuZCBydWxlIGFuZCBmYWlscyB0byBtYXRjaCwgd2Ugd2luZCB1cCBoZXJlLCBhbmQganVzdCBzaWxlbnRseSBpZ25vcmUgdGhlIGVuZC5cblxuICAgICAgVGhpcyBjYXVzZXMgbm8gcmVhbCBoYXJtIG90aGVyIHRoYW4gc3RvcHBpbmcgYSBmZXcgdGltZXMgdG9vIG1hbnkuXG4gICAgICAqL1xuXG4gICAgICBtb2RlQnVmZmVyICs9IGxleGVtZTtcbiAgICAgIHJldHVybiBsZXhlbWUubGVuZ3RoO1xuICAgIH1cblxuICAgIGNvbnN0IGxhbmd1YWdlID0gZ2V0TGFuZ3VhZ2UobGFuZ3VhZ2VOYW1lKTtcbiAgICBpZiAoIWxhbmd1YWdlKSB7XG4gICAgICBlcnJvcihMQU5HVUFHRV9OT1RfRk9VTkQucmVwbGFjZShcInt9XCIsIGxhbmd1YWdlTmFtZSkpO1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmtub3duIGxhbmd1YWdlOiBcIicgKyBsYW5ndWFnZU5hbWUgKyAnXCInKTtcbiAgICB9XG5cbiAgICBjb25zdCBtZCA9IGNvbXBpbGVMYW5ndWFnZShsYW5ndWFnZSwgeyBwbHVnaW5zIH0pO1xuICAgIGxldCByZXN1bHQgPSAnJztcbiAgICAvKiogQHR5cGUge0NvbXBpbGVkTW9kZX0gKi9cbiAgICBsZXQgdG9wID0gY29udGludWF0aW9uIHx8IG1kO1xuICAgIC8qKiBAdHlwZSBSZWNvcmQ8c3RyaW5nLENvbXBpbGVkTW9kZT4gKi9cbiAgICBjb25zdCBjb250aW51YXRpb25zID0ge307IC8vIGtlZXAgY29udGludWF0aW9ucyBmb3Igc3ViLWxhbmd1YWdlc1xuICAgIGNvbnN0IGVtaXR0ZXIgPSBuZXcgb3B0aW9ucy5fX2VtaXR0ZXIob3B0aW9ucyk7XG4gICAgcHJvY2Vzc0NvbnRpbnVhdGlvbnMoKTtcbiAgICBsZXQgbW9kZUJ1ZmZlciA9ICcnO1xuICAgIGxldCByZWxldmFuY2UgPSAwO1xuICAgIGxldCBpbmRleCA9IDA7XG4gICAgbGV0IGl0ZXJhdGlvbnMgPSAwO1xuICAgIGxldCByZXN1bWVTY2FuQXRTYW1lUG9zaXRpb24gPSBmYWxzZTtcblxuICAgIHRyeSB7XG4gICAgICB0b3AubWF0Y2hlci5jb25zaWRlckFsbCgpO1xuXG4gICAgICBmb3IgKDs7KSB7XG4gICAgICAgIGl0ZXJhdGlvbnMrKztcbiAgICAgICAgaWYgKHJlc3VtZVNjYW5BdFNhbWVQb3NpdGlvbikge1xuICAgICAgICAgIC8vIG9ubHkgcmVnZXhlcyBub3QgbWF0Y2hlZCBwcmV2aW91c2x5IHdpbGwgbm93IGJlXG4gICAgICAgICAgLy8gY29uc2lkZXJlZCBmb3IgYSBwb3RlbnRpYWwgbWF0Y2hcbiAgICAgICAgICByZXN1bWVTY2FuQXRTYW1lUG9zaXRpb24gPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0b3AubWF0Y2hlci5jb25zaWRlckFsbCgpO1xuICAgICAgICB9XG4gICAgICAgIHRvcC5tYXRjaGVyLmxhc3RJbmRleCA9IGluZGV4O1xuXG4gICAgICAgIGNvbnN0IG1hdGNoID0gdG9wLm1hdGNoZXIuZXhlYyhjb2RlVG9IaWdobGlnaHQpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIm1hdGNoXCIsIG1hdGNoWzBdLCBtYXRjaC5ydWxlICYmIG1hdGNoLnJ1bGUuYmVnaW4pXG5cbiAgICAgICAgaWYgKCFtYXRjaCkgYnJlYWs7XG5cbiAgICAgICAgY29uc3QgYmVmb3JlTWF0Y2ggPSBjb2RlVG9IaWdobGlnaHQuc3Vic3RyaW5nKGluZGV4LCBtYXRjaC5pbmRleCk7XG4gICAgICAgIGNvbnN0IHByb2Nlc3NlZENvdW50ID0gcHJvY2Vzc0xleGVtZShiZWZvcmVNYXRjaCwgbWF0Y2gpO1xuICAgICAgICBpbmRleCA9IG1hdGNoLmluZGV4ICsgcHJvY2Vzc2VkQ291bnQ7XG4gICAgICB9XG4gICAgICBwcm9jZXNzTGV4ZW1lKGNvZGVUb0hpZ2hsaWdodC5zdWJzdHIoaW5kZXgpKTtcbiAgICAgIGVtaXR0ZXIuY2xvc2VBbGxOb2RlcygpO1xuICAgICAgZW1pdHRlci5maW5hbGl6ZSgpO1xuICAgICAgcmVzdWx0ID0gZW1pdHRlci50b0hUTUwoKTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLy8gYXZvaWQgcG9zc2libGUgYnJlYWthZ2Ugd2l0aCB2MTAgY2xpZW50cyBleHBlY3RpbmdcbiAgICAgICAgLy8gdGhpcyB0byBhbHdheXMgYmUgYW4gaW50ZWdlclxuICAgICAgICByZWxldmFuY2U6IE1hdGguZmxvb3IocmVsZXZhbmNlKSxcbiAgICAgICAgdmFsdWU6IHJlc3VsdCxcbiAgICAgICAgbGFuZ3VhZ2U6IGxhbmd1YWdlTmFtZSxcbiAgICAgICAgaWxsZWdhbDogZmFsc2UsXG4gICAgICAgIGVtaXR0ZXI6IGVtaXR0ZXIsXG4gICAgICAgIHRvcDogdG9wXG4gICAgICB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKGVyci5tZXNzYWdlICYmIGVyci5tZXNzYWdlLmluY2x1ZGVzKCdJbGxlZ2FsJykpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBpbGxlZ2FsOiB0cnVlLFxuICAgICAgICAgIGlsbGVnYWxCeToge1xuICAgICAgICAgICAgbXNnOiBlcnIubWVzc2FnZSxcbiAgICAgICAgICAgIGNvbnRleHQ6IGNvZGVUb0hpZ2hsaWdodC5zbGljZShpbmRleCAtIDEwMCwgaW5kZXggKyAxMDApLFxuICAgICAgICAgICAgbW9kZTogZXJyLm1vZGVcbiAgICAgICAgICB9LFxuICAgICAgICAgIHNvZmFyOiByZXN1bHQsXG4gICAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICAgIHZhbHVlOiBlc2NhcGUkMShjb2RlVG9IaWdobGlnaHQpLFxuICAgICAgICAgIGVtaXR0ZXI6IGVtaXR0ZXJcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSBpZiAoU0FGRV9NT0RFKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaWxsZWdhbDogZmFsc2UsXG4gICAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICAgIHZhbHVlOiBlc2NhcGUkMShjb2RlVG9IaWdobGlnaHQpLFxuICAgICAgICAgIGVtaXR0ZXI6IGVtaXR0ZXIsXG4gICAgICAgICAgbGFuZ3VhZ2U6IGxhbmd1YWdlTmFtZSxcbiAgICAgICAgICB0b3A6IHRvcCxcbiAgICAgICAgICBlcnJvclJhaXNlZDogZXJyXG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBlcnI7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIHJldHVybnMgYSB2YWxpZCBoaWdobGlnaHQgcmVzdWx0LCB3aXRob3V0IGFjdHVhbGx5IGRvaW5nIGFueSBhY3R1YWwgd29yayxcbiAgICogYXV0byBoaWdobGlnaHQgc3RhcnRzIHdpdGggdGhpcyBhbmQgaXQncyBwb3NzaWJsZSBmb3Igc21hbGwgc25pcHBldHMgdGhhdFxuICAgKiBhdXRvLWRldGVjdGlvbiBtYXkgbm90IGZpbmQgYSBiZXR0ZXIgbWF0Y2hcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNvZGVcbiAgICogQHJldHVybnMge0hpZ2hsaWdodFJlc3VsdH1cbiAgICovXG4gIGZ1bmN0aW9uIGp1c3RUZXh0SGlnaGxpZ2h0UmVzdWx0KGNvZGUpIHtcbiAgICBjb25zdCByZXN1bHQgPSB7XG4gICAgICByZWxldmFuY2U6IDAsXG4gICAgICBlbWl0dGVyOiBuZXcgb3B0aW9ucy5fX2VtaXR0ZXIob3B0aW9ucyksXG4gICAgICB2YWx1ZTogZXNjYXBlJDEoY29kZSksXG4gICAgICBpbGxlZ2FsOiBmYWxzZSxcbiAgICAgIHRvcDogUExBSU5URVhUX0xBTkdVQUdFXG4gICAgfTtcbiAgICByZXN1bHQuZW1pdHRlci5hZGRUZXh0KGNvZGUpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICAvKipcbiAgSGlnaGxpZ2h0aW5nIHdpdGggbGFuZ3VhZ2UgZGV0ZWN0aW9uLiBBY2NlcHRzIGEgc3RyaW5nIHdpdGggdGhlIGNvZGUgdG9cbiAgaGlnaGxpZ2h0LiBSZXR1cm5zIGFuIG9iamVjdCB3aXRoIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczpcblxuICAtIGxhbmd1YWdlIChkZXRlY3RlZCBsYW5ndWFnZSlcbiAgLSByZWxldmFuY2UgKGludClcbiAgLSB2YWx1ZSAoYW4gSFRNTCBzdHJpbmcgd2l0aCBoaWdobGlnaHRpbmcgbWFya3VwKVxuICAtIHNlY29uZF9iZXN0IChvYmplY3Qgd2l0aCB0aGUgc2FtZSBzdHJ1Y3R1cmUgZm9yIHNlY29uZC1iZXN0IGhldXJpc3RpY2FsbHlcbiAgICBkZXRlY3RlZCBsYW5ndWFnZSwgbWF5IGJlIGFic2VudClcblxuICAgIEBwYXJhbSB7c3RyaW5nfSBjb2RlXG4gICAgQHBhcmFtIHtBcnJheTxzdHJpbmc+fSBbbGFuZ3VhZ2VTdWJzZXRdXG4gICAgQHJldHVybnMge0F1dG9IaWdobGlnaHRSZXN1bHR9XG4gICovXG4gIGZ1bmN0aW9uIGhpZ2hsaWdodEF1dG8oY29kZSwgbGFuZ3VhZ2VTdWJzZXQpIHtcbiAgICBsYW5ndWFnZVN1YnNldCA9IGxhbmd1YWdlU3Vic2V0IHx8IG9wdGlvbnMubGFuZ3VhZ2VzIHx8IE9iamVjdC5rZXlzKGxhbmd1YWdlcyk7XG4gICAgY29uc3QgcGxhaW50ZXh0ID0ganVzdFRleHRIaWdobGlnaHRSZXN1bHQoY29kZSk7XG5cbiAgICBjb25zdCByZXN1bHRzID0gbGFuZ3VhZ2VTdWJzZXQuZmlsdGVyKGdldExhbmd1YWdlKS5maWx0ZXIoYXV0b0RldGVjdGlvbikubWFwKG5hbWUgPT5cbiAgICAgIF9oaWdobGlnaHQobmFtZSwgY29kZSwgZmFsc2UpXG4gICAgKTtcbiAgICByZXN1bHRzLnVuc2hpZnQocGxhaW50ZXh0KTsgLy8gcGxhaW50ZXh0IGlzIGFsd2F5cyBhbiBvcHRpb25cblxuICAgIGNvbnN0IHNvcnRlZCA9IHJlc3VsdHMuc29ydCgoYSwgYikgPT4ge1xuICAgICAgLy8gc29ydCBiYXNlIG9uIHJlbGV2YW5jZVxuICAgICAgaWYgKGEucmVsZXZhbmNlICE9PSBiLnJlbGV2YW5jZSkgcmV0dXJuIGIucmVsZXZhbmNlIC0gYS5yZWxldmFuY2U7XG5cbiAgICAgIC8vIGFsd2F5cyBhd2FyZCB0aGUgdGllIHRvIHRoZSBiYXNlIGxhbmd1YWdlXG4gICAgICAvLyBpZSBpZiBDKysgYW5kIEFyZHVpbm8gYXJlIHRpZWQsIGl0J3MgbW9yZSBsaWtlbHkgdG8gYmUgQysrXG4gICAgICBpZiAoYS5sYW5ndWFnZSAmJiBiLmxhbmd1YWdlKSB7XG4gICAgICAgIGlmIChnZXRMYW5ndWFnZShhLmxhbmd1YWdlKS5zdXBlcnNldE9mID09PSBiLmxhbmd1YWdlKSB7XG4gICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH0gZWxzZSBpZiAoZ2V0TGFuZ3VhZ2UoYi5sYW5ndWFnZSkuc3VwZXJzZXRPZiA9PT0gYS5sYW5ndWFnZSkge1xuICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBvdGhlcndpc2Ugc2F5IHRoZXkgYXJlIGVxdWFsLCB3aGljaCBoYXMgdGhlIGVmZmVjdCBvZiBzb3J0aW5nIG9uXG4gICAgICAvLyByZWxldmFuY2Ugd2hpbGUgcHJlc2VydmluZyB0aGUgb3JpZ2luYWwgb3JkZXJpbmcgLSB3aGljaCBpcyBob3cgdGllc1xuICAgICAgLy8gaGF2ZSBoaXN0b3JpY2FsbHkgYmVlbiBzZXR0bGVkLCBpZSB0aGUgbGFuZ3VhZ2UgdGhhdCBjb21lcyBmaXJzdCBhbHdheXNcbiAgICAgIC8vIHdpbnMgaW4gdGhlIGNhc2Ugb2YgYSB0aWVcbiAgICAgIHJldHVybiAwO1xuICAgIH0pO1xuXG4gICAgY29uc3QgW2Jlc3QsIHNlY29uZEJlc3RdID0gc29ydGVkO1xuXG4gICAgLyoqIEB0eXBlIHtBdXRvSGlnaGxpZ2h0UmVzdWx0fSAqL1xuICAgIGNvbnN0IHJlc3VsdCA9IGJlc3Q7XG4gICAgcmVzdWx0LnNlY29uZF9iZXN0ID0gc2Vjb25kQmVzdDtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICAvKipcbiAgUG9zdC1wcm9jZXNzaW5nIG9mIHRoZSBoaWdobGlnaHRlZCBtYXJrdXA6XG5cbiAgLSByZXBsYWNlIFRBQnMgd2l0aCBzb21ldGhpbmcgbW9yZSB1c2VmdWxcbiAgLSByZXBsYWNlIHJlYWwgbGluZS1icmVha3Mgd2l0aCAnPGJyPicgZm9yIG5vbi1wcmUgY29udGFpbmVyc1xuXG4gICAgQHBhcmFtIHtzdHJpbmd9IGh0bWxcbiAgICBAcmV0dXJucyB7c3RyaW5nfVxuICAqL1xuICBmdW5jdGlvbiBmaXhNYXJrdXAoaHRtbCkge1xuICAgIGlmICghKG9wdGlvbnMudGFiUmVwbGFjZSB8fCBvcHRpb25zLnVzZUJSKSkge1xuICAgICAgcmV0dXJuIGh0bWw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGh0bWwucmVwbGFjZShmaXhNYXJrdXBSZSwgbWF0Y2ggPT4ge1xuICAgICAgaWYgKG1hdGNoID09PSAnXFxuJykge1xuICAgICAgICByZXR1cm4gb3B0aW9ucy51c2VCUiA/ICc8YnI+JyA6IG1hdGNoO1xuICAgICAgfSBlbHNlIGlmIChvcHRpb25zLnRhYlJlcGxhY2UpIHtcbiAgICAgICAgcmV0dXJuIG1hdGNoLnJlcGxhY2UoL1xcdC9nLCBvcHRpb25zLnRhYlJlcGxhY2UpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG1hdGNoO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEJ1aWxkcyBuZXcgY2xhc3MgbmFtZSBmb3IgYmxvY2sgZ2l2ZW4gdGhlIGxhbmd1YWdlIG5hbWVcbiAgICpcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxuICAgKiBAcGFyYW0ge3N0cmluZ30gW2N1cnJlbnRMYW5nXVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3Jlc3VsdExhbmddXG4gICAqL1xuICBmdW5jdGlvbiB1cGRhdGVDbGFzc05hbWUoZWxlbWVudCwgY3VycmVudExhbmcsIHJlc3VsdExhbmcpIHtcbiAgICBjb25zdCBsYW5ndWFnZSA9IGN1cnJlbnRMYW5nID8gYWxpYXNlc1tjdXJyZW50TGFuZ10gOiByZXN1bHRMYW5nO1xuXG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiaGxqc1wiKTtcbiAgICBpZiAobGFuZ3VhZ2UpIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChsYW5ndWFnZSk7XG4gIH1cblxuICAvKiogQHR5cGUge0hMSlNQbHVnaW59ICovXG4gIGNvbnN0IGJyUGx1Z2luID0ge1xuICAgIFwiYmVmb3JlOmhpZ2hsaWdodEVsZW1lbnRcIjogKHsgZWwgfSkgPT4ge1xuICAgICAgaWYgKG9wdGlvbnMudXNlQlIpIHtcbiAgICAgICAgZWwuaW5uZXJIVE1MID0gZWwuaW5uZXJIVE1MLnJlcGxhY2UoL1xcbi9nLCAnJykucmVwbGFjZSgvPGJyWyAvXSo+L2csICdcXG4nKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIFwiYWZ0ZXI6aGlnaGxpZ2h0RWxlbWVudFwiOiAoeyByZXN1bHQgfSkgPT4ge1xuICAgICAgaWYgKG9wdGlvbnMudXNlQlIpIHtcbiAgICAgICAgcmVzdWx0LnZhbHVlID0gcmVzdWx0LnZhbHVlLnJlcGxhY2UoL1xcbi9nLCBcIjxicj5cIik7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IFRBQl9SRVBMQUNFX1JFID0gL14oPFtePl0rPnxcXHQpKy9nbTtcbiAgLyoqIEB0eXBlIHtITEpTUGx1Z2lufSAqL1xuICBjb25zdCB0YWJSZXBsYWNlUGx1Z2luID0ge1xuICAgIFwiYWZ0ZXI6aGlnaGxpZ2h0RWxlbWVudFwiOiAoeyByZXN1bHQgfSkgPT4ge1xuICAgICAgaWYgKG9wdGlvbnMudGFiUmVwbGFjZSkge1xuICAgICAgICByZXN1bHQudmFsdWUgPSByZXN1bHQudmFsdWUucmVwbGFjZShUQUJfUkVQTEFDRV9SRSwgKG0pID0+XG4gICAgICAgICAgbS5yZXBsYWNlKC9cXHQvZywgb3B0aW9ucy50YWJSZXBsYWNlKVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQXBwbGllcyBoaWdobGlnaHRpbmcgdG8gYSBET00gbm9kZSBjb250YWluaW5nIGNvZGUuIEFjY2VwdHMgYSBET00gbm9kZSBhbmRcbiAgICogdHdvIG9wdGlvbmFsIHBhcmFtZXRlcnMgZm9yIGZpeE1hcmt1cC5cbiAgICpcbiAgICogQHBhcmFtIHtIaWdobGlnaHRlZEhUTUxFbGVtZW50fSBlbGVtZW50IC0gdGhlIEhUTUwgZWxlbWVudCB0byBoaWdobGlnaHRcbiAgKi9cbiAgZnVuY3Rpb24gaGlnaGxpZ2h0RWxlbWVudChlbGVtZW50KSB7XG4gICAgLyoqIEB0eXBlIEhUTUxFbGVtZW50ICovXG4gICAgbGV0IG5vZGUgPSBudWxsO1xuICAgIGNvbnN0IGxhbmd1YWdlID0gYmxvY2tMYW5ndWFnZShlbGVtZW50KTtcblxuICAgIGlmIChzaG91bGROb3RIaWdobGlnaHQobGFuZ3VhZ2UpKSByZXR1cm47XG5cbiAgICAvLyBzdXBwb3J0IGZvciB2MTAgQVBJXG4gICAgZmlyZShcImJlZm9yZTpoaWdobGlnaHRFbGVtZW50XCIsXG4gICAgICB7IGVsOiBlbGVtZW50LCBsYW5ndWFnZTogbGFuZ3VhZ2UgfSk7XG5cbiAgICBub2RlID0gZWxlbWVudDtcbiAgICBjb25zdCB0ZXh0ID0gbm9kZS50ZXh0Q29udGVudDtcbiAgICBjb25zdCByZXN1bHQgPSBsYW5ndWFnZSA/IGhpZ2hsaWdodCh0ZXh0LCB7IGxhbmd1YWdlLCBpZ25vcmVJbGxlZ2FsczogdHJ1ZSB9KSA6IGhpZ2hsaWdodEF1dG8odGV4dCk7XG5cbiAgICAvLyBzdXBwb3J0IGZvciB2MTAgQVBJXG4gICAgZmlyZShcImFmdGVyOmhpZ2hsaWdodEVsZW1lbnRcIiwgeyBlbDogZWxlbWVudCwgcmVzdWx0LCB0ZXh0IH0pO1xuXG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSByZXN1bHQudmFsdWU7XG4gICAgdXBkYXRlQ2xhc3NOYW1lKGVsZW1lbnQsIGxhbmd1YWdlLCByZXN1bHQubGFuZ3VhZ2UpO1xuICAgIGVsZW1lbnQucmVzdWx0ID0ge1xuICAgICAgbGFuZ3VhZ2U6IHJlc3VsdC5sYW5ndWFnZSxcbiAgICAgIC8vIFRPRE86IHJlbW92ZSB3aXRoIHZlcnNpb24gMTEuMFxuICAgICAgcmU6IHJlc3VsdC5yZWxldmFuY2UsXG4gICAgICByZWxhdmFuY2U6IHJlc3VsdC5yZWxldmFuY2VcbiAgICB9O1xuICAgIGlmIChyZXN1bHQuc2Vjb25kX2Jlc3QpIHtcbiAgICAgIGVsZW1lbnQuc2Vjb25kX2Jlc3QgPSB7XG4gICAgICAgIGxhbmd1YWdlOiByZXN1bHQuc2Vjb25kX2Jlc3QubGFuZ3VhZ2UsXG4gICAgICAgIC8vIFRPRE86IHJlbW92ZSB3aXRoIHZlcnNpb24gMTEuMFxuICAgICAgICByZTogcmVzdWx0LnNlY29uZF9iZXN0LnJlbGV2YW5jZSxcbiAgICAgICAgcmVsYXZhbmNlOiByZXN1bHQuc2Vjb25kX2Jlc3QucmVsZXZhbmNlXG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGVzIGhpZ2hsaWdodC5qcyBnbG9iYWwgb3B0aW9ucyB3aXRoIHRoZSBwYXNzZWQgb3B0aW9uc1xuICAgKlxuICAgKiBAcGFyYW0ge1BhcnRpYWw8SExKU09wdGlvbnM+fSB1c2VyT3B0aW9uc1xuICAgKi9cbiAgZnVuY3Rpb24gY29uZmlndXJlKHVzZXJPcHRpb25zKSB7XG4gICAgaWYgKHVzZXJPcHRpb25zLnVzZUJSKSB7XG4gICAgICBkZXByZWNhdGVkKFwiMTAuMy4wXCIsIFwiJ3VzZUJSJyB3aWxsIGJlIHJlbW92ZWQgZW50aXJlbHkgaW4gdjExLjBcIik7XG4gICAgICBkZXByZWNhdGVkKFwiMTAuMy4wXCIsIFwiUGxlYXNlIHNlZSBodHRwczovL2dpdGh1Yi5jb20vaGlnaGxpZ2h0anMvaGlnaGxpZ2h0LmpzL2lzc3Vlcy8yNTU5XCIpO1xuICAgIH1cbiAgICBvcHRpb25zID0gaW5oZXJpdCQxKG9wdGlvbnMsIHVzZXJPcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIaWdobGlnaHRzIHRvIGFsbCA8cHJlPjxjb2RlPiBibG9ja3Mgb24gYSBwYWdlXG4gICAqXG4gICAqIEB0eXBlIHtGdW5jdGlvbiAmIHtjYWxsZWQ/OiBib29sZWFufX1cbiAgICovXG4gIC8vIFRPRE86IHJlbW92ZSB2MTIsIGRlcHJlY2F0ZWRcbiAgY29uc3QgaW5pdEhpZ2hsaWdodGluZyA9ICgpID0+IHtcbiAgICBpZiAoaW5pdEhpZ2hsaWdodGluZy5jYWxsZWQpIHJldHVybjtcbiAgICBpbml0SGlnaGxpZ2h0aW5nLmNhbGxlZCA9IHRydWU7XG5cbiAgICBkZXByZWNhdGVkKFwiMTAuNi4wXCIsIFwiaW5pdEhpZ2hsaWdodGluZygpIGlzIGRlcHJlY2F0ZWQuICBVc2UgaGlnaGxpZ2h0QWxsKCkgaW5zdGVhZC5cIik7XG5cbiAgICBjb25zdCBibG9ja3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdwcmUgY29kZScpO1xuICAgIGJsb2Nrcy5mb3JFYWNoKGhpZ2hsaWdodEVsZW1lbnQpO1xuICB9O1xuXG4gIC8vIEhpZ2xpZ2h0cyBhbGwgd2hlbiBET01Db250ZW50TG9hZGVkIGZpcmVzXG4gIC8vIFRPRE86IHJlbW92ZSB2MTIsIGRlcHJlY2F0ZWRcbiAgZnVuY3Rpb24gaW5pdEhpZ2hsaWdodGluZ09uTG9hZCgpIHtcbiAgICBkZXByZWNhdGVkKFwiMTAuNi4wXCIsIFwiaW5pdEhpZ2hsaWdodGluZ09uTG9hZCgpIGlzIGRlcHJlY2F0ZWQuICBVc2UgaGlnaGxpZ2h0QWxsKCkgaW5zdGVhZC5cIik7XG4gICAgd2FudHNIaWdobGlnaHQgPSB0cnVlO1xuICB9XG5cbiAgbGV0IHdhbnRzSGlnaGxpZ2h0ID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIGF1dG8taGlnaGxpZ2h0cyBhbGwgcHJlPmNvZGUgZWxlbWVudHMgb24gdGhlIHBhZ2VcbiAgICovXG4gIGZ1bmN0aW9uIGhpZ2hsaWdodEFsbCgpIHtcbiAgICAvLyBpZiB3ZSBhcmUgY2FsbGVkIHRvbyBlYXJseSBpbiB0aGUgbG9hZGluZyBwcm9jZXNzXG4gICAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09IFwibG9hZGluZ1wiKSB7XG4gICAgICB3YW50c0hpZ2hsaWdodCA9IHRydWU7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgYmxvY2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgncHJlIGNvZGUnKTtcbiAgICBibG9ja3MuZm9yRWFjaChoaWdobGlnaHRFbGVtZW50KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGJvb3QoKSB7XG4gICAgLy8gaWYgYSBoaWdobGlnaHQgd2FzIHJlcXVlc3RlZCBiZWZvcmUgRE9NIHdhcyBsb2FkZWQsIGRvIG5vd1xuICAgIGlmICh3YW50c0hpZ2hsaWdodCkgaGlnaGxpZ2h0QWxsKCk7XG4gIH1cblxuICAvLyBtYWtlIHN1cmUgd2UgYXJlIGluIHRoZSBicm93c2VyIGVudmlyb25tZW50XG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgYm9vdCwgZmFsc2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVyIGEgbGFuZ3VhZ2UgZ3JhbW1hciBtb2R1bGVcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGxhbmd1YWdlTmFtZVxuICAgKiBAcGFyYW0ge0xhbmd1YWdlRm59IGxhbmd1YWdlRGVmaW5pdGlvblxuICAgKi9cbiAgZnVuY3Rpb24gcmVnaXN0ZXJMYW5ndWFnZShsYW5ndWFnZU5hbWUsIGxhbmd1YWdlRGVmaW5pdGlvbikge1xuICAgIGxldCBsYW5nID0gbnVsbDtcbiAgICB0cnkge1xuICAgICAgbGFuZyA9IGxhbmd1YWdlRGVmaW5pdGlvbihobGpzKTtcbiAgICB9IGNhdGNoIChlcnJvciQxKSB7XG4gICAgICBlcnJvcihcIkxhbmd1YWdlIGRlZmluaXRpb24gZm9yICd7fScgY291bGQgbm90IGJlIHJlZ2lzdGVyZWQuXCIucmVwbGFjZShcInt9XCIsIGxhbmd1YWdlTmFtZSkpO1xuICAgICAgLy8gaGFyZCBvciBzb2Z0IGVycm9yXG4gICAgICBpZiAoIVNBRkVfTU9ERSkgeyB0aHJvdyBlcnJvciQxOyB9IGVsc2UgeyBlcnJvcihlcnJvciQxKTsgfVxuICAgICAgLy8gbGFuZ3VhZ2VzIHRoYXQgaGF2ZSBzZXJpb3VzIGVycm9ycyBhcmUgcmVwbGFjZWQgd2l0aCBlc3NlbnRpYWxseSBhXG4gICAgICAvLyBcInBsYWludGV4dFwiIHN0YW5kLWluIHNvIHRoYXQgdGhlIGNvZGUgYmxvY2tzIHdpbGwgc3RpbGwgZ2V0IG5vcm1hbFxuICAgICAgLy8gY3NzIGNsYXNzZXMgYXBwbGllZCB0byB0aGVtIC0gYW5kIG9uZSBiYWQgbGFuZ3VhZ2Ugd29uJ3QgYnJlYWsgdGhlXG4gICAgICAvLyBlbnRpcmUgaGlnaGxpZ2h0ZXJcbiAgICAgIGxhbmcgPSBQTEFJTlRFWFRfTEFOR1VBR0U7XG4gICAgfVxuICAgIC8vIGdpdmUgaXQgYSB0ZW1wb3JhcnkgbmFtZSBpZiBpdCBkb2Vzbid0IGhhdmUgb25lIGluIHRoZSBtZXRhLWRhdGFcbiAgICBpZiAoIWxhbmcubmFtZSkgbGFuZy5uYW1lID0gbGFuZ3VhZ2VOYW1lO1xuICAgIGxhbmd1YWdlc1tsYW5ndWFnZU5hbWVdID0gbGFuZztcbiAgICBsYW5nLnJhd0RlZmluaXRpb24gPSBsYW5ndWFnZURlZmluaXRpb24uYmluZChudWxsLCBobGpzKTtcblxuICAgIGlmIChsYW5nLmFsaWFzZXMpIHtcbiAgICAgIHJlZ2lzdGVyQWxpYXNlcyhsYW5nLmFsaWFzZXMsIHsgbGFuZ3VhZ2VOYW1lIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgYSBsYW5ndWFnZSBncmFtbWFyIG1vZHVsZVxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbGFuZ3VhZ2VOYW1lXG4gICAqL1xuICBmdW5jdGlvbiB1bnJlZ2lzdGVyTGFuZ3VhZ2UobGFuZ3VhZ2VOYW1lKSB7XG4gICAgZGVsZXRlIGxhbmd1YWdlc1tsYW5ndWFnZU5hbWVdO1xuICAgIGZvciAoY29uc3QgYWxpYXMgb2YgT2JqZWN0LmtleXMoYWxpYXNlcykpIHtcbiAgICAgIGlmIChhbGlhc2VzW2FsaWFzXSA9PT0gbGFuZ3VhZ2VOYW1lKSB7XG4gICAgICAgIGRlbGV0ZSBhbGlhc2VzW2FsaWFzXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybnMge3N0cmluZ1tdfSBMaXN0IG9mIGxhbmd1YWdlIGludGVybmFsIG5hbWVzXG4gICAqL1xuICBmdW5jdGlvbiBsaXN0TGFuZ3VhZ2VzKCkge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhsYW5ndWFnZXMpO1xuICB9XG5cbiAgLyoqXG4gICAgaW50ZW5kZWQgdXNhZ2U6IFdoZW4gb25lIGxhbmd1YWdlIHRydWx5IHJlcXVpcmVzIGFub3RoZXJcblxuICAgIFVubGlrZSBgZ2V0TGFuZ3VhZ2VgLCB0aGlzIHdpbGwgdGhyb3cgd2hlbiB0aGUgcmVxdWVzdGVkIGxhbmd1YWdlXG4gICAgaXMgbm90IGF2YWlsYWJsZS5cblxuICAgIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gbmFtZSBvZiB0aGUgbGFuZ3VhZ2UgdG8gZmV0Y2gvcmVxdWlyZVxuICAgIEByZXR1cm5zIHtMYW5ndWFnZSB8IG5ldmVyfVxuICAqL1xuICBmdW5jdGlvbiByZXF1aXJlTGFuZ3VhZ2UobmFtZSkge1xuICAgIGRlcHJlY2F0ZWQoXCIxMC40LjBcIiwgXCJyZXF1aXJlTGFuZ3VhZ2Ugd2lsbCBiZSByZW1vdmVkIGVudGlyZWx5IGluIHYxMS5cIik7XG4gICAgZGVwcmVjYXRlZChcIjEwLjQuMFwiLCBcIlBsZWFzZSBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2hpZ2hsaWdodGpzL2hpZ2hsaWdodC5qcy9wdWxsLzI4NDRcIik7XG5cbiAgICBjb25zdCBsYW5nID0gZ2V0TGFuZ3VhZ2UobmFtZSk7XG4gICAgaWYgKGxhbmcpIHsgcmV0dXJuIGxhbmc7IH1cblxuICAgIGNvbnN0IGVyciA9IG5ldyBFcnJvcignVGhlIFxcJ3t9XFwnIGxhbmd1YWdlIGlzIHJlcXVpcmVkLCBidXQgbm90IGxvYWRlZC4nLnJlcGxhY2UoJ3t9JywgbmFtZSkpO1xuICAgIHRocm93IGVycjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIG5hbWUgb2YgdGhlIGxhbmd1YWdlIHRvIHJldHJpZXZlXG4gICAqIEByZXR1cm5zIHtMYW5ndWFnZSB8IHVuZGVmaW5lZH1cbiAgICovXG4gIGZ1bmN0aW9uIGdldExhbmd1YWdlKG5hbWUpIHtcbiAgICBuYW1lID0gKG5hbWUgfHwgJycpLnRvTG93ZXJDYXNlKCk7XG4gICAgcmV0dXJuIGxhbmd1YWdlc1tuYW1lXSB8fCBsYW5ndWFnZXNbYWxpYXNlc1tuYW1lXV07XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW119IGFsaWFzTGlzdCAtIHNpbmdsZSBhbGlhcyBvciBsaXN0IG9mIGFsaWFzZXNcbiAgICogQHBhcmFtIHt7bGFuZ3VhZ2VOYW1lOiBzdHJpbmd9fSBvcHRzXG4gICAqL1xuICBmdW5jdGlvbiByZWdpc3RlckFsaWFzZXMoYWxpYXNMaXN0LCB7IGxhbmd1YWdlTmFtZSB9KSB7XG4gICAgaWYgKHR5cGVvZiBhbGlhc0xpc3QgPT09ICdzdHJpbmcnKSB7XG4gICAgICBhbGlhc0xpc3QgPSBbYWxpYXNMaXN0XTtcbiAgICB9XG4gICAgYWxpYXNMaXN0LmZvckVhY2goYWxpYXMgPT4geyBhbGlhc2VzW2FsaWFzLnRvTG93ZXJDYXNlKCldID0gbGFuZ3VhZ2VOYW1lOyB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIGlmIGEgZ2l2ZW4gbGFuZ3VhZ2UgaGFzIGF1dG8tZGV0ZWN0aW9uIGVuYWJsZWRcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSBuYW1lIG9mIHRoZSBsYW5ndWFnZVxuICAgKi9cbiAgZnVuY3Rpb24gYXV0b0RldGVjdGlvbihuYW1lKSB7XG4gICAgY29uc3QgbGFuZyA9IGdldExhbmd1YWdlKG5hbWUpO1xuICAgIHJldHVybiBsYW5nICYmICFsYW5nLmRpc2FibGVBdXRvZGV0ZWN0O1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZ3JhZGVzIHRoZSBvbGQgaGlnaGxpZ2h0QmxvY2sgcGx1Z2lucyB0byB0aGUgbmV3XG4gICAqIGhpZ2hsaWdodEVsZW1lbnQgQVBJXG4gICAqIEBwYXJhbSB7SExKU1BsdWdpbn0gcGx1Z2luXG4gICAqL1xuICBmdW5jdGlvbiB1cGdyYWRlUGx1Z2luQVBJKHBsdWdpbikge1xuICAgIC8vIFRPRE86IHJlbW92ZSB3aXRoIHYxMlxuICAgIGlmIChwbHVnaW5bXCJiZWZvcmU6aGlnaGxpZ2h0QmxvY2tcIl0gJiYgIXBsdWdpbltcImJlZm9yZTpoaWdobGlnaHRFbGVtZW50XCJdKSB7XG4gICAgICBwbHVnaW5bXCJiZWZvcmU6aGlnaGxpZ2h0RWxlbWVudFwiXSA9IChkYXRhKSA9PiB7XG4gICAgICAgIHBsdWdpbltcImJlZm9yZTpoaWdobGlnaHRCbG9ja1wiXShcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHsgYmxvY2s6IGRhdGEuZWwgfSwgZGF0YSlcbiAgICAgICAgKTtcbiAgICAgIH07XG4gICAgfVxuICAgIGlmIChwbHVnaW5bXCJhZnRlcjpoaWdobGlnaHRCbG9ja1wiXSAmJiAhcGx1Z2luW1wiYWZ0ZXI6aGlnaGxpZ2h0RWxlbWVudFwiXSkge1xuICAgICAgcGx1Z2luW1wiYWZ0ZXI6aGlnaGxpZ2h0RWxlbWVudFwiXSA9IChkYXRhKSA9PiB7XG4gICAgICAgIHBsdWdpbltcImFmdGVyOmhpZ2hsaWdodEJsb2NrXCJdKFxuICAgICAgICAgIE9iamVjdC5hc3NpZ24oeyBibG9jazogZGF0YS5lbCB9LCBkYXRhKVxuICAgICAgICApO1xuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtITEpTUGx1Z2lufSBwbHVnaW5cbiAgICovXG4gIGZ1bmN0aW9uIGFkZFBsdWdpbihwbHVnaW4pIHtcbiAgICB1cGdyYWRlUGx1Z2luQVBJKHBsdWdpbik7XG4gICAgcGx1Z2lucy5wdXNoKHBsdWdpbik7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIHtQbHVnaW5FdmVudH0gZXZlbnRcbiAgICogQHBhcmFtIHthbnl9IGFyZ3NcbiAgICovXG4gIGZ1bmN0aW9uIGZpcmUoZXZlbnQsIGFyZ3MpIHtcbiAgICBjb25zdCBjYiA9IGV2ZW50O1xuICAgIHBsdWdpbnMuZm9yRWFjaChmdW5jdGlvbihwbHVnaW4pIHtcbiAgICAgIGlmIChwbHVnaW5bY2JdKSB7XG4gICAgICAgIHBsdWdpbltjYl0oYXJncyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgTm90ZTogZml4TWFya3VwIGlzIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBlbnRpcmVseSBpbiB2MTFcblxuICBAcGFyYW0ge3N0cmluZ30gYXJnXG4gIEByZXR1cm5zIHtzdHJpbmd9XG4gICovXG4gIGZ1bmN0aW9uIGRlcHJlY2F0ZUZpeE1hcmt1cChhcmcpIHtcbiAgICBkZXByZWNhdGVkKFwiMTAuMi4wXCIsIFwiZml4TWFya3VwIHdpbGwgYmUgcmVtb3ZlZCBlbnRpcmVseSBpbiB2MTEuMFwiKTtcbiAgICBkZXByZWNhdGVkKFwiMTAuMi4wXCIsIFwiUGxlYXNlIHNlZSBodHRwczovL2dpdGh1Yi5jb20vaGlnaGxpZ2h0anMvaGlnaGxpZ2h0LmpzL2lzc3Vlcy8yNTM0XCIpO1xuXG4gICAgcmV0dXJuIGZpeE1hcmt1cChhcmcpO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSB7SGlnaGxpZ2h0ZWRIVE1MRWxlbWVudH0gZWxcbiAgICovXG4gIGZ1bmN0aW9uIGRlcHJlY2F0ZUhpZ2hsaWdodEJsb2NrKGVsKSB7XG4gICAgZGVwcmVjYXRlZChcIjEwLjcuMFwiLCBcImhpZ2hsaWdodEJsb2NrIHdpbGwgYmUgcmVtb3ZlZCBlbnRpcmVseSBpbiB2MTIuMFwiKTtcbiAgICBkZXByZWNhdGVkKFwiMTAuNy4wXCIsIFwiUGxlYXNlIHVzZSBoaWdobGlnaHRFbGVtZW50IG5vdy5cIik7XG5cbiAgICByZXR1cm4gaGlnaGxpZ2h0RWxlbWVudChlbCk7XG4gIH1cblxuICAvKiBJbnRlcmZhY2UgZGVmaW5pdGlvbiAqL1xuICBPYmplY3QuYXNzaWduKGhsanMsIHtcbiAgICBoaWdobGlnaHQsXG4gICAgaGlnaGxpZ2h0QXV0byxcbiAgICBoaWdobGlnaHRBbGwsXG4gICAgZml4TWFya3VwOiBkZXByZWNhdGVGaXhNYXJrdXAsXG4gICAgaGlnaGxpZ2h0RWxlbWVudCxcbiAgICAvLyBUT0RPOiBSZW1vdmUgd2l0aCB2MTIgQVBJXG4gICAgaGlnaGxpZ2h0QmxvY2s6IGRlcHJlY2F0ZUhpZ2hsaWdodEJsb2NrLFxuICAgIGNvbmZpZ3VyZSxcbiAgICBpbml0SGlnaGxpZ2h0aW5nLFxuICAgIGluaXRIaWdobGlnaHRpbmdPbkxvYWQsXG4gICAgcmVnaXN0ZXJMYW5ndWFnZSxcbiAgICB1bnJlZ2lzdGVyTGFuZ3VhZ2UsXG4gICAgbGlzdExhbmd1YWdlcyxcbiAgICBnZXRMYW5ndWFnZSxcbiAgICByZWdpc3RlckFsaWFzZXMsXG4gICAgcmVxdWlyZUxhbmd1YWdlLFxuICAgIGF1dG9EZXRlY3Rpb24sXG4gICAgaW5oZXJpdDogaW5oZXJpdCQxLFxuICAgIGFkZFBsdWdpbixcbiAgICAvLyBwbHVnaW5zIGZvciBmcmFtZXdvcmtzXG4gICAgdnVlUGx1Z2luOiBCdWlsZFZ1ZVBsdWdpbihobGpzKS5WdWVQbHVnaW5cbiAgfSk7XG5cbiAgaGxqcy5kZWJ1Z01vZGUgPSBmdW5jdGlvbigpIHsgU0FGRV9NT0RFID0gZmFsc2U7IH07XG4gIGhsanMuc2FmZU1vZGUgPSBmdW5jdGlvbigpIHsgU0FGRV9NT0RFID0gdHJ1ZTsgfTtcbiAgaGxqcy52ZXJzaW9uU3RyaW5nID0gdmVyc2lvbjtcblxuICBmb3IgKGNvbnN0IGtleSBpbiBNT0RFUykge1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBpZiAodHlwZW9mIE1PREVTW2tleV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIGRlZXBGcmVlemVFczYoTU9ERVNba2V5XSk7XG4gICAgfVxuICB9XG5cbiAgLy8gbWVyZ2UgYWxsIHRoZSBtb2Rlcy9yZWdleHMgaW50byBvdXIgbWFpbiBvYmplY3RcbiAgT2JqZWN0LmFzc2lnbihobGpzLCBNT0RFUyk7XG5cbiAgLy8gYnVpbHQtaW4gcGx1Z2lucywgbGlrZWx5IHRvIGJlIG1vdmVkIG91dCBvZiBjb3JlIGluIHRoZSBmdXR1cmVcbiAgaGxqcy5hZGRQbHVnaW4oYnJQbHVnaW4pOyAvLyBzbGF0ZWQgdG8gYmUgcmVtb3ZlZCBpbiB2MTFcbiAgaGxqcy5hZGRQbHVnaW4obWVyZ2VIVE1MUGx1Z2luKTtcbiAgaGxqcy5hZGRQbHVnaW4odGFiUmVwbGFjZVBsdWdpbik7XG4gIHJldHVybiBobGpzO1xufTtcblxuLy8gZXhwb3J0IGFuIFwiaW5zdGFuY2VcIiBvZiB0aGUgaGlnaGxpZ2h0ZXJcbnZhciBoaWdobGlnaHQgPSBITEpTKHt9KTtcblxubW9kdWxlLmV4cG9ydHMgPSBoaWdobGlnaHQ7XG4iLCJjb25zdCBNT0RFUyA9IChobGpzKSA9PiB7XG4gIHJldHVybiB7XG4gICAgSU1QT1JUQU5UOiB7XG4gICAgICBjbGFzc05hbWU6ICdtZXRhJyxcbiAgICAgIGJlZ2luOiAnIWltcG9ydGFudCdcbiAgICB9LFxuICAgIEhFWENPTE9SOiB7XG4gICAgICBjbGFzc05hbWU6ICdudW1iZXInLFxuICAgICAgYmVnaW46ICcjKFthLWZBLUYwLTldezZ9fFthLWZBLUYwLTldezN9KSdcbiAgICB9LFxuICAgIEFUVFJJQlVURV9TRUxFQ1RPUl9NT0RFOiB7XG4gICAgICBjbGFzc05hbWU6ICdzZWxlY3Rvci1hdHRyJyxcbiAgICAgIGJlZ2luOiAvXFxbLyxcbiAgICAgIGVuZDogL1xcXS8sXG4gICAgICBpbGxlZ2FsOiAnJCcsXG4gICAgICBjb250YWluczogW1xuICAgICAgICBobGpzLkFQT1NfU1RSSU5HX01PREUsXG4gICAgICAgIGhsanMuUVVPVEVfU1RSSU5HX01PREVcbiAgICAgIF1cbiAgICB9XG4gIH07XG59O1xuXG5jb25zdCBUQUdTID0gW1xuICAnYScsXG4gICdhYmJyJyxcbiAgJ2FkZHJlc3MnLFxuICAnYXJ0aWNsZScsXG4gICdhc2lkZScsXG4gICdhdWRpbycsXG4gICdiJyxcbiAgJ2Jsb2NrcXVvdGUnLFxuICAnYm9keScsXG4gICdidXR0b24nLFxuICAnY2FudmFzJyxcbiAgJ2NhcHRpb24nLFxuICAnY2l0ZScsXG4gICdjb2RlJyxcbiAgJ2RkJyxcbiAgJ2RlbCcsXG4gICdkZXRhaWxzJyxcbiAgJ2RmbicsXG4gICdkaXYnLFxuICAnZGwnLFxuICAnZHQnLFxuICAnZW0nLFxuICAnZmllbGRzZXQnLFxuICAnZmlnY2FwdGlvbicsXG4gICdmaWd1cmUnLFxuICAnZm9vdGVyJyxcbiAgJ2Zvcm0nLFxuICAnaDEnLFxuICAnaDInLFxuICAnaDMnLFxuICAnaDQnLFxuICAnaDUnLFxuICAnaDYnLFxuICAnaGVhZGVyJyxcbiAgJ2hncm91cCcsXG4gICdodG1sJyxcbiAgJ2knLFxuICAnaWZyYW1lJyxcbiAgJ2ltZycsXG4gICdpbnB1dCcsXG4gICdpbnMnLFxuICAna2JkJyxcbiAgJ2xhYmVsJyxcbiAgJ2xlZ2VuZCcsXG4gICdsaScsXG4gICdtYWluJyxcbiAgJ21hcmsnLFxuICAnbWVudScsXG4gICduYXYnLFxuICAnb2JqZWN0JyxcbiAgJ29sJyxcbiAgJ3AnLFxuICAncScsXG4gICdxdW90ZScsXG4gICdzYW1wJyxcbiAgJ3NlY3Rpb24nLFxuICAnc3BhbicsXG4gICdzdHJvbmcnLFxuICAnc3VtbWFyeScsXG4gICdzdXAnLFxuICAndGFibGUnLFxuICAndGJvZHknLFxuICAndGQnLFxuICAndGV4dGFyZWEnLFxuICAndGZvb3QnLFxuICAndGgnLFxuICAndGhlYWQnLFxuICAndGltZScsXG4gICd0cicsXG4gICd1bCcsXG4gICd2YXInLFxuICAndmlkZW8nXG5dO1xuXG5jb25zdCBNRURJQV9GRUFUVVJFUyA9IFtcbiAgJ2FueS1ob3ZlcicsXG4gICdhbnktcG9pbnRlcicsXG4gICdhc3BlY3QtcmF0aW8nLFxuICAnY29sb3InLFxuICAnY29sb3ItZ2FtdXQnLFxuICAnY29sb3ItaW5kZXgnLFxuICAnZGV2aWNlLWFzcGVjdC1yYXRpbycsXG4gICdkZXZpY2UtaGVpZ2h0JyxcbiAgJ2RldmljZS13aWR0aCcsXG4gICdkaXNwbGF5LW1vZGUnLFxuICAnZm9yY2VkLWNvbG9ycycsXG4gICdncmlkJyxcbiAgJ2hlaWdodCcsXG4gICdob3ZlcicsXG4gICdpbnZlcnRlZC1jb2xvcnMnLFxuICAnbW9ub2Nocm9tZScsXG4gICdvcmllbnRhdGlvbicsXG4gICdvdmVyZmxvdy1ibG9jaycsXG4gICdvdmVyZmxvdy1pbmxpbmUnLFxuICAncG9pbnRlcicsXG4gICdwcmVmZXJzLWNvbG9yLXNjaGVtZScsXG4gICdwcmVmZXJzLWNvbnRyYXN0JyxcbiAgJ3ByZWZlcnMtcmVkdWNlZC1tb3Rpb24nLFxuICAncHJlZmVycy1yZWR1Y2VkLXRyYW5zcGFyZW5jeScsXG4gICdyZXNvbHV0aW9uJyxcbiAgJ3NjYW4nLFxuICAnc2NyaXB0aW5nJyxcbiAgJ3VwZGF0ZScsXG4gICd3aWR0aCcsXG4gIC8vIFRPRE86IGZpbmQgYSBiZXR0ZXIgc29sdXRpb24/XG4gICdtaW4td2lkdGgnLFxuICAnbWF4LXdpZHRoJyxcbiAgJ21pbi1oZWlnaHQnLFxuICAnbWF4LWhlaWdodCdcbl07XG5cbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9Qc2V1ZG8tY2xhc3Nlc1xuY29uc3QgUFNFVURPX0NMQVNTRVMgPSBbXG4gICdhY3RpdmUnLFxuICAnYW55LWxpbmsnLFxuICAnYmxhbmsnLFxuICAnY2hlY2tlZCcsXG4gICdjdXJyZW50JyxcbiAgJ2RlZmF1bHQnLFxuICAnZGVmaW5lZCcsXG4gICdkaXInLCAvLyBkaXIoKVxuICAnZGlzYWJsZWQnLFxuICAnZHJvcCcsXG4gICdlbXB0eScsXG4gICdlbmFibGVkJyxcbiAgJ2ZpcnN0JyxcbiAgJ2ZpcnN0LWNoaWxkJyxcbiAgJ2ZpcnN0LW9mLXR5cGUnLFxuICAnZnVsbHNjcmVlbicsXG4gICdmdXR1cmUnLFxuICAnZm9jdXMnLFxuICAnZm9jdXMtdmlzaWJsZScsXG4gICdmb2N1cy13aXRoaW4nLFxuICAnaGFzJywgLy8gaGFzKClcbiAgJ2hvc3QnLCAvLyBob3N0IG9yIGhvc3QoKVxuICAnaG9zdC1jb250ZXh0JywgLy8gaG9zdC1jb250ZXh0KClcbiAgJ2hvdmVyJyxcbiAgJ2luZGV0ZXJtaW5hdGUnLFxuICAnaW4tcmFuZ2UnLFxuICAnaW52YWxpZCcsXG4gICdpcycsIC8vIGlzKClcbiAgJ2xhbmcnLCAvLyBsYW5nKClcbiAgJ2xhc3QtY2hpbGQnLFxuICAnbGFzdC1vZi10eXBlJyxcbiAgJ2xlZnQnLFxuICAnbGluaycsXG4gICdsb2NhbC1saW5rJyxcbiAgJ25vdCcsIC8vIG5vdCgpXG4gICdudGgtY2hpbGQnLCAvLyBudGgtY2hpbGQoKVxuICAnbnRoLWNvbCcsIC8vIG50aC1jb2woKVxuICAnbnRoLWxhc3QtY2hpbGQnLCAvLyBudGgtbGFzdC1jaGlsZCgpXG4gICdudGgtbGFzdC1jb2wnLCAvLyBudGgtbGFzdC1jb2woKVxuICAnbnRoLWxhc3Qtb2YtdHlwZScsIC8vbnRoLWxhc3Qtb2YtdHlwZSgpXG4gICdudGgtb2YtdHlwZScsIC8vbnRoLW9mLXR5cGUoKVxuICAnb25seS1jaGlsZCcsXG4gICdvbmx5LW9mLXR5cGUnLFxuICAnb3B0aW9uYWwnLFxuICAnb3V0LW9mLXJhbmdlJyxcbiAgJ3Bhc3QnLFxuICAncGxhY2Vob2xkZXItc2hvd24nLFxuICAncmVhZC1vbmx5JyxcbiAgJ3JlYWQtd3JpdGUnLFxuICAncmVxdWlyZWQnLFxuICAncmlnaHQnLFxuICAncm9vdCcsXG4gICdzY29wZScsXG4gICd0YXJnZXQnLFxuICAndGFyZ2V0LXdpdGhpbicsXG4gICd1c2VyLWludmFsaWQnLFxuICAndmFsaWQnLFxuICAndmlzaXRlZCcsXG4gICd3aGVyZScgLy8gd2hlcmUoKVxuXTtcblxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL1BzZXVkby1lbGVtZW50c1xuY29uc3QgUFNFVURPX0VMRU1FTlRTID0gW1xuICAnYWZ0ZXInLFxuICAnYmFja2Ryb3AnLFxuICAnYmVmb3JlJyxcbiAgJ2N1ZScsXG4gICdjdWUtcmVnaW9uJyxcbiAgJ2ZpcnN0LWxldHRlcicsXG4gICdmaXJzdC1saW5lJyxcbiAgJ2dyYW1tYXItZXJyb3InLFxuICAnbWFya2VyJyxcbiAgJ3BhcnQnLFxuICAncGxhY2Vob2xkZXInLFxuICAnc2VsZWN0aW9uJyxcbiAgJ3Nsb3R0ZWQnLFxuICAnc3BlbGxpbmctZXJyb3InXG5dO1xuXG5jb25zdCBBVFRSSUJVVEVTID0gW1xuICAnYWxpZ24tY29udGVudCcsXG4gICdhbGlnbi1pdGVtcycsXG4gICdhbGlnbi1zZWxmJyxcbiAgJ2FuaW1hdGlvbicsXG4gICdhbmltYXRpb24tZGVsYXknLFxuICAnYW5pbWF0aW9uLWRpcmVjdGlvbicsXG4gICdhbmltYXRpb24tZHVyYXRpb24nLFxuICAnYW5pbWF0aW9uLWZpbGwtbW9kZScsXG4gICdhbmltYXRpb24taXRlcmF0aW9uLWNvdW50JyxcbiAgJ2FuaW1hdGlvbi1uYW1lJyxcbiAgJ2FuaW1hdGlvbi1wbGF5LXN0YXRlJyxcbiAgJ2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb24nLFxuICAnYXV0bycsXG4gICdiYWNrZmFjZS12aXNpYmlsaXR5JyxcbiAgJ2JhY2tncm91bmQnLFxuICAnYmFja2dyb3VuZC1hdHRhY2htZW50JyxcbiAgJ2JhY2tncm91bmQtY2xpcCcsXG4gICdiYWNrZ3JvdW5kLWNvbG9yJyxcbiAgJ2JhY2tncm91bmQtaW1hZ2UnLFxuICAnYmFja2dyb3VuZC1vcmlnaW4nLFxuICAnYmFja2dyb3VuZC1wb3NpdGlvbicsXG4gICdiYWNrZ3JvdW5kLXJlcGVhdCcsXG4gICdiYWNrZ3JvdW5kLXNpemUnLFxuICAnYm9yZGVyJyxcbiAgJ2JvcmRlci1ib3R0b20nLFxuICAnYm9yZGVyLWJvdHRvbS1jb2xvcicsXG4gICdib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzJyxcbiAgJ2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzJyxcbiAgJ2JvcmRlci1ib3R0b20tc3R5bGUnLFxuICAnYm9yZGVyLWJvdHRvbS13aWR0aCcsXG4gICdib3JkZXItY29sbGFwc2UnLFxuICAnYm9yZGVyLWNvbG9yJyxcbiAgJ2JvcmRlci1pbWFnZScsXG4gICdib3JkZXItaW1hZ2Utb3V0c2V0JyxcbiAgJ2JvcmRlci1pbWFnZS1yZXBlYXQnLFxuICAnYm9yZGVyLWltYWdlLXNsaWNlJyxcbiAgJ2JvcmRlci1pbWFnZS1zb3VyY2UnLFxuICAnYm9yZGVyLWltYWdlLXdpZHRoJyxcbiAgJ2JvcmRlci1sZWZ0JyxcbiAgJ2JvcmRlci1sZWZ0LWNvbG9yJyxcbiAgJ2JvcmRlci1sZWZ0LXN0eWxlJyxcbiAgJ2JvcmRlci1sZWZ0LXdpZHRoJyxcbiAgJ2JvcmRlci1yYWRpdXMnLFxuICAnYm9yZGVyLXJpZ2h0JyxcbiAgJ2JvcmRlci1yaWdodC1jb2xvcicsXG4gICdib3JkZXItcmlnaHQtc3R5bGUnLFxuICAnYm9yZGVyLXJpZ2h0LXdpZHRoJyxcbiAgJ2JvcmRlci1zcGFjaW5nJyxcbiAgJ2JvcmRlci1zdHlsZScsXG4gICdib3JkZXItdG9wJyxcbiAgJ2JvcmRlci10b3AtY29sb3InLFxuICAnYm9yZGVyLXRvcC1sZWZ0LXJhZGl1cycsXG4gICdib3JkZXItdG9wLXJpZ2h0LXJhZGl1cycsXG4gICdib3JkZXItdG9wLXN0eWxlJyxcbiAgJ2JvcmRlci10b3Atd2lkdGgnLFxuICAnYm9yZGVyLXdpZHRoJyxcbiAgJ2JvdHRvbScsXG4gICdib3gtZGVjb3JhdGlvbi1icmVhaycsXG4gICdib3gtc2hhZG93JyxcbiAgJ2JveC1zaXppbmcnLFxuICAnYnJlYWstYWZ0ZXInLFxuICAnYnJlYWstYmVmb3JlJyxcbiAgJ2JyZWFrLWluc2lkZScsXG4gICdjYXB0aW9uLXNpZGUnLFxuICAnY2xlYXInLFxuICAnY2xpcCcsXG4gICdjbGlwLXBhdGgnLFxuICAnY29sb3InLFxuICAnY29sdW1uLWNvdW50JyxcbiAgJ2NvbHVtbi1maWxsJyxcbiAgJ2NvbHVtbi1nYXAnLFxuICAnY29sdW1uLXJ1bGUnLFxuICAnY29sdW1uLXJ1bGUtY29sb3InLFxuICAnY29sdW1uLXJ1bGUtc3R5bGUnLFxuICAnY29sdW1uLXJ1bGUtd2lkdGgnLFxuICAnY29sdW1uLXNwYW4nLFxuICAnY29sdW1uLXdpZHRoJyxcbiAgJ2NvbHVtbnMnLFxuICAnY29udGVudCcsXG4gICdjb3VudGVyLWluY3JlbWVudCcsXG4gICdjb3VudGVyLXJlc2V0JyxcbiAgJ2N1cnNvcicsXG4gICdkaXJlY3Rpb24nLFxuICAnZGlzcGxheScsXG4gICdlbXB0eS1jZWxscycsXG4gICdmaWx0ZXInLFxuICAnZmxleCcsXG4gICdmbGV4LWJhc2lzJyxcbiAgJ2ZsZXgtZGlyZWN0aW9uJyxcbiAgJ2ZsZXgtZmxvdycsXG4gICdmbGV4LWdyb3cnLFxuICAnZmxleC1zaHJpbmsnLFxuICAnZmxleC13cmFwJyxcbiAgJ2Zsb2F0JyxcbiAgJ2ZvbnQnLFxuICAnZm9udC1kaXNwbGF5JyxcbiAgJ2ZvbnQtZmFtaWx5JyxcbiAgJ2ZvbnQtZmVhdHVyZS1zZXR0aW5ncycsXG4gICdmb250LWtlcm5pbmcnLFxuICAnZm9udC1sYW5ndWFnZS1vdmVycmlkZScsXG4gICdmb250LXNpemUnLFxuICAnZm9udC1zaXplLWFkanVzdCcsXG4gICdmb250LXNtb290aGluZycsXG4gICdmb250LXN0cmV0Y2gnLFxuICAnZm9udC1zdHlsZScsXG4gICdmb250LXZhcmlhbnQnLFxuICAnZm9udC12YXJpYW50LWxpZ2F0dXJlcycsXG4gICdmb250LXZhcmlhdGlvbi1zZXR0aW5ncycsXG4gICdmb250LXdlaWdodCcsXG4gICdoZWlnaHQnLFxuICAnaHlwaGVucycsXG4gICdpY29uJyxcbiAgJ2ltYWdlLW9yaWVudGF0aW9uJyxcbiAgJ2ltYWdlLXJlbmRlcmluZycsXG4gICdpbWFnZS1yZXNvbHV0aW9uJyxcbiAgJ2ltZS1tb2RlJyxcbiAgJ2luaGVyaXQnLFxuICAnaW5pdGlhbCcsXG4gICdqdXN0aWZ5LWNvbnRlbnQnLFxuICAnbGVmdCcsXG4gICdsZXR0ZXItc3BhY2luZycsXG4gICdsaW5lLWhlaWdodCcsXG4gICdsaXN0LXN0eWxlJyxcbiAgJ2xpc3Qtc3R5bGUtaW1hZ2UnLFxuICAnbGlzdC1zdHlsZS1wb3NpdGlvbicsXG4gICdsaXN0LXN0eWxlLXR5cGUnLFxuICAnbWFyZ2luJyxcbiAgJ21hcmdpbi1ib3R0b20nLFxuICAnbWFyZ2luLWxlZnQnLFxuICAnbWFyZ2luLXJpZ2h0JyxcbiAgJ21hcmdpbi10b3AnLFxuICAnbWFya3MnLFxuICAnbWFzaycsXG4gICdtYXgtaGVpZ2h0JyxcbiAgJ21heC13aWR0aCcsXG4gICdtaW4taGVpZ2h0JyxcbiAgJ21pbi13aWR0aCcsXG4gICduYXYtZG93bicsXG4gICduYXYtaW5kZXgnLFxuICAnbmF2LWxlZnQnLFxuICAnbmF2LXJpZ2h0JyxcbiAgJ25hdi11cCcsXG4gICdub25lJyxcbiAgJ25vcm1hbCcsXG4gICdvYmplY3QtZml0JyxcbiAgJ29iamVjdC1wb3NpdGlvbicsXG4gICdvcGFjaXR5JyxcbiAgJ29yZGVyJyxcbiAgJ29ycGhhbnMnLFxuICAnb3V0bGluZScsXG4gICdvdXRsaW5lLWNvbG9yJyxcbiAgJ291dGxpbmUtb2Zmc2V0JyxcbiAgJ291dGxpbmUtc3R5bGUnLFxuICAnb3V0bGluZS13aWR0aCcsXG4gICdvdmVyZmxvdycsXG4gICdvdmVyZmxvdy13cmFwJyxcbiAgJ292ZXJmbG93LXgnLFxuICAnb3ZlcmZsb3cteScsXG4gICdwYWRkaW5nJyxcbiAgJ3BhZGRpbmctYm90dG9tJyxcbiAgJ3BhZGRpbmctbGVmdCcsXG4gICdwYWRkaW5nLXJpZ2h0JyxcbiAgJ3BhZGRpbmctdG9wJyxcbiAgJ3BhZ2UtYnJlYWstYWZ0ZXInLFxuICAncGFnZS1icmVhay1iZWZvcmUnLFxuICAncGFnZS1icmVhay1pbnNpZGUnLFxuICAncGVyc3BlY3RpdmUnLFxuICAncGVyc3BlY3RpdmUtb3JpZ2luJyxcbiAgJ3BvaW50ZXItZXZlbnRzJyxcbiAgJ3Bvc2l0aW9uJyxcbiAgJ3F1b3RlcycsXG4gICdyZXNpemUnLFxuICAncmlnaHQnLFxuICAnc3JjJywgLy8gQGZvbnQtZmFjZVxuICAndGFiLXNpemUnLFxuICAndGFibGUtbGF5b3V0JyxcbiAgJ3RleHQtYWxpZ24nLFxuICAndGV4dC1hbGlnbi1sYXN0JyxcbiAgJ3RleHQtZGVjb3JhdGlvbicsXG4gICd0ZXh0LWRlY29yYXRpb24tY29sb3InLFxuICAndGV4dC1kZWNvcmF0aW9uLWxpbmUnLFxuICAndGV4dC1kZWNvcmF0aW9uLXN0eWxlJyxcbiAgJ3RleHQtaW5kZW50JyxcbiAgJ3RleHQtb3ZlcmZsb3cnLFxuICAndGV4dC1yZW5kZXJpbmcnLFxuICAndGV4dC1zaGFkb3cnLFxuICAndGV4dC10cmFuc2Zvcm0nLFxuICAndGV4dC11bmRlcmxpbmUtcG9zaXRpb24nLFxuICAndG9wJyxcbiAgJ3RyYW5zZm9ybScsXG4gICd0cmFuc2Zvcm0tb3JpZ2luJyxcbiAgJ3RyYW5zZm9ybS1zdHlsZScsXG4gICd0cmFuc2l0aW9uJyxcbiAgJ3RyYW5zaXRpb24tZGVsYXknLFxuICAndHJhbnNpdGlvbi1kdXJhdGlvbicsXG4gICd0cmFuc2l0aW9uLXByb3BlcnR5JyxcbiAgJ3RyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uJyxcbiAgJ3VuaWNvZGUtYmlkaScsXG4gICd2ZXJ0aWNhbC1hbGlnbicsXG4gICd2aXNpYmlsaXR5JyxcbiAgJ3doaXRlLXNwYWNlJyxcbiAgJ3dpZG93cycsXG4gICd3aWR0aCcsXG4gICd3b3JkLWJyZWFrJyxcbiAgJ3dvcmQtc3BhY2luZycsXG4gICd3b3JkLXdyYXAnLFxuICAnei1pbmRleCdcbiAgLy8gcmV2ZXJzZSBtYWtlcyBzdXJlIGxvbmdlciBhdHRyaWJ1dGVzIGBmb250LXdlaWdodGAgYXJlIG1hdGNoZWQgZnVsbHlcbiAgLy8gaW5zdGVhZCBvZiBnZXR0aW5nIGZhbHNlIHBvc2l0aXZlcyBvbiBzYXkgYGZvbnRgXG5dLnJldmVyc2UoKTtcblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqIEByZXR1cm5zIHtSZWdFeHB9XG4gKiAqL1xuXG4vKipcbiAqIEBwYXJhbSB7UmVnRXhwIHwgc3RyaW5nIH0gcmVcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIHNvdXJjZShyZSkge1xuICBpZiAoIXJlKSByZXR1cm4gbnVsbDtcbiAgaWYgKHR5cGVvZiByZSA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIHJlO1xuXG4gIHJldHVybiByZS5zb3VyY2U7XG59XG5cbi8qKlxuICogQHBhcmFtIHtSZWdFeHAgfCBzdHJpbmcgfSByZVxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gbG9va2FoZWFkKHJlKSB7XG4gIHJldHVybiBjb25jYXQoJyg/PScsIHJlLCAnKScpO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7Li4uKFJlZ0V4cCB8IHN0cmluZykgfSBhcmdzXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBjb25jYXQoLi4uYXJncykge1xuICBjb25zdCBqb2luZWQgPSBhcmdzLm1hcCgoeCkgPT4gc291cmNlKHgpKS5qb2luKFwiXCIpO1xuICByZXR1cm4gam9pbmVkO1xufVxuXG4vKlxuTGFuZ3VhZ2U6IENTU1xuQ2F0ZWdvcnk6IGNvbW1vbiwgY3NzXG5XZWJzaXRlOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1NcbiovXG5cbi8qKiBAdHlwZSBMYW5ndWFnZUZuICovXG5mdW5jdGlvbiBjc3MoaGxqcykge1xuICBjb25zdCBtb2RlcyA9IE1PREVTKGhsanMpO1xuICBjb25zdCBGVU5DVElPTl9ESVNQQVRDSCA9IHtcbiAgICBjbGFzc05hbWU6IFwiYnVpbHRfaW5cIixcbiAgICBiZWdpbjogL1tcXHctXSsoPz1cXCgpL1xuICB9O1xuICBjb25zdCBWRU5ET1JfUFJFRklYID0ge1xuICAgIGJlZ2luOiAvLSh3ZWJraXR8bW96fG1zfG8pLSg/PVthLXpdKS9cbiAgfTtcbiAgY29uc3QgQVRfTU9ESUZJRVJTID0gXCJhbmQgb3Igbm90IG9ubHlcIjtcbiAgY29uc3QgQVRfUFJPUEVSVFlfUkUgPSAvQC0/XFx3W1xcd10qKC1cXHcrKSovOyAvLyBALXdlYmtpdC1rZXlmcmFtZXNcbiAgY29uc3QgSURFTlRfUkUgPSAnW2EtekEtWi1dW2EtekEtWjAtOV8tXSonO1xuICBjb25zdCBTVFJJTkdTID0gW1xuICAgIGhsanMuQVBPU19TVFJJTkdfTU9ERSxcbiAgICBobGpzLlFVT1RFX1NUUklOR19NT0RFXG4gIF07XG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnQ1NTJyxcbiAgICBjYXNlX2luc2Vuc2l0aXZlOiB0cnVlLFxuICAgIGlsbGVnYWw6IC9bPXwnXFwkXS8sXG4gICAga2V5d29yZHM6IHtcbiAgICAgIGtleWZyYW1lUG9zaXRpb246IFwiZnJvbSB0b1wiXG4gICAgfSxcbiAgICBjbGFzc05hbWVBbGlhc2VzOiB7XG4gICAgICAvLyBmb3IgdmlzdWFsIGNvbnRpbnVpdHkgd2l0aCBgdGFnIHt9YCBhbmQgYmVjYXVzZSB3ZVxuICAgICAgLy8gZG9uJ3QgaGF2ZSBhIGdyZWF0IGNsYXNzIGZvciB0aGlzP1xuICAgICAga2V5ZnJhbWVQb3NpdGlvbjogXCJzZWxlY3Rvci10YWdcIlxuICAgIH0sXG4gICAgY29udGFpbnM6IFtcbiAgICAgIGhsanMuQ19CTE9DS19DT01NRU5UX01PREUsXG4gICAgICBWRU5ET1JfUFJFRklYLFxuICAgICAgLy8gdG8gcmVjb2duaXplIGtleWZyYW1lIDQwJSBldGMgd2hpY2ggYXJlIG91dHNpZGUgdGhlIHNjb3BlIG9mIG91clxuICAgICAgLy8gYXR0cmlidXRlIHZhbHVlIG1vZGVcbiAgICAgIGhsanMuQ1NTX05VTUJFUl9NT0RFLFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdzZWxlY3Rvci1pZCcsXG4gICAgICAgIGJlZ2luOiAvI1tBLVphLXowLTlfLV0rLyxcbiAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdzZWxlY3Rvci1jbGFzcycsXG4gICAgICAgIGJlZ2luOiAnXFxcXC4nICsgSURFTlRfUkUsXG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfSxcbiAgICAgIG1vZGVzLkFUVFJJQlVURV9TRUxFQ1RPUl9NT0RFLFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdzZWxlY3Rvci1wc2V1ZG8nLFxuICAgICAgICB2YXJpYW50czogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJlZ2luOiAnOignICsgUFNFVURPX0NMQVNTRVMuam9pbignfCcpICsgJyknXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBiZWdpbjogJzo6KCcgKyBQU0VVRE9fRUxFTUVOVFMuam9pbignfCcpICsgJyknXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgLy8gd2UgbWF5IGFjdHVhbGx5IG5lZWQgdGhpcyAoMTIvMjAyMClcbiAgICAgIC8vIHsgLy8gcHNldWRvLXNlbGVjdG9yIHBhcmFtc1xuICAgICAgLy8gICBiZWdpbjogL1xcKC8sXG4gICAgICAvLyAgIGVuZDogL1xcKS8sXG4gICAgICAvLyAgIGNvbnRhaW5zOiBbIGhsanMuQ1NTX05VTUJFUl9NT0RFIF1cbiAgICAgIC8vIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2F0dHJpYnV0ZScsXG4gICAgICAgIGJlZ2luOiAnXFxcXGIoJyArIEFUVFJJQlVURVMuam9pbignfCcpICsgJylcXFxcYidcbiAgICAgIH0sXG4gICAgICAvLyBhdHRyaWJ1dGUgdmFsdWVzXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAnOicsXG4gICAgICAgIGVuZDogJ1s7fV0nLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIG1vZGVzLkhFWENPTE9SLFxuICAgICAgICAgIG1vZGVzLklNUE9SVEFOVCxcbiAgICAgICAgICBobGpzLkNTU19OVU1CRVJfTU9ERSxcbiAgICAgICAgICAuLi5TVFJJTkdTLFxuICAgICAgICAgIC8vIG5lZWRlZCB0byBoaWdobGlnaHQgdGhlc2UgYXMgc3RyaW5ncyBhbmQgdG8gYXZvaWQgaXNzdWVzIHdpdGhcbiAgICAgICAgICAvLyBpbGxlZ2FsIGNoYXJhY3RlcnMgdGhhdCBtaWdodCBiZSBpbnNpZGUgdXJscyB0aGF0IHdvdWxkIHRpZ2dlciB0aGVcbiAgICAgICAgICAvLyBsYW5ndWFnZXMgaWxsZWdhbCBzdGFja1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJlZ2luOiAvKHVybHxkYXRhLXVyaSlcXCgvLFxuICAgICAgICAgICAgZW5kOiAvXFwpLyxcbiAgICAgICAgICAgIHJlbGV2YW5jZTogMCwgLy8gZnJvbSBrZXl3b3Jkc1xuICAgICAgICAgICAga2V5d29yZHM6IHtcbiAgICAgICAgICAgICAgYnVpbHRfaW46IFwidXJsIGRhdGEtdXJpXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb250YWluczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgIC8vIGFueSBjaGFyYWN0ZXIgb3RoZXIgdGhhbiBgKWAgYXMgaW4gYHVybCgpYCB3aWxsIGJlIHRoZSBzdGFydFxuICAgICAgICAgICAgICAgIC8vIG9mIGEgc3RyaW5nLCB3aGljaCBlbmRzIHdpdGggYClgIChmcm9tIHRoZSBwYXJlbnQgbW9kZSlcbiAgICAgICAgICAgICAgICBiZWdpbjogL1teKV0vLFxuICAgICAgICAgICAgICAgIGVuZHNXaXRoUGFyZW50OiB0cnVlLFxuICAgICAgICAgICAgICAgIGV4Y2x1ZGVFbmQ6IHRydWVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0sXG4gICAgICAgICAgRlVOQ1RJT05fRElTUEFUQ0hcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46IGxvb2thaGVhZCgvQC8pLFxuICAgICAgICBlbmQ6ICdbeztdJyxcbiAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICBpbGxlZ2FsOiAvOi8sIC8vIGJyZWFrIG9uIExlc3MgdmFyaWFibGVzIEB2YXI6IC4uLlxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ2tleXdvcmQnLFxuICAgICAgICAgICAgYmVnaW46IEFUX1BST1BFUlRZX1JFXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBiZWdpbjogL1xccy8sXG4gICAgICAgICAgICBlbmRzV2l0aFBhcmVudDogdHJ1ZSxcbiAgICAgICAgICAgIGV4Y2x1ZGVFbmQ6IHRydWUsXG4gICAgICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgICAgICBrZXl3b3Jkczoge1xuICAgICAgICAgICAgICAkcGF0dGVybjogL1thLXotXSsvLFxuICAgICAgICAgICAgICBrZXl3b3JkOiBBVF9NT0RJRklFUlMsXG4gICAgICAgICAgICAgIGF0dHJpYnV0ZTogTUVESUFfRkVBVFVSRVMuam9pbihcIiBcIilcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb250YWluczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYmVnaW46IC9bYS16LV0rKD89OikvLFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJhdHRyaWJ1dGVcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAuLi5TVFJJTkdTLFxuICAgICAgICAgICAgICBobGpzLkNTU19OVU1CRVJfTU9ERVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnc2VsZWN0b3ItdGFnJyxcbiAgICAgICAgYmVnaW46ICdcXFxcYignICsgVEFHUy5qb2luKCd8JykgKyAnKVxcXFxiJ1xuICAgICAgfVxuICAgIF1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjc3M7XG4iLCIvKlxuTGFuZ3VhZ2U6IEpTT05cbkRlc2NyaXB0aW9uOiBKU09OIChKYXZhU2NyaXB0IE9iamVjdCBOb3RhdGlvbikgaXMgYSBsaWdodHdlaWdodCBkYXRhLWludGVyY2hhbmdlIGZvcm1hdC5cbkF1dGhvcjogSXZhbiBTYWdhbGFldiA8bWFuaWFjQHNvZnR3YXJlbWFuaWFjcy5vcmc+XG5XZWJzaXRlOiBodHRwOi8vd3d3Lmpzb24ub3JnXG5DYXRlZ29yeTogY29tbW9uLCBwcm90b2NvbHNcbiovXG5cbmZ1bmN0aW9uIGpzb24oaGxqcykge1xuICBjb25zdCBMSVRFUkFMUyA9IHtcbiAgICBsaXRlcmFsOiAndHJ1ZSBmYWxzZSBudWxsJ1xuICB9O1xuICBjb25zdCBBTExPV0VEX0NPTU1FTlRTID0gW1xuICAgIGhsanMuQ19MSU5FX0NPTU1FTlRfTU9ERSxcbiAgICBobGpzLkNfQkxPQ0tfQ09NTUVOVF9NT0RFXG4gIF07XG4gIGNvbnN0IFRZUEVTID0gW1xuICAgIGhsanMuUVVPVEVfU1RSSU5HX01PREUsXG4gICAgaGxqcy5DX05VTUJFUl9NT0RFXG4gIF07XG4gIGNvbnN0IFZBTFVFX0NPTlRBSU5FUiA9IHtcbiAgICBlbmQ6ICcsJyxcbiAgICBlbmRzV2l0aFBhcmVudDogdHJ1ZSxcbiAgICBleGNsdWRlRW5kOiB0cnVlLFxuICAgIGNvbnRhaW5zOiBUWVBFUyxcbiAgICBrZXl3b3JkczogTElURVJBTFNcbiAgfTtcbiAgY29uc3QgT0JKRUNUID0ge1xuICAgIGJlZ2luOiAvXFx7LyxcbiAgICBlbmQ6IC9cXH0vLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2F0dHInLFxuICAgICAgICBiZWdpbjogL1wiLyxcbiAgICAgICAgZW5kOiAvXCIvLFxuICAgICAgICBjb250YWluczogW2hsanMuQkFDS1NMQVNIX0VTQ0FQRV0sXG4gICAgICAgIGlsbGVnYWw6ICdcXFxcbidcbiAgICAgIH0sXG4gICAgICBobGpzLmluaGVyaXQoVkFMVUVfQ09OVEFJTkVSLCB7XG4gICAgICAgIGJlZ2luOiAvOi9cbiAgICAgIH0pXG4gICAgXS5jb25jYXQoQUxMT1dFRF9DT01NRU5UUyksXG4gICAgaWxsZWdhbDogJ1xcXFxTJ1xuICB9O1xuICBjb25zdCBBUlJBWSA9IHtcbiAgICBiZWdpbjogJ1xcXFxbJyxcbiAgICBlbmQ6ICdcXFxcXScsXG4gICAgY29udGFpbnM6IFtobGpzLmluaGVyaXQoVkFMVUVfQ09OVEFJTkVSKV0sIC8vIGluaGVyaXQgaXMgYSB3b3JrYXJvdW5kIGZvciBhIGJ1ZyB0aGF0IG1ha2VzIHNoYXJlZCBtb2RlcyB3aXRoIGVuZHNXaXRoUGFyZW50IGNvbXBpbGUgb25seSB0aGUgZW5kaW5nIG9mIG9uZSBvZiB0aGUgcGFyZW50c1xuICAgIGlsbGVnYWw6ICdcXFxcUydcbiAgfTtcbiAgVFlQRVMucHVzaChPQkpFQ1QsIEFSUkFZKTtcbiAgQUxMT1dFRF9DT01NRU5UUy5mb3JFYWNoKGZ1bmN0aW9uKHJ1bGUpIHtcbiAgICBUWVBFUy5wdXNoKHJ1bGUpO1xuICB9KTtcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnSlNPTicsXG4gICAgY29udGFpbnM6IFRZUEVTLFxuICAgIGtleXdvcmRzOiBMSVRFUkFMUyxcbiAgICBpbGxlZ2FsOiAnXFxcXFMnXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0ganNvbjtcbiIsIi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiBAcmV0dXJucyB7UmVnRXhwfVxuICogKi9cblxuLyoqXG4gKiBAcGFyYW0ge1JlZ0V4cCB8IHN0cmluZyB9IHJlXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBzb3VyY2UocmUpIHtcbiAgaWYgKCFyZSkgcmV0dXJuIG51bGw7XG4gIGlmICh0eXBlb2YgcmUgPT09IFwic3RyaW5nXCIpIHJldHVybiByZTtcblxuICByZXR1cm4gcmUuc291cmNlO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7UmVnRXhwIHwgc3RyaW5nIH0gcmVcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGxvb2thaGVhZChyZSkge1xuICByZXR1cm4gY29uY2F0KCcoPz0nLCByZSwgJyknKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge1JlZ0V4cCB8IHN0cmluZyB9IHJlXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBvcHRpb25hbChyZSkge1xuICByZXR1cm4gY29uY2F0KCcoJywgcmUsICcpPycpO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7Li4uKFJlZ0V4cCB8IHN0cmluZykgfSBhcmdzXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBjb25jYXQoLi4uYXJncykge1xuICBjb25zdCBqb2luZWQgPSBhcmdzLm1hcCgoeCkgPT4gc291cmNlKHgpKS5qb2luKFwiXCIpO1xuICByZXR1cm4gam9pbmVkO1xufVxuXG4vKipcbiAqIEFueSBvZiB0aGUgcGFzc2VkIGV4cHJlc3NzaW9ucyBtYXkgbWF0Y2hcbiAqXG4gKiBDcmVhdGVzIGEgaHVnZSB0aGlzIHwgdGhpcyB8IHRoYXQgfCB0aGF0IG1hdGNoXG4gKiBAcGFyYW0geyhSZWdFeHAgfCBzdHJpbmcpW10gfSBhcmdzXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBlaXRoZXIoLi4uYXJncykge1xuICBjb25zdCBqb2luZWQgPSAnKCcgKyBhcmdzLm1hcCgoeCkgPT4gc291cmNlKHgpKS5qb2luKFwifFwiKSArIFwiKVwiO1xuICByZXR1cm4gam9pbmVkO1xufVxuXG4vKlxuTGFuZ3VhZ2U6IEhUTUwsIFhNTFxuV2Vic2l0ZTogaHR0cHM6Ly93d3cudzMub3JnL1hNTC9cbkNhdGVnb3J5OiBjb21tb25cbkF1ZGl0OiAyMDIwXG4qL1xuXG4vKiogQHR5cGUgTGFuZ3VhZ2VGbiAqL1xuZnVuY3Rpb24geG1sKGhsanMpIHtcbiAgLy8gRWxlbWVudCBuYW1lcyBjYW4gY29udGFpbiBsZXR0ZXJzLCBkaWdpdHMsIGh5cGhlbnMsIHVuZGVyc2NvcmVzLCBhbmQgcGVyaW9kc1xuICBjb25zdCBUQUdfTkFNRV9SRSA9IGNvbmNhdCgvW0EtWl9dLywgb3B0aW9uYWwoL1tBLVowLTlfLi1dKjovKSwgL1tBLVowLTlfLi1dKi8pO1xuICBjb25zdCBYTUxfSURFTlRfUkUgPSAvW0EtWmEtejAtOS5fOi1dKy87XG4gIGNvbnN0IFhNTF9FTlRJVElFUyA9IHtcbiAgICBjbGFzc05hbWU6ICdzeW1ib2wnLFxuICAgIGJlZ2luOiAvJlthLXpdKzt8JiNbMC05XSs7fCYjeFthLWYwLTldKzsvXG4gIH07XG4gIGNvbnN0IFhNTF9NRVRBX0tFWVdPUkRTID0ge1xuICAgIGJlZ2luOiAvXFxzLyxcbiAgICBjb250YWluczogW1xuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdtZXRhLWtleXdvcmQnLFxuICAgICAgICBiZWdpbjogLyM/W2Etel9dW2EtejEtOV8tXSsvLFxuICAgICAgICBpbGxlZ2FsOiAvXFxuL1xuICAgICAgfVxuICAgIF1cbiAgfTtcbiAgY29uc3QgWE1MX01FVEFfUEFSX0tFWVdPUkRTID0gaGxqcy5pbmhlcml0KFhNTF9NRVRBX0tFWVdPUkRTLCB7XG4gICAgYmVnaW46IC9cXCgvLFxuICAgIGVuZDogL1xcKS9cbiAgfSk7XG4gIGNvbnN0IEFQT1NfTUVUQV9TVFJJTkdfTU9ERSA9IGhsanMuaW5oZXJpdChobGpzLkFQT1NfU1RSSU5HX01PREUsIHtcbiAgICBjbGFzc05hbWU6ICdtZXRhLXN0cmluZydcbiAgfSk7XG4gIGNvbnN0IFFVT1RFX01FVEFfU1RSSU5HX01PREUgPSBobGpzLmluaGVyaXQoaGxqcy5RVU9URV9TVFJJTkdfTU9ERSwge1xuICAgIGNsYXNzTmFtZTogJ21ldGEtc3RyaW5nJ1xuICB9KTtcbiAgY29uc3QgVEFHX0lOVEVSTkFMUyA9IHtcbiAgICBlbmRzV2l0aFBhcmVudDogdHJ1ZSxcbiAgICBpbGxlZ2FsOiAvPC8sXG4gICAgcmVsZXZhbmNlOiAwLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2F0dHInLFxuICAgICAgICBiZWdpbjogWE1MX0lERU5UX1JFLFxuICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAvPVxccyovLFxuICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICAgICAgICAgIGVuZHNQYXJlbnQ6IHRydWUsXG4gICAgICAgICAgICB2YXJpYW50czogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYmVnaW46IC9cIi8sXG4gICAgICAgICAgICAgICAgZW5kOiAvXCIvLFxuICAgICAgICAgICAgICAgIGNvbnRhaW5zOiBbIFhNTF9FTlRJVElFUyBdXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBiZWdpbjogLycvLFxuICAgICAgICAgICAgICAgIGVuZDogLycvLFxuICAgICAgICAgICAgICAgIGNvbnRhaW5zOiBbIFhNTF9FTlRJVElFUyBdXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBiZWdpbjogL1teXFxzXCInPTw+YF0rL1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgXVxuICB9O1xuICByZXR1cm4ge1xuICAgIG5hbWU6ICdIVE1MLCBYTUwnLFxuICAgIGFsaWFzZXM6IFtcbiAgICAgICdodG1sJyxcbiAgICAgICd4aHRtbCcsXG4gICAgICAncnNzJyxcbiAgICAgICdhdG9tJyxcbiAgICAgICd4amInLFxuICAgICAgJ3hzZCcsXG4gICAgICAneHNsJyxcbiAgICAgICdwbGlzdCcsXG4gICAgICAnd3NmJyxcbiAgICAgICdzdmcnXG4gICAgXSxcbiAgICBjYXNlX2luc2Vuc2l0aXZlOiB0cnVlLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ21ldGEnLFxuICAgICAgICBiZWdpbjogLzwhW2Etel0vLFxuICAgICAgICBlbmQ6IC8+LyxcbiAgICAgICAgcmVsZXZhbmNlOiAxMCxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICBYTUxfTUVUQV9LRVlXT1JEUyxcbiAgICAgICAgICBRVU9URV9NRVRBX1NUUklOR19NT0RFLFxuICAgICAgICAgIEFQT1NfTUVUQV9TVFJJTkdfTU9ERSxcbiAgICAgICAgICBYTUxfTUVUQV9QQVJfS0VZV09SRFMsXG4gICAgICAgICAge1xuICAgICAgICAgICAgYmVnaW46IC9cXFsvLFxuICAgICAgICAgICAgZW5kOiAvXFxdLyxcbiAgICAgICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdtZXRhJyxcbiAgICAgICAgICAgICAgICBiZWdpbjogLzwhW2Etel0vLFxuICAgICAgICAgICAgICAgIGVuZDogLz4vLFxuICAgICAgICAgICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICAgICAgICBYTUxfTUVUQV9LRVlXT1JEUyxcbiAgICAgICAgICAgICAgICAgIFhNTF9NRVRBX1BBUl9LRVlXT1JEUyxcbiAgICAgICAgICAgICAgICAgIFFVT1RFX01FVEFfU1RSSU5HX01PREUsXG4gICAgICAgICAgICAgICAgICBBUE9TX01FVEFfU1RSSU5HX01PREVcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBobGpzLkNPTU1FTlQoXG4gICAgICAgIC88IS0tLyxcbiAgICAgICAgLy0tPi8sXG4gICAgICAgIHtcbiAgICAgICAgICByZWxldmFuY2U6IDEwXG4gICAgICAgIH1cbiAgICAgICksXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAvPCFcXFtDREFUQVxcWy8sXG4gICAgICAgIGVuZDogL1xcXVxcXT4vLFxuICAgICAgICByZWxldmFuY2U6IDEwXG4gICAgICB9LFxuICAgICAgWE1MX0VOVElUSUVTLFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdtZXRhJyxcbiAgICAgICAgYmVnaW46IC88XFw/eG1sLyxcbiAgICAgICAgZW5kOiAvXFw/Pi8sXG4gICAgICAgIHJlbGV2YW5jZTogMTBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3RhZycsXG4gICAgICAgIC8qXG4gICAgICAgIFRoZSBsb29rYWhlYWQgcGF0dGVybiAoPz0uLi4pIGVuc3VyZXMgdGhhdCAnYmVnaW4nIG9ubHkgbWF0Y2hlc1xuICAgICAgICAnPHN0eWxlJyBhcyBhIHNpbmdsZSB3b3JkLCBmb2xsb3dlZCBieSBhIHdoaXRlc3BhY2Ugb3IgYW5cbiAgICAgICAgZW5kaW5nIGJyYWtldC4gVGhlICckJyBpcyBuZWVkZWQgZm9yIHRoZSBsZXhlbWUgdG8gYmUgcmVjb2duaXplZFxuICAgICAgICBieSBobGpzLnN1Yk1vZGUoKSB0aGF0IHRlc3RzIGxleGVtZXMgb3V0c2lkZSB0aGUgc3RyZWFtLlxuICAgICAgICAqL1xuICAgICAgICBiZWdpbjogLzxzdHlsZSg/PVxcc3w+KS8sXG4gICAgICAgIGVuZDogLz4vLFxuICAgICAgICBrZXl3b3Jkczoge1xuICAgICAgICAgIG5hbWU6ICdzdHlsZSdcbiAgICAgICAgfSxcbiAgICAgICAgY29udGFpbnM6IFsgVEFHX0lOVEVSTkFMUyBdLFxuICAgICAgICBzdGFydHM6IHtcbiAgICAgICAgICBlbmQ6IC88XFwvc3R5bGU+LyxcbiAgICAgICAgICByZXR1cm5FbmQ6IHRydWUsXG4gICAgICAgICAgc3ViTGFuZ3VhZ2U6IFtcbiAgICAgICAgICAgICdjc3MnLFxuICAgICAgICAgICAgJ3htbCdcbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3RhZycsXG4gICAgICAgIC8vIFNlZSB0aGUgY29tbWVudCBpbiB0aGUgPHN0eWxlIHRhZyBhYm91dCB0aGUgbG9va2FoZWFkIHBhdHRlcm5cbiAgICAgICAgYmVnaW46IC88c2NyaXB0KD89XFxzfD4pLyxcbiAgICAgICAgZW5kOiAvPi8sXG4gICAgICAgIGtleXdvcmRzOiB7XG4gICAgICAgICAgbmFtZTogJ3NjcmlwdCdcbiAgICAgICAgfSxcbiAgICAgICAgY29udGFpbnM6IFsgVEFHX0lOVEVSTkFMUyBdLFxuICAgICAgICBzdGFydHM6IHtcbiAgICAgICAgICBlbmQ6IC88XFwvc2NyaXB0Pi8sXG4gICAgICAgICAgcmV0dXJuRW5kOiB0cnVlLFxuICAgICAgICAgIHN1Ykxhbmd1YWdlOiBbXG4gICAgICAgICAgICAnamF2YXNjcmlwdCcsXG4gICAgICAgICAgICAnaGFuZGxlYmFycycsXG4gICAgICAgICAgICAneG1sJ1xuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIC8vIHdlIG5lZWQgdGhpcyBmb3Igbm93IGZvciBqU1hcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAndGFnJyxcbiAgICAgICAgYmVnaW46IC88Pnw8XFwvPi9cbiAgICAgIH0sXG4gICAgICAvLyBvcGVuIHRhZ1xuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICd0YWcnLFxuICAgICAgICBiZWdpbjogY29uY2F0KFxuICAgICAgICAgIC88LyxcbiAgICAgICAgICBsb29rYWhlYWQoY29uY2F0KFxuICAgICAgICAgICAgVEFHX05BTUVfUkUsXG4gICAgICAgICAgICAvLyA8dGFnLz5cbiAgICAgICAgICAgIC8vIDx0YWc+XG4gICAgICAgICAgICAvLyA8dGFnIC4uLlxuICAgICAgICAgICAgZWl0aGVyKC9cXC8+LywgLz4vLCAvXFxzLylcbiAgICAgICAgICApKVxuICAgICAgICApLFxuICAgICAgICBlbmQ6IC9cXC8/Pi8sXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAnbmFtZScsXG4gICAgICAgICAgICBiZWdpbjogVEFHX05BTUVfUkUsXG4gICAgICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgICAgICBzdGFydHM6IFRBR19JTlRFUk5BTFNcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICAvLyBjbG9zZSB0YWdcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAndGFnJyxcbiAgICAgICAgYmVnaW46IGNvbmNhdChcbiAgICAgICAgICAvPFxcLy8sXG4gICAgICAgICAgbG9va2FoZWFkKGNvbmNhdChcbiAgICAgICAgICAgIFRBR19OQU1FX1JFLCAvPi9cbiAgICAgICAgICApKVxuICAgICAgICApLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ25hbWUnLFxuICAgICAgICAgICAgYmVnaW46IFRBR19OQU1FX1JFLFxuICAgICAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBiZWdpbjogLz4vLFxuICAgICAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICAgICAgZW5kc1BhcmVudDogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIF1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB4bWw7XG4iLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9hdG9tLW9uZS1kYXJrLmNzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydHt1c2VTdGF0ZSBhcyBuLHVzZVJlZHVjZXIgYXMgdCx1c2VFZmZlY3QgYXMgZSx1c2VMYXlvdXRFZmZlY3QgYXMgcix1c2VSZWYgYXMgdSx1c2VJbXBlcmF0aXZlSGFuZGxlIGFzIG8sdXNlTWVtbyBhcyBpLHVzZUNhbGxiYWNrIGFzIGwsdXNlQ29udGV4dCBhcyBmLHVzZURlYnVnVmFsdWUgYXMgY31mcm9tXCJwcmVhY3QvaG9va3NcIjtleHBvcnQqZnJvbVwicHJlYWN0L2hvb2tzXCI7aW1wb3J0e0NvbXBvbmVudCBhcyBhLGNyZWF0ZUVsZW1lbnQgYXMgcyxvcHRpb25zIGFzIGgsdG9DaGlsZEFycmF5IGFzIHYsRnJhZ21lbnQgYXMgZCxyZW5kZXIgYXMgcCxoeWRyYXRlIGFzIG0sY2xvbmVFbGVtZW50IGFzIHksY3JlYXRlUmVmIGFzIGIsY3JlYXRlQ29udGV4dCBhcyBffWZyb21cInByZWFjdFwiO2V4cG9ydHtjcmVhdGVFbGVtZW50LGNyZWF0ZUNvbnRleHQsY3JlYXRlUmVmLEZyYWdtZW50LENvbXBvbmVudH1mcm9tXCJwcmVhY3RcIjtmdW5jdGlvbiBTKG4sdCl7Zm9yKHZhciBlIGluIHQpbltlXT10W2VdO3JldHVybiBufWZ1bmN0aW9uIEMobix0KXtmb3IodmFyIGUgaW4gbilpZihcIl9fc291cmNlXCIhPT1lJiYhKGUgaW4gdCkpcmV0dXJuITA7Zm9yKHZhciByIGluIHQpaWYoXCJfX3NvdXJjZVwiIT09ciYmbltyXSE9PXRbcl0pcmV0dXJuITA7cmV0dXJuITF9ZnVuY3Rpb24gRShuKXt0aGlzLnByb3BzPW59ZnVuY3Rpb24gZyhuLHQpe2Z1bmN0aW9uIGUobil7dmFyIGU9dGhpcy5wcm9wcy5yZWYscj1lPT1uLnJlZjtyZXR1cm4hciYmZSYmKGUuY2FsbD9lKG51bGwpOmUuY3VycmVudD1udWxsKSx0PyF0KHRoaXMucHJvcHMsbil8fCFyOkModGhpcy5wcm9wcyxuKX1mdW5jdGlvbiByKHQpe3JldHVybiB0aGlzLnNob3VsZENvbXBvbmVudFVwZGF0ZT1lLHMobix0KX1yZXR1cm4gci5kaXNwbGF5TmFtZT1cIk1lbW8oXCIrKG4uZGlzcGxheU5hbWV8fG4ubmFtZSkrXCIpXCIsci5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudD0hMCxyLl9fZj0hMCxyfShFLnByb3RvdHlwZT1uZXcgYSkuaXNQdXJlUmVhY3RDb21wb25lbnQ9ITAsRS5wcm90b3R5cGUuc2hvdWxkQ29tcG9uZW50VXBkYXRlPWZ1bmN0aW9uKG4sdCl7cmV0dXJuIEModGhpcy5wcm9wcyxuKXx8Qyh0aGlzLnN0YXRlLHQpfTt2YXIgdz1oLl9fYjtoLl9fYj1mdW5jdGlvbihuKXtuLnR5cGUmJm4udHlwZS5fX2YmJm4ucmVmJiYobi5wcm9wcy5yZWY9bi5yZWYsbi5yZWY9bnVsbCksdyYmdyhuKX07dmFyIFI9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLmZvciYmU3ltYm9sLmZvcihcInJlYWN0LmZvcndhcmRfcmVmXCIpfHwzOTExO2Z1bmN0aW9uIHgobil7ZnVuY3Rpb24gdCh0LGUpe3ZhciByPVMoe30sdCk7cmV0dXJuIGRlbGV0ZSByLnJlZixuKHIsKGU9dC5yZWZ8fGUpJiYoXCJvYmplY3RcIiE9dHlwZW9mIGV8fFwiY3VycmVudFwiaW4gZSk/ZTpudWxsKX1yZXR1cm4gdC4kJHR5cGVvZj1SLHQucmVuZGVyPXQsdC5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudD10Ll9fZj0hMCx0LmRpc3BsYXlOYW1lPVwiRm9yd2FyZFJlZihcIisobi5kaXNwbGF5TmFtZXx8bi5uYW1lKStcIilcIix0fXZhciBOPWZ1bmN0aW9uKG4sdCl7cmV0dXJuIG51bGw9PW4/bnVsbDp2KHYobikubWFwKHQpKX0saz17bWFwOk4sZm9yRWFjaDpOLGNvdW50OmZ1bmN0aW9uKG4pe3JldHVybiBuP3YobikubGVuZ3RoOjB9LG9ubHk6ZnVuY3Rpb24obil7dmFyIHQ9dihuKTtpZigxIT09dC5sZW5ndGgpdGhyb3dcIkNoaWxkcmVuLm9ubHlcIjtyZXR1cm4gdFswXX0sdG9BcnJheTp2fSxBPWguX19lO2guX19lPWZ1bmN0aW9uKG4sdCxlKXtpZihuLnRoZW4pZm9yKHZhciByLHU9dDt1PXUuX187KWlmKChyPXUuX19jKSYmci5fX2MpcmV0dXJuIG51bGw9PXQuX19lJiYodC5fX2U9ZS5fX2UsdC5fX2s9ZS5fX2spLHIuX19jKG4sdCk7QShuLHQsZSl9O3ZhciBPPWgudW5tb3VudDtmdW5jdGlvbiBMKCl7dGhpcy5fX3U9MCx0aGlzLnQ9bnVsbCx0aGlzLl9fYj1udWxsfWZ1bmN0aW9uIFUobil7dmFyIHQ9bi5fXy5fX2M7cmV0dXJuIHQmJnQuX19lJiZ0Ll9fZShuKX1mdW5jdGlvbiBGKG4pe3ZhciB0LGUscjtmdW5jdGlvbiB1KHUpe2lmKHR8fCh0PW4oKSkudGhlbihmdW5jdGlvbihuKXtlPW4uZGVmYXVsdHx8bn0sZnVuY3Rpb24obil7cj1ufSkscil0aHJvdyByO2lmKCFlKXRocm93IHQ7cmV0dXJuIHMoZSx1KX1yZXR1cm4gdS5kaXNwbGF5TmFtZT1cIkxhenlcIix1Ll9fZj0hMCx1fWZ1bmN0aW9uIE0oKXt0aGlzLnU9bnVsbCx0aGlzLm89bnVsbH1oLnVubW91bnQ9ZnVuY3Rpb24obil7dmFyIHQ9bi5fX2M7dCYmdC5fX1ImJnQuX19SKCksdCYmITA9PT1uLl9faCYmKG4udHlwZT1udWxsKSxPJiZPKG4pfSwoTC5wcm90b3R5cGU9bmV3IGEpLl9fYz1mdW5jdGlvbihuLHQpe3ZhciBlPXQuX19jLHI9dGhpcztudWxsPT1yLnQmJihyLnQ9W10pLHIudC5wdXNoKGUpO3ZhciB1PVUoci5fX3YpLG89ITEsaT1mdW5jdGlvbigpe298fChvPSEwLGUuX19SPW51bGwsdT91KGwpOmwoKSl9O2UuX19SPWk7dmFyIGw9ZnVuY3Rpb24oKXtpZighLS1yLl9fdSl7aWYoci5zdGF0ZS5fX2Upe3ZhciBuPXIuc3RhdGUuX19lO3IuX192Ll9fa1swXT1mdW5jdGlvbiBuKHQsZSxyKXtyZXR1cm4gdCYmKHQuX192PW51bGwsdC5fX2s9dC5fX2smJnQuX19rLm1hcChmdW5jdGlvbih0KXtyZXR1cm4gbih0LGUscil9KSx0Ll9fYyYmdC5fX2MuX19QPT09ZSYmKHQuX19lJiZyLmluc2VydEJlZm9yZSh0Ll9fZSx0Ll9fZCksdC5fX2MuX19lPSEwLHQuX19jLl9fUD1yKSksdH0obixuLl9fYy5fX1Asbi5fX2MuX19PKX12YXIgdDtmb3Ioci5zZXRTdGF0ZSh7X19lOnIuX19iPW51bGx9KTt0PXIudC5wb3AoKTspdC5mb3JjZVVwZGF0ZSgpfX0sZj0hMD09PXQuX19oO3IuX191Kyt8fGZ8fHIuc2V0U3RhdGUoe19fZTpyLl9fYj1yLl9fdi5fX2tbMF19KSxuLnRoZW4oaSxpKX0sTC5wcm90b3R5cGUuY29tcG9uZW50V2lsbFVubW91bnQ9ZnVuY3Rpb24oKXt0aGlzLnQ9W119LEwucHJvdG90eXBlLnJlbmRlcj1mdW5jdGlvbihuLHQpe2lmKHRoaXMuX19iKXtpZih0aGlzLl9fdi5fX2spe3ZhciBlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikscj10aGlzLl9fdi5fX2tbMF0uX19jO3RoaXMuX192Ll9fa1swXT1mdW5jdGlvbiBuKHQsZSxyKXtyZXR1cm4gdCYmKHQuX19jJiZ0Ll9fYy5fX0gmJih0Ll9fYy5fX0guX18uZm9yRWFjaChmdW5jdGlvbihuKXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBuLl9fYyYmbi5fX2MoKX0pLHQuX19jLl9fSD1udWxsKSxudWxsIT0odD1TKHt9LHQpKS5fX2MmJih0Ll9fYy5fX1A9PT1yJiYodC5fX2MuX19QPWUpLHQuX19jPW51bGwpLHQuX19rPXQuX19rJiZ0Ll9fay5tYXAoZnVuY3Rpb24odCl7cmV0dXJuIG4odCxlLHIpfSkpLHR9KHRoaXMuX19iLGUsci5fX089ci5fX1ApfXRoaXMuX19iPW51bGx9dmFyIHU9dC5fX2UmJnMoZCxudWxsLG4uZmFsbGJhY2spO3JldHVybiB1JiYodS5fX2g9bnVsbCksW3MoZCxudWxsLHQuX19lP251bGw6bi5jaGlsZHJlbiksdV19O3ZhciBUPWZ1bmN0aW9uKG4sdCxlKXtpZigrK2VbMV09PT1lWzBdJiZuLm8uZGVsZXRlKHQpLG4ucHJvcHMucmV2ZWFsT3JkZXImJihcInRcIiE9PW4ucHJvcHMucmV2ZWFsT3JkZXJbMF18fCFuLm8uc2l6ZSkpZm9yKGU9bi51O2U7KXtmb3IoO2UubGVuZ3RoPjM7KWUucG9wKCkoKTtpZihlWzFdPGVbMF0pYnJlYWs7bi51PWU9ZVsyXX19O2Z1bmN0aW9uIEQobil7cmV0dXJuIHRoaXMuZ2V0Q2hpbGRDb250ZXh0PWZ1bmN0aW9uKCl7cmV0dXJuIG4uY29udGV4dH0sbi5jaGlsZHJlbn1mdW5jdGlvbiBJKG4pe3ZhciB0PXRoaXMsZT1uLmk7dC5jb21wb25lbnRXaWxsVW5tb3VudD1mdW5jdGlvbigpe3AobnVsbCx0LmwpLHQubD1udWxsLHQuaT1udWxsfSx0LmkmJnQuaSE9PWUmJnQuY29tcG9uZW50V2lsbFVubW91bnQoKSxuLl9fdj8odC5sfHwodC5pPWUsdC5sPXtub2RlVHlwZToxLHBhcmVudE5vZGU6ZSxjaGlsZE5vZGVzOltdLGFwcGVuZENoaWxkOmZ1bmN0aW9uKG4pe3RoaXMuY2hpbGROb2Rlcy5wdXNoKG4pLHQuaS5hcHBlbmRDaGlsZChuKX0saW5zZXJ0QmVmb3JlOmZ1bmN0aW9uKG4sZSl7dGhpcy5jaGlsZE5vZGVzLnB1c2gobiksdC5pLmFwcGVuZENoaWxkKG4pfSxyZW1vdmVDaGlsZDpmdW5jdGlvbihuKXt0aGlzLmNoaWxkTm9kZXMuc3BsaWNlKHRoaXMuY2hpbGROb2Rlcy5pbmRleE9mKG4pPj4+MSwxKSx0LmkucmVtb3ZlQ2hpbGQobil9fSkscChzKEQse2NvbnRleHQ6dC5jb250ZXh0fSxuLl9fdiksdC5sKSk6dC5sJiZ0LmNvbXBvbmVudFdpbGxVbm1vdW50KCl9ZnVuY3Rpb24gVyhuLHQpe3JldHVybiBzKEkse19fdjpuLGk6dH0pfShNLnByb3RvdHlwZT1uZXcgYSkuX19lPWZ1bmN0aW9uKG4pe3ZhciB0PXRoaXMsZT1VKHQuX192KSxyPXQuby5nZXQobik7cmV0dXJuIHJbMF0rKyxmdW5jdGlvbih1KXt2YXIgbz1mdW5jdGlvbigpe3QucHJvcHMucmV2ZWFsT3JkZXI/KHIucHVzaCh1KSxUKHQsbixyKSk6dSgpfTtlP2Uobyk6bygpfX0sTS5wcm90b3R5cGUucmVuZGVyPWZ1bmN0aW9uKG4pe3RoaXMudT1udWxsLHRoaXMubz1uZXcgTWFwO3ZhciB0PXYobi5jaGlsZHJlbik7bi5yZXZlYWxPcmRlciYmXCJiXCI9PT1uLnJldmVhbE9yZGVyWzBdJiZ0LnJldmVyc2UoKTtmb3IodmFyIGU9dC5sZW5ndGg7ZS0tOyl0aGlzLm8uc2V0KHRbZV0sdGhpcy51PVsxLDAsdGhpcy51XSk7cmV0dXJuIG4uY2hpbGRyZW59LE0ucHJvdG90eXBlLmNvbXBvbmVudERpZFVwZGF0ZT1NLnByb3RvdHlwZS5jb21wb25lbnREaWRNb3VudD1mdW5jdGlvbigpe3ZhciBuPXRoaXM7dGhpcy5vLmZvckVhY2goZnVuY3Rpb24odCxlKXtUKG4sZSx0KX0pfTt2YXIgaj1cInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wuZm9yJiZTeW1ib2wuZm9yKFwicmVhY3QuZWxlbWVudFwiKXx8NjAxMDMsUD0vXig/OmFjY2VudHxhbGlnbm1lbnR8YXJhYmljfGJhc2VsaW5lfGNhcHxjbGlwKD8hUGF0aFUpfGNvbG9yfGZpbGx8Zmxvb2R8Zm9udHxnbHlwaCg/IVIpfGhvcml6fG1hcmtlcig/IUh8V3xVKXxvdmVybGluZXxwYWludHxzdG9wfHN0cmlrZXRocm91Z2h8c3Ryb2tlfHRleHQoPyFMKXx1bmRlcmxpbmV8dW5pY29kZXx1bml0c3x2fHZlY3Rvcnx2ZXJ0fHdvcmR8d3JpdGluZ3x4KD8hQykpW0EtWl0vLFY9ZnVuY3Rpb24obil7cmV0dXJuKFwidW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlwic3ltYm9sXCI9PXR5cGVvZiBTeW1ib2woKT8vZmlsfGNoZXxyYWQvaTovZmlsfGNoZXxyYS9pKS50ZXN0KG4pfTtmdW5jdGlvbiB6KG4sdCxlKXtyZXR1cm4gbnVsbD09dC5fX2smJih0LnRleHRDb250ZW50PVwiXCIpLHAobix0KSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBlJiZlKCksbj9uLl9fYzpudWxsfWZ1bmN0aW9uIEIobix0LGUpe3JldHVybiBtKG4sdCksXCJmdW5jdGlvblwiPT10eXBlb2YgZSYmZSgpLG4/bi5fX2M6bnVsbH1hLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50PXt9LFtcImNvbXBvbmVudFdpbGxNb3VudFwiLFwiY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wc1wiLFwiY29tcG9uZW50V2lsbFVwZGF0ZVwiXS5mb3JFYWNoKGZ1bmN0aW9uKG4pe09iamVjdC5kZWZpbmVQcm9wZXJ0eShhLnByb3RvdHlwZSxuLHtjb25maWd1cmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXNbXCJVTlNBRkVfXCIrbl19LHNldDpmdW5jdGlvbih0KXtPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxuLHtjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6dH0pfX0pfSk7dmFyIEg9aC5ldmVudDtmdW5jdGlvbiBaKCl7fWZ1bmN0aW9uIFkoKXtyZXR1cm4gdGhpcy5jYW5jZWxCdWJibGV9ZnVuY3Rpb24gJCgpe3JldHVybiB0aGlzLmRlZmF1bHRQcmV2ZW50ZWR9aC5ldmVudD1mdW5jdGlvbihuKXtyZXR1cm4gSCYmKG49SChuKSksbi5wZXJzaXN0PVosbi5pc1Byb3BhZ2F0aW9uU3RvcHBlZD1ZLG4uaXNEZWZhdWx0UHJldmVudGVkPSQsbi5uYXRpdmVFdmVudD1ufTt2YXIgcSxHPXtjb25maWd1cmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY2xhc3N9fSxKPWgudm5vZGU7aC52bm9kZT1mdW5jdGlvbihuKXt2YXIgdD1uLnR5cGUsZT1uLnByb3BzLHI9ZTtpZihcInN0cmluZ1wiPT10eXBlb2YgdCl7Zm9yKHZhciB1IGluIHI9e30sZSl7dmFyIG89ZVt1XTtcInZhbHVlXCI9PT11JiZcImRlZmF1bHRWYWx1ZVwiaW4gZSYmbnVsbD09b3x8KFwiZGVmYXVsdFZhbHVlXCI9PT11JiZcInZhbHVlXCJpbiBlJiZudWxsPT1lLnZhbHVlP3U9XCJ2YWx1ZVwiOlwiZG93bmxvYWRcIj09PXUmJiEwPT09bz9vPVwiXCI6L29uZG91YmxlY2xpY2svaS50ZXN0KHUpP3U9XCJvbmRibGNsaWNrXCI6L15vbmNoYW5nZSh0ZXh0YXJlYXxpbnB1dCkvaS50ZXN0KHUrdCkmJiFWKGUudHlwZSk/dT1cIm9uaW5wdXRcIjovXm9uKEFuaXxUcmF8VG91fEJlZm9yZUlucCkvLnRlc3QodSk/dT11LnRvTG93ZXJDYXNlKCk6UC50ZXN0KHUpP3U9dS5yZXBsYWNlKC9bQS1aMC05XS8sXCItJCZcIikudG9Mb3dlckNhc2UoKTpudWxsPT09byYmKG89dm9pZCAwKSxyW3VdPW8pfVwic2VsZWN0XCI9PXQmJnIubXVsdGlwbGUmJkFycmF5LmlzQXJyYXkoci52YWx1ZSkmJihyLnZhbHVlPXYoZS5jaGlsZHJlbikuZm9yRWFjaChmdW5jdGlvbihuKXtuLnByb3BzLnNlbGVjdGVkPS0xIT1yLnZhbHVlLmluZGV4T2Yobi5wcm9wcy52YWx1ZSl9KSksXCJzZWxlY3RcIj09dCYmbnVsbCE9ci5kZWZhdWx0VmFsdWUmJihyLnZhbHVlPXYoZS5jaGlsZHJlbikuZm9yRWFjaChmdW5jdGlvbihuKXtuLnByb3BzLnNlbGVjdGVkPXIubXVsdGlwbGU/LTEhPXIuZGVmYXVsdFZhbHVlLmluZGV4T2Yobi5wcm9wcy52YWx1ZSk6ci5kZWZhdWx0VmFsdWU9PW4ucHJvcHMudmFsdWV9KSksbi5wcm9wcz1yfXQmJmUuY2xhc3MhPWUuY2xhc3NOYW1lJiYoRy5lbnVtZXJhYmxlPVwiY2xhc3NOYW1lXCJpbiBlLG51bGwhPWUuY2xhc3NOYW1lJiYoci5jbGFzcz1lLmNsYXNzTmFtZSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHIsXCJjbGFzc05hbWVcIixHKSksbi4kJHR5cGVvZj1qLEomJkoobil9O3ZhciBLPWguX19yO2guX19yPWZ1bmN0aW9uKG4pe0smJksobikscT1uLl9fY307dmFyIFE9e1JlYWN0Q3VycmVudERpc3BhdGNoZXI6e2N1cnJlbnQ6e3JlYWRDb250ZXh0OmZ1bmN0aW9uKG4pe3JldHVybiBxLl9fbltuLl9fY10ucHJvcHMudmFsdWV9fX19LFg9XCIxNy4wLjJcIjtmdW5jdGlvbiBubihuKXtyZXR1cm4gcy5iaW5kKG51bGwsbil9ZnVuY3Rpb24gdG4obil7cmV0dXJuISFuJiZuLiQkdHlwZW9mPT09an1mdW5jdGlvbiBlbihuKXtyZXR1cm4gdG4obik/eS5hcHBseShudWxsLGFyZ3VtZW50cyk6bn1mdW5jdGlvbiBybihuKXtyZXR1cm4hIW4uX19rJiYocChudWxsLG4pLCEwKX1mdW5jdGlvbiB1bihuKXtyZXR1cm4gbiYmKG4uYmFzZXx8MT09PW4ubm9kZVR5cGUmJm4pfHxudWxsfXZhciBvbj1mdW5jdGlvbihuLHQpe3JldHVybiBuKHQpfSxsbj1mdW5jdGlvbihuLHQpe3JldHVybiBuKHQpfSxmbj1kO2V4cG9ydCBkZWZhdWx0e3VzZVN0YXRlOm4sdXNlUmVkdWNlcjp0LHVzZUVmZmVjdDplLHVzZUxheW91dEVmZmVjdDpyLHVzZVJlZjp1LHVzZUltcGVyYXRpdmVIYW5kbGU6byx1c2VNZW1vOmksdXNlQ2FsbGJhY2s6bCx1c2VDb250ZXh0OmYsdXNlRGVidWdWYWx1ZTpjLHZlcnNpb246XCIxNy4wLjJcIixDaGlsZHJlbjprLHJlbmRlcjp6LGh5ZHJhdGU6Qix1bm1vdW50Q29tcG9uZW50QXROb2RlOnJuLGNyZWF0ZVBvcnRhbDpXLGNyZWF0ZUVsZW1lbnQ6cyxjcmVhdGVDb250ZXh0Ol8sY3JlYXRlRmFjdG9yeTpubixjbG9uZUVsZW1lbnQ6ZW4sY3JlYXRlUmVmOmIsRnJhZ21lbnQ6ZCxpc1ZhbGlkRWxlbWVudDp0bixmaW5kRE9NTm9kZTp1bixDb21wb25lbnQ6YSxQdXJlQ29tcG9uZW50OkUsbWVtbzpnLGZvcndhcmRSZWY6eCxmbHVzaFN5bmM6bG4sdW5zdGFibGVfYmF0Y2hlZFVwZGF0ZXM6b24sU3RyaWN0TW9kZTpkLFN1c3BlbnNlOkwsU3VzcGVuc2VMaXN0Ok0sbGF6eTpGLF9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEOlF9O2V4cG9ydHtYIGFzIHZlcnNpb24sayBhcyBDaGlsZHJlbix6IGFzIHJlbmRlcixCIGFzIGh5ZHJhdGUscm4gYXMgdW5tb3VudENvbXBvbmVudEF0Tm9kZSxXIGFzIGNyZWF0ZVBvcnRhbCxubiBhcyBjcmVhdGVGYWN0b3J5LGVuIGFzIGNsb25lRWxlbWVudCx0biBhcyBpc1ZhbGlkRWxlbWVudCx1biBhcyBmaW5kRE9NTm9kZSxFIGFzIFB1cmVDb21wb25lbnQsZyBhcyBtZW1vLHggYXMgZm9yd2FyZFJlZixsbiBhcyBmbHVzaFN5bmMsb24gYXMgdW5zdGFibGVfYmF0Y2hlZFVwZGF0ZXMsZm4gYXMgU3RyaWN0TW9kZSxMIGFzIFN1c3BlbnNlLE0gYXMgU3VzcGVuc2VMaXN0LEYgYXMgbGF6eSxRIGFzIF9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbXBhdC5tb2R1bGUuanMubWFwXG4iLCJ2YXIgbixsLHUsaSx0LG8scixmLGU9e30sYz1bXSxzPS9hY2l0fGV4KD86c3xnfG58cHwkKXxycGh8Z3JpZHxvd3N8bW5jfG50d3xpbmVbY2hdfHpvb3xeb3JkfGl0ZXJhL2k7ZnVuY3Rpb24gYShuLGwpe2Zvcih2YXIgdSBpbiBsKW5bdV09bFt1XTtyZXR1cm4gbn1mdW5jdGlvbiBoKG4pe3ZhciBsPW4ucGFyZW50Tm9kZTtsJiZsLnJlbW92ZUNoaWxkKG4pfWZ1bmN0aW9uIHYobCx1LGkpe3ZhciB0LG8scixmPXt9O2ZvcihyIGluIHUpXCJrZXlcIj09cj90PXVbcl06XCJyZWZcIj09cj9vPXVbcl06ZltyXT11W3JdO2lmKGFyZ3VtZW50cy5sZW5ndGg+MiYmKGYuY2hpbGRyZW49YXJndW1lbnRzLmxlbmd0aD4zP24uY2FsbChhcmd1bWVudHMsMik6aSksXCJmdW5jdGlvblwiPT10eXBlb2YgbCYmbnVsbCE9bC5kZWZhdWx0UHJvcHMpZm9yKHIgaW4gbC5kZWZhdWx0UHJvcHMpdm9pZCAwPT09ZltyXSYmKGZbcl09bC5kZWZhdWx0UHJvcHNbcl0pO3JldHVybiB5KGwsZix0LG8sbnVsbCl9ZnVuY3Rpb24geShuLGksdCxvLHIpe3ZhciBmPXt0eXBlOm4scHJvcHM6aSxrZXk6dCxyZWY6byxfX2s6bnVsbCxfXzpudWxsLF9fYjowLF9fZTpudWxsLF9fZDp2b2lkIDAsX19jOm51bGwsX19oOm51bGwsY29uc3RydWN0b3I6dm9pZCAwLF9fdjpudWxsPT1yPysrdTpyfTtyZXR1cm4gbnVsbCE9bC52bm9kZSYmbC52bm9kZShmKSxmfWZ1bmN0aW9uIHAoKXtyZXR1cm57Y3VycmVudDpudWxsfX1mdW5jdGlvbiBkKG4pe3JldHVybiBuLmNoaWxkcmVufWZ1bmN0aW9uIF8obixsKXt0aGlzLnByb3BzPW4sdGhpcy5jb250ZXh0PWx9ZnVuY3Rpb24gayhuLGwpe2lmKG51bGw9PWwpcmV0dXJuIG4uX18/ayhuLl9fLG4uX18uX19rLmluZGV4T2YobikrMSk6bnVsbDtmb3IodmFyIHU7bDxuLl9fay5sZW5ndGg7bCsrKWlmKG51bGwhPSh1PW4uX19rW2xdKSYmbnVsbCE9dS5fX2UpcmV0dXJuIHUuX19lO3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIG4udHlwZT9rKG4pOm51bGx9ZnVuY3Rpb24gYihuKXt2YXIgbCx1O2lmKG51bGwhPShuPW4uX18pJiZudWxsIT1uLl9fYyl7Zm9yKG4uX19lPW4uX19jLmJhc2U9bnVsbCxsPTA7bDxuLl9fay5sZW5ndGg7bCsrKWlmKG51bGwhPSh1PW4uX19rW2xdKSYmbnVsbCE9dS5fX2Upe24uX19lPW4uX19jLmJhc2U9dS5fX2U7YnJlYWt9cmV0dXJuIGIobil9fWZ1bmN0aW9uIG0obil7KCFuLl9fZCYmKG4uX19kPSEwKSYmdC5wdXNoKG4pJiYhZy5fX3IrK3x8ciE9PWwuZGVib3VuY2VSZW5kZXJpbmcpJiYoKHI9bC5kZWJvdW5jZVJlbmRlcmluZyl8fG8pKGcpfWZ1bmN0aW9uIGcoKXtmb3IodmFyIG47Zy5fX3I9dC5sZW5ndGg7KW49dC5zb3J0KGZ1bmN0aW9uKG4sbCl7cmV0dXJuIG4uX192Ll9fYi1sLl9fdi5fX2J9KSx0PVtdLG4uc29tZShmdW5jdGlvbihuKXt2YXIgbCx1LGksdCxvLHI7bi5fX2QmJihvPSh0PShsPW4pLl9fdikuX19lLChyPWwuX19QKSYmKHU9W10sKGk9YSh7fSx0KSkuX192PXQuX192KzEsaihyLHQsaSxsLl9fbix2b2lkIDAhPT1yLm93bmVyU1ZHRWxlbWVudCxudWxsIT10Ll9faD9bb106bnVsbCx1LG51bGw9PW8/ayh0KTpvLHQuX19oKSx6KHUsdCksdC5fX2UhPW8mJmIodCkpKX0pfWZ1bmN0aW9uIHcobixsLHUsaSx0LG8scixmLHMsYSl7dmFyIGgsdixwLF8sYixtLGcsdz1pJiZpLl9fa3x8YyxBPXcubGVuZ3RoO2Zvcih1Ll9faz1bXSxoPTA7aDxsLmxlbmd0aDtoKyspaWYobnVsbCE9KF89dS5fX2tbaF09bnVsbD09KF89bFtoXSl8fFwiYm9vbGVhblwiPT10eXBlb2YgXz9udWxsOlwic3RyaW5nXCI9PXR5cGVvZiBffHxcIm51bWJlclwiPT10eXBlb2YgX3x8XCJiaWdpbnRcIj09dHlwZW9mIF8/eShudWxsLF8sbnVsbCxudWxsLF8pOkFycmF5LmlzQXJyYXkoXyk/eShkLHtjaGlsZHJlbjpffSxudWxsLG51bGwsbnVsbCk6Xy5fX2I+MD95KF8udHlwZSxfLnByb3BzLF8ua2V5LG51bGwsXy5fX3YpOl8pKXtpZihfLl9fPXUsXy5fX2I9dS5fX2IrMSxudWxsPT09KHA9d1toXSl8fHAmJl8ua2V5PT1wLmtleSYmXy50eXBlPT09cC50eXBlKXdbaF09dm9pZCAwO2Vsc2UgZm9yKHY9MDt2PEE7disrKXtpZigocD13W3ZdKSYmXy5rZXk9PXAua2V5JiZfLnR5cGU9PT1wLnR5cGUpe3dbdl09dm9pZCAwO2JyZWFrfXA9bnVsbH1qKG4sXyxwPXB8fGUsdCxvLHIsZixzLGEpLGI9Xy5fX2UsKHY9Xy5yZWYpJiZwLnJlZiE9diYmKGd8fChnPVtdKSxwLnJlZiYmZy5wdXNoKHAucmVmLG51bGwsXyksZy5wdXNoKHYsXy5fX2N8fGIsXykpLG51bGwhPWI/KG51bGw9PW0mJihtPWIpLFwiZnVuY3Rpb25cIj09dHlwZW9mIF8udHlwZSYmbnVsbCE9Xy5fX2smJl8uX19rPT09cC5fX2s/Xy5fX2Q9cz14KF8scyxuKTpzPVAobixfLHAsdyxiLHMpLGF8fFwib3B0aW9uXCIhPT11LnR5cGU/XCJmdW5jdGlvblwiPT10eXBlb2YgdS50eXBlJiYodS5fX2Q9cyk6bi52YWx1ZT1cIlwiKTpzJiZwLl9fZT09cyYmcy5wYXJlbnROb2RlIT1uJiYocz1rKHApKX1mb3IodS5fX2U9bSxoPUE7aC0tOyludWxsIT13W2hdJiYoXCJmdW5jdGlvblwiPT10eXBlb2YgdS50eXBlJiZudWxsIT13W2hdLl9fZSYmd1toXS5fX2U9PXUuX19kJiYodS5fX2Q9ayhpLGgrMSkpLE4od1toXSx3W2hdKSk7aWYoZylmb3IoaD0wO2g8Zy5sZW5ndGg7aCsrKU0oZ1toXSxnWysraF0sZ1srK2hdKX1mdW5jdGlvbiB4KG4sbCx1KXt2YXIgaSx0O2ZvcihpPTA7aTxuLl9fay5sZW5ndGg7aSsrKSh0PW4uX19rW2ldKSYmKHQuX189bixsPVwiZnVuY3Rpb25cIj09dHlwZW9mIHQudHlwZT94KHQsbCx1KTpQKHUsdCx0LG4uX19rLHQuX19lLGwpKTtyZXR1cm4gbH1mdW5jdGlvbiBBKG4sbCl7cmV0dXJuIGw9bHx8W10sbnVsbD09bnx8XCJib29sZWFuXCI9PXR5cGVvZiBufHwoQXJyYXkuaXNBcnJheShuKT9uLnNvbWUoZnVuY3Rpb24obil7QShuLGwpfSk6bC5wdXNoKG4pKSxsfWZ1bmN0aW9uIFAobixsLHUsaSx0LG8pe3ZhciByLGYsZTtpZih2b2lkIDAhPT1sLl9fZClyPWwuX19kLGwuX19kPXZvaWQgMDtlbHNlIGlmKG51bGw9PXV8fHQhPW98fG51bGw9PXQucGFyZW50Tm9kZSluOmlmKG51bGw9PW98fG8ucGFyZW50Tm9kZSE9PW4pbi5hcHBlbmRDaGlsZCh0KSxyPW51bGw7ZWxzZXtmb3IoZj1vLGU9MDsoZj1mLm5leHRTaWJsaW5nKSYmZTxpLmxlbmd0aDtlKz0yKWlmKGY9PXQpYnJlYWsgbjtuLmluc2VydEJlZm9yZSh0LG8pLHI9b31yZXR1cm4gdm9pZCAwIT09cj9yOnQubmV4dFNpYmxpbmd9ZnVuY3Rpb24gQyhuLGwsdSxpLHQpe3ZhciBvO2ZvcihvIGluIHUpXCJjaGlsZHJlblwiPT09b3x8XCJrZXlcIj09PW98fG8gaW4gbHx8SChuLG8sbnVsbCx1W29dLGkpO2ZvcihvIGluIGwpdCYmXCJmdW5jdGlvblwiIT10eXBlb2YgbFtvXXx8XCJjaGlsZHJlblwiPT09b3x8XCJrZXlcIj09PW98fFwidmFsdWVcIj09PW98fFwiY2hlY2tlZFwiPT09b3x8dVtvXT09PWxbb118fEgobixvLGxbb10sdVtvXSxpKX1mdW5jdGlvbiAkKG4sbCx1KXtcIi1cIj09PWxbMF0/bi5zZXRQcm9wZXJ0eShsLHUpOm5bbF09bnVsbD09dT9cIlwiOlwibnVtYmVyXCIhPXR5cGVvZiB1fHxzLnRlc3QobCk/dTp1K1wicHhcIn1mdW5jdGlvbiBIKG4sbCx1LGksdCl7dmFyIG87bjppZihcInN0eWxlXCI9PT1sKWlmKFwic3RyaW5nXCI9PXR5cGVvZiB1KW4uc3R5bGUuY3NzVGV4dD11O2Vsc2V7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGkmJihuLnN0eWxlLmNzc1RleHQ9aT1cIlwiKSxpKWZvcihsIGluIGkpdSYmbCBpbiB1fHwkKG4uc3R5bGUsbCxcIlwiKTtpZih1KWZvcihsIGluIHUpaSYmdVtsXT09PWlbbF18fCQobi5zdHlsZSxsLHVbbF0pfWVsc2UgaWYoXCJvXCI9PT1sWzBdJiZcIm5cIj09PWxbMV0pbz1sIT09KGw9bC5yZXBsYWNlKC9DYXB0dXJlJC8sXCJcIikpLGw9bC50b0xvd2VyQ2FzZSgpaW4gbj9sLnRvTG93ZXJDYXNlKCkuc2xpY2UoMik6bC5zbGljZSgyKSxuLmx8fChuLmw9e30pLG4ubFtsK29dPXUsdT9pfHxuLmFkZEV2ZW50TGlzdGVuZXIobCxvP1Q6SSxvKTpuLnJlbW92ZUV2ZW50TGlzdGVuZXIobCxvP1Q6SSxvKTtlbHNlIGlmKFwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUxcIiE9PWwpe2lmKHQpbD1sLnJlcGxhY2UoL3hsaW5rW0g6aF0vLFwiaFwiKS5yZXBsYWNlKC9zTmFtZSQvLFwic1wiKTtlbHNlIGlmKFwiaHJlZlwiIT09bCYmXCJsaXN0XCIhPT1sJiZcImZvcm1cIiE9PWwmJlwidGFiSW5kZXhcIiE9PWwmJlwiZG93bmxvYWRcIiE9PWwmJmwgaW4gbil0cnl7bltsXT1udWxsPT11P1wiXCI6dTticmVhayBufWNhdGNoKG4pe31cImZ1bmN0aW9uXCI9PXR5cGVvZiB1fHwobnVsbCE9dSYmKCExIT09dXx8XCJhXCI9PT1sWzBdJiZcInJcIj09PWxbMV0pP24uc2V0QXR0cmlidXRlKGwsdSk6bi5yZW1vdmVBdHRyaWJ1dGUobCkpfX1mdW5jdGlvbiBJKG4pe3RoaXMubFtuLnR5cGUrITFdKGwuZXZlbnQ/bC5ldmVudChuKTpuKX1mdW5jdGlvbiBUKG4pe3RoaXMubFtuLnR5cGUrITBdKGwuZXZlbnQ/bC5ldmVudChuKTpuKX1mdW5jdGlvbiBqKG4sdSxpLHQsbyxyLGYsZSxjKXt2YXIgcyxoLHYseSxwLGssYixtLGcseCxBLFA9dS50eXBlO2lmKHZvaWQgMCE9PXUuY29uc3RydWN0b3IpcmV0dXJuIG51bGw7bnVsbCE9aS5fX2gmJihjPWkuX19oLGU9dS5fX2U9aS5fX2UsdS5fX2g9bnVsbCxyPVtlXSksKHM9bC5fX2IpJiZzKHUpO3RyeXtuOmlmKFwiZnVuY3Rpb25cIj09dHlwZW9mIFApe2lmKG09dS5wcm9wcyxnPShzPVAuY29udGV4dFR5cGUpJiZ0W3MuX19jXSx4PXM/Zz9nLnByb3BzLnZhbHVlOnMuX186dCxpLl9fYz9iPShoPXUuX19jPWkuX19jKS5fXz1oLl9fRTooXCJwcm90b3R5cGVcImluIFAmJlAucHJvdG90eXBlLnJlbmRlcj91Ll9fYz1oPW5ldyBQKG0seCk6KHUuX19jPWg9bmV3IF8obSx4KSxoLmNvbnN0cnVjdG9yPVAsaC5yZW5kZXI9TyksZyYmZy5zdWIoaCksaC5wcm9wcz1tLGguc3RhdGV8fChoLnN0YXRlPXt9KSxoLmNvbnRleHQ9eCxoLl9fbj10LHY9aC5fX2Q9ITAsaC5fX2g9W10pLG51bGw9PWguX19zJiYoaC5fX3M9aC5zdGF0ZSksbnVsbCE9UC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMmJihoLl9fcz09aC5zdGF0ZSYmKGguX19zPWEoe30saC5fX3MpKSxhKGguX19zLFAuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKG0saC5fX3MpKSkseT1oLnByb3BzLHA9aC5zdGF0ZSx2KW51bGw9PVAuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzJiZudWxsIT1oLmNvbXBvbmVudFdpbGxNb3VudCYmaC5jb21wb25lbnRXaWxsTW91bnQoKSxudWxsIT1oLmNvbXBvbmVudERpZE1vdW50JiZoLl9faC5wdXNoKGguY29tcG9uZW50RGlkTW91bnQpO2Vsc2V7aWYobnVsbD09UC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMmJm0hPT15JiZudWxsIT1oLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMmJmguY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhtLHgpLCFoLl9fZSYmbnVsbCE9aC5zaG91bGRDb21wb25lbnRVcGRhdGUmJiExPT09aC5zaG91bGRDb21wb25lbnRVcGRhdGUobSxoLl9fcyx4KXx8dS5fX3Y9PT1pLl9fdil7aC5wcm9wcz1tLGguc3RhdGU9aC5fX3MsdS5fX3YhPT1pLl9fdiYmKGguX19kPSExKSxoLl9fdj11LHUuX19lPWkuX19lLHUuX19rPWkuX19rLHUuX19rLmZvckVhY2goZnVuY3Rpb24obil7biYmKG4uX189dSl9KSxoLl9faC5sZW5ndGgmJmYucHVzaChoKTticmVhayBufW51bGwhPWguY29tcG9uZW50V2lsbFVwZGF0ZSYmaC5jb21wb25lbnRXaWxsVXBkYXRlKG0saC5fX3MseCksbnVsbCE9aC5jb21wb25lbnREaWRVcGRhdGUmJmguX19oLnB1c2goZnVuY3Rpb24oKXtoLmNvbXBvbmVudERpZFVwZGF0ZSh5LHAsayl9KX1oLmNvbnRleHQ9eCxoLnByb3BzPW0saC5zdGF0ZT1oLl9fcywocz1sLl9fcikmJnModSksaC5fX2Q9ITEsaC5fX3Y9dSxoLl9fUD1uLHM9aC5yZW5kZXIoaC5wcm9wcyxoLnN0YXRlLGguY29udGV4dCksaC5zdGF0ZT1oLl9fcyxudWxsIT1oLmdldENoaWxkQ29udGV4dCYmKHQ9YShhKHt9LHQpLGguZ2V0Q2hpbGRDb250ZXh0KCkpKSx2fHxudWxsPT1oLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlfHwoaz1oLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlKHkscCkpLEE9bnVsbCE9cyYmcy50eXBlPT09ZCYmbnVsbD09cy5rZXk/cy5wcm9wcy5jaGlsZHJlbjpzLHcobixBcnJheS5pc0FycmF5KEEpP0E6W0FdLHUsaSx0LG8scixmLGUsYyksaC5iYXNlPXUuX19lLHUuX19oPW51bGwsaC5fX2gubGVuZ3RoJiZmLnB1c2goaCksYiYmKGguX19FPWguX189bnVsbCksaC5fX2U9ITF9ZWxzZSBudWxsPT1yJiZ1Ll9fdj09PWkuX192Pyh1Ll9faz1pLl9fayx1Ll9fZT1pLl9fZSk6dS5fX2U9TChpLl9fZSx1LGksdCxvLHIsZixjKTsocz1sLmRpZmZlZCkmJnModSl9Y2F0Y2gobil7dS5fX3Y9bnVsbCwoY3x8bnVsbCE9cikmJih1Ll9fZT1lLHUuX19oPSEhYyxyW3IuaW5kZXhPZihlKV09bnVsbCksbC5fX2Uobix1LGkpfX1mdW5jdGlvbiB6KG4sdSl7bC5fX2MmJmwuX19jKHUsbiksbi5zb21lKGZ1bmN0aW9uKHUpe3RyeXtuPXUuX19oLHUuX19oPVtdLG4uc29tZShmdW5jdGlvbihuKXtuLmNhbGwodSl9KX1jYXRjaChuKXtsLl9fZShuLHUuX192KX19KX1mdW5jdGlvbiBMKGwsdSxpLHQsbyxyLGYsYyl7dmFyIHMsYSx2LHk9aS5wcm9wcyxwPXUucHJvcHMsZD11LnR5cGUsXz0wO2lmKFwic3ZnXCI9PT1kJiYobz0hMCksbnVsbCE9cilmb3IoO188ci5sZW5ndGg7XysrKWlmKChzPXJbX10pJiYocz09PWx8fChkP3MubG9jYWxOYW1lPT1kOjM9PXMubm9kZVR5cGUpKSl7bD1zLHJbX109bnVsbDticmVha31pZihudWxsPT1sKXtpZihudWxsPT09ZClyZXR1cm4gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUocCk7bD1vP2RvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsZCk6ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChkLHAuaXMmJnApLHI9bnVsbCxjPSExfWlmKG51bGw9PT1kKXk9PT1wfHxjJiZsLmRhdGE9PT1wfHwobC5kYXRhPXApO2Vsc2V7aWYocj1yJiZuLmNhbGwobC5jaGlsZE5vZGVzKSxhPSh5PWkucHJvcHN8fGUpLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MLHY9cC5kYW5nZXJvdXNseVNldElubmVySFRNTCwhYyl7aWYobnVsbCE9cilmb3IoeT17fSxfPTA7XzxsLmF0dHJpYnV0ZXMubGVuZ3RoO18rKyl5W2wuYXR0cmlidXRlc1tfXS5uYW1lXT1sLmF0dHJpYnV0ZXNbX10udmFsdWU7KHZ8fGEpJiYodiYmKGEmJnYuX19odG1sPT1hLl9faHRtbHx8di5fX2h0bWw9PT1sLmlubmVySFRNTCl8fChsLmlubmVySFRNTD12JiZ2Ll9faHRtbHx8XCJcIikpfWlmKEMobCxwLHksbyxjKSx2KXUuX19rPVtdO2Vsc2UgaWYoXz11LnByb3BzLmNoaWxkcmVuLHcobCxBcnJheS5pc0FycmF5KF8pP186W19dLHUsaSx0LG8mJlwiZm9yZWlnbk9iamVjdFwiIT09ZCxyLGYscj9yWzBdOmkuX19rJiZrKGksMCksYyksbnVsbCE9cilmb3IoXz1yLmxlbmd0aDtfLS07KW51bGwhPXJbX10mJmgocltfXSk7Y3x8KFwidmFsdWVcImluIHAmJnZvaWQgMCE9PShfPXAudmFsdWUpJiYoXyE9PWwudmFsdWV8fFwicHJvZ3Jlc3NcIj09PWQmJiFfKSYmSChsLFwidmFsdWVcIixfLHkudmFsdWUsITEpLFwiY2hlY2tlZFwiaW4gcCYmdm9pZCAwIT09KF89cC5jaGVja2VkKSYmXyE9PWwuY2hlY2tlZCYmSChsLFwiY2hlY2tlZFwiLF8seS5jaGVja2VkLCExKSl9cmV0dXJuIGx9ZnVuY3Rpb24gTShuLHUsaSl7dHJ5e1wiZnVuY3Rpb25cIj09dHlwZW9mIG4/bih1KTpuLmN1cnJlbnQ9dX1jYXRjaChuKXtsLl9fZShuLGkpfX1mdW5jdGlvbiBOKG4sdSxpKXt2YXIgdCxvO2lmKGwudW5tb3VudCYmbC51bm1vdW50KG4pLCh0PW4ucmVmKSYmKHQuY3VycmVudCYmdC5jdXJyZW50IT09bi5fX2V8fE0odCxudWxsLHUpKSxudWxsIT0odD1uLl9fYykpe2lmKHQuY29tcG9uZW50V2lsbFVubW91bnQpdHJ5e3QuY29tcG9uZW50V2lsbFVubW91bnQoKX1jYXRjaChuKXtsLl9fZShuLHUpfXQuYmFzZT10Ll9fUD1udWxsfWlmKHQ9bi5fX2spZm9yKG89MDtvPHQubGVuZ3RoO28rKyl0W29dJiZOKHRbb10sdSxcImZ1bmN0aW9uXCIhPXR5cGVvZiBuLnR5cGUpO2l8fG51bGw9PW4uX19lfHxoKG4uX19lKSxuLl9fZT1uLl9fZD12b2lkIDB9ZnVuY3Rpb24gTyhuLGwsdSl7cmV0dXJuIHRoaXMuY29uc3RydWN0b3Iobix1KX1mdW5jdGlvbiBTKHUsaSx0KXt2YXIgbyxyLGY7bC5fXyYmbC5fXyh1LGkpLHI9KG89XCJmdW5jdGlvblwiPT10eXBlb2YgdCk/bnVsbDp0JiZ0Ll9fa3x8aS5fX2ssZj1bXSxqKGksdT0oIW8mJnR8fGkpLl9faz12KGQsbnVsbCxbdV0pLHJ8fGUsZSx2b2lkIDAhPT1pLm93bmVyU1ZHRWxlbWVudCwhbyYmdD9bdF06cj9udWxsOmkuZmlyc3RDaGlsZD9uLmNhbGwoaS5jaGlsZE5vZGVzKTpudWxsLGYsIW8mJnQ/dDpyP3IuX19lOmkuZmlyc3RDaGlsZCxvKSx6KGYsdSl9ZnVuY3Rpb24gcShuLGwpe1MobixsLHEpfWZ1bmN0aW9uIEIobCx1LGkpe3ZhciB0LG8scixmPWEoe30sbC5wcm9wcyk7Zm9yKHIgaW4gdSlcImtleVwiPT1yP3Q9dVtyXTpcInJlZlwiPT1yP289dVtyXTpmW3JdPXVbcl07cmV0dXJuIGFyZ3VtZW50cy5sZW5ndGg+MiYmKGYuY2hpbGRyZW49YXJndW1lbnRzLmxlbmd0aD4zP24uY2FsbChhcmd1bWVudHMsMik6aSkseShsLnR5cGUsZix0fHxsLmtleSxvfHxsLnJlZixudWxsKX1mdW5jdGlvbiBEKG4sbCl7dmFyIHU9e19fYzpsPVwiX19jQ1wiK2YrKyxfXzpuLENvbnN1bWVyOmZ1bmN0aW9uKG4sbCl7cmV0dXJuIG4uY2hpbGRyZW4obCl9LFByb3ZpZGVyOmZ1bmN0aW9uKG4pe3ZhciB1LGk7cmV0dXJuIHRoaXMuZ2V0Q2hpbGRDb250ZXh0fHwodT1bXSwoaT17fSlbbF09dGhpcyx0aGlzLmdldENoaWxkQ29udGV4dD1mdW5jdGlvbigpe3JldHVybiBpfSx0aGlzLnNob3VsZENvbXBvbmVudFVwZGF0ZT1mdW5jdGlvbihuKXt0aGlzLnByb3BzLnZhbHVlIT09bi52YWx1ZSYmdS5zb21lKG0pfSx0aGlzLnN1Yj1mdW5jdGlvbihuKXt1LnB1c2gobik7dmFyIGw9bi5jb21wb25lbnRXaWxsVW5tb3VudDtuLmNvbXBvbmVudFdpbGxVbm1vdW50PWZ1bmN0aW9uKCl7dS5zcGxpY2UodS5pbmRleE9mKG4pLDEpLGwmJmwuY2FsbChuKX19KSxuLmNoaWxkcmVufX07cmV0dXJuIHUuUHJvdmlkZXIuX189dS5Db25zdW1lci5jb250ZXh0VHlwZT11fW49Yy5zbGljZSxsPXtfX2U6ZnVuY3Rpb24obixsKXtmb3IodmFyIHUsaSx0O2w9bC5fXzspaWYoKHU9bC5fX2MpJiYhdS5fXyl0cnl7aWYoKGk9dS5jb25zdHJ1Y3RvcikmJm51bGwhPWkuZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yJiYodS5zZXRTdGF0ZShpLmdldERlcml2ZWRTdGF0ZUZyb21FcnJvcihuKSksdD11Ll9fZCksbnVsbCE9dS5jb21wb25lbnREaWRDYXRjaCYmKHUuY29tcG9uZW50RGlkQ2F0Y2gobiksdD11Ll9fZCksdClyZXR1cm4gdS5fX0U9dX1jYXRjaChsKXtuPWx9dGhyb3cgbn19LHU9MCxpPWZ1bmN0aW9uKG4pe3JldHVybiBudWxsIT1uJiZ2b2lkIDA9PT1uLmNvbnN0cnVjdG9yfSxfLnByb3RvdHlwZS5zZXRTdGF0ZT1mdW5jdGlvbihuLGwpe3ZhciB1O3U9bnVsbCE9dGhpcy5fX3MmJnRoaXMuX19zIT09dGhpcy5zdGF0ZT90aGlzLl9fczp0aGlzLl9fcz1hKHt9LHRoaXMuc3RhdGUpLFwiZnVuY3Rpb25cIj09dHlwZW9mIG4mJihuPW4oYSh7fSx1KSx0aGlzLnByb3BzKSksbiYmYSh1LG4pLG51bGwhPW4mJnRoaXMuX192JiYobCYmdGhpcy5fX2gucHVzaChsKSxtKHRoaXMpKX0sXy5wcm90b3R5cGUuZm9yY2VVcGRhdGU9ZnVuY3Rpb24obil7dGhpcy5fX3YmJih0aGlzLl9fZT0hMCxuJiZ0aGlzLl9faC5wdXNoKG4pLG0odGhpcykpfSxfLnByb3RvdHlwZS5yZW5kZXI9ZCx0PVtdLG89XCJmdW5jdGlvblwiPT10eXBlb2YgUHJvbWlzZT9Qcm9taXNlLnByb3RvdHlwZS50aGVuLmJpbmQoUHJvbWlzZS5yZXNvbHZlKCkpOnNldFRpbWVvdXQsZy5fX3I9MCxmPTA7ZXhwb3J0e1MgYXMgcmVuZGVyLHEgYXMgaHlkcmF0ZSx2IGFzIGNyZWF0ZUVsZW1lbnQsdiBhcyBoLGQgYXMgRnJhZ21lbnQscCBhcyBjcmVhdGVSZWYsaSBhcyBpc1ZhbGlkRWxlbWVudCxfIGFzIENvbXBvbmVudCxCIGFzIGNsb25lRWxlbWVudCxEIGFzIGNyZWF0ZUNvbnRleHQsQSBhcyB0b0NoaWxkQXJyYXksbCBhcyBvcHRpb25zfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXByZWFjdC5tb2R1bGUuanMubWFwXG4iLCJpbXBvcnR7b3B0aW9ucyBhcyBufWZyb21cInByZWFjdFwiO3ZhciB0LHUscixvPTAsaT1bXSxjPW4uX19iLGY9bi5fX3IsZT1uLmRpZmZlZCxhPW4uX19jLHY9bi51bm1vdW50O2Z1bmN0aW9uIG0odCxyKXtuLl9faCYmbi5fX2godSx0LG98fHIpLG89MDt2YXIgaT11Ll9fSHx8KHUuX19IPXtfXzpbXSxfX2g6W119KTtyZXR1cm4gdD49aS5fXy5sZW5ndGgmJmkuX18ucHVzaCh7fSksaS5fX1t0XX1mdW5jdGlvbiBsKG4pe3JldHVybiBvPTEscCh3LG4pfWZ1bmN0aW9uIHAobixyLG8pe3ZhciBpPW0odCsrLDIpO3JldHVybiBpLnQ9bixpLl9fY3x8KGkuX189W28/byhyKTp3KHZvaWQgMCxyKSxmdW5jdGlvbihuKXt2YXIgdD1pLnQoaS5fX1swXSxuKTtpLl9fWzBdIT09dCYmKGkuX189W3QsaS5fX1sxXV0saS5fX2Muc2V0U3RhdGUoe30pKX1dLGkuX19jPXUpLGkuX199ZnVuY3Rpb24geShyLG8pe3ZhciBpPW0odCsrLDMpOyFuLl9fcyYmayhpLl9fSCxvKSYmKGkuX189cixpLl9fSD1vLHUuX19ILl9faC5wdXNoKGkpKX1mdW5jdGlvbiBoKHIsbyl7dmFyIGk9bSh0KyssNCk7IW4uX19zJiZrKGkuX19ILG8pJiYoaS5fXz1yLGkuX19IPW8sdS5fX2gucHVzaChpKSl9ZnVuY3Rpb24gcyhuKXtyZXR1cm4gbz01LGQoZnVuY3Rpb24oKXtyZXR1cm57Y3VycmVudDpufX0sW10pfWZ1bmN0aW9uIF8obix0LHUpe289NixoKGZ1bmN0aW9uKCl7XCJmdW5jdGlvblwiPT10eXBlb2Ygbj9uKHQoKSk6biYmKG4uY3VycmVudD10KCkpfSxudWxsPT11P3U6dS5jb25jYXQobikpfWZ1bmN0aW9uIGQobix1KXt2YXIgcj1tKHQrKyw3KTtyZXR1cm4gayhyLl9fSCx1KSYmKHIuX189bigpLHIuX19IPXUsci5fX2g9biksci5fX31mdW5jdGlvbiBBKG4sdCl7cmV0dXJuIG89OCxkKGZ1bmN0aW9uKCl7cmV0dXJuIG59LHQpfWZ1bmN0aW9uIEYobil7dmFyIHI9dS5jb250ZXh0W24uX19jXSxvPW0odCsrLDkpO3JldHVybiBvLmM9bixyPyhudWxsPT1vLl9fJiYoby5fXz0hMCxyLnN1Yih1KSksci5wcm9wcy52YWx1ZSk6bi5fX31mdW5jdGlvbiBUKHQsdSl7bi51c2VEZWJ1Z1ZhbHVlJiZuLnVzZURlYnVnVmFsdWUodT91KHQpOnQpfWZ1bmN0aW9uIHEobil7dmFyIHI9bSh0KyssMTApLG89bCgpO3JldHVybiByLl9fPW4sdS5jb21wb25lbnREaWRDYXRjaHx8KHUuY29tcG9uZW50RGlkQ2F0Y2g9ZnVuY3Rpb24obil7ci5fXyYmci5fXyhuKSxvWzFdKG4pfSksW29bMF0sZnVuY3Rpb24oKXtvWzFdKHZvaWQgMCl9XX1mdW5jdGlvbiB4KCl7aS5mb3JFYWNoKGZ1bmN0aW9uKHQpe2lmKHQuX19QKXRyeXt0Ll9fSC5fX2guZm9yRWFjaChnKSx0Ll9fSC5fX2guZm9yRWFjaChqKSx0Ll9fSC5fX2g9W119Y2F0Y2godSl7dC5fX0guX19oPVtdLG4uX19lKHUsdC5fX3YpfX0pLGk9W119bi5fX2I9ZnVuY3Rpb24obil7dT1udWxsLGMmJmMobil9LG4uX19yPWZ1bmN0aW9uKG4pe2YmJmYobiksdD0wO3ZhciByPSh1PW4uX19jKS5fX0g7ciYmKHIuX19oLmZvckVhY2goZyksci5fX2guZm9yRWFjaChqKSxyLl9faD1bXSl9LG4uZGlmZmVkPWZ1bmN0aW9uKHQpe2UmJmUodCk7dmFyIG89dC5fX2M7byYmby5fX0gmJm8uX19ILl9faC5sZW5ndGgmJigxIT09aS5wdXNoKG8pJiZyPT09bi5yZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fCgocj1uLnJlcXVlc3RBbmltYXRpb25GcmFtZSl8fGZ1bmN0aW9uKG4pe3ZhciB0LHU9ZnVuY3Rpb24oKXtjbGVhclRpbWVvdXQociksYiYmY2FuY2VsQW5pbWF0aW9uRnJhbWUodCksc2V0VGltZW91dChuKX0scj1zZXRUaW1lb3V0KHUsMTAwKTtiJiYodD1yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodSkpfSkoeCkpLHU9dm9pZCAwfSxuLl9fYz1mdW5jdGlvbih0LHUpe3Uuc29tZShmdW5jdGlvbih0KXt0cnl7dC5fX2guZm9yRWFjaChnKSx0Ll9faD10Ll9faC5maWx0ZXIoZnVuY3Rpb24obil7cmV0dXJuIW4uX198fGoobil9KX1jYXRjaChyKXt1LnNvbWUoZnVuY3Rpb24obil7bi5fX2gmJihuLl9faD1bXSl9KSx1PVtdLG4uX19lKHIsdC5fX3YpfX0pLGEmJmEodCx1KX0sbi51bm1vdW50PWZ1bmN0aW9uKHQpe3YmJnYodCk7dmFyIHU9dC5fX2M7aWYodSYmdS5fX0gpdHJ5e3UuX19ILl9fLmZvckVhY2goZyl9Y2F0Y2godCl7bi5fX2UodCx1Ll9fdil9fTt2YXIgYj1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1ZXN0QW5pbWF0aW9uRnJhbWU7ZnVuY3Rpb24gZyhuKXt2YXIgdD11O1wiZnVuY3Rpb25cIj09dHlwZW9mIG4uX19jJiZuLl9fYygpLHU9dH1mdW5jdGlvbiBqKG4pe3ZhciB0PXU7bi5fX2M9bi5fXygpLHU9dH1mdW5jdGlvbiBrKG4sdCl7cmV0dXJuIW58fG4ubGVuZ3RoIT09dC5sZW5ndGh8fHQuc29tZShmdW5jdGlvbih0LHUpe3JldHVybiB0IT09blt1XX0pfWZ1bmN0aW9uIHcobix0KXtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiB0P3Qobik6dH1leHBvcnR7bCBhcyB1c2VTdGF0ZSxwIGFzIHVzZVJlZHVjZXIseSBhcyB1c2VFZmZlY3QsaCBhcyB1c2VMYXlvdXRFZmZlY3QscyBhcyB1c2VSZWYsXyBhcyB1c2VJbXBlcmF0aXZlSGFuZGxlLGQgYXMgdXNlTWVtbyxBIGFzIHVzZUNhbGxiYWNrLEYgYXMgdXNlQ29udGV4dCxUIGFzIHVzZURlYnVnVmFsdWUscSBhcyB1c2VFcnJvckJvdW5kYXJ5fTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWhvb2tzLm1vZHVsZS5qcy5tYXBcbiIsImltcG9ydHtvcHRpb25zIGFzIHIsRnJhZ21lbnQgYXMgX31mcm9tXCJwcmVhY3RcIjtleHBvcnR7RnJhZ21lbnR9ZnJvbVwicHJlYWN0XCI7dmFyIG89MDtmdW5jdGlvbiBlKF8sZSxuLHQsZil7dmFyIGwscyx1PXt9O2ZvcihzIGluIGUpXCJyZWZcIj09cz9sPWVbc106dVtzXT1lW3NdO3ZhciBhPXt0eXBlOl8scHJvcHM6dSxrZXk6bixyZWY6bCxfX2s6bnVsbCxfXzpudWxsLF9fYjowLF9fZTpudWxsLF9fZDp2b2lkIDAsX19jOm51bGwsX19oOm51bGwsY29uc3RydWN0b3I6dm9pZCAwLF9fdjotLW8sX19zb3VyY2U6dCxfX3NlbGY6Zn07aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgXyYmKGw9Xy5kZWZhdWx0UHJvcHMpKWZvcihzIGluIGwpdm9pZCAwPT09dVtzXSYmKHVbc109bFtzXSk7cmV0dXJuIHIudm5vZGUmJnIudm5vZGUoYSksYX1leHBvcnR7ZSBhcyBqc3gsZSBhcyBqc3hzLGUgYXMganN4REVWfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWpzeFJ1bnRpbWUubW9kdWxlLmpzLm1hcFxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vc2F2ZS1maWxlJztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsInZhciBHQ19USU1FT1VUID0gMTAwMCAqIDYwOyAvLyAxIG1pblxuLyoqXG4gKiBTYXZlIGEgZmlsZSBmcm9tIEJsb2Igb3Igb2JqZWN0IHVybFxuICogV2UgYWNoaWV2ZSB0aGlzIGJ5IHVzaW5nIHRoZSBIVE1MNSBkb3dubG9hZCBhdHRyIG9mIDxhPi5cbiAqIENoZWNrIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0hUTUwvRWxlbWVudC9hI0Jyb3dzZXJfY29tcGF0aWJpbGl0eVxuICogZm9yIGJyb3dzZXIgY29tcGF0aWJpbGl0eS5cbiAqXG4gKiBAcGFyYW0gZGF0YVxuICogQHBhcmFtIGZpbGVuYW1lXG4gKiBAcGFyYW0gZ2NUaW1lb3V0IC0gV2hlbiB0byByZW1vdmUgdGhlIGRhdGEgdXJpXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNhdmVGaWxlKGRhdGEsIGZpbGVuYW1lLCBnY1RpbWVvdXQpIHtcbiAgICBpZiAoZ2NUaW1lb3V0ID09PSB2b2lkIDApIHsgZ2NUaW1lb3V0ID0gR0NfVElNRU9VVDsgfVxuICAgIHZhciBpc0Jsb2IgPSBkYXRhIGluc3RhbmNlb2YgQmxvYjtcbiAgICB2YXIgdXJsID0gaXNCbG9iID8gVVJMLmNyZWF0ZU9iamVjdFVSTChkYXRhKSA6IGRhdGE7XG4gICAgdmFyIGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgYS5ocmVmID0gdXJsO1xuICAgIGEuZG93bmxvYWQgPSBmaWxlbmFtZTtcbiAgICB2YXIgY2xpY2sgPSBuZXcgTW91c2VFdmVudCgnY2xpY2snKTtcbiAgICAvLyBQdXNoIHRoZSBkb3dubG9hZCBvcGVyYXRpb24gb24gdGhlIG5leHQgdGlja1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIGEuZGlzcGF0Y2hFdmVudChjbGljayk7XG4gICAgfSk7XG4gICAgLy8gUmV2b2tlIHRoZSBvYmplY3QgdXJsIGxhdGVyIGluIHRpbWVcbiAgICAvLyB3aGVuIHRoZSBkb3dubG9hZCBvZiB0aGUgZmlsZSBpcyBjb21wbGV0ZWQgKG9yIHNvIHdlIGFzc3VtZSlcbiAgICBpZiAoaXNCbG9iKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgVVJMLnJldm9rZU9iamVjdFVSTCh1cmwpO1xuICAgICAgICB9LCBnY1RpbWVvdXQpO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNhdmUtZmlsZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gWE1MRm9ybWF0dGVyT3B0aW9uc1xuICogIEBwcm9wZXJ0eSB7U3RyaW5nfSBbaW5kZW50YXRpb249JyAgICAnXSBUaGUgdmFsdWUgdXNlZCBmb3IgaW5kZW50YXRpb25cbiAqICBAcHJvcGVydHkge2Z1bmN0aW9uKG5vZGUpOiBib29sZWFufSBbZmlsdGVyXSBSZXR1cm4gZmFsc2UgdG8gZXhjbHVkZSB0aGUgbm9kZS5cbiAqICBAcHJvcGVydHkge0Jvb2xlYW59IFtjb2xsYXBzZUNvbnRlbnQ9ZmFsc2VdIFRydWUgdG8ga2VlcCBjb250ZW50IGluIHRoZSBzYW1lIGxpbmUgYXMgdGhlIGVsZW1lbnQuIE9ubHkgd29ya3MgaWYgZWxlbWVudCBjb250YWlucyBhdCBsZWFzdCBvbmUgdGV4dCBub2RlXG4gKiAgQHByb3BlcnR5IHtTdHJpbmd9IFtsaW5lU2VwYXJhdG9yPSdcXHJcXG4nXSBUaGUgbGluZSBzZXBhcmF0b3IgdG8gdXNlXG4gKiAgQHByb3BlcnR5IHtTdHJpbmd9IFt3aGl0ZVNwYWNlQXRFbmRPZlNlbGZjbG9zaW5nVGFnPWZhbHNlXSB0byBlaXRoZXIgZW5kIGFkIHNlbGYgY2xvc2luZyB0YWcgd2l0aCBgPHRhZy8+YCBvciBgPHRhZyAvPmBcbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IFhNTEZvcm1hdHRlclN0YXRlXG4gKiBAcGFyYW0ge1N0cmluZ30gY29udGVudFxuICogQHBhcmFtIHtOdW1iZXJ9IGxldmVsXG4gKiBAcGFyYW0ge1hNTEZvcm1hdHRlck9wdGlvbnN9IG9wdGlvbnNcbiAqL1xuXG4vKipcbiAqIEBwYXJhbSB7WE1MRm9ybWF0dGVyU3RhdGV9IHN0YXRlXG4gKiBAcmV0dXJuIHt2b2lkfVxuICovXG5mdW5jdGlvbiBuZXdMaW5lKHN0YXRlKSB7XG4gICAgaWYgKCFzdGF0ZS5vcHRpb25zLmluZGVudGF0aW9uICYmICFzdGF0ZS5vcHRpb25zLmxpbmVTZXBhcmF0b3IpIHJldHVybjtcbiAgICBzdGF0ZS5jb250ZW50ICs9IHN0YXRlLm9wdGlvbnMubGluZVNlcGFyYXRvcjtcbiAgICBsZXQgaTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgc3RhdGUubGV2ZWw7IGkrKykge1xuICAgICAgICBzdGF0ZS5jb250ZW50ICs9IHN0YXRlLm9wdGlvbnMuaW5kZW50YXRpb247XG4gICAgfVxufVxuXG4vKipcbiAqIEBwYXJhbSB7WE1MRm9ybWF0dGVyU3RhdGV9IHN0YXRlXG4gKiBAcGFyYW0ge1N0cmluZ30gY29udGVudFxuICogQHJldHVybiB7dm9pZH1cbiAqL1xuZnVuY3Rpb24gYXBwZW5kQ29udGVudChzdGF0ZSwgY29udGVudCkge1xuICAgIHN0YXRlLmNvbnRlbnQgKz0gY29udGVudDtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge09iamVjdH0gbm9kZVxuICogQHBhcmFtIHtYTUxGb3JtYXR0ZXJTdGF0ZX0gc3RhdGVcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gcHJlc2VydmVTcGFjZVxuICogQHJldHVybiB7dm9pZH1cbiAqL1xuZnVuY3Rpb24gcHJvY2Vzc05vZGUobm9kZSwgc3RhdGUsIHByZXNlcnZlU3BhY2UpIHtcbiAgICBpZiAodHlwZW9mIG5vZGUuY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcHJvY2Vzc0NvbnRlbnROb2RlKG5vZGUsIHN0YXRlLCBwcmVzZXJ2ZVNwYWNlKTtcbiAgICB9IGVsc2UgaWYgKG5vZGUudHlwZSA9PT0gJ0VsZW1lbnQnKSB7XG4gICAgICAgIHByb2Nlc3NFbGVtZW50Tm9kZShub2RlLCBzdGF0ZSwgcHJlc2VydmVTcGFjZSk7XG4gICAgfSBlbHNlIGlmIChub2RlLnR5cGUgPT09ICdQcm9jZXNzaW5nSW5zdHJ1Y3Rpb24nKSB7XG4gICAgICAgIHByb2Nlc3NQcm9jZXNzaW5nSW50cnVjdGlvbihub2RlLCBzdGF0ZSwgcHJlc2VydmVTcGFjZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmtub3duIG5vZGUgdHlwZTogJyArIG5vZGUudHlwZSk7XG4gICAgfVxufVxuXG4vKipcbiAqIEBwYXJhbSB7T2JqZWN0fSBub2RlXG4gKiBAcGFyYW0ge1hNTEZvcm1hdHRlclN0YXRlfSBzdGF0ZVxuICogQHBhcmFtIHtCb29sZWFufSBwcmVzZXJ2ZVNwYWNlXG4gKiBAcmV0dXJuIHt2b2lkfVxuICovXG5mdW5jdGlvbiBwcm9jZXNzQ29udGVudE5vZGUobm9kZSwgc3RhdGUsIHByZXNlcnZlU3BhY2UpIHtcbiAgICBpZiAoIXByZXNlcnZlU3BhY2UpIHtcbiAgICAgICAgbm9kZS5jb250ZW50ID0gbm9kZS5jb250ZW50LnRyaW0oKTtcbiAgICB9XG4gICAgaWYgKG5vZGUuY29udGVudC5sZW5ndGggPiAwKSB7XG4gICAgICAgIGlmICghcHJlc2VydmVTcGFjZSAmJiBzdGF0ZS5jb250ZW50Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIG5ld0xpbmUoc3RhdGUpO1xuICAgICAgICB9XG4gICAgICAgIGFwcGVuZENvbnRlbnQoc3RhdGUsIG5vZGUuY29udGVudCk7XG4gICAgfVxufVxuXG4vKipcbiAqIEBwYXJhbSB7T2JqZWN0fSBub2RlXG4gKiBAcGFyYW0ge1hNTEZvcm1hdHRlclN0YXRlfSBzdGF0ZVxuICogQHBhcmFtIHtCb29sZWFufSBwcmVzZXJ2ZVNwYWNlXG4gKiBAcmV0dXJuIHt2b2lkfVxuICovXG5mdW5jdGlvbiBwcm9jZXNzRWxlbWVudE5vZGUobm9kZSwgc3RhdGUsIHByZXNlcnZlU3BhY2UpIHtcbiAgICBpZiAoIXByZXNlcnZlU3BhY2UgJiYgc3RhdGUuY29udGVudC5sZW5ndGggPiAwKSB7XG4gICAgICAgIG5ld0xpbmUoc3RhdGUpO1xuICAgIH1cblxuICAgIGFwcGVuZENvbnRlbnQoc3RhdGUsICc8JyArIG5vZGUubmFtZSk7XG4gICAgcHJvY2Vzc0F0dHJpYnV0ZXMoc3RhdGUsIG5vZGUuYXR0cmlidXRlcyk7XG5cbiAgICBpZiAobm9kZS5jaGlsZHJlbiA9PT0gbnVsbCkge1xuICAgICAgICBjb25zdCBzZWxmQ2xvc2luZ05vZGVDbG9zaW5nVGFnID0gc3RhdGUub3B0aW9ucy53aGl0ZVNwYWNlQXRFbmRPZlNlbGZjbG9zaW5nVGFnID8gJyAvPicgOiAnLz4nXG4gICAgICAgIC8vIHNlbGYtY2xvc2luZyBub2RlXG4gICAgICAgIGFwcGVuZENvbnRlbnQoc3RhdGUsIHNlbGZDbG9zaW5nTm9kZUNsb3NpbmdUYWcpO1xuICAgIH0gZWxzZSBpZiAobm9kZS5jaGlsZHJlbi5sZW5ndGggPT09IDApIHtcbiAgICAgICAgLy8gZW1wdHkgbm9kZVxuICAgICAgICBhcHBlbmRDb250ZW50KHN0YXRlLCAnPjwvJyArIG5vZGUubmFtZSArICc+Jyk7XG4gICAgfSBlbHNlIHtcblxuICAgICAgICBhcHBlbmRDb250ZW50KHN0YXRlLCAnPicpO1xuXG4gICAgICAgIHN0YXRlLmxldmVsKys7XG5cbiAgICAgICAgbGV0IG5vZGVQcmVzZXJ2ZVNwYWNlID0gbm9kZS5hdHRyaWJ1dGVzWyd4bWw6c3BhY2UnXSA9PT0gJ3ByZXNlcnZlJztcblxuICAgICAgICBpZiAoIW5vZGVQcmVzZXJ2ZVNwYWNlICYmIHN0YXRlLm9wdGlvbnMuY29sbGFwc2VDb250ZW50KSB7XG5cbiAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5zVGV4dE5vZGVzID0gbm9kZS5jaGlsZHJlbi5zb21lKGZ1bmN0aW9uKGNoaWxkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNoaWxkLnR5cGUgPT09ICdUZXh0JyAmJiBjaGlsZC5jb250ZW50LnRyaW0oKSAhPT0gJyc7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKGNvbnRhaW5zVGV4dE5vZGVzKSB7XG4gICAgICAgICAgICAgICAgbm9kZVByZXNlcnZlU3BhY2UgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbm9kZS5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkKSB7XG4gICAgICAgICAgICBwcm9jZXNzTm9kZShjaGlsZCwgc3RhdGUsIHByZXNlcnZlU3BhY2UgfHwgbm9kZVByZXNlcnZlU3BhY2UsIHN0YXRlLm9wdGlvbnMpO1xuICAgICAgICB9KTtcblxuICAgICAgICBzdGF0ZS5sZXZlbC0tO1xuXG4gICAgICAgIGlmICghcHJlc2VydmVTcGFjZSAmJiAhbm9kZVByZXNlcnZlU3BhY2UpIHtcbiAgICAgICAgICAgIG5ld0xpbmUoc3RhdGUpO1xuICAgICAgICB9XG4gICAgICAgIGFwcGVuZENvbnRlbnQoc3RhdGUsICc8LycgKyBub2RlLm5hbWUgKyAnPicpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge1hNTEZvcm1hdHRlclN0YXRlfSBzdGF0ZVxuICogQHBhcmFtIHtSZWNvcmQ8U3RyaW5nLCBTdHJpbmc+fSBhdHRyaWJ1dGVzXG4gKiBAcmV0dXJuIHt2b2lkfVxuICovXG5mdW5jdGlvbiBwcm9jZXNzQXR0cmlidXRlcyhzdGF0ZSwgYXR0cmlidXRlcykge1xuICAgIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24oYXR0cikge1xuICAgICAgICBjb25zdCBlc2NhcGVkID0gYXR0cmlidXRlc1thdHRyXS5yZXBsYWNlKC9cIi9nLCAnJnF1b3Q7Jyk7XG4gICAgICAgIGFwcGVuZENvbnRlbnQoc3RhdGUsICcgJyArIGF0dHIgKyAnPVwiJyArIGVzY2FwZWQgKyAnXCInKTtcbiAgICB9KTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge09iamVjdH0gbm9kZVxuICogQHBhcmFtIHtYTUxGb3JtYXR0ZXJTdGF0ZX0gc3RhdGVcbiAqIEByZXR1cm4ge3ZvaWR9XG4gKi9cbmZ1bmN0aW9uIHByb2Nlc3NQcm9jZXNzaW5nSW50cnVjdGlvbihub2RlLCBzdGF0ZSkge1xuICAgIGlmIChzdGF0ZS5jb250ZW50Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgbmV3TGluZShzdGF0ZSk7XG4gICAgfVxuICAgIGFwcGVuZENvbnRlbnQoc3RhdGUsICc8PycgKyBub2RlLm5hbWUpO1xuICAgIHByb2Nlc3NBdHRyaWJ1dGVzKHN0YXRlLCBub2RlLmF0dHJpYnV0ZXMpO1xuICAgIGFwcGVuZENvbnRlbnQoc3RhdGUsICc/PicpO1xufVxuXG5cbi8qKlxuICogQ29udmVydHMgdGhlIGdpdmVuIFhNTCBpbnRvIGh1bWFuIHJlYWRhYmxlIGZvcm1hdC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30geG1sXG4gKiBAcGFyYW0ge1hNTEZvcm1hdHRlck9wdGlvbnN9IG9wdGlvbnNcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGZvcm1hdCh4bWwsIG9wdGlvbnMgPSB7fSkge1xuICAgIG9wdGlvbnMuaW5kZW50YXRpb24gPSAnaW5kZW50YXRpb24nIGluIG9wdGlvbnMgPyBvcHRpb25zLmluZGVudGF0aW9uIDogJyAgICAnO1xuICAgIG9wdGlvbnMuY29sbGFwc2VDb250ZW50ID0gb3B0aW9ucy5jb2xsYXBzZUNvbnRlbnQgPT09IHRydWU7XG4gICAgb3B0aW9ucy5saW5lU2VwYXJhdG9yID0gJ2xpbmVTZXBhcmF0b3InIGluIG9wdGlvbnMgPyBvcHRpb25zLmxpbmVTZXBhcmF0b3IgOiAnXFxyXFxuJztcbiAgICBvcHRpb25zLndoaXRlU3BhY2VBdEVuZE9mU2VsZmNsb3NpbmdUYWcgPSAhIW9wdGlvbnMud2hpdGVTcGFjZUF0RW5kT2ZTZWxmY2xvc2luZ1RhZztcblxuICAgIGNvbnN0IHBhcnNlciA9IHJlcXVpcmUoJ3htbC1wYXJzZXIteG8nKTtcbiAgICBjb25zdCBwYXJzZWRYbWwgPSBwYXJzZXIoeG1sLCB7ZmlsdGVyOiBvcHRpb25zLmZpbHRlcn0pO1xuICAgIGNvbnN0IHN0YXRlID0ge2NvbnRlbnQ6ICcnLCBsZXZlbDogMCwgb3B0aW9uczogb3B0aW9uc307XG5cbiAgICBpZiAocGFyc2VkWG1sLmRlY2xhcmF0aW9uKSB7XG4gICAgICAgIHByb2Nlc3NQcm9jZXNzaW5nSW50cnVjdGlvbihwYXJzZWRYbWwuZGVjbGFyYXRpb24sIHN0YXRlKTtcbiAgICB9XG5cbiAgICBwYXJzZWRYbWwuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihjaGlsZCkge1xuICAgICAgICBwcm9jZXNzTm9kZShjaGlsZCwgc3RhdGUsIGZhbHNlKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBzdGF0ZS5jb250ZW50O1xufVxuXG5cbm1vZHVsZS5leHBvcnRzID0gZm9ybWF0O1xuIiwiLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBQYXJzaW5nT3B0aW9uc1xuICogIEBwcm9wZXJ0eSB7ZnVuY3Rpb24obm9kZSl9IGZpbHRlciBSZXR1cm5zIGZhbHNlIHRvIGV4Y2x1ZGUgYSBub2RlLiBEZWZhdWx0IGlzIHRydWUuXG4gKi9cblxuLyoqXG4gKiBQYXJzZSB0aGUgZ2l2ZW4gWE1MIHN0cmluZyBpbnRvIGFuIG9iamVjdC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30geG1sXG4gKiBAcGFyYW0ge1BhcnNpbmdPcHRpb25zfSBbb3B0aW9uc11cbiAqIEByZXR1cm4ge09iamVjdH1cbiAqIEBhcGkgcHVibGljXG4gKi9cbmZ1bmN0aW9uIHBhcnNlKHhtbCwgb3B0aW9ucyA9IHt9KSB7XG5cbiAgICBvcHRpb25zLmZpbHRlciA9IG9wdGlvbnMuZmlsdGVyIHx8ICgoKSA9PiB0cnVlKTtcblxuICAgIGZ1bmN0aW9uIG5leHRDaGlsZCgpIHtcbiAgICAgICAgcmV0dXJuIHRhZygpIHx8IGNvbnRlbnQoKSB8fCBjb21tZW50KCkgfHwgY2RhdGEoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBuZXh0Um9vdENoaWxkKCkge1xuICAgICAgICBtYXRjaCgvXFxzKi8pO1xuICAgICAgICByZXR1cm4gdGFnKHRydWUpIHx8IGNvbW1lbnQoKSB8fCBkb2N0eXBlKCkgfHwgcHJvY2Vzc2luZ0luc3RydWN0aW9uKGZhbHNlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkb2N1bWVudCgpIHtcbiAgICAgICAgY29uc3QgZGVjbCA9IGRlY2xhcmF0aW9uKCk7XG4gICAgICAgIGNvbnN0IGNoaWxkcmVuID0gW107XG4gICAgICAgIGxldCBkb2N1bWVudFJvb3ROb2RlO1xuICAgICAgICBsZXQgY2hpbGQgPSBuZXh0Um9vdENoaWxkKCk7XG5cbiAgICAgICAgd2hpbGUgKGNoaWxkKSB7XG4gICAgICAgICAgICBpZiAoY2hpbGQubm9kZS50eXBlID09PSAnRWxlbWVudCcpIHtcbiAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnRSb290Tm9kZSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZvdW5kIG11bHRpcGxlIHJvb3Qgbm9kZXMnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZG9jdW1lbnRSb290Tm9kZSA9IGNoaWxkLm5vZGU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghY2hpbGQuZXhjbHVkZWQpIHtcbiAgICAgICAgICAgICAgICBjaGlsZHJlbi5wdXNoKGNoaWxkLm5vZGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjaGlsZCA9IG5leHRSb290Q2hpbGQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghZG9jdW1lbnRSb290Tm9kZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gcGFyc2UgWE1MJyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZGVjbGFyYXRpb246IGRlY2wgPyBkZWNsLm5vZGUgOiBudWxsLFxuICAgICAgICAgICAgcm9vdDogZG9jdW1lbnRSb290Tm9kZSxcbiAgICAgICAgICAgIGNoaWxkcmVuXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGVjbGFyYXRpb24oKSB7XG4gICAgICAgIHJldHVybiBwcm9jZXNzaW5nSW5zdHJ1Y3Rpb24odHJ1ZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcHJvY2Vzc2luZ0luc3RydWN0aW9uKG1hdGNoRGVjbGFyYXRpb24pIHtcbiAgICAgICAgY29uc3QgbSA9IG1hdGNoRGVjbGFyYXRpb24gPyBtYXRjaCgvXjxcXD8oeG1sKVxccyovKSA6IG1hdGNoKC9ePFxcPyhbXFx3LTouXSspXFxzKi8pO1xuICAgICAgICBpZiAoIW0pIHJldHVybjtcblxuICAgICAgICAvLyB0YWdcbiAgICAgICAgY29uc3Qgbm9kZSA9IHtcbiAgICAgICAgICAgIG5hbWU6IG1bMV0sXG4gICAgICAgICAgICB0eXBlOiAnUHJvY2Vzc2luZ0luc3RydWN0aW9uJyxcbiAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHt9XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gYXR0cmlidXRlc1xuICAgICAgICB3aGlsZSAoIShlb3MoKSB8fCBpcygnPz4nKSkpIHtcbiAgICAgICAgICAgIGNvbnN0IGF0dHIgPSBhdHRyaWJ1dGUoKTtcbiAgICAgICAgICAgIGlmICghYXR0cikgcmV0dXJuIG5vZGU7XG4gICAgICAgICAgICBub2RlLmF0dHJpYnV0ZXNbYXR0ci5uYW1lXSA9IGF0dHIudmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBtYXRjaCgvXFw/Pi8pO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBleGNsdWRlZDogbWF0Y2hEZWNsYXJhdGlvbiA/IGZhbHNlIDogb3B0aW9ucy5maWx0ZXIobm9kZSkgPT09IGZhbHNlLFxuICAgICAgICAgICAgbm9kZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRhZyhtYXRjaFJvb3QpIHtcbiAgICAgICAgY29uc3QgbSA9IG1hdGNoKC9ePChbXFx3LTouXSspXFxzKi8pO1xuICAgICAgICBpZiAoIW0pIHJldHVybjtcblxuICAgICAgICAvLyBuYW1lXG4gICAgICAgIGNvbnN0IG5vZGUgPSB7XG4gICAgICAgICAgICB0eXBlOiAnRWxlbWVudCcsXG4gICAgICAgICAgICBuYW1lOiBtWzFdLFxuICAgICAgICAgICAgYXR0cmlidXRlczoge30sXG4gICAgICAgICAgICBjaGlsZHJlbjogW11cbiAgICAgICAgfTtcblxuICAgICAgICAvLyBhdHRyaWJ1dGVzXG4gICAgICAgIHdoaWxlICghKGVvcygpIHx8IGlzKCc+JykgfHwgaXMoJz8+JykgfHwgaXMoJy8+JykpKSB7XG4gICAgICAgICAgICBjb25zdCBhdHRyID0gYXR0cmlidXRlKCk7XG4gICAgICAgICAgICBpZiAoIWF0dHIpIHJldHVybiBub2RlO1xuICAgICAgICAgICAgbm9kZS5hdHRyaWJ1dGVzW2F0dHIubmFtZV0gPSBhdHRyLnZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZXhjbHVkZWQgPSBtYXRjaFJvb3QgPyBmYWxzZSA6IG9wdGlvbnMuZmlsdGVyKG5vZGUpID09PSBmYWxzZTtcblxuICAgICAgICAvLyBzZWxmIGNsb3NpbmcgdGFnXG4gICAgICAgIGlmIChtYXRjaCgvXlxccypcXC8+LykpIHtcbiAgICAgICAgICAgIG5vZGUuY2hpbGRyZW4gPSBudWxsO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBleGNsdWRlZCxcbiAgICAgICAgICAgICAgICBub2RlXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgbWF0Y2goL1xcPz8+Lyk7XG5cbiAgICAgICAgaWYgKCFleGNsdWRlZCkge1xuICAgICAgICAgICAgLy8gY2hpbGRyZW5cbiAgICAgICAgICAgIGxldCBjaGlsZCA9IG5leHRDaGlsZCgpO1xuICAgICAgICAgICAgd2hpbGUgKGNoaWxkKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFjaGlsZC5leGNsdWRlZCkge1xuICAgICAgICAgICAgICAgICAgICBub2RlLmNoaWxkcmVuLnB1c2goY2hpbGQubm9kZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNoaWxkID0gbmV4dENoaWxkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBjbG9zaW5nXG4gICAgICAgIG1hdGNoKC9ePFxcL1tcXHctOi5dKz4vKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZXhjbHVkZWQsXG4gICAgICAgICAgICBub2RlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZG9jdHlwZSgpIHtcbiAgICAgICAgY29uc3QgbSA9IG1hdGNoKC9ePCFET0NUWVBFXFxzK1tePl0qPi8pO1xuICAgICAgICBpZiAobSkge1xuICAgICAgICAgICAgY29uc3Qgbm9kZSA9IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnRG9jdW1lbnRUeXBlJyxcbiAgICAgICAgICAgICAgICBjb250ZW50OiBtWzBdXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBleGNsdWRlZDogb3B0aW9ucy5maWx0ZXIobm9kZSkgPT09IGZhbHNlLFxuICAgICAgICAgICAgICAgIG5vZGVcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjZGF0YSgpIHtcbiAgICAgICAgaWYgKHhtbC5zdGFydHNXaXRoKCc8IVtDREFUQVsnKSkge1xuICAgICAgICAgICAgY29uc3QgZW5kUG9zaXRpb25TdGFydCA9IHhtbC5pbmRleE9mKCddXT4nKTtcbiAgICAgICAgICAgIGlmIChlbmRQb3NpdGlvblN0YXJ0ID4gLTEpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlbmRQb3NpdGlvbkZpbmlzaCAgPSBlbmRQb3NpdGlvblN0YXJ0ICsgMztcbiAgICAgICAgICAgICAgICBjb25zdCBub2RlID0ge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnQ0RBVEEnLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiB4bWwuc3Vic3RyaW5nKDAsIGVuZFBvc2l0aW9uRmluaXNoKVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgeG1sID0geG1sLnNsaWNlKGVuZFBvc2l0aW9uRmluaXNoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBleGNsdWRlZDogb3B0aW9ucy5maWx0ZXIobm9kZSkgPT09IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBub2RlXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNvbW1lbnQoKSB7XG4gICAgICAgIGNvbnN0IG0gPSBtYXRjaCgvXjwhLS1bXFxzXFxTXSo/LS0+Lyk7XG4gICAgICAgIGlmIChtKSB7XG4gICAgICAgICAgICBjb25zdCBub2RlID0ge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdDb21tZW50JyxcbiAgICAgICAgICAgICAgICBjb250ZW50OiBtWzBdXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBleGNsdWRlZDogb3B0aW9ucy5maWx0ZXIobm9kZSkgPT09IGZhbHNlLFxuICAgICAgICAgICAgICAgIG5vZGVcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjb250ZW50KCkge1xuICAgICAgICBjb25zdCBtID0gbWF0Y2goL14oW148XSspLyk7XG4gICAgICAgIGlmIChtKSB7XG4gICAgICAgICAgICBjb25zdCBub2RlID0ge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdUZXh0JyxcbiAgICAgICAgICAgICAgICBjb250ZW50OiBtWzFdXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBleGNsdWRlZDogb3B0aW9ucy5maWx0ZXIobm9kZSkgPT09IGZhbHNlLFxuICAgICAgICAgICAgICAgIG5vZGVcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhdHRyaWJ1dGUoKSB7XG4gICAgICAgIGNvbnN0IG0gPSBtYXRjaCgvKFtcXHc6LV0rKVxccyo9XFxzKihcIlteXCJdKlwifCdbXiddKid8XFx3KylcXHMqLyk7XG4gICAgICAgIGlmICghbSkgcmV0dXJuO1xuICAgICAgICByZXR1cm4ge25hbWU6IG1bMV0sIHZhbHVlOiBzdHJpcChtWzJdKX1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTdHJpcCBxdW90ZXMgZnJvbSBgdmFsYC5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBzdHJpcCh2YWwpIHtcbiAgICAgICAgcmV0dXJuIHZhbC5yZXBsYWNlKC9eWydcIl18WydcIl0kL2csICcnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNYXRjaCBgcmVgIGFuZCBhZHZhbmNlIHRoZSBzdHJpbmcuXG4gICAgICovXG4gICAgZnVuY3Rpb24gbWF0Y2gocmUpIHtcbiAgICAgICAgY29uc3QgbSA9IHhtbC5tYXRjaChyZSk7XG4gICAgICAgIGlmICghbSkgcmV0dXJuO1xuICAgICAgICB4bWwgPSB4bWwuc2xpY2UobVswXS5sZW5ndGgpO1xuICAgICAgICByZXR1cm4gbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFbmQtb2Ytc291cmNlLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGVvcygpIHtcbiAgICAgICAgcmV0dXJuIDAgPT09IHhtbC5sZW5ndGg7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgZm9yIGBwcmVmaXhgLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGlzKHByZWZpeCkge1xuICAgICAgICByZXR1cm4gMCA9PT0geG1sLmluZGV4T2YocHJlZml4KTtcbiAgICB9XG5cbiAgICB4bWwgPSB4bWwudHJpbSgpO1xuXG4gICAgcmV0dXJuIGRvY3VtZW50KCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcGFyc2U7XG4iLCJpbXBvcnQgXCIuL2luZGV4Lmxlc3NcIjtcblxuXG5mdW5jdGlvbiBCdXR0b24oe2Jsb2NrID0gZmFsc2UsIHNxdWFyZSA9IGZhbHNlLCBjbGFzc05hbWUgPSAnJywgLi4ucHJvcHN9KSB7XG4gICAgY29uc3QgY2xhc3NOYW1lcyA9IFsuLi5uZXcgU2V0KFsnYnRuJywgY2xhc3NOYW1lLCBibG9jayA/ICdfYmxvY2snIDogJycsIHNxdWFyZSA/ICdfc3F1YXJlJyA6ICcnXSldLmpvaW4oJyAnKTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9e2NsYXNzTmFtZXN9IHsuLi5wcm9wc30gLz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbjtcbiIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4Lmxlc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCIvLyBpbXBvcnQgXCIuL2luZGV4Lmxlc3NcIjtcblxuY29uc3QgSGVhZGVyID0gKHtjaGlsZHJlbiA9IG51bGwsIGV4dHJhID0gbnVsbH0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsOCBwcjggYnNiYiBkZiBhaWMgZ19ociBiYzpmZmZcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZjEgYzpzIGZzMTIgbGgxNlwiPlxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj57ZXh0cmF9PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn07XG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iLCJmdW5jdGlvbiBUYWJzKHtjbGFzc05hbWUgPSAnJywgZGF0YSwgdGFiSW5kZXgsIG9uQ2hhbmdlfSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgYzp4cyBmdzcwMCBsaDEuNSAke2NsYXNzTmFtZX1gfT5cbiAgICAgICAgICAgIHtkYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiIyNcIiBrZXk9e2l0ZW19XG4gICAgICAgICAgICAgICAgICAgdGl0bGU9e2l0ZW19XG4gICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZGliIHZhdCBwdDggcGI4IHBsOCBwcjggJHtpbmRleCA9PT0gdGFiSW5kZXggPyAnYzptJyA6ICdjOm06aCd9YH1cbiAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlKGluZGV4KTtcbiAgICAgICAgICAgICAgICAgICB9fT57aXRlbX08L2E+KSl9XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFicztcbiIsImltcG9ydCBcIi4vaW5kZXgubGVzc1wiO1xuXG5mdW5jdGlvbiBUZXh0YXJlYSh7Y2xhc3NOYW1lID0gJycsIC4uLnByb3BzfSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDx0ZXh0YXJlYSBwbGFjZWhvbGRlcj1cIkVudGVyXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHRleHRhcmVhIGJzYmIgdzEwMCUgZGIgZnMxMiBsaDIwIHB0OCBwYjggcHI4IHBsOCBicjQgbGgyMCAke2NsYXNzTmFtZX1gfSB7Li4ucHJvcHN9IC8+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBUZXh0YXJlYTtcbiIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4Lmxlc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgXCIuL2luZGV4Lmxlc3NcIjtcbmltcG9ydCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuXG5mdW5jdGlvbiBUb2FzdCh7b3BlbiA9IGZhbHNlLCBjaGlsZHJlbiA9IG51bGwsIGNsYXNzTmFtZSA9ICcnfSkge1xuICAgIGNvbnN0IFtzaG93LCBzZXRTaG93XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzZXRTaG93KG9wZW4pO1xuICAgIH0sIFtvcGVuXSk7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BwZiBkZiBhaWMgamNjIHQ1MCUgbDAgdzEwMCUgcGwxNiBwcjE2IHBlbiBic2JiIHRvYXN0LWJveCAke3Nob3cgPyBgX3Nob3dgIDogJyd9ICR7Y2xhc3NOYW1lfWB9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b2FzdCBicjQgY19mZmYgcGw4IHByOCBmczEyIGxoMTYgcHQ4IHBiOFwiPntjaGlsZHJlbn08L2Rpdj5cbiAgICAgICAgPC9kaXY+KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9hc3Q7IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXgubGVzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBUb2FzdCBmcm9tIFwiLi9pbmRleFwiO1xuaW1wb3J0IHtyZW5kZXJ9IGZyb20gXCJwcmVhY3RcIjtcblxuY29uc3QgQ09OVEFJTkVSX0lEID0gJ1RvYXN0Qm94JztcblxuZnVuY3Rpb24gZ2V0Q29udGFpbmVyKCkge1xuICAgIGNvbnN0ICRpdGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoQ09OVEFJTkVSX0lEKTtcbiAgICAvLyDlt7Lnu4/lrZjlnKjliJnku4DkuYjpg73kuI3lgZpcbiAgICBpZiAoJGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuICRpdGVtO1xuICAgIH1cbiAgICBjb25zdCAkY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgJGNvbnRhaW5lci5pZCA9ICdDT05UQUlORVJfSUQnO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKCRjb250YWluZXIpO1xuICAgIHJldHVybiAkY29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiB0b2FzdCh0ZXh0ID0gXCJcIiwge3Nob3dUaW1lID0gMjAwMH0gPSB7fSkge1xuICAgIGNvbnN0ICRjb250YWluZXIgPSBnZXRDb250YWluZXIoKTtcbiAgICByZW5kZXIoPFRvYXN0IG9wZW4+e3RleHR9PC9Ub2FzdD4sICRjb250YWluZXIpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICByZW5kZXIoJycsICRjb250YWluZXIpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKCRjb250YWluZXIpO1xuICAgIH0sIHNob3dUaW1lKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRvYXN0OyIsImltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3ByZWFjdC9ob29rcyc7XG5pbXBvcnQge3JlbmRlcn0gZnJvbSAncHJlYWN0JztcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vY29tcG9uZW50L0hlYWRlci9pbmRleFwiO1xuaW1wb3J0IFRhYnMgZnJvbSBcIi4vY29tcG9uZW50L1RhYnNcIjtcbmltcG9ydCBDb25maWcgZnJvbSBcIi4vcGFnZS9Db25maWcvaW5kZXhcIjtcbmltcG9ydCBUb2tlbiBmcm9tIFwiLi9wYWdlL1Rva2VuL2luZGV4XCI7XG5pbXBvcnQgSG9tZSBmcm9tIFwiLi9wYWdlL0hvbWUvaW5kZXhcIjtcbmltcG9ydCAnLi9pbmRleC5sZXNzJztcblxuY29uc3QgREFUQV9UQUIgPSBbJ0hUTUwnLCAnQ1NTJywgJ1Rva2VuJywgJ1Byb2plY3QnXTtcblxuY29uc3QgQVBQID0gKCkgPT4ge1xuICAgIGNvbnN0IFt0YWJJbmRleCwgc2V0VGFiSW5kZXhdID0gdXNlU3RhdGUoMCk7XG5cbiAgICBjb25zdCBvblRhYkNoYW5nZSA9IChpbmRleCkgPT4ge1xuICAgICAgICBzZXRUYWJJbmRleChpbmRleCk7XG4gICAgICAgIHBhcmVudC5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICBwbHVnaW5NZXNzYWdlOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogYEFQSS5vblRhYkNoYW5nZWAsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGluZGV4XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sICcqJyk7XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8SGVhZGVyXG4gICAgICAgICAgICAgICAgZXh0cmE9e1xuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJjOnMgYzpwcmltYXJ5OmggZnMxNCBmdzUwMCBwbDggcHI4IHB0OCBwYjggZnc3MDBcIlxuICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3MtYWNzcy9maWdtYS10b2tlbi10by1jb2RlXCIgdGFyZ2V0PVwiX2JsYW5rXCIgdGl0bGU9XCJIZWxwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInZhbVwiIHNyYz1cImh0dHBzOi8vaW1nLnNoaWVsZHMuaW8vZ2l0aHViL3N0YXJzL3MtYWNzcy9maWdtYS10b2tlbi10by1jb2RlLnN2Zz9zdHlsZT1zb2NpYWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJmaWdtYS10b2tlbi10by1jb2RlXCIvPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgfT5cbiAgICAgICAgICAgICAgICA8VGFicyBjbGFzc05hbWU9XCJmczE0XCIgZGF0YT17REFUQV9UQUJ9IHRhYkluZGV4PXt0YWJJbmRleH0gb25DaGFuZ2U9e29uVGFiQ2hhbmdlfT48L1RhYnM+XG4gICAgICAgICAgICA8L0hlYWRlcj5cbiAgICAgICAgICAgIHsoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0YWJJbmRleCA9PT0gMCB8fCB0YWJJbmRleCA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPEhvbWUgdGFiSW5kZXg9e3RhYkluZGV4fS8+O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGFiSW5kZXggPT09IDMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxDb25maWcvPjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRhYkluZGV4ID09PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8VG9rZW4vPjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9KSgpfVxuICAgICAgICA8Lz5cbiAgICApXG59O1xuXG5yZW5kZXIoPEFQUC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVhY3QtcGFnZScpKTtcbiIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4Lmxlc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgQnV0dG9uIGZyb20gXCIuLi8uLi9jb21wb25lbnQvQnV0dG9uXCI7XG5pbXBvcnQgc2F2ZUpTT04gZnJvbSBcIi4uLy4uL3V0aWxzL3NhdmVKU09OXCI7XG5cbmNvbnN0IGdldE9iakJ5UHJvcFN0cmluZyA9IChzdHJQcm9wcykgPT4ge1xuICAgIGlmICghc3RyUHJvcHMpIHtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbiAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICBzdHJQcm9wcy5zcGxpdCgnICcpLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICBjb25zdCBbbmFtZSwgdmFsdWUgPSBcIlwiXSA9IGl0ZW0uc3BsaXQoJz0nKTtcbiAgICAgICAgcmVzdWx0W25hbWVdID0gdmFsdWUucmVwbGFjZSgvXCIvZywgXCJcIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmNvbnN0IHRyYW5zVG9rZW5zID0gKHRva2VucykgPT4ge1xuICAgIGNvbnN0IG5ld1Rva2VuID0ge307XG4gICAgZm9yIChjb25zdCBbaWQsIGl0ZW1dIG9mIE9iamVjdC5lbnRyaWVzKHRva2VucykpIHtcbiAgICAgICAgY29uc3Qge25hbWUsIHR5cGUsIGNsYXNzTmFtZSA9IFwiXCIsIGlnbm9yZUNsYXNzTmFtZSwgdGV4dENsYXNzTmFtZSwgY29tcG9uZW50UHJvcHMsIHJlbmRlckNoaWxkcmVuLCByZW5kZXJIZWlnaHQsIHJlbmRlcldpZHRofSA9IGl0ZW07XG4gICAgICAgIGNvbnN0IG5ld0l0ZW0gPSB7XG4gICAgICAgICAgICBfdG9rZW5OYW1lOiBuYW1lLFxuICAgICAgICAgICAgX3Rva2VuVHlwZTogdHlwZSxcbiAgICAgICAgICAgIERFRkFVTFQ6IGdldE9iakJ5UHJvcFN0cmluZyhjb21wb25lbnRQcm9wcylcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHRleHRDbGFzc05hbWUpIHtcbiAgICAgICAgICAgIG5ld0l0ZW1bXCJURVhUXCJdID0ge1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogdGV4dENsYXNzTmFtZS5zcGxpdCgnICcpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlbmRlckNoaWxkcmVuICYmIFN0cmluZyhyZW5kZXJDaGlsZHJlbikgPT09ICcwJykge1xuICAgICAgICAgICAgbmV3SXRlbS5ERUZBVUxULmNoaWxkcmVuID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVuZGVySGVpZ2h0KSB7XG4gICAgICAgICAgICBpZiAoU3RyaW5nKHJlbmRlckhlaWdodCkgPT09ICcxJykge1xuICAgICAgICAgICAgICAgIG5ld0l0ZW0uREVGQVVMVC5fcmVuZGVySGVpZ2h0ID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoU3RyaW5nKHJlbmRlckhlaWdodCkgPT09ICcwJykge1xuICAgICAgICAgICAgICAgIG5ld0l0ZW0uREVGQVVMVC5fcmVuZGVySGVpZ2h0ID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlbmRlcldpZHRoKSB7XG4gICAgICAgICAgICBpZiAoU3RyaW5nKHJlbmRlcldpZHRoKSA9PT0gJzEnKSB7XG4gICAgICAgICAgICAgICAgbmV3SXRlbS5ERUZBVUxULl9yZW5kZXJXaWR0aCA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKFN0cmluZyhyZW5kZXJXaWR0aCkgPT09ICcwJykge1xuICAgICAgICAgICAgICAgIG5ld0l0ZW0uREVGQVVMVC5fcmVuZGVyV2lkdGggPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBuZXdJdGVtLkRFRkFVTFQuY2xhc3NOYW1lID0gY2xhc3NOYW1lID8gY2xhc3NOYW1lLnNwbGl0KCcgJykgOiBbXTtcbiAgICAgICAgaWYgKGlnbm9yZUNsYXNzTmFtZSkge1xuICAgICAgICAgICAgbmV3SXRlbS5ERUZBVUxULl9pZ25vcmVDbGFzc05hbWUgPSBpZ25vcmVDbGFzc05hbWUuc3BsaXQoJyAnKTtcbiAgICAgICAgfVxuICAgICAgICBuZXdUb2tlbltpZF0gPSBuZXdJdGVtO1xuICAgIH1cbiAgICByZXR1cm4gbmV3VG9rZW47XG59XG5cbmZ1bmN0aW9uIHRyYW5zT2xkKGRhdGEgPSB7fSkge1xuICAgIGNvbnN0IHtwcm9qZWN0cyA9IFtdLCBpc0pTWCA9IGZhbHNlfSA9IGRhdGE7XG4gICAgcmV0dXJuIHByb2plY3RzLm1hcCgoe2lnbm9yZUNsYXNzTmFtZSA9IFwiXCIsIG5hbWUsIHRva2VuID0ge319KSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpc0pTWCxcbiAgICAgICAgICAgIF9uYW1lOiBuYW1lLFxuICAgICAgICAgICAgaWdub3JlQ2xhc3NOYW1lOiBpZ25vcmVDbGFzc05hbWUuc3BsaXQoXCIgXCIpLFxuICAgICAgICAgICAgdG9rZW5zOiB0cmFuc1Rva2Vucyh0b2tlbilcbiAgICAgICAgfTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gT2xkQ29uZmlnQmFyKHtkYXRhID0ge319KSB7XG4gICAgY29uc3QgaXNFbXB0eSA9IE9iamVjdC5rZXlzKGRhdGEpLmxlbmd0aCA9PT0gMDtcbiAgICBpZiAoaXNFbXB0eSkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgY29uc3Qgb25TYXZlT2xkID0gKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBzYXZlSlNPTih0cmFuc09sZChkYXRhKSwgJ29sZC1jb25maWcnKTtcbiAgICB9O1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ19yb3cgZGYgYWljIHB0OCBwYjggZ19ocl90XCI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmczEyIGM6c1wiPlRva2VuIHRvIGNvZGUgaGFkIGEgZGV2YXN0YXRpbmcgdXBncmFkZSwgZG93bmxvYWQgdGhlIG9sZCBjb25maWcgYW5kIHVwbG9hZCB0aGVtXG4gICAgICAgICAgICAgICAgYWdhaW48L3A+XG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e29uU2F2ZU9sZH0gY2xhc3NOYW1lPVwiYzptIG1sOFwiPkRvd25sb2FkIE9sZDwvQnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE9sZENvbmZpZ0JhcjsiLCJcbmNvbnN0IF9wb3N0Q29uZmlnID0gKHthY3Rpb24sIHZhbHVlfSkgPT4ge1xuICAgIHBhcmVudC5wb3N0TWVzc2FnZSh7XG4gICAgICAgIHBsdWdpbk1lc3NhZ2U6IHtcbiAgICAgICAgICAgIHR5cGU6IGBDT05GSUcuJHthY3Rpb259YCxcbiAgICAgICAgICAgIHZhbHVlXG4gICAgICAgIH1cbiAgICB9LCAnKicpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgX3Bvc3RDb25maWc7IiwiaW1wb3J0IHt1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGV9IGZyb20gJ3ByZWFjdC9ob29rcyc7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi8uLi9jb21wb25lbnQvQnV0dG9uXCI7XG5pbXBvcnQgX3Bvc3RDb25maWcgZnJvbSBcIi4vX3Bvc3RDb25maWcuanNcIjtcbmltcG9ydCBUZXh0YXJlYSBmcm9tIFwiLi4vLi4vY29tcG9uZW50L1RleHRhcmVhXCI7XG5pbXBvcnQgdG9hc3QgZnJvbSBcIi4uLy4uL2NvbXBvbmVudC9Ub2FzdC90b2FzdFwiO1xuaW1wb3J0IHNhdmVKU09OIGZyb20gXCIuLi8uLi91dGlscy9zYXZlSlNPTlwiO1xuaW1wb3J0IFwiLi9pbmRleC5sZXNzXCI7XG5pbXBvcnQgT2xkQ29uZmlnQmFyIGZyb20gXCIuL09sZENvbmZpZ0JhclwiO1xuXG5jb25zdCBDb25maWcgPSAoKSA9PiB7XG4gICAgY29uc3QgW2NvbmZpZywgc2V0Q29uZmlnXSA9IHVzZVN0YXRlKHt9KTtcbiAgICBjb25zdCBbb2xkQ29uZmlnLCBzZXRPbGRDb25maWddID0gdXNlU3RhdGUoe30pO1xuICAgIGNvbnN0IGZvcm0gPSB1c2VSZWYobnVsbCk7XG4gICAgY29uc3QgaXNFbXB0eSA9IE9iamVjdC5rZXlzKGNvbmZpZykubGVuZ3RoID09PSAwO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgLy8g5rWL6K+V5pyJ5rKh5pyJ5pen55qE6YWN572u5paH5Lu2XG4gICAgICAgIHBhcmVudC5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICBwbHVnaW5NZXNzYWdlOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXN0T2xkQ29uZmlnXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgJyonKTtcblxuICAgICAgICBvbm1lc3NhZ2UgPSAoKHtkYXRhOiB7cGx1Z2luTWVzc2FnZX0gPSB7fX0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHtnZXRDb25maWcgPSBudWxsLCBhbGVydE1zZyA9IG51bGwsIGdldE9sZENvbmZpZyA9IG51bGx9ID0gcGx1Z2luTWVzc2FnZTtcbiAgICAgICAgICAgIChnZXRDb25maWcgIT09IG51bGwpICYmIHNldENvbmZpZyhnZXRDb25maWcgfHwge30pO1xuICAgICAgICAgICAgKGdldE9sZENvbmZpZyAhPT0gbnVsbCkgJiYgc2V0T2xkQ29uZmlnKGdldE9sZENvbmZpZyB8fCB7fSk7XG4gICAgICAgICAgICBhbGVydE1zZyAmJiB0b2FzdChhbGVydE1zZyk7XG4gICAgICAgIH0pO1xuICAgIH0sIFtdKTtcblxuICAgIC8vIOS4i+i9vSBKU09OXG4gICAgY29uc3Qgb25Eb3duTG9hZCA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgc2F2ZUpTT04oY29uZmlnLCBjb25maWcubmFtZSk7XG4gICAgfTtcblxuICAgIGNvbnN0IHNhdmUgPSAoZGF0YSkgPT4ge1xuICAgICAgICBpZiAoIWRhdGEudHJpbVN0YXJ0KCkudHJpbUVuZCgpKSB7XG4gICAgICAgICAgICB0b2FzdChcIkNvbmZpZyBjYW4ndCBlbXB0eVwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3Qgb2JqRGF0YSA9IEpTT04ucGFyc2UoZGF0YSk7XG4gICAgICAgICAgICBpZiAob2JqRGF0YSkge1xuICAgICAgICAgICAgICAgIF9wb3N0Q29uZmlnKHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiAnZWRpdCcsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBvYmpEYXRhXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICB0b2FzdCgnU2F2ZSBlcnJvcicpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8vIOS4iuS8oOaWh+S7tlxuICAgIGNvbnN0IG9uUmVwbGFjZSA9IChlKSA9PiB7XG4gICAgICAgIGNvbnN0IGZpbGVzID0gZS50YXJnZXQuZmlsZXMgfHwgW107XG4gICAgICAgIGlmICghZmlsZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGZyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgZnIub25sb2FkID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHNhdmUoZS50YXJnZXQucmVzdWx0KTtcbiAgICAgICAgfVxuICAgICAgICBmci5yZWFkQXNUZXh0KGZpbGVzLml0ZW0oMCkpO1xuICAgIH07XG5cbiAgICAvLyDkv67mlLlcbiAgICBjb25zdCBvbkVkaXQgPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IGRhdGFTYXZlID0gZS50YXJnZXQuZGF0YS52YWx1ZTtcbiAgICAgICAgc2F2ZShkYXRhU2F2ZSk7XG4gICAgfTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17b25FZGl0fSByZWY9e2Zvcm19IGNsYXNzTmFtZT1cImYxIGRmIGZkY1wiPlxuICAgICAgICAgICAgPFRleHRhcmVhIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAnIzI4MmMzNCcsIGNvbG9yOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpJywgYm9yZGVyUmFkaXVzOiAwfX1cbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZGF0YVwiIGNsYXNzTmFtZT1cImYxXCIgZGVmYXVsdFZhbHVlPXtpc0VtcHR5ID8gXCJcIiA6IEpTT04uc3RyaW5naWZ5KGNvbmZpZywgbnVsbCwgMil9XG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXJzZSB5b3VyIGNvbmZpZyBoZXJlXCIvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZiBhaWMgZ19yb3cgcHQ4IHBiOFwiPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gdGl0bGU9XCJEb3dubG9hZFwiIGNsYXNzTmFtZT1cImdfdGlwIG1yOFwiIGRhdGEtdGl0bGU9XCJEb3dubG9hZCBKU09OXCIgb25DbGljaz17b25Eb3duTG9hZH0+XG4gICAgICAgICAgICAgICAgICAgIERvd25Mb2FkXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJ0biBwciBvaCBnX3RpcCBtcjhcIiBkYXRhLXRpdGxlPVwiUmVwbGFjZSBCeSBVcGxvYWQgSlNPTlwiPlxuICAgICAgICAgICAgICAgICAgICBVcGxvYWRcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cIm8wIHBhIHcxMDAlIGgxMDAlXCIgdHlwZT1cImZpbGVcIiBvbkNoYW5nZT17b25SZXBsYWNlfS8+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJyZXNldFwiIGNsYXNzTmFtZT1cIm1sYVwiPlJlc2V0PC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwibWw4XCI+U2F2ZTwvQnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8T2xkQ29uZmlnQmFyIGRhdGE9e29sZENvbmZpZ30vPlxuICAgICAgICA8L2Zvcm0+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbmZpZztcbiIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4Lmxlc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgaGxqcyBmcm9tICdoaWdobGlnaHQuanMvbGliL2NvcmUnO1xuaW1wb3J0IHhtbCBmcm9tICdoaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy94bWwnO1xuaW1wb3J0IGNzcyBmcm9tICdoaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9jc3MnO1xuaW1wb3J0IGpzb24gZnJvbSAnaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvanNvbic7XG5pbXBvcnQge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCAnaGlnaGxpZ2h0LmpzL3N0eWxlcy9hdG9tLW9uZS1kYXJrLmNzcyc7XG5cbmhsanMucmVnaXN0ZXJMYW5ndWFnZSgneG1sJywgeG1sKTtcbmhsanMucmVnaXN0ZXJMYW5ndWFnZSgnY3NzJywgY3NzKTtcbmhsanMucmVnaXN0ZXJMYW5ndWFnZSgnanNvbicsIGpzb24pO1xuXG5jb25zdCBDU1NfTUFQID0ge1xuICAgIFwieG1sXCI6IFwieG1sXCIsXG4gICAgXCJjc3NcIjogXCJjc3NcIixcbiAgICBcImpzb25cIjogXCJqc29uXCJcbn07XG5cbmZ1bmN0aW9uIEhpZ2hsaWdodCh7Y2hpbGRyZW4gPSBcIlwiLCBjbGFzc05hbWUgPSBcIlwiLCBsYW5ndWFnZSA9IFwieG1sXCJ9KSB7XG4gICAgY29uc3QgW3N0ckh0bWwsIHNldFN0ckh0bWxdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IGFwcGVuZENsYXNzTmFtZSA9IENTU19NQVBbbGFuZ3VhZ2VdIHx8ICcnO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGh0bWwgPSBobGpzLmhpZ2hsaWdodChjaGlsZHJlbiwge2xhbmd1YWdlfSkudmFsdWU7XG4gICAgICAgIHNldFN0ckh0bWwoaHRtbCk7XG4gICAgfSwgW2NoaWxkcmVuLCBsYW5ndWFnZV0pO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxwcmUgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6ICcjMjgyYzM0Jywgb3ZlcmZsb3c6J2F1dG8nfX0gY2xhc3NOYW1lPXtgaGxqcyAke2NsYXNzTmFtZX0gJHthcHBlbmRDbGFzc05hbWV9YH1cbiAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogc3RySHRtbH19Lz5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGlnaGxpZ2h0O1xuIiwiZnVuY3Rpb24gTm9TZWxlY3Rpb24oKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBzdHlsZT17e2NvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwwLjgpJywgYmFja2dyb3VuZENvbG9yOiAnIzI4MmMzNCd9fSBjbGFzc05hbWU9XCJmMSBkZiBhaWMgamNjIGZzMTRcIj5cbiAgICAgICAgICAgIFBsZWFzZSBTZWxlY3QgU29tZXRoaW5nIVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBOb1NlbGVjdGlvbjtcbiIsImltcG9ydCBIaWdobGlnaHQgZnJvbSBcIi4vSGlnaGxpZ2h0XCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi8uLi9jb21wb25lbnQvQnV0dG9uXCI7XG5pbXBvcnQgY2xpcGJvYXJkQ29weSBmcm9tIFwiY2xpcGJvYXJkLWNvcHlcIjtcbmltcG9ydCBOb1NlbGVjdGlvbiBmcm9tIFwiLi9Ob1NlbGVjdGlvblwiO1xuaW1wb3J0IHRvYXN0IGZyb20gXCIuLi8uLi9jb21wb25lbnQvVG9hc3QvdG9hc3RcIjtcblxuY29uc3QgQ09ERV9QUkUgPSBgLypcbiAqIEFsbCBydWxlcyBpbiDjgIwgc2Fjc3Mg44CNIHdpbGwgZmlsdGVyIG91dC5cbiAqIE1ha2Ugc3VyZSB5b3UgZ290IOOAjCBzY2FzcyDjgI0gaW4geW91ciBwcm9qZWN0XG4gKiAkIG5wbSBpbnN0YWxsIHNhY3NzXG4gKiBAaW1wb3J0ICd+c2Fjc3MnO1xuICovXFxuXG5gO1xuXG5jb25zdCBSZW5kZXJDU1MgPSAoe25vU2VsZWN0aW9uID0gdHJ1ZSwgY29kZX0pID0+IHtcblxuICAgIGNvbnN0IG9uQ29weSA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY2xpcGJvYXJkQ29weShjb2RlIHx8ICcvKiBub3RoaW5nICovJykudGhlbigoKSA9PiB7XG4gICAgICAgICAgICB0b2FzdCgnQ1NTIENvcHkgU3VjY2VzcycpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICB7bm9TZWxlY3Rpb24gPyA8Tm9TZWxlY3Rpb24vPiA6IChcbiAgICAgICAgICAgICAgICA8SGlnaGxpZ2h0IGxhbmd1YWdlPVwiY3NzXCIgY2xhc3NOYW1lPVwiZjFcIj5cbiAgICAgICAgICAgICAgICAgICAge2Ake0NPREVfUFJFfSR7Y29kZSB8fCAnJ31gfVxuICAgICAgICAgICAgICAgIDwvSGlnaGxpZ2h0PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ19yb3cgZGYgYWljIGpjc2IgcHQ4IHBiOCBiYzpmZmZcIj5cbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJtcjhcIiBocmVmPVwiaHR0cHM6Ly93d3cubnBtanMuY29tL3BhY2thZ2Uvc2Fjc3NcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2ltZy5zaGllbGRzLmlvL25wbS92L3NhY3NzLnN2Z1wiIHdpZHRoPVwiODBcIiBoZWlnaHQ9XCIyMFwiIGFsdD1cInNhY3NzXCIvPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e29uQ29weX0+Q29weTwvQnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgIClcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlbmRlckNTUztcbiIsImltcG9ydCBIaWdobGlnaHQgZnJvbSBcIi4vSGlnaGxpZ2h0XCI7XG5pbXBvcnQgZm9ybWF0IGZyb20gXCJ4bWwtZm9ybWF0dGVyXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi8uLi9jb21wb25lbnQvQnV0dG9uXCI7XG5pbXBvcnQgY2xpcGJvYXJkQ29weSBmcm9tIFwiY2xpcGJvYXJkLWNvcHlcIjtcbmltcG9ydCBOb1NlbGVjdGlvbiBmcm9tIFwiLi9Ob1NlbGVjdGlvblwiO1xuaW1wb3J0IHRvYXN0IGZyb20gXCIuLi8uLi9jb21wb25lbnQvVG9hc3QvdG9hc3RcIjtcblxuXG5jb25zdCBJbnB1dEpTWCA9ICh7ZGlzYWJsZWQgPSB0cnVlLCBpc0pTWH0pID0+IHtcbiAgICBjb25zdCBvbkNoYW5nZUpTWCA9IChlKSA9PiB7XG4gICAgICAgIHBhcmVudC5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICBwbHVnaW5NZXNzYWdlOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogYENPTkZJRy5jaGFuZ2VKU1hgLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBlLnRhcmdldC5jaGVja2VkXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sICcqJyk7XG4gICAgfTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibXIxNiBkZiBhaWNcIj5cbiAgICAgICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPVwiZnMxNCBtcjRcIj5KU1g6PC9zdHJvbmc+XG4gICAgICAgICAgICA8aW5wdXQgZGlzYWJsZWQ9e2Rpc2FibGVkfSB0eXBlPVwiY2hlY2tib3hcIiBjaGVja2VkPXtpc0pTWH0gb25DaGFuZ2U9e29uQ2hhbmdlSlNYfS8+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgKVxufVxuXG5jb25zdCBSZW5kZXJIdG1sID0gKHtjb2RlID0gJycsIG5vU2VsZWN0aW9uID0gdHJ1ZSwgaXNKU1h9KSA9PiB7XG4gICAgY29uc3Qgb25Db3B5ID0gKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjbGlwYm9hcmRDb3B5KGNvZGUpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgdG9hc3QoJ0h0bWwgQ29weSBTdWNjZXNzJyk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIHtub1NlbGVjdGlvbiA/IDxOb1NlbGVjdGlvbi8+IDogKFxuICAgICAgICAgICAgICAgIDxIaWdobGlnaHQgY2xhc3NOYW1lPVwiZjFcIiBsYW5ndWFnZT1cInhtbFwiPlxuICAgICAgICAgICAgICAgICAgICB7Y29kZSA/IGZvcm1hdChjb2RlKSA6ICcnfVxuICAgICAgICAgICAgICAgIDwvSGlnaGxpZ2h0PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ19yb3cgZGYgYWljIGpjc2IgcHQ4IHBiOCBiYzpmZmZcIj5cbiAgICAgICAgICAgICAgICA8SW5wdXRKU1ggZGlzYWJsZWQ9e25vU2VsZWN0aW9ufSBpc0pTWD17aXNKU1h9Lz5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e29uQ29weX0+Q29weTwvQnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlbmRlckh0bWw7XG4iLCJpbXBvcnQge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3ByZWFjdC9ob29rcyc7XG5pbXBvcnQgUmVuZGVySHRtbCBmcm9tIFwiLi9SZW5kZXJIVE1MXCI7XG5pbXBvcnQgUmVuZGVyQ1NTIGZyb20gXCIuL1JlbmRlckNTU1wiO1xuXG5jb25zdCBIb21lID0gKHt0YWJJbmRleH0pID0+IHtcbiAgICBjb25zdCBbaHRtbCwgc2V0SHRtbF0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW0NTUywgc2V0Q1NTXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbaXNKU1gsIHNldElzSlNYXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbbm9TZWxlY3Rpb24sIHNldE5vU2VsZWN0aW9uXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgb25tZXNzYWdlID0gKCh7ZGF0YToge3BsdWdpbk1lc3NhZ2V9ID0ge319KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7Z2V0SFRNTCA9IG51bGwsIGdldENTUyA9IG51bGwsIGlzSlNYID0gbnVsbCwgbm9TZWxlY3Rpb24gPSBudWxsfSA9IHBsdWdpbk1lc3NhZ2U7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh7Z2V0SFRNTCwgZ2V0Q1NTfSk7XG4gICAgICAgICAgICBnZXRIVE1MICE9PSBudWxsICYmIHNldEh0bWwoZ2V0SFRNTCk7XG4gICAgICAgICAgICBnZXRDU1MgIT09IG51bGwgJiYgc2V0Q1NTKGdldENTUyk7XG4gICAgICAgICAgICBpc0pTWCAhPT0gbnVsbCAmJiBzZXRJc0pTWChpc0pTWCk7XG4gICAgICAgICAgICBub1NlbGVjdGlvbiAhPT0gbnVsbCAmJiBzZXROb1NlbGVjdGlvbihub1NlbGVjdGlvbik7XG4gICAgICAgIH0pO1xuICAgIH0sIFtdKTtcblxuICAgIGlmICh0YWJJbmRleCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gKDxSZW5kZXJIdG1sIG5vU2VsZWN0aW9uPXtub1NlbGVjdGlvbn0gY29kZT17aHRtbH0gaXNKU1g9e2lzSlNYfS8+KVxuICAgIH1cbiAgICBpZiAodGFiSW5kZXggPT09IDEpIHtcbiAgICAgICAgcmV0dXJuIDxSZW5kZXJDU1Mgbm9TZWxlY3Rpb249e25vU2VsZWN0aW9ufSBjb2RlPXtDU1N9Lz5cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIiwiaW1wb3J0IHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdwcmVhY3QvY29tcGF0JztcbmltcG9ydCBcIi4vaW5kZXgubGVzc1wiO1xuaW1wb3J0IHRvYXN0IGZyb20gXCIuLi8uLi9jb21wb25lbnQvVG9hc3QvdG9hc3RcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uLy4uL2NvbXBvbmVudC9CdXR0b25cIjtcbmltcG9ydCBUZXh0YXJlYSBmcm9tIFwiLi4vLi4vY29tcG9uZW50L1RleHRhcmVhXCI7XG5pbXBvcnQgX3Bvc3RDb25maWcgZnJvbSBcIi4uL0NvbmZpZy9fcG9zdENvbmZpZ1wiO1xuaW1wb3J0IHt1c2VSZWZ9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcblxuY29uc3QgVG9rZW4gPSAoKSA9PiB7XG4gICAgY29uc3QgW3NlbGVjdGlvblRva2Vucywgc2V0U2VsZWN0aW9uVG9rZW5zXSA9IHVzZVN0YXRlKHt9KTtcbiAgICBjb25zdCBpc0VtcHR5ID0gT2JqZWN0LmtleXMoc2VsZWN0aW9uVG9rZW5zKS5sZW5ndGggPT09IDA7XG4gICAgY29uc3QgZm9ybSA9IHVzZVJlZihudWxsKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIG9ubWVzc2FnZSA9ICgoe2RhdGE6IHtwbHVnaW5NZXNzYWdlfSA9IHt9fSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qge3NlbGVjdGlvblRva2VucyA9IG51bGwsIGFsZXJ0TXNnID0gbnVsbH0gPSBwbHVnaW5NZXNzYWdlO1xuICAgICAgICAgICAgKHNlbGVjdGlvblRva2VucyAhPT0gbnVsbCkgJiYgc2V0U2VsZWN0aW9uVG9rZW5zKHNlbGVjdGlvblRva2VucyB8fCB7fSk7XG4gICAgICAgICAgICBhbGVydE1zZyAmJiB0b2FzdChhbGVydE1zZyk7XG4gICAgICAgIH0pO1xuICAgIH0sIFtdKTtcblxuICAgIGNvbnN0IG9uU2F2ZSA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgZGF0YSA9IGUudGFyZ2V0LmRhdGEudmFsdWU7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBvYmpEYXRhID0gSlNPTi5wYXJzZShkYXRhKTtcbiAgICAgICAgICAgIGlmIChvYmpEYXRhKSB7XG4gICAgICAgICAgICAgICAgX3Bvc3RDb25maWcoe1xuICAgICAgICAgICAgICAgICAgICBhY3Rpb246ICdhZGRUb2tlbicsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBvYmpEYXRhXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICB0b2FzdCgnU2F2ZSBlcnJvcicpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiZjEgZGYgZmRjXCIgcmVsPXtmb3JtfSBvblN1Ym1pdD17b25TYXZlfT5cbiAgICAgICAgICAgIDxUZXh0YXJlYVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAnIzI4MmMzNCcsIGNvbG9yOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpJywgYm9yZGVyUmFkaXVzOiAwfX1cbiAgICAgICAgICAgICAgICBuYW1lPVwiZGF0YVwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZjFcIlxuICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17aXNFbXB0eSA/IFwiXCIgOiBKU09OLnN0cmluZ2lmeShzZWxlY3Rpb25Ub2tlbnMsIG51bGwsIDIpfVxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVGhlIG5vZGUgeW91IHNlbGVjdGVkIHdpdGhvdXQgYW55IHRva2VuXCIvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnX3JvdyBkZiBhaWMgamNzYiB0YWMgcHQ4IHBiOCBsaDI0IGJjOmZmZlwiPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInJlc2V0XCIgY2xhc3NOYW1lPVwibWxhXCI+UmVzZXQ8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIGRpc2FibGVkPXtpc0VtcHR5fSB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwibWw4XCI+U2F2ZTwvQnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZm9ybT5cbiAgICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IFRva2VuO1xuIiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXgubGVzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIi8vIEB0cy1pZ25vcmVcbmltcG9ydCBzYXZlRmlsZSBmcm9tIFwic2F2ZS1hcy1maWxlXCI7XG5jb25zdCBzYXZlSlNPTiA9IChkYXRhLCBmaWxlbmFtZSA9ICd0b2tlbi10by1jb2RlJykgPT4ge1xuICAgIGlmICghZGF0YSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGpzb24gPSBKU09OLnN0cmluZ2lmeShkYXRhLCBudWxsLCAyKTtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgY29uc3QgZmlsZSA9IG5ldyBGaWxlKFtqc29uXSwgeyB0eXBlOiAnYXBwbGljYXRpb24vanNvbicgfSk7XG4gICAgc2F2ZUZpbGUoZmlsZSwgYCR7ZmlsZW5hbWV9Lmpzb25gKTtcbn07XG5leHBvcnQgZGVmYXVsdCBzYXZlSlNPTjtcbiJdLCJzb3VyY2VSb290IjoiIn0=