import supertest from 'supertest'
import app from '../src/index.js'

const api = supertest(app)

test.skip('notes are returned as json', () => {
  api
    .get('/api/notes')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})
