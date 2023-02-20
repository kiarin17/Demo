const { getReservations, createReservation } = require('../controllers/reservation');
const checkUser = require('./middlewares/check-user');

const router = require('express').Router();

// TODO: rewrite this for reservation

router.get('/get-one', async (req, res) => {
  const { param } = req.query;

  try {
    const { success, user } = getUser(param);
    if (!success) {
      return res.send({ success, message: 'User not found' });
    }

    return res.send({ success, user });
  } catch (error) {
    console.log(error);

    return res.status(500).send({ error });
  }
});

router.get('/get-all', async (_, res) => {
  try {
    const { success, reservations } = await getReservations();

    return res.status(200).send({ success, reservations });
  } catch (error) {
    console.log(error);

    return res.status(500).send({ error });
  }
});

router.post('/create', async (req, res) => {
  try {
    const { success, reservation } = await createReservation(req.body);
    if (!success) {
      return res.send({ success, message: 'Something went wrong' });
    }

    return res.status(201).send({ success, reservation });
  } catch (error) {
    console.log(error);

    return res.status(500).send({ error });
  }
});

router.post('/update', checkUser, async (req, res) => {
  try {
    if (req.user) {
      return res.send({ success: false, message: 'User already exists' });
    }

    const { success, user } = await createUser(req.body);
    if (!success) {
      return res.send({ success, message: 'Something went wrong' });
    }

    return res.status(201).send({ user });
  } catch (error) {
    console.log(error);

    return res.status(500).send({ error });
  }
});

router.post('/delete', checkUser, async (req, res) => {
  try {
    if (req.user) {
      return res.send({ success: false, message: 'User already exists' });
    }

    const { success, user } = await createUser(req.body);
    if (!success) {
      return res.send({ success, message: 'Something went wrong' });
    }

    return res.status(201).send({ user });
  } catch (error) {
    console.log(error);

    return res.status(500).send({ error });
  }
});

module.exports = router;
