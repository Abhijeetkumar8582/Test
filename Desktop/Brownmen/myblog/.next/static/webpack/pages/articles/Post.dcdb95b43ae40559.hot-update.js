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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_legacy_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/legacy/image */ \"./node_modules/next/legacy/image.js\");\n/* harmony import */ var next_legacy_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_legacy_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _JSON_Blog_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../JSON/Blog.json */ \"./pages/JSON/Blog.json\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Post() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const { pid  } = router.query;\n    console.log(pid, \"home\");\n    const [blogJson, setBlogJson] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        for(let i = 0; i < _JSON_Blog_json__WEBPACK_IMPORTED_MODULE_4__.length; i++){\n            if (_JSON_Blog_json__WEBPACK_IMPORTED_MODULE_4__[i].slug === pid) {\n                setBlogJson(_JSON_Blog_json__WEBPACK_IMPORTED_MODULE_4__[i].desc);\n                console.log(\"Found matching blog post:\", _JSON_Blog_json__WEBPACK_IMPORTED_MODULE_4__[i]);\n                break;\n            }\n        }\n    }, [\n        pid\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"space\",\n                style: {\n                    padding: \"1px\"\n                }\n            }, void 0, false, {\n                fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/myblog/pages/articles/Post.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" container box\"\n            }, void 0, false, {\n                fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/myblog/pages/articles/Post.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Post, \"mIYpughBD2lSxA6eUUFGTYtJe3Q=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Post;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcnRpY2xlcy9Qb3N0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFrRDtBQUNiO0FBQ0c7QUFDSjtBQUNwQyxTQUFTTSxPQUFPOztJQUVkLE1BQU1DLFNBQVNILHNEQUFTQTtJQUN4QixNQUFNLEVBQUVJLElBQUcsRUFBRSxHQUFHRCxPQUFPRSxLQUFLO0lBQzVCQyxRQUFRQyxHQUFHLENBQUNILEtBQUk7SUFFaEIsTUFBTSxDQUFDSSxVQUFVQyxZQUFZLEdBQUdYLCtDQUFRQSxDQUFDLENBQUM7SUFFMUNELGdEQUFTQSxDQUFDLElBQU07UUFDZCxJQUFLLElBQUlhLElBQUksR0FBR0EsSUFBSVQsbURBQVcsRUFBRVMsSUFBSztZQUNwQyxJQUFJVCw0Q0FBSSxDQUFDUyxFQUFFLENBQUNFLElBQUksS0FBS1IsS0FBSztnQkFDeEJLLFlBQVlSLDRDQUFJLENBQUNTLEVBQUUsQ0FBQ0csSUFBSTtnQkFDeEJQLFFBQVFDLEdBQUcsQ0FBQyw2QkFBNEJOLDRDQUFJLENBQUNTLEVBQUU7Z0JBQy9DLEtBQU07WUFDUixDQUFDO1FBQ0g7SUFDRixHQUFHO1FBQUNOO0tBQUk7SUFFUixxQkFDRTs7MEJBRUUsOERBQUNVO2dCQUFJQyxXQUFVO2dCQUFRQyxPQUFPO29CQUFDQyxTQUFRO2dCQUFLOzs7Ozs7MEJBQzVDLDhEQUFDSDtnQkFBSUMsV0FBVTs7Ozs7Ozs7QUFnQnJCO0dBdENTYjs7UUFFUUYsa0RBQVNBOzs7S0FGakJFO0FBd0NULCtEQUFlQSxJQUFJQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2FydGljbGVzL1Bvc3QuanM/MWI2MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvbGVnYWN5L2ltYWdlJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IGJsb2cgZnJvbSAnLi4vSlNPTi9CbG9nLmpzb24nXG5mdW5jdGlvbiBQb3N0KCkge1xuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IHBpZCB9ID0gcm91dGVyLnF1ZXJ5O1xuICBjb25zb2xlLmxvZyhwaWQsXCJob21lXCIpXG4gIFxuICBjb25zdCBbYmxvZ0pzb24sIHNldEJsb2dKc29uXSA9IHVzZVN0YXRlKHt9KTtcbiAgXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBibG9nLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoYmxvZ1tpXS5zbHVnID09PSBwaWQpIHtcbiAgICAgICAgc2V0QmxvZ0pzb24oYmxvZ1tpXS5kZXNjKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJGb3VuZCBtYXRjaGluZyBibG9nIHBvc3Q6XCIsYmxvZ1tpXSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfSwgW3BpZF0pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9J3NwYWNlJyBzdHlsZT17e3BhZGRpbmc6XCIxcHhcIn19PjwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9JyBjb250YWluZXIgYm94JyA+XG4gICAgICAgIHsvKiB7YmxvZ0pzb24uZGVzYy5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICA8ZGl2IGtleT17aXRlbS5rZXl9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XG4gICAgICAgICAgICB7aXRlbS5rZXkuc3RhcnRzV2l0aChcInRvcEhlYWRpbmdcIikgJiYgPGgxIGNsYXNzTmFtZT0ndGV4dC1jZW50ZXIgbXktMyc+eyhpdGVtLnRleHQpfTwvaDE+fVxuICAgICAgICAgICAge2l0ZW0ua2V5LnN0YXJ0c1dpdGgoXCJ0aXRsZVwiKSAmJiA8aDMgY2xhc3NOYW1lPSd0ZXh0LXN0YXJ0IG15LTInPnsoaXRlbS50ZXh0KX08L2gzPn1cbiAgICAgICAgICAgIHtpdGVtLmtleS5zdGFydHNXaXRoKFwiaGVhZGluZ1wiKSAmJiA8cCBjbGFzc05hbWU9J3RleHQtc3RhcnQgbXktMic+eyhpdGVtLnRleHQpfTwvcD59XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXInPlxuICAgICAgICAgICAge2l0ZW0ua2V5LnN0YXJ0c1dpdGgoXCJpbWFnZVwiKSAmJiA8aW1nIHNyYz17KGl0ZW0udGV4dCl9IHN0eWxlPXt7d2lkdGg6XCIxMDAlXCIsbWF4V2lkdGg6XCI3MDBweFwifX0gIGFsdD1cIkR5bmFtaWMgSW1hZ2VcIiAvPn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9ICovfVxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9zdCJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSW1hZ2UiLCJ1c2VSb3V0ZXIiLCJibG9nIiwiUG9zdCIsInJvdXRlciIsInBpZCIsInF1ZXJ5IiwiY29uc29sZSIsImxvZyIsImJsb2dKc29uIiwic2V0QmxvZ0pzb24iLCJpIiwibGVuZ3RoIiwic2x1ZyIsImRlc2MiLCJkaXYiLCJjbGFzc05hbWUiLCJzdHlsZSIsInBhZGRpbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/articles/Post.js\n"));

/***/ })

});