import CostosDeLogistica from "../models/costo-logistica.mjs";

const costosDeLogisticaController = {
  async listar(req, res) {
    try {
      const costosLogistica = await CostosDeLogistica.findAll();
      res.json(costosLogistica);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  async crear(req, res) {
    try {
      const costoLogistica = await CostosDeLogistica.create(req.body);
      res.status(201).json(costoLogistica);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  async actualizar(req, res) {
    try {
      const { id } = req.params;
      await CostosDeLogistica.update(req.body, { where: { id } });
      const updatedCostoLogistica = await CostosDeLogistica.findByPk(id);
      if (updatedCostoLogistica) {
        res.json(updatedCostoLogistica);
      } else {
        res.status(404).send('Costo de Logística no encontrado');
      }
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  async eliminar(req, res) {
    try {
      const { id } = req.params;
      const deleted = await CostosDeLogistica.destroy({ where: { id } });
      if (deleted) {
        res.status(204).send("Costo de Logística eliminado");
      } else {
        res.status(404).send("Costo de Logística no encontrado");
      }
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  async obtenerPorId(req, res) {
    try {
      const { id } = req.params;
      const costoLogistica = await CostosDeLogistica.findByPk(id);
      if (costoLogistica) {
        res.json(costoLogistica);
      } else {
        res.status(404).send("Costo de Logística no encontrado");
      }
    } catch (error) {
      res.status(500).send(error.message);
    }
  },
};

export default costosDeLogisticaController;
