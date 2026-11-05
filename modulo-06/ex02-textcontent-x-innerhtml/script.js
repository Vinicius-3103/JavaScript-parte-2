/*
  Módulo 6 — O DOM
  Exercício 02 — textContent x innerHTML
  Nível: Básico

  Objetivo: Ver na prática a diferença e o risco de XSS.

  Como fazer: leia cada TODO, resolva um de cada vez e teste no navegador
  antes de passar para o próximo. Console aberto (F12)!
*/

const campo = document.querySelector("#recado");
const mural = document.querySelector("#mural");

document.querySelector("#comText").addEventListener("click", () => {
  mural.textContent = campo.value;
});

document.querySelector("#comHTML").addEventListener("click", () => {
  const recadoSeguro = campo.value.replace(/[&<>"']/g, caractere => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[caractere]);
  mural.innerHTML = `<strong>Recado:</strong> ${recadoSeguro}`;
});

// textContent mostra o valor como texto; innerHTML interpreta a marcação confiável.
// Para texto digitado pelo usuário, prefira textContent para evitar injeção de HTML.
