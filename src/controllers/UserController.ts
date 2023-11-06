import { Request, Response } from 'express';
import {  User, User as UserModel } from '../models/userSchema';

 const UserController = {

    create: async(req: Request, res: Response) => {
        try{
            const user ={
                // id: req.body.id,
                name : req.body.name, 
                email: req.body.email,
                password: req.body.password,
               //phone: req.body.pho    ne,
                //course: req.body.course
            };
            const val = await UserModel.findOne({email: req.body.email, password: req.body.password})
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
            const user = await UserModel.findOne({
                email: req.query.email,
                password: req.query.password
            })
            if(!user){
                res.status(404).json({msg: "Usuário não Encontrado"})
                
            }

            return res.status(200).json({msg: "Login feito com sucesso"})
        } catch (error) {
            console.log(error)
        }
    },
    delete: async (req: Request, res: Response) => {
        // const email = req.body.email
            const user = await UserModel.findOne({
                email: req.query.email,
                password: req.query.password
            })

            if(!user){
                res.status(404).json({msg: "Usuário não Encontrado"})
            }
            const deletedUser = await UserModel.deleteOne({
                email: req.query.email,
                password: req.query.password
            })

            return res.json(201).json({deletedUser, msg:"Serviço excluido com sucesso"})
    },
 
 update: async (req: Request, res: Response) => {
    const user ={
        name : req.body.name, 
        email: req.body.email,
        password: req.body.password,
    //    phone: req.body.phone,
        // course: req.body.course
    };

            const finduser = await UserModel.findOne({
                email: req.query.email,
                password: req.query.password
            })
            const updatedUser =  await UserModel.updateOne({
                email: req.body.email,
                password: req.body.password
            }, user)

            if(!updatedUser){
                res.status(404).json({msg: "Usuário não Encontrado"})
                return
            } 
        res.status(200).json({updatedUser, msg: "Usuário atualizado com sucesso."})
        }
    }

export default UserController;

 