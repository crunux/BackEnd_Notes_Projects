
import jwt from 'jsonwebtoken'
import { SECRET_KEY } from '../config.js'
import User from '../models/user.model.js'
import bcrypt from 'bcrypt'

export const userLogin = async (req, res) => {
  const { username, password } = req.body
  const user = await User.findOne({ username })
  const userAllow = user === null
    ? false
    : bcrypt.compareSync(password, user.passwordHash)

  if (!(user && userAllow)) {
    res.status(404).json({ error: 'username or password invalid' })
  }
  const acessToken = jwt.sign(user.toObject(), SECRET_KEY, { expiresIn: 86400 })
  res.status(202).json({ token: acessToken })
}

export const usersGet = async (req, res) => {
  const user = await User.find({}).populate('notes', {
    content: 1,
    date: 1,
    _id: 0
  })
  res.json(user)
}

export const userDelete = async (req, res, next) => {
  const { userId } = res
  try {
    await User.findByIdAndDelete(userId)
    res.status(204).end()
  } catch (error) {
    next(error)
  }
}

export const userRegister = async (req, res) => {
  const { name, lastname, username, password, email } = req.body
  const saltRound = 12
  try {
    const passwordHash = bcrypt.hashSync(password, saltRound)
    const newUser = new User({
      name, lastname,username, passwordHash, email
    })
    const userSave = await newUser.save()
    res.status(200).json({ userSave })
  } catch (error) {
    res.status(400).json(error)
  }
}

export const userById = async (req, res) => {
  const { userId } = res
  const user = await User.findById(userId).populate('notes', {
    content: 1,
    date: 1,
    _id: 0
  })

  res.status(200).json(user)
}
