// Importar los modelos
import Proveedor from "./proveedor.mjs";
import Producto from "./producto.mjs";
import Oferta from "./oferta.mjs";
import Categoria from "./categoria.mjs";
import Pedido from "./pedido.mjs";
import Empresa from "./empresa.mjs";
import CostosDePersonal from "./costo-personal.mjs";
import CostosDeLogistica from "./costo-logistica.mjs";
import CostosDeProduccion from "./costo-produccion.mjs";
import Bodega from "./bodega.mjs";
import TipoBodega from "./tipo_bodega.mjs";
import ResponsableBodega from "./responsable_bodega.mjs";
import Inventario from "./inventario.mjs";

// Relaciones
Producto.belongsTo(Proveedor, { foreignKey: "id_proveedor" });
Proveedor.hasMany(Producto, { foreignKey: "id_proveedor" });

Producto.belongsTo(Categoria, { foreignKey: "id_categoria" });
Categoria.hasMany(Producto, { foreignKey: "id_categoria" });

Producto.hasMany(Oferta, { foreignKey: "id_producto" });
Oferta.belongsTo(Producto, { foreignKey: "id_producto" });

Empresa.hasMany(Pedido, { foreignKey: "id_empresa" });
Pedido.belongsTo(Empresa, { foreignKey: "id_empresa" });

Producto.hasMany(Pedido, { foreignKey: "id_producto" });
Pedido.belongsTo(Producto, { foreignKey: "id_producto" });

Oferta.hasMany(Pedido, { foreignKey: "id_oferta" });
Pedido.belongsTo(Oferta, { foreignKey: "id_oferta" });

Inventario.belongsTo(Producto, { foreignKey: "id_producto" });
Producto.hasMany(Inventario, { foreignKey: "id_producto" });

Inventario.belongsTo(Bodega, { foreignKey: "id_bodega" });
Bodega.hasMany(Inventario, { foreignKey: "id_bodega" });

Bodega.belongsTo(TipoBodega, { foreignKey: "id_tipo_bodega" });
TipoBodega.hasMany(Bodega, { foreignKey: "id_tipo_bodega" });

Bodega.belongsTo(ResponsableBodega, { foreignKey: "id_responsable_bodega" });
ResponsableBodega.hasMany(Bodega, { foreignKey: "id_responsable_bodega" });

Producto.belongsToMany(CostosDePersonal, {
  through: "Personal_Producto",
  foreignKey: "producto_id",
});
CostosDePersonal.belongsToMany(Producto, {
  through: "Personal_Producto",
  foreignKey: "personal_id",
});

Producto.hasMany(CostosDeProduccion, { foreignKey: "id_producto" });
CostosDeProduccion.belongsTo(Producto, { foreignKey: "id_producto" });

// Exportar los modelos con las relaciones establecidas
export {
  Proveedor,
  Producto,
  Oferta,
  Categoria,
  CostosDeProduccion,
  CostosDeLogistica,
  CostosDePersonal,
  Pedido,
  Empresa,
  TipoBodega,
  ResponsableBodega,
  Bodega,
  Inventario,
};
