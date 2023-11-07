const mongoose = require('mongoose');

const username = 'root'; // Substitua pelo seu nome de usuário
const password = 'cX1FiT5ZUKmM97X6'; // Substitua pela sua senha
const port = '27017'

// Montar a string de conexão
// const connectionString = `mongodb://${username}:${password}@ac-gkmufvd-shard-00-00.wofeoxy.mongodb.net:${port},ac-gkmufvd-shard-00-01.wofeoxy.mongodb.net:${port},ac-gkmufvd-shard-00-02.wofeoxy.mongodb.net:${port}/?ssl=true&replicaSet=atlas-tkd1is-shard-0&authSource=admin&retryWrites=true&w=majority`
const connectionString = `mongodb://localhost:27017`
async function conn(): Promise<void> {
  await mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log('Conexão com o MongoDB estabelecida com sucesso');
    })
    .catch((error: any) => {
      console.error('Erro ao conectar ao MongoDB:', error);
    });

}

export default conn;