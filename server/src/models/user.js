'use strict';
const { Model } = require('sequelize');
const { hash } = require('bcryptjs');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Reservation, Role }) {
      // define association here
      this.hasMany(Reservation, { foreignKey: 'userId', as: 'reservations' });

      this.belongsTo(Role, { as: 'role' });
    }
  }
  User.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      firstName: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      middleName: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      lastName: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      birthday: {
        allowNull: true,
        type: DataTypes.DATEONLY,
      },
      email: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING,
        validate: {
          isEmail: true,
        },
      },
      phoneNumber: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      roleId: {
        allowNull: true,
        type: DataTypes.INTEGER,
        defaultValue: 1,
        references: {
          model: 'roles',
          key: 'id',
        },
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: 'User',
      tableName: 'users',
      /**
       * ? Hooks are really useful but I don't get it.
       * ? Maybe we can use it for smth else.
       */
      hooks: {
        // beforeCreate: async (User) => {
        //   User.password = await hash(User.password, 10);
        // },
        // beforeUpdate: async (User) => {
        //   if (User.password) {
        //     User.password = await hash(User.password, 10);
        //   }
        // },
      },
    }
  );
  return User;
};
