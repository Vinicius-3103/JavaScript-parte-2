/*
  Módulo 6 — O DOM
  Exercício 06 — Removendo elementos
  Nível: Intermediário

  Objetivo: remove, children e navegação na árvore.

  Como fazer: leia cada TODO, resolva um de cada vez e teste no navegador
  antes de passar para o próximo. Console aberto (F12)!
*/

const lista = document.querySelector("#lista");

const contagem = document.querySelector("#contagem");

function atualizarContagem() {
  contagem.textContent = `Itens restantes: ${lista.children.length}`;
}

document.querySelector("#limpar").addEventListener("click", () => {
  lista.querySelectorAll(".lixo").forEach(item => item.remove());
  atualizarContagem();
});

document.querySelector("#primeiro").addEventListener("click", () => {
  lista.firstElementChild?.remove();
  atualizarContagem();
});

document.querySelector("#ultimo").addEventListener("click", () => {
  lista.lastElementChild?.remove();
  atualizarContagem();
});

atualizarContagem();
