import { Sequelize } from "sequelize";
import 'dotenv/config';

const connection = new Sequelize(process.env.DATABASE, process.env.USER, process.env.PASSWORD, {
  host: '44.205.33.67',
  dialect: 'mysql' 
});

export default connection;