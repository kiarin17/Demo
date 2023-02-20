'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      'reservations',
      [
        {
          managerId: 2,
          userId: 1,
          tableId: 1,
          name: 'John',
          phoneNumber: 'user1 phone',
          comment: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          managerId: 2,
          userId: null,
          tableId: 2,
          name: 'Jack',
          phoneNumber: '8 910 555-44-44',
          comment: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('reservations', null, {});
  },
};
