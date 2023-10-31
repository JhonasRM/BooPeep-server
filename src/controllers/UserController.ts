import { Request, Response } from 'express';
import {  User as UserModel } from '../models/userSchema';

 const UserController = {

    create: async(req: Request, res: Response) => {
        try{
            const user ={
                name : req.body.name, 
                email: req.body.email,
                password: req.body.password,
                phone: req.body.phone,
                // course: req.body.course
            };

            const responce = await UserModel.create(user);

            res.status(201).json({responce, msg: "Usuário Cadastrado com sucesso!"});
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
            const id = req.params.id
            const user = await UserModel.findById(id)

            if(!user){
                res.status(404).json({msg: "Usuário não Encontrado"})
                return
            }

            res.json(user)
        } catch (error) {
            console.log(error)
        }
    },
    delete: async (req: Request, res: Response) => {
        const id = req.params.id
            const user = await UserModel.findById(id)

            if(!user){
                res.status(404).json({msg: "Usuário não Encontrado"})
                return
            }
            const deletedUser = await UserModel.findByIdAndDelete(id)

            res.json(201).json({deletedUser, msg: "Serviço excluido com sucesso"})
    }

 };

export default UserController;

 