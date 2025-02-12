const { Router } = require("express");
const router = Router();

router.get("/api/dev", (req, res) => {
  res.send("Chegou um dev cadastrado!");
});

router.post("/api/dev", (req, res) => {
  res.send("Dev cadastrado com sucesso!");
});

router.put("/api/dev/:id", (req, res) => {
  const { id } = req.params;
  res.send(`Dev com o ID: ${id} foi alterado com sucesso!`);
});

router.delete("/api/dev/:id", (req, res) => {
  const { id } = req.params;
  res.send(`Dev com o ID: ${id} foi deletado com sucesso!`);
});

module.exports = router;
