const mongoose = require('mongoose');
const connectionString = 'mongodb://root:hThpfKLBa9MlMs4J@cluster0.wofeoxy.mongodb.net:27017/Cluster0';


async function conn(): Promise<void> {
  try {
    mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log('Conexão com o MongoDB estabelecida com sucesso');
    })
    .catch((error: any) => {
      console.error('Erro ao conectar ao MongoDB:', error);
    });
    console.log('Conectado ao Banco de Dados!');
  } catch (error) {
    console.error(`Erro: ${error}`);
  }
}

export default conn;

