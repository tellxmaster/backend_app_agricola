import Proveedor from "../models/proveedor.mjs";


export const obtenerProveedores = async (req, res) => {
    try {
      const proveedores = await Proveedor.findAll();
      res.json(proveedores);
    } catch (error) {
      res.status(500).send(error.message);
    }
  };

export const crearProveedor = async (req, res) => {
  try {
    const proveedor = await Proveedor.create(req.body);
    res.status(201).json(proveedor);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const eliminarProveedor = async (req, res) => {
  const { id } = req.params; // Obtener el ID del producto a eliminar desde los parámetros de la solicitud
  try {
    // Buscar el producto por su ID y eliminarlo
    const proveedorEliminado = await Proveedor.destroy({ where: { id_proveedor: id } });
    if (proveedorEliminado === 0) {
      return res.status(404).json({ message: 'Proveedor no encontrado' });
    }
    res.json({ message: 'Proveedor eliminado correctamente' });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const editarProveedor = async (req, res) => {
  const { id } = req.params; // Obtener el ID del producto a editar desde los parámetros de la solicitud
  const { nombre_proveedor, direccion_proveedor, telefono_proveedor, email_proveedor } = req.body; // Obtener los datos actualizados del producto desde el cuerpo de la solicitud
  try {
    // Buscar el producto por su ID y actualizar sus datos
    const proveedorActualizado = await Proveedor.update(
      { nombre_proveedor, direccion_proveedor, telefono_proveedor, email_proveedor },
      { where: { id_proveedor: id } }
    );
    if (proveedorActualizado[0] === 0) {
      return res.status(404).json({ message: 'Proveedor no encontrado' });
    }
    res.json({ message: 'Proveedor actualizado correctamente' });
  } catch (error) {
    res.status(500).send(error.message);
  }
};
