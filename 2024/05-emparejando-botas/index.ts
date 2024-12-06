// Los elfos 🧝🧝‍♂️ de Santa Claus han encontrado un montón de botas mágicas desordenadas en el taller. Cada bota se describe por dos valores:

// type indica si es una bota izquierda (I) o derecha (R).
// size indica el tamaño de la bota.
// Tu tarea es ayudar a los elfos a emparejar todas las botas del mismo tamaño que tengan izquierda y derecha. Para ello, debes devolver una lista con los pares disponibles después de emparejar las botas.

// ¡Ten en cuenta que puedes tener más de una zapatilla emparejada del mismo tamaño!

type Shoe = {
  type: "I" | "R";
  size: number;
};

function organizeShoes(shoes: Shoe[]): number[] {
  const organized = new Map<number, { I: number; R: number }>();

  shoes.forEach(({ type, size }) => {
    if (!organized.has(size)) {
      organized.set(size, { I: 0, R: 0 });
    }
    organized.get(size)![type]++;
  });

  const organizedShoes = Array.from(organized.entries()).flatMap(
    ([size, { I, R }]) => Array(Math.min(I, R)).fill(size)
  );

  return organizedShoes;
}

const shoes = [
  { type: "I", size: 38 },
  { type: "R", size: 38 },
  { type: "R", size: 42 },
  { type: "I", size: 41 },
  { type: "I", size: 42 },
];

organizeShoes(shoes);
// [38, 42]
