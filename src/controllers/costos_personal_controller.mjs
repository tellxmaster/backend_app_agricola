import CostosDePersonal from "../models/costo-personal.mjs";

const costosDePersonalController = {
  async listar(req, res) {
    try {
      const costosPersonal = await CostosDePersonal.findAll();
      res.json(costosPersonal);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  async crear(req, res) {
    try {
      const costoPersonal = await CostosDePersonal.create(req.body);
      res.status(201).json(costoPersonal);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  async actualizar(req, res) {
    try {
      const { id } = req.params;
      await CostosDePersonal.update(req.body, { where: { id } });
      const updatedCostoPersonal = await CostosDePersonal.findByPk(id);
      if (updatedCostoPersonal) {
        res.json(updatedCostoPersonal);
      } else {
        res.status(404).send('Costo de Personal no encontrado');
      }
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  async eliminar(req, res) {
    try {
      const { id } = req.params;
      const deleted = await CostosDePersonal.destroy({ where: { id } });
      if (deleted) {
        res.status(204).send("Costo de Personal eliminado");
      } else {
        res.status(404).send("Costo de Personal no encontrado");
      }
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  async obtenerPorId(req, res) {
    try {
      const { id } = req.params;
      const costoPersonal = await CostosDePersonal.findByPk(id);
      if (costoPersonal) {
        res.json(costoPersonal);
      } else {
        res.status(404).send("Costo de Personal no encontrado");
      }
    } catch (error) {
      res.status(500).send(error.message);
    }
  },
};

export default costosDePersonalController;
