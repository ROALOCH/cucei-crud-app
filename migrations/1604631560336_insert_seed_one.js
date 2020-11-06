module.exports = {
  up:
    "INSERT INTO movies_seed VALUES ('4771df88-a8c9-496d-9db7-41364ed99dea', 'Toy Story 4', 'Hace nueve años, algunos antes de los eventos de Toy Story 3, Bo Peep y Woody tratan de rescatar a Control, el carro a control remoto de Andy, durante una tormenta. Luego de finalizar el rescate, Woody observa como Bo es donada a una nueva dueña, y considera irse con ella, pero luego decide quedarse con Andy al comprender que es un juguete fundamental para su dueño. Años después, un adolescente Andy los dona a Bonnie, una niña más joven, antes de que se vaya a la universidad. Mientras los juguetes disfrutan tener un nuevo dueño, Woody lucha para adaptarse a un ambiente donde no es el favorito como lo fue con Andy, evidenciándose cuando le quita la insignia de sheriff a Woody y se la pone a Jessie, sin siquiera molestarse en darle un rol durante su tiempo de juego.', 5);",
  down: "DELETE FROM movies_seed;",
};
