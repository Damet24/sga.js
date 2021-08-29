import express from 'express'
import {PORT} from './config'
import './config/mongoose'

const app = express()

app.use(express.json())

import router from './routes/students.route'
app.use(router)

app.listen(PORT, () => console.log('server on port', PORT))
