import { DataTypes } from "sequelize";
import sequelize from "../config/database.mjs";

const Proveedor = sequelize.define(
  "Proveedor",
  {
    id_proveedor: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING,
    },
    ubicacion: {
      type: DataTypes.STRING,
    },
    contacto: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "proveedores",
    timestamps: false,
  }
);

export default Proveedor;
