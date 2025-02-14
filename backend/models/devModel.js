const connection = require("../database/connection.js");

class devModel {
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

  async getDev() {
    const sql = `
      SELECT dev.id, dev.nome, dev.sexo, dev.data_nascimento, dev.idade, dev.hobby, 
             nivel.id AS nivel_id, nivel.nome AS nivel_nome
      FROM dev
      JOIN nivel ON dev.nivel_id = nivel.id
    `;

    return this.executeQuery(sql)
      .then((response) => {
        console.log("Devs exibidos com sucesso!");

        return response.map((dev) => ({
          id: dev.id,
          nome: dev.nome,
          sexo: dev.sexo,
          data_nascimento: dev.data_nascimento,
          idade: dev.idade,
          hobby: dev.hobby,
          nivel: {
            id: dev.nivel_id,
            nome: dev.nivel_nome,
          },
        }));
      })
      .catch((err) => {
        console.log("Erro na exibição de Dev.", err);
        throw err;
      });
  }

  postDev(newDev) {
    const sql = "INSERT INTO dev SET ?";

    return this.executeQuery(sql, newDev);
  }

  putDev(updateDev, id) {
    const sql = "UPDATE dev SET ? WHERE id = ?";

    return this.executeQuery(sql, [updateDev, id]);
  }

  deleteDev(id) {
    const sql = "DELETE FROM dev WHERE id = ?";

    return this.executeQuery(sql, id);
  }
}

module.exports = new devModel();
