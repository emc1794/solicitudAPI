const express = require('express');
const controllers = require('./../controllers');
const router = express.Router();
const { paginator } = require('../handlers');
const clienteController = new controllers.ClienteController();


router.route('/')
    .get(paginator, clienteController.find)
    .post(clienteController.create);

router.route('/:id')
    .put(clienteController.update)
    .delete(clienteController.delete);

module.exports = router;