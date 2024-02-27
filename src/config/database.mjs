import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

// const config = {
//   env: process.env.NODE_ENV || 'dev',
//   port: process.env.PORT || 3000,
//   dbUser:  process.env.DB_USER,
//   dbPassword:  process.env.DB_PASSWORD,
//   dbHost:  process.env.DB_HOST,
//   dbName:  process.env.DB_NAME,
//   dbPort:  process.env.DB_PORT,
// }

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
    logging: false,
  }
);

export default sequelize;
