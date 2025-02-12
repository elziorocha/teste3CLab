class Tables {
  init(connection) {
    this.connection = connection;
    this.createNivelTable();
    this.createDevTable();
  }

  createNivelTable() {
    const sql = `
        CREATE TABLE IF NOT EXISTS nivel (
            id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
            nome VARCHAR(20) NOT NULL
        );
    `;

    this.connection.query(sql, (err) => {
      if (err) {
        console.log(err, "Erro ao criar a tabela nível.");
        return;
      }
      console.log("Tabela nível criada com sucesso!");
    });
  }

  createDevTable() {
    const sql = `
        CREATE TABLE IF NOT EXISTS dev (
            id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
            nome VARCHAR(40) NOT NULL,
            data_nascimento DATE NOT NULL,
            sexo ENUM('M', 'F') NOT NULL,
            hobby VARCHAR(40) DEFAULT NULL,
            nivel_id INTEGER DEFAULT NULL,
            FOREIGN KEY (nivel_id) REFERENCES nivel(id)
        );
    `;

    this.connection.query(sql, (err) => {
      if (err) {
        console.log(err, "Erro ao criar a tabela Dev.");
        return;
      }
      console.log("Tabela Dev criada com sucesso!");
    });
  }
}

module.exports = new Tables();
