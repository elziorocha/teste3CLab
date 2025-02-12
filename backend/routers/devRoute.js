const { Router } = require("express");
const router = Router();
const devController = require("../controllers/devController.js");

router.get("/api/dev", (req, res) => {
  const resposta = devController.getDev();
  res.send(resposta);
});

router.post("/api/dev", (req, res) => {
  const resposta = devController.postDev();
  res.send(resposta);
});

router.put("/api/dev/:id", (req, res) => {
  const { id } = req.params;
  const resposta = devController.putDev(id);
  res.send(resposta);
});

router.delete("/api/dev/:id", (req, res) => {
  const { id } = req.params;
  const resposta = devController.deleteDev(id);
  res.send(resposta);
});

module.exports = router;
