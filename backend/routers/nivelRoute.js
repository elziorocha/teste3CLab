const { Router } = require("express");
const router = Router();
const nivelController = require("../controllers/nivelController.js");

router.get("/api/nivel", nivelController.getNivel);

router.post("/api/nivel", nivelController.postNivel);

router.put("/api/nivel/:id", nivelController.putNivel);

router.delete("/api/nivel/:id", nivelController.deleteNivel);

module.exports = router;
