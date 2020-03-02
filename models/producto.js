'use strict';
module.exports = (sequelize, DataTypes) => {
  const Producto = sequelize.define('Producto', {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tipo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    precio: DataTypes.FLOAT,
    precio1: DataTypes.FLOAT,
    estado: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'B'
    }
  }, {
    tableName:'productos'
  });
  Producto.associate = function(models) {
    // associations can be defined here
  };
  return Producto;
};