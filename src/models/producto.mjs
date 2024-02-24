import { DataTypes } from "sequelize";
import sequelize from "../config/database.mjs";

const Producto = sequelize.define(
  "Producto",
  {
    id_producto: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING,
    },
    descripcion: {
      type: DataTypes.STRING,
    },
    fecha_cosecha: {
      type: DataTypes.STRING,
    },
    image_url: {
      type: DataTypes.STRING,
    },
    disponibilidad: {
      type: DataTypes.BOOLEAN,
    },
    id_categoria: {
      type: DataTypes.INTEGER,
    },
    id_proveedor: {
      type: DataTypes.INTEGER,
    },
  },
  {
    tableName: "productos",
    timestamps: false,
  }
);

export default Producto;
