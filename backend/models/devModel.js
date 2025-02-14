const connection = require("../database/connection.js");

class devModel {
  getDev() {
    const sql = `
      SELECT dev.id, dev.nome, dev.sexo, dev.data_nascimento, dev.idade, dev.hobby, 
            nivel.id AS nivel, nivel.nome AS nivel_nome
      FROM dev
      JOIN nivel ON dev.nivel = nivel.id
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
            nivel: dev.nivel_nome,
          },
        }));
        resolve(devsSqlFormat);
      });
    });
  }
}

module.exports = new devModel();
