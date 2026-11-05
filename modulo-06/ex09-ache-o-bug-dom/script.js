/*
  Módulo 6 — O DOM
  Exercício 09 — Ache o bug: DOM
  Nível: Desafio

  Objetivo: Diagnosticar erros de seleção e inserção lendo o console.

  Como fazer: leia cada TODO, resolva um de cada vez e teste no navegador
  antes de passar para o próximo. Console aberto (F12)!
*/

// Corrigido: #titulo seleciona o elemento pelo id, não pela tag "titulo".
const titulo = document.querySelector("#titulo");
titulo.textContent = "Título novo";

const li = document.createElement("li");
li.textContent = "Item criado";

// Corrigido: querySelectorAll retorna uma lista de notas para percorrer com forEach.
const notas = document.querySelectorAll(".nota");
notas.forEach(nota => {
  // Corrigido: converte o conteúdo de texto em número antes da comparação.
  if (Number(nota.textContent) < 6) nota.classList.add("vermelha");
});

// Corrigido: a lista usa a classe .itens, não o id #itens.
document.querySelector(".itens").append(li);
