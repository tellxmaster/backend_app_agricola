import Pedido from "../models/pedido.mjs";

const pedidosController = {
    listar: async (req, res) => {
        try {
            const pedidos = await Pedido.findAll();
            res.json(pedidos);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },
    
    crear: async (req, res) => {
        try {
            const pedido = await Pedido.create(req.body);
            res.status(201).json(pedido);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },
    
    eliminar: async (req, res) => {
        try {
            const id = req.params.id;
            const deleteRowCount = await Pedido.destroy({
                where: { id_pedido: id },
            });
    
            if (deleteRowCount > 0) {
                res.status(200).json({ message: "Pedido eliminado" });
            } else {
                res.status(404).json({ message: "Pedido no encontrado" });
            }
        } catch (error) {
            res.status(500).send(error.message);
        }
    },
    
    actualizar: async (req, res) => {
        try {
            const id = req.params.id;
            const updateRowCount = await Pedido.update(req.body, {
                where: { id_pedido: id },
            });
        
            if (updateRowCount > 0) {
                const updatedPedido = await Pedido.findOne({
                where: { id_pedido: id },
                });
                res.json(updatedPedido);
            } else {
                res.status(404).json({ message: "Pedido no encontrado" });
            }
        } catch (error) {
            res.status(500).send(error.message);
        }
    },
    obtenerPorId: async (req, res) => {
        try {
            const id = req.params.id;
            const pedido = await Pedido.findOne({
                where: { id_pedido: id },
            });
            res.json(pedido);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },
};

export default pedidosController;