const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;

app.use(cors());

const indexRoutes = require("./routers/index");
indexRoutes(app, express);

const connection = require("./database/connection.js");
const tables = require("./database/databaseTables.js");
tables.init(connection);

app.listen(PORT, () => {
  console.log(`Servidor rodando em: http://localhost:${PORT}`);
});
