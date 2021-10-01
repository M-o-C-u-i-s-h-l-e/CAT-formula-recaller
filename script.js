const formula = [
  "\\log_{n}\\sqrt[a]{x} = \\frac{\\log_{n}x}{a}",
  "Arithmetic\\ Mean = \\frac{a_{1} + a_{2} + a_{3} + \\ldots + a_{n}}{n}",
  "Geometric\\ Mean = \\sqrt[n]{a_{1} \\times a_{2} \\times a_{3} \\times \\ldots \\times a_{n}}",
  "Harmonic\\ Mean = \\frac{n}{\\frac{1}{a_{1}} + \\frac{1}{a_{2}} + \\frac{1}{a_{3}} + \\ldots + \\frac{1}{a_{n}}}",
];





const lhs = [
  "\\log_{n}\\sqrt[a]{x} = ",
  "Arithmetic\\ Mean = ",
  "Geometric\\ Mean = ",
  "Harmonic\\ Mean = ",
];





function shuffle(array) {
  let currentIndex = array.length, randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
}

const idx = [];
for (let i = 0; i < formula.length; ++i)
  idx.push(i);
shuffle(idx);
