// Ya hemos empaquetado cientos de regalos 🎁… pero a un elfo se le ha olvidado revisar si el regalo, representado por un asterisco *, está dentro de la caja.

// La caja tiene un regalo (*) y cuenta como dentro de la caja si:

// Está rodeada por # en los bordes de la caja.
// El * no está en los bordes de la caja.
// Ten en cuenta entonces que el * puede estar dentro, fuera o incluso no estar. Y debemos devolver true si el * está dentro de la caja y false en caso contrario.

function inBox(box: string[]): boolean {
  const joinedBox = box.join("");

  const asteriskIndex = joinedBox.indexOf("*");

  if (asteriskIndex === -1) {
    return false;
  }

  const width = Math.max(...box.map((row) => row.length));

  const row = Math.floor(asteriskIndex / width);
  const col = asteriskIndex % width;

  const isOnEdge =
    row === 0 || row === box.length - 1 || col === 0 || col === width - 1;

  return !isOnEdge;
}

inBox(["####", "#* #", "#  #", "####"]); // ➞ true

inBox(["#####", "#   #", "#  #*", "#####"]); // ➞ false
