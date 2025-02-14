const { Router } = require("express");
const router = Router();
const devController = require("../controllers/devController.js");

router.get("/api/dev", (req, res) => {
  const showDev = devController.getDev();

  showDev
    .then((devShowed) => res.status(200).json(devShowed))
    .catch((err) => res.status(400).json(err.message));
});

router.post("/api/dev", (req, res) => {
  const newDev = req.body;
  const insertDev = devController.postDev(newDev);

  insertDev
    .then((devInserted) => res.status(201).json(devInserted))
    .catch((err) => res.status(404).json(err.message));
});

router.put("/api/dev/:id", (req, res) => {
  const { id } = req.params;
  const updateDev = req.body;
  const alterDev = devController.putDev(updateDev, id);

  alterDev
    .then((devUpdated) => res.status(201).json(devUpdated))
    .catch((err) => res.status(400).json(err.message));
});

router.delete("/api/dev/:id", (req, res) => {
  const { id } = req.params;
  const removeDev = devController.deleteDev(id);

  removeDev
    .then((devRemoved) => res.status(200).json(devRemoved))
    .catch((err) => res.status(400).json(err.message));
});

module.exports = router;
