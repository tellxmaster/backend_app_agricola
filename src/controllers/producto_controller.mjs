import Producto from "../models/producto.mjs";
const productosController = {
  listar: async (req, res) => {
    try {
      const productos = await Producto.findAll();
      res.json(productos);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  crear: async (req, res) => {
    try {
      const producto = await Producto.create(req.body);
      res.status(201).json(producto);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  eliminar: async (req, res) => {
    try {
      const id = req.params.id;
      const deleteRowCount = await Producto.destroy({
        where: { id_producto: id },
      });

      if (deleteRowCount > 0) {
        res.status(200).json({ message: "Producto eliminado" });
      } else {
        res.status(404).json({ message: "Producto no encontrado" });
      }
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  actualizar: async (req, res) => {
    try {
      const id = req.params.id;
      const updateRowCount = await Producto.update(req.body, {
        where: { id_producto: id },
      });

      if (updateRowCount > 0) {
        const updatedProducto = await Producto.findOne({
          where: { id_producto: id },
        });
        res.json(updatedProducto);
      } else {
        res.status(404).json({ message: "Producto no encontrado" });
      }
    } catch (error) {
      res.status(500).send(error.message);
    }
  },
};

export default productosController;
