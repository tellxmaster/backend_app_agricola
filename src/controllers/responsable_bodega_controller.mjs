import ResponsableBodega from "../models/responsable_bodega.mjs";

const responsablesBodegaController = {
  obtenerResponsablesBodega: async (req, res) => {
    try {
      const responsablesBodega = await ResponsableBodega.findAll();
      res.json(responsablesBodega);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },
  crearResponsableBodega: async (req, res) => {
    try {
      const responsableBodega = await ResponsableBodega.create(req.body);
      res.status(201).json(responsableBodega);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },
};

export default responsablesBodegaController;
