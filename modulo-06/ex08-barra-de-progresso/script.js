/*
  Módulo 6 — O DOM
  Exercício 08 — Barra de progresso
  Nível: Intermediário

  Objetivo: Usar style quando o valor é calculado na hora.

  Como fazer: leia cada TODO, resolva um de cada vez e teste no navegador
  antes de passar para o próximo. Console aberto (F12)!
*/

let feitos = 0;
const TOTAL = 11;

const textoFeitos = document.querySelector("#feitos");
const barra = document.querySelector("#barra");

function atualizar() {
  textoFeitos.textContent = feitos;
  barra.style.width = `${(feitos / TOTAL) * 100}%`;
  barra.classList.toggle("completa", feitos === TOTAL);
}

document.querySelector("#concluir").addEventListener("click", () => {
  feitos = Math.min(feitos + 1, TOTAL);
  atualizar();
});

document.querySelector("#zerar").addEventListener("click", () => {
  feitos = 0;
  atualizar();
});

atualizar();
