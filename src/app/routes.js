const express = require('express')
const studentController = require('./controllers/student')
import validator from './requests/index'

const router = express.Router()

router
  .get('/students', studentController.getAllStudents)
  .post('/students', validator.createStudent, studentController.createStudent)
  .get('/students/:id', validator.validateById, studentController.getStudentById)
  .put('/students/:id', validator.updateStudent, studentController.updateStudentById)
  .delete('/students/:id', validator.validateById, studentController.deleteStudentById)
  .get('/students/:id/gpax', validator.validateById, studentController.getGpaxById)

module.exports = router