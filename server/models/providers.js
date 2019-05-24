'use strict';
module.exports = (sequelize, DataTypes) => {
  const providers = sequelize.define('providers', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    name: DataTypes.STRING,
    streetAddress: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zip: DataTypes.STRING,
    hospitalReferral: DataTypes.STRING
  }, {});
  providers.associate = function(models) {
    // associations can be defined here
  };
  return providers;
};