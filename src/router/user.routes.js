import { Router } from 'express'
import { userLogin, userRegister, usersGet, userDelete, userById } from '../controllers/user.controller.js'
import validateToken from '../middleware/validateToken.js'

const router = Router()

router.post('/login', userLogin)

router.get('/users', validateToken, usersGet)

router.post('/register', userRegister)

router.delete('/user', validateToken, userDelete)

router.get('/user', validateToken, userById)

export default router
