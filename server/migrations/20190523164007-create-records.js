'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('records', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      drgId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'drgs',
          key: 'id'
        },
      },
      providerId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'providers',
          key: 'id'
        },
      },
      totalDischarges: {
        type: Sequelize.INTEGER
      },
      avgCoveredCharges: {
        type: Sequelize.FLOAT
      },
      avgTotalPayments: {
        type: Sequelize.FLOAT
      },
      avgMedicarePayments: {
        type: Sequelize.FLOAT
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
  down: (queryInterface) => {
    return queryInterface.dropTable('records');
  }
};