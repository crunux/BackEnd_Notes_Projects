import { config } from 'dotenv'

config()

export const NODE_ENV = process.env.NODE_ENV
export const PORT = process.env.PORT || 3000
export const MONGO_URI = process.env.MONGO_URI || 'mongodb+srv://admin:Cross19950502@cluster0.mwwucev.mongodb.net/Notes?retryWrites=true&w=majority'
export const MONGO_URI_TEST = process.env.MONGO_URI_TEST
export const SECRET_KEY = process.env.SECRET_KEY || 'XXXXXXXXXX'
