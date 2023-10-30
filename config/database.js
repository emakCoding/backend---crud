/** @format */

import {Sequelize} from "sequelize";

const db = new Sequelize(process.env.PLANETSCALE_DB, process.env.PLANETSCALE_DB_USERNAME, process.env.PLANETSCALE_DB_PASSWORD, {
  host: process.env.PLANETSCALE_DB_HOST,
  dialect: "mysql",
});

export default db;
