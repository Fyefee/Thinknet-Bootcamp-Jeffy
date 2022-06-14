import userModel from '../models/user'
import formatter from '../libs/formatter'

const getUser = async (req, res) => {
  const { query: { username } } = req

  const result = await userModel.find({ username })

  if (!result) {
    return res.status(404).json({
      message: 'Not found',
    })
  }

  return res.json(formatter.user(result))
}

const createUser = async (req, res) => {
  const { body: { username, firstname, lastname } } = req

  const result = await userModel.create({ username, firstname, lastname })

  return res.json(formatter.user(result.toObject()))
}

const updateUser = async (req, res) => {
  const { body: { username, firstname, lastname } } = req

  const result = await userModel.findOneAndUpdate({ username }, { firstname, lastname })

  return res.json(formatter.user(result))
}

const removeUser = async (req, res) => {
  const { body: { username } } = req

  const result = await userModel.remove({ username })

  return res.json(result)
}

export default {
  getUser,
  createUser,
  updateUser,
  removeUser,
}
