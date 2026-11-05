/*
  Módulo 10 — Projeto integrador (treinos)
  Exercício 02 — Organizando em blocos
  Nível: Básico

  Objetivo: Reorganizar um script bagunçado nos 8 blocos da seção 10.5.

  Como fazer: leia cada TODO, resolva um de cada vez e teste no navegador
  antes de passar para o próximo. Console aberto (F12)!
*/

// TODO: Este código FUNCIONA, mas está todo misturado.
// Reorganize-o (sem mudar o comportamento) nos blocos:
// 1 DADOS · 2 ESTADO · 3 UTILITÁRIOS · 4 ELEMENTOS · 5 RENDERIZAÇÃO
// 6 AÇÕES · 7 EVENTOS · 8 INÍCIO
// Crie funções beber() e desfazer() no bloco AÇÕES.

document.querySelector("#beber").addEventListener("click", () => {
  copos++;
  localStorage.setItem("copos", JSON.stringify(copos));
  document.querySelector("#copos").textContent = copos;
  if (copos >= META) document.querySelector("#copos").style.color = "seagreen";
});
const META = 8;
let copos = JSON.parse(localStorage.getItem("copos")) || 0;
document.querySelector("#meta").textContent = META;
document.querySelector("#desfazer").addEventListener("click", () => {
  if (copos > 0) copos--;
  localStorage.setItem("copos", JSON.stringify(copos));
  document.querySelector("#copos").textContent = copos;
  document.querySelector("#copos").style.color = copos >= META ? "seagreen" : "";
});
document.querySelector("#copos").textContent = copos;
