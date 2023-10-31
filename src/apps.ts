import express, { Application } from 'express';
import cors from 'cors'
import conn from './services/conn';
import routes from './routes/routes';

const app: Application = express();
const port: number = 3000;

app.use(cors());
app.use(express.json());

conn();

app.use('/api', routes);

app.listen(port, () => {
  console.log('Servidor Online!');
});