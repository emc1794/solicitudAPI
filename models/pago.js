'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pago = sequelize.define('Pago', {
    total: DataTypes.FLOAT,
    cambio: DataTypes.FLOAT
  }, {
    tableName:'pagos'
  });
  Pago.associate = function(models) {
    // associations can be defined here
  };
  return Pago;
};