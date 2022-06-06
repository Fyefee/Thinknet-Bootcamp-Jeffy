"use strict";
exports.id = 451;
exports.ids = [451];
exports.modules = {

/***/ 533:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ AppHeader)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);




const {
  Header
} = antd__WEBPACK_IMPORTED_MODULE_1__.Layout; // Page Header Styled Component

const StyledHeader = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(Header).withConfig({
  displayName: "Header__StyledHeader",
  componentId: "sc-1f92u2p-0"
})(["background-color:salmon;padding:1rem 2rem;display:flex;justify-content:space-between;align-items:center;color:#fff;"]);
function AppHeader(props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(StyledHeader, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("p", {
      children: "\u0E42\u0E1B\u0E23\u0E41\u0E01\u0E23\u0E21\u0E17\u0E33\u0E02\u0E49\u0E2D\u0E2A\u0E2D\u0E1A\u0E2D\u0E2D\u0E19\u0E44\u0E25\u0E19\u0E4C"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("p", {
      children: props.userName
    })]
  });
}

/***/ }),

/***/ 464:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => (/* binding */ getIsFinished),
/* harmony export */   "v": () => (/* binding */ getUserName)
/* harmony export */ });
const getUserName = state => state.user.userName;
const getIsFinished = state => state.user.isFinished;

/***/ })

};
;