const { Router } = require("express");
const router = Router();
const devController = require("../controllers/devController.js");

router.get("/api/dev", (req, res) => {
  const showDev = devController.getDev();

  showDev
    .then((devs) => res.status(200).json(devs))
    .catch((err) => res.status(400).json(err.message));
});

router.post("/api/dev", (req, res) => {
  const response = devController.postDev();
  res.status(200).send(response);
});

router.put("/api/dev/:id", (req, res) => {
  const { id } = req.params;
  const response = devController.putDev(id);
  res.status(200).send(response);
});

router.delete("/api/dev/:id", (req, res) => {
  const { id } = req.params;
  const response = devController.deleteDev(id);
  res.status(200).send(response);
});

module.exports = router;
