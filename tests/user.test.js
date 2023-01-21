import User from '../src/models/user.model.js'
import bcrypt from 'bcrypt'
import supertest from 'supertest'
import app from '../src/index.js'

const api = supertest(app)

describe('creating a new user', () => {
  beforeEach(async () => {
    await User.deleteMany({})

    const passwordHash = bcrypt.hashSync('cross123', 12)
    const user = new User({ username: 'crossdev', name: 'Joan Cruz', passwordHash })

    await user.save()
  })

  test('works as expected creatin a fresh username', async () => {
    const usersDB = await User.find({})
    const usersAtStart = usersDB.map(user => user.toJSON())
    const newUser = {
      username: 'josemaria3',
      name: 'Jose',
      password: 'cr0s502'
    }

    await api
      .post('/api/register')
      .send(newUser)
      .expect(200)
      .expect('Content-Type', /application\/json/)

    const usersDBAfter = await User.find()
    const usersAtEnd = usersDBAfter.map(user => user.toJSON())

    expect(usersAtEnd).toHaveLength(usersAtStart.length + 1)

    const usernames = usersAtEnd.map(u => u.username)
    expect(usernames).toContain(newUser.username)
  })
})
