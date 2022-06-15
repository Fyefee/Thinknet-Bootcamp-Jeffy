import studentModel from '../models/student'

const createStudent = async (payload) => {
  try {
    const student = await studentModel.create(payload)
    return student
  } catch (e) {
    console.log(e)
    return null
  }
}

const getAllStudents = async () => {
  try {
    const students = await studentModel.find()
    return students
  } catch (e) {
    console.log(e)
  }
}

const getStudentById = async (id) => {
  try {
    const student = await studentModel.findOne({ id })
    return student
  } catch (e) {
    console.log(e)
  }
}

const updateStudentById = async (id, payload) => {
  try {
    const student = await studentModel.findOneAndUpdate({ id }, payload, { new: true })
    return student
  } catch (e) {
    console.log(e)
  }
}

const deleteStudentById = async (id) => {
  try {
    const student = await studentModel.deleteOne({ id })
    return student
  } catch (e) {
    console.log(e)
  }
}

const getGpaxById = async (id) => {
  try {
    const student = await studentModel.findOne({ id })
    if (!student) {
      return null
    }
    let gpaSum = 0
    student?.gpa?.forEach(gpa => {
      gpaSum += gpa.gpa
    })
    const gpax = gpaSum / student?.gpa?.length
    return `Student's ID ${id} have GPAX: ${gpax}`
  } catch (e) {
    console.log(e)
  }
}

export default {
  createStudent,
  getAllStudents,
  getStudentById,
  updateStudentById,
  deleteStudentById,
  getGpaxById,
}