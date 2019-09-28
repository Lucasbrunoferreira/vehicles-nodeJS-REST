const Sequelize = require('sequelize')

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('Vehicles', {
      id: {
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        type: Sequelize.UUID
      },
      vehicle: {
        allowNull: false,
        type: DataTypes.STRING
      },
      brand: {
        allowNull: false,
        type: DataTypes.STRING
      },
      year: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      description: {
        allowNull: false,
        type: DataTypes.STRING
      },
      sold: {
        allowNull: false,
        type: DataTypes.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    })
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('Vehicles')
  }
}
