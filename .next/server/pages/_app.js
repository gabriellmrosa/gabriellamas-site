/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./lib/gtag.js":
/*!*********************!*\
  !*** ./lib/gtag.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GA_TRACKING_ID\": () => (/* binding */ GA_TRACKING_ID),\n/* harmony export */   \"pageview\": () => (/* binding */ pageview),\n/* harmony export */   \"event\": () => (/* binding */ event)\n/* harmony export */ });\nconst GA_TRACKING_ID = \"UA-43243398-2\";\n// https://developers.google.com/analytics/devguides/collection/gtagjs/pages\nconst pageview = (url)=>{\n    window.gtag(\"config\", GA_TRACKING_ID, {\n        page_path: url\n    });\n};\n// https://developers.google.com/analytics/devguides/collection/gtagjs/events\nconst event = ({ action , category , label , value  })=>{\n    window.gtag(\"event\", action, {\n        event_category: category,\n        event_label: label,\n        value: value\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvZ3RhZy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBTyxLQUFLLENBQUNBLGNBQWMsR0FBRyxDQUFlO0FBRTdDLEVBQTRFO0FBQ3JFLEtBQUssQ0FBQ0MsUUFBUSxJQUFJQyxHQUFHLEdBQUssQ0FBQztJQUNoQ0MsTUFBTSxDQUFDQyxJQUFJLENBQUMsQ0FBUSxTQUFFSixjQUFjLEVBQUUsQ0FBQztRQUNyQ0ssU0FBUyxFQUFFSCxHQUFHO0lBQ2hCLENBQUM7QUFDSCxDQUFDO0FBRUQsRUFBNkU7QUFDdEUsS0FBSyxDQUFDSSxLQUFLLElBQUksQ0FBQyxDQUFDQyxNQUFNLEdBQUVDLFFBQVEsR0FBRUMsS0FBSyxHQUFFQyxLQUFLLEVBQUMsQ0FBQyxHQUFLLENBQUM7SUFDNURQLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDLENBQU8sUUFBRUcsTUFBTSxFQUFFLENBQUM7UUFDNUJJLGNBQWMsRUFBRUgsUUFBUTtRQUN4QkksV0FBVyxFQUFFSCxLQUFLO1FBQ2xCQyxLQUFLLEVBQUVBLEtBQUs7SUFDZCxDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL215c2l0ZS8uL2xpYi9ndGFnLmpzP2ZmNTgiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IEdBX1RSQUNLSU5HX0lEID0gXCJVQS00MzI0MzM5OC0yXCI7XG5cbi8vIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL2FuYWx5dGljcy9kZXZndWlkZXMvY29sbGVjdGlvbi9ndGFnanMvcGFnZXNcbmV4cG9ydCBjb25zdCBwYWdldmlldyA9ICh1cmwpID0+IHtcbiAgd2luZG93Lmd0YWcoXCJjb25maWdcIiwgR0FfVFJBQ0tJTkdfSUQsIHtcbiAgICBwYWdlX3BhdGg6IHVybCxcbiAgfSk7XG59O1xuXG4vLyBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9hbmFseXRpY3MvZGV2Z3VpZGVzL2NvbGxlY3Rpb24vZ3RhZ2pzL2V2ZW50c1xuZXhwb3J0IGNvbnN0IGV2ZW50ID0gKHsgYWN0aW9uLCBjYXRlZ29yeSwgbGFiZWwsIHZhbHVlIH0pID0+IHtcbiAgd2luZG93Lmd0YWcoXCJldmVudFwiLCBhY3Rpb24sIHtcbiAgICBldmVudF9jYXRlZ29yeTogY2F0ZWdvcnksXG4gICAgZXZlbnRfbGFiZWw6IGxhYmVsLFxuICAgIHZhbHVlOiB2YWx1ZSxcbiAgfSk7XG59O1xuIl0sIm5hbWVzIjpbIkdBX1RSQUNLSU5HX0lEIiwicGFnZXZpZXciLCJ1cmwiLCJ3aW5kb3ciLCJndGFnIiwicGFnZV9wYXRoIiwiZXZlbnQiLCJhY3Rpb24iLCJjYXRlZ29yeSIsImxhYmVsIiwidmFsdWUiLCJldmVudF9jYXRlZ29yeSIsImV2ZW50X2xhYmVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/gtag.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/script */ \"next/script\");\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _lib_gtag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/gtag */ \"./lib/gtag.js\");\n\n\n\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const handleRouteChange = (url)=>{\n            _lib_gtag__WEBPACK_IMPORTED_MODULE_6__.pageview(url);\n        };\n        router.events.on(\"routeChangeComplete\", handleRouteChange);\n        return ()=>{\n            router.events.off(\"routeChangeComplete\", handleRouteChange);\n        };\n    }, [\n        router.events\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_script__WEBPACK_IMPORTED_MODULE_4___default()), {\n                strategy: \"afterInteractive\",\n                src: `https://www.googletagmanager.com/gtag/js?id=${_lib_gtag__WEBPACK_IMPORTED_MODULE_6__.GA_TRACKING_ID}`,\n                __source: {\n                    fileName: \"/home/gabriellamas/dev/gabriellamas-site/pages/_app.js\",\n                    lineNumber: 22\n                },\n                __self: this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_script__WEBPACK_IMPORTED_MODULE_4___default()), {\n                id: \"gtag-init\",\n                strategy: \"afterInteractive\",\n                dangerouslySetInnerHTML: {\n                    __html: `\n            window.dataLayer = window.dataLayer || [];\n            function gtag(){dataLayer.push(arguments);}\n            gtag('js', new Date());\n\n            gtag('config', '${_lib_gtag__WEBPACK_IMPORTED_MODULE_6__.GA_TRACKING_ID}', {\n              page_path: window.location.pathname,\n            });\n          `\n                },\n                __source: {\n                    fileName: \"/home/gabriellamas/dev/gabriellamas-site/pages/_app.js\",\n                    lineNumber: 26\n                },\n                __self: this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                __source: {\n                    fileName: \"/home/gabriellamas/dev/gabriellamas-site/pages/_app.js\",\n                    lineNumber: 41\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"title\", {\n                        __source: {\n                            fileName: \"/home/gabriellamas/dev/gabriellamas-site/pages/_app.js\",\n                            lineNumber: 42\n                        },\n                        __self: this,\n                        children: \"Gabriel Lamas | Product Designer | Portfolio\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"meta\", {\n                        name: \"description\",\n                        content: \"Gabriel Lamas, Product Designer, portfolio\",\n                        __source: {\n                            fileName: \"/home/gabriellamas/dev/gabriellamas-site/pages/_app.js\",\n                            lineNumber: 43\n                        },\n                        __self: this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\",\n                        __source: {\n                            fileName: \"/home/gabriellamas/dev/gabriellamas-site/pages/_app.js\",\n                            lineNumber: 47\n                        },\n                        __self: this\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, {\n                ...pageProps,\n                __source: {\n                    fileName: \"/home/gabriellamas/dev/gabriellamas-site/pages/_app.js\",\n                    lineNumber: 50\n                },\n                __self: this\n            })\n        ]\n    }));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE4QjtBQUNHO0FBQ0w7QUFDSTtBQUNPO0FBQ0o7U0FFMUJLLEtBQUssQ0FBQyxDQUFDLENBQUNDLFNBQVMsR0FBRUMsU0FBUyxFQUFDLENBQUMsRUFBRSxDQUFDO0lBQ3hDLEtBQUssQ0FBQ0MsTUFBTSxHQUFHTCxzREFBUztJQUN4QkgsZ0RBQVMsS0FBTyxDQUFDO1FBQ2YsS0FBSyxDQUFDUyxpQkFBaUIsSUFBSUMsR0FBRyxHQUFLLENBQUM7WUFDbENOLCtDQUFhLENBQUNNLEdBQUc7UUFDbkIsQ0FBQztRQUNERixNQUFNLENBQUNJLE1BQU0sQ0FBQ0MsRUFBRSxDQUFDLENBQXFCLHNCQUFFSixpQkFBaUI7UUFDekQsTUFBTSxLQUFPLENBQUM7WUFDWkQsTUFBTSxDQUFDSSxNQUFNLENBQUNFLEdBQUcsQ0FBQyxDQUFxQixzQkFBRUwsaUJBQWlCO1FBQzVELENBQUM7SUFDSCxDQUFDLEVBQUUsQ0FBQ0Q7UUFBQUEsTUFBTSxDQUFDSSxNQUFNO0lBQUEsQ0FBQztJQUVsQixNQUFNOztpRkFFRFYsb0RBQU07Z0JBQ0xhLFFBQVEsRUFBQyxDQUFrQjtnQkFDM0JDLEdBQUcsR0FBRyw0Q0FBNEMsRUFBRVoscURBQW1COzs7Ozs7O2lGQUV4RUYsb0RBQU07Z0JBQ0xnQixFQUFFLEVBQUMsQ0FBVztnQkFDZEgsUUFBUSxFQUFDLENBQWtCO2dCQUMzQkksdUJBQXVCLEVBQUUsQ0FBQztvQkFDeEJDLE1BQU0sR0FBRztnQkFTWCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3lGQUlBRSxDQUFJO3dCQUNIQyxJQUFJLEVBQUMsQ0FBYTt3QkFDbEJDLE9BQU8sRUFBQyxDQUE0Qzs7Ozs7Ozt1Q0FFckRDLENBQUk7d0JBQUNDLEdBQUcsRUFBQyxDQUFNO3dCQUFDQyxJQUFJLEVBQUMsQ0FBYzs7Ozs7Ozs7OytCQUdyQ3JCO21CQUFjQyxTQUFTOzs7Ozs7Ozs7QUFHOUIsQ0FBQztBQUVELE1BQU0sU0FBU0YsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL215c2l0ZS8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IFNjcmlwdCBmcm9tIFwibmV4dC9zY3JpcHRcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0ICogYXMgZ3RhZyBmcm9tIFwiLi4vbGliL2d0YWdcIjtcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZVJvdXRlQ2hhbmdlID0gKHVybCkgPT4ge1xuICAgICAgZ3RhZy5wYWdldmlldyh1cmwpO1xuICAgIH07XG4gICAgcm91dGVyLmV2ZW50cy5vbihcInJvdXRlQ2hhbmdlQ29tcGxldGVcIiwgaGFuZGxlUm91dGVDaGFuZ2UpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICByb3V0ZXIuZXZlbnRzLm9mZihcInJvdXRlQ2hhbmdlQ29tcGxldGVcIiwgaGFuZGxlUm91dGVDaGFuZ2UpO1xuICAgIH07XG4gIH0sIFtyb3V0ZXIuZXZlbnRzXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFNjcmlwdFxuICAgICAgICBzdHJhdGVneT1cImFmdGVySW50ZXJhY3RpdmVcIlxuICAgICAgICBzcmM9e2BodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbS9ndGFnL2pzP2lkPSR7Z3RhZy5HQV9UUkFDS0lOR19JRH1gfVxuICAgICAgLz5cbiAgICAgIDxTY3JpcHRcbiAgICAgICAgaWQ9XCJndGFnLWluaXRcIlxuICAgICAgICBzdHJhdGVneT1cImFmdGVySW50ZXJhY3RpdmVcIlxuICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgIF9faHRtbDogYFxuICAgICAgICAgICAgd2luZG93LmRhdGFMYXllciA9IHdpbmRvdy5kYXRhTGF5ZXIgfHwgW107XG4gICAgICAgICAgICBmdW5jdGlvbiBndGFnKCl7ZGF0YUxheWVyLnB1c2goYXJndW1lbnRzKTt9XG4gICAgICAgICAgICBndGFnKCdqcycsIG5ldyBEYXRlKCkpO1xuXG4gICAgICAgICAgICBndGFnKCdjb25maWcnLCAnJHtndGFnLkdBX1RSQUNLSU5HX0lEfScsIHtcbiAgICAgICAgICAgICAgcGFnZV9wYXRoOiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICBgLFxuICAgICAgICB9fVxuICAgICAgLz5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+R2FicmllbCBMYW1hcyB8IFByb2R1Y3QgRGVzaWduZXIgfCBQb3J0Zm9saW88L3RpdGxlPlxuICAgICAgICA8bWV0YVxuICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgY29udGVudD1cIkdhYnJpZWwgTGFtYXMsIFByb2R1Y3QgRGVzaWduZXIsIHBvcnRmb2xpb1wiXG4gICAgICAgIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJIZWFkIiwiU2NyaXB0IiwidXNlUm91dGVyIiwiZ3RhZyIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwicm91dGVyIiwiaGFuZGxlUm91dGVDaGFuZ2UiLCJ1cmwiLCJwYWdldmlldyIsImV2ZW50cyIsIm9uIiwib2ZmIiwic3RyYXRlZ3kiLCJzcmMiLCJHQV9UUkFDS0lOR19JRCIsImlkIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "next/script":
/*!******************************!*\
  !*** external "next/script" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/script");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();