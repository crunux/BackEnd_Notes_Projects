import Note from '../models/notes.model.js'
import User from '../models/user.model.js'

// import { SECRET_KEY } from '../config.js'
// import jwt from 'jsonwebtoken'

export const getNotes = async (req, res, next) => {
  const notes = await Note.find({}).populate('user', {
    name: 1,
    username: 1
  })
  res.json(notes)
}

export const getNoteById = async (req, res) => {
  const { id } = req.params
  const note = await Note.findById(id)
  if (note) return res.json(note)
  res.status(404).json({ error: 'note not found' })
}

export const createNote = async (req, res, next) => {
  const { content, important = false } = req.body

  const { userId } = res

  console.log(userId)

  const user = await User.findById(userId)

  if (!content) return res.status(404).json({ error: "required 'content' field is missing" })
  const newNote = new Note({
    content,
    important,
    date: new Date(),
    user: user._id
  })

  try {
    const savedNote = await newNote.save()
    user.notes = user.notes.concat(savedNote._id)
    await user.save()
    res.json(savedNote)
  } catch (error) {
    next(error)
  }
}

export const updatedNote = (req, res, next) => {
  const { id } = req.params
  const note = req.body
  const newNoteInfo = {
    content: note.content,
    important: note.important
  }

  Note.findByIdAndUpdate(id, newNoteInfo, { new: true })
    .then(result => {
      res.status(200).json(result)
    }).catch(error => next(error))
}

export const deleteNote = async (req, res, next) => {
  const { id } = req.params
  const { userId } = res
  try {
    await Note.findByIdAndDelete(id)
    await User.updateOne({ _id: userId }, { $pull: { notes: id } })
    res.status(204).end()
  } catch (error) {
    next(error)
  }
}
