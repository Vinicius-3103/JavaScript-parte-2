/*
  Módulo 6 — O DOM
  Exercício 01 — Selecionando elementos
  Nível: Básico

  Objetivo: Praticar querySelector com id, classe, tag e seletores compostos.

  Como fazer: leia cada TODO, resolva um de cada vez e teste no navegador
  antes de passar para o próximo. Console aberto (F12)!
*/

document.querySelector("h1").classList.add("marcado");
document.querySelector(".manchete").classList.add("marcado");
document.querySelectorAll(".manchete")[1].classList.add("marcado");
document.querySelector("#avisos .urgente").classList.add("marcado");
document.querySelector("#avisos p").classList.add("marcado");
console.log(document.querySelectorAll("p").length);
