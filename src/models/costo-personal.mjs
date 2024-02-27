import { Sequelize, DataTypes } from 'sequelize';
import sequelize from '../config/database.mjs'; // Assuming you have a database.mjs file for your Sequelize connection

const CostosDePersonal = sequelize.define('CostosDePersonal', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  salario: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  }
}, {
  tableName: 'Costos_de_Personal',
  timestamps: false
});

export default CostosDePersonal;