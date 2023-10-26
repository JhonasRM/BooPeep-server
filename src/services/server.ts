import { NextFunction, Request, Response } from 'express';
import routes from '../routes/routes';

const express = require('express')
const app = express();
const cors = require('cors');
const port = 4000;


app.use(express.json());
app.use(routes);
app.use(cors())
app.use(function(req: Request, res: Response, next: NextFunction) {
  res.header("Access-Control-Allow-Origin", "https://localhost:5173"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})

app.listen(port, () => {
    console.log('Listening on port 4000');
});

