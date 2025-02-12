const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;

const indexRoutes = require("./routers/index");
indexRoutes(app);

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Servidor rodando em: http://localhost:${PORT}`);
});
