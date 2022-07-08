require('dotenv').config();
const express = require('express');
const cors = require('cors');
const routeRaM = require('./src/routes/character.route');
const connectToDatabase = require('./src/database/DBConnection');
const swaggerRoute = require('./src/swagger/swagger.route');

const port = process.env.PORT || 3000;
const app = express();

connectToDatabase();

app.use(cors());
app.use(express.json());
app.use('/RickandMorty', routeRaM);
app.use('/api-docs', swaggerRoute);

app.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`);
});
