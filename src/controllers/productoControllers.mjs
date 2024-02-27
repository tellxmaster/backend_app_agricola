import Producto from "../models/productos.mjs";
import Proveedor from "../models/proveedor.mjs";


export const obtenerProductos = async (req, res) => {
  try {
    const productos = await Producto.findAll({ include: { model: Proveedor } });
    res.json(productos);
  } catch (error) {
    res.status(500).send(error.message);
  }
};


export const crearProducto = async (req, res) => {
  try {
    const producto = await Producto.create(req.body);
    res.status(201).json(producto);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const eliminarProducto = async (req, res) => {
  const { id } = req.params; // Obtener el ID del producto a eliminar desde los parámetros de la solicitud
  try {
    // Buscar el producto por su ID y eliminarlo
    const productoEliminado = await Producto.destroy({ where: { id_producto: id } });
    if (productoEliminado === 0) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }
    res.json({ message: 'Producto eliminado correctamente' });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const editarProducto = async (req, res) => {
  const { id } = req.params; // Obtener el ID del producto a editar desde los parámetros de la solicitud
  const { nombre_producto, descripcion_producto, Precio_unitario, id_proveedor } = req.body; // Obtener los datos actualizados del producto desde el cuerpo de la solicitud
  try {
    // Buscar el producto por su ID y actualizar sus datos
    const productoActualizado = await Producto.update(
      { nombre_producto, descripcion_producto, Precio_unitario, id_proveedor },
      { where: { id_producto: id } }
    );
    if (productoActualizado[0] === 0) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }
    res.json({ message: 'Producto actualizado correctamente' });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const fetchProductos = async () => {
  try {
    return await Producto.findAll({ include: { model: Proveedor } });
  } catch (error) {
    throw error;
  }
};
