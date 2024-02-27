import TipoBodega from "../models/tipo_bodega.mjs";

const tiposBodegaController = {
  obtenerTiposBodega: async (req, res) => {
    try {
      const tiposBodega = await TipoBodega.findAll();
      res.json(tiposBodega);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  crearTipoBodega: async (req, res) => {
    try {
      const tipoBodega = await TipoBodega.create(req.body);
      res.status(201).json(tipoBodega);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },
};

export default tiposBodegaController;
