const path = require("path");
const mysql = require("mysql");
const migration = require("mysql-migrations");

const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
});

migration.init(db, path.join(__dirname, "/migrations"));
