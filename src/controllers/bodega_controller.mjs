import Bodega from "../models/bodega.mjs";
import ResponsableBodega from "../models/responsable_bodega.mjs";
import TipoBodega from "../models/tipo_bodega.mjs";

const bodegaController = {
  obtenerBodegas: async (req, res) => {
    try {
      const bodegas = await Bodega.findAll({
        include: [{ model: TipoBodega }, { model: ResponsableBodega }],
      });
      res.json(bodegas);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  crearBodega: async (req, res) => {
    try {
      const bodega = await Bodega.create(req.body);
      res.status(201).json(bodega);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  eliminarBodega: async (req, res) => {
    const { id } = req.params; // Obtener el ID de la bodega a eliminar desde los parámetros de la solicitud
    try {
      // Buscar el producto por su ID y eliminarlo
      const bodegaEliminado = await Bodega.destroy({
        where: { id_bodega: id },
      });
      if (bodegaEliminado === 0) {
        return res.status(404).json({ message: "Bodega no encontrada" });
      }
      res.json({ message: "Bodega eliminada correctamente" });
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  editarBodega: async (req, res) => {
    const { id } = req.params; // Obtener el ID del producto a editar desde los parámetros de la solicitud
    const {
      nombre_bodega,
      direccion_bodega,
      capacidad_bodega,
      precio_bodega,
      id_tipo_bodega,
      id_responsable_bodega,
    } = req.body; // Obtener los datos actualizados del producto desde el cuerpo de la solicitud
    try {
      // Buscar el producto por su ID y actualizar sus datos
      const bodegaActualizado = await Bodega.update(
        {
          nombre_bodega,
          direccion_bodega,
          capacidad_bodega,
          precio_bodega,
          id_tipo_bodega,
          id_responsable_bodega,
        },
        { where: { id_bodega: id } }
      );
      if (bodegaActualizado[0] === 0) {
        return res.status(404).json({ message: "Bodega no encontrada" });
      }
      res.json({ message: "Bodega actualizada correctamente" });
    } catch (error) {
      res.status(500).send(error.message);
    }
  },
};

export default bodegaController;
