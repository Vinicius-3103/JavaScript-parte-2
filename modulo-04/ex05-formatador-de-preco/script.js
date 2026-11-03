/*
  Módulo 4 — Funções
  Exercício 05 — Formatador de preço
  Nível: Intermediário

  Objetivo: Função utilitária reutilizada várias vezes.

  Como fazer: leia cada TODO, resolva um de cada vez e teste no navegador
  antes de passar para o próximo. Console aberto (F12)!
*/

// TODO 1: Crie formatarPreco(valor) que devolve o valor no formato "R$ 24,90".
//         Dica: valor.toFixed(2).replace(".", ",")
// TODO 2: Para cada .preco, leia o número do atributo data-valor
//         (Number(el.dataset.valor)) e escreva o preço formatado dentro do span.
// TODO 3: Some os valores e mostre o total em #total, também formatado.

const precos = document.querySelectorAll(".preco");
const total = document.querySelector("#total"); 

const formatarPreco = valor => `R$ ${valor.toFixed(2).replace(".", ",")}`;

let soma = 0;
for (let el of precos) {
  const valor = Number(el.dataset.valor);
  el.querySelector("span").textContent = formatarPreco(valor);
  soma += valor;
}

total.textContent = formatarPreco(soma);