const connection = require("../database/connection.js");

class nivelModel {
  getNivel() {
    const sql = "SELECT * FROM nivel";
    return new Promise((resolve, reject) => {
      connection.query(sql, {}, (err, response) => {
        if (err) {
          console.log("Erro na exibição de Nível.");
          reject(err);
        }

        console.log("Níveis exibidos com sucesso!");
        resolve(response);
      });
    });
  }

  postNivel(newNivel) {
    const sqlInsert = "INSERT INTO nivel SET ?";
    const sqlSelect = "SELECT * FROM nivel WHERE id = ?";

    return new Promise((resolve, reject) => {
      connection.query(sqlInsert, newNivel, (err, response) => {
        if (err) {
          console.log("Erro na criação de um Nível.");
          reject(err);
        }

        console.log("Nível criado com sucesso!");
        connection.query(sqlSelect, [response.insertId], (err, sqlResult) => {
          if (err) {
            console.log("Erro ao buscar o Nível criado.");
            reject(err);
          }

          resolve(sqlResult[0]);
        });
      });
    });
  }
}

module.exports = new nivelModel();
