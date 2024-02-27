import { Router } from "express";
// import {
//   Proveedor,
//   Producto,
//   Oferta,
//   Categoria,
// } from "../models/relationships.mjs";
// import proveedoresController from "../controllers/proveedor_controller.mjs";
// import productoController from "../controllers/producto_controller.mjs";
// import ofertasController from "../controllers/oferta_controller.mjs";
// import categoriasController from "../controllers/categoria_controller.mjs";
import { obtenerProveedores, crearProveedor, eliminarProveedor, editarProveedor } from "../controllers/proveedorControllers.mjs";
import { obtenerProductos, crearProducto, eliminarProducto, editarProducto } from "../controllers/productoControllers.mjs";
import { obtenerTiposBodega, crearTipoBodega } from "../controllers/tipoBodegaControllera.mjs";
import { obtenerResponsablesBodega, crearResponsableBodega } from "../controllers/responsableBodegaControllers.mjs";
import { obtenerBodegas, crearBodega, eliminarBodega, editarBodega } from "../controllers/bodegaControllers.mjs";
import { obtenerInventarios, crearInventario, eliminarInventario, editarInventario } from "../controllers/inventarioControllers.mjs";
import { generarReporte } from "../controllers/reporteController.mjs";

import { join } from "path";

const router = Router();

router.get("/", (req, res) => {
  const htmlPath = join(process.cwd(), "src", "resources", "html", "home.html");
  res.sendFile(htmlPath);
});


// Proveedores
router.get("/proveedores",obtenerProveedores);
router.post("/proveedores",crearProveedor);
router.delete('/proveedores/:id', eliminarProveedor); // Eliminar un producto por su ID
router.put('/proveedores/:id', editarProveedor); 
//PRODUCTOS 
router.get("/productos",obtenerProductos);
router.post("/productos",crearProducto);
router.delete('/productos/:id', eliminarProducto); // Eliminar un producto por su ID
router.put('/productos/:id', editarProducto); // Editar un producto por su ID
//TIPOBODEGA
router.get("/tipoBodegas",obtenerTiposBodega);
router.post("/tipoBodegas",crearTipoBodega);
//ENCARGADO BODEGA 
router.get("/responsableBodegas",obtenerResponsablesBodega);
router.post("/responsableBodegas",crearResponsableBodega);
//BODEGA 
router.get("/bodegas",obtenerBodegas);
router.post("/bodegas",crearBodega);
router.delete('/bodegas/:id', eliminarBodega); // Eliminar una bodega por su ID
router.put('/bodegas/:id', editarBodega); 
//INVENTARIO
router.get("/inventarios",obtenerInventarios);
router.post("/inventarios",crearInventario);
router.delete('/inventarios/:id', eliminarInventario); // Eliminar un inventario por su ID
router.put('/inventarios/:id', editarInventario); 
//REPORTE
router.get('/reporte', generarReporte);
export default router;
