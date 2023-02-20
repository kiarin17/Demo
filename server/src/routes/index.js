const router = require('express').Router();
const userRouter = require('./user');
const tableRouter = require('./table');
const reservationRouter = require('./reservation');

router.get('/', (_, res) => {
  return res.send({ root: true });
});

router.use('/user', userRouter);
router.use('/table', tableRouter);
router.use('/reservation', reservationRouter);

module.exports = router;
