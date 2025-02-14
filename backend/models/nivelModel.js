const connection = require("../database/connection.js");

class nivelModel {
  executeQuery(sql, params = "") {
    return new Promise((resolve, reject) => {
      connection.query(sql, params, (err, response) => {
        if (err) {
          return reject(err);
        }
        return resolve(response);
      });
    });
  }

  getNivel() {
    const sql = "SELECT * FROM nivel";
    return this.executeQuery(sql);
  }

  async postNivel(newNivel) {
    const sqlInsert = "INSERT INTO nivel SET ?";
    const sqlSelect = "SELECT * FROM nivel WHERE id = ?";

    return this.executeQuery(sqlInsert, newNivel)
      .then((response) => {
        console.log("Nível criado com sucesso!");
        return this.executeQuery(sqlSelect, [response.insertId]);
      })
      .then((sqlResult) => sqlResult[0])
      .catch((err) => {
        console.log("Erro na criação de um Nível.", err);
      });
  }

  putNivel(updateNivel, id) {
    const sql = "UPDATE nivel SET ? WHERE id = ?";

    return this.executeQuery(sql, [updateNivel, id]);
  }

  deleteNivel(id) {
    const sql = "DELETE FROM nivel WHERE id = ?";

    return this.executeQuery(sql, id);
  }
}

module.exports = new nivelModel();
