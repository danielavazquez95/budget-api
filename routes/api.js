const router = require('express').Router();

const apiOperationsRouter = require('./api/operations');

router.use('/operations', apiOperationsRouter);

module.exports= router;