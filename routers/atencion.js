const express = require('express');
const controllers = require('./../controllers');
const router = express.Router();
const atencionController = new controllers.AtencionController();

router.route('/')
    .get(atencionController.getAll)
    .post(atencionController.create);

router.route('/:id')
    .get(atencionController.getById)
    .put(atencionController.update)
    .delete(atencionController.delete);

router.route('/detalles')
    .post(atencionController.addDetalles);

router.route('/detalles/:id')
    .delete(atencionController.deleteDetalle);

router.route('/detalles/:atencionId/:productoId')
    .put(atencionController.updateDetalle);

router.route('/total')
    .post(atencionController.updateTotal);

module.exports = router;