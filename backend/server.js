const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const indexRoutes = require("./routers/index");
indexRoutes(app);

const connection = require("./database/connection.js");
const tables = require("./database/databaseTables.js");
tables.init(connection);

app.listen(PORT, () => {
  console.log(`Servidor rodando em: http://localhost:${PORT}`);
});
