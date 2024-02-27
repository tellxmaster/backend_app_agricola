import { DataTypes } from "sequelize";
import sequelize from "../config/database.mjs";

const Pedido = sequelize.define(
    "Pedido",
    {
        id_pedido: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        id_empresa: {
            type: DataTypes.INTEGER,
        },

        id_producto: {
            type: DataTypes.INTEGER,
        },

        id_oferta: {
            type: DataTypes.INTEGER,
        },

        fecha_pedido: {
            type: DataTypes.DATE,
        },

        fecha_entrega: {
            type: DataTypes.DATE,
        },


        cantidad: {
            type: DataTypes.INTEGER,
        },
        
        direccion_entrega:{
            type: DataTypes.STRING,
        },
        estado: {
            type: DataTypes.STRING,
        },
        total: {
            type: DataTypes.DECIMAL(10, 2),
        },
        observaciones: {
            type: DataTypes.STRING,
        },
    },
    {
        tableName: "pedidos",
        timestamps: false,
    }

);

export default Pedido;