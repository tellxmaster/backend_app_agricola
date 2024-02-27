import sequelize from "./database.mjs";
import {
  Proveedor,
  Producto,
  Categoria,
  Oferta,
  Empresa,
  Pedido,
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

    // Crear una empresa de ejemplo
    const empresa = await Empresa.create({
      nombre: "La Favorita",
      direccion: "10 de agosto",
      numero_contacto: "0971239742",
      correo: "pedidos@lafavorita.com",
      ruc: "1728394756-1",
      nif: "A12345678",
      preferencias_entrega: "Entrega a domicilio entre las 17h00 y 19h00",
    });

    // Crear un pedido de ejemplo
    const pedido = await Pedido.create({
      id_empresa: empresa.id_empresa,
      id_producto: producto.id_producto,
      id_oferta: oferta.id_oferta,
      fecha_pedido: new Date(),
      fecha_entrega: new Date(new Date().setDate(new Date().getDate() + 7)), // 7 días a partir de hoy
      direccion_entrega: "Calle Falsa 123",
      cantidad: 100,
      estado: "En proceso",
      total: 50,
      observaciones: "Entregar en la puerta principal",
    });

    console.log("Datos de ejemplo insertados correctamente.");
  } catch (error) {
    console.error("Error al insertar datos de ejemplo:", error);
  } finally {
    await sequelize.close(); // Asegúrate de cerrar la conexión
  }
};

seedDatabase();
