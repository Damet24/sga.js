import express from 'express'
import './config'
import './config/mongoose'

const app = express()

app.listen(3000, () => console.log('server on port 3000'))
