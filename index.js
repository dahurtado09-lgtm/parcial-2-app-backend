//Activar dotenv para leer el archivo .env
require("dotenv").config(); //activa la lectura del archivo .env
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const express = require("express");
const app = express();

// Permite que Express entienda archivos JSON
app.use(express.json());

//Cors, dependencia que le dice al servidor que admitimos solicitudes tipo GET, PUT, POST, PATCH Y DELETE
const cors = require("cors");
app.use(cors());

//Importacion de rutas creadas
const mainRouter = require('./src/routes/main.router');
const usuariosRouter = require("./src/routes/usuarios.router");

//Activacion de rutas
app.use(mainRouter);
app.use(usuariosRouter);

//Configuracion del puerto o que use uno por defecto 
const PORT = process.env.PORT || 3000;

//Inicia el servidor para que escuche.
app.listen(PORT, () => {
  console.log(`🚀 DEBUG Servidor en http://localhost:${PORT}`);
});



