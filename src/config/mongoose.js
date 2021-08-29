import { connect } from 'mongoose'
import { MONGO_DB_URI } from '../config'

(async () => {
  const db = await connect(MONGO_DB_URI)
  console.log(db.connection.name)
})()
