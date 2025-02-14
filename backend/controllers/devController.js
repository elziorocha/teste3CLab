const devModel = require("../models/devModel.js");

class devController {
  getDev() {
    return devModel.getDev();
  }

  postDev(newDev) {
    return devModel.postDev(newDev);
  }

  putDev(updateDev, id) {
    return devModel.putDev(updateDev, id);
  }

  deleteDev(id) {
    return devModel.deleteDev(id);
  }
}

module.exports = new devController();
