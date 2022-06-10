const express = require('express')
const studentController = require('./controllers/student')
import validator from './requests/index'

import { cacheWithRedis } from './connection/redis'

const router = express.Router()

const onlyStatus200 = (req, res) => res.statusCode === 200

router
  .get('/students', cacheWithRedis('5 minutes', onlyStatus200), studentController.getAllStudents)
  .post('/students', validator.createStudent, studentController.createStudent)
  .get('/students/:id', validator.validateById, studentController.getStudentById)
  .put('/students/:id', validator.updateStudent, studentController.updateStudentById)
  .delete('/students/:id', validator.validateById, studentController.deleteStudentById)
  .get('/students/:id/gpax', validator.validateById, studentController.getGpaxById)

module.exports = router