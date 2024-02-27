import { Sequelize } from "sequelize";
import sequelize from "../config/database.mjs";

const ResponsableBodega = sequelize.define(
  "ResponsableBodega",
  {
    id_responsable_bodega: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    telefono_responsable: Sequelize.STRING,
    correo_responsable: Sequelize.STRING,
  },
  {
    tableName: "responsable_bodega",
  }
);

export default ResponsableBodega;
