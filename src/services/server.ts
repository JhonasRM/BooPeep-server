import { NextFunction, Request, Response } from 'express';
import cors from 'cors';
const express = require('express')
import conn from './conn';
import router from '../routes/router';

const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());
app.use('/db', router);

app.use((req: Request, res: Response, next: NextFunction) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "POST, GET, PUT, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


conn()

app.get('/', (req: Request, res: Response) => {
  res.send("Hello, World!");
});
 
app.listen(port, () => {
    console.log(`Listening to ${port}`);
});