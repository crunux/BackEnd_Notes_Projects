import { Router } from 'express'
import { getNotes, createNote, getNoteById, updatedNote, deleteNote } from '../controllers/notes.controller.js'
import validateToken from '../middleware/validateToken.js'

const router = Router()

router.get('/notes', validateToken, getNotes)

router.get('/note/:id', validateToken, getNoteById)

router.post('/notes', validateToken, createNote)

router.put('/note/:id', validateToken, updatedNote)

router.delete('/note/:id', validateToken, deleteNote)

export default router
