//En el taller de Santa, un elfo travieso ha estado jugando en la cadena de fabricación de regalos, añadiendo o eliminando un paso no planificado.
//Tienes la secuencia original de pasos en la fabricación original y la secuencia modificada modified que puede incluir un paso extra o faltar un paso.
//Tu tarea es escribir una función que identifique y devuelva el primer paso extra que se ha añadido o eliminado en la cadena de fabricación.
//Si no hay ninguna diferencia entre las secuencias, devuelve una cadena vacía.

//A tener en cuenta:
//Siempre habrá un paso de diferencia o ninguno.
//La modificación puede ocurrir en cualquier lugar de la cadena.
//La secuencia original puede estar vacía

function findNaughtyStep(original, modified) {
  const stepsOriginal = Array.from(original);
  const stepsModifiel = Array.from(modified);

  //   const longerArray =
  //     stepsOriginal.length > stepsModifiel.length ? stepsOriginal : stepsModifiel;
  //   const shorterArray =
  //     stepsModifiel.length > stepsOriginal.length ? stepsOriginal : stepsModifiel;

  //   const [shorterArray, longerArray] = [stepsOriginal, stepsModifiel].sort(
  //     (a, b) => a.length - b.length
  //   );

  const arrays = [stepsOriginal, stepsModifiel];
  arrays.sort((a, b) => a.length - b.length);
  const [shorterArray, longerArray] = arrays;

  const index = longerArray.findIndex((step, i) => step !== shorterArray[i]);

  return index !== -1 ? longerArray[index] : "";
}

const original = "abcd";
const modified = "abcde";
const result = findNaughtyStep(original, modified);
console.log(result);
