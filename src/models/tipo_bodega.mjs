import { DataTypes, Sequelize } from "sequelize";
import sequelize from "../config/database.mjs";

const TipoBodega = sequelize.define(
  "TipoBodega",
  {
    id_tipo_bodega: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    tipo_bodega: Sequelize.STRING,
  },
  {
    tableName: "tipos_bodega",
  }
);

export default TipoBodega;
