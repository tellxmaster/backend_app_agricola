// import Proveedor from "../models/proveedor.mjs";

// const proveedoresController = {
//   listar: async (req, res) => {
//     try {
//       const proveedores = await Proveedor.findAll();
//       res.json(proveedores);
//     } catch (error) {
//       res.status(500).send(error.message);
//     }
//   },

//   crear: async (req, res) => {
//     try {
//       const proveedor = await Proveedor.create(req.body);
//       res.status(201).json(proveedor);
//     } catch (error) {
//       res.status(500).send(error.message);
//     }
//   },

//   eliminar: async (req, res) => {
//     try {
//       const id = req.params.id;
//       const deleteRowCount = await Proveedor.destroy({
//         where: { id_proveedor: id },
//       });

//       if (deleteRowCount > 0) {
//         res.status(200).json({ message: "Proveedor eliminado" });
//       } else {
//         res.status(404).json({ message: "Proveedor no encontrado" });
//       }
//     } catch (error) {
//       res.status(500).send(error.message);
//     }
//   },

//   actualizar: async (req, res) => {
//     try {
//       const id = req.params.id;
//       const updateRowCount = await Proveedor.update(req.body, {
//         where: { id_proveedor: id },
//       });

//       if (updateRowCount > 0) {
//         const updatedProveedor = await Proveedor.findOne({
//           where: { id_proveedor: id },
//         });
//         res.json(updatedProveedor);
//       } else {
//         res.status(404).json({ message: "Proveedor no encontrado" });
//       }
//     } catch (error) {
//       res.status(500).send(error.message);
//     }
//   },

//   obtenerPorId: async (req, res) => {
//     try {
//       const id = req.params.id;
//       const proveedor = await Proveedor.findOne({
//         where: { id_proveedor: id },
//       });

//       if (proveedor) {
//         res.json(proveedor);
//       } else {
//         res.status(404).json({ message: "Proveedor no encontrado" });
//       }
//     } catch (error) {
//       res.status(500).send(error.message);
//     }
//   },
// };

// export default proveedoresController;
