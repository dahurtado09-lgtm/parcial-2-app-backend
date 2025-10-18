const express = require("express");
const router = express.Router();

// 🧠 Variable para guardar usuarios en memoria (simula base de datos)
let usersData = [];

// ✅ 1. Obtener todos los usuarios
router.get("/users", async (req, res) => {
  try {
    const response = await fetch("https://fakestoreapi.com/users");
    const data = await response.json();

    // Convertimos los datos al formato pedido
    usersData = data.map((user, index) => ({
      id: user.id,
      name: `${user.name.firstname} ${user.name.lastname}`,
      phone: user.phone,
      email: user.email,
      address: `${user.address.street}, ${user.address.city}`,
      age: 20 + index, // valor simulado
      photoUrl: `https://randomuser.me/api/portraits/men/${index + 1}.jpg`
    }));

    res.json({
      success: true,
      users: usersData
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error al obtener usuarios"
    });
  }
});

// ✅ 2. Buscar usuario por ID
router.get("/users/:id", async (req, res) => {
  const id = parseInt(req.params.id);

  // Si no tenemos datos cargados, los pedimos de la API
  if (usersData.length === 0) {
    const response = await fetch("https://fakestoreapi.com/users");
    const data = await response.json();
    usersData = data.map((user, index) => ({
      id: user.id,
      name: `${user.name.firstname} ${user.name.lastname}`,
      phone: user.phone,
      email: user.email,
      address: `${user.address.street}, ${user.address.city}`,
      age: 20 + index,
      photoUrl: `https://randomuser.me/api/portraits/men/${index + 1}.jpg`
    }));
  }

  // Buscamos el usuario
  const userFound = usersData.find(u => u.id === id);

  if (userFound) {
    res.json({
      message: "user found",
      success: true,
      user: userFound
    });
  } else {
    res.json({
      message: `user for id = ${id} no found`,
      success: false
    });
  }
});

// ✅ 3. Crear nuevo usuario (POST)
router.post("/users", (req, res) => {
  const { name, phone, email, address, age, photoUrl } = req.body;

  // Validamos que se envíen todos los datos
  if (!name || !phone || !email || !address || !age || !photoUrl) {
    return res.status(400).json({
      success: false,
      message: "Faltan datos del usuario"
    });
  }

  // Creamos nuevo usuario
  const newUser = {
    id: usersData.length + 1, // genera un ID nuevo
    name,
    phone,
    email,
    address,
    age,
    photoUrl
  };

  // Insertamos al inicio del arreglo
  usersData.unshift(newUser);

  res.status(201).json({
    success: true,
    message: "Usuario creado correctamente",
    user: newUser
  });
});

module.exports = router;
