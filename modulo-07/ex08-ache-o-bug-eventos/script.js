/*
  Módulo 7 — Eventos
  Exercício 08 — Ache o bug: eventos
  Nível: Intermediário

  Objetivo: Corrigir os erros mais comuns com eventos.

  Como fazer: leia cada TODO, resolva um de cada vez e teste no navegador
  antes de passar para o próximo. Console aberto (F12)!
*/

// TODO: 4 bugs. Corrija e comente cada um. Comportamento esperado:
// - "Pontuar" soma 1 no placar a CADA clique (e não ao carregar a página);
// - cada 👍 alterna sua classe "ativo";
// - buscar mostra "Buscando: termo" SEM recarregar a página.

let pontos = 0;
function pontuar() {
  pontos + 1;
  document.querySelector("#placar").textContent = pontos;
}
document.querySelector("#btn").addEventListener("click", pontuar());

const likes = document.querySelectorAll(".like");
likes.addEventListener("click", (e) => e.target.classList.toggle("ativo"));

document.querySelector("#busca").addEventListener("submit", () => {
  const termo = document.querySelector("#termo").value;
  document.querySelector("#msg").textContent = `Buscando: ${termo}`;
});
