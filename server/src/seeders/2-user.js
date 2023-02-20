'use strict';

const { hash } = require('bcryptjs');

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
      'users',
      [
        {
          firstName: 'John',
          lastName: 'Doe',
          email: 'john-doe@mail.me',
          password: await hash('1234', 10),
          roleId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: 'Mike',
          lastName: 'Smith',
          email: 'mike@gmail.com',
          roleId: 2,
          password: await hash('1234', 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: 'Jane',
          lastName: 'Anderson',
          email: 'admin@mail.me',
          roleId: 3,
          password: await hash('1234', 10),
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
    await queryInterface.bulkDelete('users', null, {});
  },
};
