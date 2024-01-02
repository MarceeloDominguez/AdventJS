// Estamos programando unos robots llamados giftbot 🤖🎁 que navegan de forma autónoma por los almacenes de regalos.
// Estamos creando una función a la que le pasamos: el almacén 🏬 que deben navegar y los movimientos ↔️ que pueden realizar.
// El almacén se representa como un array de cadenas de texto, donde:

// . significa que hay vía libre.
// * significa que hay un obstáculo.
// ! es la posición inicial del robot.
// Los movimientos son un array de cadenas de texto, donde:

// R mueve al robot una posición a la derecha.
// L mueve al robot una posición a la izquierda.
// U mueve al robot una posición hacia arriba.
// D mueve al robot una posición hacia abajo.
// Hay que tener en cuenta que el robot no puede superar los obstáculos ni los límites del almacén.

// Dados un almacén y los movimientos, debemos devolver el array con la posición final de nuestro robot.

// Ten en cuenta que la store es un array que puede ser de un número de filas que va de 1 a 100, ya que tenemos almacenes de todos los tamaños.
// También que el robot es posible que termine en su posición inicial si no puede moverse o si está dando vueltas.

function autonomousDrive(store, movements) {
  let row;
  let col;
  store = store.map((x) => [...x]);

  // Encuentra la posición inicial del "!"
  for (let i = 0; i < store.length; i++) {
    if (store[i].indexOf("!") !== -1) {
      row = i;
      col = store[i].indexOf("!");
      break;
    }
  }

  // Aplicar los movimientos
  for (let j = 0; j < movements.length; j++) {
    if (movements[j] === "R" && store[row][col + 1] === ".") {
      store[row][col + 1] = "!";
      store[row][col] = ".";
      col += 1;
    } else if (movements[j] === "L" && store[row][col - 1] === ".") {
      store[row][col - 1] = "!";
      store[row][col] = ".";
      col -= 1;
    } else if (
      movements[j] === "U" &&
      store[row - 1] &&
      store[row - 1][col] === "."
    ) {
      store[row - 1][col] = "!";
      store[row][col] = ".";
      row -= 1;
    } else if (
      movements[j] === "D" &&
      store[row + 1] &&
      store[row + 1][col] === "."
    ) {
      store[row + 1][col] = "!";
      store[row][col] = ".";
      row += 1;
    }
  }

  // Convierte el array de arrays a un array de strings
  return store.map((x) => x.join(""));
}

const store = ["..!....", "...*.*."];
const movements = ["R", "R", "D", "L"];

const result = autonomousDrive(store, movements);
console.log(result);
