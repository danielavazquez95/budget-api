const router = require('express').Router();

const middlewares = require('./middlewares');
const apiOperationsRouter = require('./api/operations');
const apiUsersRouter = require('./api/users');

router.use('/operations', middlewares.checkToken, apiOperationsRouter);
router.use('/users', apiUsersRouter);


module.exports = router;