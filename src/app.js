import express from 'express'
import morgan from 'morgan'
import userRoutes from './router/user.routes.js'
import noteRoutes from './router/note.routes.js'
import cors from 'cors'
import { connectDB } from './db/db.config.js'

import { routeNotFound } from './middleware/routeNotFound.js'
import { handleErrors } from './middleware/handleErrors.js'

const app = express()

connectDB()

app.use(morgan('tiny'))
app.use(cors())

app.use(express.json())
app.use('/api', userRoutes)
app.use('/api', noteRoutes)

app.use(routeNotFound)
app.use(handleErrors)

export default app
