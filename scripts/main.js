// Complete formulas in Latex form
const formula = [
  "Arithmetic\\ Mean = \\frac{a_{1} + a_{2} + a_{3} + \\ldots + a_{n}}{n}",
  "Geometric\\ Mean = \\sqrt[n]{a_{1} \\times a_{2} \\times a_{3} \\times \\ldots \\times a_{n}}",
  "Harmonic\\ Mean = \\frac{n}{\\frac{1}{a_{1}} + \\frac{1}{a_{2}} + \\frac{1}{a_{3}} + \\ldots + \\frac{1}{a_{n}}}",

  "\\log_{n}n = 1",
  "\\log_{n}1 = 0",
  "\\log_{n}\\text{xy} = \\log_{n}x + \\log_{n}y",
  "\\log_{n}\\left( \\frac{x}{y} \\right) = \\log_{n}x - \\log_{n}y",
  "\\log_{n}x^{a} = a\\ \\log_{n}x",
  "\\log_{n}\\sqrt[a]{x} = \\frac{\\log_{n}x}{a}",
  "\\log_{b}a = \\frac{\\log_{n}a}{\\log_{n}b}",
  "n^{\\log_{n}x} = x",
  "{\\log_{n}n}^{x} = x",
  "\\log_{b}a\\ ^{*}\\ \\log_{a}b = 1",
  "\\log_{b}a = \\frac{1}{\\log_{a}b}",

  "a^{m} \\times a^{n} = a^{m + n}",
  "a^{m} \\times a^{n} \\times a^{p} \\times \\ldots = a^{m + n + p + \\cdots}",
  "\\left( a^{m} \\right)^{n} = a^{\\text{mn}}",
  "a^{m} \\div a^{n} = a^{m - n}",
  "a^{\\frac{p}{q}} = \\sqrt[q]{a^{p}}\\ where\\ a\\ and\\ p\\ are\\ real\\ numbers\\ and\\ q\\ \\neq 0",
  "a^{\\frac{1}{n}} = \\sqrt[n]{a}",
  "a^{- n} = \\frac{1}{a^{n}}",
  "a^{0} = 1\\ where\\ a \\neq 0",
  "(a \\times b)^{m} = a^{m} \\times b^{m}",
  "\\left( \\frac{a}{b} \\right)^{m} = \\frac{a^{m}}{b^{m}}",
];





// LHS of the formulas in Latex form
// Fill this 'lhs' array in the same order as you fill the 'formula' array
const lhs = [
  "Arithmetic\\ Mean = ",
  "Geometric\\ Mean = ",
  "Harmonic\\ Mean = ",

  "\\log_{n}n = ",
  "\\log_{n}1 = ",
  "\\log_{n}\\text{xy} = ",
  "\\log_{n}\\left( \\frac{x}{y} \\right) = ",
  "\\log_{n}x^{a} = ",
  "\\log_{n}\\sqrt[a]{x} = ",
  "\\log_{b}a = ",
  "n^{\\log_{n}x} = ",
  "{\\log_{n}n}^{x} = ",
  "\\log_{b}a\\ ^{*}\\ \\log_{a}b = ",
  "\\log_{b}a = ",

  "a^{m} \\times a^{n} = ",
  "a^{m} \\times a^{n} \\times a^{p} \\times \\ldots = ",
  "\\left( a^{m} \\right)^{n} = ",
  "a^{m} \\div a^{n} = ",
  "a^{\\frac{p}{q}} = ",
  "a^{\\frac{1}{n}} = ",
  "a^{- n} = ",
  "a^{0} = ",
  "(a \\times b)^{m} = ",
  "\\left( \\frac{a}{b} \\right)^{m} = ",
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
