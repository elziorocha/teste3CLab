const connection = require("../database/connection.js");

class devModel {
  getDev() {
    const sql = "SELECT * FROM dev";
    return new Promise((resolve, reject) => {
      connection.query(sql, {}, (err, response) => {
        if (err) {
          console.log("Erro na exibição de Dev.");
          reject(err);
        }

        console.log("Devs exibidos com sucesso!");
        resolve(response);
      });
    });
  }
}

module.exports = new devModel();
