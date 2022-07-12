// Captura elementos do DOM
const dispNum = document.querySelector("p#displayedNumber");
const buttons = document.querySelectorAll("button");
const lists = document.querySelectorAll("ul");

// Guarda elementos necessários
const evenButton = buttons[0];
const oddButton = buttons[1];
const evenList = lists[0];
const oddList = lists[1];

// Adiciona ouvintes
evenButton.addEventListener("click", function (event) {
  const dispNumVal = dispNum.textContent;
  insertListItem(evenList, dispNumVal);
  updateDisplayedNumber();
});
oddButton.addEventListener("click", function (event) {
  const dispNumVal = dispNum.textContent;
  insertListItem(oddList, dispNumVal);
  updateDisplayedNumber();
});

// Operações
function insertListItem(list, value) {
  const listItem = document.createElement("li");
  listItem.textContent = value;
  list.appendChild(listItem);
}

function updateDisplayedNumber() {
  const newValue = Math.floor(Math.random() * 10);
  dispNum.textContent = newValue;
}
