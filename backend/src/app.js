const express = require("express"); //Importa o pacote
const routes = require("./routes");
const cors = require("cors");
const { errors } = require("celebrate");

const app = express(); //Instancia uma aplicação

app.use(cors());
app.use(express.json()); //Informa para a aplicação irá utilizar json para as requisições
app.use(routes); //Utiliza arquivos de rotas
app.use(errors());

module.exports = app;