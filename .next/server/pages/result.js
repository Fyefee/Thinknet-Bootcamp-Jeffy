(() => {
var exports = {};
exports.id = 968;
exports.ids = [968];
exports.modules = {

/***/ 338:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ResultPage),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(725);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(22);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(853);
// EXTERNAL MODULE: ./shared/json/question.json
var question = __webpack_require__(618);
// EXTERNAL MODULE: ./redux/actions/userAction.js
var userAction = __webpack_require__(464);
// EXTERNAL MODULE: ./redux/actions/questionAction.js
var questionAction = __webpack_require__(847);
// EXTERNAL MODULE: ./components/Header.jsx
var Header = __webpack_require__(533);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./styles/Question.module.css
var Question_module = __webpack_require__(8);
var Question_module_default = /*#__PURE__*/__webpack_require__.n(Question_module);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/test-result/ResultError.jsx




 // Button Styled Component




const StyledButton = external_styled_components_default()(external_antd_.Button).withConfig({
  displayName: "ResultError__StyledButton",
  componentId: "sc-z92si3-0"
})(["width:10rem !important;height:2.25rem;margin-top:1rem;background-color:salmon;border-color:orangered;&:hover{background-color:salmon;}&:focus{background-color:salmon;}@media (max-width:575.98px){width:100% !important;}"]);
function ResultError() {
  const dispatch = (0,external_react_redux_.useDispatch)();
  const router = (0,router_.useRouter)(); // Handle Back to Main Page Button

  const backToMainPage = () => {
    dispatch({
      type: 'STARTTEST'
    });
    router.push('/');
  }; // Handle Back to Question Button


  const backToQuestionPage = () => {
    dispatch({
      type: 'STARTTEST'
    });
    router.push('/question/1');
  };

  return /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Result, {
    status: "warning",
    title: "\u0E40\u0E01\u0E34\u0E14\u0E1B\u0E31\u0E0D\u0E2B\u0E32\u0E2D\u0E30\u0E44\u0E23\u0E1A\u0E49\u0E32\u0E07\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E01\u0E31\u0E1A\u0E1C\u0E25\u0E2A\u0E2D\u0E1A",
    extra: /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
        className: "errorText mb-3",
        children: "** \u0E2D\u0E32\u0E08\u0E40\u0E01\u0E34\u0E14\u0E08\u0E32\u0E01\u0E01\u0E32\u0E23\u0E17\u0E33\u0E02\u0E49\u0E2D\u0E2A\u0E2D\u0E1A\u0E44\u0E21\u0E48\u0E04\u0E23\u0E1A **"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (Question_module_default()).buttonBox,
        children: [/*#__PURE__*/jsx_runtime_.jsx(StyledButton, {
          className: "btn btn-danger",
          onClick: () => backToMainPage(),
          children: "\u0E01\u0E25\u0E31\u0E1A\u0E2A\u0E39\u0E48\u0E2B\u0E19\u0E49\u0E32\u0E2B\u0E25\u0E31\u0E01"
        }), /*#__PURE__*/jsx_runtime_.jsx(StyledButton, {
          className: "btn btn-danger",
          onClick: () => backToQuestionPage(),
          children: "\u0E01\u0E25\u0E31\u0E1A\u0E2A\u0E39\u0E48\u0E02\u0E49\u0E2D\u0E2A\u0E2D\u0E1A"
        })]
      })]
    })
  });
}
;// CONCATENATED MODULE: ./components/test-result/ResultNotPass.jsx



 // Button Styled Component




const ResultNotPass_StyledButton = external_styled_components_default()(external_antd_.Button).withConfig({
  displayName: "ResultNotPass__StyledButton",
  componentId: "sc-13ye6j3-0"
})(["width:10rem !important;height:2.25rem;margin-top:1rem;background-color:salmon;border-color:orangered;&:hover{background-color:salmon;}&:focus{background-color:salmon;}@media (max-width:575.98px){width:100% !important;}"]); // Result Styled Component (Change title color)

const NotPassResult = external_styled_components_default()(external_antd_.Result).withConfig({
  displayName: "ResultNotPass__NotPassResult",
  componentId: "sc-13ye6j3-1"
})([".ant-result-title{color:#F00}"]);
function ResultNotPass(props) {
  const dispatch = (0,external_react_redux_.useDispatch)();
  const router = (0,router_.useRouter)();
  const {
    userName,
    testScore,
    maxScore
  } = props;

  const backToMainPage = () => {
    dispatch({
      type: 'STARTTEST'
    });
    router.push('/');
  };

  return /*#__PURE__*/jsx_runtime_.jsx(NotPassResult, {
    status: "error",
    title: "\u0E40\u0E2A\u0E35\u0E22\u0E43\u0E08\u0E14\u0E49\u0E27\u0E22\u0E04\u0E38\u0E13\u0E2A\u0E2D\u0E1A\u0E44\u0E21\u0E48\u0E1C\u0E48\u0E32\u0E19",
    extra: /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
        children: `คุณ ${userName} ได้คะแนนรวม ${testScore}/${maxScore} คะแนน`
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "d-flex justify-content-center",
        children: /*#__PURE__*/jsx_runtime_.jsx(ResultNotPass_StyledButton, {
          className: "btn btn-danger",
          onClick: () => backToMainPage(),
          children: "\u0E01\u0E25\u0E31\u0E1A\u0E2A\u0E39\u0E48\u0E2B\u0E19\u0E49\u0E32\u0E2B\u0E25\u0E31\u0E01"
        })
      })]
    })
  });
}
;// CONCATENATED MODULE: ./components/test-result/ResultPass.jsx



 // Button Styled Component




const ResultPass_StyledButton = external_styled_components_default()(external_antd_.Button).withConfig({
  displayName: "ResultPass__StyledButton",
  componentId: "sc-hypyfr-0"
})(["width:10rem !important;height:2.25rem;margin-top:1rem;background-color:salmon;border-color:orangered;&:hover{background-color:salmon;}&:focus{background-color:salmon;}@media (max-width:575.98px){width:100% !important;}"]); // Result Styled Component (Change title color)

const PassResult = external_styled_components_default()(external_antd_.Result).withConfig({
  displayName: "ResultPass__PassResult",
  componentId: "sc-hypyfr-1"
})([".ant-result-title{color:#03c900}"]);
function ResultPass(props) {
  const dispatch = (0,external_react_redux_.useDispatch)();
  const router = (0,router_.useRouter)();
  const {
    userName,
    testScore,
    maxScore
  } = props; // Handle Back to Main Page Button

  const backToMainPage = () => {
    dispatch({
      type: 'STARTTEST'
    });
    router.push('/');
  };

  return /*#__PURE__*/jsx_runtime_.jsx(PassResult, {
    status: "success",
    title: "\u0E22\u0E34\u0E19\u0E14\u0E35\u0E14\u0E49\u0E27\u0E22\u0E04\u0E38\u0E13\u0E2A\u0E2D\u0E1A\u0E1C\u0E48\u0E32\u0E19",
    extra: /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
        children: `คุณ ${userName} ได้คะแนนรวม ${testScore}/${maxScore} คะแนน`
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "d-flex justify-content-center",
        children: /*#__PURE__*/jsx_runtime_.jsx(ResultPass_StyledButton, {
          className: "btn btn-danger",
          onClick: () => backToMainPage(),
          children: "\u0E01\u0E25\u0E31\u0E1A\u0E2A\u0E39\u0E48\u0E2B\u0E19\u0E49\u0E32\u0E2B\u0E25\u0E31\u0E01"
        })
      })]
    })
  });
}
;// CONCATENATED MODULE: ./pages/result/index.js













const {
  Content
} = external_antd_.Layout;
function ResultPage(props) {
  const userName = (0,external_react_redux_.useSelector)(userAction/* getUserName */.v);
  const isFinished = (0,external_react_redux_.useSelector)(userAction/* getIsFinished */.e);
  const testResult = (0,external_react_redux_.useSelector)(questionAction/* getResult */.S);
  const router = (0,router_.useRouter)();
  const {
    questions,
    passScore,
    maxScore
  } = props;
  const {
    0: testScore,
    1: setTestScore
  } = (0,external_react_.useState)(0);
  const {
    0: isError,
    1: setIsError
  } = (0,external_react_.useState)(false); // Check answer score and error in test result

  const checkAnswer = () => {
    let isDoAllQuestion = true;
    let score = 0; // Turn object to map object

    const resultMap = new Map(Object.entries(testResult));

    for (let i = 0; i < questions.length; i++) {
      const answerId = resultMap.get(questions[i].id); // Check if not have question id in map object

      if (!answerId) {
        isDoAllQuestion = false;
      } // Check answer result and increase score


      if (answerId === questions[i].answerId) {
        score += 1;
      }
    }

    setTestScore(score); // Check if have error in test result return error state

    if (!isDoAllQuestion) {
      setIsError(true);
    }
  };

  (0,external_react_.useEffect)(() => {
    // Check if not in Finish Test State it'll redirect to home page
    if (!isFinished) {
      router.push("/");
    }

    checkAnswer();
  }, []); // Render Test Result

  const renderTestResult = () => {
    if (isError) {
      return /*#__PURE__*/jsx_runtime_.jsx(ResultError, {});
    }

    if (testScore < passScore) {
      return /*#__PURE__*/jsx_runtime_.jsx(ResultNotPass, {
        userName: userName,
        maxScore: maxScore,
        testScore: testScore
      });
    } else {
      return /*#__PURE__*/jsx_runtime_.jsx(ResultPass, {
        userName: userName,
        maxScore: maxScore,
        testScore: testScore
      });
    }
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Layout, {
    className: "layout-background",
    children: [/*#__PURE__*/jsx_runtime_.jsx(Header/* default */.Z, {
      userName: userName
    }), /*#__PURE__*/jsx_runtime_.jsx(Content, {
      className: "container justify-content-center align-items-center d-flex pt-5",
      children: renderTestResult()
    })]
  });
}
async function getStaticProps({
  params
}) {
  const passScore = question.length * 4 / 5;
  return {
    props: {
      questions: question,
      passScore,
      maxScore: question.length
    }
  };
}

/***/ }),

/***/ 847:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ getResult)
/* harmony export */ });
const getResult = state => state.question.result;

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

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"id":"c1","name":"ข้อไหนเป็นสัตว์ปีก","choice":[{"id":1,"text":"หมู"},{"id":2,"text":"หมา"},{"id":3,"text":"กา"},{"id":4,"text":"แมว"}],"answerId":3},{"id":"c2","name":"สีไหนไม่อยู่ในแม่สี","choice":[{"id":1,"text":"แดง"},{"id":2,"text":"เหลือง"},{"id":3,"text":"น้ำเงิน"},{"id":4,"text":"ม่วง"}],"answerId":4},{"id":"c3","name":"ข้อ 1 ถูกต้อง","choice":[{"id":1,"text":"ตอบข้อ 1"},{"id":2,"text":"ตอบข้อ 2"},{"id":3,"text":"ตอบข้อ 3"},{"id":4,"text":"ตอบข้อ 4"}],"answerId":1},{"id":"c4","name":"ข้อ 2 ถูกต้อง","choice":[{"id":1,"text":"ตอบข้อ 1"},{"id":2,"text":"ตอบข้อ 2"},{"id":3,"text":"ตอบข้อ 3"},{"id":4,"text":"ตอบข้อ 4"}],"answerId":2},{"id":"c5","name":"ข้อ 3 ถูกต้อง","choice":[{"id":1,"text":"ตอบข้อ 1"},{"id":2,"text":"ตอบข้อ 2"},{"id":3,"text":"ตอบข้อ 3"},{"id":4,"text":"ตอบข้อ 4"}],"answerId":3}]');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [451], () => (__webpack_exec__(338)));
module.exports = __webpack_exports__;

})();