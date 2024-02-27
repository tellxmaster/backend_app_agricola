import { Sequelize, DataTypes } from 'sequelize';
import sequelize from '../config/database.mjs';

const CostosDeLogistica = sequelize.define('CostosDeLogistica', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  costo: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  }
}, {
  tableName: 'Costos_de_Logistica',
  timestamps: false
});

export default CostosDeLogistica;
