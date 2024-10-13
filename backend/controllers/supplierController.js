const Supplier = require("../models/Supplier");

// Obtener todos los proveedores
exports.getAllSuppliers = async (req, res) => {
  try {
    const suppliers = await Supplier.find();
    res.status(200).json(suppliers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Crear un nuevo proveedor
exports.createSupplier = async (req, res) => {
  try {
    const newSupplier = new Supplier({
      name: req.body.name,
      location: req.body.location,
      CUIT: req.body.CUIT,
      contactNumber: req.body.contactNumber,
    });
    const savedSupplier = await newSupplier.save();
    res.status(201).json(savedSupplier);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
