const { User } = require('../../models');

module.exports = async function checkUser(req, res, next) {
  const { email } = req.body;

  try {
    const user = await User.findOne({
      where: { email },
    });

    req.user = user;

    next();
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
};
