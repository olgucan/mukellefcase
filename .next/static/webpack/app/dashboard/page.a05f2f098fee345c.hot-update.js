"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/page",{

/***/ "(app-client)/./app/dashboard/page.tsx":
/*!********************************!*\
  !*** ./app/dashboard/page.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ DashboardPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"(app-client)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-client)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction DashboardPage() {\n    _s();\n    const { push  } = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    // This page is protected\n    const handleSubmit = async (event)=>{\n        //event.preventDefault();\n        // const payload = {\n        //   username: event.currentTarget.username.value,\n        //   password: event.currentTarget.password.value,\n        // };\n        try {\n            const { data  } = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"/api/auth/logout\");\n            alert(JSON.stringify(data));\n            // redirect the user to /dashboard\n            push(\"/\");\n        } catch (e) {\n            const error = e;\n            alert(error.message);\n        }\n    };\n    const [users, setUsers] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        foo();\n    }, []);\n    //console.log(users)\n    const foo = async ()=>{\n        axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"https://api.thecatapi.com/v1/images/search\").then((res)=>setUsers(res.data)).catch((err)=>{\n            setError(err.message);\n        });\n    };\n    const [addclass, setAddclass] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        //console.log('resim değişti')\n        setAddclass((a)=>!a);\n    }, [\n        users\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col justify-center items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Super Secret Dashboard\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Samsung\\\\Downloads\\\\nextjs-latest-auth-main\\\\nextjs-latest-auth-main\\\\app\\\\dashboard\\\\page.tsx\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, this),\n            users[0] && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                className: addclass ? \"add\" : \"\",\n                src: users[0].url,\n                alt: \"cat\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Samsung\\\\Downloads\\\\nextjs-latest-auth-main\\\\nextjs-latest-auth-main\\\\app\\\\dashboard\\\\page.tsx\",\n                lineNumber: 61,\n                columnNumber: 19\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex gap-3 mt-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: foo,\n                        className: \"bg-green-300 p-2 rounded\",\n                        children: \"Change\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Samsung\\\\Downloads\\\\nextjs-latest-auth-main\\\\nextjs-latest-auth-main\\\\app\\\\dashboard\\\\page.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 4\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleSubmit,\n                        className: \"bg-[red] text-white p-2 rounded\",\n                        children: \"Log out\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Samsung\\\\Downloads\\\\nextjs-latest-auth-main\\\\nextjs-latest-auth-main\\\\app\\\\dashboard\\\\page.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Samsung\\\\Downloads\\\\nextjs-latest-auth-main\\\\nextjs-latest-auth-main\\\\app\\\\dashboard\\\\page.tsx\",\n                lineNumber: 62,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Samsung\\\\Downloads\\\\nextjs-latest-auth-main\\\\nextjs-latest-auth-main\\\\app\\\\dashboard\\\\page.tsx\",\n        lineNumber: 59,\n        columnNumber: 5\n    }, this);\n}\n_s(DashboardPage, \"dSXg3gaN3G9piqomerF2UNUk230=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = DashboardPage;\nvar _c;\n$RefreshReg$(_c, \"DashboardPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2Rhc2hib2FyZC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDMEM7QUFDRTtBQUNBO0FBRTdCLFNBQVNJOztJQUN0QixNQUFNLEVBQUVDLEtBQUksRUFBRSxHQUFHSiwwREFBU0E7SUFFMUIseUJBQXlCO0lBQ3pCLE1BQU1LLGVBQWUsT0FBT0M7UUFDMUIseUJBQXlCO1FBRXpCLG9CQUFvQjtRQUNwQixrREFBa0Q7UUFDbEQsa0RBQWtEO1FBQ2xELEtBQUs7UUFFTCxJQUFJO1lBQ0YsTUFBTSxFQUFFQyxLQUFJLEVBQUUsR0FBRyxNQUFNUiw2Q0FBS0EsQ0FBQ1MsSUFBSTtZQUVqQ0MsTUFBTUMsS0FBS0MsVUFBVUo7WUFFckIsa0NBQWtDO1lBQ2xDSCxLQUFLO1FBRVAsRUFBRSxPQUFPUSxHQUFHO1lBQ1YsTUFBTUMsUUFBUUQ7WUFFZEgsTUFBTUksTUFBTUM7UUFDZDtJQUNGO0lBT0EsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdkLCtDQUFRQSxDQUFTLEVBQUU7SUFDN0MsTUFBTSxDQUFDVyxPQUFPSSxTQUFTLEdBQUdmLCtDQUFRQSxDQUFDO0lBRWpDRCxnREFBU0EsQ0FBQztRQUNWaUI7SUFDQSxHQUFHLEVBQUU7SUFDTCxvQkFBb0I7SUFDcEIsTUFBTUEsTUFBTTtRQUNWbkIsNkNBQUtBLENBQ0pTLElBQVksOENBQ1pXLEtBQUssQ0FBQ0MsTUFBUUosU0FBU0ksSUFBSWIsT0FDM0JjLE1BQU1DLENBQUFBO1lBQ05MLFNBQVNLLElBQUlSO1FBQ2xCO0lBQ0U7SUFDQSxNQUFNLENBQUNTLFVBQVNDLFlBQVksR0FBQ3RCLCtDQUFRQSxDQUFDO0lBQ3RDRCxnREFBU0EsQ0FBQztRQUNULDhCQUE4QjtRQUM5QnVCLFlBQVlDLENBQUFBLElBQUcsQ0FBQ0E7SUFDakIsR0FBRTtRQUFDVjtLQUFNO0lBQ1gscUJBQ0UsOERBQUNXO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQzswQkFBRzs7Ozs7O1lBQ0piLEtBQUssQ0FBQyxFQUFFLGtCQUFJLDhEQUFDYztnQkFBSUYsV0FBV0osV0FBVyxRQUFRO2dCQUFJTyxLQUFLZixLQUFLLENBQUMsRUFBRSxDQUFDZ0I7Z0JBQUtDLEtBQUk7Ozs7OzswQkFDN0UsOERBQUNOO2dCQUFJQyxXQUFVOztrQ0FDZiw4REFBQ007d0JBQU9DLFNBQVNoQjt3QkFBS1MsV0FBVTtrQ0FBMkI7Ozs7OztrQ0FDeEQsOERBQUNNO3dCQUFPQyxTQUFTN0I7d0JBQWNzQixXQUFVO2tDQUFrQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSWpGO0dBOUR3QnhCOztRQUNMSCxzREFBU0E7OztLQURKRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvZGFzaGJvYXJkL3BhZ2UudHN4P2QxMjUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCBheGlvcywgeyBBeGlvc0Vycm9yIH0gZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0ICx1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGFzaGJvYXJkUGFnZSgpIHtcclxuICBjb25zdCB7IHB1c2ggfSA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAvLyBUaGlzIHBhZ2UgaXMgcHJvdGVjdGVkXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxCdXR0b25FbGVtZW50PikgPT4ge1xyXG4gICAgLy9ldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIC8vIGNvbnN0IHBheWxvYWQgPSB7XHJcbiAgICAvLyAgIHVzZXJuYW1lOiBldmVudC5jdXJyZW50VGFyZ2V0LnVzZXJuYW1lLnZhbHVlLFxyXG4gICAgLy8gICBwYXNzd29yZDogZXZlbnQuY3VycmVudFRhcmdldC5wYXNzd29yZC52YWx1ZSxcclxuICAgIC8vIH07XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoXCIvYXBpL2F1dGgvbG9nb3V0XCIpO1xyXG5cclxuICAgICAgYWxlcnQoSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xyXG5cclxuICAgICAgLy8gcmVkaXJlY3QgdGhlIHVzZXIgdG8gL2Rhc2hib2FyZFxyXG4gICAgICBwdXNoKFwiL1wiKTtcclxuICAgICAgXHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGNvbnN0IGVycm9yID0gZSBhcyBBeGlvc0Vycm9yO1xyXG5cclxuICAgICAgYWxlcnQoZXJyb3IubWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuICBpbnRlcmZhY2UgVXNlciB7XHJcbiAgICBpZDogc3RyaW5nO1xyXG4gICAgdXJsOiBzdHJpbmc7XHJcbiAgICB3aWR0aDpudW1iZXI7XHJcbiAgICBoZWlnaHQ6bnVtYmVyXHJcbiAgfVxyXG4gIGNvbnN0IFt1c2Vycywgc2V0VXNlcnNdID0gdXNlU3RhdGU8VXNlcltdPihbXSk7XHJcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZvbygpXHJcbiAgICB9LCBbXSk7XHJcbiAgICAvL2NvbnNvbGUubG9nKHVzZXJzKVxyXG4gICAgY29uc3QgZm9vID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBheGlvc1xyXG4gICAgICAuZ2V0PFVzZXJbXT4oXCJodHRwczovL2FwaS50aGVjYXRhcGkuY29tL3YxL2ltYWdlcy9zZWFyY2hcIilcclxuICAgICAgLnRoZW4oKHJlcykgPT4gc2V0VXNlcnMocmVzLmRhdGEpKVxyXG4gICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgIHNldEVycm9yKGVyci5tZXNzYWdlKTtcclxuICB9KTtcclxuICAgIH1cclxuICAgIGNvbnN0IFthZGRjbGFzcyxzZXRBZGRjbGFzc109dXNlU3RhdGUodHJ1ZSlcclxuICAgIHVzZUVmZmVjdCgoKT0+IHtcclxuICAgICAvL2NvbnNvbGUubG9nKCdyZXNpbSBkZcSfacWfdGknKVxyXG4gICAgIHNldEFkZGNsYXNzKGE9PiFhKVxyXG4gICAgfSxbdXNlcnNdKVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgIDxoMT5TdXBlciBTZWNyZXQgRGFzaGJvYXJkPC9oMT5cclxuICAgICB7dXNlcnNbMF0gJiYgPGltZyBjbGFzc05hbWU9e2FkZGNsYXNzID8gJ2FkZCcgOiAnJ30gc3JjPXt1c2Vyc1swXS51cmx9IGFsdD1cImNhdFwiID48L2ltZz4gfVxyXG4gICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTMgbXQtNlwiPlxyXG4gICA8YnV0dG9uIG9uQ2xpY2s9e2Zvb30gY2xhc3NOYW1lPVwiYmctZ3JlZW4tMzAwIHAtMiByb3VuZGVkXCI+Q2hhbmdlPC9idXR0b24+IFxyXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPVwiYmctW3JlZF0gdGV4dC13aGl0ZSBwLTIgcm91bmRlZFwiPkxvZyBvdXQ8L2J1dHRvbj5cclxuICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJheGlvcyIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiRGFzaGJvYXJkUGFnZSIsInB1c2giLCJoYW5kbGVTdWJtaXQiLCJldmVudCIsImRhdGEiLCJnZXQiLCJhbGVydCIsIkpTT04iLCJzdHJpbmdpZnkiLCJlIiwiZXJyb3IiLCJtZXNzYWdlIiwidXNlcnMiLCJzZXRVc2VycyIsInNldEVycm9yIiwiZm9vIiwidGhlbiIsInJlcyIsImNhdGNoIiwiZXJyIiwiYWRkY2xhc3MiLCJzZXRBZGRjbGFzcyIsImEiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImltZyIsInNyYyIsInVybCIsImFsdCIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./app/dashboard/page.tsx\n"));

/***/ })

});