import { NextFunction, Request, Response } from 'express';
// import https from 'https';
// import fs from 'fs';
import cors from 'cors';
const express = require('express')
import routes from '../routes/routes'; // Suponho que o arquivo de rotas esteja no mesmo diretório

const app = express();
const port = 4000;
app.use(express.json());
app.use(cors());
app.use(routes)

app.use((req: Request, res: Response, next: NextFunction) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "POST, GET, PUT, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (req: Request, res: Response) => {
  res.send("Hello, World!");
});
 
app.listen(port, () => {
    console.log(`Listening to ${port}`);
});