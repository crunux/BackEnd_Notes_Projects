import { SECRET_KEY } from '../config.js'
import jwt from 'jsonwebtoken'

export default (req, res, next) => {
  const authorization = req.headers.authorization

  let token = ''
  if (authorization && authorization.toLowerCase().startsWith('bearer')) {
    token = authorization.split(' ')[1]
  }

  let tokenDecoded = {}
  try {
    tokenDecoded = jwt.verify(token, SECRET_KEY)
  } catch (error) {
    res.status(404).json({ error })
  }

  if (!token || !tokenDecoded._id) {
    res.status(401).json({ error: 'token missing or invalid' })
  }

  const { _id: userId } = tokenDecoded

  res.userId = userId

  next()
}
