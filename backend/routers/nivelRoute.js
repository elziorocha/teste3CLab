const { Router } = require("express");
const router = Router();
const nivelController = require("../controllers/nivelController.js");

router.get("/api/nivel", (req, res) => {
  const showNivel = nivelController.getNivel();

  showNivel
    .then((niveis) => res.status(200).json(niveis))
    .catch((err) => res.status(404).json(err.message));
});

router.post("/api/nivel", (req, res) => {
  const newNivel = req.body;
  const insertNivel = nivelController.postNivel(newNivel);

  insertNivel
    .then((nivelCreated) => res.status(201).json(nivelCreated))
    .catch((err) => res.status(404).json(err.message));
});

router.put("/api/nivel/:id", (req, res) => {
  const { id } = req.params;
  const updateNivel = req.body;
  const alterNivel = nivelController.putNivel(updateNivel, id);

  alterNivel
    .then((nivelUpdated) => res.status(201).json(nivelUpdated))
    .catch((err) => res.status(400).json(err.message));
});

router.delete("/api/nivel/:id", (req, res) => {
  const { id } = req.params;
  const removeNivel = nivelController.deleteNivel(id);

  removeNivel
    .then((nivelRemoved) => res.status(200).json(nivelRemoved))
    .catch((err) => res.status(400).json(err.message));
});

module.exports = router;
