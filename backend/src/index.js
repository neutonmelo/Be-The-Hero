const express = require("express"); //Importa o pacote
const routes = require("./routes");
const cors = require("cors");

const app = express(); //Instancia uma aplicação

app.use(cors());
app.use(express.json()); //Informa para a aplicação irá utilizar json para as requisições
app.use(routes); //Utiliza arquivos de rotas

app.listen(3333); //Passa a ouvir as solicitações da porta 3333