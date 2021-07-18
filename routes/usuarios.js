// Rutas para crear usuarios
const express = require("express");
const router = express.Router();


// Crea un usuario
// api/usuarios
router.post('/', () => {
    console.log('Creando usuario');
} );