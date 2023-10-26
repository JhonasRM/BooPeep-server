import { NextFunction, Request, Response } from 'express';
import routes from '../routes/routes';

const express = require('express')
const app = express();
const https = require('http')
const fs = require('fs')
const cors = require('cors');
const port = 4000;


app.use(express.json());
app.use(routes);
app.use(cors())
app.use((req: Request, res: Response, next: NextFunction) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "POST, GET, PUT, OPTIONS") // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})

app.listen(port, () => {
    console.log('Listening on port 4000');
});

const httpsOptions = {
  key: fs.readFileSync('./security/cert.key'),
  cert: fs.readFileSync('./security/cert.pem')
}
const server = https.createServer(httpsOptions, app)
  .listen(port, () => {
      console.log('server running at ' + port)
  })
