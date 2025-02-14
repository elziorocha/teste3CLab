const devModel = require("../models/devModel.js");

class devController {
  async getDev(req, res) {
    const showDev = devModel.getDev();

    return showDev
      .then((devShowed) => res.status(200).json(devShowed))
      .catch((err) => res.status(400).json(err.message));
  }

  async postDev(req, res) {
    const newDev = req.body;
    const insertDev = devModel.postDev(newDev);

    return insertDev
      .then((devInserted) => res.status(201).json(devInserted))
      .catch((err) => res.status(404).json(err.message));
  }

  async putDev(req, res) {
    const { id } = req.params;
    const updateDev = req.body;
    const alterDev = devModel.putDev(updateDev, id);

    alterDev
      .then((devUpdated) => res.status(201).json(devUpdated))
      .catch((err) => res.status(400).json(err.message));
  }

  async deleteDev(req, res) {
    const { id } = req.params;
    const removeDev = devModel.deleteDev(id);

    removeDev
      .then((devRemoved) => res.status(200).json(devRemoved))
      .catch((err) => res.status(400).json(err.message));
  }
}

module.exports = new devController();
