//En el taller de Santa, los elfos tienen una lista de regalos que desean fabricar y un conjunto limitado de materiales.
//Los regalos son cadenas de texto y los materiales son caracteres.
//Tu tarea es escribir una función que, dada una lista de regalos y los materiales disponibles, devuelva una lista de los regalos que se pueden fabricar.
//Un regalo se puede fabricar si contamos con todos los materiales necesarios para fabricarlo

function manufacture(gifts, materials) {
  const availableMaterials = new Set(materials);

  const manufacturingGifts = gifts.filter((gift) => {
    const availableGifts = new Set(gift);
    const arrayGifts = Array.from(availableGifts);
    const verifyGifts = arrayGifts.every((gift) =>
      availableMaterials.has(gift)
    );
    return verifyGifts;
  });

  return manufacturingGifts;
}

const gifts = ["tren", "oso", "pelota"];
const materials = "tronesa";
const result = manufacture(gifts, materials);
console.log(result);
