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
}

module.exports = new nivelModel();
