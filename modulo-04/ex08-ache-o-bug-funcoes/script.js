/*
  Módulo 4 — Funções
  Exercício 08 — Ache o bug: funções
  Nível: Intermediário

  Objetivo: Encontrar e corrigir erros comuns com funções.

  Como fazer: leia cada TODO, resolva um de cada vez e teste no navegador
  antes de passar para o próximo. Console aberto (F12)!
*/

// TODO: Encontre e corrija os 4 bugs. Ao lado de cada correção, escreva
//       um comentário explicando o erro. Resultado esperado:
//       r1 = 25 | r2 = 12 | r3 = Olá, Bia! | r4 = true

// Bug 1
function quadrado(n) {
  return n * n;
}
document.querySelector("#r1").textContent = quadrado(5);

// Bug 2
const somar = (a, b) => { return a + b };
document.querySelector("#r2").textContent = somar(5, 7);

// Bug 3
function saudar(nome) {
  return `Olá, ${nome}!`;
}
document.querySelector("#r3").textContent = saudar("Bia");

// Bug 4
function ehPar(numero) {
  return numero % 2 === 0;  
  console.log("verificado");
}
document.querySelector("#r4").textContent = ehPar(10);
