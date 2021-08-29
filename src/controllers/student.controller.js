import Student from '../models/Student'

export const getStudent = (req, res) => {
  res.json('get student')
}

export const createStudent = async (req, res) => {
  const { name, last_name, document, day_birth } = req.body
  console.log(req.body)
  const newStudent = new Student({ name, last_name, document, day_birth })

  await newStudent.save()
  res.json(newStudent)
}

export const getStudents = async (req, res) => {
  const students = await Student.find()
  res.json(students)
}

export const updateStudent = (req, res) => {
  res.json('get student')
}

export const deleteStudent = (req, res) => {
  res.json('deleting student')
}
