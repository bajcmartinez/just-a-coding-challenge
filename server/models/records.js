'use strict';
module.exports = (sequelize, DataTypes) => {
  const records = sequelize.define('records', {
    totalDischarges: DataTypes.INTEGER,
    avgCoveredCharges: DataTypes.FLOAT,
    avgTotalPayments: DataTypes.FLOAT,
    avgMedicarePayments: DataTypes.FLOAT
  }, {});
  records.associate = function(models) {
    // associations can be defined here
    records.belongsTo(models.drgs, {
      foreignKey: 'drgId'
    });
    records.belongsTo(models.providers, {
      foreignKey: 'providerId'
    });
  };
  return records;
};