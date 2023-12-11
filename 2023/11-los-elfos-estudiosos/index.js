// En el taller de Santa, los elfos aman los acertijos 🧠. Este año, han creado uno especial: un desafío para formar un palíndromo navideño.
// Un palíndromo es una palabra que se lee igual hacia adelante y hacia atrás.
// Los elfos quieren saber si es posible formar un palíndromo haciendo, como mucho, un intercambio de letras.
// Crea una función getIndexsForPalindrome que reciba una cadena de caracteres y devolverá:

// Si ya es un palíndromo, un array vacío.
// Si no es posible, null.
// Si se puede formar un palíndromo con un cambio, un array con las dos posiciones (índices) que se deben intercambiar para poder crearlo.

// getIndexsForPalindrome('anna') // []
// getIndexsForPalindrome('abab') // [0, 1]
// getIndexsForPalindrome('abac') // null
// getIndexsForPalindrome('aaaaaaaa') // []
// getIndexsForPalindrome('aaababa') // [1, 3]
// getIndexsForPalindrome('caababa') // null

// Si se puede formar el palíndromo con diferentes intercambios, siempre se debe devolver el primero que se encuentre.

function getIndexsForPalindrome(word) {
  const reversed = word.split("").reverse().join("");

  if (word === reversed) return [];

  const chars = word.split("");

  for (let i = 0; i < chars.length; i++) {
    if (chars[i] !== chars[chars.length - 1 - i]) {
      for (let j = 0; j < word.length; j++) {
        if (
          chars[j] === chars[chars.length - 1 - i] &&
          j !== chars.length - 1 - i
        ) {
          let change = chars[i];
          chars[i] = chars[j];
          chars[j] = change;
          if (chars.join("") === chars.slice().reverse().join("")) {
            return i < j ? [i, j] : [j, i];
          } else {
            chars[j] = chars[i];
            chars[i] = change;
          }
        }
      }
    }
  }

  return null;
}

const result = getIndexsForPalindrome("abab");
console.log(result);
