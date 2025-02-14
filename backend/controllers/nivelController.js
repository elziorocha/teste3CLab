const nivelModel = require("../models/nivelModel.js");

class nivelController {
  getNivel() {
    return nivelModel.getNivel();
  }

  postNivel(newNivel) {
    return nivelModel.postNivel(newNivel);
  }

  putNivel(updateNivel, id) {
    return nivelModel.putNivel(updateNivel, id);
  }

  deleteNivel(id) {
    return nivelModel.deleteNivel(id);
  }
}

module.exports = new nivelController();
