const connection = require("../database/connection.js");

class devModel {
  getDev() {
    const sql = `
      SELECT dev.id, dev.nome, dev.sexo, dev.data_nascimento, dev.idade, dev.hobby, 
            nivel_id AS nivel_id, nivel.nome AS nivel_nome
      FROM dev
      JOIN nivel ON dev.nivel_id = nivel.id
    `;

    return new Promise((resolve, reject) => {
      connection.query(sql, {}, (err, response) => {
        if (err) {
          console.log("Erro na exibição de Dev.", err);
          return reject(err);
        }

        console.log("Devs exibidos com sucesso!");

        const devsSqlFormat = response.map((dev) => ({
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
        resolve(devsSqlFormat);
      });
    });
  }

  postDev(newDev) {
    const sql = "INSERT INTO dev SET ?";

    return new Promise((resolve, reject) => {
      connection.query(sql, newDev, (err, response) => {
        if (err) {
          console.log("Erro na criação de um Dev.");
          reject(err);
        }

        console.log("Dev criado com sucesso!");
        resolve(response);
      });
    });
  }

  putDev(updateDev, id) {
    const sql = "UPDATE dev SET ? WHERE id = ?";

    return new Promise((resolve, reject) => {
      connection.query(sql, [updateDev, id], (err, response) => {
        if (err) {
          console.log("Erro na modificação de um Dev.");
          reject(err);
        }

        console.log("Dev modificado com sucesso!");
        resolve(response);
      });
    });
  }

  deleteDev(id) {
    const sql = "DELETE FROM dev WHERE id = ?";

    return new Promise((resolve, reject) => {
      connection.query(sql, id, (err, response) => {
        if (err) {
          console.log("Erro ao deletar um Dev.");
          reject(err);
        }

        console.log("Dev deletado com sucesso!");
        resolve(response);
      });
    });
  }
}

module.exports = new devModel();
