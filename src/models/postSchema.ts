import mongoose, { Schema, Document, model, Model } from 'mongoose'

interface Post extends Document {
  id: Number,
  situation: Number,
  description: String,
  image: String,
  contato: String
}
  

const postSchema: Schema<Post> = new Schema({
  id: {
    type: Number,
    required: true
  },
  situation: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: false
  },
  contato: {
    type: String,
    required: true
  },
},
{ timestamps: true}
)

const Post:Model<Post> = model<Post>("Post", postSchema)

export{Post, postSchema}; 