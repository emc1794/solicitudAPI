'use strict';
module.exports = (sequelize, DataTypes) => {
  const Atencion = sequelize.define('Atencion', {
    total: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0
    },
    estado: {
      type : DataTypes.STRING,
      defaultValue : 'B'
    },
    clienteId : {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName:'atenciones'
  });
  Atencion.associate = function(models) {
    Atencion.hasMany(models.DetalleAtencion , {foreignKey : 'atencionId',as: 'detalles'});
    Atencion.belongsTo(models.Cliente, { foreignKey : 'clienteId', as: 'cliente'});
    Atencion.hasOne(models.Pago, {foreignKey: 'atencionId', as : 'pago'});
  };
  return Atencion;
};