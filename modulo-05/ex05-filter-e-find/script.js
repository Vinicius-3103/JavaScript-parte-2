/*
  Módulo 5 — Arrays e objetos
  Exercício 05 — filter e find
  Nível: Intermediário

  Objetivo: Filtrar e encontrar itens com condições.

  Como fazer: leia cada TODO, resolva um de cada vez e teste no navegador
  antes de passar para o próximo. Console aberto (F12)!
*/

const notas = [5.5, 7, 10, 4, 8.5, 10, 6];
document.querySelector("#todas").textContent = notas.join(" | ");

// TODO 1: Com filter, mostre as notas aprovadas em #aprovadas.
// TODO 2: Com find, mostre a POSIÇÃO (findIndex) da primeira nota 10 em #dez.
// TODO 3: Com find, procure uma nota acima de 11. O que find devolve?
//         Mostre "Nenhuma" em #impossivel quando não achar.
// TODO 4: Num comentário, explique a diferença entre o que filter e find devolvem.
filter = notas.filter(nota => nota >= 6);
document.querySelector("#aprovadas").textContent = filter.join(" | ");

const posicao = notas.findIndex(nota => nota === 10);
document.querySelector("#dez").textContent = posicao;

const acimaDeOnze = notas.find(nota => nota > 11);
document.querySelector("#impossivel").textContent = acimaDeOnze ? acimaDeOnze : "Nenhuma";

// A diferença entre filter e find é que filter devolve um array com todos os elementos que atendem a condição, enquanto find devolve apenas o primeiro elemento que atende a condição (ou undefined se nenhum for encontrado).