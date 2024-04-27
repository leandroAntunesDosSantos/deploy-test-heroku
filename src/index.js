require("dotenv").config();
const express = require("express");
//const cors = require("cors");

const rotas = require("./rotas");
const { PORT } = process.env;

const app = express();

//app.use(cors());
app.use(express.json());

app.use(rotas);

app.listen(PORT, () => console.log(`O servidor está rodando na porta ${PORT}`));