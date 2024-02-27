import PDFDocument from "pdfkit";
import inventarioController from "./inventario_controller.mjs";
import { format } from "date-fns";

const reportesController = {
  generarReporte: async (req, res) => {
    try {
      const inventario = await inventarioController.fetchInventarios();
      // Configura la respuesta para descargar el PDF
      res.setHeader("Content-Type", "application/pdf");
      res.setHeader(
        "Content-Disposition",
        "attachment; filename=reporte_inventario.pdf"
      );

      const doc = new PDFDocument();
      doc.on("data", (chunk) => res.write(chunk));
      doc.on("end", () => res.end());

      agregarTitulo(doc);
      agregarCabeceraTabla(doc);
      agregarFilasTabla(doc, inventario);

      doc.end();
    } catch (error) {
      console.error("Error generando el reporte:", error);
      res.status(500).send("Error al generar el reporte");
    }
  },

  agregarTitulo(doc) {
    doc
      .fillColor("blue")
      .fontSize(25)
      .text("Lista de inventario", { underline: false })
      .moveDown(2);
  },

  agregarCabeceraTabla(doc) {
    const headers = [
      "Producto",
      "Bodega",
      "Stock",
      "Ubicacion",
      "Fecha de entrada",
      "Fecha de salida",
    ];
    const columnWidths = [100, 100, 50, 100, 100, 100];
    const rowHeight = 20;
    let y = doc.y;

    headers.forEach((header, i) => {
      doc
        .fontSize(12)
        .fillColor("black")
        .text(header, 50 + sum(columnWidths, 0, i), y, {
          width: columnWidths[i],
          align: "center",
        });
    });

    y += rowHeight;
    doc
      .strokeColor("green")
      .moveTo(50, y)
      .lineTo(50 + sum(columnWidths, 0, columnWidths.length), y)
      .stroke();
  },

  agregarFilasTabla(doc, inventario) {
    const columnWidths = [100, 100, 50, 100, 100, 100];
    const rowHeight = 20;
    let y = doc.y + rowHeight;

    inventario.forEach((item) => {
      let x = 50;
      doc.fontSize(10).fillColor("black");

      const fechaEntradaFormatted = item.fecha_entrada
        ? format(new Date(item.fecha_entrada), "EEE MMM dd yyyy")
        : "";
      const fechaCaducidadFormatted = item.fecha_caducidad
        ? format(new Date(item.fecha_caducidad), "EEE MMM dd yyyy")
        : "";

      const columns = [
        item.Producto.nombre_producto,
        item.Bodega.nombre_bodega,
        item.stock,
        item.ubicacion_en_bodega,
        fechaEntradaFormatted,
        fechaCaducidadFormatted,
      ];

      columns.forEach((text, i) => {
        doc.text(text, x, y, { width: columnWidths[i], align: "center" });
        x += columnWidths[i];
      });

      y += rowHeight;
      if (y > doc.page.height - 50) {
        doc.addPage();
        y = 50;
      }
    });
  },

  sum(array, start, end) {
    return array.slice(start, end).reduce((acc, val) => acc + val, 0);
  },
};

export default reportesController;
