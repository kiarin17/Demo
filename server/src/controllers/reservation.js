const { Reservation } = require('../models');

exports.getReservation = async function () {};

exports.getReservations = async function () {
  const reservations = await Reservation.findAll({
    include: ['manager', 'client', 'table'],
  });

  return { success: true, reservations };
};

exports.createReservation = async function (data) {
  const { table, name, phoneNumber, comment } = data;
  const reservation = await Reservation.create({ managerId: 2, tableId: table, name, phoneNumber, comment });

  return { success: true, reservation };
};

exports.updateReservation = async function (instance, data) {
  await instance.update(data);

  return { success: true, instance };
};

exports.deleteReservation = async function () {};
