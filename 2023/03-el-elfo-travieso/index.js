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
