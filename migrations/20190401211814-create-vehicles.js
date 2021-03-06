'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('vehicles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      type: {
        allowNull: false,
        type: Sequelize.STRING
      },
      license_plate: {
        allowNull: false,
        type: Sequelize.STRING
      },
      model: {
        allowNull: false,
        type: Sequelize.STRING
      },
      brand: {
        allowNull: false,
        type: Sequelize.STRING
      },
      kilometers: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      autonomy: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      fuel: {
        allowNull: false,
        type: Sequelize.STRING
      },
      locked: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('vehicles');
  }
};