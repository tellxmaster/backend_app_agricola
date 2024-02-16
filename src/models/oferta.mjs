import { DataTypes } from "sequelize";
import sequelize from "../config/database.mjs";

const Oferta = sequelize.define(
  "Oferta",
  {
    id_oferta: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    cantidad: {
      type: DataTypes.INTEGER,
    },
    precio: {
      type: DataTypes.DOUBLE,
    },
    fecha_inicio: {
      type: DataTypes.DATE,
    },
    fecha_fin: {
      type: DataTypes.DATE,
    },
    condiciones: {
      type: DataTypes.STRING,
    },
    id_producto: {
      type: DataTypes.INTEGER,
    },
  },
  {
    tableName: "ofertas",
    timestamps: false,
  }
);

export default Oferta;
