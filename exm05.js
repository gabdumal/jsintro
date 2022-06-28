const pessoa = {
  nome: "Fulano",
  idade: 18,
};

// console.log(pessoa);
// console.table(pessoa);
// console.log(pessoa.idade, pessoa.nome);
// console.log(pessoa["idade"], pessoa["nome"]);

pessoa.altura = 1.82;
pessoa["massa"] = 84.3;
console.table(pessoa);

pessoa = {
  nada: "nada",
};
