const Semifinished = require("../models/Semifinished");

// Obtener todos los semi elaborados
exports.getAllSemifinisheds = async (req, res) => {
  try {
    const semifinisheds = await Semifinished.find();
    res.status(200).json(semifinisheds);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Obtener un semi elaborado por ID
exports.getSemifinishedById = async (req, res) => {
  try {
    const semifinished = await Semifinished.findById(req.params.code);
    if (semifinished) {
      res.status(200).json(semifinished);
    } else {
      res.status(404).json({ message: "Semielaborado no encontrado" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Crear un nuevo semi elaborado
exports.createSemifinished = async (req, res) => {
  try {
    const newSemifinished = new Semifinished({
      code: req.body.code,
      name: req.body.name,
      description: req.body.description,
      stock: 0,
      min_stock: 0,
      color: req.body.color,
      process: req.body.process,
      location: req.body.location,
      materials: [],
    });

    const savedSemifinished = await newSemifinished.save();
    res.status(201).json(savedSemifinished);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Actualizar un semielaborado por ID
exports.updateSemifinishedById = async (req, res) => {
  try {
    const updatedSemifinished = await Semifinished.findByIdAndUpdate(
      req.params.code,
      req.body,
      { new: true }
    );
    if (updatedSemifinished) {
      res.status(200).json(updatedSemifinished);
    } else {
      res.status(404).json({ message: "Semielaborado para actualizar no encontrado" });
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};