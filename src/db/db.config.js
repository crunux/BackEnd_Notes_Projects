import { MONGO_URI, MONGO_URI_TEST, NODE_ENV } from '../config.js'
import mongoose from 'mongoose'

const connectionString = NODE_ENV === 'test' ? MONGO_URI_TEST : MONGO_URI

if (!connectionString) {
  console.error('Recuerda tener la variable de entorno definida con el MONGO_URI que servida como connection string')
}

export const connectDB = () => {
  mongoose.set('strictQuery', false).set('debug', true).connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true }, (error) => {
    if (error) console.log(error)
    else console.log('Successfully connected')
  })
}
