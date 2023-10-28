import mongoose, { Schema } from 'mongoose'

interface User extends Document {
  id: Number,
  name: String,
  email: String,
  password: String,
  phone: Number,
  course: String,
}

const userSchema: Schema = new Schema({
  id: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  // course: {
  //   type: String,
  //   required: false
  // },
},
{ timestamps: true}
)

const User = mongoose.model("User", userSchema)

module.exports = {
  User,
  userSchema,
}