!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=17)}({17:function(t,e,n){"use strict";n.r(e);var r=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]])}return n},o={isJSX:!1,_ignoreClassName:[],tokens:{}},i={key:"TokenToCode-".concat("1.0"),store:o,changeJSX:function(t){var e=i.getCurrent();e.isJSX=t,figma.clientStorage.setAsync(i.key,e)},edit:function(t){i.store=t,figma.clientStorage.setAsync(i.key,t),figma.ui.postMessage({alertMsg:"Save success"})},addToken:function(t){var e=i.getCurrent(),n=e.tokens,o=r(e,["tokens"]),a=Object.assign(Object.assign({},o),{tokens:Object.assign(Object.assign({},n),t)});i.store=a,figma.clientStorage.setAsync(i.key,a),figma.ui.postMessage({alertMsg:"Save success"})},isJSX:function(){return!!i.store.isJSX},init:function(){return new Promise((function(t,e){figma.clientStorage.getAsync(i.key).then((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;e&&0!==Object.keys(e).length?i.store=e:(figma.clientStorage.setAsync(i.key,o),i.store=o),t(i.getToken())})).catch(e)}))},getCurrent:function(){return i.store},getToken:function(){var t=(i.store||{}).tokens,e=void 0===t?null:t;return e?JSON.parse(JSON.stringify(e)):null},getInfoById:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"DEFAULT";if(!t||"string"!=typeof t)return null;var n=figma.getStyleById(t)||{},r=n.key,o=void 0===r?"":r;if(!o)return null;var a=i.getToken()||{},u=a[o]||{};return u[e]||u.DEFAULT||null},getSelectionTokens:function(t){var e=i.store.tokens,n=void 0===e?{}:e;if(!t)return null;var r={};if(y.isComponent(t)){var o=y.getMainComponent(t),a=o.key,u=o.name,l=o.type,c=n[a]||{};r[a]=Object.assign(Object.assign({DEFAULT:{className:[],_ignoreClassName:[],_renderWidth:!1,_renderHeight:!1,tagName:"div",children:!0}},c),{_tokenName:u,_tokenType:l})}return[t.fillStyleId,t.textStyleId,t.strokeStyleId,t.effectStyleId,t.gridStyleId].forEach((function(t,e){if(!t)return"";var o=figma.getStyleById(t)||{},i=o.key,a=o.name,u=o.type;if(!i)return"";var l=null;0===e&&(l={TEXT:{className:[],_ignoreClassName:[]}}),r[i]=Object.assign(Object.assign(Object.assign({DEFAULT:{className:[],_ignoreClassName:[]}},l),n[i]),{_tokenName:a,_tokenType:u})})),r},getAllTokens:function(){var t=figma.root.name,e=figma.root.findAll((function(t){return"COMPONENT_SET"===t.type||"COMPONENT"===t.type&&"COMPONENT_SET"!==t.parent.type})),n={},r=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];t.forEach((function(t){n[t.id]={name:t.name,type:t.type}}))};r(e),r(figma.getLocalPaintStyles()),r(figma.getLocalTextStyles()),r(figma.getLocalEffectStyles()),r(figma.getLocalGridStyles()),figma.ui.postMessage({gotAllTokens:{name:t,ignoreClassName:"",token:n}})}},a=i;function u(t){return function(t){if(Array.isArray(t))return s(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||f(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(t){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,o,i=[],a=!0,u=!1;try{for(n=n.call(t);!(a=(r=n.next()).done)&&(i.push(r.value),!e||i.length!==e);a=!0);}catch(t){u=!0,o=t}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}(t,e)||f(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(t,e){if(t){if("string"==typeof t)return s(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(t,e):void 0}}function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var g=function t(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0,r=e,o=0,i=Object.entries(n);o<i.length;o++){var a=c(i[o],2),f=a[0],s=a[1],g=e[f];g&&s&&l(g)===l(s)?r[f]=g instanceof Array&&s instanceof Array?[].concat(u(g),u(s)):g&&g instanceof Object?t(g,s):s:r[f]=s}return r},d={isComponent:function(t){return"INSTANCE"===t.type||"COMPONENT"===t.type},getMainComponent:function(t){return"COMPONENT_SET"===t.type||"COMPONENT"===t.type?t:t.mainComponent},getComponentId:function(t){var e=(d.getMainComponent(t)||{}).key;return void 0===e?"":e},stringToComponentName:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=t.trim();if(!e)return"";var n=e.replace(/[\W]/g,""),r=n.charAt(0).toUpperCase();return 1===n.length?r:r+n.slice(1)},getInfo:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=d.getComponentId(t),r=n?a.getToken()[n]:"";if(!r)return e;var o=r.DEFAULT,i=void 0===o?{}:o;return g(e,i)}},y=d,p={getRgbaByFill:function(t){var e=t.color,n=t.opacity;return t.visible&&0!==n?[parseInt(String(255*e.r)),parseInt(String(255*e.g)),parseInt(String(255*e.b)),String(n).indexOf(".")>-1?n.toFixed(1):n]:null}},m={data:{},init:function(){m.data={}},nameMap:{fs:"font-size",lh:"line-height",ls:"letter-space",ff:"font-family",pt:"padding-top",pr:"padding-right",pb:"padding-bottom",pl:"padding-left",mt:"margin-top",mr:"margin-right",mb:"margin-bottom",ml:"margin-left",h:"height",w:"width",btlr:"border-top-left-radius",btrr:"border-top-right-radius",bbrr:"border-bottom-right-radius",bblr:"border-bottom-left-radius",br:"border-radius"},getClassSelectorByName:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return t.indexOf(".")>-1&&(t=t.replace(/\./g,"\\.")),t.indexOf(":")>-1&&(t=t.replace(/\:/g,"\\:")),t.indexOf("%")>-1&&(t=t.replace(/\%/g,"\\%")),t},getString:function(){var t=m.data;return Object.keys(t).sort().map((function(e){return".".concat(m.getClassSelectorByName(e),"{").concat(t[e],";}")})).join("\n")},add:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1?arguments[1]:void 0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"px";if(!t||!e)return"";var r=m.nameMap[t];if(!r)return"";var o=Number(e)?parseFloat(Number(e).toFixed(2)):e,i="px"===n?"":n,a="".concat(t).concat(o).concat(i);return m.data[a]="".concat(r,":").concat(o).concat(n),a},addFontFamily:function(t){if(!t)return"";var e=t.replace(/[\W]/g,"").toLowerCase(),n="ff_".concat(e);return m.data[n]='font-family:"'.concat(t,'"'),n},addColor:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];if(!t&&t.length)return"";var e="c_".concat(t.join(""));return m.data[e]="color:rgba(".concat(t.join(","),")"),e},addBgColor:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];if(!t&&t.length)return"";var e="bc_".concat(t.join(""));return m.data[e]="background-color:rgba(".concat(t.join(","),")"),e}},v=m;function h(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,o,i=[],a=!0,u=!1;try{for(n=n.call(t);!(a=(r=n.next()).done)&&(i.push(r.value),!e||i.length!==e);a=!0);}catch(t){u=!0,o=t}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return b(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return b(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var S={getFill:function(t){var e=h(("function"==typeof t.getRangeFills?t.getRangeFills(0,1):t.fills)||[],1)[0];if(!e||"SOLID"!==e.type)return"";var n=p.getRgbaByFill(e);return n?"TEXT"===t.type?v.addColor(n):v.addBgColor(n):""},getInfo:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n="function"==typeof t.getRangeFillStyleId?t.getRangeFillStyleId(0,1):t.fillStyleId,r=a.getInfoById(n,t.type)||{};if(r)return g(e,r);var o=S.getFill(t);return g(e,{className:[o]})}},I=S;function N(t){return(N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var O={unitMap:{PERCENT:"%"},getFontNameClassByStyle:function(t){if("string"!=typeof t||!t)return"";var e={ULTRALIGHT:"fw100",THIN:"fw200",LIGHT:"fw300",REGULAR:"",MEDIUM:"fw500",SEMIBOLD:"fw600",BOLD:"fw700",BLACK:"fw900",ITALIC:"fsi",OBLIQUE:"fsi"};return t.split(" ").map((function(t){return e[t.toUpperCase()]||""})).filter((function(t){return t})).join(" ")},getPropByNode:function(t,e){var n={textCase:"getRangeTextCase",lineHeight:"getRangeLineHeight",letterSpacing:"getRangeLetterSpacing",fontSize:"getRangeFontSize",textDecoration:"getRangeTextDecoration",fontName:"getRangeFontName",fills:"getRangeFills",textStyleId:"getRangeTextStyleId"};return"symbol"===N(t[e])&&n[e]&&"function"==typeof t[n[e]]?t[n[e]](0,1):t[e]},getACSSSInfo:function(t){var e=[],n=O.getPropByNode(t,"fontSize");n>1&&e.push(v.add("fs",n));var r=O.getPropByNode(t,"lineHeight");if(null==r?void 0:r.value){var o=r.value,i=r.unit;e.push(v.add("lh",o,O.unitMap[i]))}var a=O.getPropByNode(t,"letterSpacing");if(null==a?void 0:a.value){var u=a.value,l=a.unit;e.push(v.add("ls",u,O.unitMap[l]))}var c=O.getPropByNode(t,"fontName"),f=O.getFontNameClassByStyle(c.style);f&&e.push(f),(null==c?void 0:c.family)&&e.push(v.addFontFamily(c.family));var s={LEFT:"",CENTER:"tac",RIGHT:"tar",JUSTIFIED:"taj"}[t.textAlignHorizontal];s&&e.push(s);var g={TOP:"",CENTER:"vam",BOTTOM:"vab"}[t.textAlignVertical];g&&e.push(g);var d={ORIGINAL:"",UPPER:"ttu",LOWER:"ttl",TITLE:"ttc"}[O.getPropByNode(t,"textCase")];d&&e.push(d);var y={NONE:"",UNDERLINE:"tdu",STRIKETHROUGH:"tdl"}[O.getPropByNode(t,"textDecoration")];y&&e.push(y);var p=e.join(" ");return{className:e,tagName:["fw500","fw600","fw700","fw800","fw900"].findIndex((function(t){return p.indexOf(t)>-1}))>-1?"strong":"span"}},getTextChildren:function(t){var e=t.characters,n=void 0===e?"":e,r=n.split("\n").filter((function(t){return t.trim()}));if(r.length>1){var o=t.paragraphSpacing>0?v.add("mb",t.paragraphSpacing):"";return r.map((function(t,e){return{tagName:"p",className:e===r.length-1?"":o,children:[t]}}))}return[n]},getInfo:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("TEXT"!==t.type)return e;var n=O.getPropByNode(t,"textStyleId"),r=a.getInfoById(n);if(r)return g(e,r);var o=O.getACSSSInfo(t);return g(e,o)}},T=O,A={getInfo:function(t,e){var n=a.getInfoById(t.strokeStyleId);return n?g(e,n):e}},C={getInfo:function(t,e){var n=a.getInfoById(t.gridStyleId);return n?g(e,n):e}};function E(t){return function(t){if(Array.isArray(t))return j(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return j(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return j(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function j(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var w={isFlex:function(t){return!(["TEXT"].indexOf(t.type)>-1)&&((null==t?void 0:t.layoutMode)&&"NONE"!==(null==t?void 0:t.layoutMode))},getThisInfo:function(t){if(!w.isFlex(t))return null;var e=t.layoutMode,n=t.primaryAxisAlignItems,r=t.counterAxisAlignItems,o=t.children;if(!(void 0===o?[]:o).length)return null;var i=[];return"VERTICAL"===e?i.push({CENTER:"tac",MAX:"tar"}[r]):(i.push({CENTER:"jcc",MAX:"jcfe",SPACE_BETWEEN:"jcsb"}[n]||""),i.push({CENTER:"aic",MAX:"aife"}[r]||""),i.push("df")),i},getInfoFromParent:function(t){var e=t.parent;if(!e||!w.isFlex(e))return null;var n=e.layoutMode,r=e.primaryAxisAlignItems,o=e.itemSpacing;if("SPACE_BETWEEN"===r)return null;var i=[],a=[],u=(e.children.filter((function(t){return t.visible})).pop()||{}).id,l=(void 0===u?"":u)===t.id;if("VERTICAL"===n&&i.push("db"),o>0&&!l){i.push(v.add({VERTICAL:"mb",HORIZONTAL:"mr"}[n],o))}return 1===t.layoutGrow&&(i.push("f1"),a.push("w".concat(t.width))),{className:i,ignoreClassName:a}},getInfo:function(t,e){var n=w.getThisInfo(t)||[],r=w.getInfoFromParent(t)||{},o=r.className,i=void 0===o?[]:o,a=r.ignoreClassName,u=void 0===a?[]:a;return g(e,{className:[].concat(E(n),E(i)),_ignoreClassName:u})}},x=w,M={isBlock:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=["div","h1","h2","h3","h4","h5","h6","p"];return e.indexOf(t)>-1},isSelfTag:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=["img","link","meta","br","br","hr","input","col","frame","area","param","object","embed","keygen","source"];return e.indexOf(t)>-1},clearClassName:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];if(!t||0===t.length)return[];var n=[];return t.forEach((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";t&&"null"!==t&&-1===n.indexOf(t)&&-1===e.indexOf(t)&&n.push(t)})),n}},P={getInfo:function(t,e){var n=a.getInfoById(t.effectStyleId);return n?g(e,n):e}};function R(t){return function(t){if(Array.isArray(t))return k(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return k(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return k(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function k(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var L={gerBorderRadiusClassName:function(t){var e=t.topLeftRadius||0,n=t.topRightRadius||0,r=t.bottomRightRadius||0,o=t.bottomLeftRadius||0;if(e+n+r+o===0)return[];if(e===n&&e===r&&e===o)return[v.add("br",e)];var i=[];return e&&i.push(v.add("btlr",e)),n&&i.push(v.add("btrr",n)),r&&i.push(v.add("bbrr",r)),o&&i.push(v.add("bblr",o)),i},getPaddingClassName:function(t){return[t.paddingTop>1?v.add("pt",t.paddingTop):"",t.paddingRight>1?v.add("pr",t.paddingRight):"",t.paddingBottom>1?v.add("pb",t.paddingBottom):"",t.paddingLeft>1?v.add("pl",t.paddingLeft):""]},getInfo:function(t,e){var n=L.getPaddingClassName(t),r=L.gerBorderRadiusClassName(t);return g(e,{className:[].concat(R(n),R(r))})}},B=L;function _(t){return function(t){if(Array.isArray(t))return F(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return F(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return F(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function F(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var D={isStructNode:function(t){if(t.name.startsWith("#"))return!0;var e=["RECTANGLE","VECTOR","STAR","LINE","POLYGON","ELLIPSE","SLICE"];if(e.indexOf(t.type)>-1)return!0;if("TEXT"===t.type)return!1;var n=t.children,r=void 0===n?[]:n;return!r.length||!r.find((function(t){return t.visible&&-1===e.indexOf(t.type)}))},isRenderChildren:function(t){return"INSTANCE"!==t.type&&"COMPONENT"!==t.type||t.children.length,!1},getNodeInfo:function(t){if(!t.visible||t.name.startsWith("_"))return null;if(D.isRenderChildren(t))return D.getNodeInfo(t.children[0]);var e=D.isStructNode(t),n={_ignoreClassName:[],className:[],children:[]};e&&(n.tagName="i"),n=y.getInfo(t,n),n=I.getInfo(t,n),n=T.getInfo(t,n),n=A.getInfo(t,n),n=C.getInfo(t,n),n=P.getInfo(t,n),n=B.getInfo(t,n),n=x.getInfo(t,n),(e&&"false"!==String(null==n?void 0:n._renderHeight)||"true"===String(null==n?void 0:n._renderWidth))&&n.className.push(v.add("w",parseInt(String(t.width)))),(e&&"false"!==String(null==n?void 0:n._renderHeight)||"true"===String(null==n?void 0:n._renderHeight))&&n.className.push(v.add("h",parseInt(String(t.height)))),n.children=function(){var r;if("TEXT"===t.type){var o=T.getTextChildren(t);return"p"===(null===(r=o[0])||void 0===r?void 0:r.tagName)&&(n.tagName="div"),o}return e||!n.children?[]:"TEXT"===String(n.children)?t.findAll((function(t){return"TEXT"===t.type&&t.visible})).map((function(t){return t.characters})):D.getNodesInfo(t.children)}();var r=(a.getCurrent()||{})._ignoreClassName,o=void 0===r?[]:r;if(n.className=M.clearClassName(n.className,[].concat(_(n._ignoreClassName),_(o))),n.children instanceof Array&&1===n.children.length){var i=n.children[0];if("string"!=typeof i&&i.tagName===n.tagName)return i.className=[].concat(_(i.className),_(n.className)),i}return n},sort:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return _(t).sort((function(t,e){var n=t.y+t.height,r=e.y+e.height;return t.y===e.y?t.x-e.x:n-r}))},getNodesInfo:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=[],n=D.sort(t),r=0,o=n.length;r<o;r++){var i=D.getNodeInfo(n[r]);i&&(i instanceof Array?e=[].concat(_(e),_(i)):e.push(i))}return e}},U=D;function H(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,o,i=[],a=!0,u=!1;try{for(n=n.call(t);!(a=(r=n.next()).done)&&(i.push(r.value),!e||i.length!==e);a=!0);}catch(t){u=!0,o=t}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return X(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return X(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function X(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var G=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]])}return n},J={getPropsStringByObject:function(t){for(var e=[],n=0,r=Object.entries(t);n<r.length;n++){var o=H(r[n],2),i=o[0],a=o[1];if(!i.startsWith("_")){var u=a instanceof Array?a.join(" "):a,l="className"===i?"class":i;u&&e.push("".concat(l,'="').concat(u,'"'))}}return e.join(" ")},getItemDom:function(t){if(!t)return"";if("string"==typeof t)return t;var e=t.tagName,n=t.children,r=void 0===n?[]:n,o=G(t,["tagName","children"]),i=e?e.toLowerCase():"div",a=J.getPropsStringByObject(o),u="".concat(i).concat(a?" ".concat(a):"");return M.isSelfTag(i)?"<".concat(u,"/>"):r.length?"<".concat(u,">").concat(J.getDomByArray(r),"</").concat(i,">"):"<".concat(u,"></").concat(i,">")},getDomByArray:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return t.map((function(t){return J.getItemDom(t)})).join("")}},W=J;function $(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,o,i=[],a=!0,u=!1;try{for(n=n.call(t);!(a=(r=n.next()).done)&&(i.push(r.value),!e||i.length!==e);a=!0);}catch(t){u=!0,o=t}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return z(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return z(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function z(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var V=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]])}return n},K={getPropsString:function(t){for(var e=[],n=0,r=Object.entries(t);n<r.length;n++){var o=$(r[n],2),i=o[0],a=o[1];if(!i.startsWith("_")){var u=a instanceof Array?a.join(" "):a;u&&e.push("".concat(i,'="').concat(u,'"'))}}return e.join(" ")},getItemDom:function(t){if(!t)return"";if("string"==typeof t)return t;var e=t.tagName,n=void 0===e?"div":e,r=t.children,o=void 0===r?[]:r,i=V(t,["tagName","children"]),a=K.getPropsString(i),u="".concat(n).concat(a?" ".concat(a):"");return M.isSelfTag(n)?"<".concat(u,"/>"):o.length?"<".concat(u,">").concat(K.getDomByArray(o),"</").concat(n,">"):t.componentName?"<".concat(u,"/>"):"<".concat(u,"></").concat(n,">")},getDomByArray:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return t.map((function(t){return K.getItemDom(t)})).join("")}},Q=K,Y={render:function(t,e){return e?Q.getItemDom(t):W.getItemDom(t)}},Z=function(){figma.clientStorage.getAsync("SACSS").then((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.projects;e&&e.length&&setTimeout((function(){console.log("SACSS",t),figma.ui.postMessage({getOldConfig:t})}),16)}))};function q(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,o,i=[],a=!0,u=!1;try{for(n=n.call(t);!(a=(r=n.next()).done)&&(i.push(r.value),!e||i.length!==e);a=!0);}catch(t){u=!0,o=t}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return tt(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return tt(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function tt(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var et={tabIndex:0,getSelection:function(){var t=figma.currentPage.selection;return t.length?t[0]:(figma.ui.postMessage({noSelection:!0}),null)},onTabChange:function(t){var e=et.tabIndex;if(et.tabIndex=t,0!==e&&1!==e||0!==t&&1!==t){var n=["runHome","runHome","runToken","runConfig"][t];n&&et[n]()}},run:function(){var t=["runHome","runHome","runToken",""][et.tabIndex];t&&et[t]()},runHome:function(){var t=et.getSelection();if(t){v.init();var e=U.getNodeInfo(t),n=a.isJSX();setTimeout((function(){figma.ui.postMessage({getHTML:Y.render(e,n),getCSS:v.getString(),isJSX:n,noSelection:!1})}),16)}},runConfig:function(){setTimeout((function(){figma.ui.postMessage({getConfig:a.getCurrent()})}),10)},runToken:function(){var t=et.getSelection();t&&setTimeout((function(){figma.ui.postMessage({selectionTokens:a.getSelectionTokens(t),noSelection:!1})}),16)},onmessage:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.type,n=void 0===e?null:e,r=t.value,o=void 0===r?null:r;if(null!==n)if("testOldConfig"!==n){var i=n.split("."),u=q(i,2),l=u[0],c=u[1];if("API"===l&&c in et)et[c](o);else if("CONFIG"===l&&c in a){if(a[c](o),"changeJSX"===c)return void et.runHome();if("addToken"===c)return void et.runToken();et.runConfig()}}else Z()}};a.init().then((function(){figma.showUI(__html__,{width:400,height:600}),et.run(),figma.on("selectionchange",(function(){et.run()})),figma.ui.onmessage=et.onmessage}))}});