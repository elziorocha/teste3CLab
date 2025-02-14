const { Router } = require("express");
const router = Router();
const devController = require("../controllers/devController.js");

router.get("/api/dev", devController.getDev);

router.post("/api/dev", devController.postDev);

router.put("/api/dev/:id", devController.putDev);

router.delete("/api/dev/:id", devController.deleteDev);

module.exports = router;
