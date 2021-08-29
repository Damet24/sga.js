import { Schema, model } from "mongoose"

const StudentSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  last_name: {
    type: String,
    required: true,
    trim: true
  },
  document: {
    type: Number,
    required: true,
    unique: true,
  },
  day_birth: {
    type: Date,
    required: true,
    trim: true
  }
},{
  timestamps: true,
  versionKey: false,
})

export default model('Student', StudentSchema)
