const nivelModel = require("../models/nivelModel.js");

class nivelController {
  getNivel() {
    return nivelModel.getNivel();
  }

  postNivel(newNivel) {
    return nivelModel.postNivel(newNivel);
  }

  putNivel(id) {
    return "Nível de id" + id + "alterado na base de dados";
  }

  deleteNivel(id) {
    return "Nível de id" + id + "deletado na base de dados";
  }
}

module.exports = new nivelController();
