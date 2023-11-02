import { Request, Response } from 'express';
import {  User, User as UserModel } from '../models/userSchema';

 const UserController = {

    create: async(req: Request, res: Response) => {
        try{
            const user ={
                // id: req.params.id,
                name : req.body.name, 
                email: req.body.email,
                password: req.body.password,
               //phone: req.body.phone,
                //course: req.body.course
            };
            const val = await UserModel.findById(req.body.email)
            if(!val){
                const responce = await UserModel.create(user);

            res.status(201).json({responce, msg: "Usuário Cadastrado com sucesso!"});
                
            }
            res.status(401).json({user, msg: "Este usuário já existe"})
        }catch(error){
            console.log(error);
        }
    },
    getAll: async (req: Request,res: Response) => {
        try {
            const user = await UserModel.find()

            res.json(user)
        } catch (error) {
            console.log(error)
        }
    },
    get: async (req: Request, res: Response) => {
        try {
            const id = req.body.email
            const user = await UserModel.findById(id)
            if(!user){
                res.status(404).json({msg: "Usuário não Encontrado"})
                
            }

            res.json(user)
            return res.status(200).json({msg: "Login feito com sucesso"})
        } catch (error) {
            console.log(error)
        }
    },
    delete: async (req: Request, res: Response) => {
        const id = req.body.email
            const user = await UserModel.findById(id)

            if(!user){
                res.status(404).json({msg: "Usuário não Encontrado"})
                return
            }
            const deletedUser = await UserModel.findByIdAndDelete(id)

            res.json(201).json({deletedUser, msg: "Serviço excluido com sucesso"})
    },
 
 update: async (req: Request, res: Response) => {
    const id = req.body.email
    const user ={
        // id: req.body.id,
        name : req.body.name, 
        email: req.body.email,
        password: req.body.password,
       // phone: req.body.phone,
        // course: req.body.course
    };

            const updatedUser = await UserModel.findByIdAndUpdate(id, user)

            if(!user){
                res.status(404).json({msg: "Usuário não Encontrado"})
                return
            }
        res.status(200).json({updatedUser, msg: "Usuário atualizado com sucesso."})
    
        }
    }

export default UserController;

 