/*
  Módulo 4 — Funções
  Exercício 07 — Escopo na prática
  Nível: Intermediário

  Objetivo: Entender variável global x local consertando um contador.

  Como fazer: leia cada TODO, resolva um de cada vez e teste no navegador
  antes de passar para o próximo. Console aberto (F12)!
*/

// Este código tem um problema de ESCOPO: o contador nunca passa de 1.
// TODO 1: Rode, clique várias vezes e observe.
// TODO 2: Escreva aqui embaixo, num comentário, POR QUE isso acontece.
// TODO 3: Corrija movendo UMA linha de lugar.
// TODO 4: Crie também um botão "Alguém saiu" (no HTML) que diminui o contador,
//         sem deixar ficar negativo.

function registrarEntrada() {
  let pessoas = 0;
  pessoas = pessoas + 1;
  document.querySelector("#total").textContent = pessoas;
}

document.querySelector("#entrar").addEventListener("click", registrarEntrada);
const sair = document.querySelector("#sair");
sair.addEventListener("click", function() {
  let pessoas = Number(document.querySelector("#total").textContent);
  if (pessoas > 0) {
    pessoas = pessoas - 1;
    document.querySelector("#total").textContent = pessoas;
  }
}); 