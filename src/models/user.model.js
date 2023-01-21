
import { model, Schema } from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'
const userSchema = new Schema({
  name: String,
  username: {
    type: String,
    unique: true
  },
  passwordHash: String,
  notes: [{
    type: Schema.Types.ObjectId,
    ref: 'Note'
  }]
})

userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
    delete returnedObject.passwordHash
  }
})

userSchema.plugin(uniqueValidator)

const User = model('User', userSchema)

export default User
