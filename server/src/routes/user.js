const { compare } = require('bcryptjs');
const { createUser, getUsers, getUser, updateUser } = require('../controllers/user');
const checkUser = require('./middlewares/check-user');

const router = require('express').Router();

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
    const { success, users } = await getUsers();

    return res.status(200).send({ success, users });
  } catch (error) {
    console.log(error);

    return res.status(500).send({ error });
  }
});

router.post('/create', checkUser, async (req, res) => {
  try {
    if (req.user) {
      return res.send({ success: false, message: 'User already exists' });
    }

    const { success, user } = await createUser(req.body);
    if (!success) {
      return res.send({ success, message: 'Something went wrong' });
    }

    return res.status(201).send({ success, user });
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

    const { success, user } = await updateUser(req.body);
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

router.post('/authenticate', checkUser, async (req, res) => {
  try {
    if (!req.user) {
      return res.status(203).send({ success: false, message: 'Wrong Credentials' });
    }

    const isCompared = await compare(req.body.password, req.user.password);
    if (!isCompared) {
      return res.status(203).send({ success: false, message: 'Wrong Credentials' });
    }

    return res.status(202).send({ success: true, token: req.user.id });
  } catch (error) {
    console.log(error);

    return res.status(500).send({ error });
  }
});

module.exports = router;
