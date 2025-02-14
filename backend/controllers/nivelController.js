const nivelModel = require("../models/nivelModel.js");

class nivelController {
  async getNivel(req, res) {
    const showNivel = nivelModel.getNivel();

    showNivel
      .then((niveis) => res.status(200).json(niveis))
      .catch((err) => res.status(404).json(err.message));
  }

  async postNivel(req, res) {
    const newNivel = req.body;
    const insertNivel = nivelModel.postNivel(newNivel);

    insertNivel
      .then((nivelCreated) => res.status(201).json(nivelCreated))
      .catch((err) => res.status(404).json(err.message));
  }

  async putNivel(req, res) {
    const { id } = req.params;
    const updateNivel = req.body;
    const alterNivel = nivelModel.putNivel(updateNivel, id);

    alterNivel
      .then((nivelUpdated) => res.status(201).json(nivelUpdated))
      .catch((err) => res.status(400).json(err.message));
  }

  async deleteNivel(req, res) {
    const { id } = req.params;
    const removeNivel = nivelModel.deleteNivel(id);

    removeNivel
      .then((nivelRemoved) => res.status(200).json(nivelRemoved))
      .catch((err) => res.status(400).json(err.message));
  }
}

module.exports = new nivelController();
