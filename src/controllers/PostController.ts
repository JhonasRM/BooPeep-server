import { Request, Response } from 'express';
import {  Post as PostModel } from '../models/postSchema';

 const PostController = {

    create: async(req: Request, res: Response) => {
        try{
            const post ={
               id : req.body.id, 
                situation: req.body.situation,
                description: req.body.description,
                image: req.body.descrition,
                contato: req.body.contato
            };

            const responce = await PostModel.create(post);

            res.status(201).json({responce, msg: "Post feito com sucesso!"});
        }catch(error){
            console.log(error);
        }
    },
    getAll: async (req: Request,res: Response) => {
        try {
            const post = await PostModel.find()

            res.json(post)
        } catch (error) {
            console.log(error)
        }
    },
    get: async (req: Request, res: Response) => {
        try {
            const id = req.body.id
            const post = await PostModel.findById(id)

            if(!post){
                res.status(404).json({msg: "Post não Encontrado"})
                return
            }

            res.json(post)
        } catch (error) {
            console.log(error)
        }
    },
    delete: async (req: Request, res: Response) => {
        const id = req.body.id
            const post = await PostModel.findById(id)

            if(!post){
                res.status(404).json({msg: "Post não Encontrado"})
                return
            }
            const deletedUser = await PostModel.findByIdAndDelete(id)

            res.json(201).json({deletedUser, msg: "Serviço excluido com sucesso"})
    },
 
 update: async (req: Request, res: Response) => {
    const id = req.body.id
    const user= {
        id: req.body.id,
        situation: req.body.situation,
        descrition: req.body.descrition,
        image: req.body.image,
       
    };

            const updatedUser = await PostModel.findByIdAndUpdate(id, user)

            if(!user){
                res.status(404).json({msg: "Post não Encontrado"})
                return
            }
        res.status(200).json({user, msg: "Post atualizado com sucesso."})
    
        }
    }

export default PostController;



 