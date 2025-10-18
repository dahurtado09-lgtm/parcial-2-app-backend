// index.js (modo debug)
console.log("Mi primera app en Express - DEBUG");
require("dotenv").config();
const express = require("express");

// IMPORTAR datos -> ajustar ruta si tu carpeta se llama Data o data
const users = require("./Data/users"); // <-- si tu carpeta es "Data" cambia a "./Data/users"
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// CORS manual (como el profe)
const cors = require("cors");
app.use(cors());


// --- DEBUG: mostrar información de importación ---
console.log("DEBUG: users importado ->", typeof users);
console.log("DEBUG: users es array? ->", Array.isArray(users));
console.log("DEBUG: users.length ->", Array.isArray(users) ? users.length : "N/A");
if (Array.isArray(users)) console.log("DEBUG: primeros usuarios ->", users.slice(0,3));

// Ruta raíz
app.get("/", (req, res) => {
  res.json({
    message: "¡Hola! Express funcionando (DEBUG)",
    timestamp: new Date().toISOString(),
    status: "success",
  });
});

// Ping simple
app.get("/_ping", (req, res) => res.json({ ok: true }));

// Ruta todos usuarios (estructura objetivo)
app.get("/users", (req, res) => {
  console.log("DEBUG: GET /users called");
  res.json({ success: true, users: users });
});

// Ruta usuario por id (debug)
app.get("/users/:id", (req, res) => {
  console.log("DEBUG: GET /users/:id called with params:", req.params);
  const { id } = req.params;
  const user = Array.isArray(users) ? users.find(u => String(u.id) === String(id)) : null;

  if (!user) {
    console.log(`DEBUG: user id=${id} not found`);
    return res.status(404).json({
      message: `user for id = ${id} not found`,
      success: false
    });
  }

  console.log(`DEBUG: user id=${id} found`);
  res.json({
    message: "user found",
    success: true,
    user: user
  });
});

app.listen(PORT, () => {
  console.log(`🚀 DEBUG Servidor en http://localhost:${PORT}`);
});
