import mongoose, { Schema, Document, model, Model } from 'mongoose'

interface Post extends Document {
  id: Number,
  descricao: String,
  imagem: String,
}
  

const postSchema: Schema<Post> = new Schema({
  id: {
    type: Number,
    required: true
  },
  descricao: {
    type: String,
    required: true
  },
  imagem: {
    type: String,
    required: false
  },
},
{ timestamps: true}
)

const Post:Model<Post> = model<Post>("Post", postSchema)

export{Post, postSchema}; 