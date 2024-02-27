import express from "express";
import bodyParser from "body-parser";
import colors from "colors";
import sequelize from "./src/config/database.mjs";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./src/config/swagger.mjs";
import swaggerJsdoc from "swagger-jsdoc";
import routes from "./src/routes/routes.mjs";
import cors from "cors";
// Configuración de Express
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.use(cors());
app.use(express.json());

sequelize
  .authenticate()
  .then(() => {
    console.log(
      "[OK]: Conexión a la base de datos establecida con éxito.".magenta
    );
    return sequelize
      .sync({})
      .then(() => {
        console.log("[OK]: Modelo sincronizado con éxito.".green);
      })
      .catch((error) => {
        console.error("[Error]: Error al sincronizar el modelo:".red, error);
      });
  })
  .then(() => {
    console.log("[OK]: Base de datos sincronizada con éxito.".cyan);
    app.listen(port, () => {
      console.log(
        `[Msg]: Servidor corriendo en ${process.env.HOST_URL}:${port}`.yellow
      );
    });
  })
  .catch((error) =>
    console.error("No se pudo conectar a la base de datos:", error)
  );

// Usa tus rutas
const specs = swaggerJsdoc(swaggerSpec);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
app.use("/", routes);
