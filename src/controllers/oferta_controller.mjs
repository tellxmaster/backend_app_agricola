import Oferta from "../models/producto.mjs";
const ofertasController = {
  listar: async (req, res) => {
    try {
      const ofertas = await Oferta.findAll();
      res.json(ofertas);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  crear: async (req, res) => {
    try {
      const producto = await Oferta.create(req.body);
      res.status(201).json(producto);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  eliminar: async (req, res) => {
    try {
      const id = req.params.id;
      const deleteRowCount = await Oferta.destroy({
        where: { id_producto: id },
      });

      if (deleteRowCount > 0) {
        res.status(200).json({ message: "Oferta eliminado" });
      } else {
        res.status(404).json({ message: "Oferta no encontrado" });
      }
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  actualizar: async (req, res) => {
    try {
      const id = req.params.id;
      const updateRowCount = await Oferta.update(req.body, {
        where: { id_producto: id },
      });

      if (updateRowCount > 0) {
        const updatedOferta = await Oferta.findOne({
          where: { id_producto: id },
        });
        res.json(updatedOferta);
      } else {
        res.status(404).json({ message: "Oferta no encontrado" });
      }
    } catch (error) {
      res.status(500).send(error.message);
    }
  },
};

export default ofertasController;