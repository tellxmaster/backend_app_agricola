// Importar los modelos
import Proveedor from "./proveedor.mjs";
import Producto from "./producto.mjs";
import Oferta from "./oferta.mjs";
import Categoria from "./categoria.mjs";

// Relaciones
Producto.belongsTo(Proveedor, { foreignKey: "id_proveedor" });
Proveedor.hasMany(Producto, { foreignKey: "id_proveedor" });

Producto.belongsTo(Categoria, { foreignKey: "id_categoria" });
Categoria.hasMany(Producto, { foreignKey: "id_categoria" });

Producto.hasMany(Oferta, { foreignKey: "id_producto" });
Oferta.belongsTo(Producto, { foreignKey: "id_producto" });

// Exportar los modelos con las relaciones establecidas
export { Proveedor, Producto, Oferta, Categoria };
