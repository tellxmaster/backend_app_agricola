import { DataTypes, Sequelize } from "sequelize";
import sequelize from "../database/database.mjs";

const TipoBodega = sequelize.define('TipoBodega', {
  id_tipo_bodega: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  tipo_bodega: Sequelize.STRING
},{
    tableName: 'tipo_bodega'
  });

  export default TipoBodega;