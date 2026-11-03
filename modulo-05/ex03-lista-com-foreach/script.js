/*
  Módulo 5 — Arrays e objetos
  Exercício 03 — Lista com forEach
  Nível: Básico

  Objetivo: Percorrer um array com forEach e gerar HTML.

  Como fazer: leia cada TODO, resolva um de cada vez e teste no navegador
  antes de passar para o próximo. Console aberto (F12)!
*/

const materias = ["Lógica", "HTML e CSS", "JavaScript", "Banco de Dados", "Redes"];
const ol = document.querySelector("#materias");

// TODO 1: Use forEach para criar um <li> para cada matéria dentro de #materias.
// TODO 2: Use o segundo parâmetro do forEach (o índice) para destacar com
//         <strong> a matéria de índice 2.
// TODO 3: Depois do forEach, adicione um último <li> dizendo "Total: 5 matérias"
//         (use materias.length, não escreva 5).

materias.forEach((materia, indice) => {
  if (indice === 2) {
    ol.innerHTML += `<li><strong>${materia}</strong></li>`;
  } else {
    ol.innerHTML += `<li>${materia}</li>`;
  }
});

ol.innerHTML += `<li>Total: ${materias.length} matérias</li>`;