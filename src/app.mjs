import express from 'express';
import bodyParser from 'body-parser';
import sequelize from './database/database.mjs';
import router from './routes/routes.mjs';
import cors from 'cors';
// Configuración de Express
const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(router);

// Establecer conexión a la base de datos y sincronizar modelos
sequelize.authenticate()
  .then(() => {
    console.log('Conexión a la base de datos establecida correctamente');
    return sequelize.sync(); // Sincronizar modelos con la base de datos
  })
  .then(() => {
    console.log('Modelos sincronizados correctamente');
  })
  .catch(err => {
    console.error('Error al conectar a la base de datos:', err);
  });

// Sincroniza los modelos con la base de datos
sequelize.sync()
  .then(() => {
    console.log('Todas las tablas se crearon correctamente');
    
    import('./models/relations.mjs').then(({ default: relations }) => {
      console.log('Relaciones establecidas correctamente');
      console.log('Relaciones establecidas correctamente');
    })
    
    // Inicia el servidor
    const PORT = process.env.PORT || 3001;
    app.listen(PORT, () => {
      console.log(`Servidor ejecutándose en el puerto ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Error al sincronizar las tablas:', err);
  });