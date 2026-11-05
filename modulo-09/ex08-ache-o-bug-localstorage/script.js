/*
  Módulo 9 — localStorage
  Exercício 08 — Ache o bug: localStorage
  Nível: Intermediário

  Objetivo: Corrigir os erros de JSON, null e esquecimento de salvar.

  Como fazer: leia cada TODO, resolva um de cada vez e teste no navegador
  antes de passar para o próximo. Console aberto (F12)!
*/

// TODO: 3 bugs. Corrija e comente cada um. Esperado:
// - funciona na PRIMEIRA visita (sem nada salvo);
// - os itens continuam após F5;
// - salvos como array JSON de verdade (confira no DevTools).

let compras = JSON.parse(localStorage.getItem("compras"));

function renderizar() {
  const ul = document.querySelector("#lista");
  ul.innerHTML = "";
  compras.forEach(c => {
    const li = document.createElement("li");
    li.textContent = c;
    ul.append(li);
  });
}

document.querySelector("#add").addEventListener("click", () => {
  const campo = document.querySelector("#item");
  if (campo.value.trim() === "") return;
  compras.push(campo.value.trim());
  campo.value = "";
  renderizar();
});

function salvar() {
  localStorage.setItem("compras", compras);
}

renderizar();
