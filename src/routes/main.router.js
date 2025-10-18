// Importamos express
const express = require("express");
const router = express.Router();

// ✅ Ruta principal (simple mensaje para probar que el servidor funciona)
router.get("/", (req, res) => {
  res.send("🚀 Servidor funcionando correctamente");
});

module.exports = router;
