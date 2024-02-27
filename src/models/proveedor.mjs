// Importa la clase Sequelize desde el paquete 'sequelize'
import { Sequelize } from 'sequelize';
import db from '../config/database.mjs';

// Importa la instancia de Sequelize
import sequelize from "../config/database.mjs";

// Define el modelo Proveedor con el nombre de la tabla 'Proveedor'
const Proveedor = sequelize.define('Proveedor', {
  id_proveedor: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  nombre_proveedor: Sequelize.STRING,
  direccion_proveedor: Sequelize.STRING,
  telefono_proveedor: Sequelize.STRING,
  email_proveedor: Sequelize.STRING
}, {
  tableName: 'Proveedor' // Especifica el nombre de la tabla
});



export default Proveedor;

