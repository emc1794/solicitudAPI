const express = require('express');
const atencionRouter = require('./atencion');
const productoRouter = require('./producto');
const clienteRouter = require('./cliente');
const pagoRouter = require('./pago');

const router = express.Router();

router.get('/',(req, res)=> res.send('Bienvenido!!'));
router.use('/atenciones', atencionRouter);
router.use('/productos', productoRouter);
router.use('/clientes', clienteRouter);
router.use('/pagos', pagoRouter);

module.exports = router;