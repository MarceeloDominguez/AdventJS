// Santa está experimentando con nuevos diseños de regalos y necesita tu ayuda para visualizarlos en 3D.
// Tu tarea es escribir una función que, dado un tamaño n (entero), genere un dibujo de un regalo en 3D utilizando caracteres ASCII.
// Las líneas de los regalos se dibujan con # y las caras con el símbolo que nos pasan como parámetro:

// drawGift(4, '+')

/*
   ####
  #++##
 #++#+#
####++#
#++#+#
#++##
####
*/

// drawGift(5, '*')
/*
    #####
   #***##
  #***#*#
 #***#**#
#####***#
#***#**#
#***#*#
#***##
#####
*/

// drawGift(1, '^')
/*
#
*/

// Importante: Nos han dicho que siempre hay que dejar un salto de línea al final del dibujo.
// Nota: Ten en cuenta que, en los tests, la primera línea se ve empujada por el caracter ".

function drawGift(size, symbol) {
  if (size === 1) return "#\n";

  let gift = "";
  const maxLength = size * 2 - 1;
  const upperBorder = " ".repeat(maxLength - size) + "#".repeat(size);
  let upperPlane = "";
  const middleBorder = "#".repeat(size) + symbol.repeat(size - 2) + "#";
  let lowerPlane = "";
  const lowerBorder = "#".repeat(size);

  for (let i = 1, j = size - 2; i <= size - 2; i++, j--) {
    const repBlanks = " ".repeat(maxLength - size - i);
    const edge1 = "#";
    const leftRepSymbol = symbol.repeat(size - 2);
    const edge2 = "#";
    const upperRightRepSymbol = symbol.repeat(i - 1);
    const lowerRightRepSymbol = symbol.repeat(j - 1);
    const edge3 = "#\n";
    const currentLine = repBlanks + edge1 + leftRepSymbol + edge2;
    upperPlane += currentLine + upperRightRepSymbol + edge3;
    lowerPlane += currentLine.trim() + lowerRightRepSymbol + edge3;
  }

  gift += upperBorder + "\n";
  gift += upperPlane;
  gift += middleBorder + "\n";
  gift += lowerPlane;
  gift += lowerBorder + "\n";

  return gift;
}

const result = drawGift(3, "+");
console.log(result);
