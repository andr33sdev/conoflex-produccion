const RawMaterial = require("../models/RawMaterial");

// Obtener todas las materias primas
exports.getAllRawMaterials = async (req, res) => {
  try {
    const rawMaterials = await RawMaterial.find();
    res.status(200).json(rawMaterials);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Obtener una materia prima por ID
exports.getRawMaterialById = async (req, res) => {
  try {
    const rawMaterial = await RawMaterial.findById(req.params.id);
    if (rawMaterial) {
      res.status(200).json(rawMaterial);
    } else {
      res.status(404).json({ message: "Materia Prima no encontrada" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Crear una nueva materia prima
exports.createRawMaterial = async (req, res) => {
  try {
    const newRawMaterial = new RawMaterial({
      code: req.body.code,
      description: req.body.description,
      supplier: req.body.supplier,
      stock: 0,
      min_stock: 0,
      awaiting: 0,
      color: req.body.color,
      location: req.body.location,
    });
    const savedRawMaterial = await newRawMaterial.save();
    res.status(201).json(savedRawMaterial);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Actualizar una material prima por ID
exports.updateRawMaterialById = async (req, res) => {
  try {
    const updatedRawMaterial = await RawMaterial.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (updatedRawMaterial) {
      res.status(200).json(updatedRawMaterial);
    } else {
      res.status(404).json({ message: "Materia Prima no encontrada" });
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
