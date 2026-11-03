/*
  Módulo 5 — Arrays e objetos
  Exercício 07 — Array de objetos: catálogo
  Nível: Intermediário

  Objetivo: Renderizar cartões a partir de um array de objetos com map + join.

  Como fazer: leia cada TODO, resolva um de cada vez e teste no navegador
  antes de passar para o próximo. Console aberto (F12)!
*/

const produtos = [
  { nome: "Camiseta", preco: 45, estoque: 12 },
  { nome: "Caneca", preco: 25, estoque: 0 },
  { nome: "Boné", preco: 35, estoque: 5 },
  { nome: "Chaveiro", preco: 8, estoque: 30 },
  { nome: "Moletom", preco: 120, estoque: 0 }
];

// TODO 1: Crie criarCartao(produto) que devolve a STRING de HTML de um cartão
//         com nome, preço e "X em estoque" (ou "Esgotado").
//         Produtos sem estoque recebem também a classe "esgotado".
// TODO 2: Use produtos.map(criarCartao).join("") e coloque no #catalogo.

function criarCartao(produto) {
  const classe = produto.estoque === 0 ? "esgotado" : "";
  const mensagem = produto.estoque === 0 ? "Esgotado" : `${produto.estoque} em estoque`;
  return `
    <div class="card ${classe}">
      <h3>${produto.nome}</h3>
      <p>Preço: R$ ${produto.preco.toFixed(2)}</p>
      <p>${mensagem}</p>
    </div>
  `;
}

document.querySelector("#catalogo").innerHTML = produtos.map(criarCartao).join("");
