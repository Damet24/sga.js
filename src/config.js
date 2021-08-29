import { config } from 'dotenv'
config()
export const MONGO_DB_URI = process.env.MONGO_DB_URI
export const PORT = process.env.PORT || 3000
