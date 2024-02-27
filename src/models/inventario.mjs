import { Sequelize } from "sequelize";
import sequelize from "../database/database.mjs";
import Producto from "./productos.mjs";
import Bodega from "./bodega.mjs";
import Proveedor from "./proveedor.mjs";
import TipoBodega from "./tipo_bodega.mjs";
import ResponsableBodega from "./responsable_bodega.mjs";

const Inventario = sequelize.define('Inventario', {
  id_inventario: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  id_producto: {
    type: Sequelize.INTEGER,
    references: {
      model: 'Producto',
      key: 'id_producto'
    }
  },
  id_bodega: {
    type: Sequelize.INTEGER,
    references: {
      model: 'Bodega',
      key: 'id_bodega'
    }
  },
  stock: Sequelize.INTEGER,
  ubicacion_en_bodega: Sequelize.STRING,
  fecha_entrada: { type: Sequelize.DATEONLY }, // Cambiar a DATEONLY para solo fecha
  fecha_caducidad: { type: Sequelize.DATEONLY } // Cambiar a DATEONLY para solo fecha
},{
    tableName: 'Inventario'
  });


export default Inventario

// Sincronizar con la base de datos
sequelize.sync();

