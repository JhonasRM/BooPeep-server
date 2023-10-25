import { Request, Response } from 'express';
import routes from '../routes/routes';
import header from ''
import cors from 'cors'
const express = require('express')
const app = express();
const port = 4000;


app.use(express.json());
app.use(routes);
app.use(cors(corsOptions));

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World');
});

app.listen(port, () => {
    console.log('Listening on port 4000');
});





