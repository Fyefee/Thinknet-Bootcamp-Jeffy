const express = require('express')
const studentController = require('./controllers/student')

const router = express.Router()

router
  .get('/students', studentController.getAllStudents)
  .post('/students', studentController.createStudent)
  .get('/students/:id', studentController.getStudentById)
  .put('/students/:id', studentController.updateStudentById)
  .delete('/students/:id', studentController.deleteStudentById)

module.exports = router