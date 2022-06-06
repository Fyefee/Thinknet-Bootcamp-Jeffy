"use strict";
exports.id = 332;
exports.ids = [332];
exports.modules = {

/***/ 332:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ NameForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(641);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_3__]);
react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



 // Textfield Input Styled Component



const StyledInput = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(antd__WEBPACK_IMPORTED_MODULE_2__.Input).withConfig({
  displayName: "NameForm__StyledInput",
  componentId: "sc-purz9v-0"
})(["width:20rem;height:3rem;padding:0.2rem 0.5rem;@media (max-width:575.98px){width:100%;}"]); // Submit Form Button Styled Component

const StyledButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(antd__WEBPACK_IMPORTED_MODULE_2__.Button).withConfig({
  displayName: "NameForm__StyledButton",
  componentId: "sc-purz9v-1"
})(["width:20rem;height:2.5rem;margin-top:1rem;background-color:salmon;border-color:orangered;&:hover{background-color:salmon;}&:focus{background-color:salmon;}@media (max-width:575.98px){width:100%;}"]); // Username Form Styled Component

const StyledForm = styled_components__WEBPACK_IMPORTED_MODULE_1___default()('form').withConfig({
  displayName: "NameForm__StyledForm",
  componentId: "sc-purz9v-2"
})(["@media (max-width:575.98px){width:100%;padding:0 5vw;}"]);
function NameForm(props) {
  var _errors$userName;

  const {
    0: userName,
    1: setUserName
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const {
    submitForm,
    buttonText
  } = props; // Form Handler

  const {
    formState: {
      errors
    },
    handleSubmit,
    control
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useForm)();

  const onSubmit = data => {
    submitForm(data.userName);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(StyledForm, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "vstack",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_3__.Controller, {
        name: "userName",
        control: control,
        rules: {
          required: true
        },
        defaultValue: userName,
        render: ({
          field: {
            onChange,
            value
          }
        }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(StyledInput, {
          size: "large",
          placeholder: "\u0E0A\u0E37\u0E48\u0E2D\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13",
          onChange: onChange,
          value: value
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("p", {
        className: "errorText",
        children: ((_errors$userName = errors.userName) === null || _errors$userName === void 0 ? void 0 : _errors$userName.type) === "required" && "โปรดระบุชื่อ"
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(StyledButton, {
      onClick: handleSubmit(onSubmit),
      className: "btn btn-danger",
      children: buttonText
    })]
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;