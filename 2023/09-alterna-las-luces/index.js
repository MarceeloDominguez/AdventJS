// Están encendiendo las luces de Navidad 🎄 en la ciudad y, como cada año, ¡hay que arreglarlas!
// Las luces son de dos colores: 🔴 y 🟢 .
// Para que el efecto sea el adecuado, siempre deben estar alternadas. Es decir, si la primera luz es roja, la segunda debe ser verde, la tercera roja, la cuarta verde, etc.
// Nos han pedido que escribamos una función adjustLights que, dado un array de strings con el color de cada luz, devuelva el número mínimo de luces que hay que cambiar para que estén los colores alternos.

// adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢'])
// -> 1 (cambias la cuarta luz a 🔴)

// adjustLights(['🔴', '🔴', '🟢', '🟢', '🔴'])
// -> 2 (cambias la segunda luz a 🟢 y la tercera a 🔴)

// adjustLights(['🟢', '🔴', '🟢', '🔴', '🟢'])
// -> 0 (ya están alternadas)

// adjustLights(['🔴', '🔴', '🔴'])
// -> 1 (cambias la segunda luz a 🟢)

function adjustLights(lights) {
  const green = ["🟢", "🔴"];
  let toggleGreen = 0;
  const red = ["🔴", "🟢"];
  let toggleRed = 0;

  let i = 0;

  for (const light of lights) {
    toggleGreen += green[i % 2] !== light;
    toggleRed += red[i % 2] !== light;
    i++;
  }

  return Math.min(toggleGreen, toggleRed);
}

const result = adjustLights(["🟢", "🔴", "🟢", "🟢", "🟢"]);
console.log(result);
