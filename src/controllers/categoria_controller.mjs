import Categoria from "../models/categoria.mjs";
const categoriasController = {
  listar: async (req, res) => {
    try {
      const categorias = await Categoria.findAll();
      res.json(categorias);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  crear: async (req, res) => {
    try {
      const producto = await Categoria.create(req.body);
      res.status(201).json(producto);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  eliminar: async (req, res) => {
    try {
      const id = req.params.id;
      const deleteRowCount = await Categoria.destroy({
        where: { id_producto: id },
      });

      if (deleteRowCount > 0) {
        res.status(200).json({ message: "Categoria eliminado" });
      } else {
        res.status(404).json({ message: "Categoria no encontrado" });
      }
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  actualizar: async (req, res) => {
    try {
      const id = req.params.id;
      const updateRowCount = await Categoria.update(req.body, {
        where: { id_producto: id },
      });

      if (updateRowCount > 0) {
        const updatedCategoria = await Categoria.findOne({
          where: { id_producto: id },
        });
        res.json(updatedCategoria);
      } else {
        res.status(404).json({ message: "Categoria no encontrado" });
      }
    } catch (error) {
      res.status(500).send(error.message);
    }
  },
  obtenerPorId: async (req, res) => {
    try {
      const id = req.params.id;
      const categoria = await Categoria.findOne({
        where: { id_producto: id },
      });

      if (categoria) {
        res.json(pro);
      } else {
        res.status(404).json({ message: "Categoria no encontrada" });
      }
    } catch (error) {
      res.status(500).send(error.message);
    }
  },
};

export default categoriasController;
