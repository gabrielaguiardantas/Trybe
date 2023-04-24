// src/server.js
import app from './app';
import connection from './database/config/database';

const PORT = 3001;

app.listen(PORT, async () => {
  console.log(`books_api está sendo executada na porta ${PORT}`);

  // O código abaixo é para testarmos a comunicação com o MySQL
  // const [result] = await connection.execute('SELECT 1');
  // if (result) {
  //   console.log('MySQL connection OK');
  // }
});