/*
  Módulo 9 — localStorage
  Exercício 09 — Tarefas com filtros
  Nível: Desafio

  Objetivo: Lista completa com objetos, ids, filtros e filtro lembrado.

  Como fazer: leia cada TODO, resolva um de cada vez e teste no navegador
  antes de passar para o próximo. Console aberto (F12)!
*/

// ---- funções utilitárias (seção 9.4 da apostila) ----
function salvar(chave, valor) {
  localStorage.setItem(chave, JSON.stringify(valor));
}

function carregar(chave, valorPadrao) {
  const texto = localStorage.getItem(chave);
  if (texto === null) return valorPadrao;
  try {
    return JSON.parse(texto);
  } catch {
    return valorPadrao;
  }
}
// -------------------------------------------------------

let tarefas = carregar("tarefas", []);       // [{ id, texto, feita }]
let filtro = carregar("filtro", "todas");

// TODO 1: renderizar(): mostra só as tarefas do filtro atual. Cada <li> tem
//         data-id, um <input type="checkbox"> (marcado se feita), um <span>
//         com o texto (textContent!) e um botão "×".
// TODO 2: Marque com a classe "ativo" o botão do filtro atual.
// TODO 3: Submit: adiciona { id: Date.now(), texto, feita: false } (ignore vazio).
// TODO 4: Delegação na lista: checkbox alterna "feita"; "×" remove (filter por id).
// TODO 5: Botões de filtro trocam "filtro" e salvam a escolha.
// TODO 6: Toda mudança: salvar("tarefas", tarefas) e renderizar().
//         Em #resumo: "2 pendente(s) de 5".
