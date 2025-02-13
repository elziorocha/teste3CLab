const devModel = require("../models/devModel.js");

class devController {
  getDev() {
    return devModel.getDev();
  }

  postDev() {
    return "Dev criado na base de dados";
  }

  putDev(id) {
    return "Dev de id" + id + "alterado na base de dados";
  }

  deleteDev(id) {
    return "Dev de id" + id + "deletado na base de dados";
  }
}

module.exports = new devController();
