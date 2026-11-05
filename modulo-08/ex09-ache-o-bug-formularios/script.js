/*
  Módulo 8 — Formulários e validação
  Exercício 09 — Ache o bug: formulários
  Nível: Desafio

  Objetivo: Corrigir erros clássicos de trim, checked, Number e ||.

  Como fazer: leia cada TODO, resolva um de cada vez e teste no navegador
  antes de passar para o próximo. Console aberto (F12)!
*/

// TODO: 5 bugs. Corrija e comente cada um. Comportamento esperado:
// - só espaços no nome conta como vazio;
// - idade vazia ou menor que 14 é erro;
// - "Ano que vem você terá X anos" mostra a soma correta;
// - termos desmarcados bloqueiam o envio;
// - os erros de nome E idade aparecem juntos, não um por vez.

const form = document.querySelector("#form");

function erro(campo, msg) {
  campo.closest(".campo").querySelector(".msg").textContent = msg;
}

function validarNome() {
  const campo = document.querySelector("#nome");
  if (campo.value === "") { erro(campo, "Informe o nome"); return false; }
  erro(campo, ""); return true;
}

function validarIdade() {
  const campo = document.querySelector("#idade");
  if (campo.value < 14) { erro(campo, "Mínimo 14 anos"); return false; }
  erro(campo, ""); return true;
}

form.addEventListener("submit", (e) => {
  if (!validarNome() || !validarIdade()) return;
  if (!document.querySelector("#termos").value) return;

  const idade = document.querySelector("#idade").value;
  document.querySelector("#resultado").textContent = `Ano que vem você terá ${idade + 1} anos.`;
});
