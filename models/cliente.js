'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cliente = sequelize.define('Cliente', {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    app: {
      type: DataTypes.STRING,
      defaultValue: '',
    },
    apm: {
      type: DataTypes.STRING,
      defaultValue: '',
    },
    telefono: DataTypes.STRING,
    direccion: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    tableName:'clientes'
  });
  Cliente.associate = function(models) {
  };
  return Cliente;
};