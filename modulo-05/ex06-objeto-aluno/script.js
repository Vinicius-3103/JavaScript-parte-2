/*
  Módulo 5 — Arrays e objetos
  Exercício 06 — Objeto aluno
  Nível: Intermediário

  Objetivo: Criar objeto, ler, alterar e adicionar propriedades.

  Como fazer: leia cada TODO, resolva um de cada vez e teste no navegador
  antes de passar para o próximo. Console aberto (F12)!
*/

// TODO 1: Crie o objeto "aluno" com: nome, idade, turma e curso.
// TODO 2: Adicione depois (fora das chaves) a propriedade "email".
// TODO 3: Crie mostrarFicha() que limpa #ficha e, com for...in, cria
//         um <dt> (chave) e um <dd> (valor) para cada propriedade.
// TODO 4: O botão #aniversario aumenta a idade em 1 e chama mostrarFicha().
// DESAFIO: adicione ao objeto um MÉTODO apresentar() que devolve
//          "Sou NOME, da turma TURMA" usando this.

const ficha = document.querySelector("#ficha");
const aniversario = document.querySelector("#aniversario");

const aluno = {
  nome: "João",
  idade: 20,
  turma: "A",
  curso: "Matemática",
  apresentar() {
    return `Sou ${this.nome}, da turma ${this.turma}`;
  }
};

aluno.email = "joao@example.com";
const apresentar = document.querySelector("#apresentar");
apresentar.textContent = aluno.apresentar();

function mostrarFicha() {
  ficha.innerHTML = "";
  for (let chave in aluno) {
    ficha.innerHTML += `<dt>${chave}</dt><dd>${aluno[chave]}</dd>`;
  }
}

aniversario.addEventListener("click", function() {
  aluno.idade += 1;
  mostrarFicha();
});

mostrarFicha();