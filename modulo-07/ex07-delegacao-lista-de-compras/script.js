/*
  Módulo 7 — Eventos
  Exercício 07 — Delegação: lista de compras
  Nível: Intermediário

  Objetivo: Um ouvinte no pai, e.target e closest.

  Como fazer: leia cada TODO, resolva um de cada vez e teste no navegador
  antes de passar para o próximo. Console aberto (F12)!
*/

const lista = document.querySelector("#lista");

// TODO 1: #add cria um novo <li> igual aos de cima (use createElement para o
//         span com textContent!) e adiciona na lista. Ignore texto vazio.
// TODO 2: Coloque UM ÚNICO ouvinte de clique no #lista (delegação):
//         - clicou num .remover -> remove o <li> inteiro (closest("li"));
//         - clicou num <span>   -> alterna a classe "comprado" no <li>.
// TODO 3: Teste com itens NOVOS. Funciona? Explique num comentário por quê.
// DESAFIO: permita adicionar apertando Enter no input.
