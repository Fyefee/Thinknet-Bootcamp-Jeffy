(() => {
var exports = {};
exports.id = 132;
exports.ids = [132];
exports.modules = {

/***/ 448:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ChangeNameModal)
/* harmony export */ });
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NameForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(332);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_NameForm__WEBPACK_IMPORTED_MODULE_1__]);
_NameForm__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



function ChangeNameModal(props) {
  const {
    submitForm,
    isModalOpen,
    closeModal
  } = props;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(antd__WEBPACK_IMPORTED_MODULE_0__.Modal, {
    centered: true,
    title: "\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E0A\u0E37\u0E48\u0E2D\u0E1C\u0E39\u0E49\u0E17\u0E33\u0E02\u0E49\u0E2D\u0E2A\u0E2D\u0E1A",
    visible: isModalOpen,
    onCancel: closeModal,
    footer: null,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
      className: "d-flex justify-content-center align-items-center",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_NameForm__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        buttonText: "\u0E41\u0E01\u0E49\u0E44\u0E02\u0E0A\u0E37\u0E48\u0E2D",
        submitForm: name => submitForm(name)
      })
    })
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 32:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ QuestionForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_Question_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8);
/* harmony import */ var _styles_Question_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Question_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(641);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_3__]);
react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




 // Edit Name Button Styled Component



const EditNameButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(antd__WEBPACK_IMPORTED_MODULE_2__.Button).withConfig({
  displayName: "QuestionForm__EditNameButton",
  componentId: "sc-1eafxit-0"
})(["width:10rem !important;height:2.25rem;margin-top:1rem;background-color:salmon;border-color:orangered;&:hover{background-color:salmon;}&:focus{background-color:salmon;}@media (max-width:575.98px){width:100%;}"]); // Question Navigation Button Styled Component

const PageButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(antd__WEBPACK_IMPORTED_MODULE_2__.Button).withConfig({
  displayName: "QuestionForm__PageButton",
  componentId: "sc-1eafxit-1"
})(["width:4rem !important;height:2.25rem;margin-top:1rem;background-color:salmon;border-color:orangered;border-radius:0;&:hover{background-color:salmon;}&:focus{background-color:salmon;}&:first-child{width:2.75rem !important;border-radius:3rem 0 0 3rem}&:last-child{width:2.75rem !important;border-radius:0 3rem 3rem 0}@media (max-width:575.98px){width:100%;}"]); // Radio Input Styled Component

const StyledRadio = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(antd__WEBPACK_IMPORTED_MODULE_2__.Radio).withConfig({
  displayName: "QuestionForm__StyledRadio",
  componentId: "sc-1eafxit-2"
})(["font-size:1.1rem;word-break:break-word;.ant-radio-wrapper{display:flex;align-items:center;}"]); // Form Styled Component

const StyledForm = styled_components__WEBPACK_IMPORTED_MODULE_1___default()('form').withConfig({
  displayName: "QuestionForm__StyledForm",
  componentId: "sc-1eafxit-3"
})(["width:20rem;@media (max-width:575.98px){width:100%;padding:0 10vw;}"]); // Question Text Styled Component

const Question = styled_components__WEBPACK_IMPORTED_MODULE_1___default()('p').withConfig({
  displayName: "QuestionForm__Question",
  componentId: "sc-1eafxit-4"
})(["font-size:1.2rem;word-wrap:break-word;"]);
function QuestionForm(props) {
  var _errors$answerId;

  const {
    question,
    questionCount,
    goNext,
    goBack,
    saveResult,
    openModal,
    testResult
  } = props;
  const {
    formState: {
      errors
    },
    handleSubmit,
    control,
    reset
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useForm)();

  const onSubmit = (data, isNext) => {
    // Reset Form and Check which Button clicked
    if (isNext) {
      reset({
        answerId: ''
      });
      goNext(data);
    } else {
      saveResult(data);
    }
  };

  const {
    0: answerId,
    1: setAnswerId
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''); // Check if already answer question and set answer to form

  const setDefaultValue = () => {
    const resultMap = new Map(Object.entries(testResult));
    const oldAnswerId = resultMap.get(question.id);

    if (oldAnswerId) {
      setAnswerId(oldAnswerId);
      reset({
        answerId: oldAnswerId
      });
    }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setDefaultValue();
  }, [question]); // Reset Form before go back to past question

  const goBackHandler = () => {
    reset();
    goBack();
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(StyledForm, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(Question, {
      children: `${questionCount}. ${question.name}`
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "vstack pt-2",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_3__.Controller, {
        name: "answerId",
        control: control,
        rules: {
          required: true
        },
        defaultValue: answerId,
        render: ({
          field: {
            onChange,
            value
          }
        }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Radio.Group, {
          onChange: onChange,
          value: value,
          size: "large",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Space, {
            direction: "vertical",
            children: question.choice.map((choice, index) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(StyledRadio, {
              value: choice.id,
              children: choice.text
            }, `choice-${index}`))
          })
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("p", {
        className: "errorText",
        children: ((_errors$answerId = errors.answerId) === null || _errors$answerId === void 0 ? void 0 : _errors$answerId.type) === "required" && "โปรดเลือกคำตอบ"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: (_styles_Question_module_css__WEBPACK_IMPORTED_MODULE_5___default().buttonBox),
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(EditNameButton, {
        className: "btn btn-danger",
        onClick: () => openModal(),
        children: "\u0E41\u0E01\u0E49\u0E44\u0E02\u0E0A\u0E37\u0E48\u0E2D"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "hstack w-auto",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(PageButton, {
          className: "btn btn-danger",
          onClick: () => goBackHandler(),
          children: '<'
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(PageButton, {
          className: "btn btn-danger",
          onClick: handleSubmit(data => onSubmit(data, false)),
          children: 'Save'
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(PageButton, {
          className: "btn btn-danger",
          onClick: handleSubmit(data => onSubmit(data, true)),
          children: '>'
        })]
      })]
    })]
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 802:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Question),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shared_json_question_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(618);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(533);
/* harmony import */ var _components_QuestionForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(32);
/* harmony import */ var _components_ChangeNameModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(448);
/* harmony import */ var _redux_actions_userAction__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(464);
/* harmony import */ var _redux_actions_questionAction__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(847);
/* harmony import */ var _utils_checkUserName__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(345);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_QuestionForm__WEBPACK_IMPORTED_MODULE_6__, _components_ChangeNameModal__WEBPACK_IMPORTED_MODULE_7__]);
([_components_QuestionForm__WEBPACK_IMPORTED_MODULE_6__, _components_ChangeNameModal__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













const {
  Content
} = antd__WEBPACK_IMPORTED_MODULE_1__.Layout;
function Question(props) {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  const userName = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_redux_actions_userAction__WEBPACK_IMPORTED_MODULE_9__/* .getUserName */ .v);
  const isFinished = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_redux_actions_userAction__WEBPACK_IMPORTED_MODULE_9__/* .getIsFinished */ .e);
  const testResult = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_redux_actions_questionAction__WEBPACK_IMPORTED_MODULE_10__/* .getResult */ .S);
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  const {
    question,
    questionLangth,
    pageIndex
  } = props;
  const {
    0: isModalOpen,
    1: setIsModalOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false); // Check if not set Username and Check is in Finish state


  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!(0,_utils_checkUserName__WEBPACK_IMPORTED_MODULE_11__/* .checkUserName */ .y)(userName)) {
      router.push("/");
    }

    if (isFinished) {
      router.push("/result");
    }
  }, [question]); // Next Question Button Handler (Save answer and if in last question redirect to Result Page)

  const nextButtonHandler = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(data => {
    saveResult(data);

    if (pageIndex === questionLangth) {
      dispatch({
        type: "FINISHTEST"
      });
      router.replace('/result');
    } else {
      router.replace(`/question/${pageIndex + 1}`);
    }
  }); // Back Question Button Handler (check if in first question)

  const backButtonHandler = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    if (pageIndex === 1) {
      router.push('/');
    } else {
      router.replace(`/question/${pageIndex - 1}`);
    }
  }); // Edit Username

  const editUserName = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(name => {
    // Set Username to Redux persist
    dispatch({
      type: "ADDUSER",
      userName: name
    });
    closeModal();
  }, [dispatch]); // Add or Edit answer to Redux

  const saveResult = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(data => {
    dispatch({
      type: "ADDRESULT",
      questionId: question.id,
      answerId: data.answerId
    });
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__.Layout, {
    className: "layout-background",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_components_Header__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
      userName: userName
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(Content, {
      className: "container justify-content-center align-items-center d-flex pt-5",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_components_QuestionForm__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        question: question,
        questionCount: pageIndex,
        goNext: data => nextButtonHandler(data),
        goBack: () => backButtonHandler(),
        saveResult: data => saveResult(data),
        openModal: () => openModal(),
        testResult: testResult
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_components_ChangeNameModal__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
      isModalOpen: isModalOpen,
      closeModal: () => closeModal(),
      submitForm: name => editUserName(name)
    })]
  });
} // Get All Question Path

const getStaticPaths = async () => {
  const questions = _shared_json_question_json__WEBPACK_IMPORTED_MODULE_4__;
  const pathList = questions.map((question, index) => ({
    params: {
      index: (index + 1).toString()
    }
  }));
  return {
    paths: pathList,
    fallback: false
  };
}; // Get Question's Data

async function getStaticProps({
  params
}) {
  const question = _shared_json_question_json__WEBPACK_IMPORTED_MODULE_4__[params.index - 1];
  return {
    props: {
      question,
      questionLangth: _shared_json_question_json__WEBPACK_IMPORTED_MODULE_4__.length,
      pageIndex: parseInt(params.index)
    }
  };
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 847:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ getResult)
/* harmony export */ });
const getResult = state => state.question.result;

/***/ }),

/***/ 345:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ checkUserName)
/* harmony export */ });
const checkUserName = userName => {
  if (!userName || userName === "") {
    return false;
  }

  return true;
};

/***/ }),

/***/ 8:
/***/ ((module) => {

// Exports
module.exports = {
	"buttonBox": "Question_buttonBox__yo6QM"
};


/***/ }),

/***/ 725:
/***/ ((module) => {

"use strict";
module.exports = require("antd");

/***/ }),

/***/ 853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 22:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 518:
/***/ ((module) => {

"use strict";
module.exports = require("styled-components");

/***/ }),

/***/ 641:
/***/ ((module) => {

"use strict";
module.exports = import("react-hook-form");;

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"id":"c1","name":"ข้อไหนเป็นสัตว์ปีก","choice":[{"id":1,"text":"หมู"},{"id":2,"text":"หมา"},{"id":3,"text":"กา"},{"id":4,"text":"แมว"}],"answerId":3},{"id":"c2","name":"สีไหนไม่อยู่ในแม่สี","choice":[{"id":1,"text":"แดง"},{"id":2,"text":"เหลือง"},{"id":3,"text":"น้ำเงิน"},{"id":4,"text":"ม่วง"}],"answerId":4},{"id":"c3","name":"ข้อ 1 ถูกต้อง","choice":[{"id":1,"text":"ตอบข้อ 1"},{"id":2,"text":"ตอบข้อ 2"},{"id":3,"text":"ตอบข้อ 3"},{"id":4,"text":"ตอบข้อ 4"}],"answerId":1},{"id":"c4","name":"ข้อ 2 ถูกต้อง","choice":[{"id":1,"text":"ตอบข้อ 1"},{"id":2,"text":"ตอบข้อ 2"},{"id":3,"text":"ตอบข้อ 3"},{"id":4,"text":"ตอบข้อ 4"}],"answerId":2},{"id":"c5","name":"ข้อ 3 ถูกต้อง","choice":[{"id":1,"text":"ตอบข้อ 1"},{"id":2,"text":"ตอบข้อ 2"},{"id":3,"text":"ตอบข้อ 3"},{"id":4,"text":"ตอบข้อ 4"}],"answerId":3}]');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [451,332], () => (__webpack_exec__(802)));
module.exports = __webpack_exports__;

})();