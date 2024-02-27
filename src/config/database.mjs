import { Sequelize } from 'sequelize';

// Configuración de la base de datos
const sequelize = new Sequelize('produccion', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

sequelize.authenticate()
  .then(() => {
    console.log('Conexión a la base de datos establecida correctamente');
    // Aquí puedes cargar tus datos
  })
  .catch(err => {
    console.error('Error al conectar a la base de datos:', err);
  });

// Sincronizar modelos con la base de datos

export default sequelize;
