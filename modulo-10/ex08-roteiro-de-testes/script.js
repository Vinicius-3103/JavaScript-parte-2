/*
  Módulo 10 — Projeto integrador (treinos)
  Exercício 08 — Roteiro de testes
  Nível: Intermediário

  Objetivo: Testar um app pronto e documentar bugs encontrados.

  Como fazer: leia cada TODO, resolva um de cada vez e teste no navegador
  antes de passar para o próximo. Console aberto (F12)!
*/

// Este app tem PELO MENOS 4 bugs escondidos.
// TODO 1: Monte (num comentário aqui embaixo) uma tabela de testes como a da
//         seção 10.6: ação | esperado | resultado. Mínimo 8 testes.
//         Pense em: campo vazio, só espaços, número negativo, F5, texto com <b>.
// TODO 2: Liste os bugs encontrados.
// TODO 3: Corrija os bugs.

let livros = JSON.parse(localStorage.getItem("livros")) || [];

function renderizar() {
  const ul = document.querySelector("#lista");
  ul.innerHTML = livros.map(l => `<li>${l.titulo} (${l.paginas} p.)</li>`).join("");
  const total = livros.reduce((s, l) => s + l.paginas, 0);
  document.querySelector("#total").textContent = total;
}

document.querySelector("#form").addEventListener("submit", (e) => {
  e.preventDefault();
  const titulo = document.querySelector("#titulo").value;
  const paginas = document.querySelector("#paginas").value;
  livros.push({ titulo, paginas });
  renderizar();
});

renderizar();
