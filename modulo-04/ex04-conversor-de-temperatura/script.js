/*
  Módulo 4 — Funções
  Exercício 04 — Conversor de temperatura
  Nível: Básico

  Objetivo: Arrow functions de uma linha.

  Como fazer: leia cada TODO, resolva um de cada vez e teste no navegador
  antes de passar para o próximo. Console aberto (F12)!
*/

// TODO 1: Crie a ARROW FUNCTION paraFahrenheit = c => ...   (F = C * 9 / 5 + 32)
// TODO 2: Crie a ARROW FUNCTION paraKelvin = c => ...       (K = C + 273.15)
// TODO 3: Para cada valor do array abaixo, adicione uma linha <tr> na #tabela
//         com as três temperaturas.

const temperaturas = [-10, 0, 25, 37, 100];
const tabela = document.querySelector("#tabela");
const paraFahrenheit = c => c * 9 / 5 + 32;
const paraKelvin = c => c + 273.15;

for (let c of temperaturas) {
  tabela.innerHTML += `<tr>
    <td>${c}</td>
    <td>${paraFahrenheit(c).toFixed(2)}</td>
    <td>${paraKelvin(c).toFixed(2)}</td>
  </tr>`;
} 
