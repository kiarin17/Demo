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
      'roles',
      [
        {
          name: 'user',
          description: 'regular user',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'manager',
          description: 'regular manager',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'admin',
          description: 'There Can Be Only One',
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
    await queryInterface.bulkDelete('roles', null, {});
  },
};
