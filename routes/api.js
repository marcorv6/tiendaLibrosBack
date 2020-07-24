const router = require('express').Router();

const middlewares = require('./middlewares');
const apiLibrosRouter = require('./api/libros');
const apiClientesRouter = require('./api/clientes');


router.use('/libros', apiLibrosRouter);
router.use('/clientes', apiClientesRouter);

module.exports = router;