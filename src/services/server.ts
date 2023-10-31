import { NextFunction, Request, Response } from 'express';
import cors from 'cors';
const express = require('express')
import { router } from "../routes/router"; // Suponho que o arquivo de rotas esteja no mesmo diretório
import conn from './conn';

const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());
app.use(router());

app.use((req: Request, res: Response, next: NextFunction) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "POST, GET, PUT, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
  conn();
});

app.get('/', (req: Request, res: Response) => {
  res.send("Hello, World!");
});
 
app.listen(port, () => {
    console.log(`Listening to ${port}`);
});