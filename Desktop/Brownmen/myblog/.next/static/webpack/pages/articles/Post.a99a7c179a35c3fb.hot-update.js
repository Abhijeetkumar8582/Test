"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/articles/Post",{

/***/ "./pages/articles/Post.js":
/*!********************************!*\
  !*** ./pages/articles/Post.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_legacy_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/legacy/image */ \"./node_modules/next/legacy/image.js\");\n/* harmony import */ var next_legacy_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_legacy_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _JSON_Blog_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../JSON/Blog.json */ \"./pages/JSON/Blog.json\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Post() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const { pid  } = router.query;\n    console.log(pid, \"home\");\n    const [blogJson, setBlogJson] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        for(let i = 0; i < _JSON_Blog_json__WEBPACK_IMPORTED_MODULE_4__.length; i++){\n            if (_JSON_Blog_json__WEBPACK_IMPORTED_MODULE_4__[i].slug === pid) {\n                setBlogJson(_JSON_Blog_json__WEBPACK_IMPORTED_MODULE_4__[i]);\n                console.log(\"Found matching blog post:\", setBlogJson);\n                break;\n            }\n        }\n    }, [\n        pid\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"space\",\n                style: {\n                    padding: \"1px\"\n                }\n            }, void 0, false, {\n                fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/myblog/pages/articles/Post.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" container box\"\n            }, void 0, false, {\n                fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/myblog/pages/articles/Post.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Post, \"mIYpughBD2lSxA6eUUFGTYtJe3Q=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Post;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcnRpY2xlcy9Qb3N0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFrRDtBQUNiO0FBQ0c7QUFDSjtBQUNwQyxTQUFTTSxPQUFPOztJQUVkLE1BQU1DLFNBQVNILHNEQUFTQTtJQUN4QixNQUFNLEVBQUVJLElBQUcsRUFBRSxHQUFHRCxPQUFPRSxLQUFLO0lBQzVCQyxRQUFRQyxHQUFHLENBQUNILEtBQUk7SUFFaEIsTUFBTSxDQUFDSSxVQUFVQyxZQUFZLEdBQUdYLCtDQUFRQSxDQUFDLENBQUM7SUFFMUNELGdEQUFTQSxDQUFDLElBQU07UUFDZCxJQUFLLElBQUlhLElBQUksR0FBR0EsSUFBSVQsbURBQVcsRUFBRVMsSUFBSztZQUNwQyxJQUFJVCw0Q0FBSSxDQUFDUyxFQUFFLENBQUNFLElBQUksS0FBS1IsS0FBSztnQkFDeEJLLFlBQVlSLDRDQUFJLENBQUNTLEVBQUU7Z0JBQ25CSixRQUFRQyxHQUFHLENBQUMsNkJBQTRCRTtnQkFDeEMsS0FBTTtZQUNSLENBQUM7UUFDSDtJQUNGLEdBQUc7UUFBQ0w7S0FBSTtJQUVSLHFCQUNFOzswQkFFRSw4REFBQ1M7Z0JBQUlDLFdBQVU7Z0JBQVFDLE9BQU87b0JBQUNDLFNBQVE7Z0JBQUs7Ozs7OzswQkFDNUMsOERBQUNIO2dCQUFJQyxXQUFVOzs7Ozs7OztBQWdCckI7R0F0Q1NaOztRQUVRRixrREFBU0E7OztLQUZqQkU7QUF3Q1QsK0RBQWVBLElBQUlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXJ0aWNsZXMvUG9zdC5qcz8xYjYyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9sZWdhY3kvaW1hZ2UnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgYmxvZyBmcm9tICcuLi9KU09OL0Jsb2cuanNvbidcbmZ1bmN0aW9uIFBvc3QoKSB7XG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgcGlkIH0gPSByb3V0ZXIucXVlcnk7XG4gIGNvbnNvbGUubG9nKHBpZCxcImhvbWVcIilcbiAgXG4gIGNvbnN0IFtibG9nSnNvbiwgc2V0QmxvZ0pzb25dID0gdXNlU3RhdGUoe30pO1xuICBcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJsb2cubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChibG9nW2ldLnNsdWcgPT09IHBpZCkge1xuICAgICAgICBzZXRCbG9nSnNvbihibG9nW2ldKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJGb3VuZCBtYXRjaGluZyBibG9nIHBvc3Q6XCIsc2V0QmxvZ0pzb24pO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtwaWRdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdzcGFjZScgc3R5bGU9e3twYWRkaW5nOlwiMXB4XCJ9fT48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPScgY29udGFpbmVyIGJveCcgPlxuICAgICAgICB7Lyoge2Jsb2dKc29uLmRlc2MubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgPGRpdiBrZXk9e2l0ZW0ua2V5fT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxuICAgICAgICAgICAge2l0ZW0ua2V5LnN0YXJ0c1dpdGgoXCJ0b3BIZWFkaW5nXCIpICYmIDxoMSBjbGFzc05hbWU9J3RleHQtY2VudGVyIG15LTMnPnsoaXRlbS50ZXh0KX08L2gxPn1cbiAgICAgICAgICAgIHtpdGVtLmtleS5zdGFydHNXaXRoKFwidGl0bGVcIikgJiYgPGgzIGNsYXNzTmFtZT0ndGV4dC1zdGFydCBteS0yJz57KGl0ZW0udGV4dCl9PC9oMz59XG4gICAgICAgICAgICB7aXRlbS5rZXkuc3RhcnRzV2l0aChcImhlYWRpbmdcIikgJiYgPHAgY2xhc3NOYW1lPSd0ZXh0LXN0YXJ0IG15LTInPnsoaXRlbS50ZXh0KX08L3A+fVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2QtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyJz5cbiAgICAgICAgICAgIHtpdGVtLmtleS5zdGFydHNXaXRoKFwiaW1hZ2VcIikgJiYgPGltZyBzcmM9eyhpdGVtLnRleHQpfSBzdHlsZT17e3dpZHRoOlwiMTAwJVwiLG1heFdpZHRoOlwiNzAwcHhcIn19ICBhbHQ9XCJEeW5hbWljIEltYWdlXCIgLz59XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfSAqL31cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3QiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkltYWdlIiwidXNlUm91dGVyIiwiYmxvZyIsIlBvc3QiLCJyb3V0ZXIiLCJwaWQiLCJxdWVyeSIsImNvbnNvbGUiLCJsb2ciLCJibG9nSnNvbiIsInNldEJsb2dKc29uIiwiaSIsImxlbmd0aCIsInNsdWciLCJkaXYiLCJjbGFzc05hbWUiLCJzdHlsZSIsInBhZGRpbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/articles/Post.js\n"));

/***/ })

});