const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "teste3c",
});

connection.connect((err) => {
  if (err) {
    console.error("Erro ao se conectar no MySQL:", err);
    return;
  }
  console.log("Servidor conectado ao MySQL!");
});

module.exports = connection;
