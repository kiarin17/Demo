'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Table extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Reservation }) {
      // define association here
      this.hasMany(Reservation, { foreignKey: 'tableId', as: 'reservations' });
    }
  }
  Table.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      number: {
        allowNull: false,
        unique: true,
        type: DataTypes.INTEGER,
      },
      seats: {
        allowNull: true,
        type: DataTypes.INTEGER,
        defaultValue: 1,
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
      modelName: 'Table',
      tableName: 'tables',
    }
  );
  return Table;
};
