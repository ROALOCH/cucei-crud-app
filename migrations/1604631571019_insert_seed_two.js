module.exports = {
  up:
    "INSERT INTO movies_seed VALUES ('fb7f63e8-2ddd-476d-9e38-08ee63306aba', 'Shrek', 'Shrek es un ogro verde, feo, asqueroso, gruñón y altamente territorial que ama la soledad y que todos estén en su contra, por lo que asusta a los aldeanos que entran al pantano en el que vive. Un día conoce a un burro parlante que huía de su dueña. Shrek intenta alejarlo, pero este insiste en seguirlo sin sentir temor, por lo que le permite pasar una noche en su casa. Esa noche encuentra en su pantano a innumerables criaturas de cuento de hadas exiliadas por Lord Farquaad, un noble enemigo de los cuentos de hadas y acomplejado por su altura. Enojado por la intrusión, decide ir a pedirle a Farquaad que los exilie a otro lugar, llevando en su compañía a Burro, para guiarlo a Duloc, pueblo gobernado por Farquaad.', 5);",
  down: "DELETE FROM movies_seed;",
};
