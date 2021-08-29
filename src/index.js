import express from 'express'
import './config'
import './config/mongoose'

const app = express()

app.use(express.json())

import router from './routes/students.route'
app.use(router)

app.listen(3000, () => console.log('server on port 3000'))
