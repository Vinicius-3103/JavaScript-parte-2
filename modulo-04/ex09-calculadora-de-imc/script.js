/*
  Módulo 4 — Funções
  Exercício 09 — Calculadora de IMC
  Nível: Desafio

  Objetivo: Separar funções de cálculo, classificação e exibição.

  Como fazer: leia cada TODO, resolva um de cada vez e teste no navegador
  antes de passar para o próximo. Console aberto (F12)!
*/

// TODO 1: calcularIMC(peso, altura) -> devolve o número.
// TODO 2: classificarIMC(imc) -> "Abaixo do peso" (<18.5), "Peso normal" (<25),
//         "Sobrepeso" (<30) ou "Obesidade".
// TODO 3: criarCartao(nome, peso, altura) -> devolve uma STRING de HTML:
//         <div class="cartao normal">  (classe "normal" só para Peso normal,
//         "alerta" para os outros), com nome, IMC (1 casa) e classificação.
// TODO 4: Gere os 4 cartões abaixo dentro de #cartoes.
// Regra: só criarCartao pode mexer com HTML. As outras só calculam.

const cartoes = document.querySelector("#cartoes");
// Ana: 60 kg, 1.65 m | Beto: 95 kg, 1.75 m | Caio: 48 kg, 1.70 m | Duda: 70 kg, 1.60 m
cartoes.innerHTML = `${criarCartao("Ana", 60, 1.65)}
${criarCartao("Beto", 95, 1.75)}
${criarCartao("Caio", 48, 1.70)}
${criarCartao("Duda", 70, 1.60)}`;

function calcularIMC(peso, altura) {
  return peso / (altura * altura);
}

function classificarIMC(imc) {
  if (imc < 18.5) {
    return "Abaixo do peso";
  } else if (imc < 25) {
    return "Peso normal";
  } else if (imc < 30) {
    return "Sobrepeso";
  } else {
    return "Obesidade";
  }
}

function criarCartao(nome, peso, altura) {
  const imc = calcularIMC(peso, altura);
  const classificacao = classificarIMC(imc);
  const classe = classificacao === "Peso normal" ? "normal" : "alerta";
  return `<div class="cartao ${classe}">
    <h2>${nome}</h2>
    <p>IMC: ${imc.toFixed(1)}</p>
    <p>${classificacao}</p>
  </div>`;
}   
return `<div class="cartao ${classe}">
    <h2>${nome}</h2>
    <p>IMC: ${imc.toFixed(1)}</p>
    <p>${classificacao}</p>
  </div>`;

if (classificacao === "Peso normal") {
  classe = "normal";
} else {
  classe = "alerta";
} 
return `<div class="cartao ${classe}">
    <h2>${nome}</h2>
    <p>IMC: ${imc.toFixed(1)}</p>
    <p>${classificacao}</p>
  </div>`;

  