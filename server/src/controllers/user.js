const { hash } = require('bcryptjs');
const { User } = require('../models');

exports.getUser = async function (param) {
  const user = await User.findOne({
    where: { param },
  });
  if (!user) {
    return { success: false };
  }

  return { success: true, user };
};

exports.getUsers = async function () {
  const users = await User.findAll({
    include: ['reservations', 'role'],
  });

  return { success: true, users };
};

exports.createUser = async function (data) {
  console.log(data);
  data.password = await hash(data.password, 10);

  const user = await User.create(data);

  return { success: true, user };
};

exports.updateUser = async function (user, data) {
  if (data.password) {
    data.password = await hash(data.password, 10);
  }
  await user.update(data);

  return { success: true, user };
};

exports.deleteUser = async function (user) {
  user.destroy();
};
