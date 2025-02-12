class nivelController {
  getNivel() {
    return "Buscando Nível na base de dados.";
  }

  postNivel() {
    return "Nível criado na base de dados";
  }

  putNivel(id) {
    return "Nível de id" + id + "alterado na base de dados";
  }

  deleteNivel(id) {
    return "Nível de id" + id + "deletado na base de dados";
  }
}

module.exports = new nivelController();
