'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('reservations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      status: {
        allowNull: false,
        type: Sequelize.STRING
      },
      start: {
        allowNull: false,
        type: Sequelize.DATE
      },
      end: {
        allowNull: false,
        type: Sequelize.DATE
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references:{
          model:'users',
          key: 'id'
        }
      },
      vehicleId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references:{
          model:'vehicles',
          key: 'id'
        }
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
    return queryInterface.dropTable('reservations');
  }
};