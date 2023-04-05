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
      'tables',
      [
        {
          number: 1,
          seats: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          number: 2,
          seats: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          number: 3,
          seats: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          number: 4,
          seats: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          number: 5,
          seats: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          number: 6,
          seats: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          number: 7,
          seats: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          number: 8,
          seats: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          number: 9,
          seats: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          number: 10,
          seats: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          number: 11,
          seats: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          number: 12,
          seats: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          number: 13,
          seats: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          number: 14,
          seats: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          number: 15,
          seats: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          number: 16,
          seats: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          number: 17,
          seats: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          number: 18,
          seats: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          number: 19,
          seats: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          number: 20,
          seats: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          number: 21,
          seats: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        }
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
    await queryInterface.bulkDelete('tables', null, {});
  },
};
