module.exports = {
  up:
    "INSERT INTO movies_seed VALUES ('56d295a1-4c17-4282-8889-2fed83361298', 'Cars 3', 'Después de que Jackson Storm, un nuevo corredor diseñado con alta tecnología, llega a la pista, el público se pregunta cuándo se retirará el ahora veterano y campeón experimentado de siete Copas Pistón, el Rayo McQueen. Éste quiere demostrar que aún no le hace falta retirarse, pero luego de su última carrera de la temporada, un fuerte accidente en la pista (que casi le cuesta la vida) pone al Rayo McQueen al borde de su inminente retiro de las carreras para siempre, sin embargo Cruz Ramírez, una entrenadora de corredores hispana, quiere demostrarle a McQueen que aún puede seguir compitiendo y le enseña a no rendirse ante Jackson Storm y lo ayuda en su reto para seguir en las carreras.', 5);",
  down: "DELETE FROM movies_seed;",
};
