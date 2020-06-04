const express = require('express');
//vamos a rotear a los pintores
let pintor = require('../controllers/PintoresController.js');
// creamos las rutas
let router = express.Router();
router.get('/', pintor.list);

module.exports = router;
