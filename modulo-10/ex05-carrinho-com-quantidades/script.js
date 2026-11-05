/*
  Módulo 10 — Projeto integrador (treinos)
  Exercício 05 — Carrinho com quantidades
  Nível: Intermediário

  Objetivo: Dois estados ligados: produtos e itens do carrinho.

  Como fazer: leia cada TODO, resolva um de cada vez e teste no navegador
  antes de passar para o próximo. Console aberto (F12)!
*/

const produtos = [
  { id: 1, nome: "X-burger", preco: 18 },
  { id: 2, nome: "Batata", preco: 10 },
  { id: 3, nome: "Refrigerante", preco: 6 }
];
let carrinho = []; // [{ id, qtd }]
const formatar = v => v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

// TODO 1: Mostre um botão "+ X-burger (R$ 18,00)" por produto (data-id).
// TODO 2: Clicar adiciona ao carrinho: se já existe, qtd++; senão, push({ id, qtd: 1 }).
// TODO 3: Cada linha do carrinho: "2× X-burger — R$ 36,00" e botões − e +.
//         Ao chegar a 0, o item sai do carrinho.
// TODO 4: Total geral em #total.
// TODO 5: Salve o carrinho no localStorage e restaure ao abrir.
