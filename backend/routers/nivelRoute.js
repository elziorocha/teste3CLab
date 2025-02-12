const { Router } = require("express");
const router = Router();
const nivelController = require('../controllers/nivelController.js')

router.get("/api/nivel", (req, res) => {
  res.send("Chegou um nível cadastrado!");
});

router.post("/api/nivel", (req, res) => {
  res.send("Nível cadastrado com sucesso!");
});

router.put("/api/nivel/:id", (req, res) => {
  const { id } = req.params;
  res.send(`Nível com o ID: ${id} foi alterado com sucesso!`);
});

router.delete("/api/nivel/:id", (req, res) => {
  const { id } = req.params;
  res.send(`Nível com o ID: ${id} foi deletado com sucesso!`);
});

module.exports = router;
