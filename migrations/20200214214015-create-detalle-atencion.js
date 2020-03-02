'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('detalle-atenciones', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cantidad: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      precio: {
        type: Sequelize.FLOAT,
        allowNull : false
      },
      total: {
        type: Sequelize.FLOAT,
        defaultValue: 0
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      atencionId : {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: 'atenciones'
          },
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      productoId : {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: 'productos'
          },
          key: 'id'
        },
        onDelete: 'CASCADE'
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('detalle-atenciones');
  }
};