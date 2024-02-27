import Empresa from "../models/empresa.mjs";

const empresasController = {
    listar: async (req, res) => {
        try {
            const empresas = await Empresa.findAll();
            res.json(empresas);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },
    
    crear: async (req, res) => {
        try {
            const empresa = await Empresa.create(req.body);
            res.status(201).json(empresa);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },
    
    eliminar: async (req, res) => {
        try {
            const id = req.params.id;
            const deleteRowCount = await Empresa.destroy({
                where: { id_empresa: id },
            });
    
            if (deleteRowCount > 0) {
                res.status(200).json({ message: "Empresa eliminado" });
            } else {
                res.status(404).json({ message: "Empresa no encontrado" });
            }
        } catch (error) {
            res.status(500).send(error.message);
        }
    },
    
    actualizar: async (req, res) => {
        try {
            const id = req.params.id;
            const updateRowCount = await Empresa.update(req.body, {
                where: { id_empresa: id },
            });
        
            if (updateRowCount > 0) {
                const updatedEmpresa = await Empresa.findOne({
                where: { id_empresa: id },
                });
                res.json(updatedEmpresa);
            } else {
                res.status(404).json({ message: "Empresa no encontrado" });
            }
        } catch (error) {
            res.status(500).send(error.message);
        }
    },
    obtenerPorId: async (req, res) => {
        try {
            const id = req.params.id;
            const empresa = await Empresa.findOne({
                where: { id_empresa: id },
            });
            res.json(empresa);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },
};

export default empresasController;