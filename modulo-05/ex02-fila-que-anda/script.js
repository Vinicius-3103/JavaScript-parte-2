/*
  Módulo 5 — Arrays e objetos
  Exercício 02 — Fila que anda
  Nível: Básico

  Objetivo: push, pop, shift e unshift ligados a botões.

  Como fazer: leia cada TODO, resolva um de cada vez e teste no navegador
  antes de passar para o próximo. Console aberto (F12)!
*/

const fila = ["Ana", "Bruno"];

function mostrarFila() {
  document.querySelector("#fila").textContent = fila.join(" → ") || "(vazia)";
}

// TODO 1: "Entrar no fim" adiciona o nome digitado no FIM da fila (push).
// TODO 2: "Prioridade" adiciona no INÍCIO (unshift).
// TODO 3: "Atender próximo" remove o PRIMEIRO (shift) e mostra em #aviso
//         "Atendendo: NOME". Se a fila estiver vazia, mostre "Ninguém na fila".
// TODO 4: Depois de cada ação, chame mostrarFila() e limpe o input.

const input = document.querySelector("#nome");
document.querySelector("#entrar").addEventListener("click", function() {
  const nome = input.value.trim();
  if (nome) {
    fila.push(nome);
    mostrarFila();
    input.value = "";
  }
});

document.querySelector("#prioridade").addEventListener("click", function() {
  const nome = input.value.trim();
  if (nome) {
    fila.unshift(nome);
    mostrarFila();
    input.value = "";
  }
});

document.querySelector("#atender").addEventListener("click", function() {
  if (fila.length > 0) {
    const atendido = fila.shift();
    document.querySelector("#aviso").textContent = `Atendendo: ${atendido}`;
  } else {
    document.querySelector("#aviso").textContent = "Ninguém na fila";
  }
  mostrarFila();
});

