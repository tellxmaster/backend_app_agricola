// Importar los modelos
import Proveedor from "./proveedor.mjs";
import Producto from "./producto.mjs";
import Oferta from "./oferta.mjs";
import Categoria from "./categoria.mjs";
import CostosDePersonal from './costo-personal.mjs';
import CostosDeLogistica from "./costo-logistica.mjs";
import CostosDeProduccion from "./costo-produccion.mjs";

// Relaciones
Producto.belongsTo(Proveedor, { foreignKey: "id_proveedor" });
Proveedor.hasMany(Producto, { foreignKey: "id_proveedor" });

Producto.belongsTo(Categoria, { foreignKey: "id_categoria" });
Categoria.hasMany(Producto, { foreignKey: "id_categoria" });

Producto.hasMany(Oferta, { foreignKey: "id_producto" });
Oferta.belongsTo(Producto, { foreignKey: "id_producto" });


Producto.belongsToMany(CostosDePersonal, { through: 'Personal_Producto', foreignKey: 'producto_id' });
CostosDePersonal.belongsToMany(Producto, { through: 'Personal_Producto', foreignKey: 'personal_id' });

Producto.hasMany(CostosDeProduccion, {foreignKey: 'id_producto'})
CostosDeProduccion.belongsTo(Producto, {foreignKey:'id_producto'})

// Exportar los modelos con las relaciones establecidas
export { Proveedor, Producto, Oferta, Categoria, CostosDeProduccion,CostosDeLogistica, CostosDePersonal };
