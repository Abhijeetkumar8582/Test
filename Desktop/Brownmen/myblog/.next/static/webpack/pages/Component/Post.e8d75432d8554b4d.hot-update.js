"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/Component/Post",{

/***/ "./pages/Component/Post.js":
/*!*********************************!*\
  !*** ./pages/Component/Post.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_legacy_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/legacy/image */ \"./node_modules/next/legacy/image.js\");\n/* harmony import */ var next_legacy_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_legacy_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _JSON_Blog_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../JSON/Blog.json */ \"./pages/JSON/Blog.json\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Post() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const { pid  } = router.query;\n    console.log(_JSON_Blog_json__WEBPACK_IMPORTED_MODULE_4__);\n    var blogJson = {};\n    for(let i = 0; i < _JSON_Blog_json__WEBPACK_IMPORTED_MODULE_4__.length; i++){\n        if (_JSON_Blog_json__WEBPACK_IMPORTED_MODULE_4__[i].id === pid) {\n            blogJson = _JSON_Blog_json__WEBPACK_IMPORTED_MODULE_4__[i];\n            console.log(\"Found matching blog post:\", _JSON_Blog_json__WEBPACK_IMPORTED_MODULE_4__[i]);\n            break;\n        }\n        console.log(blogJson, \"test\");\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-center my-3\",\n                children: blogJson.title\n            }, void 0, false, {\n                fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/myblog/pages/Component/Post.js\",\n                lineNumber: 22,\n                columnNumber: 6\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container d-flex justify-content-end\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                        className: \"text-center my-3\",\n                        children: blogJson.by\n                    }, void 0, false, {\n                        fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/myblog/pages/Component/Post.js\",\n                        lineNumber: 24,\n                        columnNumber: 6\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                        className: \"text-center my-3 mx-4\",\n                        children: blogJson.reviewed\n                    }, void 0, false, {\n                        fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/myblog/pages/Component/Post.js\",\n                        lineNumber: 25,\n                        columnNumber: 6\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/myblog/pages/Component/Post.js\",\n                lineNumber: 23,\n                columnNumber: 6\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container text-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_legacy_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    src: blogJson.image,\n                    loading: \"lazy\",\n                    width: 900,\n                    layout: \"\",\n                    style: {\n                        maxHeight: \"400px\",\n                        borderRadius: \"10px\",\n                        height: \"100%\"\n                    },\n                    height: 400\n                }, void 0, false, {\n                    fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/myblog/pages/Component/Post.js\",\n                    lineNumber: 28,\n                    columnNumber: 6\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/myblog/pages/Component/Post.js\",\n                lineNumber: 27,\n                columnNumber: 6\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                className: \"text-justify mx-5\",\n                children: blogJson.desc.heading\n            }, void 0, false, {\n                fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/myblog/pages/Component/Post.js\",\n                lineNumber: 30,\n                columnNumber: 6\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Post, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Post;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9Db21wb25lbnQvUG9zdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBeUI7QUFDWTtBQUNHO0FBQ0o7QUFDcEMsU0FBU0ksT0FBTzs7SUFFZCxNQUFNQyxTQUFTSCxzREFBU0E7SUFDeEIsTUFBTSxFQUFFSSxJQUFHLEVBQUUsR0FBR0QsT0FBT0UsS0FBSztJQUM1QkMsUUFBUUMsR0FBRyxDQUFDTiw0Q0FBSUE7SUFDaEIsSUFBSU8sV0FBVyxDQUFDO0lBQ2hCLElBQUssSUFBSUMsSUFBRSxHQUFFQSxJQUFFUixtREFBVyxFQUFDUSxJQUFJO1FBQzdCLElBQUdSLDRDQUFJLENBQUNRLEVBQUUsQ0FBQ0UsRUFBRSxLQUFHUCxLQUFJO1lBQ2xCSSxXQUFTUCw0Q0FBSSxDQUFDUSxFQUFFO1lBQ2hCSCxRQUFRQyxHQUFHLENBQUMsNkJBQTZCTiw0Q0FBSSxDQUFDUSxFQUFFO1lBQy9DLEtBQU07UUFDWCxDQUFDO1FBQ0RILFFBQVFDLEdBQUcsQ0FBQ0MsVUFBUztJQUNyQjtJQUVBLHFCQUNFOzswQkFDQyw4REFBQ0k7Z0JBQUdDLFdBQVU7MEJBQW9CTCxTQUFTTSxLQUFLOzs7Ozs7MEJBQ2hELDhEQUFDQztnQkFBSUYsV0FBVTs7a0NBQ2YsOERBQUNHO3dCQUFHSCxXQUFVO2tDQUFvQkwsU0FBU1MsRUFBRTs7Ozs7O2tDQUM3Qyw4REFBQ0Q7d0JBQUdILFdBQVU7a0NBQXlCTCxTQUFTVSxRQUFROzs7Ozs7Ozs7Ozs7MEJBRXhELDhEQUFDSDtnQkFBSUYsV0FBVTswQkFDZiw0RUFBQ2QsMERBQUtBO29CQUFDb0IsS0FBS1gsU0FBU1ksS0FBSztvQkFBRUMsU0FBUTtvQkFBT0MsT0FBTztvQkFBS0MsUUFBTztvQkFBR0MsT0FBTzt3QkFBQ0MsV0FBVTt3QkFBUUMsY0FBYTt3QkFBT0MsUUFBTztvQkFBTTtvQkFBR0EsUUFBUTs7Ozs7Ozs7Ozs7MEJBRXZJLDhEQUFDWDtnQkFBR0gsV0FBVTswQkFBcUJMLFNBQVNvQixJQUFJLENBQUNDLE9BQU87Ozs7Ozs7O0FBRzdEO0dBNUJTM0I7O1FBRVFGLGtEQUFTQTs7O0tBRmpCRTtBQThCVCwrREFBZUEsSUFBSUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9Db21wb25lbnQvUG9zdC5qcz84OWU0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2xlZ2FjeS9pbWFnZSdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBibG9nIGZyb20gJy4uL0pTT04vQmxvZy5qc29uJ1xuZnVuY3Rpb24gUG9zdCgpIHtcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyBwaWQgfSA9IHJvdXRlci5xdWVyeTtcbiAgY29uc29sZS5sb2coYmxvZylcbiAgdmFyIGJsb2dKc29uID0ge31cbiAgZm9yIChsZXQgaT0wO2k8YmxvZy5sZW5ndGg7aSsrKXtcbiAgICBpZihibG9nW2ldLmlkPT09cGlkKXtcbiAgICAgIGJsb2dKc29uPWJsb2dbaV1cbiAgICAgIGNvbnNvbGUubG9nKFwiRm91bmQgbWF0Y2hpbmcgYmxvZyBwb3N0OlwiLCBibG9nW2ldKSBcbiAgICAgICBicmVhazsgXG4gIH1cbiAgY29uc29sZS5sb2coYmxvZ0pzb24sXCJ0ZXN0XCIpXG4gIH1cbiAgXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgPGgxIGNsYXNzTmFtZT0ndGV4dC1jZW50ZXIgbXktMyc+e2Jsb2dKc29uLnRpdGxlfTwvaDE+XG4gICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXIgZC1mbGV4IGp1c3RpZnktY29udGVudC1lbmQnPlxuICAgICA8aDUgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlciBteS0zJz57YmxvZ0pzb24uYnl9PC9oNT5cbiAgICAgPGg1IGNsYXNzTmFtZT0ndGV4dC1jZW50ZXIgbXktMyBteC00Jz57YmxvZ0pzb24ucmV2aWV3ZWR9PC9oNT5cbiAgICAgPC9kaXY+XG4gICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXIgdGV4dC1jZW50ZXInPlxuICAgICA8SW1hZ2Ugc3JjPXtibG9nSnNvbi5pbWFnZX0gbG9hZGluZz1cImxhenlcIiB3aWR0aD17OTAwfSBsYXlvdXQ9XCJcIiBzdHlsZT17e21heEhlaWdodDpcIjQwMHB4XCIsYm9yZGVyUmFkaXVzOlwiMTBweFwiLGhlaWdodDpcIjEwMCVcIn19IGhlaWdodD17NDAwfS8+IFxuICAgICA8L2Rpdj5cbiAgICAgPGg1IGNsYXNzTmFtZT0ndGV4dC1qdXN0aWZ5IG14LTUnPntibG9nSnNvbi5kZXNjLmhlYWRpbmd9PC9oNT5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQb3N0Il0sIm5hbWVzIjpbIlJlYWN0IiwiSW1hZ2UiLCJ1c2VSb3V0ZXIiLCJibG9nIiwiUG9zdCIsInJvdXRlciIsInBpZCIsInF1ZXJ5IiwiY29uc29sZSIsImxvZyIsImJsb2dKc29uIiwiaSIsImxlbmd0aCIsImlkIiwiaDEiLCJjbGFzc05hbWUiLCJ0aXRsZSIsImRpdiIsImg1IiwiYnkiLCJyZXZpZXdlZCIsInNyYyIsImltYWdlIiwibG9hZGluZyIsIndpZHRoIiwibGF5b3V0Iiwic3R5bGUiLCJtYXhIZWlnaHQiLCJib3JkZXJSYWRpdXMiLCJoZWlnaHQiLCJkZXNjIiwiaGVhZGluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/Component/Post.js\n"));

/***/ })

});