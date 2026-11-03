/*
  Módulo 4 — Funções
  Exercício 06 — Desconto em cascata
  Nível: Intermediário

  Objetivo: Uma função chamando outra (composição).

  Como fazer: leia cada TODO, resolva um de cada vez e teste no navegador
  antes de passar para o próximo. Console aberto (F12)!
*/

// TODO 1: Crie aplicarDesconto(preco, porcentagem) que devolve o preço com desconto.
// TODO 2: Crie aplicarCupom(preco) que tira R$ 5,00 fixos, mas nunca devolve
//         menos que zero (dica: Math.max(0, ...)).
// TODO 3: Partindo de 50, aplique 10% de desconto e mostre em #passo1;
//         depois aplique o cupom e mostre em #passo2.
// TODO 4: Crie precoFinal(preco) que chama as duas funções acima e mostre
//         o resultado em #final. Os valores devem bater com os passos.
const passo1 = document.querySelector("#passo1");
const passo2 = document.querySelector("#passo2");
const final = document.querySelector("#final");

function aplicarDesconto(preco, porcentagem) {
  return preco * (1 - porcentagem / 100);
}

function aplicarCupom(preco) {
  return Math.max(0, preco - 5);
}

const precoInicial = 50;
const precoComDesconto = aplicarDesconto(precoInicial, 10);
passo1.textContent = `Preço com desconto: R$ ${precoComDesconto.toFixed(2)}`;

const precoComCupom = aplicarCupom(precoComDesconto);
passo2.textContent = `Preço com cupom: R$ ${precoComCupom.toFixed(2)}`;

function precoFinal(preco) {
  const precoDescontado = aplicarDesconto(preco, 10);
  const precoFinal = aplicarCupom(precoDescontado);
  return precoFinal;
}

final.textContent = `Preço final: R$ ${precoFinal(precoInicial).toFixed(2)}`; 