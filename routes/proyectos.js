const express = require('express');
const { check } = require('express-validator');
const router = express.Router();

const proyectoController = require('../controllers/proyectoController');
const auth = require('../middleware/auth');

// Crea proyectos
// api/proyectos
router.post('/',
    auth,
    [
        check('nombre', 'El nombre del proyecto es obligatorio').not().isEmpty()
    ],
    proyectoController.crearProyecto
);

// Obtener proyectos por usuario
router.get('/',
    auth,
    proyectoController.obtenerProyectos
);

// Actualizar un proyecto
router.put('/:id',
    auth,
    [
        check('nombre', 'El nombre del proyecto es obligatorio').not().isEmpty()
    ],
    proyectoController.actualizarProyecto
);

// Eliminar un proyecto
router.delete('/:id',
    auth,
    proyectoController.eliminarProyecto
);

module.exports = router;