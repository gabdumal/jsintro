let estado = {
  cor: "#000000",
  altura: 0,
  largura: 0,
};

function criaElemento(cor, largura, altura) {
  const eNovo = document.createElement("div");
  eNovo.textContent = `${cor} ${altura} ${largura} ${altura + largura}`;
  eNovo.style = `color: ${cor}`;
  document.body.appendChild(eNovo);
}

document.exm01.addEventListener("submit", submitListener);

function submitListener(event) {
  event.preventDefault();

  estado.cor = document.exm01.cor.value;
  estado.altura = Number(document.exm01.largura.value);
  estado.largura = Number(document.exm01.altura.value);

  criaElemento(estado.cor, estado.altura, estado.largura);

  document.exm01.reset();
}
