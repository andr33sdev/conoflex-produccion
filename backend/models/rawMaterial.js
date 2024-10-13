const mongoose = require("mongoose");

const rawMaterialSchema = new mongoose.Schema({
  code: { type: String, required: true },
  description: { type: String, required: true },
  supplier: { type: String, required: true },
  stock: { type: Number, required: false },
  min_stock: { type: Number, required: false },
  awaiting: { type: Number, required: false },
  color: { type: String, required: true },
  location: { type: String, required: true },
});

module.exports = mongoose.model("RawMaterial", rawMaterialSchema);