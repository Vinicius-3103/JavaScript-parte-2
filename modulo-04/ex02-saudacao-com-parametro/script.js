/*
  Módulo 4 — Funções
  Exercício 02 — Saudação com parâmetro
  Nível: Básico

  Objetivo: Usar parâmetros e template strings.

  Como fazer: leia cada TODO, resolva um de cada vez e teste no navegador
  antes de passar para o próximo. Console aberto (F12)!
*/

// TODO 1: Crie a função saudar(nome) que DEVOLVE (return) a frase
//         "Olá, NOME! Que bom te ver por aqui."
// TODO 2: Chame saudar() para 3 colegas da turma e adicione cada frase
//         como um <li> dentro de #lista.
//         Dica: lista.innerHTML += `<li>${saudar("Ana")}</li>`;
// TODO 3: Dê um valor padrão ao parâmetro (nome = "visitante") e teste saudar().
function saudar(nome){
  return `Olá, ${nome} ! Que bom te ver por aqui.`;
}

const lista = document.querySelector("#lista");

lista.innerHTML += `<li>${saudar("Ana")}</li>`;
lista.innerHTML += `<li>${saudar("Vinicius")}</li>`;
lista.innerHTML += `<li>${saudar("Eliã")}</li>`;

console.log(saudar());