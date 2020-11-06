require("dotenv").config();
const path = require("path");
const mysql = require("mysql");
const express = require("express");
const bodyParser = require("body-parser");

const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
});

const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname + "/client/build");

const app = express();

app.listen(port);
app.use(express.json());
app.use(express.static(publicPath));
app.use(bodyParser.urlencoded({ extended: true }));

// SELECT ALL MOVIES
app.get("/api/movies", (req, res) => {
  const query = "SELECT * FROM movies;";
  db.query(query, (err, result) => {
    err ? res.sendStatus(500) : res.send(result);
  });
});

// SELECT ALL MOVIES FROM SEED
app.get("/api/movies/seed", (req, res) => {
  const query = "INSERT INTO movies SELECT * FROM movies_seed;";
  db.query(query, (err, result) => {
    err ? res.sendStatus(500) : res.sendStatus(200);
  });
});

// SELECT BY ID
app.get("/api/movie/:id", (req, res) => {
  const id = req.params.id;
  const query = "SELECT * FROM movies WHERE id = (?);";

  db.query(query, [id], (err, result) => {
    err ? res.sendStatus(500) : res.send(result);
  });
});

// INSERT MOVIE
app.post("/api/movie", (req, res) => {
  const { id, title, synopsis, rating } = req.body;
  const query =
    "INSERT INTO movies (id, title, synopsis, rating) VALUES (?,?,?,?);";

  db.query(query, [id, title, synopsis, rating], (err, result) => {
    err ? res.sendStatus(500) : res.sendStatus(200);
  });
});

// UPDATE MOVIE
app.post("/api/movie/update/:id", (req, res) => {
  const id = req.params.id;
  const { title, synopsis, rating } = req.body;
  const query =
    "UPDATE movies SET title=(?), synopsis=(?), rating=(?) WHERE id=(?);";

  db.query(query, [title, synopsis, rating, id], (err, result) => {
    err ? res.sendStatus(500) : res.sendStatus(200);
  });
});

// DELETE MOVIE
app.post("/api/movie/delete/:id", (req, res) => {
  const id = req.params.id;
  const query = "DELETE FROM movies WHERE id = (?);";

  db.query(query, [id], (err, result) => {
    err ? res.sendStatus(500) : res.sendStatus(200);
  });
});

// SERVE HEROKU
app.get("/", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

// SERVE INDEX
app.get("*", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

console.log(`Servidor corriendo en puerto ${port}`);
