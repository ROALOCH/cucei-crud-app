module.exports = {
  up:
    "CREATE TABLE IF NOT EXISTS movies (id VARCHAR(36) PRIMARY KEY, title VARCHAR(150) NOT NULL, synopsis VARCHAR(2000) NOT NULL, rating INT UNSIGNED NOT NULL)",
  down: "DROP TABLE IF EXISTS movies",
};
