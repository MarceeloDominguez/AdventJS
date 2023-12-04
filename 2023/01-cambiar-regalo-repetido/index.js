// En la fábrica de juguetes del Polo Norte, cada juguete tiene un número de identificación único.
// Sin embargo, debido a un error en la máquina de juguetes, algunos números se han asignado a más de un juguete.
// ¡Encuentra el primer número de identificación que se ha repetido, donde la segunda ocurrencia tenga el índice más pequeño!
// En otras palabras, si hay más de un número repetido, debes devolver el número cuya segunda ocurrencia aparezca primero en la lista.
// Si no hay números repetidos, devuelve -1.

function findFirstRepeated(gifts) {
  //   const seen = {};
  //   const firstRepeated = gifts.find((item) => {
  //     if (seen[item]) return item;
  //     seen[item] = true;
  //   });
  //   return firstRepeated !== undefined ? firstRepeated : -1;

  // const seen = new Set();

  // for (const item of gifts) {
  //   if (seen.has(item)) return item;
  //   seen.add(item);
  // }

  // return -1;

  const firstRepeated = gifts.find(
    (number, index, array) => array.indexOf(number) !== index
  );

  return firstRepeated !== undefined ? firstRepeated : -1;
}

const giftIds = [5, 1, 5, 1];

const result = findFirstRepeated(giftIds);
console.log(result);
