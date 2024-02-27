import { Sequelize } from "sequelize";
import sequelize from "../database/database.mjs";
import ResponsableBodega from "./responsable_bodega.mjs";
import TipoBodega from "./tipo_bodega.mjs";

const Bodega = sequelize.define('Bodega', {
  id_bodega: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  nombre_bodega: Sequelize.STRING,
  direccion_bodega: Sequelize.STRING,
  capacidad_bodega: Sequelize.INTEGER,
  precio_bodega: Sequelize.DECIMAL,
  id_tipo_bodega: {
    type: Sequelize.INTEGER,
    references: {
      model: 'tipo_bodega',
      key: 'id_tipo_bodega'
    }
  },
  id_responsable_bodega: {
    type: Sequelize.INTEGER,
    references: {
      model: 'responsable_bodega',
      key: 'id_responsable_bodega'
    }
  }
},{
    tableName: 'Bodega'
  });

  export default Bodega;