import { Sequelize, DataTypes } from 'sequelize';
import sequelize from '../config/database.mjs';

const CostosDeProduccion = sequelize.define('CostosDeProduccion', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  id_producto: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  costo_unitario: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  }
}, {
  tableName: 'Costos_de_Produccion',
  timestamps: false
});

export default CostosDeProduccion;