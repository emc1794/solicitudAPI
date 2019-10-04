const express = require('express');
const controllers = require('../controllers');
const defaultController = new controllers.defaultController();

const router = express.Router();

router.route('/')
.get(defaultController.index)
// agrege los metodos que necesite (post,put,delete)

module.exports = router;