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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*,\\r\\n*::after,\\r\\n*::before {\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\nhtml {\\r\\n  font-size: 62.5%;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  font-size: 1.6rem;\\r\\n  font-family: \\\"Roboto\\\", sans-serif;\\r\\n  color: #333;\\r\\n  font-weight: 500;\\r\\n  background-color: #eee;\\r\\n  position: relative;\\r\\n}\\r\\n\\r\\nheader {\\r\\n  background-color: #111;\\r\\n  color: aliceblue;\\r\\n  position: sticky;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n}\\r\\n\\r\\nh1 {\\r\\n  font-size: 3.6rem;\\r\\n}\\r\\n\\r\\n.menu-heading {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  margin-bottom: 2rem;\\r\\n}\\r\\n\\r\\n.header-container {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  min-height: 8rem;\\r\\n}\\r\\n\\r\\n.logo {\\r\\n  border-radius: 50%;\\r\\n  border: 2px solid wheat;\\r\\n  padding: 1.5rem;\\r\\n  width: max-content;\\r\\n}\\r\\n\\r\\n.header-container > ul {\\r\\n  display: flex;\\r\\n  list-style: none;\\r\\n  gap: 3rem;\\r\\n}\\r\\n\\r\\n.header-container a {\\r\\n  text-decoration: none;\\r\\n  color: aliceblue;\\r\\n}\\r\\n\\r\\n.navigation-btn {\\r\\n  color: aliceblue;\\r\\n  border: none;\\r\\n  background-color: transparent;\\r\\n  font-size: 1.6rem;\\r\\n  font-family: inherit;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.item-count-wrapper {\\r\\n  font-size: 2rem;\\r\\n  font-weight: 600;\\r\\n}\\r\\n\\r\\n.row {\\r\\n  max-width: 80%;\\r\\n  margin: 0 auto;\\r\\n}\\r\\n\\r\\n.section-main {\\r\\n  padding: 3rem 0;\\r\\n  min-height: 60vh;\\r\\n}\\r\\n\\r\\n.cards {\\r\\n  display: grid;\\r\\n  grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));\\r\\n  gap: 3rem;\\r\\n}\\r\\n\\r\\n.item {\\r\\n  width: 100%;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  background-color: #fff;\\r\\n  border-radius: 0.4rem;\\r\\n  overflow: hidden;\\r\\n}\\r\\n\\r\\n.item-meta-data {\\r\\n  padding: 1rem;\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  gap: 1rem;\\r\\n}\\r\\n\\r\\n.name {\\r\\n  flex: 1;\\r\\n  font-size: 1.8rem;\\r\\n}\\r\\n\\r\\n.item-icon-container {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  gap: 0.4rem;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.item-icon {\\r\\n  font-size: 2rem;\\r\\n}\\r\\n\\r\\n.likes {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  gap: 0.4rem;\\r\\n  font-size: 1.4rem;\\r\\n  font-weight: 600;\\r\\n}\\r\\n\\r\\n.card-btn {\\r\\n  font-size: 2rem;\\r\\n  padding: 1rem 1.5rem;\\r\\n  font-family: inherit;\\r\\n  cursor: pointer;\\r\\n  border: none;\\r\\n  background-color: black;\\r\\n  color: #fff;\\r\\n  margin-top: auto;\\r\\n}\\r\\n\\r\\n/* POPUP */\\r\\n.popup-wrapper {\\r\\n  background-color: rgba(0, 0, 0, 0.6);\\r\\n  position: fixed;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  right: 0;\\r\\n  bottom: 0;\\r\\n  height: 100vh;\\r\\n}\\r\\n\\r\\n.popup {\\r\\n  width: 40%;\\r\\n  margin: 4rem auto 2rem auto;\\r\\n  background-color: #fff;\\r\\n  height: 85%;\\r\\n  overflow-y: scroll;\\r\\n}\\r\\n\\r\\n.popup-image-container {\\r\\n  height: 20rem;\\r\\n  position: relative;\\r\\n  background-size: cover;\\r\\n  background-repeat: no-repeat;\\r\\n  background-position: center;\\r\\n}\\r\\n\\r\\n.popup-image {\\r\\n  display: block;\\r\\n  height: 100%;\\r\\n  margin: 0 auto;\\r\\n}\\r\\n\\r\\n.content-container {\\r\\n  padding: 2rem;\\r\\n}\\r\\n\\r\\n.popup-summary,\\r\\n.comments-container,\\r\\n.add-comments-container {\\r\\n  margin-bottom: 1rem;\\r\\n}\\r\\n\\r\\n.content-container h2 {\\r\\n  margin-bottom: 0.4rem;\\r\\n}\\r\\n\\r\\n.content-container h3 {\\r\\n  margin-bottom: 0.4rem;\\r\\n}\\r\\n\\r\\n.popup-summary {\\r\\n  display: grid;\\r\\n  grid-template-columns: repeat(2, 1fr);\\r\\n  gap: 1.5rem;\\r\\n}\\r\\n\\r\\n.comments-form input {\\r\\n  width: 80%;\\r\\n}\\r\\n\\r\\n.comments-form textarea {\\r\\n  width: 80%;\\r\\n}\\r\\n\\r\\n.comments-form input,\\r\\n.comments-form textarea {\\r\\n  padding: 0.6rem;\\r\\n  width: 80%;\\r\\n  margin-bottom: 0.5rem;\\r\\n  border: 1px solid #9d9d9d;\\r\\n  border-radius: 0.4rem;\\r\\n  font-size: 1.6rem;\\r\\n  font-family: inherit;\\r\\n}\\r\\n\\r\\n.comments-form textarea::placeholder {\\r\\n  padding: 0.6rem;\\r\\n  width: 80%;\\r\\n  margin-bottom: 0.5rem;\\r\\n  border: 1px solid #9d9d9d;\\r\\n  border-radius: 0.4rem;\\r\\n}\\r\\n\\r\\n.close-popup-btn {\\r\\n  font-size: 1.8rem;\\r\\n  color: #fff;\\r\\n  padding: 0.5rem;\\r\\n  border-radius: 0.2rem;\\r\\n  background-color: #000;\\r\\n  position: absolute;\\r\\n  right: 1rem;\\r\\n  top: 0.5rem;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.form-btn {\\r\\n  padding: 1rem 1.5rem;\\r\\n  cursor: pointer;\\r\\n  border-radius: 0.4rem;\\r\\n  border: none;\\r\\n  font-family: inherit;\\r\\n  font-size: 1.6rem;\\r\\n}\\r\\n\\r\\n.submit-comment-btn {\\r\\n  background-color: #000;\\r\\n  color: #fff;\\r\\n  margin-right: 2rem;\\r\\n}\\r\\n\\r\\n.form-close-popup-btn {\\r\\n  color: #000;\\r\\n  background-color: #9d9d9d;\\r\\n}\\r\\n\\r\\n.footer {\\r\\n  height: 8rem;\\r\\n  border-top: 1px solid #bababa;\\r\\n}\\r\\n\\r\\n.footer-container {\\r\\n  height: 100%;\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n/* Contact page */\\r\\n.section-contact {\\r\\n  margin: 4rem 0;\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.contact-page {\\r\\n  min-height: 30rem;\\r\\n  border-radius: 2rem;\\r\\n  background-color: #fff;\\r\\n  padding: 4rem;\\r\\n}\\r\\n\\r\\n.contact-page .description {\\r\\n  font-size: 1.8rem;\\r\\n  margin-bottom: 1rem;\\r\\n}\\r\\n\\r\\n.developers-container {\\r\\n  display: flex;\\r\\n  gap: 2rem;\\r\\n}\\r\\n\\r\\n.developer {\\r\\n  flex: 1;\\r\\n}\\r\\n\\r\\n.developer ul {\\r\\n  list-style: none;\\r\\n}\\r\\n\\r\\n.developer h3 {\\r\\n  font-size: 1.8rem;\\r\\n  margin-bottom: 0.8rem;\\r\\n  font-weight: 700;\\r\\n}\\r\\n\\r\\n.developer li {\\r\\n  font-size: 1.6rem;\\r\\n  margin-bottom: 0.5rem;\\r\\n  font-weight: 500;\\r\\n}\\r\\n\\r\\n@media (max-width: 1000px) {\\r\\n  .popup {\\r\\n    width: 60%;\\r\\n  }\\r\\n}\\r\\n\\r\\n@media (max-width: 800px) {\\r\\n  .developers-container {\\r\\n    flex-direction: column;\\r\\n    gap: 4rem;\\r\\n  }\\r\\n\\r\\n  h1 {\\r\\n    font-size: 2.4rem;\\r\\n  }\\r\\n\\r\\n  .menu-heading {\\r\\n    flex-direction: column;\\r\\n    gap: 1.6rem;\\r\\n  }\\r\\n\\r\\n  .item-count-wrapper {\\r\\n    margin-bottom: 2rem;\\r\\n    align-self: flex-start;\\r\\n  }\\r\\n}\\r\\n\\r\\n@media (max-width: 600px) {\\r\\n  .popup {\\r\\n    width: 70%;\\r\\n  }\\r\\n}\\r\\n\\r\\n@media (max-width: 500px) {\\r\\n  .cards {\\r\\n    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));\\r\\n  }\\r\\n\\r\\n  .row {\\r\\n    max-width: 90%;\\r\\n  }\\r\\n\\r\\n  .popup {\\r\\n    width: 80%;\\r\\n  }\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-config/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://webpack-config/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack-config/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-config/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-config/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-config/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-config/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-config/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-config/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-config/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/globals.js":
/*!************************!*\
  !*** ./src/globals.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"INVOLVEMENT_API_ID\": () => (/* binding */ INVOLVEMENT_API_ID),\n/* harmony export */   \"INVOLVEMENT_API_URL\": () => (/* binding */ INVOLVEMENT_API_URL),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst MEALS_API_URL = \"https://www.themealdb.com/api/json/v1/1\";\r\nconst INVOLVEMENT_API_ID = \"fWMsT4qnDFBZV4yWpTzA\";\r\nconst INVOLVEMENT_API_URL = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${INVOLVEMENT_API_ID}`;\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MEALS_API_URL);\r\n\n\n//# sourceURL=webpack://webpack-config/./src/globals.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_getMeals_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/getMeals.js */ \"./src/modules/getMeals.js\");\n/* harmony import */ var _modules_displayMeals_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/displayMeals.js */ \"./src/modules/displayMeals.js\");\n/* harmony import */ var _modules_generatePopupMarkup_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/generatePopupMarkup.js */ \"./src/modules/generatePopupMarkup.js\");\n/* harmony import */ var _modules_commentsHandler_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/commentsHandler.js */ \"./src/modules/commentsHandler.js\");\n/* harmony import */ var _modules_likesHandler_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/likesHandler.js */ \"./src/modules/likesHandler.js\");\n/* harmony import */ var _modules_navigationHandler_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/navigationHandler.js */ \"./src/modules/navigationHandler.js\");\n/* harmony import */ var _modules_commentsCounter_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/commentsCounter.js */ \"./src/modules/commentsCounter.js\");\n/* harmony import */ var _modules_itemCounter_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/itemCounter.js */ \"./src/modules/itemCounter.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst popupHook = document.querySelector(\".popup-hook\");\r\nconst itemContainer = document.querySelector(\".cards\");\r\n\r\n(async () => {\r\n  const meals = await (0,_modules_getMeals_js__WEBPACK_IMPORTED_MODULE_1__.getAllMeal)();\r\n  const likes = await (0,_modules_likesHandler_js__WEBPACK_IMPORTED_MODULE_5__.getLikes)();\r\n  await (0,_modules_displayMeals_js__WEBPACK_IMPORTED_MODULE_2__.displayInHtml)({ meals, likes });\r\n  (0,_modules_itemCounter_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\r\n})();\r\n\r\n// Displaying popup\r\nitemContainer.addEventListener(\"click\", async (e) => {\r\n  const clickedBtn = e.target.closest(\".card-btn\");\r\n\r\n  if (!clickedBtn) return;\r\n  const idMeal = JSON.parse(e.target.dataset.idMeal);\r\n\r\n  // Fetching comments\r\n  const commentsData = await (0,_modules_commentsHandler_js__WEBPACK_IMPORTED_MODULE_4__.getComments)(idMeal);\r\n\r\n  const { meals } = await (0,_modules_getMeals_js__WEBPACK_IMPORTED_MODULE_1__.getSingeMeal)(idMeal);\r\n\r\n  const detailedCardData = meals[0];\r\n\r\n  const markup = (0,_modules_generatePopupMarkup_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({ detailedCardData, commentsData });\r\n  popupHook.innerHTML = markup;\r\n\r\n  // Calculate and insert comments count\r\n  (0,_modules_commentsCounter_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\r\n\r\n  // Handle comment submit\r\n  const form = document.querySelector(\".comments-form\");\r\n\r\n  form.addEventListener(\"submit\", (e) => {\r\n    e.preventDefault();\r\n\r\n    const itemId = e.target.querySelector(\".submit-comment-btn\");\r\n\r\n    if (!itemId) return;\r\n\r\n    const item_id = itemId?.dataset?.idMeal;\r\n    const username = e.target.name.value;\r\n    const comment = e.target.comment.value;\r\n\r\n    if (!username || !comment) return;\r\n\r\n    (0,_modules_commentsHandler_js__WEBPACK_IMPORTED_MODULE_4__.postComment)({ item_id, username, comment });\r\n\r\n    // Insert comments to the ui\r\n    const commentsContainer = e.target\r\n      .closest(\".popup\")\r\n      .querySelector(\".comments\");\r\n\r\n    (0,_modules_commentsHandler_js__WEBPACK_IMPORTED_MODULE_4__.insertCommentMarkup)(commentsContainer, { username, comment });\r\n\r\n    // Clear inputs\r\n    e.target.name.value = \"\";\r\n    e.target.comment.value = \"\";\r\n  });\r\n});\r\n\r\n// Close popup\r\npopupHook.addEventListener(\"click\", (e) => {\r\n  const closeBtn = e.target.closest(\".close-popup-btn\");\r\n  if (!closeBtn) return;\r\n  popupHook.innerHTML = \"\";\r\n});\r\n\r\npopupHook.addEventListener(\"click\", (e) => {\r\n  const closeBtn = e.target.closest(\".form-close-popup-btn\");\r\n  if (!closeBtn) return;\r\n  popupHook.innerHTML = \"\";\r\n});\r\n\r\n// handle likes\r\n_modules_displayMeals_js__WEBPACK_IMPORTED_MODULE_2__.cardContainer.addEventListener(\"click\", (e) => {\r\n  const closeLikeIcon = e.target.closest(\".item-icon\");\r\n  if (!closeLikeIcon) return;\r\n  closeLikeIcon.style.color = \"red\";\r\n  const { id } = closeLikeIcon.dataset;\r\n  (0,_modules_likesHandler_js__WEBPACK_IMPORTED_MODULE_5__.postLikes)({ item_id: id });\r\n});\r\n\r\n// Update number of likes\r\n_modules_displayMeals_js__WEBPACK_IMPORTED_MODULE_2__.cardContainer.addEventListener(\"click\", (e) => {\r\n  const closeLikes = e.target\r\n    .closest(\".item-icon-container\")\r\n    ?.querySelector(\".likes-count\");\r\n  if (!closeLikes) return;\r\n  const currentLikes = +closeLikes?.textContent + 1;\r\n  closeLikes.textContent = currentLikes?.toString();\r\n});\r\n\r\n// Handle page navigation\r\n(0,_modules_navigationHandler_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\r\n\n\n//# sourceURL=webpack://webpack-config/./src/index.js?");

/***/ }),

/***/ "./src/modules/commentsCounter.js":
/*!****************************************!*\
  !*** ./src/modules/commentsCounter.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst commentsCounter = () => {\r\n  const commentsNode = document.querySelector(\".comments\");\r\n  const commentsCountWrapper = document.querySelector(\".comments-count\");\r\n\r\n  let commentsCount = 0;\r\n  [...commentsNode.childNodes].forEach((node) => {\r\n    if (node.ELEMENT_NODE && node?.classList?.contains(\"comment\")) {\r\n      commentsCount += 1;\r\n    }\r\n  });\r\n\r\n  commentsCountWrapper.textContent = commentsCount;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentsCounter);\r\n\n\n//# sourceURL=webpack://webpack-config/./src/modules/commentsCounter.js?");

/***/ }),

/***/ "./src/modules/commentsHandler.js":
/*!****************************************!*\
  !*** ./src/modules/commentsHandler.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getComments\": () => (/* binding */ getComments),\n/* harmony export */   \"insertCommentMarkup\": () => (/* binding */ insertCommentMarkup),\n/* harmony export */   \"postComment\": () => (/* binding */ postComment)\n/* harmony export */ });\n/* harmony import */ var _globals_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globals.js */ \"./src/globals.js\");\n\r\n\r\nconst postComment = async (formData) => {\r\n  try {\r\n    const res = await fetch(`${_globals_js__WEBPACK_IMPORTED_MODULE_0__.INVOLVEMENT_API_URL}/comments`, {\r\n      method: \"post\",\r\n      headers: {\r\n        \"Content-Type\": \"application/json\",\r\n      },\r\n      body: JSON.stringify(formData),\r\n    });\r\n\r\n    await res.json();\r\n  } catch (err) {\r\n    return err;\r\n  }\r\n};\r\n\r\nconst getComments = async (itemId) => {\r\n  try {\r\n    const res = await fetch(\r\n      `${_globals_js__WEBPACK_IMPORTED_MODULE_0__.INVOLVEMENT_API_URL}/comments?item_id=${itemId}`\r\n    );\r\n    const data = await res.json();\r\n\r\n    return data;\r\n  } catch (err) {\r\n    return err;\r\n  }\r\n};\r\n\r\nconst insertCommentMarkup = (commentsContainer, commentData) => {\r\n  const { username, comment } = commentData;\r\n\r\n  // generate date\r\n  const date = new Date();\r\n  const year = date.getFullYear();\r\n  const month = `${date.getMonth() + 1}`.padStart(2, \"0\");\r\n  const day = `${date.getDate()}`.padStart(2, \"0\");\r\n\r\n  const markup = `<p>${`${year}-${month}-${day}`}, ${username} : ${comment}</p>`;\r\n\r\n  const commentsCountWrapper = commentsContainer\r\n    .closest(\".popup\")\r\n    .querySelector(\".comments-count\");\r\n\r\n  if (commentsContainer.querySelector(\".no-comments-yet\")) {\r\n    commentsCountWrapper.textContent = 1;\r\n    commentsContainer.innerHTML = markup;\r\n  } else {\r\n    const initialCommentsCount = commentsCountWrapper.textContent;\r\n    commentsCountWrapper.textContent = +initialCommentsCount + 1;\r\n    commentsContainer.insertAdjacentHTML(\"beforeend\", markup);\r\n  }\r\n};\r\n\n\n//# sourceURL=webpack://webpack-config/./src/modules/commentsHandler.js?");

/***/ }),

/***/ "./src/modules/displayMeals.js":
/*!*************************************!*\
  !*** ./src/modules/displayMeals.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cardContainer\": () => (/* binding */ cardContainer),\n/* harmony export */   \"displayInHtml\": () => (/* binding */ displayInHtml)\n/* harmony export */ });\nconst cardContainer = document.querySelector(\".cards\");\r\n\r\nconst displayInHtml = async (data) => {\r\n  const { meals, likes } = data;\r\n  meals.forEach((meal) => {\r\n    let numberOfLikes = 0;\r\n    const result = likes.find((like) => like.item_id === meal.idMeal);\r\n    if (result) numberOfLikes = result.likes;\r\n\r\n    const div = document.createElement(\"div\");\r\n    div.classList.add(\"item\");\r\n    div.innerHTML = `\r\n    <img src=\"${meal.strMealThumb}\" alt=\"Meal-picture\"/>\r\n      <div class=\"item-meta-data\">\r\n          <h2 class=\"name\">${meal.strMeal}</h2>                     \r\n        <span class=\"item-icon-container\">\r\n          <i data-id='${meal.idMeal}' class=\"item-icon fa-solid fa-heart\"></i>\r\n          <span  class=\"likes\"><span class=\"likes-count\">${numberOfLikes}</span> Likes</span>\r\n          </span>\r\n      </div>\r\n        \r\n      <button data-id-meal='${meal.idMeal}' class=\"card-btn\">Comments</button>\r\n                    \r\n    `;\r\n    cardContainer.appendChild(div);\r\n  });\r\n};\r\n\n\n//# sourceURL=webpack://webpack-config/./src/modules/displayMeals.js?");

/***/ }),

/***/ "./src/modules/generatePopupMarkup.js":
/*!********************************************!*\
  !*** ./src/modules/generatePopupMarkup.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst generatePopupMarkup = (data) => {\r\n  const { detailedCardData, commentsData } = data;\r\n\r\n  const commentsMarkup = (commentsData) => {\r\n    if (commentsData?.error) {\r\n      return `<p class=\"no-comments-yet\">No comments yet.</p>`;\r\n    }\r\n\r\n    return commentsData\r\n      .map((comment) => {\r\n        return `<p class=\"comment\">${comment.creation_date}, ${comment.username} : ${comment.comment}</p>`;\r\n      })\r\n      .join(\"\");\r\n  };\r\n\r\n  const resolvedCommentsMarkup = commentsMarkup(commentsData);\r\n\r\n  return `\r\n    <div class=\"popup-wrapper\">\r\n                <div class=\"popup\">\r\n                    <div class=\"popup-image-container\" style='background-image: url(${detailedCardData.strMealThumb});'>\r\n                        <span class=\"close-popup-btn\">x</span>\r\n                    </div>\r\n                    <div class=\"content-container\">\r\n                        <h2 class=\"popup-title\">${detailedCardData.strMeal}</h2>\r\n                        <div class=\"popup-summary\">\r\n                           <p><a target=\"__blank\" href=\"${detailedCardData.strYoutube}\">Watch on Youtube</a></p>\r\n                           <p>Category: ${detailedCardData.strCategory}</p>\r\n                           <p>Area: ${detailedCardData.strArea}</p>\r\n                           <p>Meal Id: ${detailedCardData.idMeal}</p>\r\n                        </div>\r\n                        <div class=\"comments-container\">\r\n                            <h3>Comments(<span class=\"comments-count\">-</span>)</h3>\r\n                            <div class=\"comments\">\r\n                               ${resolvedCommentsMarkup}  \r\n                            </div>\r\n                        </div>\r\n                        <div class=\"add-comment-container\">\r\n                            <h3>Add a comment</h3>\r\n                            <form class=\"comments-form\">\r\n                                <input type=\"text\" name=\"name\" placeholder=\"Your name\" aria-label=\"Name input\">\r\n                                <textarea name=\"comment\" id=\"comment\" rows=\"4\"></textarea>\r\n                                <button type=\"submit\" class=\"form-btn submit-comment-btn\" data-id-meal='${detailedCardData.idMeal}'>Submit comment</button>\r\n                                <button type=\"button\" class=\"form-btn form-close-popup-btn\">Close</button>\r\n                            </form>\r\n                        </div>\r\n                    </div>\r\n    \r\n                </div>\r\n            </div>\r\n    `;\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generatePopupMarkup);\r\n\n\n//# sourceURL=webpack://webpack-config/./src/modules/generatePopupMarkup.js?");

/***/ }),

/***/ "./src/modules/getMeals.js":
/*!*********************************!*\
  !*** ./src/modules/getMeals.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getAllMeal\": () => (/* binding */ getAllMeal),\n/* harmony export */   \"getSingeMeal\": () => (/* binding */ getSingeMeal)\n/* harmony export */ });\n/* harmony import */ var _globals_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globals.js */ \"./src/globals.js\");\n\r\n\r\nconst url = `${_globals_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]}/filter.php?c=Chicken`;\r\n\r\nconst getAllMeal = async () => {\r\n  const response = await fetch(url);\r\n  const data = await response.json();\r\n\r\n  return data.meals;\r\n};\r\n\r\nconst getSingeMeal = async (id) => {\r\n  try {\r\n    const res = await fetch(`${_globals_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]}/lookup.php?i=${id}`);\r\n    const data = await res.json();\r\n    return data;\r\n  } catch (err) {\r\n    return err;\r\n  }\r\n};\r\n\n\n//# sourceURL=webpack://webpack-config/./src/modules/getMeals.js?");

/***/ }),

/***/ "./src/modules/itemCounter.js":
/*!************************************!*\
  !*** ./src/modules/itemCounter.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst itemCounter = () => {\r\n    const itemCount = document.querySelector(\".item-count\");\r\n    const items = document.querySelector('.cards').querySelectorAll('.item');\r\n    itemCount.textContent = items.length;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (itemCounter);\n\n//# sourceURL=webpack://webpack-config/./src/modules/itemCounter.js?");

/***/ }),

/***/ "./src/modules/likesHandler.js":
/*!*************************************!*\
  !*** ./src/modules/likesHandler.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getLikes\": () => (/* binding */ getLikes),\n/* harmony export */   \"postLikes\": () => (/* binding */ postLikes)\n/* harmony export */ });\n/* harmony import */ var _globals_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globals.js */ \"./src/globals.js\");\n\r\n\r\nconst postLikes = async (data) => {\r\n  await fetch(`${_globals_js__WEBPACK_IMPORTED_MODULE_0__.INVOLVEMENT_API_URL}/likes`, {\r\n    method: \"post\",\r\n    headers: {\r\n      \"Content-Type\": \"application/json\",\r\n    },\r\n    body: JSON.stringify(data),\r\n  });\r\n};\r\n\r\nconst getLikes = async () => {\r\n  try {\r\n    const response = await fetch(`${_globals_js__WEBPACK_IMPORTED_MODULE_0__.INVOLVEMENT_API_URL}/likes`);\r\n    const data = await response.json();\r\n\r\n    if (!data) return [];\r\n    return data;\r\n  } catch (err) {\r\n    return [];\r\n  }\r\n};\r\n\n\n//# sourceURL=webpack://webpack-config/./src/modules/likesHandler.js?");

/***/ }),

/***/ "./src/modules/navigationHandler.js":
/*!******************************************!*\
  !*** ./src/modules/navigationHandler.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst homeBtn = document.getElementById(\"home\");\r\nconst contactBtn = document.getElementById(\"contact\");\r\nconst sections = document.querySelectorAll(\".section\");\r\nconst sectionMain = document.querySelector(\".section-main\");\r\nconst sectionContact = document.querySelector(\".section-contact\");\r\n\r\nconst hideAllSections = () => {\r\n  sections.forEach((sec) => {\r\n    sec.style.display = \"none\";\r\n  });\r\n};\r\n\r\nconst navigationHandler = () => {\r\n  homeBtn.addEventListener(\"click\", () => {\r\n    hideAllSections();\r\n    sectionMain.style.display = \"block\";\r\n  });\r\n\r\n  contactBtn.addEventListener(\"click\", () => {\r\n    hideAllSections();\r\n    sectionContact.style.display = \"block\";\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (navigationHandler);\r\n\n\n//# sourceURL=webpack://webpack-config/./src/modules/navigationHandler.js?");

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