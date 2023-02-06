"use strict";
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
exports.id = "pages/api/queue/[id]";
exports.ids = ["pages/api/queue/[id]"];
exports.modules = {

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ "(api)/./pages/api/queue/[id].js":
/*!*********************************!*\
  !*** ./pages/api/queue/[id].js ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);\naxios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n\nasync function handler(req, res) {\n    const { id  } = req.query;\n    const config = {\n        headers: {\n            Authorization: `Bearer ${process.env.TOKEN_FACEIT}`\n        }\n    };\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(`https://api.faceit.com/queue/v1/player/${id}?limit=15`, config);\n        res.status(200).json(response.data);\n    } catch (error) {\n        console.log(error);\n        res.status(400).json({\n            error: error.message\n        });\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcXVldWUvW2lkXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLDZFQUE2RTtBQUNuRDtBQUNYLGVBQWVDLFFBQVFDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzlDLE1BQU0sRUFBRUMsR0FBRSxFQUFFLEdBQUdGLElBQUlHLEtBQUs7SUFDeEIsTUFBTUMsU0FBUztRQUNiQyxTQUFTO1lBQUVDLGVBQWUsQ0FBQyxPQUFPLEVBQUVDLFFBQVFDLEdBQUcsQ0FBQ0MsWUFBWSxDQUFDLENBQUM7UUFBQztJQUNqRTtJQUNBLElBQUk7UUFDRixNQUFNQyxXQUFXLE1BQU1aLGlEQUFTLENBQzlCLENBQUMsdUNBQXVDLEVBQUVJLEdBQUcsU0FBUyxDQUFDLEVBQ3ZERTtRQUVGSCxJQUFJVyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDSCxTQUFTSSxJQUFJO0lBQ3BDLEVBQUUsT0FBT0MsT0FBTztRQUNkQyxRQUFRQyxHQUFHLENBQUNGO1FBQ1pkLElBQUlXLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUUsT0FBT0EsTUFBTUcsT0FBTztRQUFDO0lBQzlDO0FBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dhdGNoLWZwbC8uL3BhZ2VzL2FwaS9xdWV1ZS9baWRdLmpzP2Y3OGUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTmV4dC5qcyBBUEkgcm91dGUgc3VwcG9ydDogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvYXBpLXJvdXRlcy9pbnRyb2R1Y3Rpb25cbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgY29uc3QgeyBpZCB9ID0gcmVxLnF1ZXJ5O1xuICBjb25zdCBjb25maWcgPSB7XG4gICAgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7cHJvY2Vzcy5lbnYuVE9LRU5fRkFDRUlUfWAgfSxcbiAgfTtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChcbiAgICAgIGBodHRwczovL2FwaS5mYWNlaXQuY29tL3F1ZXVlL3YxL3BsYXllci8ke2lkfT9saW1pdD0xNWAsXG4gICAgICBjb25maWdcbiAgICApO1xuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHJlc3BvbnNlLmRhdGEpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfSlcbiAgfVxufVxuIl0sIm5hbWVzIjpbImF4aW9zIiwiaGFuZGxlciIsInJlcSIsInJlcyIsImlkIiwicXVlcnkiLCJjb25maWciLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInByb2Nlc3MiLCJlbnYiLCJUT0tFTl9GQUNFSVQiLCJyZXNwb25zZSIsImdldCIsInN0YXR1cyIsImpzb24iLCJkYXRhIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/queue/[id].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/queue/[id].js"));
module.exports = __webpack_exports__;

})();