import { Sequelize } from "sequelize";
import sequelize from "../config/database.mjs";

const Inventario = sequelize.define(
  "Inventario",
  {
    id_inventario: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_producto: {
      type: Sequelize.INTEGER,
    },
    id_bodega: {
      type: Sequelize.INTEGER,
    },
    stock: Sequelize.INTEGER,
    ubicacion_en_bodega: Sequelize.STRING,
    fecha_entrada: { type: Sequelize.DATEONLY }, // Cambiar a DATEONLY para solo fecha
    fecha_caducidad: { type: Sequelize.DATEONLY }, // Cambiar a DATEONLY para solo fecha
  },
  {
    tableName: "inventarios",
  }
);

export default Inventario;
