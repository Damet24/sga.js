import Student from '../models/Student'

export const getStudent = (req, res) => {
  res.json('get student')
}

export const createStudent = async (req, res) => {
  const { name, last_name, document, day_birth } = req.body
  console.log(req.body)
  const newStudent = new Student({ name, last_name, document, day_birth })

  try{
    await newStudent.save()
    res.status(201).json(newStudent)
  }
  catch({ message, name }){
    console.error(name)
    if(name == 'MongoServerError'){
      res.status(400).json({message})
    }
  }
}

export const getStudents = async (req, res) => {
  const students = await Student.find()
  res.status(200).json(students)
}

export const updateStudent = (req, res) => {
  res.json('get student')
}

export const deleteStudent = (req, res) => {
  res.json('deleting student')
}
