const mongoose = require('mongoose');

const username = 'root'; // Substitua pelo seu nome de usuário
const password = 'nbefvURUqQMwy057'; // Substitua pela sua senha

// Montar a string de conexão
const connectionString = `mongodb://${username}:${password}@ac-gkmufvd-shard-00-00.wofeoxy.mongodb.net:27017,ac-gkmufvd-shard-00-01.wofeoxy.mongodb.net:27017,ac-gkmufvd-shard-00-02.wofeoxy.mongodb.net:27017/?ssl=true&replicaSet=atlas-tkd1is-shard-0&authSource=admin&retryWrites=true&w=majority`

async function conn(): Promise<void> {
  try {
    await mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log('Conexão com o MongoDB estabelecida com sucesso');
    })
    .catch((error: any) => {
      console.error('Erro ao conectar ao MongoDB:', error);
    });
  } catch (error) {
    console.error(`Erro: ${error}`);  
  }
}

export default conn;