const express = require('express');
const controllers = require('./../controllers');
const router = express.Router();
const { paginator } = require('../handlers');
const productoController = new controllers.ProductoController();

router.route('/')
    .post(productoController.create)
    .get(paginator, productoController.getAll);

router.route('/:id')
    .get(productoController.getById)
    .put(productoController.update)
    .delete(productoController.delete);

module.exports = router;