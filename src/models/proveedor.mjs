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
    direccion: {
      type: DataTypes.STRING,
      allowNull: true, // Esto permite que el campo sea null
    },
    ubicacion: {
      type: DataTypes.JSON,
      allowNull: true, // Esto permite que el campo sea null
      // Puedes especificar que este campo espera un objeto con una estructura específica, pero eso se manejaría a nivel de aplicación, no a nivel de base de datos.
    },
    telefono: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "proveedores",
    timestamps: false,
  }
);

export default Proveedor;
