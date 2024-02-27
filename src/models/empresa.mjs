import { DataTypes } from "sequelize";
import sequelize from "../config/database.mjs";

const Empresa = sequelize.define(
  "Empresa",
  {
    id_empresa: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING,
    },
    direccion: {
      type: DataTypes.STRING,
    },
    numero_contacto: {
      type: DataTypes.STRING,
    },
    correo: {
      type: DataTypes.STRING,
    },
    ruc: {
        type: DataTypes.STRING,
    },
    nif: {
        type: DataTypes.STRING,
    },
    preferencias_entrega:{
        type: DataTypes.STRING,
    }
  },
  {
    tableName: "empresas",
    timestamps: false,
  }
);

export default Empresa;