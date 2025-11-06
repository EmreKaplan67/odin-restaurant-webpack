/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* ===================== */\r\n/* RESET & GLOBAL STYLES */\r\n/* ===================== */\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  font-family: \"Poppins\", sans-serif;\r\n  background-color: #fffaf3; /* light cream background */\r\n  color: #333;\r\n}\r\n\r\n/* ===================== */\r\n/* HEADER & NAVIGATION */\r\n/* ===================== */\r\nheader {\r\n  background-color: #3b2f2f; /* dark brown */\r\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 90px;\r\n  z-index: 1000;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.navigation {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 20px;\r\n  height: 100%;\r\n}\r\n\r\n/* NAV BUTTONS */\r\n.nav-button {\r\n  color: #f3e5c3;\r\n  background: none;\r\n  border: none;\r\n  font-weight: 600;\r\n  font-size: 1rem;\r\n  cursor: pointer;\r\n  padding: 10px 15px;\r\n  transition: all 0.2s ease-in-out;\r\n}\r\n\r\n.nav-button.active {\r\n  color: #c9a44f;\r\n  border-bottom: 3px solid #c9a44f;\r\n}\r\n\r\n/* LOGO + HOME BUTTON */\r\n.nav-button.home {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 0.5rem;\r\n}\r\n\r\n.nav-button.home img {\r\n  height: 32px;\r\n  width: 32px;\r\n  border-radius: 50%;\r\n  object-fit: cover;\r\n}\r\n\r\n.nav-button.home span {\r\n  font-weight: 600;\r\n  color: #ffcc70;\r\n}\r\n\r\n/* ===================== */\r\n/* MAIN CONTENT CONTAINER */\r\n/* ===================== */\r\n#content {\r\n  margin-top: 90px; /* ensures space below fixed header */\r\n  padding: 20px;\r\n  min-height: calc(100vh - 90px);\r\n}\r\n\r\n/* Normalize section spacing */\r\nsection {\r\n  margin-bottom: 60px;\r\n  padding-top: 40px;\r\n  text-align: center;\r\n}\r\n\r\nsection h2 {\r\n  margin-top: 0;\r\n}\r\n\r\n/* ===================== */\r\n/* HERO SECTION */\r\n/* ===================== */\r\n.hero {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 2rem;\r\n  padding: 1.8rem 2rem;\r\n}\r\n\r\n.hero-image {\r\n  width: 35%;\r\n}\r\n\r\n.hero-text {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  gap: 1rem;\r\n}\r\n\r\n/* ===================== */\r\n/* WHO WE ARE */\r\n/* ===================== */\r\n.who-we-are {\r\n  background-color: #f9f6f1;\r\n  max-width: 900px;\r\n  margin: 0 auto;\r\n  border-radius: 12px;\r\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);\r\n  padding: 60px 20px;\r\n}\r\n\r\n.who-we-are h2 {\r\n  font-size: 2.5rem;\r\n  color: #3e2f1c;\r\n  margin-bottom: 30px;\r\n  position: relative;\r\n  display: inline-block;\r\n}\r\n\r\n.who-we-are h2::after {\r\n  content: \"\";\r\n  display: block;\r\n  width: 60%;\r\n  height: 3px;\r\n  background-color: #c9a44f;\r\n  margin: 10px auto 0;\r\n  border-radius: 2px;\r\n}\r\n\r\n.who-we-are p {\r\n  font-size: 1.1rem;\r\n  color: #4b4b4b;\r\n  line-height: 1.8;\r\n  margin-bottom: 20px;\r\n  max-width: 750px;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n\r\n/* ===================== */\r\n/* MENU */\r\n/* ===================== */\r\n.menu {\r\n  background-color: #f9f6f1;\r\n  padding: 80px 20px;\r\n}\r\n\r\n.menu h2 {\r\n  font-size: 2.5rem;\r\n  color: #3e2f1c;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.menu-intro {\r\n  font-size: 1.1rem;\r\n  color: #555;\r\n  margin-bottom: 50px;\r\n}\r\n\r\n.menu-grid {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\r\n  gap: 40px;\r\n  max-width: 1000px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.menu-item {\r\n  background-color: white;\r\n  border-radius: 15px;\r\n  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);\r\n  overflow: hidden;\r\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\r\n}\r\n\r\n.menu-item:hover {\r\n  transform: translateY(-5px);\r\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);\r\n}\r\n\r\n.menu-item img {\r\n  width: 100%;\r\n  height: 200px;\r\n  object-fit: cover;\r\n}\r\n\r\n.menu-info {\r\n  padding: 20px;\r\n  text-align: left;\r\n}\r\n\r\n.menu-info h3 {\r\n  color: #3e2f1c;\r\n  font-size: 1.3rem;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.menu-info .description {\r\n  color: #555;\r\n  font-size: 0.95rem;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.menu-info .price {\r\n  color: #c9a44f;\r\n  font-weight: bold;\r\n  font-size: 1.1rem;\r\n}\r\n\r\n/* ===================== */\r\n/* RESERVATIONS */\r\n/* ===================== */\r\n.reservation {\r\n  background-color: #fff;\r\n  padding: 80px 20px;\r\n}\r\n\r\n.reservation h2 {\r\n  font-size: 2.5rem;\r\n  color: #3e2f1c;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.reservation-intro {\r\n  font-size: 1.1rem;\r\n  color: #555;\r\n  margin-bottom: 40px;\r\n}\r\n\r\n.reservation-form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 15px;\r\n  max-width: 400px;\r\n  margin: 0 auto;\r\n  text-align: left;\r\n}\r\n\r\n.reservation-form label {\r\n  font-weight: 500;\r\n  color: #3e2f1c;\r\n}\r\n\r\n.reservation-form input {\r\n  padding: 10px;\r\n  border: 1px solid #ccc;\r\n  border-radius: 6px;\r\n  font-size: 1rem;\r\n}\r\n\r\n.reservation-form button {\r\n  background-color: #c9a44f;\r\n  color: white;\r\n  border: none;\r\n  padding: 12px;\r\n  border-radius: 6px;\r\n  font-size: 1rem;\r\n  font-weight: 600;\r\n  cursor: pointer;\r\n  transition: background 0.3s;\r\n}\r\n\r\n.reservation-form button:hover {\r\n  background-color: #b38e3a;\r\n}\r\n\r\n/* ===================== */\r\n/* CONTACT */\r\n/* ===================== */\r\n.contact {\r\n  background-color: #f9f6f1;\r\n  padding: 80px 20px;\r\n}\r\n\r\n.contact h2 {\r\n  font-size: 2.5rem;\r\n  color: #3e2f1c;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.contact-intro {\r\n  font-size: 1.1rem;\r\n  color: #555;\r\n  margin-bottom: 40px;\r\n}\r\n\r\n.contact-content {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  gap: 40px;\r\n  justify-content: center;\r\n  align-items: flex-start;\r\n}\r\n\r\n.contact-info {\r\n  max-width: 400px;\r\n  text-align: left;\r\n}\r\n\r\n.contact-info p {\r\n  font-size: 1rem;\r\n  color: #444;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.contact-map {\r\n  flex: 1;\r\n  min-width: 300px;\r\n  max-width: 500px;\r\n  border-radius: 10px;\r\n  overflow: hidden;\r\n  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n/* ===================== */\r\n/* MEDIA QUERIES */\r\n/* ===================== */\r\n@media (max-width: 768px) {\r\n  .contact-content {\r\n    flex-direction: column;\r\n    align-items: center;\r\n  }\r\n\r\n  .contact-map iframe {\r\n    height: 250px;\r\n  }\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-project-webpack/./src/styles.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-project-webpack/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-project-webpack/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-project-webpack/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-project-webpack/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-project-webpack/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-project-webpack/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-project-webpack/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-project-webpack/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ }),

/***/ "./src/assets/dishes/chocolate-cake.jpg":
/*!**********************************************!*\
  !*** ./src/assets/dishes/chocolate-cake.jpg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"3654a5a3e4baeeb1c6ac.jpg\";\n\n//# sourceURL=webpack://restaurant-project-webpack/./src/assets/dishes/chocolate-cake.jpg?\n}");

/***/ }),

/***/ "./src/assets/dishes/lobster.jpg":
/*!***************************************!*\
  !*** ./src/assets/dishes/lobster.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"b6a562e1d5d6ff5b8588.jpg\";\n\n//# sourceURL=webpack://restaurant-project-webpack/./src/assets/dishes/lobster.jpg?\n}");

/***/ }),

/***/ "./src/assets/dishes/pasta.jpg":
/*!*************************************!*\
  !*** ./src/assets/dishes/pasta.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"3f031f51bea863027c20.jpg\";\n\n//# sourceURL=webpack://restaurant-project-webpack/./src/assets/dishes/pasta.jpg?\n}");

/***/ }),

/***/ "./src/assets/dishes/salmon.jpg":
/*!**************************************!*\
  !*** ./src/assets/dishes/salmon.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"bdd5622978bafd7a45f3.jpg\";\n\n//# sourceURL=webpack://restaurant-project-webpack/./src/assets/dishes/salmon.jpg?\n}");

/***/ }),

/***/ "./src/assets/dishes/steak.jpg":
/*!*************************************!*\
  !*** ./src/assets/dishes/steak.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"12353f7c79d448b28845.jpg\";\n\n//# sourceURL=webpack://restaurant-project-webpack/./src/assets/dishes/steak.jpg?\n}");

/***/ }),

/***/ "./src/assets/dishes/veggie-bowl.jpg":
/*!*******************************************!*\
  !*** ./src/assets/dishes/veggie-bowl.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"1883ecc9fcd357b8291a.jpg\";\n\n//# sourceURL=webpack://restaurant-project-webpack/./src/assets/dishes/veggie-bowl.jpg?\n}");

/***/ }),

/***/ "./src/assets/restaurant.png":
/*!***********************************!*\
  !*** ./src/assets/restaurant.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"6f3ca142195b585085be.png\";\n\n//# sourceURL=webpack://restaurant-project-webpack/./src/assets/restaurant.png?\n}");

/***/ }),

/***/ "./src/domUtils.js":
/*!*************************!*\
  !*** ./src/domUtils.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   clearContent: () => (/* binding */ clearContent),\n/* harmony export */   contentEl: () => (/* binding */ contentEl),\n/* harmony export */   createEl: () => (/* binding */ createEl)\n/* harmony export */ });\nconst contentEl = () => document.getElementById(\"content\");\r\n\r\nfunction clearContent() {\r\n    const el = contentEl();\r\n    el.innerHTML = \"\";\r\n}\r\n\r\nfunction createEl(tag = 'div', options = {}) {\r\n  const el = document.createElement(tag);\r\n\r\n  if (options.className){\r\n    if (Array.isArray(options.className)){\r\n      el.className = options.className.join(\" \");\r\n    } else {\r\n      el.className = options.className;\r\n    }\r\n  }\r\n  if (options.id) el.id = options.id;\r\n  if (options.text) el.textContent = options.text;\r\n  if (options.html) el.innerHTML = options.html;\r\n  if (options.attrs) {\r\n    Object.entries(options.attrs).forEach(([k, v]) => el.setAttribute(k, v));\r\n  }\r\n  return el;\r\n}\n\n//# sourceURL=webpack://restaurant-project-webpack/./src/domUtils.js?\n}");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _domUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domUtils */ \"./src/domUtils.js\");\n/* harmony import */ var _initialLoad__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./initialLoad */ \"./src/initialLoad.js\");\n/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/home */ \"./src/pages/home.js\");\n/* harmony import */ var _pages_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/menu */ \"./src/pages/menu.js\");\n/* harmony import */ var _pages_reservation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/reservation */ \"./src/pages/reservation.js\");\n/* harmony import */ var _pages_contact__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/contact */ \"./src/pages/contact.js\");\n/* harmony import */ var _pages_whoWeAre__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/whoWeAre */ \"./src/pages/whoWeAre.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// initial page build\r\ndocument.addEventListener(\"DOMContentLoaded\", () => {\r\n    (0,_initialLoad__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n\r\n    // set date min for reservation input if the module uses #date\r\n    setDateMin();\r\n\r\n    // wire up nav buttons\r\n    const nav = document.querySelector('.navigation')\r\n    nav.addEventListener('click', (e) => {\r\n        const btn = e.target.closest('.nav-button')\r\n        if (!btn) return\r\n        \r\n        const tab = btn.dataset.tab\r\n        switchTab(tab);\r\n    });\r\n});\r\n\r\nfunction switchTab(tabName) {\r\n    const content = (0,_domUtils__WEBPACK_IMPORTED_MODULE_1__.contentEl)()\r\n    ;(0,_domUtils__WEBPACK_IMPORTED_MODULE_1__.clearContent)();\r\n    \r\n    let page;\r\n    switch (tabName) {\r\n        case 'home':\r\n            page = (0,_pages_home__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\r\n            break;\r\n        case 'menu':\r\n            page = (0,_pages_menu__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\r\n            break;\r\n        case 'reservation':\r\n            page = (0,_pages_reservation__WEBPACK_IMPORTED_MODULE_5__[\"default\"])()\r\n            break;\r\n        case 'contact':\r\n            page = (0,_pages_contact__WEBPACK_IMPORTED_MODULE_6__[\"default\"])()\r\n            break;\r\n        case 'who-we-are':\r\n            page = (0,_pages_whoWeAre__WEBPACK_IMPORTED_MODULE_7__[\"default\"])()\r\n            break;\r\n        default:\r\n            page = (0,_pages_home__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\r\n    }\r\n\r\n    content.appendChild(page)\r\n    // Activate the active nav style\r\n    updateActiveNav(tabName)\r\n}\r\n\r\nfunction updateActiveNav(tabName) {\r\n    document.querySelectorAll('.nav-button').forEach((btn) => {\r\n        btn.classList.toggle('active', btn.dataset.tab === tabName)\r\n    });\r\n}\r\n\r\nfunction setDateMin() {\r\n  const dateInput = document.querySelector('#date');\r\n  if (!dateInput) return;\r\n  const todayStr = new Date().toISOString().split('T')[0];\r\n  dateInput.setAttribute('min', todayStr);\r\n  // optional max date 30 days ahead:\r\n  const max = new Date();\r\n  max.setDate(max.getDate() + 30);\r\n  dateInput.setAttribute('max', max.toISOString().split('T')[0]);\r\n}\n\n//# sourceURL=webpack://restaurant-project-webpack/./src/index.js?\n}");

/***/ }),

/***/ "./src/initialLoad.js":
/*!****************************!*\
  !*** ./src/initialLoad.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initialLoad)\n/* harmony export */ });\n/* harmony import */ var _pages_home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/home.js */ \"./src/pages/home.js\");\n/* harmony import */ var _domUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domUtils.js */ \"./src/domUtils.js\");\n\r\n\r\n\r\nfunction initialLoad() {\r\n    const content = (0,_domUtils_js__WEBPACK_IMPORTED_MODULE_1__.contentEl)();\r\n    const home = (0,_pages_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n    content.appendChild(home);\r\n}\n\n//# sourceURL=webpack://restaurant-project-webpack/./src/initialLoad.js?\n}");

/***/ }),

/***/ "./src/pages/contact.js":
/*!******************************!*\
  !*** ./src/pages/contact.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadContact)\n/* harmony export */ });\n/* harmony import */ var _domUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../domUtils */ \"./src/domUtils.js\");\n\r\n\r\nfunction loadContact() {\r\n  const container = (0,_domUtils__WEBPACK_IMPORTED_MODULE_0__.createEl)(\"section\", {\r\n    className: \"contact\",\r\n    id: \"contact\",\r\n    html: `<h2>Contact Us</h2>\r\n        <p class=\"contact-intro\">\r\n          We’d love to hear from you! Reach out for inquiries, feedback, or\r\n          reservations.\r\n        </p>\r\n\r\n        <div class=\"contact-content\">\r\n          <div class=\"contact-info\">\r\n            <p><strong>Address:</strong> 123 Valhalla Street, Asgard City</p>\r\n            <p><strong>Phone:</strong> +1 (555) 123-4567</p>\r\n            <p><strong>Email:</strong> contact@odinrestaurant.com</p>\r\n            <p><strong>Hours:</strong> Mon–Sat 11:00 AM – 10:00 PM</p>\r\n          </div>\r\n\r\n          <div class=\"contact-map\">\r\n            <iframe\r\n              src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3268.7830420971673!2d33.99848817521879!3d34.98709876779304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14dfc5138e882309%3A0x9858c41bc4cc7dcd!2sOdin%20Restaurant!5e0!3m2!1sen!2sie!4v1762358212802!5m2!1sen!2sie\"\r\n              width=\"600\"\r\n              height=\"450\"\r\n              style=\"border: 0\"\r\n              allowfullscreen=\"\"\r\n              loading=\"lazy\"\r\n              referrerpolicy=\"no-referrer-when-downgrade\"\r\n            ></iframe>\r\n          </div>\r\n        </div>`,\r\n  });\r\n\r\n  return container;\r\n}\r\n\n\n//# sourceURL=webpack://restaurant-project-webpack/./src/pages/contact.js?\n}");

/***/ }),

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadHome)\n/* harmony export */ });\n/* harmony import */ var _domUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../domUtils */ \"./src/domUtils.js\");\n/* harmony import */ var _assets_restaurant_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/restaurant.png */ \"./src/assets/restaurant.png\");\n\r\n\r\n\r\nfunction loadHome() {\r\n  const container = (0,_domUtils__WEBPACK_IMPORTED_MODULE_0__.createEl)(\"section\", { className: \"hero\", id: \"hero\" });\r\n  const image = (0,_domUtils__WEBPACK_IMPORTED_MODULE_0__.createEl)(\"img\", {\r\n    className: \"hero-image\",\r\n    attrs: { src: _assets_restaurant_png__WEBPACK_IMPORTED_MODULE_1__, alt: \"Restaurant Hero\" },\r\n  });\r\n  const heroText = (0,_domUtils__WEBPACK_IMPORTED_MODULE_0__.createEl)(\"div\", { className: \"hero-text\" });\r\n  heroText.innerHTML = `\r\n        <h1>Welcome to Odin Restaurant</h1>\r\n        <p>Where flavors meet craftsmanship. Enjoy a culinary journey like no other.</p>\r\n    `;\r\n\r\n  content.appendChild(container);\r\n  container.appendChild(image);\r\n  container.appendChild(heroText);\r\n\r\n  return container;\r\n}\r\n\n\n//# sourceURL=webpack://restaurant-project-webpack/./src/pages/home.js?\n}");

/***/ }),

/***/ "./src/pages/menu.js":
/*!***************************!*\
  !*** ./src/pages/menu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadMenu)\n/* harmony export */ });\n/* harmony import */ var _domUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../domUtils */ \"./src/domUtils.js\");\n/* harmony import */ var _assets_dishes_chocolate_cake_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/dishes/chocolate-cake.jpg */ \"./src/assets/dishes/chocolate-cake.jpg\");\n/* harmony import */ var _assets_dishes_lobster_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/dishes/lobster.jpg */ \"./src/assets/dishes/lobster.jpg\");\n/* harmony import */ var _assets_dishes_veggie_bowl_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/dishes/veggie-bowl.jpg */ \"./src/assets/dishes/veggie-bowl.jpg\");\n/* harmony import */ var _assets_dishes_pasta_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/dishes/pasta.jpg */ \"./src/assets/dishes/pasta.jpg\");\n/* harmony import */ var _assets_dishes_steak_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/dishes/steak.jpg */ \"./src/assets/dishes/steak.jpg\");\n/* harmony import */ var _assets_dishes_salmon_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/dishes/salmon.jpg */ \"./src/assets/dishes/salmon.jpg\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst menu = [\r\n  {\r\n    src: _assets_dishes_salmon_jpg__WEBPACK_IMPORTED_MODULE_6__,\r\n    title: \"Grilled Salmon\",\r\n    desc: \"Fresh Atlantic salmon, served with lemon-dill sauce and roasted vegetables.\",\r\n    price: \"$18\",\r\n  },\r\n  {\r\n    src: _assets_dishes_steak_jpg__WEBPACK_IMPORTED_MODULE_5__,\r\n    title: \"Ribeye Steak\",\r\n    desc: \"10oz perfectly grilled ribeye with garlic butter and seasonal sides.\",\r\n    price: \"$24\",\r\n  },\r\n  {\r\n    src: _assets_dishes_pasta_jpg__WEBPACK_IMPORTED_MODULE_4__,\r\n    title: \"Creamy Pasta\",\r\n    desc: \"Handmade fettuccine in a creamy wild mushroom sauce, topped with parmesan.\",\r\n    price: \"$15\",\r\n  },\r\n  {\r\n    src: _assets_dishes_lobster_jpg__WEBPACK_IMPORTED_MODULE_2__,\r\n    title: \"Lobster Thermidor\",\r\n    desc: \"Classic lobster baked with creamy mustard sauce, herbs, and parmesan cheese.\",\r\n    price: \"$32\",\r\n  },\r\n  {\r\n    src: _assets_dishes_veggie_bowl_jpg__WEBPACK_IMPORTED_MODULE_3__,\r\n    title: \"Nordic Veggie Bowl\",\r\n    desc: \"Roasted seasonal vegetables, quinoa, and fresh herbs, drizzled with lemon-tahini dressing.\",\r\n    price: \"$14\",\r\n  },\r\n  {\r\n    src: _assets_dishes_chocolate_cake_jpg__WEBPACK_IMPORTED_MODULE_1__,\r\n    title: \"Chocolate Lava Cake\",\r\n    desc: \"Warm, gooey chocolate cake with a molten center, served with vanilla ice cream.\",\r\n    price: \"$9\",\r\n  },\r\n];\r\n\r\nfunction createMenuItem(src, title, desc, price) {\r\n  const item = (0,_domUtils__WEBPACK_IMPORTED_MODULE_0__.createEl)(\"div\", {\r\n    className: \"menu-item\",\r\n    id: \"our-menu\",\r\n    html: `\r\n    <img src=\"${src}\" alt=\"${title}\">\r\n    <div class=\"menu-info\">\r\n        <h3>${title}</h3>\r\n        <p class=\"description\">${desc}</p>\r\n        <p class=\"price\">${price}</p>\r\n    </div>`,\r\n  });\r\n  return item;\r\n}\r\n\r\nfunction loadMenu() {\r\n  const container = (0,_domUtils__WEBPACK_IMPORTED_MODULE_0__.createEl)(\"section\", { className: \"menu\", id: \"our-menu\" });\r\n  const header = (0,_domUtils__WEBPACK_IMPORTED_MODULE_0__.createEl)(\"h2\", { text: \"Our Menu\" });\r\n  const intro = (0,_domUtils__WEBPACK_IMPORTED_MODULE_0__.createEl)(\"p\", {\r\n    className: \"menu-intro\",\r\n    text: \"Discover our chef’s selection of dishes — crafted with the finest ingredients and inspired by Nordic tradition.\",\r\n  });\r\n  const menuGrid = (0,_domUtils__WEBPACK_IMPORTED_MODULE_0__.createEl)(\"div\", { className: \"menu-grid\" });\r\n\r\n  menu.forEach(({ src, title, desc, price }) => {\r\n    const item = createMenuItem(src, title, desc, price);\r\n    menuGrid.appendChild(item);\r\n  });\r\n\r\n  container.appendChild(header);\r\n  container.appendChild(intro);\r\n  container.appendChild(menuGrid);\r\n\r\n  return container;\r\n}\r\n\n\n//# sourceURL=webpack://restaurant-project-webpack/./src/pages/menu.js?\n}");

/***/ }),

/***/ "./src/pages/reservation.js":
/*!**********************************!*\
  !*** ./src/pages/reservation.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadReservation)\n/* harmony export */ });\n/* harmony import */ var _domUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../domUtils.js */ \"./src/domUtils.js\");\n\r\n\r\nfunction loadReservation() {\r\n  const container = (0,_domUtils_js__WEBPACK_IMPORTED_MODULE_0__.createEl)(\"section\", {\r\n    id: \"reservation\",\r\n    className: \"reservation\",\r\n    html: `<h2>Book a Table</h2>\r\n        <p class=\"reservation-intro\">\r\n          Reserve your spot and enjoy an unforgettable dining experience.\r\n        </p>\r\n\r\n        <form class=\"reservation-form\">\r\n          <label for=\"name\">Full Name</label>\r\n          <input type=\"text\" id=\"name\" placeholder=\"Your Name\" required />\r\n\r\n          <label for=\"email\">Email</label>\r\n          <input\r\n            type=\"email\"\r\n            id=\"email\"\r\n            placeholder=\"you@example.com\"\r\n            required\r\n          />\r\n\r\n          <label for=\"date\">Date</label>\r\n          <input type=\"date\" id=\"date\" required />\r\n\r\n          <label for=\"time\">Time</label>\r\n          <input type=\"time\" id=\"time\" min=\"11:00\" max=\"22:00\" required />\r\n\r\n          <label for=\"guests\">Number of Guests</label>\r\n          <input\r\n            type=\"number\"\r\n            id=\"guests\"\r\n            min=\"1\"\r\n            max=\"10\"\r\n            value=\"2\"\r\n            required\r\n          />\r\n\r\n          <button type=\"submit\">Reserve Table</button>\r\n        </form>`,\r\n  });\r\n\r\n  return container;\r\n}\r\n\n\n//# sourceURL=webpack://restaurant-project-webpack/./src/pages/reservation.js?\n}");

/***/ }),

/***/ "./src/pages/whoWeAre.js":
/*!*******************************!*\
  !*** ./src/pages/whoWeAre.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadWhoWeAre)\n/* harmony export */ });\n/* harmony import */ var _domUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../domUtils */ \"./src/domUtils.js\");\n\r\n\r\nfunction loadWhoWeAre() {\r\n    const container = (0,_domUtils__WEBPACK_IMPORTED_MODULE_0__.createEl)(\"section\", {\r\n        className: \"who-we-are\",\r\n        id: \"who-we-are\",\r\n        html: `<h2>Who We Are</h2>\r\n        <p>\r\n          Welcome to Odin Restaurant, where timeless flavors meet modern dining.\r\n          Established in 1970, Odin has been a beloved cornerstone of the\r\n          community for over five decades, offering guests a warm and inviting\r\n          space to share unforgettable meals and moments.\r\n        </p>\r\n        <p>\r\n          Inspired by the Nordic spirit of craftsmanship and hospitality, our\r\n          philosophy is simple — use the finest locally sourced ingredients,\r\n          treat every dish as an art form, and serve it with heart. From our\r\n          signature slow-roasted meats to our fresh seafood and seasonal\r\n          produce, every plate reflects our passion for flavor and authenticity.\r\n        </p>\r\n        <p>\r\n          Over the years, Odin Restaurant has evolved while staying true to its\r\n          roots.\r\n        </p>\r\n        <p>\r\n          At Odin, food is more than a meal — it’s a story. And we’re proud to\r\n          keep telling that story, one guest at a time.\r\n        </p>\r\n      </section>`\r\n    });\r\n    return container;\r\n}\n\n//# sourceURL=webpack://restaurant-project-webpack/./src/pages/whoWeAre.js?\n}");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-project-webpack/./src/styles.css?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;