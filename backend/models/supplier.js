const mongoose = require("mongoose");

const supplierSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: false },
  contactNumber: { type: Number, required: false },
  CUIT: { type: Number, required: true, index: { unique: true, sparse: true } },
});

module.exports = mongoose.model("Supplier", supplierSchema);
