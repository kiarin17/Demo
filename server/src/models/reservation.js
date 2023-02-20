'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reservation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Table }) {
      // define association here
      this.belongsTo(User, { foreignKey: 'managerId', as: 'manager' });
      this.belongsTo(User, { foreignKey: 'userId', as: 'client' });
      this.belongsTo(Table, { as: 'table' });
    }
  }
  Reservation.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      managerId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'users',
          key: 'id',
        },
      },
      userId: {
        allowNull: true,
        type: DataTypes.INTEGER,
        references: {
          model: 'users',
          key: 'id',
        },
      },
      tableId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'tables',
          key: 'id',
        },
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      phoneNumber: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      comment: {
        allowNull: true,
        type: DataTypes.TEXT,
      },
      status: {
        allowNull: true,
        type: DataTypes.ENUM,
        defaultValue: 'pending',
        values: ['pending', 'confirmed', 'canceled', 'done'],
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
      modelName: 'Reservation',
      tableName: 'reservations',
    }
  );
  return Reservation;
};
