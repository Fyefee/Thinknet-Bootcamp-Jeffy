const Student = require('./schemas/student')

const create = (data, options) => Student.create(data, options)

const find = (query = {}, fields = {}, options = {}) => Student.find(query, fields, options).lean()

const findOne = (query = {}, fields = {}, options = {}) => Student.findOne(query, fields, options).lean()

const findOneAndUpdate = (query = {}, fields = {}, options = {}) => Student.findOneAndUpdate(query, fields, options).exec()

const deleteOne = (query = {}) => Student.deleteOne(query)

export default {
  create,
  find,
  findOne,
  findOneAndUpdate,
  deleteOne,
}