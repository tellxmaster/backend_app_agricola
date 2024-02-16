import path from "path";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API de Compra y Venta de Productos Agrícolas",
      version: "1.0.0",
      description:
        "Esta es una API REST para gestionar una plataforma de compra y venta de productos agrícolas.",
    },
    components: {
      schemas: {
        Proveedor: {
          type: "object",
          properties: {
            id_proveedor: {
              type: "integer",
              format: "int64",
              example: 1,
            },
            nombre: {
              type: "string",
              example: "Proveedor XYZ",
            },
            ubicacion: {
              type: "string",
              example: "Calle Falsa 123, Ciudad",
            },
            contacto: {
              type: "string",
              example: "contacto@proveedorxyz.com",
            },
          },
        },
        Producto: {
          type: "object",
          properties: {
            id_producto: {
              type: "integer",
              format: "int64",
              example: 1,
            },
            nombre: {
              type: "string",
              example: "Manzanas",
            },
            descripcion: {
              type: "string",
              example: "Manzanas rojas y jugosas",
            },
            fecha_cosecha: {
              type: "string",
              format: "date",
              example: "2024-02-15",
            },
            disponibilidad: {
              type: "boolean",
              example: true,
            },
            id_categoria: {
              type: "integer",
              format: "int64",
              example: 1,
            },
            id_proveedor: {
              type: "integer",
              format: "int64",
              example: 1,
            },
          },
        },
        Oferta: {
          type: "object",
          properties: {
            id_oferta: {
              type: "integer",
              format: "int64",
              example: 1,
            },
            cantidad: {
              type: "integer",
              example: 100,
            },
            precio: {
              type: "number",
              format: "float",
              example: 0.99,
            },
            fecha_inicio: {
              type: "string",
              format: "date",
              example: "2024-02-15",
            },
            fecha_fin: {
              type: "string",
              format: "date",
              example: "2024-03-15",
            },
            condiciones: {
              type: "string",
              example: "Descuento por compra en volumen",
            },
            id_producto: {
              type: "integer",
              format: "int64",
              example: 1,
            },
          },
        },
        Categoria: {
          type: "object",
          properties: {
            id_categoria: {
              type: "integer",
              format: "int64",
              example: 1,
            },
            nombre: {
              type: "string",
              example: "Frutas",
            },
            descripcion: {
              type: "string",
              example: "Incluye todo tipo de frutas",
            },
          },
        },
      },
    },
  },
  apis: ["./src/routes/*.mjs"], // Cambia a '*.mjs' si estás utilizando ES modules con esa extensión.
};

export default options;
