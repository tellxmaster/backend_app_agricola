import CostosDeProduccion from "../models/costo-produccion.mjs";

const costosDeProduccionController = {
  async listar(req, res) {
    try {
      const costosProduccion = await CostosDeProduccion.findAll();
      res.json(costosProduccion);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  async crear(req, res) {
    try {
      const costoProduccion = await CostosDeProduccion.create(req.body);
      res.status(201).json(costoProduccion);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  async actualizar(req, res) {
    try {
      const { id } = req.params;
      await CostosDeProduccion.update(req.body, { where: { id } });
      const updatedCostoProduccion = await CostosDeProduccion.findByPk(id);
      if (updatedCostoProduccion) {
        res.json(updatedCostoProduccion);
      } else {
        res.status(404).send('Costo de Producción no encontrado');
      }
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  async eliminar(req, res) {
    try {
      const { id } = req.params;
      const deleted = await CostosDeProduccion.destroy({ where: { id } });
      if (deleted) {
        res.status(204).send("Costo de Producción eliminado");
      } else {
        res.status(404).send("Costo de Producción no encontrado");
      }
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  async obtenerPorId(req, res) {
    try {
      const { id } = req.params;
      const costoProduccion = await CostosDeProduccion.findByPk(id);
      if (costoProduccion) {
        res.json(costoProduccion);
      } else {
        res.status(404).send("Costo de Producción no encontrado");
      }
    } catch (error) {
      res.status(500).send(error.message);
    }
  },
};

export default costosDeProduccionController;
