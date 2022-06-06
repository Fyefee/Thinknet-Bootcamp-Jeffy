"use strict";
(() => {
var exports = {};
exports.id = 12;
exports.ids = [12];
exports.modules = {

/***/ 270:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
const questions = __webpack_require__(905);

function handler(req, res) {
  res.send(questions);
}

/***/ }),

/***/ 905:
/***/ ((module) => {

module.exports = JSON.parse('[{"id":"c1","name":"ข้อไหนเป็นสัตว์ปีก","choice":[{"id":1,"text":"หมู"},{"id":2,"text":"หมา"},{"id":3,"text":"กา"},{"id":4,"text":"แมว"}],"answerId":3},{"id":"c2","name":"สีไหนไม่อยู่ในแม่สี","choice":[{"id":1,"text":"แดง"},{"id":2,"text":"เหลือง"},{"id":3,"text":"น้ำเงิน"},{"id":4,"text":"ม่วง"}],"answerId":4},{"id":"c3","name":"ข้อ 1 ถูกต้อง","choice":[{"id":1,"text":"ตอบข้อ 1"},{"id":2,"text":"ตอบข้อ 2"},{"id":3,"text":"ตอบข้อ 3"},{"id":4,"text":"ตอบข้อ 4"}],"answerId":1},{"id":"c4","name":"ข้อ 2 ถูกต้อง","choice":[{"id":1,"text":"ตอบข้อ 1"},{"id":2,"text":"ตอบข้อ 2"},{"id":3,"text":"ตอบข้อ 3"},{"id":4,"text":"ตอบข้อ 4"}],"answerId":2},{"id":"c5","name":"ข้อ 3 ถูกต้อง","choice":[{"id":1,"text":"ตอบข้อ 1"},{"id":2,"text":"ตอบข้อ 2"},{"id":3,"text":"ตอบข้อ 3"},{"id":4,"text":"ตอบข้อ 4"}],"answerId":3}]');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(270));
module.exports = __webpack_exports__;

})();