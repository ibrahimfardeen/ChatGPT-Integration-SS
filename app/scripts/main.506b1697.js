(this["webpackChunkreact_webpack_dev"] = this["webpackChunkreact_webpack_dev"] || []).push([["main"],{

/***/ 48187:
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 67294);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.css */ 95722);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/main */ 13182);
/* harmony import */ var _sparrowengg_twigs_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sparrowengg/twigs-react */ 8714);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var App = function App() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    loaded = _useState2[0],
    setLoaded = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
      style: {
        "textAlign": "center",
        "marginTop": "100px"
      }
    }, "App is loading...")),
    _useState4 = _slicedToArray(_useState3, 2),
    child = _useState4[0],
    setChild = _useState4[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setLoaded(true);
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!loaded) return;
    var client = window.app.initialized();
    setChild( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_main__WEBPACK_IMPORTED_MODULE_2__["default"], {
      client: client
    }));
  }, [loaded]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_sparrowengg_twigs_react__WEBPACK_IMPORTED_MODULE_3__.ThemeProvider, {
    theme: {
      colors: {
        primary: '#19b885',
        primary100: '#d1f1e7',
        primary200: '#baeada',
        primary300: '#a3e3ce',
        primary400: '#19b885',
        primary500: '#17a678',
        primary600: '#14936a',
        primary700: '#12815d',
        primary800: '#0f6e50',
        primary900: '#0d5c43'
      }
    }
  }, child);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ 13182:
/*!********************************!*\
  !*** ./src/components/main.js ***!
  \********************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: D:\\py\\chatgpt2\\src\\components\\main.js: Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>? (102:4)\n\n\u001b[0m \u001b[90m 100 |\u001b[39m       \u001b[0m\n\u001b[0m \u001b[90m 101 |\u001b[39m     \u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mFlex\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 102 |\u001b[39m     \u001b[33m<\u001b[39m\u001b[33mfooter\u001b[39m \u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m     |\u001b[39m     \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 103 |\u001b[39m     \u001b[33mCreated\u001b[39m \u001b[33mBy\u001b[39m \u001b[33mMohammed\u001b[39m \u001b[33mIbrahim\u001b[39m \u001b[33mFardeen\u001b[39m \u001b[0m\n\u001b[0m \u001b[90m 104 |\u001b[39m     \u001b[33m<\u001b[39m\u001b[33ma\u001b[39m href\u001b[33m=\u001b[39m\u001b[32m\"https://www.linkedin.com/in/ibrahim-fardeen-754770254/\"\u001b[39m target\u001b[33m=\u001b[39m\u001b[32m\"_blank\"\u001b[39m \u001b[36mclass\u001b[39m\u001b[33m=\u001b[39m\u001b[32m\"social-button social-button--linkedin\"\u001b[39m aria\u001b[33m-\u001b[39mlabel\u001b[33m=\u001b[39m\u001b[32m\"LinkedIn\"\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 105 |\u001b[39m             \u001b[33m<\u001b[39m\u001b[33mi\u001b[39m \u001b[36mclass\u001b[39m\u001b[33m=\u001b[39m\u001b[32m\"fab fa-linkedin-in\"\u001b[39m\u001b[33m>\u001b[39m\u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mi\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n    at constructor (D:\\py\\chatgpt2\\node_modules\\@babel\\parser\\lib\\index.js:356:19)\n    at JSXParserMixin.raise (D:\\py\\chatgpt2\\node_modules\\@babel\\parser\\lib\\index.js:3223:19)\n    at JSXParserMixin.jsxParseElementAt (D:\\py\\chatgpt2\\node_modules\\@babel\\parser\\lib\\index.js:6906:18)\n    at JSXParserMixin.jsxParseElement (D:\\py\\chatgpt2\\node_modules\\@babel\\parser\\lib\\index.js:6915:17)\n    at JSXParserMixin.parseExprAtom (D:\\py\\chatgpt2\\node_modules\\@babel\\parser\\lib\\index.js:6927:19)\n    at JSXParserMixin.parseExprSubscripts (D:\\py\\chatgpt2\\node_modules\\@babel\\parser\\lib\\index.js:10857:23)\n    at JSXParserMixin.parseUpdate (D:\\py\\chatgpt2\\node_modules\\@babel\\parser\\lib\\index.js:10840:21)\n    at JSXParserMixin.parseMaybeUnary (D:\\py\\chatgpt2\\node_modules\\@babel\\parser\\lib\\index.js:10816:23)\n    at JSXParserMixin.parseMaybeUnaryOrPrivate (D:\\py\\chatgpt2\\node_modules\\@babel\\parser\\lib\\index.js:10654:61)\n    at JSXParserMixin.parseExprOps (D:\\py\\chatgpt2\\node_modules\\@babel\\parser\\lib\\index.js:10659:23)\n    at JSXParserMixin.parseMaybeConditional (D:\\py\\chatgpt2\\node_modules\\@babel\\parser\\lib\\index.js:10636:23)\n    at JSXParserMixin.parseMaybeAssign (D:\\py\\chatgpt2\\node_modules\\@babel\\parser\\lib\\index.js:10597:21)\n    at D:\\py\\chatgpt2\\node_modules\\@babel\\parser\\lib\\index.js:10567:39\n    at JSXParserMixin.allowInAnd (D:\\py\\chatgpt2\\node_modules\\@babel\\parser\\lib\\index.js:12284:12)\n    at JSXParserMixin.parseMaybeAssignAllowIn (D:\\py\\chatgpt2\\node_modules\\@babel\\parser\\lib\\index.js:10567:17)\n    at JSXParserMixin.parseParenAndDistinguishExpression (D:\\py\\chatgpt2\\node_modules\\@babel\\parser\\lib\\index.js:11499:28)\n    at JSXParserMixin.parseExprAtom (D:\\py\\chatgpt2\\node_modules\\@babel\\parser\\lib\\index.js:11137:23)\n    at JSXParserMixin.parseExprAtom (D:\\py\\chatgpt2\\node_modules\\@babel\\parser\\lib\\index.js:6932:20)\n    at JSXParserMixin.parseExprSubscripts (D:\\py\\chatgpt2\\node_modules\\@babel\\parser\\lib\\index.js:10857:23)\n    at JSXParserMixin.parseUpdate (D:\\py\\chatgpt2\\node_modules\\@babel\\parser\\lib\\index.js:10840:21)\n    at JSXParserMixin.parseMaybeUnary (D:\\py\\chatgpt2\\node_modules\\@babel\\parser\\lib\\index.js:10816:23)\n    at JSXParserMixin.parseMaybeUnaryOrPrivate (D:\\py\\chatgpt2\\node_modules\\@babel\\parser\\lib\\index.js:10654:61)\n    at JSXParserMixin.parseExprOps (D:\\py\\chatgpt2\\node_modules\\@babel\\parser\\lib\\index.js:10659:23)\n    at JSXParserMixin.parseMaybeConditional (D:\\py\\chatgpt2\\node_modules\\@babel\\parser\\lib\\index.js:10636:23)\n    at JSXParserMixin.parseMaybeAssign (D:\\py\\chatgpt2\\node_modules\\@babel\\parser\\lib\\index.js:10597:21)\n    at JSXParserMixin.parseExpressionBase (D:\\py\\chatgpt2\\node_modules\\@babel\\parser\\lib\\index.js:10551:23)\n    at D:\\py\\chatgpt2\\node_modules\\@babel\\parser\\lib\\index.js:10547:39\n    at JSXParserMixin.allowInAnd (D:\\py\\chatgpt2\\node_modules\\@babel\\parser\\lib\\index.js:12279:16)\n    at JSXParserMixin.parseExpression (D:\\py\\chatgpt2\\node_modules\\@babel\\parser\\lib\\index.js:10547:17)\n    at JSXParserMixin.parseReturnStatement (D:\\py\\chatgpt2\\node_modules\\@babel\\parser\\lib\\index.js:13003:28)\n    at JSXParserMixin.parseStatementContent (D:\\py\\chatgpt2\\node_modules\\@babel\\parser\\lib\\index.js:12621:21)\n    at JSXParserMixin.parseStatementLike (D:\\py\\chatgpt2\\node_modules\\@babel\\parser\\lib\\index.js:12588:17)\n    at JSXParserMixin.parseStatementListItem (D:\\py\\chatgpt2\\node_modules\\@babel\\parser\\lib\\index.js:12568:17)\n    at JSXParserMixin.parseBlockOrModuleBlockBody (D:\\py\\chatgpt2\\node_modules\\@babel\\parser\\lib\\index.js:13189:61)\n    at JSXParserMixin.parseBlockBody (D:\\py\\chatgpt2\\node_modules\\@babel\\parser\\lib\\index.js:13182:10)\n    at JSXParserMixin.parseBlock (D:\\py\\chatgpt2\\node_modules\\@babel\\parser\\lib\\index.js:13170:10)\n    at JSXParserMixin.parseFunctionBody (D:\\py\\chatgpt2\\node_modules\\@babel\\parser\\lib\\index.js:11935:24)\n    at JSXParserMixin.parseArrowExpression (D:\\py\\chatgpt2\\node_modules\\@babel\\parser\\lib\\index.js:11910:10)\n    at JSXParserMixin.parseParenAndDistinguishExpression (D:\\py\\chatgpt2\\node_modules\\@babel\\parser\\lib\\index.js:11511:12)\n    at JSXParserMixin.parseExprAtom (D:\\py\\chatgpt2\\node_modules\\@babel\\parser\\lib\\index.js:11137:23)\n    at JSXParserMixin.parseExprAtom (D:\\py\\chatgpt2\\node_modules\\@babel\\parser\\lib\\index.js:6932:20)\n    at JSXParserMixin.parseExprSubscripts (D:\\py\\chatgpt2\\node_modules\\@babel\\parser\\lib\\index.js:10857:23)\n    at JSXParserMixin.parseUpdate (D:\\py\\chatgpt2\\node_modules\\@babel\\parser\\lib\\index.js:10840:21)\n    at JSXParserMixin.parseMaybeUnary (D:\\py\\chatgpt2\\node_modules\\@babel\\parser\\lib\\index.js:10816:23)\n    at JSXParserMixin.parseMaybeUnaryOrPrivate (D:\\py\\chatgpt2\\node_modules\\@babel\\parser\\lib\\index.js:10654:61)\n    at JSXParserMixin.parseExprOps (D:\\py\\chatgpt2\\node_modules\\@babel\\parser\\lib\\index.js:10659:23)\n    at JSXParserMixin.parseMaybeConditional (D:\\py\\chatgpt2\\node_modules\\@babel\\parser\\lib\\index.js:10636:23)\n    at JSXParserMixin.parseMaybeAssign (D:\\py\\chatgpt2\\node_modules\\@babel\\parser\\lib\\index.js:10597:21)\n    at D:\\py\\chatgpt2\\node_modules\\@babel\\parser\\lib\\index.js:10567:39\n    at JSXParserMixin.allowInAnd (D:\\py\\chatgpt2\\node_modules\\@babel\\parser\\lib\\index.js:12279:16)");

/***/ }),

/***/ 55579:
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 67294);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ 73935);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ 98548);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ 48187);




react_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().StrictMode), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], null)), document.getElementById('root'));

/***/ }),

/***/ 39087:
/*!***********************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/App.css ***!
  \***********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ 23645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".App {\n  text-align: center;\n}\n\n.App-logo {\n  height: 40vmin;\n  pointer-events: none;\n}\n\n\n", "",{"version":3,"sources":["webpack://src/App.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;AACpB;;AAEA;EACE,cAAc;EACd,oBAAoB;AACtB","sourcesContent":[".App {\n  text-align: center;\n}\n\n.App-logo {\n  height: 40vmin;\n  pointer-events: none;\n}\n\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 51424:
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ 23645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n\tmargin: 0;\n\tfont-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\",\n\t\t\"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\",\n\t\tsans-serif;\n\t-webkit-font-smoothing: antialiased;\n\t-moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n\tfont-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\",\n\t\tmonospace;\n}\n", "",{"version":3,"sources":["webpack://src/index.css"],"names":[],"mappings":"AAAA;CACC,SAAS;CACT;;YAEW;CACX,mCAAmC;CACnC,kCAAkC;AACnC;;AAEA;CACC;WACU;AACX","sourcesContent":["body {\n\tmargin: 0;\n\tfont-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\",\n\t\t\"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\",\n\t\tsans-serif;\n\t-webkit-font-smoothing: antialiased;\n\t-moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n\tfont-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\",\n\t\tmonospace;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 95722:
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var api = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ 93379);
            var content = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./App.css */ 39087);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ 98548:
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var api = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ 93379);
            var content = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ 51424);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors"], () => (__webpack_exec__(26981), __webpack_exec__(55579)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.506b1697.js.map