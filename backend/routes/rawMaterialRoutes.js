const express = require("express");
const router = express.Router();
const rawMaterialController = require("../controllers/rawMaterialController");

router.get("/", rawMaterialController.getAllRawMaterials);
router.get("/:id", rawMaterialController.getRawMaterialById);
router.post("/", rawMaterialController.createRawMaterial);
router.put("/:id", rawMaterialController.updateRawMaterialById);

module.exports = router;
