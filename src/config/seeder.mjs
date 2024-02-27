import sequelize from "./database.mjs";
import {
  Proveedor,
  Producto,
  Categoria,
  Oferta,
} from "../models/relationships.mjs";

const seedDatabase = async () => {
  try {
    await sequelize.sync({ force: true });

    // Crear una categoría de ejemplo
    const categoria = await Categoria.create({
      nombre: "Frutas",
      descripcion: "Todo tipo de frutas",
    });

    // Crear un proveedor de ejemplo
    const proveedor = await Proveedor.create({
      nombre: "Proveedor de Frutas",
      ubicacion: "Ubicación central",
      contacto: "contacto@proveedorfrutas.com",
    });

    // Crear un producto de ejemplo
    const producto = await Producto.create({
      nombre: "Manzana",
      descripcion: "Manzanas rojas frescas",
      fecha_cosecha: new Date(),
      disponibilidad: true,
      id_categoria: categoria.id_categoria,
      id_proveedor: proveedor.id_proveedor,
    });

    // Crear una oferta de ejemplo
    const oferta = await Oferta.create({
      cantidad: 150,
      precio: 0.5,
      fecha_inicio: new Date(),
      fecha_fin: new Date(new Date().setDate(new Date().getDate() + 30)), // 30 días a partir de hoy
      condiciones: "Descuento por volumen",
      id_producto: producto.id_producto,
    });

    console.log("Datos de ejemplo insertados correctamente.");
  } catch (error) {
    console.error("Error al insertar datos de ejemplo:", error);
  } finally {
    await sequelize.close(); // Asegúrate de cerrar la conexión
  }
};

seedDatabase();
