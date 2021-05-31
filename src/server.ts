import express from "express";

import routes from "./routes";

import "./database";

require("dotenv").config();

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333, () => {
  console.log("Servidor iniciado na porta 3333.");
});
