import studentService from '../services/student'

const createStudent = async (req, res) => {
  const payload = req.body
  try {
    const student = await studentService.createStudent(payload)
    if (!student) {
      res.status(400).send('Create Fail (Maybe Student ID Duplicate)')
      return
    }
    res.status(201).json(student)
  } catch (e) {
    res.status(400).send('Something Wrong')
  }
}

const getAllStudents = async (req, res) => {
  try {
    const students = await studentService.getAllStudents()
    if (students.length === 0) {
      res.status(200).send('Not have any student in database')
      return
    }
    res.status(200).json(students)
  } catch (e) {
    res.status(400).send('Something Wrong')
  }
}

const getStudentById = async (req, res) => {
  const { id } = req.params
  try {
    const student = await studentService.getStudentById(id)
    if (!student) {
      res.status(400).send(`Not have student ID: ${id} in database`)
      return
    }
    res.status(200).json(student)
  } catch (e) {
    res.status(400).send('Something Wrong')
  }
}

const updateStudentById = async (req, res) => {
  const { id } = req.params
  const payload = req.body
  try {
    const student = await studentService.updateStudentById(id, payload)
    if (!student) {
      res.status(400).send(`Not have student ID: ${id} in database`)
      return
    }
    res.status(200).json(student)
  } catch (e) {
    res.status(400).send('Something Wrong')
  }
}

const deleteStudentById = async (req, res) => {
  const { id } = req.params
  try {
    const student = await studentService.deleteStudentById(id)
    if (student.deletedCount === 0){
      res.status(400).send(`Not have student ID: ${id} in database`)
      return
    } 
    res.status(200).send(`Delete Student ID: ${id} Complete`)
  } catch (e) {
    res.status(400).send('Something Wrong')
  }
}

const getGpaxById = async (req, res) => {
  const { id } = req.params
  try {
    const gpax = await studentService.getGpaxById(id)
    if (!gpax) {
      res.status(400).send(`Not have student ID: ${id} in database`)
      return
    } else {
      res.status(200).send(gpax)
    }
  } catch (e) {
    res.status(400).send('Something Wrong')
  }
}

export {
  createStudent,
  getAllStudents,
  getStudentById,
  updateStudentById,
  deleteStudentById,
  getGpaxById,
}