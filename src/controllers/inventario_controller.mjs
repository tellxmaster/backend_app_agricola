import Bodega from "../models/bodega.mjs";
import Inventario from "../models/inventario.mjs";
import Producto from "../models/productos.mjs";

const inventarioController = {
  obtenerInventarios: async (req, res) => {
    try {
      const inventarios = await Inventario.findAll({
        include: [{ model: Producto }, { model: Bodega }],
      });
      res.json(inventarios);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  crearInventario: async (req, res) => {
    try {
      const inventario = await Inventario.create(req.body);
      res.status(201).json(inventario);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  eliminarInventario: async (req, res) => {
    const { id } = req.params; // Obtener el ID del inventario a eliminar desde los parámetros de la solicitud
    try {
      // Buscar el producto por su ID y eliminarlo
      const inventarioEliminado = await Inventario.destroy({
        where: { id_inventario: id },
      });
      if (inventarioEliminado === 0) {
        return res.status(404).json({ message: "Inventario no encontrado" });
      }
      res.json({ message: "Inventario eliminado correctamente" });
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  editarInventario: async (req, res) => {
    const { id } = req.params; // Obtener el ID del inventario a editar desde los parámetros de la solicitud
    const {
      id_producto,
      id_bodega,
      stock,
      ubicacion_en_bodega,
      fecha_entrada,
      fecha_caducidad,
    } = req.body; // Obtener los datos actualizados del producto desde el cuerpo de la solicitud
    try {
      // Buscar el producto por su ID y actualizar sus datos
      const bodegaActualizado = await Inventario.update(
        {
          id_producto,
          id_bodega,
          stock,
          ubicacion_en_bodega,
          fecha_entrada,
          fecha_caducidad,
        },
        { where: { id_inventario: id } }
      );
      if (bodegaActualizado[0] === 0) {
        return res.status(404).json({ message: "Inventario no encontrado" });
      }
      res.json({ message: "Inventario actualizado correctamente" });
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  fetchInventarios: async () => {
    try {
      return await Inventario.findAll({
        include: [
          {
            model: Producto,
            attributes: ["nombre_producto"], // Asumiendo que el atributo se llama 'nombre_producto' en tu modelo Producto
          },
          {
            model: Bodega,
            attributes: ["nombre_bodega"], // Asumiendo que el atributo se llama 'nombre_bodega' en tu modelo Bodega
          },
        ],
      });
    } catch (error) {
      throw error;
    }
  },
};

export default inventarioController;
