/*
  Módulo 5 — Arrays e objetos
  Exercício 01 — Armários numerados
  Nível: Básico

  Objetivo: Acessar itens pelo índice e usar length.

  Como fazer: leia cada TODO, resolva um de cada vez e teste no navegador
  antes de passar para o próximo. Console aberto (F12)!
*/

const fila = ["Ana", "Bruno", "Carla", "Davi", "Elisa", "Fábio"];

// TODO 1: Mostre o PRIMEIRO da fila em #primeiro.
// TODO 2: Mostre o TERCEIRO em #terceiro (cuidado com o índice!).
// TODO 3: Mostre o ÚLTIMO em #ultimo SEM escrever o número 5
//         (use fila.length).
// TODO 4: Mostre quantas pessoas há na fila em #total.
const primeiro = document.querySelector("#primeiro");
const terceiro = document.querySelector("#terceiro");
const ultimo = document.querySelector("#ultimo");
const total = document.querySelector("#total");

primeiro.textContent = fila[0];
terceiro.textContent = fila[2];
ultimo.textContent = fila[fila.length - 1];
total.textContent = fila.length;  

if (fila.length > 0) {
  console.log(`A fila tem ${fila.length} pessoas.`);
} else {
  console.log("A fila está vazia.");
} 

for (let i = 0; i < fila.length; i++) {
  console.log(`Pessoa ${i + 1}: ${fila[i]}`);
} 

