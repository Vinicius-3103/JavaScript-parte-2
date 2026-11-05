/*
  Módulo 6 — O DOM
  Exercício 04 — classList: liga-desliga
  Nível: Básico

  Objetivo: Usar add, remove, toggle e contains.

  Como fazer: leia cada TODO, resolva um de cada vez e teste no navegador
  antes de passar para o próximo. Console aberto (F12)!
*/

const lampadas = document.querySelectorAll(".lampada");
const status = document.querySelector("#status");

function atualizarStatus() {
  const acesas = [...lampadas].filter(lampada => lampada.classList.contains("acesa")).length;
  status.textContent = `${acesas} lâmpada(s) acesa(s)`;
}

document.querySelector("#b1").addEventListener("click", () => {
  document.querySelector("#l1").classList.toggle("acesa");
  atualizarStatus();
});

document.querySelector("#todas").addEventListener("click", () => {
  lampadas.forEach(lampada => lampada.classList.add("acesa"));
  atualizarStatus();
});

document.querySelector("#nenhuma").addEventListener("click", () => {
  lampadas.forEach(lampada => lampada.classList.remove("acesa"));
  atualizarStatus();
});

atualizarStatus();
