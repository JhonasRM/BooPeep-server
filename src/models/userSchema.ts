import mongoose, { Schema, Document, model, Model } from 'mongoose'

interface IUser extends Document {
  id: Number,
  name: String,
  email: String,
  password: String,
  phone: Number,
  //course: String,
}

const userSchema: Schema<IUser> = new Schema({
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

const User:Model<IUser> = model<IUser>("User", userSchema)

export{User, userSchema}; 