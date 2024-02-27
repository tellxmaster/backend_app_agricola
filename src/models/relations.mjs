import Producto from "./productos.mjs";
import Proveedor from "./proveedor.mjs";
import Bodega from "./bodega.mjs";
import TipoBodega from "./tipo_bodega.mjs";
import ResponsableBodega from "./responsable_bodega.mjs";
import Inventario from "./inventario.mjs";
  // Asociaciones
  Producto.belongsTo(Proveedor, {foreignKey: 'id_proveedor'});
  Proveedor.hasMany(Producto, {foreignKey: 'id_proveedor'});
  
  Inventario.belongsTo(Producto, {foreignKey: 'id_producto'});
  Producto.hasMany(Inventario, {foreignKey: 'id_producto'});
  
  Inventario.belongsTo(Bodega, {foreignKey: 'id_bodega'});
  Bodega.hasMany(Inventario, {foreignKey: 'id_bodega'});
  
  Bodega.belongsTo(TipoBodega, {foreignKey: 'id_tipo_bodega'});
  TipoBodega.hasMany(Bodega, {foreignKey: 'id_tipo_bodega'});
  
  Bodega.belongsTo(ResponsableBodega, {foreignKey: 'id_responsable_bodega'});
  ResponsableBodega.hasMany(Bodega, {foreignKey: 'id_responsable_bodega'});

  export {Producto,
    Proveedor,
    TipoBodega,
    ResponsableBodega,
    Bodega,
    Inventario};
