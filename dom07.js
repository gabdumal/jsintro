console.log("Hello, World!");

// Captura elementos do DOM
const eH1 = document.querySelector("h1");
const eSpans = document.querySelectorAll("span");
const eButtons = document.querySelectorAll("button");

// Guarda componentes necessários
const eA = eSpans[0];
const eB = eSpans[1];
const eSinal = eSpans[2];
const eResultado = eSpans[3];
const eButSoma = eButtons[0];
const eButMult = eButtons[1];

// Adiciona ouvintes
eButSoma.addEventListener("click", handleClickSoma);
eButMult.addEventListener("click", handleClickMultiplicação);

// Gerenciadores
function handleClickSoma() {
  eSinal.textContent = "+";
  eResultado.textContent = soma();
}
function handleClickMultiplicação() {
  eSinal.textContent = "x";
  eResultado.textContent = multiplicacao();
}

// Operações
function soma() {
  // Guarda valores
  const a = Number(eA.textContent);
  const b = Number(eB.textContent);
  return a + b;
}
function multiplicacao() {
  // Guarda valores
  const a = Number(eA.textContent);
  const b = Number(eB.textContent);
  return a * b;
}

// Escreve na saída
eH1.textContent = "DOM03";
