const studentModel = require('../models/student')

const createStudent = async (req, res) => {
  const payload = req.body
  try {
    const student = await studentModel.create(payload)
    res.status(201).json(student)
  } catch (e) {
    res.status(400).send('Something Wrong')
  }
}

const getAllStudents = async (req, res) => {
  try {
    const students = await studentModel.find()
    res.status(200).json(students)
  } catch (e) {
    res.status(400).send('Something Wrong')
  }
}

const getStudentById = async (req, res) => {
  const { id } = req.params
  try {
    const student = await studentModel.findOne({ id })
    res.status(200).json(student)
  } catch (e) {
    res.status(400).send('Something Wrong')
  }
}

const updateStudentById = async (req, res) => {
  const { id } = req.params
  const payload = req.body
  try {
    const student = await studentModel.findOneAndUpdate({ id }, payload)
    res.status(200).json(student)
  } catch (e) {
    res.status(400).send('Something Wrong')
  }
}

const deleteStudentById = async (req, res) => {
  const { id } = req.params
  try {
    await studentModel.deleteOne({ id })
    res.status(200).send(`Delete Student ID: ${id} Complete`)
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
}