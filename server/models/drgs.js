'use strict';
module.exports = (sequelize, DataTypes) => {
  const drgs = sequelize.define('drgs', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    name: DataTypes.STRING
  }, {});
  drgs.associate = function(models) {
    // associations can be defined here
  };
  return drgs;
};