/*
  Módulo 7 — Eventos
  Exercício 09 — Galeria clicável
  Nível: Desafio

  Objetivo: Juntar createElement, delegação e classList numa galeria.

  Como fazer: leia cada TODO, resolva um de cada vez e teste no navegador
  antes de passar para o próximo. Console aberto (F12)!
*/

const fotos = [
  { id: 10, legenda: "Floresta" },
  { id: 20, legenda: "Mesa de trabalho" },
  { id: 29, legenda: "Montanhas" },
  { id: 42, legenda: "Café" }
];
const url = (id, w, h) => `https://picsum.photos/id/${id}/${w}/${h}`;
let atual = 0; // índice da foto exibida

// TODO 1: Crie as miniaturas (createElement("img"), classe "mini",
//         data-indice com o índice) dentro de #miniaturas. Use url(id, 160, 100).
// TODO 2: Crie mostrar(indice): troca o src de #principal (url(id, 800, 500)),
//         a legenda, e marca só a miniatura certa com a classe "ativa".
// TODO 3: Delegação em #miniaturas: clicar numa miniatura chama mostrar().
// TODO 4: ◀ e ▶ navegam; depois da última volta para a primeira (e vice-versa).
//         Dica: (atual + 1) % fotos.length
// TODO 5: Chame mostrar(0) no início.
