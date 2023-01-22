import { config } from 'dotenv'

config()

export const NODE_ENV = process.env.NODE_ENV
export const PORT = process.env.PORT || 3000
export const MONGO_URI = process.env.MONGO_URI || 'mongo+srv'
export const MONGO_URI_TEST = process.env.MONGO_URI_TEST
export const SECRET_KEY = process.env.SECRET_KEY || 'secret_key'
