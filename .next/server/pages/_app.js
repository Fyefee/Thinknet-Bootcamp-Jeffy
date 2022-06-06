(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 60:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(22);
;// CONCATENATED MODULE: external "next-redux-wrapper"
const external_next_redux_wrapper_namespaceObject = require("next-redux-wrapper");
;// CONCATENATED MODULE: external "redux-persist/integration/react"
const react_namespaceObject = require("redux-persist/integration/react");
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
;// CONCATENATED MODULE: external "@reduxjs/toolkit"
const toolkit_namespaceObject = require("@reduxjs/toolkit");
;// CONCATENATED MODULE: external "redux-persist"
const external_redux_persist_namespaceObject = require("redux-persist");
;// CONCATENATED MODULE: external "redux-persist/lib/storage/createWebStorage"
const createWebStorage_namespaceObject = require("redux-persist/lib/storage/createWebStorage");
;// CONCATENATED MODULE: ./redux/store/storage.js


const createNoopStorage = () => {
  return {
    getItem(_key) {
      return Promise.resolve(null);
    },

    setItem(_key, value) {
      return Promise.resolve(value);
    },

    removeItem(_key) {
      return Promise.resolve();
    }

  };
};

const storage =  false ? 0 : createNoopStorage();
/* harmony default export */ const store_storage = (storage);
;// CONCATENATED MODULE: external "redux-devtools-extension"
const external_redux_devtools_extension_namespaceObject = require("redux-devtools-extension");
;// CONCATENATED MODULE: ./redux/reducers/userReducer.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const userStorage =  false ? 0 : null;
const user = userStorage ? JSON.parse(userStorage) : null;
const initialState = {
  userName: (user === null || user === void 0 ? void 0 : user.userName) || '',
  isFinished: (user === null || user === void 0 ? void 0 : user.isFinished) || false
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADDUSER":
      return _objectSpread(_objectSpread({}, state), {}, {
        userName: action.userName
      });

    case 'CLEARUSER':
      return _objectSpread(_objectSpread({}, state), {}, {
        userName: ''
      });

    case 'FINISHTEST':
      return _objectSpread(_objectSpread({}, state), {}, {
        isFinished: true
      });

    case 'STARTTEST':
      return _objectSpread(_objectSpread({}, state), {}, {
        isFinished: false
      });

    default:
      return _objectSpread({}, state);
  }
};

/* harmony default export */ const reducers_userReducer = (userReducer);
;// CONCATENATED MODULE: ./redux/reducers/questionReducer.js
function questionReducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function questionReducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { questionReducer_ownKeys(Object(source), true).forEach(function (key) { questionReducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { questionReducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function questionReducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const questionStorage =  false ? 0 : null;
const question = questionStorage ? JSON.parse(questionStorage) : null;
const questionReducer_initialState = {
  result: (question === null || question === void 0 ? void 0 : question.result) || {}
};

const questionReducer = (state = questionReducer_initialState, action) => {
  switch (action.type) {
    case "ADDRESULT":
      return questionReducer_objectSpread(questionReducer_objectSpread({}, state), {}, {
        result: addResult(state, action.questionId, action.answerId)
      });

    case 'CLEARRESULT':
      return questionReducer_objectSpread(questionReducer_objectSpread({}, state), {}, {
        result: {}
      });

    default:
      return questionReducer_objectSpread({}, state);
  }
};

const addResult = (state, questionId, answerId) => {
  const resultMap = new Map(Object.entries(state.result));
  resultMap.set(questionId, answerId);
  const resultObj = Object.fromEntries(resultMap);
  return resultObj;
};

/* harmony default export */ const reducers_questionReducer = (questionReducer);
;// CONCATENATED MODULE: ./redux/store/store.js






const userPersistConfig = {
  key: "user",
  version: 1,
  storage: store_storage
};
const questionPersistConfig = {
  key: "question",
  version: 1,
  storage: store_storage
};
const userPersistedReducer = (0,external_redux_persist_namespaceObject.persistReducer)(userPersistConfig, reducers_userReducer);
const questionPersistedReducer = (0,external_redux_persist_namespaceObject.persistReducer)(questionPersistConfig, reducers_questionReducer);
const store = (0,toolkit_namespaceObject.configureStore)({
  reducer: {
    user: userPersistedReducer,
    question: questionPersistedReducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: false
  })
}, external_redux_devtools_extension_namespaceObject.composeWithDevTools);
const persistor = (0,external_redux_persist_namespaceObject.persistStore)(store);
/* harmony default export */ const store_store = (store);
// EXTERNAL MODULE: ./node_modules/antd/dist/antd.css
var antd = __webpack_require__(722);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./pages/_app.js
function _app_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _app_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _app_ownKeys(Object(source), true).forEach(function (key) { _app_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _app_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(external_react_redux_.Provider, {
    store: store_store,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_namespaceObject.PersistGate, {
      loading: null,
      persistor: persistor,
      children: [/*#__PURE__*/jsx_runtime_.jsx((head_default()), {
        children: /*#__PURE__*/jsx_runtime_.jsx("title", {
          children: "Online Test Program"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(Component, _app_objectSpread({}, pageProps))]
    })
  });
}

const makeStore = () => store_store;

const wrapper = (0,external_next_redux_wrapper_namespaceObject.createWrapper)(makeStore);
/* harmony default export */ const _app = (wrapper.withRedux(MyApp));

/***/ }),

/***/ 722:
/***/ (() => {



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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(60));
module.exports = __webpack_exports__;

})();