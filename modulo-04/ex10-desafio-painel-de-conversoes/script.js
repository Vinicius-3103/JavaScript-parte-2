/*
  Módulo 4 — Funções
  Exercício 10 — Desafio: painel de conversões
  Nível: Desafio

  Objetivo: Mini-projeto do módulo: funções de cálculo + uma de exibição.

  Como fazer: leia cada TODO, resolva um de cada vez e teste no navegador
  antes de passar para o próximo. Console aberto (F12)!
*/

// TODO 1: Crie três funções de CÁLCULO (com return):
//         celsiusParaF(c), kmParaMilhas(km) (1 km = 0.621371 mi),
//         reaisParaDolar(r) (use a constante COTACAO abaixo).
// TODO 2: Crie UMA função de EXIBIÇÃO mostrar(texto) que escreve em #resultado.
// TODO 3: Faça cada botão chamar a conversão certa com o valor 100 e mostrar
//         algo como "100 °C = 212.00 °F". Dica: use botao.dataset.tipo e um switch.
// DESAFIO: troque o valor fixo 100 por um <input type="number">.

const COTACAO = 5.4; // R$ por US$ (valor fictício)
const VALOR = 100;
const resultado = document.querySelector("#resultado");

function celsiusParaF(c) {
  return c * 9 / 5 + 32;
}

function kmParaMilhas(km) {
  return km * 0.621371;
}

function reaisParaDolar(r) {
  return r / COTACAO;
}

function mostrar(texto) {
  resultado.textContent = texto;
}''

const botoes = document.querySelectorAll("button");
for (let botao of botoes) {
  botao.addEventListener("click", function() {
    const tipo = botao.dataset.tipo;
    let texto;
    switch (tipo) {
      case "celsius":
        texto = `${VALOR} °C = ${celsiusParaF(VALOR).toFixed(2)} °F`;
        break;
      case "km":
        texto = `${VALOR} km = ${kmParaMilhas(VALOR).toFixed(2)} mi`;
        break;
      case "reais":
        texto = `R$ ${VALOR} = $ ${reaisParaDolar(VALOR).toFixed(2)}`;
        break;
    }
    mostrar(texto);
  });
}     

return texto;
