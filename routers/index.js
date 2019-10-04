const express = require('express');
const defaultRouter = require('./default');

const router = express.Router();

router.use('/default',defaultRouter);

module.exports = router;