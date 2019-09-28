module.exports = (sequelize, DataTypes) => {
  const Vehicles = sequelize.define('Vehicles', {
    id: { primaryKey: true, type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, allowNull: false },
    vehicle: DataTypes.STRING,
    brand: DataTypes.STRING,
    year: DataTypes.INTEGER,
    description: DataTypes.STRING,
    sold: DataTypes.BOOLEAN
  },
  {
    timestamps: true
  })

  return Vehicles
}
