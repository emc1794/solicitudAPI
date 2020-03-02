const express = require('express');
const controllers = require('./../controllers');
const router = express.Router();
const pagoController = new controllers.PagoController();


router.route('/')
    .post(pagoController.create);

module.exports = router;