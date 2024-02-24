import { Router } from "express";
import {
  Proveedor,
  Producto,
  Oferta,
  Categoria,
} from "../models/relationships.mjs";
import proveedoresController from "../controllers/proveedor_controller.mjs";
import productoController from "../controllers/producto_controller.mjs";
import ofertasController from "../controllers/oferta_controller.mjs";
import categoriasController from "../controllers/categoria_controller.mjs";
import { join } from "path";

const router = Router();

router.get("/", (req, res) => {
  const htmlPath = join(process.cwd(), "src", "resources", "html", "home.html");
  res.sendFile(htmlPath);
});

/**
 * @swagger
 * /proveedores:
 *   get:
 *     summary: Lista todos los proveedores
 *     tags: [Proveedores]
 *     responses:
 *       200:
 *         description: Lista de proveedores
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Proveedor'
 */
router.get("/proveedores", proveedoresController.listar);

/**
 * @swagger
 * /proveedores/{id_proveedor}:
 *   get:
 *     summary: Obtiene un proveedor
 *     tags: [Proveedores]
 *     parameters:
 *       - in: path
 *         name: id_proveedor
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del proveedor a eliminar
 *     responses:
 *       200:
 *         description: Proveedor obtenido exitosamente
 *       404:
 *         description: Proveedor no encontrado
 */
router.get("/proveedores/:id", proveedoresController.obtenerPorId);

/**
 * @swagger
 * /proveedores:
 *   post:
 *     summary: Crea un nuevo proveedor
 *     tags: [Proveedores]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nombre
 *               - ubicacion
 *               - contacto
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: Proveedor ABC
 *               ubicacion:
 *                 type: string
 *                 example: Calle 123, Ciudad XYZ
 *               contacto:
 *                 type: string
 *                 example: contacto@proveedorabc.com
 *     responses:
 *       201:
 *         description: Proveedor creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Proveedor'
 *       400:
 *         description: Información inválida
 */
router.post("/proveedores", proveedoresController.crear);

/**
 * @swagger
 * /proveedores/{id_proveedor}:
 *   delete:
 *     summary: Elimina un proveedor
 *     tags: [Proveedores]
 *     parameters:
 *       - in: path
 *         name: id_proveedor
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del proveedor a eliminar
 *     responses:
 *       200:
 *         description: Proveedor eliminado exitosamente
 *       404:
 *         description: Proveedor no encontrado
 */
router.delete("/proveedores/:id", proveedoresController.eliminar);

/**
 * @swagger
 * /proveedores/{id_proveedor}:
 *   put:
 *     summary: Actualiza un proveedor existente
 *     tags: [Proveedores]
 *     parameters:
 *       - in: path
 *         name: id_proveedor
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del proveedor
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: Proveedor Nuevo ABC
 *               ubicacion:
 *                 type: string
 *                 example: Calle 456, Ciudad XYZ
 *               contacto:
 *                 type: string
 *                 example: nuevocontacto@proveedorabc.com
 *     responses:
 *       200:
 *         description: Proveedor actualizado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Proveedor'
 *       404:
 *         description: Proveedor no encontrado
 *       400:
 *         description: Información inválida
 */
router.put("/proveedores/:id", proveedoresController.actualizar);

/**
 * @swagger
 * /productos:
 *   get:
 *     summary: Retorna una lista de productos.
 *     tags: [Productos]
 *     responses:
 *       200:
 *         description: Una lista de productos.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Producto'
 */
router.get("/productos", productoController.listar);

/**
 * @swagger
 * /productos/{id_producto}:
 *   get:
 *     summary: Obtiene un producto
 *     tags: [Productos]
 *     parameters:
 *       - in: path
 *         name: id_producto
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del producto a eliminar
 *     responses:
 *       200:
 *         description: Producto obtenido exitosamente
 *       404:
 *         description: Producto no encontrado
 */
router.get("/productos/:id", productoController.obtenerPorId);

/**
 * @swagger
 * /productos:
 *   post:
 *     summary: Crea un nuevo producto
 *     tags: [Productos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Producto'
 *     responses:
 *       201:
 *         description: Producto creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Producto'
 *       400:
 *         description: Entrada inválida, los datos del producto son incorrectos
 */
router.post("/productos", productoController.crear);

/**
 * @swagger
 * /productos/{id}:
 *   delete:
 *     summary: Elimina un producto
 *     tags: [Productos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del producto a eliminar
 *     responses:
 *       200:
 *         description: Producto eliminado exitosamente
 *       404:
 *         description: Producto no encontrado
 */
router.delete("/productos/:id", productoController.eliminar);

/**
 * @swagger
 * /productos/{id}:
 *   put:
 *     summary: Actualiza un producto existente
 *     tags: [Productos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del producto a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Producto'
 *     responses:
 *       200:
 *         description: Producto actualizado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Producto'
 *       404:
 *         description: Producto no encontrado
 *       400:
 *         description: Entrada inválida, los datos del producto para actualizar son incorrectos
 */
router.put("/productos/:id", productoController.actualizar);

/**
 * @swagger
 * /ofertas:
 *   get:
 *     summary: Lista todas las ofertas
 *     tags: [Ofertas]
 *     responses:
 *       200:
 *         description: Lista de ofertas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Oferta'
 */
router.get("/ofertas", ofertasController.listar);

/**
 * @swagger
 * /ofertas/{id_oferta}:
 *   get:
 *     summary: Obtiene una oferta
 *     tags: [Ofertas]
 *     parameters:
 *       - in: path
 *         name: id_oferta
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del oferta a obtener
 *     responses:
 *       200:
 *         description: Oferta obtenido exitosamente
 *       404:
 *         description: Oferta no encontrado
 */
router.get("/ofertas/:id", ofertasController.obtenerPorId);

/**
 * @swagger
 * /ofertas:
 *   post:
 *     summary: Crea una nueva oferta
 *     tags: [Ofertas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - cantidad
 *               - precio
 *               - fecha_inicio
 *               - fecha_fin
 *               - condiciones
 *               - id_producto
 *             properties:
 *               cantidad:
 *                 type: integer
 *                 example: 100
 *               precio:
 *                 type: number
 *                 format: double
 *                 example: 1.99
 *               fecha_inicio:
 *                 type: string
 *                 format: date
 *                 example: '2024-01-01'
 *               fecha_fin:
 *                 type: string
 *                 format: date
 *                 example: '2024-12-31'
 *               condiciones:
 *                 type: string
 *                 example: 'Descuento por compra en volumen'
 *               id_producto:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       201:
 *         description: Oferta creada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Oferta'
 *       400:
 *         description: Información inválida
 */
router.post("/ofertas", ofertasController.crear);

/**
 * @swagger
 * /ofertas/{id_oferta}:
 *   delete:
 *     summary: Elimina una oferta
 *     tags: [Ofertas]
 *     parameters:
 *       - in: path
 *         name: id_oferta
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la oferta a eliminar
 *     responses:
 *       200:
 *         description: Oferta eliminada exitosamente
 *       404:
 *         description: Oferta no encontrada
 */
router.delete("/ofertas/:id", ofertasController.eliminar);

/**
 * @swagger
 * /ofertas/{id_oferta}:
 *   put:
 *     summary: Actualiza una oferta existente
 *     tags: [Ofertas]
 *     parameters:
 *       - in: path
 *         name: id_oferta
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la oferta a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               cantidad:
 *                 type: integer
 *                 example: 150
 *               precio:
 *                 type: number
 *                 format: double
 *                 example: 1.89
 *               fecha_inicio:
 *                 type: string
 *                 format: date
 *                 example: '2024-01-01'
 *               fecha_fin:
 *                 type: string
 *                 format: date
 *                 example: '2024-12-31'
 *               condiciones:
 *                 type: string
 *                 example: 'Descuento por compra mayor a 200 unidades'
 *               id_producto:
 *                 type: integer
 *                 example: 2
 *     responses:
 *       200:
 *         description: Oferta actualizada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Oferta'
 *       404:
 *         description: Oferta no encontrada
 *       400:
 *         description: Información inválida
 */
router.put("/ofertas/:id", ofertasController.actualizar);

/**
 * @swagger
 * /categorias:
 *   get:
 *     summary: Lista todas las categorías
 *     tags: [Categorias]
 *     responses:
 *       200:
 *         description: Lista de categorías
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Categoria'
 */
router.get("/categorias", categoriasController.listar);

/**
 * @swagger
 * /categorias/{id_categoria}:
 *   get:
 *     summary: Obtiene una categoria
 *     tags: [Categorias]
 *     parameters:
 *       - in: path
 *         name: id_categoria
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la categoria a obtener
 *     responses:
 *       200:
 *         description: Categoria obtenida exitosamente
 *       404:
 *         description: Categoria no encontrada
 */
router.get("/categorias/:id", categoriasController.obtenerPorId);

/**
 * @swagger
 * /categorias:
 *   post:
 *     summary: Crea una nueva categoría
 *     tags: [Categorias]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nombre
 *               - descripcion
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: Frutas
 *               descripcion:
 *                 type: string
 *                 example: Incluye frutas frescas y secas
 *     responses:
 *       201:
 *         description: Categoría creada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Categoria'
 *       400:
 *         description: Información inválida
 */
router.post("/categorias", categoriasController.crear);

/**
 * @swagger
 * /categorias/{id_categoria}:
 *   delete:
 *     summary: Elimina una categoría
 *     tags: [Categorias]
 *     parameters:
 *       - in: path
 *         name: id_categoria
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la categoría a eliminar
 *     responses:
 *       200:
 *         description: Categoría eliminada exitosamente
 *       404:
 *         description: Categoría no encontrada
 */
router.delete("/categorias/:id", categoriasController.eliminar);

/**
 * @swagger
 * /categorias/{id_categoria}:
 *   put:
 *     summary: Actualiza una categoría existente
 *     tags: [Categorias]
 *     parameters:
 *       - in: path
 *         name: id_categoria
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la categoría a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: Verduras
 *               descripcion:
 *                 type: string
 *                 example: Incluye una variedad de verduras frescas
 *     responses:
 *       200:
 *         description: Categoría actualizada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Categoria'
 *       404:
 *         description: Categoría no encontrada
 *       400:
 *         description: Información inválida
 */
router.put("/categorias/:id", categoriasController.actualizar);

export default router;
