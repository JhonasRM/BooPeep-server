import { Request, Response, Router } from 'express';
import User from '../models/User';
const express = require('express')
const routes = express.Router()

const users = [
    {
        id : 1,
        name: 'John Dias',
        email: 'contato@gmail.com',
        password: 123456
    }
]

routes.post('/login', (req: Request, res: Response) => {
    const {email, password} = req.body

    const user = users.find(user => user.email === email && user.password === password)
    if (user){
        return res.status(200).json({message: "Usuário logado com sucesso"})

        
    } 
    res.status(401).json({message: 'Credenciais Inválidas'})
}) 

routes.post('/signup', (req: Request, res: Response) => {
    const {name, email, password, phone, course} = req.body

    const signed = users.find(user => user.email === email && user.password === password)
    if (signed){
        return res.status(401).json({message: 'Credenciais Já Cadastradas, favor ir para log-in'})
        
    } else {
    const user: User = new User(name, email, password, phone, course)
    return res.status(200).json({message: 'Credenciais Cadastradas'})
    }

    
})
export default routes