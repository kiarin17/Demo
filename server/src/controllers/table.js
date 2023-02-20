const { Table } = require('../models');

exports.getTable = async function () {};

exports.getTables = async function () {
  const tables = await Table.findAll({
    include: 'reservations',
  });

  return { success: true, tables };
};

exports.createTable = async function (data) {
  const table = await Table.create(data);

  return { success: true, table };
};

exports.updateTable = async function (instance, data) {
  await instance.update(data);

  return { success: true, instance };
};

exports.deleteTable = async function () {};
