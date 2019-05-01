import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();
const dbConnect = new Sequelize({
  database: process.env.DB_NAME,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  timestamps: false,
  dialect: process.env.DB_DIALECT,
  logging: false
});

export default dbConnect;
