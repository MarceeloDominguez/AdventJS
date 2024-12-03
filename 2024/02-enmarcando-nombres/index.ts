// Santa Claus 🎅 quiere enmarcar los nombres de los niños buenos para decorar su taller 🖼️, pero el marco debe cumplir unas reglas específicas. Tu tarea es ayudar a los elfos a generar este marco mágico.

// Reglas:

// Dado un array de nombres, debes crear un marco rectangular que los contenga a todos.
// Cada nombre debe estar en una línea, alineado a la izquierda.
// El marco está construido con * y tiene un borde de una línea de ancho.
// La anchura del marco se adapta automáticamente al nombre más largo más un margen de 1 espacio a cada lado.
// Ejemplo de funcionamiento:

// createFrame(['aa', 'bbb', 'cccc'])

// Resultado esperado:
// ********
// * aa   *
// * bbb  *
// * cccc *
// ********

function createFrame(names: string[]): string {
  const maxNameLength = Math.max(...names.map((name) => name.length));
  const border = "*".repeat(maxNameLength + 4);
  const framedNames = names.map((name) => {
    const padding = " ".repeat(maxNameLength - name.length);
    return `* ${name}${padding} *`;
  });

  return [border, ...framedNames, border].join("\n");
}
