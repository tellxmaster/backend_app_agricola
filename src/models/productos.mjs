import { Sequelize } from "sequelize";
import sequelize from "../config/database.mjs";
import Proveedor from "./proveedor.mjs";

// Definición de modelos
const Producto = sequelize.define('Producto', {
  id_producto: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  nombre_producto: Sequelize.STRING,
  descripcion_producto: Sequelize.TEXT,
  Precio_unitario: Sequelize.DECIMAL,
  id_proveedor: {
    type: Sequelize.INTEGER,
    references: {
      model: 'Proveedor',
      key: 'id_proveedor'
    }
  }
},{
    tableName:'Producto'
  }
  );

  export default Producto;