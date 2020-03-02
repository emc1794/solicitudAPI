'use strict';
module.exports = (sequelize, DataTypes) => {
  const DetalleAtencion = sequelize.define('DetalleAtencion', {
    cantidad: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    precio: {
      type: DataTypes.FLOAT,
      allowNull : false
    },
    total: {
      type: DataTypes.FLOAT,
      defaultValue: 0
    }
  }, {
    tableName:'detalle-atenciones'
  });
  DetalleAtencion.associate = function(models) {
    DetalleAtencion.belongsTo(models.Producto , {as: 'producto'});
  };
  return DetalleAtencion;
};