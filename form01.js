function criaElemento(cor, largura, altura) {
  const eNovo = document.createElement("div");
  eNovo.textContent = `${cor} ${altura} ${largura} ${altura + largura}`;
  document.body.appendChild(eNovo);
}

document.exm01.addEventListener("submit", submitListener);

function submitListener(event) {
  event.preventDefault();
  criaElemento(
    document.exm01.cor.value,
    Number(document.exm01.largura.value),
    Number(document.exm01.altura.value)
  );

  document.exm01.reset();
}
