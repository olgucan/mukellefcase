"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-client)/./app/page.tsx":
/*!**********************!*\
  !*** ./app/page.tsx ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"(app-client)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-client)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Home() {\n    _s();\n    const { push  } = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const handleSubmit = async (event)=>{\n        event.preventDefault();\n        const payload = {\n            username: event.currentTarget.username.value,\n            password: event.currentTarget.password.value\n        };\n        try {\n            const { data  } = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(\"/api/auth/login\", payload);\n            alert(JSON.stringify(data));\n            // redirect the user to /dashboard\n            push(\"/dashboard\");\n        } catch (e) {\n            const error = e;\n            alert(error.message);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex flex-col justify-center items-center h-[100vh]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"uppercase text-2xl font-bold mb-8\",\n                children: \"Welcome to Login Page\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Samsung\\\\Downloads\\\\nextjs-latest-auth-main\\\\nextjs-latest-auth-main\\\\app\\\\page.tsx\",\n                lineNumber: 33,\n                columnNumber: 6\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                className: \"flex flex-col gap-4 border-2 px-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"username\",\n                                className: \"mr-4\",\n                                children: \"Username:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Samsung\\\\Downloads\\\\nextjs-latest-auth-main\\\\nextjs-latest-auth-main\\\\app\\\\page.tsx\",\n                                lineNumber: 37,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                id: \"username\",\n                                name: \"username\",\n                                required: true,\n                                className: \"border rounded border-black\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Samsung\\\\Downloads\\\\nextjs-latest-auth-main\\\\nextjs-latest-auth-main\\\\app\\\\page.tsx\",\n                                lineNumber: 38,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Samsung\\\\Downloads\\\\nextjs-latest-auth-main\\\\nextjs-latest-auth-main\\\\app\\\\page.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"password\",\n                                className: \"mr-4\",\n                                children: \"Password:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Samsung\\\\Downloads\\\\nextjs-latest-auth-main\\\\nextjs-latest-auth-main\\\\app\\\\page.tsx\",\n                                lineNumber: 47,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"password\",\n                                id: \"password\",\n                                name: \"password\",\n                                required: true,\n                                className: \"border rounded border-black\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Samsung\\\\Downloads\\\\nextjs-latest-auth-main\\\\nextjs-latest-auth-main\\\\app\\\\page.tsx\",\n                                lineNumber: 48,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Samsung\\\\Downloads\\\\nextjs-latest-auth-main\\\\nextjs-latest-auth-main\\\\app\\\\page.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        className: \"p-2 bg-orange-600 text-white w-fit rounded\",\n                        children: \"Submit\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Samsung\\\\Downloads\\\\nextjs-latest-auth-main\\\\nextjs-latest-auth-main\\\\app\\\\page.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Samsung\\\\Downloads\\\\nextjs-latest-auth-main\\\\nextjs-latest-auth-main\\\\app\\\\page.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Samsung\\\\Downloads\\\\nextjs-latest-auth-main\\\\nextjs-latest-auth-main\\\\app\\\\page.tsx\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"qsDkn33CqmlEcFEENil8IeDjAvk=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFMEM7QUFDRTtBQUU3QixTQUFTRTs7SUFDdEIsTUFBTSxFQUFFQyxLQUFJLEVBQUUsR0FBR0YsMERBQVNBO0lBRTFCLE1BQU1HLGVBQWUsT0FBT0M7UUFDMUJBLE1BQU1DO1FBRU4sTUFBTUMsVUFBVTtZQUNkQyxVQUFVSCxNQUFNSSxjQUFjRCxTQUFTRTtZQUN2Q0MsVUFBVU4sTUFBTUksY0FBY0UsU0FBU0Q7UUFDekM7UUFFQSxJQUFJO1lBQ0YsTUFBTSxFQUFFRSxLQUFJLEVBQUUsR0FBRyxNQUFNWiw2Q0FBS0EsQ0FBQ2EsS0FBSyxtQkFBbUJOO1lBRXJETyxNQUFNQyxLQUFLQyxVQUFVSjtZQUVyQixrQ0FBa0M7WUFDbENULEtBQUs7UUFDUCxFQUFFLE9BQU9jLEdBQUc7WUFDVixNQUFNQyxRQUFRRDtZQUVkSCxNQUFNSSxNQUFNQztRQUNkO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ0M7UUFBS0MsV0FBVTs7MEJBQ2YsOERBQUNDO2dCQUFHRCxXQUFVOzBCQUFvQzs7Ozs7OzBCQUVqRCw4REFBQ0U7Z0JBQUtDLFVBQVVwQjtnQkFBY2lCLFdBQVU7O2tDQUN0Qyw4REFBQ0k7OzBDQUNDLDhEQUFDQztnQ0FBTUMsU0FBUTtnQ0FBV04sV0FBVTswQ0FBTzs7Ozs7OzBDQUMzQyw4REFBQ087Z0NBQ0NDLE1BQUs7Z0NBQ0xDLElBQUc7Z0NBQ0hDLE1BQUs7Z0NBQ0xDLFFBQVE7Z0NBQ1JYLFdBQVU7Ozs7Ozs7Ozs7OztrQ0FHZCw4REFBQ0k7OzBDQUNDLDhEQUFDQztnQ0FBTUMsU0FBUTtnQ0FBV04sV0FBVTswQ0FBUTs7Ozs7OzBDQUM1Qyw4REFBQ087Z0NBQ0NDLE1BQUs7Z0NBQ0xDLElBQUc7Z0NBQ0hDLE1BQUs7Z0NBQ0xDLFFBQVE7Z0NBQ1JYLFdBQVU7Ozs7Ozs7Ozs7OztrQ0FJZCw4REFBQ1k7d0JBQ0NKLE1BQUs7d0JBQ0xSLFdBQVU7a0NBQ1g7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1UO0dBNUR3Qm5COztRQUNMRCxzREFBU0E7OztLQURKQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcGFnZS50c3g/NzYwMyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IGF4aW9zLCB7IEF4aW9zRXJyb3IgfSBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgeyBwdXNoIH0gPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZXZlbnQ6IFJlYWN0LkZvcm1FdmVudDxIVE1MRm9ybUVsZW1lbnQ+KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IHBheWxvYWQgPSB7XG4gICAgICB1c2VybmFtZTogZXZlbnQuY3VycmVudFRhcmdldC51c2VybmFtZS52YWx1ZSxcbiAgICAgIHBhc3N3b3JkOiBldmVudC5jdXJyZW50VGFyZ2V0LnBhc3N3b3JkLnZhbHVlLFxuICAgIH07XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5wb3N0KFwiL2FwaS9hdXRoL2xvZ2luXCIsIHBheWxvYWQpO1xuXG4gICAgICBhbGVydChKU09OLnN0cmluZ2lmeShkYXRhKSk7XG5cbiAgICAgIC8vIHJlZGlyZWN0IHRoZSB1c2VyIHRvIC9kYXNoYm9hcmRcbiAgICAgIHB1c2goXCIvZGFzaGJvYXJkXCIpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnN0IGVycm9yID0gZSBhcyBBeGlvc0Vycm9yO1xuXG4gICAgICBhbGVydChlcnJvci5tZXNzYWdlKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8bWFpbiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBoLVsxMDB2aF1cIj5cbiAgICAgPGgxIGNsYXNzTmFtZT1cInVwcGVyY2FzZSB0ZXh0LTJ4bCBmb250LWJvbGQgbWItOFwiPldlbGNvbWUgdG8gTG9naW4gUGFnZTwvaDE+XG5cbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTQgYm9yZGVyLTIgcHgtNFwiPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidXNlcm5hbWVcIiBjbGFzc05hbWU9XCJtci00XCI+VXNlcm5hbWU6PC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIGlkPVwidXNlcm5hbWVcIlxuICAgICAgICAgICAgbmFtZT1cInVzZXJuYW1lXCJcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXIgcm91bmRlZCBib3JkZXItYmxhY2tcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIiBjbGFzc05hbWU9XCJtci00XCIgPlBhc3N3b3JkOjwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlciByb3VuZGVkIGJvcmRlci1ibGFja1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cInAtMiBiZy1vcmFuZ2UtNjAwIHRleHQtd2hpdGUgdy1maXQgcm91bmRlZFwiXG4gICAgICAgID5cbiAgICAgICAgICBTdWJtaXRcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9tYWluPlxuICApO1xufVxuIl0sIm5hbWVzIjpbImF4aW9zIiwidXNlUm91dGVyIiwiSG9tZSIsInB1c2giLCJoYW5kbGVTdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwicGF5bG9hZCIsInVzZXJuYW1lIiwiY3VycmVudFRhcmdldCIsInZhbHVlIiwicGFzc3dvcmQiLCJkYXRhIiwicG9zdCIsImFsZXJ0IiwiSlNPTiIsInN0cmluZ2lmeSIsImUiLCJlcnJvciIsIm1lc3NhZ2UiLCJtYWluIiwiY2xhc3NOYW1lIiwiaDEiLCJmb3JtIiwib25TdWJtaXQiLCJkaXYiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsInR5cGUiLCJpZCIsIm5hbWUiLCJyZXF1aXJlZCIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./app/page.tsx\n"));

/***/ })

});