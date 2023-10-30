import { Request, Response } from 'express';
import { User as ServiceModel } from '../models/userSchema';

 const serviceController = {

    create: async(req: Request, res: Response) => {
        try{
            const service ={
                name : req.body.name, 
                email: req.body.email,
                password: req.body.password,
                phone: req.body.phone,
            };

            const responce = await ServiceModel.create(service);

            res.status(201).json({responce, msg: "Serviço criado com sucesso!"});
        }catch(error){
            console.log(error);
        }
    }

 };

export default serviceController;

 