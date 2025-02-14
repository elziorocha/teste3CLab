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

  putNivel(updateNivel, id) {
    const sql = "UPDATE nivel SET ? WHERE id = ?";

    return new Promise((resolve, reject) => {
      connection.query(sql, [updateNivel, id], (err, response) => {
        if (err) {
          console.log("Erro na modificação de um Nível.");
          reject(err);
        }

        console.log("Nível modificado com sucesso!");
        resolve(response);
      });
    });
  }

  deleteNivel(id) {
    const sql = "DELETE FROM nivel WHERE id = ?";

    return new Promise((resolve, reject) => {
      connection.query(sql, id, (err, response) => {
        if (err) {
          console.log("Erro ao deletar um Nível.");
          reject(err);
        }

        console.log("Nível deletado com sucesso!");
        resolve(response);
      });
    });
  }
}

module.exports = new nivelModel();
