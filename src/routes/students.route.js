import { Router } from 'express'
import '../controllers/student.controller'
import {deleteStudent, getStudent, updateStudent, getStudents, createStudent} from '../controllers/student.controller'

const router = Router()

router.get('/students', getStudents)

router.post('/students', createStudent)

router.get('/students/:id', getStudent)

router.put('/students/:id', updateStudent)

router.delete('/students/:id', deleteStudent)

export default router
